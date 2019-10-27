// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1aa8812c!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Work.vue");
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = require("!../../../node_modules/vue-style-loader/lib/addStylesClient.js")("3f69e783", content, true);


//////////////////
// WEBPACK FOOTER
// ./~/vue-style-loader!./~/css-loader!./~/vue-loader/lib/style-rewriter.js?id=data-v-1aa8812c!./~/postcss-loader!./~/sass-loader!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/spa/Work/Work.vue
// module id = 288
// module chunks = 0