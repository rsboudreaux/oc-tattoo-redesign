/* eslint-disable semi */
const ios = (
    navigator.userAgent.indexOf('iPhone') > 0 ||
    navigator.userAgent.indexOf('iPad') > 0 ||
    navigator.userAgent.indexOf('iPod') > 0)

export {
    ios as
    default
}