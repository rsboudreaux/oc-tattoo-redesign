! function() {
    function e(t, n) {
        var o = void 0,
            i = document.body || document.head;
        i ? (o = document.createElement("script"), o.onload = function() {
            n && n()
        }, o.src = t, i.appendChild(o)) : setTimeout(function() {
            e(t, n)
        }, 500)
    }
    if (!new RegExp("(bot|crawler)", "i").test(navigator.userAgent)) {
        var t = window._userway_config;
        navigator.userAgent.match(/mobile/i) && t && ("false" === t.mobile || !1 === t.mobile) || e("https://cdn.userway.org/widgetapp/2019-10-09/widget_app_1570634776945.js")
    }
}();