var getNative = require('./_getNative');

var defineProperty = (function() {
    try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
    } catch (e) {}
}());

module.exports = defineProperty;



//////////////////
// WEBPACK FOOTER
// ./~/lodash/_defineProperty.js
// module id = 174
// module chunks = 0