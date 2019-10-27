/* eslint-disable semi */
/**
 * onchange handling utility -- esp. removes repeated copy/paste for preventing default
 */

/**
 * Attaches an onchange handler to a jQuery selector
 *
 * @param {string} selector
 * @param {function} callback
 * @param {string} retval - 'false' to always return false (and prevent Default);
 *                          'callback' to return whatever callback returns;
 *                          'default' to do whatever clickee would normally do after callback
 *
 * @return {boolean} yes or no to default behaviour after callback (eg: link clicked/button pressed)
 */
function onchange(selector, callback, retval = 'false') {
    if (typeof selector !== 'string')
        throw new Error('first arg should be a string')

    $(selector).on('change', (evt) => {
        const ret = callback(evt)
        if (retval === 'callback' && ret)
            return ret

        if (retval === 'default')
            return true

        // eslint-disable-next-line no-unused-expressions
        evt && evt.preventDefault && evt.preventDefault()
        // eslint-disable-next-line no-unused-expressions
        evt && evt.stopPropagation && evt.stopPropagation()
        return false
    })
}

export {
    onchange as
    default
}