/*! For license information please see 41.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"137":function(e,t,r){"use strict";e.exports=r(140)},"138":function(e,t,r){"use strict";var o=r(23),n=r.n(o),c=r(58),a=r.n(c),i=r(17),u=r.n(i),s=r(30),f=r.n(s),p=r(31),l=r.n(p),d=r(141),b=r.n(d),O=r(143),j=r.n(O),y=r(145),v=r.n(y),m=r(59),h=r.n(m),g=r(20),x=r.n(g);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=v()(e);if(t){var n=v()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return j()(this,r)}}x.a.createElement;var _=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||_.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,o,n){var c=e.ref.current,a=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var u=r.substr(2).toLowerCase(),s=a;return"taro-scroll-view-core"===t&&"scroll"===u&&(s=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([u,s]),c.addEventListener(u,s)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(o)if("string"==typeof i)c.style.cssText="";else for(var f in i)updateStyle(c,f,"");for(var p in a)updateStyle(c,p,a[p])}else c.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return o.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&a.push(e)})),(a=[].concat(h()(a),h()(c))).join(" ")}(c,o,n):a}t.a=function reactifyWebComponent(e){var t=function(t){b()(Index,t);var r=_createSuper(Index);function Index(e){var t;return f()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(g.createRef)(),t}return l()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===u()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=a()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),Object(g.createElement)(e,n,r)}}]),Index}(x.a.Component);return x.a.forwardRef((function(e,r){return x.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"140":function(e,t,r){"use strict";r(49);var o=r(20),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,c={},s=null,f=null;for(o in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)i.call(t,o)&&!u.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{"$$typeof":n,"type":e,"key":s,"ref":f,"props":c,"_owner":a.current}}t.jsx=q,t.jsxs=q},"141":function(e,t,r){var o=r(142);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"142":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"143":function(e,t,r){var o=r(17).default,n=r(144);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"144":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"145":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"147":function(e,t,r){"use strict";r.d(t,"i",(function(){return c})),r.d(t,"j",(function(){return a})),r.d(t,"k",(function(){return i})),r.d(t,"s",(function(){return u})),r.d(t,"u",(function(){return s})),r.d(t,"v",(function(){return f})),r.d(t,"A",(function(){return p})),r.d(t,"f",(function(){return l})),r.d(t,"o",(function(){return d})),r.d(t,"r",(function(){return b})),r.d(t,"x",(function(){return O})),r.d(t,"a",(function(){return j})),r.d(t,"c",(function(){return y})),r.d(t,"d",(function(){return v})),r.d(t,"e",(function(){return m})),r.d(t,"h",(function(){return h})),r.d(t,"l",(function(){return g})),r.d(t,"m",(function(){return x})),r.d(t,"n",(function(){return _})),r.d(t,"p",(function(){return w})),r.d(t,"q",(function(){return C})),r.d(t,"t",(function(){return k})),r.d(t,"w",(function(){return P})),r.d(t,"y",(function(){return E})),r.d(t,"b",(function(){return S})),r.d(t,"g",(function(){return R})),r.d(t,"z",(function(){return N})),r.d(t,"B",(function(){return T}));var o=r(20),n=r(138),c=(Object(n.a)("taro-cover-image-core"),Object(n.a)("taro-cover-view-core"),Object(n.a)("taro-match-media-core"),Object(n.a)("taro-movable-area-core")),a=Object(n.a)("taro-movable-view-core"),i=Object(n.a)("taro-page-container-core"),u=Object(n.a)("taro-scroll-view-core"),s=(Object(n.a)("taro-share-element-core"),Object(n.a)("taro-swiper-core")),f=Object(n.a)("taro-swiper-item-core"),p=Object(n.a)("taro-view-core"),l=Object(n.a)("taro-icon-core"),d=Object(n.a)("taro-progress-core"),b=Object(n.a)("taro-rich-text-core"),O=Object(n.a)("taro-text-core"),j=Object(n.a)("taro-button-core"),y=Object(n.a)("taro-checkbox-core"),v=Object(n.a)("taro-checkbox-group-core"),m=(Object(n.a)("taro-editor-core"),Object(n.a)("taro-form-core")),h=(Object(n.a)("taro-keyboard-accessory-core"),Object(n.a)("taro-label-core")),g=Object(n.a)("taro-picker-core"),x=Object(n.a)("taro-picker-view-core"),_=Object(n.a)("taro-picker-view-column-core"),w=Object(n.a)("taro-radio-core"),C=Object(n.a)("taro-radio-group-core"),k=Object(n.a)("taro-slider-core"),P=Object(n.a)("taro-switch-core"),E=Object(n.a)("taro-textarea-core"),S=(Object(n.a)("taro-functional-page-navigator-core"),Object(n.a)("taro-navigator-core"),Object(n.a)("taro-audio-core"),Object(n.a)("taro-camera-core")),R=Object(n.a)("taro-image-core"),N=(Object(n.a)("taro-live-player-core"),Object(n.a)("taro-video-core")),T=(Object(n.a)("taro-voip-room-core"),Object(n.a)("taro-map-core"),Object(n.a)("taro-canvas-core"),Object(n.a)("taro-web-view-core"));Object(n.a)("taro-ad-core"),Object(n.a)("taro-ad-custom-core"),Object(n.a)("taro-official-account-core"),Object(n.a)("taro-open-data-core"),Object(n.a)("taro-navigation-bar-core"),Object(n.a)("taro-page-meta-core"),o.Fragment,Object(n.a)("taro-custom-wrapper-core")},"150":function(e,t,r){"use strict";r.d(t,"c",(function(){return c})),r.d(t,"b",(function(){return a})),r.d(t,"f",(function(){return loadWeb})),r.d(t,"d",(function(){return loadMini})),r.d(t,"e",(function(){return loadRn})),r.d(t,"a",(function(){return hadlePermissionsDeny})),r.d(t,"h",(function(){return throttle})),r.d(t,"g",(function(){return randomColor}));var o=r(24),n=r(12),c=o.i.getEnv()===o.i.ENV_TYPE.WEB,a=o.i.getEnv()===o.i.ENV_TYPE.RN;function loadWeb(e){var t=e.url,r=e.title,o=e.right,a=e.open,i=e.certified,u=void 0===i||i;c?window.location.href=t:Object(n.e)({"url":"/pages/webview/index?certified=".concat(u,"&title=").concat(r,"&link=").concat(encodeURIComponent(t)).concat(o?"&right=".concat(o):"").concat(a?"&open=".concat(encodeURIComponent(a)):"")})}function loadMini(e){var t=e.url;Object(n.e)({"url":"/pages/about/mini?src="+encodeURIComponent(t)})}function loadRn(e){var t=e.android,r=e.ios;Object(n.e)({"url":"/pages/about/rn?android="+encodeURIComponent(t)+"&ios="+encodeURIComponent(r)})}function hadlePermissionsDeny(e){var t=e.perssionText;Object(o.kb)({"title":"提示","content":"请在“设置-隐私-".concat(t,"”选项中，允许 Taro 访问你的").concat(t,"。"),"confirmColor":"#6190E8","success":function success(e){e.confirm&&Object(o.Q)()}})}function throttle(e,t){var r=0;return function(){var o=Date.now(),n=this,c=arguments;o-r>t&&(e.apply(n,c),r=o)}}function randomColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}},"152":function(e,t,r){"use strict";var o=r(147),n=r(150),c=r(137);function JSONTree(e){var t=n.c?JSON.stringify(e.data,void 0,2):JSON.stringify(e.data,void 0,2).replace(/[ ]/g,"&nbsp;");return Object(c.jsx)(o.x,{"decode":!0,"children":t})}t.a=function(e){return e.data&&Object.keys(e.data).length>0?Object(c.jsx)(JSONTree,{"data":e.data}):Object(c.jsx)(o.A,{})}},"234":function(e,t,r){},"309":function(e,t,r){"use strict";r.r(t);var o=r(7),n=r(24),c=r(147),a=r(20),i=r(152),u=(r(234),r(137));t.default=function Index(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),r=t[0],s=t[1],f=Object(a.useState)({}),p=Object(o.a)(f,2),l=p[0],d=p[1],b=Object(a.useCallback)((function(e){console.log("回调函数 C1",e),s(e)}),[]),O=Object(a.useCallback)((function(e){console.log("回调函数 C2",e),d(e)}),[]);return Object(u.jsx)(c.A,{"className":"api-page","children":Object(u.jsxs)(c.A,{"className":"api-page__body","children":[Object(u.jsx)(c.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){Object(n.J)(b)},"children":"Taro.onDeviceMotionChange(C1)"}),Object(u.jsx)(i.a,{"data":r}),Object(u.jsx)(c.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){Object(n.J)(O)},"children":"Taro.onDeviceMotionChange(C2)"}),Object(u.jsx)(i.a,{"data":l}),Object(u.jsx)(c.a,{"type":"primary","className":"api-page-btn-warning","onClick":function onClick(){Object(n.B)(b)},"children":"Taro.offDeviceMotionChange(C1)"}),Object(u.jsx)(c.a,{"type":"primary","className":"api-page-btn-warning","onClick":function onClick(){Object(n.B)(O)},"children":"Taro.offDeviceMotionChange(C2)"}),Object(u.jsx)(c.a,{"type":"primary","className":"api-page-btn-error","onClick":function onClick(){Object(n.B)()},"children":"Taro.offDeviceMotionChange()"}),Object(u.jsx)(c.a,{"type":"primary","className":"api-page-btn-error","onClick":function onClick(){Object(n.qb)({"success":function success(e){console.log("成功",e)}})},"children":"Taro.startDeviceMotionListening()"}),Object(u.jsx)(c.a,{"type":"primary","className":"api-page-btn-error","onClick":function onClick(){Object(n.vb)()},"children":"Taro.stopDeviceMotionListening()"})]})})}}}]);