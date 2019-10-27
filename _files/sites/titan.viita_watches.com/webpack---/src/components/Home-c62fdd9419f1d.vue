function injectStyle (ssrContext) {
  require("!!vue-style-loader!css-loader!../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-3b6839c5\",\"scoped\":false,\"hasInlineConfig\":false}!sass-loader!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Home.vue")
}
var normalizeComponent = require("!../../node_modules/vue-loader/lib/component-normalizer")
/* script */
export * from "!!babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./Home.vue"
import __vue_script__ from "!!babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./Home.vue"
/* template */
import __vue_template__ from "!!../../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-3b6839c5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./Home.vue"
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

export default Component.exports



//////////////////
// WEBPACK FOOTER
// ./src/components/Home.vue
// module id = 25
// module chunks = 0