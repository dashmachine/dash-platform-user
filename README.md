# Dash Platform User

Library for retrieving Dash Platform users and their properties.

> Note: this is an experimental library to support dapp sample investigation of Dash Platform usage - not for production use.

## Prerequisites

In the browser, the library requires DashJS as an EXTERNAL dependency to create a connection to the platform, so you can either pass an existing instance of a DashJs client or the DashJS Library this must be referenced BEFORE the Dash Platform User library.

    <script src="https://unpkg.com/dash"></script>
    <script src="dash-platform-user.js" type="text/javascript"></script>

**Please see the examples below for sample usage**

## Usage

### Browser

Include the `dash-platform-user-lib.js` script file available from the [releases page](https://github.com/dashmachine/dash-platform-user/releases).

### Nodejs

    npm i dash-platform-user

### `DashPlatformUser.findByName`

See also the examples in the auto-generated documentation below.

This is an asynchronous static function. It can act as a factory function to return instance(s) of DashPlatformUser class, but by default results are returned as objects.

The function has two **parameters**:

#### `query`

This is the name or names to be found.
You can search for a single user or an array of users.
It is possible to pass **user level options** by passing the user query as an object in the format `{name: [string], options:[object]}`.
The only currently supported user level option is `returnPrivateKey`. This is a boolean (false by default) which returns the private key associated with identity at identity index 0, key 0, stored in the wallet for which mnemonic is passed with the client or client options in the functions second parameter.   

For example, the following are valid arguments for the `query` parameter:

-   `'bob'`
-   `['bob','alice']`
-   `{name:'alice', { returnPrivateKey: false }`
-   `[{name:'alice', options:{ returnPrivateKey: false }}, {name:'bob',options: { returnPrivateKey: false }}]`
-   `[{ name: 'alice', options: { returnPrivateKey: true } }, 'bob', 'nob']` (requires a client or connection options with a mnemonic to be passed as the second argument)

#### `options`

| option property      | type    | values                                                               | description                                                                                                                                                                                                      |
| -------------------- | ------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client`             | object  | DashJS client                                                        | an instance of a dash js client                                                                                                                                                                                  |
| `connection_options` | object  | Dash JS Connection options                                           | options for a client instantiated internally by the library                                                                                                                                                      |
| `returnType`         | enum    | returnTypes.OBJECT (default), returnTypes.JSON, returnTypes.INSTANCE | A enum which is the result of the static function `DashPlatformUser.returnTypes()`, signifying how the query results are formatted                                                                               |
| `returnAllRecords`   | boolean | false (default), true                                                | If this option is set to true, the full document history for each name is returned in an array (not currently a possibility). If false (default) only the current record / registration is returned as an object |

#### return signature

In short you get back what you pass in! 
If you query an array of users (strings, objects or both) the query result will be an array of objects, for a single user a single object.
The results for each query will be an object representing the current registration/ownership of the username, unless you pass in the option `options.returnAllRecords`, which will return the full registration history for the username (Currently name transfers are not possible and so in reality there will only ever be one result in the array)

### Use with dash secure message library

This libray can be used to retrieve the private and public keys for users in order to use the ECIES encryption functions for secure messaging in the Dash Secure Message library: example below. For more details see [github](https://github.com/dashmachine/dash-secure-message) and the [npm registry](https://www.npmjs.com/package/dash-secure-message)

[The following documentationm is automatically generated]

## Documentation

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [DashPlatformUser](#dashplatformuser)
    -   [Properties](#properties)
    -   [Examples](#examples)
-   [id](#id)
    -   [Parameters](#parameters)
-   [name](#name)
    -   [Parameters](#parameters-1)
-   [identityId](#identityid)
    -   [Parameters](#parameters-2)
-   [identity](#identity)
    -   [Parameters](#parameters-3)
-   [publicKey](#publickey)
    -   [Parameters](#parameters-4)
-   [privateKey](#privatekey)
    -   [Parameters](#parameters-5)
-   [findByName](#findbyname)
    -   [Parameters](#parameters-6)
-   [returnTypes](#returntypes)
-   [returnTypes](#returntypes-1)
-   [OBJECT](#object)
-   [JSON](#json)
-   [INSTANCE](#instance)
-   [DashUser#toObj](#dashusertoobj)
    -   [Parameters](#parameters-7)
-   [DashConnection](#dashconnection)
    -   [Properties](#properties-1)
-   [connect](#connect)
-   [disconnect](#disconnect)
-   [network](#network)
    -   [Parameters](#parameters-8)
-   [mnemonic](#mnemonic)
    -   [Parameters](#parameters-9)
-   [apps](#apps)
    -   [Parameters](#parameters-10)
-   [client](#client)
    -   [Parameters](#parameters-11)
-   [DataDocument](#datadocument)
    -   [Properties](#properties-2)
-   [submit](#submit)
    -   [Parameters](#parameters-12)
-   [dataContractId](#datacontractid)
    -   [Parameters](#parameters-13)
-   [id](#id-1)
    -   [Parameters](#parameters-14)
-   [ownerId](#ownerid)
    -   [Parameters](#parameters-15)
-   [data](#data)
    -   [Parameters](#parameters-16)
-   [find](#find)
    -   [Parameters](#parameters-17)
-   [waitFor](#waitfor)
    -   [Parameters](#parameters-18)

### DashPlatformUser

DashPlatformUser class - represents a registered Dash Platform Username

#### Properties

-   `id` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Unique id fopr the user record - the id of the DPNS document which registered the name
-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The registered username
-   `identityId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** identityId  associated with the username
-   `identity` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** full identity object of the identityId
-   `publicKey` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** private Key Associated wwith the user identity
-   `privateKey` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** private Key Associated wwith the user identity

#### Examples

```javascript
const Dash = require("dash");
const DashPlatformUser = require("dash-platform-user");
const DashSecureMessage = require("dash-secure-message");

(async () => {
try {

//test data for retriveing private keys (subject to change)
const aliceMnemonic = 'shoe utility void sauce grocery tourist upon dress else deliver boy theory';
const bobMnemonic = 'fantasy normal viable flock chief ancient crunch member cross air charge lunch';

// USING QUERY LEVEL (TOP LEVEL) OPTIONS

// pass an instance of the client
const client = new Dash.Client({
wallet: { mnemonic: aliceMnemonic }
});

const options1 = { client: client, returnType: DashPlatformUser.returnTypes.JSON };

//pass connection parameter options
const options2 = {
connection_options:
{ network: 'testnet', }
};

//pass a mnemonic to retrieve private key
const options3 = {
connection_options:
{ wallet: { mnemonic: aliceMnemonic } }
//client: client, returnType: DashPlatformUser.returnTypes.JSON 
}


// QUERIES WITHOUT QUERY LEVEL (TOP LEVEL) OPTIONS
// THE TOP LEVEL OPTIONS ABOVE CAN BE PASSED As A SECOND PARAMETER

// if setting options.returnPrivateKey:true as a user level option, the wallet.mnemonic must be passed in 
// either the client instance or as connection_options.mnemonic

// - * dashjs is required as an external dependency if client instance is not passed as a top level option * 
// - create internal client connection (to testnet) using default seeds, apps & other options
// - outputs user result as returnType: Object (DashPlatformUser.returnTypes.OBJECT) 

let foundUser = '';

//UNCOMMENT EXAMPLES TO TEST

// Different Query Types (No options)
// Single user as string
foundUser = await DashPlatformUser.findByName('bob');

// Single user as object (with user level options)
//foundUser = await DashPlatformUser.findByName({name:'alice', { returnPrivateKey: false });

// Array of string queries
//foundUser = await DashPlatformUser.findByName(['bob','alice']);

// Array of Object queries 
//foundUser = await DashPlatformUser.findByName([{name:'alice', options:{ returnPrivateKey: false }}, {name:'bob',options: { returnPrivateKey: false }}]);

// Single user string passed as an array
//foundUser = await DashPlatformUser.findByName('bob');

// Array of mixed String and Object queries 
//foundUser = await DashPlatformUser.findByName([{ name: 'alice', options: { returnPrivateKey: true } }, 'bob', 'nob'], options3);

//user doesn't exist:
//single user
//foundUser = await DashPlatformUser.findByName('nob');

// array of strings with a non-existant user
//foundUser = await DashPlatformUser.findByName(['bob', 'nob']);

console.dir(foundUser);

//ENCRYPTION EXAMPLE USING Dash Secure Message Library

const msg = "test"
let keys = {};

const senderGetsKeys = await DashPlatformUser.findByName([{ name: 'alice', options: { returnPrivateKey: true } }, 'bob'],
{ connection_options: { wallet: { mnemonic: aliceMnemonic } } });

senderGetsKeys.map(u => {
if (u.query == 'alice') keys.senderKey = u.results.privateKey;
if (u.query == 'bob') keys.recipientKey = u.results.publicKey;
})

console.dir(JSON.stringify(keys));

const encrypted = DashSecureMessage.encrypt(keys.senderKey, msg, keys.recipientKey);

console.log('encrypted message:', encrypted)

const recipientGetsKeys = await DashPlatformUser.findByName([{ name: 'bob', options: { returnPrivateKey: true } }, 'alice'],
{ connection_options: { wallet: { mnemonic: bobMnemonic } } });

recipientGetsKeys.map(u => {
if (u.query == 'bob') keys.recipientKey = u.results.privateKey;
if (u.query == 'alice') keys.senderKey = u.results.publicKey;
})

console.dir(JSON.stringify(keys));

const decrypted = DashSecureMessage.decrypt(keys.recipientKey, encrypted, keys.senderKey);
console.log('decrypted message:', decrypted)

}
catch (e) {
console.log(`error: ${e}`);
}
}
)()
```

### id

#### Parameters

-   `newId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### name

#### Parameters

-   `newName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### identityId

#### Parameters

-   `newIdentityId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### identity

#### Parameters

-   `newIdentity`  
-   `newIdentityId` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### publicKey

#### Parameters

-   `newPublicKey` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### privateKey

#### Parameters

-   `newPrivateKey` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### findByName

Finds the registered username on the network

#### Parameters

-   `query` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;({string} | {Object})>)** Either:
    For a single user query,either-   a single string containing a username, or
    -   an single object with properties of `name` and `options` to apply to the query for that user
        OR For a multiple user query
    -   an array with a combination of the above
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Optional dashjs client. If the object is not passed it will be constructed by the function.

### returnTypes

Enum for returnType

Type: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)

### returnTypes

Enum for returnType

Type: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)

### OBJECT

return as a plain object

### JSON

return as a json string

### INSTANCE

return as an instance of DashPlatformUser class (exposes internal private properties)

### DashUser#toObj

Casts the DashPlatformUser instance to JSON string format ////

#### Parameters

-   `instance` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** An instance of DashPlatformUser

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### DashConnection

DashConnection class - represents a connection to Dash Platform

#### Properties

-   `network` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network to connect to i.e. 'testet' (default), mainnet
-   `mnemonic` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Account mnemonic  to use for the connection
-   `apps` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** named app identities
-   `seeds` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** additonal options, overrides other paramaters
-   `client` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** the connection instance client

### connect

Intialises connection

### disconnect

Closes and disconnect the connection

### network

#### Parameters

-   `newNetwork`  
-   `newName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### mnemonic

#### Parameters

-   `newMnemonic` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### apps

#### Parameters

-   `newApps` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### client

#### Parameters

-   `newClient` **any** 

### DataDocument

DataDocument class - represents data docuemnts sumitted to or retrieved from Dash Platform

#### Properties

-   `dataContractId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** dataContractId the document is validated against
-   `ownerId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** identityId of the owner / submitter of the document
-   `data` **[JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)** actual data of the document represented as JSON
-   `signature` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the signature on the document

### submit

submits the document instance using the passed in connection

#### Parameters

-   `connection`  A DashJS client containing the account and keys for signing the doc

### dataContractId

#### Parameters

-   `newContractId` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### id

#### Parameters

-   `newId` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### ownerId

#### Parameters

-   `newOwnerId` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### data

#### Parameters

-   `newData` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### find

finds one of more documents based on suplied query params

#### Parameters

-   `client` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** A DashJS client, with options set for the locator of the docs to be retrieved
-   `locator` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The document name
-   `query` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Object containing array of query parameters

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** array of found docuemnts

### waitFor

Calls find() over specified period at specifed frequency until result tis returned

#### Parameters

-   `connection` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** A DashJS connection, with options set for the locator of the docs to be retrieved
-   `locator` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The document name
-   `query` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Object containing array of query parameters
-   `timeout` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of millseconds until rejecting as timed out
-   `frequency` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Frequency of calls to find() in millisenconds

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** promise for JSON Object 
{success:true, data:array of found docuemnts} if resolved {error: true, message:[error message]} if rejected

# License

[MIT License](LICENSE)

# Development

To develop this library:

-   clone the repository and change to project directory 


    git clone  https://github.com/dashmachine/dash-platform-user.git && cd dash-platform-usere

The source file is `src/dash-platform-user.js`

-   build output


    npm run build

-   test with webpack dev server


    npm start

-   update documentation (requires npm documentation package installed globally:  `npm i -g documentation`)

Update the Documentation section of the README.md file  

    npm run docs:readme
