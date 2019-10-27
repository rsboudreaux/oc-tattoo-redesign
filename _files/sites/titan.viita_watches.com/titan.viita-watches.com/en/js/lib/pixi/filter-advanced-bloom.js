/*!
 * @pixi/filter-advanced-bloom - v2.4.0
 * Compiled Mon, 18 Dec 2017 00:36:23 UTC
 *
 * @pixi/filter-advanced-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
! function(e, r) {
    "object" == typeof exports && "undefined" != typeof module ? r(exports) : "function" == typeof define && define.amd ? define(["exports"], r) : r(e.__pixiFilters = {})
}(this, function(e) {
    "use strict";
    var r = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        t = "\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness > threshold) {\n        gl_FragColor = color;\n    } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n}\n",
        o = function(e) {
            function o(o) {
                void 0 === o && (o = .5), e.call(this, r, t), this.threshold = o
            }
            e && (o.__proto__ = e), (o.prototype = Object.create(e && e.prototype)).constructor = o;
            var n = {
                threshold: {
                    configurable: !0
                }
            };
            return n.threshold.get = function() {
                return this.uniforms.threshold
            }, n.threshold.set = function(e) {
                this.uniforms.threshold = e
            }, Object.defineProperties(o.prototype, n), o
        }(PIXI.Filter),
        n = "uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform float bloomScale;\nuniform float brightness;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    color.rgb *= brightness;\n    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n    bloomColor.rgb *= bloomScale;\n    gl_FragColor = color + bloomColor;\n}\n",
        i = function(e) {
            function t(t) {
                e.call(this, r, n), "number" == typeof t && (t = {
                    threshold: t
                }), t = Object.assign({
                    threshold: .5,
                    bloomScale: 1,
                    brightness: 1,
                    blur: 8,
                    quality: 4,
                    resolution: PIXI.settings.RESOLUTION,
                    kernelSize: 5
                }, t), this.bloomScale = t.bloomScale, this.brightness = t.brightness;
                var i = t.blur,
                    l = t.quality,
                    s = t.resolution,
                    u = t.kernelSize,
                    a = PIXI.filters,
                    c = a.BlurXFilter,
                    h = a.BlurYFilter;
                this._extract = new o(t.threshold), this._blurX = new c(i, l, s, u), this._blurY = new h(i, l, s, u)
            }
            e && (t.__proto__ = e), (t.prototype = Object.create(e && e.prototype)).constructor = t;
            var i = {
                threshold: {
                    configurable: !0
                },
                blur: {
                    configurable: !0
                }
            };
            return t.prototype.apply = function(e, r, t, o, n) {
                var i = e.getRenderTarget(!0);
                this._extract.apply(e, r, i, !0, n), this._blurX.apply(e, i, i, !0, n), this._blurY.apply(e, i, i, !0, n), this.uniforms.bloomScale = this.bloomScale, this.uniforms.brightness = this.brightness, this.uniforms.bloomTexture = i, e.applyFilter(this, r, t, o), e.returnRenderTarget(i)
            }, i.threshold.get = function() {
                return this._extract.threshold
            }, i.threshold.set = function(e) {
                this._extract.threshold = e
            }, i.blur.get = function() {
                return this._blurX.blur
            }, i.blur.set = function(e) {
                this._blurX.blur = this._blurY.blur = e
            }, Object.defineProperties(t.prototype, i), t
        }(PIXI.Filter);
    PIXI.filters.AdvancedBloomFilter = i, e.AdvancedBloomFilter = i, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});