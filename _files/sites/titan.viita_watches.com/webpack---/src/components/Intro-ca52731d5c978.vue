function injectStyle (ssrContext) {
  require("!!vue-style-loader!css-loader!../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-1db274e8\",\"scoped\":false,\"hasInlineConfig\":false}!sass-loader!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Intro.vue")
}
var normalizeComponent = require("!../../node_modules/vue-loader/lib/component-normalizer")
/* script */
export * from "!!babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./Intro.vue"
import __vue_script__ from "!!babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./Intro.vue"
/* template */
import __vue_template__ from "!!../../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-1db274e8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./Intro.vue"
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
// ./src/components/Intro.vue
// module id = 29
// module chunks = 0