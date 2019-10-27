module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "aboutContent",
    staticClass: "about-content"
  }, [_c('div', {
    staticClass: "about-content__title",
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "about-content__mobile-message"
  }, [_vm._v("See my work on desktop")]), _vm._v(" "), _c('div', {
    ref: "contentContainer",
    staticClass: "about-content__content-container"
  }, [_c('div', {
    staticClass: "about-content__content",
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "about-content__social"
  }, [_c('div', {
    staticClass: "about-content__social-title"
  }, [_vm._v(_vm._s(_vm.socialTitle))]), _vm._v(" "), _c('div', {
    ref: "network",
    staticClass: "about-content__networks"
  }, _vm._l((_vm.networks), function(network) {
    return _c('div', {
      staticClass: "about-content__network"
    }, [_c('a', {
      staticClass: "about-content__network__link",
      attrs: {
        "href": network.link,
        "target": "_blank"
      }
    }, [_vm._v(_vm._s(network.name))])])
  }))])])])
},staticRenderFns: []}


//////////////////
// WEBPACK FOOTER
// ./~/vue-loader/lib/template-compiler.js?id=data-v-b41ef4ba!./~/vue-loader/lib/selector.js?type=template&index=0!./src/spa/About/AboutContent.vue
// module id = 279
// module chunks = 0