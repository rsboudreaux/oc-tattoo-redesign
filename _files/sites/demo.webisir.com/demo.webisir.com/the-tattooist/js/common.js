function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}

function uncamel(e) {
    return e.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase()
    })
}

function setUnit(e, t) {
    return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + t : e
}

function setFilter(e, t, r) {
    var i = uncamel(t),
        n = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    e[n + "filter"] = e[n + "filter"] || "", r = setUnit(r > jQuery.CSS.filters[t].max ? jQuery.CSS.filters[t].max : r, jQuery.CSS.filters[t].unit), e[n + "filter"] += i + "(" + r + ") ", delete e[t]
}! function(e, t, r) {
    "use strict";
    e.fn.backstretch = function(r, i) {
        var n = arguments;
        return 0 === e(t).scrollTop() && t.scrollTo(0, 0), this.each(function() {
            var t = e(this),
                o = t.data("backstretch");
            if (o) {
                if ("string" == typeof n[0] && "function" == typeof o[n[0]]) return void o[n[0]](i);
                i = e.extend(o.options, i), o.hasOwnProperty("destroy") && o.destroy(!0)
            }
            if (!r || r && 0 === r.length) {
                var a = t.css("background-image");
                a && "none" !== a ? r = [{
                    url: t.css("backgroundImage").replace(/url\(|\)|"|'/g, "")
                }] : e.error("No images were supplied for Backstretch, or element must have a CSS-defined background image.")
            }
            o = new l(this, r, i || {}), t.data("backstretch", o)
        })
    }, e.backstretch = function(t, r) {
        return e("body").backstretch(t, r).data("backstretch")
    }, e.expr[":"].backstretch = function(t) {
        return e(t).data("backstretch") !== r
    }, e.fn.backstretch.defaults = {
        duration: 5e3,
        fade: 0,
        fadeFirst: !0,
        alignX: .5,
        alignY: .5,
        paused: !1,
        start: 0,
        preload: 2,
        preloadSize: 1,
        resolutionRefreshRate: 2500,
        resolutionChangeRatioTreshold: .1
    };
    var i = {
            wrap: {
                left: 0,
                top: 0,
                overflow: "hidden",
                margin: 0,
                padding: 0,
                height: "100%",
                width: "100%",
                zIndex: -999999
            },
            img: {
                position: "absolute",
                display: "none",
                margin: 0,
                padding: 0,
                border: "none",
                width: "auto",
                height: "auto",
                maxWidth: "none",
                zIndex: -999999
            }
        },
        n = function() {
            var r = function(e) {
                    for (var t = 1; t < e.length; t++) {
                        for (var r = e[t], i = t; e[i - 1] && parseInt(e[i - 1].width, 10) > parseInt(r.width, 10);) e[i] = e[i - 1], --i;
                        e[i] = r
                    }
                    return e
                },
                i = function(e, r) {
                    for (var i, n, o = t.devicePixelRatio || 1, a = 0, s = 0; s < r.length && (n = r[s], "string" == typeof n && (n = r[s] = {
                            url: n
                        }), n.pixelRatio && parseFloat(n.pixelRatio) !== o || (a = s, i = e, "auto" === n.pixelRatio && (e *= o), !(n.width >= i))); s++);
                    return r[Math.min(s, a)]
                };
            return function(t, n) {
                for (var o = t.width(), a = t.height(), s = [], l = function(e, t) {
                        return "width" === t ? o : "height" === t ? a : e
                    }, u = 0; u < n.length; u++)
                    if (e.isArray(n[u])) {
                        n[u] = r(n[u]);
                        var c = i(o, n[u]);
                        s.push(c)
                    } else {
                        "string" == typeof n[u] && (n[u] = {
                            url: n[u]
                        });
                        var p = e.extend({}, n[u]);
                        p.url = p.url.replace(/{{(width|height)}}/g, l), s.push(p)
                    }
                return s
            }
        }(),
        o = function(t, r, i, n, o) {
            var a = [],
                s = function(e) {
                    for (var t = 0; t < a.length; t++)
                        if (a[t].src === e.src) return a[t];
                    return a.push(e), e
                },
                l = function(e, t, r) {
                    "function" == typeof t && t.call(e, r)
                };
            return function u(t, r, i, n, o) {
                if ("undefined" != typeof t) {
                    e.isArray(t) || (t = [t]), arguments.length < 5 && "function" == typeof arguments[arguments.length - 1] && (o = arguments[arguments.length - 1]), r = "function" != typeof r && r ? r : 0, i = "function" == typeof i || !i || 0 > i ? t.length : Math.min(i, t.length), n = "function" != typeof n && n ? n : 1, r >= t.length && (r = 0, i = 0), 0 > n && (n = i), n = Math.min(n, i);
                    var a = t.slice(r + n, i - n);
                    if (t = t.slice(r, n), i = t.length, !i) return void l(t, o, !0);
                    for (var c, p = 0, d = function() {
                            p++, p === i && (l(t, o, !a), u(a, 0, 0, n, o))
                        }, f = 0; f < t.length; f++) c = new Image, c.src = t[f].url, c = s(c), c.complete ? d() : e(c).on("load error", d)
                }
            }
        }(),
        a = function(t) {
            for (var r = [], i = 0; i < t.length; i++) "string" == typeof t[i] ? r.push({
                url: t[i]
            }) : e.isArray(t[i]) ? r.push(a(t[i])) : r.push(s(t[i]));
            return r
        },
        s = function(e, t) {
            return "left" === e.alignX ? e.alignX = 0 : "center" === e.alignX ? e.alignX = .5 : "right" === e.alignX ? e.alignX = 1 : (e.alignX !== r || t) && (e.alignX = parseFloat(e.alignX), isNaN(e.alignX) && (e.alignX = .5)), "top" === e.alignY ? e.alignY = 0 : "center" === e.alignY ? e.alignY = .5 : "bottom" === e.alignY ? e.alignY = 1 : (e.alignX !== r || t) && (e.alignY = parseFloat(e.alignY), isNaN(e.alignY) && (e.alignY = .5)), e
        },
        l = function(r, l, c) {
            this.options = e.extend({}, e.fn.backstretch.defaults, c || {}), this.firstShow = !0, (this.options.centeredX || this.options.centeredY) && (t.console && t.console.log && t.console.log("jquery.backstretch: `centeredX`/`centeredY` is deprecated, please use `alignX`/`alignY`"), this.options.centeredX && (this.options.alignX = .5), this.options.centeredY && (this.options.alignY = .5)), s(this.options, !0), this.images = a(e.isArray(l) ? l : [l]), this.options.paused && (this.paused = !0), this.options.start >= this.images.length && (this.options.start = this.images.length - 1), this.options.start < 0 && (this.options.start = 0), this.isBody = r === document.body;
            var p = e(t);
            this.$container = e(r), this.$root = this.isBody ? u ? p : e(document) : this.$container, this.originalImages = this.images, this.images = n(this.options.alwaysTestWindowResolution ? p : this.$root, this.originalImages), o(this.images, this.options.start || 0, this.options.preload || 1);
            var d = this.$container.children(".backstretch").first();
            if (this.$wrap = d.length ? d : e('<div class="backstretch"></div>').css(this.options.bypassCss ? {} : i.wrap).appendTo(this.$container), !this.options.bypassCss) {
                if (!this.isBody) {
                    var f = this.$container.css("position"),
                        y = this.$container.css("zIndex");
                    this.$container.css({
                        position: "static" === f ? "relative" : f,
                        zIndex: "auto" === y ? 0 : y,
                        background: "none"
                    }), this.$wrap.css({
                        zIndex: -999998
                    })
                }
                this.$wrap.css({
                    position: this.isBody && u ? "fixed" : "absolute"
                })
            }
            this.index = this.options.start, this.show(this.index), p.on("resize.backstretch", e.proxy(this.resize, this)).on("orientationchange.backstretch", e.proxy(function() {
                this.isBody && 0 === t.pageYOffset && (t.scrollTo(0, 1), this.resize())
            }, this))
        };
    l.prototype = {
        resize: function() {
            try {
                var i = this.options.alwaysTestWindowResolution ? e(t) : this.$root,
                    a = i.width(),
                    s = i.height(),
                    l = a / (this._lastResizeContainerWidth || 0),
                    u = s / (this._lastResizeContainerHeight || 0),
                    c = this.options.resolutionChangeRatioTreshold || 0;
                if ((a !== this._lastResizeContainerWidth || s !== this._lastResizeContainerHeight) && (Math.abs(l - 1) >= c || isNaN(l) || Math.abs(u - 1) >= c || isNaN(u)) && (this._lastResizeContainerWidth = a, this._lastResizeContainerHeight = s, this.images = n(i, this.originalImages), this.options.preload && o(this.images, (this.index + 1) % this.images.length, this.options.preload), 1 === this.images.length && this._currentImage !== this.images[0])) {
                    var p = this;
                    clearTimeout(p._selectAnotherResolutionTimeout), p._selectAnotherResolutionTimeout = setTimeout(function() {
                        p.show(0)
                    }, this.options.resolutionRefreshRate)
                }
                var d, f = {
                        left: 0,
                        top: 0,
                        right: "auto",
                        bottom: "auto"
                    },
                    y = this.isBody ? this.$root.width() : this.$root.innerWidth(),
                    m = y,
                    h = this.isBody ? t.innerHeight ? t.innerHeight : this.$root.height() : this.$root.innerHeight(),
                    v = m / this.$img.data("ratio"),
                    g = e.Event("backstretch.resize", {
                        relatedTarget: this.$container[0]
                    }),
                    T = this._currentImage.alignX === r ? this.options.alignX : this._currentImage.alignX,
                    b = this._currentImage.alignY === r ? this.options.alignY : this._currentImage.alignY;
                v >= h ? f.top = -(v - h) * b : (v = h, m = v * this.$img.data("ratio"), d = (m - y) / 2, f.left = -(m - y) * T), this.options.bypassCss || this.$wrap.css({
                    width: y,
                    height: h
                }).find("img:not(.deleteable)").css({
                    width: m,
                    height: v
                }).css(f), this.$container.trigger(g, this)
            } catch (P) {}
            return this
        },
        show: function(t) {
            if (!(Math.abs(t) > this.images.length - 1)) {
                var n = this,
                    o = n.$wrap.find("img").addClass("deleteable"),
                    a = {
                        relatedTarget: n.$container[0]
                    };
                n.$container.trigger(e.Event("backstretch.before", a), [n, t]), this.index = t, clearTimeout(n._cycleTimeout), n.$img = e("<img />"), this.options.bypassCss ? n.$img.css({
                    display: "none"
                }) : n.$img.css(i.img), n.$img.bind("load", function(i) {
                    var s = e(this),
                        l = this.width || e(i.target).width(),
                        u = this.height || e(i.target).height();
                    s.data("ratio", l / u);
                    var c = s.data("options").fade !== r ? s.data("options").fade : n.options.speed || n.options.fade,
                        p = function() {
                            o.remove(), !n.paused && n.images.length > 1 && n.cycle(), e(["after", "show"]).each(function() {
                                n.$container.trigger(e.Event("backstretch." + this, a), [n, t])
                            })
                        };
                    n.firstShow && !n.options.fadeFirst || !c ? (e(this).show(), p()) : e(this).fadeIn(c, p), n.firstShow = !1, n.resize()
                }).appendTo(n.$wrap);
                var s = n.images[t];
                return n.$img.attr("src", s.url), n.$img.attr("alt", s.alt || ""), n.$img.data("options", s), n._currentImage = s, n
            }
        },
        next: function() {
            return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
        },
        prev: function() {
            return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
        },
        pause: function() {
            return this.paused = !0, this
        },
        resume: function() {
            return this.paused = !1, this.cycle(), this
        },
        cycle: function() {
            if (this.images.length > 1) {
                clearTimeout(this._cycleTimeout);
                var t = this._currentImage && this._currentImage.duration || this.options.duration;
                this._cycleTimeout = setTimeout(e.proxy(function() {
                    this.paused || this.next()
                }, this), t)
            }
            return this
        },
        destroy: function(r) {
            e(t).off("resize.backstretch orientationchange.backstretch"), clearTimeout(this._cycleTimeout), r || this.$wrap.remove(), this.$container.removeData("backstretch")
        }
    };
    var u = function() {
        var e = navigator.userAgent,
            r = navigator.platform,
            i = e.match(/AppleWebKit\/([0-9]+)/),
            n = !!i && i[1],
            o = e.match(/Fennec\/([0-9]+)/),
            a = !!o && o[1],
            s = e.match(/Opera Mobi\/([0-9]+)/),
            l = !!s && s[1],
            u = e.match(/MSIE ([0-9]+)/),
            c = !!u && u[1];
        return !((r.indexOf("iPhone") > -1 || r.indexOf("iPad") > -1 || r.indexOf("iPod") > -1) && n && 534 > n || t.operamini && "[object OperaMini]" === {}.toString.call(t.operamini) || s && 7458 > l || e.indexOf("Android") > -1 && n && 533 > n || a && 6 > a || "palmGetResource" in t && n && 534 > n || e.indexOf("MeeGo") > -1 && e.indexOf("NokiaBrowser/8.5.0") > -1 || c && 6 >= c)
    }()
}(jQuery, window), ! function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}(this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var r = this._events = this._events || {},
                i = r[e] = r[e] || [];
            return -1 == i.indexOf(t) && i.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var r = this._onceEvents = this._onceEvents || {},
                i = r[e] = r[e] || [];
            return i[t] = !0, this
        }
    }, t.off = function(e, t) {
        var r = this._events && this._events[e];
        if (r && r.length) {
            var i = r.indexOf(t);
            return -1 != i && r.splice(i, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var r = this._events && this._events[e];
        if (r && r.length) {
            var i = 0,
                n = r[i];
            t = t || [];
            for (var o = this._onceEvents && this._onceEvents[e]; n;) {
                var a = o && o[n];
                a && (this.off(e, n), delete o[n]), n.apply(this, t), i += a ? 0 : 1, n = r[i]
            }
            return this
        }
    }, e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(r) {
        return t(e, r)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}(window, function(e, t) {
    function r(e, t) {
        for (var r in t) e[r] = t[r];
        return e
    }

    function i(e) {
        var t = [];
        if (Array.isArray(e)) t = e;
        else if ("number" == typeof e.length)
            for (var r = 0; r < e.length; r++) t.push(e[r]);
        else t.push(e);
        return t
    }

    function n(e, t, o) {
        return this instanceof n ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = i(e), this.options = r({}, this.options), "function" == typeof t ? o = t : r(this.options, t), o && this.on("always", o), this.getImages(), s && (this.jqDeferred = new s.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new n(e, t, o)
    }

    function o(e) {
        this.img = e
    }

    function a(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var s = e.jQuery,
        l = e.console;
    n.prototype = Object.create(t.prototype), n.prototype.options = {}, n.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, n.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var r = e.querySelectorAll("img"), i = 0; i < r.length; i++) {
                var n = r[i];
                this.addImage(n)
            }
            if ("string" == typeof this.options.background) {
                var o = e.querySelectorAll(this.options.background);
                for (i = 0; i < o.length; i++) {
                    var a = o[i];
                    this.addElementBackgroundImages(a)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return n.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var r = /url\((['"])?(.*?)\1\)/gi, i = r.exec(t.backgroundImage); null !== i;) {
                var n = i && i[2];
                n && this.addBackground(n, e), i = r.exec(t.backgroundImage)
            }
    }, n.prototype.addImage = function(e) {
        var t = new o(e);
        this.images.push(t)
    }, n.prototype.addBackground = function(e, t) {
        var r = new a(e, t);
        this.images.push(r)
    }, n.prototype.check = function() {
        function e(e, r, i) {
            setTimeout(function() {
                t.progress(e, r, i)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, n.prototype.progress = function(e, t, r) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + r, e, t)
    }, n.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, o.prototype = Object.create(t.prototype), o.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, o.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, o.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, o.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, o.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, o.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, o.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, a.prototype = Object.create(o.prototype), a.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, a.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, a.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, n.makeJQueryPlugin = function(t) {
        t = t || e.jQuery, t && (s = t, s.fn.imagesLoaded = function(e, t) {
            var r = new n(this, e, t);
            return r.jqDeferred.promise(s(this))
        })
    }, n.makeJQueryPlugin(), n
}), ! function(e) {
    function t() {}

    function r(e) {
        function r(t) {
            t.prototype.option || (t.prototype.option = function(t) {
                e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
            })
        }

        function n(t, r) {
            e.fn[t] = function(n) {
                if ("string" == typeof n) {
                    for (var a = i.call(arguments, 1), s = 0, l = this.length; l > s; s++) {
                        var u = this[s],
                            c = e.data(u, t);
                        if (c)
                            if (e.isFunction(c[n]) && "_" !== n.charAt(0)) {
                                var p = c[n].apply(c, a);
                                if (void 0 !== p) return p
                            } else o("no such method '" + n + "' for " + t + " instance");
                        else o("cannot call methods on " + t + " prior to initialization; attempted to call '" + n + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var i = e.data(this, t);
                    i ? (i.option(n), i._init()) : (i = new r(this, n), e.data(this, t, i))
                })
            }
        }
        if (e) {
            var o = "undefined" == typeof console ? t : function(e) {
                console.error(e)
            };
            return e.bridget = function(e, t) {
                r(t), n(e, t)
            }, e.bridget
        }
    }
    var i = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], r) : r("object" == typeof exports ? require("jquery") : e.jQuery)
}(window),
function(e) {
    function t(t) {
        var r = e.event;
        return r.target = r.target || r.srcElement || t, r
    }
    var r = document.documentElement,
        i = function() {};
    r.addEventListener ? i = function(e, t, r) {
        e.addEventListener(t, r, !1)
    } : r.attachEvent && (i = function(e, r, i) {
        e[r + i] = i.handleEvent ? function() {
            var r = t(e);
            i.handleEvent.call(i, r)
        } : function() {
            var r = t(e);
            i.call(e, r)
        }, e.attachEvent("on" + r, e[r + i])
    });
    var n = function() {};
    r.removeEventListener ? n = function(e, t, r) {
        e.removeEventListener(t, r, !1)
    } : r.detachEvent && (n = function(e, t, r) {
        e.detachEvent("on" + t, e[t + r]);
        try {
            delete e[t + r]
        } catch (i) {
            e[t + r] = void 0
        }
    });
    var o = {
        bind: i,
        unbind: n
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : "object" == typeof exports ? module.exports = o : e.eventie = o
}(window),
function() {
    "use strict";

    function e() {}

    function t(e, t) {
        for (var r = e.length; r--;)
            if (e[r].listener === t) return r;
        return -1
    }

    function r(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        n = this,
        o = n.EventEmitter;
    i.getListeners = function(e) {
        var t, r, i = this._getEvents();
        if (e instanceof RegExp) {
            t = {};
            for (r in i) i.hasOwnProperty(r) && e.test(r) && (t[r] = i[r])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function(e) {
        var t, r = [];
        for (t = 0; t < e.length; t += 1) r.push(e[t].listener);
        return r
    }, i.getListenersAsObject = function(e) {
        var t, r = this.getListeners(e);
        return r instanceof Array && (t = {}, t[e] = r), t || r
    }, i.addListener = function(e, r) {
        var i, n = this.getListenersAsObject(e),
            o = "object" == typeof r;
        for (i in n) n.hasOwnProperty(i) && -1 === t(n[i], r) && n[i].push(o ? r : {
            listener: r,
            once: !1
        });
        return this
    }, i.on = r("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = r("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this
    }, i.defineEvents = function(e) {
        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function(e, r) {
        var i, n, o = this.getListenersAsObject(e);
        for (n in o) o.hasOwnProperty(n) && (i = t(o[n], r), -1 !== i && o[n].splice(i, 1));
        return this
    }, i.off = r("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, r) {
        var i, n, o = e ? this.removeListener : this.addListener,
            a = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = r.length; i--;) o.call(this, t, r[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (n = t[i]) && ("function" == typeof n ? o.call(this, i, n) : a.call(this, i, n));
        return this
    }, i.removeEvent = function(e) {
        var t, r = typeof e,
            i = this._getEvents();
        if ("string" === r) delete i[e];
        else if (e instanceof RegExp)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = r("removeEvent"), i.emitEvent = function(e, t) {
        var r, i, n, o, a = this.getListenersAsObject(e);
        for (n in a)
            if (a.hasOwnProperty(n))
                for (i = a[n].length; i--;) r = a[n][i], r.once === !0 && this.removeListener(e, r.listener), o = r.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, r.listener);
        return this
    }, i.trigger = r("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return n.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : n.EventEmitter = e
}.call(this),
    function(e) {
        function t(e) {
            if (e) {
                if ("string" == typeof i[e]) return e;
                e = e.charAt(0).toUpperCase() + e.slice(1);
                for (var t, n = 0, o = r.length; o > n; n++)
                    if (t = r[n] + e, "string" == typeof i[t]) return t
            }
        }
        var r = "Webkit Moz ms Ms O".split(" "),
            i = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return t
        }) : "object" == typeof exports ? module.exports = t : e.getStyleProperty = t
    }(window),
    function(e, t) {
        function r(e) {
            var t = parseFloat(e),
                r = -1 === e.indexOf("%") && !isNaN(t);
            return r && t
        }

        function i() {}

        function n() {
            for (var e = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, t = 0, r = s.length; r > t; t++) {
                var i = s[t];
                e[i] = 0
            }
            return e
        }

        function o(t) {
            function i() {
                if (!d) {
                    d = !0;
                    var i = e.getComputedStyle;
                    if (u = function() {
                            var e = i ? function(e) {
                                return i(e, null)
                            } : function(e) {
                                return e.currentStyle
                            };
                            return function(t) {
                                var r = e(t);
                                return r || a("Style returned " + r + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), r
                            }
                        }(), c = t("boxSizing")) {
                        var n = document.createElement("div");
                        n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style[c] = "border-box";
                        var o = document.body || document.documentElement;
                        o.appendChild(n);
                        var s = u(n);
                        p = 200 === r(s.width), o.removeChild(n)
                    }
                }
            }

            function o(e) {
                if (i(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                    var t = u(e);
                    if ("none" === t.display) return n();
                    var o = {};
                    o.width = e.offsetWidth, o.height = e.offsetHeight;
                    for (var a = o.isBorderBox = !(!c || !t[c] || "border-box" !== t[c]), d = 0, f = s.length; f > d; d++) {
                        var y = s[d],
                            m = t[y];
                        m = l(e, m);
                        var h = parseFloat(m);
                        o[y] = isNaN(h) ? 0 : h
                    }
                    var v = o.paddingLeft + o.paddingRight,
                        g = o.paddingTop + o.paddingBottom,
                        T = o.marginLeft + o.marginRight,
                        b = o.marginTop + o.marginBottom,
                        P = o.borderLeftWidth + o.borderRightWidth,
                        Y = o.borderTopWidth + o.borderBottomWidth,
                        w = a && p,
                        j = r(t.width);
                    j !== !1 && (o.width = j + (w ? 0 : v + P));
                    var S = r(t.height);
                    return S !== !1 && (o.height = S + (w ? 0 : g + Y)), o.innerWidth = o.width - (v + P), o.innerHeight = o.height - (g + Y), o.outerWidth = o.width + T, o.outerHeight = o.height + b, o
                }
            }

            function l(t, r) {
                if (e.getComputedStyle || -1 === r.indexOf("%")) return r;
                var i = t.style,
                    n = i.left,
                    o = t.runtimeStyle,
                    a = o && o.left;
                return a && (o.left = t.currentStyle.left), i.left = r, r = i.pixelLeft, i.left = n, a && (o.left = a), r
            }
            var u, c, p, d = !1;
            return o
        }
        var a = "undefined" == typeof console ? i : function(e) {
                console.error(e)
            },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : e.getSize = o(e.getStyleProperty)
    }(window),
    function(e) {
        function t(e) {
            "function" == typeof e && (t.isReady ? e() : a.push(e))
        }

        function r(e) {
            var r = "readystatechange" === e.type && "complete" !== o.readyState;
            t.isReady || r || i()
        }

        function i() {
            t.isReady = !0;
            for (var e = 0, r = a.length; r > e; e++) {
                var i = a[e];
                i()
            }
        }

        function n(n) {
            return "complete" === o.readyState ? i() : (n.bind(o, "DOMContentLoaded", r), n.bind(o, "readystatechange", r), n.bind(e, "load", r)), t
        }
        var o = e.document,
            a = [];
        t.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], n) : "object" == typeof exports ? module.exports = n(require("eventie")) : e.docReady = n(e.eventie)
    }(window),
    function(e) {
        "use strict";

        function t(e, t) {
            return e[a](t)
        }

        function r(e) {
            if (!e.parentNode) {
                var t = document.createDocumentFragment();
                t.appendChild(e)
            }
        }

        function i(e, t) {
            r(e);
            for (var i = e.parentNode.querySelectorAll(t), n = 0, o = i.length; o > n; n++)
                if (i[n] === e) return !0;
            return !1
        }

        function n(e, i) {
            return r(e), t(e, i)
        }
        var o, a = function() {
            if (e.matches) return "matches";
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], r = 0, i = t.length; i > r; r++) {
                var n = t[r],
                    o = n + "MatchesSelector";
                if (e[o]) return o
            }
        }();
        if (a) {
            var s = document.createElement("div"),
                l = t(s, "div");
            o = l ? t : n
        } else o = i;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return o
        }) : "object" == typeof exports ? module.exports = o : window.matchesSelector = o
    }(Element.prototype),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(r, i) {
            return t(e, r, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("doc-ready"), require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.docReady, e.matchesSelector)
    }(window, function(e, t, r) {
        var i = {};
        i.extend = function(e, t) {
            for (var r in t) e[r] = t[r];
            return e
        }, i.modulo = function(e, t) {
            return (e % t + t) % t
        };
        var n = Object.prototype.toString;
        i.isArray = function(e) {
            return "[object Array]" == n.call(e)
        }, i.makeArray = function(e) {
            var t = [];
            if (i.isArray(e)) t = e;
            else if (e && "number" == typeof e.length)
                for (var r = 0, n = e.length; n > r; r++) t.push(e[r]);
            else t.push(e);
            return t
        }, i.indexOf = Array.prototype.indexOf ? function(e, t) {
            return e.indexOf(t)
        } : function(e, t) {
            for (var r = 0, i = e.length; i > r; r++)
                if (e[r] === t) return r;
            return -1
        }, i.removeFrom = function(e, t) {
            var r = i.indexOf(e, t); - 1 != r && e.splice(r, 1)
        }, i.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(e) {
            return e instanceof HTMLElement
        } : function(e) {
            return e && "object" == typeof e && 1 == e.nodeType && "string" == typeof e.nodeName
        }, i.setText = function() {
            function e(e, r) {
                t = t || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), e[t] = r
            }
            var t;
            return e
        }(), i.getParent = function(e, t) {
            for (; e != document.body;)
                if (e = e.parentNode, r(e, t)) return e
        }, i.getQueryElement = function(e) {
            return "string" == typeof e ? document.querySelector(e) : e
        }, i.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, i.filterFindElements = function(e, t) {
            e = i.makeArray(e);
            for (var n = [], o = 0, a = e.length; a > o; o++) {
                var s = e[o];
                if (i.isElement(s))
                    if (t) {
                        r(s, t) && n.push(s);
                        for (var l = s.querySelectorAll(t), u = 0, c = l.length; c > u; u++) n.push(l[u])
                    } else n.push(s)
            }
            return n
        }, i.debounceMethod = function(e, t, r) {
            var i = e.prototype[t],
                n = t + "Timeout";
            e.prototype[t] = function() {
                var e = this[n];
                e && clearTimeout(e);
                var t = arguments,
                    o = this;
                this[n] = setTimeout(function() {
                    i.apply(o, t), delete o[n]
                }, r || 100)
            }
        }, i.toDashed = function(e) {
            return e.replace(/(.)([A-Z])/g, function(e, t, r) {
                return t + "-" + r
            }).toLowerCase()
        };
        var o = e.console;
        return i.htmlInit = function(r, n) {
            t(function() {
                for (var t = i.toDashed(n), a = document.querySelectorAll(".js-" + t), s = "data-" + t + "-options", l = 0, u = a.length; u > l; l++) {
                    var c, p = a[l],
                        d = p.getAttribute(s);
                    try {
                        c = d && JSON.parse(d)
                    } catch (f) {
                        o && o.error("Error parsing " + s + " on " + p.nodeName.toLowerCase() + (p.id ? "#" + p.id : "") + ": " + f);
                        continue
                    }
                    var y = new r(p, c),
                        m = e.jQuery;
                    m && m.data(p, n, y)
                }
            })
        }, i
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(r, i, n, o) {
            return t(e, r, i, n, o)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (e.Outlayer = {}, e.Outlayer.Item = t(e, e.EventEmitter, e.getSize, e.getStyleProperty, e.fizzyUIUtils))
    }(window, function(e, t, r, i, n) {
        "use strict";

        function o(e) {
            for (var t in e) return !1;
            return t = null, !0
        }

        function a(e, t) {
            e && (this.element = e, this.layout = t, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function s(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }
        var l = e.getComputedStyle,
            u = l ? function(e) {
                return l(e, null)
            } : function(e) {
                return e.currentStyle
            },
            c = i("transition"),
            p = i("transform"),
            d = c && p,
            f = !!i("perspective"),
            y = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[c],
            m = ["transform", "transition", "transitionDuration", "transitionProperty"],
            h = function() {
                for (var e = {}, t = 0, r = m.length; r > t; t++) {
                    var n = m[t],
                        o = i(n);
                    o && o !== n && (e[n] = o)
                }
                return e
            }();
        n.extend(a.prototype, t.prototype), a.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, a.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, a.prototype.getSize = function() {
            this.size = r(this.element)
        }, a.prototype.css = function(e) {
            var t = this.element.style;
            for (var r in e) {
                var i = h[r] || r;
                t[i] = e[r]
            }
        }, a.prototype.getPosition = function() {
            var e = u(this.element),
                t = this.layout.options,
                r = t.isOriginLeft,
                i = t.isOriginTop,
                n = e[r ? "left" : "right"],
                o = e[i ? "top" : "bottom"],
                a = this.layout.size,
                s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * a.width : parseInt(n, 10),
                l = -1 != o.indexOf("%") ? parseFloat(o) / 100 * a.height : parseInt(o, 10);
            s = isNaN(s) ? 0 : s, l = isNaN(l) ? 0 : l, s -= r ? a.paddingLeft : a.paddingRight, l -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = l
        }, a.prototype.layoutPosition = function() {
            var e = this.layout.size,
                t = this.layout.options,
                r = {},
                i = t.isOriginLeft ? "paddingLeft" : "paddingRight",
                n = t.isOriginLeft ? "left" : "right",
                o = t.isOriginLeft ? "right" : "left",
                a = this.position.x + e[i];
            r[n] = this.getXValue(a), r[o] = "";
            var s = t.isOriginTop ? "paddingTop" : "paddingBottom",
                l = t.isOriginTop ? "top" : "bottom",
                u = t.isOriginTop ? "bottom" : "top",
                c = this.position.y + e[s];
            r[l] = this.getYValue(c), r[u] = "", this.css(r), this.emitEvent("layout", [this])
        }, a.prototype.getXValue = function(e) {
            var t = this.layout.options;
            return t.percentPosition && !t.isHorizontal ? e / this.layout.size.width * 100 + "%" : e + "px"
        }, a.prototype.getYValue = function(e) {
            var t = this.layout.options;
            return t.percentPosition && t.isHorizontal ? e / this.layout.size.height * 100 + "%" : e + "px"
        }, a.prototype._transitionTo = function(e, t) {
            this.getPosition();
            var r = this.position.x,
                i = this.position.y,
                n = parseInt(e, 10),
                o = parseInt(t, 10),
                a = n === this.position.x && o === this.position.y;
            if (this.setPosition(e, t), a && !this.isTransitioning) return void this.layoutPosition();
            var s = e - r,
                l = t - i,
                u = {};
            u.transform = this.getTranslate(s, l), this.transition({
                to: u,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, a.prototype.getTranslate = function(e, t) {
            var r = this.layout.options;
            return e = r.isOriginLeft ? e : -e, t = r.isOriginTop ? t : -t, f ? "translate3d(" + e + "px, " + t + "px, 0)" : "translate(" + e + "px, " + t + "px)"
        }, a.prototype.goTo = function(e, t) {
            this.setPosition(e, t), this.layoutPosition()
        }, a.prototype.moveTo = d ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(e, t) {
            this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
        }, a.prototype._nonTransition = function(e) {
            this.css(e.to), e.isCleaning && this._removeStyles(e.to);
            for (var t in e.onTransitionEnd) e.onTransitionEnd[t].call(this)
        }, a.prototype._transition = function(e) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(e);
            var t = this._transn;
            for (var r in e.onTransitionEnd) t.onEnd[r] = e.onTransitionEnd[r];
            for (r in e.to) t.ingProperties[r] = !0, e.isCleaning && (t.clean[r] = !0);
            if (e.from) {
                this.css(e.from);
                var i = this.element.offsetHeight;
                i = null
            }
            this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
        };
        var v = "opacity," + s(h.transform || "transform");
        a.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: v,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(y, this, !1))
        }, a.prototype.transition = a.prototype[c ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(e) {
            this.ontransitionend(e)
        }, a.prototype.onotransitionend = function(e) {
            this.ontransitionend(e)
        };
        var g = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        a.prototype.ontransitionend = function(e) {
            if (e.target === this.element) {
                var t = this._transn,
                    r = g[e.propertyName] || e.propertyName;
                if (delete t.ingProperties[r], o(t.ingProperties) && this.disableTransition(), r in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[r]), r in t.onEnd) {
                    var i = t.onEnd[r];
                    i.call(this), delete t.onEnd[r]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, a.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(y, this, !1), this.isTransitioning = !1
        }, a.prototype._removeStyles = function(e) {
            var t = {};
            for (var r in e) t[r] = "";
            this.css(t)
        };
        var T = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return a.prototype.removeTransitionStyles = function() {
            this.css(T)
        }, a.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, a.prototype.remove = function() {
            if (!c || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var e = this;
            this.once("transitionEnd", function() {
                e.removeElem()
            }), this.hide()
        }, a.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var e = this.layout.options,
                t = {},
                r = this.getHideRevealTransitionEndProperty("visibleStyle");
            t[r] = this.onRevealTransitionEnd, this.transition({
                from: e.hiddenStyle,
                to: e.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: t
            })
        }, a.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, a.prototype.getHideRevealTransitionEndProperty = function(e) {
            var t = this.layout.options[e];
            if (t.opacity) return "opacity";
            for (var r in t) return r
        }, a.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var e = this.layout.options,
                t = {},
                r = this.getHideRevealTransitionEndProperty("hiddenStyle");
            t[r] = this.onHideTransitionEnd, this.transition({
                from: e.visibleStyle,
                to: e.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: t
            })
        }, a.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, a.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, a
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(r, i, n, o, a) {
            return t(e, r, i, n, o, a)
        }) : "object" == typeof exports ? module.exports = t(e, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.eventie, e.EventEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
    }(window, function(e, t, r, i, n, o) {
        "use strict";

        function a(e, t) {
            var r = n.getQueryElement(e);
            if (!r) return void(s && s.error("Bad element for " + this.constructor.namespace + ": " + (r || e)));
            this.element = r, l && (this.$element = l(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(t);
            var i = ++c;
            this.element.outlayerGUID = i, p[i] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var s = e.console,
            l = e.jQuery,
            u = function() {},
            c = 0,
            p = {};
        return a.namespace = "outlayer", a.Item = o, a.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, n.extend(a.prototype, r.prototype), a.prototype.option = function(e) {
            n.extend(this.options, e)
        }, a.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, a.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, a.prototype._itemize = function(e) {
            for (var t = this._filterFindItemElements(e), r = this.constructor.Item, i = [], n = 0, o = t.length; o > n; n++) {
                var a = t[n],
                    s = new r(a, this);
                i.push(s)
            }
            return i
        }, a.prototype._filterFindItemElements = function(e) {
            return n.filterFindElements(e, this.options.itemSelector)
        }, a.prototype.getItemElements = function() {
            for (var e = [], t = 0, r = this.items.length; r > t; t++) e.push(this.items[t].element);
            return e
        }, a.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, a.prototype._init = a.prototype.layout, a.prototype._resetLayout = function() {
            this.getSize()
        }, a.prototype.getSize = function() {
            this.size = i(this.element)
        }, a.prototype._getMeasurement = function(e, t) {
            var r, o = this.options[e];
            o ? ("string" == typeof o ? r = this.element.querySelector(o) : n.isElement(o) && (r = o), this[e] = r ? i(r)[t] : o) : this[e] = 0
        }, a.prototype.layoutItems = function(e, t) {
            e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
        }, a.prototype._getItemsForLayout = function(e) {
            for (var t = [], r = 0, i = e.length; i > r; r++) {
                var n = e[r];
                n.isIgnored || t.push(n)
            }
            return t
        }, a.prototype._layoutItems = function(e, t) {
            if (this._emitCompleteOnItems("layout", e), e && e.length) {
                for (var r = [], i = 0, n = e.length; n > i; i++) {
                    var o = e[i],
                        a = this._getItemLayoutPosition(o);
                    a.item = o, a.isInstant = t || o.isLayoutInstant, r.push(a)
                }
                this._processLayoutQueue(r)
            }
        }, a.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, a.prototype._processLayoutQueue = function(e) {
            for (var t = 0, r = e.length; r > t; t++) {
                var i = e[t];
                this._positionItem(i.item, i.x, i.y, i.isInstant)
            }
        }, a.prototype._positionItem = function(e, t, r, i) {
            i ? e.goTo(t, r) : e.moveTo(t, r)
        }, a.prototype._postLayout = function() {
            this.resizeContainer()
        }, a.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        }, a.prototype._getContainerSize = u, a.prototype._setContainerMeasure = function(e, t) {
            if (void 0 !== e) {
                var r = this.size;
                r.isBorderBox && (e += t ? r.paddingLeft + r.paddingRight + r.borderLeftWidth + r.borderRightWidth : r.paddingBottom + r.paddingTop + r.borderTopWidth + r.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
            }
        }, a.prototype._emitCompleteOnItems = function(e, t) {
            function r() {
                n.dispatchEvent(e + "Complete", null, [t])
            }

            function i() {
                a++, a === o && r()
            }
            var n = this,
                o = t.length;
            if (!t || !o) return void r();
            for (var a = 0, s = 0, l = t.length; l > s; s++) {
                var u = t[s];
                u.once(e, i)
            }
        }, a.prototype.dispatchEvent = function(e, t, r) {
            var i = t ? [t].concat(r) : r;
            if (this.emitEvent(e, i), l)
                if (this.$element = this.$element || l(this.element), t) {
                    var n = l.Event(t);
                    n.type = e, this.$element.trigger(n, r)
                } else this.$element.trigger(e, r)
        }, a.prototype.ignore = function(e) {
            var t = this.getItem(e);
            t && (t.isIgnored = !0)
        }, a.prototype.unignore = function(e) {
            var t = this.getItem(e);
            t && delete t.isIgnored
        }, a.prototype.stamp = function(e) {
            if (e = this._find(e)) {
                this.stamps = this.stamps.concat(e);
                for (var t = 0, r = e.length; r > t; t++) {
                    var i = e[t];
                    this.ignore(i)
                }
            }
        }, a.prototype.unstamp = function(e) {
            if (e = this._find(e))
                for (var t = 0, r = e.length; r > t; t++) {
                    var i = e[t];
                    n.removeFrom(this.stamps, i), this.unignore(i)
                }
        }, a.prototype._find = function(e) {
            return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = n.makeArray(e)) : void 0
        }, a.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var e = 0, t = this.stamps.length; t > e; e++) {
                    var r = this.stamps[e];
                    this._manageStamp(r)
                }
            }
        }, a.prototype._getBoundingRect = function() {
            var e = this.element.getBoundingClientRect(),
                t = this.size;
            this._boundingRect = {
                left: e.left + t.paddingLeft + t.borderLeftWidth,
                top: e.top + t.paddingTop + t.borderTopWidth,
                right: e.right - (t.paddingRight + t.borderRightWidth),
                bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
            }
        }, a.prototype._manageStamp = u, a.prototype._getElementOffset = function(e) {
            var t = e.getBoundingClientRect(),
                r = this._boundingRect,
                n = i(e),
                o = {
                    left: t.left - r.left - n.marginLeft,
                    top: t.top - r.top - n.marginTop,
                    right: r.right - t.right - n.marginRight,
                    bottom: r.bottom - t.bottom - n.marginBottom
                };
            return o
        }, a.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, a.prototype.bindResize = function() {
            this.isResizeBound || (t.bind(e, "resize", this), this.isResizeBound = !0)
        }, a.prototype.unbindResize = function() {
            this.isResizeBound && t.unbind(e, "resize", this), this.isResizeBound = !1
        }, a.prototype.onresize = function() {
            function e() {
                t.resize(), delete t.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var t = this;
            this.resizeTimeout = setTimeout(e, 100)
        }, a.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, a.prototype.needsResizeLayout = function() {
            var e = i(this.element),
                t = this.size && e;
            return t && e.innerWidth !== this.size.innerWidth
        }, a.prototype.addItems = function(e) {
            var t = this._itemize(e);
            return t.length && (this.items = this.items.concat(t)), t
        }, a.prototype.appended = function(e) {
            var t = this.addItems(e);
            t.length && (this.layoutItems(t, !0), this.reveal(t))
        }, a.prototype.prepended = function(e) {
            var t = this._itemize(e);
            if (t.length) {
                var r = this.items.slice(0);
                this.items = t.concat(r), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(r)
            }
        }, a.prototype.reveal = function(e) {
            this._emitCompleteOnItems("reveal", e);
            for (var t = e && e.length, r = 0; t && t > r; r++) {
                var i = e[r];
                i.reveal()
            }
        }, a.prototype.hide = function(e) {
            this._emitCompleteOnItems("hide", e);
            for (var t = e && e.length, r = 0; t && t > r; r++) {
                var i = e[r];
                i.hide()
            }
        }, a.prototype.revealItemElements = function(e) {
            var t = this.getItems(e);
            this.reveal(t)
        }, a.prototype.hideItemElements = function(e) {
            var t = this.getItems(e);
            this.hide(t)
        }, a.prototype.getItem = function(e) {
            for (var t = 0, r = this.items.length; r > t; t++) {
                var i = this.items[t];
                if (i.element === e) return i
            }
        }, a.prototype.getItems = function(e) {
            e = n.makeArray(e);
            for (var t = [], r = 0, i = e.length; i > r; r++) {
                var o = e[r],
                    a = this.getItem(o);
                a && t.push(a)
            }
            return t
        }, a.prototype.remove = function(e) {
            var t = this.getItems(e);
            if (this._emitCompleteOnItems("remove", t), t && t.length)
                for (var r = 0, i = t.length; i > r; r++) {
                    var o = t[r];
                    o.remove(), n.removeFrom(this.items, o)
                }
        }, a.prototype.destroy = function() {
            var e = this.element.style;
            e.height = "", e.position = "", e.width = "";
            for (var t = 0, r = this.items.length; r > t; t++) {
                var i = this.items[t];
                i.destroy()
            }
            this.unbindResize();
            var n = this.element.outlayerGUID;
            delete p[n], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, a.data = function(e) {
            e = n.getQueryElement(e);
            var t = e && e.outlayerGUID;
            return t && p[t]
        }, a.create = function(e, t) {
            function r() {
                a.apply(this, arguments)
            }
            return Object.create ? r.prototype = Object.create(a.prototype) : n.extend(r.prototype, a.prototype), r.prototype.constructor = r, r.defaults = n.extend({}, a.defaults), n.extend(r.defaults, t), r.prototype.settings = {}, r.namespace = e, r.data = a.data, r.Item = function() {
                o.apply(this, arguments)
            }, r.Item.prototype = new o, n.htmlInit(r, e), l && l.bridget && l.bridget(e, r), r
        }, a.Item = o, a
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], t) : "object" == typeof exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer))
    }(window, function(e) {
        "use strict";

        function t() {
            e.Item.apply(this, arguments)
        }
        t.prototype = new e.Item, t.prototype._create = function() {
            this.id = this.layout.itemGUID++, e.Item.prototype._create.call(this), this.sortData = {}
        }, t.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var e = this.layout.options.getSortData,
                    t = this.layout._sorters;
                for (var r in e) {
                    var i = t[r];
                    this.sortData[r] = i(this.element, this)
                }
            }
        };
        var r = t.prototype.destroy;
        return t.prototype.destroy = function() {
            r.apply(this, arguments), this.css({
                display: ""
            })
        }, t
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
    }(window, function(e, t) {
        "use strict";

        function r(e) {
            this.isotope = e, e && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
        }
        return function() {
            function e(e) {
                return function() {
                    return t.prototype[e].apply(this.isotope, arguments)
                }
            }
            for (var i = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, o = i.length; o > n; n++) {
                var a = i[n];
                r.prototype[a] = e(a)
            }
        }(), r.prototype.needsVerticalResizeLayout = function() {
            var t = e(this.isotope.element),
                r = this.isotope.size && t;
            return r && t.innerHeight != this.isotope.size.innerHeight
        }, r.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, r.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, r.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, r.prototype.getSegmentSize = function(e, t) {
            var r = e + t,
                i = "outer" + t;
            if (this._getMeasurement(r, i), !this[r]) {
                var n = this.getFirstItemSize();
                this[r] = n && n[i] || this.isotope.size["inner" + t]
            }
        }, r.prototype.getFirstItemSize = function() {
            var t = this.isotope.filteredItems[0];
            return t && t.element && e(t.element)
        }, r.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, r.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, r.modes = {}, r.create = function(e, t) {
            function i() {
                r.apply(this, arguments)
            }
            return i.prototype = new r, t && (i.options = t), i.prototype.namespace = e, r.modes[e] = i, i
        }, r
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], t) : "object" == typeof exports ? module.exports = t(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : e.Masonry = t(e.Outlayer, e.getSize, e.fizzyUIUtils)
    }(window, function(e, t, r) {
        var i = e.create("masonry");
        return i.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var e = this.cols;
            for (this.colYs = []; e--;) this.colYs.push(0);
            this.maxY = 0
        }, i.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var e = this.items[0],
                    r = e && e.element;
                this.columnWidth = r && t(r).outerWidth || this.containerWidth
            }
            var i = this.columnWidth += this.gutter,
                n = this.containerWidth + this.gutter,
                o = n / i,
                a = i - n % i,
                s = a && 1 > a ? "round" : "floor";
            o = Math[s](o), this.cols = Math.max(o, 1)
        }, i.prototype.getContainerWidth = function() {
            var e = this.options.isFitWidth ? this.element.parentNode : this.element,
                r = t(e);
            this.containerWidth = r && r.innerWidth
        }, i.prototype._getItemLayoutPosition = function(e) {
            e.getSize();
            var t = e.size.outerWidth % this.columnWidth,
                i = t && 1 > t ? "round" : "ceil",
                n = Math[i](e.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var o = this._getColGroup(n), a = Math.min.apply(Math, o), s = r.indexOf(o, a), l = {
                    x: this.columnWidth * s,
                    y: a
                }, u = a + e.size.outerHeight, c = this.cols + 1 - o.length, p = 0; c > p; p++) this.colYs[s + p] = u;
            return l
        }, i.prototype._getColGroup = function(e) {
            if (2 > e) return this.colYs;
            for (var t = [], r = this.cols + 1 - e, i = 0; r > i; i++) {
                var n = this.colYs.slice(i, i + e);
                t[i] = Math.max.apply(Math, n)
            }
            return t
        }, i.prototype._manageStamp = function(e) {
            var r = t(e),
                i = this._getElementOffset(e),
                n = this.options.isOriginLeft ? i.left : i.right,
                o = n + r.outerWidth,
                a = Math.floor(n / this.columnWidth);
            a = Math.max(0, a);
            var s = Math.floor(o / this.columnWidth);
            s -= o % this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);
            for (var l = (this.options.isOriginTop ? i.top : i.bottom) + r.outerHeight, u = a; s >= u; u++) this.colYs[u] = Math.max(l, this.colYs[u])
        }, i.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var e = {
                height: this.maxY
            };
            return this.options.isFitWidth && (e.width = this._getContainerFitWidth()), e
        }, i.prototype._getContainerFitWidth = function() {
            for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
            return (this.cols - e) * this.columnWidth - this.gutter
        }, i.prototype.needsResizeLayout = function() {
            var e = this.containerWidth;
            return this.getContainerWidth(), e !== this.containerWidth
        }, i
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry)
    }(window, function(e, t) {
        "use strict";

        function r(e, t) {
            for (var r in t) e[r] = t[r];
            return e
        }
        var i = e.create("masonry"),
            n = i.prototype._getElementOffset,
            o = i.prototype.layout,
            a = i.prototype._getMeasurement;
        r(i.prototype, t.prototype), i.prototype._getElementOffset = n, i.prototype.layout = o, i.prototype._getMeasurement = a;
        var s = i.prototype.measureColumns;
        i.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, s.call(this)
        };
        var l = i.prototype._manageStamp;
        return i.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments)
        }, i
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
    }(window, function(e) {
        "use strict";
        var t = e.create("fitRows");
        return t.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, t.prototype._getItemLayoutPosition = function(e) {
            e.getSize();
            var t = e.size.outerWidth + this.gutter,
                r = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && t + this.x > r && (this.x = 0, this.y = this.maxY);
            var i = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += t, i
        }, t.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, t
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
    }(window, function(e) {
        "use strict";
        var t = e.create("vertical", {
            horizontalAlignment: 0
        });
        return t.prototype._resetLayout = function() {
            this.y = 0
        }, t.prototype._getItemLayoutPosition = function(e) {
            e.getSize();
            var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment,
                r = this.y;
            return this.y += e.size.outerHeight, {
                x: t,
                y: r
            }
        }, t.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, t
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(r, i, n, o, a, s) {
            return t(e, r, i, n, o, a, s)
        }) : "object" == typeof exports ? module.exports = t(e, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : e.Isotope = t(e, e.Outlayer, e.getSize, e.matchesSelector, e.fizzyUIUtils, e.Isotope.Item, e.Isotope.LayoutMode)
    }(window, function(e, t, r, i, n, o, a) {
        function s(e, t) {
            return function(r, i) {
                for (var n = 0, o = e.length; o > n; n++) {
                    var a = e[n],
                        s = r.sortData[a],
                        l = i.sortData[a];
                    if (s > l || l > s) {
                        var u = void 0 !== t[a] ? t[a] : t,
                            c = u ? 1 : -1;
                        return (s > l ? 1 : -1) * c
                    }
                }
                return 0
            }
        }
        var l = e.jQuery,
            u = String.prototype.trim ? function(e) {
                return e.trim()
            } : function(e) {
                return e.replace(/^\s+|\s+$/g, "")
            },
            c = document.documentElement,
            p = c.textContent ? function(e) {
                return e.textContent
            } : function(e) {
                return e.innerText
            },
            d = t.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        d.Item = o, d.LayoutMode = a, d.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var e in a.modes) this._initLayoutMode(e)
        }, d.prototype.reloadItems = function() {
            this.itemGUID = 0, t.prototype.reloadItems.call(this)
        }, d.prototype._itemize = function() {
            for (var e = t.prototype._itemize.apply(this, arguments), r = 0, i = e.length; i > r; r++) {
                var n = e[r];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(e), e
        }, d.prototype._initLayoutMode = function(e) {
            var t = a.modes[e],
                r = this.options[e] || {};
            this.options[e] = t.options ? n.extend(t.options, r) : r, this.modes[e] = new t(this)
        }, d.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, d.prototype._layout = function() {
            var e = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), this._isLayoutInited = !0
        }, d.prototype.arrange = function(e) {
            function t() {
                i.reveal(r.needReveal), i.hide(r.needHide)
            }
            this.option(e), this._getIsInstant();
            var r = this._filter(this.items);
            this.filteredItems = r.matches;
            var i = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(t) : t(), this._sort(), this._layout()
        }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function() {
            var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = e, e
        }, d.prototype._bindArrangeComplete = function() {
            function e() {
                t && r && i && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
            }
            var t, r, i, n = this;
            this.once("layoutComplete", function() {
                t = !0, e()
            }), this.once("hideComplete", function() {
                r = !0, e()
            }), this.once("revealComplete", function() {
                i = !0, e()
            })
        }, d.prototype._filter = function(e) {
            var t = this.options.filter;
            t = t || "*";
            for (var r = [], i = [], n = [], o = this._getFilterTest(t), a = 0, s = e.length; s > a; a++) {
                var l = e[a];
                if (!l.isIgnored) {
                    var u = o(l);
                    u && r.push(l), u && l.isHidden ? i.push(l) : u || l.isHidden || n.push(l)
                }
            }
            return {
                matches: r,
                needReveal: i,
                needHide: n
            }
        }, d.prototype._getFilterTest = function(e) {
            return l && this.options.isJQueryFiltering ? function(t) {
                return l(t.element).is(e)
            } : "function" == typeof e ? function(t) {
                return e(t.element)
            } : function(t) {
                return i(t.element, e)
            }
        }, d.prototype.updateSortData = function(e) {
            var t;
            e ? (e = n.makeArray(e), t = this.getItems(e)) : t = this.items, this._getSorters(), this._updateItemsSortData(t)
        }, d.prototype._getSorters = function() {
            var e = this.options.getSortData;
            for (var t in e) {
                var r = e[t];
                this._sorters[t] = f(r)
            }
        }, d.prototype._updateItemsSortData = function(e) {
            for (var t = e && e.length, r = 0; t && t > r; r++) {
                var i = e[r];
                i.updateSortData()
            }
        };
        var f = function() {
            function e(e) {
                if ("string" != typeof e) return e;
                var r = u(e).split(" "),
                    i = r[0],
                    n = i.match(/^\[(.+)\]$/),
                    o = n && n[1],
                    a = t(o, i),
                    s = d.sortDataParsers[r[1]];
                return e = s ? function(e) {
                    return e && s(a(e))
                } : function(e) {
                    return e && a(e)
                }
            }

            function t(e, t) {
                var r;
                return r = e ? function(t) {
                    return t.getAttribute(e)
                } : function(e) {
                    var r = e.querySelector(t);
                    return r && p(r)
                }
            }
            return e
        }();
        d.sortDataParsers = {
            parseInt: function(e) {
                return parseInt(e, 10)
            },
            parseFloat: function(e) {
                return parseFloat(e)
            }
        }, d.prototype._sort = function() {
            var e = this.options.sortBy;
            if (e) {
                var t = [].concat.apply(e, this.sortHistory),
                    r = s(t, this.options.sortAscending);
                this.filteredItems.sort(r), e != this.sortHistory[0] && this.sortHistory.unshift(e)
            }
        }, d.prototype._mode = function() {
            var e = this.options.layoutMode,
                t = this.modes[e];
            if (!t) throw new Error("No layout mode: " + e);
            return t.options = this.options[e], t
        }, d.prototype._resetLayout = function() {
            t.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, d.prototype._getItemLayoutPosition = function(e) {
            return this._mode()._getItemLayoutPosition(e)
        }, d.prototype._manageStamp = function(e) {
            this._mode()._manageStamp(e)
        }, d.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, d.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, d.prototype.appended = function(e) {
            var t = this.addItems(e);
            if (t.length) {
                var r = this._filterRevealAdded(t);
                this.filteredItems = this.filteredItems.concat(r)
            }
        }, d.prototype.prepended = function(e) {
            var t = this._itemize(e);
            if (t.length) {
                this._resetLayout(), this._manageStamps();
                var r = this._filterRevealAdded(t);
                this.layoutItems(this.filteredItems), this.filteredItems = r.concat(this.filteredItems), this.items = t.concat(this.items)
            }
        }, d.prototype._filterRevealAdded = function(e) {
            var t = this._filter(e);
            return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
        }, d.prototype.insert = function(e) {
            var t = this.addItems(e);
            if (t.length) {
                var r, i, n = t.length;
                for (r = 0; n > r; r++) i = t[r], this.element.appendChild(i.element);
                var o = this._filter(t).matches;
                for (r = 0; n > r; r++) t[r].isLayoutInstant = !0;
                for (this.arrange(), r = 0; n > r; r++) delete t[r].isLayoutInstant;
                this.reveal(o)
            }
        };
        var y = d.prototype.remove;
        return d.prototype.remove = function(e) {
            e = n.makeArray(e);
            var t = this.getItems(e);
            y.call(this, e);
            var r = t && t.length;
            if (r)
                for (var i = 0; r > i; i++) {
                    var o = t[i];
                    n.removeFrom(this.filteredItems, o)
                }
        }, d.prototype.shuffle = function() {
            for (var e = 0, t = this.items.length; t > e; e++) {
                var r = this.items[e];
                r.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, d.prototype._noTransition = function(e) {
            var t = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var r = e.call(this);
            return this.options.transitionDuration = t, r
        }, d.prototype.getFilteredItemElements = function() {
            for (var e = [], t = 0, r = this.filteredItems.length; r > t; t++) e.push(this.filteredItems[t].element);
            return e
        }, d
    }), ! function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(e) {
        var t, r, i, n, o, a, s = "Close",
            l = "BeforeClose",
            u = "AfterClose",
            c = "BeforeAppend",
            p = "MarkupParse",
            d = "Open",
            f = "Change",
            y = "mfp",
            m = "." + y,
            h = "mfp-ready",
            v = "mfp-removing",
            g = "mfp-prevent-close",
            T = function() {},
            b = !!window.jQuery,
            P = e(window),
            Y = function(e, r) {
                t.ev.on(y + e + m, r)
            },
            w = function(t, r, i, n) {
                var o = document.createElement("div");
                return o.className = "mfp-" + t, i && (o.innerHTML = i), n ? r && r.appendChild(o) : (o = e(o), r && o.appendTo(r)), o
            },
            j = function(r, i) {
                t.ev.triggerHandler(y + r, i), t.st.callbacks && (r = r.charAt(0).toLowerCase() + r.slice(1), t.st.callbacks[r] && t.st.callbacks[r].apply(t, e.isArray(i) ? i : [i]))
            },
            S = function(r) {
                return r === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), a = r), t.currTemplate.closeBtn
            },
            x = function() {
                e.magnificPopup.instance || (t = new T, t.init(), e.magnificPopup.instance = t)
            },
            Q = function() {
                var e = document.createElement("p").style,
                    t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition) return !0;
                for (; t.length;)
                    if (t.pop() + "Transition" in e) return !0;
                return !1
            };
        T.prototype = {
            constructor: T,
            init: function() {
                var r = navigator.appVersion;
                t.isIE7 = -1 !== r.indexOf("MSIE 7."), t.isIE8 = -1 !== r.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(r), t.isIOS = /iphone|ipad|ipod/gi.test(r), t.supportsTransition = Q(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {}
            },
            open: function(r) {
                var n;
                if (r.isObj === !1) {
                    t.items = r.items.toArray(), t.index = 0;
                    var a, s = r.items;
                    for (n = 0; n < s.length; n++)
                        if (a = s[n], a.parsed && (a = a.el[0]), a === r.el[0]) {
                            t.index = n;
                            break
                        }
                } else t.items = e.isArray(r.items) ? r.items : [r.items], t.index = r.index || 0;
                if (t.isOpen) return void t.updateItemHTML();
                t.types = [], o = "", r.mainEl && r.mainEl.length ? t.ev = r.mainEl.eq(0) : t.ev = i, r.key ? (t.popupsCache[r.key] || (t.popupsCache[r.key] = {}), t.currTemplate = t.popupsCache[r.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, r), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = w("bg").on("click" + m, function() {
                    t.close()
                }), t.wrap = w("wrap").attr("tabindex", -1).on("click" + m, function(e) {
                    t._checkIfClose(e.target) && t.close()
                }), t.container = w("container", t.wrap)), t.contentContainer = w("content"), t.st.preloader && (t.preloader = w("preloader", t.container, t.st.tLoading));
                var l = e.magnificPopup.modules;
                for (n = 0; n < l.length; n++) {
                    var u = l[n];
                    u = u.charAt(0).toUpperCase() + u.slice(1), t["init" + u].call(t)
                }
                j("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (Y(p, function(e, t, r, i) {
                    r.close_replaceWith = S(i.type)
                }), o += " mfp-close-btn-in") : t.wrap.append(S())), t.st.alignTop && (o += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                    overflow: t.st.overflowY,
                    overflowX: "hidden",
                    overflowY: t.st.overflowY
                }) : t.wrap.css({
                    top: P.scrollTop(),
                    position: "absolute"
                }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                    height: i.height(),
                    position: "absolute"
                }), t.st.enableEscapeKey && i.on("keyup" + m, function(e) {
                    27 === e.keyCode && t.close()
                }), P.on("resize" + m, function() {
                    t.updateSize()
                }), t.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && t.wrap.addClass(o);
                var c = t.wH = P.height(),
                    f = {};
                if (t.fixedContentPos && t._hasScrollBar(c)) {
                    var y = t._getScrollbarSize();
                    y && (f.marginRight = y)
                }
                t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : f.overflow = "hidden");
                var v = t.st.mainClass;
                return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), j("BuildControls"), e("html").css(f), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                    t.content ? (t._addClassToMFP(h), t._setFocus()) : t.bgOverlay.addClass(h), i.on("focusin" + m, t._onFocusIn)
                }, 16), t.isOpen = !0, t.updateSize(c), j(d), r
            },
            close: function() {
                t.isOpen && (j(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(v), setTimeout(function() {
                    t._close()
                }, t.st.removalDelay)) : t._close())
            },
            _close: function() {
                j(s);
                var r = v + " " + h + " ";
                if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (r += t.st.mainClass + " "), t._removeClassFromMFP(r), t.fixedContentPos) {
                    var n = {
                        marginRight: ""
                    };
                    t.isIE7 ? e("body, html").css("overflow", "") : n.overflow = "", e("html").css(n)
                }
                i.off("keyup" + m + " focusin" + m), t.ev.off(m), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, j(u)
            },
            updateSize: function(e) {
                if (t.isIOS) {
                    var r = document.documentElement.clientWidth / window.innerWidth,
                        i = window.innerHeight * r;
                    t.wrap.css("height", i), t.wH = i
                } else t.wH = e || P.height();
                t.fixedContentPos || t.wrap.css("height", t.wH), j("Resize")
            },
            updateItemHTML: function() {
                var r = t.items[t.index];
                t.contentContainer.detach(), t.content && t.content.detach(), r.parsed || (r = t.parseEl(t.index));
                var i = r.type;
                if (j("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = r, !t.currTemplate[i]) {
                    var o = t.st[i] ? t.st[i].markup : !1;
                    j("FirstMarkupParse", o), o ? t.currTemplate[i] = e(o) : t.currTemplate[i] = !0
                }
                n && n !== r.type && t.container.removeClass("mfp-" + n + "-holder");
                var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](r, t.currTemplate[i]);
                t.appendContent(a, i), r.preloaded = !0, j(f, r), n = r.type, t.container.prepend(t.contentContainer), j("AfterChange")
            },
            appendContent: function(e, r) {
                t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[r] === !0 ? t.content.find(".mfp-close").length || t.content.append(S()) : t.content = e : t.content = "", j(c), t.container.addClass("mfp-" + r + "-holder"), t.contentContainer.append(t.content)
            },
            parseEl: function(r) {
                var i, n = t.items[r];
                if (n.tagName ? n = {
                        el: e(n)
                    } : (i = n.type, n = {
                        data: n,
                        src: n.src
                    }), n.el) {
                    for (var o = t.types, a = 0; a < o.length; a++)
                        if (n.el.hasClass("mfp-" + o[a])) {
                            i = o[a];
                            break
                        }
                    n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
                }
                return n.type = i || t.st.type || "inline", n.index = r, n.parsed = !0, t.items[r] = n, j("ElementParse", n), t.items[r]
            },
            addGroup: function(e, r) {
                var i = function(i) {
                    i.mfpEl = this, t._openClick(i, e, r)
                };
                r || (r = {});
                var n = "click.magnificPopup";
                r.mainEl = e, r.items ? (r.isObj = !0, e.off(n).on(n, i)) : (r.isObj = !1, r.delegate ? e.off(n).on(n, r.delegate, i) : (r.items = e, e.off(n).on(n, i)))
            },
            _openClick: function(r, i, n) {
                var o = void 0 !== n.midClick ? n.midClick : e.magnificPopup.defaults.midClick;
                if (o || !(2 === r.which || r.ctrlKey || r.metaKey || r.altKey || r.shiftKey)) {
                    var a = void 0 !== n.disableOn ? n.disableOn : e.magnificPopup.defaults.disableOn;
                    if (a)
                        if (e.isFunction(a)) {
                            if (!a.call(t)) return !0
                        } else if (P.width() < a) return !0;
                    r.type && (r.preventDefault(), t.isOpen && r.stopPropagation()), n.el = e(r.mfpEl), n.delegate && (n.items = i.find(n.delegate)), t.open(n)
                }
            },
            updateStatus: function(e, i) {
                if (t.preloader) {
                    r !== e && t.container.removeClass("mfp-s-" + r), i || "loading" !== e || (i = t.st.tLoading);
                    var n = {
                        status: e,
                        text: i
                    };
                    j("UpdateStatus", n), e = n.status, i = n.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) {
                        e.stopImmediatePropagation()
                    }), t.container.addClass("mfp-s-" + e), r = e
                }
            },
            _checkIfClose: function(r) {
                if (!e(r).hasClass(g)) {
                    var i = t.st.closeOnContentClick,
                        n = t.st.closeOnBgClick;
                    if (i && n) return !0;
                    if (!t.content || e(r).hasClass("mfp-close") || t.preloader && r === t.preloader[0]) return !0;
                    if (r === t.content[0] || e.contains(t.content[0], r)) {
                        if (i) return !0
                    } else if (n && e.contains(document, r)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(e) {
                t.bgOverlay.addClass(e), t.wrap.addClass(e)
            },
            _removeClassFromMFP: function(e) {
                this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
            },
            _hasScrollBar: function(e) {
                return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || P.height())
            },
            _setFocus: function() {
                (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
            },
            _onFocusIn: function(r) {
                return r.target === t.wrap[0] || e.contains(t.wrap[0], r.target) ? void 0 : (t._setFocus(), !1)
            },
            _parseMarkup: function(t, r, i) {
                var n;
                i.data && (r = e.extend(i.data, r)), j(p, [t, r, i]), e.each(r, function(e, r) {
                    if (void 0 === r || r === !1) return !0;
                    if (n = e.split("_"), n.length > 1) {
                        var i = t.find(m + "-" + n[0]);
                        if (i.length > 0) {
                            var o = n[1];
                            "replaceWith" === o ? i[0] !== r[0] && i.replaceWith(r) : "img" === o ? i.is("img") ? i.attr("src", r) : i.replaceWith('<img src="' + r + '" class="' + i.attr("class") + '" />') : i.attr(n[1], r)
                        }
                    } else t.find(m + "-" + e).html(r)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === t.scrollbarSize) {
                    var e = document.createElement("div");
                    e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
                }
                return t.scrollbarSize
            }
        }, e.magnificPopup = {
            instance: null,
            proto: T.prototype,
            modules: [],
            open: function(t, r) {
                return x(), t = t ? e.extend(!0, {}, t) : {},
                    t.isObj = !0, t.index = r || 0, this.instance.open(t)
            },
            close: function() {
                return e.magnificPopup.instance && e.magnificPopup.instance.close()
            },
            registerModule: function(t, r) {
                r.options && (e.magnificPopup.defaults[t] = r.options), e.extend(this.proto, r.proto), this.modules.push(t)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, e.fn.magnificPopup = function(r) {
            x();
            var i = e(this);
            if ("string" == typeof r)
                if ("open" === r) {
                    var n, o = b ? i.data("magnificPopup") : i[0].magnificPopup,
                        a = parseInt(arguments[1], 10) || 0;
                    o.items ? n = o.items[a] : (n = i, o.delegate && (n = n.find(o.delegate)), n = n.eq(a)), t._openClick({
                        mfpEl: n
                    }, i, o)
                } else t.isOpen && t[r].apply(t, Array.prototype.slice.call(arguments, 1));
            else r = e.extend(!0, {}, r), b ? i.data("magnificPopup", r) : i[0].magnificPopup = r, t.addGroup(i, r);
            return i
        };
        var I, C, _, E = "inline",
            z = function() {
                _ && (C.after(_.addClass(I)).detach(), _ = null)
            };
        e.magnificPopup.registerModule(E, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    t.types.push(E), Y(s + "." + E, function() {
                        z()
                    })
                },
                getInline: function(r, i) {
                    if (z(), r.src) {
                        var n = t.st.inline,
                            o = e(r.src);
                        if (o.length) {
                            var a = o[0].parentNode;
                            a && a.tagName && (C || (I = n.hiddenClass, C = w(I), I = "mfp-" + I), _ = o.after(C).detach().removeClass(I)), t.updateStatus("ready")
                        } else t.updateStatus("error", n.tNotFound), o = e("<div>");
                        return r.inlineElement = o, o
                    }
                    return t.updateStatus("ready"), t._parseMarkup(i, {}, r), i
                }
            }
        });
        var k, O = "ajax",
            A = function() {
                k && e(document.body).removeClass(k)
            },
            L = function() {
                A(), t.req && t.req.abort()
            };
        e.magnificPopup.registerModule(O, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    t.types.push(O), k = t.st.ajax.cursor, Y(s + "." + O, L), Y("BeforeChange." + O, L)
                },
                getAjax: function(r) {
                    k && e(document.body).addClass(k), t.updateStatus("loading");
                    var i = e.extend({
                        url: r.src,
                        success: function(i, n, o) {
                            var a = {
                                data: i,
                                xhr: o
                            };
                            j("ParseAjax", a), t.appendContent(e(a.data), O), r.finished = !0, A(), t._setFocus(), setTimeout(function() {
                                t.wrap.addClass(h)
                            }, 16), t.updateStatus("ready"), j("AjaxContentAdded")
                        },
                        error: function() {
                            A(), r.finished = r.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", r.src))
                        }
                    }, t.st.ajax.settings);
                    return t.req = e.ajax(i), ""
                }
            }
        });
        var M, D = function(r) {
            if (r.data && void 0 !== r.data.title) return r.data.title;
            var i = t.st.image.titleSrc;
            if (i) {
                if (e.isFunction(i)) return i.call(t, r);
                if (r.el) return r.el.attr(i) || ""
            }
            return ""
        };
        e.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var r = t.st.image,
                        i = ".image";
                    t.types.push("image"), Y(d + i, function() {
                        "image" === t.currItem.type && r.cursor && e(document.body).addClass(r.cursor)
                    }), Y(s + i, function() {
                        r.cursor && e(document.body).removeClass(r.cursor), P.off("resize" + m)
                    }), Y("Resize" + i, t.resizeImage), t.isLowIE && Y("AfterChange", t.resizeImage)
                },
                resizeImage: function() {
                    var e = t.currItem;
                    if (e && e.img && t.st.image.verticalFit) {
                        var r = 0;
                        t.isLowIE && (r = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - r)
                    }
                },
                _onImageHasSize: function(e) {
                    e.img && (e.hasSize = !0, M && clearInterval(M), e.isCheckingImgSize = !1, j("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
                },
                findImageSize: function(e) {
                    var r = 0,
                        i = e.img[0],
                        n = function(o) {
                            M && clearInterval(M), M = setInterval(function() {
                                return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (r > 200 && clearInterval(M), r++, void(3 === r ? n(10) : 40 === r ? n(50) : 100 === r && n(500)))
                            }, o)
                        };
                    n(1)
                },
                getImage: function(r, i) {
                    var n = 0,
                        o = function() {
                            r && (r.img[0].complete ? (r.img.off(".mfploader"), r === t.currItem && (t._onImageHasSize(r), t.updateStatus("ready")), r.hasSize = !0, r.loaded = !0, j("ImageLoadComplete")) : (n++, 200 > n ? setTimeout(o, 100) : a()))
                        },
                        a = function() {
                            r && (r.img.off(".mfploader"), r === t.currItem && (t._onImageHasSize(r), t.updateStatus("error", s.tError.replace("%url%", r.src))), r.hasSize = !0, r.loaded = !0, r.loadError = !0)
                        },
                        s = t.st.image,
                        l = i.find(".mfp-img");
                    if (l.length) {
                        var u = document.createElement("img");
                        u.className = "mfp-img", r.el && r.el.find("img").length && (u.alt = r.el.find("img").attr("alt")), r.img = e(u).on("load.mfploader", o).on("error.mfploader", a), u.src = r.src, l.is("img") && (r.img = r.img.clone()), u = r.img[0], u.naturalWidth > 0 ? r.hasSize = !0 : u.width || (r.hasSize = !1)
                    }
                    return t._parseMarkup(i, {
                        title: D(r),
                        img_replaceWith: r.img
                    }, r), t.resizeImage(), r.hasSize ? (M && clearInterval(M), r.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", r.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), r.loading = !0, r.hasSize || (r.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(r)), i)
                }
            }
        });
        var B, R = function() {
            return void 0 === B && (B = void 0 !== document.createElement("p").style.MozTransform), B
        };
        e.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(e) {
                    return e.is("img") ? e : e.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var e, r = t.st.zoom,
                        i = ".zoom";
                    if (r.enabled && t.supportsTransition) {
                        var n, o, a = r.duration,
                            u = function(e) {
                                var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    i = "all " + r.duration / 1e3 + "s " + r.easing,
                                    n = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    o = "transition";
                                return n["-webkit-" + o] = n["-moz-" + o] = n["-o-" + o] = n[o] = i, t.css(n), t
                            },
                            c = function() {
                                t.content.css("visibility", "visible")
                            };
                        Y("BuildControls" + i, function() {
                            if (t._allowZoom()) {
                                if (clearTimeout(n), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void c();
                                o = u(e), o.css(t._getOffset()), t.wrap.append(o), n = setTimeout(function() {
                                    o.css(t._getOffset(!0)), n = setTimeout(function() {
                                        c(), setTimeout(function() {
                                            o.remove(), e = o = null, j("ZoomAnimationEnded")
                                        }, 16)
                                    }, a)
                                }, 16)
                            }
                        }), Y(l + i, function() {
                            if (t._allowZoom()) {
                                if (clearTimeout(n), t.st.removalDelay = a, !e) {
                                    if (e = t._getItemToZoom(), !e) return;
                                    o = u(e)
                                }
                                o.css(t._getOffset(!0)), t.wrap.append(o), t.content.css("visibility", "hidden"), setTimeout(function() {
                                    o.css(t._getOffset())
                                }, 16)
                            }
                        }), Y(s + i, function() {
                            t._allowZoom() && (c(), o && o.remove(), e = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === t.currItem.type
                },
                _getItemToZoom: function() {
                    return t.currItem.hasSize ? t.currItem.img : !1
                },
                _getOffset: function(r) {
                    var i;
                    i = r ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                    var n = i.offset(),
                        o = parseInt(i.css("padding-top"), 10),
                        a = parseInt(i.css("padding-bottom"), 10);
                    n.top -= e(window).scrollTop() - o;
                    var s = {
                        width: i.width(),
                        height: (b ? i.innerHeight() : i[0].offsetHeight) - a - o
                    };
                    return R() ? s["-moz-transform"] = s.transform = "translate(" + n.left + "px," + n.top + "px)" : (s.left = n.left, s.top = n.top), s
                }
            }
        });
        var F = "iframe",
            W = "//about:blank",
            N = function(e) {
                if (t.currTemplate[F]) {
                    var r = t.currTemplate[F].find("iframe");
                    r.length && (e || (r[0].src = W), t.isIE8 && r.css("display", e ? "block" : "none"))
                }
            };
        e.magnificPopup.registerModule(F, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    t.types.push(F), Y("BeforeChange", function(e, t, r) {
                        t !== r && (t === F ? N() : r === F && N(!0))
                    }), Y(s + "." + F, function() {
                        N()
                    })
                },
                getIframe: function(r, i) {
                    var n = r.src,
                        o = t.st.iframe;
                    e.each(o.patterns, function() {
                        return n.indexOf(this.index) > -1 ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1) : void 0
                    });
                    var a = {};
                    return o.srcAction && (a[o.srcAction] = n), t._parseMarkup(i, a, r), t.updateStatus("ready"), i
                }
            }
        });
        var V = function(e) {
                var r = t.items.length;
                return e > r - 1 ? e - r : 0 > e ? r + e : e
            },
            q = function(e, t, r) {
                return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, r)
            };
        e.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var r = t.st.gallery,
                        n = ".mfp-gallery",
                        a = Boolean(e.fn.mfpFastClick);
                    return t.direction = !0, r && r.enabled ? (o += " mfp-gallery", Y(d + n, function() {
                        r.navigateByImgClick && t.wrap.on("click" + n, ".mfp-img", function() {
                            return t.items.length > 1 ? (t.next(), !1) : void 0
                        }), i.on("keydown" + n, function(e) {
                            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                        })
                    }), Y("UpdateStatus" + n, function(e, r) {
                        r.text && (r.text = q(r.text, t.currItem.index, t.items.length))
                    }), Y(p + n, function(e, i, n, o) {
                        var a = t.items.length;
                        n.counter = a > 1 ? q(r.tCounter, o.index, a) : ""
                    }), Y("BuildControls" + n, function() {
                        if (t.items.length > 1 && r.arrows && !t.arrowLeft) {
                            var i = r.arrowMarkup,
                                n = t.arrowLeft = e(i.replace(/%title%/gi, r.tPrev).replace(/%dir%/gi, "left")).addClass(g),
                                o = t.arrowRight = e(i.replace(/%title%/gi, r.tNext).replace(/%dir%/gi, "right")).addClass(g),
                                s = a ? "mfpFastClick" : "click";
                            n[s](function() {
                                t.prev()
                            }), o[s](function() {
                                t.next()
                            }), t.isIE7 && (w("b", n[0], !1, !0), w("a", n[0], !1, !0), w("b", o[0], !1, !0), w("a", o[0], !1, !0)), t.container.append(n.add(o))
                        }
                    }), Y(f + n, function() {
                        t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                            t.preloadNearbyImages(), t._preloadTimeout = null
                        }, 16)
                    }), void Y(s + n, function() {
                        i.off(n), t.wrap.off("click" + n), t.arrowLeft && a && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                    })) : !1
                },
                next: function() {
                    t.direction = !0, t.index = V(t.index + 1), t.updateItemHTML()
                },
                prev: function() {
                    t.direction = !1, t.index = V(t.index - 1), t.updateItemHTML()
                },
                goTo: function(e) {
                    t.direction = e >= t.index, t.index = e, t.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var e, r = t.st.gallery.preload,
                        i = Math.min(r[0], t.items.length),
                        n = Math.min(r[1], t.items.length);
                    for (e = 1; e <= (t.direction ? n : i); e++) t._preloadItem(t.index + e);
                    for (e = 1; e <= (t.direction ? i : n); e++) t._preloadItem(t.index - e)
                },
                _preloadItem: function(r) {
                    if (r = V(r), !t.items[r].preloaded) {
                        var i = t.items[r];
                        i.parsed || (i = t.parseEl(r)), j("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                            i.hasSize = !0
                        }).on("error.mfploader", function() {
                            i.hasSize = !0, i.loadError = !0, j("LazyLoadError", i)
                        }).attr("src", i.src)), i.preloaded = !0
                    }
                }
            }
        });
        var H = "retina";
        e.magnificPopup.registerModule(H, {
                options: {
                    replaceSrc: function(e) {
                        return e.src.replace(/\.\w+$/, function(e) {
                            return "@2x" + e
                        })
                    },
                    ratio: 1
                },
                proto: {
                    initRetina: function() {
                        if (window.devicePixelRatio > 1) {
                            var e = t.st.retina,
                                r = e.ratio;
                            r = isNaN(r) ? r() : r, r > 1 && (Y("ImageHasSize." + H, function(e, t) {
                                t.img.css({
                                    "max-width": t.img[0].naturalWidth / r,
                                    width: "100%"
                                })
                            }), Y("ElementParse." + H, function(t, i) {
                                i.src = e.replaceSrc(i, r)
                            }))
                        }
                    }
                }
            }),
            function() {
                var t = 1e3,
                    r = "ontouchstart" in window,
                    i = function() {
                        P.off("touchmove" + o + " touchend" + o)
                    },
                    n = "mfpFastClick",
                    o = "." + n;
                e.fn.mfpFastClick = function(n) {
                    return e(this).each(function() {
                        var a, s = e(this);
                        if (r) {
                            var l, u, c, p, d, f;
                            s.on("touchstart" + o, function(e) {
                                p = !1, f = 1, d = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], u = d.clientX, c = d.clientY, P.on("touchmove" + o, function(e) {
                                    d = e.originalEvent ? e.originalEvent.touches : e.touches, f = d.length, d = d[0], (Math.abs(d.clientX - u) > 10 || Math.abs(d.clientY - c) > 10) && (p = !0, i())
                                }).on("touchend" + o, function(e) {
                                    i(), p || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                        a = !1
                                    }, t), n())
                                })
                            })
                        }
                        s.on("click" + o, function() {
                            a || n()
                        })
                    })
                }, e.fn.destroyMfpFastClick = function() {
                    e(this).off("touchstart" + o + " click" + o), r && P.off("touchmove" + o + " touchend" + o)
                }
            }(), x()
    }), ! function(e) {
        var t = !0;
        e.flexslider = function(r, i) {
            var n = e(r);
            n.vars = e.extend({}, e.flexslider.defaults, i);
            var o, a = n.vars.namespace,
                s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                l = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
                u = "click touchend MSPointerUp keyup",
                c = "",
                p = "vertical" === n.vars.direction,
                d = n.vars.reverse,
                f = n.vars.itemWidth > 0,
                y = "fade" === n.vars.animation,
                m = "" !== n.vars.asNavFor,
                h = {};
            e.data(r, "flexslider", n), h = {
                init: function() {
                    n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = e(n.vars.selector, n), n.container = e(n.containerSelector, n), n.count = n.slides.length, n.syncExists = e(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = p ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !y && n.vars.useCSS && function() {
                        var e = document.createElement("div"),
                            t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var r in t)
                            if (void 0 !== e.style[t[r]]) return n.pfx = t[r].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
                        return !1
                    }(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = e(n.vars.controlsContainer).length > 0 && e(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = e(n.vars.manualControls).length > 0 && e(n.vars.manualControls)), "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === e(n.vars.customDirectionNav).length && e(n.vars.customDirectionNav)), n.vars.randomize && (n.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && h.controlNav.setup(), n.vars.directionNav && h.directionNav.setup(), n.vars.keyboard && (1 === e(n.containerSelector).length || n.vars.multipleKeyboard) && e(document).bind("keyup", function(e) {
                        var t = e.keyCode;
                        if (!n.animating && (39 === t || 37 === t)) {
                            var r = 39 === t ? n.getTarget("next") : 37 === t ? n.getTarget("prev") : !1;
                            n.flexAnimate(r, n.vars.pauseOnAction)
                        }
                    }), n.vars.mousewheel && n.bind("mousewheel", function(e, t, r, i) {
                        e.preventDefault();
                        var o = 0 > t ? n.getTarget("next") : n.getTarget("prev");
                        n.flexAnimate(o, n.vars.pauseOnAction)
                    }), n.vars.pausePlay && h.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && h.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function() {
                        n.manualPlay || n.manualPause || n.pause()
                    }, function() {
                        n.manualPause || n.manualPlay || n.stopped || n.play()
                    }), n.vars.pauseInvisible && h.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && h.asNav.setup(), l && n.vars.touch && h.touch(), (!y || y && n.vars.smoothHeight) && e(window).bind("resize orientationchange focus", h.resize), n.find("img").attr("draggable", "false"), setTimeout(function() {
                        n.vars.start(n)
                    }, 200)
                },
                asNav: {
                    setup: function() {
                        n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(a + "active-slide").eq(n.currentItem).addClass(a + "active-slide"), s ? (r._slider = n, n.slides.each(function() {
                            var t = this;
                            t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function(e) {
                                e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                            }, !1), t.addEventListener("MSGestureTap", function(t) {
                                t.preventDefault();
                                var r = e(this),
                                    i = r.index();
                                e(n.vars.asNavFor).data("flexslider").animating || r.hasClass("active") || (n.direction = n.currentItem < i ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction, !1, !0, !0))
                            })
                        })) : n.slides.on(u, function(t) {
                            t.preventDefault();
                            var r = e(this),
                                i = r.index(),
                                o = r.offset().left - e(n).scrollLeft();
                            0 >= o && r.hasClass(a + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : e(n.vars.asNavFor).data("flexslider").animating || r.hasClass(a + "active-slide") || (n.direction = n.currentItem < i ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction, !1, !0, !0))
                        })
                    }
                },
                controlNav: {
                    setup: function() {
                        n.manualControls ? h.controlNav.setupManual() : h.controlNav.setupPaging()
                    },
                    setupPaging: function() {
                        var t, r, i = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging",
                            o = 1;
                        if (n.controlNavScaffold = e('<ol class="' + a + "control-nav " + a + i + '"></ol>'), n.pagingCount > 1)
                            for (var s = 0; s < n.pagingCount; s++) {
                                if (r = n.slides.eq(s), void 0 === r.attr("data-thumb-alt") && r.attr("data-thumb-alt", ""), altText = "" !== r.attr("data-thumb-alt") ? altText = ' alt="' + r.attr("data-thumb-alt") + '"' : "", t = "thumbnails" === n.vars.controlNav ? '<img src="' + r.attr("data-thumb") + '"' + altText + "/>" : '<a href="#">' + o + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                                    var l = r.attr("data-thumbcaption");
                                    "" !== l && void 0 !== l && (t += '<span class="' + a + 'caption">' + l + "</span>")
                                }
                                n.controlNavScaffold.append("<li>" + t + "</li>"), o++
                            }
                        n.controlsContainer ? e(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), h.controlNav.set(), h.controlNav.active(), n.controlNavScaffold.delegate("a, img", u, function(t) {
                            if (t.preventDefault(), "" === c || c === t.type) {
                                var r = e(this),
                                    i = n.controlNav.index(r);
                                r.hasClass(a + "active") || (n.direction = i > n.currentSlide ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction))
                            }
                            "" === c && (c = t.type), h.setToClearWatchedEvent()
                        })
                    },
                    setupManual: function() {
                        n.controlNav = n.manualControls, h.controlNav.active(), n.controlNav.bind(u, function(t) {
                            if (t.preventDefault(), "" === c || c === t.type) {
                                var r = e(this),
                                    i = n.controlNav.index(r);
                                r.hasClass(a + "active") || (i > n.currentSlide ? n.direction = "next" : n.direction = "prev", n.flexAnimate(i, n.vars.pauseOnAction))
                            }
                            "" === c && (c = t.type), h.setToClearWatchedEvent()
                        })
                    },
                    set: function() {
                        var t = "thumbnails" === n.vars.controlNav ? "img" : "a";
                        n.controlNav = e("." + a + "control-nav li " + t, n.controlsContainer ? n.controlsContainer : n)
                    },
                    active: function() {
                        n.controlNav.removeClass(a + "active").eq(n.animatingTo).addClass(a + "active")
                    },
                    update: function(t, r) {
                        n.pagingCount > 1 && "add" === t ? n.controlNavScaffold.append(e('<li><a href="#">' + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(r).closest("li").remove(), h.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(r, t) : h.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function() {
                        var t = e('<ul class="' + a + 'direction-nav"><li class="' + a + 'nav-prev"><a class="' + a + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + a + 'nav-next"><a class="' + a + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                        n.customDirectionNav ? n.directionNav = n.customDirectionNav : n.controlsContainer ? (e(n.controlsContainer).append(t), n.directionNav = e("." + a + "direction-nav li a", n.controlsContainer)) : (n.append(t), n.directionNav = e("." + a + "direction-nav li a", n)), h.directionNav.update(), n.directionNav.bind(u, function(t) {
                            t.preventDefault();
                            var r;
                            ("" === c || c === t.type) && (r = e(this).hasClass(a + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(r, n.vars.pauseOnAction)), "" === c && (c = t.type), h.setToClearWatchedEvent()
                        })
                    },
                    update: function() {
                        var e = a + "disabled";
                        1 === n.pagingCount ? n.directionNav.addClass(e).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(e).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(e).filter("." + a + "prev").addClass(e).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(e).filter("." + a + "next").addClass(e).attr("tabindex", "-1") : n.directionNav.removeClass(e).removeAttr("tabindex")
                    }
                },
                pausePlay: {
                    setup: function() {
                        var t = e('<div class="' + a + 'pauseplay"><a href="#"></a></div>');
                        n.controlsContainer ? (n.controlsContainer.append(t), n.pausePlay = e("." + a + "pauseplay a", n.controlsContainer)) : (n.append(t), n.pausePlay = e("." + a + "pauseplay a", n)), h.pausePlay.update(n.vars.slideshow ? a + "pause" : a + "play"), n.pausePlay.bind(u, function(t) {
                            t.preventDefault(), ("" === c || c === t.type) && (e(this).hasClass(a + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === c && (c = t.type), h.setToClearWatchedEvent()
                        })
                    },
                    update: function(e) {
                        "play" === e ? n.pausePlay.removeClass(a + "pause").addClass(a + "play").html(n.vars.playText) : n.pausePlay.removeClass(a + "play").addClass(a + "pause").html(n.vars.pauseText)
                    }
                },
                touch: function() {
                    function e(e) {
                        e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), r._gesture.addPointer(e.pointerId), Y = 0, u = p ? n.h : n.w, m = Number(new Date), l = f && d && n.animatingTo === n.last ? 0 : f && d ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : f && n.currentSlide === n.last ? n.limit : f ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : d ? (n.last - n.currentSlide + n.cloneOffset) * u : (n.currentSlide + n.cloneOffset) * u)
                    }

                    function t(e) {
                        e.stopPropagation();
                        var t = e.target._slider;
                        if (t) {
                            var i = -e.translationX,
                                n = -e.translationY;
                            return Y += p ? n : i, c = Y, T = p ? Math.abs(Y) < Math.abs(-i) : Math.abs(Y) < Math.abs(-n), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                                r._gesture.stop()
                            }) : void((!T || Number(new Date) - m > 500) && (e.preventDefault(), !y && t.transitions && (t.vars.animationLoop || (c = Y / (0 === t.currentSlide && 0 > Y || t.currentSlide === t.last && Y > 0 ? Math.abs(Y) / u + 2 : 1)), t.setProps(l + c, "setTouch"))))
                        }
                    }

                    function i(e) {
                        e.stopPropagation();
                        var t = e.target._slider;
                        if (t) {
                            if (t.animatingTo === t.currentSlide && !T && null !== c) {
                                var r = d ? -c : c,
                                    i = r > 0 ? t.getTarget("next") : t.getTarget("prev");
                                t.canAdvance(i) && (Number(new Date) - m < 550 && Math.abs(r) > 50 || Math.abs(r) > u / 2) ? t.flexAnimate(i, t.vars.pauseOnAction) : y || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                            }
                            o = null, a = null, c = null, l = null, Y = 0
                        }
                    }
                    var o, a, l, u, c, m, h, v, g, T = !1,
                        b = 0,
                        P = 0,
                        Y = 0;
                    s ? (r.style.msTouchAction = "none", r._gesture = new MSGesture, r._gesture.target = r, r.addEventListener("MSPointerDown", e, !1), r._slider = n, r.addEventListener("MSGestureChange", t, !1), r.addEventListener("MSGestureEnd", i, !1)) : (h = function(e) {
                        n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), u = p ? n.h : n.w, m = Number(new Date), b = e.touches[0].pageX, P = e.touches[0].pageY, l = f && d && n.animatingTo === n.last ? 0 : f && d ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : f && n.currentSlide === n.last ? n.limit : f ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : d ? (n.last - n.currentSlide + n.cloneOffset) * u : (n.currentSlide + n.cloneOffset) * u, o = p ? P : b, a = p ? b : P, r.addEventListener("touchmove", v, !1), r.addEventListener("touchend", g, !1))
                    }, v = function(e) {
                        b = e.touches[0].pageX, P = e.touches[0].pageY, c = p ? o - P : o - b, T = p ? Math.abs(c) < Math.abs(b - a) : Math.abs(c) < Math.abs(P - a);
                        var t = 500;
                        (!T || Number(new Date) - m > t) && (e.preventDefault(), !y && n.transitions && (n.vars.animationLoop || (c /= 0 === n.currentSlide && 0 > c || n.currentSlide === n.last && c > 0 ? Math.abs(c) / u + 2 : 1), n.setProps(l + c, "setTouch")))
                    }, g = function(e) {
                        if (r.removeEventListener("touchmove", v, !1), n.animatingTo === n.currentSlide && !T && null !== c) {
                            var t = d ? -c : c,
                                i = t > 0 ? n.getTarget("next") : n.getTarget("prev");
                            n.canAdvance(i) && (Number(new Date) - m < 550 && Math.abs(t) > 50 || Math.abs(t) > u / 2) ? n.flexAnimate(i, n.vars.pauseOnAction) : y || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                        }
                        r.removeEventListener("touchend", g, !1), o = null, a = null, c = null, l = null
                    }, r.addEventListener("touchstart", h, !1))
                },
                resize: function() {
                    !n.animating && n.is(":visible") && (f || n.doMath(), y ? h.smoothHeight() : f ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : p ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && h.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
                },
                smoothHeight: function(e) {
                    if (!p || y) {
                        var t = y ? n : n.viewport;
                        e ? t.animate({
                            height: n.slides.eq(n.animatingTo).height()
                        }, e) : t.height(n.slides.eq(n.animatingTo).height())
                    }
                },
                sync: function(t) {
                    var r = e(n.vars.sync).data("flexslider"),
                        i = n.animatingTo;
                    switch (t) {
                        case "animate":
                            r.flexAnimate(i, n.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            r.playing || r.asNav || r.play();
                            break;
                        case "pause":
                            r.pause()
                    }
                },
                uniqueID: function(t) {
                    return t.filter("[id]").add(t.find("[id]")).each(function() {
                        var t = e(this);
                        t.attr("id", t.attr("id") + "_clone")
                    }), t
                },
                pauseInvisible: {
                    visProp: null,
                    init: function() {
                        var e = h.pauseInvisible.getHiddenProp();
                        if (e) {
                            var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                            document.addEventListener(t, function() {
                                h.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                            })
                        }
                    },
                    isHidden: function() {
                        var e = h.pauseInvisible.getHiddenProp();
                        return e ? document[e] : !1
                    },
                    getHiddenProp: function() {
                        var e = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var t = 0; t < e.length; t++)
                            if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                        return null
                    }
                },
                setToClearWatchedEvent: function() {
                    clearTimeout(o), o = setTimeout(function() {
                        c = ""
                    }, 3e3)
                }
            }, n.flexAnimate = function(t, r, i, o, s) {
                if (n.vars.animationLoop || t === n.currentSlide || (n.direction = t > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < t ? "next" : "prev"), !n.animating && (n.canAdvance(t, s) || i) && n.is(":visible")) {
                    if (m && o) {
                        var u = e(n.vars.asNavFor).data("flexslider");
                        if (n.atEnd = 0 === t || t === n.count - 1, u.flexAnimate(t, !0, !1, !0, s), n.direction = n.currentItem < t ? "next" : "prev", u.direction = n.direction, Math.ceil((t + 1) / n.visible) - 1 === n.currentSlide || 0 === t) return n.currentItem = t, n.slides.removeClass(a + "active-slide").eq(t).addClass(a + "active-slide"), !1;
                        n.currentItem = t, n.slides.removeClass(a + "active-slide").eq(t).addClass(a + "active-slide"), t = Math.floor(t / n.visible)
                    }
                    if (n.animating = !0, n.animatingTo = t, r && n.pause(), n.vars.before(n), n.syncExists && !s && h.sync("animate"), n.vars.controlNav && h.controlNav.active(), f || n.slides.removeClass(a + "active-slide").eq(t).addClass(a + "active-slide"), n.atEnd = 0 === t || t === n.last, n.vars.directionNav && h.directionNav.update(), t === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), y) l ? (n.slides.eq(n.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), n.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2
                    }), n.wrapup(T)) : (n.slides.eq(n.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, n.vars.animationSpeed, n.vars.easing), n.slides.eq(t).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, n.vars.animationSpeed, n.vars.easing, n.wrapup));
                    else {
                        var c, v, g, T = p ? n.slides.filter(":first").height() : n.computedW;
                        f ? (c = n.vars.itemMargin, g = (n.itemW + c) * n.move * n.animatingTo, v = g > n.limit && 1 !== n.visible ? n.limit : g) : v = 0 === n.currentSlide && t === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? d ? (n.count + n.cloneOffset) * T : 0 : n.currentSlide === n.last && 0 === t && n.vars.animationLoop && "prev" !== n.direction ? d ? 0 : (n.count + 1) * T : d ? (n.count - 1 - t + n.cloneOffset) * T : (t + n.cloneOffset) * T, n.setProps(v, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function() {
                            clearTimeout(n.ensureAnimationEnd), n.wrapup(T)
                        }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function() {
                            n.wrapup(T)
                        }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function() {
                            n.wrapup(T)
                        })
                    }
                    n.vars.smoothHeight && h.smoothHeight(n.vars.animationSpeed)
                }
            }, n.wrapup = function(e) {
                y || f || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(e, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(e, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
            }, n.animateSlides = function() {
                !n.animating && t && n.flexAnimate(n.getTarget("next"))
            }, n.pause = function() {
                clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && h.pausePlay.update("play"), n.syncExists && h.sync("pause")
            }, n.play = function() {
                n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && h.pausePlay.update("pause"), n.syncExists && h.sync("play")
            }, n.stop = function() {
                n.pause(), n.stopped = !0
            }, n.canAdvance = function(e, t) {
                var r = m ? n.pagingCount - 1 : n.last;
                return t ? !0 : m && n.currentItem === n.count - 1 && 0 === e && "prev" === n.direction ? !0 : m && 0 === n.currentItem && e === n.pagingCount - 1 && "next" !== n.direction ? !1 : e !== n.currentSlide || m ? n.vars.animationLoop ? !0 : n.atEnd && 0 === n.currentSlide && e === r && "next" !== n.direction ? !1 : n.atEnd && n.currentSlide === r && 0 === e && "next" === n.direction ? !1 : !0 : !1
            }, n.getTarget = function(e) {
                return n.direction = e, "next" === e ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
            }, n.setProps = function(e, t, r) {
                var i = function() {
                    var r = e ? e : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo,
                        i = function() {
                            if (f) return "setTouch" === t ? e : d && n.animatingTo === n.last ? 0 : d ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : r;
                            switch (t) {
                                case "setTotal":
                                    return d ? (n.count - 1 - n.currentSlide + n.cloneOffset) * e : (n.currentSlide + n.cloneOffset) * e;
                                case "setTouch":
                                    return d ? e : e;
                                case "jumpEnd":
                                    return d ? e : n.count * e;
                                case "jumpStart":
                                    return d ? n.count * e : e;
                                default:
                                    return e
                            }
                        }();
                    return -1 * i + "px"
                }();
                n.transitions && (i = p ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", r = void 0 !== r ? r / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", r), n.container.css("transition-duration", r)), n.args[n.prop] = i, (n.transitions || void 0 === r) && n.container.css(n.args), n.container.css("transform", i)
            }, n.setup = function(t) {
                if (y) n.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === t && (l ? n.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(n.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(n.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : n.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(n.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && h.smoothHeight();
                else {
                    var r, i;
                    "init" === t && (n.viewport = e('<div class="' + a + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, d && (i = e.makeArray(n.slides).reverse(), n.slides = e(i), n.container.empty().append(n.slides))), n.vars.animationLoop && !f && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== t && n.container.find(".clone").remove(), n.container.append(h.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(h.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = e(n.vars.selector, n), r = d ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, p && !f ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                        n.newSlides.css({
                            display: "block"
                        }), n.doMath(), n.viewport.height(n.h), n.setProps(r * n.h, "init")
                    }, "init" === t ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(r * n.computedW, "init"), setTimeout(function() {
                        n.doMath(), n.newSlides.css({
                            width: n.computedW,
                            marginRight: n.computedM,
                            "float": "left",
                            display: "block"
                        }), n.vars.smoothHeight && h.smoothHeight()
                    }, "init" === t ? 100 : 0))
                }
                f || n.slides.removeClass(a + "active-slide").eq(n.currentSlide).addClass(a + "active-slide"), n.vars.init(n)
            }, n.doMath = function() {
                var e = n.slides.first(),
                    t = n.vars.itemMargin,
                    r = n.vars.minItems,
                    i = n.vars.maxItems;
                n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = e.height(), n.boxPadding = e.outerWidth() - e.width(), f ? (n.itemT = n.vars.itemWidth + t, n.itemM = t, n.minW = r ? r * n.itemT : n.w, n.maxW = i ? i * n.itemT - t : n.w, n.itemW = n.minW > n.w ? (n.w - t * (r - 1)) / r : n.maxW < n.w ? (n.w - t * (i - 1)) / i : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + t * (n.count - 1) : (n.itemW + t) * n.count - n.w - t) : (n.itemW = n.w, n.itemM = t, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding, n.computedM = n.itemM
            }, n.update = function(e, t) {
                n.doMath(), f || (e < n.currentSlide ? n.currentSlide += 1 : e <= n.currentSlide && 0 !== e && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === t && !f || n.pagingCount > n.controlNav.length ? h.controlNav.update("add") : ("remove" === t && !f || n.pagingCount < n.controlNav.length) && (f && n.currentSlide > n.last && (n.currentSlide -= 1,
                    n.animatingTo -= 1), h.controlNav.update("remove", n.last))), n.vars.directionNav && h.directionNav.update()
            }, n.addSlide = function(t, r) {
                var i = e(t);
                n.count += 1, n.last = n.count - 1, p && d ? void 0 !== r ? n.slides.eq(n.count - r).after(i) : n.container.prepend(i) : void 0 !== r ? n.slides.eq(r).before(i) : n.container.append(i), n.update(r, "add"), n.slides = e(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
            }, n.removeSlide = function(t) {
                var r = isNaN(t) ? n.slides.index(e(t)) : t;
                n.count -= 1, n.last = n.count - 1, isNaN(t) ? e(t, n.slides).remove() : p && d ? n.slides.eq(n.last).remove() : n.slides.eq(t).remove(), n.doMath(), n.update(r, "remove"), n.slides = e(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
            }, h.init()
        }, e(window).blur(function(e) {
            t = !1
        }).focus(function(e) {
            t = !0
        }), e.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            fadeFirstSlide: !0,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            customDirectionNav: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            start: function() {},
            before: function() {},
            after: function() {},
            end: function() {},
            added: function() {},
            removed: function() {},
            init: function() {}
        }, e.fn.flexslider = function(t) {
            if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
                var r = e(this),
                    i = t.selector ? t.selector : ".slides > li",
                    n = r.find(i);
                1 === n.length && t.allowOneSlide === !0 || 0 === n.length ? (n.fadeIn(400), t.start && t.start(r)) : void 0 === r.data("flexslider") && new e.flexslider(this, t)
            });
            var r = e(this).data("flexslider");
            switch (t) {
                case "play":
                    r.play();
                    break;
                case "pause":
                    r.pause();
                    break;
                case "stop":
                    r.stop();
                    break;
                case "next":
                    r.flexAnimate(r.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    r.flexAnimate(r.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof t && r.flexAnimate(t, !0)
            }
        }
    }(jQuery), ! function(e) {
        var t = e(window),
            r = t.height();
        t.resize(function() {
            r = t.height()
        }), e.fn.parallax = function(i, n, o) {
            function a() {
                var o = t.scrollTop();
                u.each(function() {
                    var t = e(this),
                        a = t.offset().top,
                        c = s(t);
                    o > a + c || a > o + r || u.css("backgroundPosition", i + " " + Math.round((l - o) * n) + "px")
                })
            }
            var s, l, u = e(this);
            u.each(function() {
                l = u.offset().top
            }), s = o ? function(e) {
                return e.outerHeight(!0)
            } : function(e) {
                return e.height()
            }, (arguments.length < 1 || null === i) && (i = "50%"), (arguments.length < 2 || null === n) && (n = .1), (arguments.length < 3 || null === o) && (o = !0), t.bind("scroll", a).resize(a), a()
        }
    }(jQuery);
var ytp = ytp || {},
    getYTPVideoID = function(e) {
        var t, r;
        return e.indexOf("youtu.be") > 0 ? (t = e.substr(e.lastIndexOf("/") + 1, e.length), r = t.indexOf("?list=") > 0 ? t.substr(t.lastIndexOf("="), t.length) : null, t = r ? t.substr(0, t.lastIndexOf("?")) : t) : e.indexOf("http") > -1 ? (t = e.match(/[\\?&]v=([^&#]*)/)[1], r = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : (t = e.length > 15 ? null : e, r = t ? null : e), {
            videoID: t,
            playlistID: r
        }
    };
! function(jQuery, ytp) {
    jQuery.mbYTPlayer = {
            name: "jquery.mb.YTPlayer",
            version: "2.9.11",
            build: "5806",
            author: "Matteo Bicocchi",
            apiKey: "",
            defaults: {
                containment: "body",
                ratio: "auto",
                videoURL: null,
                playlistURL: null,
                startAt: 0,
                stopAt: 0,
                autoPlay: !0,
                vol: 50,
                addRaster: !1,
                opacity: 1,
                quality: "default",
                mute: !1,
                loop: !0,
                showControls: !0,
                showAnnotations: !1,
                showYTLogo: !0,
                stopMovieOnBlur: !0,
                realfullscreen: !0,
                gaTrack: !0,
                optimizeDisplay: !0,
                onReady: function(e) {}
            },
            controls: {
                play: "P",
                pause: "p",
                mute: "M",
                unmute: "A",
                onlyYT: "O",
                showSite: "R",
                ytLogo: "Y"
            },
            locationProtocol: "https:",
            buildPlayer: function(options) {
                return this.each(function() {
                    var YTPlayer = this,
                        $YTPlayer = jQuery(YTPlayer);
                    YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = {}, YTPlayer.filtersEnabled = !0, YTPlayer.filters = {
                        grayscale: {
                            value: 0,
                            unit: "%"
                        },
                        hue_rotate: {
                            value: 0,
                            unit: "deg"
                        },
                        invert: {
                            value: 0,
                            unit: "%"
                        },
                        opacity: {
                            value: 0,
                            unit: "%"
                        },
                        saturate: {
                            value: 0,
                            unit: "%"
                        },
                        sepia: {
                            value: 0,
                            unit: "%"
                        },
                        brightness: {
                            value: 0,
                            unit: "%"
                        },
                        contrast: {
                            value: 0,
                            unit: "%"
                        },
                        blur: {
                            value: 0,
                            unit: "px"
                        }
                    }, $YTPlayer.addClass("mb_YTPlayer");
                    var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                    "undefined" != typeof property && "undefined" != typeof property.vol && (property.vol = 0 === property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options)), "true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                    var isIframe = function() {
                        var e = !1;
                        try {
                            self.location.href != top.location.href && (e = !0)
                        } catch (t) {
                            e = !0
                        }
                        return e
                    };
                    YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()), YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + (new Date).getTime());
                    var playerID = "mbYTP_" + YTPlayer.id;
                    YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0;
                    var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : !1,
                        playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : !1;
                    YTPlayer.videoID = videoID, YTPlayer.playlistID = playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                    var playerVars = {
                        autoplay: 0,
                        modestbranding: 1,
                        controls: 0,
                        showinfo: 0,
                        rel: 0,
                        enablejsapi: 1,
                        version: 3,
                        playerapiid: playerID,
                        origin: "*",
                        allowfullscreen: !0,
                        wmode: "transparent",
                        iv_load_policy: YTPlayer.opt.showAnnotations
                    };
                    document.createElement("video").canPlayType && jQuery.extend(playerVars, {
                        html5: 1
                    }), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
                    var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox"),
                        overlay = jQuery("<div/>").css({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }).addClass("YTPOverlay");
                    if (YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                        var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
                        if (YTPlayer.canPlayOnMobile = isPlayer && 0 === jQuery(this).children().length, isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide(), jQuery.browser.mobile && !YTPlayer.canPlayOnMobile) return void $YTPlayer.remove();
                        var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                        if (wrapper.css({
                                position: "absolute",
                                zIndex: 0,
                                minWidth: "100%",
                                minHeight: "100%",
                                left: 0,
                                top: 0,
                                overflow: "hidden",
                                opacity: 0
                            }), playerBox.css({
                                position: "absolute",
                                zIndex: 0,
                                width: "100%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                overflow: "hidden"
                            }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function() {
                                "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                            }), YTPlayer.isBackground ? (jQuery("body").css({
                                boxSizing: "border-box"
                            }), wrapper.css({
                                position: "fixed",
                                top: 0,
                                left: 0,
                                zIndex: 0
                            }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
                                position: "relative"
                            }), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({
                                opacity: 1
                            }), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function() {
                                YTPlayer.controlBar && YTPlayer.controlBar.addClass("visible")
                            }).on("mouseleave", function() {
                                YTPlayer.controlBar && YTPlayer.controlBar.removeClass("visible")
                            }), ytp.YTAPIReady) setTimeout(function() {
                            jQuery(document).trigger("YTAPIReady")
                        }, 100);
                        else {
                            jQuery("#YTAPI").remove();
                            var tag = jQuery("<script></script>").attr({
                                src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                                id: "YTAPI"
                            });
                            jQuery("head").prepend(tag)
                        }
                        jQuery(document).on("YTAPIReady", function() {
                            YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? YTPlayer.isBackground ? !0 : !1 : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function() {
                                if (!YTPlayer.isInit) {
                                    if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                                        if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                                            YTPlayer.opt.containment.css({
                                                maxWidth: "100%"
                                            });
                                            var h = .6 * YTPlayer.opt.containment.outerWidth();
                                            YTPlayer.opt.containment.css({
                                                maxHeight: h
                                            })
                                        }
                                        return void new YT.Player(playerID, {
                                            videoId: YTPlayer.videoID.toString(),
                                            height: "100%",
                                            width: "100%",
                                            events: {
                                                onReady: function(e) {
                                                    YTPlayer.player = e.target, playerBox.css({
                                                        opacity: 1
                                                    }), YTPlayer.wrapper.css({
                                                        opacity: 1
                                                    })
                                                }
                                            }
                                        })
                                    }
                                    new YT.Player(playerID, {
                                        videoId: YTPlayer.videoID.toString(),
                                        playerVars: playerVars,
                                        events: {
                                            onReady: function(e) {
                                                YTPlayer.player = e.target, YTPlayer.isReady || (YTPlayer.isReady = YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ? !1 : !0, YTPlayer.playerEl = YTPlayer.player.getIframe(), jQuery(YTPlayer.playerEl).unselectable(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).off("resize.YTP").on("resize.YTP", function() {
                                                    $YTPlayer.optimizeDisplay()
                                                }), jQuery.mbYTPlayer.checkForState(YTPlayer))
                                            },
                                            onStateChange: function(event) {
                                                if ("function" == typeof event.target.getPlayerState) {
                                                    var state = event.target.getPlayerState();
                                                    if (YTPlayer.state != state) {
                                                        if (YTPlayer.preventTrigger) return void(YTPlayer.preventTrigger = !1);
                                                        YTPlayer.state = state;
                                                        var eventType;
                                                        switch (state) {
                                                            case -1:
                                                                eventType = "YTPUnstarted";
                                                                break;
                                                            case 0:
                                                                eventType = "YTPEnd";
                                                                break;
                                                            case 1:
                                                                eventType = "YTPPlay", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                                                                break;
                                                            case 2:
                                                                eventType = "YTPPause", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                                break;
                                                            case 3:
                                                                YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                                break;
                                                            case 5:
                                                                eventType = "YTPCued"
                                                        }
                                                        var YTPEvent = jQuery.Event(eventType);
                                                        YTPEvent.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPEvent)
                                                    }
                                                }
                                            },
                                            onPlaybackQualityChange: function(e) {
                                                var t = e.target.getPlaybackQuality(),
                                                    r = jQuery.Event("YTPQualityChange");
                                                r.quality = t, jQuery(YTPlayer).trigger(r)
                                            },
                                            onError: function(e) {
                                                150 == e.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e)
                                            }
                                        }
                                    })
                                }
                            }))
                        })
                    }
                })
            },
            getDataFromAPI: function(e) {
                if (e.videoData = jQuery.mbStorage.get("YTPlayer_data_" + e.videoID), jQuery(e).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function() {
                        if (e.hasData && e.isPlayer && !e.opt.autoPlay) {
                            var t = e.videoData.thumb_max || e.videoData.thumb_high || e.videoData.thumb_medium;
                            e.opt.containment.css({
                                background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                                backgroundSize: "cover"
                            }), e.opt.backgroundUrl = t
                        }
                    }), e.videoData) setTimeout(function() {
                    e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio, e.dataReceived = !0, jQuery(e).trigger("YTPChanged");
                    var t = jQuery.Event("YTPData");
                    t.prop = {};
                    for (var r in e.videoData) t.prop[r] = e.videoData[r];
                    jQuery(e).trigger(t)
                }, 500), e.hasData = !0;
                else if (jQuery.mbYTPlayer.apiKey) jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(t) {
                    function r(t) {
                        e.videoData = {}, e.videoData.id = e.videoID, e.videoData.channelTitle = t.channelTitle, e.videoData.title = t.title, e.videoData.description = t.description.length < 400 ? t.description : t.description.substring(0, 400) + " ...", e.videoData.aspectratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio, e.opt.ratio = e.videoData.aspectratio, e.videoData.thumb_max = t.thumbnails.maxres ? t.thumbnails.maxres.url : null, e.videoData.thumb_high = t.thumbnails.high ? t.thumbnails.high.url : null, e.videoData.thumb_medium = t.thumbnails.medium ? t.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + e.videoID, e.videoData)
                    }
                    e.dataReceived = !0, jQuery(e).trigger("YTPChanged"), r(t.items[0].snippet), e.hasData = !0;
                    var i = jQuery.Event("YTPData");
                    i.prop = {};
                    for (var n in e.videoData) i.prop[n] = e.videoData[n];
                    jQuery(e).trigger(i)
                });
                else {
                    if (setTimeout(function() {
                            jQuery(e).trigger("YTPChanged")
                        }, 50), e.isPlayer && !e.opt.autoPlay) {
                        var t = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + e.videoID + "/hqdefault.jpg";
                        e.opt.containment.css({
                            background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                            backgroundSize: "cover"
                        }), e.opt.backgroundUrl = t
                    }
                    e.videoData = null, e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio
                }
                e.isPlayer && !e.opt.autoPlay && (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e).append(e.loading), e.loading.fadeIn())
            },
            removeStoredData: function() {
                jQuery.mbStorage.remove()
            },
            getVideoData: function() {
                var e = this.get(0);
                return e.videoData
            },
            getVideoID: function() {
                var e = this.get(0);
                return e.videoID || !1
            },
            setVideoQuality: function(e) {
                var t = this.get(0);
                t.player.setPlaybackQuality(e)
            },
            playlist: function(e, t, r) {
                var i = this,
                    n = i.get(0);
                return n.isPlayList = !0, t && (e = jQuery.shuffle(e)), n.videoID || (n.videos = e, n.videoCounter = 0, n.videoLength = e.length, jQuery(n).data("property", e[0]), jQuery(n).mb_YTPlayer()), "function" == typeof r && jQuery(n).one("YTPChanged", function() {
                    r(n)
                }), jQuery(n).on("YTPEnd", function() {
                    jQuery(n).playNext()
                }), i
            },
            playNext: function() {
                var e = this.get(0);
                return e.videoCounter++, e.videoCounter >= e.videoLength && (e.videoCounter = 0), jQuery(e).changeMovie(e.videos[e.videoCounter]), this
            },
            playPrev: function() {
                var e = this.get(0);
                return e.videoCounter--, e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1), jQuery(e).changeMovie(e.videos[e.videoCounter]), this
            },
            changeMovie: function(e) {
                var t = this.get(0);
                t.opt.startAt = 0, t.opt.stopAt = 0, t.opt.mute = !0, t.hasData = !1, t.hasChanged = !0, t.player.loopTime = void 0, e && jQuery.extend(t.opt, t.defaultOpt, e), t.videoID = getYTPVideoID(t.opt.videoURL).videoID, "true" == t.opt.loop && (t.opt.loop = 9999), jQuery(t.playerEl).CSSAnimate({
                    opacity: 0
                }, 200, function() {
                    var e = jQuery.Event("YTPChangeMovie");
                    return e.time = t.player.time, e.videoId = t.videoID, jQuery(t).trigger(e), jQuery(t).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + t.videoID), 1, t.opt.quality), jQuery(t).optimizeDisplay(), jQuery.mbYTPlayer.checkForState(t), jQuery.mbYTPlayer.getDataFromAPI(t), this
                })
            },
            getPlayer: function() {
                return jQuery(this).get(0).player
            },
            playerDestroy: function() {
                var e = this.get(0);
                ytp.YTAPIReady = !1, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null;
                var t = e.wrapper;
                return t.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState), this
            },
            fullscreen: function(real) {
                function hideMouse() {
                    YTPlayer.overlay.css({
                        cursor: "none"
                    })
                }

                function RunPrefixMethod(e, t) {
                    for (var r, i, n = ["webkit", "moz", "ms", "o", ""], o = 0; o < n.length && !e[r];) {
                        if (r = t, "" == n[o] && (r = r.substr(0, 1).toLowerCase() + r.substr(1)), r = n[o] + r, i = typeof e[r], "undefined" != i) return n = [n[o]], "function" == i ? e[r]() : e[r];
                        o++
                    }
                }

                function launchFullscreen(e) {
                    RunPrefixMethod(e, "RequestFullScreen")
                }

                function cancelFullscreen() {
                    (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
                }
                var YTPlayer = this.get(0);
                "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
                var controls = jQuery("#controlBar_" + YTPlayer.id),
                    fullScreenBtn = controls.find(".mb_OnlyYT"),
                    videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
                if (real) {
                    var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                    jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                        var e = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                        e ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("fullscreen"), videoWrapper.CSSAnimate({
                            opacity: YTPlayer.opt.opacity
                        }, 500), videoWrapper.css({
                            zIndex: 0
                        }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                    })
                }
                return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), YTPlayer.overlay.css({
                    cursor: "auto"
                }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
                    opacity: YTPlayer.opt.opacity
                }, 500), videoWrapper.css({
                    zIndex: 0
                })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function(e) {
                    YTPlayer.overlay.css({
                        cursor: "auto"
                    }), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
                }), hideMouse(), real ? (videoWrapper.css({
                    opacity: 0
                }), videoWrapper.addClass("fullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function() {
                    videoWrapper.CSSAnimate({
                        opacity: 1
                    }, 1e3), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
                }, 500)) : videoWrapper.css({
                    zIndex: 1e4
                }).CSSAnimate({
                    opacity: 1
                }, 1e3), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0), this
            },
            toggleLoops: function() {
                var e = this.get(0),
                    t = e.opt;
                return 1 == t.loop ? t.loop = 0 : (t.startAt ? e.player.seekTo(t.startAt) : e.player.playVideo(), t.loop = 1), this
            },
            play: function() {
                var e = this.get(0);
                return e.isReady ? (e.player.playVideo(), e.wrapper.CSSAnimate({
                    opacity: e.isAlone ? 1 : e.opt.opacity
                }, 2e3), jQuery(e.playerEl).CSSAnimate({
                    opacity: 1
                }, 1e3), jQuery(e).css("background-image", "none"), this) : void 0
            },
            togglePlay: function(e) {
                var t = this.get(0);
                return 1 == t.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(t.state), this
            },
            stop: function() {
                var e = this.get(0),
                    t = jQuery("#controlBar_" + e.id),
                    r = t.find(".mb_YTPPlaypause");
                return r.html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo(), this
            },
            pause: function() {
                var e = this.get(0);
                return e.player.pauseVideo(), this
            },
            seekTo: function(e) {
                var t = this.get(0);
                return t.player.seekTo(e, !0), this
            },
            setVolume: function(e) {
                var t = this.get(0);
                return e || t.opt.vol || 0 != t.player.getVolume() ? !e && t.player.getVolume() > 0 || e && t.opt.vol == e ? t.isMute ? jQuery(t).YTPUnmute() : jQuery(t).YTPMute() : (t.opt.vol = e, t.player.setVolume(t.opt.vol), t.volumeBar && t.volumeBar.length && t.volumeBar.updateSliderVal(e)) : jQuery(t).YTPUnmute(), this
            },
            mute: function() {
                var e = this.get(0);
                if (!e.isMute) {
                    e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && e.volumeBar.width() > 10 && e.volumeBar.updateSliderVal(0);
                    var t = jQuery("#controlBar_" + e.id),
                        r = t.find(".mb_YTPMuteUnmute");
                    r.html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
                    var i = jQuery.Event("YTPMuted");
                    return i.time = e.player.time, e.canTrigger && jQuery(e).trigger(i), this
                }
            },
            unmute: function() {
                var e = this.get(0);
                if (e.isMute) {
                    e.player.unMute(), e.isMute = !1, e.player.setVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10);
                    var t = jQuery("#controlBar_" + e.id),
                        r = t.find(".mb_YTPMuteUnmute");
                    r.html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
                    var i = jQuery.Event("YTPUnmuted");
                    return i.time = e.player.time, e.canTrigger && jQuery(e).trigger(i), this
                }
            },
            applyFilter: function(e, t) {
                var r = this.get(0);
                return r.filters[e].value = t, r.filtersEnabled && this.YTPEnableFilters(), this
            },
            applyFilters: function(e) {
                var t = this.get(0);
                return this.on("YTPReady", function() {
                    for (var r in e) t.filters[r].value = e[r], jQuery(t).YTPApplyFilter(r, e[r]);
                    jQuery(t).trigger("YTPFiltersApplied")
                }), this
            },
            toggleFilter: function(e, t) {
                return this.each(function() {
                    var r = this;
                    r.filters[e].value ? r.filters[e].value = 0 : r.filters[e].value = t, r.filtersEnabled && jQuery(this).YTPEnableFilters()
                })
            },
            toggleFilters: function(e) {
                return this.each(function() {
                    var t = this;
                    t.filtersEnabled ? (jQuery(t).trigger("YTPDisableFilters"), jQuery(t).YTPDisableFilters()) : (jQuery(t).YTPEnableFilters(), jQuery(t).trigger("YTPEnableFilters")), "function" == typeof e && e(t.filtersEnabled)
                })
            },
            disableFilters: function() {
                return this.each(function() {
                    var e = this,
                        t = jQuery(e.playerEl);
                    t.css("-webkit-filter", ""), t.css("filter", ""), e.filtersEnabled = !1
                })
            },
            enableFilters: function() {
                return this.each(function() {
                    var e = this,
                        t = jQuery(e.playerEl),
                        r = "";
                    for (var i in e.filters) e.filters[i].value && (r += i.replace("_", "-") + "(" + e.filters[i].value + e.filters[i].unit + ") ");
                    t.css("-webkit-filter", r), t.css("filter", r), e.filtersEnabled = !0
                })
            },
            removeFilter: function(e, t) {
                return this.each(function() {
                    "function" == typeof e && (t = e, e = null);
                    var r = this;
                    if (e) jQuery(this).YTPApplyFilter(e, 0), "function" == typeof t && t(e);
                    else
                        for (var i in r.filters) jQuery(this).YTPApplyFilter(i, 0), "function" == typeof t && t(i)
                })
            },
            manageProgress: function() {
                var e = this.get(0),
                    t = jQuery("#controlBar_" + e.id),
                    r = t.find(".mb_YTPProgress"),
                    i = t.find(".mb_YTPLoaded"),
                    n = t.find(".mb_YTPseekbar"),
                    o = r.outerWidth(),
                    a = Math.floor(e.player.getCurrentTime()),
                    s = Math.floor(e.player.getDuration()),
                    l = a * o / s,
                    u = 0,
                    c = 100 * e.player.getVideoLoadedFraction();
                return i.css({
                    left: u,
                    width: c + "%"
                }), n.css({
                    left: 0,
                    width: l
                }), {
                    totalTime: s,
                    currentTime: a
                }
            },
            buildControls: function(YTPlayer) {
                var data = YTPlayer.opt;
                if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
                    YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                        whiteSpace: "noWrap",
                        position: YTPlayer.isBackground ? "fixed" : "absolute",
                        zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                    }).hide();
                    var buttonBar = jQuery("<div/>").addClass("buttonBar"),
                        playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function() {
                            1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
                        }),
                        MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function() {
                            0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
                        }),
                        volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                            display: "inline-block"
                        });
                    YTPlayer.volumeBar = volumeBar;
                    var idx = jQuery("<span/>").addClass("mb_YTPTime"),
                        vURL = data.videoURL ? data.videoURL : "";
                    vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
                    var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                            window.open(vURL, "viewOnYT")
                        }),
                        onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                            jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
                        }),
                        progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function(e) {
                            timeBar.css({
                                width: e.clientX - timeBar.offset().left
                            }), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                                width: 0
                            });
                            var t = Math.floor(YTPlayer.player.getDuration());
                            YTPlayer["goto"] = timeBar.outerWidth() * t / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                                width: 0
                            })
                        }),
                        loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
                        timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                    progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
                        initialval: YTPlayer.opt.vol,
                        scale: 100,
                        orientation: "h",
                        callback: function(e) {
                            0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
                        }
                    })
                }
            },
            checkForState: function(YTPlayer) {
                var interval = YTPlayer.opt.showControls ? 100 : 400;
                return clearInterval(YTPlayer.getState), jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void(YTPlayer.getState = setInterval(function() {
                    var prog = jQuery(YTPlayer).YTPManageProgress(),
                        $YTPlayer = jQuery(YTPlayer),
                        data = YTPlayer.opt,
                        startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 0,
                        stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                    if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.player.time != prog.currentTime) {
                        var YTPEvent = jQuery.Event("YTPTime");
                        YTPEvent.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(YTPEvent)
                    }
                    if (YTPlayer.player.time = prog.currentTime, 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 1.5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                        if (YTPlayer.isEnded) return;
                        if (YTPlayer.isEnded = !0, setTimeout(function() {
                                YTPlayer.isEnded = !1
                            }, 1e3), YTPlayer.isPlayList) {
                            if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) {
                                YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
                                var YTPEnd = jQuery.Event("YTPEnd");
                                return YTPEnd.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(YTPEnd), void(YTPlayer.state = 0)
                            }
                        } else if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) return YTPlayer.player.loopTime = void 0, YTPlayer.preventTrigger = !0, jQuery(YTPlayer).YTPPause(), YTPlayer.state = 0, void YTPlayer.wrapper.CSSAnimate({
                            opacity: 0
                        }, 500, function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                            var e = jQuery.Event("YTPEnd");
                            e.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(startAt, !0), YTPlayer.isBackground || YTPlayer.opt.containment.css({
                                background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.backgroundUrl + ") center center",
                                backgroundSize: "cover"
                            })
                        });
                        YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, startAt = startAt || 0, YTPlayer.preventTrigger = !0, jQuery(YTPlayer).YTPPause(), YTPlayer.player.seekTo(startAt, !0), $YTPlayer.YTPPlay()
                    }
                }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt))
            },
            checkForStart: function(e) {
                var t = jQuery(e);
                if (!jQuery.contains(document, e)) return void jQuery(e).YTPPlayerDestroy();
                if (e.preventTrigger = !0, jQuery(e).YTPPause(), jQuery(e).muteYTPVolume(), jQuery("#controlBar_" + e.id).remove(), e.opt.showControls && jQuery.mbYTPlayer.buildControls(e), e.opt.addRaster) {
                    var r = "dot" == e.opt.addRaster ? "raster-dot" : "raster";
                    e.overlay.addClass(e.isRetina ? r + " retina" : r)
                } else e.overlay.removeClass(function(e, t) {
                    var r = t.split(" "),
                        i = [];
                    return jQuery.each(r, function(e, t) {
                        /raster.*/.test(t) && i.push(t)
                    }), i.push("retina"), i.join(" ")
                });
                var i = e.opt.startAt ? e.opt.startAt : 0;
                e.player.playVideo(), e.player.seekTo(i, !0), e.checkForStartAt = setInterval(function() {
                    jQuery(e).YTPMute();
                    var r = e.player.getVideoLoadedFraction() >= i / e.player.getDuration();
                    if (e.player.getDuration() > 0 && e.player.getCurrentTime() >= i && r) {
                        clearInterval(e.checkForStartAt), e.isReady = !0, "function" == typeof e.opt.onReady && e.opt.onReady(e);
                        var n = jQuery.Event("YTPReady");
                        if (n.time = e.player.time, jQuery(e).trigger(n), e.preventTrigger = !0, jQuery(e).YTPPause(), e.opt.mute || jQuery(e).YTPUnmute(), e.canTrigger = !0, e.opt.autoPlay) {
                            t.YTPPlay();
                            var o = jQuery.Event("YTPStart");
                            o.time = e.player.time, jQuery(e).trigger(o), t.css("background-image", "none"), jQuery(e.playerEl).CSSAnimate({
                                opacity: 1
                            }, 1e3), e.wrapper.CSSAnimate({
                                opacity: e.isAlone ? 1 : e.opt.opacity
                            }, 1e3)
                        } else t.YTPPause(), e.isPlayer || (jQuery(e.playerEl).CSSAnimate({
                            opacity: 1
                        }, 500), e.wrapper.CSSAnimate({
                            opacity: e.isAlone ? 1 : e.opt.opacity
                        }, 500));
                        e.isPlayer && !e.opt.autoPlay && (e.loading.html("Ready"), setTimeout(function() {
                            e.loading.fadeOut()
                        }, 100)), e.controlBar && e.controlBar.slideDown(1e3)
                    } else jQuery.browser.safari
                }, 1)
            },
            formatTime: function(e) {
                var t = Math.floor(e / 60),
                    r = Math.floor(e - 60 * t);
                return (9 >= t ? "0" + t : t) + " : " + (9 >= r ? "0" + r : r)
            }
        }, jQuery.fn.toggleVolume = function() {
            var e = this.get(0);
            return e ? e.player.isMuted() ? (jQuery(e).YTPUnmute(), !0) : (jQuery(e).YTPMute(), !1) : void 0
        }, jQuery.fn.optimizeDisplay = function() {
            var e = this.get(0),
                t = e.opt,
                r = jQuery(e.playerEl),
                i = {},
                n = e.wrapper;
            i.width = n.outerWidth(), i.height = n.outerHeight();
            var o = 24,
                a = 100,
                s = {};
            t.optimizeDisplay ? (s.width = i.width + i.width * o / 100, s.height = "16/9" == t.ratio ? Math.ceil(9 * i.width / 16) : Math.ceil(3 * i.width / 4), s.marginTop = -((s.height - i.height) / 2), s.marginLeft = -(i.width * (o / 2) / 100), s.height < i.height && (s.height = i.height + i.height * o / 100, s.width = "16/9" == t.ratio ? Math.floor(16 * i.height / 9) : Math.floor(4 * i.height / 3), s.marginTop = -(i.height * (o / 2) / 100), s.marginLeft = -((s.width - i.width) / 2)), s.width += a, s.height += a, s.marginTop -= a / 2, s.marginLeft -= a / 2) : (s.width = "100%", s.height = "100%", s.marginTop = 0, s.marginLeft = 0), r.css({
                width: s.width,
                height: s.height,
                marginTop: s.marginTop,
                marginLeft: s.marginLeft
            })
        }, jQuery.shuffle = function(e) {
            for (var t = e.slice(), r = t.length, i = r; i--;) {
                var n = parseInt(Math.random() * r),
                    o = t[i];
                t[i] = t[n], t[n] = o
            }
            return t
        }, jQuery.fn.unselectable = function() {
            return this.each(function() {
                jQuery(this).css({
                    "-moz-user-select": "none",
                    "-webkit-user-select": "none",
                    "user-select": "none"
                }).attr("unselectable", "on")
            })
        }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen,
        jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp), jQuery.support.CSStransition = function() {
    var e = document.body || document.documentElement,
        t = e.style;
    return void 0 !== t.transition || void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.MsTransition || void 0 !== t.OTransition
}(), jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {
            min: 0,
            max: 100,
            unit: "px"
        },
        brightness: {
            min: 0,
            max: 400,
            unit: "%"
        },
        contrast: {
            min: 0,
            max: 400,
            unit: "%"
        },
        grayscale: {
            min: 0,
            max: 100,
            unit: "%"
        },
        hueRotate: {
            min: 0,
            max: 360,
            unit: "deg"
        },
        invert: {
            min: 0,
            max: 100,
            unit: "%"
        },
        saturate: {
            min: 0,
            max: 400,
            unit: "%"
        },
        sepia: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    normalizeCss: function(e) {
        var t = jQuery.extend(!0, {}, e);
        jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");
        for (var r in t) {
            "transform" === r && (t[jQuery.CSS.sfx + "transform"] = t[r], delete t[r]), "transform-origin" === r && (t[jQuery.CSS.sfx + "transform-origin"] = e[r], delete t[r]), "filter" !== r || jQuery.browser.mozilla || (t[jQuery.CSS.sfx + "filter"] = e[r], delete t[r]), "blur" === r && setFilter(t, "blur", e[r]), "brightness" === r && setFilter(t, "brightness", e[r]), "contrast" === r && setFilter(t, "contrast", e[r]), "grayscale" === r && setFilter(t, "grayscale", e[r]), "hueRotate" === r && setFilter(t, "hueRotate", e[r]), "invert" === r && setFilter(t, "invert", e[r]), "saturate" === r && setFilter(t, "saturate", e[r]), "sepia" === r && setFilter(t, "sepia", e[r]);
            var i = "";
            "x" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateX(" + setUnit(e[r], "px") + ")", delete t[r]), "y" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateY(" + setUnit(e[r], "px") + ")", delete t[r]), "z" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateZ(" + setUnit(e[r], "px") + ")", delete t[r]), "rotate" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotate(" + setUnit(e[r], "deg") + ")", delete t[r]), "rotateX" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateX(" + setUnit(e[r], "deg") + ")", delete t[r]), "rotateY" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateY(" + setUnit(e[r], "deg") + ")", delete t[r]), "rotateZ" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateZ(" + setUnit(e[r], "deg") + ")", delete t[r]), "scale" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scale(" + setUnit(e[r], "") + ")", delete t[r]), "scaleX" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleX(" + setUnit(e[r], "") + ")", delete t[r]), "scaleY" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleY(" + setUnit(e[r], "") + ")", delete t[r]), "scaleZ" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleZ(" + setUnit(e[r], "") + ")", delete t[r]), "skew" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skew(" + setUnit(e[r], "deg") + ")", delete t[r]), "skewX" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skewX(" + setUnit(e[r], "deg") + ")", delete t[r]), "skewY" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skewY(" + setUnit(e[r], "deg") + ")", delete t[r]), "perspective" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " perspective(" + setUnit(e[r], "px") + ")", delete t[r])
        }
        return t
    },
    getProp: function(e) {
        var t = [];
        for (var r in e) t.indexOf(r) < 0 && t.push(uncamel(r));
        return t.join(",")
    },
    animate: function(e, t, r, i, n) {
        return this.each(function() {
            function o() {
                a.called = !0, a.CSSAIsRunning = !1, s.off(jQuery.CSS.transitionEnd + "." + a.id), clearTimeout(a.timeout), s.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof n && n.apply(a), "function" == typeof a.CSSqueue && (a.CSSqueue(), a.CSSqueue = null)
            }
            var a = this,
                s = jQuery(this);
            a.id = a.id || "CSSA_" + (new Date).getTime();
            var l = l || {
                type: "noEvent"
            };
            if (a.CSSAIsRunning && a.eventType == l.type && !jQuery.browser.msie && jQuery.browser.version <= 9) return void(a.CSSqueue = function() {
                s.CSSAnimate(e, t, r, i, n)
            });
            if (a.CSSqueue = null, a.eventType = l.type, 0 !== s.length && e) {
                if (e = jQuery.normalizeCss(e), a.CSSAIsRunning = !0, "function" == typeof t && (n = t, t = jQuery.fx.speeds._default), "function" == typeof r && (i = r, r = 0), "string" == typeof r && (n = r, r = 0), "function" == typeof i && (n = i, i = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof t)
                    for (var u in jQuery.fx.speeds) {
                        if (t == u) {
                            t = jQuery.fx.speeds[u];
                            break
                        }
                        t = jQuery.fx.speeds._default
                    }
                if (t || (t = jQuery.fx.speeds._default), "string" == typeof n && (i = n, n = null), !jQuery.support.CSStransition) {
                    for (var c in e) {
                        if ("transform" === c && delete e[c], "filter" === c && delete e[c], "transform-origin" === c && delete e[c], "auto" === e[c] && delete e[c], "x" === c) {
                            var p = e[c],
                                d = "left";
                            e[d] = p, delete e[c]
                        }
                        if ("y" === c) {
                            var p = e[c],
                                d = "top";
                            e[d] = p, delete e[c]
                        }("-ms-transform" === c || "-ms-filter" === c) && delete e[c]
                    }
                    return void s.delay(r).animate(e, t, n)
                }
                var f = {
                    "default": "ease",
                    "in": "ease-in",
                    out: "ease-out",
                    "in-out": "ease-in-out",
                    snap: "cubic-bezier(0,1,.5,1)",
                    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                    easeInOutExpo: "cubic-bezier(1,0,0,1)",
                    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                    easeInSine: "cubic-bezier(.47,0,.745,.715)",
                    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                };
                f[i] && (i = f[i]), s.off(jQuery.CSS.transitionEnd + "." + a.id);
                var y = jQuery.CSS.getProp(e),
                    m = {};
                jQuery.extend(m, e), m[jQuery.CSS.sfx + "transition-property"] = y, m[jQuery.CSS.sfx + "transition-duration"] = t + "ms", m[jQuery.CSS.sfx + "transition-delay"] = r + "ms", m[jQuery.CSS.sfx + "transition-timing-function"] = i, setTimeout(function() {
                    s.one(jQuery.CSS.transitionEnd + "." + a.id, o), s.css(m)
                }, 1), a.timeout = setTimeout(function() {
                    return a.called || !n ? (a.called = !1, void(a.CSSAIsRunning = !1)) : (s.css(jQuery.CSS.sfx + "transition", ""), n.apply(a), a.CSSAIsRunning = !1, void("function" == typeof a.CSSqueue && (a.CSSqueue(), a.CSSqueue = null)))
                }, t + r + 10)
            }
        })
    }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function(e) {
    return this.each(function() {
        var t = jQuery(this),
            r = jQuery.normalizeCss(e);
        t.css(r)
    })
};
var nAgt = navigator.userAgent;
if (!jQuery.browser) {
    jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;
    if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
    else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
    else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
    else if (-1 != nAgt.indexOf("Trident")) {
        jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
        var start = nAgt.indexOf("rv:") + 3,
            end = start + 4;
        jQuery.browser.fullVersion = nAgt.substring(start, end)
    } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
}
jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), ! function(e) {
    /iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase());
    var t = "ontouchstart" in window || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch || !1;
    e.simpleSlider = {
        defaults: {
            initialval: 0,
            scale: 100,
            orientation: "h",
            readonly: !1,
            callback: !1
        },
        events: {
            start: t ? "touchstart" : "mousedown",
            end: t ? "touchend" : "mouseup",
            move: t ? "touchmove" : "mousemove"
        },
        init: function(r) {
            return this.each(function() {
                var i = this,
                    n = e(i);
                n.addClass("simpleSlider"), i.opt = {}, e.extend(i.opt, e.simpleSlider.defaults, r), e.extend(i.opt, n.data());
                var o = "h" == i.opt.orientation ? "horizontal" : "vertical",
                    a = e("<div/>").addClass("level").addClass(o);
                n.prepend(a), i.level = a, n.css({
                    cursor: "default"
                }), "auto" == i.opt.scale && (i.opt.scale = e(i).outerWidth()), n.updateSliderVal(), i.opt.readonly || (n.on(e.simpleSlider.events.start, function(e) {
                    t && (e = e.changedTouches[0]), i.canSlide = !0, n.updateSliderVal(e), n.css({
                        cursor: "col-resize"
                    }), e.preventDefault(), e.stopPropagation()
                }), e(document).on(e.simpleSlider.events.move, function(r) {
                    t && (r = r.changedTouches[0]), i.canSlide && (e(document).css({
                        cursor: "default"
                    }), n.updateSliderVal(r), r.preventDefault(), r.stopPropagation())
                }).on(e.simpleSlider.events.end, function() {
                    e(document).css({
                        cursor: "auto"
                    }), i.canSlide = !1, n.css({
                        cursor: "auto"
                    })
                }))
            })
        },
        updateSliderVal: function(t) {
            function r(e, t) {
                return Math.floor(100 * e / t)
            }
            var i = this,
                n = i.get(0);
            n.opt.initialval = "number" == typeof n.opt.initialval ? n.opt.initialval : n.opt.initialval(n);
            var o = e(n).outerWidth(),
                a = e(n).outerHeight();
            n.x = "object" == typeof t ? t.clientX + document.body.scrollLeft - i.offset().left : "number" == typeof t ? t * o / n.opt.scale : n.opt.initialval * o / n.opt.scale, n.y = "object" == typeof t ? t.clientY + document.body.scrollTop - i.offset().top : "number" == typeof t ? (n.opt.scale - n.opt.initialval - t) * a / n.opt.scale : n.opt.initialval * a / n.opt.scale, n.y = i.outerHeight() - n.y, n.scaleX = n.x * n.opt.scale / o, n.scaleY = n.y * n.opt.scale / a, n.outOfRangeX = n.scaleX > n.opt.scale ? n.scaleX - n.opt.scale : n.scaleX < 0 ? n.scaleX : 0, n.outOfRangeY = n.scaleY > n.opt.scale ? n.scaleY - n.opt.scale : n.scaleY < 0 ? n.scaleY : 0, n.outOfRange = "h" == n.opt.orientation ? n.outOfRangeX : n.outOfRangeY, n.value = "undefined" != typeof t ? "h" == n.opt.orientation ? n.x >= i.outerWidth() ? n.opt.scale : n.x <= 0 ? 0 : n.scaleX : n.y >= i.outerHeight() ? n.opt.scale : n.y <= 0 ? 0 : n.scaleY : "h" == n.opt.orientation ? n.scaleX : n.scaleY, "h" == n.opt.orientation ? n.level.width(r(n.x, o) + "%") : n.level.height(r(n.y, a)), "function" == typeof n.opt.callback && n.opt.callback(n)
        }
    }, e.fn.simpleSlider = e.simpleSlider.init, e.fn.updateSliderVal = e.simpleSlider.updateSliderVal
}(jQuery), ! function(e) {
    e.mbCookie = {
        set: function(e, t, r, i) {
            t = JSON.stringify(t), r || (r = 7), i = i ? "; domain=" + i : "";
            var n, o = new Date;
            o.setTime(o.getTime() + 864e5 * r), n = "; expires=" + o.toGMTString(), document.cookie = e + "=" + t + n + "; path=/" + i
        },
        get: function(e) {
            for (var t = e + "=", r = document.cookie.split(";"), i = 0; i < r.length; i++) {
                for (var n = r[i];
                    " " == n.charAt(0);) n = n.substring(1, n.length);
                if (0 == n.indexOf(t)) return JSON.parse(n.substring(t.length, n.length))
            }
            return null
        },
        remove: function(t) {
            e.mbCookie.set(t, "", -1)
        }
    }, e.mbStorage = {
        set: function(e, t) {
            t = JSON.stringify(t), localStorage.setItem(e, t)
        },
        get: function(e) {
            return localStorage[e] ? JSON.parse(localStorage[e]) : null
        },
        remove: function(e) {
            e ? localStorage.removeItem(e) : localStorage.clear()
        }
    }
}(jQuery);