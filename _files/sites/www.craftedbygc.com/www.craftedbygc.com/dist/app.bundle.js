! function(e) {
    function t(t) {
        for (var i, s, a = t[0], c = t[1], l = t[2], h = 0, d = []; h < a.length; h++) s = a[h], r[s] && d.push(r[s][0]), r[s] = 0;
        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
        for (u && u(t); d.length;) d.shift()();
        return o.push.apply(o, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], i = !0, a = 1; a < n.length; a++) {
                var c = n[a];
                0 !== r[c] && (i = !1)
            }
            i && (o.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var i = {},
        r = {
            0: 0
        },
        o = [];

    function s(t) {
        if (i[t]) return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.m = e, s.c = i, s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) s.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "";
    var a = window.webpackJsonp = window.webpackJsonp || [],
        c = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var l = 0; l < a.length; l++) t(a[l]);
    var u = c;
    o.push([11, 1]), n()
}({
    11: function(e, t, n) {
        e.exports = n(22)
    },
    12: function(e, t, n) {},
    22: function(e, t, n) {
        "use strict";
        n.r(t);
        n(12), n(5);
        var i = n(4),
            r = n.n(i),
            o = {
                html: document.documentElement,
                body: document.body,
                width: window.innerWidth,
                height: window.innerHeight,
                container: document.querySelector(".js-smooth__inner"),
                docHeight: 0,
                header: document.querySelector(".js-site-head"),
                isSmall: window.matchMedia("(max-width: 640px)").matches
            };
        var s = function(e) {
                var t = [].slice.call(document.querySelectorAll("img"), 0);
                t.forEach(function(n) {
                    var i = document.createElement("img");
                    i.addEventListener("load", function() {
                        t.splice(t.indexOf(n), 1), 0 === t.length && e()
                    }), i.src = n.src
                })
            },
            a = n(3),
            c = n(1),
            l = ("\n\n".concat("\n// import snoise4\nvec4 mod289(vec4 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nfloat mod289(float x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat permute(float x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt(float r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip) {\n    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n    vec4 p,s;\n\n    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n    s = vec4(lessThan(p, vec4(0.0)));\n    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n    return p;\n}\n\n#define F4 0.309016994374947451\n\nvec4 snoise4 (vec4 v) {\n    const vec4  C = vec4( 0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);\n\n    vec4 i  = floor(v + dot(v, vec4(F4)) );\n    vec4 x0 = v -   i + dot(i, C.xxxx);\n\n    vec4 i0;\n    vec3 isX = step( x0.yzw, x0.xxx );\n    vec3 isYZ = step( x0.zww, x0.yyz );\n    i0.x = isX.x + isX.y + isX.z;\n    i0.yzw = 1.0 - isX;\n    i0.y += isYZ.x + isYZ.y;\n    i0.zw += 1.0 - isYZ.xy;\n    i0.z += isYZ.z;\n    i0.w += 1.0 - isYZ.z;\n\n    vec4 i3 = clamp( i0, 0.0, 1.0 );\n    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n    vec4 x1 = x0 - i1 + C.xxxx;\n    vec4 x2 = x0 - i2 + C.yyyy;\n    vec4 x3 = x0 - i3 + C.zzzz;\n    vec4 x4 = x0 + C.wwww;\n\n    i = mod289(i);\n    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n    vec4 j1 = permute( permute( permute( permute (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n\n    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n    vec4 p0 = grad4(j0,   ip);\n    vec4 p1 = grad4(j1.x, ip);\n    vec4 p2 = grad4(j1.y, ip);\n    vec4 p3 = grad4(j1.z, ip);\n    vec4 p4 = grad4(j1.w, ip);\n\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    p4 *= taylorInvSqrt(dot(p4,p4));\n\n    vec3 values0 = vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)); //value of contributions from each corner at point\n    vec2 values1 = vec2(dot(p3, x3), dot(p4, x4));\n\n    vec3 m0 = max(0.5 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0); //(0.5 - x^2) where x is the distance\n    vec2 m1 = max(0.5 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);\n\n    vec3 temp0 = -6.0 * m0 * m0 * values0;\n    vec2 temp1 = -6.0 * m1 * m1 * values1;\n\n    vec3 mmm0 = m0 * m0 * m0;\n    vec2 mmm1 = m1 * m1 * m1;\n\n    float dx = temp0[0] * x0.x + temp0[1] * x1.x + temp0[2] * x2.x + temp1[0] * x3.x + temp1[1] * x4.x + mmm0[0] * p0.x + mmm0[1] * p1.x + mmm0[2] * p2.x + mmm1[0] * p3.x + mmm1[1] * p4.x;\n    float dy = temp0[0] * x0.y + temp0[1] * x1.y + temp0[2] * x2.y + temp1[0] * x3.y + temp1[1] * x4.y + mmm0[0] * p0.y + mmm0[1] * p1.y + mmm0[2] * p2.y + mmm1[0] * p3.y + mmm1[1] * p4.y;\n    float dz = temp0[0] * x0.z + temp0[1] * x1.z + temp0[2] * x2.z + temp1[0] * x3.z + temp1[1] * x4.z + mmm0[0] * p0.z + mmm0[1] * p1.z + mmm0[2] * p2.z + mmm1[0] * p3.z + mmm1[1] * p4.z;\n    float dw = temp0[0] * x0.w + temp0[1] * x1.w + temp0[2] * x2.w + temp1[0] * x3.w + temp1[1] * x4.w + mmm0[0] * p0.w + mmm0[1] * p1.w + mmm0[2] * p2.w + mmm1[0] * p3.w + mmm1[1] * p4.w;\n\n    return vec4(dx, dy, dz, dw) * 49.0;\n}\n", "\n\n// import curl\nvec3 curl( in vec3 p, in float noiseTime, in float persistence ) {\n\n    vec4 xNoisePotentialDerivatives = vec4(0.0);\n    vec4 yNoisePotentialDerivatives = vec4(0.0);\n    vec4 zNoisePotentialDerivatives = vec4(0.0);\n\n    for (int i = 0; i < 3; ++i) {\n\n        float twoPowI = pow(2.0, float(i));\n        float scale = 0.5 * twoPowI * pow(persistence, float(i));\n\n    // added\n    scale = 1.0;\n\n        xNoisePotentialDerivatives += snoise4(vec4(p * twoPowI, noiseTime))  * scale;\n        yNoisePotentialDerivatives += snoise4(vec4((p + vec3(123.4, 129845.6, -1239.1)) * twoPowI, noiseTime)) * scale;\n        zNoisePotentialDerivatives += snoise4(vec4((p + vec3(-9519.0, 9051.0, -123.0)) * twoPowI, noiseTime)) * scale;\n    }\n\n    return vec3(\n        zNoisePotentialDerivatives[1] - yNoisePotentialDerivatives[2],\n        xNoisePotentialDerivatives[2] - zNoisePotentialDerivatives[0],\n        yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[1]\n    );\n\n}\n"), n(8)),
            u = new(n.n(l).a),
            h = n(24),
            d = n(7),
            f = n(2),
            v = n(9),
            g = n.n(v);

        function m(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var x = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), p(this, "onScroll", function(t) {
                    u.emit(e.events.SCROLL, {
                        y: Math.round(-1 * t.deltaY)
                    })
                }), p(this, "onNativeScroll", function() {
                    u.emit(e.events.SCROLL, {
                        y: window.scrollY
                    })
                }), this.el = document.querySelector(".js-smooth"), this.setup()
            }
            var t, n, i;
            return t = e, (n = [{
                key: "setup",
                value: function() {
                    r.a.isDevice ? window.addEventListener("scroll", this.onNativeScroll, {
                        passive: !0
                    }) : (this.vs = new g.a({
                        el: this.el,
                        limitInertia: !1,
                        mouseMultiplier: .4,
                        touchMultiplier: 3,
                        firefoxMultiplier: 90,
                        passive: !0
                    }), this.vs.on(this.onScroll))
                }
            }]) && m(t.prototype, n), i && m(t, i), e
        }();
        x.events = {
            SCROLL: "ScrollController.events.SCROLL"
        };
        new x;
        var y = x.events,
            b = n(10),
            w = n.n(b);
        var z = function e() {
            var t, n, i;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), i = function() {
                u.emit(e.events.RESIZE)
            }, (n = "onResize") in (t = this) ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i, window.addEventListener("resize", w()(this.onResize, 200))
        };
        z.events = {
            RESIZE: "GlobalResize.events.RESIZE"
        };
        new z;
        var P = z.events;

        function T(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function S(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        h.a;
        var C = function() {
            function e() {
                var t = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), S(this, "setMaxHeight", function() {
                    Object.assign(o, {
                        docHeight: o.container.getBoundingClientRect().height - window.innerHeight
                    })
                }), S(this, "tick", function() {
                    r.a.isDevice ? t.scroll.current = t.scroll.target : t.scroll.current += (t.scroll.target - t.scroll.current) * t.data.ease, u.emit(e.events.TICK, {
                        target: t.scroll.target,
                        smooth: t.scroll.current
                    })
                }), S(this, "event", function(e) {
                    var n = e.y;
                    r.a.isDevice ? t.scroll.target = n : (t.scroll.target += n, t.clampTarget())
                }), S(this, "onResize", function() {
                    Object.assign(o, {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }), r.a.isDevice || (t.setMaxHeight(), t.clampTarget())
                }), S(this, "toTop", function() {
                    r.a.isDevice ? d.a.to(window, 1.5, {
                        scrollTo: 0,
                        ease: f.e.easeInOut
                    }) : d.a.to(t.scroll, 1.5, {
                        target: 0,
                        ease: f.e.easeInOut
                    })
                }), S(this, "toBottom", function(e) {
                    e.preventDefault(), r.a.isDevice ? d.a.to(window, 1.5, {
                        scrollTo: "#contact",
                        ease: f.e.easeInOut
                    }) : d.a.to(t.scroll, 1.5, {
                        target: o.docHeight,
                        ease: f.e.easeInOut
                    })
                }), S(this, "update", function() {
                    t.scroll.current = 0, t.scroll.target = 0, t.setMaxHeight(), s(t.setMaxHeight)
                }), d.a.ticker.addEventListener("tick", this.tick), this.anchors = {
                    top: document.querySelector(".js-anchor-top"),
                    bottom: document.querySelector(".js-anchor-bottom")
                }, this.data = {
                    ease: .125
                }, this.scroll = {
                    target: 0,
                    current: 0
                }, this.addListeners()
            }
            var t, n, i;
            return t = e, (n = [{
                key: "clampTarget",
                value: function() {
                    this.scroll.target = Math.round(Math.min(Math.max(this.scroll.target, 0), o.docHeight))
                }
            }, {
                key: "addListeners",
                value: function() {
                    u.on(y.SCROLL, this.event), u.on(P.RESIZE, this.onResize), this.anchors.top.addEventListener("click", this.toTop), this.anchors.bottom.addEventListener("click", this.toBottom)
                }
            }]) && T(t.prototype, n), i && T(t, i), e
        }();
        C.events = {
            TICK: "TICK"
        };
        var E = new C,
            O = C.events;
        n(21);

        function _(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function k(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var I = function() {
            function e() {
                var t = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), k(this, "getPos", function(e) {
                    return {
                        x: e.x,
                        y: e.y,
                        target: e.target
                    }
                }), k(this, "mouseMove", function(n) {
                    var i = t.getPos(n),
                        r = i.x,
                        o = i.y,
                        s = i.target;
                    u.emit(e.events.MOVE, {
                        x: r,
                        y: o,
                        target: s
                    })
                }), k(this, "mouseDown", function(n) {
                    var i = t.getPos(n),
                        r = i.x,
                        o = i.y,
                        s = i.target;
                    u.emit(e.events.DOWN, {
                        x: r,
                        y: o,
                        target: s
                    })
                }), k(this, "mouseUp", function(n) {
                    var i = t.getPos(n),
                        r = i.x,
                        o = i.target;
                    u.emit(e.events.UP, {
                        x: r,
                        target: o
                    })
                }), this.addListeners()
            }
            var t, n, i;
            return t = e, (n = [{
                key: "addListeners",
                value: function() {
                    window.addEventListener("pointermove", this.mouseMove), window.addEventListener("pointerdown", this.mouseDown), window.addEventListener("pointerup", this.mouseUp)
                }
            }]) && _(t.prototype, n), i && _(t, i), e
        }();
        I.events = {
            MOVE: "GlobalMouse.events.MOVE",
            DOWN: "GlobalMouse.events.DOWN",
            UP: "GlobalMouse.events.UP"
        };
        new I;
        var j = I.events;

        function M(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function R(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var D = "\n  precision mediump float;\n\n  ".concat("\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r) {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\nfloat cnoise(vec3 P) {\n  vec3 Pi0 = floor(P);\n  vec3 Pi1 = Pi0 + vec3(1.0);\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P);\n  vec3 Pf1 = Pf0 - vec3(1.0);\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\nfloat pnoise(vec3 P, vec3 rep) {\n  vec3 Pi0 = mod(floor(P), rep);\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep);\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P);\n  vec3 Pf1 = Pf0 - vec3(1.0);\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\nfloat rand(vec2 n) {\n  return 0.5 + 0.5 * fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);\n}\n", "\n\n  uniform sampler2D uTex;\n  uniform float uRadius;\n  uniform float uTime;\n  uniform float uSpeed;\n  uniform float uDiff;\n  uniform vec2 uRes;\n  \n  varying vec2 vTexcoord;\n  varying vec2 vMouseDist;\n\n  float smoothEdge = .005;\n\n  void main() {\n    vec2 uv = vTexcoord;\n\n    vec4 backgroundColor = vec4(0.);\n\n    vec2 center = vec2(.5) * uRes;\n    vec2 fragCoord = uv * uRes;\n    float dist = length(fragCoord - center);\n\n    float diagonal = length(uRes / 3.5);\n    float radius = diagonal * uRadius;\n\n    float circle = 1. - smoothstep(\n      radius - (radius * smoothEdge),\n      radius + (radius * smoothEdge),\n      dist\n    );\n\n    vec3 noisePos = vec3(uv.xy * 75., 0.0);\n    float gradient = pnoise(.1 * noisePos + vec3(1.0, uTime * 0.02, 0), vec3(100.0)) * 1.0;\n    float texMix = gradient * .05 + .05;\n    vec2 dispPos = uv + texMix * (vMouseDist * 3.);\n\n    vec4 tex = texture2D(uTex, dispPos);\n\n    vec4 outputColor = mix(backgroundColor, tex, circle);\n\n    gl_FragColor = outputColor;\n  }\n"),
            L = function() {
                function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), R(this, "createTimeline", function(e, t) {
                        var n = new c.e({
                            paused: !0
                        });
                        if ("scale" === t) {
                            var i = e.target.dataset.glScaleFrom,
                                r = e.target.dataset.glScaleTo;
                            n.fromTo(e.uniforms, 1, {
                                fragScale: i
                            }, {
                                fragScale: r
                            })
                        }
                        return n
                    }), R(this, "intersectRatio", function(e, t, n) {
                        var i, r = t - o.height,
                            s = 1 * (o.height + n + e);
                        return i = Math.abs(r / s), i = Math.max(0, Math.min(1, i))
                    }), R(this, "render", function(e) {
                        var n = e.target,
                            i = e.smooth;
                        a.resizeCanvasToDisplaySize(t.gl.canvas), t.time += 1, t.gl.viewport(0, 0, t.gl.drawingBufferWidth, t.gl.drawingBufferHeight), t.gl.clearColor(0, 0, 0, 0), t.gl.clear(t.gl.COLOR_BUFFER_BIT), t.data.current = i, t.data.dist += .1 * (n - t.data.dist), t.data.diff = .0015 * (n - t.data.dist), t.drawTextures(), t.time > 120 && !t.state.rendered && (t.state.rendered = !0)
                    }), R(this, "getMousePos", function(e) {
                        var n = e.x,
                            i = e.y;
                        t.mouse.x = n, t.mouse.y = i
                    }), this.canvas = document.getElementById("gl"), this.gl = this.canvas.getContext("webgl"), this.data = {
                        threshold: 100,
                        translate: 0,
                        dist: 0,
                        current: 0,
                        diff: 0
                    }, this.mouse = {
                        x: 0,
                        y: 0,
                        current: {
                            x: 0,
                            y: 0
                        },
                        diff: 0
                    }, this.bounds = {
                        width: 0,
                        height: 0,
                        res: 0
                    }, this.state = {
                        resizing: !1,
                        rendered: !1
                    }, this.time = 0, this.infos = null, this.circleInfo = null, this.init()
                }
                var t, n, i;
                return t = e, (n = [{
                    key: "createPrograms",
                    value: function() {
                        this.programInfoDefault = a.createProgramInfo(this.gl, [o.isDevice ? "\n  precision mediump float;\n\n  attribute vec3 position;\n  attribute vec2 texcoord;\n\n  uniform mat4 uMatrix;\n  uniform mat4 uTMatrix; \n\n  uniform vec2 uOffset;\n\n  uniform float uTime;\n  uniform float uDiff;\n\n  varying vec2 vTexcoord;\n\n  void main() {\n    vec3 pos = position.xzy;\n\n    gl_Position = uMatrix * vec4(pos, 1.0);\n    vTexcoord = (uTMatrix * vec4(texcoord - vec2(.5), 0, 1)).xy + vec2(.5);\n  }   \n" : "\n  precision mediump float;\n\n  attribute vec3 position;\n  attribute vec2 texcoord;\n\n  uniform mat4 uMatrix;\n  uniform mat4 uTMatrix;\n\n  uniform vec2 uOffset;\n\n  uniform float uDiff;\n  uniform float uTime;\n\n  varying vec2 vTexcoord;\n\n  void main() {\n    vec3 pos = position.xzy;\n    vec2 uv = vTexcoord;\n\n    float bending = (cos(uTime * .0015 + pos.x * 3.025) + sin(uTime * .01 + pos.y *\n  12.30)) * 2.;\n    float effect = bending * uDiff;\n\n    pos.y += effect / 11. * cos(pos.y) * sin(pos.y);\n\n    gl_Position = uMatrix * vec4(pos, 1.0);\n    vTexcoord = (uTMatrix * vec4(texcoord - vec2(.5), 0, 1)).xy + vec2(.5);\n  }  \n", "\n  precision mediump float;\n\n  uniform sampler2D uTex;\n  uniform float uFragScale;\n\n  varying vec2 vTexcoord;\n\n  void main() {\n    vec2 uv = vTexcoord;\n\n    vec2 texCenter = vec2(0.5);\n    vec2 texScale = (uv - texCenter) * uFragScale + texCenter;\n    vec4 tex = texture2D(uTex, texScale);\n\n    gl_FragColor = tex;\n  }\n"]), this.programInfoCircle = a.createProgramInfo(this.gl, ["\n  precision mediump float;\n\n  attribute vec3 position;\n  attribute vec2 texcoord;\n\n  uniform mat4 uMatrix;\n  uniform mat4 uTMatrix;\n\n  uniform vec2 uOffset;\n\n  uniform float uTime;\n  uniform float uDiff;\n\n  varying vec2 vTexcoord;\n  varying vec2 vMouseDist;\n\n  void main() {\n    vec3 pos = position.xzy;\n    vec2 uv = vTexcoord;\n\n    float mousePos = distance(uOffset, uv);\n    mousePos = 1.0 - mousePos;\n\n    vMouseDist = vec2(mousePos, 1.0);\n\n    gl_Position = uMatrix * vec4(pos, 1.0);\n    vTexcoord = (uTMatrix * vec4(texcoord - vec2(.5), 0, 1)).xy + vec2(.5);\n  } \n", D]), this.bufferInfo = a.primitives.createPlaneBufferInfo(this.gl, 1, 1, 15, 15)
                    }
                }, {
                    key: "getTextureInfo",
                    value: function() {
                        var e = this;
                        this.images = document.querySelectorAll("[data-gl-texture]"), this.images && (this.infos = [], this.hovers = [], this.images.forEach(function(t) {
                            var n = t.parentNode,
                                i = n.getBoundingClientRect(),
                                r = o.isDevice ? 1 : t.dataset.glParallax || 1,
                                s = 1 / r,
                                a = o.isDevice && t.dataset.glTextureMobile ? t.dataset.glTextureMobile : t.dataset.glTexture,
                                c = {
                                    isDefault: !0,
                                    el: n,
                                    target: t,
                                    texture: null,
                                    type: "mp4" === a.split(".").pop() ? "video" : "image",
                                    srcElement: null,
                                    needsUpdate: !1,
                                    animating: !1,
                                    bounds: i,
                                    srcHeight: i.height,
                                    srcWidth: i.width,
                                    width: i.width,
                                    height: i.height,
                                    x: i.width / 2 + i.x,
                                    y: i.height / 2 + i.y * s,
                                    parallaxOffset: (i.y - o.height / 2) * r - (i.y - o.height / 2),
                                    offset: 0,
                                    speed: r,
                                    parallax: s,
                                    uniforms: {
                                        parallax: 0,
                                        vertScale: 1,
                                        fragScale: 1,
                                        offset: [0, 0],
                                        power: 0,
                                        strength: 8.5,
                                        time: -30
                                    },
                                    scale: null
                                };
                            c.texture = e.createTexture(a, c), void 0 !== t.dataset.glTransition && ("grid" === t.dataset.glTransition ? e.heroGridTransition(c) : e.heroTransition(c)), t.dataset.glScaleFrom && (c.scale = e.createTimeline(c, "scale")), e.infos.push(c)
                        }))
                    }
                }, {
                    key: "getCircleInfo",
                    value: function() {
                        if (this.circle = document.querySelector("[data-gl-circle]"), !o.isDevice) {
                            var e = this.circle.getBoundingClientRect(),
                                t = this.circle.dataset.glCircle;
                            this.circleInfo = {
                                isCircle: !0,
                                el: this.circle,
                                type: "image",
                                srcElement: null,
                                needsUpdate: !1,
                                bounds: e,
                                srcHeight: e.height,
                                srcWidth: e.width,
                                width: e.width,
                                height: e.height,
                                x: e.width / 2 + e.x,
                                y: e.height / 2 + e.y,
                                parallaxOffset: 0,
                                offset: 0,
                                speed: 1,
                                parallax: 1,
                                uniforms: {
                                    strength: 8.5,
                                    offset: [0, 0],
                                    progress: 0,
                                    fragScale: 1,
                                    power: 0,
                                    parallax: 0
                                }
                            }, this.circleInfo.texture = this.createTexture(t, this.circleInfo)
                        }
                    }
                }, {
                    key: "deleteTextures",
                    value: function() {
                        var e = this;
                        this.infos.forEach(function(t) {
                            e.gl.deleteTexture(t.texture), "video" === t.type && t.srcElement.pause()
                        }), this.infos = null, this.images = null, this.sliderInfo && (this.sliderInfo.textures.forEach(function(t) {
                            e.gl.deleteTexture(t)
                        }), this.sliderInfo = null)
                    }
                }, {
                    key: "inView",
                    value: function(e) {
                        var t = e.bounds,
                            n = e.speed,
                            i = e.offset,
                            r = e.y,
                            s = e.parallaxOffset,
                            a = this.data,
                            c = a.current,
                            l = a.threshold,
                            u = c * n,
                            h = (r - c) * n + s,
                            d = t.y + i - u,
                            f = t.bottom + i - u;
                        return {
                            isVisible: d < l + o.height && f > -l,
                            start: d,
                            end: f,
                            transform: h
                        }
                    }
                }, {
                    key: "drawTexture",
                    value: function(e) {
                        var t = this.inView(e),
                            n = t.isVisible,
                            i = t.start,
                            r = t.end,
                            o = t.transform;
                        if (n || this.state.resizing || !this.state.rendered) {
                            var s = a.m4.identity(),
                                c = a.m4.identity();
                            if (e.needsUpdate && e.srcElement.readyState === e.srcElement.HAVE_ENOUGH_DATA && (e.srcElement.didRenderLastFrame ? Object.assign(e.srcElement, {
                                    didRenderLastFrame: !1
                                }) : (this.updateTexture(e.texture, e.srcElement), Object.assign(e.srcElement, {
                                    didRenderLastFrame: !0
                                }))), e.scale) {
                                var l = this.intersectRatio(e.height, i, r);
                                e.scale.progress(l)
                            }
                            if (e.isCircle) a.m4.scale(c, [1, 1, 1], c);
                            else {
                                var u = e.width / e.height,
                                    h = e.srcWidth / e.srcHeight,
                                    d = 0,
                                    f = 0;
                                h < u ? (d = 1, f = h / u) : h > u && (d = u / h, f = 1), a.m4.scale(c, [d, f, 1], c)
                            }
                            a.m4.ortho(0, this.bounds.width, this.bounds.height, 0, -1, 1, s), a.m4.translate(s, [e.x, o.toFixed(2), 1], s), a.m4.scale(s, [e.width, e.height, 1], s), e.isDefault && this.useDefaultProgram(e, s, c), e.isCircle && this.useCircleProgram(e, s, c), a.drawBufferInfo(this.gl, this.bufferInfo)
                        }
                    }
                }, {
                    key: "useCircleProgram",
                    value: function(e, t, n) {
                        var i = e.uniforms,
                            r = e.texture,
                            o = e.bounds,
                            s = e.width,
                            c = e.height,
                            l = this.mouse,
                            u = l.x,
                            h = l.y,
                            d = l.current;
                        d.y += .05 * (h - d.y), d.x += .05 * (u - d.x);
                        var f = [(d.x - o.x) / s * 2 - 1, (d.y - o.y) / c * 2 - 1];
                        this.mouse.diff = .001 * (u - d.x), this.gl.useProgram(this.programInfoCircle.program), a.setBuffersAndAttributes(this.gl, this.programInfoCircle, this.bufferInfo), a.setUniforms(this.programInfoCircle, {
                            uMatrix: t,
                            uTMatrix: n,
                            uTex: r,
                            uFragScale: i.fragScale,
                            uRes: [s, c],
                            uOffset: f,
                            uRadius: 1,
                            uTime: this.time,
                            uDiff: this.mouse.diff
                        })
                    }
                }, {
                    key: "useDefaultProgram",
                    value: function(e, t, n) {
                        var i = e.uniforms,
                            r = e.texture;
                        this.gl.useProgram(this.programInfoDefault.program), a.setBuffersAndAttributes(this.gl, this.programInfoDefault, this.bufferInfo), a.setUniforms(this.programInfoDefault, {
                            uMatrix: t,
                            uTMatrix: n,
                            uTex: r,
                            uFragScale: i.fragScale,
                            uDiff: this.data.diff,
                            uTime: this.time,
                            uOffset: [0, 0]
                        })
                    }
                }, {
                    key: "drawTextures",
                    value: function() {
                        for (var e = 0, t = this.infos.length; e < t; e += 1) {
                            var n = this.infos[e];
                            this.drawTexture(n)
                        }
                        this.circleInfo && this.drawTexture(this.circleInfo)
                    }
                }, {
                    key: "createTexture",
                    value: function(e, t) {
                        var n = this,
                            i = this.gl.createTexture();
                        this.gl.bindTexture(this.gl.TEXTURE_2D, i);
                        var r = this.gl.RGB,
                            o = this.gl.RGB,
                            s = this.gl.UNSIGNED_BYTE,
                            a = new Uint8Array([0, 0, 0, 0]);
                        if (this.gl.texImage2D(this.gl.TEXTURE_2D, 0, r, 1, 1, 0, o, s, a), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), "image" === t.type) {
                            var c = document.createElement("img");
                            c.addEventListener("load", function() {
                                n.gl.bindTexture(n.gl.TEXTURE_2D, i), n.gl.texImage2D(n.gl.TEXTURE_2D, 0, r, o, s, c), Object.assign(t, {
                                    srcWidth: c.width,
                                    srcHeight: c.height
                                })
                            }), c.src = "".concat(window.location.origin).concat(e)
                        } else if ("video" === t.type) {
                            var l = document.createElement("video");
                            l.autoplay = !0, l.muted = !0, l.loop = !0, l.controls = !1, l.playsInline = !0, l.didRenderLastFrame = !1, t.el.appendChild(l), l.style.position = "absolute", l.style.height = 0, l.addEventListener("loadeddata", function() {
                                Object.assign(t, {
                                    needsUpdate: !0,
                                    srcWidth: l.videoWidth,
                                    srcHeight: l.videoHeight
                                }), l.play()
                            }), l.src = "".concat(window.location.origin).concat(e), Object.assign(t, {
                                srcElement: l
                            })
                        }
                        return i
                    }
                }, {
                    key: "updateTexture",
                    value: function(e, t) {
                        var n = this.gl.RGB,
                            i = this.gl.RGB,
                            r = this.gl.UNSIGNED_BYTE;
                        this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, n, i, r, t)
                    }
                }, {
                    key: "updatePlaneBounds",
                    value: function() {
                        var e = this;
                        this.infos.forEach(function(t) {
                            var n = t.el.getBoundingClientRect();
                            t.bounds = n, t.width = n.width, t.height = n.height, t.x = n.width / 2 + n.x, t.parallaxOffset = (n.y - o.height / 2) * t.speed - (n.y - o.height / 2), t.y = (n.height / 2 + n.y) * t.parallax + e.data.current, t.offset = e.data.current * t.speed + t.parallaxOffset
                        })
                    }
                }, {
                    key: "updateCirclePlaneBounds",
                    value: function() {
                        var e = this.circle.getBoundingClientRect();
                        Object.assign(this.circleInfo, {
                            bounds: e,
                            width: e.width,
                            height: e.height,
                            x: e.width / 2 + e.x,
                            parallaxOffset: 0,
                            y: e.height / 2 + e.y + this.data.current,
                            offset: this.data.current
                        })
                    }
                }, {
                    key: "updateBounds",
                    value: function() {
                        this.infos && this.updatePlaneBounds(), this.circleInfo && this.updateCirclePlaneBounds()
                    }
                }, {
                    key: "setSize",
                    value: function() {
                        this.bounds.width = o.width, this.bounds.height = o.height, this.bounds.res = [o.width, o.height]
                    }
                }, {
                    key: "onResize",
                    value: function() {
                        this.state.resizing = !0, this.setSize(), this.updateBounds(), this.state.resizing = !1
                    }
                }, {
                    key: "addListeners",
                    value: function() {
                        u.on(O.TICK, this.render), o.isDesktop && u.on(j.MOVE, this.getMousePos)
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this;
                        this.createPrograms(), this.getTextureInfo(), this.getCircleInfo(), this.setSize(), this.addListeners(), window.addEventListener("load", function() {
                            e.onResize()
                        })
                    }
                }]) && M(t.prototype, n), i && M(t, i), e
            }();

        function A(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function N(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var B = function() {
            function e() {
                var t = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), N(this, "run", function(e) {
                    var n = e.smooth;
                    t.state.current = n, t.transformSections(), t.dom.badge.style.transform = "rotate(".concat((t.state.current / 10).toFixed(2), "deg)")
                }), N(this, "onResize", function() {
                    t.state.isResizing = !0, t.sections && (t.sections.forEach(function(e) {
                        e.el.style.transform = "";
                        var t = e.el.getBoundingClientRect();
                        e.bounds.top = t.top, e.bounds.bottom = t.bottom
                    }), t.transformSections()), t.mainGl && t.mainGl.onResize(), t.state.isResizing = !1
                }), this.el = document.querySelector(".js-smooth"), this.dom = {
                    el: this.el,
                    sections: document.querySelectorAll(".js-smooth-section"),
                    elems: document.querySelectorAll("[data-parallax]"),
                    badge: document.querySelector(".js-badge__text"),
                    glImages: document.querySelectorAll("[data-gl-texture]")
                }, this.state = {
                    current: 0,
                    threshold: 100,
                    isResizing: !1
                }, this.init()
            }
            var t, n, i;
            return t = e, (n = [{
                key: "init",
                value: function() {
                    this.on()
                }
            }, {
                key: "on",
                value: function() {
                    this.setStyles(), this.getCache(), this.addListeners(), s(this.onResize), this.mainGl = new L
                }
            }, {
                key: "setStyles",
                value: function() {
                    o.body.classList.add("is-virtual-scroll"), Object.assign(this.dom.el.style, {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%"
                    })
                }
            }, {
                key: "transformSections",
                value: function() {
                    var e = this,
                        t = this.state,
                        n = t.current,
                        i = t.isResizing,
                        r = "translate3d(0, ".concat(-n.toFixed(2), "px, 0)");
                    this.sections.forEach(function(t) {
                        var n = t.el,
                            o = t.bounds;
                        e.isVisible(o) || i ? (Object.assign(t, {
                            out: !1
                        }), n.style.transform = r) : t.out || (Object.assign(t, {
                            out: !0
                        }), n.style.transform = r)
                    })
                }
            }, {
                key: "isVisible",
                value: function(e) {
                    var t = this.state,
                        n = t.current,
                        i = t.threshold,
                        r = e.top,
                        s = e.bottom - n,
                        a = r - n < i + o.height && s > -i;
                    return a
                }
            }, {
                key: "getCache",
                value: function() {
                    this.getSections()
                }
            }, {
                key: "getSections",
                value: function() {
                    var e = this;
                    this.dom.sections && (this.sections = [], this.dom.sections.forEach(function(t) {
                        Object.assign(t.style, {
                            transform: ""
                        });
                        var n = t.getBoundingClientRect(),
                            i = {
                                el: t,
                                bounds: {
                                    top: n.top,
                                    bottom: n.bottom
                                },
                                out: !0
                            };
                        e.sections.push(i)
                    }))
                }
            }, {
                key: "addListeners",
                value: function() {
                    u.on(O.TICK, this.run), u.on(P.RESIZE, this.onResize)
                }
            }]) && A(t.prototype, n), i && A(t, i), e
        }();

        function q(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var U = function() {
            function e() {
                var t, n, i, r = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), i = function(e) {
                    var t = e.smooth;
                    r.state.current = t, r.transformParallax()
                }, (n = "run") in (t = this) ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i, this.elems = document.querySelectorAll("[data-parallax]"), this.cache = null, this.state = {
                    current: 0,
                    threshold: 100,
                    isResizing: !1
                }, this.init()
            }
            var t, n, i;
            return t = e, (n = [{
                key: "transformParallax",
                value: function() {
                    var e = this,
                        t = this.state,
                        n = t.current,
                        i = t.isResizing;
                    this.cache.forEach(function(t) {
                        var r = t.el,
                            o = t.bounds,
                            s = t.parallax,
                            a = e.isVisible(o),
                            c = "translate3d(".concat((n * s).toFixed(2), "px, 0, 0)");
                        a || i ? (Object.assign(t, {
                            out: !1
                        }), r.style.transform = c) : t.out || (Object.assign(t, {
                            out: !0
                        }), r.style.transform = c)
                    })
                }
            }, {
                key: "isVisible",
                value: function(e) {
                    var t = this.state,
                        n = t.current,
                        i = t.threshold,
                        r = e.top,
                        s = e.bottom - n,
                        a = r - n < i + o.height && s > -i;
                    return a
                }
            }, {
                key: "getCache",
                value: function() {
                    var e = this;
                    this.elems && (this.cache = [], this.elems.forEach(function(t) {
                        Object.assign(t.style, {
                            transform: ""
                        });
                        var n = t.getBoundingClientRect(),
                            i = {
                                el: t,
                                bounds: {
                                    top: n.top,
                                    bottom: n.bottom
                                },
                                out: !0,
                                parallax: parseFloat(t.dataset.parallax, 10) || .25
                            };
                        e.cache.push(i)
                    }))
                }
            }, {
                key: "addListeners",
                value: function() {
                    u.on(O.TICK, this.run)
                }
            }, {
                key: "init",
                value: function() {
                    this.getCache(), this.addListeners()
                }
            }]) && q(t.prototype, n), i && q(t, i), e
        }();

        function H(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function F(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var W = function() {
            function e(t) {
                var n = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), F(this, "draw", function() {
                    var e = n.size,
                        t = e.x,
                        i = e.y,
                        r = e.radius,
                        o = n.angle,
                        s = o.start,
                        a = o.end;
                    n.ctx.clearRect(0, 0, n.canvas.width, n.canvas.height), n.ctx.beginPath(), n.ctx.arc(t, i, r - 4, 0, 2 * Math.PI), n.ctx.lineWidth = 2, n.ctx.strokeStyle = "rgba(255, 255, 255, 0.25)", n.ctx.stroke(), n.ctx.beginPath(), n.ctx.arc(t, i, r - 4, s * Math.PI, a * Math.PI), n.ctx.lineWidth = 2, n.ctx.strokeStyle = "#ffffff", n.ctx.stroke()
                }), F(this, "onEnter", function() {
                    c.f.to(n.angle, 1.5, {
                        end: 3.5,
                        start: 1.5,
                        onUpdate: n.draw,
                        ease: c.d.easeOut
                    })
                }), F(this, "onLeave", function() {
                    c.f.to(n.angle, 1.5, {
                        end: -.5,
                        start: -.5,
                        onUpdate: n.draw,
                        ease: c.d.easeOut
                    })
                }), F(this, "onResize", function() {
                    n.setBounds(), n.draw()
                }), this.el = t, this.trigger = this.el.closest("a"), this.bounds = 0, this.size = {
                    x: 0,
                    y: 0,
                    radius: 0
                }, this.angle = {
                    start: -.5,
                    end: -.5
                }, this.init()
            }
            var t, n, i;
            return t = e, (n = [{
                key: "createCanvas",
                value: function() {
                    this.canvas = document.createElement("canvas"), this.el.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d")
                }
            }, {
                key: "setBounds",
                value: function() {
                    this.bounds = this.el.getBoundingClientRect(), this.canvas.style.height = "".concat(Math.round(this.bounds.height), "px"), this.canvas.style.width = "".concat(Math.round(this.bounds.width), "px"), this.canvas.height = Math.round(2 * this.bounds.height), this.canvas.width = Math.round(2 * this.bounds.width), this.size = {
                        x: Math.round(this.canvas.width / 2),
                        y: Math.round(this.canvas.height / 2),
                        radius: Math.round(this.canvas.height / 2)
                    }
                }
            }, {
                key: "addListeners",
                value: function() {
                    this.trigger.addEventListener("mouseenter", this.onEnter), this.trigger.addEventListener("mouseleave", this.onLeave)
                }
            }, {
                key: "init",
                value: function() {
                    this.addListeners(), this.createCanvas(), this.setBounds(), this.draw()
                }
            }]) && H(t.prototype, n), i && H(t, i), e
        }();

        function V(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var X = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.dom = {
                        logo: document.querySelector(".js-logo"),
                        lines: document.querySelectorAll(".js-hero-line"),
                        linesInner: document.querySelectorAll(".js-hero-line__inner"),
                        wwu: {
                            text: document.querySelector(".js-wwu__text"),
                            line: document.querySelector(".js-wwu__line")
                        },
                        overlay: document.querySelector(".js-sail__overlay"),
                        badge: document.querySelector(".js-badge")
                    }, this.tl = null, this.init()
                }
                var t, n, i;
                return t = e, (n = [{
                    key: "createTimeline",
                    value: function() {
                        this.tl = new c.e({
                            pasued: !0,
                            immediateRender: !0,
                            delay: 1
                        }), this.tl.to(this.dom.overlay, 1.5, {
                            autoAlpha: 0,
                            ease: c.b.easeOut
                        }).staggerFrom(this.dom.linesInner, 1.75, {
                            yPercent: 100,
                            ease: c.a.easeOut
                        }, .15).staggerTo(this.dom.lines, 1.75, {
                            cycle: {
                                xPercent: ["-100", "85", "-50", "75"]
                            },
                            ease: c.d.easeInOut
                        }, 0, 2.75).to(this.dom.linesInner, 1.5, {
                            color: "transparent",
                            ease: c.c.easeOut
                        }, 3).from(this.dom.logo, 1.75, {
                            yPercent: -105,
                            ease: c.a.easeOut
                        }, 3).from(this.dom.badge, 1.75, {
                            xPercent: -100,
                            rotation: 180,
                            ease: c.a.easeOut
                        }, 3).from(this.dom.wwu.text, 1.75, {
                            yPercent: 110,
                            ease: c.a.easeOut
                        }, 3).from(this.dom.wwu.line, 1.75, {
                            scaleX: 0,
                            ease: c.a.easeOut
                        }, 3)
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.createTimeline(), this.tl.play()
                    }
                }]) && V(t.prototype, n), i && V(t, i), e
            }(),
            G = n(0);
        /*!
         * VERSION: 0.6.0
         * DATE: 2018-05-14
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
         * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
         * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
         * This work is subject to the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         */
        ! function(e) {
            var t = e.GreenSockGlobals || e,
                n = function(e) {
                    var n, i = e.split("."),
                        r = t;
                    for (n = 0; n < i.length; n++) r[i[n]] = r = r[i[n]] || {};
                    return r
                }("com.greensock.utils"),
                i = document,
                r = i.defaultView ? i.defaultView.getComputedStyle : function() {},
                o = /([A-Z])/g,
                s = function(e, t, n, i) {
                    var s;
                    return (n = n || r(e, null)) ? s = (e = n.getPropertyValue(t.replace(o, "-$1").toLowerCase())) || n.length ? e : n[t] : e.currentStyle && (s = (n = e.currentStyle)[t]), i ? s : parseInt(s, 10) || 0
                },
                a = function(e) {
                    return !!(e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]))
                },
                c = function(e, t) {
                    for (var n, i = t.length; --i > -1;)
                        if (n = t[i], e.substr(0, n.length) === n) return n.length
                },
                l = /(?:\r|\n|\t\t)/g,
                u = /(?:\s\s+)/g,
                h = function(e) {
                    return (e.charCodeAt(0) - 55296 << 10) + (e.charCodeAt(1) - 56320) + 65536
                },
                d = i.all && !i.addEventListener,
                f = " style='position:relative;display:inline-block;".concat(d ? "*display:inline;*zoom:1;'" : "'"),
                v = function(e, t) {
                    var n = -1 !== (e = e || "").indexOf("++"),
                        i = 1;
                    return n && (e = e.split("++").join("")),
                        function() {
                            return "<".concat(t).concat(f).concat(e ? " class='".concat(e).concat(n ? i++ : "", "'>") : ">")
                        }
                },
                g = n.SplitText = t.SplitText = function(e, t) {
                    if ("string" == typeof e && (e = g.selector(e)), !e) throw "cannot split a null element.";
                    this.elements = a(e) ? function(e) {
                        var t, n, i, r = [],
                            o = e.length;
                        for (t = 0; t < o; t++)
                            if (n = e[t], a(n))
                                for (i = n.length, i = 0; i < n.length; i++) r.push(n[i]);
                            else r.push(n);
                        return r
                    }(e) : [e], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t)
                },
                m = function e(t, n, i) {
                    var r = t.nodeType;
                    if (1 === r || 9 === r || 11 === r)
                        for (t = t.firstChild; t; t = t.nextSibling) e(t, n, i);
                    else 3 !== r && 4 !== r || (t.nodeValue = t.nodeValue.split(n).join(i))
                },
                p = function(e, t) {
                    for (var n = t.length; --n > -1;) e.push(t[n])
                },
                x = function(e) {
                    var t, n = [],
                        i = e.length;
                    for (t = 0; t !== i; n.push(e[t++]));
                    return n
                },
                y = function(e, t, n) {
                    for (var i; e && e !== t;) {
                        if (i = e._next || e.nextSibling) return i.textContent.charAt(0) === n;
                        e = e.parentNode || e._parent
                    }
                    return !1
                },
                b = function e(t) {
                    var n, i, r = x(t.childNodes),
                        o = r.length;
                    for (n = 0; n < o; n++)(i = r[n])._isSplit ? e(i) : (n && 3 === i.previousSibling.nodeType ? i.previousSibling.nodeValue += 3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue : 3 !== i.nodeType && t.insertBefore(i.firstChild, i), t.removeChild(i))
                },
                w = function(e, t, n, o, a, c, l) {
                    var u, h, d, f, v, g, x, w, z, P, T, S, C = r(e),
                        E = s(e, "paddingLeft", C),
                        O = -999,
                        _ = s(e, "borderBottomWidth", C) + s(e, "borderTopWidth", C),
                        k = s(e, "borderLeftWidth", C) + s(e, "borderRightWidth", C),
                        I = s(e, "paddingTop", C) + s(e, "paddingBottom", C),
                        j = s(e, "paddingLeft", C) + s(e, "paddingRight", C),
                        M = .2 * s(e, "fontSize"),
                        R = s(e, "textAlign", C, !0),
                        D = [],
                        L = [],
                        A = [],
                        N = t.wordDelimiter || " ",
                        B = t.span ? "span" : "div",
                        q = t.type || t.split || "chars,words,lines",
                        U = a && -1 !== q.indexOf("lines") ? [] : null,
                        H = -1 !== q.indexOf("words"),
                        F = -1 !== q.indexOf("chars"),
                        W = "absolute" === t.position || !0 === t.absolute,
                        V = t.linesClass,
                        X = -1 !== (V || "").indexOf("++"),
                        G = [];
                    for (U && 1 === e.children.length && e.children[0]._isSplit && (e = e.children[0]), X && (V = V.split("++").join("")), d = (h = e.getElementsByTagName("*")).length, v = [], u = 0; u < d; u++) v[u] = h[u];
                    if (U || W)
                        for (u = 0; u < d; u++)((g = (f = v[u]).parentNode === e) || W || F && !H) && (S = f.offsetTop, U && g && Math.abs(S - O) > M && ("BR" !== f.nodeName || 0 === u) && (x = [], U.push(x), O = S), W && (f._x = f.offsetLeft, f._y = S, f._w = f.offsetWidth, f._h = f.offsetHeight), U && ((f._isSplit && g || !F && g || H && g || !H && f.parentNode.parentNode === e && !f.parentNode._isSplit) && (x.push(f), f._x -= E, y(f, e, N) && (f._wordEnd = !0)), "BR" === f.nodeName && (f.nextSibling && "BR" === f.nextSibling.nodeName || 0 === u) && U.push([])));
                    for (u = 0; u < d; u++) g = (f = v[u]).parentNode === e, "BR" !== f.nodeName ? (W && (z = f.style, H || g || (f._x += f.parentNode._x, f._y += f.parentNode._y), z.left = "".concat(f._x, "px"), z.top = "".concat(f._y, "px"), z.position = "absolute", z.display = "block", z.width = "".concat(f._w + 1, "px"), z.height = "".concat(f._h, "px")), !H && F ? f._isSplit ? (f._next = f.nextSibling, f.parentNode.appendChild(f)) : f.parentNode._isSplit ? (f._parent = f.parentNode, !f.previousSibling && f.firstChild && (f.firstChild._isFirst = !0), f.nextSibling && " " === f.nextSibling.textContent && !f.nextSibling.nextSibling && G.push(f.nextSibling), f._next = f.nextSibling && f.nextSibling._isFirst ? null : f.nextSibling, f.parentNode.removeChild(f), v.splice(u--, 1), d--) : g || (S = !f.nextSibling && y(f.parentNode, e, N), f.parentNode._parent && f.parentNode._parent.appendChild(f), S && f.parentNode.appendChild(i.createTextNode(" ")), t.span && (f.style.display = "inline"), D.push(f)) : f.parentNode._isSplit && !f._isSplit && "" !== f.innerHTML ? L.push(f) : F && !f._isSplit && (t.span && (f.style.display = "inline"), D.push(f))) : U || W ? (f.parentNode && f.parentNode.removeChild(f), v.splice(u--, 1), d--) : H || e.appendChild(f);
                    for (u = G.length; --u > -1;) G[u].parentNode.removeChild(G[u]);
                    if (U) {
                        for (W && (P = i.createElement(B), e.appendChild(P), T = "".concat(P.offsetWidth, "px"), S = P.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(P)), z = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
                        for (w = " " === N && (!W || !H && !F), u = 0; u < U.length; u++) {
                            for (x = U[u], (P = i.createElement(B)).style.cssText = "display:block;text-align:".concat(R, ";position:").concat(W ? "absolute;" : "relative;"), V && (P.className = V + (X ? u + 1 : "")), A.push(P), d = x.length, h = 0; h < d; h++) "BR" !== x[h].nodeName && (f = x[h], P.appendChild(f), w && f._wordEnd && P.appendChild(i.createTextNode(" ")), W && (0 === h && (P.style.top = "".concat(f._y, "px"), P.style.left = "".concat(E + S, "px")), f.style.top = "0px", S && (f.style.left = "".concat(f._x - S, "px"))));
                            0 === d ? P.innerHTML = "&nbsp;" : H || F || (b(P), m(P, String.fromCharCode(160), " ")), W && (P.style.width = T, P.style.height = "".concat(f._h, "px")), e.appendChild(P)
                        }
                        e.style.cssText = z
                    }
                    W && (l > e.clientHeight && (e.style.height = "".concat(l - I, "px"), e.clientHeight < l && (e.style.height = "".concat(l + _, "px"))), c > e.clientWidth && (e.style.width = "".concat(c - j, "px"), e.clientWidth < c && (e.style.width = "".concat(c + k, "px")))), p(n, D), p(o, L), p(a, A)
                },
                z = function e(t, n, r, o) {
                    var a, d, f = x(t.childNodes),
                        v = f.length,
                        g = "absolute" === n.position || !0 === n.absolute;
                    if (3 !== t.nodeType || v > 1) {
                        for (n.absolute = !1, a = 0; a < v; a++)(3 !== (d = f[a]).nodeType || /\S+/.test(d.nodeValue)) && (g && 3 !== d.nodeType && "inline" === s(d, "display", null, !0) && (d.style.display = "inline-block", d.style.position = "relative"), d._isSplit = !0, e(d, n, r, o));
                        return n.absolute = g, void(t._isSplit = !0)
                    }! function(e, t, n, r) {
                        var o, s, a, d, f, v, g, p, x, y, b = t.span ? "span" : "div",
                            w = -1 !== (t.type || t.split || "chars,words,lines").indexOf("chars"),
                            z = "absolute" === t.position || !0 === t.absolute,
                            P = t.wordDelimiter || " ",
                            T = " " !== P ? "" : z ? "&#173; " : " ",
                            S = t.span ? "</span>" : "</div>",
                            C = !0,
                            E = t.specialChars ? "function" == typeof t.specialChars ? t.specialChars : c : null,
                            O = i.createElement("div"),
                            _ = e.parentNode;
                        for (_.insertBefore(O, e), O.textContent = e.nodeValue, _.removeChild(e), g = -1 !== (o = function e(t) {
                                var n = t.nodeType,
                                    i = "";
                                if (1 === n || 9 === n || 11 === n) {
                                    if ("string" == typeof t.textContent) return t.textContent;
                                    for (t = t.firstChild; t; t = t.nextSibling) i += e(t)
                                } else if (3 === n || 4 === n) return t.nodeValue;
                                return i
                            }(e = O)).indexOf("<"), !1 !== t.reduceWhiteSpace && (o = o.replace(u, " ").replace(l, "")), g && (o = o.split("<").join("{{LT}}")), f = o.length, s = (" " === o.charAt(0) ? T : "") + n(), a = 0; a < f; a++)
                            if (v = o.charAt(a), E && (y = E(o.substr(a), t.specialChars))) v = o.substr(a, y || 1), s += w && " " !== v ? "".concat(r() + v, "</").concat(b, ">") : v, a += y - 1;
                            else if (v === P && o.charAt(a - 1) !== P && a) {
                            for (s += C ? S : "", C = !1; o.charAt(a + 1) === P;) s += T, a++;
                            a === f - 1 ? s += T : ")" !== o.charAt(a + 1) && (s += T + n(), C = !0)
                        } else "{" === v && "{{LT}}" === o.substr(a, 6) ? (s += w ? "".concat(r(), "{{LT}}") + "</".concat(b, ">") : "{{LT}}", a += 5) : v.charCodeAt(0) >= 55296 && v.charCodeAt(0) <= 56319 || o.charCodeAt(a + 1) >= 65024 && o.charCodeAt(a + 1) <= 65039 ? (p = h(o.substr(a, 2)), x = h(o.substr(a + 2, 2)), d = p >= 127462 && p <= 127487 && x >= 127462 && x <= 127487 || x >= 127995 && x <= 127999 ? 4 : 2, s += w && " " !== v ? "".concat(r() + o.substr(a, d), "</").concat(b, ">") : o.substr(a, d), a += d - 1) : s += w && " " !== v ? "".concat(r() + v, "</").concat(b, ">") : v;
                        e.outerHTML = s + (C ? S : ""), g && m(_, "{{LT}}", "<")
                    }(t, n, r, o)
                },
                P = g.prototype;
            P.split = function(e) {
                this.isSplit && this.revert(), this.vars = e = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                for (var t, n, i, r = this.elements.length, o = e.span ? "span" : "div", s = v(e.wordsClass, o), a = v(e.charsClass, o); --r > -1;) i = this.elements[r], this._originals[r] = i.innerHTML, t = i.clientHeight, n = i.clientWidth, z(i, e, s, a), w(i, e, this.chars, this.words, this.lines, n, t);
                return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
            }, P.revert = function() {
                if (!this._originals) throw "revert() call wasn't scoped properly.";
                for (var e = this._originals.length; --e > -1;) this.elements[e].innerHTML = this._originals[e];
                return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
            }, g.selector = e.$ || e.jQuery || function(t) {
                var n = e.$ || e.jQuery;
                return n ? (g.selector = n, n(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            }, g.version = "0.6.0"
        }(G.h);
        var Y = G.h.SplitText;

        function Z(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function K(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function J(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var $ = function() {
            function e() {
                var t = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), J(this, "setAnimation", function(e) {
                    var t = e.el;
                    if (Object.assign(e, {
                            tl: new c.e({
                                paused: !0,
                                immediateRender: !0
                            })
                        }), "section" === e.animation) {
                        var n = t.querySelectorAll(".js-slide-up"),
                            i = t.querySelector(".js-split-slide-up");
                        if (e.tl.staggerFrom(n, 1.75, {
                                yPercent: 100,
                                ease: c.a.easeOut
                            }, .1), i) {
                            new Y(i, {
                                type: "lines",
                                linesClass: "js-split-line__inner"
                            }), new Y(i, {
                                type: "lines",
                                linesClass: "o-split-line"
                            });
                            var r = t.querySelectorAll(".js-split-line__inner");
                            e.tl.staggerFrom(r, 1.5, {
                                yPercent: 100,
                                ease: c.a.easeOut
                            }, .1, .1)
                        }
                    }
                    e.tl.progress(1).progress(0)
                }), J(this, "handler", function(e) {
                    e.forEach(function(e) {
                        if (e.isIntersecting) {
                            var n = t.elems.indexOf(e.target),
                                i = t.cache[n];
                            i.isIntersected = !0, i.tl.play(), t.stillObserving() ? t.observer.unobserve(e.target) : t.observer.disconnect()
                        }
                    })
                }), this.el = o.body, this.elems = Z(this.el.querySelectorAll("[data-scroll]")), this.elems && (this.cache = null, this.options = null, this.observer = null, this.init())
            }
            var t, n, i;
            return t = e, (n = [{
                key: "createObserver",
                value: function() {
                    this.options = {
                        root: null,
                        rootMargin: "0px 0px -25% 0px",
                        threshold: [0, 0]
                    }, this.observer = new IntersectionObserver(this.handler, this.options)
                }
            }, {
                key: "getCache",
                value: function() {
                    var e = this;
                    this.cache = [], this.elems.forEach(function(t) {
                        var n = {
                            el: t,
                            animation: t.dataset.scroll,
                            isIntersected: !1,
                            elems: null,
                            split: null,
                            tl: null
                        };
                        e.cache.push(n)
                    })
                }
            }, {
                key: "stillObserving",
                value: function() {
                    return this.cache.some(function(e) {
                        return !e.isIntersected
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.cache = null, this.observer.disconnect(), this.observer = null, this.elems = null
                }
            }, {
                key: "run",
                value: function() {
                    var e = this;
                    this.cache.forEach(function(t) {
                        e.setAnimation(t), e.observer.observe(t.el)
                    })
                }
            }, {
                key: "init",
                value: function() {
                    this.getCache(), this.createObserver(), this.run()
                }
            }]) && K(t.prototype, n), i && K(t, i), e
        }();

        function Q(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function ee(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var te = function() {
            function e() {
                var t = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), ee(this, "updateIndex", function() {
                    t.data.last = t.data.current, t.data.current = t.data.current === t.data.total ? 0 : t.data.current + 1
                }), ee(this, "onPress", function(e) {
                    var n = e.target;
                    t.el.contains(n) && !t.state.animating && (t.animate(), c.f.to(t.circleSize, 1.5, {
                        radiusScale: .75,
                        ease: c.d.easeOut,
                        onUpdate: t.drawCircle
                    }), c.f.staggerTo(t.dom.lines, .55, {
                        yPercent: 100,
                        ease: c.c.easeInOut
                    }, -.025))
                }), ee(this, "animate", function() {
                    t.updateIndex(), t.doTimeline()
                }), ee(this, "animateOnClick", function() {
                    t.state.animating || (t.updateIndex(), t.doTimeline())
                }), ee(this, "drawCircle", function() {
                    var e = t.circleSize,
                        n = e.x,
                        i = e.y,
                        r = e.radius,
                        o = e.radiusScale,
                        s = t.canvas,
                        a = s.width,
                        c = s.height;
                    t.ctx.clearRect(0, 0, a, c), t.ctx.beginPath(), t.ctx.arc(n, i, (r - 4) * o, 0, 2 * Math.PI), t.ctx.lineWidth = 2, t.ctx.strokeStyle = "rgba(255, 255, 255, 0.25)", t.ctx.stroke()
                }), ee(this, "onRelease", function() {
                    t.state.animating && (t.tl ? t.tl.eventCallback("onComplete", function() {
                        t.timeScale = 1, t.tl.kill(), t.state.animating = !1
                    }) : t.state.animating = !1, c.f.to(t.circleSize, 1, {
                        radiusScale: 1,
                        ease: c.a.easeOut,
                        onUpdate: t.drawCircle
                    }), c.f.staggerTo(t.dom.lines, 1.25, {
                        yPercent: 0,
                        ease: c.a.easeOut
                    }, .025))
                }), this.el = document.querySelector(".js-team-slider"), this.dom = {
                    slides: this.el.querySelectorAll(".js-team-slide"),
                    circle: this.el.querySelector(".js-team-slider__circle"),
                    lines: this.el.querySelectorAll(".js-split-line__inner")
                }, c.f.set(this.dom.slides, {
                    rotation: .01,
                    force3D: !0
                }), this.data = {
                    total: this.dom.slides.length - 1,
                    last: 0,
                    current: 0
                }, this.tl = null, this.timeScale = 1, this.state = {
                    animating: !1
                }, this.init()
            }
            var t, n, i;
            return t = e, (n = [{
                key: "doTimeline",
                value: function() {
                    var e = this;
                    this.state.animating = !0, this.tl && this.tl.kill(), this.tl = new c.e({
                        onComplete: function() {
                            o.isDesktop ? (e.timeScale <= 2.2 && (e.timeScale = e.timeScale + .1), e.animate()) : e.state.animating = !1
                        }
                    }), o.isDesktop && this.tl.timeScale(this.timeScale);
                    var t = this.dom.slides[this.data.last],
                        n = this.dom.slides[this.data.current];
                    this.tl.set(t, {
                        zIndex: 1
                    }).set(n, {
                        autoAlpha: 1,
                        yPercent: 0,
                        zIndex: 2
                    }).to(t, 1, {
                        xPercent: -40,
                        yPercent: 15,
                        autoAlpha: 0,
                        rotation: -3,
                        ease: c.d.easeOut
                    }).fromTo(n, 1, {
                        xPercent: 100,
                        rotation: 5,
                        scaleX: 2.5,
                        scaleY: .65,
                        alpha: 0
                    }, {
                        xPercent: 0,
                        rotation: 0,
                        scaleX: 1,
                        scaleY: 1,
                        alpha: 1,
                        ease: c.a.easeOut
                    }, .25)
                }
            }, {
                key: "createCircle",
                value: function() {
                    var e = this.dom.circle;
                    this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), e.appendChild(this.canvas);
                    var t = e.getBoundingClientRect(),
                        n = t.width,
                        i = t.height;
                    Object.assign(this.canvas.style, {
                        height: "".concat(Math.round(i), "px"),
                        width: "".concat(Math.round(n), "px")
                    }), this.canvas.height = Math.round(2 * i), this.canvas.width = Math.round(2 * n), this.circleSize = {
                        x: Math.round(this.canvas.width / 2),
                        y: Math.round(this.canvas.height / 2),
                        radius: Math.round(this.canvas.height / 2),
                        radiusScale: 1
                    }, this.drawCircle()
                }
            }, {
                key: "addListeners",
                value: function() {
                    o.isDesktop ? (u.on(j.DOWN, this.onPress), u.on(j.UP, this.onRelease)) : o.isDevice && this.el.addEventListener("click", this.animateOnClick)
                }
            }, {
                key: "init",
                value: function() {
                    this.addListeners(), this.createCircle()
                }
            }]) && Q(t.prototype, n), i && Q(t, i), e
        }();

        function ne(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function ie(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var re = function() {
            function e() {
                var t = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), ie(this, "checkState", function(e, n, i) {
                    var r = i.ratio,
                        o = i.center,
                        s = t.state.mouse,
                        a = Math.abs(o.x - s.x),
                        c = Math.abs(o.y - (s.y + t.state.offset)),
                        l = Math.sqrt(a * a + c * c) < n.width / 2 + i.threshold;
                    return !i.isHovering && l ? Object.assign(i, {
                        threshold: i.threshold * r,
                        isHovering: !0
                    }) : i.isHovering && !l && Object.assign(i, {
                        threshold: i.threshold / r,
                        isHovering: !1
                    }), l
                }), ie(this, "run", function(e) {
                    var n = e.smooth;
                    t.state.offset = n, t.transformElems()
                }), ie(this, "mousePos", function(e) {
                    var n = e.x,
                        i = e.y,
                        r = t.state.mouse;
                    r.x = n, r.y = i
                }), this.dom = {
                    elems: document.querySelectorAll(".js-magnetic")
                }, this.state = {
                    mouse: {
                        x: 0,
                        y: 0
                    },
                    offset: 0
                }, this.states = null, this.init()
            }
            var t, n, i;
            return t = e, (n = [{
                key: "getStates",
                value: function() {
                    var e = this;
                    this.states = [], this.dom.elems.forEach(function(t) {
                        var n = t.getBoundingClientRect(),
                            i = t.querySelectorAll("[data-magnetic-child-ratio]"),
                            r = {
                                el: t,
                                children: null,
                                bounds: n,
                                threshold: parseInt(t.dataset.magneticThreshold, 10) || 100,
                                ratio: parseInt(t.dataset.magneticRatio, 10) || 2,
                                max: parseInt(t.dataset.magneticMax, 10) || 100,
                                isHovering: !1,
                                current: {
                                    x: 0,
                                    y: 0
                                },
                                transform: {
                                    x: 0,
                                    y: 0,
                                    ease: .05
                                },
                                center: {
                                    x: n.left + n.width / 2,
                                    y: n.top + n.height / 2
                                }
                            };
                        i && (r.children = [], i.forEach(function(e) {
                            r.children.push({
                                el: e,
                                ratio: e.dataset.magneticChildRatio
                            })
                        })), e.states.push(r)
                    })
                }
            }, {
                key: "isVisible",
                value: function(e) {
                    var t = e.top,
                        n = e.bottom,
                        i = this.state.offset,
                        r = n - i,
                        s = t - i < o.height && r > 0;
                    return s
                }
            }, {
                key: "transformElems",
                value: function() {
                    var e = this,
                        t = this.state.mouse,
                        n = o.width,
                        i = o.height;
                    this.states.forEach(function(r) {
                        if (e.isVisible(r.bounds)) {
                            var o = r.el,
                                s = r.bounds,
                                a = r.max,
                                c = r.current,
                                l = r.transform,
                                u = r.children,
                                h = e.checkState(o, s, r);
                            c.x = h ? (t.x - n / 2) / (n / a) : 0, c.y = h ? (t.y - i / 2) / (i / a) : 0, l.x += (c.x - l.x) * l.ease, l.y += (c.y - l.y) * l.ease, o.style.transform = "\n          translate3d(".concat(l.x.toFixed(2), "px, ").concat(l.y.toFixed(2), "px, 0)\n        "), u && u.forEach(function(e) {
                                Object.assign(e.el.style, {
                                    transform: "\n                translate3d(\n                  ".concat((l.x / e.ratio).toFixed(2), "px, \n                  ").concat((l.y / e.ratio).toFixed(2), "px, \n                  0\n                )\n              ")
                                })
                            })
                        }
                    })
                }
            }, {
                key: "addListeners",
                value: function() {
                    u.on(O.TICK, this.run), u.on(j.MOVE, this.mousePos)
                }
            }, {
                key: "init",
                value: function() {
                    this.addListeners(), this.getStates()
                }
            }]) && ne(t.prototype, n), i && ne(t, i), e
        }();

        function oe(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function se(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var ae = function() {
            function e() {
                var t = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), se(this, "handle", function(e) {
                    e.forEach(function(e) {
                        e.intersectionRatio > 0 && (t.loadImage(e.target), t.observer.unobserve(e.target))
                    })
                }), se(this, "fetchImage", function(e) {
                    return new Promise(function(t, n) {
                        var i = new Image;
                        i.src = e, i.onload = t, i.onerror = n
                    })
                }), this.images = document.querySelectorAll("[data-lazy-src]"), this.options = {
                    root: null,
                    rootMargin: "50% 50% 50% 50%",
                    threshold: [0, 0]
                }, this.observer = new IntersectionObserver(this.handle, this.options), this.init()
            }
            var t, n, i;
            return t = e, (n = [{
                key: "observe",
                value: function() {
                    var e = this;
                    this.images.forEach(function(t) {
                        e.observer.observe(t)
                    })
                }
            }, {
                key: "loadImage",
                value: function(e) {
                    var t = e.dataset.lazySrc;
                    this.fetchImage(t).then(function() {
                        e.src = t
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.observer.disconnect(), this.observer = null, this.images = null
                }
            }, {
                key: "init",
                value: function() {
                    this.observe()
                }
            }]) && oe(t.prototype, n), i && oe(t, i), e
        }();
        var ce = function(e) {
            return new Promise(function(t, n) {
                var i = new Image;
                i.src = e, i.onload = t, i.onerror = n
            })
        };

        function le(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function ue(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        new(function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), ue(this, "setup", function() {
                    r.a.addClasses(o.body), Object.assign(o, r.a.getInfos()), console.log("%c  👉 👉 👉 Development by https://twitter.com/Jesper_Landberg  👈 👈 👈 😘", '\n      background: linear-gradient(to bottom, rgba(175,60,252,1) 0%,rgba(247,49,240,1) 100%);; \n      color: white; \n      display: block; \n      padding: 15px 25px;\n      font-size: 16px;\n      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    ')
                }), ue(this, "imagesMobile", function() {
                    document.querySelectorAll("[data-gl-texture]").forEach(function(e) {
                        var t = e.dataset.glTexture,
                            n = "mp4" === t.split(".").pop() ? e.dataset.glTextureMobile : t;
                        ce(n).then(function() {
                            e.src = n
                        })
                    })
                }), ue(this, "onLoad", function() {
                    new $
                }), ue(this, "initCircles", function() {
                    document.querySelectorAll(".js-icon-2d").forEach(function(e) {
                        return new W(e)
                    })
                }), this.setup(), this.init(), window.addEventListener("load", this.onLoad)
            }
            var t, n, i;
            return t = e, (n = [{
                key: "init",
                value: function() {
                    r.a.isDevice ? this.imagesMobile() : (E.update(), new B, new re, this.initCircles()), new U, new X, new te, new ae
                }
            }]) && le(t.prototype, n), i && le(t, i), e
        }())
    }
});