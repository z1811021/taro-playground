(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"142":function(e,a,t){"use strict";var c=t(135),n=(t(143),t(134));a.a=function Head(e){var a=e.title,t=e.desc;return Object(n.jsxs)(c.B,{"className":"page-head","children":[Object(n.jsx)(c.B,{"className":"page-head-title","children":a}),Object(n.jsx)(c.B,{"className":"page-head-line"}),!!t&&Object(n.jsx)(c.y,{"className":"page-head-desc","children":t})]})}},"143":function(e,a,t){},"144":function(e,a,t){"use strict";t.d(a,"c",(function(){return l})),t.d(a,"b",(function(){return i})),t.d(a,"d",(function(){return loadPage})),t.d(a,"a",(function(){return hadlePermissionsDeny})),t.d(a,"f",(function(){return throttle})),t.d(a,"e",(function(){return randomColor}));var c=t(24),n=t(17),s=t(299),o=t(147),l=c.a.getEnv()===c.a.ENV_TYPE.WEB,i=c.a.getEnv()===c.a.ENV_TYPE.RN;function loadPage(e){var a=e.url,t=e.title,c=e.right,s=e.open,o=e.certified,i=void 0===o||o;l?window.location.href=a:Object(n.e)({"url":"/pages/webview/index?certified=".concat(i,"&title=").concat(t,"&link=").concat(encodeURIComponent(a)).concat(c?"&right=".concat(c):"").concat(s?"&open=".concat(encodeURIComponent(s)):"")})}function hadlePermissionsDeny(e){var a=e.perssionText;Object(s.d)({"title":"提示","content":"请在“设置-隐私-".concat(a,"”选项中，允许 Taro 访问你的").concat(a,"。"),"confirmColor":"#6190E8","success":function success(e){e.confirm&&Object(o.b)()}})}function throttle(e,a){var t=0;return function(){var c=Date.now(),n=this,s=arguments;c-t>a&&(e.apply(n,s),t=c)}}function randomColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}},"146":function(e,a,t){"use strict";var c=t(135),n=t(144),s=t(134);function JSONTree(e){var a=n.c?JSON.stringify(e.data,void 0,2):JSON.stringify(e.data,void 0,2).replace(/[ ]/g,"&nbsp;");return Object(s.jsx)(c.y,{"decode":!0,"children":a})}a.a=function(e){return e.data&&Object.keys(e.data).length>0?Object(s.jsx)(JSONTree,{"data":e.data}):Object(s.jsx)(c.B,{})}},"147":function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return s}));var c=t(8),n=Object(c.l)("openSetting"),s=Object(c.l)("getSetting")},"195":function(e,a,t){},"266":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var c=t(19),n=t(2),s=t(3),o=t(13),l=t(10),i=t(11),r=t(4),d=t(18),h=t.n(d),m=t(135),j=t(142),b=t(146),u=(t(195),t(134)),p=function(e){Object(l.a)(PageForm,e);var a=Object(i.a)(PageForm);function PageForm(){var e;Object(n.a)(this,PageForm);for(var t=arguments.length,s=new Array(t),l=0;l<t;l++)s[l]=arguments[l];return e=a.call.apply(a,[this].concat(s)),Object(r.a)(Object(o.a)(e),"state",{"enableSwitch":!1,"radioItems":[{"key":"radio-1","value":"选项一","checked":!1},{"key":"radio-2","value":"选项二","checked":!1}],"checkItems":[{"key":"checkbox—1","value":"选项一","checked":!1},{"key":"checkbox—2","value":"选项二","checked":!1}],"sliderValue":50,"selectDate":"2020-01-02","inputValue":"","formData":{}}),Object(r.a)(Object(o.a)(e),"onHandleChange",(function(a){var t=a.detail.value;e.setState({"inputValue":t})})),Object(r.a)(Object(o.a)(e),"onHandleSwitchChange",(function(a){var t=a.detail.value;e.setState({"enableSwitch":t})})),Object(r.a)(Object(o.a)(e),"onRadioChange",(function(e){console.log(e)})),Object(r.a)(Object(o.a)(e),"onCheckChange",(function(a){var t=a.detail.value,c=e.state.checkItems;c.forEach((function(e){e.checked=t.includes(e.key)})),e.setState({"checkItems":c})})),Object(r.a)(Object(o.a)(e),"handleSliderChange",(function(a){console.log(a),e.setState({"sliderValue":a.detail.value})})),Object(r.a)(Object(o.a)(e),"handleSliderChanging",(function(e){console.log("handleSliderChanging",e)})),Object(r.a)(Object(o.a)(e),"handleDateChange",(function(a){var t=a.detail.value,c=Array.isArray(t)?t.join("-"):t;e.setState({"selectDate":c})})),Object(r.a)(Object(o.a)(e),"formSubmit",(function(a){console.log(a),e.setState({"formData":Object(c.a)({},a.detail.value)})})),Object(r.a)(Object(o.a)(e),"formReset",(function(a){console.log(a),e.setState({"sliderValue":50,"inputValue":"","formData":{}})})),e}return Object(s.a)(PageForm,[{"key":"render","value":function render(){var e=this.state,a=e.enableSwitch,t=e.radioItems,c=void 0===t?[]:t,n=e.checkItems,s=void 0===n?[]:n,o=e.sliderValue,l=e.selectDate,i=e.inputValue,r=e.formData;return Object(u.jsxs)(m.t,{"className":"components-page","children":[Object(u.jsx)(m.B,{"className":"components-page__header","children":Object(u.jsx)(j.a,{"title":"Form"})}),Object(u.jsx)(m.e,{"onSubmit":this.formSubmit,"onReset":this.formReset,"children":Object(u.jsxs)(m.B,{"className":"components-page__body","children":[Object(u.jsxs)(m.B,{"className":"components-page__body-example example","children":[Object(u.jsx)(m.B,{"className":"example-header","children":"switch"}),Object(u.jsx)(m.B,{"className":"example-body","children":Object(u.jsx)(m.x,{"onChange":this.onHandleSwitchChange,"name":"switch","className":"form-switch","checked":a})})]}),Object(u.jsxs)(m.B,{"className":"components-page__body-example example","children":[Object(u.jsx)(m.B,{"className":"example-header","children":"radio"}),Object(u.jsx)(m.B,{"className":"example-body","children":Object(u.jsx)(m.r,{"className":"example-body__radio-group","onChange":this.onRadioChange,"name":"radio","children":c.map((function(e){return Object(u.jsxs)(m.i,{"className":"example-body__radio-group-item","for":e.key,"children":[Object(u.jsx)(m.q,{"value":e.key,"checked":e.checked}),Object(u.jsx)(m.y,{"className":"example-body__radio-group-item-text","children":e.value})]},e.key)}))})})]}),Object(u.jsxs)(m.B,{"className":"components-page__body-example example","children":[Object(u.jsx)(m.B,{"className":"example-header","children":"checkbox"}),Object(u.jsx)(m.B,{"className":"example-body","children":Object(u.jsx)(m.d,{"className":"example-body__checkbox-group","onChange":this.onCheckChange,"name":"checkbox","children":s.map((function(e){return Object(u.jsxs)(m.i,{"className":"example-body__checkbox-group-item","for":e.key,"children":[Object(u.jsx)(m.c,{"value":e.key,"checked":e.checked}),Object(u.jsx)(m.y,{"className":"example-body__checkbox-group-item-text","children":e.value})]},e.key)}))})})]}),Object(u.jsxs)(m.B,{"className":"components-page__body-example example","children":[Object(u.jsx)(m.B,{"className":"example-header","children":"slider"}),Object(u.jsx)(m.B,{"className":"example-body","children":Object(u.jsx)(m.u,{"name":"slider","value":o,"showValue":!0,"onChange":this.handleSliderChange,"onChanging":this.handleSliderChanging})})]}),Object(u.jsxs)(m.B,{"className":"components-page__body-example example","children":[Object(u.jsx)(m.B,{"className":"example-header","children":"日期选择器"}),Object(u.jsx)(m.B,{"className":"example-body","children":Object(u.jsx)(m.m,{"name":"date","mode":"date","value":l,"onChange":this.handleDateChange,"children":Object(u.jsxs)(m.y,{"children":["当前选择日期：",l]})})})]}),Object(u.jsxs)(m.B,{"className":"components-page__body-example example example-input","children":[Object(u.jsx)(m.B,{"className":"example-header","children":"input"}),Object(u.jsx)(m.B,{"className":"example-input-example-body","children":Object(u.jsx)(m.h,{"name":"input","type":"text","value":i,"placeholder":"这是一个输入框","onInput":this.onHandleChange})})]}),Object(u.jsxs)(m.B,{"className":"components-page__body-example example","children":[Object(u.jsxs)(m.B,{"className":"example-body","style":{"display":"flex","flexDirection":"row","justifyContent":"space-around"},"children":[Object(u.jsx)(m.a,{"size":"mini","formType":"submit","type":"primary","children":"Submit"}),Object(u.jsx)(m.a,{"size":"mini","formType":"reset","type":"default","children":"Reset"})]}),Object(u.jsx)(b.a,{"data":r})]})]})})]})}}]),PageForm}(h.a.Component)}}]);