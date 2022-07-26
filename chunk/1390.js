/*! For license information please see 1390.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[1390],{"5403":function(e,r,t){t.d(r,{"ub":function(){return o},"Gt":function(){return a},"_z":function(){return c},"pf":function(){return i},"tq":function(){return u},"t3":function(){return s},"G7":function(){return l},"JO":function(){return f},"Ex":function(){return p},"Ho":function(){return d},"xv":function(){return v},"zx":function(){return m},"XZ":function(){return y},"cO":function(){return h},"l0":function(){return g},"__":function(){return b},"cW":function(){return Z},"Nf":function(){return x},"$o":function(){return w},"Y8":function(){return j},"FX":function(){return k},"iR":function(){return O},"rs":function(){return _},"gx":function(){return E},"V1":function(){return N},"Ee":function(){return S},"nk":function(){return C},"kh":function(){return P}});t(3464);var n=t(2214),o=((0,n.Z)("taro-cover-image-core"),(0,n.Z)("taro-cover-view-core"),(0,n.Z)("taro-match-media-core"),(0,n.Z)("taro-movable-area-core")),a=(0,n.Z)("taro-movable-view-core"),c=(0,n.Z)("taro-page-container-core"),i=(0,n.Z)("taro-scroll-view-core"),u=((0,n.Z)("taro-share-element-core"),(0,n.Z)("taro-swiper-core")),s=(0,n.Z)("taro-swiper-item-core"),l=(0,n.Z)("taro-view-core"),f=(0,n.Z)("taro-icon-core"),p=(0,n.Z)("taro-progress-core"),d=(0,n.Z)("taro-rich-text-core"),v=(0,n.Z)("taro-text-core"),m=(0,n.Z)("taro-button-core"),y=(0,n.Z)("taro-checkbox-core"),h=(0,n.Z)("taro-checkbox-group-core"),g=((0,n.Z)("taro-editor-core"),(0,n.Z)("taro-form-core")),b=((0,n.Z)("taro-keyboard-accessory-core"),(0,n.Z)("taro-label-core")),Z=(0,n.Z)("taro-picker-core"),x=(0,n.Z)("taro-picker-view-core"),w=(0,n.Z)("taro-picker-view-column-core"),j=(0,n.Z)("taro-radio-core"),k=(0,n.Z)("taro-radio-group-core"),O=(0,n.Z)("taro-slider-core"),_=(0,n.Z)("taro-switch-core"),E=(0,n.Z)("taro-textarea-core"),N=((0,n.Z)("taro-functional-page-navigator-core"),(0,n.Z)("taro-navigator-core"),(0,n.Z)("taro-audio-core"),(0,n.Z)("taro-camera-core")),S=(0,n.Z)("taro-image-core"),C=((0,n.Z)("taro-live-player-core"),(0,n.Z)("taro-video-core")),P=((0,n.Z)("taro-voip-room-core"),(0,n.Z)("taro-map-core"),(0,n.Z)("taro-canvas-core"),(0,n.Z)("taro-web-view-core"));(0,n.Z)("taro-ad-core"),(0,n.Z)("taro-ad-custom-core"),(0,n.Z)("taro-official-account-core"),(0,n.Z)("taro-open-data-core"),(0,n.Z)("taro-navigation-bar-core"),(0,n.Z)("taro-page-meta-core"),(0,n.Z)("taro-custom-wrapper-core")},"2214":function(e,r,t){var n=t(5827),o=t(1760),a=t(517),c=t(6830),i=t(8652),u=t(6014),s=t(3317),l=t(5935),f=t(766),p=t(3464);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _createSuper(e){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var t,n=(0,l.Z)(e);if(r){var o=(0,l.Z)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.Z)(this,t)}}p.createElement;var d="taro-scroll-view-core",v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,r,t){/^--/.test(r)?e.style.setProperty(r,t):"number"!=typeof t||v.test(r)?e.style[r]=t:e.style[r]=t+"px"}function updateProp(e,r,t,n,o){var a=e.ref.current,c=o[t],i=n?n[t]:void 0;if("children"!==t)if("classname"!==t.toLowerCase()){if("style"!==t){if(/^data-.+/.test(t)&&a.setAttribute(t,c),r===d){if("scrollTop"===t)return void(a.mpScrollTop=c);if("scrollLeft"===t)return void(a.mpScrollLeft=c);if("scrollIntoView"===t)return void(a.mpScrollIntoView=c)}if("function"==typeof c&&t.match(/^on[A-Z]/)){var u=t.substr(2).toLowerCase(),s=c;return r===d&&"scroll"===u&&(s=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([u,s]),a.addEventListener(u,s)}return"string"==typeof c||"number"==typeof c?(a.setAttribute(t,c),void(a[t]=c)):"boolean"==typeof c?c?(a[t]=!0,a.setAttribute(t,c)):(a[t]=!1,a.removeAttribute(t)):void(a[t]=c)}if("string"==typeof c)return void a.setAttribute(t,c);if(!c)return void a.removeAttribute(t);if(n)if("string"==typeof i)a.style.cssText="";else for(var l in i)updateStyle(a,l,"");for(var p in c)updateStyle(a,p,c[p])}else a.className=n?function getClassName(e,r,t){var n=Array.from(e.classList),o=(r.className||r.class||"").split(" "),a=(t.className||t.class||"").split(" "),c=[];return n.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(r){return r!==e}))):-1===o.indexOf(e)&&c.push(e)})),(c=[].concat((0,f.Z)(c),(0,f.Z)(a))).join(" ")}(a,n,o):c}r.Z=function reactifyWebComponent(e){var r=function(r){(0,u.Z)(Index,r);var t=_createSuper(Index);function Index(e){var r;return(0,c.Z)(this,Index),(r=t.call(this,e)).eventHandlers=[],r.ref=(0,p.createRef)(),r}return(0,i.Z)(Index,[{"key":"update","value":function update(r){var t=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(n){"children"===n||"key"===n||n in t.props||updateProp(t,e,n,r,t.props)})),Object.keys(this.props).forEach((function(n){updateProp(t,e,n,r,t.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,a.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(r){var t=(0,o.Z)(r,2),n=t[0],a=t[1];e.ref.current&&e.ref.current.removeEventListener(n,a)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,t=r.children,n=r.dangerouslySetInnerHTML,o={"ref":this.ref};return n&&(o.dangerouslySetInnerHTML=n),(0,p.createElement)(e,o,t)}}]),Index}(p.Component);return p.forwardRef((function(e,t){return p.createElement(r,_objectSpread(_objectSpread({},e),{},{"forwardRef":t}))}))}},"8502":function(e,r,t){t(4744);var n=t(3464),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),r.Fragment=a("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,t){var n,a={},s=null,l=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!u.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{"$$typeof":o,"type":e,"key":s,"ref":l,"props":a,"_owner":c.current}}r.jsx=q,r.jsxs=q},"2922":function(e,r,t){e.exports=t(8502)},"7465":function(e,r,t){var n=t(5403),o=t(2922);r.Z=function Head(e){var r=e.title,t=e.desc;return(0,o.jsxs)(n.G7,{"className":"page-head","children":[(0,o.jsx)(n.G7,{"className":"page-head-title","children":r}),(0,o.jsx)(n.G7,{"className":"page-head-line"}),!!t&&(0,o.jsx)(n.xv,{"className":"page-head-desc","children":t})]})}},"1682":function(e,r,t){var n=t(5403),o=t(4898),a=t(2922);function JSONTree(e){var r=o.$L?JSON.stringify(e.data,void 0,2):JSON.stringify(e.data,void 0,2).replace(/[ ]/g,"&nbsp;");return(0,a.jsx)(n.xv,{"decode":!0,"children":r})}r.Z=function(e){return e.data&&Object.keys(e.data).length>0?(0,a.jsx)(JSONTree,{"data":e.data}):(0,a.jsx)(n.G7,{})}},"1390":function(e,r,t){t.r(r),t.d(r,{"default":function(){return Stack}});var n=t(5403),o=t(7465),a=t(1682),c=t(5172),i=t(2922),u=0;function Stack(){var e=(0,c.s_)();return(0,i.jsxs)(n.G7,{"className":"global-page","children":[(0,i.jsx)(n.G7,{"className":"global-page__header","children":(0,i.jsx)(o.Z,{"title":"getCurrentPages(".concat(e.length,")")})}),(0,i.jsxs)(n.G7,{"className":"global-page__body","children":[(0,i.jsx)(n.G7,{"className":"global-page__body-example example","children":(0,i.jsx)(a.Z,{"data":e.map((function(e){return{"route":e.route,"options":e.options}})),"shouldExpandNode":function shouldExpandNode(e,r,t){return t<3}})}),(0,i.jsx)(n.zx,{"className":"global-page-btn","type":"primary","onClick":function onClick(){(0,c.T8)({"url":"/pages/global/pages/router/index?index=".concat(u++,"&from=navigateTo")})},"children":"navigateTo"}),(0,i.jsx)(n.zx,{"className":"global-page-btn","type":"primary","onClick":function onClick(){(0,c.gB)({"url":"/pages/global/pages/router/index?index=".concat(u++,"&from=redirectTo")})},"children":"redirectTo"}),(0,i.jsx)(n.zx,{"className":"global-page-btn","type":"primary","onClick":function onClick(){(0,c.n)()},"children":"navigateBack"}),(0,i.jsx)(n.zx,{"className":"global-page-btn","type":"warn","onClick":function onClick(){(0,c.UY)({"url":"/pages/global/pages/router/index?index=".concat(u++,"&from=reLaunch")})},"children":"reLaunch"}),(0,i.jsx)(n.zx,{"className":"global-page-btn","type":"warn","onClick":function onClick(){(0,c.MR)({"url":"/pages/global/index"})},"children":"switchTab"})]})]})}},"4898":function(e,r,t){t.d(r,{"$L":function(){return a},"Fj":function(){return c},"Ib":function(){return loadWeb},"tT":function(){return loadMini},"ff":function(){return loadRn},"D5":function(){return hadlePermissionsDeny},"P2":function(){return throttle},"p":function(){return randomColor}});var n=t(4664),o=t(5172),a=n.ZPm.getEnv()===n.ZPm.ENV_TYPE.WEB,c=n.ZPm.getEnv()===n.ZPm.ENV_TYPE.RN;function loadWeb(e){var r=e.url,t=e.title,n=e.right,c=e.open,i=e.certified,u=void 0===i||i;a?window.location.href=r:(0,o.T8)({"url":"/pages/webview/index?certified=".concat(u,"&title=").concat(t,"&link=").concat(encodeURIComponent(r)).concat(n?"&right=".concat(n):"").concat(c?"&open=".concat(encodeURIComponent(c)):"")})}function loadMini(e){var r=e.url;(0,o.T8)({"url":"/pages/about/mini?src="+encodeURIComponent(r)})}function loadRn(e){var r=e.android,t=e.ios;(0,o.T8)({"url":"/pages/about/rn?android="+encodeURIComponent(r)+"&ios="+encodeURIComponent(t)})}function hadlePermissionsDeny(e){var r=e.perssionText;(0,n.K4b)({"title":"提示","content":"请在“设置-隐私-".concat(r,"”选项中，允许 Taro 访问你的").concat(r,"。"),"confirmColor":"#6190E8","success":function success(e){e.confirm&&(0,n.asn)()}})}function throttle(e,r){var t=0;return function(){var n=Date.now(),o=this,a=arguments;n-t>r&&(e.apply(o,a),t=n)}}function randomColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}}}]);