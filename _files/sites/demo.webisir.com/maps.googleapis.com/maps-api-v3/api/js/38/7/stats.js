google.maps.__gjsload__('stats', function(_) {
    var UY = function(a) {
            _.E(this, a, 2)
        },
        VY = function(a) {
            _.E(this, a, 6)
        },
        WY = function(a) {
            var b = document;
            this.j = _.Pi;
            this.h = a + "/maps/gen_204";
            this.i = b
        },
        XY = function(a, b, c) {
            var d = [];
            _.ml(a, function(e, f) {
                d.push(f + b + e)
            });
            return d.join(c)
        },
        Faa = function(a) {
            var b = {};
            _.ml(a, function(c, d) {
                b[encodeURIComponent(d)] = encodeURIComponent(c).replace(/%7C/g, "|")
            });
            return XY(b, ":", ",")
        },
        YY = function(a, b, c, d) {
            var e = {};
            e.host = document.location && document.location.host || window.location.host;
            e.v = a;
            e.r = Math.round(1 / b);
            c && (e.client =
                c);
            d && (e.key = d);
            return e
        },
        ZY = function(a, b, c, d) {
            var e = _.Tc(_.H, 0, 1);
            this.l = a;
            this.C = b;
            this.j = e;
            this.h = c;
            this.i = d;
            this.g = new _.Hn;
            this.o = _.Za()
        },
        $Y = function(a, b, c, d, e) {
            this.o = a;
            this.C = b;
            this.l = c;
            this.i = d;
            this.j = e;
            this.h = {};
            this.g = []
        },
        aZ = function(a, b, c) {
            var d = _.Si;
            this.i = a;
            _.N.bind(this.i, "set_at", this, this.j);
            _.N.bind(this.i, "insert_at", this, this.j);
            this.o = b;
            this.C = d;
            this.l = c;
            this.h = 0;
            this.g = {};
            this.j()
        },
        cZ = function(a, b, c, d, e) {
            var f = _.Tc(_.H, 23, 500);
            var g = _.Tc(_.H, 22, 2);
            this.F = a;
            this.H = b;
            this.J = f;
            this.j =
                g;
            this.C = c;
            this.l = d;
            this.o = e;
            this.h = new _.Hn;
            this.g = 0;
            this.i = _.Za();
            bZ(this)
        },
        bZ = function(a) {
            window.setTimeout(function() {
                Gaa(a);
                bZ(a)
            }, Math.min(a.J * Math.pow(a.j, a.g), 2147483647))
        },
        Gaa = function(a) {
            var b = YY(a.H, a.C, a.l, a.o);
            b.t = a.g + "-" + (_.Za() - a.i);
            a.h.forEach(function(c, d) {
                c = c();
                0 < c && (b[d] = Number(c.toFixed(2)) + (_.Yn() ? "-if" : ""))
            });
            a.F.g({
                ev: "api_snap"
            }, b);
            ++a.g
        },
        dZ = function() {
            this.h = _.F(_.H, 6);
            this.i = _.F(_.H, 16);
            if (_.qh[35]) {
                var a = _.bd(_.H);
                a = _.F(a, 11)
            } else a = _.it;
            this.g = new WY(a);
            _.Ri && new aZ(_.Ri,
                (0, _.z)(this.g.g, this.g), !!this.h);
            a = _.F(new _.dd(_.H.m[3]), 1);
            this.H = a.split(".")[1] || a;
            this.J = {};
            this.C = {};
            this.o = {};
            this.F = _.Tc(_.H, 0, 1);
            _.Fi && (this.aa = new cZ(this.g, this.H, this.F, this.h, this.i));
            a = this.l = new VY;
            var b = _.F(new _.dd(_.H.m[3]), 1);
            a.m[1] = b;
            this.h && (this.l.m[2] = this.h);
            this.i && (this.l.m[3] = this.i)
        };
    _.A(UY, _.C);
    var eZ;
    _.A(VY, _.C);
    WY.prototype.g = function(a, b) {
        b = b || {};
        var c = _.xm().toString(36);
        b.src = "apiv3";
        b.token = this.j;
        b.ts = c.substr(c.length - 6);
        a.cad = Faa(b);
        a = XY(a, "=", "&");
        a = this.h + "?target=api&" + a;
        this.i.createElement("img").src = a;
        (b = _.y.__gm_captureCSI) && b(a)
    };
    ZY.prototype.F = function(a, b) {
        b = void 0 !== b ? b : 1;
        this.g.isEmpty() && window.setTimeout((0, _.z)(function() {
            var c = YY(this.C, this.j, this.h, this.i);
            c.t = _.Za() - this.o;
            var d = this.g;
            _.In(d);
            for (var e = {}, f = 0; f < d.g.length; f++) {
                var g = d.g[f];
                e[g] = d.h[g]
            }
            _.pl(c, e);
            this.g.clear();
            this.l.g({
                ev: "api_maprft"
            }, c)
        }, this), 500);
        b = this.g.get(a, 0) + b;
        this.g.set(a, b)
    };
    $Y.prototype.F = function(a) {
        this.h[a] || (this.h[a] = !0, this.g.push(a), 2 > this.g.length && _.Mx(this, this.H, 500))
    };
    $Y.prototype.H = function() {
        for (var a = YY(this.C, this.l, this.i, this.j), b = 0, c; c = this.g[b]; ++b) a[c] = "1";
        a.hybrid = +_.Mn();
        this.g.length = 0;
        this.o.g({
            ev: "api_mapft"
        }, a)
    };
    aZ.prototype.j = function() {
        for (var a; a = this.i.removeAt(0);) {
            var b = a.dm;
            a = a.timestamp - this.C;
            ++this.h;
            this.g[b] || (this.g[b] = 0);
            ++this.g[b];
            if (20 <= this.h && !(this.h % 5)) {
                var c = {};
                c.s = b;
                c.sr = this.g[b];
                c.tr = this.h;
                c.te = a;
                c.hc = this.l ? "1" : "0";
                this.o({
                    ev: "api_services"
                }, c)
            }
        }
    };
    cZ.prototype.register = function(a, b) {
        this.h.set(a, b)
    };
    dZ.prototype.ga = function(a) {
        a = _.we(a);
        this.J[a] || (this.J[a] = new $Y(this.g, this.H, this.F, this.h, this.i));
        return this.J[a]
    };
    dZ.prototype.R = function(a) {
        a = _.we(a);
        this.C[a] || (this.C[a] = new ZY(this.g, this.H, this.h, this.i));
        return this.C[a]
    };
    dZ.prototype.j = function(a) {
        if (this.aa) {
            this.o[a] || (this.o[a] = new _.hy, this.aa.register(a, function() {
                return b.kb()
            }));
            var b = this.o[a];
            return b
        }
    };
    dZ.prototype.ja = function(a) {
        if (_.Fi) {
            var b = this.l;
            b = new b.constructor(_.Ll(b));
            var c = Math.floor(_.Za() / 1E3);
            b.m[0] = c;
            c = new UY(_.G(b, 5));
            c.m[0] = Math.round(1 / this.F);
            c.m[1] = a;
            a = this.g;
            c = {
                ev: "api_map_style"
            };
            var d = new _.Jp;
            eZ || (eZ = {
                D: "issssm",
                G: ["is"]
            });
            b = d.g(b.m, eZ);
            c.pb = encodeURIComponent(b).replace(/%20/g, "+");
            b = XY(c, "=", "&");
            a.i.createElement("img").src = a.h + "?target=api&" + b
        }
    };
    var Haa = new dZ;
    _.pf("stats", Haa);
});