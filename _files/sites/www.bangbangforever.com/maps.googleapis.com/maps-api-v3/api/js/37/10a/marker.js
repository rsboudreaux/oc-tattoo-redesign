google.maps.__gjsload__('marker', function(_) {
    var cS, dS, eS, fS, gS, hS, jS, mS, kS, nS, lS, rS, sS, pS, tS, vS, yS, wS, zS, BS, AS, CS, DS, ES, FS, OS, GS, LS, JS, MS, HS, KS, PS, IS, NS, aT, TS, US, VS, WS, XS, YS, ZS, $S, cT, dT, SS, fT, eT, gT, iT, hT, jT, lT, kT, mT, pT, oT, nT, qT, rT, sT, uT, tT, wT, vT, zT, AT, BT, yT, xT, ET, DT, CT, FT, GT;
    cS = function(a) {
        var b = 1;
        return function() {
            --b || a()
        }
    };
    dS = function(a, b) {
        _.rw().za.load(new _.YB(a), function(c) {
            b(c && c.size)
        })
    };
    eS = function(a) {
        this.l = a;
        this.j = !1
    };
    fS = function(a, b) {
        if (!b) return null;
        var c = a.get("snappingCallback");
        c && (b = c(b));
        c = b.x;
        b = b.y;
        var d = a.get("referencePosition");
        d && (2 == a.l ? c = d.x : 1 == a.l && (b = d.y));
        return new _.P(c, b)
    };
    Animation = function(a) {
        this.j = a;
        this.l = ""
    };
    gS = function(a, b) {
        var c = [];
        c.push("@-webkit-keyframes ", b, " {\n");
        _.C(a.j, function(d) {
            c.push(100 * d.time + "% { ");
            c.push("-webkit-transform: translate3d(" + d.translate[0] + "px,", d.translate[1] + "px,0); ");
            c.push("-webkit-animation-timing-function: ", d.jb, "; ");
            c.push("}\n")
        });
        c.push("}\n");
        return c.join("")
    };
    hS = function(a, b) {
        for (var c = 0; c < a.j.length - 1; c++) {
            var d = a.j[c + 1];
            if (b >= a.j[c].time && b < d.time) return c
        }
        return a.j.length - 1
    };
    jS = function(a) {
        if (a.l) return a.l;
        a.l = "_gm" + Math.round(1E4 * Math.random());
        var b = gS(a, a.l);
        if (!iS) {
            iS = _.ic("style");
            iS.type = "text/css";
            var c = document;
            c = c.querySelectorAll && c.querySelector ? c.querySelectorAll("HEAD") : c.getElementsByTagName("HEAD");
            c[0].appendChild(iS)
        }
        iS.textContent += b;
        return a.l
    };
    mS = function(a, b, c) {
        var d, e;
        if (e = 0 != c.oi) e = 5 == _.Hm.j.j || 6 == _.Hm.j.j || 3 == _.Hm.j.type && _.pm(_.Hm.j.version, 7);
        e ? d = new kS(a, b, c) : d = new lS(a, b, c);
        d.start();
        return d
    };
    kS = function(a, b, c) {
        this.Ea = a;
        this.m = b;
        this.j = c;
        this.l = !1
    };
    nS = function(a, b, c) {
        _.Xk(function() {
            a.style.WebkitAnimationDuration = c.duration ? c.duration + "ms" : null;
            a.style.WebkitAnimationIterationCount = c.Yb;
            a.style.WebkitAnimationName = b
        })
    };
    lS = function(a, b, c) {
        this.Ea = a;
        this.A = b;
        this.l = -1;
        "infinity" != c.Yb && (this.l = c.Yb || 1);
        this.B = c.duration || 1E3;
        this.j = !1;
        this.m = 0
    };
    rS = function() {
        for (var a = [], b = 0; b < oS.length; b++) {
            var c = oS[b];
            pS(c);
            c.j || a.push(c)
        }
        oS = a;
        0 == oS.length && (window.clearInterval(qS), qS = null)
    };
    sS = function(a) {
        return a ? a.__gm_at || _.Ni : null
    };
    pS = function(a) {
        if (!a.j) {
            var b = _.Vk();
            tS(a, (b - a.m) / a.B);
            b >= a.m + a.B && (a.m = _.Vk(), "infinite" != a.l && (a.l--, a.l || a.cancel()))
        }
    };
    tS = function(a, b) {
        var c = 1,
            d = a.A;
        var e = d.j[hS(d, b)];
        var f;
        d = a.A;
        (f = d.j[hS(d, b) + 1]) && (c = (b - e.time) / (f.time - e.time));
        b = sS(a.Ea);
        d = a.Ea;
        f ? (c = (0, uS[e.jb || "linear"])(c), e = e.translate, f = f.translate, c = new _.P(Math.round(c * f[0] - c * e[0] + e[0]), Math.round(c * f[1] - c * e[1] + e[1]))) : c = new _.P(e.translate[0], e.translate[1]);
        c = d.__gm_at = c;
        d = c.x - b.x;
        b = c.y - b.y;
        if (0 != d || 0 != b) c = a.Ea, e = new _.P(_.Uk(c.style.left) || 0, _.Uk(c.style.top) || 0), e.x = e.x + d, e.y += b, _.Am(c, e);
        _.S.trigger(a, "tick")
    };
    vS = function() {
        this.icon = {
            url: _.Qm("api-3/images/spotlight-poi2", !0),
            scaledSize: new _.Q(27, 43),
            origin: new _.P(0, 0),
            anchor: new _.P(14, 43),
            labelOrigin: new _.P(14, 15)
        };
        this.l = {
            url: _.Qm("api-3/images/spotlight-poi-dotless2", !0),
            scaledSize: new _.Q(27, 43),
            origin: new _.P(0, 0),
            anchor: new _.P(14, 43),
            labelOrigin: new _.P(14, 15)
        };
        this.j = {
            url: _.Qm("api-3/images/drag-cross", !0),
            scaledSize: new _.Q(13, 11),
            origin: new _.P(0, 0),
            anchor: new _.P(7, 6)
        };
        this.shape = {
            coords: [13.5, 0, 4, 3.75, 0, 13.5, 13.5, 43, 27, 13.5, 23, 3.75],
            type: "poly"
        }
    };
    yS = function(a) {
        var b = this;
        this.j = a;
        this.U = new _.lg(function() {
            var c = b.get("modelIcon"),
                d = b.get("modelLabel");
            wS(b, "viewIcon", c || d && xS.l || xS.icon);
            wS(b, "viewCross", xS.j);
            d = b.get("useDefaults");
            var e = b.get("modelShape");
            e || c && !d || (e = xS.shape);
            b.get("viewShape") != e && b.set("viewShape", e)
        }, 0);
        xS || (xS = new vS)
    };
    wS = function(a, b, c) {
        zS(a, c, function(d) {
            a.set(b, d);
            d = a.get("modelLabel");
            a.set("viewLabel", d ? {
                text: d.text || d,
                color: _.Pc(d.color, "#000000"),
                fontWeight: _.Pc(d.fontWeight, ""),
                fontSize: _.Pc(d.fontSize, "14px"),
                fontFamily: _.Pc(d.fontFamily, "Roboto,Arial,sans-serif")
            } : null)
        })
    };
    zS = function(a, b, c) {
        b ? null != b.path ? c(a.j(b)) : (_.Sc(b) || (b.size = b.size || b.scaledSize), b.size ? c(b) : (b.url || (b = {
            url: b
        }), dS(b.url, function(d) {
            b.size = d || new _.Q(24, 24);
            c(b)
        }))) : c(null)
    };
    BS = function() {
        this.j = AS(this);
        this.set("shouldRender", this.j);
        this.l = !1
    };
    AS = function(a) {
        var b = a.get("mapPixelBoundsQ"),
            c = a.get("icon"),
            d = a.get("position");
        if (!b || !c || !d) return 0 != a.get("visible");
        var e = c.anchor || _.Ni,
            f = c.size.width + Math.abs(e.x);
        c = c.size.height + Math.abs(e.y);
        return d.x > b.V - f && d.y > b.X - c && d.x < b.aa + f && d.y < b.ba + c ? 0 != a.get("visible") : !1
    };
    CS = function(a) {
        this.l = a;
        this.j = !1
    };
    DS = function(a, b, c, d) {
        this.B = c;
        this.m = a;
        this.A = b;
        this.F = d;
        this.H = 0;
        this.l = null;
        this.j = new _.lg(this.Qi, 0, this)
    };
    ES = function(a, b) {
        a.D = b;
        _.mg(a.j)
    };
    FS = function(a) {
        a.l && (_.Kl(a.l), a.l = null)
    };
    OS = function(a, b) {
        var c = this;
        this.U = new _.lg(function() {
            var d = c.get("panes"),
                e = c.get("scale");
            if (!d || !c.getPosition() || 0 == c.Ri() || _.M(e) && .1 > e && !c.get("dragging")) GS(c);
            else {
                var f = d.markerLayer;
                if (e = c.rf()) {
                    var g = null != e.url;
                    c.j && c.Fc == g && (_.Kl(c.j), c.j = null);
                    c.Fc = !g;
                    c.j = HS(c, f, c.j, e);
                    f = IS(c);
                    g = e.size;
                    c.Rb.width = f * g.width;
                    c.Rb.height = f * g.height;
                    c.set("size", c.Rb);
                    var h = c.get("anchorPoint");
                    if (!h || h.j) e = e.anchor, c.ja.x = f * (e ? g.width / 2 - e.x : 0), c.ja.y = -f * (e ? e.y : g.height), c.ja.j = !0, c.set("anchorPoint", c.ja)
                }
                if (!c.ca &&
                    (g = c.rf()) && (e = 0 != c.get("clickable"), f = c.getDraggable(), e || f)) {
                    h = g.url || _.es;
                    var k = null != g.url,
                        l = {};
                    if (_.vm()) {
                        k = g.size.width;
                        var m = g.size.height,
                            q = new _.Q(k + 16, m + 16);
                        g = {
                            url: h,
                            size: q,
                            anchor: g.anchor ? new _.P(g.anchor.x + 8, g.anchor.y + 8) : new _.P(Math.round(k / 2) + 8, m + 8),
                            scaledSize: q
                        }
                    } else if (_.tm.l || _.tm.m)
                        if (l.shape = c.get("shape"), l.shape || !k) k = g.scaledSize || g.size, g = {
                            url: h,
                            size: k,
                            anchor: g.anchor,
                            scaledSize: k
                        };
                    k = null != g.url;
                    c.Hc == k && JS(c);
                    c.Hc = !k;
                    g = c.D = HS(c, c.getPanes().overlayMouseTarget, c.D, g, l);
                    _.bx(g,
                        0);
                    h = g;
                    if ((l = h.getAttribute("usemap") || h.firstChild && h.firstChild.getAttribute("usemap")) && l.length && (h = _.zm(h).getElementById(l.substr(1)))) var r = h.firstChild;
                    g = r || g;
                    g.title = c.get("title") || "";
                    f && !c.B && (r = c.B = new _.hD(g, c.Qb, c.D), c.Qb ? (r.bindTo("deltaClientPosition", c), r.bindTo("position", c)) : r.bindTo("position", c.ob, "rawPosition"), r.bindTo("containerPixelBounds", c, "mapPixelBounds"), r.bindTo("anchorPoint", c), r.bindTo("size", c), r.bindTo("panningEnabled", c), r && !c.va && (c.va = [_.S.forward(r, "dragstart",
                        c), _.S.forward(r, "drag", c), _.S.forward(r, "dragend", c), _.S.forward(r, "panbynow", c)]));
                    r = c.get("cursor") || "pointer";
                    f ? c.B.set("draggableCursor", r) : _.ax(g, e ? r : "");
                    KS(c, g)
                }
                d = d.overlayLayer;
                if (e = r = c.get("cross")) e = c.get("crossOnDrag"), _.t(e) || (e = c.get("raiseOnDrag")), e = 0 != e && c.getDraggable() && c.get("dragging");
                e ? c.m = HS(c, d, c.m, r) : (c.m && _.Kl(c.m), c.m = null);
                c.F = [c.j, c.m, c.D];
                LS(c);
                for (d = 0; d < c.F.length; ++d)
                    if (e = c.F[d]) r = e, f = e.j, g = sS(e) || _.Ni, e = IS(c), f = MS(c, f, e, g), _.Am(r, f), (f = _.Hm.l) && (r.style[f] = 1 != e ? "scale(" +
                        e + ") " : ""), e = c.get("zIndex"), c.get("dragging") && (e = 1E6), _.M(e) || (e = Math.min(c.getPosition().y, 999999)), _.Fm(r, e), c.A && c.A.setZIndex(e);
                NS(c);
                for (d = 0; d < c.F.length; ++d)(r = c.F[d]) && _.Yw(r)
            }
        }, 0);
        this.Rd = a;
        this.Qb = b || !1;
        this.ob = new eS(0);
        this.ob.bindTo("position", this);
        this.A = this.j = null;
        this.Ic = [];
        this.Fc = !1;
        this.D = null;
        this.Hc = !1;
        this.m = null;
        this.F = [];
        this.Ub = new _.P(0, 0);
        this.Rb = new _.Q(0, 0);
        this.ja = new _.P(0, 0);
        this.Sb = !0;
        this.ca = 0;
        this.l = this.Gc = this.rd = this.Jc = null;
        this.Tb = !1;
        this.Ec = [_.S.addListener(this,
            "dragstart", this.Ti), _.S.addListener(this, "dragend", this.Si), _.S.addListener(this, "panbynow", function() {
            return c.U.Ma()
        })];
        this.Ea = this.J = this.H = this.B = this.K = this.va = null
    };
    GS = function(a) {
        a.A && (PS(a.Ic), a.A.release(), a.A = null);
        a.j && _.Kl(a.j);
        a.j = null;
        a.m && _.Kl(a.m);
        a.m = null;
        JS(a);
        a.F = []
    };
    LS = function(a) {
        var b = a.ak();
        if (b) {
            if (!a.A) {
                var c = a.A = new DS(a.getPanes(), b, a.get("opacity"), a.get("visible"));
                a.Ic = [_.S.addListener(a, "label_changed", function() {
                    c.setLabel(this.get("label"))
                }), _.S.addListener(a, "opacity_changed", function() {
                    c.setOpacity(this.get("opacity"))
                }), _.S.addListener(a, "panes_changed", function() {
                    var f = this.get("panes");
                    c.m = f;
                    FS(c);
                    _.mg(c.j)
                }), _.S.addListener(a, "visible_changed", function() {
                    c.setVisible(this.get("visible"))
                })]
            }
            b = a.rf();
            a.getPosition();
            if (b) {
                var d = a.j,
                    e = IS(a);
                d = MS(a, b, e, sS(d) || _.Ni);
                b = b.labelOrigin || new _.P(b.size.width / 2, b.size.height / 2);
                ES(a.A, new _.P(d.x + b.x, d.y + b.y));
                a.A.j.Ma()
            }
        }
    };
    JS = function(a) {
        a.ca ? a.Tb = !0 : (a.D && _.Kl(a.D), a.D = null, a.B && (a.B.unbindAll(), a.B.release(), a.B = null, PS(a.va), a.va = null), a.H && a.H.remove(), a.J && a.J.remove())
    };
    MS = function(a, b, c, d) {
        var e = a.getPosition(),
            f = b.size,
            g = (b = b.anchor) ? b.x : f.width / 2;
        a.Ub.x = e.x + d.x - Math.round(g - (g - f.width / 2) * (1 - c));
        b = b ? b.y : f.height;
        a.Ub.y = e.y + d.y - Math.round(b - (b - f.height / 2) * (1 - c));
        return a.Ub
    };
    HS = function(a, b, c, d, e) {
        if (null != d.url) {
            var f = e;
            e = d.origin || _.Ni;
            var g = a.get("opacity");
            a = _.Pc(g, 1);
            c ? (c.firstChild.__src__ != d.url && (b = c.firstChild, _.pC(b, d.url, b.m)), _.tC(c, d.size, e, d.scaledSize), c.firstChild.style.opacity = a) : (f = f || {}, f.l = 1 != _.tm.type, f.alpha = !0, f.opacity = g, c = _.sC(d.url, null, e, d.size, null, d.scaledSize, f), _.Xw(c), b.appendChild(c));
            a = c
        } else b = c || _.W("div", b), QS(b, d), c = b, a = a.get("opacity"), _.bx(c, _.Pc(a, 1)), a = b;
        c = a;
        c.j = d;
        return c
    };
    KS = function(a, b) {
        a.H && a.J && a.Ea == b || (a.Ea = b, a.H && a.H.remove(), a.J && a.J.remove(), a.H = _.Un(b, {
            Ha: function(c) {
                a.ca++;
                _.jn(c);
                _.S.trigger(a, "mousedown", c.ea)
            },
            La: function(c) {
                a.ca--;
                !a.ca && a.Tb && _.sw(this, function() {
                    a.Tb = !1;
                    JS(a);
                    a.U.Ma()
                }, 0);
                _.ln(c);
                _.S.trigger(a, "mouseup", c.ea)
            },
            onClick: function(c) {
                var d = c.event;
                c = c.qc;
                _.mn(d);
                3 == d.button ? c || _.S.trigger(a, "rightclick", d.ea) : c ? _.S.trigger(a, "dblclick", d.ea) : _.S.trigger(a, "click", d.ea)
            }
        }), a.J = new _.rr(b, b, {
            Gd: function(c) {
                _.S.trigger(a, "mouseout", c)
            },
            Hd: function(c) {
                _.S.trigger(a,
                    "mouseover", c)
            }
        }))
    };
    PS = function(a) {
        if (a)
            for (var b = 0, c = a.length; b < c; b++) _.S.removeListener(a[b])
    };
    IS = function(a) {
        return _.Hm.l ? Math.min(1, a.get("scale") || 1) : 1
    };
    NS = function(a) {
        if (!a.Sb) {
            a.l && (a.K && _.S.removeListener(a.K), a.l.cancel(), a.l = null);
            var b = a.get("animation");
            if (b = RS[b]) {
                var c = b.options;
                a.j && (a.Sb = !0, a.set("animating", !0), b = mS(a.j, b.icon, c), a.l = b, a.K = _.S.addListenerOnce(b, "done", function() {
                    a.set("animating", !1);
                    a.l = null;
                    a.set("animation", null)
                }))
            }
        }
    };
    aT = function(a, b, c, d, e) {
        var f = this;
        this.Ja = b;
        this.j = a;
        this.ca = e;
        this.H = b instanceof _.ve;
        a = SS(this);
        b = this.H && a ? _.tl(a, b.getProjection()) : null;
        this.l = new OS(d, !!this.H);
        this.J = !0;
        this.K = this.fa = null;
        (this.m = this.H ? new _.Ew(e.l, this.l, b, e, function() {
            if (f.l.get("dragging") && !f.j.get("place")) {
                var g = f.m.getPosition();
                g && (g = _.ul(g, f.Ja.get("projection")), f.J = !1, f.j.set("position", g), f.J = !0)
            }
        }) : null) && e.ta(this.m);
        this.A = new yS(c);
        this.da = this.H ? null : new _.LC;
        this.D = this.H ? null : new BS;
        this.F = new _.T;
        this.F.bindTo("position",
            this.j);
        this.F.bindTo("place", this.j);
        this.F.bindTo("draggable", this.j);
        this.F.bindTo("dragging", this.j);
        this.A.bindTo("modelIcon", this.j, "icon");
        this.A.bindTo("modelLabel", this.j, "label");
        this.A.bindTo("modelCross", this.j, "cross");
        this.A.bindTo("modelShape", this.j, "shape");
        this.A.bindTo("useDefaults", this.j, "useDefaults");
        this.l.bindTo("icon", this.A, "viewIcon");
        this.l.bindTo("label", this.A, "viewLabel");
        this.l.bindTo("cross", this.A, "viewCross");
        this.l.bindTo("shape", this.A, "viewShape");
        this.l.bindTo("title",
            this.j);
        this.l.bindTo("cursor", this.j);
        this.l.bindTo("dragging", this.j);
        this.l.bindTo("clickable", this.j);
        this.l.bindTo("zIndex", this.j);
        this.l.bindTo("opacity", this.j);
        this.l.bindTo("anchorPoint", this.j);
        this.l.bindTo("animation", this.j);
        this.l.bindTo("crossOnDrag", this.j);
        this.l.bindTo("raiseOnDrag", this.j);
        this.l.bindTo("animating", this.j);
        this.D || this.l.bindTo("visible", this.j);
        TS(this);
        US(this);
        this.B = [];
        VS(this);
        this.H ? (WS(this), XS(this), YS(this)) : (ZS(this), this.da && (this.D.bindTo("visible",
            this.j), this.D.bindTo("cursor", this.j), this.D.bindTo("icon", this.j), this.D.bindTo("icon", this.A, "viewIcon"), this.D.bindTo("mapPixelBoundsQ", this.Ja.__gm, "pixelBoundsQ"), this.D.bindTo("position", this.da, "pixelPosition"), this.l.bindTo("visible", this.D, "shouldRender")), $S(this))
    };
    TS = function(a) {
        var b = a.Ja.__gm;
        a.l.bindTo("mapPixelBounds", b, "pixelBounds");
        a.l.bindTo("panningEnabled", a.Ja, "draggable");
        a.l.bindTo("panes", b)
    };
    US = function(a) {
        var b = a.Ja.__gm;
        _.S.addListener(a.F, "dragging_changed", function() {
            b.set("markerDragging", a.j.get("dragging"))
        });
        b.set("markerDragging", b.get("markerDragging") || a.j.get("dragging"))
    };
    VS = function(a) {
        a.B.push(_.S.forward(a.l, "panbynow", a.Ja.__gm));
        _.C(bT, function(b) {
            a.B.push(_.S.addListener(a.l, b, function(c) {
                var d = a.H ? SS(a) : a.j.get("internalPosition");
                c = new _.$k(d, c, a.l.get("position"));
                _.S.trigger(a.j, b, c)
            }))
        })
    };
    WS = function(a) {
        function b() {
            a.j.get("place") ? a.l.set("draggable", !1) : a.l.set("draggable", !!a.j.get("draggable"))
        }
        a.B.push(_.S.addListener(a.F, "draggable_changed", b));
        a.B.push(_.S.addListener(a.F, "place_changed", b));
        b()
    };
    XS = function(a) {
        a.B.push(_.S.addListener(a.Ja, "projection_changed", function() {
            return cT(a)
        }));
        a.B.push(_.S.addListener(a.F, "position_changed", function() {
            return cT(a)
        }));
        a.B.push(_.S.addListener(a.F, "place_changed", function() {
            return cT(a)
        }))
    };
    YS = function(a) {
        a.B.push(_.S.addListener(a.l, "dragging_changed", function() {
            if (a.l.get("dragging")) a.fa = _.Fw(a.m), a.fa && _.Gw(a.m, a.fa);
            else {
                a.fa = null;
                a.K = null;
                var b = a.m.getPosition();
                if (b && (b = _.ul(b, a.Ja.get("projection")), b = dT(a, b))) {
                    var c = _.tl(b, a.Ja.get("projection"));
                    a.j.get("place") || (a.J = !1, a.j.set("position", b), a.J = !0);
                    a.m.setPosition(c)
                }
            }
        }));
        a.B.push(_.S.addListener(a.l, "deltaclientposition_changed", function() {
            var b = a.l.get("deltaClientPosition");
            if (b && (a.fa || a.K)) {
                var c = a.K || a.fa;
                a.K = {
                    clientX: c.clientX +
                        b.clientX,
                    clientY: c.clientY + b.clientY
                };
                b = a.ca.zb(a.K);
                b = _.ul(b, a.Ja.get("projection"));
                c = a.K;
                var d = dT(a, b);
                d && (a.j.get("place") || (a.J = !1, a.j.set("position", d), a.J = !0), d.equals(b) || (b = _.tl(d, a.Ja.get("projection")), c = _.Fw(a.m, b)));
                c && _.Gw(a.m, c)
            }
        }))
    };
    ZS = function(a) {
        if (a.da) {
            a.l.bindTo("scale", a.da);
            a.l.bindTo("position", a.da, "pixelPosition");
            var b = a.Ja.__gm;
            a.da.bindTo("latLngPosition", a.j, "internalPosition");
            a.da.bindTo("focus", a.Ja, "position");
            a.da.bindTo("zoom", b);
            a.da.bindTo("offset", b);
            a.da.bindTo("center", b, "projectionCenterQ");
            a.da.bindTo("projection", a.Ja)
        }
    };
    $S = function(a) {
        if (a.da) {
            var b = new CS(a.Ja instanceof _.se);
            b.bindTo("internalPosition", a.da, "latLngPosition");
            b.bindTo("place", a.j);
            b.bindTo("position", a.j);
            b.bindTo("draggable", a.j);
            a.l.bindTo("draggable", b, "actuallyDraggable")
        }
    };
    cT = function(a) {
        if (a.J) {
            var b = SS(a);
            b && a.m.setPosition(_.tl(b, a.Ja.get("projection")))
        }
    };
    dT = function(a, b) {
        var c = a.Ja.__gm.get("snappingCallback");
        return c && (a = c({
            latLng: b,
            overlay: a.j
        })) ? a : b
    };
    SS = function(a) {
        var b = a.j.get("place");
        a = a.j.get("position");
        return b && b.location || a
    };
    fT = function(a, b, c) {
        b instanceof _.ve ? b.__gm.j.then(function(d) {
            eT(a, b, c, d.sa)
        }) : eT(a, b, c, null)
    };
    eT = function(a, b, c, d) {
        function e(f) {
            var g = b instanceof _.ve,
                h = g ? f.__gm.dc.map : f.__gm.dc.streetView,
                k = h && h.Ja == b,
                l = k != a.contains(f);
            h && l && (g ? (f.__gm.dc.map.dispose(), f.__gm.dc.map = null) : (f.__gm.dc.streetView.dispose(), f.__gm.dc.streetView = null));
            !a.contains(f) || !g && f.get("mapOnly") || k || (b instanceof _.ve ? f.__gm.dc.map = new aT(f, b, c, _.qD(b.__gm, f), d) : f.__gm.dc.streetView = new aT(f, b, c, _.jb, null))
        }
        _.S.addListener(a, "insert", e);
        _.S.addListener(a, "remove", e);
        a.forEach(e)
    };
    gT = function(a, b, c, d) {
        this.m = a;
        this.A = b;
        this.D = c;
        this.l = d
    };
    iT = function(a) {
        if (!a.j) {
            var b = a.m,
                c = b.ownerDocument.createElement("canvas");
            _.Im(c);
            c.style.position = "absolute";
            c.style.top = c.style.left = "0";
            var d = c.getContext("2d"),
                e = hT(d),
                f = a.l.size;
            c.width = Math.ceil(f.L * e);
            c.height = Math.ceil(f.P * e);
            c.style.width = _.V(f.L);
            c.style.height = _.V(f.P);
            b.appendChild(c);
            a.j = c.context = d
        }
        return a.j
    };
    hT = function(a) {
        return _.Jl() / (a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio || a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || a.backingStorePixelRatio || 1)
    };
    jT = function(a, b, c) {
        a = a.D;
        a.width = b;
        a.height = c;
        return a
    };
    lT = function(a) {
        var b = kT(a),
            c = iT(a),
            d = hT(c);
        a = a.l.size;
        c.clearRect(0, 0, Math.ceil(a.L * d), Math.ceil(a.P * d));
        b.forEach(function(e) {
            c.globalAlpha = _.Pc(e.opacity, 1);
            c.drawImage(e.image, e.md, e.nd, e.Nd, e.Md, Math.round(e.dx * d), Math.round(e.dy * d), e.Kb * d, e.Jb * d)
        })
    };
    kT = function(a) {
        var b = [];
        a.A.forEach(function(c) {
            b.push(c)
        });
        b.sort(function(c, d) {
            return c.zIndex - d.zIndex
        });
        return b
    };
    mT = function() {
        this.j = _.rw().za
    };
    pT = function(a, b, c) {
        var d = this;
        this.B = b;
        this.j = c;
        this.W = {};
        this.l = {};
        this.A = 0;
        this.m = !0;
        var e = {
            animating: 1,
            animation: 1,
            attribution: 1,
            clickable: 1,
            cursor: 1,
            draggable: 1,
            flat: 1,
            icon: 1,
            label: 1,
            opacity: 1,
            optimized: 1,
            place: 1,
            position: 1,
            shape: 1,
            title: 1,
            visible: 1,
            zIndex: 1
        };
        this.D = function(g) {
            g in e && (delete this.changed, d.l[_.Vd(this)] = this, nT(d))
        };
        a.j = function(g) {
            oT(d, g)
        };
        a.onRemove = function(g) {
            delete g.changed;
            delete d.l[_.Vd(g)];
            d.B.remove(g);
            d.j.remove(g);
            _.en("Om", "-p", g);
            _.en("Om", "-v", g);
            _.en("Smp",
                "-p", g);
            _.S.removeListener(d.W[_.Vd(g)]);
            delete d.W[_.Vd(g)]
        };
        a = a.l;
        for (var f in a) oT(this, a[f])
    };
    oT = function(a, b) {
        a.l[_.Vd(b)] = b;
        nT(a)
    };
    nT = function(a) {
        a.A || (a.A = _.Xk(function() {
            a.A = 0;
            var b = a.l;
            a.l = {};
            var c = a.m,
                d;
            for (d in b) qT(a, b[d]);
            c && !a.m && a.j.forEach(function(e) {
                qT(a, e)
            })
        }))
    };
    qT = function(a, b) {
        var c = rT(b);
        b.changed = a.D;
        if (!b.get("animating"))
            if (a.B.remove(b), c && 0 != b.get("visible")) {
                a.m && 256 <= a.j.m && (a.m = !1);
                var d = b.get("optimized"),
                    e = b.get("draggable"),
                    f = !!b.get("animation"),
                    g = b.get("icon");
                g = !!g && null != g.path;
                var h = null != b.get("label");
                0 == d || e || f || g || h || !d && a.m ? _.le(a.j, b) : (a.j.remove(b), _.le(a.B, b));
                !b.get("pegmanMarker") && (d = b.get("map"), _.bn(d, "Om"), _.dn("Om", "-p", b), d.getBounds() && d.getBounds().contains(c) && _.dn("Om", "-v", b), a.W[_.Vd(b)] = a.W[_.Vd(b)] || _.S.addListener(b,
                    "click",
                    function(k) {
                        _.dn("Om", "-i", k)
                    }), a = b.get("place")) && (a.placeId ? _.bn(d, "Smpi") : _.bn(d, "Smpq"), _.dn("Smp", "-p", b), b.get("attribution") && _.bn(d, "Sma"))
            } else a.j.remove(b)
    };
    rT = function(a) {
        var b = a.get("place");
        b = b ? b.location : a.get("position");
        a.set("internalPosition", b);
        return b
    };
    sT = function(a, b, c, d) {
        this.A = c;
        this.B = new _.nD(a, d, c);
        this.j = b
    };
    uT = function(a, b, c, d) {
        var e = b.ra,
            f = a.A.get();
        if (!f) return null;
        f = f.ka.size;
        c = _.oD(a.B, e, new _.P(c, d));
        if (!c) return null;
        a = new _.P(c.Rc.M * f.L, c.Rc.N * f.P);
        var g = [];
        c.Aa.ua.forEach(function(h) {
            g.push(h)
        });
        g.sort(function(h, k) {
            return k.zIndex - h.zIndex
        });
        c = null;
        for (e = 0; d = g[e]; ++e)
            if (f = d.Dd, 0 != f.clickable && (f = f.Vb, tT(a.x, a.y, d))) {
                c = f;
                break
            }
        c && (b.j = d);
        return c
    };
    tT = function(a, b, c) {
        if (c.dx > a || c.dy > b || c.dx + c.Kb < a || c.dy + c.Jb < b) a = !1;
        else a: {
            var d = c.Dd.shape;a -= c.dx;b -= c.dy;c = d.coords;
            switch (d.type.toLowerCase()) {
                case "rect":
                    a = c[0] <= a && a <= c[2] && c[1] <= b && b <= c[3];
                    break a;
                case "circle":
                    d = c[2];
                    a -= c[0];
                    b -= c[1];
                    a = a * a + b * b <= d * d;
                    break a;
                default:
                    d = c.length, c[0] == c[d - 2] && c[1] == c[d - 1] || c.push(c[0], c[1]), a = 0 != _.vD(a, b, c)
            }
        }
        return a
    };
    wT = function(a, b, c) {
        this.m = b;
        var d = this;
        a.j = function(e) {
            vT(d, e, !0)
        };
        a.onRemove = function(e) {
            vT(d, e, !1)
        };
        this.l = null;
        this.j = !1;
        this.B = 0;
        this.D = c;
        a.m ? (this.j = !0, this.A()) : _.cc(_.Hj(_.S.trigger, c, "load"))
    };
    vT = function(a, b, c) {
        4 > a.B++ ? c ? a.m.B(b) : a.m.F(b) : a.j = !0;
        a.l || (a.l = _.Xk((0, _.z)(a.A, a)))
    };
    zT = function(a, b, c, d, e, f, g) {
        _.Bh.call(this);
        var h = this;
        this.B = a;
        this.D = d;
        this.m = c;
        this.l = e;
        this.A = f;
        this.j = g || _.oj;
        b.j = function(k) {
            var l = _.sl(h.get("projection")),
                m = k.j; - 64 > m.dx || -64 > m.dy || 64 < m.dx + m.Kb || 64 < m.dy + m.Jb ? (_.le(h.m, k), m = h.l.search(_.Qi)) : (m = k.latLng, m = new _.P(m.lat(), m.lng()), k.ra = m, _.fJ(h.A, {
                ra: m,
                ue: k
            }), m = _.uD(h.l, m));
            for (var q = 0, r = m.length; q < r; ++q) {
                var u = m[q],
                    v = u.Aa || null;
                if (u = xT(h, v, u.ji || null, k, l)) k.ua[_.Vd(u)] = u, _.le(v.ua, u)
            }
        };
        b.onRemove = function(k) {
            yT(h, k)
        }
    };
    AT = function(a, b) {
        a.B[_.Vd(b)] = b;
        var c = {
                M: b.la.x,
                N: b.la.y,
                Y: b.zoom
            },
            d = _.sl(a.get("projection")),
            e = _.Jk(a.j, c);
        e = new _.P(e.S, e.T);
        var f = _.Fv(a.j, c, 64 / a.j.size.L);
        c = f.min;
        f = f.max;
        c = _.sd(c.S, c.T, f.S, f.T);
        _.hJ(c, d, e, function(g, h) {
            g.ji = h;
            g.Aa = b;
            b.Eb[_.Vd(g)] = g;
            _.sD(a.l, g);
            h = _.Oc(a.A.search(g), function(r) {
                return r.ue
            });
            a.m.forEach((0, _.z)(h.push, h));
            for (var k = 0, l = h.length; k < l; ++k) {
                var m = h[k],
                    q = xT(a, b, g.ji, m, d);
                q && (m.ua[_.Vd(q)] = q, _.le(b.ua, q))
            }
        });
        b.$ && b.ua && a.D(b.$, b.ua)
    };
    BT = function(a, b) {
        b && (delete a.B[_.Vd(b)], b.ua.forEach(function(c) {
            b.ua.remove(c);
            delete c.Dd.ua[_.Vd(c)]
        }), _.Jc(b.Eb, function(c, d) {
            a.l.remove(d)
        }))
    };
    yT = function(a, b) {
        a.m.contains(b) ? a.m.remove(b) : a.A.remove({
            ra: b.ra,
            ue: b
        });
        _.Jc(b.ua, function(c, d) {
            delete b.ua[c];
            d.Aa.ua.remove(d)
        })
    };
    xT = function(a, b, c, d, e) {
        if (!e || !c || !d.latLng) return null;
        var f = e.fromLatLngToPoint(c);
        c = e.fromLatLngToPoint(d.latLng);
        e = a.j.size;
        a = _.Gv(a.j, new _.ld(c.x, c.y), new _.ld(f.x, f.y), b.zoom);
        c.x = a.M * e.L;
        c.y = a.N * e.P;
        a = d.zIndex;
        _.M(a) || (a = c.y);
        a = Math.round(1E3 * a) + _.Vd(d) % 1E3;
        f = d.j;
        b = {
            image: f.image,
            md: f.md,
            nd: f.nd,
            Nd: f.Nd,
            Md: f.Md,
            dx: f.dx + c.x,
            dy: f.dy + c.y,
            Kb: f.Kb,
            Jb: f.Jb,
            zIndex: a,
            opacity: d.opacity,
            Aa: b,
            Dd: d
        };
        return b.dx > e.L || b.dy > e.P || 0 > b.dx + b.Kb || 0 > b.dy + b.Jb ? null : b
    };
    ET = function(a, b, c) {
        var d = new mT,
            e = new vS,
            f = CT,
            g = this;
        a.j = function(h) {
            DT(g, h)
        };
        a.onRemove = function(h) {
            g.l.remove(h.__gm.je);
            delete h.__gm.je
        };
        this.l = b;
        this.j = e;
        this.B = f;
        this.A = d;
        this.m = c
    };
    DT = function(a, b) {
        var c = b.get("internalPosition"),
            d = b.get("zIndex"),
            e = b.get("opacity"),
            f = b.__gm.je = {
                Vb: b,
                latLng: c,
                zIndex: d,
                opacity: e,
                ua: {}
            };
        c = b.get("useDefaults");
        d = b.get("icon");
        var g = b.get("shape");
        g || d && !c || (g = a.j.shape);
        var h = d ? a.B(d) : a.j.icon,
            k = cS(function() {
                if (f == b.__gm.je && (f.j || f.l)) {
                    var l = g;
                    if (f.j) {
                        var m = h.size;
                        var q = b.get("anchorPoint");
                        if (!q || q.j) q = new _.P(f.j.dx + m.width / 2, f.j.dy), q.j = !0, b.set("anchorPoint", q)
                    } else m = f.l.size;
                    l ? l.coords = l.coords || l.coord : l = {
                        type: "rect",
                        coords: [0, 0, m.width,
                            m.height
                        ]
                    };
                    f.shape = l;
                    f.clickable = b.get("clickable");
                    f.title = b.get("title") || null;
                    f.cursor = b.get("cursor") || "pointer";
                    _.le(a.l, f)
                }
            });
        h.url ? a.A.load(h, function(l) {
            f.j = l;
            k()
        }) : (f.l = a.m(h), k())
    };
    CT = function(a) {
        if (_.Sc(a)) {
            var b = CT.j;
            return b[a] = b[a] || {
                url: a
            }
        }
        return a
    };
    FT = function(a, b, c) {
        var d = new _.ke,
            e = new _.ke;
        new ET(a, d, c);
        var f = _.zm(b.getDiv()).createElement("canvas"),
            g = {};
        a = _.sd(-100, -300, 100, 300);
        var h = new _.rD(a, void 0);
        a = _.sd(-90, -180, 90, 180);
        var k = _.gJ(a, function(u, v) {
                return u.ue == v.ue
            }),
            l = null,
            m = null,
            q = new _.qe(null, void 0),
            r = b.__gm;
        r.j.then(function(u) {
            r.m.register(new sT(g, r, q, u.sa.l));
            u.Nc.ma(function(v) {
                if (v && l != v.ka) {
                    m && m.unbindAll();
                    var w = l = v.ka;
                    m = new zT(g, d, e, function(x, B) {
                        return new wT(B, new gT(x, B, f, w), x)
                    }, h, k, l);
                    m.bindTo("projection", b);
                    q.set(m.Na())
                }
            })
        });
        _.pD(b, q, "markerLayer", -1)
    };
    GT = _.n();
    _.P.prototype.Gf = _.vj(9, function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    });
    _.A(eS, _.T);
    eS.prototype.position_changed = function() {
        this.j || (this.j = !0, this.set("rawPosition", this.get("position")), this.j = !1)
    };
    eS.prototype.rawPosition_changed = function() {
        this.j || (this.j = !0, this.set("position", fS(this, this.get("rawPosition"))), this.j = !1)
    };
    var uS = {
            linear: _.ma(),
            "ease-out": function(a) {
                return 1 - Math.pow(a - 1, 2)
            },
            "ease-in": function(a) {
                return Math.pow(a, 2)
            }
        },
        iS;
    kS.prototype.start = function() {
        this.j.Yb = this.j.Yb || 1;
        this.j.duration = this.j.duration || 1;
        _.S.addDomListenerOnce(this.Ea, "webkitAnimationEnd", (0, _.z)(function() {
            this.l = !0;
            _.S.trigger(this, "done")
        }, this));
        nS(this.Ea, jS(this.m), this.j)
    };
    kS.prototype.cancel = function() {
        nS(this.Ea, null, {});
        _.S.trigger(this, "done")
    };
    kS.prototype.stop = function() {
        this.l || _.S.addDomListenerOnce(this.Ea, "webkitAnimationIteration", (0, _.z)(this.cancel, this))
    };
    var qS = null,
        oS = [];
    lS.prototype.start = function() {
        oS.push(this);
        qS || (qS = window.setInterval(rS, 10));
        this.m = _.Vk();
        pS(this)
    };
    lS.prototype.cancel = function() {
        this.j || (this.j = !0, tS(this, 1), _.S.trigger(this, "done"))
    };
    lS.prototype.stop = function() {
        this.j || (this.l = 1)
    };
    var RS = {};
    RS[1] = {
        options: {
            duration: 700,
            Yb: "infinite"
        },
        icon: new Animation([{
            time: 0,
            translate: [0, 0],
            jb: "ease-out"
        }, {
            time: .5,
            translate: [0, -20],
            jb: "ease-in"
        }, {
            time: 1,
            translate: [0, 0],
            jb: "ease-out"
        }])
    };
    RS[2] = {
        options: {
            duration: 500,
            Yb: 1
        },
        icon: new Animation([{
            time: 0,
            translate: [0, -500],
            jb: "ease-in"
        }, {
            time: .5,
            translate: [0, 0],
            jb: "ease-out"
        }, {
            time: .75,
            translate: [0, -20],
            jb: "ease-in"
        }, {
            time: 1,
            translate: [0, 0],
            jb: "ease-out"
        }])
    };
    RS[3] = {
        options: {
            duration: 200,
            Gf: 20,
            Yb: 1,
            oi: !1
        },
        icon: new Animation([{
            time: 0,
            translate: [0, 0],
            jb: "ease-in"
        }, {
            time: 1,
            translate: [0, -20],
            jb: "ease-out"
        }])
    };
    RS[4] = {
        options: {
            duration: 500,
            Gf: 20,
            Yb: 1,
            oi: !1
        },
        icon: new Animation([{
            time: 0,
            translate: [0, -20],
            jb: "ease-in"
        }, {
            time: .5,
            translate: [0, 0],
            jb: "ease-out"
        }, {
            time: .75,
            translate: [0, -10],
            jb: "ease-in"
        }, {
            time: 1,
            translate: [0, 0],
            jb: "ease-out"
        }])
    };
    var xS;
    _.A(yS, _.T);
    yS.prototype.changed = function(a) {
        "modelIcon" != a && "modelShape" != a && "modelCross" != a && "modelLabel" != a || _.mg(this.U)
    };
    _.A(BS, _.T);
    BS.prototype.changed = function() {
        if (!this.l) {
            var a = AS(this);
            this.j != a && (this.j = a, this.l = !0, this.set("shouldRender", this.j), this.l = !1)
        }
    };
    _.A(CS, _.T);
    CS.prototype.internalPosition_changed = function() {
        if (!this.j) {
            this.j = !0;
            var a = this.get("position"),
                b = this.get("internalPosition");
            a && b && !a.equals(b) && this.set("position", this.get("internalPosition"));
            this.j = !1
        }
    };
    CS.prototype.place_changed = CS.prototype.position_changed = CS.prototype.draggable_changed = function() {
        if (!this.j) {
            this.j = !0;
            if (this.l) {
                var a = this.get("place");
                a ? this.set("internalPosition", a.location) : this.set("internalPosition", this.get("position"))
            }
            this.get("place") ? this.set("actuallyDraggable", !1) : this.set("actuallyDraggable", this.get("draggable"));
            this.j = !1
        }
    };
    _.p = DS.prototype;
    _.p.setOpacity = function(a) {
        this.B = a;
        _.mg(this.j)
    };
    _.p.setLabel = function(a) {
        this.A = a;
        _.mg(this.j)
    };
    _.p.setVisible = function(a) {
        this.F = a;
        _.mg(this.j)
    };
    _.p.setZIndex = function(a) {
        this.H = a;
        _.mg(this.j)
    };
    _.p.release = function() {
        this.m = null;
        FS(this)
    };
    _.p.Qi = function() {
        if (this.m && this.A && 0 != this.F) {
            var a = this.m.markerLayer,
                b = this.A;
            this.l ? a.appendChild(this.l) : this.l = _.W("div", a);
            a = this.l;
            this.D && _.Am(a, this.D);
            var c = a.firstChild;
            c || (c = _.W("div", a), c.style.height = "100px", c.style.marginTop = "-50px", c.style.marginLeft = "-50%", c.style.display = "table", c.style.borderSpacing = "0");
            var d = c.firstChild;
            d || (d = _.W("div", c), d.style.display = "table-cell", d.style.verticalAlign = "middle", d.style.whiteSpace = "nowrap", d.style.textAlign = "center");
            c = d.firstChild || _.W("div",
                d);
            _.Cm(c, b.text);
            c.style.color = b.color;
            c.style.fontSize = b.fontSize;
            c.style.fontWeight = b.fontWeight;
            c.style.fontFamily = b.fontFamily;
            _.bx(c, _.Pc(this.B, 1));
            _.Fm(a, this.H)
        } else FS(this)
    };
    var QS = (0, _.z)(function(a, b, c) {
        _.Cm(b, "");
        var d = _.Jl(),
            e = _.zm(b).createElement("canvas");
        e.width = c.size.width * d;
        e.height = c.size.height * d;
        e.style.width = _.V(c.size.width);
        e.style.height = _.V(c.size.height);
        _.Bg(b, c.size);
        b.appendChild(e);
        _.Am(e, _.Ni);
        _.Im(e);
        b = e.getContext("2d");
        b.lineCap = b.lineJoin = "round";
        b.scale(d, d);
        a = a(b);
        b.beginPath();
        _.FD(a, c.j, c.anchor.x, c.anchor.y, c.rotation || 0, c.scale);
        c.fillOpacity && (b.fillStyle = c.fillColor, b.globalAlpha = c.fillOpacity, b.fill());
        c.strokeWeight && (b.lineWidth =
            c.strokeWeight, b.strokeStyle = c.strokeColor, b.globalAlpha = c.strokeOpacity, b.stroke())
    }, null, function(a) {
        return new _.ED(a)
    });
    _.A(OS, _.T);
    _.p = OS.prototype;
    _.p.panes_changed = function() {
        GS(this);
        _.mg(this.U)
    };
    _.p.jd = function(a) {
        this.set("position", a && new _.P(a.L, a.P))
    };
    _.p.dd = function() {
        this.unbindAll();
        this.set("panes", null);
        this.l && this.l.stop();
        this.K && (_.S.removeListener(this.K), this.K = null);
        this.l = null;
        PS(this.Ec);
        this.Ec = [];
        GS(this);
        JS(this)
    };
    _.p.cg = function() {
        var a;
        if (!(a = this.Jc != (0 != this.get("clickable")) || this.rd != this.getDraggable())) {
            a = this.Gc;
            var b = this.get("shape");
            if (null == a || null == b) a = a == b;
            else {
                var c;
                if (c = a.type == b.type) a: if (a = a.coords, b = b.coords, _.Ta(a) && _.Ta(b) && a.length == b.length) {
                    c = a.length;
                    for (var d = 0; d < c; d++)
                        if (a[d] !== b[d]) {
                            c = !1;
                            break a
                        }
                    c = !0
                } else c = !1;
                a = c
            }
            a = !a
        }
        a && (this.Jc = 0 != this.get("clickable"), this.rd = this.getDraggable(), this.Gc = this.get("shape"), JS(this), _.mg(this.U))
    };
    _.p.shape_changed = OS.prototype.cg;
    _.p.clickable_changed = OS.prototype.cg;
    _.p.draggable_changed = OS.prototype.cg;
    _.p.qb = function() {
        _.mg(this.U)
    };
    _.p.cursor_changed = OS.prototype.qb;
    _.p.scale_changed = OS.prototype.qb;
    _.p.raiseOnDrag_changed = OS.prototype.qb;
    _.p.crossOnDrag_changed = OS.prototype.qb;
    _.p.zIndex_changed = OS.prototype.qb;
    _.p.opacity_changed = OS.prototype.qb;
    _.p.title_changed = OS.prototype.qb;
    _.p.cross_changed = OS.prototype.qb;
    _.p.icon_changed = OS.prototype.qb;
    _.p.visible_changed = OS.prototype.qb;
    _.p.dragging_changed = OS.prototype.qb;
    _.p.position_changed = function() {
        this.Qb ? this.U.Ma() : _.mg(this.U)
    };
    _.p.getPosition = _.fe("position");
    _.p.getPanes = _.fe("panes");
    _.p.Ri = _.fe("visible");
    _.p.getDraggable = function() {
        return !!this.get("draggable")
    };
    _.p.Ti = function() {
        this.set("dragging", !0);
        this.ob.set("snappingCallback", this.Rd)
    };
    _.p.Si = function() {
        this.ob.set("snappingCallback", null);
        this.set("dragging", !1)
    };
    _.p.animation_changed = function() {
        this.Sb = !1;
        this.get("animation") ? NS(this) : (this.set("animating", !1), this.l && this.l.stop())
    };
    _.p.rf = _.fe("icon");
    _.p.ak = _.fe("label");
    var bT = "click dblclick mouseup mousedown mouseover mouseout rightclick dragstart drag dragend".split(" ");
    aT.prototype.dispose = function() {
        this.l.set("animation", null);
        this.l.dd();
        this.ca && this.m ? this.ca.Vc(this.m) : this.l.dd();
        this.D && this.D.unbindAll();
        this.da && this.da.unbindAll();
        this.A.unbindAll();
        this.F.unbindAll();
        _.C(this.B, _.S.removeListener);
        this.B.length = 0
    };
    gT.prototype.B = gT.prototype.F = function(a) {
        var b = kT(this),
            c = iT(this),
            d = hT(c),
            e = Math.round(a.dx * d),
            f = Math.round(a.dy * d),
            g = Math.ceil(a.Kb * d);
        a = Math.ceil(a.Jb * d);
        var h = jT(this, g, a),
            k = h.getContext("2d");
        k.translate(-e, -f);
        b.forEach(function(l) {
            k.globalAlpha = _.Pc(l.opacity, 1);
            k.drawImage(l.image, l.md, l.nd, l.Nd, l.Md, Math.round(l.dx * d), Math.round(l.dy * d), l.Kb * d, l.Jb * d)
        });
        c.clearRect(e, f, g, a);
        c.globalAlpha = 1;
        c.drawImage(h, e, f)
    };
    mT.prototype.load = function(a, b) {
        return this.j.load(new _.YB(a.url), function(c) {
            if (c) {
                var d = c.size,
                    e = a.size || a.scaledSize || d;
                a.size = e;
                var f = a.anchor || new _.P(e.width / 2, e.height),
                    g = {};
                g.image = c;
                c = a.scaledSize || d;
                var h = c.width / d.width,
                    k = c.height / d.height;
                g.md = a.origin ? a.origin.x / h : 0;
                g.nd = a.origin ? a.origin.y / k : 0;
                g.dx = -f.x;
                g.dy = -f.y;
                g.md * h + e.width > c.width ? (g.Nd = d.width - g.md * h, g.Kb = c.width) : (g.Nd = e.width / h, g.Kb = e.width);
                g.nd * k + e.height > c.height ? (g.Md = d.height - g.nd * k, g.Jb = c.height) : (g.Md = e.height / k, g.Jb =
                    e.height);
                b(g)
            } else b(null)
        })
    };
    mT.prototype.cancel = function(a) {
        this.j.cancel(a)
    };
    sT.prototype.l = function(a) {
        return "dragstart" != a && "drag" != a && "dragend" != a
    };
    sT.prototype.m = function(a, b) {
        return b ? uT(this, a, -8, 0) || uT(this, a, 0, -8) || uT(this, a, 8, 0) || uT(this, a, 0, 8) : uT(this, a, 0, 0)
    };
    sT.prototype.handleEvent = function(a, b, c) {
        var d = b.j;
        if ("mouseout" == a) this.j.set("cursor", ""), this.j.set("title", null);
        else if ("mouseover" == a) {
            var e = d.Dd;
            this.j.set("cursor", e.cursor);
            (e = e.title) && this.j.set("title", e)
        }
        var f;
        d && "mouseout" != a ? f = d.Dd.latLng : f = b.latLng;
        "dblclick" == a && _.Nd(b.wa);
        _.S.trigger(c, a, new _.$k(f))
    };
    sT.prototype.zIndex = 40;
    wT.prototype.A = function() {
        this.j && lT(this.m);
        this.j = !1;
        this.l = null;
        this.B = 0;
        _.cc(_.Hj(_.S.trigger, this.D, "load"))
    };
    _.wj(zT, _.Bh);
    zT.prototype.Na = function() {
        return {
            ka: this.j,
            Ta: 2,
            Wa: this.F.bind(this)
        }
    };
    zT.prototype.F = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        var d = document.createElement("div"),
            e = this.j.size;
        d.style.width = e.L + "px";
        d.style.height = e.P + "px";
        d.style.overflow = "hidden";
        a = {
            $: d,
            zoom: a.Y,
            la: new _.P(a.M, a.N),
            Eb: {},
            ua: new _.ke
        };
        d.Aa = a;
        AT(this, a);
        var f = !1;
        return {
            Ga: function() {
                return d
            },
            gb: function() {
                return f
            },
            loaded: new Promise(function(g) {
                _.S.addListenerOnce(d, "load", function() {
                    f = !0;
                    g()
                })
            }),
            release: function() {
                var g = d.Aa;
                d.Aa = null;
                BT(c, g);
                _.Cm(d, "");
                b.Ka && b.Ka()
            }
        }
    };
    CT.j = {};
    GT.prototype.j = function(a, b) {
        var c = _.QD();
        if (b instanceof _.se) fT(a, b, c);
        else {
            var d = new _.ke;
            fT(d, b, c);
            var e = new _.ke;
            FT(e, b, c);
            new pT(a, e, d)
        }
        _.S.addListener(b, "idle", function() {
            a.forEach(function(f) {
                var g = f.get("internalPosition"),
                    h = b.getBounds();
                g && !f.pegmanMarker && h && h.contains(g) ? _.dn("Om", "-v", f) : _.en("Om", "-v", f)
            })
        })
    };
    _.Ne("marker", new GT);
});