(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"238":function(e,c,n){},"308":function(e,c,n){"use strict";n.r(c);var a=n(16),s=n(18),t=n(8),o=n(15),l=n(299),r=n(135),i=(n(238),n(134));c.default=function Index(){var e=Object(s.useState)(""),c=Object(a.a)(e,2),n=c[0],p=c[1];return Object(i.jsx)(r.B,{"className":"api-page","children":Object(i.jsxs)(r.B,{"className":"api-page__body","children":[Object(i.jsx)(r.B,{"className":"common-border","children":Object(i.jsxs)(r.B,{"className":"input-wrap","children":[Object(i.jsx)(r.y,{"className":"input-wrap-text","children":"电话   : "}),Object(i.jsx)(r.h,{"className":"input-wrap-input","type":"text","placeholder":"请输入电话号码","value":n,"onInput":function onInput(e){p(e.detail.value)}})]})}),Object(i.jsx)(r.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){n.length>2&&n.length<12?function makePhoneCall(e){var c=Object(t.k)(e);if(!c.flag){var n={"errMsg":"makePhoneCall:fail ".concat(c.msg)};return console.error(n.errMsg),Promise.reject(n)}var a=e.phoneNumber,s=e.success,l=e.fail,r=e.complete,i=new o.b({"name":"makePhoneCall","success":s,"fail":l,"complete":r});"string"!=typeof a?i.fail({"errMsg":Object(t.c)({"para":"phoneNumber","correct":"String","wrong":a})}):(window.location.href="tel:".concat(a),i.success())}({"phoneNumber":n,"success":function success(e){console.log(e)},"fail":function fail(e){console.log(e)}}):Object(l.e)({"title":"请先输入电话号码","icon":"none"})},"children":"Taro.makePhoneCall"})]})})}}}]);