(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"144":function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"b",(function(){return s})),e.d(n,"d",(function(){return loadPage})),e.d(n,"a",(function(){return hadlePermissionsDeny})),e.d(n,"f",(function(){return throttle})),e.d(n,"e",(function(){return randomColor}));var c=e(24),o=e(17),i=e(299),a=e(147),r=c.a.getEnv()===c.a.ENV_TYPE.WEB,s=c.a.getEnv()===c.a.ENV_TYPE.RN;function loadPage(t){var n=t.url,e=t.title,c=t.right,i=t.open,a=t.certified,s=void 0===a||a;r?window.location.href=n:Object(o.e)({"url":"/pages/webview/index?certified=".concat(s,"&title=").concat(e,"&link=").concat(encodeURIComponent(n)).concat(c?"&right=".concat(c):"").concat(i?"&open=".concat(encodeURIComponent(i)):"")})}function hadlePermissionsDeny(t){var n=t.perssionText;Object(i.d)({"title":"提示","content":"请在“设置-隐私-".concat(n,"”选项中，允许 Taro 访问你的").concat(n,"。"),"confirmColor":"#6190E8","success":function success(t){t.confirm&&Object(a.b)()}})}function throttle(t,n){var e=0;return function(){var c=Date.now(),o=this,i=arguments;c-e>n&&(t.apply(o,i),e=c)}}function randomColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}},"147":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return i}));var c=e(8),o=Object(c.l)("openSetting"),i=Object(c.l)("getSetting")},"160":function(t,n,e){"use strict";var c=e(16),o=e(18),i=e(163),a=e(135),r=e(144),s=(e(161),e(134));n.a=function Index(){var t=Object(o.useState)(0),n=Object(c.a)(t,2),e=n[0],l=n[1];return Object(s.jsxs)(a.B,{"className":"api-page","children":[Object(s.jsx)(a.B,{"className":"page-sub-title","children":Object(s.jsx)(a.y,{"className":"page-sub-title_text","children":"以下为 NavigationBar 相关接口"})}),Object(s.jsxs)(a.B,{"className":"view-item","children":[Object(s.jsx)(a.a,{"className":"btn","onClick":function onClick(){return Object(i.d)({"success":function success(){console.log("成功")},"fail":function fail(t){console.log("失败：",t)}})},"children":"showNavigationBarLoading"}),Object(s.jsx)(a.a,{"className":"btn","onClick":function onClick(){return Object(i.a)({"success":function success(){console.log("成功")},"fail":function fail(t){console.log("失败：",t)}})},"children":"hideNavigationBarLoading"}),Object(s.jsx)(a.a,{"className":"btn","onClick":function onClick(){return Object(i.c)({"title":"新标题"+e,"success":function success(){l((function(t){return t+1})),console.log("成功")},"fail":function fail(t){console.log("失败：",t)}})},"children":"setNavigationBarTitle"}),Object(s.jsx)(a.a,{"className":"btn","onClick":function onClick(){var t=Object(r.e)();Object(i.b)({"backgroundColor":t,"frontColor":"#ffffff","success":function success(){console.log("成功")},"fail":function fail(t){console.log("失败：",t)}})},"children":"setNavigationBarColor"})]})]})}},"161":function(t,n,e){},"163":function(t,n,e){"use strict";e.d(n,"d",(function(){return i})),e.d(n,"c",(function(){return setNavigationBarTitle})),e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return r}));var c=e(15),o=e(8),i=Object(o.l)("showNavigationBarLoading");function setNavigationBarTitle(t){var n=Object(o.k)(t);if(!n.flag){var e={"errMsg":"setNavigationBarTitle:fail ".concat(n.msg)};return console.error(e.errMsg),Promise.reject(e)}var i=t.title,a=t.success,r=t.fail,s=t.complete,l=new c.b({"name":"setNavigationBarTitle","success":a,"fail":r,"complete":s});return i&&"string"==typeof i?(document.title!==i&&(document.title=i),l.success()):l.fail({"errMsg":Object(o.c)({"para":"title","correct":"String","wrong":i})})}var a=function setNavigationBarColor(t){var n=t.backgroundColor,e=t.success,o=t.fail,i=t.complete,a=new c.b({"name":"setNavigationBarColor","success":e,"fail":o,"complete":i}),r=document.createElement("meta");return r.setAttribute("name","theme-color"),r.setAttribute("content",n),document.head.appendChild(r),a.success()},r=Object(o.l)("hideNavigationBarLoading");Object(o.l)("hideHomeButton")},"285":function(t,n,e){"use strict";e.r(n);var c=e(160),o=e(134);n.default=function Index(){return Object(o.jsx)(c.a,{})}}}]);