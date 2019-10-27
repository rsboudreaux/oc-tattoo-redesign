(function(r) {
    var n = {};

    function i(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: false,
            exports: {}
        };
        r[e].call(t.exports, t, t.exports, i);
        t.l = true;
        return t.exports
    }
    i.m = r;
    i.c = n;
    i.d = function(e, t, r) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: true,
            get: r
        })
    };
    i.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: true
        })
    };
    i.t = function(t, e) {
        1 & e && (t = i(t));
        if (8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        i.r(r);
        Object.defineProperty(r, "default", {
            enumerable: true,
            value: t
        });
        if (2 & e && "string" != typeof t)
            for (var n in t) i.d(r, n, function(e) {
                return t[e]
            }.bind(null, n));
        return r
    };
    i.n = function(t) {
        var e = t && t.__esModule ? function e() {
            return t["default"]
        } : function e() {
            return t
        };
        i.d(e, "a", e);
        return e
    };
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    i.p = "https://assets.squarespace.com/universal/scripts-compressed/";
    return i(i.s = "./src/main/webapp/universal/src/apps/Performance/bootstrap.js")
})({
    "./node_modules/webpack/buildin/global.js": function(e, t) {
        var r;
        r = function() {
            return this
        }();
        try {
            r = r || Function("return this")() || (1, eval)("this")
        } catch (e) {
            "object" === typeof window && (r = window)
        }
        e.exports = r
    },
    "./src/main/webapp/universal/node_modules/@babel/runtime/helpers/defineProperty.js": function(e, t) {
        function r(e, t, r) {
            t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
            }) : e[t] = r;
            return e
        }
        e.exports = r
    },
    "./src/main/webapp/universal/node_modules/@babel/runtime/helpers/interopRequireDefault.js": function(e, t) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = r
    },
    "./src/main/webapp/universal/node_modules/@babel/runtime/helpers/objectSpread.js": function(e, t, r) {
        var i = r("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/defineProperty.js");

        function n(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                var n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                })));
                n.forEach(function(e) {
                    i(t, e, r[e])
                })
            }
            return t
        }
        e.exports = n
    },
    "./src/main/webapp/universal/node_modules/@sqs/praetor/build/module/index.js": function(e, t, r) {
        "use strict";
        r.r(t);
        var n = "true";
        var o = "default";
        var a;
        (function(e) {
            e["FEATURE_TOGGLE"] = "FEATURE_TOGGLE";
            e["AB_TEST"] = "AB_TEST"
        })(a = a || {});
        var i = function() {
            function e(e) {
                var t = this;
                this.experiments = {};
                this.isConfigurationLoaded = Boolean(e.isConfigurationLoaded);
                Array.isArray(e.experimentContextList) && e.experimentContextList.forEach(function(e) {
                    null !== e && "object" === typeof e && e.hasOwnProperty("name") && (t.experiments[e.name] = e)
                })
            }
            e.prototype.isValid = function() {
                return this.isConfigurationLoaded
            };
            e.prototype.getContext = function(e) {
                return this.experiments[e]
            };
            return e
        }();
        var s = function() {
            function e(e) {
                this.configuration = new i(e)
            }
            e.prototype.getFeatureToggle = function(e, t) {
                var r = this.getContextValidity(e, a.FEATURE_TOGGLE),
                    n = r.context,
                    i = r.error;
                if (i || null === n) return {
                    enabled: t,
                    error: i
                };
                if (n.containsError) return {
                    enabled: this.isFeatureToggleEnabled(n),
                    error: "The specified feature has an invalid server-side definition"
                };
                return {
                    enabled: this.isFeatureToggleEnabled(n)
                }
            };
            e.prototype.getABTestVariant = function(e, t) {
                var r = this.getContextValidity(e, a.AB_TEST),
                    n = r.context,
                    i = r.error;
                if (i || null === n) return {
                    error: i,
                    segment: o,
                    variant: t
                };
                if (n.containsError) return {
                    error: "The specified feature has an invalid server-side definition",
                    segment: n.segmentName,
                    variant: n.variant
                };
                return {
                    segment: n.segmentName,
                    variant: n.variant
                }
            };
            e.prototype.getAllExperiments = function() {
                return this.configuration
            };
            e.prototype.getContextValidity = function(e, t) {
                if (!this.configuration.isValid()) return {
                    context: null,
                    error: "The underlying Praetor configuration is not loaded"
                };
                var r = this.configuration.getContext(e);
                if (void 0 === r) return {
                    context: null,
                    error: "The specified feature does not exist"
                };
                if (r.experimentType !== t) return {
                    context: null,
                    error: "The specified feature is not a " + t
                };
                return {
                    context: r
                }
            };
            e.prototype.isFeatureToggleEnabled = function(e) {
                return e.variant === n
            };
            return e
        }();
        var u = s;
        r.d(t, "StaticPraetorClient", function() {
            return u
        });
        r.d(t, "Configuration", function() {
            return i
        });
        r.d(t, "ExperimentType", function() {
            return a
        })
    },
    "./src/main/webapp/universal/node_modules/@sqs/rum-collector/lib/index.js": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = r("./src/main/webapp/universal/node_modules/@sqs/praetor/build/module/index.js");
        var f = "/api/1/performance";
        var o = "/records";
        var s = "/settings";
        var n = "/error";
        var i = "2.0.2";
        var u = function(e) {
            return {
                app: "a",
                data: {
                    __encoding_config__: e,
                    __encoding_key__: "d"
                },
                event: "e",
                pageLoadId: "pl",
                ts: "t"
            }
        };
        var c = {
            downlink: "do",
            effectiveType: "ef",
            rtt: "rtt",
            saveData: "sd"
        };
        var p = {
            devicePixelRatio: "dpr",
            screenHeight: "sh",
            screenWidth: "sw",
            viewportHeight: "vh",
            viewportWidth: "vw"
        };
        var d = {
            deviceMemory: "dm",
            hardwareConcurrency: "hc"
        };
        var v = {
            abTest: "ab",
            analyticsId: "aid",
            connection: {
                __encoding_config__: c,
                __encoding_key__: "con"
            },
            context: "ctx",
            deliveryType: "dt",
            display: {
                __encoding_config__: p,
                __encoding_key__: "disp"
            },
            hardware: {
                __encoding_config__: d,
                __encoding_key__: "hdw"
            },
            hash: "h",
            hostname: "hn",
            marketingId: "mid",
            memberId: "mem",
            pathname: "p",
            version: "v"
        };
        var l = {
            delay: "d",
            eventType: "et"
        };
        var m = {
            eventTime: "t",
            eventType: "et"
        };
        var h = {
            connectEnd: "ce",
            connectStart: "c",
            decodedBodySize: "db",
            domComplete: "dc",
            domContentLoadedEventEnd: "de",
            domContentLoadedEventStart: "ds",
            domInteractive: "di",
            domLoading: "d",
            domainLookupEnd: "dle",
            domainLookupStart: "dl",
            encodedBodySize: "eb",
            fetchStart: "f",
            loadEventEnd: "le",
            loadEventStart: "l",
            navigationStart: "n",
            navigationType: "nt",
            nextHopProtocol: "nh",
            redirectCount: "rc",
            redirectEnd: "rde",
            redirectStart: "rd",
            requestStart: "r",
            responseEnd: "re",
            responseStart: "rs",
            secureConnectionStart: "s",
            supportLevel: "sl",
            transferSize: "t",
            unloadEventEnd: "ue",
            unloadEventStart: "u",
            visibilityStateOnDCL: "v"
        };
        var g = {
            duration: "d",
            endMarkDetail: "e",
            measureDetail: "m",
            name: "n",
            startMarkDetail: "s",
            startTime: "st"
        };
        var y = {
            tti: "t"
        };
        var w = {
            firstContentfulPaint: "fcp",
            firstPaint: "fp"
        };
        var T = {
            info: {
                __encoding_config__: {
                    img: {
                        __encoding_config__: {
                            __encoding_config__: {
                                assetUrl: "a",
                                naturalHeight: "nh",
                                naturalWidth: "nw",
                                parentHeight: "ph",
                                parentWidth: "pw",
                                squarespaceSize: "s",
                                visibleInSession: "vs",
                                visibleOnLoad: "vl"
                            },
                            __encoding_skip__: true
                        },
                        __encoding_key__: "img"
                    }
                },
                __encoding_key__: "i"
            },
            timings: "t"
        };
        var _ = Object.keys(l);
        var E = Object.keys(m);
        var S = Object.keys(v);
        var b = Object.keys(h);
        var O = Object.keys(g);
        var C = Object.keys(w);
        var P = Object.keys(y);
        var A = Object.keys(T);
        var I = "userTiming";
        var L = "mark";
        var R = "measure";
        var D = ["click", "mousedown", "keydown", "touchstart", "pointerdown"];
        var k = "DOMContentLoaded";
        var N = "load";
        var j = "sqsImageLoad";
        var x = [k, N];
        var M = "beforeunload";
        var B = "resourcetimingbufferfull";
        var F = ["first-paint", "first-contentful-paint"];
        var q = [j, M, N, B];
        var U = [N, M];
        var H = "rum-";
        var z = "ss_ab";
        var Y = "SS_MID";
        var X = "SS_ANALYTICS_ID";
        var V = 2e3;
        var W = 3e4;
        var G = 5e4;

        function K(e) {
            return "number" === typeof e ? Math.round(e) : e
        }

        function $() {
            return !!(window.performance && window.performance.now && window.addEventListener)
        }

        function J() {
            return !!(window.PerformanceMeasure && window.PerformanceMark && window.performance && window.performance.mark && window.performance.measure)
        }

        function Z(e, t, r) {
            "object" === typeof e && "name" in e && (e.name = "RUMError[" + t + "]");
            "object" === typeof e && "message" in e && (e.message += ": " + JSON.stringify(r));
            throw e
        }

        function Q(p, d) {
            var v = {};
            Object.keys(d).forEach(function(e) {
                var t = d[e];
                var r;
                var n;
                var i = p[e] || p;
                var o = typeof i;
                var a = "string" === o;
                var s = "object" === o || "undefined" === i;
                if (!a && !s) return;
                if (a) {
                    r = i;
                    n = ee(t)
                } else {
                    var u = i.__encoding_skip__;
                    var c = i.__encoding_config__;
                    var f = i.__encoding_fn__;
                    if (!u && !c && !p) {
                        Z(new Error("Invalid encoding map"), "encodeData", {
                            encodeConfig: p,
                            performanceData: d
                        });
                        return
                    }
                    r = u ? e : i.__encoding_key__;
                    n = c ? Q(c, t) : f ? f(t) : t
                }
                r && (v["" + r] = n)
            });
            return v
        }

        function ee(e) {
            if ("boolean" === typeof e) return e ? 1 : 0;
            if (te(e)) return e.toString(36);
            return e
        }

        function te(e) {
            return ("number" === typeof e || e instanceof Number) && isFinite(e)
        }
        var re;
        var ne = [];

        function ie(e, t) {
            try {
                if (oe()) {
                    var r = navigator.sendBeacon(e, t);
                    if (r) return
                }
                var n = new XMLHttpRequest;
                n.open("POST", e, true);
                n.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
                n.send(t)
            } catch (e) {}
        }

        function oe() {
            return "function" === typeof navigator.sendBeacon
        }

        function ae(t) {
            U.forEach(function(e) {
                window.addEventListener(e, function() {
                    if (e === N) re = window.setTimeout(ue, W, t);
                    else if ("number" === typeof re) {
                        window.clearTimeout(re);
                        re = void 0
                    }
                    ue(t)
                })
            })
        }

        function se(e) {
            ne.push(e)
        }

        function ue(e) {
            if (ne.length) {
                var t = [];
                while (ne.length) {
                    var r = ne.pop();
                    var n = JSON.stringify(r);
                    n.length <= G && r ? t.push(r) : ce(e, "Omitting individual metric because it's over the PER_METRIC_DELIVERY_SIZE (metric is " + n.length + " bytes, delivered from " + window.location.href + ")")
                }
                if (t.length) {
                    var i = JSON.stringify(t);
                    ie(e + o, i)
                }
            }
        }

        function ce(e, t) {
            ie(e + n, t)
        }

        function fe(e, t) {
            var r = Q(e, t);
            if (!r) throw new Error("Data is empty");
            se(r)
        }
        var pe = [];

        function de() {
            return pe
        }

        function ve(e) {
            pe.push(e)
        }

        function le(e, t, r, n) {
            var i = Object.freeze({
                app: e,
                data: n,
                event: t,
                pageLoadId: r,
                ts: Date.now()
            });
            ve(i);
            return i
        }
        var me = function() {
            function e() {
                this.requiresContext = false;
                this.context = {};
                this.deliveryBuffer = [];
                this.entryType = e.eventName;
                this.fireOnce = false;
                this.gatherEvents = [];
                this.supportType = "PerformanceObserver" in window ? "observe" : "gather";
                this.encodeConfig = u({});
                this.appName = "";
                this.pageLoadId = ""
            }
            e.prototype.getDeliveryBuffer = function() {
                return this.deliveryBuffer
            };
            e.prototype.getEventName = function() {
                return this.constructor.eventName
            };
            e.prototype.getEntryType = function() {
                return this.entryType
            };
            e.prototype.getGatherEvents = function() {
                return this.gatherEvents
            };
            e.prototype.getSupportType = function() {
                return this.supportType
            };
            e.prototype.shouldFireOnce = function() {
                return this.fireOnce
            };
            e.prototype.observerParse = function(e) {
                this.deliveryBuffer.push(e);
                return true
            };
            e.prototype.gather = function(e) {
                return e
            };
            e.prototype.gatherParse = function(e) {
                this.deliveryBuffer.push(e);
                return true
            };
            e.prototype.deliver = function() {
                while (this.deliveryBuffer.length) {
                    var e = this.deliveryBuffer.shift();
                    if (e) {
                        var t = le(this.appName, this.getEventName(), this.pageLoadId, e);
                        fe(this.getEncodeConfig(), t)
                    }
                }
                this.deliveryBuffer = []
            };
            e.prototype.getEncodeConfig = function() {
                return this.encodeConfig
            };
            e.prototype.setApp = function(e) {
                this.appName = e;
                return this
            };
            e.prototype.setId = function(e) {
                this.pageLoadId = e;
                return this
            };
            e.eventName = "";
            return e
        }();
        var he = me;
        var ge = (void 0, function() {
            var n = function(e, t) {
                n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return n(e, t)
            };
            return function(e, t) {
                n(e, t);

                function r() {
                    this.constructor = e
                }
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
        }());
        var ye = function(t) {
            ge(e, t);

            function e() {
                var e = t.call(this) || this;
                e.gatherEvents = D;
                e.fireOnce = true;
                e.encodeConfig = u(l);
                $() ? e.supportType = "gather" : e.supportType = "";
                return e
            }
            e.prototype.gather = function(e) {
                var t = e.timeStamp;
                var r = t > 1e12 ? +new Date : window.performance.now();
                var n = Math.max(r - t, 0);
                var i = {
                    delay: n,
                    eventType: e.type
                };
                return i
            };
            e.prototype.gatherParse = function(r) {
                this.deliveryBuffer.push(_.reduce(function(e, t) {
                    t in r && (e[t] = K(r[t]));
                    return e
                }, {}));
                return true
            };
            e.eventName = "firstInputDelay";
            return e
        }(he);
        var we = ye;
        var Te = (void 0, function() {
            var n = function(e, t) {
                n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return n(e, t)
            };
            return function(e, t) {
                n(e, t);

                function r() {
                    this.constructor = e
                }
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
        }());
        var _e = function(t) {
            Te(e, t);

            function e() {
                var e = t.call(this) || this;
                e.gatherEvents = D;
                e.fireOnce = true;
                e.encodeConfig = u(m);
                $() ? e.supportType = "gather" : e.supportType = "";
                return e
            }
            e.prototype.gather = function(e) {
                var t = window.performance.now();
                var r = {
                    eventTime: t,
                    eventType: e.type
                };
                return r
            };
            e.prototype.gatherParse = function(r) {
                this.deliveryBuffer.push(E.reduce(function(e, t) {
                    t in r && (e[t] = K(r[t]));
                    return e
                }, {}));
                return true
            };
            e.eventName = "firstInteraction";
            return e
        }(he);
        var Ee = _e;

        function Se(e) {
            var t = {};
            for (var r in e) "function" !== typeof e[r] && (t[r] = e[r]);
            return t
        }
        var be = (void 0, function() {
            var n = function(e, t) {
                n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return n(e, t)
            };
            return function(e, t) {
                n(e, t);

                function r() {
                    this.constructor = e
                }
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
        }());
        var Oe = function(n) {
            be(e, n);

            function e() {
                var e;
                var t = n.call(this) || this;
                t.entryType = "navigation";
                t.gatherEvents = [N];
                t.encodeConfig = u(h);
                t.supportLevel = -1;
                t.visibilityStateOnDCL = "";
                e = t.getNavigationLevel(), t.supportType = e[0], t.supportLevel = e[1];
                var r = function() {
                    t.visibilityStateOnDCL = document.visibilityState || ""
                };
                window.addEventListener("DOMContentLoaded", r, {
                    once: true
                });
                return t
            }
            e.prototype.observerParse = function(e) {
                return this.parse(e)
            };
            e.prototype.gather = function() {
                var e;
                e = 1 === this.supportLevel ? window.performance.timing : window.performance.getEntriesByType("navigation")[0];
                return Se(e)
            };
            e.prototype.gatherParse = function(e) {
                return this.parse(e)
            };
            e.prototype.parse = function(r) {
                if ("navigation" in performance) {
                    r.navigationType = window.performance.navigation.type;
                    r.redirectCount = window.performance.navigation.redirectCount
                }
                r.supportLevel = this.supportLevel;
                var e = b.reduce(function(e, t) {
                    t in r && ("number" === typeof r[t] && "navigationStart" !== t && r[t] >= r.navigationStart ? e[t] = K(r[t] - r.navigationStart) : e[t] = K(r[t]));
                    return e
                }, {});
                e.visibilityStateOnDCL = this.visibilityStateOnDCL;
                this.deliveryBuffer.push(e);
                return true
            };
            e.prototype.getNavigationLevel = function() {
                if (window.performance) {
                    if (window.performance.getEntriesByType && void 0 !== window.PerformanceNavigationTiming && window.performance.getEntriesByType(this.entryType)[0] instanceof PerformanceNavigationTiming) return [this.supportType, 2];
                    if (window.performance.timing) return ["gather", 1]
                }
                return ["", -1]
            };
            e.eventName = "navigation";
            return e
        }(he);
        var Ce = Oe;

        function Pe(e) {
            var t = new RegExp("(^| )" + e + "=([^;]+)");
            var r = document.cookie.match(t);
            if (r) return r[2];
            return ""
        }

        function Ae(e) {
            if (window.localStorage && window.localStorage.getItem) return window.localStorage.getItem(e);
            return null
        }
        var Ie = (void 0, function() {
            var n = function(e, t) {
                n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return n(e, t)
            };
            return function(e, t) {
                n(e, t);

                function r() {
                    this.constructor = e
                }
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
        }());
        var Le;
        (function(e) {
            e["Beacon"] = "beacon";
            e["XHR"] = "xhr"
        })(Le = Le || {});

        function Re() {
            if (!window.atob) return null;
            var e = Ae(z);
            if (e) try {
                return JSON.parse(window.atob(e))
            } catch (e) {
                return null
            }
            return null
        }

        function De() {
            var e = {};
            var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (t) {
                var r = (1e3 * t.downlink).toString();
                e = {
                    downlink: parseInt(r, 10),
                    effectiveType: t.effectiveType,
                    rtt: t.rtt,
                    saveData: t.saveData
                }
            }
            return e
        }

        function ke() {
            var e = window.devicePixelRatio;
            var t = window.screen,
                r = t.width,
                n = t.height;
            var i = document.documentElement,
                o = i.clientHeight,
                a = i.clientWidth;
            var s = {
                devicePixelRatio: e,
                screenHeight: n,
                screenWidth: r,
                viewportHeight: o,
                viewportWidth: a
            };
            return s
        }

        function Ne() {
            try {
                return window.Static.SQUARESPACE_CONTEXT.authenticatedAccount.id
            } catch (e) {
                return ""
            }
        }

        function je() {
            return {
                deviceMemory: navigator.deviceMemory,
                hardwareConcurrency: navigator.hardwareConcurrency
            }
        }
        var xe = function(t) {
            Ie(e, t);

            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                e.requiresContext = true;
                e.gatherEvents = [N];
                e.supportType = "gather";
                e.encodeConfig = u(v);
                return e
            }
            e.prototype.gather = function() {
                var e = De();
                var t = ke();
                var r = je();
                return {
                    abTest: Re(),
                    analyticsId: Pe(X),
                    connection: e,
                    context: this.context,
                    deliveryType: oe() ? Le.Beacon : Le.XHR,
                    display: t,
                    hardware: r,
                    hash: window.location.hash || "",
                    hostname: window.location.hostname || "",
                    marketingId: Pe(Y),
                    memberId: Ne(),
                    pathname: window.location.pathname || "/",
                    version: i
                }
            };
            e.prototype.gatherParse = function(r) {
                this.deliveryBuffer.push(S.reduce(function(e, t) {
                    t in r && (e[t] = r[t]);
                    return e
                }, {}));
                return true
            };
            e.eventName = "pageLoad";
            return e
        }(he);
        var Me = xe;
        var Be = (void 0, function() {
            var n = function(e, t) {
                n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return n(e, t)
            };
            return function(e, t) {
                n(e, t);

                function r() {
                    this.constructor = e
                }
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
        }());
        var Fe = function(t) {
            Be(e, t);

            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                e.entryType = "paint";
                e.supportType = "observe";
                e.encodeConfig = u(w);
                e.paintsRetrieved = [];
                return e
            }
            e.prototype.observerParse = function(r) {
                var e = r.name,
                    t = r.startTime;
                if (F.indexOf(e) < 0) return false;
                this.paintsRetrieved.push(e);
                0 === this.deliveryBuffer.length && this.deliveryBuffer.push(C.reduce(function(e, t) {
                    t in r && (e[t] = r[t]);
                    return e
                }, {}));
                var n = e.replace(/-([a-zA-Z])/g, function(e, t) {
                    var r = t && t.toUpperCase();
                    return r || e
                });
                this.deliveryBuffer[0][n] = K(t);
                if (this.paintsRetrieved.length < F.length) return false;
                return true
            };
            e.eventName = "paint";
            return e
        }(he);
        var qe = Fe;
        var Ue = r("./src/main/webapp/universal/node_modules/resourcetiming-compression/src/resourcetiming-compression.js");
        var He = r.n(Ue);
        var ze = (void 0, function() {
            var n = function(e, t) {
                n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return n(e, t)
            };
            return function(e, t) {
                n(e, t);

                function r() {
                    this.constructor = e
                }
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
        }());
        var Ye = (void 0, function() {
            Ye = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) {
                    t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            };
            return Ye.apply(this, arguments)
        });
        var Xe = (void 0, function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols)
                for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && (r[n[i]] = e[n[i]]);
            return r
        });
        var Ve = function(t) {
            ze(e, t);

            function e() {
                var e = t.call(this) || this;
                e.entryType = "resource";
                e.gatherEvents = q;
                e.encodeConfig = u(T);
                e.readyToDeliver = false;
                e.dataBuffer = {
                    info: {},
                    timings: {}
                };
                e.resourceTimingData = [];
                window.performance && window.performance.getEntriesByType && window.performance.clearResourceTimings && window.PerformanceResourceTiming && window.performance.getEntriesByType(e.entryType)[0] instanceof PerformanceResourceTiming ? e.supportType = "gather" : e.supportType = "";
                e.initImageLoaderData();
                return e
            }
            e.prototype.gather = function(e) {
                if (e.type === j) {
                    var t = e.detail.imageData,
                        r = void 0 === t ? {} : t;
                    Object.assign(this.dataBuffer.info.img, this.gatherImageInfo(r));
                    return this.dataBuffer
                }
                e.type === M && (this.readyToDeliver = true);
                this.resourceTimingData = this.resourceTimingData.concat(this.gatherImageTimingData());
                return this.dataBuffer
            };
            e.prototype.gatherParse = function(e) {
                if (this.readyToDeliver) {
                    var t = He.a.compressResourceTiming(window, this.resourceTimingData, [], false).restiming;
                    this.dataBuffer.timings = t;
                    this.deliveryBuffer = [this.dataBuffer]
                }
                return this.readyToDeliver
            };
            e.prototype.initImageLoaderData = function() {
                var t = this;
                this.dataBuffer.info.img = {};
                if (window.ImageLoader && window.ImageLoader.imageInfo && Object.keys(window.ImageLoader.imageInfo).length) {
                    var r = window.ImageLoader.imageInfo;
                    Object.keys(r).forEach(function(e) {
                        Object.assign(t.dataBuffer.info.img, t.gatherImageInfo(r[e], true))
                    })
                }
            };
            e.prototype.isSquarespaceImage = function(e) {
                var t = e.name,
                    r = e.initiatorType;
                var n = document.createElement("a");
                n.href = t;
                var i = n.hostname,
                    o = n.pathname;
                return "img" === r && (i.indexOf("images.squarespace-cdn.com") > -1 || (i.indexOf("squarespace.com") || i.indexOf("sqsp.net") > -1 || i.indexOf("squarespace.net") > -1) && o.indexOf("static") > -1)
            };
            e.prototype.gatherImageTimingData = function() {
                var e = window.performance.getEntriesByType("resource").filter(this.isSquarespaceImage);
                window.performance.clearResourceTimings();
                return e
            };
            e.prototype.gatherImageInfo = function(e, t) {
                void 0 === t && (t = false);
                var r;
                var n = e.naturalDimensions,
                    i = void 0 === n ? {} : n,
                    o = e.parentElementDimensions,
                    a = void 0 === o ? {} : o,
                    s = e.isVisible,
                    u = void 0 !== s && s,
                    c = e.assetUrl,
                    f = e.squarespaceSize,
                    p = Xe(e, ["naturalDimensions", "parentElementDimensions", "isVisible", "assetUrl", "squarespaceSize"]);
                if (!c || !f) return {};
                var d = c + "?format=" + e.squarespaceSize;
                var v = Ye({
                    assetUrl: d,
                    squarespaceSize: f
                }, p);
                if (i.hasOwnProperty("height") && i.hasOwnProperty("width")) {
                    v.naturalHeight = Math.round(i.height);
                    v.naturalWidth = Math.round(i.width)
                }
                if (a.hasOwnProperty("height") && a.hasOwnProperty("width")) {
                    v.parentHeight = Math.round(a.height);
                    v.parentWidth = Math.round(a.width)
                }
                v.visibleInSession = u;
                v.visibleOnLoad = t && u;
                return r = {}, r[d] = v, r
            };
            e.eventName = "resource";
            return e
        }(he);
        var We = Ve;
        var Ge = r("./src/main/webapp/universal/node_modules/tti-polyfill/tti-polyfill.js");
        var Ke = (void 0, function() {
            var n = function(e, t) {
                n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return n(e, t)
            };
            return function(e, t) {
                n(e, t);

                function r() {
                    this.constructor = e
                }
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
        }());
        var $e = function(e) {
            Ke(t, e);

            function t() {
                var t = e.call(this) || this;
                t.entryType = "longtask";
                t.supportType = "observe";
                t.encodeConfig = u(y);
                t.fireOnce = true;
                if (window.PerformanceLongTaskTiming && window.PerformanceObserver) {
                    window.__tti = {
                        e: []
                    };
                    Object(Ge["getFirstConsistentlyInteractive"])().then(function(e) {
                        t.parse({
                            tti: e
                        });
                        t.deliver()
                    })
                } else t.supportType = "";
                return t
            }
            t.prototype.observerParse = function(e) {
                window.__tti && (window.__tti.e = window.__tti.e.concat(e));
                return false
            };
            t.prototype.parse = function(r) {
                this.deliveryBuffer.push(P.reduce(function(e, t) {
                    t in r && (e[t] = K(r[t]));
                    return e
                }, {}))
            };
            t.eventName = "tti";
            return t
        }(he);
        var Je = $e;

        function Ze(e) {
            return "string" === typeof e && e.substring && "rum-" === e.substring(0, 4)
        }
        var Qe = (void 0, function() {
            var n = function(e, t) {
                n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return n(e, t)
            };
            return function(e, t) {
                n(e, t);

                function r() {
                    this.constructor = e
                }
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
        }());
        var et = (void 0, function() {
            et = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) {
                    t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            };
            return et.apply(this, arguments)
        });
        var tt = function(t) {
            Qe(e, t);

            function e() {
                var e = t.call(this) || this;
                e.entryType = R;
                e.gatherEvents = [I];
                e.encodeConfig = u(g);
                e.supportType = "gather";
                e.detailCache = {};
                e.measureMarkCache = {};
                J() || (e.supportType = "");
                return e
            }
            e.prototype.observerParse = function(e) {
                return this.parse(et({}, e, this.getDetails(e.name)))
            };
            e.prototype.gather = function(e) {
                if (e && it(e.detail) && it(e.detail.userTimingEntry)) {
                    var t = e.detail,
                        r = t.userTimingEntry,
                        n = t.startMark,
                        i = t.endMark,
                        o = t.detail;
                    if (r.entryType === L) this.addDetail(r.name, o);
                    else if (r.entryType === this.entryType) {
                        this.addMeasure(r.name, n, i);
                        return et({}, Se(r), this.getDetails(r.name), {
                            measureDetail: o
                        })
                    }
                }
                return {}
            };
            e.prototype.gatherParse = function(e) {
                this.parse(e);
                return true
            };
            e.prototype.parse = function(e) {
                if (!Ze(e.name)) return false;
                var t = {};
                for (var r = 0, n = O; r < n.length; r++) {
                    var i = n[r];
                    e.hasOwnProperty(i) && (t[i] = K(e[i]))
                }
                this.deliveryBuffer.push(t);
                return true
            };
            e.prototype.addMeasure = function(e, t, r) {
                this.measureMarkCache[e] = {
                    startMarkName: t,
                    endMarkName: r
                }
            };
            e.prototype.addDetail = function(e, t) {
                this.detailCache[e] = nt(t)
            };
            e.prototype.getDetails = function(e) {
                var t = {};
                var r = this.measureMarkCache[e];
                if (void 0 !== r) {
                    delete this.measureMarkCache[e];
                    var n = r.startMarkName,
                        i = r.endMarkName;
                    if (void 0 !== n && this.detailCache.hasOwnProperty(n)) {
                        t.startMarkDetail = this.detailCache[n];
                        delete this.detailCache[n]
                    }
                    if (void 0 !== i && this.detailCache.hasOwnProperty(i)) {
                        t.endMarkDetail = this.detailCache[i];
                        delete this.detailCache[i]
                    }
                }
                return t
            };
            e.eventName = "user";
            return e
        }(he);
        var rt = tt;

        function nt(e) {
            if ("object" !== typeof e || null === e) return e;
            var t = {};
            for (var r in e) r in e && (t[r] = e[r]);
            return t
        }

        function it(e) {
            return null !== e && "object" === typeof e
        }
        var ot = (void 0, function() {
            var n = function(e, t) {
                n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return n(e, t)
            };
            return function(e, t) {
                n(e, t);

                function r() {
                    this.constructor = e
                }
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
        }());
        var at = function(t) {
            ot(e, t);

            function e() {
                var e = t.call(this) || this;
                e.gatherEvents = [M];
                e.supportType = "gather";
                e.encodeConfig = u();
                oe() || (e.supportType = "");
                return e
            }
            e.prototype.gather = function() {
                if (!(window.YUI && window.YUI.stats && window.YUI.stats.getSerializedDataForReporter && "function" === typeof window.YUI.stats.getSerializedDataForReporter)) return {};
                return window.YUI.stats.getSerializedDataForReporter()
            };
            e.prototype.gatherParse = function(e) {
                this.deliveryBuffer.push(e);
                return true
            };
            e.eventName = "yuiStats";
            return e
        }(he);
        var st = at;
        var ut = [we, Ee, Ce, Me, qe, Je, rt, We, st];

        function ct(t, e) {
            e.forEach(function(e) {
                x.indexOf(e) > -1 && dt() ? t({
                    type: e
                }) : window.addEventListener(e, t)
            })
        }

        function ft(r) {
            if (!("PerformanceObserver" in window)) return;
            var t = function(e) {
                e.forEach(function(e) {
                    var t = new CustomEvent(pt(e.entryType), {
                        detail: e.toJSON()
                    });
                    window.dispatchEvent(t)
                })
            };
            var n = function(e) {
                var t = e.entryType;
                return r.indexOf(t) > -1
            };
            var i = function(e) {
                var t = e.entryType;
                return "navigation" === t
            };
            t(performance.getEntries().filter(function(e) {
                return n(e) && !i(e) || dt() && i(e)
            }));
            var e = new window.PerformanceObserver(function(e) {
                t(e.getEntries())
            });
            if (r.length > 0) try {
                e.observe({
                    entryTypes: r
                })
            } catch (e) {}
        }

        function pt(e) {
            return e + "-observer"
        }

        function dt() {
            return "complete" === document.readyState
        }
        var vt = [];
        var lt;
        var mt = 2e3;

        function ht(e, t) {
            void 0 === t && (t = false);
            if (window.requestIdleCallback && !t) {
                vt.push(e);
                lt = lt || window.requestIdleCallback(gt, {
                    timeout: mt
                })
            } else e.deliver()
        }

        function gt(e) {
            while ((e.timeRemaining() > 0 || e.didTimeout) && vt.length) {
                var t = vt.shift();
                t && t.deliver()
            }
            lt = vt.length ? window.requestIdleCallback(gt, {
                timeout: mt
            }) : void 0
        }

        function yt(e, t) {
            var r = {
                passive: true,
                capture: true
            };

            function n() {
                t(e);
                o()
            }

            function i() {
                o()
            }

            function o() {
                window.removeEventListener("pointerup", n, r);
                window.removeEventListener("pointercancel", i, r)
            }
            window.addEventListener("pointerup", n, r);
            window.addEventListener("pointercancel", i, r)
        }

        function wt(i) {
            return function(e, t) {
                void 0 === t && (t = false);
                var r = i.getABTestVariant(e + "-rollout", t.toString()).variant;
                var n = "true" === r;
                return n
            }
        }

        function Tt(i, o, a, s) {
            return function(e, t) {
                var r = i(t.eventName + "-plugin");
                if (r) {
                    var n = (new t).setApp(o).setId(a);
                    n.requiresContext && (n.context = s);
                    e.push(n)
                }
                return e
            }
        }

        function _t(o, a) {
            return function(e) {
                var t = e.detail;
                var r;
                try {
                    r = o.observerParse(t);
                    r && ht(o)
                } catch (e) {
                    var n = o.getDeliveryBuffer();
                    var i = n || t || {};
                    Z(e, a, i)
                }
            }
        }

        function Et(o) {
            var a = o.getGatherEvents();
            var s = o.getEventName();

            function u(e) {
                var t;
                try {
                    t = o.gather(e);
                    if ("pointerdown" === t.eventType) yt(t, function(e) {
                        return St(o, e)
                    });
                    else {
                        var r = e.type === M;
                        St(o, t, r)
                    }
                } catch (e) {
                    var n = o.getDeliveryBuffer();
                    var i = n || t || {};
                    Z(e, s, i)
                }
                o.shouldFireOnce() && a.forEach(function(e) {
                    window.removeEventListener(e, u)
                })
            }
            return u
        }

        function St(e, t, r) {
            void 0 === r && (r = false);
            var n = e.gatherParse(t);
            n && ht(e, r)
        }

        function bt() {
            return new Promise(function(r, n) {
                var i = new XMLHttpRequest;
                i.timeout = V;
                i.onreadystatechange = function(e) {
                    if (i.readyState === XMLHttpRequest.DONE)
                        if (200 === i.status) try {
                            var t = JSON.parse(i.response);
                            r(t)
                        } catch (e) {
                            n(e)
                        } else n(i.status)
                };
                i.ontimeout = function() {
                    n("Metric settings request timeout")
                };
                i.open("GET", f + s, true);
                i.send()
            })
        }

        function Ot(e) {
            var n = e.appName || "";
            var i = e.context || {};
            var t = e.enabled,
                r = void 0 === t || t;
            if (!r) return Promise.resolve();
            var o;
            return bt().then(function(e) {
                o = e.pageLoadId;
                if (!o) throw new Error("Unable to resolve pageLoadId");
                return new a["StaticPraetorClient"](e)
            }).then(function(e) {
                var t = wt(e);
                if (["rum", n + "-app"].some(function(e) {
                        return !t(e)
                    })) return;
                var r = ut.reduce(Tt(t, n, o, i), []);
                var s = [];
                r.forEach(function(e) {
                    var t = e.getSupportType();
                    if ("observe" === t) {
                        var r = e.getEntryType();
                        var n = pt(r);
                        s.push(r);
                        var i = _t(e, n);
                        window.addEventListener(n, i)
                    } else if ("gather" === t) {
                        var o = e.getGatherEvents();
                        var a = Et(e);
                        ct(a, o)
                    }
                });
                ft(s);
                ae(f)
            }).catch(function() {
                return
            })
        }

        function Ct(e, t) {
            "function" === typeof window.dispatchEvent && "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent(e, {
                detail: t
            }))
        }

        function Pt(e, t) {
            try {
                if (!Lt()) return;
                var r = H + e;
                window.performance.mark(r);
                var n = {
                    userTimingEntry: Rt(r, "mark")
                };
                "object" === typeof t && null !== t && (n.detail = t.detail);
                Ct(I, n)
            } catch (e) {
                ce(f, "RUMError[mark]: " + e)
            }
        }

        function At(e, t) {
            try {
                if (!(Lt() && It())) return;
                var r = "object" === typeof t && null !== t;
                var n = r && "string" === typeof t.end;
                var i = r && "string" === typeof t.start;
                var o = H + e;
                var a = i ? H + t.start : o;
                var s = n ? H + t.end : void 0;
                try {
                    window.performance.measure(o, a, s)
                } catch (e) {
                    if (!(e instanceof DOMException)) throw e;
                    Dt(o, a, s)
                }
                var u = Rt(o, "measure");
                var c = {
                    detail: r ? t.detail : void 0,
                    endMark: s,
                    startMark: a,
                    userTimingEntry: u
                };
                Ct(I, c);
                return u
            } catch (e) {
                ce(f, "RUMError[measure]: " + e)
            }
        }

        function It() {
            return "performance" in window && "getEntries" in window.performance && "getEntriesByType" in window.performance && "getEntriesByName" in window.performance
        }

        function Lt() {
            return "mark" in window.performance && "measure" in window.performance
        }

        function Rt(e, t) {
            var r = window.performance.getEntriesByName(e);
            return r[r.length - 1]
        }

        function Dt(e, t, r) {
            var n = "navigationStart";
            var i;
            window.performance.getEntriesByName(t, "mark").length && (n = t);
            r && window.performance.getEntriesByName(r, "mark").length && (i = r);
            window.performance.measure(e, n, i)
        }
        r.d(t, "default", function() {
            return Ot
        });
        r.d(t, "getPerformanceData", function() {
            return de
        });
        r.d(t, "mark", function() {
            return Pt
        });
        r.d(t, "measure", function() {
            return At
        })
    },
    "./src/main/webapp/universal/node_modules/resourcetiming-compression/src/resourcetiming-compression.js": function(r, n, e) {
        var i, o;
        (function(l) {
            "use strict";
            var e;
            var t;
            if ("undefined" !== typeof l) {
                e = l;
                t = e.ResourceTimingCompression
            }
            var v = {};
            v.HOSTNAMES_REVERSED = true;
            v.INITIATOR_TYPES = {
                other: 0,
                img: 1,
                link: 2,
                script: 3,
                css: 4,
                xmlhttprequest: 5,
                html: 6,
                image: 7,
                beacon: 8,
                fetch: 9,
                iframe: "a",
                subdocument: "a",
                body: "b",
                input: "c",
                frame: "a",
                object: "d",
                video: "e",
                audio: "f",
                source: "g",
                track: "h",
                embed: "i",
                eventsource: "j",
                navigation: 6
            };
            v.DEFAULT_XSS_BREAK_WORDS = [/(h)(ref)/gi, /(s)(rc)/gi, /(a)(ction)/gi];
            v.XSS_BREAK_DELIM = "\n";
            v.DEFAULT_URL_LIMIT = 500;
            v.SPECIAL_DATA_PREFIX = "*";
            v.SPECIAL_DATA_DIMENSION_TYPE = "0";
            v.SPECIAL_DATA_SIZE_TYPE = "1";
            v.SPECIAL_DATA_SCRIPT_TYPE = "2";
            v.SPECIAL_DATA_SCRIPT_ASYNC_ATTR = 1;
            v.SPECIAL_DATA_SCRIPT_DEFER_ATTR = 2;
            v.SPECIAL_DATA_SCRIPT_LOCAT_ATTR = 4;
            v.SPECIAL_DATA_SERVERTIMING_TYPE = "3";
            v.SPECIAL_DATA_LINK_ATTR_TYPE = "4";
            v.REL_TYPES = {
                prefetch: 1,
                preload: 2,
                prerender: 3,
                stylesheet: 4
            };
            v.HOSTNAME_REGEX = /^(https?:\/\/)([^\/]+)(.*)/;
            v.trimUrls = [];
            v.xssBreakWords = v.DEFAULT_XSS_BREAK_WORDS;
            v.noConflict = function() {
                e.ResourceTimingCompression = t;
                return v
            };
            v.convertToTrie = function(e) {
                var t = {},
                    r, n, i, o, a, s, u, c;
                for (r in e) {
                    if (!e.hasOwnProperty(r)) continue;
                    n = r;
                    for (i = 0; i < this.xssBreakWords.length; i++) n = n.replace(this.xssBreakWords[i], "$1" + v.XSS_BREAK_DELIM + "$2");
                    o = e[r];
                    a = n.split("");
                    u = t;
                    for (i = 0; i < a.length; i++) {
                        s = a[i];
                        c = u[s];
                        "undefined" === typeof c ? u = u[s] = i === a.length - 1 ? o : {} : "string" === typeof c ? u = u[s] = {
                            "|": c
                        } : i === a.length - 1 ? u[s]["|"] = o : u = u[s]
                    }
                }
                return t
            };
            v.optimizeTrie = function(e, t) {
                var r = 0,
                    n, i, o;
                var a = [];
                for (n in e) e.hasOwnProperty(n) && a.push(n);
                for (var s = 0; s < a.length; s++) {
                    n = a[s];
                    if ("object" === typeof e[n]) {
                        i = this.optimizeTrie(e[n], false);
                        if (i) {
                            delete e[n];
                            if (n === v.XSS_BREAK_DELIM) {
                                n = i.name;
                                r++
                            } else n += i.name;
                            e[n] = i.value
                        }
                    }
                    r++
                }
                if (1 === r) {
                    if (t) {
                        o = {};
                        o[n] = e[n];
                        return o
                    }
                    return {
                        name: n,
                        value: e[n]
                    }
                }
                if (t) return e;
                return false
            };
            v.trimTiming = function(e, t) {
                "number" !== typeof e && (e = 0);
                "number" !== typeof t && (t = 0);
                var r = Math.round(e || 0),
                    n = Math.round(t || 0);
                return 0 === r ? 0 : r - n
            };
            v.getNavStartTime = function(e) {
                var t = 0,
                    r;
                if (!e) return t;
                try {
                    r = e.location && e.location.href;
                    "performance" in e && e.performance && e.performance.timing && e.performance.timing.navigationStart && (t = e.performance.timing.navigationStart)
                } catch (e) {}
                return t
            };
            v.findPerformanceEntriesForFrame = function(e, t, r, n) {
                var i = [],
                    o, a, s, u, c, f, p, d, v, l = {},
                    m = {},
                    h;
                "undefined" === typeof t && (t = true);
                "undefined" === typeof r && (r = 0);
                "undefined" === typeof n && (n = 0);
                if (n > 10) return i;
                try {
                    s = this.getNavStartTime(e);
                    h = e.document.createElement("a");
                    w(h, m, "script");
                    w(h, l, "link");
                    if (e.frames)
                        for (o = 0; o < e.frames.length; o++) {
                            u = this.getNavStartTime(e.frames[o]);
                            c = 0;
                            u > s && (c = r + (u - s));
                            i = i.concat(this.findPerformanceEntriesForFrame(e.frames[o], false, c, ++n))
                        }
                    try {
                        d = e.location && e.location.href;
                        if (!("performance" in e) || !e.performance || !e.performance.getEntriesByType) return i
                    } catch (e) {
                        return i
                    }
                    if (t) {
                        a = e.performance.getEntriesByType("navigation");
                        if (a && 1 === a.length) {
                            f = a[0];
                            i.push({
                                name: e.location.href,
                                startTime: 0,
                                initiatorType: "html",
                                redirectStart: f.redirectStart,
                                redirectEnd: f.redirectEnd,
                                fetchStart: f.fetchStart,
                                domainLookupStart: f.domainLookupStart,
                                domainLookupEnd: f.domainLookupEnd,
                                connectStart: f.connectStart,
                                secureConnectionStart: f.secureConnectionStart,
                                connectEnd: f.connectEnd,
                                requestStart: f.requestStart,
                                responseStart: f.responseStart,
                                responseEnd: f.responseEnd,
                                serverTiming: f.serverTiming || []
                            })
                        } else if (e.performance.timing) {
                            p = e.performance.timing;
                            0 !== p.navigationStart && p.responseEnd <= p.navigationStart + 36e5 && i.push({
                                name: e.location.href,
                                startTime: 0,
                                initiatorType: "html",
                                redirectStart: p.redirectStart ? p.redirectStart - p.navigationStart : 0,
                                redirectEnd: p.redirectEnd ? p.redirectEnd - p.navigationStart : 0,
                                fetchStart: p.fetchStart ? p.fetchStart - p.navigationStart : 0,
                                domainLookupStart: p.domainLookupStart ? p.domainLookupStart - p.navigationStart : 0,
                                domainLookupEnd: p.domainLookupEnd ? p.domainLookupEnd - p.navigationStart : 0,
                                connectStart: p.connectStart ? p.connectStart - p.navigationStart : 0,
                                secureConnectionStart: p.secureConnectionStart ? p.secureConnectionStart - p.navigationStart : 0,
                                connectEnd: p.connectEnd ? p.connectEnd - p.navigationStart : 0,
                                requestStart: p.requestStart ? p.requestStart - p.navigationStart : 0,
                                responseStart: p.responseStart ? p.responseStart - p.navigationStart : 0,
                                responseEnd: p.responseEnd ? p.responseEnd - p.navigationStart : 0
                            })
                        }
                    }
                    var g = e.performance.getEntriesByType("resource");
                    var y = [];
                    for (o = 0; g && o < g.length; o++) {
                        p = g[o];
                        v = {
                            name: p.name,
                            initiatorType: p.initiatorType,
                            startTime: p.startTime + r,
                            redirectStart: p.redirectStart ? p.redirectStart + r : 0,
                            redirectEnd: p.redirectEnd ? p.redirectEnd + r : 0,
                            fetchStart: p.fetchStart ? p.fetchStart + r : 0,
                            domainLookupStart: p.domainLookupStart ? p.domainLookupStart + r : 0,
                            domainLookupEnd: p.domainLookupEnd ? p.domainLookupEnd + r : 0,
                            connectStart: p.connectStart ? p.connectStart + r : 0,
                            secureConnectionStart: p.secureConnectionStart ? p.secureConnectionStart + r : 0,
                            connectEnd: p.connectEnd ? p.connectEnd + r : 0,
                            requestStart: p.requestStart ? p.requestStart + r : 0,
                            responseStart: p.responseStart ? p.responseStart + r : 0,
                            responseEnd: p.responseEnd ? p.responseEnd + r : 0
                        };
                        if (p.encodedBodySize || p.decodedBodySize || p.transferSize) {
                            v.encodedBodySize = p.encodedBodySize;
                            v.decodedBodySize = p.decodedBodySize;
                            v.transferSize = p.transferSize
                        }
                        p.serverTiming && p.serverTiming.length && (v.serverTiming = p.serverTiming);
                        this.updateScriptFlags(m, p, v);
                        this.updateLinkFlags(l, p, v);
                        y.push(v)
                    }
                    i = i.concat(y)
                } catch (e) {
                    return i
                }
                return i
            };
            v.updateScriptFlags = function(e, t, r) {
                if (("script" === t.initiatorType || "link" === t.initiatorType) && e[t.name]) {
                    var n = e[t.name];
                    r.scriptAttrs = (n.async ? v.SPECIAL_DATA_SCRIPT_ASYNC_ATTR : 0) | (n.defer ? v.SPECIAL_DATA_SCRIPT_DEFER_ATTR : 0);
                    while (1 === n.nodeType && "BODY" !== n.nodeName) n = n.parentNode;
                    r.scriptAttrs |= "BODY" === n.nodeName ? v.SPECIAL_DATA_SCRIPT_LOCAT_ATTR : 0
                }
            };
            v.updateLinkFlags = function(e, t, r) {
                "link" === t.initiatorType && e[t.name] && e[t.name].rel.split(/[\u0009\u000A\u000C\u000D\u0020]+/).find(function(e) {
                    e = e.toLowerCase();
                    if (v.REL_TYPES[e]) {
                        r.linkAttrs = v.REL_TYPES[e];
                        return true
                    }
                    return false
                })
            };
            v.toBase36 = function(e) {
                if ("number" === typeof e && 0 !== e) return e.toString(36);
                return "string" === typeof e ? e : ""
            };

            function w(t, r, e) {
                Array.prototype.forEach.call(t.ownerDocument.getElementsByTagName(e), function(e) {
                    t.href = e.currentSrc || e.src || e.getAttribute("xlink:href") || e.href;
                    t.href.match(/^https?:\/\//) && (r[t.href] = e)
                })
            }
            v.getVisibleEntries = function(e) {
                if (!e) return {};
                var t = ["img", "iframe", "image"],
                    c = {},
                    f, p, d = e.document,
                    v = d.createElement("A");
                f = void 0 !== e.pageXOffset ? e.pageXOffset : (d.documentElement || d.body.parentNode || d.body).scrollLeft;
                p = void 0 !== e.pageYOffset ? e.pageYOffset : (d.documentElement || d.body.parentNode || d.body).scrollTop;
                t.forEach(function(e) {
                    var t = d.getElementsByTagName(e),
                        r, n, i, o;
                    for (n = 0; n < t.length; n++) {
                        r = t[n];
                        if (!r) continue;
                        o = r.currentSrc || r.src || "function" === typeof r.getAttribute && r.getAttribute("src") || r.getAttribute("xlink:href");
                        v.href = o;
                        o = v.href;
                        if (!o || c[o]) continue;
                        i = r.getBoundingClientRect();
                        if ((i.height || r.offsetHeight) && (i.width || r.offsetWidth)) {
                            c[o] = [i.height || r.offsetHeight, i.width || r.offsetWidth, Math.round(i.top + p), Math.round(i.left + f)];
                            if (!r.naturalHeight && !r.naturalWidth) continue;
                            var a, s, u;
                            if (r.currentSrc && (r.srcset || r.parentNode && r.parentNode.nodeName && "PICTURE" === r.parentNode.nodeName.toUpperCase())) {
                                a = r.isConnected ? r.ownerDocument.createElement("IMG") : new l.Image;
                                a.src = o
                            } else a = r;
                            s = a.naturalHeight || r.naturalHeight;
                            u = a.naturalWidth || r.naturalWidth;
                            !s && !u || c[o][0] === s && c[o][1] === u || c[o].push(s, u)
                        }
                    }
                });
                return c
            };
            v.inArray = function(e, t) {
                var r;
                if ("undefined" === typeof e || "undefined" === typeof t || !t.length) return false;
                for (r = 0; r < t.length; r++)
                    if (t[r] === e) return true;
                return false
            };
            v.getFilteredResourceTiming = function(e, t, r, n) {
                var i = this.findPerformanceEntriesForFrame(e, true, 0, 0),
                    o, a, s = this.getNavStartTime(e),
                    u = {};
                if (!i || !i.length) return {
                    entries: []
                };
                var c = [];
                for (o = 0; o < i.length; o++) {
                    a = i[o];
                    if (0 === a.name.indexOf("about:") || 0 === a.name.indexOf("javascript:")) continue;
                    if (t && s + a.startTime < t) continue;
                    if (r && s + a.startTime > r) break;
                    if ("undefined" !== typeof n && "*" !== n && n.length && (!a.initiatorType || !this.inArray(a.initiatorType, n))) continue;
                    v.accumulateServerTimingEntries(u, a.serverTiming);
                    c.push(a)
                }
                var f = v.compressServerTiming(u);
                return {
                    entries: c,
                    serverTiming: {
                        lookup: f,
                        indexed: v.indexServerTiming(f)
                    }
                }
            };
            v.compressSize = function(e) {
                var t, r, n, i;
                if (e.encodedBodySize || e.decodedBodySize || e.transferSize) {
                    t = e.transferSize;
                    r = e.encodedBodySize;
                    n = e.decodedBodySize;
                    i = [r, t ? t - r : "_", n - r];
                    return i.map(this.toBase36).join(",").replace(/,+$/, "")
                }
                return ""
            };
            v.cleanupURL = function(e, t) {
                var r;
                if (!e || "[object Array]" === Object.prototype.toString.call(e)) return "";
                if ("undefined" !== typeof t && e && e.length > t) {
                    r = e.indexOf("?");
                    e = -1 !== r && r < t ? e.substr(0, r) + "?..." : e.substr(0, t - 3) + "..."
                }
                return e
            };
            v.trimUrl = function(e, t) {
                var r, n, i;
                if (e && t)
                    for (r = 0; r < t.length; r++) {
                        i = t[r];
                        if ("string" === typeof i) {
                            n = e.indexOf(i);
                            if (-1 !== n) {
                                e = e.substr(0, n + i.length) + "...";
                                break
                            }
                        } else i instanceof RegExp && i.test(e) && (e = e.replace(i, "$1") + "...")
                    }
                return this.cleanupURL(e, v.DEFAULT_URL_LIMIT)
            };
            v.getResourceTiming = function(e, t, r, n) {
                "undefined" === typeof e && (e = l);
                var i = v.getFilteredResourceTiming(e, t, r);
                var o = i.entries,
                    a = i.serverTiming;
                if (!o || !o.length) return {};
                return v.compressResourceTiming(e, o, a, n)
            };
            v.compressResourceTiming = function(e, t, o, r) {
                var n, i, a = {},
                    s, u, c, f, p = {};
                r || (p = this.getVisibleEntries(e));
                for (n = 0; n < t.length; n++) {
                    i = t[n];
                    s = this.INITIATOR_TYPES[i.initiatorType];
                    "undefined" === typeof s && (s = 0);
                    f = s + [this.trimTiming(i.startTime, 0), this.trimTiming(i.responseEnd, i.startTime), this.trimTiming(i.responseStart, i.startTime), this.trimTiming(i.requestStart, i.startTime), this.trimTiming(i.connectEnd, i.startTime), this.trimTiming(i.secureConnectionStart, i.startTime), this.trimTiming(i.connectStart, i.startTime), this.trimTiming(i.domainLookupEnd, i.startTime), this.trimTiming(i.domainLookupStart, i.startTime), this.trimTiming(i.redirectEnd, i.startTime), this.trimTiming(i.redirectStart, i.startTime)].map(this.toBase36).join(",").replace(/,+$/, "");
                    var d = this.compressSize(i);
                    "" !== d && (f += v.SPECIAL_DATA_PREFIX + v.SPECIAL_DATA_SIZE_TYPE + d);
                    i.hasOwnProperty("scriptAttrs") && (f += v.SPECIAL_DATA_PREFIX + v.SPECIAL_DATA_SCRIPT_TYPE + i.scriptAttrs);
                    i.hasOwnProperty("linkAttrs") && (f += v.SPECIAL_DATA_PREFIX + v.SPECIAL_DATA_LINK_ATTR_TYPE + i.linkAttrs);
                    i.serverTiming && i.serverTiming.length && (f += v.SPECIAL_DATA_PREFIX + v.SPECIAL_DATA_SERVERTIMING_TYPE + i.serverTiming.reduce(function(e, t, r) {
                        var n = String(t.duration);
                        "0." === n.substring(0, 2) && (n = n.substring(1));
                        var i = v.identifyServerTimingEntry(o.indexed[t.name].index, o.indexed[t.name].descriptions[t.description]);
                        e += (r > 0 ? "," : "") + n + i;
                        return e
                    }, ""));
                    c = u = this.trimUrl(i.name, this.trimUrls);
                    v.HOSTNAMES_REVERSED && (c = this.reverseHostname(u));
                    void 0 !== a[c] ? a[c] += "|" + f : void 0 !== p[u] ? a[c] = v.SPECIAL_DATA_PREFIX + v.SPECIAL_DATA_DIMENSION_TYPE + p[u].map(this.toBase36).join(",").replace(/,+$/, "") + "|" + f : a[c] = f
                }
                return {
                    restiming: this.optimizeTrie(this.convertToTrie(a), true),
                    servertiming: o.lookup
                }
            };
            v.reverseHostname = function(e) {
                return e.replace(v.HOSTNAME_REGEX, function(e, t, r, n) {
                    return t + v.reverseString(r) + n
                })
            };
            v.reverseString = function(e) {
                var t = e.length,
                    r = "";
                while (t--) r += e[t];
                return r
            };
            v.accumulateServerTimingEntries = function(r, e) {
                (e || []).forEach(function(e) {
                    "undefined" === typeof r[e.name] && (r[e.name] = {
                        count: 0,
                        counts: {}
                    });
                    var t = r[e.name];
                    t.counts[e.description] = t.counts[e.description] || 0;
                    t.counts[e.description]++;
                    t.count++
                })
            };
            v.compressServerTiming = function(n) {
                return Object.keys(n).sort(function(e, t) {
                    return n[t].count - n[e].count
                }).reduce(function(e, r) {
                    var t = Object.keys(n[r].counts).sort(function(e, t) {
                        return n[r].counts[t] - n[r].counts[e]
                    });
                    e.push(1 === t.length && "" === t[0] ? r : [r].concat(t));
                    return e
                }, [])
            };
            v.indexServerTiming = function(e) {
                return e.reduce(function(e, t, r) {
                    var n, i;
                    if (Array.isArray(t)) {
                        n = t[0];
                        i = t.slice(1).reduce(function(e, t, r) {
                            e[t] = r;
                            return e
                        }, {})
                    } else {
                        n = t;
                        i = {
                            "": 0
                        }
                    }
                    e[n] = {
                        index: r,
                        descriptions: i
                    };
                    return e
                }, {})
            };
            v.identifyServerTimingEntry = function(e, t) {
                var r = "";
                e && (r += e);
                t && (r += "." + t);
                r.length && (r = ":" + r);
                return r
            };
            true;
            !(i = [], o = function() {
                return v
            }.apply(n, i), void 0 !== o && (r.exports = o))
        })("undefined" !== typeof window ? window : void 0)
    },
    "./src/main/webapp/universal/node_modules/tti-polyfill/tti-polyfill.js": function(O, C, e) {
        (function(E) {
            var S, b;
            (function() {
                var t = "undefined" != typeof window && window === this ? this : "undefined" != typeof E && null != E ? E : this,
                    r = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, r) {
                        e != Array.prototype && e != Object.prototype && (e[t] = r.value)
                    };

                function n() {
                    n = function() {};
                    t.Symbol || (t.Symbol = e)
                }
                var i = 0;

                function e(e) {
                    return "jscomp_symbol_" + (e || "") + i++
                }

                function o() {
                    n();
                    var e = t.Symbol.iterator;
                    e = e || (t.Symbol.iterator = t.Symbol("iterator"));
                    "function" != typeof Array.prototype[e] && r(Array.prototype, e, {
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            return a(this)
                        }
                    });
                    o = function() {}
                }

                function a(e) {
                    var t = 0;
                    return s(function() {
                        return t < e.length ? {
                            done: !1,
                            value: e[t++]
                        } : {
                            done: !0
                        }
                    })
                }

                function s(e) {
                    o();
                    e = {
                        next: e
                    };
                    e[t.Symbol.iterator] = function() {
                        return this
                    };
                    return e
                }

                function u(e) {
                    o();
                    var t = e[Symbol.iterator];
                    return t ? t.call(e) : a(e)
                }

                function c(e) {
                    if (!(e instanceof Array)) {
                        e = u(e);
                        for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                        e = r
                    }
                    return e
                }
                var f = 0;

                function p(i, o) {
                    var a = XMLHttpRequest.prototype.send,
                        s = f++;
                    XMLHttpRequest.prototype.send = function(e) {
                        for (var t = [], r = 0; r < arguments.length; ++r) t[r - 0] = arguments[r];
                        var n = this;
                        i(s);
                        this.addEventListener("readystatechange", function() {
                            4 === n.readyState && o(s)
                        });
                        return a.apply(this, t)
                    }
                }

                function d(o, a) {
                    var s = fetch;
                    fetch = function(e) {
                        for (var i = [], t = 0; t < arguments.length; ++t) i[t - 0] = arguments[t];
                        return new Promise(function(t, r) {
                            var n = f++;
                            o(n);
                            s.apply(null, [].concat(c(i))).then(function(e) {
                                a(n);
                                t(e)
                            }, function(e) {
                                a(e);
                                r(e)
                            })
                        })
                    }
                }
                var v = "img script iframe link audio video source".split(" ");

                function l(e, t) {
                    e = u(e);
                    for (var r = e.next(); !r.done; r = e.next())
                        if (r = r.value, t.includes(r.nodeName.toLowerCase()) || l(r.children, t)) return !0;
                    return !1
                }

                function m(r) {
                    var e = new MutationObserver(function(e) {
                        e = u(e);
                        for (var t = e.next(); !t.done; t = e.next()) t = t.value, "childList" == t.type && l(t.addedNodes, v) ? r(t) : "attributes" == t.type && v.includes(t.target.tagName.toLowerCase()) && r(t)
                    });
                    e.observe(document, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        attributeFilter: ["href", "src"]
                    });
                    return e
                }

                function h(e, t) {
                    if (2 < e.length) return performance.now();
                    var r = [];
                    t = u(t);
                    for (var n = t.next(); !n.done; n = t.next()) n = n.value, r.push({
                        timestamp: n.start,
                        type: "requestStart"
                    }), r.push({
                        timestamp: n.end,
                        type: "requestEnd"
                    });
                    t = u(e);
                    for (n = t.next(); !n.done; n = t.next()) r.push({
                        timestamp: n.value,
                        type: "requestStart"
                    });
                    r.sort(function(e, t) {
                        return e.timestamp - t.timestamp
                    });
                    e = e.length;
                    for (t = r.length - 1; 0 <= t; t--) switch (n = r[t], n.type) {
                        case "requestStart":
                            e--;
                            break;
                        case "requestEnd":
                            e++;
                            if (2 < e) return n.timestamp;
                            break;
                        default:
                            throw Error("Internal Error: This should never happen")
                    }
                    return 0
                }

                function g(e) {
                    e = e || {};
                    this.w = !!e.useMutationObserver;
                    this.u = e.minValue || null;
                    e = window.__tti && window.__tti.e;
                    var t = window.__tti && window.__tti.o;
                    this.a = e ? e.map(function(e) {
                        return {
                            start: e.startTime,
                            end: e.startTime + e.duration
                        }
                    }) : [];
                    t && t.disconnect();
                    this.b = [];
                    this.f = new Map;
                    this.j = null;
                    this.v = -1 / 0;
                    this.i = !1;
                    this.h = this.c = this.s = null;
                    p(this.m.bind(this), this.l.bind(this));
                    d(this.m.bind(this), this.l.bind(this));
                    T(this);
                    this.w && (this.h = m(this.B.bind(this)))
                }
                g.prototype.getFirstConsistentlyInteractive = function() {
                    var t = this;
                    return new Promise(function(e) {
                        t.s = e;
                        "complete" == document.readyState ? y(t) : window.addEventListener("load", function() {
                            y(t)
                        })
                    })
                };

                function y(e) {
                    e.i = !0;
                    var t = 0 < e.a.length ? e.a[e.a.length - 1].end : 0,
                        r = h(e.g, e.b);
                    w(e, Math.max(r + 5e3, t))
                }

                function w(o, e) {
                    !o.i || o.v > e || (clearTimeout(o.j), o.j = setTimeout(function() {
                        var e = performance.timing.navigationStart,
                            t = h(o.g, o.b),
                            e = (window.a && window.a.A ? 1e3 * window.a.A().C - e : 0) || performance.timing.domContentLoadedEventEnd - e;
                        if (o.u) var r = o.u;
                        else r = performance.timing.domContentLoadedEventEnd ? (r = performance.timing, r.domContentLoadedEventEnd - r.navigationStart) : null;
                        var n = performance.now();
                        null === r && w(o, Math.max(t + 5e3, n + 1e3));
                        var i = o.a;
                        t = 5e3 > n - t ? null : (t = i.length ? i[i.length - 1].end : e, 5e3 > n - t ? null : Math.max(t, r));
                        t && (o.s(t), clearTimeout(o.j), o.i = !1, o.c && o.c.disconnect(), o.h && o.h.disconnect());
                        w(o, performance.now() + 1e3)
                    }, e - performance.now()), o.v = e)
                }

                function T(n) {
                    n.c = new PerformanceObserver(function(e) {
                        e = u(e.getEntries());
                        for (var t = e.next(); !t.done; t = e.next())
                            if (t = t.value, "resource" === t.entryType && (n.b.push({
                                    start: t.fetchStart,
                                    end: t.responseEnd
                                }), w(n, h(n.g, n.b) + 5e3)), "longtask" === t.entryType) {
                                var r = t.startTime + t.duration;
                                n.a.push({
                                    start: t.startTime,
                                    end: r
                                });
                                w(n, r + 5e3)
                            }
                    });
                    n.c.observe({
                        entryTypes: ["longtask", "resource"]
                    })
                }
                g.prototype.m = function(e) {
                    this.f.set(e, performance.now())
                };
                g.prototype.l = function(e) {
                    this.f.delete(e)
                };
                g.prototype.B = function() {
                    w(this, performance.now() + 5e3)
                };
                t.Object.defineProperties(g.prototype, {
                    g: {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return [].concat(c(this.f.values()))
                        }
                    }
                });
                var _ = {
                    getFirstConsistentlyInteractive: function(e) {
                        e = e || {};
                        return "PerformanceLongTaskTiming" in window ? new g(e).getFirstConsistentlyInteractive() : Promise.resolve(null)
                    }
                };
                true, O.exports ? O.exports = _ : (true, !(S = [], b = function() {
                    return _
                }.apply(C, S), void 0 !== b && (O.exports = b)))
            })()
        }).call(this, e("./node_modules/webpack/buildin/global.js"))
    },
    "./src/main/webapp/universal/packages/enums/PageTypes.js": function(e, t) {
        var r = {
            MAIN_CONTENT: 1,
            CONTENT_COLLECTION: 1,
            PAGE: 2,
            SPLASH_PAGE: 3,
            CONTENT_ITEM: 50,
            NOT_FOUND: 100,
            ERROR: 101,
            SEARCH: 102,
            LOCK_SCREEN: 103,
            POPUP_OVERLAY: 104,
            PROTECTED_CONTENT: 105,
            SHOW_CART: 200,
            CHECKOUT: 201,
            ORDER_CONFIRMED: 202,
            DONATE: 203,
            CONTRIBUTION_CONFIRMED: 204,
            COMMERCE_CART_V2: 205,
            SUBSCRIPTION_CONFIRMED: 206,
            ORDER_RECEIVED: 207,
            MEMBERSHIP_CONFIRMED: 208,
            NEWSLETTER_UNSUBSCRIBE: 300,
            COMMERCE_EMAIL_PREVIEW: 301
        };
        e.exports = r
    },
    "./src/main/webapp/universal/packages/enums/StatusConstants.js": function(e, t) {
        var r = {
            EXPIRED: 1,
            PASTDUE: 2,
            TRIAL: 3,
            BETA: 4,
            REMOVED: 5,
            INTERNAL: 6,
            COMPED: 7,
            PAID: 8,
            V5_LINKED: 11,
            ACTIVE_PARKING_PAGE: 12,
            RESOLD: 13,
            RESOLD_GRACE_PERIOD: 14
        };
        e.exports = r
    },
    "./src/main/webapp/universal/src/apps/Performance/bootstrap.js": function(e, t, r) {
        "use strict";
        var n = r("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        var i = n(r("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/objectSpread.js"));
        var o = n(r("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/defineProperty.js"));
        var a = n(r("./src/main/webapp/universal/node_modules/@sqs/rum-collector/lib/index.js"));
        var s = n(r("./src/main/webapp/universal/packages/enums/StatusConstants.js"));
        var u = n(r("./src/main/webapp/universal/packages/enums/PageTypes.js"));
        var c = window.Static && window.Static.SQUARESPACE_CONTEXT;
        var f = window.top !== window;
        var p = Object.freeze((0, o.default)({}, u.default.COMMERCE_CART_V2, "commerce-cart"));
        var d = "5c5a519771c10ba3470d8101";

        function v() {
            var e = window.location && window.location.pathname || "";
            return !f && /^\/config(\/.*)?$/.test(e)
        }

        function l() {
            return {
                templateId: c.templateId || ""
            }
        }

        function m() {
            var e = c.website,
                t = void 0 === e ? {} : e;
            return {
                authenticUrl: t.authenticUrl || "",
                cloneable: t.cloneable || false,
                developerMode: t.developerMode || false,
                isHstsEnabled: t.isHstsEnabled || false,
                language: t.language || "",
                timeZone: t.timeZone || "",
                websiteId: t.id || "",
                websiteType: t.websiteType || -1
            }
        }

        function h() {
            var e = c.websiteSettings,
                t = void 0 === e ? {} : e;
            return {
                ampEnabled: t.ampEnabled || false
            }
        }

        function g() {
            var e = c.collection,
                t = void 0 === e ? {} : e;
            return {
                collectionType: t.type || -1
            }
        }

        function y() {
            return c.templateId === d
        }

        function w() {
            if (void 0 !== c.version) return c.version;
            if (y()) return "7_1";
            return 7
        }

        function T() {
            var e = c.website.siteStatus.value === s.default.INTERNAL;
            var t = c.authenticatedAccount,
                r = t.createdOn,
                n = t.id;
            return {
                appName: "v".concat(w(), "-config"),
                context: (0, i.default)({}, l(), m(), h(), {
                    isInternal: e,
                    createdOn: r,
                    memberId: n
                })
            }
        }

        function _() {
            return window.Squarespace && "SECTION_CONTEXT" in window.Squarespace
        }

        function E() {
            if (_()) return 8;
            if (y()) return "7_1";
            return 7
        }

        function S() {
            var e = E();
            if (8 === e) return {
                appName: "v8-user-sites",
                context: (0, i.default)({
                    websiteId: c.websiteId || "",
                    inFrame: f
                }, l())
            };
            var t = c.impersonatedSession,
                r = void 0 !== t && t,
                n = c.pageType;
            return {
                appName: p[n] || "v".concat(e, "-user-sites"),
                context: (0, i.default)({
                    impersonatedSession: r,
                    pageType: "number" === typeof n ? n : -1,
                    inFrame: f
                }, l(), m(), h(), g())
            }
        }

        function b() {
            return v() ? T() : S()
        }(true, c) && (0, a.default)(b())
    }
});
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/performance-dee6d4992571b5cf473aa-min.en-US.js.map