module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "slide",
    class: 'slide__' + _vm.title
  }, [_c('div', {
    ref: "slideImg",
    staticClass: "slide-img"
  }, [_c('img', {
    staticClass: "slide-img__shape",
    attrs: {
      "src": _vm.shapePath,
      "srcset": _vm.shapePath2x + ' 2x',
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "slide-img__img",
    attrs: {
      "src": _vm.illustrationPath,
      "srcset": _vm.illustrationPath2x + ' 2x',
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    ref: "slideInfo",
    staticClass: "slide__info"
  }, [_c('div', {
    staticClass: "slide__id",
    style: (_vm.titleColorStyle)
  }, [_c('div', {
    staticClass: "slide__id__text"
  }, [_vm._v("0" + _vm._s(_vm.slideId + 1) + ".")])]), _vm._v(" "), _c('h2', {
    staticClass: "slide__title",
    style: (_vm.titleColorStyle)
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "slide__description",
    style: (_vm.textColorStyle)
  }, [_vm._v(_vm._s(_vm.description))]), _vm._v(" "), _c('div', {
    staticClass: "slide__sub-info"
  }, [_c('div', {
    staticClass: "slide__sub-info__info"
  }, [_c('div', {
    staticClass: "slide__sub-info__info__title",
    style: (_vm.titleColorStyle)
  }, [_vm._v("Role")]), _vm._v(" "), _c('div', {
    staticClass: "slide__sub-info__info__description",
    style: (_vm.textColorStyle)
  }, [_vm._v(_vm._s(_vm.role))])]), _vm._v(" "), _c('div', {
    staticClass: "slide__sub-info__info"
  }, [_c('div', {
    staticClass: "slide__sub-info__info__title",
    style: (_vm.titleColorStyle)
  }, [_vm._v("Context")]), _vm._v(" "), _c('div', {
    staticClass: "slide__sub-info__info__description",
    style: (_vm.textColorStyle)
  }, [_vm._v(_vm._s(_vm.context))])]), _vm._v(" "), _c('div', {
    staticClass: "slide__sub-info__info"
  }, [_c('div', {
    staticClass: "slide__sub-info__info__title",
    style: (_vm.titleColorStyle)
  }, [_vm._v("Year")]), _vm._v(" "), _c('div', {
    staticClass: "slide__sub-info__info__description",
    style: (_vm.textColorStyle)
  }, [_vm._v(_vm._s(_vm.period))])])]), _vm._v(" "), (_vm.caseStudy) ? _c('a', {
    ref: "button",
    staticClass: "slide__button",
    style: (_vm.buttonStyle),
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.loadCaseStudy($event)
      },
      "mouseover": _vm.buttonHover,
      "mouseout": _vm.buttonOut
    }
  }, [(_vm.isLoading) ? _c('div', {
    ref: "buttonText",
    staticClass: "slide__button-text"
  }, [_vm._v(_vm._s(_vm.loadingState))]) : _c('div', {
    ref: "buttonText",
    staticClass: "slide__button-text"
  }, [_vm._v("view more")]), _vm._v(" "), _c('div', {
    ref: "loadingBar",
    staticClass: "slide__button__loader",
    style: (_vm.loadingButtonStyle)
  })]) : _c('a', {
    ref: "button",
    staticClass: "slide__button",
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
  }, [_vm._v("Go to website")]), _vm._v(" "), _c('div', {
    ref: "loadingBar",
    staticClass: "slide__button__loader",
    style: (_vm.loadingButtonStyle)
  })])])])
},staticRenderFns: []}


//////////////////
// WEBPACK FOOTER
// ./~/vue-loader/lib/template-compiler.js?id=data-v-83842fc4!./~/vue-loader/lib/selector.js?type=template&index=0!./src/shared-components/Slider/Slide.vue
// module id = 278
// module chunks = 0