(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        LiCP: function(e, t, i) {
            "use strict";
            var r = Math.round,
                a = Math.min;
            (function(e, n) {
                i.d(t, "e", function() {
                    return s
                }), i.d(t, "g", function() {
                    return l
                }), i.d(t, "f", function() {
                    return o
                }), i.d(t, "c", function() {
                    return p
                }), i.d(t, "a", function() {
                    return d
                }), i.d(t, "b", function() {
                    return m
                }), i.d(t, "d", function() {
                    return h
                });
                /*!
                 * VERSION: 2.0.2
                 * DATE: 2018-08-27
                 * UPDATES AND DOCS AT: http://greensock.com
                 *
                 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
                 * This work is subject to the terms at http://greensock.com/standard-license or for
                 * Club GreenSock members, the software agreement that was issued with your membership.
                 *
                 * @author: Jack Doyle, jack@greensock.com
                 */
                var s = "undefined" == typeof window ? e.exports && "undefined" != typeof n ? n : {} : window,
                    o = function(t) {
                        var e = {},
                            n = t.document,
                            s = t.GreenSockGlobals = t.GreenSockGlobals || t;
                        if (s.TweenLite) return s.TweenLite;
                        var o = function(e) {
                                var t = e.split("."),
                                    a = s,
                                    r;
                                for (r = 0; r < t.length; r++) a[t[r]] = a = a[t[r]] || {};
                                return a
                            },
                            l = o("com.greensock"),
                            _ = 1e-10,
                            d = function(e) {
                                var t = [],
                                    a = e.length,
                                    r;
                                for (r = 0; r !== a; t.push(e[r++]));
                                return t
                            },
                            m = function() {},
                            c = function() {
                                var e = Object.prototype.toString,
                                    t = e.call([]);
                                return function(i) {
                                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && e.call(i) === t)
                                }
                            }(),
                            u = {},
                            g = function(t, a, r, l) {
                                this.sc = u[t] ? u[t].sc : [], u[t] = this, this.gsClass = null, this.func = r;
                                var _ = [];
                                this.check = function(p) {
                                    for (var d = a.length, i = d, m, c, f, n; - 1 < --d;)(m = u[a[d]] || new g(a[d], [])).gsClass ? (_[d] = m.gsClass, i--) : p && m.sc.push(this);
                                    if (0 === i && r)
                                        for (c = ("com.greensock." + t).split("."), f = c.pop(), n = o(c.join("."))[f] = this.gsClass = r.apply(r, _), l && (s[f] = e[f] = n), d = 0; d < this.sc.length; d++) this.sc[d].check()
                                }, this.check(!0)
                            },
                            f = t._gsDefine = function(e, t, i, a) {
                                return new g(e, t, i, a)
                            },
                            y = l._class = function(e, t, i) {
                                return t = t || function() {}, f(e, [], function() {
                                    return t
                                }, i), t
                            },
                            h, T, i, x, p;
                        f.globals = s;
                        var v = [0, 0, 1, 1],
                            b = y("easing.Ease", function(e, t, i, a) {
                                this._func = e, this._type = i || 0, this._power = a || 0, this._params = t ? v.concat(t) : v
                            }, !0),
                            P = b.map = {},
                            w = b.register = function(t, a, r, n) {
                                for (var s = a.split(","), o = s.length, i = (r || "easeIn,easeOut,easeInOut").split(","), _, e, p, d; - 1 < --o;)
                                    for (e = s[o], _ = n ? y("easing." + e, null, !0) : l.easing[e] || {}, p = i.length; - 1 < --p;) d = i[p], P[e + "." + d] = P[d + e] = _[d] = t.getRatio ? t : t[d] || new t
                            };
                        for (i = b.prototype, i._calcEnd = !1, i.getRatio = function(e) {
                                if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                                var i = this._type,
                                    t = this._power,
                                    a = 1 === i ? 1 - e : 2 === i ? e : .5 > e ? 2 * e : 2 * (1 - e);
                                return 1 === t ? a *= a : 2 === t ? a *= a * a : 3 === t ? a *= a * a * a : 4 === t && (a *= a * a * a * a), 1 === i ? 1 - a : 2 === i ? a : .5 > e ? a / 2 : 1 - a / 2
                            }, h = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], T = h.length; - 1 < --T;) i = h[T] + ",Power" + T, w(new b(null, null, 1, T), i, "easeOut", !0), w(new b(null, null, 2, T), i, "easeIn" + (0 === T ? ",easeNone" : "")), w(new b(null, null, 3, T), i, "easeInOut");
                        P.linear = l.easing.Linear.easeIn, P.swing = l.easing.Quad.easeInOut;
                        var O = y("events.EventDispatcher", function(e) {
                            this._listeners = {}, this._eventTarget = e || this
                        });
                        i = O.prototype, i.addEventListener = function(e, t, a, r, n) {
                            n = n || 0;
                            var s = this._listeners[e],
                                o = 0,
                                l, _;
                            for (this !== x || p || x.wake(), null == s && (this._listeners[e] = s = []), _ = s.length; - 1 < --_;) l = s[_], l.c === t && l.s === a ? s.splice(_, 1) : 0 == o && l.pr < n && (o = _ + 1);
                            s.splice(o, 0, {
                                c: t,
                                s: a,
                                up: r,
                                pr: n
                            })
                        }, i.removeEventListener = function(e, t) {
                            var a = this._listeners[e],
                                r;
                            if (a)
                                for (r = a.length; - 1 < --r;)
                                    if (a[r].c === t) return void a.splice(r, 1)
                        }, i.dispatchEvent = function(e) {
                            var a = this._listeners[e],
                                r, i, n;
                            if (a)
                                for (r = a.length, 1 < r && (a = a.slice(0)), i = this._eventTarget; - 1 < --r;) n = a[r], n && (n.up ? n.c.call(n.s || i, {
                                    type: e,
                                    target: i
                                }) : n.c.call(n.s || i))
                        };
                        var k = t.requestAnimationFrame,
                            S = t.cancelAnimationFrame,
                            R = Date.now || function() {
                                return new Date().getTime()
                            },
                            C = R();
                        for (h = ["ms", "moz", "webkit", "o"], T = h.length; - 1 < --T && !k;) k = t[h[T] + "RequestAnimationFrame"], S = t[h[T] + "CancelAnimationFrame"] || t[h[T] + "CancelRequestAnimationFrame"];
                        y("Ticker", function(e, t) {
                            var i = this,
                                r = R(),
                                s = !!(!1 !== t && k) && "auto",
                                o = 500,
                                l = 33,
                                d = function(e) {
                                    var t = R() - C,
                                        a, n;
                                    t > o && (r += t - l), C += t, i.time = (C - r) / 1e3, a = i.time - y, (!c || 0 < a || !0 === e) && (i.frame++, y += a + (a >= f ? .004 : f - a), n = !0), !0 !== e && (g = u(d)), n && i.dispatchEvent("tick")
                                },
                                c, u, g, f, y;
                            O.call(i), i.time = i.frame = 0, i.tick = function() {
                                d(!0)
                            }, i.lagSmoothing = function(e, t) {
                                return arguments.length ? void(o = e || 1 / _, l = a(t, o, 0)) : o < 1 / _
                            }, i.sleep = function() {
                                null == g || (s && S ? S(g) : clearTimeout(g), u = m, g = null, i === x && (p = !1))
                            }, i.wake = function(e) {
                                null === g ? e ? r += -C + (C = R()) : 10 < i.frame && (C = R() - o + 5) : i.sleep(), u = 0 === c ? m : s && k ? k : function(e) {
                                    return setTimeout(e, 0 | 1e3 * (y - i.time) + 1)
                                }, i === x && (p = !0), d(2)
                            }, i.fps = function(e) {
                                return arguments.length ? void(c = e, f = 1 / (c || 60), y = this.time + f, i.wake()) : c
                            }, i.useRAF = function(e) {
                                return arguments.length ? void(i.sleep(), s = e, i.fps(c)) : s
                            }, i.fps(e), setTimeout(function() {
                                "auto" === s && 5 > i.frame && "hidden" !== (n || {}).visibilityState && i.useRAF(!1)
                            }, 1500)
                        }), i = l.Ticker.prototype = new l.events.EventDispatcher, i.constructor = l.Ticker;
                        var A = y("core.Animation", function(e, t) {
                            if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = +t.delay || 0, this._timeScale = 1, this._active = !0 === t.immediateRender, this.data = t.data, this._reversed = !0 === t.reversed, !!$) {
                                p || x.wake();
                                var i = this.vars.useFrames ? q : $;
                                i.add(this, i._time), this.vars.paused && this.paused(!0)
                            }
                        });
                        x = A.ticker = new l.Ticker, i = A.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;
                        var D = function() {
                            p && 2e3 < R() - C && ("hidden" !== (n || {}).visibilityState || !x.lagSmoothing()) && x.wake();
                            var e = setTimeout(D, 2e3);
                            e.unref && e.unref()
                        };
                        D(), i.play = function(e, t) {
                            return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
                        }, i.pause = function(e, t) {
                            return null != e && this.seek(e, t), this.paused(!0)
                        }, i.resume = function(e, t) {
                            return null != e && this.seek(e, t), this.paused(!1)
                        }, i.seek = function(e, t) {
                            return this.totalTime(+e, !1 !== t)
                        }, i.restart = function(e, t) {
                            return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
                        }, i.reverse = function(e, t) {
                            return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
                        }, i.render = function() {}, i.invalidate = function() {
                            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
                        }, i.isActive = function() {
                            var e = this._timeline,
                                t = this._startTime,
                                i;
                            return !e || !this._gc && !this._paused && e.isActive() && (i = e.rawTime(!0)) >= t && i < t + this.totalDuration() / this._timeScale - 1e-7
                        }, i._enabled = function(e, t) {
                            return p || x.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
                        }, i._kill = function() {
                            return this._enabled(!1, !1)
                        }, i.kill = function(e, t) {
                            return this._kill(e, t), this
                        }, i._uncache = function(e) {
                            for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                            return this
                        }, i._swapSelfInParams = function(e) {
                            for (var t = e.length, i = e.concat(); - 1 < --t;) "{self}" === e[t] && (i[t] = this);
                            return i
                        }, i._callback = function(e) {
                            var t = this.vars,
                                i = t[e],
                                a = t[e + "Params"],
                                r = t[e + "Scope"] || t.callbackScope || this,
                                n = a ? a.length : 0;
                            0 === n ? i.call(r) : 1 === n ? i.call(r, a[0]) : 2 === n ? i.call(r, a[0], a[1]) : i.apply(r, a)
                        }, i.eventCallback = function(e, t, i, a) {
                            if ("on" === (e || "").substr(0, 2)) {
                                var r = this.vars;
                                if (1 === arguments.length) return r[e];
                                null == t ? delete r[e] : (r[e] = t, r[e + "Params"] = c(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[e + "Scope"] = a), "onUpdate" === e && (this._onUpdate = t)
                            }
                            return this
                        }, i.delay = function(e) {
                            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
                        }, i.duration = function(e) {
                            return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
                        }, i.totalDuration = function(e) {
                            return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
                        }, i.time = function(e, t) {
                            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
                        }, i.totalTime = function(e, t, i) {
                            if (p || x.wake(), !arguments.length) return this._totalTime;
                            if (this._timeline) {
                                if (0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                                    this._dirty && this.totalDuration();
                                    var a = this._totalDuration,
                                        r = this._timeline;
                                    if (e > a && !i && (e = a), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? a - e : e) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                                }
                                this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (I.length && J(), this.render(e, t, !1), I.length && J())
                            }
                            return this
                        }, i.progress = i.totalProgress = function(e, t) {
                            var i = this.duration();
                            return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
                        }, i.startTime = function(e) {
                            return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
                        }, i.endTime = function(e) {
                            return this._startTime + (!1 == e ? this.duration() : this.totalDuration()) / this._timeScale
                        }, i.timeScale = function(e) {
                            if (!arguments.length) return this._timeScale;
                            var i, a;
                            for (e = e || _, this._timeline && this._timeline.smoothChildTiming && (i = this._pauseTime, a = i || 0 === i ? i : this._timeline.totalTime(), this._startTime = a - (a - this._startTime) * this._timeScale / e), this._timeScale = e, a = this.timeline; a && a.timeline;) a._dirty = !0, a.totalDuration(), a = a.timeline;
                            return this
                        }, i.reversed = function(e) {
                            return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                        }, i.paused = function(e) {
                            if (!arguments.length) return this._paused;
                            var t = this._timeline,
                                i, a;
                            return e != this._paused && t && (!p && !e && x.wake(), i = t.rawTime(), a = i - this._pauseTime, !e && t.smoothChildTiming && (this._startTime += a, this._uncache(!1)), this._pauseTime = e ? i : null, this._paused = e, this._active = this.isActive(), !e && 0 !== a && this._initted && this.duration() && (i = t.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, this.render(i, i === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
                        };
                        var z = y("core.SimpleTimeline", function(e) {
                            A.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
                        });
                        i = z.prototype = new A, i.constructor = z, i.kill()._gc = !1, i._first = i._last = i._recent = null, i._sortChildren = !1, i.add = i.insert = function(e, t) {
                            var i, a;
                            if (e._startTime = +(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = this.rawTime() - (e._timeline.rawTime() - e._pauseTime)), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last, this._sortChildren)
                                for (a = e._startTime; i && i._startTime > a;) i = i._prev;
                            return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._recent = e, this._timeline && this._uncache(!0), this
                        }, i._remove = function(e, t) {
                            return e.timeline === this && (!t && e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                        }, i.render = function(e, t, i) {
                            var a = this._first,
                                r;
                            for (this._totalTime = this._time = this._rawPrevTime = e; a;) r = a._next, (a._active || e >= a._startTime && !a._paused && !a._gc) && (a._reversed ? a.render((a._dirty ? a.totalDuration() : a._totalDuration) - (e - a._startTime) * a._timeScale, t, i) : a.render((e - a._startTime) * a._timeScale, t, i)), a = r
                        }, i.rawTime = function() {
                            return p || x.wake(), this._totalTime
                        };
                        var E = y("TweenLite", function(e, r, n) {
                                if (A.call(this, r, n), this.render = E.prototype.render, null == e) throw "Cannot tween a null target.";
                                this.target = e = "string" == typeof e ? E.selector(e) || e : e;
                                var s = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                                    o = this.vars.overwrite,
                                    l, i, p;
                                if (this._overwrite = o = null == o ? H[E.defaultOverwrite] : "number" == typeof o ? o >> 0 : H[o], (s || e instanceof Array || e.push && c(e)) && "number" != typeof e[0])
                                    for (this._targets = p = d(e), this._propLookup = [], this._siblings = [], l = 0; l < p.length; l++) {
                                        if (i = p[l], !i) {
                                            p.splice(l--, 1);
                                            continue
                                        } else if ("string" == typeof i) {
                                            i = p[l--] = E.selector(i), "string" == typeof i && p.splice(l + 1, 1);
                                            continue
                                        } else if (i.length && i !== t && i[0] && (i[0] === t || i[0].nodeType && i[0].style && !i.nodeType)) {
                                            p.splice(l--, 1), this._targets = p = p.concat(d(i));
                                            continue
                                        }
                                        this._siblings[l] = K(i, this, !1), 1 === o && 1 < this._siblings[l].length && te(i, this, null, 1, this._siblings[l])
                                    } else this._propLookup = {}, this._siblings = K(e, this, !1), 1 === o && 1 < this._siblings.length && te(e, this, null, 1, this._siblings);
                                (this.vars.immediateRender || 0 === r && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -_, this.render(a(0, -this._delay)))
                            }, !0),
                            L = function(e) {
                                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                            },
                            X = function(e, t) {
                                var i = {},
                                    a;
                                for (a in e) Z[a] || a in t && "transform" !== a && "x" !== a && "y" !== a && "width" !== a && "height" !== a && "className" !== a && "border" !== a || V[a] && (!V[a] || !V[a]._autoCSS) || (i[a] = e[a], delete e[a]);
                                e.css = i
                            };
                        i = E.prototype = new A, i.constructor = E, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = i._lazy = !1, E.version = "2.0.2", E.defaultEase = i._ease = new b(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = x, E.autoSleep = 120, E.lagSmoothing = function(e, t) {
                            x.lagSmoothing(e, t)
                        }, E.selector = t.$ || t.jQuery || function(i) {
                            var e = t.$ || t.jQuery;
                            return e ? (E.selector = e, e(i)) : (n || (n = t.document), n ? n.querySelectorAll ? n.querySelectorAll(i) : n.getElementById("#" === i.charAt(0) ? i.substr(1) : i) : i)
                        };
                        var I = [],
                            B = {},
                            j = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
                            Y = /[\+-]=-?[\.\d]/,
                            F = function(e) {
                                for (var t = this._firstPT, i = 1e-6, a; t;) a = t.blob ? 1 === e && null != this.end ? this.end : e ? this.join("") : this.start : t.c * e + t.s, t.m ? a = t.m.call(this._tween, a, this._target || t.t, this._tween) : a < i && a > -i && !t.blob && (a = 0), t.f ? t.fp ? t.t[t.p](t.fp, a) : t.t[t.p](a) : t.t[t.p] = a, t = t._next
                            },
                            N = function(e, t, n, o) {
                                var _ = [],
                                    p = 0,
                                    d = "",
                                    s = 0,
                                    m, c, u, g, f, l, y;
                                for (_.start = e, _.end = t, e = _[0] = e + "", t = _[1] = t + "", n && (n(_), e = _[0], t = _[1]), _.length = 0, m = e.match(j) || [], c = t.match(j) || [], o && (o._next = null, o.blob = 1, _._firstPT = _._applyPT = o), f = c.length, g = 0; g < f; g++) y = c[g], l = t.substr(p, t.indexOf(y, p) - p), d += l || !g ? l : ",", p += l.length, s ? s = (s + 1) % 5 : "rgba(" === l.substr(-5) && (s = 1), y === m[g] || m.length <= g ? d += y : (d && (_.push(d), d = ""), u = parseFloat(m[g]), _.push(u), _._firstPT = {
                                    _next: _._firstPT,
                                    t: _,
                                    p: _.length - 1,
                                    s: u,
                                    c: ("=" === y.charAt(1) ? parseInt(y.charAt(0) + "1", 10) * parseFloat(y.substr(2)) : parseFloat(y) - u) || 0,
                                    f: 0,
                                    m: s && 4 > s ? r : 0
                                }), p += y.length;
                                return d += t.substr(p), d && _.push(d), _.setRatio = F, Y.test(t) && (_.end = null), _
                            },
                            U = function(e, t, i, a, n, o, l, _, p) {
                                "function" == typeof a && (a = a(p || 0, e));
                                var d = typeof e[t],
                                    m = "function" == d ? t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3) : "",
                                    c = "get" === i ? m ? l ? e[m](l) : e[m]() : e[t] : i,
                                    u = "string" == typeof a && "=" === a.charAt(1),
                                    g = {
                                        t: e,
                                        p: t,
                                        s: c,
                                        f: "function" == d,
                                        pg: 0,
                                        n: n || t,
                                        m: o ? "function" == typeof o ? o : r : 0,
                                        pr: 0,
                                        c: u ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - c || 0
                                    },
                                    f;
                                if ("number" == typeof c && ("number" == typeof a || u) || (l || isNaN(c) || !u && isNaN(a) || "boolean" == typeof c || "boolean" == typeof a ? (g.fp = l, f = N(c, u ? parseFloat(g.s) + g.c + (g.s + "").replace(/[0-9\-\.]/g, "") : a, _ || E.defaultStringFilter, g), g = {
                                        t: f,
                                        p: "setRatio",
                                        s: 0,
                                        c: 1,
                                        f: 2,
                                        pg: 0,
                                        n: n || t,
                                        pr: 0,
                                        m: 0
                                    }) : (g.s = parseFloat(c), !u && (g.c = parseFloat(a) - g.s || 0))), g.c) return (g._next = this._firstPT) && (g._next._prev = g), this._firstPT = g, g
                            },
                            M = E._internals = {
                                isArray: c,
                                isSelector: L,
                                lazyTweens: I,
                                blobDif: N
                            },
                            V = E._plugins = {},
                            W = M.tweenLookup = {},
                            G = 0,
                            Z = M.reservedProps = {
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
                                yoyoEase: 1
                            },
                            H = {
                                none: 0,
                                all: 1,
                                auto: 2,
                                concurrent: 3,
                                allOnStart: 4,
                                preexisting: 5,
                                true: 1,
                                false: 0
                            },
                            q = A._rootFramesTimeline = new z,
                            $ = A._rootTimeline = new z,
                            Q = 30,
                            J = M.lazyRender = function() {
                                var e = I.length,
                                    t;
                                for (B = {}; - 1 < --e;) t = I[e], t && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                                I.length = 0
                            };
                        $._startTime = x.time, q._startTime = x.frame, $._active = q._active = !0, setTimeout(J, 1), A._updateRoot = E.render = function() {
                            var e, t, i;
                            if (I.length && J(), $.render((x.time - $._startTime) * $._timeScale, !1, !1), q.render((x.frame - q._startTime) * q._timeScale, !1, !1), I.length && J(), x.frame >= Q) {
                                for (i in Q = x.frame + (parseInt(E.autoSleep, 10) || 120), W) {
                                    for (t = W[i].tweens, e = t.length; - 1 < --e;) t[e]._gc && t.splice(e, 1);
                                    0 === t.length && delete W[i]
                                }
                                if (i = $._first, (!i || i._paused) && E.autoSleep && !q._first && 1 === x._listeners.tick.length) {
                                    for (; i && i._paused;) i = i._next;
                                    i || x.sleep()
                                }
                            }
                        }, x.addEventListener("tick", A._updateRoot);
                        var K = function(e, t, r) {
                                var n = e._gsTweenID,
                                    s, a;
                                if (W[n || (e._gsTweenID = n = "t" + G++)] || (W[n] = {
                                        target: e,
                                        tweens: []
                                    }), t && (s = W[n].tweens, s[a = s.length] = t, r))
                                    for (; - 1 < --a;) s[a] === t && s.splice(a, 1);
                                return W[n].tweens
                            },
                            ee = function(e, t, i, a) {
                                var r = e.vars.onOverwrite,
                                    n, s;
                                return r && (n = r(e, t, i, a)), r = E.onOverwrite, r && (s = r(e, t, i, a)), !1 !== n && !1 !== s
                            },
                            te = function(e, t, a, r, n) {
                                var s, i, o, p;
                                if (1 === r || 4 <= r) {
                                    for (p = n.length, s = 0; s < p; s++)
                                        if ((o = n[s]) !== t) !o._gc && o._kill(null, e, t) && (i = !0);
                                        else if (5 === r) break;
                                    return i
                                }
                                var l = t._startTime + _,
                                    d = [],
                                    m = 0,
                                    c = 0 === t._duration,
                                    u;
                                for (s = n.length; - 1 < --s;)
                                    if ((o = n[s]) === t || o._gc || o._paused);
                                    else o._timeline === t._timeline ? o._startTime <= l && o._startTime + o.totalDuration() / o._timeScale > l && ((c || !o._initted) && 2e-10 >= l - o._startTime || (d[m++] = o)) : (u = u || ie(t, 0, c), 0 === ie(o, u, c) && (d[m++] = o));
                                for (s = m; - 1 < --s;)
                                    if (o = d[s], p = o._firstPT, 2 === r && o._kill(a, e, t) && (i = !0), 2 !== r || !o._firstPT && o._initted && p) {
                                        if (2 !== r && !ee(o, t)) continue;
                                        o._enabled(!1, !1) && (i = !0)
                                    }
                                return i
                            },
                            ie = function(e, i, a) {
                                for (var r = e._timeline, n = r._timeScale, s = e._startTime; r._timeline;) {
                                    if (s += r._startTime, n *= r._timeScale, r._paused) return -100;
                                    r = r._timeline
                                }
                                return s /= n, s > i ? s - i : a && s === i || !e._initted && s - i < 2 * _ ? _ : (s += e.totalDuration() / e._timeScale / n) > i + _ ? 0 : s - i - _
                            };
                        i._init = function() {
                            var e = this.vars,
                                t = this._overwrittenProps,
                                a = this._duration,
                                r = !!e.immediateRender,
                                n = e.ease,
                                s, i, o, _, p, d;
                            if (e.startAt) {
                                for (_ in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), p = {}, e.startAt) p[_] = e.startAt[_];
                                if (p.data = "isStart", p.overwrite = !1, p.immediateRender = !0, p.lazy = r && !1 !== e.lazy, p.startAt = p.delay = null, p.onUpdate = e.onUpdate, p.onUpdateParams = e.onUpdateParams, p.onUpdateScope = e.onUpdateScope || e.callbackScope || this, this._startAt = E.to(this.target || {}, 0, p), r)
                                    if (0 < this._time) this._startAt = null;
                                    else if (0 !== a) return
                            } else if (e.runBackwards && 0 !== a)
                                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                                else {
                                    for (_ in 0 !== this._time && (r = !1), o = {}, e) Z[_] && "autoCSS" !== _ || (o[_] = e[_]);
                                    if (o.overwrite = 0, o.data = "isFromStart", o.lazy = r && !1 !== e.lazy, o.immediateRender = r, this._startAt = E.to(this.target, 0, o), !r) this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                                    else if (0 === this._time) return
                                }
                            if (this._ease = n = n ? n instanceof b ? n : "function" == typeof n ? new b(n, e.easeParams) : P[n] || E.defaultEase : E.defaultEase, e.easeParams instanceof Array && n.config && (this._ease = n.config.apply(n, e.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                                for (d = this._targets.length, s = 0; s < d; s++) this._initProps(this._targets[s], this._propLookup[s] = {}, this._siblings[s], t ? t[s] : null, s) && (i = !0);
                            else i = this._initProps(this.target, this._propLookup, this._siblings, t, 0);
                            if (i && E._onPluginEvent("_onInitAllProps", this), t && !this._firstPT && "function" != typeof this.target && this._enabled(!1, !1), e.runBackwards)
                                for (o = this._firstPT; o;) o.s += o.c, o.c = -o.c, o = o._next;
                            this._onUpdate = e.onUpdate, this._initted = !0
                        }, i._initProps = function(e, a, r, n, s) {
                            var o, l, i, _, d, p;
                            if (null == e) return !1;
                            for (o in B[e._gsTweenID] && J(), !this.vars.css && e.style && e !== t && e.nodeType && V.css && !1 !== this.vars.autoCSS && X(this.vars, e), this.vars)
                                if (p = this.vars[o], Z[o]) p && (p instanceof Array || p.push && c(p)) && -1 !== p.join("").indexOf("{self}") && (this.vars[o] = p = this._swapSelfInParams(p, this));
                                else if (V[o] && (_ = new V[o])._onInitTween(e, this.vars[o], this, s)) {
                                for (this._firstPT = d = {
                                        _next: this._firstPT,
                                        t: _,
                                        p: "setRatio",
                                        s: 0,
                                        c: 1,
                                        f: 1,
                                        n: o,
                                        pg: 1,
                                        pr: _._priority,
                                        m: 0
                                    }, l = _._overwriteProps.length; - 1 < --l;) a[_._overwriteProps[l]] = this._firstPT;
                                (_._priority || _._onInitAllProps) && (i = !0), (_._onDisable || _._onEnable) && (this._notifyPluginsOfEnabled = !0), d._next && (d._next._prev = d)
                            } else a[o] = U.call(this, e, o, "get", p, o, 0, null, this.vars.stringFilter, s);
                            return n && this._kill(n, e) ? this._initProps(e, a, r, n, s) : 1 < this._overwrite && this._firstPT && 1 < r.length && te(e, this, a, this._overwrite, r) ? (this._kill(a, e), this._initProps(e, a, r, n, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (B[e._gsTweenID] = !0), i)
                        }, i.render = function(e, t, i) {
                            var a = this._time,
                                n = this._duration,
                                s = this._rawPrevTime,
                                o, l, p, d;
                            if (e >= n - 1e-7 && 0 <= e) this._totalTime = this._time = n, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (o = !0, l = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === n && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 > s || 0 >= e && -1e-7 <= e || s === _ && "isPause" !== this.data) && s !== e && (i = !0, s > _ && (l = "onReverseComplete")), this._rawPrevTime = d = !t || e || s === e ? e : _);
                            else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === n && 0 < s) && (l = "onReverseComplete", o = this._reversed), 0 > e && (this._active = !1, 0 === n && (this._initted || !this.vars.lazy || i) && (0 <= s && (s !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = d = !t || e || s === e ? e : _)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                            else if (this._totalTime = this._time = e, this._easeType) {
                                var m = e / n,
                                    r = this._easeType,
                                    c = this._easePower;
                                (1 === r || 3 === r && .5 <= m) && (m = 1 - m), 3 === r && (m *= 2), 1 === c ? m *= m : 2 === c ? m *= m * m : 3 === c ? m *= m * m * m : 4 === c && (m *= m * m * m * m), this.ratio = 1 === r ? 1 - m : 2 === r ? m : .5 > e / n ? m / 2 : 1 - m / 2
                            } else this.ratio = this._ease.getRatio(e / n);
                            if (this._time !== a || i) {
                                if (!this._initted) {
                                    if (this._init(), !this._initted || this._gc) return;
                                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = s, I.push(this), void(this._lazy = [e, t]);
                                    this._time && !o ? this.ratio = this._ease.getRatio(this._time / n) : o && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                                }
                                for (!1 !== this._lazy && (this._lazy = !1), this._active || this._paused || this._time === a || !(0 <= e) || (this._active = !0), 0 === a && (this._startAt && (0 <= e ? this._startAt.render(e, !0, i) : !l && (l = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === n) && !t && this._callback("onStart")), p = this._firstPT; p;) p.f ? p.t[p.p](p.c * this.ratio + p.s) : p.t[p.p] = p.c * this.ratio + p.s, p = p._next;
                                this._onUpdate && (0 > e && this._startAt && -1e-4 !== e && this._startAt.render(e, !0, i), !t && (this._time !== a || o || i) && this._callback("onUpdate")), l && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, !0, i), o && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[l] && this._callback(l), 0 === n && this._rawPrevTime === _ && d !== _ && (this._rawPrevTime = 0))
                            }
                        }, i._kill = function(e, t, a) {
                            if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                            t = "string" == typeof t ? E.selector(t) || t : t || this._targets || this.target;
                            var r = a && this._time && a._startTime === this._startTime && this._timeline === a._timeline,
                                n = this._firstPT,
                                s, i, o, l, _, p, d, m, u;
                            if ((c(t) || L(t)) && "number" != typeof t[0])
                                for (s = t.length; - 1 < --s;) this._kill(e, t[s], a) && (p = !0);
                            else {
                                if (this._targets) {
                                    for (s = this._targets.length; - 1 < --s;)
                                        if (t === this._targets[s]) {
                                            _ = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], i = this._overwrittenProps[s] = e ? this._overwrittenProps[s] || {} : "all";
                                            break
                                        }
                                } else {
                                    if (t !== this.target) return !1;
                                    _ = this._propLookup, i = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                                }
                                if (_) {
                                    if (d = e || _, m = e !== i && "all" !== i && e !== _ && ("object" != typeof e || !e._tempKill), a && (E.onOverwrite || this.vars.onOverwrite)) {
                                        for (o in d) _[o] && (u || (u = []), u.push(o));
                                        if ((u || !e) && !ee(this, a, t, u)) return !1
                                    }
                                    for (o in d)(l = _[o]) && (r && (l.f ? l.t[l.p](l.s) : l.t[l.p] = l.s, p = !0), l.pg && l.t._kill(d) && (p = !0), (!l.pg || 0 === l.t._overwriteProps.length) && (l._prev ? l._prev._next = l._next : l === this._firstPT && (this._firstPT = l._next), l._next && (l._next._prev = l._prev), l._next = l._prev = null), delete _[o]), m && (i[o] = 1);
                                    !this._firstPT && this._initted && n && this._enabled(!1, !1)
                                }
                            }
                            return p
                        }, i.invalidate = function() {
                            return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(a(0, -this._delay))), this
                        }, i._enabled = function(e, t) {
                            if (p || x.wake(), e && this._gc) {
                                var a = this._targets,
                                    r;
                                if (a)
                                    for (r = a.length; - 1 < --r;) this._siblings[r] = K(a[r], this, !0);
                                else this._siblings = K(this.target, this, !0)
                            }
                            return A.prototype._enabled.call(this, e, t), !!(this._notifyPluginsOfEnabled && this._firstPT) && E._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
                        }, E.to = function(e, t, i) {
                            return new E(e, t, i)
                        }, E.from = function(e, t, i) {
                            return i.runBackwards = !0, i.immediateRender = !1 != i.immediateRender, new E(e, t, i)
                        }, E.fromTo = function(e, t, i, a) {
                            return a.startAt = i, a.immediateRender = !1 != a.immediateRender && !1 != i.immediateRender, new E(e, t, a)
                        }, E.delayedCall = function(e, t, i, a, r) {
                            return new E(t, 0, {
                                delay: e,
                                onComplete: t,
                                onCompleteParams: i,
                                callbackScope: a,
                                onReverseComplete: t,
                                onReverseCompleteParams: i,
                                immediateRender: !1,
                                lazy: !1,
                                useFrames: r,
                                overwrite: 0
                            })
                        }, E.set = function(e, t) {
                            return new E(e, 0, t)
                        }, E.getTweensOf = function(e, r) {
                            if (null == e) return [];
                            e = "string" == typeof e ? E.selector(e) || e : e;
                            var n, i, a, s;
                            if ((c(e) || L(e)) && "number" != typeof e[0]) {
                                for (n = e.length, i = []; - 1 < --n;) i = i.concat(E.getTweensOf(e[n], r));
                                for (n = i.length; - 1 < --n;)
                                    for (s = i[n], a = n; - 1 < --a;) s === i[a] && i.splice(n, 1)
                            } else if (e._gsTweenID)
                                for (i = K(e).concat(), n = i.length; - 1 < --n;)(i[n]._gc || r && !i[n].isActive()) && i.splice(n, 1);
                            return i || []
                        }, E.killTweensOf = E.killDelayedCallsTo = function(e, t, r) {
                            "object" == typeof t && (r = t, t = !1);
                            for (var n = E.getTweensOf(e, t), a = n.length; - 1 < --a;) n[a]._kill(r, e)
                        };
                        var ae = y("plugins.TweenPlugin", function(e, t) {
                            this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = ae.prototype
                        }, !0);
                        if (i = ae.prototype, ae.version = "1.19.0", ae.API = 2, i._firstPT = null, i._addTween = U, i.setRatio = F, i._kill = function(e) {
                                var t = this._overwriteProps,
                                    a = this._firstPT,
                                    r;
                                if (null != e[this._propName]) this._overwriteProps = [];
                                else
                                    for (r = t.length; - 1 < --r;) null != e[t[r]] && t.splice(r, 1);
                                for (; a;) null != e[a.n] && (a._next && (a._next._prev = a._prev), a._prev ? (a._prev._next = a._next, a._prev = null) : this._firstPT === a && (this._firstPT = a._next)), a = a._next;
                                return !1
                            }, i._mod = i._roundProps = function(e) {
                                for (var t = this._firstPT, i; t;) i = e[this._propName] || null != t.n && e[t.n.split(this._propName + "_").join("")], i && "function" == typeof i && (2 === t.f ? t.t._applyPT.m = i : t.m = i), t = t._next
                            }, E._onPluginEvent = function(e, t) {
                                var i = t._firstPT,
                                    a, r, n, s, o;
                                if ("_onInitAllProps" === e) {
                                    for (; i;) {
                                        for (o = i._next, r = n; r && r.pr > i.pr;) r = r._next;
                                        (i._prev = r ? r._prev : s) ? i._prev._next = i: n = i, (i._next = r) ? r._prev = i : s = i, i = o
                                    }
                                    i = t._firstPT = n
                                }
                                for (; i;) i.pg && "function" == typeof i.t[e] && i.t[e]() && (a = !0), i = i._next;
                                return a
                            }, ae.activate = function(e) {
                                for (var t = e.length; - 1 < --t;) e[t].API === ae.API && (V[new e[t]()._propName] = e[t]);
                                return !0
                            }, f.plugin = function(e) {
                                if (!e || !e.propName || !e.init || !e.API) throw "illegal plugin definition.";
                                var t = e.propName,
                                    i = e.priority || 0,
                                    a = e.overwriteProps,
                                    r = {
                                        init: "_onInitTween",
                                        set: "setRatio",
                                        kill: "_kill",
                                        round: "_mod",
                                        mod: "_mod",
                                        initAll: "_onInitAllProps"
                                    },
                                    n = y("plugins." + t.charAt(0).toUpperCase() + t.substr(1) + "Plugin", function() {
                                        ae.call(this, t, i), this._overwriteProps = a || []
                                    }, !0 === e.global),
                                    s = n.prototype = new ae(t),
                                    o;
                                for (o in s.constructor = n, n.API = e.API, r) "function" == typeof e[o] && (s[r[o]] = e[o]);
                                return n.version = e.version, ae.activate([n]), n
                            }, h = t._gsQueue, h) {
                            for (T = 0; T < h.length; T++) h[T]();
                            for (i in u) u[i].func || t.console.log("GSAP encountered missing dependency: " + i)
                        }
                        return p = !1, E
                    }(s, "TweenLite"),
                    l = s.GreenSockGlobals,
                    _ = l.com.greensock,
                    p = _.core.SimpleTimeline,
                    d = _.core.Animation,
                    m = l.Ease,
                    c = l.Linear,
                    u = l.Power1,
                    g = l.Power2,
                    f = l.Power3,
                    y = l.Power4,
                    h = l.TweenPlugin,
                    T = _.events.EventDispatcher
            }).call(this, i("3UD+")(e), i("yLpj"))
        },
        "z/o8": function(e, t, i) {
            "use strict";
            var a = Math.pow,
                r = Math.sqrt,
                n = Math.abs,
                s = Math.sin,
                o = Math.cos,
                l = Math.atan2,
                _ = Math.max,
                d = Math.PI,
                m = Math.round,
                p = Math.min,
                u = i("LiCP");
            u.e._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() {
                var e = function(e) {
                        var t = [],
                            a = e.length,
                            r;
                        for (r = 0; r !== a; t.push(e[r++]));
                        return t
                    },
                    t = function(e, t, a) {
                        var i = e.cycle,
                            r, n;
                        for (r in i) n = i[r], e[r] = "function" == typeof n ? n(a, t[a]) : n[a % n.length];
                        delete e.cycle
                    },
                    r = function(e, t, i) {
                        u.f.call(this, e, t, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = r.prototype.render
                    },
                    i = 1e-10,
                    n = u.f._internals,
                    s = n.isSelector,
                    o = n.isArray,
                    a = r.prototype = u.f.to({}, .1, {}),
                    l = [];
                r.version = "2.0.2", a.constructor = r, a.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = u.f.killTweensOf, r.getTweensOf = u.f.getTweensOf, r.lagSmoothing = u.f.lagSmoothing, r.ticker = u.f.ticker, r.render = u.f.render, a.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), u.f.prototype.invalidate.call(this)
                }, a.updateTo = function(e, t) {
                    var i = this.ratio,
                        a = this.vars.immediateRender || e.immediateRender,
                        r;
                    for (r in t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), e) this.vars[r] = e[r];
                    if (this._initted || a)
                        if (t) this._initted = !1, a && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && u.f._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                        var n = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(n, !0, !1)
                    } else if (this._initted = !1, this._init(), 0 < this._time || a)
                        for (var s = this._firstPT, o; s;) o = s.s + s.c, s.c *= 1 / (1 - i), s.s = o - s.c, s = s._next;
                    return this
                }, a.render = function(e, t, a) {
                    !this._initted && 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s = this._dirty ? this.totalDuration() : this._totalDuration,
                        o = this._time,
                        l = this._totalTime,
                        _ = this._cycle,
                        p = this._duration,
                        d = this._rawPrevTime,
                        m, c, g, f, y, r, h, T, x;
                    if (e >= s - 1e-7 && 0 <= e ? (this._totalTime = s, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = p, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), !this._reversed && (m = !0, c = "onComplete", a = a || this._timeline.autoRemoveChildren), 0 === p && (this._initted || !this.vars.lazy || a) && (this._startTime === this._timeline._duration && (e = 0), (0 > d || 0 >= e && -1e-7 <= e || d === i && "isPause" !== this.data) && d !== e && (a = !0, d > i && (c = "onReverseComplete")), this._rawPrevTime = T = !t || e || d === e ? e : i)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== l || 0 === p && 0 < d) && (c = "onReverseComplete", m = this._reversed), 0 > e && (this._active = !1, 0 === p && (this._initted || !this.vars.lazy || a) && (0 <= d && (a = !0), this._rawPrevTime = T = !t || e || d === e ? e : i)), !this._initted && (a = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (f = p + this._repeatDelay, this._cycle = this._totalTime / f >> 0, 0 !== this._cycle && this._cycle === this._totalTime / f && l <= e && this._cycle--, this._time = this._totalTime - this._cycle * f, this._yoyo && 0 != (1 & this._cycle) && (this._time = p - this._time, x = this._yoyoEase || this.vars.yoyoEase, x && (!this._yoyoEase && (!0 !== x || this._initted ? this._yoyoEase = x = !0 === x ? this._ease : x instanceof u.b ? x : u.b.map[x] : (x = this.vars.ease, this._yoyoEase = x = x ? x instanceof u.b ? x : "function" == typeof x ? new u.b(x, this.vars.easeParams) : u.b.map[x] || u.f.defaultEase : u.f.defaultEase)), this.ratio = x ? 1 - x.getRatio((p - this._time) / p) : 0)), this._time > p ? this._time = p : 0 > this._time && (this._time = 0)), this._easeType && !x ? (y = this._time / p, r = this._easeType, h = this._easePower, (1 === r || 3 === r && .5 <= y) && (y = 1 - y), 3 === r && (y *= 2), 1 === h ? y *= y : 2 === h ? y *= y * y : 3 === h ? y *= y * y * y : 4 === h && (y *= y * y * y * y), this.ratio = 1 === r ? 1 - y : 2 === r ? y : .5 > this._time / p ? y / 2 : 1 - y / 2) : !x && (this.ratio = this._ease.getRatio(this._time / p))), o === this._time && !a && _ === this._cycle) return void(l !== this._totalTime && this._onUpdate && !t && this._callback("onUpdate"));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!a && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = o, this._totalTime = l, this._rawPrevTime = d, this._cycle = _, n.lazyTweens.push(this), void(this._lazy = [e, t]);
                        !this._time || m || x ? m && this._ease._calcEnd && !x && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / p)
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || this._paused || this._time === o || !(0 <= e) || (this._active = !0), 0 === l && (2 === this._initted && 0 < e && this._init(), this._startAt && (0 <= e ? this._startAt.render(e, !0, a) : !c && (c = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === p) && !t && this._callback("onStart")), g = this._firstPT; g;) g.f ? g.t[g.p](g.c * this.ratio + g.s) : g.t[g.p] = g.c * this.ratio + g.s, g = g._next;
                    this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, !0, a), !t && (this._totalTime !== l || c) && this._callback("onUpdate")), this._cycle === _ || t || this._gc || !this.vars.onRepeat || this._callback("onRepeat"), c && (!this._gc || a) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, !0, a), m && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[c] && this._callback(c), 0 === p && this._rawPrevTime === i && T !== i && (this._rawPrevTime = 0))
                }, r.to = function(e, t, i) {
                    return new r(e, t, i)
                }, r.from = function(e, t, i) {
                    return i.runBackwards = !0, i.immediateRender = !1 != i.immediateRender, new r(e, t, i)
                }, r.fromTo = function(e, t, i, a) {
                    return a.startAt = i, a.immediateRender = !1 != a.immediateRender && !1 != i.immediateRender, new r(e, t, a)
                }, r.staggerTo = r.allTo = function(n, _, d, m, c, g, f) {
                    m = m || 0;
                    var y = 0,
                        h = [],
                        a = function() {
                            d.onComplete && d.onComplete.apply(d.onCompleteScope || this, arguments), c.apply(f || d.callbackScope || this, g || l)
                        },
                        T = d.cycle,
                        x = d.startAt && d.startAt.cycle,
                        v, b, P, i;
                    for (o(n) || ("string" == typeof n && (n = u.f.selector(n) || n), s(n) && (n = e(n))), n = n || [], 0 > m && (n = e(n), n.reverse(), m *= -1), v = n.length - 1, P = 0; P <= v; P++) {
                        for (i in b = {}, d) b[i] = d[i];
                        if (T && (t(b, n, P), null != b.duration && (_ = b.duration, delete b.duration)), x) {
                            for (i in x = b.startAt = {}, d.startAt) x[i] = d.startAt[i];
                            t(b.startAt, n, P)
                        }
                        b.delay = y + (b.delay || 0), P === v && c && (b.onComplete = a), h[P] = new r(n[P], _, b), y += m
                    }
                    return h
                }, r.staggerFrom = r.allFrom = function(e, t, i, a, n, s, o) {
                    return i.runBackwards = !0, i.immediateRender = !1 != i.immediateRender, r.staggerTo(e, t, i, a, n, s, o)
                }, r.staggerFromTo = r.allFromTo = function(e, t, i, a, n, s, o, l) {
                    return a.startAt = i, a.immediateRender = !1 != a.immediateRender && !1 != i.immediateRender, r.staggerTo(e, t, a, n, s, o, l)
                }, r.delayedCall = function(e, t, i, a, n) {
                    return new r(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: i,
                        callbackScope: a,
                        onReverseComplete: t,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    })
                }, r.set = function(e, t) {
                    return new r(e, 0, t)
                }, r.isTweening = function(e) {
                    return 0 < u.f.getTweensOf(e, !0).length
                };
                var _ = function(e, t) {
                        for (var i = [], a = 0, r = e._first; r;) r instanceof u.f ? i[a++] = r : (t && (i[a++] = r), i = i.concat(_(r, t)), a = i.length), r = r._next;
                        return i
                    },
                    p = r.getAllTweens = function(e) {
                        return _(u.a._rootTimeline, e).concat(_(u.a._rootFramesTimeline, e))
                    };
                r.killAll = function(e, t, r, n) {
                    null == t && (t = !0), null == r && (r = !0);
                    var s = p(!1 != n),
                        a = s.length,
                        o = t && r && n,
                        l, _, d;
                    for (d = 0; d < a; d++) _ = s[d], (o || _ instanceof u.c || (l = _.target === _.vars.onComplete) && r || t && !l) && (e ? _.totalTime(_._reversed ? 0 : _.totalDuration()) : _._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, _) {
                    if (null != t) {
                        var d = n.tweenLookup,
                            m, a, c, p, i;
                        if ("string" == typeof t && (t = u.f.selector(t) || t), s(t) && (t = e(t)), o(t)) {
                            for (p = t.length; - 1 < --p;) r.killChildTweensOf(t[p], _);
                            return
                        }
                        for (c in m = [], d)
                            for (a = d[c].target.parentNode; a;) a === t && (m = m.concat(d[c].tweens)), a = a.parentNode;
                        for (i = m.length, p = 0; p < i; p++) _ && m[p].totalTime(m[p].totalDuration()), m[p]._enabled(!1, !1)
                    }
                };
                var d = function(e, t, r, n) {
                    t = !1 !== t, r = !1 !== r, n = !1 !== n;
                    for (var s = p(n), a = t && r && n, o = s.length, i, l; - 1 < --o;) l = s[o], (a || l instanceof u.c || (i = l.target === l.vars.onComplete) && r || t && !i) && l.paused(e)
                };
                return r.pauseAll = function(e, t, i) {
                    d(!0, e, t, i)
                }, r.resumeAll = function(e, t, i) {
                    d(!1, e, t, i)
                }, r.globalTimeScale = function(e) {
                    var a = u.a._rootTimeline,
                        r = u.f.ticker.time;
                    return arguments.length ? (e = e || i, a._startTime = r - (r - a._startTime) * a._timeScale / e, a = u.a._rootFramesTimeline, r = u.f.ticker.frame, a._startTime = r - (r - a._startTime) * a._timeScale / e, a._timeScale = u.a._rootTimeline._timeScale = e, e) : a._timeScale
                }, a.progress = function(e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
                }, a.totalProgress = function(e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
                }, a.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, a.duration = function(e) {
                    return arguments.length ? u.a.prototype.duration.call(this, e) : this._duration
                }, a.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, a.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, a.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, a.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, r
            }, !0);
            var c = u.g.TweenMax;
            u.e._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function() {
                var g = function() {
                        u.d.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
                    },
                    a = u.e._gsDefine.globals,
                    c = {},
                    e = g.prototype = new u.d("css"),
                    f, y, T, h;
                e.constructor = g, g.version = "2.0.2", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, e = "px", g.suffixMap = {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e,
                    width: e,
                    height: e,
                    fontSize: e,
                    padding: e,
                    margin: e,
                    perspective: e,
                    lineHeight: ""
                };
                var t = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    x = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    P = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    O = /(?:\d|\-|\+|=|#|\.)*/g,
                    k = /opacity *= *([^)]*)/i,
                    w = /opacity:([^;]*)/i,
                    S = /alpha\(opacity *=.+?\)/i,
                    v = /^(rgb|hsl)/,
                    R = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    D = function(e, t) {
                        return t.toUpperCase()
                    },
                    z = /(?:Left|Right|Width)/i,
                    E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    X = /,(?=[^\)]*(?:\(|$))/gi,
                    I = /[\s,\(]/i,
                    B = d / 180,
                    j = 180 / d,
                    Y = {},
                    F = {
                        style: {}
                    },
                    N = u.e.document || {
                        createElement: function() {
                            return F
                        }
                    },
                    U = function(e, t) {
                        return N.createElementNS ? N.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : N.createElement(e)
                    },
                    M = U("div"),
                    V = U("img"),
                    W = g._internals = {
                        _specialProps: c
                    },
                    G = (u.e.navigator || {}).userAgent || "",
                    Z = function() {
                        var e = G.indexOf("Android"),
                            t = U("a");
                        return (Te = -1 !== G.indexOf("Safari") && -1 === G.indexOf("Chrome") && (-1 === e || 3 < parseFloat(G.substr(e + 8, 2))), ve = Te && 6 > parseFloat(G.substr(G.indexOf("Version/") + 8, 2)), xe = -1 !== G.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(G) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(G)) && (be = parseFloat(RegExp.$1)), !!t) && (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity))
                    }(),
                    H = function(e) {
                        return k.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    q = function(e) {
                        u.e.console && console.log(e)
                    },
                    $ = "",
                    Q = "",
                    J = function(t, r) {
                        r = r || M;
                        var e = r.style,
                            n, a;
                        if (void 0 !== e[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], a = 5; - 1 < --a && void 0 === e[n[a] + t];);
                        return 0 <= a ? (Q = 3 === a ? "ms" : n[a], $ = "-" + Q.toLowerCase() + "-", Q + t) : null
                    },
                    K = ("undefined" == typeof window ? N.defaultView || {
                        getComputedStyle: function() {}
                    } : window).getComputedStyle,
                    ee = g.getStyle = function(e, t, i, a, r) {
                        var n;
                        return Z || "opacity" !== t ? (!a && e.style[t] ? n = e.style[t] : (i = i || K(e)) ? n = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(R, "-$1").toLowerCase()) : e.currentStyle && (n = e.currentStyle[t]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : H(e)
                    },
                    te = W.convertToPixels = function(e, t, i, a, r) {
                        if ("px" === a || !a && "lineHeight" !== t) return i;
                        if ("auto" === a || !i) return 0;
                        var n = z.test(t),
                            s = e,
                            o = M.style,
                            l = 0 > i,
                            _ = 1 === i,
                            p, d, m;
                        if (l && (i = -i), _ && (i *= 100), "lineHeight" === t && !a) d = K(e).lineHeight, e.style.lineHeight = i, p = parseFloat(K(e).lineHeight), e.style.lineHeight = d;
                        else if ("%" === a && -1 !== t.indexOf("border")) p = i / 100 * (n ? e.clientWidth : e.clientHeight);
                        else {
                            if (o.cssText = "border:0 solid red;position:" + ee(e, "position") + ";line-height:0;", "%" === a || !s.appendChild || "v" === a.charAt(0) || "rem" === a) {
                                if (s = e.parentNode || N.body, -1 !== ee(s, "display").indexOf("flex") && (o.position = "absolute"), d = s._gsCache, m = u.f.ticker.frame, d && n && d.time === m) return d.width * i / 100;
                                o[n ? "width" : "height"] = i + a
                            } else o[n ? "borderLeftWidth" : "borderTopWidth"] = i + a;
                            s.appendChild(M), p = parseFloat(M[n ? "offsetWidth" : "offsetHeight"]), s.removeChild(M), n && "%" == a && !1 !== g.cacheWidths && (d = s._gsCache = s._gsCache || {}, d.time = m, d.width = 100 * (p / i)), 0 !== p || r || (p = te(e, t, i, a, !0))
                        }
                        return _ && (p /= 100), l ? -p : p
                    },
                    ie = W.calculateOffset = function(e, t, i) {
                        if ("absolute" !== ee(e, "position", i)) return 0;
                        var a = "left" === t ? "Left" : "Top",
                            r = ee(e, "margin" + a, i);
                        return e["offset" + a] - (te(e, t, parseFloat(r), r.replace(O, "")) || 0)
                    },
                    ae = function(e, t) {
                        var a = {},
                            r, i, n;
                        if (t = t || K(e, null)) {
                            if (r = t.length)
                                for (; - 1 < --r;) n = t[r], (-1 === n.indexOf("-transform") || je === n) && (a[n.replace(C, D)] = t.getPropertyValue(n));
                            else
                                for (r in t)(-1 === r.indexOf("Transform") || Be === r) && (a[r] = t[r]);
                        } else if (t = e.currentStyle || e.style)
                            for (r in t) "string" == typeof r && void 0 === a[r] && (a[r.replace(C, D)] = t[r]);
                        return Z || (a.opacity = H(e)), i = Je(e, t, !1), a.rotation = i.rotation, a.skewX = i.skewX, a.scaleX = i.scaleX, a.scaleY = i.scaleY, a.x = i.x, a.y = i.y, Fe && (a.z = i.z, a.rotationX = i.rotationX, a.rotationY = i.rotationY, a.scaleZ = i.scaleZ), a.filters && delete a.filters, a
                    },
                    re = function(e, t, i, a, r) {
                        var n = {},
                            s = e.style,
                            o, l, _;
                        for (l in i) "cssText" !== l && "length" !== l && isNaN(l) && (t[l] !== (o = i[l]) || r && r[l]) && -1 === l.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (n[l] = "auto" === o && ("left" === l || "top" === l) ? ie(e, l) : ("" === o || "auto" === o || "none" === o) && "string" == typeof t[l] && "" !== t[l].replace(P, "") ? 0 : o, void 0 !== s[l] && (_ = new Re(s, l, s[l], _)));
                        if (a)
                            for (l in a) "className" !== l && (n[l] = a[l]);
                        return {
                            difs: n,
                            firstMPT: _
                        }
                    },
                    ne = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    se = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    oe = function(e, t, r) {
                        if ("svg" === (e.nodeName + "").toLowerCase()) return (r || K(e))[t] || 0;
                        if (e.getCTM && qe(e)) return e.getBBox()[t] || 0;
                        var n = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                            s = ne[t],
                            a = s.length;
                        for (r = r || K(e, null); - 1 < --a;) n -= parseFloat(ee(e, "padding" + s[a], r, !0)) || 0, n -= parseFloat(ee(e, "border" + s[a] + "Width", r, !0)) || 0;
                        return n
                    },
                    le = function(e, t) {
                        if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                        (null == e || "" === e) && (e = "0 0");
                        var r = e.split(" "),
                            a = -1 === e.indexOf("left") ? -1 === e.indexOf("right") ? r[0] : "100%" : "0%",
                            n = -1 === e.indexOf("top") ? -1 === e.indexOf("bottom") ? r[1] : "100%" : "0%",
                            s;
                        if (3 < r.length && !t) {
                            for (r = e.split(", ").join(",").split(","), e = [], s = 0; s < r.length; s++) e.push(le(r[s]));
                            return e.join(",")
                        }
                        return null == n ? n = "center" === a ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === a || isNaN(parseFloat(a)) && -1 === (a + "").indexOf("=")) && (a = "50%"), e = a + " " + n + (2 < r.length ? " " + r[2] : ""), t && (t.oxp = -1 !== a.indexOf("%"), t.oyp = -1 !== n.indexOf("%"), t.oxr = "=" === a.charAt(1), t.oyr = "=" === n.charAt(1), t.ox = parseFloat(a.replace(P, "")), t.oy = parseFloat(n.replace(P, "")), t.v = e), t || e
                    },
                    _e = function(t, i) {
                        return "function" == typeof t && (t = t(we, Pe)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(i) || 0
                    },
                    pe = function(e, t) {
                        "function" == typeof e && (e = e(we, Pe));
                        var i = "string" == typeof e && "=" === e.charAt(1);
                        return "string" == typeof e && "v" === e.charAt(e.length - 2) && (e = (i ? e.substr(0, 2) : 0) + window["inner" + ("vh" === e.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? e.substr(2) : e) / 100)), null == e ? t : i ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
                    },
                    de = function(e, t, i, a) {
                        var r = 1e-6,
                            n, s, o, l, _;
                        return "function" == typeof e && (e = e(we, Pe)), null == e ? l = t : "number" == typeof e ? l = e : (n = 360, s = e.split("_"), _ = "=" === e.charAt(1), o = (_ ? parseInt(e.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === e.indexOf("rad") ? 1 : j) - (_ ? 0 : t), s.length && (a && (a[i] = t + o), -1 !== e.indexOf("short") && (o %= n, o != o % (n / 2) && (o = 0 > o ? o + n : o - n)), -1 !== e.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * n) % n - (0 | o / n) * n : -1 !== e.indexOf("ccw") && 0 < o && (o = (o - 9999999999 * n) % n - (0 | o / n) * n)), l = t + o), l < r && l > -r && (l = 0), l
                    },
                    me = {
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
                    ce = function(e, t, i) {
                        return e = 0 > e ? e + 1 : 1 < e ? e - 1 : e, 0 | 255 * (1 > 6 * e ? t + 6 * ((i - t) * e) : .5 > e ? i : 2 > 3 * e ? t + 6 * ((i - t) * (2 / 3 - e)) : t) + .5
                    },
                    ue = g.parseColor = function(e, i) {
                        var n, a, r, o, m, c, s, l, u, g, d;
                        if (!e) n = me.black;
                        else if ("number" == typeof e) n = [e >> 16, 255 & e >> 8, 255 & e];
                        else {
                            if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), me[e]) n = me[e];
                            else if ("#" === e.charAt(0)) 4 === e.length && (a = e.charAt(1), r = e.charAt(2), o = e.charAt(3), e = "#" + a + a + r + r + o + o), e = parseInt(e.substr(1), 16), n = [e >> 16, 255 & e >> 8, 255 & e];
                            else if ("hsl" !== e.substr(0, 3)) n = e.match(t) || me.transparent;
                            else if (n = d = e.match(t), !i) m = +n[0] % 360 / 360, c = +n[1] / 100, s = +n[2] / 100, r = .5 >= s ? s * (c + 1) : s + c - s * c, a = 2 * s - r, 3 < n.length && (n[3] = +n[3]), n[0] = ce(m + 1 / 3, a, r), n[1] = ce(m, a, r), n[2] = ce(m - 1 / 3, a, r);
                            else if (-1 !== e.indexOf("=")) return e.match(x);
                            n[0] = +n[0], n[1] = +n[1], n[2] = +n[2], 3 < n.length && (n[3] = +n[3])
                        }
                        return i && !d && (a = n[0] / 255, r = n[1] / 255, o = n[2] / 255, l = _(a, r, o), u = p(a, r, o), s = (l + u) / 2, l === u ? m = c = 0 : (g = l - u, c = .5 < s ? g / (2 - l - u) : g / (l + u), m = l === a ? (r - o) / g + (r < o ? 6 : 0) : l === r ? (o - a) / g + 2 : (a - r) / g + 4, m *= 60), n[0] = 0 | m + .5, n[1] = 0 | 100 * c + .5, n[2] = 0 | 100 * s + .5), n
                    },
                    ge = function(e, t) {
                        var a = e.match(fe) || [],
                            r = 0,
                            n = "",
                            s, i, o;
                        if (!a.length) return e;
                        for (s = 0; s < a.length; s++) i = a[s], o = e.substr(r, e.indexOf(i, r) - r), r += o.length + i.length, i = ue(i, t), 3 === i.length && i.push(1), n += o + (t ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
                        return n + e.substr(r)
                    },
                    fe = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",
                    ye, he, Te, xe, ve, be, Pe, we;
                for (e in me) fe += "|" + e + "\\b";
                fe = new RegExp(fe + ")", "gi"), g.colorStringFilter = function(e) {
                    var t = e[0] + " " + e[1],
                        i;
                    fe.test(t) && (i = -1 !== t.indexOf("hsl(") || -1 !== t.indexOf("hsla("), e[0] = ge(e[0], i), e[1] = ge(e[1], i)), fe.lastIndex = 0
                }, u.f.defaultStringFilter || (u.f.defaultStringFilter = g.colorStringFilter);
                var Oe = function(e, i, a, r) {
                        if (null == e) return function(e) {
                            return e
                        };
                        var n = i ? (e.match(fe) || [""])[0] : "",
                            s = e.split(n).join("").match(b) || [],
                            o = e.substr(0, e.indexOf(s[0])),
                            l = ")" === e.charAt(e.length - 1) ? ")" : "",
                            _ = -1 === e.indexOf(" ") ? "," : " ",
                            p = s.length,
                            d = 0 < p ? s[0].replace(t, "") : "",
                            m;
                        return p ? i ? (m = function(e) {
                            var t, c, u, i;
                            if ("number" == typeof e) e += d;
                            else if (r && X.test(e)) {
                                for (i = e.replace(X, "|").split("|"), u = 0; u < i.length; u++) i[u] = m(i[u]);
                                return i.join(",")
                            }
                            if (t = (e.match(fe) || [n])[0], c = e.split(t).join("").match(b) || [], u = c.length, p > u--)
                                for (; ++u < p;) c[u] = a ? c[0 | (u - 1) / 2] : s[u];
                            return o + c.join(_) + _ + t + l + (-1 === e.indexOf("inset") ? "" : " inset")
                        }, m) : (m = function(e) {
                            var t, n, c;
                            if ("number" == typeof e) e += d;
                            else if (r && X.test(e)) {
                                for (n = e.replace(X, "|").split("|"), c = 0; c < n.length; c++) n[c] = m(n[c]);
                                return n.join(",")
                            }
                            if (t = e.match(b) || [], c = t.length, p > c--)
                                for (; ++c < p;) t[c] = a ? t[0 | (c - 1) / 2] : s[c];
                            return o + t.join(_) + l
                        }, m) : function(e) {
                            return e
                        }
                    },
                    ke = function(e) {
                        return e = e.split(","),
                            function(r, t, n, s, o, l, _) {
                                var p = (t + "").split(" "),
                                    a;
                                for (_ = {}, a = 0; 4 > a; a++) _[e[a]] = p[a] = p[a] || p[(a - 1) / 2 >> 0];
                                return s.parse(r, _, o, l)
                            }
                    },
                    Se = W._setPluginRatio = function(e) {
                        this.plugin.setRatio(e);
                        for (var t = this.data, a = t.proxy, r = t.firstMPT, n = 1e-6, s, o, l, i, _; r;) s = a[r.v], r.r ? s = r.r(s) : s < n && s > -n && (s = 0), r.t[r.p] = s, r = r._next;
                        if (t.autoRotate && (t.autoRotate.rotation = t.mod ? t.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation), 1 === e || 0 === e)
                            for (r = t.firstMPT, _ = 1 === e ? "e" : "b"; r;) {
                                if (o = r.t, !o.type) o[_] = o.s + o.xs0;
                                else if (1 === o.type) {
                                    for (i = o.xs0 + o.s + o.xs1, l = 1; l < o.l; l++) i += o["xn" + l] + o["xs" + (l + 1)];
                                    o[_] = i
                                }
                                r = r._next
                            }
                    },
                    Re = function(e, t, i, a, n) {
                        this.t = e, this.p = t, this.v = i, this.r = n, a && (a._prev = this, this._next = a)
                    },
                    Ce = W._parseToProxy = function(e, t, a, r, n, s) {
                        var o = r,
                            l = {},
                            _ = {},
                            d = a._transform,
                            m = Y,
                            c, i, p, u, g;
                        for (a._transform = null, Y = t, r = g = a.parse(e, t, r, n), Y = m, s && (a._transform = d, o && (o._prev = null, o._prev && (o._prev._next = null))); r && r !== o;) {
                            if (1 >= r.type && (i = r.p, _[i] = r.s + r.c, l[i] = r.s, s || (u = new Re(r, "s", i, u, r.r), r.c = 0), 1 === r.type))
                                for (c = r.l; 0 < --c;) p = "xn" + c, i = r.p + "_" + p, _[i] = r.data[p], l[i] = r[p], s || (u = new Re(r, p, i, u, r.rxp[p]));
                            r = r._next
                        }
                        return {
                            proxy: l,
                            end: _,
                            firstMPT: u,
                            pt: g
                        }
                    },
                    Ae = W.CSSPropTween = function(i, t, a, s, o, l, _, n, p, d, c) {
                        this.t = i, this.p = t, this.s = a, this.c = s, this.n = _ || t, i instanceof Ae || h.push(this.n), this.r = n ? "function" == typeof n ? n : m : n, this.type = l || 0, p && (this.pr = p, f = !0), this.b = void 0 === d ? a : d, this.e = void 0 === c ? a + s : c, o && (this._next = o, o._prev = this)
                    },
                    De = function(e, t, i, a, r, n) {
                        var s = new Ae(e, t, i, a - i, r, -1, n);
                        return s.b = i, s.e = s.xs0 = a, s
                    },
                    ze = g.parseComplex = function(a, r, n, s, o, _, p, d, c, u) {
                        n = n || _ || "", "function" == typeof s && (s = s(we, Pe)), p = new Ae(a, r, 0, 0, p, u ? 2 : 1, null, !1, d, n, s), s += "", o && fe.test(s + n) && (s = [n, s], g.colorStringFilter(s), n = s[0], s = s[1]);
                        var f = n.split(", ").join(",").split(" "),
                            y = s.split(", ").join(",").split(" "),
                            h = f.length,
                            l = !1 !== ye,
                            T, i, v, b, P, w, O, k, S, R, C, A, D;
                        for ((-1 !== s.indexOf(",") || -1 !== n.indexOf(",")) && (-1 !== (s + n).indexOf("rgb") || -1 !== (s + n).indexOf("hsl") ? (f = f.join(" ").replace(X, ", ").split(" "), y = y.join(" ").replace(X, ", ").split(" ")) : (f = f.join(" ").split(",").join(", ").split(" "), y = y.join(" ").split(",").join(", ").split(" ")), h = f.length), h !== y.length && (f = (_ || "").split(" "), h = f.length), p.plugin = c, p.setRatio = u, fe.lastIndex = 0, T = 0; T < h; T++)
                            if (b = f[T], P = y[T] + "", k = parseFloat(b), k || 0 === k) p.appendXtra("", k, _e(P, k), P.replace(x, ""), !!(l && -1 !== P.indexOf("px")) && m, !0);
                            else if (o && fe.test(b)) A = P.indexOf(")") + 1, A = ")" + (A ? P.substr(A) : ""), D = -1 !== P.indexOf("hsl") && Z, R = P, b = ue(b, D), P = ue(P, D), S = 6 < b.length + P.length, S && !Z && 0 === P[3] ? (p["xs" + p.l] += p.l ? " transparent" : "transparent", p.e = p.e.split(y[T]).join("transparent")) : (!Z && (S = !1), D ? p.appendXtra(R.substr(0, R.indexOf("hsl")) + (S ? "hsla(" : "hsl("), b[0], _e(P[0], b[0]), ",", !1, !0).appendXtra("", b[1], _e(P[1], b[1]), "%,", !1).appendXtra("", b[2], _e(P[2], b[2]), S ? "%," : "%" + A, !1) : p.appendXtra(R.substr(0, R.indexOf("rgb")) + (S ? "rgba(" : "rgb("), b[0], P[0] - b[0], ",", Math.round, !0).appendXtra("", b[1], P[1] - b[1], ",", Math.round).appendXtra("", b[2], P[2] - b[2], S ? "," : A, Math.round), S && (b = 4 > b.length ? 1 : b[3], p.appendXtra("", b, (4 > P.length ? 1 : P[3]) - b, A, !1))), fe.lastIndex = 0;
                        else if (w = b.match(t), !w) p["xs" + p.l] += p.l || p["xs" + p.l] ? " " + P : P;
                        else {
                            if (O = P.match(x), !O || O.length !== w.length) return p;
                            for (v = 0, i = 0; i < w.length; i++) C = w[i], R = b.indexOf(C, v), p.appendXtra(b.substr(v, R - v), +C, _e(O[i], C), "", !!(l && "px" === b.substr(R + C.length, 2)) && m, 0 === i), v = R + C.length;
                            p["xs" + p.l] += b.substr(v)
                        }
                        if (-1 !== s.indexOf("=") && p.data) {
                            for (A = p.xs0 + p.data.s, T = 1; T < p.l; T++) A += p["xs" + T] + p.data["xn" + T];
                            p.e = A + p["xs" + T]
                        }
                        return p.l || (p.type = -1, p.xs0 = p.e), p.xfirst || p
                    },
                    Ee = 9;
                for (e = Ae.prototype, e.l = e.pr = 0; 0 < --Ee;) e["xn" + Ee] = 0, e["xs" + Ee] = "";
                e.xs0 = "", e._next = e._prev = e.xfirst = e.data = e.plugin = e.setRatio = e.rxp = null, e.appendXtra = function(e, t, i, a, n, r) {
                    var s = this,
                        o = s.l;
                    return (s["xs" + o] += r && (o || s["xs" + o]) ? " " + e : e || "", !i && 0 !== o && !s.plugin) ? (s["xs" + o] += t + (a || ""), s) : (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = a || "", 0 < o) ? (s.data["xn" + o] = t + i, s.rxp["xn" + o] = n, s["xn" + o] = t, s.plugin || (s.xfirst = new Ae(s, "xn" + o, t, i, s.xfirst || s, 0, s.n, n, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                        s: t + i
                    }, s.rxp = {}, s.s = t, s.c = i, s.r = n, s)
                };
                var Le = function(e, t) {
                        t = t || {}, this.p = t.prefix ? J(e) || e : e, c[e] = c[this.p] = this, this.format = t.formatter || Oe(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                    },
                    i = W._registerComplexSpecialProp = function(e, t, r) {
                        "object" != typeof t && (t = {
                            parser: r
                        });
                        var n = e.split(","),
                            a = t.defaultValue,
                            s, i;
                        for (r = r || [a], s = 0; s < n.length; s++) t.prefix = 0 === s && t.prefix, t.defaultValue = r[s] || a, i = new Le(n[s], t)
                    },
                    Xe = W._registerPluginProp = function(e) {
                        if (!c[e]) {
                            var r = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                            i(e, {
                                parser: function(i, t, e, n, s, o, l) {
                                    var _ = a.com.greensock.plugins[r];
                                    return _ ? (_._cssRegister(), c[e].parse(i, t, e, n, s, o, l)) : (q("Error: " + r + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                e = Le.prototype, e.parseComplex = function(a, t, r, e, n, s) {
                    var o = this.keyword,
                        _, i, p, d, l, m;
                    if (this.multi && (X.test(r) || X.test(t) ? (i = t.replace(X, "|").split("|"), p = r.replace(X, "|").split("|")) : o && (i = [t], p = [r])), p) {
                        for (d = p.length > i.length ? p.length : i.length, _ = 0; _ < d; _++) t = i[_] = i[_] || this.dflt, r = p[_] = p[_] || this.dflt, o && (l = t.indexOf(o), m = r.indexOf(o), l !== m && (-1 === m ? i[_] = i[_].split(o).join("") : -1 === l && (i[_] += " " + o)));
                        t = i.join(", "), r = p.join(", ")
                    }
                    return ze(a, this.p, t, r, this.clrs, this.dflt, e, this.pr, n, s)
                }, e.parse = function(i, t, e, a, r, n) {
                    return this.parseComplex(i.style, this.format(ee(i, this.p, T, !1, this.dflt)), this.format(t), r, n)
                }, g.registerSpecialProp = function(e, a, r) {
                    i(e, {
                        parser: function(i, t, e, n, s, o) {
                            var l = new Ae(i, e, 0, 0, s, 2, e, !1, r);
                            return l.plugin = o, l.setRatio = a(i, t, n._tween, e), l
                        },
                        priority: r
                    })
                }, g.useSVGTransformAttr = !0;
                var Ie = ["scaleX", "scaleY", "scaleZ", "x", "y", "z", "skewX", "skewY", "rotation", "rotationX", "rotationY", "perspective", "xPercent", "yPercent"],
                    Be = J("transform"),
                    je = $ + "transform",
                    Ye = J("transformOrigin"),
                    Fe = null !== J("perspective"),
                    Ne = W.Transform = function() {
                        this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = !!(!1 !== g.defaultForce3D && Fe) && (g.defaultForce3D || "auto")
                    },
                    Ue = u.e.SVGElement,
                    Me = function(e, t, i) {
                        var a = N.createElementNS("http://www.w3.org/2000/svg", e),
                            r = /([a-z])([A-Z])/g,
                            n;
                        for (n in i) a.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
                        return t.appendChild(a), a
                    },
                    Ve = N.documentElement || {},
                    We = function() {
                        var e = be || /Android/i.test(G) && !u.e.chrome,
                            t, i, a;
                        return N.createElementNS && !e && (t = Me("svg", Ve), i = Me("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), a = i.getBoundingClientRect().width, i.style[Ye] = "50% 50%", i.style[Be] = "scaleX(0.5)", e = a === i.getBoundingClientRect().width && !(xe && Fe), Ve.removeChild(t)), e
                    }(),
                    Ge = function(t, e, i, r, n, s) {
                        var o = t._gsTransform,
                            l = Qe(t, !0),
                            _, p, m, u, f, y, a, h, T, d, x, v, P, w;
                        o && (P = o.xOrigin, w = o.yOrigin), (!r || 2 > (_ = r.split(" ")).length) && (a = t.getBBox(), 0 === a.x && 0 === a.y && 0 === a.width + a.height && (a = {
                            x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                            y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), e = le(e).split(" "), _ = [(-1 === e[0].indexOf("%") ? parseFloat(e[0]) : parseFloat(e[0]) / 100 * a.width) + a.x, (-1 === e[1].indexOf("%") ? parseFloat(e[1]) : parseFloat(e[1]) / 100 * a.height) + a.y]), i.xOrigin = u = parseFloat(_[0]), i.yOrigin = f = parseFloat(_[1]), r && l !== $e && (y = l[0], a = l[1], h = l[2], T = l[3], d = l[4], x = l[5], v = y * T - a * h, v && (p = u * (T / v) + f * (-h / v) + (h * x - T * d) / v, m = u * (-a / v) + f * (y / v) - (y * x - a * d) / v, u = i.xOrigin = _[0] = p, f = i.yOrigin = _[1] = m)), o && (s && (i.xOffset = o.xOffset, i.yOffset = o.yOffset, o = i), n || !1 !== n && !1 !== g.defaultSmoothOrigin ? (p = u - P, m = f - w, o.xOffset += p * l[0] + m * l[2] - p, o.yOffset += p * l[1] + m * l[3] - m) : o.xOffset = o.yOffset = 0), s || t.setAttribute("data-svg-origin", _.join(" "))
                    },
                    Ze = function(e) {
                        var t = U("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            i = this.parentNode,
                            a = this.nextSibling,
                            r = this.style.cssText,
                            n;
                        if (Ve.appendChild(t), t.appendChild(this), this.style.display = "block", e) try {
                            n = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ze
                        } catch (t) {} else this._originalGetBBox && (n = this._originalGetBBox());
                        return a ? i.insertBefore(this, a) : i.appendChild(this), Ve.removeChild(t), this.style.cssText = r, n
                    },
                    He = function(t) {
                        try {
                            return t.getBBox()
                        } catch (e) {
                            return Ze.call(t, !0)
                        }
                    },
                    qe = function(t) {
                        return !!(Ue && t.getCTM && (!t.parentNode || t.ownerSVGElement) && He(t))
                    },
                    $e = [1, 0, 0, 1, 0, 0],
                    Qe = function(i, e) {
                        var a = i._gsTransform || new Ne,
                            r = 1e5,
                            o = i.style,
                            l, _, p, d, n, m;
                        if (Be ? _ = ee(i, je, null, !0) : i.currentStyle && (_ = i.currentStyle.filter.match(E), _ = _ && 4 === _.length ? [_[0].substr(4), +_[2].substr(4), +_[1].substr(4), _[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), l = !_ || "none" === _ || "matrix(1, 0, 0, 1, 0, 0)" === _, Be && ((m = !K(i) || "none" === K(i).display) || !i.parentNode) && (m && (d = o.display, o.display = "block"), !i.parentNode && (n = 1, Ve.appendChild(i)), _ = ee(i, je, null, !0), l = !_ || "none" === _ || "matrix(1, 0, 0, 1, 0, 0)" === _, d ? o.display = d : m && at(o, "display"), n && Ve.removeChild(i)), (a.svg || i.getCTM && qe(i)) && (l && -1 !== (o[Be] + "").indexOf("matrix") && (_ = o[Be], l = 0), p = i.getAttribute("transform"), l && p && (p = i.transform.baseVal.consolidate().matrix, _ = "matrix(" + p.a + "," + p.b + "," + p.c + "," + p.d + "," + p.e + "," + p.f + ")", l = 0)), l) return $e;
                        for (p = (_ || "").match(t) || [], Ee = p.length; - 1 < --Ee;) d = +p[Ee], p[Ee] = (n = d - (d |= 0)) ? (0 | n * r + (0 > n ? -.5 : .5)) / r + d : d;
                        return e && 6 < p.length ? [p[0], p[1], p[4], p[5], p[12], p[13]] : p
                    },
                    Je = W.getTransform = function(e, t, _, p) {
                        if (e._gsTransform && _ && !p) return e._gsTransform;
                        var f = _ ? e._gsTransform || new Ne : new Ne,
                            y = 0 > f.scaleX,
                            h = 2e-5,
                            T = 1e5,
                            x = Fe ? parseFloat(ee(e, Ye, t, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                            v = parseFloat(g.defaultTransformPerspective) || 0,
                            P, m, i, w, O, S;
                        if (f.svg = !!(e.getCTM && qe(e)), f.svg && (Ge(e, ee(e, Ye, t, !1, "50% 50%") + "", f, e.getAttribute("data-svg-origin")), tt = g.useSVGTransformAttr || We), P = Qe(e), P !== $e) {
                            if (16 === P.length) {
                                var R = P[0],
                                    C = P[1],
                                    A = P[2],
                                    D = P[3],
                                    z = P[4],
                                    E = P[5],
                                    L = P[6],
                                    X = P[7],
                                    I = P[8],
                                    B = P[9],
                                    Y = P[10],
                                    F = P[12],
                                    N = P[13],
                                    U = P[14],
                                    M = P[11],
                                    V = l(L, Y),
                                    W, G, Z, H, q;
                                f.zOrigin && (U = -f.zOrigin, F = I * U - P[12], N = B * U - P[13], U = Y * U + f.zOrigin - P[14]), f.rotationX = V * j, V && (H = o(-V), q = s(-V), W = z * H + I * q, G = E * H + B * q, Z = L * H + Y * q, I = z * -q + I * H, B = E * -q + B * H, Y = L * -q + Y * H, M = X * -q + M * H, z = W, E = G, L = Z), V = l(-A, Y), f.rotationY = V * j, V && (H = o(-V), q = s(-V), W = R * H - I * q, G = C * H - B * q, Z = A * H - Y * q, B = C * q + B * H, Y = A * q + Y * H, M = D * q + M * H, R = W, C = G, A = Z), V = l(C, R), f.rotation = V * j, V && (H = o(V), q = s(V), W = R * H + C * q, G = z * H + E * q, Z = I * H + B * q, C = C * H - R * q, E = E * H - z * q, B = B * H - I * q, R = W, z = G, I = Z), f.rotationX && 359.9 < n(f.rotationX) + n(f.rotation) && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), V = l(z, E), f.scaleX = (0 | r(R * R + C * C + A * A) * T + .5) / T, f.scaleY = (0 | r(E * E + L * L) * T + .5) / T, f.scaleZ = (0 | r(I * I + B * B + Y * Y) * T + .5) / T, R /= f.scaleX, z /= f.scaleY, C /= f.scaleX, E /= f.scaleY, n(V) > h ? (f.skewX = V * j, z = 0, "simple" !== f.skewType && (f.scaleY *= 1 / o(V))) : f.skewX = 0, f.perspective = M ? 1 / (0 > M ? -M : M) : 0, f.x = F, f.y = N, f.z = U, f.svg && (f.x -= f.xOrigin - (f.xOrigin * R - f.yOrigin * z), f.y -= f.yOrigin - (f.yOrigin * C - f.xOrigin * E))
                            } else if (!Fe || p || !P.length || f.x !== P[4] || f.y !== P[5] || !f.rotationX && !f.rotationY) {
                                var $ = 6 <= P.length,
                                    k = $ ? P[0] : 1,
                                    a = P[1] || 0,
                                    b = P[2] || 0,
                                    c = $ ? P[3] : 1;
                                f.x = P[4] || 0, f.y = P[5] || 0, i = r(k * k + a * a), w = r(c * c + b * b), O = k || a ? l(a, k) * j : f.rotation || 0, S = b || c ? l(b, c) * j + O : f.skewX || 0, f.scaleX = i, f.scaleY = w, f.rotation = O, f.skewX = S, Fe && (f.rotationX = f.rotationY = f.z = 0, f.perspective = v, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * k + f.yOrigin * b), f.y -= f.yOrigin - (f.xOrigin * a + f.yOrigin * c))
                            }
                            for (m in 90 < n(f.skewX) && 270 > n(f.skewX) && (y ? (f.scaleX *= -1, f.skewX += 0 >= f.rotation ? 180 : -180, f.rotation += 0 >= f.rotation ? 180 : -180) : (f.scaleY *= -1, f.skewX += 0 >= f.skewX ? 180 : -180)), f.zOrigin = x, f) f[m] < h && f[m] > -h && (f[m] = 0)
                        }
                        return _ && (e._gsTransform = f, f.svg && (tt && e.style[Be] ? u.f.delayedCall(.001, function() {
                            at(e.style, Be)
                        }) : !tt && e.getAttribute("transform") && u.f.delayedCall(.001, function() {
                            e.removeAttribute("transform")
                        }))), f
                    },
                    Ke = function(e) {
                        var i = this.data,
                            t = -i.rotation * B,
                            r = t + i.skewX * B,
                            n = 1e5,
                            l = (0 | o(t) * i.scaleX * n) / n,
                            _ = (0 | s(t) * i.scaleX * n) / n,
                            p = (0 | s(r) * -i.scaleY * n) / n,
                            u = (0 | o(r) * i.scaleY * n) / n,
                            g = this.t.style,
                            f = this.t.currentStyle,
                            y, T;
                        if (f) {
                            T = _, _ = -p, p = -T, y = f.filter, g.filter = "";
                            var x = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                h = "absolute" !== f.position,
                                P = "progid:DXImageTransform.Microsoft.Matrix(M11=" + l + ", M12=" + _ + ", M21=" + p + ", M22=" + u,
                                w = i.x + x * i.xPercent / 100,
                                S = i.y + v * i.yPercent / 100,
                                R, C;
                            if (null != i.ox && (R = (i.oxp ? .01 * (x * i.ox) : i.ox) - x / 2, C = (i.oyp ? .01 * (v * i.oy) : i.oy) - v / 2, w += R - (R * l + C * _), S += C - (R * p + C * u)), h ? (R = x / 2, C = v / 2, P += ", Dx=" + (R - (R * l + C * _) + w) + ", Dy=" + (C - (R * p + C * u) + S) + ")") : P += ", sizingMethod='auto expand')", g.filter = -1 === y.indexOf("DXImageTransform.Microsoft.Matrix(") ? P + " " + y : y.replace(L, P), 0 !== e && 1 !== e || 1 != l || 0 != _ || 0 != p || 1 != u || h && -1 === P.indexOf("Dx=0, Dy=0") || k.test(y) && 100 !== parseFloat(RegExp.$1) || -1 !== y.indexOf(y.indexOf("Alpha")) || g.removeAttribute("filter"), !h) {
                                var A = 8 > be ? 1 : -1,
                                    D, z, E;
                                for (R = i.ieOffsetX || 0, C = i.ieOffsetY || 0, i.ieOffsetX = m((x - ((0 > l ? -l : l) * x + (0 > _ ? -_ : _) * v)) / 2 + w), i.ieOffsetY = m((v - ((0 > u ? -u : u) * v + (0 > p ? -p : p) * x)) / 2 + S), Ee = 0; 4 > Ee; Ee++) z = se[Ee], D = f[z], T = -1 === D.indexOf("px") ? te(this.t, z, parseFloat(D), D.replace(O, "")) || 0 : parseFloat(D), E = T === i[z] ? 2 > Ee ? R - i.ieOffsetX : C - i.ieOffsetY : 2 > Ee ? -i.ieOffsetX : -i.ieOffsetY, g[z] = (i[z] = m(T - E * (0 === Ee || 2 === Ee ? 1 : A))) + "px"
                            }
                        }
                    },
                    et = W.set3DTransformRatio = W.setTransformRatio = function(e) {
                        var i = Math.tan,
                            a = this.data,
                            t = this.t.style,
                            n = a.rotation,
                            l = a.rotationX,
                            _ = a.rotationY,
                            p = a.scaleX,
                            d = a.scaleY,
                            m = a.scaleZ,
                            c = a.x,
                            u = a.y,
                            g = a.z,
                            f = a.svg,
                            y = a.perspective,
                            h = a.force3D,
                            T = a.skewY,
                            x = a.skewX,
                            v, b, P, w, O, k, S, R, C, A, D, E, L, X, I, j, Y, F, N, U, M, V, W;
                        if (T && (x += T, n += T), ((1 === e || 0 === e) && "auto" === h && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !h) && !g && !y && !_ && !l && 1 === m || tt && f || !Fe) return void(n || x || f ? (n *= B, V = x * B, W = 1e5, b = o(n) * p, O = s(n) * p, P = s(n - V) * -d, k = o(n - V) * d, V && "simple" === a.skewType && (v = i(V - T * B), v = r(1 + v * v), P *= v, k *= v, T && (v = i(T * B), v = r(1 + v * v), b *= v, O *= v)), f && (c += a.xOrigin - (a.xOrigin * b + a.yOrigin * P) + a.xOffset, u += a.yOrigin - (a.xOrigin * O + a.yOrigin * k) + a.yOffset, tt && (a.xPercent || a.yPercent) && (I = this.t.getBBox(), c += .01 * a.xPercent * I.width, u += .01 * a.yPercent * I.height), I = 1e-6, c < I && c > -I && (c = 0), u < I && u > -I && (u = 0)), N = (0 | b * W) / W + "," + (0 | O * W) / W + "," + (0 | P * W) / W + "," + (0 | k * W) / W + "," + c + "," + u + ")", f && tt ? this.t.setAttribute("transform", "matrix(" + N) : t[Be] = (a.xPercent || a.yPercent ? "translate(" + a.xPercent + "%," + a.yPercent + "%) matrix(" : "matrix(") + N) : t[Be] = (a.xPercent || a.yPercent ? "translate(" + a.xPercent + "%," + a.yPercent + "%) matrix(" : "matrix(") + p + ",0,0," + d + "," + c + "," + u + ")");
                        if (xe && (I = 1e-4, p < I && p > -I && (p = m = 2e-5), d < I && d > -I && (d = m = 2e-5), y && !a.z && !a.rotationX && !a.rotationY && (y = 0)), n || x) n *= B, j = b = o(n), Y = O = s(n), x && (n -= x * B, j = o(n), Y = s(n), "simple" === a.skewType && (v = i((x - T) * B), v = r(1 + v * v), j *= v, Y *= v, a.skewY && (v = i(T * B), v = r(1 + v * v), b *= v, O *= v))), P = -Y, k = j;
                        else {
                            if (!_ && !l && 1 === m && !y && !f) return void(t[Be] = (a.xPercent || a.yPercent ? "translate(" + a.xPercent + "%," + a.yPercent + "%) translate3d(" : "translate3d(") + c + "px," + u + "px," + g + "px)" + (1 !== p || 1 !== d ? " scale(" + p + "," + d + ")" : ""));
                            b = k = 1, P = O = 0
                        }
                        A = 1, w = S = R = C = D = E = 0, L = y ? -1 / y : 0, X = a.zOrigin, I = 1e-6, U = ",", M = "0", n = _ * B, n && (j = o(n), Y = s(n), R = -Y, D = L * -Y, w = b * Y, S = O * Y, A = j, L *= j, b *= j, O *= j), n = l * B, n && (j = o(n), Y = s(n), v = P * j + w * Y, F = k * j + S * Y, C = A * Y, E = L * Y, w = P * -Y + w * j, S = k * -Y + S * j, A *= j, L *= j, P = v, k = F), 1 !== m && (w *= m, S *= m, A *= m, L *= m), 1 !== d && (P *= d, k *= d, C *= d, E *= d), 1 !== p && (b *= p, O *= p, R *= p, D *= p), (X || f) && (X && (c += w * -X, u += S * -X, g += A * -X + X), f && (c += a.xOrigin - (a.xOrigin * b + a.yOrigin * P) + a.xOffset, u += a.yOrigin - (a.xOrigin * O + a.yOrigin * k) + a.yOffset), c < I && c > -I && (c = M), u < I && u > -I && (u = M), g < I && g > -I && (g = 0)), N = a.xPercent || a.yPercent ? "translate(" + a.xPercent + "%," + a.yPercent + "%) matrix3d(" : "matrix3d(", N += (b < I && b > -I ? M : b) + U + (O < I && O > -I ? M : O) + U + (R < I && R > -I ? M : R), N += U + (D < I && D > -I ? M : D) + U + (P < I && P > -I ? M : P) + U + (k < I && k > -I ? M : k), l || _ || 1 !== m ? (N += U + (C < I && C > -I ? M : C) + U + (E < I && E > -I ? M : E) + U + (w < I && w > -I ? M : w), N += U + (S < I && S > -I ? M : S) + U + (A < I && A > -I ? M : A) + U + (L < I && L > -I ? M : L) + U) : N += ",0,0,0,0,1,0,", N += c + U + u + U + g + U + (y ? 1 + -g / y : 1) + ")", t[Be] = N
                    },
                    tt;
                e = Ne.prototype, e.x = e.y = e.z = e.skewX = e.skewY = e.rotation = e.rotationX = e.rotationY = e.zOrigin = e.xPercent = e.yPercent = e.xOffset = e.yOffset = 0, e.scaleX = e.scaleY = e.scaleZ = 1, i("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(a, t, e, r, n, s, l) {
                        if (r._lastParsedTransform === l) return n;
                        r._lastParsedTransform = l;
                        var _ = l.scale && "function" == typeof l.scale ? l.scale : 0,
                            d;
                        "function" == typeof l[e] && (d = l[e], l[e] = t), _ && (l.scale = _(we, a));
                        var m = a._gsTransform,
                            c = a.style,
                            u = 1e-6,
                            f = Ie.length,
                            i = l,
                            h = {},
                            b = "transformOrigin",
                            P = Je(a, T, !0, i.parseTransform),
                            w = i.transform && ("function" == typeof i.transform ? i.transform(we, Pe) : i.transform),
                            O, k, S, R, C, A, x, y, D;
                        if (P.skewType = i.skewType || P.skewType || g.defaultSkewType, r._transform = P, "rotationZ" in i && (i.rotation = i.rotationZ), w && "string" == typeof w && Be) k = M.style, k[Be] = w, k.display = "block", k.position = "absolute", -1 !== w.indexOf("%") && (k.width = ee(a, "width"), k.height = ee(a, "height")), N.body.appendChild(M), O = Je(M, null, !1), "simple" === P.skewType && (O.scaleY *= o(O.skewX * B)), P.svg && (A = P.xOrigin, x = P.yOrigin, O.x -= P.xOffset, O.y -= P.yOffset, (i.transformOrigin || i.svgOrigin) && (w = {}, Ge(a, le(i.transformOrigin), w, i.svgOrigin, i.smoothOrigin, !0), A = w.xOrigin, x = w.yOrigin, O.x -= w.xOffset - P.xOffset, O.y -= w.yOffset - P.yOffset), (A || x) && (y = Qe(M, !0), O.x -= A - (A * y[0] + x * y[2]), O.y -= x - (A * y[1] + x * y[3]))), N.body.removeChild(M), O.perspective || (O.perspective = P.perspective), null != i.xPercent && (O.xPercent = pe(i.xPercent, P.xPercent)), null != i.yPercent && (O.yPercent = pe(i.yPercent, P.yPercent));
                        else if ("object" == typeof i) {
                            if (O = {
                                    scaleX: pe(null == i.scaleX ? i.scale : i.scaleX, P.scaleX),
                                    scaleY: pe(null == i.scaleY ? i.scale : i.scaleY, P.scaleY),
                                    scaleZ: pe(i.scaleZ, P.scaleZ),
                                    x: pe(i.x, P.x),
                                    y: pe(i.y, P.y),
                                    z: pe(i.z, P.z),
                                    xPercent: pe(i.xPercent, P.xPercent),
                                    yPercent: pe(i.yPercent, P.yPercent),
                                    perspective: pe(i.transformPerspective, P.perspective)
                                }, C = i.directionalRotation, null != C)
                                if ("object" == typeof C)
                                    for (k in C) i[k] = C[k];
                                else i.rotation = C;
                            "string" == typeof i.x && -1 !== i.x.indexOf("%") && (O.x = 0, O.xPercent = pe(i.x, P.xPercent)), "string" == typeof i.y && -1 !== i.y.indexOf("%") && (O.y = 0, O.yPercent = pe(i.y, P.yPercent)), O.rotation = de("rotation" in i ? i.rotation : "shortRotation" in i ? i.shortRotation + "_short" : P.rotation, P.rotation, "rotation", h), Fe && (O.rotationX = de("rotationX" in i ? i.rotationX : "shortRotationX" in i ? i.shortRotationX + "_short" : P.rotationX || 0, P.rotationX, "rotationX", h), O.rotationY = de("rotationY" in i ? i.rotationY : "shortRotationY" in i ? i.shortRotationY + "_short" : P.rotationY || 0, P.rotationY, "rotationY", h)), O.skewX = de(i.skewX, P.skewX), O.skewY = de(i.skewY, P.skewY)
                        }
                        for (Fe && null != i.force3D && (P.force3D = i.force3D, R = !0), S = P.force3D || P.z || P.rotationX || P.rotationY || O.z || O.rotationX || O.rotationY || O.perspective, S || null == i.scale || (O.scaleZ = 1); - 1 < --f;) D = Ie[f], w = O[D] - P[D], (w > u || w < -u || null != i[D] || null != Y[D]) && (R = !0, n = new Ae(P, D, P[D], w, n), D in h && (n.e = h[D]), n.xs0 = 0, n.plugin = s, r._overwriteProps.push(n.n));
                        return w = i.transformOrigin, P.svg && (w || i.svgOrigin) && (A = P.xOffset, x = P.yOffset, Ge(a, le(w), O, i.svgOrigin, i.smoothOrigin), n = De(P, "xOrigin", (m ? P : O).xOrigin, O.xOrigin, n, b), n = De(P, "yOrigin", (m ? P : O).yOrigin, O.yOrigin, n, b), (A !== P.xOffset || x !== P.yOffset) && (n = De(P, "xOffset", m ? A : P.xOffset, P.xOffset, n, b), n = De(P, "yOffset", m ? x : P.yOffset, P.yOffset, n, b)), w = "0px 0px"), (w || Fe && S && P.zOrigin) && (Be ? (R = !0, D = Ye, w = (w || ee(a, D, T, !1, "50% 50%")) + "", n = new Ae(c, D, 0, 0, n, -1, b), n.b = c[D], n.plugin = s, Fe ? (k = P.zOrigin, w = w.split(" "), P.zOrigin = (2 < w.length && (0 === k || "0px" !== w[2]) ? parseFloat(w[2]) : k) || 0, n.xs0 = n.e = w[0] + " " + (w[1] || "50%") + " 0px", n = new Ae(P, "zOrigin", 0, 0, n, -1, n.n), n.b = k, n.xs0 = n.e = P.zOrigin) : n.xs0 = n.e = w) : le(w + "", P)), R && (r._transformType = !(P.svg && tt) && (S || 3 === this._transformType) ? 3 : 2), d && (l[e] = d), _ && (l.scale = _), n
                    },
                    prefix: !0
                }), i("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), i("borderRadius", {
                    defaultValue: "0px",
                    parser: function(a, t, e, r, n) {
                        t = this.format(t);
                        var s = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            o = a.style,
                            l, _, i, p, d, m, c, u, g, f, h, x, v, b, P, w;
                        for (g = parseFloat(a.offsetWidth), f = parseFloat(a.offsetHeight), l = t.split(" "), _ = 0; _ < s.length; _++) this.p.indexOf("border") && (s[_] = J(s[_])), d = p = ee(a, s[_], T, !1, "0px"), -1 !== d.indexOf(" ") && (p = d.split(" "), d = p[0], p = p[1]), m = i = l[_], c = parseFloat(d), x = d.substr((c + "").length), v = "=" === m.charAt(1), v ? (u = parseInt(m.charAt(0) + "1", 10), m = m.substr(2), u *= parseFloat(m), h = m.substr((u + "").length - (0 > u ? 1 : 0)) || "") : (u = parseFloat(m), h = m.substr((u + "").length)), "" === h && (h = y[e] || x), h !== x && (b = te(a, "borderLeft", c, x), P = te(a, "borderTop", c, x), "%" === h ? (d = 100 * (b / g) + "%", p = 100 * (P / f) + "%") : "em" === h ? (w = te(a, "borderLeft", 1, "em"), d = b / w + "em", p = P / w + "em") : (d = b + "px", p = P + "px"), v && (m = parseFloat(d) + u + h, i = parseFloat(p) + u + h)), n = ze(o, s[_], d + " " + p, m + " " + i, !1, "0px", n);
                        return n
                    },
                    prefix: !0,
                    formatter: Oe("0px 0px 0px 0px", !1, !0)
                }), i("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(i, t, e, a, r) {
                        return ze(i.style, e, this.format(ee(i, e, T, !1, "0px 0px")), this.format(t), !1, "0px", r)
                    },
                    prefix: !0,
                    formatter: Oe("0px 0px", !1, !0)
                }), i("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(a, t, e, r, n, s) {
                        var o = "background-position",
                            l = T || K(a, null),
                            _ = this.format((l ? be ? l.getPropertyValue(o + "-x") + " " + l.getPropertyValue(o + "-y") : l.getPropertyValue(o) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                            p = this.format(t),
                            d, m, c, i, u, g;
                        if (-1 !== _.indexOf("%") != (-1 !== p.indexOf("%")) && 2 > p.split(",").length && (g = ee(a, "backgroundImage").replace(A, ""), g && "none" !== g)) {
                            for (d = _.split(" "), m = p.split(" "), V.setAttribute("src", g), c = 2; - 1 < --c;) _ = d[c], i = -1 !== _.indexOf("%"), i !== (-1 !== m[c].indexOf("%")) && (u = 0 === c ? a.offsetWidth - V.width : a.offsetHeight - V.height, d[c] = i ? parseFloat(_) / 100 * u + "px" : 100 * (parseFloat(_) / u) + "%");
                            _ = d.join(" ")
                        }
                        return this.parseComplex(a.style, _, p, n, s)
                    },
                    formatter: le
                }), i("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(e) {
                        return e += "", "co" === e.substr(0, 2) ? e : le(-1 === e.indexOf(" ") ? e + " " + e : e)
                    }
                }), i("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), i("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), i("transformStyle", {
                    prefix: !0
                }), i("backfaceVisibility", {
                    prefix: !0
                }), i("userSelect", {
                    prefix: !0
                }), i("margin", {
                    parser: ke("marginTop,marginRight,marginBottom,marginLeft")
                }), i("padding", {
                    parser: ke("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), i("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(i, t, e, a, r, n) {
                        var s, o, l;
                        return 9 > be ? (o = i.currentStyle, l = 8 > be ? " " : ",", s = "rect(" + o.clipTop + l + o.clipRight + l + o.clipBottom + l + o.clipLeft + ")", t = this.format(t).split(",").join(l)) : (s = this.format(ee(i, this.p, T, !1, this.dflt)), t = this.format(t)), this.parseComplex(i.style, s, t, r, n)
                    }
                }), i("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), i("autoRound,strictUnits", {
                    parser: function(i, t, e, a, r) {
                        return r
                    }
                }), i("border", {
                    defaultValue: "0px solid #000",
                    parser: function(i, t, e, a, r, n) {
                        var s = ee(i, "borderTopWidth", T, !1, "0px"),
                            o = this.format(t).split(" "),
                            l = o[0].replace(O, "");
                        return "px" !== l && (s = parseFloat(s) / te(i, "borderTopWidth", 1, l) + l), this.parseComplex(i.style, this.format(s + " " + ee(i, "borderTopStyle", T, !1, "solid") + " " + ee(i, "borderTopColor", T, !1, "#000")), o.join(" "), r, n)
                    },
                    color: !0,
                    formatter: function(e) {
                        var t = e.split(" ");
                        return t[0] + " " + (t[1] || "solid") + " " + (e.match(fe) || ["#000"])[0]
                    }
                }), i("borderWidth", {
                    parser: ke("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), i("float,cssFloat,styleFloat", {
                    parser: function(i, t, e, a, r) {
                        var n = i.style,
                            s = "cssFloat" in n ? "cssFloat" : "styleFloat";
                        return new Ae(n, s, 0, 0, r, -1, e, !1, 0, n[s], t)
                    }
                });
                var it = function(e) {
                    var i = this.t,
                        t = i.filter || ee(this.data, "filter") || "",
                        a = 0 | this.s + this.c * e,
                        r;
                    100 == a && (-1 === t.indexOf("atrix(") && -1 === t.indexOf("radient(") && -1 === t.indexOf("oader(") ? (i.removeAttribute("filter"), r = !ee(this.data, "filter")) : (i.filter = t.replace(S, ""), r = !0)), r || (this.xn1 && (i.filter = t = t || "alpha(opacity=" + a + ")"), -1 === t.indexOf("pacity") ? (0 != a || !this.xn1) && (i.filter = t + " alpha(opacity=" + a + ")") : i.filter = t.replace(k, "opacity=" + a))
                };
                i("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(i, t, a, r, n, s) {
                        var o = parseFloat(ee(i, "opacity", T, !1, "1")),
                            l = i.style,
                            _ = "autoAlpha" === a;
                        return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + o), _ && 1 === o && "hidden" === ee(i, "visibility", T) && 0 !== t && (o = 0), Z ? n = new Ae(l, "opacity", o, t - o, n) : (n = new Ae(l, "opacity", 100 * o, 100 * (t - o), n), n.xn1 = _ ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = i, n.plugin = s, n.setRatio = it), _ && (n = new Ae(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 === o ? "hidden" : "inherit", 0 === t ? "hidden" : "inherit"), n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(a)), n
                    }
                });
                var at = function(e, t) {
                        t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(R, "-$1").toLowerCase())) : e.removeAttribute(t))
                    },
                    rt = function(e) {
                        if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                            this.t.setAttribute("class", 0 === e ? this.b : this.e);
                            for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : at(i, t.p), t = t._next;
                            1 == e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                i("className", {
                    parser: function(i, t, e, a, r, n, s) {
                        var o = i.getAttribute("class") || "",
                            l = i.style.cssText,
                            _, p, d, m, c;
                        if (r = a._classNamePT = new Ae(i, e, 0, 0, r, 2), r.setRatio = rt, r.pr = -11, f = !0, r.b = o, p = ae(i, T), d = i._gsClassPT, d) {
                            for (m = {}, c = d.data; c;) m[c.p] = 1, c = c._next;
                            d.setRatio(1)
                        }
                        return i._gsClassPT = r, r.e = "=" === t.charAt(1) ? o.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : "") : t, i.setAttribute("class", r.e), _ = re(i, p, ae(i), s, m), i.setAttribute("class", o), r.data = _.firstMPT, i.style.cssText = l, r = r.xfirst = a.parse(i, _.difs, r, n), r
                    }
                });
                var nt = function(e) {
                    if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var t = this.t.style,
                            r = c.transform.parse,
                            n, a, s, i, o;
                        if ("all" === this.e) t.cssText = "", i = !0;
                        else
                            for (n = this.e.split(" ").join("").split(","), s = n.length; - 1 < --s;) a = n[s], c[a] && (c[a].parse === r ? i = !0 : a = "transformOrigin" === a ? Ye : c[a].p), at(t, a);
                        i && (at(t, Be), o = this.t._gsTransform, o && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (i("clearProps", {
                        parser: function(i, t, e, a, r) {
                            return r = new Ae(i, e, 0, 0, r, 2), r.setRatio = nt, r.e = t, r.pr = -10, r.data = a._tween, f = !0, r
                        }
                    }), e = ["bezier", "throwProps", "physicsProps", "physics2D"], Ee = e.length; Ee--;) Xe(e[Ee]);
                e = g.prototype, e._firstPT = e._lastParsedTransform = e._transform = null, e._onInitTween = function(e, t, i, a) {
                    if (!e.nodeType) return !1;
                    this._target = Pe = e, this._tween = i, this._vars = t, we = a, ye = t.autoRound, f = !1, y = t.suffixMap || g.suffixMap, T = K(e, ""), h = this._overwriteProps;
                    var r = e.style,
                        n, s, o, l, _, p, d, m, u;
                    if (he && "" === r.zIndex && (n = ee(e, "zIndex", T), ("auto" === n || "" === n) && this._addLazySet(r, "zIndex", 0)), "string" == typeof t && (l = r.cssText, n = ae(e, T), r.cssText = l + ";" + t, n = re(e, n, ae(e)).difs, !Z && w.test(t) && (n.opacity = parseFloat(RegExp.$1)), t = n, r.cssText = l), this._firstPT = t.className ? s = c.className.parse(e, t.className, "className", this, null, null, t) : s = this.parse(e, t, null), this._transformType) {
                        for (u = 3 === this._transformType, Be ? Te && (he = !0, "" === r.zIndex && (d = ee(e, "zIndex", T), ("auto" === d || "" === d) && this._addLazySet(r, "zIndex", 0)), ve && this._addLazySet(r, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (u ? "visible" : "hidden"))) : r.zoom = 1, o = s; o && o._next;) o = o._next;
                        m = new Ae(e, "transform", 0, 0, null, 2), this._linkCSSP(m, null, o), m.setRatio = Be ? et : Ke, m.data = this._transform || Je(e, T, !0), m.tween = i, m.pr = -1, h.pop()
                    }
                    if (f) {
                        for (; s;) {
                            for (p = s._next, o = l; o && o.pr > s.pr;) o = o._next;
                            (s._prev = o ? o._prev : _) ? s._prev._next = s: l = s, (s._next = o) ? o._prev = s : _ = s, s = p
                        }
                        this._firstPT = l
                    }
                    return !0
                }, e.parse = function(e, t, i, a) {
                    var r = e.style,
                        n, s, o, l, _, p, d, m, u, g;
                    for (n in t) {
                        if (p = t[n], "function" == typeof p && (p = p(we, Pe)), s = c[n], s) i = s.parse(e, p, n, this, i, a, t);
                        else if ("--" === n.substr(0, 2)) {
                            this._tween._propLookup[n] = this._addTween.call(this._tween, e.style, "setProperty", K(e).getPropertyValue(n) + "", p + "", n, !1, n);
                            continue
                        } else _ = ee(e, n, T) + "", u = "string" == typeof p, "color" === n || "fill" === n || "stroke" === n || -1 !== n.indexOf("Color") || u && v.test(p) ? (!u && (p = ue(p), p = (3 < p.length ? "rgba(" : "rgb(") + p.join(",") + ")"), i = ze(r, n, _, p, !0, "transparent", i, 0, a)) : u && I.test(p) ? i = ze(r, n, _, p, !0, null, i, 0, a) : (o = parseFloat(_), d = o || 0 === o ? _.substr((o + "").length) : "", ("" === _ || "auto" === _) && ("width" === n || "height" === n ? (o = oe(e, n, T), d = "px") : "left" === n || "top" === n ? (o = ie(e, n, T), d = "px") : (o = "opacity" === n ? 1 : 0, d = "")), g = u && "=" === p.charAt(1), g ? (l = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), l *= parseFloat(p), m = p.replace(O, "")) : (l = parseFloat(p), m = u ? p.replace(O, "") : ""), "" === m && (m = n in y ? y[n] : d), p = l || 0 === l ? (g ? l + o : l) + m : t[n], d !== m && ("" !== m || "lineHeight" == n) && (l || 0 === l) && o && (o = te(e, n, o, d), "%" === m ? (o /= te(e, n, 100, "%") / 100, !0 !== t.strictUnits && (_ = o + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? o /= te(e, n, 1, m) : "px" !== m && (l = te(e, n, l, m), m = "px"), g && (l || 0 === l) && (p = l + o + m)), g && (l += o), (o || 0 === o) && (l || 0 === l) ? (i = new Ae(r, n, o, l - o, i, 0, n, !1 !== ye && ("px" === m || "zIndex" == n), 0, _, p), i.xs0 = m) : void 0 !== r[n] && (p || "NaN" != p + "" && null != p) ? (i = new Ae(r, n, l || o || 0, 0, i, -1, n, !1, 0, _, p), i.xs0 = "none" === p && ("display" === n || -1 !== n.indexOf("Style")) ? _ : p) : q("invalid " + n + " tween value: " + t[n]));
                        a && i && !i.plugin && (i.plugin = a)
                    }
                    return i
                }, e.setRatio = function(e) {
                    var t = this._firstPT,
                        a = 1e-6,
                        r, n, s;
                    if (1 === e && (this._tween._time === this._tween._duration || 0 === this._tween._time))
                        for (; t;) {
                            if (2 === t.type) t.setRatio(e);
                            else if (!(t.r && -1 !== t.type)) t.t[t.p] = t.e;
                            else if (r = t.r(t.s + t.c), !t.type) t.t[t.p] = r + t.xs0;
                            else if (1 === t.type) {
                                for (s = t.l, n = t.xs0 + r + t.xs1, s = 1; s < t.l; s++) n += t["xn" + s] + t["xs" + (s + 1)];
                                t.t[t.p] = n
                            }
                            t = t._next
                        } else if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; t;) {
                                if (r = t.c * e + t.s, t.r ? r = t.r(r) : r < a && r > -a && (r = 0), !t.type) t.t[t.p] = r + t.xs0;
                                else if (1 !== t.type) - 1 === t.type ? t.t[t.p] = t.xs0 : t.setRatio && t.setRatio(e);
                                else if (s = t.l, 2 === s) t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2;
                                else if (3 === s) t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3;
                                else if (4 === s) t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4;
                                else if (5 === s) t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4 + t.xn4 + t.xs5;
                                else {
                                    for (n = t.xs0 + r + t.xs1, s = 1; s < t.l; s++) n += t["xn" + s] + t["xs" + (s + 1)];
                                    t.t[t.p] = n
                                }
                                t = t._next
                            } else
                                for (; t;) 2 === t.type ? t.setRatio(e) : t.t[t.p] = t.b, t = t._next
                }, e._enableTransforms = function(e) {
                    this._transform = this._transform || Je(this._target, T, !0), this._transformType = !(this._transform.svg && tt) && (e || 3 === this._transformType) ? 3 : 2
                };
                var st = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                e._addLazySet = function(e, t, i) {
                    var a = this._firstPT = new Ae(e, t, 0, 0, this._firstPT, 2);
                    a.e = i, a.setRatio = st, a.data = this
                }, e._linkCSSP = function(e, t, i, a) {
                    return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, a = !0), i ? i._next = e : !a && null === this._firstPT && (this._firstPT = e), e._next = t, e._prev = i), e
                }, e._mod = function(e) {
                    for (var t = this._firstPT; t;) "function" == typeof e[t.p] && (t.r = e[t.p]), t = t._next
                }, e._kill = function(e) {
                    var t = e,
                        i, a, r;
                    if (e.autoAlpha || e.alpha) {
                        for (a in t = {}, e) t[a] = e[a];
                        t.opacity = 1, t.autoAlpha && (t.visibility = 1)
                    }
                    for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== a && i.plugin._kill && (i.plugin._kill(e), a = i.plugin), i = i._next;
                    return u.d.prototype._kill.call(this, t)
                };
                var ot = function(t, e, a) {
                    var r, n, i, s;
                    if (t.slice) {
                        for (n = t.length; - 1 < --n;) ot(t[n], e, a);
                        return
                    }
                    for (r = t.childNodes, n = r.length; - 1 < --n;) i = r[n], s = i.type, i.style && (e.push(ae(i)), a && a.push(i)), (1 === s || 9 === s || 11 === s) && i.childNodes.length && ot(i, e, a)
                };
                return g.cascadeTo = function(t, a, r) {
                    var n = u.f.to(t, a, r),
                        s = [n],
                        o = [],
                        l = [],
                        e = [],
                        _ = u.f._internals.reservedProps,
                        d, i, m, p;
                    for (t = n._targets || n.target, ot(t, o, e), n.render(a, !0, !0), ot(t, l), n.render(0, !0, !0), n._enabled(!0), d = e.length; - 1 < --d;)
                        if (i = re(e[d], o[d], l[d]), i.firstMPT) {
                            for (m in i = i.difs, r) _[m] && (i[m] = r[m]);
                            for (m in p = {}, i) p[m] = o[d][m];
                            s.push(u.f.fromTo(e[d], a, p, i))
                        }
                    return s
                }, u.d.activate([g]), g
            }, !0);
            var g = u.g.CSSPlugin,
                f = u.e._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.6.1",
                    init: function(e, t, i, a) {
                        var r, n;
                        if ("function" != typeof e.setAttribute) return !1;
                        for (r in t) n = t[r], "function" == typeof n && (n = n(a, e)), this._addTween(e, "setAttribute", e.getAttribute(r) + "", n + "", r, !1, r), this._overwriteProps.push(r);
                        return !0
                    }
                }),
                y = u.e._gsDefine.plugin({
                    propName: "roundProps",
                    version: "1.7.0",
                    priority: -1,
                    API: 2,
                    init: function(e, t, i) {
                        return this._tween = i, !0
                    }
                }),
                h = function(e) {
                    var t = 1 > e ? a(10, (e + "").length - 2) : 1;
                    return function(i) {
                        return (0 | m(i / e) * e * t) / t
                    }
                },
                T = function(e, t) {
                    for (; e;) e.f || e.blob || (e.m = t || m), e = e._next
                },
                x = y.prototype;
            /*!
             * VERSION: 0.6.1
             * DATE: 2018-08-27
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             * 
             * @author: Jack Doyle, jack@greensock.com
             */
            /*!
             * VERSION: 1.6.0
             * DATE: 2018-08-27
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             * 
             * @author: Jack Doyle, jack@greensock.com
             **/
            x._onInitAllProps = function() {
                var e = this._tween,
                    t = e.vars.roundProps,
                    a = {},
                    r = e._propLookup.roundProps,
                    n, s, o, i;
                if ("object" == typeof t && !t.push)
                    for (i in t) a[i] = h(t[i]);
                else
                    for ("string" == typeof t && (t = t.split(",")), o = t.length; - 1 < --o;) a[t[o]] = m;
                for (i in a)
                    for (n = e._firstPT; n;) s = n._next, n.pg ? n.t._mod(a) : n.n === i && (2 === n.f && n.t ? T(n.t._firstPT, a[i]) : (this._add(n.t, i, n.s, n.c, a[i]), s && (s._prev = n._prev), n._prev ? n._prev._next = s : e._firstPT === n && (e._firstPT = s), n._next = n._prev = null, e._propLookup[i] = r)), n = s;
                return !1
            }, x._add = function(e, t, i, a, r) {
                this._addTween(e, t, i, i + a, t, r || m), this._overwriteProps.push(t)
            };
            /*!
             * VERSION: 0.3.1
             * DATE: 2018-08-27
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             * 
             * @author: Jack Doyle, jack@greensock.com
             **/
            var v = u.e._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(e, t, i, a) {
                    "object" != typeof t && (t = {
                        rotation: t
                    }), this.finals = {};
                    var r = !0 === t.useRadians ? 2 * d : 360,
                        n = 1e-6,
                        s, o, l, _, p, m;
                    for (s in t) "useRadians" !== s && (_ = t[s], "function" == typeof _ && (_ = _(a, e)), m = (_ + "").split("_"), o = m[0], l = parseFloat("function" == typeof e[s] ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : e[s]), _ = this.finals[s] = "string" == typeof o && "=" === o.charAt(1) ? l + parseInt(o.charAt(0) + "1", 10) * +o.substr(2) : +o || 0, p = _ - l, m.length && (o = m.join("_"), -1 !== o.indexOf("short") && (p %= r, p !== p % (r / 2) && (p = 0 > p ? p + r : p - r)), -1 !== o.indexOf("_cw") && 0 > p ? p = (p + 9999999999 * r) % r - (0 | p / r) * r : -1 !== o.indexOf("ccw") && 0 < p && (p = (p - 9999999999 * r) % r - (0 | p / r) * r)), (p > n || p < -n) && (this._addTween(e, s, l, l + p, s), this._overwriteProps.push(s)));
                    return !0
                },
                set: function(e) {
                    var t;
                    if (1 !== e) this._super.setRatio.call(this, e);
                    else
                        for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
                }
            });
            v._autoCSS = !0, u.e._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() {
                var e = function(e) {
                        u.c.call(this, e), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var t = this.vars,
                            i, a;
                        for (a in t) i = t[a], s(i) && -1 !== i.join("").indexOf("{self}") && (t[a] = this._swapSelfInParams(i));
                        s(t.tweens) && this.add(t.tweens, 0, t.align, t.stagger)
                    },
                    t = 1e-10,
                    i = u.f._internals,
                    a = e._internals = {},
                    r = i.isSelector,
                    s = i.isArray,
                    o = i.lazyTweens,
                    l = i.lazyRender,
                    d = u.e._gsDefine.globals,
                    m = function(e) {
                        var t = {},
                            i;
                        for (i in e) t[i] = e[i];
                        return t
                    },
                    c = function(e, t, a) {
                        var i = e.cycle,
                            r, n;
                        for (r in i) n = i[r], e[r] = "function" == typeof n ? n(a, t[a]) : n[a % n.length];
                        delete e.cycle
                    },
                    g = a.pauseCallback = function() {},
                    f = function(e) {
                        var t = [],
                            a = e.length,
                            r;
                        for (r = 0; r !== a; t.push(e[r++]));
                        return t
                    },
                    y = e.prototype = new u.c;
                return e.version = "2.0.2", y.constructor = e, y.kill()._gc = y._forcingPlayhead = y._hasPause = !1, y.to = function(e, t, i, a) {
                    var r = i.repeat && d.TweenMax || u.f;
                    return t ? this.add(new r(e, t, i), a) : this.set(e, i, a)
                }, y.from = function(e, t, i, a) {
                    return this.add((i.repeat && d.TweenMax || u.f).from(e, t, i), a)
                }, y.fromTo = function(e, t, i, a, r) {
                    var n = a.repeat && d.TweenMax || u.f;
                    return t ? this.add(n.fromTo(e, t, i, a), r) : this.set(e, a, r)
                }, y.staggerTo = function(t, a, n, s, o, l, _, p) {
                    var d = new e({
                            onComplete: l,
                            onCompleteParams: _,
                            callbackScope: p,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = n.cycle,
                        y, h;
                    for ("string" == typeof t && (t = u.f.selector(t) || t), t = t || [], r(t) && (t = f(t)), s = s || 0, 0 > s && (t = f(t), t.reverse(), s *= -1), h = 0; h < t.length; h++) y = m(n), y.startAt && (y.startAt = m(y.startAt), y.startAt.cycle && c(y.startAt, t, h)), g && (c(y, t, h), null != y.duration && (a = y.duration, delete y.duration)), d.to(t[h], a, y, h * s);
                    return this.add(d, o)
                }, y.staggerFrom = function(e, t, i, a, r, n, s, o) {
                    return i.immediateRender = !1 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, a, r, n, s, o)
                }, y.staggerFromTo = function(e, t, i, a, r, n, s, o, l) {
                    return a.startAt = i, a.immediateRender = !1 != a.immediateRender && !1 != i.immediateRender, this.staggerTo(e, t, a, r, n, s, o, l)
                }, y.call = function(e, t, i, a) {
                    return this.add(u.f.delayedCall(0, e, t, i), a)
                }, y.set = function(e, t, i) {
                    return i = this._parseTimeOrLabel(i, 0, !0), null == t.immediateRender && (t.immediateRender = i === this._time && !this._paused), this.add(new u.f(e, 0, t), i)
                }, e.exportRoot = function(t, i) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var a = new e(t),
                        r = a._timeline,
                        n, s, o, l;
                    for (null == i && (i = !0), r._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = r._time, o = r._first; o;) l = o._next, i && o instanceof u.f && o.target === o.vars.onComplete || (s = o._startTime - o._delay, 0 > s && (n = 1), a.add(o, s)), o = l;
                    return r.add(a, 0), n && a.totalDuration(), a
                }, y.add = function(t, a, r, o) {
                    var d, m, l, i, c, g;
                    if ("number" != typeof a && (a = this._parseTimeOrLabel(a, 0, !0, t)), !(t instanceof u.a)) {
                        if (t instanceof Array || t && t.push && s(t)) {
                            for (r = r || "normal", o = o || 0, d = a, m = t.length, l = 0; l < m; l++) s(i = t[l]) && (i = new e({
                                tweens: i
                            })), this.add(i, d), "string" != typeof i && "function" != typeof i && ("sequence" === r ? d = i._startTime + i.totalDuration() / i._timeScale : "start" === r && (i._startTime -= i.delay())), d += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof t) return this.addLabel(t, a);
                        if ("function" == typeof t) t = u.f.delayedCall(0, t);
                        else throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string."
                    }
                    if (u.c.prototype.add.call(this, t, a), t._time && (d = _(0, p(t.totalDuration(), (this.rawTime() - t._startTime) * t._timeScale)), 1e-5 < n(d - t._totalTime) && t.render(d, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (c = this, g = c.rawTime() > t._startTime; c._timeline;) g && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
                    return this
                }, y.remove = function(e) {
                    if (e instanceof u.a) {
                        this._remove(e, !1);
                        var t = e._timeline = e.vars.useFrames ? u.a._rootFramesTimeline : u.a._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : t._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && s(e)) {
                        for (var a = e.length; - 1 < --a;) this.remove(e[a]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, y._remove = function(e, t) {
                    u.c.prototype._remove.call(this, e, t);
                    var i = this._last;
                    return i ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, y.append = function(e, t) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
                }, y.insert = y.insertMultiple = function(e, t, i, a) {
                    return this.add(e, t || 0, i, a)
                }, y.appendMultiple = function(e, t, i, a) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, a)
                }, y.addLabel = function(e, t) {
                    return this._labels[e] = this._parseTimeOrLabel(t), this
                }, y.addPause = function(e, i, a, r) {
                    var n = u.f.delayedCall(0, g, a, r || this);
                    return n.vars.onComplete = n.vars.onReverseComplete = i, n.data = "isPause", this._hasPause = !0, this.add(n, e)
                }, y.removeLabel = function(e) {
                    return delete this._labels[e], this
                }, y.getLabelTime = function(e) {
                    return null == this._labels[e] ? -1 : this._labels[e]
                }, y._parseTimeOrLabel = function(e, t, a, r) {
                    var n, o;
                    if (r instanceof u.a && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && s(r)))
                        for (o = r.length; - 1 < --o;) r[o] instanceof u.a && r[o].timeline === this && this.remove(r[o]);
                    if (n = "number" != typeof e || t ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof t) return this._parseTimeOrLabel(t, a && "number" == typeof e && null == this._labels[t] ? e - n : 0, a);
                    if (t = t || 0, "string" == typeof e && (isNaN(e) || null != this._labels[e])) {
                        if (o = e.indexOf("="), -1 === o) return null == this._labels[e] ? a ? this._labels[e] = n + t : t : this._labels[e] + t;
                        t = parseInt(e.charAt(o - 1) + "1", 10) * +e.substr(o + 1), e = 1 < o ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, a) : n
                    } else null == e && (e = n);
                    return +e + t
                }, y.seek = function(e, t) {
                    return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
                }, y.stop = function() {
                    return this.paused(!0)
                }, y.gotoAndPlay = function(e, t) {
                    return this.play(e, t)
                }, y.gotoAndStop = function(e, t) {
                    return this.pause(e, t)
                }, y.render = function(e, i, a) {
                    this._gc && this._enabled(!0, !1);
                    var r = this._time,
                        n = this._dirty ? this.totalDuration() : this._totalDuration,
                        s = this._startTime,
                        _ = this._timeScale,
                        p = this._paused,
                        d, m, c, u, g, f, y;
                    if (r !== this._time && (e += this._time - r), e >= n - 1e-7 && 0 <= e) this._totalTime = this._time = n, this._reversed || this._hasPausedChild() || (m = !0, u = "onComplete", g = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && -1e-7 <= e || 0 > this._rawPrevTime || this._rawPrevTime === t) && this._rawPrevTime !== e && this._first && (g = !0, this._rawPrevTime > t && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !i || e || this._rawPrevTime === e ? e : t, e = n + 1e-4;
                    else if (!(1e-7 > e)) {
                        if (this._hasPause && !this._forcingPlayhead && !i) {
                            if (e >= r)
                                for (d = this._first; d && d._startTime <= e && !f;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (f = d), d = d._next;
                            else
                                for (d = this._last; d && d._startTime >= e && !f;) !d._duration && "isPause" === d.data && 0 < d._rawPrevTime && (f = d), d = d._prev;
                            f && (this._time = e = f._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = e
                    } else if (this._totalTime = this._time = 0, (0 !== r || 0 === this._duration && this._rawPrevTime !== t && (0 < this._rawPrevTime || 0 > e && 0 <= this._rawPrevTime)) && (u = "onReverseComplete", m = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (g = m = !0, u = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (g = !0), this._rawPrevTime = e;
                    else {
                        if (this._rawPrevTime = this._duration || !i || e || this._rawPrevTime === e ? e : t, 0 === e && m)
                            for (d = this._first; d && 0 === d._startTime;) d._duration || (m = !1), d = d._next;
                        e = 0, this._initted || (g = !0)
                    }
                    if (this._time !== r && this._first || a || g || f) {
                        if (this._initted || (this._initted = !0), this._active || this._paused || this._time === r || !(0 < e) || (this._active = !0), 0 !== r || !this.vars.onStart || 0 === this._time && this._duration || i || this._callback("onStart"), y = this._time, y >= r)
                            for (d = this._first; d && (c = d._next, y === this._time && (!this._paused || p));)(d._active || d._startTime <= y && !d._paused && !d._gc) && (f === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (e - d._startTime) * d._timeScale, i, a) : d.render((e - d._startTime) * d._timeScale, i, a)), d = c;
                        else
                            for (d = this._last; d && (c = d._prev, y === this._time && (!this._paused || p));) {
                                if (d._active || d._startTime <= r && !d._paused && !d._gc) {
                                    if (f === d) {
                                        for (f = d._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (e - f._startTime) * f._timeScale : (e - f._startTime) * f._timeScale, i, a), f = f._prev;
                                        f = null, this.pause()
                                    }
                                    d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (e - d._startTime) * d._timeScale, i, a) : d.render((e - d._startTime) * d._timeScale, i, a)
                                }
                                d = c
                            }
                        this._onUpdate && !i && (o.length && l(), this._callback("onUpdate")), u && !this._gc && (s === this._startTime || _ !== this._timeScale) && (0 === this._time || n >= this.totalDuration()) && (m && (o.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !i && this.vars[u] && this._callback(u))
                    }
                }, y._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof e && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, y.getChildren = function(e, t, i, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, s = 0; a;) a._startTime < r || (a instanceof u.f ? !1 !== t && (n[s++] = a) : (!1 !== i && (n[s++] = a), !1 !== e && (n = n.concat(a.getChildren(!0, t, i)), s = n.length))), a = a._next;
                    return n
                }, y.getTweensOf = function(e, t) {
                    var r = this._gc,
                        n = [],
                        a = 0,
                        s, o;
                    for (r && this._enabled(!0, !0), s = u.f.getTweensOf(e), o = s.length; - 1 < --o;)(s[o].timeline === this || t && this._contains(s[o])) && (n[a++] = s[o]);
                    return r && this._enabled(!1, !0), n
                }, y.recent = function() {
                    return this._recent
                }, y._contains = function(e) {
                    for (var t = e.timeline; t;) {
                        if (t === this) return !0;
                        t = t.timeline
                    }
                    return !1
                }, y.shiftChildren = function(e, t, i) {
                    i = i || 0;
                    for (var a = this._first, r = this._labels, n; a;) a._startTime >= i && (a._startTime += e), a = a._next;
                    if (t)
                        for (n in r) r[n] >= i && (r[n] += e);
                    return this._uncache(!0)
                }, y._kill = function(e, t) {
                    if (!e && !t) return this._enabled(!1, !1);
                    for (var a = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = a.length, i = !1; - 1 < --r;) a[r]._kill(e, t) && (i = !0);
                    return i
                }, y.clear = function(e) {
                    var t = this.getChildren(!1, !0, !0),
                        a = t.length;
                    for (this._time = this._totalTime = 0; - 1 < --a;) t[a]._enabled(!1, !1);
                    return !1 !== e && (this._labels = {}), this._uncache(!0)
                }, y.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return u.a.prototype.invalidate.call(this)
                }, y._enabled = function(e, t) {
                    if (e === this._gc)
                        for (var i = this._first; i;) i._enabled(e, !0), i = i._next;
                    return u.c.prototype._enabled.call(this, e, t)
                }, y.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = u.a.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, y.duration = function(e) {
                    return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
                }, y.totalDuration = function(e) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var t = 0, i = this._last, a = 999999999999, r, n; i;) r = i._prev, i._dirty && i.totalDuration(), i._startTime > a && this._sortChildren && !i._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(i, i._startTime - i._delay), this._calculatingDuration = 0) : a = i._startTime, 0 > i._startTime && !i._paused && (t -= i._startTime, this._timeline.smoothChildTiming && (this._startTime += i._startTime / this._timeScale, this._time -= i._startTime, this._totalTime -= i._startTime, this._rawPrevTime -= i._startTime), this.shiftChildren(-i._startTime, !1, -9999999999), a = 0), n = i._startTime + i._totalDuration / i._timeScale, n > t && (t = n), i = r;
                            this._duration = this._totalDuration = t, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
                }, y.paused = function(e) {
                    if (!e)
                        for (var t = this._first, i = this._time; t;) t._startTime === i && "isPause" === t.data && (t._rawPrevTime = 0), t = t._next;
                    return u.a.prototype.paused.apply(this, arguments)
                }, y.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === u.a._rootFramesTimeline
                }, y.rawTime = function(e) {
                    return e && (this._paused || this._repeat && 0 < this.time() && 1 > this.totalProgress()) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(e) - this._startTime) * this._timeScale
                }, e
            }, !0);
            var b = u.g.TimelineLite;
            /*!
             * VERSION: 2.0.2
             * DATE: 2018-08-27
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             * 
             * @author: Jack Doyle, jack@greensock.com
             */
            u.e._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function() {
                var e = function(e) {
                        b.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                    },
                    t = 1e-10,
                    i = u.f._internals,
                    a = i.lazyTweens,
                    r = i.lazyRender,
                    s = u.e._gsDefine.globals,
                    o = new u.b(null, null, 1, 0),
                    l = e.prototype = new b;
                return l.constructor = e, l.kill()._gc = !1, e.version = "2.0.2", l.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), b.prototype.invalidate.call(this)
                }, l.addCallback = function(e, t, i, a) {
                    return this.add(u.f.delayedCall(0, e, i, a), t)
                }, l.removeCallback = function(e, t) {
                    if (e)
                        if (null == t) this._kill(null, e);
                        else
                            for (var r = this.getTweensOf(e, !1), a = r.length, i = this._parseTimeOrLabel(t); - 1 < --a;) r[a]._startTime === i && r[a]._enabled(!1, !1);
                    return this
                }, l.removePause = function(e) {
                    return this.removeCallback(b._internals.pauseCallback, e)
                }, l.tweenTo = function(e, i) {
                    i = i || {};
                    var a = {
                            ease: o,
                            useFrames: this.usesFrames(),
                            immediateRender: !1,
                            lazy: !1
                        },
                        r = i.repeat && s.TweenMax || u.f,
                        l, _, p;
                    for (_ in i) a[_] = i[_];
                    return a.time = this._parseTimeOrLabel(e), l = n(+a.time - this._time) / this._timeScale || .001, p = new r(this, l, a), a.onStart = function() {
                        p.target.paused(!0), p.vars.time === p.target.time() || l !== p.duration() || p.isFromTo || p.duration(n(p.vars.time - p.target.time()) / p.target._timeScale).render(p.time(), !0, !0), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || p, i.onStartParams || [])
                    }, p
                }, l.tweenFromTo = function(e, i, a) {
                    a = a || {}, e = this._parseTimeOrLabel(e), a.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [e],
                        callbackScope: this
                    }, a.immediateRender = !1 !== a.immediateRender;
                    var r = this.tweenTo(i, a);
                    return r.isFromTo = 1, r.duration(n(r.vars.time - e) / this._timeScale || .001)
                }, l.render = function(e, i, n) {
                    this._gc && this._enabled(!0, !1);
                    var s = this._time,
                        o = this._dirty ? this.totalDuration() : this._totalDuration,
                        l = this._duration,
                        _ = this._totalTime,
                        p = this._startTime,
                        d = this._timeScale,
                        m = this._rawPrevTime,
                        c = this._paused,
                        u = this._cycle,
                        g, f, y, h, T, x, v, b;
                    if (s !== this._time && (e += this._time - s), e >= o - 1e-7 && 0 <= e) this._locked || (this._totalTime = o, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", T = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && -1e-7 <= e || 0 > m || m === t) && m !== e && this._first && (T = !0, m > t && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !i || e || this._rawPrevTime === e ? e : t, this._yoyo && 0 != (1 & this._cycle) ? this._time = e = 0 : (this._time = l, e = l + 1e-4);
                    else if (1e-7 > e) {
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== s || 0 === l && m !== t && (0 < m || 0 > e && 0 <= m) && !this._locked) && (h = "onReverseComplete", f = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (T = f = !0, h = "onReverseComplete") : 0 <= m && this._first && (T = !0), this._rawPrevTime = e;
                        else {
                            if (this._rawPrevTime = l || !i || e || this._rawPrevTime === e ? e : t, 0 === e && f)
                                for (g = this._first; g && 0 === g._startTime;) g._duration || (f = !1), g = g._next;
                            e = 0, this._initted || (T = !0)
                        }
                    } else if (0 === l && 0 > m && (T = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (x = l + this._repeatDelay, this._cycle = this._totalTime / x >> 0, 0 !== this._cycle && this._cycle === this._totalTime / x && _ <= e && this._cycle--, this._time = this._totalTime - this._cycle * x, this._yoyo && 0 != (1 & this._cycle) && (this._time = l - this._time), this._time > l ? (this._time = l, e = l + 1e-4) : 0 > this._time ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !i) {
                        if (e = this._time, e >= s || this._repeat && u !== this._cycle)
                            for (g = this._first; g && g._startTime <= e && !v;) g._duration || "isPause" !== g.data || g.ratio || 0 === g._startTime && 0 === this._rawPrevTime || (v = g), g = g._next;
                        else
                            for (g = this._last; g && g._startTime >= e && !v;) !g._duration && "isPause" === g.data && 0 < g._rawPrevTime && (v = g), g = g._prev;
                        v && v._startTime < l && (this._time = e = v._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== u && !this._locked) {
                        var P = this._yoyo && 0 != (1 & u),
                            w = P === (this._yoyo && 0 != (1 & this._cycle)),
                            O = this._totalTime,
                            k = this._cycle,
                            S = this._rawPrevTime,
                            R = this._time;
                        if (this._totalTime = u * l, this._cycle < u ? P = !P : this._totalTime += l, this._time = s, this._rawPrevTime = 0 === l ? m - 1e-4 : m, this._cycle = u, this._locked = !0, s = P ? 0 : l, this.render(s, i, 0 === l), i || this._gc || !this.vars.onRepeat || (this._cycle = k, this._locked = !1, this._callback("onRepeat")), s !== this._time) return;
                        if (w && (this._cycle = u, this._locked = !0, s = P ? l + 1e-4 : -1e-4, this.render(s, !0, !1)), this._locked = !1, this._paused && !c) return;
                        this._time = R, this._totalTime = O, this._cycle = k, this._rawPrevTime = S
                    }
                    if ((this._time === s || !this._first) && !n && !T && !v) return void(_ !== this._totalTime && this._onUpdate && !i && this._callback("onUpdate"));
                    if (this._initted || (this._initted = !0), this._active || this._paused || this._totalTime === _ || !(0 < e) || (this._active = !0), 0 !== _ || !this.vars.onStart || 0 === this._totalTime && this._totalDuration || i || this._callback("onStart"), b = this._time, b >= s)
                        for (g = this._first; g && (y = g._next, b === this._time && (!this._paused || c));)(g._active || g._startTime <= this._time && !g._paused && !g._gc) && (v === g && this.pause(), g._reversed ? g.render((g._dirty ? g.totalDuration() : g._totalDuration) - (e - g._startTime) * g._timeScale, i, n) : g.render((e - g._startTime) * g._timeScale, i, n)), g = y;
                    else
                        for (g = this._last; g && (y = g._prev, b === this._time && (!this._paused || c));) {
                            if (g._active || g._startTime <= s && !g._paused && !g._gc) {
                                if (v === g) {
                                    for (v = g._prev; v && v.endTime() > this._time;) v.render(v._reversed ? v.totalDuration() - (e - v._startTime) * v._timeScale : (e - v._startTime) * v._timeScale, i, n), v = v._prev;
                                    v = null, this.pause()
                                }
                                g._reversed ? g.render((g._dirty ? g.totalDuration() : g._totalDuration) - (e - g._startTime) * g._timeScale, i, n) : g.render((e - g._startTime) * g._timeScale, i, n)
                            }
                            g = y
                        }
                    this._onUpdate && !i && (a.length && r(), this._callback("onUpdate")), h && !this._locked && !this._gc && (p === this._startTime || d !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (a.length && r(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !i && this.vars[h] && this._callback(h))
                }, l.getActive = function(e, t, r) {
                    null == e && (e = !0), null == t && (t = !0), null == r && (r = !1);
                    var n = [],
                        a = this.getChildren(e, t, r),
                        s = 0,
                        o = a.length,
                        l, i;
                    for (l = 0; l < o; l++) i = a[l], i.isActive() && (n[s++] = i);
                    return n
                }, l.getLabelAfter = function(e) {
                    e || 0 === e || (e = this._time);
                    var t = this.getLabelsArray(),
                        a = t.length,
                        r;
                    for (r = 0; r < a; r++)
                        if (t[r].time > e) return t[r].name;
                    return null
                }, l.getLabelBefore = function(e) {
                    null == e && (e = this._time);
                    for (var t = this.getLabelsArray(), a = t.length; - 1 < --a;)
                        if (t[a].time < e) return t[a].name;
                    return null
                }, l.getLabelsArray = function() {
                    var e = [],
                        t = 0,
                        i;
                    for (i in this._labels) e[t++] = {
                        time: this._labels[i],
                        name: i
                    };
                    return e.sort(function(e, t) {
                        return e.time - t.time
                    }), e
                }, l.invalidate = function() {
                    return this._locked = !1, b.prototype.invalidate.call(this)
                }, l.progress = function(e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0
                }, l.totalProgress = function(e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0
                }, l.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (b.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, l.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, l.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, l.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, l.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, l.currentLabel = function(e) {
                    return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
                }, e
            }, !0);
            var P = u.g.TimelineMax,
                w = [],
                O = [],
                k = [],
                S = {},
                R = u.e._gsDefine.globals,
                C = function(e, t, i, a) {
                    i === a && (i = a - (a - t) / 1e6), e === t && (t = e + (i - e) / 1e6), this.a = e, this.b = t, this.c = i, this.d = a, this.da = a - e, this.ca = i - e, this.ba = t - e
                },
                A = function(e, t, i, r) {
                    var n = {
                            a: e
                        },
                        s = {},
                        o = {},
                        l = {
                            c: r
                        },
                        _ = (e + t) / 2,
                        p = (t + i) / 2,
                        m = (i + r) / 2,
                        c = (_ + p) / 2,
                        u = (p + m) / 2,
                        g = (u - c) / 8;
                    return n.b = _ + (e - _) / 4, s.b = c + g, n.c = s.a = (n.b + s.b) / 2, s.c = o.a = (c + u) / 2, o.b = u - g, l.b = m + (r - m) / 4, o.c = l.a = (o.b + l.b) / 2, [n, s, o, l]
                },
                D = function(e, t, a, r, n) {
                    var s = e.length - 1,
                        o = 0,
                        l = e[0].a,
                        _, i, p, d, m, c, u, g, f, y, h, T, x;
                    for (_ = 0; _ < s; _++) m = e[o], i = m.a, p = m.d, d = e[o + 1].d, n ? (h = w[_], T = O[_], x = .25 * ((T + h) * t) / (r ? .5 : k[_] || .5), c = p - (p - i) * (r ? .5 * t : 0 === h ? 0 : x / h), u = p + (d - p) * (r ? .5 * t : 0 === T ? 0 : x / T), g = p - (c + ((u - c) * (3 * h / (h + T) + .5) / 4 || 0))) : (c = p - .5 * ((p - i) * t), u = p + .5 * ((d - p) * t), g = p - (c + u) / 2), c += g, u += g, m.c = f = c, m.b = 0 === _ ? l = m.a + .6 * (m.c - m.a) : l, m.da = p - i, m.ca = f - i, m.ba = l - i, a ? (y = A(i, l, f, p), e.splice(o, 1, y[0], y[1], y[2], y[3]), o += 4) : o++, l = u;
                    m = e[o], m.b = l, m.c = l + .4 * (m.d - l), m.da = m.d - m.a, m.ca = m.c - m.a, m.ba = l - m.a, a && (y = A(m.a, l, m.c, m.d), e.splice(o, 1, y[0], y[1], y[2], y[3]))
                },
                z = function(e, t, r, n) {
                    var s = [],
                        a, o, i, l, _, p;
                    if (n)
                        for (e = [n].concat(e), o = e.length; - 1 < --o;) "string" == typeof(p = e[o][t]) && "=" === p.charAt(1) && (e[o][t] = n[t] + +(p.charAt(0) + p.substr(2)));
                    if (a = e.length - 2, 0 > a) return s[0] = new C(e[0][t], 0, 0, e[0][t]), s;
                    for (o = 0; o < a; o++) i = e[o][t], l = e[o + 1][t], s[o] = new C(i, 0, 0, l), r && (_ = e[o + 2][t], w[o] = (w[o] || 0) + (l - i) * (l - i), O[o] = (O[o] || 0) + (_ - l) * (_ - l));
                    return s[o] = new C(e[o][t], 0, 0, e[o + 1][t]), s
                },
                E = function(e, t, s, o, _, d) {
                    var m = {},
                        c = [],
                        u = d || e[0],
                        g, i, p, a, f, y, l, h;
                    for (i in _ = "string" == typeof _ ? "," + _ + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == t && (t = 1), e[0]) c.push(i);
                    if (1 < e.length) {
                        for (h = e[e.length - 1], l = !0, g = c.length; - 1 < --g;)
                            if (i = c[g], .05 < n(u[i] - h[i])) {
                                l = !1;
                                break
                            }
                        l && (e = e.concat(), d && e.unshift(d), e.push(e[1]), d = e[e.length - 3])
                    }
                    for (w.length = O.length = k.length = 0, g = c.length; - 1 < --g;) i = c[g], S[i] = -1 !== _.indexOf("," + i + ","), m[i] = z(e, i, S[i], d);
                    for (g = w.length; - 1 < --g;) w[g] = r(w[g]), O[g] = r(O[g]);
                    if (!o) {
                        for (g = c.length; - 1 < --g;)
                            if (S[i])
                                for (p = m[c[g]], y = p.length - 1, a = 0; a < y; a++) f = p[a + 1].da / O[a] + p[a].da / w[a] || 0, k[a] = (k[a] || 0) + f * f;
                        for (g = k.length; - 1 < --g;) k[g] = r(k[g])
                    }
                    for (g = c.length, a = s ? 4 : 1; - 1 < --g;) i = c[g], p = m[i], D(p, t, s, o, S[i]), l && (p.splice(0, a), p.splice(p.length - a, a));
                    return m
                },
                L = function(e, t, r) {
                    t = t || "soft";
                    var n = {},
                        s = "cubic" === t ? 3 : 2,
                        o = "soft" === t,
                        _ = [],
                        m, a, u, c, d, g, i, f, l, p, y;
                    if (o && r && (e = [r].concat(e)), null == e || e.length < s + 1) throw "invalid Bezier data";
                    for (l in e[0]) _.push(l);
                    for (g = _.length; - 1 < --g;) {
                        for (l = _[g], n[l] = d = [], p = 0, f = e.length, i = 0; i < f; i++) m = null == r ? e[i][l] : "string" == typeof(y = e[i][l]) && "=" === y.charAt(1) ? r[l] + +(y.charAt(0) + y.substr(2)) : +y, o && 1 < i && i < f - 1 && (d[p++] = (m + d[p - 2]) / 2), d[p++] = m;
                        for (f = p - s + 1, p = 0, i = 0; i < f; i += s) m = d[i], a = d[i + 1], u = d[i + 2], c = 2 == s ? 0 : d[i + 3], d[p++] = y = 3 == s ? new C(m, a, u, c) : new C(m, (2 * a + m) / 3, (2 * a + u) / 3, u);
                        d.length = p
                    }
                    return n
                },
                X = function(e, t, a) {
                    for (var r = e.length, n, o, l, s, _, d, m, p, i, c, u; - 1 < --r;)
                        for (c = e[r], l = c.a, s = c.d - l, _ = c.c - l, d = c.b - l, n = o = 0, p = 1; p <= a; p++) m = 1 / a * p, i = 1 - m, n = o - (o = (m * m * s + 3 * i * (m * _ + i * d)) * m), u = r * a + p - 1, t[u] = (t[u] || 0) + n * n
                },
                I = function(e, t) {
                    t = t >> 0 || 6;
                    var n = [],
                        a = [],
                        s = 0,
                        o = 0,
                        _ = t - 1,
                        d = [],
                        m = [],
                        c, p, i, l;
                    for (c in e) X(e[c], n, t);
                    for (i = n.length, p = 0; p < i; p++) s += r(n[p]), l = p % t, m[l] = s, l === _ && (o += s, l = p / t >> 0, d[l] = m, a[l] = o, s = 0, m = []);
                    return {
                        length: o,
                        lengths: a,
                        segments: d
                    }
                },
                B = u.e._gsDefine.plugin({
                    propName: "bezier",
                    priority: -1,
                    version: "1.3.8",
                    API: 2,
                    global: !0,
                    init: function(e, t, a) {
                        this._target = e, t instanceof Array && (t = {
                            values: t
                        }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                        var r = t.values || [],
                            n = {},
                            s = r[0],
                            o = t.autoRotate || a.vars.orientToBezier,
                            l, _, p, i, d;
                        for (l in this._autoRotate = o ? o instanceof Array ? o : [
                                ["x", "y", "rotation", !0 === o ? 0 : +o || 0]
                            ] : null, s) this._props.push(l);
                        for (p = this._props.length; - 1 < --p;) l = this._props[p], this._overwriteProps.push(l), _ = this._func[l] = "function" == typeof e[l], n[l] = _ ? e[l.indexOf("set") || "function" != typeof e["get" + l.substr(3)] ? l : "get" + l.substr(3)]() : parseFloat(e[l]), d || n[l] === r[0][l] || (d = n);
                        if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? E(r, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, d) : L(r, t.type, n), this._segCount = this._beziers[l].length, this._timeRes) {
                            var m = I(this._beziers, this._timeRes);
                            this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                        }
                        if (o = this._autoRotate)
                            for (this._initialRotations = [], o[0] instanceof Array || (this._autoRotate = o = [o]), p = o.length; - 1 < --p;) {
                                for (i = 0; 3 > i; i++) l = o[p][i], this._func[l] = "function" == typeof e[l] && e[l.indexOf("set") || "function" != typeof e["get" + l.substr(3)] ? l : "get" + l.substr(3)];
                                l = o[p][2], this._initialRotations[p] = (this._func[l] ? this._func[l].call(this._target) : this._target[l]) || 0, this._overwriteProps.push(l)
                            }
                        return this._startRatio = a.vars.runBackwards ? 1 : 0, !0
                    },
                    set: function(e) {
                        var a = this._segCount,
                            r = this._func,
                            n = this._target,
                            s = e !== this._startRatio,
                            o, _, m, i, p, c, t, u, g, f;
                        if (!this._timeRes) o = 0 > e ? 0 : 1 <= e ? a - 1 : a * e >> 0, c = (e - o * (1 / a)) * a;
                        else {
                            if (g = this._lengths, f = this._curSeg, e *= this._length, m = this._li, e > this._l2 && m < a - 1) {
                                for (u = a - 1; m < u && (this._l2 = g[++m]) <= e;);
                                this._l1 = g[m - 1], this._li = m, this._curSeg = f = this._segments[m], this._s2 = f[this._s1 = this._si = 0]
                            } else if (e < this._l1 && 0 < m) {
                                for (; 0 < m && (this._l1 = g[--m]) >= e;);
                                0 === m && e < this._l1 ? this._l1 = 0 : m++, this._l2 = g[m], this._li = m, this._curSeg = f = this._segments[m], this._s1 = f[(this._si = f.length - 1) - 1] || 0, this._s2 = f[this._si]
                            }
                            if (o = m, e -= this._l1, m = this._si, e > this._s2 && m < f.length - 1) {
                                for (u = f.length - 1; m < u && (this._s2 = f[++m]) <= e;);
                                this._s1 = f[m - 1], this._si = m
                            } else if (e < this._s1 && 0 < m) {
                                for (; 0 < m && (this._s1 = f[--m]) >= e;);
                                0 === m && e < this._s1 ? this._s1 = 0 : m++, this._s2 = f[m], this._si = m
                            }
                            c = (m + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                        }
                        for (_ = 1 - c, m = this._props.length; - 1 < --m;) i = this._props[m], p = this._beziers[i][o], t = (c * c * p.da + 3 * _ * (c * p.ca + _ * p.ba)) * c + p.a, this._mod[i] && (t = this._mod[i](t, n)), r[i] ? n[i](t) : n[i] = t;
                        if (this._autoRotate) {
                            var y = this._autoRotate,
                                h, T, x, v, b, P, w;
                            for (m = y.length; - 1 < --m;) i = y[m][2], P = y[m][3] || 0, w = !0 === y[m][4] ? 1 : 180 / d, p = this._beziers[y[m][0]], h = this._beziers[y[m][1]], p && h && (p = p[o], h = h[o], T = p.a + (p.b - p.a) * c, v = p.b + (p.c - p.b) * c, T += (v - T) * c, v += (p.c + (p.d - p.c) * c - v) * c, x = h.a + (h.b - h.a) * c, b = h.b + (h.c - h.b) * c, x += (b - x) * c, b += (h.c + (h.d - h.c) * c - b) * c, t = s ? l(b - x, v - T) * w + P : this._initialRotations[m], this._mod[i] && (t = this._mod[i](t, n)), r[i] ? n[i](t) : n[i] = t)
                        }
                    }
                }),
                j = B.prototype;
            /*!
             * VERSION: 1.3.8
             * DATE: 2018-05-30
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             * 
             * @author: Jack Doyle, jack@greensock.com
             **/
            B.bezierThrough = E, B.cubicToQuadratic = A, B._autoCSS = !0, B.quadraticToCubic = function(e, t, i) {
                return new C(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
            }, B._cssRegister = function() {
                var e = R.CSSPlugin;
                if (e) {
                    var t = e._internals,
                        a = t._parseToProxy,
                        r = t._setPluginRatio,
                        n = t.CSSPropTween;
                    t._registerComplexSpecialProp("bezier", {
                        parser: function(s, t, o, _, d, m) {
                            t instanceof Array && (t = {
                                values: t
                            }), m = new B;
                            var c = t.values,
                                u = c.length - 1,
                                l = [],
                                g = {},
                                f, i, p;
                            if (0 > u) return d;
                            for (f = 0; f <= u; f++) p = a(s, c[f], _, d, m, u !== f), l[f] = p.end;
                            for (i in t) g[i] = t[i];
                            return g.values = l, d = new n(s, "bezier", 0, 0, p.pt, 2), d.data = p, d.plugin = m, d.setRatio = r, 0 === g.autoRotate && (g.autoRotate = !0), g.autoRotate && !(g.autoRotate instanceof Array) && (f = !0 === g.autoRotate ? 0 : +g.autoRotate, g.autoRotate = null == p.end.left ? null != p.end.x && [
                                ["x", "y", "rotation", f, !1]
                            ] : [
                                ["left", "top", "rotation", f, !1]
                            ]), g.autoRotate && (!_._transform && _._enableTransforms(!1), p.autoRotate = _._target._gsTransform, p.proxy.rotation = p.autoRotate.rotation || 0, _._overwriteProps.push("rotation")), m._onInitTween(p.proxy, g, _._tween), d
                        }
                    })
                }
            }, j._mod = function(e) {
                for (var t = this._overwriteProps, a = t.length, i; - 1 < --a;) i = e[t[a]], i && "function" == typeof i && (this._mod[t[a]] = i)
            }, j._kill = function(e) {
                var t = this._props,
                    a, r;
                for (a in this._beziers)
                    if (a in e)
                        for (delete this._beziers[a], delete this._func[a], r = t.length; - 1 < --r;) t[r] === a && t.splice(r, 1);
                if (t = this._autoRotate, t)
                    for (r = t.length; - 1 < --r;) e[t[r][2]] && t.splice(r, 1);
                return this._super._kill.call(this, e)
            }, u.e._gsDefine("easing.Back", ["easing.Ease"], function() {
                var e = u.e.GreenSockGlobals || u.e,
                    t = e.com.greensock,
                    i = 2 * d,
                    n = d / 2,
                    l = t._class,
                    _ = function(e, t) {
                        var i = l("easing." + e, function() {}, !0),
                            a = i.prototype = new u.b;
                        return a.constructor = i, a.getRatio = t, i
                    },
                    m = u.b.register || function() {},
                    c = function(e, t, i, a) {
                        var r = l("easing." + e, {
                            easeOut: new t,
                            easeIn: new i,
                            easeInOut: new a
                        }, !0);
                        return m(r, e), r
                    },
                    g = function(e, t, i) {
                        this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
                    },
                    f = function(e, t) {
                        var i = l("easing." + e, function(e) {
                                this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            a = i.prototype = new u.b;
                        return a.constructor = i, a.getRatio = t, a.config = function(e) {
                            return new i(e)
                        }, i
                    },
                    y = c("Back", f("BackOut", function(e) {
                        return --e * e * ((this._p1 + 1) * e + this._p1) + 1
                    }), f("BackIn", function(e) {
                        return e * e * ((this._p1 + 1) * e - this._p1)
                    }), f("BackInOut", function(e) {
                        return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                    })),
                    h = l("easing.SlowMo", function(e, t, i) {
                        t = t || 0 === t ? t : .7, null == e ? e = .7 : 1 < e && (e = 1), this._p = 1 === e ? 0 : t, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                    }, !0),
                    T = h.prototype = new u.b,
                    p, x, v, b;
                return T.constructor = h, T.getRatio = function(e) {
                    var t = e + (.5 - e) * this._p;
                    return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 === e ? 0 : 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
                }, h.ease = new h(.7, .7), T.config = h.config = function(e, t, i) {
                    return new h(e, t, i)
                }, p = l("easing.SteppedEase", function(e, t) {
                    e = e || 1, this._p1 = 1 / e, this._p2 = e + (t ? 0 : 1), this._p3 = t ? 1 : 0
                }, !0), T = p.prototype = new u.b, T.constructor = p, T.getRatio = function(e) {
                    return 0 > e ? e = 0 : 1 <= e && (e = .999999999), ((0 | this._p2 * e) + this._p3) * this._p1
                }, T.config = p.config = function(e, t) {
                    return new p(e, t)
                }, x = l("easing.ExpoScaleEase", function(e, t, i) {
                    this._p1 = Math.log(t / e), this._p2 = t - e, this._p3 = e, this._ease = i
                }, !0), T = x.prototype = new u.b, T.constructor = x, T.getRatio = function(e) {
                    return this._ease && (e = this._ease.getRatio(e)), (this._p3 * Math.exp(this._p1 * e) - this._p3) / this._p2
                }, T.config = x.config = function(e, t, i) {
                    return new x(e, t, i)
                }, v = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var t = e.taper || "none", r = [], a = 0, n = 0 | (e.points || 20), s = n, i = !1 !== e.randomize, o = !0 === e.clamp, l = e.template instanceof u.b ? e.template : null, _ = "number" == typeof e.strength ? .4 * e.strength : .4, p, d, m, c, f, h; - 1 < --s;) p = i ? Math.random() : 1 / n * s, d = l ? l.getRatio(p) : p, "none" === t ? m = _ : "out" === t ? (c = 1 - p, m = c * c * _) : "in" === t ? m = p * p * _ : .5 > p ? (c = 2 * p, m = .5 * (c * c) * _) : (c = 2 * (1 - p), m = .5 * (c * c) * _), i ? d += Math.random() * m - .5 * m : s % 2 ? d += .5 * m : d -= .5 * m, o && (1 < d ? d = 1 : 0 > d && (d = 0)), r[a++] = {
                        x: p,
                        y: d
                    };
                    for (r.sort(function(e, t) {
                            return e.x - t.x
                        }), h = new g(1, 1, null), s = n; - 1 < --s;) f = r[s], h = new g(f.x, f.y, h);
                    this._prev = new g(0, 0, 0 === h.t ? h.next : h)
                }, !0), T = v.prototype = new u.b, T.constructor = v, T.getRatio = function(e) {
                    var t = this._prev;
                    if (e > t.t) {
                        for (; t.next && e >= t.t;) t = t.next;
                        t = t.prev
                    } else
                        for (; t.prev && e <= t.t;) t = t.prev;
                    return this._prev = t, t.v + (e - t.t) / t.gap * t.c
                }, T.config = function(e) {
                    return new v(e)
                }, v.ease = new v, c("Bounce", _("BounceOut", function(e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }), _("BounceIn", function(e) {
                    return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                }), _("BounceInOut", function(e) {
                    var t = .5 > e;
                    return e = t ? 1 - 2 * e : 2 * e - 1, e = e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
                })), c("Circ", _("CircOut", function(e) {
                    return r(1 - --e * e)
                }), _("CircIn", function(e) {
                    return -(r(1 - e * e) - 1)
                }), _("CircInOut", function(e) {
                    return 1 > (e *= 2) ? -.5 * (r(1 - e * e) - 1) : .5 * (r(1 - (e -= 2) * e) + 1)
                })), b = function(e, t, a) {
                    var r = l("easing." + e, function(e, t) {
                            this._p1 = 1 <= e ? e : 1, this._p2 = (t || a) / (1 > e ? e : 1), this._p3 = this._p2 / i * (Math.asin(1 / this._p1) || 0), this._p2 = i / this._p2
                        }, !0),
                        n = r.prototype = new u.b;
                    return n.constructor = r, n.getRatio = t, n.config = function(e, t) {
                        return new r(e, t)
                    }, r
                }, c("Elastic", b("ElasticOut", function(e) {
                    return this._p1 * a(2, -10 * e) * s((e - this._p3) * this._p2) + 1
                }, .3), b("ElasticIn", function(e) {
                    return -(this._p1 * a(2, 10 * (e -= 1)) * s((e - this._p3) * this._p2))
                }, .3), b("ElasticInOut", function(e) {
                    return 1 > (e *= 2) ? -.5 * (this._p1 * a(2, 10 * (e -= 1)) * s((e - this._p3) * this._p2)) : .5 * (this._p1 * a(2, -10 * (e -= 1)) * s((e - this._p3) * this._p2)) + 1
                }, .45)), c("Expo", _("ExpoOut", function(e) {
                    return 1 - a(2, -10 * e)
                }), _("ExpoIn", function(e) {
                    return a(2, 10 * (e - 1)) - .001
                }), _("ExpoInOut", function(e) {
                    return 1 > (e *= 2) ? .5 * a(2, 10 * (e - 1)) : .5 * (2 - a(2, -10 * (e - 1)))
                })), c("Sine", _("SineOut", function(e) {
                    return s(e * n)
                }), _("SineIn", function(e) {
                    return -o(e * n) + 1
                }), _("SineInOut", function(e) {
                    return -.5 * (o(d * e) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return u.b.map[e]
                    }
                }, !0), m(e.SlowMo, "SlowMo", "ease,"), m(v, "RoughEase", "ease,"), m(p, "SteppedEase", "ease,"), y
            }, !0);
            var Y = u.g.Back,
                F = u.g.Elastic,
                N = u.g.Bounce,
                U = u.g.RoughEase,
                M = u.g.SlowMo,
                V = u.g.SteppedEase,
                W = u.g.Circ,
                G = u.g.Expo,
                Z = u.g.Sine,
                H = u.g.ExpoScaleEase,
                q = c;
            /*!
             * VERSION: 2.0.2
             * DATE: 2018-08-27
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             * 
             * @author: Jack Doyle, jack@greensock.com
             **/
            q._autoActivated = [b, P, g, f, B, y, v, Y, F, N, U, M, V, W, G, Z, H], i.d(t, "a", function() {
                return q
            })
        }
    }
]);