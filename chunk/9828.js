"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[9828],{"9828":function(n){n.exports=JSON.parse('{"version":3,"sources":["src/components/slot/native-slot.tsx"],"names":["NativeSlot","prototype","componentDidLoad","notSupport","this","render","h","Host"],"mappings":"8IAOaA,WAAU,kDACrBA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,aAAcC,OAG3BJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,gBAPY","sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-native-slot-core\'\\n})\\nexport class NativeSlot implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'NativeSlot\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"]}')}}]);