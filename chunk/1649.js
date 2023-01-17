/*! For license information please see 1649.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[1649],{"4916":function(e,t,r){r.d(t,{"zx":function(){return C},"V1":function(){return E},"XZ":function(){return R},"cO":function(){return O},"l0":function(){return Z},"JO":function(){return N},"Ee":function(){return k},"II":function(){return I},"__":function(){return L},"ub":function(){return T},"Gt":function(){return F},"C3":function(){return P},"_z":function(){return G},"cW":function(){return S},"Nf":function(){return U},"$o":function(){return D},"Ex":function(){return A},"Y8":function(){return M},"FX":function(){return W},"Ho":function(){return H},"pf":function(){return J},"iR":function(){return V},"tq":function(){return $},"t3":function(){return z},"rs":function(){return B},"xv":function(){return X},"gx":function(){return Y},"nk":function(){return K},"G7":function(){return Q},"kh":function(){return ee}});var n=r(4971),o=r(390),i=function manipulatePropsFunction(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.dangerouslySetInnerHTML;return(0,o.Z)((0,o.Z)({},t),{},{"dangerouslySetInnerHTML":r})},c=r(7737),a=r(3907),u=r(5747),s=r(8944),f=r(5909),l=r(4401),d=r(8248),p=r(6035),v=r(9492),m=function setRef(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)},h=function mergeRefs(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){t.forEach((function(t){m(t,e)}))}},g=function camelToDashCase(e){return e.replace(/([A-Z])/g,(function(e){return"-".concat(e[0].toLowerCase())}))},y=function getClassName(e,t,r){var n=t.className||t.class,o=r.className||r.class,i=b(e),c=b(n?n.split(" "):[]),a=b(o?o.split(" "):[]),u=[];return i.forEach((function(e){c.has(e)?(u.push(e),c.delete(e)):a.has(e)||u.push(e)})),c.forEach((function(e){return u.push(e)})),u.join(" ")},x=function isCoveredByReact(e){if("undefined"==typeof document)return!0;var t="on"+e,r=t in document;if(!r){var n=document.createElement("div");n.setAttribute(t,"return;"),r="function"==typeof n[t]}return r},w=function syncEvent(e,t,r){var n=e.__events||(e.__events={}),o=n[t];o&&e.removeEventListener(t,o),e.addEventListener(t,n[t]=function handler(e){r&&r.call(this,e)})},b=function arrayToMap(e){var t=new Map;return e.forEach((function(e){return t.set(e,e)})),t},j=["children","forwardedRef","style","className","ref"],_=function createReactComponent(e,t,r,i){void 0!==i&&i();var m=function dashToPascalCase(e){return e.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join("")}(e),b=function(t){(0,l.Z)(ReactComponent,t);var i=(0,d.Z)(ReactComponent);function ReactComponent(e){var t;return(0,u.Z)(this,ReactComponent),t=i.call(this,e),(0,p.Z)((0,f.Z)(t),"componentEl",void 0),(0,p.Z)((0,f.Z)(t),"setComponentElRef",(function(e){t.componentEl=e})),t}return(0,s.Z)(ReactComponent,[{"key":"componentDidMount","value":function componentDidMount(){this.componentDidUpdate(this.props)}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){!function attachProps(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof Element){var n=y(e.classList,t,r);""!==n&&(e.className=n),Object.keys(t).forEach((function(r){if("children"!==r&&"style"!==r&&"ref"!==r&&"class"!==r&&"className"!==r&&"forwardedRef"!==r)if(0===r.indexOf("on")&&r[2]===r[2].toUpperCase()){var n=r.substring(2).toLowerCase();x(n)||w(e,n,t[r])}else e[r]=t[r],"string"===(0,c.Z)(t[r])&&e.setAttribute(g(r),t[r])}))}}(this.componentEl,this.props,e)}},{"key":"render","value":function render(){var t=this.props,i=t.children,u=t.forwardedRef,s=t.style,f=(t.className,t.ref,(0,a.Z)(t,j)),l=Object.keys(f).reduce((function(e,t){var r=f[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){var n=t.substring(2).toLowerCase();"undefined"!=typeof document&&x(n)&&(e[t]=r)}else{var o=(0,c.Z)(r);"string"!==o&&"boolean"!==o&&"number"!==o||(e[g(t)]=r)}return e}),{});r&&(l=r(this.props,l));var d=(0,o.Z)((0,o.Z)({},l),{},{"ref":h(u,this.setComponentElRef),"style":s});return(0,n.createElement)(e,d,i)}}],[{"key":"displayName","get":function get(){return m}}]),ReactComponent}(n.Component);return t&&(b.contextType=t),function createForwardRef(e,t){var r=function forwardRef(t,r){return(0,v.jsx)(e,(0,o.Z)((0,o.Z)({},t),{},{"forwardedRef":r}))};return r.displayName=t,n.forwardRef(r)}(b,m)},C=_("taro-button-core",void 0,i),E=_("taro-camera-core",void 0,i),R=_("taro-checkbox-core",void 0,i),O=_("taro-checkbox-group-core",void 0,i),Z=_("taro-form-core",void 0,i),N=_("taro-icon-core",void 0,i),k=_("taro-image-core",void 0,i),I=_("taro-input-core",void 0,i),L=_("taro-label-core",void 0,i),T=_("taro-movable-area-core",void 0,i),F=_("taro-movable-view-core",void 0,i),P=_("taro-navigator-core",void 0,i),G=_("taro-page-container-core",void 0,i),S=_("taro-picker-core",void 0,i),D=_("taro-picker-view-column-core",void 0,i),U=_("taro-picker-view-core",void 0,i),A=_("taro-progress-core",void 0,i),M=_("taro-radio-core",void 0,i),W=_("taro-radio-group-core",void 0,i),H=_("taro-rich-text-core",void 0,i),J=_("taro-scroll-view-core",void 0,i),V=_("taro-slider-core",void 0,i),$=_("taro-swiper-core",void 0,i),z=_("taro-swiper-item-core",void 0,i),B=_("taro-switch-core",void 0,i),X=_("taro-text-core",void 0,i),Y=_("taro-textarea-core",void 0,i),K=_("taro-video-core",void 0,i),Q=_("taro-view-core",void 0,i),ee=_("taro-web-view-core",void 0,i)},"6868":function(e,t,r){var n=r(4971),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var n,i={},s=null,f=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)c.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{"$$typeof":o,"type":e,"key":s,"ref":f,"props":i,"_owner":a.current}}t.Fragment=i,t.jsx=q,t.jsxs=q},"9492":function(e,t,r){e.exports=r(6868)},"3108":function(e,t,r){var n=r(4916),o=r(9492);t.Z=function Head(e){var t=e.title,r=e.desc;return(0,o.jsxs)(n.G7,{"className":"page-head","children":[(0,o.jsx)(n.G7,{"className":"page-head-title","children":t}),(0,o.jsx)(n.G7,{"className":"page-head-line"}),!!r&&(0,o.jsx)(n.xv,{"className":"page-head-desc","children":r})]})}},"1649":function(e,t,r){r.r(t),r.d(t,{"default":function(){return ImageView}});var n=r(4916),o=r(3108),i=r(9845),c=r(9492);function ImageView(){return(0,c.jsxs)(n.G7,{"className":"components-page","children":[(0,c.jsx)(n.G7,{"className":"components-page__header","children":(0,c.jsx)(o.Z,{"title":"Image"})}),["aspectFill","aspectFit","scaleToFill","center","widthFix"].map((function(e){return(0,c.jsx)(a,{"mode":e,"src":i},e)}))]})}var a=function ImageContainer(e){var t=e.mode,r=void 0===t?"scaleToFill":t,o=e.src;return(0,c.jsxs)(n.G7,{"className":"imgContainer","children":[(0,c.jsx)(n.Ee,{"className":"imgContainer-left","mode":r,"src":o}),(0,c.jsx)(n.G7,{"style":{"flex":1,"justifyContent":"center","alignItems":"center"},"children":(0,c.jsx)(n.xv,{"style":{"fontWeight":"bold"},"children":"scaleToFill"==r?"scaleToFill（默认）":r})})]})}},"9845":function(e,t,r){e.exports=r.p+"static/images/assets/common/taro_logo.jpg"},"3907":function(e,t,r){function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{"Z":function(){return _objectWithoutProperties}})}}]);