"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5816],{"5816":function(n,e,t){t.r(e),t.d(e,{"taro_rich_text_core":function(){return o}});var i=t(4641),o=function(){function r(n){var e=this;(0,i.r)(this,n),this.renderNode=function(n){if("type"in n&&"text"===n.type)return(n.text||"").replace(/&nbsp;/g," ");if("name"in n&&n.name){var t=n.name,o=n.attrs,u=n.children,a={},c=[];if(o&&"object"==typeof o){var f=function(n){var e=o[n];if("style"===n&&"string"==typeof e){var t=e.split(";").map((function(n){return n.trim()})).filter((function(n){return n})),i={};return t.forEach((function(n){if(n){var e=/(.+): *(.+)/g.exec(n);if(e){var t=e[1],o=e[2],u=t.replace(/-([a-z])/g,(function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return n[1].toUpperCase()}));i[u]=o}}})),Object.keys(i).length&&(a.style=i),"continue"}a[n]=e};for(var s in o)f(s)}return u&&u.length&&(c=u.map((function(n){return e.renderNode(n)}))),(0,i.h)(t,a,c)}return null}}return r.prototype.render=function(){var n=this.nodes,e=this.renderNode;return Array.isArray(n)?(0,i.h)(i.H,null,n.map((function(n){return e(n)}))):(0,i.h)(i.H,{"innerHTML":n})},r}()}}]);