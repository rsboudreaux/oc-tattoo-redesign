google.maps.__gjsload__('stats', function(_) {
    var bZ = function() {
            this.j = new _.Ql
        },
        cZ = function(a) {
            var b = 0,
                c = 0;
            a.j.forEach(function(d) {
                b += d.Um;
                c += d.wm
            });
            return c ? b / c : 0
        },
        dZ = function(a) {
            _.G(this, a, 2)
        },
        eZ = function(a) {
            _.G(this, a, 6)
        },
        fZ = function(a) {
            var b = document;
            this.A = _.Nh;
            this.l = a + "/maps/gen_204";
            this.m = b
        },
        gZ = function(a, b, c) {
            var d = [];
            _.Mj(a, function(e, f) {
                d.push(f + b + e)
            });
            return d.join(c)
        },
        hZ = function(a) {
            var b = {};
            _.Mj(a, function(c, d) {
                b[encodeURIComponent(d)] = encodeURIComponent(c).replace(/%7C/g, "|")
            });
            return gZ(b, ":", ",")
        },
        iZ = function(a, b, c, d) {
            var e = {};
            e.host = document.location && document.location.host || window.location.host;
            e.v = a;
            e.r = Math.round(1 / b);
            c && (e.client = c);
            d && (e.key = d);
            return e
        },
        jZ = function(a, b, c, d) {
            var e = _.H(_.K, 0, 1);
            this.B = a;
            this.F = b;
            this.A = e;
            this.l = c;
            this.m = d;
            this.j = new _.Ql;
            this.D = _.bb()
        },
        kZ = function(a, b, c, d, e) {
            this.D = a;
            this.F = b;
            this.B = c;
            this.m = d;
            this.A = e;
            this.l = {};
            this.j = []
        },
        lZ = function(a, b, c) {
            var d = _.Qh;
            this.m = a;
            _.S.bind(this.m, "set_at", this, this.A);
            _.S.bind(this.m, "insert_at", this, this.A);
            this.D = b;
            this.F = d;
            this.B = c;
            this.l = 0;
            this.j = {};
            this.A()
        },
        nZ = function(a, b, c, d, e) {
            var f = _.H(_.K, 23, 500);
            var g = _.H(_.K, 22, 2);
            this.H = a;
            this.J = b;
            this.K = f;
            this.A = g;
            this.F = c;
            this.B = d;
            this.D = e;
            this.l = new _.Ql;
            this.j = 0;
            this.m = _.bb();
            mZ(this)
        },
        mZ = function(a) {
            window.setTimeout(function() {
                oZ(a);
                mZ(a)
            }, Math.min(a.K * Math.pow(a.A, a.j), 2147483647))
        },
        oZ = function(a) {
            var b = iZ(a.J, a.F, a.B, a.D);
            b.t = a.j + "-" + (_.bb() - a.m);
            a.l.forEach(function(c, d) {
                c = c();
                0 < c && (b[d] = Number(c.toFixed(2)) + (_.Mm() ? "-if" : ""))
            });
            a.H.j({
                ev: "api_snap"
            }, b);
            ++a.j
        },
        pZ = function() {
            this.l = _.I(_.K,
                6);
            this.m = _.I(_.K, 16);
            if (_.vg[35]) {
                var a = _.Cc(_.K);
                a = _.I(a, 11)
            } else a = _.Mr;
            this.j = new fZ(a);
            _.Ph && new lZ(_.Ph, (0, _.z)(this.j.j, this.j), !!this.l);
            a = _.I(new _.Ec(_.K.C[3]), 1);
            this.J = a.split(".")[1] || a;
            this.K = {};
            this.F = {};
            this.D = {};
            this.fa = {};
            this.H = _.H(_.K, 0, 1);
            _.Mh && (this.B = new nZ(this.j, this.J, this.H, this.l, this.m));
            a = this.A = new eZ;
            var b = _.I(new _.Ec(_.K.C[3]), 1);
            a.C[1] = b;
            this.l && (this.A.C[2] = this.l);
            this.m && (this.A.C[3] = this.m)
        };
    bZ.prototype.l = function(a, b, c) {
        this.j.set(_.Vd(a), {
            Um: b,
            wm: c
        })
    };
    _.A(dZ, _.D);
    var qZ;
    _.A(eZ, _.D);
    fZ.prototype.j = function(a, b) {
        b = b || {};
        var c = _.Vk().toString(36);
        b.src = "apiv3";
        b.token = this.A;
        b.ts = c.substr(c.length - 6);
        a.cad = hZ(b);
        a = gZ(a, "=", "&");
        a = this.l + "?target=api&" + a;
        this.m.createElement("img").src = a;
        (b = _.y.__gm_captureCSI) && b(a)
    };
    jZ.prototype.H = function(a, b) {
        b = _.t(b) ? b : 1;
        this.j.isEmpty() && window.setTimeout((0, _.z)(function() {
            var c = iZ(this.F, this.A, this.l, this.m);
            c.t = _.bb() - this.D;
            var d = this.j;
            _.Rl(d);
            for (var e = {}, f = 0; f < d.j.length; f++) {
                var g = d.j[f];
                e[g] = d.l[g]
            }
            _.Pj(c, e);
            this.j.clear();
            this.B.j({
                ev: "api_maprft"
            }, c)
        }, this), 500);
        b = this.j.get(a, 0) + b;
        this.j.set(a, b)
    };
    kZ.prototype.H = function(a) {
        this.l[a] || (this.l[a] = !0, this.j.push(a), 2 > this.j.length && _.sw(this, this.J, 500))
    };
    kZ.prototype.J = function() {
        for (var a = iZ(this.F, this.B, this.m, this.A), b = 0, c; c = this.j[b]; ++b) a[c] = "1";
        a.hybrid = +_.vm();
        this.j.length = 0;
        this.D.j({
            ev: "api_mapft"
        }, a)
    };
    lZ.prototype.A = function() {
        for (var a; a = this.m.removeAt(0);) {
            var b = a.bm;
            a = a.timestamp - this.F;
            ++this.l;
            this.j[b] || (this.j[b] = 0);
            ++this.j[b];
            if (20 <= this.l && !(this.l % 5)) {
                var c = {};
                c.s = b;
                c.sr = this.j[b];
                c.tr = this.l;
                c.te = a;
                c.hc = this.B ? "1" : "0";
                this.D({
                    ev: "api_services"
                }, c)
            }
        }
    };
    nZ.prototype.register = function(a, b) {
        this.l.set(a, b)
    };
    _.p = pZ.prototype;
    _.p.bk = function(a) {
        a = _.Vd(a);
        this.K[a] || (this.K[a] = new kZ(this.j, this.J, this.H, this.l, this.m));
        return this.K[a]
    };
    _.p.$j = function(a) {
        a = _.Vd(a);
        this.F[a] || (this.F[a] = new jZ(this.j, this.J, this.l, this.m));
        return this.F[a]
    };
    _.p.ae = function(a) {
        if (this.B) {
            this.D[a] || (this.D[a] = new _.Sw, this.B.register(a, function() {
                return b.mb()
            }));
            var b = this.D[a];
            return b
        }
    };
    _.p.Zj = function(a) {
        if (this.B) {
            this.fa[a] || (this.fa[a] = new bZ, this.B.register(a, function() {
                return cZ(b)
            }));
            var b = this.fa[a];
            return b
        }
    };
    _.p.Qk = function(a) {
        if (_.Mh) {
            var b = this.A;
            b = new b.constructor(_.mk(b));
            var c = Math.floor(_.bb() / 1E3);
            b.C[0] = c;
            c = new dZ(_.J(b, 5));
            c.C[0] = Math.round(1 / this.H);
            c.C[1] = a;
            a = this.j;
            c = {
                ev: "api_map_style"
            };
            var d = new _.to;
            qZ || (qZ = {
                G: "issssm",
                I: ["is"]
            });
            b = d.j(b.C, qZ);
            c.pb = encodeURIComponent(b).replace(/%20/g, "+");
            b = gZ(c, "=", "&");
            a.m.createElement("img").src = a.l + "?target=api&" + b
        }
    };
    var rZ = new pZ;
    _.Ne("stats", rZ);
});