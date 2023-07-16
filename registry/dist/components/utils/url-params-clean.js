!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/url-params-clean"]=t():e["utils/url-params-clean"]=t()}(globalThis,(()=>(()=>{var e,t,r={912:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=912,e.exports=t},799:e=>{"use strict";e.exports="自动删除网址中的多余跟踪参数. 请注意这会导致浏览器历史记录出现重复的标题 (分别是转换前后的网址), 并可能导致后退要多退几次.\r\n"},110:e=>{"use strict";e.exports=coreApis.lifeCycle},391:e=>{"use strict";e.exports=coreApis.observer}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return r[e](i,i.exports,a),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var i=Object.create(null);a.r(i);var s={};e=e||[null,t({}),t([]),t(t)];for(var n=2&o&&r;"object"==typeof n&&!~e.indexOf(n);n=t(n))Object.getOwnPropertyNames(n).forEach((e=>s[e]=()=>r[e]));return s.default=()=>r,a.d(i,s),i},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";a.d(i,{component:()=>n});const e=coreApis.pluginApis.data,t=coreApis.componentApis.define,r=coreApis.utils,o="网址参数清理",s=(0,coreApis.utils.log.useScopedConsole)(o),n=(0,t.defineComponentMetadata)({name:"urlParamsClean",displayName:o,entry:async()=>{if((0,r.isNotHtml)()||(0,r.isIframe)())return;const[t]=(0,e.registerAndGetData)("urlParamsClean.noClean",["videocard_series"]),[o]=(0,e.registerAndGetData)("urlParamsClean.params",["spm_id_from","from_source","from_spmid","from","seid","share_source","share_medium","share_plat","share_tag","share_session_id","share_from","bbid","ts","timestamp","unique_k","rt","tdsourcetag","accept_quality","broadcast_type","current_qn","current_quality","playurl_h264","playurl_h265","quality_description","network","network_status","platform_network_status","p2p_type","referfrom","visit_id","bsource","spm","hotRank","-Arouter","vd_source","is_story_h5","buvid","goFrom","jumpLinkType","hasBack","noTitleBar","msource","live_from","plat_id"]),[i]=(0,e.registerAndGetData)("urlParamsClean.siteSpecifiedParams",[{match:/\/\/www\.bilibili\.com\/audio\/(au[\d]+|mycollection)/,param:"type"},{match:/\/\/live\.bilibili\.com\//,param:"session_id"},{match:/\/\/www\.bilibili\.com\/bangumi\//,param:"theme"},{match:/\/\/www\.bilibili\.com\/video\//,param:"mid"},{match:/\/\/www\.bilibili\.com\/video\//,param:"up_id"},{match:/\/\/mall\.bilibili\.com\//,param:"noReffer"}]),[n]=(0,e.registerAndGetData)("urlParamsClean.tailingSlash",[]),l=e=>{const a=new URL(e,location.origin),s=[...new URLSearchParams(a.search).entries()].map((e=>{let[t,r]=e;return`${t}=${r}`}));if(s.some((e=>t.some((t=>e.includes(t))))))return e;const l=s.filter((e=>!o.some((t=>e.startsWith(`${t}=`)))&&!i.some((t=>{let{match:r,param:o}=t;return document.URL.match(r)&&e.startsWith(`${o}=`)})))).join("&");n.forEach((e=>{let{match:t}=e;const o=a.pathname;(0,r.matchPattern)(o,t)&&o.endsWith("/")&&(a.pathname=o.slice(0,o.length-1))}));const c=l?`?${l}`:"";return a.search=c,a.toString()},c=e=>function(t,r,o){const a=l(o);for(var i=arguments.length,n=new Array(i>3?i-3:0),c=3;c<i;c++)n[c-3]=arguments[c];return a!==o?(s.log("History API 拦截",o,a),e.call(this,t,r,a,...n)):e.call(this,t,r,o,...n)},m=unsafeWindow.history.pushState;unsafeWindow.history.pushState=c(m);const u=unsafeWindow.history.replaceState;unsafeWindow.history.replaceState=c(u);const{fullyLoaded:p}=await Promise.resolve().then(a.t.bind(a,110,23)),{urlChange:d}=await Promise.resolve().then(a.t.bind(a,391,23));p((()=>{d((()=>(()=>{const e=l(document.URL);e!==document.URL&&(s.log("直接清理",document.URL,e),window.history.replaceState(history.state,"",e))})()))}))},tags:[componentsTags.utils],urlExclude:[/game\.bilibili\.com\/fgo/,/live\.bilibili\.com\/p\/html\/live-app-hotrank\//],commitHash:"23e33d2fd9cb52b555c47d7355b0353666f929af",coreVersion:"2.7.3",description:(()=>{const e=a(912);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(a.t.bind(a,799,17)).then((e=>e.default))}})()})})(),i=i.component})()));