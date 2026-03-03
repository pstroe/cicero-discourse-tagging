(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Sw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var my={exports:{}},Ql={},gy={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=Symbol.for("react.element"),Aw=Symbol.for("react.portal"),Cw=Symbol.for("react.fragment"),kw=Symbol.for("react.strict_mode"),Rw=Symbol.for("react.profiler"),Pw=Symbol.for("react.provider"),xw=Symbol.for("react.context"),Nw=Symbol.for("react.forward_ref"),Dw=Symbol.for("react.suspense"),Vw=Symbol.for("react.memo"),Ow=Symbol.for("react.lazy"),Pp=Symbol.iterator;function Lw(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var yy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_y=Object.assign,vy={};function is(t,e,n){this.props=t,this.context=e,this.refs=vy,this.updater=n||yy}is.prototype.isReactComponent={};is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ey(){}Ey.prototype=is.prototype;function Xh(t,e,n){this.props=t,this.context=e,this.refs=vy,this.updater=n||yy}var Zh=Xh.prototype=new Ey;Zh.constructor=Xh;_y(Zh,is.prototype);Zh.isPureReactComponent=!0;var xp=Array.isArray,wy=Object.prototype.hasOwnProperty,ed={current:null},Ty={key:!0,ref:!0,__self:!0,__source:!0};function Iy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)wy.call(e,r)&&!Ty.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:bo,type:t,key:s,ref:o,props:i,_owner:ed.current}}function bw(t,e){return{$$typeof:bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function td(t){return typeof t=="object"&&t!==null&&t.$$typeof===bo}function Mw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Np=/\/+/g;function Hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Mw(""+t.key):e.toString(36)}function Ma(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bo:case Aw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hu(o,0):r,xp(i)?(n="",t!=null&&(n=t.replace(Np,"$&/")+"/"),Ma(i,e,n,"",function(h){return h})):i!=null&&(td(i)&&(i=bw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Np,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",xp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Hu(s,l);o+=Ma(s,e,n,u,i)}else if(u=Lw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Hu(s,l++),o+=Ma(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fa(t,e,n){if(t==null)return t;var r=[],i=0;return Ma(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Fw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mt={current:null},Fa={transition:null},Uw={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:Fa,ReactCurrentOwner:ed};function Sy(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:fa,forEach:function(t,e,n){fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fa(t,function(){e++}),e},toArray:function(t){return fa(t,function(e){return e})||[]},only:function(t){if(!td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=is;ie.Fragment=Cw;ie.Profiler=Rw;ie.PureComponent=Xh;ie.StrictMode=kw;ie.Suspense=Dw;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uw;ie.act=Sy;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=_y({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ed.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)wy.call(e,u)&&!Ty.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:bo,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:xw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Pw,_context:t},t.Consumer=t};ie.createElement=Iy;ie.createFactory=function(t){var e=Iy.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:Nw,render:t}};ie.isValidElement=td;ie.lazy=function(t){return{$$typeof:Ow,_payload:{_status:-1,_result:t},_init:Fw}};ie.memo=function(t,e){return{$$typeof:Vw,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Fa.transition;Fa.transition={};try{t()}finally{Fa.transition=e}};ie.unstable_act=Sy;ie.useCallback=function(t,e){return mt.current.useCallback(t,e)};ie.useContext=function(t){return mt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return mt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return mt.current.useEffect(t,e)};ie.useId=function(){return mt.current.useId()};ie.useImperativeHandle=function(t,e,n){return mt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return mt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return mt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return mt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return mt.current.useReducer(t,e,n)};ie.useRef=function(t){return mt.current.useRef(t)};ie.useState=function(t){return mt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return mt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return mt.current.useTransition()};ie.version="18.3.1";gy.exports=ie;var Te=gy.exports;const jw=Sw(Te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zw=Te,Bw=Symbol.for("react.element"),$w=Symbol.for("react.fragment"),Hw=Object.prototype.hasOwnProperty,Ww=zw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qw={key:!0,ref:!0,__self:!0,__source:!0};function Ay(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Hw.call(e,r)&&!qw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Bw,type:t,key:s,ref:o,props:i,_owner:Ww.current}}Ql.Fragment=$w;Ql.jsx=Ay;Ql.jsxs=Ay;my.exports=Ql;var N=my.exports,Oc={},Cy={exports:{}},xt={},ky={exports:{}},Ry={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var ee=B.length;B.push(Q);e:for(;0<ee;){var pe=ee-1>>>1,Se=B[pe];if(0<i(Se,Q))B[pe]=Q,B[ee]=Se,ee=pe;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],ee=B.pop();if(ee!==Q){B[0]=ee;e:for(var pe=0,Se=B.length,mn=Se>>>1;pe<mn;){var U=2*(pe+1)-1,te=B[U],J=U+1,W=B[J];if(0>i(te,ee))J<Se&&0>i(W,te)?(B[pe]=W,B[J]=ee,pe=J):(B[pe]=te,B[U]=ee,pe=U);else if(J<Se&&0>i(W,ee))B[pe]=W,B[J]=ee,pe=J;else break e}}return Q}function i(B,Q){var ee=B.sortIndex-Q.sortIndex;return ee!==0?ee:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,y=3,C=!1,x=!1,D=!1,M=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(B){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=B)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function V(B){if(D=!1,A(B),!x)if(n(u)!==null)x=!0,Un(F);else{var Q=n(h);Q!==null&&ct(V,Q.startTime-B)}}function F(B,Q){x=!1,D&&(D=!1,S(g),g=-1),C=!0;var ee=y;try{for(A(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||B&&!I());){var pe=m.callback;if(typeof pe=="function"){m.callback=null,y=m.priorityLevel;var Se=pe(m.expirationTime<=Q);Q=t.unstable_now(),typeof Se=="function"?m.callback=Se:m===n(u)&&r(u),A(Q)}else r(u);m=n(u)}if(m!==null)var mn=!0;else{var U=n(h);U!==null&&ct(V,U.startTime-Q),mn=!1}return mn}finally{m=null,y=ee,C=!1}}var z=!1,E=null,g=-1,w=5,v=-1;function I(){return!(t.unstable_now()-v<w)}function k(){if(E!==null){var B=t.unstable_now();v=B;var Q=!0;try{Q=E(!0,B)}finally{Q?_():(z=!1,E=null)}}else z=!1}var _;if(typeof T=="function")_=function(){T(k)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,It=xe.port2;xe.port1.onmessage=k,_=function(){It.postMessage(null)}}else _=function(){M(k,0)};function Un(B){E=B,z||(z=!0,_())}function ct(B,Q){g=M(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){x||C||(x=!0,Un(F))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var ee=y;y=Q;try{return B()}finally{y=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=y;y=B;try{return Q()}finally{y=ee}},t.unstable_scheduleCallback=function(B,Q,ee){var pe=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?pe+ee:pe):ee=pe,B){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ee+Se,B={id:f++,callback:Q,priorityLevel:B,startTime:ee,expirationTime:Se,sortIndex:-1},ee>pe?(B.sortIndex=ee,e(h,B),n(u)===null&&B===n(h)&&(D?(S(g),g=-1):D=!0,ct(V,ee-pe))):(B.sortIndex=Se,e(u,B),x||C||(x=!0,Un(F))),B},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(B){var Q=y;return function(){var ee=y;y=Q;try{return B.apply(this,arguments)}finally{y=ee}}}})(Ry);ky.exports=Ry;var Kw=ky.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gw=Te,Rt=Kw;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Py=new Set,uo={};function ai(t,e){Wi(t,e),Wi(t+"Capture",e)}function Wi(t,e){for(uo[t]=e,t=0;t<e.length;t++)Py.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lc=Object.prototype.hasOwnProperty,Qw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dp={},Vp={};function Jw(t){return Lc.call(Vp,t)?!0:Lc.call(Dp,t)?!1:Qw.test(t)?Vp[t]=!0:(Dp[t]=!0,!1)}function Yw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Xw(t,e,n,r){if(e===null||typeof e>"u"||Yw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nd,rd);Ze[e]=new gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nd,rd);Ze[e]=new gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nd,rd);Ze[e]=new gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function id(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Xw(e,n,i,r)&&(n=null),r||i===null?Jw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mn=Gw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),wi=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),bc=Symbol.for("react.profiler"),xy=Symbol.for("react.provider"),Ny=Symbol.for("react.context"),od=Symbol.for("react.forward_ref"),Mc=Symbol.for("react.suspense"),Fc=Symbol.for("react.suspense_list"),ad=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),Dy=Symbol.for("react.offscreen"),Op=Symbol.iterator;function xs(t){return t===null||typeof t!="object"?null:(t=Op&&t[Op]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Wu;function js(t){if(Wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wu=e&&e[1]||""}return`
`+Wu+t}var qu=!1;function Ku(t,e){if(!t||qu)return"";qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?js(t):""}function Zw(t){switch(t.tag){case 5:return js(t.type);case 16:return js("Lazy");case 13:return js("Suspense");case 19:return js("SuspenseList");case 0:case 2:case 15:return t=Ku(t.type,!1),t;case 11:return t=Ku(t.type.render,!1),t;case 1:return t=Ku(t.type,!0),t;default:return""}}function Uc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ti:return"Fragment";case wi:return"Portal";case bc:return"Profiler";case sd:return"StrictMode";case Mc:return"Suspense";case Fc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ny:return(t.displayName||"Context")+".Consumer";case xy:return(t._context.displayName||"Context")+".Provider";case od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ad:return e=t.displayName||null,e!==null?e:Uc(t.type)||"Memo";case Jn:e=t._payload,t=t._init;try{return Uc(t(e))}catch{}}return null}function e1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uc(e);case 8:return e===sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t1(t){var e=Vy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ma(t){t._valueTracker||(t._valueTracker=t1(t))}function Oy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Vy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jc(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ly(t,e){e=e.checked,e!=null&&id(t,"checked",e,!1)}function zc(t,e){Ly(t,e);var n=Tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bc(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bc(t,e,n){(e!=="number"||sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zs=Array.isArray;function Oi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $c(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(zs(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function by(t,e){var n=Tr(e.value),r=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function My(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?My(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ga,Fy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ga=ga||document.createElement("div"),ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},n1=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(t){n1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gs[e]=Gs[t]})});function Uy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gs.hasOwnProperty(t)&&Gs[t]?(""+e).trim():e+"px"}function jy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Uy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var r1=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wc(t,e){if(e){if(r1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kc=null;function ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gc=null,Li=null,bi=null;function Up(t){if(t=Uo(t)){if(typeof Gc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=eu(e),Gc(t.stateNode,t.type,e))}}function zy(t){Li?bi?bi.push(t):bi=[t]:Li=t}function By(){if(Li){var t=Li,e=bi;if(bi=Li=null,Up(t),e)for(t=0;t<e.length;t++)Up(e[t])}}function $y(t,e){return t(e)}function Hy(){}var Gu=!1;function Wy(t,e,n){if(Gu)return t(e,n);Gu=!0;try{return $y(t,e,n)}finally{Gu=!1,(Li!==null||bi!==null)&&(Hy(),By())}}function ho(t,e){var n=t.stateNode;if(n===null)return null;var r=eu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Qc=!1;if(kn)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{Qc=!1}function i1(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Qs=!1,ol=null,al=!1,Jc=null,s1={onError:function(t){Qs=!0,ol=t}};function o1(t,e,n,r,i,s,o,l,u){Qs=!1,ol=null,i1.apply(s1,arguments)}function a1(t,e,n,r,i,s,o,l,u){if(o1.apply(this,arguments),Qs){if(Qs){var h=ol;Qs=!1,ol=null}else throw Error(b(198));al||(al=!0,Jc=h)}}function li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function qy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jp(t){if(li(t)!==t)throw Error(b(188))}function l1(t){var e=t.alternate;if(!e){if(e=li(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jp(i),t;if(s===r)return jp(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function Ky(t){return t=l1(t),t!==null?Gy(t):null}function Gy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gy(t);if(e!==null)return e;t=t.sibling}return null}var Qy=Rt.unstable_scheduleCallback,zp=Rt.unstable_cancelCallback,u1=Rt.unstable_shouldYield,c1=Rt.unstable_requestPaint,Oe=Rt.unstable_now,h1=Rt.unstable_getCurrentPriorityLevel,ud=Rt.unstable_ImmediatePriority,Jy=Rt.unstable_UserBlockingPriority,ll=Rt.unstable_NormalPriority,d1=Rt.unstable_LowPriority,Yy=Rt.unstable_IdlePriority,Jl=null,on=null;function f1(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:g1,p1=Math.log,m1=Math.LN2;function g1(t){return t>>>=0,t===0?32:31-(p1(t)/m1|0)|0}var ya=64,_a=4194304;function Bs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ul(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Bs(l):(s&=o,s!==0&&(r=Bs(s)))}else o=n&~i,o!==0?r=Bs(o):s!==0&&(r=Bs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),i=1<<n,r|=t[n],e&=~i;return r}function y1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=y1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Yc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xy(){var t=ya;return ya<<=1,!(ya&4194240)&&(ya=64),t}function Qu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function v1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function cd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function Zy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var e_,hd,t_,n_,r_,Xc=!1,va=[],ar=null,lr=null,ur=null,fo=new Map,po=new Map,Xn=[],E1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bp(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function Ds(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Uo(e),e!==null&&hd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function w1(t,e,n,r,i){switch(e){case"focusin":return ar=Ds(ar,t,e,n,r,i),!0;case"dragenter":return lr=Ds(lr,t,e,n,r,i),!0;case"mouseover":return ur=Ds(ur,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return fo.set(s,Ds(fo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,po.set(s,Ds(po.get(s)||null,t,e,n,r,i)),!0}return!1}function i_(t){var e=Br(t.target);if(e!==null){var n=li(e);if(n!==null){if(e=n.tag,e===13){if(e=qy(n),e!==null){t.blockedOn=e,r_(t.priority,function(){t_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ua(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kc=r,n.target.dispatchEvent(r),Kc=null}else return e=Uo(n),e!==null&&hd(e),t.blockedOn=n,!1;e.shift()}return!0}function $p(t,e,n){Ua(t)&&n.delete(e)}function T1(){Xc=!1,ar!==null&&Ua(ar)&&(ar=null),lr!==null&&Ua(lr)&&(lr=null),ur!==null&&Ua(ur)&&(ur=null),fo.forEach($p),po.forEach($p)}function Vs(t,e){t.blockedOn===e&&(t.blockedOn=null,Xc||(Xc=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,T1)))}function mo(t){function e(i){return Vs(i,t)}if(0<va.length){Vs(va[0],t);for(var n=1;n<va.length;n++){var r=va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ar!==null&&Vs(ar,t),lr!==null&&Vs(lr,t),ur!==null&&Vs(ur,t),fo.forEach(e),po.forEach(e),n=0;n<Xn.length;n++)r=Xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)i_(n),n.blockedOn===null&&Xn.shift()}var Mi=Mn.ReactCurrentBatchConfig,cl=!0;function I1(t,e,n,r){var i=fe,s=Mi.transition;Mi.transition=null;try{fe=1,dd(t,e,n,r)}finally{fe=i,Mi.transition=s}}function S1(t,e,n,r){var i=fe,s=Mi.transition;Mi.transition=null;try{fe=4,dd(t,e,n,r)}finally{fe=i,Mi.transition=s}}function dd(t,e,n,r){if(cl){var i=Zc(t,e,n,r);if(i===null)sc(t,e,r,hl,n),Bp(t,r);else if(w1(i,t,e,n,r))r.stopPropagation();else if(Bp(t,r),e&4&&-1<E1.indexOf(t)){for(;i!==null;){var s=Uo(i);if(s!==null&&e_(s),s=Zc(t,e,n,r),s===null&&sc(t,e,r,hl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else sc(t,e,r,null,n)}}var hl=null;function Zc(t,e,n,r){if(hl=null,t=ld(r),t=Br(t),t!==null)if(e=li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=qy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function s_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h1()){case ud:return 1;case Jy:return 4;case ll:case d1:return 16;case Yy:return 536870912;default:return 16}default:return 16}}var ir=null,fd=null,ja=null;function o_(){if(ja)return ja;var t,e=fd,n=e.length,r,i="value"in ir?ir.value:ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ja=i.slice(t,1<r?1-r:void 0)}function za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ea(){return!0}function Hp(){return!1}function Nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ea:Hp,this.isPropagationStopped=Hp,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),e}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pd=Nt(ss),Fo=Re({},ss,{view:0,detail:0}),A1=Nt(Fo),Ju,Yu,Os,Yl=Re({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(Ju=t.screenX-Os.screenX,Yu=t.screenY-Os.screenY):Yu=Ju=0,Os=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:Yu}}),Wp=Nt(Yl),C1=Re({},Yl,{dataTransfer:0}),k1=Nt(C1),R1=Re({},Fo,{relatedTarget:0}),Xu=Nt(R1),P1=Re({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),x1=Nt(P1),N1=Re({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),D1=Nt(N1),V1=Re({},ss,{data:0}),qp=Nt(V1),O1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=b1[t])?!!e[t]:!1}function md(){return M1}var F1=Re({},Fo,{key:function(t){if(t.key){var e=O1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?L1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(t){return t.type==="keypress"?za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),U1=Nt(F1),j1=Re({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=Nt(j1),z1=Re({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),B1=Nt(z1),$1=Re({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),H1=Nt($1),W1=Re({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q1=Nt(W1),K1=[9,13,27,32],gd=kn&&"CompositionEvent"in window,Js=null;kn&&"documentMode"in document&&(Js=document.documentMode);var G1=kn&&"TextEvent"in window&&!Js,a_=kn&&(!gd||Js&&8<Js&&11>=Js),Gp=" ",Qp=!1;function l_(t,e){switch(t){case"keyup":return K1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ii=!1;function Q1(t,e){switch(t){case"compositionend":return u_(e);case"keypress":return e.which!==32?null:(Qp=!0,Gp);case"textInput":return t=e.data,t===Gp&&Qp?null:t;default:return null}}function J1(t,e){if(Ii)return t==="compositionend"||!gd&&l_(t,e)?(t=o_(),ja=fd=ir=null,Ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return a_&&e.locale!=="ko"?null:e.data;default:return null}}var Y1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Y1[t.type]:e==="textarea"}function c_(t,e,n,r){zy(r),e=dl(e,"onChange"),0<e.length&&(n=new pd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ys=null,go=null;function X1(t){w_(t,0)}function Xl(t){var e=Ci(t);if(Oy(e))return t}function Z1(t,e){if(t==="change")return e}var h_=!1;if(kn){var Zu;if(kn){var ec="oninput"in document;if(!ec){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),ec=typeof Yp.oninput=="function"}Zu=ec}else Zu=!1;h_=Zu&&(!document.documentMode||9<document.documentMode)}function Xp(){Ys&&(Ys.detachEvent("onpropertychange",d_),go=Ys=null)}function d_(t){if(t.propertyName==="value"&&Xl(go)){var e=[];c_(e,go,t,ld(t)),Wy(X1,e)}}function eT(t,e,n){t==="focusin"?(Xp(),Ys=e,go=n,Ys.attachEvent("onpropertychange",d_)):t==="focusout"&&Xp()}function tT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(go)}function nT(t,e){if(t==="click")return Xl(e)}function rT(t,e){if(t==="input"||t==="change")return Xl(e)}function iT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xt=typeof Object.is=="function"?Object.is:iT;function yo(t,e){if(Xt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Lc.call(e,i)||!Xt(t[i],e[i]))return!1}return!0}function Zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function em(t,e){var n=Zp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zp(n)}}function f_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?f_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function p_(){for(var t=window,e=sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sl(t.document)}return e}function yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sT(t){var e=p_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&f_(n.ownerDocument.documentElement,n)){if(r!==null&&yd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=em(n,s);var o=em(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oT=kn&&"documentMode"in document&&11>=document.documentMode,Si=null,eh=null,Xs=null,th=!1;function tm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;th||Si==null||Si!==sl(r)||(r=Si,"selectionStart"in r&&yd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xs&&yo(Xs,r)||(Xs=r,r=dl(eh,"onSelect"),0<r.length&&(e=new pd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Si)))}function wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ai={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},tc={},m_={};kn&&(m_=document.createElement("div").style,"AnimationEvent"in window||(delete Ai.animationend.animation,delete Ai.animationiteration.animation,delete Ai.animationstart.animation),"TransitionEvent"in window||delete Ai.transitionend.transition);function Zl(t){if(tc[t])return tc[t];if(!Ai[t])return t;var e=Ai[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in m_)return tc[t]=e[n];return t}var g_=Zl("animationend"),y_=Zl("animationiteration"),__=Zl("animationstart"),v_=Zl("transitionend"),E_=new Map,nm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){E_.set(t,e),ai(e,[t])}for(var nc=0;nc<nm.length;nc++){var rc=nm[nc],aT=rc.toLowerCase(),lT=rc[0].toUpperCase()+rc.slice(1);xr(aT,"on"+lT)}xr(g_,"onAnimationEnd");xr(y_,"onAnimationIteration");xr(__,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(v_,"onTransitionEnd");Wi("onMouseEnter",["mouseout","mouseover"]);Wi("onMouseLeave",["mouseout","mouseover"]);Wi("onPointerEnter",["pointerout","pointerover"]);Wi("onPointerLeave",["pointerout","pointerover"]);ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ai("onBeforeInput",["compositionend","keypress","textInput","paste"]);ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uT=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function rm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,a1(r,e,void 0,t),t.currentTarget=null}function w_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;rm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;rm(i,l,h),s=u}}}if(al)throw t=Jc,al=!1,Jc=null,t}function _e(t,e){var n=e[oh];n===void 0&&(n=e[oh]=new Set);var r=t+"__bubble";n.has(r)||(T_(e,t,2,!1),n.add(r))}function ic(t,e,n){var r=0;e&&(r|=4),T_(n,t,r,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[Ta]){t[Ta]=!0,Py.forEach(function(n){n!=="selectionchange"&&(uT.has(n)||ic(n,!1,t),ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,ic("selectionchange",!1,e))}}function T_(t,e,n,r){switch(s_(e)){case 1:var i=I1;break;case 4:i=S1;break;default:i=dd}n=i.bind(null,e,n,t),i=void 0,!Qc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function sc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Br(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Wy(function(){var h=s,f=ld(n),m=[];e:{var y=E_.get(t);if(y!==void 0){var C=pd,x=t;switch(t){case"keypress":if(za(n)===0)break e;case"keydown":case"keyup":C=U1;break;case"focusin":x="focus",C=Xu;break;case"focusout":x="blur",C=Xu;break;case"beforeblur":case"afterblur":C=Xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=k1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=B1;break;case g_:case y_:case __:C=x1;break;case v_:C=H1;break;case"scroll":C=A1;break;case"wheel":C=q1;break;case"copy":case"cut":case"paste":C=D1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Kp}var D=(e&4)!==0,M=!D&&t==="scroll",S=D?y!==null?y+"Capture":null:y;D=[];for(var T=h,A;T!==null;){A=T;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,S!==null&&(V=ho(T,S),V!=null&&D.push(vo(T,V,A)))),M)break;T=T.return}0<D.length&&(y=new C(y,x,null,n,f),m.push({event:y,listeners:D}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",y&&n!==Kc&&(x=n.relatedTarget||n.fromElement)&&(Br(x)||x[Rn]))break e;if((C||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,C?(x=n.relatedTarget||n.toElement,C=h,x=x?Br(x):null,x!==null&&(M=li(x),x!==M||x.tag!==5&&x.tag!==6)&&(x=null)):(C=null,x=h),C!==x)){if(D=Wp,V="onMouseLeave",S="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(D=Kp,V="onPointerLeave",S="onPointerEnter",T="pointer"),M=C==null?y:Ci(C),A=x==null?y:Ci(x),y=new D(V,T+"leave",C,n,f),y.target=M,y.relatedTarget=A,V=null,Br(f)===h&&(D=new D(S,T+"enter",x,n,f),D.target=A,D.relatedTarget=M,V=D),M=V,C&&x)t:{for(D=C,S=x,T=0,A=D;A;A=gi(A))T++;for(A=0,V=S;V;V=gi(V))A++;for(;0<T-A;)D=gi(D),T--;for(;0<A-T;)S=gi(S),A--;for(;T--;){if(D===S||S!==null&&D===S.alternate)break t;D=gi(D),S=gi(S)}D=null}else D=null;C!==null&&im(m,y,C,D,!1),x!==null&&M!==null&&im(m,M,x,D,!0)}}e:{if(y=h?Ci(h):window,C=y.nodeName&&y.nodeName.toLowerCase(),C==="select"||C==="input"&&y.type==="file")var F=Z1;else if(Jp(y))if(h_)F=rT;else{F=tT;var z=eT}else(C=y.nodeName)&&C.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(F=nT);if(F&&(F=F(t,h))){c_(m,F,n,f);break e}z&&z(t,y,h),t==="focusout"&&(z=y._wrapperState)&&z.controlled&&y.type==="number"&&Bc(y,"number",y.value)}switch(z=h?Ci(h):window,t){case"focusin":(Jp(z)||z.contentEditable==="true")&&(Si=z,eh=h,Xs=null);break;case"focusout":Xs=eh=Si=null;break;case"mousedown":th=!0;break;case"contextmenu":case"mouseup":case"dragend":th=!1,tm(m,n,f);break;case"selectionchange":if(oT)break;case"keydown":case"keyup":tm(m,n,f)}var E;if(gd)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Ii?l_(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(a_&&n.locale!=="ko"&&(Ii||g!=="onCompositionStart"?g==="onCompositionEnd"&&Ii&&(E=o_()):(ir=f,fd="value"in ir?ir.value:ir.textContent,Ii=!0)),z=dl(h,g),0<z.length&&(g=new qp(g,t,null,n,f),m.push({event:g,listeners:z}),E?g.data=E:(E=u_(n),E!==null&&(g.data=E)))),(E=G1?Q1(t,n):J1(t,n))&&(h=dl(h,"onBeforeInput"),0<h.length&&(f=new qp("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=E))}w_(m,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ho(t,n),s!=null&&r.unshift(vo(t,s,i)),s=ho(t,e),s!=null&&r.push(vo(t,s,i))),t=t.return}return r}function gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function im(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=ho(n,s),u!=null&&o.unshift(vo(n,u,l))):i||(u=ho(n,s),u!=null&&o.push(vo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cT=/\r\n?/g,hT=/\u0000|\uFFFD/g;function sm(t){return(typeof t=="string"?t:""+t).replace(cT,`
`).replace(hT,"")}function Ia(t,e,n){if(e=sm(e),sm(t)!==e&&n)throw Error(b(425))}function fl(){}var nh=null,rh=null;function ih(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sh=typeof setTimeout=="function"?setTimeout:void 0,dT=typeof clearTimeout=="function"?clearTimeout:void 0,om=typeof Promise=="function"?Promise:void 0,fT=typeof queueMicrotask=="function"?queueMicrotask:typeof om<"u"?function(t){return om.resolve(null).then(t).catch(pT)}:sh;function pT(t){setTimeout(function(){throw t})}function oc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mo(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),sn="__reactFiber$"+os,Eo="__reactProps$"+os,Rn="__reactContainer$"+os,oh="__reactEvents$"+os,mT="__reactListeners$"+os,gT="__reactHandles$"+os;function Br(t){var e=t[sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=am(t);t!==null;){if(n=t[sn])return n;t=am(t)}return e}t=n,n=t.parentNode}return null}function Uo(t){return t=t[sn]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function eu(t){return t[Eo]||null}var ah=[],ki=-1;function Nr(t){return{current:t}}function we(t){0>ki||(t.current=ah[ki],ah[ki]=null,ki--)}function ge(t,e){ki++,ah[ki]=t.current,t.current=e}var Ir={},lt=Nr(Ir),Et=Nr(!1),Jr=Ir;function qi(t,e){var n=t.type.contextTypes;if(!n)return Ir;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function pl(){we(Et),we(lt)}function lm(t,e,n){if(lt.current!==Ir)throw Error(b(168));ge(lt,e),ge(Et,n)}function I_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,e1(t)||"Unknown",i));return Re({},n,r)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,Jr=lt.current,ge(lt,t),ge(Et,Et.current),!0}function um(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=I_(t,e,Jr),r.__reactInternalMemoizedMergedChildContext=t,we(Et),we(lt),ge(lt,t)):we(Et),ge(Et,n)}var vn=null,tu=!1,ac=!1;function S_(t){vn===null?vn=[t]:vn.push(t)}function yT(t){tu=!0,S_(t)}function Dr(){if(!ac&&vn!==null){ac=!0;var t=0,e=fe;try{var n=vn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vn=null,tu=!1}catch(i){throw vn!==null&&(vn=vn.slice(t+1)),Qy(ud,Dr),i}finally{fe=e,ac=!1}}return null}var Ri=[],Pi=0,gl=null,yl=0,Ot=[],Lt=0,Yr=null,En=1,wn="";function Ur(t,e){Ri[Pi++]=yl,Ri[Pi++]=gl,gl=t,yl=e}function A_(t,e,n){Ot[Lt++]=En,Ot[Lt++]=wn,Ot[Lt++]=Yr,Yr=t;var r=En;t=wn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var s=32-Qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-Qt(e)+i|n<<i|r,wn=s+t}else En=1<<s|n<<i|r,wn=t}function _d(t){t.return!==null&&(Ur(t,1),A_(t,1,0))}function vd(t){for(;t===gl;)gl=Ri[--Pi],Ri[Pi]=null,yl=Ri[--Pi],Ri[Pi]=null;for(;t===Yr;)Yr=Ot[--Lt],Ot[Lt]=null,wn=Ot[--Lt],Ot[Lt]=null,En=Ot[--Lt],Ot[Lt]=null}var kt=null,Ct=null,Ie=!1,qt=null;function C_(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,Ct=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:En,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,Ct=null,!0):!1;default:return!1}}function lh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uh(t){if(Ie){var e=Ct;if(e){var n=e;if(!cm(t,e)){if(lh(t))throw Error(b(418));e=cr(n.nextSibling);var r=kt;e&&cm(t,e)?C_(r,n):(t.flags=t.flags&-4097|2,Ie=!1,kt=t)}}else{if(lh(t))throw Error(b(418));t.flags=t.flags&-4097|2,Ie=!1,kt=t}}}function hm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function Sa(t){if(t!==kt)return!1;if(!Ie)return hm(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ih(t.type,t.memoizedProps)),e&&(e=Ct)){if(lh(t))throw k_(),Error(b(418));for(;e;)C_(t,e),e=cr(e.nextSibling)}if(hm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=kt?cr(t.stateNode.nextSibling):null;return!0}function k_(){for(var t=Ct;t;)t=cr(t.nextSibling)}function Ki(){Ct=kt=null,Ie=!1}function Ed(t){qt===null?qt=[t]:qt.push(t)}var _T=Mn.ReactCurrentBatchConfig;function Ls(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function Aa(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dm(t){var e=t._init;return e(t._payload)}function R_(t){function e(S,T){if(t){var A=S.deletions;A===null?(S.deletions=[T],S.flags|=16):A.push(T)}}function n(S,T){if(!t)return null;for(;T!==null;)e(S,T),T=T.sibling;return null}function r(S,T){for(S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function i(S,T){return S=pr(S,T),S.index=0,S.sibling=null,S}function s(S,T,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<T?(S.flags|=2,T):A):(S.flags|=2,T)):(S.flags|=1048576,T)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,T,A,V){return T===null||T.tag!==6?(T=pc(A,S.mode,V),T.return=S,T):(T=i(T,A),T.return=S,T)}function u(S,T,A,V){var F=A.type;return F===Ti?f(S,T,A.props.children,V,A.key):T!==null&&(T.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Jn&&dm(F)===T.type)?(V=i(T,A.props),V.ref=Ls(S,T,A),V.return=S,V):(V=Ga(A.type,A.key,A.props,null,S.mode,V),V.ref=Ls(S,T,A),V.return=S,V)}function h(S,T,A,V){return T===null||T.tag!==4||T.stateNode.containerInfo!==A.containerInfo||T.stateNode.implementation!==A.implementation?(T=mc(A,S.mode,V),T.return=S,T):(T=i(T,A.children||[]),T.return=S,T)}function f(S,T,A,V,F){return T===null||T.tag!==7?(T=Kr(A,S.mode,V,F),T.return=S,T):(T=i(T,A),T.return=S,T)}function m(S,T,A){if(typeof T=="string"&&T!==""||typeof T=="number")return T=pc(""+T,S.mode,A),T.return=S,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case pa:return A=Ga(T.type,T.key,T.props,null,S.mode,A),A.ref=Ls(S,null,T),A.return=S,A;case wi:return T=mc(T,S.mode,A),T.return=S,T;case Jn:var V=T._init;return m(S,V(T._payload),A)}if(zs(T)||xs(T))return T=Kr(T,S.mode,A,null),T.return=S,T;Aa(S,T)}return null}function y(S,T,A,V){var F=T!==null?T.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return F!==null?null:l(S,T,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case pa:return A.key===F?u(S,T,A,V):null;case wi:return A.key===F?h(S,T,A,V):null;case Jn:return F=A._init,y(S,T,F(A._payload),V)}if(zs(A)||xs(A))return F!==null?null:f(S,T,A,V,null);Aa(S,A)}return null}function C(S,T,A,V,F){if(typeof V=="string"&&V!==""||typeof V=="number")return S=S.get(A)||null,l(T,S,""+V,F);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case pa:return S=S.get(V.key===null?A:V.key)||null,u(T,S,V,F);case wi:return S=S.get(V.key===null?A:V.key)||null,h(T,S,V,F);case Jn:var z=V._init;return C(S,T,A,z(V._payload),F)}if(zs(V)||xs(V))return S=S.get(A)||null,f(T,S,V,F,null);Aa(T,V)}return null}function x(S,T,A,V){for(var F=null,z=null,E=T,g=T=0,w=null;E!==null&&g<A.length;g++){E.index>g?(w=E,E=null):w=E.sibling;var v=y(S,E,A[g],V);if(v===null){E===null&&(E=w);break}t&&E&&v.alternate===null&&e(S,E),T=s(v,T,g),z===null?F=v:z.sibling=v,z=v,E=w}if(g===A.length)return n(S,E),Ie&&Ur(S,g),F;if(E===null){for(;g<A.length;g++)E=m(S,A[g],V),E!==null&&(T=s(E,T,g),z===null?F=E:z.sibling=E,z=E);return Ie&&Ur(S,g),F}for(E=r(S,E);g<A.length;g++)w=C(E,S,g,A[g],V),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?g:w.key),T=s(w,T,g),z===null?F=w:z.sibling=w,z=w);return t&&E.forEach(function(I){return e(S,I)}),Ie&&Ur(S,g),F}function D(S,T,A,V){var F=xs(A);if(typeof F!="function")throw Error(b(150));if(A=F.call(A),A==null)throw Error(b(151));for(var z=F=null,E=T,g=T=0,w=null,v=A.next();E!==null&&!v.done;g++,v=A.next()){E.index>g?(w=E,E=null):w=E.sibling;var I=y(S,E,v.value,V);if(I===null){E===null&&(E=w);break}t&&E&&I.alternate===null&&e(S,E),T=s(I,T,g),z===null?F=I:z.sibling=I,z=I,E=w}if(v.done)return n(S,E),Ie&&Ur(S,g),F;if(E===null){for(;!v.done;g++,v=A.next())v=m(S,v.value,V),v!==null&&(T=s(v,T,g),z===null?F=v:z.sibling=v,z=v);return Ie&&Ur(S,g),F}for(E=r(S,E);!v.done;g++,v=A.next())v=C(E,S,g,v.value,V),v!==null&&(t&&v.alternate!==null&&E.delete(v.key===null?g:v.key),T=s(v,T,g),z===null?F=v:z.sibling=v,z=v);return t&&E.forEach(function(k){return e(S,k)}),Ie&&Ur(S,g),F}function M(S,T,A,V){if(typeof A=="object"&&A!==null&&A.type===Ti&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case pa:e:{for(var F=A.key,z=T;z!==null;){if(z.key===F){if(F=A.type,F===Ti){if(z.tag===7){n(S,z.sibling),T=i(z,A.props.children),T.return=S,S=T;break e}}else if(z.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Jn&&dm(F)===z.type){n(S,z.sibling),T=i(z,A.props),T.ref=Ls(S,z,A),T.return=S,S=T;break e}n(S,z);break}else e(S,z);z=z.sibling}A.type===Ti?(T=Kr(A.props.children,S.mode,V,A.key),T.return=S,S=T):(V=Ga(A.type,A.key,A.props,null,S.mode,V),V.ref=Ls(S,T,A),V.return=S,S=V)}return o(S);case wi:e:{for(z=A.key;T!==null;){if(T.key===z)if(T.tag===4&&T.stateNode.containerInfo===A.containerInfo&&T.stateNode.implementation===A.implementation){n(S,T.sibling),T=i(T,A.children||[]),T.return=S,S=T;break e}else{n(S,T);break}else e(S,T);T=T.sibling}T=mc(A,S.mode,V),T.return=S,S=T}return o(S);case Jn:return z=A._init,M(S,T,z(A._payload),V)}if(zs(A))return x(S,T,A,V);if(xs(A))return D(S,T,A,V);Aa(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,T!==null&&T.tag===6?(n(S,T.sibling),T=i(T,A),T.return=S,S=T):(n(S,T),T=pc(A,S.mode,V),T.return=S,S=T),o(S)):n(S,T)}return M}var Gi=R_(!0),P_=R_(!1),_l=Nr(null),vl=null,xi=null,wd=null;function Td(){wd=xi=vl=null}function Id(t){var e=_l.current;we(_l),t._currentValue=e}function ch(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fi(t,e){vl=t,wd=xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function zt(t){var e=t._currentValue;if(wd!==t)if(t={context:t,memoizedValue:e,next:null},xi===null){if(vl===null)throw Error(b(308));xi=t,vl.dependencies={lanes:0,firstContext:t}}else xi=xi.next=t;return e}var $r=null;function Sd(t){$r===null?$r=[t]:$r.push(t)}function x_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Sd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Pn(t,r)}function Pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yn=!1;function Ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function N_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Pn(t,n)}return i=r.interleaved,i===null?(e.next=e,Sd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Pn(t,n)}function Ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cd(t,n)}}function fm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function El(t,e,n,r){var i=t.updateQueue;Yn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,C=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,D=l;switch(y=e,C=n,D.tag){case 1:if(x=D.payload,typeof x=="function"){m=x.call(C,m,y);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=D.payload,y=typeof x=="function"?x.call(C,m,y):x,y==null)break e;m=Re({},m,y);break e;case 2:Yn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else C={eventTime:C,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=C,u=m):f=f.next=C,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=m}}function pm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var jo={},an=Nr(jo),wo=Nr(jo),To=Nr(jo);function Hr(t){if(t===jo)throw Error(b(174));return t}function Cd(t,e){switch(ge(To,e),ge(wo,t),ge(an,jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hc(e,t)}we(an),ge(an,e)}function Qi(){we(an),we(wo),we(To)}function D_(t){Hr(To.current);var e=Hr(an.current),n=Hc(e,t.type);e!==n&&(ge(wo,t),ge(an,n))}function kd(t){wo.current===t&&(we(an),we(wo))}var Ce=Nr(0);function wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lc=[];function Rd(){for(var t=0;t<lc.length;t++)lc[t]._workInProgressVersionPrimary=null;lc.length=0}var $a=Mn.ReactCurrentDispatcher,uc=Mn.ReactCurrentBatchConfig,Xr=0,ke=null,je=null,Ke=null,Tl=!1,Zs=!1,Io=0,vT=0;function nt(){throw Error(b(321))}function Pd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xt(t[n],e[n]))return!1;return!0}function xd(t,e,n,r,i,s){if(Xr=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$a.current=t===null||t.memoizedState===null?IT:ST,t=n(r,i),Zs){s=0;do{if(Zs=!1,Io=0,25<=s)throw Error(b(301));s+=1,Ke=je=null,e.updateQueue=null,$a.current=AT,t=n(r,i)}while(Zs)}if($a.current=Il,e=je!==null&&je.next!==null,Xr=0,Ke=je=ke=null,Tl=!1,e)throw Error(b(300));return t}function Nd(){var t=Io!==0;return Io=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?ke.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Bt(){if(je===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=Ke===null?ke.memoizedState:Ke.next;if(e!==null)Ke=e,je=t;else{if(t===null)throw Error(b(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ke===null?ke.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function So(t,e){return typeof e=="function"?e(t):e}function cc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Xr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ke.lanes|=f,Zr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Xt(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,Zr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Xt(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function V_(){}function O_(t,e){var n=ke,r=Bt(),i=e(),s=!Xt(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,Dd(M_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,Ao(9,b_.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(b(349));Xr&30||L_(n,e,i)}return i}function L_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function b_(t,e,n,r){e.value=n,e.getSnapshot=r,F_(e)&&U_(t)}function M_(t,e,n){return n(function(){F_(e)&&U_(t)})}function F_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xt(t,n)}catch{return!0}}function U_(t){var e=Pn(t,1);e!==null&&Jt(e,t,1,-1)}function mm(t){var e=nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=TT.bind(null,ke,t),[e.memoizedState,t]}function Ao(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function j_(){return Bt().memoizedState}function Ha(t,e,n,r){var i=nn();ke.flags|=t,i.memoizedState=Ao(1|e,n,void 0,r===void 0?null:r)}function nu(t,e,n,r){var i=Bt();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&Pd(r,o.deps)){i.memoizedState=Ao(e,n,s,r);return}}ke.flags|=t,i.memoizedState=Ao(1|e,n,s,r)}function gm(t,e){return Ha(8390656,8,t,e)}function Dd(t,e){return nu(2048,8,t,e)}function z_(t,e){return nu(4,2,t,e)}function B_(t,e){return nu(4,4,t,e)}function $_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function H_(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,$_.bind(null,e,t),n)}function Vd(){}function W_(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function q_(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function K_(t,e,n){return Xr&21?(Xt(n,e)||(n=Xy(),ke.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function ET(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=uc.transition;uc.transition={};try{t(!1),e()}finally{fe=n,uc.transition=r}}function G_(){return Bt().memoizedState}function wT(t,e,n){var r=fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Q_(t))J_(e,n);else if(n=x_(t,e,n,r),n!==null){var i=pt();Jt(n,t,r,i),Y_(n,e,r)}}function TT(t,e,n){var r=fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Q_(t))J_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Xt(l,o)){var u=e.interleaved;u===null?(i.next=i,Sd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=x_(t,e,i,r),n!==null&&(i=pt(),Jt(n,t,r,i),Y_(n,e,r))}}function Q_(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function J_(t,e){Zs=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Y_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cd(t,n)}}var Il={readContext:zt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},IT={readContext:zt,useCallback:function(t,e){return nn().memoizedState=[t,e===void 0?null:e],t},useContext:zt,useEffect:gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ha(4194308,4,$_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ha(4,2,t,e)},useMemo:function(t,e){var n=nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wT.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=nn();return t={current:t},e.memoizedState=t},useState:mm,useDebugValue:Vd,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=mm(!1),e=t[0];return t=ET.bind(null,t[1]),nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=nn();if(Ie){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Ge===null)throw Error(b(349));Xr&30||L_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,gm(M_.bind(null,r,s,t),[t]),r.flags|=2048,Ao(9,b_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=nn(),e=Ge.identifierPrefix;if(Ie){var n=wn,r=En;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ST={readContext:zt,useCallback:W_,useContext:zt,useEffect:Dd,useImperativeHandle:H_,useInsertionEffect:z_,useLayoutEffect:B_,useMemo:q_,useReducer:cc,useRef:j_,useState:function(){return cc(So)},useDebugValue:Vd,useDeferredValue:function(t){var e=Bt();return K_(e,je.memoizedState,t)},useTransition:function(){var t=cc(So)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:V_,useSyncExternalStore:O_,useId:G_,unstable_isNewReconciler:!1},AT={readContext:zt,useCallback:W_,useContext:zt,useEffect:Dd,useImperativeHandle:H_,useInsertionEffect:z_,useLayoutEffect:B_,useMemo:q_,useReducer:hc,useRef:j_,useState:function(){return hc(So)},useDebugValue:Vd,useDeferredValue:function(t){var e=Bt();return je===null?e.memoizedState=t:K_(e,je.memoizedState,t)},useTransition:function(){var t=hc(So)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:V_,useSyncExternalStore:O_,useId:G_,unstable_isNewReconciler:!1};function Ht(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ru={isMounted:function(t){return(t=t._reactInternals)?li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=pt(),i=fr(t),s=Sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,i),e!==null&&(Jt(e,t,i,r),Ba(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=pt(),i=fr(t),s=Sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,i),e!==null&&(Jt(e,t,i,r),Ba(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pt(),r=fr(t),i=Sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=hr(t,i,r),e!==null&&(Jt(e,t,r,n),Ba(e,t,r))}};function ym(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!yo(n,r)||!yo(i,s):!0}function X_(t,e,n){var r=!1,i=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=zt(s):(i=wt(e)?Jr:lt.current,r=e.contextTypes,s=(r=r!=null)?qi(t,i):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ru,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function _m(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ru.enqueueReplaceState(e,e.state,null)}function dh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ad(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=zt(s):(s=wt(e)?Jr:lt.current,i.context=qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ru.enqueueReplaceState(i,i.state,null),El(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ji(t,e){try{var n="",r=e;do n+=Zw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CT=typeof WeakMap=="function"?WeakMap:Map;function Z_(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Al||(Al=!0,Ih=r),fh(t,e)},n}function ev(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fh(t,e),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new CT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jT.bind(null,t,e,n),e.then(t,t))}function Em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var kT=Mn.ReactCurrentOwner,vt=!1;function ft(t,e,n,r){e.child=t===null?P_(e,null,n,r):Gi(e,t.child,n,r)}function Tm(t,e,n,r,i){n=n.render;var s=e.ref;return Fi(e,i),r=xd(t,e,n,r,s,i),n=Nd(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(Ie&&n&&_d(e),e.flags|=1,ft(t,e,r,i),e.child)}function Im(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tv(t,e,s,r,i)):(t=Ga(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(o,r)&&t.ref===e.ref)return xn(t,e,i)}return e.flags|=1,t=pr(s,r),t.ref=e.ref,t.return=e,e.child=t}function tv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(yo(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,xn(t,e,i)}return ph(t,e,n,r,i)}function nv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Di,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Di,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Di,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Di,At),At|=r;return ft(t,e,i,n),e.child}function rv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ph(t,e,n,r,i){var s=wt(n)?Jr:lt.current;return s=qi(e,s),Fi(e,i),n=xd(t,e,n,r,s,i),r=Nd(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(Ie&&r&&_d(e),e.flags|=1,ft(t,e,n,i),e.child)}function Sm(t,e,n,r,i){if(wt(n)){var s=!0;ml(e)}else s=!1;if(Fi(e,i),e.stateNode===null)Wa(t,e),X_(e,n,r),dh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=zt(h):(h=wt(n)?Jr:lt.current,h=qi(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&_m(e,o,r,h),Yn=!1;var y=e.memoizedState;o.state=y,El(e,r,o,i),u=e.memoizedState,l!==r||y!==u||Et.current||Yn?(typeof f=="function"&&(hh(e,n,f,r),u=e.memoizedState),(l=Yn||ym(e,n,l,r,y,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,N_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Ht(e.type,l),o.props=h,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=zt(u):(u=wt(n)?Jr:lt.current,u=qi(e,u));var C=n.getDerivedStateFromProps;(f=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&_m(e,o,r,u),Yn=!1,y=e.memoizedState,o.state=y,El(e,r,o,i);var x=e.memoizedState;l!==m||y!==x||Et.current||Yn?(typeof C=="function"&&(hh(e,n,C,r),x=e.memoizedState),(h=Yn||ym(e,n,h,r,y,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return mh(t,e,n,r,s,i)}function mh(t,e,n,r,i,s){rv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&um(e,n,!1),xn(t,e,s);r=e.stateNode,kT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gi(e,t.child,null,s),e.child=Gi(e,null,l,s)):ft(t,e,l,s),e.memoizedState=r.state,i&&um(e,n,!0),e.child}function iv(t){var e=t.stateNode;e.pendingContext?lm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lm(t,e.context,!1),Cd(t,e.containerInfo)}function Am(t,e,n,r,i){return Ki(),Ed(i),e.flags|=256,ft(t,e,n,r),e.child}var gh={dehydrated:null,treeContext:null,retryLane:0};function yh(t){return{baseLanes:t,cachePool:null,transitions:null}}function sv(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Ce,i&1),t===null)return uh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ou(o,r,0,null),t=Kr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yh(n),e.memoizedState=gh,t):Od(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return RT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=pr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=pr(l,s):(s=Kr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?yh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gh,r}return s=t.child,t=s.sibling,r=pr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Od(t,e){return e=ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ca(t,e,n,r){return r!==null&&Ed(r),Gi(e,t.child,null,n),t=Od(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=dc(Error(b(422))),Ca(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ou({mode:"visible",children:r.children},i,0,null),s=Kr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Gi(e,t.child,null,o),e.child.memoizedState=yh(o),e.memoizedState=gh,s);if(!(e.mode&1))return Ca(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=dc(s,r,void 0),Ca(t,e,o,r)}if(l=(o&t.childLanes)!==0,vt||l){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Pn(t,i),Jt(r,t,i,-1))}return jd(),r=dc(Error(b(421))),Ca(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=zT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=cr(i.nextSibling),kt=e,Ie=!0,qt=null,t!==null&&(Ot[Lt++]=En,Ot[Lt++]=wn,Ot[Lt++]=Yr,En=t.id,wn=t.overflow,Yr=e),e=Od(e,r.children),e.flags|=4096,e)}function Cm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ch(t.return,e,n)}function fc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ov(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cm(t,n,e);else if(t.tag===19)Cm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),fc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}fc(e,!0,n,null,s);break;case"together":fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function PT(t,e,n){switch(e.tag){case 3:iv(e),Ki();break;case 5:D_(e);break;case 1:wt(e.type)&&ml(e);break;case 4:Cd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(_l,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?sv(t,e,n):(ge(Ce,Ce.current&1),t=xn(t,e,n),t!==null?t.sibling:null);ge(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ov(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,nv(t,e,n)}return xn(t,e,n)}var av,_h,lv,uv;av=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_h=function(){};lv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hr(an.current);var s=null;switch(n){case"input":i=jc(t,i),r=jc(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=$c(t,i),r=$c(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fl)}Wc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(uo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(uo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&_e("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};uv=function(t,e,n,r){n!==r&&(e.flags|=4)};function bs(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function xT(t,e,n){var r=e.pendingProps;switch(vd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return wt(e.type)&&pl(),rt(e),null;case 3:return r=e.stateNode,Qi(),we(Et),we(lt),Rd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Sa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qt!==null&&(Ch(qt),qt=null))),_h(t,e),rt(e),null;case 5:kd(e);var i=Hr(To.current);if(n=e.type,t!==null&&e.stateNode!=null)lv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return rt(e),null}if(t=Hr(an.current),Sa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[sn]=e,r[Eo]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<$s.length;i++)_e($s[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Lp(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Mp(r,s),_e("invalid",r)}Wc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ia(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ia(r.textContent,l,t),i=["children",""+l]):uo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":ma(r),bp(r,s,!0);break;case"textarea":ma(r),Fp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=My(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[sn]=e,t[Eo]=r,av(t,e,!1,!1),e.stateNode=t;e:{switch(o=qc(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<$s.length;i++)_e($s[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":Lp(t,r),i=jc(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Mp(t,r),i=$c(t,r),_e("invalid",t);break;default:i=r}Wc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?jy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Fy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&co(t,u):typeof u=="number"&&co(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(uo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&id(t,s,u,o))}switch(n){case"input":ma(t),bp(t,r,!1);break;case"textarea":ma(t),Fp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Tr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Oi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Oi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)uv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Hr(To.current),Hr(an.current),Sa(e)){if(r=e.stateNode,n=e.memoizedProps,r[sn]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:Ia(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ia(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=e,e.stateNode=r}return rt(e),null;case 13:if(we(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Ct!==null&&e.mode&1&&!(e.flags&128))k_(),Ki(),e.flags|=98560,s=!1;else if(s=Sa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[sn]=e}else Ki(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),s=!1}else qt!==null&&(Ch(qt),qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Be===0&&(Be=3):jd())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return Qi(),_h(t,e),t===null&&_o(e.stateNode.containerInfo),rt(e),null;case 10:return Id(e.type._context),rt(e),null;case 17:return wt(e.type)&&pl(),rt(e),null;case 19:if(we(Ce),s=e.memoizedState,s===null)return rt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)bs(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wl(t),o!==null){for(e.flags|=128,bs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Oe()>Yi&&(e.flags|=128,r=!0,bs(s,!1),e.lanes=4194304)}else{if(!r)if(t=wl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return rt(e),null}else 2*Oe()-s.renderingStartTime>Yi&&n!==1073741824&&(e.flags|=128,r=!0,bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Oe(),e.sibling=null,n=Ce.current,ge(Ce,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return Ud(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function NT(t,e){switch(vd(e),e.tag){case 1:return wt(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qi(),we(Et),we(lt),Rd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kd(e),null;case 13:if(we(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Ce),null;case 4:return Qi(),null;case 10:return Id(e.type._context),null;case 22:case 23:return Ud(),null;case 24:return null;default:return null}}var ka=!1,ot=!1,DT=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ni(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function vh(t,e,n){try{n()}catch(r){De(t,e,r)}}var km=!1;function VT(t,e){if(nh=cl,t=p_(),yd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,y=null;t:for(;;){for(var C;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(C=m.firstChild)!==null;)y=m,m=C;for(;;){if(m===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(C=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=C}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rh={focusedElem:t,selectionRange:n},cl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var D=x.memoizedProps,M=x.memoizedState,S=e.stateNode,T=S.getSnapshotBeforeUpdate(e.elementType===e.type?D:Ht(e.type,D),M);S.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(V){De(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return x=km,km=!1,x}function eo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vh(e,n,s)}i=i.next}while(i!==r)}}function iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Eh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cv(t){var e=t.alternate;e!==null&&(t.alternate=null,cv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sn],delete e[Eo],delete e[oh],delete e[mT],delete e[gT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hv(t){return t.tag===5||t.tag===3||t.tag===4}function Rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fl));else if(r!==4&&(t=t.child,t!==null))for(wh(t,e,n),t=t.sibling;t!==null;)wh(t,e,n),t=t.sibling}function Th(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}var Qe=null,Wt=!1;function Kn(t,e,n){for(n=n.child;n!==null;)dv(t,e,n),n=n.sibling}function dv(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Jl,n)}catch{}switch(n.tag){case 5:ot||Ni(n,e);case 6:var r=Qe,i=Wt;Qe=null,Kn(t,e,n),Qe=r,Wt=i,Qe!==null&&(Wt?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(Wt?(t=Qe,n=n.stateNode,t.nodeType===8?oc(t.parentNode,n):t.nodeType===1&&oc(t,n),mo(t)):oc(Qe,n.stateNode));break;case 4:r=Qe,i=Wt,Qe=n.stateNode.containerInfo,Wt=!0,Kn(t,e,n),Qe=r,Wt=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vh(n,e,o),i=i.next}while(i!==r)}Kn(t,e,n);break;case 1:if(!ot&&(Ni(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Kn(t,e,n),ot=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function Pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DT),e.forEach(function(r){var i=BT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,Wt=!1;break e;case 3:Qe=l.stateNode.containerInfo,Wt=!0;break e;case 4:Qe=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(Qe===null)throw Error(b(160));dv(s,o,i),Qe=null,Wt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){De(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fv(e,t),e=e.sibling}function fv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($t(e,t),tn(t),r&4){try{eo(3,t,t.return),iu(3,t)}catch(D){De(t,t.return,D)}try{eo(5,t,t.return)}catch(D){De(t,t.return,D)}}break;case 1:$t(e,t),tn(t),r&512&&n!==null&&Ni(n,n.return);break;case 5:if($t(e,t),tn(t),r&512&&n!==null&&Ni(n,n.return),t.flags&32){var i=t.stateNode;try{co(i,"")}catch(D){De(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ly(i,s),qc(l,o);var h=qc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?jy(i,m):f==="dangerouslySetInnerHTML"?Fy(i,m):f==="children"?co(i,m):id(i,f,m,h)}switch(l){case"input":zc(i,s);break;case"textarea":by(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?Oi(i,!!s.multiple,C,!1):y!==!!s.multiple&&(s.defaultValue!=null?Oi(i,!!s.multiple,s.defaultValue,!0):Oi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Eo]=s}catch(D){De(t,t.return,D)}}break;case 6:if($t(e,t),tn(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){De(t,t.return,D)}}break;case 3:if($t(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(D){De(t,t.return,D)}break;case 4:$t(e,t),tn(t);break;case 13:$t(e,t),tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Md=Oe())),r&4&&Pm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(h=ot)||f,$t(e,t),ot=h):$t(e,t),tn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(m=H=f;H!==null;){switch(y=H,C=y.child,y.tag){case 0:case 11:case 14:case 15:eo(4,y,y.return);break;case 1:Ni(y,y.return);var x=y.stateNode;if(typeof x.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(D){De(r,n,D)}}break;case 5:Ni(y,y.return);break;case 22:if(y.memoizedState!==null){Nm(m);continue}}C!==null?(C.return=y,H=C):Nm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Uy("display",o))}catch(D){De(t,t.return,D)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(D){De(t,t.return,D)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:$t(e,t),tn(t),r&4&&Pm(t);break;case 21:break;default:$t(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hv(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(co(i,""),r.flags&=-33);var s=Rm(t);Th(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Rm(t);wh(t,l,o);break;default:throw Error(b(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function OT(t,e,n){H=t,pv(t)}function pv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ka;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ot;l=ka;var h=ot;if(ka=o,(ot=u)&&!h)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Dm(i):u!==null?(u.return=o,H=u):Dm(i);for(;s!==null;)H=s,pv(s),s=s.sibling;H=i,ka=l,ot=h}xm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):xm(t)}}function xm(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||iu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ht(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&mo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ot||e.flags&512&&Eh(e)}catch(y){De(e,e.return,y)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Nm(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Dm(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{iu(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var s=e.return;try{Eh(e)}catch(u){De(e,s,u)}break;case 5:var o=e.return;try{Eh(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var LT=Math.ceil,Sl=Mn.ReactCurrentDispatcher,Ld=Mn.ReactCurrentOwner,jt=Mn.ReactCurrentBatchConfig,ce=0,Ge=null,Me=null,Xe=0,At=0,Di=Nr(0),Be=0,Co=null,Zr=0,su=0,bd=0,to=null,_t=null,Md=0,Yi=1/0,_n=null,Al=!1,Ih=null,dr=null,Ra=!1,sr=null,Cl=0,no=0,Sh=null,qa=-1,Ka=0;function pt(){return ce&6?Oe():qa!==-1?qa:qa=Oe()}function fr(t){return t.mode&1?ce&2&&Xe!==0?Xe&-Xe:_T.transition!==null?(Ka===0&&(Ka=Xy()),Ka):(t=fe,t!==0||(t=window.event,t=t===void 0?16:s_(t.type)),t):1}function Jt(t,e,n,r){if(50<no)throw no=0,Sh=null,Error(b(185));Mo(t,n,r),(!(ce&2)||t!==Ge)&&(t===Ge&&(!(ce&2)&&(su|=n),Be===4&&Zn(t,Xe)),Tt(t,r),n===1&&ce===0&&!(e.mode&1)&&(Yi=Oe()+500,tu&&Dr()))}function Tt(t,e){var n=t.callbackNode;_1(t,e);var r=ul(t,t===Ge?Xe:0);if(r===0)n!==null&&zp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&zp(n),e===1)t.tag===0?yT(Vm.bind(null,t)):S_(Vm.bind(null,t)),fT(function(){!(ce&6)&&Dr()}),n=null;else{switch(Zy(r)){case 1:n=ud;break;case 4:n=Jy;break;case 16:n=ll;break;case 536870912:n=Yy;break;default:n=ll}n=Tv(n,mv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mv(t,e){if(qa=-1,Ka=0,ce&6)throw Error(b(327));var n=t.callbackNode;if(Ui()&&t.callbackNode!==n)return null;var r=ul(t,t===Ge?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=kl(t,r);else{e=r;var i=ce;ce|=2;var s=yv();(Ge!==t||Xe!==e)&&(_n=null,Yi=Oe()+500,qr(t,e));do try{FT();break}catch(l){gv(t,l)}while(!0);Td(),Sl.current=s,ce=i,Me!==null?e=0:(Ge=null,Xe=0,e=Be)}if(e!==0){if(e===2&&(i=Yc(t),i!==0&&(r=i,e=Ah(t,i))),e===1)throw n=Co,qr(t,0),Zn(t,r),Tt(t,Oe()),n;if(e===6)Zn(t,r);else{if(i=t.current.alternate,!(r&30)&&!bT(i)&&(e=kl(t,r),e===2&&(s=Yc(t),s!==0&&(r=s,e=Ah(t,s))),e===1))throw n=Co,qr(t,0),Zn(t,r),Tt(t,Oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:jr(t,_t,_n);break;case 3:if(Zn(t,r),(r&130023424)===r&&(e=Md+500-Oe(),10<e)){if(ul(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sh(jr.bind(null,t,_t,_n),e);break}jr(t,_t,_n);break;case 4:if(Zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*LT(r/1960))-r,10<r){t.timeoutHandle=sh(jr.bind(null,t,_t,_n),r);break}jr(t,_t,_n);break;case 5:jr(t,_t,_n);break;default:throw Error(b(329))}}}return Tt(t,Oe()),t.callbackNode===n?mv.bind(null,t):null}function Ah(t,e){var n=to;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=kl(t,e),t!==2&&(e=_t,_t=n,e!==null&&Ch(e)),t}function Ch(t){_t===null?_t=t:_t.push.apply(_t,t)}function bT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Xt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e){for(e&=~bd,e&=~su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function Vm(t){if(ce&6)throw Error(b(327));Ui();var e=ul(t,0);if(!(e&1))return Tt(t,Oe()),null;var n=kl(t,e);if(t.tag!==0&&n===2){var r=Yc(t);r!==0&&(e=r,n=Ah(t,r))}if(n===1)throw n=Co,qr(t,0),Zn(t,e),Tt(t,Oe()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,_t,_n),Tt(t,Oe()),null}function Fd(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(Yi=Oe()+500,tu&&Dr())}}function ei(t){sr!==null&&sr.tag===0&&!(ce&6)&&Ui();var e=ce;ce|=1;var n=jt.transition,r=fe;try{if(jt.transition=null,fe=1,t)return t()}finally{fe=r,jt.transition=n,ce=e,!(ce&6)&&Dr()}}function Ud(){At=Di.current,we(Di)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dT(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(vd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pl();break;case 3:Qi(),we(Et),we(lt),Rd();break;case 5:kd(r);break;case 4:Qi();break;case 13:we(Ce);break;case 19:we(Ce);break;case 10:Id(r.type._context);break;case 22:case 23:Ud()}n=n.return}if(Ge=t,Me=t=pr(t.current,null),Xe=At=e,Be=0,Co=null,bd=su=Zr=0,_t=to=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$r=null}return t}function gv(t,e){do{var n=Me;try{if(Td(),$a.current=Il,Tl){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Tl=!1}if(Xr=0,Ke=je=ke=null,Zs=!1,Io=0,Ld.current=null,n===null||n.return===null){Be=1,Co=e,Me=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Xe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var C=Em(o);if(C!==null){C.flags&=-257,wm(C,o,l,s,e),C.mode&1&&vm(s,h,e),e=C,u=h;var x=e.updateQueue;if(x===null){var D=new Set;D.add(u),e.updateQueue=D}else x.add(u);break e}else{if(!(e&1)){vm(s,h,e),jd();break e}u=Error(b(426))}}else if(Ie&&l.mode&1){var M=Em(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),wm(M,o,l,s,e),Ed(Ji(u,l));break e}}s=u=Ji(u,l),Be!==4&&(Be=2),to===null?to=[s]:to.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=Z_(s,u,e);fm(s,S);break e;case 1:l=u;var T=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(dr===null||!dr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=ev(s,l,e);fm(s,V);break e}}s=s.return}while(s!==null)}vv(n)}catch(F){e=F,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function yv(){var t=Sl.current;return Sl.current=Il,t===null?Il:t}function jd(){(Be===0||Be===3||Be===2)&&(Be=4),Ge===null||!(Zr&268435455)&&!(su&268435455)||Zn(Ge,Xe)}function kl(t,e){var n=ce;ce|=2;var r=yv();(Ge!==t||Xe!==e)&&(_n=null,qr(t,e));do try{MT();break}catch(i){gv(t,i)}while(!0);if(Td(),ce=n,Sl.current=r,Me!==null)throw Error(b(261));return Ge=null,Xe=0,Be}function MT(){for(;Me!==null;)_v(Me)}function FT(){for(;Me!==null&&!u1();)_v(Me)}function _v(t){var e=wv(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?vv(t):Me=e,Ld.current=null}function vv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=NT(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,Me=null;return}}else if(n=xT(n,e,At),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Be===0&&(Be=5)}function jr(t,e,n){var r=fe,i=jt.transition;try{jt.transition=null,fe=1,UT(t,e,n,r)}finally{jt.transition=i,fe=r}return null}function UT(t,e,n,r){do Ui();while(sr!==null);if(ce&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(v1(t,s),t===Ge&&(Me=Ge=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ra||(Ra=!0,Tv(ll,function(){return Ui(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=fe;fe=1;var l=ce;ce|=4,Ld.current=null,VT(t,n),fv(n,t),sT(rh),cl=!!nh,rh=nh=null,t.current=n,OT(n),c1(),ce=l,fe=o,jt.transition=s}else t.current=n;if(Ra&&(Ra=!1,sr=t,Cl=i),s=t.pendingLanes,s===0&&(dr=null),f1(n.stateNode),Tt(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Al)throw Al=!1,t=Ih,Ih=null,t;return Cl&1&&t.tag!==0&&Ui(),s=t.pendingLanes,s&1?t===Sh?no++:(no=0,Sh=t):no=0,Dr(),null}function Ui(){if(sr!==null){var t=Zy(Cl),e=jt.transition,n=fe;try{if(jt.transition=null,fe=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,Cl=0,ce&6)throw Error(b(331));var i=ce;for(ce|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:eo(8,f,s)}var m=f.child;if(m!==null)m.return=f,H=m;else for(;H!==null;){f=H;var y=f.sibling,C=f.return;if(cv(f),f===h){H=null;break}if(y!==null){y.return=C,H=y;break}H=C}}}var x=s.alternate;if(x!==null){var D=x.child;if(D!==null){x.child=null;do{var M=D.sibling;D.sibling=null,D=M}while(D!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:eo(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,H=S;break e}H=s.return}}var T=t.current;for(H=T;H!==null;){o=H;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,H=A;else e:for(o=T;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:iu(9,l)}}catch(F){De(l,l.return,F)}if(l===o){H=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,H=V;break e}H=l.return}}if(ce=i,Dr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Jl,t)}catch{}r=!0}return r}finally{fe=n,jt.transition=e}}return!1}function Om(t,e,n){e=Ji(n,e),e=Z_(t,e,1),t=hr(t,e,1),e=pt(),t!==null&&(Mo(t,1,e),Tt(t,e))}function De(t,e,n){if(t.tag===3)Om(t,t,n);else for(;e!==null;){if(e.tag===3){Om(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){t=Ji(n,t),t=ev(e,t,1),e=hr(e,t,1),t=pt(),e!==null&&(Mo(e,1,t),Tt(e,t));break}}e=e.return}}function jT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=pt(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(Xe&n)===n&&(Be===4||Be===3&&(Xe&130023424)===Xe&&500>Oe()-Md?qr(t,0):bd|=n),Tt(t,e)}function Ev(t,e){e===0&&(t.mode&1?(e=_a,_a<<=1,!(_a&130023424)&&(_a=4194304)):e=1);var n=pt();t=Pn(t,e),t!==null&&(Mo(t,e,n),Tt(t,n))}function zT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ev(t,n)}function BT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),Ev(t,n)}var wv;wv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,PT(t,e,n);vt=!!(t.flags&131072)}else vt=!1,Ie&&e.flags&1048576&&A_(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Wa(t,e),t=e.pendingProps;var i=qi(e,lt.current);Fi(e,n),i=xd(null,e,r,t,i,n);var s=Nd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,ml(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ad(e),i.updater=ru,e.stateNode=i,i._reactInternals=e,dh(e,r,t,n),e=mh(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&_d(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Wa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=HT(r),t=Ht(r,t),i){case 0:e=ph(null,e,r,t,n);break e;case 1:e=Sm(null,e,r,t,n);break e;case 11:e=Tm(null,e,r,t,n);break e;case 14:e=Im(null,e,r,Ht(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),ph(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Sm(t,e,r,i,n);case 3:e:{if(iv(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,N_(t,e),El(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ji(Error(b(423)),e),e=Am(t,e,r,n,i);break e}else if(r!==i){i=Ji(Error(b(424)),e),e=Am(t,e,r,n,i);break e}else for(Ct=cr(e.stateNode.containerInfo.firstChild),kt=e,Ie=!0,qt=null,n=P_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ki(),r===i){e=xn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return D_(e),t===null&&uh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ih(r,i)?o=null:s!==null&&ih(r,s)&&(e.flags|=32),rv(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&uh(e),null;case 13:return sv(t,e,n);case 4:return Cd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gi(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Tm(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(_l,r._currentValue),r._currentValue=o,s!==null)if(Xt(s.value,o)){if(s.children===i.children&&!Et.current){e=xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Sn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ch(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ch(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fi(e,n),i=zt(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=Ht(r,e.pendingProps),i=Ht(r.type,i),Im(t,e,r,i,n);case 15:return tv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Wa(t,e),e.tag=1,wt(r)?(t=!0,ml(e)):t=!1,Fi(e,n),X_(e,r,i),dh(e,r,i,n),mh(null,e,r,!0,t,n);case 19:return ov(t,e,n);case 22:return nv(t,e,n)}throw Error(b(156,e.tag))};function Tv(t,e){return Qy(t,e)}function $T(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new $T(t,e,n,r)}function zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HT(t){if(typeof t=="function")return zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===od)return 11;if(t===ad)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ga(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ti:return Kr(n.children,i,s,e);case sd:o=8,i|=8;break;case bc:return t=Ut(12,n,e,i|2),t.elementType=bc,t.lanes=s,t;case Mc:return t=Ut(13,n,e,i),t.elementType=Mc,t.lanes=s,t;case Fc:return t=Ut(19,n,e,i),t.elementType=Fc,t.lanes=s,t;case Dy:return ou(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xy:o=10;break e;case Ny:o=9;break e;case od:o=11;break e;case ad:o=14;break e;case Jn:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Kr(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function ou(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=Dy,t.lanes=n,t.stateNode={isHidden:!1},t}function pc(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function mc(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qu(0),this.expirationTimes=Qu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bd(t,e,n,r,i,s,o,l,u){return t=new WT(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ad(s),t}function qT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Iv(t){if(!t)return Ir;t=t._reactInternals;e:{if(li(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(wt(n))return I_(t,n,e)}return e}function Sv(t,e,n,r,i,s,o,l,u){return t=Bd(n,r,!0,t,i,s,o,l,u),t.context=Iv(null),n=t.current,r=pt(),i=fr(n),s=Sn(r,i),s.callback=e??null,hr(n,s,i),t.current.lanes=i,Mo(t,i,r),Tt(t,r),t}function au(t,e,n,r){var i=e.current,s=pt(),o=fr(i);return n=Iv(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hr(i,e,o),t!==null&&(Jt(t,i,o,s),Ba(t,i,o)),o}function Rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $d(t,e){Lm(t,e),(t=t.alternate)&&Lm(t,e)}function KT(){return null}var Av=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hd(t){this._internalRoot=t}lu.prototype.render=Hd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));au(t,e,null,null)};lu.prototype.unmount=Hd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ei(function(){au(null,t,null,null)}),e[Rn]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=n_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xn.length&&e!==0&&e<Xn[n].priority;n++);Xn.splice(n,0,t),n===0&&i_(t)}};function Wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bm(){}function GT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Rl(o);s.call(h)}}var o=Sv(e,r,t,0,null,!1,!1,"",bm);return t._reactRootContainer=o,t[Rn]=o.current,_o(t.nodeType===8?t.parentNode:t),ei(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Rl(u);l.call(h)}}var u=Bd(t,0,!1,null,null,!1,!1,"",bm);return t._reactRootContainer=u,t[Rn]=u.current,_o(t.nodeType===8?t.parentNode:t),ei(function(){au(e,u,n,r)}),u}function cu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Rl(o);l.call(u)}}au(e,o,t,i)}else o=GT(n,e,t,i,r);return Rl(o)}e_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bs(e.pendingLanes);n!==0&&(cd(e,n|1),Tt(e,Oe()),!(ce&6)&&(Yi=Oe()+500,Dr()))}break;case 13:ei(function(){var r=Pn(t,1);if(r!==null){var i=pt();Jt(r,t,1,i)}}),$d(t,1)}};hd=function(t){if(t.tag===13){var e=Pn(t,134217728);if(e!==null){var n=pt();Jt(e,t,134217728,n)}$d(t,134217728)}};t_=function(t){if(t.tag===13){var e=fr(t),n=Pn(t,e);if(n!==null){var r=pt();Jt(n,t,e,r)}$d(t,e)}};n_=function(){return fe};r_=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Gc=function(t,e,n){switch(e){case"input":if(zc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=eu(r);if(!i)throw Error(b(90));Oy(r),zc(r,i)}}}break;case"textarea":by(t,n);break;case"select":e=n.value,e!=null&&Oi(t,!!n.multiple,e,!1)}};$y=Fd;Hy=ei;var QT={usingClientEntryPoint:!1,Events:[Uo,Ci,eu,zy,By,Fd]},Ms={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JT={bundleType:Ms.bundleType,version:Ms.version,rendererPackageName:Ms.rendererPackageName,rendererConfig:Ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ky(t),t===null?null:t.stateNode},findFiberByHostInstance:Ms.findFiberByHostInstance||KT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{Jl=Pa.inject(JT),on=Pa}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QT;xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wd(e))throw Error(b(200));return qT(t,e,null,n)};xt.createRoot=function(t,e){if(!Wd(t))throw Error(b(299));var n=!1,r="",i=Av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bd(t,1,!1,null,null,n,!1,r,i),t[Rn]=e.current,_o(t.nodeType===8?t.parentNode:t),new Hd(e)};xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=Ky(e),t=t===null?null:t.stateNode,t};xt.flushSync=function(t){return ei(t)};xt.hydrate=function(t,e,n){if(!uu(e))throw Error(b(200));return cu(null,t,e,!0,n)};xt.hydrateRoot=function(t,e,n){if(!Wd(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Av;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Sv(e,null,t,1,n??null,i,!1,s,o),t[Rn]=e.current,_o(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new lu(e)};xt.render=function(t,e,n){if(!uu(e))throw Error(b(200));return cu(null,t,e,!1,n)};xt.unmountComponentAtNode=function(t){if(!uu(t))throw Error(b(40));return t._reactRootContainer?(ei(function(){cu(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};xt.unstable_batchedUpdates=Fd;xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!uu(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return cu(t,e,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function Cv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cv)}catch(t){console.error(t)}}Cv(),Cy.exports=xt;var YT=Cy.exports,Mm=YT;Oc.createRoot=Mm.createRoot,Oc.hydrateRoot=Mm.hydrateRoot;const XT=()=>{};var Fm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ZT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Rv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,C=h&63;u||(C=64,o||(y=64)),r.push(n[f],n[m],n[y],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new eI;const y=s<<2|l>>4;if(r.push(y),h!==64){const C=l<<4&240|h>>2;if(r.push(C),m!==64){const x=h<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tI=function(t){const e=kv(t);return Rv.encodeByteArray(e,!0)},Pl=function(t){return tI(t).replace(/\./g,"")},Pv=function(t){try{return Rv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=()=>nI().__FIREBASE_DEFAULTS__,iI=()=>{if(typeof process>"u"||typeof Fm>"u")return;const t=Fm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pv(t[1]);return e&&JSON.parse(e)},hu=()=>{try{return XT()||rI()||iI()||sI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xv=t=>{var e,n;return(n=(e=hu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},oI=t=>{const e=xv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Nv=()=>{var t;return(t=hu())==null?void 0:t.config},Dv=t=>{var e;return(e=hu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vv(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Pl(JSON.stringify(n)),Pl(JSON.stringify(o)),""].join(".")}const ro={};function uI(){const t={prod:[],emulator:[]};for(const e of Object.keys(ro))ro[e]?t.emulator.push(e):t.prod.push(e);return t}function cI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Um=!1;function Ov(t,e){if(typeof window>"u"||typeof document>"u"||!as(window.location.host)||ro[t]===e||ro[t]||Um)return;ro[t]=e;function n(y){return`__firebase__banner__${y}`}const r="__firebase__banner",s=uI().prod.length>0;function o(){const y=document.getElementById(r);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,C){y.setAttribute("width","24"),y.setAttribute("id",C),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Um=!0,o()},y}function f(y,C){y.setAttribute("id",C),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function m(){const y=cI(r),C=n("text"),x=document.getElementById(C)||document.createElement("span"),D=n("learnmore"),M=document.getElementById(D)||document.createElement("a"),S=n("preprendIcon"),T=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const A=y.element;l(A),f(M,D);const V=h();u(T,S),A.append(T,x,M,V),document.body.appendChild(A)}s?(x.innerText="Preview backend disconnected.",T.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(T.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function dI(){var e;const t=(e=hu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gI(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yI(){return!dI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _I(){try{return typeof indexedDB=="object"}catch{return!1}}function vI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EI,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zo.prototype.create)}}class zo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,l,r)}}function wI(t,e){return t.replace(TI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TI=/\{\$([^}]+)}/g;function II(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ti(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(jm(s)&&jm(o)){if(!ti(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function SI(t,e){const n=new AI(t,e);return n.subscribe.bind(n)}class AI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gc),i.error===void 0&&(i.error=gc),i.complete===void 0&&(i.complete=gc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){return t&&t._delegate?t._delegate:t}class ni{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new aI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PI(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RI(t){return t===zr?void 0:t}function PI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const NI={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},DI=oe.INFO,VI={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},OI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=VI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qd{constructor(e){this.name=e,this._logLevel=DI,this._logHandler=OI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const LI=(t,e)=>e.some(n=>t instanceof n);let zm,Bm;function bI(){return zm||(zm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MI(){return Bm||(Bm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lv=new WeakMap,kh=new WeakMap,bv=new WeakMap,yc=new WeakMap,Kd=new WeakMap;function FI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lv.set(n,t)}).catch(()=>{}),Kd.set(e,t),e}function UI(t){if(kh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});kh.set(t,e)}let Rh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jI(t){Rh=t(Rh)}function zI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_c(this),e,...n);return bv.set(r,e.sort?e.sort():[e]),mr(r)}:MI().includes(t)?function(...e){return t.apply(_c(this),e),mr(Lv.get(this))}:function(...e){return mr(t.apply(_c(this),e))}}function BI(t){return typeof t=="function"?zI(t):(t instanceof IDBTransaction&&UI(t),LI(t,bI())?new Proxy(t,Rh):t)}function mr(t){if(t instanceof IDBRequest)return FI(t);if(yc.has(t))return yc.get(t);const e=BI(t);return e!==t&&(yc.set(t,e),Kd.set(e,t)),e}const _c=t=>Kd.get(t);function $I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=mr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(mr(o.result),u.oldVersion,u.newVersion,mr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const HI=["get","getKey","getAll","getAllKeys","count"],WI=["put","add","delete","clear"],vc=new Map;function $m(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vc.get(e))return vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=WI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HI.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return vc.set(e,s),s}jI(t=>({...t,get:(e,n,r)=>$m(e,n)||t.get(e,n,r),has:(e,n)=>!!$m(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ph="@firebase/app",Hm="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new qd("@firebase/app"),GI="@firebase/app-compat",QI="@firebase/analytics-compat",JI="@firebase/analytics",YI="@firebase/app-check-compat",XI="@firebase/app-check",ZI="@firebase/auth",eS="@firebase/auth-compat",tS="@firebase/database",nS="@firebase/data-connect",rS="@firebase/database-compat",iS="@firebase/functions",sS="@firebase/functions-compat",oS="@firebase/installations",aS="@firebase/installations-compat",lS="@firebase/messaging",uS="@firebase/messaging-compat",cS="@firebase/performance",hS="@firebase/performance-compat",dS="@firebase/remote-config",fS="@firebase/remote-config-compat",pS="@firebase/storage",mS="@firebase/storage-compat",gS="@firebase/firestore",yS="@firebase/ai",_S="@firebase/firestore-compat",vS="firebase",ES="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="[DEFAULT]",wS={[Ph]:"fire-core",[GI]:"fire-core-compat",[JI]:"fire-analytics",[QI]:"fire-analytics-compat",[XI]:"fire-app-check",[YI]:"fire-app-check-compat",[ZI]:"fire-auth",[eS]:"fire-auth-compat",[tS]:"fire-rtdb",[nS]:"fire-data-connect",[rS]:"fire-rtdb-compat",[iS]:"fire-fn",[sS]:"fire-fn-compat",[oS]:"fire-iid",[aS]:"fire-iid-compat",[lS]:"fire-fcm",[uS]:"fire-fcm-compat",[cS]:"fire-perf",[hS]:"fire-perf-compat",[dS]:"fire-rc",[fS]:"fire-rc-compat",[pS]:"fire-gcs",[mS]:"fire-gcs-compat",[gS]:"fire-fst",[_S]:"fire-fst-compat",[yS]:"fire-vertex","fire-js":"fire-js",[vS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=new Map,TS=new Map,Nh=new Map;function Wm(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xi(t){const e=t.name;if(Nh.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;Nh.set(e,t);for(const n of xl.values())Wm(n,t);for(const n of TS.values())Wm(n,t);return!0}function Gd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gr=new zo("app","Firebase",IS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ni("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=ES;function Mv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:xh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw gr.create("bad-app-name",{appName:String(i)});if(n||(n=Nv()),!n)throw gr.create("no-options");const s=xl.get(i);if(s){if(ti(n,s.options)&&ti(r,s.config))return s;throw gr.create("duplicate-app",{appName:i})}const o=new xI(i);for(const u of Nh.values())o.addComponent(u);const l=new SS(n,r,o);return xl.set(i,l),l}function Fv(t=xh){const e=xl.get(t);if(!e&&t===xh&&Nv())return Mv();if(!e)throw gr.create("no-app",{appName:t});return e}function yr(t,e,n){let r=wS[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(o.join(" "));return}Xi(new ni(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="firebase-heartbeat-database",CS=1,ko="firebase-heartbeat-store";let Ec=null;function Uv(){return Ec||(Ec=$I(AS,CS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ko)}catch(n){console.warn(n)}}}}).catch(t=>{throw gr.create("idb-open",{originalErrorMessage:t.message})})),Ec}async function kS(t){try{const n=(await Uv()).transaction(ko),r=await n.objectStore(ko).get(jv(t));return await n.done,r}catch(e){if(e instanceof Fn)Nn.warn(e.message);else{const n=gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function qm(t,e){try{const r=(await Uv()).transaction(ko,"readwrite");await r.objectStore(ko).put(e,jv(t)),await r.done}catch(n){if(n instanceof Fn)Nn.warn(n.message);else{const r=gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function jv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=1024,PS=30;class xS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Km();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>PS){const o=VS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Km(),{heartbeatsToSend:r,unsentEntries:i}=NS(this._heartbeatsCache.heartbeats),s=Pl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Nn.warn(n),""}}}function Km(){return new Date().toISOString().substring(0,10)}function NS(t,e=RS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _I()?vI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Gm(t){return Pl(JSON.stringify({version:2,heartbeats:t})).length}function VS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t){Xi(new ni("platform-logger",e=>new qI(e),"PRIVATE")),Xi(new ni("heartbeat",e=>new xS(e),"PRIVATE")),yr(Ph,Hm,t),yr(Ph,Hm,"esm2020"),yr("fire-js","")}OS("");var LS="firebase",bS="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yr(LS,bS,"app");function zv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MS=zv,Bv=new zo("auth","Firebase",zv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=new qd("@firebase/auth");function FS(t,...e){Nl.logLevel<=oe.WARN&&Nl.warn(`Auth (${ls}): ${t}`,...e)}function Qa(t,...e){Nl.logLevel<=oe.ERROR&&Nl.error(`Auth (${ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,...e){throw Qd(t,...e)}function ln(t,...e){return Qd(t,...e)}function $v(t,e,n){const r={...MS(),[e]:n};return new zo("auth","Firebase",r).create(e,{appName:t.name})}function An(t){return $v(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bv.create(t,...e)}function Y(t,e,...n){if(!t)throw Qd(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qa(e),new Error(e)}function Vn(t,e){t||Tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function US(){return Qm()==="http:"||Qm()==="https:"}function Qm(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(US()||pI()||"connection"in navigator)?navigator.onLine:!0}function zS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=hI()||mI()}get(){return jS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],HS=new $o(3e4,6e4);function Ho(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function us(t,e,n,r,i={}){return Wv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Bo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return fI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&as(t.emulatorConfig.host)&&(h.credentials="include"),Hv.fetch()(await qv(t,t.config.apiHost,n,l),h)})}async function Wv(t,e,n){t._canInitEmulator=!1;const r={...BS,...e};try{const i=new WS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw xa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw xa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw xa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw $v(t,f,h);Dn(t,f)}}catch(i){if(i instanceof Fn)throw i;Dn(t,"network-request-failed",{message:String(i)})}}async function Yd(t,e,n,r,i={}){const s=await us(t,e,n,r,i);return"mfaPendingCredential"in s&&Dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function qv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Jd(t.config,i):`${t.config.apiScheme}://${i}`;return $S.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class WS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),HS.get())})}}function xa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ln(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(t,e){return us(t,"POST","/v1/accounts:delete",e)}async function Dl(t,e){return us(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KS(t,e=!1){const n=Pt(t),r=await n.getIdToken(e),i=Xd(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:io(wc(i.auth_time)),issuedAtTime:io(wc(i.iat)),expirationTime:io(wc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wc(t){return Number(t)*1e3}function Xd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pv(n);return i?JSON.parse(i):(Qa("Failed to decode base64 JWT payload"),null)}catch(i){return Qa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Jm(t){const e=Xd(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&GS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=io(this.lastLoginAt),this.creationTime=io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Ro(t,Dl(e,{idToken:n}));Y(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?Kv(i.providerUserInfo):[],o=YS(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Vh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function JS(t){const e=Pt(t);await Vl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Kv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(t,e){const n=await Wv(t,{},async()=>{const r=Bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await qv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&as(t.emulatorConfig.host)&&(u.credentials="include"),Hv.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZS(t,e){return us(t,"POST","/v2/accounts:revokeToken",Ho(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Jm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await XS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ji;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new QS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KS(this,e)}reload(){return JS(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await Ro(this,qS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:y,isAnonymous:C,providerData:x,stsTokenManager:D}=n;Y(m&&D,e,"internal-error");const M=ji.fromJSON(this.name,D);Y(typeof m=="string",e,"internal-error"),Gn(r,e.name),Gn(i,e.name),Y(typeof y=="boolean",e,"internal-error"),Y(typeof C=="boolean",e,"internal-error"),Gn(s,e.name),Gn(o,e.name),Gn(l,e.name),Gn(u,e.name),Gn(h,e.name),Gn(f,e.name);const S=new Kt({uid:m,auth:e,email:i,emailVerified:y,displayName:r,isAnonymous:C,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:M,createdAt:h,lastLoginAt:f});return x&&Array.isArray(x)&&(S.providerData=x.map(T=>({...T}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new ji;i.updateFromServerResponse(n);const s=new Kt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Kv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ji;l.updateFromIdToken(r);const u=new Kt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Vh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=new Map;function In(t){Vn(t instanceof Function,"Expected a class definition");let e=Ym.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ym.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gv.type="NONE";const Xm=Gv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t,e,n){return`firebase:${t}:${e}:${n}`}class zi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ja(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ja("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Dl(this.auth,{idToken:e}).catch(()=>{});return n?Kt._fromGetAccountInfoResponse(this.auth,n,e):null}return Kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zi(In(Xm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||In(Xm);const o=Ja(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const y=await Dl(e,{idToken:f}).catch(()=>{});if(!y)break;m=await Kt._fromGetAccountInfoResponse(e,y,f)}else m=Kt._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new zi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new zi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(e0(e))return"Blackberry";if(t0(e))return"Webos";if(Jv(e))return"Safari";if((e.includes("chrome/")||Yv(e))&&!e.includes("edge/"))return"Chrome";if(Zv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qv(t=ut()){return/firefox\//i.test(t)}function Jv(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yv(t=ut()){return/crios\//i.test(t)}function Xv(t=ut()){return/iemobile/i.test(t)}function Zv(t=ut()){return/android/i.test(t)}function e0(t=ut()){return/blackberry/i.test(t)}function t0(t=ut()){return/webos/i.test(t)}function Zd(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eA(t=ut()){var e;return Zd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function tA(){return gI()&&document.documentMode===10}function n0(t=ut()){return Zd(t)||Zv(t)||t0(t)||e0(t)||/windows phone/i.test(t)||Xv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t,e=[]){let n;switch(t){case"Browser":n=Zm(ut());break;case"Worker":n=`${Zm(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(t,e={}){return us(t,"GET","/v2/passwordPolicy",Ho(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=6;class sA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??iA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eg(this),this.idTokenSubscription=new eg(this),this.beforeStateQueue=new nA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await zi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Dl(this,{idToken:e}),r=await Kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(An(this));const n=e?Pt(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rA(this),n=new sA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await zi.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=r0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&FS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Wo(t){return Pt(t)}class eg{constructor(e){this.auth=e,this.observer=null,this.addObserver=SI(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ef={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aA(t){ef=t}function lA(t){return ef.loadJS(t)}function uA(){return ef.gapiScript}function cA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(t,e){const n=Gd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ti(s,e??{}))return i;Dn(i,"already-initialized")}return n.initialize({options:e})}function dA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fA(t,e,n){const r=Wo(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=i0(e),{host:o,port:l}=pA(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(ti(h,r.config.emulator)&&ti(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,as(o)?(Vv(`${s}//${o}${u}`),Ov("Auth",!0)):mA()}function i0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pA(t){const e=i0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tg(o)}}}function tg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(t,e){return Yd(t,"POST","/v1/accounts:signInWithIdp",Ho(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="http://localhost";class ri extends s0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ri(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bi(e,n)}buildRequest(){const e={requestUri:gA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends o0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends qo{constructor(){super("facebook.com")}static credential(e){return ri._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ri._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends qo{constructor(){super("github.com")}static credential(e){return ri._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends qo{constructor(){super("twitter.com")}static credential(e,n){return ri._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e){return Yd(t,"POST","/v1/accounts:signUp",Ho(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kt._fromIdTokenResponse(e,r,i),o=ng(r);return new On({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ng(r);return new On({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ng(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A(t){var i;if(bt(t.app))return Promise.reject(An(t));const e=Wo(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new On({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await yA(e,{returnSecureToken:!0}),r=await On._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends Fn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ol.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ol(e,n,r,i)}}function a0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ol._fromErrorAndOperation(t,s,e,r):s})}async function vA(t,e,n=!1){const r=await Ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return On._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,e,n=!1){const{auth:r}=t;if(bt(r.app))return Promise.reject(An(r));const i="reauthenticate";try{const s=await Ro(t,a0(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=Xd(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),On._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Dn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wA(t,e,n=!1){if(bt(t.app))return Promise.reject(An(t));const r="signIn",i=await a0(t,r,e),s=await On._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e){return Yd(t,"POST","/v1/accounts:signInWithCustomToken",Ho(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(t,e){if(bt(t.app))return Promise.reject(An(t));const n=Wo(t),r=await TA(n,{token:e,returnSecureToken:!0}),i=await On._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function SA(t,e,n,r){return Pt(t).onIdTokenChanged(e,n,r)}function AA(t,e,n){return Pt(t).beforeAuthStateChanged(e,n)}function CA(t,e,n,r){return Pt(t).onAuthStateChanged(e,n,r)}const Ll="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ll,"1"),this.storage.removeItem(Ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=1e3,RA=10;class u0 extends l0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=n0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}u0.type="LOCAL";const PA=u0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0 extends l0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}c0.type="SESSION";const h0=c0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new du(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await xA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}du.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=tf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function DA(t){un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function VA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function LA(){return d0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="firebaseLocalStorageDb",bA=1,bl="firebaseLocalStorage",p0="fbase_key";class Ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fu(t,e){return t.transaction([bl],e?"readwrite":"readonly").objectStore(bl)}function MA(){const t=indexedDB.deleteDatabase(f0);return new Ko(t).toPromise()}function Oh(){const t=indexedDB.open(f0,bA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bl,{keyPath:p0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bl)?e(r):(r.close(),await MA(),e(await Oh()))})})}async function rg(t,e,n){const r=fu(t,!0).put({[p0]:e,value:n});return new Ko(r).toPromise()}async function FA(t,e){const n=fu(t,!1).get(e),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function ig(t,e){const n=fu(t,!0).delete(e);return new Ko(n).toPromise()}const UA=800,jA=3;class m0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return d0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=du._getInstance(LA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await VA(),!this.activeServiceWorker)return;this.sender=new NA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oh();return await rg(e,Ll,"1"),await ig(e,Ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>FA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ig(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fu(i,!1).getAll();return new Ko(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}m0.type="LOCAL";const zA=m0;new $o(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t,e){return e?In(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends s0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $A(t){return wA(t.auth,new nf(t),t.bypassAuthState)}function HA(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),EA(n,new nf(t),t.bypassAuthState)}async function WA(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),vA(n,new nf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $A;case"linkViaPopup":case"linkViaRedirect":return WA;case"reauthViaPopup":case"reauthViaRedirect":return HA;default:Dn(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=new $o(2e3,1e4);class Vi extends g0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vi.currentPopupAction&&Vi.currentPopupAction.cancel(),Vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qA.get())};e()}}Vi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="pendingRedirect",Ya=new Map;class GA extends g0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ya.get(this.auth._key());if(!e){try{const r=await QA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ya.set(this.auth._key(),e)}return this.bypassAuthState||Ya.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QA(t,e){const n=XA(e),r=YA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function JA(t,e){Ya.set(t._key(),e)}function YA(t){return In(t._redirectPersistence)}function XA(t){return Ja(KA,t.config.apiKey,t.name)}async function ZA(t,e,n=!1){if(bt(t.app))return Promise.reject(An(t));const r=Wo(t),i=BA(r,e),o=await new GA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=10*60*1e3;class tC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!y0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eC&&this.cachedEventUids.clear(),this.cachedEventUids.has(sg(e))}saveEventToCache(e){this.cachedEventUids.add(sg(e)),this.lastProcessedEventTime=Date.now()}}function sg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function y0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(t,e={}){return us(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sC=/^https?/;async function oC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rC(t);for(const n of e)try{if(aC(n))return}catch{}Dn(t,"unauthorized-domain")}function aC(t){const e=Dh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sC.test(n))return!1;if(iC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=new $o(3e4,6e4);function og(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uC(t){return new Promise((e,n)=>{var i,s,o;function r(){og(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{og(),n(ln(t,"network-request-failed"))},timeout:lC.get()})}if((s=(i=un().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=un().gapi)!=null&&o.load)r();else{const l=cA("iframefcb");return un()[l]=()=>{gapi.load?r():n(ln(t,"network-request-failed"))},lA(`${uA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Xa=null,e})}let Xa=null;function cC(t){return Xa=Xa||uC(t),Xa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=new $o(5e3,15e3),dC="__/auth/iframe",fC="emulator/auth/iframe",pC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gC(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jd(e,fC):`https://${t.config.authDomain}/${dC}`,r={apiKey:e.apiKey,appName:t.name,v:ls},i=mC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Bo(r).slice(1)}`}async function yC(t){const e=await cC(t),n=un().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:gC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),l=un().setTimeout(()=>{s(o)},hC.get());function u(){un().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vC=500,EC=600,wC="_blank",TC="http://localhost";class ag{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IC(t,e,n,r=vC,i=EC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={..._C,width:r.toString(),height:i.toString(),top:s,left:o},h=ut().toLowerCase();n&&(l=Yv(h)?wC:n),Qv(h)&&(e=e||TC,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[C,x])=>`${y}${C}=${x},`,"");if(eA(h)&&l!=="_self")return SC(e||"",l),new ag(null);const m=window.open(e||"",l,f);Y(m,t,"popup-blocked");try{m.focus()}catch{}return new ag(m)}function SC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC="__/auth/handler",CC="emulator/auth/handler",kC=encodeURIComponent("fac");async function lg(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:i};if(e instanceof o0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",II(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof qo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${kC}=${encodeURIComponent(u)}`:"";return`${RC(t)}?${Bo(l).slice(1)}${h}`}function RC({config:t}){return t.emulator?Jd(t,CC):`https://${t.authDomain}/${AC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="webStorageSupport";class PC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=h0,this._completeRedirectFn=ZA,this._overrideRedirectResult=JA}async _openPopup(e,n,r,i){var o;Vn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await lg(e,n,r,Dh(),i);return IC(e,s,tf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await lg(e,n,r,Dh(),i);return DA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yC(e),r=new tC(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tc,{type:Tc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Tc];s!==void 0&&n(!!s),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return n0()||Jv()||Zd()}}const xC=PC;var ug="@firebase/auth",cg="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VC(t){Xi(new ni("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:r0(t)},h=new oA(r,i,s,u);return dA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xi(new ni("auth-internal",e=>{const n=Wo(e.getProvider("auth").getImmediate());return(r=>new NC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yr(ug,cg,DC(t)),yr(ug,cg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC=5*60,LC=Dv("authIdTokenMaxAge")||OC;let hg=null;const bC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LC)return;const i=n==null?void 0:n.token;hg!==i&&(hg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function MC(t=Fv()){const e=Gd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hA(t,{popupRedirectResolver:xC,persistence:[zA,PA,h0]}),r=Dv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=bC(s.toString());AA(n,o,()=>o(n.currentUser)),SA(n,l=>o(l))}}const i=xv("auth");return i&&fA(n,`http://${i}`),n}function FC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}aA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ln("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",FC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VC("Browser");var dg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _r,_0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function w(){}w.prototype=g.prototype,E.F=g.prototype,E.prototype=new w,E.prototype.constructor=E,E.D=function(v,I,k){for(var _=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)_[xe-2]=arguments[xe];return g.prototype[I].apply(v,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,w){w||(w=0);const v=Array(16);if(typeof g=="string")for(var I=0;I<16;++I)v[I]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(I=0;I<16;++I)v[I]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=E.g[0],w=E.g[1],I=E.g[2];let k=E.g[3],_;_=g+(k^w&(I^k))+v[0]+3614090360&4294967295,g=w+(_<<7&4294967295|_>>>25),_=k+(I^g&(w^I))+v[1]+3905402710&4294967295,k=g+(_<<12&4294967295|_>>>20),_=I+(w^k&(g^w))+v[2]+606105819&4294967295,I=k+(_<<17&4294967295|_>>>15),_=w+(g^I&(k^g))+v[3]+3250441966&4294967295,w=I+(_<<22&4294967295|_>>>10),_=g+(k^w&(I^k))+v[4]+4118548399&4294967295,g=w+(_<<7&4294967295|_>>>25),_=k+(I^g&(w^I))+v[5]+1200080426&4294967295,k=g+(_<<12&4294967295|_>>>20),_=I+(w^k&(g^w))+v[6]+2821735955&4294967295,I=k+(_<<17&4294967295|_>>>15),_=w+(g^I&(k^g))+v[7]+4249261313&4294967295,w=I+(_<<22&4294967295|_>>>10),_=g+(k^w&(I^k))+v[8]+1770035416&4294967295,g=w+(_<<7&4294967295|_>>>25),_=k+(I^g&(w^I))+v[9]+2336552879&4294967295,k=g+(_<<12&4294967295|_>>>20),_=I+(w^k&(g^w))+v[10]+4294925233&4294967295,I=k+(_<<17&4294967295|_>>>15),_=w+(g^I&(k^g))+v[11]+2304563134&4294967295,w=I+(_<<22&4294967295|_>>>10),_=g+(k^w&(I^k))+v[12]+1804603682&4294967295,g=w+(_<<7&4294967295|_>>>25),_=k+(I^g&(w^I))+v[13]+4254626195&4294967295,k=g+(_<<12&4294967295|_>>>20),_=I+(w^k&(g^w))+v[14]+2792965006&4294967295,I=k+(_<<17&4294967295|_>>>15),_=w+(g^I&(k^g))+v[15]+1236535329&4294967295,w=I+(_<<22&4294967295|_>>>10),_=g+(I^k&(w^I))+v[1]+4129170786&4294967295,g=w+(_<<5&4294967295|_>>>27),_=k+(w^I&(g^w))+v[6]+3225465664&4294967295,k=g+(_<<9&4294967295|_>>>23),_=I+(g^w&(k^g))+v[11]+643717713&4294967295,I=k+(_<<14&4294967295|_>>>18),_=w+(k^g&(I^k))+v[0]+3921069994&4294967295,w=I+(_<<20&4294967295|_>>>12),_=g+(I^k&(w^I))+v[5]+3593408605&4294967295,g=w+(_<<5&4294967295|_>>>27),_=k+(w^I&(g^w))+v[10]+38016083&4294967295,k=g+(_<<9&4294967295|_>>>23),_=I+(g^w&(k^g))+v[15]+3634488961&4294967295,I=k+(_<<14&4294967295|_>>>18),_=w+(k^g&(I^k))+v[4]+3889429448&4294967295,w=I+(_<<20&4294967295|_>>>12),_=g+(I^k&(w^I))+v[9]+568446438&4294967295,g=w+(_<<5&4294967295|_>>>27),_=k+(w^I&(g^w))+v[14]+3275163606&4294967295,k=g+(_<<9&4294967295|_>>>23),_=I+(g^w&(k^g))+v[3]+4107603335&4294967295,I=k+(_<<14&4294967295|_>>>18),_=w+(k^g&(I^k))+v[8]+1163531501&4294967295,w=I+(_<<20&4294967295|_>>>12),_=g+(I^k&(w^I))+v[13]+2850285829&4294967295,g=w+(_<<5&4294967295|_>>>27),_=k+(w^I&(g^w))+v[2]+4243563512&4294967295,k=g+(_<<9&4294967295|_>>>23),_=I+(g^w&(k^g))+v[7]+1735328473&4294967295,I=k+(_<<14&4294967295|_>>>18),_=w+(k^g&(I^k))+v[12]+2368359562&4294967295,w=I+(_<<20&4294967295|_>>>12),_=g+(w^I^k)+v[5]+4294588738&4294967295,g=w+(_<<4&4294967295|_>>>28),_=k+(g^w^I)+v[8]+2272392833&4294967295,k=g+(_<<11&4294967295|_>>>21),_=I+(k^g^w)+v[11]+1839030562&4294967295,I=k+(_<<16&4294967295|_>>>16),_=w+(I^k^g)+v[14]+4259657740&4294967295,w=I+(_<<23&4294967295|_>>>9),_=g+(w^I^k)+v[1]+2763975236&4294967295,g=w+(_<<4&4294967295|_>>>28),_=k+(g^w^I)+v[4]+1272893353&4294967295,k=g+(_<<11&4294967295|_>>>21),_=I+(k^g^w)+v[7]+4139469664&4294967295,I=k+(_<<16&4294967295|_>>>16),_=w+(I^k^g)+v[10]+3200236656&4294967295,w=I+(_<<23&4294967295|_>>>9),_=g+(w^I^k)+v[13]+681279174&4294967295,g=w+(_<<4&4294967295|_>>>28),_=k+(g^w^I)+v[0]+3936430074&4294967295,k=g+(_<<11&4294967295|_>>>21),_=I+(k^g^w)+v[3]+3572445317&4294967295,I=k+(_<<16&4294967295|_>>>16),_=w+(I^k^g)+v[6]+76029189&4294967295,w=I+(_<<23&4294967295|_>>>9),_=g+(w^I^k)+v[9]+3654602809&4294967295,g=w+(_<<4&4294967295|_>>>28),_=k+(g^w^I)+v[12]+3873151461&4294967295,k=g+(_<<11&4294967295|_>>>21),_=I+(k^g^w)+v[15]+530742520&4294967295,I=k+(_<<16&4294967295|_>>>16),_=w+(I^k^g)+v[2]+3299628645&4294967295,w=I+(_<<23&4294967295|_>>>9),_=g+(I^(w|~k))+v[0]+4096336452&4294967295,g=w+(_<<6&4294967295|_>>>26),_=k+(w^(g|~I))+v[7]+1126891415&4294967295,k=g+(_<<10&4294967295|_>>>22),_=I+(g^(k|~w))+v[14]+2878612391&4294967295,I=k+(_<<15&4294967295|_>>>17),_=w+(k^(I|~g))+v[5]+4237533241&4294967295,w=I+(_<<21&4294967295|_>>>11),_=g+(I^(w|~k))+v[12]+1700485571&4294967295,g=w+(_<<6&4294967295|_>>>26),_=k+(w^(g|~I))+v[3]+2399980690&4294967295,k=g+(_<<10&4294967295|_>>>22),_=I+(g^(k|~w))+v[10]+4293915773&4294967295,I=k+(_<<15&4294967295|_>>>17),_=w+(k^(I|~g))+v[1]+2240044497&4294967295,w=I+(_<<21&4294967295|_>>>11),_=g+(I^(w|~k))+v[8]+1873313359&4294967295,g=w+(_<<6&4294967295|_>>>26),_=k+(w^(g|~I))+v[15]+4264355552&4294967295,k=g+(_<<10&4294967295|_>>>22),_=I+(g^(k|~w))+v[6]+2734768916&4294967295,I=k+(_<<15&4294967295|_>>>17),_=w+(k^(I|~g))+v[13]+1309151649&4294967295,w=I+(_<<21&4294967295|_>>>11),_=g+(I^(w|~k))+v[4]+4149444226&4294967295,g=w+(_<<6&4294967295|_>>>26),_=k+(w^(g|~I))+v[11]+3174756917&4294967295,k=g+(_<<10&4294967295|_>>>22),_=I+(g^(k|~w))+v[2]+718787259&4294967295,I=k+(_<<15&4294967295|_>>>17),_=w+(k^(I|~g))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+k&4294967295}r.prototype.v=function(E,g){g===void 0&&(g=E.length);const w=g-this.blockSize,v=this.C;let I=this.h,k=0;for(;k<g;){if(I==0)for(;k<=w;)i(this,E,k),k+=this.blockSize;if(typeof E=="string"){for(;k<g;)if(v[I++]=E.charCodeAt(k++),I==this.blockSize){i(this,v),I=0;break}}else for(;k<g;)if(v[I++]=E[k++],I==this.blockSize){i(this,v),I=0;break}}this.h=I,this.o+=g},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;g=this.o*8;for(var w=E.length-8;w<E.length;++w)E[w]=g&255,g/=256;for(this.v(E),E=Array(16),g=0,w=0;w<4;++w)for(let v=0;v<32;v+=8)E[g++]=this.g[w]>>>v&255;return E};function s(E,g){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=g(E)}function o(E,g){this.h=g;const w=[];let v=!0;for(let I=E.length-1;I>=0;I--){const k=E[I]|0;v&&k==g||(w[I]=k,v=!1)}this.g=w}var l={};function u(E){return-128<=E&&E<128?s(E,function(g){return new o([g|0],g<0?-1:0)}):new o([E|0],E<0?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return M(h(-E));const g=[];let w=1;for(let v=0;E>=w;v++)g[v]=E/w|0,w*=4294967296;return new o(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return M(f(E.substring(1),g));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(g,8));let v=m;for(let k=0;k<E.length;k+=8){var I=Math.min(8,E.length-k);const _=parseInt(E.substring(k,k+I),g);I<8?(I=h(Math.pow(g,I)),v=v.j(I).add(h(_))):(v=v.j(w),v=v.add(h(_)))}return v}var m=u(0),y=u(1),C=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-M(this).m();let E=0,g=1;for(let w=0;w<this.g.length;w++){const v=this.i(w);E+=(v>=0?v:4294967296+v)*g,g*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(x(this))return"0";if(D(this))return"-"+M(this).toString(E);const g=h(Math.pow(E,6));var w=this;let v="";for(;;){const I=V(w,g).g;w=S(w,I.j(g));let k=((w.g.length>0?w.g[0]:w.h)>>>0).toString(E);if(w=I,x(w))return k+v;for(;k.length<6;)k="0"+k;v=k+v}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function x(E){if(E.h!=0)return!1;for(let g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function D(E){return E.h==-1}t.l=function(E){return E=S(this,E),D(E)?-1:x(E)?0:1};function M(E){const g=E.g.length,w=[];for(let v=0;v<g;v++)w[v]=~E.g[v];return new o(w,~E.h).add(y)}t.abs=function(){return D(this)?M(this):this},t.add=function(E){const g=Math.max(this.g.length,E.g.length),w=[];let v=0;for(let I=0;I<=g;I++){let k=v+(this.i(I)&65535)+(E.i(I)&65535),_=(k>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);v=_>>>16,k&=65535,_&=65535,w[I]=_<<16|k}return new o(w,w[w.length-1]&-2147483648?-1:0)};function S(E,g){return E.add(M(g))}t.j=function(E){if(x(this)||x(E))return m;if(D(this))return D(E)?M(this).j(M(E)):M(M(this).j(E));if(D(E))return M(this.j(M(E)));if(this.l(C)<0&&E.l(C)<0)return h(this.m()*E.m());const g=this.g.length+E.g.length,w=[];for(var v=0;v<2*g;v++)w[v]=0;for(v=0;v<this.g.length;v++)for(let I=0;I<E.g.length;I++){const k=this.i(v)>>>16,_=this.i(v)&65535,xe=E.i(I)>>>16,It=E.i(I)&65535;w[2*v+2*I]+=_*It,T(w,2*v+2*I),w[2*v+2*I+1]+=k*It,T(w,2*v+2*I+1),w[2*v+2*I+1]+=_*xe,T(w,2*v+2*I+1),w[2*v+2*I+2]+=k*xe,T(w,2*v+2*I+2)}for(E=0;E<g;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=g;E<2*g;E++)w[E]=0;return new o(w,0)};function T(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function A(E,g){this.g=E,this.h=g}function V(E,g){if(x(g))throw Error("division by zero");if(x(E))return new A(m,m);if(D(E))return g=V(M(E),g),new A(M(g.g),M(g.h));if(D(g))return g=V(E,M(g)),new A(M(g.g),g.h);if(E.g.length>30){if(D(E)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var w=y,v=g;v.l(E)<=0;)w=F(w),v=F(v);var I=z(w,1),k=z(v,1);for(v=z(v,2),w=z(w,2);!x(v);){var _=k.add(v);_.l(E)<=0&&(I=I.add(w),k=_),v=z(v,1),w=z(w,1)}return g=S(E,I.j(g)),new A(I,g)}for(I=m;E.l(g)>=0;){for(w=Math.max(1,Math.floor(E.m()/g.m())),v=Math.ceil(Math.log(w)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),k=h(w),_=k.j(g);D(_)||_.l(E)>0;)w-=v,k=h(w),_=k.j(g);x(k)&&(k=y),I=I.add(k),E=S(E,_)}return new A(I,E)}t.B=function(E){return V(this,E).h},t.and=function(E){const g=Math.max(this.g.length,E.g.length),w=[];for(let v=0;v<g;v++)w[v]=this.i(v)&E.i(v);return new o(w,this.h&E.h)},t.or=function(E){const g=Math.max(this.g.length,E.g.length),w=[];for(let v=0;v<g;v++)w[v]=this.i(v)|E.i(v);return new o(w,this.h|E.h)},t.xor=function(E){const g=Math.max(this.g.length,E.g.length),w=[];for(let v=0;v<g;v++)w[v]=this.i(v)^E.i(v);return new o(w,this.h^E.h)};function F(E){const g=E.g.length+1,w=[];for(let v=0;v<g;v++)w[v]=E.i(v)<<1|E.i(v-1)>>>31;return new o(w,E.h)}function z(E,g){const w=g>>5;g%=32;const v=E.g.length-w,I=[];for(let k=0;k<v;k++)I[k]=g>0?E.i(k+w)>>>g|E.i(k+w+1)<<32-g:E.i(k+w);return new o(I,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,_0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,_r=o}).apply(typeof dg<"u"?dg:typeof self<"u"?self:typeof window<"u"?window:{});var Na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var v0,Hs,E0,Za,Lh,w0,T0,I0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Na=="object"&&Na];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var R=a[p];if(!(R in d))break e;d=d[R]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var d=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&d.push([p,c[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function m(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(p,R,P){for(var j=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)j[ne-2]=arguments[ne];return c.prototype[R].apply(p,j)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function C(a){const c=a.length;if(c>0){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function x(a,c){for(let p=1;p<arguments.length;p++){const R=arguments[p];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=a.length||0;const P=R.length||0;a.length=d+P;for(let j=0;j<P;j++)a[d+j]=R[j]}else a.push(R)}}class D{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(a){o.setTimeout(()=>{throw a},0)}function S(){var a=E;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class T{constructor(){this.h=this.g=null}add(c,d){const p=A.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var A=new D(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let F,z=!1,E=new T,g=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(w)}};function w(){for(var a;a=S();){try{a.h.call(a.g)}catch(d){M(d)}var c=A;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}z=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function _(a){return/^[\s\xa0]*$/.test(a)}function xe(a,c){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}m(xe,I),xe.prototype.init=function(a,c){const d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&xe.Z.h.call(this)},xe.prototype.h=function(){xe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var It="closure_listenable_"+(Math.random()*1e6|0),Un=0;function ct(a,c,d,p,R){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=R,this.key=++Un,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function ee(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function pe(a){const c={};for(const d in a)c[d]=a[d];return c}const Se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mn(a,c){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)a[d]=p[d];for(let P=0;P<Se.length;P++)d=Se[P],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function U(a){this.src=a,this.g={},this.h=0}U.prototype.add=function(a,c,d,p,R){const P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);const j=J(a,c,p,R);return j>-1?(c=a[j],d||(c.fa=!1)):(c=new ct(c,this.src,P,!!p,R),c.fa=d,a.push(c)),c};function te(a,c){const d=c.type;if(d in a.g){var p=a.g[d],R=Array.prototype.indexOf.call(p,c,void 0),P;(P=R>=0)&&Array.prototype.splice.call(p,R,1),P&&(B(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function J(a,c,d,p){for(let R=0;R<a.length;++R){const P=a[R];if(!P.da&&P.listener==c&&P.capture==!!d&&P.ha==p)return R}return-1}var W="closure_lm_"+(Math.random()*1e6|0),re={};function Ae(a,c,d,p,R){if(Array.isArray(c)){for(let P=0;P<c.length;P++)Ae(a,c[P],d,p,R);return null}return d=Of(d),a&&a[It]?a.J(c,d,l(p)?!!p.capture:!1,R):se(a,c,d,!1,p,R)}function se(a,c,d,p,R,P){if(!c)throw Error("Invalid event type");const j=l(R)?!!R.capture:!!R;let ne=yn(a);if(ne||(a[W]=ne=new U(a)),d=ne.add(c,d,p,j,P),d.proxy)return d;if(p=he(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)k||(R=j),R===void 0&&(R=!1),a.addEventListener(c.toString(),p,R);else if(a.attachEvent)a.attachEvent(gn(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function he(){function a(d){return c.call(a.src,a.listener,d)}const c=jn;return a}function Dt(a,c,d,p,R){if(Array.isArray(c))for(var P=0;P<c.length;P++)Dt(a,c[P],d,p,R);else p=l(p)?!!p.capture:!!p,d=Of(d),a&&a[It]?(a=a.i,P=String(c).toString(),P in a.g&&(c=a.g[P],d=J(c,d,p,R),d>-1&&(B(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[P],a.h--)))):a&&(a=yn(a))&&(c=a.g[c.toString()],a=-1,c&&(a=J(c,d,p,R)),(d=a>-1?c[a]:null)&&Vt(d))}function Vt(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[It])te(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(gn(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=yn(c))?(te(d,a),d.h==0&&(d.src=null,c[W]=null)):B(a)}}}function gn(a){return a in re?re[a]:re[a]="on"+a}function jn(a,c){if(a.da)a=!0;else{c=new xe(c,this);const d=a.listener,p=a.ha||a.src;a.fa&&Vt(a),a=d.call(p,c)}return a}function yn(a){return a=a[W],a instanceof U?a:null}var ea="__closure_events_fn_"+(Math.random()*1e9>>>0);function Of(a){return typeof a=="function"?a:(a[ea]||(a[ea]=function(c){return a.handleEvent(c)}),a[ea])}function tt(){v.call(this),this.i=new U(this),this.M=this,this.G=null}m(tt,v),tt.prototype[It]=!0,tt.prototype.removeEventListener=function(a,c,d,p){Dt(this,a,c,d,p)};function ht(a,c){var d,p=a.G;if(p)for(d=[];p;p=p.G)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new I(c,a);else if(c instanceof I)c.target=c.target||a;else{var R=c;c=new I(p,a),mn(c,R)}R=!0;let P,j;if(d)for(j=d.length-1;j>=0;j--)P=c.g=d[j],R=ta(P,p,!0,c)&&R;if(P=c.g=a,R=ta(P,p,!0,c)&&R,R=ta(P,p,!1,c)&&R,d)for(j=0;j<d.length;j++)P=c.g=d[j],R=ta(P,p,!1,c)&&R}tt.prototype.N=function(){if(tt.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let p=0;p<d.length;p++)B(d[p]);delete a.g[c],a.h--}}this.G=null},tt.prototype.J=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},tt.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function ta(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let R=!0;for(let P=0;P<c.length;++P){const j=c[P];if(j&&!j.da&&j.capture==d){const ne=j.listener,Ue=j.ha||j.src;j.fa&&te(a.i,j),R=ne.call(Ue,p)!==!1&&R}}return R&&!p.defaultPrevented}function XE(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function Lf(a){a.g=XE(()=>{a.g=null,a.i&&(a.i=!1,Lf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class ZE extends v{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Lf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ps(a){v.call(this),this.h=a,this.g={}}m(ps,v);var bf=[];function Mf(a){Q(a.g,function(c,d){this.g.hasOwnProperty(d)&&Vt(c)},a),a.g={}}ps.prototype.N=function(){ps.Z.N.call(this),Mf(this)},ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ku=o.JSON.stringify,ew=o.JSON.parse,tw=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ff(){}function Uf(){}var ms={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ru(){I.call(this,"d")}m(Ru,I);function Pu(){I.call(this,"c")}m(Pu,I);var Vr={},jf=null;function na(){return jf=jf||new tt}Vr.Ia="serverreachability";function zf(a){I.call(this,Vr.Ia,a)}m(zf,I);function gs(a){const c=na();ht(c,new zf(c))}Vr.STAT_EVENT="statevent";function Bf(a,c){I.call(this,Vr.STAT_EVENT,a),this.stat=c}m(Bf,I);function dt(a){const c=na();ht(c,new Bf(c,a))}Vr.Ja="timingevent";function $f(a,c){I.call(this,Vr.Ja,a),this.size=c}m($f,I);function ys(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function _s(){this.g=!0}_s.prototype.ua=function(){this.g=!1};function nw(a,c,d,p,R,P){a.info(function(){if(a.g)if(P){var j="",ne=P.split("&");for(let me=0;me<ne.length;me++){var Ue=ne[me].split("=");if(Ue.length>1){const We=Ue[0];Ue=Ue[1];const en=We.split("_");j=en.length>=2&&en[1]=="type"?j+(We+"="+Ue+"&"):j+(We+"=redacted&")}}}else j=null;else j=P;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+d+`
`+j})}function rw(a,c,d,p,R,P,j){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+d+`
`+P+" "+j})}function fi(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+sw(a,d)+(p?" "+p:"")})}function iw(a,c){a.info(function(){return"TIMEOUT: "+c})}_s.prototype.info=function(){};function sw(a,c){if(!a.g)return c;if(!c)return null;try{const P=JSON.parse(c);if(P){for(a=0;a<P.length;a++)if(Array.isArray(P[a])){var d=P[a];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var R=p[0];if(R!="noop"&&R!="stop"&&R!="close")for(let j=1;j<p.length;j++)p[j]=""}}}}return ku(P)}catch{return c}}var ra={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Hf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Wf;function xu(){}m(xu,Ff),xu.prototype.g=function(){return new XMLHttpRequest},Wf=new xu;function vs(a){return encodeURIComponent(String(a))}function ow(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function zn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.S=p||1,this.V=new ps(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new qf}function qf(){this.i=null,this.g="",this.h=!1}var Kf={},Nu={};function Du(a,c,d){a.M=1,a.A=sa(Zt(c)),a.u=d,a.R=!0,Gf(a,null)}function Gf(a,c){a.F=Date.now(),ia(a),a.B=Zt(a.A);var d=a.B,p=a.S;Array.isArray(p)||(p=[String(p)]),ap(d.i,"t",p),a.C=0,d=a.j.L,a.h=new qf,a.g=Ap(a.j,d?c:null,!a.u),a.P>0&&(a.O=new ZE(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,p=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(bf[0]=R.toString()),R=bf);for(let P=0;P<R.length;P++){const j=Ae(d,R[P],p||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.J?pe(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),gs(),nw(a.i,a.v,a.B,a.l,a.S,a.u)}zn.prototype.ba=function(a){a=a.target;const c=this.O;c&&Hn(a)==3?c.j():this.Y(a)},zn.prototype.Y=function(a){try{if(a==this.g)e:{const ne=Hn(this.g),Ue=this.g.ya(),me=this.g.ca();if(!(ne<3)&&(ne!=3||this.g&&(this.h.h||this.g.la()||pp(this.g)))){this.K||ne!=4||Ue==7||(Ue==8||me<=0?gs(3):gs(2)),Vu(this);var c=this.g.ca();this.X=c;var d=aw(this);if(this.o=c==200,rw(this.i,this.v,this.B,this.l,this.S,ne,c),this.o){if(this.U&&!this.L){t:{if(this.g){var p,R=this.g;if((p=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var P=p;break t}}P=null}if(a=P)fi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ou(this,a);else{this.o=!1,this.m=3,dt(12),Or(this),Es(this);break e}}if(this.R){a=!0;let We;for(;!this.K&&this.C<d.length;)if(We=lw(this,d),We==Nu){ne==4&&(this.m=4,dt(14),a=!1),fi(this.i,this.l,null,"[Incomplete Response]");break}else if(We==Kf){this.m=4,dt(15),fi(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else fi(this.i,this.l,We,null),Ou(this,We);if(Qf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ne!=4||d.length!=0||this.h.h||(this.m=1,dt(16),a=!1),this.o=this.o&&a,!a)fi(this.i,this.l,d,"[Invalid Chunked Response]"),Or(this),Es(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Bu(j),j.P=!0,dt(11))}}else fi(this.i,this.l,d,null),Ou(this,d);ne==4&&Or(this),this.o&&!this.K&&(ne==4?wp(this.j,this):(this.o=!1,ia(this)))}else Tw(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,dt(12)):(this.m=0,dt(13)),Or(this),Es(this)}}}catch{}finally{}};function aw(a){if(!Qf(a))return a.g.la();const c=pp(a.g);if(c==="")return"";let d="";const p=c.length,R=Hn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Or(a),Es(a),"";a.h.i=new o.TextDecoder}for(let P=0;P<p;P++)a.h.h=!0,d+=a.h.i.decode(c[P],{stream:!(R&&P==p-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function Qf(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function lw(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?Nu:(d=Number(c.substring(d,p)),isNaN(d)?Kf:(p+=1,p+d>c.length?Nu:(c=c.slice(p,p+d),a.C=p+d,c)))}zn.prototype.cancel=function(){this.K=!0,Or(this)};function ia(a){a.T=Date.now()+a.H,Jf(a,a.H)}function Jf(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ys(h(a.aa,a),c)}function Vu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}zn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(iw(this.i,this.B),this.M!=2&&(gs(),dt(17)),Or(this),this.m=2,Es(this)):Jf(this,this.T-a)};function Es(a){a.j.I==0||a.K||wp(a.j,a)}function Or(a){Vu(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Mf(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Ou(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Lu(d.h,a))){if(!a.L&&Lu(d.h,a)&&d.I==3){try{var p=d.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ca(d),la(d);else break e;zu(d),dt(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ys(h(d.Va,d),6e3));Zf(d.h)<=1&&d.ta&&(d.ta=void 0)}else br(d,11)}else if((a.L||d.g==a)&&ca(d),!_(c))for(R=d.Ba.g.parse(c),c=0;c<R.length;c++){let me=R[c];const We=me[0];if(!(We<=d.K))if(d.K=We,me=me[1],d.I==2)if(me[0]=="c"){d.M=me[1],d.ba=me[2];const en=me[3];en!=null&&(d.ka=en,d.j.info("VER="+d.ka));const Mr=me[4];Mr!=null&&(d.za=Mr,d.j.info("SVER="+d.za));const Wn=me[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(p=1.5*Wn,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const qn=a.g;if(qn){const da=qn.g?qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(da){var P=p.h;P.g||da.indexOf("spdy")==-1&&da.indexOf("quic")==-1&&da.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(bu(P,P.h),P.h=null))}if(p.G){const $u=qn.g?qn.g.getResponseHeader("X-HTTP-Session-Id"):null;$u&&(p.wa=$u,ye(p.J,p.G,$u))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var j=a;if(p.na=Sp(p,p.L?p.ba:null,p.W),j.L){ep(p.h,j);var ne=j,Ue=p.O;Ue&&(ne.H=Ue),ne.D&&(Vu(ne),ia(ne)),p.g=j}else vp(p);d.i.length>0&&ua(d)}else me[0]!="stop"&&me[0]!="close"||br(d,7);else d.I==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?br(d,7):ju(d):me[0]!="noop"&&d.l&&d.l.qa(me),d.A=0)}}gs(4)}catch{}}var uw=class{constructor(a,c){this.g=a,this.map=c}};function Yf(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Xf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zf(a){return a.h?1:a.g?a.g.size:0}function Lu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function bu(a,c){a.g?a.g.add(c):a.h=c}function ep(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Yf.prototype.cancel=function(){if(this.i=tp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function tp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return C(a.i)}var np=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cw(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const p=a[d].indexOf("=");let R,P=null;p>=0?(R=a[d].substring(0,p),P=a[d].substring(p+1)):R=a[d],c(R,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Bn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Bn?(this.l=a.l,ws(this,a.j),this.o=a.o,this.g=a.g,Ts(this,a.u),this.h=a.h,Mu(this,lp(a.i)),this.m=a.m):a&&(c=String(a).match(np))?(this.l=!1,ws(this,c[1]||"",!0),this.o=Is(c[2]||""),this.g=Is(c[3]||"",!0),Ts(this,c[4]),this.h=Is(c[5]||"",!0),Mu(this,c[6]||"",!0),this.m=Is(c[7]||"")):(this.l=!1,this.i=new As(null,this.l))}Bn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(Ss(c,rp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ss(c,rp,!0),"@"),a.push(vs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ss(d,d.charAt(0)=="/"?fw:dw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ss(d,mw)),a.join("")},Bn.prototype.resolve=function(a){const c=Zt(this);let d=!!a.j;d?ws(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var p=a.h;if(d)Ts(c,a.u);else if(d=!!a.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var R=c.h.lastIndexOf("/");R!=-1&&(p=c.h.slice(0,R+1)+p)}if(R=p,R==".."||R==".")p="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){p=R.lastIndexOf("/",0)==0,R=R.split("/");const P=[];for(let j=0;j<R.length;){const ne=R[j++];ne=="."?p&&j==R.length&&P.push(""):ne==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),p&&j==R.length&&P.push("")):(P.push(ne),p=!0)}p=P.join("/")}else p=R}return d?c.h=p:d=a.i.toString()!=="",d?Mu(c,lp(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Zt(a){return new Bn(a)}function ws(a,c,d){a.j=d?Is(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Ts(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Mu(a,c,d){c instanceof As?(a.i=c,gw(a.i,a.l)):(d||(c=Ss(c,pw)),a.i=new As(c,a.l))}function ye(a,c,d){a.i.set(c,d)}function sa(a){return ye(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Is(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ss(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,hw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function hw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var rp=/[#\/\?@]/g,dw=/[#\?:]/g,fw=/[#\?]/g,pw=/[#\?@]/g,mw=/#/g;function As(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Lr(a){a.g||(a.g=new Map,a.h=0,a.i&&cw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=As.prototype,t.add=function(a,c){Lr(this),this.i=null,a=pi(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function ip(a,c){Lr(a),c=pi(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function sp(a,c){return Lr(a),c=pi(a,c),a.g.has(c)}t.forEach=function(a,c){Lr(this),this.g.forEach(function(d,p){d.forEach(function(R){a.call(c,R,p,this)},this)},this)};function op(a,c){Lr(a);let d=[];if(typeof c=="string")sp(a,c)&&(d=d.concat(a.g.get(pi(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Lr(this),this.i=null,a=pi(this,a),sp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=op(this,a),a.length>0?String(a[0]):c):c};function ap(a,c,d){ip(a,c),d.length>0&&(a.i=null,a.g.set(pi(a,c),C(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var d=c[p];const R=vs(d);d=op(this,d);for(let P=0;P<d.length;P++){let j=R;d[P]!==""&&(j+="="+vs(d[P])),a.push(j)}}return this.i=a.join("&")};function lp(a){const c=new As;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function pi(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function gw(a,c){c&&!a.j&&(Lr(a),a.i=null,a.g.forEach(function(d,p){const R=p.toLowerCase();p!=R&&(ip(this,p),ap(this,R,d))},a)),a.j=c}function yw(a,c){const d=new _s;if(o.Image){const p=new Image;p.onload=f($n,d,"TestLoadImage: loaded",!0,c,p),p.onerror=f($n,d,"TestLoadImage: error",!1,c,p),p.onabort=f($n,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=f($n,d,"TestLoadImage: timeout",!1,c,p),o.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function _w(a,c){const d=new _s,p=new AbortController,R=setTimeout(()=>{p.abort(),$n(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(P=>{clearTimeout(R),P.ok?$n(d,"TestPingServer: ok",!0,c):$n(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),$n(d,"TestPingServer: error",!1,c)})}function $n(a,c,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function vw(){this.g=new tw}function Fu(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Fu,Ff),Fu.prototype.g=function(){return new oa(this.i,this.h)};function oa(a,c){tt.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(oa,tt),t=oa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,ks(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ks(this)),this.g&&(this.readyState=3,ks(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;up(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function up(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Cs(this):ks(this),this.readyState==3&&up(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Cs(this))},t.Na=function(a){this.g&&(this.response=a,Cs(this))},t.ga=function(){this.g&&Cs(this)};function Cs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ks(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ks(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function cp(a){let c="";return Q(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Uu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=cp(d),typeof a=="string"?d!=null&&vs(d):ye(a,c,d))}function Ne(a){tt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ne,tt);var Ew=/^https?$/i,ww=["POST","PUT"];t=Ne.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Wf.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(P){hp(this,P);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())d.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(ww,c,void 0)>=0)||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of d)this.g.setRequestHeader(P,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(P){hp(this,P)}};function hp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,dp(a),aa(a)}function dp(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ht(this,"complete"),ht(this,"abort"),aa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),aa(this,!0)),Ne.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?fp(this):this.Xa())},t.Xa=function(){fp(this)};function fp(a){if(a.h&&typeof s<"u"){if(a.v&&Hn(a)==4)setTimeout(a.Ca.bind(a),0);else if(ht(a,"readystatechange"),Hn(a)==4){a.h=!1;try{const P=a.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=P===0){let j=String(a.D).match(np)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),p=!Ew.test(j?j.toLowerCase():"")}d=p}if(d)ht(a,"complete"),ht(a,"success");else{a.o=6;try{var R=Hn(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",dp(a)}}finally{aa(a)}}}}function aa(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||ht(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Hn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Hn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),ew(c)}};function pp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Tw(a){const c={};a=(a.g&&Hn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(_(a[p]))continue;var d=ow(a[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=c[R]||[];c[R]=P,P.push(d)}ee(c,function(p){return p.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function mp(a){this.za=0,this.i=[],this.j=new _s,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Rs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Rs("baseRetryDelayMs",5e3,a),this.Za=Rs("retryDelaySeedMs",1e4,a),this.Ta=Rs("forwardChannelMaxRetries",2,a),this.va=Rs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Yf(a&&a.concurrentRequestLimit),this.Ba=new vw,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=mp.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,p){dt(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=Sp(this,null,this.W),ua(this)};function ju(a){if(gp(a),a.I==3){var c=a.V++,d=Zt(a.J);if(ye(d,"SID",a.M),ye(d,"RID",c),ye(d,"TYPE","terminate"),Ps(a,d),c=new zn(a,a.j,c),c.M=2,c.A=sa(Zt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Ap(c.j,null),c.g.ea(c.A)),c.F=Date.now(),ia(c)}Ip(a)}function la(a){a.g&&(Bu(a),a.g.cancel(),a.g=null)}function gp(a){la(a),a.v&&(o.clearTimeout(a.v),a.v=null),ca(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ua(a){if(!Xf(a.h)&&!a.m){a.m=!0;var c=a.Ea;F||g(),z||(F(),z=!0),E.add(c,a),a.D=0}}function Iw(a,c){return Zf(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ys(h(a.Ea,a,c),Tp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new zn(this,this.j,a);let P=this.o;if(this.U&&(P?(P=pe(P),mn(P,this.U)):P=this.U),this.u!==null||this.R||(R.J=P,P=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=_p(this,R,c),d=Zt(this.J),ye(d,"RID",a),ye(d,"CVER",22),this.G&&ye(d,"X-HTTP-Session-Id",this.G),Ps(this,d),P&&(this.R?c="headers="+vs(cp(P))+"&"+c:this.u&&Uu(d,this.u,P)),bu(this.h,R),this.Ra&&ye(d,"TYPE","init"),this.S?(ye(d,"$req",c),ye(d,"SID","null"),R.U=!0,Du(R,d,null)):Du(R,d,c),this.I=2}}else this.I==3&&(a?yp(this,a):this.i.length==0||Xf(this.h)||yp(this))};function yp(a,c){var d;c?d=c.l:d=a.V++;const p=Zt(a.J);ye(p,"SID",a.M),ye(p,"RID",d),ye(p,"AID",a.K),Ps(a,p),a.u&&a.o&&Uu(p,a.u,a.o),d=new zn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=_p(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),bu(a.h,d),Du(d,p,c)}function Ps(a,c){a.H&&Q(a.H,function(d,p){ye(c,p,d)}),a.l&&Q({},function(d,p){ye(c,p,d)})}function _p(a,c,d){d=Math.min(a.i.length,d);const p=a.l?h(a.l.Ka,a.l,a):null;e:{var R=a.i;let ne=-1;for(;;){const Ue=["count="+d];ne==-1?d>0?(ne=R[0].g,Ue.push("ofs="+ne)):ne=0:Ue.push("ofs="+ne);let me=!0;for(let We=0;We<d;We++){var P=R[We].g;const en=R[We].map;if(P-=ne,P<0)ne=Math.max(0,R[We].g-100),me=!1;else try{P="req"+P+"_"||"";try{var j=en instanceof Map?en:Object.entries(en);for(const[Mr,Wn]of j){let qn=Wn;l(Wn)&&(qn=ku(Wn)),Ue.push(P+Mr+"="+encodeURIComponent(qn))}}catch(Mr){throw Ue.push(P+"type="+encodeURIComponent("_badmap")),Mr}}catch{p&&p(en)}}if(me){j=Ue.join("&");break e}}j=void 0}return a=a.i.splice(0,d),c.G=a,j}function vp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;F||g(),z||(F(),z=!0),E.add(c,a),a.A=0}}function zu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ys(h(a.Da,a),Tp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Ep(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ys(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,dt(10),la(this),Ep(this))};function Bu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ep(a){a.g=new zn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Zt(a.na);ye(c,"RID","rpc"),ye(c,"SID",a.M),ye(c,"AID",a.K),ye(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&ye(c,"TO",a.ia),ye(c,"TYPE","xmlhttp"),Ps(a,c),a.u&&a.o&&Uu(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=sa(Zt(c)),d.u=null,d.R=!0,Gf(d,a)}t.Va=function(){this.C!=null&&(this.C=null,la(this),zu(this),dt(19))};function ca(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function wp(a,c){var d=null;if(a.g==c){ca(a),Bu(a),a.g=null;var p=2}else if(Lu(a.h,c))d=c.G,ep(a.h,c),p=1;else return;if(a.I!=0){if(c.o)if(p==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var R=a.D;p=na(),ht(p,new $f(p,d)),ua(a)}else vp(a);else if(R=c.m,R==3||R==0&&c.X>0||!(p==1&&Iw(a,c)||p==2&&zu(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),R){case 1:br(a,5);break;case 4:br(a,10);break;case 3:br(a,6);break;default:br(a,2)}}}function Tp(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function br(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),p=a.Ua;const R=!p;p=new Bn(p||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ws(p,"https"),sa(p),R?yw(p.toString(),d):_w(p.toString(),d)}else dt(2);a.I=0,a.l&&a.l.pa(c),Ip(a),gp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Ip(a){if(a.I=0,a.ja=[],a.l){const c=tp(a.h);(c.length!=0||a.i.length!=0)&&(x(a.ja,c),x(a.ja,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.oa()}}function Sp(a,c,d){var p=d instanceof Bn?Zt(d):new Bn(d);if(p.g!="")c&&(p.g=c+"."+p.g),Ts(p,p.u);else{var R=o.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;const P=new Bn(null);p&&ws(P,p),c&&(P.g=c),R&&Ts(P,R),d&&(P.h=d),p=P}return d=a.G,c=a.wa,d&&c&&ye(p,d,c),ye(p,"VER",a.ka),Ps(a,p),p}function Ap(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Ne(new Fu({ab:d})):new Ne(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cp(){}t=Cp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ha(){}ha.prototype.g=function(a,c){return new St(a,c)};function St(a,c){tt.call(this),this.g=new mp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!_(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new mi(this)}m(St,tt),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){ju(this.g)},St.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ku(a),a=d);c.i.push(new uw(c.Ya++,a)),c.I==3&&ua(c)},St.prototype.N=function(){this.g.l=null,delete this.j,ju(this.g),delete this.g,St.Z.N.call(this)};function kp(a){Ru.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}m(kp,Ru);function Rp(){Pu.call(this),this.status=1}m(Rp,Pu);function mi(a){this.g=a}m(mi,Cp),mi.prototype.ra=function(){ht(this.g,"a")},mi.prototype.qa=function(a){ht(this.g,new kp(a))},mi.prototype.pa=function(a){ht(this.g,new Rp)},mi.prototype.oa=function(){ht(this.g,"b")},ha.prototype.createWebChannel=ha.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,I0=function(){return new ha},T0=function(){return na()},w0=Vr,Lh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ra.NO_ERROR=0,ra.TIMEOUT=8,ra.HTTP_ERROR=6,Za=ra,Hf.COMPLETE="complete",E0=Hf,Uf.EventType=ms,ms.OPEN="a",ms.CLOSE="b",ms.ERROR="c",ms.MESSAGE="d",tt.prototype.listen=tt.prototype.J,Hs=Uf,Ne.prototype.listenOnce=Ne.prototype.K,Ne.prototype.getLastError=Ne.prototype.Ha,Ne.prototype.getLastErrorCode=Ne.prototype.ya,Ne.prototype.getStatus=Ne.prototype.ca,Ne.prototype.getResponseJson=Ne.prototype.La,Ne.prototype.getResponseText=Ne.prototype.la,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Fa,v0=Ne}).apply(typeof Na<"u"?Na:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let st=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs="12.10.0";function UC(t){cs=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new qd("@firebase/firestore");function yi(){return ii.logLevel}function $(t,...e){if(ii.logLevel<=oe.DEBUG){const n=e.map(rf);ii.debug(`Firestore (${cs}): ${t}`,...n)}}function Ln(t,...e){if(ii.logLevel<=oe.ERROR){const n=e.map(rf);ii.error(`Firestore (${cs}): ${t}`,...n)}}function si(t,...e){if(ii.logLevel<=oe.WARN){const n=e.map(rf);ii.warn(`Firestore (${cs}): ${t}`,...n)}}function rf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,S0(t,r,n)}function S0(t,e,n){let r=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ln(r),new Error(r)}function de(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||S0(e,i,r)}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class zC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BC{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string",31837,{l:r}),new A0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new st(e)}}class $C{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class HC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new $C(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){de(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new fg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new fg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=qC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function bh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Ic(i)===Ic(s)?ae(i,s):Ic(i)?1:-1}return ae(t.length,e.length)}const KC=55296,GC=57343;function Ic(t){const e=t.charCodeAt(0);return e>=KC&&e<=GC}function Zi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="__name__";class rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=rn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ae(e.length,n.length)}static compareSegments(e,n){const r=rn.isNumericId(e),i=rn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?rn.extractNumericId(e).compare(rn.extractNumericId(n)):bh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _r.fromString(e.substring(4,e.length-2))}}class ve extends rn{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const QC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends rn{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return QC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pg}static keyField(){return new Ye([pg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ve.fromString(e))}static fromName(e){return new K(ve.fromString(e).popFirst(5))}static empty(){return new K(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ve(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t,e,n){if(!n)throw new q(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JC(t,e,n,r){if(e===!0&&r===!0)throw new q(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mg(t){if(!K.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gg(t){if(K.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function k0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function of(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function Er(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=of(t);throw new q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Go(t,e){if(!k0(t))throw new q(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new q(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=-62135596800,_g=1e6;class Ee{static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*_g);return new Ee(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<yg)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_g}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Go(e,Ee._jsonSchema))return new Ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ee._jsonSchemaVersion="firestore/timestamp/1.0",Ee._jsonSchema={type:Fe("string",Ee._jsonSchemaVersion),seconds:Fe("number"),nanoseconds:Fe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new Ee(0,0))}static max(){return new X(new Ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=-1;function YC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Ee(n+1,0):new Ee(n,r));return new Sr(i,K.empty(),e)}function XC(t){return new Sr(t.readTime,t.key,Po)}class Sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sr(X.min(),K.empty(),Po)}static max(){return new Sr(X.max(),K.empty(),Po)}}function ZC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==ek)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function nk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ds(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}pu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=-1;function mu(t){return t==null}function Ml(t){return t===0&&1/t==-1/0}function rk(t){return typeof t=="number"&&Number.isInteger(t)&&!Ml(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="";function ik(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=vg(e)),e=sk(t.get(n),e);return vg(e)}function sk(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case R0:n+="";break;default:n+=s}}return n}function vg(t){return t+R0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function P0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Da(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Da(this.root,e,this.comparator,!1)}getReverseIterator(){return new Da(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Da(this.root,e,this.comparator,!0)}}class Da{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Je.RED,this.left=i??Je.EMPTY,this.right=s??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wg(this.data.getIterator())}getIteratorFrom(e){return new wg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class wg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new He(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new x0("Invalid base64 string: "+s):s}}(e);return new et(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const ok=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(de(!!t,39018),typeof t=="string"){let e=0;const n=ok.exec(t);if(de(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="server_timestamp",D0="__type__",V0="__previous_value__",O0="__local_write_time__";function lf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[D0])==null?void 0:r.stringValue)===N0}function gu(t){const e=t.mapValue.fields[V0];return lf(e)?gu(e):e}function xo(t){const e=Ar(t.mapValue.fields[O0].timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,n,r,i,s,o,l,u,h,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const Fl="(default)";class No{constructor(e,n){this.projectId=e,this.database=n||Fl}static empty(){return new No("","")}get isDefaultDatabase(){return this.database===Fl}isEqual(e){return e instanceof No&&e.projectId===this.projectId&&e.database===this.database}}function lk(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new No(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="__type__",uk="__max__",Va={mapValue:{}},b0="__vector__",Ul="value";function kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lf(t)?4:hk(t)?9007199254740991:ck(t)?10:11:G(28295,{value:t})}function fn(t,e){if(t===e)return!0;const n=kr(t);if(n!==kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xo(t).isEqual(xo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ar(i.timestampValue),l=Ar(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Cr(i.bytesValue).isEqual(Cr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),l=Ve(s.doubleValue);return o===l?Ml(o)===Ml(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Zi(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Eg(o)!==Eg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!fn(o[u],l[u])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function Do(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function es(t,e){if(t===e)return 0;const n=kr(t),r=kr(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ve(s.integerValue||s.doubleValue),u=Ve(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Tg(t.timestampValue,e.timestampValue);case 4:return Tg(xo(t),xo(e));case 5:return bh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Cr(s),u=Cr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ae(l[h],u[h]);if(f!==0)return f}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(Ve(s.latitude),Ve(o.latitude));return l!==0?l:ae(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ig(t.arrayValue,e.arrayValue);case 10:return function(s,o){var y,C,x,D;const l=s.fields||{},u=o.fields||{},h=(y=l[Ul])==null?void 0:y.arrayValue,f=(C=u[Ul])==null?void 0:C.arrayValue,m=ae(((x=h==null?void 0:h.values)==null?void 0:x.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return m!==0?m:Ig(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Va.mapValue&&o===Va.mapValue)return 0;if(s===Va.mapValue)return 1;if(o===Va.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=bh(u[m],f[m]);if(y!==0)return y;const C=es(l[u[m]],h[f[m]]);if(C!==0)return C}return ae(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G(23264,{he:n})}}function Tg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Ar(t),r=Ar(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Ig(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=es(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function ts(t){return Mh(t)}function Mh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Cr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Mh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Mh(n.fields[o])}`;return i+"}"}(t.mapValue):G(61005,{value:t})}function el(t){switch(kr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gu(t);return e?16+el(e):16;case 5:return 2*t.stringValue.length;case 6:return Cr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+el(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ui(r.fields,(s,o)=>{i+=s.length+el(o)}),i}(t.mapValue);default:throw G(13486,{value:t})}}function Fh(t){return!!t&&"integerValue"in t}function uf(t){return!!t&&"arrayValue"in t}function Sg(t){return!!t&&"nullValue"in t}function Ag(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tl(t){return!!t&&"mapValue"in t}function ck(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[L0])==null?void 0:r.stringValue)===b0}function so(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=so(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=so(t.arrayValue.values[n]);return e}return{...t}}function hk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===uk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!tl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=so(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=so(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());tl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];tl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(so(this.value))}}function M0(t){const e=[];return ui(t.fields,(n,r)=>{const i=new Ye([n]);if(tl(r)){const s=M0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new at(e,0,X.min(),X.min(),X.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new at(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new at(e,2,n,X.min(),X.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,X.min(),X.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n){this.position=e,this.inclusive=n}}function Cg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function kg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n="asc"){this.field=e,this.dir=n}}function dk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{}class ze extends F0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pk(e,n,r):n==="array-contains"?new yk(e,r):n==="in"?new _k(e,r):n==="not-in"?new vk(e,r):n==="array-contains-any"?new Ek(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mk(e,r):new gk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(es(n,this.value)):n!==null&&kr(this.value)===kr(n)&&this.matchesComparison(es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends F0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new pn(e,n)}matches(e){return U0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function U0(t){return t.op==="and"}function j0(t){return fk(t)&&U0(t)}function fk(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function Uh(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+ts(t.value);if(j0(t))return t.filters.map(e=>Uh(e)).join(",");{const e=t.filters.map(n=>Uh(n)).join(",");return`${t.op}(${e})`}}function z0(t,e){return t instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.field.isEqual(i.field)&&fn(r.value,i.value)}(t,e):t instanceof pn?function(r,i){return i instanceof pn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&z0(o,i.filters[l]),!0):!1}(t,e):void G(19439)}function B0(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${ts(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(B0).join(" ,")+"}"}(t):"Filter"}class pk extends ze{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class mk extends ze{constructor(e,n){super(e,"in",n),this.keys=$0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gk extends ze{constructor(e,n){super(e,"not-in",n),this.keys=$0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class yk extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uf(n)&&Do(n.arrayValue,this.value)}}class _k extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Do(this.value.arrayValue,n)}}class vk extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Do(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Do(this.value.arrayValue,n)}}class Ek extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Do(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Rg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new wk(t,e,n,r,i,s,o)}function cf(t){const e=Z(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Uh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),mu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ts(r)).join(",")),e.Te=n}return e.Te}function hf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!z0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kg(t.startAt,e.startAt)&&kg(t.endAt,e.endAt)}function jh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Tk(t,e,n,r,i,s,o,l){return new yu(t,e,n,r,i,s,o,l)}function df(t){return new yu(t)}function Pg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ik(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Sk(t){return t.collectionGroup!==null}function oo(t){const e=Z(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new He(Ye.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new zl(s,r))}),n.has(Ye.keyField().canonicalString())||e.Ie.push(new zl(Ye.keyField(),r))}return e.Ie}function cn(t){const e=Z(t);return e.Ee||(e.Ee=Ak(e,oo(t))),e.Ee}function Ak(t,e){if(t.limitType==="F")return Rg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new zl(i.field,s)});const n=t.endAt?new jl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new jl(t.startAt.position,t.startAt.inclusive):null;return Rg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zh(t,e,n){return new yu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _u(t,e){return hf(cn(t),cn(e))&&t.limitType===e.limitType}function H0(t){return`${cf(cn(t))}|lt:${t.limitType}`}function _i(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>B0(i)).join(", ")}]`),mu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ts(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ts(i)).join(",")),`Target(${r})`}(cn(t))}; limitType=${t.limitType})`}function vu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of oo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Cg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,oo(r),i)||r.endAt&&!function(o,l,u){const h=Cg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,oo(r),i))}(t,e)}function Ck(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function W0(t){return(e,n)=>{let r=!1;for(const i of oo(t)){const s=kk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function kk(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?es(u,h):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return P0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=new Pe(K.comparator);function bn(){return Rk}const q0=new Pe(K.comparator);function Ws(...t){let e=q0;for(const n of t)e=e.insert(n.key,n);return e}function K0(t){let e=q0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wr(){return ao()}function G0(){return ao()}function ao(){return new ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const Pk=new Pe(K.comparator),xk=new He(K.comparator);function le(...t){let e=xk;for(const n of t)e=e.add(n);return e}const Nk=new He(ae);function Dk(){return Nk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ml(e)?"-0":e}}function Q0(t){return{integerValue:""+t}}function Vk(t,e){return rk(e)?Q0(e):ff(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(){this._=void 0}}function Ok(t,e,n){return t instanceof Bl?function(i,s){const o={fields:{[D0]:{stringValue:N0},[O0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&lf(s)&&(s=gu(s)),s&&(o.fields[V0]=s),{mapValue:o}}(n,e):t instanceof Vo?Y0(t,e):t instanceof Oo?X0(t,e):function(i,s){const o=J0(i,s),l=xg(o)+xg(i.Ae);return Fh(o)&&Fh(i.Ae)?Q0(l):ff(i.serializer,l)}(t,e)}function Lk(t,e,n){return t instanceof Vo?Y0(t,e):t instanceof Oo?X0(t,e):n}function J0(t,e){return t instanceof $l?function(r){return Fh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Bl extends Eu{}class Vo extends Eu{constructor(e){super(),this.elements=e}}function Y0(t,e){const n=Z0(e);for(const r of t.elements)n.some(i=>fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Oo extends Eu{constructor(e){super(),this.elements=e}}function X0(t,e){let n=Z0(e);for(const r of t.elements)n=n.filter(i=>!fn(i,r));return{arrayValue:{values:n}}}class $l extends Eu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function xg(t){return Ve(t.integerValue||t.doubleValue)}function Z0(t){return uf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function bk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Vo&&i instanceof Vo||r instanceof Oo&&i instanceof Oo?Zi(r.elements,i.elements,fn):r instanceof $l&&i instanceof $l?fn(r.Ae,i.Ae):r instanceof Bl&&i instanceof Bl}(t.transform,e.transform)}class Mk{constructor(e,n){this.version=e,this.transformResults=n}}class Cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wu{}function eE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nE(t.key,Cn.none()):new Qo(t.key,t.data,Cn.none());{const n=t.data,r=Mt.empty();let i=new He(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hi(t.key,r,new Gt(i.toArray()),Cn.none())}}function Fk(t,e,n){t instanceof Qo?function(i,s,o){const l=i.value.clone(),u=Dg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof hi?function(i,s,o){if(!nl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Dg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(tE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function lo(t,e,n,r){return t instanceof Qo?function(s,o,l,u){if(!nl(s.precondition,o))return l;const h=s.value.clone(),f=Vg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof hi?function(s,o,l,u){if(!nl(s.precondition,o))return l;const h=Vg(s.fieldTransforms,u,o),f=o.data;return f.setAll(tE(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return nl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Uk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=J0(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function Ng(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zi(r,i,(s,o)=>bk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qo extends wu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hi extends wu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Dg(t,e,n){const r=new Map;de(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Lk(o,l,n[i]))}return r}function Vg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Ok(s,o,e))}return r}class nE extends wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jk extends wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Fk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=G0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=eE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Zi(this.mutations,e.mutations,(n,r)=>Ng(n,r))&&Zi(this.baseMutations,e.baseMutations,(n,r)=>Ng(n,r))}}class pf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Pk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new pf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,ue;function Hk(t){switch(t){case L.OK:return G(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function rE(t){if(t===void 0)return Ln("GRPC error has no .code"),L.UNKNOWN;switch(t){case be.OK:return L.OK;case be.CANCELLED:return L.CANCELLED;case be.UNKNOWN:return L.UNKNOWN;case be.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case be.INTERNAL:return L.INTERNAL;case be.UNAVAILABLE:return L.UNAVAILABLE;case be.UNAUTHENTICATED:return L.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case be.NOT_FOUND:return L.NOT_FOUND;case be.ALREADY_EXISTS:return L.ALREADY_EXISTS;case be.PERMISSION_DENIED:return L.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case be.ABORTED:return L.ABORTED;case be.OUT_OF_RANGE:return L.OUT_OF_RANGE;case be.UNIMPLEMENTED:return L.UNIMPLEMENTED;case be.DATA_LOSS:return L.DATA_LOSS;default:return G(39323,{code:t})}}(ue=be||(be={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=new _r([4294967295,4294967295],0);function Og(t){const e=Wk().encode(t),n=new _0;return n.update(e),new Uint8Array(n.digest())}function Lg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new _r([n,r],0),new _r([i,s],0)]}class mf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qs(`Invalid padding: ${n}`);if(r<0)throw new qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=_r.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(_r.fromNumber(r)));return i.compare(qk)===1&&(i=new _r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Og(e),[r,i]=Lg(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new mf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Og(e),[r,i]=Lg(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Jo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Tu(X.min(),i,new Pe(ae),bn(),le())}}class Jo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Jo(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=i}}class iE{constructor(e,n){this.targetId=e,this.Ce=n}}class sE{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class bg{constructor(){this.ve=0,this.Fe=Mg(),this.Me=et.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=le(),n=le(),r=le();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G(38017,{changeType:s})}}),new Jo(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Mg()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Kk{constructor(e){this.Ge=e,this.ze=new Map,this.je=bn(),this.He=Oa(),this.Je=Oa(),this.Ze=new Pe(ae)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(jh(s))if(r===0){const o=new K(s.path);this.et(n,o,at.newNoDocument(o,X.min()))}else de(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Cr(r).toUint8Array()}catch(u){if(u instanceof x0)return si("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new mf(o,i,s)}catch(u){return si(u instanceof qs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&jh(l.target)){const u=new K(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,at.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=le();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Tu(e,n,this.Ze,this.je,r);return this.je=bn(),this.He=Oa(),this.Je=Oa(),this.Ze=new Pe(ae),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new bg,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new He(ae),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new He(ae),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new bg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Oa(){return new Pe(K.comparator)}function Mg(){return new Pe(K.comparator)}const Gk={asc:"ASCENDING",desc:"DESCENDING"},Qk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jk={and:"AND",or:"OR"};class Yk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bh(t,e){return t.useProto3Json||mu(e)?e:{value:e}}function Hl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Xk(t,e){return Hl(t,e.toTimestamp())}function hn(t){return de(!!t,49232),X.fromTimestamp(function(n){const r=Ar(n);return new Ee(r.seconds,r.nanos)}(t))}function gf(t,e){return $h(t,e).canonicalString()}function $h(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function aE(t){const e=ve.fromString(t);return de(dE(e),10190,{key:e.toString()}),e}function Hh(t,e){return gf(t.databaseId,e.path)}function Sc(t,e){const n=aE(e);if(n.get(1)!==t.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(uE(n))}function lE(t,e){return gf(t.databaseId,e)}function Zk(t){const e=aE(t);return e.length===4?ve.emptyPath():uE(e)}function Wh(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uE(t){return de(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Fg(t,e,n){return{name:Hh(t,e),fields:n.value.mapValue.fields}}function eR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(de(f===void 0||typeof f=="string",58123),et.fromBase64String(f||"")):(de(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:rE(h.code);return new q(f,h.message||"")}(o);n=new sE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Sc(t,r.document.name),s=hn(r.document.updateTime),o=r.document.createTime?hn(r.document.createTime):X.min(),l=new Mt({mapValue:{fields:r.document.fields}}),u=at.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new rl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Sc(t,r.document),s=r.readTime?hn(r.readTime):X.min(),o=at.newNoDocument(i,s),l=r.removedTargetIds||[];n=new rl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Sc(t,r.document),s=r.removedTargetIds||[];n=new rl([],s,i,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new $k(i,s),l=r.targetId;n=new iE(l,o)}}return n}function tR(t,e){let n;if(e instanceof Qo)n={update:Fg(t,e.key,e.value)};else if(e instanceof nE)n={delete:Hh(t,e.key)};else if(e instanceof hi)n={update:Fg(t,e.key,e.data),updateMask:cR(e.fieldMask)};else{if(!(e instanceof jk))return G(16599,{dt:e.type});n={verify:Hh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Bl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Vo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof $l)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Xk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G(27497)}(t,e.precondition)),n}function nR(t,e){return t&&t.length>0?(de(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?hn(i.updateTime):hn(s);return o.isEqual(X.min())&&(o=hn(s)),new Mk(o,i.transformResults||[])}(n,e))):[]}function rR(t,e){return{documents:[lE(t,e.path)]}}function iR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=lE(t,i);const s=function(h){if(h.length!==0)return hE(pn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:vi(y.field),direction:aR(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Bh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function sR(t){let e=Zk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const y=cE(m);return y instanceof pn&&j0(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(x){return new zl(Ei(x.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,mu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,C=m.values||[];return new jl(C,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,C=m.values||[];return new jl(C,y)}(n.endAt)),Tk(e,i,o,s,l,"F",u,h)}function oR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function cE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ei(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ei(n.unaryFilter.field);return ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ei(n.unaryFilter.field);return ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ei(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Ei(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>cE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function aR(t){return Gk[t]}function lR(t){return Qk[t]}function uR(t){return Jk[t]}function vi(t){return{fieldPath:t.canonicalString()}}function Ei(t){return Ye.fromServerFormat(t.fieldPath)}function hE(t){return t instanceof ze?function(n){if(n.op==="=="){if(Ag(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NAN"}};if(Sg(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ag(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NAN"}};if(Sg(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vi(n.field),op:lR(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(i=>hE(i));return r.length===1?r[0]:{compositeFilter:{op:uR(n.op),filters:r}}}(t):G(54877,{filter:t})}function cR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function fE(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,r,i,s=X.min(),o=X.min(),l=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.yt=e}}function dR(t){const e=sR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(){this.Sn=new pR}addToCollectionParentIndex(e,n){return this.Sn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Sr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class pR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new He(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pE=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(pE,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ns(0)}static ar(){return new ns(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="LruGarbageCollector",mR=1048576;function zg([t,e],[n,r]){const i=ae(t,n);return i===0?ae(e,r):i}class gR{constructor(e){this.Pr=e,this.buffer=new He(zg),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();zg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class yR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){$(jg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ds(n)?$(jg,"Ignoring IndexedDB error during garbage collection: ",n):await hs(n)}await this.Ar(3e5)})}}class _R{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(pu.ce);const r=new gR(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Ug)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ug):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),yi()<=oe.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function vR(t,e){return new _R(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.changes=new ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&lo(r.mutation,i,Gt.empty(),Ee.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=Wr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ws();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=bn();const o=ao(),l=function(){return ao()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof hi)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),lo(f.mutation,h,f.mutation.getFieldMask(),Ee.now())):o.set(h.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new wR(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ao();let i=new Pe((o,l)=>o-l),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Gt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||le()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=G0();f.forEach(y=>{if(!s.has(y)){const C=eE(n.get(y),r.get(y));C!==null&&m.set(y,C),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return Ik(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Sk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Wr());let l=Po,u=s;return o.next(h=>O.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,le())).next(f=>({batchId:l,changes:K0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Ws();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ws();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(m,y){return new yu(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,at.newInvalidDocument(f)))});let l=Ws();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&lo(f.mutation,h,Gt.empty(),Ee.now()),vu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return O.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:hn(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:dR(i.bundledQuery),readTime:hn(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this.overlays=new Pe(K.comparator),this.Lr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Wr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Wr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Wr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return O.resolve(l)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Bk(n,r));let s=this.Lr.get(n);s===void 0&&(s=le(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.kr=new He(qe.Kr),this.qr=new He(qe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new qe(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new K(new ve([])),r=new qe(n,e),i=new qe(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new K(new ve([])),r=new qe(n,e),i=new qe(n,e+1);let s=le();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new qe(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return K.comparator(e.key,n.key)||ae(e.Hr,n.Hr)}static Ur(e,n){return ae(e.Hr,n.Hr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new He(qe.Kr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Jr=this.Jr.add(new qe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?af:this.Yn-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),i=new qe(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(ae);return n.forEach(i=>{const s=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),O.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new qe(new K(s),0);let l=new He(ae);return this.Jr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)},o),O.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return O.forEach(n.mutations,i=>{const s=new qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new qe(n,0),i=this.Jr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.ti=e,this.docs=function(){return new Pe(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():at.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=bn();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||ZC(XC(f),r)<=0||(i.has(f.key)||vu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G(9500)}ni(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new RR(this)}getSize(e){return O.resolve(this.size)}}class RR extends ER{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.persistence=e,this.ri=new ci(n=>cf(n),hf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.ii=0,this.si=new yf,this.targetCount=0,this.oi=ns._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),O.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ns(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.lr(n),O.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,n){this._i={},this.overlays={},this.ai=new pu(0),this.ui=!1,this.ui=!0,this.ci=new AR,this.referenceDelegate=e(this),this.li=new PR(this),this.indexManager=new fR,this.remoteDocumentCache=function(i){return new kR(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new hR(n),this.Pi=new IR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new CR(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new xR(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return O.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class xR extends tk{constructor(e){super(),this.currentSequenceNumber=e}}class _f{constructor(e){this.persistence=e,this.Ri=new yf,this.Ai=null}static Vi(e){return new _f(e)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.di,r=>{const i=K.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Wl{constructor(e,n){this.persistence=e,this.fi=new ci(r=>ik(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=vR(this,n)}static Vi(e,n){return new Wl(e,n)}Ti(){}Ii(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return O.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,X.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=el(e.data.value)),n}wr(e,n,r){return O.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new vf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return yI()?8:nk(ut())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new NR;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(yi()<=oe.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",_i(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),O.resolve()):(yi()<=oe.DEBUG&&$("QueryEngine","Query:",_i(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(yi()<=oe.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",_i(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):O.resolve())}gs(e,n){if(Pg(n))return O.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zh(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ss(n,h,o,u.readTime)?this.gs(e,zh(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,i){return Pg(n)||i.isEqual(X.min())?O.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ss(n,o,r,i)?O.resolve(null):(yi()<=oe.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_i(n)),this.Ds(e,o,n,YC(i,Po)).next(l=>l))})}bs(e,n){let r=new He(W0(e));return n.forEach((i,s)=>{vu(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return yi()<=oe.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",_i(n)),this.fs.getDocumentsMatchingQuery(e,n,Sr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="LocalStore",VR=3e8;class OR{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Pe(ae),this.Fs=new ci(s=>cf(s),hf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function LR(t,e,n,r){return new OR(t,e,n,r)}async function gE(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=le();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function bR(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,y=m.keys();let C=O.resolve();return y.forEach(x=>{C=C.next(()=>f.getEntry(u,x)).next(D=>{const M=h.docVersions.get(x);de(M!==null,48541),D.version.compareTo(M)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=le();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function yE(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function MR(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const y=i.get(m);if(!y)return;l.push(n.li.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,m)));let C=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?C=C.withResumeToken(et.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(f.resumeToken,r)),i=i.insert(m,C),function(D,M,S){return D.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=VR?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(y,C,f)&&l.push(n.li.updateTargetData(s,C))});let u=bn(),h=le();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(FR(s,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(X.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(m=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.vs=i,s))}function FR(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=bn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(Ef,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function UR(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=af),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jR(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function qh(t,e,n){const r=Z(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ds(o))throw o;$(Ef,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Bg(t,e,n){const r=Z(t);let i=X.min(),s=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=Z(u),y=m.Fs.get(f);return y!==void 0?O.resolve(m.vs.get(y)):m.li.getTargetData(h,f)}(r,o,cn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:le())).next(l=>(zR(r,Ck(e),l),{documents:l,ks:s})))}function zR(t,e,n){let r=t.Ms.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class $g{constructor(){this.activeTargetIds=Dk()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BR{constructor(){this.vo=new $g,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new $g,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="ConnectivityMonitor";class Wg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){$(Hg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){$(Hg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La=null;function Kh(){return La===null?La=function(){return 268435456+Math.round(2147483648*Math.random())}():La++,"0x"+La.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="RestConnection",HR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class WR{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Fl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Kh(),l=this.Qo(e,n.toUriEncodedString());$(Ac,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:h}=new URL(l),f=as(h);return this.zo(e,l,u,r,f).then(m=>($(Ac,`Received RPC '${e}' ${o}: `,m),m),m=>{throw si(Ac,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=HR[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection",Fs=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class $i extends WR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!$i.c_){const e=T0();Fs(e,w0.STAT_EVENT,n=>{n.stat===Lh.PROXY?$(it,"STAT_EVENT: detected buffering proxy"):n.stat===Lh.NOPROXY&&$(it,"STAT_EVENT: detected no buffering proxy")}),$i.c_=!0}}zo(e,n,r,i,s){const o=Kh();return new Promise((l,u)=>{const h=new v0;h.setWithCredentials(!0),h.listenOnce(E0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Za.NO_ERROR:const m=h.getResponseJson();$(it,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Za.TIMEOUT:$(it,`RPC '${e}' ${o} timed out`),u(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case Za.HTTP_ERROR:const y=h.getStatus();if($(it,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const x=C==null?void 0:C.error;if(x&&x.status&&x.message){const D=function(S){const T=S.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(T)>=0?T:L.UNKNOWN}(x.status);u(new q(D,x.message))}else u(new q(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new q(L.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{$(it,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);$(it,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=Kh(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");$(it,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);this.I_(f);let m=!1,y=!1;const C=new qR({Ho:x=>{y?$(it,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||($(it,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),$(it,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},Jo:()=>f.close()});return Fs(f,Hs.EventType.OPEN,()=>{y||($(it,`RPC '${e}' stream ${i} transport opened.`),C.i_())}),Fs(f,Hs.EventType.CLOSE,()=>{y||(y=!0,$(it,`RPC '${e}' stream ${i} transport closed`),C.o_(),this.E_(f))}),Fs(f,Hs.EventType.ERROR,x=>{y||(y=!0,si(it,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),C.o_(new q(L.UNAVAILABLE,"The operation could not be completed")))}),Fs(f,Hs.EventType.MESSAGE,x=>{var D;if(!y){const M=x.data[0];de(!!M,16349);const S=M,T=(S==null?void 0:S.error)||((D=S[0])==null?void 0:D.error);if(T){$(it,`RPC '${e}' stream ${i} received error:`,T);const A=T.status;let V=function(E){const g=be[E];if(g!==void 0)return rE(g)}(A),F=T.message;A==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&si(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=L.INTERNAL,F="Unknown error status: "+A+" with message "+T.message),y=!0,C.o_(new q(V,F)),f.close()}else $(it,`RPC '${e}' stream ${i} received:`,M),C.__(M)}}),$i.u_(),setTimeout(()=>{C.s_()},0),C}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return I0()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){return new $i(t)}function Cc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t){return new Yk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$i.c_=!1;class _E{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="PersistentStream";class vE{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _E(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(qg,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():($(qg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GR extends vE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=eR(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?hn(o.readTime):X.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Wh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=jh(u)?{documents:rR(s,u)}:{query:iR(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=oE(s,o.resumeToken);const h=Bh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Hl(s,o.snapshotVersion.toTimestamp());const h=Bh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=oR(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Wh(this.serializer),n.removeTarget=e,this.K_(n)}}class QR extends vE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=nR(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Wh(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>tR(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{}class YR extends JR{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,$h(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(L.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,$h(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function XR(t,e,n,r){return new YR(t,e,n,r)}class ZR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ln(n),this.aa=!1):$("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="RemoteStore";class eP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{di(this)&&($(oi,"Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.Ea.add(4),await Yo(h),h.Va.set("Unknown"),h.Ea.delete(4),await Su(h)}(this))})}),this.Va=new ZR(r,i)}}async function Su(t){if(di(t))for(const e of t.Ra)await e(!0)}async function Yo(t){for(const e of t.Ra)await e(!1)}function EE(t,e){const n=Z(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Sf(n)?If(n):fs(n).O_()&&Tf(n,e))}function wf(t,e){const n=Z(t),r=fs(n);n.Ia.delete(e),r.O_()&&wE(n,e),n.Ia.size===0&&(r.O_()?r.L_():di(n)&&n.Va.set("Unknown"))}function Tf(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fs(t).Z_(e)}function wE(t,e){t.da.$e(e),fs(t).X_(e)}function If(t){t.da=new Kk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),fs(t).start(),t.Va.ua()}function Sf(t){return di(t)&&!fs(t).x_()&&t.Ia.size>0}function di(t){return Z(t).Ea.size===0}function TE(t){t.da=void 0}async function tP(t){t.Va.set("Online")}async function nP(t){t.Ia.forEach((e,n)=>{Tf(t,e)})}async function rP(t,e){TE(t),Sf(t)?(t.Va.ha(e),If(t)):t.Va.set("Unknown")}async function iP(t,e,n){if(t.Va.set("Online"),e instanceof sE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){$(oi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ql(t,r)}else if(e instanceof rl?t.da.Xe(e):e instanceof iE?t.da.st(e):t.da.tt(e),!n.isEqual(X.min()))try{const r=await yE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(et.EMPTY_BYTE_STRING,f.snapshotVersion)),wE(s,u);const m=new or(f.target,u,h,f.sequenceNumber);Tf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(oi,"Failed to raise snapshot:",r),await ql(t,r)}}async function ql(t,e,n){if(!ds(e))throw e;t.Ea.add(1),await Yo(t),t.Va.set("Offline"),n||(n=()=>yE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(oi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Su(t)})}function IE(t,e){return e().catch(n=>ql(t,n,e))}async function Au(t){const e=Z(t),n=Rr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:af;for(;sP(e);)try{const i=await UR(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,oP(e,i)}catch(i){await ql(e,i)}SE(e)&&AE(e)}function sP(t){return di(t)&&t.Ta.length<10}function oP(t,e){t.Ta.push(e);const n=Rr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function SE(t){return di(t)&&!Rr(t).x_()&&t.Ta.length>0}function AE(t){Rr(t).start()}async function aP(t){Rr(t).ra()}async function lP(t){const e=Rr(t);for(const n of t.Ta)e.ea(n.mutations)}async function uP(t,e,n){const r=t.Ta.shift(),i=pf.from(r,e,n);await IE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Au(t)}async function cP(t,e){e&&Rr(t).Y_&&await async function(r,i){if(function(o){return Hk(o)&&o!==L.ABORTED}(i.code)){const s=r.Ta.shift();Rr(r).B_(),await IE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Au(r)}}(t,e),SE(t)&&AE(t)}async function Kg(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),$(oi,"RemoteStore received new credentials");const r=di(n);n.Ea.add(3),await Yo(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Su(n)}async function hP(t,e){const n=Z(t);e?(n.Ea.delete(2),await Su(n)):e||(n.Ea.add(2),await Yo(n),n.Va.set("Unknown"))}function fs(t){return t.ma||(t.ma=function(n,r,i){const s=Z(n);return s.sa(),new GR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:tP.bind(null,t),Yo:nP.bind(null,t),t_:rP.bind(null,t),J_:iP.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Sf(t)?If(t):t.Va.set("Unknown")):(await t.ma.stop(),TE(t))})),t.ma}function Rr(t){return t.fa||(t.fa=function(n,r,i){const s=Z(n);return s.sa(),new QR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:aP.bind(null,t),t_:cP.bind(null,t),ta:lP.bind(null,t),na:uP.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Au(t)):(await t.fa.stop(),t.Ta.length>0&&($(oi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Af(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cf(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),ds(t))return new q(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{static emptySet(e){return new Hi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ws(),this.sortedSet=new Pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.ga=new Pe(K.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):G(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class rs{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new rs(e,n,Hi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_u(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class fP{constructor(){this.queries=Qg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=Qg(),s.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new q(L.ABORTED,"Firestore shutting down"))}}function Qg(){return new ci(t=>H0(t),_u)}async function CE(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new dP,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Cf(o,`Initialization of query '${_i(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.ba.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&kf(n)}async function kE(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function pP(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.ba)l.Fa(i)&&(r=!0);o.wa=i}}r&&kf(n)}function mP(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(n);r.queries.delete(e)}function kf(t){t.Ca.forEach(e=>{e.next()})}var Gh,Jg;(Jg=Gh||(Gh={})).Ma="default",Jg.Cache="cache";class RE{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Gh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.key=e}}class xE{constructor(e){this.key=e}}class gP{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=le(),this.mutatedKeys=le(),this.eu=W0(e),this.tu=new Hi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Gg,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const y=i.get(f),C=vu(this.query,m)?m:null,x=!!y&&this.mutatedKeys.has(y.key),D=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let M=!1;y&&C?y.data.isEqual(C.data)?x!==D&&(r.track({type:3,doc:C}),M=!0):this.su(y,C)||(r.track({type:2,doc:C}),M=!0,(u&&this.eu(C,u)>0||h&&this.eu(C,h)<0)&&(l=!0)):!y&&C?(r.track({type:0,doc:C}),M=!0):y&&!C&&(r.track({type:1,doc:y}),M=!0,(u||h)&&(l=!0)),M&&(C?(o=o.add(C),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(C,x){const D=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:M})}};return D(C)-D(x)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,h=u!==this.Xa;return this.Xa=u,o.length!==0||h?{snapshot:new rs(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Gg,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=le(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new xE(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new PE(r))}),n}cu(e){this.Za=e.ks,this.Ya=le();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return rs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Rf="SyncEngine";class yP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _P{constructor(e){this.key=e,this.hu=!1}}class vP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ci(l=>H0(l),_u),this.Iu=new Map,this.Eu=new Set,this.Ru=new Pe(K.comparator),this.Au=new Map,this.Vu=new yf,this.du={},this.mu=new Map,this.fu=ns.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function EP(t,e,n=!0){const r=bE(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await NE(r,e,n,!0),i}async function wP(t,e){const n=bE(t);await NE(n,e,!0,!1)}async function NE(t,e,n,r){const i=await jR(t.localStore,cn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await TP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&EE(t.remoteStore,i),l}async function TP(t,e,n,r,i){t.pu=(m,y,C)=>async function(D,M,S,T){let A=M.view.ru(S);A.Ss&&(A=await Bg(D.localStore,M.query,!1).then(({documents:E})=>M.view.ru(E,A)));const V=T&&T.targetChanges.get(M.targetId),F=T&&T.targetMismatches.get(M.targetId)!=null,z=M.view.applyChanges(A,D.isPrimaryClient,V,F);return Xg(D,M.targetId,z.au),z.snapshot}(t,m,y,C);const s=await Bg(t.localStore,e,!0),o=new gP(e,s.ks),l=o.ru(s.documents),u=Jo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Xg(t,n,h.au);const f=new yP(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function IP(t,e,n){const r=Z(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!_u(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await qh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&wf(r.remoteStore,i.targetId),Qh(r,i.targetId)}).catch(hs)):(Qh(r,i.targetId),await qh(r.localStore,i.targetId,!0))}async function SP(t,e){const n=Z(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),wf(n.remoteStore,r.targetId))}async function AP(t,e,n){const r=DP(t);try{const i=await function(o,l){const u=Z(o),h=Ee.now(),f=l.reduce((C,x)=>C.add(x.key),le());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let x=bn(),D=le();return u.xs.getEntries(C,f).next(M=>{x=M,x.forEach((S,T)=>{T.isValidDocument()||(D=D.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,x)).next(M=>{m=M;const S=[];for(const T of l){const A=Uk(T,m.get(T.key).overlayedDocument);A!=null&&S.push(new hi(T.key,A,M0(A.value.mapValue),Cn.exists(!0)))}return u.mutationQueue.addMutationBatch(C,h,S,l)}).next(M=>{y=M;const S=M.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(C,M.batchId,S)})}).then(()=>({batchId:y.batchId,changes:K0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.du[o.currentUser.toKey()];h||(h=new Pe(ae)),h=h.insert(l,u),o.du[o.currentUser.toKey()]=h}(r,i.batchId,n),await Xo(r,i.changes),await Au(r.remoteStore)}catch(i){const s=Cf(i,"Failed to persist write");n.reject(s)}}async function DE(t,e){const n=Z(t);try{const r=await MR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?de(o.hu,14607):i.removedDocuments.size>0&&(de(o.hu,42227),o.hu=!1))}),await Xo(n,r,e)}catch(r){await hs(r)}}function Yg(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.ba)y.va(l)&&(h=!0)}),h&&kf(u)}(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CP(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Pe(K.comparator);o=o.insert(s,at.newNoDocument(s,X.min()));const l=le().add(s),u=new Tu(X.min(),new Map,new Pe(ae),o,l);await DE(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),Pf(r)}else await qh(r.localStore,e,!1).then(()=>Qh(r,e,n)).catch(hs)}async function kP(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await bR(n.localStore,e);OE(n,r,null),VE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xo(n,i)}catch(i){await hs(i)}}async function RP(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(de(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);OE(r,e,n),VE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xo(r,i)}catch(i){await hs(i)}}function VE(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function OE(t,e,n){const r=Z(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Qh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||LE(t,r)})}function LE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(wf(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Pf(t))}function Xg(t,e,n){for(const r of n)r instanceof PE?(t.Vu.addReference(r.key,e),PP(t,r)):r instanceof xE?($(Rf,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||LE(t,r.key)):G(19791,{wu:r})}function PP(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||($(Rf,"New document in limbo: "+n),t.Eu.add(r),Pf(t))}function Pf(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new K(ve.fromString(e)),r=t.fu.next();t.Au.set(r,new _P(n)),t.Ru=t.Ru.insert(n,r),EE(t.remoteStore,new or(cn(df(n.path)),r,"TargetPurposeLimboResolution",pu.ce))}}async function Xo(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=vf.Es(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Pu.J_(i),await async function(u,h){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,y=>O.forEach(y.Ts,C=>f.persistence.referenceDelegate.addReference(m,y.targetId,C)).next(()=>O.forEach(y.Is,C=>f.persistence.referenceDelegate.removeReference(m,y.targetId,C)))))}catch(m){if(!ds(m))throw m;$(Ef,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const C=f.vs.get(y),x=C.snapshotVersion,D=C.withLastLimboFreeSnapshotVersion(x);f.vs=f.vs.insert(y,D)}}}(r.localStore,s))}async function xP(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){$(Rf,"User change. New user:",e.toKey());const r=await gE(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new q(L.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xo(n,r.Ns)}}function NP(t,e){const n=Z(t),r=n.Au.get(e);if(r&&r.hu)return le().add(r.key);{let i=le();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function bE(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=DE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CP.bind(null,e),e.Pu.J_=pP.bind(null,e.eventManager),e.Pu.yu=mP.bind(null,e.eventManager),e}function DP(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RP.bind(null,e),e}class Kl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Iu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return LR(this.persistence,new DR,e.initialUser,this.serializer)}Cu(e){return new mE(_f.Vi,this.serializer)}Du(e){return new BR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Kl.provider={build:()=>new Kl};class VP extends Kl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){de(this.persistence.referenceDelegate instanceof Wl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new yR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new mE(r=>Wl.Vi(r,n),this.serializer)}}class Jh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xP.bind(null,this.syncEngine),await hP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fP}()}createDatastore(e){const n=Iu(e.databaseInfo.databaseId),r=KR(e.databaseInfo);return XR(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new eP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Yg(this.syncEngine,n,0),function(){return Wg.v()?new Wg:new $R}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new vP(i,s,o,l,u,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);$(oi,"RemoteStore shutting down."),s.Ea.add(5),await Yo(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Jh.provider={build:()=>new Jh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="FirestoreClient";class OP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=sf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(Pr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(Pr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kc(t,e){t.asyncQueue.verifyOperationInProgress(),$(Pr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await gE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LP(t);$(Pr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Kg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Kg(e.remoteStore,i)),t._onlineComponents=e}async function LP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(Pr,"Using user provided OfflineComponentProvider");try{await kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;si("Error using user provided cache. Falling back to memory cache: "+n),await kc(t,new Kl)}}else $(Pr,"Using default OfflineComponentProvider"),await kc(t,new VP(void 0));return t._offlineComponents}async function FE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(Pr,"Using user provided OnlineComponentProvider"),await Zg(t,t._uninitializedComponentsProvider._online)):($(Pr,"Using default OnlineComponentProvider"),await Zg(t,new Jh))),t._onlineComponents}function bP(t){return FE(t).then(e=>e.syncEngine)}async function Yh(t){const e=await FE(t),n=e.eventManager;return n.onListen=EP.bind(null,e.syncEngine),n.onUnlisten=IP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=wP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=SP.bind(null,e.syncEngine),n}function MP(t,e,n,r){const i=new ME(r),s=new RE(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>CE(await Yh(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>kE(await Yh(t),s))}}function FP(t,e,n={}){const r=new vr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new ME({next:y=>{f.Nu(),o.enqueueAndForget(()=>kE(s,m)),y.fromCache&&u.source==="server"?h.reject(new q(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new RE(l,f,{includeMetadataChanges:!0,Ka:!0});return CE(s,m)}(await Yh(t),t.asyncQueue,e,n,r)),r.promise}function UP(t,e){const n=new vr;return t.asyncQueue.enqueueAndForget(async()=>AP(await bP(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP="ComponentProvider",ey=new Map;function zP(t,e,n,r,i){return new ak(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,UE(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="firestore.googleapis.com",ty=!0;class ny{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jE,this.ssl=ty}else this.host=e.host,this.ssl=e.ssl??ty;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mR)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=UE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ny({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ny(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jC;switch(r.type){case"firstParty":return new HC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ey.get(n);r&&($(jP,"Removing Datastore"),ey.delete(n),r.terminate())}(this),Promise.resolve()}}function BP(t,e,n,r={}){var h;t=Er(t,Cu);const i=as(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Vv(`https://${l}`),Ov("Firestore",!0)),s.host!==jE&&s.host!==l&&si("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!ti(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=st.MOCK_USER;else{f=lI(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new st(y)}t._authCredentials=new zC(new A0(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zo(this.firestore,e,this._query)}}class $e{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Go(n,$e._jsonSchema))return new $e(e,r||null,new K(ve.fromString(n.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:Fe("string",$e._jsonSchemaVersion),referencePath:Fe("string")};class wr extends Zo{constructor(e,n,r){super(e,n,df(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new K(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function ry(t,e,...n){if(t=Pt(t),C0("collection","path",e),t instanceof Cu){const r=ve.fromString(e,...n);return gg(r),new wr(t,null,r)}{if(!(t instanceof $e||t instanceof wr))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return gg(r),new wr(t.firestore,null,r)}}function Us(t,e,...n){if(t=Pt(t),arguments.length===1&&(e=sf.newId()),C0("doc","path",e),t instanceof Cu){const r=ve.fromString(e,...n);return mg(r),new $e(t,null,new K(r))}{if(!(t instanceof $e||t instanceof wr))throw new q(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return mg(r),new $e(t.firestore,t instanceof wr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="AsyncQueue";class sy{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _E(this,"async_queue_retry"),this._c=()=>{const r=Cc();r&&$(iy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Cc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new vr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ds(e))throw e;$(iy,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ln("INTERNAL UNHANDLED ERROR: ",oy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Af.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&G(47125,{Pc:oy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function oy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Lo extends Cu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new sy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sy(e),this._firestoreClient=void 0,await e}}}function $P(t,e){const n=typeof t=="object"?t:Fv(),r=typeof t=="string"?t:Fl,i=Gd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=oI("firestore");s&&BP(i,...s)}return i}function xf(t){if(t._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||HP(t),t._firestoreClient}function HP(t){var r,i,s,o;const e=t._freezeSettings(),n=zP(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new OP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(et.fromBase64String(e))}catch(n){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ft(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Go(e,Ft._jsonSchema))return Ft.fromBase64String(e.bytes)}}Ft._jsonSchemaVersion="firestore/bytes/1.0",Ft._jsonSchema={type:Fe("string",Ft._jsonSchemaVersion),bytes:Fe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dn._jsonSchemaVersion}}static fromJSON(e){if(Go(e,dn._jsonSchema))return new dn(e.latitude,e.longitude)}}dn._jsonSchemaVersion="firestore/geoPoint/1.0",dn._jsonSchema={type:Fe("string",dn._jsonSchemaVersion),latitude:Fe("number"),longitude:Fe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Go(e,Yt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Yt(e.vectorValues);throw new q(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yt._jsonSchemaVersion="firestore/vectorValue/1.0",Yt._jsonSchema={type:Fe("string",Yt._jsonSchemaVersion),vectorValues:Fe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=/^__.*__$/;class qP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qo(e,this.data,n,this.fieldTransforms)}}function $E(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:t})}}class Nf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Nf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Gl(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if($E(this.dataSource)&&WP.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class KP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Iu(e)}createContext(e,n,r,i=!1){return new Nf({dataSource:e,methodName:n,targetDoc:r,path:Ye.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function GP(t){const e=t._freezeSettings(),n=Iu(t._databaseId);return new KP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function QP(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);KE("Data must be an object, but it was:",o,r);const l=WE(r,o);let u,h;if(s.merge)u=new Gt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=Df(e,m,n);if(!o.contains(y))throw new q(L.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);XP(f,y)||f.push(y)}u=new Gt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new qP(new Mt(l),u,h)}function HE(t,e){if(qE(t=Pt(t)))return KE("Unsupported field value:",e,t),WE(t,e);if(t instanceof BE)return function(r,i){if(!$E(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=HE(l,i.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Vk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ee.fromDate(r);return{timestampValue:Hl(i.serializer,s)}}if(r instanceof Ee){const s=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hl(i.serializer,s)}}if(r instanceof dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ft)return{bytesValue:oE(i.serializer,r._byteString)};if(r instanceof $e){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Yt)return function(o,l){const u=o instanceof Yt?o.toArray():o;return{mapValue:{fields:{[L0]:{stringValue:b0},[Ul]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return ff(l.serializer,f)})}}}}}}(r,i);if(fE(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${of(r)}`)}(t,e)}function WE(t,e){const n={};return P0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ui(t,(r,i)=>{const s=HE(i,e.childContextForField(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function qE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ee||t instanceof dn||t instanceof Ft||t instanceof $e||t instanceof BE||t instanceof Yt||fE(t))}function KE(t,e,n){if(!qE(n)||!k0(n)){const r=of(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Df(t,e,n){if((e=Pt(e))instanceof zE)return e._internalPath;if(typeof e=="string")return YP(t,e);throw Gl("Field path arguments must be of type string or ",t,!1,void 0,n)}const JP=new RegExp("[~\\*/\\[\\]]");function YP(t,e,n){if(e.search(JP)>=0)throw Gl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zE(...e.split("."))._internalPath}catch{throw Gl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(L.INVALID_ARGUMENT,l+t+u)}function XP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{convertValue(e,n="none"){switch(kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ui(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Ul].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ve(o.doubleValue));return new Yt(n)}convertGeoPoint(e){return new dn(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xo(e));default:return null}}convertTimestamp(e){const n=Ar(e);return new Ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);de(dE(r),9688,{name:e});const i=new No(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Ln(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf extends ZP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}const ay="@firebase/firestore",ly="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new e2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Df("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class e2 extends GE{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function t2(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Ks{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gr extends GE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Df("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Gr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Gr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gr._jsonSchema={type:Fe("string",Gr._jsonSchemaVersion),bundleSource:Fe("string","DocumentSnapshot"),bundleName:Fe("string"),bundle:Fe("string")};class il extends Gr{data(e={}){return super.data(e)}}class Qr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ks(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new il(this._firestore,this._userDataWriter,r.key,r,new Ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new il(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ks(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new il(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ks(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:n2(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Qr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=sf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function n2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qr._jsonSchemaVersion="firestore/querySnapshot/1.0",Qr._jsonSchema={type:Fe("string",Qr._jsonSchemaVersion),bundleSource:Fe("string","QuerySnapshot"),bundleName:Fe("string"),bundle:Fe("string")};function r2(t){t=Er(t,Zo);const e=Er(t.firestore,Lo),n=xf(e),r=new Vf(e);return QE(t._query),FP(n,t._query).then(i=>new Qr(e,r,t,i))}function Rc(t,e,n){t=Er(t,$e);const r=Er(t.firestore,Lo),i=t2(t.converter,e),s=GP(r);return i2(r,[QP(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Cn.none())])}function Pc(t,...e){var h,f,m;t=Pt(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||uy(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(uy(e[r])){const y=e[r];e[r]=(h=y.next)==null?void 0:h.bind(y),e[r+1]=(f=y.error)==null?void 0:f.bind(y),e[r+2]=(m=y.complete)==null?void 0:m.bind(y)}let s,o,l;if(t instanceof $e)o=Er(t.firestore,Lo),l=df(t._key.path),s={next:y=>{e[r]&&e[r](s2(o,t,y))},error:e[r+1],complete:e[r+2]};else{const y=Er(t,Zo);o=Er(y.firestore,Lo),l=y._query;const C=new Vf(o);s={next:x=>{e[r]&&e[r](new Qr(o,C,y,x))},error:e[r+1],complete:e[r+2]},QE(t._query)}const u=xf(o);return MP(u,l,i,s)}function i2(t,e){const n=xf(t);return UP(n,e)}function s2(t,e,n){const r=n.docs.get(e._key),i=new Vf(t);return new Gr(t,i,e._key,r,new Ks(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){UC(ls),Xi(new ni("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Lo(new BC(r.getProvider("auth-internal")),new WC(o,r.getProvider("app-check-internal")),lk(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),yr(ay,ly,e),yr(ay,ly,"esm2020")})();/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=t=>{const e=a2(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=Te.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>Te.createElement("svg",{ref:u,...l2,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:JE("lucide",i),...!s&&!u2(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,f])=>Te.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=(t,e)=>{const n=Te.forwardRef(({className:r,...i},s)=>Te.createElement(c2,{ref:s,iconNode:e,className:JE(`lucide-${o2(cy(t))}`,`lucide-${t}`,r),...i}));return n.displayName=cy(t),n};/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],d2=Le("book-open",h2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],p2=Le("chevron-left",f2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],hy=Le("chevron-right",m2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],y2=Le("circle-alert",g2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],v2=Le("circle-check-big",_2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],w2=Le("clock",E2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],I2=Le("database",T2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],A2=Le("download",S2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]],k2=Le("file-braces",C2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],P2=Le("flag",R2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],xc=Le("globe",x2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],D2=Le("layers",N2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],O2=Le("link-2",V2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],b2=Le("list",L2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ba=Le("loader-circle",M2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],U2=Le("plus",F2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],dy=Le("refresh-cw",j2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],B2=Le("shield-check",z2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],H2=Le("sparkles",$2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Nc=Le("trash-2",W2);/**
 * @license lucide-react v0.576.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],fy=Le("user",q2),K2=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"DEIN_API_KEY",authDomain:"DEIN_PROJEKT.firebaseapp.com",projectId:"DEIN_PROJEKT_ID",storageBucket:"DEIN_PROJEKT.appspot.com",messagingSenderId:"DEINE_ID",appId:"DEINE_APP_ID"},YE=Mv(K2),Dc=MC(YE),Fr=$P(YE),Qn=typeof __app_id<"u"?__app_id:"cicero-rst-v1",py=[{name:"Antithesis",type:"mono"},{name:"Background",type:"mono"},{name:"Cause",type:"mono"},{name:"Circumstance",type:"mono"},{name:"Concession",type:"mono"},{name:"Condition",type:"mono"},{name:"Contrast",type:"multi"},{name:"Elaboration",type:"mono"},{name:"Enablement",type:"mono"},{name:"Evaluation",type:"mono"},{name:"Evidence",type:"mono"},{name:"Interpretation",type:"mono"},{name:"Joint",type:"multi"},{name:"Justification",type:"mono"},{name:"List",type:"multi"},{name:"Motivation",type:"mono"},{name:"Otherwise",type:"mono"},{name:"Preparation",type:"mono"},{name:"Purpose",type:"mono"},{name:"Restatement",type:"mono"},{name:"Result",type:"mono"},{name:"Sequence",type:"multi"}],Vc=[{corpus:"ad_familiares",book_n:1,letter_n:1,sender:"Cicero",recipient:"Lentulus",date_when:"Jan 56 BC",year:-56,dateline:"Romae Id. Ian. a. u. c. 698",text:"Ego omni officio ac potius pietate erga te ceteris satis facio omnibus, mihi ipse numquam satis facio..."}];function G2(){const[t,e]=Te.useState(null),[n,r]=Te.useState([]),[i,s]=Te.useState(0),[o,l]=Te.useState(!0),[u,h]=Te.useState(!1),[f,m]=Te.useState(!1),[y,C]=Te.useState(!1),[x,D]=Te.useState(null),[M,S]=Te.useState(""),[T,A]=Te.useState({}),[V,F]=Te.useState({}),[z,E]=Te.useState({}),[g,w]=Te.useState({source:null,role:null,targetRelId:null}),v=n[i],I=v?`${v.corpus}_${v.book_n}_${v.letter_n}`:null,k=v?`${v.corpus} ${v.book_n}.${v.letter_n}`:"";Te.useEffect(()=>{(async()=>{try{typeof __initial_auth_token<"u"&&__initial_auth_token?await IA(Dc,__initial_auth_token):await _A(Dc);try{const J=await fetch("/api/config");if(J.ok){const W=await J.json();S(W.gemini_api_key||"")}}catch{console.warn("Config API nicht erreichbar. KI-Features eventuell eingeschränkt.")}try{const J=await fetch("/api/letters");if(J.ok){const W=await J.json();r(W.length>0?W:Vc)}else r(Vc)}catch{r(Vc)}}catch(J){D(J.message)}finally{l(!1)}})();const te=CA(Dc,e);return()=>te()},[]),Te.useEffect(()=>{if(!t||!I)return;const U=ry(Fr,"artifacts",Qn,"public","data","status"),te=Pc(U,se=>{const he={};se.forEach(Dt=>{he[Dt.id]=Dt.data().completed}),E(he)}),J=Us(Fr,"artifacts",Qn,"public","data","annotations",I),W=Us(Fr,"artifacts",Qn,"public","data","translations",I),re=Pc(J,se=>{se.exists()&&A(he=>({...he,[I]:se.data()}))},se=>console.error("Annot Sync Error:",se)),Ae=Pc(W,se=>{se.exists()&&F(he=>({...he,[I]:se.data().text}))},se=>console.error("Trans Sync Error:",se));return()=>{te(),re(),Ae()}},[t,I]);const _=T[I]||{edus:[],relations:[],source:"manual",verified:!0},xe=z[I]||!1,It=_.source==="ai"&&!_.verified,Un=Te.useMemo(()=>{const U=n.length||1,te=Object.values(z).filter(W=>W===!0).length,J=Object.keys(T).length;return{total:U,completed:te,started:J,percentComplete:Math.round(te/U*100),percentStarted:Math.round(J/U*100)}},[n,z,T]),ct=async U=>{if(!(!t||!I))try{await Rc(Us(Fr,"artifacts",Qn,"public","data","annotations",I),U)}catch(te){console.error("Save error:",te)}},B=async(U,te,J)=>{var Ae,se,he,Dt,Vt;const W=M;if(!W)return console.error("Gemini API Key fehlt."),null;let re=1e3;for(let gn=0;gn<5;gn++)try{const jn={contents:[{parts:[{text:U}]}],systemInstruction:{parts:[{text:te}]},generationConfig:J?{responseMimeType:"application/json",responseSchema:J}:{}},yn=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${W}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(jn)});if(!yn.ok)throw new Error(`API Error: ${yn.status}`);return(Vt=(Dt=(he=(se=(Ae=(await yn.json()).candidates)==null?void 0:Ae[0])==null?void 0:se.content)==null?void 0:he.parts)==null?void 0:Dt[0])==null?void 0:Vt.text}catch(jn){if(gn===4)throw jn;await new Promise(yn=>setTimeout(yn,re)),re*=2}},Q=async()=>{if(!(!v||f)){m(!0);try{const U={type:"OBJECT",properties:{edus:{type:"ARRAY",items:{type:"OBJECT",properties:{text:{type:"STRING"}},required:["text"]}},relations:{type:"ARRAY",items:{type:"OBJECT",properties:{nucleiIndices:{type:"ARRAY",items:{type:"NUMBER"}},satelliteIndex:{type:"NUMBER"},type:{type:"STRING"}},required:["nucleiIndices","type"]}}},required:["edus","relations"]},J=await B(v.text,"Du bist ein Experte für Rhetorical Structure Theory (RST). Analysiere den lateinischen Text und liefere eine Segmentierung (EDUs) sowie Relationen im JSON Format.",U);if(!J)return;const W=JSON.parse(J),re=(W.edus||[]).map(se=>({id:crypto.randomUUID(),text:se.text})),Ae=(W.relations||[]).map(se=>{var he;return{id:crypto.randomUUID(),nuclei:(se.nucleiIndices||[]).map(Dt=>{var Vt;return(Vt=re[Dt])==null?void 0:Vt.id}).filter(Boolean),satellite:se.satelliteIndex!==void 0?(he=re[se.satelliteIndex])==null?void 0:he.id:null,type:se.type}}).filter(se=>se.nuclei.length>0);await ct({edus:re,relations:Ae,source:"ai",verified:!1})}catch(U){console.error("KI-Fehler:",U)}finally{m(!1)}}},ee=async()=>{if(!(!v||u)){h(!0);try{const U=await B(`Übersetze diesen Brief von Cicero ins Deutsche: "${v.text}"`,"Du bist ein Experte für klassische Philologie.");U&&await Rc(Us(Fr,"artifacts",Qn,"public","data","translations",I),{text:U})}catch(U){console.error(U)}finally{h(!1)}}},pe=(U,te,J=null)=>{if(J){const W=(_.relations||[]).map(re=>re.id===J?{...re,nuclei:Array.from(new Set([...re.nuclei||[],U]))}:re);ct({..._,relations:W}),w({source:null,role:null,targetRelId:null})}else if(!g.source)w({source:U,role:te,targetRelId:null});else{if(g.source===U){w({source:null,role:null,targetRelId:null});return}const W={id:crypto.randomUUID(),nuclei:g.role==="N"?[g.source]:[U],satellite:g.role==="S"?g.source:U,type:"Elaboration"};ct({..._,relations:[..._.relations||[],W],source:"manual",verified:!0}),w({source:null,role:null,targetRelId:null})}},Se=()=>{if(!v)return null;let U=v.text;const te=[..._.edus||[]].sort((W,re)=>re.text.length-W.text.length);let J=[{type:"text",content:U}];return te.forEach(W=>{let re=[];J.forEach(Ae=>{if(Ae.type==="text"){const se=Ae.content.split(W.text);se.forEach((he,Dt)=>{if(he&&re.push({type:"text",content:he}),Dt<se.length-1){const Vt=(_.relations||[]).find(jn=>(jn.nuclei||[]).includes(W.id)||jn.satellite===W.id);let gn="bg-yellow-100 border-yellow-300";Vt&&(gn=(Vt.nuclei||[]).includes(W.id)?"bg-blue-100 border-blue-400 font-semibold":"bg-purple-100 border-purple-400"),re.push({type:"edu",content:W.text,id:W.id,className:gn})}})}else re.push(Ae)}),J=re}),J.map((W,re)=>W.type==="text"?N.jsx("span",{children:W.content},re):N.jsx("span",{className:`${W.className} border-b-2 px-0.5 rounded-sm transition-all duration-300 shadow-sm font-medium`,children:W.content},re))},mn=async()=>{if(!y){C(!0);try{const U=ry(Fr,"artifacts",Qn,"public","data","annotations"),te=await r2(U),J={};te.forEach(he=>{J[he.id]=he.data()});const W={app_id:Qn,export_date:new Date().toISOString(),corpus_data:n.map(he=>({metadata:he,annotations:J[`${he.corpus}_${he.book_n}_${he.letter_n}`]||null}))},re=new Blob([JSON.stringify(W,null,2)],{type:"application/json"}),Ae=URL.createObjectURL(re),se=document.createElement("a");se.href=Ae,se.download=`cicero_rst_corpus_${new Date().toISOString().split("T")[0]}.json`,se.click(),URL.revokeObjectURL(Ae)}catch(U){console.error("Export Fehler:",U)}finally{C(!1)}}};return o?N.jsxs("div",{className:"flex h-screen items-center justify-center bg-stone-50",children:[N.jsx(ba,{className:"animate-spin mr-2"})," Initialisiere App..."]}):N.jsxs("div",{className:"flex h-screen flex-col bg-stone-100 text-stone-900 font-sans overflow-hidden",children:[N.jsxs("header",{className:"flex items-center justify-between px-6 py-2.5 bg-white border-b shadow-sm z-30",children:[N.jsxs("div",{className:"flex items-center gap-3",children:[N.jsx("div",{className:"bg-red-800 p-1.5 rounded-lg text-white shadow-sm",children:N.jsx(d2,{size:20})}),N.jsxs("div",{className:"flex flex-col",children:[N.jsx("h1",{className:"text-md font-bold text-stone-800 tracking-tight leading-none uppercase",children:"Cicero RST Annotator"}),N.jsx("span",{className:"text-[10px] text-stone-400 font-mono mt-1 font-bold",children:k})]})]}),N.jsxs("div",{className:"flex items-center gap-4",children:[N.jsxs("div",{className:"hidden lg:flex items-center gap-4 mr-2 text-[10px] font-bold",children:[N.jsxs("div",{className:"flex flex-col items-end",children:[N.jsx("span",{className:"text-stone-400 uppercase tracking-tighter",children:"Status"}),N.jsxs("span",{className:"text-stone-600",children:[Un.completed,"/",Un.total," erledigt"]})]}),N.jsx("button",{onClick:mn,disabled:y,title:"Gesamt-Korpus Export",className:"p-2 bg-stone-100 hover:bg-stone-200 rounded-lg text-stone-600 transition-colors border",children:y?N.jsx(ba,{size:14,className:"animate-spin"}):N.jsx(k2,{size:14})})]}),N.jsxs("div",{className:"flex items-center bg-stone-100 rounded-full px-2 py-1 border shadow-inner",children:[N.jsx("button",{onClick:()=>s(U=>Math.max(0,U-1)),className:"p-1.5 hover:bg-white rounded-full transition-all",disabled:i===0,children:N.jsx(p2,{size:18})}),N.jsxs("div",{className:"relative group px-2",children:[N.jsx("select",{value:i,onChange:U=>s(parseInt(U.target.value)),className:"appearance-none bg-transparent font-bold text-xs tabular-nums cursor-pointer focus:outline-none pr-4",children:n.map((U,te)=>N.jsxs("option",{value:te,children:["Brief ",te+1]},te))}),N.jsx(hy,{size:10,className:"absolute right-0 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none text-stone-400"})]}),N.jsx("button",{onClick:()=>s(U=>Math.min(n.length-1,U+1)),className:"p-1.5 hover:bg-white rounded-full transition-all",disabled:i===n.length-1,children:N.jsx(hy,{size:18})})]}),It&&N.jsxs("button",{onClick:()=>ct({..._,verified:!0}),className:"flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-purple-600 text-white shadow-lg active:scale-95 transition-all",children:[N.jsx(B2,{size:14})," KI-Bestätigung"]}),N.jsxs("button",{onClick:()=>Rc(Us(Fr,"artifacts",Qn,"public","data","status",I),{completed:!xe}),disabled:It,className:`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-md transition-all active:scale-95 ${It?"bg-stone-200 text-stone-400 cursor-not-allowed":xe?"bg-green-100 text-green-700 border border-green-200":"bg-stone-800 text-white hover:bg-stone-700"}`,children:[xe?N.jsx(v2,{size:14}):N.jsx(P2,{size:14})," ",xe?"Abgeschlossen":"Fertigstellen"]})]})]}),N.jsxs("div",{className:"bg-white border-b px-6 py-2 flex gap-8 items-center text-[11px] text-stone-500 shadow-sm z-20 overflow-x-auto whitespace-nowrap",children:[N.jsxs("div",{className:"flex gap-1.5 shrink-0",children:[N.jsx(fy,{size:12,className:"text-stone-300"})," ",N.jsx("b",{children:"Absender:"})," ",(v==null?void 0:v.sender)||"Cicero"]}),N.jsxs("div",{className:"flex gap-1.5 shrink-0",children:[N.jsx(fy,{size:12,className:"text-stone-300 rotate-180"})," ",N.jsx("b",{children:"Empfänger:"})," ",(v==null?void 0:v.recipient)||"N/A"]}),N.jsxs("div",{className:"flex gap-1.5 shrink-0",children:[N.jsx(w2,{size:12,className:"text-stone-300"})," ",N.jsx("b",{children:"Datiert:"})," ",(v==null?void 0:v.date_when)||(v==null?void 0:v.dateline)]}),N.jsxs("div",{className:"flex items-center gap-1.5 border-l pl-8 ml-auto text-stone-400",children:[N.jsx(I2,{size:12})," ",N.jsx("b",{children:"Quelle:"})," ",v==null?void 0:v.corpus]})]}),N.jsxs("main",{className:"flex flex-1 overflow-hidden p-3 gap-3",children:[N.jsxs("div",{className:"flex-1 flex flex-col bg-white rounded-2xl shadow-sm border overflow-hidden",children:[N.jsxs("div",{className:"px-5 py-3 border-b bg-stone-50/30 flex justify-between items-center text-[10px] font-black uppercase text-stone-500 tracking-widest",children:[N.jsxs("h2",{className:"flex items-center gap-2",children:[N.jsx(xc,{size:16,className:"text-blue-600"})," Lateinischer Text"]}),N.jsxs("div",{className:"flex gap-4",children:[N.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-blue-600",children:[N.jsx("div",{className:"w-2.5 h-2.5 rounded bg-blue-400"})," ",N.jsx("span",{children:"Nucleus"})]}),N.jsxs("div",{className:"flex items-center gap-1.5 font-bold text-purple-600",children:[N.jsx("div",{className:"w-2.5 h-2.5 rounded bg-purple-400"})," ",N.jsx("span",{children:"Satellite"})]})]})]}),N.jsx("div",{className:"flex-1 p-12 overflow-auto leading-[2.4] text-xl font-serif text-stone-800 italic selection:bg-blue-100",children:N.jsx("div",{className:"max-w-3xl mx-auto drop-shadow-sm",children:Se()})}),N.jsxs("div",{className:"p-4 border-t bg-stone-50 flex justify-between items-center shadow-inner",children:[N.jsxs("button",{onClick:()=>{const U=window.getSelection().toString().trim();if(U){const te=[..._.edus||[],{id:crypto.randomUUID(),text:U}];ct({..._,edus:te,source:"manual",verified:!0}),window.getSelection().removeAllRanges()}},className:"text-xs bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 shadow-lg active:scale-95 transition-all",children:[N.jsx(U2,{size:18})," EDU markieren"]}),!M&&N.jsxs("div",{className:"text-[10px] text-amber-600 font-bold bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100 flex items-center gap-2 shadow-sm",children:[N.jsx(y2,{size:14})," KI-Features (Heroku GEMINI_API_KEY) nicht konfiguriert"]})]})]}),N.jsxs("div",{className:"w-[520px] flex flex-col bg-white rounded-2xl shadow-sm border overflow-hidden",children:[N.jsxs("div",{className:"px-5 py-4 border-b bg-stone-50 flex justify-between items-center",children:[N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsxs("h2",{className:"font-black text-stone-700 text-[11px] uppercase tracking-widest flex items-center gap-2",children:[N.jsx(D2,{size:16,className:"text-red-700"})," Strukturanalyse"]}),_.source==="ai"&&N.jsx("span",{className:`text-[9px] px-2 py-0.5 rounded-full font-black ${_.verified?"bg-green-100 text-green-700":"bg-purple-100 text-purple-700 shadow-sm"}`,children:_.verified?"VERIFIZIERT":"KI-ENTWURF"})]}),N.jsxs("div",{className:"flex gap-2",children:[N.jsx("button",{onClick:Q,disabled:f||!M,title:"KI-Vorannotation",className:"p-2 text-purple-600 hover:bg-purple-50 rounded-xl transition-all disabled:opacity-30 border border-transparent hover:border-purple-100",children:f?N.jsx(ba,{className:"animate-spin",size:20}):N.jsx(H2,{size:20})}),N.jsx("button",{onClick:()=>{const U=JSON.stringify({metadata:v,annotations:_},null,2),te=document.createElement("a");te.href="data:application/json;charset=utf-8,"+encodeURIComponent(U),te.download=`cicero_rst_${I}.json`,te.click()},title:"Einzel-Export",className:"p-2 text-stone-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all border border-transparent",children:N.jsx(A2,{size:20})})]})]}),N.jsxs("div",{className:"flex-1 overflow-auto p-5 space-y-6 scrollbar-hide",children:[N.jsxs("section",{children:[N.jsxs("h3",{className:"text-[10px] font-black uppercase text-stone-400 mb-4 tracking-widest flex items-center gap-2",children:[N.jsx(O2,{size:14,className:"text-red-800"})," Verknüpfungen"]}),N.jsx("div",{className:"space-y-4",children:(_.relations||[]).map(U=>{var J;const te=py.find(W=>W.name===U.type);return N.jsxs("div",{className:"border border-stone-200 rounded-2xl p-4 bg-stone-50/50 shadow-sm hover:shadow-md transition-shadow",children:[N.jsxs("div",{className:"flex justify-between items-center mb-3",children:[N.jsx("select",{value:U.type,onChange:W=>{const re=_.relations.map(Ae=>Ae.id===U.id?{...Ae,type:W.target.value}:Ae);ct({..._,relations:re})},className:"text-[11px] font-black uppercase outline-none bg-transparent cursor-pointer hover:text-red-700 transition-colors",children:py.map(W=>N.jsx("option",{children:W.name},W.name))}),N.jsx("button",{onClick:()=>ct({..._,relations:_.relations.filter(W=>W.id!==U.id)}),className:"text-stone-300 hover:text-red-500 transition-colors",children:N.jsx(Nc,{size:14})})]}),N.jsxs("div",{className:"space-y-2",children:[(U.nuclei||[]).map((W,re)=>{var Ae;return N.jsxs("div",{className:"flex gap-2 bg-blue-50 p-2 rounded-lg text-[10px] italic border border-blue-100 group",children:[N.jsxs("span",{className:"font-bold text-blue-600 shrink-0",children:["N#",re+1]}),N.jsx("p",{className:"line-clamp-1 flex-1",children:((Ae=_.edus.find(se=>se.id===W))==null?void 0:Ae.text)||"Fragment..."}),(U.nuclei||[]).length>1&&N.jsx("button",{onClick:()=>{const se=U.nuclei.filter(he=>he!==W);ct({..._,relations:_.relations.map(he=>he.id===U.id?{...he,nuclei:se}:he)})},className:"opacity-0 group-hover:opacity-100 text-stone-300 hover:text-red-500",children:N.jsx(Nc,{size:10})})]},W)}),U.satellite&&N.jsxs("div",{className:"flex gap-2 bg-purple-50 p-2 rounded-lg text-[10px] italic border border-purple-100",children:[N.jsx("span",{className:"font-bold text-purple-600 shrink-0",children:"S"}),N.jsx("p",{className:"line-clamp-1",children:((J=_.edus.find(W=>W.id===U.satellite))==null?void 0:J.text)||"Fragment..."})]}),(te==null?void 0:te.type)==="multi"&&N.jsx("button",{onClick:()=>w({source:null,role:"N",targetRelId:U.id}),className:`w-full py-1.5 border border-dashed rounded-lg text-[9px] font-bold transition-all mt-1 ${g.targetRelId===U.id?"bg-blue-600 text-white border-blue-600":"text-blue-500 border-blue-200 hover:bg-blue-50"}`,children:g.targetRelId===U.id?"EDU in Liste wählen...":"+ Weiteren Nukleus hinzufügen"})]})]},U.id)})})]}),N.jsxs("section",{className:"pt-6 border-t border-stone-100",children:[N.jsxs("h3",{className:"text-[10px] font-black uppercase text-stone-400 mb-4 tracking-widest flex items-center gap-2",children:[N.jsx(b2,{size:14})," Segmente (EDUs)"]}),N.jsx("div",{className:"grid grid-cols-1 gap-2",children:(_.edus||[]).map((U,te)=>(g.source,U.id,N.jsxs("div",{className:`flex items-center justify-between p-2.5 rounded-xl border text-[10px] transition-all shadow-sm ${g.source===U.id?"ring-2 ring-red-500 bg-red-50 border-transparent":"bg-stone-50 border-stone-200 hover:border-stone-300"}`,children:[N.jsxs("span",{className:"font-bold text-stone-400 w-6",children:["#",te+1]}),N.jsxs("p",{className:"flex-1 px-2 truncate italic",children:['"',U.text,'"']}),N.jsxs("div",{className:"flex gap-1 shrink-0 ml-2",children:[N.jsx("button",{onClick:()=>pe(U.id,"N",g.targetRelId),className:`px-2 py-1 rounded border font-bold transition-colors ${g.role==="N"&&(g.source===U.id||g.targetRelId)?"bg-blue-600 text-white border-blue-600":"bg-white hover:bg-blue-50"}`,children:"N"}),!g.targetRelId&&N.jsx("button",{onClick:()=>pe(U.id,"S"),className:`px-2 py-1 rounded border font-bold transition-colors ${g.role==="S"&&g.source===U.id?"bg-purple-600 text-white border-purple-600":"bg-white hover:bg-purple-50"}`,children:"S"}),N.jsx("button",{onClick:()=>{const J=_.edus.filter(re=>re.id!==U.id),W=_.relations.filter(re=>!(re.nuclei||[]).includes(U.id)&&re.satellite!==U.id);ct({..._,edus:J,relations:W})},className:"p-1 text-stone-300 hover:text-red-500 transition-colors ml-1",children:N.jsx(Nc,{size:12})})]})]},U.id)))})]})]})]}),N.jsxs("div",{className:"w-[380px] flex flex-col bg-stone-900 text-stone-100 rounded-2xl shadow-2xl border border-stone-800 overflow-hidden",children:[N.jsxs("div",{className:"px-6 py-5 border-b border-stone-800 bg-stone-950 flex justify-between items-center shadow-md",children:[N.jsxs("h2",{className:"font-bold text-blue-400 text-[10px] tracking-widest uppercase flex items-center gap-2",children:[N.jsx(xc,{size:16})," Übersetzung"]}),!V[I]&&N.jsxs("button",{onClick:ee,disabled:u||!M,className:"text-[10px] bg-stone-800 hover:bg-stone-700 px-4 py-2 rounded-full border border-stone-700 flex items-center gap-2 transition-all shadow-lg active:scale-95 disabled:opacity-30",children:[u?N.jsx(ba,{size:12,className:"animate-spin"}):N.jsx(dy,{size:12})," Erstellen"]})]}),N.jsx("div",{className:"flex-1 p-10 overflow-auto leading-[2] text-lg font-serif text-stone-300 scrollbar-hide selection:bg-blue-900",children:V[I]?N.jsxs("div",{className:"animate-in fade-in duration-1000",children:[N.jsxs("div",{className:"text-[10px] font-mono text-stone-500 mb-8 border-b border-stone-800 pb-3 flex justify-between items-center italic tracking-widest",children:[N.jsx("span",{children:"PHILOLOGISCHE ÜBERTRAGUNG"}),N.jsx("button",{onClick:ee,className:"hover:text-blue-400 transition-colors",children:N.jsx(dy,{size:12})})]}),N.jsx("div",{className:"drop-shadow-sm leading-relaxed",children:V[I]})]}):N.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-stone-700 italic text-sm text-center px-6 space-y-6 opacity-40",children:[N.jsx(xc,{size:48}),N.jsx("p",{className:"leading-relaxed",children:"Keine deutsche Übersetzung gespeichert. Nutzen Sie die KI-Funktion für einen Entwurf."})]})})]})]})]})}Oc.createRoot(document.getElementById("root")).render(N.jsx(jw.StrictMode,{children:N.jsx(G2,{})}));
