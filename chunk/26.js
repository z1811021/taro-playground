"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[26],{"26":function(n){n.exports=JSON.parse('{"version":3,"sources":["src/components/login/login.tsx"],"names":["Login","prototype","componentDidLoad","notSupport","this","render","h","Host"],"mappings":"8IAOaA,MAAK,kDAChBA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,QAASC,OAGtBJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,gBAPO","sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-login-core\'\\n})\\nexport class Login implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'Login\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"]}')}}]);