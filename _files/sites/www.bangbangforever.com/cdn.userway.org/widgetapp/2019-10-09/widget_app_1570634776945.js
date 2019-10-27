"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
! function() {
    var t = "undefined" == typeof global ? self : global;
    if ("object" !== _typeof(t.UserWayWidgetApp)) {
        var n = {},
            e = {},
            o = {},
            r = {}.hasOwnProperty,
            i = /^\.\.?(\/|$)/,
            f = function(t, n) {
                for (var e, o = [], r = (i.test(n) ? t + "/" + n : n).split("/"), f = 0, u = r.length; f < u; f++) e = r[f], ".." === e ? o.pop() : "." !== e && "" !== e && o.push(e);
                return o.join("/")
            },
            u = function(t) {
                return t.split("/").slice(0, -1).join("/")
            },
            c = function(n) {
                return function(e) {
                    var o = f(u(n), e);
                    return t.UserWayWidgetApp.require(o, n)
                }
            },
            a = function(t, n) {
                var o = m && m.createHot(t),
                    r = {
                        id: t,
                        exports: {},
                        hot: o
                    };
                return e[t] = r, n(r.exports, c(t), r), r.exports
            },
            s = function t(n) {
                return o[n] ? t(o[n]) : n
            },
            l = function(t, n) {
                return s(f(u(t), n))
            },
            p = function(t, o) {
                null == o && (o = "/");
                var i = s(t);
                if (r.call(e, i)) return e[i].exports;
                if (r.call(n, i)) return a(i, n[i]);
                throw new Error("Cannot find module '" + t + "' from '" + o + "'")
            };
        p.alias = function(t, n) {
            o[n] = t
        };
        var y = /\.[^.\/]+$/,
            h = /\/index(\.[^\/]+)?$/,
            d = function(t) {
                if (y.test(t)) {
                    var n = t.replace(y, "");
                    r.call(o, n) && o[n].replace(y, "") !== n + "/index" || (o[n] = t)
                }
                if (h.test(t)) {
                    var e = t.replace(h, "");
                    r.call(o, e) || (o[e] = t)
                }
            };
        p.register = p.define = function(t, o) {
            if (t && "object" === (void 0 === t ? "undefined" : _typeof(t)))
                for (var i in t) r.call(t, i) && p.register(i, t[i]);
            else n[t] = o, delete e[t], d(t)
        }, p.list = function() {
            var t = [];
            for (var e in n) r.call(n, e) && t.push(e);
            return t
        };
        var m = t._hmr && new t._hmr(l, p, n, e);
        p._cache = e, p.hmr = m && m.wrap, p.brunch = !0, t.UserWayWidgetApp = {
            require: p
        }
    }
}();
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
! function(t) {
    function n(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function e() {
        for (var t = 0; t < P.length; t++) P[t][0](P[t][1]);
        P = [], m = !1
    }

    function o(t, n) {
        P.push([t, n]), m || (m = !0, j(e, 0))
    }

    function r(t, n) {
        function e(t) {
            u(n, t)
        }

        function o(t) {
            a(n, t)
        }
        try {
            t(e, o)
        } catch (t) {
            o(t)
        }
    }

    function i(t) {
        var n = t.owner,
            e = n.state_,
            o = n.data_,
            r = t[e],
            i = t.then;
        if ("function" == typeof r) {
            e = _;
            try {
                o = r(o)
            } catch (t) {
                a(i, t)
            }
        }
        f(i, o) || (e === _ && u(i, o), e === b && a(i, o))
    }

    function f(t, n) {
        var e;
        try {
            if (t === n) throw new TypeError("A promises callback cannot return that same promise.");
            if (n && ("function" == typeof n || "object" === (void 0 === n ? "undefined" : _typeof(n)))) {
                var o = n.then;
                if ("function" == typeof o) return o.call(n, function(o) {
                    e || (e = !0, n !== o ? u(t, o) : c(t, o))
                }, function(n) {
                    e || (e = !0, a(t, n))
                }), !0
            }
        } catch (n) {
            return e || a(t, n), !0
        }
        return !1
    }

    function u(t, n) {
        t !== n && f(t, n) || c(t, n)
    }

    function c(t, n) {
        t.state_ === v && (t.state_ = w, t.data_ = n, o(l, t))
    }

    function a(t, n) {
        t.state_ === v && (t.state_ = w, t.data_ = n, o(p, t))
    }

    function s(t) {
        var n = t.then_;
        t.then_ = void 0;
        for (var e = 0; e < n.length; e++) i(n[e])
    }

    function l(t) {
        t.state_ = _, s(t)
    }

    function p(t) {
        t.state_ = b, s(t)
    }

    function y(t) {
        if ("function" != typeof t) throw new TypeError("Promise constructor takes a function argument");
        if (this instanceof y == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        this.then_ = [], r(t, this)
    }
    var h = t.Promise,
        d = h && "resolve" in h && "reject" in h && "all" in h && "race" in h && function() {
            var t;
            return new h(function(n) {
                t = n
            }), "function" == typeof t
        }();
    "undefined" != typeof exports && exports ? (exports.Promise = d ? h : y, exports.Polyfill = y) : "function" == typeof define && define.amd ? define("uw_widget_components/promisePolyfil", function() {
        return d ? h : y
    }) : d || (t.Promise = y);
    var m, v = "pending",
        w = "sealed",
        _ = "fulfilled",
        b = "rejected",
        g = function() {},
        j = "undefined" != typeof setImmediate ? setImmediate : setTimeout,
        P = [];
    y.prototype = {
        constructor: y,
        state_: v,
        then_: null,
        data_: void 0,
        then: function(t, n) {
            var e = {
                owner: this,
                then: new this.constructor(g),
                fulfilled: t,
                rejected: n
            };
            return this.state_ === _ || this.state_ === b ? o(i, e) : this.then_.push(e), e.then
        },
        catch: function(t) {
            return this.then(null, t)
        }
    }, y.all = function(t) {
        var e = this;
        if (!n(t)) throw new TypeError("You must pass an array to Promise.all().");
        return new e(function(n, e) {
            for (var o, r = [], i = 0, f = 0; f < t.length; f++) o = t[f], o && "function" == typeof o.then ? o.then(function(t) {
                return i++,
                    function(e) {
                        r[t] = e, --i || n(r)
                    }
            }(f), e) : r[f] = o;
            i || n(r)
        })
    }, y.race = function(t) {
        var e = this;
        if (!n(t)) throw new TypeError("You must pass an array to Promise.race().");
        return new e(function(n, e) {
            for (var o, r = 0; r < t.length; r++) o = t[r], o && "function" == typeof o.then ? o.then(n, e) : n(o)
        })
    }, y.resolve = function(t) {
        var n = this;
        return t && "object" === (void 0 === t ? "undefined" : _typeof(t)) && t.constructor === n ? t : new n(function(n) {
            n(t)
        })
    }, y.reject = function(t) {
        return new this(function(n, e) {
            e(t)
        })
    }
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : void 0);
"use strict";
UserWayWidgetApp.require.register("main.js", function(e, t, i) {
    function a() {
        ae.init(), n() ? o() : ($(), r())
    }

    function s() {
        ie(), ae.addStyleString(Se), ae.addHtmlString(Me, Oe, re), S(), X(), y(), f(), L(), ee(), P(), k(), C(), A()
    }

    function r() {
        window._userway || (window._userway = !0, u(), J(), N(function() {
            ae.isMobile() && re.tunings && ("false" === re.tunings.mobile || !1 === re.tunings.mobile) ? console.warn("UserWay Accessibility widget is disabled on mobile devices via tunings setting") : s()
        }))
    }

    function n() {
        return !!ae.getCookie("hidewidget")
    }

    function o() {
        window.addEventListener("keydown", c)
    }

    function u() {
        o(), window.addEventListener("message", function(e) {
            var t = e.data || {};
            if (t.isUserWay)
                if ("mailToSupport" === t.action) window.open("mailto:support@userway.org", "_blank");
                else if ("getConfig" === t.action) b("hide"), l();
            else if ("close" === t.action) {
                var i = document.getElementsByClassName("userway")[0];
                i && i.classList.remove("userway_on");
                var a = document.getElementsByClassName("userway_accessibility_icon")[0];
                a && (a.setAttribute("aria-pressed", i.classList.contains("userway_on")), a.setAttribute("aria-expanded", i.classList.contains("userway_on"))), window.focus()
            } else if ("close_first_tab" === t.action) {
                if (R(), t.ftab_option) {
                    var s = t.ftab_option;
                    "enable_for_visually_impaired" === s && j(), "skip_to_main" === s && B(), "open_widget" === s && U()
                }
            } else if ("setProperties" === t.action) {
                for (var r in t.settings) t.settings.hasOwnProperty(r) && void 0 !== re.settings[r] && "userway_hidden" !== r && (re.settings[r].value = t.settings[r].value);
                Z(), ee()
            } else if ("pageStructureDialog" === t.action) {
                var n = t.settings.tab || "headers";
                "links" === n ? we.showPageStructureLinks() : "landmarks" === n ? we.showPageStructureLandmarks() : we.showPageStructureHeaders()
            } else if ("setWidgetColor" === t.action) re.tunings.widget_color = t.color, re.tunings.widget_color_gradient = t.gradient, y(), L();
            else if ("setIconType" === t.action) re.tunings.widget_icon_type = t.iconType, y();
            else if ("setIconSize" === t.action) re.tunings.widget_icon_size = t.iconSize, y();
            else if ("setWidgetLanguage" === t.action) re.tunings.widget_language = t.language, T();
            else if ("setWidgetPosition" === t.action) t.byUser || ae.removeProperty(re, Ce), re.tunings.widget_position = t.position, X(t.byUser ? t.position : null), y();
            else if ("setTimeHideWidget" === t.action) K(t.value);
            else if ("takeScreenShot" === t.action) V();
            else if ("location_request" === t.action) ae.postMessage({
                action: "location_response",
                location: {
                    hash: location.hash,
                    host: location.host,
                    hostname: location.hostname,
                    href: location.href,
                    origin: location.origin,
                    pathname: location.pathname,
                    port: location.port,
                    protocol: location.protocol
                }
            });
            else if ("setReaderGuideYPosition" === t.action) {
                var o = t.value;
                if (ue) {
                    var u = "ie" === re.browser ? window.pageYOffset || document.documentElement.scrollTop : window.scrollY;
                    ue.setRulerElPosition(u + o)
                }
            }
        }, !1)
    }

    function c(e) {
        85 !== e.keyCode && 85 !== e.which || !e.ctrlKey || (e.preventDefault(), n() ? (ae.setCookie("hidewidget", "", null), window.location.reload()) : D())
    }

    function l() {
        ae.postMessage({
            action: "sendConfig",
            config: re
        })
    }

    function y() {
        var e = "" + v(),
            t = h();
        _(e, t), p(e, t), re.isMobile && w(e, t), d()
    }

    function d() {
        var e = document.querySelector(".userway-spacer");
        if (!document.querySelector("img.check_on")) {
            var t = document.createElement("IMG");
            t.classList.add("check_on"), t.width = 18, t.height = 20, t.alt = "Accessibility menu is on", e.parentNode.insertBefore(t, e.nextSibling), g(t, "check_on.svg")
        }
    }

    function p(e, t) {
        var i = document.querySelector(".userway_preloader_spinner");
        if (i) {
            i.innerHTML = '<img width="43" height="43" class="spinner_icon_' + (t.isLight ? "black" : "white") + '" aria-hidden="true" alt="Spinner: ' + (t.isLight ? "Black" : "White") + ' decorative" src="" />';
            var a = document.querySelector("img.spinner_icon_white");
            m(t, document.querySelector("img.spinner_icon_black"), a, "spin")
        }
    }

    function w(e, t) {
        var i = document.querySelector(".userway_hide_icons_wrapper"),
            a = t.isLight ? "black" : "white",
            s = void 0,
            r = void 0;
        switch (e) {
            case "1":
            case "2":
            case "3":
                i.innerHTML = '<img width="14" height="16" class="userway_hide_icon_right userway_icon_' + a + '" alt="' + a + ' right arrow" src="">', s = document.querySelector("img.userway_hide_icon_right.userway_icon_white"), r = document.querySelector("img.userway_hide_icon_right.userway_icon_black"), m(t, r, s, "right");
                break;
            case "4":
                i.innerHTML = '<img width="14" height="16" class="userway_hide_icon_down userway_icon_' + a + '" alt="' + a + ' down arrow" src="">', s = document.querySelector("img.userway_hide_icon_down.userway_icon_white"), r = document.querySelector("img.userway_hide_icon_down.userway_icon_black"), m(t, r, s, "down");
                break;
            case "5":
            case "6":
            case "7":
                i.innerHTML = '<img width="14" height="16" class="userway_hide_icon_left userway_icon_' + a + '" alt="' + a + ' left arrow" src="">', s = document.querySelector("img.userway_hide_icon_left.userway_icon_white"), r = document.querySelector("img.userway_hide_icon_left.userway_icon_black"), m(t, r, s, "left");
                break;
            case "8":
                i.innerHTML = '<img width="14" height="16" class="userway_hide_icon_up userway_icon_' + a + '" alt="' + a + ' up arrow" src="">', s = document.querySelector("img.userway_hide_icon_up.userway_icon_white"), r = document.querySelector("img.userway_hide_icon_up.userway_icon_black"), m(t, r, s, "up")
        }
    }

    function _(e, t) {
        var i = document.querySelector("div.userway"),
            a = "" + (_userway_config.type || re.tunings.widget_icon_type || Le.UW_WIDGET_ICON_TYPE),
            s = "" + x(),
            r = -1 !== ["4", "5", "6", "7"].indexOf(e),
            n = "Icon of a person: black decorative",
            o = "Icon of a person: white decorative",
            u = document.querySelector(".userway_icon_image_wrapper");
        if ("4" !== a) i.classList.contains("userway-accessibility") && i.classList.remove("userway-accessibility"), u.innerHTML = '<img width="43" height="43" class="userway_icon_' + (t.isLight ? "black" : "white") + '" aria-hidden="true" alt="Icon of a person: decorative" src="" />';
        else {
            ae.addUwStylesheetMetropolisFont(re), i.classList.add("userway-accessibility");
            var c = re.language && re.locales[re.language] ? re.locales[re.language].widget.text_icon_small : re.locales.en.widget.text_icon_small,
                l = re.language && re.locales[re.language] ? re.locales[re.language].widget.text_icon_large : re.locales.en.widget.text_icon_large,
                y = "large" !== s || ae.isMobile() ? c : l;
            u.innerHTML = '<div class="accessibility-btn"><span style="font-family: Metropolis, serif!important;" class="accessibility-btn__text">' + y + "</span></div>"
        }
        var d = document.querySelector("img.userway_icon_white"),
            p = document.querySelector("img.userway_icon_black");
        switch (a) {
            case "1":
                m(t, p, d, "body"), p && p.setAttribute("alt", n), d && d.setAttribute("alt", o);
                break;
            case "2":
                r ? m(t, p, d, "wheel_right") : m(t, p, d, "wheel_left"), p && p.setAttribute("alt", "Icon of a person in a wheelchair using a laptop: black decorative"), d && d.setAttribute("alt", "Icon of a person in a wheelchair using a laptop: white decorative");
                break;
            case "3":
                m(t, p, d, "eye"), p && p.setAttribute("alt", "Icon of an eye with a line across it: black decorative"), d && d.setAttribute("alt", "Icon of an eye with a line across it: white decorative");
                break;
            case "4":
                break;
            default:
                m(t, p, d, "body"), p && p.setAttribute("alt", n), d && d.setAttribute("alt", o)
        }
        "large" !== s || ae.isMobile() ? i.classList.remove("userway-the-big") : i.classList.add("userway-the-big")
    }

    function m(e, t, i, a) {
        e && e.isLight ? g(t, a + "_bl.svg") : g(i, a + "_wh.svg")
    }

    function g(e, t) {
        e.setAttribute("src", re.cdn + "widgetapp/images/" + t)
    }

    function f() {
        var e = document.getElementById("userwayAccessibilityIcon"),
            t = function(e) {
                9 !== (e.keyCode ? e.keyCode : e.which) || e.shiftKey || (e.preventDefault(), document.activeElement && document.activeElement !== document.body || Ne.showFirstTabActions(), a())
            },
            i = function() {
                a()
            },
            a = function() {
                document.removeEventListener("keydown", t), document.removeEventListener("click", i)
            };
        ! function() {
            document.addEventListener("keydown", t), document.addEventListener("click", i)
        }(), window.addEventListener("keyup", function(t) {
            9 !== (t.keyCode ? t.keyCode : t.which) || t.shiftKey || document.activeElement === e && document.hasFocus() && Ne.showFirstTabActions()
        })
    }

    function b(e) {
        e = void 0 === e ? "toggle" : e;
        var t = document.getElementsByClassName("userway_accessibility_icon")[0];
        "show" === e ? t.classList.add("loading") : "hide" === e ? t.classList.remove("loading") : "toggle" === e && t.classList.toggle("loading")
    }

    function h() {
        var e = {
                color: Le.UW_WIDGET_COLOR,
                gradient: null,
                isLight: !1
            },
            t = re.color || re.tunings.widget_color;
        if (t) {
            var i = ae.hexToRgb(t.replace("#", ""));
            e.isLight = ae.colourIsLight(i[0], i[1], i[2]), e.color = t
        }
        re.tunings.widget_color_gradient && re.tunings.widget_color_gradient === Le.UW_WIDGET_COLOR_GRADIENT && (re.tunings.widget_color_gradient = null);
        var a = re.color_gradient || re.tunings.widget_color_gradient;
        return a && (e.gradient = a), e
    }

    function v() {
        var e = ae.getProperty(re, Ce);
        return e ? (re.userSpecificPosition = e, re.tunings.widget_position = e, e) : _userway_config.position || re.position || re.tunings.widget_position || Le.UW_BUTTON_POSITION
    }

    function x() {
        return _userway_config.size || re.size || re.tunings.widget_icon_size || Le.UW_WIDGET_ICON_SIZE
    }

    function E(e) {
        if (e) {
            var t = document.querySelector(".uw-popup-header"),
                i = document.querySelector(".uw-popup-header-text"),
                a = t.querySelector(".uw-popup-header-close-path"),
                s = e.gradient || e.color,
                r = e.isLight ? "#000000" : "#ffffff";
            t && (t.setAttribute("style", "background: " + s + "!important; color:" + r + "!important"), i.setAttribute("style", "color:" + r + "!important")), a && a.setAttribute("style", "stroke: " + r + "!important")
        }
    }

    function L() {
        var e = document.getElementsByClassName("userway_accessibility_icon")[0],
            t = h(),
            i = t.gradient || t.color;
        if (i) {
            e && (e.setAttribute("style", "background: " + i + "!important"), t.isLight ? (e.classList.add("userway_light"), e.classList.remove("userway_dark")) : (e.classList.remove("userway_light"), e.classList.add("userway_dark")));
            var a = document.getElementsByClassName("userway_hide_on")[0];
            a && a.setAttribute("style", "background:" + t.color + "!important");
            var s = document.getElementsByClassName("userway_hide_off")[0];
            s && s.setAttribute("style", "background: " + t.color + "!important");
            var r = document.querySelector(".userway_hide_icon span");
            r && r.setAttribute("style", "background: " + t.color + "!important"), E(t)
        } else e.classList.add("userway_dark");
        ae.postMessage({
            action: "setWidgetColour",
            payload: t || null
        })
    }

    function T() {
        re.tunings.widget_language && "null" !== re.tunings.widget_language && (re.language = re.tunings.widget_language)
    }

    function N(e) {
        var t = JSON.stringify({
            settings: re.settings,
            origin: "file://" === window.location.origin ? window.location.href.match(/([^\/]+?)\.(?:[a-z0-9]+?)$/i)[1] : window.location.origin,
            referrer: document.referrer,
            uwCfgLng: re.languageHardcoded,
            uwPageLangHtml: document.querySelector("html").lang,
            uwPageLangWindow: window.navigator.language
        });
        re && (re.account || re.code) || (console.warn("Widget initialization error: no account/code provided. Default code will be used"), re.account = "ix74xN2euu", re.defaultAccountUsed = !0);
        var i = new XMLHttpRequest;
        i.open("post", Ae + "/tunings/" + (re.account || re.code)), i.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), i.onload = function() {
            try {
                if (503 === i.status) throw new Error("Error 503");
                if (502 === i.status) throw new Error("Error 502");
                if (200 !== i.status) throw new Error("Not 200 status");
                var t = JSON.parse(i.response);
                if (200 !== t.code) return void console.error("Initialization error: " + t.code + " - " + t.message);
                re.tunings = t.data.tunings, re.locales = t.data.locales, re.services = t.data.services, re.language = t.data.widgetL18nLang
            } catch (e) {
                console.error(e)
            }
            e && e()
        }, i.onerror = function(t) {
            console.error(t), console.error("An error occurred during the /tunings request"), e && e()
        }, i.onabort = function(t) {
            console.error(t), console.log("The /tunings request was aborted"), e && e()
        }, i.send(t)
    }

    function k() {
        var e = document.getElementsByTagName("body")[0],
            t = document.getElementsByClassName("userway_accessibility_icon")[0],
            i = document.getElementsByClassName("userway")[0],
            a = document.getElementsByClassName("userway_hide")[0],
            s = document.getElementsByClassName("userway_hide_icon")[0];
        e && e.addEventListener("touchstart", function(e) {
            for (var t = !1, a = e.target; a;) {
                if (a.classList && a.classList.contains("userway_accessibility_icon")) {
                    t = !0;
                    break
                }
                a = a.parentNode
            }
            t || i.classList.remove("userway_over")
        }), t.addEventListener("touchstart", function() {
            setTimeout(function() {
                i.classList.add("userway_over")
            }, 50)
        }), t.addEventListener("click", function() {
            re.isMobile && !i.classList.contains("userway_over") && i.classList.contains("userway_hidden") || D()
        }), t.addEventListener("keyup", function(e) {
            32 !== e.keyCode && 13 !== e.keyCode || D()
        }), t.addEventListener("keyup", function(e) {
            27 === e.keyCode && z()
        }), t.addEventListener("mouseover", function() {
            re.isMobile || (clearTimeout(Ie), Ie = setTimeout(function() {
                i.classList.add("userway_over")
            }, 100))
        }), t.addEventListener("mouseout", function() {
            re.isMobile || (clearTimeout(Ie), Ie = setTimeout(function() {
                i.classList.remove("userway_over")
            }, 100))
        }), a.addEventListener("click", function(e) {
            e.stopPropagation(), i.classList.toggle("userway_hidden"), i.classList.contains("userway_hidden") ? ae.setProperty(re, "userway_hidden", !0) : ae.setProperty(re, "userway_hidden", !1)
        }), s.addEventListener("click", function(e) {
            e.stopPropagation(), i.classList.add("userway_hidden"), ae.setProperty(re, "userway_hidden", !0), i.classList.remove("userway_over")
        })
    }

    function A() {
        O(he)
    }

    function S() {
        O(ve)
    }

    function M(e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        O(e + t, i ? {
            state: i
        } : null)
    }

    function O(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = {
                userWayInstance: UserWay
            };
        t && (i = ae.mergeObjects([i, t]));
        try {
            var a = ae.detectBrowser(),
                s = void 0;
            "ie" === a ? (s = document.createEvent("CustomEvent"), s.initCustomEvent(e, !0, !0, i)) : s = new CustomEvent(e, {
                detail: i
            }), document.dispatchEvent(s)
        } catch (e) {
            console.error(e)
        }
    }

    function C() {
        try {
            var e = window.location.hash.substr(1);
            e && e.toLowerCase() === be && q()
        } catch (e) {}
    }

    function I(e) {
        try {
            var t = document.querySelector("div.userway");
            if (!t) return console.warn("No UserWay accessibility icon node found");
            e ? "visible" === e ? t.classList.remove("hidden") : t.classList.add("hidden") : t.classList.contains("hidden") ? t.classList.remove("hidden") : t.classList.add("hidden")
        } catch (e) {
            console.error(e)
        }
    }

    function D() {
        document.getElementsByClassName("userway")[0].classList.contains("userway_on") ? z() : q()
    }

    function P() {
        var e = h(),
            t = document.querySelector(".userway_ft_iframe"),
            i = re.language,
            a = e.gradient ? e.gradient : e.color,
            s = e.isLight,
            r = x(),
            n = v(),
            o = ae.getModalCompanyLogoSource(re),
            u = "?color=" + a + "&isLight=" + s + "&size=" + r + "&position=" + n + (o.src ? "&logosrc=" + encodeURIComponent(o.src) : "") + (o.url ? "&logourl=" + encodeURIComponent(o.url) : "") + (W() ? "&enabled=1" : "") + "&rand=" + +new Date;
        t.setAttribute("src", ke + "/" + i + "/ftab.html" + u)
    }

    function R() {
        document.getElementsByClassName("userway")[0].classList.remove("userway_ft_on")
    }

    function j() {
        W() ? (Ne.setFeature("s1", 0), Ne.setFeature("s2", 0), Ne.setFeature("s4", 0), Ne.setFeature("s6", 0), Ne.setFeature("s7", 0), Ne.setFeature("s12", 0), Ne.setFeature("s13", 0), Ne.setFeature("s14", 0)) : (Ne.setFeature("s1", 1), Ne.setFeature("s2", 1), Ne.setFeature("s4", 1), Ne.setFeature("s6", 1), Ne.setFeature("s7", 1), Ne.setFeature("s12", 1), Ne.setFeature("s13", 1), Ne.setFeature("s14", 1))
    }

    function W() {
        return re.settings["userway-s1"].value && re.settings["userway-s2"].value && (1 === re.settings["userway-s4"].value || "1" === re.settings["userway-s4"].value) && re.settings["userway-s6"].value && re.settings["userway-s7"].value && re.settings["userway-s12"].value && re.settings["userway-s13"].value && re.settings["userway-s13"].value && re.settings["userway-s14"].value
    }

    function B() {
        var e = document.getElementById(fe),
            t = document.querySelector("h1"),
            i = document.querySelector("main"),
            a = document.querySelector('[role="main"]'),
            s = document.querySelectorAll("h2, h3, h4, h5, h6"),
            r = s.length ? s[0] : null,
            n = e || t || i || a || r || document.body;
        n.getAttribute("tabindex") || (n.setAttribute("tabindex", "-1"), setTimeout(function() {
            n.removeAttribute("tabindex")
        }, 5)), n.focus(), ae.scrollToElement(n, 70)
    }

    function U() {
        q()
    }

    function q() {
        var e = re.language,
            t = document.getElementsByClassName("userway_iframe")[0];
        if (t.hasAttribute("src")) H();
        else {
            t.setAttribute("src", ke + "/" + e + "/?code=" + (re.account || re.code) + "&rand=" + +new Date);
            var i = JSON.stringify({
                code: re.account || re.code,
                origin: window.location.origin,
                referrer: document.referrer
            });
            b("show");
            var a = new XMLHttpRequest;
            a.open("post", Ae + "/stats/opens", !0), a.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), a.send(i),
                function() {
                    setTimeout(function() {
                        H()
                    }, 300)
                }()
        }
        ae.postMessage({
            action: "toggled",
            state: "show"
        }), _e.hideActiveTooltip()
    }

    function H() {
        var e = document.getElementsByClassName("userway")[0];
        e.classList.add("userway_on");
        var t = document.getElementsByClassName("userway_accessibility_icon")[0];
        t.setAttribute("aria-pressed", e.classList.contains("userway_on")), t.setAttribute("aria-expanded", e.classList.contains("userway_on"))
    }

    function z() {
        R();
        var e = document.getElementsByClassName("userway")[0];
        e.classList.remove("userway_on");
        var t = document.getElementsByClassName("userway_accessibility_icon")[0];
        t.setAttribute("aria-pressed", e.classList.contains("userway_on")), t.setAttribute("aria-expanded", e.classList.contains("userway_on")), ae.postMessage({
            action: "toggled",
            state: "hide"
        })
    }

    function F() {
        var e = window,
            t = "inner";
        return "innerWidth" in window || (t = "client", e = document.documentElement || document.body), {
            width: e[t + "Width"],
            height: e[t + "Height"]
        }
    }

    function V() {
        ae.loadDeferredJs(Te, function() {
            G()
        }, function(e) {
            console.error(e)
        })
    }

    function G() {
        var e = document.getElementsByClassName("userway")[0],
            t = document.querySelector("#fb-root");
        if (!e) return !1;
        e.classList.remove("userway_on"), t && t.setAttribute("style", "display:none"), b("show");
        var i = (html2canvas(document.body, {
            allowTaint: !1,
            useCORS: !1,
            width: 300,
            height: 300
        }).then(function(i) {
            var a = document.createElement("canvas"),
                s = a.getContext("2d"),
                r = F();
            s.canvas.width = r.width, s.canvas.height = r.height, s.drawImage(i, 0, 0, r.width, r.height, 0, 0, r.width, r.height);
            var n = a.toDataURL("image/png");
            t && t.removeAttribute("style"), ae.postMessage({
                action: "sendScreenShotPreview",
                imageSrc: n
            }), e.classList.add("userway_on"), b("hide")
        }).catch(function(t) {
            e.classList.add("userway_on"), b("hide"), i && clearTimeout(i)
        }), setTimeout(function() {
            e.classList.add("userway_on"), b("hide")
        }, 5e3))
    }

    function Y(e, t) {
        var i = new RegExp("\\b" + t + ".*?\\b", "g");
        return e.className = e.className.replace(i, ""), e
    }

    function X(e) {
        var t = e || v();
        e && (re.settings[Ce] = {}, ae.setProperty(re, Ce, t));
        var i = document.getElementsByClassName("userway"),
            a = document.getElementsByClassName("userway_iframe")[0];
        (Y(a, "userway_p"), a.classList.add("userway_p" + t), i.length > 0 && null !== i[0] && (Y(i[0], "userway_p"), i[0].classList.add("userway_p" + t), setTimeout(function() {
            i[0].style.setProperty("visibility", "", "")
        }, 250)), ae.getProperty(re, "userway_hidden")) && document.getElementsByClassName("userway")[0].classList.add("userway_hidden")
    }

    function K(e) {
        re.settings.hideWidget = {};
        var t = e.timestamp > 0 ? {
            "max-age": e.timestamp / 1e3
        } : null;
        ae.setCookie("hidewidget", e.timestamp, t), z(), I("hidden");
        for (var i in re.settings) re.settings[i].hasOwnProperty("value") && (re.settings[i].value = 0);
        Z()
    }

    function Q(e, t) {
        var i = "userway-" + e;
        if (void 0 !== t)
            if ("s2" === e) re.settings[i].value = t;
            else if ("s3" === e) - 1 !== [!1, 1, 2, 3, 4].indexOf(t) ? re.settings[i].value = t : re.settings[i].value = 0;
        else if ("s4" === e) - 1 !== [!1, 1, 2, 3, 4].indexOf(t) ? re.settings[i].value = t : re.settings[i].value = 0;
        else if ("s14" === e) - 1 !== [!1, 1, 2, 3].indexOf(t) ? re.settings[i].value = t : re.settings[i].value = 0;
        else if ("s8" === e)
            for (var a in re.settings) re.settings[a].value = 0;
        else re.settings[i].value = t;
        Z(), ee()
    }

    function Z() {
        for (var e in re.settings) "userway_hidden" === e ? ae.setProperty(re, e, re.settings[e]) : ae.setProperty(re, e, re.settings[e].value)
    }

    function J() {
        var e = ae.getProperty(re, "userway-s5");
        ae.removeProperty(re, "userway-s5"), e && (ae.setProperty(re, "userway-s3", 4), re.settings["userway-s3"].value = 4);
        for (var t in re.settings) re.settings.hasOwnProperty(t) && (re.settings[t].value = ae.getProperty(re, t))
    }

    function $() {
        if ("undefined" != typeof _userway_config)
            for (var e in _userway_config) _userway_config.hasOwnProperty(e) && (re[e] = _userway_config[e], "language" === e && _userway_config[e] && (re.languageHardcoded = _userway_config[e]))
    }

    function ee() {
        var e = !1;
        for (var t in re.settings)
            if (re.settings.hasOwnProperty(t)) {
                if (re.settings[t].value) {
                    var i = xe,
                        a = null;
                    "userway-s1" === t ? (oe.enable(), a = "s1") : "userway-s2" === t ? (ue.enableBigCursor(), a = "s2") : "userway-s3" === t ? (le.turnOffColorFeature(t), le.turnOnColorFeature(t, re), a = "s3") : "userway-s4" === t ? (ce.enable(re), a = "s4") : "userway-s5" === t ? console.warn("s5 key: shouldn't happen anymore") : "userway-s6" === t ? (ye.enable(), a = "s6") : "userway-s7" === t ? (de.enable(), a = "s7") : "userway-s9" === t ? (ne.enable(re), a = "s9") : "userway-s10" === t ? (ue.enableReadingGuide(), a = "s10") : "userway-s11" === t ? (we.showPageStructureHeaders(), a = "s11") : "userway-s12" === t ? (_e.enable(), a = "s12") : "userway-s13" === t ? (me.enable(), a = "s13") : "userway-s14" === t && (ge.enable(re), a = "s14"), e = !0, a && M(i, a, re.settings[t].value)
                }
                if (!re.settings[t].value) {
                    var s = Ee,
                        r = null;
                    "userway-s1" === t ? (oe.disable(), r = "s1") : "userway-s2" === t ? (ue.disableBigCursor(), r = "s2") : "userway-s3" === t ? (le.turnOffColorFeature(t), r = "s3") : "userway-s4" === t ? (ce.disable(), r = "s4") : "userway-s5" === t ? console.warn("s5 key: shouldn't happen anymore") : "userway-s6" === t ? (ye.disable(), r = "s6") : "userway-s7" === t ? (de.disable(), r = "s7") : "userway-s9" === t ? (ne.disable(), r = "s9") : "userway-s10" === t ? (ue.disableReadingGuide(), r = "s10") : "userway-s12" === t ? (_e.disable(), r = "s12") : "userway-s13" === t ? (ge.disable(), r = "s13") : "userway-s14" === t && (ge.disable(), r = "s14"), r && M(s, r)
                }
            }
        var n = document.getElementsByClassName("userway")[0];
        e ? n.classList.add("userway_enabled") : n.classList.remove("userway_enabled")
    }

    function te() {
        var e = function(e, t) {
                for (var i = 0; i < e.length; i++) {
                    var a = e[i];
                    "childList" === a.type && se.emitEvent(Ne.USERWAY_TARGET_SITE_DOM_CHANGED_EVENT, [re, a.target, a.addedNodes, a.removedNodes])
                }
            },
            t = new MutationObserver(e);
        document.body && t.observe(document.body, {
            attributes: !1,
            childList: !0,
            subtree: !0
        })
    }

    function ie() {
        oe.init(re, se), ue.init(re, se), ce.init(re, se), le.init(re, se), ye.init(re, se), de.init(re, se), pe.init(re, se), ne.init(re, se), we.init(re, se), _e.init(re, se), me.init(re, se), ge.init(re, se), te()
    }
    var ae = t("./components/util"),
        se = new(t("./components/event_emitter")),
        re = function() {
            var e = ["account", "position", "size", "language", "color", "type", "statement_text", "statement_url", "mobile"];
            if ("undefined" == typeof _userway_config || !_userway_config) {
                var t = document.getElementById("accessibility-widget-loader");
                if (window._userway_config = {}, t)
                    for (var i = t.attributes, a = i.length - 1; a >= 0; a--) {
                        var s = i[a],
                            r = s.name.replace(/(^data-)/i, "");
                        r && e.indexOf(r) > -1 && (window._userway_config[r] = s.value)
                    }
            }
            return {
                _userway_config: _userway_config,
                browser: ae.detectBrowser(),
                isMobile: ae.isMobile(),
                supportsLocalStorage: ae.supportsLocalStorage(),
                href: ae.getHref(),
                account: "",
                iconType: "1",
                language: "en",
                languageHardcoded: null,
                async: !1,
                settings: {
                    "userway-s1": {
                        value: 0,
                        disabled: !1
                    },
                    "userway-s2": {
                        value: 0,
                        disabled: !1
                    },
                    "userway-s3": {
                        value: 0,
                        disabled: !1
                    },
                    "userway-s4": {
                        value: 0,
                        disabled: !1
                    },
                    "userway-s6": {
                        value: 0,
                        disabled: !1
                    },
                    "userway-s7": {
                        value: 0,
                        disabled: !1
                    },
                    "userway-s8": {
                        value: 0,
                        disabled: !1
                    },
                    "userway-s9": {
                        value: 0,
                        disabled: !1
                    },
                    "userway-s10": {
                        value: 0,
                        disabled: !1
                    },
                    "userway-s11": {
                        value: 0,
                        disabled: !1
                    },
                    "userway-s12": {
                        value: 0,
                        disabled: !1
                    },
                    "userway-s13": {
                        value: 0,
                        disabled: !1
                    },
                    "userway-s14": {
                        value: 0,
                        disabled: !1
                    }
                },
                tunings: {},
                cdn: "https://cdn.userway.org/"
            }
        }(),
        ne = t("./features/responsive_voice"),
        oe = t("./features/keyboard_navigation"),
        ue = t("./features/cursor"),
        ce = t("./features/bigger_text"),
        le = t("./features/uw_color_manipulation_service"),
        ye = t("./features/highlinks"),
        de = t("./features/legible_text"),
        pe = t("./features/browser_js_api"),
        we = t("./features/page_structure"),
        _e = t("./features/tooltips"),
        me = t("./features/stop_animations"),
        ge = t("./features/spacing_text"),
        fe = "uw_skip_to_main_content_anchor",
        be = "uaw",
        he = "userway:render_completed",
        ve = "userway:init_completed",
        xe = "userway:feature_enabled_",
        Ee = "userway:feature_disabled_",
        Le = {
            UW_BUTTON_POSITION: "1",
            UW_WIDGET_COLOR: "#003d68",
            UW_WIDGET_COLOR_GRADIENT: "off",
            UW_WIDGET_ICON_TYPE: "1",
            UW_WIDGET_ICON_SIZE: "small"
        },
        Te = re.cdn + "vendor/html2canvas.min.js",
        Ne = {};
    Ne.USERWAY_TARGET_SITE_DOM_CHANGED_EVENT = "USERWAY_TARGET_SITE_DOM_CHANGED_EVENT", Ne.ELEMENT_TYPE = {
        UNKNOWN: "UNKNOWN",
        NOT_ALLOWED: "NOT_ALLOWED",
        TEXT_NODE: "TEXT_NODE",
        LANDMARK: "LANDMARK",
        CONTROL: "CONTROL",
        HEADING: "HEADING",
        HAS_ALT_DESCRIPTION: "HAS_ALT_DESCRIPTION",
        COMPOSED_TEXT_NODES: "COMPOSED_TEXT_NODES"
    };
    var ke = "https://cdn.userway.org/widget",
        Ae = "https://userway.org/api",
        Se = '@keyframes uwPageStructurePopupSlideTop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes block_loading{0%{transform:translateX(-100%)}to{transform:translateX(333%)}}@keyframes standard{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-header .uw-popup-header-close svg{position:relative!important;width:14px!important;height:14px!important;margin:0!important;left:0!important;top:0!important;right:0!important;bottom:0!important}@media (max-width:780px),(max-height:575px){body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-header{padding:12px 10px;height:44px;font-size:12px!important}}@media (max-width:1024px),(max-height:650px){body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-header{padding:15px 18px;font-size:13px!important}}@media (max-width:1250px),(max-height:670px){body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-header{padding:15px 20px;height:51px}}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .items-wrapper .uw-popup-item .uw-popup-item-label img{width:32px;height:22px;min-width:32px;min-height:22px;vertical-align:middle;display:inline-block!important}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .items-wrapper .uw-popup-item .uw-popup-item-label.header-label span{color:#fff;margin:0 8px}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .uw-popup-main-panel-no-items .no-items-image img{width:81px;height:80px}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .uw-popup-main-panel-no-items .no-items-button-wrapper button{background:#006dd5;border:none;border-radius:4px;color:#fff;font-size:14px;font-weight:400;padding:10px 45px}.userway-s6 [role=link] img,.userway-s6 a img{box-sizing:border-box!important;border:1px solid #ff0!important}.accessibility-btn{border:2px solid #fff;padding:10px 22px;box-sizing:border-box}.accessibility-btn__text{display:block;font-size:15px;color:#fff;font-weight:500;letter-spacing:.2px}.big-uw-icon .accessibility-btn__text,.userway-the-big .accessibility-btn__text{font-size:16px;letter-spacing:.4px}.light .accessibility-btn__text,.userway_light .accessibility-btn__text{color:#000}.light .accessibility-btn,.userway_light .accessibility-btn{border-color:#000}html.userway-s3-3{background-color:#fff}html.userway-s3-3.userway-s1 a:focus,html.userway-s3-3.userway-s1 button:focus,html.userway-s3-3.userway-s1 input:focus,html.userway-s3-3.userway-s1 select:focus,html.userway-s3-3.userway-s1 textarea:focus{outline-color:#c00!important}body .userway.userway-accessibility .loading.userway_light:after,html.userway-s3-2{background-color:#000}html.userway-s3-2.userway-s1 a:focus,html.userway-s3-2.userway-s1 button:focus,html.userway-s3-2.userway-s1 input:focus,html.userway-s3-2.userway-s1 select:focus,html.userway-s3-2.userway-s1 textarea:focus{outline-color:#50d0a0!important}.uw-s10-reading-guide{display:none;box-sizing:border-box;background:#000;width:100%!important;min-width:100%!important;position:absolute!important;height:12px!important;border:solid 3px #fff300;border-radius:5px;top:20px;z-index:2147483647}.userway-screen-reader-text{clip:rect(1px,1px,1px,1px);height:1px;width:1px;overflow:hidden;position:absolute!important;z-index:-1;opacity:0}.userway-s3-1{background:#000!important}.userway-s3-1,.userway-s3-1-ff{filter:invert(100%);-webkit-filter:invert(100%)}.userway-s3-2,.userway-s3-2 a,.userway-s3-2 a:hover{background-color:#000!important}.userway-s3-2 a{border-color:#fff!important;color:#fcff3c!important}.userway-s3-2 abbr,.userway-s3-2 article,.userway-s3-2 aside,.userway-s3-2 b,.userway-s3-2 big,.userway-s3-2 body,.userway-s3-2 button,.userway-s3-2 div,.userway-s3-2 em,.userway-s3-2 footer,.userway-s3-2 form,.userway-s3-2 h1,.userway-s3-2 h2,.userway-s3-2 h3,.userway-s3-2 h4,.userway-s3-2 h5,.userway-s3-2 h6,.userway-s3-2 header,.userway-s3-2 i,.userway-s3-2 input,.userway-s3-2 label,.userway-s3-2 li,.userway-s3-2 main,.userway-s3-2 nav,.userway-s3-2 p,.userway-s3-2 select,.userway-s3-2 small,.userway-s3-2 span,.userway-s3-2 strong,.userway-s3-2 td,.userway-s3-2 textarea,.userway-s3-2 th,.userway-s3-2 ul{background-color:#000!important;border-color:#fff!important;color:#50d0a0!important}.userway-s3-2 a:hover{color:#fff!important}.userway-s3-3{background-color:#fff!important}.userway-s3-3 a{border-color:#000!important}.userway-s3-3 abbr,.userway-s3-3 article,.userway-s3-3 aside,.userway-s3-3 b,.userway-s3-3 big,.userway-s3-3 body,.userway-s3-3 button,.userway-s3-3 div,.userway-s3-3 em,.userway-s3-3 footer,.userway-s3-3 form,.userway-s3-3 h1,.userway-s3-3 h2,.userway-s3-3 h3,.userway-s3-3 h4,.userway-s3-3 h5,.userway-s3-3 h6,.userway-s3-3 header,.userway-s3-3 i,.userway-s3-3 input,.userway-s3-3 label,.userway-s3-3 li,.userway-s3-3 main,.userway-s3-3 nav,.userway-s3-3 p,.userway-s3-3 select,.userway-s3-3 small,.userway-s3-3 span,.userway-s3-3 strong,.userway-s3-3 td,.userway-s3-3 textarea,.userway-s3-3 th,.userway-s3-3 ul{background-color:#fff!important;color:#000!important;border-color:#000!important}.userway-s3-3 a:hover,.userway-s3-3.userway-s6 [role=link]:hover,.userway-s3-3.userway-s6 a:hover{color:#000!important;background-color:#fff!important}.userway-s3-3 a,.userway-s3-3.userway-s6 [role=link],.userway-s3-3.userway-s6 [role=link] *,.userway-s3-3.userway-s6 a,.userway-s3-3.userway-s6 a *{color:#0000d3!important;background-color:#fff!important}.userway-s3-4-black{background-color:#888!important;color:#fff!important}.userway-s3-4-light{background-color:#fff!important;color:#000!important}.userway-s3-4{filter:grayscale(100%)!important;-webkit-filter:grayscale(100%)!important}body .rvNotification{visibility:hidden!important}body .userway{text-align:initial!important;filter:none!important;-webkit-filter:none!important;transform:none!important;position:fixed;top:10px;z-index:2147483647;transition:.2s;height:43px;width:43px}body .userway.hidden{display:none}body .userway.userway_mobile .userway_hide .userway_hide_off{display:none!important}body .userway.userway_mobile .userway_accessibility_icon .userway_hide_icon,body .userway.userway_p1 .userway_accessibility_icon .userway_hide_icon span .userway_hide_icon_right,body .userway.userway_p2 .userway_accessibility_icon .userway_hide_icon span .userway_hide_icon_right,body .userway.userway_p3 .userway_accessibility_icon .userway_hide_icon span .userway_hide_icon_right,body .userway.userway_p4 .userway_accessibility_icon .userway_hide_icon span .userway_hide_icon_down,body .userway.userway_p7 .userway_accessibility_icon .userway_hide_icon span .userway_hide_icon_left{display:block}body .userway.userway_p1{top:10px;right:10px;left:auto;bottom:auto}.userway.userway_p1 .userway_accessibility_icon .userway_hide span,body .userway.userway_p1 .userway_accessibility_icon .userway_hide span{border-radius:4px 0 0 4px!important}body .userway.userway_p2{top:calc(50% - 22px);left:auto;right:10px}body .userway.userway_p3{top:auto;left:auto;bottom:10px;right:10px}body .userway.userway_p3 .userway_accessibility_icon .userway_hide_icon{top:-18px}body .userway.userway_p3 .userway_accessibility_icon .userway_hide_icon span{border-radius:4px 4px 0 0!important}body .userway.userway_p4{top:auto;left:calc(50% - 22px);bottom:16px;right:auto}body .userway.userway_p4.userway_hidden{bottom:-30px;top:auto;right:auto}body .userway.userway_p4.userway_hidden.userway_over{bottom:10px}body .userway.userway_p4 .userway_accessibility_icon .userway_hide{left:40px}body .userway.userway_p4 .userway_accessibility_icon .userway_hide span{border-radius:0 4px 4px 0!important}body .userway.userway_p4 .userway_accessibility_icon .userway_hide_icon{top:-19px}body .userway.userway_p4 .userway_accessibility_icon .userway_hide_icon span{border-radius:4px 4px 0 0!important}body .userway.userway_p5{top:auto;bottom:10px;left:10px;right:auto}body .userway.userway_p5 .userway_accessibility_icon .userway_hide span{border-radius:0 4px 4px 0!important}body .userway.userway_p5 .userway_accessibility_icon .userway_hide_icon{top:-18px}.userway.userway_p3 .userway_accessibility_icon .userway_hide_icon span,body .userway.userway_p5 .userway_accessibility_icon .userway_hide_icon span{border-radius:4px 4px 0 0!important}body .userway.userway_p5 .userway_accessibility_icon .userway_hide_icon .userway_hide_icon_left{display:block!important}body .userway.userway_p5 .userway_accessibility_icon .userway_hide_icon .userway_hide_icon_down,body .userway.userway_p5 .userway_accessibility_icon .userway_hide_icon .userway_hide_icon_right,body .userway.userway_p5 .userway_accessibility_icon .userway_hide_icon .userway_hide_icon_up{display:none!important}body .userway.userway_p6{top:calc(50% - 22px);left:10px;right:auto;bottom:auto}.userway.userway_p4 .userway_accessibility_icon .userway_hide span,body .userway.userway_p6 .userway_accessibility_icon .userway_hide span,body .userway.userway_p7 .userway_accessibility_icon .userway_hide span,body .userway.userway_p8 .userway_accessibility_icon .userway_hide span{border-radius:0 4px 4px 0!important}body .userway.userway_p6 .userway_accessibility_icon .userway_hide_icon .userway_hide_icon_left{display:block!important}body .userway.userway_p6 .userway_accessibility_icon .userway_hide_icon .userway_hide_icon_down,body .userway.userway_p6 .userway_accessibility_icon .userway_hide_icon .userway_hide_icon_right,body .userway.userway_p6 .userway_accessibility_icon .userway_hide_icon .userway_hide_icon_up{display:none!important}body .userway.userway_p7{top:10px;left:10px;right:auto;bottom:auto}body .userway.userway_p7 .userway_accessibility_icon .userway_hide_icon span .userway_hide_icon_down,body .userway.userway_p7 .userway_accessibility_icon .userway_hide_icon span .userway_hide_icon_right,body .userway.userway_p7 .userway_accessibility_icon .userway_hide_icon span .userway_hide_icon_up{display:none}body .userway.userway_p8{top:10px;left:calc(50% - 22px);right:auto;bottom:auto}body .userway.userway_p8.userway_hidden{top:-30px}body .userway.userway_p8.userway_hidden.userway_over{top:10px}body .userway.userway_p8 .userway_accessibility_icon .userway_hide{left:40px}body .userway.userway_p8 .userway_accessibility_icon .userway_hide_icon_up{display:block!important}body .userway.userway_p8 .userway_accessibility_icon .userway_hide_icon_down,body .userway.userway_p8 .userway_accessibility_icon .userway_hide_icon_left,body .userway.userway_p8 .userway_accessibility_icon .userway_hide_icon_right{display:none!important}body .userway.userway_p4 .userway_accessibility_icon,body .userway.userway_p8 .userway_accessibility_icon{left:50%;transform:translateX(-50%)}body .userway.userway_on .userway_accessibility_icon,body .userway.userway_on .userway_accessibility_icon .userway_hide span,body .userway.userway_on .userway_accessibility_icon .userway_hide_icon span{background:#007dd5!important}body .userway.userway_on .userway_accessibility_icon .userway_hide{display:block!important}body .userway .userway_accessibility_icon .userway_preloader_spinner.white .spinner_icon_white,body .userway.userway_ft_on .userway_ft_iframe,body .userway.userway_on .userway_iframe{display:block}body .userway .userway_accessibility_icon .userway_preloader_spinner.white .spinner_icon_black,body .userway.userway_on.userway-sidebar .userway_accessibility_icon,body .userway.userway_on.userway_mobile .userway_accessibility_icon{display:none}body .userway.userway_enabled .userway_accessibility_icon .check_on{opacity:1;visibility:visible;top:-4px;right:-4px}body .userway.userway_hidden .userway_hide_off{display:none!important}body .userway.userway_hidden .userway_hide_on{display:inline!important}body .userway.userway_hidden .userway_hide_icon{display:none!important}body .userway.userway_over .userway_hide{display:block!important}body .userway .userway_ft_iframe,body .userway .userway_iframe{filter:none!important;position:fixed;top:0;left:0;bottom:0;right:0;width:100%!important;max-width:100%!important;height:100%!important;visibility:visible!important;opacity:1!important;border:none;margin:0;padding:0;overflow:hidden;z-index:999999;display:none}body .userway .userway_accessibility_icon{position:fixed!important;filter:none!important;cursor:pointer;background:#003d68!important;border-radius:50%!important;padding:4px;transition:.1s;transition-delay:300ms;display:inline-block;width:35px;height:35px;min-width:35px;min-height:35px;max-width:35px;max-height:35px;text-align:center;box-sizing:content-box!important}body .userway .userway_accessibility_icon:active,body .userway .userway_accessibility_icon:focus,body .userway .userway_accessibility_icon:hover{background:#007dd5}body .userway .userway_accessibility_icon .userway_preloader_spinner{display:none;position:absolute;height:45px;width:45px;top:-1px;left:-1px;background-color:transparent!important;overflow:hidden;background-position:-48px -48px;background-size:140px;animation:standard .75s infinite linear;transform-origin:50% 50% 0!important}body .userway .userway_accessibility_icon .userway_preloader_spinner .spinner_icon_white{display:block}body .userway .userway_accessibility_icon .userway_preloader_spinner .spinner_icon_black{display:none}body .userway .userway_accessibility_icon .userway_preloader_spinner .spinner_icon_black,body .userway .userway_accessibility_icon .userway_preloader_spinner .spinner_icon_white{height:45px;width:45px;position:absolute;top:0;left:0}body .userway .userway_accessibility_icon .userway-spacer{position:absolute;top:-10px;right:-10px;bottom:-10px;left:-10px;display:inline-block;background-color:transparent!important}body .userway .userway_accessibility_icon.userway_light .userway_icon_white,body .userway .userway_accessibility_icon.userway_light .userway_preloader_spinner .spinner_icon_white{display:none}body .userway .userway_accessibility_icon.userway_light .userway_icon_black,body .userway .userway_accessibility_icon.userway_light .userway_preloader_spinner .spinner_icon_black{display:block}body .userway .userway_accessibility_icon.userway_light .userway_hide span{color:#000!important}body .userway .userway_accessibility_icon.userway_light .userway_hide_icon .userway_icon_white{display:none!important}body .userway .userway_accessibility_icon.userway_light .userway_hide_icon .userway_icon_black{display:none}body .userway .userway_accessibility_icon.userway_dark .userway_hide_icon .userway_icon_black{display:none!important}body .userway .userway_accessibility_icon .userway_icon_white,body .userway .userway_accessibility_icon.userway_dark .userway_preloader_spinner .spinner_icon_white{display:block}.userway.userway_p5 .userway_accessibility_icon .userway_hide_icon .userway_hide_icon_left,body .userway .userway_accessibility_icon.loading .userway_preloader_spinner{display:block!important}body .userway .userway_accessibility_icon .userway_icon_black,body .userway .userway_accessibility_icon.loading .userway_icon_black,body .userway .userway_accessibility_icon.loading .userway_icon_white,body .userway .userway_accessibility_icon.userway_dark .userway_preloader_spinner .spinner_icon_black{display:none}body .userway .userway_accessibility_icon .userway_hide{z-index:-1;display:none;position:absolute;cursor:pointer;font-size:12px!important;line-height:14px!important;background:0 0!important;transform:translate(0%,-50%);top:50%}.userway .userway_accessibility_icon .userway_hide>span,body .userway .userway_accessibility_icon .userway_hide>span{border-radius:4px 0 0 4px!important;color:#fff!important;font-size:12px!important;line-height:14px!important;font-weight:800;background:#003d68!important;padding:2px 5px;font-family:sans-serif!important;position:relative!important;white-space:nowrap!important}body .userway .userway_accessibility_icon .userway_hide .userway_hide_off{display:inline}body .userway .userway_accessibility_icon .userway_hide .userway_hide_on{display:none}body .userway .userway_accessibility_icon .userway_hide_icon{display:none;position:absolute;top:38px;left:0;right:0;z-index:-1;text-align:center!important}.userway .userway_accessibility_icon .userway_hide_icon span,body .userway .userway_accessibility_icon .userway_hide_icon span{display:inline-block;background:#003d68!important;padding:5px 7px 2px;border-radius:0 0 4px 4px!important}body .userway .userway_accessibility_icon .userway_hide_icon span img{width:14px;height:16px;display:none;position:relative;bottom:2px}body .userway .userway_accessibility_icon .check_on{position:absolute;top:-7px;right:-4px;width:18px;height:20px;transition:.1s;opacity:0;visibility:hidden}.userway .userway_accessibility_icon img,body .userway .userway_accessibility_icon img{height:35px;width:35px;display:block;padding:0!important;margin:0!important;background:0 0!important;border:none!important}body .userway.userway-the-big .userway_accessibility_icon{padding:4px;width:57px;height:57px;min-width:57px;min-height:57px;max-width:57px;max-height:57px}.userway.userway-the-big .userway_accessibility_icon img,body .userway.userway-the-big .userway_accessibility_icon img{width:57px;height:57px;padding:0!important;margin:0!important;background:0 0!important;border:none!important}body .userway.userway-the-big .userway_accessibility_icon .userway_hide>span{font-size:12px!important;padding:3px 6px}body .userway.userway-the-big .userway_accessibility_icon .check_on{top:-2px;right:-2px;width:21px;height:21px}body .userway.userway-the-big.userway_p1,body .userway.userway-the-big.userway_p2,body .userway.userway-the-big.userway_p3{right:30px}body .userway.userway-the-big.userway_p1 .userway_hide,body .userway.userway-the-big.userway_p2 .userway_hide,body .userway.userway-the-big.userway_p3 .userway_hide{transform:translate(0%,-50%);right:63px;left:auto}body .userway.userway-the-big.userway_p4 .userway_hide{left:63px}body .userway.userway-the-big.userway_p4.userway_hidden{top:auto}body .userway.userway-the-big.userway_p3,body .userway.userway-the-big.userway_p4,body .userway.userway-the-big.userway_p4.userway_hidden.userway_over,body .userway.userway-the-big.userway_p5{bottom:30px}.userway.userway-accessibility.userway_p4.userway_hidden.userway_over .userway_accessibility_icon,.userway.userway-accessibility.userway_p8.userway_hidden.userway_over .userway_accessibility_icon,.userway.userway-the-big.userway_p4.userway_hidden.userway_over .userway_accessibility_icon,.userway.userway-the-big.userway_p8.userway_hidden.userway_over .userway_accessibility_icon,body .userway.userway-accessibility.userway_p4.userway_hidden.userway_over .userway_accessibility_icon,body .userway.userway-accessibility.userway_p8.userway_hidden.userway_over .userway_accessibility_icon,body .userway.userway-the-big.userway_p4.userway_hidden.userway_over .userway_accessibility_icon,body .userway.userway-the-big.userway_p8.userway_hidden.userway_over .userway_accessibility_icon{transform:translate(-50%,0%)}body .userway.userway-the-big.userway_p4.userway_hidden .userway_accessibility_icon{transform:translate(-50%,100%)}body .userway.userway-the-big.userway_p8 .userway_hide{left:63px}body .userway.userway-the-big.userway_p8.userway_hidden,body .userway.userway-the-big.userway_p8.userway_hidden.userway_over{top:10px}body .userway.userway-the-big.userway_p8.userway_hidden .userway_accessibility_icon{transform:translate(-50%,-100%)}body .userway.userway-the-big.userway_p6,body .userway.userway-the-big.userway_p7{left:11px}body .userway.userway-the-big .userway_preloader_spinner{top:9px;left:9px}body .userway.userway-the-big.userway_p5 .userway_hide,body .userway.userway-the-big.userway_p6 .userway_hide,body .userway.userway-the-big.userway_p7 .userway_hide{left:63px}body .userway.userway_p1 .userway_hide,body .userway.userway_p2 .userway_hide,body .userway.userway_p3 .userway_hide{right:40px;left:auto}body .userway.userway_p5 .userway_hide,body .userway.userway_p6 .userway_hide,body .userway.userway_p7 .userway_hide{left:40px}body .userway.userway-accessibility{border-radius:0!important}body .userway.userway-accessibility .userway_accessibility_icon{border-radius:5px!important;transform:translateX(0%);width:auto;height:auto;max-height:initial;max-width:initial;min-height:initial;min-width:initial;right:inherit}body .userway.userway-accessibility.userway_p1,body .userway.userway-accessibility.userway_p2,body .userway.userway-accessibility.userway_p3{right:50px}body .userway.userway-accessibility.userway_p1.userway_hidden .userway_accessibility_icon,body .userway.userway-accessibility.userway_p2.userway_hidden .userway_accessibility_icon,body .userway.userway-accessibility.userway_p3.userway_hidden .userway_accessibility_icon{transform:translateX(115%)}body .userway.userway-accessibility.userway_p1 .userway_hide,body .userway.userway-accessibility.userway_p2 .userway_hide,body .userway.userway-accessibility.userway_p3 .userway_hide{right:100%;left:auto}body .userway.userway-accessibility.userway_p5,body .userway.userway-accessibility.userway_p6,body .userway.userway-accessibility.userway_p7{left:50px}body .userway.userway-accessibility.userway_p5.userway_hidden .userway_accessibility_icon,body .userway.userway-accessibility.userway_p6.userway_hidden .userway_accessibility_icon,body .userway.userway-accessibility.userway_p7.userway_hidden .userway_accessibility_icon{transform:translateX(-115%)}body .userway.userway-accessibility.userway_p5 .userway_hide,body .userway.userway-accessibility.userway_p6 .userway_hide,body .userway.userway-accessibility.userway_p7 .userway_hide{left:100%!important;right:auto}body .userway.userway-accessibility.userway_p1 .userway_accessibility_icon,body .userway.userway-accessibility.userway_p7 .userway_accessibility_icon,body .userway.userway-accessibility.userway_p8 .userway_accessibility_icon{top:35px}body .userway.userway-accessibility.userway_p3 .userway_accessibility_icon,body .userway.userway-accessibility.userway_p4 .userway_accessibility_icon,body .userway.userway-accessibility.userway_p5 .userway_accessibility_icon{bottom:35px}body .userway.userway-accessibility.userway_p4 .userway_accessibility_icon,body .userway.userway-accessibility.userway_p8 .userway_accessibility_icon{left:50%;transform:translateX(-50%);margin:0 auto;right:auto}body .userway.userway-accessibility.userway_p4 .userway_hide,body .userway.userway-accessibility.userway_p8 .userway_hide{left:100%}body .userway.userway-accessibility.userway_p8.userway_hidden .userway_accessibility_icon{transform:translate(-50%,-130%)}body .userway.userway-accessibility.userway_p4.userway_hidden .userway_accessibility_icon{transform:translate(-50%,130%)}body .userway.userway-accessibility .loading{overflow:hidden}body .userway.userway-accessibility .loading:after{content:"";width:50%;height:4px;position:absolute;top:0;left:0;background-color:#fff;transform:translateX(-220%);animation:.9s linear infinite block_loading}.userway.userway_mobile .userway_hide .userway_hide_off,.userway.userway_p5 .userway_accessibility_icon .userway_hide_icon .userway_hide_icon_down,.userway.userway_p5 .userway_accessibility_icon .userway_hide_icon .userway_hide_icon_right,.userway.userway_p5 .userway_accessibility_icon .userway_hide_icon .userway_hide_icon_up,body .userway.userway-accessibility .loading .userway_preloader_spinner{display:none!important}body .userway.userway-accessibility .userway_hide_icon{top:44px}body .userway.userway_p1.userway_hidden .userway_accessibility_icon,body .userway.userway_p2.userway_hidden .userway_accessibility_icon,body .userway.userway_p3.userway_hidden .userway_accessibility_icon{transform:translateX(100%)}body .userway.userway_p5.userway_hidden .userway_accessibility_icon,body .userway.userway_p6.userway_hidden .userway_accessibility_icon,body .userway.userway_p7.userway_hidden .userway_accessibility_icon{transform:translateX(-100%)}body .userway.userway-accessibility.userway-the-big.userway_hidden.userway_p4{bottom:35px}body .userway .userway_accessibility_icon{font-size:initial!important}body .userway-reader-active:not(.userway_ft_iframe),body .userway-reader-active:not(.userway_iframe){background:#ff0!important;color:#000!important}@keyframes uwPageStructurePopupSlideTop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes block_loading{0%{transform:translateX(-100%)}to{transform:translateX(333%)}}@keyframes standard{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}body .uw-page-structure-modal{display:none!important;position:fixed!important;z-index:2147483647!important;left:0!important;top:0!important;width:100%!important;height:100%!important;overflow:hidden!important;background-color:#000!important;background-color:rgba(0,0,0,.4)!important;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;padding:30px 0}body .uw-page-structure-modal *{box-sizing:border-box!important;line-height:1.4!important;letter-spacing:normal!important}body .uw-page-structure-modal .uw-page-structure-modal-content{height:10px;margin:0;-ms-flex-positive:1;flex-grow:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:#fefefe;width:90%;max-width:600px!important;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);animation-name:uwPageStructurePopupSlideTop;animation-duration:.4s;border-radius:8px}body .uw-page-structure-modal .uw-page-structure-modal-content.uw-ps-mobile{width:90%}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-header{border-top-right-radius:8px;border-top-left-radius:8px;display:-ms-flexbox;display:flex;-ms-flex:none;flex:none;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;color:#fff;padding:15px 24px;font-size:14px;height:62px;background:#006dd5}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-header .uw-popup-header-text{font-weight:500}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-header .uw-popup-header-close{width:15px;height:15px;cursor:pointer}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-header .uw-popup-header-close svg .uw-popup-header-close-path{stroke:#fff;fill:transparent;stroke-linecap:round;stroke-width:.8}@media (max-width:780px),(max-height:575px){body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-header{padding:12px 10px;height:44px;font-size:12px!important}}@media (max-width:1024px),(max-height:650px){body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-header{padding:15px 18px;font-size:13px!important}}@media (max-width:1250px),(max-height:670px){body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-header{padding:15px 20px;height:51px}}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main{-ms-flex-positive:1;flex-grow:1;height:10px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-tabs{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:none;flex:none;background:#f2f2f2}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-tabs .uw-popup-main-tab{cursor:pointer;padding:15px 25px;color:#006dd5;font-size:14px!important;-ms-flex:1;flex:1;margin-right:1px;text-align:center!important}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-tabs .uw-popup-main-tab .tab-name{font-size:14px!important;font-weight:500!important}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-tabs .uw-popup-main-tab.active{cursor:auto;color:#000;background:#fff}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-tabs .uw-popup-main-tab:last-child{margin-right:0}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels{-ms-flex-positive:1;flex-grow:1;height:10px}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel{display:none;height:100%;overflow:hidden;-webkit-overflow-scrolling:touch}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel.active{display:block}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .items-wrapper{height:100%;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;padding-top:20px}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .items-wrapper .uw-popup-item{font-size:14px!important;padding:9px 25px 9px 0;cursor:pointer;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:left;justify-content:left;-ms-flex-align:center;align-items:center;color:#006dd5;transition:.2s}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .items-wrapper .uw-popup-item:focus,body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .items-wrapper .uw-popup-item:hover{background:#f2f2f2}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .items-wrapper .uw-popup-item:hover .uw-popup-item-text{text-decoration:underline}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .items-wrapper .uw-popup-item .uw-popup-item-label{max-width:32px;margin-right:10px}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .items-wrapper .uw-popup-item .uw-popup-item-label.header-label{font-size:12px!important;font-weight:400;text-transform:uppercase;background:#1e242a;opacity:.8;border-radius:5px;padding:4px 0}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .items-wrapper .uw-popup-item .uw-popup-item-text{text-align:left;color:#006dd5;font-weight:400}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .items-wrapper .uw-popup-item .aria--label-link-icon,body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .items-wrapper .uw-popup-item .external-link-icon{width:12px;height:12px;margin-left:8px;vertical-align:middle;display:inline-block!important}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .items-wrapper .uw-popup-item .external-link-icon{cursor:pointer}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .uw-popup-main-panel-no-items{margin-top:60px;display:none}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .uw-popup-main-panel-no-items .no-items-text{text-align:center;font-size:14px;font-weight:400}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .uw-popup-main-panel-no-items .no-items-image{text-align:center;margin:25px auto}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-main .uw-popup-main-panels .uw-popup-main-panel .uw-popup-main-panel-no-items .no-items-button-wrapper{text-align:center}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-footer{-ms-flex:none;flex:none;border-bottom-right-radius:8px;border-bottom-left-radius:8px;padding:15px 25px;text-align:right}body .uw-page-structure-modal .uw-page-structure-modal-content .uw-popup-footer img{display:inline-block!important}body .uw-page-structure-modal_active{display:-ms-flexbox!important;display:flex!important}.userway-s1 .userway-s1-selected{outline:dashed 2px #c00!important}.userway-s1 .userway-s1-selected:active,.userway-s1 .userway-s1-selected:focus{outline:transparent!important}.userway-s1 .userway-s1-focus-fly{position:absolute;margin:0;background:0 0;transition-property:left,top,width,height,opacity;transition-timing-function:cubic-bezier(0,.2,0,1);pointer-events:none;visibility:hidden;outline:dashed 4px #c00!important;outline-offset:-2px;box-shadow:none}.userway-s1 .userway-s1-focus-fly_visibility{visibility:visible;z-index:9999999999999999999999}.userway-s10 .uw-s10-reading-guide,.userway.userway_mobile .userway_accessibility_icon .userway_hide_icon,.userway.userway_p1 .userway_accessibility_icon .userway_hide_icon span .userway_hide_icon_right,.userway.userway_p2 .userway_accessibility_icon .userway_hide_icon span .userway_hide_icon_right,.userway.userway_p3 .userway_accessibility_icon .userway_hide_icon span .userway_hide_icon_right,.userway.userway_p4 .userway_accessibility_icon .userway_hide_icon span .userway_hide_icon_down,.userway.userway_p7 .userway_accessibility_icon .userway_hide_icon span .userway_hide_icon_left{display:block}.uw-s12-tooltip{display:none;opacity:0;white-space:nowrap;position:absolute!important;box-sizing:border-box!important;border:solid 2px #fff!important;background:#34394d!important;color:#fff!important;font-weight:600!important;font-size:17px!important;border-radius:10px;text-align:left!important;padding:13px 18px;box-shadow:0 0 15px rgba(66,73,96,.4);height:auto!important;z-index:2147483647}.uw-s12-tooltip.visible{opacity:1}.userway-s12 .uw-s12-tooltip{display:inline-block}.userway-s13_offtransition *{transition:none!important;animation:none!important}.userway-s14-1 .userway-s14-active{word-spacing:.16em!important;letter-spacing:.12em!important}.userway-s14-1 .userway-s14-no-justify{text-align:unset!important}.userway-s14-2 .userway-s14-active{word-spacing:.32em!important;letter-spacing:.24em!important}.userway-s14-2 .userway-s14-no-justify{text-align:unset!important}.userway-s14-3 .userway-s14-active{word-spacing:.48em!important;letter-spacing:.36em!important}.userway-s14-3 .userway-s14-no-justify{text-align:unset!important}.userway-s2,.userway-s2 *{cursor:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyOS4xODhweCIgaGVpZ2h0PSI0My42MjVweCIgdmlld0JveD0iMCAwIDI5LjE4OCA0My42MjUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI5LjE4OCA0My42MjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0Q5REFEOSIgc3Ryb2tlLXdpZHRoPSIxLjE0MDYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRzPSIyLjgsNC41NDkgMjYuODQ3LDE5LjkwMiAxNi45NjQsMjIuNzAxIDI0LjIzOSwzNy43NDkgMTguMjc4LDQyLjAxNyA5Ljc0MSwzMC43MjQgMS4xMzgsMzUuODA5ICIvPjxnPjxnPjxnPjxwYXRoIGZpbGw9IiMyMTI2MjciIGQ9Ik0yOS4xNzUsMjEuMTU1YzAuMDcxLTAuNjEzLTAuMTY1LTEuMjUzLTAuNjM1LTEuNTczTDIuMTY1LDAuMjU4Yy0wLjQyNC0wLjMyLTAuOTg4LTAuMzQ2LTEuNDM1LTAuMDUzQzAuMjgyLDAuNDk3LDAsMS4wMywwLDEuNjE3djM0LjE3MWMwLDAuNjEzLDAuMzA2LDEuMTQ2LDAuNzc2LDEuNDM5YzAuNDcxLDAuMjY3LDEuMDU5LDAuMjEzLDEuNDgyLTAuMTZsNy40ODItNi4zNDRsNi44NDcsMTIuMTU1YzAuMjU5LDAuNDgsMC43MjksMC43NDYsMS4yLDAuNzQ2YzAuMjM1LDAsMC40OTQtMC4wOCwwLjcwNi0wLjIxM2w2Ljk4OC00LjU4NWMwLjMyOS0wLjIxMywwLjU2NS0wLjU4NiwwLjY1OS0xLjAxM2MwLjA5NC0wLjQyNiwwLjAyNC0wLjg4LTAuMTg4LTEuMjI2bC02LjM3Ni0xMS4zODJsOC42MTEtMi43NDVDMjguNzA1LDIyLjI3NCwyOS4xMDUsMjEuNzY4LDI5LjE3NSwyMS4xNTV6IE0xNi45NjQsMjIuNzAxYy0wLjQyNCwwLjEzMy0wLjc3NiwwLjUwNi0wLjk0MSwwLjk2Yy0wLjE2NSwwLjQ4LTAuMTE4LDEuMDEzLDAuMTE4LDEuNDM5bDYuNTg4LDExLjc4MWwtNC41NDEsMi45ODVsLTYuODk0LTEyLjMxNWMtMC4yMTItMC4zNzMtMC41NDEtMC42NC0wLjk0MS0wLjcyYy0wLjA5NC0wLjAyNy0wLjE2NS0wLjAyNy0wLjI1OS0wLjAyN2MtMC4zMDYsMC0wLjU4OCwwLjEwNy0wLjg0NywwLjMyTDIuOCwzMi41OVY0LjU0OWwyMS41OTksMTUuODA2TDE2Ljk2NCwyMi43MDF6Ii8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==),auto!important}.userway-s2-ie,.userway-s2-ie *{cursor:url(cursor_ie_32.cur),auto!important}.userway-s4-1{zoom:130%}.userway-s4-2{zoom:160%}.userway-s4-3{zoom:190%}.userway-s4-4{zoom:205%}.userway-s4-1-ie,.userway-s4-1-ie .userway-s4-1-fixed-ie{zoom:130%;max-width:76.92%}.userway-s4-2-ie,.userway-s4-2-ie .userway-s4-2-fixed-ie{zoom:160%;max-width:62.5%}.userway-s4-3-ie,.userway-s4-3-ie .userway-s4-3-fixed-ie{zoom:190%;max-width:52.63%}.userway-s4-4-ie,.userway-s4-4-ie .userway-s4-4-fixed-ie{zoom:205%;max-width:48.78%}.userway-s6 [role=link],.userway-s6 [role=link] *,.userway-s6 a,.userway-s6 a *{text-decoration:underline!important;color:#ff0!important;background-color:#000!important}.userway-s7 .userway-s7-active{font-family:Arial,serif!important}.userway-s7 .userway-s7-no-justify{text-align:unset!important}.userway{text-align:initial!important;filter:none!important;-webkit-filter:none!important;transform:none!important;position:fixed;top:10px;z-index:2147483647;transition:.2s;height:43px;width:43px}.userway.hidden,.userway.userway_p7 .userway_accessibility_icon .userway_hide_icon span .userway_hide_icon_down,.userway.userway_p7 .userway_accessibility_icon .userway_hide_icon span .userway_hide_icon_right,.userway.userway_p7 .userway_accessibility_icon .userway_hide_icon span .userway_hide_icon_up{display:none}.userway.userway_p1{top:10px;right:10px;left:auto;bottom:auto}.userway.userway_p2{top:calc(50% - 22px);left:auto;right:10px}.userway.userway_p3{top:auto;left:auto;bottom:10px;right:10px}.userway.userway_p3 .userway_accessibility_icon .userway_hide_icon{top:-18px}.userway.userway_p4{top:auto;left:calc(50% - 22px);bottom:16px;right:auto}.userway.userway_p4.userway_hidden{bottom:-30px;top:auto;right:auto}.userway.userway_p4.userway_hidden.userway_over{bottom:10px}.userway.userway_p4 .userway_accessibility_icon .userway_hide{left:40px}.userway.userway_p4 .userway_accessibility_icon .userway_hide_icon{top:-19px}.userway.userway_p4 .userway_accessibility_icon .userway_hide_icon span{border-radius:4px 4px 0 0!important}.userway.userway_p5{top:auto;bottom:10px;left:10px;right:auto}.userway.userway_p5 .userway_accessibility_icon .userway_hide span{border-radius:0 4px 4px 0!important}.userway.userway_p5 .userway_accessibility_icon .userway_hide_icon{top:-18px}.userway.userway_p5 .userway_accessibility_icon .userway_hide_icon span{border-radius:4px 4px 0 0!important}.userway.userway_p6{top:calc(50% - 22px);left:10px;right:auto;bottom:auto}.userway.userway_p6 .userway_accessibility_icon .userway_hide span,.userway.userway_p7 .userway_accessibility_icon .userway_hide span,.userway.userway_p8 .userway_accessibility_icon .userway_hide span{border-radius:0 4px 4px 0!important}.userway.userway_p6 .userway_accessibility_icon .userway_hide_icon .userway_hide_icon_left{display:block!important}.userway.userway_p6 .userway_accessibility_icon .userway_hide_icon .userway_hide_icon_down,.userway.userway_p6 .userway_accessibility_icon .userway_hide_icon .userway_hide_icon_right,.userway.userway_p6 .userway_accessibility_icon .userway_hide_icon .userway_hide_icon_up{display:none!important}.userway.userway_p7{top:10px;left:10px;right:auto;bottom:auto}.userway.userway_p8{top:10px;left:calc(50% - 22px);right:auto;bottom:auto}.userway.userway_p8.userway_hidden{top:-30px}.userway.userway_p8.userway_hidden.userway_over{top:10px}.userway.userway_p8 .userway_accessibility_icon .userway_hide{left:40px}.userway.userway_p8 .userway_accessibility_icon .userway_hide_icon_up{display:block!important}.userway.userway_p8 .userway_accessibility_icon .userway_hide_icon_down,.userway.userway_p8 .userway_accessibility_icon .userway_hide_icon_left,.userway.userway_p8 .userway_accessibility_icon .userway_hide_icon_right{display:none!important}.userway.userway_p4 .userway_accessibility_icon,.userway.userway_p8 .userway_accessibility_icon{left:50%;transform:translateX(-50%)}.userway.userway_on .userway_accessibility_icon,.userway.userway_on .userway_accessibility_icon .userway_hide span,.userway.userway_on .userway_accessibility_icon .userway_hide_icon span{background:#007dd5!important}.userway.userway_on .userway_accessibility_icon .userway_hide{display:block!important}.userway .userway_accessibility_icon .userway_preloader_spinner.white .spinner_icon_white,.userway.userway_ft_on .userway_ft_iframe,.userway.userway_on .userway_iframe{display:block}.userway .userway_accessibility_icon .userway_preloader_spinner.white .spinner_icon_black,.userway.userway_on.userway-sidebar .userway_accessibility_icon,.userway.userway_on.userway_mobile .userway_accessibility_icon{display:none}.userway.userway_enabled .userway_accessibility_icon .check_on{opacity:1;visibility:visible;top:-4px;right:-4px}.userway.userway_hidden .userway_hide_off{display:none!important}.userway.userway_hidden .userway_hide_on{display:inline!important}.userway.userway_hidden .userway_hide_icon{display:none!important}.userway.userway_over .userway_hide{display:block!important}.userway .userway_ft_iframe,.userway .userway_iframe{filter:none!important;position:fixed;top:0;left:0;bottom:0;right:0;width:100%!important;max-width:100%!important;height:100%!important;visibility:visible!important;opacity:1!important;border:none;margin:0;padding:0;overflow:hidden;z-index:999999;display:none}.userway .userway_accessibility_icon{position:fixed!important;filter:none!important;cursor:pointer;background:#003d68!important;border-radius:50%!important;padding:4px;transition:.1s;transition-delay:300ms;display:inline-block;width:35px;height:35px;min-width:35px;min-height:35px;max-width:35px;max-height:35px;text-align:center;box-sizing:content-box!important}.userway .userway_accessibility_icon:active,.userway .userway_accessibility_icon:focus,.userway .userway_accessibility_icon:hover{background:#007dd5}.userway .userway_accessibility_icon .userway_preloader_spinner{display:none;position:absolute;height:45px;width:45px;top:-1px;left:-1px;background-color:transparent!important;overflow:hidden;background-position:-48px -48px;background-size:140px;animation:standard .75s infinite linear;transform-origin:50% 50% 0!important}.userway .userway_accessibility_icon .userway_preloader_spinner .spinner_icon_white{display:block}.userway .userway_accessibility_icon .userway_preloader_spinner .spinner_icon_black{display:none}.userway .userway_accessibility_icon .userway_preloader_spinner .spinner_icon_black,.userway .userway_accessibility_icon .userway_preloader_spinner .spinner_icon_white{height:45px;width:45px;position:absolute;top:0;left:0}.userway .userway_accessibility_icon .userway-spacer{position:absolute;top:-10px;right:-10px;bottom:-10px;left:-10px;display:inline-block;background-color:transparent!important}.userway .userway_accessibility_icon.userway_light .userway_icon_white,.userway .userway_accessibility_icon.userway_light .userway_preloader_spinner .spinner_icon_white{display:none}.userway .userway_accessibility_icon.userway_light .userway_icon_black,.userway .userway_accessibility_icon.userway_light .userway_preloader_spinner .spinner_icon_black{display:block}.userway .userway_accessibility_icon.userway_light .userway_hide span{color:#000!important}.userway .userway_accessibility_icon.userway_light .userway_hide_icon .userway_icon_white{display:none!important}.userway .userway_accessibility_icon.userway_light .userway_hide_icon .userway_icon_black{display:none}.userway .userway_accessibility_icon.userway_dark .userway_hide_icon .userway_icon_black{display:none!important}.userway .userway_accessibility_icon .userway_icon_white,.userway .userway_accessibility_icon.userway_dark .userway_preloader_spinner .spinner_icon_white{display:block}.userway .userway_accessibility_icon.loading .userway_preloader_spinner{display:block!important}.userway .userway_accessibility_icon .userway_icon_black,.userway .userway_accessibility_icon.loading .userway_icon_black,.userway .userway_accessibility_icon.loading .userway_icon_white,.userway .userway_accessibility_icon.userway_dark .userway_preloader_spinner .spinner_icon_black{display:none}.userway .userway_accessibility_icon .userway_hide{z-index:-1;display:none;position:absolute;cursor:pointer;font-size:12px!important;line-height:14px!important;background:0 0!important;transform:translate(0%,-50%);top:50%}.userway .userway_accessibility_icon .userway_hide .userway_hide_off{display:inline}.userway .userway_accessibility_icon .userway_hide .userway_hide_on{display:none}.userway .userway_accessibility_icon .userway_hide_icon{display:none;position:absolute;top:38px;left:0;right:0;z-index:-1;text-align:center!important}.userway .userway_accessibility_icon .userway_hide_icon span img{width:14px;height:16px;display:none;position:relative;bottom:2px}.userway .userway_accessibility_icon .check_on{position:absolute;top:-7px;right:-4px;width:18px;height:20px;transition:.1s;opacity:0;visibility:hidden}.userway.userway-the-big .userway_accessibility_icon{padding:4px;width:57px;height:57px;min-width:57px;min-height:57px;max-width:57px;max-height:57px}.userway.userway-the-big .userway_accessibility_icon .userway_hide>span{font-size:12px!important;padding:3px 6px}.userway.userway-the-big .userway_accessibility_icon .check_on{top:-2px;right:-2px;width:21px;height:21px}.userway.userway-the-big.userway_p1,.userway.userway-the-big.userway_p2,.userway.userway-the-big.userway_p3{right:30px}.userway.userway-the-big.userway_p1 .userway_hide,.userway.userway-the-big.userway_p2 .userway_hide,.userway.userway-the-big.userway_p3 .userway_hide{transform:translate(0%,-50%);right:63px;left:auto}.userway.userway-the-big.userway_p4 .userway_hide{left:63px}.userway.userway-the-big.userway_p4.userway_hidden{top:auto}.userway.userway-the-big.userway_p3,.userway.userway-the-big.userway_p4,.userway.userway-the-big.userway_p4.userway_hidden.userway_over,.userway.userway-the-big.userway_p5{bottom:30px}.userway.userway-the-big.userway_p4.userway_hidden .userway_accessibility_icon{transform:translate(-50%,100%)}.userway.userway-the-big.userway_p8 .userway_hide{left:63px}.userway.userway-the-big.userway_p8.userway_hidden,.userway.userway-the-big.userway_p8.userway_hidden.userway_over{top:10px}.userway.userway-the-big.userway_p8.userway_hidden .userway_accessibility_icon{transform:translate(-50%,-100%)}.userway.userway-the-big.userway_p6,.userway.userway-the-big.userway_p7{left:11px}.userway.userway-the-big .userway_preloader_spinner{top:9px;left:9px}.userway.userway-the-big.userway_p5 .userway_hide,.userway.userway-the-big.userway_p6 .userway_hide,.userway.userway-the-big.userway_p7 .userway_hide{left:63px}.userway.userway_p1 .userway_hide,.userway.userway_p2 .userway_hide,.userway.userway_p3 .userway_hide{right:40px;left:auto}.userway.userway_p5 .userway_hide,.userway.userway_p6 .userway_hide,.userway.userway_p7 .userway_hide{left:40px}.userway.userway-accessibility{border-radius:0!important}.userway.userway-accessibility .userway_accessibility_icon{border-radius:5px!important;transform:translateX(0%);width:auto;height:auto;max-height:initial;max-width:initial;min-height:initial;min-width:initial;right:inherit}.userway.userway-accessibility.userway_p1,.userway.userway-accessibility.userway_p2,.userway.userway-accessibility.userway_p3{right:50px}.userway.userway-accessibility.userway_p1.userway_hidden .userway_accessibility_icon,.userway.userway-accessibility.userway_p2.userway_hidden .userway_accessibility_icon,.userway.userway-accessibility.userway_p3.userway_hidden .userway_accessibility_icon{transform:translateX(115%)}.userway.userway-accessibility.userway_p1 .userway_hide,.userway.userway-accessibility.userway_p2 .userway_hide,.userway.userway-accessibility.userway_p3 .userway_hide{right:100%;left:auto}.userway.userway-accessibility.userway_p5,.userway.userway-accessibility.userway_p6,.userway.userway-accessibility.userway_p7{left:50px}.userway.userway-accessibility.userway_p5.userway_hidden .userway_accessibility_icon,.userway.userway-accessibility.userway_p6.userway_hidden .userway_accessibility_icon,.userway.userway-accessibility.userway_p7.userway_hidden .userway_accessibility_icon{transform:translateX(-115%)}.userway.userway-accessibility.userway_p5 .userway_hide,.userway.userway-accessibility.userway_p6 .userway_hide,.userway.userway-accessibility.userway_p7 .userway_hide{left:100%!important;right:auto}.userway.userway-accessibility.userway_p1 .userway_accessibility_icon,.userway.userway-accessibility.userway_p7 .userway_accessibility_icon,.userway.userway-accessibility.userway_p8 .userway_accessibility_icon{top:35px}.userway.userway-accessibility.userway_p3 .userway_accessibility_icon,.userway.userway-accessibility.userway_p4 .userway_accessibility_icon,.userway.userway-accessibility.userway_p5 .userway_accessibility_icon{bottom:35px}.userway.userway-accessibility.userway_p4 .userway_accessibility_icon,.userway.userway-accessibility.userway_p8 .userway_accessibility_icon{left:50%;transform:translateX(-50%);margin:0 auto;right:auto}.userway.userway-accessibility.userway_p4 .userway_hide,.userway.userway-accessibility.userway_p8 .userway_hide{left:100%}.userway.userway-accessibility.userway_p8.userway_hidden .userway_accessibility_icon{transform:translate(-50%,-130%)}.userway.userway-accessibility.userway_p4.userway_hidden .userway_accessibility_icon{transform:translate(-50%,130%)}.userway.userway-accessibility .loading{overflow:hidden}.userway.userway-accessibility .loading:after{content:"";width:50%;height:4px;position:absolute;top:0;left:0;background-color:#fff;transform:translateX(-220%);animation:.9s linear infinite block_loading}.userway.userway-accessibility .loading .userway_preloader_spinner{display:none!important}.userway.userway-accessibility .loading.userway_light:after{background-color:#000}.userway.userway-accessibility .userway_hide_icon{top:44px}.userway.userway_p1.userway_hidden .userway_accessibility_icon,.userway.userway_p2.userway_hidden .userway_accessibility_icon,.userway.userway_p3.userway_hidden .userway_accessibility_icon{transform:translateX(100%)}.userway.userway_p5.userway_hidden .userway_accessibility_icon,.userway.userway_p6.userway_hidden .userway_accessibility_icon,.userway.userway_p7.userway_hidden .userway_accessibility_icon{transform:translateX(-100%)}.userway.userway-accessibility.userway-the-big.userway_hidden.userway_p4{bottom:35px}.userway .userway_accessibility_icon{font-size:initial!important}',
        Me = '<div class="userway_accessibility_icon" id="userwayAccessibilityIcon" role="button" aria-label="This website uses a website accessibility widget." tabindex="0"><span class="userway_icon_image_wrapper"></span><div class="userway_preloader_spinner"></div><span class="userway-spacer"></span><div class="userway_hide"><span aria-hidden="true" class="userway_hide_off">Hide</span> <span aria-hidden="true" class="userway_hide_on">Unhide</span></div><div class="userway_hide_icon" aria-hidden="true"><span class="userway_hide_icons_wrapper"></span></div></div><iframe class="userway_iframe" name="userway" title="UserWay Accessibility Menu"></iframe><iframe class="userway_ft_iframe" name="userwayFt" title="Quick Accessibility Menu"></iframe>',
        Oe = '<div class="uw-page-structure-modal-content"><div class="uw-popup-header"><div class="uw-popup-header-text">Page Structure</div><div class="uw-popup-header-close" id="uwPopupHeaderClose" role="button" tabindex="0" aria-label="Close dialog"><svg aria-hidden="true" viewbox="0 0 14 14"><path class="uw-popup-header-close-path" d="M 0,0 L 14,14 M 14,0 L 0,14"></path></svg></div></div><div class="uw-popup-main"><div class="uw-popup-main-tabs"><div class="uw-popup-main-tab uw-popup-main-tab_headers" tabindex="0" aria-label="Headers Tab"><span aria-hidden="true" class="tab-name">Headers</span></div><div class="uw-popup-main-tab uw-popup-main-tab_landmarks" tabindex="0" aria-label="Landmarks Tab"><span aria-hidden="true" class="tab-name">Landmarks</span></div><div class="uw-popup-main-tab uw-popup-main-tab_links" tabindex="0" aria-label="Links Tab"><span aria-hidden="true" class="tab-name">Links</span></div></div><div class="uw-popup-main-panels"><div class="uw-popup-main-panel uw-popup-main-panel-headers"><div class="uw-popup-main-panel-no-items"><div class="no-items-text">This page contains no headers</div><div class="no-items-image" aria-hidden="true"></div><div class="no-items-button-wrapper"><button class="no-items-button" aria-label="Close this dialog">Close</button></div></div><div class="items-wrapper"></div></div><div class="uw-popup-main-panel uw-popup-main-panel-landmarks"><div class="uw-popup-main-panel-no-items"><div class="no-items-text">This page contains no landmarks</div><div class="no-items-image" aria-hidden="true"></div><div class="no-items-button-wrapper"><button class="no-items-button" aria-label="Close this dialog">Close</button></div></div><div class="items-wrapper"></div></div><div class="uw-popup-main-panel uw-popup-main-panel-links"><div class="uw-popup-main-panel-no-items"><div class="no-items-text">This page contains no links</div><div class="no-items-image" aria-hidden="true"></div><div class="no-items-button-wrapper"><button class="no-items-button" aria-label="Close this dialog">Close</button></div></div><div class="items-wrapper"></div></div></div></div><div class="uw-popup-footer"></div></div>',
        Ce = "userway-positionWidget";
    Ne.init = a;
    var Ie = void 0;
    Ne.manageIconVisibility = I, Ne.toggleWidget = D, Ne.showFirstTabActions = function() {
        b("show"), ae.postMessage({
            action: "first_tab_open",
            all_enabled: W()
        });
        var e = document.getElementsByClassName("userway")[0];
        setTimeout(function() {
            e.classList.add("userway_ft_on"), b("hide")
        }, 20)
    }, Ne.openWidget = q, Ne.closeWidget = z, Ne.setFeature = Q, Ne.getFeaturesSettings = function() {
        return re.settings
    }, i.exports = Ne
}), UserWayWidgetApp.require.register("components/accessibility_tree_walker.js", function(e, t, i) {
    function a(e, t) {
        for (var i = t.length - 1; i >= 0; i--) {
            var s = t[i];
            if (c(s)) {
                return a(s, s.childNodes)
            }
            var r = l(s);
            if (r.result) return {
                node: s,
                type: r.nodeType
            }
        }
        return null
    }

    function s(e) {
        for (var t = e.previousSibling; t;) {
            if (w(t))
                if (c(t)) {
                    var i = a(t, t.childNodes);
                    if (i) return i
                } else {
                    var s = l(t);
                    if (s.result) return {
                        node: t,
                        type: s.nodeType
                    }
                }
            t = t.previousSibling
        }
        return null
    }

    function r(e) {
        for (var t = e.parentNode; t;) {
            var i = l(t);
            if (i.result) return {
                node: t,
                type: i.nodeType
            };
            var a = s(t);
            if (a) return a;
            t = t.parentNode
        }
        return null
    }

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i],
                s = l(a);
            if (s.result) {
                if (b(e) && !f(a)) continue;
                return {
                    node: a,
                    type: s.nodeType
                }
            }
            if (c(a)) {
                var r = a.childNodes,
                    o = n(a, r);
                if (o) return o
            }
        }
        return null
    }

    function o(e) {
        for (var t = e.nextSibling; t;) {
            if (w(t)) {
                var i = l(t);
                if (i.result) return {
                    node: t,
                    type: i.nodeType
                };
                if (c(t)) {
                    var a = n(t, t.childNodes);
                    if (a) return a
                }
            }
            t = t.nextSibling
        }
        return null
    }

    function u(e) {
        for (var t = e.parentNode; t;) {
            var i = o(t);
            if (i) return i;
            t = t.parentNode
        }
        return null
    }

    function c(e) {
        if (d(e)) return !1;
        if (p(e)) return !1;
        if (!_(e)) return !1;
        if (x(e)) return !1;
        if (f(e)) return !1;
        var t = e.children;
        return b(e) || m(e) ? E(e) : t.length
    }

    function l(e) {
        return w(e) ? y(e) ? {
            result: !0,
            nodeType: T.ELEMENT_TYPE.TEXT_NODE
        } : _(e) ? m(e) && !E(e) ? {
            result: !1,
            nodeType: T.ELEMENT_TYPE.NOT_ALLOWED
        } : g(e) ? {
            result: !0,
            nodeType: T.ELEMENT_TYPE.LANDMARK
        } : f(e) ? {
            result: !0,
            nodeType: T.ELEMENT_TYPE.CONTROL
        } : b(e) ? {
            result: !0,
            nodeType: T.ELEMENT_TYPE.HEADING
        } : v(e) ? {
            result: !0,
            nodeType: T.ELEMENT_TYPE.HAS_ALT_DESCRIPTION
        } : x(e) ? {
            result: !0,
            nodeType: T.ELEMENT_TYPE.COMPOSED_TEXT_NODES
        } : {
            result: !1,
            nodeType: T.ELEMENT_TYPE.UNKNOWN
        } : {
            result: !1,
            nodeType: T.ELEMENT_TYPE.NOT_ALLOWED
        } : {
            result: !1,
            nodeType: T.ELEMENT_TYPE.NOT_ALLOWED
        }
    }

    function y(e) {
        if (d(e)) return function(e) {
            return e = e.trim().replace(/(\n|\r\n)/g, "").replace(/\s+/g, " ")
        }(e.textContent)
    }

    function d(e) {
        return e.nodeType === Node.TEXT_NODE
    }

    function p(e) {
        return e.nodeType === Node.COMMENT_NODE
    }

    function w(e) {
        return d(e) ? y(e) : !p(e) && (e.nodeType === Node.ELEMENT_NODE && -1 === ["SCRIPT", "BR", "HR", "STYLE", "NOSCRIPT"].indexOf(e.tagName))
    }

    function _(e) {
        var t = e.getAttribute("aria-hidden");
        if (t && (!0 === t || "true" === t)) return !1;
        var i = window.getComputedStyle(e);
        return !i || "none" !== i.display
    }

    function m(e) {
        return "LABEL" === e.tagName
    }

    function g(e) {
        var t = e.tagName,
            i = e.getAttribute("role");
        return ["HEADER", "NAV", "MAIN", "FOOTER", "ASIDE", "SECTION", "ARTICLE", "FORM"].indexOf(t) > -1 || ["banner", "navigation", "main", "contentinfo", "complementary", "region", "article", "search", "form"].indexOf(i) > -1
    }

    function f(e) {
        if (d(e) || p(e)) return !1;
        var t = e.getAttribute("role");
        return !(!t || -1 === ["button", "link", "checkbox", "radio"].indexOf(t)) || ["A", "INPUT", "BUTTON", "TEXTAREA", "SELECT"].indexOf(e.tagName) > -1
    }

    function b(e) {
        return /^h\d{1}$/gi.test(e.nodeName)
    }

    function h(e) {
        var t = e.tagName,
            i = e.getAttribute("role");
        return "A" === t || "link" === i
    }

    function v(e) {
        if (e.getAttribute("alt")) return !0;
        if ("img" === e.getAttribute("role") && e.getAttribute("aria-label")) return !0;
        return !(!e.getAttribute("title") || "ABBR" !== e.tagName)
    }

    function x(e) {
        if (e.children.length) return !1;
        for (var t = e.childNodes, i = 0; i < t.length; i++)
            if (y(t[i])) return !0;
        return !1
    }

    function E(e) {
        function t(e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                if (f(a) && _(a)) return !0;
                if (a.children.length) return t(a.children)
            }
            return !1
        }
        return t(e.children)
    }

    function L(e) {
        return !d(e) && !p(e) && e.classList.contains("uw-popup-item")
    }
    var T = void 0,
        N = {};
    N.init = function() {
        T = t("../main")
    }, N.identifyElementType = function(e) {
        return e ? l(e).nodeType : T.ELEMENT_TYPE.UNKNOWN
    }, N.getNextAccessibilityTreeNode = function(e) {
        e && (d(e) || document.body.contains(e)) || (e = document.body);
        var t = e,
            i = null;
        return c(t) && (i = n(t, t.childNodes)), i || ((i = o(t)) ? i : i = u(t))
    }, N.getPrevAccessibilityTreeNode = function(e) {
        if (!e || !d(e) && !document.body.contains(e)) return null;
        var t = e,
            i = void 0;
        return (i = s(t)) ? i : i = r(t)
    }, N.getNextHeader = function(e) {
        for (var t = !1, i = null, a = e; !t && (i = N.getNextAccessibilityTreeNode(a));) a = i.node, d(a) || b(a) && (t = !0);
        return i
    }, N.getPrevHeader = function(e) {
        for (var t = !1, i = null, a = e; !t && (i = N.getPrevAccessibilityTreeNode(a));) a = i.node, d(a) || b(a) && (t = !0);
        return i
    }, N.getPageHeadersList = function() {
        for (var e = [], t = document.getElementsByTagName("*"), i = 0, a = t.length; i < a; i++) b(t[i]) && !L(t[i]) && e.push(t[i]);
        return e
    }, N.getNextLandmark = function(e) {
        for (var t = !1, i = null, a = e; !t && (i = N.getNextAccessibilityTreeNode(a));) a = i.node, d(a) || g(a) && (t = !0);
        return i
    }, N.getPrevLandmark = function(e) {
        for (var t = !1, i = null, a = e; !t && (i = N.getPrevAccessibilityTreeNode(a));) a = i.node, d(a) || g(a) && (t = !0);
        return i
    }, N.getPageLandmarksList = function() {
        for (var e = [], t = document.getElementsByTagName("*"), i = 0; i < t.length; i++) g(t[i]) && !L(t[i]) && e.push(t[i]);
        return e
    }, N.getNextLink = function(e) {
        for (var t = e, i = !1; !i && (t = N.getNextAccessibilityTreeNode(t));) d(t) || h(t) && (i = !0);
        return t
    }, N.getPrevLink = function(e) {
        for (var t = e, i = !1; !i && (t = N.getPrevAccessibilityTreeNode(t));) d(t) || h(t) && (i = !0);
        return t
    }, N.getPageLinksList = function() {
        for (var e = [], t = document.getElementsByTagName("*"), i = 0; i < t.length; i++) h(t[i]) && !L(t[i]) && e.push(t[i]);
        return e
    }, i.exports = N
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
UserWayWidgetApp.require.register("components/event_emitter.js", function(e, t, i) {
    ! function(e) {
        function t() {}

        function a(e, t) {
            for (var i = e.length; i--;)
                if (e[i].listener === t) return i;
            return -1
        }

        function s(e) {
            return function() {
                return this[e].apply(this, arguments)
            }
        }

        function r(e) {
            return "function" == typeof e || e instanceof RegExp || !(!e || "object" !== (void 0 === e ? "undefined" : _typeof(e))) && r(e.listener)
        }
        var n = t.prototype,
            o = e.EventEmitter;
        n.getListeners = function(e) {
            var t, i, a = this._getEvents();
            if (e instanceof RegExp) {
                t = {};
                for (i in a) a.hasOwnProperty(i) && e.test(i) && (t[i] = a[i])
            } else t = a[e] || (a[e] = []);
            return t
        }, n.flattenListeners = function(e) {
            var t, i = [];
            for (t = 0; t < e.length; t += 1) i.push(e[t].listener);
            return i
        }, n.getListenersAsObject = function(e) {
            var t, i = this.getListeners(e);
            return i instanceof Array && (t = {}, t[e] = i), t || i
        }, n.addListener = function(e, t) {
            if (!r(t)) throw new TypeError("listener must be a function");
            var i, s = this.getListenersAsObject(e),
                n = "object" === (void 0 === t ? "undefined" : _typeof(t));
            for (i in s) s.hasOwnProperty(i) && -1 === a(s[i], t) && s[i].push(n ? t : {
                listener: t,
                once: !1
            });
            return this
        }, n.on = s("addListener"), n.addOnceListener = function(e, t) {
            return this.addListener(e, {
                listener: t,
                once: !0
            })
        }, n.once = s("addOnceListener"), n.defineEvent = function(e) {
            return this.getListeners(e), this
        }, n.defineEvents = function(e) {
            for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
            return this
        }, n.removeListener = function(e, t) {
            var i, s, r = this.getListenersAsObject(e);
            for (s in r) r.hasOwnProperty(s) && -1 !== (i = a(r[s], t)) && r[s].splice(i, 1);
            return this
        }, n.off = s("removeListener"), n.addListeners = function(e, t) {
            return this.manipulateListeners(!1, e, t)
        }, n.removeListeners = function(e, t) {
            return this.manipulateListeners(!0, e, t)
        }, n.manipulateListeners = function(e, t, i) {
            var a, s, r = e ? this.removeListener : this.addListener,
                n = e ? this.removeListeners : this.addListeners;
            if ("object" !== (void 0 === t ? "undefined" : _typeof(t)) || t instanceof RegExp)
                for (a = i.length; a--;) r.call(this, t, i[a]);
            else
                for (a in t) t.hasOwnProperty(a) && (s = t[a]) && ("function" == typeof s ? r.call(this, a, s) : n.call(this, a, s));
            return this
        }, n.removeEvent = function(e) {
            var t, i = void 0 === e ? "undefined" : _typeof(e),
                a = this._getEvents();
            if ("string" === i) delete a[e];
            else if (e instanceof RegExp)
                for (t in a) a.hasOwnProperty(t) && e.test(t) && delete a[t];
            else delete this._events;
            return this
        }, n.removeAllListeners = s("removeEvent"), n.emitEvent = function(e, t) {
            var i, a, s, r, n = this.getListenersAsObject(e);
            for (r in n)
                if (n.hasOwnProperty(r))
                    for (i = n[r].slice(0), s = 0; s < i.length; s++) a = i[s], !0 === a.once && this.removeListener(e, a.listener), a.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, a.listener);
            return this
        }, n.trigger = s("emitEvent"), n.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t)
        }, n.setOnceReturnValue = function(e) {
            return this._onceReturnValue = e, this
        }, n._getOnceReturnValue = function() {
            return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return e.EventEmitter = o, t
        }, "object" === (void 0 === i ? "undefined" : _typeof(i)) && i.exports ? i.exports = t : e.EventEmitter = t
    }("undefined" != typeof window ? window : this || {})
}), UserWayWidgetApp.require.register("components/flying_focus.js", function(e, t, i) {
    function a() {}

    function s(e) {
        var t = e.getBoundingClientRect(),
            i = document.clientLeft || document.body.clientLeft,
            a = document.clientTop || document.body.clientTop;
        return {
            top: t.top + window.pageYOffset - a,
            left: t.left + window.pageXOffset - i
        }
    }

    function r(e) {
        var t = void 0,
            i = void 0,
            a = void 0;
        if (e.children.length) {
            var r = e.style.display;
            e.style.display = "block", t = e.offsetHeight, a = "absolute" === window.getComputedStyle(e.parentNode).position && s(e), e.style.display = r
        } else t = e.offsetHeight;
        i = e.offsetWidth, a = a || s(e), u.style.width = i + "px", u.style.height = t + "px", u.style.top = a.top + "px", u.style.left = a.left + "px", u.classList.add(l)
    }

    function n() {
        u.classList.remove(l)
    }
    var o = {};
    o.init = a;
    var u = void 0,
        c = "userway-s1-focus-fly",
        l = "userway-s1-focus-fly_visibility";
    o.createFlyFocusElem = function() {
        u = document.createElement("userway-s1-focus-fly"), u.id = c, u.className = c, u.style.transitionDuration = "0.1s", document.body.appendChild(u)
    }, o.deleteFocusElem = function() {
        u && u.remove(), u = null
    }, o.handleFocus = function(e) {
        var t = e;
        t.id !== c && u && (n(), r(t))
    }, o.handleBlur = function(e) {
        n()
    }, i.exports = o
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
UserWayWidgetApp.require.register("components/util.js", function(e, t, i) {
    function a() {}

    function s(e) {
        try {
            if ("#comment" == e.nodeName) return !1;
            if (e.tagName && -1 !== e.tagName.indexOf("-")) return !0;
            var t = e.getAttribute("is");
            return null !== t && -1 !== t.indexOf("-")
        } catch (e) {
            return !1
        }
    }

    function r(e) {
        var t = document.createElement("style");
        t.innerHTML = e, document.body.appendChild(t)
    }

    function n(e, t, i) {
        var a = document.createElement("div");
        a.classList.add("uw-s12-tooltip"), a.setAttribute("aria-hidden", "true"), o(a);
        var s = document.createElement("div");
        s.classList.add("uw-s10-reading-guide"), o(s);
        var r = document.createElement("div");
        r.innerHTML = t, r.classList.add("uw-page-structure-modal"), r.id = "uwPageStructureModal", i.isMobile && r.firstChild && r.firstChild.classList.add("uw-ps-mobile"), o(r);
        var n = document.createElement("div");
        n.innerHTML = e, n.classList.add("userway"), i.isMobile && n.classList.add("userway_mobile"), n.style.setProperty("background-color", "transparent", "important"), n.style.setProperty("visibility", "hidden", ""), o(n), n.setAttribute("title", C.getUserWayIconElementTitle(i)), document.getElementsByClassName("userway_hide_off")[0].innerText = i.language && i.locales[i.language] ? i.locales[i.language].widget.hide_label : i.locales.en.widget.hide_label, document.getElementsByClassName("userway_hide_on")[0].innerText = i.language && i.locales[i.language] ? i.locales[i.language].widget.show_label : i.locales.en.widget.show_label;
        var u = i.services && (i.services.CUSTOM_BRANDING || i.services.WHITE_LABEL),
            c = document.getElementById("userwayAccessibilityIcon"),
            l = i.isMobile ? "" : "Hit Control U on your keyboard to enable the widget and keyboard navigation.",
            y = u ? "a website" : "the UserWay";
        c && c.setAttribute("aria-label", "This website uses " + y + " accessibility widget. " + l);
        var d = document.getElementsByClassName("userway_iframe");
        if (d && d.length) {
            var p = d[0];
            p.setAttribute("title", u ? "Accessibility Menu" : "UserWay Accessibility Menu"), p.style.setProperty("width", "100%", "important"), p.style.setProperty("max-width", "100%", "important"), p.style.setProperty("height", "100%", "important"), p.style.setProperty("max-height", "100%", "important"), p.style.setProperty("visibility", "visible", "important"), p.style.setProperty("opacity", "1", "important")
        }
    }

    function o(e) {
        var t = document.body;
        t.insertBefore(e, t.children[0])
    }

    function u(e, t, i, a) {
        a ? e.settings[t].value[a] = i : "object" == _typeof(e.settings[t]) ? e.settings[t].value = i : e.settings[t] = i, e.supportsLocalStorage ? window.localStorage.setItem(t, i) : d(t)
    }

    function c(e, t) {
        if (e.supportsLocalStorage) {
            var i = window.localStorage.getItem(t);
            return void 0 !== i && "undefined" !== i && null !== i && JSON.parse(i)
        }
        var a = y(t);
        return void 0 !== a && "undefined" !== a && null !== a && JSON.parse(a)
    }

    function l() {
        try {
            return "localStorage" in window && null !== window.localStorage && -1 !== window.localStorage.setItem.toString().indexOf("[native code]")
        } catch (e) {
            return !1
        }
    }

    function y(e) {
        var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return t ? decodeURIComponent(t[1]) : void 0
    }

    function d(e, t, i) {
        i = i || {};
        var a = i.expires;
        if ("number" == typeof a && a) {
            var s = new Date;
            s.setTime(s.getTime() + 1e3 * a), a = i.expires = s
        }
        a && a.toUTCString && (i.expires = a.toUTCString()), t = encodeURIComponent(t);
        var r = e + "=" + t;
        for (var n in i)
            if (i.hasOwnProperty(n)) {
                r += "; " + n;
                var o = i[n];
                !0 !== o && (r += "=" + o)
            }
        document.cookie = r
    }

    function p(e, t) {
        for (var i = 0; i < t.length; i++)
            for (var a = 0; a < e.length; a++)
                if (t[i].match(new RegExp("^" + e[a] + "$"))) return !0;
        return !1
    }

    function w(e, t) {
        return e.currentStyle ? e.currentStyle[t] : document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(e, "")[t] : e.style[t]
    }

    function _(e, t, i) {
        return 1 - (.299 * e + .587 * t + .114 * i) / 255 < .5
    }

    function m() {
        return -1 != (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) ? "opera" : -1 != navigator.userAgent.indexOf("Edge") ? "edge" : -1 != navigator.userAgent.indexOf("Chrome") ? "chrome" : -1 != navigator.userAgent.indexOf("Safari") ? "safari" : -1 != navigator.userAgent.indexOf("Firefox") ? "firefox" : -1 != navigator.userAgent.indexOf("MSIE") || document.documentMode ? "ie" : "unknown"
    }

    function g() {
        return navigator.userAgent.match(/mobile/i)
    }

    function f() {
        return "file://" === window.location.origin ? window.location.href.match(/([^\/]+?)\.(?:[a-z0-9]+?)$/i)[1] : document.location.href
    }

    function b(e) {
        var t = window.frames.userway,
            i = window.frames.userwayFt;
        e.isUserWay = !0, t.postMessage(e, "*"), i.postMessage(e, "*")
    }

    function h(e) {
        return -1 === ["#text", "#comment"].indexOf(e.nodeName)
    }

    function v(e) {
        return e.nodeType === Node.TEXT_NODE
    }

    function x(e) {
        return "none" === window.getComputedStyle(e).display
    }

    function E(e) {
        if (!h(e)) return !1;
        var t = e.getAttribute("aria-hidden"),
            i = e.getAttribute("hidden");
        return x(e) || "true" === t || i || "" === i
    }

    function L(e) {
        return "function" == typeof e.getBoundingClientRect && (e.getBoundingClientRect().top > 0 || e.getBoundingClientRect().bottom > 0)
    }

    function T(e) {
        return "#text" == e.nodeName && e.textContent.trim().length > 0
    }

    function N(e) {
        if (!e.parentNode) return 0;
        for (var t = e.parentNode, i = -1, a = 0; a < t.childNodes.length; a++)
            if (t.childNodes[a] === e) {
                i = a;
                break
            }
        return i
    }

    function k(e) {
        if (void 0 !== e.checked) return e.checked;
        var t = e.getAttribute("aria-checked") || "";
        return t ? t = "true" === t.toLowerCase() : null
    }

    function A(e) {
        var t = (e.tagName || "").toLowerCase();
        if (-1 !== ["input", "textarea"].indexOf(t)) {
            if ("input" === t) {
                return !((e.getAttribute("type") || "") && !["text", "password", "email"].indexOf(e))
            }
            return !0
        }
        return !1
    }

    function S(e) {
        var t = e.getAttribute("required"),
            i = e.getAttribute("aria-required") || "";
        return null != t || "true" === i.toLowerCase()
    }

    function M(e, t) {
        return !!e.tagName && (!(!Array.isArray(t) || -1 === t.indexOf(e.tagName.toLowerCase())) || e.tagName.toLowerCase() === t)
    }

    function O(e, t, i) {
        var a = void 0,
            s = document.body || document.head;
        a = document.createElement("script"), a.onload = function() {
            t && t()
        }, a.src = e, i && i.charset && (a.charset = i.charset), i && i.id && (a.id = i.id), s.appendChild(a)
    }
    var C = {};
    C.init = a, C.isCustomElement = s, C.addStyleString = r, C.addHtmlString = n, C.prependPluginButton = o, C.setProperty = u, C.removeProperty = function(e, t) {
        delete e.settings[t], e.supportsLocalStorage && window.localStorage.removeItem(t)
    }, C.getProperty = c, C.supportsLocalStorage = l, C.getCookie = y, C.setCookie = d, C.someInArray = p, C.getStyle = w, C.colourIsLight = _, C.detectBrowser = m, C.isMobile = g, C.getHref = f, C.postMessage = b, C.isElementNode = h, C.isTextNode = v, C.isHideFromReaders = E, C.isLookbleNode = L, C.isNodeTextNotEmpty = T, C.getNodeInParentIndex = N, C.isChecked = k, C.isTextInputElement = A, C.isRequiredElement = S, C.nodeTagNameIs = M, C.mergeObjects = function(e) {
        return e.reduce(function(e, t) {
            return Object.keys(t).forEach(function(i) {
                e[i] = t[i]
            }), e
        }, {})
    };
    C.addUwStylesheetMetropolisFont = function(e) {
        if (!document.getElementById("uw-stylesheet-metro")) {
            var t = document.head,
                i = document.createElement("link");
            i.type = "text/css", i.rel = "stylesheet", i.id = "uw-stylesheet-metro", i.href = e.cdn + "widgetapp/bundles/metropolis/metropolis.css", t.appendChild(i)
        }
    }, C.loadDeferredJs = function(e, t, i, a) {
        function s() {
            r = !0, t()
        }
        var r = !1;
        try {
            "function" == typeof define && define.amd ? (window.curl && (e += "?"), O(e, s, a)) : O(e, s, a)
        } catch (e) {
            i(e)
        }
        setTimeout(function() {
            r || i("Timeout to load script after 3 sec.")
        }, 3e3)
    }, C.debounce = function(e, t, i) {
        var a = void 0;
        return function() {
            var s = this,
                r = arguments,
                n = function() {
                    a = null, i || e.apply(s, r)
                },
                o = i && !a;
            clearTimeout(a), a = setTimeout(n, t), o && e.apply(s, r)
        }
    }, C.scrollToElement = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200;
        if (!e.classList.contains("screen-reader-text")) {
            var i = 0;
            if (e.offsetParent)
                do {
                    i += e.offsetTop, e = e.offsetParent
                } while (e);
            var a = Math.max(0, i - t);
            window.scroll(0, [a])
        }
    }, C.composeElementTextRepresentation = function(e) {
        function t(e) {
            for (var a = 0; a < e.length; a++) {
                var s = e[a];
                if (s.nodeType !== Node.COMMENT_NODE)
                    if (s.nodeType === Node.TEXT_NODE) i += " " + s.textContent.trim().replace(/(\n|\r\n)/g, "");
                    else if (s.nodeType === Node.ELEMENT_NODE) {
                    if ("NOSCRIPT" === s.tagName || "SCRIPT" === s.tagName) continue;
                    if (C.isHideFromReaders(s)) continue;
                    var r = s.getAttribute("aria-hidden"),
                        n = s.getAttribute("alt"),
                        o = s.getAttribute("aria-label");
                    r && "false" !== r || (o ? i += " " + o : n && (i += n + " "), "IMG" !== s.tagName && t(s.childNodes))
                }
            }
        }
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return t(e.childNodes), i.replace(/\s+/g, " ").trim()
    };
    C.getUserWayIconElementTitle = function(e) {
        var t = "Accessibility Menu",
            i = e.language,
            a = e.locales;
        return i && a && a[i].widget.html_title && (t = a[i].widget.html_title), t
    }, C.getModalCompanyLogoSource = function(e) {
        var t = "",
            i = "";
        return e.services && e.services.CUSTOM_BRANDING && e.services.CUSTOM_BRANDING.custom_logo_image_path ? (t = e.services.CUSTOM_BRANDING.custom_logo_image_path, i = e.services.CUSTOM_BRANDING.custom_logo_image_link) : e.services && e.services.WHITE_LABEL && e.services.WHITE_LABEL.hide_logo ? (t = "", i = "") : (t = e.cdn + "widgetapp/images/logo-grey.svg", i = "https://userway.org"), {
            src: t,
            url: i
        }
    }, C.rgbTohex = function(e) {
        var t = ((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2])),
            i = t.toString(16).toUpperCase();
        return "000000".substring(i.length) + i
    }, C.hexToRgb = function(e) {
        var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!t) return [0, 0, 0];
        var i = t[0];
        3 === t[0].length && (i = i.split("").map(function(e) {
            return e + e
        }).join(""));
        var a = parseInt(i, 16);
        return [a >> 16 & 255, a >> 8 & 255, 255 & a]
    }, C.rgbTohsv = function(e) {
        var t = void 0,
            i = void 0,
            a = void 0,
            s = void 0,
            r = void 0,
            n = e[0] / 255,
            o = e[1] / 255,
            u = e[2] / 255,
            c = Math.max(n, o, u),
            l = c - Math.min(n, o, u),
            y = function(e) {
                return (c - e) / 6 / l + .5
            };
        return 0 === l ? (s = 0, r = 0) : (r = l / c, t = y(n), i = y(o), a = y(u), n === c ? s = a - i : o === c ? s = 1 / 3 + t - a : u === c && (s = 2 / 3 + i - t), s < 0 ? s += 1 : s > 1 && (s -= 1)), [360 * s, 100 * r, 100 * c]
    }, C.hsvTorgb = function(e) {
        var t = e[0] / 60,
            i = e[1] / 100,
            a = e[2] / 100,
            s = Math.floor(t) % 6,
            r = t - Math.floor(t),
            n = 255 * a * (1 - i),
            o = 255 * a * (1 - i * r),
            u = 255 * a * (1 - i * (1 - r));
        switch (a *= 255, s) {
            case 0:
                return [a, u, n];
            case 1:
                return [o, a, n];
            case 2:
                return [n, a, u];
            case 3:
                return [n, o, a];
            case 4:
                return [u, n, a];
            case 5:
                return [a, n, o]
        }
    }, i.exports = C
}), UserWayWidgetApp.require.register("features/bigger_text.js", function(e, t, i) {
    function a(e) {
        for (var t = "", i = 0; i < e.length; i++) t += e[i];
        return t
    }

    function s() {
        for (var e = document.querySelectorAll("body, body *"), t = ["SCRIPT", "STYLE", "BR", "HR", "HEAD"], i = 0; i < e.length; i++) e[i] && e[i].tagName && -1 !== t.indexOf(e[i].tagName) || e[i].getAttribute(m) || e[i].setAttribute(m, parseInt(l.getStyle(e[i], "font-size")))
    }

    function r(e, t) {
        b = t, f = e.browser
    }

    function n(e) {
        x() && (b.on(p, v), s()), o(e)
    }

    function o(e) {
        var t = document.getElementsByTagName("html")[0].classList,
            i = document.getElementsByTagName("body")[0].classList;
        c(t, i);
        var a = e.settings[d].value;
        if (x()) {
            for (var s = [130, 160, 190, 205], r = a - 1 || 0, n = document.querySelectorAll("body, body *"), o = "", u = 0; u < n.length; u++) {
                if (g[r - 1])
                    for (var y = 0; y < g[r - 1].length; y++) n[u].classList.remove(g[r - 1][y]);
                var p = n[u].getAttribute(m),
                    w = parseInt(p * s[r] / 100);
                if (w) {
                    var _ = "userway-font" + w; - 1 === g[r].indexOf(_) && (g[r].push(_), o += " ." + d + "-" + a + "-ff ." + _ + "{font-size: " + w + "px!important; line-height: 1.1!important;}"), n[u].classList.add(_)
                }
            }
            o && l.addStyleString(o), a && t.add(d + "-" + a + "-ff")
        } else if (-1 !== ["ie"].indexOf(f)) {
            i.add(d + "-" + a + "-ie");
            for (var b = document.body.getElementsByTagName("*"), h = 0; h < b.length; h++) {
                var v = b[h];
                v.classList && !v.classList.contains("userway_iframe") && "fixed" === window.getComputedStyle(v, null).getPropertyValue("position") && v.classList.add(d + "-" + e.settings[d].value + "-fixed-ie")
            }
        } else t.add(d + "-" + a)
    }

    function u() {
        b.off(p, v), c(document.getElementsByTagName("html")[0].classList, document.getElementsByTagName("body")[0].classList);
        for (var e = document.querySelectorAll("body, body *"), t = 0; t < e.length; t++)
            if (e[t].classList && e[t].classList.length)
                for (var i = e[t].classList, a = 0; a < i.length; a++) i[a].match(/^userway-font/) && e[t].classList.remove(i[a])
    }

    function c(e, t) {
        if (w === f) {
            t.remove(a([d, "-1-", w])), t.remove(a([d, "-2-", w])), t.remove(a([d, "-3-", w])), t.remove(a([d, "-4-", w]));
            for (var i = a([d, "-1-", _, "-", w]), s = a([d, "-2-", _, "-", w]), r = a([d, "-3-", _, "-", w]), n = a([d, "-4-", _, "-", w]), o = document.querySelectorAll(a([".", i, ", .", s, ", .", r, ", .", n])), u = 0; u < o.length; u++) o[u].classList.remove(i), o[u].classList.remove(s), o[u].classList.remove(r), o[u].classList.remove(n)
        } else e.remove(a([d, "-1"]), a([d, "-2"]), a([d, "-3"]), a([d, "-4"]), a([d, "-1-ff"]), a([d, "-2-ff"]), a([d, "-3-ff"]), a([d, "-4-ff"]))
    }
    var l = t("../components/util"),
        y = {},
        d = "userway-s4",
        p = "USERWAY_TARGET_SITE_DOM_CHANGED_EVENT",
        w = "ie",
        _ = "fixed",
        m = "data-userway-font-size",
        g = {
            0: [],
            1: [],
            2: [],
            3: []
        },
        f = void 0,
        b = void 0,
        h = void 0,
        v = function(e, t) {
            h && clearTimeout(h), t.classList.contains("userway") || (h = setTimeout(function() {
                s(), o(e)
            }, 300))
        },
        x = function() {
            return l.isMobile() || "firefox" === f
        };
    y.init = r, y.enable = n, y.disable = u, i.exports = y
}), UserWayWidgetApp.require.register("features/browser_js_api.js", function(e, t, i) {
    function a() {
        var e = t("../main"),
            i = t("../components/util"),
            a = t("./page_structure");
        window.UserWay = new function() {
            function t(t, a) {
                if (void 0 === a) {
                    var s = "userway-" + t,
                        r = e.getFeaturesSettings(),
                        n = r[s].value;
                    "s3" === t ? n ? n < 4 ? n += 1 : n = 0 : n = 1 : "s4" === t ? n ? n < 4 ? n += 1 : n = 0 : n = 1 : "s9" === t ? r[s].disabled ? n = 0 : n < 3 ? n += 1 : n = !n : "s14" === t ? n ? n < 3 ? n += 1 : n = 0 : n = 1 : n = !n, a = n
                }
                e.setFeature(t, a);
                var o = {
                    action: "feature_use",
                    name: t
                };
                a && (o.value = a), i.postMessage(o)
            }
            var s = this;
            return s.getVersion = function() {
                return "1.0.0"
            }, s.widgetToggle = function() {
                e.toggleWidget()
            }, s.widgetOpen = function() {
                e.openWidget()
            }, s.widgetClose = function() {
                e.closeWidget()
            }, s.keyboardNavToggle = function() {
                t("s1")
            }, s.keyboardNavEnable = function() {
                t("s1", 1)
            }, s.keyboardNavDisable = function() {
                t("s1", 0)
            }, s.bigCursorToggle = function() {
                t("s2")
            }, s.bigCursorEnable = function() {
                t("s2", 1)
            }, s.bigCursorDisable = function() {
                t("s2", 0)
            }, s.contrastToggle = function() {
                t("s3")
            }, s.contrastEnable = function(e) {
                -1 !== [1, 2, 3, 4].indexOf(e) ? t("s3", e) : t("s3")
            }, s.contrastDisable = function() {
                t("s3", 0)
            }, s.bigTextToggle = function() {
                t("s4")
            }, s.bigTextEnable = function(e) {
                -1 !== [1, 2, 3, 4].indexOf(e) ? t("s4", e) : t("s4")
            }, s.bigTextDisable = function() {
                t("s4", 0)
            }, s.desaturateToggle = function() {
                t("s3")
            }, s.desaturateEnable = function() {
                t("s3", 4)
            }, s.desaturateDisable = function() {
                t("s3")
            }, s.highlightToggle = function() {
                t("s6")
            }, s.highlightEnable = function() {
                t("s6", 1)
            }, s.highlightDisable = function() {
                t("s6", 0)
            }, s.legibleFontsToggle = function() {
                t("s7")
            }, s.legibleFontsEnable = function() {
                t("s7", 1)
            }, s.legibleFontsDisable = function() {
                t("s7", 0)
            }, s.textSpacingToggle = function() {
                t("s14")
            }, s.textSpacingEnable = function(e) {
                t("s14", e)
            }, s.textSpacingDisable = function() {
                t("s14", 0)
            }, s.resetAll = function() {
                t("s8")
            }, s.readPageToggle = function() {
                t("s9")
            }, s.readPageEnable = function() {
                t("s9", 1)
            }, s.readPageDisable = function() {
                t("s9", 0)
            }, s.readingGuideToggle = function() {
                t("s10")
            }, s.readingGuideEnable = function() {
                t("s10", !0)
            }, s.readingGuideDisable = function() {
                t("s10", !1)
            }, s.iconVisibilityToggle = function() {
                e.manageIconVisibility()
            }, s.iconVisibilityOn = function() {
                e.manageIconVisibility("visible")
            }, s.iconVisibilityOff = function() {
                e.manageIconVisibility("hidden")
            }, s.pageStructureHeaders = function() {
                a.showPageStructureHeaders()
            }, s.pageStructureLandmarks = function() {
                a.showPageStructureLandmarks()
            }, s.pageStructureLinks = function() {
                a.showPageStructureLinks()
            }, s.pageStructureDisable = function() {
                a.closePageStructureDialog()
            }, s.tooltipsToggle = function() {
                t("s12")
            }, s.tooltipsEnable = function() {
                t("s12", 1)
            }, s.tooltipsDisable = function() {
                t("s12", 0)
            }, s.stopAnimationToggle = function() {
                t("s13")
            }, s.stopAnimationEnable = function() {
                t("s13", 1)
            }, s.stopAnimationDisable = function() {
                t("s13", 0)
            }, s.openQuickAccessibilityMenu = function() {
                e.showFirstTabActions()
            }, s
        }
    }
    var s = {};
    s.init = a, i.exports = s
}), UserWayWidgetApp.require.register("features/cursor.js", function(e, t, i) {
    function a(e) {
        _ = e.browser
    }

    function s() {
        l.disableReadingGuide();
        var e = document.getElementsByTagName("html")[0].classList; - 1 !== ["ie", "edge"].indexOf(_) ? e.add(y + "-ie") : e.add(y)
    }

    function r() {
        var e = document.getElementsByTagName("html")[0].classList;
        e.remove(y), e.remove(y + "-ie")
    }

    function n() {
        l.disableBigCursor(), m = document.querySelector(p), document.getElementsByTagName("html")[0].classList.add(d), document.addEventListener("mousemove", f)
    }

    function o() {
        m = null, document.getElementsByTagName("html")[0].classList.remove(d), document.removeEventListener("mousemove", f)
    }

    function u(e) {
        m && m.style.setProperty("top", "" + e - w + "px")
    }
    var c = t("../components/util"),
        l = {},
        y = "userway-s2",
        d = "userway-s10",
        p = ".uw-s10-reading-guide",
        w = 25,
        _ = void 0,
        m = void 0;
    l.init = a, l.enableBigCursor = s, l.disableBigCursor = r;
    var g = function(e) {
            e = e || window.event, u(e.pageY)
        },
        f = c.debounce(g, 10, !0);
    l.enableReadingGuide = n, l.disableReadingGuide = o, l.setRulerElPosition = u, i.exports = l
}), UserWayWidgetApp.require.register("features/highlinks.js", function(e, t, i) {
    function a() {}

    function s() {
        document.getElementsByTagName("html")[0].classList.add(o)
    }

    function r() {
        document.getElementsByTagName("html")[0].classList.remove(o)
    }
    var n = {},
        o = "userway-s6";
    n.init = a, n.enable = s, n.disable = r, i.exports = n
}), UserWayWidgetApp.require.register("features/keyboard_navigation.js", function(e, t, i) {
    function a(e) {
        for (var t = e.getElementsByTagName("*"), i = 0; i < t.length; i++) {
            var a = t[i];
            a.tagName && -1 !== ["SCRIPT", "STYLE", "BR", "HR", "HEAD"].indexOf(a.tagName) || (t[i].getAttribute("data-uw-node-idx") || t[i].setAttribute("data-uw-node-idx", ++S))
        }
    }

    function s() {
        if (!document.body.contains(I) && k.length)
            do {
                var e = k[k.length - 1],
                    t = document.querySelector('[data-uw-node-idx="' + e + '"]');
                if (t) {
                    console.info(k), o(t, !0), console.info(k);
                    break
                }
                k.pop()
            } while (k.length)
    }

    function r() {
        I = null, D = null, x.stop()
    }

    function n() {
        if (I && I.nodeType !== Node.TEXT_NODE) try {
            var e = I.getAttribute("data-uw-node-idx");
            if (e) {
                if (k.length && k[k.length - 1] === e) return;
                k.push(e), k.length >= 10 && k.shift()
            }
        } catch (e) {
            console.error(e)
        }
    }

    function o(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        m(), I = e, e.nodeType === Node.TEXT_NODE && (e = e.parentNode), e.focus(), t && !e.classList.contains("uw-popup-item") && h.scrollToElement(e), _(e), n()
    }

    function u() {
        var e = b.getNextAccessibilityTreeNode(I);
        e && e.node && (o(e.node), D = e)
    }

    function c() {
        return I && I.nodeType === Node.ELEMENT_NODE && (I.classList.contains("uw-popup-main-tab") || I.classList.contains("uw-popup-item"))
    }

    function l(e) {
        j = !0;
        var t = e.altKey || e.ctrlKey || e.shiftKey;
        if (("ArrowLeft" === e.code || 37 === e.keyCode || 37 === e.which) && !t) {
            if (c()) return;
            e.preventDefault(), L.findPrevElementForReader()
        }
        if (("ArrowRight" === e.code || 39 === e.keyCode || 39 === e.which) && !t) {
            if (c()) return;
            e.preventDefault(), L.findNextElementForReader()
        }
        if ("Enter" === e.code || 13 === e.keyCode || 13 === e.which) {
            e.preventDefault();
            var i = e.target || e.srcElement;
            i && i.click()
        }
        var a = b.identifyElementType(I);
        setTimeout(function() {
            L.emit(L.EVENTS.USER_NAVIGATION_KEYDOWN, e, {
                node: I,
                type: a
            })
        }, 0)
    }

    function y(e) {
        j = !0;
        var t = {
            userAction: j
        };
        e = e || window.event;
        var i = e.target || e.srcElement;
        if (i) {
            var a = b.identifyElementType(i);
            if (i === I) return void L.emit(L.EVENTS.ELEMENT_CONTROL_CHANGED, {
                node: i,
                type: a
            });
            a !== E.ELEMENT_TYPE.CONTROL && (o(i, !1), L.emit(L.EVENTS.ELEMENT_SELECTED, {
                node: i,
                type: a
            }, t))
        }
    }

    function d(e) {
        var t = {
            userAction: j
        };
        "BODY" !== document.activeElement.nodeName && I !== document.activeElement && (o(document.activeElement), L.emit(L.EVENTS.ELEMENT_SELECTED, {
            node: document.activeElement,
            type: b.identifyElementType(document.activeElement)
        }, t))
    }

    function p(e) {
        if (!h.isMobile()) {
            var t = {
                    userAction: j
                },
                i = e.altKey || e.ctrlKey || e.shiftKey;
            if ("KeyL" !== e.code && 76 !== e.keyCode && 76 !== e.which || (P = !0), "KeyH" !== e.code && 72 !== e.keyCode && 72 !== e.which || (R = !0), ("ArrowUp" === e.code || 38 === e.keyCode || 38 === e.which) && !i) {
                var a = void 0;
                R ? a = b.getPrevHeader(I) : P && (a = b.getPrevLandmark(I)), a && a.node && (o(a.node), t.markerNav = !0, L.emit(L.EVENTS.ELEMENT_SELECTED, a, t))
            }
            if (("ArrowDown" === e.code || 40 === e.keyCode || 40 === e.which) && !i) {
                var s = void 0;
                R ? s = b.getNextHeader(I) : P && (s = b.getNextLandmark(I)), s && s.node && (o(s.node), t.markerNav = !0, L.emit(L.EVENTS.ELEMENT_SELECTED, s, t))
            }
        }
    }

    function w(e) {
        if (!h.isMobile()) return "KeyL" === e.code || 76 === e.keyCode || 76 === e.which ? void(P = !1) : "KeyH" === e.code || 72 === e.keyCode || 72 === e.which ? void(R = !1) : void 0
    }

    function _(e) {
        A && m(), e.classList.add(T), v.handleFocus(e), A = e
    }

    function m() {
        A && (A.classList.remove(T), A = null)
    }

    function g() {
        v.handleBlur(A)
    }
    var f = t("../components/event_emitter"),
        b = t("../components/accessibility_tree_walker"),
        h = t("../components/util"),
        v = t("../components/flying_focus"),
        x = void 0,
        E = void 0,
        L = new f,
        T = "userway-s1-selected";
    L.EVENTS = {
        ELEMENT_SELECTED: "ELEMENT_SELECTED",
        ELEMENT_CONTROL_CHANGED: "ELEMENT_CONTROL_CHANGED",
        USER_NAVIGATION_KEYDOWN: "USER_NAVIGATION_KEYDOWN"
    };
    var N = !1,
        k = [],
        A = null,
        S = 0,
        M = void 0,
        O = void 0,
        C = function(e, t, i) {
            O && clearTimeout(O), O = setTimeout(function() {
                a(t), s()
            }, 300)
        };
    L.isEnabled = function() {
        return N
    }, L.init = function(e, i) {
        x = t("./responsive_voice"), E = t("../main"), M = i, b.init()
    }, L.enable = function() {
        if (!N) {
            a(document.body), k = [];
            document.getElementsByTagName("html")[0].classList.add("userway-s1"), N = !0, M.on(E.USERWAY_TARGET_SITE_DOM_CHANGED_EVENT, C), v.createFlyFocusElem(), document.addEventListener("keydown", p, !0), document.addEventListener("keyup", w, !0), document.addEventListener("focusin", d, !0), document.addEventListener("blur", g, !0)
        }
    }, L.disable = function() {
        if (N) {
            document.getElementsByTagName("html")[0].classList.remove("userway-s1"), N = !1, M.off(E.USERWAY_TARGET_SITE_DOM_CHANGED_EVENT, C), v.deleteFocusElem(), document.removeEventListener("keydown", p), document.removeEventListener("keyup", w), document.removeEventListener("focusin", d), document.removeEventListener("blur", g, !0), x.disable(), L.disableReaderNavigationRules(), S = 0, k = []
        }
    }, L.enableReaderNavigationRules = function() {
        document.addEventListener("keydown", l), document.addEventListener("click", y), u()
    }, L.disableReaderNavigationRules = function() {
        document.removeEventListener("keydown", l), document.removeEventListener("click", y), r()
    };
    var I = void 0,
        D = void 0;
    L.getInitialReaderElement = function() {
        return D
    }, L.findNextElementForReader = function() {
        var e = {
                userAction: j
            },
            t = b.getNextAccessibilityTreeNode(I);
        t && t.node && (o(t.node), L.emit(L.EVENTS.ELEMENT_SELECTED, t, e))
    }, L.findPrevElementForReader = function() {
        var e = {
                userAction: !0
            },
            t = b.getPrevAccessibilityTreeNode(I);
        t && t.node && (o(t.node), L.emit(L.EVENTS.ELEMENT_SELECTED, t, e))
    };
    var P = !1,
        R = !1,
        j = !1;
    i.exports = L
}), UserWayWidgetApp.require.register("features/legible_text.js", function(e, t, i) {
    function a() {}

    function s() {
        for (var e = ["fa", "fab", "glyphicon", "icon", "icon-.*", "typcn"], t = document.querySelectorAll("body, body *"), i = 0; i < t.length; i++) {
            var a = t[i];
            if (!(a instanceof SVGElement)) {
                var s = a.classList;
                (s && s.value ? s.value : "") && n.someInArray(e, a.classList.value.split(" ")) || a.classList.add("userway-s7-active"), "justify" === getComputedStyle(a, null).getPropertyValue("text-align") && a.classList.add("userway-s7-no-justify")
            }
        }
        document.getElementsByTagName("html")[0].classList.add(u)
    }

    function r() {
        document.getElementsByTagName("html")[0].classList.remove(u);
        for (var e = document.getElementsByClassName("userway-s7-active"), t = 0; t < e.length; t++) {
            var i = e[t];
            e.hasOwnProperty(t) && i.classList.remove("userway-s7-active"), i.classList && i.classList.value && -1 !== i.classList.value.split(" ").indexOf("userway-s7-no-justify") && i.classList.remove("userway-s7-no-justify")
        }
    }
    var n = t("../components/util"),
        o = {},
        u = "userway-s7";
    o.init = a, o.enable = s, o.disable = r, i.exports = o
}), UserWayWidgetApp.require.register("features/page_structure.js", function(e, t, i) {
    function a() {
        q = setInterval(function() {
            U.length && (u(U), U = [])
        }, 1e3)
    }

    function s(e) {
        var t = e.tagName,
            i = e.getAttribute("role");
        return ["HEADER", "NAV", "MAIN", "FOOTER", "ASIDE", "SECTION", "ARTICLE", "FORM"].indexOf(t) > -1 || ["banner", "navigation", "main", "contentinfo", "complementary", "region", "article", "search", "form"].indexOf(i) > -1
    }

    function r(e) {
        return /^h\d{1}$/gi.test(e.nodeName)
    }

    function n(e) {
        var t = e.tagName,
            i = e.getAttribute("role");
        return "A" === t || "link" === i
    }

    function o(e, t) {
        for (var i = t.parentNode; null != i;) {
            if (i === e) return !0;
            i = i.parentNode
        }
        return !1
    }

    function u(e) {
        for (var t = document.querySelector(".uw-page-structure-modal-content"), i = document.querySelector(".uw-popup-main-panel-headers"), a = document.querySelector(".uw-popup-main-panel-landmarks"), u = document.querySelector(".uw-popup-main-panel-links"), c = !1, l = 0; l < e.length; l++) {
            var y = e[l],
                d = o(t, y);
            y.nodeType !== Node.ELEMENT_NODE || d || (c = r(y) || n(y) || s(y))
        }
        c && m([i, a, u])
    }

    function c(e) {
        var t = e.tagName;
        if (!t || !t.length || "H" !== t[0]) return "";
        var i = parseInt(t[1]),
            a = 25 * i,
            s = N.composeElementTextRepresentation(e);
        return e.setAttribute(C, ++R), '<div style="padding-left: ' + a + 'px;" class="uw-popup-item" ' + I + '="' + R + '" tabindex="0" role="link"><div aria-label="Heading level ' + i + ': " class="uw-popup-item-label header-label"><span aria-hidden="true">h' + i + '</span></div><div class="uw-popup-item-text" style="font-family: Metropolis!important;">' + s + "</div></div>"
    }

    function l(e, t) {
        var i = e.tagName,
            a = e.getAttribute("role"),
            s = e.getAttribute("title"),
            r = e.getAttribute("aria-label"),
            n = "";
        "HEADER" === i ? n += "Header" : "NAV" === i || "navigation" === a ? n += "Navigation" : "MAIN" === i || "main" === a ? n += "Main" : "FOOTER" === i || "contentinfo" === a ? n += "Footer" : "ASIDE" === i || "complementary" === a ? n += "Complementary" : "SECTION" === i || "region" === a ? n += "Section" : "ARTICLE" === i || "article" === a ? n += "Article" : "FORM" === i || "form" === a ? n += "Form" : "banner" === a ? n += "Banner" : "search" === a && (n += "Search");
        var u = r || s;
        u && (n += ": " + u);
        for (var c = t.indexOf(e), l = 0, y = 0; y < t.length; y++) y !== c && o(t[y], e) && l++;
        var d = 25 + 25 * l;
        return e.setAttribute(C, ++R), '<div class="uw-popup-item" ' + I + '="' + R + '" style="padding-left: ' + d + 'px" tabindex="0" role="link"><div class="uw-popup-item-label"><img src="' + W.cdn + 'widgetapp/images/code-label.svg" aria-hidden="true" alt="Landmark icon decorative" width="32" height="22"/></div><div class="uw-popup-item-text" style="font-family: Metropolis!important;">' + n + "</div></div>"
    }

    function y(e) {
        var t = e.getAttribute("aria-label"),
            i = t || N.composeElementTextRepresentation(e);
        if (!i) return "";
        var a = e.href;
        if (!a) return "";
        for (var s = 0; s < z.length; s++) {
            var r = z[s];
            if (r.text === i.toLowerCase() && r.href === a.toLowerCase()) return ""
        }
        z.push({
            text: i.toLowerCase(),
            href: a.toLowerCase()
        });
        var n = a.toLowerCase().trim(),
            o = n.startsWith("/"),
            u = n.startsWith("javascript"),
            c = window.location.origin && -1 !== n.indexOf(window.location.origin),
            l = !o && !u && !c,
            y = l ? '<img class="external-link-icon" src="' + W.cdn + 'widgetapp/images/external_link.svg" aria-hidden="true" width="12px" height="12px" alt="External link" />' : "",
            d = t ? '<img class="external-link-icon" src="' + W.cdn + 'widgetapp/images/label.svg" aria-hidden="true" width="12px" height="12px" alt="Aria labelled link" />' : "";
        e.setAttribute(C, ++R);
        var p = '<div class="uw-popup-item-label"><img src="' + W.cdn + 'widgetapp/images/link-label.svg" aria-hidden="true" alt="Link icon decorative" width="32" height="22"/></div><div class="uw-popup-item-text" style="font-family: Metropolis!important;">' + i + y + d + "</div>";
        return u ? '<div class="uw-popup-item" tabindex="0" ' + I + '="' + R + '" style="padding-left: 25px" role="link">' + p + "</div>" : '<a class="uw-popup-item" target="_blank" a style="padding-left: 25px" href="' + n + '">' + p + "</a>"
    }

    function d() {
        for (var e = document.querySelectorAll(".uw-popup-main-tab"), t = 0; t < e.length; t++) {
            var i = e[t];
            i.classList.remove("active"), i.setAttribute("tabindex", "-1")
        }
    }

    function p() {
        for (var e = document.querySelectorAll(".uw-popup-main-panel"), t = 0; t < e.length; t++) {
            e[t].classList.remove("active")
        }
    }

    function w(e, t) {
        var i = e.querySelector(".items-wrapper");
        e.querySelector(".uw-popup-main-panel-no-items").style.display = "none", i.innerHTML = t;
        var a = i.firstChild,
            s = i.lastChild;
        a && s && (s.addEventListener("keydown", function(e) {
            9 !== e.keyCode && 9 !== e.which || (e.preventDefault(), a.focus()), "ArrowDown" !== e.code && 40 !== e.keyCode && 40 !== e.which || (e.preventDefault(), a.focus())
        }), a.addEventListener("keydown", function(e) {
            "ArrowUp" !== e.code && 38 !== e.keyCode && 38 !== e.which || (e.preventDefault(), s.focus())
        }));
        for (var r = 0; r < i.children.length; r++) ! function(e) {
            var t = i.children[e];
            t.addEventListener("click", function(e) {
                "A" !== t.tagName && (e.preventDefault(), T(t))
            }), t.addEventListener("keydown", function(e) {
                if ("Enter" === e.code || 13 === e.keyCode || 13 === e.which || "Space" === e.code || 32 === e.keyCode || 32 === e.which) {
                    if ("A" === t.tagName) return;
                    e.preventDefault(), T(t)
                }
                "ArrowDown" !== e.code && 40 !== e.keyCode && 40 !== e.which || (e.preventDefault(), t.nextSibling && t.nextSibling.focus()), "ArrowUp" !== e.code && 38 !== e.keyCode && 38 !== e.which || (e.preventDefault(), t.previousSibling && t.previousSibling.focus())
            })
        }(r)
    }

    function _(e) {
        e.querySelector(".uw-popup-main-panel-no-items").style.display = "block";
        var t = e.querySelector(".no-items-button"),
            i = e.querySelector(".no-items-image"),
            a = W.cdn + "widgetapp/images/no-items.svg",
            s = '<img width="81" height="80" alt="No items" src="' + a + '" />';
        i.innerHTML = s, t.addEventListener("click", function() {
            x()
        }), t.addEventListener("keydown", function(e) {
            "Enter" !== e.code && 13 !== e.keyCode && 13 !== e.which || (e.preventDefault(), x()), 9 !== e.keyCode && 9 !== e.which || e.shiftKey || e.preventDefault()
        })
    }

    function m(e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t],
                a = void 0,
                s = void 0;
            if (i.classList.contains("uw-popup-main-panel-headers")) a = A.getPageHeadersList(), s = c;
            else if (i.classList.contains("uw-popup-main-panel-landmarks")) a = A.getPageLandmarksList(), s = l;
            else {
                if (!i.classList.contains("uw-popup-main-panel-links")) throw "Unexpected tab element: " + target;
                a = A.getPageLinksList(), s = y, z = []
            }
            if (a.length) {
                for (var r = "", n = 0; n < a.length; n++) {
                    r += s(a[n], a)
                }
                w(i, r)
            } else _(i)
        }
    }

    function g(e) {
        var t = e.querySelector(".items-wrapper");
        if (t.children.length) t.firstChild.focus();
        else {
            var i = e.querySelector(".no-items-button");
            i && i.focus()
        }
    }

    function f(e) {
        if (d(), e) {
            e.classList.add("active"), e.setAttribute("tabindex", "0"), p();
            var t = document.querySelector(".uw-popup-main-panel-headers"),
                i = document.querySelector(".uw-popup-main-panel-landmarks"),
                a = document.querySelector(".uw-popup-main-panel-links"),
                s = void 0;
            if (e.classList.contains("uw-popup-main-tab_headers")) s = t;
            else if (e.classList.contains("uw-popup-main-tab_landmarks")) s = i;
            else {
                if (!e.classList.contains("uw-popup-main-tab_links")) throw "Unexpected tab element: " + e;
                s = a
            }
            s.classList.add("active"), e.focus()
        }
    }

    function b() {
        var e = document.getElementById("uwPopupHeaderClose");
        e && (e.addEventListener("click", function(e) {
            e.preventDefault(), x()
        }), e.addEventListener("keydown", function(e) {
            "Enter" !== e.code && 13 !== e.keyCode && 13 !== e.which || (e.preventDefault(), x()), 9 !== e.keyCode && 9 !== e.which || !e.shiftKey || e.preventDefault()
        }))
    }

    function h() {
        return N.addUwStylesheetMetropolisFont(W), new Promise(function(e, t) {
            N.loadDeferredJs(M, function() {
                for (var t = document.querySelector(".uw-page-structure-modal-content"), i = t.querySelectorAll("div, span, button, a"), a = 0; a < i.length; a++) i[a].style.setProperty("font-family", "Metropolis", "important");
                var s = W.language || "en",
                    r = pageStructureLocales[s].page_structure ? pageStructureLocales[s].page_structure : pageStructureLocales.en.page_structure;
                if (r) {
                    var n = document.querySelector(".uw-popup-header-text"),
                        o = document.querySelector(".uw-popup-main-tab_headers .tab-name"),
                        u = document.querySelector(".uw-popup-main-tab_landmarks .tab-name"),
                        c = document.querySelector(".uw-popup-main-tab_links .tab-name"),
                        l = document.querySelector(".uw-popup-main-panel-headers .no-items-text"),
                        y = document.querySelector(".uw-popup-main-panel-landmarks .no-items-text"),
                        d = document.querySelector(".uw-popup-main-panel-links .no-items-text"),
                        p = document.querySelectorAll(".no-items-button-wrapper .no-items-button");
                    n.innerText = r.title, o.innerText = r.tabs.headers, u.innerText = r.tabs.landmarks, c.innerText = r.tabs.links, l.innerText = r.no_items.headers, y.innerText = r.no_items.landmarks, d.innerText = r.no_items.links;
                    for (var w = 0; w < p.length; w++) p[w].innerText = r.no_items.close
                }
                var _ = document.querySelector(".uw-page-structure-modal-content .uw-popup-footer"),
                    m = N.getModalCompanyLogoSource(W),
                    g = m.src,
                    f = m.url,
                    b = "";
                g && (b = '<img width="68" alt="Company logo" src="' + g + '" />', f && (b = '<a href="' + f + '" target="_blank">' + b + "</a>")), _.innerHTML = b, e()
            }, function(e) {
                console.error("Unable to load pageStructureLocalizations: " + e), t()
            }, {
                charset: "utf-8"
            })
        })
    }

    function v() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D.HEADERS;
        j || (j = !0, B.on(P, H), a(), A = t("../components/accessibility_tree_walker"), h().then(function() {
            var t = document.querySelector(".uw-popup-main-tab_headers"),
                i = document.querySelector(".uw-popup-main-tab_landmarks"),
                a = document.querySelector(".uw-popup-main-tab_links"),
                s = document.querySelector(".uw-popup-main-panel-headers"),
                r = document.querySelector(".uw-popup-main-panel-landmarks"),
                n = document.querySelector(".uw-popup-main-panel-links"),
                o = [t, i, a],
                u = [s, r, n];
            m(u);
            var c = void 0;
            if (e === D.HEADERS) c = t;
            else if (e === D.LANDMARKS) c = i;
            else {
                if (e !== D.LINKS) throw "Unexpected tab: " + e;
                c = a
            }
            document.getElementById(O).classList.add("uw-page-structure-modal_active"), f(c);
            for (var l = 0; l < o.length; l++) ! function(e) {
                var t = o[e];
                t.addEventListener("click", function(e) {
                    e.preventDefault(), f(t)
                }), t.addEventListener("keydown", function(t) {
                    if ("ArrowRight" === t.code || 39 === t.keyCode || 39 === t.which) {
                        t.preventDefault();
                        f(e === o.length - 1 ? o[0] : o[e + 1])
                    }
                    if ("ArrowLeft" === t.code || 37 === t.keyCode || 37 === t.which) {
                        t.preventDefault();
                        f(0 === e ? o[o.length - 1] : o[e - 1])
                    }
                    if ("Home" !== t.code && 36 !== t.keyCode && 36 !== t.which || (t.preventDefault(), f(o[0])), "End" !== t.code && 35 !== t.keyCode && 35 !== t.which || (t.preventDefault(), f(o[o.length - 1])), "ArrowDown" === t.code || 40 === t.keyCode || 40 === t.which) {
                        t.preventDefault();
                        g(u[e])
                    }
                })
            }(l);
            for (var l = 0; l < u.length; l++) ! function(e) {
                u[e].addEventListener("keydown", function(t) {
                    "ArrowRight" !== t.code && 39 !== t.keyCode && 39 !== t.which || (t.preventDefault(), f(e === o.length - 1 ? o[0] : o[e + 1])), "ArrowLeft" !== t.code && 37 !== t.keyCode && 37 !== t.which || (t.preventDefault(), f(0 === e ? o[o.length - 1] : o[e - 1])), "Home" !== t.code && 36 !== t.keyCode && 36 !== t.which || (t.preventDefault(), f(o[0])), "End" !== t.code && 35 !== t.keyCode && 35 !== t.which || (t.preventDefault(), f(o[o.length - 1]))
                })
            }(l);
            b(), document.addEventListener("click", E), document.addEventListener("keydown", L)
        }).catch(function() {}))
    }

    function x() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        document.getElementById(O).classList.remove("uw-page-structure-modal_active"), j = !1, B.off(P, H), q && clearInterval(q), k.setFeature("s11", !1), N.postMessage({
            action: "close_ps_popup",
            force_focus: !e
        }), R = 0;
        for (var t = document.querySelectorAll("*[" + C + "]"), i = 0; i < t.length; i++) {
            t[i].setAttribute(C, "")
        }
        for (var a = document.querySelectorAll(".items-wrapper"), s = 0; s < a.length; s++) {
            a[s].innerHTML = ""
        }
        for (var r = document.querySelectorAll(".uw-popup-main-panel-no-items"), n = 0; n < r.length; n++) {
            r[n].style.display = "none"
        }
        document.removeEventListener("click", E), document.removeEventListener("keydown", L)
    }

    function E(e) {
        var t = document.getElementById(O);
        e.target === t && x()
    }

    function L(e) {
        27 !== e.keyCode && 27 !== e.which || x()
    }

    function T(e) {
        var t = e.getAttribute(I);
        if (t) {
            var i = "[" + C + '="' + t + '"]',
                a = document.querySelector(i);
            if (a) {
                var s = a.getAttribute("role");
                if ("A" === a.tagName) {
                    var r = a.href;
                    if (r) return r.startsWith("javascript") ? (x(!0), a.click()) : window.open(r, "_blank")
                }
                if ("link" === s) return x(!0), a.click();
                a.getAttribute("tabindex") || (a.setAttribute("tabindex", "-1"), setTimeout(function() {
                    a.setAttribute("tabindex", "")
                }, 10)), a.focus(), x(!0), setTimeout(function() {
                    N.scrollToElement(a, 70)
                }, 50)
            }
        }
    }
    var N = t("../components/util"),
        k = void 0,
        A = void 0,
        S = {},
        M = "https://cdn.userway.org/widgetapp/bundles/page-structure.js",
        O = "uwPageStructureModal",
        C = "data-uw-ps-node-idx",
        I = "data-uw-ps-item-idx",
        D = {
            HEADERS: "HEADERS",
            LINKS: "LINKS",
            LANDMARKS: "LANDMARKS"
        },
        P = "USERWAY_TARGET_SITE_DOM_CHANGED_EVENT",
        R = 0,
        j = !1,
        W = void 0,
        B = void 0,
        U = [],
        q = void 0,
        H = function(e, t, i, a) {
            t.classList.contains("userway") || (U = U.concat(Array.from(i)))
        };
    S.init = function(e, i) {
        W = e, B = i, k = t("../main")
    }, S.showPageStructureHeaders = function() {
        v(D.HEADERS)
    }, S.showPageStructureLandmarks = function() {
        v(D.LANDMARKS)
    }, S.showPageStructureLinks = function() {
        v(D.LINKS)
    }, S.closePageStructureDialog = function() {
        x()
    };
    var z = [];
    i.exports = S
}), UserWayWidgetApp.require.register("features/responsive_voice.js", function(e, t, i) {
    function a(e) {
        return V ? X ? Y ? s(e) : void O.loadDeferredJs(B, function() {
            responsiveVoice.init(), J = responsiveVoiceLocales[Z], G = !0, -1 !== ["firefox", "edge", "ie"].indexOf(O.detectBrowser()) && responsiveVoice.forceFallbackMode(!0), ee = new Audio(e.cdn + "widgetapp/sounds/keyclick.mp3"), Y = !0, s(e)
        }, function(e) {
            console.error("Unable to load responsivevoice: " + e)
        }) : void(Y = !0) : setTimeout(function() {
            a(e)
        }, 100)
    }

    function s(e) {
        function t() {
            F = z.WAIT_EVENT, c(I.getInitialReaderElement()).then(f), Q = !0
        }
        var i = e.settings[P].value;
        if ((i < 1 || i > 3) && (i = 1), se = ae["" + i], !K) {
            K = !0, F = z.WAIT, I.enableReaderNavigationRules();
            var a = {
                isAlertMessage: !0
            };
            O.isMobile() ? u(J.widget.responsive_voice.enabled, a).then(t) : (u(J.widget.responsive_voice.enabled, a), u(J.widget.responsive_voice.use_arrow_keys, a).then(t)), I.on(I.EVENTS.ELEMENT_SELECTED, b), I.on(I.EVENTS.ELEMENT_CONTROL_CHANGED, h), I.on(I.EVENTS.USER_NAVIGATION_KEYDOWN, v);
            document.getElementsByTagName("html")[0].classList.add(P)
        }
    }

    function r() {
        if (K) {
            K = !1, F = z.WAIT, I.off(I.EVENTS.ELEMENT_SELECTED, b), I.off(I.EVENTS.ELEMENT_CONTROL_CHANGED, h), I.off(I.EVENTS.USER_NAVIGATION_KEYDOWN, v), l(), I.disableReaderNavigationRules();
            document.getElementsByTagName("html")[0].classList.remove(P)
        }
    }

    function n() {
        if (F !== z.IS_WORKING) {
            var e = re.shift();
            e && (F = z.IS_WORKING, ne = e.options, e.handle().then(function() {
                F = z.WAIT_EVENT, n()
            }))
        }
    }

    function o(e) {
        if (e.options.isAlertMessage) re.unshift(e);
        else {
            if (e.options.notStop || F !== z.IS_WORKING || ne.isAlertMessage || (l(), F = z.WAIT_EVENT), !e.options.saveTasks) {
                for (var t = [], i = 0; i < re.length; i++) {
                    var a = re[i];
                    a.alertMessage ? t.push(a) : a.methodReject && a.methodReject()
                }
                re = t
            }
            re.push(e)
        }
        n()
    }

    function u(e, t) {
        t = t || {};
        var i = i;
        return void 0 !== t.delayReading && (i = t.delayReading), new Promise(function(a, s) {
            o({
                handle: function() {
                    return new Promise(function(s, r) {
                        var n = !1;
                        responsiveVoice.speak(e, $, {
                            onstart: function() {
                                n = !0
                            },
                            onend: function() {
                                setTimeout(function() {
                                    s(), a()
                                }, i)
                            },
                            rate: t.rate || se,
                            pitch: t.pitch || 1
                        }), setTimeout(function() {
                            if (!n) {
                                document.querySelector(".rvNotification .rvButton.rvButtonAllow") && responsiveVoice.allowSpeechClicked(!0)
                            }
                        }, 500)
                    })
                },
                options: t,
                methodReject: s
            })
        })
    }

    function c(e, t) {
        t = t || {};
        var i = i;
        return void 0 !== t.delayReading && (i = t.delayReading), new Promise(function(a, s) {
            o({
                handle: function() {
                    var s = g(e);
                    return O.isMobile() || s.elementType !== C.ELEMENT_TYPE.CONTROL || ee.play(), new Promise(function(e, r) {
                        responsiveVoice.speak(s.textToRead, $, {
                            onstart: function() {
                                y(s.originalNode)
                            },
                            onend: function() {
                                setTimeout(function() {
                                    d(s.originalNode), e(), a(s)
                                }, i)
                            },
                            rate: t.rate || se,
                            pitch: t.pitch || 1
                        })
                    })
                },
                options: t,
                methodReject: s
            })
        })
    }

    function l() {
        oe && d(oe);
        try {
            responsiveVoice.cancel()
        } catch (e) {}
    }

    function y(e) {
        oe && d(oe), e.nodeType === Node.TEXT_NODE && (e = e.parentNode), e.classList.add(R), oe = e
    }

    function d(e) {
        oe && (oe.classList.remove(R), oe = null), e.nodeType === Node.TEXT_NODE && (e = e.parentNode), e.classList.remove(R)
    }

    function p(e) {
        return J.widget.responsive_voice[e] || e
    }

    function w(e) {
        function t(e) {
            return e ? "LABEL" === e.tagName ? e : t(e.parentNode) : null
        }
        var i = t(e.parentNode);
        if (i) return O.composeElementTextRepresentation(i, "");
        if (e.getAttribute("aria-label")) return e.getAttribute("aria-label");
        if (e.getAttribute("aria-labelledby")) return _(e.getAttribute("aria-labelledby"));
        if (e.id) {
            var a = function(e) {
                for (var t = document.getElementsByTagName("LABEL"), i = 0; i < t.length; i++)
                    if (t[i].htmlFor === e) return t[i];
                return null
            }(e.id);
            if (a) return O.composeElementTextRepresentation(a, "")
        }
        return e.getAttribute("title") ? e.getAttribute("title") : ""
    }

    function _(e) {
        for (var t = e.split(" "), i = "", a = 0; a < t.length; a++) {
            var s = document.getElementById(t[a]);
            s && (i = " " + O.composeElementTextRepresentation(s, i))
        }
        return i
    }

    function m(e) {
        if (!e || !e.type || -1 !== [C.ELEMENT_TYPE.UNKNOWN, C.ELEMENT_TYPE.NOT_ALLOWED, C.ELEMENT_TYPE.TEXT_NODE].indexOf(e.type)) return {};
        var t = e.node;
        return {
            tagName: t.tagName,
            role: t.getAttribute("role") || "",
            ariaLabel: t.getAttribute("aria-label") || "",
            ariaLabelledBy: t.getAttribute("aria-labelledby") || "",
            type: t.getAttribute("type") || "",
            value: t.value || "",
            readonly: null !== t.getAttribute("readonly") || !1,
            disabled: null !== t.getAttribute("disabled") || !1
        }
    }

    function g(e) {
        function t(e) {
            e && (i && (i += ". "), i += e, i = i.replace("..", "."), i = i.replace(",.", ","))
        }
        var i = "",
            a = void 0,
            s = m(e);
        if (e) {
            if (e.type === C.ELEMENT_TYPE.TEXT_NODE) i = e.node.textContent.trim().replace(/(\n|\r\n)/g, "").replace(/\s+/g, " "), a = C.ELEMENT_TYPE.TEXT_NODE;
            else if (e.type === C.ELEMENT_TYPE.COMPOSED_TEXT_NODES) i = O.composeElementTextRepresentation(e.node, i), a = C.ELEMENT_TYPE.COMPOSED_TEXT_NODES;
            else if (e.type === C.ELEMENT_TYPE.HEADING) a = C.ELEMENT_TYPE.HEADING, i = O.composeElementTextRepresentation(e.node, i), t(p("header"));
            else if (e.type === C.ELEMENT_TYPE.LANDMARK) a = C.ELEMENT_TYPE.LANDMARK, s.ariaLabel ? i = s.ariaLabel : s.ariaLabelledBy && (i = _(s.ariaLabelledBy)), t("HEADER" === s.tagName || "banner" === s.role ? p("header_land") : "NAV" === s.tagName || "navigation" === s.role ? p("nav_land") : "MAIN" === s.tagName || "main" === s.role ? p("main_land") : "FOOTER" === s.tagName || "contentinfo" === s.role ? p("footer_land") : "ASIDE" === s.tagName || "complementary" === s.role ? p("aside_land") : "SECTION" === s.tagName || "region" === s.role ? p("section_land") : "ARTICLE" === s.tagName || "article" === s.role ? p("art_land") : "FORM" === s.tagName || "form" === s.role ? p("from_land") : "search" === s.role ? p("search_land") : p("Landmark"));
            else if (e.type === C.ELEMENT_TYPE.CONTROL) {
                a = C.ELEMENT_TYPE.CONTROL;
                var r = s.tagName,
                    n = s.role,
                    o = s.type,
                    u = s.value,
                    c = s.disabled,
                    l = s.readonly,
                    y = s.ariaLabel;
                "link" !== n && "A" !== r || (i = y || (s.ariaLabelledBy ? _(s.ariaLabelledBy) : O.composeElementTextRepresentation(e.node, i)), t(p("link"))), "button" === n || "BUTTON" === r ? (i = y || (s.ariaLabelledBy ? _(s.ariaLabelledBy) : O.composeElementTextRepresentation(e.node, i)), t(p("button")), t(c ? p("disabled") : "")) : "INPUT" !== r || "button" !== o && "submit" !== o && "reset" !== o || (i = y || (s.ariaLabelledBy ? _(s.ariaLabelledBy) : u), t(p("button")), t(c ? p("disabled") : ""));
                var d = O.isRequiredElement(e.node),
                    g = "true" === e.node.getAttribute("aria-invalid"),
                    f = !l && !c;
                "checkbox" === n || "INPUT" === r && "checkbox" === o ? (i = w(e.node, i), t(p("checkbox")), t(f && d ? p("required") : ""), t(p(O.isChecked(e.node) ? "checked" : "not_checked")), t(c ? p("disabled") : "")) : "radio" === n || "INPUT" === r && "radio" === o ? (i = w(e.node, i), t(p("radio_button")), t(f && d ? p("required") : ""), t(p(O.isChecked(e.node) ? "checked" : "not_checked")), t(c ? p("disabled") : "")) : "INPUT" === r && (i = w(e.node, i), t(p("input")), t(f && d ? p("required") : ""), t(u || p("blank")), t(g ? p("invalid") : ""), t(l ? p("readonly") : ""), t(c ? p("disabled") : "")), "TEXTAREA" === r && (i = w(e.node, i), t(p("textarea")), t(f && d ? p("required") : ""), t(u || p("blank")), t(l ? p("readonly") : ""), t(c ? p("disabled") : ""))
            } else if (e.type === C.ELEMENT_TYPE.HAS_ALT_DESCRIPTION) {
                a = C.ELEMENT_TYPE.HAS_ALT_DESCRIPTION;
                var b = s.tagName,
                    h = s.role,
                    v = s.ariaLabel,
                    x = e.node.getAttribute("alt") || "",
                    E = e.node.getAttribute("title") || "";
                "IMG" !== b && "img" !== h || (v ? i = v : x && (i = x), t(p("image"))), "ABBR" === b && (i = E)
            }
        } else a = C.ELEMENT_TYPE.UNKNOWN;
        return i = i.replace(/\|/g, "").trim(), {
            originalNode: e.node,
            textToRead: i,
            elementType: a
        }
    }

    function f(e) {
        if (!O.isMobile()) {
            if (ie) return;
            if (te && e.elementType === C.ELEMENT_TYPE.CONTROL) return
        }
        I.findNextElementForReader()
    }

    function b(e, t) {
        Q && -1 !== [z.WAIT_EVENT, z.IS_WORKING].indexOf(F) && (t.userAction && (te = !0), ie = !!t.markerNav, c(e).then(f))
    }

    function h(e) {
        if (!O.isMobile() && e && e.type === C.ELEMENT_TYPE.CONTROL) {
            var t = e.node,
                i = t.tagName,
                a = t.getAttribute("type") || "",
                s = t.getAttribute("role") || "";
            ("checkbox" === s || "INPUT" === i && "checkbox" === a || "radio" === s || "INPUT" === i && "radio" === a) && u(p(O.isChecked(t) ? "checked" : "not_checked"))
        }
    }

    function v(e, t) {
        if (!O.isMobile() && t && t.type === C.ELEMENT_TYPE.CONTROL && Q && -1 !== [z.WAIT_EVENT, z.IS_WORKING].indexOf(F)) {
            var i = t.node,
                a = i.tagName,
                s = i.getAttribute("type") || "",
                r = "TEXTAREA" === a,
                n = "INPUT" === a && "radio" !== s && "checkbox" !== s;
            if (r || n) {
                var o = i.value,
                    c = o[o.length - 1];
                "\n" === c && (c = null), "Space" === e.code && (c = p("space")), "Backspace" === e.code && (c = null), c && u(c, {
                    delayReading: 0,
                    rate: 2
                })
            }
        }
    }

    function x(e) {
        return new Promise(function(t, i) {
            t(e.tunings.widget_override_site_lang ? e.tunings.widget_override_site_lang : null)
        })
    }

    function E(e) {
        return new Promise(function(e, t) {
            e(_userway_config.hasOwnProperty("language") && _userway_config.language && "null" !== _userway_config.language ? _userway_config.language : null)
        })
    }

    function L(e) {
        return new Promise(function(t, i) {
            if (e.tunings.widget_force_determining_language && "on" === e.tunings.widget_force_determining_language) try {
                var a = function e(t) {
                    if (3 === t.nodeType) return t.nodeValue;
                    for (var i = t.childNodes, a = i.length, s = "", r = 0; r < a; r++)
                        if (3 != i[r].nodeType)
                            if (i[r].tagName) {
                                if (-1 !== ["script", "img", "styles", "style", "iframe", "xmp", "br", "select", "noscript"].indexOf(i[r].tagName.toLowerCase())) s += "";
                                else if (-1 !== ["input", "textarea"].indexOf(i[r].tagName.toLowerCase())) {
                                    var n = i[r].getAttribute("placeholder");
                                    n && (s += n)
                                } else {
                                    var o = i[r].getAttribute("aria-label");
                                    s += o && "" !== o ? o : e(i[r])
                                }
                                s += ""
                            } else s += e(i[r]);
                    else s += i[r].nodeValue;
                    return s
                }(document.getElementsByTagName("body")[0]);
                if (a = a.replace(/\s+/g, " ").trim(), function(e) {
                        for (var t = ["ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר", "ש", "ת", "ך", "ם", "ן", "צ", "ף"], i = 0, a = 0; a < e.length; a++)
                            if (-1 !== t.indexOf(e[a]) && ++i >= 150) return !0;
                        return !1
                    }(a)) return t("he");
                O.loadDeferredJs(W, function() {
                    var e = franc(a),
                        i = !!e && convertLanguageCode(e, "ISO 639-3", "ISO 639-1");
                    if (i) return t(i);
                    t(null)
                }, function(e) {
                    console.error(e), t(null)
                })
            } catch (e) {
                console.error(e), t(null)
            } else t(null)
        })
    }

    function T(e) {
        return new Promise(function(t, i) {
            t(e.tunings && e.tunings.widget_language && "null" !== e.tunings.widget_language ? e.tunings.widget_language : null)
        })
    }

    function N(e) {
        return new Promise(function(e, t) {
            var i = document.getElementsByTagName("html")[0];
            if (i) try {
                var a = i.getAttribute("lang") || i.getAttribute("xml:lang");
                a && (a = ye(a), e(a)), e(null)
            } catch (t) {
                console.error(t), e(null)
            } else e(null)
        })
    }

    function k(e) {
        return new Promise(function(e, t) {
            var i = window.navigator.languages ? window.navigator.languages[0] : null,
                a = i || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
            if (a) try {
                a = ye(a), e(a)
            } catch (t) {
                console.error(t), e(null)
            } else e(null)
        })
    }

    function A(e) {
        return new Promise(function(e, t) {
            e(H)
        })
    }

    function S(e) {
        return new Promise(function(t, i) {
            M(e, 0, t, i)
        })
    }

    function M(e, t, i, a) {
        t < le.length ? le[t](e).then(function(s) {
            if (s) return i(s);
            try {
                return M(e, t + 1, i, a)
            } catch (e) {
                console.error(e), a(e)
            }
        }) : a("Language not resolved, broken logic.")
    }
    var O = t("../components/util"),
        C = t("../main"),
        I = t("./keyboard_navigation"),
        D = {},
        P = "userway-s9",
        R = "userway-reader-active",
        j = "https://cdn.userway.org/",
        W = j + "vendor/franc-all_lng-codes.min.js",
        B = j + "widgetapp/bundles/rvoice-01.js",
        U = {
            en: "UK English Female",
            "en-US": "US English Female",
            ru: "Russian Female",
            ar: "Arabic Female",
            cs: "Czech Female",
            el: "Greek Female",
            es: "Spanish Female",
            fr: "French Female",
            hi: "Hindi Female",
            it: "Italian Female",
            ja: "Japanese Female",
            ko: "Korean Female",
            nl: "Dutch Female",
            pl: "Polish Female",
            pt: "Portuguese Female",
            "pt-BR": "Brazilian Portuguese Female",
            ro: "Romanian Female",
            sv: "Swedish Female",
            tr: "Turkish Female",
            uk: "UK English Female",
            zh: "Chinese Female",
            in: "Indonesian Female",
            no: "Norwegian Female",
            sk: "Slovak Female",
            ta: "Tamil Male",
            th: "Thai Female",
            sq: "Albanian Male",
            ca: "Catalan Male",
            hr: "Croatian Male",
            da: "Danish Female",
            fi: "Finnish Female",
            hu: "Hungarian Female",
            is: "Icelandic Male",
            lv: "Latvian Male",
            mk: "Macedonian Male",
            sr: "Serbian Male",
            vi: "Vietnamese Male",
            de: "Deutsch Female"
        },
        q = ["he", "lt"],
        H = "en-US",
        z = {
            WAIT: "WAIT",
            WAIT_EVENT: "WAIT_EVENT",
            IS_WORKING: "IS_WORKING"
        };
    D.RV_STATUS = z;
    var F = z.WAIT;
    D.getStatus = function() {
        return F
    };
    var V = !1,
        G = !1,
        Y = !1,
        X = !0,
        K = !1,
        Q = !1,
        Z = void 0,
        J = void 0,
        $ = null,
        ee = void 0,
        te = !1,
        ie = !1,
        ae = {
            1: 1,
            2: 1.3,
            3: .95
        },
        se = ae[1];
    D.isEnabled = function() {
        return K
    }, D.init = function(e) {
        C = t("main"), S(e).then(function(t) {
            ce(t, e), X ? e.settings[P].disabled = !1 : (e.settings[P].value = !1, e.settings[P].disabled = !0), V = !0
        }, function(e) {
            console.error("Unable to findLanguage: " + e), $ = U[H], Z = H, V = !0
        })
    }, D.enable = a, D.disable = r;
    var re = [],
        ne = void 0;
    D.readNode = c;
    var oe = void 0;
    D.stop = l;
    var ue = function(e) {
            return -1 === q.indexOf(e)
        },
        ce = function(e, t) {
            e && "en" !== e.replace(/^(.{2}).*/, "$1") || (e = H), U[e] && ue(e) ? ($ = U[e], Z = e, console.info("ScreenReader voice lang:" + Z)) : X = !1
        },
        le = [x, E, L, T, N, k, A],
        ye = function(e) {
            return "en-US" === e ? e : (-1 !== e.indexOf("-") && (e = e.split("-")[0]), -1 !== e.indexOf("_") && (e = e.split("_")[0]), e)
        };
    i.exports = D
}), UserWayWidgetApp.require.register("features/spacing_text.js", function(e, t, i) {
    function a() {}

    function s(e) {
        for (var t = e.settings[c].value, i = ["fa", "fab", "glyphicon", "icon", "icon-.*", "typcn"], a = document.querySelectorAll("body, body *"), s = 0; s < a.length; s++) {
            var r = a[s];
            if (!(r instanceof SVGElement)) {
                var u = r.classList;
                (u && u.value ? u.value : "") && o.someInArray(i, r.classList.value.split(" ")) || r.classList.add("userway-s14-active"), "justify" === getComputedStyle(r, null).getPropertyValue("text-align") && r.classList.add("userway-s14-no-justify")
            }
        }
        var l = document.getElementsByTagName("html")[0].classList;
        n(l), l.add(c + "-" + t)
    }

    function r() {
        var e = document.getElementsByTagName("html")[0].classList;
        e.remove(c);
        for (var t = document.getElementsByClassName("userway-s14-active"), i = 0; i < t.length; i++) {
            var a = t[i];
            t.hasOwnProperty(i) && a.classList.remove("userway-s14-active"), a.classList && a.classList.value && -1 !== a.classList.value.split(" ").indexOf("userway-s7-no-justify") && a.classList.remove("userway-s14-no-justify")
        }
        n(e)
    }

    function n(e) {
        for (var t = /^userway-s14-/, i = 0; e.length > i; i++) e[i].match(t) && e.remove(e[i])
    }
    var o = t("../components/util"),
        u = {},
        c = "userway-s14";
    u.init = a, u.enable = s, u.disable = r, i.exports = u
}), UserWayWidgetApp.require.register("features/stop_animations.js", function(e, t, i) {
    function a() {
        "ie" === v.detectBrowser() ? (O = document.createEvent("CustomEvent"), O.initCustomEvent(S, !0, !0, null)) : O = new CustomEvent(S, {}), Object.defineProperty(HTMLMediaElement.prototype, "uwplaying", {
            get: function() {
                return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2)
            }
        })
    }

    function s() {
        document.getElementsByTagName("html")[0].classList.add(E), b(), c(L), w(), g(), n(), M = !0
    }

    function r() {
        document.getElementsByTagName("html")[0].classList.remove(E), M && (h(), c(T), _(), f(), o())
    }

    function n() {
        u(!0)
    }

    function o() {
        u(!1)
    }

    function u(e) {
        var t = [].slice.call(document.getElementsByTagName("video")),
            i = [].slice.call(document.getElementsByTagName("audio"));
        t.forEach(function(t) {
            e && t.uwplaying ? (t.pause(), t.play = function() {}) : e || t.uwplaying || (t.play = HTMLVideoElement.prototype.play, t.play())
        }), i.forEach(function(t) {
            e && t.uwplaying && t.pause(), !e && !t.uwplaying && t.play()
        })
    }

    function c(e) {
        for (var t = document.querySelectorAll("iframe"), i = 0; i < t.length; i++) {
            var a = t[i];
            if (a.hasAttribute("src")) {
                var s = a.getAttribute("src");
                l(s) ? d(s) ? a.contentWindow.postMessage('{"event":"command","func":"' + e + 'Video","args":""}', "*") : p(s) && "pause" === e ? (N.push(s), a.setAttribute("src", k)) : -1 !== s.indexOf(k) && a.setAttribute("src", N.shift()) : y(s) && a.contentWindow.postMessage('{"method":"' + e + '"}', "*")
            }
        }
    }

    function l(e) {
        return e && (-1 !== e.indexOf("www.youtube.com") || -1 !== e.indexOf(k))
    }

    function y(e) {
        return e && -1 !== e.indexOf("vimeo.com")
    }

    function d(e) {
        return -1 !== e.indexOf("enablejsapi=1") || -1 !== e.indexOf("enablejsapi=true")
    }

    function p(e) {
        return -1 !== e.indexOf("autoplay=1") || -1 !== e.indexOf("autoplay=true")
    }

    function w() {
        if (m()) try {
            for (var e = document.querySelectorAll("body, body *"), t = 0; t < e.length; t++) {
                var i = e[t];
                jQuery(i).is(":animated") && jQuery(i).stop()
            }
            jQuery.fx.off = !0
        } catch (e) {}
    }

    function _() {
        if (m()) try {
            jQuery.fx.off = !1
        } catch (e) {}
    }

    function m() {
        return "undefined" != typeof jQuery
    }

    function g() {
        document.body.classList.add(A)
    }

    function f() {
        document.body.classList.remove(A)
    }

    function b() {
        I(), C || W().then(function(e) {
            B()
        })
    }

    function h() {
        D(), R()
    }
    var v = t("../components/util"),
        x = {},
        E = "userway-s13",
        L = "pause",
        T = "play",
        N = [],
        k = "https://example.com",
        A = "userway-s13_offtransition",
        S = "uw:stop-animation-play-gif",
        M = !1,
        O = void 0;
    x.init = a, x.enable = s, x.disable = r;
    var C = !1,
        I = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                t = /url\(\s*?['"]?\s*?(\S+?)\s*?["']?\s*?\)/i,
                i = /^img$/i;
            [].slice.call(e.querySelectorAll("*")).forEach(function(e) {
                var a = window.getComputedStyle(e, null).getPropertyValue("background-image"),
                    s = t.exec(a);
                s && j(s[1]) ? P(e, s[1]) : i.test(e.tagName) && j(e.src) && (C ? (e.parentNode.style.cursor = "auto", e.parentNode.style.pointerEvents = "none", e.parentNode.click()) : e.dataset.gifffer = e.src)
            })
        },
        D = function() {
            [].slice.call(document.querySelectorAll("[data-canvas]")).forEach(function(e) {
                var t = e.parentNode,
                    i = e.dataset.canvas;
                t.style.backgroundImage = "url('')";
                var a = new Image;
                a.src = i, a.onload = function() {
                    t.style.backgroundImage = "url(" + i + ")", t.removeChild(e)
                }
            })
        },
        P = function(e, t) {
            var i = document.createElement("canvas");
            i.dataset.canvas = t, i.style.width = "100%", i.style.height = "100%";
            var a = i.getContext("2d"),
                s = new Image;
            s.src = t, s.onload = function() {
                i.width = e.offsetWidth, i.height = e.offsetHeight, a.drawImage(s, 0, 0, s.width, s.height), e.appendChild(i)
            }
        },
        R = function() {
            U(!0)
        },
        j = function(e) {
            return "gif" === e.slice(-3)
        },
        W = function() {
            return new Promise(function(e, t) {
                v.loadDeferredJs("https://cdn.userway.org/widgetapp/bundles/uw-gifffer-01.js", function() {
                    e()
                }, function(e) {
                    t()
                })
            })
        },
        B = function() {
            Gifffer({
                playButtonStyles: {
                    width: "60px",
                    height: "60px",
                    "border-radius": "30px",
                    background: "rgba(0, 0, 0, 0.3)",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    margin: "-30px 0 0 -30px",
                    opacity: "0"
                },
                playButtonIconStyles: {
                    width: "0",
                    height: "0",
                    "border-top": "14px solid transparent",
                    "border-bottom": "14px solid transparent",
                    "border-left": "14px solid rgba(0, 0, 0, 0.5)",
                    position: "absolute",
                    left: "26px",
                    top: "16px"
                }
            }), setTimeout(function() {
                U()
            }, 500), C = !0
        },
        U = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            [].slice.call(document.querySelectorAll(".gifffer-play-button")).forEach(function(t) {
                t.parentNode.style.cursor = "auto", t.parentNode.style.pointerEvents = "none", e && t.parentNode.dispatchEvent(O)
            })
        };
    i.exports = x
}), UserWayWidgetApp.require.register("features/tooltips.js", function(e, t, i) {
    function a(e, t, i) {
        var a = "ie" === E.browser ? window.pageYOffset || document.documentElement.scrollTop : window.scrollY,
            s = "ie" === E.browser ? window.pageXOffset || document.documentElement.scrollLeft : window.scrollX,
            r = window.innerWidth,
            n = (window.innerHeight, r + s),
            o = document.querySelector(h);
        if (o) {
            o.innerHTML = e;
            var u = "font-family:Metropolis;transition:all 0.1s ease-in-out;white-space: normal;",
                c = void 0,
                l = o.offsetWidth + 40;
            o.offsetHeight;
            3 * l > n && (l = Math.ceil(r / 3), u += "width:" + l + "px;"), c = u, t + l + 50 > r ? (u += "right:" + (n - t + 10) + "px;", c += "right:" + (n - t + 15) + "px;") : (u += "left:" + (s + t + 15) + "px;", c += "left:" + (s + t + 20) + "px;"), u += "top:" + (a + i + 10) + "px;", c += "top:" + (a + i + 2) + "px;", L.before = u, L.after = c, o.setAttribute("style", u), setTimeout(function() {
                o.classList.add("visible"), o.setAttribute("style", c)
            }, 0)
        }
    }

    function s() {
        var e = document.querySelector(h);
        e && (e.setAttribute("style", L.before), setTimeout(function() {
            e.style.transition = "none;", e.classList.remove("visible"), e.setAttribute("style", ""), e.innerHTML = ""
        }, 100))
    }

    function r(e) {
        if (e.classList.contains("userway-spacer")) return _.getUserWayIconElementTitle(E);
        var t = "",
            i = e.getAttribute("aria-label");
        if (i) t = i;
        else if ("IMG" === e.tagName) {
            e.alt && (t = e.alt.trim());
            var a = u(e);
            a && t && (t += " - " + a.trim())
        }
        return t
    }

    function n(e) {
        return e.nodeType === Node.TEXT_NODE
    }

    function o(e) {
        return e.nodeType === Node.COMMENT_NODE
    }

    function u(e) {
        for (var t = e.parentNode; t;)
            if (!n(t) && !o(t)) {
                var i = "function" == typeof t.getAttribute ? t.getAttribute("role") : null;
                if (("A" === t.tagName || "link" === i) && t.getAttribute("aria-label")) return t.getAttribute("aria-label");
                t = t.parentNode
            }
        return ""
    }

    function c() {
        v = window.setTimeout(y, f)
    }

    function l(e) {
        var t = e.target || e.srcElement,
            i = x ? x.target || x.srcElement : null;
        t && t.classList.contains(b) || i && t && i === t || (window.clearTimeout(v), d(e))
    }

    function y() {
        if (x) {
            var e = x.target || x.srcElement,
                t = x.clientX,
                i = x.clientY;
            if (e) {
                var s = r(e);
                s && a(s, t, i)
            }
        }
    }

    function d(e) {
        x = e, s(), c()
    }

    function p() {
        window.addEventListener("mousemove", l, !1), window.addEventListener("MSPointerMove", l, !1), c()
    }

    function w() {
        window.removeEventListener("mousemove", l), window.removeEventListener("MSPointerMove", l)
    }
    var _ = t("../components/util"),
        m = {},
        g = "userway-s12",
        f = 200,
        b = "uw-s12-tooltip",
        h = "." + b,
        v = void 0,
        x = void 0,
        E = void 0;
    m.init = function(e) {
        E = e
    }, m.enable = function() {
        document.getElementsByTagName("html")[0].classList.add(g), _.addUwStylesheetMetropolisFont(E), document.querySelector("div.userway").setAttribute("title", ""), v = null, x = null, p()
    }, m.disable = function() {
        document.getElementsByTagName("html")[0].classList.remove(g), document.querySelector("div.userway").setAttribute("title", _.getUserWayIconElementTitle(E)), v = null, x = null, w()
    }, m.hideActiveTooltip = function() {
        var e = document.querySelector(h);
        e && (e.style.transition = "none;", e.classList.remove("visible"), e.setAttribute("style", ""), e.innerHTML = "")
    };
    var L = {
        before: null
    };
    i.exports = m
}), UserWayWidgetApp.require.register("features/uw_color_manipulation_service.js", function(e, t, i) {
    function a(e) {
        return e.children || []
    }

    function s(e) {
        return e.getElementsByTagName("*")
    }

    function r(e) {
        return e.classList && "fixed" === window.getComputedStyle(e, null).getPropertyValue("position")
    }

    function n(e, t) {
        e && e.classList && e.classList.add(t)
    }

    function o(e, t) {
        for (var i = !1, a = 0; a < e.length; a++) {
            var s = e[a];
            if (r(s)) {
                n(s, t), i = !0;
                break
            }
        }
        return i
    }

    function u(e) {
        var t = window.getComputedStyle(e, null);
        if (t) {
            var i = t.getPropertyValue("background-color");
            if (i && i.indexOf("rgb") >= -1) {
                var a = i.replace(/^rgba?\(/, "").replace(")", "").split(", ");
                if (a && a.length > 2) {
                    .2126 * parseInt(a[0]) + .7152 * parseInt(a[1]) + .0722 * parseInt(a[2]) > 100 ? e.classList.add("userway-s3-4-black") : e.classList.add("userway-s3-4-light")
                }
            }
        }
    }

    function c(e) {
        var t = document.getElementById(g);
        t ? t.innerHTML = t.innerHTML + " " + e : (t = document.createElement("style"), t.id = g, t.type = "text/css", t.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(t))
    }

    function l(e) {
        for (var t = 0; t < e.length; t++) e[t] = (3 === t ? 1 : 255) - parseInt(e[t]);
        return e
    }

    function y(e) {
        var t = window.getComputedStyle(e, null);
        if (t) {
            var i = t.getPropertyValue("background-color"),
                a = t.getPropertyValue("color");
            if (i && i.indexOf("rgb") >= -1) {
                var s = i.replace(/^rgba?\(/, "").replace(")", "").split(", ");
                if (s && s.length > 2) {
                    s = l(s);
                    var r = ("userway-s3-1-bg-" + s.join("-")).replace(/(\.)/g, "-");
                    c("." + r + "{background-color:" + (3 === s.length ? "rgb(" : "rgba(") + s.join(",") + ")!important;}"), e.classList.add(r)
                }
            }
            if (a && a.indexOf("rgb") >= -1) {
                var n = a.replace(/^rgba?\(/, "").replace(")", "").split(", ");
                if (n && n.length > 2) {
                    n = l(n);
                    var o = ("userway-s3-1-cl-" + n.join("-")).replace(/(\.)/g, "-");
                    c("." + o + "{color:" + (3 === n.length ? "rgb(" : "rgba(") + n.join(",") + ")!important;}"), e.classList.add(o)
                }
            }
        }
    }

    function d(e) {
        var t = document.querySelectorAll(".userway-s3-1, .userway-s3-2, .userway-s3-3, .userway-s3-4, .userway-s3-4-black, .userway-s3-4-light, .userway-s3-1-ff");
        [].forEach.call(t, function(e) {
            e.classList.remove("userway-s3-1"), e.classList.remove("userway-s3-2"), e.classList.remove("userway-s3-3"), e.classList.remove("userway-s3-4"), e.classList.remove("userway-s3-4-black"), e.classList.remove("userway-s3-4-light"), e.classList.remove("userway-s3-1-ff")
        });
        var i = document.getElementById(g);
        i && i.parentNode.removeChild(i)
    }

    function p(e, t) {
        for (var i = 0; i < e.length; i++) {
            var c = e[i];
            c.tagName && m.indexOf(c.tagName) > -1 || (r(c) ? n(c, t) : o(s(c), t) ? ("userway-s3-4-ff" === t ? u(c) : "userway-s3-1-ff" === t && y(c), p(a(c), t)) : n(c, t))
        }
    }

    function w(e) {
        n(document.getElementsByTagName("html")[0], e)
    }

    function _(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }
    var m = ["HEAD", "SCRIPT", "NOSCRIPT", "STYLE"],
        g = "uw_color_manipulation_styles",
        f = {};
    f.init = function() {}, f.turnOnColorFeature = function(e, t) {
        var i = t.settings[e].value,
            s = e;
        _(i) && (s = s + "-" + i), (-1 === ["ie", "edge"].indexOf(t.browser) || 1 !== i && 4 !== i) && (-1 !== ["firefox", "edge"].indexOf(t.browser) ? (1 === i && (s += "-ff", y(document.querySelector("html")), y(document.querySelector("body"))), p(a(document.body), s)) : w(s))
    }, f.turnOffColorFeature = function(e) {
        d(e)
    }, i.exports = f
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function() {
    ! function() {
        UserWayWidgetApp.require("main").init()
    }()
}(), "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = {} : "function" == typeof define && define.amd && define("uw_widget_components/widget_app", [], {});