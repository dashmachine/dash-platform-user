var DashPlatformUser=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){(function(r){e.log=function(...t){return"object"==typeof console&&console.log&&console.log(...t)},e.formatArgs=function(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;e.splice(1,0,n,"color: inherit");let r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,t=>{"%%"!==t&&(r++,"%c"===t&&(o=r))}),e.splice(o,0,n)},e.save=function(t){try{t?e.storage.setItem("debug",t):e.storage.removeItem("debug")}catch(t){}},e.load=function(){let t;try{t=e.storage.getItem("debug")}catch(t){}!t&&void 0!==r&&"env"in r&&(t=r.env.DEBUG);return t},e.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage=function(){try{return localStorage}catch(t){}}(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.exports=n(13)(e);const{formatters:o}=t.exports;o.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}}).call(this,n(12))},function(t,e,n){t.exports=n(8)},function(t,e){function n(t,e,n,r,o,i,c){try{var a=t[i](c),s=a.value}catch(t){return void n(t)}a.done?e(s):Promise.resolve(s).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,s,"next",t)}function s(t){n(c,o,i,a,s,"throw",t)}a(void 0)}))}}},function(t,e,n){t.exports=n(7)},function(t,e,n){"use strict";var r,o,i=n(0),c=i(n(4)),a=i(n(9)),s=i(n(5)),u=i(n(1)),f=i(n(2)),l=n(10),d=n(3)("server:debug"),h=n(15);function p(t){var e={name:t._name,id:t._id,identityId:t._identityId,identity:t._identity,publicKey:t._publicKey};return"undefined"!=(0,a.default)(t._privateKey)&&(e.privateKey=t._privateKey),e}t.exports=(o=r=function(){function t(){(0,u.default)(this,t),d("Creating new user")}var e;return(0,f.default)(t,[{key:"id",get:function(){return this._id},set:function(t){t&&(this._id=t)}},{key:"name",get:function(){return this._name},set:function(t){t&&(this._name=t)}},{key:"identityId",get:function(){return this._identityId},set:function(t){t&&(this._identityId=t)}},{key:"identity",get:function(){return this._identity},set:function(t){t&&(this._identity=t)}},{key:"publicKey",get:function(){return this._publicKey},set:function(t){t&&(this._publicKey=t)}},{key:"privateKey",get:function(){return this._privateKey},set:function(t){t&&(this._privateKey=t)}}],[{key:"findByName",value:(e=(0,s.default)(c.default.mark((function t(e,n){var r,o,i,u,f,y,m,g,v,w,C,b,_,x,F=this;return c.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,d("options: ".concat(n)),null==n&&(n={}),d("options now: ".concat(n)),r=n.returnType||this.returnTypes.OBJECT,o=n.returnAllRecords||!1,i=n.connection_options||{},u=n.client||new l(i).client,d("client: ".concat(u)),d("Client is ready..."),console.dir(u),f=!1,null!=u.options.wallet&&null!=u.options.wallet.mnemonic&&(f=!0),d("Client passed with a mnemonic?: ".concat(f," ")),y=[],m=!1,g=[],t.t0=(0,a.default)(e),t.next="string"===t.t0?20:"object"===t.t0?22:24;break;case 20:return y.push(e),t.abrupt("break",24);case 22:return Array.isArray(e)?(m=!0,y=e.map((function(t){return"object"==(0,a.default)(t)?(g.push(t),t.name):"string"==typeof t?t:void 0}))):(y.push(e.name),g.push(e)),t.abrupt("break",24);case 24:if(v=g.length>0,d("array of queries with options: ".concat(g)),!v||f){t.next=28;break}throw new Error("user options are not valid. options.returnPrivateKey requires a mnemonic to be supplied");case 28:if(w=g.map((function(t){if(t.options.returnPrivateKey)return t.name})),!v||w.length){t.next=31;break}throw new Error("user options are not valid. options.returnPrivateKey is the only valid user level option");case 31:return d("array of names to query: ".concat(y)),d("expect multiple user results?: ".concat(m)),d("process options?: ".concat(v)),d("array of users to returnPrivateKey for: ".concat(w)),d("Find user DPNS Docuemnt Id"),t.next=38,h.find(u,"dpns.domain",{where:[["normalizedParentDomainName","==","dash"],["normalizedLabel","in",y]],startAt:1});case 38:return C=t.sent,d("Found document(s): ".concat(JSON.stringify(C))),b=y.map(function(){var t=(0,s.default)(c.default.mark((function t(e){var n,i,a;return c.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n={}).query=e,n.results=C.filter((function(t){return t.data.data.normalizedLabel==e}))||[],d("".concat(n.results.length," results for user ").concat(e,":\n ").concat(JSON.stringify(n.results))),i=[{}],n.results.length>0&&(i=n.results.map(function(){var t=(0,s.default)(c.default.mark((function t(n){var o,i;return c.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o=new F).name=e,o.id=n._id,o.identityId=n._data.data.records.dashIdentity,d("Fetching Identity record for id ".concat(o.identityId)),t.next=7,u.platform.identities.get(o.identityId);case 7:if(o.identity=t.sent,d("Found identity ".concat(JSON.stringify(o.identity))),o.publicKey=o.identity.publicKeys[0].data,d("User public key ".concat(o.publicKey)),!(v&&w.indexOf(e)>-1)){t.next=18;break}return d("Finding private key for user  ".concat(e)),t.next=15,u.wallet.getAccount({index:0});case 15:u.account=t.sent,o.privateKey=u.account.getIdentityHDKeyByIndex(0,0).privateKey.toString(),d("user PrivateKey: ".concat(o.privateKey));case 18:t.t0=r,t.next=t.t0===F.returnTypes.OBJECT?21:t.t0===F.returnTypes.JSON?23:t.t0===F.returnTypes.INSTANCE?25:27;break;case 21:return i=p(o),t.abrupt("break",28);case 23:return i=JSON.stringify(p(o)),t.abrupt("break",28);case 25:return i=o,t.abrupt("break",28);case 27:throw new Error("Invalid return Type enum specified");case 28:return t.abrupt("return",i);case 29:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),t.next=8,Promise.all(i);case 8:return a=t.sent,n.results=o?a:a[0],t.abrupt("return",n);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=44,Promise.all(b);case 44:return _=t.sent,m?(d("RETURN *MULIPLE USER* OBJ RESULTS"),x=_):(d("RETURN *SINGLE USER* OBJ RESULTS"),x=_[0]),d("** FINISHED ** RETURNING RESULT: ".concat(JSON.stringify(x))),t.abrupt("return",x);case 50:throw t.prev=50,t.t1=t.catch(0),d("find name error: ".concat(t.t1)),new Error(t.t1.message);case 54:case"end":return t.stop()}}),t,this,[[0,50]])}))),function(t,n){return e.apply(this,arguments)})}]),t}(),r.returnTypes={OBJECT:0,JSON:1,INSTANCE:2},o)},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function a(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),c=new _(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return F()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=w(c,n);if(a){if(a===u)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var f=s(t,e,n);if("normal"===f.type){if(r=n.done?"completed":"suspendedYield",f.arg===u)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(r="completed",n.method="throw",n.arg=f.arg)}}}(t,n,c),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var u={};function f(){}function l(){}function d(){}var h={};h[o]=function(){return this};var p=Object.getPrototypeOf,y=p&&p(p(x([])));y&&y!==e&&n.call(y,o)&&(h=y);var m=d.prototype=f.prototype=Object.create(h);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function v(t,e){var r;this._invoke=function(o,i){function c(){return new e((function(r,c){!function r(o,i,c,a){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,a)}))}a(u.arg)}(o,i,r,c)}))}return r=r?r.then(c,c):c()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,u;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:F}}function F(){return{value:void 0,done:!0}}return l.prototype=m.constructor=d,d.constructor=l,d[c]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(v.prototype),v.prototype[i]=function(){return this},t.AsyncIterator=v,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new v(a(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},g(m),m[c]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),b(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;b(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){"use strict";var r=n(0),o=r(n(1)),i=r(n(2)),c=n(11),a=n(3)("server:debug");t.exports=function(){function t(e){(0,o.default)(this,t),this.const=void 0,a("Creating new connection"),console.log("Creating new connection"),this._network=e.network||"testnet",this._optionBuilder=e||{},this._optionBuilder.network=this._network,this._connectTries=0,this._connectMaxRetries=3,a("Contructor parameters: ".concat(this)),this.connect()}return(0,i.default)(t,[{key:"connect",value:function(){a("Intialising connection to network ".concat(this._network," with options ").concat(JSON.stringify(this._optionBuilder),".Tries so far: ").concat(this._connectTries));try{return this._connectTries++,this._client=new c.Client(this._optionBuilder),a("Successfully connected after ".concat(this._connectTries," attempts ").concat(this._client)),this._connectTries=0,void a("Reset connection tries: ".concat(this._connectTries))}catch(t){throw a("ERR_CONNECTION: ".concat(t)),this._connectTries<this._connectMaxRetries&&(a("retrying connection"),this.connect()),a("Unable to connect after ".concat(this._connectTries," attempts")),t}}},{key:"disconnect",value:function(){a("Disconnecting connection instance");try{this._client.disconnect(),a("Successfully disconnected")}catch(t){return a("disconnect error: ".concat(t)),{error:t}}}},{key:"connParams",value:function(){return this._optionBuilder}},{key:"network",get:function(){return this._network},set:function(t){t&&(this._network=t)}},{key:"mnemonic",get:function(){return this._account},set:function(t){t&&(this._mnemonic=t)}},{key:"apps",get:function(){return this._apps},set:function(t){t&&(this._apps=t)}},{key:"seeds",get:function(){return this._seeds}},{key:"client",get:function(){return this._client},set:function(t){t&&(this._client=t)}},{key:"account",get:function(){return this._client.account}}]),t}()},function(t,e){t.exports=Dash},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(t){r=c}}();var s,u=[],f=!1,l=-1;function d(){f&&s&&(f=!1,s.length?u=s.concat(u):l=-1,u.length&&h())}function h(){if(!f){var t=a(d);f=!0;for(var e=u.length;e;){for(s=u,u=[];++l<e;)s&&s[l].run();l=-1,e=u.length}s=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new p(t,e)),1!==u.length||f||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){t.exports=function(t){function e(t){let e=0;for(let n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return r.colors[Math.abs(e)%r.colors.length]}function r(t){let n;function c(...t){if(!c.enabled)return;const e=c,o=Number(new Date),i=o-(n||o);e.diff=i,e.prev=n,e.curr=o,n=o,t[0]=r.coerce(t[0]),"string"!=typeof t[0]&&t.unshift("%O");let a=0;t[0]=t[0].replace(/%([a-zA-Z%])/g,(n,o)=>{if("%%"===n)return n;a++;const i=r.formatters[o];if("function"==typeof i){const r=t[a];n=i.call(e,r),t.splice(a,1),a--}return n}),r.formatArgs.call(e,t),(e.log||r.log).apply(e,t)}return c.namespace=t,c.enabled=r.enabled(t),c.useColors=r.useColors(),c.color=e(t),c.destroy=o,c.extend=i,"function"==typeof r.init&&r.init(c),r.instances.push(c),c}function o(){const t=r.instances.indexOf(this);return-1!==t&&(r.instances.splice(t,1),!0)}function i(t,e){const n=r(this.namespace+(void 0===e?":":e)+t);return n.log=this.log,n}function c(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}return r.debug=r,r.default=r,r.coerce=function(t){if(t instanceof Error)return t.stack||t.message;return t},r.disable=function(){const t=[...r.names.map(c),...r.skips.map(c).map(t=>"-"+t)].join(",");return r.enable(""),t},r.enable=function(t){let e;r.save(t),r.names=[],r.skips=[];const n=("string"==typeof t?t:"").split(/[\s,]+/),o=n.length;for(e=0;e<o;e++)n[e]&&("-"===(t=n[e].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+t.substr(1)+"$")):r.names.push(new RegExp("^"+t+"$")));for(e=0;e<r.instances.length;e++){const t=r.instances[e];t.enabled=r.enabled(t.namespace)}},r.enabled=function(t){if("*"===t[t.length-1])return!0;let e,n;for(e=0,n=r.skips.length;e<n;e++)if(r.skips[e].test(t))return!1;for(e=0,n=r.names.length;e<n;e++)if(r.names[e].test(t))return!0;return!1},r.humanize=n(14),Object.keys(t).forEach(e=>{r[e]=t[e]}),r.instances=[],r.names=[],r.skips=[],r.formatters={},r.selectColor=e,r.enable(r.load()),r}},function(t,e){var n=1e3,r=6e4,o=60*r,i=24*o;function c(t,e,n,r){var o=e>=1.5*n;return Math.round(t/n)+" "+r+(o?"s":"")}t.exports=function(t,e){e=e||{};var a=typeof t;if("string"===a&&t.length>0)return function(t){if((t=String(t)).length>100)return;var e=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(!e)return;var c=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*c;case"weeks":case"week":case"w":return 6048e5*c;case"days":case"day":case"d":return c*i;case"hours":case"hour":case"hrs":case"hr":case"h":return c*o;case"minutes":case"minute":case"mins":case"min":case"m":return c*r;case"seconds":case"second":case"secs":case"sec":case"s":return c*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(t);if("number"===a&&isFinite(t))return e.long?function(t){var e=Math.abs(t);if(e>=i)return c(t,e,i,"day");if(e>=o)return c(t,e,o,"hour");if(e>=r)return c(t,e,r,"minute");if(e>=n)return c(t,e,n,"second");return t+" ms"}(t):function(t){var e=Math.abs(t);if(e>=i)return Math.round(t/i)+"d";if(e>=o)return Math.round(t/o)+"h";if(e>=r)return Math.round(t/r)+"m";if(e>=n)return Math.round(t/n)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,n){"use strict";var r=n(0),o=r(n(4)),i=r(n(5)),c=r(n(1)),a=r(n(2)),s=n(3)("server:debug");t.exports=function(){function t(e,n,r,o){(0,c.default)(this,t),s("Creating new data document"),this._dataContractId=e,this._id=n,this._ownerId=r,this._data=o,this._submitTries=0,this._submitMaxRetries=3}var e,n,r;return(0,a.default)(t,[{key:"submit",value:(r=(0,i.default)(o.default.mark((function t(e){var n,r,i,c,a;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s("Document submit. Tries so far: ".concat(this._submitTries)),s("Assemble document"),s("contract id: ".concat(this._dataContractId)),s("ownerIdentity id: ".concat(JSON.stringify(this._ownerId))),s("data: ".concat(JSON.stringify(this._data))),t.prev=5,this._submitTries++,n=e.client,t.next=10,n.isReady();case 10:return s("client ready..."),t.next=13,n.platform.identities.get(this._ownerId);case 13:return r=t.sent,s("Retrieved identity: ".concat(JSON.stringify(r))),t.next=17,n.platform.documents.create(this._dataContractId,r,this._data);case 17:return i=t.sent,s("document prepared for submission: ".concat(JSON.stringify(i))),c={create:[i],replace:[],delete:[]},s("document batch: ".concat(JSON.stringify(c))),t.next=23,n.platform.documents.broadcast(c,r);case 23:return a=t.sent,s("document successfully submitted: ".concat(JSON.stringify(a))),this._submitTries=0,s("Reset connection tries: ".concat(this._submitTries)),t.abrupt("return",{success:!0,data:a});case 30:if(t.prev=30,t.t0=t.catch(5),s("ERR_DOC_SUBMIT: ".concat(t.t0)),!(this._submitTries<=this._submitMaxRetries)){t.next=37;break}return s("retrying document submit"),t.next=37,this.submit(e);case 37:throw s("Unable to submit document after ".concat(this._submitTries," attempts")),new Error(t.t0.message);case 39:case"end":return t.stop()}}),t,this,[[5,30]])}))),function(t){return r.apply(this,arguments)})},{key:"dataContractId",get:function(){return this._dataContractId},set:function(t){t&&(this._dataContractId=t)}},{key:"id",get:function(){return this._id},set:function(t){t&&(this._id=t)}},{key:"ownerId",get:function(){return this._ownerId},set:function(t){t&&(this._ownerId=t)}},{key:"data",get:function(){return this._data},set:function(t){t&&(this._data=t)}}],[{key:"find",value:(n=(0,i.default)(o.default.mark((function t(e,n,r){var i,c,a,u=this;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s("find documents with locator ".concat(n," matching query ").concat(JSON.stringify(r),".")),t.prev=1,s("client ready..."),t.next=5,e.platform.documents.get(n,r);case 5:return i=t.sent,s("doc found response: ".concat(JSON.stringify(i))),c=i.length,s("".concat(c," docs found")),a=[],i.map((function(t){var e=new u(t.dataContractId,t.id,t.ownerId,t);a.push(e)})),t.abrupt("return",a);case 14:throw t.prev=14,t.t0=t.catch(1),s("ERR_DOC_FIND: ".concat(t.t0)),new Error(t.t0.message);case 18:case"end":return t.stop()}}),t,null,[[1,14]])}))),function(t,e,r){return n.apply(this,arguments)})},{key:"waitFor",value:(e=(0,i.default)(o.default.mark((function t(e,n,r,i,c){var a,u,f,l,d,h,p,y,m;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s("Polling for ".concat(i,"ms [to call find() every ").concat(c,"ms - not implemented] for documents with locator ").concat(n," matching query ").concat(JSON.stringify(r))),t.prev=1,a=Date.now(),s("Starting at ".concat(a)),s("Trying until ".concat(u=a+i," (").concat(i,"ms)")),f=a,l=0,h=3;case 10:if(!(f<u)){t.next=37;break}return l++,f=Date.now(),s("Calling find attempt number ".concat(l," @ ").concat(f)),s("Tries so far: ".concat(p=0)),t.prev=16,p++,t.next=20,this.find(e,n,r);case 20:if(!(d=t.sent).success){t.next=25;break}return s("Got a successful result after ".concat(l," attempts and ").concat(Date.now()-a,"ms")),p=0,t.abrupt("return",{success:!0,data:d.data});case 25:t.next=35;break;case 27:if(t.prev=27,t.t0=t.catch(16),s("find tries so far: ".concat(p)),!(p<=h)){t.next=34;break}return s("retrying document find"),t.next=34,this.find(e,n,r);case 34:s("find document after ".concat(p," attempts"));case 35:t.next=10;break;case 37:return s("document waitFor() didn't find any documents in specified time"),t.abrupt("return",{success:!1,data:[]});case 41:if(t.prev=41,t.t1=t.catch(1),s("ERR_DOC_WAITFOR: ".concat(t.t1)),!((y=Date.now())<u)){t.next=50;break}return s("Attempt to retsrt waitFor for remaining ".concat(m=u-y,"ms")),t.next=50,this.waitFor(e,n,r,m,c);case 50:throw new Error(t.t1.message);case 51:case"end":return t.stop()}}),t,this,[[1,41],[16,27]])}))),function(t,n,r,o,i){return e.apply(this,arguments)})}]),t}()}]);