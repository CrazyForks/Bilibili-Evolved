!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["style/hide/user-pendent"]=e():t["style/hide/user-pendent"]=e()}(globalThis,(()=>(()=>{var t,e,n={797:(t,e,n)=>{var r=n(218)((function(t){return t[1]}));r.push([t.id,':host(bili-avatar) {\n  container-type: size;\n  container-name: avatar;\n}\n:host(bili-avatar) .layer:not(:first-child),\n:host(bili-avatar) .layer[\\:not-has\\(picture\\)] {\n  display: none;\n}\n:host(bili-avatar) .layer:not(:first-child),\n:host(bili-avatar) .layer:not(:has(picture), :has([style*="/face/"])) {\n  display: none;\n}\n:host(bili-avatar) .layer:is([\\:has\\(picture\\)],[\\%20\\:has\\(\\[style*\\%3D\\%22\\%2Fface\\%2F\\%22\\]\\)]) {\n  min-width: 100cqw;\n  min-height: 100cqh;\n  max-width: 100cqw;\n  max-height: 100cqh;\n}\n:host(bili-avatar) .layer:is(:has(picture), :has([style*="/face/"])) {\n  min-width: 100cqw;\n  min-height: 100cqh;\n  max-width: 100cqw;\n  max-height: 100cqh;\n}',""]),t.exports=r},864:(t,e,n)=>{var r=n(218)((function(t){return t[1]}));r.push([t.id,".b-avatar {\n  container-type: size;\n  container-name: avatar;\n}\n.b-avatar__layers:not(:first-child), .b-avatar__layer:not(:first-child) {\n  display: none !important;\n}\n.b-avatar__layer:first-child {\n  min-width: 100cqw;\n  min-height: 100cqh;\n}\n\n.up-avatar {\n  container-type: size;\n  container-name: avatar;\n}\n.up-avatar .bili-avatar {\n  min-width: 100cqw;\n  min-height: 100cqh;\n  transform: none !important;\n}\n\n.bili-avatar-icon, .bili-avatar-pendent-dom {\n  display: none !important;\n}",""]),t.exports=r},218:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,r){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var a={};if(r)for(var o=0;o<this.length;o++){
// eslint-disable-next-line prefer-destructuring
var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},843:(t,e,n)=>{var r=n(797);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},197:(t,e,n)=>{var r=n(864);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()},283:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=283,t.exports=e},834:t=>{"use strict";t.exports="隐藏页面中用户的头像框 (包括角标), 目前支持动态和视频页面.\n"}},r={};function a(t){var e=r[t];if(void 0!==e)return e.exports;var o=r[t]={id:t,exports:{}};return n[t](o,o.exports,a),o.exports}e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,a.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);a.r(o);var i={};t=t||[null,e({}),e([]),e(e)];for(var s=2&r&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((t=>i[t]=()=>n[t]));return i.default=()=>n,a.d(o,i),o},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{"use strict";a.d(o,{component:()=>t});const t=(0,coreApis.componentApis.define.defineComponentMetadata)({name:"hideUserPendent",displayName:"隐藏头像框",entry:none,tags:[componentsTags.style],instantStyles:[{name:"hide-user-pendent",style:()=>Promise.resolve().then(a.t.bind(a,197,23))},{name:"hide-user-pendent",style:()=>Promise.resolve().then(a.t.bind(a,843,23)),shadowDom:!0}],commitHash:"048e26a46d5037f09c9206d9d7a86bb45d2c9ff5",coreVersion:"2.9.5",description:(()=>{const t=a(283);return{...Object.fromEntries(t.keys().map((e=>[e.match(/index\.(.+)\.md$/)[1],t(e)]))),"zh-CN":()=>Promise.resolve().then(a.t.bind(a,834,17)).then((t=>t.default))}})()})})(),o=o.component})()));