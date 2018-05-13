/*!
 * vue-material v1.0.0-beta-10.1
 * Made with <3 by marcosmoura 2018
 * Released under the MIT License.
 */
!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=528)})({0:function(e,t){e.exports=function(e,t,n,r,o,u){var s,a,i,l,c,d=e=e||{},f=typeof e.default;return"object"!==f&&"function"!==f||(s=e,d=e.default),a="function"==typeof d?d.options:d,t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),o&&(a._scopeId=o),u?(i=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},a._ssrRegister=i):r&&(i=r),i&&(l=a.functional,c=l?a.render:a.beforeCreate,l?(a._injectStyles=i,a.render=function(e,t){return i.call(t),c(e,t)}):a.beforeCreate=c?[].concat(c,i):[i]),{esModule:s,exports:d,options:a}}},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,s,a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=u.default.enabled,t=u.default.getThemeName,n=u.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,a.default)(t,e)},o=n(4),u=r(o),s=n(6),a=r(s)},100:function(e,t,n){"use strict";function r(e){n(151)}var o,u,s,a,i,l,c,d,f,m;Object.defineProperty(t,"__esModule",{value:!0}),o=n(66),u=n.n(o);for(s in o)"default"!==s&&(function(e){n.d(t,e,(function(){return o[e]}))})(s);a=n(152),i=n(0),l=!1,c=r,d=null,f=null,m=i(u.a,a.a,l,c,d,f),t.default=m.exports},151:function(e,t){},152:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"md-empty-state",appear:""}},[n("div",{staticClass:"md-empty-state",class:[e.emptyStateClasses,e.$mdActiveTheme],style:e.emptyStateStyles},[n("div",{staticClass:"md-empty-state-container"},[e.mdIcon?[e.isAssetIcon(e.mdIcon)?n("md-icon",{staticClass:"md-empty-state-icon",attrs:{"md-src":e.mdIcon}}):n("md-icon",{staticClass:"md-empty-state-icon"},[e._v(e._s(e.mdIcon))])]:e._e(),e._v(" "),e.mdLabel?n("strong",{staticClass:"md-empty-state-label"},[e._v(e._s(e.mdLabel))]):e._e(),e._v(" "),e.mdDescription?n("p",{staticClass:"md-empty-state-description"},[e._v(e._s(e.mdDescription))]):e._e(),e._v(" "),e._t("default")],2)])])},o=[],u={render:r,staticRenderFns:o};t.a=u},2:function(t,n){t.exports=e},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,s,a,i;Object.defineProperty(t,"__esModule",{value:!0}),n(7),o=n(5),u=r(o),s=n(4),a=r(s),i=function(){var e=new u.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return a.default.metaColors},set:function(e){a.default.metaColors=e}},theme:{get:function(){return a.default.theme},set:function(e){a.default.theme=e}},enabled:{get:function(){return a.default.enabled},set:function(e){a.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=i(),e.prototype.$material=e.material)}},369:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,s,a;Object.defineProperty(t,"__esModule",{value:!0}),o=n(3),u=r(o),s=n(100),a=r(s),t.default=function(e){(0,u.default)(e),e.component(a.default.name,a.default)}},4:function(e,t,n){"use strict";var r,o,u,s,a;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),u=null,s=null,a=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var o=r.mdTheme,u=r.$parent;return o&&o!==t?o:e(u)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){u&&u.setAttribute("content",e)},setThemeColors:function(e){s&&s.setAttribute("content",e)},setMaskColors:function(e){a&&a.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;u=document.querySelector('[name="msapplication-TileColor"]'),s=document.querySelector('[name="theme-color"]'),a=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{isAssetIcon:function(e){return/\w+[\/\\.]\w+/.test(e)}}}},5:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r)},528:function(e,t,n){e.exports=n(369)},6:function(e,t,n){"use strict";function r(e){return!!e&&"object"==typeof e}function o(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||u(e)}function u(e){return e.$$typeof===m}function s(e){return Array.isArray(e)?[]:{}}function a(e,t){return t&&!1===t.clone||!d(e)?e:c(s(e),e,t)}function i(e,t,n){return e.concat(t).map((function(e){return a(e,n)}))}function l(e,t,n){var r={};return d(e)&&Object.keys(e).forEach((function(t){r[t]=a(e[t],n)})),Object.keys(t).forEach((function(o){d(t[o])&&e[o]?r[o]=c(e[o],t[o],n):r[o]=a(t[o],n)})),r}function c(e,t,n){var r=Array.isArray(t),o=Array.isArray(e),u=n||{arrayMerge:i};return r===o?r?(u.arrayMerge||i)(e,t,n):l(e,t,n):a(t,n)}var d,f,m,p;Object.defineProperty(t,"__esModule",{value:!0}),d=function(e){return r(e)&&!o(e)},f="function"==typeof Symbol&&Symbol.for,m=f?Symbol.for("react.element"):60103,c.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,n){return c(e,n,t)}),{})},p=c,t.default=p},66:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,s,a,i,l;Object.defineProperty(t,"__esModule",{value:!0}),o=n(1),u=r(o),s=n(93),a=r(s),i=n(41),l=r(i),t.default=new u.default({name:"MdEmptyState",mixins:[l.default],props:a.default,computed:{emptyStateClasses:function(){return{"md-rounded":this.mdRounded}},emptyStateStyles:function(){if(this.mdRounded){var e=this.mdSize+"px";return{width:e,height:e}}}}})},7:function(e,t){},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mdRounded:Boolean,mdSize:{type:Number,default:420},mdIcon:String,mdLabel:String,mdDescription:String}}})}));