! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    e.exports = n(1)
}, function(e, t, n) {
    var r = n(2),
        i = n(62),
        o = n(85),
        a = n(87).VideoBackground,
        s = n(87).getVideoProps,
        l = n(106),
        u = n(107),
        c = n(108),
        h = n(109),
        d = n(110),
        f = .8,
        p = document.documentElement.classList.contains("authenticated-account");
    window.Y.use(["node", "squarespace-ui-base", "yui-throttle", "squarespace-gallery-ng"], function(e) {
        e.config.win.Singleton.create({
            ready: function() {
                document.addEventListener("DOMContentLoaded", this.initialize.bind(this))
            },
            storePageElements: function() {
                this.html = e.one(e.config.win.document.documentElement), this.body = e.one(e.config.win.document.body), this.header = this.body.one("#header"), this.scrollArrow = this.body.one(".scroll-arrow"), this.indexNav = this.body.one("#parallax-nav"), this.cartDropzone = e.one(".sqs-cart-dropzone"), this.bannerImage = e.one(".banner-image"), this.backToTopLink = e.one(".back-to-top-link a"), this.mobileNavToggle = e.one("#mobileMenu"), this.mobileNav = e.one("#mobileNav"), this.parallaxImages = e.all("#parallax-images .image-container"), this.parallaxItems = e.all(".parallax-item")
            },
            storePageInfo: function() {
                this.isAlbum = this.body.hasClass("collection-type-album"), this.isGallery = this.body.hasClass("collection-type-gallery"), this.isIndex = this.body.hasClass("collection-type-index"), this.useIndexNav = !this.body.hasClass("hide-parallax-nav");
                var t = e.one(".title-desc-wrapper");
                this.hasImageUnderHeader = t && t.hasClass("has-main-image")
            },
            isParallaxEnabled: function() {
                return !this.isReorderingStackedItems && "true" === u.getValue("parallax-scrolling")
            },
            storeTweakInfo: function() {
                this.hasFixedHeader = "true" === u.getValue("fixed-header"), this.hasTransparentHeader = "true" === u.getValue("transparent-header"), this.parallaxEnabled = this.isParallaxEnabled(), this.titleDescriptionAlignment = u.getValue("title--description-alignment"), this.isTitleOverImage = "Over Image" === u.getValue("title--description-position"), this.galleryDesign = u.getValue("gallery-design")
            },
            initialize: function() {
                this.storePageElements(), this.storePageInfo(), this.scrollEl = e.one(document.scrollingElement || (e.UA.gecko || e.UA.ie || navigator.userAgent.match(/Trident.*rv.11\./) ? "html" : "body")), this.viewportH = e.one("body").get("winHeight"), this.isIE9orLower = e.UA.ie > 0 && e.UA.ie <= 9, this.isMobile = !e.Lang.isUndefined(e.config.win.orientation), this.initializeTextShrink(), this.syncUI(), this.bindUI(), this.isIndex && this.initializeIndex(), this.initUserAccounts(), p && (this.listenTweaks(), this.bindUIForStackedItems()), e.one("body").addClass("loaded"), e.UA.ie && e.one("html").addClass("ie" + e.UA.ie), this.isMobile || e.one("html").removeClass("touch")
            },
            bindUI: function() {
                var t = new c(this.handleHeaderBackgroundScroll, null, this);
                t.subscribe();
                var n = new c(this.handleCartScroll, null, this);
                if (n.subscribe(), this.isIndex) this.bindIndexListeners();
                else if (this.bannerImage) {
                    var i = new c(this.positionBannerImage, null, this);
                    i.subscribe()
                }
                this.mobileNavToggle.on("click", this.handleMobileToggleClick, this), this.mobileNav.delegate("click", this.handleMobileFolderClick, ".folder", this);
                var o = new r({
                    targets: [".sqs-block-form", ".sqs-block-tourdates", ".sqs-block-code", ".sqs-block-gallery", ".sqs-block-summary-v2", ".parallax-item .content-inner .sqs-layout", ".sqs-announcement-bar-dropzone"],
                    callback: e.bind(this.syncUI, this)
                });
                o.init(), e.UA.mobile ? e.one(e.config.win).on("orientationchange", e.bind(this.syncUI, this)) : h(this.syncUI, this, e.config.win)
            },
            syncUI: function() {
                this.storeTweakInfo(), this.headerHeight = this.header.get("clientHeight"), this.viewportH = this.body.get("winHeight"), this.offsetHeader(), this.handleHeaderBackgroundScroll(), this.isIndex && (this.storeIndexPageDOMInfo(), this.setIndexImageHeights()), this.parallaxEnabled && this.isIndex ? this.positionIndexImages() : this.parallaxEnabled && this.bannerImage && this.positionBannerImage(), this.syncNavState(), this.syncFooterState(), this.syncScrollArrowColor(), !e.config.win.Typekit || this.html.hasClass("wf-active") || this.html.hasClass("wf-inactive") ? this.loadImagesAndVideos() : this.onTypekitFontsActive(e.bind(function() {
                    this.storeIndexPageDOMInfo(), this.setIndexImageHeights(), this.loadImagesAndVideos()
                }, this))
            },
            handleHeaderBackgroundScroll: function() {
                if (!this.hasFixedHeader || !this.hasTransparentHeader || !this.hasImageUnderHeader) return void this.header.setStyle("backgroundColor", "");
                if (e.config.win.pageYOffset > this.headerHeight) {
                    var t = u.getValue("headerBgColor");
                    this.header.setStyle("backgroundColor", t)
                } else this.header.setStyle("backgroundColor", "transparent")
            },
            offsetHeader: function() {
                if (!this.isGallery || "Slideshow" !== this.galleryDesign) {
                    var t = this.isIndex,
                        n = t && "Left" === this.titleDescriptionAlignment && this.hasFixedHeader,
                        r = this.isGallery && "Grid" === this.galleryDesign,
                        i = "/search" === e.config.win.location.pathname,
                        o = this.body.hasClass("show-cart-page"),
                        a = this.body.hasClass("not-found-page"),
                        s = this.body.hasClass("order-confirmed-page"),
                        l = this.isAlbum,
                        u = this.isTitleOverImage && !!e.one(".title-desc-wrapper"),
                        c = !this.isTitleOverImage && !!e.one(".title-desc-wrapper.no-main-image"),
                        h = !this.isTitleOverImage && !!e.one(".title-desc-wrapper.has-main-image");
                    this.isIndex ? e.all(".title-desc-wrapper").each(function(e, t) {
                        return 0 === t ? void this.applyHeaderOffset(e) : void(n && e.hasClass("has-main-image") && this.applyHeaderOffset(e))
                    }, this) : r || l || i || o || a || s ? this.applyHeaderOffsetForSelector("#content-wrapper") : u || c ? this.applyHeaderOffsetForSelector(".title-desc-wrapper") : h ? this.applyHeaderOffsetForSelector(".banner-image") : this.applyHeaderOffsetForSelector(null)
                }
            },
            applyHeaderOffsetForSelector: function(t) {
                ["#content-wrapper", ".banner-image", ".title-desc-wrapper"].forEach(function(n) {
                    return t === n ? void this.applyHeaderOffset(e.one(t)) : void e.all(n).setStyle("paddingTop", null)
                }.bind(this))
            },
            applyHeaderOffset: function(e) {
                var t = this.header.get("clientHeight"),
                    n = t + parseFloat(e.getStyle("paddingBottom"));
                e.setStyle("paddingTop", n)
            },
            positionBannerImage: function() {
                if (this.parallaxEnabled) {
                    var t = this.scrollEl.get("scrollTop"),
                        n = e.one(e.config.win).get("region"),
                        r = this.bannerImage.one("div.sqs-video-background") || this.bannerImage.one("img");
                    !r || t > n.height || r.setStyle("transform", "translate3d(0," + parseInt(t * f, 10) + "px,0)")
                }
            },
            handleMobileToggleClick: function() {
                this.body.toggleClass("mobile-nav-open")
            },
            handleMobileFolderClick: function(e) {
                var t = e.currentTarget;
                t.siblings(".folder").removeClass("dropdown-open"), t.toggleClass("dropdown-open")
            },
            handleCartScroll: function() {
                this.hasFixedHeader || (e.config.win.pageYOffset > this.headerHeight ? this.cartDropzone.setStyles({
                    position: "fixed",
                    top: 0
                }) : this.cartDropzone.setStyles({
                    position: "",
                    top: ""
                }))
            },
            initializeIndex: function() {
                e.config.win.location.hash && this.handleHashChange({
                    newHash: e.config.win.location.hash.replace(/[#\/]/g, ""),
                    quick: !0
                })
            },
            handleScrollArrowClick: function() {
                var e = this.scrollArrow.ancestor(".title-desc-wrapper").next(".content");
                if (e) {
                    var t = e.getY();
                    t = this.hasFixedHeader ? t - this.headerHeight : t, this.smoothScrollTo(t)
                }
            },
            handleHashChange: function(t) {
                e.one(".mobile-nav-open") && this.body.removeClass("mobile-nav-open");
                var n = 0;
                if ("" !== t.newHash) {
                    var r;
                    if (this.parallaxItems.each(function(e) {
                            !e.getAttribute("data-url-id") !== t.newHash && (r = e)
                        }), !r) return;
                    var i = this.findParallaxPageDOMInfoById(t.newHash);
                    n = i ? i.top : 0
                }
                t.quick ? (this.scrollEl.set("scrollTop", n), this.updateActiveIndexPage()) : this.smoothScrollTo(n, e.bind(this.updateActiveIndexPage, this))
            },
            handleIndexScroll: function(e) {
                this.positionIndexImages(), this.updateActiveIndexPage(), this.updateIndexNavColorState()
            },
            bindIndexListeners: function() {
                e.one(e.config.win).on("hashchange", this.handleHashChange, this), this.scrollArrow && this.scrollArrow.on("click", this.handleScrollArrowClick, this), this.backToTopLink.on("click", function(e) {
                    e.halt(), this.handleHashChange({
                        newHash: this.parallaxPageDOMInfo[0].id
                    })
                }, this);
                var t = new c(this.handleIndexScroll, null, this);
                t.subscribe(), e.all('#desktopNav .external-link a[href*="#"]').each(function(t) {
                    t.on("click", function(n) {
                        var r = e.one(t.getAttribute("href"));
                        if (r) {
                            n.preventDefault();
                            var i = r.getY();
                            this.isScrolling = !0, this.smoothScrollTo(i, e.bind(this.updateActiveIndexPage, this))
                        }
                    }, this)
                }, this)
            },
            storeIndexPageDOMInfo: function() {
                this.parallaxPageDOMInfo = [], this.parallaxItems.each(function(e) {
                    var t = e.getAttribute("data-url-id"),
                        n = e.one(".content.has-content"),
                        r = e.getY(),
                        i = e.one(".title-desc-wrapper").get("clientHeight"),
                        o = {
                            id: t,
                            type: "page",
                            top: Math.round(r),
                            bottom: Math.round(n ? n.getY() : r + i),
                            titleDescWrapperHeight: i
                        };
                    if (this.parallaxPageDOMInfo.push(o), n) {
                        var a = n.getY(),
                            s = {
                                id: t,
                                type: "content",
                                top: Math.round(a),
                                bottom: Math.round(a + n.get("clientHeight"))
                            };
                        this.parallaxPageDOMInfo.push(s)
                    }
                }, this)
            },
            setIndexImageHeights: function() {
                this.parallaxPageDOMInfo.forEach(function(e) {
                    "page" === e.type && (e.titleDescWrapperHeight > this.viewportH ? this.findParallaxImageById(e.id, function(t) {
                        t.setStyle("height", e.titleDescWrapperHeight)
                    }) : this.findParallaxImageById(e.id, function(e) {
                        e.setStyle("height", null)
                    }))
                }, this)
            },
            syncScrollArrowColor: function() {
                if (this.scrollArrow) {
                    var t, n = e.one(".parallax-item .title-desc-wrapper");
                    if (n) {
                        var r = n.getAttribute("data-color-suggested");
                        if (r) {
                            var a = u.getValue("imageOverlayColor");
                            t = o(r, a)
                        } else t = u.getValue("titleBgColor");
                        if (e.Lang.isValue(t)) {
                            var s = i(t) ? "color-weight-dark" : "color-weight-light";
                            this.scrollArrow.removeClass("color-weight-dark").removeClass("color-weight-light").addClass(s)
                        }
                    }
                }
            },
            positionIndexImages: function() {
                if (this.parallaxEnabled) {
                    var t = this.scrollEl.get("scrollTop"),
                        n = e.one(e.config.win).get("region");
                    this.parallaxItems.each(function(e, r) {
                        var i = this.parallaxImages.item(r);
                        if (e.inRegion(n)) {
                            var o = e.getAttribute("data-url-id"),
                                a = this.findParallaxPageDOMInfoById(o).top,
                                s = a - t,
                                l = -1 * parseFloat(s * f),
                                u = i.one("div.sqs-video-background") || i.one("img");
                            i.setStyles({
                                transform: "translate3d(0, " + s + "px, 0)"
                            }), u && u.setStyle("transform", "translatey(" + l + "px) translatez(0)")
                        } else i.setStyle("transform", "translate3d(0, -100%, 0)")
                    }, this)
                }
            },
            isHashEquivalent: function(t) {
                var n = e.config.win.location.hash;
                return n === "#" + t || n === "#" + t + "/" || n === "#/" + t || n === "#/" + t + "/"
            },
            updateActiveIndexPage: function() {
                if (!this.isScrolling) {
                    var t = this.scrollEl.get("scrollTop"),
                        n = this.findActiveParallaxPageFromScroll(t);
                    if (n && (!p && !this.isHashEquivalent(n) && e.config.win.history && e.config.win.history.replaceState && e.config.win.history.replaceState({}, "", "#" + n), this.useIndexNav && this.indexNav)) {
                        var r = this.indexNav.one("#parallax-nav-item-" + n);
                        r && (this.indexNav.all("a").removeClass("active"), r.addClass("active"))
                    }
                }
            },
            findActiveParallaxPageFromScroll: function(e) {
                if (0 === this.parallaxPageDOMInfo.length) return null;
                for (var t = 0; t < this.parallaxPageDOMInfo.length; t++) {
                    var n = this.parallaxPageDOMInfo[t];
                    if (e >= n.top && e < n.bottom) return n.id
                }
            },
            findParallaxPageDOMInfoById: function(e, t) {
                ["/", "#"].forEach(function(t) {
                    var n = e.indexOf(t);
                    0 === n && (e = e.substring(t.length)), n === e.length - t.length && (e = e.substring(0, n))
                });
                for (var n = 0; n < this.parallaxPageDOMInfo.length; n++) {
                    var r = this.parallaxPageDOMInfo[n];
                    if (r.id === e && "page" === r.type) return "function" == typeof t && t(), this.parallaxPageDOMInfo[n]
                }
                return null
            },
            findParallaxItemById: function(e, t) {
                this.parallaxItems.each(function(n) {
                    n.getAttribute("data-url-id") === e && t(n)
                }, this)
            },
            findParallaxImageById: function(e, t) {
                this.parallaxImages.each(function(n) {
                    n.getAttribute("data-url-id") === e && t(n)
                }, this)
            },
            updateIndexNavColorState: function() {
                if (this.useIndexNav && this.indexNav) {
                    var t, n = this.scrollEl.get("scrollTop"),
                        r = n + this.viewportH / 2;
                    if (this.parallaxPageDOMInfo.some(function(e) {
                            var n = r >= e.top && r < e.bottom;
                            return !!n && (this.findParallaxItemById(e.id, function(n) {
                                if ("content" === e.type) return void(t = u.getValue("contentBgColor"));
                                var r = n.one(".title-desc-wrapper"),
                                    i = u.getValue("imageOverlayColor");
                                if (r.hasClass("has-background-video")) return void(t = i);
                                if (r.hasClass("no-main-image")) return void(t = u.getValue("titleBgColor"));
                                var a = r.getAttribute("data-color-suggested");
                                t = o(i, a)
                            }), !0)
                        }.bind(this)), e.Lang.isValue(t)) {
                        var a = i(t) ? "color-weight-dark" : "color-weight-light";
                        this.indexNav.removeClass("color-weight-dark").removeClass("color-weight-light").addClass(a)
                    }
                }
            },
            smoothScrollTo: function(t, n) {
                this.isScrolling = !0, this.scrollEl.anim({}, {
                    to: {
                        scroll: [0, t]
                    },
                    duration: .6,
                    easing: e.Easing.easeBoth
                }).run().on("end", e.bind(function() {
                    "function" == typeof n && n(), this.isScrolling = !1
                }, this))
            },
            loadImagesAndVideos: function() {
                var t = ".banner-image";
                this.isIndex && this.parallaxEnabled ? t = "#parallax-images .image-container" : this.isIndex && (t = ".title-desc-image"), e.UA.mobile && this.body.getStyle("height"), e.all(t).each(function(e, t) {
                    var n = e.one(".sqs-video-background");
                    if (n && !n.hasClass("initialized")) {
                        new a(s(n.getDOMNode()));
                        return void n.addClass("initialized")
                    }
                    var r = e.one("img");
                    r && l.load(r, {
                        load: !0
                    })
                })
            },
            onTypekitFontsActive: function(t) {
                if ("function" != typeof t) throw new TypeError("Callback must be a function");
                var n = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                if (!n) return void t();
                var r;
                r = new n(e.bind(function(e) {
                    (this.html.hasClass("wf-active") || this.html.hasClass("wf-inactive")) && (t(), r.disconnect())
                }, this)), r.observe(this.html.getDOMNode(), {
                    attributes: !0
                })
            },
            initializeTextShrink: function() {
                this.textShrink(".page-title", ".page-title-wrapper"), this.textShrink(".page-desc p > strong", ".page-desc p"), this.textShrink(".collection-type-events.view-list .entry-title-wrapper h1.entry-title", ".collection-type-events.view-list .entry-title-wrapper"), this.textShrink(".collection-type-blog.view-list.blog-layout-columns .entry-title-wrapper h1.entry-title", ".collection-type-blog.view-list.blog-layout-columns .entry-title-wrapper")
            },
            textShrink: function(t, n) {
                e.one(t) && e.one(t).ancestor(n) && e.all(t).each(function(t) {
                    t.plug(e.Squarespace.TextShrink, {
                        parentEl: t.ancestor(n)
                    })
                })
            },
            syncFooterState: function() {
                var t = e.one(".footer-wrapper");
                t.toggleClass("empty", !t.one(".sqs-block"))
            },
            syncNavState: function() {
                this.body.toggleClass("has-nav", e.one(".nav-wrapper"))
            },
            listenTweaks: function() {
                var t = ["fixed-header", "transparent-header", "parallax-scrolling", "hide-parallax-nav", "first-index-image-fullscreen", "index-image-height", "hide-page-title", "title--description-alignment", "title--description-position"];
                u.watch(t, e.bind(this.syncUI, this))
            },
            setTitleDescWrapperHeight: function(e) {
                this.parallaxItems.each(function(t) {
                    const n = t.one(".title-desc-wrapper"),
                        r = e ? null : n.get("clientHeight");
                    n.setStyles({
                        height: r,
                        minHeight: r,
                        maxHeight: r
                    })
                })
            },
            bindUIForStackedItems: function() {
                e.config.win.addEventListener("sqs-stacked-items:before-flightmode-enabled", this.setTitleDescWrapperHeight.bind(this, !1)), e.config.win.addEventListener("sqs-flight-mode-enabled", function() {
                    this.isReorderingStackedItems = !0, this.body.removeClass("parallax-scrolling"), this.syncUI()
                }.bind(this)), e.config.win.addEventListener("sqs-flight-mode-disabled", function() {
                    this.isReorderingStackedItems = !1, this.body.toggleClass("parallax-scrolling", this.isParallaxEnabled()), this.setTitleDescWrapperHeight(!0), this.syncUI()
                }.bind(this)), e.config.win.addEventListener("sqs-stacked-items-dom-deleted", this.syncUI.bind(this)), e.config.win.addEventListener("sqs-stacked-items-dom-reorder", this.syncUI.bind(this))
            },
            initUserAccountLink: function(e) {
                var t = e.querySelector(".sign-in"),
                    n = e.querySelector(".my-account"),
                    r = d.isUserAuthenticated();
                t && r ? e.querySelector("a").removeChild(t) : n && !r && e.querySelector("a").removeChild(n), e.classList.add("loaded"), e.addEventListener("click", function(e) {
                    e.preventDefault(), d.openAccountScreen()
                })
            },
            initUserAccounts: function() {
                e.all(".user-account-link").each(function(e) {
                    this.initUserAccountLink(e.getDOMNode())
                }.bind(this))
            }
        })
    })
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(3),
        o = r(i),
        a = n(56),
        s = r(a),
        l = n(57),
        u = r(l),
        c = n(61),
        h = "This browser does not support MutationObserver",
        d = function() {
            function e(t) {
                var n = t.callback,
                    r = t.targets,
                    i = void 0 === r ? [] : r;
                return (0, s.default)(this, e), this.MutationObserver = (0, c.checkForMutationObserver)(), this.MutationObserver ? (this.callback = (0, c.validateCallback)(n), void(this.targets = i)) : void console.error(h)
            }
            return (0, u.default)(e, [{
                key: "init",
                value: function() {
                    return this.MutationObserver ? (this.observer = this.createObserver(), void this.observeTargets()) : void console.error(h)
                }
            }, {
                key: "destroy",
                value: function() {
                    return this.MutationObserver ? (this.observer.disconnect(), this.observer = null, void document.removeEventListener("DOMContentLoaded", this.reactToMutations)) : void console.error(h)
                }
            }, {
                key: "createObserver",
                value: function() {
                    var e = this;
                    return new this.MutationObserver(function(t) {
                        e.evaluateMutations(t)
                    })
                }
            }, {
                key: "observeTargets",
                value: function() {
                    var e = this;
                    this.targets.forEach(function(t) {
                        (0, o.default)(document.querySelectorAll(t)).forEach(function(t) {
                            e.observer.observe(t, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            })
                        })
                    })
                }
            }, {
                key: "evaluateMutations",
                value: function(e) {
                    e && ("loading" === document.readyState ? document.addEventListener("DOMContentLoaded", this.reactToMutations) : this.reactToMutations())
                }
            }, {
                key: "reactToMutations",
                value: function() {
                    this.timer && clearTimeout(this.timer), this.timer = setTimeout(this.callback, 150)
                }
            }]), e
        }();
    t.default = d, e.exports = t.default
}, function(e, t, n) {
    e.exports = {
        default: n(4),
        __esModule: !0
    }
}, function(e, t, n) {
    n(5), n(49), e.exports = n(13).Array.from
}, function(e, t, n) {
    "use strict";
    var r = n(6)(!0);
    n(9)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function(e, t, n) {
    var r = n(7),
        i = n(8);
    e.exports = function(e) {
        return function(t, n) {
            var o, a, s = String(i(t)),
                l = r(n),
                u = s.length;
            return l < 0 || l >= u ? e ? "" : void 0 : (o = s.charCodeAt(l), o < 55296 || o > 56319 || l + 1 === u || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : o : e ? s.slice(l, l + 2) : (o - 55296 << 10) + (a - 56320) + 65536)
        }
    }
}, function(e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(10),
        i = n(11),
        o = n(27),
        a = n(16),
        s = n(28),
        l = n(29),
        u = n(45),
        c = n(47),
        h = n(46)("iterator"),
        d = !([].keys && "next" in [].keys()),
        f = "@@iterator",
        p = "keys",
        A = "values",
        g = function() {
            return this
        };
    e.exports = function(e, t, n, v, y, b, m) {
        l(n, t, v);
        var w, x, k, E = function(e) {
                if (!d && e in T) return T[e];
                switch (e) {
                    case p:
                        return function() {
                            return new n(this, e)
                        };
                    case A:
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this, e)
                }
            },
            M = t + " Iterator",
            I = y == A,
            _ = !1,
            T = e.prototype,
            P = T[h] || T[f] || y && T[y],
            S = P || E(y),
            F = y ? I ? E("entries") : S : void 0,
            O = "Array" == t ? T.entries || P : P;
        if (O && (k = c(O.call(new e)), k !== Object.prototype && k.next && (u(k, M, !0), r || "function" == typeof k[h] || a(k, h, g))), I && P && P.name !== A && (_ = !0, S = function() {
                return P.call(this)
            }), r && !m || !d && !_ && T[h] || a(T, h, S), s[t] = S, s[M] = g, y)
            if (w = {
                    values: I ? S : E(A),
                    keys: b ? S : E(p),
                    entries: F
                }, m)
                for (x in w) x in T || o(T, x, w[x]);
            else i(i.P + i.F * (d || _), t, w);
        return w
    }
}, function(e, t) {
    e.exports = !0
}, function(e, t, n) {
    var r = n(12),
        i = n(13),
        o = n(14),
        a = n(16),
        s = n(26),
        l = "prototype",
        u = function(e, t, n) {
            var c, h, d, f = e & u.F,
                p = e & u.G,
                A = e & u.S,
                g = e & u.P,
                v = e & u.B,
                y = e & u.W,
                b = p ? i : i[t] || (i[t] = {}),
                m = b[l],
                w = p ? r : A ? r[t] : (r[t] || {})[l];
            p && (n = t);
            for (c in n) h = !f && w && void 0 !== w[c], h && s(b, c) || (d = h ? w[c] : n[c], b[c] = p && "function" != typeof w[c] ? n[c] : v && h ? o(d, r) : y && w[c] == d ? function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, r)
                    }
                    return e.apply(this, arguments)
                };
                return t[l] = e[l], t
            }(d) : g && "function" == typeof d ? o(Function.call, d) : d, g && ((b.virtual || (b.virtual = {}))[c] = d, e & u.R && m && !m[c] && a(m, c, d)))
        };
    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
}, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(e, t) {
    var n = e.exports = {
        version: "2.6.9"
    };
    "number" == typeof __e && (__e = n)
}, function(e, t, n) {
    var r = n(15);
    e.exports = function(e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return e.call(t, n, r, i)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t, n) {
    var r = n(17),
        i = n(25);
    e.exports = n(21) ? function(e, t, n) {
        return r.f(e, t, i(1, n))
    } : function(e, t, n) {
        return e[t] = n, e
    }
}, function(e, t, n) {
    var r = n(18),
        i = n(20),
        o = n(24),
        a = Object.defineProperty;
    t.f = n(21) ? Object.defineProperty : function(e, t, n) {
        if (r(e), t = o(t, !0), r(n), i) try {
            return a(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function(e, t, n) {
    var r = n(19);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t, n) {
    e.exports = !n(21) && !n(22)(function() {
        return 7 != Object.defineProperty(n(23)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    e.exports = !n(22)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t, n) {
    var r = n(19),
        i = n(12).document,
        o = r(i) && r(i.createElement);
    e.exports = function(e) {
        return o ? i.createElement(e) : {}
    }
}, function(e, t, n) {
    var r = n(19);
    e.exports = function(e, t) {
        if (!r(e)) return e;
        var n, i;
        if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
        if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
        if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}, function(e, t, n) {
    e.exports = n(16)
}, function(e, t) {
    e.exports = {}
}, function(e, t, n) {
    "use strict";
    var r = n(30),
        i = n(25),
        o = n(45),
        a = {};
    n(16)(a, n(46)("iterator"), function() {
        return this
    }), e.exports = function(e, t, n) {
        e.prototype = r(a, {
            next: i(1, n)
        }), o(e, t + " Iterator")
    }
}, function(e, t, n) {
    var r = n(18),
        i = n(31),
        o = n(43),
        a = n(40)("IE_PROTO"),
        s = function() {},
        l = "prototype",
        u = function() {
            var e, t = n(23)("iframe"),
                r = o.length,
                i = "<",
                a = ">";
            for (t.style.display = "none", n(44).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(i + "script" + a + "document.F=Object" + i + "/script" + a), e.close(), u = e.F; r--;) delete u[l][o[r]];
            return u()
        };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (s[l] = r(e), n = new s, s[l] = null, n[a] = e) : n = u(), void 0 === t ? n : i(n, t)
    }
}, function(e, t, n) {
    var r = n(17),
        i = n(18),
        o = n(32);
    e.exports = n(21) ? Object.defineProperties : function(e, t) {
        i(e);
        for (var n, a = o(t), s = a.length, l = 0; s > l;) r.f(e, n = a[l++], t[n]);
        return e
    }
}, function(e, t, n) {
    var r = n(33),
        i = n(43);
    e.exports = Object.keys || function(e) {
        return r(e, i)
    }
}, function(e, t, n) {
    var r = n(26),
        i = n(34),
        o = n(37)(!1),
        a = n(40)("IE_PROTO");
    e.exports = function(e, t) {
        var n, s = i(e),
            l = 0,
            u = [];
        for (n in s) n != a && r(s, n) && u.push(n);
        for (; t.length > l;) r(s, n = t[l++]) && (~o(u, n) || u.push(n));
        return u
    }
}, function(e, t, n) {
    var r = n(35),
        i = n(8);
    e.exports = function(e) {
        return r(i(e))
    }
}, function(e, t, n) {
    var r = n(36);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}, function(e, t, n) {
    var r = n(34),
        i = n(38),
        o = n(39);
    e.exports = function(e) {
        return function(t, n, a) {
            var s, l = r(t),
                u = i(l.length),
                c = o(a, u);
            if (e && n != n) {
                for (; u > c;)
                    if (s = l[c++], s != s) return !0
            } else
                for (; u > c; c++)
                    if ((e || c in l) && l[c] === n) return e || c || 0;
            return !e && -1
        }
    }
}, function(e, t, n) {
    var r = n(7),
        i = Math.min;
    e.exports = function(e) {
        return e > 0 ? i(r(e), 9007199254740991) : 0
    }
}, function(e, t, n) {
    var r = n(7),
        i = Math.max,
        o = Math.min;
    e.exports = function(e, t) {
        return e = r(e), e < 0 ? i(e + t, 0) : o(e, t)
    }
}, function(e, t, n) {
    var r = n(41)("keys"),
        i = n(42);
    e.exports = function(e) {
        return r[e] || (r[e] = i(e))
    }
}, function(e, t, n) {
    var r = n(13),
        i = n(12),
        o = "__core-js_shared__",
        a = i[o] || (i[o] = {});
    (e.exports = function(e, t) {
        return a[e] || (a[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: r.version,
        mode: n(10) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(e, t) {
    var n = 0,
        r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
    var r = n(12).document;
    e.exports = r && r.documentElement
}, function(e, t, n) {
    var r = n(17).f,
        i = n(26),
        o = n(46)("toStringTag");
    e.exports = function(e, t, n) {
        e && !i(e = n ? e : e.prototype, o) && r(e, o, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t, n) {
    var r = n(41)("wks"),
        i = n(42),
        o = n(12).Symbol,
        a = "function" == typeof o,
        s = e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        };
    s.store = r
}, function(e, t, n) {
    var r = n(26),
        i = n(48),
        o = n(40)("IE_PROTO"),
        a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}, function(e, t, n) {
    var r = n(8);
    e.exports = function(e) {
        return Object(r(e))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        i = n(11),
        o = n(48),
        a = n(50),
        s = n(51),
        l = n(38),
        u = n(52),
        c = n(53);
    i(i.S + i.F * !n(55)(function(e) {
        Array.from(e)
    }), "Array", {
        from: function(e) {
            var t, n, i, h, d = o(e),
                f = "function" == typeof this ? this : Array,
                p = arguments.length,
                A = p > 1 ? arguments[1] : void 0,
                g = void 0 !== A,
                v = 0,
                y = c(d);
            if (g && (A = r(A, p > 2 ? arguments[2] : void 0, 2)), void 0 == y || f == Array && s(y))
                for (t = l(d.length), n = new f(t); t > v; v++) u(n, v, g ? A(d[v], v) : d[v]);
            else
                for (h = y.call(d), n = new f; !(i = h.next()).done; v++) u(n, v, g ? a(h, A, [i.value, v], !0) : i.value);
            return n.length = v, n
        }
    })
}, function(e, t, n) {
    var r = n(18);
    e.exports = function(e, t, n, i) {
        try {
            return i ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var o = e.return;
            throw void 0 !== o && r(o.call(e)), t
        }
    }
}, function(e, t, n) {
    var r = n(28),
        i = n(46)("iterator"),
        o = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || o[i] === e)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(17),
        i = n(25);
    e.exports = function(e, t, n) {
        t in e ? r.f(e, t, i(0, n)) : e[t] = n
    }
}, function(e, t, n) {
    var r = n(54),
        i = n(46)("iterator"),
        o = n(28);
    e.exports = n(13).getIteratorMethod = function(e) {
        if (void 0 != e) return e[i] || e["@@iterator"] || o[r(e)]
    }
}, function(e, t, n) {
    var r = n(36),
        i = n(46)("toStringTag"),
        o = "Arguments" == r(function() {
            return arguments
        }()),
        a = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        };
    e.exports = function(e) {
        var t, n, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = a(t = Object(e), i)) ? n : o ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s
    }
}, function(e, t, n) {
    var r = n(46)("iterator"),
        i = !1;
    try {
        var o = [7][r]();
        o.return = function() {
            i = !0
        }, Array.from(o, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !i) return !1;
        var n = !1;
        try {
            var o = [7],
                a = o[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }, o[r] = function() {
                return a
            }, e(o)
        } catch (e) {}
        return n
    }
}, function(e, t) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(58),
        o = r(i);
    t.default = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o.default)(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }()
}, function(e, t, n) {
    e.exports = {
        default: n(59),
        __esModule: !0
    }
}, function(e, t, n) {
    n(60);
    var r = n(13).Object;
    e.exports = function(e, t, n) {
        return r.defineProperty(e, t, n)
    }
}, function(e, t, n) {
    var r = n(11);
    r(r.S + r.F * !n(21), "Object", {
        defineProperty: n(17).f
    })
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.checkForMutationObserver = function() {
        var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        return e
    }, t.validateCallback = function(e) {
        if ("function" == typeof e) return e;
        var t = "Darwin must receive a callback function, or there is nothing to run when mutations occur.";
        throw new Error(t)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(63),
        i = function(e) {
            "string" == typeof e && (e = r(e));
            var t = (299 * e.red + 587 * e.green + 114 * e.blue) / 1e3;
            return t < 166.4
        };
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = n(64).default,
        i = n(76),
        o = n(80),
        a = n(84),
        s = function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? "rgb" : arguments[1];
            if (!r(a).includes(t)) return console.error("Invalid color model: " + t), null;
            var n = i.get(e);
            if (!n) return null;
            var s = n.model,
                l = n.value,
                u = l;
            if (s !== t) {
                var c = o[s][t];
                u = c(l).concat(l.slice(3))
            }
            return u.reduce(function(e, n, r) {
                var i = a[t][r];
                return e[i] = n, e
            }, {})
        };
    e.exports = s
}, function(e, t, n) {
    e.exports = {
        default: n(65),
        __esModule: !0
    }
}, function(e, t, n) {
    n(66), e.exports = n(72).Object.keys
}, function(e, t, n) {
    var r = n(67);
    n(69)("keys", function(e) {
        return function(t) {
            return e(r(t))
        }
    })
}, function(e, t, n) {
    var r = n(68);
    e.exports = function(e) {
        return Object(r(e))
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, n) {
    var r = n(70),
        i = n(72),
        o = n(75);
    e.exports = function(e, t) {
        var n = (i.Object || {})[e] || Object[e],
            a = {};
        a[e] = t(n), r(r.S + r.F * o(function() {
            n(1)
        }), "Object", a)
    }
}, function(e, t, n) {
    var r = n(71),
        i = n(72),
        o = n(73),
        a = "prototype",
        s = function(e, t, n) {
            var l, u, c, h = e & s.F,
                d = e & s.G,
                f = e & s.S,
                p = e & s.P,
                A = e & s.B,
                g = e & s.W,
                v = d ? i : i[t] || (i[t] = {}),
                y = d ? r : f ? r[t] : (r[t] || {})[a];
            d && (n = t);
            for (l in n) u = !h && y && l in y, u && l in v || (c = u ? y[l] : n[l], v[l] = d && "function" != typeof y[l] ? n[l] : A && u ? o(c, r) : g && y[l] == c ? function(e) {
                var t = function(t) {
                    return this instanceof e ? new e(t) : e(t)
                };
                return t[a] = e[a], t
            }(c) : p && "function" == typeof c ? o(Function.call, c) : c, p && ((v[a] || (v[a] = {}))[l] = c))
        };
    s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, e.exports = s
}, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(e, t) {
    var n = e.exports = {
        version: "1.2.6"
    };
    "number" == typeof __e && (__e = n)
}, function(e, t, n) {
    var r = n(74);
    e.exports = function(e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return e.call(t, n, r, i)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t, n) {
    function r(e, t, n) {
        return Math.min(Math.max(t, e), n)
    }

    function i(e) {
        var t = e.toString(16).toUpperCase();
        return t.length < 2 ? "0" + t : t
    }
    var o = n(77),
        a = n(78),
        s = {};
    for (var l in o) o.hasOwnProperty(l) && (s[o[l]] = l);
    var u = e.exports = {
        to: {}
    };
    u.get = function(e) {
        var t, n, r = e.substring(0, 3).toLowerCase();
        switch (r) {
            case "hsl":
                t = u.get.hsl(e), n = "hsl";
                break;
            case "hwb":
                t = u.get.hwb(e), n = "hwb";
                break;
            default:
                t = u.get.rgb(e), n = "rgb"
        }
        return t ? {
            model: n,
            value: t
        } : null
    }, u.get.rgb = function(e) {
        if (!e) return null;
        var t, n, i, a = /^#([a-fA-F0-9]{3})$/,
            s = /^#([a-fA-F0-9]{6})$/,
            l = /^(rgba?)\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?\d*\.?\d+)\s*)?\)$/,
            u = /^(rgba?)\(\s*([+-]?\d*\.?\d+)\%\s*,\s*([+-]?\d*\.?\d+)\%\s*,\s*([+-]?\d*\.?\d+)\%\s*(?:,\s*([+-]?\d*\.?\d+)\s*)?\)$/,
            c = /(\D+)/,
            h = [0, 0, 0, 1];
        if (t = e.match(a))
            for (t = t[1], n = 0; n < 3; n++) h[n] = parseInt(t[n] + t[n], 16);
        else if (t = e.match(s))
            for (t = t[1], n = 0; n < 3; n++) {
                var d = 2 * n;
                h[n] = parseInt(t.slice(d, d + 2), 16)
            } else if (t = e.match(l)) {
                if (i = t[5], i && "rgb" === t[1] || !i && "rgba" === t[1]) return null;
                for (n = 0; n < 3; n++) h[n] = parseInt(t[n + 2], 0);
                i && (h[3] = parseFloat(i))
            } else {
                if (!(t = e.match(u))) return (t = e.match(c)) ? "transparent" === t[1] ? [0, 0, 0, 0] : (h = o[t[1]]) ? (h[3] = 1, h) : null : null;
                if (i = t[5], i && "rgb" === t[1] || !i && "rgba" === t[1]) return null;
                for (n = 0; n < 3; n++) h[n] = Math.round(2.55 * parseFloat(t[n + 2]));
                i && (h[3] = parseFloat(i))
            }
        for (n = 0; n < h.length; n++) h[n] = r(h[n], 0, 255);
        return h[3] = r(h[3], 0, 1), h
    }, u.get.hsl = function(e) {
        if (!e) return null;
        var t = /^(hsla?)\(\s*([+-]?\d*\.?\d+)(?:deg)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)\s*)?\)$/,
            n = e.match(t);
        if (n) {
            var i = n[5];
            if (i && "hsl" === n[1] || !i && "hsla" === n[1]) return null;
            var o = i ? parseFloat(i) : 1,
                a = (parseFloat(n[2]) % 360 + 360) % 360,
                s = r(parseFloat(n[3]), 0, 100),
                l = r(parseFloat(n[4]), 0, 100),
                u = r(o, 0, 1);
            return [a, s, l, u]
        }
        return null
    }, u.get.hwb = function(e) {
        if (!e) return null;
        var t = /^hwb\(\s*([+-]?\d*\.?\d+)(?:deg)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)\s*)?\)$/,
            n = e.match(t);
        if (n) {
            var i = parseFloat(n[4]),
                o = (parseFloat(n[1]) % 360 + 360) % 360,
                a = r(parseFloat(n[2]), 0, 100),
                s = r(parseFloat(n[3]), 0, 100),
                l = r(isNaN(i) ? 1 : i, 0, 1);
            return [o, a, s, l]
        }
        return null
    }, u.to.hex = function(e) {
        return "#" + i(e[0]) + i(e[1]) + i(e[2])
    }, u.to.rgb = function() {
        var e = a(arguments);
        return e.length < 4 || 1 === e[3] ? "rgb(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ")" : "rgba(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ", " + e[3] + ")"
    }, u.to.rgb.percent = function() {
        var e = a(arguments),
            t = Math.round(e[0] / 255 * 100),
            n = Math.round(e[1] / 255 * 100),
            r = Math.round(e[2] / 255 * 100);
        return e.length < 4 || 1 === e[3] ? "rgb(" + t + "%, " + n + "%, " + r + "%)" : "rgba(" + t + "%, " + n + "%, " + r + "%, " + e[3] + ")"
    }, u.to.hsl = function() {
        var e = a(arguments);
        return e.length < 4 || 1 === e[3] ? "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)" : "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")"
    }, u.to.hwb = function() {
        var e = a(arguments),
            t = "";
        return e.length >= 4 && 1 !== e[3] && (t = ", " + e[3]), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + t + ")"
    }, u.to.keyword = function(e) {
        return s[e.slice(0, 3)]
    }
}, function(e, t) {
    "use strict";
    e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }
}, function(e, t, n) {
    "use strict";
    var r = n(79),
        i = Array.prototype.concat,
        o = Array.prototype.slice,
        a = e.exports = function(e) {
            for (var t = [], n = 0, a = e.length; n < a; n++) {
                var s = e[n];
                r(s) ? t = i.call(t, o.call(s)) : t.push(s)
            }
            return t
        };
    a.wrap = function(e) {
        return function() {
            return e(a(arguments))
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        return !(!e || "string" == typeof e) && (e instanceof Array || Array.isArray(e) || e.length >= 0 && (e.splice instanceof Function || Object.getOwnPropertyDescriptor(e, e.length - 1) && "String" !== e.constructor.name))
    }
}, function(e, t, n) {
    function r(e) {
        var t = function(t) {
            return void 0 === t || null === t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), e(t))
        };
        return "conversion" in e && (t.conversion = e.conversion), t
    }

    function i(e) {
        var t = function(t) {
            if (void 0 === t || null === t) return t;
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
            var n = e(t);
            if ("object" == typeof n)
                for (var r = n.length, i = 0; i < r; i++) n[i] = Math.round(n[i]);
            return n
        };
        return "conversion" in e && (t.conversion = e.conversion), t
    }
    var o = n(81),
        a = n(83),
        s = {},
        l = Object.keys(o);
    l.forEach(function(e) {
        s[e] = {}, Object.defineProperty(s[e], "channels", {
            value: o[e].channels
        }), Object.defineProperty(s[e], "labels", {
            value: o[e].labels
        });
        var t = a(e),
            n = Object.keys(t);
        n.forEach(function(n) {
            var o = t[n];
            s[e][n] = i(o), s[e][n].raw = r(o)
        })
    }), e.exports = s
}, function(e, t, n) {
    function r(e, t) {
        return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2) + Math.pow(e[2] - t[2], 2)
    }
    var i = n(82),
        o = {};
    for (var a in i) i.hasOwnProperty(a) && (o[i[a]] = a);
    var s = e.exports = {
        rgb: {
            channels: 3,
            labels: "rgb"
        },
        hsl: {
            channels: 3,
            labels: "hsl"
        },
        hsv: {
            channels: 3,
            labels: "hsv"
        },
        hwb: {
            channels: 3,
            labels: "hwb"
        },
        cmyk: {
            channels: 4,
            labels: "cmyk"
        },
        xyz: {
            channels: 3,
            labels: "xyz"
        },
        lab: {
            channels: 3,
            labels: "lab"
        },
        lch: {
            channels: 3,
            labels: "lch"
        },
        hex: {
            channels: 1,
            labels: ["hex"]
        },
        keyword: {
            channels: 1,
            labels: ["keyword"]
        },
        ansi16: {
            channels: 1,
            labels: ["ansi16"]
        },
        ansi256: {
            channels: 1,
            labels: ["ansi256"]
        },
        hcg: {
            channels: 3,
            labels: ["h", "c", "g"]
        },
        apple: {
            channels: 3,
            labels: ["r16", "g16", "b16"]
        },
        gray: {
            channels: 1,
            labels: ["gray"]
        }
    };
    for (var l in s)
        if (s.hasOwnProperty(l)) {
            if (!("channels" in s[l])) throw new Error("missing channels property: " + l);
            if (!("labels" in s[l])) throw new Error("missing channel labels property: " + l);
            if (s[l].labels.length !== s[l].channels) throw new Error("channel and label counts mismatch: " + l);
            var u = s[l].channels,
                c = s[l].labels;
            delete s[l].channels, delete s[l].labels, Object.defineProperty(s[l], "channels", {
                value: u
            }), Object.defineProperty(s[l], "labels", {
                value: c
            })
        }
    s.rgb.hsl = function(e) {
        var t, n, r, i = e[0] / 255,
            o = e[1] / 255,
            a = e[2] / 255,
            s = Math.min(i, o, a),
            l = Math.max(i, o, a),
            u = l - s;
        return l === s ? t = 0 : i === l ? t = (o - a) / u : o === l ? t = 2 + (a - i) / u : a === l && (t = 4 + (i - o) / u), t = Math.min(60 * t, 360), t < 0 && (t += 360), r = (s + l) / 2, n = l === s ? 0 : r <= .5 ? u / (l + s) : u / (2 - l - s), [t, 100 * n, 100 * r]
    }, s.rgb.hsv = function(e) {
        var t, n, r, i, o, a = e[0] / 255,
            s = e[1] / 255,
            l = e[2] / 255,
            u = Math.max(a, s, l),
            c = u - Math.min(a, s, l),
            h = function(e) {
                return (u - e) / 6 / c + .5
            };
        return 0 === c ? i = o = 0 : (o = c / u, t = h(a), n = h(s), r = h(l), a === u ? i = r - n : s === u ? i = 1 / 3 + t - r : l === u && (i = 2 / 3 + n - t), i < 0 ? i += 1 : i > 1 && (i -= 1)), [360 * i, 100 * o, 100 * u]
    }, s.rgb.hwb = function(e) {
        var t = e[0],
            n = e[1],
            r = e[2],
            i = s.rgb.hsl(e)[0],
            o = 1 / 255 * Math.min(t, Math.min(n, r));
        return r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)), [i, 100 * o, 100 * r]
    }, s.rgb.cmyk = function(e) {
        var t, n, r, i, o = e[0] / 255,
            a = e[1] / 255,
            s = e[2] / 255;
        return i = Math.min(1 - o, 1 - a, 1 - s), t = (1 - o - i) / (1 - i) || 0, n = (1 - a - i) / (1 - i) || 0, r = (1 - s - i) / (1 - i) || 0, [100 * t, 100 * n, 100 * r, 100 * i]
    }, s.rgb.keyword = function(e) {
        var t = o[e];
        if (t) return t;
        var n, a = 1 / 0;
        for (var s in i)
            if (i.hasOwnProperty(s)) {
                var l = i[s],
                    u = r(e, l);
                u < a && (a = u, n = s)
            }
        return n
    }, s.keyword.rgb = function(e) {
        return i[e]
    }, s.rgb.xyz = function(e) {
        var t = e[0] / 255,
            n = e[1] / 255,
            r = e[2] / 255;
        t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92;
        var i = .4124 * t + .3576 * n + .1805 * r,
            o = .2126 * t + .7152 * n + .0722 * r,
            a = .0193 * t + .1192 * n + .9505 * r;
        return [100 * i, 100 * o, 100 * a]
    }, s.rgb.lab = function(e) {
        var t, n, r, i = s.rgb.xyz(e),
            o = i[0],
            a = i[1],
            l = i[2];
        return o /= 95.047, a /= 100, l /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, t = 116 * a - 16, n = 500 * (o - a), r = 200 * (a - l), [t, n, r]
    }, s.hsl.rgb = function(e) {
        var t, n, r, i, o, a = e[0] / 360,
            s = e[1] / 100,
            l = e[2] / 100;
        if (0 === s) return o = 255 * l, [o, o, o];
        n = l < .5 ? l * (1 + s) : l + s - l * s, t = 2 * l - n, i = [0, 0, 0];
        for (var u = 0; u < 3; u++) r = a + 1 / 3 * -(u - 1), r < 0 && r++, r > 1 && r--, o = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, i[u] = 255 * o;
        return i
    }, s.hsl.hsv = function(e) {
        var t, n, r = e[0],
            i = e[1] / 100,
            o = e[2] / 100,
            a = i,
            s = Math.max(o, .01);
        return o *= 2, i *= o <= 1 ? o : 2 - o, a *= s <= 1 ? s : 2 - s, n = (o + i) / 2, t = 0 === o ? 2 * a / (s + a) : 2 * i / (o + i), [r, 100 * t, 100 * n]
    }, s.hsv.rgb = function(e) {
        var t = e[0] / 60,
            n = e[1] / 100,
            r = e[2] / 100,
            i = Math.floor(t) % 6,
            o = t - Math.floor(t),
            a = 255 * r * (1 - n),
            s = 255 * r * (1 - n * o),
            l = 255 * r * (1 - n * (1 - o));
        switch (r *= 255, i) {
            case 0:
                return [r, l, a];
            case 1:
                return [s, r, a];
            case 2:
                return [a, r, l];
            case 3:
                return [a, s, r];
            case 4:
                return [l, a, r];
            case 5:
                return [r, a, s]
        }
    }, s.hsv.hsl = function(e) {
        var t, n, r, i = e[0],
            o = e[1] / 100,
            a = e[2] / 100,
            s = Math.max(a, .01);
        return r = (2 - o) * a, t = (2 - o) * s, n = o * s, n /= t <= 1 ? t : 2 - t, n = n || 0, r /= 2, [i, 100 * n, 100 * r]
    }, s.hwb.rgb = function(e) {
        var t, n, r, i, o = e[0] / 360,
            a = e[1] / 100,
            s = e[2] / 100,
            l = a + s;
        l > 1 && (a /= l, s /= l), t = Math.floor(6 * o), n = 1 - s, r = 6 * o - t, 0 !== (1 & t) && (r = 1 - r), i = a + r * (n - a);
        var u, c, h;
        switch (t) {
            default:
                case 6:
                case 0:
                u = n,
            c = i,
            h = a;
            break;
            case 1:
                    u = i,
                c = n,
                h = a;
                break;
            case 2:
                    u = a,
                c = n,
                h = i;
                break;
            case 3:
                    u = a,
                c = i,
                h = n;
                break;
            case 4:
                    u = i,
                c = a,
                h = n;
                break;
            case 5:
                    u = n,
                c = a,
                h = i
        }
        return [255 * u, 255 * c, 255 * h]
    }, s.cmyk.rgb = function(e) {
        var t, n, r, i = e[0] / 100,
            o = e[1] / 100,
            a = e[2] / 100,
            s = e[3] / 100;
        return t = 1 - Math.min(1, i * (1 - s) + s), n = 1 - Math.min(1, o * (1 - s) + s), r = 1 - Math.min(1, a * (1 - s) + s), [255 * t, 255 * n, 255 * r]
    }, s.xyz.rgb = function(e) {
        var t, n, r, i = e[0] / 100,
            o = e[1] / 100,
            a = e[2] / 100;
        return t = 3.2406 * i + o * -1.5372 + a * -.4986, n = i * -.9689 + 1.8758 * o + .0415 * a, r = .0557 * i + o * -.204 + 1.057 * a, t = t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, t = Math.min(Math.max(0, t), 1), n = Math.min(Math.max(0, n), 1), r = Math.min(Math.max(0, r), 1), [255 * t, 255 * n, 255 * r]
    }, s.xyz.lab = function(e) {
        var t, n, r, i = e[0],
            o = e[1],
            a = e[2];
        return i /= 95.047, o /= 100, a /= 108.883, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, t = 116 * o - 16, n = 500 * (i - o), r = 200 * (o - a), [t, n, r]
    }, s.lab.xyz = function(e) {
        var t, n, r, i = e[0],
            o = e[1],
            a = e[2];
        n = (i + 16) / 116, t = o / 500 + n, r = n - a / 200;
        var s = Math.pow(n, 3),
            l = Math.pow(t, 3),
            u = Math.pow(r, 3);
        return n = s > .008856 ? s : (n - 16 / 116) / 7.787, t = l > .008856 ? l : (t - 16 / 116) / 7.787, r = u > .008856 ? u : (r - 16 / 116) / 7.787, t *= 95.047, n *= 100, r *= 108.883, [t, n, r]
    }, s.lab.lch = function(e) {
        var t, n, r, i = e[0],
            o = e[1],
            a = e[2];
        return t = Math.atan2(a, o), n = 360 * t / 2 / Math.PI, n < 0 && (n += 360), r = Math.sqrt(o * o + a * a), [i, r, n]
    }, s.lch.lab = function(e) {
        var t, n, r, i = e[0],
            o = e[1],
            a = e[2];
        return r = a / 360 * 2 * Math.PI, t = o * Math.cos(r), n = o * Math.sin(r), [i, t, n]
    }, s.rgb.ansi16 = function(e) {
        var t = e[0],
            n = e[1],
            r = e[2],
            i = 1 in arguments ? arguments[1] : s.rgb.hsv(e)[2];
        if (i = Math.round(i / 50), 0 === i) return 30;
        var o = 30 + (Math.round(r / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));
        return 2 === i && (o += 60), o
    }, s.hsv.ansi16 = function(e) {
        return s.rgb.ansi16(s.hsv.rgb(e), e[2])
    }, s.rgb.ansi256 = function(e) {
        var t = e[0],
            n = e[1],
            r = e[2];
        if (t === n && n === r) return t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232;
        var i = 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
        return i
    }, s.ansi16.rgb = function(e) {
        var t = e % 10;
        if (0 === t || 7 === t) return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
        var n = .5 * (~~(e > 50) + 1),
            r = (1 & t) * n * 255,
            i = (t >> 1 & 1) * n * 255,
            o = (t >> 2 & 1) * n * 255;
        return [r, i, o]
    }, s.ansi256.rgb = function(e) {
        if (e >= 232) {
            var t = 10 * (e - 232) + 8;
            return [t, t, t]
        }
        e -= 16;
        var n, r = Math.floor(e / 36) / 5 * 255,
            i = Math.floor((n = e % 36) / 6) / 5 * 255,
            o = n % 6 / 5 * 255;
        return [r, i, o]
    }, s.rgb.hex = function(e) {
        var t = ((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2])),
            n = t.toString(16).toUpperCase();
        return "000000".substring(n.length) + n
    }, s.hex.rgb = function(e) {
        var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!t) return [0, 0, 0];
        var n = t[0];
        3 === t[0].length && (n = n.split("").map(function(e) {
            return e + e
        }).join(""));
        var r = parseInt(n, 16),
            i = r >> 16 & 255,
            o = r >> 8 & 255,
            a = 255 & r;
        return [i, o, a]
    }, s.rgb.hcg = function(e) {
        var t, n, r = e[0] / 255,
            i = e[1] / 255,
            o = e[2] / 255,
            a = Math.max(Math.max(r, i), o),
            s = Math.min(Math.min(r, i), o),
            l = a - s;
        return t = l < 1 ? s / (1 - l) : 0, n = l <= 0 ? 0 : a === r ? (i - o) / l % 6 : a === i ? 2 + (o - r) / l : 4 + (r - i) / l + 4, n /= 6, n %= 1, [360 * n, 100 * l, 100 * t]
    }, s.hsl.hcg = function(e) {
        var t = e[1] / 100,
            n = e[2] / 100,
            r = 1,
            i = 0;
        return r = n < .5 ? 2 * t * n : 2 * t * (1 - n), r < 1 && (i = (n - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * i]
    }, s.hsv.hcg = function(e) {
        var t = e[1] / 100,
            n = e[2] / 100,
            r = t * n,
            i = 0;
        return r < 1 && (i = (n - r) / (1 - r)), [e[0], 100 * r, 100 * i]
    }, s.hcg.rgb = function(e) {
        var t = e[0] / 360,
            n = e[1] / 100,
            r = e[2] / 100;
        if (0 === n) return [255 * r, 255 * r, 255 * r];
        var i = [0, 0, 0],
            o = t % 1 * 6,
            a = o % 1,
            s = 1 - a,
            l = 0;
        switch (Math.floor(o)) {
            case 0:
                i[0] = 1, i[1] = a, i[2] = 0;
                break;
            case 1:
                i[0] = s, i[1] = 1, i[2] = 0;
                break;
            case 2:
                i[0] = 0, i[1] = 1, i[2] = a;
                break;
            case 3:
                i[0] = 0, i[1] = s, i[2] = 1;
                break;
            case 4:
                i[0] = a, i[1] = 0, i[2] = 1;
                break;
            default:
                i[0] = 1, i[1] = 0, i[2] = s
        }
        return l = (1 - n) * r, [255 * (n * i[0] + l), 255 * (n * i[1] + l), 255 * (n * i[2] + l)]
    }, s.hcg.hsv = function(e) {
        var t = e[1] / 100,
            n = e[2] / 100,
            r = t + n * (1 - t),
            i = 0;
        return r > 0 && (i = t / r), [e[0], 100 * i, 100 * r]
    }, s.hcg.hsl = function(e) {
        var t = e[1] / 100,
            n = e[2] / 100,
            r = n * (1 - t) + .5 * t,
            i = 0;
        return r > 0 && r < .5 ? i = t / (2 * r) : r >= .5 && r < 1 && (i = t / (2 * (1 - r))), [e[0], 100 * i, 100 * r]
    }, s.hcg.hwb = function(e) {
        var t = e[1] / 100,
            n = e[2] / 100,
            r = t + n * (1 - t);
        return [e[0], 100 * (r - t), 100 * (1 - r)]
    }, s.hwb.hcg = function(e) {
        var t = e[1] / 100,
            n = e[2] / 100,
            r = 1 - n,
            i = r - t,
            o = 0;
        return i < 1 && (o = (r - i) / (1 - i)), [e[0], 100 * i, 100 * o]
    }, s.apple.rgb = function(e) {
        return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]
    }, s.rgb.apple = function(e) {
        return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]
    }, s.gray.rgb = function(e) {
        return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]
    }, s.gray.hsl = s.gray.hsv = function(e) {
        return [0, 0, e[0]]
    }, s.gray.hwb = function(e) {
        return [0, 100, e[0]]
    }, s.gray.cmyk = function(e) {
        return [0, 0, 0, e[0]]
    }, s.gray.lab = function(e) {
        return [e[0], 0, 0]
    }, s.gray.hex = function(e) {
        var t = 255 & Math.round(e[0] / 100 * 255),
            n = (t << 16) + (t << 8) + t,
            r = n.toString(16).toUpperCase();
        return "000000".substring(r.length) + r
    }, s.rgb.gray = function(e) {
        var t = (e[0] + e[1] + e[2]) / 3;
        return [t / 255 * 100]
    }
}, function(e, t) {
    "use strict";
    e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }
}, function(e, t, n) {
    function r() {
        for (var e = {}, t = Object.keys(s), n = t.length, r = 0; r < n; r++) e[t[r]] = {
            distance: -1,
            parent: null
        };
        return e
    }

    function i(e) {
        var t = r(),
            n = [e];
        for (t[e].distance = 0; n.length;)
            for (var i = n.pop(), o = Object.keys(s[i]), a = o.length, l = 0; l < a; l++) {
                var u = o[l],
                    c = t[u];
                c.distance === -1 && (c.distance = t[i].distance + 1, c.parent = i, n.unshift(u))
            }
        return t
    }

    function o(e, t) {
        return function(n) {
            return t(e(n))
        }
    }

    function a(e, t) {
        for (var n = [t[e].parent, e], r = s[t[e].parent][e], i = t[e].parent; t[i].parent;) n.unshift(t[i].parent), r = o(s[t[i].parent][i], r), i = t[i].parent;
        return r.conversion = n, r
    }
    var s = n(81);
    e.exports = function(e) {
        for (var t = i(e), n = {}, r = Object.keys(t), o = r.length, s = 0; s < o; s++) {
            var l = r[s],
                u = t[l];
            null !== u.parent && (n[l] = a(l, t))
        }
        return n
    }
}, function(e, t) {
    "use strict";
    var n = {
        rgb: ["red", "green", "blue", "alpha"],
        hsl: ["hue", "saturation", "lightness", "alpha"],
        hsv: ["hue", "saturation", "value", "alpha"]
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var r = n(86),
        i = ["red", "green", "blue"],
        o = function() {
            for (var e = arguments, t = !0; t;) {
                for (var n = e.length, o = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) o[a - 2] = e[a];
                var s = e.length <= 0 || void 0 === e[0] ? "transparent" : e[0];
                t = !1;
                var l = e.length <= 1 || void 0 === e[1] ? "transparent" : e[1];
                "string" == typeof s && (s = r(s)), "string" == typeof l && (l = r(l));
                var u = 1 - (1 - s.alpha) * (1 - l.alpha),
                    c = {
                        alpha: u
                    };
                if (u < .001 ? (i.forEach(function(e) {
                        c[e] = 0
                    }), c.alpha = 0) : i.forEach(function(e) {
                        c[e] = Math.round(s[e] * s.alpha + l[e] * (1 - s.alpha))
                    }), !(o && o.length > 0)) return c;
                e = [c].concat(o), t = !0, s = l = n = o = a = u = c = void 0
            }
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = arguments.length <= 2 || void 0 === arguments[2] ? "rgb" : arguments[2];
        if ("string" != typeof e) throw new TypeError(e + " is not a valid string");
        return "string" != typeof t && (t = "transparent"), e = e.trim(), i(e, n) || i(t, n)
    }
    var i = n(63);
    e.exports = r
}, function(e, t, n) {
    var r = n(88).VideoBackground,
        i = n(105);
    e.exports = {
        VideoBackground: r,
        getVideoProps: i
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.videoAutoplayTest = t.VideoFilterPropertyValues = t.VideoBackground = void 0, n(89);
    var r = n(90);
    t.VideoBackground = r.VideoBackground, t.VideoFilterPropertyValues = r.VideoFilterPropertyValues, t.videoAutoplayTest = r.videoAutoplayTest
}, function(e, t) {
    ! function() {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }
        return "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, void(window.CustomEvent = e))
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.videoAutoplayTest = t.VideoFilterPropertyValues = t.VideoBackground = void 0;
    var i = n(91),
        o = r(i),
        a = n(104),
        s = n(94),
        l = r(s);
    t.VideoBackground = o.default, t.VideoFilterPropertyValues = a.filterProperties, t.videoAutoplayTest = l.default
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n(92),
        s = r(a),
        l = n(94),
        u = r(l),
        c = n(96),
        h = n(103),
        d = n(98),
        f = n(104),
        p = n(97),
        A = {
            vimeo: {
                api: c.initializeVimeoAPI,
                player: c.initializeVimeoPlayer
            },
            youtube: {
                api: h.initializeYouTubeAPI,
                player: h.initializeYouTubePlayer
            }
        },
        g = function() {
            function e(t) {
                var n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                i(this, e), this.windowContext = r, this.events = [], this.browserCanAutoPlay = !1, this.videoCanAutoPlay = !1, this.setInstanceProperties(t), (0, u.default)().then(function(e) {
                    n.logger(e), n.browserCanAutoPlay = !0, n.initializeVideoAPI()
                }, function(e) {
                    n.logger(e), n.browserCanAutoPlay = !1, n.renderFallbackBehavior()
                }).then(function() {
                    n.setDisplayEffects(), n.bindUI(), n.DEBUG.enabled === !0 && (window.vdbg = n)
                })
            }
            return o(e, [{
                key: "destroy",
                value: function() {
                    this.events && this.events.forEach(function(e) {
                        return e.target.removeEventListener(e.type, e.handler, !0)
                    }), this.events = null, this.player && "function" == typeof this.player.destroy && (this.player.iframe.classList.remove("ready"), clearTimeout(this.playTimeout), this.playTimeout = null, this.player.destroy(), this.player = {}), "number" == typeof this.timer && (clearTimeout(this.timer), this.timer = null)
                }
            }, {
                key: "bindUI",
                value: function() {
                    var e = this,
                        t = function() {
                            e.windowContext.requestAnimationFrame(function() {
                                e.scaleVideo()
                            })
                        };
                    this.events.push({
                        target: this.windowContext,
                        type: "resize",
                        handler: t
                    }), this.windowContext.addEventListener("resize", t, !0)
                }
            }, {
                key: "setInstanceProperties",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e = (0, s.default)({}, d.DEFAULT_PROPERTY_VALUES, e), 1 === e.container.nodeType ? this.container = e.container : "string" == typeof e.container && (this.container = document.querySelector(e.container)), this.container ? (this.videoSource = (0, p.getVideoSource)(e.url), this.videoId = (0, p.getVideoID)(e.url, this.videoSource), this.customFallbackImage = (0, p.validatedImage)(e.customFallbackImage), this.filter = e.filter, this.filterStrength = e.filterStrength, this.fitMode = e.fitMode, this.scaleFactor = e.scaleFactor, this.playbackSpeed = parseFloat(e.playbackSpeed) < .5 ? 1 : parseFloat(e.playbackSpeed), this.timeCode = {
                        start: (0, p.getStartTime)(e.url, this.videoSource) || e.timeCode.start,
                        end: e.timeCode.end
                    }, this.player = {}, void(this.DEBUG = e.DEBUG)) : (console.error("Container " + e.container + " not found"), !1)
                }
            }, {
                key: "setFallbackImage",
                value: function() {
                    var e = this.customFallbackImage;
                    if (!(!e || this.browserCanAutoPlay && this.videoCanAutoPlay)) return e.addEventListener("load", function() {
                        e.classList.add("loaded")
                    }, {
                        once: !0
                    }), this.windowContext.ImageLoader ? void this.windowContext.ImageLoader.load(e, {
                        load: !0
                    }) : void(e.src = e.src)
                }
            }, {
                key: "initializeVideoAPI",
                value: function() {
                    var e = this;
                    if (this.browserCanAutoPlay && this.videoSource && this.videoId) {
                        this.player.ready = !1;
                        var t = A[this.videoSource].api,
                            n = t(this.windowContext);
                        n.then(function(t) {
                            e.logger(t), e.player.ready = !1, e.initializeVideoPlayer()
                        }).catch(function(t) {
                            e.renderFallbackBehavior(), document.body.classList.add("ready"), e.logger(t)
                        })
                    } else this.renderFallbackBehavior(), document.body.classList.add("ready")
                }
            }, {
                key: "initializeVideoPlayer",
                value: function() {
                    var e = this;
                    if (this.player.ready) {
                        try {
                            this.player.destroy()
                        } catch (e) {}
                        this.player.ready = !1
                    }
                    var t = A[this.videoSource].player,
                        n = t({
                            instance: this,
                            container: this.container,
                            win: this.windowContext,
                            videoId: this.videoId,
                            startTime: this.timeCode.start,
                            speed: this.playbackSpeed,
                            readyCallback: function(t, n) {
                                e.player.iframe.classList.add("background-video"), e.videoAspectRatio = (0, p.findPlayerAspectRatio)(e.container, e.player, e.videoSource), e.syncPlayer();
                                var r = new CustomEvent("ready");
                                e.container.dispatchEvent(r)
                            },
                            stateChangeCallback: function(t, n) {
                                switch (t) {
                                    case "buffering":
                                        e.testVideoEmbedAutoplay();
                                        break;
                                    case "playing":
                                        null === e.playTimeout && e.videoCanAutoPlay || e.testVideoEmbedAutoplay(!0)
                                }
                                t && e.logger(t), n && e.logger(n)
                            }
                        });
                    n.then(function(t) {
                        e.player = t
                    }, function(t) {
                        e.logger(t), e.testVideoEmbedAutoplay(!1)
                    })
                }
            }, {
                key: "testVideoEmbedAutoplay",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                    return void 0 === t && (this.logger("test video autoplay: begin"), this.playTimeout && (clearTimeout(this.playTimeout), this.playTimeout = null), this.playTimeout = setTimeout(function() {
                        e.testVideoEmbedAutoplay(!1)
                    }, d.TIMEOUT)), t === !0 ? (clearTimeout(this.playTimeout), this.logger("test video autoplay: success"), this.playTimeout = null, this.videoCanAutoPlay = !0, this.player.ready = !0, this.player.iframe.classList.add("ready"), void this.container.classList.remove("mobile")) : t === !1 ? (clearTimeout(this.playTimeout), this.logger("test video autoplay: failure"), this.playTimeout = null, this.videoCanAutoPlay = !1, void this.renderFallbackBehavior()) : void 0
                }
            }, {
                key: "renderFallbackBehavior",
                value: function() {
                    this.setFallbackImage(), this.container.classList.add("mobile"), this.logger("added mobile")
                }
            }, {
                key: "syncPlayer",
                value: function() {
                    this.setDisplayEffects(), this.setSpeed(), this.scaleVideo()
                }
            }, {
                key: "scaleVideo",
                value: function(e) {
                    this.setFallbackImage();
                    var t = this.player.iframe;
                    if (t) {
                        var n = e || this.scaleFactor;
                        if ("fill" !== this.fitMode) return t.style.width = "", void(t.style.height = "");
                        var r = t.parentNode.clientWidth,
                            i = t.parentNode.clientHeight,
                            o = r / i,
                            a = 0,
                            s = 0;
                        o > this.videoAspectRatio ? (a = r * n, s = r * n / this.videoAspectRatio) : this.videoAspectRatio > o ? (a = i * n * this.videoAspectRatio, s = i * n) : (a = r * n, s = i * n), t.style.width = a + "px", t.style.height = s + "px", t.style.left = 0 - (a - r) / 2 + "px", t.style.top = 0 - (s - i) / 2 + "px"
                    }
                }
            }, {
                key: "setSpeed",
                value: function(e) {
                    this.playbackSpeed = parseFloat(this.playbackSpeed), this.player.setPlaybackRate && this.player.setPlaybackRate(this.playbackSpeed)
                }
            }, {
                key: "setDisplayEffects",
                value: function() {
                    this.setFilter()
                }
            }, {
                key: "setFilter",
                value: function() {
                    var e = this.container.style,
                        t = f.filterOptions[this.filter - 1],
                        n = "";
                    "none" !== t && (n = this.getFilterStyle(t, this.filterStrength));
                    var r = "blur" === t;
                    e.webkitFilter = r ? "" : n, e.filter = r ? "" : n, this.container.classList.toggle("filter-blur", r), Array.prototype.slice.call(this.container.children).forEach(function(e) {
                        e.style.webkitFilter = r ? n : "", e.style.filter = r ? n : ""
                    })
                }
            }, {
                key: "getFilterStyle",
                value: function(e, t) {
                    return e + "(" + (f.filterProperties[e].modifier(t) + f.filterProperties[e].unit) + ")"
                }
            }, {
                key: "logger",
                value: function(e) {
                    this.DEBUG.enabled && this.DEBUG.verbose && this.windowContext.console.log(e)
                }
            }]), e
        }();
    t.default = g
}, function(e, t, n) {
    (function(e, n) {
        function r(e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }

        function i(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }

        function o(e) {
            return function(t) {
                return e(t)
            }
        }

        function a(e, t) {
            return null == e ? void 0 : e[t]
        }

        function s(e, t) {
            return function(n) {
                return e(t(n))
            }
        }

        function l(e, t) {
            return "__proto__" == t ? void 0 : e[t]
        }

        function u(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function c() {
            this.__data__ = Nt ? Nt(null) : {}, this.size = 0
        }

        function h(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }

        function d(e) {
            var t = this.__data__;
            if (Nt) {
                var n = t[e];
                return n === _e ? void 0 : n
            }
            return Et.call(t, e) ? t[e] : void 0
        }

        function f(e) {
            var t = this.__data__;
            return Nt ? void 0 !== t[e] : Et.call(t, e)
        }

        function p(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = Nt && void 0 === t ? _e : t, this
        }

        function A(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function g() {
            this.__data__ = [], this.size = 0
        }

        function v(e) {
            var t = this.__data__,
                n = V(t, e);
            if (n < 0) return !1;
            var r = t.length - 1;
            return n == r ? t.pop() : Vt.call(t, n, 1), --this.size, !0
        }

        function y(e) {
            var t = this.__data__,
                n = V(t, e);
            return n < 0 ? void 0 : t[n][1]
        }

        function b(e) {
            return V(this.__data__, e) > -1
        }

        function m(e, t) {
            var n = this.__data__,
                r = V(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
        }

        function w(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function x() {
            this.size = 0, this.__data__ = {
                hash: new u,
                map: new(Yt || A),
                string: new u
            }
        }

        function k(e) {
            var t = $(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }

        function E(e) {
            return $(this, e).get(e)
        }

        function M(e) {
            return $(this, e).has(e)
        }

        function I(e, t) {
            var n = $(this, e),
                r = n.size;
            return n.set(e, t), this.size += n.size == r ? 0 : 1, this
        }

        function _(e) {
            var t = this.__data__ = new A(e);
            this.size = t.size
        }

        function T() {
            this.__data__ = new A, this.size = 0
        }

        function P(e) {
            var t = this.__data__,
                n = t.delete(e);
            return this.size = t.size, n
        }

        function S(e) {
            return this.__data__.get(e)
        }

        function F(e) {
            return this.__data__.has(e)
        }

        function O(e, t) {
            var n = this.__data__;
            if (n instanceof A) {
                var r = n.__data__;
                if (!Yt || r.length < Ie - 1) return r.push([e, t]), this.size = ++n.size, this;
                n = this.__data__ = new w(r)
            }
            return n.set(e, t), this.size = n.size, this
        }

        function C(e, t) {
            var n = Wt(e),
                r = !n && qt(e),
                o = !n && !r && Jt(e),
                a = !n && !r && !o && Xt(e),
                s = n || r || o || a,
                l = s ? i(e.length, String) : [],
                u = l.length;
            for (var c in e) !t && !Et.call(e, c) || s && ("length" == c || o && ("offset" == c || "parent" == c) || a && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || re(c, u)) || l.push(c);
            return l
        }

        function j(e, t, n) {
            (void 0 === n || fe(e[t], n)) && (void 0 !== n || t in e) || B(e, t, n)
        }

        function R(e, t, n) {
            var r = e[t];
            Et.call(e, t) && fe(r, n) && (void 0 !== n || t in e) || B(e, t, n)
        }

        function V(e, t) {
            for (var n = e.length; n--;)
                if (fe(e[n][0], t)) return n;
            return -1
        }

        function B(e, t, n) {
            "__proto__" == t && Ut ? Ut(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        }

        function U(e) {
            return null == e ? void 0 === e ? Ze : He : Bt && Bt in Object(e) ? te(e) : ue(e)
        }

        function D(e) {
            return be(e) && U(e) == Fe
        }

        function G(e) {
            if (!ye(e) || ae(e)) return !1;
            var t = ge(e) ? Tt : st;
            return t.test(de(e))
        }

        function H(e) {
            return be(e) && ve(e.length) && !!ut[U(e)]
        }

        function Y(e) {
            if (!ye(e)) return le(e);
            var t = se(e),
                n = [];
            for (var r in e)("constructor" != r || !t && Et.call(e, r)) && n.push(r);
            return n
        }

        function N(e, t, n, r, i) {
            e !== t && zt(t, function(o, a) {
                if (ye(o)) i || (i = new _), L(e, t, a, n, N, r, i);
                else {
                    var s = r ? r(l(e, a), o, a + "", e, t, i) : void 0;
                    void 0 === s && (s = o), j(e, a, s)
                }
            }, xe)
        }

        function L(e, t, n, r, i, o, a) {
            var s = l(e, n),
                u = l(t, n),
                c = a.get(u);
            if (c) return void j(e, n, c);
            var h = o ? o(s, u, n + "", e, t, a) : void 0,
                d = void 0 === h;
            if (d) {
                var f = Wt(u),
                    p = !f && Jt(u),
                    A = !f && !p && Xt(u);
                h = u, f || p || A ? Wt(s) ? h = s : Ae(s) ? h = W(s) : p ? (d = !1, h = Q(u, !0)) : A ? (d = !1, h = q(u, !0)) : h = [] : me(u) || qt(u) ? (h = s, qt(s) ? h = we(s) : (!ye(s) || r && ge(s)) && (h = ne(u))) : d = !1
            }
            d && (a.set(u, h), i(h, u, r, o, a), a.delete(u)), j(e, n, h)
        }

        function z(e, t) {
            return Zt(ce(e, t, Ee), e + "")
        }

        function Q(e, t) {
            if (t) return e.slice();
            var n = e.length,
                r = Ot ? Ot(n) : new e.constructor(n);
            return e.copy(r), r
        }

        function Z(e) {
            var t = new e.constructor(e.byteLength);
            return new Ft(t).set(new Ft(e)), t
        }

        function q(e, t) {
            var n = t ? Z(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.length)
        }

        function W(e, t) {
            var n = -1,
                r = e.length;
            for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
            return t
        }

        function J(e, t, n, r) {
            var i = !n;
            n || (n = {});
            for (var o = -1, a = t.length; ++o < a;) {
                var s = t[o],
                    l = r ? r(n[s], e[s], s, n, e) : void 0;
                void 0 === l && (l = e[s]), i ? B(n, s, l) : R(n, s, l)
            }
            return n
        }

        function X(e) {
            return z(function(t, n) {
                var r = -1,
                    i = n.length,
                    o = i > 1 ? n[i - 1] : void 0,
                    a = i > 2 ? n[2] : void 0;
                for (o = e.length > 3 && "function" == typeof o ? (i--, o) : void 0, a && ie(n[0], n[1], a) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++r < i;) {
                    var s = n[r];
                    s && e(t, s, r, o)
                }
                return t
            })
        }

        function K(e) {
            return function(t, n, r) {
                for (var i = -1, o = Object(t), a = r(t), s = a.length; s--;) {
                    var l = a[e ? s : ++i];
                    if (n(o[l], l, o) === !1) break
                }
                return t
            }
        }

        function $(e, t) {
            var n = e.__data__;
            return oe(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }

        function ee(e, t) {
            var n = a(e, t);
            return G(n) ? n : void 0
        }

        function te(e) {
            var t = Et.call(e, Bt),
                n = e[Bt];
            try {
                e[Bt] = void 0;
                var r = !0
            } catch (e) {}
            var i = It.call(e);
            return r && (t ? e[Bt] = n : delete e[Bt]), i
        }

        function ne(e) {
            return "function" != typeof e.constructor || se(e) ? {} : Lt(Ct(e))
        }

        function re(e, t) {
            var n = typeof e;
            return t = null == t ? Se : t, !!t && ("number" == n || "symbol" != n && lt.test(e)) && e > -1 && e % 1 == 0 && e < t
        }

        function ie(e, t, n) {
            if (!ye(n)) return !1;
            var r = typeof t;
            return !!("number" == r ? pe(n) && re(t, n.length) : "string" == r && t in n) && fe(n[t], e)
        }

        function oe(e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        }

        function ae(e) {
            return !!Mt && Mt in e
        }

        function se(e) {
            var t = e && e.constructor,
                n = "function" == typeof t && t.prototype || wt;
            return e === n
        }

        function le(e) {
            var t = [];
            if (null != e)
                for (var n in Object(e)) t.push(n);
            return t
        }

        function ue(e) {
            return It.call(e)
        }

        function ce(e, t, n) {
            return t = Gt(void 0 === t ? e.length - 1 : t, 0),
                function() {
                    for (var i = arguments, o = -1, a = Gt(i.length - t, 0), s = Array(a); ++o < a;) s[o] = i[t + o];
                    o = -1;
                    for (var l = Array(t + 1); ++o < t;) l[o] = i[o];
                    return l[t] = n(s), r(e, this, l)
                }
        }

        function he(e) {
            var t = 0,
                n = 0;
            return function() {
                var r = Ht(),
                    i = Pe - (r - n);
                if (n = r, i > 0) {
                    if (++t >= Te) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }

        function de(e) {
            if (null != e) {
                try {
                    return kt.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }

        function fe(e, t) {
            return e === t || e !== e && t !== t
        }

        function pe(e) {
            return null != e && ve(e.length) && !ge(e)
        }

        function Ae(e) {
            return be(e) && pe(e)
        }

        function ge(e) {
            if (!ye(e)) return !1;
            var t = U(e);
            return t == Be || t == Ue || t == Ce || t == Ne
        }

        function ve(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Se
        }

        function ye(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }

        function be(e) {
            return null != e && "object" == typeof e
        }

        function me(e) {
            if (!be(e) || U(e) != Ye) return !1;
            var t = Ct(e);
            if (null === t) return !0;
            var n = Et.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && kt.call(n) == _t
        }

        function we(e) {
            return J(e, xe(e))
        }

        function xe(e) {
            return pe(e) ? C(e, !0) : Y(e)
        }

        function ke(e) {
            return function() {
                return e
            }
        }

        function Ee(e) {
            return e
        }

        function Me() {
            return !1
        }
        var Ie = 200,
            _e = "__lodash_hash_undefined__",
            Te = 800,
            Pe = 16,
            Se = 9007199254740991,
            Fe = "[object Arguments]",
            Oe = "[object Array]",
            Ce = "[object AsyncFunction]",
            je = "[object Boolean]",
            Re = "[object Date]",
            Ve = "[object Error]",
            Be = "[object Function]",
            Ue = "[object GeneratorFunction]",
            De = "[object Map]",
            Ge = "[object Number]",
            He = "[object Null]",
            Ye = "[object Object]",
            Ne = "[object Proxy]",
            Le = "[object RegExp]",
            ze = "[object Set]",
            Qe = "[object String]",
            Ze = "[object Undefined]",
            qe = "[object WeakMap]",
            We = "[object ArrayBuffer]",
            Je = "[object DataView]",
            Xe = "[object Float32Array]",
            Ke = "[object Float64Array]",
            $e = "[object Int8Array]",
            et = "[object Int16Array]",
            tt = "[object Int32Array]",
            nt = "[object Uint8Array]",
            rt = "[object Uint8ClampedArray]",
            it = "[object Uint16Array]",
            ot = "[object Uint32Array]",
            at = /[\\^$.*+?()[\]{}|]/g,
            st = /^\[object .+?Constructor\]$/,
            lt = /^(?:0|[1-9]\d*)$/,
            ut = {};
        ut[Xe] = ut[Ke] = ut[$e] = ut[et] = ut[tt] = ut[nt] = ut[rt] = ut[it] = ut[ot] = !0, ut[Fe] = ut[Oe] = ut[We] = ut[je] = ut[Je] = ut[Re] = ut[Ve] = ut[Be] = ut[De] = ut[Ge] = ut[Ye] = ut[Le] = ut[ze] = ut[Qe] = ut[qe] = !1;
        var ct = "object" == typeof e && e && e.Object === Object && e,
            ht = "object" == typeof self && self && self.Object === Object && self,
            dt = ct || ht || Function("return this")(),
            ft = "object" == typeof t && t && !t.nodeType && t,
            pt = ft && "object" == typeof n && n && !n.nodeType && n,
            At = pt && pt.exports === ft,
            gt = At && ct.process,
            vt = function() {
                try {
                    return gt && gt.binding && gt.binding("util")
                } catch (e) {}
            }(),
            yt = vt && vt.isTypedArray,
            bt = Array.prototype,
            mt = Function.prototype,
            wt = Object.prototype,
            xt = dt["__core-js_shared__"],
            kt = mt.toString,
            Et = wt.hasOwnProperty,
            Mt = function() {
                var e = /[^.]+$/.exec(xt && xt.keys && xt.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }(),
            It = wt.toString,
            _t = kt.call(Object),
            Tt = RegExp("^" + kt.call(Et).replace(at, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            Pt = At ? dt.Buffer : void 0,
            St = dt.Symbol,
            Ft = dt.Uint8Array,
            Ot = Pt ? Pt.allocUnsafe : void 0,
            Ct = s(Object.getPrototypeOf, Object),
            jt = Object.create,
            Rt = wt.propertyIsEnumerable,
            Vt = bt.splice,
            Bt = St ? St.toStringTag : void 0,
            Ut = function() {
                try {
                    var e = ee(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch (e) {}
            }(),
            Dt = Pt ? Pt.isBuffer : void 0,
            Gt = Math.max,
            Ht = Date.now,
            Yt = ee(dt, "Map"),
            Nt = ee(Object, "create"),
            Lt = function() {
                function e() {}
                return function(t) {
                    if (!ye(t)) return {};
                    if (jt) return jt(t);
                    e.prototype = t;
                    var n = new e;
                    return e.prototype = void 0, n
                }
            }();
        u.prototype.clear = c, u.prototype.delete = h, u.prototype.get = d, u.prototype.has = f, u.prototype.set = p, A.prototype.clear = g, A.prototype.delete = v, A.prototype.get = y, A.prototype.has = b, A.prototype.set = m, w.prototype.clear = x, w.prototype.delete = k, w.prototype.get = E, w.prototype.has = M, w.prototype.set = I, _.prototype.clear = T, _.prototype.delete = P, _.prototype.get = S, _.prototype.has = F, _.prototype.set = O;
        var zt = K(),
            Qt = Ut ? function(e, t) {
                return Ut(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: ke(t),
                    writable: !0
                })
            } : Ee,
            Zt = he(Qt),
            qt = D(function() {
                return arguments
            }()) ? D : function(e) {
                return be(e) && Et.call(e, "callee") && !Rt.call(e, "callee")
            },
            Wt = Array.isArray,
            Jt = Dt || Me,
            Xt = yt ? o(yt) : H,
            Kt = X(function(e, t, n) {
                N(e, t, n)
            });
        n.exports = Kt
    }).call(t, function() {
        return this
    }(), n(93)(e))
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = !1,
        i = n(95),
        o = i.OggVideo,
        a = i.Mp4Video,
        s = function() {
            return new Promise(function(e, t) {
                if ("resolve" === r) return void e("resolved for debugging");
                if ("reject" === r) return void t("rejected for debugging");
                var n = document.createElement("video");
                n.autoplay = !0, n.setAttribute("autoplay", !0), n.muted = !0, n.setAttribute("muted", !0), n.playsinline = !0, n.setAttribute("playsinline", !0), n.volume = 0, n.setAttribute("data-is-playing", "false"), n.setAttribute("style", "width: 1px; height: 1px; position: fixed; top: 0; left: 0; z-index: 100;"), document.body.appendChild(n);
                var i = null,
                    s = function() {
                        i && (clearTimeout(i), i = null);
                        try {
                            document.body.removeChild(n)
                        } catch (e) {
                            return
                        }
                    };
                try {
                    if (n.canPlayType('video/ogg; codecs="theora"').match(/^(probably)|(maybe)/)) n.src = o;
                    else {
                        if (!n.canPlayType('video/mp4; codecs="avc1.42E01E"').match(/^(probably)|(maybe)/)) return s(), void t("no autoplay: element does not support mp4 or ogg format");
                        n.src = a
                    }
                } catch (e) {
                    return s(), void t("no autoplay: " + e)
                }
                n.addEventListener("play", function() {
                    n.setAttribute("data-is-playing", "true"), i = setTimeout(function() {
                        s(), t("no autoplay: unsure")
                    }, 3e3)
                }), n.addEventListener("canplay", function() {
                    return "true" === n.getAttribute("data-is-playing") ? (s(), e("autoplay supported"), !0) : (s(), t("no autoplay: browser does not support autoplay"), !1)
                }), n.load(), n.play()
            })
        };
    t.default = s
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A",
        r = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ==";
    t.OggVideo = n, t.Mp4Video = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.initializeVimeoPlayer = t.initializeVimeoAPI = void 0;
    var r = n(97),
        i = n(98),
        o = void 0,
        a = "*",
        s = null,
        l = function() {
            return new Promise(function(e, t) {
                e("no api needed")
            })
        },
        u = function(e, t) {
            var n = {
                method: e
            };
            t && (n.value = t);
            var r = JSON.stringify(n);
            o.ownerDocument.defaultView.eval("(function(playerIframe){ playerIframe.contentWindow.postMessage(" + r + ", " + JSON.stringify(a) + ") })")(o)
        },
        c = function(e) {
            var t = e.win,
                n = e.instance,
                l = e.container,
                c = e.videoId,
                h = e.startTime,
                d = e.readyCallback,
                f = e.stateChangeCallback;
            return new Promise(function(e, p) {
                var A = n.logger || function() {};
                o = t.document.createElement("iframe"), o.id = "vimeoplayer";
                var g = "&background=1";
                o.src = "//player.vimeo.com/video/" + c + "?api=1" + g;
                var v = (0, r.getPlayerElement)(l);
                v.appendChild(o);
                var y = {
                    iframe: o,
                    setPlaybackRate: function() {}
                };
                e(y);
                var b = function() {
                        u("getDuration"), u("getVideoHeight"), u("getVideoWidth")
                    },
                    m = null,
                    w = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        (e || y.dimensions.width && y.dimensions.height && y.duration) && (e && b(), y.dimensions.width = y.dimensions.width || y.iframe.parentNode.offsetWidth, y.dimensions.height = y.dimensions.height || y.iframe.parentNode.offsetHeight, y.duration = y.duration || 10, u("setVolume", "0"), u("setLoop", "true"), u("seekTo", h), u("addEventListener", "playProgress"), d(y))
                    },
                    x = function() {
                        s && (clearTimeout(s), s = null), y.dimensions || (y.dimensions = {}, b(), f("buffering"), m = setTimeout(function() {
                            A.call(n, "retrying"), w(!0)
                        }, .75 * i.TIMEOUT))
                    },
                    k = function(e) {
                        if (!/^https?:\/\/player.vimeo.com/.test(e.origin)) return !1;
                        a = e.origin;
                        var t = e.data;
                        switch ("string" == typeof t && (t = JSON.parse(t)), t.event) {
                            case "ready":
                                x(a);
                                break;
                            case "playProgress":
                            case "timeupdate":
                                m && (clearTimeout(m), m = null), f("playing", t), u("setVolume", "0"), t.data.percent >= .98 && h > 0 && u("seekTo", h)
                        }
                        switch (t.method) {
                            case "getVideoHeight":
                                A.call(n, t.method), y.dimensions.height = t.value, w();
                                break;
                            case "getVideoWidth":
                                A.call(n, t.method), y.dimensions.width = t.value, w();
                                break;
                            case "getDuration":
                                A.call(n, t.method), y.duration = t.value, h >= y.duration && (h = 0), w()
                        }
                    },
                    E = function(e) {
                        k(e)
                    };
                t.addEventListener("message", E, !1), y.destroy = function() {
                    t.removeEventListener("message", E), y.iframe.parentElement && y.iframe.parentElement.removeChild(y.iframe)
                }, s = setTimeout(function() {
                    p("Ran out of time")
                }, i.TIMEOUT)
            })
        };
    t.initializeVimeoAPI = l, t.initializeVimeoPlayer = c
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.validatedImage = t.getVideoSource = t.getVideoID = t.getStartTime = t.getPlayerElement = t.findPlayerAspectRatio = void 0;
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = n(98),
        a = n(99),
        s = r(a),
        l = n(102),
        u = r(l),
        c = function(e) {
            var t = void 0,
                n = void 0;
            for (var r in e) {
                var o = e[r];
                if ("object" === ("undefined" == typeof o ? "undefined" : i(o)) && o.width && o.height) {
                    t = o.width, n = o.height;
                    break
                }
            }
            return {
                w: t,
                h: n
            }
        },
        h = function(e) {
            var t = void 0,
                n = void 0;
            return e.dimensions ? (t = e.dimensions.width, n = e.dimensions.height) : e.iframe && (t = e.iframe.clientWidth, n = e.iframe.clientHeight), {
                w: t,
                h: n
            }
        },
        d = {
            youtube: {
                parsePath: "query.t",
                timeRegex: /[hms]/,
                idRegex: o.YOUTUBE_REGEX,
                getDimensions: c
            },
            vimeo: {
                parsePath: null,
                timeRegex: /[#t=s]/,
                idRegex: o.VIMEO_REGEX,
                getDimensions: h
            }
        },
        f = function(e, t) {
            return d[t].parsePath ? (0, u.default)(e, d[t].parsePath) : null
        },
        p = function(e, t) {
            var n = new s.default(e, !0),
                r = f(n, t);
            if (r) {
                var i = r.split(d[t].timeRegex).filter(Boolean),
                    o = parseInt(i.pop(), 10) || 0,
                    a = 60 * parseInt(i.pop(), 10) || 0,
                    l = 3600 * parseInt(i.pop(), 10) || 0;
                return l + a + o
            }
        },
        A = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.DEFAULT_PROPERTY_VALUES.url,
                t = e.match(o.YOUTUBE_REGEX);
            return t && t[2].length ? "youtube" : (t = e.match(o.VIMEO_REGEX), t && t[2].length ? "vimeo" : void console.error("Video source " + e + " does not match supported types"))
        },
        g = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.DEFAULT_PROPERTY_VALUES.url,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = e.match(d[t].idRegex);
            return n && n[2].length ? n[2] : void console.error("Video id at " + e + " is not valid")
        },
        v = function(e) {
            if (!e) return !1;
            var t = "IMG" === e.nodeName && e;
            return t || console.warn("Element is not a valid image element."), t
        },
        y = function(e, t, n) {
            var r = void 0,
                i = void 0;
            if (t) {
                var o = d[n].getDimensions(t);
                r = o.w, i = o.h
            }
            return r && i || (r = e.clientWidth, i = e.clientHeight, console.warn("No width and height found in " + n + " player " + t + ". Using container dimensions.")), parseInt(r, 10) / parseInt(i, 10)
        },
        b = function(e) {
            var t = e.querySelector("#player");
            return t || (t = e.ownerDocument.createElement("div"), t.id = "player", e.appendChild(t)), t.setAttribute("style", "position: absolute; top: 0; bottom: 0; left: 0; right: 0;"), t
        };
    t.findPlayerAspectRatio = y, t.getPlayerElement = b, t.getStartTime = p, t.getVideoID = g, t.getVideoSource = A, t.validatedImage = v
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
            enabled: !0,
            verbose: !1
        },
        r = {
            container: "body",
            url: "https://youtu.be/xkEmYQvJ_68",
            source: "youtube",
            fitMode: "fill",
            scaleFactor: 1,
            playbackSpeed: 1,
            filter: 1,
            filterStrength: 50,
            timeCode: {
                start: 0,
                end: null
            },
            DEBUG: n
        },
        i = 2500,
        o = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]{11}).*/,
        a = /^.*(vimeo\.com\/)([0-9]{7,}(#t\=.*s)?)/;
    t.DEBUG = n, t.DEFAULT_PROPERTY_VALUES = r, t.TIMEOUT = i, t.YOUTUBE_REGEX = o, t.VIMEO_REGEX = a
}, function(e, t, n) {
    (function(t) {
        "use strict";

        function r(e) {
            return (e ? e : "").toString().replace(A, "")
        }

        function i(e) {
            var n;
            n = "undefined" != typeof window ? window : "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
            var r = n.location || {};
            e = e || r;
            var i, o = {},
                a = typeof e;
            if ("blob:" === e.protocol) o = new s(unescape(e.pathname), {});
            else if ("string" === a) {
                o = new s(e, {});
                for (i in v) delete o[i]
            } else if ("object" === a) {
                for (i in e) i in v || (o[i] = e[i]);
                void 0 === o.slashes && (o.slashes = d.test(e.href))
            }
            return o
        }

        function o(e) {
            e = r(e);
            var t = f.exec(e);
            return {
                protocol: t[1] ? t[1].toLowerCase() : "",
                slashes: !!t[2],
                rest: t[3]
            }
        }

        function a(e, t) {
            if ("" === e) return t;
            for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = n.length, i = n[r - 1], o = !1, a = 0; r--;) "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1), a++) : a && (0 === r && (o = !0), n.splice(r, 1), a--);
            return o && n.unshift(""), "." !== i && ".." !== i || n.push(""), n.join("/")
        }

        function s(e, t, n) {
            if (e = r(e), !(this instanceof s)) return new s(e, t, n);
            var l, u, d, f, p, A, v = g.slice(),
                y = typeof t,
                b = this,
                m = 0;
            for ("object" !== y && "string" !== y && (n = t, t = null), n && "function" != typeof n && (n = h.parse), t = i(t), u = o(e || ""), l = !u.protocol && !u.slashes, b.slashes = u.slashes || l && t.slashes, b.protocol = u.protocol || t.protocol || "", e = u.rest, u.slashes || (v[3] = [/(.*)/, "pathname"]); m < v.length; m++) f = v[m], "function" != typeof f ? (d = f[0], A = f[1], d !== d ? b[A] = e : "string" == typeof d ? ~(p = e.indexOf(d)) && ("number" == typeof f[2] ? (b[A] = e.slice(0, p), e = e.slice(p + f[2])) : (b[A] = e.slice(p), e = e.slice(0, p))) : (p = d.exec(e)) && (b[A] = p[1], e = e.slice(0, p.index)), b[A] = b[A] || (l && f[3] ? t[A] || "" : ""), f[4] && (b[A] = b[A].toLowerCase())) : e = f(e);
            n && (b.query = n(b.query)), l && t.slashes && "/" !== b.pathname.charAt(0) && ("" !== b.pathname || "" !== t.pathname) && (b.pathname = a(b.pathname, t.pathname)), c(b.port, b.protocol) || (b.host = b.hostname, b.port = ""), b.username = b.password = "", b.auth && (f = b.auth.split(":"), b.username = f[0] || "", b.password = f[1] || ""), b.origin = b.protocol && b.host && "file:" !== b.protocol ? b.protocol + "//" + b.host : "null", b.href = b.toString()
        }

        function l(e, t, n) {
            var r = this;
            switch (e) {
                case "query":
                    "string" == typeof t && t.length && (t = (n || h.parse)(t)), r[e] = t;
                    break;
                case "port":
                    r[e] = t, c(t, r.protocol) ? t && (r.host = r.hostname + ":" + t) : (r.host = r.hostname, r[e] = "");
                    break;
                case "hostname":
                    r[e] = t, r.port && (t += ":" + r.port), r.host = t;
                    break;
                case "host":
                    r[e] = t, /:\d+$/.test(t) ? (t = t.split(":"), r.port = t.pop(), r.hostname = t.join(":")) : (r.hostname = t, r.port = "");
                    break;
                case "protocol":
                    r.protocol = t.toLowerCase(), r.slashes = !n;
                    break;
                case "pathname":
                case "hash":
                    if (t) {
                        var i = "pathname" === e ? "/" : "#";
                        r[e] = t.charAt(0) !== i ? i + t : t
                    } else r[e] = t;
                    break;
                default:
                    r[e] = t
            }
            for (var o = 0; o < g.length; o++) {
                var a = g[o];
                a[4] && (r[a[1]] = r[a[1]].toLowerCase())
            }
            return r.origin = r.protocol && r.host && "file:" !== r.protocol ? r.protocol + "//" + r.host : "null", r.href = r.toString(), r
        }

        function u(e) {
            e && "function" == typeof e || (e = h.stringify);
            var t, n = this,
                r = n.protocol;
            r && ":" !== r.charAt(r.length - 1) && (r += ":");
            var i = r + (n.slashes ? "//" : "");
            return n.username && (i += n.username, n.password && (i += ":" + n.password), i += "@"), i += n.host + n.pathname, t = "object" == typeof n.query ? e(n.query) : n.query, t && (i += "?" !== t.charAt(0) ? "?" + t : t), n.hash && (i += n.hash), i
        }
        var c = n(100),
            h = n(101),
            d = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            f = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
            p = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
            A = new RegExp("^" + p + "+"),
            g = [
                ["#", "hash"],
                ["?", "query"],
                function(e) {
                    return e.replace("\\", "/")
                },
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d+)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            v = {
                hash: 1,
                query: 1
            };
        s.prototype = {
            set: l,
            toString: u
        }, s.extractProtocol = o, s.location = i, s.trimLeft = r, s.qs = h, e.exports = s
    }).call(t, function() {
        return this
    }())
}, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        if (t = t.split(":")[0], e = +e, !e) return !1;
        switch (t) {
            case "http":
            case "ws":
                return 80 !== e;
            case "https":
            case "wss":
                return 443 !== e;
            case "ftp":
                return 21 !== e;
            case "gopher":
                return 70 !== e;
            case "file":
                return !1
        }
        return 0 !== e
    }
}, function(e, t) {
    "use strict";

    function n(e) {
        try {
            return decodeURIComponent(e.replace(/\+/g, " "))
        } catch (e) {
            return null
        }
    }

    function r(e) {
        for (var t, r = /([^=?&]+)=?([^&]*)/g, i = {}; t = r.exec(e);) {
            var o = n(t[1]),
                a = n(t[2]);
            null === o || null === a || o in i || (i[o] = a)
        }
        return i
    }

    function i(e, t) {
        t = t || "";
        var n, r, i = [];
        "string" != typeof t && (t = "?");
        for (r in e)
            if (a.call(e, r)) {
                if (n = e[r], n || null !== n && n !== o && !isNaN(n) || (n = ""), r = encodeURIComponent(r), n = encodeURIComponent(n), null === r || null === n) continue;
                i.push(r + "=" + n)
            }
        return i.length ? t + i.join("&") : ""
    }
    var o, a = Object.prototype.hasOwnProperty;
    t.stringify = i, t.parse = r
}, function(e, t) {
    (function(t) {
        function n(e, t) {
            return null == e ? void 0 : e[t]
        }

        function r(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "")
            } catch (e) {}
            return t
        }

        function i(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function o() {
            this.__data__ = ge ? ge(null) : {}
        }

        function a(e) {
            return this.has(e) && delete this.__data__[e]
        }

        function s(e) {
            var t = this.__data__;
            if (ge) {
                var n = t[e];
                return n === N ? void 0 : n
            }
            return ce.call(t, e) ? t[e] : void 0
        }

        function l(e) {
            var t = this.__data__;
            return ge ? void 0 !== t[e] : ce.call(t, e)
        }

        function u(e, t) {
            var n = this.__data__;
            return n[e] = ge && void 0 === t ? N : t, this
        }

        function c(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function h() {
            this.__data__ = []
        }

        function d(e) {
            var t = this.__data__,
                n = x(t, e);
            if (n < 0) return !1;
            var r = t.length - 1;
            return n == r ? t.pop() : pe.call(t, n, 1), !0
        }

        function f(e) {
            var t = this.__data__,
                n = x(t, e);
            return n < 0 ? void 0 : t[n][1]
        }

        function p(e) {
            return x(this.__data__, e) > -1
        }

        function A(e, t) {
            var n = this.__data__,
                r = x(n, e);
            return r < 0 ? n.push([e, t]) : n[r][1] = t, this
        }

        function g(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function v() {
            this.__data__ = {
                hash: new i,
                map: new(Ae || c),
                string: new i
            }
        }

        function y(e) {
            return _(this, e).delete(e)
        }

        function b(e) {
            return _(this, e).get(e)
        }

        function m(e) {
            return _(this, e).has(e)
        }

        function w(e, t) {
            return _(this, e).set(e, t), this
        }

        function x(e, t) {
            for (var n = e.length; n--;)
                if (R(e[n][0], t)) return n;
            return -1
        }

        function k(e, t) {
            t = P(t, e) ? [t] : I(t);
            for (var n = 0, r = t.length; null != e && n < r;) e = e[O(t[n++])];
            return n && n == r ? e : void 0
        }

        function E(e) {
            if (!B(e) || F(e)) return !1;
            var t = V(e) || r(e) ? de : ee;
            return t.test(C(e))
        }

        function M(e) {
            if ("string" == typeof e) return e;
            if (D(e)) return ye ? ye.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -L ? "-0" : t
        }

        function I(e) {
            return me(e) ? e : be(e)
        }

        function _(e, t) {
            var n = e.__data__;
            return S(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }

        function T(e, t) {
            var r = n(e, t);
            return E(r) ? r : void 0
        }

        function P(e, t) {
            if (me(e)) return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !D(e)) || (W.test(e) || !q.test(e) || null != t && e in Object(t))
        }

        function S(e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        }

        function F(e) {
            return !!le && le in e
        }

        function O(e) {
            if ("string" == typeof e || D(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -L ? "-0" : t
        }

        function C(e) {
            if (null != e) {
                try {
                    return ue.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }

        function j(e, t) {
            if ("function" != typeof e || t && "function" != typeof t) throw new TypeError(Y);
            var n = function() {
                var r = arguments,
                    i = t ? t.apply(this, r) : r[0],
                    o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, r);
                return n.cache = o.set(i, a), a
            };
            return n.cache = new(j.Cache || g), n
        }

        function R(e, t) {
            return e === t || e !== e && t !== t
        }

        function V(e) {
            var t = B(e) ? he.call(e) : "";
            return t == z || t == Q
        }

        function B(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function U(e) {
            return !!e && "object" == typeof e
        }

        function D(e) {
            return "symbol" == typeof e || U(e) && he.call(e) == Z
        }

        function G(e) {
            return null == e ? "" : M(e)
        }

        function H(e, t, n) {
            var r = null == e ? void 0 : k(e, t);
            return void 0 === r ? n : r
        }
        var Y = "Expected a function",
            N = "__lodash_hash_undefined__",
            L = 1 / 0,
            z = "[object Function]",
            Q = "[object GeneratorFunction]",
            Z = "[object Symbol]",
            q = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            W = /^\w*$/,
            J = /^\./,
            X = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            K = /[\\^$.*+?()[\]{}|]/g,
            $ = /\\(\\)?/g,
            ee = /^\[object .+?Constructor\]$/,
            te = "object" == typeof t && t && t.Object === Object && t,
            ne = "object" == typeof self && self && self.Object === Object && self,
            re = te || ne || Function("return this")(),
            ie = Array.prototype,
            oe = Function.prototype,
            ae = Object.prototype,
            se = re["__core-js_shared__"],
            le = function() {
                var e = /[^.]+$/.exec(se && se.keys && se.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }(),
            ue = oe.toString,
            ce = ae.hasOwnProperty,
            he = ae.toString,
            de = RegExp("^" + ue.call(ce).replace(K, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            fe = re.Symbol,
            pe = ie.splice,
            Ae = T(re, "Map"),
            ge = T(Object, "create"),
            ve = fe ? fe.prototype : void 0,
            ye = ve ? ve.toString : void 0;
        i.prototype.clear = o, i.prototype.delete = a, i.prototype.get = s, i.prototype.has = l, i.prototype.set = u, c.prototype.clear = h, c.prototype.delete = d, c.prototype.get = f, c.prototype.has = p, c.prototype.set = A, g.prototype.clear = v, g.prototype.delete = y, g.prototype.get = b, g.prototype.has = m, g.prototype.set = w;
        var be = j(function(e) {
            e = G(e);
            var t = [];
            return J.test(e) && t.push(""), e.replace(X, function(e, n, r, i) {
                t.push(r ? i.replace($, "$1") : n || e)
            }), t
        });
        j.Cache = g;
        var me = Array.isArray;
        e.exports = H
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.initializeYouTubePlayer = t.initializeYouTubeAPI = void 0;
    var r = n(97),
        i = function(e) {
            return new Promise(function(t, n) {
                if (e.document.documentElement.querySelector('script[src*="www.youtube.com/iframe_api"].loaded')) return void t("already loaded");
                var r = e.document.createElement("script");
                r.src = "https://www.youtube.com/iframe_api";
                var i = e.document.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(r, i), r.addEventListener("load", function(e) {
                    e.currentTarget.classList.add("loaded"), t("api script tag created and loaded")
                }, !0), r.addEventListener("error", function(e) {
                    n("Failed to load YouTube script: ", e)
                })
            })
        },
        o = function(e, t) {
            var n = e.target;
            n.iframe = n.getIframe(), n.mute(), n.ready = !0, n.seekTo(t < n.getDuration() ? t : 0), n.playVideo()
        },
        a = function(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                i = e.target,
                o = (i.getDuration() - t) / r,
                a = function e() {
                    i.getCurrentTime() + .1 >= i.getDuration() && (i.pauseVideo(), i.seekTo(t), i.playVideo()), requestAnimationFrame(e)
                };
            return e.data === n.YT.PlayerState.BUFFERING && 1 !== i.getVideoLoadedFraction() && (0 === i.getCurrentTime() || i.getCurrentTime() > o - -.1) ? "buffering" : e.data === n.YT.PlayerState.PLAYING ? (requestAnimationFrame(a), "playing") : void(e.data === n.YT.PlayerState.ENDED && i.playVideo())
        },
        s = function(e) {
            var t = e.container,
                n = e.win,
                i = e.videoId,
                s = e.startTime,
                l = e.speed,
                u = e.readyCallback,
                c = e.stateChangeCallback,
                h = (0, r.getPlayerElement)(t),
                d = function() {
                    return new n.YT.Player(h, {
                        videoId: i,
                        playerVars: {
                            autohide: 1,
                            autoplay: 0,
                            controls: 0,
                            enablejsapi: 1,
                            iv_load_policy: 3,
                            loop: 0,
                            modestbranding: 1,
                            playsinline: 1,
                            rel: 0,
                            showinfo: 0,
                            wmode: "opaque"
                        },
                        events: {
                            onReady: function(e) {
                                o(e, s), u(e.target)
                            },
                            onStateChange: function(e) {
                                var t = a(e, s, n, l);
                                c(t, t)
                            }
                        }
                    })
                };
            return new Promise(function(e, t) {
                var r = function t() {
                    1 === n.YT.loaded ? e(d()) : setTimeout(t, 100)
                };
                r()
            })
        };
    t.initializeYouTubeAPI = i, t.initializeYouTubePlayer = s
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = ["none", "blur", "brightness", "contrast", "invert", "opacity", "saturate", "sepia", "drop-shadow", "grayscale", "hue-rotate"],
        r = {
            blur: {
                modifier: function(e) {
                    return .3 * e
                },
                unit: "px"
            },
            brightness: {
                modifier: function(e) {
                    return .009 * e + .1
                },
                unit: ""
            },
            contrast: {
                modifier: function(e) {
                    return .4 * e + 80
                },
                unit: "%"
            },
            grayscale: {
                modifier: function(e) {
                    return e
                },
                unit: "%"
            },
            "hue-rotate": {
                modifier: function(e) {
                    return 3.6 * e
                },
                unit: "deg"
            },
            invert: {
                modifier: function(e) {
                    return 1
                },
                unit: ""
            },
            opacity: {
                modifier: function(e) {
                    return e
                },
                unit: "%"
            },
            saturate: {
                modifier: function(e) {
                    return 2 * e
                },
                unit: "%"
            },
            sepia: {
                modifier: function(e) {
                    return e
                },
                unit: "%"
            }
        };
    t.filterOptions = n, t.filterProperties = r
}, function(e, t) {
    var n = function(e) {
        var t = {
            container: e
        };
        return e.getAttribute("data-config-url") && (t.url = e.getAttribute("data-config-url")), e.getAttribute("data-config-playback-speed") && (t.playbackSpeed = e.getAttribute("data-config-playback-speed")), e.getAttribute("data-config-filter") && (t.filter = e.getAttribute("data-config-filter")), e.getAttribute("data-config-filter-strength") && (t.filterStrength = e.getAttribute("data-config-filter-strength")), t
    };
    e.exports = n
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    /**
     * @license
     * Copyright 2016 Squarespace, INC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *    http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var n = {
        load: function(e, t) {
            return window.ImageLoader.load(e, t)
        }
    };
    t.default = n, e.exports = t.default
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    /**
     * @license
     * Copyright 2016 Squarespace, INC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *    http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var n = Static.SQUARESPACE_CONTEXT.authenticatedAccount,
        r = {
            all: {
                callbacks: []
            }
        },
        i = {
            getValue: function(e) {
                return e && "string" == typeof e ? window.Static.SQUARESPACE_CONTEXT.tweakJSON[e] || window.Static.SQUARESPACE_CONTEXT.tweakJSON[e.replace("@", "").replace(".", "")] : (console.error("squarespace-core: Invalid tweak name " + e), null)
            },
            watch: function() {
                var e = arguments;
                if (n) {
                    if (0 === arguments.length) return void console.error("squarespace-core: Tweak.watch must be called with at least one parameter");
                    if (1 === arguments.length) return void("function" == typeof arguments[0] && r.all.callbacks.push(arguments[0]));
                    if ("string" == typeof arguments[0] && "function" == typeof arguments[1]) {
                        var t = arguments[0];
                        r[t] || (r[t] = {
                            callbacks: []
                        }), r[t].callbacks.push(arguments[1])
                    } else arguments[0].constructor === Array && "function" == typeof arguments[1] && arguments[0].forEach(function(t) {
                        r[t] || (r[t] = {
                            callbacks: []
                        }), r[t].callbacks.push(e[1])
                    })
                }
            }
        };
    n && window.Y && window.Y.Global && window.Y.Global.on("tweak:change", function(e) {
        var t = e.getName(),
            n = {
                name: t,
                value: e.config && e.config.value || e.value
            };
        r[t] && r[t].callbacks.forEach(function(e) {
            try {
                e(n)
            } catch (e) {
                console.error(e)
            }
        }), r.all.callbacks.length > 0 && r.all.callbacks.forEach(function(e) {
            try {
                e(n)
            } catch (e) {
                console.error(e)
            }
        })
    }), t.default = i, e.exports = t.default
}, function(e, t) {
    function n(e, t, n) {
        return e ? "function" != typeof e ? void console.warn("rafScroll: Invalid callback type.") : (this.context = n, this._scrolling = !1, this._callback = e, void(this._args = t || [])) : void console.warn("rafScroll: No callback supplied, not initiating.")
    }

    function r(e) {
        this._mostRecentScrollEvent = e, this._scrolling === !1 && (this._scrolling = !0, i.call(this)), this._scrollTimeout && clearTimeout(this._scrollTimeout);
        var t = this;
        this._scrollTimeout = setTimeout(function() {
            t._scrolling = !1
        }, l)
    }

    function i() {
        this._args.unshift(this._mostRecentScrollEvent), this._callback.apply(this.context || window, this._args), this._args.shift(), this._scrolling === !0 && requestAnimationFrame(i.bind(this))
    }
    for (var o = 0, a = ["ms", "moz", "webkit", "o"], s = 0; s < a.length && !window.requestAnimationFrame; ++s) window.requestAnimationFrame = window[a[s] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[a[s] + "CancelAnimationFrame"] || window[a[s] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
        var n = (new Date).getTime(),
            r = Math.max(0, 16 - (n - o)),
            i = window.setTimeout(function() {
                e(n + r)
            }, r);
        return o = n + r, i
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    });
    /*!
     * @license
     * rafscroll 0.1
     *
     * Copyright 2015, Kevin Foley - http://github.com/foleyatwork
     * Released under the WTFPL license - http://www.wtfpl.net/txt/copying/
     */
    var l = 100;
    n.prototype = {
        subscribe: function() {
            addEventListener("scroll", r.bind(this), !1)
        }
    }, e.exports = n
}, function(e, t) {
    function n(e, t, n) {
        t = t || window, n = n || window;
        var r, i = 100,
            o = function() {
                clearTimeout(r), r = setTimeout(function() {
                    e.apply(t)
                }, i)
            };
        n.addEventListener("resize", o)
    }
    e.exports = n
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    /**
     * @license
     * Copyright 2016 Squarespace, INC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *    http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var n = "UserAccounts API not available",
        r = window.UserAccountApi,
        i = function() {
            console.warn(n)
        },
        o = r ? r.isUserAuthenticated : i,
        a = r ? r.openAccountScreen : i;
    t.default = {
        isUserAuthenticated: o,
        openAccountScreen: a
    }, e.exports = t.default
}]);