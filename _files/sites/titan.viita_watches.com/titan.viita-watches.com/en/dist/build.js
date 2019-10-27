! function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    var n = {};
    e.m = t, e.c = n, e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "/dist/", e(e.s = 12)
}([function(t, e) {
    function n(t, e) {
        var n = t[1] || "",
            i = t[3];
        if (!i) return n;
        if (e && "function" == typeof btoa) {
            var a = r(i);
            return [n].concat(i.sources.map(function(t) {
                return "/*# sourceURL=" + i.sourceRoot + t + " */"
            })).concat([a]).join("\n")
        }
        return [n].join("\n")
    }

    function r(t) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
    }
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map(function(e) {
                var r = n(e, t);
                return e[2] ? "@media " + e[2] + "{" + r + "}" : r
            }).join("")
        }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var a = this[i][0];
                "number" == typeof a && (r[a] = !0)
            }
            for (i = 0; i < t.length; i++) {
                var o = t[i];
                "number" == typeof o[0] && r[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o))
            }
        }, e
    }
}, function(t, e, n) {
    function r(t) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e],
                r = u[n.id];
            if (r) {
                r.refs++;
                for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]);
                for (; i < n.parts.length; i++) r.parts.push(a(n.parts[i]));
                r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
            } else {
                for (var o = [], i = 0; i < n.parts.length; i++) o.push(a(n.parts[i]));
                u[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: o
                }
            }
        }
    }

    function i() {
        var t = document.createElement("style");
        return t.type = "text/css", f.appendChild(t), t
    }

    function a(t) {
        var e, n, r = document.querySelector("style[" + g + '~="' + t.id + '"]');
        if (r) {
            if (h) return m;
            r.parentNode.removeChild(r)
        }
        if (w) {
            var a = p++;
            r = d || (d = i()), e = o.bind(null, r, a, !1), n = o.bind(null, r, a, !0)
        } else r = i(), e = s.bind(null, r), n = function() {
            r.parentNode.removeChild(r)
        };
        return e(t),
            function(r) {
                if (r) {
                    if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap) return;
                    e(t = r)
                } else n()
            }
    }

    function o(t, e, n, r) {
        var i = n ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = x(e, i);
        else {
            var a = document.createTextNode(i),
                o = t.childNodes;
            o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(a, o[e]) : t.appendChild(a)
        }
    }

    function s(t, e) {
        var n = e.css,
            r = e.media,
            i = e.sourceMap;
        if (r && t.setAttribute("media", r), v.ssrId && t.setAttribute(g, e.id), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;
        else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n))
        }
    }
    var c = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !c) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var l = n(20),
        u = {},
        f = c && (document.head || document.getElementsByTagName("head")[0]),
        d = null,
        p = 0,
        h = !1,
        m = function() {},
        v = null,
        g = "data-vue-ssr-id",
        w = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    t.exports = function(t, e, n, i) {
        h = n, v = i || {};
        var a = l(t, e);
        return r(a),
            function(e) {
                for (var n = [], i = 0; i < a.length; i++) {
                    var o = a[i],
                        s = u[o.id];
                    s.refs--, n.push(s)
                }
                e ? (a = l(t, e), r(a)) : a = [];
                for (var i = 0; i < n.length; i++) {
                    var s = n[i];
                    if (0 === s.refs) {
                        for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                        delete u[s.id]
                    }
                }
            }
    };
    var x = function() {
        var t = [];
        return function(e, n) {
            return t[e] = n, t.filter(Boolean).join("\n")
        }
    }()
}, function(t, e) {
    t.exports = function(t, e, n, r, i, a) {
        var o, s = t = t || {},
            c = typeof t.default;
        "object" !== c && "function" !== c || (o = t, s = t.default);
        var l = "function" == typeof s ? s.options : s;
        e && (l.render = e.render, l.staticRenderFns = e.staticRenderFns, l._compiled = !0), n && (l.functional = !0), i && (l._scopeId = i);
        var u;
        if (a ? (u = function(t) {
                t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a)
            }, l._ssrRegister = u) : r && (u = r), u) {
            var f = l.functional,
                d = f ? l.render : l.beforeCreate;
            f ? (l._injectStyles = u, l.render = function(t, e) {
                return u.call(e), d(t, e)
            }) : l.beforeCreate = d ? [].concat(d, u) : [u]
        }
        return {
            esModule: o,
            exports: s,
            options: l
        }
    }
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var r = n(21),
        i = n(25),
        a = n(29),
        o = n(33),
        s = n(37),
        c = n(41),
        l = n(45);
    e.a = {
        components: {
            "background-component": r.a,
            "home-component": i.a,
            "intro-component": a.a,
            "feature-component": o.a,
            "bullet-component": s.a,
            "interface-component": c.a,
            "footer-component": l.a
        },
        data: function() {
            return {
                bullets: [{
                    id: 1,
                    active: !1,
                    featureName: "TITAN HOUSING"
                }, {
                    id: 2,
                    active: !1,
                    featureName: "CERAMIC BEZEL"
                }, {
                    id: 3,
                    active: !1,
                    featureName: "SAPPHIRE GLASS"
                }, {
                    id: 4,
                    active: !1,
                    featureName: "WATERPROOF"
                }, {
                    id: 5,
                    active: !1,
                    featureName: "BUILT-IN GPS"
                }, {
                    id: 6,
                    active: !1,
                    featureName: "MACHINE LEARNING"
                }, {
                    id: 7,
                    active: !1,
                    featureName: "MORE FEATURES"
                }],
                features: [{
                    id: 1,
                    active: !1,
                    featureName: "TITAN HOUSING",
                    featureNameFirst: "TITAN",
                    featureNameSecond: "HOUSING",
                    featureDetail: "Titanium is the material from which real luxury watches are manufactured. Anti allergen and therefore suitable for every skin type. 42% lighter and dramatically harder than stainless steel.",
                    featureWatch: "/src/assets/viita_titan_housing2.png",
                    featureBgPic: "/src/assets/feature_bg_housing_tiny.jpg"
                }, {
                    id: 2,
                    active: !1,
                    featureName: "CERAMIC BEZEL",
                    featureNameFirst: "CERAMIC",
                    featureNameSecond: "BEZEL",
                    featureDetail: "Manufactured under high pressure, the ceramic bezel combines all the features you would want for a high-quality luxury watch: aesthetics, lightness and scratch resistance.",
                    featureWatch: "/src/assets/viita_titan_ceramicbezel.png",
                    featureBgPic: "/src/assets/feature_bg_bezel_tiny.jpg"
                }, {
                    id: 3,
                    active: !1,
                    featureName: "SAPPHIRE GLASS",
                    featureNameFirst: "SAPPHIRE",
                    featureNameSecond: "GLASS",
                    featureDetail: "At the watch glass, the wheat separates from the chaff. Genuine, scratch resistant and almost indestructible sapphire crystal adorns the high resolution display against environmental influences.",
                    featureWatch: "/src/assets/viita_titan_saphirglas.png",
                    featureBgPic: "/src/assets/feature_bg_saphire_tiny.jpg"
                }, {
                    id: 4,
                    active: !1,
                    featureName: "10 ATM WATERPROOF",
                    featureNameFirst: "WATER",
                    featureNameSecond: "PROOF",
                    featureDetail: "Not 3 ATM, not even 5 ATM. The VIITA TITAN HRV is waterproof up to 10 ATM. So, you can swim, snorkel and take a shower without worrying about your watch.",
                    featureWatch: "/src/assets/viita_titan_waterproof.png",
                    featureBgPic: "/src/assets/feature_bg_waterproof2_tiny.jpg"
                }, {
                    id: 5,
                    active: !1,
                    featureName: "BUILT-IN GPS",
                    featureNameFirst: "BUILT-IN",
                    featureNameSecond: "GPS",
                    featureDetail: "Leave your smartphone at home. In training mode, our built-in GPS records all movements and visualizes them on your VIITA.",
                    featureWatch: "/src/assets/viita_titan_gps.png",
                    featureBgPic: "/src/assets/feature_bg_gps_tiny.jpg"
                }, {
                    id: 6,
                    active: !1,
                    featureName: "MACHINE LEARNING",
                    featureNameFirst: "MACHINE",
                    featureNameSecond: "LEARNING",
                    featureDetail: "Your VIITA TITAN HRV analyzes your heart rate variability 24/7 and uses machine learning to calculate your individual training recommendation in real time.",
                    featureWatch: "/src/assets/viita_titan_algorithm.png",
                    featureBgPic: "/src/assets/feature_bg_algo_tiny.jpg"
                }, {
                    id: 7,
                    active: !1,
                    featureName: "MORE FEATURES",
                    featureNameFirst: "MORE",
                    featureNameSecond: "FEATURES",
                    featureDetail: "And features like regeneration & stress analysis, drink management, the ability to track over 19 different activities and, of course, smartphone notifications.",
                    featureWatch: "/src/assets/viita_titan_additional.png",
                    featureBgPic: "/src/assets/feature_bg_additional_tiny.jpg"
                }]
            }
        },
        methods: {
            changeActive: function(t) {
                this.features[t.id - 1].active = t.isActive, this.bullets[t.id - 1].active = t.isActive
            },
            getBulletNumber: function(t) {
                var e = document.getElementsByClassName("fake-feature"),
                    n = e[t.bulletNumber - 1],
                    r = $(n).offset().top,
                    i = r + 1.3 * $(window).height();
                TweenLite.to(window, 3, {
                    scrollTo: {
                        y: i,
                        autoKill: !1
                    },
                    ease: Power2.easeOut
                })
            },
            funcFooterBtn: function() {
                new TimelineMax({}).fromTo(".footer-btn-hover-bg", .3, {
                    width: 0
                }, {
                    width: "150px",
                    ease: Power2.easeInOut,
                    transformOrigin: "left"
                }, 0).to(".footer-buyWatch-txt", .3, {
                    color: "black",
                    ease: Power2.easeInOut
                }, 0)
            },
            funcFooterBtnOut: function() {
                new TimelineMax({}).to(".footer-btn-hover-bg", .3, {
                    width: 0,
                    ease: Power2.easeInOut
                }, 0).to(".footer-buyWatch-txt", .3, {
                    color: "white",
                    ease: Power2.easeInOut
                }, 0)
            }
        },
        mounted: function() {
            function t() {
                s = $(window).width();
                s < c ? location.reload(!0) : s > c ? location.reload(!0) : s = c
            }

            function e() {
                u = $(window).width();
                u < f ? location.reload(!0) : u > f ? location.reload(!0) : u = f
            }

            function n() {
                p = $(window).width();
                p < h ? location.reload(!0) : p > h ? location.reload(!0) : p = h
            }
            SmoothScroll({
                animationTime: 1e3,
                accelerationDelta: 12,
                accelerationMax: 3
            });
            var r = 0,
                i = 0,
                a = ($(window).width(), $(window).height(), $(".theBall")),
                o = $(".theBall-outer");
            a.height();
            $(window).on("mousemove", function(t) {
                r = t.pageX + o.width() / 2, i = t.pageY - $(window).scrollTop() + o.width() / 2
            });
            ! function t() {
                o.css("transform", "translate(" + r + "px," + i + "px)"), requestAnimationFrame(t)
            }(), $(".bigItUp").hover(function() {
                $(".theBall").addClass("huuuuuge")
            }, function() {
                $(".theBall").removeClass("huuuuuge")
            });
            var s = $(window).width(),
                c = 767,
                l = void 0;
            $(window).resize(function() {
                var e = $(window).width();
                clearTimeout(l), (s > c && e < c || s < c && e > c) && (l = setTimeout(t, 100))
            });
            var u = $(window).width(),
                f = 1023,
                d = void 0;
            $(window).resize(function() {
                var t = $(window).width();
                clearTimeout(d), (u > f && t < f || u < f && t > f) && (d = setTimeout(e, 100))
            });
            var p = $(window).width(),
                h = 1199,
                m = void 0;
            $(window).resize(function() {
                var t = $(window).width();
                clearTimeout(m), (p > h && t < h || p < h && t > h) && (m = setTimeout(n, 100))
            });
            var v = $(window).width(),
                g = 2259,
                w = void 0;
            $(window).resize(function() {
                var t = $(window).width();
                clearTimeout(w), (v > g && t < g || v < g && t > g) && (w = setTimeout(n, 100))
            })
        }
    }
}, function(t, e, n) {
    "use strict";
    e.a = {
        data: function() {
            return {
                title: "TITAN"
            }
        },
        mounted: function() {
            function t() {
                function t() {
                    requestAnimationFrame(t), l.x = 1600 * o, l.y = -1600 * o, o += 6e-4, s.render(c)
                }
                var e = PIXI.Sprite.fromImage("/src/assets/marble_bg_tiny.jpg");
                c.addChild(e);
                var l = PIXI.Sprite.fromImage("/src/assets/displ_map.jpg");
                l.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
                var u = new PIXI.filters.DisplacementFilter(l);
                c.addChild(l), e.filters = [u];
                var f = function() {
                    n = $(window).width(), r = $(window).height();
                    var t = n / i,
                        o = r / a,
                        c = t > o ? t : o,
                        l = c * i,
                        u = c * a;
                    e.width = 1.02 * l, e.height = 1.02 * u, e.x = (n - 1.02 * l) / 2, e.y = (r - 1.02 * u) / 2, s.view.style.width = l + "px", s.view.style.height = u + "px", s.resize(l, u)
                };
                f(), $(window).on("resize", function() {
                    f()
                }), t()
            }
            var e = document.getElementById("background-canvas"),
                n = $(window).width(),
                r = $(window).height(),
                i = 2e3,
                a = 2e3,
                o = (new PIXI.ticker.Ticker, 0),
                s = PIXI.autoDetectRenderer(n, r, {
                    view: e,
                    antialias: !0,
                    legacy: !0
                }),
                c = new PIXI.Container;
            s.backgroundColor = 0, s.autoResize = !0, PIXI.loader.add("/src/assets/marble_bg_tiny.jpg").load(t)
        }
    }
}, function(t, e, n) {
    "use strict";
    e.a = {
        data: function() {
            return {
                title: "TITAN"
            }
        },
        methods: {},
        mounted: function() {
            var t = ($(window).width(), new ScrollMagic.Controller);
            new SplitText(".home-titan-center", {
                type: "chars",
                wordsClass: "word word++",
                charsClass: "char-titan char-titan++",
                linesClass: "line line++"
            }), new SplitText(".home-hrv", {
                type: "chars",
                wordsClass: "word word++",
                charsClass: "char char++",
                linesClass: "line line++"
            });
            $(".char-titan1").wrap("<div class='char-inner-titan1'></div>"), $(".char-titan2").wrap("<div class='char-inner-titan2'></div>"), $(".char-titan3").wrap("<div class='char-inner-titan3'></div>"), $(".char-titan4").wrap("<div class='char-inner-titan4'></div>"), $(".char-titan5").wrap("<div class='char-inner-titan5'></div>");
            ! function() {
                new TimelineMax({}).fromTo(".background-fallback", .8, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: Power0.easeNone
                }, .2).fromTo("#background-canvas", .8, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: Power0.easeNone
                }, .4).fromTo(".char-inner-titan1", .8, {
                    rotationY: 70,
                    rotationX: 10,
                    rotationZ: -6,
                    x: "-160px",
                    y: "10px",
                    ease: Power3.easeInOut
                }, {
                    rotationY: 0,
                    rotationX: 0,
                    rotationZ: 0,
                    x: 0,
                    y: 0
                }, 1.6).fromTo(".char-inner-titan2", .8, {
                    rotationY: 40,
                    rotationX: 7,
                    rotationZ: -3,
                    x: "-80px",
                    y: "50px",
                    ease: Power3.easeInOut
                }, {
                    rotationY: 0,
                    rotationX: 0,
                    rotationZ: 0,
                    x: 0,
                    y: 0
                }, 1.6).fromTo(".char-inner-titan3", .8, {
                    rotationY: 10,
                    rotationX: 4,
                    rotationZ: -1,
                    x: "-15px",
                    y: "30px",
                    ease: Power3.easeInOut
                }, {
                    rotationY: 0,
                    rotationX: 0,
                    rotationZ: 0,
                    x: 0,
                    y: 0
                }, 1.6).fromTo(".char-inner-titan4", .8, {
                    rotationY: -40,
                    rotationX: 7,
                    rotationZ: 3,
                    x: "60px",
                    y: "-5px",
                    ease: Power3.easeInOut
                }, {
                    rotationY: 0,
                    rotationX: 0,
                    rotationZ: 0,
                    x: 0,
                    y: 0
                }, 1.6).fromTo(".char-inner-titan5", .8, {
                    rotationY: -70,
                    rotationX: 10,
                    rotationZ: 6,
                    x: "130px",
                    y: "40px",
                    ease: Power3.easeInOut
                }, {
                    rotationY: 0,
                    rotationX: 0,
                    rotationZ: 0,
                    x: 0,
                    y: 0
                }, 1.6).fromTo($(".home-titan-center"), .6, {
                    opacity: 0
                }, {
                    opacity: 1
                }, 1.6).staggerFromTo($(".home-hrv").find("div.char"), .8, {
                    rotationY: 90,
                    rotationZ: -5
                }, {
                    rotationY: 0,
                    rotationZ: 0,
                    ease: Power2.easeOut
                }, .1, 2.4).fromTo(".home-hrv-line", .8, {
                    scaleX: 0
                }, {
                    scaleX: 1,
                    ease: Power2.easeOut,
                    transformOrigin: "left center"
                }, 2.5).fromTo(".home-viita-logo-vertical", .8, {
                    y: 50,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    ease: Power2.easeOut
                }, 2.2).fromTo(".home-blackbox-top", 2, {
                    scaleY: 0
                }, {
                    scaleY: 1,
                    ease: Power4.easeInOut,
                    transformOrigin: "top center"
                }, .5).fromTo(".home-blackbox-right", 2, {
                    scaleX: 0
                }, {
                    scaleX: 1,
                    ease: Power4.easeInOut,
                    transformOrigin: "right center"
                }, .5).fromTo(".home-blackbox-bottom", 2, {
                    scaleY: 0
                }, {
                    scaleY: 1,
                    ease: Power4.easeInOut,
                    transformOrigin: "bottom center"
                }, .5).fromTo(".home-blackbox-left", 2, {
                    scaleX: 0
                }, {
                    scaleX: 1,
                    ease: Power4.easeInOut,
                    transformOrigin: "left center"
                }, .5).fromTo(".background-fallback", 2, {
                    scale: 1.2
                }, {
                    scale: 1,
                    ease: Power4.easeInOut
                }, .5)
            }();
            ! function() {
                var e = new TimelineMax({});
                e.fromTo(".home-blackbox-top-outer", 2, {
                    scaleY: 1
                }, {
                    scaleY: 0,
                    ease: Power2.easeInOut,
                    transformOrigin: "top center"
                }, 0).fromTo(".home-blackbox-right-outer", 2, {
                    scaleX: 1
                }, {
                    scaleX: 0,
                    ease: Power2.easeInOut,
                    transformOrigin: "right center"
                }, 0).fromTo(".home-blackbox-bottom-outer", 2, {
                    scaleY: 1
                }, {
                    scaleY: 0,
                    ease: Power2.easeInOut,
                    transformOrigin: "bottom center"
                }, 0).fromTo(".home-blackbox-left-outer", 2, {
                    scaleX: 1
                }, {
                    scaleX: 0,
                    ease: Power2.easeInOut,
                    transformOrigin: "left center"
                }, 0).fromTo(".background-fallback", 2, {
                    scale: 1
                }, {
                    scale: 1.3,
                    ease: Power2.easeInOut
                }, 0);
                new ScrollMagic.Scene({
                    triggerElement: "#home",
                    triggerHook: 0,
                    duration: "90%"
                }).setTween(e).addTo(t)
            }();
            var e = new TimelineMax({});
            e.fromTo(".char-titan1", 2, {
                x: 0,
                y: 0
            }, {
                x: "-160%",
                y: "10%",
                ease: Power1.easeInOut
            }, 0).fromTo(".char-titan2", 2, {
                x: 0,
                y: 0
            }, {
                x: "-80%",
                y: "50%",
                ease: Power1.easeInOut
            }, 0).fromTo(".char-titan3", 2, {
                x: 0,
                y: 0
            }, {
                x: "-15%",
                y: "30%",
                ease: Power1.easeInOut
            }, 0).fromTo(".char-titan4", 2, {
                x: 0,
                y: 0
            }, {
                x: "60%",
                y: "-5%",
                ease: Power1.easeInOut
            }, 0).fromTo(".char-titan5", 2, {
                x: 0,
                y: 0
            }, {
                x: "130%",
                y: "40%",
                ease: Power1.easeInOut
            }, 0).fromTo(".home-viita-logo-vertical-outer", .3, {
                opacity: 1,
                x: 0
            }, {
                opacity: 0,
                x: "-6%",
                ease: Power1.easeInOut
            }, 0).fromTo(".home-hrv-outer", .3, {
                opacity: 1,
                x: 0
            }, {
                opacity: 0,
                x: "20%",
                ease: Power1.easeInOut
            }, 0).fromTo(".home-titan-center", 2, {
                y: 0
            }, {
                y: "20%",
                ease: Power1.easeInOut
            }, 0);
            new ScrollMagic.Scene({
                triggerElement: "#home",
                triggerHook: 0,
                duration: "120%"
            }).setTween(e).addTo(t)
        }
    }
}, function(t, e, n) {
    "use strict";
    e.a = {
        data: function() {
            return {
                headline12: "NATURE'S STRONGEST",
                headline34: "CRAFTED INTO A SMARTWATCH"
            }
        },
        computed: {
            tlWatch: function() {}
        },
        mounted: function() {
            var t = new ScrollMagic.Controller,
                e = $(window).width(),
                n = new TimelineMax({});
            n.fromTo(".navigation", .1, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Power0.easeNone
            }, 0);
            var r = (new ScrollMagic.Scene({
                triggerElement: ".fake1",
                triggerHook: 1
            }).setTween(n).addTo(t), $(".intro-headline-outer").height());
            e >= 768 && function() {
                var e = new TimelineMax({});
                e.to(".intro-fixed-watch-container", .1, {
                    visibility: "visible"
                }).fromTo(".intro-watch", .4, {
                    autoAlpha: 0,
                    y: 20,
                    x: 0
                }, {
                    autoAlpha: 1,
                    y: 0,
                    x: 0,
                    ease: Power1.easeInOut
                }, 0).to(".intro-watch", .4, {
                    autoAlpha: 0,
                    y: 0,
                    x: -50,
                    ease: Power1.easeInOut
                }, 1).fromTo(".intro-watch2", .4, {
                    autoAlpha: 0,
                    y: 0,
                    x: 50
                }, {
                    autoAlpha: 1,
                    y: 0,
                    x: 0,
                    ease: Power1.easeInOut
                }, 1).to(".intro-watch2", .4, {
                    autoAlpha: 0,
                    y: 0,
                    x: -50,
                    ease: Power1.easeInOut
                }, 2).fromTo(".intro-watch3", .4, {
                    autoAlpha: 0,
                    y: 0,
                    x: 50
                }, {
                    autoAlpha: 1,
                    y: 0,
                    x: 0,
                    ease: Power1.easeInOut
                }, 2).to(".intro-watch3", .4, {
                    autoAlpha: 0,
                    y: 20,
                    ease: Power1.easeInOut
                }, 3).fromTo(".intro-twister", 3.4, {
                    rotationX: 0,
                    rotationY: -8,
                    rotationZ: -5
                }, {
                    rotationX: 10,
                    rotationY: 8,
                    rotationZ: 5,
                    ease: Power0.easeInOut
                }, .2).to(".intro-fixed-watch-container", .1, {
                    visibility: "hidden"
                });
                var n = function() {
                    new ScrollMagic.Scene({
                        triggerElement: "#intro",
                        triggerHook: .3,
                        duration: r + 700
                    }).setTween(e).addTo(t)
                };
                n(), $(window).on("resize", function() {
                    r = $(".intro-headline-outer").height(), n()
                })
            }();
            e >= 768 && function() {
                var e = new TimelineMax({});
                e.fromTo(".intro-bg-pic-container1", 2, {
                    y: "30%"
                }, {
                    y: "-30%",
                    ease: Power1.easeInOut
                }, 0).fromTo($(".intro-bg-pic-container1").find(".intro-bg-pic"), 2, {
                    scale: 1
                }, {
                    scale: 1.6,
                    ease: Power1.easeInOut,
                    force3D: !1
                }, 0);
                var n = (new ScrollMagic.Scene({
                    triggerElement: "#intro",
                    triggerHook: 1,
                    duration: "200%"
                }).setTween(e).addTo(t), new TimelineMax({}));
                n.fromTo(".intro-bg-pic-container2", 2, {
                    y: "60%"
                }, {
                    y: "-60%",
                    ease: Power1.easeInOut
                }, 0).fromTo($(".intro-bg-pic-container2").find(".intro-bg-pic"), 2, {
                    scale: 1
                }, {
                    scale: 1.6,
                    ease: Power1.easeInOut,
                    force3D: !1
                }, 0);
                var r = (new ScrollMagic.Scene({
                    triggerElement: "#intro",
                    triggerHook: 0,
                    duration: "200%"
                }).setTween(n).addTo(t), new TimelineMax({}));
                r.fromTo(".intro-bg-pic-container3", 2, {
                    y: "40%"
                }, {
                    y: "-40%",
                    ease: Power1.easeInOut
                }, 0).fromTo($(".intro-bg-pic-container3").find(".intro-bg-pic"), 2, {
                    scale: 1
                }, {
                    scale: 2,
                    ease: Power1.easeInOut,
                    transformOrigin: "center 60%",
                    force3D: !1
                }, 0);
                var i = (new ScrollMagic.Scene({
                    triggerElement: "#intro",
                    triggerHook: 0,
                    duration: "270%"
                }).setTween(r).addTo(t), new TimelineMax({}));
                i.fromTo(".intro-bg-pic-container4", 2, {
                    y: "100%"
                }, {
                    y: "-100%",
                    ease: Power1.easeInOut
                }, 0).fromTo($(".intro-bg-pic-container4").find(".intro-bg-pic"), 2, {
                    scale: 1
                }, {
                    scale: 1.4,
                    ease: Power1.easeInOut,
                    transformOrigin: "center 80%",
                    force3D: !1
                }, 0);
                new ScrollMagic.Scene({
                    triggerElement: "#intro",
                    triggerHook: 0,
                    duration: "200%"
                }).setTween(i).addTo(t)
            }()
        }
    }
}, function(t, e, n) {
    "use strict";
    e.a = {
        props: ["feature"],
        data: function() {
            return {}
        },
        computed: {},
        methods: {
            funcFeatureIsActive: function() {
                var t = $(".fake" + this.feature.id).offset().top,
                    e = t + $(".fake" + this.feature.id).outerHeight(),
                    n = $(window).scrollTop(),
                    r = n + $(window).height() / 2;
                return t < r && e > r
            }
        },
        mounted: function() {
            var t = this;
            $(window).on("resize scroll", function() {
                t.$emit("changeActive", {
                    id: t.feature.id,
                    isActive: t.funcFeatureIsActive()
                })
            });
            var e = void 0,
                n = 0,
                r = 0,
                i = 0,
                a = void 0,
                o = void 0;
            setTimeout(function() {
                new SplitText($(t.$el).find(".feature-detail"), {
                    type: "lines",
                    wordsClass: "word word++",
                    charsClass: "char char++",
                    linesClass: "line line++"
                })
            }, 700);
            var s = function() {
                ! function() {
                    n = $(t.$el).find(".feature-big-text").width(), r = $(window).width(), i = n - r + 300
                }(), e = new ScrollMagic.Controller, o = new TimelineMax({}), o.fromTo(t.$el, .1, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: Power0.easeNone
                }, 0).fromTo($(t.$el).find(".feature-big-text-container"), .5, {
                    opacity: 0,
                    y: 30
                }, {
                    opacity: 1,
                    y: 0
                }, 0).fromTo($(t.$el).find(".feature-big-text"), 3.8, {
                    x: 0
                }, {
                    x: -i,
                    ease: Power1.easeInOut
                }, .3).to($(t.$el).find(".feature-big-text-container"), .6, {
                    opacity: .12
                }, 1.3).to($(t.$el).find(".feature-big-text-container"), .2, {
                    opacity: 0
                }, 3.8).fromTo($(t.$el).find(".feature-watch"), .5, {
                    y: 20
                }, {
                    y: 0,
                    ease: Power3.easeInOut
                }, 1.3).fromTo($(t.$el).find(".feature-twister"), 3, {
                    x: 50,
                    rotationX: 0,
                    rotationY: -8,
                    rotationZ: -4
                }, {
                    x: -50,
                    rotationX: 15,
                    rotationY: 8,
                    rotationZ: 4,
                    ease: Power0.easeInOut
                }, 1).to($(t.$el).find(".feature-watch"), .4, {
                    y: 20,
                    ease: Power3.easeInOut
                }, 3.5).fromTo($(t.$el).find(".feature-black-bg"), 1, {
                    scaleX: 0
                }, {
                    scaleX: 1,
                    transformOrigin: "right",
                    ease: Power2.easeInOut
                }, 1).fromTo($(t.$el).find(".feature-watch-mask"), 1, {
                    width: 0
                }, {
                    width: "100%",
                    transformOrigin: "right",
                    ease: Power2.easeInOut
                }, 1).fromTo($(t.$el).find(".feature-bg-pic-container"), 1, {
                    width: 0
                }, {
                    width: "50%",
                    ease: Power2.easeInOut,
                    transformOrigin: "right"
                }, 1.2).fromTo($(t.$el).find(".feature-bg-pic"), 2.8, {
                    scale: 1
                }, {
                    scale: 1.2,
                    ease: Power2.easeOut,
                    force3D: !1
                }, 1.2).to($(t.$el).find(".feature-black-bg"), .5, {
                    scaleX: 0,
                    transformOrigin: "right",
                    ease: Power2.easeInOut
                }, 3.5).to($(t.$el).find(".feature-watch-mask"), .5, {
                    width: 0,
                    transformOrigin: "right",
                    ease: Power2.easeInOut
                }, 3.5).to($(t.$el).find(".feature-bg-pic-container"), .8, {
                    width: 0,
                    ease: Power2.easeInOut,
                    transformOrigin: "right"
                }, 3.2).staggerFromTo($(t.$el).find(".feature-name"), .5, {
                    y: -150
                }, {
                    y: 0,
                    ease: Power2.easeInOut
                }, .2, 1.5).staggerFromTo($(t.$el).find(".feature-detail .line"), .5, {
                    opacity: 0,
                    y: 30
                }, {
                    opacity: 1,
                    y: 0,
                    ease: Power2.easeInOut
                }, .03, 1.5).staggerTo($(t.$el).find(".feature-name"), .5, {
                    y: -150,
                    ease: Power2.easeInOut
                }, -.2, 3.1).staggerTo($(t.$el).find(".feature-detail .line"), .5, {
                    opacity: 0,
                    y: 30,
                    ease: Power2.easeInOut
                }, -.03, 3.1), a = new ScrollMagic.Scene({
                    triggerElement: ".fake" + t.feature.id,
                    triggerHook: 1,
                    duration: "400%"
                }), a.setTween(o).addTo(e)
            };
            setTimeout(function() {
                s()
            }, 700), $(window).on("resize", function() {
                setTimeout(function() {
                    o.kill(), e.destroy(!0), e = null, s()
                }, 700)
            })
        }
    }
}, function(t, e, n) {
    "use strict";
    e.a = {
        props: ["bullet"],
        data: function() {
            return {}
        },
        computed: {},
        methods: {
            getBulletNumber: function() {
                this.$emit("getBulletNumber", {
                    bulletNumber: this.bullet.id
                })
            }
        },
        mounted: function() {}
    }
}, function(t, e, n) {
    "use strict";
    e.a = {
        data: function() {
            return {
                number: "47,867"
            }
        },
        methods: {
            funcInterfaceBtn: function() {
                new TimelineMax({}).fromTo(".interface-btn-hover-bg", .3, {
                    width: 0
                }, {
                    width: "100%",
                    ease: Power2.easeInOut,
                    transformOrigin: "left"
                }, 0).to(".interface-buyWatch-txt", .3, {
                    color: "black",
                    ease: Power2.easeInOut
                }, 0)
            },
            funcInterfaceBtnOut: function() {
                new TimelineMax({}).to(".interface-btn-hover-bg", .3, {
                    width: 0,
                    ease: Power2.easeInOut
                }, 0).to(".interface-buyWatch-txt", .3, {
                    color: "white",
                    ease: Power2.easeInOut
                }, 0)
            },
            goToHome: function() {
                TweenLite.to(window, 3, {
                    scrollTo: {
                        y: 0,
                        autoKill: !1
                    },
                    ease: Power2.easeOut
                })
            }
        },
        mounted: function() {}
    }
}, function(t, e, n) {
    "use strict";
    e.a = {
        props: ["bullet"],
        data: function() {
            return {}
        },
        computed: {},
        methods: {},
        mounted: function() {
            var t = this,
                e = new ScrollMagic.Controller,
                n = void 0,
                r = void 0,
                i = void 0,
                a = void 0;
            setTimeout(function() {
                new SplitText(".footer-megaText", {
                    type: "chars",
                    wordsClass: "word word++",
                    charsClass: "char charBuy++",
                    linesClass: "line line++"
                })
            }, 300);
            var o = $(window).width();
            r = TweenMax.set(".feature-fix-container", {
                visibility: "hidden"
            }), a = new ScrollMagic.Scene({
                triggerElement: this.$el,
                triggerHook: 1
            }), a.setTween(r).addTo(e);
            var s = function() {
                n = new TimelineMax({}), n.to(".footer-fixed-stuff", .1, {
                    display: "block"
                }).fromTo(".charBuy1", 1.5, {
                    scale: 1.5,
                    opacity: 0,
                    x: -o / 8,
                    rotationY: 70,
                    rotationX: 10,
                    rotationZ: -6
                }, {
                    scale: 1,
                    opacity: 1,
                    x: 0,
                    rotationY: 0,
                    rotationX: 0,
                    rotationZ: 0,
                    ease: Power3.easeInOut,
                    force3D: !1
                }, .3).fromTo(".charBuy2", 1.5, {
                    scale: 1.5,
                    opacity: 0,
                    x: 0,
                    rotationY: 0,
                    rotationX: -20,
                    rotationZ: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    x: 0,
                    rotationY: 0,
                    rotationX: 0,
                    rotationZ: 0,
                    ease: Power3.easeInOut,
                    force3D: !1
                }, .3).fromTo(".charBuy3", 1.5, {
                    scale: 1.5,
                    opacity: 0,
                    x: o / 8,
                    rotationY: -70,
                    rotationX: 10,
                    rotationZ: 6
                }, {
                    scale: 1,
                    opacity: 1,
                    x: 0,
                    rotationY: 0,
                    rotationX: 0,
                    rotationZ: 0,
                    ease: Power3.easeInOut,
                    force3D: !1
                }, .3).fromTo(".footer-watch", 1, {
                    opacity: 0,
                    y: 10
                }, {
                    opacity: 1,
                    y: 0,
                    ease: Power3.easeInOut
                }, .3).fromTo(".footer-twister", 1, {
                    x: 50,
                    rotationX: 15,
                    rotationY: 10,
                    rotationZ: 6
                }, {
                    x: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    ease: Power2.easeInOut
                }, .3).fromTo(".footer-buyWatch-btn-outer", .6, {
                    y: 30,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    ease: Power3.easeInOut
                }, .4), i = new ScrollMagic.Scene({
                    triggerElement: t.$el,
                    triggerHook: 1
                }), i.setTween(n).addTo(e)
            };
            setTimeout(function() {
                s()
            }, 300)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(13),
        i = n(17);
    new r.a({
        el: "#app",
        render: function(t) {
            return t(i.a)
        }
    })
}, function(t, e, n) {
    "use strict";
    (function(t, n) {
        function r(t) {
            return void 0 === t || null === t
        }

        function i(t) {
            return void 0 !== t && null !== t
        }

        function a(t) {
            return !0 === t
        }

        function o(t) {
            return !1 === t
        }

        function s(t) {
            return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t
        }

        function c(t) {
            return null !== t && "object" == typeof t
        }

        function l(t) {
            return "[object Object]" === sa.call(t)
        }

        function u(t) {
            return "[object RegExp]" === sa.call(t)
        }

        function f(t) {
            var e = parseFloat(String(t));
            return e >= 0 && Math.floor(e) === e && isFinite(t)
        }

        function d(t) {
            return null == t ? "" : "object" == typeof t ? JSON.stringify(t, null, 2) : String(t)
        }

        function p(t) {
            var e = parseFloat(t);
            return isNaN(e) ? t : e
        }

        function h(t, e) {
            for (var n = Object.create(null), r = t.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
            return e ? function(t) {
                return n[t.toLowerCase()]
            } : function(t) {
                return n[t]
            }
        }

        function m(t, e) {
            if (t.length) {
                var n = t.indexOf(e);
                if (n > -1) return t.splice(n, 1)
            }
        }

        function v(t, e) {
            return ua.call(t, e)
        }

        function g(t) {
            var e = Object.create(null);
            return function(n) {
                return e[n] || (e[n] = t(n))
            }
        }

        function w(t, e) {
            function n(n) {
                var r = arguments.length;
                return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e)
            }
            return n._length = t.length, n
        }

        function x(t, e) {
            return t.bind(e)
        }

        function b(t, e) {
            e = e || 0;
            for (var n = t.length - e, r = new Array(n); n--;) r[n] = t[n + e];
            return r
        }

        function y(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function _(t) {
            for (var e = {}, n = 0; n < t.length; n++) t[n] && y(e, t[n]);
            return e
        }

        function k(t, e, n) {}

        function $(t, e) {
            if (t === e) return !0;
            var n = c(t),
                r = c(e);
            if (!n || !r) return !n && !r && String(t) === String(e);
            try {
                var i = Array.isArray(t),
                    a = Array.isArray(e);
                if (i && a) return t.length === e.length && t.every(function(t, n) {
                    return $(t, e[n])
                });
                if (i || a) return !1;
                var o = Object.keys(t),
                    s = Object.keys(e);
                return o.length === s.length && o.every(function(n) {
                    return $(t[n], e[n])
                })
            } catch (t) {
                return !1
            }
        }

        function C(t, e) {
            for (var n = 0; n < t.length; n++)
                if ($(t[n], e)) return n;
            return -1
        }

        function T(t) {
            var e = !1;
            return function() {
                e || (e = !0, t.apply(this, arguments))
            }
        }

        function O(t) {
            var e = (t + "").charCodeAt(0);
            return 36 === e || 95 === e
        }

        function A(t, e, n, r) {
            Object.defineProperty(t, e, {
                value: n,
                enumerable: !!r,
                writable: !0,
                configurable: !0
            })
        }

        function I(t) {
            if (!ka.test(t)) {
                var e = t.split(".");
                return function(t) {
                    for (var n = 0; n < e.length; n++) {
                        if (!t) return;
                        t = t[e[n]]
                    }
                    return t
                }
            }
        }

        function S(t) {
            return "function" == typeof t && /native code/.test(t.toString())
        }

        function E(t) {
            Ua.target && Wa.push(Ua.target), Ua.target = t
        }

        function P() {
            Ua.target = Wa.pop()
        }

        function N(t) {
            return new Xa(void 0, void 0, void 0, String(t))
        }

        function M(t) {
            var e = new Xa(t.tag, t.data, t.children, t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
            return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.isCloned = !0, e
        }

        function j(t) {
            qa = t
        }

        function L(t, e, n) {
            t.__proto__ = e
        }

        function z(t, e, n) {
            for (var r = 0, i = n.length; r < i; r++) {
                var a = n[r];
                A(t, a, e[a])
            }
        }

        function R(t, e) {
            if (c(t) && !(t instanceof Xa)) {
                var n;
                return v(t, "__ob__") && t.__ob__ instanceof Ja ? n = t.__ob__ : qa && !Ra() && (Array.isArray(t) || l(t)) && Object.isExtensible(t) && !t._isVue && (n = new Ja(t)), e && n && n.vmCount++, n
            }
        }

        function F(t, e, n, r, i) {
            var a = new Ua,
                o = Object.getOwnPropertyDescriptor(t, e);
            if (!o || !1 !== o.configurable) {
                var s = o && o.get;
                s || 2 !== arguments.length || (n = t[e]);
                var c = o && o.set,
                    l = !i && R(n);
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        var e = s ? s.call(t) : n;
                        return Ua.target && (a.depend(), l && (l.dep.depend(), Array.isArray(e) && H(e))), e
                    },
                    set: function(e) {
                        var r = s ? s.call(t) : n;
                        e === r || e !== e && r !== r || (c ? c.call(t, e) : n = e, l = !i && R(e), a.notify())
                    }
                })
            }
        }

        function D(t, e, n) {
            if (Array.isArray(t) && f(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), n;
            if (e in t && !(e in Object.prototype)) return t[e] = n, n;
            var r = t.__ob__;
            return t._isVue || r && r.vmCount ? n : r ? (F(r.value, e, n), r.dep.notify(), n) : (t[e] = n, n)
        }

        function B(t, e) {
            if (Array.isArray(t) && f(e)) return void t.splice(e, 1);
            var n = t.__ob__;
            t._isVue || n && n.vmCount || v(t, e) && (delete t[e], n && n.dep.notify())
        }

        function H(t) {
            for (var e = void 0, n = 0, r = t.length; n < r; n++) e = t[n], e && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && H(e)
        }

        function U(t, e) {
            if (!e) return t;
            for (var n, r, i, a = Object.keys(e), o = 0; o < a.length; o++) n = a[o], r = t[n], i = e[n], v(t, n) ? l(r) && l(i) && U(r, i) : D(t, n, i);
            return t
        }

        function W(t, e, n) {
            return n ? function() {
                var r = "function" == typeof e ? e.call(n, n) : e,
                    i = "function" == typeof t ? t.call(n, n) : t;
                return r ? U(r, i) : i
            } : e ? t ? function() {
                return U("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t)
            } : e : t
        }

        function X(t, e) {
            return e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t
        }

        function Y(t, e, n, r) {
            var i = Object.create(t || null);
            return e ? y(i, e) : i
        }

        function V(t, e) {
            var n = t.props;
            if (n) {
                var r, i, a, o = {};
                if (Array.isArray(n))
                    for (r = n.length; r--;) "string" == typeof(i = n[r]) && (a = da(i), o[a] = {
                        type: null
                    });
                else if (l(n))
                    for (var s in n) i = n[s], a = da(s), o[a] = l(i) ? i : {
                        type: i
                    };
                t.props = o
            }
        }

        function Z(t, e) {
            var n = t.inject;
            if (n) {
                var r = t.inject = {};
                if (Array.isArray(n))
                    for (var i = 0; i < n.length; i++) r[n[i]] = {
                        from: n[i]
                    };
                else if (l(n))
                    for (var a in n) {
                        var o = n[a];
                        r[a] = l(o) ? y({
                            from: a
                        }, o) : {
                            from: o
                        }
                    }
            }
        }

        function G(t) {
            var e = t.directives;
            if (e)
                for (var n in e) {
                    var r = e[n];
                    "function" == typeof r && (e[n] = {
                        bind: r,
                        update: r
                    })
                }
        }

        function K(t, e, n) {
            function r(r) {
                var i = Qa[r] || no;
                c[r] = i(t[r], e[r], n, r)
            }
            "function" == typeof e && (e = e.options), V(e, n), Z(e, n), G(e);
            var i = e.extends;
            if (i && (t = K(t, i, n)), e.mixins)
                for (var a = 0, o = e.mixins.length; a < o; a++) t = K(t, e.mixins[a], n);
            var s, c = {};
            for (s in t) r(s);
            for (s in e) v(t, s) || r(s);
            return c
        }

        function q(t, e, n, r) {
            if ("string" == typeof n) {
                var i = t[e];
                if (v(i, n)) return i[n];
                var a = da(n);
                if (v(i, a)) return i[a];
                var o = pa(a);
                if (v(i, o)) return i[o];
                return i[n] || i[a] || i[o]
            }
        }

        function J(t, e, n, r) {
            var i = e[t],
                a = !v(n, t),
                o = n[t],
                s = nt(Boolean, i.type);
            if (s > -1)
                if (a && !v(i, "default")) o = !1;
                else if ("" === o || o === ma(t)) {
                var c = nt(String, i.type);
                (c < 0 || s < c) && (o = !0)
            }
            if (void 0 === o) {
                o = Q(r, i, t);
                var l = qa;
                j(!0), R(o), j(l)
            }
            return o
        }

        function Q(t, e, n) {
            if (v(e, "default")) {
                var r = e.default;
                return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof r && "Function" !== tt(e.type) ? r.call(t) : r
            }
        }

        function tt(t) {
            var e = t && t.toString().match(/^\s*function (\w+)/);
            return e ? e[1] : ""
        }

        function et(t, e) {
            return tt(t) === tt(e)
        }

        function nt(t, e) {
            if (!Array.isArray(e)) return et(e, t) ? 0 : -1;
            for (var n = 0, r = e.length; n < r; n++)
                if (et(e[n], t)) return n;
            return -1
        }

        function rt(t, e, n) {
            if (e)
                for (var r = e; r = r.$parent;) {
                    var i = r.$options.errorCaptured;
                    if (i)
                        for (var a = 0; a < i.length; a++) try {
                            var o = !1 === i[a].call(r, t, e, n);
                            if (o) return
                        } catch (t) {
                            it(t, r, "errorCaptured hook")
                        }
                }
            it(t, e, n)
        }

        function it(t, e, n) {
            if (_a.errorHandler) try {
                return _a.errorHandler.call(null, t, e, n)
            } catch (t) {
                at(t, null, "config.errorHandler")
            }
            at(t, e, n)
        }

        function at(t, e, n) {
            if (!Ca && !Ta || "undefined" == typeof console) throw t;
            console.error(t)
        }

        function ot() {
            io = !1;
            var t = ro.slice(0);
            ro.length = 0;
            for (var e = 0; e < t.length; e++) t[e]()
        }

        function st(t) {
            return t._withTask || (t._withTask = function() {
                ao = !0;
                var e = t.apply(null, arguments);
                return ao = !1, e
            })
        }

        function ct(t, e) {
            var n;
            if (ro.push(function() {
                    if (t) try {
                        t.call(e)
                    } catch (t) {
                        rt(t, e, "nextTick")
                    } else n && n(e)
                }), io || (io = !0, ao ? eo() : to()), !t && "undefined" != typeof Promise) return new Promise(function(t) {
                n = t
            })
        }

        function lt(t) {
            ut(t, uo), uo.clear()
        }

        function ut(t, e) {
            var n, r, i = Array.isArray(t);
            if (!(!i && !c(t) || Object.isFrozen(t) || t instanceof Xa)) {
                if (t.__ob__) {
                    var a = t.__ob__.dep.id;
                    if (e.has(a)) return;
                    e.add(a)
                }
                if (i)
                    for (n = t.length; n--;) ut(t[n], e);
                else
                    for (r = Object.keys(t), n = r.length; n--;) ut(t[r[n]], e)
            }
        }

        function ft(t) {
            function e() {
                var t = arguments,
                    n = e.fns;
                if (!Array.isArray(n)) return n.apply(null, arguments);
                for (var r = n.slice(), i = 0; i < r.length; i++) r[i].apply(null, t)
            }
            return e.fns = t, e
        }

        function dt(t, e, n, i, a) {
            var o, s, c, l;
            for (o in t) s = t[o], c = e[o], l = fo(o), r(s) || (r(c) ? (r(s.fns) && (s = t[o] = ft(s)), n(l.name, s, l.once, l.capture, l.passive, l.params)) : s !== c && (c.fns = s, t[o] = c));
            for (o in e) r(t[o]) && (l = fo(o), i(l.name, e[o], l.capture))
        }

        function pt(t, e, n) {
            function o() {
                n.apply(this, arguments), m(s.fns, o)
            }
            t instanceof Xa && (t = t.data.hook || (t.data.hook = {}));
            var s, c = t[e];
            r(c) ? s = ft([o]) : i(c.fns) && a(c.merged) ? (s = c, s.fns.push(o)) : s = ft([c, o]), s.merged = !0, t[e] = s
        }

        function ht(t, e, n) {
            var a = e.options.props;
            if (!r(a)) {
                var o = {},
                    s = t.attrs,
                    c = t.props;
                if (i(s) || i(c))
                    for (var l in a) {
                        var u = ma(l);
                        mt(o, c, l, u, !0) || mt(o, s, l, u, !1)
                    }
                return o
            }
        }

        function mt(t, e, n, r, a) {
            if (i(e)) {
                if (v(e, n)) return t[n] = e[n], a || delete e[n], !0;
                if (v(e, r)) return t[n] = e[r], a || delete e[r], !0
            }
            return !1
        }

        function vt(t) {
            for (var e = 0; e < t.length; e++)
                if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
            return t
        }

        function gt(t) {
            return s(t) ? [N(t)] : Array.isArray(t) ? xt(t) : void 0
        }

        function wt(t) {
            return i(t) && i(t.text) && o(t.isComment)
        }

        function xt(t, e) {
            var n, o, c, l, u = [];
            for (n = 0; n < t.length; n++) o = t[n], r(o) || "boolean" == typeof o || (c = u.length - 1, l = u[c], Array.isArray(o) ? o.length > 0 && (o = xt(o, (e || "") + "_" + n), wt(o[0]) && wt(l) && (u[c] = N(l.text + o[0].text), o.shift()), u.push.apply(u, o)) : s(o) ? wt(l) ? u[c] = N(l.text + o) : "" !== o && u.push(N(o)) : wt(o) && wt(l) ? u[c] = N(l.text + o.text) : (a(t._isVList) && i(o.tag) && r(o.key) && i(e) && (o.key = "__vlist" + e + "_" + n + "__"), u.push(o)));
            return u
        }

        function bt(t, e) {
            return (t.__esModule || Da && "Module" === t[Symbol.toStringTag]) && (t = t.default), c(t) ? e.extend(t) : t
        }

        function yt(t, e, n, r, i) {
            var a = Va();
            return a.asyncFactory = t, a.asyncMeta = {
                data: e,
                context: n,
                children: r,
                tag: i
            }, a
        }

        function _t(t, e, n) {
            if (a(t.error) && i(t.errorComp)) return t.errorComp;
            if (i(t.resolved)) return t.resolved;
            if (a(t.loading) && i(t.loadingComp)) return t.loadingComp;
            if (!i(t.contexts)) {
                var o = t.contexts = [n],
                    s = !0,
                    l = function() {
                        for (var t = 0, e = o.length; t < e; t++) o[t].$forceUpdate()
                    },
                    u = T(function(n) {
                        t.resolved = bt(n, e), s || l()
                    }),
                    f = T(function(e) {
                        i(t.errorComp) && (t.error = !0, l())
                    }),
                    d = t(u, f);
                return c(d) && ("function" == typeof d.then ? r(t.resolved) && d.then(u, f) : i(d.component) && "function" == typeof d.component.then && (d.component.then(u, f), i(d.error) && (t.errorComp = bt(d.error, e)), i(d.loading) && (t.loadingComp = bt(d.loading, e), 0 === d.delay ? t.loading = !0 : setTimeout(function() {
                    r(t.resolved) && r(t.error) && (t.loading = !0, l())
                }, d.delay || 200)), i(d.timeout) && setTimeout(function() {
                    r(t.resolved) && f(null)
                }, d.timeout))), s = !1, t.loading ? t.loadingComp : t.resolved
            }
            t.contexts.push(n)
        }

        function kt(t) {
            return t.isComment && t.asyncFactory
        }

        function $t(t) {
            if (Array.isArray(t))
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (i(n) && (i(n.componentOptions) || kt(n))) return n
                }
        }

        function Ct(t) {
            t._events = Object.create(null), t._hasHookEvent = !1;
            var e = t.$options._parentListeners;
            e && At(t, e)
        }

        function Tt(t, e, n) {
            n ? lo.$once(t, e) : lo.$on(t, e)
        }

        function Ot(t, e) {
            lo.$off(t, e)
        }

        function At(t, e, n) {
            lo = t, dt(e, n || {}, Tt, Ot, t), lo = void 0
        }

        function It(t, e) {
            var n = {};
            if (!t) return n;
            for (var r = 0, i = t.length; r < i; r++) {
                var a = t[r],
                    o = a.data;
                if (o && o.attrs && o.attrs.slot && delete o.attrs.slot, a.context !== e && a.fnContext !== e || !o || null == o.slot)(n.default || (n.default = [])).push(a);
                else {
                    var s = o.slot,
                        c = n[s] || (n[s] = []);
                    "template" === a.tag ? c.push.apply(c, a.children || []) : c.push(a)
                }
            }
            for (var l in n) n[l].every(St) && delete n[l];
            return n
        }

        function St(t) {
            return t.isComment && !t.asyncFactory || " " === t.text
        }

        function Et(t, e) {
            e = e || {};
            for (var n = 0; n < t.length; n++) Array.isArray(t[n]) ? Et(t[n], e) : e[t[n].key] = t[n].fn;
            return e
        }

        function Pt(t) {
            var e = t.$options,
                n = e.parent;
            if (n && !e.abstract) {
                for (; n.$options.abstract && n.$parent;) n = n.$parent;
                n.$children.push(t)
            }
            t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1
        }

        function Nt(t, e, n) {
            t.$el = e, t.$options.render || (t.$options.render = Va), Rt(t, "beforeMount");
            var r;
            return r = function() {
                t._update(t._render(), n)
            }, new yo(t, r, k, null, !0), n = !1, null == t.$vnode && (t._isMounted = !0, Rt(t, "mounted")), t
        }

        function Mt(t, e, n, r, i) {
            var a = !!(i || t.$options._renderChildren || r.data.scopedSlots || t.$scopedSlots !== oa);
            if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), t.$options._renderChildren = i, t.$attrs = r.data.attrs || oa, t.$listeners = n || oa, e && t.$options.props) {
                j(!1);
                for (var o = t._props, s = t.$options._propKeys || [], c = 0; c < s.length; c++) {
                    var l = s[c],
                        u = t.$options.props;
                    o[l] = J(l, u, e, t)
                }
                j(!0), t.$options.propsData = e
            }
            n = n || oa;
            var f = t.$options._parentListeners;
            t.$options._parentListeners = n, At(t, n, f), a && (t.$slots = It(i, r.context), t.$forceUpdate())
        }

        function jt(t) {
            for (; t && (t = t.$parent);)
                if (t._inactive) return !0;
            return !1
        }

        function Lt(t, e) {
            if (e) {
                if (t._directInactive = !1, jt(t)) return
            } else if (t._directInactive) return;
            if (t._inactive || null === t._inactive) {
                t._inactive = !1;
                for (var n = 0; n < t.$children.length; n++) Lt(t.$children[n]);
                Rt(t, "activated")
            }
        }

        function zt(t, e) {
            if (!(e && (t._directInactive = !0, jt(t)) || t._inactive)) {
                t._inactive = !0;
                for (var n = 0; n < t.$children.length; n++) zt(t.$children[n]);
                Rt(t, "deactivated")
            }
        }

        function Rt(t, e) {
            E();
            var n = t.$options[e];
            if (n)
                for (var r = 0, i = n.length; r < i; r++) try {
                    n[r].call(t)
                } catch (n) {
                    rt(n, t, e + " hook")
                }
            t._hasHookEvent && t.$emit("hook:" + e), P()
        }

        function Ft() {
            xo = ho.length = mo.length = 0, vo = {}, go = wo = !1
        }

        function Dt() {
            wo = !0;
            var t, e;
            for (ho.sort(function(t, e) {
                    return t.id - e.id
                }), xo = 0; xo < ho.length; xo++) t = ho[xo], e = t.id, vo[e] = null, t.run();
            var n = mo.slice(),
                r = ho.slice();
            Ft(), Ut(n), Bt(r), Fa && _a.devtools && Fa.emit("flush")
        }

        function Bt(t) {
            for (var e = t.length; e--;) {
                var n = t[e],
                    r = n.vm;
                r._watcher === n && r._isMounted && Rt(r, "updated")
            }
        }

        function Ht(t) {
            t._inactive = !1, mo.push(t)
        }

        function Ut(t) {
            for (var e = 0; e < t.length; e++) t[e]._inactive = !0, Lt(t[e], !0)
        }

        function Wt(t) {
            var e = t.id;
            if (null == vo[e]) {
                if (vo[e] = !0, wo) {
                    for (var n = ho.length - 1; n > xo && ho[n].id > t.id;) n--;
                    ho.splice(n + 1, 0, t)
                } else ho.push(t);
                go || (go = !0, ct(Dt))
            }
        }

        function Xt(t, e, n) {
            _o.get = function() {
                return this[e][n]
            }, _o.set = function(t) {
                this[e][n] = t
            }, Object.defineProperty(t, n, _o)
        }

        function Yt(t) {
            t._watchers = [];
            var e = t.$options;
            e.props && Vt(t, e.props), e.methods && Qt(t, e.methods), e.data ? Zt(t) : R(t._data = {}, !0), e.computed && Kt(t, e.computed), e.watch && e.watch !== Na && te(t, e.watch)
        }

        function Vt(t, e) {
            var n = t.$options.propsData || {},
                r = t._props = {},
                i = t.$options._propKeys = [];
            !t.$parent || j(!1);
            for (var a in e) ! function(a) {
                i.push(a);
                var o = J(a, e, n, t);
                F(r, a, o), a in t || Xt(t, "_props", a)
            }(a);
            j(!0)
        }

        function Zt(t) {
            var e = t.$options.data;
            e = t._data = "function" == typeof e ? Gt(e, t) : e || {}, l(e) || (e = {});
            for (var n = Object.keys(e), r = t.$options.props, i = (t.$options.methods, n.length); i--;) {
                var a = n[i];
                r && v(r, a) || O(a) || Xt(t, "_data", a)
            }
            R(e, !0)
        }

        function Gt(t, e) {
            E();
            try {
                return t.call(e, e)
            } catch (t) {
                return rt(t, e, "data()"), {}
            } finally {
                P()
            }
        }

        function Kt(t, e) {
            var n = t._computedWatchers = Object.create(null),
                r = Ra();
            for (var i in e) {
                var a = e[i],
                    o = "function" == typeof a ? a : a.get;
                r || (n[i] = new yo(t, o || k, k, ko)), i in t || qt(t, i, a)
            }
        }

        function qt(t, e, n) {
            var r = !Ra();
            "function" == typeof n ? (_o.get = r ? Jt(e) : n, _o.set = k) : (_o.get = n.get ? r && !1 !== n.cache ? Jt(e) : n.get : k, _o.set = n.set ? n.set : k), Object.defineProperty(t, e, _o)
        }

        function Jt(t) {
            return function() {
                var e = this._computedWatchers && this._computedWatchers[t];
                if (e) return e.dirty && e.evaluate(), Ua.target && e.depend(), e.value
            }
        }

        function Qt(t, e) {
            t.$options.props;
            for (var n in e) t[n] = null == e[n] ? k : va(e[n], t)
        }

        function te(t, e) {
            for (var n in e) {
                var r = e[n];
                if (Array.isArray(r))
                    for (var i = 0; i < r.length; i++) ee(t, n, r[i]);
                else ee(t, n, r)
            }
        }

        function ee(t, e, n, r) {
            return l(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r)
        }

        function ne(t) {
            var e = t.$options.provide;
            e && (t._provided = "function" == typeof e ? e.call(t) : e)
        }

        function re(t) {
            var e = ie(t.$options.inject, t);
            e && (j(!1), Object.keys(e).forEach(function(n) {
                F(t, n, e[n])
            }), j(!0))
        }

        function ie(t, e) {
            if (t) {
                for (var n = Object.create(null), r = Da ? Reflect.ownKeys(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }) : Object.keys(t), i = 0; i < r.length; i++) {
                    for (var a = r[i], o = t[a].from, s = e; s;) {
                        if (s._provided && v(s._provided, o)) {
                            n[a] = s._provided[o];
                            break
                        }
                        s = s.$parent
                    }
                    if (!s && "default" in t[a]) {
                        var c = t[a].default;
                        n[a] = "function" == typeof c ? c.call(e) : c
                    }
                }
                return n
            }
        }

        function ae(t, e) {
            var n, r, a, o, s;
            if (Array.isArray(t) || "string" == typeof t)
                for (n = new Array(t.length), r = 0, a = t.length; r < a; r++) n[r] = e(t[r], r);
            else if ("number" == typeof t)
                for (n = new Array(t), r = 0; r < t; r++) n[r] = e(r + 1, r);
            else if (c(t))
                for (o = Object.keys(t), n = new Array(o.length), r = 0, a = o.length; r < a; r++) s = o[r], n[r] = e(t[s], s, r);
            return i(n) && (n._isVList = !0), n
        }

        function oe(t, e, n, r) {
            var i, a = this.$scopedSlots[t];
            if (a) n = n || {}, r && (n = y(y({}, r), n)), i = a(n) || e;
            else {
                var o = this.$slots[t];
                o && (o._rendered = !0), i = o || e
            }
            var s = n && n.slot;
            return s ? this.$createElement("template", {
                slot: s
            }, i) : i
        }

        function se(t) {
            return q(this.$options, "filters", t, !0) || wa
        }

        function ce(t, e) {
            return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e
        }

        function le(t, e, n, r, i) {
            var a = _a.keyCodes[e] || n;
            return i && r && !_a.keyCodes[e] ? ce(i, r) : a ? ce(a, t) : r ? ma(r) !== e : void 0
        }

        function ue(t, e, n, r, i) {
            if (n)
                if (c(n)) {
                    Array.isArray(n) && (n = _(n));
                    var a;
                    for (var o in n) ! function(o) {
                        if ("class" === o || "style" === o || la(o)) a = t;
                        else {
                            var s = t.attrs && t.attrs.type;
                            a = r || _a.mustUseProp(e, s, o) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {})
                        }
                        if (!(o in a) && (a[o] = n[o], i)) {
                            (t.on || (t.on = {}))["update:" + o] = function(t) {
                                n[o] = t
                            }
                        }
                    }(o)
                } else;
            return t
        }

        function fe(t, e) {
            var n = this._staticTrees || (this._staticTrees = []),
                r = n[t];
            return r && !e ? r : (r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), pe(r, "__static__" + t, !1), r)
        }

        function de(t, e, n) {
            return pe(t, "__once__" + e + (n ? "_" + n : ""), !0), t
        }

        function pe(t, e, n) {
            if (Array.isArray(t))
                for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && he(t[r], e + "_" + r, n);
            else he(t, e, n)
        }

        function he(t, e, n) {
            t.isStatic = !0, t.key = e, t.isOnce = n
        }

        function me(t, e) {
            if (e)
                if (l(e)) {
                    var n = t.on = t.on ? y({}, t.on) : {};
                    for (var r in e) {
                        var i = n[r],
                            a = e[r];
                        n[r] = i ? [].concat(i, a) : a
                    }
                } else;
            return t
        }

        function ve(t) {
            t._o = de, t._n = p, t._s = d, t._l = ae, t._t = oe, t._q = $, t._i = C, t._m = fe, t._f = se, t._k = le, t._b = ue, t._v = N, t._e = Va, t._u = Et, t._g = me
        }

        function ge(t, e, n, r, i) {
            var o, s = i.options;
            v(r, "_uid") ? (o = Object.create(r), o._original = r) : (o = r, r = r._original);
            var c = a(s._compiled),
                l = !c;
            this.data = t, this.props = e, this.children = n, this.parent = r, this.listeners = t.on || oa, this.injections = ie(s.inject, r), this.slots = function() {
                return It(n, r)
            }, c && (this.$options = s, this.$slots = this.slots(), this.$scopedSlots = t.scopedSlots || oa), s._scopeId ? this._c = function(t, e, n, i) {
                var a = Ce(o, t, e, n, i, l);
                return a && !Array.isArray(a) && (a.fnScopeId = s._scopeId, a.fnContext = r), a
            } : this._c = function(t, e, n, r) {
                return Ce(o, t, e, n, r, l)
            }
        }

        function we(t, e, n, r, a) {
            var o = t.options,
                s = {},
                c = o.props;
            if (i(c))
                for (var l in c) s[l] = J(l, c, e || oa);
            else i(n.attrs) && be(s, n.attrs), i(n.props) && be(s, n.props);
            var u = new ge(n, s, a, r, t),
                f = o.render.call(null, u._c, u);
            if (f instanceof Xa) return xe(f, n, u.parent, o);
            if (Array.isArray(f)) {
                for (var d = gt(f) || [], p = new Array(d.length), h = 0; h < d.length; h++) p[h] = xe(d[h], n, u.parent, o);
                return p
            }
        }

        function xe(t, e, n, r) {
            var i = M(t);
            return i.fnContext = n, i.fnOptions = r, e.slot && ((i.data || (i.data = {})).slot = e.slot), i
        }

        function be(t, e) {
            for (var n in e) t[da(n)] = e[n]
        }

        function ye(t, e, n, o, s) {
            if (!r(t)) {
                var l = n.$options._base;
                if (c(t) && (t = l.extend(t)), "function" == typeof t) {
                    var u;
                    if (r(t.cid) && (u = t, void 0 === (t = _t(u, l, n)))) return yt(u, e, n, o, s);
                    e = e || {}, Ee(t), i(e.model) && $e(t.options, e);
                    var f = ht(e, t, s);
                    if (a(t.options.functional)) return we(t, f, e, n, o);
                    var d = e.on;
                    if (e.on = e.nativeOn, a(t.options.abstract)) {
                        var p = e.slot;
                        e = {}, p && (e.slot = p)
                    }
                    ke(e);
                    var h = t.options.name || s;
                    return new Xa("vue-component-" + t.cid + (h ? "-" + h : ""), e, void 0, void 0, void 0, n, {
                        Ctor: t,
                        propsData: f,
                        listeners: d,
                        tag: s,
                        children: o
                    }, u)
                }
            }
        }

        function _e(t, e, n, r) {
            var a = {
                    _isComponent: !0,
                    parent: e,
                    _parentVnode: t,
                    _parentElm: n || null,
                    _refElm: r || null
                },
                o = t.data.inlineTemplate;
            return i(o) && (a.render = o.render, a.staticRenderFns = o.staticRenderFns), new t.componentOptions.Ctor(a)
        }

        function ke(t) {
            for (var e = t.hook || (t.hook = {}), n = 0; n < Co.length; n++) {
                var r = Co[n];
                e[r] = $o[r]
            }
        }

        function $e(t, e) {
            var n = t.model && t.model.prop || "value",
                r = t.model && t.model.event || "input";
            (e.props || (e.props = {}))[n] = e.model.value;
            var a = e.on || (e.on = {});
            i(a[r]) ? a[r] = [e.model.callback].concat(a[r]) : a[r] = e.model.callback
        }

        function Ce(t, e, n, r, i, o) {
            return (Array.isArray(n) || s(n)) && (i = r, r = n, n = void 0), a(o) && (i = Oo), Te(t, e, n, r, i)
        }

        function Te(t, e, n, r, a) {
            if (i(n) && i(n.__ob__)) return Va();
            if (i(n) && i(n.is) && (e = n.is), !e) return Va();
            Array.isArray(r) && "function" == typeof r[0] && (n = n || {}, n.scopedSlots = {
                default: r[0]
            }, r.length = 0), a === Oo ? r = gt(r) : a === To && (r = vt(r));
            var o, s;
            if ("string" == typeof e) {
                var c;
                s = t.$vnode && t.$vnode.ns || _a.getTagNamespace(e), o = _a.isReservedTag(e) ? new Xa(_a.parsePlatformTagName(e), n, r, void 0, void 0, t) : i(c = q(t.$options, "components", e)) ? ye(c, n, t, r, e) : new Xa(e, n, r, void 0, void 0, t)
            } else o = ye(e, n, t, r);
            return Array.isArray(o) ? o : i(o) ? (i(s) && Oe(o, s), i(n) && Ae(n), o) : Va()
        }

        function Oe(t, e, n) {
            if (t.ns = e, "foreignObject" === t.tag && (e = void 0, n = !0), i(t.children))
                for (var o = 0, s = t.children.length; o < s; o++) {
                    var c = t.children[o];
                    i(c.tag) && (r(c.ns) || a(n) && "svg" !== c.tag) && Oe(c, e, n)
                }
        }

        function Ae(t) {
            c(t.style) && lt(t.style), c(t.class) && lt(t.class)
        }

        function Ie(t) {
            t._vnode = null, t._staticTrees = null;
            var e = t.$options,
                n = t.$vnode = e._parentVnode,
                r = n && n.context;
            t.$slots = It(e._renderChildren, r), t.$scopedSlots = oa, t._c = function(e, n, r, i) {
                return Ce(t, e, n, r, i, !1)
            }, t.$createElement = function(e, n, r, i) {
                return Ce(t, e, n, r, i, !0)
            };
            var i = n && n.data;
            F(t, "$attrs", i && i.attrs || oa, null, !0), F(t, "$listeners", e._parentListeners || oa, null, !0)
        }

        function Se(t, e) {
            var n = t.$options = Object.create(t.constructor.options),
                r = e._parentVnode;
            n.parent = e.parent, n._parentVnode = r, n._parentElm = e._parentElm, n._refElm = e._refElm;
            var i = r.componentOptions;
            n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns)
        }

        function Ee(t) {
            var e = t.options;
            if (t.super) {
                var n = Ee(t.super);
                if (n !== t.superOptions) {
                    t.superOptions = n;
                    var r = Pe(t);
                    r && y(t.extendOptions, r), e = t.options = K(n, t.extendOptions), e.name && (e.components[e.name] = t)
                }
            }
            return e
        }

        function Pe(t) {
            var e, n = t.options,
                r = t.extendOptions,
                i = t.sealedOptions;
            for (var a in n) n[a] !== i[a] && (e || (e = {}), e[a] = Ne(n[a], r[a], i[a]));
            return e
        }

        function Ne(t, e, n) {
            if (Array.isArray(t)) {
                var r = [];
                n = Array.isArray(n) ? n : [n], e = Array.isArray(e) ? e : [e];
                for (var i = 0; i < t.length; i++)(e.indexOf(t[i]) >= 0 || n.indexOf(t[i]) < 0) && r.push(t[i]);
                return r
            }
            return t
        }

        function Me(t) {
            this._init(t)
        }

        function je(t) {
            t.use = function(t) {
                var e = this._installedPlugins || (this._installedPlugins = []);
                if (e.indexOf(t) > -1) return this;
                var n = b(arguments, 1);
                return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), e.push(t), this
            }
        }

        function Le(t) {
            t.mixin = function(t) {
                return this.options = K(this.options, t), this
            }
        }

        function ze(t) {
            t.cid = 0;
            var e = 1;
            t.extend = function(t) {
                t = t || {};
                var n = this,
                    r = n.cid,
                    i = t._Ctor || (t._Ctor = {});
                if (i[r]) return i[r];
                var a = t.name || n.options.name,
                    o = function(t) {
                        this._init(t)
                    };
                return o.prototype = Object.create(n.prototype), o.prototype.constructor = o, o.cid = e++, o.options = K(n.options, t), o.super = n, o.options.props && Re(o), o.options.computed && Fe(o), o.extend = n.extend, o.mixin = n.mixin, o.use = n.use, ba.forEach(function(t) {
                    o[t] = n[t]
                }), a && (o.options.components[a] = o), o.superOptions = n.options, o.extendOptions = t, o.sealedOptions = y({}, o.options), i[r] = o, o
            }
        }

        function Re(t) {
            var e = t.options.props;
            for (var n in e) Xt(t.prototype, "_props", n)
        }

        function Fe(t) {
            var e = t.options.computed;
            for (var n in e) qt(t.prototype, n, e[n])
        }

        function De(t) {
            ba.forEach(function(e) {
                t[e] = function(t, n) {
                    return n ? ("component" === e && l(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && "function" == typeof n && (n = {
                        bind: n,
                        update: n
                    }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t]
                }
            })
        }

        function Be(t) {
            return t && (t.Ctor.options.name || t.tag)
        }

        function He(t, e) {
            return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!u(t) && t.test(e)
        }

        function Ue(t, e) {
            var n = t.cache,
                r = t.keys,
                i = t._vnode;
            for (var a in n) {
                var o = n[a];
                if (o) {
                    var s = Be(o.componentOptions);
                    s && !e(s) && We(n, a, r, i)
                }
            }
        }

        function We(t, e, n, r) {
            var i = t[e];
            !i || r && i.tag === r.tag || i.componentInstance.$destroy(), t[e] = null, m(n, e)
        }

        function Xe(t) {
            for (var e = t.data, n = t, r = t; i(r.componentInstance);)(r = r.componentInstance._vnode) && r.data && (e = Ye(r.data, e));
            for (; i(n = n.parent);) n && n.data && (e = Ye(e, n.data));
            return Ve(e.staticClass, e.class)
        }

        function Ye(t, e) {
            return {
                staticClass: Ze(t.staticClass, e.staticClass),
                class: i(t.class) ? [t.class, e.class] : e.class
            }
        }

        function Ve(t, e) {
            return i(t) || i(e) ? Ze(t, Ge(e)) : ""
        }

        function Ze(t, e) {
            return t ? e ? t + " " + e : t : e || ""
        }

        function Ge(t) {
            return Array.isArray(t) ? Ke(t) : c(t) ? qe(t) : "string" == typeof t ? t : ""
        }

        function Ke(t) {
            for (var e, n = "", r = 0, a = t.length; r < a; r++) i(e = Ge(t[r])) && "" !== e && (n && (n += " "), n += e);
            return n
        }

        function qe(t) {
            var e = "";
            for (var n in t) t[n] && (e && (e += " "), e += n);
            return e
        }

        function Je(t) {
            return Jo(t) ? "svg" : "math" === t ? "math" : void 0
        }

        function Qe(t) {
            if (!Ca) return !0;
            if (ts(t)) return !1;
            if (t = t.toLowerCase(), null != es[t]) return es[t];
            var e = document.createElement(t);
            return t.indexOf("-") > -1 ? es[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : es[t] = /HTMLUnknownElement/.test(e.toString())
        }

        function tn(t) {
            if ("string" == typeof t) {
                var e = document.querySelector(t);
                return e || document.createElement("div")
            }
            return t
        }

        function en(t, e) {
            var n = document.createElement(t);
            return "select" !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
        }

        function nn(t, e) {
            return document.createElementNS(Ko[t], e)
        }

        function rn(t) {
            return document.createTextNode(t)
        }

        function an(t) {
            return document.createComment(t)
        }

        function on(t, e, n) {
            t.insertBefore(e, n)
        }

        function sn(t, e) {
            t.removeChild(e)
        }

        function cn(t, e) {
            t.appendChild(e)
        }

        function ln(t) {
            return t.parentNode
        }

        function un(t) {
            return t.nextSibling
        }

        function fn(t) {
            return t.tagName
        }

        function dn(t, e) {
            t.textContent = e
        }

        function pn(t, e) {
            t.setAttribute(e, "")
        }

        function hn(t, e) {
            var n = t.data.ref;
            if (i(n)) {
                var r = t.context,
                    a = t.componentInstance || t.elm,
                    o = r.$refs;
                e ? Array.isArray(o[n]) ? m(o[n], a) : o[n] === a && (o[n] = void 0) : t.data.refInFor ? Array.isArray(o[n]) ? o[n].indexOf(a) < 0 && o[n].push(a) : o[n] = [a] : o[n] = a
            }
        }

        function mn(t, e) {
            return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && i(t.data) === i(e.data) && vn(t, e) || a(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && r(e.asyncFactory.error))
        }

        function vn(t, e) {
            if ("input" !== t.tag) return !0;
            var n, r = i(n = t.data) && i(n = n.attrs) && n.type,
                a = i(n = e.data) && i(n = n.attrs) && n.type;
            return r === a || ns(r) && ns(a)
        }

        function gn(t, e, n) {
            var r, a, o = {};
            for (r = e; r <= n; ++r) a = t[r].key, i(a) && (o[a] = r);
            return o
        }

        function wn(t, e) {
            (t.data.directives || e.data.directives) && xn(t, e)
        }

        function xn(t, e) {
            var n, r, i, a = t === as,
                o = e === as,
                s = bn(t.data.directives, t.context),
                c = bn(e.data.directives, e.context),
                l = [],
                u = [];
            for (n in c) r = s[n], i = c[n], r ? (i.oldValue = r.value, _n(i, "update", e, t), i.def && i.def.componentUpdated && u.push(i)) : (_n(i, "bind", e, t), i.def && i.def.inserted && l.push(i));
            if (l.length) {
                var f = function() {
                    for (var n = 0; n < l.length; n++) _n(l[n], "inserted", e, t)
                };
                a ? pt(e, "insert", f) : f()
            }
            if (u.length && pt(e, "postpatch", function() {
                    for (var n = 0; n < u.length; n++) _n(u[n], "componentUpdated", e, t)
                }), !a)
                for (n in s) c[n] || _n(s[n], "unbind", t, t, o)
        }

        function bn(t, e) {
            var n = Object.create(null);
            if (!t) return n;
            var r, i;
            for (r = 0; r < t.length; r++) i = t[r], i.modifiers || (i.modifiers = cs), n[yn(i)] = i, i.def = q(e.$options, "directives", i.name, !0);
            return n
        }

        function yn(t) {
            return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
        }

        function _n(t, e, n, r, i) {
            var a = t.def && t.def[e];
            if (a) try {
                a(n.elm, t, n, r, i)
            } catch (r) {
                rt(r, n.context, "directive " + t.name + " " + e + " hook")
            }
        }

        function kn(t, e) {
            var n = e.componentOptions;
            if (!(i(n) && !1 === n.Ctor.options.inheritAttrs || r(t.data.attrs) && r(e.data.attrs))) {
                var a, o, s = e.elm,
                    c = t.data.attrs || {},
                    l = e.data.attrs || {};
                i(l.__ob__) && (l = e.data.attrs = y({}, l));
                for (a in l) o = l[a], c[a] !== o && $n(s, a, o);
                (Ia || Ea) && l.value !== c.value && $n(s, "value", l.value);
                for (a in c) r(l[a]) && (Vo(a) ? s.removeAttributeNS(Yo, Zo(a)) : Wo(a) || s.removeAttribute(a))
            }
        }

        function $n(t, e, n) {
            t.tagName.indexOf("-") > -1 ? Cn(t, e, n) : Xo(e) ? Go(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, n)) : Wo(e) ? t.setAttribute(e, Go(n) || "false" === n ? "false" : "true") : Vo(e) ? Go(n) ? t.removeAttributeNS(Yo, Zo(e)) : t.setAttributeNS(Yo, e, n) : Cn(t, e, n)
        }

        function Cn(t, e, n) {
            if (Go(n)) t.removeAttribute(e);
            else {
                if (Ia && !Sa && "TEXTAREA" === t.tagName && "placeholder" === e && !t.__ieph) {
                    var r = function(e) {
                        e.stopImmediatePropagation(), t.removeEventListener("input", r)
                    };
                    t.addEventListener("input", r), t.__ieph = !0
                }
                t.setAttribute(e, n)
            }
        }

        function Tn(t, e) {
            var n = e.elm,
                a = e.data,
                o = t.data;
            if (!(r(a.staticClass) && r(a.class) && (r(o) || r(o.staticClass) && r(o.class)))) {
                var s = Xe(e),
                    c = n._transitionClasses;
                i(c) && (s = Ze(s, Ge(c))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s)
            }
        }

        function On(t) {
            function e() {
                (o || (o = [])).push(t.slice(h, i).trim()), h = i + 1
            }
            var n, r, i, a, o, s = !1,
                c = !1,
                l = !1,
                u = !1,
                f = 0,
                d = 0,
                p = 0,
                h = 0;
            for (i = 0; i < t.length; i++)
                if (r = n, n = t.charCodeAt(i), s) 39 === n && 92 !== r && (s = !1);
                else if (c) 34 === n && 92 !== r && (c = !1);
            else if (l) 96 === n && 92 !== r && (l = !1);
            else if (u) 47 === n && 92 !== r && (u = !1);
            else if (124 !== n || 124 === t.charCodeAt(i + 1) || 124 === t.charCodeAt(i - 1) || f || d || p) {
                switch (n) {
                    case 34:
                        c = !0;
                        break;
                    case 39:
                        s = !0;
                        break;
                    case 96:
                        l = !0;
                        break;
                    case 40:
                        p++;
                        break;
                    case 41:
                        p--;
                        break;
                    case 91:
                        d++;
                        break;
                    case 93:
                        d--;
                        break;
                    case 123:
                        f++;
                        break;
                    case 125:
                        f--
                }
                if (47 === n) {
                    for (var m = i - 1, v = void 0; m >= 0 && " " === (v = t.charAt(m)); m--);
                    v && ds.test(v) || (u = !0)
                }
            } else void 0 === a ? (h = i + 1, a = t.slice(0, i).trim()) : e();
            if (void 0 === a ? a = t.slice(0, i).trim() : 0 !== h && e(), o)
                for (i = 0; i < o.length; i++) a = An(a, o[i]);
            return a
        }

        function An(t, e) {
            var n = e.indexOf("(");
            if (n < 0) return '_f("' + e + '")(' + t + ")";
            var r = e.slice(0, n),
                i = e.slice(n + 1);
            return '_f("' + r + '")(' + t + (")" !== i ? "," + i : i)
        }

        function In(t) {
            console.error("[Vue compiler]: " + t)
        }

        function Sn(t, e) {
            return t ? t.map(function(t) {
                return t[e]
            }).filter(function(t) {
                return t
            }) : []
        }

        function En(t, e, n) {
            (t.props || (t.props = [])).push({
                name: e,
                value: n
            }), t.plain = !1
        }

        function Pn(t, e, n) {
            (t.attrs || (t.attrs = [])).push({
                name: e,
                value: n
            }), t.plain = !1
        }

        function Nn(t, e, n) {
            t.attrsMap[e] = n, t.attrsList.push({
                name: e,
                value: n
            })
        }

        function Mn(t, e, n, r, i, a) {
            (t.directives || (t.directives = [])).push({
                name: e,
                rawName: n,
                value: r,
                arg: i,
                modifiers: a
            }), t.plain = !1
        }

        function jn(t, e, n, r, i, a) {
            r = r || oa, r.capture && (delete r.capture, e = "!" + e), r.once && (delete r.once, e = "~" + e), r.passive && (delete r.passive, e = "&" + e), "click" === e && (r.right ? (e = "contextmenu", delete r.right) : r.middle && (e = "mouseup"));
            var o;
            r.native ? (delete r.native, o = t.nativeEvents || (t.nativeEvents = {})) : o = t.events || (t.events = {});
            var s = {
                value: n.trim()
            };
            r !== oa && (s.modifiers = r);
            var c = o[e];
            Array.isArray(c) ? i ? c.unshift(s) : c.push(s) : o[e] = c ? i ? [s, c] : [c, s] : s, t.plain = !1
        }

        function Ln(t, e, n) {
            var r = zn(t, ":" + e) || zn(t, "v-bind:" + e);
            if (null != r) return On(r);
            if (!1 !== n) {
                var i = zn(t, e);
                if (null != i) return JSON.stringify(i)
            }
        }

        function zn(t, e, n) {
            var r;
            if (null != (r = t.attrsMap[e]))
                for (var i = t.attrsList, a = 0, o = i.length; a < o; a++)
                    if (i[a].name === e) {
                        i.splice(a, 1);
                        break
                    }
            return n && delete t.attrsMap[e], r
        }

        function Rn(t, e, n) {
            var r = n || {},
                i = r.number,
                a = r.trim,
                o = "$$v";
            a && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (o = "_n(" + o + ")");
            var s = Fn(e, o);
            t.model = {
                value: "(" + e + ")",
                expression: '"' + e + '"',
                callback: "function ($$v) {" + s + "}"
            }
        }

        function Fn(t, e) {
            var n = Dn(t);
            return null === n.key ? t + "=" + e : "$set(" + n.exp + ", " + n.key + ", " + e + ")"
        }

        function Dn(t) {
            if (t = t.trim(), Po = t.length, t.indexOf("[") < 0 || t.lastIndexOf("]") < Po - 1) return jo = t.lastIndexOf("."), jo > -1 ? {
                exp: t.slice(0, jo),
                key: '"' + t.slice(jo + 1) + '"'
            } : {
                exp: t,
                key: null
            };
            for (No = t, jo = Lo = zo = 0; !Hn();) Mo = Bn(), Un(Mo) ? Xn(Mo) : 91 === Mo && Wn(Mo);
            return {
                exp: t.slice(0, Lo),
                key: t.slice(Lo + 1, zo)
            }
        }

        function Bn() {
            return No.charCodeAt(++jo)
        }

        function Hn() {
            return jo >= Po
        }

        function Un(t) {
            return 34 === t || 39 === t
        }

        function Wn(t) {
            var e = 1;
            for (Lo = jo; !Hn();)
                if (t = Bn(), Un(t)) Xn(t);
                else if (91 === t && e++, 93 === t && e--, 0 === e) {
                zo = jo;
                break
            }
        }

        function Xn(t) {
            for (var e = t; !Hn() && (t = Bn()) !== e;);
        }

        function Yn(t, e, n) {
            Ro = n;
            var r = e.value,
                i = e.modifiers,
                a = t.tag,
                o = t.attrsMap.type;
            if (t.component) return Rn(t, r, i), !1;
            if ("select" === a) Gn(t, r, i);
            else if ("input" === a && "checkbox" === o) Vn(t, r, i);
            else if ("input" === a && "radio" === o) Zn(t, r, i);
            else if ("input" === a || "textarea" === a) Kn(t, r, i);
            else if (!_a.isReservedTag(a)) return Rn(t, r, i), !1;
            return !0
        }

        function Vn(t, e, n) {
            var r = n && n.number,
                i = Ln(t, "value") || "null",
                a = Ln(t, "true-value") || "true",
                o = Ln(t, "false-value") || "false";
            En(t, "checked", "Array.isArray(" + e + ")?_i(" + e + "," + i + ")>-1" + ("true" === a ? ":(" + e + ")" : ":_q(" + e + "," + a + ")")), jn(t, "change", "var $$a=" + e + ",$$el=$event.target,$$c=$$el.checked?(" + a + "):(" + o + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Fn(e, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Fn(e, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Fn(e, "$$c") + "}", null, !0)
        }

        function Zn(t, e, n) {
            var r = n && n.number,
                i = Ln(t, "value") || "null";
            i = r ? "_n(" + i + ")" : i, En(t, "checked", "_q(" + e + "," + i + ")"), jn(t, "change", Fn(e, i), null, !0)
        }

        function Gn(t, e, n) {
            var r = n && n.number,
                i = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (r ? "_n(val)" : "val") + "})",
                a = "var $$selectedVal = " + i + ";";
            a = a + " " + Fn(e, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), jn(t, "change", a, null, !0)
        }

        function Kn(t, e, n) {
            var r = t.attrsMap.type,
                i = n || {},
                a = i.lazy,
                o = i.number,
                s = i.trim,
                c = !a && "range" !== r,
                l = a ? "change" : "range" === r ? ps : "input",
                u = "$event.target.value";
            s && (u = "$event.target.value.trim()"), o && (u = "_n(" + u + ")");
            var f = Fn(e, u);
            c && (f = "if($event.target.composing)return;" + f), En(t, "value", "(" + e + ")"), jn(t, l, f, null, !0), (s || o) && jn(t, "blur", "$forceUpdate()")
        }

        function qn(t) {
            if (i(t[ps])) {
                var e = Ia ? "change" : "input";
                t[e] = [].concat(t[ps], t[e] || []), delete t[ps]
            }
            i(t[hs]) && (t.change = [].concat(t[hs], t.change || []), delete t[hs])
        }

        function Jn(t, e, n) {
            var r = Fo;
            return function i() {
                null !== t.apply(null, arguments) && tr(e, i, n, r)
            }
        }

        function Qn(t, e, n, r, i) {
            e = st(e), n && (e = Jn(e, t, r)), Fo.addEventListener(t, e, Ma ? {
                capture: r,
                passive: i
            } : r)
        }

        function tr(t, e, n, r) {
            (r || Fo).removeEventListener(t, e._withTask || e, n)
        }

        function er(t, e) {
            if (!r(t.data.on) || !r(e.data.on)) {
                var n = e.data.on || {},
                    i = t.data.on || {};
                Fo = e.elm, qn(n), dt(n, i, Qn, tr, e.context), Fo = void 0
            }
        }

        function nr(t, e) {
            if (!r(t.data.domProps) || !r(e.data.domProps)) {
                var n, a, o = e.elm,
                    s = t.data.domProps || {},
                    c = e.data.domProps || {};
                i(c.__ob__) && (c = e.data.domProps = y({}, c));
                for (n in s) r(c[n]) && (o[n] = "");
                for (n in c) {
                    if (a = c[n], "textContent" === n || "innerHTML" === n) {
                        if (e.children && (e.children.length = 0), a === s[n]) continue;
                        1 === o.childNodes.length && o.removeChild(o.childNodes[0])
                    }
                    if ("value" === n) {
                        o._value = a;
                        var l = r(a) ? "" : String(a);
                        rr(o, l) && (o.value = l)
                    } else o[n] = a
                }
            }
        }

        function rr(t, e) {
            return !t.composing && ("OPTION" === t.tagName || ir(t, e) || ar(t, e))
        }

        function ir(t, e) {
            var n = !0;
            try {
                n = document.activeElement !== t
            } catch (t) {}
            return n && t.value !== e
        }

        function ar(t, e) {
            var n = t.value,
                r = t._vModifiers;
            if (i(r)) {
                if (r.lazy) return !1;
                if (r.number) return p(n) !== p(e);
                if (r.trim) return n.trim() !== e.trim()
            }
            return n !== e
        }

        function or(t) {
            var e = sr(t.style);
            return t.staticStyle ? y(t.staticStyle, e) : e
        }

        function sr(t) {
            return Array.isArray(t) ? _(t) : "string" == typeof t ? gs(t) : t
        }

        function cr(t, e) {
            var n, r = {};
            if (e)
                for (var i = t; i.componentInstance;)(i = i.componentInstance._vnode) && i.data && (n = or(i.data)) && y(r, n);
            (n = or(t.data)) && y(r, n);
            for (var a = t; a = a.parent;) a.data && (n = or(a.data)) && y(r, n);
            return r
        }

        function lr(t, e) {
            var n = e.data,
                a = t.data;
            if (!(r(n.staticStyle) && r(n.style) && r(a.staticStyle) && r(a.style))) {
                var o, s, c = e.elm,
                    l = a.staticStyle,
                    u = a.normalizedStyle || a.style || {},
                    f = l || u,
                    d = sr(e.data.style) || {};
                e.data.normalizedStyle = i(d.__ob__) ? y({}, d) : d;
                var p = cr(e, !0);
                for (s in f) r(p[s]) && bs(c, s, "");
                for (s in p)(o = p[s]) !== f[s] && bs(c, s, null == o ? "" : o)
            }
        }

        function ur(t, e) {
            if (e && (e = e.trim()))
                if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
                    return t.classList.add(e)
                }) : t.classList.add(e);
                else {
                    var n = " " + (t.getAttribute("class") || "") + " ";
                    n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim())
                }
        }

        function fr(t, e) {
            if (e && (e = e.trim()))
                if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
                    return t.classList.remove(e)
                }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");
                else {
                    for (var n = " " + (t.getAttribute("class") || "") + " ", r = " " + e + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
                    n = n.trim(), n ? t.setAttribute("class", n) : t.removeAttribute("class")
                }
        }

        function dr(t) {
            if (t) {
                if ("object" == typeof t) {
                    var e = {};
                    return !1 !== t.css && y(e, $s(t.name || "v")), y(e, t), e
                }
                return "string" == typeof t ? $s(t) : void 0
            }
        }

        function pr(t) {
            Ps(function() {
                Ps(t)
            })
        }

        function hr(t, e) {
            var n = t._transitionClasses || (t._transitionClasses = []);
            n.indexOf(e) < 0 && (n.push(e), ur(t, e))
        }

        function mr(t, e) {
            t._transitionClasses && m(t._transitionClasses, e), fr(t, e)
        }

        function vr(t, e, n) {
            var r = gr(t, e),
                i = r.type,
                a = r.timeout,
                o = r.propCount;
            if (!i) return n();
            var s = i === Ts ? Is : Es,
                c = 0,
                l = function() {
                    t.removeEventListener(s, u), n()
                },
                u = function(e) {
                    e.target === t && ++c >= o && l()
                };
            setTimeout(function() {
                c < o && l()
            }, a + 1), t.addEventListener(s, u)
        }

        function gr(t, e) {
            var n, r = window.getComputedStyle(t),
                i = r[As + "Delay"].split(", "),
                a = r[As + "Duration"].split(", "),
                o = wr(i, a),
                s = r[Ss + "Delay"].split(", "),
                c = r[Ss + "Duration"].split(", "),
                l = wr(s, c),
                u = 0,
                f = 0;
            return e === Ts ? o > 0 && (n = Ts, u = o, f = a.length) : e === Os ? l > 0 && (n = Os, u = l, f = c.length) : (u = Math.max(o, l), n = u > 0 ? o > l ? Ts : Os : null, f = n ? n === Ts ? a.length : c.length : 0), {
                type: n,
                timeout: u,
                propCount: f,
                hasTransform: n === Ts && Ns.test(r[As + "Property"])
            }
        }

        function wr(t, e) {
            for (; t.length < e.length;) t = t.concat(t);
            return Math.max.apply(null, e.map(function(e, n) {
                return xr(e) + xr(t[n])
            }))
        }

        function xr(t) {
            return 1e3 * Number(t.slice(0, -1))
        }

        function br(t, e) {
            var n = t.elm;
            i(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
            var a = dr(t.data.transition);
            if (!r(a) && !i(n._enterCb) && 1 === n.nodeType) {
                for (var o = a.css, s = a.type, l = a.enterClass, u = a.enterToClass, f = a.enterActiveClass, d = a.appearClass, h = a.appearToClass, m = a.appearActiveClass, v = a.beforeEnter, g = a.enter, w = a.afterEnter, x = a.enterCancelled, b = a.beforeAppear, y = a.appear, _ = a.afterAppear, k = a.appearCancelled, $ = a.duration, C = po, O = po.$vnode; O && O.parent;) O = O.parent, C = O.context;
                var A = !C._isMounted || !t.isRootInsert;
                if (!A || y || "" === y) {
                    var I = A && d ? d : l,
                        S = A && m ? m : f,
                        E = A && h ? h : u,
                        P = A ? b || v : v,
                        N = A && "function" == typeof y ? y : g,
                        M = A ? _ || w : w,
                        j = A ? k || x : x,
                        L = p(c($) ? $.enter : $),
                        z = !1 !== o && !Sa,
                        R = kr(N),
                        F = n._enterCb = T(function() {
                            z && (mr(n, E), mr(n, S)), F.cancelled ? (z && mr(n, I), j && j(n)) : M && M(n), n._enterCb = null
                        });
                    t.data.show || pt(t, "insert", function() {
                        var e = n.parentNode,
                            r = e && e._pending && e._pending[t.key];
                        r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(), N && N(n, F)
                    }), P && P(n), z && (hr(n, I), hr(n, S), pr(function() {
                        mr(n, I), F.cancelled || (hr(n, E), R || (_r(L) ? setTimeout(F, L) : vr(n, s, F)))
                    })), t.data.show && (e && e(), N && N(n, F)), z || R || F()
                }
            }
        }

        function yr(t, e) {
            function n() {
                k.cancelled || (t.data.show || ((a.parentNode._pending || (a.parentNode._pending = {}))[t.key] = t), h && h(a), b && (hr(a, u), hr(a, d), pr(function() {
                    mr(a, u), k.cancelled || (hr(a, f), y || (_r(_) ? setTimeout(k, _) : vr(a, l, k)))
                })), m && m(a, k), b || y || k())
            }
            var a = t.elm;
            i(a._enterCb) && (a._enterCb.cancelled = !0, a._enterCb());
            var o = dr(t.data.transition);
            if (r(o) || 1 !== a.nodeType) return e();
            if (!i(a._leaveCb)) {
                var s = o.css,
                    l = o.type,
                    u = o.leaveClass,
                    f = o.leaveToClass,
                    d = o.leaveActiveClass,
                    h = o.beforeLeave,
                    m = o.leave,
                    v = o.afterLeave,
                    g = o.leaveCancelled,
                    w = o.delayLeave,
                    x = o.duration,
                    b = !1 !== s && !Sa,
                    y = kr(m),
                    _ = p(c(x) ? x.leave : x),
                    k = a._leaveCb = T(function() {
                        a.parentNode && a.parentNode._pending && (a.parentNode._pending[t.key] = null), b && (mr(a, f), mr(a, d)), k.cancelled ? (b && mr(a, u), g && g(a)) : (e(), v && v(a)), a._leaveCb = null
                    });
                w ? w(n) : n()
            }
        }

        function _r(t) {
            return "number" == typeof t && !isNaN(t)
        }

        function kr(t) {
            if (r(t)) return !1;
            var e = t.fns;
            return i(e) ? kr(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1
        }

        function $r(t, e) {
            !0 !== e.data.show && br(e)
        }

        function Cr(t, e, n) {
            Tr(t, e, n), (Ia || Ea) && setTimeout(function() {
                Tr(t, e, n)
            }, 0)
        }

        function Tr(t, e, n) {
            var r = e.value,
                i = t.multiple;
            if (!i || Array.isArray(r)) {
                for (var a, o, s = 0, c = t.options.length; s < c; s++)
                    if (o = t.options[s], i) a = C(r, Ar(o)) > -1, o.selected !== a && (o.selected = a);
                    else if ($(Ar(o), r)) return void(t.selectedIndex !== s && (t.selectedIndex = s));
                i || (t.selectedIndex = -1)
            }
        }

        function Or(t, e) {
            return e.every(function(e) {
                return !$(e, t)
            })
        }

        function Ar(t) {
            return "_value" in t ? t._value : t.value
        }

        function Ir(t) {
            t.target.composing = !0
        }

        function Sr(t) {
            t.target.composing && (t.target.composing = !1, Er(t.target, "input"))
        }

        function Er(t, e) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(e, !0, !0), t.dispatchEvent(n)
        }

        function Pr(t) {
            return !t.componentInstance || t.data && t.data.transition ? t : Pr(t.componentInstance._vnode)
        }

        function Nr(t) {
            var e = t && t.componentOptions;
            return e && e.Ctor.options.abstract ? Nr($t(e.children)) : t
        }

        function Mr(t) {
            var e = {},
                n = t.$options;
            for (var r in n.propsData) e[r] = t[r];
            var i = n._parentListeners;
            for (var a in i) e[da(a)] = i[a];
            return e
        }

        function jr(t, e) {
            if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
                props: e.componentOptions.propsData
            })
        }

        function Lr(t) {
            for (; t = t.parent;)
                if (t.data.transition) return !0
        }

        function zr(t, e) {
            return e.key === t.key && e.tag === t.tag
        }

        function Rr(t) {
            t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
        }

        function Fr(t) {
            t.data.newPos = t.elm.getBoundingClientRect()
        }

        function Dr(t) {
            var e = t.data.pos,
                n = t.data.newPos,
                r = e.left - n.left,
                i = e.top - n.top;
            if (r || i) {
                t.data.moved = !0;
                var a = t.elm.style;
                a.transform = a.WebkitTransform = "translate(" + r + "px," + i + "px)", a.transitionDuration = "0s"
            }
        }

        function Br(t, e) {
            var n = e ? Gs(e) : Vs;
            if (n.test(t)) {
                for (var r, i, a, o = [], s = [], c = n.lastIndex = 0; r = n.exec(t);) {
                    i = r.index, i > c && (s.push(a = t.slice(c, i)), o.push(JSON.stringify(a)));
                    var l = On(r[1].trim());
                    o.push("_s(" + l + ")"), s.push({
                        "@binding": l
                    }), c = i + r[0].length
                }
                return c < t.length && (s.push(a = t.slice(c)), o.push(JSON.stringify(a))), {
                    expression: o.join("+"),
                    tokens: s
                }
            }
        }

        function Hr(t, e) {
            var n = (e.warn, zn(t, "class"));
            n && (t.staticClass = JSON.stringify(n));
            var r = Ln(t, "class", !1);
            r && (t.classBinding = r)
        }

        function Ur(t) {
            var e = "";
            return t.staticClass && (e += "staticClass:" + t.staticClass + ","), t.classBinding && (e += "class:" + t.classBinding + ","), e
        }

        function Wr(t, e) {
            var n = (e.warn, zn(t, "style"));
            if (n) {
                t.staticStyle = JSON.stringify(gs(n))
            }
            var r = Ln(t, "style", !1);
            r && (t.styleBinding = r)
        }

        function Xr(t) {
            var e = "";
            return t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","), t.styleBinding && (e += "style:(" + t.styleBinding + "),"), e
        }

        function Yr(t, e) {
            var n = e ? Oc : Tc;
            return t.replace(n, function(t) {
                return Cc[t]
            })
        }

        function Vr(t, e) {
            function n(e) {
                u += e, t = t.substring(e)
            }

            function r(t, n, r) {
                var i, s;
                if (null == n && (n = u), null == r && (r = u), t && (s = t.toLowerCase()), t)
                    for (i = o.length - 1; i >= 0 && o[i].lowerCasedTag !== s; i--);
                else i = 0;
                if (i >= 0) {
                    for (var c = o.length - 1; c >= i; c--) e.end && e.end(o[c].tag, n, r);
                    o.length = i, a = i && o[i - 1].tag
                } else "br" === s ? e.start && e.start(t, [], !0, n, r) : "p" === s && (e.start && e.start(t, [], !1, n, r), e.end && e.end(t, n, r))
            }
            for (var i, a, o = [], s = e.expectHTML, c = e.isUnaryTag || ga, l = e.canBeLeftOpenTag || ga, u = 0; t;) {
                if (i = t, a && kc(a)) {
                    var f = 0,
                        d = a.toLowerCase(),
                        p = $c[d] || ($c[d] = new RegExp("([\\s\\S]*?)(</" + d + "[^>]*>)", "i")),
                        h = t.replace(p, function(t, n, r) {
                            return f = r.length, kc(d) || "noscript" === d || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Ic(d, n) && (n = n.slice(1)), e.chars && e.chars(n), ""
                        });
                    u += t.length - h.length, t = h, r(d, u - f, u)
                } else {
                    var m = t.indexOf("<");
                    if (0 === m) {
                        if (lc.test(t)) {
                            var v = t.indexOf("--\x3e");
                            if (v >= 0) {
                                e.shouldKeepComment && e.comment(t.substring(4, v)), n(v + 3);
                                continue
                            }
                        }
                        if (uc.test(t)) {
                            var g = t.indexOf("]>");
                            if (g >= 0) {
                                n(g + 2);
                                continue
                            }
                        }
                        var w = t.match(cc);
                        if (w) {
                            n(w[0].length);
                            continue
                        }
                        var x = t.match(sc);
                        if (x) {
                            var b = u;
                            n(x[0].length), r(x[1], b, u);
                            continue
                        }
                        var y = function() {
                            var e = t.match(ac);
                            if (e) {
                                var r = {
                                    tagName: e[1],
                                    attrs: [],
                                    start: u
                                };
                                n(e[0].length);
                                for (var i, a; !(i = t.match(oc)) && (a = t.match(nc));) n(a[0].length), r.attrs.push(a);
                                if (i) return r.unarySlash = i[1], n(i[0].length), r.end = u, r
                            }
                        }();
                        if (y) {
                            ! function(t) {
                                var n = t.tagName,
                                    i = t.unarySlash;
                                s && ("p" === a && ec(n) && r(a), l(n) && a === n && r(n));
                                for (var u = c(n) || !!i, f = t.attrs.length, d = new Array(f), p = 0; p < f; p++) {
                                    var h = t.attrs[p];
                                    fc && -1 === h[0].indexOf('""') && ("" === h[3] && delete h[3], "" === h[4] && delete h[4], "" === h[5] && delete h[5]);
                                    var m = h[3] || h[4] || h[5] || "",
                                        v = "a" === n && "href" === h[1] ? e.shouldDecodeNewlinesForHref : e.shouldDecodeNewlines;
                                    d[p] = {
                                        name: h[1],
                                        value: Yr(m, v)
                                    }
                                }
                                u || (o.push({
                                    tag: n,
                                    lowerCasedTag: n.toLowerCase(),
                                    attrs: d
                                }), a = n), e.start && e.start(n, d, u, t.start, t.end)
                            }(y), Ic(a, t) && n(1);
                            continue
                        }
                    }
                    var _ = void 0,
                        k = void 0,
                        $ = void 0;
                    if (m >= 0) {
                        for (k = t.slice(m); !(sc.test(k) || ac.test(k) || lc.test(k) || uc.test(k) || ($ = k.indexOf("<", 1)) < 0);) m += $, k = t.slice(m);
                        _ = t.substring(0, m), n(m)
                    }
                    m < 0 && (_ = t, t = ""), e.chars && _ && e.chars(_)
                }
                if (t === i) {
                    e.chars && e.chars(t);
                    break
                }
            }
            r()
        }

        function Zr(t, e, n) {
            return {
                type: 1,
                tag: t,
                attrsList: e,
                attrsMap: pi(e),
                parent: n,
                children: []
            }
        }

        function Gr(t, e) {
            function n(t) {
                t.pre && (s = !1), gc(t.tag) && (c = !1);
                for (var n = 0; n < vc.length; n++) vc[n](t, e)
            }
            dc = e.warn || In, gc = e.isPreTag || ga, wc = e.mustUseProp || ga, xc = e.getTagNamespace || ga, hc = Sn(e.modules, "transformNode"), mc = Sn(e.modules, "preTransformNode"), vc = Sn(e.modules, "postTransformNode"), pc = e.delimiters;
            var r, i, a = [],
                o = !1 !== e.preserveWhitespace,
                s = !1,
                c = !1;
            return Vr(t, {
                warn: dc,
                expectHTML: e.expectHTML,
                isUnaryTag: e.isUnaryTag,
                canBeLeftOpenTag: e.canBeLeftOpenTag,
                shouldDecodeNewlines: e.shouldDecodeNewlines,
                shouldDecodeNewlinesForHref: e.shouldDecodeNewlinesForHref,
                shouldKeepComment: e.comments,
                start: function(t, o, l) {
                    var u = i && i.ns || xc(t);
                    Ia && "svg" === u && (o = vi(o));
                    var f = Zr(t, o, i);
                    u && (f.ns = u), mi(f) && !Ra() && (f.forbidden = !0);
                    for (var d = 0; d < mc.length; d++) f = mc[d](f, e) || f;
                    if (s || (Kr(f), f.pre && (s = !0)), gc(f.tag) && (c = !0), s ? qr(f) : f.processed || (ei(f), ri(f), si(f), Jr(f, e)), r ? a.length || r.if && (f.elseif || f.else) && oi(r, {
                            exp: f.elseif,
                            block: f
                        }) : r = f, i && !f.forbidden)
                        if (f.elseif || f.else) ii(f, i);
                        else if (f.slotScope) {
                        i.plain = !1;
                        var p = f.slotTarget || '"default"';
                        (i.scopedSlots || (i.scopedSlots = {}))[p] = f
                    } else i.children.push(f), f.parent = i;
                    l ? n(f) : (i = f, a.push(f))
                },
                end: function() {
                    var t = a[a.length - 1],
                        e = t.children[t.children.length - 1];
                    e && 3 === e.type && " " === e.text && !c && t.children.pop(), a.length -= 1, i = a[a.length - 1], n(t)
                },
                chars: function(t) {
                    if (i && (!Ia || "textarea" !== i.tag || i.attrsMap.placeholder !== t)) {
                        var e = i.children;
                        if (t = c || t.trim() ? hi(i) ? t : Rc(t) : o && e.length ? " " : "") {
                            var n;
                            !s && " " !== t && (n = Br(t, pc)) ? e.push({
                                type: 2,
                                expression: n.expression,
                                tokens: n.tokens,
                                text: t
                            }) : " " === t && e.length && " " === e[e.length - 1].text || e.push({
                                type: 3,
                                text: t
                            })
                        }
                    }
                },
                comment: function(t) {
                    i.children.push({
                        type: 3,
                        text: t,
                        isComment: !0
                    })
                }
            }), r
        }

        function Kr(t) {
            null != zn(t, "v-pre") && (t.pre = !0)
        }

        function qr(t) {
            var e = t.attrsList.length;
            if (e)
                for (var n = t.attrs = new Array(e), r = 0; r < e; r++) n[r] = {
                    name: t.attrsList[r].name,
                    value: JSON.stringify(t.attrsList[r].value)
                };
            else t.pre || (t.plain = !0)
        }

        function Jr(t, e) {
            Qr(t), t.plain = !t.key && !t.attrsList.length, ti(t), ci(t), li(t);
            for (var n = 0; n < hc.length; n++) t = hc[n](t, e) || t;
            ui(t)
        }

        function Qr(t) {
            var e = Ln(t, "key");
            e && (t.key = e)
        }

        function ti(t) {
            var e = Ln(t, "ref");
            e && (t.ref = e, t.refInFor = fi(t))
        }

        function ei(t) {
            var e;
            if (e = zn(t, "v-for")) {
                var n = ni(e);
                n && y(t, n)
            }
        }

        function ni(t) {
            var e = t.match(Pc);
            if (e) {
                var n = {};
                n.for = e[2].trim();
                var r = e[1].trim().replace(Mc, ""),
                    i = r.match(Nc);
                return i ? (n.alias = r.replace(Nc, ""), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r, n
            }
        }

        function ri(t) {
            var e = zn(t, "v-if");
            if (e) t.if = e, oi(t, {
                exp: e,
                block: t
            });
            else {
                null != zn(t, "v-else") && (t.else = !0);
                var n = zn(t, "v-else-if");
                n && (t.elseif = n)
            }
        }

        function ii(t, e) {
            var n = ai(e.children);
            n && n.if && oi(n, {
                exp: t.elseif,
                block: t
            })
        }

        function ai(t) {
            for (var e = t.length; e--;) {
                if (1 === t[e].type) return t[e];
                t.pop()
            }
        }

        function oi(t, e) {
            t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e)
        }

        function si(t) {
            null != zn(t, "v-once") && (t.once = !0)
        }

        function ci(t) {
            if ("slot" === t.tag) t.slotName = Ln(t, "name");
            else {
                var e;
                "template" === t.tag ? (e = zn(t, "scope"), t.slotScope = e || zn(t, "slot-scope")) : (e = zn(t, "slot-scope")) && (t.slotScope = e);
                var n = Ln(t, "slot");
                n && (t.slotTarget = '""' === n ? '"default"' : n, "template" === t.tag || t.slotScope || Pn(t, "slot", n))
            }
        }

        function li(t) {
            var e;
            (e = Ln(t, "is")) && (t.component = e), null != zn(t, "inline-template") && (t.inlineTemplate = !0)
        }

        function ui(t) {
            var e, n, r, i, a, o, s, c = t.attrsList;
            for (e = 0, n = c.length; e < n; e++)
                if (r = i = c[e].name, a = c[e].value, Ec.test(r))
                    if (t.hasBindings = !0, o = di(r), o && (r = r.replace(zc, "")), Lc.test(r)) r = r.replace(Lc, ""), a = On(a), s = !1, o && (o.prop && (s = !0, "innerHtml" === (r = da(r)) && (r = "innerHTML")), o.camel && (r = da(r)), o.sync && jn(t, "update:" + da(r), Fn(a, "$event"))), s || !t.component && wc(t.tag, t.attrsMap.type, r) ? En(t, r, a) : Pn(t, r, a);
                    else if (Sc.test(r)) r = r.replace(Sc, ""), jn(t, r, a, o, !1, dc);
            else {
                r = r.replace(Ec, "");
                var l = r.match(jc),
                    u = l && l[1];
                u && (r = r.slice(0, -(u.length + 1))), Mn(t, r, i, a, u, o)
            } else {
                Pn(t, r, JSON.stringify(a)), !t.component && "muted" === r && wc(t.tag, t.attrsMap.type, r) && En(t, r, "true")
            }
        }

        function fi(t) {
            for (var e = t; e;) {
                if (void 0 !== e.for) return !0;
                e = e.parent
            }
            return !1
        }

        function di(t) {
            var e = t.match(zc);
            if (e) {
                var n = {};
                return e.forEach(function(t) {
                    n[t.slice(1)] = !0
                }), n
            }
        }

        function pi(t) {
            for (var e = {}, n = 0, r = t.length; n < r; n++) e[t[n].name] = t[n].value;
            return e
        }

        function hi(t) {
            return "script" === t.tag || "style" === t.tag
        }

        function mi(t) {
            return "style" === t.tag || "script" === t.tag && (!t.attrsMap.type || "text/javascript" === t.attrsMap.type)
        }

        function vi(t) {
            for (var e = [], n = 0; n < t.length; n++) {
                var r = t[n];
                Fc.test(r.name) || (r.name = r.name.replace(Dc, ""), e.push(r))
            }
            return e
        }

        function gi(t, e) {
            if ("input" === t.tag) {
                var n = t.attrsMap;
                if (!n["v-model"]) return;
                var r;
                if ((n[":type"] || n["v-bind:type"]) && (r = Ln(t, "type")), n.type || r || !n["v-bind"] || (r = "(" + n["v-bind"] + ").type"), r) {
                    var i = zn(t, "v-if", !0),
                        a = i ? "&&(" + i + ")" : "",
                        o = null != zn(t, "v-else", !0),
                        s = zn(t, "v-else-if", !0),
                        c = wi(t);
                    ei(c), Nn(c, "type", "checkbox"), Jr(c, e), c.processed = !0, c.if = "(" + r + ")==='checkbox'" + a, oi(c, {
                        exp: c.if,
                        block: c
                    });
                    var l = wi(t);
                    zn(l, "v-for", !0), Nn(l, "type", "radio"), Jr(l, e), oi(c, {
                        exp: "(" + r + ")==='radio'" + a,
                        block: l
                    });
                    var u = wi(t);
                    return zn(u, "v-for", !0), Nn(u, ":type", r), Jr(u, e), oi(c, {
                        exp: i,
                        block: u
                    }), o ? c.else = !0 : s && (c.elseif = s), c
                }
            }
        }

        function wi(t) {
            return Zr(t.tag, t.attrsList.slice(), t.parent)
        }

        function xi(t, e) {
            e.value && En(t, "textContent", "_s(" + e.value + ")")
        }

        function bi(t, e) {
            e.value && En(t, "innerHTML", "_s(" + e.value + ")")
        }

        function yi(t, e) {
            t && (bc = Xc(e.staticKeys || ""), yc = e.isReservedTag || ga, ki(t), $i(t, !1))
        }

        function _i(t) {
            return h("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (t ? "," + t : ""))
        }

        function ki(t) {
            if (t.static = Ci(t), 1 === t.type) {
                if (!yc(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;
                for (var e = 0, n = t.children.length; e < n; e++) {
                    var r = t.children[e];
                    ki(r), r.static || (t.static = !1)
                }
                if (t.ifConditions)
                    for (var i = 1, a = t.ifConditions.length; i < a; i++) {
                        var o = t.ifConditions[i].block;
                        ki(o), o.static || (t.static = !1)
                    }
            }
        }

        function $i(t, e) {
            if (1 === t.type) {
                if ((t.static || t.once) && (t.staticInFor = e), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void(t.staticRoot = !0);
                if (t.staticRoot = !1, t.children)
                    for (var n = 0, r = t.children.length; n < r; n++) $i(t.children[n], e || !!t.for);
                if (t.ifConditions)
                    for (var i = 1, a = t.ifConditions.length; i < a; i++) $i(t.ifConditions[i].block, e)
            }
        }

        function Ci(t) {
            return 2 !== t.type && (3 === t.type || !(!t.pre && (t.hasBindings || t.if || t.for || ca(t.tag) || !yc(t.tag) || Ti(t) || !Object.keys(t).every(bc))))
        }

        function Ti(t) {
            for (; t.parent;) {
                if (t = t.parent, "template" !== t.tag) return !1;
                if (t.for) return !0
            }
            return !1
        }

        function Oi(t, e, n) {
            var r = e ? "nativeOn:{" : "on:{";
            for (var i in t) r += '"' + i + '":' + Ai(i, t[i]) + ",";
            return r.slice(0, -1) + "}"
        }

        function Ai(t, e) {
            if (!e) return "function(){}";
            if (Array.isArray(e)) return "[" + e.map(function(e) {
                return Ai(t, e)
            }).join(",") + "]";
            var n = Vc.test(e.value),
                r = Yc.test(e.value);
            if (e.modifiers) {
                var i = "",
                    a = "",
                    o = [];
                for (var s in e.modifiers)
                    if (qc[s]) a += qc[s], Zc[s] && o.push(s);
                    else if ("exact" === s) {
                    var c = e.modifiers;
                    a += Kc(["ctrl", "shift", "alt", "meta"].filter(function(t) {
                        return !c[t]
                    }).map(function(t) {
                        return "$event." + t + "Key"
                    }).join("||"))
                } else o.push(s);
                o.length && (i += Ii(o)), a && (i += a);
                return "function($event){" + i + (n ? "return " + e.value + "($event)" : r ? "return (" + e.value + ")($event)" : e.value) + "}"
            }
            return n || r ? e.value : "function($event){" + e.value + "}"
        }

        function Ii(t) {
            return "if(!('button' in $event)&&" + t.map(Si).join("&&") + ")return null;"
        }

        function Si(t) {
            var e = parseInt(t, 10);
            if (e) return "$event.keyCode!==" + e;
            var n = Zc[t],
                r = Gc[t];
            return "_k($event.keyCode," + JSON.stringify(t) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")"
        }

        function Ei(t, e) {
            t.wrapListeners = function(t) {
                return "_g(" + t + "," + e.value + ")"
            }
        }

        function Pi(t, e) {
            t.wrapData = function(n) {
                return "_b(" + n + ",'" + t.tag + "'," + e.value + "," + (e.modifiers && e.modifiers.prop ? "true" : "false") + (e.modifiers && e.modifiers.sync ? ",true" : "") + ")"
            }
        }

        function Ni(t, e) {
            var n = new Qc(e);
            return {
                render: "with(this){return " + (t ? Mi(t, n) : '_c("div")') + "}",
                staticRenderFns: n.staticRenderFns
            }
        }

        function Mi(t, e) {
            if (t.staticRoot && !t.staticProcessed) return ji(t, e);
            if (t.once && !t.onceProcessed) return Li(t, e);
            if (t.for && !t.forProcessed) return Fi(t, e);
            if (t.if && !t.ifProcessed) return zi(t, e);
            if ("template" !== t.tag || t.slotTarget) {
                if ("slot" === t.tag) return Ji(t, e);
                var n;
                if (t.component) n = Qi(t.component, t, e);
                else {
                    var r = t.plain ? void 0 : Di(t, e),
                        i = t.inlineTemplate ? null : Yi(t, e, !0);
                    n = "_c('" + t.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")"
                }
                for (var a = 0; a < e.transforms.length; a++) n = e.transforms[a](t, n);
                return n
            }
            return Yi(t, e) || "void 0"
        }

        function ji(t, e) {
            return t.staticProcessed = !0, e.staticRenderFns.push("with(this){return " + Mi(t, e) + "}"), "_m(" + (e.staticRenderFns.length - 1) + (t.staticInFor ? ",true" : "") + ")"
        }

        function Li(t, e) {
            if (t.onceProcessed = !0, t.if && !t.ifProcessed) return zi(t, e);
            if (t.staticInFor) {
                for (var n = "", r = t.parent; r;) {
                    if (r.for) {
                        n = r.key;
                        break
                    }
                    r = r.parent
                }
                return n ? "_o(" + Mi(t, e) + "," + e.onceId++ + "," + n + ")" : Mi(t, e)
            }
            return ji(t, e)
        }

        function zi(t, e, n, r) {
            return t.ifProcessed = !0, Ri(t.ifConditions.slice(), e, n, r)
        }

        function Ri(t, e, n, r) {
            function i(t) {
                return n ? n(t, e) : t.once ? Li(t, e) : Mi(t, e)
            }
            if (!t.length) return r || "_e()";
            var a = t.shift();
            return a.exp ? "(" + a.exp + ")?" + i(a.block) + ":" + Ri(t, e, n, r) : "" + i(a.block)
        }

        function Fi(t, e, n, r) {
            var i = t.for,
                a = t.alias,
                o = t.iterator1 ? "," + t.iterator1 : "",
                s = t.iterator2 ? "," + t.iterator2 : "";
            return t.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + a + o + s + "){return " + (n || Mi)(t, e) + "})"
        }

        function Di(t, e) {
            var n = "{",
                r = Bi(t, e);
            r && (n += r + ","), t.key && (n += "key:" + t.key + ","), t.ref && (n += "ref:" + t.ref + ","), t.refInFor && (n += "refInFor:true,"), t.pre && (n += "pre:true,"), t.component && (n += 'tag:"' + t.tag + '",');
            for (var i = 0; i < e.dataGenFns.length; i++) n += e.dataGenFns[i](t);
            if (t.attrs && (n += "attrs:{" + ta(t.attrs) + "},"), t.props && (n += "domProps:{" + ta(t.props) + "},"), t.events && (n += Oi(t.events, !1, e.warn) + ","), t.nativeEvents && (n += Oi(t.nativeEvents, !0, e.warn) + ","), t.slotTarget && !t.slotScope && (n += "slot:" + t.slotTarget + ","), t.scopedSlots && (n += Ui(t.scopedSlots, e) + ","), t.model && (n += "model:{value:" + t.model.value + ",callback:" + t.model.callback + ",expression:" + t.model.expression + "},"), t.inlineTemplate) {
                var a = Hi(t, e);
                a && (n += a + ",")
            }
            return n = n.replace(/,$/, "") + "}", t.wrapData && (n = t.wrapData(n)), t.wrapListeners && (n = t.wrapListeners(n)), n
        }

        function Bi(t, e) {
            var n = t.directives;
            if (n) {
                var r, i, a, o, s = "directives:[",
                    c = !1;
                for (r = 0, i = n.length; r < i; r++) {
                    a = n[r], o = !0;
                    var l = e.directives[a.name];
                    l && (o = !!l(t, a, e.warn)), o && (c = !0, s += '{name:"' + a.name + '",rawName:"' + a.rawName + '"' + (a.value ? ",value:(" + a.value + "),expression:" + JSON.stringify(a.value) : "") + (a.arg ? ',arg:"' + a.arg + '"' : "") + (a.modifiers ? ",modifiers:" + JSON.stringify(a.modifiers) : "") + "},")
                }
                return c ? s.slice(0, -1) + "]" : void 0
            }
        }

        function Hi(t, e) {
            var n = t.children[0];
            if (1 === n.type) {
                var r = Ni(n, e.options);
                return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function(t) {
                    return "function(){" + t + "}"
                }).join(",") + "]}"
            }
        }

        function Ui(t, e) {
            return "scopedSlots:_u([" + Object.keys(t).map(function(n) {
                return Wi(n, t[n], e)
            }).join(",") + "])"
        }

        function Wi(t, e, n) {
            return e.for && !e.forProcessed ? Xi(t, e, n) : "{key:" + t + ",fn:function(" + String(e.slotScope) + "){return " + ("template" === e.tag ? e.if ? e.if+"?" + (Yi(e, n) || "undefined") + ":undefined" : Yi(e, n) || "undefined" : Mi(e, n)) + "}}"
        }

        function Xi(t, e, n) {
            var r = e.for,
                i = e.alias,
                a = e.iterator1 ? "," + e.iterator1 : "",
                o = e.iterator2 ? "," + e.iterator2 : "";
            return e.forProcessed = !0, "_l((" + r + "),function(" + i + a + o + "){return " + Wi(t, e, n) + "})"
        }

        function Yi(t, e, n, r, i) {
            var a = t.children;
            if (a.length) {
                var o = a[0];
                if (1 === a.length && o.for && "template" !== o.tag && "slot" !== o.tag) return (r || Mi)(o, e);
                var s = n ? Vi(a, e.maybeComponent) : 0,
                    c = i || Gi;
                return "[" + a.map(function(t) {
                    return c(t, e)
                }).join(",") + "]" + (s ? "," + s : "")
            }
        }

        function Vi(t, e) {
            for (var n = 0, r = 0; r < t.length; r++) {
                var i = t[r];
                if (1 === i.type) {
                    if (Zi(i) || i.ifConditions && i.ifConditions.some(function(t) {
                            return Zi(t.block)
                        })) {
                        n = 2;
                        break
                    }(e(i) || i.ifConditions && i.ifConditions.some(function(t) {
                        return e(t.block)
                    })) && (n = 1)
                }
            }
            return n
        }

        function Zi(t) {
            return void 0 !== t.for || "template" === t.tag || "slot" === t.tag
        }

        function Gi(t, e) {
            return 1 === t.type ? Mi(t, e) : 3 === t.type && t.isComment ? qi(t) : Ki(t)
        }

        function Ki(t) {
            return "_v(" + (2 === t.type ? t.expression : ea(JSON.stringify(t.text))) + ")"
        }

        function qi(t) {
            return "_e(" + JSON.stringify(t.text) + ")"
        }

        function Ji(t, e) {
            var n = t.slotName || '"default"',
                r = Yi(t, e),
                i = "_t(" + n + (r ? "," + r : ""),
                a = t.attrs && "{" + t.attrs.map(function(t) {
                    return da(t.name) + ":" + t.value
                }).join(",") + "}",
                o = t.attrsMap["v-bind"];
            return !a && !o || r || (i += ",null"), a && (i += "," + a), o && (i += (a ? "" : ",null") + "," + o), i + ")"
        }

        function Qi(t, e, n) {
            var r = e.inlineTemplate ? null : Yi(e, n, !0);
            return "_c(" + t + "," + Di(e, n) + (r ? "," + r : "") + ")"
        }

        function ta(t) {
            for (var e = "", n = 0; n < t.length; n++) {
                var r = t[n];
                e += '"' + r.name + '":' + ea(r.value) + ","
            }
            return e.slice(0, -1)
        }

        function ea(t) {
            return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
        }

        function na(t, e) {
            try {
                return new Function(t)
            } catch (n) {
                return e.push({
                    err: n,
                    code: t
                }), k
            }
        }

        function ra(t) {
            var e = Object.create(null);
            return function(n, r, i) {
                r = y({}, r);
                r.warn;
                delete r.warn;
                var a = r.delimiters ? String(r.delimiters) + n : n;
                if (e[a]) return e[a];
                var o = t(n, r),
                    s = {},
                    c = [];
                return s.render = na(o.render, c), s.staticRenderFns = o.staticRenderFns.map(function(t) {
                    return na(t, c)
                }), e[a] = s
            }
        }

        function ia(t) {
            return _c = _c || document.createElement("div"), _c.innerHTML = t ? '<a href="\n"/>' : '<div a="\n"/>', _c.innerHTML.indexOf("&#10;") > 0
        }

        function aa(t) {
            if (t.outerHTML) return t.outerHTML;
            var e = document.createElement("div");
            return e.appendChild(t.cloneNode(!0)), e.innerHTML
        }
        /*!
         * Vue.js v2.5.16
         * (c) 2014-2018 Evan You
         * Released under the MIT License.
         */
        var oa = Object.freeze({}),
            sa = Object.prototype.toString,
            ca = h("slot,component", !0),
            la = h("key,ref,slot,slot-scope,is"),
            ua = Object.prototype.hasOwnProperty,
            fa = /-(\w)/g,
            da = g(function(t) {
                return t.replace(fa, function(t, e) {
                    return e ? e.toUpperCase() : ""
                })
            }),
            pa = g(function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }),
            ha = /\B([A-Z])/g,
            ma = g(function(t) {
                return t.replace(ha, "-$1").toLowerCase()
            }),
            va = Function.prototype.bind ? x : w,
            ga = function(t, e, n) {
                return !1
            },
            wa = function(t) {
                return t
            },
            xa = "data-server-rendered",
            ba = ["component", "directive", "filter"],
            ya = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured"],
            _a = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: ga,
                isReservedAttr: ga,
                isUnknownElement: ga,
                getTagNamespace: k,
                parsePlatformTagName: wa,
                mustUseProp: ga,
                _lifecycleHooks: ya
            },
            ka = /[^\w.$]/,
            $a = "__proto__" in {},
            Ca = "undefined" != typeof window,
            Ta = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
            Oa = Ta && WXEnvironment.platform.toLowerCase(),
            Aa = Ca && window.navigator.userAgent.toLowerCase(),
            Ia = Aa && /msie|trident/.test(Aa),
            Sa = Aa && Aa.indexOf("msie 9.0") > 0,
            Ea = Aa && Aa.indexOf("edge/") > 0,
            Pa = (Aa && Aa.indexOf("android"), Aa && /iphone|ipad|ipod|ios/.test(Aa) || "ios" === Oa),
            Na = (Aa && /chrome\/\d+/.test(Aa), {}.watch),
            Ma = !1;
        if (Ca) try {
            var ja = {};
            Object.defineProperty(ja, "passive", {
                get: function() {
                    Ma = !0
                }
            }), window.addEventListener("test-passive", null, ja)
        } catch (t) {}
        var La, za, Ra = function() {
                return void 0 === La && (La = !Ca && !Ta && void 0 !== t && "server" === t.process.env.VUE_ENV), La
            },
            Fa = Ca && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
            Da = "undefined" != typeof Symbol && S(Symbol) && "undefined" != typeof Reflect && S(Reflect.ownKeys);
        za = "undefined" != typeof Set && S(Set) ? Set : function() {
            function t() {
                this.set = Object.create(null)
            }
            return t.prototype.has = function(t) {
                return !0 === this.set[t]
            }, t.prototype.add = function(t) {
                this.set[t] = !0
            }, t.prototype.clear = function() {
                this.set = Object.create(null)
            }, t
        }();
        var Ba = k,
            Ha = 0,
            Ua = function() {
                this.id = Ha++, this.subs = []
            };
        Ua.prototype.addSub = function(t) {
            this.subs.push(t)
        }, Ua.prototype.removeSub = function(t) {
            m(this.subs, t)
        }, Ua.prototype.depend = function() {
            Ua.target && Ua.target.addDep(this)
        }, Ua.prototype.notify = function() {
            for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) t[e].update()
        }, Ua.target = null;
        var Wa = [],
            Xa = function(t, e, n, r, i, a, o, s) {
                this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = a, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = o, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
            },
            Ya = {
                child: {
                    configurable: !0
                }
            };
        Ya.child.get = function() {
            return this.componentInstance
        }, Object.defineProperties(Xa.prototype, Ya);
        var Va = function(t) {
                void 0 === t && (t = "");
                var e = new Xa;
                return e.text = t, e.isComment = !0, e
            },
            Za = Array.prototype,
            Ga = Object.create(Za);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t) {
            var e = Za[t];
            A(Ga, t, function() {
                for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
                var i, a = e.apply(this, n),
                    o = this.__ob__;
                switch (t) {
                    case "push":
                    case "unshift":
                        i = n;
                        break;
                    case "splice":
                        i = n.slice(2)
                }
                return i && o.observeArray(i), o.dep.notify(), a
            })
        });
        var Ka = Object.getOwnPropertyNames(Ga),
            qa = !0,
            Ja = function(t) {
                if (this.value = t, this.dep = new Ua, this.vmCount = 0, A(t, "__ob__", this), Array.isArray(t)) {
                    ($a ? L : z)(t, Ga, Ka), this.observeArray(t)
                } else this.walk(t)
            };
        Ja.prototype.walk = function(t) {
            for (var e = Object.keys(t), n = 0; n < e.length; n++) F(t, e[n])
        }, Ja.prototype.observeArray = function(t) {
            for (var e = 0, n = t.length; e < n; e++) R(t[e])
        };
        var Qa = _a.optionMergeStrategies;
        Qa.data = function(t, e, n) {
            return n ? W(t, e, n) : e && "function" != typeof e ? t : W(t, e)
        }, ya.forEach(function(t) {
            Qa[t] = X
        }), ba.forEach(function(t) {
            Qa[t + "s"] = Y
        }), Qa.watch = function(t, e, n, r) {
            if (t === Na && (t = void 0), e === Na && (e = void 0), !e) return Object.create(t || null);
            if (!t) return e;
            var i = {};
            y(i, t);
            for (var a in e) {
                var o = i[a],
                    s = e[a];
                o && !Array.isArray(o) && (o = [o]), i[a] = o ? o.concat(s) : Array.isArray(s) ? s : [s]
            }
            return i
        }, Qa.props = Qa.methods = Qa.inject = Qa.computed = function(t, e, n, r) {
            if (!t) return e;
            var i = Object.create(null);
            return y(i, t), e && y(i, e), i
        }, Qa.provide = W;
        var to, eo, no = function(t, e) {
                return void 0 === e ? t : e
            },
            ro = [],
            io = !1,
            ao = !1;
        if (void 0 !== n && S(n)) eo = function() {
            n(ot)
        };
        else if ("undefined" == typeof MessageChannel || !S(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) eo = function() {
            setTimeout(ot, 0)
        };
        else {
            var oo = new MessageChannel,
                so = oo.port2;
            oo.port1.onmessage = ot, eo = function() {
                so.postMessage(1)
            }
        }
        if ("undefined" != typeof Promise && S(Promise)) {
            var co = Promise.resolve();
            to = function() {
                co.then(ot), Pa && setTimeout(k)
            }
        } else to = eo;
        var lo, uo = new za,
            fo = g(function(t) {
                var e = "&" === t.charAt(0);
                t = e ? t.slice(1) : t;
                var n = "~" === t.charAt(0);
                t = n ? t.slice(1) : t;
                var r = "!" === t.charAt(0);
                return t = r ? t.slice(1) : t, {
                    name: t,
                    once: n,
                    capture: r,
                    passive: e
                }
            }),
            po = null,
            ho = [],
            mo = [],
            vo = {},
            go = !1,
            wo = !1,
            xo = 0,
            bo = 0,
            yo = function(t, e, n, r, i) {
                this.vm = t, i && (t._watcher = this), t._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++bo, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new za, this.newDepIds = new za, this.expression = "", "function" == typeof e ? this.getter = e : (this.getter = I(e), this.getter || (this.getter = function() {})), this.value = this.lazy ? void 0 : this.get()
            };
        yo.prototype.get = function() {
            E(this);
            var t, e = this.vm;
            try {
                t = this.getter.call(e, e)
            } catch (t) {
                if (!this.user) throw t;
                rt(t, e, 'getter for watcher "' + this.expression + '"')
            } finally {
                this.deep && lt(t), P(), this.cleanupDeps()
            }
            return t
        }, yo.prototype.addDep = function(t) {
            var e = t.id;
            this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
        }, yo.prototype.cleanupDeps = function() {
            for (var t = this, e = this.deps.length; e--;) {
                var n = t.deps[e];
                t.newDepIds.has(n.id) || n.removeSub(t)
            }
            var r = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0
        }, yo.prototype.update = function() {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : Wt(this)
        }, yo.prototype.run = function() {
            if (this.active) {
                var t = this.get();
                if (t !== this.value || c(t) || this.deep) {
                    var e = this.value;
                    if (this.value = t, this.user) try {
                        this.cb.call(this.vm, t, e)
                    } catch (t) {
                        rt(t, this.vm, 'callback for watcher "' + this.expression + '"')
                    } else this.cb.call(this.vm, t, e)
                }
            }
        }, yo.prototype.evaluate = function() {
            this.value = this.get(), this.dirty = !1
        }, yo.prototype.depend = function() {
            for (var t = this, e = this.deps.length; e--;) t.deps[e].depend()
        }, yo.prototype.teardown = function() {
            var t = this;
            if (this.active) {
                this.vm._isBeingDestroyed || m(this.vm._watchers, this);
                for (var e = this.deps.length; e--;) t.deps[e].removeSub(t);
                this.active = !1
            }
        };
        var _o = {
                enumerable: !0,
                configurable: !0,
                get: k,
                set: k
            },
            ko = {
                lazy: !0
            };
        ve(ge.prototype);
        var $o = {
                init: function(t, e, n, r) {
                    if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                        var i = t;
                        $o.prepatch(i, i)
                    } else {
                        (t.componentInstance = _e(t, po, n, r)).$mount(e ? t.elm : void 0, e)
                    }
                },
                prepatch: function(t, e) {
                    var n = e.componentOptions;
                    Mt(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children)
                },
                insert: function(t) {
                    var e = t.context,
                        n = t.componentInstance;
                    n._isMounted || (n._isMounted = !0, Rt(n, "mounted")), t.data.keepAlive && (e._isMounted ? Ht(n) : Lt(n, !0))
                },
                destroy: function(t) {
                    var e = t.componentInstance;
                    e._isDestroyed || (t.data.keepAlive ? zt(e, !0) : e.$destroy())
                }
            },
            Co = Object.keys($o),
            To = 1,
            Oo = 2,
            Ao = 0;
        ! function(t) {
            t.prototype._init = function(t) {
                var e = this;
                e._uid = Ao++, e._isVue = !0, t && t._isComponent ? Se(e, t) : e.$options = K(Ee(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, Pt(e), Ct(e), Ie(e), Rt(e, "beforeCreate"), re(e), Yt(e), ne(e), Rt(e, "created"), e.$options.el && e.$mount(e.$options.el)
            }
        }(Me),
        function(t) {
            var e = {};
            e.get = function() {
                return this._data
            };
            var n = {};
            n.get = function() {
                return this._props
            }, Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), t.prototype.$set = D, t.prototype.$delete = B, t.prototype.$watch = function(t, e, n) {
                var r = this;
                if (l(e)) return ee(r, t, e, n);
                n = n || {}, n.user = !0;
                var i = new yo(r, t, e, n);
                return n.immediate && e.call(r, i.value),
                    function() {
                        i.teardown()
                    }
            }
        }(Me),
        function(t) {
            var e = /^hook:/;
            t.prototype.$on = function(t, n) {
                var r = this,
                    i = this;
                if (Array.isArray(t))
                    for (var a = 0, o = t.length; a < o; a++) r.$on(t[a], n);
                else(i._events[t] || (i._events[t] = [])).push(n), e.test(t) && (i._hasHookEvent = !0);
                return i
            }, t.prototype.$once = function(t, e) {
                function n() {
                    r.$off(t, n), e.apply(r, arguments)
                }
                var r = this;
                return n.fn = e, r.$on(t, n), r
            }, t.prototype.$off = function(t, e) {
                var n = this,
                    r = this;
                if (!arguments.length) return r._events = Object.create(null), r;
                if (Array.isArray(t)) {
                    for (var i = 0, a = t.length; i < a; i++) n.$off(t[i], e);
                    return r
                }
                var o = r._events[t];
                if (!o) return r;
                if (!e) return r._events[t] = null, r;
                if (e)
                    for (var s, c = o.length; c--;)
                        if ((s = o[c]) === e || s.fn === e) {
                            o.splice(c, 1);
                            break
                        }
                return r
            }, t.prototype.$emit = function(t) {
                var e = this,
                    n = e._events[t];
                if (n) {
                    n = n.length > 1 ? b(n) : n;
                    for (var r = b(arguments, 1), i = 0, a = n.length; i < a; i++) try {
                        n[i].apply(e, r)
                    } catch (n) {
                        rt(n, e, 'event handler for "' + t + '"')
                    }
                }
                return e
            }
        }(Me),
        function(t) {
            t.prototype._update = function(t, e) {
                var n = this;
                n._isMounted && Rt(n, "beforeUpdate");
                var r = n.$el,
                    i = n._vnode,
                    a = po;
                po = n, n._vnode = t, i ? n.$el = n.__patch__(i, t) : (n.$el = n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm), n.$options._parentElm = n.$options._refElm = null), po = a, r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
            }, t.prototype.$forceUpdate = function() {
                var t = this;
                t._watcher && t._watcher.update()
            }, t.prototype.$destroy = function() {
                var t = this;
                if (!t._isBeingDestroyed) {
                    Rt(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                    var e = t.$parent;
                    !e || e._isBeingDestroyed || t.$options.abstract || m(e.$children, t), t._watcher && t._watcher.teardown();
                    for (var n = t._watchers.length; n--;) t._watchers[n].teardown();
                    t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), Rt(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null)
                }
            }
        }(Me),
        function(t) {
            ve(t.prototype), t.prototype.$nextTick = function(t) {
                return ct(t, this)
            }, t.prototype._render = function() {
                var t = this,
                    e = t.$options,
                    n = e.render,
                    r = e._parentVnode;
                r && (t.$scopedSlots = r.data.scopedSlots || oa), t.$vnode = r;
                var i;
                try {
                    i = n.call(t._renderProxy, t.$createElement)
                } catch (e) {
                    rt(e, t, "render"), i = t._vnode
                }
                return i instanceof Xa || (i = Va()), i.parent = r, i
            }
        }(Me);
        var Io = [String, RegExp, Array],
            So = {
                name: "keep-alive",
                abstract: !0,
                props: {
                    include: Io,
                    exclude: Io,
                    max: [String, Number]
                },
                created: function() {
                    this.cache = Object.create(null), this.keys = []
                },
                destroyed: function() {
                    var t = this;
                    for (var e in t.cache) We(t.cache, e, t.keys)
                },
                mounted: function() {
                    var t = this;
                    this.$watch("include", function(e) {
                        Ue(t, function(t) {
                            return He(e, t)
                        })
                    }), this.$watch("exclude", function(e) {
                        Ue(t, function(t) {
                            return !He(e, t)
                        })
                    })
                },
                render: function() {
                    var t = this.$slots.default,
                        e = $t(t),
                        n = e && e.componentOptions;
                    if (n) {
                        var r = Be(n),
                            i = this,
                            a = i.include,
                            o = i.exclude;
                        if (a && (!r || !He(a, r)) || o && r && He(o, r)) return e;
                        var s = this,
                            c = s.cache,
                            l = s.keys,
                            u = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                        c[u] ? (e.componentInstance = c[u].componentInstance, m(l, u), l.push(u)) : (c[u] = e, l.push(u), this.max && l.length > parseInt(this.max) && We(c, l[0], l, this._vnode)), e.data.keepAlive = !0
                    }
                    return e || t && t[0]
                }
            },
            Eo = {
                KeepAlive: So
            };
        ! function(t) {
            var e = {};
            e.get = function() {
                return _a
            }, Object.defineProperty(t, "config", e), t.util = {
                warn: Ba,
                extend: y,
                mergeOptions: K,
                defineReactive: F
            }, t.set = D, t.delete = B, t.nextTick = ct, t.options = Object.create(null), ba.forEach(function(e) {
                t.options[e + "s"] = Object.create(null)
            }), t.options._base = t, y(t.options.components, Eo), je(t), Le(t), ze(t), De(t)
        }(Me), Object.defineProperty(Me.prototype, "$isServer", {
            get: Ra
        }), Object.defineProperty(Me.prototype, "$ssrContext", {
            get: function() {
                return this.$vnode && this.$vnode.ssrContext
            }
        }), Object.defineProperty(Me, "FunctionalRenderContext", {
            value: ge
        }), Me.version = "2.5.16";
        var Po, No, Mo, jo, Lo, zo, Ro, Fo, Do, Bo = h("style,class"),
            Ho = h("input,textarea,option,select,progress"),
            Uo = function(t, e, n) {
                return "value" === n && Ho(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t
            },
            Wo = h("contenteditable,draggable,spellcheck"),
            Xo = h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
            Yo = "http://www.w3.org/1999/xlink",
            Vo = function(t) {
                return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
            },
            Zo = function(t) {
                return Vo(t) ? t.slice(6, t.length) : ""
            },
            Go = function(t) {
                return null == t || !1 === t
            },
            Ko = {
                svg: "http://www.w3.org/2000/svg",
                math: "http://www.w3.org/1998/Math/MathML"
            },
            qo = h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
            Jo = h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
            Qo = function(t) {
                return "pre" === t
            },
            ts = function(t) {
                return qo(t) || Jo(t)
            },
            es = Object.create(null),
            ns = h("text,number,password,search,email,tel,url"),
            rs = Object.freeze({
                createElement: en,
                createElementNS: nn,
                createTextNode: rn,
                createComment: an,
                insertBefore: on,
                removeChild: sn,
                appendChild: cn,
                parentNode: ln,
                nextSibling: un,
                tagName: fn,
                setTextContent: dn,
                setStyleScope: pn
            }),
            is = {
                create: function(t, e) {
                    hn(e)
                },
                update: function(t, e) {
                    t.data.ref !== e.data.ref && (hn(t, !0), hn(e))
                },
                destroy: function(t) {
                    hn(t, !0)
                }
            },
            as = new Xa("", {}, []),
            os = ["create", "activate", "update", "remove", "destroy"],
            ss = {
                create: wn,
                update: wn,
                destroy: function(t) {
                    wn(t, as)
                }
            },
            cs = Object.create(null),
            ls = [is, ss],
            us = {
                create: kn,
                update: kn
            },
            fs = {
                create: Tn,
                update: Tn
            },
            ds = /[\w).+\-_$\]]/,
            ps = "__r",
            hs = "__c",
            ms = {
                create: er,
                update: er
            },
            vs = {
                create: nr,
                update: nr
            },
            gs = g(function(t) {
                var e = {},
                    n = /;(?![^(]*\))/g,
                    r = /:(.+)/;
                return t.split(n).forEach(function(t) {
                    if (t) {
                        var n = t.split(r);
                        n.length > 1 && (e[n[0].trim()] = n[1].trim())
                    }
                }), e
            }),
            ws = /^--/,
            xs = /\s*!important$/,
            bs = function(t, e, n) {
                if (ws.test(e)) t.style.setProperty(e, n);
                else if (xs.test(n)) t.style.setProperty(e, n.replace(xs, ""), "important");
                else {
                    var r = _s(e);
                    if (Array.isArray(n))
                        for (var i = 0, a = n.length; i < a; i++) t.style[r] = n[i];
                    else t.style[r] = n
                }
            },
            ys = ["Webkit", "Moz", "ms"],
            _s = g(function(t) {
                if (Do = Do || document.createElement("div").style, "filter" !== (t = da(t)) && t in Do) return t;
                for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < ys.length; n++) {
                    var r = ys[n] + e;
                    if (r in Do) return r
                }
            }),
            ks = {
                create: lr,
                update: lr
            },
            $s = g(function(t) {
                return {
                    enterClass: t + "-enter",
                    enterToClass: t + "-enter-to",
                    enterActiveClass: t + "-enter-active",
                    leaveClass: t + "-leave",
                    leaveToClass: t + "-leave-to",
                    leaveActiveClass: t + "-leave-active"
                }
            }),
            Cs = Ca && !Sa,
            Ts = "transition",
            Os = "animation",
            As = "transition",
            Is = "transitionend",
            Ss = "animation",
            Es = "animationend";
        Cs && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (As = "WebkitTransition", Is = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Ss = "WebkitAnimation", Es = "webkitAnimationEnd"));
        var Ps = Ca ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(t) {
                return t()
            },
            Ns = /\b(transform|all)(,|$)/,
            Ms = Ca ? {
                create: $r,
                activate: $r,
                remove: function(t, e) {
                    !0 !== t.data.show ? yr(t, e) : e()
                }
            } : {},
            js = [us, fs, ms, vs, ks, Ms],
            Ls = js.concat(ls),
            zs = function(t) {
                function e(t) {
                    return new Xa(E.tagName(t).toLowerCase(), {}, [], void 0, t)
                }

                function n(t, e) {
                    function n() {
                        0 == --n.listeners && o(t)
                    }
                    return n.listeners = e, n
                }

                function o(t) {
                    var e = E.parentNode(t);
                    i(e) && E.removeChild(e, t)
                }

                function c(t, e, n, r, o, s, c) {
                    if (i(t.elm) && i(s) && (t = s[c] = M(t)), t.isRootInsert = !o, !l(t, e, n, r)) {
                        var u = t.data,
                            f = t.children,
                            h = t.tag;
                        i(h) ? (t.elm = t.ns ? E.createElementNS(t.ns, h) : E.createElement(h, t), g(t), p(t, f, e), i(u) && v(t, e), d(n, t.elm, r)) : a(t.isComment) ? (t.elm = E.createComment(t.text), d(n, t.elm, r)) : (t.elm = E.createTextNode(t.text), d(n, t.elm, r))
                    }
                }

                function l(t, e, n, r) {
                    var o = t.data;
                    if (i(o)) {
                        var s = i(t.componentInstance) && o.keepAlive;
                        if (i(o = o.hook) && i(o = o.init) && o(t, !1, n, r), i(t.componentInstance)) return u(t, e), a(s) && f(t, e, n, r), !0
                    }
                }

                function u(t, e) {
                    i(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, m(t) ? (v(t, e), g(t)) : (hn(t), e.push(t))
                }

                function f(t, e, n, r) {
                    for (var a, o = t; o.componentInstance;)
                        if (o = o.componentInstance._vnode, i(a = o.data) && i(a = a.transition)) {
                            for (a = 0; a < I.activate.length; ++a) I.activate[a](as, o);
                            e.push(o);
                            break
                        }
                    d(n, t.elm, r)
                }

                function d(t, e, n) {
                    i(t) && (i(n) ? n.parentNode === t && E.insertBefore(t, e, n) : E.appendChild(t, e))
                }

                function p(t, e, n) {
                    if (Array.isArray(e))
                        for (var r = 0; r < e.length; ++r) c(e[r], n, t.elm, null, !0, e, r);
                    else s(t.text) && E.appendChild(t.elm, E.createTextNode(String(t.text)))
                }

                function m(t) {
                    for (; t.componentInstance;) t = t.componentInstance._vnode;
                    return i(t.tag)
                }

                function v(t, e) {
                    for (var n = 0; n < I.create.length; ++n) I.create[n](as, t);
                    O = t.data.hook, i(O) && (i(O.create) && O.create(as, t), i(O.insert) && e.push(t))
                }

                function g(t) {
                    var e;
                    if (i(e = t.fnScopeId)) E.setStyleScope(t.elm, e);
                    else
                        for (var n = t; n;) i(e = n.context) && i(e = e.$options._scopeId) && E.setStyleScope(t.elm, e), n = n.parent;
                    i(e = po) && e !== t.context && e !== t.fnContext && i(e = e.$options._scopeId) && E.setStyleScope(t.elm, e)
                }

                function w(t, e, n, r, i, a) {
                    for (; r <= i; ++r) c(n[r], a, t, e, !1, n, r)
                }

                function x(t) {
                    var e, n, r = t.data;
                    if (i(r))
                        for (i(e = r.hook) && i(e = e.destroy) && e(t), e = 0; e < I.destroy.length; ++e) I.destroy[e](t);
                    if (i(e = t.children))
                        for (n = 0; n < t.children.length; ++n) x(t.children[n])
                }

                function b(t, e, n, r) {
                    for (; n <= r; ++n) {
                        var a = e[n];
                        i(a) && (i(a.tag) ? (y(a), x(a)) : o(a.elm))
                    }
                }

                function y(t, e) {
                    if (i(e) || i(t.data)) {
                        var r, a = I.remove.length + 1;
                        for (i(e) ? e.listeners += a : e = n(t.elm, a), i(r = t.componentInstance) && i(r = r._vnode) && i(r.data) && y(r, e), r = 0; r < I.remove.length; ++r) I.remove[r](t, e);
                        i(r = t.data.hook) && i(r = r.remove) ? r(t, e) : e()
                    } else o(t.elm)
                }

                function _(t, e, n, a, o) {
                    for (var s, l, u, f, d = 0, p = 0, h = e.length - 1, m = e[0], v = e[h], g = n.length - 1, x = n[0], y = n[g], _ = !o; d <= h && p <= g;) r(m) ? m = e[++d] : r(v) ? v = e[--h] : mn(m, x) ? ($(m, x, a), m = e[++d], x = n[++p]) : mn(v, y) ? ($(v, y, a), v = e[--h], y = n[--g]) : mn(m, y) ? ($(m, y, a), _ && E.insertBefore(t, m.elm, E.nextSibling(v.elm)), m = e[++d], y = n[--g]) : mn(v, x) ? ($(v, x, a), _ && E.insertBefore(t, v.elm, m.elm), v = e[--h], x = n[++p]) : (r(s) && (s = gn(e, d, h)), l = i(x.key) ? s[x.key] : k(x, e, d, h), r(l) ? c(x, a, t, m.elm, !1, n, p) : (u = e[l], mn(u, x) ? ($(u, x, a), e[l] = void 0, _ && E.insertBefore(t, u.elm, m.elm)) : c(x, a, t, m.elm, !1, n, p)), x = n[++p]);
                    d > h ? (f = r(n[g + 1]) ? null : n[g + 1].elm, w(t, f, n, p, g, a)) : p > g && b(t, e, d, h)
                }

                function k(t, e, n, r) {
                    for (var a = n; a < r; a++) {
                        var o = e[a];
                        if (i(o) && mn(t, o)) return a
                    }
                }

                function $(t, e, n, o) {
                    if (t !== e) {
                        var s = e.elm = t.elm;
                        if (a(t.isAsyncPlaceholder)) return void(i(e.asyncFactory.resolved) ? T(t.elm, e, n) : e.isAsyncPlaceholder = !0);
                        if (a(e.isStatic) && a(t.isStatic) && e.key === t.key && (a(e.isCloned) || a(e.isOnce))) return void(e.componentInstance = t.componentInstance);
                        var c, l = e.data;
                        i(l) && i(c = l.hook) && i(c = c.prepatch) && c(t, e);
                        var u = t.children,
                            f = e.children;
                        if (i(l) && m(e)) {
                            for (c = 0; c < I.update.length; ++c) I.update[c](t, e);
                            i(c = l.hook) && i(c = c.update) && c(t, e)
                        }
                        r(e.text) ? i(u) && i(f) ? u !== f && _(s, u, f, n, o) : i(f) ? (i(t.text) && E.setTextContent(s, ""), w(s, null, f, 0, f.length - 1, n)) : i(u) ? b(s, u, 0, u.length - 1) : i(t.text) && E.setTextContent(s, "") : t.text !== e.text && E.setTextContent(s, e.text), i(l) && i(c = l.hook) && i(c = c.postpatch) && c(t, e)
                    }
                }

                function C(t, e, n) {
                    if (a(n) && i(t.parent)) t.parent.data.pendingInsert = e;
                    else
                        for (var r = 0; r < e.length; ++r) e[r].data.hook.insert(e[r])
                }

                function T(t, e, n, r) {
                    var o, s = e.tag,
                        c = e.data,
                        l = e.children;
                    if (r = r || c && c.pre, e.elm = t, a(e.isComment) && i(e.asyncFactory)) return e.isAsyncPlaceholder = !0, !0;
                    if (i(c) && (i(o = c.hook) && i(o = o.init) && o(e, !0), i(o = e.componentInstance))) return u(e, n), !0;
                    if (i(s)) {
                        if (i(l))
                            if (t.hasChildNodes())
                                if (i(o = c) && i(o = o.domProps) && i(o = o.innerHTML)) {
                                    if (o !== t.innerHTML) return !1
                                } else {
                                    for (var f = !0, d = t.firstChild, h = 0; h < l.length; h++) {
                                        if (!d || !T(d, l[h], n, r)) {
                                            f = !1;
                                            break
                                        }
                                        d = d.nextSibling
                                    }
                                    if (!f || d) return !1
                                }
                        else p(e, l, n);
                        if (i(c)) {
                            var m = !1;
                            for (var g in c)
                                if (!P(g)) {
                                    m = !0, v(e, n);
                                    break
                                }!m && c.class && lt(c.class)
                        }
                    } else t.data !== e.text && (t.data = e.text);
                    return !0
                }
                var O, A, I = {},
                    S = t.modules,
                    E = t.nodeOps;
                for (O = 0; O < os.length; ++O)
                    for (I[os[O]] = [], A = 0; A < S.length; ++A) i(S[A][os[O]]) && I[os[O]].push(S[A][os[O]]);
                var P = h("attrs,class,staticClass,staticStyle,key");
                return function(t, n, o, s, l, u) {
                    if (r(n)) return void(i(t) && x(t));
                    var f = !1,
                        d = [];
                    if (r(t)) f = !0, c(n, d, l, u);
                    else {
                        var p = i(t.nodeType);
                        if (!p && mn(t, n)) $(t, n, d, s);
                        else {
                            if (p) {
                                if (1 === t.nodeType && t.hasAttribute(xa) && (t.removeAttribute(xa), o = !0), a(o) && T(t, n, d)) return C(n, d, !0), t;
                                t = e(t)
                            }
                            var h = t.elm,
                                v = E.parentNode(h);
                            if (c(n, d, h._leaveCb ? null : v, E.nextSibling(h)), i(n.parent))
                                for (var g = n.parent, w = m(n); g;) {
                                    for (var y = 0; y < I.destroy.length; ++y) I.destroy[y](g);
                                    if (g.elm = n.elm, w) {
                                        for (var _ = 0; _ < I.create.length; ++_) I.create[_](as, g);
                                        var k = g.data.hook.insert;
                                        if (k.merged)
                                            for (var O = 1; O < k.fns.length; O++) k.fns[O]()
                                    } else hn(g);
                                    g = g.parent
                                }
                            i(v) ? b(v, [t], 0, 0) : i(t.tag) && x(t)
                        }
                    }
                    return C(n, d, f), n.elm
                }
            }({
                nodeOps: rs,
                modules: Ls
            });
        Sa && document.addEventListener("selectionchange", function() {
            var t = document.activeElement;
            t && t.vmodel && Er(t, "input")
        });
        var Rs = {
                inserted: function(t, e, n, r) {
                    "select" === n.tag ? (r.elm && !r.elm._vOptions ? pt(n, "postpatch", function() {
                        Rs.componentUpdated(t, e, n)
                    }) : Cr(t, e, n.context), t._vOptions = [].map.call(t.options, Ar)) : ("textarea" === n.tag || ns(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", Ir), t.addEventListener("compositionend", Sr), t.addEventListener("change", Sr), Sa && (t.vmodel = !0)))
                },
                componentUpdated: function(t, e, n) {
                    if ("select" === n.tag) {
                        Cr(t, e, n.context);
                        var r = t._vOptions,
                            i = t._vOptions = [].map.call(t.options, Ar);
                        if (i.some(function(t, e) {
                                return !$(t, r[e])
                            })) {
                            (t.multiple ? e.value.some(function(t) {
                                return Or(t, i)
                            }) : e.value !== e.oldValue && Or(e.value, i)) && Er(t, "change")
                        }
                    }
                }
            },
            Fs = {
                bind: function(t, e, n) {
                    var r = e.value;
                    n = Pr(n);
                    var i = n.data && n.data.transition,
                        a = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                    r && i ? (n.data.show = !0, br(n, function() {
                        t.style.display = a
                    })) : t.style.display = r ? a : "none"
                },
                update: function(t, e, n) {
                    var r = e.value;
                    !r != !e.oldValue && (n = Pr(n), n.data && n.data.transition ? (n.data.show = !0, r ? br(n, function() {
                        t.style.display = t.__vOriginalDisplay
                    }) : yr(n, function() {
                        t.style.display = "none"
                    })) : t.style.display = r ? t.__vOriginalDisplay : "none")
                },
                unbind: function(t, e, n, r, i) {
                    i || (t.style.display = t.__vOriginalDisplay)
                }
            },
            Ds = {
                model: Rs,
                show: Fs
            },
            Bs = {
                name: String,
                appear: Boolean,
                css: Boolean,
                mode: String,
                type: String,
                enterClass: String,
                leaveClass: String,
                enterToClass: String,
                leaveToClass: String,
                enterActiveClass: String,
                leaveActiveClass: String,
                appearClass: String,
                appearActiveClass: String,
                appearToClass: String,
                duration: [Number, String, Object]
            },
            Hs = {
                name: "transition",
                props: Bs,
                abstract: !0,
                render: function(t) {
                    var e = this,
                        n = this.$slots.default;
                    if (n && (n = n.filter(function(t) {
                            return t.tag || kt(t)
                        }), n.length)) {
                        var r = this.mode,
                            i = n[0];
                        if (Lr(this.$vnode)) return i;
                        var a = Nr(i);
                        if (!a) return i;
                        if (this._leaving) return jr(t, i);
                        var o = "__transition-" + this._uid + "-";
                        a.key = null == a.key ? a.isComment ? o + "comment" : o + a.tag : s(a.key) ? 0 === String(a.key).indexOf(o) ? a.key : o + a.key : a.key;
                        var c = (a.data || (a.data = {})).transition = Mr(this),
                            l = this._vnode,
                            u = Nr(l);
                        if (a.data.directives && a.data.directives.some(function(t) {
                                return "show" === t.name
                            }) && (a.data.show = !0), u && u.data && !zr(a, u) && !kt(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) {
                            var f = u.data.transition = y({}, c);
                            if ("out-in" === r) return this._leaving = !0, pt(f, "afterLeave", function() {
                                e._leaving = !1, e.$forceUpdate()
                            }), jr(t, i);
                            if ("in-out" === r) {
                                if (kt(a)) return l;
                                var d, p = function() {
                                    d()
                                };
                                pt(c, "afterEnter", p), pt(c, "enterCancelled", p), pt(f, "delayLeave", function(t) {
                                    d = t
                                })
                            }
                        }
                        return i
                    }
                }
            },
            Us = y({
                tag: String,
                moveClass: String
            }, Bs);
        delete Us.mode;
        var Ws = {
                props: Us,
                render: function(t) {
                    for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], a = this.children = [], o = Mr(this), s = 0; s < i.length; s++) {
                        var c = i[s];
                        if (c.tag)
                            if (null != c.key && 0 !== String(c.key).indexOf("__vlist")) a.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = o;
                            else;
                    }
                    if (r) {
                        for (var l = [], u = [], f = 0; f < r.length; f++) {
                            var d = r[f];
                            d.data.transition = o, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? l.push(d) : u.push(d)
                        }
                        this.kept = t(e, null, l), this.removed = u
                    }
                    return t(e, null, a)
                },
                beforeUpdate: function() {
                    this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept
                },
                updated: function() {
                    var t = this.prevChildren,
                        e = this.moveClass || (this.name || "v") + "-move";
                    t.length && this.hasMove(t[0].elm, e) && (t.forEach(Rr), t.forEach(Fr), t.forEach(Dr), this._reflow = document.body.offsetHeight, t.forEach(function(t) {
                        if (t.data.moved) {
                            var n = t.elm,
                                r = n.style;
                            hr(n, e), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Is, n._moveCb = function t(r) {
                                r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Is, t), n._moveCb = null, mr(n, e))
                            })
                        }
                    }))
                },
                methods: {
                    hasMove: function(t, e) {
                        if (!Cs) return !1;
                        if (this._hasMove) return this._hasMove;
                        var n = t.cloneNode();
                        t._transitionClasses && t._transitionClasses.forEach(function(t) {
                            fr(n, t)
                        }), ur(n, e), n.style.display = "none", this.$el.appendChild(n);
                        var r = gr(n);
                        return this.$el.removeChild(n), this._hasMove = r.hasTransform
                    }
                }
            },
            Xs = {
                Transition: Hs,
                TransitionGroup: Ws
            };
        Me.config.mustUseProp = Uo, Me.config.isReservedTag = ts, Me.config.isReservedAttr = Bo, Me.config.getTagNamespace = Je, Me.config.isUnknownElement = Qe, y(Me.options.directives, Ds), y(Me.options.components, Xs), Me.prototype.__patch__ = Ca ? zs : k, Me.prototype.$mount = function(t, e) {
            return t = t && Ca ? tn(t) : void 0, Nt(this, t, e)
        }, Ca && setTimeout(function() {
            _a.devtools && Fa && Fa.emit("init", Me)
        }, 0);
        var Ys, Vs = /\{\{((?:.|\n)+?)\}\}/g,
            Zs = /[-.*+?^${}()|[\]\/\\]/g,
            Gs = g(function(t) {
                var e = t[0].replace(Zs, "\\$&"),
                    n = t[1].replace(Zs, "\\$&");
                return new RegExp(e + "((?:.|\\n)+?)" + n, "g")
            }),
            Ks = {
                staticKeys: ["staticClass"],
                transformNode: Hr,
                genData: Ur
            },
            qs = {
                staticKeys: ["staticStyle"],
                transformNode: Wr,
                genData: Xr
            },
            Js = {
                decode: function(t) {
                    return Ys = Ys || document.createElement("div"), Ys.innerHTML = t, Ys.textContent
                }
            },
            Qs = h("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
            tc = h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
            ec = h("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
            nc = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
            rc = "[a-zA-Z_][\\w\\-\\.]*",
            ic = "((?:" + rc + "\\:)?" + rc + ")",
            ac = new RegExp("^<" + ic),
            oc = /^\s*(\/?)>/,
            sc = new RegExp("^<\\/" + ic + "[^>]*>"),
            cc = /^<!DOCTYPE [^>]+>/i,
            lc = /^<!\--/,
            uc = /^<!\[/,
            fc = !1;
        "x".replace(/x(.)?/g, function(t, e) {
            fc = "" === e
        });
        var dc, pc, hc, mc, vc, gc, wc, xc, bc, yc, _c, kc = h("script,style,textarea", !0),
            $c = {},
            Cc = {
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&amp;": "&",
                "&#10;": "\n",
                "&#9;": "\t"
            },
            Tc = /&(?:lt|gt|quot|amp);/g,
            Oc = /&(?:lt|gt|quot|amp|#10|#9);/g,
            Ac = h("pre,textarea", !0),
            Ic = function(t, e) {
                return t && Ac(t) && "\n" === e[0]
            },
            Sc = /^@|^v-on:/,
            Ec = /^v-|^@|^:/,
            Pc = /([^]*?)\s+(?:in|of)\s+([^]*)/,
            Nc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
            Mc = /^\(|\)$/g,
            jc = /:(.*)$/,
            Lc = /^:|^v-bind:/,
            zc = /\.[^.]+/g,
            Rc = g(Js.decode),
            Fc = /^xmlns:NS\d+/,
            Dc = /^NS\d+:/,
            Bc = {
                preTransformNode: gi
            },
            Hc = [Ks, qs, Bc],
            Uc = {
                model: Yn,
                text: xi,
                html: bi
            },
            Wc = {
                expectHTML: !0,
                modules: Hc,
                directives: Uc,
                isPreTag: Qo,
                isUnaryTag: Qs,
                mustUseProp: Uo,
                canBeLeftOpenTag: tc,
                isReservedTag: ts,
                getTagNamespace: Je,
                staticKeys: function(t) {
                    return t.reduce(function(t, e) {
                        return t.concat(e.staticKeys || [])
                    }, []).join(",")
                }(Hc)
            },
            Xc = g(_i),
            Yc = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
            Vc = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
            Zc = {
                esc: 27,
                tab: 9,
                enter: 13,
                space: 32,
                up: 38,
                left: 37,
                right: 39,
                down: 40,
                delete: [8, 46]
            },
            Gc = {
                esc: "Escape",
                tab: "Tab",
                enter: "Enter",
                space: " ",
                up: ["Up", "ArrowUp"],
                left: ["Left", "ArrowLeft"],
                right: ["Right", "ArrowRight"],
                down: ["Down", "ArrowDown"],
                delete: ["Backspace", "Delete"]
            },
            Kc = function(t) {
                return "if(" + t + ")return null;"
            },
            qc = {
                stop: "$event.stopPropagation();",
                prevent: "$event.preventDefault();",
                self: Kc("$event.target !== $event.currentTarget"),
                ctrl: Kc("!$event.ctrlKey"),
                shift: Kc("!$event.shiftKey"),
                alt: Kc("!$event.altKey"),
                meta: Kc("!$event.metaKey"),
                left: Kc("'button' in $event && $event.button !== 0"),
                middle: Kc("'button' in $event && $event.button !== 1"),
                right: Kc("'button' in $event && $event.button !== 2")
            },
            Jc = {
                on: Ei,
                bind: Pi,
                cloak: k
            },
            Qc = function(t) {
                this.options = t, this.warn = t.warn || In, this.transforms = Sn(t.modules, "transformCode"), this.dataGenFns = Sn(t.modules, "genData"), this.directives = y(y({}, Jc), t.directives);
                var e = t.isReservedTag || ga;
                this.maybeComponent = function(t) {
                    return !e(t.tag)
                }, this.onceId = 0, this.staticRenderFns = []
            },
            tl = (new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)"), function(t) {
                return function(e) {
                    function n(n, r) {
                        var i = Object.create(e),
                            a = [],
                            o = [];
                        if (i.warn = function(t, e) {
                                (e ? o : a).push(t)
                            }, r) {
                            r.modules && (i.modules = (e.modules || []).concat(r.modules)), r.directives && (i.directives = y(Object.create(e.directives || null), r.directives));
                            for (var s in r) "modules" !== s && "directives" !== s && (i[s] = r[s])
                        }
                        var c = t(n, i);
                        return c.errors = a, c.tips = o, c
                    }
                    return {
                        compile: n,
                        compileToFunctions: ra(n)
                    }
                }
            }(function(t, e) {
                var n = Gr(t.trim(), e);
                !1 !== e.optimize && yi(n, e);
                var r = Ni(n, e);
                return {
                    ast: n,
                    render: r.render,
                    staticRenderFns: r.staticRenderFns
                }
            })),
            el = tl(Wc),
            nl = el.compileToFunctions,
            rl = !!Ca && ia(!1),
            il = !!Ca && ia(!0),
            al = g(function(t) {
                var e = tn(t);
                return e && e.innerHTML
            }),
            ol = Me.prototype.$mount;
        Me.prototype.$mount = function(t, e) {
            if ((t = t && tn(t)) === document.body || t === document.documentElement) return this;
            var n = this.$options;
            if (!n.render) {
                var r = n.template;
                if (r)
                    if ("string" == typeof r) "#" === r.charAt(0) && (r = al(r));
                    else {
                        if (!r.nodeType) return this;
                        r = r.innerHTML
                    }
                else t && (r = aa(t));
                if (r) {
                    var i = nl(r, {
                            shouldDecodeNewlines: rl,
                            shouldDecodeNewlinesForHref: il,
                            delimiters: n.delimiters,
                            comments: n.comments
                        }, this),
                        a = i.render,
                        o = i.staticRenderFns;
                    n.render = a, n.staticRenderFns = o
                }
            }
            return ol.call(this, t, e)
        }, Me.compile = nl, e.a = Me
    }).call(e, n(3), n(14).setImmediate)
}, function(t, e, n) {
    (function(t) {
        function r(t, e) {
            this._id = t, this._clearFn = e
        }
        var i = void 0 !== t && t || "undefined" != typeof self && self || window,
            a = Function.prototype.apply;
        e.setTimeout = function() {
            return new r(a.call(setTimeout, i, arguments), clearTimeout)
        }, e.setInterval = function() {
            return new r(a.call(setInterval, i, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function(t) {
            t && t.close()
        }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
            this._clearFn.call(i, this._id)
        }, e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout()
            }, e))
        }, n(15), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }).call(e, n(3))
}, function(t, e, n) {
    (function(t, e) {
        ! function(t, n) {
            "use strict";

            function r(t) {
                "function" != typeof t && (t = new Function("" + t));
                for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                var r = {
                    callback: t,
                    args: e
                };
                return l[c] = r, s(c), c++
            }

            function i(t) {
                delete l[t]
            }

            function a(t) {
                var e = t.callback,
                    r = t.args;
                switch (r.length) {
                    case 0:
                        e();
                        break;
                    case 1:
                        e(r[0]);
                        break;
                    case 2:
                        e(r[0], r[1]);
                        break;
                    case 3:
                        e(r[0], r[1], r[2]);
                        break;
                    default:
                        e.apply(n, r)
                }
            }

            function o(t) {
                if (u) setTimeout(o, 0, t);
                else {
                    var e = l[t];
                    if (e) {
                        u = !0;
                        try {
                            a(e)
                        } finally {
                            i(t), u = !1
                        }
                    }
                }
            }
            if (!t.setImmediate) {
                var s, c = 1,
                    l = {},
                    u = !1,
                    f = t.document,
                    d = Object.getPrototypeOf && Object.getPrototypeOf(t);
                d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? function() {
                    s = function(t) {
                        e.nextTick(function() {
                            o(t)
                        })
                    }
                }() : function() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0,
                            n = t.onmessage;
                        return t.onmessage = function() {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = n, e
                    }
                }() ? function() {
                    var e = "setImmediate$" + Math.random() + "$",
                        n = function(n) {
                            n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && o(+n.data.slice(e.length))
                        };
                    t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), s = function(n) {
                        t.postMessage(e + n, "*")
                    }
                }() : t.MessageChannel ? function() {
                    var t = new MessageChannel;
                    t.port1.onmessage = function(t) {
                        o(t.data)
                    }, s = function(e) {
                        t.port2.postMessage(e)
                    }
                }() : f && "onreadystatechange" in f.createElement("script") ? function() {
                    var t = f.documentElement;
                    s = function(e) {
                        var n = f.createElement("script");
                        n.onreadystatechange = function() {
                            o(e), n.onreadystatechange = null, t.removeChild(n), n = null
                        }, t.appendChild(n)
                    }
                }() : function() {
                    s = function(t) {
                        setTimeout(o, 0, t)
                    }
                }(), d.setImmediate = r, d.clearImmediate = i
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(e, n(3), n(16))
}, function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(t) {
        if (u === setTimeout) return setTimeout(t, 0);
        if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
        try {
            return u(t, 0)
        } catch (e) {
            try {
                return u.call(null, t, 0)
            } catch (e) {
                return u.call(this, t, 0)
            }
        }
    }

    function a(t) {
        if (f === clearTimeout) return clearTimeout(t);
        if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
        try {
            return f(t)
        } catch (e) {
            try {
                return f.call(null, t)
            } catch (e) {
                return f.call(this, t)
            }
        }
    }

    function o() {
        m && p && (m = !1, p.length ? h = p.concat(h) : v = -1, h.length && s())
    }

    function s() {
        if (!m) {
            var t = i(o);
            m = !0;
            for (var e = h.length; e;) {
                for (p = h, h = []; ++v < e;) p && p[v].run();
                v = -1, e = h.length
            }
            p = null, m = !1, a(t)
        }
    }

    function c(t, e) {
        this.fun = t, this.array = e
    }

    function l() {}
    var u, f, d = t.exports = {};
    ! function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            u = n
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (t) {
            f = r
        }
    }();
    var p, h = [],
        m = !1,
        v = -1;
    d.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        h.push(new c(t, e)), 1 !== h.length || m || i(s)
    }, c.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function(t) {
        return []
    }, d.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, d.cwd = function() {
        return "/"
    }, d.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, d.umask = function() {
        return 0
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        n(18)
    }
    var i = n(4),
        a = n(49),
        o = n(2),
        s = r,
        c = o(i.a, a.a, !1, s, null, null);
    e.a = c.exports
}, function(t, e, n) {
    var r = n(19);
    "string" == typeof r && (r = [
        [t.i, r, ""]
    ]), r.locals && (t.exports = r.locals);
    n(1)("55397f8e", r, !0, {})
}, function(t, e, n) {
    e = t.exports = n(0)(!1), e.push([t.i, '@font-face{font-family:fibraultrabold_it;font-display:block;src:url("/src/fonts/fibra/los_andes_-_fibra_ultrabold_it-webfont.woff2") format("woff2"),url("/src/fonts/fibra/los_andes_-_fibra_ultrabold_it-webfont.woff") format("woff");font-weight:400;font-style:normal}body,h1,h2,h3,html,p{margin:0;padding:0}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;touch-action:manipulation}body,html{position:absolute;height:100vh;width:100%}body{background-color:#000;cursor:none;font-family:tandelle,sans-serif;font-style:normal;font-weight:700;color:#fff;font-size:20px}h1{display:block;font-size:inherit;font-weight:700}h1,p{-webkit-margin-before:0;-webkit-margin-after:0;-webkit-margin-start:0;-webkit-margin-end:0}a{text-decoration:none;color:inherit}::selection{background:#000;color:#000}::-moz-selection{background:#000;color:#000}#app{position:relative;height:100vh;width:100%}.navigation{z-index:3;position:fixed;bottom:70px;left:70px}@media screen and (max-width:1200px){.navigation{bottom:50px;left:50px}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.navigation{bottom:0;left:12px;height:30px}}@media screen and (max-width:767px){.navigation{bottom:0;left:12px;height:30px}}.feature-fix-container{position:fixed;height:100%;width:100%;top:0;left:0;z-index:2}.fake-feature,.feature-scrolltrigger{position:relative}.fake-feature{height:400vh}.intro-fixed-watch-container{position:fixed;height:100vh;width:100%;top:0;left:0;z-index:3;visibility:hidden}@media screen and (max-width:767px){.intro-fixed-watch-container{display:none;position:absolute}}.intro-watch-outer{position:absolute;width:25%;left:50%;top:52%;transform:translate(-50%,-50%);perspective:1200px}@media screen and (max-width:1200px){.intro-watch-outer{width:30%}}.intro-twister{position:relative;height:100%;width:auto}.intro-watch{position:relative;width:100%;left:3%}.intro-watch2{left:11%}.intro-watch2,.intro-watch3{position:relative;top:5%;width:110%}.intro-watch3{right:10%}.footer-fixed-stuff{position:fixed;top:0;left:0;width:100%;height:100%;display:none;z-index:1}.footer-megaText-container{position:absolute;top:0;width:100%;height:100%;text-align:center;overflow:hidden}.footer-megaText-box{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);perspective:500px}.footer-megaText{position:relative;font-size:70vh;white-space:nowrap}@media screen and (max-width:1023px){.footer-megaText{font-size:50vh}}@media screen and (max-width:767px){.footer-megaText{font-size:35vh}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.footer-megaText{font-size:70vh}}.footer-watch-outer{position:absolute;height:70vh;left:53%;top:52vh;transform:translate(-50%,-50%);perspective:1200px}@media screen and (max-width:1023px){.footer-watch-outer{height:50vh}}@media screen and (max-width:767px){.footer-watch-outer{height:40vh}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.footer-watch-outer{height:70vh}}.footer-twister,.footer-watch{position:relative;height:100%}.footer-buyWatch-btn-outer{position:absolute;height:100vh;width:100%}.footer-buyWatch-btn{position:absolute;bottom:70px;left:50%;transform:translateX(-50%);border:2px solid #fff;width:150px;height:50px;font-family:tandelle,sans-serif;font-style:normal;font-weight:700;color:#fff;font-size:20px;background-color:transparent;padding:0;box-sizing:content-box;z-index:10}@media screen and (max-width:1200px){.footer-buyWatch-btn{bottom:50px;width:150px;height:50px}}@media screen and (max-width:767px){.footer-buyWatch-btn{bottom:90px;width:150px;height:50px}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.footer-buyWatch-btn{bottom:20px;width:100px;height:30px}}.footer-buyWatch-btn .footer-buyWatch-txt{position:absolute;white-space:nowrap;text-align:center;left:50%;top:50%;transform:translate(-50%,-50%)}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.footer-buyWatch-btn .footer-buyWatch-txt{font-size:16px}}.footer-buyWatch-btn .footer-btn-hover-bg{position:absolute;top:0;left:0;width:0;height:100%;background-color:#fff}.imprint{position:absolute;left:50%;bottom:27px;transform:translateX(-50%);line-height:15px;opacity:.2;z-index:10;transition:opacity .2s;cursor:none}@media screen and (max-width:1200px){.imprint{bottom:18px}}@media screen and (max-width:767px){.imprint{bottom:60px}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.imprint{bottom:20px;left:75%}}.imprint:hover{opacity:1}.theBall-outer{position:fixed;top:-30px;left:-30px;z-index:5;pointer-events:none!important}.theBall,.theBall-outer{mix-blend-mode:exclusion;width:30px;height:30px}.theBall{position:absolute;background-color:#fff;border-radius:50%;transition:transform .2s cubic-bezier(.175,.885,.32,1.275);transform-origin:center center}@media screen and (max-width:1200px){.theBall{display:none}}.huuuuuge{transform:scale(2)}', ""])
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = [], r = {}, i = 0; i < e.length; i++) {
            var a = e[i],
                o = a[0],
                s = a[1],
                c = a[2],
                l = a[3],
                u = {
                    id: t + ":" + i,
                    css: s,
                    media: c,
                    sourceMap: l
                };
            r[o] ? r[o].parts.push(u) : n.push(r[o] = {
                id: o,
                parts: [u]
            })
        }
        return n
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        n(22)
    }
    var i = n(5),
        a = n(24),
        o = n(2),
        s = r,
        c = o(i.a, a.a, !1, s, null, null);
    e.a = c.exports
}, function(t, e, n) {
    var r = n(23);
    "string" == typeof r && (r = [
        [t.i, r, ""]
    ]), r.locals && (t.exports = r.locals);
    n(1)("28240a52", r, !0, {})
}, function(t, e, n) {
    e = t.exports = n(0)(!1), e.push([t.i, '@font-face{font-family:fibraultrabold_it;font-display:block;src:url("/src/fonts/fibra/los_andes_-_fibra_ultrabold_it-webfont.woff2") format("woff2"),url("/src/fonts/fibra/los_andes_-_fibra_ultrabold_it-webfont.woff") format("woff");font-weight:400;font-style:normal}#background{top:0;left:0;height:100vh;width:100%;position:fixed;overflow:hidden}.background-fallback{position:absolute;height:100%;width:100%;background-image:url("/src/assets/marble_bg_tiny.jpg");background-position:50%;background-size:cover;display:none}@media screen and (max-width:1200px){.background-fallback{display:block}}#background-canvas{position:absolute;height:100%;width:100%}@media screen and (max-width:1200px){#background-canvas{display:none}}', ""])
}, function(t, e, n) {
    "use strict";
    var r = function() {
            var t = this,
                e = t.$createElement;
            t._self._c;
            return t._m(0)
        },
        i = [function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                attrs: {
                    id: "background"
                }
            }, [n("div", {
                staticClass: "background-fallback"
            }), t._v(" "), n("canvas", {
                attrs: {
                    id: "background-canvas"
                }
            })])
        }],
        a = {
            render: r,
            staticRenderFns: i
        };
    e.a = a
}, function(t, e, n) {
    "use strict";

    function r(t) {
        n(26)
    }
    var i = n(6),
        a = n(28),
        o = n(2),
        s = r,
        c = o(i.a, a.a, !1, s, null, null);
    e.a = c.exports
}, function(t, e, n) {
    var r = n(27);
    "string" == typeof r && (r = [
        [t.i, r, ""]
    ]), r.locals && (t.exports = r.locals);
    n(1)("000449fd", r, !0, {})
}, function(t, e, n) {
    e = t.exports = n(0)(!1), e.push([t.i, '@font-face{font-family:fibraultrabold_it;font-display:block;src:url("/src/fonts/fibra/los_andes_-_fibra_ultrabold_it-webfont.woff2") format("woff2"),url("/src/fonts/fibra/los_andes_-_fibra_ultrabold_it-webfont.woff") format("woff");font-weight:400;font-style:normal}#home{position:relative;height:100%;width:100%;z-index:4;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media screen and (max-aspect-ratio:1/1){#home{overflow:hidden}}p{text-align:center;color:green}.home-outer{height:100%;width:100%}.home-center-outer{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.home-blackbox{position:absolute;background-color:#000}.home-blackbox-twister{height:100%;width:100%;position:absolute}.home-blackbox-top-outer{position:absolute;top:0;height:calc(50% - 275px);width:100%}@media screen and (max-width:1200px){.home-blackbox-top-outer{height:calc(50% - 200px)}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.home-blackbox-top-outer{height:calc(50% - 90px)}}@media screen and (max-width:767px){.home-blackbox-top-outer{height:calc(50% - 90px)}}.home-blackbox-top{top:0;height:100%;width:100%}.home-blackbox-right-outer{position:absolute;top:0;right:0;width:calc(50% - 275px);height:100%}@media screen and (max-width:1200px){.home-blackbox-right-outer{width:calc(50% - 200px)}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.home-blackbox-right-outer{width:calc(50% - 90px)}}@media screen and (max-width:767px){.home-blackbox-right-outer{width:calc(50% - 90px)}}.home-blackbox-right{top:0;right:0;width:100%;height:100%}.home-blackbox-bottom-outer{position:absolute;bottom:0;height:calc(50% - 275px);width:100%}@media screen and (max-width:1200px){.home-blackbox-bottom-outer{height:calc(50% - 200px)}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.home-blackbox-bottom-outer{height:calc(50% - 90px)}}@media screen and (max-width:767px){.home-blackbox-bottom-outer{height:calc(50% - 90px)}}.home-blackbox-bottom{bottom:0;height:100%;width:100%}.home-blackbox-left-outer{position:absolute;top:0;left:0;width:calc(50% - 275px);height:100%}@media screen and (max-width:1200px){.home-blackbox-left-outer{width:calc(50% - 200px)}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.home-blackbox-left-outer{width:calc(50% - 90px)}}@media screen and (max-width:767px){.home-blackbox-left-outer{width:calc(50% - 90px)}}.home-blackbox-left{top:0;left:0;width:100%;height:100%}.home-titan-center{font-size:520px;position:relative;white-space:nowrap;perspective:500px}@media screen and (max-width:1200px){.home-titan-center{font-size:375px}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.home-titan-center{font-size:162px}}@media screen and (max-width:767px){.home-titan-center{font-size:162px}}.char-inner-titan1,.char-inner-titan2,.char-inner-titan3,.char-inner-titan4,.char-inner-titan5{position:relative;display:inline-block}.home-viita-logo-vertical{position:absolute;width:150px;bottom:156px;left:-80px;transform:rotate(-90deg)}@media screen and (max-width:1200px){.home-viita-logo-vertical{width:110px;bottom:110px;left:-60px}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.home-viita-logo-vertical{width:50px;bottom:45px;left:-29px}}@media screen and (max-width:767px){.home-viita-logo-vertical{width:50px;bottom:45px;left:-29px}}.home-hrv-outer{position:absolute;top:94px;right:-110px}@media screen and (max-width:1200px){.home-hrv-outer{top:70px;right:-70px}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.home-hrv-outer{top:29px;right:-30px}}@media screen and (max-width:767px){.home-hrv-outer{top:29px;right:-30px}}.home-hrv{font-size:100px}@media screen and (max-width:1200px){.home-hrv{font-size:65px}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.home-hrv{font-size:30px}}@media screen and (max-width:767px){.home-hrv{font-size:30px}}.home-hrv-line{background-color:#fff;height:7px;width:auto;margin-top:-6px}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.home-hrv-line{height:3px;margin-top:-3px}}@media screen and (max-width:767px){.home-hrv-line{height:3px;margin-top:-3px}}', ""])
}, function(t, e, n) {
    "use strict";
    var r = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                attrs: {
                    id: "home"
                }
            }, [n("div", {
                staticClass: "home-outer"
            }, [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3), t._v(" "), n("div", {
                staticClass: "home-center-outer"
            }, [n("h1", {
                staticClass: "home-titan-center"
            }, [t._v(t._s(t.title))]), t._v(" "), t._m(4), t._v(" "), t._m(5)])])])
        },
        i = [function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "home-blackbox-top-outer"
            }, [n("div", {
                staticClass: "home-blackbox home-blackbox-top"
            })])
        }, function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "home-blackbox-right-outer"
            }, [n("div", {
                staticClass: "home-blackbox home-blackbox-right"
            })])
        }, function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "home-blackbox-bottom-outer"
            }, [n("div", {
                staticClass: "home-blackbox home-blackbox-bottom"
            })])
        }, function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "home-blackbox-left-outer"
            }, [n("div", {
                staticClass: "home-blackbox home-blackbox-left"
            })])
        }, function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "home-viita-logo-vertical-outer"
            }, [n("div", {
                staticClass: "home-viita-logo-vertical"
            }, [n("img", {
                attrs: {
                    src: "/src/assets/viita_logo_white.svg",
                    alt: "VIITA Titan Logo"
                }
            })])])
        }, function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "home-hrv-outer"
            }, [n("div", {
                staticClass: "home-hrv"
            }, [t._v(" HRV ")]), t._v(" "), n("div", {
                staticClass: "home-hrv-line"
            })])
        }],
        a = {
            render: r,
            staticRenderFns: i
        };
    e.a = a
}, function(t, e, n) {
    "use strict";

    function r(t) {
        n(30)
    }
    var i = n(7),
        a = n(32),
        o = n(2),
        s = r,
        c = o(i.a, a.a, !1, s, null, null);
    e.a = c.exports
}, function(t, e, n) {
    var r = n(31);
    "string" == typeof r && (r = [
        [t.i, r, ""]
    ]), r.locals && (t.exports = r.locals);
    n(1)("e69fa1fe", r, !0, {})
}, function(t, e, n) {
    e = t.exports = n(0)(!1), e.push([t.i, '@font-face{font-family:fibraultrabold_it;font-display:block;src:url("/src/fonts/fibra/los_andes_-_fibra_ultrabold_it-webfont.woff2") format("woff2"),url("/src/fonts/fibra/los_andes_-_fibra_ultrabold_it-webfont.woff") format("woff");font-weight:400;font-style:normal}#intro{position:relative;height:auto;width:100%;background-color:#000;overflow:hidden;z-index:3}.intro-bg-pic-container1{position:absolute;overflow:hidden;left:33%;top:300px;transform:translate(-50%);width:20%}@media screen and (max-width:1366px){.intro-bg-pic-container1{left:25%;top:220px;width:28%}}@media screen and (max-width:1023px){.intro-bg-pic-container1{left:40%;top:220px;width:28%}}@media screen and (max-width:767px){.intro-bg-pic-container1{left:10%;top:30px;transform:translate(0);width:40%;max-width:160px}}.intro-bg-pic-container2{position:absolute;overflow:hidden;right:0;top:30%;transform:translateY(-50%);width:32%}@media screen and (max-width:1366px){.intro-bg-pic-container2{right:0;top:28%;width:45%}}@media screen and (max-width:1023px){.intro-bg-pic-container2{right:0;top:28%;width:50%}}@media screen and (max-width:767px){.intro-bg-pic-container2{right:0;top:300px;transform:translateY(-50%);width:60%;max-width:240px;display:block}}.intro-bg-pic-container3{position:absolute;overflow:hidden;left:0;bottom:100px;width:25%}@media screen and (max-width:1366px){.intro-bg-pic-container3{left:0;bottom:200px;width:32%}}@media screen and (max-width:1023px){.intro-bg-pic-container3{left:0;bottom:250px;width:38%}}@media screen and (max-width:767px){.intro-bg-pic-container3{left:0;bottom:120px;width:35%;max-width:140px}}.intro-bg-pic-container4{position:absolute;overflow:hidden;left:55%;top:40%;width:20%}@media screen and (max-width:1366px){.intro-bg-pic-container4{left:60%;top:38%;width:24%}}@media screen and (max-width:1023px){.intro-bg-pic-container4{left:55%;top:33%;width:30%}}@media screen and (max-width:767px){.intro-bg-pic-container4{right:20%;left:auto;top:35%;width:30%;max-width:120px;display:none}}.intro-bg-pic{position:relative;width:100%;height:100%}.intro-headline-outer{position:absolute;padding-top:500px;padding-bottom:500px;position:relative;left:70px;width:calc(50% - 140px);font-size:178px;line-height:148px}@media screen and (max-width:1700px){.intro-headline-outer{font-size:137px;line-height:114px}}@media screen and (max-width:1366px){.intro-headline-outer{line-height:78px;font-size:92px;left:50px;width:calc(50% - 100px);padding-top:400px;padding-bottom:400px}}@media screen and (max-width:1023px){.intro-headline-outer{line-height:56px;font-size:63px;left:50px;width:calc(50% - 100px);padding-top:400px;padding-bottom:400px}}@media screen and (max-width:767px){.intro-headline-outer{line-height:43px;font-size:50px;padding-top:100px;padding-bottom:150px;left:20px;width:calc(100% - 40px);text-align:center}}@media screen and (min-width:2260px){.intro-headline-outer{line-height:210px;font-size:250px}}.intro-headline{-webkit-text-stroke-width:2px;-webkit-text-stroke-color:#fff;color:transparent}@media screen and (max-width:1200px){.intro-headline{-webkit-text-stroke-width:1px}}.intro-white{color:#fff}.intro-text{-webkit-text-stroke-width:2px;-webkit-text-stroke-color:#fff;color:transparent;text-transform:uppercase}@media screen and (max-width:1200px){.intro-text{-webkit-text-stroke-width:1px}}@media screen and (max-width:767px){.intro-text{margin-top:280px;font-family:fibraultrabold_it,Arial,sans-serif;font-style:normal;font-weight:700;font-size:15px;line-height:25px;-webkit-text-stroke-width:0;-webkit-text-stroke-color:#fff;color:#fff;text-transform:none;text-align:center;margin-left:15%;margin-right:15%}}.intro-watch-outer-mobile{position:absolute;width:auto;height:250px;left:50%;top:50%;transform:translate(-50%,-50%);display:none}@media screen and (max-width:767px){.intro-watch-outer-mobile{display:block}}.intro-watch-outer-mobile .intro-twister-mobile,.intro-watch-outer-mobile .intro-watch-mobile{position:relative;height:100%;width:auto}', ""])
}, function(t, e, n) {
    "use strict";
    var r = function() {
            var t = this,
                e = t.$createElement;
            t._self._c;
            return t._m(0)
        },
        i = [function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                attrs: {
                    id: "intro"
                }
            }, [n("div", {
                staticClass: "intro-bg-outer"
            }, [n("div", {
                staticClass: "intro-bg-pic-container1"
            }, [n("img", {
                staticClass: "intro-bg-pic",
                attrs: {
                    src: "/src/assets/titan_intro_bg1_tiny.jpg",
                    alt: "VIITA Cliff"
                }
            })]), t._v(" "), n("div", {
                staticClass: "intro-bg-pic-container2"
            }, [n("img", {
                staticClass: "intro-bg-pic",
                attrs: {
                    src: "/src/assets/titan_intro_bg2_tiny.jpg",
                    alt: "VIITA Mountain"
                }
            })]), t._v(" "), n("div", {
                staticClass: "intro-bg-pic-container3"
            }, [n("img", {
                staticClass: "intro-bg-pic",
                attrs: {
                    src: "/src/assets/titan_intro_bg5_tiny.jpg",
                    alt: "VIITA Runner"
                }
            })]), t._v(" "), n("div", {
                staticClass: "intro-bg-pic-container4"
            }, [n("img", {
                staticClass: "intro-bg-pic",
                attrs: {
                    src: "/src/assets/titan_intro_bg4_tiny.jpg",
                    alt: "VIITA Street"
                }
            })])]), t._v(" "), n("div", {
                staticClass: "intro-headline-outer"
            }, [n("h1", {
                staticClass: "intro-headline"
            }, [t._v("NATURE'S"), n("br"), t._v("STRONGEST")]), t._v(" "), n("h1", {
                staticClass: "intro-white"
            }, [t._v("CRAFTED INTO A "), n("br"), t._v(" SMARTWATCH.")]), t._v(" "), n("h1", {
                staticClass: "intro-text"
            }, [t._v("Manufactured out of Titanium, created to push you through your most challenging adventures.")])]), t._v(" "), n("div", {
                staticClass: "intro-watch-outer-mobile"
            }, [n("div", {
                staticClass: "intro-twister-mobile"
            }, [n("img", {
                staticClass: "intro-watch-mobile",
                attrs: {
                    src: "/src/assets/viita_titan_main.png",
                    alt: "VIITA Titan Watch"
                }
            })])])])
        }],
        a = {
            render: r,
            staticRenderFns: i
        };
    e.a = a
}, function(t, e, n) {
    "use strict";

    function r(t) {
        n(34)
    }
    var i = n(8),
        a = n(36),
        o = n(2),
        s = r,
        c = o(i.a, a.a, !1, s, null, null);
    e.a = c.exports
}, function(t, e, n) {
    var r = n(35);
    "string" == typeof r && (r = [
        [t.i, r, ""]
    ]), r.locals && (t.exports = r.locals);
    n(1)("3268f647", r, !0, {})
}, function(t, e, n) {
    e = t.exports = n(0)(!1), e.push([t.i, '@font-face{font-family:fibraultrabold_it;font-display:block;src:url("/src/fonts/fibra/los_andes_-_fibra_ultrabold_it-webfont.woff2") format("woff2"),url("/src/fonts/fibra/los_andes_-_fibra_ultrabold_it-webfont.woff") format("woff");font-weight:400;font-style:normal}.feature{left:0;height:100vh;opacity:0;overflow:hidden}.feature,.feature-black-bg{position:absolute;top:0;width:100%}.feature-black-bg{height:100%;background-color:#000}.feature-bg-pic-container{position:absolute;overflow:hidden;top:0;right:0;width:50%;height:100%}.feature-bg-pic-container .feature-bg-pic{position:absolute;top:0;right:0;width:50vw;height:100%;object-fit:cover}.feature-big-text-container{position:absolute;top:0;width:100%;height:100%;overflow:hidden}.feature-big-text-box{position:absolute;top:50%;transform:translateY(-50%)}.feature-big-text{position:relative;font-size:80vh;white-space:nowrap;-webkit-text-stroke-width:3px;-webkit-text-stroke-color:#fff;color:transparent;padding-left:150px;padding-right:150px}.feature-small-text-outer{position:absolute;top:0;width:50%;height:100%}@media screen and (max-width:1200px){.feature-small-text-outer{z-index:10}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feature-small-text-outer{width:100%;z-index:10}}@media screen and (max-width:767px){.feature-small-text-outer{width:100%;z-index:10}}.feature-detail-outer{position:absolute;display:inline-block;left:50%;height:100%;transform:translate(-50%)}@media screen and (max-width:1023px) and (min-width:768px){.feature-detail-outer{left:122px;transform:none}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feature-detail-outer{left:20px;transform:none;width:100%;height:auto;bottom:60px}}@media screen and (max-width:767px){.feature-detail-outer{left:20px;transform:none;width:100%;height:auto;bottom:60px}}.feature-name-container{font-family:tandelle,sans-serif;font-style:normal;font-weight:700;color:#fff;font-size:20px;position:absolute;font-size:130px;line-height:110px;bottom:50%;transform:translate(-52%) rotate(-90deg);display:inline-block}@media screen and (min-width:2260px){.feature-name-container{font-size:180px;line-height:150px}}@media screen and (max-width:1200px){.feature-name-container{font-size:90px;line-height:75px;bottom:45%}}@media screen and (max-width:1023px) and (min-width:768px){.feature-name-container{bottom:50%}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feature-name-container{position:relative;transform:none;font-size:60px;line-height:50px;bottom:auto;top:none;left:none}}@media screen and (max-width:767px){.feature-name-container{position:relative;transform:none;font-size:60px;line-height:50px;bottom:auto;top:none;left:none}}.feature-name-container .feature-name-box{position:absolute;width:auto;height:auto;overflow:hidden;white-space:nowrap}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feature-name-container .feature-name-box{position:relative}}@media screen and (max-width:767px){.feature-name-container .feature-name-box{position:relative}}.feature-name-container .feature-name-box .feature-line1{-webkit-text-stroke-width:2px;-webkit-text-stroke-color:#fff;color:transparent}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feature-name-container .feature-name-box .feature-line1{-webkit-text-stroke-width:1px}}@media screen and (max-width:767px){.feature-name-container .feature-name-box .feature-line1{-webkit-text-stroke-width:1px}}.feature-name-container .box1{top:-110px}@media screen and (min-width:2260px){.feature-name-container .box1{top:-150px}}@media screen and (max-width:1200px){.feature-name-container .box1{top:-75px}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feature-name-container .box1{top:auto}}@media screen and (max-width:767px){.feature-name-container .box1{top:auto}}.feature-detail{position:relative;width:225px;top:75%;transform:translateY(-50%);font-family:fibraultrabold_it,Arial,sans-serif;font-style:normal;font-weight:700;color:#fff;font-size:15px;line-height:25px}@media screen and (min-width:2260px){.feature-detail{font-size:20px;line-height:32px;width:300px}}@media screen and (max-width:1200px){.feature-detail{font-size:13px;line-height:20px;margin-top:20px;top:70%}}@media screen and (max-width:1023px) and (min-width:768px){.feature-detail{margin-left:-30px;width:200px}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feature-detail{width:230px;font-size:12px;line-height:18px;top:auto;margin-top:20px;transform:none}}@media screen and (max-width:767px){.feature-detail{width:230px;font-size:12px;line-height:18px;top:auto;margin-top:20px;transform:none}}.feature-watch-mask{position:absolute;overflow:hidden;top:0;right:0;width:100%;height:100%}.feature-watch-outer{position:absolute;width:25vw;right:25vw;top:50vh;transform:translate(-50%,-50%);perspective:1200px}@media screen and (max-width:1200px){.feature-watch-outer{width:35vw}}@media screen and (max-width:1023px){.feature-watch-outer{width:50vw}}@media screen and (max-width:767px){.feature-watch-outer{width:auto;height:50%;top:80px;right:50vw;transform:translateX(50%)}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feature-watch-outer{width:auto;height:50%;top:70px;right:50vw;transform:translateX(50%)}}.feat1 .feature-watch-outer{right:22vw;top:53vh}@media screen and (max-width:1200px){.feat1 .feature-watch-outer{right:8vw;top:53vh}}@media screen and (max-width:1023px){.feat1 .feature-watch-outer{right:-7vw;top:53vh}}@media screen and (max-width:767px){.feat1 .feature-watch-outer{width:auto;right:41vw;top:80px;height:50%}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feat1 .feature-watch-outer{width:auto;right:30vw;top:50%;height:80%;transform:translateY(-50%)}}.feat2 .feature-watch-outer{right:27vw;top:53vh}@media screen and (max-width:1200px){.feat2 .feature-watch-outer{right:17vw;top:53vh}}@media screen and (max-width:1023px){.feat2 .feature-watch-outer{right:5vw;top:53vh}}@media screen and (max-width:767px){.feat2 .feature-watch-outer{width:auto;right:50vw;top:80px;height:50%}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feat2 .feature-watch-outer{width:auto;right:37vw;top:50%;height:80%;transform:translateY(-50%)}}.feat3 .feature-watch-outer{width:21vw;right:29vw}@media screen and (max-width:1200px){.feat3 .feature-watch-outer{width:30vw;right:20vw}}@media screen and (max-width:1023px){.feat3 .feature-watch-outer{width:42vw;right:9vw}}@media screen and (max-width:767px){.feat3 .feature-watch-outer{width:auto;right:50vw;top:80px;height:50%}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feat3 .feature-watch-outer{width:auto;right:37vw;top:50%;height:80%;transform:translateY(-50%)}}.feat4 .feature-watch-outer{width:23vw;right:27vw}@media screen and (max-width:1200px){.feat4 .feature-watch-outer{width:32vw;right:19vw}}@media screen and (max-width:1023px){.feat4 .feature-watch-outer{width:45vw;right:5vw}}@media screen and (max-width:767px){.feat4 .feature-watch-outer{width:auto;right:50vw;top:80px;height:50%}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feat4 .feature-watch-outer{width:auto;right:37vw;top:50%;height:80%;transform:translateY(-50%)}}.feat5 .feature-watch-outer{width:22vw;right:28vw;top:53vh}@media screen and (max-width:1200px){.feat5 .feature-watch-outer{width:30vw;right:22vw}}@media screen and (max-width:1023px){.feat5 .feature-watch-outer{width:42vw;right:7vw}}@media screen and (max-width:767px){.feat5 .feature-watch-outer{width:auto;right:50vw;top:80px;height:50%}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feat5 .feature-watch-outer{width:auto;right:37vw;top:50%;height:80%;transform:translateY(-50%)}}.feat6 .feature-watch-outer{right:27vw;top:53vh}@media screen and (max-width:1200px){.feat6 .feature-watch-outer{right:17vw;top:53vh}}@media screen and (max-width:1023px){.feat6 .feature-watch-outer{right:5vw;top:53vh}}@media screen and (max-width:767px){.feat6 .feature-watch-outer{width:auto;right:50vw;top:80px;height:50%}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feat6 .feature-watch-outer{width:auto;right:37vw;top:50%;height:80%;transform:translateY(-50%)}}.feat7 .feature-watch-outer{width:21vw;right:29vw}@media screen and (max-width:1200px){.feat7 .feature-watch-outer{width:30vw;right:20vw}}@media screen and (max-width:1023px){.feat7 .feature-watch-outer{width:42vw;right:9vw}}@media screen and (max-width:767px){.feat7 .feature-watch-outer{width:auto;right:50vw;top:80px;height:50%}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feat7 .feature-watch-outer{width:auto;right:37vw;top:50%;height:80%;transform:translateY(-50%)}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feature-twister{height:100%}}@media screen and (max-width:767px){.feature-twister{height:100%}}.feature-watch{position:relative;width:100%}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.feature-watch{width:auto;height:100%}}@media screen and (max-width:767px){.feature-watch{width:auto;height:100%}}', ""])
}, function(t, e, n) {
    "use strict";
    var r = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "feature"
            }, [n("div", {
                staticClass: "feature-black-bg"
            }), t._v(" "), n("div", {
                staticClass: "feature-bg-pic-container"
            }, [n("img", {
                staticClass: "feature-bg-pic",
                attrs: {
                    src: t.feature.featureBgPic,
                    alt: "VIITA Titan Feature"
                }
            })]), t._v(" "), n("div", {
                staticClass: "feature-big-text-container"
            }, [n("div", {
                staticClass: "feature-big-text-box"
            }, [n("h2", {
                staticClass: "feature-big-text"
            }, [t._v(" " + t._s(t.feature.featureName) + " ")])])]), t._v(" "), n("div", {
                staticClass: "feature-small-text-outer"
            }, [n("div", {
                staticClass: "feature-detail-outer"
            }, [n("div", {
                staticClass: "feature-name-container"
            }, [n("div", {
                staticClass: "feature-name-box box1"
            }, [n("div", {
                staticClass: "feature-name feature-line1"
            }, [t._v("  " + t._s(t.feature.featureNameFirst) + " ")])]), t._v(" "), n("div", {
                staticClass: "feature-name-box box2"
            }, [n("div", {
                staticClass: "feature-name feature-line2"
            }, [t._v("  " + t._s(t.feature.featureNameSecond) + " ")])])]), t._v(" "), n("div", {
                staticClass: "feature-detail"
            }, [t._v(" " + t._s(t.feature.featureDetail) + " ")])])]), t._v(" "), n("div", {
                staticClass: "feature-watch-mask"
            }, [n("div", {
                staticClass: "feature-watch-outer"
            }, [n("div", {
                staticClass: "feature-twister"
            }, [n("img", {
                staticClass: "feature-watch",
                attrs: {
                    src: t.feature.featureWatch,
                    alt: "VIITA Titan Watch"
                }
            })])])])])
        },
        i = [],
        a = {
            render: r,
            staticRenderFns: i
        };
    e.a = a
}, function(t, e, n) {
    "use strict";

    function r(t) {
        n(38)
    }
    var i = n(9),
        a = n(40),
        o = n(2),
        s = r,
        c = o(i.a, a.a, !1, s, null, null);
    e.a = c.exports
}, function(t, e, n) {
    var r = n(39);
    "string" == typeof r && (r = [
        [t.i, r, ""]
    ]), r.locals && (t.exports = r.locals);
    n(1)("2a72e0cc", r, !0, {})
}, function(t, e, n) {
    e = t.exports = n(0)(!1), e.push([t.i, '@font-face{font-family:fibraultrabold_it;font-display:block;src:url("/src/fonts/fibra/los_andes_-_fibra_ultrabold_it-webfont.woff2") format("woff2"),url("/src/fonts/fibra/los_andes_-_fibra_ultrabold_it-webfont.woff") format("woff");font-weight:400;font-style:normal}.bullet{position:relative;margin-right:5px;width:40px;height:16px;transition:all .5s}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.bullet{display:inline-block;margin-right:5px;width:15px;height:30px}}@media screen and (max-width:767px){.bullet{display:inline-block;margin-right:5px;width:15px;height:30px}}@media screen and (min-width:768px){.bullet:hover .bullet-line{width:40px;opacity:1}}@media screen and (min-width:768px) and (max-width:1023px) and (orientation:landscape){.bullet:hover .bullet-line{width:2px;opacity:1}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.bullet:hover .bullet-name{opacity:1;left:50px}}@media screen and (min-width:768px){.bullet:hover .bullet-name{opacity:1;left:50px}}.bullet-outer{position:absolute;width:100%;height:100%}.bullet-line{position:absolute;top:50%;transform:translateY(-50%);background-color:#fff;width:10px;height:2px;opacity:.2;transition:all .5s;-webkit-box-shadow:0 2px 7px 0 rgba(0,0,0,.75);-moz-box-shadow:0 2px 7px 0 rgba(0,0,0,.75);box-shadow:0 2px 7px 0 rgba(0,0,0,.75)}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.bullet-line{position:absolute;left:50%;transform:translateX(-50%);top:auto;transform:none;width:2px;height:10px}}@media screen and (max-width:767px){.bullet-line{position:absolute;left:50%;transform:translateX(-50%);top:auto;transform:none;width:2px;height:10px}}.bullet-name{position:absolute;line-height:16px;white-space:nowrap;top:50%;transform:translateY(-50%);left:40px;font-size:20px;opacity:0;transition:all .4s}@media screen and (max-width:1200px){.bullet-name{display:none}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.bullet-name{display:none}}@media screen and (max-width:767px){.bullet-name{display:none}}.active .bullet-line{opacity:1;width:40px}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.active .bullet-line{opacity:1;width:2px;height:30px}}@media screen and (max-width:767px){.active .bullet-line{opacity:1;width:2px;height:30px}}', ""])
}, function(t, e, n) {
    "use strict";
    var r = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "bullet"
            }, [n("div", {
                staticClass: "bullet-outer bigItUp",
                on: {
                    click: t.getBulletNumber
                }
            }, [n("div", {
                staticClass: "bullet-line"
            }), t._v(" "), n("div", {
                staticClass: "bullet-name"
            }, [t._v("\n      " + t._s(t.bullet.featureName) + "\n    ")])])])
        },
        i = [],
        a = {
            render: r,
            staticRenderFns: i
        };
    e.a = a
}, function(t, e, n) {
    "use strict";

    function r(t) {
        n(42)
    }
    var i = n(10),
        a = n(44),
        o = n(2),
        s = r,
        c = o(i.a, a.a, !1, s, null, null);
    e.a = c.exports
}, function(t, e, n) {
    var r = n(43);
    "string" == typeof r && (r = [
        [t.i, r, ""]
    ]), r.locals && (t.exports = r.locals);
    n(1)("44b2694b", r, !0, {})
}, function(t, e, n) {
    e = t.exports = n(0)(!1), e.push([t.i, '@font-face{font-family:fibraultrabold_it;font-display:block;src:url("/src/fonts/fibra/los_andes_-_fibra_ultrabold_it-webfont.woff2") format("woff2"),url("/src/fonts/fibra/los_andes_-_fibra_ultrabold_it-webfont.woff") format("woff");font-weight:400;font-style:normal}#interface{position:absolute;top:0;z-index:4}.interface-logo{position:fixed;left:70px;top:70px;width:90px;height:30px}@media screen and (max-width:1200px){.interface-logo{left:50px;top:50px;width:80px}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.interface-logo{left:20px;top:25px;width:70px}}@media screen and (max-width:767px){.interface-logo{left:20px;top:25px;width:70px}}.interface-number{position:fixed;width:120px;right:18px;top:50%;font-size:20px;text-align:center;letter-spacing:10px;transform:translateY(-50%) rotate(-90deg)}@media screen and (max-width:1200px){.interface-number{right:-4px;font-size:16px;letter-spacing:8px}}@media screen and (max-width:1023px){.interface-number{display:none}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.interface-number{display:none}}@media screen and (max-width:767px){.interface-number{display:none}}.interface-ti22-outer{position:fixed;right:0;bottom:0}.interface-ti{position:fixed;font-size:70px;letter-spacing:4px;-webkit-text-stroke-width:2px;-webkit-text-stroke-color:#fff;color:transparent;right:94px;bottom:56px}@media screen and (max-width:1200px){.interface-ti{-webkit-text-stroke-width:1px;font-size:55px;right:65px;bottom:39px}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.interface-ti{font-size:35px;letter-spacing:1px;-webkit-text-stroke-width:1px;right:34px;bottom:14px}}@media screen and (max-width:767px){.interface-ti{font-size:35px;letter-spacing:1px;-webkit-text-stroke-width:1px;right:34px;bottom:14px}}.interface-22{font-size:35px;position:absolute;right:69px;bottom:92px}@media screen and (max-width:1200px){.interface-22{font-size:24px;right:49px;bottom:70px}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.interface-22{font-size:18px;right:20px;bottom:31px}}@media screen and (max-width:767px){.interface-22{font-size:18px;right:20px;bottom:31px}}.language-selector-outer{position:fixed;right:200px;top:70px;height:44px;font-family:tandelle,sans-serif;font-style:normal;font-weight:700;color:#fff;font-size:20px;padding:0}@media screen and (max-width:1200px){.language-selector-outer{right:180px;top:50px}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.language-selector-outer{right:110px;top:20px;height:34px;font-size:17px}}@media screen and (max-width:767px){.language-selector-outer{right:110px;top:20px;height:34px;font-size:17px}}.language-selector-outer .language-selector{position:relative;top:50%;transform:translateY(-50%)}.language-selector-outer .language-selector .en{display:inline-block;margin-right:8px;cursor:none}.language-selector-outer .language-selector .de{display:inline-block;cursor:none}.language-selector-outer .language-selector .false{opacity:.3;transition:opacity .2s}.language-selector-outer .language-selector .false:hover{opacity:1}.interface-buyWatch-btn{position:fixed;right:70px;top:70px;border:2px solid #fff;width:110px;height:40px;font-family:tandelle,sans-serif;font-style:normal;font-weight:700;color:#fff;font-size:20px;background-color:transparent;padding:0;box-sizing:content-box;cursor:none}@media screen and (max-width:1200px){.interface-buyWatch-btn{right:50px;top:50px}}@media screen and (max-width:1023px) and (min-aspect-ratio:8/5){.interface-buyWatch-btn{right:20px;top:20px;width:70px;height:30px;font-size:17px}}@media screen and (max-width:767px){.interface-buyWatch-btn{right:20px;top:20px;width:70px;height:30px;font-size:17px}}.interface-buyWatch-btn .interface-buyWatch-txt{position:absolute;white-space:nowrap;text-align:center;left:50%;top:50%;transform:translate(-50%,-50%)}.interface-buyWatch-btn .interface-btn-hover-bg{position:absolute;top:0;left:0;width:0;height:100%;background-color:#fff}', ""])
}, function(t, e, n) {
    "use strict";
    var r = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                attrs: {
                    id: "interface"
                }
            }, [n("div", {
                staticClass: "interface-logo bigItUp",
                on: {
                    click: t.goToHome
                }
            }, [n("img", {
                attrs: {
                    src: "/src/assets/viita_logo_white.svg",
                    alt: "VIITA Titan Logo"
                }
            })]), t._v(" "), n("div", {
                staticClass: "interface-number"
            }, [t._v(" " + t._s(t.number) + " ")]), t._v(" "), t._m(0), t._v(" "), t._m(1), t._v(" "), n("a", {
                staticClass: "interface-buyWatch-btn bigItUp",
                attrs: {
                    href: "https://www.viita-watches.com/product/viita-titan-hrv/",
                    target: "_blank",
                    rel: "noopener"
                },
                on: {
                    mouseenter: t.funcInterfaceBtn,
                    mouseleave: t.funcInterfaceBtnOut
                }
            }, [n("div", {
                staticClass: "interface-btn-hover-bg"
            }), t._v(" "), n("div", {
                staticClass: "interface-buyWatch-txt"
            }, [t._v("\n      BUY NOW\n    ")])])])
        },
        i = [function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "interface-ti22-outer"
            }, [n("div", {
                staticClass: "interface-ti"
            }, [t._v(" TI ")]), t._v(" "), n("div", {
                staticClass: "interface-22"
            }, [t._v(" 22 ")])])
        }, function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "language-selector-outer"
            }, [n("div", {
                staticClass: "language-selector"
            }, [n("a", {
                staticClass: "en",
                attrs: {
                    href: "/en/"
                }
            }, [t._v("EN")]), t._v(" "), n("a", {
                staticClass: "de false",
                attrs: {
                    href: "/de/"
                }
            }, [t._v("DE")])])])
        }],
        a = {
            render: r,
            staticRenderFns: i
        };
    e.a = a
}, function(t, e, n) {
    "use strict";

    function r(t) {
        n(46)
    }
    var i = n(11),
        a = n(48),
        o = n(2),
        s = r,
        c = o(i.a, a.a, !1, s, null, null);
    e.a = c.exports
}, function(t, e, n) {
    var r = n(47);
    "string" == typeof r && (r = [
        [t.i, r, ""]
    ]), r.locals && (t.exports = r.locals);
    n(1)("1c04162a", r, !0, {})
}, function(t, e, n) {
    e = t.exports = n(0)(!1), e.push([t.i, '@font-face{font-family:fibraultrabold_it;font-display:block;src:url("/src/fonts/fibra/los_andes_-_fibra_ultrabold_it-webfont.woff2") format("woff2"),url("/src/fonts/fibra/los_andes_-_fibra_ultrabold_it-webfont.woff") format("woff");font-weight:400;font-style:normal}.footer{position:relative;width:100%;height:50vh}.footer-bg{position:absolute;width:100%;height:100%;background-color:#000}', ""])
}, function(t, e, n) {
    "use strict";
    var r = function() {
            var t = this,
                e = t.$createElement;
            t._self._c;
            return t._m(0)
        },
        i = [function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "footer"
            }, [n("div", {
                staticClass: "footer-outer"
            }, [n("div", {
                staticClass: "footer-bg"
            })])])
        }],
        a = {
            render: r,
            staticRenderFns: i
        };
    e.a = a
}, function(t, e, n) {
    "use strict";
    var r = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                attrs: {
                    id: "app"
                }
            }, [n("background-component"), t._v(" "), n("home-component"), t._v(" "), n("intro-component"), t._v(" "), t._m(0), t._v(" "), n("div", {
                staticClass: "feature-fix-container"
            }, t._l(t.features, function(e, r) {
                return n("feature-component", {
                    key: r,
                    class: (i = {
                        active: e.active
                    }, i["feat" + (r + 1)] = !0, i),
                    attrs: {
                        feature: e
                    },
                    on: {
                        changeActive: function(e) {
                            t.changeActive(e)
                        }
                    }
                });
                var i
            })), t._v(" "), t._m(1), t._v(" "), n("div", {
                staticClass: "footer-fixed-stuff"
            }, [t._m(2), t._v(" "), t._m(3), t._v(" "), n("div", {
                staticClass: "footer-buyWatch-btn-outer"
            }, [n("a", {
                staticClass: "footer-buyWatch-btn bigItUp",
                attrs: {
                    href: "https://www.viita-watches.com/product/viita-titan-hrv/",
                    target: "_blank",
                    rel: "noopener"
                },
                on: {
                    mouseenter: t.funcFooterBtn,
                    mouseleave: t.funcFooterBtnOut
                }
            }, [n("div", {
                staticClass: "footer-btn-hover-bg"
            }), t._v(" "), n("div", {
                staticClass: "footer-buyWatch-txt"
            }, [t._v("\n          SHOP NOW\n        ")])]), t._v(" "), n("a", {
                staticClass: "imprint",
                attrs: {
                    href: "https://www.viita-watches.com/imprint/?noredirect=en_US",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [t._v("IMPRINT")])])]), t._v(" "), n("footer-component"), t._v(" "), n("interface-component"), t._v(" "), t._m(4), t._v(" "), n("div", {
                staticClass: "navigation"
            }, t._l(t.bullets, function(e, r) {
                return n("bullet-component", {
                    key: r,
                    class: (i = {
                        active: e.active
                    }, i["bullet" + (r + 1)] = !0, i),
                    attrs: {
                        bullet: e
                    },
                    on: {
                        getBulletNumber: function(e) {
                            t.getBulletNumber(e)
                        }
                    }
                });
                var i
            }))], 1)
        },
        i = [function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "feature-scrolltrigger"
            }, [n("div", {
                staticClass: "fake-feature fake1"
            }), t._v(" "), n("div", {
                staticClass: "fake-feature fake2"
            }), t._v(" "), n("div", {
                staticClass: "fake-feature fake3"
            }), t._v(" "), n("div", {
                staticClass: "fake-feature fake4"
            }), t._v(" "), n("div", {
                staticClass: "fake-feature fake5"
            }), t._v(" "), n("div", {
                staticClass: "fake-feature fake6"
            }), t._v(" "), n("div", {
                staticClass: "fake-feature fake7"
            })])
        }, function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "intro-fixed-watch-container"
            }, [n("div", {
                staticClass: "intro-watch-outer"
            }, [n("div", {
                staticClass: "intro-twister"
            }, [n("img", {
                staticClass: "intro-watch",
                attrs: {
                    src: "/src/assets/viita_titan_main.png",
                    alt: "VIITA Titan"
                }
            })])]), t._v(" "), n("div", {
                staticClass: "intro-watch-outer"
            }, [n("div", {
                staticClass: "intro-twister"
            }, [n("img", {
                staticClass: "intro-watch2",
                attrs: {
                    src: "/src/assets/viita_titan_housing2.png",
                    alt: "VIITA Titan Housing"
                }
            })])]), t._v(" "), n("div", {
                staticClass: "intro-watch-outer"
            }, [n("div", {
                staticClass: "intro-twister"
            }, [n("img", {
                staticClass: "intro-watch3",
                attrs: {
                    src: "/src/assets/viita_titan_ceramicbezel.png",
                    alt: "VIITA CERAMIC BEZEL"
                }
            })])])])
        }, function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "footer-megaText-container"
            }, [n("div", {
                staticClass: "footer-megaText-box"
            }, [n("div", {
                staticClass: "footer-megaText-scaler"
            }, [n("div", {
                staticClass: "footer-megaText"
            }, [t._v(" BUY ")])])])])
        }, function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "footer-watch-outer"
            }, [n("div", {
                staticClass: "footer-twister"
            }, [n("img", {
                staticClass: "footer-watch",
                attrs: {
                    src: "/src/assets/viita_titan_housing2.png",
                    alt: "VIITA Titan Housing"
                }
            })])])
        }, function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "theBall-outer"
            }, [n("div", {
                staticClass: "theBall"
            })])
        }],
        a = {
            render: r,
            staticRenderFns: i
        };
    e.a = a
}]);
//# sourceMappingURL=build.js.map