// imports
const DashConnection = require('./dashConnection.service');
const debug = require('debug')('server:debug');
const DPNSDocument = require('./dataDocument.model.js');


/**
 * DashPlatformUser class - represents a registered Dash Platform Username
 * @class DashPlatformUser
 * @property {string} id Unique id fopr the user record - the id of the DPNS document which registered the name
 * @property {string} name The registered username
 * @property {string} identityId identityId  associated with the username
 * @property {Object} identity full identity object of the identityId
 * @property {string} publicKey private Key Associated wwith the user identity
 * @property {string} privateKey private Key Associated wwith the user identity
 */
module.exports = class DashPlatformUser {
    /**
     *
     * @constructs DashPlatformUser
     */
    constructor() {
        debug(`Creating new user`);
    }
    /**
     * Finds the registered username on the network
     * @static DashPlatformUser#find
     * @param {string|Object|Array<{string}|{Object}>} nameToFind Either:
     * For a single user query,either
     * - a single string containing a username, or
     * - an single object with properties of `name` and `options` to apply to the query for that user
     * OR For a multiple user query
     * - an array with a combination of the above
     * @param {Object} options Optional dashjs client. If the object is not passed it will be constructed by the function.
     * 
     */
    static async find(nameToFind, options) {
        /* options:
            @param  {(0|1|2)} returnType
        */


        try {

            debug(`options: ${options}`);
            if (options == undefined) options = {};
            debug(`options now: ${options}`);


            /*
            if(!returnType){
                debug(`returnType was not passed as a parameter`); 
                throw new Error('enum parameter returnType is required.');
            }
            */
            const returnType = options.returnType || this.returnTypes.OBJECT;

            //options.returnAllRecords
            //If this option is set to true, the full document history for each name is returned in an array
            // If false (default) only the current record / registration is returned as an object
            /*
            NOTE: CURRENTLY DOMAIN TRANSFERS ARE NOT PERMITTED, THERE SHOULD ONLY EVER BE ONE RECORED RETURNED
            THERE IS CURRENTLY NO MEANS OF ORDERING RECORDS BY TIMESTAMP, SO BY DEFAULT DPNS DOCUMENTS ARE RETURNED
            AS AN ARRAY AND THE FIRST ELEMENT IS RETRUNED AS THE RESULT OBJECT
            */

            const returnAllRecords = options.returnAllRecords || false;

            /*
            if (!nameToFind) {
                debug(`nameToFind was not passed as a parameter`);
                throw new Error('parameter nameToFind is required. Please supply a username to find');
            }
             debug(`Searching for username: ${nameToFind}`);
            */


            //if the connection object hasn't been passed, then create one
            /*
            if (!client) {
                debug(`client is undefined, createing new client`);
                //client = new DashConnection('test')

            }
            */
            const connOptions = options.connection_options || {};


            //TODO : wallet for mnemonic
            const client = options.client ||
                new DashConnection(connOptions).client

            //const client = connection.client;
            debug(`client: ${client}`);
            debug(`Client is ready...`);

            console.dir(client);

            let clientHasMnemonic = false;

            if (client.options.wallet != undefined) {
                if (client.options.wallet.mnemonic != undefined) {
                    clientHasMnemonic = true;
                }
            }
            debug(`Client passed with a mnemonic?: ${clientHasMnemonic} `);


            //look for single string, single object, or array
            let arrQuery = [];
            let multiUserQuery = false;
            // array to store queries which are objects (have options)
            let arrUsersWithOptions = [];

            switch (typeof nameToFind) {
                case 'string':
                    //single string
                    arrQuery.push(nameToFind)
                    break;
                case 'object':
                    if (Array.isArray(nameToFind)) {
                        multiUserQuery = true
                        //?? if the user passes in an array they get array back even if a single element
                        //if (arrQuery.length > 1) multiUserQuery = true;

                        //map array to pull out strings and objects with options
                        arrQuery = nameToFind.map(n => {
                            if (typeof n == 'object') {
                                //and push to array of queries with options
                                arrUsersWithOptions.push(n);
                                return n.name;


                            }
                            else if (typeof n == 'string') {
                                return n;
                            }
                        })

                    }
                    else {
                        //single object - push name to arrQuery
                        arrQuery.push(nameToFind.name);
                        arrUsersWithOptions.push(nameToFind);
                    }
                    break;

            }

            const processUserOptions = arrUsersWithOptions.length > 0;
            debug(`array of queries with options: ${arrUsersWithOptions}`);
            //only current user option is for returnPrivateKey
            // TODO: refine / refactor
            // throw error of no mnmonic
            if (processUserOptions && !clientHasMnemonic) throw new Error('user options are not valid. options.returnPrivateKey requires a mnemonic to be supplied')

            //get a map of the usernames to find privcate key for 
            let arrFindPrivateKey = arrUsersWithOptions.map(f => {
                if (f.options.returnPrivateKey) return f.name;
            })

            if (processUserOptions && !arrFindPrivateKey.length) throw new Error('user options are not valid. options.returnPrivateKey is the only valid user level option')

            debug(`array of names to query: ${arrQuery}`);
            debug(`expect multiple user results?: ${multiUserQuery}`);
            debug(`process options?: ${processUserOptions}`);
            debug(`array of users to returnPrivateKey for: ${arrFindPrivateKey}`);


            debug(`Find user DPNS Docuemnt Id`);
            // TODO: check that the connection.apps property uses dpns to reference the dpns contract
            const foundUsers = await DPNSDocument.find(
                client,
                'dpns.domain',
                {
                    where: [
                        ['normalizedParentDomainName', '==', 'dash'],
                        //['normalizedLabel', '==', nameToFind.toLowerCase()],
                        ['normalizedLabel', 'in', arrQuery],
                        // TODO: ORDER BY REGISTRATION DATE - not currently possible 
                        // Refactor if/when document transfer becomes available
                    ],
                    startAt: 1,
                },
            );

            debug(`Found document(s): ${JSON.stringify(foundUsers)}`);
            /*
            if (foundUsers.error) {
              return { error: true, message: foundUsers.message };
            } 
            */


            /*
            //REM: Document#find will return empty array if no user(s) found (or throw error)
            if (!foundUsers.success) {
                return { success: false, message: 'Name not found' };
            }
            */

            //else if ((foundUsers.data.length = 1)) {

            let arrResults = [];

            let qResults = arrQuery.map(async aq => {
                let rObj = {};
                rObj.query = aq;

                rObj.results = foundUsers.filter((f) => f.data.data.normalizedLabel == aq) || [];
                //map results to identity etc.
                debug(`${rObj.results.length} results for user ${aq}:\n ${JSON.stringify(rObj.results)}`);

                let mappedResults = [{}];
                if (rObj.results.length > 0) {

                    mappedResults = rObj.results.map(async r => {

                        let foundUser = new this();
                        foundUser.name = aq;
                        foundUser.id = r._id;
                        foundUser.identityId = r._data.data.records.dashIdentity;

                        //get public key (async)
                        debug(`Fetching Identity record for id ${foundUser.identityId}`);
                        foundUser.identity = await client.platform.identities.get(
                            foundUser.identityId,
                        );
                        debug(`Found identity ${JSON.stringify(foundUser.identity)}`);
                        foundUser.publicKey = foundUser.identity.publicKeys[0].data;
                        debug(`User public key ${foundUser.publicKey}`);

                        //? returnPublicKey for this user
                        if (processUserOptions && arrFindPrivateKey.indexOf(aq) > -1) {
                            debug(`Finding private key for user  ${aq}`);
                            // TODO : (a) why is getAccount so slow...? (b) 
                            // HOW TO KNOW THE INDEX OF THE CORRECT KEY

                            //use getIdentityHDKeyById ??
                            //foundUser.privateKey = client.account.getIdentityHDKeyById(foundUser.identityId,0).privateKey.toString();

                            client.account = await client.wallet.getAccount({ index: 0 });
                            foundUser.privateKey = client.account.getIdentityHDKeyByIndex(0, 0).privateKey.toString();
                            debug(`user PrivateKey: ${foundUser.privateKey}`)

                        }

                        // format results depending on options.returnType (default this.returnTypes.OBJECT)
                        let returnUser;
                        switch (returnType) {
                            case this.returnTypes.OBJECT:
                                returnUser = toObject(foundUser);
                                break;
                            case this.returnTypes.JSON:
                                returnUser = JSON.stringify(toObject(foundUser));
                                break;
                            case this.returnTypes.INSTANCE:
                                returnUser = foundUser;
                                break;
                            default:
                                throw new Error('Invalid return Type enum specified');
                        }
                        return returnUser;


                    })


                } // end only process records with query results

                let promisedMappedResults = await Promise.all(mappedResults)

                if (returnAllRecords) {
                    rObj.results = promisedMappedResults;
                }
                else {
                    rObj.results = promisedMappedResults[0];
                }

                return rObj
            }) // end map each name in query array

            let finalResults = await Promise.all(qResults);
            let resultToReturn;
            if (multiUserQuery) {
                debug(`RETURN *MULIPLE USER* OBJ RESULTS`);
                resultToReturn = finalResults;
            }
            else {
                debug(`RETURN *SINGLE USER* OBJ RESULTS`);
                //?? check there is only 1 result
                resultToReturn = finalResults[0];
            }
            debug(`** FINISHED ** RETURNING RESULT: ${JSON.stringify(resultToReturn)}`);
            return resultToReturn

        } catch (e) {
            debug(`find name error: ${e}`);

            throw new Error(e.message)
        }
    }

    get id() {
        return this._id;
    }

    /**
     * @param {string} newId
     */
    set id(newId) {
        if (newId) {
            this._id = newId;
        }
    }

    get name() {
        return this._name;
    }

    /**
     * @param {string} newName
     */
    set name(newName) {
        if (newName) {
            this._name = newName;
        }
    }

    get identityId() {
        return this._identityId;
    }

    /**
     * @param {string} newIdentityId
     */
    set identityId(newIdentityId) {
        if (newIdentityId) {
            this._identityId = newIdentityId;
        }
    }

    get identity() {
        return this._identity;
    }

    /**
     * @param {Object} newIdentityId
     */
    set identity(newIdentity) {
        if (newIdentity) {
            this._identity = newIdentity;
        }
    }

    get publicKey() {
        return this._publicKey;
    }

    /**
     * @param {string} newPublicKey
     */
    set publicKey(newPublicKey) {
        if (newPublicKey) {
            this._publicKey = newPublicKey;
        }
    }

    get privateKey() {
        return this._privateKey;
    }

    /**
     * @param {string} newPrivateKey
     */
    set privateKey(newPrivateKey) {
        if (newPrivateKey) {
            this._privateKey = newPrivateKey;
        }
    }

    /**
* Enum for returnType
* @readonly
* @enum {number}
* 
*//**
                                        * Enum for returnType
                                        * @readonly
                                        * @enum {number}
                                        * 
                                        */
    static returnTypes = {
        /** return as a plain object */
        OBJECT: 0,
        /** return as a json string */
        JSON: 1,
        /** return as an instance of DashPlatformUser class (exposes internal private properties) */
        INSTANCE: 2

    }






};



/**
     * Casts the DashPlatformUser instance to JSON string format ////
     * @method DashUser#toObj
     * @param {Object} instance An instance of DashPlatformUser 
     * @return {Object}
     */

function toObject(instance) {
    let obj = {
        name: instance._name,
        id: instance._id,
        identityId: instance._identityId,
        identity: instance._identity,
        publicKey: instance._publicKey
    };
    if (typeof instance._privateKey != typeof undefined) obj.privateKey = instance._privateKey;
    return obj
}


/*

async function getUserKeys(privateUserName, privateUserMnemonic, publicUserName, dpnsContractId) {
    try {
        const dashConnection = new DashConnection('testnet', privateUserMnemonic, { dpnsContract: { contractId: dpnsContractId } }, { service: '34.215.175.142:3000' });
        await dashConnection.connect();
        //get private Key
        const privateUser =  await User.find(privateUserName, dashConnection);
        //console.dir(privateUser);
        const privateKey = await dashConnection.account.getIdentityHDKey(0, 'user').privateKey;
        //console.log('privateKey:', privateKey.toString());

        //get the recipient
        const publicUser = await User.find(publicUserName, dashConnection);
        //console.dir(publicUser);
        //get public Key
        const publicKey = publicUser.data._publicKey;
        //console.log('publicKey', publicKey);
        dashConnection.disconnect();
        return {
            privateKey: privateKey,
            publicKey: publicKey
        }

    } catch (e) {
        //console.log(`getUsers error: ${e}`)
        throw e;

    }

}

*/