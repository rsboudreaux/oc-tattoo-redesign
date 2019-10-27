/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
    return this.__data__.get(key);
}

module.exports = stackGet;



//////////////////
// WEBPACK FOOTER
// ./~/lodash/_stackGet.js
// module id = 216
// module chunks = 0