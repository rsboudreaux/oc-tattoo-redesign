(function(t, e) {
    "use strict";
    var n = {
        pulses: 1,
        interval: 0,
        returnDelay: 0,
        duration: 500
    };
    t.fn.pulse = function(u, a, r) {
        var i = "destroy" === u;
        return "function" == typeof a && (r = a, a = {}), a = t.extend({}, n, a), a.interval >= 0 || (a.interval = 0), a.returnDelay >= 0 || (a.returnDelay = 0), a.duration >= 0 || (a.duration = 500), a.pulses >= -1 || (a.pulses = 1), "function" != typeof r && (r = function() {}), this.each(function() {
            function n() {
                return void 0 === s.data("pulse") || s.data("pulse").stop ? void 0 : a.pulses > -1 && ++p > a.pulses ? r.apply(s) : (s.animate(u, f), void 0)
            }
            var o, s = t(this),
                l = {},
                d = s.data("pulse") || {};
            d.stop = i, s.data("pulse", d);
            for (o in u) u.hasOwnProperty(o) && (l[o] = s.css(o));
            var p = 0,
                c = t.extend({}, a);
            c.duration = a.duration / 2, c.complete = function() {
                e.setTimeout(n, a.interval)
            };
            var f = t.extend({}, a);
            f.duration = a.duration / 2, f.complete = function() {
                e.setTimeout(function() {
                    s.animate(l, c)
                }, a.returnDelay)
            }, n()
        })
    }
})(jQuery, window, document);