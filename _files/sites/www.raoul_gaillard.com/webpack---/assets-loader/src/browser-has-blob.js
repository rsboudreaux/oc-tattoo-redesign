'use strict';

module.exports = (function() {
    try {
        return !!new Blob();
    } catch (e) {
        return false;
    }
}());



//////////////////
// WEBPACK FOOTER
// ./~/assets-loader/src/browser-has-blob.js
// module id = 79
// module chunks = 0