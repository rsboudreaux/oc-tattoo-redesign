/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}

module.exports = listCacheClear;



//////////////////
// WEBPACK FOOTER
// ./~/lodash/_listCacheClear.js
// module id = 192
// module chunks = 0