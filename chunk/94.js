(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"101":function(t,n,i){"use strict";i.r(n),i.d(n,"taro_input_core",(function(){return s}));var o=i(31);function getTrueType(t,n,i){if("search"===n&&(t="search"),i&&(t="password"),void 0===t)return"text";if(!t)throw new Error("unexpected type");return"digit"===t&&(t="number"),t}function fixControlledValue(t){return null!=t?t:""}var s=function(){function e(t){var n=this;Object(o.g)(this,t),this.onInput=Object(o.c)(this,"input",7),this.onPaste=Object(o.c)(this,"paste",7),this.onFocus=Object(o.c)(this,"focus",7),this.onBlur=Object(o.c)(this,"blur",7),this.onConfirm=Object(o.c)(this,"confirm",7),this.onChange=Object(o.c)(this,"change",7),this.onKeyDown=Object(o.c)(this,"keydown",7),this.isOnComposition=!1,this.isOnPaste=!1,this.onInputExcuted=!1,this.password=!1,this.disabled=!1,this.maxlength=140,this.autoFocus=!1,this.confirmType="done",this.nativeProps={},this.handleInput=function(t){t.stopPropagation();var i=n,o=i.type,s=i.maxlength,a=i.confirmType,u=i.password;if(!n.isOnComposition&&!n.onInputExcuted){var r=t.target.value,l=getTrueType(o,a,u);n.onInputExcuted=!0,"number"===l&&r&&s<=r.length&&(r=r.substring(0,s),t.target.value=r),n.value=r,n.onInput.emit({"value":r,"cursor":r.length})}},this.handlePaste=function(t){n.isOnPaste=!0,n.onPaste.emit({"value":t.target.value})},this.handleFocus=function(t){n.onInputExcuted=!1,n.onFocus.emit({"value":t.target.value})},this.handleBlur=function(t){n.onBlur.emit({"value":t.target.value})},this.handleChange=function(t){t.stopPropagation(),n.onChange.emit({"value":t.target.value}),n.isOnPaste&&(n.isOnPaste=!1,n.value=t.target.value,n.onInput.emit({"value":t.target.value,"cursor":t.target.value.length}))},this.handleKeyDown=function(t){var i=t.target.value,o=t.keyCode||t.code;n.onInputExcuted=!1,t.stopPropagation(),n.onKeyDown.emit({"value":i,"cursor":i.length,"keyCode":o}),13===o&&n.onConfirm.emit({"value":i})},this.handleComposition=function(t){t.target instanceof HTMLInputElement&&("compositionend"===t.type?(n.isOnComposition=!1,n.value=t.target.value,n.onInput.emit({"value":t.target.value,"cursor":t.target.value.length})):n.isOnComposition=!0)}}return e.prototype.watchFocus=function(t,n){var i;!n&&t&&(null===(i=this.inputRef)||void 0===i||i.focus())},e.prototype.componentDidLoad=function(){var t,n,i,o=this;"file"===this.type?(this.fileListener=function(){o.onInput.emit()},null===(t=this.inputRef)||void 0===t||t.addEventListener("change",this.fileListener)):(null===(n=this.inputRef)||void 0===n||n.addEventListener("compositionstart",this.handleComposition),null===(i=this.inputRef)||void 0===i||i.addEventListener("compositionend",this.handleComposition)),Object.defineProperty(this.el,"value",{"get":function(){var t;return null===(t=o.inputRef)||void 0===t?void 0:t.value},"set":function(t){return o.value=t},"configurable":!0})},e.prototype.disconnectedCallback=function(){var t;"file"===this.type&&(null===(t=this.inputRef)||void 0===t||t.removeEventListener("change",this.fileListener))},e.prototype.render=function(){var t=this,n=this,i=n.value,s=n.type,a=n.password,u=n.placeholder,r=n.autoFocus,l=n.disabled,h=n.maxlength,c=n.confirmType,p=n.name,d=n.nativeProps;return Object(o.e)("input",Object.assign({"ref":function(n){t.inputRef=n},"class":"weui-input","value":fixControlledValue(i),"type":getTrueType(s,c,a),"placeholder":u,"autoFocus":r,"disabled":l,"maxlength":h,"name":p,"onInput":this.handleInput,"onFocus":this.handleFocus,"onBlur":this.handleBlur,"onChange":this.handleChange,"onKeyDown":this.handleKeyDown,"onPaste":this.handlePaste,"onCompositionStart":this.handleComposition,"onCompositionEnd":this.handleComposition},d))},Object.defineProperty(e.prototype,"el",{"get":function(){return Object(o.d)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(e,"watchers",{"get":function(){return{"autoFocus":["watchFocus"]}},"enumerable":!1,"configurable":!0}),e}();s.style="taro-input-core{display:block}input{display:block;overflow:hidden;height:1.4rem;text-overflow:clip;text-align:inherit;white-space:nowrap}"}}]);