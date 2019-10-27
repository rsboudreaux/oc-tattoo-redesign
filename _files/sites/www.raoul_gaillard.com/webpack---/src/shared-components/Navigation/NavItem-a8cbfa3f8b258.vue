module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "menu-link",
    on: {
      "mouseover": _vm.mouseover,
      "mouseout": _vm.mouseout
    }
  }, [_c('a', {
    ref: "link",
    staticClass: "menu-link__link",
    attrs: {
      "to": _vm.to
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.onClick($event)
      }
    }
  }, [_c('div', {
    ref: "title",
    staticClass: "menu-link__title"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.title) + "\n\t\t\t"), _c('div', {
    ref: "hoverLine",
    staticClass: "menu-link__hover"
  })]), _vm._v(" "), _c('div', {
    staticClass: "menu-link__subtitle"
  }, [_vm._v(_vm._s(_vm.subtitle))])])])
},staticRenderFns: []}


//////////////////
// WEBPACK FOOTER
// ./~/vue-loader/lib/template-compiler.js?id=data-v-764010b6!./~/vue-loader/lib/selector.js?type=template&index=0!./src/shared-components/Navigation/NavItem.vue
// module id = 276
// module chunks = 0