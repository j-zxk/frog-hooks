(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"0NJH":function(e,t,r){"use strict";function n(){const e=i(r("uLvW"));return n=function(){return e},e}function o(){const e=r("7VN9");return o=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t=s(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){var t=f(e,"string");return"symbol"===typeof t?t:String(t)}function f(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const l=e=>e.render();var p=(e,t)=>{let r=[];const i=e.match.params.uuid,u=void 0===e.location.query.wrapper,a=t[i];if(a){const t=c(c({},a.previewerProps),{},{hideActions:(a.previewerProps.hideActions||[]).concat(["EXTERNAL"])});void 0!==e.location.query.capture&&(t.motions=(t.motions||[]).slice(),t.motions.unshift("autoplay"),t.motions.every((e=>!e.startsWith("capture")))&&t.motions.push("capture:[id|=root]")),r=u?[n().default.createElement(l,{render:()=>((0,o().useMotions)(t.motions||[],"undefined"!==typeof window?document.documentElement:null),n().default.createElement("div",{},n().default.createElement(a.component)))})]:[t,n().default.createElement(a.component)]}return r};t.default=p},MZF8:function(e,t,r){"use strict";var n=r("ogwx");r.d(t,"a",(function(){return n["b"]}));r("VCU9")}}]);