(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"144":function(n,e,t){"use strict";t.d(e,"c",(function(){return a})),t.d(e,"b",(function(){return u})),t.d(e,"d",(function(){return loadPage})),t.d(e,"a",(function(){return hadlePermissionsDeny})),t.d(e,"f",(function(){return throttle})),t.d(e,"e",(function(){return randomColor}));var o=t(24),c=t(17),r=t(299),i=t(147),a=o.a.getEnv()===o.a.ENV_TYPE.WEB,u=o.a.getEnv()===o.a.ENV_TYPE.RN;function loadPage(n){var e=n.url,t=n.title,o=n.right,r=n.open,i=n.certified,u=void 0===i||i;a?window.location.href=e:Object(c.e)({"url":"/pages/webview/index?certified=".concat(u,"&title=").concat(t,"&link=").concat(encodeURIComponent(e)).concat(o?"&right=".concat(o):"").concat(r?"&open=".concat(encodeURIComponent(r)):"")})}function hadlePermissionsDeny(n){var e=n.perssionText;Object(r.d)({"title":"提示","content":"请在“设置-隐私-".concat(e,"”选项中，允许 Taro 访问你的").concat(e,"。"),"confirmColor":"#6190E8","success":function success(n){n.confirm&&Object(i.b)()}})}function throttle(n,e){var t=0;return function(){var o=Date.now(),c=this,r=arguments;o-t>e&&(n.apply(c,r),t=o)}}function randomColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}},"147":function(n,e,t){"use strict";t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return r}));var o=t(8),c=Object(o.l)("openSetting"),r=Object(o.l)("getSetting")},"224":function(n,e,t){},"225":function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return i}));var o=t(7),c=t(15),r=function startPullDownRefresh(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.success,t=n.fail,r=n.complete,i=new c.b({"name":"startPullDownRefresh","success":e,"fail":t,"complete":r});return new Promise((function(n,e){o.a.eventCenter.trigger("__taroStartPullDownRefresh",{"successHandler":function successHandler(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.success(e,n)},"errorHandler":function errorHandler(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.fail(n,e)}})}))},i=function stopPullDownRefresh(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.success,t=n.fail,r=n.complete,i=new c.b({"name":"stopPullDownRefresh","success":e,"fail":t,"complete":r});return new Promise((function(n,e){o.a.eventCenter.trigger("__taroStopPullDownRefresh",{"successHandler":function successHandler(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.success(e,n)},"errorHandler":function errorHandler(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.fail(n,e)}})}))}},"302":function(n,e,t){"use strict";t.r(e);var o=t(8),c=Object(o.l)("setBackgroundTextStyle"),r=Object(o.l)("setBackgroundColor"),i=t(225),a=t(299),u=t(135),s=t(144),l=(t(224),t(134));e.default=function Index(){return Object(l.jsxs)(u.B,{"className":"api-page","children":[Object(l.jsx)(u.a,{"className":"btn","type":"primary","onClick":function onClick(){c({"textStyle":"dark"}).then((function(){Object(i.a)();var n=setTimeout((function(){Object(i.b)(),n&&clearTimeout(n)}),2e3)})).catch((function(n){console.log(n),Object(a.e)({"title":"出错了","icon":"none"})}))},"children":"setBackgroundTextStyle【iOS】"}),Object(l.jsx)(u.a,{"className":"btn","type":"primary","onClick":function onClick(){r({"backgroundColor":Object(s.e)()}).then((function(){Object(i.a)();var n=setTimeout((function(){Object(i.b)(),n&&clearTimeout(n)}),2e3)})).catch((function(){Object(a.e)({"title":"出错了","icon":"none"})}))},"children":"setBackgroundColor【Android】"})]})}}}]);