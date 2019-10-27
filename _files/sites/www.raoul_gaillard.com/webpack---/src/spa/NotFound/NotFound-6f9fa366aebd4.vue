// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = require("!!../../../node_modules/css-loader/index.js?minimize!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3f18172a!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NotFound.vue");
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = require("!../../../node_modules/vue-style-loader/lib/addStylesClient.js")("e653fda6", content, true);


//////////////////
// WEBPACK FOOTER
// ./~/vue-style-loader!./~/css-loader?minimize!./~/vue-loader/lib/style-rewriter.js?id=data-v-3f18172a!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/spa/NotFound/NotFound.vue
// module id = 308
// module chunks = 0