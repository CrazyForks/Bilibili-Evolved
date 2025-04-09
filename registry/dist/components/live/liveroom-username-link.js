!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["live/liveroom-username-link"]=o():e["live/liveroom-username-link"]=o()}(globalThis,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)},o={};e.d(o,{component:()=>c});const t=coreApis.componentApis.define,n=coreApis.spinQuery,i=coreApis.utils,r=new WeakSet,c=(0,t.defineComponentMetadata)({name:"liveroomUsernameLink",author:{name:"Light_Quanta",link:"https://github.com/LightQuanta"},displayName:"添加直播间用户超链接",entry:async()=>{const e=await(0,n.select)("#rank-list-ctnr-box",{queryInterval:500});new MutationObserver((async()=>{const e=[...document.querySelectorAll("webcomponent-userinfo")];let o=!1;for(const t of e){if(r.has(t))continue;
// eslint-disable-next-line no-underscore-dangle
const{uid:e}=t.__vue__.source.uinfo;if(!o){for(;null===t.shadowRoot.querySelector("a")||null===t.shadowRoot.querySelector(".faceBox");)await(0,i.delay)(100);o=!0}const n=t.shadowRoot.querySelector("a"),c=t.shadowRoot.querySelector(".faceBox");n.href=`https://space.bilibili.com/${e}`,n.style.textDecoration="none",c.style.cursor="pointer",c.addEventListener("click",(()=>{window.open(`https://space.bilibili.com/${e}`)})),r.add(t)}const t=[...document.querySelectorAll(".gift-rank-list-item")];for(const e of t){if(r.has(e))continue;const o=e.querySelector(".common-nickname-wrapper .name");o.style.cursor="pointer",o.addEventListener("click",(()=>{
// eslint-disable-next-line no-underscore-dangle
const{uid:e}=o.parentNode.parentNode.parentNode.parentNode.__vue__.source;window.open(`https://space.bilibili.com/${e}`)}));const t=e.querySelector(".face");t.style.cursor="pointer",t.addEventListener("click",(()=>{
// eslint-disable-next-line no-underscore-dangle
const{uid:e}=t.parentNode.parentNode.__vue__.source;window.open(`https://space.bilibili.com/${e}`)})),r.add(e)}})).observe(e,{childList:!0,subtree:!0})},tags:[componentsTags.live],urlInclude:[/^https:\/\/live\.bilibili\.com\/\d+/],description:{"zh-CN":"为直播间的房间观众和大航海界面的用户列表添加可以点击的超链接"},commitHash:"8c9c89e753f259493239e731066b7d875b170312",coreVersion:"2.10.1"});return o=o.component})()));