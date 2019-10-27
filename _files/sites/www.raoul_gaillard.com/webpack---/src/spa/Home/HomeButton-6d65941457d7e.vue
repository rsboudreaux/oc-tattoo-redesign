module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home-button"
  }, [_c('div', {
    staticClass: "home-button__wrapper"
  }, [_c('div', {
    ref: "buttonText",
    staticClass: "home-button__text"
  }, [_vm._v("See my work")]), _vm._v(" "), _c('router-link', {
    ref: "square",
    staticClass: "home-button__square",
    attrs: {
      "to": "/work"
    },
    nativeOn: {
      "mouseover": function($event) {
        return _vm.mouseover($event)
      },
      "mouseout": function($event) {
        return _vm.mouseout($event)
      }
    }
  }), _vm._v(" "), _c('div', {
    ref: "arrow",
    staticClass: "home-button__arrow"
  }, [_c('div', {
    ref: "line",
    staticClass: "home-button__arrow__line"
  }), _vm._v(" "), _c('img', {
    ref: "arrowImg",
    staticClass: "home-button__arrow__img",
    attrs: {
      "src": "/assets/imgs/arrow.svg",
      "alt": ""
    }
  })])], 1)])
},staticRenderFns: []}


//////////////////
// WEBPACK FOOTER
// ./~/vue-loader/lib/template-compiler.js?id=data-v-3de61608!./~/vue-loader/lib/selector.js?type=template&index=0!./src/spa/Home/HomeButton.vue
// module id = 268
// module chunks = 0