(window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    [function(t, e, i) {
        "use strict";
        (function(t, s) {
            i.d(e, "e", function() {
                return r
            }), i.d(e, "g", function() {
                return a
            }), i.d(e, "f", function() {
                return n
            }), i.d(e, "c", function() {
                return l
            }), i.d(e, "a", function() {
                return h
            }), i.d(e, "b", function() {
                return _
            }), i.d(e, "d", function() {
                return u
            });
            /*!
             * VERSION: 2.1.3
             * DATE: 2019-05-17
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             *
             * @author: Jack Doyle, jack@greensock.com
             */
            var r = "undefined" != typeof window ? window : t.exports && void 0 !== s ? s : {},
                n = function(t) {
                    var e = {},
                        i = t.document,
                        s = t.GreenSockGlobals = t.GreenSockGlobals || t;
                    if (s.TweenLite) return s.TweenLite;
                    var r, n, a, o, l, h, _, u = function(t) {
                            var e, i = t.split("."),
                                r = s;
                            for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
                            return r
                        },
                        f = u("com.greensock"),
                        c = function(t) {
                            var e, i = [],
                                s = t.length;
                            for (e = 0; e !== s; i.push(t[e++]));
                            return i
                        },
                        p = function() {},
                        m = (h = Object.prototype.toString, _ = h.call([]), function(t) {
                            return null != t && (t instanceof Array || "object" == typeof t && !!t.push && h.call(t) === _)
                        }),
                        d = {},
                        g = function(t, i, r, n) {
                            this.sc = d[t] ? d[t].sc : [], d[t] = this, this.gsClass = null, this.func = r;
                            var a = [];
                            this.check = function(o) {
                                for (var l, h, _, f, c = i.length, p = c; --c > -1;)(l = d[i[c]] || new g(i[c], [])).gsClass ? (a[c] = l.gsClass, p--) : o && l.sc.push(this);
                                if (0 === p && r)
                                    for (_ = (h = ("com.greensock." + t).split(".")).pop(), f = u(h.join("."))[_] = this.gsClass = r.apply(r, a), n && (s[_] = e[_] = f), c = 0; c < this.sc.length; c++) this.sc[c].check()
                            }, this.check(!0)
                        },
                        v = t._gsDefine = function(t, e, i, s) {
                            return new g(t, e, i, s)
                        },
                        y = f._class = function(t, e, i) {
                            return e = e || function() {}, v(t, [], function() {
                                return e
                            }, i), e
                        };
                    v.globals = s;
                    var T = [0, 0, 1, 1],
                        x = y("easing.Ease", function(t, e, i, s) {
                            this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? T.concat(e) : T
                        }, !0),
                        w = x.map = {},
                        b = x.register = function(t, e, i, s) {
                            for (var r, n, a, o, l = e.split(","), h = l.length, _ = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                                for (n = l[h], r = s ? y("easing." + n, null, !0) : f.easing[n] || {}, a = _.length; --a > -1;) o = _[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                        };
                    for ((a = x.prototype)._calcEnd = !1, a.getRatio = function(t) {
                            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                            var e = this._type,
                                i = this._power,
                                s = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                            return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : t < .5 ? s / 2 : 1 - s / 2
                        }, n = (r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --n > -1;) a = r[n] + ",Power" + n, b(new x(null, null, 1, n), a, "easeOut", !0), b(new x(null, null, 2, n), a, "easeIn" + (0 === n ? ",easeNone" : "")), b(new x(null, null, 3, n), a, "easeInOut");
                    w.linear = f.easing.Linear.easeIn, w.swing = f.easing.Quad.easeInOut;
                    var P = y("events.EventDispatcher", function(t) {
                        this._listeners = {}, this._eventTarget = t || this
                    });
                    (a = P.prototype).addEventListener = function(t, e, i, s, r) {
                        r = r || 0;
                        var n, a, h = this._listeners[t],
                            _ = 0;
                        for (this !== o || l || o.wake(), null == h && (this._listeners[t] = h = []), a = h.length; --a > -1;)(n = h[a]).c === e && n.s === i ? h.splice(a, 1) : 0 === _ && n.pr < r && (_ = a + 1);
                        h.splice(_, 0, {
                            c: e,
                            s: i,
                            up: s,
                            pr: r
                        })
                    }, a.removeEventListener = function(t, e) {
                        var i, s = this._listeners[t];
                        if (s)
                            for (i = s.length; --i > -1;)
                                if (s[i].c === e) return void s.splice(i, 1)
                    }, a.dispatchEvent = function(t) {
                        var e, i, s, r = this._listeners[t];
                        if (r)
                            for ((e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)(s = r[e]) && (s.up ? s.c.call(s.s || i, {
                                type: t,
                                target: i
                            }) : s.c.call(s.s || i))
                    };
                    var k = t.requestAnimationFrame,
                        O = t.cancelAnimationFrame,
                        S = Date.now || function() {
                            return (new Date).getTime()
                        },
                        A = S();
                    for (n = (r = ["ms", "moz", "webkit", "o"]).length; --n > -1 && !k;) k = t[r[n] + "RequestAnimationFrame"], O = t[r[n] + "CancelAnimationFrame"] || t[r[n] + "CancelRequestAnimationFrame"];
                    y("Ticker", function(t, e) {
                        var s, r, n, a, h, _ = this,
                            u = S(),
                            f = !(!1 === e || !k) && "auto",
                            c = 500,
                            m = 33,
                            d = function(t) {
                                var e, i, o = S() - A;
                                o > c && (u += o - m), A += o, _.time = (A - u) / 1e3, e = _.time - h, (!s || e > 0 || !0 === t) && (_.frame++, h += e + (e >= a ? .004 : a - e), i = !0), !0 !== t && (n = r(d)), i && _.dispatchEvent("tick")
                            };
                        P.call(_), _.time = _.frame = 0, _.tick = function() {
                            d(!0)
                        }, _.lagSmoothing = function(t, e) {
                            if (!arguments.length) return c < 1e8;
                            c = t || 1e8, m = Math.min(e, c, 0)
                        }, _.sleep = function() {
                            null != n && (f && O ? O(n) : clearTimeout(n), r = p, n = null, _ === o && (l = !1))
                        }, _.wake = function(t) {
                            null !== n ? _.sleep() : t ? u += -A + (A = S()) : _.frame > 10 && (A = S() - c + 5), r = 0 === s ? p : f && k ? k : function(t) {
                                return setTimeout(t, 1e3 * (h - _.time) + 1 | 0)
                            }, _ === o && (l = !0), d(2)
                        }, _.fps = function(t) {
                            if (!arguments.length) return s;
                            a = 1 / ((s = t) || 60), h = this.time + a, _.wake()
                        }, _.useRAF = function(t) {
                            if (!arguments.length) return f;
                            _.sleep(), f = t, _.fps(s)
                        }, _.fps(t), setTimeout(function() {
                            "auto" === f && _.frame < 5 && "hidden" !== (i || {}).visibilityState && _.useRAF(!1)
                        }, 1500)
                    }), (a = f.Ticker.prototype = new f.events.EventDispatcher).constructor = f.Ticker;
                    var R = y("core.Animation", function(t, e) {
                        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !!e.immediateRender, this.data = e.data, this._reversed = !!e.reversed, Z) {
                            l || o.wake();
                            var i = this.vars.useFrames ? $ : Z;
                            i.add(this, i._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    o = R.ticker = new f.Ticker, (a = R.prototype)._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
                    var C = function() {
                        l && S() - A > 2e3 && ("hidden" !== (i || {}).visibilityState || !o.lagSmoothing()) && o.wake();
                        var t = setTimeout(C, 2e3);
                        t.unref && t.unref()
                    };
                    C(), a.play = function(t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, a.pause = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, a.resume = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!1)
                    }, a.seek = function(t, e) {
                        return this.totalTime(Number(t), !1 !== e)
                    }, a.restart = function(t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                    }, a.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, a.render = function(t, e, i) {}, a.invalidate = function() {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, a.isActive = function() {
                        var t, e = this._timeline,
                            i = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-8
                    }, a._enabled = function(t, e) {
                        return l || o.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                    }, a._kill = function(t, e) {
                        return this._enabled(!1, !1)
                    }, a.kill = function(t, e) {
                        return this._kill(t, e), this
                    }, a._uncache = function(t) {
                        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                        return this
                    }, a._swapSelfInParams = function(t) {
                        for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                        return i
                    }, a._callback = function(t) {
                        var e = this.vars,
                            i = e[t],
                            s = e[t + "Params"],
                            r = e[t + "Scope"] || e.callbackScope || this;
                        switch (s ? s.length : 0) {
                            case 0:
                                i.call(r);
                                break;
                            case 1:
                                i.call(r, s[0]);
                                break;
                            case 2:
                                i.call(r, s[0], s[1]);
                                break;
                            default:
                                i.apply(r, s)
                        }
                    }, a.eventCallback = function(t, e, i, s) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var r = this.vars;
                            if (1 === arguments.length) return r[t];
                            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }, a.delay = function(t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                    }, a.duration = function(t) {
                        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, a.totalDuration = function(t) {
                        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                    }, a.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }, a.totalTime = function(t, e, i) {
                        if (l || o.wake(), !arguments.length) return this._totalTime;
                        if (this._timeline) {
                            if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var s = this._totalDuration,
                                    r = this._timeline;
                                if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                    for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (I.length && H(), this.render(t, e, !1), I.length && H())
                        }
                        return this
                    }, a.progress = a.totalProgress = function(t, e) {
                        var i = this.duration();
                        return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                    }, a.startTime = function(t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                    }, a.endTime = function(t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }, a.timeScale = function(t) {
                        if (!arguments.length) return this._timeScale;
                        var e, i;
                        for (t = t || 1e-8, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
                        return this
                    }, a.reversed = function(t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, a.paused = function(t) {
                        if (!arguments.length) return this._paused;
                        var e, i, s = this._timeline;
                        return t != this._paused && s && (l || t || o.wake(), i = (e = s.rawTime()) - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                    };
                    var D = y("core.SimpleTimeline", function(t) {
                        R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    (a = D.prototype = new R).constructor = D, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function(t, e, i, s) {
                        var r, n;
                        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                            for (n = t._startTime; r && r._startTime > n;) r = r._prev;
                        return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                    }, a._remove = function(t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, a.render = function(t, e, i) {
                        var s, r = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
                    }, a.rawTime = function() {
                        return l || o.wake(), this._totalTime
                    };
                    var M = y("TweenLite", function(e, i, s) {
                            if (R.call(this, i, s), this.render = M.prototype.render, null == e) throw "Cannot tween a null target.";
                            this.target = e = "string" != typeof e ? e : M.selector(e) || e;
                            var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                                l = this.vars.overwrite;
                            if (this._overwrite = l = null == l ? G[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : G[l], (o || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
                                for (this._targets = a = c(e), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++)(n = a[r]) ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(c(n))) : (this._siblings[r] = J(n, this, !1), 1 === l && this._siblings[r].length > 1 && tt(n, this, null, 1, this._siblings[r])) : "string" == typeof(n = a[r--] = M.selector(n)) && a.splice(r + 1, 1) : a.splice(r--, 1);
                            else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === l && this._siblings.length > 1 && tt(e, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-8, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        E = function(e) {
                            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                        };
                    (a = M.prototype = new R).constructor = M, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, M.version = "2.1.3", M.defaultEase = a._ease = new x(null, null, 1, 1), M.defaultOverwrite = "auto", M.ticker = o, M.autoSleep = 120, M.lagSmoothing = function(t, e) {
                        o.lagSmoothing(t, e)
                    }, M.selector = t.$ || t.jQuery || function(e) {
                        var s = t.$ || t.jQuery;
                        return s ? (M.selector = s, s(e)) : (i || (i = t.document), i ? i.querySelectorAll ? i.querySelectorAll(e) : i.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e)
                    };
                    var I = [],
                        F = {},
                        z = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        L = /[\+-]=-?[\.\d]/,
                        N = function(t) {
                            for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                        },
                        j = function(t) {
                            return (1e3 * t | 0) / 1e3 + ""
                        },
                        X = function(t, e, i, s) {
                            var r, n, a, o, l, h, _, u = [],
                                f = 0,
                                c = "",
                                p = 0;
                            for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(z) || [], n = e.match(z) || [], s && (s._next = null, s.blob = 1, u._firstPT = u._applyPT = s), l = n.length, o = 0; o < l; o++) _ = n[o], c += (h = e.substr(f, e.indexOf(_, f) - f)) || !o ? h : ",", f += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), _ === r[o] || r.length <= o ? c += _ : (c && (u.push(c), c = ""), a = parseFloat(r[o]), u.push(a), u._firstPT = {
                                _next: u._firstPT,
                                t: u,
                                p: u.length - 1,
                                s: a,
                                c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                                f: 0,
                                m: p && p < 4 ? Math.round : j
                            }), f += _.length;
                            return (c += e.substr(f)) && u.push(c), u.setRatio = N, L.test(e) && (u.end = null), u
                        },
                        B = function(t, e, i, s, r, n, a, o, l) {
                            "function" == typeof s && (s = s(l || 0, t));
                            var h = typeof t[e],
                                _ = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                                u = "get" !== i ? i : _ ? a ? t[_](a) : t[_]() : t[e],
                                f = "string" == typeof s && "=" === s.charAt(1),
                                c = {
                                    t: t,
                                    p: e,
                                    s: u,
                                    f: "function" === h,
                                    pg: 0,
                                    n: r || e,
                                    m: n ? "function" == typeof n ? n : Math.round : 0,
                                    pr: 0,
                                    c: f ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - u || 0
                                };
                            if (("number" != typeof u || "number" != typeof s && !f) && (a || isNaN(u) || !f && isNaN(s) || "boolean" == typeof u || "boolean" == typeof s ? (c.fp = a, c = {
                                    t: X(u, f ? parseFloat(c.s) + c.c + (c.s + "").replace(/[0-9\-\.]/g, "") : s, o || M.defaultStringFilter, c),
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: r || e,
                                    pr: 0,
                                    m: 0
                                }) : (c.s = parseFloat(u), f || (c.c = parseFloat(s) - c.s || 0))), c.c) return (c._next = this._firstPT) && (c._next._prev = c), this._firstPT = c, c
                        },
                        U = M._internals = {
                            isArray: m,
                            isSelector: E,
                            lazyTweens: I,
                            blobDif: X
                        },
                        Y = M._plugins = {},
                        q = U.tweenLookup = {},
                        V = 0,
                        W = U.reservedProps = {
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
                        G = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            true: 1,
                            false: 0
                        },
                        $ = R._rootFramesTimeline = new D,
                        Z = R._rootTimeline = new D,
                        Q = 30,
                        H = U.lazyRender = function() {
                            var t, e, i = I.length;
                            for (F = {}, t = 0; t < i; t++)(e = I[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                            I.length = 0
                        };
                    Z._startTime = o.time, $._startTime = o.frame, Z._active = $._active = !0, setTimeout(H, 1), R._updateRoot = M.render = function() {
                        var t, e, i;
                        if (I.length && H(), Z.render((o.time - Z._startTime) * Z._timeScale, !1, !1), $.render((o.frame - $._startTime) * $._timeScale, !1, !1), I.length && H(), o.frame >= Q) {
                            for (i in Q = o.frame + (parseInt(M.autoSleep, 10) || 120), q) {
                                for (t = (e = q[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete q[i]
                            }
                            if ((!(i = Z._first) || i._paused) && M.autoSleep && !$._first && 1 === o._listeners.tick.length) {
                                for (; i && i._paused;) i = i._next;
                                i || o.sleep()
                            }
                        }
                    }, o.addEventListener("tick", R._updateRoot);
                    var J = function(t, e, i) {
                            var s, r, n = t._gsTweenID;
                            if (q[n || (t._gsTweenID = n = "t" + V++)] || (q[n] = {
                                    target: t,
                                    tweens: []
                                }), e && ((s = q[n].tweens)[r = s.length] = e, i))
                                for (; --r > -1;) s[r] === e && s.splice(r, 1);
                            return q[n].tweens
                        },
                        K = function(t, e, i, s) {
                            var r, n, a = t.vars.onOverwrite;
                            return a && (r = a(t, e, i, s)), (a = M.onOverwrite) && (n = a(t, e, i, s)), !1 !== r && !1 !== n
                        },
                        tt = function(t, e, i, s, r) {
                            var n, a, o, l;
                            if (1 === s || s >= 4) {
                                for (l = r.length, n = 0; n < l; n++)
                                    if ((o = r[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                                    else if (5 === s) break;
                                return a
                            }
                            var h, _ = e._startTime + 1e-8,
                                u = [],
                                f = 0,
                                c = 0 === e._duration;
                            for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || et(e, 0, c), 0 === et(o, h, c) && (u[f++] = o)) : o._startTime <= _ && o._startTime + o.totalDuration() / o._timeScale > _ && ((c || !o._initted) && _ - o._startTime <= 2e-8 || (u[f++] = o)));
                            for (n = f; --n > -1;)
                                if (l = (o = u[n])._firstPT, 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted && l) {
                                    if (2 !== s && !K(o, e)) continue;
                                    o._enabled(!1, !1) && (a = !0)
                                }
                            return a
                        },
                        et = function(t, e, i) {
                            for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                                if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                                s = s._timeline
                            }
                            return (n /= r) > e ? n - e : i && n === e || !t._initted && n - e < 2e-8 ? 1e-8 : (n += t.totalDuration() / t._timeScale / r) > e + 1e-8 ? 0 : n - e - 1e-8
                        };
                    a._init = function() {
                        var t, e, i, s, r, n, a = this.vars,
                            o = this._overwrittenProps,
                            l = this._duration,
                            h = !!a.immediateRender,
                            _ = a.ease,
                            u = this._startAt;
                        if (a.startAt) {
                            for (s in u && (u.render(-1, !0), u.kill()), r = {}, a.startAt) r[s] = a.startAt[s];
                            if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = h && !1 !== a.lazy, r.startAt = r.delay = null, r.onUpdate = a.onUpdate, r.onUpdateParams = a.onUpdateParams, r.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = M.to(this.target || {}, 0, r), h)
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== l) return
                        } else if (a.runBackwards && 0 !== l)
                            if (u) u.render(-1, !0), u.kill(), this._startAt = null;
                            else {
                                for (s in 0 !== this._time && (h = !1), i = {}, a) W[s] && "autoCSS" !== s || (i[s] = a[s]);
                                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== a.lazy, i.immediateRender = h, this._startAt = M.to(this.target, 0, i), h) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            }
                        if (this._ease = _ = _ ? _ instanceof x ? _ : "function" == typeof _ ? new x(_, a.easeParams) : w[_] || M.defaultEase : M.defaultEase, a.easeParams instanceof Array && _.config && (this._ease = _.config.apply(_, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (n = this._targets.length, t = 0; t < n; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
                        else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                        if (e && M._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                            for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                        this._onUpdate = a.onUpdate, this._initted = !0
                    }, a._initProps = function(e, i, s, r, n) {
                        var a, o, l, h, _, u;
                        if (null == e) return !1;
                        for (a in F[e._gsTweenID] && H(), this.vars.css || e.style && e !== t && e.nodeType && Y.css && !1 !== this.vars.autoCSS && function(t, e) {
                                var i, s = {};
                                for (i in t) W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!Y[i] || Y[i] && Y[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                                t.css = s
                            }(this.vars, e), this.vars)
                            if (u = this.vars[a], W[a]) u && (u instanceof Array || u.push && m(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[a] = u = this._swapSelfInParams(u, this));
                            else if (Y[a] && (h = new Y[a])._onInitTween(e, this.vars[a], this, n)) {
                            for (this._firstPT = _ = {
                                    _next: this._firstPT,
                                    t: h,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: a,
                                    pg: 1,
                                    pr: h._priority,
                                    m: 0
                                }, o = h._overwriteProps.length; --o > -1;) i[h._overwriteProps[o]] = this._firstPT;
                            (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), _._next && (_._next._prev = _)
                        } else i[a] = B.call(this, e, a, "get", u, a, 0, null, this.vars.stringFilter, n);
                        return r && this._kill(r, e) ? this._initProps(e, i, s, r, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && tt(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), l)
                    }, a.render = function(t, e, i) {
                        var s, r, n, a, o = this._time,
                            l = this._duration,
                            h = this._rawPrevTime;
                        if (t >= l - 1e-8 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-8 || 1e-8 === h && "isPause" !== this.data) && h !== t && (i = !0, h > 1e-8 && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : 1e-8);
                        else if (t < 1e-8) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", s = this._reversed), t > -1e-8 ? t = 0 : t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-8 !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : 1e-8)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                        else if (this._totalTime = this._time = t, this._easeType) {
                            var _ = t / l,
                                u = this._easeType,
                                f = this._easePower;
                            (1 === u || 3 === u && _ >= .5) && (_ = 1 - _), 3 === u && (_ *= 2), 1 === f ? _ *= _ : 2 === f ? _ *= _ * _ : 3 === f ? _ *= _ * _ * _ : 4 === f && (_ *= _ * _ * _ * _), this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : t / l < .5 ? _ / 2 : 1 - _ / 2
                        } else this.ratio = this._ease.getRatio(t / l);
                        if (this._time !== o || i) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, I.push(this), void(this._lazy = [t, e]);
                                this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                            this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== o || s || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && 1e-8 === this._rawPrevTime && 1e-8 !== a && (this._rawPrevTime = 0)))
                        }
                    }, a._kill = function(t, e, i) {
                        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
                        var s, r, n, a, o, l, h, _, u, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                            c = this._firstPT;
                        if ((m(e) || E(e)) && "number" != typeof e[0])
                            for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0);
                        else {
                            if (this._targets) {
                                for (s = this._targets.length; --s > -1;)
                                    if (e === this._targets[s]) {
                                        o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                        break
                                    }
                            } else {
                                if (e !== this.target) return !1;
                                o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (o) {
                                if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (M.onOverwrite || this.vars.onOverwrite)) {
                                    for (n in h) o[n] && (u || (u = []), u.push(n));
                                    if ((u || !t) && !K(this, i, e, u)) return !1
                                }
                                for (n in h)(a = o[n]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                                !this._firstPT && this._initted && c && this._enabled(!1, !1)
                            }
                        }
                        return l
                    }, a.invalidate = function() {
                        this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this);
                        var t = this._time;
                        return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-8, this.render(t, !1, !1 !== this.vars.lazy)), this
                    }, a._enabled = function(t, e) {
                        if (l || o.wake(), t && this._gc) {
                            var i, s = this._targets;
                            if (s)
                                for (i = s.length; --i > -1;) this._siblings[i] = J(s[i], this, !0);
                            else this._siblings = J(this.target, this, !0)
                        }
                        return R.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    }, M.to = function(t, e, i) {
                        return new M(t, e, i)
                    }, M.from = function(t, e, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new M(t, e, i)
                    }, M.fromTo = function(t, e, i, s) {
                        return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new M(t, e, s)
                    }, M.delayedCall = function(t, e, i, s, r) {
                        return new M(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            callbackScope: s,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }, M.set = function(t, e) {
                        return new M(t, 0, e)
                    }, M.getTweensOf = function(t, e) {
                        if (null == t) return [];
                        var i, s, r, n;
                        if (t = "string" != typeof t ? t : M.selector(t) || t, (m(t) || E(t)) && "number" != typeof t[0]) {
                            for (i = t.length, s = []; --i > -1;) s = s.concat(M.getTweensOf(t[i], e));
                            for (i = s.length; --i > -1;)
                                for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
                        } else if (t._gsTweenID)
                            for (i = (s = J(t).concat()).length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                        return s || []
                    }, M.killTweensOf = M.killDelayedCallsTo = function(t, e, i) {
                        "object" == typeof e && (i = e, e = !1);
                        for (var s = M.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
                    };
                    var it = y("plugins.TweenPlugin", function(t, e) {
                        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = it.prototype
                    }, !0);
                    if (a = it.prototype, it.version = "1.19.0", it.API = 2, a._firstPT = null, a._addTween = B, a.setRatio = N, a._kill = function(t) {
                            var e, i = this._overwriteProps,
                                s = this._firstPT;
                            if (null != t[this._propName]) this._overwriteProps = [];
                            else
                                for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                            for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                            return !1
                        }, a._mod = a._roundProps = function(t) {
                            for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                        }, M._onPluginEvent = function(t, e) {
                            var i, s, r, n, a, o = e._firstPT;
                            if ("_onInitAllProps" === t) {
                                for (; o;) {
                                    for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                                    (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                                }
                                o = e._firstPT = r
                            }
                            for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                            return i
                        }, it.activate = function(t) {
                            for (var e = t.length; --e > -1;) t[e].API === it.API && (Y[(new t[e])._propName] = t[e]);
                            return !0
                        }, v.plugin = function(t) {
                            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                            var e, i = t.propName,
                                s = t.priority || 0,
                                r = t.overwriteProps,
                                n = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_mod",
                                    mod: "_mod",
                                    initAll: "_onInitAllProps"
                                },
                                a = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                                    it.call(this, i, s), this._overwriteProps = r || []
                                }, !0 === t.global),
                                o = a.prototype = new it(i);
                            for (e in o.constructor = a, a.API = t.API, n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                            return a.version = t.version, it.activate([a]), a
                        }, r = t._gsQueue) {
                        for (n = 0; n < r.length; n++) r[n]();
                        for (a in d) d[a].func || t.console.log("GSAP encountered missing dependency: " + a)
                    }
                    return l = !1, M
                }(r),
                a = r.GreenSockGlobals,
                o = a.com.greensock,
                l = o.core.SimpleTimeline,
                h = o.core.Animation,
                _ = a.Ease,
                u = (a.Linear, a.Power1, a.Power2, a.Power3, a.Power4, a.TweenPlugin);
            o.events.EventDispatcher
        }).call(this, i(10)(t), i(3))
    }, function(t, e, i) {
        "use strict";
        var s = i(0);
        /*!
         * VERSION: 2.1.3
         * DATE: 2019-05-17
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         **/
        s.e._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() {
            var t = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                e = function(t, e, i) {
                    var s, r, n = t.cycle;
                    for (s in n) r = n[s], t[s] = "function" == typeof r ? r(i, e[i], e) : r[i % r.length];
                    delete t.cycle
                },
                i = function(t) {
                    if ("function" == typeof t) return t;
                    var e = "object" == typeof t ? t : {
                            each: t
                        },
                        i = e.ease,
                        s = e.from || 0,
                        r = e.base || 0,
                        n = {},
                        a = isNaN(s),
                        o = e.axis,
                        l = {
                            center: .5,
                            end: 1
                        }[s] || 0;
                    return function(t, h, _) {
                        var u, f, c, p, m, d, g, v, y, T = (_ || e).length,
                            x = n[T];
                        if (!x) {
                            if (!(y = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                                for (g = -1 / 0; g < (g = _[y++].getBoundingClientRect().left) && y < T;);
                                y--
                            }
                            for (x = n[T] = [], u = a ? Math.min(y, T) * l - .5 : s % y, f = a ? T * l / y - .5 : s / y | 0, g = 0, v = 1 / 0, d = 0; d < T; d++) c = d % y - u, p = f - (d / y | 0), x[d] = m = o ? Math.abs("y" === o ? p : c) : Math.sqrt(c * c + p * p), m > g && (g = m), m < v && (v = m);
                            x.max = g - v, x.min = v, x.v = T = e.amount || e.each * (y > T ? T - 1 : o ? "y" === o ? T / y : y : Math.max(y, T / y)) || 0, x.b = T < 0 ? r - T : r
                        }
                        return T = (x[t] - x.min) / x.max, x.b + (i ? i.getRatio(T) : T) * x.v
                    }
                },
                r = function(t, e, i) {
                    s.f.call(this, t, e, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = r.prototype.render
                },
                n = s.f._internals,
                a = n.isSelector,
                o = n.isArray,
                l = r.prototype = s.f.to({}, .1, {}),
                h = [];
            r.version = "2.1.3", l.constructor = r, l.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = s.f.killTweensOf, r.getTweensOf = s.f.getTweensOf, r.lagSmoothing = s.f.lagSmoothing, r.ticker = s.f.ticker, r.render = s.f.render, r.distribute = i, l.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), s.f.prototype.invalidate.call(this)
            }, l.updateTo = function(t, e) {
                var i, r = this.ratio,
                    n = this.vars.immediateRender || t.immediateRender;
                for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[i] = t[i];
                if (this._initted || n)
                    if (e) this._initted = !1, n && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && s.f._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                    var a = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                } else if (this._initted = !1, this._init(), this._time > 0 || n)
                    for (var o, l = 1 / (1 - r), h = this._firstPT; h;) o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next;
                return this
            }, l.render = function(t, e, i) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var r, a, o, l, h, _, u, f, c, p = this._dirty ? this.totalDuration() : this._totalDuration,
                    m = this._time,
                    d = this._totalTime,
                    g = this._cycle,
                    v = this._duration,
                    y = this._rawPrevTime;
                if (t >= p - 1e-8 && t >= 0 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, a = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (y < 0 || t <= 0 && t >= -1e-8 || 1e-8 === y && "isPause" !== this.data) && y !== t && (i = !0, y > 1e-8 && (a = "onReverseComplete")), this._rawPrevTime = f = !e || t || y === t ? t : 1e-8)) : t < 1e-8 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === v && y > 0) && (a = "onReverseComplete", r = this._reversed), t > -1e-8 ? t = 0 : t < 0 && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = f = !e || t || y === t ? t : 1e-8)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && d <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = v - this._time, (c = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== c || this._initted ? this._yoyoEase = c = !0 === c ? this._ease : c instanceof s.b ? c : s.b.map[c] : (c = this.vars.ease, this._yoyoEase = c = c ? c instanceof s.b ? c : "function" == typeof c ? new s.b(c, this.vars.easeParams) : s.b.map[c] || s.f.defaultEase : s.f.defaultEase)), this.ratio = c ? 1 - c.getRatio((v - this._time) / v) : 0)), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType && !c ? (h = this._time / v, (1 === (_ = this._easeType) || 3 === _ && h >= .5) && (h = 1 - h), 3 === _ && (h *= 2), 1 === (u = this._easePower) ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), this.ratio = 1 === _ ? 1 - h : 2 === _ ? h : this._time / v < .5 ? h / 2 : 1 - h / 2) : c || (this.ratio = this._ease.getRatio(this._time / v))), m !== this._time || i || g !== this._cycle) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = d, this._rawPrevTime = y, this._cycle = g, n.lazyTweens.push(this), void(this._lazy = [t, e]);
                        !this._time || r || c ? r && this._ease._calcEnd && !c && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / v)
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : a || (a = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== v || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, i), e || (this._totalTime !== d || a) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), a && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a), 0 === v && 1e-8 === this._rawPrevTime && 1e-8 !== f && (this._rawPrevTime = 0)))
                } else d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, r.to = function(t, e, i) {
                return new r(t, e, i)
            }, r.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
            }, r.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s)
            }, r.staggerTo = r.allTo = function(n, l, _, u, f, c, p) {
                var m, d, g, v, y = [],
                    T = i(_.stagger || u),
                    x = _.cycle,
                    w = (_.startAt || h).cycle;
                for (o(n) || ("string" == typeof n && (n = s.f.selector(n) || n), a(n) && (n = t(n))), m = (n = n || []).length - 1, g = 0; g <= m; g++) {
                    for (v in d = {}, _) d[v] = _[v];
                    if (x && (e(d, n, g), null != d.duration && (l = d.duration, delete d.duration)), w) {
                        for (v in w = d.startAt = {}, _.startAt) w[v] = _.startAt[v];
                        e(d.startAt, n, g)
                    }
                    d.delay = T(g, n[g], n) + (d.delay || 0), g === m && f && (d.onComplete = function() {
                        _.onComplete && _.onComplete.apply(_.onCompleteScope || this, arguments), f.apply(p || _.callbackScope || this, c || h)
                    }), y[g] = new r(n[g], l, d)
                }
                return y
            }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o)
            }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, l) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, l)
            }, r.delayedCall = function(t, e, i, s, n) {
                return new r(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    useFrames: n,
                    overwrite: 0
                })
            }, r.set = function(t, e) {
                return new r(t, 0, e)
            }, r.isTweening = function(t) {
                return s.f.getTweensOf(t, !0).length > 0
            };
            var _ = function(t, e) {
                    for (var i = [], r = 0, n = t._first; n;) n instanceof s.f ? i[r++] = n : (e && (i[r++] = n), r = (i = i.concat(_(n, e))).length), n = n._next;
                    return i
                },
                u = r.getAllTweens = function(t) {
                    return _(s.a._rootTimeline, t).concat(_(s.a._rootFramesTimeline, t))
                };
            r.killAll = function(t, e, i, r) {
                null == e && (e = !0), null == i && (i = !0);
                var n, a, o, l = u(0 != r),
                    h = l.length,
                    _ = e && i && r;
                for (o = 0; o < h; o++) a = l[o], (_ || a instanceof s.c || (n = a.target === a.vars.onComplete) && i || e && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
            }, r.killChildTweensOf = function(e, i) {
                if (null != e) {
                    var l, h, _, u, f, c = n.tweenLookup;
                    if ("string" == typeof e && (e = s.f.selector(e) || e), a(e) && (e = t(e)), o(e))
                        for (u = e.length; --u > -1;) r.killChildTweensOf(e[u], i);
                    else {
                        for (_ in l = [], c)
                            for (h = c[_].target.parentNode; h;) h === e && (l = l.concat(c[_].tweens)), h = h.parentNode;
                        for (f = l.length, u = 0; u < f; u++) i && l[u].totalTime(l[u].totalDuration()), l[u]._enabled(!1, !1)
                    }
                }
            };
            var f = function(t, e, i, r) {
                e = !1 !== e, i = !1 !== i;
                for (var n, a, o = u(r = !1 !== r), l = e && i && r, h = o.length; --h > -1;) a = o[h], (l || a instanceof s.c || (n = a.target === a.vars.onComplete) && i || e && !n) && a.paused(t)
            };
            return r.pauseAll = function(t, e, i) {
                f(!0, t, e, i)
            }, r.resumeAll = function(t, e, i) {
                f(!1, t, e, i)
            }, r.globalTimeScale = function(t) {
                var e = s.a._rootTimeline,
                    i = s.f.ticker.time;
                return arguments.length ? (t = t || 1e-8, e._startTime = i - (i - e._startTime) * e._timeScale / t, e = s.a._rootFramesTimeline, i = s.f.ticker.frame, e._startTime = i - (i - e._startTime) * e._timeScale / t, e._timeScale = s.a._rootTimeline._timeScale = t, t) : e._timeScale
            }, l.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this.duration() ? this._time / this._duration : this.ratio
            }, l.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, l.time = function(t, e) {
                if (!arguments.length) return this._time;
                this._dirty && this.totalDuration();
                var i = this._duration,
                    s = this._cycle,
                    r = s * (i + this._repeatDelay);
                return t > i && (t = i), this.totalTime(this._yoyo && 1 & s ? i - t + r : this._repeat ? t + r : t, e)
            }, l.duration = function(t) {
                return arguments.length ? s.a.prototype.duration.call(this, t) : this._duration
            }, l.totalDuration = function(t) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, l.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, l.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, l.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, r
        }, !0);
        var r = s.g.TweenMax;
        /*!
         * VERSION: 2.1.3
         * DATE: 2019-05-17
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         */
        s.e._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function() {
            var t, e, i, r, n = function() {
                    s.d.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = n.prototype.setRatio
                },
                a = s.e._gsDefine.globals,
                o = {},
                l = n.prototype = new s.d("css");
            l.constructor = n, n.version = "2.1.3", n.API = 2, n.defaultTransformPerspective = 0, n.defaultSkewType = "compensated", n.defaultSmoothOrigin = !0, l = "px", n.suffixMap = {
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
            var h, _, u, f, c, p, m, d, g = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                T = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
                x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                w = /(?:\d|\-|\+|=|#|\.)*/g,
                b = /opacity *= *([^)]*)/i,
                P = /opacity:([^;]*)/i,
                k = /alpha\(opacity *=.+?\)/i,
                O = /^(rgb|hsl)/,
                S = /([A-Z])/g,
                A = /-([a-z])/gi,
                R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                C = function(t, e) {
                    return e.toUpperCase()
                },
                D = /(?:Left|Right|Width)/i,
                M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                I = /,(?=[^\)]*(?:\(|$))/gi,
                F = /[\s,\(]/i,
                z = Math.PI / 180,
                L = 180 / Math.PI,
                N = {},
                j = {
                    style: {}
                },
                X = s.e.document || {
                    createElement: function() {
                        return j
                    }
                },
                B = function(t, e) {
                    var i = X.createElementNS ? X.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : X.createElement(t);
                    return i.style ? i : X.createElement(t)
                },
                U = B("div"),
                Y = B("img"),
                q = n._internals = {
                    _specialProps: o
                },
                V = (s.e.navigator || {}).userAgent || "",
                W = function() {
                    var t = V.indexOf("Android"),
                        e = B("a");
                    return u = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === t || parseFloat(V.substr(t + 8, 2)) > 3), c = u && parseFloat(V.substr(V.indexOf("Version/") + 8, 2)) < 6, f = -1 !== V.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (p = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                }(),
                G = function(t) {
                    return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                $ = function(t) {
                    s.e.console && console.log(t)
                },
                Z = "",
                Q = "",
                H = function(t, e) {
                    var i, s, r = (e = e || U).style;
                    if (void 0 !== r[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                    return s >= 0 ? (Z = "-" + (Q = 3 === s ? "ms" : i[s]).toLowerCase() + "-", Q + t) : null
                },
                J = "undefined" != typeof window ? window : X.defaultView || {
                    getComputedStyle: function() {}
                },
                K = function(t) {
                    return J.getComputedStyle(t)
                },
                tt = n.getStyle = function(t, e, i, s, r) {
                    var n;
                    return W || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || K(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : G(t)
                },
                et = q.convertToPixels = function(t, e, i, r, a) {
                    if ("px" === r || !r && "lineHeight" !== e) return i;
                    if ("auto" === r || !i) return 0;
                    var o, l, h, _ = D.test(e),
                        u = t,
                        f = U.style,
                        c = i < 0,
                        p = 1 === i;
                    if (c && (i = -i), p && (i *= 100), "lineHeight" !== e || r)
                        if ("%" === r && -1 !== e.indexOf("border")) o = i / 100 * (_ ? t.clientWidth : t.clientHeight);
                        else {
                            if (f.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[_ ? "borderLeftWidth" : "borderTopWidth"] = i + r;
                            else {
                                if (u = t.parentNode || X.body, -1 !== tt(u, "display").indexOf("flex") && (f.position = "absolute"), l = u._gsCache, h = s.f.ticker.frame, l && _ && l.time === h) return l.width * i / 100;
                                f[_ ? "width" : "height"] = i + r
                            }
                            u.appendChild(U), o = parseFloat(U[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(U), _ && "%" === r && !1 !== n.cacheWidths && ((l = u._gsCache = u._gsCache || {}).time = h, l.width = o / i * 100), 0 !== o || a || (o = et(t, e, i, r, !0))
                        }
                    else l = K(t).lineHeight, t.style.lineHeight = i, o = parseFloat(K(t).lineHeight), t.style.lineHeight = l;
                    return p && (o /= 100), c ? -o : o
                },
                it = q.calculateOffset = function(t, e, i) {
                    if ("absolute" !== tt(t, "position", i)) return 0;
                    var s = "left" === e ? "Left" : "Top",
                        r = tt(t, "margin" + s, i);
                    return t["offset" + s] - (et(t, e, parseFloat(r), r.replace(w, "")) || 0)
                },
                st = function(t, e) {
                    var i, s, r, n = {};
                    if (e = e || K(t))
                        if (i = e.length)
                            for (; --i > -1;) - 1 !== (r = e[i]).indexOf("-transform") && It !== r || (n[r.replace(A, C)] = e.getPropertyValue(r));
                        else
                            for (i in e) - 1 !== i.indexOf("Transform") && Et !== i || (n[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(A, C)] = e[i]);
                    return W || (n.opacity = G(t)), s = Gt(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, zt && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
                },
                rt = function(t, e, i, s, r) {
                    var n, a, o, l = {},
                        h = t.style;
                    for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" != typeof n && "string" != typeof n || (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(x, "") ? n : 0 : it(t, a), void 0 !== h[a] && (o = new yt(h, a, h[a], o))));
                    if (s)
                        for (a in s) "className" !== a && (l[a] = s[a]);
                    return {
                        difs: l,
                        firstMPT: o
                    }
                },
                nt = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ot = function(t, e, i) {
                    if ("svg" === (t.nodeName + "").toLowerCase()) return (i || K(t))[e] || 0;
                    if (t.getCTM && qt(t)) return t.getBBox()[e] || 0;
                    var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        r = nt[e],
                        n = r.length;
                    for (i = i || K(t); --n > -1;) s -= parseFloat(tt(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(tt(t, "border" + r[n] + "Width", i, !0)) || 0;
                    return s
                },
                lt = function(t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    null != t && "" !== t || (t = "0 0");
                    var i, s = t.split(" "),
                        r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : s[0],
                        n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : s[1];
                    if (s.length > 3 && !e) {
                        for (s = t.split(", ").join(",").split(","), t = [], i = 0; i < s.length; i++) t.push(lt(s[i]));
                        return t.join(",")
                    }
                    return null == n ? n = "center" === r ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + n + (s.length > 2 ? " " + s[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(r.replace(x, "")), e.oy = parseFloat(n.replace(x, "")), e.v = t), e || t
                },
                ht = function(t, e) {
                    return "function" == typeof t && (t = t(d, m)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                },
                _t = function(t, e) {
                    "function" == typeof t && (t = t(d, m));
                    var i = "string" == typeof t && "=" === t.charAt(1);
                    return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (i ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? t.substr(2) : t) / 100)), null == t ? e : i ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                },
                ut = function(t, e, i, s) {
                    var r, n, a, o;
                    return "function" == typeof t && (t = t(d, m)), null == t ? a = e : "number" == typeof t ? a = t : (360, r = t.split("_"), n = ((o = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : L) - (o ? 0 : e), r.length && (s && (s[i] = e + n), -1 !== t.indexOf("short") && (n %= 360) !== n % 180 && (n = n < 0 ? n + 360 : n - 360), -1 !== t.indexOf("_cw") && n < 0 ? n = (n + 3599999999640) % 360 - 360 * (n / 360 | 0) : -1 !== t.indexOf("ccw") && n > 0 && (n = (n - 3599999999640) % 360 - 360 * (n / 360 | 0))), a = e + n), a < 1e-6 && a > -1e-6 && (a = 0), a
                },
                ft = {
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
                ct = function(t, e, i) {
                    return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                },
                pt = n.parseColor = function(t, e) {
                    var i, s, r, n, a, o, l, h, _, u, f;
                    if (t)
                        if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                        else {
                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ft[t]) i = ft[t];
                            else if ("#" === t.charAt(0)) 4 === t.length && (s = t.charAt(1), r = t.charAt(2), n = t.charAt(3), t = "#" + s + s + r + r + n + n), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                            else if ("hsl" === t.substr(0, 3))
                                if (i = f = t.match(g), e) {
                                    if (-1 !== t.indexOf("=")) return t.match(v)
                                } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, s = 2 * (l = Number(i[2]) / 100) - (r = l <= .5 ? l * (o + 1) : l + o - l * o), i.length > 3 && (i[3] = Number(i[3])), i[0] = ct(a + 1 / 3, s, r), i[1] = ct(a, s, r), i[2] = ct(a - 1 / 3, s, r);
                            else i = t.match(g) || ft.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                        }
                    else i = ft.black;
                    return e && !f && (s = i[0] / 255, r = i[1] / 255, n = i[2] / 255, l = ((h = Math.max(s, r, n)) + (_ = Math.min(s, r, n))) / 2, h === _ ? a = o = 0 : (u = h - _, o = l > .5 ? u / (2 - h - _) : u / (h + _), a = h === s ? (r - n) / u + (r < n ? 6 : 0) : h === r ? (n - s) / u + 2 : (s - r) / u + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
                },
                mt = function(t, e) {
                    var i, s, r, n = t.match(dt) || [],
                        a = 0,
                        o = "";
                    if (!n.length) return t;
                    for (i = 0; i < n.length; i++) s = n[i], a += (r = t.substr(a, t.indexOf(s, a) - a)).length + s.length, 3 === (s = pt(s, e)).length && s.push(1), o += r + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                    return o + t.substr(a)
                },
                dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (l in ft) dt += "|" + l + "\\b";
            dt = new RegExp(dt + ")", "gi"), n.colorStringFilter = function(t) {
                var e, i = t[0] + " " + t[1];
                dt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = mt(t[0], e), t[1] = mt(t[1], e)), dt.lastIndex = 0
            }, s.f.defaultStringFilter || (s.f.defaultStringFilter = n.colorStringFilter);
            var gt = function(t, e, i, s) {
                    if (null == t) return function(t) {
                        return t
                    };
                    var r, n = e ? (t.match(dt) || [""])[0] : "",
                        a = t.split(n).join("").match(y) || [],
                        o = t.substr(0, t.indexOf(a[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        h = -1 !== t.indexOf(" ") ? " " : ",",
                        _ = a.length,
                        u = _ > 0 ? a[0].replace(g, "") : "";
                    return _ ? r = e ? function(t) {
                        var e, f, c, p;
                        if ("number" == typeof t) t += u;
                        else if (s && I.test(t)) {
                            for (p = t.replace(I, "|").split("|"), c = 0; c < p.length; c++) p[c] = r(p[c]);
                            return p.join(",")
                        }
                        if (e = (t.match(dt) || [n])[0], c = (f = t.split(e).join("").match(y) || []).length, _ > c--)
                            for (; ++c < _;) f[c] = i ? f[(c - 1) / 2 | 0] : a[c];
                        return o + f.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, n, f;
                        if ("number" == typeof t) t += u;
                        else if (s && I.test(t)) {
                            for (n = t.replace(I, "|").split("|"), f = 0; f < n.length; f++) n[f] = r(n[f]);
                            return n.join(",")
                        }
                        if (f = (e = t.match("," === h ? y : T) || []).length, _ > f--)
                            for (; ++f < _;) e[f] = i ? e[(f - 1) / 2 | 0] : a[f];
                        return (o && "none" !== t && t.substr(0, t.indexOf(e[0])) || o) + e.join(h) + l
                    } : function(t) {
                        return t
                    }
                },
                vt = function(t) {
                    return t = t.split(","),
                        function(e, i, s, r, n, a, o) {
                            var l, h = (i + "").split(" ");
                            for (o = {}, l = 0; l < 4; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                            return r.parse(e, o, n, a)
                        }
                },
                yt = (q._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, s, r, n, a = this.data, o = a.proxy, l = a.firstMPT; l;) e = o[l.v], l.r ? e = l.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                    if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, o.rotation, this.t, this._tween) : o.rotation), 1 === t || 0 === t)
                        for (l = a.firstMPT, n = 1 === t ? "e" : "b"; l;) {
                            if ((i = l.t).type) {
                                if (1 === i.type) {
                                    for (r = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                    i[n] = r
                                }
                            } else i[n] = i.s + i.xs0;
                            l = l._next
                        }
                }, function(t, e, i, s, r) {
                    this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
                }),
                Tt = (q._parseToProxy = function(t, e, i, s, r, n) {
                    var a, o, l, h, _, u = s,
                        f = {},
                        c = {},
                        p = i._transform,
                        m = N;
                    for (i._transform = null, N = e, s = _ = i.parse(t, e, s, r), N = m, n && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                        if (s.type <= 1 && (c[o = s.p] = s.s + s.c, f[o] = s.s, n || (h = new yt(s, "s", o, h, s.r), s.c = 0), 1 === s.type))
                            for (a = s.l; --a > 0;) l = "xn" + a, c[o = s.p + "_" + l] = s.data[l], f[o] = s[l], n || (h = new yt(s, l, o, h, s.rxp[l]));
                        s = s._next
                    }
                    return {
                        proxy: f,
                        end: c,
                        firstMPT: h,
                        pt: _
                    }
                }, q.CSSPropTween = function(e, i, s, n, a, o, l, h, _, u, f) {
                    this.t = e, this.p = i, this.s = s, this.c = n, this.n = l || i, e instanceof Tt || r.push(this.n), this.r = h ? "function" == typeof h ? h : Math.round : h, this.type = o || 0, _ && (this.pr = _, t = !0), this.b = void 0 === u ? s : u, this.e = void 0 === f ? s + n : f, a && (this._next = a, a._prev = this)
                }),
                xt = function(t, e, i, s, r, n) {
                    var a = new Tt(t, e, i, s - i, r, -1, n);
                    return a.b = i, a.e = a.xs0 = s, a
                },
                wt = n.parseComplex = function(t, e, i, s, r, a, o, l, _, u) {
                    i = i || a || "", "function" == typeof s && (s = s(d, m)), o = new Tt(t, e, 0, 0, o, u ? 2 : 1, null, !1, l, i, s), s += "", r && dt.test(s + i) && (s = [i, s], n.colorStringFilter(s), i = s[0], s = s[1]);
                    var f, c, p, y, T, x, w, b, P, k, O, S, A, R = i.split(", ").join(",").split(" "),
                        C = s.split(", ").join(",").split(" "),
                        D = R.length,
                        M = !1 !== h;
                    for (-1 === s.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (s + i).indexOf("rgb") || -1 !== (s + i).indexOf("hsl") ? (R = R.join(" ").replace(I, ", ").split(" "), C = C.join(" ").replace(I, ", ").split(" ")) : (R = R.join(" ").split(",").join(", ").split(" "), C = C.join(" ").split(",").join(", ").split(" ")), D = R.length), D !== C.length && (D = (R = (a || "").split(" ")).length), o.plugin = _, o.setRatio = u, dt.lastIndex = 0, f = 0; f < D; f++)
                        if (y = R[f], T = C[f] + "", (b = parseFloat(y)) || 0 === b) o.appendXtra("", b, ht(T, b), T.replace(v, ""), !(!M || -1 === T.indexOf("px")) && Math.round, !0);
                        else if (r && dt.test(y)) S = ")" + ((S = T.indexOf(")") + 1) ? T.substr(S) : ""), A = -1 !== T.indexOf("hsl") && W, k = T, y = pt(y, A), T = pt(T, A), (P = y.length + T.length > 6) && !W && 0 === T[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(C[f]).join("transparent")) : (W || (P = !1), A ? o.appendXtra(k.substr(0, k.indexOf("hsl")) + (P ? "hsla(" : "hsl("), y[0], ht(T[0], y[0]), ",", !1, !0).appendXtra("", y[1], ht(T[1], y[1]), "%,", !1).appendXtra("", y[2], ht(T[2], y[2]), P ? "%," : "%" + S, !1) : o.appendXtra(k.substr(0, k.indexOf("rgb")) + (P ? "rgba(" : "rgb("), y[0], T[0] - y[0], ",", Math.round, !0).appendXtra("", y[1], T[1] - y[1], ",", Math.round).appendXtra("", y[2], T[2] - y[2], P ? "," : S, Math.round), P && (y = y.length < 4 ? 1 : y[3], o.appendXtra("", y, (T.length < 4 ? 1 : T[3]) - y, S, !1))), dt.lastIndex = 0;
                    else if (x = y.match(g)) {
                        if (!(w = T.match(v)) || w.length !== x.length) return o;
                        for (p = 0, c = 0; c < x.length; c++) O = x[c], k = y.indexOf(O, p), o.appendXtra(y.substr(p, k - p), Number(O), ht(w[c], O), "", !(!M || "px" !== y.substr(k + O.length, 2)) && Math.round, 0 === c), p = k + O.length;
                        o["xs" + o.l] += y.substr(p)
                    } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + T : T;
                    if (-1 !== s.indexOf("=") && o.data) {
                        for (S = o.xs0 + o.data.s, f = 1; f < o.l; f++) S += o["xs" + f] + o.data["xn" + f];
                        o.e = S + o["xs" + f]
                    }
                    return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                },
                bt = 9;
            for ((l = Tt.prototype).l = l.pr = 0; --bt > 0;) l["xn" + bt] = 0, l["xs" + bt] = "";
            l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, s, r, n) {
                var a = this,
                    o = a.l;
                return a["xs" + o] += n && (o || a["xs" + o]) ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new Tt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                    s: e + i
                }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
            };
            var Pt = function(t, e) {
                    e = e || {}, this.p = e.prefix && H(t) || t, o[t] = o[this.p] = this, this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.allowFunc = e.allowFunc, this.pr = e.priority || 0
                },
                kt = q._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var s, r = t.split(","),
                        n = e.defaultValue;
                    for (i = i || [n], s = 0; s < r.length; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || n, new Pt(r[s], e)
                },
                Ot = q._registerPluginProp = function(t) {
                    if (!o[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        kt(t, {
                            parser: function(t, i, s, r, n, l, h) {
                                var _ = a.com.greensock.plugins[e];
                                return _ ? (_._cssRegister(), o[s].parse(t, i, s, r, n, l, h)) : ($("Error: " + e + " js file not loaded."), n)
                            }
                        })
                    }
                };
            (l = Pt.prototype).parseComplex = function(t, e, i, s, r, n) {
                var a, o, l, h, _, u, f = this.keyword;
                if (this.multi && (I.test(i) || I.test(e) ? (o = e.replace(I, "|").split("|"), l = i.replace(I, "|").split("|")) : f && (o = [e], l = [i])), l) {
                    for (h = l.length > o.length ? l.length : o.length, a = 0; a < h; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, f && (_ = e.indexOf(f)) !== (u = i.indexOf(f)) && (-1 === u ? o[a] = o[a].split(f).join("") : -1 === _ && (o[a] += " " + f));
                    e = o.join(", "), i = l.join(", ")
                }
                return wt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
            }, l.parse = function(t, e, s, r, n, a, o) {
                return this.parseComplex(t.style, this.format(tt(t, this.p, i, !1, this.dflt)), this.format(e), n, a)
            }, n.registerSpecialProp = function(t, e, i) {
                kt(t, {
                    parser: function(t, s, r, n, a, o, l) {
                        var h = new Tt(t, r, 0, 0, a, 2, r, !1, i);
                        return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
                    },
                    priority: i
                })
            }, n.useSVGTransformAttr = !0;
            var St, At, Rt, Ct, Dt, Mt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Et = H("transform"),
                It = Z + "transform",
                Ft = H("transformOrigin"),
                zt = null !== H("perspective"),
                Lt = q.Transform = function() {
                    this.perspective = parseFloat(n.defaultTransformPerspective) || 0, this.force3D = !(!1 === n.defaultForce3D || !zt) && (n.defaultForce3D || "auto")
                },
                Nt = s.e.SVGElement,
                jt = function(t, e, i) {
                    var s, r = X.createElementNS("http://www.w3.org/2000/svg", t),
                        n = /([a-z])([A-Z])/g;
                    for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
                    return e.appendChild(r), r
                },
                Xt = X.documentElement || {},
                Bt = (Dt = p || /Android/i.test(V) && !s.e.chrome, X.createElementNS && Xt.appendChild && !Dt && (At = jt("svg", Xt), Ct = (Rt = jt("rect", At, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, Rt.style[Ft] = "50% 50%", Rt.style[Et] = "scaleX(0.5)", Dt = Ct === Rt.getBoundingClientRect().width && !(f && zt), Xt.removeChild(At)), Dt),
                Ut = function(t, e, i, s, r, a) {
                    var o, l, h, _, u, f, c, p, m, d, g, v, y, T, x = t._gsTransform,
                        w = Wt(t, !0);
                    x && (y = x.xOrigin, T = x.yOrigin), (!s || (o = s.split(" ")).length < 2) && (0 === (c = t.getBBox()).x && 0 === c.y && c.width + c.height === 0 && (c = {
                        x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                        y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                        width: 0,
                        height: 0
                    }), o = [(-1 !== (e = lt(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = _ = parseFloat(o[0]), i.yOrigin = u = parseFloat(o[1]), s && w !== Vt && (f = w[0], c = w[1], p = w[2], m = w[3], d = w[4], g = w[5], (v = f * m - c * p) && (l = _ * (m / v) + u * (-p / v) + (p * g - m * d) / v, h = _ * (-c / v) + u * (f / v) - (f * g - c * d) / v, _ = i.xOrigin = o[0] = l, u = i.yOrigin = o[1] = h)), x && (a && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), r || !1 !== r && !1 !== n.defaultSmoothOrigin ? (l = _ - y, h = u - T, x.xOffset += l * w[0] + h * w[2] - l, x.yOffset += l * w[1] + h * w[3] - h) : x.xOffset = x.yOffset = 0), a || t.setAttribute("data-svg-origin", o.join(" "))
                },
                Yt = function(t) {
                    var e, i = B("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        s = this.parentNode,
                        r = this.nextSibling,
                        n = this.style.cssText;
                    if (Xt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                        e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Yt
                    } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                    return r ? s.insertBefore(this, r) : s.appendChild(this), Xt.removeChild(i), this.style.cssText = n, e
                },
                qt = function(t) {
                    return !(!Nt || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(t) {
                        try {
                            return t.getBBox()
                        } catch (e) {
                            return Yt.call(t, !0)
                        }
                    }(t))
                },
                Vt = [1, 0, 0, 1, 0, 0],
                Wt = function(t, e) {
                    var i, s, r, n, a, o, l, h = t._gsTransform || new Lt,
                        _ = t.style;
                    if (Et ? s = tt(t, It, null, !0) : t.currentStyle && (s = (s = t.currentStyle.filter.match(M)) && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), h.x || 0, h.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, Et && i && !t.offsetParent && t !== Xt && (n = _.display, _.display = "block", (l = t.parentNode) && t.offsetParent || (a = 1, o = t.nextSibling, Xt.appendChild(t)), i = !(s = tt(t, It, null, !0)) || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, n ? _.display = n : Ht(_, "display"), a && (o ? l.insertBefore(t, o) : l ? l.appendChild(t) : Xt.removeChild(t))), (h.svg || t.getCTM && qt(t)) && (i && -1 !== (_[Et] + "").indexOf("matrix") && (s = _[Et], i = 0), r = t.getAttribute("transform"), i && r && (s = "matrix(" + (r = t.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")", i = 0)), i) return Vt;
                    for (r = (s || "").match(g) || [], bt = r.length; --bt > -1;) n = Number(r[bt]), r[bt] = (a = n - (n |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + n : n;
                    return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                },
                Gt = q.getTransform = function(t, e, i, r) {
                    if (t._gsTransform && i && !r) return t._gsTransform;
                    var a, o, l, h, _, u, f = i && t._gsTransform || new Lt,
                        c = f.scaleX < 0,
                        p = zt && (parseFloat(tt(t, Ft, e, !1, "0 0 0").split(" ")[2]) || f.zOrigin) || 0,
                        m = parseFloat(n.defaultTransformPerspective) || 0;
                    if (f.svg = !(!t.getCTM || !qt(t)), f.svg && (Ut(t, tt(t, Ft, e, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), St = n.useSVGTransformAttr || Bt), (a = Wt(t)) !== Vt) {
                        if (16 === a.length) {
                            var d, g, v, y, T, x = a[0],
                                w = a[1],
                                b = a[2],
                                P = a[3],
                                k = a[4],
                                O = a[5],
                                S = a[6],
                                A = a[7],
                                R = a[8],
                                C = a[9],
                                D = a[10],
                                M = a[12],
                                E = a[13],
                                I = a[14],
                                F = a[11],
                                z = Math.atan2(S, D);
                            f.zOrigin && (M = R * (I = -f.zOrigin) - a[12], E = C * I - a[13], I = D * I + f.zOrigin - a[14]), f.rotationX = z * L, z && (d = k * (y = Math.cos(-z)) + R * (T = Math.sin(-z)), g = O * y + C * T, v = S * y + D * T, R = k * -T + R * y, C = O * -T + C * y, D = S * -T + D * y, F = A * -T + F * y, k = d, O = g, S = v), z = Math.atan2(-b, D), f.rotationY = z * L, z && (g = w * (y = Math.cos(-z)) - C * (T = Math.sin(-z)), v = b * y - D * T, C = w * T + C * y, D = b * T + D * y, F = P * T + F * y, x = d = x * y - R * T, w = g, b = v), z = Math.atan2(w, x), f.rotation = z * L, z && (d = x * (y = Math.cos(z)) + w * (T = Math.sin(z)), g = k * y + O * T, v = R * y + C * T, w = w * y - x * T, O = O * y - k * T, C = C * y - R * T, x = d, k = g, R = v), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), z = Math.atan2(k, O), f.scaleX = (1e5 * Math.sqrt(x * x + w * w + b * b) + .5 | 0) / 1e5, f.scaleY = (1e5 * Math.sqrt(O * O + S * S) + .5 | 0) / 1e5, f.scaleZ = (1e5 * Math.sqrt(R * R + C * C + D * D) + .5 | 0) / 1e5, x /= f.scaleX, k /= f.scaleY, w /= f.scaleX, O /= f.scaleY, Math.abs(z) > 2e-5 ? (f.skewX = z * L, k = 0, "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(z))) : f.skewX = 0, f.perspective = F ? 1 / (F < 0 ? -F : F) : 0, f.x = M, f.y = E, f.z = I, f.svg && (f.x -= f.xOrigin - (f.xOrigin * x - f.yOrigin * k), f.y -= f.yOrigin - (f.yOrigin * w - f.xOrigin * O))
                        } else if (!zt || r || !a.length || f.x !== a[4] || f.y !== a[5] || !f.rotationX && !f.rotationY) {
                            var N = a.length >= 6,
                                j = N ? a[0] : 1,
                                X = a[1] || 0,
                                B = a[2] || 0,
                                U = N ? a[3] : 1;
                            f.x = a[4] || 0, f.y = a[5] || 0, l = Math.sqrt(j * j + X * X), h = Math.sqrt(U * U + B * B), _ = j || X ? Math.atan2(X, j) * L : f.rotation || 0, u = B || U ? Math.atan2(B, U) * L + _ : f.skewX || 0, f.scaleX = l, f.scaleY = h, f.rotation = _, f.skewX = u, zt && (f.rotationX = f.rotationY = f.z = 0, f.perspective = m, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * j + f.yOrigin * B), f.y -= f.yOrigin - (f.xOrigin * X + f.yOrigin * U))
                        }
                        for (o in Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (c ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180)), f.zOrigin = p, f) f[o] < 2e-5 && f[o] > -2e-5 && (f[o] = 0)
                    }
                    return i && (t._gsTransform = f, f.svg && (St && t.style[Et] ? s.f.delayedCall(.001, function() {
                        Ht(t.style, Et)
                    }) : !St && t.getAttribute("transform") && s.f.delayedCall(.001, function() {
                        t.removeAttribute("transform")
                    }))), f
                },
                $t = function(t) {
                    var e, i, s = this.data,
                        r = -s.rotation * z,
                        n = r + s.skewX * z,
                        a = (Math.cos(r) * s.scaleX * 1e5 | 0) / 1e5,
                        o = (Math.sin(r) * s.scaleX * 1e5 | 0) / 1e5,
                        l = (Math.sin(n) * -s.scaleY * 1e5 | 0) / 1e5,
                        h = (Math.cos(n) * s.scaleY * 1e5 | 0) / 1e5,
                        _ = this.t.style,
                        u = this.t.currentStyle;
                    if (u) {
                        i = o, o = -l, l = -i, e = u.filter, _.filter = "";
                        var f, c, m = this.t.offsetWidth,
                            d = this.t.offsetHeight,
                            g = "absolute" !== u.position,
                            v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + o + ", M21=" + l + ", M22=" + h,
                            y = s.x + m * s.xPercent / 100,
                            T = s.y + d * s.yPercent / 100;
                        if (null != s.ox && (y += (f = (s.oxp ? m * s.ox * .01 : s.ox) - m / 2) - (f * a + (c = (s.oyp ? d * s.oy * .01 : s.oy) - d / 2) * o), T += c - (f * l + c * h)), v += g ? ", Dx=" + ((f = m / 2) - (f * a + (c = d / 2) * o) + y) + ", Dy=" + (c - (f * l + c * h) + T) + ")" : ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? _.filter = e.replace(E, v) : _.filter = v + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === o && 0 === l && 1 === h && (g && -1 === v.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && _.removeAttribute("filter")), !g) {
                            var x, P, k, O = p < 8 ? 1 : -1;
                            for (f = s.ieOffsetX || 0, c = s.ieOffsetY || 0, s.ieOffsetX = Math.round((m - ((a < 0 ? -a : a) * m + (o < 0 ? -o : o) * d)) / 2 + y), s.ieOffsetY = Math.round((d - ((h < 0 ? -h : h) * d + (l < 0 ? -l : l) * m)) / 2 + T), bt = 0; bt < 4; bt++) k = (i = -1 !== (x = u[P = at[bt]]).indexOf("px") ? parseFloat(x) : et(this.t, P, parseFloat(x), x.replace(w, "")) || 0) !== s[P] ? bt < 2 ? -s.ieOffsetX : -s.ieOffsetY : bt < 2 ? f - s.ieOffsetX : c - s.ieOffsetY, _[P] = (s[P] = Math.round(i - k * (0 === bt || 2 === bt ? 1 : O))) + "px"
                        }
                    }
                },
                Zt = q.set3DTransformRatio = q.setTransformRatio = function(t) {
                    var e, i, s, r, n, a, o, l, h, _, u, c, p, m, d, g, v, y, T, x, w = this.data,
                        b = this.t.style,
                        P = w.rotation,
                        k = w.rotationX,
                        O = w.rotationY,
                        S = w.scaleX,
                        A = w.scaleY,
                        R = w.scaleZ,
                        C = w.x,
                        D = w.y,
                        M = w.z,
                        E = w.svg,
                        I = w.perspective,
                        F = w.force3D,
                        L = w.skewY,
                        N = w.skewX;
                    if (L && (N += L, P += L), !((1 !== t && 0 !== t || "auto" !== F || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && F || M || I || O || k || 1 !== R) || St && E || !zt) P || N || E ? (P *= z, x = N * z, 1e5, i = Math.cos(P) * S, n = Math.sin(P) * S, s = Math.sin(P - x) * -A, a = Math.cos(P - x) * A, x && "simple" === w.skewType && (e = Math.tan(x - L * z), s *= e = Math.sqrt(1 + e * e), a *= e, L && (e = Math.tan(L * z), i *= e = Math.sqrt(1 + e * e), n *= e)), E && (C += w.xOrigin - (w.xOrigin * i + w.yOrigin * s) + w.xOffset, D += w.yOrigin - (w.xOrigin * n + w.yOrigin * a) + w.yOffset, St && (w.xPercent || w.yPercent) && (d = this.t.getBBox(), C += .01 * w.xPercent * d.width, D += .01 * w.yPercent * d.height), C < (d = 1e-6) && C > -d && (C = 0), D < d && D > -d && (D = 0)), T = (1e5 * i | 0) / 1e5 + "," + (1e5 * n | 0) / 1e5 + "," + (1e5 * s | 0) / 1e5 + "," + (1e5 * a | 0) / 1e5 + "," + C + "," + D + ")", E && St ? this.t.setAttribute("transform", "matrix(" + T) : b[Et] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + T) : b[Et] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + S + ",0,0," + A + "," + C + "," + D + ")";
                    else {
                        if (f && (S < (d = 1e-4) && S > -d && (S = R = 2e-5), A < d && A > -d && (A = R = 2e-5), !I || w.z || w.rotationX || w.rotationY || (I = 0)), P || N) P *= z, g = i = Math.cos(P), v = n = Math.sin(P), N && (P -= N * z, g = Math.cos(P), v = Math.sin(P), "simple" === w.skewType && (e = Math.tan((N - L) * z), g *= e = Math.sqrt(1 + e * e), v *= e, w.skewY && (e = Math.tan(L * z), i *= e = Math.sqrt(1 + e * e), n *= e))), s = -v, a = g;
                        else {
                            if (!(O || k || 1 !== R || I || E)) return void(b[Et] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + C + "px," + D + "px," + M + "px)" + (1 !== S || 1 !== A ? " scale(" + S + "," + A + ")" : ""));
                            i = a = 1, s = n = 0
                        }
                        _ = 1, r = o = l = h = u = c = 0, p = I ? -1 / I : 0, m = w.zOrigin, d = 1e-6, ",", "0", (P = O * z) && (g = Math.cos(P), l = -(v = Math.sin(P)), u = p * -v, r = i * v, o = n * v, _ = g, p *= g, i *= g, n *= g), (P = k * z) && (e = s * (g = Math.cos(P)) + r * (v = Math.sin(P)), y = a * g + o * v, h = _ * v, c = p * v, r = s * -v + r * g, o = a * -v + o * g, _ *= g, p *= g, s = e, a = y), 1 !== R && (r *= R, o *= R, _ *= R, p *= R), 1 !== A && (s *= A, a *= A, h *= A, c *= A), 1 !== S && (i *= S, n *= S, l *= S, u *= S), (m || E) && (m && (C += r * -m, D += o * -m, M += _ * -m + m), E && (C += w.xOrigin - (w.xOrigin * i + w.yOrigin * s) + w.xOffset, D += w.yOrigin - (w.xOrigin * n + w.yOrigin * a) + w.yOffset), C < d && C > -d && (C = "0"), D < d && D > -d && (D = "0"), M < d && M > -d && (M = 0)), T = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(", T += (i < d && i > -d ? "0" : i) + "," + (n < d && n > -d ? "0" : n) + "," + (l < d && l > -d ? "0" : l), T += "," + (u < d && u > -d ? "0" : u) + "," + (s < d && s > -d ? "0" : s) + "," + (a < d && a > -d ? "0" : a), k || O || 1 !== R ? (T += "," + (h < d && h > -d ? "0" : h) + "," + (c < d && c > -d ? "0" : c) + "," + (r < d && r > -d ? "0" : r), T += "," + (o < d && o > -d ? "0" : o) + "," + (_ < d && _ > -d ? "0" : _) + "," + (p < d && p > -d ? "0" : p) + ",") : T += ",0,0,0,0,1,0,", T += C + "," + D + "," + M + "," + (I ? 1 + -M / I : 1) + ")", b[Et] = T
                    }
                };
            (l = Lt.prototype).x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0, l.scaleX = l.scaleY = l.scaleZ = 1, kt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(t, e, s, r, a, o, l) {
                    if (r._lastParsedTransform === l) return a;
                    r._lastParsedTransform = l;
                    var h = l.scale && "function" == typeof l.scale ? l.scale : 0;
                    h && (l.scale = h(d, t));
                    var _, u, f, c, p, g, v, y, T, x = t._gsTransform,
                        w = t.style,
                        b = Mt.length,
                        P = l,
                        k = {},
                        O = Gt(t, i, !0, P.parseTransform),
                        S = P.transform && ("function" == typeof P.transform ? P.transform(d, m) : P.transform);
                    if (O.skewType = P.skewType || O.skewType || n.defaultSkewType, r._transform = O, "rotationZ" in P && (P.rotation = P.rotationZ), S && "string" == typeof S && Et)(u = U.style)[Et] = S, u.display = "block", u.position = "absolute", -1 !== S.indexOf("%") && (u.width = tt(t, "width"), u.height = tt(t, "height")), X.body.appendChild(U), _ = Gt(U, null, !1), "simple" === O.skewType && (_.scaleY *= Math.cos(_.skewX * z)), O.svg && (g = O.xOrigin, v = O.yOrigin, _.x -= O.xOffset, _.y -= O.yOffset, (P.transformOrigin || P.svgOrigin) && (S = {}, Ut(t, lt(P.transformOrigin), S, P.svgOrigin, P.smoothOrigin, !0), g = S.xOrigin, v = S.yOrigin, _.x -= S.xOffset - O.xOffset, _.y -= S.yOffset - O.yOffset), (g || v) && (y = Wt(U, !0), _.x -= g - (g * y[0] + v * y[2]), _.y -= v - (g * y[1] + v * y[3]))), X.body.removeChild(U), _.perspective || (_.perspective = O.perspective), null != P.xPercent && (_.xPercent = _t(P.xPercent, O.xPercent)), null != P.yPercent && (_.yPercent = _t(P.yPercent, O.yPercent));
                    else if ("object" == typeof P) {
                        if (_ = {
                                scaleX: _t(null != P.scaleX ? P.scaleX : P.scale, O.scaleX),
                                scaleY: _t(null != P.scaleY ? P.scaleY : P.scale, O.scaleY),
                                scaleZ: _t(P.scaleZ, O.scaleZ),
                                x: _t(P.x, O.x),
                                y: _t(P.y, O.y),
                                z: _t(P.z, O.z),
                                xPercent: _t(P.xPercent, O.xPercent),
                                yPercent: _t(P.yPercent, O.yPercent),
                                perspective: _t(P.transformPerspective, O.perspective)
                            }, null != (p = P.directionalRotation))
                            if ("object" == typeof p)
                                for (u in p) P[u] = p[u];
                            else P.rotation = p;
                        "string" == typeof P.x && -1 !== P.x.indexOf("%") && (_.x = 0, _.xPercent = _t(P.x, O.xPercent)), "string" == typeof P.y && -1 !== P.y.indexOf("%") && (_.y = 0, _.yPercent = _t(P.y, O.yPercent)), _.rotation = ut("rotation" in P ? P.rotation : "shortRotation" in P ? P.shortRotation + "_short" : O.rotation, O.rotation, "rotation", k), zt && (_.rotationX = ut("rotationX" in P ? P.rotationX : "shortRotationX" in P ? P.shortRotationX + "_short" : O.rotationX || 0, O.rotationX, "rotationX", k), _.rotationY = ut("rotationY" in P ? P.rotationY : "shortRotationY" in P ? P.shortRotationY + "_short" : O.rotationY || 0, O.rotationY, "rotationY", k)), _.skewX = ut(P.skewX, O.skewX), _.skewY = ut(P.skewY, O.skewY)
                    }
                    for (zt && null != P.force3D && (O.force3D = P.force3D, c = !0), (f = O.force3D || O.z || O.rotationX || O.rotationY || _.z || _.rotationX || _.rotationY || _.perspective) || null == P.scale || (_.scaleZ = 1); --b > -1;)((S = _[T = Mt[b]] - O[T]) > 1e-6 || S < -1e-6 || null != P[T] || null != N[T]) && (c = !0, a = new Tt(O, T, O[T], S, a), T in k && (a.e = k[T]), a.xs0 = 0, a.plugin = o, r._overwriteProps.push(a.n));
                    return S = "function" == typeof P.transformOrigin ? P.transformOrigin(d, m) : P.transformOrigin, O.svg && (S || P.svgOrigin) && (g = O.xOffset, v = O.yOffset, Ut(t, lt(S), _, P.svgOrigin, P.smoothOrigin), a = xt(O, "xOrigin", (x ? O : _).xOrigin, _.xOrigin, a, "transformOrigin"), a = xt(O, "yOrigin", (x ? O : _).yOrigin, _.yOrigin, a, "transformOrigin"), g === O.xOffset && v === O.yOffset || (a = xt(O, "xOffset", x ? g : O.xOffset, O.xOffset, a, "transformOrigin"), a = xt(O, "yOffset", x ? v : O.yOffset, O.yOffset, a, "transformOrigin")), S = "0px 0px"), (S || zt && f && O.zOrigin) && (Et ? (c = !0, T = Ft, S || (S = (S = (tt(t, T, i, !1, "50% 50%") + "").split(" "))[0] + " " + S[1] + " " + O.zOrigin + "px"), S += "", (a = new Tt(w, T, 0, 0, a, -1, "transformOrigin")).b = w[T], a.plugin = o, zt ? (u = O.zOrigin, S = S.split(" "), O.zOrigin = (S.length > 2 ? parseFloat(S[2]) : u) || 0, a.xs0 = a.e = S[0] + " " + (S[1] || "50%") + " 0px", (a = new Tt(O, "zOrigin", 0, 0, a, -1, a.n)).b = u, a.xs0 = a.e = O.zOrigin) : a.xs0 = a.e = S) : lt(S + "", O)), c && (r._transformType = O.svg && St || !f && 3 !== this._transformType ? 2 : 3), h && (l.scale = h), a
                },
                allowFunc: !0,
                prefix: !0
            }), kt("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), kt("clipPath", {
                defaultValue: "inset(0%)",
                prefix: !0,
                multi: !0,
                formatter: gt("inset(0% 0% 0% 0%)", !1, !0)
            }), kt("borderRadius", {
                defaultValue: "0px",
                parser: function(t, s, r, n, a, o) {
                    s = this.format(s);
                    var l, h, _, u, f, c, p, m, d, g, v, y, T, x, w, b, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        k = t.style;
                    for (d = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = s.split(" "), h = 0; h < P.length; h++) this.p.indexOf("border") && (P[h] = H(P[h])), -1 !== (f = u = tt(t, P[h], i, !1, "0px")).indexOf(" ") && (u = f.split(" "), f = u[0], u = u[1]), c = _ = l[h], p = parseFloat(f), y = f.substr((p + "").length), (T = "=" === c.charAt(1)) ? (m = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), m *= parseFloat(c), v = c.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(c), v = c.substr((m + "").length)), "" === v && (v = e[r] || y), v !== y && (x = et(t, "borderLeft", p, y), w = et(t, "borderTop", p, y), "%" === v ? (f = x / d * 100 + "%", u = w / g * 100 + "%") : "em" === v ? (f = x / (b = et(t, "borderLeft", 1, "em")) + "em", u = w / b + "em") : (f = x + "px", u = w + "px"), T && (c = parseFloat(f) + m + v, _ = parseFloat(u) + m + v)), a = wt(k, P[h], f + " " + u, c + " " + _, !1, "0px", a);
                    return a
                },
                prefix: !0,
                formatter: gt("0px 0px 0px 0px", !1, !0)
            }), kt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function(t, e, s, r, n, a) {
                    return wt(t.style, s, this.format(tt(t, s, i, !1, "0px 0px")), this.format(e), !1, "0px", n)
                },
                prefix: !0,
                formatter: gt("0px 0px", !1, !0)
            }), kt("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, s, r, n, a) {
                    var o, l, h, _, u, f, c = "background-position",
                        m = i || K(t),
                        d = this.format((m ? p ? m.getPropertyValue(c + "-x") + " " + m.getPropertyValue(c + "-y") : m.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        g = this.format(e);
                    if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (f = tt(t, "backgroundImage").replace(R, "")) && "none" !== f) {
                        for (o = d.split(" "), l = g.split(" "), Y.setAttribute("src", f), h = 2; --h > -1;)(_ = -1 !== (d = o[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - Y.width : t.offsetHeight - Y.height, o[h] = _ ? parseFloat(d) / 100 * u + "px" : parseFloat(d) / u * 100 + "%");
                        d = o.join(" ")
                    }
                    return this.parseComplex(t.style, d, g, n, a)
                },
                formatter: lt
            }), kt("backgroundSize", {
                defaultValue: "0 0",
                formatter: function(t) {
                    return "co" === (t += "").substr(0, 2) ? t : lt(-1 === t.indexOf(" ") ? t + " " + t : t)
                }
            }), kt("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), kt("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), kt("transformStyle", {
                prefix: !0
            }), kt("backfaceVisibility", {
                prefix: !0
            }), kt("userSelect", {
                prefix: !0
            }), kt("margin", {
                parser: vt("marginTop,marginRight,marginBottom,marginLeft")
            }), kt("padding", {
                parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), kt("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, s, r, n, a) {
                    var o, l, h;
                    return p < 9 ? (l = t.currentStyle, h = p < 8 ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(tt(t, this.p, i, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                }
            }), kt("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), kt("autoRound,strictUnits", {
                parser: function(t, e, i, s, r) {
                    return r
                }
            }), kt("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, s, r, n, a) {
                    var o = tt(t, "borderTopWidth", i, !1, "0px"),
                        l = this.format(e).split(" "),
                        h = l[0].replace(w, "");
                    return "px" !== h && (o = parseFloat(o) / et(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(o + " " + tt(t, "borderTopStyle", i, !1, "solid") + " " + tt(t, "borderTopColor", i, !1, "#000")), l.join(" "), n, a)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0]
                }
            }), kt("borderWidth", {
                parser: vt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), kt("float,cssFloat,styleFloat", {
                parser: function(t, e, i, s, r, n) {
                    var a = t.style,
                        o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                    return new Tt(a, o, 0, 0, r, -1, i, !1, 0, a[o], e)
                }
            });
            var Qt = function(t) {
                var e, i = this.t,
                    s = i.filter || tt(this.data, "filter") || "",
                    r = this.s + this.c * t | 0;
                100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !tt(this.data, "filter")) : (i.filter = s.replace(k, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(b, "opacity=" + r))
            };
            kt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, s, r, n, a) {
                    var o = parseFloat(tt(t, "opacity", i, !1, "1")),
                        l = t.style,
                        h = "autoAlpha" === s;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === tt(t, "visibility", i) && 0 !== e && (o = 0), W ? n = new Tt(l, "opacity", o, e - o, n) : ((n = new Tt(l, "opacity", 100 * o, 100 * (e - o), n)).xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Qt), h && ((n = new Tt(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(s)), n
                }
            });
            var Ht = function(t, e) {
                    e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
                },
                Jt = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ht(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            kt("className", {
                parser: function(e, s, r, n, a, o, l) {
                    var h, _, u, f, c, p = e.getAttribute("class") || "",
                        m = e.style.cssText;
                    if ((a = n._classNamePT = new Tt(e, r, 0, 0, a, 2)).setRatio = Jt, a.pr = -11, t = !0, a.b = p, _ = st(e, i), u = e._gsClassPT) {
                        for (f = {}, c = u.data; c;) f[c.p] = 1, c = c._next;
                        u.setRatio(1)
                    }
                    return e._gsClassPT = a, a.e = "=" !== s.charAt(1) ? s : p.replace(new RegExp("(?:\\s|^)" + s.substr(2) + "(?![\\w-])"), "") + ("+" === s.charAt(0) ? " " + s.substr(2) : ""), e.setAttribute("class", a.e), h = rt(e, _, st(e), l, f), e.setAttribute("class", p), a.data = h.firstMPT, e.style.cssText !== m && (e.style.cssText = m), a = a.xfirst = n.parse(e, h.difs, a, o)
                }
            });
            var Kt = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, s, r, n, a = this.t.style,
                        l = o.transform.parse;
                    if ("all" === this.e) a.cssText = "", r = !0;
                    else
                        for (s = (e = this.e.split(" ").join("").split(",")).length; --s > -1;) i = e[s], o[i] && (o[i].parse === l ? r = !0 : i = "transformOrigin" === i ? Ft : o[i].p), Ht(a, i);
                    r && (Ht(a, Et), (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (kt("clearProps", {
                    parser: function(e, i, s, r, n) {
                        return (n = new Tt(e, s, 0, 0, n, 2)).setRatio = Kt, n.e = i, n.pr = -10, n.data = r._tween, t = !0, n
                    }
                }), l = "bezier,throwProps,physicsProps,physics2D".split(","), bt = l.length; bt--;) Ot(l[bt]);
            (l = n.prototype)._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function(s, a, l, f) {
                if (!s.nodeType) return !1;
                this._target = m = s, this._tween = l, this._vars = a, d = f, h = a.autoRound, t = !1, e = a.suffixMap || n.suffixMap, i = K(s), r = this._overwriteProps;
                var p, g, v, y, T, x, w, b, k, O = s.style;
                if (_ && "" === O.zIndex && ("auto" !== (p = tt(s, "zIndex", i)) && "" !== p || this._addLazySet(O, "zIndex", 0)), "string" == typeof a && (y = O.cssText, p = st(s, i), O.cssText = y + ";" + a, p = rt(s, p, st(s)).difs, !W && P.test(a) && (p.opacity = parseFloat(RegExp.$1)), a = p, O.cssText = y), a.className ? this._firstPT = g = o.className.parse(s, a.className, "className", this, null, null, a) : this._firstPT = g = this.parse(s, a, null), this._transformType) {
                    for (k = 3 === this._transformType, Et ? u && (_ = !0, "" === O.zIndex && ("auto" !== (w = tt(s, "zIndex", i)) && "" !== w || this._addLazySet(O, "zIndex", 0)), c && this._addLazySet(O, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : O.zoom = 1, v = g; v && v._next;) v = v._next;
                    b = new Tt(s, "transform", 0, 0, null, 2), this._linkCSSP(b, null, v), b.setRatio = Et ? Zt : $t, b.data = this._transform || Gt(s, i, !0), b.tween = l, b.pr = -1, r.pop()
                }
                if (t) {
                    for (; g;) {
                        for (x = g._next, v = y; v && v.pr > g.pr;) v = v._next;
                        (g._prev = v ? v._prev : T) ? g._prev._next = g: y = g, (g._next = v) ? v._prev = g : T = g, g = x
                    }
                    this._firstPT = y
                }
                return !0
            }, l.parse = function(t, s, r, n) {
                var a, l, _, u, f, c, p, g, v, y, T = t.style;
                for (a in s) {
                    if (c = s[a], l = o[a], "function" != typeof c || l && l.allowFunc || (c = c(d, m)), l) r = l.parse(t, c, a, this, r, n, s);
                    else {
                        if ("--" === a.substr(0, 2)) {
                            this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", K(t).getPropertyValue(a) + "", c + "", a, !1, a);
                            continue
                        }
                        f = tt(t, a, i) + "", v = "string" == typeof c, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || v && O.test(c) ? (v || (c = ((c = pt(c)).length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), r = wt(T, a, f, c, !0, "transparent", r, 0, n)) : v && F.test(c) ? r = wt(T, a, f, c, !0, null, r, 0, n) : (p = (_ = parseFloat(f)) || 0 === _ ? f.substr((_ + "").length) : "", "" !== f && "auto" !== f || ("width" === a || "height" === a ? (_ = ot(t, a, i), p = "px") : "left" === a || "top" === a ? (_ = it(t, a, i), p = "px") : (_ = "opacity" !== a ? 0 : 1, p = "")), (y = v && "=" === c.charAt(1)) ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), g = c.replace(w, "")) : (u = parseFloat(c), g = v ? c.replace(w, "") : ""), "" === g && (g = a in e ? e[a] : p), c = u || 0 === u ? (y ? u + _ : u) + g : s[a], p !== g && ("" === g && "lineHeight" !== a || (u || 0 === u) && _ && (_ = et(t, a, _, p), "%" === g ? (_ /= et(t, a, 100, "%") / 100, !0 !== s.strictUnits && (f = _ + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? _ /= et(t, a, 1, g) : "px" !== g && (u = et(t, a, u, g), g = "px"), y && (u || 0 === u) && (c = u + _ + g))), y && (u += _), !_ && 0 !== _ || !u && 0 !== u ? void 0 !== T[a] && (c || c + "" != "NaN" && null != c) ? (r = new Tt(T, a, u || _ || 0, 0, r, -1, a, !1, 0, f, c)).xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : f : $("invalid " + a + " tween value: " + s[a]) : (r = new Tt(T, a, _, u - _, r, 0, a, !1 !== h && ("px" === g || "zIndex" === a), 0, f, c)).xs0 = g)
                    }
                    n && r && !r.plugin && (r.plugin = n)
                }
                return r
            }, l.setRatio = function(t) {
                var e, i, s, r = this._firstPT;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; r;) {
                            if (e = r.c * t + r.s, r.r ? e = r.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), r.type)
                                if (1 === r.type)
                                    if (2 === (s = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                    else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else {
                                for (i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                r.t[r.p] = i
                            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                            else r.t[r.p] = e + r.xs0;
                            r = r._next
                        } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (e = r.r(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                            r.t[r.p] = i
                                        }
                                    } else r.t[r.p] = e + r.xs0;
                            else r.t[r.p] = r.e;
                            else r.setRatio(t);
                            r = r._next
                        }
            }, l._enableTransforms = function(t) {
                this._transform = this._transform || Gt(this._target, i, !0), this._transformType = this._transform.svg && St || !t && 3 !== this._transformType ? 2 : 3
            };
            var te = function(t) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            l._addLazySet = function(t, e, i) {
                var s = this._firstPT = new Tt(t, e, 0, 0, this._firstPT, 2);
                s.e = i, s.setRatio = te, s.data = this
            }, l._linkCSSP = function(t, e, i, s) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, l._mod = function(t) {
                for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next
            }, l._kill = function(t) {
                var e, i, r, n = t;
                if (t.autoAlpha || t.alpha) {
                    for (i in n = {}, t) n[i] = t[i];
                    n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                }
                for (t.className && (e = this._classNamePT) && ((r = e.xfirst) && r._prev ? this._linkCSSP(r._prev, e._next, r._prev._prev) : r === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, r._prev), this._classNamePT = null), e = this._firstPT; e;) e.plugin && e.plugin !== i && e.plugin._kill && (e.plugin._kill(t), i = e.plugin), e = e._next;
                return s.d.prototype._kill.call(this, n)
            };
            var ee = function(t, e, i) {
                var s, r, n, a;
                if (t.slice)
                    for (r = t.length; --r > -1;) ee(t[r], e, i);
                else
                    for (r = (s = t.childNodes).length; --r > -1;) a = (n = s[r]).type, n.style && (e.push(st(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || ee(n, e, i)
            };
            return n.cascadeTo = function(t, e, i) {
                var r, n, a, o, l = s.f.to(t, e, i),
                    h = [l],
                    _ = [],
                    u = [],
                    f = [],
                    c = s.f._internals.reservedProps;
                for (t = l._targets || l.target, ee(t, _, f), l.render(e, !0, !0), ee(t, u), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)
                    if ((n = rt(f[r], _[r], u[r])).firstMPT) {
                        for (a in n = n.difs, i) c[a] && (n[a] = i[a]);
                        for (a in o = {}, n) o[a] = _[r][a];
                        h.push(s.f.fromTo(f[r], e, o, n))
                    }
                return h
            }, s.d.activate([n]), n
        }, !0);
        var n = s.g.CSSPlugin,
            a = s.e._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.1",
                init: function(t, e, i, s) {
                    var r, n;
                    if ("function" != typeof t.setAttribute) return !1;
                    for (r in e) "function" == typeof(n = e[r]) && (n = n(s, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", n + "", r, !1, r), this._overwriteProps.push(r);
                    return !0
                }
            }),
            o = s.e._gsDefine.plugin({
                propName: "roundProps",
                version: "1.7.0",
                priority: -1,
                API: 2,
                init: function(t, e, i) {
                    return this._tween = i, !0
                }
            }),
            l = function(t) {
                var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
                return function(i) {
                    return (Math.round(i / t) * t * e | 0) / e
                }
            },
            h = function(t, e) {
                for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next
            },
            _ = o.prototype;
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
        _._onInitAllProps = function() {
            var t, e, i, s, r = this._tween,
                n = r.vars.roundProps,
                a = {},
                o = r._propLookup.roundProps;
            if ("object" != typeof n || n.push)
                for ("string" == typeof n && (n = n.split(",")), i = n.length; --i > -1;) a[n[i]] = Math.round;
            else
                for (s in n) a[s] = l(n[s]);
            for (s in a)
                for (t = r._firstPT; t;) e = t._next, t.pg ? t.t._mod(a) : t.n === s && (2 === t.f && t.t ? h(t.t._firstPT, a[s]) : (this._add(t.t, s, t.s, t.c, a[s]), e && (e._prev = t._prev), t._prev ? t._prev._next = e : r._firstPT === t && (r._firstPT = e), t._next = t._prev = null, r._propLookup[s] = o)), t = e;
            return !1
        }, _._add = function(t, e, i, s, r) {
            this._addTween(t, e, i, i + s, e, r || Math.round), this._overwriteProps.push(e)
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
        var u = s.e._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function(t, e, i, s) {
                "object" != typeof e && (e = {
                    rotation: e
                }), this.finals = {};
                var r, n, a, o, l, h, _ = !0 === e.useRadians ? 2 * Math.PI : 360;
                for (r in e) "useRadians" !== r && ("function" == typeof(o = e[r]) && (o = o(s, t)), n = (h = (o + "").split("_"))[0], a = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), l = (o = this.finals[r] = "string" == typeof n && "=" === n.charAt(1) ? a + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0) - a, h.length && (-1 !== (n = h.join("_")).indexOf("short") && (l %= _) !== l % (_ / 2) && (l = l < 0 ? l + _ : l - _), -1 !== n.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * _) % _ - (l / _ | 0) * _ : -1 !== n.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * _) % _ - (l / _ | 0) * _)), (l > 1e-6 || l < -1e-6) && (this._addTween(t, r, a, a + l, r), this._overwriteProps.push(r)));
                return !0
            },
            set: function(t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t);
                else
                    for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
        });
        u._autoCSS = !0,
            /*!
             * VERSION: 2.1.3
             * DATE: 2019-05-17
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             * 
             * @author: Jack Doyle, jack@greensock.com
             */
            s.e._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() {
                var t = function(t) {
                        s.c.call(this, t);
                        var e, i, r = this.vars;
                        for (i in this._labels = {}, this.autoRemoveChildren = !!r.autoRemoveChildren, this.smoothChildTiming = !!r.smoothChildTiming, this._sortChildren = !0, this._onUpdate = r.onUpdate, r) e = r[i], n(e) && -1 !== e.join("").indexOf("{self}") && (r[i] = this._swapSelfInParams(e));
                        n(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    e = s.f._internals,
                    i = t._internals = {},
                    r = e.isSelector,
                    n = e.isArray,
                    a = e.lazyTweens,
                    o = e.lazyRender,
                    l = s.e._gsDefine.globals,
                    h = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    _ = function(t, e, i) {
                        var s, r, n = t.cycle;
                        for (s in n) r = n[s], t[s] = "function" == typeof r ? r(i, e[i], e) : r[i % r.length];
                        delete t.cycle
                    },
                    u = i.pauseCallback = function() {},
                    f = function(t, e, i, s) {
                        var r = "immediateRender";
                        return r in e || (e[r] = !(i && !1 === i[r] || s)), e
                    },
                    c = function(t) {
                        if ("function" == typeof t) return t;
                        var e = "object" == typeof t ? t : {
                                each: t
                            },
                            i = e.ease,
                            s = e.from || 0,
                            r = e.base || 0,
                            n = {},
                            a = isNaN(s),
                            o = e.axis,
                            l = {
                                center: .5,
                                end: 1
                            }[s] || 0;
                        return function(t, h, _) {
                            var u, f, c, p, m, d, g, v, y, T = (_ || e).length,
                                x = n[T];
                            if (!x) {
                                if (!(y = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                                    for (g = -1 / 0; g < (g = _[y++].getBoundingClientRect().left) && y < T;);
                                    y--
                                }
                                for (x = n[T] = [], u = a ? Math.min(y, T) * l - .5 : s % y, f = a ? T * l / y - .5 : s / y | 0, g = 0, v = 1 / 0, d = 0; d < T; d++) c = d % y - u, p = f - (d / y | 0), x[d] = m = o ? Math.abs("y" === o ? p : c) : Math.sqrt(c * c + p * p), m > g && (g = m), m < v && (v = m);
                                x.max = g - v, x.min = v, x.v = T = e.amount || e.each * (y > T ? T - 1 : o ? "y" === o ? T / y : y : Math.max(y, T / y)) || 0, x.b = T < 0 ? r - T : r
                            }
                            return T = (x[t] - x.min) / x.max, x.b + (i ? i.getRatio(T) : T) * x.v
                        }
                    },
                    p = t.prototype = new s.c;
                return t.version = "2.1.3", t.distribute = c, p.constructor = t, p.kill()._gc = p._forcingPlayhead = p._hasPause = !1, p.to = function(t, e, i, r) {
                    var n = i.repeat && l.TweenMax || s.f;
                    return e ? this.add(new n(t, e, i), r) : this.set(t, i, r)
                }, p.from = function(t, e, i, r) {
                    return this.add((i.repeat && l.TweenMax || s.f).from(t, e, f(0, i)), r)
                }, p.fromTo = function(t, e, i, r, n) {
                    var a = r.repeat && l.TweenMax || s.f;
                    return r = f(0, r, i), e ? this.add(a.fromTo(t, e, i, r), n) : this.set(t, r, n)
                }, p.staggerTo = function(e, i, n, a, o, l, u, f) {
                    var p, m, d = new t({
                            onComplete: l,
                            onCompleteParams: u,
                            callbackScope: f,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = c(n.stagger || a),
                        v = n.startAt,
                        y = n.cycle;
                    for ("string" == typeof e && (e = s.f.selector(e) || e), r(e = e || []) && (e = function(t) {
                            var e, i = [],
                                s = t.length;
                            for (e = 0; e !== s; i.push(t[e++]));
                            return i
                        }(e)), m = 0; m < e.length; m++) p = h(n), v && (p.startAt = h(v), v.cycle && _(p.startAt, e, m)), y && (_(p, e, m), null != p.duration && (i = p.duration, delete p.duration)), d.to(e[m], i, p, g(m, e[m], e));
                    return this.add(d, o)
                }, p.staggerFrom = function(t, e, i, s, r, n, a, o) {
                    return i.runBackwards = !0, this.staggerTo(t, e, f(0, i), s, r, n, a, o)
                }, p.staggerFromTo = function(t, e, i, s, r, n, a, o, l) {
                    return s.startAt = i, this.staggerTo(t, e, f(0, s, i), r, n, a, o, l)
                }, p.call = function(t, e, i, r) {
                    return this.add(s.f.delayedCall(0, t, e, i), r)
                }, p.set = function(t, e, i) {
                    return this.add(new s.f(t, 0, f(0, e, null, !0)), i)
                }, t.exportRoot = function(e, i) {
                    null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
                    var r, n, a, o, l = new t(e),
                        h = l._timeline;
                    for (null == i && (i = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, a = h._first; a;) o = a._next, i && a instanceof s.f && a.target === a.vars.onComplete || ((n = a._startTime - a._delay) < 0 && (r = 1), l.add(a, n)), a = o;
                    return h.add(l, 0), r && l.totalDuration(), l
                }, p.add = function(e, i, r, a) {
                    var o, l, h, _, u, f;
                    if ("number" != typeof i && (i = this._parseTimeOrLabel(i, 0, !0, e)), !(e instanceof s.a)) {
                        if (e instanceof Array || e && e.push && n(e)) {
                            for (r = r || "normal", a = a || 0, o = i, l = e.length, h = 0; h < l; h++) n(_ = e[h]) && (_ = new t({
                                tweens: _
                            })), this.add(_, o), "string" != typeof _ && "function" != typeof _ && ("sequence" === r ? o = _._startTime + _.totalDuration() / _._timeScale : "start" === r && (_._startTime -= _.delay())), o += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof e) return this.addLabel(e, i);
                        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                        e = s.f.delayedCall(0, e)
                    }
                    if (s.c.prototype.add.call(this, e, i), (e._time || !e._duration && e._initted) && (o = (this.rawTime() - e._startTime) * e._timeScale, (!e._duration || Math.abs(Math.max(0, Math.min(e.totalDuration(), o))) - e._totalTime > 1e-5) && e.render(o, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = (u = this).rawTime() > e._startTime; u._timeline;) f && u._timeline.smoothChildTiming ? u.totalTime(u._totalTime, !0) : u._gc && u._enabled(!0, !1), u = u._timeline;
                    return this
                }, p.remove = function(t) {
                    if (t instanceof s.a) {
                        this._remove(t, !1);
                        var e = t._timeline = t.vars.useFrames ? s.a._rootFramesTimeline : s.a._rootTimeline;
                        return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                    }
                    if (t instanceof Array || t && t.push && n(t)) {
                        for (var i = t.length; --i > -1;) this.remove(t[i]);
                        return this
                    }
                    return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
                }, p._remove = function(t, e) {
                    return s.c.prototype._remove.call(this, t, e), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, p.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, p.insert = p.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, p.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, p.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, p.addPause = function(t, e, i, r) {
                    var n = s.f.delayedCall(0, u, i, r || this);
                    return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, this.add(n, t)
                }, p.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, p.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, p._parseTimeOrLabel = function(t, e, i, r) {
                    var a, o;
                    if (r instanceof s.a && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && n(r)))
                        for (o = r.length; --o > -1;) r[o] instanceof s.a && r[o].timeline === this && this.remove(r[o]);
                    if (a = "number" != typeof t || e ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof e) return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - a : 0, i);
                    if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = a);
                    else {
                        if (-1 === (o = t.indexOf("="))) return null == this._labels[t] ? i ? this._labels[t] = a + e : e : this._labels[t] + e;
                        e = parseInt(t.charAt(o - 1) + "1", 10) * Number(t.substr(o + 1)), t = o > 1 ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, i) : a
                    }
                    return Number(t) + e
                }, p.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                }, p.stop = function() {
                    return this.paused(!0)
                }, p.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, p.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, p.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, r, n, l, h, _, u, f, c = this._time,
                        p = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._startTime,
                        d = this._timeScale,
                        g = this._paused;
                    if (c !== this._time && (t += this._time - c), this._hasPause && !this._forcingPlayhead && !e) {
                        if (t > c)
                            for (s = this._first; s && s._startTime <= t && !_;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (_ = s), s = s._next;
                        else
                            for (s = this._last; s && s._startTime >= t && !_;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (_ = s), s = s._prev;
                        _ && (this._time = this._totalTime = t = _._startTime, f = this._startTime + (this._reversed ? this._duration - t : t) / this._timeScale)
                    }
                    if (t >= p - 1e-8 && t >= 0) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (r = !0, l = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-8 || this._rawPrevTime < 0 || 1e-8 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > 1e-8 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8, t = p + 1e-4;
                    else if (t < 1e-8)
                        if (this._totalTime = this._time = 0, t > -1e-8 && (t = 0), (0 !== c || 0 === this._duration && 1e-8 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (l = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = r = !0, l = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8, 0 === t && r)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (r = !1), s = s._next;
                            t = 0, this._initted || (h = !0)
                        }
                    else this._totalTime = this._time = this._rawPrevTime = t;
                    if (this._time !== c && this._first || i || h || _) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (u = this._time) >= c)
                            for (s = this._first; s && (n = s._next, u === this._time && (!this._paused || g));)(s._active || s._startTime <= u && !s._paused && !s._gc) && (_ === s && (this.pause(), this._pauseTime = f), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n;
                        else
                            for (s = this._last; s && (n = s._prev, u === this._time && (!this._paused || g));) {
                                if (s._active || s._startTime <= c && !s._paused && !s._gc) {
                                    if (_ === s) {
                                        for (_ = s._prev; _ && _.endTime() > this._time;) _.render(_._reversed ? _.totalDuration() - (t - _._startTime) * _._timeScale : (t - _._startTime) * _._timeScale, e, i), _ = _._prev;
                                        _ = null, this.pause(), this._pauseTime = f
                                    }
                                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                                }
                                s = n
                            }
                        this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), l && (this._gc || m !== this._startTime && d === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (r && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                    }
                }, p._hasPausedChild = function() {
                    for (var e = this._first; e;) {
                        if (e._paused || e instanceof t && e._hasPausedChild()) return !0;
                        e = e._next
                    }
                    return !1
                }, p.getChildren = function(t, e, i, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a;) a._startTime < r || (a instanceof s.f ? !1 !== e && (n[o++] = a) : (!1 !== i && (n[o++] = a), !1 !== t && (o = (n = n.concat(a.getChildren(!0, e, i))).length))), a = a._next;
                    return n
                }, p.getTweensOf = function(t, e) {
                    var i, r, n = this._gc,
                        a = [],
                        o = 0;
                    for (n && this._enabled(!0, !0), r = (i = s.f.getTweensOf(t)).length; --r > -1;)(i[r].timeline === this || e && this._contains(i[r])) && (a[o++] = i[r]);
                    return n && this._enabled(!1, !0), a
                }, p.recent = function() {
                    return this._recent
                }, p._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, p.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, p._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                    return r
                }, p.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, p.invalidate = function() {
                    for (var t = this._first; t;) t.invalidate(), t = t._next;
                    return s.a.prototype.invalidate.call(this)
                }, p._enabled = function(t, e) {
                    if (t === this._gc)
                        for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
                    return s.c.prototype._enabled.call(this, t, e)
                }, p.totalTime = function(t, e, i) {
                    this._forcingPlayhead = !0;
                    var r = s.a.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, p.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, p.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this, n = r._last, a = 999999999999; n;) e = n._prev, n._dirty && n.totalDuration(), n._startTime > a && r._sortChildren && !n._paused && !r._calculatingDuration ? (r._calculatingDuration = 1, r.add(n, n._startTime - n._delay), r._calculatingDuration = 0) : a = n._startTime, n._startTime < 0 && !n._paused && (s -= n._startTime, r._timeline.smoothChildTiming && (r._startTime += n._startTime / r._timeScale, r._time -= n._startTime, r._totalTime -= n._startTime, r._rawPrevTime -= n._startTime), r.shiftChildren(-n._startTime, !1, -9999999999), a = 0), (i = n._startTime + n._totalDuration / n._timeScale) > s && (s = i), n = e;
                            r._duration = r._totalDuration = s, r._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, p.paused = function(t) {
                    if (!1 === t && this._paused)
                        for (var e = this._first; e;) e._startTime === this._time && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next;
                    return s.a.prototype.paused.apply(this, arguments)
                }, p.usesFrames = function() {
                    for (var t = this._timeline; t._timeline;) t = t._timeline;
                    return t === s.a._rootFramesTimeline
                }, p.rawTime = function(t) {
                    return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                }, t
            }, !0);
        var f = s.g.TimelineLite;
        /*!
         * VERSION: 2.1.3
         * DATE: 2019-05-17
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         */
        s.e._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function() {
            var t = function(t) {
                    f.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0
                },
                e = s.f._internals,
                i = e.lazyTweens,
                r = e.lazyRender,
                n = s.e._gsDefine.globals,
                a = new s.b(null, null, 1, 0),
                o = t.prototype = new f;
            return o.constructor = t, o.kill()._gc = !1, t.version = "2.1.3", o.invalidate = function() {
                return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), f.prototype.invalidate.call(this)
            }, o.addCallback = function(t, e, i, r) {
                return this.add(s.f.delayedCall(0, t, i, r), e)
            }, o.removeCallback = function(t, e) {
                if (t)
                    if (null == e) this._kill(null, t);
                    else
                        for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                return this
            }, o.removePause = function(t) {
                return this.removeCallback(f._internals.pauseCallback, t)
            }, o.tweenTo = function(t, e) {
                e = e || {};
                var i, r, o, l = {
                        ease: a,
                        useFrames: this.usesFrames(),
                        immediateRender: !1,
                        lazy: !1
                    },
                    h = e.repeat && n.TweenMax || s.f;
                for (r in e) l[r] = e[r];
                return l.time = this._parseTimeOrLabel(t), i = Math.abs(Number(l.time) - this._time) / this._timeScale || .001, o = new h(this, i, l), l.onStart = function() {
                    o.target.paused(!0), o.vars.time === o.target.time() || i !== o.duration() || o.isFromTo || o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale).render(o.time(), !0, !0), e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || o, e.onStartParams || [])
                }, o
            }, o.tweenFromTo = function(t, e, i) {
                i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    callbackScope: this
                }, i.immediateRender = !1 !== i.immediateRender;
                var s = this.tweenTo(e, i);
                return s.isFromTo = 1, s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
            }, o.render = function(t, e, s) {
                this._gc && this._enabled(!0, !1);
                var n, a, o, l, h, _, u, f, c, p = this._time,
                    m = this._dirty ? this.totalDuration() : this._totalDuration,
                    d = this._duration,
                    g = this._totalTime,
                    v = this._startTime,
                    y = this._timeScale,
                    T = this._rawPrevTime,
                    x = this._paused,
                    w = this._cycle;
                if (p !== this._time && (t += this._time - p), t >= m - 1e-8 && t >= 0) this._locked || (this._totalTime = m, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, l = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-8 || T < 0 || 1e-8 === T) && T !== t && this._first && (h = !0, T > 1e-8 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8, this._yoyo && 1 & this._cycle ? this._time = t = 0 : (this._time = d, t = d + 1e-4);
                else if (t < 1e-8)
                    if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, t > -1e-8 && (t = 0), (0 !== p || 0 === d && 1e-8 !== T && (T > 0 || t < 0 && T >= 0) && !this._locked) && (l = "onReverseComplete", a = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = a = !0, l = "onReverseComplete") : T >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : 1e-8, 0 === t && a)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (a = !1), n = n._next;
                        t = 0, this._initted || (h = !0)
                    }
                else 0 === d && T < 0 && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (_ = d + this._repeatDelay, this._cycle = this._totalTime / _ >> 0, this._cycle && this._cycle === this._totalTime / _ && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * _, this._yoyo && 1 & this._cycle && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time));
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if ((t = this._time) > p || this._repeat && w !== this._cycle)
                        for (n = this._first; n && n._startTime <= t && !u;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= t && !u;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n), n = n._prev;
                    u && (c = this._startTime + (this._reversed ? this._duration - u._startTime : u._startTime) / this._timeScale, u._startTime < d && (this._time = this._rawPrevTime = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)))
                }
                if (this._cycle !== w && !this._locked) {
                    var b = this._yoyo && 0 != (1 & w),
                        P = b === (this._yoyo && 0 != (1 & this._cycle)),
                        k = this._totalTime,
                        O = this._cycle,
                        S = this._rawPrevTime,
                        A = this._time;
                    if (this._totalTime = w * d, this._cycle < w ? b = !b : this._totalTime += d, this._time = p, this._rawPrevTime = 0 === d ? T - 1e-4 : T, this._cycle = w, this._locked = !0, p = b ? 0 : d, this.render(p, e, 0 === d), e || this._gc || this.vars.onRepeat && (this._cycle = O, this._locked = !1, this._callback("onRepeat")), p !== this._time) return;
                    if (P && (this._cycle = w, this._locked = !0, p = b ? d + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !x) return;
                    this._time = A, this._totalTime = k, this._cycle = O, this._rawPrevTime = S
                }
                if (this._time !== p && this._first || s || h || u) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (f = this._time) >= p)
                        for (n = this._first; n && (o = n._next, f === this._time && (!this._paused || x));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (u === n && (this.pause(), this._pauseTime = c), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, s) : n.render((t - n._startTime) * n._timeScale, e, s)), n = o;
                    else
                        for (n = this._last; n && (o = n._prev, f === this._time && (!this._paused || x));) {
                            if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                                if (u === n) {
                                    for (u = n._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, s), u = u._prev;
                                    u = null, this.pause(), this._pauseTime = c
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, s) : n.render((t - n._startTime) * n._timeScale, e, s)
                            }
                            n = o
                        }
                    this._onUpdate && (e || (i.length && r(), this._callback("onUpdate"))), l && (this._locked || this._gc || v !== this._startTime && y === this._timeScale || (0 === this._time || m >= this.totalDuration()) && (a && (i.length && r(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, o.getActive = function(t, e, i) {
                var s, r, n = [],
                    a = this.getChildren(t || null == t, e || null == t, !!i),
                    o = 0,
                    l = a.length;
                for (s = 0; s < l; s++)(r = a[s]).isActive() && (n[o++] = r);
                return n
            }, o.getLabelAfter = function(t) {
                t || 0 !== t && (t = this._time);
                var e, i = this.getLabelsArray(),
                    s = i.length;
                for (e = 0; e < s; e++)
                    if (i[e].time > t) return i[e].name;
                return null
            }, o.getLabelBefore = function(t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                    if (e[i].time < t) return e[i].name;
                return null
            }, o.getLabelsArray = function() {
                var t, e = [],
                    i = 0;
                for (t in this._labels) e[i++] = {
                    time: this._labels[t],
                    name: t
                };
                return e.sort(function(t, e) {
                    return t.time - e.time
                }), e
            }, o.invalidate = function() {
                return this._locked = !1, f.prototype.invalidate.call(this)
            }, o.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
            }, o.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
            }, o.totalDuration = function(t) {
                return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (f.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, o.time = function(t, e) {
                if (!arguments.length) return this._time;
                this._dirty && this.totalDuration();
                var i = this._duration,
                    s = this._cycle,
                    r = s * (i + this._repeatDelay);
                return t > i && (t = i), this.totalTime(this._yoyo && 1 & s ? i - t + r : this._repeat ? t + r : t, e)
            }, o.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, o.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, o.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, o.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
            }, t
        }, !0);
        var c = s.g.TimelineMax,
            p = 180 / Math.PI,
            m = [],
            d = [],
            g = [],
            v = {},
            y = s.e._gsDefine.globals,
            T = function(t, e, i, s) {
                i === s && (i = s - (s - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
            },
            x = function(t, e, i, s) {
                var r = {
                        a: t
                    },
                    n = {},
                    a = {},
                    o = {
                        c: s
                    },
                    l = (t + e) / 2,
                    h = (e + i) / 2,
                    _ = (i + s) / 2,
                    u = (l + h) / 2,
                    f = (h + _) / 2,
                    c = (f - u) / 8;
                return r.b = l + (t - l) / 4, n.b = u + c, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + f) / 2, a.b = f - c, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
            },
            w = function(t, e, i, s, r) {
                var n, a, o, l, h, _, u, f, c, p, v, y, T, w = t.length - 1,
                    b = 0,
                    P = t[0].a;
                for (n = 0; n < w; n++) a = (h = t[b]).a, o = h.d, l = t[b + 1].d, r ? (v = m[n], T = ((y = d[n]) + v) * e * .25 / (s ? .5 : g[n] || .5), f = o - ((_ = o - (o - a) * (s ? .5 * e : 0 !== v ? T / v : 0)) + (((u = o + (l - o) * (s ? .5 * e : 0 !== y ? T / y : 0)) - _) * (3 * v / (v + y) + .5) / 4 || 0))) : f = o - ((_ = o - (o - a) * e * .5) + (u = o + (l - o) * e * .5)) / 2, _ += f, u += f, h.c = c = _, h.b = 0 !== n ? P : P = h.a + .6 * (h.c - h.a), h.da = o - a, h.ca = c - a, h.ba = P - a, i ? (p = x(a, P, c, o), t.splice(b, 1, p[0], p[1], p[2], p[3]), b += 4) : b++, P = u;
                (h = t[b]).b = P, h.c = P + .4 * (h.d - P), h.da = h.d - h.a, h.ca = h.c - h.a, h.ba = P - h.a, i && (p = x(h.a, P, h.c, h.d), t.splice(b, 1, p[0], p[1], p[2], p[3]))
            },
            b = function(t, e, i, s) {
                var r, n, a, o, l, h, _ = [];
                if (s)
                    for (n = (t = [s].concat(t)).length; --n > -1;) "string" == typeof(h = t[n][e]) && "=" === h.charAt(1) && (t[n][e] = s[e] + Number(h.charAt(0) + h.substr(2)));
                if ((r = t.length - 2) < 0) return _[0] = new T(t[0][e], 0, 0, t[0][e]), _;
                for (n = 0; n < r; n++) a = t[n][e], o = t[n + 1][e], _[n] = new T(a, 0, 0, o), i && (l = t[n + 2][e], m[n] = (m[n] || 0) + (o - a) * (o - a), d[n] = (d[n] || 0) + (l - o) * (l - o));
                return _[n] = new T(t[n][e], 0, 0, t[n + 1][e]), _
            },
            P = function(t, e, i, s, r, n) {
                var a, o, l, h, _, u, f, c, p = {},
                    y = [],
                    T = n || t[0];
                for (o in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) y.push(o);
                if (t.length > 1) {
                    for (c = t[t.length - 1], f = !0, a = y.length; --a > -1;)
                        if (o = y[a], Math.abs(T[o] - c[o]) > .05) {
                            f = !1;
                            break
                        }
                    f && (t = t.concat(), n && t.unshift(n), t.push(t[1]), n = t[t.length - 3])
                }
                for (m.length = d.length = g.length = 0, a = y.length; --a > -1;) o = y[a], v[o] = -1 !== r.indexOf("," + o + ","), p[o] = b(t, o, v[o], n);
                for (a = m.length; --a > -1;) m[a] = Math.sqrt(m[a]), d[a] = Math.sqrt(d[a]);
                if (!s) {
                    for (a = y.length; --a > -1;)
                        if (v[o])
                            for (u = (l = p[y[a]]).length - 1, h = 0; h < u; h++) _ = l[h + 1].da / d[h] + l[h].da / m[h] || 0, g[h] = (g[h] || 0) + _ * _;
                    for (a = g.length; --a > -1;) g[a] = Math.sqrt(g[a])
                }
                for (a = y.length, h = i ? 4 : 1; --a > -1;) l = p[o = y[a]], w(l, e, i, s, v[o]), f && (l.splice(0, h), l.splice(l.length - h, h));
                return p
            },
            k = function(t, e, i) {
                for (var s, r, n, a, o, l, h, _, u, f, c, p = 1 / i, m = t.length; --m > -1;)
                    for (n = (f = t[m]).a, a = f.d - n, o = f.c - n, l = f.b - n, s = r = 0, _ = 1; _ <= i; _++) s = r - (r = ((h = p * _) * h * a + 3 * (u = 1 - h) * (h * o + u * l)) * h), e[c = m * i + _ - 1] = (e[c] || 0) + s * s
            },
            O = s.e._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.9",
                API: 2,
                global: !0,
                init: function(t, e, i) {
                    this._target = t, e instanceof Array && (e = {
                        values: e
                    }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                    var s, r, n, a, o, l = e.values || [],
                        h = {},
                        _ = l[0],
                        u = e.autoRotate || i.vars.orientToBezier;
                    for (s in this._autoRotate = u ? u instanceof Array ? u : [
                            ["x", "y", "rotation", !0 === u ? 0 : Number(u) || 0]
                        ] : null, _) this._props.push(s);
                    for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], h[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || h[s] !== l[0][s] && (o = h);
                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? P(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : function(t, e, i) {
                            var s, r, n, a, o, l, h, _, u, f, c, p = {},
                                m = "cubic" === (e = e || "soft") ? 3 : 2,
                                d = "soft" === e,
                                g = [];
                            if (d && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                            for (u in t[0]) g.push(u);
                            for (l = g.length; --l > -1;) {
                                for (p[u = g[l]] = o = [], f = 0, _ = t.length, h = 0; h < _; h++) s = null == i ? t[h][u] : "string" == typeof(c = t[h][u]) && "=" === c.charAt(1) ? i[u] + Number(c.charAt(0) + c.substr(2)) : Number(c), d && h > 1 && h < _ - 1 && (o[f++] = (s + o[f - 2]) / 2), o[f++] = s;
                                for (_ = f - m + 1, f = 0, h = 0; h < _; h += m) s = o[h], r = o[h + 1], n = o[h + 2], a = 2 === m ? 0 : o[h + 3], o[f++] = c = 3 === m ? new T(s, r, n, a) : new T(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                                o.length = f
                            }
                            return p
                        }(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
                        var f = function(t, e) {
                            var i, s, r, n, a = [],
                                o = [],
                                l = 0,
                                h = 0,
                                _ = (e = e >> 0 || 6) - 1,
                                u = [],
                                f = [];
                            for (i in t) k(t[i], a, e);
                            for (r = a.length, s = 0; s < r; s++) l += Math.sqrt(a[s]), f[n = s % e] = l, n === _ && (h += l, u[n = s / e >> 0] = f, o[n] = h, l = 0, f = []);
                            return {
                                length: h,
                                lengths: o,
                                segments: u
                            }
                        }(this._beziers, this._timeRes);
                        this._length = f.length, this._lengths = f.lengths, this._segments = f.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (u = this._autoRotate)
                        for (this._initialRotations = [], u[0] instanceof Array || (this._autoRotate = u = [u]), n = u.length; --n > -1;) {
                            for (a = 0; a < 3; a++) s = u[n][a], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                            s = u[n][2], this._initialRotations[n] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0, this._overwriteProps.push(s)
                        }
                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                },
                set: function(t) {
                    var e, i, s, r, n, a, o, l, h, _, u, f = this._segCount,
                        c = this._func,
                        m = this._target,
                        d = t !== this._startRatio;
                    if (this._timeRes) {
                        if (h = this._lengths, _ = this._curSeg, u = t * this._length, s = this._li, u > this._l2 && s < f - 1) {
                            for (l = f - 1; s < l && (this._l2 = h[++s]) <= u;);
                            this._l1 = h[s - 1], this._li = s, this._curSeg = _ = this._segments[s], this._s2 = _[this._s1 = this._si = 0]
                        } else if (u < this._l1 && s > 0) {
                            for (; s > 0 && (this._l1 = h[--s]) >= u;);
                            0 === s && u < this._l1 ? this._l1 = 0 : s++, this._l2 = h[s], this._li = s, this._curSeg = _ = this._segments[s], this._s1 = _[(this._si = _.length - 1) - 1] || 0, this._s2 = _[this._si]
                        }
                        if (e = s, u -= this._l1, s = this._si, u > this._s2 && s < _.length - 1) {
                            for (l = _.length - 1; s < l && (this._s2 = _[++s]) <= u;);
                            this._s1 = _[s - 1], this._si = s
                        } else if (u < this._s1 && s > 0) {
                            for (; s > 0 && (this._s1 = _[--s]) >= u;);
                            0 === s && u < this._s1 ? this._s1 = 0 : s++, this._s2 = _[s], this._si = s
                        }
                        a = 1 === t ? 1 : (s + (u - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else a = (t - (e = t < 0 ? 0 : t >= 1 ? f - 1 : f * t >> 0) * (1 / f)) * f;
                    for (i = 1 - a, s = this._props.length; --s > -1;) r = this._props[s], o = (a * a * (n = this._beziers[r][e]).da + 3 * i * (a * n.ca + i * n.ba)) * a + n.a, this._mod[r] && (o = this._mod[r](o, m)), c[r] ? m[r](o) : m[r] = o;
                    if (this._autoRotate) {
                        var g, v, y, T, x, w, b, P = this._autoRotate;
                        for (s = P.length; --s > -1;) r = P[s][2], w = P[s][3] || 0, b = !0 === P[s][4] ? 1 : p, n = this._beziers[P[s][0]], g = this._beziers[P[s][1]], n && g && (n = n[e], g = g[e], v = n.a + (n.b - n.a) * a, v += ((T = n.b + (n.c - n.b) * a) - v) * a, T += (n.c + (n.d - n.c) * a - T) * a, y = g.a + (g.b - g.a) * a, y += ((x = g.b + (g.c - g.b) * a) - y) * a, x += (g.c + (g.d - g.c) * a - x) * a, o = d ? Math.atan2(x - y, T - v) * b + w : this._initialRotations[s], this._mod[r] && (o = this._mod[r](o, m)), c[r] ? m[r](o) : m[r] = o)
                    }
                }
            }),
            S = O.prototype;
        /*!
         * VERSION: 1.3.9
         * DATE: 2019-05-17
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         **/
        O.bezierThrough = P, O.cubicToQuadratic = x, O._autoCSS = !0, O.quadraticToCubic = function(t, e, i) {
                return new T(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
            }, O._cssRegister = function() {
                var t = y.CSSPlugin;
                if (t) {
                    var e = t._internals,
                        i = e._parseToProxy,
                        s = e._setPluginRatio,
                        r = e.CSSPropTween;
                    e._registerComplexSpecialProp("bezier", {
                        parser: function(t, e, n, a, o, l) {
                            e instanceof Array && (e = {
                                values: e
                            }), l = new O;
                            var h, _, u, f = e.values,
                                c = f.length - 1,
                                p = [],
                                m = {};
                            if (c < 0) return o;
                            for (h = 0; h <= c; h++) u = i(t, f[h], a, o, l, c !== h), p[h] = u.end;
                            for (_ in e) m[_] = e[_];
                            return m.values = p, (o = new r(t, "bezier", 0, 0, u.pt, 2)).data = u, o.plugin = l, o.setRatio = s, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = !0 === m.autoRotate ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [
                                ["left", "top", "rotation", h, !1]
                            ] : null != u.end.x && [
                                ["x", "y", "rotation", h, !1]
                            ]), m.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), l._onInitTween(u.proxy, m, a._tween), o
                        }
                    })
                }
            }, S._mod = function(t) {
                for (var e, i = this._overwriteProps, s = i.length; --s > -1;)(e = t[i[s]]) && "function" == typeof e && (this._mod[i[s]] = e)
            }, S._kill = function(t) {
                var e, i, s = this._props;
                for (e in this._beziers)
                    if (e in t)
                        for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                if (s = this._autoRotate)
                    for (i = s.length; --i > -1;) t[s[i][2]] && s.splice(i, 1);
                return this._super._kill.call(this, t)
            },
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
            s.e._gsDefine("easing.Back", ["easing.Ease"], function() {
                var t, e, i, r, n = s.e.GreenSockGlobals || s.e,
                    a = n.com.greensock,
                    o = 2 * Math.PI,
                    l = Math.PI / 2,
                    h = a._class,
                    _ = function(t, e) {
                        var i = h("easing." + t, function() {}, !0),
                            r = i.prototype = new s.b;
                        return r.constructor = i, r.getRatio = e, i
                    },
                    u = s.b.register || function() {},
                    f = function(t, e, i, s, r) {
                        var n = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return u(n, t), n
                    },
                    c = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    p = function(t, e) {
                        var i = h("easing." + t, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = i.prototype = new s.b;
                        return r.constructor = i, r.getRatio = e, r.config = function(t) {
                            return new i(t)
                        }, i
                    },
                    m = f("Back", p("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), p("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), p("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    d = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                    }, !0),
                    g = d.prototype = new s.b;
                return g.constructor = d, g.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, d.ease = new d(.7, .7), g.config = d.config = function(t, e, i) {
                    return new d(t, e, i)
                }, (g = (t = h("easing.SteppedEase", function(t, e) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
                }, !0)).prototype = new s.b).constructor = t, g.getRatio = function(t) {
                    return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
                }, g.config = t.config = function(e, i) {
                    return new t(e, i)
                }, (g = (e = h("easing.ExpoScaleEase", function(t, e, i) {
                    this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i
                }, !0)).prototype = new s.b).constructor = e, g.getRatio = function(t) {
                    return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
                }, g.config = e.config = function(t, i, s) {
                    return new e(t, i, s)
                }, (g = (i = h("easing.RoughEase", function(t) {
                    for (var e, i, r, n, a, o, l = (t = t || {}).taper || "none", h = [], _ = 0, u = 0 | (t.points || 20), f = u, p = !1 !== t.randomize, m = !0 === t.clamp, d = t.template instanceof s.b ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --f > -1;) e = p ? Math.random() : 1 / u * f, i = d ? d.getRatio(e) : e, r = "none" === l ? g : "out" === l ? (n = 1 - e) * n * g : "in" === l ? e * e * g : e < .5 ? (n = 2 * e) * n * .5 * g : (n = 2 * (1 - e)) * n * .5 * g, p ? i += Math.random() * r - .5 * r : f % 2 ? i += .5 * r : i -= .5 * r, m && (i > 1 ? i = 1 : i < 0 && (i = 0)), h[_++] = {
                        x: e,
                        y: i
                    };
                    for (h.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new c(1, 1, null), f = u; --f > -1;) a = h[f], o = new c(a.x, a.y, o);
                    this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
                }, !0)).prototype = new s.b).constructor = i, g.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function(t) {
                    return new i(t)
                }, i.ease = new i, f("Bounce", _("BounceOut", function(t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), _("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), _("BounceInOut", function(t) {
                    var e = t < .5;
                    return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), f("Circ", _("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), _("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), _("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), f("Elastic", (r = function(t, e, i) {
                    var r = h("easing." + t, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || i) / (t < 1 ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                        }, !0),
                        n = r.prototype = new s.b;
                    return n.constructor = r, n.getRatio = e, n.config = function(t, e) {
                        return new r(t, e)
                    }, r
                })("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), r("ElasticIn", function(t) {
                    return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                }, .3), r("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), f("Expo", _("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), _("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), _("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), f("Sine", _("SineOut", function(t) {
                    return Math.sin(t * l)
                }), _("SineIn", function(t) {
                    return 1 - Math.cos(t * l)
                }), _("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function(t) {
                        return s.b.map[t]
                    }
                }, !0), u(n.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(t, "SteppedEase", "ease,"), m
            }, !0);
        var A = s.g.Back,
            R = s.g.Elastic,
            C = s.g.Bounce,
            D = s.g.RoughEase,
            M = s.g.SlowMo,
            E = s.g.SteppedEase,
            I = s.g.Circ,
            F = s.g.Expo,
            z = s.g.Sine,
            L = s.g.ExpoScaleEase,
            N = r;
        N._autoActivated = [f, c, n, a, O, o, u, A, R, C, D, M, E, I, F, z, L], i.d(e, "b", function() {
            return N
        }), i.d(e, "a", function() {
            return N
        })
    }, function(t, e, i) {
        "use strict";
        var s = i(9);

        function r() {
            var t = navigator.userAgent.toLowerCase(),
                e = navigator.appVersion.toLowerCase(),
                i = /windows phone|iemobile|wpdesktop/.test(t),
                s = !i && /android.*mobile/.test(t),
                r = !i && !s && /android/i.test(t),
                n = s || r,
                a = !i && /ip(hone|od|ad)/i.test(t) && !window.MSStream,
                o = !i && /ipad/i.test(t) && a,
                l = r || o,
                h = s || a && !o || i,
                _ = h || l,
                u = t.indexOf("firefox") > -1,
                f = !!t.match(/version\/[\d\.]+.*safari/),
                c = t.indexOf("opr") > -1,
                p = !window.ActiveXObject && "ActiveXObject" in window,
                m = e.indexOf("msie") > -1 || p || e.indexOf("edge") > -1,
                d = t.indexOf("edge") > -1,
                g = null !== window.chrome && void 0 !== window.chrome && "google inc." == navigator.vendor.toLowerCase() && !c && !d;
            this.infos = {
                isDroid: n,
                isDroidPhone: s,
                isDroidTablet: r,
                isWindowsPhone: i,
                isIos: a,
                isIpad: o,
                isDevice: _,
                isEdge: d,
                isIE: m,
                isIE11: p,
                isPhone: h,
                isTablet: l,
                isFirefox: u,
                isSafari: f,
                isOpera: c,
                isChrome: g,
                isDesktop: !h && !l
            }, Object.keys(this.infos).forEach(function(t) {
                Object.defineProperty(this, t, {
                    get: function() {
                        return this.infos[t]
                    }
                })
            }, this), Object.freeze(this)
        }
        t.exports = new r, r.prototype.addClasses = function(t) {
            Object.keys(this.infos).forEach(function(e) {
                this.infos[e] && function(t, e) {
                    t.addClass ? t.addClass(e) : t.classList ? t.classList.add(e) : t.className += " " + e
                }(t, s(e))
            }, this)
        }, r.prototype.getInfos = function() {
            return t = this.infos, JSON.parse(JSON.stringify(t));
            var t
        }
    }, function(t, e) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (i = window)
        }
        t.exports = i
    }, function(t, e, i) {
        (function(e) {
            var i = "Expected a function",
                s = NaN,
                r = "[object Symbol]",
                n = /^\s+|\s+$/g,
                a = /^[-+]0x[0-9a-f]+$/i,
                o = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                h = parseInt,
                _ = "object" == typeof e && e && e.Object === Object && e,
                u = "object" == typeof self && self && self.Object === Object && self,
                f = _ || u || Function("return this")(),
                c = Object.prototype.toString,
                p = Math.max,
                m = Math.min,
                d = function() {
                    return f.Date.now()
                };

            function g(t, e, s) {
                var r, n, a, o, l, h, _ = 0,
                    u = !1,
                    f = !1,
                    c = !0;
                if ("function" != typeof t) throw new TypeError(i);

                function g(e) {
                    var i = r,
                        s = n;
                    return r = n = void 0, _ = e, o = t.apply(s, i)
                }

                function T(t) {
                    var i = t - h;
                    return void 0 === h || i >= e || i < 0 || f && t - _ >= a
                }

                function x() {
                    var t = d();
                    if (T(t)) return w(t);
                    l = setTimeout(x, function(t) {
                        var i = e - (t - h);
                        return f ? m(i, a - (t - _)) : i
                    }(t))
                }

                function w(t) {
                    return l = void 0, c && r ? g(t) : (r = n = void 0, o)
                }

                function b() {
                    var t = d(),
                        i = T(t);
                    if (r = arguments, n = this, h = t, i) {
                        if (void 0 === l) return function(t) {
                            return _ = t, l = setTimeout(x, e), u ? g(t) : o
                        }(h);
                        if (f) return l = setTimeout(x, e), g(h)
                    }
                    return void 0 === l && (l = setTimeout(x, e)), o
                }
                return e = y(e) || 0, v(s) && (u = !!s.leading, a = (f = "maxWait" in s) ? p(y(s.maxWait) || 0, e) : a, c = "trailing" in s ? !!s.trailing : c), b.cancel = function() {
                    void 0 !== l && clearTimeout(l), _ = 0, r = h = n = l = void 0
                }, b.flush = function() {
                    return void 0 === l ? o : w(d())
                }, b
            }

            function v(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            function y(t) {
                if ("number" == typeof t) return t;
                if (function(t) {
                        return "symbol" == typeof t || function(t) {
                            return !!t && "object" == typeof t
                        }(t) && c.call(t) == r
                    }(t)) return s;
                if (v(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = v(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(n, "");
                var i = o.test(t);
                return i || l.test(t) ? h(t.slice(2), i ? 2 : 8) : a.test(t) ? s : +t
            }
            t.exports = function(t, e, s) {
                var r = !0,
                    n = !0;
                if ("function" != typeof t) throw new TypeError(i);
                return v(s) && (r = "leading" in s ? !!s.leading : r, n = "trailing" in s ? !!s.trailing : n), g(t, e, {
                    leading: r,
                    maxWait: e,
                    trailing: n
                })
            }
        }).call(this, i(3))
    }, function(t, e, i) {
        (function(i) {
            var s;
            /*!
             * VERSION: 2.1.3
             * DATE: 2019-05-17
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             * 
             * @author: Jack Doyle, jack@greensock.com
             */
            ! function(i, r) {
                "use strict";
                var n = {},
                    a = i.document,
                    o = i.GreenSockGlobals = i.GreenSockGlobals || i,
                    l = o.TweenLite;
                if (l) return t.exports && (t.exports = l), l;
                var h, _, u, f, c, p, m, d = function(t) {
                        var e, i = t.split("."),
                            s = o;
                        for (e = 0; e < i.length; e++) s[i[e]] = s = s[i[e]] || {};
                        return s
                    },
                    g = d("com.greensock"),
                    v = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    y = function() {},
                    T = (p = Object.prototype.toString, m = p.call([]), function(t) {
                        return null != t && (t instanceof Array || "object" == typeof t && !!t.push && p.call(t) === m)
                    }),
                    x = {},
                    w = function(i, r, a, l) {
                        this.sc = x[i] ? x[i].sc : [], x[i] = this, this.gsClass = null, this.func = a;
                        var h = [];
                        this.check = function(_) {
                            for (var u, f, c, p, m = r.length, g = m; --m > -1;)(u = x[r[m]] || new w(r[m], [])).gsClass ? (h[m] = u.gsClass, g--) : _ && u.sc.push(this);
                            if (0 === g && a) {
                                if (c = (f = ("com.greensock." + i).split(".")).pop(), p = d(f.join("."))[c] = this.gsClass = a.apply(a, h), l)
                                    if (o[c] = n[c] = p, t.exports)
                                        if ("TweenLite" === i)
                                            for (m in t.exports = n.TweenLite = p, n) p[m] = n[m];
                                        else n.TweenLite && (n.TweenLite[c] = p);
                                else void 0 === (s = function() {
                                    return p
                                }.apply(e, [])) || (t.exports = s);
                                for (m = 0; m < this.sc.length; m++) this.sc[m].check()
                            }
                        }, this.check(!0)
                    },
                    b = i._gsDefine = function(t, e, i, s) {
                        return new w(t, e, i, s)
                    },
                    P = g._class = function(t, e, i) {
                        return e = e || function() {}, b(t, [], function() {
                            return e
                        }, i), e
                    };
                b.globals = o;
                var k = [0, 0, 1, 1],
                    O = P("easing.Ease", function(t, e, i, s) {
                        this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? k.concat(e) : k
                    }, !0),
                    S = O.map = {},
                    A = O.register = function(t, e, i, s) {
                        for (var r, n, a, o, l = e.split(","), h = l.length, _ = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                            for (n = l[h], r = s ? P("easing." + n, null, !0) : g.easing[n] || {}, a = _.length; --a > -1;) o = _[a], S[n + "." + o] = S[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                    };
                for ((u = O.prototype)._calcEnd = !1, u.getRatio = function(t) {
                        if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                        var e = this._type,
                            i = this._power,
                            s = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                        return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : t < .5 ? s / 2 : 1 - s / 2
                    }, _ = (h = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --_ > -1;) u = h[_] + ",Power" + _, A(new O(null, null, 1, _), u, "easeOut", !0), A(new O(null, null, 2, _), u, "easeIn" + (0 === _ ? ",easeNone" : "")), A(new O(null, null, 3, _), u, "easeInOut");
                S.linear = g.easing.Linear.easeIn, S.swing = g.easing.Quad.easeInOut;
                var R = P("events.EventDispatcher", function(t) {
                    this._listeners = {}, this._eventTarget = t || this
                });
                (u = R.prototype).addEventListener = function(t, e, i, s, r) {
                    r = r || 0;
                    var n, a, o = this._listeners[t],
                        l = 0;
                    for (this !== f || c || f.wake(), null == o && (this._listeners[t] = o = []), a = o.length; --a > -1;)(n = o[a]).c === e && n.s === i ? o.splice(a, 1) : 0 === l && n.pr < r && (l = a + 1);
                    o.splice(l, 0, {
                        c: e,
                        s: i,
                        up: s,
                        pr: r
                    })
                }, u.removeEventListener = function(t, e) {
                    var i, s = this._listeners[t];
                    if (s)
                        for (i = s.length; --i > -1;)
                            if (s[i].c === e) return void s.splice(i, 1)
                }, u.dispatchEvent = function(t) {
                    var e, i, s, r = this._listeners[t];
                    if (r)
                        for ((e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)(s = r[e]) && (s.up ? s.c.call(s.s || i, {
                            type: t,
                            target: i
                        }) : s.c.call(s.s || i))
                };
                var C = i.requestAnimationFrame,
                    D = i.cancelAnimationFrame,
                    M = Date.now || function() {
                        return (new Date).getTime()
                    },
                    E = M();
                for (_ = (h = ["ms", "moz", "webkit", "o"]).length; --_ > -1 && !C;) C = i[h[_] + "RequestAnimationFrame"], D = i[h[_] + "CancelAnimationFrame"] || i[h[_] + "CancelRequestAnimationFrame"];
                P("Ticker", function(t, e) {
                    var i, s, r, n, o, l = this,
                        h = M(),
                        _ = !(!1 === e || !C) && "auto",
                        u = 500,
                        p = 33,
                        m = function(t) {
                            var e, a, _ = M() - E;
                            _ > u && (h += _ - p), E += _, l.time = (E - h) / 1e3, e = l.time - o, (!i || e > 0 || !0 === t) && (l.frame++, o += e + (e >= n ? .004 : n - e), a = !0), !0 !== t && (r = s(m)), a && l.dispatchEvent("tick")
                        };
                    R.call(l), l.time = l.frame = 0, l.tick = function() {
                        m(!0)
                    }, l.lagSmoothing = function(t, e) {
                        if (!arguments.length) return u < 1e8;
                        u = t || 1e8, p = Math.min(e, u, 0)
                    }, l.sleep = function() {
                        null != r && (_ && D ? D(r) : clearTimeout(r), s = y, r = null, l === f && (c = !1))
                    }, l.wake = function(t) {
                        null !== r ? l.sleep() : t ? h += -E + (E = M()) : l.frame > 10 && (E = M() - u + 5), s = 0 === i ? y : _ && C ? C : function(t) {
                            return setTimeout(t, 1e3 * (o - l.time) + 1 | 0)
                        }, l === f && (c = !0), m(2)
                    }, l.fps = function(t) {
                        if (!arguments.length) return i;
                        n = 1 / ((i = t) || 60), o = this.time + n, l.wake()
                    }, l.useRAF = function(t) {
                        if (!arguments.length) return _;
                        l.sleep(), _ = t, l.fps(i)
                    }, l.fps(t), setTimeout(function() {
                        "auto" === _ && l.frame < 5 && "hidden" !== (a || {}).visibilityState && l.useRAF(!1)
                    }, 1500)
                }), (u = g.Ticker.prototype = new g.events.EventDispatcher).constructor = g.Ticker;
                var I = P("core.Animation", function(t, e) {
                    if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !!e.immediateRender, this.data = e.data, this._reversed = !!e.reversed, tt) {
                        c || f.wake();
                        var i = this.vars.useFrames ? K : tt;
                        i.add(this, i._time), this.vars.paused && this.paused(!0)
                    }
                });
                f = I.ticker = new g.Ticker, (u = I.prototype)._dirty = u._gc = u._initted = u._paused = !1, u._totalTime = u._time = 0, u._rawPrevTime = -1, u._next = u._last = u._onUpdate = u._timeline = u.timeline = null, u._paused = !1;
                var F = function() {
                    c && M() - E > 2e3 && ("hidden" !== (a || {}).visibilityState || !f.lagSmoothing()) && f.wake();
                    var t = setTimeout(F, 2e3);
                    t.unref && t.unref()
                };
                F(), u.play = function(t, e) {
                    return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                }, u.pause = function(t, e) {
                    return null != t && this.seek(t, e), this.paused(!0)
                }, u.resume = function(t, e) {
                    return null != t && this.seek(t, e), this.paused(!1)
                }, u.seek = function(t, e) {
                    return this.totalTime(Number(t), !1 !== e)
                }, u.restart = function(t, e) {
                    return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                }, u.reverse = function(t, e) {
                    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                }, u.render = function(t, e, i) {}, u.invalidate = function() {
                    return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                }, u.isActive = function() {
                    var t, e = this._timeline,
                        i = this._startTime;
                    return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-8
                }, u._enabled = function(t, e) {
                    return c || f.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                }, u._kill = function(t, e) {
                    return this._enabled(!1, !1)
                }, u.kill = function(t, e) {
                    return this._kill(t, e), this
                }, u._uncache = function(t) {
                    for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                    return this
                }, u._swapSelfInParams = function(t) {
                    for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                    return i
                }, u._callback = function(t) {
                    var e = this.vars,
                        i = e[t],
                        s = e[t + "Params"],
                        r = e[t + "Scope"] || e.callbackScope || this;
                    switch (s ? s.length : 0) {
                        case 0:
                            i.call(r);
                            break;
                        case 1:
                            i.call(r, s[0]);
                            break;
                        case 2:
                            i.call(r, s[0], s[1]);
                            break;
                        default:
                            i.apply(r, s)
                    }
                }, u.eventCallback = function(t, e, i, s) {
                    if ("on" === (t || "").substr(0, 2)) {
                        var r = this.vars;
                        if (1 === arguments.length) return r[t];
                        null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = T(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                    }
                    return this
                }, u.delay = function(t) {
                    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                }, u.duration = function(t) {
                    return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                }, u.totalDuration = function(t) {
                    return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                }, u.totalTime = function(t, e, i) {
                    if (c || f.wake(), !arguments.length) return this._totalTime;
                    if (this._timeline) {
                        if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                            this._dirty && this.totalDuration();
                            var s = this._totalDuration,
                                r = this._timeline;
                            if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                        }
                        this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (j.length && it(), this.render(t, e, !1), j.length && it())
                    }
                    return this
                }, u.progress = u.totalProgress = function(t, e) {
                    var i = this.duration();
                    return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                }, u.startTime = function(t) {
                    return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                }, u.endTime = function(t) {
                    return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                }, u.timeScale = function(t) {
                    if (!arguments.length) return this._timeScale;
                    var e, i;
                    for (t = t || 1e-8, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
                    return this
                }, u.reversed = function(t) {
                    return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                }, u.paused = function(t) {
                    if (!arguments.length) return this._paused;
                    var e, i, s = this._timeline;
                    return t != this._paused && s && (c || t || f.wake(), i = (e = s.rawTime()) - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                };
                var z = P("core.SimpleTimeline", function(t) {
                    I.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                });
                (u = z.prototype = new I).constructor = z, u.kill()._gc = !1, u._first = u._last = u._recent = null, u._sortChildren = !1, u.add = u.insert = function(t, e, i, s) {
                    var r, n;
                    if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                        for (n = t._startTime; r && r._startTime > n;) r = r._prev;
                    return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                }, u._remove = function(t, e) {
                    return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                }, u.render = function(t, e, i) {
                    var s, r = this._first;
                    for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
                }, u.rawTime = function() {
                    return c || f.wake(), this._totalTime
                };
                var L = P("TweenLite", function(t, e, s) {
                        if (I.call(this, e, s), this.render = L.prototype.render, null == t) throw "Cannot tween a null target.";
                        this.target = t = "string" != typeof t ? t : L.selector(t) || t;
                        var r, n, a, o = t.jquery || t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType),
                            l = this.vars.overwrite;
                        if (this._overwrite = l = null == l ? J[L.defaultOverwrite] : "number" == typeof l ? l >> 0 : J[l], (o || t instanceof Array || t.push && T(t)) && "number" != typeof t[0])
                            for (this._targets = a = v(t), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++)(n = a[r]) ? "string" != typeof n ? n.length && n !== i && n[0] && (n[0] === i || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(v(n))) : (this._siblings[r] = st(n, this, !1), 1 === l && this._siblings[r].length > 1 && nt(n, this, null, 1, this._siblings[r])) : "string" == typeof(n = a[r--] = L.selector(n)) && a.splice(r + 1, 1) : a.splice(r--, 1);
                        else this._propLookup = {}, this._siblings = st(t, this, !1), 1 === l && this._siblings.length > 1 && nt(t, this, null, 1, this._siblings);
                        (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-8, this.render(Math.min(0, -this._delay)))
                    }, !0),
                    N = function(t) {
                        return t && t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType)
                    };
                (u = L.prototype = new I).constructor = L, u.kill()._gc = !1, u.ratio = 0, u._firstPT = u._targets = u._overwrittenProps = u._startAt = null, u._notifyPluginsOfEnabled = u._lazy = !1, L.version = "2.1.3", L.defaultEase = u._ease = new O(null, null, 1, 1), L.defaultOverwrite = "auto", L.ticker = f, L.autoSleep = 120, L.lagSmoothing = function(t, e) {
                    f.lagSmoothing(t, e)
                }, L.selector = i.$ || i.jQuery || function(t) {
                    var e = i.$ || i.jQuery;
                    return e ? (L.selector = e, e(t)) : (a || (a = i.document), a ? a.querySelectorAll ? a.querySelectorAll(t) : a.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t)
                };
                var j = [],
                    X = {},
                    B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                    U = /[\+-]=-?[\.\d]/,
                    Y = function(t) {
                        for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                    },
                    q = function(t) {
                        return (1e3 * t | 0) / 1e3 + ""
                    },
                    V = function(t, e, i, s) {
                        var r, n, a, o, l, h, _, u = [],
                            f = 0,
                            c = "",
                            p = 0;
                        for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(B) || [], n = e.match(B) || [], s && (s._next = null, s.blob = 1, u._firstPT = u._applyPT = s), l = n.length, o = 0; o < l; o++) _ = n[o], c += (h = e.substr(f, e.indexOf(_, f) - f)) || !o ? h : ",", f += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), _ === r[o] || r.length <= o ? c += _ : (c && (u.push(c), c = ""), a = parseFloat(r[o]), u.push(a), u._firstPT = {
                            _next: u._firstPT,
                            t: u,
                            p: u.length - 1,
                            s: a,
                            c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                            f: 0,
                            m: p && p < 4 ? Math.round : q
                        }), f += _.length;
                        return (c += e.substr(f)) && u.push(c), u.setRatio = Y, U.test(e) && (u.end = null), u
                    },
                    W = function(t, e, i, s, r, n, a, o, l) {
                        "function" == typeof s && (s = s(l || 0, t));
                        var h = typeof t[e],
                            _ = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                            u = "get" !== i ? i : _ ? a ? t[_](a) : t[_]() : t[e],
                            f = "string" == typeof s && "=" === s.charAt(1),
                            c = {
                                t: t,
                                p: e,
                                s: u,
                                f: "function" === h,
                                pg: 0,
                                n: r || e,
                                m: n ? "function" == typeof n ? n : Math.round : 0,
                                pr: 0,
                                c: f ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - u || 0
                            };
                        if (("number" != typeof u || "number" != typeof s && !f) && (a || isNaN(u) || !f && isNaN(s) || "boolean" == typeof u || "boolean" == typeof s ? (c.fp = a, c = {
                                t: V(u, f ? parseFloat(c.s) + c.c + (c.s + "").replace(/[0-9\-\.]/g, "") : s, o || L.defaultStringFilter, c),
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 2,
                                pg: 0,
                                n: r || e,
                                pr: 0,
                                m: 0
                            }) : (c.s = parseFloat(u), f || (c.c = parseFloat(s) - c.s || 0))), c.c) return (c._next = this._firstPT) && (c._next._prev = c), this._firstPT = c, c
                    },
                    G = L._internals = {
                        isArray: T,
                        isSelector: N,
                        lazyTweens: j,
                        blobDif: V
                    },
                    $ = L._plugins = {},
                    Z = G.tweenLookup = {},
                    Q = 0,
                    H = G.reservedProps = {
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
                    J = {
                        none: 0,
                        all: 1,
                        auto: 2,
                        concurrent: 3,
                        allOnStart: 4,
                        preexisting: 5,
                        true: 1,
                        false: 0
                    },
                    K = I._rootFramesTimeline = new z,
                    tt = I._rootTimeline = new z,
                    et = 30,
                    it = G.lazyRender = function() {
                        var t, e, i = j.length;
                        for (X = {}, t = 0; t < i; t++)(e = j[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                        j.length = 0
                    };
                tt._startTime = f.time, K._startTime = f.frame, tt._active = K._active = !0, setTimeout(it, 1), I._updateRoot = L.render = function() {
                    var t, e, i;
                    if (j.length && it(), tt.render((f.time - tt._startTime) * tt._timeScale, !1, !1), K.render((f.frame - K._startTime) * K._timeScale, !1, !1), j.length && it(), f.frame >= et) {
                        for (i in et = f.frame + (parseInt(L.autoSleep, 10) || 120), Z) {
                            for (t = (e = Z[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                            0 === e.length && delete Z[i]
                        }
                        if ((!(i = tt._first) || i._paused) && L.autoSleep && !K._first && 1 === f._listeners.tick.length) {
                            for (; i && i._paused;) i = i._next;
                            i || f.sleep()
                        }
                    }
                }, f.addEventListener("tick", I._updateRoot);
                var st = function(t, e, i) {
                        var s, r, n = t._gsTweenID;
                        if (Z[n || (t._gsTweenID = n = "t" + Q++)] || (Z[n] = {
                                target: t,
                                tweens: []
                            }), e && ((s = Z[n].tweens)[r = s.length] = e, i))
                            for (; --r > -1;) s[r] === e && s.splice(r, 1);
                        return Z[n].tweens
                    },
                    rt = function(t, e, i, s) {
                        var r, n, a = t.vars.onOverwrite;
                        return a && (r = a(t, e, i, s)), (a = L.onOverwrite) && (n = a(t, e, i, s)), !1 !== r && !1 !== n
                    },
                    nt = function(t, e, i, s, r) {
                        var n, a, o, l;
                        if (1 === s || s >= 4) {
                            for (l = r.length, n = 0; n < l; n++)
                                if ((o = r[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                                else if (5 === s) break;
                            return a
                        }
                        var h, _ = e._startTime + 1e-8,
                            u = [],
                            f = 0,
                            c = 0 === e._duration;
                        for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || at(e, 0, c), 0 === at(o, h, c) && (u[f++] = o)) : o._startTime <= _ && o._startTime + o.totalDuration() / o._timeScale > _ && ((c || !o._initted) && _ - o._startTime <= 2e-8 || (u[f++] = o)));
                        for (n = f; --n > -1;)
                            if (l = (o = u[n])._firstPT, 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted && l) {
                                if (2 !== s && !rt(o, e)) continue;
                                o._enabled(!1, !1) && (a = !0)
                            }
                        return a
                    },
                    at = function(t, e, i) {
                        for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                            if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                            s = s._timeline
                        }
                        return (n /= r) > e ? n - e : i && n === e || !t._initted && n - e < 2e-8 ? 1e-8 : (n += t.totalDuration() / t._timeScale / r) > e + 1e-8 ? 0 : n - e - 1e-8
                    };
                u._init = function() {
                    var t, e, i, s, r, n, a = this.vars,
                        o = this._overwrittenProps,
                        l = this._duration,
                        h = !!a.immediateRender,
                        _ = a.ease,
                        u = this._startAt;
                    if (a.startAt) {
                        for (s in u && (u.render(-1, !0), u.kill()), r = {}, a.startAt) r[s] = a.startAt[s];
                        if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = h && !1 !== a.lazy, r.startAt = r.delay = null, r.onUpdate = a.onUpdate, r.onUpdateParams = a.onUpdateParams, r.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = L.to(this.target || {}, 0, r), h)
                            if (this._time > 0) this._startAt = null;
                            else if (0 !== l) return
                    } else if (a.runBackwards && 0 !== l)
                        if (u) u.render(-1, !0), u.kill(), this._startAt = null;
                        else {
                            for (s in 0 !== this._time && (h = !1), i = {}, a) H[s] && "autoCSS" !== s || (i[s] = a[s]);
                            if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== a.lazy, i.immediateRender = h, this._startAt = L.to(this.target, 0, i), h) {
                                if (0 === this._time) return
                            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                        }
                    if (this._ease = _ = _ ? _ instanceof O ? _ : "function" == typeof _ ? new O(_, a.easeParams) : S[_] || L.defaultEase : L.defaultEase, a.easeParams instanceof Array && _.config && (this._ease = _.config.apply(_, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                        for (n = this._targets.length, t = 0; t < n; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
                    else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                    if (e && L._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                        for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                    this._onUpdate = a.onUpdate, this._initted = !0
                }, u._initProps = function(t, e, s, r, n) {
                    var a, o, l, h, _, u;
                    if (null == t) return !1;
                    for (a in X[t._gsTweenID] && it(), this.vars.css || t.style && t !== i && t.nodeType && $.css && !1 !== this.vars.autoCSS && function(t, e) {
                            var i, s = {};
                            for (i in t) H[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!$[i] || $[i] && $[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                            t.css = s
                        }(this.vars, t), this.vars)
                        if (u = this.vars[a], H[a]) u && (u instanceof Array || u.push && T(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[a] = u = this._swapSelfInParams(u, this));
                        else if ($[a] && (h = new $[a])._onInitTween(t, this.vars[a], this, n)) {
                        for (this._firstPT = _ = {
                                _next: this._firstPT,
                                t: h,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 1,
                                n: a,
                                pg: 1,
                                pr: h._priority,
                                m: 0
                            }, o = h._overwriteProps.length; --o > -1;) e[h._overwriteProps[o]] = this._firstPT;
                        (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), _._next && (_._next._prev = _)
                    } else e[a] = W.call(this, t, a, "get", u, a, 0, null, this.vars.stringFilter, n);
                    return r && this._kill(r, t) ? this._initProps(t, e, s, r, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && nt(t, this, e, this._overwrite, s) ? (this._kill(e, t), this._initProps(t, e, s, r, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (X[t._gsTweenID] = !0), l)
                }, u.render = function(t, e, i) {
                    var s, r, n, a, o = this._time,
                        l = this._duration,
                        h = this._rawPrevTime;
                    if (t >= l - 1e-8 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-8 || 1e-8 === h && "isPause" !== this.data) && h !== t && (i = !0, h > 1e-8 && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : 1e-8);
                    else if (t < 1e-8) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", s = this._reversed), t > -1e-8 ? t = 0 : t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-8 !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : 1e-8)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                    else if (this._totalTime = this._time = t, this._easeType) {
                        var _ = t / l,
                            u = this._easeType,
                            f = this._easePower;
                        (1 === u || 3 === u && _ >= .5) && (_ = 1 - _), 3 === u && (_ *= 2), 1 === f ? _ *= _ : 2 === f ? _ *= _ * _ : 3 === f ? _ *= _ * _ * _ : 4 === f && (_ *= _ * _ * _ * _), this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : t / l < .5 ? _ / 2 : 1 - _ / 2
                    } else this.ratio = this._ease.getRatio(t / l);
                    if (this._time !== o || i) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, j.push(this), void(this._lazy = [t, e]);
                            this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                        this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== o || s || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && 1e-8 === this._rawPrevTime && 1e-8 !== a && (this._rawPrevTime = 0)))
                    }
                }, u._kill = function(t, e, i) {
                    if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                    e = "string" != typeof e ? e || this._targets || this.target : L.selector(e) || e;
                    var s, r, n, a, o, l, h, _, u, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                        c = this._firstPT;
                    if ((T(e) || N(e)) && "number" != typeof e[0])
                        for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0);
                    else {
                        if (this._targets) {
                            for (s = this._targets.length; --s > -1;)
                                if (e === this._targets[s]) {
                                    o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                    break
                                }
                        } else {
                            if (e !== this.target) return !1;
                            o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                        }
                        if (o) {
                            if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (L.onOverwrite || this.vars.onOverwrite)) {
                                for (n in h) o[n] && (u || (u = []), u.push(n));
                                if ((u || !t) && !rt(this, i, e, u)) return !1
                            }
                            for (n in h)(a = o[n]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                            !this._firstPT && this._initted && c && this._enabled(!1, !1)
                        }
                    }
                    return l
                }, u.invalidate = function() {
                    this._notifyPluginsOfEnabled && L._onPluginEvent("_onDisable", this);
                    var t = this._time;
                    return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], I.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-8, this.render(t, !1, !1 !== this.vars.lazy)), this
                }, u._enabled = function(t, e) {
                    if (c || f.wake(), t && this._gc) {
                        var i, s = this._targets;
                        if (s)
                            for (i = s.length; --i > -1;) this._siblings[i] = st(s[i], this, !0);
                        else this._siblings = st(this.target, this, !0)
                    }
                    return I.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && L._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                }, L.to = function(t, e, i) {
                    return new L(t, e, i)
                }, L.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new L(t, e, i)
                }, L.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new L(t, e, s)
                }, L.delayedCall = function(t, e, i, s, r) {
                    return new L(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        lazy: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, L.set = function(t, e) {
                    return new L(t, 0, e)
                }, L.getTweensOf = function(t, e) {
                    if (null == t) return [];
                    var i, s, r, n;
                    if (t = "string" != typeof t ? t : L.selector(t) || t, (T(t) || N(t)) && "number" != typeof t[0]) {
                        for (i = t.length, s = []; --i > -1;) s = s.concat(L.getTweensOf(t[i], e));
                        for (i = s.length; --i > -1;)
                            for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
                    } else if (t._gsTweenID)
                        for (i = (s = st(t).concat()).length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                    return s || []
                }, L.killTweensOf = L.killDelayedCallsTo = function(t, e, i) {
                    "object" == typeof e && (i = e, e = !1);
                    for (var s = L.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
                };
                var ot = P("plugins.TweenPlugin", function(t, e) {
                    this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = ot.prototype
                }, !0);
                if (u = ot.prototype, ot.version = "1.19.0", ot.API = 2, u._firstPT = null, u._addTween = W, u.setRatio = Y, u._kill = function(t) {
                        var e, i = this._overwriteProps,
                            s = this._firstPT;
                        if (null != t[this._propName]) this._overwriteProps = [];
                        else
                            for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                        for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                        return !1
                    }, u._mod = u._roundProps = function(t) {
                        for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                    }, L._onPluginEvent = function(t, e) {
                        var i, s, r, n, a, o = e._firstPT;
                        if ("_onInitAllProps" === t) {
                            for (; o;) {
                                for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                                (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                            }
                            o = e._firstPT = r
                        }
                        for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                        return i
                    }, ot.activate = function(t) {
                        for (var e = t.length; --e > -1;) t[e].API === ot.API && ($[(new t[e])._propName] = t[e]);
                        return !0
                    }, b.plugin = function(t) {
                        if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                        var e, i = t.propName,
                            s = t.priority || 0,
                            r = t.overwriteProps,
                            n = {
                                init: "_onInitTween",
                                set: "setRatio",
                                kill: "_kill",
                                round: "_mod",
                                mod: "_mod",
                                initAll: "_onInitAllProps"
                            },
                            a = P("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                                ot.call(this, i, s), this._overwriteProps = r || []
                            }, !0 === t.global),
                            o = a.prototype = new ot(i);
                        for (e in o.constructor = a, a.API = t.API, n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                        return a.version = t.version, ot.activate([a]), a
                    }, h = i._gsQueue) {
                    for (_ = 0; _ < h.length; _++) h[_]();
                    for (u in x) x[u].func || i.console.log("GSAP encountered missing dependency: " + u)
                }
                c = !1
            }(t.exports && void 0 !== i ? i : this || window)
        }).call(this, i(3))
    }, function(t, e) {
        function i() {}
        i.prototype = {
            on: function(t, e, i) {
                var s = this.e || (this.e = {});
                return (s[t] || (s[t] = [])).push({
                    fn: e,
                    ctx: i
                }), this
            },
            once: function(t, e, i) {
                var s = this;

                function r() {
                    s.off(t, r), e.apply(i, arguments)
                }
                return r._ = e, this.on(t, r, i)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), s = 0, r = i.length; s < r; s++) i[s].fn.apply(i[s].ctx, e);
                return this
            },
            off: function(t, e) {
                var i = this.e || (this.e = {}),
                    s = i[t],
                    r = [];
                if (s && e)
                    for (var n = 0, a = s.length; n < a; n++) s[n].fn !== e && s[n].fn._ !== e && r.push(s[n]);
                return r.length ? i[t] = r : delete i[t], this
            }
        }, t.exports = i, t.exports.TinyEmitter = i
    }, , , function(t, e, i) {
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
    }, function(t, e, i) {
        var s, r;
        /*!
         * imagesLoaded v4.1.4
         * JavaScript is all like "You images are done yet or what?"
         * MIT License
         */
        ! function(n, a) {
            "use strict";
            s = [i(12)], void 0 === (r = function(t) {
                return function(t, e) {
                    var i = t.jQuery,
                        s = t.console;

                    function r(t, e) {
                        for (var i in e) t[i] = e[i];
                        return t
                    }
                    var n = Array.prototype.slice;

                    function a(t, e, o) {
                        if (!(this instanceof a)) return new a(t, e, o);
                        var l, h = t;
                        ("string" == typeof t && (h = document.querySelectorAll(t)), h) ? (this.elements = (l = h, Array.isArray(l) ? l : "object" == typeof l && "number" == typeof l.length ? n.call(l) : [l]), this.options = r({}, this.options), "function" == typeof e ? o = e : r(this.options, e), o && this.on("always", o), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : s.error("Bad element for imagesLoaded " + (h || t))
                    }
                    a.prototype = Object.create(e.prototype), a.prototype.options = {}, a.prototype.getImages = function() {
                        this.images = [], this.elements.forEach(this.addElementImages, this)
                    }, a.prototype.addElementImages = function(t) {
                        "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                        var e = t.nodeType;
                        if (e && o[e]) {
                            for (var i = t.querySelectorAll("img"), s = 0; s < i.length; s++) {
                                var r = i[s];
                                this.addImage(r)
                            }
                            if ("string" == typeof this.options.background) {
                                var n = t.querySelectorAll(this.options.background);
                                for (s = 0; s < n.length; s++) {
                                    var a = n[s];
                                    this.addElementBackgroundImages(a)
                                }
                            }
                        }
                    };
                    var o = {
                        1: !0,
                        9: !0,
                        11: !0
                    };

                    function l(t) {
                        this.img = t
                    }

                    function h(t, e) {
                        this.url = t, this.element = e, this.img = new Image
                    }
                    return a.prototype.addElementBackgroundImages = function(t) {
                        var e = getComputedStyle(t);
                        if (e)
                            for (var i = /url\((['"])?(.*?)\1\)/gi, s = i.exec(e.backgroundImage); null !== s;) {
                                var r = s && s[2];
                                r && this.addBackground(r, t), s = i.exec(e.backgroundImage)
                            }
                    }, a.prototype.addImage = function(t) {
                        var e = new l(t);
                        this.images.push(e)
                    }, a.prototype.addBackground = function(t, e) {
                        var i = new h(t, e);
                        this.images.push(i)
                    }, a.prototype.check = function() {
                        var t = this;

                        function e(e, i, s) {
                            setTimeout(function() {
                                t.progress(e, i, s)
                            })
                        }
                        this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function(t) {
                            t.once("progress", e), t.check()
                        }) : this.complete()
                    }, a.prototype.progress = function(t, e, i) {
                        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && s && s.log("progress: " + i, t, e)
                    }, a.prototype.complete = function() {
                        var t = this.hasAnyBroken ? "fail" : "done";
                        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                            var e = this.hasAnyBroken ? "reject" : "resolve";
                            this.jqDeferred[e](this)
                        }
                    }, l.prototype = Object.create(e.prototype), l.prototype.check = function() {
                        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
                    }, l.prototype.getIsImageComplete = function() {
                        return this.img.complete && this.img.naturalWidth
                    }, l.prototype.confirm = function(t, e) {
                        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
                    }, l.prototype.handleEvent = function(t) {
                        var e = "on" + t.type;
                        this[e] && this[e](t)
                    }, l.prototype.onload = function() {
                        this.confirm(!0, "onload"), this.unbindEvents()
                    }, l.prototype.onerror = function() {
                        this.confirm(!1, "onerror"), this.unbindEvents()
                    }, l.prototype.unbindEvents = function() {
                        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                    }, h.prototype = Object.create(l.prototype), h.prototype.check = function() {
                        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
                    }, h.prototype.unbindEvents = function() {
                        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                    }, h.prototype.confirm = function(t, e) {
                        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
                    }, a.makeJQueryPlugin = function(e) {
                        (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function(t, e) {
                            return new a(this, t, e).jqDeferred.promise(i(this))
                        })
                    }, a.makeJQueryPlugin(), a
                }(n, t)
            }.apply(e, s)) || (t.exports = r)
        }("undefined" != typeof window ? window : this)
    }, function(t, e, i) {
        var s, r;
        "undefined" != typeof window && window, void 0 === (r = "function" == typeof(s = function() {
            "use strict";

            function t() {}
            var e = t.prototype;
            return e.on = function(t, e) {
                if (t && e) {
                    var i = this._events = this._events || {},
                        s = i[t] = i[t] || [];
                    return -1 == s.indexOf(e) && s.push(e), this
                }
            }, e.once = function(t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = this._onceEvents = this._onceEvents || {};
                    return (i[t] = i[t] || {})[e] = !0, this
                }
            }, e.off = function(t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var s = i.indexOf(e);
                    return -1 != s && i.splice(s, 1), this
                }
            }, e.emitEvent = function(t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    i = i.slice(0), e = e || [];
                    for (var s = this._onceEvents && this._onceEvents[t], r = 0; r < i.length; r++) {
                        var n = i[r];
                        s && s[n] && (this.off(t, n), delete s[n]), n.apply(this, e)
                    }
                    return this
                }
            }, e.allOff = function() {
                delete this._events, delete this._onceEvents
            }, t
        }) ? s.call(e, i, e, t) : s) || (t.exports = r)
    }]
]);