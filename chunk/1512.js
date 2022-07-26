/*! For license information please see 1512.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[1512],{"5403":function(e,r,t){t.d(r,{"ub":function(){return o},"Gt":function(){return c},"_z":function(){return a},"pf":function(){return i},"tq":function(){return s},"t3":function(){return u},"G7":function(){return l},"JO":function(){return f},"Ex":function(){return d},"Ho":function(){return p},"xv":function(){return v},"zx":function(){return h},"XZ":function(){return m},"cO":function(){return y},"l0":function(){return Z},"__":function(){return b},"cW":function(){return x},"Nf":function(){return g},"$o":function(){return j},"Y8":function(){return w},"FX":function(){return O},"iR":function(){return k},"rs":function(){return _},"gx":function(){return E},"V1":function(){return S},"Ee":function(){return N},"nk":function(){return P},"kh":function(){return C}});t(3464);var n=t(2214),o=((0,n.Z)("taro-cover-image-core"),(0,n.Z)("taro-cover-view-core"),(0,n.Z)("taro-match-media-core"),(0,n.Z)("taro-movable-area-core")),c=(0,n.Z)("taro-movable-view-core"),a=(0,n.Z)("taro-page-container-core"),i=(0,n.Z)("taro-scroll-view-core"),s=((0,n.Z)("taro-share-element-core"),(0,n.Z)("taro-swiper-core")),u=(0,n.Z)("taro-swiper-item-core"),l=(0,n.Z)("taro-view-core"),f=(0,n.Z)("taro-icon-core"),d=(0,n.Z)("taro-progress-core"),p=(0,n.Z)("taro-rich-text-core"),v=(0,n.Z)("taro-text-core"),h=(0,n.Z)("taro-button-core"),m=(0,n.Z)("taro-checkbox-core"),y=(0,n.Z)("taro-checkbox-group-core"),Z=((0,n.Z)("taro-editor-core"),(0,n.Z)("taro-form-core")),b=((0,n.Z)("taro-keyboard-accessory-core"),(0,n.Z)("taro-label-core")),x=(0,n.Z)("taro-picker-core"),g=(0,n.Z)("taro-picker-view-core"),j=(0,n.Z)("taro-picker-view-column-core"),w=(0,n.Z)("taro-radio-core"),O=(0,n.Z)("taro-radio-group-core"),k=(0,n.Z)("taro-slider-core"),_=(0,n.Z)("taro-switch-core"),E=(0,n.Z)("taro-textarea-core"),S=((0,n.Z)("taro-functional-page-navigator-core"),(0,n.Z)("taro-navigator-core"),(0,n.Z)("taro-audio-core"),(0,n.Z)("taro-camera-core")),N=(0,n.Z)("taro-image-core"),P=((0,n.Z)("taro-live-player-core"),(0,n.Z)("taro-video-core")),C=((0,n.Z)("taro-voip-room-core"),(0,n.Z)("taro-map-core"),(0,n.Z)("taro-canvas-core"),(0,n.Z)("taro-web-view-core"));(0,n.Z)("taro-ad-core"),(0,n.Z)("taro-ad-custom-core"),(0,n.Z)("taro-official-account-core"),(0,n.Z)("taro-open-data-core"),(0,n.Z)("taro-navigation-bar-core"),(0,n.Z)("taro-page-meta-core"),(0,n.Z)("taro-custom-wrapper-core")},"2214":function(e,r,t){var n=t(5827),o=t(1760),c=t(517),a=t(6830),i=t(8652),s=t(6014),u=t(3317),l=t(5935),f=t(766),d=t(3464);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _createSuper(e){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var t,n=(0,l.Z)(e);if(r){var o=(0,l.Z)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,u.Z)(this,t)}}d.createElement;var p="taro-scroll-view-core",v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,r,t){/^--/.test(r)?e.style.setProperty(r,t):"number"!=typeof t||v.test(r)?e.style[r]=t:e.style[r]=t+"px"}function updateProp(e,r,t,n,o){var c=e.ref.current,a=o[t],i=n?n[t]:void 0;if("children"!==t)if("classname"!==t.toLowerCase()){if("style"!==t){if(/^data-.+/.test(t)&&c.setAttribute(t,a),r===p){if("scrollTop"===t)return void(c.mpScrollTop=a);if("scrollLeft"===t)return void(c.mpScrollLeft=a);if("scrollIntoView"===t)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&t.match(/^on[A-Z]/)){var s=t.substr(2).toLowerCase(),u=a;return r===p&&"scroll"===s&&(u=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,u]),c.addEventListener(s,u)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(t,a),void(c[t]=a)):"boolean"==typeof a?a?(c[t]=!0,c.setAttribute(t,a)):(c[t]=!1,c.removeAttribute(t)):void(c[t]=a)}if("string"==typeof a)return void c.setAttribute(t,a);if(!a)return void c.removeAttribute(t);if(n)if("string"==typeof i)c.style.cssText="";else for(var l in i)updateStyle(c,l,"");for(var d in a)updateStyle(c,d,a[d])}else c.className=n?function getClassName(e,r,t){var n=Array.from(e.classList),o=(r.className||r.class||"").split(" "),c=(t.className||t.class||"").split(" "),a=[];return n.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(r){return r!==e}))):-1===o.indexOf(e)&&a.push(e)})),(a=[].concat((0,f.Z)(a),(0,f.Z)(c))).join(" ")}(c,n,o):a}r.Z=function reactifyWebComponent(e){var r=function(r){(0,s.Z)(Index,r);var t=_createSuper(Index);function Index(e){var r;return(0,a.Z)(this,Index),(r=t.call(this,e)).eventHandlers=[],r.ref=(0,d.createRef)(),r}return(0,i.Z)(Index,[{"key":"update","value":function update(r){var t=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(n){"children"===n||"key"===n||n in t.props||updateProp(t,e,n,r,t.props)})),Object.keys(this.props).forEach((function(n){updateProp(t,e,n,r,t.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(r){var t=(0,o.Z)(r,2),n=t[0],c=t[1];e.ref.current&&e.ref.current.removeEventListener(n,c)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,t=r.children,n=r.dangerouslySetInnerHTML,o={"ref":this.ref};return n&&(o.dangerouslySetInnerHTML=n),(0,d.createElement)(e,o,t)}}]),Index}(d.Component);return d.forwardRef((function(e,t){return d.createElement(r,_objectSpread(_objectSpread({},e),{},{"forwardRef":t}))}))}},"8502":function(e,r,t){t(4744);var n=t(3464),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,t){var n,c={},u=null,l=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!s.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{"$$typeof":o,"type":e,"key":u,"ref":l,"props":c,"_owner":a.current}}r.jsx=q,r.jsxs=q},"2922":function(e,r,t){e.exports=t(8502)},"7465":function(e,r,t){var n=t(5403),o=t(2922);r.Z=function Head(e){var r=e.title,t=e.desc;return(0,o.jsxs)(n.G7,{"className":"page-head","children":[(0,o.jsx)(n.G7,{"className":"page-head-title","children":r}),(0,o.jsx)(n.G7,{"className":"page-head-line"}),!!t&&(0,o.jsx)(n.xv,{"className":"page-head-desc","children":t})]})}},"1512":function(e,r,t){t.r(r);var n=t(8446),o=t(1760),c=t(3464),a=t(5403),i=t(7465),s=t(2922);r.default=function PageView(){var e=(0,c.useState)({"disabled":!1,"direction":"all"}),r=(0,o.Z)(e,2),t=r[0],u=r[1],l=function getBackgroundColot(e){return{"backgroundColor":e===t.direction?"#13CE66":"#dddddd"}},f=function onPressDirection(e){return function(){u((0,n.Z)((0,n.Z)({},t),{},{"direction":e}))}};return(0,s.jsxs)(a.G7,{"className":"components-page","children":[(0,s.jsx)(a.G7,{"className":"components-page__header","children":(0,s.jsx)(i.Z,{"title":"MovableView"})}),(0,s.jsx)(a.ub,{"className":"movable-area","children":(0,s.jsx)(a.Gt,(0,n.Z)((0,n.Z)({},t),{},{"children":(0,s.jsx)(a.G7,{"className":"movable-view","children":String(t.disabled)})}))}),(0,s.jsxs)(a.G7,{"className":"setting-contain","children":[(0,s.jsx)(a.G7,{"className":"title","children":"是否禁用"}),(0,s.jsx)(a.G7,{"className":"content","children":(0,s.jsx)(a.rs,{"checked":t.disabled,"onChange":function onPressDisabled(e){var r,o;u((0,n.Z)((0,n.Z)({},t),{},{"disabled":null===(r=null==e||null===(o=e.detail)||void 0===o?void 0:o.value)||void 0===r||r}))}})})]}),(0,s.jsxs)(a.G7,{"className":"setting-contain direction","children":[(0,s.jsx)(a.G7,{"className":"title","children":"移动方向"}),(0,s.jsxs)(a.G7,{"className":"direction-content","children":[(0,s.jsx)(a.zx,{"style":l("all"),"onClick":f("all"),"children":"all"}),(0,s.jsx)(a.zx,{"style":l("vertical"),"onClick":f("vertical"),"children":"vertical"}),(0,s.jsx)(a.zx,{"style":l("horizontal"),"onClick":f("horizontal"),"children":"horizontal"}),(0,s.jsx)(a.zx,{"style":l("none"),"onClick":f("none"),"children":"none"})]})]})]})}}}]);