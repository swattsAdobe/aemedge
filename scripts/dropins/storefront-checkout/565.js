/*! For license information please see 565.js.LICENSE.txt */
export const id=565;export const ids=[565];export const modules={6364:(t,e,n)=>{n.d(e,{td:()=>h});var r=n(3474),o=n(5437);function i(){throw new Error("Cycle detected")}function a(){if(f>1)f--;else{for(var t,e=!1;void 0!==c;){var n=c;for(c=void 0,u++;void 0!==n;){var r=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&y(n))try{n.c()}catch(n){e||(t=n,e=!0)}n=r}}if(u=0,f--,e)throw t}}var s,l=void 0,c=void 0,f=0,u=0,p=0;function d(t){if(void 0!==l){var e=t.n;if(void 0===e||e.t!==l)return e={i:0,S:t,p:l.s,n:void 0,t:l,e:void 0,x:void 0,r:e},void 0!==l.s&&(l.s.n=e),l.s=e,t.n=e,32&l.f&&t.S(e),e;if(-1===e.i)return e.i=0,void 0!==e.n&&(e.n.p=e.p,void 0!==e.p&&(e.p.n=e.n),e.p=l.s,e.n=void 0,l.s.n=e,l.s=e),e}}function v(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function h(t){return new v(t)}function y(t){for(var e=t.s;void 0!==e;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function b(t){for(var e=t.s;void 0!==e;e=e.n){var n=e.S.n;if(void 0!==n&&(e.r=n),e.S.n=e,e.i=-1,void 0===e.n){t.s=e;break}}}function g(t){for(var e=t.s,n=void 0;void 0!==e;){var r=e.p;-1===e.i?(e.S.U(e),void 0!==r&&(r.n=e.n),void 0!==e.n&&(e.n.p=r)):n=e,e.S.n=e.r,void 0!==e.r&&(e.r=void 0),e=r}t.s=n}function m(t){v.call(this,void 0),this.x=t,this.s=void 0,this.g=p-1,this.f=4}function x(t){var e=t.u;if(t.u=void 0,"function"==typeof e){f++;var n=l;l=void 0;try{e()}catch(e){throw t.f&=-2,t.f|=8,_(t),e}finally{l=n,a()}}}function _(t){for(var e=t.s;void 0!==e;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,x(t)}function w(t){if(l!==this)throw new Error("Out-of-order effect");g(this),l=t,this.f&=-2,8&this.f&&_(this),a()}function O(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function S(t){var e=new O(t);try{e.c()}catch(t){throw e.d(),t}return e.d.bind(e)}function j(t,e){r.options[t]=e.bind(null,r.options[t]||function(){})}function A(t){s&&s(),s=t&&t.S()}function k(t){var e=this,n=t.data,i=function(t){return(0,o.useMemo)((function(){return h(t)}),[])}(n);i.value=n;var a=(0,o.useMemo)((function(){for(var t=e.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return e.__$u.c=function(){var t;(0,r.isValidElement)(a.peek())||3!==(null==(t=e.base)?void 0:t.nodeType)?(e.__$f|=1,e.setState({})):e.base.data=a.peek()},new m((function(){var t=i.value.value;return 0===t?0:!0===t?"":t||""}))}),[]);return a.value}function E(t,e,n,r){var o=e in t&&void 0===t.ownerSVGElement,i=h(n);return{o:function(t,e){i.value=t,r=e},d:S((function(){var n=i.value.value;r[e]!==n&&(r[e]=n,o?t[e]=n:n?t.setAttribute(e,n):t.removeAttribute(e))}))}}v.prototype.h=function(){return!0},v.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},v.prototype.U=function(t){if(void 0!==this.t){var e=t.e,n=t.x;void 0!==e&&(e.x=n,t.e=void 0),void 0!==n&&(n.e=e,t.x=void 0),t===this.t&&(this.t=n)}},v.prototype.subscribe=function(t){var e=this;return S((function(){var n=e.value,r=32&this.f;this.f&=-33;try{t(n)}finally{this.f|=r}}))},v.prototype.valueOf=function(){return this.value},v.prototype.toString=function(){return this.value+""},v.prototype.toJSON=function(){return this.value},v.prototype.peek=function(){return this.v},Object.defineProperty(v.prototype,"value",{get:function(){var t=d(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(l instanceof m&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){u>100&&i(),this.v=t,this.i++,p++,f++;try{for(var e=this.t;void 0!==e;e=e.x)e.t.N()}finally{a()}}}}),(m.prototype=new v).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===p)return!0;if(this.g=p,this.f|=1,this.i>0&&!y(this))return this.f&=-2,!0;var t=l;try{b(this),l=this;var e=this.x();(16&this.f||this.v!==e||0===this.i)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return l=t,g(this),this.f&=-2,!0},m.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var e=this.s;void 0!==e;e=e.n)e.S.S(e)}v.prototype.S.call(this,t)},m.prototype.U=function(t){if(void 0!==this.t&&(v.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var e=this.s;void 0!==e;e=e.n)e.S.U(e)}},m.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},m.prototype.peek=function(){if(this.h()||i(),16&this.f)throw this.v;return this.v},Object.defineProperty(m.prototype,"value",{get:function(){1&this.f&&i();var t=d(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),O.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var e=this.x();"function"==typeof e&&(this.u=e)}finally{t()}},O.prototype.S=function(){1&this.f&&i(),this.f|=1,this.f&=-9,x(this),b(this),f++;var t=l;return l=this,w.bind(this,t)},O.prototype.N=function(){2&this.f||(this.f|=2,this.o=c,c=this)},O.prototype.d=function(){this.f|=8,1&this.f||_(this)},k.displayName="_st",Object.defineProperties(v.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:k},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),j("__b",(function(t,e){if("string"==typeof e.type){var n,r=e.props;for(var o in r)if("children"!==o){var i=r[o];i instanceof v&&(n||(e.__np=n={}),n[o]=i,r[o]=i.peek())}}t(e)})),j("__r",(function(t,e){A();var n,r=e.__c;r&&(r.__$f&=-2,void 0===(n=r.__$u)&&(r.__$u=n=function(t){var e;return S((function(){e=this})),e.c=function(){r.__$f|=1,r.setState({})},e}())),A(n),t(e)})),j("__e",(function(t,e,n,r){A(),t(e,n,r)})),j("diffed",(function(t,e){var n;if(A(),"string"==typeof e.type&&(n=e.__e)){var r=e.__np,o=e.props;if(r){var i=n.U;if(i)for(var a in i){var s=i[a];void 0===s||a in r||(s.d(),i[a]=void 0)}else n.U=i={};for(var l in r){var c=i[l],f=r[l];void 0===c?(c=E(n,l,f,o),i[l]=c):c.o(f,o)}}}t(e)})),j("unmount",(function(t,e){if("string"==typeof e.type){var n=e.__e;if(n){var r=n.U;if(r)for(var o in n.U=void 0,r){var i=r[o];i&&i.d()}}}else{var a=e.__c;if(a){var s=a.__$u;s&&(a.__$u=void 0,s.d())}}t(e)})),j("__h",(function(t,e,n,r){(r<3||9===r)&&(e.__$f|=2),t(e,n,r)})),r.Component.prototype.shouldComponentUpdate=function(t,e){var n=this.__$u;if(!(n&&void 0!==n.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var r in e)return!0;for(var o in t)if("__source"!==o&&t[o]!==this.props[o])return!0;for(var i in this.props)if(!(i in t))return!0;return!1}},9978:(t,e,n)=>{n.d(e,{J:()=>C});var r=n(1857),o=n.n(r),i=n(5587);const a=JSON.parse('{"Elsie":{"ExampleComponentName":{"item":{"label":"string"}},"Incrementer":{"decreaseLabel":"Decrease Quantity","increaseLabel":"Increase Quantity","label":"Quantity"}}}');var s=n(9724),l={default:a,en_US:a},c=n(1892),f=n.n(c),u=n(5760),p=n.n(u),d=n(8311),v=n.n(d),h=n(8192),y=n.n(h),b=n(8060),g=n.n(b),m=n(4865),x=n.n(m),_=n(2080),w={};w.styleTagTransform=x(),w.setAttributes=y(),w.insert=v().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=g(),f()(_.Z,w),_.Z&&_.Z.locals&&_.Z.locals;var O=n(4763),S={};S.styleTagTransform=x(),S.setAttributes=y(),S.insert=v().bind(null,"head"),S.domAPI=p(),S.insertStyleElement=g(),f()(O.Z,S),O.Z&&O.Z.locals&&O.Z.locals;var j=n(7188);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}var k=["lang","langDefinitions","className","children"];function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){L(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function L(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===A(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C=function(t){var e,n=t.lang,r=void 0===n?"en_US":n,a=t.langDefinitions,c=void 0===a?{}:a,f=t.className,u=t.children,p=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,k),d=o()(c.default,null!==(e=c[r])&&void 0!==e?e:{}),v=o()(function(t){return o()(l.default,l[t]||{})}(r),d);return(0,j.jsx)(s.Pj,{definition:v,children:(0,j.jsx)("div",P(P({},p),{},{className:(0,i.S)(["elsie-base-design",f]),children:u}))})}},3516:(t,e,n)=>{n.d(e,{H:()=>G});var r=n(3474),o=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,i=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,a=/[\s\n\\/='"\0<>]/,s=/^xlink:?./,l=/["&<]/;function c(t){if(!1===l.test(t+=""))return t;for(var e=0,n=0,r="",o="";n<t.length;n++){switch(t.charCodeAt(n)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}n!==e&&(r+=t.slice(e,n)),r+=o,e=n+1}return n!==e&&(r+=t.slice(e,n)),r}var f=function(t,e){return String(t).replace(/(\n+)/g,"$1"+(e||"\t"))},u=function(t,e,n){return String(t).length>(e||40)||!n&&-1!==String(t).indexOf("\n")||-1!==String(t).indexOf("<")},p={},d=/([A-Z])/g;function v(t){var e="";for(var n in t){var r=t[n];null!=r&&""!==r&&(e&&(e+=" "),e+="-"==n[0]?n:p[n]||(p[n]=n.replace(d,"-$1").toLowerCase()),e="number"==typeof r&&!1===o.test(n)?e+": "+r+"px;":e+": "+r+";")}return e||void 0}function h(t,e){return Array.isArray(e)?e.reduce(h,t):null!=e&&!1!==e&&t.push(e),t}function y(){this.__d=!0}function b(t,e){return{__v:t,context:e,props:t.props,setState:y,forceUpdate:y,__d:!0,__h:[]}}function g(t,e){var n=t.contextType,r=n&&e[n.__c];return null!=n?r?r.props.value:n.__:e}var m=[];function x(t,e,n,o,l,p){if(null==t||"boolean"==typeof t)return"";if("object"!=typeof t)return"function"==typeof t?"":c(t);var d=n.pretty,y=d&&"string"==typeof d?d:"\t";if(Array.isArray(t)){for(var _="",w=0;w<t.length;w++)d&&w>0&&(_+="\n"),_+=x(t[w],e,n,o,l,p);return _}if(void 0!==t.constructor)return"";var O,S=t.type,j=t.props,A=!1;if("function"==typeof S){if(A=!0,!n.shallow||!o&&!1!==n.renderRootComponent){if(S===r.Fragment){var k=[];return h(k,t.props.children),x(k,e,n,!1!==n.shallowHighOrder,l,p)}var E,P=t.__c=b(t,e);r.options.__b&&r.options.__b(t);var L=r.options.__r;if(S.prototype&&"function"==typeof S.prototype.render){var C=g(S,e);(P=t.__c=new S(j,C)).__v=t,P._dirty=P.__d=!0,P.props=j,null==P.state&&(P.state={}),null==P._nextState&&null==P.__s&&(P._nextState=P.__s=P.state),P.context=C,S.getDerivedStateFromProps?P.state=Object.assign({},P.state,S.getDerivedStateFromProps(P.props,P.state)):P.componentWillMount&&(P.componentWillMount(),P.state=P._nextState!==P.state?P._nextState:P.__s!==P.state?P.__s:P.state),L&&L(t),E=P.render(P.props,P.state,P.context)}else for(var D=g(S,e),M=0;P.__d&&M++<25;)P.__d=!1,L&&L(t),E=S.call(t.__c,j,D);return P.getChildContext&&(e=Object.assign({},e,P.getChildContext())),r.options.diffed&&r.options.diffed(t),x(E,e,n,!1!==n.shallowHighOrder,l,p)}S=(O=S).displayName||O!==Function&&O.name||function(t){var e=(Function.prototype.toString.call(t).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!e){for(var n=-1,r=m.length;r--;)if(m[r]===t){n=r;break}n<0&&(n=m.push(t)-1),e="UnnamedComponent"+n}return e}(O)}var N,F,T="<"+S;if(j){var $=Object.keys(j);n&&!0===n.sortAttributes&&$.sort();for(var U=0;U<$.length;U++){var I=$[U],H=j[I];if("children"!==I){if(!a.test(I)&&(n&&n.allAttributes||"key"!==I&&"ref"!==I&&"__self"!==I&&"__source"!==I)){if("defaultValue"===I)I="value";else if("defaultChecked"===I)I="checked";else if("defaultSelected"===I)I="selected";else if("className"===I){if(void 0!==j.class)continue;I="class"}else l&&s.test(I)&&(I=I.toLowerCase().replace(/^xlink:?/,"xlink:"));if("htmlFor"===I){if(j.for)continue;I="for"}"style"===I&&H&&"object"==typeof H&&(H=v(H)),"a"===I[0]&&"r"===I[1]&&"boolean"==typeof H&&(H=String(H));var G=n.attributeHook&&n.attributeHook(I,H,e,n,A);if(G||""===G)T+=G;else if("dangerouslySetInnerHTML"===I)F=H&&H.__html;else if("textarea"===S&&"value"===I)N=H;else if((H||0===H||""===H)&&"function"!=typeof H){if(!(!0!==H&&""!==H||(H=I,n&&n.xml))){T=T+" "+I;continue}if("value"===I){if("select"===S){p=H;continue}"option"===S&&p==H&&void 0===j.selected&&(T+=" selected")}T=T+" "+I+'="'+c(H)+'"'}}}else N=H}}if(d){var Z=T.replace(/\n\s*/," ");Z===T||~Z.indexOf("\n")?d&&~T.indexOf("\n")&&(T+="\n"):T=Z}if(T+=">",a.test(S))throw new Error(S+" is not a valid HTML tag name in "+T);var z,R=i.test(S)||n.voidElements&&n.voidElements.test(S),B=[];if(F)d&&u(F)&&(F="\n"+y+f(F,y)),T+=F;else if(null!=N&&h(z=[],N).length){for(var J=d&&~T.indexOf("\n"),V=!1,W=0;W<z.length;W++){var Q=z[W];if(null!=Q&&!1!==Q){var Y=x(Q,e,n,!0,"svg"===S||"foreignObject"!==S&&l,p);if(d&&!J&&u(Y)&&(J=!0),Y)if(d){var q=Y.length>0&&"<"!=Y[0];V&&q?B[B.length-1]+=Y:B.push(Y),V=q}else B.push(Y)}}if(d&&J)for(var K=B.length;K--;)B[K]="\n"+y+f(B[K],y)}if(B.length||F)T+=B.join("");else if(n&&n.xml)return T.substring(0,T.length-1)+" />";return!R||z||F?(d&&~T.indexOf("\n")&&(T+="\n"),T=T+"</"+S+">"):T=T.replace(/>$/," />"),T}var _={shallow:!0};O.render=O;var w=[];function O(t,e,n){e=e||{};var o=r.options.__s;r.options.__s=!0;var i,a=(0,r.h)(r.Fragment,null);return a.__k=[t],i=n&&(n.pretty||n.voidElements||n.sortAttributes||n.shallow||n.allAttributes||n.xml||n.attributeHook)?x(t,e,n):P(t,e,!1,void 0,a),r.options.__c&&r.options.__c(t,w),r.options.__s=o,w.length=0,i}function S(t){return null==t||"boolean"==typeof t?null:"string"==typeof t||"number"==typeof t||"bigint"==typeof t?(0,r.h)(null,null,t):t}function j(t,e){return"className"===t?"class":"htmlFor"===t?"for":"defaultValue"===t?"value":"defaultChecked"===t?"checked":"defaultSelected"===t?"selected":e&&s.test(t)?t.toLowerCase().replace(/^xlink:?/,"xlink:"):t}function A(t,e){return"style"===t&&null!=e&&"object"==typeof e?v(e):"a"===t[0]&&"r"===t[1]&&"boolean"==typeof e?String(e):e}var k=Array.isArray,E=Object.assign;function P(t,e,n,o,s){if(null==t||!0===t||!1===t||""===t)return"";if("object"!=typeof t)return"function"==typeof t?"":c(t);if(k(t)){var l="";s.__k=t;for(var f=0;f<t.length;f++)l+=P(t[f],e,n,o,s),t[f]=S(t[f]);return l}if(void 0!==t.constructor)return"";t.__=s,r.options.__b&&r.options.__b(t);var u=t.type,p=t.props;if("function"==typeof u){var d;if(u===r.Fragment)d=p.children;else{d=u.prototype&&"function"==typeof u.prototype.render?function(t,e){var n=t.type,o=g(n,e),i=new n(t.props,o);t.__c=i,i.__v=t,i.__d=!0,i.props=t.props,null==i.state&&(i.state={}),null==i.__s&&(i.__s=i.state),i.context=o,n.getDerivedStateFromProps?i.state=E({},i.state,n.getDerivedStateFromProps(i.props,i.state)):i.componentWillMount&&(i.componentWillMount(),i.state=i.__s!==i.state?i.__s:i.state);var a=r.options.__r;return a&&a(t),i.render(i.props,i.state,i.context)}(t,e):function(t,e){var n,o=b(t,e),i=g(t.type,e);t.__c=o;for(var a=r.options.__r,s=0;o.__d&&s++<25;)o.__d=!1,a&&a(t),n=t.type.call(o,t.props,i);return n}(t,e);var v=t.__c;v.getChildContext&&(e=E({},e,v.getChildContext()))}var h=P(d=null!=d&&d.type===r.Fragment&&null==d.key?d.props.children:d,e,n,o,t);return r.options.diffed&&r.options.diffed(t),t.__=void 0,r.options.unmount&&r.options.unmount(t),h}var y,m,x="<";if(x+=u,p)for(var _ in y=p.children,p){var w=p[_];if(!("key"===_||"ref"===_||"__self"===_||"__source"===_||"children"===_||"className"===_&&"class"in p||"htmlFor"===_&&"for"in p||a.test(_)))if(w=A(_=j(_,n),w),"dangerouslySetInnerHTML"===_)m=w&&w.__html;else if("textarea"===u&&"value"===_)y=w;else if((w||0===w||""===w)&&"function"!=typeof w){if(!0===w||""===w){w=_,x=x+" "+_;continue}if("value"===_){if("select"===u){o=w;continue}"option"!==u||o!=w||"selected"in p||(x+=" selected")}x=x+" "+_+'="'+c(w)+'"'}}var O=x;if(x+=">",a.test(u))throw new Error(u+" is not a valid HTML tag name in "+x);var L="",C=!1;if(m)L+=m,C=!0;else if("string"==typeof y)L+=c(y),C=!0;else if(k(y)){t.__k=y;for(var D=0;D<y.length;D++){var M=y[D];if(y[D]=S(M),null!=M&&!1!==M){var N=P(M,e,"svg"===u||"foreignObject"!==u&&n,o,t);N&&(L+=N,C=!0)}}}else if(null!=y&&!1!==y&&!0!==y){t.__k=[S(y)];var F=P(y,e,"svg"===u||"foreignObject"!==u&&n,o,t);F&&(L+=F,C=!0)}if(r.options.diffed&&r.options.diffed(t),t.__=void 0,r.options.unmount&&r.options.unmount(t),C)x+=L;else if(i.test(u))return O+" />";return x+"</"+u+">"}O.shallowRender=function(t,e){return O(t,e,_)};const L=O;var C=n(7188);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function M(){M=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function c(t,e,n,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),s=new j(o||[]);return r(a,"_invoke",{value:_(t,n,s)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u={};function p(){}function d(){}function v(){}var h={};l(h,i,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(A([])));b&&b!==e&&n.call(b,i)&&(h=b);var g=v.prototype=p.prototype=Object.create(h);function m(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(r,i,a,s){var l=f(t[r],t,i);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==D(u)&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(u).then((function(t){c.value=t,a(c)}),(function(t){return o("throw",t,a,s)}))}s(l.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function _(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=w(a,n);if(s){if(s===u)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=f(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function w(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),u;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,u;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function A(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=v,r(g,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:d,configurable:!0}),d.displayName=l(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,s,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(x.prototype),l(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(g),l(g,s,"Generator"),l(g,i,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=A,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function F(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){T(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function T(t,e,n){return(e=H(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $(t,e,n,r,o,i,a){try{var s=t[i](a),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(r,o)}function U(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){$(i,r,o,a,s,"next",t)}function s(t){$(i,r,o,a,s,"throw",t)}a(void 0)}))}}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,H(r.key),r)}}function H(t){var e=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===D(e)?e:String(e)}var G=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._provider=e}var e,n,o;return e=t,n=[{key:"render",value:function(t,e){var n=this;return function(){var o=U(M().mark((function o(i){var a,s,l;return M().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t){o.next=2;break}throw new Error("Component is not defined");case 2:if(i){o.next=4;break}throw new Error("Root element is not defined");case 4:return o.next=6,null===(s=t.getInitialData)||void 0===s?void 0:s.call(t,e);case 6:if(o.t1=a=o.sent,o.t0=null!==o.t1,!o.t0){o.next=10;break}o.t0=void 0!==a;case 10:if(!o.t0){o.next=14;break}o.t2=a,o.next=15;break;case 14:o.t2={};case 15:l=o.t2,(0,r.render)((0,C.jsx)(n._provider.type,F(F({},n._provider.props),{},{children:(0,C.jsx)(t,F(F({},e),{},{initialData:l}))})),i);case 17:case"end":return o.stop()}}),o)})));return function(t){return o.apply(this,arguments)}}()}},{key:"toString",value:(o=U(M().mark((function t(e,n,r){var o,i,a;return M().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}throw new Error("Component is not defined");case 2:return t.next=4,null===(i=e.getInitialData)||void 0===i?void 0:i.call(e,n);case 4:if(t.t1=o=t.sent,t.t0=null!==t.t1,!t.t0){t.next=8;break}t.t0=void 0!==o;case 8:if(!t.t0){t.next=12;break}t.t2=o,t.next=13;break;case 12:t.t2={};case 13:return a=t.t2,t.abrupt("return",L((0,C.jsx)(this._provider.type,F(F({},this._provider.props),{},{children:(0,C.jsx)(e,F(F({},n),{},{initialData:a}))})),{},F({},r)));case 15:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return o.apply(this,arguments)})}],n&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},2080:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(4933),o=n.n(r),i=n(3476),a=n.n(i)()(o());a.push([t.id,"/**\n * Do not edit directly\n * Generated on Fri, 14 Jul 2023 19:01:45 GMT\n */\n\n.elsie-base-design {\n  --color-brand-500: #454545; /* Brand buttons default - AAA */\n  --color-brand-600: #383838; /* Brand buttons on hover - AAA */\n  --color-brand-700: #2b2b2b; /* Brand buttons selected */\n  --color-neutral-50: #ffffff; /* Lightest surface / Text & components On Dark surface - AAA */\n  --color-neutral-100: #fafafa; /* Light surface - AAA */\n  --color-neutral-200: #f5f5f5; /* Light surface - AAA */\n  --color-neutral-300: #e8e8e8; /* Disabled surfaces - AAA */\n  --color-neutral-400: #d6d6d6; /* Ornamental elements (ie. Divider) */\n  --color-neutral-500: #b8b8b8; /* Disabled text */\n  --color-neutral-600: #8f8f8f; /* Component borders (ie. Text field border) - AA Large text */\n  --color-neutral-700: #666666; /* Secondary text - AAA */\n  --color-neutral-800: #3d3d3d; /* Default text - AAA */\n  --color-neutral-900: #292929; /* Default text on hover - AAA */\n  --color-positive-200: #eff5ef; /* Semantic positive surface - AA Large text */\n  --color-positive-500: #7fb078; /* Semantic positive surface */\n  --color-positive-800: #53824c; /* Semantic Positive text - On Light AA */\n  --color-informational-200: #eeeffb; /* Semantic informational surface - AA Large text */\n  --color-informational-500: #6978d9; /* Semantic informational surface */\n  --color-informational-800: #5d6dd6; /* Semantic informational text, Highlights - On Light AA */\n  --color-warning-200: #fdf3e9; /* Semantic warning surface - AA Large text */\n  --color-warning-500: #e79f5c; /* Semantic warning surface */\n  --color-warning-800: #cc7a2e; /* Semantic warning text - On Light AA */\n  --color-alert-200: #ffebeb; /* Semantic alert surface - AA Large text */\n  --color-alert-500: #db7070; /* Semantic alert surface */\n  --color-alert-800: #c35050; /* Semantic alert text - On light AA */\n  --color-button-active: var(--color-brand-700);\n  --color-button-focus: var(--color-neutral-400);\n  --color-button-hover: var(--color-brand-600);\n  --color-action-button-active: var(--color-neutral-50);\n  --color-action-button-hover: var(--color-neutral-300);\n  --color-opacity-16: rgba(255, 255, 255, 0.16);\n  --color-opacity-24: rgba(255, 255, 255, 0.24);\n  --grid-1-columns: 4;\n  --grid-1-margins: 0;\n  --grid-1-gutters: 16px;\n  --grid-2-columns: 12;\n  --grid-2-margins: 0;\n  --grid-2-gutters: 16px;\n  --grid-3-columns: 12;\n  --grid-3-margins: 0;\n  --grid-3-gutters: 24px;\n  --grid-4-columns: 12;\n  --grid-4-margins: 0;\n  --grid-4-gutters: 24px;\n  --grid-5-columns: 12;\n  --grid-5-margins: 0;\n  --grid-5-gutters: 24px;\n  --shape-border-radius-1: 3px;\n  --shape-border-radius-2: 8px;\n  --shape-border-radius-3: 24px;\n  --shape-border-width-1: 1px;\n  --shape-border-width-2: 1.5px;\n  --shape-border-width-3: 2px;\n  --shape-border-width-4: 4px;\n  --shape-shadow-1: 0 0 16px 0 rgba(0, 0, 0, 0.16); /* Elevated panels (ie. Page side panel, Mobile bottom bar) */\n  --shape-shadow-2: 0 2px 16px 0 rgba(0, 0, 0, 0.16); /* Elevated dialogs (ie. Modal) */\n  --shape-shadow-3: 0 2px 3px 0 rgba(0, 0, 0, 0.16); /* Elevated container (ie. Card) */\n  --shape-icon-stroke-1: 1px;\n  --shape-icon-stroke-2: 1.5px;\n  --shape-icon-stroke-3: 2px;\n  --shape-icon-stroke-4: 4px;\n  --spacing-xxsmall: 4px;\n  --spacing-xsmall: 8px;\n  --spacing-small: 16px;\n  --spacing-medium: 24px;\n  --spacing-big: 32px;\n  --spacing-xbig: 40px;\n  --spacing-xxbig: 48px;\n  --spacing-large: 64px;\n  --spacing-xlarge: 72px;\n  --spacing-xxlarge: 96px;\n  --spacing-huge: 120px;\n  --spacing-xhuge: 144px;\n  --spacing-xxhuge: 192px;\n  --type-base-font-family: system-ui, sans-serif;\n  --type-display-1-font: normal normal 300 60px/72px\n    var(--type-base-font-family); /* Hero title */\n  --type-display-1-letter-spacing: 0.04em;\n  --type-display-2-font: normal normal 300 48px/56px\n    var(--type-base-font-family); /* Banner title */\n  --type-display-2-letter-spacing: 0.04em;\n  --type-display-3-font: normal normal 300 34px/40px\n    var(--type-base-font-family); /* Desktop & tablet section title */\n  --type-display-3-letter-spacing: 0.04em;\n  --type-headline-1-font: normal normal 400 24px/32px\n    var(--type-base-font-family); /* Desktop & tablet page title */\n  --type-headline-1-letter-spacing: 0.04em;\n  --type-headline-2-default-font: normal normal 300 20px/24px\n    var(--type-base-font-family); /* Rail title */\n  --type-headline-2-default-letter-spacing: 0.04em;\n  --type-headline-2-strong-font: normal normal 400 20px/24px\n    var(--type-base-font-family); /* Mobile page and section title */\n  --type-headline-2-strong-letter-spacing: 0.04em;\n  --type-body-1-default-font: normal normal 300 16px/24px\n    var(--type-base-font-family); /* Normal text paragraph */\n  --type-body-1-default-letter-spacing: 0.04em;\n  --type-body-1-strong-font: normal normal 400 16px/24px\n    var(--type-base-font-family);\n  --type-body-1-strong-letter-spacing: 0.04em;\n  --type-body-1-emphasized-font: normal normal 700 16px/24px\n    var(--type-base-font-family);\n  --type-body-1-emphasized-letter-spacing: 0.04em;\n  --type-body-2-default-font: normal normal 300 14px/20px\n    var(--type-base-font-family);\n  --type-body-2-default-letter-spacing: 0.04em;\n  --type-body-2-strong-font: normal normal 400 14px/20px\n    var(--type-base-font-family);\n  --type-body-2-strong-letter-spacing: 0.04em;\n  --type-body-2-emphasized-font: normal normal 700 14px/20px\n    var(--type-base-font-family);\n  --type-body-2-emphasized-letter-spacing: 0.04em;\n  --type-button-1-font: normal normal 400 20px/26px var(--type-base-font-family); /* Primary button text */\n  --type-button-1-letter-spacing: 0.08em;\n  --type-button-2-font: normal normal 400 16px/24px var(--type-base-font-family); /* Small buttons */\n  --type-button-2-letter-spacing: 0.08em;\n  --type-details-caption-1-font: normal normal 400 12px/16px\n    var(--type-base-font-family);\n  --type-details-caption-1-letter-spacing: 0.08em;\n  --type-details-caption-2-font: normal normal 300 12px/16px\n    var(--type-base-font-family);\n  --type-details-caption-2-letter-spacing: 0.08em;\n  --type-details-overline-font: normal normal 400 12px/20px\n    var(--type-base-font-family);\n  --type-details-overline-letter-spacing: 0.16em;\n}\n",""]);const s=a},4763:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(4933),o=n.n(r),i=n(3476),a=n.n(i)()(o());a.push([t.id,".elsie-base-design a {\n  --textColor: var(--color-brand-500);\n  --textFont: var(--type-body-1-strong-font)\n  --textLetterSpacing: var(--type-body-1-strong-letter-spacing);\n  color: var(--textColor);\n  font: var(--textFont);\n  letter-spacing: var(--textLetterSpacing);\n  text-decoration: none;\n}\n\n.elsie-base-design a:hover {\n  --textColor: var(--color-brand-700);\n  text-decoration: solid underline var(--textColor);\n  text-underline-offset: 6px;\n}\n\n.elsie-base-design a:focus-visible {\n  outline: solid var(--shape-border-width-4) var(--color-neutral-400);\n  border: var(--shape-border-width-1) solid var(--color-neutral-800); \n  border-radius: var(--shape-border-radius-1);\n}\n",""]);const s=a},1857:t=>{var e=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===n}(t)}(t)},n="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(t,e){return!1!==e.clone&&e.isMergeableObject(t)?s((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function o(t,e,n){return t.concat(e).map((function(t){return r(t,n)}))}function i(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return Object.propertyIsEnumerable.call(t,e)})):[]}(t))}function a(t,e){try{return e in t}catch(t){return!1}}function s(t,n,l){(l=l||{}).arrayMerge=l.arrayMerge||o,l.isMergeableObject=l.isMergeableObject||e,l.cloneUnlessOtherwiseSpecified=r;var c=Array.isArray(n);return c===Array.isArray(t)?c?l.arrayMerge(t,n,l):function(t,e,n){var o={};return n.isMergeableObject(t)&&i(t).forEach((function(e){o[e]=r(t[e],n)})),i(e).forEach((function(i){(function(t,e){return a(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,i)||(a(t,i)&&n.isMergeableObject(e[i])?o[i]=function(t,e){if(!e.customMerge)return s;var n=e.customMerge(t);return"function"==typeof n?n:s}(i,n)(t[i],e[i],n):o[i]=r(e[i],n))})),o}(t,n,l):r(n,l)}s.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,n){return s(t,n,e)}),{})};var l=s;t.exports=l}};