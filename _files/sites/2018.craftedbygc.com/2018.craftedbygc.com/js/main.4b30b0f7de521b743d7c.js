(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        0: function(e, t, o) {
            e.exports = o("kpGR")
        },
        "3UD+": function(e) {
            e.exports = function(e) {
                if (!e.webpackPolyfill) {
                    var t = Object.create(e);
                    t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function() {
                            return t.l
                        }
                    }), Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function() {
                            return t.i
                        }
                    }), Object.defineProperty(t, "exports", {
                        enumerable: !0
                    }), t.webpackPolyfill = 1
                }
                return t
            }
        },
        "9odl": function(e) {
            e.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nuniform float time;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nuniform sampler2D texture;\nuniform float opacity;\nuniform vec3 gradientColor;\nuniform float progress;\n\nvoid main() {\n\n\tvec2 uv = vUv;\n\t// vec4 color = texture2D( texture, vUv );\n\n\tvec4 origColor = texture2D(texture, vUv);\n    float grayscaleValue = dot(origColor.rgb, vec3(0.299, 0.587, 0.114));\n\n\t// remove green\n\t// if ( origColor.r < 0.4 && origColor.b < 0.4 && origColor.g > 0.4 ) {\n\t// \torigColor.a = 0.;\n\t// }\n\n\t// if ( origColor.r < 0.9 && origColor.b < 0.9 && origColor.g > 0.9 ) {\n\t// \torigColor.a = 0.;\n\t// }\n\n\tvec4 gradientImage = mix(vec4( gradientColor, 1.0), vec4(1.0, 1.0, 1.0, 1.0), grayscaleValue);\n\n\t// if ( gradientImage.b < 0.9 ) discard;\n\n\t// gl_FragColor = origColor * opacity;\n\tgl_FragColor = mix( vec4( gradientImage.rgb, 0. ), mix( gradientImage, origColor, progress ), opacity );\n\n\t#ifdef USE_FOG\n\t\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t\t#else\n\t\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t\t#endif\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\t#endif\n\n}"
        },
        Li5z: function(e) {
            e.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nuniform float time;\n\nvoid main () {\n\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1 );\n\n}"
        },
        P3Nu: function(e, t) {
            var o, i, n = Math.abs,
                a = function(e) {
                    var t = {
                        addEvent: function(e, t, o, i) {
                            e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent && (e["e" + t + o] = o, e[t + o] = function() {
                                e["e" + t + o](window.event, i)
                            }, e.attachEvent("on" + t, e[t + o]))
                        },
                        removeEvent: function(e, t, o) {
                            e.removeEventListener ? e.removeEventListener(t, o) : e.attachEvent && e.detachEvent(t)
                        },
                        input: "",
                        pattern: "38384040373937396665",
                        keydownHandler: function(o, e) {
                            if (e && (t = e), t.input += o ? o.keyCode : event.keyCode, t.input.length > t.pattern.length && (t.input = t.input.substr(t.input.length - t.pattern.length)), t.input === t.pattern) return t.code(t._currentLink), t.input = "", o.preventDefault(), !1
                        },
                        load: function(e) {
                            this._currentLink = e, this.addEvent(document, "keydown", this.keydownHandler, this), this.iphone.load(e)
                        },
                        unload: function() {
                            this.removeEvent(document, "keydown", this.keydownHandler), this.iphone.unload()
                        },
                        code: function(e) {
                            window.location = e
                        },
                        iphone: {
                            start_x: 0,
                            start_y: 0,
                            stop_x: 0,
                            stop_y: 0,
                            tap: !1,
                            capture: !1,
                            orig_keys: "",
                            keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
                            input: [],
                            code: function(e) {
                                t.code(e)
                            },
                            touchmoveHandler: function(o) {
                                if (1 === o.touches.length && !0 === t.iphone.capture) {
                                    var e = o.touches[0];
                                    t.iphone.stop_x = e.pageX, t.iphone.stop_y = e.pageY, t.iphone.tap = !1, t.iphone.capture = !1, t.iphone.check_direction()
                                }
                            },
                            touchendHandler: function() {
                                if (t.iphone.input.push(t.iphone.check_direction()), t.iphone.input.length > t.iphone.keys.length && t.iphone.input.shift(), t.iphone.input.length === t.iphone.keys.length) {
                                    for (var e = !0, o = 0; o < t.iphone.keys.length; o++) t.iphone.input[o] !== t.iphone.keys[o] && (e = !1);
                                    e && t.iphone.code(t._currentLink)
                                }
                            },
                            touchstartHandler: function(o) {
                                t.iphone.start_x = o.changedTouches[0].pageX, t.iphone.start_y = o.changedTouches[0].pageY, t.iphone.tap = !0, t.iphone.capture = !0
                            },
                            load: function() {
                                this.orig_keys = this.keys, t.addEvent(document, "touchmove", this.touchmoveHandler), t.addEvent(document, "touchend", this.touchendHandler, !1), t.addEvent(document, "touchstart", this.touchstartHandler)
                            },
                            unload: function() {
                                t.removeEvent(document, "touchmove", this.touchmoveHandler), t.removeEvent(document, "touchend", this.touchendHandler), t.removeEvent(document, "touchstart", this.touchstartHandler)
                            },
                            check_direction: function() {
                                return x_magnitude = n(this.start_x - this.stop_x), y_magnitude = n(this.start_y - this.stop_y), x = 0 > this.start_x - this.stop_x ? "RIGHT" : "LEFT", y = 0 > this.start_y - this.stop_y ? "DOWN" : "UP", result = x_magnitude > y_magnitude ? x : y, result = !0 === this.tap ? "TAP" : result, result
                            }
                        }
                    };
                    return "string" == typeof e && t.load(e), "function" == typeof e && (t.code = e, t.load()), t
                };
            "undefined" == typeof e.exports ? (o = [], i = function() {
                return a
            }.apply(t, o), !(void 0 !== i && (e.exports = i))) : e.exports = a
        },
        WQPq: function() {},
        kpGR: function(e, t, o) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function n(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }

            function a(e, t, o) {
                return t && n(e.prototype, t), o && n(e, o), e
            }

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }

            function c(e, t, o) {
                return t && l(e.prototype, t), o && l(e, o), e
            }

            function p(e, t) {
                return t && ("object" === r(t) || "function" == typeof t) ? t : g(e)
            }

            function m(e) {
                return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, m(e)
            }

            function d(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && u(e, t)
            }

            function u(e, t) {
                return u = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, u(e, t)
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, h(e)
            }

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }

            function v(e, t, o) {
                return t && b(e.prototype, t), o && b(e, o), e
            }

            function k(e, t) {
                return t && ("object" === h(t) || "function" == typeof t) ? t : _(e)
            }

            function w(e) {
                return w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, w(e)
            }

            function C(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && E(e, t)
            }

            function E(e, t) {
                return E = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, E(e, t)
            }

            function _(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function S(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function T(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }

            function M(e, t, o) {
                return t && T(e.prototype, t), o && T(e, o), e
            }
            var P = Math.PI,
                z = Math.floor,
                O = Math.max,
                j = Math.abs;
            o.r(t);
            var L = o("WQPq"),
                I = o("IT9u"),
                D = o("E3/K"),
                W = o("cuij"),
                F = o("BR65"),
                A = o("+8Os"),
                B = o("D10d"),
                H = o("LxkE"),
                U = o("3+m9"),
                Y = o("TnI4"),
                G = o("qdxW"),
                X = o("AIox"),
                R = o("/V9W"),
                N = o("brnI"),
                V = o("Ncdj"),
                q = o("XPv6"),
                J = o("z/o8");
            class K {
                constructor(e, t) {
                    t = Object.assign({}, K.defaults, t), this.element = e, this.opts = t, this.touchStartX = null, this.touchStartY = null, this.touchEndX = null, this.touchEndY = null, this.velocityX = null, this.velocityY = null, this.longPressTimer = null, this.doubleTapWaiting = !1, this.handlers = {
                        panstart: [],
                        panmove: [],
                        panend: [],
                        swipeleft: [],
                        swiperight: [],
                        swipeup: [],
                        swipedown: [],
                        tap: [],
                        doubletap: [],
                        longpress: []
                    }, this._onTouchStart = this.onTouchStart.bind(this), this._onTouchMove = this.onTouchMove.bind(this), this._onTouchEnd = this.onTouchEnd.bind(this), this.element.addEventListener("touchstart", this._onTouchStart, Q), this.element.addEventListener("touchmove", this._onTouchMove, Q), this.element.addEventListener("touchend", this._onTouchEnd, Q), this.opts.mouseSupport && !("ontouchstart" in window) && (this.element.addEventListener("mousedown", this._onTouchStart, Q), document.addEventListener("mousemove", this._onTouchMove, Q), document.addEventListener("mouseup", this._onTouchEnd, Q))
                }
                destroy() {
                    this.element.removeEventListener("touchstart", this._onTouchStart), this.element.removeEventListener("touchmove", this._onTouchMove), this.element.removeEventListener("touchend", this._onTouchEnd), this.element.removeEventListener("mousedown", this._onTouchStart), document.removeEventListener("mousemove", this._onTouchMove), document.removeEventListener("mouseup", this._onTouchEnd), clearTimeout(this.longPressTimer), clearTimeout(this.doubleTapTimer)
                }
                on(e, t) {
                    if (this.handlers[e]) return this.handlers[e].push(t), {
                        type: e,
                        fn: t,
                        cancel: () => this.off(e, t)
                    }
                }
                off(e, t) {
                    if (this.handlers[e]) {
                        const o = this.handlers[e].indexOf(t); - 1 !== o && this.handlers[e].splice(o, 1)
                    }
                }
                fire(e, t) {
                    for (let o = 0; o < this.handlers[e].length; o++) this.handlers[e][o](t)
                }
                onTouchStart(e) {
                    this.thresholdX = this.opts.threshold("x", this), this.thresholdY = this.opts.threshold("y", this), this.disregardVelocityThresholdX = this.opts.disregardVelocityThreshold("x", this), this.disregardVelocityThresholdY = this.opts.disregardVelocityThreshold("y", this), this.touchStartX = "mousedown" === e.type ? e.screenX : e.changedTouches[0].screenX, this.touchStartY = "mousedown" === e.type ? e.screenY : e.changedTouches[0].screenY, this.touchMoveX = null, this.touchMoveY = null, this.touchEndX = null, this.touchEndY = null, this.longPressTimer = setTimeout(() => this.fire("longpress", e), this.opts.longPressTime), this.fire("panstart", e)
                }
                onTouchMove(e) {
                    if ("mousemove" !== e.type || this.touchStartX && null === this.touchEndX) {
                        const t = ("mousemove" === e.type ? e.screenX : e.changedTouches[0].screenX) - this.touchStartX;
                        this.velocityX = t - this.touchMoveX, this.touchMoveX = t;
                        const o = ("mousemove" === e.type ? e.screenY : e.changedTouches[0].screenY) - this.touchStartY;
                        this.velocityY = o - this.touchMoveY, this.touchMoveY = o;
                        const i = j(this.touchMoveX),
                            n = j(this.touchMoveY);
                        this.swipingHorizontal = i > this.thresholdX, this.swipingVertical = n > this.thresholdY, this.swipingDirection = i > n ? this.swipingHorizontal ? "horizontal" : "pre-horizontal" : this.swipingVertical ? "vertical" : "pre-vertical", O(i, n) > this.opts.pressThreshold && clearTimeout(this.longPressTimer), this.fire("panmove", e)
                    }
                }
                onTouchEnd(e) {
                    if ("mouseup" !== e.type || this.touchStartX && null === this.touchEndX) {
                        this.touchEndX = "mouseup" === e.type ? e.screenX : e.changedTouches[0].screenX, this.touchEndY = "mouseup" === e.type ? e.screenY : e.changedTouches[0].screenY, this.fire("panend", e), clearTimeout(this.longPressTimer);
                        const t = this.touchEndX - this.touchStartX,
                            o = j(t),
                            i = this.touchEndY - this.touchStartY,
                            n = j(i);
                        o > this.thresholdX || n > this.thresholdY ? (this.swipedHorizontal = this.opts.diagonalSwipes ? j(t / i) <= this.opts.diagonalLimit : o >= n && o > this.thresholdX, this.swipedVertical = this.opts.diagonalSwipes ? j(i / t) <= this.opts.diagonalLimit : n > o && n > this.thresholdY, this.swipedHorizontal && (0 > t ? (this.velocityX < -this.opts.velocityThreshold || t < -this.disregardVelocityThresholdX) && this.fire("swipeleft", e) : (this.velocityX > this.opts.velocityThreshold || t > this.disregardVelocityThresholdX) && this.fire("swiperight", e)), this.swipedVertical && (0 > i ? (this.velocityY < -this.opts.velocityThreshold || i < -this.disregardVelocityThresholdY) && this.fire("swipeup", e) : (this.velocityY > this.opts.velocityThreshold || i > this.disregardVelocityThresholdY) && this.fire("swipedown", e))) : o < this.opts.pressThreshold && n < this.opts.pressThreshold && (this.doubleTapWaiting ? (this.doubleTapWaiting = !1, clearTimeout(this.doubleTapTimer), this.fire("doubletap", e)) : (this.doubleTapWaiting = !0, this.doubleTapTimer = setTimeout(() => this.doubleTapWaiting = !1, this.opts.doubleTapTime), this.fire("tap", e)))
                    }
                }
            }
            K.defaults = {
                threshold: (e) => O(25, z(.15 * ("x" === e ? window.innerWidth || document.body.clientWidth : window.innerHeight || document.body.clientHeight))),
                velocityThreshold: 10,
                disregardVelocityThreshold: (e, t) => z(.5 * ("x" === e ? t.element.clientWidth : t.element.clientHeight)),
                pressThreshold: 8,
                diagonalSwipes: !1,
                diagonalLimit: Math.tan(45 * 1.5 / 180 * P),
                longPressTime: 500,
                doubleTapTime: 300,
                mouseSupport: !0
            };
            let Q = !1;
            try {
                window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                    get: function() {
                        Q = {
                            passive: !0
                        }
                    }
                }))
            } catch (e) {}
            var Z = o("xC2a"),
                $ = o("EpSA"),
                ee = o("e/Nn"),
                te = o("6deg"),
                oe = function(e, t) {
                    var o = e.length,
                        i = 0;
                    return Promise.all(e.map(function(e) {
                        return e.then(function() {
                            i++, t(i, o)
                        }).catch(function(e) {
                            console.log(e)
                        }), e
                    }))
                },
                ie = function() {
                    function e(t) {
                        i(this, e), this.isMobile = t, this.assets = {
                            textures: {},
                            fonts: {}
                        }, this.assetList = {}, this.renderer = null, this.progressEl = document.querySelector(".progress-percent"), this.progressBar = document.querySelector(".progress-circle .line"), this.videosToLoad = 0
                    }
                    return a(e, [{
                        key: "load",
                        value: function(e, t) {
                            var o = this;
                            this.assetList = e, this.renderer = t;
                            var n = [],
                                a = new Z.a;
                            a.crossOrigin = "";
                            var r = !0,
                                s = function(e) {
                                    o.assetList[e].forEach(function(t) {
                                        if (~t.indexOf(".mp4")) {
                                            var i = document.createElement("video");
                                            i.style = "position:absolute;height:0", i.muted = !0, i.autoplay = !1, i.loop = !0, i.crossOrigin = "anonymous", i.setAttribute("muted", !0), i.setAttribute("webkit-playsinline", !0), i.setAttribute("playsinline", !0), i.preload = "metadata", i.src = "assets/".concat(e, "/").concat(t), document.body.appendChild(i), i.load(), n.push(new Promise(function(n) {
                                                o.videoPromise(i, e, t, n)
                                            }))
                                        } else n.push(new Promise(function(i) {
                                            a.load("assets/".concat(e, "/").concat(t), function(n) {
                                                return o.createImageTexture(n, e, t, i)
                                            })
                                        }))
                                    })
                                };
                            for (var l in this.assetList) s(l);
                            for (var c = new $.a, p = ["fonts/schnyder.json", "fonts/schnyder-outline.json", "fonts/suisse.json"], m = function(e) {
                                    n.push(new Promise(function(t) {
                                        return c.load(p[e], function(e) {
                                            o.assets.fonts[e.data.familyName] = e, t()
                                        })
                                    }))
                                }, d = 0; d < p.length; d++) m(d);
                            return new Promise(function(e) {
                                oe(n, o.update.bind(o)).then(function() {
                                    e(o.assets)
                                })
                            })
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            var o = Math.round(100 * (e / t));
                            this.progressEl.innerHTML = o + "%", this.progressBar.style.strokeDashoffset = 252.363 - 252.363 * (e / t)
                        }
                    }, {
                        key: "videoPromise",
                        value: function(e, t, o, i, n) {
                            var a = this;
                            n && e.load(), this.isMobile ? (e.onloadeddata = function() {
                                e.onerror = null, a.createVideoTexture(e, t, o, i)
                            }, e.onerror = function() {
                                e.onloadeddata = null, a.videoPromise(e, t, o, i, !0)
                            }) : e.oncanplaythrough = function() {
                                return a.createVideoTexture(e, t, o, i)
                            }
                        }
                    }, {
                        key: "createImageTexture",
                        value: function(e, t, o, i) {
                            var n = this;
                            if (i) e.size = new Y.a(e.image.width / 2, e.image.height / 2), e.needsUpdate = !0, this.renderer.setTexture2D(e, 0), e.name = "".concat(t, "/").concat(o), e.mediaType = "image", e.anisotropy = this.renderer.capabilities.getMaxAnisotropy(), this.assets.textures[t] || (this.assets.textures[t] = {}), this.assets.textures[t][o] = e, i(e);
                            else {
                                var a = new Z.a().load("assets/".concat(t, "/").concat(o), function(e) {
                                    e.size = new Y.a(e.image.width / 2, e.image.height / 2), e.needsUpdate = !0, n.renderer.setTexture2D(e, 0)
                                });
                                a.size = new Y.a(10, 10), a.name = "".concat(t, "/").concat(o), a.mediaType = "image", a.anisotropy = this.renderer.capabilities.getMaxAnisotropy(), this.assets.textures[t] || (this.assets.textures[t] = {}), this.assets.textures[t][o] = a
                            }
                        }
                    }, {
                        key: "createVideoTexture",
                        value: function(e, t, o, i) {
                            var n = new ee.a(e);
                            n.minFilter = n.magFilter = te.M, n.name = "".concat(t, "/").concat(o), n.mediaType = "video", n.anisotropy = this.renderer.capabilities.getMaxAnisotropy(), i ? (n.size = new Y.a(n.image.videoWidth / 2, n.image.videoHeight / 2), this.renderer.setTexture2D(n, 0), this.isMobile ? (e.src = "", e.load(), e.onloadeddata = null) : e.oncanplaythrough = null, i(n)) : (n.size = new Y.a(1, 1), e.oncanplaythrough = function() {
                                n.size = new Y.a(n.image.videoWidth / 2, n.image.videoHeight / 2), n.needsUpdate = !0, e.oncanplaythrough = null
                            }), this.assets.textures[t] || (this.assets.textures[t] = {}), this.assets.textures[t][o] = n
                        }
                    }]), e
                }(),
                ne = o("dt5g"),
                ae = o("9odl"),
                re = o.n(ae),
                se = o("Li5z"),
                le = o.n(se),
                ce = function(e) {
                    function t() {
                        var e, o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                            timeline: timeline,
                            texture: texture,
                            data: data,
                            month: month,
                            itemIndex: itemIndex,
                            itemIndexTotal: itemIndexTotal
                        };
                        return s(this, t), e = p(this, m(t).call(this)), Object.assign(g(g(e)), o), e.create(), e
                    }
                    return d(t, e), c(t, [{
                        key: "create",
                        value: function() {
                            var e = this;
                            this.uniforms = {
                                time: {
                                    type: "f",
                                    value: 1
                                },
                                fogColor: {
                                    type: "c",
                                    value: this.timeline.scene.fog.color
                                },
                                fogNear: {
                                    type: "f",
                                    value: this.timeline.scene.fog.near
                                },
                                fogFar: {
                                    type: "f",
                                    value: this.timeline.scene.fog.far
                                },
                                texture: {
                                    type: "t",
                                    value: this.texture
                                },
                                opacity: {
                                    type: "f",
                                    value: 1
                                },
                                progress: {
                                    type: "f",
                                    value: 0
                                },
                                gradientColor: {
                                    type: "vec3",
                                    value: new W.a(1786584)
                                }
                            }, this.geometry = new q.b(1, 1), this.material = new ne.a({
                                uniforms: this.uniforms,
                                fragmentShader: re.a,
                                vertexShader: le.a,
                                fog: !0,
                                transparent: !0
                            }), this.mesh = new V.a(this.geometry, this.material), this.mesh.scale.set(this.texture.size.x, this.texture.size.y, 1), this.texture.onUpdate = function() {
                                e.mesh.scale.x !== e.texture.size.x && e.mesh.scale.y !== e.texture.size.y && (e.mesh.scale.set(e.texture.size.x, e.texture.size.y, 1), e.texture.onUpdate = null)
                            };
                            var t = this.itemIndexTotal % 4,
                                o = new Y.a;
                            0 == t && o.set(-350, 350), 1 == t && o.set(350, 350), 2 == t && o.set(350, -350), 3 == t && o.set(-350, -350), this.align = t, this.position.set(o.x, o.y, -300 * this.itemIndex - 200), this.origPos = new Y.a(o.x, o.y), this.add(this.mesh), this.addCaption(), this.timeline.itemMeshes.push(this.mesh), "video" === this.texture.mediaType && this.timeline.videoItems.push(this.mesh)
                        }
                    }, {
                        key: "addCaption",
                        value: function() {
                            if (("" !== this.data.caption || "" !== this.data.link) && "" !== this.data.caption) {
                                var e = new N.a(this.data.caption, {
                                    font: this.timeline.assets.fonts["Schnyder L"],
                                    size: 18,
                                    height: 0,
                                    curveSegments: 4
                                }).center();
                                this.caption = new V.a(e, this.timeline.captionTextMat), this.caption.position.set(0, -this.mesh.scale.y / 2 - 50, 0), this.caption.visible = !1, this.add(this.caption)
                            }
                        }
                    }]), t
                }(G.a),
                pe = o("x3HC"),
                me = o.n(pe),
                de = function(e) {
                    function t() {
                        var e, o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                            timeline: timeline,
                            section: section
                        };
                        return f(this, t), e = k(this, w(t).call(this)), Object.assign(_(_(e)), o), "intro" === e.section ? e.createIntroSection() : "end" === e.section ? e.createEndSection() : "contact" === e.section ? e.createContactSection() : e.create(), e
                    }
                    return C(t, e), v(t, [{
                        key: "create",
                        value: function() {
                            var e = new N.a(this.timeline.months[this.section].name, {
                                    font: this.timeline.assets.fonts["Schnyder L"],
                                    size: 200,
                                    height: 0,
                                    curveSegments: 10
                                }).center(),
                                t = new V.a(e, this.timeline.textMat);
                            t.position.set(this.timeline.months[this.section].offset || 0, 0, 0), this.add(t)
                        }
                    }, {
                        key: "createIntroSection",
                        value: function() {
                            var e = new N.a("YEAR IN REVIEW", {
                                    font: this.timeline.assets.fonts["SuisseIntl-Bold"],
                                    size: 60,
                                    height: 0,
                                    curveSegments: 4
                                }).center(),
                                t = new V.a(e, this.timeline.textMat);
                            this.add(t);
                            var o = new N.a("2018", {
                                    font: this.timeline.assets.fonts["Schnyder_Edit Outline"],
                                    size: 640,
                                    height: 0,
                                    curveSegments: 15
                                }).center(),
                                i = new V.a(o, this.timeline.textOutlineMat);
                            i.position.set(0, 0, -500), this.add(i);
                            var n = new X.a({
                                    map: this.timeline.assets.textures.intro["ok.png"],
                                    transparent: !0
                                }),
                                a = new q.b(1, 1),
                                r = new V.a(a, n);
                            r.scale.set(800, 800, 1), r.position.set(0, 0, -250), this.add(r), this.addIntroBadge()
                        }
                    }, {
                        key: "addIntroBadge",
                        value: function() {
                            this.badge = new G.a;
                            var e = new Z.a().load("images/highlights.png");
                            e.magFilter = e.minFilter = te.M;
                            var t = new X.a({
                                    map: e,
                                    transparent: !0
                                }),
                                o = new q.b(1, 1);
                            this.circle = new V.a(o, t), this.circle.scale.set(200, 200, 1), this.badge.add(this.circle);
                            var i = new N.a("2018-19", {
                                font: this.timeline.assets.fonts["Schnyder L"],
                                size: 26,
                                height: 0,
                                curveSegments: 6
                            });
                            i.center();
                            var n = new V.a(i, this.timeline.textMat);
                            n.position.set(0, 0, 1), this.badge.add(n), this.badge.position.set(0, 0, 50), this.badge.position.y = 600 > this.timeline.c.size.w ? -this.timeline.c.size.h + 90 : -this.timeline.c.size.h / 2 + 90, 600 > this.timeline.c.size.w && this.badge.scale.set(1.5, 1.5, 1), this.add(this.badge)
                        }
                    }, {
                        key: "createEndSection",
                        value: function() {
                            var e = new N.a("SEE YOU NEXT YEAR", {
                                    font: this.timeline.assets.fonts["SuisseIntl-Bold"],
                                    size: 60,
                                    height: 0,
                                    curveSegments: 4
                                }).center(),
                                t = new V.a(e, this.timeline.textMat);
                            this.add(t);
                            var o = new N.a("END", {
                                    font: this.timeline.assets.fonts["Schnyder_Edit Outline"],
                                    size: 580,
                                    height: 0,
                                    curveSegments: 15
                                }).center(),
                                i = new V.a(o, this.timeline.textOutlineMat);
                            i.position.set(0, 0, -300), this.add(i);
                            var n = new q.b(1, 1),
                                a = new ne.a({
                                    uniforms: {
                                        fogColor: {
                                            type: "c",
                                            value: this.timeline.scene.fog.color
                                        },
                                        fogNear: {
                                            type: "f",
                                            value: this.timeline.scene.fog.near
                                        },
                                        fogFar: {
                                            type: "f",
                                            value: this.timeline.scene.fog.far
                                        },
                                        texture: {
                                            type: "t",
                                            value: this.timeline.assets.textures.end["wave.mp4"]
                                        }
                                    },
                                    fragmentShader: me.a,
                                    vertexShader: le.a,
                                    fog: !0,
                                    transparent: !0
                                }),
                                r = new V.a(n, a);
                            r.scale.set(700, 700, 1), r.position.set(0, 0, -200), this.timeline.videoItems.push(r), this.add(r), this.addWhooshButton()
                        }
                    }, {
                        key: "addWhooshButton",
                        value: function() {
                            this.whoosh = new G.a;
                            var e = new Z.a().load("images/whoooosh.png");
                            e.magFilter = e.minFilter = te.M;
                            var t = new X.a({
                                    map: e,
                                    transparent: !0,
                                    depthWrite: !1
                                }),
                                o = new q.b(1, 1);
                            this.circle = new V.a(o, t), this.circle.scale.set(200, 200, 1), this.whoosh.add(this.circle);
                            var i = new Z.a().load("images/arrowdown.png");
                            i.anisotropy = this.timeline.renderer.capabilities.getMaxAnisotropy(), i.magFilter = i.minFilter = te.M;
                            var n = new X.a({
                                    map: i,
                                    transparent: !0,
                                    side: te.v,
                                    depthWrite: !1
                                }),
                                a = new q.b(1, 1);
                            this.arrow = new V.a(a, n), this.arrow.scale.set(90, 90, 1), this.arrow.position.z = 20, this.whoosh.add(this.arrow), this.whoosh.position.set(0, -450, 50), 600 > this.timeline.c.size.w && this.whoosh.scale.set(1.5, 1.5, 1), this.add(this.whoosh)
                        }
                    }, {
                        key: "createContactSection",
                        value: function() {
                            this.position.set(0, 2e3 / this.timeline.scene.scale.y, 0), this.visible = !1;
                            var e = new N.a("SAY HELLO", {
                                    font: this.timeline.assets.fonts["SuisseIntl-Bold"],
                                    size: 10,
                                    height: 0,
                                    curveSegments: 4
                                }).center(),
                                t = new V.a(e, this.timeline.textMat);
                            t.position.set(0, 60, 0), this.add(t);
                            var o = new N.a("Let\u2019s make 2019 just as memorable with more", {
                                    font: this.timeline.assets.fonts["Schnyder L"],
                                    size: 30,
                                    height: 0,
                                    curveSegments: 6
                                }).center(),
                                i = new V.a(o, this.timeline.contactTextMat);
                            i.position.set(0, 0, 0), this.add(i);
                            var n = new N.a("amazing talent and exciting new projects.", {
                                    font: this.timeline.assets.fonts["Schnyder L"],
                                    size: 30,
                                    height: 0,
                                    curveSegments: 6
                                }).center(),
                                a = new V.a(n, this.timeline.contactTextMat);
                            a.position.set(0, -45, 0), this.add(a);
                            var r = new N.a("hello@craftedbygc.com", {
                                    font: this.timeline.assets.fonts["Schnyder L"],
                                    size: 36,
                                    height: 0,
                                    curveSegments: 6
                                }).center(),
                                s = new V.a(r, this.timeline.textMat);
                            s.position.set(0, -140, 0), this.add(s);
                            var l = new V.a(new q.a(467, 1), this.timeline.linkUnderlineMat);
                            l.position.set(0, -172, 0), this.add(l), this.linkBox = new V.a(new q.a(490, 60), new X.a({
                                alphaTest: 0,
                                visible: !1
                            })), this.linkBox.position.set(0, -140, 1), this.linkBox.onClick = function() {
                                window.open("mailto:hello@craftedbygc.com", "_blank")
                            }, this.add(this.linkBox)
                        }
                    }]), t
                }(G.a),
                ue = o("P3Nu"),
                ge = o.n(ue),
                he = {
                    intro: {
                        textColor: 1786584,
                        outlineTextColor: 1786584,
                        bgColor: 11454403,
                        tintColor: 1786584
                    },
                    jan: {
                        name: "JANUARY",
                        textColor: 16240510,
                        bgColor: 4360324,
                        tintColor: 4360324
                    },
                    feb: {
                        name: "FEBRUARY",
                        textColor: 16609107,
                        bgColor: 75060,
                        tintColor: 75060,
                        offset: -80
                    },
                    mar: {
                        name: "MARCH",
                        textColor: 1786584,
                        bgColor: 15913161,
                        tintColor: 1786584,
                        contactColor: 1648473
                    },
                    apr: {
                        name: "APRIL",
                        textColor: 16230672,
                        bgColor: 5347496,
                        tintColor: 3961988,
                        offset: 35
                    },
                    may: {
                        name: "MAY",
                        textColor: 16487268,
                        bgColor: 2906018,
                        tintColor: 3561373
                    },
                    jun: {
                        name: "JUNE",
                        textColor: 16175858,
                        bgColor: 2646612,
                        tintColor: 3694933
                    },
                    jul: {
                        name: "JULY",
                        textColor: 13270640,
                        bgColor: 4344933,
                        tintColor: 4476003
                    },
                    aug: {
                        name: "AUGUST",
                        textColor: 1469473,
                        bgColor: 16764321,
                        tintColor: 3369516,
                        contactColor: 7626057
                    },
                    sep: {
                        name: "SEPTEMBER",
                        textColor: 5969235,
                        bgColor: 16629650,
                        tintColor: 5969235
                    },
                    oct: {
                        name: "OCTOBER",
                        textColor: 3618862,
                        bgColor: 16424448,
                        tintColor: 3618864
                    },
                    nov: {
                        name: "NOVEMBER",
                        textColor: 12342,
                        bgColor: 2656148,
                        tintColor: 4621970
                    },
                    dec: {
                        name: "DECEMBER",
                        textColor: 16259846,
                        bgColor: 15921906,
                        tintColor: 10658466,
                        contactColor: 2039583
                    },
                    end: {
                        textColor: 15566236,
                        outlineTextColor: 12170472,
                        bgColor: 4286563,
                        tintColor: 12170472
                    }
                },
                fe = {
                    jan: ["adicolor_ss2018.mp4", "berlin-3.JPG", "cursor.mp4", "dark.mp4", "houseofplants.mp4.mp4", "iceland-orig.mp4", "iceland_dribbble.jpg", "nike.mp4", "roadless.jpg", "soft-drinks.jpg", "tiles.jpg"],
                    feb: ["camera-culture.jpg", "ezgif.com-gif-to-mp4 (10).mp4", "ezgif.com-gif-to-mp4 (12).mp4", "fila_dribbble.jpg", "fullsize.mp4", "houseofplants_ar.mp4", "nz.jpg", "surf_fullsize.mp4", "surf_mob_fullsize.mp4"],
                    mar: ["When_To_Travel_Event_Loop_1080p.mp4.mp4", "asia-office.jpg", "certificate-when-to-travel-sotd.jpg", "ezgif.com-gif-to-mp4 (13).mp4", "ezgif.com-gif-to-mp4 (15).mp4", "kim.jpg", "office-move.mp4", "phototours.mp4", "skye_fullsize.mp4", "yosemite.mp4"],
                    apr: ["aperture-dribbble.jpg", "beaches_nodistort.mp4", "colour_01.jpg", "ezgif.com-gif-to-mp4 (16).mp4", "ezgif.com-gif-to-mp4 (17).mp4", "ezgif.com-gif-to-mp4 (18).mp4", "its-official-video.mp4", "skincare.jpg"],
                    may: ["botanical.jpg", "DSC05316.jpg", "botanical_dev.jpg", "cabin_fever.mp4", "coffeebag_shot.jpg", "mars-fullsize_1.mp4", "may-off.jpg", "off.jpg"],
                    jun: ["its-official-video.mp4", "GC Port_0046.jpg", "jekka_bottle.png", "GC Port_0666.jpg", "jekka_bottle_front_label.png", "jack.mp4", "plasticdreams_fullsize.mp4"],
                    jul: ["05.jpg", "6oclockgin (2).mp4", "melt].jpg", "luke.jpg", "natural_wonders.mp4.mp4", "IMG_9709 2.jpg", "sandsoftime.mp4.mp4"],
                    aug: ["ezgif.com-gif-to-mp4 (10).mp4", "ezgif.com-gif-to-mp4 (6).mp4", "aug-nala.jpg", "ezgif.com-gif-to-mp4 (7).mp4", "1061670554.mp4.mp4", "boatparty.jpg", "ezgif.com-gif-to-mp4 (8).mp4", "cssda-wotd.jpg", "ezgif.com-gif-to-mp4 (9).mp4", "shapes___lighting.jpg"],
                    sep: ["asaro-web-live-shot_4x (2).jpg", "bunder_fullsize.mp4.mp4", "1.jpg", "butterysmoothversion.mp4.mp4", "carhartt_bigboi.mp4.mp4", "ding_ding.mp4.mp4", "ezgif.com-gif-to-mp4 (11).mp4", "ezgif.com-gif-to-mp4 (12).mp4", "ezgif.com-gif-to-mp4 (13).mp4", "ezgif.com-gif-to-mp4 (14).mp4", "habital_hifi.mp4.mp4.mp4", "mantra_fullres (1).mp4.mp4", "nfl_screens_4x.jpg"],
                    oct: ["comp_1_1.mp4 (1).mp4", "comp_1_1.mp4.mp4", "ezgif.com-gif-to-mp4 (15).mp4", "ezgif.com-gif-to-mp4 (16).mp4", "ezgif.com-gif-to-mp4 (17).mp4", "fwawwward-asaro.jpg", "kingdoms-fullsize (1).mp4.mp4", "sign.jpg"],
                    nov: ["DSC08088.jpg", "adobe_xd_mockup.jpg", "comp_1.mp4.mp4", "comp_1_11.mp4.mp4", "comp_1_3.mp4.mp4", "ezgif.com-gif-to-mp4 (18).mp4", "full_animation.mp4.mp4", "iat-webdesigner.jpg", "kikk.jpg"],
                    dec: ["comp_1.mp4 (1).mp4", "comp_1.mp4.mp4", "comp_1_1.mp4.mp4", "xmas.mp4", "comp_1_2.mp4.mp4", "studio_of_the_year_nom.jpg"]
                },
                be = {
                    jan: {
                        "adicolor_ss2018.mp4": {
                            caption: "Adicolor SS2018 Lookbook Carousel",
                            link: "https://dribbble.com/shots/4062487-Adicolor-SS2018-Lookbook-Carousel"
                        },
                        "berlin-3.JPG": {
                            caption: "We got inspired at the Awwwwards conference in Berlin",
                            link: ""
                        },
                        "cursor.mp4": {
                            caption: "",
                            link: "https://dribbble.com/shots/4134375-Cursor"
                        },
                        "dark.mp4": {
                            caption: "An interaction experiment using multiple parallax layers",
                            link: "https://dribbble.com/shots/4104832-Dark"
                        },
                        "houseofplants.mp4.mp4": {
                            caption: "House of Plants concept work",
                            link: "https://dribbble.com/shots/4147977-House-of-Plants"
                        },
                        "iceland-orig.mp4": {
                            caption: "Iceland interaction animation",
                            link: "https://dribbble.com/shots/4131026-Wandr-Iceland-Interaction-Animation"
                        },
                        "iceland_dribbble.jpg": {
                            caption: "",
                            link: ""
                        },
                        "nike.mp4": {
                            caption: "Nike Air Max day spinner ",
                            link: "https://dribbble.com/shots/4138514-Nike-Air-Max-Day-Spinner"
                        },
                        "roadless.jpg": {
                            caption: "",
                            link: ""
                        },
                        "soft-drinks.jpg": {
                            caption: "3D scenes for our lovely client Rawlings",
                            link: "https://www.rawlingsbristol.co.uk/"
                        },
                        "tiles.jpg": {
                            caption: "Some pretty style tiles",
                            link: "https://dribbble.com/shots/4069928-Mountain-Range-Tiles"
                        }
                    },
                    feb: {
                        "camera-culture.jpg": {
                            caption: "Concept work for the Get The Picture project for IAT",
                            link: "https://www.getthepicture.tours/"
                        },
                        "ezgif.com-gif-to-mp4 (10).mp4": {
                            caption: "Experimenting with some hero image transitions",
                            link: "https://dribbble.com/shots/4128126-Carousel-Transitions"
                        },
                        "ezgif.com-gif-to-mp4 (12).mp4": {
                            caption: "Entries for the Spaced competition",
                            link: ""
                        },
                        "fila_dribbble.jpg": {
                            caption: "Concept for the new Fila clothing range",
                            link: "https://dribbble.com/shots/4197326-Fila-Spring-Summer"
                        },
                        "fullsize.mp4": {
                            caption: "Image hover effect experimentation",
                            link: "https://dribbble.com/shots/4228572-Photo-Gallery-Hover-Idea"
                        },
                        "houseofplants_ar.mp4": {
                            caption: "House of plants AR app development",
                            link: ""
                        },
                        "nz.jpg": {
                            caption: "Surf Guide: New Zealand",
                            link: ""
                        },
                        "surf_fullsize.mp4": {
                            caption: "Distortion scroll effects",
                            link: "https://dribbble.com/shots/4273785-Surf-Guide-Scroll-Distort-Effect"
                        },
                        "surf_mob_fullsize.mp4": {
                            caption: "",
                            link: ""
                        }
                    },
                    mar: {
                        "When_To_Travel_Event_Loop_1080p.mp4.mp4": {
                            caption: "When To Travel launched",
                            link: "https://www.insideasiatours.com/when-to-travel"
                        },
                        "asia-office.jpg": {
                            caption: "We moved out of our offices on King Street",
                            link: ""
                        },
                        "certificate-when-to-travel-sotd.jpg": {
                            caption: "We won SOTD for our 'When to Travel' project for Inside Asia Tours",
                            link: "https://www.awwwards.com/sites/when-to-travel"
                        },
                        "ezgif.com-gif-to-mp4 (13).mp4": {
                            caption: "",
                            link: "https://dribbble.com/shots/4305497-Photo-Transitions"
                        },
                        "ezgif.com-gif-to-mp4 (15).mp4": {
                            caption: "A little smoke particle simulation",
                            link: "https://dribbble.com/shots/4381622-3D-Interactions-Series-4-Smoke-Switch"
                        },
                        "kim.jpg": {
                            caption: "Kim joined our team as an account manager",
                            link: ""
                        },
                        "office-move.mp4": {
                            caption: "Turning off the lights for the last time",
                            link: ""
                        },
                        "phototours.mp4": {
                            caption: "Photo Tours website launched",
                            link: ""
                        },
                        "skye_fullsize.mp4": {
                            caption: "Playing with the footage captured by our new drone",
                            link: "https://dribbble.com/shots/4416376-Wandr-Isle-of-Skye"
                        },
                        "yosemite.mp4": {
                            caption: "A little header transition experiment",
                            link: "https://dribbble.com/shots/4315719-Wandr-Yosemite-Header-Transition"
                        }
                    },
                    apr: {
                        "aperture-dribbble.jpg": {
                            caption: "",
                            link: ""
                        },
                        "beaches_nodistort.mp4": {
                            caption: "",
                            link: "https://dribbble.com/shots/4486525-Wandr-Beaches-Header-Transition"
                        },
                        "colour_01.jpg": {
                            caption: "",
                            link: "https://dribbble.com/shots/4477353-Etina-Web-Concept"
                        },
                        "ezgif.com-gif-to-mp4 (16).mp4": {
                            caption: "Testing out some lighting rigs",
                            link: "https://dribbble.com/shots/4465601-RayBan-Never-Hide-concept"
                        },
                        "ezgif.com-gif-to-mp4 (17).mp4": {
                            caption: "WebGL slider",
                            link: "https://codepen.io/ashthornton/full/KRQbMO/"
                        },
                        "ezgif.com-gif-to-mp4 (18).mp4": {
                            caption: "Eureka Moment",
                            link: "https://dribbble.com/shots/4533476-Eureka-Moment"
                        },
                        "its-official-video.mp4": {
                            caption: "Jack celebrates his job offer!",
                            link: ""
                        },
                        "skincare.jpg": {
                            caption: "",
                            link: ""
                        }
                    },
                    may: {
                        "DSC05316.jpg": {
                            caption: "Enjoying some downtime at Park G\xFCell during OFFF",
                            link: ""
                        },
                        "botanical.jpg": {
                            caption: "Branding concepts for Botanical Coffee",
                            link: "https://www.behance.net/gallery/68848615/Botanical-Coffee-Co"
                        },
                        "botanical_dev.jpg": {
                            caption: "Final brand tile for Botanical Coffee",
                            link: "https://www.behance.net/gallery/68848615/Botanical-Coffee-Co"
                        },
                        "cabin_fever.mp4": {
                            caption: "Wandr: Cabin Fever header transition",
                            link: ""
                        },
                        "coffeebag_shot.jpg": {
                            caption: "Final packaging design for Botanical Coffee",
                            link: "https://www.behance.net/gallery/68848615/Botanical-Coffee-Co"
                        },
                        "mars-fullsize_1.mp4": {
                            caption: "",
                            link: ""
                        },
                        "may-off.jpg": {
                            caption: "We met the talented Ash Willerton at OFFF",
                            link: ""
                        },
                        "off.jpg": {
                            caption: "Getting excited for OFFF Festival in Barca",
                            link: ""
                        }
                    },
                    jun: {
                        "GC Port_0046.jpg": {
                            caption: "Jack Harvatt joined our design team",
                            link: ""
                        },
                        "GC Port_0666.jpg": {
                            caption: "Jake came on board as a back-end developer",
                            link: ""
                        },
                        "its-official-video.mp4": {
                            caption: "Jack celebrates his job offer!",
                            link: ""
                        },
                        "jekka_bottle.png": {
                            caption: "We created a limited edition bottle for 6 O'Clock Gin",
                            link: ""
                        },
                        "jekka_bottle_front_label.png": {
                            caption: "Close up of the Jekka bottle for 6 O'Clock Gin",
                            link: ""
                        },
                        "jack.mp4": {
                            caption: "",
                            link: ""
                        },
                        "plasticdreams_fullsize.mp4": {
                            caption: "",
                            link: ""
                        }
                    },
                    jul: {
                        "05.jpg": {
                            caption: "R&D Water drop simulation",
                            link: ""
                        },
                        "6oclockgin (2).mp4": {
                            caption: "We launched a revamped new site for 6 o'clock Gin",
                            link: "https://www.6oclockgin.com/"
                        },
                        "luke.jpg": {
                            caption: "Luke joined the team as a front-end developer",
                            link: ""
                        },
                        "melt].jpg": {
                            caption: "Melt Candle Co Branding",
                            link: "https://dribbble.com/shots/4864742-Melt-Candle-Co"
                        },
                        "natural_wonders.mp4.mp4": {
                            caption: "Natural Wonders parallax idea",
                            link: "https://dribbble.com/shots/4873036-Natural-Wonders-Scroll"
                        },
                        "IMG_9709 2.jpg": {
                            caption: "Team breakfasts full of tasty treats",
                            link: ""
                        },
                        "sandsoftime.mp4.mp4": {
                            caption: "Sands of time",
                            link: "https://dribbble.com/shots/4816509-Load-n-Scroll"
                        }
                    },
                    aug: {
                        "1061670554.mp4.mp4": {
                            caption: "Jack dropped a trailer for his 'Disco' animation",
                            link: ""
                        },
                        "aug-nala.jpg": {
                            caption: "Nala joined the team as office pup!",
                            link: ""
                        },
                        "boatparty.jpg": {
                            caption: "We drank plenty of cider at our summer party",
                            link: ""
                        },
                        "cssda-wotd.jpg": {
                            caption: "We won a CSSDA SOTD for Get the Picture!",
                            link: "https://cssdesignawards.com/sites/get-the-picture/33487/"
                        },
                        "ezgif.com-gif-to-mp4 (10).mp4": {
                            caption: "Human Interactions",
                            link: "https://dribbble.com/shots/5046361-Human-Interactions"
                        },
                        "ezgif.com-gif-to-mp4 (6).mp4": {
                            caption: "Interactive icons",
                            link: "https://dribbble.com/shots/4891767-"
                        },
                        "ezgif.com-gif-to-mp4 (7).mp4": {
                            caption: "Portfolio concept by Asia",
                            link: "https://dribbble.com/shots/4932443-"
                        },
                        "ezgif.com-gif-to-mp4 (8).mp4": {
                            caption: "Land Rover concept",
                            link: "https://dribbble.com/shots/5022977-Land-Rover-Web-Interactions"
                        },
                        "ezgif.com-gif-to-mp4 (9).mp4": {
                            caption: "Warped menu interactions",
                            link: "https://dribbble.com/shots/5044951-"
                        },
                        "shapes___lighting.jpg": {
                            caption: "Shape and lighting study by Dan",
                            link: ""
                        }
                    },
                    sep: {
                        "1.jpg": {
                            caption: "Renders of David",
                            link: ""
                        },
                        "asaro-web-live-shot_4x (2).jpg": {
                            caption: "We launched an immersive new site for Asaro",
                            link: "https://asaro.co.uk/"
                        },
                        "bunder_fullsize.mp4.mp4": {
                            caption: "Horiztonal scrolling parallax",
                            link: "https://dribbble.com/shots/5106773-Horizontal-Parallax-Scroll"
                        },
                        "butterysmoothversion.mp4.mp4": {
                            caption: "Mobile interactions for the NFL preview we worked on with ESPN",
                            link: "https://dribbble.com/shots/5239960-ESPN-Mobile-Interactions"
                        },
                        "carhartt_bigboi.mp4.mp4": {
                            caption: "3D Grid interaction idea",
                            link: "https://dribbble.com/shots/5122175-Cursor-Interaction-Concept"
                        },
                        "ding_ding.mp4.mp4": {
                            caption: "Specular Distortions",
                            link: "https://dribbble.com/shots/5221731-ultracheese"
                        },
                        "ezgif.com-gif-to-mp4 (11).mp4": {
                            caption: "Prelude rotating Beer",
                            link: "https://dribbble.com/shots/5088455-Rotatin"
                        },
                        "ezgif.com-gif-to-mp4 (12).mp4": {
                            caption: "Lucid WebGL interaction concept",
                            link: "https://dribbble.com/shots/5092605-Displacement-R-D"
                        },
                        "ezgif.com-gif-to-mp4 (13).mp4": {
                            caption: "Water simulations for Asaro",
                            link: "https://dribbble.com/shots/5138162-Water-Simulations-R-D"
                        },
                        "ezgif.com-gif-to-mp4 (14).mp4": {
                            caption: "Studio David",
                            link: "https://dribbble.com/shots/5263912-Studio-David"
                        },
                        "habital_hifi.mp4.mp4.mp4": {
                            caption: "Habital",
                            link: "https://dribbble.com/shots/5313972-Habital-Interiors-Showcase"
                        },
                        "mantra_fullres (1).mp4.mp4": {
                            caption: "BMTH Mantra Track Preview concept",
                            link: "https://dribbble.com/shots/5095880-Mantra-Track-Preview"
                        },
                        "nfl_screens_4x.jpg": {
                            caption: "We worked with ESPN on their NFL Preview",
                            link: "https://dribbble.com/shots/5213950-ESPN-NFL-Preview-Screens"
                        }
                    },
                    oct: {
                        "comp_1_1.mp4 (1).mp4": {
                            caption: "Kyoto Black Lookbook with coded demo by Jesper Landberg",
                            link: "https://dribbble.com/shots/5475422-Kyoto-Black-Look-book-Live-Demo"
                        },
                        "comp_1_1.mp4.mp4": {
                            caption: "Trying out the new Dribbble Mp4 upload feature",
                            link: "https://dribbble.com/shots/5452617-NMD-Cursor-and-Scrolling-Interactions"
                        },
                        "ezgif.com-gif-to-mp4 (15).mp4": {
                            caption: "Adaptive text",
                            link: "https://dribbble.com/shots/5361227-"
                        },
                        "ezgif.com-gif-to-mp4 (16).mp4": {
                            caption: "Spooky interactions",
                            link: "https://dribbble.com/shots/5394685-Right-in-the-Spooks"
                        },
                        "ezgif.com-gif-to-mp4 (17).mp4": {
                            caption: "Ghosts and Ghouls interaction exploration",
                            link: "https://dribbble.com/shots/5435034-Ghosts-Ghouls"
                        },
                        "fwawwward-asaro.jpg": {
                            caption: "Asaro won Awwwards and FWA SOTD!",
                            link: ""
                        },
                        "kingdoms-fullsize (1).mp4.mp4": {
                            caption: "Floral music player concept",
                            link: "https://dribbble.com/shots/5380278-Maribou-State-Player-Interface"
                        },
                        "sign.jpg": {
                            caption: "Ash Willerton worked his magic on our studio door",
                            link: ""
                        }
                    },
                    nov: {
                        "DSC08088.jpg": {
                            caption: "We created the packaging for a unique, limited edition 5 Year aged Sloe Gin with 6 o'clock Gin",
                            link: ""
                        },
                        "adobe_xd_mockup.jpg": {
                            caption: "Dan's entry to the Adobe XD competition on Dribbble",
                            link: "https://dribbble.com/shots/5556268-BSB-x-AdobeXD"
                        },
                        "comp_1.mp4.mp4": {
                            caption: "An unused concept from the new Epicurrence site",
                            link: "https://dribbble.com/shots/5575499-Epic-Unused"
                        },
                        "comp_1_11.mp4.mp4": {
                            caption: "Paper slider concept",
                            link: "https://dribbble.com/shots/5517376-Paper-Fashion-Slider"
                        },
                        "comp_1_3.mp4.mp4": {
                            caption: "Nath's first work using Cinema 4D",
                            link: "https://dribbble.com/shots/5579163-Egyptian-Dynasties-Transitions"
                        },
                        "ezgif.com-gif-to-mp4 (18).mp4": {
                            caption: "Kinetic type explorations",
                            link: "https://dribbble.com/shots/5497074-"
                        },
                        "full_animation.mp4.mp4": {
                            caption: "Pastel Paradise",
                            link: "https://dribbble.com/shots/5532273-Colour-Selector-Pastel-Paradise"
                        },
                        "iat-webdesigner.jpg": {
                            caption: "We had a 6 page feature in Web Designer Magazine for 'When to Travel'",
                            link: ""
                        },
                        "kikk.jpg": {
                            caption: "We headed out to Belgium to experience the KIKK festival",
                            link: ""
                        }
                    },
                    dec: {
                        "comp_1.mp4 (1).mp4": {
                            caption: "Hover reveal effect concept",
                            link: "https://dribbble.com/shots/5727121-Mont-Blanc-Text-Reveal"
                        },
                        "comp_1.mp4.mp4": {
                            caption: "Battle at the Berrics app idea",
                            link: "https://dribbble.com/shots/5658836-BATB-11-Mobile-Concept"
                        },
                        "comp_1_1.mp4.mp4": {
                            caption: "Nath starting learning X-particles and created this concept for Pantone colour of the year",
                            link: "https://dribbble.com/shots/5681842-Pantone-Color-of-the-Year-Living-Coral"
                        },
                        "comp_1_2.mp4.mp4": {
                            caption: "We visualised a Battle at the Berrics website",
                            link: "https://dribbble.com/shots/5645974-BATB-11-Concept"
                        },
                        "studio_of_the_year_nom.jpg": {
                            caption: "We were honoured to be nominated for Studio of the Year by Awwwards",
                            link: ""
                        },
                        "xmas.mp4": {
                            caption: "Too many shots at our Christmas party",
                            link: ""
                        }
                    }
                },
                ve = function() {
                    function e() {
                        S(this, e), this.setConfig(), this.init(), window.assets ? (console.log("cached assets"), this.assets = window.assets, this.createTimeline()) : (this.loadAssets(), console.log("reload assets"))
                    }
                    var t = Math.atan;
                    return M(e, [{
                        key: "setConfig",
                        value: function() {
                            this.dom = {
                                cursor: document.querySelector(".cursor"),
                                compass: document.querySelector(".compass"),
                                compassSvg: document.querySelector(".compass svg"),
                                mainSvgs: document.querySelectorAll("main :not(.compass) svg"),
                                cursorSvgs: document.querySelectorAll(".cursor svg")
                            }, this.c = {
                                dpr: 2 <= window.devicePixelRatio ? 2 : 1,
                                startTime: Date.now(),
                                size: {
                                    w: window.innerWidth,
                                    h: window.innerHeight
                                },
                                scrollPos: 0,
                                scrolling: !1,
                                allowScrolling: !0,
                                autoMoveSpeed: 0,
                                isMobile: this.isMobile(),
                                holdingMouseDown: !1,
                                touchEnabled: "ontouchstart" in window
                            }, this.c.globalScale = Math.min(1, this.c.size.w / 1400), this.c.touchEnabled ? document.documentElement.classList.add("touch-enabled") : document.documentElement.classList.add("enable-cursor"), this.assetList = fe, this.assetList.intro = ["ok.png"], this.assetList.end = ["wave.mp4"], this.assetData = be, this.timelineEntered = !1, this.activeMonth = "intro", this.months = he, this.monthPositions = {}, this.remainingMonths = [], this.enableLoader = !0, this.gyroEnabled = !1, this.orientation = {
                                gamma: 0,
                                beta: 0
                            }, this.easterEgg = this.easterEgg.bind(this), new ge.a(this.easterEgg), this.easterEggEnabled = !1, this.enableLoader || (document.querySelector(".loading").style.display = "none")
                        }
                    }, {
                        key: "isMobile",
                        value: function() {
                            var e = navigator.userAgent || navigator.vendor || window.opera;
                            return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
                        }
                    }, {
                        key: "loadAssets",
                        value: function() {
                            var e = this,
                                t = new ie(this.c.isMobile);
                            this.enableLoader ? setTimeout(function() {
                                t.load(e.assetList, e.renderer).then(function(t) {
                                    e.assets = t, console.log("ASSETS LOADED"), e.createTimeline()
                                })
                            }, 2e3) : t.load(this.assetList, this.renderer).then(function(t) {
                                e.assets = t, console.log("ASSETS LOADED"), e.createTimeline()
                            })
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var e = this;
                            this.renderer = new I.a({
                                antialias: !0,
                                alpha: !0
                            }), this.renderer.setPixelRatio(this.c.dpr), this.renderer.setSize(this.c.size.w, this.c.size.h), document.body.appendChild(this.renderer.domElement), this.preventPullToRefresh(), this.scene = new D.a, this.scene.background = new W.a(11454403), this.scene.fog = new F.a(11454403, 1400, 2e3), this.scene.scale.set(this.c.globalScale, this.c.globalScale, 1);
                            var o = 800,
                                i = 180 * (2 * t(this.c.size.h / 2 / o)) / P;
                            this.camera = new A.a(i, this.c.size.w / this.c.size.h, 1, 2e3), this.camera.position.set(0, this.enableLoader ? 2e3 : 0, o), this.raycaster = new B.a, this.raycaster.near = this.camera.near, this.raycaster.far = this.camera.far, this.intersects = [], this.linkIntersect = [], this.whooshIntersects = [], this.frustum = new H.a, this.cameraViewProjectionMatrix = new U.a, this.mouse = new Y.a, this.mousePerspective = new Y.a, window.addEventListener("devicemotion", function(t) {
                                (t.rotationRate.alpha || t.rotationRate.beta || t.rotationRate.gamma) && (e.gyroEnabled = !0)
                            })
                        }
                    }, {
                        key: "createTimeline",
                        value: function() {
                            var e = this;
                            this.timeline = new G.a, this.scene.add(this.timeline), this.textMat = new X.a({
                                color: 1786584,
                                transparent: !0
                            }), this.captionTextMat = new X.a({
                                color: 1786584,
                                transparent: !0,
                                opacity: 0,
                                visible: !1
                            }), this.linkUnderlineMat = new X.a({
                                color: 1786584,
                                transparent: !0,
                                opacity: 0,
                                visible: !1
                            }), this.textOutlineMat = new X.a({
                                color: 1786584,
                                transparent: !0
                            }), this.contactTextMat = new X.a({
                                color: 16777215
                            }), this.sections = {}, this.items = {}, this.itemMeshes = [], this.videoItems = [];
                            var t = 0,
                                o = 0,
                                i = function(i) {
                                    if (e.sections[i] = new de({
                                            timeline: timeline,
                                            section: i
                                        }), "intro" !== i && "end" !== i) {
                                        var n, a = 0;
                                        e.assetList[i].forEach(function(o) {
                                            n = "".concat(i, "/").concat(o), e.items[n] = new ce({
                                                timeline: e,
                                                texture: e.assets.textures[i][o],
                                                data: e.assetData[i][o],
                                                month: i,
                                                itemIndex: a,
                                                itemIndexTotal: t
                                            }), e.sections[i].add(e.items[n]), a++, t++
                                        })
                                    }
                                    var r = new R.a().setFromObject(e.sections[i]);
                                    e.sections[i].position.z = o, e.monthPositions[i] = o + 1100;
                                    var s = 800;
                                    "intro" === i && (s = 1700), "dec" === i && (s = 1800), o += r.min.z - s, e.timeline.add(e.sections[i]), "end" === i && (e.stopScrollPos = e.sections[i].position.z)
                                };
                            for (var n in this.months) i(n);
                            this.videoCount = this.videoItems.length, this.contactSection = new de({
                                timeline: timeline,
                                section: "contact"
                            }), this.contactSection.visible = !1, this.scene.add(this.contactSection), this.linkGroup = new G.a;
                            var a = new N.a("SEE MORE", {
                                font: this.assets.fonts["SuisseIntl-Bold"],
                                size: 6,
                                height: 0,
                                curveSegments: 4
                            }).center();
                            this.link = new V.a(a, this.captionTextMat), this.linkUnderline = new V.a(new q.a(45, 1), this.linkUnderlineMat), this.linkUnderline.position.set(0, -10, 0), this.linkBox = new V.a(new q.a(70, 20), new X.a({
                                alphaTest: 0,
                                visible: !1
                            })), this.linkGroup.visible = !1, this.linkGroup.add(this.link), this.linkGroup.add(this.linkUnderline), this.linkGroup.add(this.linkBox), this.scene.add(this.linkGroup), console.log("RENDER"), this.animate(), this.initCursorListeners(), this.initListeners(), document.body.classList.add("ready")
                        }
                    }, {
                        key: "moveToStart",
                        value: function() {
                            var e = this;
                            J.a.to(this.camera.position, 2, {
                                y: 0,
                                ease: "Expo.easeInOut"
                            }), J.a.to(".loading", 2, {
                                y: "-100%",
                                ease: "Expo.easeInOut",
                                onComplete: function() {
                                    document.querySelector(".loading").style.display = "none", e.timelineEntered = !0
                                }
                            }), J.a.to([".say-hello", ".logo", ".social"], 2, {
                                y: 0,
                                delay: 1,
                                ease: "Expo.easeInOut"
                            }), J.a.to([".left", ".right"], 2, {
                                x: 0,
                                delay: 1,
                                ease: "Expo.easeInOut"
                            }), this.gyroEnabled && J.a.to(this.dom.compass, 2, {
                                y: 0,
                                delay: 1,
                                ease: "Expo.easeInOut"
                            })
                        }
                    }, {
                        key: "openItem",
                        value: function(e) {
                            var t = this;
                            if (this.itemAnimating = !0, this.itemOpen = e, this.origTimelinePos = this.timeline.position.z, this.c.allowScrolling = !1, this.c.isMobile) {
                                var o = e.mesh.material.uniforms.texture.value;
                                "video" === o.mediaType && (o.image.src = "assets/" + o.name, o.image.play())
                            }
                            var i = this.sections[this.activeMonth].position.z;
                            e.month !== this.activeMonth && (i = this.sections[this.remainingMonths[this.remainingMonths.length - 2]].position.z), J.a.to(e.position, 1.5, {
                                x: 0,
                                y: 0,
                                ease: "Expo.easeInOut",
                                onComplete: function() {
                                    t.itemAnimating = !1, t.dom.cursor.dataset.cursor = "cross"
                                }
                            }), J.a.to(e.uniforms.progress, 1.5, {
                                value: 1,
                                ease: "Expo.easeInOut"
                            }), J.a.to(this.timeline.position, 1.5, {
                                z: -(i - -e.position.z) + (.5 > this.c.globalScale ? 450 : 300),
                                ease: "Expo.easeInOut"
                            }), J.a.to(this.textMat, 1, {
                                opacity: 0,
                                ease: "Expo.easeInOut",
                                onComplete: function() {
                                    t.textMat.visible = !1
                                }
                            }), J.a.to(this.captionTextMat, 2, {
                                opacity: 1,
                                ease: "Expo.easeInOut",
                                delay: .3,
                                onStart: function() {
                                    t.captionTextMat.visible = !0
                                }
                            }), J.a.to(this.linkUnderlineMat, 2, {
                                opacity: .4,
                                ease: "Expo.easeInOut",
                                delay: .3,
                                onStart: function() {
                                    t.linkUnderlineMat.visible = !0
                                }
                            }), e.caption && J.a.fromTo(e.caption.position, 2, {
                                z: -100
                            }, {
                                z: 0,
                                delay: .2,
                                ease: "Expo.easeInOut",
                                onStart: function() {
                                    e.caption.visible = !0
                                }
                            }), e.data.link && (this.linkBox.onClick = function() {
                                window.open(e.data.link, "_blank")
                            }, this.linkGroup.position.y = e.caption ? e.caption.position.y - 40 : -e.mesh.scale.y / 2 - 50, J.a.fromTo(this.linkGroup.position, 2, {
                                z: 0
                            }, {
                                z: .5 > this.c.globalScale ? 450 : 300,
                                delay: .3,
                                ease: "Expo.easeInOut",
                                onStart: function() {
                                    t.linkGroup.visible = !0
                                }
                            }));
                            var n = new Y.a;
                            for (var a in this.items) 0 === this.items[a].align && n.set(-700, 700), 1 === this.items[a].align && n.set(700, 700), 2 === this.items[a].align && n.set(700, -700), 3 === this.items[a].align && n.set(-700, -700), this.items[a] === e || (J.a.to(this.items[a].material.uniforms.opacity, 1.3, {
                                value: 0,
                                ease: "Expo.easeInOut"
                            }), J.a.to(this.items[a].position, 1.3, {
                                x: n.x,
                                y: n.y,
                                ease: "Expo.easeInOut"
                            }))
                        }
                    }, {
                        key: "closeItem",
                        value: function() {
                            var e = this;
                            if (!this.itemAnimating && this.itemOpen) {
                                if (this.itemAnimating = !0, this.dom.cursor.dataset.cursor = "pointer", this.c.isMobile) {
                                    var t = this.itemOpen.mesh.material.uniforms.texture.value;
                                    "video" === t.mediaType && (t.image.pause(), t.image.src = "", t.image.load())
                                }
                                for (var o in J.a.to(this.itemOpen.position, 1.5, {
                                        x: this.itemOpen.origPos.x,
                                        y: this.itemOpen.origPos.y,
                                        ease: "Expo.easeInOut"
                                    }), J.a.to(this.timeline.position, 1.5, {
                                        z: this.origTimelinePos,
                                        ease: "Expo.easeInOut",
                                        onComplete: function() {
                                            e.c.allowScrolling = !0, e.itemOpen = !1, e.itemAnimating = !1
                                        }
                                    }), J.a.to(this.itemOpen.uniforms.progress, 1.5, {
                                        value: 0,
                                        ease: "Expo.easeInOut"
                                    }), J.a.to(this.textMat, 1.5, {
                                        opacity: 1,
                                        ease: "Expo.easeInOut",
                                        onStart: function() {
                                            e.textMat.visible = !0
                                        }
                                    }), J.a.to([this.captionTextMat, this.linkUnderlineMat], .4, {
                                        opacity: 0,
                                        ease: "Expo.easeInOut",
                                        onComplete: function() {
                                            e.captionTextMat.visible = !1, e.linkUnderlineMat.visible = !1, e.itemOpen.caption && (e.itemOpen.caption.visible = !1), e.linkGroup.visible = !1
                                        }
                                    }), this.items) this.items[o].active || (J.a.to(this.items[o].material.uniforms.opacity, 1.5, {
                                    value: 1,
                                    ease: "Expo.easeInOut"
                                }), J.a.to(this.items[o].position, 1.5, {
                                    x: this.items[o].origPos.x,
                                    y: this.items[o].origPos.y,
                                    ease: "Expo.easeInOut"
                                }))
                            }
                        }
                    }, {
                        key: "openContact",
                        value: function(t) {
                            var e = this;
                            return t.preventDefault(), this.contactSection.isOpen ? this.closeContact() : void(this.dom.cursor.dataset.cursor = "cross", this.contactSection.visible = !0, this.contactSection.isOpen = !0, this.c.allowScrolling = !1, this.linkUnderlineMat.visible = !0, this.linkUnderlineMat.opacity = .3, J.a.to(this.camera.position, 2, {
                                y: this.contactSection.position.y * this.scene.scale.y,
                                ease: "Expo.easeInOut",
                                onComplete: function() {
                                    e.timeline.visible = !1
                                }
                            }))
                        }
                    }, {
                        key: "closeContact",
                        value: function() {
                            var e = this;
                            this.timeline.visible = !0, this.contactSection.isOpen = !1, J.a.to(this.camera.position, 2, {
                                y: 0,
                                ease: "Expo.easeInOut",
                                onComplete: function() {
                                    e.contactSection.visible = !1, e.c.allowScrolling = !0, e.linkUnderlineMat.visible = !1, e.linkUnderlineMat.opacity = 0
                                }
                            })
                        }
                    }, {
                        key: "scroll",
                        value: function(t) {
                            var e = function(t) {
                                return t.detail && t.wheelDelta ? t.wheelDelta / t.detail / 40 * (0 < t.detail ? 1 : -1) : t.deltaY ? -t.deltaY / 60 : t.wheelDelta / 120
                            }(t);
                            this.c.scrollPos += 60 * -e, this.c.scrolling = !0
                        }
                    }, {
                        key: "mouseDown",
                        value: function(t) {
                            var e = this;
                            t.preventDefault(), t.stopPropagation(), this.easterEggEnabled || (this.c.holdingMouseDown = !0, this.contactSection.isOpen ? 0 < this.linkIntersect.length ? this.linkIntersect[0].object.onClick && this.linkIntersect[0].object.onClick() : this.closeContact() : this.itemOpen ? 0 < this.linkIntersect.length ? this.linkIntersect[0].object.onClick && this.linkIntersect[0].object.onClick() : this.closeItem() : 0 < this.intersects.length ? (this.openItem(this.intersects[0].object.parent), this.dom.cursor.dataset.cursor = "cross") : this.hoveringWhoosh ? (this.c.scrolling = !0, J.a.to(this.c, 4, {
                                scrollPos: 0,
                                ease: "Expo.easeInOut",
                                onUpdate: function() {
                                    e.c.scrolling = !0
                                }
                            })) : (this.dom.cursor.dataset.cursor = "move", J.a.to(this.c, .5, {
                                delay: .7,
                                autoMoveSpeed: 20
                            })))
                        }
                    }, {
                        key: "mouseUp",
                        value: function() {
                            this.itemOpen || (this.dom.cursor.dataset.cursor = "pointer"), this.c.holdingMouseDown = !1, J.a.killTweensOf(this.c, {
                                autoMoveSpeed: !0
                            }), this.c.autoMoveSpeed = 0
                        }
                    }, {
                        key: "mouseMove",
                        value: function(t) {
                            this.mousePerspective.x = t.clientX / window.innerWidth - .5, this.mousePerspective.y = t.clientY / window.innerHeight - .5, this.updatingPerspective = !0, this.c.touchEnabled || J.a.to(".cursor", 1.5, {
                                x: t.clientX,
                                y: t.clientY,
                                ease: "Power4.easeOut"
                            }), !this.renderer || t.target !== this.renderer.domElement || this.easterEggEnabled || (this.mouse.x = 2 * (t.clientX / this.renderer.domElement.clientWidth) - 1, this.mouse.y = 2 * -(t.clientY / this.renderer.domElement.clientHeight) + 1, this.raycaster.setFromCamera(this.mouse, this.camera), !this.contactSection.isOpen && !this.itemOpen && !this.c.holdingMouseDown && ("end" === this.activeMonth ? (this.intersects = [], this.whooshIntersects = this.raycaster.intersectObjects(this.sections.end.whoosh.children), 0 < this.whooshIntersects.length ? (this.dom.cursor.dataset.cursor = "none", this.hoveringWhoosh = !0, this.sections.end.arrowTween.timeScale(2)) : this.hoveringWhoosh && (this.dom.cursor.dataset.cursor = "pointer", this.hoveringWhoosh = !1, this.sections.end.arrowTween.timeScale(1))) : (this.intersects = this.raycaster.intersectObjects(this.itemMeshes), 0 < this.intersects.length ? this.dom.cursor.dataset.cursor = "eye" : "pointer" !== this.dom.cursor.dataset.cursor && (this.dom.cursor.dataset.cursor = "pointer"))), !this.contactSection.isOpen && this.itemOpen && this.itemOpen.data.link && (this.linkIntersect = this.raycaster.intersectObject(this.linkBox), 0 < this.linkIntersect.length ? this.dom.cursor.dataset.cursor = "eye" : "cross" !== this.dom.cursor.dataset.cursor && (this.dom.cursor.dataset.cursor = "cross")), this.contactSection.isOpen && (this.linkIntersect = this.raycaster.intersectObject(this.contactSection.linkBox), 0 < this.linkIntersect.length ? this.dom.cursor.dataset.cursor = "eye" : "cross" !== this.dom.cursor.dataset.cursor && (this.dom.cursor.dataset.cursor = "cross")))
                        }
                    }, {
                        key: "updatePerspective",
                        value: function() {
                            J.a.to(this.camera.rotation, 4, {
                                x: .5 * -this.mousePerspective.y,
                                y: .5 * -this.mousePerspective.x,
                                ease: "Power4.easeOut"
                            }), "end" === this.activeMonth && J.a.to(this.sections.end.arrow.rotation, 4, {
                                x: -1.5 + .2 * this.mousePerspective.y,
                                y: .8 * this.mousePerspective.x,
                                ease: "Power4.easeOut"
                            }), this.updatingPerspective = !1
                        }
                    }, {
                        key: "updateOrientation",
                        value: function(t) {
                            this.orientation.gamma = t.gamma ? t.gamma : 0, this.orientation.beta = t.beta ? t.beta : 0, this.initialOrientation || (this.initialOrientation = {
                                gamma: this.orientation.gamma,
                                beta: this.orientation.beta
                            }), J.a.to(this.camera.rotation, 2, {
                                x: this.orientation.beta ? (this.orientation.beta - this.initialOrientation.beta) * (P / 300) : 0,
                                y: this.orientation.gamma ? (this.orientation.gamma - this.initialOrientation.gamma) * (P / 300) : 0,
                                ease: "Power4.easeOut"
                            })
                        }
                    }, {
                        key: "resetOrientation",
                        value: function() {
                            this.initialOrientation = {
                                gamma: this.orientation.gamma,
                                beta: this.orientation.beta
                            }
                        }
                    }, {
                        key: "changeColours",
                        value: function() {
                            var e = this,
                                t = !!(0 < arguments.length && void 0 !== arguments[0]) && arguments[0];
                            if (this.remainingMonths = Object.keys(this.monthPositions).filter(function(t) {
                                    return e.timeline.position.z > -e.monthPositions[t]
                                }), t || this.remainingMonths[this.remainingMonths.length - 1] && this.activeMonth !== this.remainingMonths[this.remainingMonths.length - 1]) {
                                this.activeMonth = t ? t : this.remainingMonths[this.remainingMonths.length - 1];
                                var o, i = new W.a(this.months[this.activeMonth].bgColor),
                                    n = new W.a(this.months[this.activeMonth].textColor),
                                    a = new W.a(this.months[this.activeMonth].tintColor);
                                for (var r in J.a.to([this.scene.fog.color, this.scene.background], 1, {
                                        r: i.r,
                                        g: i.g,
                                        b: i.b,
                                        ease: "Power4.easeOut"
                                    }), J.a.to(this.textMat.color, 1, {
                                        r: n.r,
                                        g: n.g,
                                        b: n.b,
                                        ease: "Power4.easeOut"
                                    }), J.a.set([this.captionTextMat.color, this.linkUnderlineMat.color], {
                                        r: n.r,
                                        g: n.g,
                                        b: n.b
                                    }), this.items) J.a.to(this.items[r].uniforms.gradientColor.value, 1, {
                                    r: a.r,
                                    g: a.g,
                                    b: a.b,
                                    ease: "Power4.easeOut"
                                });
                                if (this.months[this.activeMonth].outlineTextColor) {
                                    var s = new W.a(this.months[this.activeMonth].outlineTextColor);
                                    o = s.getHexString(), J.a.to([this.textOutlineMat.color], 1, {
                                        r: s.r,
                                        g: s.g,
                                        b: s.b,
                                        ease: "Power4.easeOut"
                                    })
                                } else o = n.getHexString();
                                this.months[this.activeMonth].contactColor ? this.contactTextMat.color.set(this.months[this.activeMonth].contactColor) : this.contactTextMat.color.set(16777215), J.a.to(this.dom.mainSvgs, 1, {
                                    fill: "#".concat(o),
                                    ease: "Power4.easeOut"
                                }), J.a.to([this.dom.cursorSvgs, this.dom.compassSvg], 1, {
                                    stroke: "#".concat(o),
                                    ease: "Power4.easeOut"
                                }), J.a.to(".say-hello .underline", 1, {
                                    borderBottomColor: "#".concat(o),
                                    ease: "Power4.easeOut"
                                }), document.querySelector("meta[name=theme-color]").setAttribute("content", "#" + i.getHexString()), "end" !== this.activeMonth || this.sections.end.arrowTween ? this.sections.end.arrowTween && (this.sections.end.arrowTween = !1) : this.sections.end.arrowTween = J.a.to(this.sections.end.arrow.position, 1, {
                                    z: 0,
                                    repeat: -1,
                                    yoyo: !0,
                                    ease: "Power2.easeInOut"
                                })
                            }
                        }
                    }, {
                        key: "handleVideos",
                        value: function() {
                            this.camera.updateMatrixWorld(), this.camera.matrixWorldInverse.getInverse(this.camera.matrixWorld), this.cameraViewProjectionMatrix.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse), this.frustum.setFromMatrix(this.cameraViewProjectionMatrix);
                            for (var e = 0; e < this.videoCount; e++) {
                                if (this.frustum.intersectsObject(this.videoItems[e]) && this.videoItems[e].material.uniforms.texture.value.image.paused) {
                                    this.videoItems[e].material.uniforms.texture.value.image.play();
                                    continue
                                }
                                this.frustum.intersectsObject(this.videoItems[e]) || this.videoItems[e].material.uniforms.texture.value.image.paused || this.videoItems[e].material.uniforms.texture.value.image.pause()
                            }
                        }
                    }, {
                        key: "animate",
                        value: function() {
                            if (this.animationId = requestAnimationFrame(this.animate.bind(this)), !this.c.touchEnabled && this.updatingPerspective && (this.updatePerspective(), this.updatingPerspective = !1), 0 < this.c.autoMoveSpeed && (this.c.scrolling = !0, this.c.scrollPos += this.c.autoMoveSpeed), this.c.allowScrolling && this.c.scrolling) {
                                0 >= this.c.scrollPos && (this.c.scrollPos = 0), this.c.scrollPos >= -this.stopScrollPos && (this.c.scrollPos = -this.stopScrollPos);
                                var e = (this.c.scrollPos - this.timeline.position.z) / 12;
                                this.timeline.position.z += e, !this.c.isMobile && 8 > j(e) && this.handleVideos(), this.easterEggEnabled || this.changeColours(), 700 > this.timeline.position.z && J.a.set(this.sections.intro.circle.rotation, {
                                    z: "+=" + .005 * e
                                }), this.c.scrolling = !!(.1 < j(e))
                            }
                            this.hoveringWhoosh && (this.sections.end.circle.rotation.z += .005), this.renderer.render(this.scene, this.camera)
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this.c.size = {
                                w: window.innerWidth,
                                h: window.innerHeight
                            }, this.camera.fov = 180 * (2 * t(this.c.size.h / 2 / this.camera.position.z)) / P, this.camera.aspect = this.c.size.w / this.c.size.h, this.camera.updateProjectionMatrix(), this.renderer.setSize(this.c.size.w, this.c.size.h)
                        }
                    }, {
                        key: "eyeCursorElEnter",
                        value: function() {
                            this.dom.cursor.dataset.cursor = "eye"
                        }
                    }, {
                        key: "eyeCursorElLeave",
                        value: function() {
                            this.dom.cursor.dataset.cursor = "pointer"
                        }
                    }, {
                        key: "initListeners",
                        value: function() {
                            var e = this;
                            this.resize = this.resize.bind(this), this.scroll = this.scroll.bind(this), this.mouseDown = this.mouseDown.bind(this), this.mouseUp = this.mouseUp.bind(this), this.openContact = this.openContact.bind(this), this.moveToStart = this.moveToStart.bind(this), window.addEventListener("resize", this.resize, !1), this.renderer.domElement.addEventListener("mousedown", this.mouseDown, !1), this.renderer.domElement.addEventListener("mouseup", this.mouseUp, !1), this.renderer.domElement.addEventListener("wheel", this.scroll, !1), this.gyroEnabled && (this.updateOrientation = this.updateOrientation.bind(this), this.resetOrientation = this.resetOrientation.bind(this), window.addEventListener("deviceorientation", this.updateOrientation), this.dom.compass.addEventListener("click", this.resetOrientation, !1)), document.querySelector(".say-hello").addEventListener("click", this.openContact, !1), this.enableLoader && document.querySelector(".enter").addEventListener("click", this.moveToStart, !1), this.gesture = new K(this.renderer.domElement, {
                                mouseSupport: !1
                            }), this.gesture.on("panmove", function() {
                                e.c.scrollPos += 6 * -e.gesture.velocityY, e.c.scrolling = !0
                            }), this.gesture.on("panend", function() {
                                return e.c.autoMoveSpeed = 0
                            }), this.gesture.on("longpress", function() {
                                return e.c.autoMoveSpeed = 10
                            }), this.c.touchEnabled || (this.dom.cursor.dataset.cursor = "pointer")
                        }
                    }, {
                        key: "initCursorListeners",
                        value: function() {
                            this.eyeCursorElEnter = this.eyeCursorElEnter.bind(this), this.eyeCursorElLeave = this.eyeCursorElLeave.bind(this), this.mouseMove = this.mouseMove.bind(this), window.addEventListener("mousemove", this.mouseMove, !1);
                            for (var e = document.querySelectorAll(".cursor-eye"), t = 0; t < e.length; t++) e[t].addEventListener("mouseenter", this.eyeCursorElEnter, !1), e[t].addEventListener("mouseleave", this.eyeCursorElLeave, !1)
                        }
                    }, {
                        key: "preventPullToRefresh",
                        value: function() {
                            var t = !1;
                            this.renderer.domElement.addEventListener("touchstart", function(o) {
                                if (1 === o.touches.length) {
                                    var e = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
                                    t = 0 === e
                                }
                            }), this.renderer.domElement.addEventListener("touchmove", function(o) {
                                t && (t = !1, o.preventDefault())
                            })
                        }
                    }, {
                        key: "easterEgg",
                        value: function() {
                            if (this.timelineEntered) {
                                console.log("CHEATER!"), this.easterEggEnabled = !0, J.a.to(this.timeline.rotation, 2, {
                                    z: 360 * P / 180,
                                    ease: "Power4.easeInOut"
                                }), this.discoColours();
                                for (var e = 0; e < this.itemMeshes.length - 1; e++) J.a.to(this.itemMeshes[e].rotation, 2, {
                                    z: 360 * P / 180,
                                    ease: "Linear.easeNone",
                                    repeat: -1
                                });
                                for (var t in J.a.to(this.sections.intro.children[2].rotation, 2, {
                                        z: 360 * P / 180,
                                        ease: "Linear.easeNone",
                                        repeat: -1
                                    }), this.sections) J.a.to(this.sections[t].children[0].position, 1, {
                                    z: 150,
                                    repeat: -1,
                                    yoyo: !0,
                                    ease: "Linear.easeNone"
                                })
                            }
                        }
                    }, {
                        key: "discoColours",
                        value: function() {
                            var e = this,
                                t = function(t) {
                                    J.a.to(e.items[t].uniforms.gradientColor.value, 1, {
                                        r: .9882352941,
                                        g: .2941176471,
                                        b: .05882352941,
                                        ease: "Power4.easeOut",
                                        onComplete: function() {
                                            J.a.to(e.items[t].uniforms.gradientColor.value, 1, {
                                                r: .9882352941,
                                                g: .05882352941,
                                                b: .7529411765,
                                                ease: "Power4.easeOut",
                                                onComplete: function() {
                                                    J.a.to(e.items[t].uniforms.gradientColor.value, 1, {
                                                        r: .05882352941,
                                                        g: .7529411765,
                                                        b: .9882352941,
                                                        ease: "Power4.easeOut",
                                                        onComplete: function() {
                                                            J.a.to(e.items[t].uniforms.gradientColor.value, 1, {
                                                                r: .05882352941,
                                                                g: .9882352941,
                                                                b: .2941176471,
                                                                ease: "Power4.easeOut"
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                };
                            for (var o in this.items) t(o);
                            J.a.to(this.textMat.color, 1, {
                                r: .9882352941,
                                g: .2941176471,
                                b: .05882352941,
                                ease: "Power4.easeOut",
                                onComplete: function() {
                                    J.a.to(e.textMat.color, 1, {
                                        r: .9882352941,
                                        g: .05882352941,
                                        b: .7529411765,
                                        ease: "Power4.easeOut",
                                        onComplete: function() {
                                            J.a.to(e.textMat.color, 1, {
                                                r: .05882352941,
                                                g: .7529411765,
                                                b: .9882352941,
                                                ease: "Power4.easeOut",
                                                onComplete: function() {
                                                    J.a.to(e.textMat.color, 1, {
                                                        r: .05882352941,
                                                        g: .9882352941,
                                                        b: .2941176471,
                                                        ease: "Power4.easeOut"
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            }), J.a.to([this.scene.fog.color, this.scene.background], 1, {
                                r: .05882352941,
                                g: .9882352941,
                                b: .2941176471,
                                ease: "Power4.easeOut",
                                onComplete: function() {
                                    J.a.to([e.scene.fog.color, e.scene.background], 1, {
                                        r: .05882352941,
                                        g: .7529411765,
                                        b: .9882352941,
                                        ease: "Power4.easeOut",
                                        onComplete: function() {
                                            J.a.to([e.scene.fog.color, e.scene.background], 1, {
                                                r: .9882352941,
                                                g: .05882352941,
                                                b: .7529411765,
                                                ease: "Power4.easeOut",
                                                onComplete: function() {
                                                    J.a.to([e.scene.fog.color, e.scene.background], 1, {
                                                        r: .9882352941,
                                                        g: .2941176471,
                                                        b: .05882352941,
                                                        ease: "Power4.easeOut",
                                                        onComplete: function() {
                                                            e.discoColours()
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    }]), e
                }();
            e.hot.accept(), e.hot.dispose(function() {
                window.assets = ye.assets, ye.renderer.domElement.removeEventListener("wheel", ye.scroll), removeEventListener("resize", ye.resize), ye.renderer.domElement.removeEventListener("mousedown", ye.mouseDown), ye.renderer.domElement.removeEventListener("mouseup", ye.mouseUp), removeEventListener("mousemove", ye.mouseMove), document.querySelector("canvas").remove(), ye.renderer.forceContextLoss(), ye.renderer.context = null, ye.renderer.domElement = null, ye.renderer = null, cancelAnimationFrame(ye.animationId), ye.gesture.destroy()
            });
            var ye = new ve;
            window.timeline = ye
        },
        x3HC: function(e) {
            e.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nuniform float time;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nuniform sampler2D texture;\n\nvoid main() {\n\n\tvec2 uv = vUv;\n\t// vec4 color = texture2D( texture, vUv );\n\n\tvec4 origColor = texture2D(texture, vUv);\n\n\t// remove green\n\tif ( origColor.r < 0.4 && origColor.b < 0.4 && origColor.g > 0.4 ) {\n\t\torigColor.a = 0.;\n\t}\n\n\tif ( origColor.r < 0.9 && origColor.b < 0.9 && origColor.g > 0.9 ) {\n\t\torigColor.a = 0.;\n\t}\n\n\t// vec4 gradientImage = mix(vec4( gradientColor, 1.0), vec4(1.0, 1.0, 1.0, 1.0), grayscaleValue);\n\n\t// if ( gradientImage.b < 0.9 ) discard;\n\n\t// gl_FragColor = origColor * opacity;\n\tgl_FragColor = origColor;\n\n\t#ifdef USE_FOG\n\t\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t\t#else\n\t\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t\t#endif\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\t#endif\n\n}"
        },
        yLpj: function(e) {
            var t = function() {
                return this
            }();
            try {
                t = t || new Function("return this")()
            } catch (o) {
                "object" == typeof window && (t = window)
            }
            e.exports = t
        }
    },
    [
        [0, 3, 2, 1]
    ]
]);