/*! For license information please see 1888.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[1888],{"4916":function(e,r,n){n.d(r,{"zx":function(){return N},"V1":function(){return k},"XZ":function(){return E},"cO":function(){return R},"l0":function(){return C},"JO":function(){return Z},"Ee":function(){return G},"II":function(){return O},"__":function(){return L},"ub":function(){return P},"Gt":function(){return S},"C3":function(){return T},"_z":function(){return D},"cW":function(){return I},"Nf":function(){return A},"$o":function(){return U},"Ex":function(){return M},"Y8":function(){return F},"FX":function(){return W},"Ho":function(){return z},"pf":function(){return H},"iR":function(){return J},"tq":function(){return $},"t3":function(){return B},"rs":function(){return X},"xv":function(){return Y},"gx":function(){return V},"nk":function(){return K},"G7":function(){return Q},"kh":function(){return ee}});var t=n(4971),o=n(390),a=function manipulatePropsFunction(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.dangerouslySetInnerHTML;return(0,o.Z)((0,o.Z)({},r),{},{"dangerouslySetInnerHTML":n})},c=n(7737),i=n(3907),s=n(5747),u=n(8944),l=n(5909),f=n(4401),d=n(8248),p=n(6035),v=n(9492),m=function setRef(e,r){"function"==typeof e?e(r):null!=e&&(e.current=r)},h=function mergeRefs(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(e){r.forEach((function(r){m(r,e)}))}},b=function camelToDashCase(e){return e.replace(/([A-Z])/g,(function(e){return"-".concat(e[0].toLowerCase())}))},g=function getClassName(e,r,n){var t=r.className||r.class,o=n.className||n.class,a=_(e),c=_(t?t.split(" "):[]),i=_(o?o.split(" "):[]),s=[];return a.forEach((function(e){c.has(e)?(s.push(e),c.delete(e)):i.has(e)||s.push(e)})),c.forEach((function(e){return s.push(e)})),s.join(" ")},x=function isCoveredByReact(e){if("undefined"==typeof document)return!0;var r="on"+e,n=r in document;if(!n){var t=document.createElement("div");t.setAttribute(r,"return;"),n="function"==typeof t[r]}return n},y=function syncEvent(e,r,n){var t=e.__events||(e.__events={}),o=t[r];o&&e.removeEventListener(r,o),e.addEventListener(r,t[r]=function handler(e){n&&n.call(this,e)})},_=function arrayToMap(e){var r=new Map;return e.forEach((function(e){return r.set(e,e)})),r},j=["children","forwardedRef","style","className","ref"],w=function createReactComponent(e,r,n,a){void 0!==a&&a();var m=function dashToPascalCase(e){return e.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join("")}(e),_=function(r){(0,f.Z)(ReactComponent,r);var a=(0,d.Z)(ReactComponent);function ReactComponent(e){var r;return(0,s.Z)(this,ReactComponent),r=a.call(this,e),(0,p.Z)((0,l.Z)(r),"componentEl",void 0),(0,p.Z)((0,l.Z)(r),"setComponentElRef",(function(e){r.componentEl=e})),r}return(0,u.Z)(ReactComponent,[{"key":"componentDidMount","value":function componentDidMount(){this.componentDidUpdate(this.props)}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){!function attachProps(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof Element){var t=g(e.classList,r,n);""!==t&&(e.className=t),Object.keys(r).forEach((function(n){if("children"!==n&&"style"!==n&&"ref"!==n&&"class"!==n&&"className"!==n&&"forwardedRef"!==n)if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){var t=n.substring(2).toLowerCase();x(t)||y(e,t,r[n])}else e[n]=r[n],"string"===(0,c.Z)(r[n])&&e.setAttribute(b(n),r[n])}))}}(this.componentEl,this.props,e)}},{"key":"render","value":function render(){var r=this.props,a=r.children,s=r.forwardedRef,u=r.style,l=(r.className,r.ref,(0,i.Z)(r,j)),f=Object.keys(l).reduce((function(e,r){var n=l[r];if(0===r.indexOf("on")&&r[2]===r[2].toUpperCase()){var t=r.substring(2).toLowerCase();"undefined"!=typeof document&&x(t)&&(e[r]=n)}else{var o=(0,c.Z)(n);"string"!==o&&"boolean"!==o&&"number"!==o||(e[b(r)]=n)}return e}),{});n&&(f=n(this.props,f));var d=(0,o.Z)((0,o.Z)({},f),{},{"ref":h(s,this.setComponentElRef),"style":u});return(0,t.createElement)(e,d,a)}}],[{"key":"displayName","get":function get(){return m}}]),ReactComponent}(t.Component);return r&&(_.contextType=r),function createForwardRef(e,r){var n=function forwardRef(r,n){return(0,v.jsx)(e,(0,o.Z)((0,o.Z)({},r),{},{"forwardedRef":n}))};return n.displayName=r,t.forwardRef(n)}(_,m)},N=w("taro-button-core",void 0,a),k=w("taro-camera-core",void 0,a),E=w("taro-checkbox-core",void 0,a),R=w("taro-checkbox-group-core",void 0,a),C=w("taro-form-core",void 0,a),Z=w("taro-icon-core",void 0,a),G=w("taro-image-core",void 0,a),O=w("taro-input-core",void 0,a),L=w("taro-label-core",void 0,a),P=w("taro-movable-area-core",void 0,a),S=w("taro-movable-view-core",void 0,a),T=w("taro-navigator-core",void 0,a),D=w("taro-page-container-core",void 0,a),I=w("taro-picker-core",void 0,a),U=w("taro-picker-view-column-core",void 0,a),A=w("taro-picker-view-core",void 0,a),M=w("taro-progress-core",void 0,a),F=w("taro-radio-core",void 0,a),W=w("taro-radio-group-core",void 0,a),z=w("taro-rich-text-core",void 0,a),H=w("taro-scroll-view-core",void 0,a),J=w("taro-slider-core",void 0,a),$=w("taro-swiper-core",void 0,a),B=w("taro-swiper-item-core",void 0,a),X=w("taro-switch-core",void 0,a),Y=w("taro-text-core",void 0,a),V=w("taro-textarea-core",void 0,a),K=w("taro-video-core",void 0,a),Q=w("taro-view-core",void 0,a),ee=w("taro-web-view-core",void 0,a)},"6868":function(e,r,n){var t=n(4971),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,n){var t,a={},u=null,l=null;for(t in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,t)&&!s.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{"$$typeof":o,"type":e,"key":u,"ref":l,"props":a,"_owner":i.current}}r.Fragment=a,r.jsx=q,r.jsxs=q},"9492":function(e,r,n){e.exports=n(6868)},"3108":function(e,r,n){var t=n(4916),o=n(9492);r.Z=function Head(e){var r=e.title,n=e.desc;return(0,o.jsxs)(t.G7,{"className":"page-head","children":[(0,o.jsx)(t.G7,{"className":"page-head-title","children":r}),(0,o.jsx)(t.G7,{"className":"page-head-line"}),!!n&&(0,o.jsx)(t.xv,{"className":"page-head-desc","children":n})]})}},"1888":function(e,r,n){n.r(r),n.d(r,{"default":function(){return Size}});var t=n(4916),o=n(3108),a=n(9492),c="rn weapp";function Size(){return(0,a.jsxs)(t.G7,{"className":"global-page","children":[(0,a.jsx)(t.G7,{"className":"global-page__header","children":(0,a.jsx)(o.Z,{"title":"style.".concat("h5",".scss")})}),(0,a.jsx)(t.G7,{"className":"global-page__body","children":(0,a.jsx)(t.G7,{"className":"global-page__body-example example","children":(0,a.jsx)(t.G7,{"className":"example-body","children":(0,a.jsx)(t.G7,{"className":"style-color","children":"default: black, h5: red, weapp: green, rn: blue"})})})}),(0,a.jsx)(t.G7,{"className":"global-page__header","children":(0,a.jsx)(o.Z,{"title":"/* #ifdef ".concat("h5"," */ /* #endif */")})}),(0,a.jsx)(t.G7,{"className":"global-page__body","children":(0,a.jsx)(t.G7,{"className":"global-page__body-example example","children":(0,a.jsxs)(t.G7,{"className":"example-body","children":[(0,a.jsx)(t.G7,{"className":"ifdef-color","children":"default: black, h5: red, weapp: green, rn: blue"}),(0,a.jsx)(t.G7,{"className":"ifdef-bgc","children":"default: black, h5: red, weapp: green, rn: blue"})]})})}),(0,a.jsx)(t.G7,{"className":"global-page__header","children":(0,a.jsx)(o.Z,{"title":"/* #ifndef ".concat(c," */ /* #endif */")})}),(0,a.jsx)(t.G7,{"className":"global-page__body","children":(0,a.jsx)(t.G7,{"className":"global-page__body-example example","children":(0,a.jsxs)(t.G7,{"className":"example-body","children":[(0,a.jsx)(t.G7,{"className":"ifndef-color","children":"default: black, h5: red, weapp: green, rn: blue"}),(0,a.jsx)(t.G7,{"className":"ifndef-bgc","children":"default: black, h5: red, weapp: green, rn: blue"})]})})})]})}},"3907":function(e,r,n){function _objectWithoutProperties(e,r){if(null==e)return{};var n,t,o=function _objectWithoutPropertiesLoose(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(r,{"Z":function(){return _objectWithoutProperties}})}}]);