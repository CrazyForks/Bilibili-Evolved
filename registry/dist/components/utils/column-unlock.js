!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/column-unlock"]=t():e["utils/column-unlock"]=t()}(globalThis,(()=>(()=>{var e,t,o={280:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=280,e.exports=t},780:e=>{"use strict";e.exports="(原名: 专栏文字选择, 现在专栏已经不限制选中文字了)\r\n\r\n避免专栏的文字复制后在最后带上出处信息, 更贴近原生的复制行为.\r\n"},356:e=>{"use strict";e.exports=coreApis.style}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var c=r[e]={exports:{}};return o[e](c,c.exports,n),c.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var c=Object.create(null);n.r(c);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>o[e]));return i.default=()=>o,n.d(c,i),c},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{"use strict";n.d(c,{component:()=>s});const e=coreApis.componentApis.define;let t=!1,o=!0;const r="column-unlock",i=async()=>{o=!0;const{addStyle:e}=await Promise.resolve().then(n.t.bind(n,356,23));e(".article-holder { user-select: text !important }",r),t||(t=!0,document.addEventListener("copy",(e=>{o&&e.stopImmediatePropagation()}),{capture:!0}))},s=(0,e.defineComponentMetadata)({name:"columnUnlock",displayName:"专栏复制优化",entry:i,reload:i,unload:async()=>{document.getElementById(r)?.remove(),o=!1},tags:[componentsTags.utils],urlInclude:["//www.bilibili.com/read/"],commitHash:"23e33d2fd9cb52b555c47d7355b0353666f929af",coreVersion:"2.7.3",description:(()=>{const e=n(280);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(n.t.bind(n,780,17)).then((e=>e.default))}})()})})(),c=c.component})()));