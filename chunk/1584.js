/*! For license information please see 1584.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[1584],{"4916":function(e,t,n){n.d(t,{"zx":function(){return w},"V1":function(){return N},"XZ":function(){return k},"cO":function(){return j},"l0":function(){return M},"JO":function(){return S},"Ee":function(){return T},"II":function(){return B},"__":function(){return D},"ub":function(){return Z},"Gt":function(){return E},"C3":function(){return Q},"_z":function(){return L},"cW":function(){return P},"Nf":function(){return G},"$o":function(){return H},"Ex":function(){return O},"Y8":function(){return z},"FX":function(){return _},"Ho":function(){return R},"pf":function(){return F},"iR":function(){return U},"tq":function(){return W},"t3":function(){return Y},"rs":function(){return J},"xv":function(){return V},"gx":function(){return K},"nk":function(){return X},"G7":function(){return $},"kh":function(){return ee}});var i=n(4971),o=n(390),A=function manipulatePropsFunction(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.dangerouslySetInnerHTML;return(0,o.Z)((0,o.Z)({},t),{},{"dangerouslySetInnerHTML":n})},r=n(7737),a=n(3907),c=n(5747),s=n(8944),l=n(5909),u=n(4401),d=n(8248),m=n(6035),f=n(9492),g=function setRef(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)},p=function mergeRefs(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){g(t,e)}))}},h=function camelToDashCase(e){return e.replace(/([A-Z])/g,(function(e){return"-".concat(e[0].toLowerCase())}))},y=function getClassName(e,t,n){var i=t.className||t.class,o=n.className||n.class,A=I(e),r=I(i?i.split(" "):[]),a=I(o?o.split(" "):[]),c=[];return A.forEach((function(e){r.has(e)?(c.push(e),r.delete(e)):a.has(e)||c.push(e)})),r.forEach((function(e){return c.push(e)})),c.join(" ")},b=function isCoveredByReact(e){if("undefined"==typeof document)return!0;var t="on"+e,n=t in document;if(!n){var i=document.createElement("div");i.setAttribute(t,"return;"),n="function"==typeof i[t]}return n},v=function syncEvent(e,t,n){var i=e.__events||(e.__events={}),o=i[t];o&&e.removeEventListener(t,o),e.addEventListener(t,i[t]=function handler(e){n&&n.call(this,e)})},I=function arrayToMap(e){var t=new Map;return e.forEach((function(e){return t.set(e,e)})),t},x=["children","forwardedRef","style","className","ref"],C=function createReactComponent(e,t,n,A){void 0!==A&&A();var g=function dashToPascalCase(e){return e.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join("")}(e),I=function(t){(0,u.Z)(ReactComponent,t);var A=(0,d.Z)(ReactComponent);function ReactComponent(e){var t;return(0,c.Z)(this,ReactComponent),t=A.call(this,e),(0,m.Z)((0,l.Z)(t),"componentEl",void 0),(0,m.Z)((0,l.Z)(t),"setComponentElRef",(function(e){t.componentEl=e})),t}return(0,s.Z)(ReactComponent,[{"key":"componentDidMount","value":function componentDidMount(){this.componentDidUpdate(this.props)}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){!function attachProps(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof Element){var i=y(e.classList,t,n);""!==i&&(e.className=i),Object.keys(t).forEach((function(n){if("children"!==n&&"style"!==n&&"ref"!==n&&"class"!==n&&"className"!==n&&"forwardedRef"!==n)if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){var i=n.substring(2).toLowerCase();b(i)||v(e,i,t[n])}else e[n]=t[n],"string"===(0,r.Z)(t[n])&&e.setAttribute(h(n),t[n])}))}}(this.componentEl,this.props,e)}},{"key":"render","value":function render(){var t=this.props,A=t.children,c=t.forwardedRef,s=t.style,l=(t.className,t.ref,(0,a.Z)(t,x)),u=Object.keys(l).reduce((function(e,t){var n=l[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){var i=t.substring(2).toLowerCase();"undefined"!=typeof document&&b(i)&&(e[t]=n)}else{var o=(0,r.Z)(n);"string"!==o&&"boolean"!==o&&"number"!==o||(e[h(t)]=n)}return e}),{});n&&(u=n(this.props,u));var d=(0,o.Z)((0,o.Z)({},u),{},{"ref":p(c,this.setComponentElRef),"style":s});return(0,i.createElement)(e,d,A)}}],[{"key":"displayName","get":function get(){return g}}]),ReactComponent}(i.Component);return t&&(I.contextType=t),function createForwardRef(e,t){var n=function forwardRef(t,n){return(0,f.jsx)(e,(0,o.Z)((0,o.Z)({},t),{},{"forwardedRef":n}))};return n.displayName=t,i.forwardRef(n)}(I,g)},w=C("taro-button-core",void 0,A),N=C("taro-camera-core",void 0,A),k=C("taro-checkbox-core",void 0,A),j=C("taro-checkbox-group-core",void 0,A),M=C("taro-form-core",void 0,A),S=C("taro-icon-core",void 0,A),T=C("taro-image-core",void 0,A),B=C("taro-input-core",void 0,A),D=C("taro-label-core",void 0,A),Z=C("taro-movable-area-core",void 0,A),E=C("taro-movable-view-core",void 0,A),Q=C("taro-navigator-core",void 0,A),L=C("taro-page-container-core",void 0,A),P=C("taro-picker-core",void 0,A),H=C("taro-picker-view-column-core",void 0,A),G=C("taro-picker-view-core",void 0,A),O=C("taro-progress-core",void 0,A),z=C("taro-radio-core",void 0,A),_=C("taro-radio-group-core",void 0,A),R=C("taro-rich-text-core",void 0,A),F=C("taro-scroll-view-core",void 0,A),U=C("taro-slider-core",void 0,A),W=C("taro-swiper-core",void 0,A),Y=C("taro-swiper-item-core",void 0,A),J=C("taro-switch-core",void 0,A),V=C("taro-text-core",void 0,A),K=C("taro-textarea-core",void 0,A),X=C("taro-video-core",void 0,A),$=C("taro-view-core",void 0,A),ee=C("taro-web-view-core",void 0,A)},"8213":function(e,t,n){n.d(t,{"a":function(){return o},"$":function(){return A}});var i=n(1627),o=(0,i.tA)("openSetting"),A=(0,i.tA)("getSetting")},"618":function(e,t,n){n.d(t,{"Zk":function(){return v},"Cy":function(){return x},"QP":function(){return b},"K4":function(){return I},"CF":function(){return y}});var i=n(1639),o=n(4159),A=n(2583),r=n(1627),a=n(7138),c=n(5747),s=n(8944),l=function noop(){},u=function(){function ActionSheet(){(0,c.Z)(this,ActionSheet),this.options={"itemList":[],"itemColor":"#000000","success":l,"fail":l,"complete":l},this.style={"maskStyle":{"position":"fixed","z-index":"1000","top":"0","right":"0","left":"0","bottom":"0","background":"rgba(0,0,0,0.6)"},"actionSheetStyle":{"z-index":"4999","position":"fixed","left":"0","bottom":"0","-webkit-transform":"translate(0, 100%)","transform":"translate(0, 100%)","width":"100%","line-height":"1.6","background":"#EFEFF4","-webkit-transition":"-webkit-transform .3s","transition":"transform .3s"},"menuStyle":{"background-color":"#FCFCFD"},"cellStyle":{"position":"relative","padding":"10px 0","text-align":"center","font-size":"18px"},"cancelStyle":{"margin-top":"6px","padding":"10px 0","text-align":"center","font-size":"18px","color":"#000000","background-color":"#FCFCFD"}},this.lastConfig={}}return(0,s.Z)(ActionSheet,[{"key":"create","value":function create(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){var i=e.style,o=i.maskStyle,A=i.actionSheetStyle,a=i.menuStyle,c=i.cellStyle,s=i.cancelStyle,l=Object.assign(Object.assign({},e.options),t);e.lastConfig=l,e.el=document.createElement("div"),e.el.className="taro__actionSheet",e.el.style.opacity="0",e.el.style.transition="opacity 0.2s linear",e.mask=document.createElement("div"),e.mask.setAttribute("style",(0,r.b9)(o)),e.actionSheet=document.createElement("div"),e.actionSheet.setAttribute("style",(0,r.b9)(A)),e.menu=document.createElement("div"),e.menu.setAttribute("style",(0,r.b9)(Object.assign(Object.assign({},a),{"color":l.itemColor}))),e.cells=l.itemList.map((function(t,i){var o=document.createElement("div");return o.className="taro-actionsheet__cell",o.setAttribute("style",(0,r.b9)(c)),o.textContent=t,o.dataset.tapIndex="".concat(i),o.onclick=function(t){e.hide();var i=t.currentTarget,o=Number(null==i?void 0:i.dataset.tapIndex)||0;n(o)},o})),e.cancel=document.createElement("div"),e.cancel.setAttribute("style",(0,r.b9)(s)),e.cancel.textContent="取消",e.cells.forEach((function(t){return e.menu.appendChild(t)})),e.actionSheet.appendChild(e.menu),e.actionSheet.appendChild(e.cancel),e.el.appendChild(e.mask),e.el.appendChild(e.actionSheet);var u=function cb(){e.hide(),n("cancel")};e.mask.onclick=u,e.cancel.onclick=u,document.body.appendChild(e.el),setTimeout((function(){e.el.style.opacity="1",(0,r.B2)(e.actionSheet,"translate(0, 0)")}),0)}))}},{"key":"show","value":function show(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){var i=Object.assign(Object.assign({},e.options),t);e.lastConfig=i,e.hideOpacityTimer&&clearTimeout(e.hideOpacityTimer),e.hideDisplayTimer&&clearTimeout(e.hideDisplayTimer),i.itemColor&&(e.menu.style.color=i.itemColor);var o=e.style.cellStyle;i.itemList.forEach((function(t,i){var A;e.cells[i]?A=e.cells[i]:((A=document.createElement("div")).className="taro-actionsheet__cell",A.setAttribute("style",(0,r.b9)(o)),A.dataset.tapIndex="".concat(i),e.cells.push(A),e.menu.appendChild(A)),A.textContent=t,A.onclick=function(t){e.hide();var i=t.currentTarget,o=Number(null==i?void 0:i.dataset.tapIndex)||0;n(o)}}));var A=e.cells.length,a=i.itemList.length;if(A>a){for(var c=a;c<A;c++)e.menu.removeChild(e.cells[c]);e.cells.splice(a)}var s=function cb(){e.hide(),n("cancel")};e.mask.onclick=s,e.cancel.onclick=s,e.el.style.display="block",setTimeout((function(){e.el.style.opacity="1",(0,r.B2)(e.actionSheet,"translate(0, 0)")}),0)}))}},{"key":"hide","value":function hide(){var e=this;this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.hideOpacityTimer=setTimeout((function(){e.el.style.opacity="0",(0,r.B2)(e.actionSheet,"translate(0, 100%)"),e.hideDisplayTimer=setTimeout((function(){e.el.style.display="none"}),200)}),0)}}]),ActionSheet}(),d=function(){function Modal(){(0,c.Z)(this,Modal),this.options={"title":"","content":"","showCancel":!0,"cancelText":"取消","cancelColor":"#000000","confirmText":"确定","confirmColor":"#3CC51F"},this.style={"maskStyle":{"position":"fixed","z-index":"1000","top":"0","right":"0","left":"0","bottom":"0","background":"rgba(0,0,0,0.6)"},"modalStyle":{"z-index":"4999","position":"fixed","top":"50%","left":"50%","transform":"translate(-50%, -50%)","width":"80%","max-width":"300px","border-radius":"3px","text-align":"center","line-height":"1.6","overflow":"hidden","background":"#FFFFFF"},"titleStyle":{"padding":"20px 24px 9px","font-size":"18px"},"textStyle":{"padding":"0 24px 12px","min-height":"40px","font-size":"15px","line-height":"1.3","color":"#808080"},"footStyle":{"position":"relative","line-height":"48px","font-size":"18px","display":"flex"},"btnStyle":{"position":"relative","-webkit-box-flex":"1","-webkit-flex":"1","flex":"1"}}}return(0,s.Z)(Modal,[{"key":"create","value":function create(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){var i,o,a=e.style,c=a.maskStyle,s=a.modalStyle,l=a.titleStyle,u=a.textStyle,d=a.footStyle,m=a.btnStyle,f=Object.assign(Object.assign({},e.options),t);e.el=document.createElement("div"),e.el.className="taro__modal",e.el.style.opacity="0",e.el.style.transition="opacity 0.2s linear";var g=document.createElement("div");g.className="taro-modal__mask",g.setAttribute("style",(0,r.b9)(c));var p=document.createElement("div");p.className="taro-modal__content",p.setAttribute("style",(0,r.b9)(s));var h=f.title?l:Object.assign(Object.assign({},l),{"display":"none"});e.title=document.createElement("div"),e.title.className="taro-modal__title",e.title.setAttribute("style",(0,r.b9)(h)),e.title.textContent=f.title;var y=f.title?u:Object.assign(Object.assign({},u),{"padding":"40px 20px 26px","color":"#353535"});e.text=document.createElement("div"),e.text.className="taro-modal__text",e.text.setAttribute("style",(0,r.b9)(y)),e.text.textContent=f.content;var b=document.createElement("div");b.className="taro-modal__foot",b.setAttribute("style",(0,r.b9)(d));var v=Object.assign(Object.assign({},m),{"color":f.cancelColor,"display":f.showCancel?"block":"none"});e.cancel=document.createElement("div"),e.cancel.className="taro-model__btn taro-model__cancel",e.cancel.setAttribute("style",(0,r.b9)(v)),e.cancel.textContent=f.cancelText,e.cancel.onclick=function(){e.hide(),n("cancel")},e.confirm=document.createElement("div"),e.confirm.className="taro-model__btn taro-model__confirm",e.confirm.setAttribute("style",(0,r.b9)(m)),e.confirm.style.color=f.confirmColor,e.confirm.textContent=f.confirmText,e.confirm.onclick=function(){e.hide(),n("confirm")},b.appendChild(e.cancel),b.appendChild(e.confirm),p.appendChild(e.title),p.appendChild(e.text),p.appendChild(b),e.el.appendChild(g),e.el.appendChild(p),document.body.appendChild(e.el),setTimeout((function(){e.el.style.opacity="1"}),0),e.currentPath=null!==(o=null===(i=A.GY.page)||void 0===i?void 0:i.path)&&void 0!==o?o:(0,r.fF)()}))}},{"key":"show","value":function show(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){var i,o,a=Object.assign(Object.assign({},e.options),t);e.hideOpacityTimer&&clearTimeout(e.hideOpacityTimer),e.hideDisplayTimer&&clearTimeout(e.hideDisplayTimer);var c=e.style.textStyle;if(a.title)e.title.textContent=a.title,e.title.style.display="block",e.text.setAttribute("style",(0,r.b9)(c));else{e.title.textContent="",e.title.style.display="none";var s=Object.assign(Object.assign({},c),{"padding":"40px 20px 26px","color":"#353535"});e.text.setAttribute("style",(0,r.b9)(s))}e.text.textContent=a.content||"",e.cancel.style.display=a.showCancel?"block":"none",e.cancel.textContent=a.cancelText||"",e.cancel.style.color=a.cancelColor||"",e.confirm.textContent=a.confirmText||"",e.confirm.style.color=a.confirmColor||"",e.cancel.onclick=function(){e.hide(),n("cancel")},e.confirm.onclick=function(){e.hide(),n("confirm")},e.el.style.display="block",setTimeout((function(){e.el.style.opacity="1"}),0),e.currentPath=null!==(o=null===(i=A.GY.page)||void 0===i?void 0:i.path)&&void 0!==o?o:(0,r.fF)()}))}},{"key":"hide","value":function hide(){var e=this;this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.currentPath=null,this.hideOpacityTimer=setTimeout((function(){e.el.style.opacity="0",e.hideDisplayTimer=setTimeout((function(){e.el.style.display="none"}),200)}),0)}}]),Modal}(),m=function(){function Toast(){(0,c.Z)(this,Toast),this.options={"title":"","icon":"none","image":"","duration":1500,"mask":!1},this.style={"maskStyle":{"position":"fixed","z-index":"1000","top":"0","right":"0","left":"0","bottom":"0"},"toastStyle":{"z-index":"5000","box-sizing":"border-box","display":"flex","flex-direction":"column","justify-content":"center","-webkit-justify-content":"center","position":"fixed","top":"50%","left":"50%","min-width":"120px","max-width":"200px","min-height":"120px","padding":"15px","transform":"translate(-50%, -50%)","border-radius":"5px","text-align":"center","line-height":"1.6","color":"#FFFFFF","background":"rgba(17, 17, 17, 0.7)"},"successStyle":{"margin":"6px auto","width":"38px","height":"38px","background":"transparent url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjM5NTQ4OTYzMjA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzNDgiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNMjE5Ljk1MiA1MTIuNTc2bDIxMC40MzIgMjEwLjQzMi00NS4yNDggNDUuMjU2LTIxMC40MzItMjEwLjQzMnoiIHAtaWQ9IjQzNDkiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNzk5LjY3MiAyNjIuMjY0bDQ1LjI1NiA0NS4yNTYtNDYwLjQ2NCA0NjAuNDY0LTQ1LjI1Ni00NS4yNTZ6IiBwLWlkPSI0MzUwIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+) no-repeat","background-size":"100%"},"errrorStyle":{"margin":"6px auto","width":"38px","height":"38px","background":"transparent url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjM5NTUxMDU1MTgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0MDc2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNTggNjQgNjQgMjY0LjU4IDY0IDUxMnMyMDAuNTggNDQ4IDQ0OCA0NDggNDQ4LTIwMC41OCA0NDgtNDQ4Uzc1OS40MiA2NCA1MTIgNjR6IG0wIDc1MmEzNiAzNiAwIDEgMSAzNi0zNiAzNiAzNiAwIDAgMS0zNiAzNnogbTUxLjgzLTU1MS45NUw1NDggNjM2YTM2IDM2IDAgMCAxLTcyIDBsLTE1LjgzLTM3MS45NWMtMC4xLTEuMzMtMC4xNy0yLjY4LTAuMTctNC4wNWE1MiA1MiAwIDAgMSAxMDQgMGMwIDEuMzctMC4wNyAyLjcyLTAuMTcgNC4wNXoiIHAtaWQ9IjE0MDc3IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+) no-repeat","background-size":"100%"},"loadingStyle":{"margin":"6px auto","width":"38px","height":"38px","-webkit-animation":"taroLoading 1s steps(12, end) infinite","animation":"taroLoading 1s steps(12, end) infinite","background":"transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat","background-size":"100%"},"imageStyle":{"margin":"6px auto","width":"40px","height":"40px","background":"transparent no-repeat","background-size":"100%"},"textStyle":{"margin":"0","font-size":"16px"}}}return(0,s.Z)(Toast,[{"key":"create","value":function create(){var e,t,n=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"toast",a=this.style,c=a.maskStyle,s=a.toastStyle,l=a.successStyle,u=a.errrorStyle,d=a.loadingStyle,m=a.imageStyle,f=a.textStyle,g=Object.assign(Object.assign(Object.assign({},this.options),i),{"_type":o});if(this.el=document.createElement("div"),this.el.className="taro__toast",this.el.style.opacity="0",this.el.style.transition="opacity 0.1s linear",this.mask=document.createElement("div"),this.mask.setAttribute("style",(0,r.b9)(c)),this.mask.style.display=g.mask?"block":"none",this.icon=document.createElement("p"),g.image)this.icon.setAttribute("style",(0,r.b9)(Object.assign(Object.assign({},m),{"background-image":"url(".concat(g.image,")")})));else{var p="loading"===g.icon?d:"error"===g.icon?u:l;this.icon.setAttribute("style",(0,r.b9)(Object.assign(Object.assign({},p),"none"===g.icon?{"display":"none"}:{})))}return this.toast=document.createElement("div"),this.toast.setAttribute("style",(0,r.b9)(Object.assign(Object.assign({},s),"none"===g.icon?{"min-height":"0","padding":"10px 15px"}:{}))),this.title=document.createElement("p"),this.title.setAttribute("style",(0,r.b9)(f)),this.title.textContent=g.title,this.toast.appendChild(this.icon),this.toast.appendChild(this.title),this.el.appendChild(this.mask),this.el.appendChild(this.toast),document.body.appendChild(this.el),setTimeout((function(){n.el.style.opacity="1"}),0),this.type=g._type,g.duration>=0&&this.hide(g.duration,this.type),this.currentPath=null!==(t=null===(e=A.GY.page)||void 0===e?void 0:e.path)&&void 0!==t?t:(0,r.fF)(),""}},{"key":"show","value":function show(){var e,t,n=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"toast",a=Object.assign(Object.assign(Object.assign({},this.options),i),{"_type":o});this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.title.textContent=a.title||"",this.mask.style.display=a.mask?"block":"none";var c=this.style,s=c.toastStyle,l=c.successStyle,u=c.errrorStyle,d=c.loadingStyle,m=c.imageStyle;if(a.image)this.icon.setAttribute("style",(0,r.b9)(Object.assign(Object.assign({},m),{"background-image":"url(".concat(a.image,")")})));else if(!a.image&&a.icon){var f="loading"===a.icon?d:"error"===a.icon?u:l;this.icon.setAttribute("style",(0,r.b9)(Object.assign(Object.assign({},f),"none"===a.icon?{"display":"none"}:{})))}return this.toast.setAttribute("style",(0,r.b9)(Object.assign(Object.assign({},s),"none"===a.icon?{"min-height":"0","padding":"10px 15px"}:{}))),this.el.style.display="block",setTimeout((function(){n.el.style.opacity="1"}),0),this.type=a._type,a.duration>=0&&this.hide(a.duration,this.type),this.currentPath=null!==(t=null===(e=A.GY.page)||void 0===e?void 0:e.path)&&void 0!==t?t:(0,r.fF)(),""}},{"key":"hide","value":function hide(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;this.type===n&&(this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.currentPath=null,this.hideOpacityTimer=setTimeout((function(){e.el.style.opacity="0",e.hideDisplayTimer=setTimeout((function(){e.el.style.display="none"}),100)}),t))}}]),Toast}(),__awaiter=function(e,t,n,i){return new(n||(n=Promise))((function(o,A){function fulfilled(e){try{step(i.next(e))}catch(e){A(e)}}function rejected(e){try{step(i.throw(e))}catch(e){A(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())}))},f="default";function init(e){if("ready"!==f){var t=e.createElement("style");t.textContent='@font-face{font-weight:normal;font-style:normal;font-family:"taro";src:url("data:application/x-font-ttf;charset=utf-8;base64, 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") format("truetype");}@-webkit-keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}@keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}.taro-modal__foot:after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);} .taro-model__btn:active {background-color: #EEEEEE}.taro-model__btn:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;width: 1px;bottom: 0;border-left: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleX(0.5);transform: scaleX(0.5);}.taro-actionsheet__cell:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #e5e5e5;color: #e5e5e5;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);}',e.querySelector("head").appendChild(t),f="ready"}}var g=new m,p=new d,h=new u,y=function showToast(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"title":""};init(document);var t=e=Object.assign({"title":"","icon":"success","image":"","duration":1500,"mask":!1},e),n=t.success,i=t.fail,o=t.complete,A=new a.N({"name":"showToast","success":n,"fail":i,"complete":o});if("string"!=typeof e.title)return A.fail({"errMsg":(0,r.Hl)({"para":"title","correct":"String","wrong":e.title})});if("number"!=typeof e.duration)return A.fail({"errMsg":(0,r.Hl)({"para":"duration","correct":"Number","wrong":e.duration})});e.image&&"string"!=typeof e.image&&(e.image=""),e.mask=!!e.mask;var c="";return c=g.el?g.show(e,"toast"):g.create(e,"toast"),A.success({"errMsg":c})},b=function showLoading(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"title":""};init(document);var t=e=Object.assign({"title":"","mask":!1},e),n=t.success,i=t.fail,o=t.complete,A=new a.N({"name":"showLoading","success":n,"fail":i,"complete":o}),c={"icon":"loading","image":"","duration":-1};if("string"!=typeof(e=Object.assign({},e,c)).title)return A.fail({"errMsg":(0,r.Hl)({"para":"title","correct":"String","wrong":e.title})});e.mask=!!e.mask;var s="";return s=g.el?g.show(e,"loading"):g.create(e,"loading"),A.success({"errMsg":s})},v=function hideLoading(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,n=e.fail,i=e.complete,o=new a.N({"name":"hideLoading","success":t,"fail":n,"complete":i});return g.el?(g.hide(0,"loading"),o.success()):o.success()},I=function showModal(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return __awaiter(void 0,void 0,void 0,(0,i.Z)().mark((function _callee(){var t,n,o,A,c,s,l;return(0,i.Z)().wrap((function _callee$(i){for(;;)switch(i.prev=i.next){case 0:if(init(document),e=Object.assign({"title":"","content":"","showCancel":!0,"cancelText":"取消","cancelColor":"#000000","confirmText":"确定","confirmColor":"#3CC51F"},e),n=(t=e).success,o=t.fail,A=t.complete,c=new a.N({"name":"showModal","success":n,"fail":o,"complete":A}),"string"==typeof e.title){i.next=6;break}return i.abrupt("return",c.fail({"errMsg":(0,r.Hl)({"para":"title","correct":"String","wrong":e.title})}));case 6:if("string"==typeof e.content){i.next=8;break}return i.abrupt("return",c.fail({"errMsg":(0,r.Hl)({"para":"content","correct":"String","wrong":e.content})}));case 8:if("string"==typeof e.cancelText){i.next=10;break}return i.abrupt("return",c.fail({"errMsg":(0,r.Hl)({"para":"cancelText","correct":"String","wrong":e.cancelText})}));case 10:if(!(e.cancelText.replace(/[\u0391-\uFFE5]/g,"aa").length>8)){i.next=12;break}return i.abrupt("return",c.fail({"errMsg":"cancelText length should not larger then 4 Chinese characters"}));case 12:if("string"==typeof e.confirmText){i.next=14;break}return i.abrupt("return",c.fail({"errMsg":(0,r.Hl)({"para":"confirmText","correct":"String","wrong":e.confirmText})}));case 14:if(!(e.confirmText.replace(/[\u0391-\uFFE5]/g,"aa").length>8)){i.next=16;break}return i.abrupt("return",c.fail({"errMsg":"confirmText length should not larger then 4 Chinese characters"}));case 16:if("string"==typeof e.cancelColor){i.next=18;break}return i.abrupt("return",c.fail({"errMsg":(0,r.Hl)({"para":"cancelColor","correct":"String","wrong":e.cancelColor})}));case 18:if("string"==typeof e.confirmColor){i.next=20;break}return i.abrupt("return",c.fail({"errMsg":(0,r.Hl)({"para":"confirmColor","correct":"String","wrong":e.confirmColor})}));case 20:if(e.showCancel=!!e.showCancel,s="",p.el){i.next=28;break}return i.next=25,p.create(e);case 25:s=i.sent,i.next=31;break;case 28:return i.next=30,p.show(e);case 30:s=i.sent;case 31:return(l={"cancel":!1,"confirm":!1})[s]=!0,i.abrupt("return",c.success(l));case 34:case"end":return i.stop()}}),_callee)})))};var x=function showActionSheet(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"itemList":[]};return __awaiter(void 0,void 0,void 0,(0,i.Z)().mark((function _callee2(){var t,n,o,A,c,s,l;return(0,i.Z)().wrap((function _callee2$(i){for(;;)switch(i.prev=i.next){case 0:if(init(document),e=Object.assign({"itemColor":"#000000","itemList":[]},e),n=(t=e).success,o=t.fail,A=t.complete,c=new a.N({"name":"showActionSheet","success":n,"fail":o,"complete":A}),Array.isArray(e.itemList)){i.next=6;break}return i.abrupt("return",c.fail({"errMsg":(0,r.Hl)({"para":"itemList","correct":"Array","wrong":e.itemList})}));case 6:if(!(e.itemList.length<1)){i.next=8;break}return i.abrupt("return",c.fail({"errMsg":"parameter error: parameter.itemList should have at least 1 item"}));case 8:if(!(e.itemList.length>6)){i.next=10;break}return i.abrupt("return",c.fail({"errMsg":"parameter error: parameter.itemList should not be large than 6"}));case 10:s=0;case 11:if(!(s<e.itemList.length)){i.next=17;break}if("string"==typeof e.itemList[s]){i.next=14;break}return i.abrupt("return",c.fail({"errMsg":(0,r.Hl)({"para":"itemList[".concat(s,"]"),"correct":"String","wrong":e.itemList[s]})}));case 14:s++,i.next=11;break;case 17:if("string"==typeof e.itemColor){i.next=19;break}return i.abrupt("return",c.fail({"errMsg":(0,r.Hl)({"para":"itemColor","correct":"String","wrong":e.itemColor})}));case 19:if(l="",h.el){i.next=26;break}return i.next=23,h.create(e);case 23:l=i.sent,i.next=29;break;case 26:return i.next=28,h.show(e);case 28:l=i.sent;case 29:if("string"!=typeof l){i.next=33;break}return i.abrupt("return",c.fail({"errMsg":l}));case 33:return i.abrupt("return",c.success({"tapIndex":l}));case 34:case"end":return i.stop()}}),_callee2)})))};o.Z.eventCenter.on("__afterTaroRouterChange",(function(){var e,t;g.currentPath&&g.currentPath!==(null===(e=A.GY.page)||void 0===e?void 0:e.path)&&(!function hideToast(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,n=e.fail,i=e.complete,o=new a.N({"name":"hideToast","success":t,"fail":n,"complete":i});g.el?(g.hide(0,"toast"),o.success()):o.success()}(),v()),p.currentPath&&p.currentPath!==(null===(t=A.GY.page)||void 0===t?void 0:t.path)&&function hideModal(){p.el&&p.hide()}()}));(0,r.tA)("enableAlertBeforeUnload"),(0,r.tA)("disableAlertBeforeUnload")},"2361":function(e,t,n){n.d(t,{"$g":function(){return r},"ZT":function(){return setNavigationBarTitle},"_i":function(){return a},"hh":function(){return c}});var i=n(2215),o=n(1627),A=n(7138),r=(0,o.tA)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=(0,o.jc)(e);if(!t.flag){var n={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(n.errMsg),Promise.reject(n)}var r=e.title,a=e.success,c=e.fail,s=e.complete,l=new A.N({"name":"setNavigationBarTitle","success":a,"fail":c,"complete":s});return r&&"string"==typeof r?((0,i.Td)(r),l.success()):l.fail({"errMsg":(0,o.Hl)({"para":"title","correct":"String","wrong":r})})}var a=function setNavigationBarColor(e){var t=e.backgroundColor,n=e.success,i=e.fail,o=e.complete,r=new A.N({"name":"setNavigationBarColor","success":n,"fail":i,"complete":o}),a=document.createElement("meta");return a.setAttribute("name","theme-color"),a.setAttribute("content",t),document.head.appendChild(a),r.success()},c=(0,o.tA)("hideNavigationBarLoading");(0,o.tA)("hideHomeButton")},"6868":function(e,t,n){var i=n(4971),o=Symbol.for("react.element"),A=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,n){var i,A={},s=null,l=null;for(i in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,i)&&!c.hasOwnProperty(i)&&(A[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===A[i]&&(A[i]=t[i]);return{"$$typeof":o,"type":e,"key":s,"ref":l,"props":A,"_owner":a.current}}t.Fragment=A,t.jsx=q,t.jsxs=q},"9492":function(e,t,n){e.exports=n(6868)},"1584":function(e,t,n){n.r(t);var i=n(527),o=n(9492);t.default=function Index(){return(0,o.jsx)(i.Z,{})}},"527":function(e,t,n){var i=n(6729),o=n(4971),A=n(2361),r=n(4916),a=n(4989),c=n(9492);t.Z=function Index(){var e=(0,o.useState)(0),t=(0,i.Z)(e,2),n=t[0],s=t[1];return(0,c.jsxs)(r.G7,{"className":"api-page","children":[(0,c.jsx)(r.G7,{"className":"page-sub-title","children":(0,c.jsx)(r.xv,{"className":"page-sub-title_text","children":"以下为 NavigationBar 相关接口"})}),(0,c.jsxs)(r.G7,{"className":"view-item","children":[(0,c.jsx)(r.zx,{"className":"btn","onClick":function onClick(){return(0,A.$g)({"success":function success(){console.log("成功")},"fail":function fail(e){console.log("失败：",e)}})},"children":"showNavigationBarLoading"}),(0,c.jsx)(r.zx,{"className":"btn","onClick":function onClick(){return(0,A.hh)({"success":function success(){console.log("成功")},"fail":function fail(e){console.log("失败：",e)}})},"children":"hideNavigationBarLoading"}),(0,c.jsx)(r.zx,{"className":"btn","onClick":function onClick(){return(0,A.ZT)({"title":"新标题"+n,"success":function success(){s((function(e){return e+1})),console.log("成功")},"fail":function fail(e){console.log("失败：",e)}})},"children":"setNavigationBarTitle"}),(0,c.jsx)(r.zx,{"className":"btn","onClick":function onClick(){var e=(0,a.p)();(0,A._i)({"backgroundColor":e,"frontColor":"#ffffff","success":function success(){console.log("成功")},"fail":function fail(e){console.log("失败：",e)}})},"children":"setNavigationBarColor"})]})]})}},"4989":function(e,t,n){n.d(t,{"$L":function(){return a},"Fj":function(){return c},"Ib":function(){return loadWeb},"tT":function(){return loadMini},"ff":function(){return loadRn},"D5":function(){return hadlePermissionsDeny},"P2":function(){return throttle},"p":function(){return randomColor}});var i=n(5158),o=n(4073),A=n(618),r=n(8213),a=i.ZPm.getEnv()===i.ZPm.ENV_TYPE.WEB,c=i.ZPm.getEnv()===i.ZPm.ENV_TYPE.RN;function loadWeb(e){var t=e.url,n=e.title,i=e.right,A=e.open,r=e.certified,c=void 0===r||r;a?window.location.href=t:(0,o.T8)({"url":"/pages/webview/index?certified=".concat(c,"&title=").concat(n,"&link=").concat(encodeURIComponent(t)).concat(i?"&right=".concat(i):"").concat(A?"&open=".concat(encodeURIComponent(A)):"")})}function loadMini(e){var t=e.url;(0,o.T8)({"url":"/pages/about/mini?src="+encodeURIComponent(t)})}function loadRn(e){var t=e.android,n=e.ios;(0,o.T8)({"url":"/pages/about/rn?android="+encodeURIComponent(t)+"&ios="+encodeURIComponent(n)})}function hadlePermissionsDeny(e){var t=e.perssionText;(0,A.K4)({"title":"提示","content":"请在“设置-隐私-".concat(t,"”选项中，允许 Taro 访问你的").concat(t,"。"),"confirmColor":"#6190E8","success":function success(e){e.confirm&&(0,r.a)()}})}function throttle(e,t){var n=0;return function(){var i=Date.now(),o=this,A=arguments;i-n>t&&(e.apply(o,A),n=i)}}function randomColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}},"3907":function(e,t,n){function _objectWithoutProperties(e,t){if(null==e)return{};var n,i,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,i,o={},A=Object.keys(e);for(i=0;i<A.length;i++)n=A[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(i=0;i<A.length;i++)n=A[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{"Z":function(){return _objectWithoutProperties}})}}]);