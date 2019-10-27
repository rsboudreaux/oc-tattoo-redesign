// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-264b6b45\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Footer.vue");
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = require("!../../node_modules/vue-style-loader/lib/addStylesClient.js")("1c04162a", content, true, {});


//////////////////
// WEBPACK FOOTER
// ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-264b6b45","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/Footer.vue
// module id = 46
// module chunks = 0