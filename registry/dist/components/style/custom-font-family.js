!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/custom-font-family"]=t():e["style/custom-font-family"]=t()}(globalThis,(()=>(()=>{var e,t,n={517:(e,t,n)=>{var o=n(218)((function(e){return e[1]}));o.push([e.id,".custom-font-family-extra-options-entry {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}",""]),e.exports=o},300:(e,t,n)=>{var o=n(218)((function(e){return e[1]}));o.push([e.id,".be-extra-options-panel.be-extra-options-panel {\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  border: 1px solid rgba(136, 136, 136, 0.1333333333);\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  max-width: 80vw;\n  max-height: 80vh;\n  padding: 18px 0;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) scale(0.95);\n  transition: all 0.2s ease-out;\n  font-size: 14px;\n  line-height: normal;\n  z-index: 100002;\n}\nbody.dark .be-extra-options-panel.be-extra-options-panel {\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .be-extra-options-panel.be-extra-options-panel {\n  background-color: #282828;\n  color: #eee;\n}\nbody.dark .be-extra-options-panel.be-extra-options-panel {\n  background-color: #222;\n}\n.be-extra-options-panel.be-extra-options-panel.open {\n  transform: translateX(-50%) translateY(-50%) scale(1);\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-header {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 18px 14px 18px;\n  flex-shrink: 0;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-header > .be-eop-h-title {\n  display: flex;\n  column-gap: 4px;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-header > .be-eop-h-title > .be-eop-h-t-text {\n  font-weight: 600;\n  font-size: 19px;\n  line-height: 20px;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-header > .be-eop-h-actions {\n  display: flex;\n  column-gap: 18px;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-header > .be-eop-h-actions > .be-eop-h-a-action {\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-header > .be-eop-h-actions > .be-eop-h-a-action:hover {\n  color: var(--theme-color);\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-separator {\n  height: 1px;\n  margin: 0 18px;\n  background-color: rgba(0, 0, 0, 0.1);\n  flex-shrink: 0;\n}\nbody.dark .be-extra-options-panel.be-extra-options-panel > .be-eop-separator {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-content {\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n  padding: 14px 18px 0 18px;\n  overflow: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-content::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-content > .be-eop-c-option {\n  margin-bottom: 18px;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-content > .be-eop-c-option:nth-last-child(1) {\n  margin-bottom: 12px;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-content > .be-eop-c-option > .be-eop-c-o-title {\n  margin-bottom: 2px;\n  font-size: 14px;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-content > .be-eop-c-option > .be-eop-c-o-description {\n  margin-bottom: 8px;\n  opacity: 0.6;\n  font-size: 12px;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-content > .be-eop-c-option > .be-eop-c-o-input {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}",""]),e.exports=o},313:(e,t,n)=>{var o=n(218)((function(e){return e[1]}));o.push([e.id,".custom-font-family-extra-options-panel.peek {\n  opacity: 0.1;\n}\n.custom-font-family-extra-options-panel > .be-eop-content > .be-eop-c-option > .be-eop-c-o-input.input-input-font-family > .be-text-area {\n  min-height: 160px;\n}",""]),e.exports=o},633:(e,t,n)=>{var o=n(218)((function(e){return e[1]}));o.push([e.id,'@charset "UTF-8";\nhtml[custom-font-family--options--disable-quotation-mark-text-indent=true] :is(p[title^=「],\np[title^=『],\np[title^=【],\nh1[title^=「],\nh1[title^=『],\nh1[title^=【],\nh3[title^=「],\nh3[title^=『],\nh3[title^=【]) {\n  text-indent: initial !important;\n}',""]),e.exports=o},150:(e,t,n)=>{var o=n(218)((function(e){return e[1]}));o.push([e.id,"html[custom-font-family--detect--is-input-empty=false] :not(.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing .user-sailing-text .sailing-text, .bili-dyn-ornament__type--3 span, .bb-comment .sailing .sailing-info, .comment-bilibili-fold .sailing .sailing-info, .badge-level, .bili-dm, .iconfont, .icon-font, .read-icon, .bili-note-iconfont, .bili-footer-font, [class^=icon-], .bilifont, .bp-icon-font, .bcc-iconfont, .fontvt, .article-detail .article-container .article-container__content .article-content .read-article-holder, .article-detail .article-container .article-container__content .article-content .read-article-holder *, .season-cover .score, .season-cover .season-cover-score) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--on-ornament=true] :is(.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing .user-sailing-text .sailing-text, .bili-dyn-ornament__type--3 span, .bb-comment .sailing .sailing-info, .comment-bilibili-fold .sailing .sailing-info) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--on-fans-medal=true] :is(.badge-level) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--on-danmaku=true] :is(.bili-dm) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--on-icon-font=true] :is(.iconfont, .icon-font, .read-icon, .bili-note-iconfont, .bili-footer-font, [class^=icon-], .bilifont, .bp-icon-font, .bcc-iconfont, .fontvt) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--on-column=true] :is(.article-detail .article-container .article-container__content .article-content .read-article-holder, .article-detail .article-container .article-container__content .article-content .read-article-holder *) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--on-score=true] :is(.season-cover .score, .season-cover .season-cover-score) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}",""]),e.exports=o},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var i={};if(o)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var s=this[a][0];null!=s&&(i[s]=!0)}for(var r=0;r<e.length;r++){var l=[].concat(e[r]);o&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},186:(e,t,n)=>{"use strict";n.d(t,{n:()=>o});const o="Microsoft Yahei, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei"},458:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"custom-font-family-extra-options-entry"},[t("VButton",{on:{mouseover:function(t){return e.loadPanel()},click:function(t){return e.togglePanelDisplay()}}},[e._v("\n    字体设置"),t("VIcon",{attrs:{icon:"right-arrow",size:16}})],1)],1)};o._withStripped=!0;var i=n(309),a=n(648),s=n(605);let r;const l=(0,i.defineComponent)({components:{VIcon:a.VIcon,VButton:a.VButton},methods:{loadPanel:async()=>{Boolean(r)||await(async()=>{const e=await Promise.resolve().then(n.bind(n,249)).then((e=>e.default));r=(0,s.mountVueComponent)(e),document.body.insertAdjacentElement("beforeend",r.$el)})()},togglePanelDisplay:async()=>{r.toggleDisplay()}}});var c=n(332),p=n.n(c),u=n(517),f=n.n(u),d={insert:"head",singleton:!1};p()(f(),d);f().locals;const m=(0,n(499).Z)(l,o,[],!1,null,null,null).exports},249:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("ExtraOptionsPanel",{ref:"extraOptionsPanel",staticClass:"custom-font-family-extra-options-panel",class:{peek:e.isPeeking},attrs:{"init-data":e.initData},scopedSlots:e._u([{key:"input0",fn:function(){return[t("TextArea",{model:{value:e.inputFontFamily,callback:function(t){e.inputFontFamily=t},expression:"inputFontFamily"}})]},proxy:!0}])})};o._withStripped=!0;var i=n(309),a=n(648),s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("VPopup",{staticClass:"be-extra-options-panel",attrs:{fixed:"",lazy:!1},model:{value:e.popupOpen,callback:function(t){e.popupOpen=t},expression:"popupOpen"}},[t("div",{staticClass:"be-eop-header"},[t("div",{staticClass:"be-eop-h-title"},[t("VIcon",{staticClass:"be-eop-h-t-icon",attrs:{icon:e.initData.header.title.icon,size:24}}),e._v(" "),t("div",{staticClass:"be-eop-h-t-text"},[e._v(e._s(e.initData.header.title.text))])],1),e._v(" "),t("div",{staticClass:"be-eop-h-actions"},[e._l(e.initData.header.actions,(function(e){return t("div",{key:e.id,staticClass:"be-eop-h-a-action"},[t("VIcon",{ref:`action${e.id}`,refInFor:!0,class:`action-${e.actionClassNameSuffix}`,attrs:{title:e.title,icon:e.icon,size:24}})],1)})),e._v(" "),t("div",{staticClass:"be-eop-h-a-action"},[t("VIcon",{staticClass:"action-close",attrs:{title:"关闭",icon:"mdi-close",size:24},on:{click:function(t){e.popupOpen=!1}}})],1)],2)]),e._v(" "),t("div",{staticClass:"be-eop-separator"}),e._v(" "),t("div",{staticClass:"be-eop-content"},e._l(e.initData.content.options,(function(n){return t("div",{key:n.id,staticClass:"be-eop-c-option"},[t("div",{staticClass:"be-eop-c-o-title"},[e._v(e._s(n.title))]),e._v(" "),t("div",{staticClass:"be-eop-c-o-description"},[e._v(e._s(n.description))]),e._v(" "),t("div",{staticClass:"be-eop-c-o-input",class:`input-${n.inputClassNameSuffix}`},[e._t(`input${n.id}`,(function(){return[e._v("\n          选项输入入口默认文字，使用含 v-slot 指令的 template 元素以替换默认内容\n        ")]}))],2)])})),0)])};s._withStripped=!0;const r=(0,i.defineComponent)({name:"ExtraOptionsPanel",components:{VPopup:a.VPopup,VIcon:a.VIcon},props:{initData:{type:Object,default:{header:{title:{text:"默认标题",icon:"mdi-format-font"},actions:[{id:0,title:"默认动作 0",icon:"mdi-cog-sync-outline",actionClassNameSuffix:"default-action-0"},{id:1,title:"默认动作 1",icon:"mdi-eye-outline",actionClassNameSuffix:"default-action-1"}]},content:{options:[{id:0,title:"默认选项 0",description:"默认选项 0 的说明",inputClassNameSuffix:"default-option-0"},{id:1,title:"默认选项 1",description:"默认选项 1 的说明",inputClassNameSuffix:"default-option-1"}]}}}},data:()=>({popupOpen:!1})});var l=n(332),c=n.n(l),p=n(300),u=n.n(p),f={insert:"head",singleton:!1};c()(u(),f);u().locals;var d=n(499);const m=(0,d.Z)(r,s,[],!1,null,null,null).exports;var b=n(986);const y=coreApis.toast;var h=n(605);const x=coreApis.utils.log;var v=n(186);const g={header:{title:{text:"自定义字体",icon:"mdi-format-font"},actions:[{id:0,title:"重置面板中的所有选项为默认值",icon:"mdi-cog-sync-outline",actionClassNameSuffix:"reset"},{id:1,title:"透视",icon:"mdi-eye-outline",actionClassNameSuffix:"peek"}]},content:{options:[{id:0,title:"自定义字体",description:"输入需要设置的字体，不同字体之间必须以英文逗号分隔",inputClassNameSuffix:"input-font-family"}]}},_=(0,x.useScopedConsole)("自定义字体"),C=(0,i.defineComponent)({components:{ExtraOptionsPanel:m,TextArea:a.TextArea},data:()=>({isPeeking:!1,isMouseOverPeekIcon:!1,initData:g,inputFontFamily:(0,b.getComponentSettings)("customFontFamily").options.fontFamily}),watch:{inputFontFamily:lodash.debounce((e=>{(0,b.getComponentSettings)("customFontFamily").options.fontFamily=e}),1e3),async isMouseOverPeekIcon(e){e?(e&&await(0,h.delay)(200),this.isMouseOverPeekIcon&&(this.isPeeking=!0)):this.isPeeking=!1}},mounted(){this.$refs.extraOptionsPanel.$refs.action0[0].$el.addEventListener("click",this.confirmResetOptions);const e=this.$refs.extraOptionsPanel.$refs.action1[0].$el;e.addEventListener("mouseover",this.setIsMouseOverPeekIconToTrue),e.addEventListener("mouseout",this.setIsMouseOverPeekIconToFalse)},methods:{toggleDisplay(){this.$refs.extraOptionsPanel.popupOpen=!this.$refs.extraOptionsPanel.popupOpen},setIsMouseOverPeekIconToTrue(){this.isMouseOverPeekIcon=!0},setIsMouseOverPeekIconToFalse(){this.isMouseOverPeekIcon=!1},confirmResetOptions(){confirm("确定将面板中的所有选项重置为默认值吗？")&&this.resetOptions()},resetOptions(){(0,b.getComponentSettings)("customFontFamily").options.fontFamily=v.n,this.inputFontFamily=v.n,y.Toast.success("字体设置面板中的所有选项已成功被重置为默认值","自定义字体",2e3),_.log("字体设置面板中的所有选项已成功被重置为默认值")}}});var k=n(313),O=n.n(k),P={insert:"head",singleton:!1};c()(O(),P);O().locals;const S=(0,d.Z)(C,o,[],!1,null,null,null).exports},499:(e,t,n)=>{"use strict";function o(e,t,n,o,i,a,s,r){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):i&&(l=r?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var p=c.render;c.render=function(e,t){return l.call(t),p(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}n.d(t,{Z:()=>o})},332:(e,t,n)=>{"use strict";var o,i=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function r(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],i=0;i<e.length;i++){var a=e[i],l=t.base?a[0]+t.base:a[0],c=n[l]||0,p="".concat(l," ").concat(c);n[l]=c+1;var u=r(p),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(s[u].references++,s[u].updater(f)):s.push({identifier:p,updater:y(f,t),references:1}),o.push(p)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var s=a(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var p,u=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function f(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var a=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function d(e,t,n){var o=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,b=0;function y(e,t){var n,o,i;if(t.singleton){var a=b++;n=m||(m=c(t)),o=f.bind(null,n,a,!1),i=f.bind(null,n,a,!0)}else n=c(t),o=d.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=r(n[o]);s[i].references--}for(var a=l(e,t),c=0;c<n.length;c++){var p=r(n[c]);0===s[p].references&&(s[p].updater(),s.splice(p,1))}n=a}}}},53:(e,t,n)=>{var o=n(633);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},143:(e,t,n)=>{var o=n(150);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},814:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=814,e.exports=t},697:e=>{"use strict";e.exports="使用组件提供的字体设置覆盖原版的主站字体，并使主站字体可被自定义。\n\n当组件被启用后，几乎所有的元素会立即应用组件提供的字体设置。\n\n而 `覆盖*` 选项相当于一个白名单，使用了特殊字体的元素会被加入其中。默认情况下这些元素不会应用组件提供的字体设置，只有在启用对应的 `覆盖*` 选项后才会应用。\n\n字体设置写法请参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)、默认设置与设置说明。"},309:e=>{"use strict";e.exports=globalThis.Vue},986:e=>{"use strict";e.exports=coreApis.settings},648:e=>{"use strict";e.exports=coreApis.ui},605:e=>{"use strict";e.exports=coreApis.utils}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={id:e,exports:{}};return n[e](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var a=Object.create(null);i.r(a);var s={};e=e||[null,t({}),t([]),t(t)];for(var r=2&o&&n;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((e=>s[e]=()=>n[e]));return s.default=()=>n,i.d(a,s),a},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";i.d(a,{component:()=>u});const e=coreApis.componentApis.define;var t=i(986),n=i(186);const o=document.documentElement,s="custom-font-family",r="customFontFamily",l=[componentsTags.style,componentsTags.general],c={fontFamily:{displayName:"字体",defaultValue:n.n,hidden:!0},disableQuotationMarkTextIndent:{displayName:"禁用引号缩进",defaultValue:!0},onOrnament:{displayName:"覆盖装扮字体",defaultValue:!1},onFansMedal:{displayName:"覆盖粉丝勋章字体",defaultValue:!1},onDanmaku:{displayName:"覆盖弹幕字体",defaultValue:!1},onIconFont:{displayName:"覆盖图标字体",defaultValue:!1},onColumn:{displayName:"覆盖专栏自定义字体",defaultValue:!1},onScore:{displayName:"覆盖评分字体",defaultValue:!1}},p=[{name:`${s}--style--set-font-family`,style:()=>Promise.resolve().then(i.t.bind(i,143,23)),important:!0},{name:`${s}--style--disable-quotation-mark-text-indent`,style:()=>Promise.resolve().then(i.t.bind(i,53,23)),important:!0}],u=(0,e.defineComponentMetadata)({name:r,displayName:"自定义字体",tags:l,entry:()=>{(0,t.addComponentListener)("customFontFamily.fontFamily",(e=>{e?(o.style.setProperty(`--${s}--options--font-family`,`${e}`),o.setAttribute(`${s}--detect--is-input-empty`,"false")):o.setAttribute(`${s}--detect--is-input-empty`,"true")}),!0),(0,t.addComponentListener)("customFontFamily.disableQuotationMarkTextIndent",(e=>{o.setAttribute(`${s}--options--disable-quotation-mark-text-indent`,`${e}`)}),!0);[{camel:"onOrnament",kebab:"on-ornament"},{camel:"onFansMedal",kebab:"on-fans-medal"},{camel:"onDanmaku",kebab:"on-danmaku"},{camel:"onIconFont",kebab:"on-icon-font"},{camel:"onColumn",kebab:"on-column"},{camel:"onScore",kebab:"on-score"}].forEach((e=>{(0,t.addComponentListener)(`customFontFamily.${e.camel}`,(t=>{o.setAttribute(`${s}--options--${e.kebab}`,`${t}`)}),!0)}))},options:c,extraOptions:()=>Promise.resolve().then(i.bind(i,458)).then((e=>e.default)),instantStyles:p,author:{name:"Tinhone",link:"https://github.com/Tinhone"},commitHash:"2819ddbe63830235c7ca94410fd7415b554e7488",coreVersion:"2.8.6",description:(()=>{const e=i(814);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(i.t.bind(i,697,17)).then((e=>e.default))}})()})})(),a=a.component})()));