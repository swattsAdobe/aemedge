export const id=693;export const ids=[693];export const modules={3268:(e,n,r)=>{r.d(n,{c:()=>N});var t=r(1072),i=r(1892),o=r.n(i),l=r(5760),a=r.n(l),c=r(8311),s=r.n(c),p=r(8192),u=r.n(p),d=r(8060),f=r.n(d),b=r(4865),v=r.n(b),y=r(1971),_={};_.styleTagTransform=v(),_.setAttributes=u(),_.insert=s().bind(null,"head"),_.domAPI=a(),_.insertStyleElement=f(),o()(y.Z,_),y.Z&&y.Z.locals&&y.Z.locals;var g,m=r(3354);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},h.apply(this,arguments)}const k=function(e){return m.createElement("svg",h({"data-name":"Icon \\u2013 Chevron down \\u2013 Base",xmlns:"http://www.w3.org/2000/svg",width:24,height:24},e),g||(g=m.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M7.745 9.877 12 14.132l4.255-4.255",fill:"none",stroke:"currentColor","data-name":"Chevron down icon"})))};var w=r(5587),x=r(4853),O=r(5437),j=r(7188);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}var P=["name","value","options","variant","floatingLabel","size","handleSelect","disabled","error","placeholder","icon","className"];function E(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function A(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?E(Object(r),!0).forEach((function(n){D(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function D(e,n,r){return(n=function(e){var n=function(e,n){if("object"!==S(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!==S(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===S(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function z(e,n){if(e){if("string"==typeof e)return I(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,n):void 0}}function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var N=function(e){var n,r,i,o=e.name,l=e.value,a=void 0===l?null:l,c=e.options,s=e.variant,p=void 0===s?"primary":s,u=e.floatingLabel,d=e.size,f=void 0===d?"medium":d,b=e.handleSelect,v=void 0===b?function(){}:b,y=e.disabled,_=void 0!==y&&y,g=e.error,m=void 0!==g&&g,h=e.placeholder,S=e.icon,E=e.className,D=function(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,P),I=(null==D?void 0:D.id)||o||"elsie-picker-".concat(Math.random().toString(36)),N=(r=(0,x.useState)({value:a,text:h,icon:S}),i=2,function(e){if(Array.isArray(e))return e}(r)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o,l,a=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;c=!1}else for(;!(c=(t=o.call(r)).done)&&(a.push(t.value),a.length!==n);c=!0);}catch(e){s=!0,i=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw i}}return a}}(r,i)||z(r,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),C=N[0],L=N[1];(0,x.useEffect)((function(){var e=null==c?void 0:c.find((function(e){return e.value===a}));L(null!=e?e:{value:null,text:h,icon:S})}),[a,c,h,S]);var M=null==c?void 0:c.map((function(e){var n=e.value,r=e.text,t=e.disabled,i=n===C.value;return(0,j.jsx)("option",{value:n,selected:i,disabled:t,className:(0,w.S)(["elsie-picker__option"]),children:r},n)})),T=(0,O.useRef)(null),R=!(null!==(n=T.current)&&void 0!==n&&n.selected);return(0,j.jsxs)("div",{className:(0,w.S)([E,"elsie-picker","elsie-picker__".concat(f),["elsie-picker__floating",!!u],["elsie-picker__selected",R],["elsie-picker__error",m],["elsie-picker__disabled",_],["elsie-picker__icon",S]]),children:[S&&(0,j.jsx)(S.type,A(A({},S.props),{},{className:"elsie-picker__icon--placeholder"})),(0,j.jsxs)("select",A(A({id:I,className:(0,w.S)(["elsie-picker__select","elsie-picker__select--".concat(p),"elsie-picker__select--".concat(f),["elsie-picker__select--floating",!!u]]),name:o,"aria-label":o,disabled:_,onChange:function(e){var n,r=e.target,t=r.options,i=r.value,o=function(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=z(e))){r&&(e=r);var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){a=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(a)throw o}}}}(t);try{for(o.s();!(n=o.n()).done;){var l=n.value;l.selected&&(L({value:i,text:l.value,icon:S}),v(e))}}catch(e){o.e(e)}finally{o.f()}}},D),{},{children:[(0,j.jsx)("option",{value:"",ref:T,className:(0,w.S)(["elsie-picker__option elsie-picker__placeholder"]),children:u||h},a),M]})),(0,j.jsx)(t.J,{source:k,size:"24",stroke:"2",className:"elsie-picker__chevronDown"}),u&&R&&(0,j.jsx)("label",{htmlFor:I,className:(0,w.S)(["elsie-picker__floatingLabel",!!u]),children:u})]})}},4625:(e,n,r)=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n,r){return(n=function(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!==t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}r.d(n,{C:()=>c});var c=function(e){var n=new FormData(e),r=Object.fromEntries(n);return Object.entries(r).reduce((function(n,r){var t,i,c=(t=r,i=1,function(e){if(Array.isArray(e))return e}(t)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o,l,a=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;c=!1}else for(;!(c=(t=o.call(r)).done)&&(a.push(t.value),a.length!==n);c=!0);}catch(e){s=!0,i=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw i}}return a}}(t,i)||function(e,n){if(e){if("string"==typeof e)return a(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,n):void 0}}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],s=e.elements[c];return null!=s&&s.validationMessage?o(o({},n),{},l({},c,s.validationMessage)):o({},n)}),{})}},1971:(e,n,r)=>{r.d(n,{Z:()=>a});var t=r(4933),i=r.n(t),o=r(3476),l=r.n(o)()(i());l.push([e.id,"/* https://cssguidelin.es/#bem-like-naming */\n.elsie-picker {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  background-color: var(--color-neutral-50);\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  gap: var(--spacing-small);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.elsie-picker select {\n  background-color: transparent;\n  border: var(--shape-border-width-1) solid var(--color-neutral-600);\n  border-radius: var(--shape-border-radius-1);\n  color: var(--color-neutral-700);\n  appearance: none;\n  box-shadow: none;\n  flex: 1;\n  cursor: pointer;\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.elsie-picker__select:focus {\n  outline: none;\n  border: var(--shape-border-width-1) solid var(--color-neutral-800);\n}\n\n/* Resulting height of 40px for medium size, 48px for large size */\n.elsie-picker__medium .elsie-picker__select--primary,\n.elsie-picker__medium .elsie-picker__select--secondary {\n  padding: 9px var(--spacing-xxbig) 9px var(--spacing-small);\n}\n\n.elsie-picker__large .elsie-picker__select--primary,\n.elsie-picker__large .elsie-picker__select--secondary {\n  padding: 11px var(--spacing-xxbig) 11px var(--spacing-small);\n}\n\n.elsie-picker__select--medium {\n  font: var(--type-body-2-default-font);\n  letter-spacing: var(--type-body-2-default-letter-spacing);\n}\n\n.elsie-picker__select--large {\n  font: var(--type-body-1-default-font);\n  letter-spacing: var(--type-body-1-default-letter-spacing);\n}\n\n/* Chevron */\n.elsie-picker__chevronDown {\n  z-index: 1;\n  position: absolute;\n  color: var(--color-neutral-700);\n  right: var(--spacing-small);\n  display: block;\n  pointer-events: none;\n  padding: 0;\n  height: var(--icon-size);\n  width: var(--icon-size);\n}\n\n/* Floating label */\n.elsie-picker__floatingLabel {\n  position: absolute;\n  pointer-events: none;\n  left: var(--spacing-small);\n  color: var(--color-neutral-700);\n  touch-action: manipulation;\n  transform: translateY(-50%);\n  transition: top 20ms ease-in, font-size 50ms ease-in;\n}\n\n.elsie-picker__select--floating:focus ~ label {\n  transition: all 40ms;\n}\n\n/* Option selected */\n.elsie-picker__selected select {\n  color: var(--color-neutral-800);\n}\n\n/* Label position when option selected */\n.elsie-picker__selected label {\n  top: 30%;\n}\n\n/* Label font when option selected */\n.elsie-picker__medium.elsie-picker__floating.elsie-picker__selected label {\n  font: var(--type-details-caption-1-font);\n  letter-spacing: var(--type-details-caption-1-letter-spacing);\n}\n\n.elsie-picker__large.elsie-picker__floating.elsie-picker__selected label {\n  font: var(--type-details-caption-2-font);\n  letter-spacing: var(--type-details-caption-2-letter-spacing);\n}\n\n/* Resulting height of 56px no matter medium or large size */\n.elsie-picker__medium.elsie-picker__floating select {\n  padding: 17px var(--spacing-small);\n}\n\n.elsie-picker__large.elsie-picker__floating select {\n  padding: 15px var(--spacing-small);\n}\n\n/* Resulting height of 56px when option selected */\n.elsie-picker__large.elsie-picker__floating.elsie-picker__selected select {\n  padding: 25px var(--spacing-xxbig) 5px var(--spacing-small);\n}\n\n.elsie-picker__medium.elsie-picker__floating.elsie-picker__selected select {\n  padding: 27px var(--spacing-xxbig) 7px var(--spacing-small);\n}\n\n/* Remove IE arrow */\nselect::-ms-expand {\n  display: none;\n}\n\n/* Disabled */\n.elsie-picker__disabled select.elsie-picker__select {\n  background-color: var(--color-neutral-300);\n  border: var(--shape-border-width-1) solid var(--color-neutral-500);\n  color: var(--color-neutral-500);\n  cursor: not-allowed;\n}\n\n.elsie-picker__disabled svg.elsie-picker__chevronDown {\n  color: var(--color-neutral-500);\n}\n\n/* Error */\n.elsie-picker__error select {\n  border: var(--shape-border-width-2) solid var(--color-alert-500);\n  color: var(--color-alert-500);\n}\n\n.elsie-picker__error .elsie-picker__select:focus {\n  border: var(--shape-border-width-2) solid var(--color-alert-500);\n}\n\n.elsie-picker__error .elsie-picker__chevronDown {\n  color: var(--color-alert-500);\n}\n\n.elsie-picker__error label {\n  color: var(--color-alert-500);\n}\n\n/* Secondary variant */\n.elsie-picker select.elsie-picker__select--secondary {\n  border-top: var(--shape-border-width-1) solid transparent;\n  border-left: 0 none;\n  border-right: 0 none;\n  border-radius: 0;\n}\n\n.elsie-picker__disabled select.elsie-picker__select--secondary {\n  border-bottom: var(--shape-border-width-1) solid var(--color-neutral-500);\n}\n.elsie-picker__error select.elsie-picker__select--secondary {\n  border-top: var(--shape-border-width-1) solid transparent;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n\n/* Icon */\n.elsie-picker__icon--placeholder {\n  z-index: 1;\n  position: absolute;\n  color: var(--color-neutral-700);\n  left: var(--spacing-small);\n  display: block;\n  pointer-events: none;\n  padding: 0;\n  height: var(--icon-size);\n  width: var(--icon-size);\n}\n\n.elsie-picker__icon select.elsie-picker__select {\n  padding-left: var(--spacing-xxbig);\n}\n\n.elsie-picker__floating.elsie-picker__selected.elsie-picker__icon select {\n  padding-left: var(--spacing-xxbig);\n}\n\n.elsie-picker__floating.elsie-picker__selected.elsie-picker__icon label {\n  left: var(--spacing-xxbig);\n}\n\n/* Medium (portrait tablets and large phones, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large (landscape tablets, 1024px and up) */\n/* @media only screen and (min-width: 1024px) { } */\n\n/* XLarge (laptops/desktops, 1366px and up) */\n/* @media only screen and (min-width: 1366px) { } */\n\n/* XXlarge (large laptops and desktops, 1920px and up) */\n/* @media only screen and (min-width: 1920px) { } */\n",""]);const a=l}};