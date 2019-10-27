module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    ref: "button",
    staticClass: "slide__button link-button",
    style: (_vm.buttonStyle),
    attrs: {
      "href": _vm.url,
      "target": "_blank"
    },
    on: {
      "mouseover": _vm.buttonHover,
      "mouseout": _vm.buttonOut
    }
  }, [_c('div', {
    ref: "buttonText",
    staticClass: "slide__button-text"
  }, [_vm._v("Go to website")])])
},staticRenderFns: []}


//////////////////
// WEBPACK FOOTER
// ./~/vue-loader/lib/template-compiler.js?id=data-v-16ab7406!./~/vue-loader/lib/selector.js?type=template&index=0!./src/shared-components/CaseStudy/LinkButton.vue
// module id = 263
// module chunks = 0