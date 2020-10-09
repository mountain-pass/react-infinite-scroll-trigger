/*! For license information please see main.9091b31d.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-infinite-scroll-trigger-example"]=this["webpackJsonpreact-infinite-scroll-trigger-example"]||[]).push([[0],{10:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n),a=t(2),c=t.n(a),i=t(4),u=t(3);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function f(e,r){return e(r={exports:{}},r.exports),r.exports}var s="function"===typeof Symbol&&Symbol.for,y=s?Symbol.for("react.element"):60103,p=s?Symbol.for("react.portal"):60106,m=s?Symbol.for("react.fragment"):60107,d=s?Symbol.for("react.strict_mode"):60108,b=s?Symbol.for("react.profiler"):60114,g=s?Symbol.for("react.provider"):60109,h=s?Symbol.for("react.context"):60110,S=s?Symbol.for("react.async_mode"):60111,v=s?Symbol.for("react.concurrent_mode"):60111,O=s?Symbol.for("react.forward_ref"):60112,E=s?Symbol.for("react.suspense"):60113,j=s?Symbol.for("react.suspense_list"):60120,w=s?Symbol.for("react.memo"):60115,$=s?Symbol.for("react.lazy"):60116,P=s?Symbol.for("react.block"):60121,x=s?Symbol.for("react.fundamental"):60117,T=s?Symbol.for("react.responder"):60118,M=s?Symbol.for("react.scope"):60119;function _(e){if("object"===typeof e&&null!==e){var r=e.$$typeof;switch(r){case y:switch(e=e.type){case S:case v:case m:case b:case d:case E:return e;default:switch(e=e&&e.$$typeof){case h:case O:case $:case w:case g:return e;default:return r}}case p:return r}}}function C(e){return _(e)===v}var R={AsyncMode:S,ConcurrentMode:v,ContextConsumer:h,ContextProvider:g,Element:y,ForwardRef:O,Fragment:m,Lazy:$,Memo:w,Portal:p,Profiler:b,StrictMode:d,Suspense:E,isAsyncMode:function(e){return C(e)||_(e)===S},isConcurrentMode:C,isContextConsumer:function(e){return _(e)===h},isContextProvider:function(e){return _(e)===g},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===y},isForwardRef:function(e){return _(e)===O},isFragment:function(e){return _(e)===m},isLazy:function(e){return _(e)===$},isMemo:function(e){return _(e)===w},isPortal:function(e){return _(e)===p},isProfiler:function(e){return _(e)===b},isStrictMode:function(e){return _(e)===d},isSuspense:function(e){return _(e)===E},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===m||e===v||e===b||e===d||e===E||e===j||"object"===typeof e&&null!==e&&(e.$$typeof===$||e.$$typeof===w||e.$$typeof===g||e.$$typeof===h||e.$$typeof===O||e.$$typeof===x||e.$$typeof===T||e.$$typeof===M||e.$$typeof===P)},typeOf:_},k=(f((function(e,r){0})),f((function(e){e.exports=R})),Object.getOwnPropertySymbols),I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;function F(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}})()&&Object.assign;var D="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function N(e,r,t,n,o){}N.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function V(){}function q(){}q.resetWarningCache=V;var W=f((function(e){e.exports=function(){function e(e,r,t,n,o,a){if(a!==D){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:q,resetWarningCache:V};return t.PropTypes=t,t}()})),z=function(){return o.a.createElement("i",null,"Loading...")},A=function(){return o.a.createElement("i",null,"No more data.")},B=function(e){var r=e.loadMore,t=e.renderLoading,n=void 0===t?z:t,a=e.renderNoMoreData,c=void 0===a?A:a,i=e.inViewConfig,f=void 0===i?{}:i,s=e.reloadDelayMs,y=void 0===s?100:s,p=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["loadMore","renderLoading","renderNoMoreData","inViewConfig","reloadDelayMs"]),d=Object(u.a)(f),b=d[0],g=d[1],h=o.a.useRef(!1),S=o.a.useRef(!0),v=o.a.useRef(!1),O=o.a.useState(!1),E=O[0],j=O[1],w=o.a.useRef((function(){try{var e=function(){if(h.current&&S.current&&!v.current){var e=function(){var e;S.current||j(!0),v.current=!1,(e=y,new Promise((function(r){return setTimeout(r,e)}))).then(w.current)};console.debug("InfiniteScrollTrigger - loading..."),v.current=!0;var t=function(e,r){try{var t=e()}catch(m){return r(m)}return t&&t.then?t.then(void 0,r):t}((function(){return Promise.resolve(r()).then((function(e){S.current=e}))}),(function(e){console.error("InfiniteScrollTrigger caught error - "+e.message),S.current=!1}));return t&&t.then?t.then(e):e()}console.debug("InfiniteScrollTrigger - no more loading.",{isVisibleRef:h.current,hasMoreRef:S.current,isLoadingRef:v.current})}();return Promise.resolve(e&&e.then?e.then((function(){})):void 0)}catch(m){return Promise.reject(m)}}));return o.a.useEffect((function(){h.current=g,g&&w.current()}),[g]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",l({ref:b},p)),n&&!E&&o.a.createElement(n,null),c&&E&&o.a.createElement(c,null))};B.propTypes={loadMore:W.func.isRequired,renderLoading:W.func,renderNoMoreData:W.func};var J=B,U=()=>{var e=o.a.useState([]),r=Object(i.a)(e,2),t=r[0],n=r[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Records loaded = ",t.length),o.a.createElement("div",{style:{border:"1px solid red",height:"500px",overflow:"auto"}},t.map(e=>o.a.createElement("div",{key:e,style:{border:"1px solid blue",height:"50px"}},e)),o.a.createElement(J,{loadMore:()=>new Promise(e=>{setTimeout(()=>{n(r=>{var t=[...r,"Element_".concat(r.length+1),"Element_".concat(r.length+2),"Element_".concat(r.length+3)];return e(t.length<=14),t}),e()},1500)}),style:{height:"100px",marginTop:"-100px",background:"rgba(0,255,0,0.2)"}})))};c.a.render(o.a.createElement(U,null),document.getElementById("root"))},5:function(e,r,t){e.exports=t(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.9091b31d.chunk.js.map