"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[266],{"266":function(n){n.exports=JSON.parse('{"version":3,"sources":["src/components/inline-payment-panel/inline-payment-panel.tsx"],"names":["InlinePaymentPanel","prototype","componentDidLoad","notSupport","this","render","h","Host"],"mappings":"8IAOaA,mBAAkB,kDAC7BA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,qBAAsBC,OAGnCJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,gBAPoB","sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-inline-payment-panel-core\'\\n})\\nexport class InlinePaymentPanel implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'InlinePaymentPanel\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"]}')}}]);