!function(i,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["touch/double-click-control"]=o():i["touch/double-click-control"]=o()}(globalThis,(()=>(()=>{var i,o,l={223:(i,o,l)=>{var e=l(355)((function(i){return i[1]}));e.push([i.id,".disable-original-hover .bilibili-player-video-control-bottom, .disable-original-hover .bilibili-player-video-control-mask, .disable-original-hover .bilibili-player-video-progress-shadow, .disable-original-hover .bilibili-player-video-top {\n  opacity: 0 !important;\n  visibility: hidden !important;\n}\n.disable-original-hover .bpx-player-shadow-progress-area,\n.disable-original-hover .bilibili-player-video-control-wrap {\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n.disable-original-hover .bilibili-player-video-control-top {\n  opacity: 1 !important;\n  left: 0 !important;\n  right: 0 !important;\n  bottom: -7px !important;\n  visibility: visible !important;\n}\n.disable-original-hover .bpx-player-control-top,\n.disable-original-hover .bpx-player-control-mask,\n.disable-original-hover .bpx-player-control-bottom,\n.disable-original-hover .bpx-player-top-wrap {\n  opacity: 0 !important;\n  visibility: hidden !important;\n}\n.disable-original-hover .squirtle-progress-wrap {\n  top: unset !important;\n  bottom: 0 !important;\n  height: 2px !important;\n  width: 100% !important;\n  margin: 0 !important;\n}\n.disable-original-hover .squirtle-progress-wrap .squirtle-progress-bar {\n  height: 2px !important;\n  bottom: 0 !important;\n}\n.disable-original-hover .squirtle-high-energy {\n  width: 100% !important;\n  top: unset !important;\n  bottom: 2px !important;\n  margin: 0 !important;\n}\n.disable-original-hover .squirtle-controller-wrap {\n  display: none !important;\n}\n.disable-original-hover.touch-video-control-show .bilibili-player-video-control-bottom, .disable-original-hover.touch-video-control-show .bilibili-player-video-control-mask, .disable-original-hover.touch-video-control-show .bilibili-player-video-top {\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n.disable-original-hover.touch-video-control-show .bilibili-player-video-control-top {\n  opacity: 1 !important;\n  bottom: 44px !important;\n}\n.disable-original-hover.touch-video-control-show .bpx-player-shadow-progress-area {\n  opacity: 0 !important;\n  visibility: hidden !important;\n}\n.disable-original-hover.touch-video-control-show .bpx-player-top-wrap,\n.disable-original-hover.touch-video-control-show .bpx-player-control-mask,\n.disable-original-hover.touch-video-control-show .bpx-player-control-bottom,\n.disable-original-hover.touch-video-control-show .bpx-player-control-top {\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n.disable-original-hover.touch-video-control-show .squirtle-progress-wrap {\n  top: 0 !important;\n  bottom: unset !important;\n  height: 16px !important;\n  width: calc(100% - 24px) !important;\n  margin: 0 12px !important;\n}\n.disable-original-hover.touch-video-control-show .squirtle-progress-wrap .squirtle-progress-bar {\n  height: 4px !important;\n  bottom: 6px !important;\n}\n.disable-original-hover.touch-video-control-show .squirtle-high-energy {\n  width: calc(100% - 24px) !important;\n  top: -22px !important;\n  bottom: unset !important;\n  margin: 0 12px !important;\n}\n.disable-original-hover.touch-video-control-show .squirtle-controller-wrap {\n  display: flex !important;\n}\n.disable-original-hover #bilibili_pbp,\n.disable-original-hover #bilibili_pbp_canvas {\n  opacity: 0 !important;\n}\n.disable-original-hover #bilibili_pbp.pin,\n.disable-original-hover #bilibili_pbp_canvas.pin {\n  opacity: 1 !important;\n}\n.disable-original-hover #bilibili_pbp_pin {\n  opacity: 0 !important;\n}\n.disable-original-hover.touch-video-control-show #bilibili_pbp,\n.disable-original-hover.touch-video-control-show #bilibili_pbp_canvas {\n  opacity: 1 !important;\n}\n.disable-original-hover.touch-video-control-show #bilibili_pbp_pin {\n  opacity: 1 !important;\n}\n.disable-original-hover .bilibili-player-video-control #bilibili_pbp,\n.disable-original-hover .bilibili-player-video-control #bilibili_pbp_canvas {\n  left: 0 !important;\n  width: 100% !important;\n}\n.disable-original-hover .bilibili-player-video-control #bilibili_pbp.pin,\n.disable-original-hover .bilibili-player-video-control #bilibili_pbp_canvas.pin {\n  bottom: 3px !important;\n}\n.disable-original-hover .bpx-player-pbp {\n  opacity: 0 !important;\n  bottom: 3px !important;\n}\n.disable-original-hover .bpx-player-pbp.pin {\n  opacity: 1 !important;\n}\n.disable-original-hover .bpx-player-pbp .bpx-player-pbp-pin {\n  opacity: 0 !important;\n}\n.disable-original-hover.touch-video-control-show .bpx-player-pbp {\n  opacity: 1 !important;\n  bottom: calc(100% - 1px) !important;\n}\n.disable-original-hover.touch-video-control-show .bpx-player-pbp .bpx-player-pbp-pin {\n  opacity: 1 !important;\n}\n.disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp,\n.disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp_canvas {\n  bottom: calc(100% - 2px) !important;\n}\n.disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp_pin {\n  right: -8px !important;\n}\n@media screen and (min-width: 750px) {\n  body.player-mode-webfullscreen .disable-original-hover .bilibili-player-video-control #bilibili_pbp.pin,\nbody.player-mode-webfullscreen .disable-original-hover .bilibili-player-video-control #bilibili_pbp_canvas.pin, body.player-fullscreen-fix .disable-original-hover .bilibili-player-video-control #bilibili_pbp.pin,\nbody.player-fullscreen-fix .disable-original-hover .bilibili-player-video-control #bilibili_pbp_canvas.pin, body.player-full-win .disable-original-hover .bilibili-player-video-control #bilibili_pbp.pin,\nbody.player-full-win .disable-original-hover .bilibili-player-video-control #bilibili_pbp_canvas.pin {\n    bottom: 4px !important;\n  }\n  body.player-mode-webfullscreen .disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp,\nbody.player-mode-webfullscreen .disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp_canvas, body.player-fullscreen-fix .disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp,\nbody.player-fullscreen-fix .disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp_canvas, body.player-full-win .disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp,\nbody.player-full-win .disable-original-hover.touch-video-control-show .bilibili-player-video-control #bilibili_pbp_canvas {\n    bottom: calc(100% + 5px) !important;\n  }\n  body.player-mode-webfullscreen .disable-original-hover.touch-video-control-show .bpx-player-pbp, body.player-fullscreen-fix .disable-original-hover.touch-video-control-show .bpx-player-pbp, body.player-full-win .disable-original-hover.touch-video-control-show .bpx-player-pbp {\n    bottom: calc(100% + 5px) !important;\n  }\n}\n.disable-original-hover.bilibili-player-area .subtitle-position.subtitle-position-bc, .disable-original-hover.bilibili-player-area .subtitle-position.subtitle-position-bl, .disable-original-hover.bilibili-player-area .subtitle-position.subtitle-position-br {\n  bottom: 20px !important;\n}\n.disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bc, .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bl, .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-br {\n  bottom: 68px !important;\n}\n.disable-original-hover .bpx-player-subtitle-panel-position[data-position=bottom] {\n  bottom: 14px !important;\n}\n.disable-original-hover.touch-video-control-show .bpx-player-subtitle-panel-position[data-position=bottom] {\n  bottom: 69px !important;\n}\nbody.player-mode-webfullscreen .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bc, body.player-mode-webfullscreen .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bl, body.player-mode-webfullscreen .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-br, body.player-fullscreen-fix .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bc, body.player-fullscreen-fix .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bl, body.player-fullscreen-fix .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-br, body.player-full-win .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bc, body.player-full-win .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-bl, body.player-full-win .disable-original-hover.touch-video-control-show .subtitle-position.subtitle-position-br {\n  bottom: 88px !important;\n}\nbody.player-mode-webfullscreen .disable-original-hover.touch-video-control-show .bpx-player-subtitle-panel-position[data-position=bottom], body.player-fullscreen-fix .disable-original-hover.touch-video-control-show .bpx-player-subtitle-panel-position[data-position=bottom], body.player-full-win .disable-original-hover.touch-video-control-show .bpx-player-subtitle-panel-position[data-position=bottom] {\n  bottom: 88px !important;\n}\n\n@media screen and (min-width: 750px) {\n  .player .bilibili-player.mode-fullscreen .disable-original-hover .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .disable-original-hover .bilibili-player-video-control-top {\n    left: 0 !important;\n    right: 0 !important;\n    bottom: -7px !important;\n  }\n  .player .bilibili-player.mode-fullscreen .disable-original-hover.touch-video-control-show .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .disable-original-hover.touch-video-control-show .bilibili-player-video-control-top {\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 68px !important;\n  }\n  .player .bilibili-player.mode-fullscreen .bilibili-player-area.video-control-show:not(.disable-original-hover) .bilibili-player-video-control-top, .player .bilibili-player.mode-fullscreen .bilibili-player-area.mouse-hover:not(.disable-original-hover) .bilibili-player-video-control-top, .player .bilibili-player.mode-fullscreen .bilibili-player-area.video-control-show:not(.disable-original-hover) .bilibili-player-video-control-top, .player .bilibili-player.mode-fullscreen .bilibili-player-area.mouse-hover:not(.disable-original-hover) .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .bilibili-player-area.video-control-show:not(.disable-original-hover) .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .bilibili-player-area.mouse-hover:not(.disable-original-hover) .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .bilibili-player-area.video-control-show:not(.disable-original-hover) .bilibili-player-video-control-top,\n.player .bilibili-player.mode-webfullscreen .bilibili-player-area.mouse-hover:not(.disable-original-hover) .bilibili-player-video-control-top {\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 68px !important;\n  }\n}",""]),i.exports=e},355:i=>{"use strict";
// eslint-disable-next-line func-names
i.exports=function(i){var o=[];return o.toString=function(){return this.map((function(o){var l=i(o);return o[2]?"@media ".concat(o[2]," {").concat(l,"}"):l})).join("")},
// eslint-disable-next-line func-names
o.i=function(i,l,e){"string"==typeof i&&(
// eslint-disable-next-line no-param-reassign
i=[[null,i,""]]);var t={};if(e)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var n=this[r][0];null!=n&&(t[n]=!0)}for(var a=0;a<i.length;a++){var p=[].concat(i[a]);e&&t[p[0]]||(l&&(p[2]?p[2]="".concat(l," and ").concat(p[2]):p[2]=l),o.push(p))}},o}},449:(i,o,l)=>{var e=l(223);e&&e.__esModule&&(e=e.default),i.exports="string"==typeof e?e:e.toString()},605:i=>{"use strict";i.exports=coreApis.utils}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return l[i](r,r.exports,t),r.exports}t.n=i=>{var o=i&&i.__esModule?()=>i.default:()=>i;return t.d(o,{a:o}),o},o=Object.getPrototypeOf?i=>Object.getPrototypeOf(i):i=>i.__proto__,t.t=function(l,e){if(1&e&&(l=this(l)),8&e)return l;if("object"==typeof l&&l){if(4&e&&l.__esModule)return l;if(16&e&&"function"==typeof l.then)return l}var r=Object.create(null);t.r(r);var n={};i=i||[null,o({}),o([]),o(o)];for(var a=2&e&&l;"object"==typeof a&&!~i.indexOf(a);a=o(a))Object.getOwnPropertyNames(a).forEach((i=>n[i]=()=>l[i]));return n.default=()=>l,t.d(r,n),r},t.d=(i,o)=>{for(var l in o)t.o(o,l)&&!t.o(i,l)&&Object.defineProperty(i,l,{enumerable:!0,get:o[l]})},t.o=(i,o)=>Object.prototype.hasOwnProperty.call(i,o),t.r=i=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var r={};return(()=>{"use strict";t.d(r,{component:()=>b});const i=coreApis.componentApis.define,o=coreApis.componentApis.video.playerAgent,l=coreApis.observer,e=coreApis.style,n=coreApis.utils.urls;var a=t(449),p=t.n(a);const b=(0,i.defineComponentMetadata)({name:"doubleClickControl",displayName:"启用双击控制",description:{"zh-CN":"将视频播放器的操作方式更改为: 单击显示 / 隐藏控制栏, 双击播放 / 暂停. 请注意不能和 `双击全屏` 一同使用."},tags:[componentsTags.touch],enabledByDefault:navigator.maxTouchPoints>0,urlInclude:n.playerUrls,entry:async()=>{(0,e.addStyle)(p());const i="disable-original-hover";(0,l.videoChange)((async()=>{const l=await o.playerAgent.query.playerArea();if(l.classList.contains(i))return;l.classList.add(i);const e=o.playerAgent.query.video.container.sync(),{DoubleClickEvent:r}=await Promise.resolve().then(t.t.bind(t,605,23)),n=new r((()=>o.playerAgent.togglePlay()),!0);n.singleClickHandler=()=>{l.classList.toggle("touch-video-control-show")},n.bind(e)}))},commitHash:"0ba5f2f117d86ddb2c5f711516cc33d5fe28b9ed",coreVersion:"2.7.1"})})(),r=r.component})()));