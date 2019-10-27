(window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    [function(t, e, r) {
        "use strict";
        (function(t, i) {
            r.d(e, "h", function() {
                return n
            }), r.d(e, "j", function() {
                return o
            }), r.d(e, "i", function() {
                return s
            }), r.d(e, "f", function() {
                return l
            }), r.d(e, "a", function() {
                return u
            }), r.d(e, "b", function() {
                return h
            }), r.d(e, "c", function() {
                return c
            }), r.d(e, "d", function() {
                return f
            }), r.d(e, "e", function() {
                return p
            }), r.d(e, "g", function() {
                return _
            });
            /*!
             * VERSION: 2.1.2
             * DATE: 2019-03-01
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             *
             * @author: Jack Doyle, jack@greensock.com
             */
            var n = "undefined" != typeof window ? window : t.exports && void 0 !== i ? i : {},
                s = function(t) {
                    var e = {},
                        r = t.document,
                        i = t.GreenSockGlobals = t.GreenSockGlobals || t;
                    if (i.TweenLite) return i.TweenLite;
                    var n, s, o, a, l, u, h, c = function(t) {
                            var e, r = t.split("."),
                                n = i;
                            for (e = 0; e < r.length; e++) n[r[e]] = n = n[r[e]] || {};
                            return n
                        },
                        f = c("com.greensock"),
                        p = function(t) {
                            var e, r = [],
                                i = t.length;
                            for (e = 0; e !== i; r.push(t[e++]));
                            return r
                        },
                        _ = function() {},
                        d = (u = Object.prototype.toString, h = u.call([]), function(t) {
                            return null != t && (t instanceof Array || "object" == typeof t && !!t.push && u.call(t) === h)
                        }),
                        m = {},
                        v = function(t, r, n, s) {
                            this.sc = m[t] ? m[t].sc : [], m[t] = this, this.gsClass = null, this.func = n;
                            var o = [];
                            this.check = function(a) {
                                for (var l, u, h, f, p = r.length, _ = p; --p > -1;)(l = m[r[p]] || new v(r[p], [])).gsClass ? (o[p] = l.gsClass, _--) : a && l.sc.push(this);
                                if (0 === _ && n)
                                    for (h = (u = ("com.greensock." + t).split(".")).pop(), f = c(u.join("."))[h] = this.gsClass = n.apply(n, o), s && (i[h] = e[h] = f), p = 0; p < this.sc.length; p++) this.sc[p].check()
                            }, this.check(!0)
                        },
                        y = t._gsDefine = function(t, e, r, i) {
                            return new v(t, e, r, i)
                        },
                        g = f._class = function(t, e, r) {
                            return e = e || function() {}, y(t, [], function() {
                                return e
                            }, r), e
                        };
                    y.globals = i;
                    var b = [0, 0, 1, 1],
                        T = g("easing.Ease", function(t, e, r, i) {
                            this._func = t, this._type = r || 0, this._power = i || 0, this._params = e ? b.concat(e) : b
                        }, !0),
                        x = T.map = {},
                        w = T.register = function(t, e, r, i) {
                            for (var n, s, o, a, l = e.split(","), u = l.length, h = (r || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                                for (s = l[u], n = i ? g("easing." + s, null, !0) : f.easing[s] || {}, o = h.length; --o > -1;) a = h[o], x[s + "." + a] = x[a + s] = n[a] = t.getRatio ? t : t[a] || new t
                        };
                    for ((o = T.prototype)._calcEnd = !1, o.getRatio = function(t) {
                            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                            var e = this._type,
                                r = this._power,
                                i = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                            return 1 === r ? i *= i : 2 === r ? i *= i * i : 3 === r ? i *= i * i * i : 4 === r && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : t < .5 ? i / 2 : 1 - i / 2
                        }, s = (n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --s > -1;) o = n[s] + ",Power" + s, w(new T(null, null, 1, s), o, "easeOut", !0), w(new T(null, null, 2, s), o, "easeIn" + (0 === s ? ",easeNone" : "")), w(new T(null, null, 3, s), o, "easeInOut");
                    x.linear = f.easing.Linear.easeIn, x.swing = f.easing.Quad.easeInOut;
                    var E = g("events.EventDispatcher", function(t) {
                        this._listeners = {}, this._eventTarget = t || this
                    });
                    (o = E.prototype).addEventListener = function(t, e, r, i, n) {
                        n = n || 0;
                        var s, o, u = this._listeners[t],
                            h = 0;
                        for (this !== a || l || a.wake(), null == u && (this._listeners[t] = u = []), o = u.length; --o > -1;)(s = u[o]).c === e && s.s === r ? u.splice(o, 1) : 0 === h && s.pr < n && (h = o + 1);
                        u.splice(h, 0, {
                            c: e,
                            s: r,
                            up: i,
                            pr: n
                        })
                    }, o.removeEventListener = function(t, e) {
                        var r, i = this._listeners[t];
                        if (i)
                            for (r = i.length; --r > -1;)
                                if (i[r].c === e) return void i.splice(r, 1)
                    }, o.dispatchEvent = function(t) {
                        var e, r, i, n = this._listeners[t];
                        if (n)
                            for ((e = n.length) > 1 && (n = n.slice(0)), r = this._eventTarget; --e > -1;)(i = n[e]) && (i.up ? i.c.call(i.s || r, {
                                type: t,
                                target: r
                            }) : i.c.call(i.s || r))
                    };
                    var P = t.requestAnimationFrame,
                        A = t.cancelAnimationFrame,
                        R = Date.now || function() {
                            return (new Date).getTime()
                        },
                        O = R();
                    for (s = (n = ["ms", "moz", "webkit", "o"]).length; --s > -1 && !P;) P = t[n[s] + "RequestAnimationFrame"], A = t[n[s] + "CancelAnimationFrame"] || t[n[s] + "CancelRequestAnimationFrame"];
                    g("Ticker", function(t, e) {
                        var i, n, s, o, u, h = this,
                            c = R(),
                            f = !(!1 === e || !P) && "auto",
                            p = 500,
                            d = 33,
                            m = function(t) {
                                var e, r, a = R() - O;
                                a > p && (c += a - d), O += a, h.time = (O - c) / 1e3, e = h.time - u, (!i || e > 0 || !0 === t) && (h.frame++, u += e + (e >= o ? .004 : o - e), r = !0), !0 !== t && (s = n(m)), r && h.dispatchEvent("tick")
                            };
                        E.call(h), h.time = h.frame = 0, h.tick = function() {
                            m(!0)
                        }, h.lagSmoothing = function(t, e) {
                            if (!arguments.length) return p < 1e8;
                            p = t || 1e8, d = Math.min(e, p, 0)
                        }, h.sleep = function() {
                            null != s && (f && A ? A(s) : clearTimeout(s), n = _, s = null, h === a && (l = !1))
                        }, h.wake = function(t) {
                            null !== s ? h.sleep() : t ? c += -O + (O = R()) : h.frame > 10 && (O = R() - p + 5), n = 0 === i ? _ : f && P ? P : function(t) {
                                return setTimeout(t, 1e3 * (u - h.time) + 1 | 0)
                            }, h === a && (l = !0), m(2)
                        }, h.fps = function(t) {
                            if (!arguments.length) return i;
                            o = 1 / ((i = t) || 60), u = this.time + o, h.wake()
                        }, h.useRAF = function(t) {
                            if (!arguments.length) return f;
                            h.sleep(), f = t, h.fps(i)
                        }, h.fps(t), setTimeout(function() {
                            "auto" === f && h.frame < 5 && "hidden" !== (r || {}).visibilityState && h.useRAF(!1)
                        }, 1500)
                    }), (o = f.Ticker.prototype = new f.events.EventDispatcher).constructor = f.Ticker;
                    var S = g("core.Animation", function(t, e) {
                        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !!e.immediateRender, this.data = e.data, this._reversed = !!e.reversed, q) {
                            l || a.wake();
                            var r = this.vars.useFrames ? H : q;
                            r.add(this, r._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    a = S.ticker = new f.Ticker, (o = S.prototype)._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
                    var F = function() {
                        l && R() - O > 2e3 && ("hidden" !== (r || {}).visibilityState || !a.lagSmoothing()) && a.wake();
                        var t = setTimeout(F, 2e3);
                        t.unref && t.unref()
                    };
                    F(), o.play = function(t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, o.pause = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, o.resume = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!1)
                    }, o.seek = function(t, e) {
                        return this.totalTime(Number(t), !1 !== e)
                    }, o.restart = function(t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                    }, o.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, o.render = function(t, e, r) {}, o.invalidate = function() {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, o.isActive = function() {
                        var t, e = this._timeline,
                            r = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= r && t < r + this.totalDuration() / this._timeScale - 1e-8
                    }, o._enabled = function(t, e) {
                        return l || a.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                    }, o._kill = function(t, e) {
                        return this._enabled(!1, !1)
                    }, o.kill = function(t, e) {
                        return this._kill(t, e), this
                    }, o._uncache = function(t) {
                        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                        return this
                    }, o._swapSelfInParams = function(t) {
                        for (var e = t.length, r = t.concat(); --e > -1;) "{self}" === t[e] && (r[e] = this);
                        return r
                    }, o._callback = function(t) {
                        var e = this.vars,
                            r = e[t],
                            i = e[t + "Params"],
                            n = e[t + "Scope"] || e.callbackScope || this;
                        switch (i ? i.length : 0) {
                            case 0:
                                r.call(n);
                                break;
                            case 1:
                                r.call(n, i[0]);
                                break;
                            case 2:
                                r.call(n, i[0], i[1]);
                                break;
                            default:
                                r.apply(n, i)
                        }
                    }, o.eventCallback = function(t, e, r, i) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var n = this.vars;
                            if (1 === arguments.length) return n[t];
                            null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = d(r) && -1 !== r.join("").indexOf("{self}") ? this._swapSelfInParams(r) : r, n[t + "Scope"] = i), "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }, o.delay = function(t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                    }, o.duration = function(t) {
                        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, o.totalDuration = function(t) {
                        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                    }, o.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }, o.totalTime = function(t, e, r) {
                        if (l || a.wake(), !arguments.length) return this._totalTime;
                        if (this._timeline) {
                            if (t < 0 && !r && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var i = this._totalDuration,
                                    n = this._timeline;
                                if (t > i && !r && (t = i), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? i - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                                    for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (k.length && $(), this.render(t, e, !1), k.length && $())
                        }
                        return this
                    }, o.progress = o.totalProgress = function(t, e) {
                        var r = this.duration();
                        return arguments.length ? this.totalTime(r * t, e) : r ? this._time / r : this.ratio
                    }, o.startTime = function(t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                    }, o.endTime = function(t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }, o.timeScale = function(t) {
                        if (!arguments.length) return this._timeScale;
                        var e, r;
                        for (t = t || 1e-8, this._timeline && this._timeline.smoothChildTiming && (r = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = r - (r - this._startTime) * this._timeScale / t), this._timeScale = t, r = this.timeline; r && r.timeline;) r._dirty = !0, r.totalDuration(), r = r.timeline;
                        return this
                    }, o.reversed = function(t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, o.paused = function(t) {
                        if (!arguments.length) return this._paused;
                        var e, r, i = this._timeline;
                        return t != this._paused && i && (l || t || a.wake(), r = (e = i.rawTime()) - this._pauseTime, !t && i.smoothChildTiming && (this._startTime += r, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== r && this._initted && this.duration() && (e = i.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                    };
                    var M = g("core.SimpleTimeline", function(t) {
                        S.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    (o = M.prototype = new S).constructor = M, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e, r, i) {
                        var n, s;
                        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
                            for (s = t._startTime; n && n._startTime > s;) n = n._prev;
                        return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this
                    }, o._remove = function(t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, o.render = function(t, e, r) {
                        var i, n = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; n;) i = n._next, (n._active || t >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, r) : n.render((t - n._startTime) * n._timeScale, e, r)), n = i
                    }, o.rawTime = function() {
                        return l || a.wake(), this._totalTime
                    };
                    var C = g("TweenLite", function(e, r, i) {
                            if (S.call(this, r, i), this.render = C.prototype.render, null == e) throw "Cannot tween a null target.";
                            this.target = e = "string" != typeof e ? e : C.selector(e) || e;
                            var n, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                                l = this.vars.overwrite;
                            if (this._overwrite = l = null == l ? K[C.defaultOverwrite] : "number" == typeof l ? l >> 0 : K[l], (a || e instanceof Array || e.push && d(e)) && "number" != typeof e[0])
                                for (this._targets = o = p(e), this._propLookup = [], this._siblings = [], n = 0; n < o.length; n++)(s = o[n]) ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(n--, 1), this._targets = o = o.concat(p(s))) : (this._siblings[n] = Q(s, this, !1), 1 === l && this._siblings[n].length > 1 && tt(s, this, null, 1, this._siblings[n])) : "string" == typeof(s = o[n--] = C.selector(s)) && o.splice(n + 1, 1) : o.splice(n--, 1);
                            else this._propLookup = {}, this._siblings = Q(e, this, !1), 1 === l && this._siblings.length > 1 && tt(e, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === r && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-8, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        I = function(e) {
                            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                        };
                    (o = C.prototype = new S).constructor = C, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, C.version = "2.1.2", C.defaultEase = o._ease = new T(null, null, 1, 1), C.defaultOverwrite = "auto", C.ticker = a, C.autoSleep = 120, C.lagSmoothing = function(t, e) {
                        a.lagSmoothing(t, e)
                    }, C.selector = t.$ || t.jQuery || function(e) {
                        var i = t.$ || t.jQuery;
                        return i ? (C.selector = i, i(e)) : (r || (r = t.document), r ? r.querySelectorAll ? r.querySelectorAll(e) : r.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e)
                    };
                    var k = [],
                        D = {},
                        B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        U = /[\+-]=-?[\.\d]/,
                        L = function(t) {
                            for (var e, r = this._firstPT; r;) e = r.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : r.c * t + r.s, r.m ? e = r.m.call(this._tween, e, this._target || r.t, this._tween) : e < 1e-6 && e > -1e-6 && !r.blob && (e = 0), r.f ? r.fp ? r.t[r.p](r.fp, e) : r.t[r.p](e) : r.t[r.p] = e, r = r._next
                        },
                        N = function(t) {
                            return (1e3 * t | 0) / 1e3 + ""
                        },
                        j = function(t, e, r, i) {
                            var n, s, o, a, l, u, h, c = [],
                                f = 0,
                                p = "",
                                _ = 0;
                            for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", r && (r(c), t = c[0], e = c[1]), c.length = 0, n = t.match(B) || [], s = e.match(B) || [], i && (i._next = null, i.blob = 1, c._firstPT = c._applyPT = i), l = s.length, a = 0; a < l; a++) h = s[a], p += (u = e.substr(f, e.indexOf(h, f) - f)) || !a ? u : ",", f += u.length, _ ? _ = (_ + 1) % 5 : "rgba(" === u.substr(-5) && (_ = 1), h === n[a] || n.length <= a ? p += h : (p && (c.push(p), p = ""), o = parseFloat(n[a]), c.push(o), c._firstPT = {
                                _next: c._firstPT,
                                t: c,
                                p: c.length - 1,
                                s: o,
                                c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - o) || 0,
                                f: 0,
                                m: _ && _ < 4 ? Math.round : N
                            }), f += h.length;
                            return (p += e.substr(f)) && c.push(p), c.setRatio = L, U.test(e) && (c.end = null), c
                        },
                        X = function(t, e, r, i, n, s, o, a, l) {
                            "function" == typeof i && (i = i(l || 0, t));
                            var u = typeof t[e],
                                h = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                                c = "get" !== r ? r : h ? o ? t[h](o) : t[h]() : t[e],
                                f = "string" == typeof i && "=" === i.charAt(1),
                                p = {
                                    t: t,
                                    p: e,
                                    s: c,
                                    f: "function" === u,
                                    pg: 0,
                                    n: n || e,
                                    m: s ? "function" == typeof s ? s : Math.round : 0,
                                    pr: 0,
                                    c: f ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - c || 0
                                };
                            if (("number" != typeof c || "number" != typeof i && !f) && (o || isNaN(c) || !f && isNaN(i) || "boolean" == typeof c || "boolean" == typeof i ? (p.fp = o, p = {
                                    t: j(c, f ? parseFloat(p.s) + p.c + (p.s + "").replace(/[0-9\-\.]/g, "") : i, a || C.defaultStringFilter, p),
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: n || e,
                                    pr: 0,
                                    m: 0
                                }) : (p.s = parseFloat(c), f || (p.c = parseFloat(i) - p.s || 0))), p.c) return (p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p
                        },
                        z = C._internals = {
                            isArray: d,
                            isSelector: I,
                            lazyTweens: k,
                            blobDif: j
                        },
                        Y = C._plugins = {},
                        G = z.tweenLookup = {},
                        V = 0,
                        W = z.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1,
                            yoyoEase: 1,
                            stagger: 1
                        },
                        K = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            true: 1,
                            false: 0
                        },
                        H = S._rootFramesTimeline = new M,
                        q = S._rootTimeline = new M,
                        Z = 30,
                        $ = z.lazyRender = function() {
                            var t, e, r = k.length;
                            for (D = {}, t = 0; t < r; t++)(e = k[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                            k.length = 0
                        };
                    q._startTime = a.time, H._startTime = a.frame, q._active = H._active = !0, setTimeout($, 1), S._updateRoot = C.render = function() {
                        var t, e, r;
                        if (k.length && $(), q.render((a.time - q._startTime) * q._timeScale, !1, !1), H.render((a.frame - H._startTime) * H._timeScale, !1, !1), k.length && $(), a.frame >= Z) {
                            for (r in Z = a.frame + (parseInt(C.autoSleep, 10) || 120), G) {
                                for (t = (e = G[r].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete G[r]
                            }
                            if ((!(r = q._first) || r._paused) && C.autoSleep && !H._first && 1 === a._listeners.tick.length) {
                                for (; r && r._paused;) r = r._next;
                                r || a.sleep()
                            }
                        }
                    }, a.addEventListener("tick", S._updateRoot);
                    var Q = function(t, e, r) {
                            var i, n, s = t._gsTweenID;
                            if (G[s || (t._gsTweenID = s = "t" + V++)] || (G[s] = {
                                    target: t,
                                    tweens: []
                                }), e && ((i = G[s].tweens)[n = i.length] = e, r))
                                for (; --n > -1;) i[n] === e && i.splice(n, 1);
                            return G[s].tweens
                        },
                        J = function(t, e, r, i) {
                            var n, s, o = t.vars.onOverwrite;
                            return o && (n = o(t, e, r, i)), (o = C.onOverwrite) && (s = o(t, e, r, i)), !1 !== n && !1 !== s
                        },
                        tt = function(t, e, r, i, n) {
                            var s, o, a, l;
                            if (1 === i || i >= 4) {
                                for (l = n.length, s = 0; s < l; s++)
                                    if ((a = n[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                                    else if (5 === i) break;
                                return o
                            }
                            var u, h = e._startTime + 1e-8,
                                c = [],
                                f = 0,
                                p = 0 === e._duration;
                            for (s = n.length; --s > -1;)(a = n[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || et(e, 0, p), 0 === et(a, u, p) && (c[f++] = a)) : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((p || !a._initted) && h - a._startTime <= 2e-8 || (c[f++] = a)));
                            for (s = f; --s > -1;)
                                if (l = (a = c[s])._firstPT, 2 === i && a._kill(r, t, e) && (o = !0), 2 !== i || !a._firstPT && a._initted && l) {
                                    if (2 !== i && !J(a, e)) continue;
                                    a._enabled(!1, !1) && (o = !0)
                                }
                            return o
                        },
                        et = function(t, e, r) {
                            for (var i = t._timeline, n = i._timeScale, s = t._startTime; i._timeline;) {
                                if (s += i._startTime, n *= i._timeScale, i._paused) return -100;
                                i = i._timeline
                            }
                            return (s /= n) > e ? s - e : r && s === e || !t._initted && s - e < 2e-8 ? 1e-8 : (s += t.totalDuration() / t._timeScale / n) > e + 1e-8 ? 0 : s - e - 1e-8
                        };
                    o._init = function() {
                        var t, e, r, i, n, s, o = this.vars,
                            a = this._overwrittenProps,
                            l = this._duration,
                            u = !!o.immediateRender,
                            h = o.ease,
                            c = this._startAt;
                        if (o.startAt) {
                            for (i in c && (c.render(-1, !0), c.kill()), n = {}, o.startAt) n[i] = o.startAt[i];
                            if (n.data = "isStart", n.overwrite = !1, n.immediateRender = !0, n.lazy = u && !1 !== o.lazy, n.startAt = n.delay = null, n.onUpdate = o.onUpdate, n.onUpdateParams = o.onUpdateParams, n.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = C.to(this.target || {}, 0, n), u)
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== l) return
                        } else if (o.runBackwards && 0 !== l)
                            if (c) c.render(-1, !0), c.kill(), this._startAt = null;
                            else {
                                for (i in 0 !== this._time && (u = !1), r = {}, o) W[i] && "autoCSS" !== i || (r[i] = o[i]);
                                if (r.overwrite = 0, r.data = "isFromStart", r.lazy = u && !1 !== o.lazy, r.immediateRender = u, this._startAt = C.to(this.target, 0, r), u) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            }
                        if (this._ease = h = h ? h instanceof T ? h : "function" == typeof h ? new T(h, o.easeParams) : x[h] || C.defaultEase : C.defaultEase, o.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                        else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                        if (e && C._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                            for (r = this._firstPT; r;) r.s += r.c, r.c = -r.c, r = r._next;
                        this._onUpdate = o.onUpdate, this._initted = !0
                    }, o._initProps = function(e, r, i, n, s) {
                        var o, a, l, u, h, c;
                        if (null == e) return !1;
                        for (o in D[e._gsTweenID] && $(), this.vars.css || e.style && e !== t && e.nodeType && Y.css && !1 !== this.vars.autoCSS && function(t, e) {
                                var r, i = {};
                                for (r in t) W[r] || r in e && "transform" !== r && "x" !== r && "y" !== r && "width" !== r && "height" !== r && "className" !== r && "border" !== r || !(!Y[r] || Y[r] && Y[r]._autoCSS) || (i[r] = t[r], delete t[r]);
                                t.css = i
                            }(this.vars, e), this.vars)
                            if (c = this.vars[o], W[o]) c && (c instanceof Array || c.push && d(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
                            else if (Y[o] && (u = new Y[o])._onInitTween(e, this.vars[o], this, s)) {
                            for (this._firstPT = h = {
                                    _next: this._firstPT,
                                    t: u,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: o,
                                    pg: 1,
                                    pr: u._priority,
                                    m: 0
                                }, a = u._overwriteProps.length; --a > -1;) r[u._overwriteProps[a]] = this._firstPT;
                            (u._priority || u._onInitAllProps) && (l = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
                        } else r[o] = X.call(this, e, o, "get", c, o, 0, null, this.vars.stringFilter, s);
                        return n && this._kill(n, e) ? this._initProps(e, r, i, n, s) : this._overwrite > 1 && this._firstPT && i.length > 1 && tt(e, this, r, this._overwrite, i) ? (this._kill(r, e), this._initProps(e, r, i, n, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (D[e._gsTweenID] = !0), l)
                    }, o.render = function(t, e, r) {
                        var i, n, s, o, a = this._time,
                            l = this._duration,
                            u = this._rawPrevTime;
                        if (t >= l - 1e-8 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, n = "onComplete", r = r || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || r) && (this._startTime === this._timeline._duration && (t = 0), (u < 0 || t <= 0 && t >= -1e-8 || 1e-8 === u && "isPause" !== this.data) && u !== t && (r = !0, u > 1e-8 && (n = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : 1e-8);
                        else if (t < 1e-8) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (n = "onReverseComplete", i = this._reversed), t > -1e-8 ? t = 0 : t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || r) && (u >= 0 && (1e-8 !== u || "isPause" !== this.data) && (r = !0), this._rawPrevTime = o = !e || t || u === t ? t : 1e-8)), (!this._initted || this._startAt && this._startAt.progress()) && (r = !0);
                        else if (this._totalTime = this._time = t, this._easeType) {
                            var h = t / l,
                                c = this._easeType,
                                f = this._easePower;
                            (1 === c || 3 === c && h >= .5) && (h = 1 - h), 3 === c && (h *= 2), 1 === f ? h *= h : 2 === f ? h *= h * h : 3 === f ? h *= h * h * h : 4 === f && (h *= h * h * h * h), this.ratio = 1 === c ? 1 - h : 2 === c ? h : t / l < .5 ? h / 2 : 1 - h / 2
                        } else this.ratio = this._ease.getRatio(t / l);
                        if (this._time !== a || r) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!r && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, k.push(this), void(this._lazy = [t, e]);
                                this._time && !i ? this.ratio = this._ease.getRatio(this._time / l) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, r) : n || (n = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                            this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, r), e || (this._time !== a || i || r) && this._callback("onUpdate")), n && (this._gc && !r || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, r), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === l && 1e-8 === this._rawPrevTime && 1e-8 !== o && (this._rawPrevTime = 0)))
                        }
                    }, o._kill = function(t, e, r) {
                        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : C.selector(e) || e;
                        var i, n, s, o, a, l, u, h, c, f = r && this._time && r._startTime === this._startTime && this._timeline === r._timeline,
                            p = this._firstPT;
                        if ((d(e) || I(e)) && "number" != typeof e[0])
                            for (i = e.length; --i > -1;) this._kill(t, e[i], r) && (l = !0);
                        else {
                            if (this._targets) {
                                for (i = this._targets.length; --i > -1;)
                                    if (e === this._targets[i]) {
                                        a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                                        break
                                    }
                            } else {
                                if (e !== this.target) return !1;
                                a = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (a) {
                                if (u = t || a, h = t !== n && "all" !== n && t !== a && ("object" != typeof t || !t._tempKill), r && (C.onOverwrite || this.vars.onOverwrite)) {
                                    for (s in u) a[s] && (c || (c = []), c.push(s));
                                    if ((c || !t) && !J(this, r, e, c)) return !1
                                }
                                for (s in u)(o = a[s]) && (f && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), h && (n[s] = 1);
                                !this._firstPT && this._initted && p && this._enabled(!1, !1)
                            }
                        }
                        return l
                    }, o.invalidate = function() {
                        this._notifyPluginsOfEnabled && C._onPluginEvent("_onDisable", this);
                        var t = this._time;
                        return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], S.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-8, this.render(t, !1, !1 !== this.vars.lazy)), this
                    }, o._enabled = function(t, e) {
                        if (l || a.wake(), t && this._gc) {
                            var r, i = this._targets;
                            if (i)
                                for (r = i.length; --r > -1;) this._siblings[r] = Q(i[r], this, !0);
                            else this._siblings = Q(this.target, this, !0)
                        }
                        return S.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && C._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    }, C.to = function(t, e, r) {
                        return new C(t, e, r)
                    }, C.from = function(t, e, r) {
                        return r.runBackwards = !0, r.immediateRender = 0 != r.immediateRender, new C(t, e, r)
                    }, C.fromTo = function(t, e, r, i) {
                        return i.startAt = r, i.immediateRender = 0 != i.immediateRender && 0 != r.immediateRender, new C(t, e, i)
                    }, C.delayedCall = function(t, e, r, i, n) {
                        return new C(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: r,
                            callbackScope: i,
                            onReverseComplete: e,
                            onReverseCompleteParams: r,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: n,
                            overwrite: 0
                        })
                    }, C.set = function(t, e) {
                        return new C(t, 0, e)
                    }, C.getTweensOf = function(t, e) {
                        if (null == t) return [];
                        var r, i, n, s;
                        if (t = "string" != typeof t ? t : C.selector(t) || t, (d(t) || I(t)) && "number" != typeof t[0]) {
                            for (r = t.length, i = []; --r > -1;) i = i.concat(C.getTweensOf(t[r], e));
                            for (r = i.length; --r > -1;)
                                for (s = i[r], n = r; --n > -1;) s === i[n] && i.splice(r, 1)
                        } else if (t._gsTweenID)
                            for (r = (i = Q(t).concat()).length; --r > -1;)(i[r]._gc || e && !i[r].isActive()) && i.splice(r, 1);
                        return i || []
                    }, C.killTweensOf = C.killDelayedCallsTo = function(t, e, r) {
                        "object" == typeof e && (r = e, e = !1);
                        for (var i = C.getTweensOf(t, e), n = i.length; --n > -1;) i[n]._kill(r, t)
                    };
                    var rt = g("plugins.TweenPlugin", function(t, e) {
                        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = rt.prototype
                    }, !0);
                    if (o = rt.prototype, rt.version = "1.19.0", rt.API = 2, o._firstPT = null, o._addTween = X, o.setRatio = L, o._kill = function(t) {
                            var e, r = this._overwriteProps,
                                i = this._firstPT;
                            if (null != t[this._propName]) this._overwriteProps = [];
                            else
                                for (e = r.length; --e > -1;) null != t[r[e]] && r.splice(e, 1);
                            for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
                            return !1
                        }, o._mod = o._roundProps = function(t) {
                            for (var e, r = this._firstPT; r;)(e = t[this._propName] || null != r.n && t[r.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === r.f ? r.t._applyPT.m = e : r.m = e), r = r._next
                        }, C._onPluginEvent = function(t, e) {
                            var r, i, n, s, o, a = e._firstPT;
                            if ("_onInitAllProps" === t) {
                                for (; a;) {
                                    for (o = a._next, i = n; i && i.pr > a.pr;) i = i._next;
                                    (a._prev = i ? i._prev : s) ? a._prev._next = a: n = a, (a._next = i) ? i._prev = a : s = a, a = o
                                }
                                a = e._firstPT = n
                            }
                            for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (r = !0), a = a._next;
                            return r
                        }, rt.activate = function(t) {
                            for (var e = t.length; --e > -1;) t[e].API === rt.API && (Y[(new t[e])._propName] = t[e]);
                            return !0
                        }, y.plugin = function(t) {
                            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                            var e, r = t.propName,
                                i = t.priority || 0,
                                n = t.overwriteProps,
                                s = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_mod",
                                    mod: "_mod",
                                    initAll: "_onInitAllProps"
                                },
                                o = g("plugins." + r.charAt(0).toUpperCase() + r.substr(1) + "Plugin", function() {
                                    rt.call(this, r, i), this._overwriteProps = n || []
                                }, !0 === t.global),
                                a = o.prototype = new rt(r);
                            for (e in a.constructor = o, o.API = t.API, s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                            return o.version = t.version, rt.activate([o]), o
                        }, n = t._gsQueue) {
                        for (s = 0; s < n.length; s++) n[s]();
                        for (o in m) m[o].func || t.console.log("GSAP encountered missing dependency: " + o)
                    }
                    return l = !1, C
                }(n),
                o = n.GreenSockGlobals,
                a = o.com.greensock,
                l = a.core.SimpleTimeline,
                u = a.core.Animation,
                h = o.Ease,
                c = o.Linear,
                f = (o.Power1, o.Power2),
                p = o.Power3,
                _ = (o.Power4, o.TweenPlugin);
            a.events.EventDispatcher
        }).call(this, r(14)(t), r(6))
    }, function(t, e, r) {
        "use strict";
        var i = r(0),
            n = r(7);
        /*!
         * VERSION: 2.1.0
         * DATE: 2019-02-15
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         */
        i.h._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function() {
            var t, e, r, n, s = function() {
                    i.g.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
                },
                o = i.h._gsDefine.globals,
                a = {},
                l = s.prototype = new i.g("css");
            l.constructor = s, s.version = "2.1.0", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, l = "px", s.suffixMap = {
                top: l,
                right: l,
                bottom: l,
                left: l,
                width: l,
                height: l,
                fontSize: l,
                padding: l,
                margin: l,
                perspective: l,
                lineHeight: ""
            };
            var u, h, c, f, p, _, d, m, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                T = /(?:\d|\-|\+|=|#|\.)*/g,
                x = /opacity *= *([^)]*)/i,
                w = /opacity:([^;]*)/i,
                E = /alpha\(opacity *=.+?\)/i,
                P = /^(rgb|hsl)/,
                A = /([A-Z])/g,
                R = /-([a-z])/gi,
                O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                S = function(t, e) {
                    return e.toUpperCase()
                },
                F = /(?:Left|Right|Width)/i,
                M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                C = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                I = /,(?=[^\)]*(?:\(|$))/gi,
                k = /[\s,\(]/i,
                D = Math.PI / 180,
                B = 180 / Math.PI,
                U = {},
                L = {
                    style: {}
                },
                N = i.h.document || {
                    createElement: function() {
                        return L
                    }
                },
                j = function(t, e) {
                    return e && N.createElementNS ? N.createElementNS(e, t) : N.createElement(t)
                },
                X = j("div"),
                z = j("img"),
                Y = s._internals = {
                    _specialProps: a
                },
                G = (i.h.navigator || {}).userAgent || "",
                V = function() {
                    var t = G.indexOf("Android"),
                        e = j("a");
                    return c = -1 !== G.indexOf("Safari") && -1 === G.indexOf("Chrome") && (-1 === t || parseFloat(G.substr(t + 8, 2)) > 3), p = c && parseFloat(G.substr(G.indexOf("Version/") + 8, 2)) < 6, f = -1 !== G.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(G) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(G)) && (_ = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                }(),
                W = function(t) {
                    return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                K = function(t) {
                    i.h.console && console.log(t)
                },
                H = "",
                q = "",
                Z = function(t, e) {
                    var r, i, n = (e = e || X).style;
                    if (void 0 !== n[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), r = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === n[r[i] + t];);
                    return i >= 0 ? (H = "-" + (q = 3 === i ? "ms" : r[i]).toLowerCase() + "-", q + t) : null
                },
                $ = "undefined" != typeof window ? window : N.defaultView || {
                    getComputedStyle: function() {}
                },
                Q = function(t) {
                    return $.getComputedStyle(t)
                },
                J = s.getStyle = function(t, e, r, i, n) {
                    var s;
                    return V || "opacity" !== e ? (!i && t.style[e] ? s = t.style[e] : (r = r || Q(t)) ? s = r[e] || r.getPropertyValue(e) || r.getPropertyValue(e.replace(A, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == n || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : n) : W(t)
                },
                tt = Y.convertToPixels = function(t, e, r, n, o) {
                    if ("px" === n || !n && "lineHeight" !== e) return r;
                    if ("auto" === n || !r) return 0;
                    var a, l, u, h = F.test(e),
                        c = t,
                        f = X.style,
                        p = r < 0,
                        _ = 1 === r;
                    if (p && (r = -r), _ && (r *= 100), "lineHeight" !== e || n)
                        if ("%" === n && -1 !== e.indexOf("border")) a = r / 100 * (h ? t.clientWidth : t.clientHeight);
                        else {
                            if (f.cssText = "border:0 solid red;position:" + J(t, "position") + ";line-height:0;", "%" !== n && c.appendChild && "v" !== n.charAt(0) && "rem" !== n) f[h ? "borderLeftWidth" : "borderTopWidth"] = r + n;
                            else {
                                if (c = t.parentNode || N.body, -1 !== J(c, "display").indexOf("flex") && (f.position = "absolute"), l = c._gsCache, u = i.i.ticker.frame, l && h && l.time === u) return l.width * r / 100;
                                f[h ? "width" : "height"] = r + n
                            }
                            c.appendChild(X), a = parseFloat(X[h ? "offsetWidth" : "offsetHeight"]), c.removeChild(X), h && "%" === n && !1 !== s.cacheWidths && ((l = c._gsCache = c._gsCache || {}).time = u, l.width = a / r * 100), 0 !== a || o || (a = tt(t, e, r, n, !0))
                        }
                    else l = Q(t).lineHeight, t.style.lineHeight = r, a = parseFloat(Q(t).lineHeight), t.style.lineHeight = l;
                    return _ && (a /= 100), p ? -a : a
                },
                et = Y.calculateOffset = function(t, e, r) {
                    if ("absolute" !== J(t, "position", r)) return 0;
                    var i = "left" === e ? "Left" : "Top",
                        n = J(t, "margin" + i, r);
                    return t["offset" + i] - (tt(t, e, parseFloat(n), n.replace(T, "")) || 0)
                },
                rt = function(t, e) {
                    var r, i, n, s = {};
                    if (e = e || Q(t))
                        if (r = e.length)
                            for (; --r > -1;) - 1 !== (n = e[r]).indexOf("-transform") && It !== n || (s[n.replace(R, S)] = e.getPropertyValue(n));
                        else
                            for (r in e) - 1 !== r.indexOf("Transform") && Ct !== r || (s[r] = e[r]);
                    else if (e = t.currentStyle || t.style)
                        for (r in e) "string" == typeof r && void 0 === s[r] && (s[r.replace(R, S)] = e[r]);
                    return V || (s.opacity = W(t)), i = Wt(t, e, !1), s.rotation = i.rotation, s.skewX = i.skewX, s.scaleX = i.scaleX, s.scaleY = i.scaleY, s.x = i.x, s.y = i.y, Dt && (s.z = i.z, s.rotationX = i.rotationX, s.rotationY = i.rotationY, s.scaleZ = i.scaleZ), s.filters && delete s.filters, s
                },
                it = function(t, e, r, i, n) {
                    var s, o, a, l = {},
                        u = t.style;
                    for (o in r) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = r[o]) || n && n[o]) && -1 === o.indexOf("Origin") && ("number" != typeof s && "string" != typeof s || (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(b, "") ? s : 0 : et(t, o), void 0 !== u[o] && (a = new yt(u, o, u[o], a))));
                    if (i)
                        for (o in i) "className" !== o && (l[o] = i[o]);
                    return {
                        difs: l,
                        firstMPT: a
                    }
                },
                nt = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                st = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ot = function(t, e, r) {
                    if ("svg" === (t.nodeName + "").toLowerCase()) return (r || Q(t))[e] || 0;
                    if (t.getCTM && Yt(t)) return t.getBBox()[e] || 0;
                    var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        n = nt[e],
                        s = n.length;
                    for (r = r || Q(t); --s > -1;) i -= parseFloat(J(t, "padding" + n[s], r, !0)) || 0, i -= parseFloat(J(t, "border" + n[s] + "Width", r, !0)) || 0;
                    return i
                },
                at = function(t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    null != t && "" !== t || (t = "0 0");
                    var r, i = t.split(" "),
                        n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    if (i.length > 3 && !e) {
                        for (i = t.split(", ").join(",").split(","), t = [], r = 0; r < i.length; r++) t.push(at(i[r]));
                        return t.join(",")
                    }
                    return null == s ? s = "center" === n ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + s + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(n.replace(b, "")), e.oy = parseFloat(s.replace(b, "")), e.v = t), e || t
                },
                lt = function(t, e) {
                    return "function" == typeof t && (t = t(m, d)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                },
                ut = function(t, e) {
                    "function" == typeof t && (t = t(m, d));
                    var r = "string" == typeof t && "=" === t.charAt(1);
                    return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (r ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(r ? t.substr(2) : t) / 100)), null == t ? e : r ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                },
                ht = function(t, e, r, i) {
                    var n, s, o, a;
                    return "function" == typeof t && (t = t(m, d)), null == t ? o = e : "number" == typeof t ? o = t : (360, n = t.split("_"), s = ((a = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : B) - (a ? 0 : e), n.length && (i && (i[r] = e + s), -1 !== t.indexOf("short") && (s %= 360) !== s % 180 && (s = s < 0 ? s + 360 : s - 360), -1 !== t.indexOf("_cw") && s < 0 ? s = (s + 3599999999640) % 360 - 360 * (s / 360 | 0) : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 3599999999640) % 360 - 360 * (s / 360 | 0))), o = e + s), o < 1e-6 && o > -1e-6 && (o = 0), o
                },
                ct = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                ft = function(t, e, r) {
                    return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                },
                pt = s.parseColor = function(t, e) {
                    var r, i, n, s, o, a, l, u, h, c, f;
                    if (t)
                        if ("number" == typeof t) r = [t >> 16, t >> 8 & 255, 255 & t];
                        else {
                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ct[t]) r = ct[t];
                            else if ("#" === t.charAt(0)) 4 === t.length && (i = t.charAt(1), n = t.charAt(2), s = t.charAt(3), t = "#" + i + i + n + n + s + s), r = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                            else if ("hsl" === t.substr(0, 3))
                                if (r = f = t.match(v), e) {
                                    if (-1 !== t.indexOf("=")) return t.match(y)
                                } else o = Number(r[0]) % 360 / 360, a = Number(r[1]) / 100, i = 2 * (l = Number(r[2]) / 100) - (n = l <= .5 ? l * (a + 1) : l + a - l * a), r.length > 3 && (r[3] = Number(r[3])), r[0] = ft(o + 1 / 3, i, n), r[1] = ft(o, i, n), r[2] = ft(o - 1 / 3, i, n);
                            else r = t.match(v) || ct.transparent;
                            r[0] = Number(r[0]), r[1] = Number(r[1]), r[2] = Number(r[2]), r.length > 3 && (r[3] = Number(r[3]))
                        }
                    else r = ct.black;
                    return e && !f && (i = r[0] / 255, n = r[1] / 255, s = r[2] / 255, l = ((u = Math.max(i, n, s)) + (h = Math.min(i, n, s))) / 2, u === h ? o = a = 0 : (c = u - h, a = l > .5 ? c / (2 - u - h) : c / (u + h), o = u === i ? (n - s) / c + (n < s ? 6 : 0) : u === n ? (s - i) / c + 2 : (i - n) / c + 4, o *= 60), r[0] = o + .5 | 0, r[1] = 100 * a + .5 | 0, r[2] = 100 * l + .5 | 0), r
                },
                _t = function(t, e) {
                    var r, i, n, s = t.match(dt) || [],
                        o = 0,
                        a = "";
                    if (!s.length) return t;
                    for (r = 0; r < s.length; r++) i = s[r], o += (n = t.substr(o, t.indexOf(i, o) - o)).length + i.length, 3 === (i = pt(i, e)).length && i.push(1), a += n + (e ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
                    return a + t.substr(o)
                },
                dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (l in ct) dt += "|" + l + "\\b";
            dt = new RegExp(dt + ")", "gi"), s.colorStringFilter = function(t) {
                var e, r = t[0] + " " + t[1];
                dt.test(r) && (e = -1 !== r.indexOf("hsl(") || -1 !== r.indexOf("hsla("), t[0] = _t(t[0], e), t[1] = _t(t[1], e)), dt.lastIndex = 0
            }, i.i.defaultStringFilter || (i.i.defaultStringFilter = s.colorStringFilter);
            var mt = function(t, e, r, i) {
                    if (null == t) return function(t) {
                        return t
                    };
                    var n, s = e ? (t.match(dt) || [""])[0] : "",
                        o = t.split(s).join("").match(g) || [],
                        a = t.substr(0, t.indexOf(o[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        u = -1 !== t.indexOf(" ") ? " " : ",",
                        h = o.length,
                        c = h > 0 ? o[0].replace(v, "") : "";
                    return h ? n = e ? function(t) {
                        var e, f, p, _;
                        if ("number" == typeof t) t += c;
                        else if (i && I.test(t)) {
                            for (_ = t.replace(I, "|").split("|"), p = 0; p < _.length; p++) _[p] = n(_[p]);
                            return _.join(",")
                        }
                        if (e = (t.match(dt) || [s])[0], p = (f = t.split(e).join("").match(g) || []).length, h > p--)
                            for (; ++p < h;) f[p] = r ? f[(p - 1) / 2 | 0] : o[p];
                        return a + f.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, s, f;
                        if ("number" == typeof t) t += c;
                        else if (i && I.test(t)) {
                            for (s = t.replace(I, "|").split("|"), f = 0; f < s.length; f++) s[f] = n(s[f]);
                            return s.join(",")
                        }
                        if (f = (e = t.match(g) || []).length, h > f--)
                            for (; ++f < h;) e[f] = r ? e[(f - 1) / 2 | 0] : o[f];
                        return a + e.join(u) + l
                    } : function(t) {
                        return t
                    }
                },
                vt = function(t) {
                    return t = t.split(","),
                        function(e, r, i, n, s, o, a) {
                            var l, u = (r + "").split(" ");
                            for (a = {}, l = 0; l < 4; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                            return n.parse(e, a, s, o)
                        }
                },
                yt = (Y._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, r, i, n, s, o = this.data, a = o.proxy, l = o.firstMPT; l;) e = a[l.v], l.r ? e = l.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                    if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation), 1 === t || 0 === t)
                        for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                            if ((r = l.t).type) {
                                if (1 === r.type) {
                                    for (n = r.xs0 + r.s + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                    r[s] = n
                                }
                            } else r[s] = r.s + r.xs0;
                            l = l._next
                        }
                }, function(t, e, r, i, n) {
                    this.t = t, this.p = e, this.v = r, this.r = n, i && (i._prev = this, this._next = i)
                }),
                gt = (Y._parseToProxy = function(t, e, r, i, n, s) {
                    var o, a, l, u, h, c = i,
                        f = {},
                        p = {},
                        _ = r._transform,
                        d = U;
                    for (r._transform = null, U = e, i = h = r.parse(t, e, i, n), U = d, s && (r._transform = _, c && (c._prev = null, c._prev && (c._prev._next = null))); i && i !== c;) {
                        if (i.type <= 1 && (p[a = i.p] = i.s + i.c, f[a] = i.s, s || (u = new yt(i, "s", a, u, i.r), i.c = 0), 1 === i.type))
                            for (o = i.l; --o > 0;) l = "xn" + o, p[a = i.p + "_" + l] = i.data[l], f[a] = i[l], s || (u = new yt(i, l, a, u, i.rxp[l]));
                        i = i._next
                    }
                    return {
                        proxy: f,
                        end: p,
                        firstMPT: u,
                        pt: h
                    }
                }, Y.CSSPropTween = function(e, r, i, s, o, a, l, u, h, c, f) {
                    this.t = e, this.p = r, this.s = i, this.c = s, this.n = l || r, e instanceof gt || n.push(this.n), this.r = u ? "function" == typeof u ? u : Math.round : u, this.type = a || 0, h && (this.pr = h, t = !0), this.b = void 0 === c ? i : c, this.e = void 0 === f ? i + s : f, o && (this._next = o, o._prev = this)
                }),
                bt = function(t, e, r, i, n, s) {
                    var o = new gt(t, e, r, i - r, n, -1, s);
                    return o.b = r, o.e = o.xs0 = i, o
                },
                Tt = s.parseComplex = function(t, e, r, i, n, o, a, l, h, c) {
                    r = r || o || "", "function" == typeof i && (i = i(m, d)), a = new gt(t, e, 0, 0, a, c ? 2 : 1, null, !1, l, r, i), i += "", n && dt.test(i + r) && (i = [r, i], s.colorStringFilter(i), r = i[0], i = i[1]);
                    var f, p, _, g, b, T, x, w, E, P, A, R, O, S = r.split(", ").join(",").split(" "),
                        F = i.split(", ").join(",").split(" "),
                        M = S.length,
                        C = !1 !== u;
                    for (-1 === i.indexOf(",") && -1 === r.indexOf(",") || (-1 !== (i + r).indexOf("rgb") || -1 !== (i + r).indexOf("hsl") ? (S = S.join(" ").replace(I, ", ").split(" "), F = F.join(" ").replace(I, ", ").split(" ")) : (S = S.join(" ").split(",").join(", ").split(" "), F = F.join(" ").split(",").join(", ").split(" ")), M = S.length), M !== F.length && (M = (S = (o || "").split(" ")).length), a.plugin = h, a.setRatio = c, dt.lastIndex = 0, f = 0; f < M; f++)
                        if (g = S[f], b = F[f] + "", (w = parseFloat(g)) || 0 === w) a.appendXtra("", w, lt(b, w), b.replace(y, ""), !(!C || -1 === b.indexOf("px")) && Math.round, !0);
                        else if (n && dt.test(g)) R = ")" + ((R = b.indexOf(")") + 1) ? b.substr(R) : ""), O = -1 !== b.indexOf("hsl") && V, P = b, g = pt(g, O), b = pt(b, O), (E = g.length + b.length > 6) && !V && 0 === b[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(F[f]).join("transparent")) : (V || (E = !1), O ? a.appendXtra(P.substr(0, P.indexOf("hsl")) + (E ? "hsla(" : "hsl("), g[0], lt(b[0], g[0]), ",", !1, !0).appendXtra("", g[1], lt(b[1], g[1]), "%,", !1).appendXtra("", g[2], lt(b[2], g[2]), E ? "%," : "%" + R, !1) : a.appendXtra(P.substr(0, P.indexOf("rgb")) + (E ? "rgba(" : "rgb("), g[0], b[0] - g[0], ",", Math.round, !0).appendXtra("", g[1], b[1] - g[1], ",", Math.round).appendXtra("", g[2], b[2] - g[2], E ? "," : R, Math.round), E && (g = g.length < 4 ? 1 : g[3], a.appendXtra("", g, (b.length < 4 ? 1 : b[3]) - g, R, !1))), dt.lastIndex = 0;
                    else if (T = g.match(v)) {
                        if (!(x = b.match(y)) || x.length !== T.length) return a;
                        for (_ = 0, p = 0; p < T.length; p++) A = T[p], P = g.indexOf(A, _), a.appendXtra(g.substr(_, P - _), Number(A), lt(x[p], A), "", !(!C || "px" !== g.substr(P + A.length, 2)) && Math.round, 0 === p), _ = P + A.length;
                        a["xs" + a.l] += g.substr(_)
                    } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + b : b;
                    if (-1 !== i.indexOf("=") && a.data) {
                        for (R = a.xs0 + a.data.s, f = 1; f < a.l; f++) R += a["xs" + f] + a.data["xn" + f];
                        a.e = R + a["xs" + f]
                    }
                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                },
                xt = 9;
            for ((l = gt.prototype).l = l.pr = 0; --xt > 0;) l["xn" + xt] = 0, l["xs" + xt] = "";
            l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, r, i, n, s) {
                var o = this,
                    a = o.l;
                return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "", r || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = i || "", a > 0 ? (o.data["xn" + a] = e + r, o.rxp["xn" + a] = n, o["xn" + a] = e, o.plugin || (o.xfirst = new gt(o, "xn" + a, e, r, o.xfirst || o, 0, o.n, n, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                    s: e + r
                }, o.rxp = {}, o.s = e, o.c = r, o.r = n, o)) : (o["xs" + a] += e + (i || ""), o)
            };
            var wt = function(t, e) {
                    e = e || {}, this.p = e.prefix && Z(t) || t, a[t] = a[this.p] = this, this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.allowFunc = e.allowFunc, this.pr = e.priority || 0
                },
                Et = Y._registerComplexSpecialProp = function(t, e, r) {
                    "object" != typeof e && (e = {
                        parser: r
                    });
                    var i, n = t.split(","),
                        s = e.defaultValue;
                    for (r = r || [s], i = 0; i < n.length; i++) e.prefix = 0 === i && e.prefix, e.defaultValue = r[i] || s, new wt(n[i], e)
                },
                Pt = Y._registerPluginProp = function(t) {
                    if (!a[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        Et(t, {
                            parser: function(t, r, i, n, s, l, u) {
                                var h = o.com.greensock.plugins[e];
                                return h ? (h._cssRegister(), a[i].parse(t, r, i, n, s, l, u)) : (K("Error: " + e + " js file not loaded."), s)
                            }
                        })
                    }
                };
            (l = wt.prototype).parseComplex = function(t, e, r, i, n, s) {
                var o, a, l, u, h, c, f = this.keyword;
                if (this.multi && (I.test(r) || I.test(e) ? (a = e.replace(I, "|").split("|"), l = r.replace(I, "|").split("|")) : f && (a = [e], l = [r])), l) {
                    for (u = l.length > a.length ? l.length : a.length, o = 0; o < u; o++) e = a[o] = a[o] || this.dflt, r = l[o] = l[o] || this.dflt, f && (h = e.indexOf(f)) !== (c = r.indexOf(f)) && (-1 === c ? a[o] = a[o].split(f).join("") : -1 === h && (a[o] += " " + f));
                    e = a.join(", "), r = l.join(", ")
                }
                return Tt(t, this.p, e, r, this.clrs, this.dflt, i, this.pr, n, s)
            }, l.parse = function(t, e, i, n, s, o, a) {
                return this.parseComplex(t.style, this.format(J(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
            }, s.registerSpecialProp = function(t, e, r) {
                Et(t, {
                    parser: function(t, i, n, s, o, a, l) {
                        var u = new gt(t, n, 0, 0, o, 2, n, !1, r);
                        return u.plugin = a, u.setRatio = e(t, i, s._tween, n), u
                    },
                    priority: r
                })
            }, s.useSVGTransformAttr = !0;
            var At, Rt, Ot, St, Ft, Mt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Ct = Z("transform"),
                It = H + "transform",
                kt = Z("transformOrigin"),
                Dt = null !== Z("perspective"),
                Bt = Y.Transform = function() {
                    this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(!1 === s.defaultForce3D || !Dt) && (s.defaultForce3D || "auto")
                },
                Ut = i.h.SVGElement,
                Lt = function(t, e, r) {
                    var i, n = N.createElementNS("http://www.w3.org/2000/svg", t),
                        s = /([a-z])([A-Z])/g;
                    for (i in r) n.setAttributeNS(null, i.replace(s, "$1-$2").toLowerCase(), r[i]);
                    return e.appendChild(n), n
                },
                Nt = N.documentElement || {},
                jt = (Ft = _ || /Android/i.test(G) && !i.h.chrome, N.createElementNS && !Ft && (Rt = Lt("svg", Nt), St = (Ot = Lt("rect", Rt, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, Ot.style[kt] = "50% 50%", Ot.style[Ct] = "scaleX(0.5)", Ft = St === Ot.getBoundingClientRect().width && !(f && Dt), Nt.removeChild(Rt)), Ft),
                Xt = function(t, e, r, i, n, o) {
                    var a, l, u, h, c, f, p, _, d, m, v, y, g, b, T = t._gsTransform,
                        x = Vt(t, !0);
                    T && (g = T.xOrigin, b = T.yOrigin), (!i || (a = i.split(" ")).length < 2) && (0 === (p = t.getBBox()).x && 0 === p.y && p.width + p.height === 0 && (p = {
                        x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                        y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                        width: 0,
                        height: 0
                    }), a = [(-1 !== (e = at(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), r.xOrigin = h = parseFloat(a[0]), r.yOrigin = c = parseFloat(a[1]), i && x !== Gt && (f = x[0], p = x[1], _ = x[2], d = x[3], m = x[4], v = x[5], (y = f * d - p * _) && (l = h * (d / y) + c * (-_ / y) + (_ * v - d * m) / y, u = h * (-p / y) + c * (f / y) - (f * v - p * m) / y, h = r.xOrigin = a[0] = l, c = r.yOrigin = a[1] = u)), T && (o && (r.xOffset = T.xOffset, r.yOffset = T.yOffset, T = r), n || !1 !== n && !1 !== s.defaultSmoothOrigin ? (l = h - g, u = c - b, T.xOffset += l * x[0] + u * x[2] - l, T.yOffset += l * x[1] + u * x[3] - u) : T.xOffset = T.yOffset = 0), o || t.setAttribute("data-svg-origin", a.join(" "))
                },
                zt = function(t) {
                    var e, r = j("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        i = this.parentNode,
                        n = this.nextSibling,
                        s = this.style.cssText;
                    if (Nt.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
                        e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = zt
                    } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                    return n ? i.insertBefore(this, n) : i.appendChild(this), Nt.removeChild(r), this.style.cssText = s, e
                },
                Yt = function(t) {
                    return !(!Ut || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(t) {
                        try {
                            return t.getBBox()
                        } catch (e) {
                            return zt.call(t, !0)
                        }
                    }(t))
                },
                Gt = [1, 0, 0, 1, 0, 0],
                Vt = function(t, e) {
                    var r, i, n, s, o, a, l, u = t._gsTransform || new Bt,
                        h = t.style;
                    if (Ct ? i = J(t, It, null, !0) : t.currentStyle && (i = (i = t.currentStyle.filter.match(M)) && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), u.x || 0, u.y || 0].join(",") : ""), r = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, Ct && r && !t.offsetParent && (s = h.display, h.display = "block", (l = t.parentNode) && t.offsetParent || (o = 1, a = t.nextSibling, Nt.appendChild(t)), r = !(i = J(t, It, null, !0)) || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, s ? h.display = s : Zt(h, "display"), o && (a ? l.insertBefore(t, a) : l ? l.appendChild(t) : Nt.removeChild(t))), (u.svg || t.getCTM && Yt(t)) && (r && -1 !== (h[Ct] + "").indexOf("matrix") && (i = h[Ct], r = 0), n = t.getAttribute("transform"), r && n && (i = "matrix(" + (n = t.transform.baseVal.consolidate().matrix).a + "," + n.b + "," + n.c + "," + n.d + "," + n.e + "," + n.f + ")", r = 0)), r) return Gt;
                    for (n = (i || "").match(v) || [], xt = n.length; --xt > -1;) s = Number(n[xt]), n[xt] = (o = s - (s |= 0)) ? (1e5 * o + (o < 0 ? -.5 : .5) | 0) / 1e5 + s : s;
                    return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
                },
                Wt = Y.getTransform = function(t, e, r, n) {
                    if (t._gsTransform && r && !n) return t._gsTransform;
                    var o, a, l, u, h, c, f = r && t._gsTransform || new Bt,
                        p = f.scaleX < 0,
                        _ = Dt && (parseFloat(J(t, kt, e, !1, "0 0 0").split(" ")[2]) || f.zOrigin) || 0,
                        d = parseFloat(s.defaultTransformPerspective) || 0;
                    if (f.svg = !(!t.getCTM || !Yt(t)), f.svg && (Xt(t, J(t, kt, e, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), At = s.useSVGTransformAttr || jt), (o = Vt(t)) !== Gt) {
                        if (16 === o.length) {
                            var m, v, y, g, b, T = o[0],
                                x = o[1],
                                w = o[2],
                                E = o[3],
                                P = o[4],
                                A = o[5],
                                R = o[6],
                                O = o[7],
                                S = o[8],
                                F = o[9],
                                M = o[10],
                                C = o[12],
                                I = o[13],
                                k = o[14],
                                D = o[11],
                                U = Math.atan2(R, M);
                            f.zOrigin && (C = S * (k = -f.zOrigin) - o[12], I = F * k - o[13], k = M * k + f.zOrigin - o[14]), f.rotationX = U * B, U && (m = P * (g = Math.cos(-U)) + S * (b = Math.sin(-U)), v = A * g + F * b, y = R * g + M * b, S = P * -b + S * g, F = A * -b + F * g, M = R * -b + M * g, D = O * -b + D * g, P = m, A = v, R = y), U = Math.atan2(-w, M), f.rotationY = U * B, U && (v = x * (g = Math.cos(-U)) - F * (b = Math.sin(-U)), y = w * g - M * b, F = x * b + F * g, M = w * b + M * g, D = E * b + D * g, T = m = T * g - S * b, x = v, w = y), U = Math.atan2(x, T), f.rotation = U * B, U && (m = T * (g = Math.cos(U)) + x * (b = Math.sin(U)), v = P * g + A * b, y = S * g + F * b, x = x * g - T * b, A = A * g - P * b, F = F * g - S * b, T = m, P = v, S = y), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), U = Math.atan2(P, A), f.scaleX = (1e5 * Math.sqrt(T * T + x * x + w * w) + .5 | 0) / 1e5, f.scaleY = (1e5 * Math.sqrt(A * A + R * R) + .5 | 0) / 1e5, f.scaleZ = (1e5 * Math.sqrt(S * S + F * F + M * M) + .5 | 0) / 1e5, T /= f.scaleX, P /= f.scaleY, x /= f.scaleX, A /= f.scaleY, Math.abs(U) > 2e-5 ? (f.skewX = U * B, P = 0, "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(U))) : f.skewX = 0, f.perspective = D ? 1 / (D < 0 ? -D : D) : 0, f.x = C, f.y = I, f.z = k, f.svg && (f.x -= f.xOrigin - (f.xOrigin * T - f.yOrigin * P), f.y -= f.yOrigin - (f.yOrigin * x - f.xOrigin * A))
                        } else if (!Dt || n || !o.length || f.x !== o[4] || f.y !== o[5] || !f.rotationX && !f.rotationY) {
                            var L = o.length >= 6,
                                N = L ? o[0] : 1,
                                j = o[1] || 0,
                                X = o[2] || 0,
                                z = L ? o[3] : 1;
                            f.x = o[4] || 0, f.y = o[5] || 0, l = Math.sqrt(N * N + j * j), u = Math.sqrt(z * z + X * X), h = N || j ? Math.atan2(j, N) * B : f.rotation || 0, c = X || z ? Math.atan2(X, z) * B + h : f.skewX || 0, f.scaleX = l, f.scaleY = u, f.rotation = h, f.skewX = c, Dt && (f.rotationX = f.rotationY = f.z = 0, f.perspective = d, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * N + f.yOrigin * X), f.y -= f.yOrigin - (f.xOrigin * j + f.yOrigin * z))
                        }
                        for (a in Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (p ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180)), f.zOrigin = _, f) f[a] < 2e-5 && f[a] > -2e-5 && (f[a] = 0)
                    }
                    return r && (t._gsTransform = f, f.svg && (At && t.style[Ct] ? i.i.delayedCall(.001, function() {
                        Zt(t.style, Ct)
                    }) : !At && t.getAttribute("transform") && i.i.delayedCall(.001, function() {
                        t.removeAttribute("transform")
                    }))), f
                },
                Kt = function(t) {
                    var e, r, i = this.data,
                        n = -i.rotation * D,
                        s = n + i.skewX * D,
                        o = (Math.cos(n) * i.scaleX * 1e5 | 0) / 1e5,
                        a = (Math.sin(n) * i.scaleX * 1e5 | 0) / 1e5,
                        l = (Math.sin(s) * -i.scaleY * 1e5 | 0) / 1e5,
                        u = (Math.cos(s) * i.scaleY * 1e5 | 0) / 1e5,
                        h = this.t.style,
                        c = this.t.currentStyle;
                    if (c) {
                        r = a, a = -l, l = -r, e = c.filter, h.filter = "";
                        var f, p, d = this.t.offsetWidth,
                            m = this.t.offsetHeight,
                            v = "absolute" !== c.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + a + ", M21=" + l + ", M22=" + u,
                            g = i.x + d * i.xPercent / 100,
                            b = i.y + m * i.yPercent / 100;
                        if (null != i.ox && (g += (f = (i.oxp ? d * i.ox * .01 : i.ox) - d / 2) - (f * o + (p = (i.oyp ? m * i.oy * .01 : i.oy) - m / 2) * a), b += p - (f * l + p * u)), y += v ? ", Dx=" + ((f = d / 2) - (f * o + (p = m / 2) * a) + g) + ", Dy=" + (p - (f * l + p * u) + b) + ")" : ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = e.replace(C, y) : h.filter = y + " " + e, 0 !== t && 1 !== t || 1 === o && 0 === a && 0 === l && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")), !v) {
                            var w, E, P, A = _ < 8 ? 1 : -1;
                            for (f = i.ieOffsetX || 0, p = i.ieOffsetY || 0, i.ieOffsetX = Math.round((d - ((o < 0 ? -o : o) * d + (a < 0 ? -a : a) * m)) / 2 + g), i.ieOffsetY = Math.round((m - ((u < 0 ? -u : u) * m + (l < 0 ? -l : l) * d)) / 2 + b), xt = 0; xt < 4; xt++) P = (r = -1 !== (w = c[E = st[xt]]).indexOf("px") ? parseFloat(w) : tt(this.t, E, parseFloat(w), w.replace(T, "")) || 0) !== i[E] ? xt < 2 ? -i.ieOffsetX : -i.ieOffsetY : xt < 2 ? f - i.ieOffsetX : p - i.ieOffsetY, h[E] = (i[E] = Math.round(r - P * (0 === xt || 2 === xt ? 1 : A))) + "px"
                        }
                    }
                },
                Ht = Y.set3DTransformRatio = Y.setTransformRatio = function(t) {
                    var e, r, i, n, s, o, a, l, u, h, c, p, _, d, m, v, y, g, b, T, x = this.data,
                        w = this.t.style,
                        E = x.rotation,
                        P = x.rotationX,
                        A = x.rotationY,
                        R = x.scaleX,
                        O = x.scaleY,
                        S = x.scaleZ,
                        F = x.x,
                        M = x.y,
                        C = x.z,
                        I = x.svg,
                        k = x.perspective,
                        B = x.force3D,
                        U = x.skewY,
                        L = x.skewX;
                    if (U && (L += U, E += U), !((1 !== t && 0 !== t || "auto" !== B || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && B || C || k || A || P || 1 !== S) || At && I || !Dt) E || L || I ? (E *= D, T = L * D, 1e5, r = Math.cos(E) * R, s = Math.sin(E) * R, i = Math.sin(E - T) * -O, o = Math.cos(E - T) * O, T && "simple" === x.skewType && (e = Math.tan(T - U * D), i *= e = Math.sqrt(1 + e * e), o *= e, U && (e = Math.tan(U * D), r *= e = Math.sqrt(1 + e * e), s *= e)), I && (F += x.xOrigin - (x.xOrigin * r + x.yOrigin * i) + x.xOffset, M += x.yOrigin - (x.xOrigin * s + x.yOrigin * o) + x.yOffset, At && (x.xPercent || x.yPercent) && (m = this.t.getBBox(), F += .01 * x.xPercent * m.width, M += .01 * x.yPercent * m.height), F < (m = 1e-6) && F > -m && (F = 0), M < m && M > -m && (M = 0)), b = (1e5 * r | 0) / 1e5 + "," + (1e5 * s | 0) / 1e5 + "," + (1e5 * i | 0) / 1e5 + "," + (1e5 * o | 0) / 1e5 + "," + F + "," + M + ")", I && At ? this.t.setAttribute("transform", "matrix(" + b) : w[Ct] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + b) : w[Ct] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + R + ",0,0," + O + "," + F + "," + M + ")";
                    else {
                        if (f && (R < (m = 1e-4) && R > -m && (R = S = 2e-5), O < m && O > -m && (O = S = 2e-5), !k || x.z || x.rotationX || x.rotationY || (k = 0)), E || L) E *= D, v = r = Math.cos(E), y = s = Math.sin(E), L && (E -= L * D, v = Math.cos(E), y = Math.sin(E), "simple" === x.skewType && (e = Math.tan((L - U) * D), v *= e = Math.sqrt(1 + e * e), y *= e, x.skewY && (e = Math.tan(U * D), r *= e = Math.sqrt(1 + e * e), s *= e))), i = -y, o = v;
                        else {
                            if (!(A || P || 1 !== S || k || I)) return void(w[Ct] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) translate3d(" : "translate3d(") + F + "px," + M + "px," + C + "px)" + (1 !== R || 1 !== O ? " scale(" + R + "," + O + ")" : ""));
                            r = o = 1, i = s = 0
                        }
                        h = 1, n = a = l = u = c = p = 0, _ = k ? -1 / k : 0, d = x.zOrigin, m = 1e-6, ",", "0", (E = A * D) && (v = Math.cos(E), l = -(y = Math.sin(E)), c = _ * -y, n = r * y, a = s * y, h = v, _ *= v, r *= v, s *= v), (E = P * D) && (e = i * (v = Math.cos(E)) + n * (y = Math.sin(E)), g = o * v + a * y, u = h * y, p = _ * y, n = i * -y + n * v, a = o * -y + a * v, h *= v, _ *= v, i = e, o = g), 1 !== S && (n *= S, a *= S, h *= S, _ *= S), 1 !== O && (i *= O, o *= O, u *= O, p *= O), 1 !== R && (r *= R, s *= R, l *= R, c *= R), (d || I) && (d && (F += n * -d, M += a * -d, C += h * -d + d), I && (F += x.xOrigin - (x.xOrigin * r + x.yOrigin * i) + x.xOffset, M += x.yOrigin - (x.xOrigin * s + x.yOrigin * o) + x.yOffset), F < m && F > -m && (F = "0"), M < m && M > -m && (M = "0"), C < m && C > -m && (C = 0)), b = x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix3d(" : "matrix3d(", b += (r < m && r > -m ? "0" : r) + "," + (s < m && s > -m ? "0" : s) + "," + (l < m && l > -m ? "0" : l), b += "," + (c < m && c > -m ? "0" : c) + "," + (i < m && i > -m ? "0" : i) + "," + (o < m && o > -m ? "0" : o), P || A || 1 !== S ? (b += "," + (u < m && u > -m ? "0" : u) + "," + (p < m && p > -m ? "0" : p) + "," + (n < m && n > -m ? "0" : n), b += "," + (a < m && a > -m ? "0" : a) + "," + (h < m && h > -m ? "0" : h) + "," + (_ < m && _ > -m ? "0" : _) + ",") : b += ",0,0,0,0,1,0,", b += F + "," + M + "," + C + "," + (k ? 1 + -C / k : 1) + ")", w[Ct] = b
                    }
                };
            (l = Bt.prototype).x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0, l.scaleX = l.scaleY = l.scaleZ = 1, Et("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(t, e, i, n, o, a, l) {
                    if (n._lastParsedTransform === l) return o;
                    n._lastParsedTransform = l;
                    var u = l.scale && "function" == typeof l.scale ? l.scale : 0;
                    u && (l.scale = u(m, t));
                    var h, c, f, p, _, v, y, g, b, T = t._gsTransform,
                        x = t.style,
                        w = Mt.length,
                        E = l,
                        P = {},
                        A = Wt(t, r, !0, E.parseTransform),
                        R = E.transform && ("function" == typeof E.transform ? E.transform(m, d) : E.transform);
                    if (A.skewType = E.skewType || A.skewType || s.defaultSkewType, n._transform = A, "rotationZ" in E && (E.rotation = E.rotationZ), R && "string" == typeof R && Ct)(c = X.style)[Ct] = R, c.display = "block", c.position = "absolute", -1 !== R.indexOf("%") && (c.width = J(t, "width"), c.height = J(t, "height")), N.body.appendChild(X), h = Wt(X, null, !1), "simple" === A.skewType && (h.scaleY *= Math.cos(h.skewX * D)), A.svg && (v = A.xOrigin, y = A.yOrigin, h.x -= A.xOffset, h.y -= A.yOffset, (E.transformOrigin || E.svgOrigin) && (R = {}, Xt(t, at(E.transformOrigin), R, E.svgOrigin, E.smoothOrigin, !0), v = R.xOrigin, y = R.yOrigin, h.x -= R.xOffset - A.xOffset, h.y -= R.yOffset - A.yOffset), (v || y) && (g = Vt(X, !0), h.x -= v - (v * g[0] + y * g[2]), h.y -= y - (v * g[1] + y * g[3]))), N.body.removeChild(X), h.perspective || (h.perspective = A.perspective), null != E.xPercent && (h.xPercent = ut(E.xPercent, A.xPercent)), null != E.yPercent && (h.yPercent = ut(E.yPercent, A.yPercent));
                    else if ("object" == typeof E) {
                        if (h = {
                                scaleX: ut(null != E.scaleX ? E.scaleX : E.scale, A.scaleX),
                                scaleY: ut(null != E.scaleY ? E.scaleY : E.scale, A.scaleY),
                                scaleZ: ut(E.scaleZ, A.scaleZ),
                                x: ut(E.x, A.x),
                                y: ut(E.y, A.y),
                                z: ut(E.z, A.z),
                                xPercent: ut(E.xPercent, A.xPercent),
                                yPercent: ut(E.yPercent, A.yPercent),
                                perspective: ut(E.transformPerspective, A.perspective)
                            }, null != (_ = E.directionalRotation))
                            if ("object" == typeof _)
                                for (c in _) E[c] = _[c];
                            else E.rotation = _;
                        "string" == typeof E.x && -1 !== E.x.indexOf("%") && (h.x = 0, h.xPercent = ut(E.x, A.xPercent)), "string" == typeof E.y && -1 !== E.y.indexOf("%") && (h.y = 0, h.yPercent = ut(E.y, A.yPercent)), h.rotation = ht("rotation" in E ? E.rotation : "shortRotation" in E ? E.shortRotation + "_short" : A.rotation, A.rotation, "rotation", P), Dt && (h.rotationX = ht("rotationX" in E ? E.rotationX : "shortRotationX" in E ? E.shortRotationX + "_short" : A.rotationX || 0, A.rotationX, "rotationX", P), h.rotationY = ht("rotationY" in E ? E.rotationY : "shortRotationY" in E ? E.shortRotationY + "_short" : A.rotationY || 0, A.rotationY, "rotationY", P)), h.skewX = ht(E.skewX, A.skewX), h.skewY = ht(E.skewY, A.skewY)
                    }
                    for (Dt && null != E.force3D && (A.force3D = E.force3D, p = !0), (f = A.force3D || A.z || A.rotationX || A.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == E.scale || (h.scaleZ = 1); --w > -1;)((R = h[b = Mt[w]] - A[b]) > 1e-6 || R < -1e-6 || null != E[b] || null != U[b]) && (p = !0, o = new gt(A, b, A[b], R, o), b in P && (o.e = P[b]), o.xs0 = 0, o.plugin = a, n._overwriteProps.push(o.n));
                    return R = "function" == typeof E.transformOrigin ? E.transformOrigin(m, d) : E.transformOrigin, A.svg && (R || E.svgOrigin) && (v = A.xOffset, y = A.yOffset, Xt(t, at(R), h, E.svgOrigin, E.smoothOrigin), o = bt(A, "xOrigin", (T ? A : h).xOrigin, h.xOrigin, o, "transformOrigin"), o = bt(A, "yOrigin", (T ? A : h).yOrigin, h.yOrigin, o, "transformOrigin"), v === A.xOffset && y === A.yOffset || (o = bt(A, "xOffset", T ? v : A.xOffset, A.xOffset, o, "transformOrigin"), o = bt(A, "yOffset", T ? y : A.yOffset, A.yOffset, o, "transformOrigin")), R = "0px 0px"), (R || Dt && f && A.zOrigin) && (Ct ? (p = !0, b = kt, R || (R = (R = (J(t, b, r, !1, "50% 50%") + "").split(" "))[0] + " " + R[1] + " " + A.zOrigin + "px"), R += "", (o = new gt(x, b, 0, 0, o, -1, "transformOrigin")).b = x[b], o.plugin = a, Dt ? (c = A.zOrigin, R = R.split(" "), A.zOrigin = (R.length > 2 ? parseFloat(R[2]) : c) || 0, o.xs0 = o.e = R[0] + " " + (R[1] || "50%") + " 0px", (o = new gt(A, "zOrigin", 0, 0, o, -1, o.n)).b = c, o.xs0 = o.e = A.zOrigin) : o.xs0 = o.e = R) : at(R + "", A)), p && (n._transformType = A.svg && At || !f && 3 !== this._transformType ? 2 : 3), u && (l.scale = u), o
                },
                allowFunc: !0,
                prefix: !0
            }), Et("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), Et("clipPath", {
                defaultValue: "inset(0px)",
                prefix: !0,
                multi: !0,
                formatter: mt("inset(0px 0px 0px 0px)", !1, !0)
            }), Et("borderRadius", {
                defaultValue: "0px",
                parser: function(t, i, n, s, o, a) {
                    i = this.format(i);
                    var l, u, h, c, f, p, _, d, m, v, y, g, b, T, x, w, E = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        P = t.style;
                    for (m = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = i.split(" "), u = 0; u < E.length; u++) this.p.indexOf("border") && (E[u] = Z(E[u])), -1 !== (f = c = J(t, E[u], r, !1, "0px")).indexOf(" ") && (c = f.split(" "), f = c[0], c = c[1]), p = h = l[u], _ = parseFloat(f), g = f.substr((_ + "").length), (b = "=" === p.charAt(1)) ? (d = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), d *= parseFloat(p), y = p.substr((d + "").length - (d < 0 ? 1 : 0)) || "") : (d = parseFloat(p), y = p.substr((d + "").length)), "" === y && (y = e[n] || g), y !== g && (T = tt(t, "borderLeft", _, g), x = tt(t, "borderTop", _, g), "%" === y ? (f = T / m * 100 + "%", c = x / v * 100 + "%") : "em" === y ? (f = T / (w = tt(t, "borderLeft", 1, "em")) + "em", c = x / w + "em") : (f = T + "px", c = x + "px"), b && (p = parseFloat(f) + d + y, h = parseFloat(c) + d + y)), o = Tt(P, E[u], f + " " + c, p + " " + h, !1, "0px", o);
                    return o
                },
                prefix: !0,
                formatter: mt("0px 0px 0px 0px", !1, !0)
            }), Et("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, n, s, o) {
                    return Tt(t.style, i, this.format(J(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", s)
                },
                prefix: !0,
                formatter: mt("0px 0px", !1, !0)
            }), Et("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, n, s, o) {
                    var a, l, u, h, c, f, p = "background-position",
                        d = r || Q(t),
                        m = this.format((d ? _ ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        v = this.format(e);
                    if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (f = J(t, "backgroundImage").replace(O, "")) && "none" !== f) {
                        for (a = m.split(" "), l = v.split(" "), z.setAttribute("src", f), u = 2; --u > -1;)(h = -1 !== (m = a[u]).indexOf("%")) !== (-1 !== l[u].indexOf("%")) && (c = 0 === u ? t.offsetWidth - z.width : t.offsetHeight - z.height, a[u] = h ? parseFloat(m) / 100 * c + "px" : parseFloat(m) / c * 100 + "%");
                        m = a.join(" ")
                    }
                    return this.parseComplex(t.style, m, v, s, o)
                },
                formatter: at
            }), Et("backgroundSize", {
                defaultValue: "0 0",
                formatter: function(t) {
                    return "co" === (t += "").substr(0, 2) ? t : at(-1 === t.indexOf(" ") ? t + " " + t : t)
                }
            }), Et("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), Et("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), Et("transformStyle", {
                prefix: !0
            }), Et("backfaceVisibility", {
                prefix: !0
            }), Et("userSelect", {
                prefix: !0
            }), Et("margin", {
                parser: vt("marginTop,marginRight,marginBottom,marginLeft")
            }), Et("padding", {
                parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), Et("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, i, n, s, o) {
                    var a, l, u;
                    return _ < 9 ? (l = t.currentStyle, u = _ < 8 ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(J(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
                }
            }), Et("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), Et("autoRound,strictUnits", {
                parser: function(t, e, r, i, n) {
                    return n
                }
            }), Et("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, n, s, o) {
                    var a = J(t, "borderTopWidth", r, !1, "0px"),
                        l = this.format(e).split(" "),
                        u = l[0].replace(T, "");
                    return "px" !== u && (a = parseFloat(a) / tt(t, "borderTopWidth", 1, u) + u), this.parseComplex(t.style, this.format(a + " " + J(t, "borderTopStyle", r, !1, "solid") + " " + J(t, "borderTopColor", r, !1, "#000")), l.join(" "), s, o)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0]
                }
            }), Et("borderWidth", {
                parser: vt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), Et("float,cssFloat,styleFloat", {
                parser: function(t, e, r, i, n, s) {
                    var o = t.style,
                        a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                    return new gt(o, a, 0, 0, n, -1, r, !1, 0, o[a], e)
                }
            });
            var qt = function(t) {
                var e, r = this.t,
                    i = r.filter || J(this.data, "filter") || "",
                    n = this.s + this.c * t | 0;
                100 === n && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (r.removeAttribute("filter"), e = !J(this.data, "filter")) : (r.filter = i.replace(E, ""), e = !0)), e || (this.xn1 && (r.filter = i = i || "alpha(opacity=" + n + ")"), -1 === i.indexOf("pacity") ? 0 === n && this.xn1 || (r.filter = i + " alpha(opacity=" + n + ")") : r.filter = i.replace(x, "opacity=" + n))
            };
            Et("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, n, s, o) {
                    var a = parseFloat(J(t, "opacity", r, !1, "1")),
                        l = t.style,
                        u = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === J(t, "visibility", r) && 0 !== e && (a = 0), V ? s = new gt(l, "opacity", a, e - a, s) : ((s = new gt(l, "opacity", 100 * a, 100 * (e - a), s)).xn1 = u ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = qt), u && ((s = new gt(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                }
            });
            var Zt = function(t, e) {
                    e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(A, "-$1").toLowerCase())) : t.removeAttribute(e))
                },
                $t = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, r = this.t.style; e;) e.v ? r[e.p] = e.v : Zt(r, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            Et("className", {
                parser: function(e, i, n, s, o, a, l) {
                    var u, h, c, f, p, _ = e.getAttribute("class") || "",
                        d = e.style.cssText;
                    if ((o = s._classNamePT = new gt(e, n, 0, 0, o, 2)).setRatio = $t, o.pr = -11, t = !0, o.b = _, h = rt(e, r), c = e._gsClassPT) {
                        for (f = {}, p = c.data; p;) f[p.p] = 1, p = p._next;
                        c.setRatio(1)
                    }
                    return e._gsClassPT = o, o.e = "=" !== i.charAt(1) ? i : _.replace(new RegExp("(?:\\s|^)" + i.substr(2) + "(?![\\w-])"), "") + ("+" === i.charAt(0) ? " " + i.substr(2) : ""), e.setAttribute("class", o.e), u = it(e, h, rt(e), l, f), e.setAttribute("class", _), o.data = u.firstMPT, e.style.cssText = d, o = o.xfirst = s.parse(e, u.difs, o, a)
                }
            });
            var Qt = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, r, i, n, s, o = this.t.style,
                        l = a.transform.parse;
                    if ("all" === this.e) o.cssText = "", n = !0;
                    else
                        for (i = (e = this.e.split(" ").join("").split(",")).length; --i > -1;) r = e[i], a[r] && (a[r].parse === l ? n = !0 : r = "transformOrigin" === r ? kt : a[r].p), Zt(o, r);
                    n && (Zt(o, Ct), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (Et("clearProps", {
                    parser: function(e, r, i, n, s) {
                        return (s = new gt(e, i, 0, 0, s, 2)).setRatio = Qt, s.e = r, s.pr = -10, s.data = n._tween, t = !0, s
                    }
                }), l = "bezier,throwProps,physicsProps,physics2D".split(","), xt = l.length; xt--;) Pt(l[xt]);
            (l = s.prototype)._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function(i, o, l, f) {
                if (!i.nodeType) return !1;
                this._target = d = i, this._tween = l, this._vars = o, m = f, u = o.autoRound, t = !1, e = o.suffixMap || s.suffixMap, r = Q(i), n = this._overwriteProps;
                var _, v, y, g, b, T, x, E, P, A = i.style;
                if (h && "" === A.zIndex && ("auto" !== (_ = J(i, "zIndex", r)) && "" !== _ || this._addLazySet(A, "zIndex", 0)), "string" == typeof o && (g = A.cssText, _ = rt(i, r), A.cssText = g + ";" + o, _ = it(i, _, rt(i)).difs, !V && w.test(o) && (_.opacity = parseFloat(RegExp.$1)), o = _, A.cssText = g), o.className ? this._firstPT = v = a.className.parse(i, o.className, "className", this, null, null, o) : this._firstPT = v = this.parse(i, o, null), this._transformType) {
                    for (P = 3 === this._transformType, Ct ? c && (h = !0, "" === A.zIndex && ("auto" !== (x = J(i, "zIndex", r)) && "" !== x || this._addLazySet(A, "zIndex", 0)), p && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (P ? "visible" : "hidden"))) : A.zoom = 1, y = v; y && y._next;) y = y._next;
                    E = new gt(i, "transform", 0, 0, null, 2), this._linkCSSP(E, null, y), E.setRatio = Ct ? Ht : Kt, E.data = this._transform || Wt(i, r, !0), E.tween = l, E.pr = -1, n.pop()
                }
                if (t) {
                    for (; v;) {
                        for (T = v._next, y = g; y && y.pr > v.pr;) y = y._next;
                        (v._prev = y ? y._prev : b) ? v._prev._next = v: g = v, (v._next = y) ? y._prev = v : b = v, v = T
                    }
                    this._firstPT = g
                }
                return !0
            }, l.parse = function(t, i, n, s) {
                var o, l, h, c, f, p, _, v, y, g, b = t.style;
                for (o in i) {
                    if (p = i[o], l = a[o], "function" != typeof p || l && l.allowFunc || (p = p(m, d)), l) n = l.parse(t, p, o, this, n, s, i);
                    else {
                        if ("--" === o.substr(0, 2)) {
                            this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", Q(t).getPropertyValue(o) + "", p + "", o, !1, o);
                            continue
                        }
                        f = J(t, o, r) + "", y = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || y && P.test(p) ? (y || (p = ((p = pt(p)).length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), n = Tt(b, o, f, p, !0, "transparent", n, 0, s)) : y && k.test(p) ? n = Tt(b, o, f, p, !0, null, n, 0, s) : (_ = (h = parseFloat(f)) || 0 === h ? f.substr((h + "").length) : "", "" !== f && "auto" !== f || ("width" === o || "height" === o ? (h = ot(t, o, r), _ = "px") : "left" === o || "top" === o ? (h = et(t, o, r), _ = "px") : (h = "opacity" !== o ? 0 : 1, _ = "")), (g = y && "=" === p.charAt(1)) ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), v = p.replace(T, "")) : (c = parseFloat(p), v = y ? p.replace(T, "") : ""), "" === v && (v = o in e ? e[o] : _), p = c || 0 === c ? (g ? c + h : c) + v : i[o], _ !== v && ("" === v && "lineHeight" !== o || (c || 0 === c) && h && (h = tt(t, o, h, _), "%" === v ? (h /= tt(t, o, 100, "%") / 100, !0 !== i.strictUnits && (f = h + "%")) : "em" === v || "rem" === v || "vw" === v || "vh" === v ? h /= tt(t, o, 1, v) : "px" !== v && (c = tt(t, o, c, v), v = "px"), g && (c || 0 === c) && (p = c + h + v))), g && (c += h), !h && 0 !== h || !c && 0 !== c ? void 0 !== b[o] && (p || p + "" != "NaN" && null != p) ? (n = new gt(b, o, c || h || 0, 0, n, -1, o, !1, 0, f, p)).xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : f : K("invalid " + o + " tween value: " + i[o]) : (n = new gt(b, o, h, c - h, n, 0, o, !1 !== u && ("px" === v || "zIndex" === o), 0, f, p)).xs0 = v)
                    }
                    s && n && !n.plugin && (n.plugin = s)
                }
                return n
            }, l.setRatio = function(t) {
                var e, r, i, n = this._firstPT;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; n;) {
                            if (e = n.c * t + n.s, n.r ? e = n.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), n.type)
                                if (1 === n.type)
                                    if (2 === (i = n.l)) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                    else if (3 === i) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                            else if (4 === i) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                            else if (5 === i) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                            else {
                                for (r = n.xs0 + e + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                n.t[n.p] = r
                            } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                            else n.t[n.p] = e + n.xs0;
                            n = n._next
                        } else
                            for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
                    else
                        for (; n;) {
                            if (2 !== n.type)
                                if (n.r && -1 !== n.type)
                                    if (e = n.r(n.s + n.c), n.type) {
                                        if (1 === n.type) {
                                            for (i = n.l, r = n.xs0 + e + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                            n.t[n.p] = r
                                        }
                                    } else n.t[n.p] = e + n.xs0;
                            else n.t[n.p] = n.e;
                            else n.setRatio(t);
                            n = n._next
                        }
            }, l._enableTransforms = function(t) {
                this._transform = this._transform || Wt(this._target, r, !0), this._transformType = this._transform.svg && At || !t && 3 !== this._transformType ? 2 : 3
            };
            var Jt = function(t) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            l._addLazySet = function(t, e, r) {
                var i = this._firstPT = new gt(t, e, 0, 0, this._firstPT, 2);
                i.e = r, i.setRatio = Jt, i.data = this
            }, l._linkCSSP = function(t, e, r, i) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, i = !0), r ? r._next = t : i || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = r), t
            }, l._mod = function(t) {
                for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next
            }, l._kill = function(t) {
                var e, r, n, s = t;
                if (t.autoAlpha || t.alpha) {
                    for (r in s = {}, t) s[r] = t[r];
                    s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                }
                for (t.className && (e = this._classNamePT) && ((n = e.xfirst) && n._prev ? this._linkCSSP(n._prev, e._next, n._prev._prev) : n === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, n._prev), this._classNamePT = null), e = this._firstPT; e;) e.plugin && e.plugin !== r && e.plugin._kill && (e.plugin._kill(t), r = e.plugin), e = e._next;
                return i.g.prototype._kill.call(this, s)
            };
            var te = function(t, e, r) {
                var i, n, s, o;
                if (t.slice)
                    for (n = t.length; --n > -1;) te(t[n], e, r);
                else
                    for (n = (i = t.childNodes).length; --n > -1;) o = (s = i[n]).type, s.style && (e.push(rt(s)), r && r.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || te(s, e, r)
            };
            return s.cascadeTo = function(t, e, r) {
                var n, s, o, a, l = i.i.to(t, e, r),
                    u = [l],
                    h = [],
                    c = [],
                    f = [],
                    p = i.i._internals.reservedProps;
                for (t = l._targets || l.target, te(t, h, f), l.render(e, !0, !0), te(t, c), l.render(0, !0, !0), l._enabled(!0), n = f.length; --n > -1;)
                    if ((s = it(f[n], h[n], c[n])).firstMPT) {
                        for (o in s = s.difs, r) p[o] && (s[o] = r[o]);
                        for (o in a = {}, s) a[o] = h[n][o];
                        u.push(i.i.fromTo(f[n], e, a, s))
                    }
                return u
            }, i.g.activate([s]), s
        }, !0);
        var s = i.j.CSSPlugin,
            o = i.h._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.1",
                init: function(t, e, r, i) {
                    var n, s;
                    if ("function" != typeof t.setAttribute) return !1;
                    for (n in e) "function" == typeof(s = e[n]) && (s = s(i, t)), this._addTween(t, "setAttribute", t.getAttribute(n) + "", s + "", n, !1, n), this._overwriteProps.push(n);
                    return !0
                }
            }),
            a = i.h._gsDefine.plugin({
                propName: "roundProps",
                version: "1.7.0",
                priority: -1,
                API: 2,
                init: function(t, e, r) {
                    return this._tween = r, !0
                }
            }),
            l = function(t) {
                var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
                return function(r) {
                    return (Math.round(r / t) * t * e | 0) / e
                }
            },
            u = function(t, e) {
                for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next
            },
            h = a.prototype;
        /*!
         * VERSION: 0.6.1
         * DATE: 2018-08-27
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         */
        h._onInitAllProps = function() {
            var t, e, r, i, n = this._tween,
                s = n.vars.roundProps,
                o = {},
                a = n._propLookup.roundProps;
            if ("object" != typeof s || s.push)
                for ("string" == typeof s && (s = s.split(",")), r = s.length; --r > -1;) o[s[r]] = Math.round;
            else
                for (i in s) o[i] = l(s[i]);
            for (i in o)
                for (t = n._firstPT; t;) e = t._next, t.pg ? t.t._mod(o) : t.n === i && (2 === t.f && t.t ? u(t.t._firstPT, o[i]) : (this._add(t.t, i, t.s, t.c, o[i]), e && (e._prev = t._prev), t._prev ? t._prev._next = e : n._firstPT === t && (n._firstPT = e), t._next = t._prev = null, n._propLookup[i] = a)), t = e;
            return !1
        }, h._add = function(t, e, r, i, n) {
            this._addTween(t, e, r, r + i, e, n || Math.round), this._overwriteProps.push(e)
        };
        /*!
         * VERSION: 0.3.1
         * DATE: 2018-08-27
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         **/
        var c = i.h._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function(t, e, r, i) {
                "object" != typeof e && (e = {
                    rotation: e
                }), this.finals = {};
                var n, s, o, a, l, u, h = !0 === e.useRadians ? 2 * Math.PI : 360;
                for (n in e) "useRadians" !== n && ("function" == typeof(a = e[n]) && (a = a(i, t)), s = (u = (a + "").split("_"))[0], o = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), l = (a = this.finals[n] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - o, u.length && (-1 !== (s = u.join("_")).indexOf("short") && (l %= h) !== l % (h / 2) && (l = l < 0 ? l + h : l - h), -1 !== s.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * h) % h - (l / h | 0) * h : -1 !== s.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * h) % h - (l / h | 0) * h)), (l > 1e-6 || l < -1e-6) && (this._addTween(t, n, o, o + l, n), this._overwriteProps.push(n)));
                return !0
            },
            set: function(t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t);
                else
                    for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
        });
        c._autoCSS = !0,
            /*!
             * VERSION: 2.1.2
             * DATE: 2019-03-01
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             * 
             * @author: Jack Doyle, jack@greensock.com
             */
            i.h._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() {
                var t = function(t) {
                        i.f.call(this, t);
                        var e, r, n = this.vars;
                        for (r in this._labels = {}, this.autoRemoveChildren = !!n.autoRemoveChildren, this.smoothChildTiming = !!n.smoothChildTiming, this._sortChildren = !0, this._onUpdate = n.onUpdate, n) e = n[r], s(e) && -1 !== e.join("").indexOf("{self}") && (n[r] = this._swapSelfInParams(e));
                        s(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                    },
                    e = i.i._internals,
                    r = t._internals = {},
                    n = e.isSelector,
                    s = e.isArray,
                    o = e.lazyTweens,
                    a = e.lazyRender,
                    l = i.h._gsDefine.globals,
                    u = function(t) {
                        var e, r = {};
                        for (e in t) r[e] = t[e];
                        return r
                    },
                    h = function(t, e, r) {
                        var i, n, s = t.cycle;
                        for (i in s) n = s[i], t[i] = "function" == typeof n ? n(r, e[r], e) : n[r % n.length];
                        delete t.cycle
                    },
                    c = r.pauseCallback = function() {},
                    f = function(t, e, r, i) {
                        var n = "immediateRender";
                        return n in e || (e[n] = !(r && !1 === r[n] || i)), e
                    },
                    p = function(t) {
                        if ("function" == typeof t) return t;
                        var e = "object" == typeof t ? t : {
                                each: t
                            },
                            r = e.ease,
                            i = e.from || 0,
                            n = e.base || 0,
                            s = {},
                            o = isNaN(i),
                            a = e.axis,
                            l = {
                                center: .5,
                                end: 1
                            }[i] || 0;
                        return function(t, u, h) {
                            var c, f, p, _, d, m, v, y, g, b = (h || e).length,
                                T = s[b];
                            if (!T) {
                                if (!(g = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                                    for (v = -1 / 0; v < (v = h[g++].getBoundingClientRect().left) && g < b;);
                                    g--
                                }
                                for (T = s[b] = [], c = o ? Math.min(g, b) * l - .5 : i % g, f = o ? b * l / g - .5 : i / g | 0, v = 0, y = 1 / 0, m = 0; m < b; m++) p = m % g - c, _ = f - (m / g | 0), T[m] = d = a ? Math.abs("y" === a ? _ : p) : Math.sqrt(p * p + _ * _), d > v && (v = d), d < y && (y = d);
                                T.max = v - y, T.min = y, T.v = b = e.amount || e.each * (g > b ? b : a ? "y" === a ? b / g : g : Math.max(g, b / g)) || 0, T.b = b < 0 ? n - b : n
                            }
                            return b = (T[t] - T.min) / T.max, T.b + (r ? r.getRatio(b) : b) * T.v
                        }
                    },
                    _ = t.prototype = new i.f;
                return t.version = "2.1.2", t.distribute = p, _.constructor = t, _.kill()._gc = _._forcingPlayhead = _._hasPause = !1, _.to = function(t, e, r, n) {
                    var s = r.repeat && l.TweenMax || i.i;
                    return e ? this.add(new s(t, e, r), n) : this.set(t, r, n)
                }, _.from = function(t, e, r, n) {
                    return this.add((r.repeat && l.TweenMax || i.i).from(t, e, f(0, r)), n)
                }, _.fromTo = function(t, e, r, n, s) {
                    var o = n.repeat && l.TweenMax || i.i;
                    return n = f(0, n, r), e ? this.add(o.fromTo(t, e, r, n), s) : this.set(t, n, s)
                }, _.staggerTo = function(e, r, s, o, a, l, c, f) {
                    var _, d, m = new t({
                            onComplete: l,
                            onCompleteParams: c,
                            callbackScope: f,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        v = p(s.stagger || o),
                        y = s.startAt,
                        g = s.cycle;
                    for ("string" == typeof e && (e = i.i.selector(e) || e), n(e = e || []) && (e = function(t) {
                            var e, r = [],
                                i = t.length;
                            for (e = 0; e !== i; r.push(t[e++]));
                            return r
                        }(e)), d = 0; d < e.length; d++) _ = u(s), y && (_.startAt = u(y), y.cycle && h(_.startAt, e, d)), g && (h(_, e, d), null != _.duration && (r = _.duration, delete _.duration)), m.to(e[d], r, _, v(d, e[d], e));
                    return this.add(m, a)
                }, _.staggerFrom = function(t, e, r, i, n, s, o, a) {
                    return r.runBackwards = !0, this.staggerTo(t, e, f(0, r), i, n, s, o, a)
                }, _.staggerFromTo = function(t, e, r, i, n, s, o, a, l) {
                    return i.startAt = r, this.staggerTo(t, e, f(0, i, r), n, s, o, a, l)
                }, _.call = function(t, e, r, n) {
                    return this.add(i.i.delayedCall(0, t, e, r), n)
                }, _.set = function(t, e, r) {
                    return this.add(new i.i(t, 0, f(0, e, null, !0)), r)
                }, t.exportRoot = function(e, r) {
                    null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
                    var n, s, o, a, l = new t(e),
                        u = l._timeline;
                    for (null == r && (r = !0), u._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = u._time, o = u._first; o;) a = o._next, r && o instanceof i.i && o.target === o.vars.onComplete || ((s = o._startTime - o._delay) < 0 && (n = 1), l.add(o, s)), o = a;
                    return u.add(l, 0), n && l.totalDuration(), l
                }, _.add = function(e, r, n, o) {
                    var a, l, u, h, c, f;
                    if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, e)), !(e instanceof i.a)) {
                        if (e instanceof Array || e && e.push && s(e)) {
                            for (n = n || "normal", o = o || 0, a = r, l = e.length, u = 0; u < l; u++) s(h = e[u]) && (h = new t({
                                tweens: h
                            })), this.add(h, a), "string" != typeof h && "function" != typeof h && ("sequence" === n ? a = h._startTime + h.totalDuration() / h._timeScale : "start" === n && (h._startTime -= h.delay())), a += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof e) return this.addLabel(e, r);
                        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                        e = i.i.delayedCall(0, e)
                    }
                    if (i.f.prototype.add.call(this, e, r), (e._time || !e._duration && e._initted) && (a = (this.rawTime() - e._startTime) * e._timeScale, (!e._duration || Math.abs(Math.max(0, Math.min(e.totalDuration(), a))) - e._totalTime > 1e-5) && e.render(a, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = (c = this).rawTime() > e._startTime; c._timeline;) f && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
                    return this
                }, _.remove = function(t) {
                    if (t instanceof i.a) {
                        this._remove(t, !1);
                        var e = t._timeline = t.vars.useFrames ? i.a._rootFramesTimeline : i.a._rootTimeline;
                        return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                    }
                    if (t instanceof Array || t && t.push && s(t)) {
                        for (var r = t.length; --r > -1;) this.remove(t[r]);
                        return this
                    }
                    return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
                }, _._remove = function(t, e) {
                    return i.f.prototype._remove.call(this, t, e), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, _.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, _.insert = _.insertMultiple = function(t, e, r, i) {
                    return this.add(t, e || 0, r, i)
                }, _.appendMultiple = function(t, e, r, i) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), r, i)
                }, _.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, _.addPause = function(t, e, r, n) {
                    var s = i.i.delayedCall(0, c, r, n || this);
                    return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
                }, _.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, _.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, _._parseTimeOrLabel = function(t, e, r, n) {
                    var o, a;
                    if (n instanceof i.a && n.timeline === this) this.remove(n);
                    else if (n && (n instanceof Array || n.push && s(n)))
                        for (a = n.length; --a > -1;) n[a] instanceof i.a && n[a].timeline === this && this.remove(n[a]);
                    if (o = "number" != typeof t || e ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof e) return this._parseTimeOrLabel(e, r && "number" == typeof t && null == this._labels[e] ? t - o : 0, r);
                    if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = o);
                    else {
                        if (-1 === (a = t.indexOf("="))) return null == this._labels[t] ? r ? this._labels[t] = o + e : e : this._labels[t] + e;
                        e = parseInt(t.charAt(a - 1) + "1", 10) * Number(t.substr(a + 1)), t = a > 1 ? this._parseTimeOrLabel(t.substr(0, a - 1), 0, r) : o
                    }
                    return Number(t) + e
                }, _.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                }, _.stop = function() {
                    return this.paused(!0)
                }, _.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, _.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, _.render = function(t, e, r) {
                    this._gc && this._enabled(!0, !1);
                    var i, n, s, l, u, h, c, f, p = this._time,
                        _ = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._startTime,
                        m = this._timeScale,
                        v = this._paused;
                    if (p !== this._time && (t += this._time - p), t >= _ - 1e-8 && t >= 0) this._totalTime = this._time = _, this._reversed || this._hasPausedChild() || (n = !0, l = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-8 || this._rawPrevTime < 0 || 1e-8 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (u = !0, this._rawPrevTime > 1e-8 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8, t = _ + 1e-4;
                    else if (t < 1e-8)
                        if (this._totalTime = this._time = 0, t > -1e-8 && (t = 0), (0 !== p || 0 === this._duration && 1e-8 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (l = "onReverseComplete", n = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = n = !0, l = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (u = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8, 0 === t && n)
                                for (i = this._first; i && 0 === i._startTime;) i._duration || (n = !1), i = i._next;
                            t = 0, this._initted || (u = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= p)
                                for (i = this._first; i && i._startTime <= t && !h;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (h = i), i = i._next;
                            else
                                for (i = this._last; i && i._startTime >= t && !h;) i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (h = i), i = i._prev;
                            h && (this._time = this._totalTime = t = h._startTime, f = this._startTime + t / this._timeScale)
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== p && this._first || r || u || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (c = this._time) >= p)
                            for (i = this._first; i && (s = i._next, c === this._time && (!this._paused || v));)(i._active || i._startTime <= c && !i._paused && !i._gc) && (h === i && (this.pause(), this._pauseTime = f), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, r) : i.render((t - i._startTime) * i._timeScale, e, r)), i = s;
                        else
                            for (i = this._last; i && (s = i._prev, c === this._time && (!this._paused || v));) {
                                if (i._active || i._startTime <= p && !i._paused && !i._gc) {
                                    if (h === i) {
                                        for (h = i._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, r), h = h._prev;
                                        h = null, this.pause(), this._pauseTime = f
                                    }
                                    i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, r) : i.render((t - i._startTime) * i._timeScale, e, r)
                                }
                                i = s
                            }
                        this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), l && (this._gc || d !== this._startTime && m === this._timeScale || (0 === this._time || _ >= this.totalDuration()) && (n && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                    }
                }, _._hasPausedChild = function() {
                    for (var e = this._first; e;) {
                        if (e._paused || e instanceof t && e._hasPausedChild()) return !0;
                        e = e._next
                    }
                    return !1
                }, _.getChildren = function(t, e, r, n) {
                    n = n || -9999999999;
                    for (var s = [], o = this._first, a = 0; o;) o._startTime < n || (o instanceof i.i ? !1 !== e && (s[a++] = o) : (!1 !== r && (s[a++] = o), !1 !== t && (a = (s = s.concat(o.getChildren(!0, e, r))).length))), o = o._next;
                    return s
                }, _.getTweensOf = function(t, e) {
                    var r, n, s = this._gc,
                        o = [],
                        a = 0;
                    for (s && this._enabled(!0, !0), n = (r = i.i.getTweensOf(t)).length; --n > -1;)(r[n].timeline === this || e && this._contains(r[n])) && (o[a++] = r[n]);
                    return s && this._enabled(!1, !0), o
                }, _.recent = function() {
                    return this._recent
                }, _._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, _.shiftChildren = function(t, e, r) {
                    r = r || 0;
                    for (var i, n = this._first, s = this._labels; n;) n._startTime >= r && (n._startTime += t), n = n._next;
                    if (e)
                        for (i in s) s[i] >= r && (s[i] += t);
                    return this._uncache(!0)
                }, _._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var r = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), i = r.length, n = !1; --i > -1;) r[i]._kill(t, e) && (n = !0);
                    return n
                }, _.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        r = e.length;
                    for (this._time = this._totalTime = 0; --r > -1;) e[r]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, _.invalidate = function() {
                    for (var t = this._first; t;) t.invalidate(), t = t._next;
                    return i.a.prototype.invalidate.call(this)
                }, _._enabled = function(t, e) {
                    if (t === this._gc)
                        for (var r = this._first; r;) r._enabled(t, !0), r = r._next;
                    return i.f.prototype._enabled.call(this, t, e)
                }, _.totalTime = function(t, e, r) {
                    this._forcingPlayhead = !0;
                    var n = i.a.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, n
                }, _.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, _.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, r, i = 0, n = this._last, s = 999999999999; n;) e = n._prev, n._dirty && n.totalDuration(), n._startTime > s && this._sortChildren && !n._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(n, n._startTime - n._delay), this._calculatingDuration = 0) : s = n._startTime, n._startTime < 0 && !n._paused && (i -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale, this._time -= n._startTime, this._totalTime -= n._startTime, this._rawPrevTime -= n._startTime), this.shiftChildren(-n._startTime, !1, -9999999999), s = 0), (r = n._startTime + n._totalDuration / n._timeScale) > i && (i = r), n = e;
                            this._duration = this._totalDuration = i, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, _.paused = function(t) {
                    if (!1 === t && this._paused)
                        for (var e = this._first; e;) e._startTime === this._time && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next;
                    return i.a.prototype.paused.apply(this, arguments)
                }, _.usesFrames = function() {
                    for (var t = this._timeline; t._timeline;) t = t._timeline;
                    return t === i.a._rootFramesTimeline
                }, _.rawTime = function(t) {
                    return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                }, t
            }, !0);
        var f = i.j.TimelineLite;
        /*!
         * VERSION: 2.1.2
         * DATE: 2019-03-01
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         */
        i.h._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function() {
            var t = function(t) {
                    f.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0
                },
                e = i.i._internals,
                r = e.lazyTweens,
                n = e.lazyRender,
                s = i.h._gsDefine.globals,
                o = new i.b(null, null, 1, 0),
                a = t.prototype = new f;
            return a.constructor = t, a.kill()._gc = !1, t.version = "2.1.2", a.invalidate = function() {
                return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), f.prototype.invalidate.call(this)
            }, a.addCallback = function(t, e, r, n) {
                return this.add(i.i.delayedCall(0, t, r, n), e)
            }, a.removeCallback = function(t, e) {
                if (t)
                    if (null == e) this._kill(null, t);
                    else
                        for (var r = this.getTweensOf(t, !1), i = r.length, n = this._parseTimeOrLabel(e); --i > -1;) r[i]._startTime === n && r[i]._enabled(!1, !1);
                return this
            }, a.removePause = function(t) {
                return this.removeCallback(f._internals.pauseCallback, t)
            }, a.tweenTo = function(t, e) {
                e = e || {};
                var r, n, a, l = {
                        ease: o,
                        useFrames: this.usesFrames(),
                        immediateRender: !1,
                        lazy: !1
                    },
                    u = e.repeat && s.TweenMax || i.i;
                for (n in e) l[n] = e[n];
                return l.time = this._parseTimeOrLabel(t), r = Math.abs(Number(l.time) - this._time) / this._timeScale || .001, a = new u(this, r, l), l.onStart = function() {
                    a.target.paused(!0), a.vars.time === a.target.time() || r !== a.duration() || a.isFromTo || a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale).render(a.time(), !0, !0), e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || a, e.onStartParams || [])
                }, a
            }, a.tweenFromTo = function(t, e, r) {
                r = r || {}, t = this._parseTimeOrLabel(t), r.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    callbackScope: this
                }, r.immediateRender = !1 !== r.immediateRender;
                var i = this.tweenTo(e, r);
                return i.isFromTo = 1, i.duration(Math.abs(i.vars.time - t) / this._timeScale || .001)
            }, a.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, o, a, l, u, h, c, f, p, _ = this._time,
                    d = this._dirty ? this.totalDuration() : this._totalDuration,
                    m = this._duration,
                    v = this._totalTime,
                    y = this._startTime,
                    g = this._timeScale,
                    b = this._rawPrevTime,
                    T = this._paused,
                    x = this._cycle;
                if (_ !== this._time && (t += this._time - _), t >= d - 1e-8 && t >= 0) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, l = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-8 || b < 0 || 1e-8 === b) && b !== t && this._first && (u = !0, b > 1e-8 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8, this._yoyo && 1 & this._cycle ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
                else if (t < 1e-8)
                    if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, t > -1e-8 && (t = 0), (0 !== _ || 0 === m && 1e-8 !== b && (b > 0 || t < 0 && b >= 0) && !this._locked) && (l = "onReverseComplete", o = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = o = !0, l = "onReverseComplete") : b >= 0 && this._first && (u = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : 1e-8, 0 === t && o)
                            for (s = this._first; s && 0 === s._startTime;) s._duration || (o = !1), s = s._next;
                        t = 0, this._initted || (u = !0)
                    }
                else if (0 === m && b < 0 && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (h = m + this._repeatDelay, this._cycle = this._totalTime / h >> 0, this._cycle && this._cycle === this._totalTime / h && v <= t && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 1 & this._cycle && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                    if ((t = this._time) >= _ || this._repeat && x !== this._cycle)
                        for (s = this._first; s && s._startTime <= t && !c;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (c = s), s = s._next;
                    else
                        for (s = this._last; s && s._startTime >= t && !c;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (c = s), s = s._prev;
                    c && (p = this._startTime + c._startTime / this._timeScale, c._startTime < m && (this._time = this._rawPrevTime = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)))
                }
                if (this._cycle !== x && !this._locked) {
                    var w = this._yoyo && 0 != (1 & x),
                        E = w === (this._yoyo && 0 != (1 & this._cycle)),
                        P = this._totalTime,
                        A = this._cycle,
                        R = this._rawPrevTime,
                        O = this._time;
                    if (this._totalTime = x * m, this._cycle < x ? w = !w : this._totalTime += m, this._time = _, this._rawPrevTime = 0 === m ? b - 1e-4 : b, this._cycle = x, this._locked = !0, _ = w ? 0 : m, this.render(_, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = A, this._locked = !1, this._callback("onRepeat")), _ !== this._time) return;
                    if (E && (this._cycle = x, this._locked = !0, _ = w ? m + 1e-4 : -1e-4, this.render(_, !0, !1)), this._locked = !1, this._paused && !T) return;
                    this._time = O, this._totalTime = P, this._cycle = A, this._rawPrevTime = R
                }
                if (this._time !== _ && this._first || i || u || c) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== v && t > 0 && (this._active = !0), 0 === v && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (f = this._time) >= _)
                        for (s = this._first; s && (a = s._next, f === this._time && (!this._paused || T));)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (c === s && (this.pause(), this._pauseTime = p), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    else
                        for (s = this._last; s && (a = s._prev, f === this._time && (!this._paused || T));) {
                            if (s._active || s._startTime <= _ && !s._paused && !s._gc) {
                                if (c === s) {
                                    for (c = s._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                    c = null, this.pause(), this._pauseTime = p
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                            }
                            s = a
                        }
                    this._onUpdate && (e || (r.length && n(), this._callback("onUpdate"))), l && (this._locked || this._gc || y !== this._startTime && g === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (o && (r.length && n(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                } else v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, a.getActive = function(t, e, r) {
                var i, n, s = [],
                    o = this.getChildren(t || null == t, e || null == t, !!r),
                    a = 0,
                    l = o.length;
                for (i = 0; i < l; i++)(n = o[i]).isActive() && (s[a++] = n);
                return s
            }, a.getLabelAfter = function(t) {
                t || 0 !== t && (t = this._time);
                var e, r = this.getLabelsArray(),
                    i = r.length;
                for (e = 0; e < i; e++)
                    if (r[e].time > t) return r[e].name;
                return null
            }, a.getLabelBefore = function(t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), r = e.length; --r > -1;)
                    if (e[r].time < t) return e[r].name;
                return null
            }, a.getLabelsArray = function() {
                var t, e = [],
                    r = 0;
                for (t in this._labels) e[r++] = {
                    time: this._labels[t],
                    name: t
                };
                return e.sort(function(t, e) {
                    return t.time - e.time
                }), e
            }, a.invalidate = function() {
                return this._locked = !1, f.prototype.invalidate.call(this)
            }, a.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
            }, a.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
            }, a.totalDuration = function(t) {
                return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (f.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, a.time = function(t, e) {
                if (!arguments.length) return this._time;
                this._dirty && this.totalDuration();
                var r = this._duration,
                    i = this._cycle,
                    n = i * (r + this._repeatDelay);
                return t > r && (t = r), this.totalTime(this._yoyo && 1 & i ? r - t + n : this._repeat ? t + n : t, e)
            }, a.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, a.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, a.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, a.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
            }, t
        }, !0);
        var p = i.j.TimelineMax,
            _ = 180 / Math.PI,
            d = [],
            m = [],
            v = [],
            y = {},
            g = i.h._gsDefine.globals,
            b = function(t, e, r, i) {
                r === i && (r = i - (i - e) / 1e6), t === e && (e = t + (r - t) / 1e6), this.a = t, this.b = e, this.c = r, this.d = i, this.da = i - t, this.ca = r - t, this.ba = e - t
            },
            T = function(t, e, r, i) {
                var n = {
                        a: t
                    },
                    s = {},
                    o = {},
                    a = {
                        c: i
                    },
                    l = (t + e) / 2,
                    u = (e + r) / 2,
                    h = (r + i) / 2,
                    c = (l + u) / 2,
                    f = (u + h) / 2,
                    p = (f - c) / 8;
                return n.b = l + (t - l) / 4, s.b = c + p, n.c = s.a = (n.b + s.b) / 2, s.c = o.a = (c + f) / 2, o.b = f - p, a.b = h + (i - h) / 4, o.c = a.a = (o.b + a.b) / 2, [n, s, o, a]
            },
            x = function(t, e, r, i, n) {
                var s, o, a, l, u, h, c, f, p, _, y, g, b, x = t.length - 1,
                    w = 0,
                    E = t[0].a;
                for (s = 0; s < x; s++) o = (u = t[w]).a, a = u.d, l = t[w + 1].d, n ? (y = d[s], b = ((g = m[s]) + y) * e * .25 / (i ? .5 : v[s] || .5), f = a - ((h = a - (a - o) * (i ? .5 * e : 0 !== y ? b / y : 0)) + (((c = a + (l - a) * (i ? .5 * e : 0 !== g ? b / g : 0)) - h) * (3 * y / (y + g) + .5) / 4 || 0))) : f = a - ((h = a - (a - o) * e * .5) + (c = a + (l - a) * e * .5)) / 2, h += f, c += f, u.c = p = h, u.b = 0 !== s ? E : E = u.a + .6 * (u.c - u.a), u.da = a - o, u.ca = p - o, u.ba = E - o, r ? (_ = T(o, E, p, a), t.splice(w, 1, _[0], _[1], _[2], _[3]), w += 4) : w++, E = c;
                (u = t[w]).b = E, u.c = E + .4 * (u.d - E), u.da = u.d - u.a, u.ca = u.c - u.a, u.ba = E - u.a, r && (_ = T(u.a, E, u.c, u.d), t.splice(w, 1, _[0], _[1], _[2], _[3]))
            },
            w = function(t, e, r, i) {
                var n, s, o, a, l, u, h = [];
                if (i)
                    for (s = (t = [i].concat(t)).length; --s > -1;) "string" == typeof(u = t[s][e]) && "=" === u.charAt(1) && (t[s][e] = i[e] + Number(u.charAt(0) + u.substr(2)));
                if ((n = t.length - 2) < 0) return h[0] = new b(t[0][e], 0, 0, t[0][e]), h;
                for (s = 0; s < n; s++) o = t[s][e], a = t[s + 1][e], h[s] = new b(o, 0, 0, a), r && (l = t[s + 2][e], d[s] = (d[s] || 0) + (a - o) * (a - o), m[s] = (m[s] || 0) + (l - a) * (l - a));
                return h[s] = new b(t[s][e], 0, 0, t[s + 1][e]), h
            },
            E = function(t, e, r, i, n, s) {
                var o, a, l, u, h, c, f, p, _ = {},
                    g = [],
                    b = s || t[0];
                for (a in n = "string" == typeof n ? "," + n + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) g.push(a);
                if (t.length > 1) {
                    for (p = t[t.length - 1], f = !0, o = g.length; --o > -1;)
                        if (a = g[o], Math.abs(b[a] - p[a]) > .05) {
                            f = !1;
                            break
                        }
                    f && (t = t.concat(), s && t.unshift(s), t.push(t[1]), s = t[t.length - 3])
                }
                for (d.length = m.length = v.length = 0, o = g.length; --o > -1;) a = g[o], y[a] = -1 !== n.indexOf("," + a + ","), _[a] = w(t, a, y[a], s);
                for (o = d.length; --o > -1;) d[o] = Math.sqrt(d[o]), m[o] = Math.sqrt(m[o]);
                if (!i) {
                    for (o = g.length; --o > -1;)
                        if (y[a])
                            for (c = (l = _[g[o]]).length - 1, u = 0; u < c; u++) h = l[u + 1].da / m[u] + l[u].da / d[u] || 0, v[u] = (v[u] || 0) + h * h;
                    for (o = v.length; --o > -1;) v[o] = Math.sqrt(v[o])
                }
                for (o = g.length, u = r ? 4 : 1; --o > -1;) l = _[a = g[o]], x(l, e, r, i, y[a]), f && (l.splice(0, u), l.splice(l.length - u, u));
                return _
            },
            P = function(t, e, r) {
                for (var i, n, s, o, a, l, u, h, c, f, p, _ = 1 / r, d = t.length; --d > -1;)
                    for (s = (f = t[d]).a, o = f.d - s, a = f.c - s, l = f.b - s, i = n = 0, h = 1; h <= r; h++) i = n - (n = ((u = _ * h) * u * o + 3 * (c = 1 - u) * (u * a + c * l)) * u), e[p = d * r + h - 1] = (e[p] || 0) + i * i
            },
            A = i.h._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.8",
                API: 2,
                global: !0,
                init: function(t, e, r) {
                    this._target = t, e instanceof Array && (e = {
                        values: e
                    }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                    var i, n, s, o, a, l = e.values || [],
                        u = {},
                        h = l[0],
                        c = e.autoRotate || r.vars.orientToBezier;
                    for (i in this._autoRotate = c ? c instanceof Array ? c : [
                            ["x", "y", "rotation", !0 === c ? 0 : Number(c) || 0]
                        ] : null, h) this._props.push(i);
                    for (s = this._props.length; --s > -1;) i = this._props[s], this._overwriteProps.push(i), n = this._func[i] = "function" == typeof t[i], u[i] = n ? t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(t[i]), a || u[i] !== l[0][i] && (a = u);
                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? E(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : function(t, e, r) {
                            var i, n, s, o, a, l, u, h, c, f, p, _ = {},
                                d = "cubic" === (e = e || "soft") ? 3 : 2,
                                m = "soft" === e,
                                v = [];
                            if (m && r && (t = [r].concat(t)), null == t || t.length < d + 1) throw "invalid Bezier data";
                            for (c in t[0]) v.push(c);
                            for (l = v.length; --l > -1;) {
                                for (_[c = v[l]] = a = [], f = 0, h = t.length, u = 0; u < h; u++) i = null == r ? t[u][c] : "string" == typeof(p = t[u][c]) && "=" === p.charAt(1) ? r[c] + Number(p.charAt(0) + p.substr(2)) : Number(p), m && u > 1 && u < h - 1 && (a[f++] = (i + a[f - 2]) / 2), a[f++] = i;
                                for (h = f - d + 1, f = 0, u = 0; u < h; u += d) i = a[u], n = a[u + 1], s = a[u + 2], o = 2 === d ? 0 : a[u + 3], a[f++] = p = 3 === d ? new b(i, n, s, o) : new b(i, (2 * n + i) / 3, (2 * n + s) / 3, s);
                                a.length = f
                            }
                            return _
                        }(l, e.type, u), this._segCount = this._beziers[i].length, this._timeRes) {
                        var f = function(t, e) {
                            var r, i, n, s, o = [],
                                a = [],
                                l = 0,
                                u = 0,
                                h = (e = e >> 0 || 6) - 1,
                                c = [],
                                f = [];
                            for (r in t) P(t[r], o, e);
                            for (n = o.length, i = 0; i < n; i++) l += Math.sqrt(o[i]), f[s = i % e] = l, s === h && (u += l, c[s = i / e >> 0] = f, a[s] = u, l = 0, f = []);
                            return {
                                length: u,
                                lengths: a,
                                segments: c
                            }
                        }(this._beziers, this._timeRes);
                        this._length = f.length, this._lengths = f.lengths, this._segments = f.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (c = this._autoRotate)
                        for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), s = c.length; --s > -1;) {
                            for (o = 0; o < 3; o++) i = c[s][o], this._func[i] = "function" == typeof t[i] && t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)];
                            i = c[s][2], this._initialRotations[s] = (this._func[i] ? this._func[i].call(this._target) : this._target[i]) || 0, this._overwriteProps.push(i)
                        }
                    return this._startRatio = r.vars.runBackwards ? 1 : 0, !0
                },
                set: function(t) {
                    var e, r, i, n, s, o, a, l, u, h, c = this._segCount,
                        f = this._func,
                        p = this._target,
                        d = t !== this._startRatio;
                    if (this._timeRes) {
                        if (u = this._lengths, h = this._curSeg, t *= this._length, i = this._li, t > this._l2 && i < c - 1) {
                            for (l = c - 1; i < l && (this._l2 = u[++i]) <= t;);
                            this._l1 = u[i - 1], this._li = i, this._curSeg = h = this._segments[i], this._s2 = h[this._s1 = this._si = 0]
                        } else if (t < this._l1 && i > 0) {
                            for (; i > 0 && (this._l1 = u[--i]) >= t;);
                            0 === i && t < this._l1 ? this._l1 = 0 : i++, this._l2 = u[i], this._li = i, this._curSeg = h = this._segments[i], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                        }
                        if (e = i, t -= this._l1, i = this._si, t > this._s2 && i < h.length - 1) {
                            for (l = h.length - 1; i < l && (this._s2 = h[++i]) <= t;);
                            this._s1 = h[i - 1], this._si = i
                        } else if (t < this._s1 && i > 0) {
                            for (; i > 0 && (this._s1 = h[--i]) >= t;);
                            0 === i && t < this._s1 ? this._s1 = 0 : i++, this._s2 = h[i], this._si = i
                        }
                        o = (i + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else o = (t - (e = t < 0 ? 0 : t >= 1 ? c - 1 : c * t >> 0) * (1 / c)) * c;
                    for (r = 1 - o, i = this._props.length; --i > -1;) n = this._props[i], a = (o * o * (s = this._beziers[n][e]).da + 3 * r * (o * s.ca + r * s.ba)) * o + s.a, this._mod[n] && (a = this._mod[n](a, p)), f[n] ? p[n](a) : p[n] = a;
                    if (this._autoRotate) {
                        var m, v, y, g, b, T, x, w = this._autoRotate;
                        for (i = w.length; --i > -1;) n = w[i][2], T = w[i][3] || 0, x = !0 === w[i][4] ? 1 : _, s = this._beziers[w[i][0]], m = this._beziers[w[i][1]], s && m && (s = s[e], m = m[e], v = s.a + (s.b - s.a) * o, v += ((g = s.b + (s.c - s.b) * o) - v) * o, g += (s.c + (s.d - s.c) * o - g) * o, y = m.a + (m.b - m.a) * o, y += ((b = m.b + (m.c - m.b) * o) - y) * o, b += (m.c + (m.d - m.c) * o - b) * o, a = d ? Math.atan2(b - y, g - v) * x + T : this._initialRotations[i], this._mod[n] && (a = this._mod[n](a, p)), f[n] ? p[n](a) : p[n] = a)
                    }
                }
            }),
            R = A.prototype;
        /*!
         * VERSION: 1.3.8
         * DATE: 2018-05-30
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         **/
        A.bezierThrough = E, A.cubicToQuadratic = T, A._autoCSS = !0, A.quadraticToCubic = function(t, e, r) {
            return new b(t, (2 * e + t) / 3, (2 * e + r) / 3, r)
        }, A._cssRegister = function() {
            var t = g.CSSPlugin;
            if (t) {
                var e = t._internals,
                    r = e._parseToProxy,
                    i = e._setPluginRatio,
                    n = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, s, o, a, l) {
                        e instanceof Array && (e = {
                            values: e
                        }), l = new A;
                        var u, h, c, f = e.values,
                            p = f.length - 1,
                            _ = [],
                            d = {};
                        if (p < 0) return a;
                        for (u = 0; u <= p; u++) c = r(t, f[u], o, a, l, p !== u), _[u] = c.end;
                        for (h in e) d[h] = e[h];
                        return d.values = _, (a = new n(t, "bezier", 0, 0, c.pt, 2)).data = c, a.plugin = l, a.setRatio = i, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (u = !0 === d.autoRotate ? 0 : Number(d.autoRotate), d.autoRotate = null != c.end.left ? [
                            ["left", "top", "rotation", u, !1]
                        ] : null != c.end.x && [
                            ["x", "y", "rotation", u, !1]
                        ]), d.autoRotate && (o._transform || o._enableTransforms(!1), c.autoRotate = o._target._gsTransform, c.proxy.rotation = c.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(c.proxy, d, o._tween), a
                    }
                })
            }
        }, R._mod = function(t) {
            for (var e, r = this._overwriteProps, i = r.length; --i > -1;)(e = t[r[i]]) && "function" == typeof e && (this._mod[r[i]] = e)
        }, R._kill = function(t) {
            var e, r, i = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e], delete this._func[e], r = i.length; --r > -1;) i[r] === e && i.splice(r, 1);
            if (i = this._autoRotate)
                for (r = i.length; --r > -1;) t[i[r][2]] && i.splice(r, 1);
            return this._super._kill.call(this, t)
        };
        var O = r(2);
        r.d(e, "f", function() {
            return S
        }), r.d(e, "e", function() {
            return f
        }), r.d(e, "c", function() {
            return i.d
        }), r.d(e, "d", function() {
            return i.e
        }), r.d(e, "b", function() {
            return i.c
        }), r.d(e, "a", function() {
            return O.e
        });
        /*!
         * VERSION: 2.1.2
         * DATE: 2019-03-01
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         **/
        var S = n.a;
        S._autoActivated = [f, p, s, o, A, a, c, O.a, O.d, O.b, O.g, O.i, O.j, O.c, O.e, O.h, O.f]
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return n
        }), r.d(e, "d", function() {
            return s
        }), r.d(e, "b", function() {
            return o
        }), r.d(e, "g", function() {
            return a
        }), r.d(e, "i", function() {
            return l
        }), r.d(e, "j", function() {
            return u
        }), r.d(e, "c", function() {
            return h
        }), r.d(e, "e", function() {
            return c
        }), r.d(e, "h", function() {
            return f
        }), r.d(e, "f", function() {
            return p
        });
        var i = r(0);
        /*!
         * VERSION: 1.16.1
         * DATE: 2018-08-27
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         **/
        i.h._gsDefine("easing.Back", ["easing.Ease"], function() {
            var t, e, r, n, s = i.h.GreenSockGlobals || i.h,
                o = s.com.greensock,
                a = 2 * Math.PI,
                l = Math.PI / 2,
                u = o._class,
                h = function(t, e) {
                    var r = u("easing." + t, function() {}, !0),
                        n = r.prototype = new i.b;
                    return n.constructor = r, n.getRatio = e, r
                },
                c = i.b.register || function() {},
                f = function(t, e, r, i, n) {
                    var s = u("easing." + t, {
                        easeOut: new e,
                        easeIn: new r,
                        easeInOut: new i
                    }, !0);
                    return c(s, t), s
                },
                p = function(t, e, r) {
                    this.t = t, this.v = e, r && (this.next = r, r.prev = this, this.c = r.v - e, this.gap = r.t - t)
                },
                _ = function(t, e) {
                    var r = u("easing." + t, function(t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        n = r.prototype = new i.b;
                    return n.constructor = r, n.getRatio = e, n.config = function(t) {
                        return new r(t)
                    }, r
                },
                d = f("Back", _("BackOut", function(t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                }), _("BackIn", function(t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), _("BackInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
                m = u("easing.SlowMo", function(t, e, r) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === r
                }, !0),
                v = m.prototype = new i.b;
            return v.constructor = m, v.getRatio = function(t) {
                var e = t + (.5 - t) * this._p;
                return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, m.ease = new m(.7, .7), v.config = m.config = function(t, e, r) {
                return new m(t, e, r)
            }, (v = (t = u("easing.SteppedEase", function(t, e) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
            }, !0)).prototype = new i.b).constructor = t, v.getRatio = function(t) {
                return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
            }, v.config = t.config = function(e, r) {
                return new t(e, r)
            }, (v = (e = u("easing.ExpoScaleEase", function(t, e, r) {
                this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = r
            }, !0)).prototype = new i.b).constructor = e, v.getRatio = function(t) {
                return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
            }, v.config = e.config = function(t, r, i) {
                return new e(t, r, i)
            }, (v = (r = u("easing.RoughEase", function(t) {
                for (var e, r, n, s, o, a, l = (t = t || {}).taper || "none", u = [], h = 0, c = 0 | (t.points || 20), f = c, _ = !1 !== t.randomize, d = !0 === t.clamp, m = t.template instanceof i.b ? t.template : null, v = "number" == typeof t.strength ? .4 * t.strength : .4; --f > -1;) e = _ ? Math.random() : 1 / c * f, r = m ? m.getRatio(e) : e, n = "none" === l ? v : "out" === l ? (s = 1 - e) * s * v : "in" === l ? e * e * v : e < .5 ? (s = 2 * e) * s * .5 * v : (s = 2 * (1 - e)) * s * .5 * v, _ ? r += Math.random() * n - .5 * n : f % 2 ? r += .5 * n : r -= .5 * n, d && (r > 1 ? r = 1 : r < 0 && (r = 0)), u[h++] = {
                    x: e,
                    y: r
                };
                for (u.sort(function(t, e) {
                        return t.x - e.x
                    }), a = new p(1, 1, null), f = c; --f > -1;) o = u[f], a = new p(o.x, o.y, a);
                this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
            }, !0)).prototype = new i.b).constructor = r, v.getRatio = function(t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && t <= e.t;) e = e.prev;
                return this._prev = e, e.v + (t - e.t) / e.gap * e.c
            }, v.config = function(t) {
                return new r(t)
            }, r.ease = new r, f("Bounce", h("BounceOut", function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), h("BounceIn", function(t) {
                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), h("BounceInOut", function(t) {
                var e = t < .5;
                return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), f("Circ", h("CircOut", function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), h("CircIn", function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), h("CircInOut", function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), f("Elastic", (n = function(t, e, r) {
                var n = u("easing." + t, function(t, e) {
                        this._p1 = t >= 1 ? t : 1, this._p2 = (e || r) / (t < 1 ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                    }, !0),
                    s = n.prototype = new i.b;
                return s.constructor = n, s.getRatio = e, s.config = function(t, e) {
                    return new n(t, e)
                }, n
            })("ElasticOut", function(t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            }, .3), n("ElasticIn", function(t) {
                return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
            }, .3), n("ElasticInOut", function(t) {
                return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
            }, .45)), f("Expo", h("ExpoOut", function(t) {
                return 1 - Math.pow(2, -10 * t)
            }), h("ExpoIn", function(t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), h("ExpoInOut", function(t) {
                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), f("Sine", h("SineOut", function(t) {
                return Math.sin(t * l)
            }), h("SineIn", function(t) {
                return 1 - Math.cos(t * l)
            }), h("SineInOut", function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), u("easing.EaseLookup", {
                find: function(t) {
                    return i.b.map[t]
                }
            }, !0), c(s.SlowMo, "SlowMo", "ease,"), c(r, "RoughEase", "ease,"), c(t, "SteppedEase", "ease,"), d
        }, !0);
        var n = i.j.Back,
            s = i.j.Elastic,
            o = i.j.Bounce,
            a = i.j.RoughEase,
            l = i.j.SlowMo,
            u = i.j.SteppedEase,
            h = i.j.Circ,
            c = i.j.Expo,
            f = i.j.Sine,
            p = i.j.ExpoScaleEase
    }, function(t, e, r) {
        /*!
         * @license twgl.js 4.8.2 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
         * Available via the MIT license.
         * see: http://github.com/greggman/twgl.js for details
         */
        var i;
        "undefined" != typeof self && self, i = function() {
            return function(t) {
                var e = {};

                function r(i) {
                    if (e[i]) return e[i].exports;
                    var n = e[i] = {
                        i: i,
                        l: !1,
                        exports: {}
                    };
                    return t[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
                }
                return r.m = t, r.c = e, r.d = function(t, e, i) {
                    r.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: i
                    })
                }, r.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }, r.t = function(t, e) {
                    if (1 & e && (t = r(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var i = Object.create(null);
                    if (r.r(i), Object.defineProperty(i, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t)
                        for (var n in t) r.d(i, n, function(e) {
                            return t[e]
                        }.bind(null, n));
                    return i
                }, r.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return r.d(e, "a", e), e
                }, r.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, r.p = "", r(r.s = "./src/twgl-full.js")
            }({
                "./src/attributes.js":
                    /*!***************************!*\
                      !*** ./src/attributes.js ***!
                      \***************************/
                    /*! no static exports found */
                    function(t, e, r) {
                        "use strict";
                        e.__esModule = !0, e.createAttribsFromArrays = m, e.createBuffersFromArrays = function(t, e) {
                            var r = {};
                            Object.keys(e).forEach(function(i) {
                                r[i] = y(t, e[i], i)
                            }), e.indices ? (r.numElements = e.indices.length, r.elementType = i.getGLTypeForTypedArray(d(e.indices), "indices")) : r.numElements = function(t) {
                                var e, r;
                                for (r = 0; r < v.length && !((e = v[r]) in t); ++r);
                                r === v.length && (e = Object.keys(t)[0]);
                                var i = t[e],
                                    n = h(i).length,
                                    s = _(i, e),
                                    o = n / s;
                                if (n % s > 0) throw "numComponents " + s + " not correct for length " + n;
                                return o
                            }(e);
                            return r
                        }, e.createBufferFromArray = y, e.createBufferFromTypedArray = l, e.createBufferInfoFromArrays = function(t, e, r) {
                            var n = m(t, e),
                                s = Object.assign({}, r || {});
                            s.attribs = Object.assign({}, r ? r.attribs : {}, n);
                            var a = e.indices;
                            if (a) {
                                var u = d(a, "indices");
                                s.indices = l(t, u, t.ELEMENT_ARRAY_BUFFER), s.numElements = u.length, s.elementType = i.getGLTypeForTypedArray(u)
                            } else s.numElements || (s.numElements = function(t, e) {
                                var r, i;
                                for (i = 0; i < v.length && !((r = v[i]) in e) && !((r = o.attribPrefix + r) in e); ++i);
                                i === v.length && (r = Object.keys(e)[0]);
                                var n = e[r];
                                t.bindBuffer(t.ARRAY_BUFFER, n.buffer);
                                var s = t.getBufferParameter(t.ARRAY_BUFFER, t.BUFFER_SIZE);
                                t.bindBuffer(t.ARRAY_BUFFER, null);
                                var a = function(t, e) {
                                        return e === t.BYTE ? 1 : e === t.UNSIGNED_BYTE ? 1 : e === t.SHORT ? 2 : e === t.UNSIGNED_SHORT ? 2 : e === t.INT ? 4 : e === t.UNSIGNED_INT ? 4 : e === t.FLOAT ? 4 : 0
                                    }(t, n.type),
                                    l = s / a,
                                    u = n.numComponents || n.size,
                                    h = l / u;
                                if (h % 1 != 0) throw "numComponents " + u + " not correct for length " + length;
                                return h
                            }(t, s.attribs));
                            return s
                        }, e.setAttribInfoBufferFromArray = function(t, e, r, i) {
                            r = d(r), void 0 !== i ? (t.bindBuffer(t.ARRAY_BUFFER, e.buffer), t.bufferSubData(t.ARRAY_BUFFER, i, r)) : a(t, t.ARRAY_BUFFER, e.buffer, r, e.drawType)
                        }, e.setAttributePrefix = function(t) {
                            o.attribPrefix = t
                        }, e.setAttributeDefaults_ = function(t) {
                            n.copyExistingProperties(t, o)
                        }, e.getNumComponents_ = _, e.getArray_ = h;
                        var i = s(r( /*! ./typedarrays.js */ "./src/typedarrays.js")),
                            n = s(r( /*! ./helper.js */ "./src/helper.js"));

                        function s(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var r in t)
                                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                                        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
                                        i.get || i.set ? Object.defineProperty(e, r, i) : e[r] = t[r]
                                    }
                            return e.default = t, e
                        }
                        var o = {
                            attribPrefix: ""
                        };

                        function a(t, e, r, i, n) {
                            t.bindBuffer(e, r), t.bufferData(e, i, n || t.STATIC_DRAW)
                        }

                        function l(t, e, r, i) {
                            if (n.isBuffer(t, e)) return e;
                            r = r || t.ARRAY_BUFFER;
                            var s = t.createBuffer();
                            return a(t, r, s, e, i), s
                        }

                        function u(t) {
                            return "indices" === t
                        }

                        function h(t) {
                            return t.length ? t : t.data
                        }
                        var c = /coord|texture/i,
                            f = /color|colour/i;

                        function p(t, e) {
                            var r;
                            if (e % (r = c.test(t) ? 2 : f.test(t) ? 4 : 3) > 0) throw "Can not guess numComponents for attribute '" + t + "'. Tried " + r + " but " + e + " values is not evenly divisible by " + r + ". You should specify it.";
                            return r
                        }

                        function _(t, e) {
                            return t.numComponents || t.size || p(e, h(t).length)
                        }

                        function d(t, e) {
                            if (i.isArrayBuffer(t)) return t;
                            if (i.isArrayBuffer(t.data)) return t.data;
                            Array.isArray(t) && (t = {
                                data: t
                            });
                            var r = t.type;
                            return r || (r = u(e) ? Uint16Array : Float32Array), new r(t.data)
                        }

                        function m(t, e) {
                            var r = {};
                            return Object.keys(e).forEach(function(n) {
                                if (!u(n)) {
                                    var s = e[n],
                                        a = s.attrib || s.name || s.attribName || o.attribPrefix + n;
                                    if (s.value) {
                                        if (!Array.isArray(s.value) && !i.isArrayBuffer(s.value)) throw new Error("array.value is not array or typedarray");
                                        r[a] = {
                                            value: s.value
                                        }
                                    } else {
                                        var h, c, f, m;
                                        if (s.buffer && s.buffer instanceof WebGLBuffer) h = s.buffer, m = s.numComponents || s.size, c = s.type, f = s.normalize;
                                        else if ("number" == typeof s || "number" == typeof s.data) {
                                            var v = s.data || s,
                                                y = s.type || Float32Array,
                                                g = v * y.BYTES_PER_ELEMENT;
                                            c = i.getGLTypeForTypedArrayType(y), f = void 0 !== s.normalize ? s.normalize : (T = y) === Int8Array || T === Uint8Array, m = s.numComponents || s.size || p(n, v), h = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, h), t.bufferData(t.ARRAY_BUFFER, g, s.drawType || t.STATIC_DRAW)
                                        } else {
                                            var b = d(s, n);
                                            h = l(t, b, void 0, s.drawType), c = i.getGLTypeForTypedArray(b), f = void 0 !== s.normalize ? s.normalize : function(t) {
                                                return t instanceof Int8Array || t instanceof Uint8Array
                                            }(b), m = _(s, n)
                                        }
                                        r[a] = {
                                            buffer: h,
                                            numComponents: m,
                                            type: c,
                                            normalize: f,
                                            stride: s.stride || 0,
                                            offset: s.offset || 0,
                                            divisor: void 0 === s.divisor ? void 0 : s.divisor,
                                            drawType: s.drawType
                                        }
                                    }
                                }
                                var T
                            }), t.bindBuffer(t.ARRAY_BUFFER, null), r
                        }
                        var v = ["position", "positions", "a_position"];

                        function y(t, e, r) {
                            var i = "indices" === r ? t.ELEMENT_ARRAY_BUFFER : t.ARRAY_BUFFER;
                            return l(t, d(e, r), i)
                        }
                    },
                "./src/draw.js":
                    /*!*********************!*\
                      !*** ./src/draw.js ***!
                      \*********************/
                    /*! no static exports found */
                    function(t, e, r) {
                        "use strict";
                        e.__esModule = !0, e.drawBufferInfo = n, e.drawObjectList = function(t, e) {
                            var r = null,
                                s = null;
                            e.forEach(function(e) {
                                if (!1 !== e.active) {
                                    var o = e.programInfo,
                                        a = e.vertexArrayInfo || e.bufferInfo,
                                        l = !1,
                                        u = void 0 === e.type ? t.TRIANGLES : e.type;
                                    o !== r && (r = o, t.useProgram(o.program), l = !0), (l || a !== s) && (s && s.vertexArrayObject && !a.vertexArrayObject && t.bindVertexArray(null), s = a, i.setBuffersAndAttributes(t, o, a)), i.setUniforms(o, e.uniforms), n(t, a, u, e.count, e.offset, e.instanceCount)
                                }
                            }), s.vertexArrayObject && t.bindVertexArray(null)
                        };
                        var i = function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var r in t)
                                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                                        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
                                        i.get || i.set ? Object.defineProperty(e, r, i) : e[r] = t[r]
                                    }
                            return e.default = t, e
                        }(r( /*! ./programs.js */ "./src/programs.js"));

                        function n(t, e, r, i, n, s) {
                            r = void 0 === r ? t.TRIANGLES : r;
                            var o = e.indices,
                                a = e.elementType,
                                l = void 0 === i ? e.numElements : i;
                            n = void 0 === n ? 0 : n, a || o ? void 0 !== s ? t.drawElementsInstanced(r, l, void 0 === a ? t.UNSIGNED_SHORT : e.elementType, n, s) : t.drawElements(r, l, void 0 === a ? t.UNSIGNED_SHORT : e.elementType, n) : void 0 !== s ? t.drawArraysInstanced(r, n, l, s) : t.drawArrays(r, n, l)
                        }
                    },
                "./src/framebuffers.js":
                    /*!*****************************!*\
                      !*** ./src/framebuffers.js ***!
                      \*****************************/
                    /*! no static exports found */
                    function(t, e, r) {
                        "use strict";
                        e.__esModule = !0, e.bindFramebufferInfo = function(t, e, r) {
                            r = r || t.FRAMEBUFFER, e ? (t.bindFramebuffer(r, e.framebuffer), t.viewport(0, 0, e.width, e.height)) : (t.bindFramebuffer(r, null), t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight))
                        }, e.createFramebufferInfo = function(t, e, r, s) {
                            var h = t.FRAMEBUFFER,
                                c = t.createFramebuffer();
                            t.bindFramebuffer(h, c), r = r || t.drawingBufferWidth, s = s || t.drawingBufferHeight;
                            var f = 0,
                                p = {
                                    framebuffer: c,
                                    attachments: [],
                                    width: r,
                                    height: s
                                };
                            return (e = e || a).forEach(function(e) {
                                var a = e.attachment,
                                    c = e.format,
                                    _ = function(t) {
                                        return l[t]
                                    }(c);
                                if (_ || (_ = o + f++), !a)
                                    if (function(t) {
                                            return u[t]
                                        }(c)) a = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, a), t.renderbufferStorage(t.RENDERBUFFER, c, r, s);
                                    else {
                                        var d = Object.assign({}, e);
                                        d.width = r, d.height = s, void 0 === d.auto && (d.auto = !1, d.min = d.min || d.minMag || t.LINEAR, d.mag = d.mag || d.minMag || t.LINEAR, d.wrapS = d.wrapS || d.wrap || t.CLAMP_TO_EDGE, d.wrapT = d.wrapT || d.wrap || t.CLAMP_TO_EDGE), a = i.createTexture(t, d)
                                    }
                                if (n.isRenderbuffer(t, a)) t.framebufferRenderbuffer(h, _, t.RENDERBUFFER, a);
                                else {
                                    if (!n.isTexture(t, a)) throw "unknown attachment type";
                                    t.framebufferTexture2D(h, _, e.texTarget || t.TEXTURE_2D, a, e.level || 0)
                                }
                                p.attachments.push(a)
                            }), p
                        }, e.resizeFramebufferInfo = function(t, e, r, s, o) {
                            s = s || t.drawingBufferWidth, o = o || t.drawingBufferHeight, e.width = s, e.height = o, (r = r || a).forEach(function(r, a) {
                                var l = e.attachments[a],
                                    u = r.format;
                                if (n.isRenderbuffer(t, l)) t.bindRenderbuffer(t.RENDERBUFFER, l), t.renderbufferStorage(t.RENDERBUFFER, u, s, o);
                                else {
                                    if (!n.isTexture(t, l)) throw "unknown attachment type";
                                    i.resizeTexture(t, l, r, s, o)
                                }
                            })
                        };
                        var i = s(r( /*! ./textures.js */ "./src/textures.js")),
                            n = s(r( /*! ./helper.js */ "./src/helper.js"));

                        function s(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var r in t)
                                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                                        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
                                        i.get || i.set ? Object.defineProperty(e, r, i) : e[r] = t[r]
                                    }
                            return e.default = t, e
                        }
                        var o = 36064,
                            a = [{
                                format: 6408,
                                type: 5121,
                                min: 9729,
                                wrap: 33071
                            }, {
                                format: 34041
                            }],
                            l = {};
                        l[34041] = 33306, l[6401] = 36128, l[36168] = 36128, l[6402] = 36096, l[33189] = 36096;
                        var u = {};
                        u[32854] = !0, u[32855] = !0, u[36194] = !0, u[34041] = !0, u[33189] = !0, u[6401] = !0, u[36168] = !0
                    },
                "./src/helper.js":
                    /*!***********************!*\
                      !*** ./src/helper.js ***!
                      \***********************/
                    /*! no static exports found */
                    function(t, e, r) {
                        "use strict";
                        e.__esModule = !0, e.copyExistingProperties = function(t, e) {
                            Object.keys(e).forEach(function(r) {
                                e.hasOwnProperty(r) && t.hasOwnProperty(r) && (e[r] = t[r])
                            })
                        }, e.copyNamedProperties = function(t, e, r) {
                            t.forEach(function(t) {
                                var i = e[t];
                                void 0 !== i && (r[t] = i)
                            })
                        }, e.isBuffer = function(t, e) {
                            n || (n = t.createBuffer());
                            return e instanceof n.constructor
                        }, e.isRenderbuffer = function(t, e) {
                            s || (s = t.createRenderbuffer());
                            return e instanceof s.constructor
                        }, e.isShader = function(t, e) {
                            o || (o = t.createShader(t.VERTEX_SHADER));
                            return e instanceof o.constructor
                        }, e.isTexture = function(t, e) {
                            a || (a = t.createTexture());
                            return e instanceof a.constructor
                        }, e.isSampler = function(t, e) {
                            if (!l) {
                                if (!t.createSampler) return !1;
                                l = t.createSampler()
                            }
                            return e instanceof l.constructor
                        }, e.warn = e.error = void 0;
                        var i = "undefined" != typeof console && console.error && "function" == typeof console.error ? console.error.bind(console) : function() {};
                        e.error = i;
                        var n, s, o, a, l, u = "undefined" != typeof console && console.warn && "function" == typeof console.warn ? console.warn.bind(console) : function() {};
                        e.warn = u
                    },
                "./src/m4.js":
                    /*!*******************!*\
                      !*** ./src/m4.js ***!
                      \*******************/
                    /*! no static exports found */
                    function(t, e, r) {
                        "use strict";
                        e.__esModule = !0, e.axisRotate = function(t, e, r, i) {
                            i = i || new n(16);
                            var s = e[0],
                                o = e[1],
                                a = e[2],
                                l = Math.sqrt(s * s + o * o + a * a),
                                u = (s /= l) * s,
                                h = (o /= l) * o,
                                c = (a /= l) * a,
                                f = Math.cos(r),
                                p = Math.sin(r),
                                _ = 1 - f,
                                d = u + (1 - u) * f,
                                m = s * o * _ + a * p,
                                v = s * a * _ - o * p,
                                y = s * o * _ - a * p,
                                g = h + (1 - h) * f,
                                b = o * a * _ + s * p,
                                T = s * a * _ + o * p,
                                x = o * a * _ - s * p,
                                w = c + (1 - c) * f,
                                E = t[0],
                                P = t[1],
                                A = t[2],
                                R = t[3],
                                O = t[4],
                                S = t[5],
                                F = t[6],
                                M = t[7],
                                C = t[8],
                                I = t[9],
                                k = t[10],
                                D = t[11];
                            i[0] = d * E + m * O + v * C, i[1] = d * P + m * S + v * I, i[2] = d * A + m * F + v * k, i[3] = d * R + m * M + v * D, i[4] = y * E + g * O + b * C, i[5] = y * P + g * S + b * I, i[6] = y * A + g * F + b * k, i[7] = y * R + g * M + b * D, i[8] = T * E + x * O + w * C, i[9] = T * P + x * S + w * I, i[10] = T * A + x * F + w * k, i[11] = T * R + x * M + w * D, t !== i && (i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]);
                            return i
                        }, e.axisRotation = function(t, e, r) {
                            r = r || new n(16);
                            var i = t[0],
                                s = t[1],
                                o = t[2],
                                a = Math.sqrt(i * i + s * s + o * o),
                                l = (i /= a) * i,
                                u = (s /= a) * s,
                                h = (o /= a) * o,
                                c = Math.cos(e),
                                f = Math.sin(e),
                                p = 1 - c;
                            return r[0] = l + (1 - l) * c, r[1] = i * s * p + o * f, r[2] = i * o * p - s * f, r[3] = 0, r[4] = i * s * p - o * f, r[5] = u + (1 - u) * c, r[6] = s * o * p + i * f, r[7] = 0, r[8] = i * o * p + s * f, r[9] = s * o * p - i * f, r[10] = h + (1 - h) * c, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, r
                        }, e.copy = l, e.frustum = function(t, e, r, i, s, o, a) {
                            a = a || new n(16);
                            var l = e - t,
                                u = i - r,
                                h = s - o;
                            return a[0] = 2 * s / l, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 * s / u, a[6] = 0, a[7] = 0, a[8] = (t + e) / l, a[9] = (i + r) / u, a[10] = o / h, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = s * o / h, a[15] = 0, a
                        }, e.getAxis = function(t, e, r) {
                            r = r || i.create();
                            var n = 4 * e;
                            return r[0] = t[n + 0], r[1] = t[n + 1], r[2] = t[n + 2], r
                        }, e.getTranslation = function(t, e) {
                            return (e = e || i.create())[0] = t[12], e[1] = t[13], e[2] = t[14], e
                        }, e.identity = u, e.inverse = h, e.lookAt = function(t, e, r, l) {
                            l = l || new n(16);
                            var u = s,
                                h = o,
                                c = a;
                            return i.normalize(i.subtract(t, e, c), c), i.normalize(i.cross(r, c, u), u), i.normalize(i.cross(c, u, h), h), l[0] = u[0], l[1] = u[1], l[2] = u[2], l[3] = 0, l[4] = h[0], l[5] = h[1], l[6] = h[2], l[7] = 0, l[8] = c[0], l[9] = c[1], l[10] = c[2], l[11] = 0, l[12] = t[0], l[13] = t[1], l[14] = t[2], l[15] = 1, l
                        }, e.multiply = function(t, e, r) {
                            r = r || new n(16);
                            var i = t[0],
                                s = t[1],
                                o = t[2],
                                a = t[3],
                                l = t[4],
                                u = t[5],
                                h = t[6],
                                c = t[7],
                                f = t[8],
                                p = t[9],
                                _ = t[10],
                                d = t[11],
                                m = t[12],
                                v = t[13],
                                y = t[14],
                                g = t[15],
                                b = e[0],
                                T = e[1],
                                x = e[2],
                                w = e[3],
                                E = e[4],
                                P = e[5],
                                A = e[6],
                                R = e[7],
                                O = e[8],
                                S = e[9],
                                F = e[10],
                                M = e[11],
                                C = e[12],
                                I = e[13],
                                k = e[14],
                                D = e[15];
                            return r[0] = i * b + l * T + f * x + m * w, r[1] = s * b + u * T + p * x + v * w, r[2] = o * b + h * T + _ * x + y * w, r[3] = a * b + c * T + d * x + g * w, r[4] = i * E + l * P + f * A + m * R, r[5] = s * E + u * P + p * A + v * R, r[6] = o * E + h * P + _ * A + y * R, r[7] = a * E + c * P + d * A + g * R, r[8] = i * O + l * S + f * F + m * M, r[9] = s * O + u * S + p * F + v * M, r[10] = o * O + h * S + _ * F + y * M, r[11] = a * O + c * S + d * F + g * M, r[12] = i * C + l * I + f * k + m * D, r[13] = s * C + u * I + p * k + v * D, r[14] = o * C + h * I + _ * k + y * D, r[15] = a * C + c * I + d * k + g * D, r
                        }, e.negate = function(t, e) {
                            return (e = e || new n(16))[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = -t[3], e[4] = -t[4], e[5] = -t[5], e[6] = -t[6], e[7] = -t[7], e[8] = -t[8], e[9] = -t[9], e[10] = -t[10], e[11] = -t[11], e[12] = -t[12], e[13] = -t[13], e[14] = -t[14], e[15] = -t[15], e
                        }, e.ortho = function(t, e, r, i, s, o, a) {
                            return (a = a || new n(16))[0] = 2 / (e - t), a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 / (i - r), a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 2 / (s - o), a[11] = 0, a[12] = (e + t) / (t - e), a[13] = (i + r) / (r - i), a[14] = (o + s) / (s - o), a[15] = 1, a
                        }, e.perspective = function(t, e, r, i, s) {
                            s = s || new n(16);
                            var o = Math.tan(.5 * Math.PI - .5 * t),
                                a = 1 / (r - i);
                            return s[0] = o / e, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = o, s[6] = 0, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = (r + i) * a, s[11] = -1, s[12] = 0, s[13] = 0, s[14] = r * i * a * 2, s[15] = 0, s
                        }, e.rotateX = function(t, e, r) {
                            r = r || new n(16);
                            var i = t[4],
                                s = t[5],
                                o = t[6],
                                a = t[7],
                                l = t[8],
                                u = t[9],
                                h = t[10],
                                c = t[11],
                                f = Math.cos(e),
                                p = Math.sin(e);
                            r[4] = f * i + p * l, r[5] = f * s + p * u, r[6] = f * o + p * h, r[7] = f * a + p * c, r[8] = f * l - p * i, r[9] = f * u - p * s, r[10] = f * h - p * o, r[11] = f * c - p * a, t !== r && (r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[12] = t[12], r[13] = t[13], r[14] = t[14], r[15] = t[15]);
                            return r
                        }, e.rotateY = function(t, e, r) {
                            r = r || new n(16);
                            var i = t[0],
                                s = t[1],
                                o = t[2],
                                a = t[3],
                                l = t[8],
                                u = t[9],
                                h = t[10],
                                c = t[11],
                                f = Math.cos(e),
                                p = Math.sin(e);
                            r[0] = f * i - p * l, r[1] = f * s - p * u, r[2] = f * o - p * h, r[3] = f * a - p * c, r[8] = f * l + p * i, r[9] = f * u + p * s, r[10] = f * h + p * o, r[11] = f * c + p * a, t !== r && (r[4] = t[4], r[5] = t[5], r[6] = t[6], r[7] = t[7], r[12] = t[12], r[13] = t[13], r[14] = t[14], r[15] = t[15]);
                            return r
                        }, e.rotateZ = function(t, e, r) {
                            r = r || new n(16);
                            var i = t[0],
                                s = t[1],
                                o = t[2],
                                a = t[3],
                                l = t[4],
                                u = t[5],
                                h = t[6],
                                c = t[7],
                                f = Math.cos(e),
                                p = Math.sin(e);
                            r[0] = f * i + p * l, r[1] = f * s + p * u, r[2] = f * o + p * h, r[3] = f * a + p * c, r[4] = f * l - p * i, r[5] = f * u - p * s, r[6] = f * h - p * o, r[7] = f * c - p * a, t !== r && (r[8] = t[8], r[9] = t[9], r[10] = t[10], r[11] = t[11], r[12] = t[12], r[13] = t[13], r[14] = t[14], r[15] = t[15]);
                            return r
                        }, e.rotationX = function(t, e) {
                            e = e || new n(16);
                            var r = Math.cos(t),
                                i = Math.sin(t);
                            return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = r, e[6] = i, e[7] = 0, e[8] = 0, e[9] = -i, e[10] = r, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                        }, e.rotationY = function(t, e) {
                            e = e || new n(16);
                            var r = Math.cos(t),
                                i = Math.sin(t);
                            return e[0] = r, e[1] = 0, e[2] = -i, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = i, e[9] = 0, e[10] = r, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                        }, e.rotationZ = function(t, e) {
                            e = e || new n(16);
                            var r = Math.cos(t),
                                i = Math.sin(t);
                            return e[0] = r, e[1] = i, e[2] = 0, e[3] = 0, e[4] = -i, e[5] = r, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                        }, e.scale = function(t, e, r) {
                            r = r || new n(16);
                            var i = e[0],
                                s = e[1],
                                o = e[2];
                            r[0] = i * t[0], r[1] = i * t[1], r[2] = i * t[2], r[3] = i * t[3], r[4] = s * t[4], r[5] = s * t[5], r[6] = s * t[6], r[7] = s * t[7], r[8] = o * t[8], r[9] = o * t[9], r[10] = o * t[10], r[11] = o * t[11], t !== r && (r[12] = t[12], r[13] = t[13], r[14] = t[14], r[15] = t[15]);
                            return r
                        }, e.scaling = function(t, e) {
                            return (e = e || new n(16))[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = t[1], e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = t[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                        }, e.setAxis = function(t, e, r, i) {
                            i !== t && (i = l(t, i));
                            var n = 4 * r;
                            return i[n + 0] = e[0], i[n + 1] = e[1], i[n + 2] = e[2], i
                        }, e.setDefaultType = function(t) {
                            var e = n;
                            return n = t, e
                        }, e.setTranslation = function(t, e, r) {
                            r = r || u(), t !== r && (r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r[6] = t[6], r[7] = t[7], r[8] = t[8], r[9] = t[9], r[10] = t[10], r[11] = t[11]);
                            return r[12] = e[0], r[13] = e[1], r[14] = e[2], r[15] = 1, r
                        }, e.transformDirection = function(t, e, r) {
                            r = r || i.create();
                            var n = e[0],
                                s = e[1],
                                o = e[2];
                            return r[0] = n * t[0] + s * t[4] + o * t[8], r[1] = n * t[1] + s * t[5] + o * t[9], r[2] = n * t[2] + s * t[6] + o * t[10], r
                        }, e.transformNormal = function(t, e, r) {
                            r = r || i.create();
                            var n = h(t),
                                s = e[0],
                                o = e[1],
                                a = e[2];
                            return r[0] = s * n[0] + o * n[1] + a * n[2], r[1] = s * n[4] + o * n[5] + a * n[6], r[2] = s * n[8] + o * n[9] + a * n[10], r
                        }, e.transformPoint = function(t, e, r) {
                            r = r || i.create();
                            var n = e[0],
                                s = e[1],
                                o = e[2],
                                a = n * t[3] + s * t[7] + o * t[11] + t[15];
                            return r[0] = (n * t[0] + s * t[4] + o * t[8] + t[12]) / a, r[1] = (n * t[1] + s * t[5] + o * t[9] + t[13]) / a, r[2] = (n * t[2] + s * t[6] + o * t[10] + t[14]) / a, r
                        }, e.translate = function(t, e, r) {
                            r = r || new n(16);
                            var i = e[0],
                                s = e[1],
                                o = e[2],
                                a = t[0],
                                l = t[1],
                                u = t[2],
                                h = t[3],
                                c = t[4],
                                f = t[5],
                                p = t[6],
                                _ = t[7],
                                d = t[8],
                                m = t[9],
                                v = t[10],
                                y = t[11],
                                g = t[12],
                                b = t[13],
                                T = t[14],
                                x = t[15];
                            t !== r && (r[0] = a, r[1] = l, r[2] = u, r[3] = h, r[4] = c, r[5] = f, r[6] = p, r[7] = _, r[8] = d, r[9] = m, r[10] = v, r[11] = y);
                            return r[12] = a * i + c * s + d * o + g, r[13] = l * i + f * s + m * o + b, r[14] = u * i + p * s + v * o + T, r[15] = h * i + _ * s + y * o + x, r
                        }, e.translation = function(t, e) {
                            return (e = e || new n(16))[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], e[15] = 1, e
                        }, e.transpose = function(t, e) {
                            if ((e = e || new n(16)) === t) {
                                var r;
                                return r = t[1], t[1] = t[4], t[4] = r, r = t[2], t[2] = t[8], t[8] = r, r = t[3], t[3] = t[12], t[12] = r, r = t[6], t[6] = t[9], t[9] = r, r = t[7], t[7] = t[13], t[13] = r, r = t[11], t[11] = t[14], t[14] = r, e
                            }
                            var i = t[0],
                                s = t[1],
                                o = t[2],
                                a = t[3],
                                l = t[4],
                                u = t[5],
                                h = t[6],
                                c = t[7],
                                f = t[8],
                                p = t[9],
                                _ = t[10],
                                d = t[11],
                                m = t[12],
                                v = t[13],
                                y = t[14],
                                g = t[15];
                            return e[0] = i, e[1] = l, e[2] = f, e[3] = m, e[4] = s, e[5] = u, e[6] = p, e[7] = v, e[8] = o, e[9] = h, e[10] = _, e[11] = y, e[12] = a, e[13] = c, e[14] = d, e[15] = g, e
                        };
                        var i = function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var r in t)
                                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                                        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
                                        i.get || i.set ? Object.defineProperty(e, r, i) : e[r] = t[r]
                                    }
                            return e.default = t, e
                        }(r( /*! ./v3.js */ "./src/v3.js"));
                        var n = Float32Array,
                            s = i.create(),
                            o = i.create(),
                            a = i.create();

                        function l(t, e) {
                            return (e = e || new n(16))[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
                        }

                        function u(t) {
                            return (t = t || new n(16))[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                        }

                        function h(t, e) {
                            e = e || new n(16);
                            var r = t[0],
                                i = t[1],
                                s = t[2],
                                o = t[3],
                                a = t[4],
                                l = t[5],
                                u = t[6],
                                h = t[7],
                                c = t[8],
                                f = t[9],
                                p = t[10],
                                _ = t[11],
                                d = t[12],
                                m = t[13],
                                v = t[14],
                                y = t[15],
                                g = p * y,
                                b = v * _,
                                T = u * y,
                                x = v * h,
                                w = u * _,
                                E = p * h,
                                P = s * y,
                                A = v * o,
                                R = s * _,
                                O = p * o,
                                S = s * h,
                                F = u * o,
                                M = c * m,
                                C = d * f,
                                I = a * m,
                                k = d * l,
                                D = a * f,
                                B = c * l,
                                U = r * m,
                                L = d * i,
                                N = r * f,
                                j = c * i,
                                X = r * l,
                                z = a * i,
                                Y = g * l + x * f + w * m - (b * l + T * f + E * m),
                                G = b * i + P * f + O * m - (g * i + A * f + R * m),
                                V = T * i + A * l + S * m - (x * i + P * l + F * m),
                                W = E * i + R * l + F * f - (w * i + O * l + S * f),
                                K = 1 / (r * Y + a * G + c * V + d * W);
                            return e[0] = K * Y, e[1] = K * G, e[2] = K * V, e[3] = K * W, e[4] = K * (b * a + T * c + E * d - (g * a + x * c + w * d)), e[5] = K * (g * r + A * c + R * d - (b * r + P * c + O * d)), e[6] = K * (x * r + P * a + F * d - (T * r + A * a + S * d)), e[7] = K * (w * r + O * a + S * c - (E * r + R * a + F * c)), e[8] = K * (M * h + k * _ + D * y - (C * h + I * _ + B * y)), e[9] = K * (C * o + U * _ + j * y - (M * o + L * _ + N * y)), e[10] = K * (I * o + L * h + X * y - (k * o + U * h + z * y)), e[11] = K * (B * o + N * h + z * _ - (D * o + j * h + X * _)), e[12] = K * (I * p + B * v + C * u - (D * v + M * u + k * p)), e[13] = K * (N * v + M * s + L * p - (U * p + j * v + C * s)), e[14] = K * (U * u + z * v + k * s - (X * v + I * s + L * u)), e[15] = K * (X * p + D * s + j * u - (N * u + z * p + B * s)), e
                        }
                    },
                "./src/primitives.js":
                    /*!***************************!*\
                      !*** ./src/primitives.js ***!
                      \***************************/
                    /*! no static exports found */
                    function(t, e, r) {
                        "use strict";
                        e.__esModule = !0, e.create3DFVertices = R, e.createAugmentedTypedArray = f, e.createCubeVertices = E, e.createPlaneVertices = T, e.createSphereVertices = x, e.createTruncatedConeVertices = P, e.createXYQuadVertices = b, e.createCresentVertices = O, e.createCylinderVertices = S, e.createTorusVertices = F, e.createDiscVertices = M, e.deindexVertices = function(t) {
                            var e = t.indices,
                                r = {},
                                i = e.length;
                            return Object.keys(t).filter(p).forEach(function(n) {
                                for (var s = t[n], o = s.numComponents, a = f(o, i, s.constructor), l = 0; l < i; ++l)
                                    for (var u = e[l], h = u * o, c = 0; c < o; ++c) a.push(s[h + c]);
                                r[n] = a
                            }), r
                        }, e.flattenNormals = function(t) {
                            if (t.indices) throw "can't flatten normals of indexed vertices. deindex them first";
                            for (var e = t.normal, r = e.length, i = 0; i < r; i += 9) {
                                var n = e[i + 0],
                                    s = e[i + 1],
                                    o = e[i + 2],
                                    a = e[i + 3],
                                    l = e[i + 4],
                                    u = e[i + 5],
                                    h = e[i + 6],
                                    c = e[i + 7],
                                    f = e[i + 8],
                                    p = n + a + h,
                                    _ = s + l + c,
                                    d = o + u + f,
                                    m = Math.sqrt(p * p + _ * _ + d * d);
                                p /= m, _ /= m, d /= m, e[i + 0] = p, e[i + 1] = _, e[i + 2] = d, e[i + 3] = p, e[i + 4] = _, e[i + 5] = d, e[i + 6] = p, e[i + 7] = _, e[i + 8] = d
                            }
                            return t
                        }, e.makeRandomVertexColors = function(t, e) {
                            e = e || {};
                            var r = t.position.numElements,
                                i = f(4, r, Uint8Array),
                                n = e.rand || function(t, e) {
                                    return e < 3 ? (r = 256, Math.random() * r | 0) : 255;
                                    var r
                                };
                            if (t.color = i, t.indices)
                                for (var s = 0; s < r; ++s) i.push(n(s, 0), n(s, 1), n(s, 2), n(s, 3));
                            else
                                for (var o = e.vertsPerColor || 3, a = r / o, l = 0; l < a; ++l)
                                    for (var u = [n(l, 0), n(l, 1), n(l, 2), n(l, 3)], h = 0; h < o; ++h) i.push(u);
                            return t
                        }, e.reorientDirections = m, e.reorientNormals = v, e.reorientPositions = y, e.reorientVertices = g, e.concatVertices = function(t) {
                            for (var e, r = {}, i = function(i) {
                                    var n = t[i];
                                    Object.keys(n).forEach(function(t) {
                                        r[t] || (r[t] = []), e || "indices" === t || (e = t);
                                        var i = n[t],
                                            s = h(i, t),
                                            o = u(i),
                                            a = o.length / s;
                                        r[t].push(a)
                                    })
                                }, n = 0; n < t.length; ++n) i(n);
                            var s = r[e],
                                o = {};
                            return Object.keys(r).forEach(function(e) {
                                var r = function(e) {
                                        for (var r, i = 0, n = 0; n < t.length; ++n) {
                                            var s = t[n],
                                                o = s[e],
                                                a = u(o);
                                            i += a.length, r && !o.data || (r = o)
                                        }
                                        return {
                                            length: i,
                                            spec: r
                                        }
                                    }(e),
                                    i = B(r.spec, r.length);
                                ! function(e, r, i) {
                                    for (var n = 0, s = 0, o = 0; o < t.length; ++o) {
                                        var a = t[o],
                                            l = a[e],
                                            h = u(l);
                                        "indices" === e ? (D(h, i, s, n), n += r[o]) : D(h, i, s), s += h.length
                                    }
                                }(e, s, u(i)), o[e] = i
                            }), o
                        }, e.duplicateVertices = function(t) {
                            var e = {};
                            return Object.keys(t).forEach(function(r) {
                                var i = t[r],
                                    n = u(i),
                                    s = B(i, n.length);
                                D(n, u(s), 0), e[r] = s
                            }), e
                        }, e.createDiscBuffers = e.createDiscBufferInfo = e.createTorusBuffers = e.createTorusBufferInfo = e.createCylinderBuffers = e.createCylinderBufferInfo = e.createCresentBuffers = e.createCresentBufferInfo = e.createXYQuadBuffers = e.createXYQuadBufferInfo = e.createTruncatedConeBuffers = e.createTruncatedConeBufferInfo = e.createSphereBuffers = e.createSphereBufferInfo = e.createPlaneBuffers = e.createPlaneBufferInfo = e.createCubeBuffers = e.createCubeBufferInfo = e.create3DFBuffers = e.create3DFBufferInfo = void 0;
                        var i = l(r( /*! ./attributes.js */ "./src/attributes.js")),
                            n = l(r( /*! ./helper.js */ "./src/helper.js")),
                            s = l(r( /*! ./typedarrays.js */ "./src/typedarrays.js")),
                            o = l(r( /*! ./m4.js */ "./src/m4.js")),
                            a = l(r( /*! ./v3.js */ "./src/v3.js"));

                        function l(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var r in t)
                                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                                        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
                                        i.get || i.set ? Object.defineProperty(e, r, i) : e[r] = t[r]
                                    }
                            return e.default = t, e
                        }
                        var u = i.getArray_,
                            h = i.getNumComponents_;

                        function c(t, e) {
                            var r = 0;
                            return t.push = function() {
                                for (var e = 0; e < arguments.length; ++e) {
                                    var i = arguments[e];
                                    if (i instanceof Array || s.isArrayBuffer(i))
                                        for (var n = 0; n < i.length; ++n) t[r++] = i[n];
                                    else t[r++] = i
                                }
                            }, t.reset = function(t) {
                                r = t || 0
                            }, t.numComponents = e, Object.defineProperty(t, "numElements", {
                                get: function() {
                                    return this.length / this.numComponents | 0
                                }
                            }), t
                        }

                        function f(t, e, r) {
                            return c(new(r || Float32Array)(t * e), t)
                        }

                        function p(t) {
                            return "indices" !== t
                        }

                        function _(t, e, r) {
                            for (var i = t.length, n = new Float32Array(3), s = 0; s < i; s += 3) r(e, [t[s], t[s + 1], t[s + 2]], n), t[s] = n[0], t[s + 1] = n[1], t[s + 2] = n[2]
                        }

                        function d(t, e, r) {
                            r = r || a.create();
                            var i = e[0],
                                n = e[1],
                                s = e[2];
                            return r[0] = i * t[0] + n * t[1] + s * t[2], r[1] = i * t[4] + n * t[5] + s * t[6], r[2] = i * t[8] + n * t[9] + s * t[10], r
                        }

                        function m(t, e) {
                            return _(t, e, o.transformDirection), t
                        }

                        function v(t, e) {
                            return _(t, o.inverse(e), d), t
                        }

                        function y(t, e) {
                            return _(t, e, o.transformPoint), t
                        }

                        function g(t, e) {
                            return Object.keys(t).forEach(function(r) {
                                var i = t[r];
                                r.indexOf("pos") >= 0 ? y(i, e) : r.indexOf("tan") >= 0 || r.indexOf("binorm") >= 0 ? m(i, e) : r.indexOf("norm") >= 0 && v(i, e)
                            }), t
                        }

                        function b(t, e, r) {
                            return t = t || 2, {
                                position: {
                                    numComponents: 2,
                                    data: [(e = e || 0) + -1 * (t *= .5), (r = r || 0) + -1 * t, e + 1 * t, r + -1 * t, e + -1 * t, r + 1 * t, e + 1 * t, r + 1 * t]
                                },
                                normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
                                texcoord: [0, 0, 1, 0, 0, 1, 1, 1],
                                indices: [0, 1, 2, 2, 1, 3]
                            }
                        }

                        function T(t, e, r, i, n) {
                            t = t || 1, e = e || 1, r = r || 1, i = i || 1, n = n || o.identity();
                            for (var s = (r + 1) * (i + 1), a = f(3, s), l = f(3, s), u = f(2, s), h = 0; h <= i; h++)
                                for (var c = 0; c <= r; c++) {
                                    var p = c / r,
                                        _ = h / i;
                                    a.push(t * p - .5 * t, 0, e * _ - .5 * e), l.push(0, 1, 0), u.push(p, _)
                                }
                            for (var d = r + 1, m = f(3, r * i * 2, Uint16Array), v = 0; v < i; v++)
                                for (var y = 0; y < r; y++) m.push((v + 0) * d + y, (v + 1) * d + y, (v + 0) * d + y + 1), m.push((v + 1) * d + y, (v + 1) * d + y + 1, (v + 0) * d + y + 1);
                            return g({
                                position: a,
                                normal: l,
                                texcoord: u,
                                indices: m
                            }, n)
                        }

                        function x(t, e, r, i, n, s, o) {
                            if (e <= 0 || r <= 0) throw Error("subdivisionAxis and subdivisionHeight must be > 0");
                            i = i || 0, s = s || 0;
                            for (var a = (n = n || Math.PI) - i, l = (o = o || 2 * Math.PI) - s, u = (e + 1) * (r + 1), h = f(3, u), c = f(3, u), p = f(2, u), _ = 0; _ <= r; _++)
                                for (var d = 0; d <= e; d++) {
                                    var m = d / e,
                                        v = _ / r,
                                        y = l * m + s,
                                        g = a * v + i,
                                        b = Math.sin(y),
                                        T = Math.cos(y),
                                        x = Math.sin(g),
                                        w = T * x,
                                        E = Math.cos(g),
                                        P = b * x;
                                    h.push(t * w, t * E, t * P), c.push(w, E, P), p.push(1 - m, v)
                                }
                            for (var A = e + 1, R = f(3, e * r * 2, Uint16Array), O = 0; O < e; O++)
                                for (var S = 0; S < r; S++) R.push((S + 0) * A + O, (S + 0) * A + O + 1, (S + 1) * A + O), R.push((S + 1) * A + O, (S + 0) * A + O + 1, (S + 1) * A + O + 1);
                            return {
                                position: h,
                                normal: c,
                                texcoord: p,
                                indices: R
                            }
                        }
                        var w = [
                            [3, 7, 5, 1],
                            [6, 2, 0, 4],
                            [6, 7, 3, 2],
                            [0, 1, 5, 4],
                            [7, 6, 4, 5],
                            [2, 3, 1, 0]
                        ];

                        function E(t) {
                            for (var e = (t = t || 1) / 2, r = [
                                    [-e, -e, -e],
                                    [+e, -e, -e],
                                    [-e, +e, -e],
                                    [+e, +e, -e],
                                    [-e, -e, +e],
                                    [+e, -e, +e],
                                    [-e, +e, +e],
                                    [+e, +e, +e]
                                ], i = [
                                    [1, 0, 0],
                                    [-1, 0, 0],
                                    [0, 1, 0],
                                    [0, -1, 0],
                                    [0, 0, 1],
                                    [0, 0, -1]
                                ], n = [
                                    [1, 0],
                                    [0, 0],
                                    [0, 1],
                                    [1, 1]
                                ], s = f(3, 24), o = f(3, 24), a = f(2, 24), l = f(3, 12, Uint16Array), u = 0; u < 6; ++u) {
                                for (var h = w[u], c = 0; c < 4; ++c) {
                                    var p = r[h[c]],
                                        _ = i[u],
                                        d = n[c];
                                    s.push(p), o.push(_), a.push(d)
                                }
                                var m = 4 * u;
                                l.push(m + 0, m + 1, m + 2), l.push(m + 0, m + 2, m + 3)
                            }
                            return {
                                position: s,
                                normal: o,
                                texcoord: a,
                                indices: l
                            }
                        }

                        function P(t, e, r, i, n, s, o) {
                            if (i < 3) throw Error("radialSubdivisions must be 3 or greater");
                            if (n < 1) throw Error("verticalSubdivisions must be 1 or greater");
                            for (var a = void 0 === s || s, l = void 0 === o || o, u = (a ? 2 : 0) + (l ? 2 : 0), h = (i + 1) * (n + 1 + u), c = f(3, h), p = f(3, h), _ = f(2, h), d = f(3, i * (n + u) * 2, Uint16Array), m = i + 1, v = Math.atan2(t - e, r), y = Math.cos(v), g = Math.sin(v), b = n + (l ? 2 : 0), T = a ? -2 : 0; T <= b; ++T) {
                                var x = T / n,
                                    w = r * x,
                                    E = void 0;
                                T < 0 ? (w = 0, x = 1, E = t) : T > n ? (w = r, x = 1, E = e) : E = t + T / n * (e - t), -2 !== T && T !== n + 2 || (E = 0, x = 0), w -= r / 2;
                                for (var P = 0; P < m; ++P) {
                                    var A = Math.sin(P * Math.PI * 2 / i),
                                        R = Math.cos(P * Math.PI * 2 / i);
                                    c.push(A * E, w, R * E), p.push(T < 0 || T > n ? 0 : A * y, T < 0 ? -1 : T > n ? 1 : g, T < 0 || T > n ? 0 : R * y), _.push(P / i, 1 - x)
                                }
                            }
                            for (var O = 0; O < n + u; ++O)
                                for (var S = 0; S < i; ++S) d.push(m * (O + 0) + 0 + S, m * (O + 0) + 1 + S, m * (O + 1) + 1 + S), d.push(m * (O + 0) + 0 + S, m * (O + 1) + 1 + S, m * (O + 1) + 0 + S);
                            return {
                                position: c,
                                normal: p,
                                texcoord: _,
                                indices: d
                            }
                        }

                        function A(t, e) {
                            e = e || [];
                            for (var r = [], i = 0; i < t.length; i += 4) {
                                var n = t[i],
                                    s = t.slice(i + 1, i + 4);
                                s.push.apply(s, e);
                                for (var o = 0; o < n; ++o) r.push.apply(r, s)
                            }
                            return r
                        }

                        function R() {
                            var t = [0, 0, 0, 0, 150, 0, 30, 0, 0, 0, 150, 0, 30, 150, 0, 30, 0, 0, 30, 0, 0, 30, 30, 0, 100, 0, 0, 30, 30, 0, 100, 30, 0, 100, 0, 0, 30, 60, 0, 30, 90, 0, 67, 60, 0, 30, 90, 0, 67, 90, 0, 67, 60, 0, 0, 0, 30, 30, 0, 30, 0, 150, 30, 0, 150, 30, 30, 0, 30, 30, 150, 30, 30, 0, 30, 100, 0, 30, 30, 30, 30, 30, 30, 30, 100, 0, 30, 100, 30, 30, 30, 60, 30, 67, 60, 30, 30, 90, 30, 30, 90, 30, 67, 60, 30, 67, 90, 30, 0, 0, 0, 100, 0, 0, 100, 0, 30, 0, 0, 0, 100, 0, 30, 0, 0, 30, 100, 0, 0, 100, 30, 0, 100, 30, 30, 100, 0, 0, 100, 30, 30, 100, 0, 30, 30, 30, 0, 30, 30, 30, 100, 30, 30, 30, 30, 0, 100, 30, 30, 100, 30, 0, 30, 30, 0, 30, 60, 30, 30, 30, 30, 30, 30, 0, 30, 60, 0, 30, 60, 30, 30, 60, 0, 67, 60, 30, 30, 60, 30, 30, 60, 0, 67, 60, 0, 67, 60, 30, 67, 60, 0, 67, 90, 30, 67, 60, 30, 67, 60, 0, 67, 90, 0, 67, 90, 30, 30, 90, 0, 30, 90, 30, 67, 90, 30, 30, 90, 0, 67, 90, 30, 67, 90, 0, 30, 90, 0, 30, 150, 30, 30, 90, 30, 30, 90, 0, 30, 150, 0, 30, 150, 30, 0, 150, 0, 0, 150, 30, 30, 150, 30, 0, 150, 0, 30, 150, 30, 30, 150, 0, 0, 0, 0, 0, 0, 30, 0, 150, 30, 0, 0, 0, 0, 150, 30, 0, 150, 0],
                                e = A([18, 0, 0, 1, 18, 0, 0, -1, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, -1, 0, 0]),
                                r = A([18, 200, 70, 120, 18, 80, 70, 200, 6, 70, 200, 210, 6, 200, 200, 70, 6, 210, 100, 70, 6, 210, 160, 70, 6, 70, 180, 210, 6, 100, 70, 210, 6, 76, 210, 100, 6, 140, 210, 80, 6, 90, 130, 110, 6, 160, 160, 220], [255]),
                                i = t.length / 3,
                                n = {
                                    position: f(3, i),
                                    texcoord: f(2, i),
                                    normal: f(3, i),
                                    color: f(4, i, Uint8Array),
                                    indices: f(3, i / 3, Uint16Array)
                                };
                            n.position.push(t), n.texcoord.push([.22, .19, .22, .79, .34, .19, .22, .79, .34, .79, .34, .19, .34, .19, .34, .31, .62, .19, .34, .31, .62, .31, .62, .19, .34, .43, .34, .55, .49, .43, .34, .55, .49, .55, .49, .43, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0]), n.normal.push(e), n.color.push(r);
                            for (var s = 0; s < i; ++s) n.indices.push(s);
                            return n
                        }

                        function O(t, e, r, i, n, s, o) {
                            if (n <= 0) throw Error("subdivisionDown must be > 0");
                            var l = 2,
                                u = (o = o || 1) - (s = s || 0),
                                h = 2 * (n + 1) * (2 + l),
                                c = f(3, h),
                                p = f(3, h),
                                _ = f(2, h);

                            function d(t, e, r) {
                                return t + (e - t) * r
                            }

                            function m(e, r, o, h, f, m) {
                                for (var v = 0; v <= n; v++) {
                                    var y = r / (l - 1),
                                        g = v / n,
                                        b = 2 * (y - .5),
                                        T = (s + g * u) * Math.PI,
                                        x = Math.sin(T),
                                        w = Math.cos(T),
                                        E = d(t, e, x),
                                        P = b * i,
                                        A = w * t,
                                        R = x * E;
                                    c.push(P, A, R);
                                    var O = a.add(a.multiply([0, x, w], o), h);
                                    p.push(O), _.push(y * f + m, g)
                                }
                            }
                            for (var v = 0; v < l; v++) {
                                var y = 2 * (v / (l - 1) - .5);
                                m(e, v, [1, 1, 1], [0, 0, 0], 1, 0), m(e, v, [0, 0, 0], [y, 0, 0], 0, 0), m(r, v, [1, 1, 1], [0, 0, 0], 1, 0), m(r, v, [0, 0, 0], [y, 0, 0], 0, 1)
                            }
                            var g = f(3, 2 * n * (2 + l), Uint16Array);

                            function b(t, e) {
                                for (var r = 0; r < n; ++r) g.push(t + r + 0, t + r + 1, e + r + 0), g.push(t + r + 1, e + r + 1, e + r + 0)
                            }
                            var T = n + 1;
                            return b(0 * T, 4 * T), b(5 * T, 7 * T), b(6 * T, 2 * T), b(3 * T, 1 * T), {
                                position: c,
                                normal: p,
                                texcoord: _,
                                indices: g
                            }
                        }

                        function S(t, e, r, i, n, s) {
                            return P(t, t, e, r, i, n, s)
                        }

                        function F(t, e, r, i, n, s) {
                            if (r < 3) throw Error("radialSubdivisions must be 3 or greater");
                            if (i < 3) throw Error("verticalSubdivisions must be 3 or greater");
                            n = n || 0;
                            for (var o = (s = s || 2 * Math.PI) - n, a = r + 1, l = i + 1, u = a * l, h = f(3, u), c = f(3, u), p = f(2, u), _ = f(3, r * i * 2, Uint16Array), d = 0; d < l; ++d)
                                for (var m = d / i, v = m * Math.PI * 2, y = Math.sin(v), g = t + y * e, b = Math.cos(v), T = b * e, x = 0; x < a; ++x) {
                                    var w = x / r,
                                        E = n + w * o,
                                        P = Math.sin(E),
                                        A = Math.cos(E),
                                        R = P * g,
                                        O = A * g,
                                        S = P * y,
                                        F = A * y;
                                    h.push(R, T, O), c.push(S, b, F), p.push(w, 1 - m)
                                }
                            for (var M = 0; M < i; ++M)
                                for (var C = 0; C < r; ++C) {
                                    var I = 1 + C,
                                        k = 1 + M;
                                    _.push(a * M + C, a * k + C, a * M + I), _.push(a * k + C, a * k + I, a * M + I)
                                }
                            return {
                                position: h,
                                normal: c,
                                texcoord: p,
                                indices: _
                            }
                        }

                        function M(t, e, r, i, n) {
                            if (e < 3) throw Error("divisions must be at least 3");
                            n = n || 1, i = i || 0;
                            for (var s = (e + 1) * ((r = r || 1) + 1), o = f(3, s), a = f(3, s), l = f(2, s), u = f(3, r * e * 2, Uint16Array), h = 0, c = t - i, p = e + 1, _ = 0; _ <= r; ++_) {
                                for (var d = i + c * Math.pow(_ / r, n), m = 0; m <= e; ++m) {
                                    var v = 2 * Math.PI * m / e,
                                        y = d * Math.cos(v),
                                        g = d * Math.sin(v);
                                    if (o.push(y, 0, g), a.push(0, 1, 0), l.push(1 - m / e, _ / r), _ > 0 && m !== e) {
                                        var b = h + (m + 1),
                                            T = h + m,
                                            x = h + m - p,
                                            w = h + (m + 1) - p;
                                        u.push(b, T, x), u.push(b, x, w)
                                    }
                                }
                                h += e + 1
                            }
                            return {
                                position: o,
                                normal: a,
                                texcoord: l,
                                indices: u
                            }
                        }

                        function C(t) {
                            return function(e) {
                                var r = t.apply(this, Array.prototype.slice.call(arguments, 1));
                                return i.createBuffersFromArrays(e, r)
                            }
                        }

                        function I(t) {
                            return function(e) {
                                var r = t.apply(null, Array.prototype.slice.call(arguments, 1));
                                return i.createBufferInfoFromArrays(e, r)
                            }
                        }
                        var k = ["numComponents", "size", "type", "normalize", "stride", "offset", "attrib", "name", "attribName"];

                        function D(t, e, r, i) {
                            i = i || 0;
                            for (var n = t.length, s = 0; s < n; ++s) e[r + s] = t[s] + i
                        }

                        function B(t, e) {
                            var r = u(t),
                                i = new r.constructor(e),
                                s = i;
                            return r.numComponents && r.numElements && c(i, r.numComponents), t.data && (s = {
                                data: i
                            }, n.copyNamedProperties(k, t, s)), s
                        }
                        var U = I(R);
                        e.create3DFBufferInfo = U;
                        var L = C(R);
                        e.create3DFBuffers = L;
                        var N = I(E);
                        e.createCubeBufferInfo = N;
                        var j = C(E);
                        e.createCubeBuffers = j;
                        var X = I(T);
                        e.createPlaneBufferInfo = X;
                        var z = C(T);
                        e.createPlaneBuffers = z;
                        var Y = I(x);
                        e.createSphereBufferInfo = Y;
                        var G = C(x);
                        e.createSphereBuffers = G;
                        var V = I(P);
                        e.createTruncatedConeBufferInfo = V;
                        var W = C(P);
                        e.createTruncatedConeBuffers = W;
                        var K = I(b);
                        e.createXYQuadBufferInfo = K;
                        var H = C(b);
                        e.createXYQuadBuffers = H;
                        var q = I(O);
                        e.createCresentBufferInfo = q;
                        var Z = C(O);
                        e.createCresentBuffers = Z;
                        var $ = I(S);
                        e.createCylinderBufferInfo = $;
                        var Q = C(S);
                        e.createCylinderBuffers = Q;
                        var J = I(F);
                        e.createTorusBufferInfo = J;
                        var tt = C(F);
                        e.createTorusBuffers = tt;
                        var et = I(M);
                        e.createDiscBufferInfo = et;
                        var rt = C(M);
                        e.createDiscBuffers = rt
                    },
                "./src/programs.js":
                    /*!*************************!*\
                      !*** ./src/programs.js ***!
                      \*************************/
                    /*! no static exports found */
                    function(t, e, r) {
                        "use strict";
                        e.__esModule = !0, e.createAttributeSetters = j, e.createProgram = S, e.createProgramFromScripts = function(t, e, r, i, n) {
                            for (var s = P(r, i, n), o = [], a = 0; a < e.length; ++a) {
                                var l = F(t, e[a], t[A[a]], s.errorCallback);
                                if (!l) return null;
                                o.push(l)
                            }
                            return S(t, o, s)
                        }, e.createProgramFromSources = M, e.createProgramInfo = function(t, e, r, i, n) {
                            var s = P(r, i, n),
                                o = !0;
                            if (e = e.map(function(t) {
                                    if (t.indexOf("\n") < 0) {
                                        var e = l(t);
                                        e ? t = e.text : (s.errorCallback("no element with id: " + t), o = !1)
                                    }
                                    return t
                                }), !o) return null;
                            var a = M(t, e, s);
                            if (!a) return null;
                            return z(t, a)
                        }, e.createProgramInfoFromProgram = z, e.createUniformSetters = I, e.createUniformBlockSpecFromProgram = B, e.createUniformBlockInfoFromProgram = L, e.createUniformBlockInfo = function(t, e, r) {
                            return L(t, e.program, e.uniformBlockSpec, r)
                        }, e.createTransformFeedback = function(t, e, r) {
                            var i = t.createTransformFeedback();
                            return t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, i), t.useProgram(e.program), D(t, e, r), t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null),
                                function(t, e, r) {
                                    for (var i in e.transformFeedbackInfo && (e = e.transformFeedbackInfo), r.attribs && (r = r.attribs), r) {
                                        var n = e[i];
                                        n && t.bindBufferBase(t.TRANSFORM_FEEDBACK_BUFFER, n.index, null)
                                    }
                                }(t, e, r), i
                        }, e.createTransformFeedbackInfo = k, e.bindTransformFeedbackInfo = D, e.setAttributes = X, e.setBuffersAndAttributes = function(t, e, r) {
                            r.vertexArrayObject ? t.bindVertexArray(r.vertexArrayObject) : (X(e.attribSetters || e, r.attribs), r.indices && t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, r.indices))
                        }, e.setUniforms = function t(e, r) {
                            var i = e.uniformSetters || e;
                            var n = arguments.length;
                            for (var s = 1; s < n; ++s) {
                                var o = arguments[s];
                                if (Array.isArray(o))
                                    for (var a = o.length, l = 0; l < a; ++l) t(i, o[l]);
                                else
                                    for (var u in o) {
                                        var h = i[u];
                                        h && h(o[u])
                                    }
                            }
                        }, e.setUniformBlock = function(t, e, r) {
                            N(t, e, r) && t.bufferData(t.UNIFORM_BUFFER, r.array, t.DYNAMIC_DRAW)
                        }, e.setBlockUniforms = function(t, e) {
                            var r = t.uniforms;
                            for (var i in e) {
                                var n = r[i];
                                if (n) {
                                    var s = e[i];
                                    s.length ? n.set(s) : n[0] = s
                                }
                            }
                        }, e.bindUniformBlock = N;
                        var i = s(r( /*! ./utils.js */ "./src/utils.js")),
                            n = s(r( /*! ./helper.js */ "./src/helper.js"));

                        function s(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var r in t)
                                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                                        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
                                        i.get || i.set ? Object.defineProperty(e, r, i) : e[r] = t[r]
                                    }
                            return e.default = t, e
                        }
                        var o = n.error,
                            a = n.warn,
                            l = "undefined" != typeof document && document.getElementById ? document.getElementById.bind(document) : function() {
                                return null
                            },
                            u = {};

                        function h(t, e) {
                            return u[e].bindPoint
                        }

                        function c(t, e) {
                            return function(r) {
                                t.uniform1i(e, r)
                            }
                        }

                        function f(t, e) {
                            return function(r) {
                                t.uniform1iv(e, r)
                            }
                        }

                        function p(t, e) {
                            return function(r) {
                                t.uniform2iv(e, r)
                            }
                        }

                        function _(t, e) {
                            return function(r) {
                                t.uniform3iv(e, r)
                            }
                        }

                        function d(t, e) {
                            return function(r) {
                                t.uniform4iv(e, r)
                            }
                        }

                        function m(t, e, r, s) {
                            var o = h(0, e);
                            return i.isWebGL2(t) ? function(e) {
                                var i, a;
                                n.isTexture(t, e) ? (i = e, a = null) : (i = e.texture, a = e.sampler), t.uniform1i(s, r), t.activeTexture(t.TEXTURE0 + r), t.bindTexture(o, i), t.bindSampler(r, a)
                            } : function(e) {
                                t.uniform1i(s, r), t.activeTexture(t.TEXTURE0 + r), t.bindTexture(o, e)
                            }
                        }

                        function v(t, e, r, s, o) {
                            for (var a = h(0, e), l = new Int32Array(o), u = 0; u < o; ++u) l[u] = r + u;
                            return i.isWebGL2(t) ? function(e) {
                                t.uniform1iv(s, l), e.forEach(function(e, i) {
                                    var s, o;
                                    t.activeTexture(t.TEXTURE0 + l[i]), n.isTexture(t, e) ? (s = e, o = null) : (s = e.texture, o = e.sampler), t.bindSampler(r, o), t.bindTexture(a, s)
                                })
                            } : function(e) {
                                t.uniform1iv(s, l), e.forEach(function(e, r) {
                                    t.activeTexture(t.TEXTURE0 + l[r]), t.bindTexture(a, e)
                                })
                            }
                        }

                        function y(t, e) {
                            return function(r) {
                                r.value ? (t.disableVertexAttribArray(e), t.vertexAttrib4fv(e, r.value)) : (t.bindBuffer(t.ARRAY_BUFFER, r.buffer), t.enableVertexAttribArray(e), t.vertexAttribPointer(e, r.numComponents || r.size, r.type || t.FLOAT, r.normalize || !1, r.stride || 0, r.offset || 0), void 0 !== r.divisor && t.vertexAttribDivisor(e, r.divisor))
                            }
                        }

                        function g(t, e) {
                            return function(r) {
                                r.value ? (t.disableVertexAttribArray(e), t.vertexAttrib4iv(e, r.value)) : (t.bindBuffer(t.ARRAY_BUFFER, r.buffer), t.enableVertexAttribArray(e), t.vertexAttribIPointer(e, r.numComponents || r.size, r.type || t.INT, r.stride || 0, r.offset || 0), void 0 !== r.divisor && t.vertexAttribDivisor(e, r.divisor))
                            }
                        }

                        function b(t, e) {
                            return function(r) {
                                r.value ? (t.disableVertexAttribArray(e), t.vertexAttrib4uiv(e, r.value)) : (t.bindBuffer(t.ARRAY_BUFFER, r.buffer), t.enableVertexAttribArray(e), t.vertexAttribIPointer(e, r.numComponents || r.size, r.type || t.UNSIGNED_INT, r.stride || 0, r.offset || 0), void 0 !== r.divisor && t.vertexAttribDivisor(e, r.divisor))
                            }
                        }

                        function T(t, e, r) {
                            var i = r.size,
                                n = r.count;
                            return function(r) {
                                t.bindBuffer(t.ARRAY_BUFFER, r.buffer);
                                for (var s = r.size || r.numComponents || i, o = s / n, a = r.type || t.FLOAT, l = u[a].size * s, h = r.normalize || !1, c = r.offset || 0, f = l / n, p = 0; p < n; ++p) t.enableVertexAttribArray(e + p), t.vertexAttribPointer(e + p, o, a, h, l, c + f * p), void 0 !== r.divisor && t.vertexAttribDivisor(e + p, r.divisor)
                            }
                        }
                        u[5126] = {
                            Type: Float32Array,
                            size: 4,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniform1f(e, r)
                                }
                            },
                            arraySetter: function(t, e) {
                                return function(r) {
                                    t.uniform1fv(e, r)
                                }
                            }
                        }, u[35664] = {
                            Type: Float32Array,
                            size: 8,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniform2fv(e, r)
                                }
                            }
                        }, u[35665] = {
                            Type: Float32Array,
                            size: 12,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniform3fv(e, r)
                                }
                            }
                        }, u[35666] = {
                            Type: Float32Array,
                            size: 16,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniform4fv(e, r)
                                }
                            }
                        }, u[5124] = {
                            Type: Int32Array,
                            size: 4,
                            setter: c,
                            arraySetter: f
                        }, u[35667] = {
                            Type: Int32Array,
                            size: 8,
                            setter: p
                        }, u[35668] = {
                            Type: Int32Array,
                            size: 12,
                            setter: _
                        }, u[35669] = {
                            Type: Int32Array,
                            size: 16,
                            setter: d
                        }, u[5125] = {
                            Type: Uint32Array,
                            size: 4,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniform1ui(e, r)
                                }
                            },
                            arraySetter: function(t, e) {
                                return function(r) {
                                    t.uniform1uiv(e, r)
                                }
                            }
                        }, u[36294] = {
                            Type: Uint32Array,
                            size: 8,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniform2uiv(e, r)
                                }
                            }
                        }, u[36295] = {
                            Type: Uint32Array,
                            size: 12,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniform3uiv(e, r)
                                }
                            }
                        }, u[36296] = {
                            Type: Uint32Array,
                            size: 16,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniform4uiv(e, r)
                                }
                            }
                        }, u[35670] = {
                            Type: Uint32Array,
                            size: 4,
                            setter: c,
                            arraySetter: f
                        }, u[35671] = {
                            Type: Uint32Array,
                            size: 8,
                            setter: p
                        }, u[35672] = {
                            Type: Uint32Array,
                            size: 12,
                            setter: _
                        }, u[35673] = {
                            Type: Uint32Array,
                            size: 16,
                            setter: d
                        }, u[35674] = {
                            Type: Float32Array,
                            size: 16,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniformMatrix2fv(e, !1, r)
                                }
                            }
                        }, u[35675] = {
                            Type: Float32Array,
                            size: 36,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniformMatrix3fv(e, !1, r)
                                }
                            }
                        }, u[35676] = {
                            Type: Float32Array,
                            size: 64,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniformMatrix4fv(e, !1, r)
                                }
                            }
                        }, u[35685] = {
                            Type: Float32Array,
                            size: 24,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniformMatrix2x3fv(e, !1, r)
                                }
                            }
                        }, u[35686] = {
                            Type: Float32Array,
                            size: 32,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniformMatrix2x4fv(e, !1, r)
                                }
                            }
                        }, u[35687] = {
                            Type: Float32Array,
                            size: 24,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniformMatrix3x2fv(e, !1, r)
                                }
                            }
                        }, u[35688] = {
                            Type: Float32Array,
                            size: 48,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniformMatrix3x4fv(e, !1, r)
                                }
                            }
                        }, u[35689] = {
                            Type: Float32Array,
                            size: 32,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniformMatrix4x2fv(e, !1, r)
                                }
                            }
                        }, u[35690] = {
                            Type: Float32Array,
                            size: 48,
                            setter: function(t, e) {
                                return function(r) {
                                    t.uniformMatrix4x3fv(e, !1, r)
                                }
                            }
                        }, u[35678] = {
                            Type: null,
                            size: 0,
                            setter: m,
                            arraySetter: v,
                            bindPoint: 3553
                        }, u[35680] = {
                            Type: null,
                            size: 0,
                            setter: m,
                            arraySetter: v,
                            bindPoint: 34067
                        }, u[35679] = {
                            Type: null,
                            size: 0,
                            setter: m,
                            arraySetter: v,
                            bindPoint: 32879
                        }, u[35682] = {
                            Type: null,
                            size: 0,
                            setter: m,
                            arraySetter: v,
                            bindPoint: 3553
                        }, u[36289] = {
                            Type: null,
                            size: 0,
                            setter: m,
                            arraySetter: v,
                            bindPoint: 35866
                        }, u[36292] = {
                            Type: null,
                            size: 0,
                            setter: m,
                            arraySetter: v,
                            bindPoint: 35866
                        }, u[36293] = {
                            Type: null,
                            size: 0,
                            setter: m,
                            arraySetter: v,
                            bindPoint: 34067
                        }, u[36298] = {
                            Type: null,
                            size: 0,
                            setter: m,
                            arraySetter: v,
                            bindPoint: 3553
                        }, u[36299] = {
                            Type: null,
                            size: 0,
                            setter: m,
                            arraySetter: v,
                            bindPoint: 32879
                        }, u[36300] = {
                            Type: null,
                            size: 0,
                            setter: m,
                            arraySetter: v,
                            bindPoint: 34067
                        }, u[36303] = {
                            Type: null,
                            size: 0,
                            setter: m,
                            arraySetter: v,
                            bindPoint: 35866
                        }, u[36306] = {
                            Type: null,
                            size: 0,
                            setter: m,
                            arraySetter: v,
                            bindPoint: 3553
                        }, u[36307] = {
                            Type: null,
                            size: 0,
                            setter: m,
                            arraySetter: v,
                            bindPoint: 32879
                        }, u[36308] = {
                            Type: null,
                            size: 0,
                            setter: m,
                            arraySetter: v,
                            bindPoint: 34067
                        }, u[36311] = {
                            Type: null,
                            size: 0,
                            setter: m,
                            arraySetter: v,
                            bindPoint: 35866
                        };
                        var x = {};
                        x[5126] = {
                            size: 4,
                            setter: y
                        }, x[35664] = {
                            size: 8,
                            setter: y
                        }, x[35665] = {
                            size: 12,
                            setter: y
                        }, x[35666] = {
                            size: 16,
                            setter: y
                        }, x[5124] = {
                            size: 4,
                            setter: g
                        }, x[35667] = {
                            size: 8,
                            setter: g
                        }, x[35668] = {
                            size: 12,
                            setter: g
                        }, x[35669] = {
                            size: 16,
                            setter: g
                        }, x[5125] = {
                            size: 4,
                            setter: b
                        }, x[36294] = {
                            size: 8,
                            setter: b
                        }, x[36295] = {
                            size: 12,
                            setter: b
                        }, x[36296] = {
                            size: 16,
                            setter: b
                        }, x[35670] = {
                            size: 4,
                            setter: g
                        }, x[35671] = {
                            size: 8,
                            setter: g
                        }, x[35672] = {
                            size: 12,
                            setter: g
                        }, x[35673] = {
                            size: 16,
                            setter: g
                        }, x[35674] = {
                            size: 4,
                            setter: T,
                            count: 2
                        }, x[35675] = {
                            size: 9,
                            setter: T,
                            count: 3
                        }, x[35676] = {
                            size: 16,
                            setter: T,
                            count: 4
                        };
                        var w = /^[ \t]*\n/;

                        function E(t, e, r, i) {
                            var n = i || o,
                                s = t.createShader(r),
                                a = 0;
                            if (w.test(e) && (a = 1, e = e.replace(w, "")), t.shaderSource(s, e), t.compileShader(s), !t.getShaderParameter(s, t.COMPILE_STATUS)) {
                                var l = t.getShaderInfoLog(s);
                                return n(function(t, e) {
                                    return e = e || 0, ++e, t.split("\n").map(function(t, r) {
                                        return r + e + ": " + t
                                    }).join("\n")
                                }(e, a) + "\n*** Error compiling shader: " + l), t.deleteShader(s), null
                            }
                            return s
                        }

                        function P(t, e, r) {
                            var i;
                            if ("function" == typeof e && (r = e, e = void 0), "function" == typeof t) r = t, t = void 0;
                            else if (t && !Array.isArray(t)) {
                                if (t.errorCallback) return t;
                                var n = t;
                                r = n.errorCallback, t = n.attribLocations, i = n.transformFeedbackVaryings
                            }
                            var s = {
                                errorCallback: r || o,
                                transformFeedbackVaryings: i
                            };
                            if (t) {
                                var a = {};
                                Array.isArray(t) ? t.forEach(function(t, r) {
                                    a[t] = e ? e[r] : r
                                }) : a = t, s.attribLocations = a
                            }
                            return s
                        }
                        var A = ["VERTEX_SHADER", "FRAGMENT_SHADER"];

                        function R(t, e) {
                            return e.indexOf("frag") >= 0 ? t.FRAGMENT_SHADER : e.indexOf("vert") >= 0 ? t.VERTEX_SHADER : void 0
                        }

                        function O(t, e) {
                            e.forEach(function(e) {
                                t.deleteShader(e)
                            })
                        }

                        function S(t, e, r, i, s) {
                            for (var o = P(r, i, s), a = [], u = [], h = 0; h < e.length; ++h) {
                                var c = e[h];
                                if ("string" == typeof c) {
                                    var f = l(c),
                                        p = f ? f.text : c,
                                        _ = t[A[h]];
                                    f && f.type && (_ = R(t, f.type) || _), c = E(t, p, _, o.errorCallback), u.push(c)
                                }
                                n.isShader(t, c) && a.push(c)
                            }
                            if (a.length !== e.length) return o.errorCallback("not enough shaders for program"), O(t, u), null;
                            var d = t.createProgram();
                            a.forEach(function(e) {
                                t.attachShader(d, e)
                            }), o.attribLocations && Object.keys(o.attribLocations).forEach(function(e) {
                                t.bindAttribLocation(d, o.attribLocations[e], e)
                            });
                            var m = o.transformFeedbackVaryings;
                            if (m && (m.attribs && (m = m.attribs), Array.isArray(m) || (m = Object.keys(m)), t.transformFeedbackVaryings(d, m, o.transformFeedbackMode || t.SEPARATE_ATTRIBS)), t.linkProgram(d), !t.getProgramParameter(d, t.LINK_STATUS)) {
                                var v = t.getProgramInfoLog(d);
                                return o.errorCallback("Error in program linking:" + v), t.deleteProgram(d), O(t, u), null
                            }
                            return d
                        }

                        function F(t, e, r, i) {
                            var n, s = l(e);
                            if (!s) throw "*** Error: unknown script element" + e;
                            n = s.text;
                            var o = r || R(t, s.type);
                            if (!o) throw "*** Error: unknown shader type";
                            return E(t, n, o, i)
                        }

                        function M(t, e, r, i, n) {
                            for (var s = P(r, i, n), o = [], a = 0; a < e.length; ++a) {
                                var l = E(t, e[a], t[A[a]], s.errorCallback);
                                if (!l) return null;
                                o.push(l)
                            }
                            return S(t, o, s)
                        }

                        function C(t) {
                            var e = t.name;
                            return e.startsWith("gl_") || e.startsWith("webgl_")
                        }

                        function I(t, e) {
                            var r = 0;

                            function i(e, i) {
                                var n, s = t.getUniformLocation(e, i.name),
                                    o = i.size > 1 && "[0]" === i.name.substr(-3),
                                    a = i.type,
                                    l = u[a];
                                if (!l) throw "unknown type: 0x" + a.toString(16);
                                if (l.bindPoint) {
                                    var h = r;
                                    r += i.size, n = o ? l.arraySetter(t, a, h, s, i.size) : l.setter(t, a, h, s, i.size)
                                } else n = l.arraySetter && o ? l.arraySetter(t, s) : l.setter(t, s);
                                return n.location = s, n
                            }
                            for (var n = {}, s = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), o = 0; o < s; ++o) {
                                var a = t.getActiveUniform(e, o);
                                if (!C(a)) {
                                    var l = a.name;
                                    "[0]" === l.substr(-3) && (l = l.substr(0, l.length - 3));
                                    var h = i(e, a);
                                    n[l] = h
                                }
                            }
                            return n
                        }

                        function k(t, e) {
                            for (var r = {}, i = t.getProgramParameter(e, t.TRANSFORM_FEEDBACK_VARYINGS), n = 0; n < i; ++n) {
                                var s = t.getTransformFeedbackVarying(e, n);
                                r[s.name] = {
                                    index: n,
                                    type: s.type,
                                    size: s.size
                                }
                            }
                            return r
                        }

                        function D(t, e, r) {
                            for (var i in e.transformFeedbackInfo && (e = e.transformFeedbackInfo), r.attribs && (r = r.attribs), r) {
                                var n = e[i];
                                if (n) {
                                    var s = r[i];
                                    s.offset ? t.bindBufferRange(t.TRANSFORM_FEEDBACK_BUFFER, n.index, s.buffer, s.offset, s.size) : t.bindBufferBase(t.TRANSFORM_FEEDBACK_BUFFER, n.index, s.buffer)
                                }
                            }
                        }

                        function B(t, e) {
                            for (var r = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), i = [], n = [], s = 0; s < r; ++s) {
                                n.push(s), i.push({});
                                var o = t.getActiveUniform(e, s);
                                if (C(o)) break;
                                i[s].name = o.name
                            }[
                                ["UNIFORM_TYPE", "type"],
                                ["UNIFORM_SIZE", "size"],
                                ["UNIFORM_BLOCK_INDEX", "blockNdx"],
                                ["UNIFORM_OFFSET", "offset"]
                            ].forEach(function(r) {
                                var s = r[0],
                                    o = r[1];
                                t.getActiveUniforms(e, n, t[s]).forEach(function(t, e) {
                                    i[e][o] = t
                                })
                            });
                            for (var a = {}, l = t.getProgramParameter(e, t.ACTIVE_UNIFORM_BLOCKS), u = 0; u < l; ++u) {
                                var h = t.getActiveUniformBlockName(e, u),
                                    c = {
                                        index: u,
                                        usedByVertexShader: t.getActiveUniformBlockParameter(e, u, t.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
                                        usedByFragmentShader: t.getActiveUniformBlockParameter(e, u, t.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
                                        size: t.getActiveUniformBlockParameter(e, u, t.UNIFORM_BLOCK_DATA_SIZE),
                                        uniformIndices: t.getActiveUniformBlockParameter(e, u, t.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES)
                                    };
                                c.used = c.usedByVertexSahder || c.usedByFragmentShader, a[h] = c
                            }
                            return {
                                blockSpecs: a,
                                uniformData: i
                            }
                        }
                        var U = /\[\d+\]\.$/;

                        function L(t, e, r, i) {
                            var n = r.blockSpecs,
                                s = r.uniformData,
                                o = n[i];
                            if (!o) return a("no uniform block object named:", i), {
                                name: i,
                                uniforms: {}
                            };
                            var l = new ArrayBuffer(o.size),
                                h = t.createBuffer(),
                                c = o.index;
                            t.bindBuffer(t.UNIFORM_BUFFER, h), t.uniformBlockBinding(e, o.index, c);
                            var f = i + ".";
                            U.test(f) && (f = f.replace(U, "."));
                            var p = {};
                            return o.uniformIndices.forEach(function(t) {
                                var e = s[t],
                                    r = u[e.type],
                                    i = r.Type,
                                    n = e.size * r.size,
                                    o = e.name;
                                o.substr(0, f.length) === f && (o = o.substr(f.length)), p[o] = new i(l, e.offset, n / i.BYTES_PER_ELEMENT)
                            }), {
                                name: i,
                                array: l,
                                asFloat: new Float32Array(l),
                                buffer: h,
                                uniforms: p
                            }
                        }

                        function N(t, e, r) {
                            var i = (e.uniformBlockSpec || e).blockSpecs[r.name];
                            if (i) {
                                var n = i.index;
                                return t.bindBufferRange(t.UNIFORM_BUFFER, n, r.buffer, r.offset || 0, r.array.byteLength), !0
                            }
                            return !1
                        }

                        function j(t, e) {
                            for (var r = {}, i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), n = 0; n < i; ++n) {
                                var s = t.getActiveAttrib(e, n);
                                if (!C(s)) {
                                    var o = t.getAttribLocation(e, s.name),
                                        a = x[s.type],
                                        l = a.setter(t, o, a);
                                    l.location = o, r[s.name] = l
                                }
                            }
                            return r
                        }

                        function X(t, e) {
                            for (var r in e) {
                                var i = t[r];
                                i && i(e[r])
                            }
                        }

                        function z(t, e) {
                            var r = {
                                program: e,
                                uniformSetters: I(t, e),
                                attribSetters: j(t, e)
                            };
                            return i.isWebGL2(t) && (r.uniformBlockSpec = B(t, e), r.transformFeedbackInfo = k(t, e)), r
                        }
                    },
                "./src/textures.js":
                    /*!*************************!*\
                      !*** ./src/textures.js ***!
                      \*************************/
                    /*! no static exports found */
                    function(t, e, r) {
                        "use strict";
                        e.__esModule = !0, e.setTextureDefaults_ = function(t) {
                            s.copyExistingProperties(t, a), t.textureColor && w(t.textureColor)
                        }, e.createSampler = C, e.createSamplers = function(t, e) {
                            var r = {};
                            return Object.keys(e).forEach(function(i) {
                                r[i] = C(t, e[i])
                            }), r
                        }, e.setSamplerParameters = M, e.createTexture = q, e.setEmptyTexture = H, e.setTextureFromArray = K, e.loadTextureFromUrl = G, e.setTextureFromElement = U, e.setTextureFilteringForSize = I, e.setTextureParameters = F, e.setDefaultTextureColor = w, e.createTextures = function(t, e, r) {
                            r = r || L;
                            var i = 0,
                                n = [],
                                s = {},
                                o = {};

                            function a() {
                                0 === i && setTimeout(function() {
                                    r(n.length ? n : void 0, s, o)
                                }, 0)
                            }
                            return Object.keys(e).forEach(function(r) {
                                var l, u, h = e[r];
                                ("string" == typeof(u = h.src) || Array.isArray(u) && "string" == typeof u[0]) && (l = function(t, e, s) {
                                    o[r] = s, --i, t && n.push(t), a()
                                }, ++i), s[r] = q(t, h, l)
                            }), a(), s
                        }, e.resizeTexture = function(t, e, r, i, n) {
                            i = i || r.width, n = n || r.height;
                            var s = r.target || t.TEXTURE_2D;
                            t.bindTexture(s, e);
                            var o, a = r.level || 0,
                                u = r.internalFormat || r.format || t.RGBA,
                                h = v(u),
                                c = r.format || h.format,
                                f = r.src;
                            o = f && (l(f) || Array.isArray(f) && "number" == typeof f[0]) ? r.type || T(t, f, h.type) : r.type || h.type;
                            if (s === t.TEXTURE_CUBE_MAP)
                                for (var p = 0; p < 6; ++p) t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + p, a, u, i, n, 0, c, o, null);
                            else t.texImage2D(s, a, u, i, n, 0, c, o, null)
                        }, e.canGenerateMipmap = g, e.canFilter = b, e.getNumComponentsForFormat = function(t) {
                            var e = f[t];
                            if (!e) throw "unknown format: " + t;
                            return e.numColorComponents
                        }, e.getBytesPerElementForInternalFormat = m, e.getFormatAndTypeForInternalFormat = v;
                        var i = o(r( /*! ./utils.js */ "./src/utils.js")),
                            n = o(r( /*! ./typedarrays.js */ "./src/typedarrays.js")),
                            s = o(r( /*! ./helper.js */ "./src/helper.js"));

                        function o(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var r in t)
                                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                                        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
                                        i.get || i.set ? Object.defineProperty(e, r, i) : e[r] = t[r]
                                    }
                            return e.default = t, e
                        }
                        var a = {
                                textureColor: new Uint8Array([128, 192, 255, 255]),
                                textureOptions: {},
                                crossOrigin: void 0
                            },
                            l = n.isArrayBuffer,
                            u = "undefined" != typeof document && document.createElement ? document.createElement("canvas").getContext("2d") : null,
                            h = 6407,
                            c = 33319,
                            f = {},
                            p = f;
                        p[6406] = {
                            numColorComponents: 1
                        }, p[6409] = {
                            numColorComponents: 1
                        }, p[6410] = {
                            numColorComponents: 2
                        }, p[h] = {
                            numColorComponents: 3
                        }, p[6408] = {
                            numColorComponents: 4
                        }, p[6403] = {
                            numColorComponents: 1
                        }, p[36244] = {
                            numColorComponents: 1
                        }, p[c] = {
                            numColorComponents: 2
                        }, p[33320] = {
                            numColorComponents: 2
                        }, p[h] = {
                            numColorComponents: 3
                        }, p[36248] = {
                            numColorComponents: 3
                        }, p[6408] = {
                            numColorComponents: 4
                        }, p[36249] = {
                            numColorComponents: 4
                        }, p[6402] = {
                            numColorComponents: 1
                        }, p[34041] = {
                            numColorComponents: 2
                        };
                        var _ = {},
                            d = _;

                        function m(t, e) {
                            var r = _[t];
                            if (!r) throw "unknown internal format";
                            var i = r.bytesPerElementMap[e];
                            if (void 0 === i) throw "unknown internal format";
                            return i
                        }

                        function v(t) {
                            var e = _[t];
                            if (!e) throw "unknown internal format";
                            return {
                                format: e.textureFormat,
                                type: e.type[0]
                            }
                        }

                        function y(t) {
                            return 0 == (t & t - 1)
                        }

                        function g(t, e, r, n) {
                            if (!i.isWebGL2(t)) return y(e) && y(r);
                            var s = _[n];
                            if (!s) throw "unknown internal format";
                            return s.colorRenderable && s.textureFilterable
                        }

                        function b(t) {
                            var e = _[t];
                            if (!e) throw "unknown internal format";
                            return e.textureFilterable
                        }

                        function T(t, e, r) {
                            return l(e) ? n.getGLTypeForTypedArray(e) : r || t.UNSIGNED_BYTE
                        }

                        function x(t, e, r, i, n) {
                            if (n % 1 != 0) throw "can't guess dimensions";
                            if (r || i) {
                                if (i) {
                                    if (!r && (r = n / i) % 1) throw "can't guess dimensions"
                                } else if ((i = n / r) % 1) throw "can't guess dimensions"
                            } else {
                                var s = Math.sqrt(n / (e === t.TEXTURE_CUBE_MAP ? 6 : 1));
                                s % 1 == 0 ? (r = s, i = s) : (r = n, i = 1)
                            }
                            return {
                                width: r,
                                height: i
                            }
                        }

                        function w(t) {
                            a.textureColor = new Uint8Array([255 * t[0], 255 * t[1], 255 * t[2], 255 * t[3]])
                        }
                        d[6406] = {
                            textureFormat: 6406,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [1, 2, 2, 4],
                            type: [5121, 5131, 36193, 5126]
                        }, d[6409] = {
                            textureFormat: 6409,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [1, 2, 2, 4],
                            type: [5121, 5131, 36193, 5126]
                        }, d[6410] = {
                            textureFormat: 6410,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [2, 4, 4, 8],
                            type: [5121, 5131, 36193, 5126]
                        }, d[h] = {
                            textureFormat: h,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [3, 6, 6, 12, 2],
                            type: [5121, 5131, 36193, 5126, 33635]
                        }, d[6408] = {
                            textureFormat: 6408,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [4, 8, 8, 16, 2, 2],
                            type: [5121, 5131, 36193, 5126, 32819, 32820]
                        }, d[33321] = {
                            textureFormat: 6403,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [1],
                            type: [5121]
                        }, d[36756] = {
                            textureFormat: 6403,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [1],
                            type: [5120]
                        }, d[33325] = {
                            textureFormat: 6403,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [4, 2],
                            type: [5126, 5131]
                        }, d[33326] = {
                            textureFormat: 6403,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5126]
                        }, d[33330] = {
                            textureFormat: 36244,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [1],
                            type: [5121]
                        }, d[33329] = {
                            textureFormat: 36244,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [1],
                            type: [5120]
                        }, d[33332] = {
                            textureFormat: 36244,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [2],
                            type: [5123]
                        }, d[33331] = {
                            textureFormat: 36244,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [2],
                            type: [5122]
                        }, d[33334] = {
                            textureFormat: 36244,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5125]
                        }, d[33333] = {
                            textureFormat: 36244,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5124]
                        }, d[33323] = {
                            textureFormat: c,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [2],
                            type: [5121]
                        }, d[36757] = {
                            textureFormat: c,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [2],
                            type: [5120]
                        }, d[33327] = {
                            textureFormat: c,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [8, 4],
                            type: [5126, 5131]
                        }, d[33328] = {
                            textureFormat: c,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [8],
                            type: [5126]
                        }, d[33336] = {
                            textureFormat: 33320,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [2],
                            type: [5121]
                        }, d[33335] = {
                            textureFormat: 33320,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [2],
                            type: [5120]
                        }, d[33338] = {
                            textureFormat: 33320,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5123]
                        }, d[33337] = {
                            textureFormat: 33320,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5122]
                        }, d[33340] = {
                            textureFormat: 33320,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [8],
                            type: [5125]
                        }, d[33339] = {
                            textureFormat: 33320,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [8],
                            type: [5124]
                        }, d[32849] = {
                            textureFormat: h,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [3],
                            type: [5121]
                        }, d[35905] = {
                            textureFormat: h,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [3],
                            type: [5121]
                        }, d[36194] = {
                            textureFormat: h,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [3, 2],
                            type: [5121, 33635]
                        }, d[36758] = {
                            textureFormat: h,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [3],
                            type: [5120]
                        }, d[35898] = {
                            textureFormat: h,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [12, 6, 4],
                            type: [5126, 5131, 35899]
                        }, d[35901] = {
                            textureFormat: h,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [12, 6, 4],
                            type: [5126, 5131, 35902]
                        }, d[34843] = {
                            textureFormat: h,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [12, 6],
                            type: [5126, 5131]
                        }, d[34837] = {
                            textureFormat: h,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [12],
                            type: [5126]
                        }, d[36221] = {
                            textureFormat: 36248,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [3],
                            type: [5121]
                        }, d[36239] = {
                            textureFormat: 36248,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [3],
                            type: [5120]
                        }, d[36215] = {
                            textureFormat: 36248,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [6],
                            type: [5123]
                        }, d[36233] = {
                            textureFormat: 36248,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [6],
                            type: [5122]
                        }, d[36209] = {
                            textureFormat: 36248,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [12],
                            type: [5125]
                        }, d[36227] = {
                            textureFormat: 36248,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [12],
                            type: [5124]
                        }, d[32856] = {
                            textureFormat: 6408,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [4],
                            type: [5121]
                        }, d[35907] = {
                            textureFormat: 6408,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [4],
                            type: [5121]
                        }, d[36759] = {
                            textureFormat: 6408,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [4],
                            type: [5120]
                        }, d[32855] = {
                            textureFormat: 6408,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [4, 2, 4],
                            type: [5121, 32820, 33640]
                        }, d[32854] = {
                            textureFormat: 6408,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [4, 2],
                            type: [5121, 32819]
                        }, d[32857] = {
                            textureFormat: 6408,
                            colorRenderable: !0,
                            textureFilterable: !0,
                            bytesPerElement: [4],
                            type: [33640]
                        }, d[34842] = {
                            textureFormat: 6408,
                            colorRenderable: !1,
                            textureFilterable: !0,
                            bytesPerElement: [16, 8],
                            type: [5126, 5131]
                        }, d[34836] = {
                            textureFormat: 6408,
                            colorRenderable: !1,
                            textureFilterable: !1,
                            bytesPerElement: [16],
                            type: [5126]
                        }, d[36220] = {
                            textureFormat: 36249,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5121]
                        }, d[36238] = {
                            textureFormat: 36249,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5120]
                        }, d[36975] = {
                            textureFormat: 36249,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [33640]
                        }, d[36214] = {
                            textureFormat: 36249,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [8],
                            type: [5123]
                        }, d[36232] = {
                            textureFormat: 36249,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [8],
                            type: [5122]
                        }, d[36226] = {
                            textureFormat: 36249,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [16],
                            type: [5124]
                        }, d[36208] = {
                            textureFormat: 36249,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [16],
                            type: [5125]
                        }, d[33189] = {
                            textureFormat: 6402,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [2, 4],
                            type: [5123, 5125]
                        }, d[33190] = {
                            textureFormat: 6402,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5125]
                        }, d[36012] = {
                            textureFormat: 6402,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [5126]
                        }, d[35056] = {
                            textureFormat: 34041,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [34042]
                        }, d[36013] = {
                            textureFormat: 34041,
                            colorRenderable: !0,
                            textureFilterable: !1,
                            bytesPerElement: [4],
                            type: [36269]
                        }, Object.keys(d).forEach(function(t) {
                            var e = d[t];
                            e.bytesPerElementMap = {}, e.bytesPerElement.forEach(function(t, r) {
                                var i = e.type[r];
                                e.bytesPerElementMap[i] = t
                            })
                        });
                        var E = {};

                        function P(t, e) {
                            void 0 !== e.colorspaceConversion && (E.colorspaceConversion = t.getParameter(t.UNPACK_COLORSPACE_CONVERSION_WEBGL), t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.colorspaceConversion)), void 0 !== e.premultiplyAlpha && (E.premultiplyAlpha = t.getParameter(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha)), void 0 !== e.flipY && (E.flipY = t.getParameter(t.UNPACK_FLIP_Y_WEBGL), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY))
                        }

                        function A(t, e) {
                            void 0 !== e.colorspaceConversion && t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, E.colorspaceConversion), void 0 !== e.premultiplyAlpha && t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, E.premultiplyAlpha), void 0 !== e.flipY && t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, E.flipY)
                        }

                        function R(t) {
                            E.unpackAlignment = t.getParameter(t.UNPACK_ALIGNMENT), i.isWebGL2(t) && (E.unpackRowLength = t.getParameter(t.UNPACK_ROW_LENGTH), E.unpackImageHeight = t.getParameter(t.UNPACK_IMAGE_HEIGHT), E.unpackSkipPixels = t.getParameter(t.UNPACK_SKIP_PIXELS), E.unpackSkipRows = t.getParameter(t.UNPACK_SKIP_ROWS), E.unpackSkipImages = t.getParameter(t.UNPACK_SKIP_IMAGES))
                        }

                        function O(t) {
                            t.pixelStorei(t.UNPACK_ALIGNMENT, E.unpackAlignment), i.isWebGL2(t) && (t.pixelStorei(t.UNPACK_ROW_LENGTH, E.unpackRowLength), t.pixelStorei(t.UNPACK_IMAGE_HEIGHT, E.unpackImageHeight), t.pixelStorei(t.UNPACK_SKIP_PIXELS, E.unpackSkipPixels), t.pixelStorei(t.UNPACK_SKIP_ROWS, E.unpackSkipRows), t.pixelStorei(t.UNPACK_SKIP_IMAGES, E.unpackSkipImages))
                        }

                        function S(t, e, r, i) {
                            i.minMag && (r.call(t, e, t.TEXTURE_MIN_FILTER, i.minMag), r.call(t, e, t.TEXTURE_MAG_FILTER, i.minMag)), i.min && r.call(t, e, t.TEXTURE_MIN_FILTER, i.min), i.mag && r.call(t, e, t.TEXTURE_MAG_FILTER, i.mag), i.wrap && (r.call(t, e, t.TEXTURE_WRAP_S, i.wrap), r.call(t, e, t.TEXTURE_WRAP_T, i.wrap), (e === t.TEXTURE_3D || s.isSampler(t, e)) && r.call(t, e, t.TEXTURE_WRAP_R, i.wrap)), i.wrapR && r.call(t, e, t.TEXTURE_WRAP_R, i.wrapR), i.wrapS && r.call(t, e, t.TEXTURE_WRAP_S, i.wrapS), i.wrapT && r.call(t, e, t.TEXTURE_WRAP_T, i.wrapT), i.minLod && r.call(t, e, t.TEXTURE_MIN_LOD, i.minLod), i.maxLod && r.call(t, e, t.TEXTURE_MAX_LOD, i.maxLod), i.baseLevel && r.call(t, e, t.TEXTURE_BASE_LEVEL, i.baseLevel), i.maxLevel && r.call(t, e, t.TEXTURE_MAX_LEVEL, i.maxLevel)
                        }

                        function F(t, e, r) {
                            var i = r.target || t.TEXTURE_2D;
                            t.bindTexture(i, e), S(t, i, t.texParameteri, r)
                        }

                        function M(t, e, r) {
                            S(t, e, t.samplerParameteri, r)
                        }

                        function C(t, e) {
                            var r = t.createSampler();
                            return M(t, r, e), r
                        }

                        function I(t, e, r, i, n, s, o) {
                            r = r || a.textureOptions, s = s || t.RGBA, o = o || t.UNSIGNED_BYTE;
                            var l = r.target || t.TEXTURE_2D;
                            if (i = i || r.width, n = n || r.height, t.bindTexture(l, e), g(t, i, n, s)) t.generateMipmap(l);
                            else {
                                var u = b(s) ? t.LINEAR : t.NEAREST;
                                t.texParameteri(l, t.TEXTURE_MIN_FILTER, u), t.texParameteri(l, t.TEXTURE_MAG_FILTER, u), t.texParameteri(l, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(l, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)
                            }
                        }

                        function k(t) {
                            return !0 === t.auto || void 0 === t.auto && void 0 === t.level
                        }

                        function D(t, e) {
                            return (e = e || {}).cubeFaceOrder || [t.TEXTURE_CUBE_MAP_POSITIVE_X, t.TEXTURE_CUBE_MAP_NEGATIVE_X, t.TEXTURE_CUBE_MAP_POSITIVE_Y, t.TEXTURE_CUBE_MAP_NEGATIVE_Y, t.TEXTURE_CUBE_MAP_POSITIVE_Z, t.TEXTURE_CUBE_MAP_NEGATIVE_Z]
                        }

                        function B(t, e) {
                            var r = D(t, e).map(function(t, e) {
                                return {
                                    face: t,
                                    ndx: e
                                }
                            });
                            return r.sort(function(t, e) {
                                return t.face - e.face
                            }), r
                        }

                        function U(t, e, r, i) {
                            var n = (i = i || a.textureOptions).target || t.TEXTURE_2D,
                                s = i.level || 0,
                                o = r.width,
                                l = r.height,
                                h = i.internalFormat || i.format || t.RGBA,
                                c = v(h),
                                f = i.format || c.format,
                                p = i.type || c.type;
                            if (P(t, i), t.bindTexture(n, e), n === t.TEXTURE_CUBE_MAP) {
                                var _, d, m = r.width,
                                    y = r.height;
                                if (m / 6 === y) _ = y, d = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0];
                                else if (y / 6 === m) _ = m, d = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5];
                                else if (m / 3 == y / 2) _ = m / 3, d = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1];
                                else {
                                    if (m / 2 != y / 3) throw "can't figure out cube map from element: " + (r.src ? r.src : r.nodeName);
                                    _ = m / 2, d = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2]
                                }
                                u ? (u.canvas.width = _, u.canvas.height = _, o = _, l = _, B(t, i).forEach(function(e) {
                                    var i = d[2 * e.ndx + 0] * _,
                                        n = d[2 * e.ndx + 1] * _;
                                    u.drawImage(r, i, n, _, _, 0, 0, _, _), t.texImage2D(e.face, s, h, f, p, u.canvas)
                                }), u.canvas.width = 1, u.canvas.height = 1) : "undefined" != typeof createImageBitmap && (o = _, l = _, B(t, i).forEach(function(a) {
                                    var u = d[2 * a.ndx + 0] * _,
                                        c = d[2 * a.ndx + 1] * _;
                                    t.texImage2D(a.face, s, h, _, _, 0, f, p, null), createImageBitmap(r, u, c, _, _, {
                                        premultiplyAlpha: "none",
                                        colorSpaceConversion: "none"
                                    }).then(function(r) {
                                        P(t, i), t.bindTexture(n, e), t.texImage2D(a.face, s, h, f, p, r), A(t, i), k(i) && I(t, e, i, o, l, h, p)
                                    })
                                }))
                            } else if (n === t.TEXTURE_3D || n === t.TEXTURE_2D_ARRAY) {
                                var g = Math.min(r.width, r.height),
                                    b = Math.max(r.width, r.height),
                                    T = b / g;
                                if (T % 1 != 0) throw "can not compute 3D dimensions of element";
                                var x = r.width === b ? 1 : 0,
                                    w = r.height === b ? 1 : 0;
                                R(t), t.pixelStorei(t.UNPACK_ALIGNMENT, 1), t.pixelStorei(t.UNPACK_ROW_LENGTH, r.width), t.pixelStorei(t.UNPACK_IMAGE_HEIGHT, 0), t.pixelStorei(t.UNPACK_SKIP_IMAGES, 0), t.texImage3D(n, s, h, g, g, g, 0, f, p, null);
                                for (var E = 0; E < T; ++E) {
                                    var S = E * g * x,
                                        M = E * g * w;
                                    t.pixelStorei(t.UNPACK_SKIP_PIXELS, S), t.pixelStorei(t.UNPACK_SKIP_ROWS, M), t.texSubImage3D(n, s, 0, 0, E, g, g, 1, f, p, r)
                                }
                                O(t)
                            } else t.texImage2D(n, s, h, f, p, r);
                            A(t, i), k(i) && I(t, e, i, o, l, h, p), F(t, e, i)
                        }

                        function L() {}
                        var N = function() {
                            if ("undefined" != typeof document) {
                                var t = document.createElement("a");
                                return function(e) {
                                    return t.href = e, t.hostname === location.hostname && t.port === location.port && t.protocol === location.protocol
                                }
                            }
                            var e = new URL(location.href).origin;
                            return function(t) {
                                return new URL(t, location.href).origin === e
                            }
                        }();

                        function j(t, e, r) {
                            var i;
                            if (r = r || L, e = void 0 !== e ? e : a.crossOrigin, e = function(t, e) {
                                    return void 0 !== e || N(t) ? e : "anonymous"
                                }(t, e), "undefined" != typeof Image) {
                                i = new Image, void 0 !== e && (i.crossOrigin = e);
                                var n = function() {
                                        i.removeEventListener("error", o), i.removeEventListener("load", l), i = null
                                    },
                                    o = function() {
                                        var e = "couldn't load image: " + t;
                                        s.error(e), r(e, i), n()
                                    },
                                    l = function() {
                                        r(null, i), n()
                                    };
                                return i.addEventListener("error", o), i.addEventListener("load", l), i.src = t, i
                            }
                            if ("undefined" != typeof ImageBitmap) {
                                var u, h, c = function() {
                                        r(u, h)
                                    },
                                    f = {};
                                e && (f.mode = "cors"), fetch(t, f).then(function(t) {
                                    if (!t.ok) throw t;
                                    return t.blob()
                                }).then(function(t) {
                                    return createImageBitmap(t, {
                                        premultiplyAlpha: "none",
                                        colorSpaceConversion: "none"
                                    })
                                }).then(function(t) {
                                    h = t, setTimeout(c)
                                }).catch(function(t) {
                                    u = t, setTimeout(c)
                                }), i = null
                            }
                            return i
                        }

                        function X(t) {
                            return "undefined" != typeof ImageBitmap && t instanceof ImageBitmap || "undefined" != typeof ImageData && t instanceof ImageData || "undefined" != typeof HTMLElement && t instanceof HTMLElement
                        }

                        function z(t, e, r) {
                            return X(t) ? (setTimeout(function() {
                                r(null, t)
                            }), t) : j(t, e, r)
                        }

                        function Y(t, e, r) {
                            var i = (r = r || a.textureOptions).target || t.TEXTURE_2D;
                            if (t.bindTexture(i, e), !1 !== r.color) {
                                var n = function(t) {
                                    return t = t || a.textureColor, l(t) ? t : new Uint8Array([255 * t[0], 255 * t[1], 255 * t[2], 255 * t[3]])
                                }(r.color);
                                if (i === t.TEXTURE_CUBE_MAP)
                                    for (var s = 0; s < 6; ++s) t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, n);
                                else i === t.TEXTURE_3D || i === t.TEXTURE_2D_ARRAY ? t.texImage3D(i, 0, t.RGBA, 1, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, n) : t.texImage2D(i, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, n)
                            }
                        }

                        function G(t, e, r, i) {
                            return i = i || L, r = r || a.textureOptions, Y(t, e, r), z((r = Object.assign({}, r)).src, r.crossOrigin, function(n, s) {
                                n ? i(n, e, s) : (U(t, e, s, r), i(null, e, s))
                            })
                        }

                        function V(t, e, r, i) {
                            i = i || L;
                            var n = r.src;
                            if (6 !== n.length) throw "there must be 6 urls for a cubemap";
                            var s = r.level || 0,
                                o = r.internalFormat || r.format || t.RGBA,
                                a = v(o),
                                l = r.format || a.format,
                                u = r.type || t.UNSIGNED_BYTE,
                                h = r.target || t.TEXTURE_2D;
                            if (h !== t.TEXTURE_CUBE_MAP) throw "target must be TEXTURE_CUBE_MAP";
                            Y(t, e, r), r = Object.assign({}, r);
                            var c, f = 6,
                                p = [],
                                _ = D(t, r);
                            c = n.map(function(n, a) {
                                return z(n, r.crossOrigin, (d = _[a], function(n, a) {
                                    --f, n ? p.push(n) : a.width !== a.height ? p.push("cubemap face img is not a square: " + a.src) : (P(t, r), t.bindTexture(h, e), 5 === f ? D(t).forEach(function(e) {
                                        t.texImage2D(e, s, o, l, u, a)
                                    }) : t.texImage2D(d, s, o, l, u, a), A(t, r), k(r) && t.generateMipmap(h)), 0 === f && i(p.length ? p : void 0, e, c)
                                }));
                                var d
                            })
                        }

                        function W(t, e, r, i) {
                            i = i || L;
                            var n = r.src,
                                s = r.internalFormat || r.format || t.RGBA,
                                o = v(s),
                                a = r.format || o.format,
                                l = r.type || t.UNSIGNED_BYTE,
                                h = r.target || t.TEXTURE_2D_ARRAY;
                            if (h !== t.TEXTURE_3D && h !== t.TEXTURE_2D_ARRAY) throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
                            Y(t, e, r), r = Object.assign({}, r);
                            var c, f = n.length,
                                p = [],
                                _ = r.level || 0,
                                d = r.width,
                                m = r.height,
                                y = n.length,
                                g = !0;
                            c = n.map(function(n, o) {
                                return z(n, r.crossOrigin, (v = o, function(n, o) {
                                    if (--f, n) p.push(n);
                                    else {
                                        if (P(t, r), t.bindTexture(h, e), g) {
                                            g = !1, d = r.width || o.width, m = r.height || o.height, t.texImage3D(h, _, s, d, m, y, 0, a, l, null);
                                            for (var b = 0; b < y; ++b) t.texSubImage3D(h, _, 0, 0, b, d, m, 1, a, l, o)
                                        } else {
                                            var T = o;
                                            o.width === d && o.height === m || (T = u.canvas, u.canvas.width = d, u.canvas.height = m, u.drawImage(o, 0, 0, d, m)), t.texSubImage3D(h, _, 0, 0, v, d, m, 1, a, l, T), T === u.canvas && (u.canvas.width = 0, u.canvas.height = 0)
                                        }
                                        A(t, r), k(r) && t.generateMipmap(h)
                                    }
                                    0 === f && i(p.length ? p : void 0, e, c)
                                }));
                                var v
                            })
                        }

                        function K(t, e, r, s) {
                            var o = (s = s || a.textureOptions).target || t.TEXTURE_2D;
                            t.bindTexture(o, e);
                            var u = s.width,
                                h = s.height,
                                c = s.depth,
                                f = s.level || 0,
                                p = s.internalFormat || s.format || t.RGBA,
                                _ = v(p),
                                d = s.format || _.format,
                                y = s.type || T(t, r, _.type);
                            if (l(r)) r instanceof Uint8ClampedArray && (r = new Uint8Array(r.buffer));
                            else {
                                var g = n.getTypedArrayTypeForGLType(y);
                                r = new g(r)
                            }
                            var b, w = m(p, y),
                                E = r.byteLength / w;
                            if (E % 1) throw "length wrong size for format: " + i.glEnumToString(t, d);
                            if (o === t.TEXTURE_3D)
                                if (u || h || c) !u || h && c ? !h || u && c ? (b = x(t, o, u, h, E / c), u = b.width, h = b.height) : (b = x(t, o, u, c, E / h), u = b.width, c = b.height) : (b = x(t, o, h, c, E / u), h = b.width, c = b.height);
                                else {
                                    var S = Math.cbrt(E);
                                    if (S % 1 != 0) throw "can't guess cube size of array of numElements: " + E;
                                    u = S, h = S, c = S
                                }
                            else b = x(t, o, u, h, E), u = b.width, h = b.height;
                            if (R(t), t.pixelStorei(t.UNPACK_ALIGNMENT, s.unpackAlignment || 1), P(t, s), o === t.TEXTURE_CUBE_MAP) {
                                var F = E / 6 * (w / r.BYTES_PER_ELEMENT);
                                B(t, s).forEach(function(e) {
                                    var i = F * e.ndx,
                                        n = r.subarray(i, i + F);
                                    t.texImage2D(e.face, f, p, u, h, 0, d, y, n)
                                })
                            } else o === t.TEXTURE_3D ? t.texImage3D(o, f, p, u, h, c, 0, d, y, r) : t.texImage2D(o, f, p, u, h, 0, d, y, r);
                            return A(t, s), O(t), {
                                width: u,
                                height: h,
                                depth: c,
                                type: y
                            }
                        }

                        function H(t, e, r) {
                            var i = r.target || t.TEXTURE_2D;
                            t.bindTexture(i, e);
                            var n = r.level || 0,
                                s = r.internalFormat || r.format || t.RGBA,
                                o = v(s),
                                a = r.format || o.format,
                                l = r.type || o.type;
                            if (P(t, r), i === t.TEXTURE_CUBE_MAP)
                                for (var u = 0; u < 6; ++u) t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + u, n, s, r.width, r.height, 0, a, l, null);
                            else i === t.TEXTURE_3D ? t.texImage3D(i, n, s, r.width, r.height, r.depth, 0, a, l, null) : t.texImage2D(i, n, s, r.width, r.height, 0, a, l, null);
                            A(t, r)
                        }

                        function q(t, e, r) {
                            r = r || L, e = e || a.textureOptions;
                            var i = t.createTexture(),
                                n = e.target || t.TEXTURE_2D,
                                s = e.width || 1,
                                o = e.height || 1,
                                u = e.internalFormat || t.RGBA,
                                h = v(u),
                                c = e.type || h.type;
                            t.bindTexture(n, i), n === t.TEXTURE_CUBE_MAP && (t.texParameteri(n, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(n, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE));
                            var f = e.src;
                            if (f)
                                if ("function" == typeof f && (f = f(t, e)), "string" == typeof f) G(t, i, e, r);
                                else if (l(f) || Array.isArray(f) && ("number" == typeof f[0] || Array.isArray(f[0]) || l(f[0]))) {
                                var p = K(t, i, f, e);
                                s = p.width, o = p.height, c = p.type
                            } else if (Array.isArray(f) && ("string" == typeof f[0] || X(f[0]))) n === t.TEXTURE_CUBE_MAP ? V(t, i, e, r) : W(t, i, e, r);
                            else {
                                if (!X(f)) throw "unsupported src type";
                                U(t, i, f, e), s = f.width, o = f.height
                            } else H(t, i, e);
                            return k(e) && I(t, i, e, s, o, u, c), F(t, i, e), i
                        }
                    },
                "./src/twgl-full.js":
                    /*!**************************!*\
                      !*** ./src/twgl-full.js ***!
                      \**************************/
                    /*! no static exports found */
                    function(t, e, r) {
                        "use strict";
                        e.__esModule = !0;
                        var i = {
                            m4: !0,
                            v3: !0,
                            primitives: !0
                        };
                        e.primitives = e.v3 = e.m4 = void 0;
                        var n = l(r( /*! ./m4.js */ "./src/m4.js"));
                        e.m4 = n;
                        var s = l(r( /*! ./v3.js */ "./src/v3.js"));
                        e.v3 = s;
                        var o = l(r( /*! ./primitives.js */ "./src/primitives.js"));
                        e.primitives = o;
                        var a = r( /*! ./twgl.js */ "./src/twgl.js");

                        function l(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var r in t)
                                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                                        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
                                        i.get || i.set ? Object.defineProperty(e, r, i) : e[r] = t[r]
                                    }
                            return e.default = t, e
                        }
                        Object.keys(a).forEach(function(t) {
                            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || (e[t] = a[t]))
                        })
                    },
                "./src/twgl.js":
                    /*!*********************!*\
                      !*** ./src/twgl.js ***!
                      \*********************/
                    /*! no static exports found */
                    function(t, e, r) {
                        "use strict";
                        e.__esModule = !0;
                        var i = {
                            addExtensionsToContext: !0,
                            getContext: !0,
                            getWebGLContext: !0,
                            resizeCanvasToDisplaySize: !0,
                            setDefaults: !0
                        };
                        e.addExtensionsToContext = y, e.getContext = function(t, e) {
                            return function(t, e) {
                                for (var r = ["webgl2", "webgl", "experimental-webgl"], i = null, n = 0; n < r.length; ++n)
                                    if (i = t.getContext(r[n], e)) {
                                        _.addExtensionsToContext && y(i);
                                        break
                                    }
                                return i
                            }(t, e)
                        }, e.getWebGLContext = function(t, e) {
                            return function(t, e) {
                                for (var r = ["webgl", "experimental-webgl"], i = null, n = 0; n < r.length; ++n)
                                    if (i = t.getContext(r[n], e)) {
                                        _.addExtensionsToContext && y(i);
                                        break
                                    }
                                return i
                            }(t, e)
                        }, e.resizeCanvasToDisplaySize = function(t, e) {
                            e = e || 1, e = Math.max(0, e);
                            var r = t.clientWidth * e | 0,
                                i = t.clientHeight * e | 0;
                            if (t.width !== r || t.height !== i) return t.width = r, t.height = i, !0;
                            return !1
                        }, e.setDefaults = function(t) {
                            o.copyExistingProperties(t, _), n.setAttributeDefaults_(t), s.setTextureDefaults_(t)
                        };
                        var n = p(r( /*! ./attributes.js */ "./src/attributes.js"));
                        Object.keys(n).forEach(function(t) {
                            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || (e[t] = n[t]))
                        });
                        var s = p(r( /*! ./textures.js */ "./src/textures.js"));
                        Object.keys(s).forEach(function(t) {
                            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || (e[t] = s[t]))
                        });
                        var o = p(r( /*! ./helper.js */ "./src/helper.js")),
                            a = p(r( /*! ./utils.js */ "./src/utils.js"));
                        Object.keys(a).forEach(function(t) {
                            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || (e[t] = a[t]))
                        });
                        var l = r( /*! ./draw.js */ "./src/draw.js");
                        Object.keys(l).forEach(function(t) {
                            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || (e[t] = l[t]))
                        });
                        var u = r( /*! ./framebuffers.js */ "./src/framebuffers.js");
                        Object.keys(u).forEach(function(t) {
                            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || (e[t] = u[t]))
                        });
                        var h = r( /*! ./programs.js */ "./src/programs.js");
                        Object.keys(h).forEach(function(t) {
                            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || (e[t] = h[t]))
                        });
                        var c = r( /*! ./typedarrays.js */ "./src/typedarrays.js");
                        Object.keys(c).forEach(function(t) {
                            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || (e[t] = c[t]))
                        });
                        var f = r( /*! ./vertex-arrays.js */ "./src/vertex-arrays.js");

                        function p(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var r in t)
                                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                                        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
                                        i.get || i.set ? Object.defineProperty(e, r, i) : e[r] = t[r]
                                    }
                            return e.default = t, e
                        }
                        Object.keys(f).forEach(function(t) {
                            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || (e[t] = f[t]))
                        });
                        var _ = {
                            addExtensionsToContext: !0
                        };
                        var d = /^(.*?)_/;

                        function m(t, e) {
                            a.glEnumToString(t, 0);
                            var r = t.getExtension(e);
                            if (r) {
                                var i = {},
                                    n = d.exec(e)[1],
                                    s = "_" + n;
                                for (var l in r) {
                                    var u = r[l],
                                        h = "function" == typeof u,
                                        c = h ? n : s,
                                        f = l;
                                    l.endsWith(c) && (f = l.substring(0, l.length - c.length)), void 0 !== t[f] ? h || t[f] === u || o.warn(f, t[f], u, l) : h ? t[f] = function(t) {
                                        return function() {
                                            return t.apply(r, arguments)
                                        }
                                    }(u) : (t[f] = u, i[f] = u)
                                }
                                i.constructor = {
                                    name: r.constructor.name
                                }, a.glEnumToString(i, 0)
                            }
                            return r
                        }
                        var v = ["ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_float", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_disjoint_timer_query_webgl2", "EXT_frag_depth", "EXT_sRGB", "EXT_shader_texture_lod", "EXT_texture_filter_anisotropic", "OES_element_index_uint", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_atc", "WEBGL_compressed_texture_etc1", "WEBGL_compressed_texture_pvrtc", "WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_depth_texture", "WEBGL_draw_buffers"];

                        function y(t) {
                            for (var e = 0; e < v.length; ++e) m(t, v[e])
                        }
                    },
                "./src/typedarrays.js":
                    /*!****************************!*\
                      !*** ./src/typedarrays.js ***!
                      \****************************/
                    /*! no static exports found */
                    function(t, e, r) {
                        "use strict";
                        e.__esModule = !0, e.getGLTypeForTypedArray = function(t) {
                            if (t instanceof Int8Array) return i;
                            if (t instanceof Uint8Array) return n;
                            if (t instanceof Uint8ClampedArray) return n;
                            if (t instanceof Int16Array) return s;
                            if (t instanceof Uint16Array) return o;
                            if (t instanceof Int32Array) return a;
                            if (t instanceof Uint32Array) return l;
                            if (t instanceof Float32Array) return u;
                            throw "unsupported typed array type"
                        }, e.getGLTypeForTypedArrayType = function(t) {
                            if (t === Int8Array) return i;
                            if (t === Uint8Array) return n;
                            if (t === Uint8ClampedArray) return n;
                            if (t === Int16Array) return s;
                            if (t === Uint16Array) return o;
                            if (t === Int32Array) return a;
                            if (t === Uint32Array) return l;
                            if (t === Float32Array) return u;
                            throw "unsupported typed array type"
                        }, e.getTypedArrayTypeForGLType = function(t) {
                            var e = h[t];
                            if (!e) throw "unknown gl type";
                            return e
                        }, e.isArrayBuffer = void 0;
                        var i = 5120,
                            n = 5121,
                            s = 5122,
                            o = 5123,
                            a = 5124,
                            l = 5125,
                            u = 5126,
                            h = {},
                            c = h;
                        c[i] = Int8Array, c[n] = Uint8Array, c[s] = Int16Array, c[o] = Uint16Array, c[a] = Int32Array, c[l] = Uint32Array, c[u] = Float32Array, c[32819] = Uint16Array, c[32820] = Uint16Array, c[33635] = Uint16Array, c[5131] = Uint16Array, c[33640] = Uint32Array, c[35899] = Uint32Array, c[35902] = Uint32Array, c[36269] = Uint32Array, c[34042] = Uint32Array;
                        var f = "undefined" != typeof SharedArrayBuffer ? function(t) {
                            return t && t.buffer && (t.buffer instanceof ArrayBuffer || t.buffer instanceof SharedArrayBuffer)
                        } : function(t) {
                            return t && t.buffer && t.buffer instanceof ArrayBuffer
                        };
                        e.isArrayBuffer = f
                    },
                "./src/utils.js":
                    /*!**********************!*\
                      !*** ./src/utils.js ***!
                      \**********************/
                    /*! no static exports found */
                    function(t, e, r) {
                        "use strict";
                        e.__esModule = !0, e.isWebGL1 = function(t) {
                            return !t.texStorage2D
                        }, e.isWebGL2 = function(t) {
                            return !!t.texStorage2D
                        }, e.glEnumToString = void 0;
                        var i = function() {
                            var t = {},
                                e = {};
                            return function(r, i) {
                                return function(r) {
                                    var i = r.constructor.name;
                                    if (!t[i]) {
                                        for (var n in r)
                                            if ("number" == typeof r[n]) {
                                                var s = e[r[n]];
                                                e[r[n]] = s ? "".concat(s, " | ").concat(n) : n
                                            }
                                        t[i] = !0
                                    }
                                }(r), e[i] || "0x" + i.toString(16)
                            }
                        }();
                        e.glEnumToString = i
                    },
                "./src/v3.js":
                    /*!*******************!*\
                      !*** ./src/v3.js ***!
                      \*******************/
                    /*! no static exports found */
                    function(t, e, r) {
                        "use strict";
                        e.__esModule = !0, e.add = function(t, e, r) {
                            return (r = r || new i(3))[0] = t[0] + e[0], r[1] = t[1] + e[1], r[2] = t[2] + e[2], r
                        }, e.copy = function(t, e) {
                            return (e = e || new i(3))[0] = t[0], e[1] = t[1], e[2] = t[2], e
                        }, e.create = function(t, e, r) {
                            var n = new i(3);
                            t && (n[0] = t);
                            e && (n[1] = e);
                            r && (n[2] = r);
                            return n
                        }, e.cross = function(t, e, r) {
                            r = r || new i(3);
                            var n = t[2] * e[0] - t[0] * e[2],
                                s = t[0] * e[1] - t[1] * e[0];
                            return r[0] = t[1] * e[2] - t[2] * e[1], r[1] = n, r[2] = s, r
                        }, e.distance = function(t, e) {
                            var r = t[0] - e[0],
                                i = t[1] - e[1],
                                n = t[2] - e[2];
                            return Math.sqrt(r * r + i * i + n * n)
                        }, e.distanceSq = function(t, e) {
                            var r = t[0] - e[0],
                                i = t[1] - e[1],
                                n = t[2] - e[2];
                            return r * r + i * i + n * n
                        }, e.divide = function(t, e, r) {
                            return (r = r || new i(3))[0] = t[0] / e[0], r[1] = t[1] / e[1], r[2] = t[2] / e[2], r
                        }, e.divScalar = function(t, e, r) {
                            return (r = r || new i(3))[0] = t[0] / e, r[1] = t[1] / e, r[2] = t[2] / e, r
                        }, e.dot = function(t, e) {
                            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
                        }, e.lerp = function(t, e, r, n) {
                            return (n = n || new i(3))[0] = (1 - r) * t[0] + r * e[0], n[1] = (1 - r) * t[1] + r * e[1], n[2] = (1 - r) * t[2] + r * e[2], n
                        }, e.length = function(t) {
                            return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2])
                        }, e.lengthSq = function(t) {
                            return t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
                        }, e.mulScalar = function(t, e, r) {
                            return (r = r || new i(3))[0] = t[0] * e, r[1] = t[1] * e, r[2] = t[2] * e, r
                        }, e.multiply = function(t, e, r) {
                            return (r = r || new i(3))[0] = t[0] * e[0], r[1] = t[1] * e[1], r[2] = t[2] * e[2], r
                        }, e.negate = function(t, e) {
                            return (e = e || new i(3))[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e
                        }, e.normalize = function(t, e) {
                            e = e || new i(3);
                            var r = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
                                n = Math.sqrt(r);
                            n > 1e-5 ? (e[0] = t[0] / n, e[1] = t[1] / n, e[2] = t[2] / n) : (e[0] = 0, e[1] = 0, e[2] = 0);
                            return e
                        }, e.setDefaultType = function(t) {
                            var e = i;
                            return i = t, e
                        }, e.subtract = function(t, e, r) {
                            return (r = r || new i(3))[0] = t[0] - e[0], r[1] = t[1] - e[1], r[2] = t[2] - e[2], r
                        };
                        var i = Float32Array
                    },
                "./src/vertex-arrays.js":
                    /*!******************************!*\
                      !*** ./src/vertex-arrays.js ***!
                      \******************************/
                    /*! no static exports found */
                    function(t, e, r) {
                        "use strict";
                        e.__esModule = !0, e.createVertexArrayInfo = function(t, e, r) {
                            var n = t.createVertexArray();
                            t.bindVertexArray(n), e.length || (e = [e]);
                            return e.forEach(function(e) {
                                i.setBuffersAndAttributes(t, e, r)
                            }), t.bindVertexArray(null), {
                                numElements: r.numElements,
                                elementType: r.elementType,
                                vertexArrayObject: n
                            }
                        }, e.createVAOAndSetAttributes = n, e.createVAOFromBufferInfo = function(t, e, r) {
                            return n(t, e.attribSetters || e, r.attribs, r.indices)
                        };
                        var i = function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var r in t)
                                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                                        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
                                        i.get || i.set ? Object.defineProperty(e, r, i) : e[r] = t[r]
                                    }
                            return e.default = t, e
                        }(r( /*! ./programs.js */ "./src/programs.js"));

                        function n(t, e, r, n) {
                            var s = t.createVertexArray();
                            return t.bindVertexArray(s), i.setAttributes(e, r), n && t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, n), t.bindVertexArray(null), s
                        }
                    }
            })
        }, t.exports = i()
    }, function(t, e, r) {
        "use strict";
        var i = r(13);

        function n() {
            var t = navigator.userAgent.toLowerCase(),
                e = navigator.appVersion.toLowerCase(),
                r = /windows phone|iemobile|wpdesktop/.test(t),
                i = !r && /android.*mobile/.test(t),
                n = !r && !i && /android/i.test(t),
                s = i || n,
                o = !r && /ip(hone|od|ad)/i.test(t) && !window.MSStream,
                a = !r && /ipad/i.test(t) && o,
                l = n || a,
                u = i || o && !a || r,
                h = u || l,
                c = t.indexOf("firefox") > -1,
                f = !!t.match(/version\/[\d\.]+.*safari/),
                p = t.indexOf("opr") > -1,
                _ = !window.ActiveXObject && "ActiveXObject" in window,
                d = e.indexOf("msie") > -1 || _ || e.indexOf("edge") > -1,
                m = t.indexOf("edge") > -1,
                v = null !== window.chrome && void 0 !== window.chrome && "google inc." == navigator.vendor.toLowerCase() && !p && !m;
            this.infos = {
                isDroid: s,
                isDroidPhone: i,
                isDroidTablet: n,
                isWindowsPhone: r,
                isIos: o,
                isIpad: a,
                isDevice: h,
                isEdge: m,
                isIE: d,
                isIE11: _,
                isPhone: u,
                isTablet: l,
                isFirefox: c,
                isSafari: f,
                isOpera: p,
                isChrome: v,
                isDesktop: !u && !l
            }, Object.keys(this.infos).forEach(function(t) {
                Object.defineProperty(this, t, {
                    get: function() {
                        return this.infos[t]
                    }
                })
            }, this), Object.freeze(this)
        }
        t.exports = new n, n.prototype.addClasses = function(t) {
            Object.keys(this.infos).forEach(function(e) {
                this.infos[e] && function(t, e) {
                    t.addClass ? t.addClass(e) : t.classList ? t.classList.add(e) : t.className += " " + e
                }(t, i(e))
            }, this)
        }, n.prototype.getInfos = function() {
            return t = this.infos, JSON.parse(JSON.stringify(t));
            var t
        }
    }, function(t, e) {
        ! function(t, e) {
            "use strict";
            if ("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype) "isIntersecting" in t.IntersectionObserverEntry.prototype || Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
                get: function() {
                    return this.intersectionRatio > 0
                }
            });
            else {
                var r = [];
                n.prototype.THROTTLE_TIMEOUT = 100, n.prototype.POLL_INTERVAL = null, n.prototype.USE_MUTATION_OBSERVER = !0, n.prototype.observe = function(t) {
                    if (!this._observationTargets.some(function(e) {
                            return e.element == t
                        })) {
                        if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                        this._registerInstance(), this._observationTargets.push({
                            element: t,
                            entry: null
                        }), this._monitorIntersections(), this._checkForIntersections()
                    }
                }, n.prototype.unobserve = function(t) {
                    this._observationTargets = this._observationTargets.filter(function(e) {
                        return e.element != t
                    }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                }, n.prototype.disconnect = function() {
                    this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                }, n.prototype.takeRecords = function() {
                    var t = this._queuedEntries.slice();
                    return this._queuedEntries = [], t
                }, n.prototype._initThresholds = function(t) {
                    var e = t || [0];
                    return Array.isArray(e) || (e = [e]), e.sort().filter(function(t, e, r) {
                        if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                        return t !== r[e - 1]
                    })
                }, n.prototype._parseRootMargin = function(t) {
                    var e = (t || "0px").split(/\s+/).map(function(t) {
                        var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                        if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                        return {
                            value: parseFloat(e[1]),
                            unit: e[2]
                        }
                    });
                    return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
                }, n.prototype._monitorIntersections = function() {
                    this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (s(t, "resize", this._checkForIntersections, !0), s(e, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }))))
                }, n.prototype._unmonitorIntersections = function() {
                    this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(t, "resize", this._checkForIntersections, !0), o(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                }, n.prototype._checkForIntersections = function() {
                    var e = this._rootIsInDom(),
                        r = e ? this._getRootRect() : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        };
                    this._observationTargets.forEach(function(n) {
                        var s = n.element,
                            o = a(s),
                            l = this._rootContainsTarget(s),
                            u = n.entry,
                            h = e && l && this._computeTargetAndRootIntersection(s, r),
                            c = n.entry = new i({
                                time: t.performance && performance.now && performance.now(),
                                target: s,
                                boundingClientRect: o,
                                rootBounds: r,
                                intersectionRect: h
                            });
                        u ? e && l ? this._hasCrossedThreshold(u, c) && this._queuedEntries.push(c) : u && u.isIntersecting && this._queuedEntries.push(c) : this._queuedEntries.push(c)
                    }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                }, n.prototype._computeTargetAndRootIntersection = function(r, i) {
                    if ("none" != t.getComputedStyle(r).display) {
                        for (var n, s, o, l, h, c, f, p, _ = a(r), d = u(r), m = !1; !m;) {
                            var v = null,
                                y = 1 == d.nodeType ? t.getComputedStyle(d) : {};
                            if ("none" == y.display) return;
                            if (d == this.root || d == e ? (m = !0, v = i) : d != e.body && d != e.documentElement && "visible" != y.overflow && (v = a(d)), v && (n = v, s = _, o = void 0, l = void 0, h = void 0, c = void 0, f = void 0, p = void 0, o = Math.max(n.top, s.top), l = Math.min(n.bottom, s.bottom), h = Math.max(n.left, s.left), c = Math.min(n.right, s.right), p = l - o, !(_ = (f = c - h) >= 0 && p >= 0 && {
                                    top: o,
                                    bottom: l,
                                    left: h,
                                    right: c,
                                    width: f,
                                    height: p
                                }))) break;
                            d = u(d)
                        }
                        return _
                    }
                }, n.prototype._getRootRect = function() {
                    var t;
                    if (this.root) t = a(this.root);
                    else {
                        var r = e.documentElement,
                            i = e.body;
                        t = {
                            top: 0,
                            left: 0,
                            right: r.clientWidth || i.clientWidth,
                            width: r.clientWidth || i.clientWidth,
                            bottom: r.clientHeight || i.clientHeight,
                            height: r.clientHeight || i.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(t)
                }, n.prototype._expandRectByRootMargin = function(t) {
                    var e = this._rootMarginValues.map(function(e, r) {
                            return "px" == e.unit ? e.value : e.value * (r % 2 ? t.width : t.height) / 100
                        }),
                        r = {
                            top: t.top - e[0],
                            right: t.right + e[1],
                            bottom: t.bottom + e[2],
                            left: t.left - e[3]
                        };
                    return r.width = r.right - r.left, r.height = r.bottom - r.top, r
                }, n.prototype._hasCrossedThreshold = function(t, e) {
                    var r = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                        i = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                    if (r !== i)
                        for (var n = 0; n < this.thresholds.length; n++) {
                            var s = this.thresholds[n];
                            if (s == r || s == i || s < r != s < i) return !0
                        }
                }, n.prototype._rootIsInDom = function() {
                    return !this.root || l(e, this.root)
                }, n.prototype._rootContainsTarget = function(t) {
                    return l(this.root || e, t)
                }, n.prototype._registerInstance = function() {
                    r.indexOf(this) < 0 && r.push(this)
                }, n.prototype._unregisterInstance = function() {
                    var t = r.indexOf(this); - 1 != t && r.splice(t, 1)
                }, t.IntersectionObserver = n, t.IntersectionObserverEntry = i
            }

            function i(t) {
                this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }, this.isIntersecting = !!t.intersectionRect;
                var e = this.boundingClientRect,
                    r = e.width * e.height,
                    i = this.intersectionRect,
                    n = i.width * i.height;
                this.intersectionRatio = r ? Number((n / r).toFixed(4)) : this.isIntersecting ? 1 : 0
            }

            function n(t, e) {
                var r, i, n, s = e || {};
                if ("function" != typeof t) throw new Error("callback must be a function");
                if (s.root && 1 != s.root.nodeType) throw new Error("root must be an Element");
                this._checkForIntersections = (r = this._checkForIntersections.bind(this), i = this.THROTTLE_TIMEOUT, n = null, function() {
                    n || (n = setTimeout(function() {
                        r(), n = null
                    }, i))
                }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(s.rootMargin), this.thresholds = this._initThresholds(s.threshold), this.root = s.root || null, this.rootMargin = this._rootMarginValues.map(function(t) {
                    return t.value + t.unit
                }).join(" ")
            }

            function s(t, e, r, i) {
                "function" == typeof t.addEventListener ? t.addEventListener(e, r, i || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, r)
            }

            function o(t, e, r, i) {
                "function" == typeof t.removeEventListener ? t.removeEventListener(e, r, i || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, r)
            }

            function a(t) {
                var e;
                try {
                    e = t.getBoundingClientRect()
                } catch (t) {}
                return e ? (e.width && e.height || (e = {
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom,
                    left: e.left,
                    width: e.right - e.left,
                    height: e.bottom - e.top
                }), e) : {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            }

            function l(t, e) {
                for (var r = e; r;) {
                    if (r == t) return !0;
                    r = u(r)
                }
                return !1
            }

            function u(t) {
                var e = t.parentNode;
                return e && 11 == e.nodeType && e.host ? e.host : e
            }
        }(window, document)
    }, function(t, e) {
        var r;
        r = function() {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (r = window)
        }
        t.exports = r
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return n
        });
        var i = r(0);
        /*!
         * VERSION: 2.1.2
         * DATE: 2019-03-01
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         **/
        i.h._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() {
            var t = function(t) {
                    var e, r = [],
                        i = t.length;
                    for (e = 0; e !== i; r.push(t[e++]));
                    return r
                },
                e = function(t, e, r) {
                    var i, n, s = t.cycle;
                    for (i in s) n = s[i], t[i] = "function" == typeof n ? n(r, e[r], e) : n[r % n.length];
                    delete t.cycle
                },
                r = function(t) {
                    if ("function" == typeof t) return t;
                    var e = "object" == typeof t ? t : {
                            each: t
                        },
                        r = e.ease,
                        i = e.from || 0,
                        n = e.base || 0,
                        s = {},
                        o = isNaN(i),
                        a = e.axis,
                        l = {
                            center: .5,
                            end: 1
                        }[i] || 0;
                    return function(t, u, h) {
                        var c, f, p, _, d, m, v, y, g, b = (h || e).length,
                            T = s[b];
                        if (!T) {
                            if (!(g = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                                for (v = -1 / 0; v < (v = h[g++].getBoundingClientRect().left) && g < b;);
                                g--
                            }
                            for (T = s[b] = [], c = o ? Math.min(g, b) * l - .5 : i % g, f = o ? b * l / g - .5 : i / g | 0, v = 0, y = 1 / 0, m = 0; m < b; m++) p = m % g - c, _ = f - (m / g | 0), T[m] = d = a ? Math.abs("y" === a ? _ : p) : Math.sqrt(p * p + _ * _), d > v && (v = d), d < y && (y = d);
                            T.max = v - y, T.min = y, T.v = b = e.amount || e.each * (g > b ? b : a ? "y" === a ? b / g : g : Math.max(g, b / g)) || 0, T.b = b < 0 ? n - b : n
                        }
                        return b = (T[t] - T.min) / T.max, T.b + (r ? r.getRatio(b) : b) * T.v
                    }
                },
                n = function(t, e, r) {
                    i.i.call(this, t, e, r), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = n.prototype.render
                },
                s = i.i._internals,
                o = s.isSelector,
                a = s.isArray,
                l = n.prototype = i.i.to({}, .1, {}),
                u = [];
            n.version = "2.1.2", l.constructor = n, l.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.i.killTweensOf, n.getTweensOf = i.i.getTweensOf, n.lagSmoothing = i.i.lagSmoothing, n.ticker = i.i.ticker, n.render = i.i.render, n.distribute = r, l.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.i.prototype.invalidate.call(this)
            }, l.updateTo = function(t, e) {
                var r, n = this.ratio,
                    s = this.vars.immediateRender || t.immediateRender;
                for (r in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[r] = t[r];
                if (this._initted || s)
                    if (e) this._initted = !1, s && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i.i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                    var o = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                } else if (this._initted = !1, this._init(), this._time > 0 || s)
                    for (var a, l = 1 / (1 - n), u = this._firstPT; u;) a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next;
                return this
            }, l.render = function(t, e, r) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var n, o, a, l, u, h, c, f, p, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                    d = this._time,
                    m = this._totalTime,
                    v = this._cycle,
                    y = this._duration,
                    g = this._rawPrevTime;
                if (t >= _ - 1e-8 && t >= 0 ? (this._totalTime = _, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, o = "onComplete", r = r || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || r) && (this._startTime === this._timeline._duration && (t = 0), (g < 0 || t <= 0 && t >= -1e-8 || 1e-8 === g && "isPause" !== this.data) && g !== t && (r = !0, g > 1e-8 && (o = "onReverseComplete")), this._rawPrevTime = f = !e || t || g === t ? t : 1e-8)) : t < 1e-8 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === y && g > 0) && (o = "onReverseComplete", n = this._reversed), t > -1e-8 ? t = 0 : t < 0 && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || r) && (g >= 0 && (r = !0), this._rawPrevTime = f = !e || t || g === t ? t : 1e-8)), this._initted || (r = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && m <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (p = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== p || this._initted ? this._yoyoEase = p = !0 === p ? this._ease : p instanceof i.b ? p : i.b.map[p] : (p = this.vars.ease, this._yoyoEase = p = p ? p instanceof i.b ? p : "function" == typeof p ? new i.b(p, this.vars.easeParams) : i.b.map[p] || i.i.defaultEase : i.i.defaultEase)), this.ratio = p ? 1 - p.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !p ? (u = this._time / y, (1 === (h = this._easeType) || 3 === h && u >= .5) && (u = 1 - u), 3 === h && (u *= 2), 1 === (c = this._easePower) ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u), this.ratio = 1 === h ? 1 - u : 2 === h ? u : this._time / y < .5 ? u / 2 : 1 - u / 2) : p || (this.ratio = this._ease.getRatio(this._time / y))), d !== this._time || r || v !== this._cycle) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!r && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = m, this._rawPrevTime = g, this._cycle = v, s.lazyTweens.push(this), void(this._lazy = [t, e]);
                        !this._time || n || p ? n && this._ease._calcEnd && !p && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y)
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, r) : o || (o = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== y || e || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                    this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, r), e || (this._totalTime !== m || o) && this._callback("onUpdate")), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), o && (this._gc && !r || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, r), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o), 0 === y && 1e-8 === this._rawPrevTime && 1e-8 !== f && (this._rawPrevTime = 0)))
                } else m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, n.to = function(t, e, r) {
                return new n(t, e, r)
            }, n.from = function(t, e, r) {
                return r.runBackwards = !0, r.immediateRender = 0 != r.immediateRender, new n(t, e, r)
            }, n.fromTo = function(t, e, r, i) {
                return i.startAt = r, i.immediateRender = 0 != i.immediateRender && 0 != r.immediateRender, new n(t, e, i)
            }, n.staggerTo = n.allTo = function(s, l, h, c, f, p, _) {
                var d, m, v, y, g = [],
                    b = r(h.stagger || c),
                    T = h.cycle,
                    x = (h.startAt || u).cycle;
                for (a(s) || ("string" == typeof s && (s = i.i.selector(s) || s), o(s) && (s = t(s))), d = (s = s || []).length - 1, v = 0; v <= d; v++) {
                    for (y in m = {}, h) m[y] = h[y];
                    if (T && (e(m, s, v), null != m.duration && (l = m.duration, delete m.duration)), x) {
                        for (y in x = m.startAt = {}, h.startAt) x[y] = h.startAt[y];
                        e(m.startAt, s, v)
                    }
                    m.delay = b(v, s[v], s) + (m.delay || 0), v === d && f && (m.onComplete = function() {
                        h.onComplete && h.onComplete.apply(h.onCompleteScope || this, arguments), f.apply(_ || h.callbackScope || this, p || u)
                    }), g[v] = new n(s[v], l, m)
                }
                return g
            }, n.staggerFrom = n.allFrom = function(t, e, r, i, s, o, a) {
                return r.runBackwards = !0, r.immediateRender = 0 != r.immediateRender, n.staggerTo(t, e, r, i, s, o, a)
            }, n.staggerFromTo = n.allFromTo = function(t, e, r, i, s, o, a, l) {
                return i.startAt = r, i.immediateRender = 0 != i.immediateRender && 0 != r.immediateRender, n.staggerTo(t, e, i, s, o, a, l)
            }, n.delayedCall = function(t, e, r, i, s) {
                return new n(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: r,
                    callbackScope: i,
                    onReverseComplete: e,
                    onReverseCompleteParams: r,
                    immediateRender: !1,
                    useFrames: s,
                    overwrite: 0
                })
            }, n.set = function(t, e) {
                return new n(t, 0, e)
            }, n.isTweening = function(t) {
                return i.i.getTweensOf(t, !0).length > 0
            };
            var h = function(t, e) {
                    for (var r = [], n = 0, s = t._first; s;) s instanceof i.i ? r[n++] = s : (e && (r[n++] = s), n = (r = r.concat(h(s, e))).length), s = s._next;
                    return r
                },
                c = n.getAllTweens = function(t) {
                    return h(i.a._rootTimeline, t).concat(h(i.a._rootFramesTimeline, t))
                };
            n.killAll = function(t, e, r, n) {
                null == e && (e = !0), null == r && (r = !0);
                var s, o, a, l = c(0 != n),
                    u = l.length,
                    h = e && r && n;
                for (a = 0; a < u; a++) o = l[a], (h || o instanceof i.f || (s = o.target === o.vars.onComplete) && r || e && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
            }, n.killChildTweensOf = function(e, r) {
                if (null != e) {
                    var l, u, h, c, f, p = s.tweenLookup;
                    if ("string" == typeof e && (e = i.i.selector(e) || e), o(e) && (e = t(e)), a(e))
                        for (c = e.length; --c > -1;) n.killChildTweensOf(e[c], r);
                    else {
                        for (h in l = [], p)
                            for (u = p[h].target.parentNode; u;) u === e && (l = l.concat(p[h].tweens)), u = u.parentNode;
                        for (f = l.length, c = 0; c < f; c++) r && l[c].totalTime(l[c].totalDuration()), l[c]._enabled(!1, !1)
                    }
                }
            };
            var f = function(t, e, r, n) {
                e = !1 !== e, r = !1 !== r;
                for (var s, o, a = c(n = !1 !== n), l = e && r && n, u = a.length; --u > -1;) o = a[u], (l || o instanceof i.f || (s = o.target === o.vars.onComplete) && r || e && !s) && o.paused(t)
            };
            return n.pauseAll = function(t, e, r) {
                f(!0, t, e, r)
            }, n.resumeAll = function(t, e, r) {
                f(!1, t, e, r)
            }, n.globalTimeScale = function(t) {
                var e = i.a._rootTimeline,
                    r = i.i.ticker.time;
                return arguments.length ? (t = t || 1e-8, e._startTime = r - (r - e._startTime) * e._timeScale / t, e = i.a._rootFramesTimeline, r = i.i.ticker.frame, e._startTime = r - (r - e._startTime) * e._timeScale / t, e._timeScale = i.a._rootTimeline._timeScale = t, t) : e._timeScale
            }, l.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }, l.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, l.time = function(t, e) {
                if (!arguments.length) return this._time;
                this._dirty && this.totalDuration();
                var r = this._duration,
                    i = this._cycle,
                    n = i * (r + this._repeatDelay);
                return t > r && (t = r), this.totalTime(this._yoyo && 1 & i ? r - t + n : this._repeat ? t + n : t, e)
            }, l.duration = function(t) {
                return arguments.length ? i.a.prototype.duration.call(this, t) : this._duration
            }, l.totalDuration = function(t) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, l.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, l.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, l.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, n
        }, !0);
        var n = i.j.TweenMax
    }, function(t, e) {
        function r() {}
        r.prototype = {
            on: function(t, e, r) {
                var i = this.e || (this.e = {});
                return (i[t] || (i[t] = [])).push({
                    fn: e,
                    ctx: r
                }), this
            },
            once: function(t, e, r) {
                var i = this;

                function n() {
                    i.off(t, n), e.apply(r, arguments)
                }
                return n._ = e, this.on(t, n, r)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, n = r.length; i < n; i++) r[i].fn.apply(r[i].ctx, e);
                return this
            },
            off: function(t, e) {
                var r = this.e || (this.e = {}),
                    i = r[t],
                    n = [];
                if (i && e)
                    for (var s = 0, o = i.length; s < o; s++) i[s].fn !== e && i[s].fn._ !== e && n.push(i[s]);
                return n.length ? r[t] = n : delete r[t], this
            }
        }, t.exports = r, t.exports.TinyEmitter = r
    }, function(t, e, r) {
        "use strict";
        var i = r(15),
            n = r(16),
            s = r(17).Lethargy,
            o = r(18),
            a = (r(19), r(20)),
            l = "virtualscroll";
        t.exports = _;
        var u = 37,
            h = 38,
            c = 39,
            f = 40,
            p = 32;

        function _(t) {
            a(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = i({
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: !1,
                unpreventTouchClass: "vs-touchmove-allowed",
                limitInertia: !1,
                useKeyboard: !0
            }, t), this.options.limitInertia && (this._lethargy = new s), this._emitter = new n, this._event = {
                y: 0,
                x: 0,
                deltaX: 0,
                deltaY: 0
            }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
                passive: this.options.passive
            })
        }
        _.prototype._notify = function(t) {
            var e = this._event;
            e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(l, {
                x: e.x,
                y: e.y,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                originalEvent: t
            })
        }, _.prototype._onWheel = function(t) {
            var e = this.options;
            if (!this._lethargy || !1 !== this._lethargy.check(t)) {
                var r = this._event;
                r.deltaX = t.wheelDeltaX || -1 * t.deltaX, r.deltaY = t.wheelDeltaY || -1 * t.deltaY, o.isFirefox && 1 == t.deltaMode && (r.deltaX *= e.firefoxMultiplier, r.deltaY *= e.firefoxMultiplier), r.deltaX *= e.mouseMultiplier, r.deltaY *= e.mouseMultiplier, this._notify(t)
            }
        }, _.prototype._onMouseWheel = function(t) {
            if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
                var e = this._event;
                e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
            }
        }, _.prototype._onTouchStart = function(t) {
            var e = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStartX = e.pageX, this.touchStartY = e.pageY
        }, _.prototype._onTouchMove = function(t) {
            var e = this.options;
            e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
            var r = this._event,
                i = t.targetTouches ? t.targetTouches[0] : t;
            r.deltaX = (i.pageX - this.touchStartX) * e.touchMultiplier, r.deltaY = (i.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = i.pageX, this.touchStartY = i.pageY, this._notify(t)
        }, _.prototype._onKeyDown = function(t) {
            var e = this._event;
            e.deltaX = e.deltaY = 0;
            var r = window.innerHeight - 40;
            switch (t.keyCode) {
                case u:
                case h:
                    e.deltaY = this.options.keyStep;
                    break;
                case c:
                case f:
                    e.deltaY = -this.options.keyStep;
                    break;
                case p && t.shiftKey:
                    e.deltaY = r;
                    break;
                case p:
                    e.deltaY = -r;
                    break;
                default:
                    return
            }
            this._notify(t)
        }, _.prototype._bind = function() {
            o.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), o.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), o.hasTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), o.hasPointer && o.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), o.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
        }, _.prototype._unbind = function() {
            o.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), o.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), o.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), o.hasPointer && o.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), o.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
        }, _.prototype.on = function(t, e) {
            this._emitter.on(l, t, e);
            var r = this._emitter.e;
            r && r[l] && 1 === r[l].length && this._bind()
        }, _.prototype.off = function(t, e) {
            this._emitter.off(l, t, e);
            var r = this._emitter.e;
            (!r[l] || r[l].length <= 0) && this._unbind()
        }, _.prototype.reset = function() {
            var t = this._event;
            t.x = 0, t.y = 0
        }, _.prototype.destroy = function() {
            this._emitter.off(), this._unbind()
        }
    }, function(t, e, r) {
        (function(e) {
            var r = "Expected a function",
                i = NaN,
                n = "[object Symbol]",
                s = /^\s+|\s+$/g,
                o = /^[-+]0x[0-9a-f]+$/i,
                a = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                u = parseInt,
                h = "object" == typeof e && e && e.Object === Object && e,
                c = "object" == typeof self && self && self.Object === Object && self,
                f = h || c || Function("return this")(),
                p = Object.prototype.toString,
                _ = Math.max,
                d = Math.min,
                m = function() {
                    return f.Date.now()
                };

            function v(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            function y(t) {
                if ("number" == typeof t) return t;
                if (function(t) {
                        return "symbol" == typeof t || function(t) {
                            return !!t && "object" == typeof t
                        }(t) && p.call(t) == n
                    }(t)) return i;
                if (v(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = v(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(s, "");
                var r = a.test(t);
                return r || l.test(t) ? u(t.slice(2), r ? 2 : 8) : o.test(t) ? i : +t
            }
            t.exports = function(t, e, i) {
                var n, s, o, a, l, u, h = 0,
                    c = !1,
                    f = !1,
                    p = !0;
                if ("function" != typeof t) throw new TypeError(r);

                function g(e) {
                    var r = n,
                        i = s;
                    return n = s = void 0, h = e, a = t.apply(i, r)
                }

                function b(t) {
                    var r = t - u;
                    return void 0 === u || r >= e || r < 0 || f && t - h >= o
                }

                function T() {
                    var t = m();
                    if (b(t)) return x(t);
                    l = setTimeout(T, function(t) {
                        var r = e - (t - u);
                        return f ? d(r, o - (t - h)) : r
                    }(t))
                }

                function x(t) {
                    return l = void 0, p && n ? g(t) : (n = s = void 0, a)
                }

                function w() {
                    var t = m(),
                        r = b(t);
                    if (n = arguments, s = this, u = t, r) {
                        if (void 0 === l) return function(t) {
                            return h = t, l = setTimeout(T, e), c ? g(t) : a
                        }(u);
                        if (f) return l = setTimeout(T, e), g(u)
                    }
                    return void 0 === l && (l = setTimeout(T, e)), a
                }
                return e = y(e) || 0, v(i) && (c = !!i.leading, o = (f = "maxWait" in i) ? _(y(i.maxWait) || 0, e) : o, p = "trailing" in i ? !!i.trailing : p), w.cancel = function() {
                    void 0 !== l && clearTimeout(l), h = 0, n = u = s = l = void 0
                }, w.flush = function() {
                    return void 0 === l ? a : x(m())
                }, w
            }
        }).call(this, r(6))
    }, , , function(t, e, r) {
        "use strict";
        /*!
         * dashify <https://github.com/jonschlinkert/dashify>
         *
         * Copyright (c) 2015 Jon Schlinkert.
         * Licensed under the MIT license.
         */
        t.exports = function(t) {
            if ("string" != typeof t) throw new TypeError("expected a string");
            return (t = (t = (t = t.replace(/([a-z])([A-Z])/g, "$1-$2")).replace(/[ \t\W]/g, "-")).replace(/^-+|-+$/g, "")).toLowerCase()
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return e.l
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function() {
                        return e.i
                    }
                }), Object.defineProperty(e, "exports", {
                    enumerable: !0
                }), e.webpackPolyfill = 1
            }
            return e
        }
    }, function(t, e, r) {
        "use strict";
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */
        var i = Object.getOwnPropertySymbols,
            n = Object.prototype.hasOwnProperty,
            s = Object.prototype.propertyIsEnumerable;
        t.exports = function() {
            try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
                if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                        return e[t]
                    }).join("")) return !1;
                var i = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                    i[t] = t
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
            } catch (t) {
                return !1
            }
        }() ? Object.assign : function(t, e) {
            for (var r, o, a = function(t) {
                    if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(t)
                }(t), l = 1; l < arguments.length; l++) {
                for (var u in r = Object(arguments[l])) n.call(r, u) && (a[u] = r[u]);
                if (i) {
                    o = i(r);
                    for (var h = 0; h < o.length; h++) s.call(r, o[h]) && (a[o[h]] = r[o[h]])
                }
            }
            return a
        }
    }, function(t, e) {
        function r() {}
        r.prototype = {
            on: function(t, e, r) {
                var i = this.e || (this.e = {});
                return (i[t] || (i[t] = [])).push({
                    fn: e,
                    ctx: r
                }), this
            },
            once: function(t, e, r) {
                var i = this;

                function n() {
                    i.off(t, n), e.apply(r, arguments)
                }
                return n._ = e, this.on(t, n, r)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, n = r.length; i < n; i++) r[i].fn.apply(r[i].ctx, e);
                return this
            },
            off: function(t, e) {
                var r = this.e || (this.e = {}),
                    i = r[t],
                    n = [];
                if (i && e)
                    for (var s = 0, o = i.length; s < o; s++) i[s].fn !== e && i[s].fn._ !== e && n.push(i[s]);
                return n.length ? r[t] = n : delete r[t], this
            }
        }, t.exports = r
    }, function(t, e, r) {
        (function() {
            (null !== e ? e : this).Lethargy = function() {
                function t(t, e, r, i) {
                    this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != r ? 1 + Math.abs(r) : 1.1, this.delay = null != i ? i : 150, this.lastUpDeltas = function() {
                        var t, e, r;
                        for (r = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) r.push(null);
                        return r
                    }.call(this), this.lastDownDeltas = function() {
                        var t, e, r;
                        for (r = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) r.push(null);
                        return r
                    }.call(this), this.deltasTimestamp = function() {
                        var t, e, r;
                        for (r = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) r.push(null);
                        return r
                    }.call(this)
                }
                return t.prototype.check = function(t) {
                    var e;
                    return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
                }, t.prototype.isInertia = function(t) {
                    var e, r, i, n, s, o, a;
                    return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (i = e.slice(0, this.stability), r = e.slice(this.stability, 2 * this.stability), a = i.reduce(function(t, e) {
                        return t + e
                    }), s = r.reduce(function(t, e) {
                        return t + e
                    }), o = a / i.length, n = s / r.length, Math.abs(o) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t)
                }, t.prototype.showLastUpDeltas = function() {
                    return this.lastUpDeltas
                }, t.prototype.showLastDownDeltas = function() {
                    return this.lastDownDeltas
                }, t
            }()
        }).call(this)
    }, function(t, e, r) {
        "use strict";
        t.exports = {
            hasWheelEvent: "onwheel" in document,
            hasMouseWheelEvent: "onmousewheel" in document,
            hasTouch: "ontouchstart" in document,
            hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
            hasPointer: !!window.navigator.msPointerEnabled,
            hasKeyDown: "onkeydown" in document,
            isFirefox: navigator.userAgent.indexOf("Firefox") > -1
        }
    }, function(t, e, r) {
        "use strict";
        t.exports = function(t) {
            return JSON.parse(JSON.stringify(t))
        }
    }, function(t, e, r) {
        "use strict";
        var i = Object.prototype.toString,
            n = Object.prototype.hasOwnProperty;

        function s(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        t.exports = function(t) {
            if (!t) return console.warn("bindAll requires at least one argument.");
            var e = Array.prototype.slice.call(arguments, 1);
            if (0 === e.length)
                for (var r in t) n.call(t, r) && "function" == typeof t[r] && "[object Function]" == i.call(t[r]) && e.push(r);
            for (var o = 0; o < e.length; o++) {
                var a = e[o];
                t[a] = s(t[a], t)
            }
        }
    }, function(t, e, r) {
        /*!
         * PEP v0.4.3 | https://github.com/jquery/PEP
         * Copyright jQuery Foundation and other contributors | http://jquery.org/license
         */
        t.exports = function() {
            "use strict";
            var t = ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget", "pageX", "pageY"],
                e = [!1, !1, null, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null, 0, 0];

            function r(r, i) {
                i = i || Object.create(null);
                var n = document.createEvent("Event");
                n.initEvent(r, i.bubbles || !1, i.cancelable || !1);
                for (var s, o = 2; o < t.length; o++) s = t[o], n[s] = i[s] || e[o];
                n.buttons = i.buttons || 0;
                var a = 0;
                return a = i.pressure && n.buttons ? i.pressure : n.buttons ? .5 : 0, n.x = n.clientX, n.y = n.clientY, n.pointerId = i.pointerId || 0, n.width = i.width || 0, n.height = i.height || 0, n.pressure = a, n.tiltX = i.tiltX || 0, n.tiltY = i.tiltY || 0, n.twist = i.twist || 0, n.tangentialPressure = i.tangentialPressure || 0, n.pointerType = i.pointerType || "", n.hwTimestamp = i.hwTimestamp || 0, n.isPrimary = i.isPrimary || !1, n
            }
            var i = window.Map && window.Map.prototype.forEach ? Map : n;

            function n() {
                this.array = [], this.size = 0
            }
            n.prototype = {
                set: function(t, e) {
                    if (void 0 === e) return this.delete(t);
                    this.has(t) || this.size++, this.array[t] = e
                },
                has: function(t) {
                    return void 0 !== this.array[t]
                },
                delete: function(t) {
                    this.has(t) && (delete this.array[t], this.size--)
                },
                get: function(t) {
                    return this.array[t]
                },
                clear: function() {
                    this.array.length = 0, this.size = 0
                },
                forEach: function(t, e) {
                    return this.array.forEach(function(r, i) {
                        t.call(e, r, i, this)
                    }, this)
                }
            };
            var s = ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget", "buttons", "pointerId", "width", "height", "pressure", "tiltX", "tiltY", "pointerType", "hwTimestamp", "isPrimary", "type", "target", "currentTarget", "which", "pageX", "pageY", "timeStamp"],
                o = [!1, !1, null, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null, 0, 0, 0, 0, 0, 0, 0, "", 0, !1, "", null, null, 0, 0, 0, 0],
                a = {
                    pointerover: 1,
                    pointerout: 1,
                    pointerenter: 1,
                    pointerleave: 1
                },
                l = "undefined" != typeof SVGElementInstance,
                u = {
                    pointermap: new i,
                    eventMap: Object.create(null),
                    captureInfo: Object.create(null),
                    eventSources: Object.create(null),
                    eventSourceList: [],
                    registerSource: function(t, e) {
                        var r = e,
                            i = r.events;
                        i && (i.forEach(function(t) {
                            r[t] && (this.eventMap[t] = r[t].bind(r))
                        }, this), this.eventSources[t] = r, this.eventSourceList.push(r))
                    },
                    register: function(t) {
                        for (var e, r = this.eventSourceList.length, i = 0; i < r && (e = this.eventSourceList[i]); i++) e.register.call(e, t)
                    },
                    unregister: function(t) {
                        for (var e, r = this.eventSourceList.length, i = 0; i < r && (e = this.eventSourceList[i]); i++) e.unregister.call(e, t)
                    },
                    contains: function(t, e) {
                        try {
                            return t.contains(e)
                        } catch (t) {
                            return !1
                        }
                    },
                    down: function(t) {
                        t.bubbles = !0, this.fireEvent("pointerdown", t)
                    },
                    move: function(t) {
                        t.bubbles = !0, this.fireEvent("pointermove", t)
                    },
                    up: function(t) {
                        t.bubbles = !0, this.fireEvent("pointerup", t)
                    },
                    enter: function(t) {
                        t.bubbles = !1, this.fireEvent("pointerenter", t)
                    },
                    leave: function(t) {
                        t.bubbles = !1, this.fireEvent("pointerleave", t)
                    },
                    over: function(t) {
                        t.bubbles = !0, this.fireEvent("pointerover", t)
                    },
                    out: function(t) {
                        t.bubbles = !0, this.fireEvent("pointerout", t)
                    },
                    cancel: function(t) {
                        t.bubbles = !0, this.fireEvent("pointercancel", t)
                    },
                    leaveOut: function(t) {
                        this.out(t), this.propagate(t, this.leave, !1)
                    },
                    enterOver: function(t) {
                        this.over(t), this.propagate(t, this.enter, !0)
                    },
                    eventHandler: function(t) {
                        if (!t._handledByPE) {
                            var e = t.type,
                                r = this.eventMap && this.eventMap[e];
                            r && r(t), t._handledByPE = !0
                        }
                    },
                    listen: function(t, e) {
                        e.forEach(function(e) {
                            this.addEvent(t, e)
                        }, this)
                    },
                    unlisten: function(t, e) {
                        e.forEach(function(e) {
                            this.removeEvent(t, e)
                        }, this)
                    },
                    addEvent: function(t, e) {
                        t.addEventListener(e, this.boundHandler)
                    },
                    removeEvent: function(t, e) {
                        t.removeEventListener(e, this.boundHandler)
                    },
                    makeEvent: function(t, e) {
                        this.captureInfo[e.pointerId] && (e.relatedTarget = null);
                        var i = new r(t, e);
                        return e.preventDefault && (i.preventDefault = e.preventDefault), i._target = i._target || e.target, i
                    },
                    fireEvent: function(t, e) {
                        var r = this.makeEvent(t, e);
                        return this.dispatchEvent(r)
                    },
                    cloneEvent: function(t) {
                        for (var e, r = Object.create(null), i = 0; i < s.length; i++) r[e = s[i]] = t[e] || o[i], !l || "target" !== e && "relatedTarget" !== e || r[e] instanceof SVGElementInstance && (r[e] = r[e].correspondingUseElement);
                        return t.preventDefault && (r.preventDefault = function() {
                            t.preventDefault()
                        }), r
                    },
                    getTarget: function(t) {
                        var e = this.captureInfo[t.pointerId];
                        return e ? t._target !== e && t.type in a ? void 0 : e : t._target
                    },
                    propagate: function(t, e, r) {
                        for (var i = t.target, n = []; i !== document && !i.contains(t.relatedTarget);)
                            if (n.push(i), !(i = i.parentNode)) return;
                        r && n.reverse(), n.forEach(function(r) {
                            t.target = r, e.call(this, t)
                        }, this)
                    },
                    setCapture: function(t, e, i) {
                        this.captureInfo[t] && this.releaseCapture(t, i), this.captureInfo[t] = e, this.implicitRelease = this.releaseCapture.bind(this, t, i), document.addEventListener("pointerup", this.implicitRelease), document.addEventListener("pointercancel", this.implicitRelease);
                        var n = new r("gotpointercapture");
                        n.pointerId = t, n._target = e, i || this.asyncDispatchEvent(n)
                    },
                    releaseCapture: function(t, e) {
                        var i = this.captureInfo[t];
                        if (i) {
                            this.captureInfo[t] = void 0, document.removeEventListener("pointerup", this.implicitRelease), document.removeEventListener("pointercancel", this.implicitRelease);
                            var n = new r("lostpointercapture");
                            n.pointerId = t, n._target = i, e || this.asyncDispatchEvent(n)
                        }
                    },
                    dispatchEvent: function(t) {
                        var e = this.getTarget(t);
                        if (e) return e.dispatchEvent(t)
                    },
                    asyncDispatchEvent: function(t) {
                        requestAnimationFrame(this.dispatchEvent.bind(this, t))
                    }
                };
            u.boundHandler = u.eventHandler.bind(u);
            var h = {
                    shadow: function(t) {
                        if (t) return t.shadowRoot || t.webkitShadowRoot
                    },
                    canTarget: function(t) {
                        return t && Boolean(t.elementFromPoint)
                    },
                    targetingShadow: function(t) {
                        var e = this.shadow(t);
                        if (this.canTarget(e)) return e
                    },
                    olderShadow: function(t) {
                        var e = t.olderShadowRoot;
                        if (!e) {
                            var r = t.querySelector("shadow");
                            r && (e = r.olderShadowRoot)
                        }
                        return e
                    },
                    allShadows: function(t) {
                        for (var e = [], r = this.shadow(t); r;) e.push(r), r = this.olderShadow(r);
                        return e
                    },
                    searchRoot: function(t, e, r) {
                        if (t) {
                            var i, n, s = t.elementFromPoint(e, r);
                            for (n = this.targetingShadow(s); n;) {
                                if (i = n.elementFromPoint(e, r)) {
                                    var o = this.targetingShadow(i);
                                    return this.searchRoot(o, e, r) || i
                                }
                                n = this.olderShadow(n)
                            }
                            return s
                        }
                    },
                    owner: function(t) {
                        for (var e = t; e.parentNode;) e = e.parentNode;
                        return e.nodeType !== Node.DOCUMENT_NODE && e.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && (e = document), e
                    },
                    findTarget: function(t) {
                        var e = t.clientX,
                            r = t.clientY,
                            i = this.owner(t.target);
                        return i.elementFromPoint(e, r) || (i = document), this.searchRoot(i, e, r)
                    }
                },
                c = Array.prototype.forEach.call.bind(Array.prototype.forEach),
                f = Array.prototype.map.call.bind(Array.prototype.map),
                p = Array.prototype.slice.call.bind(Array.prototype.slice),
                _ = Array.prototype.filter.call.bind(Array.prototype.filter),
                d = window.MutationObserver || window.WebKitMutationObserver,
                m = {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    attributeOldValue: !0,
                    attributeFilter: ["touch-action"]
                };

            function v(t, e, r, i) {
                this.addCallback = t.bind(i), this.removeCallback = e.bind(i), this.changedCallback = r.bind(i), d && (this.observer = new d(this.mutationWatcher.bind(this)))
            }

            function y(t) {
                return "body /shadow-deep/ " + g(t)
            }

            function g(t) {
                return '[touch-action="' + t + '"]'
            }

            function b(t) {
                return "{ -ms-touch-action: " + t + "; touch-action: " + t + "; }"
            }
            v.prototype = {
                watchSubtree: function(t) {
                    this.observer && h.canTarget(t) && this.observer.observe(t, m)
                },
                enableOnSubtree: function(t) {
                    this.watchSubtree(t), t === document && "complete" !== document.readyState ? this.installOnLoad() : this.installNewSubtree(t)
                },
                installNewSubtree: function(t) {
                    c(this.findElements(t), this.addElement, this)
                },
                findElements: function(t) {
                    return t.querySelectorAll ? t.querySelectorAll("[touch-action]") : []
                },
                removeElement: function(t) {
                    this.removeCallback(t)
                },
                addElement: function(t) {
                    this.addCallback(t)
                },
                elementChanged: function(t, e) {
                    this.changedCallback(t, e)
                },
                concatLists: function(t, e) {
                    return t.concat(p(e))
                },
                installOnLoad: function() {
                    document.addEventListener("readystatechange", function() {
                        "complete" === document.readyState && this.installNewSubtree(document)
                    }.bind(this))
                },
                isElement: function(t) {
                    return t.nodeType === Node.ELEMENT_NODE
                },
                flattenMutationTree: function(t) {
                    var e = f(t, this.findElements, this);
                    return e.push(_(t, this.isElement)), e.reduce(this.concatLists, [])
                },
                mutationWatcher: function(t) {
                    t.forEach(this.mutationHandler, this)
                },
                mutationHandler: function(t) {
                    if ("childList" === t.type) {
                        var e = this.flattenMutationTree(t.addedNodes);
                        e.forEach(this.addElement, this);
                        var r = this.flattenMutationTree(t.removedNodes);
                        r.forEach(this.removeElement, this)
                    } else "attributes" === t.type && this.elementChanged(t.target, t.oldValue)
                }
            };
            var T = ["none", "auto", "pan-x", "pan-y", {
                    rule: "pan-x pan-y",
                    selectors: ["pan-x pan-y", "pan-y pan-x"]
                }],
                x = "",
                w = window.PointerEvent || window.MSPointerEvent,
                E = !window.ShadowDOMPolyfill && document.head.createShadowRoot,
                P = u.pointermap,
                A = [1, 4, 2, 8, 16],
                R = !1;
            try {
                R = 1 === new MouseEvent("test", {
                    buttons: 1
                }).buttons
            } catch (t) {}
            var O, S = {
                    POINTER_ID: 1,
                    POINTER_TYPE: "mouse",
                    events: ["mousedown", "mousemove", "mouseup", "mouseover", "mouseout"],
                    register: function(t) {
                        u.listen(t, this.events)
                    },
                    unregister: function(t) {
                        u.unlisten(t, this.events)
                    },
                    lastTouches: [],
                    isEventSimulatedFromTouch: function(t) {
                        for (var e, r = this.lastTouches, i = t.clientX, n = t.clientY, s = 0, o = r.length; s < o && (e = r[s]); s++) {
                            var a = Math.abs(i - e.x),
                                l = Math.abs(n - e.y);
                            if (a <= 25 && l <= 25) return !0
                        }
                    },
                    prepareEvent: function(t) {
                        var e = u.cloneEvent(t),
                            r = e.preventDefault;
                        return e.preventDefault = function() {
                            t.preventDefault(), r()
                        }, e.pointerId = this.POINTER_ID, e.isPrimary = !0, e.pointerType = this.POINTER_TYPE, e
                    },
                    prepareButtonsForMove: function(t, e) {
                        var r = P.get(this.POINTER_ID);
                        0 !== e.which && r ? t.buttons = r.buttons : t.buttons = 0, e.buttons = t.buttons
                    },
                    mousedown: function(t) {
                        if (!this.isEventSimulatedFromTouch(t)) {
                            var e = P.get(this.POINTER_ID),
                                r = this.prepareEvent(t);
                            R || (r.buttons = A[r.button], e && (r.buttons |= e.buttons), t.buttons = r.buttons), P.set(this.POINTER_ID, t), e && 0 !== e.buttons ? u.move(r) : u.down(r)
                        }
                    },
                    mousemove: function(t) {
                        if (!this.isEventSimulatedFromTouch(t)) {
                            var e = this.prepareEvent(t);
                            R || this.prepareButtonsForMove(e, t), e.button = -1, P.set(this.POINTER_ID, t), u.move(e)
                        }
                    },
                    mouseup: function(t) {
                        if (!this.isEventSimulatedFromTouch(t)) {
                            var e = P.get(this.POINTER_ID),
                                r = this.prepareEvent(t);
                            if (!R) {
                                var i = A[r.button];
                                r.buttons = e ? e.buttons & ~i : 0, t.buttons = r.buttons
                            }
                            P.set(this.POINTER_ID, t), r.buttons &= ~A[r.button], 0 === r.buttons ? u.up(r) : u.move(r)
                        }
                    },
                    mouseover: function(t) {
                        if (!this.isEventSimulatedFromTouch(t)) {
                            var e = this.prepareEvent(t);
                            R || this.prepareButtonsForMove(e, t), e.button = -1, P.set(this.POINTER_ID, t), u.enterOver(e)
                        }
                    },
                    mouseout: function(t) {
                        if (!this.isEventSimulatedFromTouch(t)) {
                            var e = this.prepareEvent(t);
                            R || this.prepareButtonsForMove(e, t), e.button = -1, u.leaveOut(e)
                        }
                    },
                    cancel: function(t) {
                        var e = this.prepareEvent(t);
                        u.cancel(e), this.deactivateMouse()
                    },
                    deactivateMouse: function() {
                        P.delete(this.POINTER_ID)
                    }
                },
                F = u.captureInfo,
                M = h.findTarget.bind(h),
                C = h.allShadows.bind(h),
                I = u.pointermap,
                k = {
                    events: ["touchstart", "touchmove", "touchend", "touchcancel"],
                    register: function(t) {
                        O.enableOnSubtree(t)
                    },
                    unregister: function() {},
                    elementAdded: function(t) {
                        var e = t.getAttribute("touch-action"),
                            r = this.touchActionToScrollType(e);
                        r && (t._scrollType = r, u.listen(t, this.events), C(t).forEach(function(t) {
                            t._scrollType = r, u.listen(t, this.events)
                        }, this))
                    },
                    elementRemoved: function(t) {
                        t._scrollType = void 0, u.unlisten(t, this.events), C(t).forEach(function(t) {
                            t._scrollType = void 0, u.unlisten(t, this.events)
                        }, this)
                    },
                    elementChanged: function(t, e) {
                        var r = t.getAttribute("touch-action"),
                            i = this.touchActionToScrollType(r),
                            n = this.touchActionToScrollType(e);
                        i && n ? (t._scrollType = i, C(t).forEach(function(t) {
                            t._scrollType = i
                        }, this)) : n ? this.elementRemoved(t) : i && this.elementAdded(t)
                    },
                    scrollTypes: {
                        EMITTER: "none",
                        XSCROLLER: "pan-x",
                        YSCROLLER: "pan-y",
                        SCROLLER: /^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/
                    },
                    touchActionToScrollType: function(t) {
                        var e = t,
                            r = this.scrollTypes;
                        return "none" === e ? "none" : e === r.XSCROLLER ? "X" : e === r.YSCROLLER ? "Y" : r.SCROLLER.exec(e) ? "XY" : void 0
                    },
                    POINTER_TYPE: "touch",
                    firstTouch: null,
                    isPrimaryTouch: function(t) {
                        return this.firstTouch === t.identifier
                    },
                    setPrimaryTouch: function(t) {
                        (0 === I.size || 1 === I.size && I.has(1)) && (this.firstTouch = t.identifier, this.firstXY = {
                            X: t.clientX,
                            Y: t.clientY
                        }, this.scrolling = !1, this.cancelResetClickCount())
                    },
                    removePrimaryPointer: function(t) {
                        t.isPrimary && (this.firstTouch = null, this.firstXY = null, this.resetClickCount())
                    },
                    clickCount: 0,
                    resetId: null,
                    resetClickCount: function() {
                        var t = function() {
                            this.clickCount = 0, this.resetId = null
                        }.bind(this);
                        this.resetId = setTimeout(t, 200)
                    },
                    cancelResetClickCount: function() {
                        this.resetId && clearTimeout(this.resetId)
                    },
                    typeToButtons: function(t) {
                        var e = 0;
                        return "touchstart" !== t && "touchmove" !== t || (e = 1), e
                    },
                    touchToPointer: function(t) {
                        var e = this.currentTouchEvent,
                            r = u.cloneEvent(t),
                            i = r.pointerId = t.identifier + 2;
                        r.target = F[i] || M(r), r.bubbles = !0, r.cancelable = !0, r.detail = this.clickCount, r.button = 0, r.buttons = this.typeToButtons(e.type), r.width = 2 * (t.radiusX || t.webkitRadiusX || 0), r.height = 2 * (t.radiusY || t.webkitRadiusY || 0), r.pressure = t.force || t.webkitForce || .5, r.isPrimary = this.isPrimaryTouch(t), r.pointerType = this.POINTER_TYPE, r.altKey = e.altKey, r.ctrlKey = e.ctrlKey, r.metaKey = e.metaKey, r.shiftKey = e.shiftKey;
                        var n = this;
                        return r.preventDefault = function() {
                            n.scrolling = !1, n.firstXY = null, e.preventDefault()
                        }, r
                    },
                    processTouches: function(t, e) {
                        var r = t.changedTouches;
                        this.currentTouchEvent = t;
                        for (var i, n = 0; n < r.length; n++) i = r[n], e.call(this, this.touchToPointer(i))
                    },
                    shouldScroll: function(t) {
                        if (this.firstXY) {
                            var e, r = t.currentTarget._scrollType;
                            if ("none" === r) e = !1;
                            else if ("XY" === r) e = !0;
                            else {
                                var i = t.changedTouches[0],
                                    n = r,
                                    s = "Y" === r ? "X" : "Y",
                                    o = Math.abs(i["client" + n] - this.firstXY[n]),
                                    a = Math.abs(i["client" + s] - this.firstXY[s]);
                                e = o >= a
                            }
                            return this.firstXY = null, e
                        }
                    },
                    findTouch: function(t, e) {
                        for (var r, i = 0, n = t.length; i < n && (r = t[i]); i++)
                            if (r.identifier === e) return !0
                    },
                    vacuumTouches: function(t) {
                        var e = t.touches;
                        if (I.size >= e.length) {
                            var r = [];
                            I.forEach(function(t, i) {
                                if (1 !== i && !this.findTouch(e, i - 2)) {
                                    var n = t.out;
                                    r.push(n)
                                }
                            }, this), r.forEach(this.cancelOut, this)
                        }
                    },
                    touchstart: function(t) {
                        this.vacuumTouches(t), this.setPrimaryTouch(t.changedTouches[0]), this.dedupSynthMouse(t), this.scrolling || (this.clickCount++, this.processTouches(t, this.overDown))
                    },
                    overDown: function(t) {
                        I.set(t.pointerId, {
                            target: t.target,
                            out: t,
                            outTarget: t.target
                        }), u.enterOver(t), u.down(t)
                    },
                    touchmove: function(t) {
                        this.scrolling || (this.shouldScroll(t) ? (this.scrolling = !0, this.touchcancel(t)) : (t.preventDefault(), this.processTouches(t, this.moveOverOut)))
                    },
                    moveOverOut: function(t) {
                        var e = t,
                            r = I.get(e.pointerId);
                        if (r) {
                            var i = r.out,
                                n = r.outTarget;
                            u.move(e), i && n !== e.target && (i.relatedTarget = e.target, e.relatedTarget = n, i.target = n, e.target ? (u.leaveOut(i), u.enterOver(e)) : (e.target = n, e.relatedTarget = null, this.cancelOut(e))), r.out = e, r.outTarget = e.target
                        }
                    },
                    touchend: function(t) {
                        this.dedupSynthMouse(t), this.processTouches(t, this.upOut)
                    },
                    upOut: function(t) {
                        this.scrolling || (u.up(t), u.leaveOut(t)), this.cleanUpPointer(t)
                    },
                    touchcancel: function(t) {
                        this.processTouches(t, this.cancelOut)
                    },
                    cancelOut: function(t) {
                        u.cancel(t), u.leaveOut(t), this.cleanUpPointer(t)
                    },
                    cleanUpPointer: function(t) {
                        I.delete(t.pointerId), this.removePrimaryPointer(t)
                    },
                    dedupSynthMouse: function(t) {
                        var e = S.lastTouches,
                            r = t.changedTouches[0];
                        if (this.isPrimaryTouch(r)) {
                            var i = {
                                x: r.clientX,
                                y: r.clientY
                            };
                            e.push(i);
                            var n = function(t, e) {
                                var r = t.indexOf(e);
                                r > -1 && t.splice(r, 1)
                            }.bind(null, e, i);
                            setTimeout(n, 2500)
                        }
                    }
                };
            O = new v(k.elementAdded, k.elementRemoved, k.elementChanged, k);
            var D, B, U, L = u.pointermap,
                N = window.MSPointerEvent && "number" == typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,
                j = {
                    events: ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerOut", "MSPointerOver", "MSPointerCancel", "MSGotPointerCapture", "MSLostPointerCapture"],
                    register: function(t) {
                        u.listen(t, this.events)
                    },
                    unregister: function(t) {
                        u.unlisten(t, this.events)
                    },
                    POINTER_TYPES: ["", "unavailable", "touch", "pen", "mouse"],
                    prepareEvent: function(t) {
                        var e = t;
                        return N && ((e = u.cloneEvent(t)).pointerType = this.POINTER_TYPES[t.pointerType]), e
                    },
                    cleanup: function(t) {
                        L.delete(t)
                    },
                    MSPointerDown: function(t) {
                        L.set(t.pointerId, t);
                        var e = this.prepareEvent(t);
                        u.down(e)
                    },
                    MSPointerMove: function(t) {
                        var e = this.prepareEvent(t);
                        u.move(e)
                    },
                    MSPointerUp: function(t) {
                        var e = this.prepareEvent(t);
                        u.up(e), this.cleanup(t.pointerId)
                    },
                    MSPointerOut: function(t) {
                        var e = this.prepareEvent(t);
                        u.leaveOut(e)
                    },
                    MSPointerOver: function(t) {
                        var e = this.prepareEvent(t);
                        u.enterOver(e)
                    },
                    MSPointerCancel: function(t) {
                        var e = this.prepareEvent(t);
                        u.cancel(e), this.cleanup(t.pointerId)
                    },
                    MSLostPointerCapture: function(t) {
                        var e = u.makeEvent("lostpointercapture", t);
                        u.dispatchEvent(e)
                    },
                    MSGotPointerCapture: function(t) {
                        var e = u.makeEvent("gotpointercapture", t);
                        u.dispatchEvent(e)
                    }
                };

            function X(t) {
                if (!u.pointermap.has(t)) {
                    var e = new Error("InvalidPointerId");
                    throw e.name = "InvalidPointerId", e
                }
            }

            function z(t) {
                for (var e = t.parentNode; e && e !== t.ownerDocument;) e = e.parentNode;
                if (!e) {
                    var r = new Error("InvalidStateError");
                    throw r.name = "InvalidStateError", r
                }
            }

            function Y(t) {
                var e = u.pointermap.get(t);
                return 0 !== e.buttons
            }
            return window.navigator.msPointerEnabled ? (D = function(t) {
                    X(t), z(this), Y(t) && (u.setCapture(t, this, !0), this.msSetPointerCapture(t))
                }, B = function(t) {
                    X(t), u.releaseCapture(t, !0), this.msReleasePointerCapture(t)
                }) : (D = function(t) {
                    X(t), z(this), Y(t) && u.setCapture(t, this)
                }, B = function(t) {
                    X(t), u.releaseCapture(t)
                }), U = function(t) {
                    return !!u.captureInfo[t]
                },
                function() {
                    if (w) {
                        T.forEach(function(t) {
                            String(t) === t ? (x += g(t) + b(t) + "\n", E && (x += y(t) + b(t) + "\n")) : (x += t.selectors.map(g) + b(t.rule) + "\n", E && (x += t.selectors.map(y) + b(t.rule) + "\n"))
                        });
                        var t = document.createElement("style");
                        t.textContent = x, document.head.appendChild(t)
                    }
                }(),
                function() {
                    if (!window.PointerEvent) {
                        if (window.PointerEvent = r, window.navigator.msPointerEnabled) {
                            var t = window.navigator.msMaxTouchPoints;
                            Object.defineProperty(window.navigator, "maxTouchPoints", {
                                value: t,
                                enumerable: !0
                            }), u.registerSource("ms", j)
                        } else Object.defineProperty(window.navigator, "maxTouchPoints", {
                            value: 0,
                            enumerable: !0
                        }), u.registerSource("mouse", S), void 0 !== window.ontouchstart && u.registerSource("touch", k);
                        u.register(document)
                    }
                }(), window.Element && !Element.prototype.setPointerCapture && Object.defineProperties(Element.prototype, {
                    setPointerCapture: {
                        value: D
                    },
                    releasePointerCapture: {
                        value: B
                    },
                    hasPointerCapture: {
                        value: U
                    }
                }), {
                    dispatcher: u,
                    Installer: v,
                    PointerEvent: r,
                    PointerMap: i,
                    targetFinding: h
                }
        }()
    }, , , function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return h
        });
        var i = r(0),
            n = (i.h.document || {}).documentElement,
            s = i.h,
            o = function(t, e) {
                var r = "x" === e ? "Width" : "Height",
                    i = "scroll" + r,
                    o = "client" + r,
                    a = document.body;
                return t === s || t === n || t === a ? Math.max(n[i], a[i]) - (s["inner" + r] || n[o] || a[o]) : t[i] - t["offset" + r]
            },
            a = function(t, e) {
                var r = "scroll" + ("x" === e ? "Left" : "Top");
                return t === s && (null != t.pageXOffset ? r = "page" + e.toUpperCase() + "Offset" : t = null != n[r] ? n : document.body),
                    function() {
                        return t[r]
                    }
            },
            l = function(t, e) {
                var r, i = (r = t, "string" == typeof r && (r = TweenLite.selector(r)), r.length && r !== s && r[0] && r[0].style && !r.nodeType && (r = r[0]), r === s || r.nodeType && r.style ? r : null).getBoundingClientRect(),
                    o = document.body,
                    l = !e || e === s || e === o,
                    u = l ? {
                        top: n.clientTop - (window.pageYOffset || n.scrollTop || o.scrollTop || 0),
                        left: n.clientLeft - (window.pageXOffset || n.scrollLeft || o.scrollLeft || 0)
                    } : e.getBoundingClientRect(),
                    h = {
                        x: i.left - u.left,
                        y: i.top - u.top
                    };
                return !l && e && (h.x += a(e, "x")(), h.y += a(e, "y")()), h
            },
            u = function(t, e, r, i) {
                var n = typeof t;
                return isNaN(t) ? "string" === n && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + i : "max" === t ? o(e, r) : Math.min(o(e, r), l(t, e)[r]) : parseFloat(t)
            },
            h = i.h._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                global: !0,
                version: "1.9.2",
                init: function(t, e, r) {
                    return this._wdw = t === s, this._target = t, this._tween = r, "object" != typeof e ? "string" == typeof(e = {
                        y: e
                    }).y && "max" !== e.y && "=" !== e.y.charAt(1) && (e.x = e.y) : e.nodeType && (e = {
                        y: e,
                        x: e
                    }), this.vars = e, this._autoKill = !1 !== e.autoKill, this.getX = a(t, "x"), this.getY = a(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != e.x ? (this._addTween(this, "x", this.x, u(e.x, t, "x", this.x) - (e.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != e.y ? (this._addTween(this, "y", this.y, u(e.y, t, "y", this.y) - (e.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    var e = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        i = r - this.yPrev,
                        n = e - this.xPrev,
                        a = h.autoKillThreshold;
                    this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (n > a || n < -a) && e < o(this._target, "x") && (this.skipX = !0), !this.skipY && (i > a || i < -a) && r < o(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? s.scrollTo(this.skipX ? e : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                }
            }),
            c = h.prototype;
        /*!
         * VERSION: 1.9.2
         * DATE: 2019-02-07
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         **/
        h.max = o, h.getOffset = l, h.buildGetter = a, h.autoKillThreshold = 7, c._kill = function(t) {
            return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
        }
    }]
]);