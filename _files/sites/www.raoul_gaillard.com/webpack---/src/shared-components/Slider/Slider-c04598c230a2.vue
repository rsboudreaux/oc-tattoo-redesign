module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "slider",
    staticStyle: {
      "opacity": "1"
    }
  }, [_c('slide-indicator'), _vm._v(" "), _c('div', {
    ref: "slideContainer",
    staticClass: "slide-container"
  }, _vm._l((_vm.slides), function(slide, index) {
    return _c('slide', {
      attrs: {
        "title": slide.title,
        "titleColor": slide.titleColor,
        "textColor": slide.textColor,
        "description": slide.description,
        "context": slide.context,
        "role": slide.role,
        "period": slide.period,
        "shapePath": slide.shapePath,
        "shapePath2x": slide.shapePath2x,
        "illustrationPath": slide.illustrationPath,
        "illustrationPath2x": slide.illustrationPath2x,
        "caseStudy": slide['case-study'],
        "url": slide.url,
        "rotationX": _vm.rotationX,
        "rotationY": _vm.rotationY,
        "slideId": index
      }
    })
  }))], 1)
},staticRenderFns: []}


//////////////////
// WEBPACK FOOTER
// ./~/vue-loader/lib/template-compiler.js?id=data-v-0d1ca544!./~/vue-loader/lib/selector.js?type=template&index=0!./src/shared-components/Slider/Slider.vue
// module id = 261
// module chunks = 0