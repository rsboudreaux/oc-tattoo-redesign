google.maps.__gjsload__('controls', function(_) {
    var FJ, GJ, HJ, IJ, JJ, KJ, LJ, MJ, NJ, PJ, QJ, RJ, SJ, TJ, UJ, WJ, XJ, YJ, ZJ, $J, aK, bK, eK, dK, cK, fK, gK, hK, jK, iK, kK, nK, pK, oK, rK, sK, tK, qK, uK, vK, wK, xK, AK, BK, CK, DK, zK, EK, HK, IK, FK, GK, JK, LK, KK, MK, QK, NK, OK, RK, SK, TK, UK, VK, XK, YK, WK, ZK, $K, bL, aL, fL, eL, dL, gL, hL, jL, iL, kL, lL, oL, nL, mL, pL, qL, rL, sL, tL, uL, vL, xL, wL, yL, zL, DL, AL, BL, EL, FL, GL, HL, KL, JL, LL, IL, QL, ML, NL, OL, PL, RL, SL, TL, UL, YL, VL, WL, XL, ZL, bM, cM, $L, aM, gM, dM, iM, jM, hM, kM, lM, mM, nM, oM, yM, xM, FM, GM, DM, HM, uM, wM, rM, tM, sM, vM, zM, qM, JM, KM, LM, MM, NM, OM, pM, BM, EM, CM, AM, PM, QM, IM, RM, SM, VM, WM, XM,
        YM, TM, UM, ZM, aN, bN, cN, dN, eN, fN;
    FJ = function(a, b) {
        b instanceof _.yb || b instanceof _.yb || (b = "object" == typeof b && b.oc ? b.fb() : String(b), _.uv.test(b) || (b = "about:invalid#zClosurez"), b = _.Ab(b));
        a.href = _.tv(b)
    };
    GJ = function(a, b, c, d) {
        b = a.A.listeners[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Cb && g.capture == c) {
                var h = g.listener,
                    k = g.Xb || g.src;
                g.Vd && _.Pf(a.A, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && 0 != d.Sh
    };
    HJ = function(a, b) {
        var c = a.H;
        if (c) {
            var d = [];
            for (var e = 1; c; c = c.H) d.push(c), ++e
        }
        a = a.K;
        c = b.type || b;
        _.Ja(b) ? b = new _.Gf(b, a) : b instanceof _.Gf ? b.target = b.target || a : (e = b, b = new _.Gf(c, a), _.Pj(b, e));
        e = !0;
        if (d)
            for (var f = d.length - 1; !b.j && 0 <= f; f--) {
                var g = b.currentTarget = d[f];
                e = GJ(g, c, !0, b) && e
            }
        b.j || (g = b.currentTarget = a, e = GJ(g, c, !0, b) && e, b.j || (e = GJ(g, c, !1, b) && e));
        if (d)
            for (f = 0; !b.j && f < d.length; f++) g = b.currentTarget = d[f], e = GJ(g, c, !1, b) && e
    };
    IJ = function(a) {
        a.style.textAlign = _.hs.j ? "right" : "left"
    };
    JJ = function(a, b, c) {
        for (var d = _.Ja(a) ? a.split("") : a, e = a.length - 1; 0 <= e; --e) e in d && b.call(c, d[e], e, a)
    };
    KJ = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    LJ = function(a) {
        var b = _.Ja(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(c, d, e) {
            return d + e.toUpperCase()
        })
    };
    MJ = function(a) {
        this.j = a || _.y.document || document
    };
    NJ = function(a) {
        a.style.visibility = ""
    };
    _.OJ = function(a, b) {
        1 == _.tm.type ? a.style.styleFloat = b : a.style.cssFloat = b
    };
    PJ = function(a, b) {
        a.style.WebkitBorderRadius = b;
        a.style.borderRadius = b;
        a.style.MozBorderRadius = b
    };
    QJ = function(a, b) {
        a.style.WebkitBorderTopLeftRadius = b;
        a.style.WebkitBorderTopRightRadius = b;
        a.style.borderTopLeftRadius = b;
        a.style.borderTopRightRadius = b;
        a.style.MozBorderTopLeftRadius = b;
        a.style.MozBorderTopRightRadius = b
    };
    RJ = function(a, b) {
        a.style.WebkitBorderBottomLeftRadius = b;
        a.style.WebkitBorderBottomRightRadius = b;
        a.style.borderBottomLeftRadius = b;
        a.style.borderBottomRightRadius = b;
        a.style.MozBorderBottomLeftRadius = b;
        a.style.MozBorderBottomRightRadius = b
    };
    SJ = function(a) {
        var b = _.V(2);
        a.style.WebkitBorderBottomLeftRadius = b;
        a.style.WebkitBorderTopLeftRadius = b;
        a.style.borderBottomLeftRadius = b;
        a.style.borderTopLeftRadius = b;
        a.style.MozBorderBottomLeftRadius = b;
        a.style.MozBorderTopLeftRadius = b
    };
    TJ = function(a) {
        var b = _.V(2);
        a.style.WebkitBorderBottomRightRadius = b;
        a.style.WebkitBorderTopRightRadius = b;
        a.style.borderBottomRightRadius = b;
        a.style.borderTopRightRadius = b;
        a.style.MozBorderBottomRightRadius = b;
        a.style.MozBorderTopRightRadius = b
    };
    UJ = function(a, b) {
        b = b || {};
        var c = a.style;
        c.color = "black";
        c.fontFamily = "Roboto,Arial,sans-serif";
        _.Jm(a);
        _.Im(a);
        b.title && a.setAttribute("title", b.title);
        c = _.vm() ? 1.38 : 1;
        a = a.style;
        a.fontSize = _.V(b.fontSize || 11);
        a.backgroundColor = "#fff";
        for (var d = [], e = 0, f = _.L(b.padding); e < f; ++e) d.push(_.V(c * b.padding[e]));
        a.padding = d.join(" ");
        b.width && (a.width = _.V(c * b.width))
    };
    WJ = function(a, b) {
        var c = VJ[b];
        if (!c) {
            var d = KJ(b);
            c = d;
            void 0 === a.style[d] && (d = (_.If ? "Webkit" : _.Hf ? "Moz" : _.hi ? "ms" : _.gi ? "O" : null) + LJ(d), void 0 !== a.style[d] && (c = d));
            VJ[b] = c
        }
        return c
    };
    XJ = function(a, b, c) {
        if (_.Ja(b))(b = WJ(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = WJ(c, d);
                f && (c.style[f] = e)
            }
    };
    YJ = function(a, b, c) {
        if (b instanceof _.Qk) {
            var d = b.x;
            b = b.y
        } else d = b, b = c;
        a.style.left = _.hx(d, !1);
        a.style.top = _.hx(b, !1)
    };
    ZJ = _.na("j");
    $J = function(a) {
        return 40 < a ? a / 2 - 2 : 28 > a ? a - 10 : 18
    };
    aK = function(a, b) {
        a.j = a.j || [];
        var c = a.j[b] = a.j[b] || {},
            d = _.rI(a, b);
        if (!c.ib) {
            a.m = a.m || new _.P(0, 0);
            var e = a.j[0] && a.j[0].ib || new _.P(0, 0);
            c.ib = new _.P(e.x + a.m.x * b, e.y + a.m.y * b)
        }
        return {
            url: d,
            size: c.Oa || a.Oa,
            scaledSize: a.l.size,
            origin: c.ib,
            anchor: c.anchor || a.anchor
        }
    };
    bK = function(a, b, c, d, e, f, g) {
        this.label = a || "";
        this.alt = b || "";
        this.A = f || null;
        this.ub = c;
        this.j = d;
        this.m = e;
        this.l = g || null
    };
    eK = function(a, b) {
        var c = this;
        this.D = a;
        b = b || ["roadmap", "satellite", "hybrid", "terrain"];
        var d = _.Jj(b, "terrain") && _.Jj(b, "roadmap"),
            e = _.Jj(b, "hybrid") && _.Jj(b, "satellite");
        this.m = {};
        this.A = [];
        this.l = this.B = this.j = null;
        _.S.addListener(this, "maptypeid_changed", function() {
            var k = c.get("mapTypeId");
            c.l && c.l.set("display", "satellite" == k);
            c.j && c.j.set("display", "roadmap" == k)
        });
        _.S.addListener(this, "zoom_changed", function() {
            if (c.j) {
                var k = c.get("zoom");
                c.j.set("enabled", k <= c.B)
            }
        });
        b = _.Ca(b);
        for (var f = b.next(); !f.done; f =
            b.next())
            if (f = f.value, "hybrid" != f || !e)
                if ("terrain" != f || !d) {
                    var g = a.get(f);
                    if (g) {
                        var h = null;
                        "roadmap" == f ? d && (this.j = cK(this, "terrain", "roadmap", "terrain", void 0, "Zoom out to show street map with terrain"), h = [
                            [this.j]
                        ], this.B = a.get("terrain").maxZoom) : "satellite" != f && "hybrid" != f || !e || (this.l = dK(this), h = [
                            [this.l]
                        ]);
                        this.A.push(new bK(g.name, g.alt, "mapTypeId", f, null, null, h))
                    }
                }
    };
    dK = function(a) {
        a = cK(a, "hybrid", "satellite", "labels", "Labels");
        a.set("enabled", !0);
        return a
    };
    cK = function(a, b, c, d, e, f) {
        var g = a.D.get(b);
        e = new bK(e || g.name, g.alt, d, !0, !1, f);
        a.m[b] = {
            mapTypeId: c,
            Jd: d,
            value: !0
        };
        a.m[c] = {
            mapTypeId: c,
            Jd: d,
            value: !1
        };
        return e
    };
    fK = _.na("l");
    gK = function(a, b, c) {
        if (!a || !b || !_.Ka(c)) return null;
        c = Math.pow(2, -c);
        var d = a.fromLatLngToPoint(b);
        return _.Ev(a.fromPointToLatLng(new _.P(d.x + c, d.y)), b)
    };
    hK = function(a) {
        _.Ff.call(this);
        this.l = a;
        this.j = {}
    };
    jK = function(a, b, c) {
        iK(a, b, "finish", c, void 0)
    };
    iK = function(a, b, c, d, e, f) {
        if (_.Sa(c))
            for (var g = 0; g < c.length; g++) iK(a, b, c[g], d, e, f);
        else(b = _.Rf(b, c, d || a.handleEvent, e, f || a.l || a)) && (a.j[b.key] = b)
    };
    kK = function(a) {
        _.Mj(a.j, function(b, c) {
            this.j.hasOwnProperty(c) && _.eg(b)
        }, a);
        a.j = {}
    };
    nK = function(a) {
        a = _.Ya(a);
        delete lK[a];
        _.lb(lK) && mK && mK.stop()
    };
    pK = function() {
        mK || (mK = new _.lg(function() {
            oK()
        }, 20));
        var a = mK;
        0 != a.Wb || a.start()
    };
    oK = function() {
        var a = _.bb();
        _.Mj(lK, function(b) {
            qK(b, a)
        });
        _.lb(lK) || pK()
    };
    rK = function() {
        _.jg.call(this);
        this.l = 0;
        this.endTime = this.m = null
    };
    sK = function(a, b, c, d) {
        rK.call(this);
        if (!_.Sa(a) || !_.Sa(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.B = a;
        this.fa = b;
        this.duration = c;
        this.J = d;
        this.coords = [];
        this.progress = 0
    };
    tK = function(a) {
        if (0 == a.l) a.progress = 0, a.coords = a.B;
        else if (1 == a.l) return;
        nK(a);
        var b = _.bb();
        a.m = b; - 1 == a.l && (a.m -= a.duration * a.progress);
        a.endTime = a.m + a.duration;
        a.progress || a.j("begin");
        a.j("play"); - 1 == a.l && a.j("resume");
        a.l = 1;
        var c = _.Ya(a);
        c in lK || (lK[c] = a);
        pK();
        qK(a, b)
    };
    qK = function(a, b) {
        b < a.m && (a.endTime = b + a.endTime - a.m, a.m = b);
        a.progress = (b - a.m) / (a.endTime - a.m);
        1 < a.progress && (a.progress = 1);
        uK(a, a.progress);
        1 == a.progress ? (a.l = 0, nK(a), a.j("finish"), a.j("end")) : 1 == a.l && a.j("animate")
    };
    uK = function(a, b) {
        _.Ua(a.J) && (b = a.J(b));
        a.coords = Array(a.B.length);
        for (var c = 0; c < a.B.length; c++) a.coords[c] = (a.fa[c] - a.B[c]) * b + a.B[c]
    };
    vK = function(a, b) {
        _.Gf.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.progress = b.progress;
        this.state = b.l
    };
    wK = function(a) {
        return 3 * a * a - 2 * a * a * a
    };
    xK = _.qa(".gm-control-active>img{box-sizing:content-box;display:none;left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%)}.gm-control-active>img:nth-child(1){display:block}.gm-control-active:hover>img:nth-child(1),.gm-control-active:active>img:nth-child(1){display:none}.gm-control-active:hover>img:nth-child(2),.gm-control-active:active>img:nth-child(3){display:block}\n");
    AK = function(a) {
        _.PB.call(this, a, yK);
        _.PA(a, yK) || _.OA(a, yK, {
            options: 0
        }, ["div", , 1, 0, [" ", ["img", 8, 1, 1], " ", ["button", , 1, 2, [" ", ["img", 8, 1, 3], " ", ["img", 8, 1, 4], " ", ["img", 8, 1, 5], " "]], " ", ["button", , , 12, [" ", ["img", 8, 1, 6], " ", ["img", 8, 1, 7], " ", ["img", 8, 1, 8], " "]], " ", ["button", , , 13, [" ", ["img", 8, 1, 9], " ", ["img", 8, 1, 10], " ", ["img", 8, 1, 11], " "]], " <div> ", ["div", , , 14, " Rotate the view "], " ", ["div", , , 15], " ", ["div", , , 16], " </div> "]], [], zK())
    };
    BK = function(a) {
        return _.Z(a.options, "", -7, -3)
    };
    CK = function(a) {
        return _.Z(a.options, "", -8, -3)
    };
    DK = function(a) {
        return _.Z(a.options, "", -9, -3)
    };
    zK = function() {
        return [
            ["$t", "t-avKK8hDgg9Q", "$a", [7, , , , , "gm-compass"]],
            ["$a", [8, , , , function(a) {
                return _.Z(a.options, "", -3, -3)
            }, "src", , , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "48", "width", , 1]],
            ["$a", [7, , , , , "gm-control-active", , 1], "$a", [7, , , , , "gm-compass-needle", , 1], "$a", [5, 5, , , function(a) {
                return a.oa ? _.pz("-webkit-transform", "rotate(" + String(_.Z(a.options, 0, -1)) + "deg)") : "rotate(" + String(_.Z(a.options, 0, -1)) + "deg)"
            }, "-webkit-transform", , , 1], "$a", [5, 5, , , function(a) {
                return a.oa ? _.pz("-ms-transform",
                    "rotate(" + String(_.Z(a.options, 0, -1)) + "deg)") : "rotate(" + String(_.Z(a.options, 0, -1)) + "deg)"
            }, "-ms-transform", , , 1], "$a", [5, 5, , , function(a) {
                return a.oa ? _.pz("-moz-transform", "rotate(" + String(_.Z(a.options, 0, -1)) + "deg)") : "rotate(" + String(_.Z(a.options, 0, -1)) + "deg)"
            }, "-moz-transform", , , 1], "$a", [5, 5, , , function(a) {
                return a.oa ? _.pz("transform", "rotate(" + String(_.Z(a.options, 0, -1)) + "deg)") : "rotate(" + String(_.Z(a.options, 0, -1)) + "deg)"
            }, "transform", , , 1], "$a", [0, , , , "button", "type", , 1], "$a", [22, , , , "compass.north",
                "jsaction", , 1
            ]],
            ["$a", [8, , , , function(a) {
                return _.Z(a.options, "", -4, -3)
            }, "src", , , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "20", "width", , 1]],
            ["$a", [8, , , , function(a) {
                return _.Z(a.options, "", -5, -3)
            }, "src", , , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "20", "width", , 1]],
            ["$a", [8, , , , function(a) {
                return _.Z(a.options, "", -6, -3)
            }, "src", , , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "20", "width", , 1]],
            ["$a", [8, , , , BK, "src", , , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , CK, "src", , , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , DK, "src", , , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , BK, "src", , , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , CK, "src", , , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , DK, "src", , , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [7, , , , , "gm-control-active", , 1], "$a", [7, , , , , "gm-compass-turn", , 1], "$a", [0, , , , "button", "type", , 1], "$a", [22, , , , "compass.counterclockwise", "jsaction", , 1]],
            ["$a", [7, , , , , "gm-control-active", , 1], "$a", [7, , , , , "gm-compass-turn", , 1], "$a", [7, , , , , "gm-compass-turn-opposite", , 1], "$a", [0, , , , "button", "type", , 1], "$a", [22, , , , "compass.clockwise", "jsaction", , 1]],
            ["$a", [7, , , , , "gm-compass-tooltip-text", , 1]],
            ["$a", [7, , , , , "gm-compass-arrow-right", , 1], "$a", [7, , , , , "gm-compass-arrow-right-outer", , 1]],
            ["$a", [7, , , , , "gm-compass-arrow-right", , 1], "$a", [7, , , , , "gm-compass-arrow-right-inner", , 1]]
        ]
    };
    EK = function(a) {
        _.G(this, a, 9)
    };
    HK = function(a, b, c) {
        var d = this;
        this.l = a;
        b /= 40;
        a.$.style.transform = "scale(" + b + ")";
        a.$.style.transformOrigin = "left";
        a.$.setAttribute("controlWidth", Math.round(48 * b));
        a.$.setAttribute("controlHeight", Math.round(48 * b));
        a.addListener("compass.clockwise", "click", function() {
            return FK(d, !0)
        });
        a.addListener("compass.counterclockwise", "click", function() {
            return FK(d, !1)
        });
        a.addListener("compass.north", "click", function() {
            var e = d.get("pov");
            if (e) {
                var f = _.hw(e.heading);
                GK(d, f, 180 > f ? 0 : 360, e.pitch, 0)
            }
        });
        this.j = null;
        this.m = !1;
        _.Hk(xK, c)
    };
    IK = function(a) {
        var b = a.get("mapSize"),
            c = a.get("panControl"),
            d = !!a.get("disableDefaultUI");
        _.$w(a.l.$, !!(c || !_.t(c) && !d && b && 200 <= b.width && 200 <= b.height));
        _.S.trigger(a.l.$, "resize")
    };
    FK = function(a, b) {
        var c = a.get("pov");
        if (c) {
            var d = _.hw(c.heading);
            GK(a, d, b ? 90 * Math.floor((d + 100) / 90) : 90 * Math.ceil((d - 100) / 90), c.pitch, c.pitch)
        }
    };
    GK = function(a, b, c, d, e) {
        var f = new hK;
        a.j && a.j.stop();
        b = a.j = new sK([b, d], [c, e], 1200, wK);
        f.listen(b, "animate", function(g) {
            return JK(a, !1, g)
        });
        jK(f, b, function(g) {
            return JK(a, !0, g)
        });
        tK(b)
    };
    JK = function(a, b, c) {
        a.m = !0;
        var d = a.get("pov");
        d && (a.set("pov", {
            heading: c.coords[0],
            pitch: c.coords[1],
            zoom: d.zoom
        }), a.m = !1, b && (a.j = null))
    };
    LK = function(a) {
        var b = void 0 === b ? document : b;
        return KK(a, b)
    };
    KK = function(a, b) {
        return (b = b && (b.fullscreenElement || b.webkitFullscreenElement || b.mozFullScreenElement || b.msFullscreenElement)) ? b === a ? !0 : KK(a, b.shadowRoot) : !1
    };
    MK = function(a, b, c, d) {
        a.innerText = "";
        b = _.Ca(b ? 1 == c ? ['<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#666" d="M4,4H0v2h6V0H4V4z M14,4V0h-2v6h6V4H14z M12,18h2v-4h4v-2h-6V18z M0,14h4v4h2v-6H0V14z"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#B1B1B1" d="M4,4H0v2h6V0H4V4z M14,4V0h-2v6h6V4H14z M12,18h2v-4h4v-2h-6V18z M0,14h4v4h2v-6H0V14z"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#E4E4E4" d="M4,4H0v2h6V0H4V4z M14,4V0h-2v6h6V4H14z M12,18h2v-4h4v-2h-6V18z M0,14h4v4h2v-6H0V14z"/>\n</svg>\n'] : ['<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#666" d="M4,4H0v2h6V0H4V4z M14,4V0h-2v6h6V4H14z M12,18h2v-4h4v-2h-6V18z M0,14h4v4h2v-6H0V14z"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#333" d="M4,4H0v2h6V0H4V4z M14,4V0h-2v6h6V4H14z M12,18h2v-4h4v-2h-6V18z M0,14h4v4h2v-6H0V14z"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#111" d="M4,4H0v2h6V0H4V4z M14,4V0h-2v6h6V4H14z M12,18h2v-4h4v-2h-6V18z M0,14h4v4h2v-6H0V14z"/>\n</svg>\n'] :
            1 == c ? ['<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 018 18">\n  <path fill="#666" d="M0,0v2v4h2V2h4V0H2H0z M16,0h-4v2h4v4h2V2V0H16z M16,16h-4v2h4h2v-2v-4h-2V16z M2,12H0v4v2h2h4v-2H2V12z"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#B1B1B1" d="M0,0v2v4h2V2h4V0H2H0z M16,0h-4v2h4v4h2V2V0H16z M16,16h-4v2h4h2v-2v-4h-2V16z M2,12H0v4v2h2h4v-2H2V12z"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#E4E4E4" d="M0,0v2v4h2V2h4V0H2H0z M16,0h-4v2h4v4h2V2V0H16z M16,16h-4v2h4h2v-2v-4h-2V16z M2,12H0v4v2h2h4v-2H2V12z"/>\n</svg>\n'] : ['<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 018 18">\n  <path fill="#666" d="M0,0v2v4h2V2h4V0H2H0z M16,0h-4v2h4v4h2V2V0H16z M16,16h-4v2h4h2v-2v-4h-2V16z M2,12H0v4v2h2h4v-2H2V12z"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#333" d="M0,0v2v4h2V2h4V0H2H0z M16,0h-4v2h4v4h2V2V0H16z M16,16h-4v2h4h2v-2v-4h-2V16z M2,12H0v4v2h2h4v-2H2V12z"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#111" d="M0,0v2v4h2V2h4V0H2H0z M16,0h-4v2h4v4h2V2V0H16z M16,16h-4v2h4h2v-2v-4h-2V16z M2,12H0v4v2h2h4v-2H2V12z"/>\n</svg>\n']);
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var e = document.createElement("img");
            e.style.width = e.style.height = _.V($J(d));
            e.src = _.UB(c);
            a.appendChild(e)
        }
    };
    QK = function(a, b, c, d) {
        var e = this;
        this.m = a;
        this.D = d;
        this.l = b;
        b.style.cursor = "pointer";
        this.F = c;
        this.j = LK(this.m);
        this.F.set(this.j);
        this.A = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
        this.B = [];
        this.A && (_.Hk(xK, a), b.setAttribute("class", "gm-control-active gm-fullscreen-control"), PJ(b, _.V(_.oI(d))), b.style.width = b.style.height = _.V(d), _.gx(b, "0 1px 4px -1px rgba(0,0,0,0.3)"), a = this.get("controlStyle") || 0, MK(b, this.j, a, d), b.style.overflow =
            "hidden", _.S.addDomListener(b, "click", function() {
                if (e.j)
                    for (var f = _.Ca(["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"]), g = f.next(); !g.done; g = f.next()) {
                        if (g = g.value, g in document) {
                            document[g]();
                            break
                        }
                    } else
                        for (f = _.Ca(["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"]), g = f.next(); !g.done; g = f.next())
                            if (g = g.value, g in e.m) {
                                e.m[g]();
                                break
                            }
            }), this.B = [_.S.addDomListener(document, "fullscreenchange", function() {
                return NK(e)
            }), _.S.addDomListener(document,
                "webkitfullscreenchange",
                function() {
                    return NK(e)
                }), _.S.addDomListener(document, "mozfullscreenchange", function() {
                return NK(e)
            }), _.S.addDomListener(document, "MSFullscreenChange", function() {
                return NK(e)
            })]);
        _.S.addListener(this, "disabledefaultui_changed", function() {
            return OK(e)
        });
        _.S.addListener(this, "display_changed", function() {
            return OK(e)
        });
        _.S.addListener(this, "maptypeid_changed", function() {
            var f = "streetview" == e.get("mapTypeId") ? 1 : 0;
            e.set("controlStyle", f);
            e.l.style.margin = _.V(e.D >> 2);
            OK(e)
        });
        _.S.addListener(this,
            "controlstyle_changed",
            function() {
                var f = e.get("controlStyle");
                null != f && (e.l.style.backgroundColor = PK[f].backgroundColor, e.A && MK(e.l, e.j, f, e.D))
            });
        OK(this)
    };
    NK = function(a) {
        _.S.trigger(a.m, "resize");
        a.j = LK(a.m);
        a.F.set(a.j);
        var b = a.get("controlStyle") || 0;
        a.A && MK(a.l, a.j, b, a.D)
    };
    OK = function(a) {
        var b = a.get("display"),
            c = !!a.get("disableDefaultUI");
        _.Ww(a.l, (!_.t(b) && !c || !!b) && a.A);
        _.S.trigger(a.l, "resize")
    };
    RK = function(a, b, c) {
        this.j = a;
        this.l = [];
        this.B = c || 0;
        this.A = (0, _.z)(3 == b || 12 == b || 6 == b || 9 == b ? JJ : _.C, this, this.l);
        a.setAttribute("controlWidth", 0);
        a.setAttribute("controlHeight", 0)
    };
    SK = function(a, b) {
        var c = document.createElement("div");
        c.className = "infomsg";
        a.appendChild(c);
        var d = c.style;
        d.background = "#F9EDBE";
        d.border = "1px solid #F0C36D";
        d.borderRadius = "2px";
        d.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
        d.fontFamily = "Roboto,Arial,sans-serif";
        d.fontSize = "12px";
        d.fontWeight = "400";
        d.left = "10%";
        d.j = "2px";
        d.padding = "5px 14px";
        d.position = "absolute";
        d.textAlign = "center";
        d.top = "10px";
        d.webkitBorderRadius = "2px";
        d.width = "80%";
        d.zIndex = 24601;
        c.innerText = "You are using a browser that is not supported by the Google Maps JavaScript API. Consider changing your browser.";
        d = document.createElement("a");
        b && (c.appendChild(d), d.innerText = "Learn more", d.href = b, d.target = "_blank");
        b = document.createElement("a");
        c.appendChild(b);
        b.innerText = "Dismiss";
        b.target = "_blank";
        d.style.paddingLeft = b.style.paddingLeft = "0.8em";
        d.style.color = b.style.color = "black";
        d.style.cursor = b.style.cursor = "pointer";
        d.style.textDecoration = b.style.textDecoration = "underline";
        b.onmouseup = function() {
            a.removeChild(c)
        }
    };
    TK = function(a) {
        this.j = a.replace("www.google", "maps.google")
    };
    UK = function(a) {
        a.style.marginLeft = _.V(5);
        a.style.marginRight = _.V(5);
        _.Fm(a, 1E6);
        this.m = a;
        a = this.l = _.W("a", a);
        var b = a.style;
        b.position = "static";
        b.overflow = "visible";
        _.OJ(a, "none");
        a.style.display = "inline";
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
        b = _.W("div");
        var c = new _.Q(66, 26);
        _.Bg(b, c);
        a.appendChild(b);
        this.j = _.rC(null, b, _.Ni, c);
        _.Jm(b);
        _.ax(b, "pointer")
    };
    VK = function(a, b) {
        a = a.j;
        _.pC(a, b ? _.Qm("api-3/images/google_white5", !0) : _.Qm("api-3/images/google4", !0), a.m)
    };
    XK = function(a, b, c) {
        function d() {
            var g = f.get("hasCustomStyles"),
                h = a.getMapTypeId();
            VK(e, g || "satellite" == h || "hybrid" == h)
        }
        var e = WK(a, b, c),
            f = a.__gm;
        _.S.addListener(f, "hascustomstyles_changed", d);
        _.S.addListener(a, "maptypeid_changed", d);
        d();
        return e
    };
    YK = function(a, b, c) {
        a = WK(a, b, c);
        VK(a, !0);
        return a
    };
    WK = function(a, b, c) {
        function d() {
            var g = c && a.get("passiveLogo");
            f.setUrl(g ? null : b.get("url"))
        }
        var e = _.W("div"),
            f = new UK(e);
        _.S.addListener(a, "passivelogo_changed", d);
        _.S.addListener(b, "url_changed", d);
        d();
        return f
    };
    ZK = function(a, b, c, d) {
        function e() {
            0 != f.get("enabled") && (null != d && f.get("active") ? f.set("value", d) : f.set("value", c))
        }
        var f = this;
        _.S.addListener(this, "value_changed", function() {
            f.set("active", f.get("value") == c)
        });
        new _.An(a, b, e);
        "click" == b && "button" != a.tagName.toLowerCase() && new _.An(a, "keydown", function(g) {
            "Enter" == g.key && e()
        });
        _.S.addListener(this, "display_changed", function() {
            _.Ww(a, 0 != f.get("display"))
        })
    };
    $K = function(a, b, c, d) {
        return new ZK(a, b, c, d)
    };
    bL = function(a, b, c, d, e) {
        var f = this;
        this.j = document.createElement("div");
        a.appendChild(this.j);
        this.j.setAttribute("role", "button");
        this.j.setAttribute("tabindex", 0);
        this.j.setAttribute("title", d.title);
        this.j.setAttribute("aria-label", d.title);
        this.j.setAttribute("aria-pressed", !1);
        _.JC(this.j);
        _.Hv(this.j);
        this.l = this.j.style;
        this.l.overflow = "hidden";
        d.Bf ? IJ(this.j) : this.l.textAlign = "center";
        d.height && (this.l.height = _.V(d.height), this.l.display = "table-cell", this.l.verticalAlign = "middle");
        this.l.position =
            "relative";
        UJ(this.j, d);
        d.Fe && SJ(this.j);
        d.eg && TJ(this.j);
        this.j.style.webkitBackgroundClip = "padding-box";
        this.j.style.backgroundClip = "padding-box";
        this.j.style.MozBackgroundClip = "padding";
        this.A = d.Gg || !1;
        this.B = d.Fe || !1;
        _.gx(this.j, "0 1px 4px -1px rgba(0,0,0,0.3)");
        this.j.appendChild(b);
        d.yk ? (a = _.rC(_.Qm("arrow-down"), this.j), _.Am(a, new _.P(6, 0), !_.hs.j), a.style.top = "50%", a.style.marginTop = _.V(-2), this.set("active", !1)) : (a = e(this.j, "click", c), a.bindTo("value", this), this.bindTo("active", a), a.bindTo("enabled",
            this));
        d.Gg && (this.l.fontWeight = "500");
        this.m = _.Uk(this.l.paddingLeft) || 0;
        d.Bf || (this.l.fontWeight = "500", d = this.j.offsetWidth - this.m - (_.Uk(this.l.paddingRight) || 0), this.l.fontWeight = "", _.M(d) && 0 <= d && (this.l.minWidth = _.V(d)));
        new _.An(this.j, "mousedown", function(g) {
            0 != f.get("enabled") && _.S.trigger(f, "mousedown", g)
        });
        new _.An(this.j, "mouseover", function() {
            return aL(f, !0)
        });
        new _.An(this.j, "mouseout", function() {
            return aL(f, !1)
        });
        _.S.addListener(this, "enabled_changed", function() {
            return aL(f, !1)
        });
        _.S.addListener(this,
            "active_changed",
            function() {
                return aL(f, !1)
            })
    };
    aL = function(a, b) {
        var c = !!a.get("active") || a.A;
        0 == a.get("enabled") ? (a.l.color = "gray", b = c = !1) : (a.l.color = c || b ? "#000" : "#565656", a.j.setAttribute("aria-pressed", c));
        a.B || (a.l.borderLeft = "0");
        _.M(a.m) && (a.l.paddingLeft = _.V(a.m));
        a.l.fontWeight = c ? "500" : "";
        a.l.backgroundColor = b ? "#ebebeb" : "#fff"
    };
    _.cL = function(a, b, c, d) {
        return new bL(a, b, c, d, $K)
    };
    fL = function(a, b, c, d, e) {
        a = this.A = _.W("div", a);
        UJ(a, e);
        e = _.hs.j;
        _.Hv(a);
        IJ(a);
        var f = this.j = _.W("span", a);
        f.setAttribute("role", "checkbox");
        this.l = new Image;
        this.m = new Image;
        var g = this.l,
            h = this.m;
        g.src = _.UB('<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>\n</svg>\n');
        f.appendChild(g);
        h.src = _.UB('<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">\n    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>\n');
        f.appendChild(h);
        h.style.height = g.style.height = "1em";
        h.style.width = g.style.width = "1em";
        h.style.transform = g.style.transform = "translateY(0.15em)";
        g = _.W("label", a);
        g.innerHTML = b;
        f.style.verticalAlign = g.style.verticalAlign =
            "middle";
        _.ax(g, "pointer");
        a.style.backgroundColor = "#fff";
        a.style.whiteSpace = "nowrap";
        a.style[e ? "paddingLeft" : "paddingRight"] = _.V(8);
        var k = this;
        _.S.ma(k, "active_changed", function() {
            f.checked = !!k.get("active");
            dL(k)
        });
        _.S.addDomListener(a, "mouseover", function() {
            eL(k, !0)
        });
        _.S.addDomListener(a, "mouseout", function() {
            eL(k, !1)
        });
        b = $K(a, "click", c, d);
        b.bindTo("value", this);
        b.bindTo("display", this);
        this.bindTo("active", b)
    };
    eL = function(a, b) {
        a.A.style.backgroundColor = b ? "#ebebeb" : "#fff";
        dL(a)
    };
    dL = function(a) {
        var b = a.j.checked;
        _.Ww(a.l, b);
        _.Ww(a.m, !b)
    };
    gL = function(a, b, c, d) {
        var e = _.W("div", a);
        UJ(e, d);
        _.Bm(b, e);
        e.style.backgroundColor = "#fff";
        _.S.bind(this, "active_changed", this, function() {
            e.style.fontWeight = this.get("active") ? "500" : ""
        });
        _.S.bind(this, "enabled_changed", this, function() {
            var f = 0 != this.get("enabled");
            e.style.color = f ? "black" : "gray";
            (f = f ? d.title : d.Jj) && e.setAttribute("title", f)
        });
        a = $K(e, "mouseup", c);
        a.bindTo("value", this);
        a.bindTo("display", this);
        a.bindTo("enabled", this);
        this.bindTo("active", a);
        _.S.qa(e, "mouseover", this, function() {
            0 != this.get("enabled") &&
                (e.style.backgroundColor = "#ebebeb", e.style.color = "#000")
        });
        _.S.addDomListener(e, "mouseout", function() {
            e.style.backgroundColor = "#fff";
            e.style.color = "#565656"
        })
    };
    hL = function(a) {
        var b = _.W("div", a);
        b.style.margin = "1px 0";
        b.style.borderTop = "1px solid #ebebeb";
        _.S.bind(this, "display_changed", this, function() {
            _.Ww(b, 0 != this.get("display"))
        })
    };
    jL = function(a, b, c, d, e) {
        this.m = b;
        e = e || {};
        b = this.j = _.W("div", b);
        b.style.backgroundColor = "white";
        _.Fm(b, -1);
        b.style.padding = _.V(2);
        RJ(b, _.V(_.oI(d)));
        _.gx(b, "0 1px 4px -1px rgba(0,0,0,0.3)");
        e.position ? _.Am(b, e.position, e.j) : (b.style.position = "absolute", b.style.top = "100%", b.style.left = "0", b.style.right = "0");
        IJ(b);
        for (_.Xw(b); _.L(c);) {
            e = c.shift();
            for (var f = 0; f < _.L(e); ++f) {
                var g = e[f],
                    h, k = {
                        title: g.alt,
                        Jj: g.A || void 0,
                        fontSize: $J(d),
                        padding: [1 + d >> 3]
                    };
                null != g.m ? h = new fL(b, g.label, g.j, g.m, k) : h = new gL(b, g.label,
                    g.j, k);
                h.bindTo("value", a, g.ub);
                h.bindTo("display", g);
                h.bindTo("enabled", g)
            }
            var l = [];
            _.C(c, function(m) {
                l = l.concat(m)
            });
            l.length && (f = new hL(b), iL(f, e, l))
        }
    };
    iL = function(a, b, c) {
        function d() {
            function e(f) {
                for (var g = 0; g < _.L(f); ++g)
                    if (0 != f[g].get("display")) return !0;
                return !1
            }
            a.set("display", e(b) && e(c))
        }
        _.C(b.concat(c), function(e) {
            _.S.addListener(e, "display_changed", d)
        })
    };
    kL = function(a) {
        var b = a.j;
        if (!b.listeners) {
            var c = a.m;
            b.listeners = [_.S.addDomListener(c, "mouseout", function() {
                b.timeout = window.setTimeout(function() {
                    a.set("active", !1)
                }, 1E3)
            }), _.S.qa(c, "mouseover", a, a.l), _.S.addDomListener(document.body, "mouseup", function(d) {
                for (d = d.target; d;) {
                    if (d == c) return;
                    d = d.parentNode
                }
                a.set("active", !1)
            })]
        }
        _.Yw(b)
    };
    lL = _.qa(".gm-style .gm-style-mtc label,.gm-style .gm-style-mtc div{font-weight:400}\n");
    oL = function(a, b, c, d) {
        var e = this;
        this.l = a;
        this.m = d;
        this.j = [];
        _.S.addListener(this, "fontloaded_changed", function() {
            if (e.get("fontLoaded")) {
                for (var h = e.j.length, k = 0, l = 0; l < h; ++l) {
                    var m = _.Cg(e.j[l].parentNode),
                        q = l == h - 1;
                    e.j[l].ih && _.Am(e.j[l].ih.j, new _.P(q ? 0 : k, m.height), q);
                    k += m.width
                }
                e.j.length = 0
            }
        });
        _.S.addListener(this, "mapsize_changed", function() {
            return mL(e)
        });
        _.S.addListener(this, "display_changed", function() {
            return mL(e)
        });
        d = b.length;
        for (var f = 0, g = 0; g < d; ++g) f = nL(this, c, b[g], f, 0 == g, g == d - 1);
        _.fx();
        _.ax(a,
            "pointer")
    };
    nL = function(a, b, c, d, e, f) {
        var g = document.createElement("div");
        a.l.appendChild(g);
        _.OJ(g, "left");
        _.Hk(lL, a.l);
        _.nm(g, "gm-style-mtc");
        var h = _.Bm(c.label, a.l, !0);
        b = b(g, h, c.j, {
            title: c.alt,
            padding: [0, 17],
            height: a.m,
            fontSize: $J(a.m),
            Fe: e,
            eg: f
        });
        g.style.position = "relative";
        e = b.Ga();
        new _.An(e, "focusin", function() {
            g.style.zIndex = 1
        });
        new _.An(e, "focusout", function() {
            g.style.zIndex = 0
        });
        c.ub && b.bindTo("value", a, c.ub);
        e = null;
        h = _.Cg(g);
        c.l && (e = new jL(a, g, c.l, a.m, {
            position: new _.P(f ? 0 : d, h.height),
            j: f
        }), pL(g, b, e));
        a.j.push({
            parentNode: g,
            ih: e
        });
        return d += h.width
    };
    mL = function(a) {
        var b = a.get("mapSize");
        b = !!(a.get("display") || b && 200 <= b.width && 200 <= b.height);
        _.Ww(a.l, b);
        _.S.trigger(a.l, "resize")
    };
    pL = function(a, b, c) {
        new _.An(a, "mousedown", function() {
            return c.set("active", !0)
        });
        new _.An(a, "mouseover", function() {
            b.get("active") && c.set("active", !0)
        });
        _.S.addDomListener(b, "active_changed", function() {
            b.get("active") || c.set("active", !1)
        })
    };
    qL = function(a, b, c) {
        var d = this;
        _.fx();
        _.ax(a, "pointer");
        IJ(a);
        a.style.width = _.V(120);
        _.Yn(lL);
        _.nm(a, "gm-style-mtc");
        var e = _.Bm("", a, !0),
            f = _.cL(a, e, null, {
                title: "Change map style",
                yk: !0,
                Bf: !0,
                Gg: !0,
                padding: [8, 17],
                fontSize: 18,
                Fe: !0,
                eg: !0
            }),
            g = {},
            h = [b];
        b = _.Ca(b);
        for (var k = b.next(); !k.done; k = b.next()) k = k.value, "mapTypeId" == k.ub && (g[k.j] = k.label), k.l && h.push.apply(h, _.Da(k.l));
        this.addListener("maptypeid_changed", function() {
            _.Vw(e, g[d.get("mapTypeId")] || "")
        });
        var l = new jL(this, a, h, c);
        f.addListener("mousedown",
            function() {
                l.set("active", !l.get("active"))
            });
        this.j = a
    };
    rL = function(a) {
        var b = a.get("mapSize");
        b = !!(a.get("display") || b && 200 <= b.width && 200 <= b.height);
        _.Ww(a.j, b);
        _.S.trigger(a.j, "resize")
    };
    sL = function(a) {
        this.l = a;
        this.j = !1
    };
    tL = function(a, b, c) {
        a.get(b) !== c && (a.j = !0, a.set(b, c), a.j = !1)
    };
    uL = function(a) {
        var b = a.get("internalMapTypeId");
        _.Jc(a.l, function(c, d) {
            d.mapTypeId == b && d.Jd && a.get(d.Jd) == d.value && (b = c)
        });
        tL(a, "mapTypeId", b)
    };
    vL = function(a, b, c) {
        a.innerText = "";
        b = _.Ca(b ? ['<svg xmlns="http://www.w3.org/2000/svg" width="22px" height="13px" viewBox="0 0 22 13">\n  <path fill="#666" d="M2.75,5H10V0H4.4L2.75,5z M0,13h10V7H2L0,13z M20,7h-8v6h10L20,7z M17.6,0H12v5h7.25L17.6,0z"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="22px" height="13px" viewBox="0 0 22 13">\n  <path fill="#333" d="M2.75,5H10V0H4.4L2.75,5z M0,13h10V7H2L0,13z M20,7h-8v6h10L20,7z M17.6,0H12v5h7.25L17.6,0z"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="22px" height="13px" viewBox="0 0 22 13">\n  <path fill="#111" d="M2.75,5H10V0H4.4L2.75,5z M0,13h10V7H2L0,13z M20,7h-8v6h10L20,7z M17.6,0H12v5h7.25L17.6,0z"/>\n</svg>\n'] : ['<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="16px" viewBox="0 0 18 16">\n  <path fill="#666" d="M0,16h8V9H0V16z M10,16h8V9h-8V16z M0,7h8V0H0V7z M10,0v7h8V0H10z"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="16px" viewBox="0 0 18 16">\n  <path fill="#333" d="M0,16h8V9H0V16z M10,16h8V9h-8V16z M0,7h8V0H0V7z M10,0v7h8V0H10z"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="16px" viewBox="0 0 18 16">\n  <path fill="#111" d="M0,16h8V9H0V16z M10,16h8V9h-8V16z M0,7h8V0H0V7z M10,0v7h8V0H10z"/>\n</svg>\n']);
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            var e = document.createElement("img");
            e.style.width = _.V($J(c));
            e.src = _.UB(d);
            a.appendChild(e)
        }
    };
    xL = function(a, b, c, d) {
        var e = this;
        c = _.vg[43] ? "rgb(34, 34, 34)" : "rgb(255, 255, 255)";
        this.B = b;
        this.j = _.KC("Rotate map 90 degrees");
        this.l = _.KC("Tilt map");
        this.F = a;
        this.A = _.W("div", a);
        this.m = !0;
        _.Hk(xK, d);
        _.Bg(this.j, new _.Q(b, b));
        _.Bg(this.l, new _.Q(b, b));
        this.j.style.left = this.j.style.top = "0";
        this.l.style.left = this.l.style.top = "0";
        this.j.style.backgroundColor = this.l.style.backgroundColor = c;
        this.A.appendChild(this.j);
        this.A.appendChild(this.l);
        a = _.Ca(['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">\n  <path fill="#666" fill-rule="evenodd" d="M20 10c0-5.52-4.48-10-10-10s-10 4.48-10 10v5h5v-5c0-2.76 2.24-5 5-5s5 2.24 5 5v5h-4l6.5 7 6.5-7h-4v-5z" clip-rule="evenodd"/>\n</svg>\n',
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">\n  <path fill="#333" fill-rule="evenodd" d="M20 10c0-5.52-4.48-10-10-10s-10 4.48-10 10v5h5v-5c0-2.76 2.24-5 5-5s5 2.24 5 5v5h-4l6.5 7 6.5-7h-4v-5z" clip-rule="evenodd"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">\n  <path fill="#111" fill-rule="evenodd" d="M20 10c0-5.52-4.48-10-10-10s-10 4.48-10 10v5h5v-5c0-2.76 2.24-5 5-5s5 2.24 5 5v5h-4l6.5 7 6.5-7h-4v-5z" clip-rule="evenodd"/>\n</svg>\n'
        ]);
        for (d = a.next(); !d.done; d = a.next()) d = d.value, c = document.createElement("img"), c.style.width = c.style.height = _.V($J(b)), c.src = _.UB(d), this.j.appendChild(c);
        this.j.style.overflow = "hidden";
        this.j.setAttribute("class", "gm-control-active");
        this.j.style.marginBottom = _.V(12 + (b >> 1));
        vL(this.l, !1, b);
        this.l.style.overflow = "hidden";
        this.l.setAttribute("class", "gm-tilt gm-control-active");
        _.gx(this.j, "0 1px 4px -1px rgba(0,0,0,0.3)");
        _.gx(this.l, "0 1px 4px -1px rgba(0,0,0,0.3)");
        PJ(this.j, _.V(_.oI(b)));
        PJ(this.l,
            _.V(_.oI(b)));
        _.Jm(this.j);
        _.Jm(this.l);
        _.ax(this.j, "pointer");
        _.ax(this.l, "pointer");
        _.S.qa(this.j, "click", this, this.D);
        _.S.qa(this.l, "click", this, this.H);
        _.S.addListener(this, "aerialavailableatzoom_changed", function() {
            return wL(e)
        });
        _.S.addListener(this, "tilt_changed", function() {
            e.m = 0 != e.get("tilt");
            wL(e)
        });
        _.S.addListener(this, "mapsize_changed", function() {
            wL(e)
        });
        _.S.addListener(this, "rotatecontrol_changed", function() {
            wL(e)
        })
    };
    wL = function(a) {
        var b = a.get("mapSize"),
            c = !!a.get("aerialAvailableAtZoom");
        b = !!a.get("rotateControl") || b && 200 <= b.width && 200 <= b.height;
        c = c && b;
        b = a.F;
        vL(a.l, a.m, a.B);
        a.j.style.display = a.m ? "block" : "none";
        var d = a.B,
            e = a.m ? 12 + Math.floor(2.25 * a.B) : a.B;
        a.A.style.width = _.V(d);
        a.A.style.height = _.V(e);
        b.setAttribute("controlWidth", d);
        b.setAttribute("controlHeight", e);
        _.Ww(b, c);
        _.S.trigger(b, "resize")
    };
    yL = function(a, b, c) {
        a = new xL(a, b, {
            cache: !0
        }, c);
        a.bindTo("mapSize", this);
        a.bindTo("rotateControl", this);
        a.bindTo("aerialAvailableAtZoom", this);
        a.bindTo("heading", this);
        a.bindTo("tilt", this)
    };
    zL = function(a, b, c, d) {
        a.innerText = "";
        b = _.Ca(0 == b ? 1 == c ? ['<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <polygon fill="#666" points="18,7 11,7 11,0 7,0 7,7 0,7 0,11 7,11 7,18 11,18 11,11 18,11"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <polygon fill="#B1B1B1" points="18,7 11,7 11,0 7,0 7,7 0,7 0,11 7,11 7,18 11,18 11,11 18,11"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <polygon fill="#E4E4E4" points="18,7 11,7 11,0 7,0 7,7 0,7 0,11 7,11 7,18 11,18 11,11 18,11"/>\n</svg>\n'] : ['<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <polygon fill="#666" points="18,7 11,7 11,0 7,0 7,7 0,7 0,11 7,11 7,18 11,18 11,11 18,11"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <polygon fill="#333" points="18,7 11,7 11,0 7,0 7,7 0,7 0,11 7,11 7,18 11,18 11,11 18,11"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <polygon fill="#111" points="18,7 11,7 11,0 7,0 7,7 0,7 0,11 7,11 7,18 11,18 11,11 18,11"/>\n</svg>\n'] :
            1 == c ? ['<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#666" d="M0,7h18v4H0V7z"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#B1B1B1" d="M0,7h18v4H0V7z"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#E4E4E4" d="M0,7h18v4H0V7z"/>\n</svg>\n'] : ['<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#666" d="M0,7h18v4H0V7z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#333" d="M0,7h18v4H0V7z"/>\n</svg>\n', '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#111" d="M0,7h18v4H0V7z"/>\n</svg>\n'
            ]);
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var e = document.createElement("img");
            e.style.width = e.style.height = _.V($J(d));
            e.src = _.UB(c);
            a.appendChild(e)
        }
    };
    DL = function(a, b, c, d) {
        var e = this;
        this.A = a;
        this.l = b;
        this.j = _.W("div", a);
        _.Jm(this.j);
        _.Im(this.j);
        _.gx(this.j, "0 1px 4px -1px rgba(0,0,0,0.3)");
        PJ(this.j, _.V(_.oI(b)));
        this.j.style.cursor = "pointer";
        _.Hk(xK, d);
        _.S.addDomListener(this.j, "mouseover", function() {
            e.set("mouseover", !0)
        });
        _.S.addDomListener(this.j, "mouseout", function() {
            e.set("mouseover", !1)
        });
        this.B = AL(this, this.j, 0);
        this.m = _.W("div", this.j);
        this.m.style.position = "relative";
        this.m.style.overflow = "hidden";
        this.m.style.width = _.V(3 * b / 4);
        this.m.style.height =
            _.V(1);
        this.m.style.margin = "0 5px";
        this.D = AL(this, this.j, 1);
        _.S.addListener(this, "display_changed", function() {
            return BL(e)
        });
        _.S.addListener(this, "mapsize_changed", function() {
            return BL(e)
        });
        _.S.addListener(this, "maptypeid_changed", function() {
            var f = e.get("mapTypeId");
            e.set("controlStyle", ("satellite" == f || "hybrid" == f) && _.vg[43] || "streetview" == f ? 1 : 0)
        });
        _.S.addListener(this, "controlstyle_changed", function() {
            var f = e.get("controlStyle");
            if (null != f) {
                var g = CL[f];
                zL(e.B, 0, f, e.l);
                zL(e.D, 1, f, e.l);
                e.j.style.backgroundColor =
                    g.backgroundColor;
                e.m.style.backgroundColor = g.fh
            }
        })
    };
    AL = function(a, b, c) {
        var d = _.KC(0 == c ? "Zoom in" : "Zoom out");
        b.appendChild(d);
        _.S.addDomListener(d, "click", function() {
            var e = 0 == c ? 1 : -1;
            a.set("zoom", a.get("zoom") + e)
        });
        d.setAttribute("class", "gm-control-active");
        d.style.overflow = "hidden";
        b = a.get("controlStyle");
        zL(d, c, b, a.l);
        return d
    };
    BL = function(a) {
        var b = a.get("mapSize");
        if (b && 200 <= b.width && 200 <= b.height || a.get("display")) {
            _.Yw(a.A);
            b = a.l;
            var c = 2 * a.l + 1;
            a.j.style.width = _.V(b);
            a.j.style.height = _.V(c);
            a.A.setAttribute("controlWidth", b);
            a.A.setAttribute("controlHeight", c);
            _.S.trigger(a.A, "resize");
            b = a.B.style;
            b.width = _.V(a.l);
            b.height = _.V(a.l);
            b.left = b.top = "0";
            a.m.style.top = "0";
            b = a.D.style;
            b.width = _.V(a.l);
            b.height = _.V(a.l);
            b.left = b.top = "0"
        } else _.Xw(a.A)
    };
    EL = function(a, b, c, d) {
        a = this.j = _.W("div");
        _.ex(a);
        b = new DL(a, b, c, d);
        b.bindTo("mapSize", this);
        b.bindTo("display", this, "display");
        b.bindTo("mapTypeId", this);
        b.bindTo("zoom", this);
        this.Qd = b
    };
    FL = function(a) {
        a.Qd && (a.Qd.unbindAll(), a.Qd = null)
    };
    GL = function(a, b) {
        _.ex(a);
        _.Fm(a, 1000001);
        this.j = a;
        this.l = _.jI(a, b);
        this.m = a = _.W("a", this.l);
        a.style.textDecoration = "none";
        _.ax(a, "pointer");
        _.Cm(a, "Terms of Use");
        FJ(a, _.ms);
        a.target = "_blank";
        a.setAttribute("rel", "noopener");
        a.style.color = "#444";
        this.Of()
    };
    HL = function(a, b) {
        var c = a.F;
        if (c) b(c);
        else {
            var d = d ? Math.min(d, screen.width) : screen.width;
            var e = _.W("div", document.body, new _.P(-screen.width, -screen.height), new _.Q(d, screen.height));
            e.style.visibility = "hidden";
            a.B ? a.B++ : (a.B = 1, _.W("div", e, _.Ni).appendChild(a));
            window.setTimeout(function() {
                c = a.F;
                if (!c) {
                    var f = a.parentNode,
                        g = a.offsetWidth,
                        h = a.offsetHeight;
                    if (1 == _.tm.type && 9 == document.documentMode || 4 == _.tm.j) ++g, ++h;
                    c = new _.Q(Math.min(d, g), Math.min(screen.height, h));
                    for (a.F = c; f.firstChild;) f.removeChild(f.firstChild);
                    _.Kl(f)
                }
                a.B--;
                a.B || (a.F = null);
                _.Kl(e);
                e = null;
                b(c)
            }, 0)
        }
    };
    KL = function(a, b) {
        _.ex(a);
        _.Fm(a, 1000001);
        this.j = a;
        var c = _.W("div", a);
        a = _.jI(c, b);
        this.D = c;
        this.B = _.jI(_.W("div"), b);
        b = _.W("a", a);
        _.Cm(b, "Map Data");
        b.style.textDecoration = "none";
        _.ax(b, "pointer");
        _.S.Tc(b, "click", this);
        this.m = b;
        this.l = _.W("span", a);
        this.A = IL(this);
        JL(this)
    };
    JL = function(a) {
        var b = a.get("size");
        b && HL(a.B, (0, _.z)(function(c) {
            var d = LL(this);
            _.Iw(this.l, d);
            c = c.width > b.width - this.A;
            var e = !this.get("hide");
            _.Ww(this.j, e && !!d);
            _.Ww(this.m, !(!d || !c));
            _.Ww(this.l, !(!d || c));
            this.j.style.width = _.V(12 + _.Cg(this.l).width + _.Cg(this.m).width);
            _.S.trigger(this.j, "resize")
        }, a))
    };
    LL = function(a) {
        return a.get("attributionText") || "Image may be subject to copyright"
    };
    IL = function(a) {
        var b = a.get("rmiWidth") || 0,
            c = a.get("tosWidth") || 0;
        a = a.get("scaleWidth") || 0;
        return b + c + a
    };
    QL = function(a) {
        var b = this;
        this.j = ML(a);
        NL(this.j);
        this.l = OL(this.j);
        _.VC(this.j, function() {
            _.Xw(b.j)
        });
        PL(this)
    };
    ML = function(a) {
        a = _.W("div", a);
        a.style.backgroundColor = "white";
        a.style.padding = _.V(15) + " " + _.V(21);
        a.style.border = _.V(1) + " solid #ababab";
        a.style.fontFamily = "Roboto,Arial,sans-serif";
        a.style.color = "#222";
        a.style.boxSizing = "border-box";
        _.gx(a, "0 4px 16px rgba(0,0,0,0.2)");
        _.Fm(a, 10000002);
        return a
    };
    NL = function(a) {
        a = _.W("div", a);
        a.style.padding = "0 0 10px 0";
        a.style.fontSize = "16px";
        a.style.boxSizing = "border-box";
        _.Bm("Map Data", a)
    };
    OL = function(a) {
        a = _.W("div", a);
        a.style.fontSize = "13px";
        return _.Bm("", a)
    };
    PL = function(a) {
        var b;
        if (b = (b = a.get("size")) ? new _.Q(Math.min(300, b.width - 10), Math.min(180, b.height - 10)) : null) {
            _.Bg(a.j, new _.Q(Math.max(0, b.width), Math.max(0, b.height)));
            var c = a.get("size");
            _.Am(a.j, new _.P((c.width - b.width) / 2, (c.height - b.height) / 2))
        }
    };
    RL = function(a) {
        _.Uw(a, "gmnoprint");
        _.nm(a, "gmnoscreen");
        this.j = a;
        a = this.l = _.W("div", a);
        a.style.fontFamily = "Roboto,Arial,sans-serif";
        a.style.fontSize = _.V(11);
        a.style.color = "#444";
        a.style.direction = "ltr";
        a.style.textAlign = "right";
        a.style.backgroundColor = "#f5f5f5"
    };
    SL = function(a, b) {
        var c = new KL(document.createElement("div"), a);
        c.bindTo("size", this);
        c.bindTo("rmiWidth", this);
        c.bindTo("attributionText", this);
        c.bindTo("fontLoaded", this);
        c.bindTo("isCustomPanorama", this);
        var d = new QL(a);
        d.bindTo("size", this);
        d.bindTo("attributionText", this);
        _.S.addListener(c, "click", (0, _.z)(d.set, d, "visible", !0));
        d = new RL(document.createElement("div"));
        d.bindTo("attributionText", this);
        a = new GL(document.createElement("div"), a);
        a.bindTo("fontLoaded", this);
        a.bindTo("mapTypeId", this);
        c.bindTo("tosWidth", a, "width");
        c.bindTo("mapTypeId", this);
        c.bindTo("scaleWidth", this);
        b && _.vg[28] ? (c.bindTo("hide", b, "hideLegalNotices"), d.bindTo("hide", b, "hideLegalNotices"), a.bindTo("hide", b, "hideLegalNotices")) : (c.bindTo("isCustomPanorama", this), d.bindTo("hide", this, "isCustomPanorama"));
        this.j = c;
        this.l = d;
        this.m = a
    };
    TL = function(a, b) {
        _.Jm(a);
        _.Im(a);
        a.style.fontFamily = "Roboto,Arial,sans-serif";
        a.style.fontSize = _.V(Math.round(11 * b / 40));
        a.style.textAlign = "center";
        _.gx(a, "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px");
        a.setAttribute("controlWidth", _.V(25));
        _.ax(a, "pointer");
        this.j = [];
        this.l = b;
        this.m = a
    };
    UL = function(a, b, c) {
        _.S.addDomListener(b, "mouseover", function() {
            b.style.color = "#bbb";
            b.style.fontWeight = "bold"
        });
        _.S.addDomListener(b, "mouseout", function() {
            b.style.color = "#999";
            b.style.fontWeight = "400"
        });
        _.S.qa(b, "click", a, function() {
            this.set("pano", c)
        })
    };
    YL = function(a, b) {
        var c = this;
        this.B = a;
        _.nm(a, "gm-svpc");
        a.setAttribute("dir", "ltr");
        a.setAttribute("title", "Drag Pegman onto the map to open Street View");
        a.style.backgroundColor = "#fff";
        this.j = {
            ke: null,
            active: null,
            fe: null
        };
        this.l = b;
        this.m = !0;
        VL(this);
        this.set("position", _.yJ.Ih.offset);
        _.S.qa(a, "mouseover", this, this.D);
        _.S.qa(a, "mouseout", this, this.F);
        a = this.A = new _.hD(a);
        a.bindTo("position", this);
        _.S.forward(a, "dragstart", this);
        _.S.forward(a, "drag", this);
        _.S.forward(a, "dragend", this);
        var d = this;
        _.S.addListener(a,
            "dragend",
            function() {
                d.set("position", _.yJ.Ih.offset)
            });
        _.S.addListener(this, "mode_changed", function() {
            var e = c.get("mode");
            c.A.get("enabled") || c.A.set("enabled", !0);
            WL(c, e)
        });
        _.S.addListener(this, "display_changed", function() {
            return XL(c)
        });
        _.S.addListener(this, "mapsize_changed", function() {
            return XL(c)
        });
        this.set("mode", 1)
    };
    VL = function(a) {
        for (var b in a.j) {
            var c = a.j[b];
            c && c.parentNode && _.kc(c);
            a.j[b] = null
        }
        b = a.B;
        if (a.m) {
            _.Yw(b);
            c = new _.Q(a.l, a.l);
            _.gx(b, "0 1px 4px -1px rgba(0,0,0,0.3)");
            PJ(b, _.V(40 < a.l ? Math.round(a.l / 20) : 2));
            b.style.width = _.V(c.width);
            b.style.height = _.V(c.height);
            var d = 32 > a.l ? a.l - 2 : 40 > a.l ? 30 : 10 + a.l / 2,
                e = _.W("div", b);
            e.style.position = "absolute";
            e.style.left = "50%";
            e.style.top = "50%";
            var f = document.createElement("img");
            a.j.ke = f;
            f.src = _.UB('<svg xmlns="http://www.w3.org/2000/svg" width="23" height="38" viewBox="0 0 23 38">\n<path d="M16.6,38.1h-5.5l-0.2-2.9-0.2,2.9h-5.5L5,25.3l-0.8,2a1.53,1.53,0,0,1-1.9.9l-1.2-.4a1.58,1.58,0,0,1-1-1.9v-0.1c0.3-.9,3.1-11.2,3.1-11.2a2.66,2.66,0,0,1,2.3-2l0.6-.5a6.93,6.93,0,0,1,4.7-12,6.8,6.8,0,0,1,4.9,2,7,7,0,0,1,2,4.9,6.65,6.65,0,0,1-2.2,5l0.7,0.5a2.78,2.78,0,0,1,2.4,2s2.9,11.2,2.9,11.3a1.53,1.53,0,0,1-.9,1.9l-1.3.4a1.63,1.63,0,0,1-1.9-.9l-0.7-1.8-0.1,12.7h0Zm-3.6-2h1.7L14.9,20.3l1.9-.3,2.4,6.3,0.3-.1c-0.2-.8-0.8-3.2-2.8-10.9a0.63,0.63,0,0,0-.6-0.5h-0.6l-1.1-.9h-1.9l-0.3-2a4.83,4.83,0,0,0,3.5-4.7A4.78,4.78 0 0,0 11 2.3H10.8a4.9,4.9,0,0,0-1.4,9.6l-0.3,2h-1.9l-1,.9h-0.6a0.74,0.74,0,0,0-.6.5c-2,7.5-2.7,10-3,10.9l0.3,0.1,2.5-6.3,1.9,0.3,0.2,15.8h1.6l0.6-8.4a1.52,1.52,0,0,1,1.5-1.4,1.5,1.5,0,0,1,1.5,1.4l0.9,8.4h0Zm-10.9-9.6h0Zm17.5-.1h0Z" style="fill:#333;opacity:0.7;isolation:isolate"/>\n<path d="M5.9,13.6l1.1-.9h7.8l1.2,0.9" style="fill:#ce592c"/>\n<ellipse cx="10.9" cy="13.1" rx="2.7" ry="0.3" style="fill:#ce592c;opacity:0.5;isolation:isolate"/>\n<path d="M20.6,26.1l-2.9-11.3a1.71,1.71,0,0,0-1.6-1.2H5.7a1.69,1.69,0,0,0-1.5,1.3l-3.1,11.3a0.61,0.61,0,0,0,.3.7l1.1,0.4a0.61,0.61,0,0,0,.7-0.3l2.7-6.7,0.2,16.8h3.6l0.6-9.3a0.47,0.47,0,0,1,.44-0.5h0.06c0.4,0,.4.2,0.5,0.5l0.6,9.3h3.6L15.7,20.3l2.5,6.6a0.52,0.52,0,0,0,.66.31h0l1.2-.4a0.57,0.57,0,0,0,.5-0.7h0Z" style="fill:#fdbf2d"/>\n<path d="M7,13.6l3.9,6.7,3.9-6.7" style="fill:#cf572e;opacity:0.6;isolation:isolate"/>\n<circle cx="10.9" cy="7" r="5.9" style="fill:#fdbf2d"/>\n</svg>\n');
            f.style.width = f.style.height = _.V(d);
            f.style.position = "absolute";
            f.style.transform = "translate(-50%, -50%)";
            f.style.pointerEvents = "none";
            e.appendChild(f);
            f = document.createElement("img");
            a.j.active = f;
            f.src = _.UB('<svg width="24px" height="38px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 38">\n<path d="M22,26.6l-2.9-11.3a2.78,2.78,0,0,0-2.4-2l-0.7-.5a6.82,6.82,0,0,0,2.2-5,6.9,6.9,0,0,0-13.8,0,7,7,0,0,0,2.2,5.1l-0.6.5a2.55,2.55,0,0,0-2.3,2s-3,11.1-3,11.2v0.1a1.58,1.58,0,0,0,1,1.9l1.2,0.4a1.63,1.63,0,0,0,1.9-.9l0.8-2,0.2,12.8h11.3l0.2-12.6,0.7,1.8a1.54,1.54,0,0,0,1.5,1,1.09,1.09,0,0,0,.5-0.1l1.3-.4a1.85,1.85,0,0,0,.7-2h0Zm-1.2.9-1.2.4a0.61,0.61,0,0,1-.7-0.3l-2.5-6.6-0.2,16.8h-9.4L6.6,21l-2.7,6.7a0.52,0.52,0,0,1-.66.31h0l-1.1-.4a0.52,0.52,0,0,1-.31-0.66v0l3.1-11.3a1.69,1.69,0,0,1,1.5-1.3h0.2l1-.9h2.3a5.9,5.9,0,1,1,3.2,0h2.3l1.1,0.9h0.2a1.71,1.71,0,0,1,1.6,1.2l2.9,11.3a0.84,0.84,0,0,1-.4.7h0Z" style="fill:#333;fill-opacity:0.2"/>"\n</svg>\n\n');
            f.style.display = "none";
            f.style.width = f.style.height = _.V(d);
            f.style.position = "absolute";
            f.style.transform = "translate(-50%, -50%)";
            f.style.pointerEvents = "none";
            e.appendChild(f);
            f = document.createElement("img");
            a.j.fe = f;
            f.style.display = "none";
            f.style.width = f.style.height = _.V(4 * d / 3);
            f.style.position = "absolute";
            f.style.transform = "translate(-60%, -45%)";
            f.style.pointerEvents = "none";
            e.appendChild(f);
            f.src = _.UB('<svg width="40px" height="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 50">\n<path d="M34.00,-30.40l-2.9-11.3a2.78,2.78,0,0,0-2.4-2l-0.7-.5a6.82,6.82,0,0,0,2.2-5,6.9,6.9,0,0,0-13.8,0,7,7,0,0,0,2.2,5.1l-0.6.5a2.55,2.55,0,0,0-2.3,2s-3,11.1-3,11.2v0.1a1.58,1.58,0,0,0,1,1.9l1.2,0.4a1.63,1.63,0,0,0,1.9-.9l0.8-2,0.2,12.8h11.3l0.2-12.6,0.7,1.8a1.54,1.54,0,0,0,1.5,1,1.09,1.09,0,0,0,.5-0.1l1.3-.4a1.85,1.85,0,0,0,.7-2h0Zm-1.2.9-1.2.4a0.61,0.61,0,0,1-.7-0.3l-2.5-6.6-0.2,16.8h-9.4L18.60,-36.00l-2.7,6.7a0.52,0.52,0,0,1-.66.31h0l-1.1-.4a0.52,0.52,0,0,1-.31-0.66v0l3.1-11.3a1.69,1.69,0,0,1,1.5-1.3h0.2l1-.9h2.3a5.9,5.9,0,1,1,3.2,0h2.3l1.1,0.9h0.2a1.71,1.71,0,0,1,1.6,1.2l2.9,11.3a0.84,0.84,0,0,1-.4.7h0Zm1.2,59.1-2.9-11.3a2.78,2.78,0,0,0-2.4-2l-0.7-.5a6.82,6.82,0,0,0,2.2-5,6.9,6.9,0,0,0-13.8,0,7,7,0,0,0,2.2,5.1l-0.6.5a2.55,2.55,0,0,0-2.3,2s-3,11.1-3,11.2v0.1a1.58,1.58,0,0,0,1,1.9l1.2,0.4a1.63,1.63,0,0,0,1.9-.9l0.8-2,0.2,12.8h11.3l0.2-12.6,0.7,1.8a1.54,1.54,0,0,0,1.5,1,1.09,1.09,0,0,0,.5-0.1l1.3-.4a1.85,1.85,0,0,0,.7-2h0Zm-1.2.9-1.2.4a0.61,0.61,0,0,1-.7-0.3l-2.5-6.6-0.2,16.8h-9.4L18.60,24.00l-2.7,6.7a0.52,0.52,0,0,1-.66.31h0l-1.1-.4a0.52,0.52,0,0,1-.31-0.66v0l3.1-11.3a1.69,1.69,0,0,1,1.5-1.3h0.2l1-.9h2.3a5.9,5.9,0,1,1,3.2,0h2.3l1.1,0.9h0.2a1.71,1.71,0,0,1,1.6,1.2l2.9,11.3a0.84,0.84,0,0,1-.4.7h0Z" style="fill:#333;fill-opacity:0.2"></path>\n<path d="M15.40,38.80h-4a1.64,1.64,0,0,1-1.4-1.1l-3.1-8a0.9,0.9,0,0,1-.5.1l-1.4.1a1.62,1.62,0,0,1-1.6-1.4l-1.1-13.1,1.6-1.3a6.87,6.87,0,0,1-3-4.6A7.14,7.14 0 0,1 2 4a7.6,7.6,0,0,1,4.7-3.1,7.14,7.14,0,0,1,5.5,1.1,7.28,7.28,0,0,1,2.3,9.6l2.1-.1,0.1,1c0,0.2.1,0.5,0.1,0.8a2.41,2.41,0,0,1,1,1s1.9,3.2,2.8,4.9c0.7,1.2,2.1,4.2,2.8,5.9a2.1,2.1,0,0,1-.8,2.6l-0.6.4a1.63,1.63,0,0,1-1.5.2l-0.6-.3a8.93,8.93,0,0,0,.5,1.3,7.91,7.91,0,0,0,1.8,2.6l0.6,0.3v4.6l-4.5-.1a7.32,7.32,0,0,1-2.5-1.5l-0.4,3.6h0Zm-10-19.2,3.5,9.8,2.9,7.5h1.6V35l-1.9-9.4,3.1,5.4a8.24,8.24,0,0,0,3.8,3.8h2.1v-1.4a14,14,0,0,1-2.2-3.1,44.55,44.55,0,0,1-2.2-8l-1.3-6.3,3.2,5.6c0.6,1.1,2.1,3.6,2.8,4.9l0.6-.4c-0.8-1.6-2.1-4.6-2.8-5.8-0.9-1.7-2.8-4.9-2.8-4.9a0.54,0.54,0,0,0-.4-0.3l-0.7-.1-0.1-.7a4.33,4.33,0,0,0-.1-0.5l-5.3.3,2.2-1.9a4.3,4.3,0,0,0,.9-1,5.17,5.17,0,0,0,.8-4,5.67,5.67,0,0,0-2.2-3.4,5.09,5.09,0,0,0-4-.8,5.67,5.67,0,0,0-3.4,2.2,5.17,5.17,0,0,0-.8,4,5.67,5.67,0,0,0,2.2,3.4,3.13,3.13,0,0,0,1,.5l1.6,0.6-3.2,2.6,1,11.5h0.4l-0.3-8.2h0Z" style="fill:#333"></path>\n<path d="M3.35,15.90l1.1,12.5a0.39,0.39,0,0,0,.36.42l0.14,0,1.4-.1a0.66,0.66,0,0,0,.5-0.4l-0.2-3.8-3.3-8.6h0Z" style="fill:#fdbf2d"></path>\n<path d="M5.20,28.80l1.1-.1a0.66,0.66,0,0,0,.5-0.4l-0.2-3.8-1.2-3.1Z" style="fill:#ce592b;fill-opacity:0.25"></path>\n<path d="M21.40,35.70l-3.8-1.2-2.7-7.8L12.00,15.5l3.4-2.9c0.2,2.4,2.2,14.1,3.7,17.1,0,0,1.3,2.6,2.3,3.1v2.9m-8.4-8.1-2-.3,2.5,10.1,0.9,0.4v-2.9" style="fill:#e5892b"></path>\n<path d="M17.80,25.40c-0.4-1.5-.7-3.1-1.1-4.8-0.1-.4-0.1-0.7-0.2-1.1l-1.1-2-1.7-1.6s0.9,5,2.4,7.1a19.12,19.12,0,0,0,1.7,2.4h0Z" style="fill:#cf572e;opacity:0.6;isolation:isolate"></path>\n<path d="M14.40,37.80h-3a0.43,0.43,0,0,1-.4-0.4l-3-7.8-1.7-4.8-3-9,8.9-.4s2.9,11.3,4.3,14.4c1.9,4.1,3.1,4.7,5,5.8h-3.2s-4.1-1.2-5.9-7.7a0.59,0.59,0,0,0-.6-0.4,0.62,0.62,0,0,0-.3.7s0.5,2.4.9,3.6a34.87,34.87,0,0,0,2,6h0Z" style="fill:#fdbf2d"></path>\n<path d="M15.40,12.70l-3.3,2.9-8.9.4,3.3-2.7" style="fill:#ce592b"></path>\n<path d="M9.10,21.10l1.4-6.2-5.9.5" style="fill:#cf572e;opacity:0.6;isolation:isolate"></path>\n<path d="M12.00,13.5a4.75,4.75,0,0,1-2.6,1.1c-1.5.3-2.9,0.2-2.9,0s1.1-.6,2.7-1" style="fill:#bb3d19"></path>\n<circle cx="7.92" cy="8.19" r="6.3" style="fill:#fdbf2d"></circle>\n<path d="M4.70,13.60a6.21,6.21,0,0,0,8.4-1.9v-0.1a8.89,8.89,0,0,1-8.4,2h0Z" style="fill:#ce592b;fill-opacity:0.25"></path>\n<path d="M21.20,27.20l0.6-.4a1.09,1.09,0,0,0,.4-1.3c-0.7-1.5-2.1-4.6-2.8-5.8-0.9-1.7-2.8-4.9-2.8-4.9a1.6,1.6,0,0,0-2.17-.65l-0.23.15a1.68,1.68,0,0,0-.4,2.1s2.3,3.9,3.1,5.3c0.6,1,2.1,3.7,2.9,5.1a0.94,0.94,0,0,0,1.24.49l0.16-.09h0Z" style="fill:#fdbf2d"></path>\n<path d="M19.40,19.80c-0.9-1.7-2.8-4.9-2.8-4.9a1.6,1.6,0,0,0-2.17-.65l-0.23.15-0.3.3c1.1,1.5,2.9,3.8,3.9,5.4,1.1,1.8,2.9,5,3.8,6.7l0.1-.1a1.09,1.09,0,0,0,.4-1.3,57.67,57.67,0,0,0-2.7-5.6h0Z" style="fill:#ce592b;fill-opacity:0.25"></path>\n</svg>\n');
            a.j.ke.setAttribute("aria-label", "Street View Pegman Control");
            a.j.active.setAttribute("aria-label", "Pegman is on top of the Map");
            a.j.fe.setAttribute("aria-label", "Street View Pegman Control");
            b.setAttribute("controlWidth", c.width);
            b.setAttribute("controlHeight", c.height);
            _.S.trigger(b, "resize");
            WL(a, a.get("mode"))
        } else _.Xw(b), _.S.trigger(b, "resize")
    };
    WL = function(a, b) {
        a.m && (a = a.j, a.ke.style.display = a.fe.style.display = a.active.style.display = "none", 1 == b ? a.ke.style.display = "" : 2 == b ? a.fe.style.display = "" : a.active.style.display = "")
    };
    XL = function(a) {
        var b = a.get("mapSize");
        b = !!a.get("display") || !!(b && 200 <= b.width && b && 200 <= b.height);
        a.m != b && (a.m = b, VL(a))
    };
    ZL = function(a) {
        a = {
            clickable: !1,
            crossOnDrag: !1,
            draggable: !0,
            map: a,
            mapOnly: !0,
            pegmanMarker: !0,
            zIndex: 1E6
        };
        this.ca = _.yJ.lc;
        this.va = _.yJ.Yl;
        this.A = 0;
        this.H = this.D = -1;
        this.m = 0;
        this.B = this.F = null;
        this.l = _.fe("mode");
        this.j = _.ge("mode");
        var b = this.ja = new _.of(a);
        b.setDraggable(!0);
        var c = this.J = new _.of(a),
            d = this.K = new _.of(a);
        this.j(1);
        this.set("heading", 0);
        b.bindTo("icon", this, "pegmanIcon");
        b.bindTo("position", this, "dragPosition");
        b.bindTo("dragging", this);
        var e = this;
        c.bindTo("icon", this, "lilypadIcon");
        _.S.addListener(this, "position_changed", function() {
            c.set("position", e.get("position"))
        });
        c.bindTo("dragging", this);
        d.set("cursor", _.Vq);
        d.set("icon", aK(this.va, 0));
        _.S.addListener(this, "dragposition_changed", function() {
            d.set("position", e.get("dragPosition"))
        });
        d.bindTo("dragging", this);
        _.S.addListener(this, "dragstart", this.Tk);
        _.S.addListener(this, "drag", this.Uk);
        _.S.addListener(this, "dragend", this.Sk);
        _.S.forward(b, "dragstart", this);
        _.S.forward(b, "drag", this);
        _.S.forward(b, "dragend", this)
    };
    bM = function(a) {
        var b = a.l(),
            c = _.sI(b);
        a.ja.setVisible(c || 7 == b);
        a.set("pegmanIcon", c ? $L(a) : 7 == b ? aM(a) : void 0)
    };
    cM = function(a) {
        a.J.setVisible(!1);
        a.K.setVisible(_.sI(a.l()))
    };
    $L = function(a) {
        var b = a.l() - 3;
        return aK(a.ca, b)
    };
    aM = function(a) {
        var b = dM(a);
        a.H != b && (a.H = b, a.F = {
            url: _.UB(eM[b]),
            scaledSize: new _.Q(49, 52),
            anchor: new _.P(25, 35)
        });
        return a.F
    };
    gM = function(a) {
        var b = dM(a);
        a.D != b && (a.D = b, a.B = {
            url: _.UB(fM[b]),
            scaledSize: new _.Q(49, 52),
            anchor: new _.P(25, 35)
        });
        return a.B
    };
    dM = function(a) {
        (a = _.Uk(a.get("heading")) % 360) || (a = 0);
        0 > a && (a += 360);
        return Math.round(a / 360 * 16) % 16
    };
    iM = function(a, b, c, d, e, f, g, h, k) {
        this.j = a;
        this.K = f;
        this.F = e;
        this.D = g;
        this.ca = h;
        this.ja = k || null;
        this.va = d;
        this.B = this.m = !1;
        this.H = null;
        this.Ze(1);
        hM(this, c, b);
        this.pa = new _.qI;
        this.pa.bindTo("mapHeading", this);
        this.pa.bindTo("tilt", this);
        this.pa.bindTo("client", this);
        this.pa.bindTo("client", a, "svClient");
        this.l = this.J = null;
        this.A = _.Ym(c, d)
    };
    jM = function(a, b) {
        return _.Mc(b - (a || 0), 0, 360)
    };
    hM = function(a, b, c) {
        var d = a.j.__gm,
            e = new YL(b, a.ca);
        e.bindTo("mode", a);
        e.bindTo("mapSize", a);
        e.bindTo("display", a);
        var f = new ZL(a.j);
        f.bindTo("mode", a);
        f.bindTo("dragPosition", a);
        f.bindTo("position", a);
        var g = new _.tx(["mapHeading", "streetviewHeading"], "heading", jM);
        g.bindTo("streetviewHeading", a, "heading");
        g.bindTo("mapHeading", a.j, "heading");
        f.bindTo("heading", g);
        a.bindTo("pegmanDragging", f, "dragging");
        d.bindTo("pegmanDragging", a);
        _.S.bind(e, "dragstart", a, function() {
            var h = this;
            this.A = _.Ym(b, this.va);
            _.U("streetview").then(function(k) {
                if (!h.J) {
                    var l = (0, _.z)(h.F.getUrl, h.F),
                        m = d.get("panes");
                    k = h.J = new k.aj(m.floatPane, l, h.K);
                    k.bindTo("description", h);
                    k.bindTo("mode", h);
                    k.bindTo("thumbnailPanoId", h, "panoId");
                    k.bindTo("pixelBounds", d);
                    l = new _.LC(function(q) {
                        q = new _.Rm(h.j, h.D, q);
                        h.D.ta(q);
                        return q
                    });
                    l.bindTo("latLngPosition", f, "dragPosition");
                    k.bindTo("pixelPosition", l)
                }
            })
        });
        _.C(["dragstart", "drag", "dragend"], function(h) {
            _.S.addListener(e, h, function() {
                _.S.trigger(f, h, {
                    latLng: f.get("position"),
                    pixel: e.get("position")
                })
            })
        });
        _.S.addListener(e, "position_changed", function() {
            var h = e.get("position");
            (h = c({
                clientX: h.x + a.A.x,
                clientY: h.y + a.A.y
            })) && f.set("dragPosition", h)
        });
        _.S.addListener(f, "dragend", (0, _.z)(a.Gh, a, !1));
        _.S.addListener(f, "hover", (0, _.z)(a.Gh, a, !0))
    };
    kM = function(a) {
        var b = a.j.overlayMapTypes,
            c = a.pa;
        b.forEach(function(d, e) {
            d == c && b.removeAt(e)
        });
        a.m = !1
    };
    lM = function(a) {
        var b = a.get("projection");
        b && b.l && (a.j.overlayMapTypes.push(a.pa), a.m = !0)
    };
    mM = _.qa("@media print {  .gm-style .gmnoprint, .gmnoprint {    display:none  }}@media screen {  .gm-style .gmnoscreen, .gmnoscreen {    display:none  }}");
    nM = function(a, b, c) {
        this.B = a;
        this.D = c;
        this.l = _.re(0);
        c = new MJ(9 == b.nodeType ? b : b.ownerDocument || b.document);
        this.F = c.j.createElement("span");
        c.appendChild(b, this.F);
        this.j = c.j.createElement("div");
        c.appendChild(b, this.j);
        XJ(this.j, "position", "relative");
        XJ(this.j, "display", "inline-block");
        this.j.style.height = _.hx(8, !0);
        XJ(this.j, "bottom", "-1px");
        b = c.j.createElement("div");
        c.appendChild(this.j, b);
        _.ix(b, "100%", 4);
        XJ(b, "position", "absolute");
        YJ(b, 0, 0);
        b = c.j.createElement("div");
        c.appendChild(this.j, b);
        _.ix(b, 4, 8);
        YJ(b, 0, 0);
        XJ(b, "backgroundColor", "#fff");
        b = c.j.createElement("div");
        c.appendChild(this.j, b);
        _.ix(b, 4, 8);
        XJ(b, "position", "absolute");
        XJ(b, "backgroundColor", "#fff");
        XJ(b, "right", "0px");
        XJ(b, "bottom", "0px");
        b = c.j.createElement("div");
        c.appendChild(this.j, b);
        XJ(b, "position", "absolute");
        XJ(b, "backgroundColor", "#666");
        b.style.height = _.hx(2, !0);
        XJ(b, "left", "1px");
        XJ(b, "bottom", "1px");
        XJ(b, "right", "1px");
        b = c.j.createElement("div");
        c.appendChild(this.j, b);
        XJ(b, "position", "absolute");
        _.ix(b, 2, 6);
        YJ(b, 1, 1);
        XJ(b, "backgroundColor", "#666");
        b = c.j.createElement("div");
        c.appendChild(this.j, b);
        _.ix(b, 2, 6);
        XJ(b, "position", "absolute");
        XJ(b, "backgroundColor", "#666");
        XJ(b, "bottom", "1px");
        XJ(b, "right", "1px");
        this.m = !0;
        this.A = 0;
        _.Sf(a, "click", (0, _.z)(this.J, this));
        this.D.ma((0, _.z)(this.H, this))
    };
    oM = function(a, b, c, d) {
        var e = a;
        1 > a && (e = c, b = d);
        for (a = 1; e >= 10 * a;) a *= 10;
        e >= 5 * a && (a *= 5);
        e >= 2 * a && (a *= 2);
        return {
            Jl: Math.round(80 * a / e),
            Kj: a + " " + b
        }
    };
    yM = function(a) {
        var b = this;
        this.U = new _.lg(function() {
            b.m[1] && pM(b);
            b.m[0] && qM(b);
            if (b.m[2]) {
                if (b.ob) {
                    var e = b.ob;
                    XJ(e.B, "display", "none");
                    e.l.set(0);
                    b.ob = null
                }
                b.F && (b.l.Bb(b.F), b.F = null);
                e = b.get("scaleControl");
                _.t(e) && _.bn(b.j, e ? "Csy" : "Csn");
                if (e) {
                    b.F = _.W("div");
                    b.l.addElement(b.F, 12, !0, -1001);
                    _.Im(b.F);
                    _.Jm(b.F);
                    e = b.F;
                    var f = _.jI(b.F, b.J);
                    var g = _.Io(b, "projection");
                    var h = _.Io(b, "bottomRight"),
                        k = _.Io(b, "zoom");
                    g = new _.Fo([g, h, k], gK);
                    b.ob = new nM(e, f, g);
                    _.S.trigger(b.F, "resize");
                    b.Ec && _.Go(b.Ec, "scaleWidth",
                        b.ob.l)
                }
            }
            b.m[3] && rM(b);
            b.m = {};
            b.get("disableDefaultUI") && !b.D && _.bn(b.j, "Cdn")
        }, 0);
        this.l = a.Ah || null;
        this.Dk = a.Id;
        this.Gc = a.Pk || null;
        this.A = a.controlSize;
        this.rd = a.Aj || null;
        this.j = a.map || null;
        this.D = a.pm || null;
        this.Gk = a.qm || null;
        this.mk = a.om || null;
        this.Xj = a.sa || null;
        this.Og = this.Bg = this.Ig = !1;
        this.B = this.Yg = null;
        this.J = a.lh;
        this.Rd = _.KC("Toggle fullscreen view");
        this.ca = null;
        this.Sj = a.oe;
        this.H = null;
        this.Ic = !1;
        this.Ec = this.F = this.ob = null;
        this.Ub = [];
        this.va = null;
        this.Nj = {};
        this.m = {};
        this.ja = this.Rb =
            this.Qb = this.Tb = null;
        this.Hc = _.W("div");
        this.K = null;
        this.Fc = !1;
        _.Jm(this.Hc);
        _.Hk(mM, this.J);
        var c = this.Jc = new TK(_.I(_.Cc(_.K), 14));
        c.bindTo("center", this);
        c.bindTo("zoom", this);
        c.bindTo("mapTypeId", this);
        c.bindTo("pano", this);
        c.bindTo("position", this);
        c.bindTo("pov", this);
        c.bindTo("heading", this);
        c.bindTo("tilt", this);
        a.map && _.S.addListener(c, "url_changed", function() {
            a.map.set("mapUrl", c.get("url"))
        });
        var d = new ZJ(_.Cc(_.K));
        d.bindTo("center", this);
        d.bindTo("zoom", this);
        d.bindTo("mapTypeId", this);
        d.bindTo("pano", this);
        d.bindTo("heading", this);
        this.Fk = d;
        sM(this);
        tM(this);
        rM(this);
        uM(this, a.Xg);
        a.ai && vM(this);
        _.vg[35] && wM(this);
        xM(this)
    };
    xM = function(a) {
        _.U("util").then(function(b) {
            b.j.j.ma(function(c) {
                2 == c.getStatus() && (a.Fc = !0, zM(a), a.K && (a.K.set("display", !1), a.K.unbindAll(), a.K = null))
            })
        })
    };
    FM = function(a) {
        if (AM(a) != a.Yg || BM(a) != a.Ig || CM(a) != a.Og || DM(a) != a.Ic || EM(a) != a.Bg) a.m[1] = !0;
        a.m[0] = !0;
        _.mg(a.U)
    };
    GM = function(a) {
        return a.get("disableDefaultUI")
    };
    DM = function(a) {
        var b = a.get("streetViewControl"),
            c = a.get("disableDefaultUI"),
            d = !!a.get("size");
        (_.t(b) || c) && _.bn(a.j, b ? "Cvy" : "Cvn");
        null == b && (b = !c);
        a = d && !a.D;
        return b && a
    };
    HM = function(a) {
        return !a.get("disableDefaultUI") && !!a.D
    };
    uM = function(a, b) {
        var c = a.l;
        _.C(b, function(d, e) {
            if (d) {
                var f = function(g) {
                    if (g) {
                        var h = g.index;
                        _.M(h) || (h = 1E3);
                        h = Math.max(h, -999);
                        _.Fm(g, Math.min(999999, g.style.zIndex || 0));
                        c.addElement(g, e, !1, h)
                    }
                };
                d.forEach(f);
                _.S.addListener(d, "insert_at", function(g) {
                    f(d.getAt(g))
                });
                _.S.addListener(d, "remove_at", function(g, h) {
                    c.Bb(h)
                })
            }
        })
    };
    wM = function(a) {
        if (a.j) {
            var b = new fK(document.createElement("div"));
            b.bindTo("card", a.j.__gm);
            b = b.getDiv();
            a.l.addElement(b, 1, !0, .1)
        }
    };
    rM = function(a) {
        a.ca && (a.ca.unbindAll(), a.ca.release(), a.ca = null, a.l.Bb(a.Rd));
        var b = _.KC("Toggle fullscreen view"),
            c = new QK(a.J, b, a.Sj, a.A);
        c.bindTo("display", a, "fullscreenControl");
        c.bindTo("disableDefaultUI", a);
        c.bindTo("mapTypeId", a);
        var d = a.get("fullscreenControlOptions") || {};
        a.l.addElement(b, d && d.position || 7, !0, -1007);
        a.ca = c;
        a.Rd = b
    };
    tM = function(a) {
        var b = new SL(a.Dk, a.j || a.D);
        b.bindTo("size", a);
        b.bindTo("rmiWidth", a);
        b.bindTo("attributionText", a);
        b.bindTo("fontLoaded", a);
        b.bindTo("mapTypeId", a);
        b.bindTo("isCustomPanorama", a);
        var c = b.j.getDiv();
        a.l.addElement(c, 12, !0, -1E3);
        c = b.l.getDiv();
        a.l.addElement(c, 12, !0, -1005);
        c = b.m.getDiv();
        a.l.addElement(c, 12, !0, -1002);
        a.Ec = b
    };
    sM = function(a) {
        if (!_.vg[2]) {
            var b = !!_.vg[21];
            b = (a.j ? XK(a.j, a.Jc, b) : YK(a.D, a.Jc, b)).getDiv();
            a.l.addElement(b, 10, !0, -1E3)
        }
    };
    vM = function(a) {
        var b = _.Cc(_.K);
        if (!_.vm()) {
            var c = document.createElement("div"),
                d = new _.mI(c, a.j, _.I(b, 14));
            a.l.addElement(c, 12, !0, -1003);
            d.bindTo("available", a, "rmiAvailable");
            d.bindTo("bounds", a);
            _.vg[17] ? (d.bindTo("enabled", a, "reportErrorControl"), a.j.bindTo("rmiLinkData", d)) : d.set("enabled", !0);
            d.bindTo("mapSize", a, "size");
            d.bindTo("mapTypeId", a);
            d.bindTo("sessionState", a.Fk);
            a.bindTo("rmiWidth", d, "width");
            _.S.addListener(d, "rmilinkdata_changed", function() {
                var e = d.get("rmiLinkData");
                a.j.set("rmiUrl",
                    e && e.url)
            })
        }
    };
    zM = function(a) {
        a.Sb && (a.Sb.unbindAll && a.Sb.unbindAll(), a.Sb = null);
        a.Tb && (a.Tb.unbindAll(), a.Tb = null);
        a.Qb && (a.Qb.unbindAll(), a.Qb = null);
        a.va && (IM(a, a.va), _.bh(a.va.$), a.va = null)
    };
    qM = function(a) {
        zM(a);
        if (a.Gc && !a.Fc) {
            var b = JM(a);
            if (b) {
                var c = _.W("div");
                _.ex(c);
                c.style.margin = _.V(a.A >> 2);
                _.S.addDomListener(c, "mouseover", function() {
                    _.Fm(c, 1E6)
                });
                _.S.addDomListener(c, "mouseout", function() {
                    _.Fm(c, 0)
                });
                _.Fm(c, 0);
                var d = a.get("mapTypeControlOptions") || {},
                    e = a.Qb = new eK(a.Gc, d.mapTypeIds);
                e.bindTo("aerialAvailableAtZoom", a);
                e.bindTo("zoom", a);
                var f = e.A;
                a.l.addElement(c, d.position || 1, !1, .2);
                d = null;
                2 == b ? (d = new qL(c, f, a.A), e.bindTo("mapTypeId", d)) : d = new oL(c, f, _.cL, a.A);
                b = a.Tb = new sL(e.m);
                b.set("labels", !0);
                d.bindTo("mapTypeId", b, "internalMapTypeId");
                d.bindTo("labels", b);
                d.bindTo("terrain", b);
                d.bindTo("tilt", a, "desiredTilt");
                d.bindTo("fontLoaded", a);
                d.bindTo("mapSize", a, "size");
                d.bindTo("display", a, "mapTypeControl");
                b.bindTo("mapTypeId", a);
                _.S.trigger(c, "resize");
                a.va = {
                    $: c,
                    re: null
                };
                a.Sb = d
            }
        }
    };
    JM = function(a) {
        if (!a.Gc) return null;
        var b = (a.get("mapTypeControlOptions") || {}).style || 0,
            c = a.get("mapTypeControl"),
            d = GM(a);
        if (!_.t(c) && d || _.t(c) && !c) return _.bn(a.j, "Cmn"), null;
        1 == b ? _.bn(a.j, "Cmh") : 2 == b && _.bn(a.j, "Cmd");
        return 2 == b || 1 == b ? b : 1
    };
    KM = function(a, b) {
        b = a.H = new EL(b, a.A, _.hs.j, a.J);
        b.bindTo("zoomRange", a);
        b.bindTo("display", a, "zoomControl");
        b.bindTo("disableDefaultUI", a);
        b.bindTo("mapSize", a, "size");
        b.bindTo("mapTypeId", a);
        b.bindTo("zoom", a);
        return b.getDiv()
    };
    LM = function(a) {
        var b = new _.yC(AK, {
                wc: _.hs.j
            }),
            c = new HK(b, a.A, a.J);
        c.bindTo("pov", a);
        c.bindTo("disableDefaultUI", a);
        c.bindTo("panControl", a);
        c.bindTo("mapSize", a, "size");
        return b.$
    };
    MM = function(a) {
        var b = _.W("div");
        _.ex(b);
        a.B = new yL(b, a.A, a.J);
        a.B.bindTo("mapSize", a, "size");
        a.B.bindTo("rotateControl", a);
        a.B.bindTo("heading", a);
        a.B.bindTo("tilt", a);
        a.B.bindTo("aerialAvailableAtZoom", a);
        return b
    };
    NM = function(a) {
        var b = _.W("div"),
            c = a.Rb = new TL(b, a.A);
        c.bindTo("pano", a);
        c.bindTo("floors", a);
        c.bindTo("floorId", a);
        return b
    };
    OM = function(a) {
        a.m[1] = !0;
        _.mg(a.U)
    };
    pM = function(a) {
        function b(m, q) {
            if (!l[m]) {
                var r = a.A >> 2,
                    u = 12 + (a.A >> 1),
                    v = document.createElement("div");
                _.ex(v);
                _.nm(v, "gm-bundled-control");
                10 == m || 11 == m || 12 == m || 6 == m || 9 == m ? _.nm(v, "gm-bundled-control-on-bottom") : _.Uw(v, "gm-bundled-control-on-bottom");
                v.style.margin = _.V(r);
                _.Im(v);
                l[m] = new RK(v, m, u);
                a.l.addElement(v, m, !1, .1)
            }
            m = l[m];
            m.add(q);
            a.Ub.push({
                $: q,
                re: m
            })
        }

        function c(m) {
            return (a.get(m) || {}).position
        }
        a.H && (FL(a.H), a.H.unbindAll(), a.H = null);
        a.B && (a.B.unbindAll(), a.B = null);
        a.Rb && (a.Rb.unbindAll(), a.Rb =
            null);
        for (var d = _.Ca(a.Ub), e = d.next(); !e.done; e = d.next()) IM(a, e.value);
        a.Ub = [];
        d = a.Ig = BM(a);
        var f = a.Yg = AM(a),
            g = a.Ic = DM(a),
            h = a.Og = CM(a);
        a.Bg = EM(a);
        e = d && (c("panControlOptions") || 9);
        d = f && (c("zoomControlOptions") || 3 == f && 6 || 9);
        var k = 3 == f || _.vm();
        g = g && (c("streetViewControlOptions") || 9);
        h = h && (c("rotateControlOptions") || k && 6 || 9);
        var l = a.Nj;
        d && (f = KM(a, f), b(d, f));
        g && (PM(a), b(g, a.Hc));
        e && a.D && _.Hm.l && (f = LM(a), b(e, f));
        h && (e = MM(a), b(h, e));
        a.ja && (a.ja.remove(), a.ja = null);
        if (e = HM(a) && 9) f = NM(a), b(e, f);
        a.B && a.H &&
            a.H.Qd && h == d && a.B.bindTo("mouseover", a.H.Qd);
        d = _.Ca(a.Ub);
        for (e = d.next(); !e.done; e = d.next()) _.S.trigger(e.value.$, "resize")
    };
    BM = function(a) {
        var b = a.get("panControl"),
            c = GM(a);
        if (_.t(b) || c) return a.D || _.bn(a.j, b ? "Cpy" : "Cpn"), !!b;
        b = a.get("size");
        return _.vm() || !b ? !1 : 400 <= b.width && 370 <= b.height || !!a.D
    };
    EM = function(a) {
        return a.D ? !1 : GM(a) ? 1 == a.get("myLocationControl") : 0 != a.get("myLocationControl")
    };
    CM = function(a) {
        var b = a.get("rotateControl"),
            c = GM(a);
        (_.t(b) || c) && _.bn(a.j, b ? "Cry" : "Crn");
        return !a.get("size") || a.D ? !1 : c ? 1 == b : 0 != b
    };
    AM = function(a) {
        var b = a.get("zoomControl"),
            c = GM(a);
        return 0 == b || c && !_.t(b) ? (a.D || _.bn(a.j, "Czn"), null) : a.get("size") ? 1 : null
    };
    PM = function(a) {
        if (!a.K && !a.Fc && a.rd && a.j) {
            var b = a.K = new iM(a.j, a.rd, a.Hc, a.J, a.Gk, _.K, a.Xj, a.A, a.mk || void 0);
            b.bindTo("mapHeading", a, "heading");
            b.bindTo("tilt", a);
            b.bindTo("projection", a.j);
            b.bindTo("mapTypeId", a);
            a.bindTo("panoramaVisible", b);
            b.bindTo("mapSize", a, "size");
            b.bindTo("display", a, "streetViewControl");
            b.bindTo("disableDefaultUI", a);
            QM(a)
        }
    };
    QM = function(a) {
        var b = a.K;
        if (b) {
            var c = b.H,
                d = a.get("streetView");
            if (d != c) {
                if (c) {
                    var e = c.__gm;
                    e.unbind("result");
                    e.unbind("heading");
                    c.unbind("passiveLogo");
                    c.j.removeListener(a.fi, a);
                    c.j.set(!1)
                }
                d && (c = d.__gm, null != c.get("result") && b.set("result", c.get("result")), c.bindTo("result", b), null != c.get("heading") && b.set("heading", c.get("heading")), c.bindTo("heading", b), d.bindTo("passiveLogo", a), d.j.addListener(a.fi, a), a.set("panoramaVisible", d.get("visible")), b.bindTo("client", d));
                b.H = d
            }
        }
    };
    IM = function(a, b) {
        b.re ? (b.re.remove(b.$), delete b.re) : a.l.Bb(b.$)
    };
    RM = function(a) {
        var b = this;
        this.l = a;
        this.U = new _.lg(function() {
            return b.m()
        }, 0);
        _.S.qa(a, "resize", this, this.m);
        var c = this.j = {};
        _.C([1, 2, 3, 5, 4, 6, 7, 8, 9, 10, 11, 12, 13], function(d) {
            c[d] = []
        })
    };
    SM = function(a) {
        for (var b = 0, c = 0, d = a.length; c < d; ++c) b = Math.max(a[c].height, b);
        var e = d = 0;
        for (c = a.length; 0 < c; --c) {
            var f = a[c - 1];
            if (b == f.height) {
                f.width > e && f.width > f.height ? e = f.height : d = f.width;
                break
            } else e = Math.max(f.height, e)
        }
        return new _.Q(d, e)
    };
    VM = function(a, b, c, d) {
        for (var e = 0, f = 0, g, h = [], k = 0, l = a.length; k < l; ++k) {
            var m = a[k].element;
            g = TM(m);
            var q = TM(m, !0),
                r = UM(m),
                u = UM(m, !0),
                v = m.style;
            v[b] = _.V("left" == b ? e : e + (g - q));
            v[c] = _.V("top" == c ? 0 : r - u);
            g = e + g;
            r > f && (f = r, d.push({
                minWidth: e,
                height: f
            }));
            e = g;
            a[k].border || h.push(new _.Q(e, r));
            NJ(m)
        }
        return SM(h)
    };
    WM = function(a, b, c, d) {
        for (var e = 0, f = [], g = 0, h = a.length; g < h; ++g) {
            for (var k = a[g].element, l = TM(k), m = UM(k), q = TM(k, !0), r = UM(k, !0), u = 0, v = 0, w = d.length; v < w && d[v].minWidth <= l; ++v) u = d[v].height;
            e = Math.max(u, e);
            u = k.style;
            u[c] = _.V("top" == c ? e : e + m - r);
            u[b] = _.V("left" == b ? 0 : l - q);
            e += m;
            a[g].border || f.push(new _.Q(l, e));
            NJ(k)
        }
        return SM(f)
    };
    XM = function(a, b, c, d) {
        for (var e = 0, f = 0, g = 0, h = a.length; g < h; ++g) {
            var k = a[g].element,
                l = TM(k),
                m = UM(k),
                q = TM(k, !0);
            "left" == b ? k.style.left = 0 : "right" == b ? k.style.right = _.V(l - q) : k.style.left = _.V((c - q) / 2);
            e += m;
            a[g].border || (f = Math.max(l, f))
        }
        b = (d - e) / 2;
        g = 0;
        for (h = a.length; g < h; ++g) k = a[g].element, k.style.top = _.V(b), b += UM(k), NJ(k);
        return f
    };
    YM = function(a, b, c) {
        for (var d = 0, e = 0, f = 0, g = a.length; f < g; ++f) {
            var h = a[f].element,
                k = TM(h),
                l = UM(h),
                m = UM(h, !0);
            h.style[b] = _.V("top" == b ? 0 : l - m);
            d += k;
            a[f].border || (e = Math.max(l, e))
        }
        b = (c - d) / 2;
        f = 0;
        for (g = a.length; f < g; ++f) h = a[f].element, h.style.left = _.V(b), b += TM(h), NJ(h);
        return e
    };
    TM = function(a, b) {
        if (!_.Zw(a)) return 0;
        b = !b && _.Uk(a.getAttribute("controlWidth"));
        if (!_.M(b) || isNaN(b)) b = a.offsetWidth;
        a = _.Vm(a);
        b += _.Uk(a.marginLeft) || 0;
        return b += _.Uk(a.marginRight) || 0
    };
    UM = function(a, b) {
        if (!_.Zw(a)) return 0;
        b = !b && _.Uk(a.getAttribute("controlHeight"));
        if (!_.M(b) || isNaN(b)) b = a.offsetHeight;
        a = _.Vm(a);
        b += _.Uk(a.marginTop) || 0;
        return b += _.Uk(a.marginBottom) || 0
    };
    ZM = _.qa(".dismissButton{background-color:#fff;border:1px solid #dadce0;color:#1a73e8;border-radius:4px;font-family:Roboto,sans-serif;font-size:14px;height:36px;cursor:pointer;padding:0 24px}.dismissButton:hover{background-color:rgba(66,133,244,0.04);border:1px solid #d2e3fc}.dismissButton:focus{background-color:rgba(66,133,244,0.12);border:1px solid #d2e3fc;outline:0}.dismissButton:hover:focus{background-color:rgba(66,133,244,0.16);border:1px solid #d2e2fd}.dismissButton:active{background-color:rgba(66,133,244,0.16);border:1px solid #d2e2fd;box-shadow:0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15)}.dismissButton:disabled{background-color:#fff;border:1px solid #f1f3f4;color:#3c4043}\n");
    _.$M = function(a, b) {
        var c = document.createElement("div"),
            d = c.style;
        d.backgroundColor = "white";
        d.fontWeight = "500";
        d.fontFamily = "Roboto, sans-serif";
        d.padding = "15px 25px";
        d.boxSizing = "border-box";
        d.top = "5px";
        d = document.createElement("div");
        var e = document.createElement("img");
        e.alt = "";
        e.src = _.Pm + "api-3/images/google_gray.svg";
        e.style.border = e.style.margin = e.style.padding = 0;
        e.style.height = "17px";
        e.style.verticalAlign = "middle";
        e.style.width = "52px";
        _.Im(e);
        d.appendChild(e);
        c.appendChild(d);
        d = document.createElement("div");
        d.style.lineHeight = "20px";
        d.style.margin = "15px 0";
        e = document.createElement("span");
        e.style.color = "rgba(0,0,0,0.87)";
        e.style.fontSize = "14px";
        e.innerText = "This page can't load Google Maps correctly.";
        d.appendChild(e);
        c.appendChild(d);
        d = document.createElement("table");
        d.style.width = "100%";
        e = document.createElement("tr");
        var f = document.createElement("td");
        f.style.lineHeight = "16px";
        f.style.verticalAlign = "middle";
        var g = document.createElement("a");
        FJ(g, b);
        g.innerText = "Do you own this website?";
        g.target = "_blank";
        g.setAttribute("rel", "noopener");
        g.style.color = "rgba(0, 0, 0, 0.54)";
        g.style.fontSize = "12px";
        g.onclick = function() {
            _.bn(a, "Dl")
        };
        f.appendChild(g);
        e.appendChild(f);
        _.Yn(ZM);
        b = document.createElement("td");
        b.style.textAlign = "right";
        f = document.createElement("button");
        f.className = "dismissButton";
        f.innerText = _.ha;
        f.onclick = function() {
            a.removeChild(c);
            _.S.trigger(a, "dmd");
            _.bn(a, "Dd")
        };
        b.appendChild(f);
        e.appendChild(b);
        d.appendChild(e);
        c.appendChild(d);
        a.appendChild(c);
        _.bn(a, "D0");
        return c
    };
    aN = function(a) {
        this.H = a;
        this.j = 0;
        this.l = null;
        _.S.qa(a, "keydown", this, this.D);
        _.S.qa(a, "keypress", this, this.B);
        _.S.qa(a, "keyup", this, this.F);
        this.m = {}
    };
    bN = function(a) {
        var b = a.get("zoom");
        _.M(b) && a.set("zoom", b + 1)
    };
    cN = function(a) {
        var b = a.get("zoom");
        _.M(b) && a.set("zoom", b - 1)
    };
    dN = function(a, b, c) {
        _.S.trigger(a, "panbyfraction", b, c)
    };
    eN = function(a, b) {
        return !!(b.target != a.H || b.ctrlKey || b.altKey || b.metaKey || 0 == a.get("enabled") || a.get("streetViewDisable"))
    };
    fN = _.n();
    _.qb.prototype.j = _.vj(6, _.qa(1));
    _.yb.prototype.j = _.vj(5, _.qa(1));
    _.Hb.prototype.j = _.vj(4, _.oa("m"));
    MJ.prototype.Ga = function(a) {
        return _.Ja(a) ? this.j.getElementById(a) : a
    };
    MJ.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    MJ.prototype.contains = _.Rk;
    var VJ = {};
    _.A(ZJ, _.T);
    ZJ.prototype.changed = function(a) {
        if ("sessionState" != a) {
            a = new _.lH;
            var b = this.get("zoom"),
                c = this.get("center"),
                d = this.get("pano");
            if (null != b && null != c || null != d) {
                var e = this.j;
                (new _.rE(_.J(a, 1))).C[0] = _.Bc(e);
                (new _.rE(_.J(a, 1))).C[1] = _.I(e, 1);
                e = _.JH(a);
                var f = this.get("mapTypeId");
                "hybrid" == f || "satellite" == f ? e.C[0] = 3 : (e.C[0] = 0, "terrain" == f && (f = new _.pE(_.J(a, 4)), _.wc(f, 0, 4)));
                f = new _.bE(_.J(e, 1));
                f.C[0] = 2;
                if (c) {
                    var g = c.lng();
                    f.C[1] = g;
                    c = c.lat();
                    f.C[2] = c
                }
                _.Ka(b) && (f.C[5] = b);
                f.setHeading(this.get("heading") ||
                    0);
                d && ((new _.HE(_.J(e, 2))).C[0] = d);
                this.set("sessionState", a)
            } else this.set("sessionState", null)
        }
    };
    var gN = [37, 38, 39, 40],
        hN = {
            38: [0, -1],
            40: [0, 1],
            37: [-1, 0],
            39: [1, 0]
        };
    _.A(bK, _.T);
    _.wj(eK, _.T);
    _.A(fK, _.T);
    fK.prototype.card_changed = function() {
        var a = this.get("card");
        this.j && this.l.removeChild(this.j);
        if (a) {
            var b = this.j = _.W("div");
            b.style.backgroundColor = "white";
            b.appendChild(a);
            b.style.margin = _.V(10);
            b.style.padding = _.V(1);
            _.gx(b, "0 1px 4px -1px rgba(0,0,0,0.3)");
            PJ(b, _.V(2));
            this.l.appendChild(b);
            this.j = b
        } else this.j = null
    };
    fK.prototype.getDiv = _.oa("l");
    _.A(hK, _.Ff);
    var iN = [];
    hK.prototype.listen = function(a, b, c, d) {
        _.Sa(b) || (b && (iN[0] = b.toString()), b = iN);
        for (var e = 0; e < b.length; e++) {
            var f = _.Sf(a, b[e], c || this.handleEvent, d || !1, this.l || this);
            if (!f) break;
            this.j[f.key] = f
        }
        return this
    };
    hK.prototype.kb = function() {
        hK.Db.kb.call(this);
        kK(this)
    };
    hK.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var lK = {},
        mK = null;
    _.A(rK, _.jg);
    rK.prototype.j = function(a) {
        HJ(this, a)
    };
    _.A(sK, rK);
    sK.prototype.stop = function(a) {
        nK(this);
        this.l = 0;
        a && (this.progress = 1);
        uK(this, this.progress);
        this.j("stop");
        this.j("end")
    };
    sK.prototype.kb = function() {
        0 == this.l || this.stop(!1);
        this.j("destroy");
        sK.Db.kb.call(this)
    };
    sK.prototype.j = function(a) {
        HJ(this, new vK(a, this))
    };
    _.A(vK, _.Gf);
    _.A(AK, _.TB);
    AK.prototype.fill = function(a) {
        _.QB(this, 0, _.wz(a))
    };
    var yK = "t-avKK8hDgg9Q";
    _.A(EK, _.D);
    EK.prototype.getHeading = function() {
        return _.H(this, 0)
    };
    EK.prototype.setHeading = function(a) {
        this.C[0] = a
    };
    _.wj(HK, _.T);
    HK.prototype.changed = function() {
        function a(d) {
            return _.Qx(_.yx(_.UB(d)))
        }!this.m && this.j && (this.j.stop(), this.j = null);
        var b = this.get("pov");
        if (b) {
            var c = new EK;
            c.setHeading(_.Mc(-b.heading, 0, 360));
            _.nk(new _.Px(_.J(c, 2)), a('<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100" >\n  <circle fill="#222222" cx="50" cy="50" r="50"/>\n  <circle fill="#595959" cx="50" cy="50" r="22"/>\n</svg>\n'));
            _.nk(new _.Px(_.J(c, 3)), a('<svg xmlns="http://www.w3.org/2000/svg" width="40px" height="100px" viewBox="0 0 40 100">\n  <polygon fill="#C1272D" points="10,50 20,18 30,50"/>\n  <polygon fill="#D1D1D1" points="30,50 20,82 10,50"/>\n</svg>\n'));
            _.nk(new _.Px(_.J(c,
                4)), a('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="100px" viewBox="0 0 40 100">\n  <image overflow="visible" opacity="0.75" width="65" height="109" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABtCAYAAAD+mQwIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA\nGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB4dJREFUeNrsnItu4zoMRPVK//97\n17Z0b4B4wXI5JPWwi11YgJG2SZPoaDikJNshPO1pT3va0572NKHFuz6otdbzeS3G+G9A6Oz4jwGJ\nP9B56zPb3TDiTZ33/K05gSyHES8GEJXPsiA07bmVIOJFAKSfRyEgGMtAxAsBRAVCdPhBMx6XgYg3\nAIiGIoKhAPp4CYiyECICEAEMDwRklpE8F/8fjCkQZVIFwRj595GcikAj34BffAOhpNZLleAZeQ2E\nBEECUBXF/O78e1BG1VAmVWABSAKEaECQFIBgUBDDaigLvSAIAJIAIgkq4p3lKqif/6taRhlVQ1mg\nggAUgI7zeQ1CJaMbAIjGPn9YDWWBCiwA+XMk9jwKh0oO/poKjPU3gBE1lAUqCMroZwYhC/4gGeH7\nOJR0WpXs0q2GslgFEQAoDAQNCdqx9un82clDMUPY2V41lEUqsAAUQRVRiPkz7g/heZ41JBBD3lAu\n9oLCDgohAQg7eL4pIKy1iHkIrDoMDhhZgPAif9MgpA+IaNQPDYx6t0GWThXEzoxAAbzI7wjCITxH\nDTORNIkKr26DnC2bLRVkAoCCyEJHTwi70KnKlCKBuG7uoBhiECZKWVHCF4OQAQQJTgUgkEl2hURZ\nYIjREQpf5JGHRCCp0QuhGmHRFRJlQShofkDD4ItByGwED5IZpFA4Pv9zgILr8vWE2OEFUlagEF4C\nhLOjmamDAjgEEJo3uEOidC6cRKNUzooSaFi8BE/goUABlI9KsjAZi7MhUToU0FMuF0ENXywksuAJ\nmXxpWjwVBkJSw23La976QDNGbo68RpBSJgdhqaErJIozNUZlzpCMKvElKOEFlKBB2IX5RwJq6AqJ\nckEoaMbI6wWuhMh+f3d8AxMwzRMunUpbKvAYowWBq+BFQPTAmDNGEAre5TMtJF6saNIg7KzzXgBi\nSGi+UAZ2pnpDoTA/+FIgBEEF0nQcDUBVQgIqokxkBs/skYKQJlKJFEs7M8ldmHQhY4wzFeRMikyG\nL1ggzo7xNcMqpEVpUSYrALp8oQz4wUidUJQpNYVwquA0wxfwgwyW8od8oXT6AYKTwcJqUYyShwM3\nxQLeayZVioooC/0ggUWVAo4XM8bA5goFAEjK7tbtnqCtJXhAZBYOHEJ2KCCBlet4FYSoFEvRqBlQ\nMZWYTK2lek8IdBdNZXD0PaGRjYoyCxD4TDE5j2jMcVRzLI6Oj9YLCaw78jQXWGbIYB+zp/PRWBNt\nEIKyv+DZfUL1QzKUcjbP6HtU6aoSNSVYK8qhIywieER5vQKviWBHG50CdHl2QBsyHpUk8LfgHN2o\nbAZNtRSuadqXj05lhYmR7oKTLgLQW4X2Km2JAq6EYJ2E2Rx/Q+8ThPdE36Hd4QnWlwxKRy0Qnue7\nO+tVQnOQ9X75Ch6l10in6/CfLUjDUL5BcGxeSpKUOlCNfcTZQwPiGVRXODTF1JoxonTniP9Mt9Ok\ncxMO8P8SgDoYJkNT6eY8pC98KAc9v0h7LQKiwYAm6V1U6Q0FS7oWBLquSDdbDkEdkmJQZkHZZjo7\nWGFwKJ2hO0mJzBf4uuIuvA8CUp3esCRFWmFwgC++gwOtKEmvlYAuBVFAh6MDiCV/BGIjoUD3Hs/n\n6ONuAPCYZD+Et3F8ptTNmRW02Kcd39jiahP2HTgsKTwOpy8Eb8qc8YTKwqGC+N/YlloylLApijgM\nRahFVe82XA+IqvjCJuwpShDO///1OTYjNKwCaokxtuC/MoWDkGRNt9fpIoqmhM0Iid7qsQ+C4QvB\noQQJBD9FB0H4JQCQVIDCAs0kl9UJSBGH4gcoFKoQDpsAYhv0hG+dHzpdxxESVnWIVGBB+OUMh2O2\nSDIhkJAIbAMDwdAAoDNY+e8bMUcJxuGYWHXPJr0TKM9p91XIDOXzmBmE+nmOn8e4KwBQ0TScGq9I\nkdUAwU/UpFe38BO1aFggAEtCwQOBq8AbEjvZUtvYfgHfaeJK2O4MBRMCS5VRmUkiJWRBBfwCDg5h\nV9Lk8lCYWWhFfpAYhMQ6S0NBut5hB75gFUvhynDwhEQN389UlwCga52kiz42wxS1+mDpGmNvSHA1\npCBf1WZd4XKAWaRUKC0JhRX7Dh4Q0vVMKeDLf3iW8FaKl4YDCgk+hzg3WKWRlkJBuy4SrSl41hW7\nQsENAYQEMkia98MghKNjVal7rjC72uxRQwz4Ym9uihIEtFi7bGF1GIJTDRxEEPyAhg4H1NgqlZYa\nrc2XS5TgUYN1D5Qa/rxwKwBzraOGeOn9Exxq0ACgq9coUDQX8W7MhnDTnTSQGqz7njTFD7gvWDtb\nSwxxGIJSPPERDaA+qAYEa4dbG/lb767DASBl8NdLoeBZ0vfsQt97nyVBDWgEKplrWDebsla0PSdo\nhDuVwAFYILw3ovOcASOmwpl7r83ehc86t9BzWl4wUq4E5o/X/8gN6BRvaMbreiBI6lgKYFoJHzXw\n97nzppTvMJgum3/q9qQ9EDTz+/k7cxogPGC8EJaHwCUQFBAWnODs+CUAlkNwwPB85t998+pOGO63\n+StvY74AyK03tH/a0572tKc97WlPQ+0/AQYALf6OfNkZY7AAAAAASUVORK5CYII=" transform="matrix(0.9846 0 0 0.9908 -11.6 -3.6)"/>\n  <polygon fill="#FFFFFF" points="20,18 10,50 20,82 30,50"/>\n  <polygon fill="#C1272D" points="10,50 20,18 30,50"/>\n  <polygon fill="#D1D1D1" points="30,50 20,82 10,50"/>\n</svg>\n'));
            _.nk(new _.Px(_.J(c, 5)), a('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="100px" viewBox="0 0 40 100">\n  <image overflow="visible" opacity="0.75" width="65" height="109" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABtCAYAAAD+mQwIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA\nGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB4dJREFUeNrsnItu4zoMRPVK//97\n17Z0b4B4wXI5JPWwi11YgJG2SZPoaDikJNshPO1pT3va0572NKHFuz6otdbzeS3G+G9A6Oz4jwGJ\nP9B56zPb3TDiTZ33/K05gSyHES8GEJXPsiA07bmVIOJFAKSfRyEgGMtAxAsBRAVCdPhBMx6XgYg3\nAIiGIoKhAPp4CYiyECICEAEMDwRklpE8F/8fjCkQZVIFwRj595GcikAj34BffAOhpNZLleAZeQ2E\nBEECUBXF/O78e1BG1VAmVWABSAKEaECQFIBgUBDDaigLvSAIAJIAIgkq4p3lKqif/6taRhlVQ1mg\nggAUgI7zeQ1CJaMbAIjGPn9YDWWBCiwA+XMk9jwKh0oO/poKjPU3gBE1lAUqCMroZwYhC/4gGeH7\nOJR0WpXs0q2GslgFEQAoDAQNCdqx9un82clDMUPY2V41lEUqsAAUQRVRiPkz7g/heZ41JBBD3lAu\n9oLCDgohAQg7eL4pIKy1iHkIrDoMDhhZgPAif9MgpA+IaNQPDYx6t0GWThXEzoxAAbzI7wjCITxH\nDTORNIkKr26DnC2bLRVkAoCCyEJHTwi70KnKlCKBuG7uoBhiECZKWVHCF4OQAQQJTgUgkEl2hURZ\nYIjREQpf5JGHRCCp0QuhGmHRFRJlQShofkDD4ItByGwED5IZpFA4Pv9zgILr8vWE2OEFUlagEF4C\nhLOjmamDAjgEEJo3uEOidC6cRKNUzooSaFi8BE/goUABlI9KsjAZi7MhUToU0FMuF0ENXywksuAJ\nmXxpWjwVBkJSw23La976QDNGbo68RpBSJgdhqaErJIozNUZlzpCMKvElKOEFlKBB2IX5RwJq6AqJ\nckEoaMbI6wWuhMh+f3d8AxMwzRMunUpbKvAYowWBq+BFQPTAmDNGEAre5TMtJF6saNIg7KzzXgBi\nSGi+UAZ2pnpDoTA/+FIgBEEF0nQcDUBVQgIqokxkBs/skYKQJlKJFEs7M8ldmHQhY4wzFeRMikyG\nL1ggzo7xNcMqpEVpUSYrALp8oQz4wUidUJQpNYVwquA0wxfwgwyW8od8oXT6AYKTwcJqUYyShwM3\nxQLeayZVioooC/0ggUWVAo4XM8bA5goFAEjK7tbtnqCtJXhAZBYOHEJ2KCCBlet4FYSoFEvRqBlQ\nMZWYTK2lek8IdBdNZXD0PaGRjYoyCxD4TDE5j2jMcVRzLI6Oj9YLCaw78jQXWGbIYB+zp/PRWBNt\nEIKyv+DZfUL1QzKUcjbP6HtU6aoSNSVYK8qhIywieER5vQKviWBHG50CdHl2QBsyHpUk8LfgHN2o\nbAZNtRSuadqXj05lhYmR7oKTLgLQW4X2Km2JAq6EYJ2E2Rx/Q+8ThPdE36Hd4QnWlwxKRy0Qnue7\nO+tVQnOQ9X75Ch6l10in6/CfLUjDUL5BcGxeSpKUOlCNfcTZQwPiGVRXODTF1JoxonTniP9Mt9Ok\ncxMO8P8SgDoYJkNT6eY8pC98KAc9v0h7LQKiwYAm6V1U6Q0FS7oWBLquSDdbDkEdkmJQZkHZZjo7\nWGFwKJ2hO0mJzBf4uuIuvA8CUp3esCRFWmFwgC++gwOtKEmvlYAuBVFAh6MDiCV/BGIjoUD3Hs/n\n6ONuAPCYZD+Et3F8ptTNmRW02Kcd39jiahP2HTgsKTwOpy8Eb8qc8YTKwqGC+N/YlloylLApijgM\nRahFVe82XA+IqvjCJuwpShDO///1OTYjNKwCaokxtuC/MoWDkGRNt9fpIoqmhM0Iid7qsQ+C4QvB\noQQJBD9FB0H4JQCQVIDCAs0kl9UJSBGH4gcoFKoQDpsAYhv0hG+dHzpdxxESVnWIVGBB+OUMh2O2\nSDIhkJAIbAMDwdAAoDNY+e8bMUcJxuGYWHXPJr0TKM9p91XIDOXzmBmE+nmOn8e4KwBQ0TScGq9I\nkdUAwU/UpFe38BO1aFggAEtCwQOBq8AbEjvZUtvYfgHfaeJK2O4MBRMCS5VRmUkiJWRBBfwCDg5h\nV9Lk8lCYWWhFfpAYhMQ6S0NBut5hB75gFUvhynDwhEQN389UlwCga52kiz42wxS1+mDpGmNvSHA1\npCBf1WZd4XKAWaRUKC0JhRX7Dh4Q0vVMKeDLf3iW8FaKl4YDCgk+hzg3WKWRlkJBuy4SrSl41hW7\nQsENAYQEMkia98MghKNjVal7rjC72uxRQwz4Ym9uihIEtFi7bGF1GIJTDRxEEPyAhg4H1NgqlZYa\nrc2XS5TgUYN1D5Qa/rxwKwBzraOGeOn9Exxq0ACgq9coUDQX8W7MhnDTnTSQGqz7njTFD7gvWDtb\nSwxxGIJSPPERDaA+qAYEa4dbG/lb767DASBl8NdLoeBZ0vfsQt97nyVBDWgEKplrWDebsla0PSdo\nhDuVwAFYILw3ovOcASOmwpl7r83ehc86t9BzWl4wUq4E5o/X/8gN6BRvaMbreiBI6lgKYFoJHzXw\n97nzppTvMJgum3/q9qQ9EDTz+/k7cxogPGC8EJaHwCUQFBAWnODs+CUAlkNwwPB85t998+pOGO63\n+StvY74AyK03tH/a0572tKc97WlPQ+0/AQYALf6OfNkZY7AAAAAASUVORK5CYII=" transform="matrix(0.9846 0 0 0.9908 -11.6 -3.6)"/>\n  <polygon fill="#FFFFFF" points="20,18 10,50 20,82 30,50"/>\n  <polygon fill="#E53935" points="10,50 20,18 30,50"/>\n  <polygon fill="#D1D1D1" points="30,50 20,82 10,50"/>\n</svg>\n'));
            _.nk(new _.Px(_.J(c, 6)), a('<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="100px" viewBox="0 0 30 100">\n  <path fill="#666" d="M24.84,69.76L24,58l-4.28,2.34C18.61,57.09,18,53.62,18,50c0-6.17,1.75-11.93,4.78-16.82l-2.5-1.66C16.94,36.88,15,43.21,15,50c0,4.14,0.72,8.11,2.04,11.79L13,64l7.7,5.13L25,72L24.84,69.76z"/>\n</svg>\n'));
            _.nk(new _.Px(_.J(c, 7)), a('<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="100px" viewBox="0 0 30 100">\n  <path fill="#B1B1B1" d="M24.84,69.76L24,58l-4.28,2.34C18.61,57.09,18,53.62,18,50c0-6.17,1.75-11.93,4.78-16.82l-2.5-1.66C16.94,36.88,15,43.21,15,50c0,4.14,0.72,8.11,2.04,11.79L13,64l7.7,5.13L25,72L24.84,69.76z"/>\n</svg>\n'));
            _.nk(new _.Px(_.J(c, 8)), a('<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="100px" viewBox="0 0 30 100">\n  <path fill="#E4E4E4" d="M24.84,69.76L24,58l-4.28,2.34C18.61,57.09,18,53.62,18,50c0-6.17,1.75-11.93,4.78-16.82l-2.5-1.66C16.94,36.88,15,43.21,15,50c0,4.14,0.72,8.11,2.04,11.79L13,64l7.7,5.13L25,72L24.84,69.76z"/>\n</svg>\n'));
            _.zC(this.l, [c])
        }
    };
    HK.prototype.mapSize_changed = function() {
        IK(this)
    };
    HK.prototype.disableDefaultUI_changed = function() {
        IK(this)
    };
    HK.prototype.panControl_changed = function() {
        IK(this)
    };
    _.wj(QK, _.T);
    QK.prototype.release = function() {
        for (var a = _.Ca(this.B), b = a.next(); !b.done; b = a.next()) _.S.removeListener(b.value);
        this.B.length = 0
    };
    var PK = [{
        Wj: -52,
        close: -78,
        top: -86,
        backgroundColor: "#fff"
    }, {
        Wj: 0,
        close: -26,
        top: -86,
        backgroundColor: "#222"
    }];
    RK.prototype.add = function(a) {
        this.j.appendChild(a);
        a.style.position = "absolute";
        a = {
            element: a
        };
        this.l.push(a);
        a.dg = _.S.addListener(a.element, "resize", (0, _.z)(this.m, this, a));
        this.m(a)
    };
    RK.prototype.remove = function(a) {
        this.j.removeChild(a);
        JJ(this.l, (0, _.z)(function(b, c) {
            b.element == a && (this.l.splice(c, 1), b && (this.m(b), b.dg && (_.S.removeListener(b.dg), delete b.dg)))
        }, this))
    };
    RK.prototype.m = function(a) {
        a.width = _.Uk(a.element.getAttribute("controlWidth"));
        a.height = _.Uk(a.element.getAttribute("controlHeight"));
        a.width || (a.width = a.element.offsetWidth);
        a.height || (a.height = a.element.offsetHeight);
        var b = 0;
        _.C(this.l, function(h) {
            var k = h.element;
            _.Zw(k) && "hidden" != k.style.visibility && (b = Math.max(b, h.width))
        });
        var c = 0,
            d = this.B,
            e = !1;
        this.A(function(h) {
            var k = h.element;
            _.Zw(k) && "hidden" != k.style.visibility && (e ? c += d : e = !0, k = k.style, k.left = _.V((b - h.width) / 2), k.top = _.V(c), c += h.height)
        });
        a = this.j;
        var f = b,
            g = c;
        a.setAttribute("controlWidth", f);
        a.setAttribute("controlHeight", g);
        _.Ww(this.j, f || g);
        _.S.trigger(this.j, "resize")
    };
    _.UB('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#666666;}</style><title>My Location 4</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n');
    _.UB('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#333333;}</style><title>My Location 5</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n');
    _.UB('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#111111;}</style><title>My Location 6</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n');
    _.UB('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#B3B3B3;}</style><title>My Location 3</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 10v11H-1V-1h22v11z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n');
    _.UB('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{fill:#E6E6E6;}</style><title>My Location 2</title><path class="st0" d="M10 3h2V0h-2v3zm9 9h3v-2h-3v2zM0 12h3v-2H0v2zm10 10h2v-3h-2v3z"/><path class="st0" d="M11 18c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7m0-16c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9"/><path class="st0" d="M11 7c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4"/></svg>\n');
    _.UB('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#FFFFFF;}</style><title>My Location 1</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n');
    _.UB('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#4285F4;}</style><title>My Location Blue 1</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n');
    _.UB('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#3367D6;}</style><title>My Location Blue 2</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n');
    _.UB('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#2A56C6;}</style><title>My Location Blue 3</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n');
    _.A(TK, _.T);
    TK.prototype.changed = function(a) {
        if ("url" != a)
            if (this.get("pano")) c = this.get("pov"), b = this.get("position"), c && b && (a = _.hI(c, b, this.get("pano"), this.j), this.set("url", a));
            else {
                a = {};
                if (c = this.get("center")) c = new _.R(c.lat(), c.lng()), a.ll = c.toUrlValue();
                c = this.get("zoom");
                _.M(c) && (a.z = c);
                c = this.get("mapTypeId");
                "terrain" == c ? b = "p" : "hybrid" == c ? b = "h" : b = _.Yr[c];
                b && (a.t = b);
                if (c = this.get("pano")) {
                    a.z = 17;
                    a.layer = "c";
                    var b = this.get("position");
                    b && (a.cbll = b.toUrlValue());
                    a.panoid = c;
                    var c = this.get("pov");
                    c && (a.cbp =
                        "12," + c.heading + ",," + Math.max(c.zoom - 3) + "," + -c.pitch)
                }
                a.hl = _.Bc(_.Cc(_.K));
                a.gl = _.I(_.Cc(_.K), 1);
                45 == this.get("tilt") && (a.deg = this.get("heading") || 0);
                a.mapclient = _.vg[35] ? "embed" : "apiv3";
                var d = [];
                _.Jc(a, function(e, f) {
                    d.push(e + "=" + f)
                });
                this.set("url", this.j + "?" + d.join("&"))
            }
    };
    UK.prototype.getDiv = _.oa("m");
    UK.prototype.setUrl = function(a) {
        a ? (this.l.setAttribute("href", a), this.l.setAttribute("title", "Open this area in Google Maps (opens a new window)")) : (this.l.removeAttribute("title"), this.l.removeAttribute("href"))
    };
    _.wj(ZK, _.T);
    _.wj(bL, _.T);
    bL.prototype.Ga = _.oa("j");
    _.A(fL, _.T);
    _.A(gL, _.T);
    _.A(hL, _.T);
    _.A(jL, _.T);
    jL.prototype.l = function() {
        var a = this.j;
        a.timeout && (window.clearTimeout(a.timeout), a.timeout = null)
    };
    jL.prototype.active_changed = function() {
        this.l();
        if (this.get("active")) kL(this);
        else {
            var a = this.j;
            a.listeners && (_.C(a.listeners, _.S.removeListener), a.listeners = null);
            _.Xw(a)
        }
    };
    _.wj(oL, _.T);
    _.wj(qL, _.T);
    qL.prototype.mapSize_changed = function() {
        rL(this)
    };
    qL.prototype.display_changed = function() {
        rL(this)
    };
    _.A(sL, _.T);
    sL.prototype.changed = function(a) {
        if (!this.j)
            if ("mapTypeId" == a) {
                a = this.get("mapTypeId");
                var b = this.l[a];
                b && b.mapTypeId && (a = b.mapTypeId);
                tL(this, "internalMapTypeId", a);
                b && b.Jd && tL(this, b.Jd, b.value)
            } else uL(this)
    };
    _.wj(xL, _.T);
    xL.prototype.D = function() {
        var a = +this.get("heading") || 0;
        this.set("heading", (a + 270) % 360)
    };
    xL.prototype.H = function() {
        this.m = !this.m;
        this.set("tilt", this.m ? 45 : 0)
    };
    _.A(yL, _.T);
    var CL = {},
        jN = CL[0] = {};
    jN.backgroundColor = "#fff";
    jN.fh = "#e6e6e6";
    var kN = CL[1] = {};
    kN.backgroundColor = "#222";
    kN.fh = "#1a1a1a";
    _.wj(DL, _.T);
    _.A(EL, _.T);
    EL.prototype.getDiv = _.oa("j");
    _.A(GL, _.T);
    _.p = GL.prototype;
    _.p.hide_changed = function() {
        var a = !this.get("hide");
        _.Ww(this.j, a);
        this.Of();
        a && _.fx()
    };
    _.p.Of = function() {
        this.set("width", _.Cg(this.l).width)
    };
    _.p.mapTypeId_changed = function() {
        "streetview" == this.get("mapTypeId") && (_.kI(this.j), this.m.style.color = "#fff")
    };
    _.p.fontLoaded_changed = GL.prototype.Of;
    _.p.getDiv = _.oa("j");
    _.A(KL, _.T);
    _.p = KL.prototype;
    _.p.fontLoaded_changed = KL.prototype.size_changed = function() {
        JL(this)
    };
    _.p.attributionText_changed = function() {
        _.Iw(this.B, LL(this));
        JL(this)
    };
    _.p.Yf = function() {
        this.A = IL(this);
        JL(this)
    };
    _.p.rmiWidth_changed = KL.prototype.Yf;
    _.p.tosWidth_changed = KL.prototype.Yf;
    _.p.scaleWidth_changed = KL.prototype.Yf;
    _.p.hide_changed = function() {
        var a = !this.get("hide");
        _.Ww(this.j, a);
        a && _.fx()
    };
    _.p.mapTypeId_changed = function() {
        "streetview" == this.get("mapTypeId") && _.kI(this.D)
    };
    _.p.getDiv = _.oa("j");
    _.A(QL, _.T);
    QL.prototype.visible_changed = function() {
        this.get("visible") ? (_.fx(), _.Yw(this.j)) : _.Xw(this.j)
    };
    QL.prototype.attributionText_changed = function() {
        var a = this.get("attributionText") || "";
        _.Vw(this.l, a);
        a || _.Xw(this.j)
    };
    QL.prototype.size_changed = function() {
        PL(this)
    };
    _.A(RL, _.T);
    RL.prototype.attributionText_changed = function() {
        var a = this.get("attributionText") || "";
        _.Cm(this.l, a)
    };
    RL.prototype.hide_changed = function() {
        var a = !this.get("hide");
        _.Ww(this.j, a);
        a && _.fx()
    };
    RL.prototype.getDiv = _.oa("j");
    _.A(SL, _.T);
    _.A(TL, _.T);
    TL.prototype.floors_changed = function() {
        var a = this.get("floorId"),
            b = this.get("floors"),
            c = this.m;
        if (1 < _.L(b)) {
            _.Yw(c);
            _.C(this.j, function(g) {
                _.Kl(g)
            });
            this.j = [];
            for (var d = b.length, e = d - 1; 0 <= e; --e) {
                var f = _.W("div", c);
                b[e].mf == a ? (f.style.color = "#aaa", f.style.fontWeight = "bold", f.style.backgroundColor = "#333") : (UL(this, f, b[e].Il), f.style.color = "#999", f.style.fontWeight = "400", f.style.backgroundColor = "#222");
                f.style.padding = "5px";
                e == d - 1 ? QJ(f, _.V(_.oI(this.l))) : 0 == e && RJ(f, _.V(_.oI(this.l)));
                _.Bm(b[e].lj, f);
                f.setAttribute("title", b[e].description);
                this.j.push(f)
            }
            setTimeout(function() {
                _.S.trigger(c, "resize")
            })
        } else _.Xw(c)
    };
    _.wj(YL, _.T);
    YL.prototype.D = function() {
        1 == this.get("mode") && this.set("mode", 2)
    };
    YL.prototype.F = function() {
        2 == this.get("mode") && this.set("mode", 1)
    };
    var fM = '<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M35.16,40.25c-0.04,0-0.09-0.01-0.13-0.02c-1.06-0.28-4.04-1.01-5.03-1.01c-0.88,0-3.66,0.64-4.66,0.89\n    c-0.19,0.05-0.38-0.02-0.51-0.17c-0.12-0.15-0.15-0.35-0.07-0.53l4.78-10.24c0.08-0.17,0.25-0.29,0.45-0.29\n    c0.14,0,0.37,0.11,0.45,0.28l5.16,10.37c0.09,0.18,0.06,0.39-0.06,0.54C35.45,40.19,35.3,40.25,35.16,40.25z M30,38.22\n    c0.9,0,2.96,0.47,4.22,0.78l-4.21-8.46l-3.9,8.36C27.3,38.62,29.2,38.22,30,38.22z"/>\n  <path fill="#3F3F3F" d="M25.22,39.62c0,0,3.64-0.9,4.78-0.9c1.16,0,5.16,1.03,5.16,1.03L30,29.39L25.22,39.62z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M34.82,41.4c-0.21,0-0.39-0.13-0.47-0.32c-0.58-1.56-1.42-3.02-1.79-3.13c-0.42-0.13-2.39,0.7-4.22,1.77\n    c-0.21,0.12-0.48,0.08-0.63-0.11c-0.16-0.18-0.16-0.45-0.01-0.64L35.9,29c0.14-0.17,0.38-0.23,0.58-0.14\n    c0.2,0.09,0.33,0.3,0.3,0.52l-1.46,11.59c-0.03,0.23-0.21,0.41-0.44,0.43C34.85,41.39,34.83,41.4,34.82,41.4z M32.51,36.94\n    c0.13,0,0.24,0.01,0.34,0.04c0.62,0.19,1.24,1.13,1.7,2.05l1.02-8.07l-5.54,6.74C30.93,37.29,31.87,36.94,32.51,36.94z"/>\n  <path fill="#3F3F3F" d="M34.82,40.9c0,0-1.09-3.12-2.11-3.43c-1.02-0.31-4.62,1.82-4.62,1.82l8.2-9.97\n    C36.29,29.32,34.82,40.9,34.82,40.9z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.95,33.64,41.84,27.19,30.6,27.19z M30.48,55.03\n    c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M35.45,41.88c-0.04,0-0.08,0-0.12-0.01c-0.18-0.04-0.32-0.18-0.36-0.36c-0.12-0.44-0.52-1.68-1-2.16\n    c-0.31-0.31-2.4-0.5-4.56-0.42c-0.25,0.02-0.46-0.16-0.51-0.4c-0.05-0.24,0.08-0.48,0.3-0.57l13.95-5.63\n    c0.22-0.09,0.47-0.01,0.6,0.18s0.12,0.45-0.04,0.62l-7.88,8.59C35.73,41.82,35.59,41.88,35.45,41.88L35.45,41.88z M31.9,37.94\n    c1.16,0.07,2.34,0.26,2.77,0.69c0.44,0.44,0.78,1.19,1,1.77l5.81-6.33C41.48,34.07,31.9,37.94,31.9,37.94z"/>\n  <path fill="#3F3F3F" d="M35.45,41.38c0,0-0.38-1.63-1.13-2.39c-0.75-0.75-4.93-0.57-4.93-0.57l13.95-5.63L35.45,41.38L35.45,41.38z\n    "/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M34.92,42.6c-0.11,0-0.22-0.04-0.32-0.11c-0.15-0.12-0.21-0.31-0.17-0.49c0-0.01,0.17-0.84-0.01-1.83\n    c-0.08-0.43-1.23-1.06-2.26-1.39c-0.23-0.07-0.37-0.29-0.35-0.53c0.02-0.24,0.21-0.42,0.44-0.45l15.03-1.64\n    c0.24-0.03,0.47,0.13,0.54,0.37c0.06,0.24-0.06,0.49-0.28,0.59l-12.42,5.44C35.06,42.59,34.99,42.6,34.92,42.6L34.92,42.6z\n     M34.19,38.6c0.58,0.36,1.1,0.82,1.21,1.39c0.09,0.49,0.11,0.95,0.1,1.32l8.65-3.79L34.19,38.6L34.19,38.6z"/>\n  <path fill="#3F3F3F" d="M34.92,42.1c0,0,0.22-0.92-0.01-2.03c-0.22-1.04-2.6-1.78-2.6-1.78l15.03-1.64L34.92,42.1z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M33.69,43.9c-0.19,0-0.36-0.1-0.45-0.27c-0.1-0.19-0.06-0.42,0.08-0.57c0.01-0.01,0.76-0.81,1.19-1.75\n    c0.29-0.63-0.76-1.38-0.77-1.39c-0.19-0.13-0.26-0.38-0.18-0.59s0.3-0.34,0.53-0.32l14.81,1.91c0.25,0.03,0.44,0.24,0.44,0.5\n    c0,0.25-0.19,0.46-0.44,0.5l-15.16,1.99C33.73,43.89,33.71,43.9,33.69,43.9L33.69,43.9z M35.32,40.17c0.25,0.46,0.36,1,0.11,1.55\n    c-0.17,0.37-0.38,0.73-0.59,1.03l10.13-1.33L35.32,40.17z"/>\n  <path fill="#3F3F3F" d="M33.69,43.4c0,0,0.81-0.86,1.28-1.89c0.47-1.03-0.94-2.01-0.94-2.01l14.81,1.91L33.69,43.4L33.69,43.4z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M47.73,45.15l-15.9-0.08c-0.22,0-0.42-0.15-0.48-0.37s0.03-0.45,0.23-0.56c0.66-0.39,2.48-1.56,2.96-2.25\n    c0.57-0.8,0.71-2.24,0.71-2.26c0.01-0.16,0.1-0.3,0.24-0.38c0.14-0.08,0.3-0.09,0.45-0.03l11.98,4.97c0.22,0.09,0.35,0.33,0.3,0.56\n    C48.18,44.99,47.97,45.15,47.73,45.15z M33.51,44.09l11.68,0.06l-9.04-3.75c-0.11,0.59-0.34,1.45-0.79,2.08\n    C35,42.98,34.22,43.59,33.51,44.09L33.51,44.09z"/>\n  <path fill="#3F3F3F" d="M31.84,44.58c0,0,2.46-1.47,3.12-2.39c0.66-0.93,0.8-2.5,0.8-2.5l11.98,4.97\n    C47.74,44.66,31.84,44.58,31.84,44.58z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.95,33.64,41.84,27.19,30.6,27.19z M30.48,55.03\n    c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M45.08,48.74c-0.04,0-0.08,0-0.11-0.01l-14.45-3.4c-0.22-0.05-0.38-0.25-0.39-0.48\n    c0-0.23,0.15-0.43,0.37-0.49c0.86-0.24,3.23-0.97,3.87-1.51c0.63-0.53,1.11-1.63,1.25-2.01c0.05-0.15,0.18-0.27,0.33-0.31\n    c0.16-0.04,0.32-0.01,0.45,0.09l8.99,7.24c0.18,0.15,0.24,0.4,0.14,0.61C45.45,48.63,45.27,48.74,45.08,48.74L45.08,48.74z\n     M32.53,44.77l10.53,2.48l-6.76-5.44c-0.26,0.54-0.7,1.31-1.28,1.8C34.53,44.01,33.47,44.44,32.53,44.77z"/>\n  <path fill="#3F3F3F" d="M30.63,44.83c0,0,3.19-0.88,4.06-1.61c0.87-0.73,1.4-2.22,1.4-2.22l8.99,7.24L30.63,44.83z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M40.4,52.96c-0.09,0-0.18-0.02-0.26-0.07l-12.27-7.33c-0.19-0.12-0.29-0.35-0.22-0.56\n    c0.06-0.22,0.26-0.37,0.48-0.37c1.18,0.01,4.24-0.05,5.06-0.32c0.68-0.22,1.74-1.35,2.26-2.02c0.11-0.14,0.28-0.21,0.45-0.19\n    s0.32,0.13,0.4,0.29l4.55,9.86c0.09,0.2,0.04,0.43-0.12,0.58C40.64,52.92,40.52,52.96,40.4,52.96z M29.9,45.6l9.36,5.6l-3.54-7.68\n    c-0.55,0.61-1.42,1.47-2.21,1.73C32.83,45.48,31.2,45.57,29.9,45.6L29.9,45.6z"/>\n  <path fill="#3F3F3F" d="M28.13,45.13c0,0,4.14,0.01,5.22-0.35c1.08-0.35,2.5-2.18,2.5-2.18l4.55,9.86L28.13,45.13z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.95,33.64,41.84,27.19,30.6,27.19L30.6,27.19z M30.48,55.03\n    c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M31.05,54.8c-0.18,0-0.35-0.1-0.43-0.25l-5.83-10.24c-0.1-0.17-0.08-0.38,0.03-0.54\n    c0.12-0.16,0.31-0.23,0.51-0.19c1.16,0.25,4.37,0.89,5.26,0.89c0.98,0,3.52-0.73,4.42-1.01c0.18-0.05,0.39,0,0.52,0.14\n    s0.17,0.34,0.1,0.52l-4.11,10.37c-0.07,0.18-0.24,0.3-0.43,0.31L31.05,54.8L31.05,54.8z M26.2,44.77l4.76,8.37l3.34-8.44\n    c-1.1,0.31-2.84,0.76-3.73,0.76C29.77,45.46,27.55,45.04,26.2,44.77z"/>\n  <path fill="#3F3F3F" d="M25.22,44.06c0,0,4.29,0.9,5.43,0.9c1.16,0,4.5-1.03,4.5-1.03L31.04,54.3L25.22,44.06z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M20.55,52.96c-0.12,0-0.24-0.04-0.33-0.13c-0.16-0.15-0.21-0.38-0.12-0.58l4.55-9.86\n    c0.07-0.16,0.22-0.27,0.4-0.29c0.17-0.02,0.35,0.05,0.45,0.19c0.37,0.48,1.49,1.76,2.26,2.02c0.82,0.27,3.93,0.32,5.06,0.32\n    c0.22,0,0.42,0.15,0.48,0.37s-0.03,0.45-0.22,0.56l-12.27,7.33C20.73,52.94,20.64,52.96,20.55,52.96L20.55,52.96z M25.23,43.52\n    l-3.54,7.68l9.36-5.6c-1.3-0.04-2.93-0.12-3.6-0.35C26.65,45,25.77,44.13,25.23,43.52L25.23,43.52z"/>\n  <path fill="#3F3F3F" d="M32.81,45.13c0,0-4.14,0.01-5.22-0.35c-1.08-0.35-2.5-2.18-2.5-2.18l-4.55,9.86L32.81,45.13z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M15.86,48.74c-0.19,0-0.36-0.11-0.45-0.28c-0.1-0.21-0.05-0.46,0.14-0.61l9-7.24\n    c0.12-0.1,0.29-0.14,0.45-0.09c0.16,0.04,0.28,0.16,0.33,0.31c0,0.01,0.5,1.37,1.25,2.01c0.64,0.54,3.01,1.28,3.87,1.51\n    c0.22,0.06,0.37,0.26,0.37,0.49s-0.16,0.42-0.39,0.48l-14.45,3.4C15.93,48.73,15.9,48.74,15.86,48.74z M24.65,41.8l-6.76,5.44\n    l10.53-2.48c-0.94-0.33-2-0.75-2.49-1.16C25.35,43.11,24.91,42.34,24.65,41.8L24.65,41.8z"/>\n  <path fill="#3F3F3F" d="M30.31,44.83c0,0-3.19-0.88-4.06-1.61c-0.87-0.73-1.4-2.22-1.4-2.22l-8.99,7.24L30.31,44.83L30.31,44.83z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.95,33.64,41.84,27.19,30.6,27.19z M30.48,55.03\n    c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M13.21,45.15c-0.24,0-0.44-0.17-0.49-0.4c-0.05-0.23,0.08-0.47,0.3-0.56L25,39.22\n    c0.15-0.06,0.31-0.05,0.45,0.03s0.23,0.22,0.24,0.38c0,0.01,0.14,1.46,0.71,2.26c0.49,0.69,2.31,1.86,2.96,2.25\n    c0.19,0.12,0.29,0.34,0.23,0.56s-0.26,0.37-0.48,0.37C29.11,45.07,13.21,45.15,13.21,45.15z M24.79,40.39l-9.04,3.75l11.68-0.06\n    c-0.71-0.5-1.49-1.11-1.85-1.61C25.14,41.85,24.91,40.98,24.79,40.39z"/>\n  <path fill="#3F3F3F" d="M29.11,44.58c0,0-2.46-1.47-3.12-2.39c-0.66-0.93-0.8-2.5-0.8-2.5l-11.98,4.97L29.11,44.58L29.11,44.58z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M27.25,43.9h-0.06l-15.16-1.99c-0.25-0.03-0.44-0.25-0.44-0.5s0.19-0.46,0.44-0.5L26.84,39\n    c0.21-0.03,0.45,0.1,0.53,0.32s0.01,0.46-0.18,0.59c-0.01,0.01-1.05,0.76-0.77,1.39c0.43,0.94,1.18,1.75,1.19,1.75\n    c0.14,0.15,0.18,0.38,0.08,0.57C27.61,43.79,27.44,43.9,27.25,43.9L27.25,43.9z M15.97,41.41l10.13,1.33\n    c-0.2-0.3-0.42-0.65-0.59-1.02c-0.25-0.55-0.14-1.09,0.11-1.55L15.97,41.41z"/>\n  <path fill="#3F3F3F" d="M27.25,43.4c0,0-0.81-0.86-1.28-1.89s0.94-2.01,0.94-2.01L12.1,41.41L27.25,43.4L27.25,43.4z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.2c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.95,33.65,41.84,27.2,30.6,27.2z M30.48,55.04c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.04,30.48,55.04z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.51" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M26.02,42.6c-0.07,0-0.14-0.01-0.2-0.04L13.4,37.12c-0.23-0.1-0.35-0.35-0.28-0.59\n    c0.06-0.24,0.3-0.4,0.54-0.37l15.03,1.64c0.24,0.03,0.42,0.21,0.44,0.45s-0.12,0.45-0.35,0.53c-1.03,0.33-2.18,0.96-2.26,1.39\n    c-0.19,1.01-0.02,1.82-0.01,1.83c0.04,0.18-0.03,0.37-0.17,0.49C26.25,42.57,26.13,42.6,26.02,42.6L26.02,42.6z M16.79,37.52\n    l8.65,3.79c-0.01-0.37,0.01-0.82,0.1-1.32c0.1-0.56,0.63-1.03,1.21-1.39L16.79,37.52L16.79,37.52z"/>\n  <path fill="#3F3F3F" d="M26.02,42.1c0,0-0.22-0.92,0.01-2.03c0.22-1.04,2.6-1.78,2.6-1.78L13.6,36.65L26.02,42.1L26.02,42.1z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.2c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.95,33.65,41.84,27.2,30.6,27.2z M30.48,55.04c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.04,30.48,55.04z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.51" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M25.49,41.88c-0.14,0-0.27-0.06-0.37-0.16l-7.88-8.59c-0.16-0.17-0.18-0.43-0.04-0.62\n    c0.13-0.19,0.38-0.26,0.6-0.18l13.95,5.63c0.22,0.09,0.35,0.33,0.3,0.57s-0.25,0.41-0.51,0.4c-2.16-0.08-4.25,0.11-4.56,0.42\n    c-0.49,0.49-0.89,1.73-1,2.16c-0.05,0.18-0.19,0.31-0.36,0.36C25.57,41.88,25.53,41.88,25.49,41.88z M19.47,34.08l5.81,6.33\n    c0.21-0.58,0.55-1.33,1-1.77c0.43-0.43,1.61-0.62,2.77-0.69C29.05,37.95,19.47,34.08,19.47,34.08z"/>\n  <path fill="#3F3F3F" d="M25.49,41.38c0,0,0.38-1.63,1.13-2.39c0.75-0.75,4.93-0.57,4.93-0.57L17.6,32.79L25.49,41.38z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.2c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.95,33.65,41.84,27.2,30.6,27.2z M30.48,55.04c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.04,30.48,55.04z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.51" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M25.49,41.88c-0.21,0-0.4-0.13-0.47-0.33l-4.3-11.67c-0.08-0.21,0-0.45,0.18-0.58s0.44-0.12,0.61,0.03\n    l10.37,8.71c0.16,0.14,0.22,0.36,0.15,0.56c-0.08,0.2-0.26,0.31-0.49,0.32c-2.16-0.08-4.25,0.11-4.56,0.42\n    c-0.49,0.49-0.89,1.73-1,2.16c-0.05,0.21-0.24,0.36-0.46,0.37C25.51,41.88,25.5,41.88,25.49,41.88z M22.31,31.3l3.17,8.6\n    c0.2-0.46,0.47-0.94,0.79-1.27c0.58-0.58,2.47-0.71,3.89-0.73L22.31,31.3z"/>\n  <path fill="#3F3F3F" d="M25.49,41.38c0,0,0.38-1.63,1.13-2.39c0.75-0.75,4.93-0.57,4.93-0.57l-10.37-8.71L25.49,41.38L25.49,41.38z"/>\n</svg>\n'.split(";"),
        eM = '<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#333333" d="M34.25,23.78h-8.51c-0.42,0-0.8-0.26-0.94-0.66s-0.02-0.84,0.3-1.11l0.64-0.53\n    c-1.12-1.12-1.77-2.65-1.77-4.25c0-3.3,2.69-5.99,5.98-5.99c1.6,0,3.1,0.63,4.23,1.76s1.75,2.64,1.75,4.24\n    c0,1.45-0.53,2.84-1.49,3.94c-0.03,0.05-0.06,0.09-0.1,0.14l-0.13,0.13l-0.03,0.03L34.86,22c0.34,0.26,0.48,0.71,0.34,1.12\n    C35.06,23.51,34.68,23.78,34.25,23.78z M29.49,21.78h0.93c0.08-0.33,0.33-0.6,0.68-0.71c0.09-0.03,0.17-0.06,0.25-0.1l0.12-0.05\n    c0.25-0.11,0.45-0.21,0.64-0.34c0.01-0.01,0.08-0.05,0.09-0.06c0.16-0.11,0.31-0.24,0.45-0.37c0.01-0.01,0.09-0.08,0.1-0.09\n    l0.05-0.05c0.02-0.02,0.03-0.04,0.05-0.06c0.71-0.75,1.1-1.72,1.1-2.74c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.75-1.17-2.81-1.17\n    C27.79,13.21,26,15,26,17.2c0,1.3,0.64,2.52,1.71,3.27c0.05,0.03,0.09,0.07,0.13,0.11c0.3,0.19,0.64,0.35,1,0.46\n    C29.16,21.18,29.41,21.45,29.49,21.78z"/>\n  <path fill="#333333" d="M33.97,43.59h-3.04c-0.45,0-0.84-0.3-0.96-0.72c-0.12,0.42-0.51,0.72-0.96,0.72h-3\n    c-0.55,0-0.99-0.44-1-0.99l-0.13-9.18l-0.38,0.97c-0.3,0.71-1.04,1.08-1.79,0.89l-1.01-0.33c-0.74-0.27-1.13-1.03-0.94-1.78\n    c0-0.01,0-0.02,0.01-0.02c0.06-0.22,2.59-9.54,2.59-9.54c0.23-0.93,1.04-1.66,1.95-1.79c0.08-0.02,0.17-0.03,0.26-0.03h8.84\n    c0.06,0,0.15,0.01,0.22,0.02c0.96,0.11,1.8,0.83,2.04,1.79c2.15,8.31,2.42,9.38,2.46,9.53c0.2,0.78-0.14,1.5-0.83,1.75l-1.08,0.35\n    c-0.8,0.21-1.55-0.16-1.84-0.85l-0.28-0.73l-0.13,8.96C34.97,43.15,34.52,43.59,33.97,43.59z M31.87,41.59h1.12l0.19-13.22\n    c0.01-0.48,0.35-0.88,0.82-0.97c0.47-0.08,0.93,0.17,1.11,0.62l0.09,0.23l1.86,4.92h0.01c-0.48-1.88-2.34-9.09-2.34-9.09\n    c-0.04-0.16-0.21-0.29-0.33-0.29c-0.03,0-0.06,0-0.09-0.01h-8.6c-0.03,0-0.07,0.01-0.1,0.01c-0.09,0-0.26,0.13-0.31,0.32\n    c-1.6,5.91-2.22,8.19-2.47,9.08l2.06-5.18c0.18-0.44,0.64-0.7,1.11-0.61c0.47,0.09,0.81,0.49,0.82,0.97L27,41.59h1.08l0.48-6.92\n    c0.06-0.79,0.65-1.34,1.43-1.34c0.6,0,1.32,0.36,1.4,1.34L31.87,41.59z M22.7,33.66c0.01-0.01,0.01-0.02,0.01-0.04\n    C22.71,33.64,22.7,33.65,22.7,33.66z"/>\n  <path fill="#CE592C" d="M25.74,22.78l0.9-0.75h6.62l0.99,0.75"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.95" cy="22.37" rx="2.25" ry="0.3"/>\n  <path fill="#FDBF2D" d="M38.15,33.37c0-0.01-2.46-9.53-2.46-9.53c-0.15-0.6-0.72-1.05-1.31-1.05H25.6c-0.59,0-1.13,0.49-1.28,1.08\n    c0,0-2.59,9.54-2.59,9.55c-0.06,0.24,0.04,0.49,0.29,0.58l0.94,0.31c0.25,0.06,0.51-0.05,0.61-0.29l2.24-5.65l0.2,14.21h3\n    l0.55-7.85c0.02-0.21,0.13-0.41,0.44-0.41s0.38,0.2,0.39,0.41l0.54,7.85h3.04l0.2-14.21l2.12,5.61c0.1,0.23,0.36,0.35,0.61,0.29\n    l1.04-0.34C38.18,33.85,38.21,33.6,38.15,33.37z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M34.17,28.38l0.08-5.6h0.17l0.48,5.44l0.45,3.13 M25.81,28.38\n    l-0.08-5.59h-0.17c0,0-0.31,4.2-0.48,5.43c-0.17,1.24-0.45,3.13-0.45,3.13L25.81,28.38z"/>\n  <ellipse fill="#FDBF2D" cx="29.95" cy="17.23" rx="4.98" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M30.35,21.74c-1.18,0.11-2.31-0.06-3.3-0.44\n    c0.94,0.68,2.12,1.04,3.36,0.92c1.27-0.12,2.38-0.71,3.19-1.59C32.69,21.23,31.57,21.63,30.35,21.74z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M34.56,41.4c-0.21,0-0.39-0.13-0.47-0.32c-0.58-1.56-1.42-3.02-1.79-3.13c-0.41-0.13-2.39,0.7-4.22,1.77\n    c-0.21,0.12-0.48,0.08-0.63-0.11c-0.16-0.18-0.16-0.45-0.01-0.64l8.2-9.97c0.14-0.17,0.38-0.23,0.58-0.14\n    c0.2,0.09,0.33,0.3,0.3,0.52l-1.46,11.59c-0.03,0.23-0.21,0.41-0.44,0.43C34.59,41.39,34.57,41.4,34.56,41.4z M32.25,36.94\n    c0.13,0,0.24,0.01,0.34,0.04c0.62,0.19,1.23,1.13,1.7,2.05l1.02-8.07l-5.53,6.74C30.67,37.29,31.61,36.94,32.25,36.94z"/>\n  <path fill="#3F3F3F" d="M34.56,40.9c0,0-1.09-3.12-2.11-3.43s-4.62,1.82-4.62,1.82l8.2-9.97L34.56,40.9z"/>\n  <path fill="#333333" d="M33.37,43.7c-0.18,0-0.35-0.03-0.5-0.09c-0.22-0.06-1.1-0.23-1.82-0.37l-0.22-0.07\n    c-0.28-0.12-0.59-0.39-0.77-0.8c-0.34,0.29-0.41,0.31-0.51,0.36c-0.28,0.12-0.55,0.11-0.69,0.09l-0.29-0.06\n    c-0.38-0.09-2.08-0.44-2.08-0.44l-0.3-0.11c-0.31-0.18-0.65-0.58-0.7-1.17c-0.01-0.12-0.19-3.18-0.42-6.75\n    c-0.14,0.27-0.36,0.54-0.7,0.72c-0.42,0.22-0.91,0.24-1.45,0.06c-1.69-0.54-1.41-1.97-1.3-2.51c0.02-0.09,0.04-0.18,0.05-0.27\n    c0.02-0.12,0.46-2.45,0.68-3.37c0.14-0.58,0.68-3.38,0.89-4.48c0.03-0.36,0.23-1.64,1.31-2.31c0.35-0.22,0.78-0.47,1.15-0.68\n    c-1.08-1.1-1.72-2.6-1.71-4.22c0-1.6,0.62-3.11,1.75-4.24c1.12-1.13,2.62-1.75,4.21-1.75h0.01c1.59,0,3.09,0.63,4.21,1.76\n    s1.74,2.64,1.74,4.24c0,1.43-0.5,2.77-1.37,3.82l0.47,0.01c0.33,0.01,0.65,0.15,0.88,0.39s0.35,0.56,0.34,0.89l-0.02,0.46\n    c0.28,0.37,0.48,0.82,0.55,1.27c0.01,0.01,0.49,2.04,0.89,4.51c0.3,1.87,0.67,4.54,0.75,5.23c0.13,0.8-0.27,1.48-0.98,1.67\n    c-0.28,0.11-0.97,0.31-1.5,0.23c-0.04-0.01-0.08-0.01-0.13-0.02l-0.17,5.13c0.03,0.22,0.01,0.45-0.01,0.65\n    c-0.05,0.52-0.42,1.1-1.09,1.72l-0.13,0.29l-0.45,0.12C33.74,43.67,33.54,43.7,33.37,43.7z M28.51,42.73l0.05,0.02L28.51,42.73z\n     M31.9,41.37c0.71,0.13,1.11,0.22,1.36,0.28c0.16-0.16,0.29-0.31,0.35-0.41l0.3-9.24l1.97-0.19l0.44,1.92\n    c0.01,0,0.03-0.01,0.04-0.01c-0.11-0.83-0.39-2.88-0.7-4.81c-0.39-2.39-0.87-4.42-0.87-4.44c-0.04-0.24-0.15-0.44-0.27-0.55\n    l-0.35-0.31l0.02-0.57l-2.71-0.08l-0.29-1.95c1.62-0.54,2.71-2.07,2.71-3.79c0-1.07-0.41-2.07-1.16-2.83\n    c-0.75-0.75-1.74-1.17-2.79-1.17c-1.06,0-2.05,0.41-2.79,1.16C26.41,15.13,26,16.14,26,17.21c0,1.65,0.98,3.11,2.5,3.72l-0.4,1.93\n    l-0.81-0.02c-0.38,0.21-1.12,0.64-1.68,0.98c-0.25,0.15-0.36,0.61-0.37,0.8l-0.02,0.12c-0.03,0.16-0.73,3.88-0.92,4.64\n    c-0.16,0.65-0.45,2.15-0.58,2.86c0.27-0.72,0.71-1.94,1.1-3.21l1.95,0.23c0.28,4.41,0.6,9.68,0.69,11.21\n    c0.73,0.15,1.15,0.24,1.4,0.3c0.09-0.07,0.18-0.16,0.27-0.23l0.11-4.79l1.99-0.1C31.7,39.55,31.85,40.88,31.9,41.37L31.9,41.37z\n     M36.83,33.58c-0.02,0.01-0.04,0.01-0.06,0.02C36.79,33.6,36.81,33.59,36.83,33.58z"/>\n  <path fill="#FABD2C" d="M22.66,32.44c-0.12,0.73-0.42,1.35,0.57,1.67c0.97,0.31,1.03-0.53,1.15-0.79c0,0,0.79-2.02,1.44-4.14\n    c0,0,0.9-3.69,0.98-4.14c0.26-1.66-0.41-2.27-1.17-2.21c-0.56,0.04-1.2,0.38-1.38,1.75c0,0-0.72,3.85-0.91,4.58\n    C23.11,30.06,22.66,32.44,22.66,32.44z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M25.67,29.87l-0.2-7.11l-0.41,0.31c0,0,0.06,5.4-0.11,6.64\n    s-0.45,3.13-0.45,3.13L25.67,29.87z"/>\n  <path fill="none" d="M27.03,22.08h8.2v20.56h-8.2C27.03,42.64,27.03,22.08,27.03,22.08z"/>\n  <path fill="#E58A2C" d="M35.23,22.08l-6.16,0.37l-2.04,0.32l0.51,18.03l1.43,1.03l0.19-0.02L30.1,41l0.19-8.22l0.24-0.77\n    l1.25,10.05l1.87,0.57c0,0,0.9-0.77,0.95-1.24c0.04-0.44,0-0.47,0-0.47L35.23,22.08"/>\n  <path fill="none" d="M25.39,22.74h8.31V42.7h-8.31V22.74z"/>\n  <path fill="#FABD2C" d="M25.39,22.74l1.1,18.22c0.02,0.27,0.2,0.37,0.2,0.37s2.11,0.44,2.2,0.48h0.28c0,0-0.13-0.04-0.14-0.23\n    c-0.02-0.19,0.27-7.59,0.27-7.59c0.02-0.37,0.12-0.52,0.36-0.53c0.24,0.01,0.35,0.11,0.4,0.76c0,0,0.85,7.05,0.87,7.48\n    s0.31,0.57,0.31,0.57s1.86,0.34,1.99,0.41c0.03,0.02,0.08,0.02,0.13,0.02c0.14,0,0.32-0.05,0.32-0.05s0.03-0.04,0.02-0.32\n    c-0.1-3.46,0.46-4.14-0.04-19.32L25.39,22.74"/>\n  <path fill="none" d="M25.42,21.84h9.81v1.19h-9.81C25.42,23.03,25.42,21.84,25.42,21.84z"/>\n  <path fill="#CE592C" d="M27.03,21.84l-1.61,0.9l8.25,0.29l1.56-0.95L27.03,21.84"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.92" cy="22.37" rx="2.25" ry="0.3"/>\n  <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.93,21.74c-1.19,0-2.3-0.27-3.24-0.75\n    c0.87,0.77,2.01,1.24,3.26,1.24c1.28,0,2.44-0.49,3.32-1.28C32.31,21.45,31.16,21.74,29.93,21.74z"/>\n  <path fill="#FABD2C" d="M33.99,26.06c0.1,1.59,0.92,5.97,0.92,5.97l0.54,2.33c0.08,0.24,0.27,0.33,0.62,0.38\n    c0.35,0.05,1.09-0.21,1.09-0.21c0.23-0.06,0.29-0.3,0.25-0.55c0,0-0.35-2.72-0.75-5.23c-0.4-2.46-0.89-4.51-0.89-4.51\n    c-0.1-0.61-0.59-1.29-1.17-1.34c0,0-0.69,0-0.71,1.06C33.86,25.08,33.99,26.06,33.99,26.06z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M34.41,22.95c-0.2,0.08-0.5,0.32-0.52,1.01\n    c-0.03,1.12,0.1,2.1,0.1,2.1c0.09,1.36,0.7,4.73,0.87,5.7l0.01,0.05C34.88,31.81,34.3,26.32,34.41,22.95z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.68,33.64,41.57,27.19,30.33,27.19z M30.21,55.03\n    c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M35.19,41.88c-0.04,0-0.08,0-0.12-0.01c-0.18-0.04-0.32-0.18-0.36-0.36c-0.12-0.44-0.52-1.68-1-2.16\n    c-0.31-0.31-2.39-0.5-4.56-0.42c-0.22,0.02-0.46-0.16-0.51-0.4c-0.05-0.24,0.08-0.48,0.3-0.57l13.95-5.63\n    c0.22-0.09,0.47-0.01,0.6,0.18s0.12,0.45-0.04,0.62l-7.88,8.59C35.47,41.82,35.33,41.88,35.19,41.88L35.19,41.88z M31.64,37.94\n    c1.16,0.07,2.34,0.26,2.77,0.69c0.44,0.44,0.78,1.19,1,1.77l5.81-6.33L31.64,37.94z"/>\n  <path fill="#3F3F3F" d="M35.19,41.38c0,0-0.38-1.63-1.13-2.39c-0.75-0.75-4.93-0.57-4.93-0.57l13.95-5.63L35.19,41.38L35.19,41.38z\n    "/>\n  <path fill="#333333" d="M32.56,44.49c-0.09,0-0.17-0.01-0.26-0.03c-0.21-0.02-0.37-0.08-0.48-0.14c-0.12-0.06-1.39-0.8-1.6-0.93\n    c-0.39-0.2-0.81-0.67-0.84-1.41c0-0.03-0.01-0.08-0.02-0.16c-0.12,0.04-0.25,0.09-0.37,0.14c-0.11,0.09-0.25,0.16-0.4,0.18\n    c-0.04,0.01-0.14,0.02-0.26,0.03c-0.09,0.01-0.19,0.01-0.28-0.01c-0.11-0.01-0.21-0.04-0.31-0.08s-0.18-0.07-1.57-1.03\n    c-0.24-0.13-0.59-0.54-0.63-1.13c-0.01-0.12-0.2-3.22-0.42-6.77c-0.2-0.32-0.25-0.65-0.28-0.83c-0.04-0.17-0.47-2.07-0.78-4.08\n    c-0.06-0.64-0.34-3.56-0.34-3.99c-0.02-1.62,0.64-2.32,1.14-2.61c0.14-0.12,0.32-0.19,0.5-0.21l0.28-0.08\n    c-1.06-1.11-1.65-2.58-1.65-4.11c0-1.6,0.62-3.11,1.74-4.24c1.12-1.13,2.62-1.76,4.22-1.76h0.01c1.59,0,3.09,0.62,4.21,1.75\n    c1.13,1.13,1.75,2.64,1.75,4.24c0,1.59-0.64,3.12-1.78,4.25l0.9,0.19c0.44,0.09,0.77,0.47,0.8,0.92c0.01,0.14-0.01,0.28-0.06,0.41\n    l-0.06,0.99c0.16,0.45,0.21,0.98,0.14,1.59c0,0-0.07,3.73-0.07,4.47c0.01,0.92,0.11,3.37,0.11,3.37l0.01,0.13\n    c0.02,0.41,0.08,1.51-0.88,2.08l-0.36,6.17c0,0.22-0.04,0.79-0.41,1.3c-0.25,0.34-0.87,0.97-0.99,1.1\n    C33.08,44.39,32.82,44.49,32.56,44.49L32.56,44.49z M31.36,41.75c0.23,0.13,0.63,0.37,0.95,0.55c0.15-0.16,0.28-0.31,0.33-0.38\n    c0.01-0.02,0.03-0.08,0.03-0.11l0.4-6.94c0.03-0.46,0.36-0.84,0.81-0.92c0.01,0,0.02,0,0.04-0.01c0-0.08,0-0.19-0.01-0.27\n    l-0.01-0.16c0,0-0.1-2.5-0.11-3.44c-0.01-0.76,0.07-4.6,0.07-4.6c0.05-0.53-0.01-0.76-0.06-0.88c-0.07-0.15-0.11-0.32-0.1-0.49\n    l0.04-0.65l-2.43-0.5c-0.44-0.09-0.77-0.47-0.8-0.92c-0.03-0.45,0.25-0.86,0.68-1.01l0.11-0.04c0.04-0.01,0.08-0.03,0.12-0.04\n    c0.06-0.02,0.11-0.05,0.17-0.08l0.11-0.06c0.13-0.06,0.26-0.13,0.37-0.2c0.06-0.04,0.13-0.09,0.19-0.14\n    c0.07-0.05,0.12-0.09,0.16-0.12c0.02-0.03,0.05-0.05,0.08-0.07c0.9-0.77,1.41-1.87,1.41-3.03c0-1.07-0.41-2.07-1.16-2.83\n    c-0.75-0.75-1.74-1.16-2.79-1.16c-1.06,0-2.05,0.42-2.8,1.17C26.41,15.18,26,16.18,26,17.25c0,1.15,0.49,2.21,1.37,2.99\n    c0.03,0.02,0.05,0.05,0.08,0.07l0.12,0.09c0,0,0.08,0.06,0.09,0.07c0.06,0.05,0.11,0.09,0.17,0.13c0.11,0.07,0.22,0.12,0.33,0.18\n    l0.14,0.08c0.35,0.2,0.58,0.61,0.53,1.01c-0.02,0.16-0.07,0.31-0.15,0.45c0.13,0.17,0.21,0.39,0.21,0.62c0,0.3-0.14,0.59-0.37,0.78\n    s-0.54,0.27-0.83,0.21l-1.31-0.27c-0.14-0.03-0.27-0.09-0.38-0.17c-0.02-0.01-0.04-0.03-0.05-0.04c-0.02-0.02-0.04-0.03-0.06-0.05\n    c0,0-0.01,0-0.02,0.01c-0.02,0.03-0.15,0.27-0.14,0.85c0,0.24,0.17,2.1,0.33,3.77c0.29,1.87,0.72,3.76,0.73,3.78\n    s0.02,0.11,0.04,0.2c0,0.03,0.01,0.06,0.01,0.09c0.16,0.17,0.26,0.39,0.27,0.63c0.2,3.16,0.37,6.03,0.42,6.86\n    c0.22,0.15,0.53,0.36,0.77,0.52c0.04-0.02,0.09-0.03,0.14-0.05l0.28-3.18c0.04-0.51,0.46-0.9,0.97-0.91\n    c0.56-0.02,0.95,0.36,1.02,0.86C31.19,40.33,31.33,41.39,31.36,41.75L31.36,41.75z M27.24,39.36c0.01,0.01,0.04,0.03,0.1,0.07\n    C27.3,39.41,27.27,39.38,27.24,39.36z"/>\n  <path fill="#E58A2C" d="M34.79,22.64l-4.46-0.83c0,0-2.42,0.35-2.43,0.35l-0.46,17.98l0.78,1.03c0,0,1.02-0.38,1.1-0.41\n    s0.07-0.18,0.07-0.18l0.66-7.54l1.46,9.74l1.04,0.7c0,0,0.68-0.69,0.89-0.98c0.24-0.33,0.22-0.73,0.22-0.73L34.79,22.64\n    L34.79,22.64z"/>\n  <path fill="#FABD2C" d="M34.9,33.46c0.02,0.57,0.16,1.3-0.85,1.48c-0.74,0.13-0.75-0.11-1.02-1.13c0,0-0.47-2.5-0.61-4.71\n    c0,0-0.18-3.31-0.14-3.76c0.12-1.66,0.91-2.11,1.64-1.87c0.53,0.17,1.08,0.65,0.94,2.01c0,0-0.08,3.82-0.07,4.58\n    C34.8,30.98,34.9,33.46,34.9,33.46L34.9,33.46z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M34.9,33.46c0.04,1.16-0.68,1.07-0.93,0.87\n    c-0.63-0.5-0.71-5.21-0.82-6.64c-0.07-0.97,0.09-3.4,0.4-4.17c0.55-0.21,1.04,0.42,1.09,0.51c0.19,0.31,0.29,0.77,0.22,1.45\n    c0,0-0.08,3.82-0.07,4.58C34.8,30.98,34.9,33.46,34.9,33.46L34.9,33.46z"/>\n  <path fill="#E58A2C" d="M27.47,31.45c0.01,0.67,0.2,1.27-0.73,1.43c-0.91,0.15-0.86-0.61-0.93-0.87c0,0-0.45-1.92-0.75-3.91\n    c0,0-0.33-3.44-0.33-3.85c-0.02-1.52,0.66-1.99,1.35-1.84c0.5,0.11,1.03,0.5,1.01,1.75c0,0,0.15,3.56,0.21,4.24\n    C27.38,29.24,27.47,31.45,27.47,31.45z"/>\n  <path fill="#FABD2C" d="M31.67,23.71l-6.17-1.29c0,0-0.05,0.01-0.04,0.09c0.13,1.5,1.07,17.08,1.09,17.34\n    c0.02,0.27,0.19,0.37,0.19,0.37s1.3,0.89,1.39,0.93s0.27,0,0.27,0s-0.13-0.04-0.14-0.23c-0.02-0.19,0.3-7.46,0.3-7.46\n    c0.01-0.37,0.11-0.52,0.36-0.53c0.24,0,0.29,0.15,0.31,0.53c0,0,1.14,8.05,1.15,8.48s0.31,0.56,0.31,0.56s1.47,0.86,1.59,0.92\n    s0.3,0.01,0.3,0.01s-0.22-0.01-0.22-0.3C32.36,42.94,31.67,23.71,31.67,23.71L31.67,23.71z"/>\n  <path fill="#FABD2C" d="M31.67,23.71l-6.17-1.29c0,0-0.05,0.01-0.04,0.09c0.13,1.5,1.07,17.08,1.09,17.34\n    c0.02,0.27,0.19,0.37,0.19,0.37s1.3,0.89,1.39,0.93s0.27,0,0.27,0s-0.13-0.04-0.14-0.23c-0.02-0.19,0.3-7.46,0.3-7.46\n    c0.01-0.37,0.11-0.52,0.36-0.53c0.24,0,0.29,0.15,0.31,0.53c0,0,1.14,8.05,1.15,8.48s0.31,0.56,0.31,0.56s1.47,0.86,1.59,0.92\n    s0.3,0.01,0.3,0.01s-0.22-0.01-0.22-0.3C32.36,42.94,31.67,23.71,31.67,23.71L31.67,23.71z"/>\n  <path fill="#CE592C" d="M25.54,22.42l6.13,1.29l3.16-1.07l-5.88-1.2"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="30" cy="22.41" rx="2.25" ry="0.43"/>\n  <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.98,21.74c1.19,0,2.3-0.27,3.24-0.75\n    c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.6,21.45,28.75,21.74,29.98,21.74z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M34.67,42.6c-0.11,0-0.22-0.04-0.32-0.11c-0.15-0.12-0.21-0.31-0.17-0.49c0-0.01,0.17-0.84-0.01-1.83\n    c-0.08-0.43-1.23-1.06-2.26-1.39c-0.23-0.07-0.37-0.29-0.35-0.53s0.21-0.42,0.44-0.45l15.03-1.64c0.25-0.03,0.47,0.13,0.54,0.37\n    c0.06,0.24-0.06,0.49-0.28,0.59l-12.42,5.44C34.8,42.59,34.73,42.6,34.67,42.6L34.67,42.6z M33.94,38.6\n    c0.58,0.36,1.1,0.82,1.21,1.39c0.09,0.49,0.11,0.95,0.1,1.32l8.65-3.79L33.94,38.6L33.94,38.6z"/>\n  <path fill="#3F3F3F" d="M34.66,42.1c0,0,0.22-0.92-0.01-2.03c-0.22-1.04-2.6-1.78-2.6-1.78l15.03-1.64\n    C47.08,36.65,34.66,42.1,34.66,42.1z"/>\n  <path fill="#333333" d="M30.91,44.46c-0.27,0-0.53-0.09-0.73-0.26c-0.04-0.03-0.12-0.1-0.95-0.95c-0.19-0.18-0.48-0.57-0.5-1.26\n    c0-0.03,0-0.1-0.01-0.25c-0.05,0.01-0.08,0.02-0.08,0.02c-0.48,0.12-0.79-0.01-0.98-0.13c-0.11-0.07-0.16-0.1-1.07-1.09\n    c-0.06-0.05-0.36-0.38-0.38-1.01c-0.01-0.18-0.22-4.03-0.44-8.03c-0.21-0.74-0.57-2.07-0.78-3.42c-0.06-0.64-0.34-3.56-0.34-3.99\n    c-0.01-1.1,0.27-1.91,0.85-2.41c0.09-0.08,0.19-0.15,0.29-0.2C24.65,20.35,24,18.82,24,17.23c0-1.6,0.62-3.11,1.74-4.24\n    c1.12-1.13,2.62-1.76,4.22-1.76h0.01c1.59,0,3.09,0.62,4.21,1.75c1.13,1.13,1.75,2.64,1.75,4.24c0,1.64-0.68,3.21-1.88,4.35\n    c0,0,0,0.01-0.01,0.01l0.33,0.09c0.46,0.13,0.76,0.56,0.73,1.04l-0.31,4.05c-0.1,2.32-0.12,3.1-0.12,3.34\n    c0.01,0.92,0.11,3.37,0.11,3.37l0.01,0.2c0.03,0.4,0.12,1.47-0.7,2.06l-0.51,6.67c0,0.4-0.26,1.09-0.99,1.46\n    c-0.49,0.25-0.98,0.42-1.2,0.49C31.22,44.43,31.07,44.46,30.91,44.46L30.91,44.46z M30.72,41.93c0.1,0.1,0.25,0.26,0.4,0.41\n    c0.14-0.05,0.29-0.12,0.45-0.2l0.55-7.13c0.03-0.4,0.3-0.74,0.67-0.87c0-0.09-0.01-0.21-0.02-0.29c-0.01-0.1-0.02-0.2-0.02-0.29\n    c0,0-0.1-2.5-0.11-3.44c0-0.38,0.04-1.52,0.12-3.48l0.25-3.26l-1.72-0.48c-0.42-0.12-0.72-0.5-0.73-0.93\n    c-0.01-0.44,0.26-0.83,0.67-0.98l0.19-0.06c0.05-0.02,0.11-0.05,0.17-0.08l0.11-0.06c0.13-0.06,0.26-0.13,0.37-0.2\n    c0.06-0.04,0.13-0.09,0.2-0.15c0.07-0.05,0.11-0.09,0.15-0.11c0.02-0.03,0.05-0.05,0.08-0.07c0.9-0.77,1.41-1.87,1.41-3.03\n    c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.74-1.16-2.79-1.16c-1.06,0-2.05,0.42-2.8,1.17C26.41,15.17,26,16.17,26,17.24\n    c0,1.15,0.49,2.21,1.37,2.99c0.03,0.02,0.05,0.05,0.08,0.07l0.22,0.16c0.05,0.04,0.11,0.09,0.16,0.12\n    c0.11,0.07,0.22,0.12,0.33,0.18l0.18,0.09c0.05,0.02,0.09,0.05,0.14,0.07l0.14,0.07c0.39,0.16,0.61,0.54,0.58,0.96\n    c-0.02,0.43-0.35,0.77-0.76,0.89l-1.23,0.36c-0.14,0.04-0.28,0.05-0.43,0.03c0,0.03-0.13,0.24-0.12,0.84c0,0.24,0.17,2.1,0.33,3.77\n    c0.19,1.25,0.55,2.55,0.74,3.21c0.02,0.07,0.04,0.15,0.04,0.23c0.33,6.01,0.42,7.66,0.44,8.06c0.07,0.08,0.16,0.17,0.25,0.27\n    l0.07-0.82c0.05-0.52,0.48-0.91,1-0.91h0.01c0.52,0,0.95,0.41,0.99,0.93C30.68,41.19,30.72,41.76,30.72,41.93L30.72,41.93z\n     M27.99,39.13l0.1,0.1L27.99,39.13z"/>\n  <path fill="#E58A2C" d="M28.59,31.34c0.06,0.52,0.36,1.3-0.56,1.51c-0.92,0.21-1.03-0.7-1.1-0.95c0,0-0.65-1.97-0.95-3.96\n    c0,0-0.33-3.44-0.33-3.85c-0.02-1.52,0.66-1.99,1.35-1.84c0.5,0.11,1.03,0.5,1.01,1.75c0,0,0.15,3.56,0.21,4.24\n    C28.3,29.09,28.59,31.34,28.59,31.34z"/>\n  <path fill="#E58A2C" d="M34.08,22.64l-4.31-1.2c0,0-3.41,1.02-3.43,1.02l0.98,17.31l1.04,1.03c0,0,0.81-0.22,0.91-0.26\n    c0.1-0.03,0.1-0.18,0.1-0.18l0.15-1.68l0.7,4.1l0.72,0.66c0,0,0.6-0.18,1.16-0.47c0.45-0.23,0.45-0.65,0.45-0.65L34.08,22.64\n    L34.08,22.64z"/>\n  <path fill="#FABD2C" d="M30.19,23.71l-3.89-1.29c0,0-0.03,0.01-0.03,0.09c0.08,1.5,0.91,16.72,0.92,16.99s0.12,0.37,0.12,0.37\n    s0.82,0.89,0.88,0.93s0.17,0,0.17,0s-0.08-0.04-0.09-0.23s0.38-7.48,0.38-7.48c0.01-0.37,0.07-0.52,0.23-0.53\n    c0.15,0,0.19,0.15,0.19,0.53c0,0,0.63,8.45,0.64,8.88c0.01,0.43,0.2,0.56,0.2,0.56s0.82,0.83,0.89,0.89\n    c0.08,0.06,0.19,0.01,0.19,0.01s-0.14-0.01-0.14-0.3C30.87,42.94,30.19,23.71,30.19,23.71z"/>\n  <path fill="#FABD2C" d="M30.19,23.71l-3.89-1.29c0,0-0.03,0.01-0.03,0.09c0.08,1.5,0.91,16.72,0.92,16.99s0.12,0.37,0.12,0.37\n    s0.82,0.89,0.88,0.93s0.17,0,0.17,0s-0.08-0.04-0.09-0.23s0.38-7.48,0.38-7.48c0.01-0.37,0.07-0.52,0.23-0.53\n    c0.15,0,0.19,0.15,0.19,0.53c0,0,0.63,8.45,0.64,8.88c0.01,0.43,0.2,0.56,0.2,0.56s0.82,0.83,0.89,0.89\n    c0.08,0.06,0.19,0.01,0.19,0.01s-0.14-0.01-0.14-0.3C30.87,42.94,30.19,23.71,30.19,23.71z"/>\n  <path fill="#CE592C" d="M26.3,22.42l3.89,1.29l3.89-1.07l-4.37-1.2"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.93" cy="22.4" rx="2.13" ry="0.52"/>\n  <path fill="#FABD2C" d="M33.76,33.53c0.02,0.57,0.27,1.45-0.76,1.59c-1.02,0.14-1.05-0.86-1.11-1.14c0,0-0.52-2.21-0.66-4.41\n    c0,0-0.03-3.78,0.01-4.23c0.12-1.66,0.91-2.11,1.64-1.87c0.53,0.17,1.08,0.65,0.94,2.01c0,0-0.18,3.89-0.18,4.64\n    C33.65,31.05,33.76,33.53,33.76,33.53z"/>\n  <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.98,21.74c1.19,0,2.3-0.27,3.24-0.75\n    c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.6,21.45,28.75,21.74,29.98,21.74z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M33.74,33.53c0.04,1.16-0.54,0.95-0.82,0.81\n    c-0.99-0.52-1.09-5.12-1.2-6.56c-0.07-0.97-0.16-3.58,0.78-4.26c0.55-0.21,1.04,0.42,1.09,0.51c0.19,0.31,0.29,0.77,0.22,1.45\n    c0,0-0.18,3.89-0.18,4.64C33.63,31.05,33.74,33.53,33.74,33.53z"/>\n</svg>\n;<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M33.43,43.9c-0.19,0-0.36-0.1-0.45-0.27c-0.1-0.19-0.06-0.42,0.08-0.57c0.01-0.01,0.76-0.81,1.19-1.75\n    c0.29-0.63-0.76-1.38-0.77-1.39c-0.19-0.13-0.26-0.38-0.18-0.59c0.08-0.21,0.3-0.34,0.53-0.32l14.81,1.91\n    c0.25,0.03,0.44,0.24,0.44,0.5c0,0.25-0.19,0.46-0.44,0.5l-15.16,1.99C33.47,43.89,33.45,43.9,33.43,43.9L33.43,43.9z M35.06,40.17\n    c0.25,0.46,0.36,1,0.11,1.55c-0.17,0.37-0.38,0.73-0.59,1.03l10.13-1.33C44.71,41.42,35.06,40.17,35.06,40.17z"/>\n  <path fill="#3F3F3F" d="M33.43,43.4c0,0,0.81-0.86,1.28-1.89c0.47-1.03-0.94-2.01-0.94-2.01l14.81,1.91L33.43,43.4L33.43,43.4z"/>\n  <path fill="#333333" d="M30.22,43.83c-0.55,0-1.15-0.05-1.58-0.22c-0.39-0.15-1.17-0.46-1.21-1.2l-1.97-19.66\n    c-0.03-0.33,0.1-0.66,0.36-0.88L26,21.73c-0.01-0.01-0.03-0.02-0.04-0.03c-0.05-0.05-0.1-0.1-0.14-0.16\n    c-1.16-1.13-1.83-2.68-1.83-4.29c0-1.6,0.62-3.11,1.74-4.24c1.12-1.13,2.62-1.76,4.22-1.76h0.01c1.59,0,3.09,0.62,4.21,1.75\n    s1.75,2.64,1.75,4.24c0,1.55-0.61,3.04-1.69,4.16c0.05,0.14,0.07,0.28,0.06,0.42c-0.1,1.48-1.1,20.03-1.11,20.22\n    c-0.01,0.18-0.07,0.36-0.17,0.51c-0.59,0.87-0.73,0.96-0.87,1.05c-0.16,0.1-0.39,0.21-0.72,0.18\n    C31.12,43.79,30.68,43.83,30.22,43.83L30.22,43.83z M29.42,42.22v0.02c0,0.04,0.01,0.08,0,0.12\n    C29.43,42.31,29.42,42.26,29.42,42.22L29.42,42.22z M29.37,41.74c0.24,0.09,0.98,0.11,1.71,0.04c0.04-0.05,0.07-0.1,0.11-0.15\n    c0.12-2.19,0.83-15.48,1.05-19.13c-0.39-0.09-0.69-0.42-0.75-0.81c-0.06-0.41,0.13-0.81,0.48-1.02l0.12-0.08\n    c0.06-0.04,0.12-0.09,0.19-0.14c0.07-0.05,0.12-0.09,0.15-0.12c0.02-0.03,0.05-0.05,0.08-0.07c0.9-0.77,1.41-1.87,1.41-3.03\n    c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.74-1.16-2.79-1.16c-1.06,0-2.05,0.42-2.8,1.17c-0.75,0.76-1.16,1.76-1.16,2.83\n    c0,1.15,0.49,2.21,1.36,2.99c0.03,0.02,0.05,0.05,0.07,0.07l0.21,0.16c0.06,0.04,0.11,0.09,0.17,0.13\n    c0.09,0.06,0.19,0.11,0.29,0.16c0.41,0.21,0.66,0.69,0.55,1.14c-0.07,0.31-0.27,0.56-0.53,0.69l-0.62,0.5L29.37,41.74L29.37,41.74z\n    "/>\n  <path fill="#FABD2C" d="M26.45,22.64l5.6-1.2c0,0,1.12,0.24,1.14,0.24l-1.43,20.54l-0.35,0.53c0,0-1.68,0.21-2.41-0.08\n    c-0.58-0.23-0.58-0.34-0.58-0.34L26.45,22.64z"/>\n  <path fill="#FABD2C" d="M32.52,22.7l0.73-1.06c0,0,0.04,0.01,0.03,0.09c-0.1,1.5-1.11,20.23-1.11,20.23s-0.47,0.7-0.58,0.76\n    c-0.1,0.06-0.25,0.01-0.25,0.01s0.18-0.01,0.18-0.3C31.53,42.24,32.52,22.7,32.52,22.7L32.52,22.7z"/>\n  <path opacity="0.5" fill="#CE592C" enable-background="new    " d="M32.52,22.7l0.73-1.06c0,0,0.04,0.01,0.03,0.09\n    c-0.1,1.5-1.11,20.23-1.11,20.23s-0.47,0.7-0.58,0.76c-0.1,0.06-0.25,0.01-0.25,0.01s0.18-0.01,0.18-0.3\n    C31.53,42.24,32.52,22.7,32.52,22.7L32.52,22.7z"/>\n  <path fill="#CE592C" d="M33.25,21.65l-0.73,1.05l-6.07-0.06l1.2-0.97"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="30" cy="22.01" rx="2.13" ry="0.52"/>\n  <path fill="#CE592C" d="M31.24,33.25c-0.13,0.72,0.11,1.68-1.06,1.87c-0.83,0.13-0.88-0.7-0.94-0.99c0,0-0.47-3.98-0.63-6.18\n    c0,0-0.23-3.69-0.01-4c0.37-0.52,0.92-0.63,1.45-0.49c0.61,0.17,1.52,0.64,1.36,2c0,0-0.01,3.9,0,4.66\n    C31.41,31.06,31.24,33.25,31.24,33.25L31.24,33.25z"/>\n  <path fill="#E58A2C" d="M30.64,33.53c0.02,0.57,0.31,1.45-0.87,1.59c-1.17,0.14-1.21-0.86-1.27-1.14c0,0-0.42-2.16-0.58-4.36\n    c0,0-0.21-3.83-0.17-4.28c0.14-1.66,1.05-2.11,1.88-1.87c0.61,0.17,1.24,0.65,1.08,2.01c0,0-0.03,3.94-0.02,4.69\n    C30.71,31.1,30.64,33.53,30.64,33.53z"/>\n  <path fill="#FABD2C" d="M30.64,33.53c0.02,0.57,0.3,1.41-0.87,1.59c-0.83,0.13-0.88-0.7-0.94-0.99c0,0-0.47-3.98-0.63-6.18\n    c0,0-0.23-3.69,0-4c0.37-0.52,0.92-0.63,1.45-0.49c0.61,0.17,1.24,0.65,1.08,2.01c0,0-0.03,3.94-0.02,4.69\n    C30.71,31.1,30.64,33.53,30.64,33.53L30.64,33.53z"/>\n  <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.97,21.74c1.19,0,2.3-0.27,3.24-0.75\n    c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.59,21.45,28.74,21.74,29.97,21.74z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <path opacity="0.3" enable-background="new    " d="M29.65,44.14l8.24-3.85l-4.47-2.69"/>\n  <path fill="#333333" d="M29.21,44.46c-0.16,0-0.31-0.03-0.46-0.09c-0.21-0.07-0.7-0.24-1.2-0.49c-0.74-0.37-1-1.07-1-1.54\n    l-0.51-6.63c-0.37-0.32-0.61-0.82-0.71-1.49c-0.02-0.11-0.54-2.33-0.68-4.59c-0.01-0.69-0.03-3.9,0.01-4.37\n    c0.05-0.67,0.2-1.24,0.45-1.69l-0.07-0.85c-0.04-0.48,0.27-0.91,0.73-1.04l0.14-0.04c-0.04-0.04-0.07-0.08-0.1-0.12\n    c-1.16-1.13-1.83-2.68-1.83-4.29c0-1.6,0.62-3.11,1.74-4.24c1.13-1.14,2.61-1.76,4.22-1.76c1.59,0,3.09,0.62,4.21,1.75\n    s1.74,2.64,1.75,4.24c0,1.59-0.64,3.11-1.77,4.24c0.05,0.02,0.09,0.03,0.14,0.06c0.36,0.18,0.6,0.64,0.58,1.04l-0.06,1.09\n    c0.01,0.12,0.01,0.24,0.01,0.37c0.04,0.92,0.16,3.59,0.21,4.13c0.08,0.84,0.37,3.06,0.37,3.06l0.03,0.19\n    c0.27,1.54-0.44,2.15-1.17,2.37c-0.17,3.07-0.31,5.61-0.31,5.76c-0.03,0.63-0.32,0.96-0.45,1.08c-0.85,0.93-0.9,0.96-1.02,1.04\n    c-0.26,0.17-0.61,0.22-0.96,0.12c-0.03-0.01-0.06-0.01-0.09-0.02C31.4,41.92,31.4,41.98,31.4,42c-0.01,0.69-0.31,1.08-0.5,1.26\n    c-0.83,0.85-0.91,0.91-0.95,0.95C29.73,44.38,29.47,44.46,29.21,44.46z M28.54,42.14c0.16,0.08,0.32,0.14,0.45,0.2\n    c0.15-0.15,0.3-0.31,0.4-0.41c0.01-0.17,0.04-0.69,0.22-3.12c0.04-0.52,0.47-0.92,0.99-0.93h0.01c0.52,0,0.95,0.39,1,0.91\n    l0.07,0.82c0.09-0.1,0.18-0.19,0.25-0.27c0.04-0.81,0.3-5.56,0.36-6.57c0.02-0.32,0.19-0.62,0.46-0.79\n    c0.21-0.13,0.46-0.18,0.7-0.14c-0.01-0.04-0.01-0.07-0.02-0.1c-0.02-0.1-0.03-0.19-0.04-0.28c0,0-0.29-2.27-0.38-3.12\n    c-0.07-0.7-0.21-4.15-0.21-4.3s-0.01-0.22-0.01-0.3V23.6l0.02-0.44l-1.25-0.36c-0.41-0.12-0.7-0.48-0.72-0.9s0.22-0.82,0.61-0.98\n    c0.04-0.02,0.07-0.04,0.11-0.06l0.15-0.08c0.13-0.06,0.25-0.13,0.37-0.2l0.21-0.15l0.14-0.1l0.08-0.08\n    c0.9-0.77,1.41-1.87,1.41-3.03c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.74-1.16-2.79-1.16c-1.06,0-2.05,0.42-2.8,1.17\n    c-0.75,0.76-1.16,1.76-1.16,2.83c0,1.15,0.49,2.21,1.36,2.99c0.03,0.02,0.05,0.05,0.07,0.07l0.22,0.16\n    c0.05,0.04,0.11,0.09,0.16,0.12c0.1,0.07,0.21,0.12,0.32,0.17l0.2,0.1c0.04,0.02,0.09,0.05,0.13,0.07c0.05,0.02,0.1,0.03,0.15,0.05\n    L28.76,21c0.42,0.14,0.7,0.53,0.69,0.97s-0.31,0.82-0.73,0.94l-1.6,0.45l0.03,0.37c0.02,0.25-0.06,0.5-0.21,0.7\n    c-0.06,0.08-0.22,0.34-0.27,0.96c-0.02,0.26-0.02,2.31,0,4.15c0.13,2.03,0.63,4.16,0.63,4.19c0.01,0.03,0.03,0.15,0.03,0.18\n    c0.01,0.05,0.02,0.16,0.04,0.24c0.36,0.14,0.61,0.47,0.64,0.86L28.54,42.14L28.54,42.14z M29.63,41.72\n    C29.62,41.72,29.62,41.72,29.63,41.72C29.62,41.72,29.62,41.72,29.63,41.72z M32.06,39.2c-0.03,0.02-0.05,0.04-0.06,0.07\n    C32.04,39.22,32.06,39.2,32.06,39.2z"/>\n  <path fill="#FABD2C" d="M34.38,31.34c0.06,0.52,0.36,1.3-0.56,1.51c-0.92,0.21-1.03-0.7-1.1-0.95c0,0-0.65-1.97-0.95-3.96\n    c0,0-0.33-3.44-0.33-3.85c-0.02-1.52,0.66-1.99,1.35-1.84c0.5,0.11,1.03,0.5,1.01,1.75c0,0,0.15,3.56,0.21,4.24\n    C34.09,29.09,34.38,31.34,34.38,31.34z"/>\n  <path fill="#CE592C" d="M34.38,31.34c0.06,0.52,0.36,1.3-0.56,1.51c-0.92,0.21-1.03-0.7-1.1-0.95c0,0-0.65-1.97-0.95-3.96\n    c0,0-0.33-3.44-0.33-3.85c-0.02-1.52,0.66-1.99,1.35-1.84c0.5,0.11,1.03,0.5,1.01,1.75c0,0,0.15,3.56,0.21,4.24\n    C34.09,29.09,34.38,31.34,34.38,31.34z"/>\n  <path fill="#FABD2C" d="M26.04,22.64l4.31-1.2c0,0,3.41,1.02,3.43,1.02L32.8,39.77l-1.04,1.03c0,0-0.81-0.22-0.91-0.26\n    c-0.1-0.03-0.1-0.18-0.1-0.18l-0.15-1.68l-0.7,4.1l-0.72,0.66c0,0-0.6-0.18-1.16-0.47c-0.45-0.23-0.45-0.65-0.45-0.65L26.04,22.64z\n    "/>\n  <path fill="#FABD2C" d="M29.92,23.71l3.89-1.29c0,0,0.03,0.01,0.03,0.09c-0.08,1.5-0.91,16.72-0.92,16.99s-0.12,0.37-0.12,0.37\n    s-0.82,0.89-0.88,0.93c-0.06,0.04-0.17,0-0.17,0s0.08-0.04,0.09-0.23s-0.38-7.48-0.38-7.48c-0.01-0.37-0.07-0.52-0.23-0.52\n    c-0.15,0-0.19,0.15-0.19,0.53c0,0-0.63,8.45-0.64,8.88s-0.2,0.56-0.2,0.56s-0.82,0.83-0.89,0.89c-0.08,0.06-0.19,0.01-0.19,0.01\n    s0.14-0.01,0.14-0.3C29.25,42.94,29.92,23.71,29.92,23.71z"/>\n  <path opacity="0.3" fill="#CE592C" enable-background="new    " d="M29.92,23.71l3.89-1.29c0,0,0.03,0.01,0.03,0.09\n    c-0.08,1.5-0.91,16.72-0.92,16.99s-0.12,0.37-0.12,0.37s-0.82,0.89-0.88,0.93c-0.06,0.04-0.17,0-0.17,0s0.08-0.04,0.09-0.23\n    s-0.38-7.48-0.38-7.48c-0.01-0.37-0.07-0.52-0.23-0.52c-0.15,0-0.19,0.15-0.19,0.53c0,0-0.63,8.45-0.64,8.88s-0.2,0.56-0.2,0.56\n    s-0.82,0.83-0.89,0.89c-0.08,0.06-0.19,0.01-0.19,0.01s0.14-0.01,0.14-0.3C29.25,42.94,29.92,23.71,29.92,23.71z"/>\n  <path fill="#CE592C" d="M33.82,22.42l-3.9,1.29l-3.88-1.07l4.36-1.2"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="30.19" cy="22.4" rx="2.13" ry="0.52"/>\n  <path fill="#CE592C" d="M25.92,25.66c0.04-1.67,0.72-2.46,1.44-2.22c0.81,0.27,1.29,1.03,1.21,2.4c0,0-0.07,3.73-0.03,4.48\n    c0.05,0.93,0.27,3.4,0.27,3.4c0.05,0.57,0.33,1.44-0.68,1.63c-0.22,0.04-0.39-0.01-0.53-0.12l-0.28-0.43c0,0-0.97-2.72-1.21-4.91\n    C26.11,29.87,25.91,26.11,25.92,25.66z"/>\n  <path fill="#FABD2C" d="M28.16,33.53c0.02,0.57,0.27,1.45-0.76,1.59c-1.02,0.14-1.05-0.86-1.11-1.14c0,0-0.52-2.21-0.66-4.41\n    c0,0-0.03-3.78,0.01-4.23c0.12-1.66,0.91-2.11,1.64-1.87c0.53,0.17,1.08,0.65,0.94,2.01c0,0-0.18,3.89-0.18,4.64\n    C28.06,31.05,28.16,33.53,28.16,33.53z"/>\n  <ellipse fill="#FABD2C" cx="29.94" cy="17.23" rx="4.96" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.96,21.74c1.19,0,2.3-0.27,3.24-0.75\n    c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.59,21.45,28.73,21.74,29.96,21.74z"/>\n  <path opacity="0.8" fill="#CE592C" enable-background="new    " d="M32.76,22.77l-0.94,4.66l-0.76-4.1"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M28.14,33.53c0.04,1.16-0.54,0.95-0.82,0.81\n    c-0.99-0.52-1.09-5.12-1.2-6.56c-0.07-0.97-0.16-3.58,0.78-4.26c0.55-0.21,1.04,0.42,1.09,0.51c0.19,0.31,0.29,0.77,0.22,1.45\n    c0,0-0.18,3.89-0.18,4.64C28.04,31.05,28.14,33.53,28.14,33.53L28.14,33.53z"/>\n  <path fill="#FFFFFF" d="M47.48,45.15C47.47,45.15,47.47,45.15,47.48,45.15l-15.9-0.08c-0.22,0-0.42-0.15-0.48-0.37\n    s0.03-0.45,0.23-0.56c0.66-0.39,2.48-1.56,2.96-2.25c0.57-0.8,0.71-2.24,0.71-2.26c0.01-0.16,0.1-0.3,0.24-0.38\n    c0.14-0.08,0.3-0.09,0.45-0.03l11.98,4.97c0.22,0.09,0.35,0.33,0.3,0.56C47.92,44.99,47.71,45.15,47.48,45.15z M33.25,44.09\n    l11.68,0.06l-9.04-3.75c-0.11,0.59-0.34,1.45-0.79,2.08C34.75,42.98,33.97,43.59,33.25,44.09L33.25,44.09z"/>\n  <path fill="#3F3F3F" d="M31.58,44.58c0,0,2.46-1.47,3.12-2.39c0.66-0.93,0.8-2.5,0.8-2.5l11.98,4.97L31.58,44.58z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.68,33.64,41.57,27.19,30.33,27.19z M30.21,55.03\n    c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#333333" d="M27.43,44.47c-0.26,0-0.52-0.09-0.7-0.28c-0.12-0.12-0.75-0.76-0.99-1.1c-0.37-0.51-0.41-1.07-0.41-1.3\n    l-0.38-6.47c-0.2-0.3-0.3-0.68-0.41-1.09l-0.05-0.17c-0.04-0.18-0.5-2.67-0.64-4.9c-0.04-0.8-0.18-3.42-0.14-3.9\n    c0.06-0.75,0.24-1.37,0.54-1.84l-0.03-0.52c-0.03-0.1-0.04-0.2-0.03-0.31c0.03-0.45,0.33-0.84,0.78-0.93l0.81-0.17\n    c-1.15-1.13-1.8-2.66-1.8-4.26c0-1.61,0.62-3.12,1.75-4.25c1.12-1.13,2.62-1.75,4.2-1.75h0.01c1.59,0,3.09,0.62,4.21,1.75\n    s1.74,2.64,1.75,4.24c0,1.52-0.59,2.98-1.63,4.09l0.37,0.11c0.06,0.01,0.11,0.02,0.16,0.04c0.47,0.15,0.77,0.59,0.74,1.09\n    c0.23,0.44,0.34,0.98,0.33,1.62c0.04,0.93,0.16,3.59,0.21,4.13c0.08,0.86,0.17,3.01,0.17,3.1v0.02c0,0.08,0.01,0.17,0.01,0.25\n    c0.03,0.51,0.1,1.83-1.44,2.16c-0.2,3.24-0.36,5.94-0.37,6.07c-0.04,0.61-0.39,1.02-0.7,1.19c-1.32,0.91-1.41,0.95-1.52,0.99\n    c-0.01,0.01-0.03,0.01-0.05,0.02c-0.19,0.09-0.39,0.11-0.61,0.06c-0.08-0.01-0.14-0.02-0.17-0.02c-0.16-0.03-0.31-0.1-0.43-0.19\n    c-0.11-0.04-0.23-0.09-0.34-0.13c-0.01,0.1-0.02,0.15-0.02,0.18c-0.02,0.72-0.45,1.19-0.84,1.4c-0.21,0.12-1.48,0.86-1.6,0.92\n    c-0.18,0.1-0.39,0.14-0.61,0.14h-0.01C27.52,44.47,27.47,44.47,27.43,44.47z M26.6,34.17c0.19,0.17,0.31,0.42,0.33,0.68l0.4,6.87\n    v0.12c0,0.01,0.01,0.07,0.03,0.09c0.05,0.07,0.18,0.22,0.33,0.38c0.32-0.18,0.72-0.42,0.95-0.55c0.03-0.33,0.16-1.33,0.66-4.95\n    c0.07-0.5,0.49-0.86,0.99-0.86h0.03c0.51,0.01,0.93,0.41,0.97,0.91l0.28,3.18c0.05,0.02,0.1,0.04,0.14,0.05\n    c0.22-0.15,0.55-0.38,0.76-0.52c0.05-0.82,0.22-3.69,0.42-6.86c0.02-0.37,0.25-0.7,0.6-0.85c0.25-0.11,0.53-0.11,0.78-0.01V31.8\n    c-0.01-0.1-0.01-0.21-0.01-0.31c-0.01-0.17-0.09-2.2-0.16-2.98c-0.07-0.7-0.21-4.15-0.22-4.29c0.01-0.55-0.1-0.72-0.13-0.76\n    l-0.02-0.02c-0.02-0.01-0.03-0.02-0.05-0.02c-0.13-0.06-0.24-0.15-0.32-0.25l-1.56-0.45c-0.4-0.11-0.68-0.46-0.72-0.87\n    c-0.04-0.41,0.18-0.8,0.55-0.99c0.2-0.1,0.33-0.17,0.44-0.24c0.07-0.04,0.13-0.1,0.2-0.15l0.14-0.1c0.03-0.03,0.05-0.06,0.08-0.08\n    c0.9-0.77,1.41-1.87,1.41-3.03c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.74-1.16-2.79-1.16s-2.04,0.41-2.79,1.16\n    c-0.75,0.76-1.17,1.76-1.17,2.84c0,1.15,0.49,2.21,1.36,2.99c0.03,0.02,0.05,0.05,0.08,0.07l0.12,0.09c0,0,0.08,0.06,0.08,0.07\n    c0.06,0.05,0.11,0.09,0.17,0.13c0.1,0.07,0.21,0.12,0.32,0.17l0.2,0.1c0.04,0.02,0.09,0.05,0.13,0.07c0.05,0.02,0.1,0.03,0.15,0.05\n    l0.14,0.04c0.43,0.14,0.71,0.55,0.69,1.01c-0.03,0.45-0.35,0.83-0.8,0.92l-2.37,0.49l0.01,0.24c0.02,0.28-0.08,0.55-0.28,0.75\n    c-0.05,0.06-0.23,0.29-0.28,0.99c-0.02,0.27,0.06,2.06,0.14,3.63c0.13,2.1,0.59,4.55,0.59,4.57l0.03,0.1\n    C26.52,33.88,26.57,34.06,26.6,34.17L26.6,34.17z M32.69,39.41c-0.03,0.02-0.05,0.03-0.07,0.05\n    C32.67,39.43,32.69,39.41,32.69,39.41z"/>\n  <path fill="#FABD2C" d="M25.21,22.64l4.46-0.83c0,0,2.42,0.35,2.43,0.35l0.46,17.98l-0.78,1.03c0,0-1.02-0.38-1.1-0.41\n    s-0.07-0.18-0.07-0.18l-0.66-7.54l-1.46,9.74l-1.04,0.7c0,0-0.68-0.69-0.89-0.98c-0.24-0.33-0.22-0.73-0.22-0.73L25.21,22.64z"/>\n  <path fill="#CE592C" d="M24.75,25.66c0.04-1.67,0.72-2.46,1.44-2.22c0.81,0.27,1.29,1.03,1.21,2.4c0,0-0.07,3.73-0.03,4.48\n    c0.05,0.93,0.27,3.4,0.27,3.4c0.05,0.57,0.33,1.44-0.68,1.63c-0.22,0.04-0.39-0.01-0.53-0.12l-0.28-0.43c0,0-0.97-2.72-1.21-4.91\n    C24.95,29.87,24.74,26.11,24.75,25.66z"/>\n  <path fill="#FABD2C" d="M27.23,33.53c0.02,0.57,0.27,1.23-0.75,1.41c-0.74,0.13-0.75-0.11-1.02-1.13c0,0-0.47-2.5-0.61-4.71\n    c0,0-0.18-3.31-0.14-3.76c0.12-1.66,0.91-2.11,1.64-1.87c0.53,0.17,1.08,0.65,0.94,2.01c0,0-0.18,3.89-0.18,4.64\n    C27.12,31.05,27.23,33.53,27.23,33.53L27.23,33.53z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M27.23,33.53c0.04,1.16-0.58,1-0.82,0.81\n    c-0.63-0.5-0.71-5.21-0.82-6.64c-0.07-0.97,0.09-3.4,0.4-4.17c0.55-0.21,1.04,0.42,1.09,0.51c0.19,0.31,0.29,0.77,0.22,1.45\n    c0,0-0.18,3.89-0.18,4.64C27.12,31.05,27.23,33.53,27.23,33.53z"/>\n  <path fill="#FABD2C" d="M35.25,31.45c0.01,0.67,0.2,1.27-0.73,1.43c-0.91,0.15-0.86-0.61-0.93-0.87c0,0-0.45-1.92-0.75-3.91\n    c0,0-0.33-3.44-0.33-3.85c-0.02-1.52,0.66-1.99,1.35-1.84c0.5,0.11,1.03,0.5,1.01,1.75c0,0,0.15,3.56,0.21,4.24\n    C35.16,29.24,35.25,31.45,35.25,31.45L35.25,31.45z"/>\n  <path fill="#CE592C" d="M35.25,31.45c0.01,0.67,0.2,1.27-0.73,1.43c-0.91,0.15-0.86-0.61-0.93-0.87c0,0-0.45-1.92-0.75-3.91\n    c0,0-0.33-3.44-0.33-3.85c-0.02-1.52,0.66-1.99,1.35-1.84c0.5,0.11,1.03,0.5,1.01,1.75c0,0,0.15,3.56,0.21,4.24\n    C35.16,29.24,35.25,31.45,35.25,31.45L35.25,31.45z"/>\n  <path fill="#FABD2C" d="M28.33,23.71l6.17-1.29c0,0,0.05,0.01,0.04,0.09c-0.13,1.5-1.07,17.08-1.09,17.34\n    c-0.02,0.27-0.19,0.37-0.19,0.37s-1.3,0.89-1.39,0.93c-0.09,0.04-0.27,0-0.27,0s0.13-0.04,0.14-0.23c0.02-0.19-0.3-7.46-0.3-7.46\n    c-0.01-0.37-0.11-0.52-0.36-0.52s-0.29,0.15-0.31,0.53c0,0-1.14,8.05-1.15,8.48c-0.01,0.43-0.31,0.56-0.31,0.56\n    s-1.47,0.86-1.59,0.92c-0.12,0.06-0.3,0.01-0.3,0.01s0.22-0.01,0.22-0.3C27.64,42.94,28.33,23.71,28.33,23.71L28.33,23.71z"/>\n  <path opacity="0.3" fill="#CE592C" enable-background="new    " d="M28.33,23.71l6.17-1.29c0,0,0.05,0.01,0.04,0.09\n    c-0.13,1.5-1.07,17.08-1.09,17.34c-0.02,0.27-0.19,0.37-0.19,0.37s-1.3,0.89-1.39,0.93c-0.09,0.04-0.27,0-0.27,0\n    s0.13-0.04,0.14-0.23c0.02-0.19-0.3-7.46-0.3-7.46c-0.01-0.37-0.11-0.52-0.36-0.52s-0.29,0.15-0.31,0.53c0,0-1.14,8.05-1.15,8.48\n    c-0.01,0.43-0.31,0.56-0.31,0.56s-1.47,0.86-1.59,0.92c-0.12,0.06-0.3,0.01-0.3,0.01s0.22-0.01,0.22-0.3\n    C27.64,42.94,28.33,23.71,28.33,23.71L28.33,23.71z"/>\n  <path opacity="0.5" fill="#CE592C" enable-background="new    " d="M33.15,22.67l-2.02,4.98l-1.23-4.26"/>\n  <path opacity="0.8" fill="#CE592C" enable-background="new    " d="M33.15,22.67l-2.02,4.98l-1.23-4.26"/>\n  <path fill="#CE592C" d="M34.46,22.42l-6.14,1.29l-3.15-1.07l5.88-1.2"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="30" cy="22.4" rx="2.25" ry="0.43"/>\n  <ellipse fill="#FABD2C" cx="29.94" cy="17.23" rx="4.96" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.96,21.74c1.19,0,2.3-0.27,3.24-0.75\n    c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.58,21.45,28.73,21.74,29.96,21.74z"/>\n  <path fill="#FFFFFF" d="M44.83,48.74c-0.04,0-0.08,0-0.11-0.01l-14.45-3.4c-0.22-0.05-0.38-0.25-0.39-0.48\n    c0-0.23,0.15-0.43,0.37-0.49c0.86-0.24,3.23-0.97,3.87-1.51c0.62-0.53,1.11-1.63,1.25-2.01c0.05-0.15,0.18-0.27,0.33-0.31\n    c0.16-0.04,0.32-0.01,0.45,0.09l8.99,7.24c0.18,0.15,0.24,0.4,0.14,0.61C45.19,48.63,45.01,48.74,44.83,48.74L44.83,48.74z\n     M32.27,44.77l10.53,2.48l-6.76-5.44c-0.26,0.54-0.7,1.31-1.28,1.8C34.27,44.01,33.21,44.44,32.27,44.77z"/>\n  <path fill="#3F3F3F" d="M30.37,44.83c0,0,3.19-0.88,4.06-1.61c0.87-0.73,1.4-2.22,1.4-2.22l8.99,7.24L30.37,44.83z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <g>\n    <path fill="#FFFFFF" d="M40.14,52.96c-0.09,0-0.18-0.02-0.26-0.07l-12.27-7.33c-0.19-0.12-0.29-0.35-0.22-0.56\n      c0.06-0.22,0.26-0.37,0.48-0.37c1.16,0.01,4.24-0.05,5.06-0.32c0.68-0.22,1.75-1.35,2.26-2.02c0.11-0.14,0.28-0.21,0.45-0.19\n      c0.17,0.02,0.32,0.13,0.4,0.29l4.55,9.86c0.09,0.2,0.04,0.43-0.12,0.58C40.38,52.92,40.26,52.96,40.14,52.96z M29.64,45.6L39,51.2\n      l-3.54-7.68c-0.55,0.61-1.42,1.47-2.22,1.73C32.57,45.48,30.94,45.57,29.64,45.6L29.64,45.6z"/>\n    <path fill="#3F3F3F" d="M27.87,45.13c0,0,4.14,0.01,5.22-0.35c1.08-0.35,2.5-2.18,2.5-2.18l4.55,9.86L27.87,45.13z"/>\n    <path fill="#333333" d="M26.53,43.7c-0.18,0-0.37-0.03-0.58-0.08l-0.5-0.14l-0.11-0.3c-0.65-0.61-1.01-1.18-1.06-1.69\n      c-0.02-0.2-0.04-0.42-0.01-0.65l-0.17-5.13c-0.05,0.01-0.09,0.02-0.13,0.02c-0.53,0.08-1.22-0.13-1.58-0.26\n      c-0.62-0.16-1.02-0.85-0.9-1.64c0.08-0.68,0.45-3.36,0.75-5.23c0.4-2.47,0.88-4.5,0.9-4.58c0.06-0.39,0.25-0.83,0.53-1.2\n      l-0.01-0.46c-0.01-0.33,0.11-0.65,0.34-0.9s0.54-0.38,0.88-0.39l0.47-0.01c-0.86-1.05-1.37-2.39-1.37-3.82\n      c0-1.6,0.62-3.11,1.74-4.24c1.12-1.13,2.62-1.76,4.22-1.76h0.01c1.59,0,3.09,0.62,4.21,1.75s1.74,2.64,1.75,4.24\n      c0,1.62-0.63,3.12-1.71,4.22c0.37,0.21,0.8,0.46,1.15,0.68c1.08,0.67,1.28,1.95,1.31,2.31c0.21,1.1,0.74,3.9,0.88,4.48\n      c0.23,0.93,0.66,3.25,0.68,3.35c0.02,0.12,0.04,0.21,0.06,0.3c0.11,0.54,0.4,1.96-1.3,2.51c-0.54,0.17-1.03,0.15-1.45-0.06\n      c-0.35-0.18-0.57-0.46-0.71-0.72c-0.22,3.57-0.41,6.62-0.42,6.74c-0.04,0.61-0.39,1.01-0.7,1.19l-0.29,0.11\n      c0,0-1.71,0.35-2.08,0.44l-0.04,0.03l-0.25,0.04c-0.14,0.02-0.42,0.03-0.7-0.09c-0.1-0.04-0.17-0.07-0.51-0.36\n      c-0.18,0.41-0.49,0.68-0.77,0.8l-0.22,0.07c-0.72,0.13-1.59,0.31-1.82,0.37C26.88,43.67,26.71,43.7,26.53,43.7L26.53,43.7z\n       M26.21,41.78c0,0-0.01,0-0.01,0.01C26.2,41.79,26.21,41.79,26.21,41.78z M26.28,41.24c0.06,0.1,0.19,0.25,0.35,0.41\n      c0.25-0.06,0.66-0.14,1.36-0.28c0.07-0.72,0.3-2.64,0.67-5.71l1.99,0.1l0.11,4.79c0.09,0.08,0.18,0.16,0.27,0.23\n      c0.25-0.06,0.67-0.15,1.4-0.3c0.09-1.51,0.42-6.79,0.69-11.21l1.95-0.23c0.39,1.26,0.83,2.48,1.1,3.21\n      c-0.13-0.69-0.42-2.2-0.58-2.86c-0.19-0.75-0.89-4.48-0.92-4.63l-0.02-0.13c-0.01-0.19-0.12-0.64-0.37-0.8\n      c-0.55-0.34-1.3-0.77-1.68-0.98l-0.81,0.02l-0.4-1.93c1.52-0.61,2.5-2.07,2.5-3.71c0-1.07-0.41-2.07-1.16-2.83\n      c-0.75-0.75-1.74-1.16-2.79-1.16c-1.06,0-2.05,0.42-2.8,1.17c-0.75,0.76-1.16,1.76-1.16,2.83c0,1.72,1.09,3.24,2.71,3.79\n      l-0.29,1.95l-2.71,0.08l0.02,0.57l-0.35,0.31c-0.12,0.11-0.23,0.31-0.25,0.47c-0.02,0.1-0.5,2.12-0.89,4.51\n      c-0.31,1.92-0.59,3.97-0.7,4.8c0.02,0,0.03,0.01,0.04,0.01L24,31.81L25.97,32L26.28,41.24L26.28,41.24z M22.99,33.56\n      c0.03,0.01,0.05,0.02,0.08,0.03C23.04,33.58,23.02,33.57,22.99,33.56z"/>\n    <path fill="#FABD2C" d="M37.24,32.44c0.12,0.73,0.42,1.35-0.57,1.67c-0.97,0.31-1.03-0.53-1.15-0.79c0,0-0.79-2.02-1.44-4.14\n      c0,0-0.9-3.69-0.98-4.14c-0.26-1.66,0.41-2.27,1.17-2.21c0.56,0.04,1.2,0.38,1.38,1.75c0,0,0.72,3.85,0.91,4.58\n      C36.79,30.06,37.24,32.44,37.24,32.44L37.24,32.44z"/>\n    <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M34.23,29.87l0.2-7.11l0.41,0.31c0,0-0.06,5.4,0.11,6.64\n      c0.17,1.24,0.45,3.13,0.45,3.13L34.23,29.87L34.23,29.87z"/>\n    <path fill="#E58A2C" d="M24.66,22.08l0.61,18.85c0,0-0.04,0.03,0.01,0.47c0.05,0.48,0.95,1.24,0.95,1.24l1.86-0.57l1.26-10.05\n      l0.23,0.77l0.19,8.22l0.95,0.81l0.18,0.02l1.44-1.03l0.51-18.03l-2.05-0.32L24.66,22.08"/>\n    <path fill="#FABD2C" d="M34.51,22.74L26.24,23c-0.49,15.18,0.06,15.86-0.04,19.32c-0.01,0.29,0.02,0.32,0.02,0.32\n      s0.18,0.05,0.33,0.05c0.05,0,0.09-0.01,0.12-0.02c0.13-0.07,2-0.41,2-0.41s0.3-0.14,0.31-0.57c0.02-0.43,0.88-7.48,0.88-7.48\n      c0.05-0.65,0.14-0.75,0.39-0.76c0.25,0.01,0.35,0.16,0.36,0.53c0,0,0.3,7.4,0.28,7.59c-0.02,0.2-0.14,0.23-0.14,0.23H31\n      c0.09-0.04,2.21-0.48,2.21-0.48s0.18-0.1,0.2-0.37L34.51,22.74"/>\n    <path opacity="0.1" fill="#CE592C" enable-background="new    " d="M34.51,22.74L26.24,23c-0.49,15.18,0.06,15.86-0.04,19.32\n      c-0.01,0.29,0.02,0.32,0.02,0.32s0.18,0.05,0.33,0.05c0.05,0,0.09-0.01,0.12-0.02c0.13-0.07,2-0.41,2-0.41s0.3-0.14,0.31-0.57\n      c0.02-0.43,0.88-7.48,0.88-7.48c0.05-0.65,0.14-0.75,0.39-0.76c0.25,0.01,0.35,0.16,0.36,0.53c0,0,0.3,7.4,0.28,7.59\n      c-0.02,0.2-0.14,0.23-0.14,0.23H31c0.09-0.04,2.21-0.48,2.21-0.48s0.18-0.1,0.2-0.37L34.51,22.74"/>\n    <path fill="#CE592C" d="M32.87,21.84l-8.21,0.24l1.56,0.95l8.25-0.29L32.87,21.84"/>\n    <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.98" cy="22.37" rx="2.25" ry="0.3"/>\n    <ellipse fill="#FABD2C" cx="29.94" cy="17.23" rx="4.96" ry="5"/>\n    <path opacity="0.8" fill="#CE592C" enable-background="new    " d="M33.29,22.77l-3.09,5.36l-2.77-5.3"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.97,21.74c1.19,0,2.3-0.27,3.24-0.75\n      c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.59,21.45,28.74,21.74,29.97,21.74z"/>\n    <path fill="#FABD2C" d="M25.91,26.06c-0.1,1.59-0.92,5.97-0.92,5.97l-0.54,2.33c-0.08,0.24-0.27,0.33-0.62,0.38\n      c-0.35,0.05-1.09-0.21-1.09-0.21c-0.23-0.06-0.29-0.3-0.25-0.55c0,0,0.35-2.72,0.75-5.23c0.4-2.46,0.89-4.51,0.89-4.51\n      c0.1-0.61,0.59-1.29,1.17-1.34c0,0,0.69,0,0.71,1.06C26.03,25.08,25.91,26.06,25.91,26.06z"/>\n    <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M25.49,22.95c0.2,0.08,0.5,0.32,0.52,1.01\n      c0.03,1.12-0.1,2.1-0.1,2.1c-0.09,1.36-0.7,4.73-0.87,5.7l-0.01,0.05C25.02,31.81,25.6,26.32,25.49,22.95L25.49,22.95z"/>\n  </g>\n</svg>\n;<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.68,33.64,41.57,27.19,30.33,27.19L30.33,27.19z M30.21,55.03\n    c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <g>\n    <path fill="#FFFFFF" d="M30.79,54.8c-0.18,0-0.35-0.1-0.43-0.25l-5.83-10.24c-0.1-0.17-0.08-0.38,0.03-0.54\n      c0.12-0.16,0.31-0.23,0.51-0.19c1.16,0.25,4.37,0.89,5.26,0.89c0.98,0,3.52-0.73,4.42-1.01c0.18-0.05,0.38,0,0.52,0.14\n      s0.17,0.34,0.1,0.52l-4.11,10.37c-0.07,0.18-0.24,0.3-0.43,0.31L30.79,54.8L30.79,54.8z M25.95,44.77l4.76,8.37l3.34-8.44\n      c-1.1,0.31-2.84,0.76-3.73,0.76C29.51,45.46,27.29,45.04,25.95,44.77z"/>\n    <path fill="#3F3F3F" d="M24.96,44.06c0,0,4.29,0.9,5.43,0.9c1.16,0,4.5-1.03,4.5-1.03L30.78,54.3L24.96,44.06z"/>\n    <path fill="#333333" d="M34.25,23.78h-8.51c-0.42,0-0.8-0.26-0.94-0.66c-0.14-0.4-0.02-0.84,0.3-1.11l0.64-0.53\n      c-1.12-1.12-1.77-2.65-1.77-4.25c0-3.3,2.69-5.99,5.98-5.99c1.6,0,3.1,0.63,4.23,1.76s1.75,2.64,1.75,4.24\n      c0,1.45-0.53,2.83-1.49,3.93c-0.03,0.05-0.07,0.1-0.11,0.14l-0.13,0.13l-0.03,0.03l0.68,0.52c0.34,0.26,0.48,0.71,0.34,1.12\n      C35.06,23.51,34.68,23.78,34.25,23.78L34.25,23.78z M29.49,21.78h0.93c0.08-0.33,0.33-0.6,0.68-0.71c0.08-0.03,0.17-0.06,0.25-0.1\n      l0.12-0.05c0.25-0.11,0.45-0.21,0.63-0.34l0.11-0.07c0.14-0.1,0.28-0.22,0.42-0.35c0.01-0.01,0.08-0.07,0.09-0.08l0.05-0.05\n      c0.02-0.02,0.04-0.04,0.05-0.06c0.71-0.75,1.1-1.72,1.1-2.74c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.75-1.17-2.81-1.17\n      c-2.19,0-3.98,1.79-3.98,3.99c0,1.3,0.64,2.52,1.71,3.27c0.05,0.03,0.09,0.07,0.13,0.11c0.3,0.19,0.64,0.35,1,0.46\n      C29.16,21.18,29.41,21.45,29.49,21.78z"/>\n    <path fill="#333333" d="M33.98,43.59h-3.04c-0.45,0-0.84-0.3-0.96-0.72c-0.12,0.42-0.51,0.72-0.96,0.72h-3\n      c-0.55,0-0.99-0.44-1-0.99l-0.13-9.18l-0.38,0.97c-0.3,0.71-1.04,1.08-1.78,0.89l-1.02-0.33c-0.74-0.27-1.13-1.03-0.94-1.78\n      c0.01-0.04,0.02-0.07,0.03-0.1c0.02-0.08,2.56-9.46,2.56-9.46c0.23-0.93,1.04-1.66,1.96-1.79c0.08-0.02,0.17-0.03,0.26-0.03h8.84\n      c0.07,0,0.14,0.01,0.21,0.02c0.96,0.1,1.8,0.83,2.04,1.79c2.08,8.08,2.4,9.32,2.46,9.53c0.2,0.78-0.14,1.5-0.83,1.75l-1.08,0.35\n      c-0.8,0.21-1.55-0.16-1.84-0.85l-0.28-0.73l-0.13,8.96C34.97,43.15,34.52,43.59,33.98,43.59z M31.87,41.59h1.12l0.19-13.22\n      c0.01-0.48,0.35-0.88,0.82-0.97c0.46-0.09,0.93,0.17,1.11,0.62l0.09,0.23l1.86,4.92h0.01c-0.48-1.88-2.34-9.09-2.34-9.09\n      c-0.04-0.16-0.21-0.29-0.33-0.29c-0.03,0-0.06,0-0.08-0.01H25.7c-0.03,0-0.07,0.01-0.1,0.01c-0.09,0-0.26,0.13-0.31,0.32\n      c-1.61,5.92-2.22,8.19-2.46,9.08l2.06-5.18c0.18-0.44,0.64-0.71,1.11-0.61c0.47,0.09,0.81,0.49,0.82,0.97L27,41.59h1.08l0.48-6.92\n      c0.07-0.79,0.65-1.34,1.43-1.34c0.65,0,1.33,0.42,1.4,1.34L31.87,41.59L31.87,41.59z M22.7,33.66c0-0.01,0.01-0.02,0.01-0.03\n      C22.71,33.64,22.7,33.65,22.7,33.66z M37.18,33.61l0.04-0.01L37.18,33.61z M37.23,33.6l0.93-0.23L37.23,33.6z"/>\n    <path fill="#CE592C" d="M25.74,22.78l0.9-0.75h6.62l0.99,0.75"/>\n    <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.95" cy="22.37" rx="2.25" ry="0.3"/>\n    <path fill="#FDBF2D" d="M38.15,33.36c0-0.01-2.46-9.53-2.46-9.53c-0.15-0.6-0.72-1.05-1.31-1.05H25.6c-0.59,0-1.13,0.49-1.28,1.08\n      c0,0-2.59,9.54-2.59,9.55c-0.06,0.24,0.04,0.49,0.29,0.58l0.94,0.31c0.25,0.06,0.51-0.05,0.61-0.29l2.24-5.65l0.2,14.21h3\n      l0.55-7.85c0.02-0.21,0.13-0.41,0.44-0.41s0.38,0.2,0.39,0.41l0.54,7.85h3.04l0.2-14.21l2.12,5.61c0.1,0.23,0.36,0.35,0.61,0.29\n      l1.04-0.34C38.18,33.85,38.21,33.6,38.15,33.36z"/>\n    <path opacity="0.6" fill="#CF572E" enable-background="new    " d="M26.68,22.78L30,28.46l3.32-5.68"/>\n    <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M34.17,28.38l0.08-5.6h0.17l0.48,5.44l0.45,3.13 M25.81,28.38\n      l-0.08-5.59h-0.17c0,0-0.31,4.2-0.48,5.43c-0.17,1.24-0.45,3.13-0.45,3.13L25.81,28.38z"/>\n    <ellipse fill="#FDBF2D" cx="29.95" cy="17.23" rx="4.98" ry="5"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M30.35,21.74c-1.18,0.11-2.31-0.06-3.3-0.44\n      c0.94,0.68,2.12,1.04,3.36,0.92c1.27-0.12,2.38-0.71,3.19-1.59C32.69,21.23,31.57,21.63,30.35,21.74z"/>\n  </g>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <g>\n    <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n      s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n      s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n    <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  </g>\n  <g>\n    <path fill="#FFFFFF" d="M20.29,52.96c-0.12,0-0.24-0.04-0.33-0.13c-0.16-0.15-0.21-0.38-0.12-0.58l4.55-9.86\n      c0.07-0.16,0.22-0.27,0.4-0.29c0.17-0.02,0.35,0.05,0.45,0.19c0.37,0.48,1.49,1.76,2.26,2.02c0.82,0.27,3.92,0.32,5.06,0.32\n      c0.22,0,0.42,0.15,0.48,0.37s-0.03,0.45-0.22,0.56l-12.27,7.33C20.47,52.94,20.38,52.96,20.29,52.96L20.29,52.96z M24.97,43.52\n      l-3.54,7.68l9.36-5.6c-1.3-0.04-2.93-0.12-3.6-0.35C26.39,45,25.51,44.13,24.97,43.52L24.97,43.52z"/>\n    <path fill="#3F3F3F" d="M32.56,45.13c0,0-4.14,0.01-5.22-0.35c-1.08-0.35-2.5-2.18-2.5-2.18l-4.55,9.86L32.56,45.13z"/>\n    <path fill="#333333" d="M33.37,43.7c-0.18,0-0.35-0.03-0.49-0.09c-0.22-0.06-1.1-0.23-1.82-0.37l-0.22-0.07\n      c-0.28-0.12-0.59-0.39-0.77-0.8c-0.34,0.29-0.41,0.31-0.51,0.36c-0.28,0.12-0.54,0.11-0.69,0.09l-0.33-0.07\n      c-0.43-0.1-2.05-0.43-2.05-0.43l-0.3-0.11c-0.31-0.18-0.65-0.58-0.7-1.17c-0.01-0.12-0.19-3.18-0.42-6.75\n      c-0.14,0.27-0.36,0.54-0.7,0.72c-0.42,0.22-0.91,0.24-1.45,0.06c-1.69-0.54-1.41-1.97-1.3-2.5c0.02-0.09,0.04-0.18,0.05-0.27\n      c0.02-0.13,0.46-2.45,0.68-3.37c0.14-0.58,0.68-3.38,0.89-4.48c0.03-0.36,0.23-1.64,1.31-2.31c0.35-0.22,0.78-0.47,1.15-0.68\n      c-1.08-1.1-1.72-2.6-1.71-4.22c0-1.6,0.62-3.11,1.75-4.24c1.12-1.13,2.62-1.75,4.21-1.75h0.01c1.59,0,3.09,0.63,4.21,1.76\n      s1.74,2.64,1.74,4.24c0,1.43-0.5,2.77-1.37,3.82l0.47,0.01c0.33,0.01,0.65,0.15,0.88,0.39s0.35,0.56,0.34,0.89l-0.02,0.46\n      c0.28,0.37,0.48,0.82,0.55,1.27c0.01,0.01,0.49,2.04,0.89,4.51c0.3,1.87,0.67,4.54,0.75,5.23c0.13,0.8-0.27,1.48-0.98,1.67\n      c-0.28,0.11-0.98,0.31-1.5,0.23c-0.03,0-0.08-0.01-0.13-0.02l-0.17,5.13c0.03,0.22,0.01,0.45-0.01,0.65\n      c-0.05,0.52-0.42,1.09-1.09,1.72l-0.13,0.29l-0.45,0.12C33.74,43.67,33.54,43.7,33.37,43.7L33.37,43.7z M33.68,41.78\n      c0,0,0.01,0,0.01,0.01C33.69,41.78,33.68,41.78,33.68,41.78z M31.9,41.37c0.71,0.13,1.11,0.22,1.36,0.28\n      c0.17-0.17,0.29-0.32,0.36-0.41l0.3-9.24l1.97-0.19l0.44,1.92c0.01,0,0.03-0.01,0.04-0.01c-0.11-0.83-0.38-2.87-0.7-4.81\n      c-0.39-2.4-0.87-4.42-0.87-4.44c-0.04-0.24-0.15-0.44-0.27-0.55l-0.35-0.31l0.02-0.57l-2.71-0.08l-0.29-1.95\n      c1.62-0.54,2.71-2.07,2.71-3.79c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.74-1.17-2.79-1.17c-1.06,0-2.05,0.41-2.8,1.17\n      C26.41,15.14,26,16.15,26,17.22c0,1.65,0.98,3.11,2.5,3.72l-0.4,1.93l-0.82-0.02c-0.38,0.21-1.12,0.64-1.68,0.98\n      c-0.25,0.15-0.36,0.61-0.37,0.8l-0.02,0.12c-0.03,0.16-0.73,3.88-0.92,4.64c-0.16,0.66-0.45,2.16-0.58,2.86\n      c0.27-0.72,0.71-1.95,1.1-3.22l1.95,0.23c0.28,4.42,0.6,9.68,0.69,11.21c0.73,0.15,1.15,0.24,1.4,0.3\n      c0.09-0.07,0.18-0.16,0.27-0.23l0.11-4.79l1.99-0.1C31.7,39.55,31.85,40.88,31.9,41.37z M36.82,33.59c-0.02,0-0.04,0.01-0.06,0.02\n      C36.78,33.6,36.8,33.59,36.82,33.59z"/>\n    <path fill="#FABD2C" d="M22.66,32.44c-0.12,0.73-0.42,1.35,0.57,1.67c0.97,0.31,1.03-0.53,1.15-0.79c0,0,0.79-2.02,1.44-4.14\n      c0,0,0.9-3.69,0.98-4.14c0.26-1.66-0.41-2.27-1.17-2.21c-0.56,0.04-1.2,0.38-1.38,1.75c0,0-0.72,3.85-0.91,4.58\n      C23.11,30.06,22.66,32.44,22.66,32.44z"/>\n    <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M25.67,29.87l-0.2-7.11l-0.41,0.31c0,0,0.06,5.4-0.11,6.64\n      s-0.45,3.13-0.45,3.13L25.67,29.87L25.67,29.87z"/>\n    <path fill="none" d="M27.03,22.07h8.2v20.56h-8.2C27.03,42.63,27.03,22.07,27.03,22.07z"/>\n    <path fill="#E58A2C" d="M35.23,22.07l-6.16,0.37l-2.04,0.32l0.51,18.03l1.43,1.03l0.19-0.02l0.94-0.81l0.19-8.22L30.53,32\n      l1.25,10.04l1.87,0.57c0,0,0.9-0.77,0.95-1.24c0.04-0.43,0-0.47,0-0.47L35.23,22.07"/>\n    <path fill="none" d="M25.39,22.74h8.31V42.7h-8.31V22.74z"/>\n    <path fill="#FABD2C" d="M25.39,22.74l1.1,18.22c0.02,0.28,0.2,0.38,0.2,0.38s2.11,0.43,2.2,0.47h0.28c0,0-0.13-0.04-0.14-0.22\n      c-0.02-0.19,0.27-7.6,0.27-7.6c0.02-0.37,0.12-0.52,0.36-0.52s0.35,0.1,0.4,0.75c0,0,0.85,7.06,0.87,7.49s0.31,0.56,0.31,0.56\n      s1.86,0.35,1.99,0.41c0.03,0.02,0.08,0.02,0.13,0.02c0.14,0,0.32-0.05,0.32-0.05s0.03-0.03,0.02-0.32\n      c-0.1-3.46,0.46-4.13-0.04-19.32L25.39,22.74"/>\n    <path fill="none" d="M25.42,21.84h9.81v1.19h-9.81C25.42,23.03,25.42,21.84,25.42,21.84z"/>\n    <path fill="#CE592C" d="M27.03,21.84l-1.61,0.9l8.25,0.29l1.56-0.96L27.03,21.84"/>\n    <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.92" cy="22.37" rx="2.25" ry="0.3"/>\n    <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n    <path opacity="0.6" fill="#CE592C" enable-background="new    " d="M26.61,22.77l3.09,5.36l2.76-5.3"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.93,21.74c-1.19,0-2.3-0.27-3.24-0.75\n      c0.87,0.77,2.01,1.24,3.26,1.24c1.28,0,2.44-0.49,3.32-1.28C32.31,21.45,31.16,21.74,29.93,21.74L29.93,21.74z"/>\n    <path fill="#FABD2C" d="M33.99,26.06c0.1,1.59,0.92,5.97,0.92,5.97l0.54,2.33c0.08,0.24,0.27,0.33,0.62,0.38s1.09-0.21,1.09-0.21\n      c0.23-0.06,0.29-0.3,0.25-0.55c0,0-0.35-2.72-0.75-5.23c-0.4-2.46-0.89-4.51-0.89-4.51c-0.1-0.61-0.59-1.29-1.17-1.34\n      c0,0-0.69,0-0.71,1.06C33.86,25.08,33.99,26.06,33.99,26.06L33.99,26.06z"/>\n    <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M34.41,22.95c-0.2,0.08-0.5,0.32-0.52,1.01\n      c-0.03,1.12,0.1,2.1,0.1,2.1c0.09,1.36,0.7,4.73,0.87,5.7l0.01,0.05C34.88,31.81,34.3,26.32,34.41,22.95z"/>\n  </g>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M15.6,48.74c-0.19,0-0.36-0.11-0.45-0.28c-0.1-0.21-0.05-0.46,0.14-0.61l8.99-7.24\n    c0.12-0.1,0.29-0.14,0.45-0.09c0.16,0.04,0.28,0.16,0.34,0.31c0,0.01,0.5,1.37,1.25,2.01c0.64,0.54,3.01,1.28,3.87,1.51\n    c0.22,0.06,0.37,0.26,0.37,0.49s-0.16,0.42-0.39,0.48l-14.45,3.4C15.68,48.73,15.64,48.74,15.6,48.74z M24.39,41.8l-6.76,5.44\n    l10.53-2.48c-0.94-0.33-2-0.75-2.49-1.16C25.09,43.11,24.65,42.34,24.39,41.8L24.39,41.8z"/>\n  <path fill="#3F3F3F" d="M30.05,44.83c0,0-3.19-0.88-4.06-1.61c-0.87-0.73-1.4-2.22-1.4-2.22l-8.99,7.24L30.05,44.83L30.05,44.83z"/>\n  <path fill="#333333" d="M32.45,44.49c-0.09,0-0.17-0.01-0.26-0.03c-0.17-0.01-0.34-0.06-0.49-0.14c-0.12-0.07-1.39-0.81-1.6-0.93\n    c-0.39-0.2-0.81-0.67-0.84-1.41c0-0.02-0.01-0.07-0.02-0.16c-0.12,0.04-0.25,0.09-0.37,0.14c-0.12,0.09-0.25,0.16-0.41,0.19\n    c0,0-0.12,0.02-0.26,0.03c-0.1,0.01-0.19,0.01-0.29-0.01c-0.1-0.01-0.2-0.04-0.28-0.07c-0.11-0.05-0.2-0.08-1.59-1.03\n    c-0.24-0.13-0.58-0.54-0.63-1.13c-0.01-0.15-0.17-2.85-0.37-6.09c-1.54-0.33-1.47-1.65-1.44-2.15c0-0.08,0.01-0.16,0.01-0.25\n    c0-0.12,0.09-2.27,0.17-3.13c0.05-0.54,0.17-3.21,0.21-4.19c-0.01-0.59,0.1-1.13,0.33-1.56c-0.02-0.5,0.27-0.93,0.72-1.08\n    c0.06-0.02,0.12-0.04,0.18-0.04l0.37-0.11c-1.04-1.11-1.63-2.57-1.63-4.09c0-1.6,0.62-3.11,1.75-4.24\n    c1.12-1.13,2.62-1.75,4.21-1.75h0.01c1.59,0,3.09,0.63,4.21,1.76s1.74,2.64,1.74,4.24c0,1.59-0.65,3.13-1.8,4.26l0.81,0.17\n    c0.44,0.09,0.77,0.47,0.8,0.92c0.01,0.14-0.01,0.28-0.06,0.41l-0.03,0.43c0.3,0.47,0.48,1.09,0.54,1.84\n    c0.04,0.48-0.1,3.1-0.14,3.89c-0.14,2.25-0.6,4.73-0.62,4.84l-0.06,0.25c-0.11,0.41-0.21,0.79-0.41,1.09l-0.38,6.47\n    c0,0.22-0.04,0.79-0.41,1.3c-0.25,0.34-0.87,0.97-0.99,1.1C32.97,44.39,32.71,44.49,32.45,44.49L32.45,44.49z M31.25,41.75\n    c0.23,0.13,0.63,0.37,0.95,0.55c0.15-0.16,0.28-0.31,0.33-0.38c0-0.04,0.02-0.16,0.03-0.2l0.4-6.87c0.02-0.26,0.13-0.51,0.33-0.68\n    c0.04-0.11,0.08-0.29,0.13-0.45l0.05-0.18c0,0,0.44-2.42,0.58-4.51c0.08-1.56,0.16-3.35,0.14-3.62c-0.04-0.55-0.17-0.87-0.28-0.98\n    c-0.19-0.2-0.3-0.47-0.28-0.75l0.01-0.24l-2.37-0.49c-0.44-0.09-0.77-0.47-0.8-0.92c-0.03-0.45,0.26-0.87,0.69-1.01l0.15-0.04\n    c0.05-0.01,0.1-0.03,0.14-0.05c0.05-0.02,0.1-0.05,0.15-0.08l0.13-0.07c0.17-0.08,0.28-0.14,0.38-0.2\n    c0.07-0.04,0.12-0.08,0.17-0.12l0.22-0.17c0.02-0.03,0.05-0.05,0.07-0.07c0.88-0.78,1.36-1.84,1.37-2.99\n    c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.77-1.18-2.8-1.17c-1.06,0-2.05,0.41-2.79,1.17c-0.75,0.75-1.16,1.76-1.16,2.83\n    c0,1.16,0.51,2.26,1.41,3.03c0.03,0.02,0.06,0.05,0.08,0.08l0.08,0.06c0.13,0.1,0.2,0.15,0.27,0.2c0.1,0.06,0.21,0.12,0.32,0.17\n    c0.02,0.01,0.12,0.06,0.13,0.07c0.35,0.2,0.56,0.6,0.51,1s-0.31,0.74-0.7,0.85l-1.56,0.45c-0.09,0.1-0.2,0.19-0.32,0.25\n    c-0.02,0.01-0.03,0.02-0.05,0.02c0,0.01-0.01,0.01-0.02,0.02c-0.03,0.04-0.14,0.21-0.13,0.71c-0.01,0.2-0.15,3.65-0.22,4.35\n    c-0.08,0.81-0.16,2.97-0.16,2.99c0,0.09-0.01,0.2-0.01,0.3v0.04c0.25-0.1,0.53-0.1,0.78,0.01c0.34,0.15,0.57,0.48,0.59,0.85\n    c0.19,3.16,0.37,6.02,0.42,6.86c0.22,0.15,0.53,0.36,0.77,0.52c0.04-0.02,0.09-0.03,0.14-0.05l0.28-3.18\n    c0.04-0.51,0.46-0.9,0.97-0.91h0.03c0.5,0,0.92,0.37,0.99,0.86C31.09,40.41,31.22,41.42,31.25,41.75L31.25,41.75z M27.13,39.36\n    c0.01,0.01,0.04,0.03,0.1,0.07C27.19,39.41,27.16,39.38,27.13,39.36z"/>\n  <path fill="#E58A2C" d="M34.68,22.64l-4.46-0.83c0,0-2.42,0.35-2.43,0.35l-0.46,17.98l0.78,1.03c0,0,1.02-0.38,1.1-0.41\n    c0.08-0.03,0.07-0.18,0.07-0.18l0.66-7.54l1.46,9.74l1.04,0.7c0,0,0.68-0.69,0.89-0.98c0.24-0.33,0.22-0.73,0.22-0.73L34.68,22.64\n    L34.68,22.64z"/>\n  <path fill="#FABD2C" d="M32.66,33.53c-0.02,0.57-0.27,1.23,0.75,1.41c0.74,0.13,0.75-0.11,1.02-1.13c0,0,0.47-2.5,0.61-4.71\n    c0,0,0.18-3.31,0.14-3.76c-0.12-1.66-0.91-2.11-1.64-1.87c-0.53,0.17-1.08,0.65-0.94,2.01c0,0,0.18,3.89,0.18,4.64\n    C32.76,31.05,32.66,33.53,32.66,33.53L32.66,33.53z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M32.66,33.53c-0.02,0.4,0.19-1.86,0.42-4.94\n    c0.1-1.35-0.08-4.87-0.27-4.56s-0.29,0.77-0.22,1.45c0,0,0.18,3.89,0.18,4.64C32.76,31.05,32.66,33.53,32.66,33.53z"/>\n  <path fill="#FABD2C" d="M24.64,31.45c-0.01,0.67-0.2,1.27,0.73,1.43c0.91,0.15,0.86-0.61,0.93-0.87c0,0,0.45-1.92,0.75-3.91\n    c0,0,0.33-3.44,0.33-3.85c0.02-1.52-0.66-1.99-1.35-1.84c-0.5,0.11-1.03,0.5-1.01,1.75c0,0-0.15,3.56-0.21,4.24\n    C24.72,29.24,24.64,31.45,24.64,31.45z"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M24.64,31.45c-0.01,0.67-0.2,1.27,0.73,1.43\n    c0.91,0.15,0.86-0.61,0.93-0.87c0,0,0.45-1.92,0.75-3.91c0,0,0.33-3.44,0.33-3.85c0.02-1.52-0.66-1.99-1.35-1.84\n    c-0.5,0.11-1.03,0.5-1.01,1.75c0,0-0.15,3.56-0.21,4.24C24.72,29.24,24.64,31.45,24.64,31.45z"/>\n  <path fill="#FABD2C" d="M31.56,23.71l-6.17-1.29c0,0-0.05,0.01-0.04,0.09c0.13,1.5,1.07,17.08,1.09,17.34\n    c0.02,0.27,0.19,0.37,0.19,0.37s1.3,0.89,1.39,0.93s0.27,0,0.27,0s-0.13-0.04-0.14-0.23c-0.02-0.19,0.3-7.46,0.3-7.46\n    c0.01-0.37,0.11-0.52,0.36-0.53c0.24,0,0.29,0.15,0.31,0.53c0,0,1.14,8.05,1.15,8.48s0.31,0.56,0.31,0.56s1.47,0.86,1.59,0.92\n    s0.3,0.01,0.3,0.01s-0.22-0.01-0.22-0.3C32.25,42.94,31.56,23.71,31.56,23.71L31.56,23.71z"/>\n  <path opacity="0.6" fill="#CE592C" enable-background="new    " d="M26.74,22.67l2.02,4.98l1.23-4.26"/>\n  <path fill="#CE592C" d="M25.43,22.42l6.13,1.29l3.16-1.07l-5.88-1.2"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.89" cy="22.41" rx="2.25" ry="0.43"/>\n  <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.93,21.74c-1.19,0-2.3-0.27-3.24-0.75\n    c0.87,0.77,2.01,1.24,3.26,1.24c1.28,0,2.44-0.49,3.32-1.28C32.31,21.45,31.16,21.74,29.93,21.74L29.93,21.74z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <g>\n    <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n      s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.68,33.64,41.57,27.19,30.33,27.19z M30.21,55.03\n      c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n    <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  </g>\n  <g>\n    <path fill="#FFFFFF" d="M12.95,45.15c-0.24,0-0.44-0.17-0.49-0.4c-0.05-0.23,0.08-0.47,0.3-0.56l11.98-4.97\n      c0.15-0.06,0.31-0.05,0.45,0.03s0.23,0.22,0.24,0.38c0,0.01,0.14,1.46,0.71,2.26c0.49,0.69,2.3,1.86,2.96,2.25\n      c0.19,0.12,0.29,0.34,0.23,0.56c-0.06,0.22-0.26,0.37-0.48,0.37L12.95,45.15L12.95,45.15z M24.54,40.39l-9.04,3.75l11.68-0.06\n      c-0.71-0.5-1.49-1.11-1.85-1.61C24.88,41.85,24.65,40.98,24.54,40.39z"/>\n    <path fill="#3F3F3F" d="M28.85,44.58c0,0-2.46-1.47-3.12-2.39c-0.66-0.93-0.8-2.5-0.8-2.5l-11.98,4.97L28.85,44.58L28.85,44.58z"\n      />\n    <path fill="#333333" d="M30.68,44.46c-0.26,0-0.52-0.09-0.73-0.26c-0.08-0.07-0.83-0.82-0.95-0.95c-0.19-0.18-0.49-0.57-0.5-1.26\n      c0-0.04-0.01-0.12-0.01-0.25c-0.05,0.01-0.08,0.02-0.08,0.02c-0.46,0.12-0.78,0-0.97-0.12c-0.12-0.08-0.17-0.11-1.08-1.1\n      c-0.06-0.05-0.36-0.38-0.38-1.01c-0.01-0.16-0.15-2.69-0.31-5.77c-0.72-0.23-1.44-0.83-1.17-2.37l0.03-0.18\n      c0-0.01,0.29-2.23,0.37-3.07c0.05-0.54,0.17-3.21,0.21-4.19c0-0.08,0-0.19,0.01-0.31l-0.06-1.09c-0.02-0.39,0.21-0.84,0.55-1.03\n      c0.05-0.03,0.11-0.05,0.16-0.07c-1.13-1.13-1.78-2.65-1.77-4.24c0-1.6,0.62-3.11,1.75-4.24c1.12-1.13,2.62-1.75,4.21-1.75h0.01\n      c1.59,0,3.09,0.63,4.21,1.76s1.74,2.64,1.74,4.24c0,1.61-0.66,3.15-1.83,4.29c-0.03,0.04-0.06,0.08-0.1,0.12l0.14,0.04\n      c0.46,0.13,0.76,0.56,0.73,1.04l-0.07,0.85c0.25,0.45,0.4,1.02,0.45,1.69c0.03,0.47,0.01,3.67,0.01,4.31\n      c-0.14,2.31-0.66,4.54-0.69,4.63c-0.1,0.68-0.34,1.18-0.71,1.5l-0.52,6.71c0,0.4-0.26,1.09-0.99,1.46\n      c-0.5,0.25-0.99,0.42-1.19,0.49C31,44.43,30.84,44.46,30.68,44.46L30.68,44.46z M30.5,41.93c0.1,0.1,0.25,0.26,0.4,0.41\n      c0.14-0.05,0.29-0.12,0.45-0.2l0.55-7.12c0.03-0.39,0.28-0.72,0.64-0.86c0.02-0.08,0.04-0.19,0.05-0.24\n      c0-0.01,0.02-0.12,0.02-0.13c0.01-0.07,0.51-2.2,0.64-4.28c0.01-1.78,0.01-3.84,0-4.09c-0.04-0.6-0.19-0.86-0.27-0.96\n      c-0.16-0.2-0.23-0.45-0.21-0.7l0.03-0.37l-1.61-0.45c-0.42-0.12-0.72-0.5-0.73-0.94s0.27-0.84,0.69-0.97l0.15-0.04\n      c0.05-0.01,0.1-0.03,0.14-0.05c0.05-0.02,0.1-0.05,0.15-0.08l0.13-0.07c0.17-0.08,0.28-0.14,0.38-0.2\n      c0.07-0.04,0.12-0.08,0.17-0.12l0.22-0.17c0.02-0.03,0.05-0.05,0.07-0.07c0.88-0.78,1.36-1.84,1.37-2.99\n      c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.74-1.17-2.79-1.17c-1.06,0-2.05,0.41-2.79,1.17c-0.75,0.75-1.16,1.76-1.16,2.83\n      c0,1.16,0.51,2.26,1.41,3.03c0.03,0.02,0.06,0.05,0.08,0.08l0.08,0.06c0.13,0.1,0.2,0.15,0.27,0.2c0.1,0.06,0.21,0.12,0.32,0.17\n      l0.19,0.1c0.03,0.02,0.07,0.04,0.1,0.05c0.39,0.16,0.64,0.55,0.62,0.98c-0.02,0.42-0.31,0.79-0.72,0.91l-1.25,0.36l0.02,0.44v0.13\n      c-0.01,0.08-0.01,0.16-0.01,0.25c-0.01,0.2-0.15,3.65-0.22,4.35c-0.08,0.85-0.38,3.12-0.38,3.12c-0.01,0.08-0.03,0.18-0.04,0.28\n      c0,0.02-0.01,0.04-0.01,0.06c0.24-0.03,0.49,0.02,0.71,0.16c0.27,0.17,0.44,0.49,0.45,0.81c0.23,4.28,0.33,6.11,0.36,6.57\n      c0.07,0.08,0.16,0.17,0.25,0.27l0.07-0.82c0.05-0.52,0.48-0.91,1-0.91h0.01c0.52,0,0.95,0.41,0.99,0.93\n      C30.43,40.79,30.49,41.69,30.5,41.93L30.5,41.93z M27.77,39.13l0.1,0.1L27.77,39.13z"/>\n    <path fill="#FABD2C" d="M25.51,31.34c-0.06,0.52-0.36,1.3,0.56,1.51s1.03-0.7,1.1-0.95c0,0,0.65-1.97,0.95-3.96\n      c0,0,0.33-3.44,0.33-3.85c0.02-1.52-0.66-1.99-1.35-1.84c-0.5,0.11-1.03,0.5-1.01,1.75c0,0-0.15,3.56-0.21,4.24\n      C25.81,29.09,25.51,31.34,25.51,31.34L25.51,31.34z"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M25.51,31.34c-0.06,0.52-0.36,1.3,0.56,1.51\n      s1.03-0.7,1.1-0.95c0,0,0.65-1.97,0.95-3.96c0,0,0.33-3.44,0.33-3.85c0.02-1.52-0.66-1.99-1.35-1.84c-0.5,0.11-1.03,0.5-1.01,1.75\n      c0,0-0.15,3.56-0.21,4.24C25.81,29.09,25.51,31.34,25.51,31.34L25.51,31.34z"/>\n    <path fill="#E58A2C" d="M33.86,22.64l-4.31-1.2c0,0-3.41,1.02-3.43,1.02l0.98,17.31l1.04,1.03c0,0,0.81-0.22,0.91-0.26\n      c0.1-0.03,0.1-0.18,0.1-0.18l0.15-1.68l0.7,4.1l0.72,0.66c0,0,0.6-0.18,1.16-0.47c0.45-0.23,0.45-0.65,0.45-0.65L33.86,22.64z"/>\n    <path fill="#FABD2C" d="M29.97,23.71l-3.89-1.29c0,0-0.03,0.01-0.03,0.09c0.08,1.5,0.91,16.72,0.92,16.99s0.12,0.37,0.12,0.37\n      s0.82,0.89,0.88,0.93s0.17,0,0.17,0s-0.08-0.04-0.09-0.23s0.38-7.48,0.38-7.48c0.01-0.37,0.07-0.52,0.23-0.53\n      c0.15,0,0.19,0.15,0.19,0.53c0,0,0.63,8.45,0.64,8.88s0.2,0.56,0.2,0.56s0.82,0.83,0.89,0.89c0.08,0.06,0.19,0.01,0.19,0.01\n      s-0.14-0.01-0.14-0.3C30.64,42.94,29.97,23.71,29.97,23.71L29.97,23.71z"/>\n    <path fill="#CE592C" d="M26.08,22.42l3.89,1.29l3.89-1.07l-4.37-1.2"/>\n    <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.7" cy="22.4" rx="2.13" ry="0.52"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M33.97,25.66c-0.04-1.67-0.72-2.46-1.44-2.22\n      c-0.81,0.27-1.29,1.03-1.21,2.4c0,0,0.07,3.73,0.03,4.48c-0.05,0.93-0.27,3.4-0.27,3.4c-0.05,0.57-0.33,1.44,0.68,1.63\n      c0.22,0.04,0.39-0.01,0.53-0.12l0.28-0.43c0,0,0.97-2.72,1.21-4.91C33.78,29.87,33.98,26.11,33.97,25.66L33.97,25.66z"/>\n    <path fill="#FABD2C" d="M31.73,33.53c-0.02,0.57-0.27,1.45,0.76,1.59c1.02,0.14,1.05-0.86,1.11-1.14c0,0,0.52-2.21,0.66-4.41\n      c0,0,0.03-3.78-0.01-4.23c-0.12-1.66-0.91-2.11-1.64-1.87c-0.53,0.17-1.08,0.65-0.94,2.01c0,0,0.18,3.89,0.18,4.64\n      C31.83,31.05,31.73,33.53,31.73,33.53L31.73,33.53z"/>\n    <path opacity="0.3" fill="#CE592C" enable-background="new    " d="M32.08,33.84c0,0,0.08-2.81,0.08-3.77\n      c0.01-0.79-0.3-4.73-0.3-4.73c-0.08-0.79,0.06-1.31,0.29-1.63c-0.34,0.28-0.59,0.82-0.49,1.79c0,0,0.18,3.89,0.18,4.64\n      c-0.01,0.93-0.11,3.41-0.11,3.41c-0.02,0.45-0.17,1.1,0.28,1.42C32.03,34.69,32.07,34.22,32.08,33.84L32.08,33.84z"/>\n    <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.93,21.74c-1.19,0-2.3-0.27-3.24-0.75\n      c0.87,0.77,2.01,1.24,3.26,1.24c1.28,0,2.44-0.49,3.32-1.28C32.31,21.45,31.16,21.74,29.93,21.74L29.93,21.74z"/>\n    <path opacity="0.6" fill="#CE592C" enable-background="new    " d="M27.13,22.77l0.94,4.66l0.76-4.1"/>\n  </g>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <g>\n    <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n      s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n      s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n    <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  </g>\n  <g>\n    <path fill="#333333" d="M29.67,43.83c-0.5,0-0.95-0.04-1.17-0.07c-0.33,0.02-0.56-0.08-0.71-0.18s-0.29-0.18-0.88-1.05\n      c-0.1-0.15-0.16-0.33-0.17-0.51c-0.01-0.19-1.01-18.74-1.11-20.21c-0.01-0.14,0.01-0.28,0.06-0.42c-1.07-1.11-1.69-2.6-1.69-4.16\n      c0-1.6,0.62-3.11,1.75-4.24c1.12-1.13,2.62-1.75,4.21-1.75h0.01c1.59,0,3.09,0.63,4.21,1.76s1.74,2.64,1.74,4.24\n      c0,1.74-0.75,3.35-2.02,4.47l0.19,0.15c0.26,0.21,0.4,0.54,0.36,0.88L32.48,42.4c-0.04,0.75-0.83,1.05-1.22,1.2\n      C30.82,43.78,30.21,43.83,29.67,43.83z M30.48,42.22c0,0.05-0.01,0.09-0.01,0.14v-0.12L30.48,42.22z M28.82,41.78\n      c0.63,0.06,1.44,0.06,1.71-0.04l1.87-18.66l-0.69-0.56c-0.23-0.14-0.4-0.36-0.46-0.62c-0.1-0.45,0.08-0.91,0.49-1.12\n      c1.35-0.69,2.18-2.05,2.18-3.54c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.77-1.14-2.8-1.17c-1.06,0-2.05,0.41-2.79,1.17\n      c-0.75,0.75-1.16,1.76-1.16,2.83c0,1.42,0.73,2.7,1.97,3.44c0.35,0.21,0.54,0.61,0.48,1.02c-0.07,0.41-0.37,0.73-0.77,0.82\n      c0.21,3.64,0.93,16.94,1.05,19.13C28.75,41.68,28.78,41.73,28.82,41.78L28.82,41.78z"/>\n    <path fill="#FFFFFF" d="M26.99,43.9h-0.06l-15.16-1.99c-0.25-0.03-0.44-0.25-0.44-0.5s0.19-0.46,0.44-0.5L26.58,39\n      c0.23-0.03,0.45,0.1,0.53,0.32s0.01,0.46-0.18,0.59c-0.01,0.01-1.05,0.76-0.77,1.39c0.43,0.94,1.18,1.75,1.19,1.75\n      c0.14,0.15,0.18,0.38,0.08,0.57C27.35,43.79,27.18,43.9,26.99,43.9L26.99,43.9z M15.71,41.41l10.13,1.33\n      c-0.2-0.3-0.42-0.65-0.59-1.02c-0.25-0.55-0.14-1.09,0.11-1.55L15.71,41.41z"/>\n    <path fill="#3F3F3F" d="M26.99,43.4c0,0-0.81-0.86-1.28-1.89c-0.47-1.03,0.94-2.01,0.94-2.01l-14.81,1.91L26.99,43.4L26.99,43.4z"\n      />\n    <path fill="#E58A2C" d="M33.45,22.64l-5.6-1.2c0,0-1.12,0.24-1.14,0.24l1.43,20.54l0.35,0.53c0,0,1.68,0.21,2.41-0.08\n      c0.58-0.23,0.58-0.34,0.58-0.34L33.45,22.64L33.45,22.64z"/>\n    <path fill="#FABD2C" d="M27.38,22.7l-0.73-1.06c0,0-0.04,0.01-0.03,0.09c0.1,1.5,1.11,20.23,1.11,20.23s0.47,0.7,0.58,0.76\n      c0.1,0.06,0.25,0.01,0.25,0.01s-0.18-0.01-0.18-0.3C28.37,42.24,27.38,22.7,27.38,22.7L27.38,22.7z"/>\n    <path fill="#CE592C" d="M26.65,21.65l0.73,1.05l6.07-0.06l-1.2-0.97"/>\n    <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.9" cy="22.01" rx="2.13" ry="0.52"/>\n    <path fill="#FABD2C" d="M29.26,33.53c-0.02,0.57-0.31,1.45,0.87,1.59c1.17,0.14,1.21-0.86,1.27-1.14c0,0,0.42-2.16,0.58-4.36\n      c0,0,0.21-3.83,0.17-4.28c-0.14-1.66-1.05-2.11-1.88-1.87c-0.61,0.17-1.24,0.65-1.08,2.01c0,0,0.03,3.94,0.02,4.69\n      C29.19,31.1,29.26,33.53,29.26,33.53z"/>\n    <path opacity="0.3" fill="#CE592C" enable-background="new    " d="M29.66,33.84c0,0-0.09-2.76-0.09-3.72\n      c0.01-0.79-0.16-4.78-0.16-4.78c-0.09-0.79,0.06-1.31,0.33-1.63c-0.39,0.28-0.68,0.82-0.56,1.79c0,0,0.03,3.94,0.02,4.69\n      c-0.01,0.93,0.05,3.36,0.05,3.36c-0.02,0.45-0.2,1.1,0.32,1.42C29.6,34.69,29.65,34.22,29.66,33.84L29.66,33.84z"/>\n    <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.93,21.74c-1.19,0-2.3-0.27-3.24-0.75\n      c0.87,0.77,2.01,1.24,3.26,1.24c1.28,0,2.44-0.49,3.32-1.28C32.31,21.45,31.16,21.74,29.93,21.74L29.93,21.74z"/>\n  </g>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <g>\n    <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.2c-11.24,0-20.35,6.46-20.35,14.42\n      s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.68,33.65,41.57,27.2,30.33,27.2z M30.21,55.04\n      c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.04,30.21,55.04z"/>\n    <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.51" rx="19.47" ry="13.53"/>\n  </g>\n  <g>\n    <path fill="#FFFFFF" d="M25.76,42.6c-0.07,0-0.14-0.01-0.2-0.04l-12.42-5.44c-0.23-0.1-0.35-0.35-0.28-0.59\n      c0.06-0.24,0.29-0.4,0.54-0.37l15.03,1.64c0.24,0.03,0.42,0.21,0.44,0.45s-0.12,0.45-0.35,0.53c-1.03,0.33-2.18,0.96-2.26,1.39\n      c-0.18,1-0.02,1.82-0.01,1.83c0.04,0.18-0.03,0.37-0.17,0.49C25.99,42.57,25.87,42.6,25.76,42.6L25.76,42.6z M16.53,37.52\n      l8.65,3.79c-0.01-0.37,0.01-0.82,0.1-1.32c0.1-0.56,0.63-1.03,1.21-1.39L16.53,37.52L16.53,37.52z"/>\n    <path fill="#3F3F3F" d="M25.76,42.1c0,0-0.22-0.92,0.01-2.03c0.22-1.04,2.6-1.78,2.6-1.78l-15.03-1.64L25.76,42.1L25.76,42.1z"/>\n    <path fill="#333333" d="M28.81,44.46c-0.16,0-0.31-0.03-0.46-0.09c-0.2-0.07-0.69-0.24-1.19-0.49c-0.74-0.37-1-1.07-1-1.54\n      l-0.51-6.59c-0.82-0.58-0.73-1.65-0.7-2.06l0.01-0.2c0-0.01,0.1-2.46,0.11-3.38c0-0.24-0.02-1.02-0.12-3.38l-0.31-4.02\n      c-0.04-0.48,0.27-0.91,0.73-1.04l0.46-0.13c-0.01-0.01-0.01-0.02-0.02-0.03c-1.16-1.13-1.82-2.68-1.83-4.28\n      c0-1.6,0.62-3.11,1.74-4.24c1.12-1.13,2.62-1.76,4.22-1.76h0.01c1.59,0,3.09,0.62,4.21,1.75c1.13,1.13,1.75,2.64,1.75,4.24\n      c0,1.63-0.67,3.19-1.86,4.33c0.06,0.04,0.12,0.09,0.18,0.14c0.58,0.5,0.86,1.31,0.85,2.41c0,0.43-0.28,3.35-0.34,3.93\n      c-0.2,1.33-0.53,2.6-0.78,3.47c-0.22,4-0.43,7.85-0.44,8.03c-0.03,0.63-0.32,0.96-0.45,1.07c-0.84,0.92-0.89,0.96-1.01,1.03\n      c-0.4,0.25-0.81,0.17-0.99,0.12c-0.02,0-0.04-0.01-0.06-0.01C31,41.87,31,41.95,31,41.99c-0.01,0.69-0.31,1.08-0.5,1.26\n      c-0.13,0.13-0.87,0.88-0.95,0.94C29.34,44.37,29.08,44.46,28.81,44.46L28.81,44.46z M28.15,42.14c0.16,0.08,0.32,0.14,0.45,0.2\n      c0.14-0.15,0.3-0.31,0.4-0.4c0.02-0.46,0.16-2.31,0.22-3.12c0.04-0.52,0.47-0.92,0.99-0.93h0.01c0.52,0,0.95,0.39,1,0.91\n      l0.07,0.82c0.09-0.1,0.18-0.19,0.25-0.27c0.02-0.4,0.11-2.03,0.44-8.06c0-0.08,0.02-0.15,0.04-0.23c0.24-0.81,0.56-2.04,0.75-3.26\n      c0.15-1.61,0.32-3.47,0.32-3.71c0.01-0.69-0.16-0.87-0.16-0.87c-0.15,0.02-0.25,0.04-0.39,0l-1.14-0.33\n      c-0.41-0.12-0.7-0.48-0.72-0.91c-0.02-0.43,0.23-0.82,0.63-0.98l0.12-0.05c0.06-0.03,0.12-0.06,0.17-0.08l0.11-0.06\n      c0.13-0.06,0.25-0.12,0.37-0.2c0.07-0.04,0.13-0.1,0.2-0.15c0.06-0.05,0.11-0.08,0.15-0.11c0.02-0.03,0.05-0.05,0.08-0.07\n      c0.9-0.77,1.41-1.88,1.41-3.03c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.74-1.17-2.79-1.17c-1.06,0-2.05,0.42-2.8,1.17\n      c-0.75,0.76-1.16,1.76-1.16,2.83c0,1.15,0.49,2.21,1.37,2.99c0.03,0.02,0.05,0.05,0.08,0.08l0.22,0.17l0.15,0.12\n      c0.11,0.07,0.22,0.13,0.34,0.18l0.17,0.09c0.05,0.03,0.1,0.05,0.15,0.08c0,0,0.12,0.05,0.13,0.05c0.41,0.15,0.67,0.55,0.65,0.98\n      s-0.31,0.81-0.73,0.92l-1.81,0.51l0.25,3.23c0.09,1.99,0.13,3.13,0.12,3.51c-0.01,0.94-0.11,3.44-0.11,3.44\n      c0,0.08-0.01,0.18-0.02,0.28c-0.01,0.08-0.02,0.2-0.02,0.29c0.36,0.14,0.64,0.48,0.67,0.87L28.15,42.14L28.15,42.14z M31.67,39.2\n      c-0.03,0.02-0.05,0.04-0.06,0.07C31.64,39.22,31.67,39.2,31.67,39.2z"/>\n    <path fill="#CE592C" d="M31.14,31.34c-0.06,0.52-0.36,1.3,0.56,1.51s1.03-0.7,1.1-0.95c0,0,0.65-1.97,0.95-3.96\n      c0,0,0.33-3.44,0.33-3.85c0.02-1.52-0.66-1.99-1.35-1.84c-0.5,0.11-1.03,0.5-1.01,1.75c0,0-0.15,3.56-0.21,4.24\n      C31.43,29.09,31.14,31.34,31.14,31.34L31.14,31.34z"/>\n    <path fill="#FDBF2D" d="M25.64,22.64l4.31-1.2c0,0,3.41,1.02,3.43,1.02L32.4,39.77l-1.04,1.03c0,0-0.81-0.22-0.91-0.26\n      c-0.1-0.03-0.1-0.18-0.1-0.18l-0.15-1.68l-0.7,4.1l-0.72,0.66c0,0-0.6-0.18-1.16-0.47c-0.45-0.23-0.45-0.65-0.45-0.65L25.64,22.64\n      z"/>\n    <path fill="#CE592C" d="M26.43,33.85c-0.01,0.58-0.14,1.33,0.9,1.51c0.76,0.13,0.77-0.13,1.03-1.17c0,0,0.44-2.57,0.55-4.83\n      c0,0,0.13-3.4,0.08-3.86c-0.16-1.71-0.98-2.15-1.72-1.91c-0.55,0.18-1.1,0.67-0.93,2.07c0,0,0.14,3.92,0.15,4.7\n      C26.5,31.3,26.43,33.85,26.43,33.85L26.43,33.85z"/>\n    <path fill="#FABD2C" d="M29.53,23.71l3.89-1.29c0,0,0.03,0.01,0.03,0.09c-0.08,1.5-0.91,16.72-0.92,16.99s-0.12,0.37-0.12,0.37\n      s-0.82,0.89-0.88,0.93s-0.17,0-0.17,0s0.08-0.04,0.09-0.23s-0.38-7.48-0.38-7.48c-0.01-0.37-0.07-0.52-0.23-0.53\n      c-0.15,0-0.19,0.15-0.19,0.53c0,0-0.63,8.45-0.64,8.88s-0.2,0.56-0.2,0.56s-0.82,0.83-0.89,0.89c-0.08,0.06-0.19,0.01-0.19,0.01\n      s0.14-0.01,0.14-0.3C28.86,42.94,29.53,23.71,29.53,23.71L29.53,23.71z"/>\n    <path opacity="0.3" fill="#CE592C" enable-background="new    " d="M29.53,23.71l3.89-1.29c0,0,0.03,0.01,0.03,0.09\n      c-0.08,1.5-0.91,16.72-0.92,16.99s-0.12,0.37-0.12,0.37s-0.82,0.89-0.88,0.93s-0.17,0-0.17,0s0.08-0.04,0.09-0.23\n      s-0.38-7.48-0.38-7.48c-0.01-0.37-0.07-0.52-0.23-0.53c-0.15,0-0.19,0.15-0.19,0.53c0,0-0.63,8.45-0.64,8.88s-0.2,0.56-0.2,0.56\n      s-0.82,0.83-0.89,0.89c-0.08,0.06-0.19,0.01-0.19,0.01s0.14-0.01,0.14-0.3C28.86,42.94,29.53,23.71,29.53,23.71L29.53,23.71z"/>\n    <path fill="#CE592C" d="M33.42,22.42l-3.89,1.29l-3.89-1.07l4.37-1.2"/>\n    <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.8" cy="22.4" rx="2.13" ry="0.52"/>\n    <path fill="#FABD2C" d="M25.97,33.53c-0.02,0.57-0.27,1.45,0.76,1.59c1.02,0.14,1.05-0.86,1.11-1.14c0,0,0.52-2.21,0.66-4.41\n      c0,0,0.03-3.78-0.01-4.23c-0.12-1.66-0.91-2.11-1.64-1.87c-0.53,0.17-1.08,0.65-0.94,2.01c0,0,0.18,3.89,0.18,4.64\n      C26.07,31.05,25.97,33.53,25.97,33.53L25.97,33.53z"/>\n    <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M25.97,33.53c-0.02,0.57-0.27,1.45,0.76,1.59\n      c1.02,0.14,1.05-0.86,1.11-1.14c0,0,0.52-2.21,0.66-4.41c0,0,0.03-3.78-0.01-4.23c-0.12-1.66-0.91-2.11-1.64-1.87\n      c-0.53,0.17-1.08,0.65-0.94,2.01c0,0,0.18,3.89,0.18,4.64C26.07,31.05,25.97,33.53,25.97,33.53L25.97,33.53z"/>\n    <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.98,21.74c1.19,0,2.3-0.27,3.24-0.75\n      c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.6,21.45,28.75,21.74,29.98,21.74L29.98,21.74z"/>\n    <path fill="#FDBF2D" d="M25.99,33.53c-0.04,1.16,0.54,0.95,0.82,0.81c0.99-0.52,1.09-5.12,1.2-6.56c0.07-0.97,0.16-3.58-0.78-4.26\n      c-0.55-0.21-1.04,0.42-1.09,0.51c-0.19,0.31-0.29,0.77-0.22,1.45c0,0,0.18,3.89,0.18,4.64C26.09,31.05,25.99,33.53,25.99,33.53z"\n      />\n  </g>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <g>\n    <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.2c-11.24,0-20.35,6.46-20.35,14.42\n      s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.68,33.65,41.57,27.2,30.33,27.2z M30.21,55.04\n      c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.04,30.21,55.04z"/>\n    <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.51" rx="19.47" ry="13.53"/>\n  </g>\n  <g>\n    <path fill="#FFFFFF" d="M25.23,41.88c-0.14,0-0.27-0.06-0.37-0.16l-7.88-8.59c-0.16-0.17-0.18-0.43-0.04-0.62\n      c0.13-0.19,0.38-0.26,0.6-0.18l13.95,5.63c0.22,0.09,0.35,0.33,0.3,0.57s-0.25,0.41-0.51,0.4c-2.16-0.08-4.25,0.11-4.56,0.42\n      c-0.49,0.49-0.89,1.73-1,2.16c-0.05,0.18-0.19,0.32-0.36,0.36C25.31,41.88,25.27,41.88,25.23,41.88z M19.21,34.08l5.81,6.33\n      c0.21-0.58,0.55-1.33,0.99-1.77c0.43-0.43,1.61-0.62,2.77-0.69L19.21,34.08z"/>\n    <path fill="#3F3F3F" d="M25.23,41.38c0,0,0.38-1.63,1.13-2.39c0.75-0.75,4.93-0.57,4.93-0.57l-13.95-5.63L25.23,41.38z"/>\n    <path fill="#333333" d="M27.48,44.47c-0.26,0-0.52-0.09-0.7-0.28c-0.12-0.12-0.75-0.76-0.99-1.1c-0.37-0.51-0.41-1.07-0.41-1.3\n      l-0.36-6.17c-0.96-0.56-0.9-1.66-0.88-2.07l0.01-0.14c0-0.01,0.1-2.46,0.11-3.38c0.01-0.75-0.07-4.55-0.07-4.55\n      c-0.06-0.55-0.01-1.06,0.15-1.51l-0.06-1.08c-0.03-0.1-0.04-0.2-0.03-0.31c0.03-0.45,0.33-0.84,0.78-0.93l0.79-0.16\n      c-1.15-1.13-1.8-2.67-1.81-4.26c0-1.6,0.62-3.11,1.74-4.24c1.12-1.13,2.62-1.76,4.22-1.76h0.01c1.59,0,3.09,0.62,4.21,1.75\n      c1.13,1.13,1.75,2.64,1.75,4.24c0,1.52-0.58,2.97-1.62,4.09l0.46,0.13c0.16,0.03,0.31,0.1,0.43,0.19c0.51,0.3,1.17,0.99,1.14,2.61\n      c0,0.43-0.28,3.35-0.34,3.93c-0.31,2.06-0.75,3.97-0.77,4.05c-0.04,0.25-0.1,0.6-0.3,0.92c-0.22,3.53-0.41,6.62-0.41,6.76\n      c-0.04,0.61-0.39,1.01-0.7,1.19c-1.32,0.91-1.4,0.94-1.52,0.99c-0.06,0.02-0.14,0.04-0.23,0.06c-0.11,0.03-0.22,0.03-0.33,0.02\n      c-0.14-0.01-0.27-0.03-0.27-0.03c-0.16-0.03-0.31-0.1-0.43-0.19c-0.11-0.04-0.23-0.09-0.34-0.13c-0.01,0.09-0.02,0.15-0.02,0.18\n      c-0.02,0.72-0.45,1.19-0.83,1.39c-0.21,0.12-1.48,0.86-1.6,0.92c-0.19,0.1-0.41,0.13-0.63,0.15\n      C27.57,44.47,27.52,44.47,27.48,44.47z M26.13,33.94c0.01,0,0.02,0,0.04,0.01c0.45,0.09,0.79,0.47,0.81,0.92l0.4,6.85v0.12\n      c0,0.01,0.01,0.07,0.03,0.09c0.05,0.07,0.18,0.22,0.33,0.38c0.32-0.18,0.72-0.42,0.95-0.55c0.04-0.36,0.17-1.41,0.66-4.95\n      c0.07-0.5,0.49-0.86,0.99-0.86h0.03c0.51,0.01,0.93,0.41,0.97,0.91l0.28,3.18c0.05,0.02,0.09,0.03,0.14,0.05\n      c0.24-0.16,0.56-0.38,0.77-0.52c0.05-0.82,0.23-3.69,0.42-6.86c0.01-0.24,0.11-0.46,0.27-0.63c0.01-0.03,0.01-0.06,0.01-0.09\n      c0.02-0.1,0.03-0.18,0.05-0.25c0,0,0.43-1.88,0.72-3.79c0.15-1.61,0.32-3.47,0.32-3.71c0.01-0.55-0.11-0.8-0.15-0.86\n      c-0.05,0.04-0.1,0.08-0.15,0.11c-0.1,0.07-0.22,0.12-0.34,0.14l-1.31,0.27c-0.29,0.06-0.6-0.01-0.83-0.2s-0.37-0.48-0.37-0.78\n      c0-0.2,0.06-0.39,0.17-0.55c-0.13-0.15-0.21-0.35-0.23-0.55c-0.04-0.41,0.18-0.8,0.55-0.99c0.19-0.1,0.31-0.16,0.43-0.23\n      c0.07-0.05,0.14-0.1,0.21-0.16c0.06-0.04,0.1-0.08,0.14-0.1c0.02-0.03,0.05-0.05,0.08-0.07c0.9-0.77,1.41-1.88,1.41-3.03\n      c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.74-1.17-2.79-1.17c-1.06,0-2.05,0.42-2.8,1.17c-0.75,0.76-1.16,1.76-1.16,2.83\n      c0,1.15,0.49,2.21,1.37,2.99c0.03,0.02,0.05,0.05,0.08,0.08l0.21,0.16c0.05,0.04,0.11,0.09,0.16,0.12\n      c0.11,0.07,0.22,0.13,0.34,0.18l0.17,0.09c0.05,0.03,0.1,0.05,0.15,0.08c0.06,0.02,0.11,0.04,0.17,0.05l0.13,0.04\n      c0.43,0.14,0.72,0.55,0.7,1.01c-0.02,0.45-0.35,0.84-0.8,0.93l-2.36,0.48l0.04,0.65c0.01,0.17-0.02,0.33-0.09,0.49\n      c-0.06,0.12-0.11,0.35-0.07,0.8c0,0.08,0.08,3.93,0.08,4.68c-0.01,0.94-0.11,3.44-0.11,3.44l-0.01,0.16\n      C26.13,33.75,26.13,33.85,26.13,33.94L26.13,33.94z M32.74,39.41c-0.03,0.01-0.05,0.03-0.07,0.05\n      C32.72,39.43,32.74,39.41,32.74,39.41z"/>\n    <path fill="#FDBF2D" d="M25.26,22.64l4.46-0.83c0,0,2.42,0.35,2.43,0.35l0.46,17.98l-0.78,1.03c0,0-1.02-0.38-1.1-0.41\n      c-0.08-0.03-0.07-0.18-0.07-0.18L30,33.05l-1.46,9.74l-1.04,0.7c0,0-0.68-0.69-0.89-0.98c-0.24-0.33-0.22-0.73-0.22-0.73\n      L25.26,22.64z"/>\n    <path fill="#CE592C" d="M25.55,33.57c-0.01,0.57-0.14,1.3,0.87,1.46c0.74,0.12,0.75-0.12,1-1.14c0,0,0.44-2.51,0.55-4.71\n      c0,0,0.13-3.31,0.09-3.76c-0.15-1.66-0.94-2.09-1.67-1.85c-0.53,0.18-1.07,0.66-0.91,2.02c0,0,0.13,3.82,0.13,4.57\n      C25.63,31.09,25.55,33.57,25.55,33.57z"/>\n    <path fill="#FABD2C" d="M25.15,33.46c-0.02,0.57-0.16,1.3,0.85,1.48c0.74,0.13,0.75-0.11,1.02-1.13c0,0,0.47-2.5,0.61-4.71\n      c0,0,0.18-3.31,0.14-3.76c-0.12-1.66-0.91-2.11-1.64-1.87c-0.53,0.17-1.08,0.65-0.94,2.01c0,0,0.08,3.82,0.07,4.58\n      C25.25,30.98,25.15,33.46,25.15,33.46z"/>\n    <path opacity="0.3" fill="#CE592C" enable-background="new    " d="M25.15,33.46c-0.02,0.57-0.16,1.3,0.85,1.48\n      c0.74,0.13,0.75-0.11,1.02-1.13c0,0,0.47-2.5,0.61-4.71c0,0,0.18-3.31,0.14-3.76c-0.12-1.66-0.91-2.11-1.64-1.87\n      c-0.53,0.17-1.08,0.65-0.94,2.01c0,0,0.08,3.82,0.07,4.58C25.25,30.98,25.15,33.46,25.15,33.46z"/>\n    <path fill="#FDBF2D" d="M25.15,33.46c-0.04,1.16,0.68,1.07,0.93,0.87c0.63-0.5,0.71-5.21,0.82-6.64c0.07-0.97-0.09-3.4-0.4-4.17\n      c-0.55-0.21-1.04,0.42-1.09,0.51c-0.19,0.31-0.29,0.77-0.22,1.45c0,0,0.08,3.82,0.07,4.58C25.25,30.98,25.15,33.46,25.15,33.46\n      L25.15,33.46z"/>\n    <path fill="#E58A2C" d="M32.58,31.45c-0.01,0.67-0.2,1.27,0.73,1.43c0.91,0.15,0.86-0.61,0.93-0.87c0,0,0.45-1.92,0.75-3.91\n      c0,0,0.33-3.44,0.33-3.85c0.02-1.52-0.66-1.99-1.35-1.84c-0.5,0.11-1.03,0.5-1.01,1.75c0,0-0.15,3.56-0.21,4.24\n      C32.67,29.24,32.58,31.45,32.58,31.45z"/>\n    <path fill="#FABD2C" d="M28.38,23.71l6.17-1.29c0,0,0.05,0.01,0.04,0.09c-0.13,1.5-1.07,17.08-1.09,17.34\n      c-0.02,0.27-0.19,0.37-0.19,0.37s-1.3,0.89-1.39,0.93s-0.27,0-0.27,0s0.13-0.04,0.14-0.23c0.02-0.19-0.3-7.46-0.3-7.46\n      c-0.01-0.37-0.11-0.52-0.36-0.53c-0.24,0-0.29,0.15-0.31,0.53c0,0-1.14,8.05-1.15,8.48s-0.31,0.56-0.31,0.56s-1.47,0.86-1.59,0.92\n      s-0.3,0.01-0.3,0.01s0.22-0.01,0.22-0.3C27.69,42.94,28.38,23.71,28.38,23.71L28.38,23.71z"/>\n    <path opacity="0.3" fill="#CE592C" enable-background="new    " d="M28.38,23.71l6.17-1.29c0,0,0.05,0.01,0.04,0.09\n      c-0.13,1.5-1.07,17.08-1.09,17.34c-0.02,0.27-0.19,0.37-0.19,0.37s-1.3,0.89-1.39,0.93s-0.27,0-0.27,0s0.13-0.04,0.14-0.23\n      c0.02-0.19-0.3-7.46-0.3-7.46c-0.01-0.37-0.11-0.52-0.36-0.53c-0.24,0-0.29,0.15-0.31,0.53c0,0-1.14,8.05-1.15,8.48\n      s-0.31,0.56-0.31,0.56s-1.47,0.86-1.59,0.92s-0.3,0.01-0.3,0.01s0.22-0.01,0.22-0.3C27.69,42.94,28.38,23.71,28.38,23.71\n      L28.38,23.71z"/>\n    <path fill="#CE592C" d="M34.51,22.42l-6.14,1.29l-3.15-1.07l5.88-1.2"/>\n    <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="30.05" cy="22.41" rx="2.25" ry="0.43"/>\n    <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.98,21.74c1.19,0,2.3-0.27,3.24-0.75\n      c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.6,21.45,28.75,21.74,29.98,21.74L29.98,21.74z"/>\n  </g>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <g>\n    <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.2c-11.24,0-20.35,6.46-20.35,14.42\n      s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.68,33.65,41.57,27.2,30.33,27.2z M30.21,55.04\n      c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.04,30.21,55.04z"/>\n    <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.51" rx="19.47" ry="13.53"/>\n  </g>\n  <path fill="#FFFFFF" d="M25.23,41.88c-0.21,0-0.4-0.13-0.47-0.33l-4.3-11.67c-0.08-0.21,0-0.45,0.18-0.58s0.44-0.12,0.61,0.03\n    l10.37,8.71c0.16,0.14,0.22,0.36,0.15,0.56c-0.08,0.2-0.29,0.31-0.49,0.32c-2.16-0.08-4.25,0.11-4.56,0.42\n    c-0.49,0.49-0.89,1.73-1,2.16c-0.05,0.21-0.24,0.36-0.46,0.37C25.25,41.88,25.24,41.88,25.23,41.88z M22.05,31.3l3.17,8.6\n    c0.2-0.46,0.47-0.94,0.79-1.27c0.58-0.58,2.47-0.71,3.89-0.73L22.05,31.3z"/>\n  <path fill="#3F3F3F" d="M25.23,41.38c0,0,0.38-1.63,1.13-2.39c0.75-0.75,4.93-0.57,4.93-0.57l-10.37-8.71L25.23,41.38L25.23,41.38z\n    "/>\n  <path fill="#333333" d="M26.56,43.7c-0.18,0-0.37-0.03-0.58-0.08l-0.5-0.14l-0.11-0.3c-0.65-0.61-1.01-1.18-1.06-1.69\n    c-0.02-0.21-0.04-0.44-0.01-0.65l-0.17-5.13c-0.05,0.01-0.09,0.02-0.13,0.02c-0.53,0.08-1.21-0.13-1.58-0.26\n    c-0.62-0.16-1.02-0.85-0.9-1.64c0.08-0.68,0.45-3.36,0.75-5.23c0.4-2.47,0.88-4.5,0.9-4.58c0.06-0.39,0.25-0.83,0.53-1.2\n    l-0.01-0.46c-0.01-0.33,0.11-0.65,0.34-0.9c0.23-0.24,0.54-0.38,0.88-0.39l0.47-0.01c-0.86-1.05-1.37-2.39-1.37-3.82\n    c0-1.6,0.62-3.11,1.74-4.24c1.12-1.13,2.62-1.76,4.22-1.76h0.01c1.59,0,3.09,0.62,4.21,1.75s1.74,2.64,1.75,4.24\n    c0,1.62-0.63,3.12-1.71,4.22c0.37,0.21,0.8,0.46,1.15,0.68c1.08,0.67,1.28,1.95,1.31,2.31c0.21,1.1,0.74,3.9,0.88,4.48\n    c0.23,0.93,0.66,3.25,0.68,3.34c0.02,0.12,0.04,0.21,0.06,0.3c0.11,0.54,0.4,1.96-1.3,2.51c-0.54,0.18-1.03,0.16-1.45-0.06\n    c-0.35-0.18-0.57-0.46-0.7-0.71c-0.22,3.57-0.41,6.62-0.42,6.74c-0.04,0.61-0.39,1.01-0.7,1.19l-0.3,0.11c0,0-1.5,0.31-1.99,0.42\n    l-0.04,0.04l-0.24,0.03c-0.01,0-0.03,0-0.05,0.01l-0.05,0.01c-0.14,0.02-0.41,0.03-0.69-0.08c-0.11-0.04-0.18-0.07-0.52-0.36\n    c-0.18,0.41-0.49,0.68-0.77,0.8l-0.22,0.07c-0.72,0.13-1.59,0.31-1.82,0.37C26.91,43.67,26.75,43.7,26.56,43.7L26.56,43.7z\n     M26.25,41.78c-0.01,0-0.01,0.01-0.02,0.01C26.23,41.79,26.24,41.78,26.25,41.78z M26.31,41.24c0.06,0.09,0.19,0.24,0.36,0.41\n    c0.25-0.06,0.66-0.14,1.36-0.28c0.07-0.72,0.3-2.64,0.67-5.71l1.99,0.1l0.11,4.79c0.09,0.08,0.18,0.16,0.27,0.23\n    c0.25-0.06,0.67-0.15,1.4-0.3c0.09-1.51,0.42-6.79,0.69-11.21l1.95-0.23c0.39,1.26,0.83,2.48,1.1,3.21\n    c-0.13-0.69-0.42-2.2-0.58-2.86c-0.19-0.75-0.89-4.48-0.92-4.63l-0.02-0.13c-0.01-0.19-0.12-0.64-0.37-0.79\n    c-0.55-0.34-1.3-0.77-1.68-0.98l-0.81,0.02l-0.4-1.93c1.52-0.61,2.5-2.07,2.5-3.71c0-1.07-0.41-2.07-1.16-2.83\n    c-0.75-0.75-1.74-1.17-2.79-1.17c-1.06,0-2.05,0.42-2.8,1.17c-0.75,0.76-1.16,1.76-1.16,2.83c0,1.72,1.09,3.24,2.71,3.79\n    l-0.29,1.95l-2.71,0.08l0.02,0.57l-0.35,0.31c-0.12,0.11-0.23,0.31-0.25,0.47c-0.02,0.09-0.5,2.12-0.89,4.51\n    c-0.31,1.94-0.59,3.97-0.7,4.8c0.02,0,0.03,0.01,0.04,0.01l0.44-1.92L26.01,32L26.31,41.24L26.31,41.24z M23.02,33.56\n    c0.03,0.01,0.05,0.02,0.08,0.03C23.08,33.58,23.05,33.57,23.02,33.56z"/>\n  <path fill="#FABD2C" d="M37.27,32.44c0.12,0.73,0.42,1.35-0.57,1.67c-0.97,0.31-1.03-0.53-1.15-0.79c0,0-0.79-2.02-1.44-4.14\n    c0,0-0.9-3.69-0.98-4.14c-0.26-1.66,0.41-2.27,1.17-2.21c0.56,0.04,1.2,0.38,1.38,1.75c0,0,0.72,3.85,0.91,4.58\n    C36.82,30.06,37.27,32.44,37.27,32.44z"/>\n  <path fill="#E58A2C" d="M37.29,32.44c0.12,0.73,0.42,1.35-0.57,1.67c-0.97,0.31-1.03-0.53-1.15-0.79c0,0-0.79-2.02-1.44-4.14\n    c0,0-0.9-3.69-0.98-4.14c-0.26-1.66,0.41-2.27,1.17-2.21c0.56,0.04,1.2,0.38,1.38,1.75c0,0,0.72,3.85,0.91,4.58\n    C36.84,30.06,37.29,32.44,37.29,32.44z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M34.26,29.87l0.2-7.11l0.41,0.31c0,0-0.06,5.4,0.11,6.64\n    c0.17,1.24,0.45,3.13,0.45,3.13L34.26,29.87L34.26,29.87z"/>\n  <path fill="none" d="M24.69,22.07h8.2v20.56h-8.2C24.69,42.63,24.69,22.07,24.69,22.07z"/>\n  <path fill="#FDBF2D" d="M24.69,22.07l0.6,18.85c0,0-0.04,0.04,0.01,0.47c0.04,0.48,0.95,1.24,0.95,1.24l1.87-0.57l1.25-10.04\n    l0.24,0.77l0.18,8.22l0.95,0.81l0.18,0.02l1.44-1.03l0.51-18.03l-2.05-0.32L24.69,22.07"/>\n  <path fill="#FABD2C" d="M34.54,22.74L26.27,23c-0.5,15.19,0.06,15.86-0.04,19.32c-0.01,0.3,0.01,0.32,0.01,0.32\n    s0.18,0.05,0.33,0.05c0.05,0,0.1-0.01,0.13-0.02c0.12-0.06,1.99-0.41,1.99-0.41s0.3-0.13,0.32-0.56c0.01-0.43,0.87-7.49,0.87-7.49\n    c0.05-0.65,0.14-0.75,0.4-0.75c0.24,0,0.34,0.15,0.35,0.52c0,0,0.3,7.41,0.28,7.6c-0.02,0.19-0.14,0.22-0.14,0.22h0.27\n    c0.1-0.04,2.21-0.47,2.21-0.47s0.17-0.1,0.19-0.38L34.54,22.74"/>\n  <path opacity="0.3" fill="#CE592C" enable-background="new    " d="M34.57,22.74L26.3,23c-0.5,15.19,0.06,15.86-0.05,19.32\n    c-0.01,0.3,0.02,0.32,0.02,0.32s0.18,0.05,0.32,0.05c0.05,0,0.09-0.01,0.12-0.02c0.13-0.06,2-0.41,2-0.41s0.3-0.13,0.31-0.56\n    c0.02-0.43,0.88-7.49,0.88-7.49c0.04-0.65,0.14-0.75,0.39-0.75s0.35,0.15,0.36,0.52c0,0,0.3,7.41,0.27,7.6\n    c-0.01,0.19-0.14,0.22-0.14,0.22h0.27c0.09-0.04,2.2-0.47,2.2-0.47s0.18-0.1,0.2-0.38c0.02-0.26,1.02-16.63,1.14-18.14L34.57,22.74\n    "/>\n  <path fill="#CE592C" d="M32.89,21.84l-8.2,0.23l1.57,0.96l8.25-0.29L32.89,21.84"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="30.01" cy="22.37" rx="2.25" ry="0.3"/>\n  <ellipse fill="#FABD2C" cx="29.98" cy="17.23" rx="4.96" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M30,21.74c1.19,0,2.3-0.27,3.24-0.75\n    c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.62,21.45,28.77,21.74,30,21.74L30,21.74z"/>\n  <path fill="#FABD2C" d="M25.94,26.06c-0.1,1.59-0.92,5.97-0.92,5.97l-0.54,2.33c-0.08,0.24-0.27,0.33-0.62,0.38\n    s-1.09-0.21-1.09-0.21c-0.23-0.06-0.29-0.3-0.25-0.55c0,0,0.35-2.72,0.75-5.23c0.4-2.46,0.89-4.51,0.89-4.51\n    c0.1-0.61,0.59-1.29,1.17-1.34c0,0,0.69,0,0.71,1.06C26.06,25.08,25.94,26.06,25.94,26.06L25.94,26.06z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M25.52,22.95c0.2,0.08,0.5,0.32,0.52,1.01\n    c0.03,1.12-0.1,2.1-0.1,2.1c-0.09,1.36-0.7,4.73-0.87,5.7l-0.01,0.05C25.05,31.81,25.63,26.32,25.52,22.95z"/>\n</svg>\n'.split(";");
    _.wj(ZL, _.T);
    _.p = ZL.prototype;
    _.p.mode_changed = function() {
        bM(this);
        cM(this)
    };
    _.p.heading_changed = function() {
        7 == this.l() && bM(this)
    };
    _.p.position_changed = function() {
        var a = this.l();
        if (5 == a || 6 == a || 3 == a || 4 == a) this.get("position") ? (this.J.setVisible(!0), this.K.setVisible(!1), this.set("lilypadIcon", gM(this))) : (a = this.l(), 5 == a ? this.j(6) : 3 == a && this.j(4));
        else {
            var b = this.get("position");
            b && 1 == a && this.j(7);
            this.set("dragPosition", b)
        }
    };
    _.p.Tk = function(a) {
        this.set("dragging", !0);
        this.j(5);
        this.A = a.pixel.x
    };
    _.p.Uk = function(a) {
        var b = this;
        a = a.pixel.x;
        a > b.A + 5 ? (this.j(5), b.A = a) : a < b.A - 5 && (this.j(3), b.A = a);
        cM(this);
        window.clearTimeout(b.m);
        b.m = window.setTimeout(function() {
            _.S.trigger(b, "hover");
            b.m = 0
        }, 300)
    };
    _.p.Sk = function() {
        this.set("dragging", !1);
        this.j(1);
        window.clearTimeout(this.m);
        this.m = 0
    };
    _.A(iM, _.T);
    _.p = iM.prototype;
    _.p.mode_changed = function() {
        var a = _.sI(this.zg());
        a != this.m && (a ? lM(this) : kM(this))
    };
    _.p.tilt_changed = iM.prototype.heading_changed = function() {
        this.m && (kM(this), lM(this))
    };
    _.p.Gh = function(a) {
        var b = this,
            c = this.get("dragPosition"),
            d = this.j.getZoom(),
            e = Math.max(50, 35 * Math.pow(2, 16 - d));
        this.set("hover", a);
        this.B = !1;
        _.U("streetview").then(function(f) {
            var g = b.ja || void 0;
            b.l || (b.l = new f.Zi(g), b.l.bindTo("result", b, null, !0));
            b.l.getPanoramaByLocation(c, e, g ? void 0 : 100 > e ? "nearest" : "best")
        })
    };
    _.p.result_changed = function() {
        var a = this.get("result"),
            b = a && a.location;
        this.set("position", b && b.latLng);
        this.set("description", b && b.shortDescription);
        this.set("panoId", b && b.pano);
        this.B ? this.Ze(1) : this.get("hover") || this.set("panoramaVisible", !!a)
    };
    _.p.panoramaVisible_changed = function() {
        this.B = 0 == this.get("panoramaVisible");
        this.zg();
        var a = this.get("panoramaVisible"),
            b = this.get("hover");
        a || b || this.Ze(1);
        a && this.notify("position")
    };
    _.p.zg = _.fe("mode");
    _.p.Ze = _.ge("mode");
    nM.prototype.J = function() {
        this.m = !this.m;
        this.H()
    };
    nM.prototype.H = function() {
        var a = this.D.get();
        if (a) {
            a *= 80;
            a = this.m ? oM(a / 1E3, "km", a, "m") : oM(a / 1609.344, "mi", 3.28084 * a, "ft");
            var b = this.F;
            var c = a.Kj + "\u00a0";
            if (c instanceof _.Hb) var d = c;
            else {
                var e = "object" == typeof c;
                d = null;
                e && c.zf && (d = c.j());
                c = _.Yj(e && c.oc ? c.fb() : String(c));
                d = _.Jb(c, d)
            }
            _.wv(b, d);
            this.j.style.width = _.hx(a.Jl + 4, !0);
            this.A || (this.A = _.y.setTimeout((0, _.z)(this.K, this), 50))
        }
    };
    nM.prototype.K = function() {
        this.A = 0;
        var a = this.B;
        this.l.set((new _.iw(a.offsetWidth, a.offsetHeight)).width)
    };
    _.wj(yM, _.T);
    _.p = yM.prototype;
    _.p.disableDefaultUI_changed = function() {
        FM(this)
    };
    _.p.size_changed = function() {
        FM(this)
    };
    _.p.mapTypeId_changed = function() {
        DM(this) != this.Ic && (this.m[1] = !0, _.mg(this.U));
        this.ja && this.ja.setMapTypeId(this.get("mapTypeId"))
    };
    _.p.mapTypeControl_changed = function() {
        this.m[0] = !0;
        _.mg(this.U)
    };
    _.p.mapTypeControlOptions_changed = function() {
        this.m[0] = !0;
        _.mg(this.U)
    };
    _.p.fullscreenControlOptions_changed = function() {
        this.m[3] = !0;
        _.mg(this.U)
    };
    _.p.scaleControl_changed = function() {
        this.m[2] = !0;
        _.mg(this.U)
    };
    _.p.scaleControlOptions_changed = function() {
        this.m[2] = !0;
        _.mg(this.U)
    };
    _.p.panControl_changed = function() {
        OM(this)
    };
    _.p.panControlOptions_changed = function() {
        OM(this)
    };
    _.p.rotateControl_changed = function() {
        OM(this)
    };
    _.p.rotateControlOptions_changed = function() {
        OM(this)
    };
    _.p.streetViewControl_changed = function() {
        OM(this)
    };
    _.p.streetViewControlOptions_changed = function() {
        OM(this)
    };
    _.p.zoomControl_changed = function() {
        OM(this)
    };
    _.p.zoomControlOptions_changed = function() {
        OM(this)
    };
    _.p.myLocationControl_changed = function() {
        OM(this)
    };
    _.p.myLocationControlOptions_changed = function() {
        OM(this)
    };
    _.p.streetView_changed = function() {
        QM(this)
    };
    _.p.fi = function(a) {
        this.get("panoramaVisible") != a && this.set("panoramaVisible", a)
    };
    _.p.panoramaVisible_changed = function() {
        var a = this.get("streetView");
        a && a.j.set(!!this.get("panoramaVisible"))
    };
    _.A(RM, _.T);
    RM.prototype.addElement = function(a, b, c, d) {
        var e = this;
        if (b = this.j[b]) {
            d = _.M(d) ? d : b.length;
            var f;
            for (f = 0; f < b.length && !(b[f].index > d); ++f);
            b.splice(f, 0, {
                element: a,
                border: c,
                index: d,
                listener: _.S.addListener(a, "resize", function() {
                    return _.mg(e.U)
                })
            });
            _.Em(a);
            a.style.visibility = "hidden";
            this.l.appendChild(a);
            _.mg(this.U)
        }
    };
    RM.prototype.Bb = function(a) {
        a.parentNode && a.parentNode.removeChild(a);
        _.Jc(this.j, function(b, c) {
            for (b = 0; b < c.length; ++b)
                if (c[b].element == a) {
                    var d = a;
                    d.style.top = "auto";
                    d.style.bottom = "auto";
                    d.style.left = "auto";
                    d.style.right = "auto";
                    _.S.removeListener(c[b].listener);
                    c.splice(b, 1)
                }
        });
        _.mg(this.U)
    };
    RM.prototype.m = function() {
        var a = _.Cg(this.l),
            b = a.width;
        a = a.height;
        var c = this.j,
            d = [],
            e = VM(c[1], "left", "top", d),
            f = WM(c[5], "left", "top", d);
        d = [];
        var g = VM(c[10], "left", "bottom", d),
            h = WM(c[6], "left", "bottom", d);
        d = [];
        var k = VM(c[3], "right", "top", d),
            l = WM(c[7], "right", "top", d);
        d = [];
        var m = VM(c[12], "right", "bottom", d);
        d = WM(c[9], "right", "bottom", d);
        var q = YM(c[11], "bottom", b),
            r = YM(c[2], "top", b),
            u = XM(c[4], "left", b, a);
        XM(c[13], "center", b, a);
        c = XM(c[8], "right", b, a);
        this.set("bounds", new _.rd([new _.P(Math.max(u, e.width,
            g.width, f.width, h.width) || 0, Math.max(r, e.height, f.height, k.height, l.height) || 0), new _.P(b - (Math.max(c, k.width, m.width, l.width, d.width) || 0), a - (Math.max(q, g.height, m.height, h.height, d.height) || 0))]))
    };
    _.A(aN, _.T);
    aN.prototype.D = function(a) {
        if (eN(this, a)) return !0;
        var b = !1;
        switch (a.keyCode) {
            case 38:
            case 40:
            case 37:
            case 39:
                this.m[a.keyCode] = 1;
                this.j || (this.l = new _.WC(100), this.A());
                b = !0;
                break;
            case 34:
                dN(this, 0, .75);
                b = !0;
                break;
            case 33:
                dN(this, 0, -.75);
                b = !0;
                break;
            case 36:
                dN(this, -.75, 0);
                b = !0;
                break;
            case 35:
                dN(this, .75, 0);
                b = !0;
                break;
            case 187:
            case 107:
                bN(this);
                b = !0;
                break;
            case 189:
            case 109:
                cN(this), b = !0
        }
        switch (a.which) {
            case 61:
            case 43:
                bN(this);
                b = !0;
                break;
            case 45:
            case 95:
            case 173:
                cN(this), b = !0
        }
        b && (_.Md(a), _.Nd(a));
        return !b
    };
    aN.prototype.B = function(a) {
        if (eN(this, a)) return !0;
        switch (a.keyCode) {
            case 38:
            case 40:
            case 37:
            case 39:
            case 34:
            case 33:
            case 36:
            case 35:
            case 187:
            case 107:
            case 189:
            case 109:
                return _.Md(a), _.Nd(a), !1
        }
        switch (a.which) {
            case 61:
            case 43:
            case 45:
            case 95:
            case 173:
                return _.Md(a), _.Nd(a), !1
        }
        return !0
    };
    aN.prototype.F = function(a) {
        var b = !1;
        switch (a.keyCode) {
            case 38:
            case 40:
            case 37:
            case 39:
                this.m[a.keyCode] = null, b = !0
        }
        return !b
    };
    aN.prototype.A = function() {
        for (var a = 0, b = 0, c = !1, d = 0; d < _.L(gN); d++) this.m[gN[d]] && (c = hN[gN[d]], a += c[0], b += c[1], c = !0);
        c ? (c = 1, _.XC(this.l) && (c = this.l.next()), d = Math.round(35 * c * a), c = Math.round(35 * c * b), 0 == d && (d = a), 0 == c && (c = b), _.S.trigger(this, "panbynow", d, c, 1), this.j = _.sw(this, this.A, 10)) : this.j = 0
    };
    _.p = fN.prototype;
    _.p.vg = RM;
    _.p.Lk = function(a, b, c, d, e, f, g, h, k, l, m, q) {
        var r = b.get("streetView"),
            u = b.__gm;
        if (r && u) {
            var v = new _.WD((new _.pk(_.K.C[1])).getStreetView(), r.get("client"));
            r = _.tg[r.get("client")];
            var w = new yM({
                    Aj: function(F) {
                        return m.fromContainerPixelToLatLng(new _.P(F.clientX, F.clientY))
                    },
                    Xg: b.controls,
                    lh: k,
                    oe: l,
                    Ah: a,
                    map: b,
                    Pk: b.mapTypes,
                    Id: d,
                    ai: !0,
                    sa: q,
                    controlSize: b.get("controlSize") || 40,
                    om: r,
                    qm: v
                }),
                x = new _.tx(["bounds"], "bottomRight", function(F) {
                    return F && _.Bk(F)
                }),
                B, E;
            _.S.ma(b, "idle", function() {
                var F = b.get("bounds");
                F != B && (w.set("bounds", F), x.set("bounds", F), B = F);
                F = b.get("center");
                F != E && (w.set("center", F), E = F)
            });
            w.bindTo("bottomRight", x);
            w.bindTo("disableDefaultUI", b);
            w.bindTo("heading", b);
            w.bindTo("projection", b);
            w.bindTo("reportErrorControl", b);
            w.bindTo("passiveLogo", b);
            w.bindTo("zoom", u);
            w.bindTo("mapTypeId", c);
            w.bindTo("attributionText", e);
            w.bindTo("zoomRange", g);
            w.bindTo("aerialAvailableAtZoom", h);
            w.bindTo("tilt", h);
            w.bindTo("desiredTilt", h);
            w.bindTo("mapTypeControlOptions", b, null, !0);
            w.bindTo("panControlOptions",
                b, null, !0);
            w.bindTo("rotateControlOptions", b, null, !0);
            w.bindTo("scaleControlOptions", b, null, !0);
            w.bindTo("streetViewControlOptions", b, null, !0);
            w.bindTo("zoomControlOptions", b, null, !0);
            w.bindTo("mapTypeControl", b);
            w.bindTo("myLocationControlOptions", b);
            w.bindTo("fullscreenControlOptions", b, null, !0);
            b.get("fullscreenControlOptions") && w.notify("fullscreenControlOptions");
            w.bindTo("panControl", b);
            w.bindTo("rotateControl", b);
            w.bindTo("motionTrackingControl", b);
            w.bindTo("motionTrackingControlOptions", b,
                null, !0);
            w.bindTo("scaleControl", b);
            w.bindTo("streetViewControl", b);
            w.bindTo("fullscreenControl", b);
            w.bindTo("zoomControl", b);
            w.bindTo("myLocationControl", b);
            w.bindTo("rmiAvailable", f, "available");
            w.bindTo("streetView", b);
            w.bindTo("fontLoaded", u);
            w.bindTo("size", u);
            u.bindTo("renderHeading", w);
            _.S.forward(w, "panbyfraction", u)
        }
    };
    _.p.Ok = function(a, b, c, d, e, f, g, h) {
        var k = new yM({
            Xg: f,
            lh: d,
            oe: h,
            Ah: e,
            Id: c,
            controlSize: g.get("controlSize") || 40,
            ai: !1,
            pm: g
        });
        k.set("streetViewControl", !1);
        k.bindTo("attributionText", b, "copyright");
        k.set("mapTypeId", "streetview");
        k.set("tilt", !0);
        k.bindTo("heading", b);
        k.bindTo("zoom", b, "zoomFinal");
        k.bindTo("zoomRange", b);
        k.bindTo("pov", b, "pov");
        k.bindTo("position", g);
        k.bindTo("pano", g);
        k.bindTo("passiveLogo", g);
        k.bindTo("floors", b);
        k.bindTo("floorId", b);
        k.bindTo("rmiWidth", g);
        k.bindTo("fullscreenControlOptions",
            g, null, !0);
        k.bindTo("panControlOptions", g, null, !0);
        k.bindTo("zoomControlOptions", g, null, !0);
        k.bindTo("fullscreenControl", g);
        k.bindTo("panControl", g);
        k.bindTo("zoomControl", g);
        k.bindTo("disableDefaultUI", g);
        k.bindTo("fontLoaded", g.__gm);
        k.bindTo("size", b);
        a.view && a.view.addListener("scene_changed", function() {
            var l = a.view.get("scene");
            k.set("isCustomPanorama", "c" == l)
        });
        k.U.Ma();
        _.S.forward(k, "panbyfraction", a)
    };
    _.p.Mk = function(a, b) {
        a.get("disableDefaultUI") && !a.get("keyboardShortcuts") && a.set("keyboardShortcuts", !1);
        var c = new aN(b);
        c.bindTo("zoom", a);
        c.bindTo("enabled", a, "keyboardShortcuts");
        _.S.forward(c, "panbyfraction", a.__gm);
        _.S.forward(c, "panbynow", a.__gm);
        _.S.forward(c, "panby", a.__gm);
        var d;
        _.S.ma(a, "streetview_changed", function() {
            var e = a.get("streetView"),
                f = d;
            f && _.S.removeListener(f);
            d = null;
            e && (d = _.S.ma(e, "visible_changed", function() {
                e.getVisible() ? (b.tabIndex = -1, b.blur(), c.set("streetViewDisable", !0)) : (b.tabIndex = 0, c.set("streetViewDisable", !1))
            }))
        })
    };
    _.p.$h = function(a, b) {
        a = _.$M(a, b).style;
        a.border = "1px solid rgba(0,0,0,0.12)";
        a.borderRadius = "5px";
        a.left = "50%";
        a.maxWidth = "375px";
        a.msTransform = "translateX(-50%)";
        a.position = "absolute";
        a.transform = "translateX(-50%)";
        a.width = "calc(100% - 10px)";
        a.zIndex = "1"
    };
    _.p.lg = function(a) {
        if (!(window.atob || _.vg[43] || a.__gm_bbsp)) {
            a.__gm_bbsp = !0;
            var b = window.JSON ? "whatbrowser.org" : "developers.google.com/maps/documentation/javascript/error-messages#unsupported-browsers";
            b = new _.em((_.jk(_.Cc(_.K), 15) ? "http://" : "https://") + b);
            new SK(a, b)
        }
    };
    _.Ne("controls", new fN);
});