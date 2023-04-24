!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["utils/black-list"]=e():t["utils/black-list"]=e()}(globalThis,(()=>(()=>{var t={62:(t,e,n)=>{"use strict";n.d(e,{q:()=>s});const s="blackList.data"},247:(t,e,n)=>{var s=n(355)((function(t){return t[1]}));s.push([t.id,".custom-black-list-settings {\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  border: 1px solid rgba(136, 136, 136, 0.1333333333);\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  width: 400px;\n  font-size: 14px;\n  padding: 12px 12px 12px 18px;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) scale(0.95);\n  transition: 0.2s ease-out;\n  z-index: 100002;\n}\nbody.dark .custom-black-list-settings {\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .custom-black-list-settings {\n  background-color: #282828;\n  color: #eee;\n}\nbody.dark .custom-black-list-settings {\n  background-color: #222;\n}\n.custom-black-list-settings.open {\n  transform: translateX(-50%) translateY(-50%) scale(1);\n}\n.custom-black-list-settings .black-list-settings-header {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  justify-content: space-between;\n}\n.custom-black-list-settings .black-list-settings-header .title {\n  margin-left: 6px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.custom-black-list-settings .black-list-settings-header .grow {\n  flex: 1;\n}\n.custom-black-list-settings .black-list-settings-header .close {\n  padding: 6px;\n  cursor: pointer;\n  transition: 0.2s ease-out;\n}\n.custom-black-list-settings .black-list-settings-header .close:hover {\n  color: var(--theme-color);\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section {\n  margin-top: 12px;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section > :not(:last-child) {\n  margin-bottom: 6px;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-title {\n  font-size: 14px;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-input {\n  display: flex;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-input div {\n  margin: 0 10px;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-description {\n  font-size: 12px;\n  opacity: 0.6;\n  line-height: 1.5;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  flex-wrap: wrap;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .be-slider {\n  margin: 0 4px;\n  flex: 1;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .padding-value {\n  margin-left: 12px;\n  width: 50px;\n  text-align: end;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item {\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  border: 1px solid rgba(136, 136, 136, 0.1333333333);\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  display: flex;\n  align-items: center;\n  gap: 0;\n  transition: none;\n  white-space: nowrap;\n  padding: 6px;\n  padding-left: 8px;\n  margin: 0 4px 4px 0;\n  cursor: move;\n}\nbody.dark .custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item {\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item {\n  background-color: #282828;\n  color: #eee;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item:hover {\n  border-color: var(--theme-color);\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item.black-list-hidden {\n  opacity: 0.5;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item.sortable-ghost {\n  opacity: 0;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item.sortable-chosen {\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.16);\n  transform: scale(1.05);\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item.sortable-drag {\n  opacity: 1;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item.sortable-drag.black-list-hidden {\n  opacity: 0.5;\n}\n.custom-black-list-settings .black-list-settings-content .black-list-settings-section-content .black-list-sort-item .toggle-visible {\n  margin-left: 6px;\n  cursor: pointer;\n}",""]),t.exports=s},365:(t,e,n)=>{var s=n(355)((function(t){return t[1]}));s.push([t.id,".custom-black-list-extra-options {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}",""]),t.exports=s},355:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,s){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var i={};if(s)for(var o=0;o<this.length;o++){
// eslint-disable-next-line prefer-destructuring
var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);s&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},662:(t,e,n)=>{"use strict";var s,i=function(){return void 0===s&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
s=Boolean(window&&document&&document.all&&!window.atob)),s},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function l(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},s=[],i=0;i<t.length;i++){var o=t[i],c=e.base?o[0]+e.base:o[0],r=n[c]||0,d="".concat(c," ").concat(r);n[c]=r+1;var u=l(d),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:m(p,e),references:1}),s.push(d)}return s}function r(t){var e=document.createElement("style"),s=t.attributes||{};if(void 0===s.nonce){var i=n.nc;i&&(s.nonce=i)}if(Object.keys(s).forEach((function(t){e.setAttribute(t,s[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function p(t,e,n,s){var i=n?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(t.styleSheet)t.styleSheet.cssText=u(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function g(t,e,n){var s=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var b=null,f=0;function m(t,e){var n,s,i;if(e.singleton){var o=f++;n=b||(b=r(e)),s=p.bind(null,n,o,!1),i=p.bind(null,n,o,!0)}else n=r(e),s=g.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return s(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;s(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var s=0;s<n.length;s++){var i=l(n[s]);a[i].references--}for(var o=c(t,e),r=0;r<n.length;r++){var d=l(n[r]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=o}}}},295:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>p});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VPopup",{ref:"popup",staticClass:"custom-black-list-settings",attrs:{fixed:"",lazy:!1,"trigger-element":t.triggerElement},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[n("div",{staticClass:"black-list-settings-header"},[n("VIcon",{staticClass:"title-icon",attrs:{icon:"mdi-sort",size:24}}),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.titleName)+"黑名单设置")]),t._v(" "),n("div",{staticClass:"grow"}),t._v(" "),n("div",{staticClass:"close",on:{click:function(e){t.open=!1}}},[n("VIcon",{attrs:{icon:"close",size:18}})],1)],1),t._v(" "),n("div",{staticClass:"black-list-settings-content"},[n("div",{staticClass:"black-list-settings-section"},[n("div",{staticClass:"black-list-settings-section-title"},[t._v("添加到黑名单")]),t._v(" "),n("div",{staticClass:"black-list-settings-section-input"},[n("TextBox",{attrs:{text:t.name},on:{change:t.changeName}}),t._v(" "),n("VButton",{on:{click:t.add}},[t._v("添加")])],1)]),t._v(" "),n("div",{staticClass:"black-list-settings-section"},[n("div",{staticClass:"black-list-settings-section-title"},[t._v("黑名单列表")]),t._v(" "),n("div",{staticClass:"black-list-settings-section-description"},[t._v("点击×图标可以删除名单.")]),t._v(" "),t.loaded?t._e():n("VLoading"),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],ref:"black-listSortList",staticClass:"black-list-settings-section-content black-list-sort-list"},t._l(t.list,(function(e){return n("div",{key:e,staticClass:"black-list-sort-item",attrs:{"data-name":e}},[n("div",{staticClass:"item-name"},[t._v("\n            "+t._s(e)+"\n          ")]),t._v(" "),n("div",{staticClass:"toggle-visible"},[n("VIcon",{attrs:{size:18,icon:"close"},on:{click:function(n){return t.toggleVisible(e)}}})],1)])})),0)],1)])])};s._withStripped=!0;var i=n(648);const o=Vue.extend({components:{VPopup:i.VPopup,TextBox:i.TextBox,VIcon:i.VIcon,VButton:i.VButton},props:{triggerElement:{type:HTMLElement,default:null},list:{type:Array,default:null},save:{type:Function,default:void 0},titleName:{type:String,default:""}},data:()=>({open:!1,loaded:!1,name:""}),watch:{open(t){t||this.save(this.list)}},async mounted(){this.loaded=!0},methods:{toggle(){this.$refs.popup.toggle()},changeName(t){this.name=t},add(){
// eslint-disable-next-line vue/no-mutating-props
this.list.push(this.name),
// eslint-disable-next-line vue/no-mutating-props
this.list=lodash.uniq(this.list),this.name=""},toggleVisible(t){
// eslint-disable-next-line vue/no-mutating-props
this.list.splice(this.list.indexOf(t),1)}}});var a=n(662),l=n.n(a),c=n(247),r=n.n(c),d={insert:"head",singleton:!1};l()(r(),d);r().locals;var u=(0,n(133).Z)(o,s,[],!1,null,null,null);u.options.__file="registry/lib/components/utils/black-list/BlackListSettings.vue";const p=u.exports},954:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>y});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"custom-black-list-extra-options"},[t.login?n("VButton",{ref:"button",on:{mouseover:function(e){return t.loadNameBlackListSettings()},click:function(e){return t.toggleNameSettings()}}},[t._v("\n      精确匹配列表"),n("VIcon",{attrs:{icon:"right-arrow",size:16}})],1):t._e()],1),t._v(" "),n("div",{staticClass:"custom-black-list-extra-options"},[t.login?n("VButton",{ref:"button",on:{mouseover:function(e){return t.loadRegexBlackListSettings()},click:function(e){return t.toggleRegexSettings()}}},[t._v("\n      正则匹配列表"),n("VIcon",{attrs:{icon:"right-arrow",size:16}})],1):t._e()],1)])};s._withStripped=!0;const i=coreApis.utils;var o=n(648);const a=coreApis.settings;var l=n(153),c=n(62);let r,d;const u=(0,a.getComponentSettings)("blackList").options,p=async()=>{if(r)return!1;const t=await Promise.resolve().then(n.bind(n,295)).then((t=>t.default));return r=(0,i.mountVueComponent)(t),document.body.insertAdjacentElement("beforeend",r.$el),!0},g=async()=>{if(d)return!1;const t=await Promise.resolve().then(n.bind(n,295)).then((t=>t.default));return d=(0,i.mountVueComponent)(t),document.body.insertAdjacentElement("beforeend",d.$el),!0},b=Vue.extend({components:{VIcon:o.VIcon,VButton:o.VButton},data:()=>({login:Boolean((0,i.getUID)())}),methods:{async loadNameBlackListSettings(){if(await p()){(t=>{if(!r)return;r.triggerElement=t;const e=(0,l.getData)(c.q);r.list=lodash.cloneDeep(e[0].up),r.save=t=>{(0,l.addData)(c.q,(e=>{e.up=t})),u.up=t},r.titleName="精确匹配"})(this.$refs.button.$el)}},toggleNameSettings:async()=>{r||await p(),r?.toggle()},async loadRegexBlackListSettings(){if(await g()){(t=>{if(!d)return;d.triggerElement=t;const e=(0,l.getData)(c.q);d.list=lodash.cloneDeep(e[0].upRegex),d.save=t=>{(0,l.addData)(c.q,(e=>{e.upRegex=t})),u.upRegex=t},d.titleName="正则匹配"})(this.$refs.button.$el)}},toggleRegexSettings:async()=>{d||await g(),d?.toggle()}}});var f=n(662),m=n.n(f),v=n(365),k=n.n(v),h={insert:"head",singleton:!1};m()(k(),h);k().locals;var x=(0,n(133).Z)(b,s,[],!1,null,null,null);x.options.__file="registry/lib/components/utils/black-list/Settings.vue";const y=x.exports},133:(t,e,n)=>{"use strict";function s(t,e,n,s,i,o,a,l){var c,r="function"==typeof t?t.options:t;if(e&&(r.render=e,r.staticRenderFns=n,r._compiled=!0),s&&(r.functional=!0),o&&(r._scopeId="data-v-"+o),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},r._ssrRegister=c):i&&(c=l?function(){i.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(r.functional){r._injectStyles=c;var d=r.render;r.render=function(t,e){return c.call(e),d(t,e)}}else{var u=r.beforeCreate;r.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:r}}n.d(e,{Z:()=>s})},153:t=>{"use strict";t.exports=coreApis.pluginApis.data},648:t=>{"use strict";t.exports=coreApis.ui}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var o=e[s]={id:s,exports:{}};return t[s](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var s={};return(()=>{"use strict";n.d(s,{component:()=>c});const t=coreApis.componentApis.define,e=coreApis.utils.urls,i=coreApis.observer,o=coreApis.spinQuery;var a=n(153),l=n(62);const c=(0,t.defineComponentMetadata)({name:"blackList",entry:async t=>{let{settings:{options:e}}=t;const n={up:e.up,upRegex:e.upRegex};(0,a.registerData)(l.q,n);const s=await(0,o.selectAll)(".bili-grid");(0,i.allMutationsOn)(s,(async()=>{const t=await(0,o.selectAll)(".bili-video-card");if(!t)return;const e=(0,a.getData)(l.q),n=e[0].upRegex.map((t=>new RegExp(t)));t.forEach((t=>{const s=t.querySelector(".bili-video-card__info--author"),i=t.querySelector(".bili-video-card__info--tit > a");if(null!=s){const o=s.innerHTML;if(-1!==e[0].up.indexOf(o)){t.querySelector(".v-img.bili-video-card__cover").innerHTML="",s.innerHTML="",i.innerHTML=""}else for(const e in n)if(n[e].test(o)){t.querySelector(".v-img.bili-video-card__cover").innerHTML="",s.innerHTML="",i.innerHTML="";break}}}))}))},extraOptions:()=>Promise.resolve().then(n.bind(n,954)).then((t=>t.default)),options:{up:{displayName:"up主名称",defaultValue:[],hidden:!0},upRegex:{displayName:"正则匹配up主名称",defaultValue:[],hidden:!0}},displayName:"屏蔽黑名单up主",tags:[componentsTags.utils],description:{"zh-CN":"屏蔽黑名单up主, 根据up主的名称进行匹配，支持精确匹配和正则匹配. 请注意只能在首页中使用或调整设置."},author:{name:"snowraincloud",link:"https://github.com/snowraincloud"},urlInclude:e.mainSiteUrls,commitHash:"0ba5f2f117d86ddb2c5f711516cc33d5fe28b9ed",coreVersion:"2.7.1"})})(),s=s.component})()));