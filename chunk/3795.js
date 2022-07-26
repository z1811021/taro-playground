/*! For license information please see 3795.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[3795],{"5403":function(e,r,t){t.d(r,{"ub":function(){return n},"Gt":function(){return a},"_z":function(){return c},"pf":function(){return s},"tq":function(){return i},"t3":function(){return l},"G7":function(){return u},"JO":function(){return f},"Ex":function(){return p},"Ho":function(){return d},"xv":function(){return m},"zx":function(){return h},"XZ":function(){return y},"cO":function(){return x},"l0":function(){return v},"__":function(){return b},"cW":function(){return Z},"Nf":function(){return g},"$o":function(){return j},"Y8":function(){return _},"FX":function(){return w},"iR":function(){return N},"rs":function(){return G},"gx":function(){return O},"V1":function(){return S},"Ee":function(){return k},"nk":function(){return E},"kh":function(){return P}});t(3464);var o=t(2214),n=((0,o.Z)("taro-cover-image-core"),(0,o.Z)("taro-cover-view-core"),(0,o.Z)("taro-match-media-core"),(0,o.Z)("taro-movable-area-core")),a=(0,o.Z)("taro-movable-view-core"),c=(0,o.Z)("taro-page-container-core"),s=(0,o.Z)("taro-scroll-view-core"),i=((0,o.Z)("taro-share-element-core"),(0,o.Z)("taro-swiper-core")),l=(0,o.Z)("taro-swiper-item-core"),u=(0,o.Z)("taro-view-core"),f=(0,o.Z)("taro-icon-core"),p=(0,o.Z)("taro-progress-core"),d=(0,o.Z)("taro-rich-text-core"),m=(0,o.Z)("taro-text-core"),h=(0,o.Z)("taro-button-core"),y=(0,o.Z)("taro-checkbox-core"),x=(0,o.Z)("taro-checkbox-group-core"),v=((0,o.Z)("taro-editor-core"),(0,o.Z)("taro-form-core")),b=((0,o.Z)("taro-keyboard-accessory-core"),(0,o.Z)("taro-label-core")),Z=(0,o.Z)("taro-picker-core"),g=(0,o.Z)("taro-picker-view-core"),j=(0,o.Z)("taro-picker-view-column-core"),_=(0,o.Z)("taro-radio-core"),w=(0,o.Z)("taro-radio-group-core"),N=(0,o.Z)("taro-slider-core"),G=(0,o.Z)("taro-switch-core"),O=(0,o.Z)("taro-textarea-core"),S=((0,o.Z)("taro-functional-page-navigator-core"),(0,o.Z)("taro-navigator-core"),(0,o.Z)("taro-audio-core"),(0,o.Z)("taro-camera-core")),k=(0,o.Z)("taro-image-core"),E=((0,o.Z)("taro-live-player-core"),(0,o.Z)("taro-video-core")),P=((0,o.Z)("taro-voip-room-core"),(0,o.Z)("taro-map-core"),(0,o.Z)("taro-canvas-core"),(0,o.Z)("taro-web-view-core"));(0,o.Z)("taro-ad-core"),(0,o.Z)("taro-ad-custom-core"),(0,o.Z)("taro-official-account-core"),(0,o.Z)("taro-open-data-core"),(0,o.Z)("taro-navigation-bar-core"),(0,o.Z)("taro-page-meta-core"),(0,o.Z)("taro-custom-wrapper-core")},"2214":function(e,r,t){var o=t(5827),n=t(1760),a=t(517),c=t(6830),s=t(8652),i=t(6014),l=t(3317),u=t(5935),f=t(766),p=t(3464);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _createSuper(e){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var t,o=(0,u.Z)(e);if(r){var n=(0,u.Z)(this).constructor;t=Reflect.construct(o,arguments,n)}else t=o.apply(this,arguments);return(0,l.Z)(this,t)}}p.createElement;var d="taro-scroll-view-core",m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,r,t){/^--/.test(r)?e.style.setProperty(r,t):"number"!=typeof t||m.test(r)?e.style[r]=t:e.style[r]=t+"px"}function updateProp(e,r,t,o,n){var a=e.ref.current,c=n[t],s=o?o[t]:void 0;if("children"!==t)if("classname"!==t.toLowerCase()){if("style"!==t){if(/^data-.+/.test(t)&&a.setAttribute(t,c),r===d){if("scrollTop"===t)return void(a.mpScrollTop=c);if("scrollLeft"===t)return void(a.mpScrollLeft=c);if("scrollIntoView"===t)return void(a.mpScrollIntoView=c)}if("function"==typeof c&&t.match(/^on[A-Z]/)){var i=t.substr(2).toLowerCase(),l=c;return r===d&&"scroll"===i&&(l=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([i,l]),a.addEventListener(i,l)}return"string"==typeof c||"number"==typeof c?(a.setAttribute(t,c),void(a[t]=c)):"boolean"==typeof c?c?(a[t]=!0,a.setAttribute(t,c)):(a[t]=!1,a.removeAttribute(t)):void(a[t]=c)}if("string"==typeof c)return void a.setAttribute(t,c);if(!c)return void a.removeAttribute(t);if(o)if("string"==typeof s)a.style.cssText="";else for(var u in s)updateStyle(a,u,"");for(var p in c)updateStyle(a,p,c[p])}else a.className=o?function getClassName(e,r,t){var o=Array.from(e.classList),n=(r.className||r.class||"").split(" "),a=(t.className||t.class||"").split(" "),c=[];return o.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(r){return r!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat((0,f.Z)(c),(0,f.Z)(a))).join(" ")}(a,o,n):c}r.Z=function reactifyWebComponent(e){var r=function(r){(0,i.Z)(Index,r);var t=_createSuper(Index);function Index(e){var r;return(0,c.Z)(this,Index),(r=t.call(this,e)).eventHandlers=[],r.ref=(0,p.createRef)(),r}return(0,s.Z)(Index,[{"key":"update","value":function update(r){var t=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(o){"children"===o||"key"===o||o in t.props||updateProp(t,e,o,r,t.props)})),Object.keys(this.props).forEach((function(o){updateProp(t,e,o,r,t.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,a.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(r){var t=(0,n.Z)(r,2),o=t[0],a=t[1];e.ref.current&&e.ref.current.removeEventListener(o,a)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,t=r.children,o=r.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),(0,p.createElement)(e,n,t)}}]),Index}(p.Component);return p.forwardRef((function(e,t){return p.createElement(r,_objectSpread(_objectSpread({},e),{},{"forwardRef":t}))}))}},"8502":function(e,r,t){t(4744);var o=t(3464),n=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),r.Fragment=a("react.fragment")}var c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,t){var o,a={},l=null,u=null;for(o in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)s.call(r,o)&&!i.hasOwnProperty(o)&&(a[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===a[o]&&(a[o]=r[o]);return{"$$typeof":n,"type":e,"key":l,"ref":u,"props":a,"_owner":c.current}}r.jsx=q,r.jsxs=q},"2922":function(e,r,t){e.exports=t(8502)},"7465":function(e,r,t){var o=t(5403),n=t(2922);r.Z=function Head(e){var r=e.title,t=e.desc;return(0,n.jsxs)(o.G7,{"className":"page-head","children":[(0,n.jsx)(o.G7,{"className":"page-head-title","children":r}),(0,n.jsx)(o.G7,{"className":"page-head-line"}),!!t&&(0,n.jsx)(o.xv,{"className":"page-head-desc","children":t})]})}},"3795":function(e,r,t){t.r(r),t.d(r,{"default":function(){return Size}});var o=t(5403),n=t(4664),a=t(7465),c=t(2922);function Size(){return(0,c.jsxs)(o.G7,{"className":"global-page","children":[(0,c.jsx)(o.G7,{"className":"global-page__header","children":(0,c.jsx)(a.Z,{"title":"unit"})}),(0,c.jsx)(o.G7,{"className":"global-page__body","children":(0,c.jsx)(o.G7,{"className":"global-page__body-example example","children":(0,c.jsx)(o.G7,{"className":"example-body","children":(0,c.jsx)(o.G7,{"children":"font-size: inherit"})})})}),(0,c.jsx)(o.G7,{"className":"global-page__body","children":(0,c.jsx)(o.G7,{"className":"global-page__body-example example","children":(0,c.jsxs)(o.G7,{"className":"example-body","children":[(0,c.jsx)(o.G7,{"className":"fs30px","children":"font-size: 30px"}),(0,c.jsx)(o.G7,{"className":"fs60px","children":"font-size: 60px"})]})})}),(0,c.jsx)(o.G7,{"className":"global-page__body","children":(0,c.jsx)(o.G7,{"className":"global-page__body-example example","children":(0,c.jsxs)(o.G7,{"className":"example-body","children":[(0,c.jsx)(o.G7,{"className":"fs15-px","children":"font-size: 15PX"}),(0,c.jsx)(o.G7,{"className":"fs30-px","children":"font-size: 30PX"})]})})}),(0,c.jsx)(o.G7,{"className":"global-page__body","children":(0,c.jsx)(o.G7,{"className":"global-page__body-example example","children":(0,c.jsxs)(o.G7,{"className":"example-body","children":[(0,c.jsx)(o.G7,{"className":"fs1rem","children":"font-size: 1rem"}),(0,c.jsx)(o.G7,{"className":"fs2rem","children":"font-size: 2rem"})]})})}),(0,c.jsx)(o.G7,{"className":"global-page__body","children":(0,c.jsx)(o.G7,{"className":"global-page__body-example example","children":(0,c.jsxs)(o.G7,{"className":"example-body","children":[(0,c.jsx)(o.G7,{"style":{"fontSize":n.ZPm.pxTransform(30)},"children":"pxTransform(30)"}),(0,c.jsx)(o.G7,{"style":{"fontSize":n.ZPm.pxTransform(60)},"children":"pxTransform(60)"})]})})}),(0,c.jsx)(o.G7,{"className":"global-page__body","children":(0,c.jsx)(o.G7,{"className":"global-page__body-example example","children":(0,c.jsxs)(o.G7,{"className":"example-body","children":[(0,c.jsx)(o.G7,{"className":"w-30","children":"width: 30%"}),(0,c.jsx)(o.G7,{"className":"w-60","children":"width: 60%"})]})})})]})}}}]);