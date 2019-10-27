module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "next-button",
    class: {
      'is-hiding': _vm.isHiding
    },
    on: {
      "~click": function($event) {
        $event.preventDefault();
        return _vm.onClick($event)
      },
      "mouseover": function($event) {
        $event.preventDefault();
        return _vm.onMouseOver($event)
      },
      "mouseout": function($event) {
        $event.preventDefault();
        return _vm.onMouseOut($event)
      }
    }
  }, [_c('div', {
    ref: "buttonContent",
    staticClass: "next-button__content"
  }, [_c('div', {
    staticClass: "next-button__subtitle"
  }, [_vm._v("Next project")]), _vm._v(" "), _c('div', {
    staticClass: "next-button__title-container"
  }, [_c('span', {
    staticClass: "next-button__title"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.nextSlide.title) + "\n\t\t\t\t"), _c('div', {
    ref: "hoverLine",
    staticClass: "next-button__line"
  })])])]), _vm._v(" "), _c('div', {
    ref: "background",
    staticClass: "next-button__background"
  })])
},staticRenderFns: []}


//////////////////
// WEBPACK FOOTER
// ./~/vue-loader/lib/template-compiler.js?id=data-v-f1570494!./~/vue-loader/lib/selector.js?type=template&index=0!./src/shared-components/CaseStudy/NextButton.vue
// module id = 284
// module chunks = 0