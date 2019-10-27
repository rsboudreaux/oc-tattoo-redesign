module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "menu",
    staticClass: "menu menu--light"
  }, [_c('div', {
    staticClass: "menu-hit",
    on: {
      "click": _vm.toggleClose,
      "mouseover": _vm.iconMouseOver,
      "mouseout": _vm.iconMouseOut
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "menu-icon__container"
  }, [_c('div', {
    ref: "menuIcon",
    staticClass: "menu-icon"
  }, [_c('div', {
    staticClass: "menu-line menu-line--big"
  }), _vm._v(" "), _c('div', {
    staticClass: "menu-line menu-line--little"
  }), _vm._v(" "), _c('div', {
    staticClass: "menu-line menu-line--big"
  })]), _vm._v(" "), _c('span', {
    ref: "menuCircleHover",
    staticClass: "menu-circle-hover"
  })]), _vm._v(" "), _c('div', {
    ref: "menuLinks",
    staticClass: "menu-links"
  }, _vm._l((_vm.navItems), function(navItem) {
    return _c('nav-item', {
      attrs: {
        "title": navItem.title,
        "subtitle": navItem.subtitle,
        "to": navItem.to
      }
    })
  })), _vm._v(" "), _c('div', {
    ref: "menuBackground",
    staticClass: "menu-background"
  })])
},staticRenderFns: []}


//////////////////
// WEBPACK FOOTER
// ./~/vue-loader/lib/template-compiler.js?id=data-v-6e22b938!./~/vue-loader/lib/selector.js?type=template&index=0!./src/shared-components/Navigation/Navigation.vue
// module id = 275
// module chunks = 0