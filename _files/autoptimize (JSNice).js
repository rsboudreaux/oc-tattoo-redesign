/**
 * @license
 FastClick: polyfill to remove click delays on browsers with touch UIs.

 @codingstandard ftlabs-jsv2
 @copyright The Financial Times Limited [All Rights Reserved]
 @license MIT License (see LICENSE.txt)
 VERSION: 1.19.0
 DATE: 2016-07-14
 UPDATES AND DOCS AT: http://greensock.com

 Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin

 @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 This work is subject to the terms at http://greensock.com/standard-license or for
 Club GreenSock members, the software agreement that was issued with your membership.

 @author: Jack Doyle, jack@greensock.com
 VERSION: 0.5.6
 DATE: 2016-10-28
 UPDATES AND DOCS AT: http://greensock.com

 @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 This work is subject to the software agreement that was issued with your membership.

 @author: Jack Doyle, jack@greensock.com
*/
'use strict';
try {
  var daink = {
    "root" : "http://da-ink.com/wp-content/themes/daink/",
    "url" : {
      "site" : "http://da-ink.com/",
      "path" : "/",
      "ajax" : "http://da-ink.com/wp-admin/admin-ajax.php"
    }
  };
} catch (e) {
}
try {
  /**
   * @param {string} rexp
   * @return {?}
   */
  var escapeRegExp = function(rexp) {
    return rexp.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  };
  /**
   * @param {!Function} func
   * @param {number} duration
   * @return {?}
   */
  var debounce = function(func, duration) {
    var timeout;
    return function debounce() {
      /**
       * @return {undefined}
       */
      function later() {
        func();
        /** @type {null} */
        timeout = null;
      }
      if (timeout) {
        clearTimeout(timeout);
      }
      /** @type {number} */
      timeout = setTimeout(later, duration || 100);
    };
  };
  /**
   * @return {undefined}
   */
  var rebuildMasonry = function() {
    /**
     * @return {undefined}
     */
    function changeDom() {
      if (0 == $("#masonry-container").height()) {
        $(".nothing-found").addClass("show");
      } else {
        $(".nothing-found").removeClass("show");
      }
    }
    if ($("#masonry-container").hasClass("isotope")) {
      $("#masonry-container").isotope("destroy");
    }
    var regexp;
    var message;
    var selector;
    var r;
    $(".tattoos-wrapper").isotope({
      itemSelector : ".masonry-grid",
      percentPosition : true,
      originLeft : true,
      horizontalOrder : true,
      stagger : 30,
      filter : function() {
        var el = $(this);
        var o = !regexp || $(this).attr("data-title").match(regexp);
        var c = !message || el.attr("data-category-tattoos").match(message);
        var d = !selector || el.attr("data-artist").match(selector);
        var doUpdate = !r || el.attr("data-year").match(r);
        return o && c && d && doUpdate;
      },
      masonry : {
        columnWidth : ".masonry-grid"
      }
    }).addClass("isotope");
    $(".tattoos-wrapper").isotope("on", "arrangeComplete", function() {
      scrollTo($("#masonry-container"));
    });
    var $conditionsRuleMajor = $("#search-tattoo").keyup(debounce(function() {
      /** @type {!RegExp} */
      regexp = new RegExp($conditionsRuleMajor.val(), "gi");
      $(".tattoos-wrapper").isotope();
      changeDom();
    }, 200));
    $("#category-tattoos-buttons").on("click", "button", function() {
      message = $(this).attr("data-filter");
      $(".tattoos-wrapper").isotope();
      changeDom();
    });
    $("#artist-buttons").on("click", "button", function() {
      selector = $(this).attr("data-filter");
      $(".tattoos-wrapper").isotope();
      changeDom();
    });
    $("#year-buttons").on("click", "button", function() {
      r = $(this).attr("data-filter");
      $(".tattoos-wrapper").isotope();
      changeDom();
    });
    $(".view-grid").click(function() {
      var timelineSequence = new TimelineMax;
      timelineSequence.add(TweenMax.to(".masonry-module", .4, {
        height : "350px"
      })).add(TweenMax.to(".trigger-grid", .2, {
        css : {
          color : "#fff"
        }
      })).add(TweenMax.to(".icon-grid-default", .2, {
        opacity : 1
      }), "=-0.2").add(TweenMax.to(".trigger-masonry", .2, {
        css : {
          color : "#3C3C3C"
        }
      })).add(TweenMax.to(".icon-masonry-default", .2, {
        opacity : .2
      }), "=-0.2");
      setTimeout(function() {
        $(".tattoos-wrapper").isotope("layout");
      }, 450);
    });
    $(".view-masonry").click(function() {
      var timelineSequence = new TimelineMax;
      timelineSequence.add(TweenMax.to(".masonry-module", 1, {
        height : "auto",
        immediateRender : false
      })).add(TweenMax.to(".trigger-grid", .2, {
        css : {
          color : "#3C3C3C"
        }
      })).add(TweenMax.to(".icon-grid-default", .2, {
        opacity : .2
      }), "=-0.2").add(TweenMax.to(".trigger-masonry", .2, {
        css : {
          color : "#fff"
        }
      })).add(TweenMax.to(".icon-masonry-default", .2, {
        opacity : 1
      }), "=-0.2");
      setTimeout(function() {
        $(".tattoos-wrapper").isotope("layout");
      }, 450);
    });
    var search;
    var a;
    $(".news-wrapper").isotope({
      itemSelector : ".masonry-grid",
      percentPosition : true,
      originLeft : true,
      horizontalOrder : true,
      layoutMode : "fitRows",
      filter : function() {
        var t = $(this);
        var e = !search || t.attr("data-title").match(search);
        var isIE = !a || t.attr("data-category").match(a);
        return e && isIE;
      },
      masonry : {
        columnWidth : ".masonry-grid"
      }
    }).addClass("isotope");
    var $initHTML = $("#search-news").keyup(debounce(function() {
      /** @type {!RegExp} */
      search = new RegExp($initHTML.val(), "gi");
      $(".news-wrapper").isotope();
      changeDom();
    }, 200));
    $("#category-buttons").on("click", "button", function() {
      a = $(this).attr("data-filter");
      $(".news-wrapper").isotope();
      changeDom();
    });
    $(".hidden-filters").each(function(canCreateDiscussions, e) {
      var blockNavigation = $(e);
      blockNavigation.on("click", "button", function() {
        blockNavigation.find(".is-checked").removeClass("is-checked");
        $(this).addClass("is-checked");
      });
    });
  };
  /**
   * @return {undefined}
   */
  var atvImg = function() {
    /**
     * @param {!Event} e
     * @param {boolean} pos
     * @param {!Element} el
     * @param {!Array} c
     * @param {number} s
     * @param {!Element} layer
     * @return {undefined}
     */
    function show(e, pos, el, c, s, layer) {
      /** @type {number} */
      var top = body.scrollTop || documentElement.scrollTop;
      /** @type {number} */
      var left = body.scrollLeft;
      var windowWidth = pos ? e.touches[0].pageX : e.pageX;
      var y = pos ? e.touches[0].pageY : e.pageY;
      var options = el.getBoundingClientRect();
      var width = el.clientWidth || el.offsetWidth || el.scrollWidth;
      var height = el.clientHeight || el.offsetHeight || el.scrollHeight;
      /** @type {number} */
      var curZoom = 70 / width;
      /** @type {number} */
      var x = .52 - (windowWidth - options.left - left) / width;
      /** @type {number} */
      var j = .52 - (y - options.top - top) / height;
      /** @type {number} */
      var i = y - options.top - top - height / 2;
      /** @type {number} */
      var X = windowWidth - options.left - left - width / 2;
      /** @type {number} */
      var aspectWidth = (x - X) * (.07 * curZoom);
      /** @type {number} */
      var w = (i - j) * (.1 * curZoom);
      /** @type {string} */
      var transforms = "rotateX(" + w + "deg) rotateY(" + aspectWidth + "deg)";
      /** @type {number} */
      var r = Math.atan2(i, X);
      /** @type {number} */
      var op = 180 * r / Math.PI - 90;
      if (0 > op) {
        /** @type {number} */
        op = op + 360;
      }
      if (-1 != el.firstChild.className.indexOf(" over")) {
        /** @type {string} */
        transforms = transforms + " scale3d(1.05,1.05,1.05)";
      }
      /** @type {string} */
      el.firstChild.style.transform = transforms;
      /** @type {string} */
      layer.style.background = "linear-gradient(" + op + "deg, rgba(0,0,0," + (y - options.top - top) / height * .4 + ") 0%,rgba(0,0,0,0) 100%)";
      /** @type {string} */
      layer.style.transform = "translateX(" + x * s - .1 + "px) translateY(" + j * s - .1 + "px)";
      /** @type {number} */
      var seconds = s;
      /** @type {number} */
      var o = 0;
      for (; s > o; o++) {
        /** @type {string} */
        c[o].style.transform = "translateX(" + x * seconds * (2.5 * o / curZoom) + "px) translateY(" + j * s * (2.5 * o / curZoom) + "px)";
        seconds--;
      }
    }
    /**
     * @param {!Event} t
     * @param {!Element} n
     * @return {undefined}
     */
    function e(t, n) {
      n.firstChild.className += " over";
    }
    /**
     * @param {!Event} d
     * @param {!Element} m
     * @param {!Array} v
     * @param {number} e
     * @param {!Element} n
     * @return {undefined}
     */
    function f(d, m, v, e, n) {
      var body = m.firstChild;
      body.className = body.className.replace(" over", "");
      /** @type {string} */
      body.style.transform = "";
      /** @type {string} */
      n.style.cssText = "";
      /** @type {number} */
      var a = 0;
      for (; e > a; a++) {
        /** @type {string} */
        v[a].style.transform = "";
      }
    }
    /** @type {!HTMLDocument} */
    var doc = document;
    /** @type {!Element} */
    var docElem = doc.documentElement;
    /** @type {!Element} */
    var body = doc.getElementsByTagName("body")[0];
    /** @type {!Element} */
    var documentElement = doc.getElementsByTagName("html")[0];
    /** @type {!Window} */
    var win = window;
    /** @type {!NodeList<Element>} */
    var realNodes = doc.querySelectorAll(".atvImg");
    /** @type {number} */
    var len = realNodes.length;
    /** @type {(boolean|number)} */
    var c = "ontouchstart" in win || navigator.msMaxTouchPoints;
    if (!(0 >= len)) {
      /** @type {number} */
      var i = 0;
      for (; len > i; i++) {
        /** @type {!Element} */
        var node = realNodes[i];
        /** @type {!NodeList<Element>} */
        var p = node.querySelectorAll(".atvImg-layer");
        /** @type {number} */
        var x = p.length;
        if (!(0 >= x)) {
          for (; node.firstChild;) {
            node.removeChild(node.firstChild);
          }
          /** @type {!Element} */
          var m = doc.createElement("div");
          /** @type {!Element} */
          var g = doc.createElement("div");
          /** @type {!Element} */
          var v = doc.createElement("div");
          /** @type {!Element} */
          var stateHeader = doc.createElement("div");
          /** @type {!Array} */
          var _ = [];
          /** @type {string} */
          node.id = "atvImg__" + i;
          /** @type {string} */
          m.className = "atvImg-container";
          /** @type {string} */
          g.className = "atvImg-shine";
          /** @type {string} */
          v.className = "atvImg-shadow";
          /** @type {string} */
          stateHeader.className = "atvImg-layers";
          /** @type {number} */
          var y = 0;
          for (; x > y; y++) {
            /** @type {!Element} */
            var icon = doc.createElement("div");
            /** @type {string} */
            var image = p[y].getAttribute("data-img");
            /** @type {string} */
            icon.className = "atvImg-rendered-layer";
            icon.setAttribute("data-layer", y);
            /** @type {string} */
            icon.style.backgroundImage = "url(" + image + ")";
            stateHeader.appendChild(icon);
            _.push(icon);
          }
          m.appendChild(v);
          m.appendChild(stateHeader);
          m.appendChild(g);
          node.appendChild(m);
          var b = node.clientWidth || node.offsetWidth || node.scrollWidth;
          /** @type {string} */
          node.style.transform = "perspective(" + 3 * b + "px)";
          if (c) {
            /** @type {boolean} */
            win.preventScroll = false;
            (function(i, e, n, width) {
              node.addEventListener("touchmove", function(event) {
                if (win.preventScroll) {
                  event.preventDefault();
                }
                show(event, true, i, e, n, width);
              });
              node.addEventListener("touchstart", function(B) {
                /** @type {boolean} */
                win.preventScroll = true;
                e(B, i);
              });
              node.addEventListener("touchend", function(val) {
                /** @type {boolean} */
                win.preventScroll = false;
                f(val, i, e, n, width);
              });
            })(node, _, x, g);
          } else {
            !function(i, e, n, width) {
              node.addEventListener("mousemove", function(expr) {
                show(expr, false, i, e, n, width);
              });
              node.addEventListener("mouseenter", function(B) {
                e(B, i);
              });
              node.addEventListener("mouseleave", function(val) {
                f(val, i, e, n, width);
              });
            }(node, _, x, g);
          }
        }
      }
    }
  };
  /**
   * @param {!Element} layer
   * @param {!Object} options
   * @return {undefined}
   */
  var FastClick = function(layer, options) {
    /**
     * @param {!Function} f
     * @param {undefined} a
     * @return {?}
     */
    function bind(f, a) {
      return function() {
        return f.apply(a, arguments);
      };
    }
    var oldOnClick;
    options = options || {};
    /** @type {boolean} */
    this.trackingClick = false;
    /** @type {number} */
    this.trackingClickStart = 0;
    /** @type {null} */
    this.targetElement = null;
    /** @type {number} */
    this.touchStartX = 0;
    /** @type {number} */
    this.touchStartY = 0;
    /** @type {number} */
    this.lastTouchIdentifier = 0;
    this.touchBoundary = options.touchBoundary || 10;
    /** @type {!Element} */
    this.layer = layer;
    this.tapDelay = options.tapDelay || 200;
    if (!FastClick.notNeeded(layer)) {
      if (deviceIsAndroid) {
        layer.addEventListener("mouseover", bind(this.onMouse, this), true);
        layer.addEventListener("mousedown", bind(this.onMouse, this), true);
        layer.addEventListener("mouseup", bind(this.onMouse, this), true);
      }
      layer.addEventListener("click", bind(this.onClick, this), true);
      layer.addEventListener("touchstart", bind(this.onTouchStart, this), false);
      layer.addEventListener("touchmove", bind(this.onTouchMove, this), false);
      layer.addEventListener("touchend", bind(this.onTouchEnd, this), false);
      layer.addEventListener("touchcancel", bind(this.onTouchCancel, this), false);
      if (!Event.prototype.stopImmediatePropagation) {
        /**
         * @param {string} type
         * @param {!Function} callback
         * @param {boolean} capture
         * @return {undefined}
         */
        layer.removeEventListener = function(type, callback, capture) {
          /** @type {function(this:Node, string, (EventListener|function(!Event): (boolean|undefined)|null), (EventListenerOptions|boolean)=): undefined} */
          var rmv = Node.prototype.removeEventListener;
          if ("click" === type) {
            rmv.call(layer, type, callback.hijacked || callback, capture);
          } else {
            rmv.call(layer, type, callback, capture);
          }
        };
        /**
         * @param {string} type
         * @param {!Function} callback
         * @param {boolean} capture
         * @return {undefined}
         */
        layer.addEventListener = function(type, callback, capture) {
          /** @type {function(this:Node, string, (EventListener|function(!Event): (boolean|undefined)|null), (AddEventListenerOptions|boolean)=): undefined} */
          var adv = Node.prototype.addEventListener;
          if ("click" === type) {
            adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
              if (!event.propagationStopped) {
                callback(event);
              }
            }), capture);
          } else {
            adv.call(layer, type, callback, capture);
          }
        };
      }
      if ("function" == typeof layer.onclick) {
        /** @type {!Function} */
        oldOnClick = layer.onclick;
        layer.addEventListener("click", function(event) {
          oldOnClick(event);
        }, false);
        /** @type {null} */
        layer.onclick = null;
      }
    }
  };
  !function(global, factory) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      module.exports = global.document ? factory(global, true) : function(global) {
        if (!global.document) {
          throw new Error("jQuery requires a window with a document");
        }
        return factory(global);
      };
    } else {
      factory(global);
    }
  }("undefined" != typeof window ? window : this, function(window, zoomAware) {
    /**
     * @param {string} value
     * @param {!Object} doc
     * @return {undefined}
     */
    function test(value, doc) {
      doc = doc || document;
      var node = doc.createElement("script");
      /** @type {string} */
      node.text = value;
      doc.head.appendChild(node).parentNode.removeChild(node);
    }
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function isArrayLike(obj) {
      var length = !!obj && "length" in obj && obj.length;
      var ltype = jQuery.type(obj);
      return "function" !== ltype && !jQuery.isWindow(obj) && ("array" === ltype || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj);
    }
    /**
     * @param {undefined} elem
     * @param {!Object} e
     * @param {boolean} type
     * @return {?}
     */
    function winnow(elem, e, type) {
      return jQuery.isFunction(e) ? jQuery.grep(elem, function(fn, val) {
        return !!e.call(fn, val, fn) !== type;
      }) : e.nodeType ? jQuery.grep(elem, function(s) {
        return s === e !== type;
      }) : "string" != typeof e ? jQuery.grep(elem, function(selector) {
        return indexOf.call(e, selector) > -1 !== type;
      }) : touchSystem.test(e) ? jQuery.filter(e, elem, type) : (e = jQuery.filter(e, elem), jQuery.grep(elem, function(selector) {
        return indexOf.call(e, selector) > -1 !== type && 1 === selector.nodeType;
      }));
    }
    /**
     * @param {!Object} node
     * @param {string} dir
     * @return {?}
     */
    function walk(node, dir) {
      for (; (node = node[dir]) && 1 !== node.nodeType;) {
      }
      return node;
    }
    /**
     * @param {string} b
     * @return {?}
     */
    function extend(b) {
      var subwikiListsCache = {};
      return jQuery.each(b.match(re) || [], function(canCreateDiscussions, wikiId) {
        /** @type {boolean} */
        subwikiListsCache[wikiId] = true;
      }), subwikiListsCache;
    }
    /**
     * @param {?} r
     * @return {?}
     */
    function undefined(r) {
      return r;
    }
    /**
     * @param {?} nully
     * @return {?}
     */
    function C(nully) {
      throw nully;
    }
    /**
     * @param {!Object} data
     * @param {?} handler
     * @param {!Function} callback
     * @return {undefined}
     */
    function when(data, handler, callback) {
      var value;
      try {
        if (data && jQuery.isFunction(value = data.promise)) {
          value.call(data).done(handler).fail(callback);
        } else {
          if (data && jQuery.isFunction(value = data.then)) {
            value.call(data, handler, callback);
          } else {
            handler.call(void 0, data);
          }
        }
      } catch (localMediaStream) {
        callback.call(void 0, localMediaStream);
      }
    }
    /**
     * @return {undefined}
     */
    function contentLoaded() {
      document.removeEventListener("DOMContentLoaded", contentLoaded);
      window.removeEventListener("load", contentLoaded);
      jQuery.ready();
    }
    /**
     * @return {undefined}
     */
    function Data() {
      this.expando = jQuery.expando + Data.uid++;
    }
    /**
     * @param {string} value
     * @return {?}
     */
    function f(value) {
      return "true" === value || "false" !== value && ("null" === value ? null : value === +value + "" ? +value : trueRE.test(value) ? JSON.parse(value) : value);
    }
    /**
     * @param {?} value
     * @param {!Object} target
     * @param {!Array} val
     * @return {?}
     */
    function set(value, target, val) {
      var key;
      if (void 0 === val && 1 === value.nodeType) {
        if (key = "data-" + target.replace(rhyphen, "-$&").toLowerCase(), val = value.getAttribute(key), "string" == typeof val) {
          try {
            val = f(val);
          } catch (t) {
          }
          self.set(value, target, val);
        } else {
          val = void 0;
        }
      }
      return val;
    }
    /**
     * @param {!Object} elem
     * @param {!Array} prop
     * @param {string} valueParts
     * @param {!Object} tween
     * @return {?}
     */
    function adjustCSS(elem, prop, valueParts, tween) {
      var adjusted;
      /** @type {number} */
      var scale = 1;
      /** @type {number} */
      var s = 20;
      /** @type {function(): ?} */
      var currentValue = tween ? function() {
        return tween.cur();
      } : function() {
        return jQuery.css(elem, prop, "");
      };
      var initial = currentValue();
      var unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px");
      var initialInUnit = (jQuery.cssNumber[prop] || "px" !== unit && +initial) && regex.exec(jQuery.css(elem, prop));
      if (initialInUnit && initialInUnit[3] !== unit) {
        unit = unit || initialInUnit[3];
        valueParts = valueParts || [];
        /** @type {number} */
        initialInUnit = +initial || 1;
        do {
          /** @type {(number|string)} */
          scale = scale || ".5";
          /** @type {number} */
          initialInUnit = initialInUnit / scale;
          jQuery.style(elem, prop, initialInUnit + unit);
        } while (scale !== (scale = currentValue() / initial) && 1 !== scale && --s);
      }
      return valueParts && (initialInUnit = +initialInUnit || +initial || 0, adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2], tween && (tween.unit = unit, tween.start = initialInUnit, tween.end = adjusted)), adjusted;
    }
    /**
     * @param {!Node} elem
     * @return {?}
     */
    function getDefaultDisplay(elem) {
      var value;
      var doc = elem.ownerDocument;
      var nodeName = elem.nodeName;
      var display = defaultDisplayMap[nodeName];
      return display ? display : (value = doc.body.appendChild(doc.createElement(nodeName)), display = jQuery.css(value, "display"), value.parentNode.removeChild(value), "none" === display && (display = "block"), defaultDisplayMap[nodeName] = display, display);
    }
    /**
     * @param {!Array} elements
     * @param {boolean} options
     * @return {?}
     */
    function showHide(elements, options) {
      var display;
      var elem;
      /** @type {!Array} */
      var values = [];
      /** @type {number} */
      var index = 0;
      var length = elements.length;
      for (; index < length; index++) {
        elem = elements[index];
        if (elem.style) {
          display = elem.style.display;
          if (options) {
            if ("none" === display) {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                /** @type {string} */
                elem.style.display = "";
              }
            }
            if ("" === elem.style.display && show(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if ("none" !== display) {
              /** @type {string} */
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
      }
      /** @type {number} */
      index = 0;
      for (; index < length; index++) {
        if (null != values[index]) {
          elements[index].style.display = values[index];
        }
      }
      return elements;
    }
    /**
     * @param {!Object} context
     * @param {number} tag
     * @return {?}
     */
    function getAll(context, tag) {
      var clone;
      return clone = "undefined" != typeof context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : "undefined" != typeof context.querySelectorAll ? context.querySelectorAll(tag || "*") : [], void 0 === tag || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], clone) : clone;
    }
    /**
     * @param {number} elems
     * @param {!NodeList} refElements
     * @return {undefined}
     */
    function setGlobalEval(elems, refElements) {
      /** @type {number} */
      var i = 0;
      var length = elems.length;
      for (; i < length; i++) {
        dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
      }
    }
    /**
     * @param {!Array} elems
     * @param {!Object} context
     * @param {string} result
     * @param {!Object} element
     * @param {!Object} ignored
     * @return {?}
     */
    function buildFragment(elems, context, result, element, ignored) {
      var elem;
      var tmp;
      var tag;
      var wrap;
      var ret;
      var j;
      var fragment = context.createDocumentFragment();
      /** @type {!Array} */
      var results = [];
      /** @type {number} */
      var i = 0;
      var length = elems.length;
      for (; i < length; i++) {
        if (elem = elems[i], elem || 0 === elem) {
          if ("object" === jQuery.type(elem)) {
            jQuery.merge(results, elem.nodeType ? [elem] : elem);
          } else {
            if (re_commas.test(elem)) {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (fullLinkRegex.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              for (; j--;) {
                tmp = tmp.lastChild;
              }
              jQuery.merge(results, tmp.childNodes);
              tmp = fragment.firstChild;
              /** @type {string} */
              tmp.textContent = "";
            } else {
              results.push(context.createTextNode(elem));
            }
          }
        }
      }
      /** @type {string} */
      fragment.textContent = "";
      /** @type {number} */
      i = 0;
      for (; elem = results[i++];) {
        if (element && jQuery.inArray(elem, element) > -1) {
          if (ignored) {
            ignored.push(elem);
          }
        } else {
          if (ret = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(fragment.appendChild(elem), "script"), ret && setGlobalEval(tmp), result) {
            /** @type {number} */
            j = 0;
            for (; elem = tmp[j++];) {
              if (opacityRe.test(elem.type || "")) {
                result.push(elem);
              }
            }
          }
        }
      }
      return fragment;
    }
    /**
     * @return {?}
     */
    function returnTrue() {
      return true;
    }
    /**
     * @return {?}
     */
    function returnFalse() {
      return false;
    }
    /**
     * @return {?}
     */
    function safeActiveElement() {
      try {
        return document.activeElement;
      } catch (t) {
      }
    }
    /**
     * @param {!Object} text
     * @param {string} fn
     * @param {!Node} value
     * @param {!Node} key
     * @param {!Node} callback
     * @param {number} registry
     * @return {?}
     */
    function parse(text, fn, value, key, callback, registry) {
      var handler;
      var f;
      if ("object" == typeof fn) {
        if ("string" != typeof value) {
          key = key || value;
          value = void 0;
        }
        for (f in fn) {
          parse(text, f, value, key, fn[f], registry);
        }
        return text;
      }
      if (null == key && null == callback ? (callback = value, key = value = void 0) : null == callback && ("string" == typeof value ? (callback = key, key = void 0) : (callback = key, key = value, value = void 0)), callback === false) {
        /** @type {function(): ?} */
        callback = returnFalse;
      } else {
        if (!callback) {
          return text;
        }
      }
      return 1 === registry && (handler = callback, callback = function(t) {
        return jQuery().off(t), handler.apply(this, arguments);
      }, callback.guid = handler.guid || (handler.guid = jQuery.guid++)), text.each(function() {
        jQuery.event.add(this, fn, callback, key, value);
      });
    }
    /**
     * @param {!Object} elem
     * @param {!Object} content
     * @return {?}
     */
    function manipulationTarget(elem, content) {
      return jQuery.nodeName(elem, "table") && jQuery.nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem : elem;
    }
    /**
     * @param {!Element} elem
     * @return {?}
     */
    function text(elem) {
      return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, elem;
    }
    /**
     * @param {!Object} s
     * @return {?}
     */
    function createGeneNameGenomicState(s) {
      /** @type {(Array<string>|null)} */
      var l = xhr.exec(s.type);
      return l ? s.type = l[1] : s.removeAttribute("type"), s;
    }
    /**
     * @param {(Object|string)} src
     * @param {string} elem
     * @return {undefined}
     */
    function cloneCopyEvent(src, elem) {
      var i;
      var tableslen;
      var type;
      var pdataOld;
      var pdataCur;
      var value;
      var display;
      var events;
      if (1 === elem.nodeType) {
        if (dataPriv.hasData(src) && (pdataOld = dataPriv.access(src), pdataCur = dataPriv.set(elem, pdataOld), events = pdataOld.events)) {
          delete pdataCur.handle;
          pdataCur.events = {};
          for (type in events) {
            /** @type {number} */
            i = 0;
            tableslen = events[type].length;
            for (; i < tableslen; i++) {
              jQuery.event.add(elem, type, events[type][i]);
            }
          }
        }
        if (self.hasData(src)) {
          value = self.access(src);
          display = jQuery.extend({}, value);
          self.set(elem, display);
        }
      }
    }
    /**
     * @param {!Object} src
     * @param {!Object} dest
     * @return {undefined}
     */
    function fixInput(src, dest) {
      var undefined = dest.nodeName.toLowerCase();
      if ("input" === undefined && reg.test(src.type)) {
        dest.checked = src.checked;
      } else {
        if (!("input" !== undefined && "textarea" !== undefined)) {
          dest.defaultValue = src.defaultValue;
        }
      }
    }
    /**
     * @param {!Object} collection
     * @param {!Array} args
     * @param {!Function} callback
     * @param {!Object} ignored
     * @return {?}
     */
    function domManip(collection, args, callback, ignored) {
      /** @type {!Array<?>} */
      args = concat.apply([], args);
      var fragment;
      var first;
      var e;
      var result;
      var node;
      var doc;
      /** @type {number} */
      var key = 0;
      var i = collection.length;
      /** @type {number} */
      var prevKey = i - 1;
      var data = args[0];
      var value = jQuery.isFunction(data);
      if (value || i > 1 && "string" == typeof data && !support.checkClone && reValidName.test(data)) {
        return collection.each(function(index) {
          var self = collection.eq(index);
          if (value) {
            args[0] = data.call(this, index, self.html());
          }
          domManip(self, args, callback, ignored);
        });
      }
      if (i && (fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored), first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), first || ignored)) {
        e = jQuery.map(getAll(fragment, "script"), text);
        result = e.length;
        for (; key < i; key++) {
          node = fragment;
          if (key !== prevKey) {
            node = jQuery.clone(node, true, true);
            if (result) {
              jQuery.merge(e, getAll(node, "script"));
            }
          }
          callback.call(collection[key], node, key);
        }
        if (result) {
          doc = e[e.length - 1].ownerDocument;
          jQuery.map(e, createGeneNameGenomicState);
          /** @type {number} */
          key = 0;
          for (; key < result; key++) {
            node = e[key];
            if (opacityRe.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src) {
                if (jQuery._evalUrl) {
                  jQuery._evalUrl(node.src);
                }
              } else {
                test(node.textContent.replace(codePoint, ""), doc);
              }
            }
          }
        }
      }
      return collection;
    }
    /**
     * @param {!Array} value
     * @param {!Object} key
     * @param {string} keepData
     * @return {?}
     */
    function remove(value, key, keepData) {
      var elem;
      var result = key ? jQuery.filter(key, value) : value;
      /** @type {number} */
      var i = 0;
      for (; null != (elem = result[i]); i++) {
        if (!(keepData || 1 !== elem.nodeType)) {
          jQuery.cleanData(getAll(elem));
        }
        if (elem.parentNode) {
          if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
            setGlobalEval(getAll(elem, "script"));
          }
          elem.parentNode.removeChild(elem);
        }
      }
      return value;
    }
    /**
     * @param {!Object} elem
     * @param {string} name
     * @param {!Object} computed
     * @return {?}
     */
    function curCSS(elem, name, computed) {
      var minWidth;
      var width;
      var maxWidth;
      var ret;
      var style = elem.style;
      return computed = computed || getStyles(elem), computed && (ret = computed.getPropertyValue(name) || computed[name], "" !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), !support.pixelMarginRight() && rnumnonpx.test(ret) && namespaces.test(name) && (minWidth = style.width, width = style.minWidth, maxWidth =
      style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = minWidth, style.minWidth = width, style.maxWidth = maxWidth)), void 0 !== ret ? ret + "" : ret;
    }
    /**
     * @param {?} conditionFn
     * @param {!Function} hookFn
     * @return {?}
     */
    function addGetHookIf(conditionFn, hookFn) {
      return {
        get : function() {
          return conditionFn() ? void delete this.get : (this.get = hookFn).apply(this, arguments);
        }
      };
    }
    /**
     * @param {string} name
     * @return {?}
     */
    function vendorPropName(name) {
      if (name in style) {
        return name;
      }
      var UserSelect = name[0].toUpperCase() + name.slice(1);
      /** @type {number} */
      var i = prefixes.length;
      for (; i--;) {
        if (name = prefixes[i] + UserSelect, name in style) {
          return name;
        }
      }
    }
    /**
     * @param {!Object} type
     * @param {!Object} data
     * @param {string} value
     * @return {?}
     */
    function format(type, data, value) {
      /** @type {(Array<string>|null)} */
      var match = regex.exec(data);
      return match ? Math.max(0, match[2] - (value || 0)) + (match[3] || "px") : data;
    }
    /**
     * @param {!Object} elem
     * @param {string} name
     * @param {string} extra
     * @param {boolean} isBorderBox
     * @param {undefined} styles
     * @return {?}
     */
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
      var i;
      /** @type {number} */
      var val = 0;
      /** @type {number} */
      i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === name ? 1 : 0;
      for (; i < 4; i = i + 2) {
        if ("margin" === extra) {
          val = val + jQuery.css(elem, extra + cssExpand[i], true, styles);
        }
        if (isBorderBox) {
          if ("content" === extra) {
            /** @type {number} */
            val = val - jQuery.css(elem, "padding" + cssExpand[i], true, styles);
          }
          if ("margin" !== extra) {
            /** @type {number} */
            val = val - jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          }
        } else {
          val = val + jQuery.css(elem, "padding" + cssExpand[i], true, styles);
          if ("padding" !== extra) {
            val = val + jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          }
        }
      }
      return val;
    }
    /**
     * @param {!Element} elem
     * @param {string} name
     * @param {string} extra
     * @return {?}
     */
    function getWidthOrHeight(elem, name, extra) {
      var val;
      /** @type {boolean} */
      var valueIsBorderBox = true;
      var styles = getStyles(elem);
      /** @type {boolean} */
      var isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", false, styles);
      if (elem.getClientRects().length && (val = elem.getBoundingClientRect()[name]), val <= 0 || null == val) {
        if (val = curCSS(elem, name, styles), (val < 0 || null == val) && (val = elem.style[name]), rnumnonpx.test(val)) {
          return val;
        }
        valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
        /** @type {number} */
        val = parseFloat(val) || 0;
      }
      return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
    }
    /**
     * @param {!Object} value
     * @param {!Object} name
     * @param {string} object
     * @param {!Object} options
     * @param {string} valueArray
     * @return {?}
     */
    function Tween(value, name, object, options, valueArray) {
      return new Tween.prototype.init(value, name, object, options, valueArray);
    }
    /**
     * @return {undefined}
     */
    function frame() {
      if (name) {
        window.requestAnimationFrame(frame);
        jQuery.fx.tick();
      }
    }
    /**
     * @return {?}
     */
    function createFxNow() {
      return window.setTimeout(function() {
        fxNow = void 0;
      }), fxNow = jQuery.now();
    }
    /**
     * @param {string} type
     * @param {number} includeWidth
     * @return {?}
     */
    function genFx(type, includeWidth) {
      var which;
      /** @type {number} */
      var i = 0;
      var attrs = {
        height : type
      };
      /** @type {number} */
      includeWidth = includeWidth ? 1 : 0;
      for (; i < 4; i = i + (2 - includeWidth)) {
        which = cssExpand[i];
        attrs["margin" + which] = attrs["padding" + which] = type;
      }
      return includeWidth && (attrs.opacity = attrs.width = type), attrs;
    }
    /**
     * @param {!Function} duration
     * @param {!Object} prop
     * @param {!Object} animation
     * @return {?}
     */
    function createTween(duration, prop, animation) {
      var tween;
      var prev = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]);
      /** @type {number} */
      var p = 0;
      var s = prev.length;
      for (; p < s; p++) {
        if (tween = prev[p].call(animation, prop, duration)) {
          return tween;
        }
      }
    }
    /**
     * @param {!Object} elem
     * @param {!Object} props
     * @param {!Object} opts
     * @return {undefined}
     */
    function defaultPrefilter(elem, props, opts) {
      var prop;
      var value;
      var matched;
      var hooks;
      var oldfire;
      var tween;
      var restoreDisplay;
      var display;
      /** @type {boolean} */
      var h = "width" in props || "height" in props;
      var anim = this;
      var orig = {};
      var style = elem.style;
      var hidden = elem.nodeType && show(elem);
      var dataShow = dataPriv.get(elem, "fxshow");
      if (!opts.queue) {
        hooks = jQuery._queueHooks(elem, "fx");
        if (null == hooks.unqueued) {
          /** @type {number} */
          hooks.unqueued = 0;
          /** @type {function(): undefined} */
          oldfire = hooks.empty.fire;
          /**
           * @return {undefined}
           */
          hooks.empty.fire = function() {
            if (!hooks.unqueued) {
              oldfire();
            }
          };
        }
        hooks.unqueued++;
        anim.always(function() {
          anim.always(function() {
            hooks.unqueued--;
            if (!jQuery.queue(elem, "fx").length) {
              hooks.empty.fire();
            }
          });
        });
      }
      for (prop in props) {
        if (value = props[prop], contribRegex.test(value)) {
          if (delete props[prop], matched = matched || "toggle" === value, value === (hidden ? "hide" : "show")) {
            if ("show" !== value || !dataShow || void 0 === dataShow[prop]) {
              continue;
            }
            /** @type {boolean} */
            hidden = true;
          }
          orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
        }
      }
      if (tween = !jQuery.isEmptyObject(props), tween || !jQuery.isEmptyObject(orig)) {
        if (h && 1 === elem.nodeType) {
          /** @type {!Array} */
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (null == restoreDisplay) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery.css(elem, "display");
          if ("none" === display) {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery.css(elem, "display");
              showHide([elem]);
            }
          }
          if (("inline" === display || "inline-block" === display && null != restoreDisplay) && "none" === jQuery.css(elem, "float")) {
            if (!tween) {
              anim.done(function() {
                style.display = restoreDisplay;
              });
              if (null == restoreDisplay) {
                display = style.display;
                restoreDisplay = "none" === display ? "" : display;
              }
            }
            /** @type {string} */
            style.display = "inline-block";
          }
        }
        if (opts.overflow) {
          /** @type {string} */
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        /** @type {boolean} */
        tween = false;
        for (prop in orig) {
          if (!tween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", {
                display : restoreDisplay
              });
            }
            if (matched) {
              /** @type {boolean} */
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery.style(elem, prop, orig[prop]);
              }
            });
          }
          tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = tween.start;
            if (hidden) {
              tween.end = tween.start;
              /** @type {number} */
              tween.start = 0;
            }
          }
        }
      }
    }
    /**
     * @param {!Array} obj
     * @param {!Array} prop
     * @return {undefined}
     */
    function propFilter(obj, prop) {
      var k;
      var name;
      var fn;
      var val;
      var hooks;
      for (k in obj) {
        if (name = jQuery.camelCase(k), fn = prop[name], val = obj[k], jQuery.isArray(val) && (fn = val[1], val = obj[k] = val[0]), k !== name && (obj[name] = val, delete obj[k]), hooks = jQuery.cssHooks[name], hooks && "expand" in hooks) {
          val = hooks.expand(val);
          delete obj[name];
          for (k in val) {
            if (!(k in obj)) {
              obj[k] = val[k];
              prop[k] = fn;
            }
          }
        } else {
          prop[name] = fn;
        }
      }
    }
    /**
     * @param {!Object} elem
     * @param {!Object} properties
     * @param {!Object} options
     * @return {?}
     */
    function Animation(elem, properties, options) {
      var result;
      var r;
      /** @type {number} */
      var index = 0;
      var ncells = Animation.prefilters.length;
      var deferred = jQuery.Deferred().always(function() {
        delete tick.elem;
      });
      /**
       * @return {?}
       */
      var tick = function() {
        if (r) {
          return false;
        }
        var currentTime = fxNow || createFxNow();
        /** @type {number} */
        var remaining = Math.max(0, animation.startTime + animation.duration - currentTime);
        /** @type {number} */
        var temp = remaining / animation.duration || 0;
        /** @type {number} */
        var percent = 1 - temp;
        /** @type {number} */
        var i = 0;
        var length = animation.tweens.length;
        for (; i < length; i++) {
          animation.tweens[i].run(percent);
        }
        return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length ? remaining : (deferred.resolveWith(elem, [animation]), false);
      };
      var animation = deferred.promise({
        elem : elem,
        props : jQuery.extend({}, properties),
        opts : jQuery.extend(true, {
          specialEasing : {},
          easing : jQuery.easing._default
        }, options),
        originalProperties : properties,
        originalOptions : options,
        startTime : fxNow || createFxNow(),
        duration : options.duration,
        tweens : [],
        createTween : function(prop, value) {
          var result = jQuery.Tween(elem, animation.opts, prop, value, animation.opts.specialEasing[prop] || animation.opts.easing);
          return animation.tweens.push(result), result;
        },
        stop : function(value) {
          /** @type {number} */
          var i = 0;
          var mid = value ? animation.tweens.length : 0;
          if (r) {
            return this;
          }
          /** @type {boolean} */
          r = true;
          for (; i < mid; i++) {
            animation.tweens[i].run(1);
          }
          return value ? (deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation, value])) : deferred.rejectWith(elem, [animation, value]), this;
        }
      });
      var props = animation.props;
      propFilter(props, animation.opts.specialEasing);
      for (; index < ncells; index++) {
        if (result = Animation.prefilters[index].call(animation, elem, props, animation.opts)) {
          return jQuery.isFunction(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result)), result;
        }
      }
      return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), jQuery.fx.timer(jQuery.extend(tick, {
        elem : elem,
        anim : animation,
        queue : animation.opts.queue
      })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    /**
     * @param {string} s
     * @return {?}
     */
    function fn(s) {
      var drilldownLevelLabels = s.match(re) || [];
      return drilldownLevelLabels.join(" ");
    }
    /**
     * @param {!Node} el
     * @return {?}
     */
    function $(el) {
      return el.getAttribute && el.getAttribute("class") || "";
    }
    /**
     * @param {string} url
     * @param {!Object} data
     * @param {string} result
     * @param {!Function} cmd
     * @return {undefined}
     */
    function cb(url, data, result, cmd) {
      var type;
      if (jQuery.isArray(data)) {
        jQuery.each(data, function(callback_key, data) {
          if (result || reIsFile.test(url)) {
            cmd(url, data);
          } else {
            cb(url + "[" + ("object" == typeof data && null != data ? callback_key : "") + "]", data, result, cmd);
          }
        });
      } else {
        if (result || "object" !== jQuery.type(data)) {
          cmd(url, data);
        } else {
          for (type in data) {
            cb(url + "[" + type + "]", data[type], result, cmd);
          }
        }
      }
    }
    /**
     * @param {!Object} structure
     * @return {?}
     */
    function addToPrefiltersOrTransports(structure) {
      return function(url, type) {
        if ("string" != typeof url) {
          /** @type {string} */
          type = url;
          /** @type {string} */
          url = "*";
        }
        var s;
        /** @type {number} */
        var ol = 0;
        var o = url.toLowerCase().match(re) || [];
        if (jQuery.isFunction(type)) {
          for (; s = o[ol++];) {
            if ("+" === s[0]) {
              s = s.slice(1) || "*";
              (structure[s] = structure[s] || []).unshift(type);
            } else {
              (structure[s] = structure[s] || []).push(type);
            }
          }
        }
      };
    }
    /**
     * @param {!Object} structure
     * @param {?} options
     * @param {!Object} originalOptions
     * @param {?} jqXHR
     * @return {?}
     */
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
      /**
       * @param {string} dataType
       * @return {?}
       */
      function inspect(dataType) {
        var selected;
        return inspected[dataType] = true, jQuery.each(structure[dataType] || [], function(canCreateDiscussions, prefilterOrFactory) {
          var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
          return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), false);
        }), selected;
      }
      var inspected = {};
      /** @type {boolean} */
      var seekingTransport = structure === transports;
      return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    /**
     * @param {?} target
     * @param {?} opts
     * @return {?}
     */
    function ajaxExtend(target, opts) {
      var key;
      var deep;
      var flatOptions = jQuery.ajaxSettings.flatOptions || {};
      for (key in opts) {
        if (void 0 !== opts[key]) {
          (flatOptions[key] ? target : deep || (deep = {}))[key] = opts[key];
        }
      }
      return deep && jQuery.extend(true, target, deep), target;
    }
    /**
     * @param {!Object} s
     * @param {!XMLHttpRequest} jqXHR
     * @param {!Array} responses
     * @return {?}
     */
    function ajaxHandleResponses(s, jqXHR, responses) {
      var ct;
      var type;
      var finalDataType;
      var firstDataType;
      var contents = s.contents;
      var dataTypes = s.dataTypes;
      for (; "*" === dataTypes[0];) {
        dataTypes.shift();
        if (void 0 === ct) {
          ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
      }
      if (ct) {
        for (type in contents) {
          if (contents[type] && contents[type].test(ct)) {
            dataTypes.unshift(type);
            break;
          }
        }
      }
      if (dataTypes[0] in responses) {
        finalDataType = dataTypes[0];
      } else {
        for (type in responses) {
          if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
            /** @type {string} */
            finalDataType = type;
            break;
          }
          if (!firstDataType) {
            /** @type {string} */
            firstDataType = type;
          }
        }
        /** @type {(string|undefined)} */
        finalDataType = finalDataType || firstDataType;
      }
      if (finalDataType) {
        return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType];
      }
    }
    /**
     * @param {!Object} s
     * @param {!Object} response
     * @param {?} jqXHR
     * @param {number} isSuccess
     * @return {?}
     */
    function ajaxConvert(s, response, jqXHR, isSuccess) {
      var conv2;
      var current;
      var conv;
      var tmp;
      var prev;
      var converters = {};
      var deps = s.dataTypes.slice();
      if (deps[1]) {
        for (conv in s.converters) {
          converters[conv.toLowerCase()] = s.converters[conv];
        }
      }
      current = deps.shift();
      for (; current;) {
        if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = deps.shift()) {
          if ("*" === current) {
            current = prev;
          } else {
            if ("*" !== prev && prev !== current) {
              if (conv = converters[prev + " " + current] || converters["* " + current], !conv) {
                for (conv2 in converters) {
                  if (tmp = conv2.split(" "), tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
                    if (conv === true) {
                      conv = converters[conv2];
                    } else {
                      if (converters[conv2] !== true) {
                        /** @type {string} */
                        current = tmp[0];
                        deps.unshift(tmp[1]);
                      }
                    }
                    break;
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state : "parsererror",
                      error : conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }
      }
      return {
        state : "success",
        data : response
      };
    }
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function getWindow(obj) {
      return jQuery.isWindow(obj) ? obj : 9 === obj.nodeType && obj.defaultView;
    }
    /** @type {!Array} */
    var arr = [];
    var document = window.document;
    /** @type {function(!Object): (Object|null)} */
    var getProto = Object.getPrototypeOf;
    /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
    var slice = arr.slice;
    /** @type {function(this:*, ...*): !Array<?>} */
    var concat = arr.concat;
    /** @type {function(this:IArrayLike<T>, ...T): number} */
    var push = arr.push;
    /** @type {function(this:(IArrayLike<T>|string), T, number=): number} */
    var indexOf = arr.indexOf;
    var class2type = {};
    /** @type {function(this:*): string} */
    var toString = class2type.toString;
    /** @type {function(this:Object, *): boolean} */
    var hasOwn = class2type.hasOwnProperty;
    /** @type {function(this:!Function): string} */
    var fnToString = hasOwn.toString;
    /** @type {string} */
    var Mixin2 = fnToString.call(Object);
    var support = {};
    /** @type {string} */
    var core_version = "3.1.1";
    /**
     * @param {!Object} value
     * @param {!Object} name
     * @return {?}
     */
    var jQuery = function(value, name) {
      return new jQuery.fn.init(value, name);
    };
    /** @type {!RegExp} */
    var REGEX_ESCAPE_EXPR = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    /** @type {!RegExp} */
    var nonAscii = /^-ms-/;
    /** @type {!RegExp} */
    var rcharset = /-([a-z])/g;
    /**
     * @param {?} context
     * @param {string} match
     * @return {?}
     */
    var dashToCapital = function(context, match) {
      return match.toUpperCase();
    };
    jQuery.fn = jQuery.prototype = {
      jquery : core_version,
      constructor : jQuery,
      length : 0,
      toArray : function() {
        return slice.call(this);
      },
      get : function(num) {
        return null == num ? slice.call(this) : num < 0 ? this[num + this.length] : this[num];
      },
      pushStack : function(a) {
        var elm = jQuery.merge(this.constructor(), a);
        return elm.prevObject = this, elm;
      },
      each : function(callback) {
        return jQuery.each(this, callback);
      },
      map : function(func) {
        return this.pushStack(jQuery.map(this, function(_, selector) {
          return func.call(_, selector, _);
        }));
      },
      slice : function() {
        return this.pushStack(slice.apply(this, arguments));
      },
      first : function() {
        return this.eq(0);
      },
      last : function() {
        return this.eq(-1);
      },
      eq : function(i) {
        var len = this.length;
        var j = +i + (i < 0 ? len : 0);
        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
      },
      end : function() {
        return this.prevObject || this.constructor();
      },
      push : push,
      sort : arr.sort,
      splice : arr.splice
    };
    /** @type {function(): ?} */
    jQuery.extend = jQuery.fn.extend = function() {
      var options;
      var name;
      var src;
      var copy;
      var copyIsArray;
      var clone;
      var target = arguments[0] || {};
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var l = arguments.length;
      /** @type {boolean} */
      var deep = false;
      if ("boolean" == typeof target) {
        /** @type {boolean} */
        deep = target;
        target = arguments[i] || {};
        i++;
      }
      if (!("object" == typeof target || jQuery.isFunction(target))) {
        target = {};
      }
      if (i === l) {
        target = this;
        i--;
      }
      for (; i < l; i++) {
        if (null != (options = arguments[i])) {
          for (name in options) {
            src = target[name];
            copy = options[name];
            if (target !== copy) {
              if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                if (copyIsArray) {
                  /** @type {boolean} */
                  copyIsArray = false;
                  clone = src && jQuery.isArray(src) ? src : [];
                } else {
                  clone = src && jQuery.isPlainObject(src) ? src : {};
                }
                target[name] = jQuery.extend(deep, clone, copy);
              } else {
                if (void 0 !== copy) {
                  target[name] = copy;
                }
              }
            }
          }
        }
      }
      return target;
    };
    jQuery.extend({
      expando : "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
      isReady : true,
      error : function(value) {
        throw new Error(value);
      },
      noop : function() {
      },
      isFunction : function(obj) {
        return "function" === jQuery.type(obj);
      },
      isArray : Array.isArray,
      isWindow : function(obj) {
        return null != obj && obj === obj.window;
      },
      isNumeric : function(value) {
        var undefined = jQuery.type(value);
        return ("number" === undefined || "string" === undefined) && !isNaN(value - parseFloat(value));
      },
      isPlainObject : function(obj) {
        var proto;
        var value;
        return !(!obj || "[object Object]" !== toString.call(obj) || (proto = getProto(obj)) && (value = hasOwn.call(proto, "constructor") && proto.constructor, "function" != typeof value || fnToString.call(value) !== Mixin2));
      },
      isEmptyObject : function(obj) {
        var key;
        for (key in obj) {
          return false;
        }
        return true;
      },
      type : function(value) {
        return null == value ? value + "" : "object" == typeof value || "function" == typeof value ? class2type[toString.call(value)] || "object" : typeof value;
      },
      globalEval : function(data) {
        test(data);
      },
      camelCase : function(string) {
        return string.replace(nonAscii, "ms-").replace(rcharset, dashToCapital);
      },
      nodeName : function(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      },
      each : function(result, state) {
        var lastCommaTermCount;
        /** @type {number} */
        var i = 0;
        if (isArrayLike(result)) {
          lastCommaTermCount = result.length;
          for (; i < lastCommaTermCount && state.call(result[i], i, result[i]) !== false; i++) {
          }
        } else {
          for (i in result) {
            if (state.call(result[i], i, result[i]) === false) {
              break;
            }
          }
        }
        return result;
      },
      trim : function(text) {
        return null == text ? "" : (text + "").replace(REGEX_ESCAPE_EXPR, "");
      },
      makeArray : function(arr, o) {
        var obj = o || [];
        return null != arr && (isArrayLike(Object(arr)) ? jQuery.merge(obj, "string" == typeof arr ? [arr] : arr) : push.call(obj, arr)), obj;
      },
      inArray : function(elem, arr, start) {
        return null == arr ? -1 : indexOf.call(arr, elem, start);
      },
      merge : function(data, options) {
        /** @type {number} */
        var NUMBER_OF_FOLLOWERS = +options.length;
        /** @type {number} */
        var i = 0;
        var index = data.length;
        for (; i < NUMBER_OF_FOLLOWERS; i++) {
          data[index++] = options[i];
        }
        return data.length = index, data;
      },
      grep : function(arr, callback, a) {
        var editItemKey;
        /** @type {!Array} */
        var ret = [];
        /** @type {number} */
        var i = 0;
        var arrSize = arr.length;
        /** @type {boolean} */
        var booA = !a;
        for (; i < arrSize; i++) {
          /** @type {boolean} */
          editItemKey = !callback(arr[i], i);
          if (editItemKey !== booA) {
            ret.push(arr[i]);
          }
        }
        return ret;
      },
      map : function(obj, f, array) {
        var r;
        var value;
        /** @type {number} */
        var i = 0;
        /** @type {!Array} */
        var array = [];
        if (isArrayLike(obj)) {
          r = obj.length;
          for (; i < r; i++) {
            value = f(obj[i], i, array);
            if (null != value) {
              array.push(value);
            }
          }
        } else {
          for (i in obj) {
            value = f(obj[i], i, array);
            if (null != value) {
              array.push(value);
            }
          }
        }
        return concat.apply([], array);
      },
      guid : 1,
      proxy : function(f, c) {
        var j;
        var headArgs;
        var proxy;
        if ("string" == typeof c && (j = f[c], c = f, f = j), jQuery.isFunction(f)) {
          return headArgs = slice.call(arguments, 2), proxy = function() {
            return f.apply(c || this, headArgs.concat(slice.call(arguments)));
          }, proxy.guid = f.guid = f.guid || jQuery.guid++, proxy;
        }
      },
      now : Date.now,
      support : support
    });
    if ("function" == typeof Symbol) {
      jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    }
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(canCreateDiscussions, p_Interval) {
      class2type["[object " + p_Interval + "]"] = p_Interval.toLowerCase();
    });
    var Sizzle = function(window) {
      /**
       * @param {string} selector
       * @param {!Object} context
       * @param {!Object} results
       * @param {!Array} seed
       * @return {?}
       */
      function Sizzle(selector, context, results, seed) {
        var m;
        var i;
        var elem;
        var nid;
        var match;
        var groups;
        var newSelector;
        var newContext = context && context.ownerDocument;
        var undefined = context ? context.nodeType : 9;
        if (results = results || [], "string" != typeof selector || !selector || 1 !== undefined && 9 !== undefined && 11 !== undefined) {
          return results;
        }
        if (!seed && ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), context = context || document, documentIsHTML)) {
          if (11 !== undefined && (match = customSelectorReg.exec(selector))) {
            if (m = match[1]) {
              if (9 === undefined) {
                if (!(elem = context.getElementById(m))) {
                  return results;
                }
                if (elem.id === m) {
                  return results.push(elem), results;
                }
              } else {
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  return results.push(elem), results;
                }
              }
            } else {
              if (match[2]) {
                return push.apply(results, context.getElementsByTagName(selector)), results;
              }
              if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                return push.apply(results, context.getElementsByClassName(m)), results;
              }
            }
          }
          if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            if (1 !== undefined) {
              /** @type {!Object} */
              newContext = context;
              /** @type {string} */
              newSelector = selector;
            } else {
              if ("object" !== context.nodeName.toLowerCase()) {
                if (nid = context.getAttribute("id")) {
                  nid = nid.replace(rcssescape, fcssescape);
                } else {
                  context.setAttribute("id", nid = expando);
                }
                groups = tokenize(selector);
                i = groups.length;
                for (; i--;) {
                  /** @type {string} */
                  groups[i] = "#" + nid + " " + toSelector(groups[i]);
                }
                newSelector = groups.join(",");
                newContext = $.test(selector) && testContext(context.parentNode) || context;
              }
            }
            if (newSelector) {
              try {
                return push.apply(results, newContext.querySelectorAll(newSelector)), results;
              } catch (t) {
              } finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }
        return select(selector.replace(rtrim, "$1"), context, results, seed);
      }
      /**
       * @return {?}
       */
      function createCache() {
        /**
         * @param {string} duration
         * @param {?} url
         * @return {?}
         */
        function cache(duration, url) {
          return lengths.push(duration + " ") > Expr.cacheLength && delete cache[lengths.shift()], cache[duration + " "] = url;
        }
        /** @type {!Array} */
        var lengths = [];
        return cache;
      }
      /**
       * @param {!Function} fn
       * @return {?}
       */
      function markFunction(fn) {
        return fn[expando] = true, fn;
      }
      /**
       * @param {!Function} expect
       * @return {?}
       */
      function assert(expect) {
        var wrap = document.createElement("fieldset");
        try {
          return !!expect(wrap);
        } catch (t) {
          return false;
        } finally {
          if (wrap.parentNode) {
            wrap.parentNode.removeChild(wrap);
          }
          /** @type {null} */
          wrap = null;
        }
      }
      /**
       * @param {string} handler
       * @param {!Function} target
       * @return {undefined}
       */
      function addHandle(handler, target) {
        var arr = handler.split("|");
        var i = arr.length;
        for (; i--;) {
          /** @type {!Function} */
          Expr.attrHandle[arr[i]] = target;
        }
      }
      /**
       * @param {!Object} a
       * @param {!Object} b
       * @return {?}
       */
      function siblingCheck(a, b) {
        var cur = b && a;
        var .num_const = cur && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
        if (.num_const) {
          return .num_const;
        }
        if (cur) {
          for (; cur = cur.nextSibling;) {
            if (cur === b) {
              return -1;
            }
          }
        }
        return a ? 1 : -1;
      }
      /**
       * @param {!Object} type
       * @return {?}
       */
      function jQuerify(type) {
        return function(section) {
          var id = section.nodeName.toLowerCase();
          return "input" === id && section.type === type;
        };
      }
      /**
       * @param {!Object} type
       * @return {?}
       */
      function createButtonPseudo(type) {
        return function(section) {
          var undefined = section.nodeName.toLowerCase();
          return ("input" === undefined || "button" === undefined) && section.type === type;
        };
      }
      /**
       * @param {boolean} disabled
       * @return {?}
       */
      function createDisabledPseudo(disabled) {
        return function(elem) {
          return "form" in elem ? elem.parentNode && elem.disabled === false ? "label" in elem ? "label" in elem.parentNode ? elem.parentNode.disabled === disabled : elem.disabled === disabled : elem.isDisabled === disabled || elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled : elem.disabled === disabled : "label" in elem && elem.disabled === disabled;
        };
      }
      /**
       * @param {!Function} fn
       * @return {?}
       */
      function createPositionalPseudo(fn) {
        return markFunction(function(key) {
          return key = +key, markFunction(function(a, b) {
            var i;
            var k = fn([], a.length, key);
            var l = k.length;
            for (; l--;) {
              if (a[i = k[l]]) {
                /** @type {boolean} */
                a[i] = !(b[i] = a[i]);
              }
            }
          });
        });
      }
      /**
       * @param {!Node} context
       * @return {?}
       */
      function testContext(context) {
        return context && "undefined" != typeof context.getElementsByTagName && context;
      }
      /**
       * @return {undefined}
       */
      function setFilters() {
      }
      /**
       * @param {!Array} tokens
       * @return {?}
       */
      function toSelector(tokens) {
        /** @type {number} */
        var i = 0;
        var numTokens = tokens.length;
        /** @type {string} */
        var selector = "";
        for (; i < numTokens; i++) {
          /** @type {string} */
          selector = selector + tokens[i].value;
        }
        return selector;
      }
      /**
       * @param {!Function} matcher
       * @param {!Object} combinator
       * @param {string} base
       * @return {?}
       */
      function addCombinator(matcher, combinator, base) {
        var dir = combinator.dir;
        var skip = combinator.next;
        var key = skip || dir;
        var checkNonElements = base && "parentNode" === key;
        /** @type {number} */
        var doneName = done++;
        return combinator.first ? function(elem, stat, context) {
          for (; elem = elem[dir];) {
            if (1 === elem.nodeType || checkNonElements) {
              return matcher(elem, stat, context);
            }
          }
          return false;
        } : function(elem, context, xml) {
          var oldCache;
          var uniqueCache;
          var outerCache;
          /** @type {!Array} */
          var newCache = [dirruns, doneName];
          if (xml) {
            for (; elem = elem[dir];) {
              if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) {
                return true;
              }
            }
          } else {
            for (; elem = elem[dir];) {
              if (1 === elem.nodeType || checkNonElements) {
                if (outerCache = elem[expando] || (elem[expando] = {}), uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {}), skip && skip === elem.nodeName.toLowerCase()) {
                  elem = elem[dir] || elem;
                } else {
                  if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                    return newCache[2] = oldCache[2];
                  }
                  if (uniqueCache[key] = newCache, newCache[2] = matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        };
      }
      /**
       * @param {!Object} matchers
       * @return {?}
       */
      function elementMatcher(matchers) {
        return matchers.length > 1 ? function(elem, context, xml) {
          var i = matchers.length;
          for (; i--;) {
            if (!matchers[i](elem, context, xml)) {
              return false;
            }
          }
          return true;
        } : matchers[0];
      }
      /**
       * @param {string} selector
       * @param {!NodeList} root
       * @param {!Object} result
       * @return {?}
       */
      function replace(selector, root, result) {
        /** @type {number} */
        var i = 0;
        var l = root.length;
        for (; i < l; i++) {
          Sizzle(selector, root[i], result);
        }
        return result;
      }
      /**
       * @param {!Array} a
       * @param {!Object} text
       * @param {string} callback
       * @param {string} error
       * @param {!Object} t
       * @return {?}
       */
      function get(a, text, callback, error, t) {
        var o;
        /** @type {!Array} */
        var b = [];
        /** @type {number} */
        var j = 0;
        var startLen = a.length;
        /** @type {boolean} */
        var check_select = null != text;
        for (; j < startLen; j++) {
          if (o = a[j]) {
            if (!(callback && !callback(o, error, t))) {
              b.push(o);
              if (check_select) {
                text.push(j);
              }
            }
          }
        }
        return b;
      }
      /**
       * @param {string} id
       * @param {string} command
       * @param {string} callback
       * @param {string} handler
       * @param {string} fn
       * @param {string} data
       * @return {?}
       */
      function parse(id, command, callback, handler, fn, data) {
        return handler && !handler[expando] && (handler = parse(handler)), fn && !fn[expando] && (fn = parse(fn, data)), markFunction(function(val, object, context, name) {
          var key;
          var i;
          var value;
          /** @type {!Array} */
          var response = [];
          /** @type {!Array} */
          var v = [];
          var a = object.length;
          var target = val || replace(command || "*", context.nodeType ? [context] : context, []);
          var r = !id || !val && command ? target : get(target, response, id, context, name);
          var result = callback ? fn || (val ? id : a || handler) ? [] : object : r;
          if (callback && callback(r, result, context, name), handler) {
            key = get(result, v);
            handler(key, [], context, name);
            i = key.length;
            for (; i--;) {
              if (value = key[i]) {
                /** @type {boolean} */
                result[v[i]] = !(r[v[i]] = value);
              }
            }
          }
          if (val) {
            if (fn || id) {
              if (fn) {
                /** @type {!Array} */
                key = [];
                i = result.length;
                for (; i--;) {
                  if (value = result[i]) {
                    key.push(r[i] = value);
                  }
                }
                fn(null, result = [], key, name);
              }
              i = result.length;
              for (; i--;) {
                if ((value = result[i]) && (key = fn ? indexOf(val, value) : response[i]) > -1) {
                  /** @type {boolean} */
                  val[key] = !(object[key] = value);
                }
              }
            }
          } else {
            result = get(result === object ? result.splice(a, result.length) : result);
            if (fn) {
              fn(null, object, result, name);
            } else {
              push.apply(object, result);
            }
          }
        });
      }
      /**
       * @param {!Array} tokens
       * @return {?}
       */
      function matcherFromTokens(tokens) {
        var checkContext;
        var e;
        var j;
        var len = tokens.length;
        var leadingRelative = Expr.relative[tokens[0].type];
        var implicitRelative = leadingRelative || Expr.relative[" "];
        /** @type {number} */
        var i = leadingRelative ? 1 : 0;
        var matchContext = addCombinator(function(elem) {
          return elem === checkContext;
        }, implicitRelative, true);
        var matchAnyContext = addCombinator(function(value) {
          return indexOf(checkContext, value) > -1;
        }, implicitRelative, true);
        /** @type {!Array} */
        var matchers = [function(elem, context, xml) {
          var r = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
          return checkContext = null, r;
        }];
        for (; i < len; i++) {
          if (e = Expr.relative[tokens[i].type]) {
            /** @type {!Array} */
            matchers = [addCombinator(elementMatcher(matchers), e)];
          } else {
            if (e = Expr.filter[tokens[i].type].apply(null, tokens[i].matches), e[expando]) {
              /** @type {number} */
              j = ++i;
              for (; j < len && !Expr.relative[tokens[j].type]; j++) {
              }
              return parse(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                value : " " === tokens[i - 2].type ? "*" : ""
              })).replace(rtrim, "$1"), e, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
            }
            matchers.push(e);
          }
        }
        return elementMatcher(matchers);
      }
      /**
       * @param {!Array} elementMatchers
       * @param {!Array} setMatchers
       * @return {?}
       */
      function matcherFromGroupMatchers(elementMatchers, setMatchers) {
        /** @type {boolean} */
        var bySet = setMatchers.length > 0;
        /** @type {boolean} */
        var byElement = elementMatchers.length > 0;
        /**
         * @param {!Function} seed
         * @param {string} context
         * @param {number} xml
         * @param {!Object} results
         * @param {!Object} outermost
         * @return {?}
         */
        var superMatcher = function(seed, context, xml, results, outermost) {
          var elem;
          var j;
          var matcher;
          /** @type {number} */
          var matchedCount = 0;
          /** @type {string} */
          var i = "0";
          var unmatched = seed && [];
          /** @type {!Array} */
          var data = [];
          var contextBackup = outermostContext;
          var elems = seed || byElement && Expr.find.TAG("*", outermost);
          var dirrunsUnique = dirruns = dirruns + (null == contextBackup ? 1 : Math.random() || .1);
          var length = elems.length;
          if (outermost) {
            outermostContext = context === document || context || outermost;
          }
          for (; i !== length && null != (elem = elems[i]); i++) {
            if (byElement && elem) {
              /** @type {number} */
              j = 0;
              if (!(context || elem.ownerDocument === document)) {
                setDocument(elem);
                /** @type {boolean} */
                xml = !documentIsHTML;
              }
              for (; matcher = elementMatchers[j++];) {
                if (matcher(elem, context || document, xml)) {
                  results.push(elem);
                  break;
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
              }
            }
            if (bySet) {
              if (elem = !matcher && elem) {
                matchedCount--;
              }
              if (seed) {
                unmatched.push(elem);
              }
            }
          }
          if (matchedCount = matchedCount + i, bySet && i !== matchedCount) {
            /** @type {number} */
            j = 0;
            for (; matcher = setMatchers[j++];) {
              matcher(unmatched, data, context, xml);
            }
            if (seed) {
              if (matchedCount > 0) {
                for (; i--;) {
                  if (!(unmatched[i] || data[i])) {
                    data[i] = pop.call(results);
                  }
                }
              }
              data = get(data);
            }
            push.apply(results, data);
            if (outermost && !seed && data.length > 0 && matchedCount + setMatchers.length > 1) {
              Sizzle.uniqueSort(results);
            }
          }
          return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched;
        };
        return bySet ? markFunction(superMatcher) : superMatcher;
      }
      var i;
      var support;
      var Expr;
      var _getText;
      var isXML;
      var tokenize;
      var compile;
      var select;
      var outermostContext;
      var sortInput;
      var stability;
      var setDocument;
      var document;
      var target;
      var documentIsHTML;
      var rbuggyQSA;
      var options;
      var matches;
      var contains;
      /** @type {string} */
      var expando = "sizzle" + 1 * new Date;
      var preferredDoc = window.document;
      /** @type {number} */
      var dirruns = 0;
      /** @type {number} */
      var done = 0;
      var classCache = createCache();
      var tokenCache = createCache();
      var compilerCache = createCache();
      /**
       * @param {?} type
       * @param {?} uuid
       * @return {?}
       */
      var event = function(type, uuid) {
        return type === uuid && (stability = true), 0;
      };
      /** @type {function(this:Object, *): boolean} */
      var hasOwn = {}.hasOwnProperty;
      /** @type {!Array} */
      var arr = [];
      /** @type {function(this:IArrayLike<T>): T} */
      var pop = arr.pop;
      /** @type {function(this:IArrayLike<T>, ...T): number} */
      var j = arr.push;
      /** @type {function(this:IArrayLike<T>, ...T): number} */
      var push = arr.push;
      /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
      var slice = arr.slice;
      /**
       * @param {string} list
       * @param {!Object} value
       * @return {?}
       */
      var indexOf = function(list, value) {
        /** @type {number} */
        var i = 0;
        var listLength = list.length;
        for (; i < listLength; i++) {
          if (list[i] === value) {
            return i;
          }
        }
        return -1;
      };
      /** @type {string} */
      var direction = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
      /** @type {string} */
      var _test = "[\\x20\\t\\r\\n\\f]";
      /** @type {string} */
      var escRightBracket = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+";
      /** @type {string} */
      var _end2 = "\\[" + _test + "*(" + escRightBracket + ")(?:" + _test + "*([*^$|!~]?=)" + _test + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + escRightBracket + "))|)" + _test + "*\\]";
      /** @type {string} */
      var el = ":(" + escRightBracket + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _end2 + ")*)|.*)\\)|)";
      /** @type {!RegExp} */
      var entityEscapeRegExp = new RegExp(_test + "+", "g");
      /** @type {!RegExp} */
      var rtrim = new RegExp("^" + _test + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _test + "+$", "g");
      /** @type {!RegExp} */
      var chunker = new RegExp("^" + _test + "*," + _test + "*");
      /** @type {!RegExp} */
      var rcomma = new RegExp("^" + _test + "*([>+~]|" + _test + ")" + _test + "*");
      /** @type {!RegExp} */
      var rattributeQuotes = new RegExp("=" + _test + "*([^\\]'\"]*?)" + _test + "*\\]", "g");
      /** @type {!RegExp} */
      var rpseudo = new RegExp(el);
      /** @type {!RegExp} */
      var ridentifier = new RegExp("^" + escRightBracket + "$");
      var matchExpr = {
        ID : new RegExp("^#(" + escRightBracket + ")"),
        CLASS : new RegExp("^\\.(" + escRightBracket + ")"),
        TAG : new RegExp("^(" + escRightBracket + "|[*])"),
        ATTR : new RegExp("^" + _end2),
        PSEUDO : new RegExp("^" + el),
        CHILD : new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _test + "*(even|odd|(([+-]|)(\\d*)n|)" + _test + "*(?:([+-]|)" + _test + "*(\\d+)|))" + _test + "*\\)|)", "i"),
        bool : new RegExp("^(?:" + direction + ")$", "i"),
        needsContext : new RegExp("^" + _test + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _test + "*((?:-\\d)?\\d*)" + _test + "*\\)|)(?=[^-]|$)", "i")
      };
      /** @type {!RegExp} */
      var inputNodeNames = /^(?:input|select|textarea|button)$/i;
      /** @type {!RegExp} */
      var rnoType = /^h\d$/i;
      /** @type {!RegExp} */
      var rnative = /^[^{]+\{\s*\[native \w/;
      /** @type {!RegExp} */
      var customSelectorReg = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
      /** @type {!RegExp} */
      var $ = /[+~]/;
      /** @type {!RegExp} */
      var index = new RegExp("\\\\([\\da-f]{1,6}" + _test + "?|(" + _test + ")|.)", "ig");
      /**
       * @param {?} _
       * @param {string} escaped
       * @param {boolean} escapedWhitespace
       * @return {?}
       */
      var value = function(_, escaped, escapedWhitespace) {
        /** @type {number} */
        var high = "0x" + escaped - 65536;
        return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320);
      };
      /** @type {!RegExp} */
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
      /**
       * @param {string} key
       * @param {string} val
       * @return {?}
       */
      var fcssescape = function(key, val) {
        return val ? "\x00" === key ? "\ufffd" : key.slice(0, -1) + "\\" + key.charCodeAt(key.length - 1).toString(16) + " " : "\\" + key;
      };
      /**
       * @return {undefined}
       */
      var fn = function() {
        setDocument();
      };
      var disabledAncestor = addCombinator(function(elem) {
        return elem.disabled === true && ("form" in elem || "label" in elem);
      }, {
        dir : "parentNode",
        next : "legend"
      });
      try {
        push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
        arr[preferredDoc.childNodes.length].nodeType;
      } catch (t) {
        push = {
          apply : arr.length ? function(value, name) {
            j.apply(value, slice.call(name));
          } : function(value, name) {
            var j = value.length;
            /** @type {number} */
            var curPos = 0;
            for (; value[j++] = name[curPos++];) {
            }
            /** @type {number} */
            value.length = j - 1;
          }
        };
      }
      support = Sizzle.support = {};
      /** @type {function(!Object): ?} */
      isXML = Sizzle.isXML = function(elem) {
        var documentElement = elem && (elem.ownerDocument || elem).documentElement;
        return !!documentElement && "HTML" !== documentElement.nodeName;
      };
      /** @type {function(!Element): ?} */
      setDocument = Sizzle.setDocument = function(node) {
        var e;
        var subWindow;
        var doc = node ? node.ownerDocument || node : preferredDoc;
        return doc !== document && 9 === doc.nodeType && doc.documentElement ? (document = doc, target = document.documentElement, documentIsHTML = !isXML(document), preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow && (subWindow.addEventListener ? subWindow.addEventListener("unload", fn, false) : subWindow.attachEvent && subWindow.attachEvent("onunload", fn)), support.attributes =
        assert(function(elm) {
          return elm.className = "i", !elm.getAttribute("className");
        }), support.getElementsByTagName = assert(function(testee) {
          return testee.appendChild(document.createComment("")), !testee.getElementsByTagName("*").length;
        }), support.getElementsByClassName = rnative.test(document.getElementsByClassName), support.getById = assert(function(fields) {
          return target.appendChild(fields).id = expando, !document.getElementsByName || !document.getElementsByName(expando).length;
        }), support.getById ? (Expr.filter.ID = function(elem) {
          var pos = elem.replace(index, value);
          return function(t) {
            return t.getAttribute("id") === pos;
          };
        }, Expr.find.ID = function(elem, context) {
          if ("undefined" != typeof context.getElementById && documentIsHTML) {
            var c_style = context.getElementById(elem);
            return c_style ? [c_style] : [];
          }
        }) : (Expr.filter.ID = function(elem) {
          var s = elem.replace(index, value);
          return function(elem) {
            var result = "undefined" != typeof elem.getAttributeNode && elem.getAttributeNode("id");
            return result && result.value === s;
          };
        }, Expr.find.ID = function(name, context) {
          if ("undefined" != typeof context.getElementById && documentIsHTML) {
            var item;
            var i;
            var args;
            var m = context.getElementById(name);
            if (m) {
              if (item = m.getAttributeNode("id"), item && item.value === name) {
                return [m];
              }
              args = context.getElementsByName(name);
              /** @type {number} */
              i = 0;
              for (; m = args[i++];) {
                if (item = m.getAttributeNode("id"), item && item.value === name) {
                  return [m];
                }
              }
            }
            return [];
          }
        }), Expr.find.TAG = support.getElementsByTagName ? function(v, e) {
          return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(v) : support.qsa ? e.querySelectorAll(v) : void 0;
        } : function(selector, document) {
          var value;
          /** @type {!Array} */
          var compare = [];
          /** @type {number} */
          var i = 0;
          var results = document.getElementsByTagName(selector);
          if ("*" === selector) {
            for (; value = results[i++];) {
              if (1 === value.nodeType) {
                compare.push(value);
              }
            }
            return compare;
          }
          return results;
        }, Expr.find.CLASS = support.getElementsByClassName && function(name, titleDiv) {
          if ("undefined" != typeof titleDiv.getElementsByClassName && documentIsHTML) {
            return titleDiv.getElementsByClassName(name);
          }
        }, options = [], rbuggyQSA = [], (support.qsa = rnative.test(document.querySelectorAll)) && (assert(function(frag) {
          /** @type {string} */
          target.appendChild(frag).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
          if (frag.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + _test + "*(?:''|\"\")");
          }
          if (!frag.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + _test + "*(?:value|" + direction + ")");
          }
          if (!frag.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          }
          if (!frag.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
          if (!frag.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        }), assert(function(box) {
          /** @type {string} */
          box.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          box.appendChild(input).setAttribute("name", "D");
          if (box.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + _test + "*[*^$|!~]?=");
          }
          if (2 !== box.querySelectorAll(":enabled").length) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          /** @type {boolean} */
          target.appendChild(box).disabled = true;
          if (2 !== box.querySelectorAll(":disabled").length) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          box.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        })), (support.matchesSelector = rnative.test(matches = target.matches || target.webkitMatchesSelector || target.mozMatchesSelector || target.oMatchesSelector || target.msMatchesSelector)) && assert(function(div) {
          support.disconnectedMatch = matches.call(div, "*");
          matches.call(div, "[s!='']:x");
          options.push("!=", el);
        }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), options = options.length && new RegExp(options.join("|")), e = rnative.test(target.compareDocumentPosition), contains = e || rnative.test(target.contains) ? function(a, b) {
          var adown = 9 === a.nodeType ? a.documentElement : a;
          var bup = b && b.parentNode;
          return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)));
        } : function(a, b) {
          if (b) {
            for (; b = b.parentNode;) {
              if (b === a) {
                return true;
              }
            }
          }
          return false;
        }, event = e ? function(a, b) {
          if (a === b) {
            return stability = true, 0;
          }
          /** @type {number} */
          var idx = !a.compareDocumentPosition - !b.compareDocumentPosition;
          return idx ? idx : (idx = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & idx || !support.sortDetached && b.compareDocumentPosition(a) === idx ? a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === document || b.ownerDocument ===
          preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & idx ? -1 : 1);
        } : function(a, b) {
          if (a === b) {
            return stability = true, 0;
          }
          var cur;
          /** @type {number} */
          var i = 0;
          var aup = a.parentNode;
          var bup = b.parentNode;
          /** @type {!Array} */
          var ap = [a];
          /** @type {!Array} */
          var bp = [b];
          if (!aup || !bup) {
            return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
          }
          if (aup === bup) {
            return siblingCheck(a, b);
          }
          /** @type {!Object} */
          cur = a;
          for (; cur = cur.parentNode;) {
            ap.unshift(cur);
          }
          /** @type {!Object} */
          cur = b;
          for (; cur = cur.parentNode;) {
            bp.unshift(cur);
          }
          for (; ap[i] === bp[i];) {
            i++;
          }
          return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
        }, document) : document;
      };
      /**
       * @param {boolean} expr
       * @param {!Array} set
       * @return {?}
       */
      Sizzle.matches = function(expr, set) {
        return Sizzle(expr, null, null, set);
      };
      /**
       * @param {!Object} elem
       * @param {string} expr
       * @return {?}
       */
      Sizzle.matchesSelector = function(elem, expr) {
        if ((elem.ownerDocument || elem) !== document && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']"), support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!options || !options.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
          try {
            var ret = matches.call(elem, expr);
            if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) {
              return ret;
            }
          } catch (t) {
          }
        }
        return Sizzle(expr, document, null, [elem]).length > 0;
      };
      /**
       * @param {!HTMLElement} context
       * @param {!Object} item
       * @return {?}
       */
      Sizzle.contains = function(context, item) {
        return (context.ownerDocument || context) !== document && setDocument(context), contains(context, item);
      };
      /**
       * @param {!Object} elem
       * @param {!Object} name
       * @return {?}
       */
      Sizzle.attr = function(elem, name) {
        if ((elem.ownerDocument || elem) !== document) {
          setDocument(elem);
        }
        var fn = Expr.attrHandle[name.toLowerCase()];
        var val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
        return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
      };
      /**
       * @param {string} text
       * @return {?}
       */
      Sizzle.escape = function(text) {
        return (text + "").replace(rcssescape, fcssescape);
      };
      /**
       * @param {!Object} value
       * @return {?}
       */
      Sizzle.error = function(value) {
        throw new Error("Syntax error, unrecognized expression: " + value);
      };
      /**
       * @param {!Object} results
       * @return {?}
       */
      Sizzle.uniqueSort = function(results) {
        var item;
        /** @type {!Array} */
        var result = [];
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var index = 0;
        if (stability = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), results.sort(event), stability) {
          for (; item = results[index++];) {
            if (item === results[index]) {
              /** @type {number} */
              i = result.push(index);
            }
          }
          for (; i--;) {
            results.splice(result[i], 1);
          }
        }
        return sortInput = null, results;
      };
      /** @type {function(!Object): ?} */
      _getText = Sizzle.getText = function(node) {
        var parent;
        /** @type {string} */
        var txt = "";
        /** @type {number} */
        var count = 0;
        var type = node.nodeType;
        if (type) {
          if (1 === type || 9 === type || 11 === type) {
            if ("string" == typeof node.textContent) {
              return node.textContent;
            }
            node = node.firstChild;
            for (; node; node = node.nextSibling) {
              txt = txt + _getText(node);
            }
          } else {
            if (3 === type || 4 === type) {
              return node.nodeValue;
            }
          }
        } else {
          for (; parent = node[count++];) {
            txt = txt + _getText(parent);
          }
        }
        return txt;
      };
      Expr = Sizzle.selectors = {
        cacheLength : 50,
        createPseudo : markFunction,
        match : matchExpr,
        attrHandle : {},
        find : {},
        relative : {
          ">" : {
            dir : "parentNode",
            first : true
          },
          " " : {
            dir : "parentNode"
          },
          "+" : {
            dir : "previousSibling",
            first : true
          },
          "~" : {
            dir : "previousSibling"
          }
        },
        preFilter : {
          ATTR : function(result) {
            return result[1] = result[1].replace(index, value), result[3] = (result[3] || result[4] || result[5] || "").replace(index, value), "~=" === result[2] && (result[3] = " " + result[3] + " "), result.slice(0, 4);
          },
          CHILD : function(match) {
            return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match;
          },
          PSEUDO : function(match) {
            var excess;
            var unquoted = !match[6] && match[2];
            return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3));
          }
        },
        filter : {
          TAG : function(elem) {
            var nodeName = elem.replace(index, value).toLowerCase();
            return "*" === elem ? function() {
              return true;
            } : function(elem) {
              return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
            };
          },
          CLASS : function(className) {
            var pattern = classCache[className + " "];
            return pattern || (pattern = new RegExp("(^|" + _test + ")" + className + "(" + _test + "|$)")) && classCache(className, function(t) {
              return pattern.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "");
            });
          },
          ATTR : function(name, string, value) {
            return function(elem) {
              var key = Sizzle.attr(elem, name);
              return null == key ? "!=" === string : !string || (key = key + "", "=" === string ? key === value : "!=" === string ? key !== value : "^=" === string ? value && 0 === key.indexOf(value) : "*=" === string ? value && key.indexOf(value) > -1 : "$=" === string ? value && key.slice(-value.length) === value : "~=" === string ? (" " +
              key.replace(entityEscapeRegExp, " ") + " ").indexOf(value) > -1 : "|=" === string && (key === value || key.slice(0, value.length + 1) === value + "-"));
            };
          },
          CHILD : function(type, what, argument, first, last) {
            /** @type {boolean} */
            var simple = "nth" !== type.slice(0, 3);
            /** @type {boolean} */
            var forward = "last" !== type.slice(-4);
            /** @type {boolean} */
            var isStrict = "of-type" === what;
            return 1 === first && 0 === last ? function(tplDiv) {
              return !!tplDiv.parentNode;
            } : function(elem, i, isParentStrict) {
              var cache;
              var uniqueCache;
              var outerCache;
              var node;
              var nodeIndex;
              var start;
              /** @type {string} */
              var dir = simple !== forward ? "nextSibling" : "previousSibling";
              var parent = elem.parentNode;
              var iteratedVal = isStrict && elem.nodeName.toLowerCase();
              /** @type {boolean} */
              var useCache = !isParentStrict && !isStrict;
              /** @type {boolean} */
              var diff = false;
              if (parent) {
                if (simple) {
                  for (; dir;) {
                    /** @type {!Node} */
                    node = elem;
                    for (; node = node[dir];) {
                      if (isStrict ? node.nodeName.toLowerCase() === iteratedVal : 1 === node.nodeType) {
                        return false;
                      }
                    }
                    /** @type {(boolean|string)} */
                    start = dir = "only" === type && !start && "nextSibling";
                  }
                  return true;
                }
                if (start = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                  node = parent;
                  outerCache = node[expando] || (node[expando] = {});
                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex && cache[2];
                  node = nodeIndex && parent.childNodes[nodeIndex];
                  for (; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();) {
                    if (1 === node.nodeType && ++diff && node === elem) {
                      /** @type {!Array} */
                      uniqueCache[type] = [dirruns, nodeIndex, diff];
                      break;
                    }
                  }
                } else {
                  if (useCache && (node = elem, outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), cache = uniqueCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex), diff === false) {
                    for (; (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((isStrict ? node.nodeName.toLowerCase() !== iteratedVal : 1 !== node.nodeType) || !++diff || (useCache && (outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), uniqueCache[type] = [dirruns,
                    diff]), node !== elem));) {
                    }
                  }
                }
                return diff = diff - last, diff === first || diff % first === 0 && diff / first >= 0;
              }
            };
          },
          PSEUDO : function(pseudo, argument) {
            var args;
            var fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
            return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
              var idx;
              var matched = fn(seed, argument);
              var i = matched.length;
              for (; i--;) {
                idx = indexOf(seed, matched[i]);
                /** @type {boolean} */
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function(responce) {
              return fn(responce, 0, args);
            }) : fn;
          }
        },
        pseudos : {
          not : markFunction(function(selector) {
            /** @type {!Array} */
            var a = [];
            /** @type {!Array} */
            var results = [];
            var matcher = compile(selector.replace(rtrim, "$1"));
            return matcher[expando] ? markFunction(function(a, leftbuffer, i, context) {
              var value;
              var result = matcher(a, null, context, []);
              var i = a.length;
              for (; i--;) {
                if (value = result[i]) {
                  /** @type {boolean} */
                  a[i] = !(leftbuffer[i] = value);
                }
              }
            }) : function(sNewObjName, n, context) {
              return a[0] = sNewObjName, matcher(a, null, context, results), a[0] = null, !results.pop();
            };
          }),
          has : markFunction(function(selector) {
            return function(elem) {
              return Sizzle(selector, elem).length > 0;
            };
          }),
          contains : markFunction(function(code) {
            return code = code.replace(index, value), function(e) {
              return (e.textContent || e.innerText || _getText(e)).indexOf(code) > -1;
            };
          }),
          lang : markFunction(function(lang) {
            return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(index, value).toLowerCase(), function(elem) {
              var elemLang;
              do {
                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                  return elemLang = elemLang.toLowerCase(), elemLang === lang || 0 === elemLang.indexOf(lang + "-");
                }
              } while ((elem = elem.parentNode) && 1 === elem.nodeType);
              return false;
            };
          }),
          target : function(value) {
            var charListNotLatin = window.location && window.location.hash;
            return charListNotLatin && charListNotLatin.slice(1) === value.id;
          },
          root : function(val) {
            return val === target;
          },
          focus : function(value) {
            return value === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(value.type || value.href || ~value.tabIndex);
          },
          enabled : createDisabledPseudo(false),
          disabled : createDisabledPseudo(true),
          checked : function(elem) {
            var custom = elem.nodeName.toLowerCase();
            return "input" === custom && !!elem.checked || "option" === custom && !!elem.selected;
          },
          selected : function(elem) {
            return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === true;
          },
          empty : function(elem) {
            elem = elem.firstChild;
            for (; elem; elem = elem.nextSibling) {
              if (elem.nodeType < 6) {
                return false;
              }
            }
            return true;
          },
          parent : function(elem) {
            return !Expr.pseudos.empty(elem);
          },
          header : function(elem) {
            return rnoType.test(elem.nodeName);
          },
          input : function(target) {
            return inputNodeNames.test(target.nodeName);
          },
          button : function(elem) {
            var left = elem.nodeName.toLowerCase();
            return "input" === left && "button" === elem.type || "button" === left;
          },
          text : function(elem) {
            var EXT;
            return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (EXT = elem.getAttribute("type")) || "text" === EXT.toLowerCase());
          },
          first : createPositionalPseudo(function() {
            return [0];
          }),
          last : createPositionalPseudo(function(canCreateDiscussions, isSlidingUp) {
            return [isSlidingUp - 1];
          }),
          eq : createPositionalPseudo(function(canCreateDiscussions, pageHeight, srcY) {
            return [srcY < 0 ? srcY + pageHeight : srcY];
          }),
          even : createPositionalPseudo(function(allSwitches, plays) {
            /** @type {number} */
            var s = 0;
            for (; s < plays; s = s + 2) {
              allSwitches.push(s);
            }
            return allSwitches;
          }),
          odd : createPositionalPseudo(function(allSwitches, plays) {
            /** @type {number} */
            var s = 1;
            for (; s < plays; s = s + 2) {
              allSwitches.push(s);
            }
            return allSwitches;
          }),
          lt : createPositionalPseudo(function(keys, j, i) {
            var name = i < 0 ? i + j : i;
            for (; --name >= 0;) {
              keys.push(name);
            }
            return keys;
          }),
          gt : createPositionalPseudo(function(t, length, i) {
            var j = i < 0 ? i + length : i;
            for (; ++j < length;) {
              t.push(j);
            }
            return t;
          })
        }
      };
      Expr.pseudos.nth = Expr.pseudos.eq;
      for (i in{
        radio : true,
        checkbox : true,
        file : true,
        password : true,
        image : true
      }) {
        Expr.pseudos[i] = jQuerify(i);
      }
      for (i in{
        submit : true,
        reset : true
      }) {
        Expr.pseudos[i] = createButtonPseudo(i);
      }
      return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function(selector, parseOnly) {
        var matched;
        var match;
        var tokens;
        var type;
        var soFar;
        var groups;
        var preFilters;
        var cached = tokenCache[selector + " "];
        if (cached) {
          return parseOnly ? 0 : cached.slice(0);
        }
        /** @type {!Object} */
        soFar = selector;
        /** @type {!Array} */
        groups = [];
        preFilters = Expr.preFilter;
        for (; soFar;) {
          if (!(matched && !(match = chunker.exec(soFar)))) {
            if (match) {
              soFar = soFar.slice(match[0].length) || soFar;
            }
            groups.push(tokens = []);
          }
          /** @type {boolean} */
          matched = false;
          if (match = rcomma.exec(soFar)) {
            /** @type {string} */
            matched = match.shift();
            tokens.push({
              value : matched,
              type : match[0].replace(rtrim, " ")
            });
            soFar = soFar.slice(matched.length);
          }
          for (type in Expr.filter) {
            if (!(!(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)))) {
              matched = match.shift();
              tokens.push({
                value : matched,
                type : type,
                matches : match
              });
              soFar = soFar.slice(matched.length);
            }
          }
          if (!matched) {
            break;
          }
        }
        return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
      }, compile = Sizzle.compile = function(selector, group) {
        var i;
        /** @type {!Array} */
        var setMatchers = [];
        /** @type {!Array} */
        var elementMatchers = [];
        var cached = compilerCache[selector + " "];
        if (!cached) {
          if (!group) {
            group = tokenize(selector);
          }
          i = group.length;
          for (; i--;) {
            cached = matcherFromTokens(group[i]);
            if (cached[expando]) {
              setMatchers.push(cached);
            } else {
              elementMatchers.push(cached);
            }
          }
          cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
          /** @type {string} */
          cached.selector = selector;
        }
        return cached;
      }, select = Sizzle.select = function(selector, context, value, seed) {
        var i;
        var tokens;
        var token;
        var type;
        var find;
        /** @type {(!Function|boolean)} */
        var compiled = "function" == typeof selector && selector;
        var match = !seed && tokenize(selector = compiled.selector || selector);
        if (value = value || [], 1 === match.length) {
          if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && "ID" === (token = tokens[0]).type && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
            if (context = (Expr.find.ID(token.matches[0].replace(index, value), context) || [])[0], !context) {
              return value;
            }
            if (compiled) {
              context = context.parentNode;
            }
            selector = selector.slice(tokens.shift().value.length);
          }
          i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
          for (; i-- && (token = tokens[i], !Expr.relative[type = token.type]);) {
            if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(index, value), $.test(tokens[0].type) && testContext(context.parentNode) || context))) {
              if (tokens.splice(i, 1), selector = seed.length && toSelector(tokens), !selector) {
                return push.apply(value, seed), value;
              }
              break;
            }
          }
        }
        return (compiled || compile(selector, match))(seed, context, !documentIsHTML, value, !context || $.test(selector) && testContext(context.parentNode) || context), value;
      }, support.sortStable = expando.split("").sort(event).join("") === expando, support.detectDuplicates = !!stability, setDocument(), support.sortDetached = assert(function(html) {
        return 1 & html.compareDocumentPosition(document.createElement("fieldset"));
      }), assert(function(aItem) {
        return aItem.innerHTML = "<a href='#'></a>", "#" === aItem.firstChild.getAttribute("href");
      }) || addHandle("type|href|height|width", function(t, e, i) {
        if (!i) {
          return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }
      }), support.attributes && assert(function(aItem) {
        return aItem.innerHTML = "<input/>", aItem.firstChild.setAttribute("value", ""), "" === aItem.firstChild.getAttribute("value");
      }) || addHandle("value", function(src, canCreateDiscussions, i) {
        if (!i && "input" === src.nodeName.toLowerCase()) {
          return src.defaultValue;
        }
      }), assert(function(t) {
        return null == t.getAttribute("disabled");
      }) || addHandle(direction, function(elem, name, i) {
        var val;
        if (!i) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      }), Sizzle;
    }(window);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    jQuery.escapeSelector = Sizzle.escape;
    /**
     * @param {!Object} b
     * @param {string} prop
     * @param {?} item
     * @return {?}
     */
    var dir = function(b, prop, item) {
      /** @type {!Array} */
      var exports = [];
      /** @type {boolean} */
      var key = void 0 !== item;
      for (; (b = b[prop]) && 9 !== b.nodeType;) {
        if (1 === b.nodeType) {
          if (key && jQuery(b).is(item)) {
            break;
          }
          exports.push(b);
        }
      }
      return exports;
    };
    /**
     * @param {!Object} node
     * @param {!Object} elem
     * @return {?}
     */
    var _sibling = function(node, elem) {
      /** @type {!Array} */
      var result = [];
      for (; node; node = node.nextSibling) {
        if (1 === node.nodeType && node !== elem) {
          result.push(node);
        }
      }
      return result;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    /** @type {!RegExp} */
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    /** @type {!RegExp} */
    var touchSystem = /^.[^:#\[\.,]*$/;
    /**
     * @param {!Object} value
     * @param {!Object} name
     * @param {string} data
     * @return {?}
     */
    jQuery.filter = function(value, name, data) {
      var elem = name[0];
      return data && (value = ":not(" + value + ")"), 1 === name.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, value) ? [elem] : [] : jQuery.find.matches(value, jQuery.grep(name, function(nodeToInspect) {
        return 1 === nodeToInspect.nodeType;
      }));
    };
    jQuery.fn.extend({
      find : function(name) {
        var i;
        var ret;
        var len = this.length;
        var self = this;
        if ("string" != typeof name) {
          return this.pushStack(jQuery(name).filter(function() {
            /** @type {number} */
            i = 0;
            for (; i < len; i++) {
              if (jQuery.contains(self[i], this)) {
                return true;
              }
            }
          }));
        }
        ret = this.pushStack([]);
        /** @type {number} */
        i = 0;
        for (; i < len; i++) {
          jQuery.find(name, self[i], ret);
        }
        return len > 1 ? jQuery.uniqueSort(ret) : ret;
      },
      filter : function(value) {
        return this.pushStack(winnow(this, value || [], false));
      },
      not : function(selector) {
        return this.pushStack(winnow(this, selector || [], true));
      },
      is : function(arg) {
        return !!winnow(this, "string" == typeof arg && rneedsContext.test(arg) ? jQuery(arg) : arg || [], false).length;
      }
    });
    var rootjQuery;
    /** @type {!RegExp} */
    var customSelectorReg = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    /** @type {function(!Object, !Object, !Object): ?} */
    var init = jQuery.fn.init = function(selector, context, root) {
      var match;
      var r;
      if (!selector) {
        return this;
      }
      if (root = root || rootjQuery, "string" == typeof selector) {
        if (match = "<" === selector[0] && ">" === selector[selector.length - 1] && selector.length >= 3 ? [null, selector, null] : customSelectorReg.exec(selector), !match || !match[1] && context) {
          return !context || context.jquery ? (context || root).find(selector) : this.constructor(context).find(selector);
        }
        if (match[1]) {
          if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              if (jQuery.isFunction(this[match])) {
                this[match](context[match]);
              } else {
                this.attr(match, context[match]);
              }
            }
          }
          return this;
        }
        return r = document.getElementById(match[2]), r && (this[0] = r, this.length = 1), this;
      }
      return selector.nodeType ? (this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? void 0 !== root.ready ? root.ready(selector) : selector(jQuery) : jQuery.makeArray(selector, this);
    };
    init.prototype = jQuery.fn;
    rootjQuery = jQuery(document);
    /** @type {!RegExp} */
    var testRxp = /^(?:parents|prev(?:Until|All))/;
    var guaranteedUnique = {
      children : true,
      contents : true,
      next : true,
      prev : true
    };
    jQuery.fn.extend({
      has : function(name) {
        var targets = jQuery(name, this);
        var l = targets.length;
        return this.filter(function() {
          /** @type {number} */
          var i = 0;
          for (; i < l; i++) {
            if (jQuery.contains(this, targets[i])) {
              return true;
            }
          }
        });
      },
      closest : function(selector, context) {
        var node;
        /** @type {number} */
        var j = 0;
        var i = this.length;
        /** @type {!Array} */
        var ret = [];
        var s = "string" != typeof selector && jQuery(selector);
        if (!rneedsContext.test(selector)) {
          for (; j < i; j++) {
            node = this[j];
            for (; node && node !== context; node = node.parentNode) {
              if (node.nodeType < 11 && (s ? s.index(node) > -1 : 1 === node.nodeType && jQuery.find.matchesSelector(node, selector))) {
                ret.push(node);
                break;
              }
            }
          }
        }
        return this.pushStack(ret.length > 1 ? jQuery.uniqueSort(ret) : ret);
      },
      index : function(elem) {
        return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add : function(elem, data) {
        return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(elem, data))));
      },
      addBack : function(selector) {
        return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
      }
    });
    jQuery.each({
      parent : function(elem) {
        var parent = elem.parentNode;
        return parent && 11 !== parent.nodeType ? parent : null;
      },
      parents : function(node) {
        return dir(node, "parentNode");
      },
      parentsUntil : function(node, i, elem) {
        return dir(node, "parentNode", elem);
      },
      next : function(value) {
        return walk(value, "nextSibling");
      },
      prev : function(name) {
        return walk(name, "previousSibling");
      },
      nextAll : function(elem) {
        return dir(elem, "nextSibling");
      },
      prevAll : function(elem) {
        return dir(elem, "previousSibling");
      },
      nextUntil : function(node, i, elem) {
        return dir(node, "nextSibling", elem);
      },
      prevUntil : function(node, i, elem) {
        return dir(node, "previousSibling", elem);
      },
      siblings : function(elem) {
        return _sibling((elem.parentNode || {}).firstChild, elem);
      },
      children : function(elem) {
        return _sibling(elem.firstChild);
      },
      contents : function(elem) {
        return elem.contentDocument || jQuery.merge([], elem.childNodes);
      }
    }, function(name, e) {
      /**
       * @param {string} s
       * @param {!Object} string
       * @return {?}
       */
      jQuery.fn[name] = function(s, string) {
        var data = jQuery.map(this, e, s);
        return "Until" !== name.slice(-5) && (string = s), string && "string" == typeof string && (data = jQuery.filter(string, data)), this.length > 1 && (guaranteedUnique[name] || jQuery.uniqueSort(data), testRxp.test(name) && data.reverse()), this.pushStack(data);
      };
    });
    /** @type {!RegExp} */
    var re = /[^\x20\t\r\n\f]+/g;
    /**
     * @param {string} options
     * @return {?}
     */
    jQuery.Callbacks = function(options) {
      options = "string" == typeof options ? extend(options) : jQuery.extend({}, options);
      var costSum;
      var p;
      var gasSum;
      var locked;
      /** @type {!Array} */
      var list = [];
      /** @type {!Array} */
      var queue = [];
      /** @type {number} */
      var firingIndex = -1;
      /**
       * @return {undefined}
       */
      var fire = function() {
        locked = options.once;
        /** @type {boolean} */
        gasSum = costSum = true;
        for (; queue.length; firingIndex = -1) {
          p = queue.shift();
          for (; ++firingIndex < list.length;) {
            if (list[firingIndex].apply(p[0], p[1]) === false && options.stopOnFalse) {
              firingIndex = list.length;
              /** @type {boolean} */
              p = false;
            }
          }
        }
        if (!options.memory) {
          /** @type {boolean} */
          p = false;
        }
        /** @type {boolean} */
        costSum = false;
        if (locked) {
          /** @type {(Array|string)} */
          list = p ? [] : "";
        }
      };
      var self = {
        add : function() {
          return list && (p && !costSum && (firingIndex = list.length - 1, queue.push(p)), function add(callback) {
            jQuery.each(callback, function(i, name) {
              if (jQuery.isFunction(name)) {
                if (!(options.unique && self.has(name))) {
                  list.push(name);
                }
              } else {
                if (name && name.length && "string" !== jQuery.type(name)) {
                  add(name);
                }
              }
            });
          }(arguments), p && !costSum && fire()), this;
        },
        remove : function() {
          return jQuery.each(arguments, function(canCreateDiscussions, e) {
            var index;
            for (; (index = jQuery.inArray(e, list, index)) > -1;) {
              list.splice(index, 1);
              if (index <= firingIndex) {
                firingIndex--;
              }
            }
          }), this;
        },
        has : function(type) {
          return type ? jQuery.inArray(type, list) > -1 : list.length > 0;
        },
        empty : function() {
          return list && (list = []), this;
        },
        disable : function() {
          return locked = queue = [], list = p = "", this;
        },
        disabled : function() {
          return !list;
        },
        lock : function() {
          return locked = queue = [], p || costSum || (list = p = ""), this;
        },
        locked : function() {
          return !!locked;
        },
        fireWith : function(context, args) {
          return locked || (args = args || [], args = [context, args.slice ? args.slice() : args], queue.push(args), costSum || fire()), this;
        },
        fire : function() {
          return self.fireWith(this, arguments), this;
        },
        fired : function() {
          return !!gasSum;
        }
      };
      return self;
    };
    jQuery.extend({
      Deferred : function(func) {
        /** @type {!Array} */
        var dragDropSelection = [["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]];
        /** @type {string} */
        var state = "pending";
        var promise = {
          state : function() {
            return state;
          },
          always : function() {
            return deferred.done(arguments).fail(arguments), this;
          },
          catch : function(fn) {
            return promise.then(null, fn);
          },
          pipe : function() {
            /** @type {!Arguments} */
            var values = arguments;
            return jQuery.Deferred(function(newDefer) {
              jQuery.each(dragDropSelection, function(i, tuple) {
                var fn = jQuery.isFunction(values[tuple[4]]) && values[tuple[4]];
                deferred[tuple[1]](function() {
                  var returned = fn && fn.apply(this, arguments);
                  if (returned && jQuery.isFunction(returned.promise)) {
                    returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                  } else {
                    newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                  }
                });
              });
              /** @type {null} */
              values = null;
            }).promise();
          },
          then : function(a, obj, value) {
            /**
             * @param {number} count
             * @param {!Object} i
             * @param {!Function} action
             * @param {boolean} x
             * @return {?}
             */
            function fn(count, i, action, x) {
              return function() {
                var d = this;
                /** @type {!Arguments} */
                var args = arguments;
                /**
                 * @return {undefined}
                 */
                var filter = function() {
                  var value;
                  var t;
                  if (!(count < n)) {
                    if (value = action.apply(d, args), value === i.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    t = value && ("object" == typeof value || "function" == typeof value) && value.then;
                    if (jQuery.isFunction(t)) {
                      if (x) {
                        t.call(value, fn(n, i, undefined, x), fn(n, i, C, x));
                      } else {
                        n++;
                        t.call(value, fn(n, i, undefined, x), fn(n, i, C, x), fn(n, i, undefined, i.notifyWith));
                      }
                    } else {
                      if (action !== undefined) {
                        d = void 0;
                        /** @type {!Array} */
                        args = [value];
                      }
                      (x || i.resolveWith)(d, args);
                    }
                  }
                };
                /** @type {function(): undefined} */
                var error = x ? filter : function() {
                  try {
                    filter();
                  } catch (context) {
                    if (jQuery.Deferred.exceptionHook) {
                      jQuery.Deferred.exceptionHook(context, error.stackTrace);
                    }
                    if (count + 1 >= n) {
                      if (action !== C) {
                        d = void 0;
                        /** @type {!Array} */
                        args = [context];
                      }
                      i.rejectWith(d, args);
                    }
                  }
                };
                if (count) {
                  error();
                } else {
                  if (jQuery.Deferred.getStackHook) {
                    error.stackTrace = jQuery.Deferred.getStackHook();
                  }
                  window.setTimeout(error);
                }
              };
            }
            /** @type {number} */
            var n = 0;
            return jQuery.Deferred(function(d) {
              dragDropSelection[0][3].add(fn(0, d, jQuery.isFunction(value) ? value : undefined, d.notifyWith));
              dragDropSelection[1][3].add(fn(0, d, jQuery.isFunction(a) ? a : undefined));
              dragDropSelection[2][3].add(fn(0, d, jQuery.isFunction(obj) ? obj : C));
            }).promise();
          },
          promise : function(value) {
            return null != value ? jQuery.extend(value, promise) : promise;
          }
        };
        var deferred = {};
        return jQuery.each(dragDropSelection, function(canCreateDiscussions, tuple) {
          var list = tuple[2];
          var stateString = tuple[5];
          promise[tuple[1]] = list.add;
          if (stateString) {
            list.add(function() {
              state = stateString;
            }, dragDropSelection[3 - canCreateDiscussions][2].disable, dragDropSelection[0][2].lock);
          }
          list.add(tuple[3].fire);
          /**
           * @return {?}
           */
          deferred[tuple[0]] = function() {
            return deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments), this;
          };
          deferred[tuple[0] + "With"] = list.fireWith;
        }), promise.promise(deferred), func && func.call(deferred, deferred), deferred;
      },
      when : function(value) {
        /** @type {number} */
        var sampleSize = arguments.length;
        var i = sampleSize;
        /** @type {!Array} */
        var elements = Array(i);
        /** @type {!Array<?>} */
        var args = slice.call(arguments);
        var d = jQuery.Deferred();
        /**
         * @param {undefined} i
         * @return {?}
         */
        var updateFn = function(i) {
          return function(value) {
            elements[i] = this;
            args[i] = arguments.length > 1 ? slice.call(arguments) : value;
            if (!--sampleSize) {
              d.resolveWith(elements, args);
            }
          };
        };
        if (sampleSize <= 1 && (when(value, d.done(updateFn(i)).resolve, d.reject), "pending" === d.state() || jQuery.isFunction(args[i] && args[i].then))) {
          return d.then();
        }
        for (; i--;) {
          when(args[i], updateFn(i), d.reject);
        }
        return d.promise();
      }
    });
    /** @type {!RegExp} */
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    /**
     * @param {!Object} error
     * @param {?} stack
     * @return {undefined}
     */
    jQuery.Deferred.exceptionHook = function(error, stack) {
      if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
        window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
      }
    };
    /**
     * @param {?} error
     * @return {undefined}
     */
    jQuery.readyException = function(error) {
      window.setTimeout(function() {
        throw error;
      });
    };
    var context = jQuery.Deferred();
    /**
     * @param {string} selector
     * @return {?}
     */
    jQuery.fn.ready = function(selector) {
      return context.then(selector).catch(function(t) {
        jQuery.readyException(t);
      }), this;
    };
    jQuery.extend({
      isReady : false,
      readyWait : 1,
      holdReady : function(hold) {
        if (hold) {
          jQuery.readyWait++;
        } else {
          jQuery.ready(true);
        }
      },
      ready : function(wait) {
        if (!(wait === true ? --jQuery.readyWait : jQuery.isReady)) {
          /** @type {boolean} */
          jQuery.isReady = true;
          if (!(wait !== true && --jQuery.readyWait > 0)) {
            context.resolveWith(document, [jQuery]);
          }
        }
      }
    });
    jQuery.ready.then = context.then;
    if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) {
      window.setTimeout(jQuery.ready);
    } else {
      document.addEventListener("DOMContentLoaded", contentLoaded);
      window.addEventListener("load", contentLoaded);
    }
    /**
     * @param {string} elems
     * @param {!Function} fn
     * @param {!Object} key
     * @param {?} value
     * @param {number} chainable
     * @param {string} emptyGet
     * @param {boolean} raw
     * @return {?}
     */
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
      /** @type {number} */
      var i = 0;
      var len = elems.length;
      /** @type {boolean} */
      var bulk = null == key;
      if ("object" === jQuery.type(key)) {
        /** @type {boolean} */
        chainable = true;
        for (i in key) {
          access(elems, fn, i, key[i], true, emptyGet, raw);
        }
      } else {
        if (void 0 !== value && (chainable = true, jQuery.isFunction(value) || (raw = true), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(elem, e, value) {
          return bulk.call(jQuery(elem), value);
        })), fn)) {
          for (; i < len; i++) {
            fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
          }
        }
      }
      return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
    };
    /**
     * @param {!Object} selector
     * @return {?}
     */
    var match = function(selector) {
      return 1 === selector.nodeType || 9 === selector.nodeType || !+selector.nodeType;
    };
    /** @type {number} */
    Data.uid = 1;
    Data.prototype = {
      cache : function(node) {
        var value = node[this.expando];
        return value || (value = {}, match(node) && (node.nodeType ? node[this.expando] = value : Object.defineProperty(node, this.expando, {
          value : value,
          configurable : true
        }))), value;
      },
      set : function(type, data, value) {
        var prop;
        var cache = this.cache(type);
        if ("string" == typeof data) {
          /** @type {string} */
          cache[jQuery.camelCase(data)] = value;
        } else {
          for (prop in data) {
            cache[jQuery.camelCase(prop)] = data[prop];
          }
        }
        return cache;
      },
      get : function(data, key) {
        return void 0 === key ? this.cache(data) : data[this.expando] && data[this.expando][jQuery.camelCase(key)];
      },
      access : function(value, fn, callback) {
        return void 0 === fn || fn && "string" == typeof fn && void 0 === callback ? this.get(value, fn) : (this.set(value, fn, callback), void 0 !== callback ? callback : fn);
      },
      remove : function(elem, key) {
        var j;
        var value = elem[this.expando];
        if (void 0 !== value) {
          if (void 0 !== key) {
            if (jQuery.isArray(key)) {
              key = key.map(jQuery.camelCase);
            } else {
              key = jQuery.camelCase(key);
              key = key in value ? [key] : key.match(re) || [];
            }
            j = key.length;
            for (; j--;) {
              delete value[key[j]];
            }
          }
          if (void 0 === key || jQuery.isEmptyObject(value)) {
            if (elem.nodeType) {
              elem[this.expando] = void 0;
            } else {
              delete elem[this.expando];
            }
          }
        }
      },
      hasData : function(owner) {
        var cache = owner[this.expando];
        return void 0 !== cache && !jQuery.isEmptyObject(cache);
      }
    };
    var dataPriv = new Data;
    var self = new Data;
    /** @type {!RegExp} */
    var trueRE = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    /** @type {!RegExp} */
    var rhyphen = /[A-Z]/g;
    jQuery.extend({
      hasData : function(elem) {
        return self.hasData(elem) || dataPriv.hasData(elem);
      },
      data : function(value, name, data) {
        return self.access(value, name, data);
      },
      removeData : function(e, key) {
        self.remove(e, key);
      },
      _data : function(elem, name, data) {
        return dataPriv.access(elem, name, data);
      },
      _removeData : function(elem, name) {
        dataPriv.remove(elem, name);
      }
    });
    jQuery.fn.extend({
      data : function(name, value) {
        var i;
        var key;
        var data;
        var elem = this[0];
        var attrs = elem && elem.attributes;
        if (void 0 === name) {
          if (this.length && (data = self.get(elem), 1 === elem.nodeType && !dataPriv.get(elem, "hasDataAttrs"))) {
            i = attrs.length;
            for (; i--;) {
              if (attrs[i]) {
                key = attrs[i].name;
                if (0 === key.indexOf("data-")) {
                  key = jQuery.camelCase(key.slice(5));
                  set(elem, key, data[key]);
                }
              }
            }
            dataPriv.set(elem, "hasDataAttrs", true);
          }
          return data;
        }
        return "object" == typeof name ? this.each(function() {
          self.set(this, name);
        }) : access(this, function(type) {
          var data;
          if (elem && void 0 === type) {
            if (data = self.get(elem, name), void 0 !== data) {
              return data;
            }
            if (data = set(elem, name), void 0 !== data) {
              return data;
            }
          } else {
            this.each(function() {
              self.set(this, name, type);
            });
          }
        }, null, value, arguments.length > 1, null, true);
      },
      removeData : function(data) {
        return this.each(function() {
          self.remove(this, data);
        });
      }
    });
    jQuery.extend({
      queue : function(elem, type, data) {
        var q;
        if (elem) {
          return type = (type || "fx") + "queue", q = dataPriv.get(elem, type), data && (!q || jQuery.isArray(data) ? q = dataPriv.access(elem, type, jQuery.makeArray(data)) : q.push(data)), q || [];
        }
      },
      dequeue : function(elem, type) {
        type = type || "fx";
        var queue = jQuery.queue(elem, type);
        var c = queue.length;
        var result = queue.shift();
        var d = jQuery._queueHooks(elem, type);
        /**
         * @return {undefined}
         */
        var error = function() {
          jQuery.dequeue(elem, type);
        };
        if ("inprogress" === result) {
          result = queue.shift();
          c--;
        }
        if (result) {
          if ("fx" === type) {
            queue.unshift("inprogress");
          }
          delete d.stop;
          result.call(elem, error, d);
        }
        if (!c && d) {
          d.empty.fire();
        }
      },
      _queueHooks : function(elem, type) {
        /** @type {string} */
        var key = type + "queueHooks";
        return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
          empty : jQuery.Callbacks("once memory").add(function() {
            dataPriv.remove(elem, [type + "queue", key]);
          })
        });
      }
    });
    jQuery.fn.extend({
      queue : function(type, data) {
        /** @type {number} */
        var setter = 2;
        return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
          var queue = jQuery.queue(this, type, data);
          jQuery._queueHooks(this, type);
          if ("fx" === type && "inprogress" !== queue[0]) {
            jQuery.dequeue(this, type);
          }
        });
      },
      dequeue : function(type) {
        return this.each(function() {
          jQuery.dequeue(this, type);
        });
      },
      clearQueue : function(type) {
        return this.queue(type || "fx", []);
      },
      promise : function(type, obj) {
        var tmp;
        /** @type {number} */
        var n = 1;
        var defer = jQuery.Deferred();
        var elements = this;
        var i = this.length;
        /**
         * @return {undefined}
         */
        var resolve = function() {
          if (!--n) {
            defer.resolveWith(elements, [elements]);
          }
        };
        if ("string" != typeof type) {
          /** @type {string} */
          obj = type;
          type = void 0;
        }
        type = type || "fx";
        for (; i--;) {
          tmp = dataPriv.get(elements[i], type + "queueHooks");
          if (tmp && tmp.empty) {
            n++;
            tmp.empty.add(resolve);
          }
        }
        return resolve(), defer.promise(obj);
      }
    });
    /** @type {string} */
    var FSSource = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    /** @type {!RegExp} */
    var regex = new RegExp("^(?:([+-])=|)(" + FSSource + ")([a-z%]*)$", "i");
    /** @type {!Array} */
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    /**
     * @param {!Object} element
     * @param {!Object} component
     * @return {?}
     */
    var show = function(element, component) {
      return element = component || element, "none" === element.style.display || "" === element.style.display && jQuery.contains(element.ownerDocument, element) && "none" === jQuery.css(element, "display");
    };
    /**
     * @param {!Object} value
     * @param {!Array} options
     * @param {!Function} callback
     * @param {number} args
     * @return {?}
     */
    var swap = function(value, options, callback, args) {
      var ret;
      var k;
      var rpcAPI = {};
      for (k in options) {
        rpcAPI[k] = value.style[k];
        value.style[k] = options[k];
      }
      ret = callback.apply(value, args || []);
      for (k in options) {
        value.style[k] = rpcAPI[k];
      }
      return ret;
    };
    var defaultDisplayMap = {};
    jQuery.fn.extend({
      show : function() {
        return showHide(this, true);
      },
      hide : function() {
        return showHide(this);
      },
      toggle : function(value) {
        return "boolean" == typeof value ? value ? this.show() : this.hide() : this.each(function() {
          if (show(this)) {
            jQuery(this).show();
          } else {
            jQuery(this).hide();
          }
        });
      }
    });
    /** @type {!RegExp} */
    var reg = /^(?:checkbox|radio)$/i;
    /** @type {!RegExp} */
    var fullLinkRegex = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
    /** @type {!RegExp} */
    var opacityRe = /^$|\/(?:java|ecma)script/i;
    var wrapMap = {
      option : [1, "<select multiple='multiple'>", "</select>"],
      thead : [1, "<table>", "</table>"],
      col : [2, "<table><colgroup>", "</colgroup></table>"],
      tr : [2, "<table><tbody>", "</tbody></table>"],
      td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default : [0, "", ""]
    };
    /** @type {!Array} */
    wrapMap.optgroup = wrapMap.option;
    /** @type {!Array} */
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    /** @type {!Array} */
    wrapMap.th = wrapMap.td;
    /** @type {!RegExp} */
    var re_commas = /<|&#?\w+;/;
    !function() {
      var text_screen = document.createDocumentFragment();
      var e = text_screen.appendChild(document.createElement("div"));
      var input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("checked", "checked");
      input.setAttribute("name", "t");
      e.appendChild(input);
      support.checkClone = e.cloneNode(true).cloneNode(true).lastChild.checked;
      /** @type {string} */
      e.innerHTML = "<textarea>x</textarea>";
      /** @type {boolean} */
      support.noCloneChecked = !!e.cloneNode(true).lastChild.defaultValue;
    }();
    var node = document.documentElement;
    /** @type {!RegExp} */
    var receivedErrorEvents = /^key/;
    /** @type {!RegExp} */
    var receivedOpenEvents = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
    /** @type {!RegExp} */
    var _self = /^([^.]*)(?:\.(.+)|)/;
    jQuery.event = {
      global : {},
      add : function(elem, item, callback, url, selector) {
        var config;
        var fn;
        var tmp;
        var _ref;
        var i;
        var res;
        var special;
        var f;
        var type;
        var d;
        var origType;
        var self = dataPriv.get(elem);
        if (self) {
          if (callback.handler) {
            /** @type {!Object} */
            config = callback;
            callback = config.handler;
            selector = config.selector;
          }
          if (selector) {
            jQuery.find.matchesSelector(node, selector);
          }
          if (!callback.guid) {
            /** @type {number} */
            callback.guid = jQuery.guid++;
          }
          if (!(_ref = self.events)) {
            _ref = self.events = {};
          }
          if (!(fn = self.handle)) {
            /** @type {function(!Object): ?} */
            fn = self.handle = function(e) {
              return "undefined" != typeof jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          item = (item || "").match(re) || [""];
          i = item.length;
          for (; i--;) {
            /** @type {!Array} */
            tmp = _self.exec(item[i]) || [];
            type = origType = tmp[1];
            d = (tmp[2] || "").split(".").sort();
            if (type) {
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery.event.special[type] || {};
              res = jQuery.extend({
                type : type,
                origType : origType,
                data : url,
                handler : callback,
                guid : callback.guid,
                selector : selector,
                needsContext : selector && jQuery.expr.match.needsContext.test(selector),
                namespace : d.join(".")
              }, config);
              if (!(f = _ref[type])) {
                /** @type {!Array} */
                f = _ref[type] = [];
                /** @type {number} */
                f.delegateCount = 0;
                if (!(special.setup && special.setup.call(elem, url, d, fn) !== false)) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, fn);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, res);
                if (!res.handler.guid) {
                  res.handler.guid = callback.guid;
                }
              }
              if (selector) {
                f.splice(f.delegateCount++, 0, res);
              } else {
                f.push(res);
              }
              /** @type {boolean} */
              jQuery.event.global[type] = true;
            }
          }
        }
      },
      remove : function(elem, data, callback, selector, r) {
        var j;
        var origCount;
        var tmp;
        var events;
        var i;
        var handleObj;
        var special;
        var handlers;
        var type;
        var d;
        var origType;
        var elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
        if (elemData && (events = elemData.events)) {
          data = (data || "").match(re) || [""];
          i = data.length;
          for (; i--;) {
            if (tmp = _self.exec(data[i]) || [], type = origType = tmp[1], d = (tmp[2] || "").split(".").sort(), type) {
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              for (; j--;) {
                handleObj = handlers[j];
                if (!(!r && origType !== handleObj.origType || callback && callback.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector))) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!(special.teardown && special.teardown.call(elem, d, elemData.handle) !== false)) {
                  jQuery.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            } else {
              for (type in events) {
                jQuery.event.remove(elem, type + data[i], callback, selector, true);
              }
            }
          }
          if (jQuery.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        }
      },
      dispatch : function(e) {
        var event = jQuery.event.fix(e);
        var i;
        var j;
        var context;
        var matched;
        var handleObj;
        var handlerQueue;
        /** @type {!Array} */
        var parameters = new Array(arguments.length);
        var handlers = (dataPriv.get(this, "events") || {})[event.type] || [];
        var special = jQuery.event.special[event.type] || {};
        parameters[0] = event;
        /** @type {number} */
        i = 1;
        for (; i < arguments.length; i++) {
          parameters[i] = arguments[i];
        }
        if (event.delegateTarget = this, !special.preDispatch || special.preDispatch.call(this, event) !== false) {
          handlerQueue = jQuery.event.handlers.call(this, event, handlers);
          /** @type {number} */
          i = 0;
          for (; (matched = handlerQueue[i++]) && !event.isPropagationStopped();) {
            event.currentTarget = matched.elem;
            /** @type {number} */
            j = 0;
            for (; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) {
              if (!(event.rnamespace && !event.rnamespace.test(handleObj.namespace))) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                context = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, parameters);
                if (void 0 !== context && (event.result = context) === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
              }
            }
          }
          return special.postDispatch && special.postDispatch.call(this, event), event.result;
        }
      },
      handlers : function(event, handlers) {
        var i;
        var e;
        var r;
        var matches;
        var Theta2;
        /** @type {!Array} */
        var handlerQueue = [];
        var delegateCount = handlers.delegateCount;
        var cur = event.target;
        if (delegateCount && cur.nodeType && !("click" === event.type && event.button >= 1)) {
          for (; cur !== this; cur = cur.parentNode || this) {
            if (1 === cur.nodeType && ("click" !== event.type || cur.disabled !== true)) {
              /** @type {!Array} */
              matches = [];
              Theta2 = {};
              /** @type {number} */
              i = 0;
              for (; i < delegateCount; i++) {
                e = handlers[i];
                /** @type {string} */
                r = e.selector + " ";
                if (void 0 === Theta2[r]) {
                  Theta2[r] = e.needsContext ? jQuery(r, this).index(cur) > -1 : jQuery.find(r, this, null, [cur]).length;
                }
                if (Theta2[r]) {
                  matches.push(e);
                }
              }
              if (matches.length) {
                handlerQueue.push({
                  elem : cur,
                  handlers : matches
                });
              }
            }
          }
        }
        return cur = this, delegateCount < handlers.length && handlerQueue.push({
          elem : cur,
          handlers : handlers.slice(delegateCount)
        }), handlerQueue;
      },
      addProp : function(name, hook) {
        Object.defineProperty(jQuery.Event.prototype, name, {
          enumerable : true,
          configurable : true,
          get : jQuery.isFunction(hook) ? function() {
            if (this.originalEvent) {
              return hook(this.originalEvent);
            }
          } : function() {
            if (this.originalEvent) {
              return this.originalEvent[name];
            }
          },
          set : function(type) {
            Object.defineProperty(this, name, {
              enumerable : true,
              configurable : true,
              writable : true,
              value : type
            });
          }
        });
      },
      fix : function(originalEvent) {
        return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
      },
      special : {
        load : {
          noBubble : true
        },
        focus : {
          trigger : function() {
            if (this !== safeActiveElement() && this.focus) {
              return this.focus(), false;
            }
          },
          delegateType : "focusin"
        },
        blur : {
          trigger : function() {
            if (this === safeActiveElement() && this.blur) {
              return this.blur(), false;
            }
          },
          delegateType : "focusout"
        },
        click : {
          trigger : function() {
            if ("checkbox" === this.type && this.click && jQuery.nodeName(this, "input")) {
              return this.click(), false;
            }
          },
          _default : function(value) {
            return jQuery.nodeName(value.target, "a");
          }
        },
        beforeunload : {
          postDispatch : function(event) {
            if (void 0 !== event.result && event.originalEvent) {
              event.originalEvent.returnValue = event.result;
            }
          }
        }
      }
    };
    /**
     * @param {!Object} elem
     * @param {string} type
     * @param {!Function} fn
     * @return {undefined}
     */
    jQuery.removeEvent = function(elem, type, fn) {
      if (elem.removeEventListener) {
        elem.removeEventListener(type, fn);
      }
    };
    /**
     * @param {!Object} obj
     * @param {!Object} name
     * @return {?}
     */
    jQuery.Event = function(obj, name) {
      return this instanceof jQuery.Event ? (obj && obj.type ? (this.originalEvent = obj, this.type = obj.type, this.isDefaultPrevented = obj.defaultPrevented || void 0 === obj.defaultPrevented && obj.returnValue === false ? returnTrue : returnFalse, this.target = obj.target && 3 === obj.target.nodeType ? obj.target.parentNode : obj.target, this.currentTarget = obj.currentTarget, this.relatedTarget =
      obj.relatedTarget) : this.type = obj, name && jQuery.extend(this, name), this.timeStamp = obj && obj.timeStamp || jQuery.now(), void(this[jQuery.expando] = true)) : new jQuery.Event(obj, name);
    };
    jQuery.Event.prototype = {
      constructor : jQuery.Event,
      isDefaultPrevented : returnFalse,
      isPropagationStopped : returnFalse,
      isImmediatePropagationStopped : returnFalse,
      isSimulated : false,
      preventDefault : function() {
        var e = this.originalEvent;
        /** @type {function(): ?} */
        this.isDefaultPrevented = returnTrue;
        if (e && !this.isSimulated) {
          e.preventDefault();
        }
      },
      stopPropagation : function() {
        var e = this.originalEvent;
        /** @type {function(): ?} */
        this.isPropagationStopped = returnTrue;
        if (e && !this.isSimulated) {
          e.stopPropagation();
        }
      },
      stopImmediatePropagation : function() {
        var e = this.originalEvent;
        /** @type {function(): ?} */
        this.isImmediatePropagationStopped = returnTrue;
        if (e && !this.isSimulated) {
          e.stopImmediatePropagation();
        }
        this.stopPropagation();
      }
    };
    jQuery.each({
      altKey : true,
      bubbles : true,
      cancelable : true,
      changedTouches : true,
      ctrlKey : true,
      detail : true,
      eventPhase : true,
      metaKey : true,
      pageX : true,
      pageY : true,
      shiftKey : true,
      view : true,
      char : true,
      charCode : true,
      key : true,
      keyCode : true,
      button : true,
      buttons : true,
      clientX : true,
      clientY : true,
      offsetX : true,
      offsetY : true,
      pointerId : true,
      pointerType : true,
      screenX : true,
      screenY : true,
      targetTouches : true,
      toElement : true,
      touches : true,
      which : function(e) {
        var button = e.button;
        return null == e.which && receivedErrorEvents.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== button && receivedOpenEvents.test(e.type) ? 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0 : e.which;
      }
    }, jQuery.event.addProp);
    jQuery.each({
      mouseenter : "mouseover",
      mouseleave : "mouseout",
      pointerenter : "pointerover",
      pointerleave : "pointerout"
    }, function(orig, fix) {
      jQuery.event.special[orig] = {
        delegateType : fix,
        bindType : fix,
        handle : function(event) {
          var _ref12;
          var document = this;
          var b = event.relatedTarget;
          var handleObj = event.handleObj;
          return b && (b === document || jQuery.contains(document, b)) || (event.type = handleObj.origType, _ref12 = handleObj.handler.apply(this, arguments), event.type = fix), _ref12;
        }
      };
    });
    jQuery.fn.extend({
      on : function(type, element, options, args) {
        return parse(this, type, element, options, args);
      },
      one : function(fn, type, prefix, args) {
        return parse(this, fn, type, prefix, args, 1);
      },
      off : function(type, value, fn) {
        var handleObj;
        var i;
        if (type && type.preventDefault && type.handleObj) {
          return handleObj = type.handleObj, jQuery(type.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
        }
        if ("object" == typeof type) {
          for (i in type) {
            this.off(i, value, type[i]);
          }
          return this;
        }
        return value !== false && "function" != typeof value || (fn = value, value = void 0), fn === false && (fn = returnFalse), this.each(function() {
          jQuery.event.remove(this, type, fn, value);
        });
      }
    });
    /** @type {!RegExp} */
    var regPlaceholder = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
    /** @type {!RegExp} */
    var _tacet = /<script|<style|<link/i;
    /** @type {!RegExp} */
    var reValidName = /checked\s*(?:[^=]|=\s*.checked.)/i;
    /** @type {!RegExp} */
    var xhr = /^true\/(.*)/;
    /** @type {!RegExp} */
    var codePoint = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    jQuery.extend({
      htmlPrefilter : function(src) {
        return src.replace(regPlaceholder, "<$1></$2>");
      },
      clone : function(elem, array, callbacks) {
        var i;
        var l;
        var srcElements;
        var destElements;
        var clone = elem.cloneNode(true);
        var inPage = jQuery.contains(elem.ownerDocument, elem);
        if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem))) {
          destElements = getAll(clone);
          srcElements = getAll(elem);
          /** @type {number} */
          i = 0;
          l = srcElements.length;
          for (; i < l; i++) {
            fixInput(srcElements[i], destElements[i]);
          }
        }
        if (array) {
          if (callbacks) {
            srcElements = srcElements || getAll(elem);
            destElements = destElements || getAll(clone);
            /** @type {number} */
            i = 0;
            l = srcElements.length;
            for (; i < l; i++) {
              cloneCopyEvent(srcElements[i], destElements[i]);
            }
          } else {
            cloneCopyEvent(elem, clone);
          }
        }
        return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone;
      },
      cleanData : function(data) {
        var data;
        var element;
        var type;
        var special = jQuery.event.special;
        /** @type {number} */
        var i = 0;
        for (; void 0 !== (element = data[i]); i++) {
          if (match(element)) {
            if (data = element[dataPriv.expando]) {
              if (data.events) {
                for (type in data.events) {
                  if (special[type]) {
                    jQuery.event.remove(element, type);
                  } else {
                    jQuery.removeEvent(element, type, data.handle);
                  }
                }
              }
              element[dataPriv.expando] = void 0;
            }
            if (element[self.expando]) {
              element[self.expando] = void 0;
            }
          }
        }
      }
    });
    jQuery.fn.extend({
      detach : function(f) {
        return remove(this, f, true);
      },
      remove : function(elem) {
        return remove(this, elem);
      },
      text : function(value) {
        return access(this, function(value) {
          return void 0 === value ? jQuery.text(this) : this.empty().each(function() {
            if (!(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType)) {
              this.textContent = value;
            }
          });
        }, null, value, arguments.length);
      },
      append : function() {
        return domManip(this, arguments, function(elem) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var target = manipulationTarget(this, elem);
            target.appendChild(elem);
          }
        });
      },
      prepend : function() {
        return domManip(this, arguments, function(elem) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var target = manipulationTarget(this, elem);
            target.insertBefore(elem, target.firstChild);
          }
        });
      },
      before : function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this);
          }
        });
      },
      after : function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this.nextSibling);
          }
        });
      },
      empty : function() {
        var elem;
        /** @type {number} */
        var i = 0;
        for (; null != (elem = this[i]); i++) {
          if (1 === elem.nodeType) {
            jQuery.cleanData(getAll(elem, false));
            /** @type {string} */
            elem.textContent = "";
          }
        }
        return this;
      },
      clone : function(value, options) {
        return value = null != value && value, options = null == options ? value : options, this.map(function() {
          return jQuery.clone(this, value, options);
        });
      },
      html : function(value) {
        return access(this, function(value) {
          var elem = this[0] || {};
          /** @type {number} */
          var thatpos = 0;
          var i = this.length;
          if (void 0 === value && 1 === elem.nodeType) {
            return elem.innerHTML;
          }
          if ("string" == typeof value && !_tacet.test(value) && !wrapMap[(fullLinkRegex.exec(value) || ["", ""])[1].toLowerCase()]) {
            value = jQuery.htmlPrefilter(value);
            try {
              for (; thatpos < i; thatpos++) {
                elem = this[thatpos] || {};
                if (1 === elem.nodeType) {
                  jQuery.cleanData(getAll(elem, false));
                  /** @type {number} */
                  elem.innerHTML = value;
                }
              }
              /** @type {number} */
              elem = 0;
            } catch (t) {
            }
          }
          if (elem) {
            this.empty().append(value);
          }
        }, null, value, arguments.length);
      },
      replaceWith : function() {
        /** @type {!Array} */
        var ignored = [];
        return domManip(this, arguments, function(textualMod) {
          var thisParent = this.parentNode;
          if (jQuery.inArray(this, ignored) < 0) {
            jQuery.cleanData(getAll(this));
            if (thisParent) {
              thisParent.replaceChild(textualMod, this);
            }
          }
        }, ignored);
      }
    });
    jQuery.each({
      appendTo : "append",
      prependTo : "prepend",
      insertBefore : "before",
      insertAfter : "after",
      replaceAll : "replaceWith"
    }, function(original, name) {
      /**
       * @param {undefined} parent
       * @return {?}
       */
      jQuery.fn[original] = function(parent) {
        var param;
        /** @type {!Array} */
        var ret = [];
        var toolbar = jQuery(parent);
        /** @type {number} */
        var last = toolbar.length - 1;
        /** @type {number} */
        var i = 0;
        for (; i <= last; i++) {
          param = i === last ? this : this.clone(true);
          jQuery(toolbar[i])[name](param);
          push.apply(ret, param.get());
        }
        return this.pushStack(ret);
      };
    });
    /** @type {!RegExp} */
    var namespaces = /^margin/;
    /** @type {!RegExp} */
    var rnumnonpx = new RegExp("^(" + FSSource + ")(?!px)[a-z%]+$", "i");
    /**
     * @param {!Object} context
     * @return {?}
     */
    var getStyles = function(context) {
      var w = context.ownerDocument.defaultView;
      return w && w.opener || (w = window), w.getComputedStyle(context);
    };
    !function() {
      /**
       * @return {undefined}
       */
      function computeStyleTests() {
        if (div) {
          /** @type {string} */
          div.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
          /** @type {string} */
          div.innerHTML = "";
          node.appendChild(s);
          var cs = window.getComputedStyle(div);
          /** @type {boolean} */
          i = "1%" !== cs.top;
          /** @type {boolean} */
          o = "2px" === cs.marginLeft;
          /** @type {boolean} */
          n = "4px" === cs.width;
          /** @type {string} */
          div.style.marginRight = "50%";
          /** @type {boolean} */
          r = "4px" === cs.marginRight;
          node.removeChild(s);
          /** @type {null} */
          div = null;
        }
      }
      var i;
      var n;
      var r;
      var o;
      var s = document.createElement("div");
      var div = document.createElement("div");
      if (div.style) {
        /** @type {string} */
        div.style.backgroundClip = "content-box";
        /** @type {string} */
        div.cloneNode(true).style.backgroundClip = "";
        /** @type {boolean} */
        support.clearCloneStyle = "content-box" === div.style.backgroundClip;
        /** @type {string} */
        s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
        s.appendChild(div);
        jQuery.extend(support, {
          pixelPosition : function() {
            return computeStyleTests(), i;
          },
          boxSizingReliable : function() {
            return computeStyleTests(), n;
          },
          pixelMarginRight : function() {
            return computeStyleTests(), r;
          },
          reliableMarginLeft : function() {
            return computeStyleTests(), o;
          }
        });
      }
    }();
    /** @type {!RegExp} */
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/;
    var cssShow = {
      position : "absolute",
      visibility : "hidden",
      display : "block"
    };
    var cssNormalTransform = {
      letterSpacing : "0",
      fontWeight : "400"
    };
    /** @type {!Array} */
    var prefixes = ["Webkit", "Moz", "ms"];
    var style = document.createElement("div").style;
    jQuery.extend({
      cssHooks : {
        opacity : {
          get : function(elem, value) {
            if (value) {
              var to = curCSS(elem, "opacity");
              return "" === to ? "1" : to;
            }
          }
        }
      },
      cssNumber : {
        animationIterationCount : true,
        columnCount : true,
        fillOpacity : true,
        flexGrow : true,
        flexShrink : true,
        fontWeight : true,
        lineHeight : true,
        opacity : true,
        order : true,
        orphans : true,
        widows : true,
        zIndex : true,
        zoom : true
      },
      cssProps : {
        float : "cssFloat"
      },
      style : function(value, name, val, obj) {
        if (value && 3 !== value.nodeType && 8 !== value.nodeType && value.style) {
          var ret;
          var type;
          var hooks;
          var origName = jQuery.camelCase(name);
          var style = value.style;
          return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], void 0 === val ? hooks && "get" in hooks && void 0 !== (ret = hooks.get(value, false, obj)) ? ret : style[name] : (type = typeof val, "string" === type && (ret =
          regex.exec(val)) && ret[1] && (val = adjustCSS(value, name, ret), type = "number"), void(null != val && val === val && ("number" === type && (val = val + (ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px"))), support.clearCloneStyle || "" !== val || 0 !== name.indexOf("background") || (style[name] =
          "inherit"), hooks && "set" in hooks && void 0 === (val = hooks.set(value, val, obj)) || (style[name] = val))));
        }
      },
      css : function(type, name, value, styles) {
        var val;
        var arg;
        var hooks;
        var origName = jQuery.camelCase(name);
        return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], hooks && "get" in hooks && (val = hooks.get(type, true, value)), void 0 === val && (val = curCSS(type, name, styles)), "normal" === val && name in cssNormalTransform &&
        (val = cssNormalTransform[name]), "" === value || value ? (arg = parseFloat(val), value === true || isFinite(arg) ? arg || 0 : val) : val;
      }
    });
    jQuery.each(["height", "width"], function(canCreateDiscussions, name) {
      jQuery.cssHooks[name] = {
        get : function(elem, value, func) {
          if (value) {
            return !rdisplayswap.test(jQuery.css(elem, "display")) || elem.getClientRects().length && elem.getBoundingClientRect().width ? getWidthOrHeight(elem, name, func) : swap(elem, cssShow, function() {
              return getWidthOrHeight(elem, name, func);
            });
          }
        },
        set : function(element, value, callback) {
          var matches;
          var styles = callback && getStyles(element);
          var port = callback && augmentWidthOrHeight(element, name, callback, "border-box" === jQuery.css(element, "boxSizing", false, styles), styles);
          return port && (matches = regex.exec(value)) && "px" !== (matches[3] || "px") && (element.style[name] = value, value = jQuery.css(element, name)), format(element, value, port);
        }
      };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, canCreateDiscussions) {
      if (canCreateDiscussions) {
        return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
          marginLeft : 0
        }, function() {
          return elem.getBoundingClientRect().left;
        })) + "px";
      }
    });
    jQuery.each({
      margin : "",
      padding : "",
      border : "Width"
    }, function(prefix, suffix) {
      jQuery.cssHooks[prefix + suffix] = {
        expand : function(keys) {
          /** @type {number} */
          var i = 0;
          var expanded = {};
          /** @type {!Array} */
          var stops = "string" == typeof keys ? keys.split(" ") : [keys];
          for (; i < 4; i++) {
            expanded[prefix + cssExpand[i] + suffix] = stops[i] || stops[i - 2] || stops[0];
          }
          return expanded;
        }
      };
      if (!namespaces.test(prefix)) {
        /** @type {function(!Object, !Object, string): ?} */
        jQuery.cssHooks[prefix + suffix].set = format;
      }
    });
    jQuery.fn.extend({
      css : function(value, name) {
        return access(this, function(elem, name, undefined) {
          var styles;
          var l;
          var map = {};
          /** @type {number} */
          var i = 0;
          if (jQuery.isArray(name)) {
            styles = getStyles(elem);
            l = name.length;
            for (; i < l; i++) {
              map[name[i]] = jQuery.css(elem, name[i], false, styles);
            }
            return map;
          }
          return void 0 !== undefined ? jQuery.style(elem, name, undefined) : jQuery.css(elem, name);
        }, value, name, arguments.length > 1);
      }
    });
    /** @type {function(!Object, !Object, string, !Object, string): ?} */
    jQuery.Tween = Tween;
    Tween.prototype = {
      constructor : Tween,
      init : function(domElem, options, prop, end, easing, unit) {
        /** @type {!Element} */
        this.elem = domElem;
        /** @type {!Object} */
        this.prop = prop;
        this.easing = easing || jQuery.easing._default;
        /** @type {!Object} */
        this.options = options;
        this.start = this.now = this.cur();
        /** @type {number} */
        this.end = end;
        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
      },
      cur : function() {
        var hooks = Tween.propHooks[this.prop];
        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
      },
      run : function(percent) {
        var eased;
        var hooks = Tween.propHooks[this.prop];
        return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this;
      }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
      _default : {
        get : function(s) {
          var node;
          return 1 !== s.elem.nodeType || null != s.elem[s.prop] && null == s.elem.style[s.prop] ? s.elem[s.prop] : (node = jQuery.css(s.elem, s.prop, ""), node && "auto" !== node ? node : 0);
        },
        set : function(tween) {
          if (jQuery.fx.step[tween.prop]) {
            jQuery.fx.step[tween.prop](tween);
          } else {
            if (1 !== tween.elem.nodeType || null == tween.elem.style[jQuery.cssProps[tween.prop]] && !jQuery.cssHooks[tween.prop]) {
              tween.elem[tween.prop] = tween.now;
            } else {
              jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            }
          }
        }
      }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
      set : function(e) {
        if (e.elem.nodeType && e.elem.parentNode) {
          e.elem[e.prop] = e.now;
        }
      }
    };
    jQuery.easing = {
      linear : function(p) {
        return p;
      },
      swing : function(p) {
        return .5 - Math.cos(p * Math.PI) / 2;
      },
      _default : "swing"
    };
    /** @type {function(!Element, !Object, !Object, number, string, string): undefined} */
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.step = {};
    var fxNow;
    var name;
    /** @type {!RegExp} */
    var contribRegex = /^(?:toggle|show|hide)$/;
    /** @type {!RegExp} */
    var rrun = /queueHooks$/;
    jQuery.Animation = jQuery.extend(Animation, {
      tweeners : {
        "*" : [function(prop, value) {
          var tween = this.createTween(prop, value);
          return adjustCSS(tween.elem, prop, regex.exec(value), tween), tween;
        }]
      },
      tweener : function(props, callback) {
        if (jQuery.isFunction(props)) {
          /** @type {!Object} */
          callback = props;
          /** @type {!Array} */
          props = ["*"];
        } else {
          props = props.match(re);
        }
        var prop;
        /** @type {number} */
        var i = 0;
        var inputsSize = props.length;
        for (; i < inputsSize; i++) {
          prop = props[i];
          Animation.tweeners[prop] = Animation.tweeners[prop] || [];
          Animation.tweeners[prop].unshift(callback);
        }
      },
      prefilters : [defaultPrefilter],
      prefilter : function(options, callback) {
        if (callback) {
          Animation.prefilters.unshift(options);
        } else {
          Animation.prefilters.push(options);
        }
      }
    });
    /**
     * @param {!Object} speed
     * @param {!Object} easing
     * @param {boolean} fn
     * @return {?}
     */
    jQuery.speed = function(speed, easing, fn) {
      var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
        complete : fn || !fn && easing || jQuery.isFunction(speed) && speed,
        duration : speed,
        easing : fn && easing || easing && !jQuery.isFunction(easing) && easing
      };
      return jQuery.fx.off || document.hidden ? opt.duration = 0 : "number" != typeof opt.duration && (opt.duration in jQuery.fx.speeds ? opt.duration = jQuery.fx.speeds[opt.duration] : opt.duration = jQuery.fx.speeds._default), null != opt.queue && opt.queue !== true || (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
        if (jQuery.isFunction(opt.old)) {
          opt.old.call(this);
        }
        if (opt.queue) {
          jQuery.dequeue(this, opt.queue);
        }
      }, opt;
    };
    jQuery.fn.extend({
      fadeTo : function(speed, to, callback, context) {
        return this.filter(show).css("opacity", 0).show().end().animate({
          opacity : to
        }, speed, callback, context);
      },
      animate : function(prop, speed, easing, callback) {
        var empty = jQuery.isEmptyObject(prop);
        var optall = jQuery.speed(speed, easing, callback);
        /**
         * @return {undefined}
         */
        var doAnimation = function() {
          var anim = Animation(this, jQuery.extend({}, prop), optall);
          if (empty || dataPriv.get(this, "finish")) {
            anim.stop(true);
          }
        };
        return doAnimation.finish = doAnimation, empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
      },
      stop : function(type, e, d) {
        /**
         * @param {!Object} o
         * @return {undefined}
         */
        var callback = function(o) {
          var s = o.stop;
          delete o.stop;
          s(d);
        };
        return "string" != typeof type && (d = e, e = type, type = void 0), e && type !== false && this.queue(type || "fx", []), this.each(function() {
          /** @type {boolean} */
          var prevDt = true;
          /** @type {(boolean|string)} */
          var index = null != type && type + "queueHooks";
          /** @type {!Array} */
          var timers = jQuery.timers;
          var data = dataPriv.get(this);
          if (index) {
            if (data[index] && data[index].stop) {
              callback(data[index]);
            }
          } else {
            for (index in data) {
              if (data[index] && data[index].stop && rrun.test(index)) {
                callback(data[index]);
              }
            }
          }
          /** @type {number} */
          index = timers.length;
          for (; index--;) {
            if (!(timers[index].elem !== this || null != type && timers[index].queue !== type)) {
              timers[index].anim.stop(d);
              /** @type {boolean} */
              prevDt = false;
              timers.splice(index, 1);
            }
          }
          if (!(!prevDt && d)) {
            jQuery.dequeue(this, type);
          }
        });
      },
      finish : function(type) {
        return type !== false && (type = type || "fx"), this.each(function() {
          var index;
          var data = dataPriv.get(this);
          var queue = data[type + "queue"];
          var hooks = data[type + "queueHooks"];
          /** @type {!Array} */
          var timers = jQuery.timers;
          var length = queue ? queue.length : 0;
          /** @type {boolean} */
          data.finish = true;
          jQuery.queue(this, type, []);
          if (hooks && hooks.stop) {
            hooks.stop.call(this, true);
          }
          /** @type {number} */
          index = timers.length;
          for (; index--;) {
            if (timers[index].elem === this && timers[index].queue === type) {
              timers[index].anim.stop(true);
              timers.splice(index, 1);
            }
          }
          /** @type {number} */
          index = 0;
          for (; index < length; index++) {
            if (queue[index] && queue[index].finish) {
              queue[index].finish.call(this);
            }
          }
          delete data.finish;
        });
      }
    });
    jQuery.each(["toggle", "show", "hide"], function(canCreateDiscussions, name) {
      var cssFn = jQuery.fn[name];
      /**
       * @param {!Object} x
       * @param {!Object} callback
       * @param {boolean} options
       * @return {?}
       */
      jQuery.fn[name] = function(x, callback, options) {
        return null == x || "boolean" == typeof x ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), x, callback, options);
      };
    });
    jQuery.each({
      slideDown : genFx("show"),
      slideUp : genFx("hide"),
      slideToggle : genFx("toggle"),
      fadeIn : {
        opacity : "show"
      },
      fadeOut : {
        opacity : "hide"
      },
      fadeToggle : {
        opacity : "toggle"
      }
    }, function(original, props) {
      /**
       * @param {!Object} speed
       * @param {!Object} callback
       * @param {boolean} options
       * @return {?}
       */
      jQuery.fn[original] = function(speed, callback, options) {
        return this.animate(props, speed, callback, options);
      };
    });
    /** @type {!Array} */
    jQuery.timers = [];
    /**
     * @return {undefined}
     */
    jQuery.fx.tick = function() {
      var timer;
      /** @type {number} */
      var i = 0;
      /** @type {!Array} */
      var timers = jQuery.timers;
      fxNow = jQuery.now();
      for (; i < timers.length; i++) {
        timer = timers[i];
        if (!(timer() || timers[i] !== timer)) {
          timers.splice(i--, 1);
        }
      }
      if (!timers.length) {
        jQuery.fx.stop();
      }
      fxNow = void 0;
    };
    /**
     * @param {undefined} then
     * @return {undefined}
     */
    jQuery.fx.timer = function(then) {
      jQuery.timers.push(then);
      if (then()) {
        jQuery.fx.start();
      } else {
        jQuery.timers.pop();
      }
    };
    /** @type {number} */
    jQuery.fx.interval = 13;
    /**
     * @return {undefined}
     */
    jQuery.fx.start = function() {
      if (!name) {
        name = window.requestAnimationFrame ? window.requestAnimationFrame(frame) : window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
      }
    };
    /**
     * @return {undefined}
     */
    jQuery.fx.stop = function() {
      if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(name);
      } else {
        window.clearInterval(name);
      }
      /** @type {null} */
      name = null;
    };
    jQuery.fx.speeds = {
      slow : 600,
      fast : 200,
      _default : 400
    };
    /**
     * @param {string} time
     * @param {string} type
     * @return {?}
     */
    jQuery.fn.delay = function(time, type) {
      return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", this.queue(type, function(next, incoming_item) {
        var timeout = window.setTimeout(next, time);
        /**
         * @return {undefined}
         */
        incoming_item.stop = function() {
          window.clearTimeout(timeout);
        };
      });
    };
    (function() {
      var input = document.createElement("input");
      var select = document.createElement("select");
      var opt = select.appendChild(document.createElement("option"));
      /** @type {string} */
      input.type = "checkbox";
      /** @type {boolean} */
      support.checkOn = "" !== input.value;
      support.optSelected = opt.selected;
      input = document.createElement("input");
      /** @type {string} */
      input.value = "t";
      /** @type {string} */
      input.type = "radio";
      /** @type {boolean} */
      support.radioValue = "t" === input.value;
    })();
    var boolHook;
    var attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
      attr : function(name, value) {
        return access(this, jQuery.attr, name, value, arguments.length > 1);
      },
      removeAttr : function(name) {
        return this.each(function() {
          jQuery.removeAttr(this, name);
        });
      }
    });
    jQuery.extend({
      attr : function(elem, name, value) {
        var message;
        var hooks;
        var type = elem.nodeType;
        if (3 !== type && 8 !== type && 2 !== type) {
          return "undefined" == typeof elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === type && jQuery.isXMLDoc(elem) || (hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)), void 0 !== value ? null === value ? void jQuery.removeAttr(elem, name) : hooks && "set" in hooks && void 0 !== (message =
          hooks.set(elem, value, name)) ? message : (elem.setAttribute(name, value + ""), value) : hooks && "get" in hooks && null !== (message = hooks.get(elem, name)) ? message : (message = jQuery.find.attr(elem, name), null == message ? void 0 : message));
        }
      },
      attrHooks : {
        type : {
          set : function(element, data) {
            if (!support.radioValue && "radio" === data && jQuery.nodeName(element, "input")) {
              var n = element.value;
              return element.setAttribute("type", data), n && (element.value = n), data;
            }
          }
        }
      },
      removeAttr : function(node, name) {
        var html2canvasNodeAttribute;
        /** @type {number} */
        var callbackCount = 0;
        var callbackVals = name && name.match(re);
        if (callbackVals && 1 === node.nodeType) {
          for (; html2canvasNodeAttribute = callbackVals[callbackCount++];) {
            node.removeAttribute(html2canvasNodeAttribute);
          }
        }
      }
    });
    boolHook = {
      set : function(element, value, name) {
        return value === false ? jQuery.removeAttr(element, name) : element.setAttribute(name, name), name;
      }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(canCreateDiscussions, name) {
      var i = attrHandle[name] || jQuery.find.attr;
      /**
       * @param {undefined} key
       * @param {string} a
       * @param {number} b
       * @return {?}
       */
      attrHandle[name] = function(key, a, b) {
        var ret;
        var handle;
        var lowercaseName = a.toLowerCase();
        return b || (handle = attrHandle[lowercaseName], attrHandle[lowercaseName] = ret, ret = null != i(key, a, b) ? lowercaseName : null, attrHandle[lowercaseName] = handle), ret;
      };
    });
    /** @type {!RegExp} */
    var k_r_success_contrls = /^(?:input|select|textarea|button)$/i;
    /** @type {!RegExp} */
    var submittable = /^(?:a|area)$/i;
    jQuery.fn.extend({
      prop : function(type, value) {
        return access(this, jQuery.prop, type, value, arguments.length > 1);
      },
      removeProp : function(name) {
        return this.each(function() {
          delete this[jQuery.propFix[name] || name];
        });
      }
    });
    jQuery.extend({
      prop : function(elem, name, value) {
        var ret;
        var hooks;
        var type = elem.nodeType;
        if (3 !== type && 8 !== type && 2 !== type) {
          return 1 === type && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem,
          name)) ? ret : elem[name];
        }
      },
      propHooks : {
        tabIndex : {
          get : function(element) {
            var idx = jQuery.find.attr(element, "tabindex");
            return idx ? parseInt(idx, 10) : k_r_success_contrls.test(element.nodeName) || submittable.test(element.nodeName) && element.href ? 0 : -1;
          }
        }
      },
      propFix : {
        for : "htmlFor",
        class : "className"
      }
    });
    if (!support.optSelected) {
      jQuery.propHooks.selected = {
        get : function(e) {
          var elem = e.parentNode;
          return elem && elem.parentNode && elem.parentNode.selectedIndex, null;
        },
        set : function(element) {
          var parent = element.parentNode;
          if (parent) {
            parent.selectedIndex;
            if (parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
          }
        }
      };
    }
    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      jQuery.propFix[this.toLowerCase()] = this;
    });
    jQuery.fn.extend({
      addClass : function(name) {
        var _ref;
        var e;
        var r;
        var n;
        var hours;
        var _i;
        var v;
        /** @type {number} */
        var l = 0;
        if (jQuery.isFunction(name)) {
          return this.each(function(cur) {
            jQuery(this).addClass(name.call(this, cur, $(this)));
          });
        }
        if ("string" == typeof name && name) {
          /** @type {!Array} */
          _ref = name.match(re) || [];
          for (; e = this[l++];) {
            if (n = $(e), r = 1 === e.nodeType && " " + fn(n) + " ") {
              /** @type {number} */
              _i = 0;
              for (; hours = _ref[_i++];) {
                if (r.indexOf(" " + hours + " ") < 0) {
                  /** @type {string} */
                  r = r + (hours + " ");
                }
              }
              v = fn(r);
              if (n !== v) {
                e.setAttribute("class", v);
              }
            }
          }
        }
        return this;
      },
      removeClass : function(name) {
        var zeroSizeMaxes;
        var i;
        var n;
        var result;
        var zeroSizeMax;
        var callbackCount;
        var value;
        /** @type {number} */
        var l = 0;
        if (jQuery.isFunction(name)) {
          return this.each(function(i) {
            jQuery(this).removeClass(name.call(this, i, $(this)));
          });
        }
        if (!arguments.length) {
          return this.attr("class", "");
        }
        if ("string" == typeof name && name) {
          /** @type {!Array} */
          zeroSizeMaxes = name.match(re) || [];
          for (; i = this[l++];) {
            if (result = $(i), n = 1 === i.nodeType && " " + fn(result) + " ") {
              /** @type {number} */
              callbackCount = 0;
              for (; zeroSizeMax = zeroSizeMaxes[callbackCount++];) {
                for (; n.indexOf(" " + zeroSizeMax + " ") > -1;) {
                  /** @type {string} */
                  n = n.replace(" " + zeroSizeMax + " ", " ");
                }
              }
              value = fn(n);
              if (result !== value) {
                i.setAttribute("class", value);
              }
            }
          }
        }
        return this;
      },
      toggleClass : function(el, args) {
        /** @type {string} */
        var type = typeof el;
        return "boolean" == typeof args && "string" === type ? args ? this.addClass(el) : this.removeClass(el) : jQuery.isFunction(el) ? this.each(function(i) {
          jQuery(this).toggleClass(el.call(this, i, $(this), args), args);
        }) : this.each(function() {
          var className;
          var callbackCount;
          var $body;
          var callbackVals;
          if ("string" === type) {
            /** @type {number} */
            callbackCount = 0;
            $body = jQuery(this);
            callbackVals = el.match(re) || [];
            for (; className = callbackVals[callbackCount++];) {
              if ($body.hasClass(className)) {
                $body.removeClass(className);
              } else {
                $body.addClass(className);
              }
            }
          } else {
            if (!(void 0 !== el && "boolean" !== type)) {
              className = $(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute("class", className || el === false ? "" : dataPriv.get(this, "__className__") || "");
              }
            }
          }
        });
      },
      hasClass : function(selector) {
        var a;
        var form;
        /** @type {number} */
        var n = 0;
        /** @type {string} */
        a = " " + selector + " ";
        for (; form = this[n++];) {
          if (1 === form.nodeType && (" " + fn($(form)) + " ").indexOf(a) > -1) {
            return true;
          }
        }
        return false;
      }
    });
    /** @type {!RegExp} */
    var n = /\r/g;
    jQuery.fn.extend({
      val : function(obj) {
        var hooks;
        var value;
        var disabled;
        var elem = this[0];
        return arguments.length ? (disabled = jQuery.isFunction(obj), this.each(function(scope) {
          var value;
          if (1 === this.nodeType) {
            value = disabled ? obj.call(this, scope, jQuery(this).val()) : obj;
            if (null == value) {
              /** @type {string} */
              value = "";
            } else {
              if ("number" == typeof value) {
                /** @type {string} */
                value = value + "";
              } else {
                if (jQuery.isArray(value)) {
                  value = jQuery.map(value, function(value) {
                    return null == value ? "" : value + "";
                  });
                }
              }
            }
            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
            if (!(hooks && "set" in hooks && void 0 !== hooks.set(this, value, "value"))) {
              this.value = value;
            }
          }
        })) : elem ? (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], hooks && "get" in hooks && void 0 !== (value = hooks.get(elem, "value")) ? value : (value = elem.value, "string" == typeof value ? value.replace(n, "") : null == value ? "" : value)) : void 0;
      }
    });
    jQuery.extend({
      valHooks : {
        option : {
          get : function(key) {
            var isInvalid = jQuery.find.attr(key, "value");
            return null != isInvalid ? isInvalid : fn(jQuery.text(key));
          }
        },
        select : {
          get : function(elem) {
            var value;
            var option;
            var i;
            var options = elem.options;
            var index = elem.selectedIndex;
            /** @type {boolean} */
            var one = "select-one" === elem.type;
            /** @type {(Array|null)} */
            var values = one ? null : [];
            var max = one ? index + 1 : options.length;
            i = index < 0 ? max : one ? index : 0;
            for (; i < max; i++) {
              if (option = options[i], (option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                if (value = jQuery(option).val(), one) {
                  return value;
                }
                values.push(value);
              }
            }
            return values;
          },
          set : function(element, data) {
            var outputFn;
            var val;
            var attributes = element.options;
            var result = jQuery.makeArray(data);
            var i = attributes.length;
            for (; i--;) {
              val = attributes[i];
              if (val.selected = jQuery.inArray(jQuery.valHooks.option.get(val), result) > -1) {
                /** @type {boolean} */
                outputFn = true;
              }
            }
            return outputFn || (element.selectedIndex = -1), result;
          }
        }
      }
    });
    jQuery.each(["radio", "checkbox"], function() {
      jQuery.valHooks[this] = {
        set : function(element, value) {
          if (jQuery.isArray(value)) {
            return element.checked = jQuery.inArray(jQuery(element).val(), value) > -1;
          }
        }
      };
      if (!support.checkOn) {
        /**
         * @param {!Object} elem
         * @return {?}
         */
        jQuery.valHooks[this].get = function(elem) {
          return null === elem.getAttribute("value") ? "on" : elem.value;
        };
      }
    });
    /** @type {!RegExp} */
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
    jQuery.extend(jQuery.event, {
      trigger : function(event, value, elem, onlyHandlers) {
        var i;
        var node;
        var tmp;
        var bubbleType;
        var property;
        var setter;
        var special;
        /** @type {!Array} */
        var nodes = [elem || document];
        var type = hasOwn.call(event, "type") ? event.type : event;
        var d = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
        if (node = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") > -1 && (d = type.split("."), type = d.shift(), d.sort()), property = type.indexOf(":") < 0 && "on" + type, event = event[jQuery.expando] ? event : new jQuery.Event(type,
        "object" == typeof event && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = d.join("."), event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), value = null == value ? [event] : jQuery.makeArray(value, [event]), special = jQuery.event.special[type] ||
        {}, onlyHandlers || !special.trigger || special.trigger.apply(elem, value) !== false)) {
          if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              node = node.parentNode;
            }
            for (; node; node = node.parentNode) {
              nodes.push(node);
              tmp = node;
            }
            if (tmp === (elem.ownerDocument || document)) {
              nodes.push(tmp.defaultView || tmp.parentWindow || window);
            }
          }
          /** @type {number} */
          i = 0;
          for (; (node = nodes[i++]) && !event.isPropagationStopped();) {
            event.type = i > 1 ? bubbleType : special.bindType || type;
            setter = (dataPriv.get(node, "events") || {})[event.type] && dataPriv.get(node, "handle");
            if (setter) {
              setter.apply(node, value);
            }
            setter = property && node[property];
            if (setter && setter.apply && match(node)) {
              event.result = setter.apply(node, value);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          return event.type = type, onlyHandlers || event.isDefaultPrevented() || special._default && special._default.apply(nodes.pop(), value) !== false || !match(elem) || property && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem) && (tmp = elem[property], tmp && (elem[property] = null), jQuery.event.triggered = type, elem[type](),
          jQuery.event.triggered = void 0, tmp && (elem[property] = tmp)), event.result;
        }
      },
      simulate : function(type, elem, event) {
        var e = jQuery.extend(new jQuery.Event, event, {
          type : type,
          isSimulated : true
        });
        jQuery.event.trigger(e, null, elem);
      }
    });
    jQuery.fn.extend({
      trigger : function(event, type) {
        return this.each(function() {
          jQuery.event.trigger(event, type, this);
        });
      },
      triggerHandler : function(type, data) {
        var parent = this[0];
        if (parent) {
          return jQuery.event.trigger(type, data, parent, true);
        }
      }
    });
    jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(canCreateDiscussions, type) {
      /**
       * @param {!Arguments} callback
       * @param {boolean} fn
       * @return {?}
       */
      jQuery.fn[type] = function(callback, fn) {
        return arguments.length > 0 ? this.on(type, null, callback, fn) : this.trigger(type);
      };
    });
    jQuery.fn.extend({
      hover : function(fnOver, fnOut) {
        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
      }
    });
    /** @type {boolean} */
    support.focusin = "onfocusin" in window;
    if (!support.focusin) {
      jQuery.each({
        focus : "focusin",
        blur : "focusout"
      }, function(orig, name) {
        /**
         * @param {(Object|string)} event
         * @return {undefined}
         */
        var handler = function(event) {
          jQuery.event.simulate(name, event.target, jQuery.event.fix(event));
        };
        jQuery.event.special[name] = {
          setup : function() {
            var doc = this.ownerDocument || this;
            var r = dataPriv.access(doc, name);
            if (!r) {
              doc.addEventListener(orig, handler, true);
            }
            dataPriv.access(doc, name, (r || 0) + 1);
          },
          teardown : function() {
            var doc = this.ownerDocument || this;
            /** @type {number} */
            var data = dataPriv.access(doc, name) - 1;
            if (data) {
              dataPriv.access(doc, name, data);
            } else {
              doc.removeEventListener(orig, handler, true);
              dataPriv.remove(doc, name);
            }
          }
        };
      });
    }
    var location = window.location;
    var widgetUniqueIDIndex = jQuery.now();
    /** @type {!RegExp} */
    var rquery = /\?/;
    /**
     * @param {string} data
     * @return {?}
     */
    jQuery.parseXML = function(data) {
      var xml;
      if (!data || "string" != typeof data) {
        return null;
      }
      try {
        xml = (new window.DOMParser).parseFromString(data, "text/xml");
      } catch (t) {
        xml = void 0;
      }
      return xml && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml;
    };
    /** @type {!RegExp} */
    var reIsFile = /\[\]$/;
    /** @type {!RegExp} */
    var reVowels = /\r?\n/g;
    /** @type {!RegExp} */
    var reHasHexPrefix = /^(?:submit|button|image|reset|file)$/i;
    /** @type {!RegExp} */
    var rsubmittable = /^(?:input|select|textarea|keygen)/i;
    /**
     * @param {?} obj
     * @param {string} a
     * @return {?}
     */
    jQuery.param = function(obj, a) {
      var key;
      /** @type {!Array} */
      var displayUsedBy = [];
      /**
       * @param {?} title
       * @param {!Object} value
       * @return {undefined}
       */
      var add = function(title, value) {
        var val = jQuery.isFunction(value) ? value() : value;
        /** @type {string} */
        displayUsedBy[displayUsedBy.length] = encodeURIComponent(title) + "=" + encodeURIComponent(null == val ? "" : val);
      };
      if (jQuery.isArray(obj) || obj.jquery && !jQuery.isPlainObject(obj)) {
        jQuery.each(obj, function() {
          add(this.name, this.value);
        });
      } else {
        for (key in obj) {
          cb(key, obj[key], a, add);
        }
      }
      return displayUsedBy.join("&");
    };
    jQuery.fn.extend({
      serialize : function() {
        return jQuery.param(this.serializeArray());
      },
      serializeArray : function() {
        return this.map(function() {
          var elements = jQuery.prop(this, "elements");
          return elements ? jQuery.makeArray(elements) : this;
        }).filter(function() {
          var string = this.type;
          return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !reHasHexPrefix.test(string) && (this.checked || !reg.test(string));
        }).map(function(canCreateDiscussions, ctlParams) {
          var val = jQuery(this).val();
          return null == val ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
            return {
              name : ctlParams.name,
              value : val.replace(reVowels, "\r\n")
            };
          }) : {
            name : ctlParams.name,
            value : val.replace(reVowels, "\r\n")
          };
        }).get();
      }
    });
    /** @type {!RegExp} */
    var jsre = /%20/g;
    /** @type {!RegExp} */
    var rhash = /#.*$/;
    /** @type {!RegExp} */
    var rts = /([?&])_=[^&]*/;
    /** @type {!RegExp} */
    var rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm;
    /** @type {!RegExp} */
    var rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/;
    /** @type {!RegExp} */
    var loader = /^(?:GET|HEAD)$/;
    /** @type {!RegExp} */
    var rprotocol = /^\/\//;
    var prefilters = {};
    var transports = {};
    /** @type {string} */
    var je = "*/".concat("*");
    var originAnchor = document.createElement("a");
    originAnchor.href = location.href;
    jQuery.extend({
      active : 0,
      lastModified : {},
      etag : {},
      ajaxSettings : {
        url : location.href,
        type : "GET",
        isLocal : rlocalProtocol.test(location.protocol),
        global : true,
        processData : true,
        async : true,
        contentType : "application/x-www-form-urlencoded; charset=UTF-8",
        accepts : {
          "*" : je,
          text : "text/plain",
          html : "text/html",
          xml : "application/xml, text/xml",
          json : "application/json, text/javascript"
        },
        contents : {
          xml : /\bxml\b/,
          html : /\bhtml/,
          json : /\bjson\b/
        },
        responseFields : {
          xml : "responseXML",
          text : "responseText",
          json : "responseJSON"
        },
        converters : {
          "* text" : String,
          "text html" : true,
          "text json" : JSON.parse,
          "text xml" : jQuery.parseXML
        },
        flatOptions : {
          url : true,
          context : true
        }
      },
      ajaxSetup : function(target, settings) {
        return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
      },
      ajaxPrefilter : addToPrefiltersOrTransports(prefilters),
      ajaxTransport : addToPrefiltersOrTransports(transports),
      ajax : function(url, options) {
        /**
         * @param {number} status
         * @param {string} nativeStatusText
         * @param {!Array} responses
         * @param {string} headers
         * @return {undefined}
         */
        function done(status, nativeStatusText, responses, headers) {
          var isSuccess;
          var success;
          var error;
          var response;
          var modified;
          /** @type {string} */
          var statusText = nativeStatusText;
          if (!completed) {
            /** @type {boolean} */
            completed = true;
            if (showAboveTimeout) {
              window.clearTimeout(showAboveTimeout);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            /** @type {number} */
            jqXHR.readyState = status > 0 ? 4 : 0;
            /** @type {boolean} */
            isSuccess = status >= 200 && status < 300 || 304 === status;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery.etag[cacheURL] = modified;
                }
              }
              if (204 === status || "HEAD" === s.type) {
                /** @type {string} */
                statusText = "nocontent";
              } else {
                if (304 === status) {
                  /** @type {string} */
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  /** @type {boolean} */
                  isSuccess = !error;
                }
              }
            } else {
              error = statusText;
              if (!(!status && statusText)) {
                /** @type {string} */
                statusText = "error";
                if (status < 0) {
                  /** @type {number} */
                  status = 0;
                }
              }
            }
            /** @type {number} */
            jqXHR.status = status;
            /** @type {string} */
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(obj, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(obj, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (h) {
              globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
            }
            completeDeferred.fireWith(obj, [jqXHR, statusText]);
            if (h) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery.active) {
                jQuery.event.trigger("ajaxStop");
              }
            }
          }
        }
        if ("object" == typeof url) {
          /** @type {string} */
          options = url;
          url = void 0;
        }
        options = options || {};
        var transport;
        var cacheURL;
        var responseHeadersString;
        var p;
        var showAboveTimeout;
        var urlAnchor;
        var completed;
        var h;
        var i;
        var uncached;
        var s = jQuery.ajaxSetup({}, options);
        var obj = s.context || s;
        var globalEventContext = s.context && (obj.nodeType || obj.jquery) ? jQuery(obj) : jQuery.event;
        var deferred = jQuery.Deferred();
        var completeDeferred = jQuery.Callbacks("once memory");
        var statusCode = s.statusCode || {};
        var data = {};
        var requestHeadersNames = {};
        /** @type {string} */
        var status = "canceled";
        var jqXHR = {
          readyState : 0,
          getResponseHeader : function(header) {
            var d;
            if (completed) {
              if (!p) {
                p = {};
                for (; d = rheaders.exec(responseHeadersString);) {
                  /** @type {string} */
                  p[d[1].toLowerCase()] = d[2];
                }
              }
              d = p[header.toLowerCase()];
            }
            return null == d ? null : d;
          },
          getAllResponseHeaders : function() {
            return completed ? responseHeadersString : null;
          },
          setRequestHeader : function(name, value) {
            return null == completed && (name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name, data[name] = value), this;
          },
          overrideMimeType : function(type) {
            return null == completed && (s.mimeType = type), this;
          },
          statusCode : function(map) {
            var tmp;
            if (map) {
              if (completed) {
                jqXHR.always(map[jqXHR.status]);
              } else {
                for (tmp in map) {
                  /** @type {!Array} */
                  statusCode[tmp] = [statusCode[tmp], map[tmp]];
                }
              }
            }
            return this;
          },
          abort : function(type) {
            var statusText = type || status;
            return transport && transport.abort(statusText), done(0, statusText), this;
          }
        };
        if (deferred.promise(jqXHR), s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = (s.dataType || "*").toLowerCase().match(re) || [""], null == s.crossDomain) {
          urlAnchor = document.createElement("a");
          try {
            /** @type {string} */
            urlAnchor.href = s.url;
            /** @type {string} */
            urlAnchor.href = urlAnchor.href;
            /** @type {boolean} */
            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host;
          } catch (t) {
            /** @type {boolean} */
            s.crossDomain = true;
          }
        }
        if (s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), completed) {
          return jqXHR;
        }
        h = jQuery.event && s.global;
        if (h && 0 === jQuery.active++) {
          jQuery.event.trigger("ajaxStart");
        }
        s.type = s.type.toUpperCase();
        /** @type {boolean} */
        s.hasContent = !loader.test(s.type);
        /** @type {string} */
        cacheURL = s.url.replace(rhash, "");
        if (s.hasContent) {
          if (s.data && s.processData && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded")) {
            s.data = s.data.replace(jsre, "+");
          }
        } else {
          /** @type {string} */
          uncached = s.url.slice(cacheURL.length);
          if (s.data) {
            /** @type {string} */
            cacheURL = cacheURL + ((rquery.test(cacheURL) ? "&" : "?") + s.data);
            delete s.data;
          }
          if (s.cache === false) {
            /** @type {string} */
            cacheURL = cacheURL.replace(rts, "$1");
            /** @type {string} */
            uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + widgetUniqueIDIndex++ + uncached;
          }
          /** @type {string} */
          s.url = cacheURL + uncached;
        }
        if (s.ifModified) {
          if (jQuery.lastModified[cacheURL]) {
            jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
          }
          if (jQuery.etag[cacheURL]) {
            jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
          }
        }
        if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
          jqXHR.setRequestHeader("Content-Type", s.contentType);
        }
        jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + je + "; q=0.01" : "") : s.accepts["*"]);
        for (i in s.headers) {
          jqXHR.setRequestHeader(i, s.headers[i]);
        }
        if (s.beforeSend && (s.beforeSend.call(obj, jqXHR, s) === false || completed)) {
          return jqXHR.abort();
        }
        if (status = "abort", completeDeferred.add(s.complete), jqXHR.done(s.success), jqXHR.fail(s.error), transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
          if (jqXHR.readyState = 1, h && globalEventContext.trigger("ajaxSend", [jqXHR, s]), completed) {
            return jqXHR;
          }
          if (s.async && s.timeout > 0) {
            showAboveTimeout = window.setTimeout(function() {
              jqXHR.abort("timeout");
            }, s.timeout);
          }
          try {
            /** @type {boolean} */
            completed = false;
            transport.send(data, done);
          } catch (success) {
            if (completed) {
              throw success;
            }
            done(-1, success);
          }
        } else {
          done(-1, "No Transport");
        }
        return jqXHR;
      },
      getJSON : function(option, options, data) {
        return jQuery.get(option, options, data, "json");
      },
      getScript : function(name, callback) {
        return jQuery.get(name, void 0, callback, "script");
      }
    });
    jQuery.each(["get", "post"], function(canCreateDiscussions, method) {
      /**
       * @param {!Object} url
       * @param {!Object} v
       * @param {!Function} s
       * @param {string} o
       * @return {?}
       */
      jQuery[method] = function(url, v, s, o) {
        return jQuery.isFunction(v) && (o = o || s, s = v, v = void 0), jQuery.ajax(jQuery.extend({
          url : url,
          type : method,
          dataType : o,
          data : v,
          success : s
        }, jQuery.isPlainObject(url) && url));
      };
    });
    /**
     * @param {string} url
     * @return {?}
     */
    jQuery._evalUrl = function(url) {
      return jQuery.ajax({
        url : url,
        type : "GET",
        dataType : "script",
        cache : true,
        async : false,
        global : false,
        throws : true
      });
    };
    jQuery.fn.extend({
      wrapAll : function(html) {
        var e;
        return this[0] && (jQuery.isFunction(html) && (html = html.call(this[0])), e = jQuery(html, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
          var elem = this;
          for (; elem.firstElementChild;) {
            elem = elem.firstElementChild;
          }
          return elem;
        }).append(this)), this;
      },
      wrapInner : function(html) {
        return jQuery.isFunction(html) ? this.each(function(i) {
          jQuery(this).wrapInner(html.call(this, i));
        }) : this.each(function() {
          var e = jQuery(this);
          var contents = e.contents();
          if (contents.length) {
            contents.wrapAll(html);
          } else {
            e.append(html);
          }
        });
      },
      wrap : function(html) {
        var isFunction = jQuery.isFunction(html);
        return this.each(function(i) {
          jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
        });
      },
      unwrap : function(data) {
        return this.parent(data).not("body").each(function() {
          jQuery(this).replaceWith(this.childNodes);
        }), this;
      }
    });
    /**
     * @param {!Object} value
     * @return {?}
     */
    jQuery.expr.pseudos.hidden = function(value) {
      return !jQuery.expr.pseudos.visible(value);
    };
    /**
     * @param {!Element} elem
     * @return {?}
     */
    jQuery.expr.pseudos.visible = function(elem) {
      return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    /**
     * @return {?}
     */
    jQuery.ajaxSettings.xhr = function() {
      try {
        return new window.XMLHttpRequest;
      } catch (t) {
      }
    };
    var xhrSuccessStatus = {
      0 : 200,
      1223 : 204
    };
    var xhrSupported = jQuery.ajaxSettings.xhr();
    /** @type {boolean} */
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    /** @type {boolean} */
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
      var callback;
      var errorCallback;
      if (support.cors || xhrSupported && !options.crossDomain) {
        return {
          send : function(headers, callback) {
            var name;
            var xhr = options.xhr();
            if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields) {
              for (name in options.xhrFields) {
                xhr[name] = options.xhrFields[name];
              }
            }
            if (options.mimeType && xhr.overrideMimeType) {
              xhr.overrideMimeType(options.mimeType);
            }
            if (!(options.crossDomain || headers["X-Requested-With"])) {
              /** @type {string} */
              headers["X-Requested-With"] = "XMLHttpRequest";
            }
            for (name in headers) {
              xhr.setRequestHeader(name, headers[name]);
            }
            /**
             * @param {string} event
             * @return {?}
             */
            callback = function(event) {
              return function() {
                if (callback) {
                  /** @type {null} */
                  callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                  if ("abort" === event) {
                    xhr.abort();
                  } else {
                    if ("error" === event) {
                      if ("number" != typeof xhr.status) {
                        callback(0, "error");
                      } else {
                        callback(xhr.status, xhr.statusText);
                      }
                    } else {
                      callback(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" != typeof xhr.responseText ? {
                        binary : xhr.response
                      } : {
                        text : xhr.responseText
                      }, xhr.getAllResponseHeaders());
                    }
                  }
                }
              };
            };
            xhr.onload = callback();
            errorCallback = xhr.onerror = callback("error");
            if (void 0 !== xhr.onabort) {
              xhr.onabort = errorCallback;
            } else {
              /**
               * @return {undefined}
               */
              xhr.onreadystatechange = function() {
                if (4 === xhr.readyState) {
                  window.setTimeout(function() {
                    if (callback) {
                      errorCallback();
                    }
                  });
                }
              };
            }
            callback = callback("abort");
            try {
              xhr.send(options.hasContent && options.data || null);
            } catch (t) {
              if (callback) {
                throw t;
              }
            }
          },
          abort : function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    jQuery.ajaxPrefilter(function(options) {
      if (options.crossDomain) {
        /** @type {boolean} */
        options.contents.script = false;
      }
    });
    jQuery.ajaxSetup({
      accepts : {
        script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents : {
        script : /\b(?:java|ecma)script\b/
      },
      converters : {
        "text script" : function(value) {
          return jQuery.globalEval(value), value;
        }
      }
    });
    jQuery.ajaxPrefilter("script", function(settings) {
      if (void 0 === settings.cache) {
        /** @type {boolean} */
        settings.cache = false;
      }
      if (settings.crossDomain) {
        /** @type {string} */
        settings.type = "GET";
      }
    });
    jQuery.ajaxTransport("script", function(s) {
      if (s.crossDomain) {
        var fileElem;
        var callback;
        return {
          send : function(packets, callback) {
            fileElem = jQuery("<script>").prop({
              charset : s.scriptCharset,
              src : s.url
            }).on("load error", callback = function(result) {
              fileElem.remove();
              /** @type {null} */
              callback = null;
              if (result) {
                callback("error" === result.type ? 404 : 200, result.type);
              }
            });
            document.head.appendChild(fileElem[0]);
          },
          abort : function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    /** @type {!Array} */
    var insideInvocation = [];
    /** @type {!RegExp} */
    var rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
      jsonp : "callback",
      jsonpCallback : function() {
        var indexLookupKey = insideInvocation.pop() || jQuery.expando + "_" + widgetUniqueIDIndex++;
        return this[indexLookupKey] = true, indexLookupKey;
      }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, scanners) {
      var key;
      var fn;
      var context;
      /** @type {(boolean|string)} */
      var jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
      if (jsonProp || "jsonp" === s.dataTypes[0]) {
        return key = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + key) : s.jsonp !== false && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + key), s.converters["script json"] = function() {
          return context || jQuery.error(key + " was not called"), context[0];
        }, s.dataTypes[0] = "json", fn = window[key], window[key] = function() {
          /** @type {!Arguments} */
          context = arguments;
        }, scanners.always(function() {
          if (void 0 === fn) {
            jQuery(window).removeProp(key);
          } else {
            window[key] = fn;
          }
          if (s[key]) {
            s.jsonpCallback = originalSettings.jsonpCallback;
            insideInvocation.push(key);
          }
          if (context && jQuery.isFunction(fn)) {
            fn(context[0]);
          }
          context = fn = void 0;
        }), "script";
      }
    });
    support.createHTMLDocument = function() {
      var iframeBody = document.implementation.createHTMLDocument("").body;
      return iframeBody.innerHTML = "<form></form><form></form>", 2 === iframeBody.childNodes.length;
    }();
    /**
     * @param {string} data
     * @param {!Object} context
     * @param {!Function} keepScripts
     * @return {?}
     */
    jQuery.parseHTML = function(data, context, keepScripts) {
      if ("string" != typeof data) {
        return [];
      }
      if ("boolean" == typeof context) {
        /** @type {!Object} */
        keepScripts = context;
        /** @type {boolean} */
        context = false;
      }
      var base;
      var parsed;
      var key;
      return context || (support.createHTMLDocument ? (context = document.implementation.createHTMLDocument(""), base = context.createElement("base"), base.href = document.location.href, context.head.appendChild(base)) : context = document), parsed = rsingleTag.exec(data), key = !keepScripts && [], parsed ? [context.createElement(parsed[1])] : (parsed = buildFragment([data], context,
      key), key && key.length && jQuery(key).remove(), jQuery.merge([], parsed.childNodes));
    };
    /**
     * @param {string} t
     * @param {!Object} value
     * @param {!Array} callback
     * @return {?}
     */
    jQuery.fn.load = function(t, value, callback) {
      var selector;
      var method;
      var args;
      var self = this;
      var i = t.indexOf(" ");
      return i > -1 && (selector = fn(t.slice(i)), t = t.slice(0, i)), jQuery.isFunction(value) ? (callback = value, value = void 0) : value && "object" == typeof value && (method = "POST"), self.length > 0 && jQuery.ajax({
        url : t,
        type : method || "GET",
        dataType : "html",
        data : value
      }).done(function(responseText) {
        /** @type {!Arguments} */
        args = arguments;
        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
      }).always(callback && function(value, name) {
        self.each(function() {
          callback.apply(this, args || [value.responseText, name, value]);
        });
      }), this;
    };
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(canCreateDiscussions, type) {
      /**
       * @param {undefined} t
       * @return {?}
       */
      jQuery.fn[type] = function(t) {
        return this.on(type, t);
      };
    });
    /**
     * @param {string} elem
     * @return {?}
     */
    jQuery.expr.pseudos.animated = function(elem) {
      return jQuery.grep(jQuery.timers, function(fn) {
        return elem === fn.elem;
      }).length;
    };
    jQuery.offset = {
      setOffset : function(data, options, x) {
        var crop;
        var x;
        var a;
        var height;
        var curOffset;
        var value;
        var u;
        var position = jQuery.css(data, "position");
        var i = jQuery(data);
        var c = {};
        if ("static" === position) {
          /** @type {string} */
          data.style.position = "relative";
        }
        curOffset = i.offset();
        a = jQuery.css(data, "top");
        value = jQuery.css(data, "left");
        /** @type {boolean} */
        u = ("absolute" === position || "fixed" === position) && (a + value).indexOf("auto") > -1;
        if (u) {
          crop = i.position();
          height = crop.top;
          x = crop.left;
        } else {
          /** @type {number} */
          height = parseFloat(a) || 0;
          /** @type {number} */
          x = parseFloat(value) || 0;
        }
        if (jQuery.isFunction(options)) {
          options = options.call(data, x, jQuery.extend({}, curOffset));
        }
        if (null != options.top) {
          /** @type {number} */
          c.top = options.top - curOffset.top + height;
        }
        if (null != options.left) {
          /** @type {number} */
          c.left = options.left - curOffset.left + x;
        }
        if ("using" in options) {
          options.using.call(data, c);
        } else {
          i.css(c);
        }
      }
    };
    jQuery.fn.extend({
      offset : function(y) {
        if (arguments.length) {
          return void 0 === y ? this : this.each(function(i) {
            jQuery.offset.setOffset(this, y, i);
          });
        }
        var doc;
        var win;
        var rect;
        var elem;
        var range = this[0];
        return range ? range.getClientRects().length ? (rect = range.getBoundingClientRect(), rect.width || rect.height ? (elem = range.ownerDocument, win = getWindow(elem), doc = elem.documentElement, {
          top : rect.top + win.pageYOffset - doc.clientTop,
          left : rect.left + win.pageXOffset - doc.clientLeft
        }) : rect) : {
          top : 0,
          left : 0
        } : void 0;
      },
      position : function() {
        if (this[0]) {
          var offsetParent;
          var toOffset;
          var i = this[0];
          var offset = {
            top : 0,
            left : 0
          };
          return "fixed" === jQuery.css(i, "position") ? toOffset = i.getBoundingClientRect() : (offsetParent = this.offsetParent(), toOffset = this.offset(), jQuery.nodeName(offsetParent[0], "html") || (offset = offsetParent.offset()), offset = {
            top : offset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
            left : offset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
          }), {
            top : toOffset.top - offset.top - jQuery.css(i, "marginTop", true),
            left : toOffset.left - offset.left - jQuery.css(i, "marginLeft", true)
          };
        }
      },
      offsetParent : function() {
        return this.map(function() {
          var parent = this.offsetParent;
          for (; parent && "static" === jQuery.css(parent, "position");) {
            parent = parent.offsetParent;
          }
          return parent || node;
        });
      }
    });
    jQuery.each({
      scrollLeft : "pageXOffset",
      scrollTop : "pageYOffset"
    }, function(type, prop) {
      /** @type {boolean} */
      var top = "pageYOffset" === prop;
      /**
       * @param {?} value
       * @return {?}
       */
      jQuery.fn[type] = function(value) {
        return access(this, function(el, method, val) {
          var win = getWindow(el);
          return void 0 === val ? win ? win[prop] : el[method] : void(win ? win.scrollTo(top ? win.pageXOffset : val, top ? val : win.pageYOffset) : el[method] = val);
        }, type, value, arguments.length);
      };
    });
    jQuery.each(["top", "left"], function(canCreateDiscussions, prop) {
      jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(parent, val) {
        if (val) {
          return val = curCSS(parent, prop), rnumnonpx.test(val) ? jQuery(parent).position()[prop] + "px" : val;
        }
      });
    });
    jQuery.each({
      Height : "height",
      Width : "width"
    }, function(name, type) {
      jQuery.each({
        padding : "inner" + name,
        content : type,
        "" : "outer" + name
      }, function(defaultExtra, type) {
        /**
         * @param {!Object} margin
         * @param {boolean} s
         * @return {?}
         */
        jQuery.fn[type] = function(margin, s) {
          var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin);
          var value = defaultExtra || (margin === true || s === true ? "margin" : "border");
          return access(this, function(el, key, undefined) {
            var doc;
            return jQuery.isWindow(el) ? 0 === type.indexOf("outer") ? el["inner" + name] : el.document.documentElement["client" + name] : 9 === el.nodeType ? (doc = el.documentElement, Math.max(el.body["scroll" + name], doc["scroll" + name], el.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 ===
            undefined ? jQuery.css(el, key, value) : jQuery.style(el, key, undefined, value);
          }, type, chainable ? margin : void 0, chainable);
        };
      });
    });
    jQuery.fn.extend({
      bind : function(type, settings, callback) {
        return this.on(type, null, settings, callback);
      },
      unbind : function(type, scope) {
        return this.off(type, null, scope);
      },
      delegate : function(e, t, fn, event) {
        return this.on(t, e, fn, event);
      },
      undelegate : function(selector, event, callback) {
        return 1 === arguments.length ? this.off(selector, "**") : this.off(event, selector || "**", callback);
      }
    });
    /** @type {function(this:JSONType, string, function(string, *): *=): *} */
    jQuery.parseJSON = JSON.parse;
    if ("function" == typeof define && define.amd) {
      define("jquery", [], function() {
        return jQuery;
      });
    }
    var _jQuery = window.jQuery;
    var old$ = window.$;
    return jQuery.noConflict = function(deep) {
      return window.$ === jQuery && (window.$ = old$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery;
    }, zoomAware || (window.jQuery = window.$ = jQuery), jQuery;
  });
  !function(window, document, undefined) {
    /**
     * @param {!Object} obj
     * @param {string} type
     * @return {?}
     */
    function is(obj, type) {
      return typeof obj === type;
    }
    /**
     * @return {undefined}
     */
    function testRunner() {
      var ThetaGrad;
      var feature;
      var aliasIdx;
      var result;
      var i;
      var subwiki;
      var featureNameSplit;
      var featureIdx;
      for (featureIdx in tests) {
        if (tests.hasOwnProperty(featureIdx)) {
          if (ThetaGrad = [], feature = tests[featureIdx], feature.name && (ThetaGrad.push(feature.name.toLowerCase()), feature.options && feature.options.aliases && feature.options.aliases.length)) {
            /** @type {number} */
            aliasIdx = 0;
            for (; aliasIdx < feature.options.aliases.length; aliasIdx++) {
              ThetaGrad.push(feature.options.aliases[aliasIdx].toLowerCase());
            }
          }
          result = is(feature.fn, "function") ? feature.fn() : feature.fn;
          /** @type {number} */
          i = 0;
          for (; i < ThetaGrad.length; i++) {
            subwiki = ThetaGrad[i];
            featureNameSplit = subwiki.split(".");
            if (1 === featureNameSplit.length) {
              Modernizr[featureNameSplit[0]] = result;
            } else {
              if (!(!Modernizr[featureNameSplit[0]] || Modernizr[featureNameSplit[0]] instanceof Boolean)) {
                /** @type {!Boolean} */
                Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
              }
              Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
            }
            classes.push((result ? "" : "no-") + featureNameSplit.join("-"));
          }
        }
      }
    }
    /**
     * @param {!Array} classes
     * @return {undefined}
     */
    function setClasses(classes) {
      var className = docElement.className;
      var classPrefix = Modernizr._config.classPrefix || "";
      if (isSVG && (className = className.baseVal), Modernizr._config.enableJSClass) {
        /** @type {!RegExp} */
        var reJS = new RegExp("(^|\\s)" + classPrefix + "no-js(\\s|$)");
        className = className.replace(reJS, "$1" + classPrefix + "js$2");
      }
      if (Modernizr._config.enableClasses) {
        className = className + (" " + classPrefix + classes.join(" " + classPrefix));
        if (isSVG) {
          docElement.className.baseVal = className;
        } else {
          docElement.className = className;
        }
      }
    }
    /**
     * @param {string} name
     * @return {?}
     */
    function cssToDOM(name) {
      return name.replace(/([a-z])-([a-z])/g, function(canCreateDiscussions, isSlidingUp, shortMonthName) {
        return isSlidingUp + shortMonthName.toUpperCase();
      }).replace(/^-/, "");
    }
    /**
     * @param {string} value
     * @param {string} key
     * @return {?}
     */
    function contains(value, key) {
      return !!~("" + value).indexOf(key);
    }
    /**
     * @return {?}
     */
    function createElement() {
      return "function" != typeof document.createElement ? document.createElement(arguments[0]) : isSVG ? document.createElementNS.call(document, "http://www.w3.org/2000/svg", arguments[0]) : document.createElement.apply(document, arguments);
    }
    /**
     * @param {!Function} that
     * @param {undefined} fn
     * @return {?}
     */
    function fnBind(that, fn) {
      return function() {
        return that.apply(fn, arguments);
      };
    }
    /**
     * @param {!Object} props
     * @param {string} obj
     * @param {string} elem
     * @return {?}
     */
    function testDOMProps(props, obj, elem) {
      var name;
      var i;
      for (i in props) {
        if (props[i] in obj) {
          return elem === false ? props[i] : (name = obj[props[i]], is(name, "function") ? fnBind(name, elem || obj) : name);
        }
      }
      return false;
    }
    /**
     * @param {string} name
     * @return {?}
     */
    function domToCSS(name) {
      return name.replace(/([A-Z])/g, function(canCreateDiscussions, p_Interval) {
        return "-" + p_Interval.toLowerCase();
      }).replace(/^ms-/, "-ms-");
    }
    /**
     * @return {?}
     */
    function getBody() {
      /** @type {!HTMLBodyElement} */
      var body = document.body;
      return body || (body = createElement(isSVG ? "svg" : "body"), body.fake = true), body;
    }
    /**
     * @param {string} rule
     * @param {!Function} callback
     * @param {number} nodes
     * @param {string} testnames
     * @return {?}
     */
    function injectElementWithStyles(rule, callback, nodes, testnames) {
      var style;
      var ret;
      var node;
      var docOverflow;
      /** @type {string} */
      var mod = "modernizr";
      var div = createElement("div");
      var body = getBody();
      if (parseInt(nodes, 10)) {
        for (; nodes--;) {
          node = createElement("div");
          node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
          div.appendChild(node);
        }
      }
      return style = createElement("style"), style.type = "text/css", style.id = "s" + mod, (body.fake ? body : div).appendChild(style), body.appendChild(div), style.styleSheet ? style.styleSheet.cssText = rule : style.appendChild(document.createTextNode(rule)), div.id = mod, body.fake && (body.style.background = "", body.style.overflow =
      "hidden", docOverflow = docElement.style.overflow, docElement.style.overflow = "hidden", docElement.appendChild(body)), ret = callback(div, rule), body.fake ? (body.parentNode.removeChild(body), docElement.style.overflow = docOverflow, docElement.offsetHeight) : div.parentNode.removeChild(div), !!ret;
    }
    /**
     * @param {!Object} props
     * @param {!Object} value
     * @return {?}
     */
    function nativeTestProps(props, value) {
      var i = props.length;
      if ("CSS" in window && "supports" in window.CSS) {
        for (; i--;) {
          if (window.CSS.supports(domToCSS(props[i]), value)) {
            return true;
          }
        }
        return false;
      }
      if ("CSSSupportsRule" in window) {
        /** @type {!Array} */
        var drilldownLevelLabels = [];
        for (; i--;) {
          drilldownLevelLabels.push("(" + domToCSS(props[i]) + ":" + value + ")");
        }
        return drilldownLevelLabels = drilldownLevelLabels.join(" or "), injectElementWithStyles("@supports (" + drilldownLevelLabels + ") { #modernizr { position: absolute; } }", function(anchor) {
          return "absolute" == getComputedStyle(anchor, null).position;
        });
      }
      return undefined;
    }
    /**
     * @param {!Object} props
     * @param {string} prefixed
     * @param {!Object} value
     * @param {!Object} skipValueTest
     * @return {?}
     */
    function testProps(props, prefixed, value, skipValueTest) {
      /**
       * @return {undefined}
       */
      function cleanElems() {
        if (h) {
          delete mStyle.style;
          delete mStyle.modElem;
        }
      }
      if (skipValueTest = !is(skipValueTest, "undefined") && skipValueTest, !is(value, "undefined")) {
        var result = nativeTestProps(props, value);
        if (!is(result, "undefined")) {
          return result;
        }
      }
      var h;
      var _l;
      var propsLength;
      var prop;
      var before;
      /** @type {!Array} */
      var elems = ["modernizr", "tspan", "samp"];
      for (; !mStyle.style && elems.length;) {
        /** @type {boolean} */
        h = true;
        mStyle.modElem = createElement(elems.shift());
        mStyle.style = mStyle.modElem.style;
      }
      propsLength = props.length;
      /** @type {number} */
      _l = 0;
      for (; propsLength > _l; _l++) {
        if (prop = props[_l], before = mStyle.style[prop], contains(prop, "-") && (prop = cssToDOM(prop)), mStyle.style[prop] !== undefined) {
          if (skipValueTest || is(value, "undefined")) {
            return cleanElems(), "pfx" != prefixed || prop;
          }
          try {
            /** @type {!Object} */
            mStyle.style[prop] = value;
          } catch (t) {
          }
          if (mStyle.style[prop] != before) {
            return cleanElems(), "pfx" != prefixed || prop;
          }
        }
      }
      return cleanElems(), false;
    }
    /**
     * @param {string} prop
     * @param {string} prefixed
     * @param {string} elem
     * @param {!Object} value
     * @param {!Object} skipValueTest
     * @return {?}
     */
    function testPropsAll(prop, prefixed, elem, value, skipValueTest) {
      var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1);
      /** @type {!Array<string>} */
      var props = (prop + " " + cssomPrefixes.join(ucProp + " ") + ucProp).split(" ");
      return is(prefixed, "string") || is(prefixed, "undefined") ? testProps(props, prefixed, value, skipValueTest) : (props = (prop + " " + domPrefixes.join(ucProp + " ") + ucProp).split(" "), testDOMProps(props, prefixed, elem));
    }
    /**
     * @param {string} prop
     * @param {string} value
     * @param {string} skipValueTest
     * @return {?}
     */
    function testAllProps(prop, value, skipValueTest) {
      return testPropsAll(prop, undefined, undefined, value, skipValueTest);
    }
    /** @type {!Array} */
    var classes = [];
    /** @type {!Array} */
    var tests = [];
    var ModernizrProto = {
      _version : "3.3.1",
      _config : {
        classPrefix : "",
        enableClasses : true,
        enableJSClass : true,
        usePrefixes : true
      },
      _q : [],
      on : function(type, callback) {
        var providers = this;
        setTimeout(function() {
          callback(providers[type]);
        }, 0);
      },
      addTest : function(name, fn, options) {
        tests.push({
          name : name,
          fn : fn,
          options : options
        });
      },
      addAsyncTest : function(fn) {
        tests.push({
          name : null,
          fn : fn
        });
      }
    };
    /**
     * @return {undefined}
     */
    var Modernizr = function() {
    };
    Modernizr.prototype = ModernizrProto;
    Modernizr = new Modernizr;
    /** @type {!Element} */
    var docElement = document.documentElement;
    /** @type {boolean} */
    var isSVG = "svg" === docElement.nodeName.toLowerCase();
    /** @type {string} */
    var excludeLink = "Moz O ms Webkit";
    /** @type {!Array} */
    var cssomPrefixes = ModernizrProto._config.usePrefixes ? excludeLink.split(" ") : [];
    /** @type {!Array} */
    ModernizrProto._cssomPrefixes = cssomPrefixes;
    /**
     * @param {string} prop
     * @return {?}
     */
    var atRule = function(prop) {
      var rule;
      var length = prefixes.length;
      var cssrule = window.CSSRule;
      if ("undefined" == typeof cssrule) {
        return undefined;
      }
      if (!prop) {
        return false;
      }
      if (prop = prop.replace(/^@/, ""), rule = prop.replace(/-/g, "_").toUpperCase() + "_RULE", rule in cssrule) {
        return "@" + prop;
      }
      /** @type {number} */
      var j = 0;
      for (; length > j; j++) {
        var prefix = prefixes[j];
        /** @type {string} */
        var thisRule = prefix.toUpperCase() + "_" + rule;
        if (thisRule in cssrule) {
          return "@-" + prefix.toLowerCase() + "-" + prop;
        }
      }
      return false;
    };
    /** @type {function(string): ?} */
    ModernizrProto.atRule = atRule;
    /** @type {!Array} */
    var domPrefixes = ModernizrProto._config.usePrefixes ? excludeLink.toLowerCase().split(" ") : [];
    /** @type {!Array} */
    ModernizrProto._domPrefixes = domPrefixes;
    var modElem = {
      elem : createElement("modernizr")
    };
    Modernizr._q.push(function() {
      delete modElem.elem;
    });
    var mStyle = {
      style : modElem.elem.style
    };
    Modernizr._q.unshift(function() {
      delete mStyle.style;
    });
    /** @type {function(string, string, string, !Object, !Object): ?} */
    ModernizrProto.testAllProps = testPropsAll;
    /**
     * @param {string} prop
     * @param {string} obj
     * @param {string} elem
     * @return {?}
     */
    ModernizrProto.prefixed = function(prop, obj, elem) {
      return 0 === prop.indexOf("@") ? atRule(prop) : (-1 != prop.indexOf("-") && (prop = cssToDOM(prop)), obj ? testPropsAll(prop, obj, elem) : testPropsAll(prop, "pfx"));
    };
    /** @type {function(string, string, string): ?} */
    ModernizrProto.testAllProps = testAllProps;
    Modernizr.addTest("cssanimations", testAllProps("animationName", "a", true));
    testRunner();
    setClasses(classes);
    delete ModernizrProto.addTest;
    delete ModernizrProto.addAsyncTest;
    /** @type {number} */
    var i = 0;
    for (; i < Modernizr._q.length; i++) {
      Modernizr._q[i]();
    }
    window.Modernizr = Modernizr;
  }(window, document);
  (function() {
    var AjaxMonitor;
    var Bar;
    var doc1;
    var graphicOption;
    var ElementTracker;
    var EventLagMonitor;
    var NodeCompilerClass;
    var Events;
    var NoTargetError;
    var Pace;
    var RequestIntercept;
    var SOURCE_KEYS;
    var Scaler;
    var Date;
    var Base;
    var transition;
    var avgAmplitude;
    var bar;
    var guard;
    var fn;
    var defaultOptions;
    var extend;
    var extendNative;
    var getFromDOM;
    var getIntercept;
    var handlePushState;
    var ignoreStack;
    var init;
    var now;
    var options;
    var resolve;
    var result;
    var animate;
    var conf_lang_text;
    var shouldIgnoreURL;
    var shouldTrack;
    var source;
    var sources;
    var uniScaler;
    var _WebSocket;
    var _XDomainRequest;
    var _XMLHttpRequest;
    var _i;
    var _intercept;
    var _len;
    var _pushState;
    var _ref;
    var _ref12;
    var _replaceState;
    /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
    var slice = [].slice;
    /** @type {function(this:Object, *): boolean} */
    var hasProp = {}.hasOwnProperty;
    /**
     * @param {!Function} child
     * @param {string} parent
     * @return {?}
     */
    var __extends = function(child, parent) {
      /**
       * @return {undefined}
       */
      function ctor() {
        /** @type {!Function} */
        this.constructor = child;
      }
      var key;
      for (key in parent) {
        if (hasProp.call(parent, key)) {
          child[key] = parent[key];
        }
      }
      return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child;
    };
    /** @type {function(this:(IArrayLike<T>|string), T, number=): number} */
    var __indexOf = [].indexOf || function(name) {
      /** @type {number} */
      var i = 0;
      var l = this.length;
      for (; l > i; i++) {
        if (i in this && this[i] === name) {
          return i;
        }
      }
      return -1;
    };
    defaultOptions = {
      catchupTime : 100,
      initialRate : .03,
      minTime : 250,
      ghostTime : 100,
      maxProgressPerFrame : 20,
      easeFactor : 1.25,
      startOnPageLoad : true,
      restartOnPushState : true,
      restartOnRequestAfter : 500,
      target : "body",
      elements : {
        checkInterval : 100,
        selectors : ["body"]
      },
      eventLag : {
        minSamples : 10,
        sampleCount : 3,
        lagThreshold : 3
      },
      ajax : {
        trackMethods : ["GET"],
        trackWebSockets : true,
        ignoreURLs : []
      }
    };
    /**
     * @return {?}
     */
    now = function() {
      var t;
      return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date;
    };
    resolve = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    fn = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
    if (null == resolve) {
      /**
       * @param {!Object} type
       * @return {?}
       */
      resolve = function(type) {
        return setTimeout(type, 50);
      };
      /**
       * @param {!Object} name
       * @return {?}
       */
      fn = function(name) {
        return clearTimeout(name);
      };
    }
    /**
     * @param {!Function} go
     * @return {?}
     */
    animate = function(go) {
      var timestamp;
      var callback;
      return timestamp = now(), (callback = function() {
        var last;
        return last = now() - timestamp, last >= 33 ? (timestamp = now(), go(last, function() {
          return resolve(callback);
        })) : setTimeout(callback, 33 - last);
      })();
    };
    /**
     * @return {?}
     */
    result = function() {
      var e;
      var j;
      var i;
      return i = arguments[0], j = arguments[1], e = 3 <= arguments.length ? slice.call(arguments, 2) : [], "function" == typeof i[j] ? i[j].apply(i, e) : i[j];
    };
    /**
     * @return {?}
     */
    extend = function() {
      var key;
      var object;
      var hash;
      var hashes;
      var data;
      var i;
      var length;
      object = arguments[0];
      /** @type {!Array<?>} */
      hashes = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      /** @type {number} */
      i = 0;
      /** @type {number} */
      length = hashes.length;
      for (; length > i; i++) {
        if (hash = hashes[i]) {
          for (key in hash) {
            if (hasProp.call(hash, key)) {
              data = hash[key];
              if (null != object[key] && "object" == typeof object[key] && null != data && "object" == typeof data) {
                extend(object[key], data);
              } else {
                object[key] = data;
              }
            }
          }
        }
      }
      return object;
    };
    /**
     * @param {!Object} arr
     * @return {?}
     */
    avgAmplitude = function(arr) {
      var e;
      var s;
      var n;
      var _i;
      var _len;
      /** @type {number} */
      s = e = 0;
      /** @type {number} */
      _i = 0;
      _len = arr.length;
      for (; _len > _i; _i++) {
        n = arr[_i];
        /** @type {number} */
        s = s + Math.abs(n);
        e++;
      }
      return s / e;
    };
    /**
     * @param {string} key
     * @param {number} json
     * @return {?}
     */
    getFromDOM = function(key, json) {
      var data;
      var n;
      var el;
      if (null == key && (key = "options"), null == json && (json = true), el = document.querySelector("[data-pace-" + key + "]")) {
        if (data = el.getAttribute("data-pace-" + key), !json) {
          return data;
        }
        try {
          return JSON.parse(data);
        } catch (numInternals) {
          return n = numInternals, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", n) : void 0;
        }
      }
    };
    NodeCompilerClass = function() {
      /**
       * @return {undefined}
       */
      function EventChannel() {
      }
      return EventChannel.prototype.on = function(name, method, context, object) {
        var _base;
        return null == object && (object = false), null == this.bindings && (this.bindings = {}), null == (_base = this.bindings)[name] && (_base[name] = []), this.bindings[name].push({
          handler : method,
          ctx : context,
          once : object
        });
      }, EventChannel.prototype.once = function(eventName, fn, callback) {
        return this.on(eventName, fn, callback, true);
      }, EventChannel.prototype.off = function(type, name) {
        var i;
        var _ref;
        var r;
        if (null != (null != (_ref = this.bindings) ? _ref[type] : void 0)) {
          if (null == name) {
            return delete this.bindings[type];
          }
          /** @type {number} */
          i = 0;
          /** @type {!Array} */
          r = [];
          for (; i < this.bindings[type].length;) {
            r.push(this.bindings[type][i].handler === name ? this.bindings[type].splice(i, 1) : i++);
          }
          return r;
        }
      }, EventChannel.prototype.trigger = function() {
        var p;
        var ctx;
        var i;
        var fn;
        var k;
        var condition;
        var bindings;
        var options;
        var results;
        if (i = arguments[0], p = 2 <= arguments.length ? slice.call(arguments, 1) : [], null != (bindings = this.bindings) ? bindings[i] : void 0) {
          /** @type {number} */
          k = 0;
          /** @type {!Array} */
          results = [];
          for (; k < this.bindings[i].length;) {
            options = this.bindings[i][k];
            fn = options.handler;
            ctx = options.ctx;
            condition = options.once;
            fn.apply(null != ctx ? ctx : this, p);
            results.push(condition ? this.bindings[i].splice(k, 1) : k++);
          }
          return results;
        }
      }, EventChannel;
    }();
    Pace = window.Pace || {};
    window.Pace = Pace;
    extend(Pace, NodeCompilerClass.prototype);
    options = Pace.options = extend({}, defaultOptions, window.paceOptions, getFromDOM());
    /** @type {!Array} */
    _ref = ["ajax", "document", "eventLag", "elements"];
    /** @type {number} */
    _i = 0;
    /** @type {number} */
    _len = _ref.length;
    for (; _len > _i; _i++) {
      source = _ref[_i];
      if (options[source] === true) {
        options[source] = defaultOptions[source];
      }
    }
    NoTargetError = function(_super) {
      /**
       * @return {?}
       */
      function result() {
        return _ref12 = result.__super__.constructor.apply(this, arguments);
      }
      return __extends(result, _super), result;
    }(Error);
    Bar = function() {
      /**
       * @return {undefined}
       */
      function Bar() {
        /** @type {number} */
        this.progress = 0;
      }
      return Bar.prototype.getElement = function() {
        var body;
        if (null == this.el) {
          if (body = document.querySelector(options.target), !body) {
            throw new NoTargetError;
          }
          /** @type {!Element} */
          this.el = document.createElement("div");
          /** @type {string} */
          this.el.className = "pace pace-active";
          /** @type {string} */
          document.body.className = document.body.className.replace(/pace-done/g, "");
          document.body.className += " pace-running";
          /** @type {string} */
          this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';
          if (null != body.firstChild) {
            body.insertBefore(this.el, body.firstChild);
          } else {
            body.appendChild(this.el);
          }
        }
        return this.el;
      }, Bar.prototype.finish = function() {
        var el;
        return el = this.getElement(), el.className = el.className.replace("pace-active", ""), el.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done";
      }, Bar.prototype.update = function(progress) {
        return this.progress = progress, this.render();
      }, Bar.prototype.destroy = function() {
        try {
          this.getElement().parentNode.removeChild(this.getElement());
        } catch (_error) {
          NoTargetError = _error;
        }
        return this.el = void 0;
      }, Bar.prototype.render = function() {
        var element;
        var name;
        var t;
        var vertexAttribute;
        var _i;
        var _len;
        var _ref2;
        if (null == document.querySelector(options.target)) {
          return false;
        }
        element = this.getElement();
        /** @type {string} */
        vertexAttribute = "translate3d(" + this.progress + "%, 0, 0)";
        /** @type {!Array} */
        _ref2 = ["webkitTransform", "msTransform", "transform"];
        /** @type {number} */
        _i = 0;
        /** @type {number} */
        _len = _ref2.length;
        for (; _len > _i; _i++) {
          name = _ref2[_i];
          /** @type {string} */
          element.children[0].style[name] = vertexAttribute;
        }
        return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (element.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? t = "99" : (t = this.progress < 10 ? "0" : "", t = t + (0 | this.progress)), element.children[0].setAttribute("data-progress", "" + t)), this.lastRenderedProgress = this.progress;
      }, Bar.prototype.done = function() {
        return this.progress >= 100;
      }, Bar;
    }();
    Events = function() {
      /**
       * @return {undefined}
       */
      function EventChannel() {
        this.bindings = {};
      }
      return EventChannel.prototype.trigger = function(event, data) {
        var klass;
        var _i;
        var _len;
        var _ref;
        var _results;
        if (null != this.bindings[event]) {
          _ref = this.bindings[event];
          /** @type {!Array} */
          _results = [];
          /** @type {number} */
          _i = 0;
          _len = _ref.length;
          for (; _len > _i; _i++) {
            klass = _ref[_i];
            _results.push(klass.call(this, data));
          }
          return _results;
        }
      }, EventChannel.prototype.on = function(name, method) {
        var _base;
        return null == (_base = this.bindings)[name] && (_base[name] = []), this.bindings[name].push(method);
      }, EventChannel;
    }();
    /** @type {function(?): ?} */
    _XMLHttpRequest = window.XMLHttpRequest;
    _XDomainRequest = window.XDomainRequest;
    _WebSocket = window.WebSocket;
    /**
     * @param {string} a
     * @param {!Object} from
     * @return {?}
     */
    extendNative = function(a, from) {
      var i;
      var key;
      var _results;
      /** @type {!Array} */
      _results = [];
      for (key in from.prototype) {
        try {
          _results.push(null == a[key] && "function" != typeof from[key] ? "function" == typeof Object.defineProperty ? Object.defineProperty(a, key, {
            get : function() {
              return from.prototype[key];
            },
            configurable : true,
            enumerable : true
          }) : a[key] = from.prototype[key] : void 0);
        } catch (contactCapacity) {
          i = contactCapacity;
        }
      }
      return _results;
    };
    /** @type {!Array} */
    ignoreStack = [];
    /**
     * @return {?}
     */
    Pace.ignore = function() {
      var r;
      var i;
      var hostlabel;
      return i = arguments[0], r = 2 <= arguments.length ? slice.call(arguments, 1) : [], ignoreStack.unshift("ignore"), hostlabel = i.apply(null, r), ignoreStack.shift(), hostlabel;
    };
    /**
     * @return {?}
     */
    Pace.track = function() {
      var r;
      var i;
      var hostlabel;
      return i = arguments[0], r = 2 <= arguments.length ? slice.call(arguments, 1) : [], ignoreStack.unshift("track"), hostlabel = i.apply(null, r), ignoreStack.shift(), hostlabel;
    };
    /**
     * @param {string} method
     * @return {?}
     */
    shouldTrack = function(method) {
      var data;
      if (null == method && (method = "GET"), "track" === ignoreStack[0]) {
        return "force";
      }
      if (!ignoreStack.length && options.ajax) {
        if ("socket" === method && options.ajax.trackWebSockets) {
          return true;
        }
        if (data = method.toUpperCase(), __indexOf.call(options.ajax.trackMethods, data) >= 0) {
          return true;
        }
      }
      return false;
    };
    RequestIntercept = function(_super) {
      /**
       * @return {undefined}
       */
      function RequestIntercept() {
        var monitorXHR;
        var _this = this;
        RequestIntercept.__super__.constructor.apply(this, arguments);
        /**
         * @param {!Object} req
         * @return {?}
         */
        monitorXHR = function(req) {
          var _open;
          return _open = req.open, req.open = function(type, url) {
            return shouldTrack(type) && _this.trigger("request", {
              type : type,
              url : url,
              request : req
            }), _open.apply(req, arguments);
          };
        };
        /**
         * @param {?} flags
         * @return {?}
         */
        window.XMLHttpRequest = function(flags) {
          var req;
          return req = new _XMLHttpRequest(flags), monitorXHR(req), req;
        };
        try {
          extendNative(window.XMLHttpRequest, _XMLHttpRequest);
        } catch (t) {
        }
        if (null != _XDomainRequest) {
          /**
           * @return {?}
           */
          window.XDomainRequest = function() {
            var req;
            return req = new _XDomainRequest, monitorXHR(req), req;
          };
          try {
            extendNative(window.XDomainRequest, _XDomainRequest);
          } catch (t) {
          }
        }
        if (null != _WebSocket && options.ajax.trackWebSockets) {
          /**
           * @param {string} url
           * @param {!Object} protocols
           * @return {?}
           */
          window.WebSocket = function(url, protocols) {
            var SEARCH_REQUEST;
            return SEARCH_REQUEST = null != protocols ? new _WebSocket(url, protocols) : new _WebSocket(url), shouldTrack("socket") && _this.trigger("request", {
              type : "socket",
              url : url,
              protocols : protocols,
              request : SEARCH_REQUEST
            }), SEARCH_REQUEST;
          };
          try {
            extendNative(window.WebSocket, _WebSocket);
          } catch (t) {
          }
        }
      }
      return __extends(RequestIntercept, _super), RequestIntercept;
    }(Events);
    /** @type {null} */
    _intercept = null;
    /**
     * @return {?}
     */
    getIntercept = function() {
      return null == _intercept && (_intercept = new RequestIntercept), _intercept;
    };
    /**
     * @param {!Object} url
     * @return {?}
     */
    shouldIgnoreURL = function(url) {
      var parent;
      var _i;
      var _len;
      var _ref2;
      _ref2 = options.ajax.ignoreURLs;
      /** @type {number} */
      _i = 0;
      _len = _ref2.length;
      for (; _len > _i; _i++) {
        if (parent = _ref2[_i], "string" == typeof parent) {
          if (-1 !== url.indexOf(parent)) {
            return true;
          }
        } else {
          if (parent.test(url)) {
            return true;
          }
        }
      }
      return false;
    };
    getIntercept().on("request", function(_arg) {
      var t;
      var n;
      var request;
      var type;
      var url;
      return type = _arg.type, request = _arg.request, url = _arg.url, shouldIgnoreURL(url) ? void 0 : Pace.running || options.restartOnRequestAfter === false && "force" !== shouldTrack(type) ? void 0 : (n = arguments, t = options.restartOnRequestAfter || 0, "boolean" == typeof t && (t = 0), setTimeout(function() {
        var e;
        var i;
        var index;
        var _ref2;
        var _ref3;
        var newNodeLists;
        if (e = "socket" === type ? request.readyState < 2 : 0 < (_ref2 = request.readyState) && 4 > _ref2) {
          Pace.restart();
          _ref3 = Pace.sources;
          /** @type {!Array} */
          newNodeLists = [];
          /** @type {number} */
          i = 0;
          index = _ref3.length;
          for (; index > i; i++) {
            if (source = _ref3[i], source instanceof AjaxMonitor) {
              source.watch.apply(source, n);
              break;
            }
            newNodeLists.push(void 0);
          }
          return newNodeLists;
        }
      }, t));
    });
    AjaxMonitor = function() {
      /**
       * @return {undefined}
       */
      function AjaxMonitor() {
        var t = this;
        /** @type {!Array} */
        this.elements = [];
        getIntercept().on("request", function() {
          return t.watch.apply(t, arguments);
        });
      }
      return AjaxMonitor.prototype.watch = function(_arg) {
        var data;
        var child;
        var undefined;
        var url;
        return undefined = _arg.type, data = _arg.request, url = _arg.url, shouldIgnoreURL(url) ? void 0 : (child = "socket" === undefined ? new Date(data) : new Base(data), this.elements.push(child));
      }, AjaxMonitor;
    }();
    Base = function() {
      /**
       * @param {!Object} request
       * @return {undefined}
       */
      function XHRRequestTracker(request) {
        var name;
        var i;
        var _i;
        var _len;
        var _onreadystatechange;
        var _ref2;
        var pubPromise = this;
        if (this.progress = 0, null != window.ProgressEvent) {
          /** @type {null} */
          i = null;
          request.addEventListener("progress", function(event) {
            return pubPromise.progress = event.lengthComputable ? 100 * event.loaded / event.total : pubPromise.progress + (100 - pubPromise.progress) / 2;
          }, false);
          /** @type {!Array} */
          _ref2 = ["load", "abort", "timeout", "error"];
          /** @type {number} */
          _i = 0;
          /** @type {number} */
          _len = _ref2.length;
          for (; _len > _i; _i++) {
            name = _ref2[_i];
            request.addEventListener(name, function() {
              return pubPromise.progress = 100;
            }, false);
          }
        } else {
          _onreadystatechange = request.onreadystatechange;
          /**
           * @return {?}
           */
          request.onreadystatechange = function() {
            var _ref3;
            return 0 === (_ref3 = request.readyState) || 4 === _ref3 ? pubPromise.progress = 100 : 3 === request.readyState && (pubPromise.progress = 50), "function" == typeof _onreadystatechange ? _onreadystatechange.apply(null, arguments) : void 0;
          };
        }
      }
      return XHRRequestTracker;
    }();
    Date = function() {
      /**
       * @param {!HTMLElement} e
       * @return {undefined}
       */
      function init(e) {
        var source;
        var _k;
        var _len2;
        var _ref2;
        var pubPromise = this;
        /** @type {number} */
        this.progress = 0;
        /** @type {!Array} */
        _ref2 = ["error", "open"];
        /** @type {number} */
        _k = 0;
        /** @type {number} */
        _len2 = _ref2.length;
        for (; _len2 > _k; _k++) {
          source = _ref2[_k];
          e.addEventListener(source, function() {
            return pubPromise.progress = 100;
          }, false);
        }
      }
      return init;
    }();
    graphicOption = function() {
      /**
       * @param {!Object} options
       * @return {undefined}
       */
      function ElementMonitor(options) {
        var selector;
        var i;
        var l;
        var selectors;
        if (null == options) {
          options = {};
        }
        /** @type {!Array} */
        this.elements = [];
        if (null == options.selectors) {
          /** @type {!Array} */
          options.selectors = [];
        }
        selectors = options.selectors;
        /** @type {number} */
        i = 0;
        l = selectors.length;
        for (; l > i; i++) {
          selector = selectors[i];
          this.elements.push(new ElementTracker(selector));
        }
      }
      return ElementMonitor;
    }();
    ElementTracker = function() {
      /**
       * @param {string} selector
       * @return {undefined}
       */
      function Rule(selector) {
        /** @type {string} */
        this.selector = selector;
        /** @type {number} */
        this.progress = 0;
        this.check();
      }
      return Rule.prototype.check = function() {
        var PWWWService = this;
        return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
          return PWWWService.check();
        }, options.elements.checkInterval);
      }, Rule.prototype.done = function() {
        return this.progress = 100;
      }, Rule;
    }();
    doc1 = function() {
      /**
       * @return {undefined}
       */
      function DocumentMonitor() {
        var _onreadystatechange;
        var _ref2;
        var _this = this;
        this.progress = null != (_ref2 = this.states[document.readyState]) ? _ref2 : 100;
        /** @type {function(): ?} */
        _onreadystatechange = document.onreadystatechange;
        /**
         * @return {?}
         */
        document.onreadystatechange = function() {
          return null != _this.states[document.readyState] && (_this.progress = _this.states[document.readyState]), "function" == typeof _onreadystatechange ? _onreadystatechange.apply(null, arguments) : void 0;
        };
      }
      return DocumentMonitor.prototype.states = {
        loading : 0,
        interactive : 50,
        complete : 100
      }, DocumentMonitor;
    }();
    EventLagMonitor = function() {
      /**
       * @return {undefined}
       */
      function EventLagMonitor() {
        var avg;
        var initializeCheckTimer;
        var timestamp;
        var points;
        var samples;
        var pubPromise = this;
        /** @type {number} */
        this.progress = 0;
        /** @type {number} */
        avg = 0;
        /** @type {!Array} */
        samples = [];
        /** @type {number} */
        points = 0;
        timestamp = now();
        /** @type {number} */
        initializeCheckTimer = setInterval(function() {
          var value;
          return value = now() - timestamp - 50, timestamp = now(), samples.push(value), samples.length > options.eventLag.sampleCount && samples.shift(), avg = avgAmplitude(samples), ++points >= options.eventLag.minSamples && avg < options.eventLag.lagThreshold ? (pubPromise.progress = 100, clearInterval(initializeCheckTimer)) : pubPromise.progress = 100 * (3 / (avg + 3));
        }, 50);
      }
      return EventLagMonitor;
    }();
    Scaler = function() {
      /**
       * @param {string} source
       * @return {undefined}
       */
      function Scaler(source) {
        /** @type {string} */
        this.source = source;
        /** @type {number} */
        this.last = this.sinceLastUpdate = 0;
        this.rate = options.initialRate;
        /** @type {number} */
        this.catchup = 0;
        /** @type {number} */
        this.progress = this.lastProgress = 0;
        if (null != this.source) {
          this.progress = result(this.source, "progress");
        }
      }
      return Scaler.prototype.tick = function(frameTime, val) {
        var scaling;
        return null == val && (val = result(this.source, "progress")), val >= 100 && (this.done = true), val === this.last ? this.sinceLastUpdate += frameTime : (this.sinceLastUpdate && (this.rate = (val - this.last) / this.sinceLastUpdate), this.catchup = (val - this.progress) / options.catchupTime, this.sinceLastUpdate = 0, this.last = val), val > this.progress && (this.progress += this.catchup * frameTime),
        scaling = 1 - Math.pow(this.progress / 100, options.easeFactor), this.progress += scaling * this.rate * frameTime, this.progress = Math.min(this.lastProgress + options.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
      }, Scaler;
    }();
    /** @type {null} */
    sources = null;
    /** @type {null} */
    conf_lang_text = null;
    /** @type {null} */
    bar = null;
    /** @type {null} */
    uniScaler = null;
    /** @type {null} */
    transition = null;
    /** @type {null} */
    guard = null;
    /** @type {boolean} */
    Pace.running = false;
    /**
     * @return {?}
     */
    handlePushState = function() {
      return options.restartOnPushState ? Pace.restart() : void 0;
    };
    if (null != window.history.pushState) {
      /** @type {function(): ?} */
      _pushState = window.history.pushState;
      /**
       * @return {?}
       */
      window.history.pushState = function() {
        return handlePushState(), _pushState.apply(window.history, arguments);
      };
    }
    if (null != window.history.replaceState) {
      /** @type {function(): ?} */
      _replaceState = window.history.replaceState;
      /**
       * @return {?}
       */
      window.history.replaceState = function() {
        return handlePushState(), _replaceState.apply(window.history, arguments);
      };
    }
    SOURCE_KEYS = {
      ajax : AjaxMonitor,
      elements : graphicOption,
      document : doc1,
      eventLag : EventLagMonitor
    };
    (init = function() {
      var type;
      var _j;
      var i;
      var _len2;
      var index;
      var _ref2;
      var _ref4;
      var _ref3;
      /** @type {!Array} */
      Pace.sources = sources = [];
      /** @type {!Array} */
      _ref2 = ["ajax", "elements", "document", "eventLag"];
      /** @type {number} */
      _j = 0;
      /** @type {number} */
      _len2 = _ref2.length;
      for (; _len2 > _j; _j++) {
        type = _ref2[_j];
        if (options[type] !== false) {
          sources.push(new SOURCE_KEYS[type](options[type]));
        }
      }
      _ref3 = null != (_ref4 = options.extraSources) ? _ref4 : [];
      /** @type {number} */
      i = 0;
      index = _ref3.length;
      for (; index > i; i++) {
        source = _ref3[i];
        sources.push(new source(options));
      }
      return Pace.bar = bar = new Bar, conf_lang_text = [], uniScaler = new Scaler;
    })();
    /**
     * @return {?}
     */
    Pace.stop = function() {
      return Pace.trigger("stop"), Pace.running = false, bar.destroy(), guard = true, null != transition && ("function" == typeof fn && fn(transition), transition = null), init();
    };
    /**
     * @return {?}
     */
    Pace.restart = function() {
      return Pace.trigger("restart"), Pace.stop(), Pace.start();
    };
    /**
     * @return {?}
     */
    Pace.go = function() {
      var start;
      return Pace.running = true, bar.render(), start = now(), guard = false, transition = animate(function(frameTime, slice) {
        var avg;
        var count;
        var done;
        var element;
        var elements;
        var i;
        var j;
        var h;
        var scaler;
        var scalerList;
        var sum;
        var _i;
        var u;
        var _len;
        var _len2;
        var _ref2;
        /** @type {number} */
        h = 100 - bar.progress;
        /** @type {number} */
        count = sum = 0;
        /** @type {boolean} */
        done = true;
        /** @type {number} */
        i = _i = 0;
        _len = sources.length;
        for (; _len > _i; i = ++_i) {
          source = sources[i];
          scalerList = null != conf_lang_text[i] ? conf_lang_text[i] : conf_lang_text[i] = [];
          elements = null != (_ref2 = source.elements) ? _ref2 : [source];
          /** @type {number} */
          j = u = 0;
          _len2 = elements.length;
          for (; _len2 > u; j = ++u) {
            element = elements[j];
            scaler = null != scalerList[j] ? scalerList[j] : scalerList[j] = new Scaler(element);
            /** @type {number} */
            done = done & scaler.done;
            if (!scaler.done) {
              count++;
              sum = sum + scaler.tick(frameTime);
            }
          }
        }
        return avg = sum / count, bar.update(uniScaler.tick(frameTime, avg)), bar.done() || done || guard ? (bar.update(100), Pace.trigger("done"), setTimeout(function() {
          return bar.finish(), Pace.running = false, Pace.trigger("hide");
        }, Math.max(options.ghostTime, Math.max(options.minTime - (now() - start), 0)))) : slice();
      });
    };
    /**
     * @param {?} _s3Params
     * @return {?}
     */
    Pace.start = function(_s3Params) {
      extend(options, _s3Params);
      /** @type {boolean} */
      Pace.running = true;
      try {
        bar.render();
      } catch (_error) {
        NoTargetError = _error;
      }
      return document.querySelector(".pace") ? (Pace.trigger("start"), Pace.go()) : setTimeout(Pace.start, 50);
    };
    if ("function" == typeof define && define.amd) {
      define(["pace"], function() {
        return Pace;
      });
    } else {
      if ("object" == typeof exports) {
        module.exports = Pace;
      } else {
        if (options.startOnPageLoad) {
          Pace.start();
        }
      }
    }
  }).call(this);
  !function(window, factory) {
    if ("function" == typeof define && define.amd) {
      define("jquery-bridget/jquery-bridget", ["jquery"], function(jQuery) {
        return factory(window, jQuery);
      });
    } else {
      if ("object" == typeof module && module.exports) {
        module.exports = factory(window, require("jquery"));
      } else {
        window.jQueryBridget = factory(window, window.jQuery);
      }
    }
  }(window, function(window, jQuery) {
    /**
     * @param {!Object} type
     * @param {!Object} name
     * @param {string} _
     * @return {undefined}
     */
    function jQueryBridget(type, name, _) {
      /**
       * @param {!Array} obj
       * @param {string} name
       * @param {undefined} args
       * @return {?}
       */
      function methodCall(obj, name, args) {
        var string;
        /** @type {string} */
        var url = "$()." + type + '("' + name + '")';
        return obj.each(function(canCreateDiscussions, l) {
          var d = _.data(l, type);
          if (!d) {
            return void callback(type + " not initialized. Cannot call methods, i.e. " + url);
          }
          var old = d[name];
          if (!old || "_" == name.charAt(0)) {
            return void callback(url + " is not a valid method");
          }
          var a = old.apply(d, args);
          string = void 0 === string ? a : string;
        }), void 0 !== string ? string : obj;
      }
      /**
       * @param {!Object} $elems
       * @param {!Object} options
       * @return {undefined}
       */
      function plainCall($elems, options) {
        $elems.each(function(canCreateDiscussions, value) {
          var data = _.data(value, type);
          if (data) {
            data.option(options);
            data._init();
          } else {
            data = new name(value, options);
            _.data(value, type, data);
          }
        });
      }
      _ = _ || jQuery || window.jQuery;
      if (_) {
        if (!name.prototype.option) {
          /**
           * @param {!Object} options
           * @return {undefined}
           */
          name.prototype.option = function(options) {
            if (_.isPlainObject(options)) {
              this.options = _.extend(true, this.options, options);
            }
          };
        }
        /**
         * @param {undefined} arg0
         * @return {?}
         */
        _.fn[type] = function(arg0) {
          if ("string" == typeof arg0) {
            /** @type {!Array<?>} */
            var args = slice.call(arguments, 1);
            return methodCall(this, arg0, args);
          }
          return plainCall(this, arg0), this;
        };
        updateJQuery(_);
      }
    }
    /**
     * @param {string} $
     * @return {undefined}
     */
    function updateJQuery($) {
      if (!(!$ || $ && $.bridget)) {
        /** @type {function(!Object, !Object, string): undefined} */
        $.bridget = jQueryBridget;
      }
    }
    /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
    var slice = Array.prototype.slice;
    var c = window.console;
    /** @type {!Function} */
    var callback = "undefined" == typeof c ? function() {
    } : function(t) {
      c.error(t);
    };
    return updateJQuery(jQuery || window.jQuery), jQueryBridget;
  });
  (function(global, factory) {
    if ("function" == typeof define && define.amd) {
      define("ev-emitter/ev-emitter", factory);
    } else {
      if ("object" == typeof module && module.exports) {
        module.exports = factory();
      } else {
        global.EvEmitter = factory();
      }
    }
  })("undefined" != typeof window ? window : this, function() {
    /**
     * @return {undefined}
     */
    function StopAutoplay() {
    }
    var proto = StopAutoplay.prototype;
    return proto.on = function(type, value) {
      if (type && value) {
        var events = this._events = this._events || {};
        var n = events[type] = events[type] || [];
        return n.indexOf(value) == -1 && n.push(value), this;
      }
    }, proto.once = function(eventName, value) {
      if (eventName && value) {
        this.on(eventName, value);
        var onceEvents = this._onceEvents = this._onceEvents || {};
        var varWikidataTypes = onceEvents[eventName] = onceEvents[eventName] || {};
        return varWikidataTypes[value] = true, this;
      }
    }, proto.off = function(type, name) {
      var events = this._events && this._events[type];
      if (events && events.length) {
        var n = events.indexOf(name);
        return n != -1 && events.splice(n, 1), this;
      }
    }, proto.emitEvent = function(eventName, value) {
      var listeners = this._events && this._events[eventName];
      if (listeners && listeners.length) {
        /** @type {number} */
        var name = 0;
        var listener = listeners[name];
        value = value || [];
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for (; listener;) {
          var rev = onceListeners && onceListeners[listener];
          if (rev) {
            this.off(eventName, listener);
            delete onceListeners[listener];
          }
          listener.apply(this, value);
          /** @type {number} */
          name = name + (rev ? 0 : 1);
          listener = listeners[name];
        }
        return this;
      }
    }, StopAutoplay;
  });
  (function(window, factory) {
    if ("function" == typeof define && define.amd) {
      define("get-size/get-size", [], function() {
        return factory();
      });
    } else {
      if ("object" == typeof module && module.exports) {
        module.exports = factory();
      } else {
        window.getSize = factory();
      }
    }
  })(window, function() {
    /**
     * @param {string} value
     * @return {?}
     */
    function getStyleSize(value) {
      /** @type {number} */
      var i = parseFloat(value);
      /** @type {boolean} */
      var b = value.indexOf("%") == -1 && !isNaN(i);
      return b && i;
    }
    /**
     * @return {undefined}
     */
    function $instructionator() {
    }
    /**
     * @return {?}
     */
    function getZeroSize() {
      var size = {
        width : 0,
        height : 0,
        innerWidth : 0,
        innerHeight : 0,
        outerWidth : 0,
        outerHeight : 0
      };
      /** @type {number} */
      var i = 0;
      for (; i < measurementsLength; i++) {
        var measurement = measurements[i];
        /** @type {number} */
        size[measurement] = 0;
      }
      return size;
    }
    /**
     * @param {!Object} elem
     * @return {?}
     */
    function getStyle(elem) {
      /** @type {(CSSStyleDeclaration|null)} */
      var e = getComputedStyle(elem);
      return e || $("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
    }
    /**
     * @return {undefined}
     */
    function setup() {
      if (!c) {
        /** @type {boolean} */
        c = true;
        /** @type {!Element} */
        var div = document.createElement("div");
        /** @type {string} */
        div.style.width = "200px";
        /** @type {string} */
        div.style.padding = "1px 2px 3px 4px";
        /** @type {string} */
        div.style.borderStyle = "solid";
        /** @type {string} */
        div.style.borderWidth = "1px 2px 3px 4px";
        /** @type {string} */
        div.style.boxSizing = "border-box";
        /** @type {!HTMLBodyElement} */
        var blogDiv = document.body || document.documentElement;
        blogDiv.appendChild(div);
        var style = getStyle(div);
        /** @type {boolean} */
        getSize.isBoxSizeOuter = isBoxSizeOuter = 200 == getStyleSize(style.width);
        blogDiv.removeChild(div);
      }
    }
    /**
     * @param {string} obj
     * @return {?}
     */
    function getSize(obj) {
      if (setup(), "string" == typeof obj && (obj = document.querySelector(obj)), obj && "object" == typeof obj && obj.nodeType) {
        var style = getStyle(obj);
        if ("none" == style.display) {
          return getZeroSize();
        }
        var size = {};
        size.width = obj.offsetWidth;
        size.height = obj.offsetHeight;
        /** @type {boolean} */
        var isBorderBox = size.isBorderBox = "border-box" == style.boxSizing;
        /** @type {number} */
        var i = 0;
        for (; i < measurementsLength; i++) {
          var measurement = measurements[i];
          var value = style[measurement];
          /** @type {number} */
          var hour = parseFloat(value);
          /** @type {number} */
          size[measurement] = isNaN(hour) ? 0 : hour;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) {
          size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        }
        var styleHeight = getStyleSize(style.height);
        return styleHeight !== false && (size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight)), size.innerWidth = size.width - (paddingWidth + borderWidth), size.innerHeight = size.height - (paddingHeight + borderHeight), size.outerWidth = size.width + marginWidth, size.outerHeight = size.height + marginHeight, size;
      }
    }
    var isBoxSizeOuter;
    /** @type {!Function} */
    var $ = "undefined" == typeof console ? $instructionator : function(t) {
      console.error(t);
    };
    /** @type {!Array} */
    var measurements = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    /** @type {number} */
    var measurementsLength = measurements.length;
    /** @type {boolean} */
    var c = false;
    return getSize;
  });
  (function(window, factory) {
    if ("function" == typeof define && define.amd) {
      define("desandro-matches-selector/matches-selector", factory);
    } else {
      if ("object" == typeof module && module.exports) {
        module.exports = factory();
      } else {
        window.matchesSelector = factory();
      }
    }
  })(window, function() {
    var j = function() {
      var ElemProto = window.Element.prototype;
      if (ElemProto.matches) {
        return "matches";
      }
      if (ElemProto.matchesSelector) {
        return "matchesSelector";
      }
      /** @type {!Array} */
      var prefixes = ["webkit", "moz", "ms", "o"];
      /** @type {number} */
      var i = 0;
      for (; i < prefixes.length; i++) {
        var prefix = prefixes[i];
        /** @type {string} */
        var method = prefix + "MatchesSelector";
        if (ElemProto[method]) {
          return method;
        }
      }
    }();
    return function(add, prop) {
      return add[j](prop);
    };
  });
  (function(window, factory) {
    if ("function" == typeof define && define.amd) {
      define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(matchesSelector) {
        return factory(window, matchesSelector);
      });
    } else {
      if ("object" == typeof module && module.exports) {
        module.exports = factory(window, require("desandro-matches-selector"));
      } else {
        window.fizzyUIUtils = factory(window, window.matchesSelector);
      }
    }
  })(window, function(window, matchesSelector) {
    var utils = {};
    /**
     * @param {!Function} options
     * @param {!Object} obj
     * @return {?}
     */
    utils.extend = function(options, obj) {
      var i;
      for (i in obj) {
        options[i] = obj[i];
      }
      return options;
    };
    /**
     * @param {number} a
     * @param {number} b
     * @return {?}
     */
    utils.modulo = function(a, b) {
      return (a % b + b) % b;
    };
    /**
     * @param {!Object} value
     * @return {?}
     */
    utils.makeArray = function(value) {
      /** @type {!Array} */
      var results = [];
      if (Array.isArray(value)) {
        /** @type {!Object} */
        results = value;
      } else {
        if (value && "object" == typeof value && "number" == typeof value.length) {
          /** @type {number} */
          var i = 0;
          for (; i < value.length; i++) {
            results.push(value[i]);
          }
        } else {
          results.push(value);
        }
      }
      return results;
    };
    /**
     * @param {!Array} obj
     * @param {string} arr
     * @return {undefined}
     */
    utils.removeFrom = function(obj, arr) {
      var i = obj.indexOf(arr);
      if (i != -1) {
        obj.splice(i, 1);
      }
    };
    /**
     * @param {string} node
     * @param {?} selector
     * @return {?}
     */
    utils.getParent = function(node, selector) {
      for (; node.parentNode && node != document.body;) {
        if (node = node.parentNode, matchesSelector(node, selector)) {
          return node;
        }
      }
    };
    /**
     * @param {(Object|string)} from
     * @return {?}
     */
    utils.getQueryElement = function(from) {
      return "string" == typeof from ? document.querySelector(from) : from;
    };
    /**
     * @param {!Object} event
     * @return {undefined}
     */
    utils.handleEvent = function(event) {
      /** @type {string} */
      var method = "on" + event.type;
      if (this[method]) {
        this[method](event);
      }
    };
    /**
     * @param {!Array} selector
     * @param {?} item
     * @return {?}
     */
    utils.filterFindElements = function(selector, item) {
      selector = utils.makeArray(selector);
      /** @type {!Array} */
      var t = [];
      return selector.forEach(function(child) {
        if (child instanceof HTMLElement) {
          if (!item) {
            return void t.push(child);
          }
          if (matchesSelector(child, item)) {
            t.push(child);
          }
          /** @type {!NodeList<Element>} */
          var st = child.querySelectorAll(item);
          /** @type {number} */
          var i = 0;
          for (; i < st.length; i++) {
            t.push(st[i]);
          }
        }
      }), t;
    };
    /**
     * @param {!Function} _class
     * @param {string} methodName
     * @param {number} threshold
     * @return {undefined}
     */
    utils.debounceMethod = function(_class, methodName, threshold) {
      var f = _class.prototype[methodName];
      /** @type {string} */
      var timeoutName = methodName + "Timeout";
      /**
       * @return {undefined}
       */
      _class.prototype[methodName] = function() {
        var timeout = this[timeoutName];
        if (timeout) {
          clearTimeout(timeout);
        }
        /** @type {!Arguments} */
        var t = arguments;
        var o = this;
        /** @type {number} */
        this[timeoutName] = setTimeout(function() {
          f.apply(o, t);
          delete o[timeoutName];
        }, threshold || 100);
      };
    };
    /**
     * @param {!Function} fn
     * @return {undefined}
     */
    utils.docReady = function(fn) {
      /** @type {string} */
      var rs = document.readyState;
      if ("complete" == rs || "interactive" == rs) {
        setTimeout(fn);
      } else {
        document.addEventListener("DOMContentLoaded", fn);
      }
    };
    /**
     * @param {!Object} name
     * @return {?}
     */
    utils.toDashed = function(name) {
      return name.replace(/(.)([A-Z])/g, function(canCreateDiscussions, roundID, divisionID) {
        return roundID + "-" + divisionID;
      }).toLowerCase();
    };
    var console = window.console;
    return utils.htmlInit = function(WidgetClass, namespace) {
      utils.docReady(function() {
        var key = utils.toDashed(namespace);
        /** @type {string} */
        var name = "data-" + key;
        /** @type {!NodeList<Element>} */
        var value = document.querySelectorAll("[" + name + "]");
        /** @type {!NodeList<Element>} */
        var param = document.querySelectorAll(".js-" + key);
        var pipelets = utils.makeArray(value).concat(utils.makeArray(param));
        /** @type {string} */
        var type = name + "-options";
        var $ = window.jQuery;
        pipelets.forEach(function(elem) {
          var options;
          var to = elem.getAttribute(name) || elem.getAttribute(type);
          try {
            /** @type {*} */
            options = to && JSON.parse(to);
          } catch (missMessage) {
            return void(console && console.error("Error parsing " + name + " on " + elem.className + ": " + missMessage));
          }
          var item = new WidgetClass(elem, options);
          if ($) {
            $.data(elem, namespace, item);
          }
        });
      });
    }, utils;
  });
  (function(window, factory) {
    if ("function" == typeof define && define.amd) {
      define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], factory);
    } else {
      if ("object" == typeof module && module.exports) {
        module.exports = factory(require("ev-emitter"), require("get-size"));
      } else {
        window.Outlayer = {};
        window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
      }
    }
  })(window, function(WebSocketDataModel, getSize) {
    /**
     * @param {?} val
     * @return {?}
     */
    function isEmptyObj(val) {
      var k;
      for (k in val) {
        return false;
      }
      return k = null, true;
    }
    /**
     * @param {!Object} value
     * @param {!Object} name
     * @return {undefined}
     */
    function Item(value, name) {
      if (value) {
        /** @type {!Object} */
        this.element = value;
        /** @type {!Object} */
        this.layout = name;
        this.position = {
          x : 0,
          y : 0
        };
        this._create();
      }
    }
    /**
     * @param {string} value
     * @return {?}
     */
    function toDash(value) {
      return value.replace(/([A-Z])/g, function(p_Interval) {
        return "-" + p_Interval.toLowerCase();
      });
    }
    /** @type {!CSSStyleDeclaration} */
    var docElemStyle = document.documentElement.style;
    /** @type {string} */
    var transitionProperty = "string" == typeof docElemStyle.transition ? "transition" : "WebkitTransition";
    /** @type {string} */
    var transformProperty = "string" == typeof docElemStyle.transform ? "transform" : "WebkitTransform";
    var transitionEndEvent = {
      WebkitTransition : "webkitTransitionEnd",
      transition : "transitionend"
    }[transitionProperty];
    var vendorProperties = {
      transform : transformProperty,
      transition : transitionProperty,
      transitionDuration : transitionProperty + "Duration",
      transitionProperty : transitionProperty + "Property",
      transitionDelay : transitionProperty + "Delay"
    };
    /** @type {!Object} */
    var proto = Item.prototype = Object.create(WebSocketDataModel.prototype);
    /** @type {function(!Object, !Object): undefined} */
    proto.constructor = Item;
    /**
     * @return {undefined}
     */
    proto._create = function() {
      this._transn = {
        ingProperties : {},
        clean : {},
        onEnd : {}
      };
      this.css({
        position : "absolute"
      });
    };
    /**
     * @param {!Object} event
     * @return {undefined}
     */
    proto.handleEvent = function(event) {
      /** @type {string} */
      var method = "on" + event.type;
      if (this[method]) {
        this[method](event);
      }
    };
    /**
     * @return {undefined}
     */
    proto.getSize = function() {
      this.size = getSize(this.element);
    };
    /**
     * @param {!Object} value
     * @return {undefined}
     */
    proto.css = function(value) {
      var el = this.element.style;
      var prop;
      for (prop in value) {
        var propName = vendorProperties[prop] || prop;
        el[propName] = value[prop];
      }
    };
    /**
     * @return {undefined}
     */
    proto.getPosition = function() {
      /** @type {(CSSStyleDeclaration|null)} */
      var style = getComputedStyle(this.element);
      var isOriginLeft = this.layout._getOption("originLeft");
      var isOriginTop = this.layout._getOption("originTop");
      /** @type {string} */
      var value = style[isOriginLeft ? "left" : "right"];
      /** @type {string} */
      var border = style[isOriginTop ? "top" : "bottom"];
      var layoutSize = this.layout.size;
      /** @type {number} */
      var x = value.indexOf("%") != -1 ? parseFloat(value) / 100 * layoutSize.width : parseInt(value, 10);
      /** @type {number} */
      var y = border.indexOf("%") != -1 ? parseFloat(border) / 100 * layoutSize.height : parseInt(border, 10);
      /** @type {number} */
      x = isNaN(x) ? 0 : x;
      /** @type {number} */
      y = isNaN(y) ? 0 : y;
      /** @type {number} */
      x = x - (isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight);
      /** @type {number} */
      y = y - (isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom);
      /** @type {number} */
      this.position.x = x;
      /** @type {number} */
      this.position.y = y;
    };
    /**
     * @return {undefined}
     */
    proto.layoutPosition = function() {
      var layoutSize = this.layout.size;
      var style = {};
      var isOriginLeft = this.layout._getOption("originLeft");
      var isOriginTop = this.layout._getOption("originTop");
      /** @type {string} */
      var xPadding = isOriginLeft ? "paddingLeft" : "paddingRight";
      /** @type {string} */
      var xProperty = isOriginLeft ? "left" : "right";
      /** @type {string} */
      var xResetProperty = isOriginLeft ? "right" : "left";
      var x = this.position.x + layoutSize[xPadding];
      style[xProperty] = this.getXValue(x);
      /** @type {string} */
      style[xResetProperty] = "";
      /** @type {string} */
      var yPadding = isOriginTop ? "paddingTop" : "paddingBottom";
      /** @type {string} */
      var yProperty = isOriginTop ? "top" : "bottom";
      /** @type {string} */
      var yResetProperty = isOriginTop ? "bottom" : "top";
      var y = this.position.y + layoutSize[yPadding];
      style[yProperty] = this.getYValue(y);
      /** @type {string} */
      style[yResetProperty] = "";
      this.css(style);
      this.emitEvent("layout", [this]);
    };
    /**
     * @param {number} x
     * @return {?}
     */
    proto.getXValue = function(x) {
      var isHorizontal = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && !isHorizontal ? x / this.layout.size.width * 100 + "%" : x + "px";
    };
    /**
     * @param {number} y
     * @return {?}
     */
    proto.getYValue = function(y) {
      var isHorizontal = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && isHorizontal ? y / this.layout.size.height * 100 + "%" : y + "px";
    };
    /**
     * @param {!Date} x
     * @param {!Date} y
     * @return {?}
     */
    proto._transitionTo = function(x, y) {
      this.getPosition();
      var curX = this.position.x;
      var curY = this.position.y;
      /** @type {number} */
      var compareX = parseInt(x, 10);
      /** @type {number} */
      var compareY = parseInt(y, 10);
      /** @type {boolean} */
      var didNotMove = compareX === this.position.x && compareY === this.position.y;
      if (this.setPosition(x, y), didNotMove && !this.isTransitioning) {
        return void this.layoutPosition();
      }
      /** @type {number} */
      var transX = x - curX;
      /** @type {number} */
      var transY = y - curY;
      var transitionStyle = {};
      transitionStyle.transform = this.getTranslate(transX, transY);
      this.transition({
        to : transitionStyle,
        onTransitionEnd : {
          transform : this.layoutPosition
        },
        isCleaning : true
      });
    };
    /**
     * @param {number} x
     * @param {number} y
     * @return {?}
     */
    proto.getTranslate = function(x, y) {
      var isOriginLeft = this.layout._getOption("originLeft");
      var isOriginTop = this.layout._getOption("originTop");
      return x = isOriginLeft ? x : -x, y = isOriginTop ? y : -y, "translate3d(" + x + "px, " + y + "px, 0)";
    };
    /**
     * @param {!Date} x
     * @param {!Date} y
     * @return {undefined}
     */
    proto.goTo = function(x, y) {
      this.setPosition(x, y);
      this.layoutPosition();
    };
    /** @type {function(!Date, !Date): ?} */
    proto.moveTo = proto._transitionTo;
    /**
     * @param {!Date} x
     * @param {!Date} y
     * @return {undefined}
     */
    proto.setPosition = function(x, y) {
      /** @type {number} */
      this.position.x = parseInt(x, 10);
      /** @type {number} */
      this.position.y = parseInt(y, 10);
    };
    /**
     * @param {!Object} args
     * @return {undefined}
     */
    proto._nonTransition = function(args) {
      this.css(args.to);
      if (args.isCleaning) {
        this._removeStyles(args.to);
      }
      var prop;
      for (prop in args.onTransitionEnd) {
        args.onTransitionEnd[prop].call(this);
      }
    };
    /**
     * @param {!Object} value
     * @return {?}
     */
    proto.transition = function(value) {
      if (!parseFloat(this.layout.options.transitionDuration)) {
        return void this._nonTransition(value);
      }
      var _transition = this._transn;
      var prop;
      for (prop in value.onTransitionEnd) {
        _transition.onEnd[prop] = value.onTransitionEnd[prop];
      }
      for (prop in value.to) {
        /** @type {boolean} */
        _transition.ingProperties[prop] = true;
        if (value.isCleaning) {
          /** @type {boolean} */
          _transition.clean[prop] = true;
        }
      }
      if (value.from) {
        this.css(value.from);
        var currentH = this.element.offsetHeight;
        /** @type {null} */
        currentH = null;
      }
      this.enableTransition(value.to);
      this.css(value.to);
      /** @type {boolean} */
      this.isTransitioning = true;
    };
    /** @type {string} */
    var itemTransitionProperties = "opacity," + toDash(transformProperty);
    /**
     * @return {undefined}
     */
    proto.enableTransition = function() {
      if (!this.isTransitioning) {
        var delay = this.layout.options.transitionDuration;
        delay = "number" == typeof delay ? delay + "ms" : delay;
        this.css({
          transitionProperty : itemTransitionProperties,
          transitionDuration : delay,
          transitionDelay : this.staggerDelay || 0
        });
        this.element.addEventListener(transitionEndEvent, this, false);
      }
    };
    /**
     * @param {!Event} event
     * @return {undefined}
     */
    proto.onwebkitTransitionEnd = function(event) {
      this.ontransitionend(event);
    };
    /**
     * @param {!Event} event
     * @return {undefined}
     */
    proto.onotransitionend = function(event) {
      this.ontransitionend(event);
    };
    var dashedVendorProperties = {
      "-webkit-transform" : "transform"
    };
    /**
     * @param {!Event} event
     * @return {undefined}
     */
    proto.ontransitionend = function(event) {
      if (event.target === this.element) {
        var _transition = this._transn;
        var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
        if (delete _transition.ingProperties[propertyName], isEmptyObj(_transition.ingProperties) && this.disableTransition(), propertyName in _transition.clean && (this.element.style[event.propertyName] = "", delete _transition.clean[propertyName]), propertyName in _transition.onEnd) {
          var onTransitionEnd = _transition.onEnd[propertyName];
          onTransitionEnd.call(this);
          delete _transition.onEnd[propertyName];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    };
    /**
     * @return {undefined}
     */
    proto.disableTransition = function() {
      this.removeTransitionStyles();
      this.element.removeEventListener(transitionEndEvent, this, false);
      /** @type {boolean} */
      this.isTransitioning = false;
    };
    /**
     * @param {?} style
     * @return {undefined}
     */
    proto._removeStyles = function(style) {
      var css = {};
      var i;
      for (i in style) {
        /** @type {string} */
        css[i] = "";
      }
      this.css(css);
    };
    var css = {
      transitionProperty : "",
      transitionDuration : "",
      transitionDelay : ""
    };
    return proto.removeTransitionStyles = function() {
      this.css(css);
    }, proto.stagger = function(delay) {
      delay = isNaN(delay) ? 0 : delay;
      /** @type {string} */
      this.staggerDelay = delay + "ms";
    }, proto.removeElem = function() {
      this.element.parentNode.removeChild(this.element);
      this.css({
        display : ""
      });
      this.emitEvent("remove", [this]);
    }, proto.remove = function() {
      return transitionProperty && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
        this.removeElem();
      }), void this.hide()) : void this.removeElem();
    }, proto.reveal = function() {
      delete this.isHidden;
      this.css({
        display : ""
      });
      var options = this.layout.options;
      var onTransitionEnd = {};
      var transitionEndProperty = this.getHideRevealTransitionEndProperty("visibleStyle");
      onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
      this.transition({
        from : options.hiddenStyle,
        to : options.visibleStyle,
        isCleaning : true,
        onTransitionEnd : onTransitionEnd
      });
    }, proto.onRevealTransitionEnd = function() {
      if (!this.isHidden) {
        this.emitEvent("reveal");
      }
    }, proto.getHideRevealTransitionEndProperty = function(styleProperty) {
      var style = this.layout.options[styleProperty];
      if (style.opacity) {
        return "opacity";
      }
      var prop;
      for (prop in style) {
        return prop;
      }
    }, proto.hide = function() {
      /** @type {boolean} */
      this.isHidden = true;
      this.css({
        display : ""
      });
      var options = this.layout.options;
      var onTransitionEnd = {};
      var transitionEndProperty = this.getHideRevealTransitionEndProperty("hiddenStyle");
      onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
      this.transition({
        from : options.visibleStyle,
        to : options.hiddenStyle,
        isCleaning : true,
        onTransitionEnd : onTransitionEnd
      });
    }, proto.onHideTransitionEnd = function() {
      if (this.isHidden) {
        this.css({
          display : "none"
        });
        this.emitEvent("hide");
      }
    }, proto.destroy = function() {
      this.css({
        position : "",
        left : "",
        right : "",
        top : "",
        bottom : "",
        transition : "",
        transform : ""
      });
    }, Item;
  });
  (function(window, factory) {
    if ("function" == typeof define && define.amd) {
      define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(localforage, getSize, exports, Item) {
        return factory(window, localforage, getSize, exports, Item);
      });
    } else {
      if ("object" == typeof module && module.exports) {
        module.exports = factory(window, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item"));
      } else {
        window.Outlayer = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
      }
    }
  })(window, function(window, type, getSize, utils, Item) {
    /**
     * @param {(Object|string)} element
     * @param {!Object} options
     * @return {?}
     */
    function Outlayer(element, options) {
      var el = utils.getQueryElement(element);
      if (!el) {
        return void(wc && wc.error("Bad element for " + this.constructor.namespace + ": " + (el || element)));
      }
      this.element = el;
      if (jQuery) {
        this.$element = jQuery(this.element);
      }
      this.options = utils.extend({}, this.constructor.defaults);
      this.option(options);
      /** @type {number} */
      var id = ++nextCallbackId;
      /** @type {number} */
      this.element.outlayerGUID = id;
      anonIdToIdMap[id] = this;
      this._create();
      var isInitLayout = this._getOption("initLayout");
      if (isInitLayout) {
        this.layout();
      }
    }
    /**
     * @param {!Function} Parent
     * @return {?}
     */
    function subclass(Parent) {
      /**
       * @return {undefined}
       */
      function Model() {
        Parent.apply(this, arguments);
      }
      return Model.prototype = Object.create(Parent.prototype), Model.prototype.constructor = Model, Model;
    }
    /**
     * @param {string} value
     * @return {?}
     */
    function getMilliseconds(value) {
      if ("number" == typeof value) {
        return value;
      }
      var defs = value.match(/(^\d*\.?\d*)(\w*)/);
      var i = defs && defs[1];
      var units = defs && defs[2];
      if (!i.length) {
        return 0;
      }
      /** @type {number} */
      i = parseFloat(i);
      var stackedDomainMax = unitAliases[units] || 1;
      return i * stackedDomainMax;
    }
    var wc = window.console;
    var jQuery = window.jQuery;
    /**
     * @return {undefined}
     */
    var noop = function() {
    };
    /** @type {number} */
    var nextCallbackId = 0;
    var anonIdToIdMap = {};
    /** @type {string} */
    Outlayer.namespace = "outlayer";
    /** @type {!Function} */
    Outlayer.Item = Item;
    Outlayer.defaults = {
      containerStyle : {
        position : "relative"
      },
      initLayout : true,
      originLeft : true,
      originTop : true,
      resize : true,
      resizeContainer : true,
      transitionDuration : "0.4s",
      hiddenStyle : {
        opacity : 0,
        transform : "scale(0.001)"
      },
      visibleStyle : {
        opacity : 1,
        transform : "scale(1)"
      }
    };
    var proto = Outlayer.prototype;
    utils.extend(proto, type.prototype);
    /**
     * @param {!Object} b
     * @return {undefined}
     */
    proto.option = function(b) {
      utils.extend(this.options, b);
    };
    /**
     * @param {string} option
     * @return {?}
     */
    proto._getOption = function(option) {
      var oldOption = this.constructor.compatOptions[option];
      return oldOption && void 0 !== this.options[oldOption] ? this.options[oldOption] : this.options[option];
    };
    Outlayer.compatOptions = {
      initLayout : "isInitLayout",
      horizontal : "isHorizontal",
      layoutInstant : "isLayoutInstant",
      originLeft : "isOriginLeft",
      originTop : "isOriginTop",
      resize : "isResizeBound",
      resizeContainer : "isResizingContainer"
    };
    /**
     * @return {undefined}
     */
    proto._create = function() {
      this.reloadItems();
      /** @type {!Array} */
      this.stamps = [];
      this.stamp(this.options.stamp);
      utils.extend(this.element.style, this.options.containerStyle);
      var canBindResize = this._getOption("resize");
      if (canBindResize) {
        this.bindResize();
      }
    };
    /**
     * @return {undefined}
     */
    proto.reloadItems = function() {
      this.items = this._itemize(this.element.children);
    };
    /**
     * @param {!Array} elems
     * @return {?}
     */
    proto._itemize = function(elems) {
      var itemElems = this._filterFindItemElements(elems);
      var Item = this.constructor.Item;
      /** @type {!Array} */
      var items = [];
      /** @type {number} */
      var i = 0;
      for (; i < itemElems.length; i++) {
        var elem = itemElems[i];
        var item = new Item(elem, this);
        items.push(item);
      }
      return items;
    };
    /**
     * @param {!Array} elems
     * @return {?}
     */
    proto._filterFindItemElements = function(elems) {
      return utils.filterFindElements(elems, this.options.itemSelector);
    };
    /**
     * @return {?}
     */
    proto.getItemElements = function() {
      return this.items.map(function(arrowIcon) {
        return arrowIcon.element;
      });
    };
    /**
     * @return {undefined}
     */
    proto.layout = function() {
      this._resetLayout();
      this._manageStamps();
      var layoutInstant = this._getOption("layoutInstant");
      var isInstant = void 0 !== layoutInstant ? layoutInstant : !this._isLayoutInited;
      this.layoutItems(this.items, isInstant);
      /** @type {boolean} */
      this._isLayoutInited = true;
    };
    /** @type {function(): undefined} */
    proto._init = proto.layout;
    /**
     * @return {undefined}
     */
    proto._resetLayout = function() {
      this.getSize();
    };
    /**
     * @return {undefined}
     */
    proto.getSize = function() {
      this.size = getSize(this.element);
    };
    /**
     * @param {string} measurement
     * @param {string} size
     * @return {undefined}
     */
    proto._getMeasurement = function(measurement, size) {
      var elem;
      var option = this.options[measurement];
      if (option) {
        if ("string" == typeof option) {
          elem = this.element.querySelector(option);
        } else {
          if (option instanceof HTMLElement) {
            /** @type {!HTMLElement} */
            elem = option;
          }
        }
        this[measurement] = elem ? getSize(elem)[size] : option;
      } else {
        /** @type {number} */
        this[measurement] = 0;
      }
    };
    /**
     * @param {?} items
     * @param {boolean} isInstant
     * @return {undefined}
     */
    proto.layoutItems = function(items, isInstant) {
      items = this._getItemsForLayout(items);
      this._layoutItems(items, isInstant);
      this._postLayout();
    };
    /**
     * @param {!Object} items
     * @return {?}
     */
    proto._getItemsForLayout = function(items) {
      return items.filter(function(results) {
        return !results.isIgnored;
      });
    };
    /**
     * @param {!Object} items
     * @param {boolean} isInstant
     * @return {undefined}
     */
    proto._layoutItems = function(items, isInstant) {
      if (this._emitCompleteOnItems("layout", items), items && items.length) {
        /** @type {!Array} */
        var queue = [];
        items.forEach(function(item) {
          var position = this._getItemLayoutPosition(item);
          /** @type {!Object} */
          position.item = item;
          position.isInstant = isInstant || item.isLayoutInstant;
          queue.push(position);
        }, this);
        this._processLayoutQueue(queue);
      }
    };
    /**
     * @return {?}
     */
    proto._getItemLayoutPosition = function() {
      return {
        x : 0,
        y : 0
      };
    };
    /**
     * @param {!Array} queue
     * @return {undefined}
     */
    proto._processLayoutQueue = function(queue) {
      this.updateStagger();
      queue.forEach(function(obj, i) {
        this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
      }, this);
    };
    /**
     * @return {?}
     */
    proto.updateStagger = function() {
      var stagger = this.options.stagger;
      return null === stagger || void 0 === stagger ? void(this.stagger = 0) : (this.stagger = getMilliseconds(stagger), this.stagger);
    };
    /**
     * @param {!CanvasRenderingContext2D} item
     * @param {!Date} x
     * @param {!Date} y
     * @param {?} isInstant
     * @param {?} i
     * @return {undefined}
     */
    proto._positionItem = function(item, x, y, isInstant, i) {
      if (isInstant) {
        item.goTo(x, y);
      } else {
        item.stagger(i * this.stagger);
        item.moveTo(x, y);
      }
    };
    /**
     * @return {undefined}
     */
    proto._postLayout = function() {
      this.resizeContainer();
    };
    /**
     * @return {undefined}
     */
    proto.resizeContainer = function() {
      var isResizingContainer = this._getOption("resizeContainer");
      if (isResizingContainer) {
        var size = this._getContainerSize();
        if (size) {
          this._setContainerMeasure(size.width, true);
          this._setContainerMeasure(size.height, false);
        }
      }
    };
    /** @type {function(): undefined} */
    proto._getContainerSize = noop;
    /**
     * @param {number} measure
     * @param {boolean} isWidth
     * @return {undefined}
     */
    proto._setContainerMeasure = function(measure, isWidth) {
      if (void 0 !== measure) {
        var elemSize = this.size;
        if (elemSize.isBorderBox) {
          measure = measure + (isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth);
        }
        /** @type {number} */
        measure = Math.max(measure, 0);
        /** @type {string} */
        this.element.style[isWidth ? "width" : "height"] = measure + "px";
      }
    };
    /**
     * @param {string} eventName
     * @param {!Object} items
     * @return {?}
     */
    proto._emitCompleteOnItems = function(eventName, items) {
      /**
       * @return {undefined}
       */
      function onComplete() {
        _this.dispatchEvent(eventName + "Complete", null, [items]);
      }
      /**
       * @return {undefined}
       */
      function tick() {
        localCount++;
        if (localCount == count) {
          onComplete();
        }
      }
      var _this = this;
      var count = items.length;
      if (!items || !count) {
        return void onComplete();
      }
      /** @type {number} */
      var localCount = 0;
      items.forEach(function(Events) {
        Events.once(eventName, tick);
      });
    };
    /**
     * @param {string} type
     * @param {!Object} value
     * @param {!Object} name
     * @return {undefined}
     */
    proto.dispatchEvent = function(type, value, name) {
      var method = value ? [value].concat(name) : name;
      if (this.emitEvent(type, method), jQuery) {
        if (this.$element = this.$element || jQuery(this.element), value) {
          var e = jQuery.Event(value);
          /** @type {string} */
          e.type = type;
          this.$element.trigger(e, name);
        } else {
          this.$element.trigger(type, name);
        }
      }
    };
    /**
     * @param {string} elem
     * @return {undefined}
     */
    proto.ignore = function(elem) {
      var item = this.getItem(elem);
      if (item) {
        /** @type {boolean} */
        item.isIgnored = true;
      }
    };
    /**
     * @param {string} elem
     * @return {undefined}
     */
    proto.unignore = function(elem) {
      var item = this.getItem(elem);
      if (item) {
        delete item.isIgnored;
      }
    };
    /**
     * @param {!Array} elems
     * @return {undefined}
     */
    proto.stamp = function(elems) {
      elems = this._find(elems);
      if (elems) {
        this.stamps = this.stamps.concat(elems);
        elems.forEach(this.ignore, this);
      }
    };
    /**
     * @param {!Array} elems
     * @return {undefined}
     */
    proto.unstamp = function(elems) {
      elems = this._find(elems);
      if (elems) {
        elems.forEach(function(elem) {
          utils.removeFrom(this.stamps, elem);
          this.unignore(elem);
        }, this);
      }
    };
    /**
     * @param {!Array} elems
     * @return {?}
     */
    proto._find = function(elems) {
      if (elems) {
        return "string" == typeof elems && (elems = this.element.querySelectorAll(elems)), elems = utils.makeArray(elems);
      }
    };
    /**
     * @return {undefined}
     */
    proto._manageStamps = function() {
      if (this.stamps && this.stamps.length) {
        this._getBoundingRect();
        this.stamps.forEach(this._manageStamp, this);
      }
    };
    /**
     * @return {undefined}
     */
    proto._getBoundingRect = function() {
      var boundingRect = this.element.getBoundingClientRect();
      var size = this.size;
      this._boundingRect = {
        left : boundingRect.left + size.paddingLeft + size.borderLeftWidth,
        top : boundingRect.top + size.paddingTop + size.borderTopWidth,
        right : boundingRect.right - (size.paddingRight + size.borderRightWidth),
        bottom : boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
      };
    };
    /** @type {function(): undefined} */
    proto._manageStamp = noop;
    /**
     * @param {!Object} elem
     * @return {?}
     */
    proto._getElementOffset = function(elem) {
      var boundingRect = elem.getBoundingClientRect();
      var thisRect = this._boundingRect;
      var size = getSize(elem);
      var offset = {
        left : boundingRect.left - thisRect.left - size.marginLeft,
        top : boundingRect.top - thisRect.top - size.marginTop,
        right : thisRect.right - boundingRect.right - size.marginRight,
        bottom : thisRect.bottom - boundingRect.bottom - size.marginBottom
      };
      return offset;
    };
    proto.handleEvent = utils.handleEvent;
    /**
     * @return {undefined}
     */
    proto.bindResize = function() {
      window.addEventListener("resize", this);
      /** @type {boolean} */
      this.isResizeBound = true;
    };
    /**
     * @return {undefined}
     */
    proto.unbindResize = function() {
      window.removeEventListener("resize", this);
      /** @type {boolean} */
      this.isResizeBound = false;
    };
    /**
     * @return {undefined}
     */
    proto.onresize = function() {
      this.resize();
    };
    utils.debounceMethod(Outlayer, "onresize", 100);
    /**
     * @return {undefined}
     */
    proto.resize = function() {
      if (this.isResizeBound && this.needsResizeLayout()) {
        this.layout();
      }
    };
    /**
     * @return {?}
     */
    proto.needsResizeLayout = function() {
      var size = getSize(this.element);
      var hasSizes = this.size && size;
      return hasSizes && size.innerWidth !== this.size.innerWidth;
    };
    /**
     * @param {!Array} elems
     * @return {?}
     */
    proto.addItems = function(elems) {
      var items = this._itemize(elems);
      return items.length && (this.items = this.items.concat(items)), items;
    };
    /**
     * @param {!Array} elems
     * @return {undefined}
     */
    proto.appended = function(elems) {
      var items = this.addItems(elems);
      if (items.length) {
        this.layoutItems(items, true);
        this.reveal(items);
      }
    };
    /**
     * @param {!Array} elems
     * @return {undefined}
     */
    proto.prepended = function(elems) {
      var items = this._itemize(elems);
      if (items.length) {
        var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(items, true);
        this.reveal(items);
        this.layoutItems(previousItems);
      }
    };
    /**
     * @param {!Object} items
     * @return {undefined}
     */
    proto.reveal = function(items) {
      if (this._emitCompleteOnItems("reveal", items), items && items.length) {
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
          item.stagger(i * stagger);
          item.reveal();
        });
      }
    };
    /**
     * @param {!Object} items
     * @return {undefined}
     */
    proto.hide = function(items) {
      if (this._emitCompleteOnItems("hide", items), items && items.length) {
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
          item.stagger(i * stagger);
          item.hide();
        });
      }
    };
    /**
     * @param {!Object} elems
     * @return {undefined}
     */
    proto.revealItemElements = function(elems) {
      var items = this.getItems(elems);
      this.reveal(items);
    };
    /**
     * @param {!Object} elems
     * @return {undefined}
     */
    proto.hideItemElements = function(elems) {
      var items = this.getItems(elems);
      this.hide(items);
    };
    /**
     * @param {string} elem
     * @return {?}
     */
    proto.getItem = function(elem) {
      /** @type {number} */
      var i = 0;
      for (; i < this.items.length; i++) {
        var item = this.items[i];
        if (item.element == elem) {
          return item;
        }
      }
    };
    /**
     * @param {!Object} selector
     * @return {?}
     */
    proto.getItems = function(selector) {
      selector = utils.makeArray(selector);
      /** @type {!Array} */
      var standaloneAttachments = [];
      return selector.forEach(function(elem) {
        var item = this.getItem(elem);
        if (item) {
          standaloneAttachments.push(item);
        }
      }, this), standaloneAttachments;
    };
    /**
     * @param {string} key
     * @return {undefined}
     */
    proto.remove = function(key) {
      var items = this.getItems(key);
      this._emitCompleteOnItems("remove", items);
      if (items && items.length) {
        items.forEach(function(item) {
          item.remove();
          utils.removeFrom(this.items, item);
        }, this);
      }
    };
    /**
     * @return {undefined}
     */
    proto.destroy = function() {
      var style = this.element.style;
      /** @type {string} */
      style.height = "";
      /** @type {string} */
      style.position = "";
      /** @type {string} */
      style.width = "";
      this.items.forEach(function(anAlertDialog) {
        anAlertDialog.destroy();
      });
      this.unbindResize();
      var id = this.element.outlayerGUID;
      delete anonIdToIdMap[id];
      delete this.element.outlayerGUID;
      if (jQuery) {
        jQuery.removeData(this.element, this.constructor.namespace);
      }
    };
    /**
     * @param {!Object} value
     * @return {?}
     */
    Outlayer.data = function(value) {
      value = utils.getQueryElement(value);
      var ffor = value && value.outlayerGUID;
      return ffor && anonIdToIdMap[ffor];
    };
    /**
     * @param {!Object} namespace
     * @param {!Object} styles
     * @return {?}
     */
    Outlayer.create = function(namespace, styles) {
      var Layout = subclass(Outlayer);
      return Layout.defaults = utils.extend({}, Outlayer.defaults), utils.extend(Layout.defaults, styles), Layout.compatOptions = utils.extend({}, Outlayer.compatOptions), Layout.namespace = namespace, Layout.data = Outlayer.data, Layout.Item = subclass(Item), utils.htmlInit(Layout, namespace), jQuery && jQuery.bridget && jQuery.bridget(namespace, Layout), Layout;
    };
    var unitAliases = {
      ms : 1,
      s : 1e3
    };
    return Outlayer.Item = Item, Outlayer;
  });
  (function(window, factory) {
    if ("function" == typeof define && define.amd) {
      define("isotope/js/item", ["outlayer/outlayer"], factory);
    } else {
      if ("object" == typeof module && module.exports) {
        module.exports = factory(require("outlayer"));
      } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.Item = factory(window.Outlayer);
      }
    }
  })(window, function(result) {
    /**
     * @return {undefined}
     */
    function Tracker() {
      result.Item.apply(this, arguments);
    }
    /** @type {!Object} */
    var proto = Tracker.prototype = Object.create(result.Item.prototype);
    /** @type {function(): undefined} */
    var _create = proto._create;
    /**
     * @return {undefined}
     */
    proto._create = function() {
      /** @type {number} */
      this.id = this.layout.itemGUID++;
      _create.call(this);
      this.sortData = {};
    };
    /**
     * @return {undefined}
     */
    proto.updateSortData = function() {
      if (!this.isIgnored) {
        this.sortData.id = this.id;
        this.sortData["original-order"] = this.id;
        /** @type {number} */
        this.sortData.random = Math.random();
        var getSortData = this.layout.options.getSortData;
        var sorters = this.layout._sorters;
        var key;
        for (key in getSortData) {
          var sorter = sorters[key];
          this.sortData[key] = sorter(this.element, this);
        }
      }
    };
    /** @type {function(): undefined} */
    var destroy = proto.destroy;
    return proto.destroy = function() {
      destroy.apply(this, arguments);
      this.css({
        display : ""
      });
    }, Tracker;
  });
  (function(window, factory) {
    if ("function" == typeof define && define.amd) {
      define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], factory);
    } else {
      if ("object" == typeof module && module.exports) {
        module.exports = factory(require("get-size"), require("outlayer"));
      } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer);
      }
    }
  })(window, function(getSize, ProxyClass) {
    /**
     * @param {!Object} isotope
     * @return {undefined}
     */
    function LayoutMode(isotope) {
      /** @type {!Object} */
      this.isotope = isotope;
      if (isotope) {
        this.options = isotope.options[this.namespace];
        this.element = isotope.element;
        this.items = isotope.filteredItems;
        this.size = isotope.size;
      }
    }
    var proto = LayoutMode.prototype;
    /** @type {!Array} */
    var facadeMethods = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return facadeMethods.forEach(function(k) {
      /**
       * @return {?}
       */
      proto[k] = function() {
        return ProxyClass.prototype[k].apply(this.isotope, arguments);
      };
    }), proto.needsVerticalResizeLayout = function() {
      var size = getSize(this.isotope.element);
      var hasSizes = this.isotope.size && size;
      return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
    }, proto._getMeasurement = function() {
      this.isotope._getMeasurement.apply(this, arguments);
    }, proto.getColumnWidth = function() {
      this.getSegmentSize("column", "Width");
    }, proto.getRowHeight = function() {
      this.getSegmentSize("row", "Height");
    }, proto.getSegmentSize = function(segment, size) {
      var segmentName = segment + size;
      /** @type {string} */
      var outerSize = "outer" + size;
      if (this._getMeasurement(segmentName, outerSize), !this[segmentName]) {
        var firstItemSize = this.getFirstItemSize();
        this[segmentName] = firstItemSize && firstItemSize[outerSize] || this.isotope.size["inner" + size];
      }
    }, proto.getFirstItemSize = function() {
      var firstItem = this.isotope.filteredItems[0];
      return firstItem && firstItem.element && getSize(firstItem.element);
    }, proto.layout = function() {
      this.isotope.layout.apply(this.isotope, arguments);
    }, proto.getSize = function() {
      this.isotope.getSize();
      this.size = this.isotope.size;
    }, LayoutMode.modes = {}, LayoutMode.create = function(namespace, options) {
      /**
       * @return {undefined}
       */
      function Mode() {
        LayoutMode.apply(this, arguments);
      }
      return Mode.prototype = Object.create(proto), Mode.prototype.constructor = Mode, options && (Mode.options = options), Mode.prototype.namespace = namespace, LayoutMode.modes[namespace] = Mode, Mode;
    }, LayoutMode;
  });
  (function(window, factory) {
    if ("function" == typeof define && define.amd) {
      define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], factory);
    } else {
      if ("object" == typeof module && module.exports) {
        module.exports = factory(require("outlayer"), require("get-size"));
      } else {
        window.Masonry = factory(window.Outlayer, window.getSize);
      }
    }
  })(window, function(Outlayer, getSize) {
    var Masonry = Outlayer.create("masonry");
    /** @type {string} */
    Masonry.compatOptions.fitWidth = "isFitWidth";
    var proto = Masonry.prototype;
    return proto._resetLayout = function() {
      this.getSize();
      this._getMeasurement("columnWidth", "outerWidth");
      this._getMeasurement("gutter", "outerWidth");
      this.measureColumns();
      /** @type {!Array} */
      this.colYs = [];
      /** @type {number} */
      var max_cols = 0;
      for (; max_cols < this.cols; max_cols++) {
        this.colYs.push(0);
      }
      /** @type {number} */
      this.maxY = 0;
      /** @type {number} */
      this.horizontalColIndex = 0;
    }, proto.measureColumns = function() {
      if (this.getContainerWidth(), !this.columnWidth) {
        var firstItem = this.items[0];
        var firstItemElem = firstItem && firstItem.element;
        this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || this.containerWidth;
      }
      var columnWidth = this.columnWidth += this.gutter;
      var containerWidth = this.containerWidth + this.gutter;
      /** @type {number} */
      var cols = containerWidth / columnWidth;
      /** @type {number} */
      var excess = columnWidth - containerWidth % columnWidth;
      /** @type {string} */
      var mathMethod = excess && excess < 1 ? "round" : "floor";
      cols = Math[mathMethod](cols);
      /** @type {number} */
      this.cols = Math.max(cols, 1);
    }, proto.getContainerWidth = function() {
      var isFitWidth = this._getOption("fitWidth");
      var container = isFitWidth ? this.element.parentNode : this.element;
      var size = getSize(container);
      this.containerWidth = size && size.innerWidth;
    }, proto._getItemLayoutPosition = function(item) {
      item.getSize();
      /** @type {number} */
      var remainder = item.size.outerWidth % this.columnWidth;
      /** @type {string} */
      var mathMethod = remainder && remainder < 1 ? "round" : "ceil";
      var c = Math[mathMethod](item.size.outerWidth / this.columnWidth);
      /** @type {number} */
      c = Math.min(c, this.cols);
      /** @type {string} */
      var type = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition";
      var e = this[type](c, item);
      var position = {
        x : this.columnWidth * e.col,
        y : e.y
      };
      var setHeight = e.y + item.size.outerHeight;
      var cl = c + e.col;
      var i = e.col;
      for (; i < cl; i++) {
        this.colYs[i] = setHeight;
      }
      return position;
    }, proto._getTopColPosition = function(undefined) {
      var list = this._getTopColGroup(undefined);
      /** @type {number} */
      var pos = Math.min.apply(Math, list);
      return {
        col : list.indexOf(pos),
        y : pos
      };
    }, proto._getTopColGroup = function(len) {
      if (len < 2) {
        return this.colYs;
      }
      /** @type {!Array} */
      var lines = [];
      /** @type {number} */
      var maxRow = this.cols + 1 - len;
      /** @type {number} */
      var i = 0;
      for (; i < maxRow; i++) {
        lines[i] = this._getColGroupY(i, len);
      }
      return lines;
    }, proto._getColGroupY = function(i, n) {
      if (n < 2) {
        return this.colYs[i];
      }
      var j = this.colYs.slice(i, i + n);
      return Math.max.apply(Math, j);
    }, proto._getHorizontalColPosition = function(i, data) {
      /** @type {number} */
      var col = this.horizontalColIndex % this.cols;
      /** @type {boolean} */
      var day = i > 1 && col + i > this.cols;
      /** @type {number} */
      col = day ? 0 : col;
      var vector = data.size.outerWidth && data.size.outerHeight;
      return this.horizontalColIndex = vector ? col + i : this.horizontalColIndex, {
        col : col,
        y : this._getColGroupY(col, i)
      };
    }, proto._manageStamp = function(stamp) {
      var stampSize = getSize(stamp);
      var offset = this._getElementOffset(stamp);
      var isOriginLeft = this._getOption("originLeft");
      var firstX = isOriginLeft ? offset.left : offset.right;
      var lastX = firstX + stampSize.outerWidth;
      /** @type {number} */
      var startCol = Math.floor(firstX / this.columnWidth);
      /** @type {number} */
      startCol = Math.max(0, startCol);
      /** @type {number} */
      var i = Math.floor(lastX / this.columnWidth);
      /** @type {number} */
      i = i - (lastX % this.columnWidth ? 0 : 1);
      /** @type {number} */
      i = Math.min(this.cols - 1, i);
      var isOriginTop = this._getOption("originTop");
      var stampMaxY = (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
      /** @type {number} */
      var j = startCol;
      for (; j <= i; j++) {
        /** @type {number} */
        this.colYs[j] = Math.max(stampMaxY, this.colYs[j]);
      }
    }, proto._getContainerSize = function() {
      /** @type {number} */
      this.maxY = Math.max.apply(Math, this.colYs);
      var size = {
        height : this.maxY
      };
      return this._getOption("fitWidth") && (size.width = this._getContainerFitWidth()), size;
    }, proto._getContainerFitWidth = function() {
      /** @type {number} */
      var unusedCols = 0;
      var i = this.cols;
      for (; --i && 0 === this.colYs[i];) {
        unusedCols++;
      }
      return (this.cols - unusedCols) * this.columnWidth - this.gutter;
    }, proto.needsResizeLayout = function() {
      var previousWidth = this.containerWidth;
      return this.getContainerWidth(), previousWidth != this.containerWidth;
    }, Masonry;
  });
  (function(window, factory) {
    if ("function" == typeof define && define.amd) {
      define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], factory);
    } else {
      if ("object" == typeof module && module.exports) {
        module.exports = factory(require("../layout-mode"), require("masonry-layout"));
      } else {
        factory(window.Isotope.LayoutMode, window.Masonry);
      }
    }
  })(window, function(Outlayer, src) {
    var MasonryMode = Outlayer.create("masonry");
    var proto = MasonryMode.prototype;
    var keepModeMethods = {
      _getElementOffset : true,
      layout : true,
      _getMeasurement : true
    };
    var p;
    for (p in src.prototype) {
      if (!keepModeMethods[p]) {
        proto[p] = src.prototype[p];
      }
    }
    /** @type {function(): undefined} */
    var measureColumns = proto.measureColumns;
    /**
     * @return {undefined}
     */
    proto.measureColumns = function() {
      this.items = this.isotope.filteredItems;
      measureColumns.call(this);
    };
    /** @type {function(string): ?} */
    var _getOption = proto._getOption;
    return proto._getOption = function(option) {
      return "fitWidth" == option ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : _getOption.apply(this.isotope, arguments);
    }, MasonryMode;
  });
  (function(window, factory) {
    if ("function" == typeof define && define.amd) {
      define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], factory);
    } else {
      if ("object" == typeof exports) {
        module.exports = factory(require("../layout-mode"));
      } else {
        factory(window.Isotope.LayoutMode);
      }
    }
  })(window, function(LayoutMode) {
    var FitRows = LayoutMode.create("fitRows");
    var proto = FitRows.prototype;
    return proto._resetLayout = function() {
      /** @type {number} */
      this.x = 0;
      /** @type {number} */
      this.y = 0;
      /** @type {number} */
      this.maxY = 0;
      this._getMeasurement("gutter", "outerWidth");
    }, proto._getItemLayoutPosition = function(item) {
      item.getSize();
      var itemWidth = item.size.outerWidth + this.gutter;
      var containerWidth = this.isotope.size.innerWidth + this.gutter;
      if (0 !== this.x && itemWidth + this.x > containerWidth) {
        /** @type {number} */
        this.x = 0;
        this.y = this.maxY;
      }
      var dimensionValidators = {
        x : this.x,
        y : this.y
      };
      return this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight), this.x += itemWidth, dimensionValidators;
    }, proto._getContainerSize = function() {
      return {
        height : this.maxY
      };
    }, FitRows;
  });
  (function(window, factory) {
    if ("function" == typeof define && define.amd) {
      define("isotope/js/layout-modes/vertical", ["../layout-mode"], factory);
    } else {
      if ("object" == typeof module && module.exports) {
        module.exports = factory(require("../layout-mode"));
      } else {
        factory(window.Isotope.LayoutMode);
      }
    }
  })(window, function(LayoutMode) {
    var Vertical = LayoutMode.create("vertical", {
      horizontalAlignment : 0
    });
    var proto = Vertical.prototype;
    return proto._resetLayout = function() {
      /** @type {number} */
      this.y = 0;
    }, proto._getItemLayoutPosition = function(item) {
      item.getSize();
      /** @type {number} */
      var audioOffsetX = (this.isotope.size.innerWidth - item.size.outerWidth) * this.options.horizontalAlignment;
      var y = this.y;
      return this.y += item.size.outerHeight, {
        x : audioOffsetX,
        y : y
      };
    }, proto._getContainerSize = function() {
      return {
        height : this.y
      };
    }, Vertical;
  });
  (function(window, factory) {
    if ("function" == typeof define && define.amd) {
      define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(Outlayer, vjs, matchesSelector, utils, Item, LayoutMode) {
        return factory(window, Outlayer, vjs, matchesSelector, utils, Item, LayoutMode);
      });
    } else {
      if ("object" == typeof module && module.exports) {
        module.exports = factory(window, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical"));
      } else {
        window.Isotope = factory(window, window.Outlayer, window.getSize, window.matchesSelector, window.fizzyUIUtils, window.Isotope.Item, window.Isotope.LayoutMode);
      }
    }
  })(window, function(window, Outlayer, vjs, matchesSelector, utils, Item, LayoutMode) {
    /**
     * @param {!NodeList} prop
     * @param {!Element} index
     * @return {?}
     */
    function pick(prop, index) {
      return function(config, button) {
        /** @type {number} */
        var j = 0;
        for (; j < prop.length; j++) {
          var color = prop[j];
          var correctedAge = config.sortData[color];
          var currentAge = button.sortData[color];
          if (correctedAge > currentAge || correctedAge < currentAge) {
            var closeExpr = void 0 !== index[color] ? index[color] : index;
            /** @type {number} */
            var closingExpr = closeExpr ? 1 : -1;
            return (correctedAge > currentAge ? 1 : -1) * closingExpr;
          }
        }
        return 0;
      };
    }
    var jQuery = window.jQuery;
    /** @type {function(string): ?} */
    var trim = String.prototype.trim ? function(f) {
      return f.trim();
    } : function(condition) {
      return condition.replace(/^\s+|\s+$/g, "");
    };
    var Isotope = Outlayer.create("isotope", {
      layoutMode : "masonry",
      isJQueryFiltering : true,
      sortAscending : true
    });
    /** @type {!Function} */
    Isotope.Item = Item;
    /** @type {!Object} */
    Isotope.LayoutMode = LayoutMode;
    var proto = Isotope.prototype;
    /**
     * @return {undefined}
     */
    proto._create = function() {
      /** @type {number} */
      this.itemGUID = 0;
      this._sorters = {};
      this._getSorters();
      Outlayer.prototype._create.call(this);
      this.modes = {};
      this.filteredItems = this.items;
      /** @type {!Array} */
      this.sortHistory = ["original-order"];
      var name;
      for (name in LayoutMode.modes) {
        this._initLayoutMode(name);
      }
    };
    /**
     * @return {undefined}
     */
    proto.reloadItems = function() {
      /** @type {number} */
      this.itemGUID = 0;
      Outlayer.prototype.reloadItems.call(this);
    };
    /**
     * @return {?}
     */
    proto._itemize = function() {
      var items = Outlayer.prototype._itemize.apply(this, arguments);
      /** @type {number} */
      var i = 0;
      for (; i < items.length; i++) {
        var item = items[i];
        /** @type {number} */
        item.id = this.itemGUID++;
      }
      return this._updateItemsSortData(items), items;
    };
    /**
     * @param {string} name
     * @return {undefined}
     */
    proto._initLayoutMode = function(name) {
      var Mode = LayoutMode.modes[name];
      var initialOpts = this.options[name] || {};
      this.options[name] = Mode.options ? utils.extend(Mode.options, initialOpts) : initialOpts;
      this.modes[name] = new Mode(this);
    };
    /**
     * @return {?}
     */
    proto.layout = function() {
      return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
    };
    /**
     * @return {undefined}
     */
    proto._layout = function() {
      var isInstant = this._getIsInstant();
      this._resetLayout();
      this._manageStamps();
      this.layoutItems(this.filteredItems, isInstant);
      /** @type {boolean} */
      this._isLayoutInited = true;
    };
    /**
     * @param {!Object} options
     * @return {undefined}
     */
    proto.arrange = function(options) {
      this.option(options);
      this._getIsInstant();
      var filtered = this._filter(this.items);
      this.filteredItems = filtered.matches;
      this._bindArrangeComplete();
      if (this._isInstant) {
        this._noTransition(this._hideReveal, [filtered]);
      } else {
        this._hideReveal(filtered);
      }
      this._sort();
      this._layout();
    };
    /** @type {function(!Object): undefined} */
    proto._init = proto.arrange;
    /**
     * @param {?} filtered
     * @return {undefined}
     */
    proto._hideReveal = function(filtered) {
      this.reveal(filtered.needReveal);
      this.hide(filtered.needHide);
    };
    /**
     * @return {?}
     */
    proto._getIsInstant = function() {
      var layoutInstant = this._getOption("layoutInstant");
      var isInstant = void 0 !== layoutInstant ? layoutInstant : !this._isLayoutInited;
      return this._isInstant = isInstant, isInstant;
    };
    /**
     * @return {undefined}
     */
    proto._bindArrangeComplete = function() {
      /**
       * @return {undefined}
       */
      function arrangeParallelCallback() {
        if (e && isIE && strict) {
          _this.dispatchEvent("arrangeComplete", null, [_this.filteredItems]);
        }
      }
      var e;
      var isIE;
      var strict;
      var _this = this;
      this.once("layoutComplete", function() {
        /** @type {boolean} */
        e = true;
        arrangeParallelCallback();
      });
      this.once("hideComplete", function() {
        /** @type {boolean} */
        isIE = true;
        arrangeParallelCallback();
      });
      this.once("revealComplete", function() {
        /** @type {boolean} */
        strict = true;
        arrangeParallelCallback();
      });
    };
    /**
     * @param {!NodeList} items
     * @return {?}
     */
    proto._filter = function(items) {
      var filter = this.options.filter;
      filter = filter || "*";
      /** @type {!Array} */
      var matches = [];
      /** @type {!Array} */
      var hiddenMatched = [];
      /** @type {!Array} */
      var visibleUnmatched = [];
      var test = this._getFilterTest(filter);
      /** @type {number} */
      var i = 0;
      for (; i < items.length; i++) {
        var item = items[i];
        if (!item.isIgnored) {
          var isMatched = test(item);
          if (isMatched) {
            matches.push(item);
          }
          if (isMatched && item.isHidden) {
            hiddenMatched.push(item);
          } else {
            if (!(isMatched || item.isHidden)) {
              visibleUnmatched.push(item);
            }
          }
        }
      }
      return {
        matches : matches,
        needReveal : hiddenMatched,
        needHide : visibleUnmatched
      };
    };
    /**
     * @param {!Object} filter
     * @return {?}
     */
    proto._getFilterTest = function(filter) {
      return jQuery && this.options.isJQueryFiltering ? function(table) {
        return jQuery(table.element).is(filter);
      } : "function" == typeof filter ? function(options) {
        return filter(options.element);
      } : function(event) {
        return matchesSelector(event.element, filter);
      };
    };
    /**
     * @param {?} elems
     * @return {undefined}
     */
    proto.updateSortData = function(elems) {
      var items;
      if (elems) {
        elems = utils.makeArray(elems);
        items = this.getItems(elems);
      } else {
        items = this.items;
      }
      this._getSorters();
      this._updateItemsSortData(items);
    };
    /**
     * @return {undefined}
     */
    proto._getSorters = function() {
      var getSortData = this.options.getSortData;
      var key;
      for (key in getSortData) {
        var sorter = getSortData[key];
        this._sorters[key] = mungeSorter(sorter);
      }
    };
    /**
     * @param {string} items
     * @return {undefined}
     */
    proto._updateItemsSortData = function(items) {
      var len = items && items.length;
      /** @type {number} */
      var i = 0;
      for (; len && i < len; i++) {
        var item = items[i];
        item.updateSortData();
      }
    };
    var mungeSorter = function() {
      /**
       * @param {!Function} sorter
       * @return {?}
       */
      function mungeSorter(sorter) {
        if ("string" != typeof sorter) {
          return sorter;
        }
        var args = trim(sorter).split(" ");
        var query = args[0];
        var uiJqConfig = query.match(/^\[(.+)\]$/);
        var options = uiJqConfig && uiJqConfig[1];
        var getValue = render(options, query);
        var parser = Isotope.sortDataParsers[args[1]];
        return sorter = parser ? function(elem) {
          return elem && parser(getValue(elem));
        } : function(elem) {
          return elem && getValue(elem);
        };
      }
      /**
       * @param {!Object} url
       * @param {?} query
       * @return {?}
       */
      function render(url, query) {
        return url ? function(e) {
          return e.getAttribute(url);
        } : function(t) {
          var button = t.querySelector(query);
          return button && button.textContent;
        };
      }
      return mungeSorter;
    }();
    Isotope.sortDataParsers = {
      parseInt : function(text) {
        return parseInt(text, 10);
      },
      parseFloat : function(value) {
        return parseFloat(value);
      }
    };
    /**
     * @return {undefined}
     */
    proto._sort = function() {
      if (this.options.sortBy) {
        var result = utils.makeArray(this.options.sortBy);
        if (!this._getIsSameSortBy(result)) {
          this.sortHistory = result.concat(this.sortHistory);
        }
        var itemSorter = pick(this.sortHistory, this.options.sortAscending);
        this.filteredItems.sort(itemSorter);
      }
    };
    /**
     * @param {!NodeList} arrayA
     * @return {?}
     */
    proto._getIsSameSortBy = function(arrayA) {
      /** @type {number} */
      var i = 0;
      for (; i < arrayA.length; i++) {
        if (arrayA[i] != this.sortHistory[i]) {
          return false;
        }
      }
      return true;
    };
    /**
     * @return {?}
     */
    proto._mode = function() {
      var layoutMode = this.options.layoutMode;
      var mode = this.modes[layoutMode];
      if (!mode) {
        throw new Error("No layout mode: " + layoutMode);
      }
      return mode.options = this.options[layoutMode], mode;
    };
    /**
     * @return {undefined}
     */
    proto._resetLayout = function() {
      Outlayer.prototype._resetLayout.call(this);
      this._mode()._resetLayout();
    };
    /**
     * @param {!Object} item
     * @return {?}
     */
    proto._getItemLayoutPosition = function(item) {
      return this._mode()._getItemLayoutPosition(item);
    };
    /**
     * @param {!Object} stamp
     * @return {undefined}
     */
    proto._manageStamp = function(stamp) {
      this._mode()._manageStamp(stamp);
    };
    /**
     * @return {?}
     */
    proto._getContainerSize = function() {
      return this._mode()._getContainerSize();
    };
    /**
     * @return {?}
     */
    proto.needsResizeLayout = function() {
      return this._mode().needsResizeLayout();
    };
    /**
     * @param {!Array} elems
     * @return {undefined}
     */
    proto.appended = function(elems) {
      var items = this.addItems(elems);
      if (items.length) {
        var filteredItems = this._filterRevealAdded(items);
        this.filteredItems = this.filteredItems.concat(filteredItems);
      }
    };
    /**
     * @param {!Array} elems
     * @return {undefined}
     */
    proto.prepended = function(elems) {
      var items = this._itemize(elems);
      if (items.length) {
        this._resetLayout();
        this._manageStamps();
        var filteredItems = this._filterRevealAdded(items);
        this.layoutItems(this.filteredItems);
        this.filteredItems = filteredItems.concat(this.filteredItems);
        this.items = items.concat(this.items);
      }
    };
    /**
     * @param {(Node|NodeList|string)} items
     * @return {?}
     */
    proto._filterRevealAdded = function(items) {
      var filtered = this._filter(items);
      return this.hide(filtered.needHide), this.reveal(filtered.matches), this.layoutItems(filtered.matches, true), filtered.matches;
    };
    /**
     * @param {!Array} elems
     * @return {undefined}
     */
    proto.insert = function(elems) {
      var items = this.addItems(elems);
      if (items.length) {
        var i;
        var item;
        var items_length = items.length;
        /** @type {number} */
        i = 0;
        for (; i < items_length; i++) {
          item = items[i];
          this.element.appendChild(item.element);
        }
        var filteredInsertItems = this._filter(items).matches;
        /** @type {number} */
        i = 0;
        for (; i < items_length; i++) {
          /** @type {boolean} */
          items[i].isLayoutInstant = true;
        }
        this.arrange();
        /** @type {number} */
        i = 0;
        for (; i < items_length; i++) {
          delete items[i].isLayoutInstant;
        }
        this.reveal(filteredInsertItems);
      }
    };
    /** @type {function(string): undefined} */
    var removeEvent = proto.remove;
    return proto.remove = function(key) {
      key = utils.makeArray(key);
      var items = this.getItems(key);
      removeEvent.call(this, key);
      var len = items && items.length;
      /** @type {number} */
      var i = 0;
      for (; len && i < len; i++) {
        var item = items[i];
        utils.removeFrom(this.filteredItems, item);
      }
    }, proto.shuffle = function() {
      /** @type {number} */
      var i = 0;
      for (; i < this.items.length; i++) {
        var item = this.items[i];
        /** @type {number} */
        item.sortData.random = Math.random();
      }
      /** @type {string} */
      this.options.sortBy = "random";
      this._sort();
      this._layout();
    }, proto._noTransition = function(fn, args) {
      var transitionDuration = this.options.transitionDuration;
      /** @type {number} */
      this.options.transitionDuration = 0;
      var poffset = fn.apply(this, args);
      return this.options.transitionDuration = transitionDuration, poffset;
    }, proto.getFilteredItemElements = function() {
      return this.filteredItems.map(function(arrowIcon) {
        return arrowIcon.element;
      });
    }, Isotope;
  });
  var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
  (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(Animation, TimelineLite, view) {
      /**
       * @param {!Object} a
       * @return {?}
       */
      var selector = function(a) {
        var i;
        /** @type {!Array} */
        var r = [];
        var n = a.length;
        /** @type {number} */
        i = 0;
        for (; i !== n; r.push(a[i++])) {
        }
        return r;
      };
      /**
       * @param {!Object} vars
       * @param {!Object} targets
       * @param {number} i
       * @return {undefined}
       */
      var _applyCycle = function(vars, targets, i) {
        var field;
        var val;
        var cycle = vars.cycle;
        for (field in cycle) {
          val = cycle[field];
          vars[field] = "function" == typeof val ? val(i, targets[i]) : val[i % val.length];
        }
        delete vars.cycle;
      };
      /**
       * @param {!Object} value
       * @param {!Object} name
       * @param {string} data
       * @return {undefined}
       */
      var TweenLite = function(value, name, data) {
        view.call(this, value, name, data);
        /** @type {number} */
        this._cycle = 0;
        /** @type {boolean} */
        this._yoyo = this.vars.yoyo === true;
        this._repeat = this.vars.repeat || 0;
        this._repeatDelay = this.vars.repeatDelay || 0;
        /** @type {boolean} */
        this._dirty = true;
        this.render = TweenLite.prototype.render;
      };
      /** @type {number} */
      var _tinyNum = 1e-10;
      var TweenLiteInternals = view._internals;
      var _isSelector = TweenLiteInternals.isSelector;
      var _isArray = TweenLiteInternals.isArray;
      var p = TweenLite.prototype = view.to({}, .1, {});
      /** @type {!Array} */
      var i = [];
      /** @type {string} */
      TweenLite.version = "1.19.0";
      /** @type {function(!Object, !Object, string): undefined} */
      p.constructor = TweenLite;
      /** @type {boolean} */
      p.kill()._gc = false;
      TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = view.killTweensOf;
      TweenLite.getTweensOf = view.getTweensOf;
      TweenLite.lagSmoothing = view.lagSmoothing;
      TweenLite.ticker = view.ticker;
      TweenLite.render = view.render;
      /**
       * @return {?}
       */
      p.invalidate = function() {
        return this._yoyo = this.vars.yoyo === true, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(true), view.prototype.invalidate.call(this);
      };
      /**
       * @param {!Array} vars
       * @param {boolean} resetDuration
       * @return {?}
       */
      p.updateTo = function(vars, resetDuration) {
        var i;
        var ratio = this.ratio;
        var o = this.vars.immediateRender || vars.immediateRender;
        if (resetDuration && this._startTime < this._timeline._time) {
          this._startTime = this._timeline._time;
          this._uncache(false);
          if (this._gc) {
            this._enabled(true, false);
          } else {
            this._timeline.insert(this, this._startTime - this._delay);
          }
        }
        for (i in vars) {
          this.vars[i] = vars[i];
        }
        if (this._initted || o) {
          if (resetDuration) {
            /** @type {boolean} */
            this._initted = false;
            if (o) {
              this.render(0, true, true);
            }
          } else {
            if (this._gc && this._enabled(true, false), this._notifyPluginsOfEnabled && this._firstPT && view._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
              var time = this._totalTime;
              this.render(0, true, false);
              /** @type {boolean} */
              this._initted = false;
              this.render(time, true, false);
            } else {
              if (this._initted = false, this._init(), this._time > 0 || o) {
                var now;
                /** @type {number} */
                var scaleY = 1 / (1 - ratio);
                var pt = this._firstPT;
                for (; pt;) {
                  now = pt.s + pt.c;
                  pt.c *= scaleY;
                  /** @type {number} */
                  pt.s = now - pt.c;
                  pt = pt._next;
                }
              }
            }
          }
        }
        return this;
      };
      /**
       * @param {number} time
       * @param {string} suppressEvents
       * @param {boolean} force
       * @return {?}
       */
      p.render = function(time, suppressEvents, force) {
        if (!this._initted) {
          if (0 === this._duration && this.vars.repeat) {
            this.invalidate();
          }
        }
        var isComplete;
        var callback;
        var pt;
        var cycleDuration;
        var r;
        var v;
        var h;
        var rawPrevTime;
        var totalDur = this._dirty ? this.totalDuration() : this._totalDuration;
        var prevTime = this._time;
        var prevTotalTime = this._totalTime;
        var prevCycle = this._cycle;
        var dur = this._duration;
        var prevRawPrevTime = this._rawPrevTime;
        if (time >= totalDur - 1e-7 ? (this._totalTime = totalDur, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = dur, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (isComplete = true, callback = "onComplete", force = force || this._timeline.autoRemoveChildren), 0 === dur && (this._initted ||
        !this.vars.lazy || force) && (this._startTime === this._timeline._duration && (time = 0), (0 > prevRawPrevTime || 0 >= time && time >= -1e-7 || prevRawPrevTime === _tinyNum && "isPause" !== this.data) && prevRawPrevTime !== time && (force = true, prevRawPrevTime > _tinyNum && (callback = "onReverseComplete")), this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum)) : 1e-7 >
        time ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== prevTotalTime || 0 === dur && prevRawPrevTime > 0) && (callback = "onReverseComplete", isComplete = this._reversed), 0 > time && (this._active = false, 0 === dur && (this._initted || !this.vars.lazy || force) && (prevRawPrevTime >= 0 && (force = true), this._rawPrevTime = rawPrevTime = !suppressEvents || time ||
        prevRawPrevTime === time ? time : _tinyNum)), this._initted || (force = true)) : (this._totalTime = this._time = time, 0 !== this._repeat && (cycleDuration = dur + this._repeatDelay, this._cycle = this._totalTime / cycleDuration >> 0, 0 !== this._cycle && this._cycle === this._totalTime / cycleDuration && time >= prevTotalTime && this._cycle--, this._time = this._totalTime - this._cycle * cycleDuration, this._yoyo && 0 !== (1 & this._cycle) && (this._time =
        dur - this._time), this._time > dur ? this._time = dur : this._time < 0 && (this._time = 0)), this._easeType ? (r = this._time / dur, v = this._easeType, h = this._easePower, (1 === v || 3 === v && r >= .5) && (r = 1 - r), 3 === v && (r = r * 2), 1 === h ? r = r * r : 2 === h ? r =
        r * (r * r) : 3 === h ? r = r * (r * r * r) : 4 === h && (r = r * (r * r * r * r)), 1 === v ? this.ratio = 1 - r : 2 === v ? this.ratio = r : this._time / dur < .5 ? this.ratio = r / 2 : this.ratio = 1 - r / 2) : this.ratio = this._ease.getRatio(this._time /
        dur)), prevTime === this._time && !force && prevCycle === this._cycle) {
          return void(prevTotalTime !== this._totalTime && this._onUpdate && (suppressEvents || this._callback("onUpdate")));
        }
        if (!this._initted) {
          if (this._init(), !this._initted || this._gc) {
            return;
          }
          if (!force && this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration)) {
            return this._time = prevTime, this._totalTime = prevTotalTime, this._rawPrevTime = prevRawPrevTime, this._cycle = prevCycle, TweenLiteInternals.lazyTweens.push(this), void(this._lazy = [time, suppressEvents]);
          }
          if (this._time && !isComplete) {
            this.ratio = this._ease.getRatio(this._time / dur);
          } else {
            if (isComplete && this._ease._calcEnd) {
              this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1);
            }
          }
        }
        if (this._lazy !== false) {
          /** @type {boolean} */
          this._lazy = false;
        }
        if (!this._active) {
          if (!this._paused && this._time !== prevTime && time >= 0) {
            /** @type {boolean} */
            this._active = true;
          }
        }
        if (0 === prevTotalTime) {
          if (2 === this._initted && time > 0) {
            this._init();
          }
          if (this._startAt) {
            if (time >= 0) {
              this._startAt.render(time, suppressEvents, force);
            } else {
              if (!callback) {
                /** @type {string} */
                callback = "_dummyGS";
              }
            }
          }
          if (this.vars.onStart && (0 !== this._totalTime || 0 === dur)) {
            if (!suppressEvents) {
              this._callback("onStart");
            }
          }
        }
        pt = this._firstPT;
        for (; pt;) {
          if (pt.f) {
            pt.t[pt.p](pt.c * this.ratio + pt.s);
          } else {
            pt.t[pt.p] = pt.c * this.ratio + pt.s;
          }
          pt = pt._next;
        }
        if (this._onUpdate) {
          if (0 > time && this._startAt && this._startTime) {
            this._startAt.render(time, suppressEvents, force);
          }
          if (!suppressEvents) {
            if (this._totalTime !== prevTotalTime || callback) {
              this._callback("onUpdate");
            }
          }
        }
        if (this._cycle !== prevCycle) {
          if (!(suppressEvents || this._gc)) {
            if (this.vars.onRepeat) {
              this._callback("onRepeat");
            }
          }
        }
        if (callback && (!this._gc || force)) {
          if (0 > time && this._startAt && !this._onUpdate && this._startTime) {
            this._startAt.render(time, suppressEvents, force);
          }
          if (isComplete) {
            if (this._timeline.autoRemoveChildren) {
              this._enabled(false, false);
            }
            /** @type {boolean} */
            this._active = false;
          }
          if (!suppressEvents && this.vars[callback]) {
            this._callback(callback);
          }
          if (0 === dur && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
            /** @type {number} */
            this._rawPrevTime = 0;
          }
        }
      };
      /**
       * @param {string} name
       * @param {number} duration
       * @param {!Object} vars
       * @return {?}
       */
      TweenLite.to = function(name, duration, vars) {
        return new TweenLite(name, duration, vars);
      };
      /**
       * @param {string} name
       * @param {number} duration
       * @param {!Object} vars
       * @return {?}
       */
      TweenLite.from = function(name, duration, vars) {
        return vars.runBackwards = true, vars.immediateRender = 0 != vars.immediateRender, new TweenLite(name, duration, vars);
      };
      /**
       * @param {!Object} target
       * @param {string} duration
       * @param {number} fromVars
       * @param {!Object} toVars
       * @return {?}
       */
      TweenLite.fromTo = function(target, duration, fromVars, toVars) {
        return toVars.startAt = fromVars, toVars.immediateRender = 0 != toVars.immediateRender && 0 != fromVars.immediateRender, new TweenLite(target, duration, toVars);
      };
      /** @type {function(!Object, !Object, !Object, number, !Function, !Object, string): ?} */
      TweenLite.staggerTo = TweenLite.allTo = function(target, duration, data, n, s, type, elements) {
        n = n || 0;
        var j;
        var copy;
        var i;
        var p;
        /** @type {number} */
        var nCatCount = 0;
        /** @type {!Array} */
        var conf_shortcuts_icon = [];
        /**
         * @return {undefined}
         */
        var _complete = function() {
          if (data.onComplete) {
            data.onComplete.apply(data.onCompleteScope || this, arguments);
          }
          s.apply(elements || data.callbackScope || this, type || i);
        };
        var e = data.cycle;
        var t = data.startAt && data.startAt.cycle;
        if (!_isArray(target)) {
          if ("string" == typeof target) {
            target = view.selector(target) || target;
          }
          if (_isSelector(target)) {
            target = selector(target);
          }
        }
        target = target || [];
        if (0 > n) {
          target = selector(target);
          target.reverse();
          /** @type {number} */
          n = n * -1;
        }
        /** @type {number} */
        j = target.length - 1;
        /** @type {number} */
        i = 0;
        for (; j >= i; i++) {
          copy = {};
          for (p in data) {
            copy[p] = data[p];
          }
          if (e && (_applyCycle(copy, target, i), null != copy.duration && (duration = copy.duration, delete copy.duration)), t) {
            t = copy.startAt = {};
            for (p in data.startAt) {
              t[p] = data.startAt[p];
            }
            _applyCycle(copy.startAt, target, i);
          }
          copy.delay = nCatCount + (copy.delay || 0);
          if (i === j && s) {
            /** @type {function(): undefined} */
            copy.onComplete = _complete;
          }
          conf_shortcuts_icon[i] = new TweenLite(target[i], duration, copy);
          nCatCount = nCatCount + n;
        }
        return conf_shortcuts_icon;
      };
      /** @type {function(!Object, undefined, !Object, undefined, undefined, undefined, string): ?} */
      TweenLite.staggerFrom = TweenLite.allFrom = function(obj, duration, vars, to, roomid, messageNum, callback) {
        return vars.runBackwards = true, vars.immediateRender = 0 != vars.immediateRender, TweenLite.staggerTo(obj, duration, vars, to, roomid, messageNum, callback);
      };
      /** @type {function(!Object, undefined, number, !Object, undefined, undefined, undefined, string): ?} */
      TweenLite.staggerFromTo = TweenLite.allFromTo = function(obj, duration, fromVars, toVars, to, position, onCompleteAll, onCompleteAllParams) {
        return toVars.startAt = fromVars, toVars.immediateRender = 0 != toVars.immediateRender && 0 != fromVars.immediateRender, TweenLite.staggerTo(obj, duration, toVars, to, position, onCompleteAll, onCompleteAllParams);
      };
      /**
       * @param {number} delay
       * @param {string} callback
       * @param {!Object} params
       * @param {!Function} scope
       * @param {?} useFrames
       * @return {?}
       */
      TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
        return new TweenLite(callback, 0, {
          delay : delay,
          onComplete : callback,
          onCompleteParams : params,
          callbackScope : scope,
          onReverseComplete : callback,
          onReverseCompleteParams : params,
          immediateRender : false,
          useFrames : useFrames,
          overwrite : 0
        });
      };
      /**
       * @param {!Object} type
       * @param {!Object} data
       * @return {?}
       */
      TweenLite.set = function(type, data) {
        return new TweenLite(type, 0, data);
      };
      /**
       * @param {!Object} target
       * @return {?}
       */
      TweenLite.isTweening = function(target) {
        return view.getTweensOf(target, true).length > 0;
      };
      /**
       * @param {?} parent
       * @param {number} code
       * @return {?}
       */
      var f = function(parent, code) {
        /** @type {!Array} */
        var result = [];
        /** @type {number} */
        var i = 0;
        var current = parent._first;
        for (; current;) {
          if (current instanceof view) {
            result[i++] = current;
          } else {
            if (code) {
              result[i++] = current;
            }
            /** @type {!Array<?>} */
            result = result.concat(f(current, code));
            /** @type {number} */
            i = result.length;
          }
          current = current._next;
        }
        return result;
      };
      /** @type {function(number): ?} */
      var get = TweenLite.getAllTweens = function(proto) {
        return f(Animation._rootTimeline, proto).concat(f(Animation._rootFramesTimeline, proto));
      };
      /**
       * @param {?} system
       * @param {string} signalSource
       * @param {string} signalName
       * @param {string} callback
       * @return {undefined}
       */
      TweenLite.killAll = function(system, signalSource, signalName, callback) {
        if (null == signalSource) {
          /** @type {boolean} */
          signalSource = true;
        }
        if (null == signalName) {
          /** @type {boolean} */
          signalName = true;
        }
        var o;
        var tween;
        var i;
        var queue = get(0 != callback);
        var length = queue.length;
        var isJSONP = signalSource && signalName && callback;
        /** @type {number} */
        i = 0;
        for (; length > i; i++) {
          tween = queue[i];
          if (isJSONP || tween instanceof TimelineLite || (o = tween.target === tween.vars.onComplete) && signalName || signalSource && !o) {
            if (system) {
              tween.totalTime(tween._reversed ? 0 : tween.totalDuration());
            } else {
              tween._enabled(false, false);
            }
          }
        }
      };
      /**
       * @param {!Object} target
       * @param {?} value
       * @return {undefined}
       */
      TweenLite.killChildTweensOf = function(target, value) {
        if (null != target) {
          var tweens;
          var eventTarget;
          var p;
          var i;
          var n;
          var _tweenLookup = TweenLiteInternals.tweenLookup;
          if ("string" == typeof target && (target = view.selector(target) || target), _isSelector(target) && (target = selector(target)), _isArray(target)) {
            i = target.length;
            for (; --i > -1;) {
              TweenLite.killChildTweensOf(target[i], value);
            }
          } else {
            /** @type {!Array} */
            tweens = [];
            for (p in _tweenLookup) {
              eventTarget = _tweenLookup[p].target.parentNode;
              for (; eventTarget;) {
                if (eventTarget === target) {
                  /** @type {!Array<?>} */
                  tweens = tweens.concat(_tweenLookup[p].tweens);
                }
                eventTarget = eventTarget.parentNode;
              }
            }
            /** @type {number} */
            n = tweens.length;
            /** @type {number} */
            i = 0;
            for (; n > i; i++) {
              if (value) {
                tweens[i].totalTime(tweens[i].totalDuration());
              }
              tweens[i]._enabled(false, false);
            }
          }
        }
      };
      /**
       * @param {boolean} progress
       * @param {number} key
       * @param {number} value
       * @param {number} source
       * @return {undefined}
       */
      var parse = function(progress, key, value, source) {
        /** @type {boolean} */
        key = key !== false;
        /** @type {boolean} */
        value = value !== false;
        /** @type {boolean} */
        source = source !== false;
        var action;
        var tween;
        var queue = get(source);
        /** @type {boolean} */
        var deletePromiseExists = key && value && source;
        var i = queue.length;
        for (; --i > -1;) {
          tween = queue[i];
          if (deletePromiseExists || tween instanceof TimelineLite || (action = tween.target === tween.vars.onComplete) && value || key && !action) {
            tween.paused(progress);
          }
        }
      };
      return TweenLite.pauseAll = function(callback, context, values) {
        parse(true, callback, context, values);
      }, TweenLite.resumeAll = function(help, i, values) {
        parse(false, help, i, values);
      }, TweenLite.globalTimeScale = function(value) {
        var self = Animation._rootTimeline;
        var time = view.ticker.time;
        return arguments.length ? (value = value || _tinyNum, self._startTime = time - (time - self._startTime) * self._timeScale / value, self = Animation._rootFramesTimeline, time = view.ticker.frame, self._startTime = time - (time - self._startTime) * self._timeScale / value, self._timeScale = Animation._rootTimeline._timeScale = value, value) :
        self._timeScale;
      }, p.progress = function(value, fn) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - value : value) + this._cycle * (this._duration + this._repeatDelay), fn) : this._time / this.duration();
      }, p.totalProgress = function(sometotal, value) {
        return arguments.length ? this.totalTime(this.totalDuration() * sometotal, value) : this._totalTime / this.totalDuration();
      }, p.time = function(value, name) {
        return arguments.length ? (this._dirty && this.totalDuration(), value > this._duration && (value = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? value = this._duration - value + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (value = value + this._cycle * (this._duration + this._repeatDelay)), this.totalTime(value, name)) : this._time;
      }, p.duration = function(value) {
        return arguments.length ? Animation.prototype.duration.call(this, value) : this._duration;
      }, p.totalDuration = function(value) {
        return arguments.length ? -1 === this._repeat ? this : this.duration((value - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = false), this._totalDuration);
      }, p.repeat = function(times) {
        return arguments.length ? (this._repeat = times, this._uncache(true)) : this._repeat;
      }, p.repeatDelay = function(value) {
        return arguments.length ? (this._repeatDelay = value, this._uncache(true)) : this._repeatDelay;
      }, p.yoyo = function(value) {
        return arguments.length ? (this._yoyo = value, this) : this._yoyo;
      }, TweenLite;
    }, true);
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(Animation, SimpleTimeline, TweenLite) {
      /**
       * @param {!Object} value
       * @return {undefined}
       */
      var TimelineLite = function(value) {
        SimpleTimeline.call(this, value);
        this._labels = {};
        /** @type {boolean} */
        this.autoRemoveChildren = this.vars.autoRemoveChildren === true;
        /** @type {boolean} */
        this.smoothChildTiming = this.vars.smoothChildTiming === true;
        /** @type {boolean} */
        this._sortChildren = true;
        this._onUpdate = this.vars.onUpdate;
        var val;
        var p;
        var v = this.vars;
        for (p in v) {
          val = v[p];
          if (_isArray(val) && -1 !== val.join("").indexOf("{self}")) {
            v[p] = this._swapSelfInParams(val);
          }
        }
        if (_isArray(v.tweens)) {
          this.add(v.tweens, 0, v.align, v.stagger);
        }
      };
      /** @type {number} */
      var _tinyNum = 1E-10;
      var TweenLiteInternals = TweenLite._internals;
      var _internals = TimelineLite._internals = {};
      var _isSelector = TweenLiteInternals.isSelector;
      var _isArray = TweenLiteInternals.isArray;
      var _lazyTweens = TweenLiteInternals.lazyTweens;
      var _lazyRender = TweenLiteInternals.lazyRender;
      var _globals = _gsScope._gsDefine.globals;
      /**
       * @param {!Object} vars
       * @return {?}
       */
      var _copy = function(vars) {
        var i;
        var copy = {};
        for (i in vars) {
          copy[i] = vars[i];
        }
        return copy;
      };
      /**
       * @param {!Object} vars
       * @param {!Object} targets
       * @param {number} i
       * @return {undefined}
       */
      var _applyCycle = function(vars, targets, i) {
        var p;
        var val;
        var alt = vars.cycle;
        for (p in alt) {
          val = alt[p];
          vars[p] = "function" == typeof val ? val.call(targets[i], i) : val[i % val.length];
        }
        delete vars.cycle;
      };
      /** @type {function(): undefined} */
      var _pauseCallback = _internals.pauseCallback = function() {
      };
      /**
       * @param {!Object} a
       * @return {?}
       */
      var _slice = function(a) {
        var i;
        /** @type {!Array} */
        var b = [];
        var n = a.length;
        /** @type {number} */
        i = 0;
        for (; i !== n; b.push(a[i++])) {
        }
        return b;
      };
      var p = TimelineLite.prototype = new SimpleTimeline;
      return TimelineLite.version = "1.19.0", p.constructor = TimelineLite, p.kill()._gc = p._forcingPlayhead = p._hasPause = false, p.to = function(name, duration, vars, position) {
        var Engine = vars.repeat && _globals.TweenMax || TweenLite;
        return duration ? this.add(new Engine(name, duration, vars), position) : this.set(name, vars, position);
      }, p.from = function(name, duration, vars, key) {
        return this.add((vars.repeat && _globals.TweenMax || TweenLite).from(name, duration, vars), key);
      }, p.fromTo = function(target, duration, fromVars, vars, position) {
        var Engine = vars.repeat && _globals.TweenMax || TweenLite;
        return duration ? this.add(Engine.fromTo(target, duration, fromVars, vars), position) : this.set(target, vars, position);
      }, p.staggerTo = function(target, duration, vars, time, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
        var copy;
        var i;
        var that = new TimelineLite({
          onComplete : onCompleteAll,
          onCompleteParams : onCompleteAllParams,
          callbackScope : onCompleteAllScope,
          smoothChildTiming : this.smoothChildTiming
        });
        var cycle = vars.cycle;
        if ("string" == typeof target) {
          target = TweenLite.selector(target) || target;
        }
        target = target || [];
        if (_isSelector(target)) {
          target = _slice(target);
        }
        time = time || 0;
        if (0 > time) {
          target = _slice(target);
          target.reverse();
          /** @type {number} */
          time = time * -1;
        }
        /** @type {number} */
        i = 0;
        for (; i < target.length; i++) {
          copy = _copy(vars);
          if (copy.startAt) {
            copy.startAt = _copy(copy.startAt);
            if (copy.startAt.cycle) {
              _applyCycle(copy.startAt, target, i);
            }
          }
          if (cycle) {
            _applyCycle(copy, target, i);
            if (null != copy.duration) {
              duration = copy.duration;
              delete copy.duration;
            }
          }
          that.to(target[i], duration, copy, i * time);
        }
        return this.add(that, position);
      }, p.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
        return vars.immediateRender = 0 != vars.immediateRender, vars.runBackwards = true, this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
      }, p.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
        return toVars.startAt = fromVars, toVars.immediateRender = 0 != toVars.immediateRender && 0 != fromVars.immediateRender, this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
      }, p.call = function(value, obj, fn, name) {
        return this.add(TweenLite.delayedCall(0, value, obj, fn), name);
      }, p.set = function(name, data, value) {
        return value = this._parseTimeOrLabel(value, 0, true), null == data.immediateRender && (data.immediateRender = value === this._time && !this._paused), this.add(new TweenLite(name, 0, data), value);
      }, TimelineLite.exportRoot = function(vars, ignoreDelayedCalls) {
        vars = vars || {};
        if (null == vars.smoothChildTiming) {
          /** @type {boolean} */
          vars.smoothChildTiming = true;
        }
        var tween;
        var next;
        var self = new TimelineLite(vars);
        var root = self._timeline;
        if (null == ignoreDelayedCalls) {
          /** @type {boolean} */
          ignoreDelayedCalls = true;
        }
        root._remove(self, true);
        /** @type {number} */
        self._startTime = 0;
        self._rawPrevTime = self._time = self._totalTime = root._time;
        tween = root._first;
        for (; tween;) {
          next = tween._next;
          if (!(ignoreDelayedCalls && tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
            self.add(tween, tween._startTime - tween._delay);
          }
          tween = next;
        }
        return root.add(self, 0), self;
      }, p.add = function(value, callback, type, x) {
        var start;
        var length;
        var j;
        var child;
        var tl;
        var beforeRawTime;
        if ("number" != typeof callback && (callback = this._parseTimeOrLabel(callback, 0, true, value)), !(value instanceof Animation)) {
          if (value instanceof Array || value && value.push && _isArray(value)) {
            type = type || "normal";
            x = x || 0;
            /** @type {string} */
            start = callback;
            length = value.length;
            /** @type {number} */
            j = 0;
            for (; length > j; j++) {
              if (_isArray(child = value[j])) {
                child = new TimelineLite({
                  tweens : child
                });
              }
              this.add(child, start);
              if ("string" != typeof child && "function" != typeof child) {
                if ("sequence" === type) {
                  start = child._startTime + child.totalDuration() / child._timeScale;
                } else {
                  if ("start" === type) {
                    child._startTime -= child.delay();
                  }
                }
              }
              start = start + x;
            }
            return this._uncache(true);
          }
          if ("string" == typeof value) {
            return this.addLabel(value, callback);
          }
          if ("function" != typeof value) {
            throw "Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.";
          }
          value = TweenLite.delayedCall(0, value);
        }
        if (SimpleTimeline.prototype.add.call(this, value, callback), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) {
          tl = this;
          /** @type {boolean} */
          beforeRawTime = tl.rawTime() > value._startTime;
          for (; tl._timeline;) {
            if (beforeRawTime && tl._timeline.smoothChildTiming) {
              tl.totalTime(tl._totalTime, true);
            } else {
              if (tl._gc) {
                tl._enabled(true, false);
              }
            }
            tl = tl._timeline;
          }
        }
        return this;
      }, p.remove = function(value) {
        if (value instanceof Animation) {
          this._remove(value, false);
          var tl = value._timeline = value.vars.useFrames ? Animation._rootFramesTimeline : Animation._rootTimeline;
          return value._startTime = (value._paused ? value._pauseTime : tl._time) - (value._reversed ? value.totalDuration() - value._totalTime : value._totalTime) / value._timeScale, this;
        }
        if (value instanceof Array || value && value.push && _isArray(value)) {
          var i = value.length;
          for (; --i > -1;) {
            this.remove(value[i]);
          }
          return this;
        }
        return "string" == typeof value ? this.removeLabel(value) : this.kill(null, value);
      }, p._remove = function(prop, item) {
        SimpleTimeline.prototype._remove.call(this, prop, item);
        var tween = this._last;
        return tween ? this._time > tween._startTime + tween._totalDuration / tween._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
      }, p.append = function(value, offsetOrLabel) {
        return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
      }, p.insert = p.insertMultiple = function(block, position, cb, value) {
        return this.add(block, position || 0, cb, value);
      }, p.appendMultiple = function(value, offsetOrLabel, align, color) {
        return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value), align, color);
      }, p.addLabel = function(label, position) {
        return this._labels[label] = this._parseTimeOrLabel(position), this;
      }, p.addPause = function(position, callback, params, scope) {
        var t = TweenLite.delayedCall(0, _pauseCallback, params, scope || this);
        return t.vars.onComplete = t.vars.onReverseComplete = callback, t.data = "isPause", this._hasPause = true, this.add(t, position);
      }, p.removeLabel = function(key) {
        return delete this._labels[key], this;
      }, p.getLabelTime = function(label) {
        return null != this._labels[label] ? this._labels[label] : -1;
      }, p._parseTimeOrLabel = function(timeOrLabel, offsetOrLabel, appendIfAbsent, value) {
        var i;
        if (value instanceof Animation && value.timeline === this) {
          this.remove(value);
        } else {
          if (value && (value instanceof Array || value.push && _isArray(value))) {
            i = value.length;
            for (; --i > -1;) {
              if (value[i] instanceof Animation && value[i].timeline === this) {
                this.remove(value[i]);
              }
            }
          }
        }
        if ("string" == typeof offsetOrLabel) {
          return this._parseTimeOrLabel(offsetOrLabel, appendIfAbsent && "number" == typeof timeOrLabel && null == this._labels[offsetOrLabel] ? timeOrLabel - this.duration() : 0, appendIfAbsent);
        }
        if (offsetOrLabel = offsetOrLabel || 0, "string" != typeof timeOrLabel || !isNaN(timeOrLabel) && null == this._labels[timeOrLabel]) {
          if (null == timeOrLabel) {
            timeOrLabel = this.duration();
          }
        } else {
          if (i = timeOrLabel.indexOf("="), -1 === i) {
            return null == this._labels[timeOrLabel] ? appendIfAbsent ? this._labels[timeOrLabel] = this.duration() + offsetOrLabel : offsetOrLabel : this._labels[timeOrLabel] + offsetOrLabel;
          }
          /** @type {number} */
          offsetOrLabel = parseInt(timeOrLabel.charAt(i - 1) + "1", 10) * Number(timeOrLabel.substr(i + 1));
          timeOrLabel = i > 1 ? this._parseTimeOrLabel(timeOrLabel.substr(0, i - 1), 0, appendIfAbsent) : this.duration();
        }
        return Number(timeOrLabel) + offsetOrLabel;
      }, p.seek = function(position, suppressEvents) {
        return this.totalTime("number" == typeof position ? position : this._parseTimeOrLabel(position), suppressEvents !== false);
      }, p.stop = function() {
        return this.paused(true);
      }, p.gotoAndPlay = function(position, suppressEvents) {
        return this.play(position, suppressEvents);
      }, p.gotoAndStop = function(position, suppressEvents) {
        return this.pause(position, suppressEvents);
      }, p.render = function(time, suppressEvents, force) {
        if (this._gc) {
          this._enabled(true, false);
        }
        var tween;
        var result;
        var next;
        var callback;
        var val;
        var pauseTween;
        var curTime;
        var totalDur = this._dirty ? this.totalDuration() : this._totalDuration;
        var prevTime = this._time;
        var prevStart = this._startTime;
        var prevTimeScale = this._timeScale;
        var prevPaused = this._paused;
        if (time >= totalDur - 1E-7) {
          this._totalTime = this._time = totalDur;
          if (!(this._reversed || this._hasPausedChild())) {
            /** @type {boolean} */
            result = true;
            /** @type {string} */
            callback = "onComplete";
            /** @type {boolean} */
            val = !!this._timeline.autoRemoveChildren;
            if (0 === this._duration && (0 >= time && time >= -1E-7 || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum) && this._rawPrevTime !== time && this._first) {
              /** @type {boolean} */
              val = true;
              if (this._rawPrevTime > _tinyNum) {
                /** @type {string} */
                callback = "onReverseComplete";
              }
            }
          }
          this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum;
          time = totalDur + 1E-4;
        } else {
          if (1E-7 > time) {
            if (this._totalTime = this._time = 0, (0 !== prevTime || 0 === this._duration && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || 0 > time && this._rawPrevTime >= 0)) && (callback = "onReverseComplete", result = this._reversed), 0 > time) {
              /** @type {boolean} */
              this._active = false;
              if (this._timeline.autoRemoveChildren && this._reversed) {
                /** @type {boolean} */
                val = result = true;
                /** @type {string} */
                callback = "onReverseComplete";
              } else {
                if (this._rawPrevTime >= 0 && this._first) {
                  /** @type {boolean} */
                  val = true;
                }
              }
              /** @type {number} */
              this._rawPrevTime = time;
            } else {
              if (this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum, 0 === time && result) {
                tween = this._first;
                for (; tween && 0 === tween._startTime;) {
                  if (!tween._duration) {
                    /** @type {boolean} */
                    result = false;
                  }
                  tween = tween._next;
                }
              }
              /** @type {number} */
              time = 0;
              if (!this._initted) {
                /** @type {boolean} */
                val = true;
              }
            }
          } else {
            if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
              if (time >= prevTime) {
                tween = this._first;
                for (; tween && tween._startTime <= time && !pauseTween;) {
                  if (!(tween._duration || "isPause" !== tween.data || tween.ratio || 0 === tween._startTime && 0 === this._rawPrevTime)) {
                    pauseTween = tween;
                  }
                  tween = tween._next;
                }
              } else {
                tween = this._last;
                for (; tween && tween._startTime >= time && !pauseTween;) {
                  if (!tween._duration) {
                    if ("isPause" === tween.data && tween._rawPrevTime > 0) {
                      pauseTween = tween;
                    }
                  }
                  tween = tween._prev;
                }
              }
              if (pauseTween) {
                this._time = time = pauseTween._startTime;
                this._totalTime = time + this._cycle * (this._totalDuration + this._repeatDelay);
              }
            }
            this._totalTime = this._time = this._rawPrevTime = time;
          }
        }
        if (this._time !== prevTime && this._first || force || val || pauseTween) {
          if (this._initted || (this._initted = true), this._active || !this._paused && this._time !== prevTime && time > 0 && (this._active = true), 0 === prevTime && this.vars.onStart && (0 === this._time && this._duration || suppressEvents || this._callback("onStart")), curTime = this._time, curTime >= prevTime) {
            tween = this._first;
            for (; tween && (next = tween._next, curTime === this._time && (!this._paused || prevPaused));) {
              if (tween._active || tween._startTime <= curTime && !tween._paused && !tween._gc) {
                if (pauseTween === tween) {
                  this.pause();
                }
                if (tween._reversed) {
                  tween.render((tween._dirty ? tween.totalDuration() : tween._totalDuration) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
                } else {
                  tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                }
              }
              tween = next;
            }
          } else {
            tween = this._last;
            for (; tween && (next = tween._prev, curTime === this._time && (!this._paused || prevPaused));) {
              if (tween._active || tween._startTime <= prevTime && !tween._paused && !tween._gc) {
                if (pauseTween === tween) {
                  pauseTween = tween._prev;
                  for (; pauseTween && pauseTween.endTime() > this._time;) {
                    pauseTween.render(pauseTween._reversed ? pauseTween.totalDuration() - (time - pauseTween._startTime) * pauseTween._timeScale : (time - pauseTween._startTime) * pauseTween._timeScale, suppressEvents, force);
                    pauseTween = pauseTween._prev;
                  }
                  /** @type {null} */
                  pauseTween = null;
                  this.pause();
                }
                if (tween._reversed) {
                  tween.render((tween._dirty ? tween.totalDuration() : tween._totalDuration) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
                } else {
                  tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                }
              }
              tween = next;
            }
          }
          if (this._onUpdate) {
            if (!suppressEvents) {
              if (_lazyTweens.length) {
                _lazyRender();
              }
              this._callback("onUpdate");
            }
          }
          if (callback) {
            if (!this._gc) {
              if ((prevStart === this._startTime || prevTimeScale !== this._timeScale) && (0 === this._time || totalDur >= this.totalDuration())) {
                if (result) {
                  if (_lazyTweens.length) {
                    _lazyRender();
                  }
                  if (this._timeline.autoRemoveChildren) {
                    this._enabled(false, false);
                  }
                  /** @type {boolean} */
                  this._active = false;
                }
                if (!suppressEvents && this.vars[callback]) {
                  this._callback(callback);
                }
              }
            }
          }
        }
      }, p._hasPausedChild = function() {
        var tween = this._first;
        for (; tween;) {
          if (tween._paused || tween instanceof TimelineLite && tween._hasPausedChild()) {
            return true;
          }
          tween = tween._next;
        }
        return false;
      }, p.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {
        ignoreBeforeTime = ignoreBeforeTime || -9999999999;
        /** @type {!Array} */
        var a = [];
        var tween = this._first;
        /** @type {number} */
        var cnt = 0;
        for (; tween;) {
          if (!(tween._startTime < ignoreBeforeTime)) {
            if (tween instanceof TweenLite) {
              if (tweens !== false) {
                a[cnt++] = tween;
              }
            } else {
              if (timelines !== false) {
                a[cnt++] = tween;
              }
              if (nested !== false) {
                /** @type {!Array<?>} */
                a = a.concat(tween.getChildren(true, tweens, timelines));
                /** @type {number} */
                cnt = a.length;
              }
            }
          }
          tween = tween._next;
        }
        return a;
      }, p.getTweensOf = function(target, nested) {
        var tweens;
        var i;
        var disabled = this._gc;
        /** @type {!Array} */
        var gbMemory = [];
        /** @type {number} */
        var a = 0;
        if (disabled) {
          this._enabled(true, true);
        }
        tweens = TweenLite.getTweensOf(target);
        i = tweens.length;
        for (; --i > -1;) {
          if (tweens[i].timeline === this || nested && this._contains(tweens[i])) {
            gbMemory[a++] = tweens[i];
          }
        }
        return disabled && this._enabled(false, true), gbMemory;
      }, p.recent = function() {
        return this._recent;
      }, p._contains = function(tween) {
        var tl = tween.timeline;
        for (; tl;) {
          if (tl === this) {
            return true;
          }
          tl = tl.timeline;
        }
        return false;
      }, p.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime) {
        ignoreBeforeTime = ignoreBeforeTime || 0;
        var p;
        var tween = this._first;
        var labels = this._labels;
        for (; tween;) {
          if (tween._startTime >= ignoreBeforeTime) {
            tween._startTime += amount;
          }
          tween = tween._next;
        }
        if (adjustLabels) {
          for (p in labels) {
            if (labels[p] >= ignoreBeforeTime) {
              labels[p] += amount;
            }
          }
        }
        return this._uncache(true);
      }, p._kill = function(vars, target) {
        if (!vars && !target) {
          return this._enabled(false, false);
        }
        var tweens = target ? this.getTweensOf(target) : this.getChildren(true, true, false);
        var i = tweens.length;
        /** @type {boolean} */
        var changed = false;
        for (; --i > -1;) {
          if (tweens[i]._kill(vars, target)) {
            /** @type {boolean} */
            changed = true;
          }
        }
        return changed;
      }, p.clear = function(nbToClear) {
        var tweens = this.getChildren(false, true, true);
        var i = tweens.length;
        /** @type {number} */
        this._time = this._totalTime = 0;
        for (; --i > -1;) {
          tweens[i]._enabled(false, false);
        }
        return nbToClear !== false && (this._labels = {}), this._uncache(true);
      }, p.invalidate = function() {
        var tween = this._first;
        for (; tween;) {
          tween.invalidate();
          tween = tween._next;
        }
        return Animation.prototype.invalidate.call(this);
      }, p._enabled = function(enabled, node) {
        if (enabled === this._gc) {
          var tween = this._first;
          for (; tween;) {
            tween._enabled(enabled, true);
            tween = tween._next;
          }
        }
        return SimpleTimeline.prototype._enabled.call(this, enabled, node);
      }, p.totalTime = function(time, object, forceUpdate) {
        /** @type {boolean} */
        this._forcingPlayhead = true;
        var cssobj = Animation.prototype.totalTime.apply(this, arguments);
        return this._forcingPlayhead = false, cssobj;
      }, p.duration = function(value) {
        return arguments.length ? (0 !== this.duration() && 0 !== value && this.timeScale(this._duration / value), this) : (this._dirty && this.totalDuration(), this._duration);
      }, p.totalDuration = function(value) {
        if (!arguments.length) {
          if (this._dirty) {
            var next;
            var endSide;
            /** @type {number} */
            var max = 0;
            var tween = this._last;
            /** @type {number} */
            var prevStart = 999999999999;
            for (; tween;) {
              next = tween._prev;
              if (tween._dirty) {
                tween.totalDuration();
              }
              if (tween._startTime > prevStart && this._sortChildren && !tween._paused) {
                this.add(tween, tween._startTime - tween._delay);
              } else {
                prevStart = tween._startTime;
              }
              if (tween._startTime < 0 && !tween._paused) {
                /** @type {number} */
                max = max - tween._startTime;
                if (this._timeline.smoothChildTiming) {
                  this._startTime += tween._startTime / this._timeScale;
                }
                this.shiftChildren(-tween._startTime, false, -9999999999);
                /** @type {number} */
                prevStart = 0;
              }
              endSide = tween._startTime + tween._totalDuration / tween._timeScale;
              if (endSide > max) {
                max = endSide;
              }
              tween = next;
            }
            this._duration = this._totalDuration = max;
            /** @type {boolean} */
            this._dirty = false;
          }
          return this._totalDuration;
        }
        return value && this.totalDuration() ? this.timeScale(this._totalDuration / value) : this;
      }, p.paused = function(data) {
        if (!data) {
          var tween = this._first;
          var time = this._time;
          for (; tween;) {
            if (tween._startTime === time && "isPause" === tween.data) {
              /** @type {number} */
              tween._rawPrevTime = 0;
            }
            tween = tween._next;
          }
        }
        return Animation.prototype.paused.apply(this, arguments);
      }, p.usesFrames = function() {
        var tl = this._timeline;
        for (; tl._timeline;) {
          tl = tl._timeline;
        }
        return tl === Animation._rootFramesTimeline;
      }, p.rawTime = function() {
        return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
      }, TimelineLite;
    }, true);
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(TimelineLite, TweenLite, i) {
      /**
       * @param {!Object} value
       * @return {undefined}
       */
      var TimelineMax = function(value) {
        TimelineLite.call(this, value);
        this._repeat = this.vars.repeat || 0;
        this._repeatDelay = this.vars.repeatDelay || 0;
        /** @type {number} */
        this._cycle = 0;
        /** @type {boolean} */
        this._yoyo = this.vars.yoyo === true;
        /** @type {boolean} */
        this._dirty = true;
      };
      /** @type {number} */
      var _tinyNum = 1E-10;
      var TweenLiteInternals = TweenLite._internals;
      var _lazyTweens = TweenLiteInternals.lazyTweens;
      var _lazyRender = TweenLiteInternals.lazyRender;
      var _globals = _gsScope._gsDefine.globals;
      var b = new i(null, null, 1, 0);
      var p = TimelineMax.prototype = new TimelineLite;
      return p.constructor = TimelineMax, p.kill()._gc = false, TimelineMax.version = "1.19.0", p.invalidate = function() {
        return this._yoyo = this.vars.yoyo === true, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(true), TimelineLite.prototype.invalidate.call(this);
      }, p.addCallback = function(callback, data, params, scope) {
        return this.add(TweenLite.delayedCall(0, callback, params, scope), data);
      }, p.removeCallback = function(callback, timeOrLabel) {
        if (callback) {
          if (null == timeOrLabel) {
            this._kill(null, callback);
          } else {
            var a = this.getTweensOf(callback, false);
            var i = a.length;
            var time = this._parseTimeOrLabel(timeOrLabel);
            for (; --i > -1;) {
              if (a[i]._startTime === time) {
                a[i]._enabled(false, false);
              }
            }
          }
        }
        return this;
      }, p.removePause = function(position) {
        return this.removeCallback(TimelineLite._internals.pauseCallback, position);
      }, p.tweenTo = function(position, vars) {
        vars = vars || {};
        var duration;
        var i;
        var t;
        var copy = {
          ease : b,
          useFrames : this.usesFrames(),
          immediateRender : false
        };
        var Engine = vars.repeat && _globals.TweenMax || TweenLite;
        for (i in vars) {
          copy[i] = vars[i];
        }
        return copy.time = this._parseTimeOrLabel(position), duration = Math.abs(Number(copy.time) - this._time) / this._timeScale || .001, t = new Engine(this, duration, copy), copy.onStart = function() {
          t.target.paused(true);
          if (t.vars.time !== t.target.time() && duration === t.duration()) {
            t.duration(Math.abs(t.vars.time - t.target.time()) / t.target._timeScale);
          }
          if (vars.onStart) {
            t._callback("onStart");
          }
        }, t;
      }, p.tweenFromTo = function(fromPosition, toPosition, vars) {
        vars = vars || {};
        fromPosition = this._parseTimeOrLabel(fromPosition);
        vars.startAt = {
          onComplete : this.seek,
          onCompleteParams : [fromPosition],
          callbackScope : this
        };
        /** @type {boolean} */
        vars.immediateRender = vars.immediateRender !== false;
        var t = this.tweenTo(toPosition, vars);
        return t.duration(Math.abs(t.vars.time - fromPosition) / this._timeScale || .001);
      }, p.render = function(time, suppressEvents, force) {
        if (this._gc) {
          this._enabled(true, false);
        }
        var tween;
        var result;
        var next;
        var callback;
        var val;
        var cycleDuration;
        var pauseTween;
        var curTime;
        var totalDur = this._dirty ? this.totalDuration() : this._totalDuration;
        var dur = this._duration;
        var prevTime = this._time;
        var prevTotalTime = this._totalTime;
        var prevStart = this._startTime;
        var prevTimeScale = this._timeScale;
        var prevRawPrevTime = this._rawPrevTime;
        var prevPaused = this._paused;
        var prevCycle = this._cycle;
        if (time >= totalDur - 1E-7) {
          if (!this._locked) {
            this._totalTime = totalDur;
            this._cycle = this._repeat;
          }
          if (!(this._reversed || this._hasPausedChild())) {
            /** @type {boolean} */
            result = true;
            /** @type {string} */
            callback = "onComplete";
            /** @type {boolean} */
            val = !!this._timeline.autoRemoveChildren;
            if (0 === this._duration && (0 >= time && time >= -1E-7 || 0 > prevRawPrevTime || prevRawPrevTime === _tinyNum) && prevRawPrevTime !== time && this._first) {
              /** @type {boolean} */
              val = true;
              if (prevRawPrevTime > _tinyNum) {
                /** @type {string} */
                callback = "onReverseComplete";
              }
            }
          }
          this._rawPrevTime = this._duration || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum;
          if (this._yoyo && 0 !== (1 & this._cycle)) {
            /** @type {number} */
            this._time = time = 0;
          } else {
            this._time = dur;
            time = dur + 1E-4;
          }
        } else {
          if (1E-7 > time) {
            if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== prevTime || 0 === dur && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || 0 > time && prevRawPrevTime >= 0) && !this._locked) && (callback = "onReverseComplete", result = this._reversed), 0 > time) {
              /** @type {boolean} */
              this._active = false;
              if (this._timeline.autoRemoveChildren && this._reversed) {
                /** @type {boolean} */
                val = result = true;
                /** @type {string} */
                callback = "onReverseComplete";
              } else {
                if (prevRawPrevTime >= 0 && this._first) {
                  /** @type {boolean} */
                  val = true;
                }
              }
              /** @type {number} */
              this._rawPrevTime = time;
            } else {
              if (this._rawPrevTime = dur || !suppressEvents || time || this._rawPrevTime === time ? time : _tinyNum, 0 === time && result) {
                tween = this._first;
                for (; tween && 0 === tween._startTime;) {
                  if (!tween._duration) {
                    /** @type {boolean} */
                    result = false;
                  }
                  tween = tween._next;
                }
              }
              /** @type {number} */
              time = 0;
              if (!this._initted) {
                /** @type {boolean} */
                val = true;
              }
            }
          } else {
            if (0 === dur && 0 > prevRawPrevTime && (val = true), this._time = this._rawPrevTime = time, this._locked || (this._totalTime = time, 0 !== this._repeat && (cycleDuration = dur + this._repeatDelay, this._cycle = this._totalTime / cycleDuration >> 0, 0 !== this._cycle && this._cycle === this._totalTime / cycleDuration && time >= prevTotalTime && this._cycle--, this._time = this._totalTime - this._cycle * cycleDuration, this._yoyo && 0 !== (1 &
            this._cycle) && (this._time = dur - this._time), this._time > dur ? (this._time = dur, time = dur + 1E-4) : this._time < 0 ? this._time = time = 0 : time = this._time)), this._hasPause && !this._forcingPlayhead && !suppressEvents) {
              if (time = this._time, time >= prevTime) {
                tween = this._first;
                for (; tween && tween._startTime <= time && !pauseTween;) {
                  if (!(tween._duration || "isPause" !== tween.data || tween.ratio || 0 === tween._startTime && 0 === this._rawPrevTime)) {
                    pauseTween = tween;
                  }
                  tween = tween._next;
                }
              } else {
                tween = this._last;
                for (; tween && tween._startTime >= time && !pauseTween;) {
                  if (!tween._duration) {
                    if ("isPause" === tween.data && tween._rawPrevTime > 0) {
                      pauseTween = tween;
                    }
                  }
                  tween = tween._prev;
                }
              }
              if (pauseTween) {
                this._time = time = pauseTween._startTime;
                this._totalTime = time + this._cycle * (this._totalDuration + this._repeatDelay);
              }
            }
          }
        }
        if (this._cycle !== prevCycle && !this._locked) {
          var backwards = this._yoyo && 0 !== (1 & prevCycle);
          /** @type {boolean} */
          var wrap = backwards === (this._yoyo && 0 !== (1 & this._cycle));
          var recTotalTime = this._totalTime;
          var recCycle = this._cycle;
          var recRawPrevTime = this._rawPrevTime;
          var recTime = this._time;
          if (this._totalTime = prevCycle * dur, this._cycle < prevCycle ? backwards = !backwards : this._totalTime += dur, this._time = prevTime, this._rawPrevTime = 0 === dur ? prevRawPrevTime - 1E-4 : prevRawPrevTime, this._cycle = prevCycle, this._locked = true, prevTime = backwards ? 0 : dur, this.render(prevTime, suppressEvents, 0 === dur), suppressEvents || this._gc || this.vars.onRepeat && this._callback("onRepeat"), prevTime !==
          this._time) {
            return;
          }
          if (wrap && (prevTime = backwards ? dur + 1E-4 : -1E-4, this.render(prevTime, true, false)), this._locked = false, this._paused && !prevPaused) {
            return;
          }
          this._time = recTime;
          this._totalTime = recTotalTime;
          this._cycle = recCycle;
          this._rawPrevTime = recRawPrevTime;
        }
        if (!(this._time !== prevTime && this._first || force || val || pauseTween)) {
          return void(prevTotalTime !== this._totalTime && this._onUpdate && (suppressEvents || this._callback("onUpdate")));
        }
        if (this._initted || (this._initted = true), this._active || !this._paused && this._totalTime !== prevTotalTime && time > 0 && (this._active = true), 0 === prevTotalTime && this.vars.onStart && (0 === this._totalTime && this._totalDuration || suppressEvents || this._callback("onStart")), curTime = this._time, curTime >= prevTime) {
          tween = this._first;
          for (; tween && (next = tween._next, curTime === this._time && (!this._paused || prevPaused));) {
            if (tween._active || tween._startTime <= this._time && !tween._paused && !tween._gc) {
              if (pauseTween === tween) {
                this.pause();
              }
              if (tween._reversed) {
                tween.render((tween._dirty ? tween.totalDuration() : tween._totalDuration) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
              } else {
                tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
              }
            }
            tween = next;
          }
        } else {
          tween = this._last;
          for (; tween && (next = tween._prev, curTime === this._time && (!this._paused || prevPaused));) {
            if (tween._active || tween._startTime <= prevTime && !tween._paused && !tween._gc) {
              if (pauseTween === tween) {
                pauseTween = tween._prev;
                for (; pauseTween && pauseTween.endTime() > this._time;) {
                  pauseTween.render(pauseTween._reversed ? pauseTween.totalDuration() - (time - pauseTween._startTime) * pauseTween._timeScale : (time - pauseTween._startTime) * pauseTween._timeScale, suppressEvents, force);
                  pauseTween = pauseTween._prev;
                }
                /** @type {null} */
                pauseTween = null;
                this.pause();
              }
              if (tween._reversed) {
                tween.render((tween._dirty ? tween.totalDuration() : tween._totalDuration) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
              } else {
                tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
              }
            }
            tween = next;
          }
        }
        if (this._onUpdate) {
          if (!suppressEvents) {
            if (_lazyTweens.length) {
              _lazyRender();
            }
            this._callback("onUpdate");
          }
        }
        if (callback) {
          if (!(this._locked || this._gc)) {
            if ((prevStart === this._startTime || prevTimeScale !== this._timeScale) && (0 === this._time || totalDur >= this.totalDuration())) {
              if (result) {
                if (_lazyTweens.length) {
                  _lazyRender();
                }
                if (this._timeline.autoRemoveChildren) {
                  this._enabled(false, false);
                }
                /** @type {boolean} */
                this._active = false;
              }
              if (!suppressEvents && this.vars[callback]) {
                this._callback(callback);
              }
            }
          }
        }
      }, p.getActive = function(nested, tweens, timelines) {
        if (null == nested) {
          /** @type {boolean} */
          nested = true;
        }
        if (null == tweens) {
          /** @type {boolean} */
          tweens = true;
        }
        if (null == timelines) {
          /** @type {boolean} */
          timelines = false;
        }
        var j;
        var tween;
        /** @type {!Array} */
        var a = [];
        var all = this.getChildren(nested, tweens, timelines);
        /** @type {number} */
        var cnt = 0;
        var i = all.length;
        /** @type {number} */
        j = 0;
        for (; i > j; j++) {
          tween = all[j];
          if (tween.isActive()) {
            a[cnt++] = tween;
          }
        }
        return a;
      }, p.getLabelAfter = function(time) {
        if (!time) {
          if (0 !== time) {
            time = this._time;
          }
        }
        var i;
        var labels = this.getLabelsArray();
        var l = labels.length;
        /** @type {number} */
        i = 0;
        for (; l > i; i++) {
          if (labels[i].time > time) {
            return labels[i].name;
          }
        }
        return null;
      }, p.getLabelBefore = function(time) {
        if (null == time) {
          time = this._time;
        }
        var labels = this.getLabelsArray();
        var i = labels.length;
        for (; --i > -1;) {
          if (labels[i].time < time) {
            return labels[i].name;
          }
        }
        return null;
      }, p.getLabelsArray = function() {
        var p;
        /** @type {!Array} */
        var a = [];
        /** @type {number} */
        var cnt = 0;
        for (p in this._labels) {
          a[cnt++] = {
            time : this._labels[p],
            name : p
          };
        }
        return a.sort(function(keyThis, keyLast01) {
          return keyThis.time - keyLast01.time;
        }), a;
      }, p.progress = function(value, fn) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - value : value) + this._cycle * (this._duration + this._repeatDelay), fn) : this._time / this.duration();
      }, p.totalProgress = function(sometotal, value) {
        return arguments.length ? this.totalTime(this.totalDuration() * sometotal, value) : this._totalTime / this.totalDuration();
      }, p.totalDuration = function(value) {
        return arguments.length ? -1 !== this._repeat && value ? this.timeScale(this.totalDuration() / value) : this : (this._dirty && (TimelineLite.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration);
      }, p.time = function(value, name) {
        return arguments.length ? (this._dirty && this.totalDuration(), value > this._duration && (value = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? value = this._duration - value + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (value = value + this._cycle * (this._duration + this._repeatDelay)), this.totalTime(value, name)) : this._time;
      }, p.repeat = function(times) {
        return arguments.length ? (this._repeat = times, this._uncache(true)) : this._repeat;
      }, p.repeatDelay = function(value) {
        return arguments.length ? (this._repeatDelay = value, this._uncache(true)) : this._repeatDelay;
      }, p.yoyo = function(value) {
        return arguments.length ? (this._yoyo = value, this) : this._yoyo;
      }, p.currentLabel = function(value) {
        return arguments.length ? this.seek(value, true) : this.getLabelBefore(this._time + 1E-8);
      }, TimelineMax;
    }, true);
    (function() {
      /** @type {number} */
      var ghostHeight = 180 / Math.PI;
      /** @type {!Array} */
      var s = [];
      /** @type {!Array} */
      var args = [];
      /** @type {!Array} */
      var params = [];
      var oldDocs = {};
      var globals = _gsScope._gsDefine.globals;
      /**
       * @param {number} a
       * @param {number} b
       * @param {number} c
       * @param {number} x
       * @return {undefined}
       */
      var Matrix = function(a, b, c, x) {
        if (c === x) {
          /** @type {number} */
          c = x - (x - b) / 1E6;
        }
        if (a === b) {
          b = a + (c - a) / 1E6;
        }
        /** @type {number} */
        this.a = a;
        /** @type {number} */
        this.b = b;
        /** @type {number} */
        this.c = c;
        /** @type {number} */
        this.d = x;
        /** @type {number} */
        this.da = x - a;
        /** @type {number} */
        this.ca = c - a;
        /** @type {number} */
        this.ba = b - a;
      };
      /** @type {string} */
      var o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,";
      /**
       * @param {string} e
       * @param {string} result
       * @param {string} n
       * @param {string} p
       * @return {?}
       */
      var callback = function(e, result, n, p) {
        var a = {
          a : e
        };
        var c = {};
        var rgb = {};
        var o = {
          c : p
        };
        /** @type {number} */
        var i = (e + result) / 2;
        /** @type {number} */
        var x = (result + n) / 2;
        /** @type {number} */
        var width = (n + p) / 2;
        /** @type {number} */
        var t2 = (i + x) / 2;
        /** @type {number} */
        var t1 = (x + width) / 2;
        /** @type {number} */
        var t3 = (t1 - t2) / 8;
        return a.b = i + (e - i) / 4, c.b = t2 + t3, a.c = c.a = (a.b + c.b) / 2, c.c = rgb.a = (t2 + t1) / 2, rgb.b = t1 - t3, o.b = width + (p - width) / 4, rgb.c = o.a = (rgb.b + o.b) / 2, [a, c, rgb, o];
      };
      /**
       * @param {!Array} data
       * @param {number} p
       * @param {boolean} g
       * @param {boolean} index
       * @param {?} sub
       * @return {undefined}
       */
      var f = function(data, p, g, index, sub) {
        var k;
        var a;
        var i;
        var len;
        var m;
        var count;
        var value;
        var offset;
        var c;
        var arr;
        var t1;
        var t2;
        var endValue;
        /** @type {number} */
        var pivotPosition = data.length - 1;
        /** @type {number} */
        var index = 0;
        var b = data[0].a;
        /** @type {number} */
        k = 0;
        for (; pivotPosition > k; k++) {
          m = data[index];
          a = m.a;
          i = m.d;
          len = data[index + 1].d;
          if (sub) {
            t1 = s[k];
            t2 = args[k];
            /** @type {number} */
            endValue = (t2 + t1) * p * .25 / (index ? .5 : params[k] || .5);
            /** @type {number} */
            count = i - (i - a) * (index ? .5 * p : 0 !== t1 ? endValue / t1 : 0);
            value = i + (len - i) * (index ? .5 * p : 0 !== t2 ? endValue / t2 : 0);
            /** @type {number} */
            offset = i - (count + ((value - count) * (3 * t1 / (t1 + t2) + .5) / 4 || 0));
          } else {
            /** @type {number} */
            count = i - (i - a) * p * .5;
            value = i + (len - i) * p * .5;
            /** @type {number} */
            offset = i - (count + value) / 2;
          }
          /** @type {number} */
          count = count + offset;
          /** @type {number} */
          value = value + offset;
          /** @type {number} */
          m.c = c = count;
          if (0 !== k) {
            m.b = b;
          } else {
            m.b = b = m.a + .6 * (m.c - m.a);
          }
          /** @type {number} */
          m.da = i - a;
          /** @type {number} */
          m.ca = c - a;
          /** @type {number} */
          m.ba = b - a;
          if (g) {
            arr = callback(a, b, c, i);
            data.splice(index, 1, arr[0], arr[1], arr[2], arr[3]);
            /** @type {number} */
            index = index + 4;
          } else {
            index++;
          }
          /** @type {number} */
          b = value;
        }
        m = data[index];
        m.b = b;
        m.c = b + .4 * (m.d - b);
        /** @type {number} */
        m.da = m.d - m.a;
        /** @type {number} */
        m.ca = m.c - m.a;
        /** @type {number} */
        m.ba = b - m.a;
        if (g) {
          arr = callback(m.a, b, m.c, m.d);
          data.splice(index, 1, arr[0], arr[1], arr[2], arr[3]);
        }
      };
      /**
       * @param {!Object} e
       * @param {!Object} i
       * @param {?} tag
       * @param {!HTMLDocument} input
       * @return {?}
       */
      var update = function(e, i, tag, input) {
        var length;
        var j;
        var a;
        var b;
        var c;
        var preRule;
        /** @type {!Array} */
        var h = [];
        if (input) {
          /** @type {!Array<?>} */
          e = [input].concat(e);
          /** @type {number} */
          j = e.length;
          for (; --j > -1;) {
            if ("string" == typeof(preRule = e[j][i]) && "=" === preRule.charAt(1)) {
              e[j][i] = input[i] + Number(preRule.charAt(0) + preRule.substr(2));
            }
          }
        }
        if (length = e.length - 2, 0 > length) {
          return h[0] = new Matrix(e[0][i], 0, 0, e[-1 > length ? 0 : 1][i]), h;
        }
        /** @type {number} */
        j = 0;
        for (; length > j; j++) {
          a = e[j][i];
          b = e[j + 1][i];
          h[j] = new Matrix(a, 0, 0, b);
          if (tag) {
            c = e[j + 2][i];
            s[j] = (s[j] || 0) + (b - a) * (b - a);
            args[j] = (args[j] || 0) + (c - b) * (c - b);
          }
        }
        return h[j] = new Matrix(e[j][i], 0, 0, e[j + 1][i]), h;
      };
      /**
       * @param {!Array} data
       * @param {number} p
       * @param {boolean} u
       * @param {boolean} name
       * @param {string} item
       * @param {!HTMLDocument} value
       * @return {?}
       */
      var normalize = function(data, p, u, name, item, value) {
        var k;
        var key;
        var result;
        var i;
        var re;
        var startMonth;
        var _;
        var a;
        var obj = {};
        /** @type {!Array} */
        var ks = [];
        var b = value || data[0];
        /** @type {string} */
        item = "string" == typeof item ? "," + item + "," : o;
        if (null == p) {
          /** @type {number} */
          p = 1;
        }
        for (key in data[0]) {
          ks.push(key);
        }
        if (data.length > 1) {
          a = data[data.length - 1];
          /** @type {boolean} */
          _ = true;
          /** @type {number} */
          k = ks.length;
          for (; --k > -1;) {
            if (key = ks[k], Math.abs(b[key] - a[key]) > .05) {
              /** @type {boolean} */
              _ = false;
              break;
            }
          }
          if (_) {
            data = data.concat();
            if (value) {
              data.unshift(value);
            }
            data.push(data[1]);
            value = data[data.length - 3];
          }
        }
        /** @type {number} */
        s.length = args.length = params.length = 0;
        /** @type {number} */
        k = ks.length;
        for (; --k > -1;) {
          key = ks[k];
          /** @type {boolean} */
          oldDocs[key] = -1 !== item.indexOf("," + key + ",");
          obj[key] = update(data, key, oldDocs[key], value);
        }
        /** @type {number} */
        k = s.length;
        for (; --k > -1;) {
          /** @type {number} */
          s[k] = Math.sqrt(s[k]);
          /** @type {number} */
          args[k] = Math.sqrt(args[k]);
        }
        if (!name) {
          /** @type {number} */
          k = ks.length;
          for (; --k > -1;) {
            if (oldDocs[key]) {
              result = obj[ks[k]];
              /** @type {number} */
              startMonth = result.length - 1;
              /** @type {number} */
              i = 0;
              for (; startMonth > i; i++) {
                /** @type {number} */
                re = result[i + 1].da / args[i] + result[i].da / s[i] || 0;
                params[i] = (params[i] || 0) + re * re;
              }
            }
          }
          /** @type {number} */
          k = params.length;
          for (; --k > -1;) {
            /** @type {number} */
            params[k] = Math.sqrt(params[k]);
          }
        }
        /** @type {number} */
        k = ks.length;
        /** @type {number} */
        i = u ? 4 : 1;
        for (; --k > -1;) {
          key = ks[k];
          result = obj[key];
          f(result, p, u, name, oldDocs[key]);
          if (_) {
            result.splice(0, i);
            result.splice(result.length - i, i);
          }
        }
        return obj;
      };
      /**
       * @param {!Object} data
       * @param {string} type
       * @param {string} a
       * @return {?}
       */
      var next = function(data, type, a) {
        type = type || "soft";
        var k;
        var columns;
        var c;
        var sy;
        var result;
        var j;
        var i;
        var l;
        var f;
        var index;
        var value;
        var obj = {};
        /** @type {number} */
        var offset = "cubic" === type ? 3 : 2;
        /** @type {boolean} */
        var count = "soft" === type;
        /** @type {!Array} */
        var p = [];
        if (count && a && (data = [a].concat(data)), null == data || data.length < offset + 1) {
          throw "invalid Bezier data";
        }
        for (f in data[0]) {
          p.push(f);
        }
        /** @type {number} */
        j = p.length;
        for (; --j > -1;) {
          f = p[j];
          /** @type {!Array} */
          obj[f] = result = [];
          /** @type {number} */
          index = 0;
          l = data.length;
          /** @type {number} */
          i = 0;
          for (; l > i; i++) {
            k = null == a ? data[i][f] : "string" == typeof(value = data[i][f]) && "=" === value.charAt(1) ? a[f] + Number(value.charAt(0) + value.substr(2)) : Number(value);
            if (count && i > 1 && l - 1 > i) {
              /** @type {number} */
              result[index++] = (k + result[index - 2]) / 2;
            }
            result[index++] = k;
          }
          /** @type {number} */
          l = index - offset + 1;
          /** @type {number} */
          index = 0;
          /** @type {number} */
          i = 0;
          for (; l > i; i = i + offset) {
            k = result[i];
            columns = result[i + 1];
            c = result[i + 2];
            sy = 2 === offset ? 0 : result[i + 3];
            result[index++] = value = 3 === offset ? new Matrix(k, columns, c, sy) : new Matrix(k, (2 * columns + k) / 3, (2 * columns + c) / 3, c);
          }
          /** @type {number} */
          result.length = index;
        }
        return obj;
      };
      /**
       * @param {!Object} data
       * @param {!Array} point
       * @param {number} y
       * @return {undefined}
       */
      var test = function(data, point, y) {
        var i;
        var s;
        var b;
        var num_output;
        var a;
        var d;
        var c;
        var y0;
        var t;
        var v;
        var groupByCol;
        /** @type {number} */
        var Z = 1 / y;
        var r = data.length;
        for (; --r > -1;) {
          v = data[r];
          b = v.a;
          /** @type {number} */
          num_output = v.d - b;
          /** @type {number} */
          a = v.c - b;
          /** @type {number} */
          d = v.b - b;
          /** @type {number} */
          i = s = 0;
          /** @type {number} */
          y0 = 1;
          for (; y >= y0; y0++) {
            /** @type {number} */
            c = Z * y0;
            /** @type {number} */
            t = 1 - c;
            /** @type {number} */
            i = s - (s = (c * c * num_output + 3 * t * (c * a + t * d)) * c);
            /** @type {number} */
            groupByCol = r * y + y0 - 1;
            point[groupByCol] = (point[groupByCol] || 0) + i * i;
          }
        }
      };
      /**
       * @param {!Array} t
       * @param {number} n
       * @return {?}
       */
      var d = function(t, n) {
        /** @type {number} */
        n = n >> 0 || 6;
        var e;
        var j;
        var len;
        var i;
        /** @type {!Array} */
        var x = [];
        /** @type {!Array} */
        var segments = [];
        /** @type {number} */
        var d = 0;
        /** @type {number} */
        var b = 0;
        /** @type {number} */
        var max = n - 1;
        /** @type {!Array} */
        var results = [];
        /** @type {!Array} */
        var row = [];
        for (e in t) {
          test(t[e], x, n);
        }
        /** @type {number} */
        len = x.length;
        /** @type {number} */
        j = 0;
        for (; len > j; j++) {
          /** @type {number} */
          d = d + Math.sqrt(x[j]);
          /** @type {number} */
          i = j % n;
          /** @type {number} */
          row[i] = d;
          if (i === max) {
            /** @type {number} */
            b = b + d;
            /** @type {number} */
            i = j / n >> 0;
            /** @type {!Array} */
            results[i] = row;
            /** @type {number} */
            segments[i] = b;
            /** @type {number} */
            d = 0;
            /** @type {!Array} */
            row = [];
          }
        }
        return {
          length : b,
          lengths : segments,
          segments : results
        };
      };
      var module = _gsScope._gsDefine.plugin({
        propName : "bezier",
        priority : -1,
        version : "1.3.7",
        API : 2,
        global : true,
        init : function(target, options, store) {
          /** @type {string} */
          this._target = target;
          if (options instanceof Array) {
            options = {
              values : options
            };
          }
          this._func = {};
          this._mod = {};
          /** @type {!Array} */
          this._props = [];
          /** @type {number} */
          this._timeRes = null == options.timeResolution ? 6 : parseInt(options.timeResolution, 10);
          var prop;
          var val;
          var key;
          var i;
          var s;
          /** @type {!Array} */
          var diff = options.values || [];
          var obj = {};
          var current = diff[0];
          var args = options.autoRotate || store.vars.orientToBezier;
          /** @type {(Array|null)} */
          this._autoRotate = args ? args instanceof Array ? args : [["x", "y", "rotation", args === true ? 0 : Number(args) || 0]] : null;
          for (prop in current) {
            this._props.push(prop);
          }
          /** @type {number} */
          key = this._props.length;
          for (; --key > -1;) {
            prop = this._props[key];
            this._overwriteProps.push(prop);
            /** @type {boolean} */
            val = this._func[prop] = "function" == typeof target[prop];
            obj[prop] = val ? target[prop.indexOf("set") || "function" != typeof target["get" + prop.substr(3)] ? prop : "get" + prop.substr(3)]() : parseFloat(target[prop]);
            if (!s) {
              if (obj[prop] !== diff[0][prop]) {
                s = obj;
              }
            }
          }
          if (this._beziers = "cubic" !== options.type && "quadratic" !== options.type && "soft" !== options.type ? normalize(diff, isNaN(options.curviness) ? 1 : options.curviness, false, "thruBasic" === options.type, options.correlate, s) : next(diff, options.type, obj), this._segCount = this._beziers[prop].length, this._timeRes) {
            var result = d(this._beziers, this._timeRes);
            this._length = result.length;
            this._lengths = result.lengths;
            this._segments = result.segments;
            /** @type {number} */
            this._l1 = this._li = this._s1 = this._si = 0;
            this._l2 = this._lengths[0];
            this._curSeg = this._segments[0];
            this._s2 = this._curSeg[0];
            /** @type {number} */
            this._prec = 1 / this._curSeg.length;
          }
          if (args = this._autoRotate) {
            /** @type {!Array} */
            this._initialRotations = [];
            if (!(args[0] instanceof Array)) {
              /** @type {!Array} */
              this._autoRotate = args = [args];
            }
            /** @type {number} */
            key = args.length;
            for (; --key > -1;) {
              /** @type {number} */
              i = 0;
              for (; 3 > i; i++) {
                prop = args[key][i];
                this._func[prop] = "function" == typeof target[prop] && target[prop.indexOf("set") || "function" != typeof target["get" + prop.substr(3)] ? prop : "get" + prop.substr(3)];
              }
              prop = args[key][2];
              this._initialRotations[key] = (this._func[prop] ? this._func[prop].call(this._target) : this._target[prop]) || 0;
              this._overwriteProps.push(prop);
            }
          }
          return this._startRatio = store.vars.runBackwards ? 1 : 0, true;
        },
        set : function(e) {
          var i;
          var alpha;
          var k;
          var prop;
          var a;
          var ratio;
          var value;
          var x;
          var t;
          var state;
          var b = this._segCount;
          var copiedStyle = this._func;
          var target = this._target;
          /** @type {boolean} */
          var m = e !== this._startRatio;
          if (this._timeRes) {
            if (t = this._lengths, state = this._curSeg, e = e * this._length, k = this._li, e > this._l2 && b - 1 > k) {
              /** @type {number} */
              x = b - 1;
              for (; x > k && (this._l2 = t[++k]) <= e;) {
              }
              this._l1 = t[k - 1];
              this._li = k;
              this._curSeg = state = this._segments[k];
              this._s2 = state[this._s1 = this._si = 0];
            } else {
              if (e < this._l1 && k > 0) {
                for (; k > 0 && (this._l1 = t[--k]) >= e;) {
                }
                if (0 === k && e < this._l1) {
                  /** @type {number} */
                  this._l1 = 0;
                } else {
                  k++;
                }
                this._l2 = t[k];
                this._li = k;
                this._curSeg = state = this._segments[k];
                this._s1 = state[(this._si = state.length - 1) - 1] || 0;
                this._s2 = state[this._si];
              }
            }
            if (i = k, e = e - this._l1, k = this._si, e > this._s2 && k < state.length - 1) {
              /** @type {number} */
              x = state.length - 1;
              for (; x > k && (this._s2 = state[++k]) <= e;) {
              }
              this._s1 = state[k - 1];
              this._si = k;
            } else {
              if (e < this._s1 && k > 0) {
                for (; k > 0 && (this._s1 = state[--k]) >= e;) {
                }
                if (0 === k && e < this._s1) {
                  /** @type {number} */
                  this._s1 = 0;
                } else {
                  k++;
                }
                this._s2 = state[k];
                this._si = k;
              }
            }
            /** @type {number} */
            ratio = (k + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
          } else {
            /** @type {number} */
            i = 0 > e ? 0 : e >= 1 ? b - 1 : b * e >> 0;
            /** @type {number} */
            ratio = (e - i * (1 / b)) * b;
          }
          /** @type {number} */
          alpha = 1 - ratio;
          k = this._props.length;
          for (; --k > -1;) {
            prop = this._props[k];
            a = this._beziers[prop][i];
            value = (ratio * ratio * a.da + 3 * alpha * (ratio * a.ca + alpha * a.ba)) * ratio + a.a;
            if (this._mod[prop]) {
              value = this._mod[prop](value, target);
            }
            if (copiedStyle[prop]) {
              target[prop](value);
            } else {
              target[prop] = value;
            }
          }
          if (this._autoRotate) {
            var b;
            var x1;
            var x;
            var x2;
            var y;
            var from;
            var pos;
            var memberRegistryNames = this._autoRotate;
            k = memberRegistryNames.length;
            for (; --k > -1;) {
              prop = memberRegistryNames[k][2];
              from = memberRegistryNames[k][3] || 0;
              /** @type {number} */
              pos = memberRegistryNames[k][4] === true ? 1 : ghostHeight;
              a = this._beziers[memberRegistryNames[k][0]];
              b = this._beziers[memberRegistryNames[k][1]];
              if (a && b) {
                a = a[i];
                b = b[i];
                x1 = a.a + (a.b - a.a) * ratio;
                x2 = a.b + (a.c - a.b) * ratio;
                x1 = x1 + (x2 - x1) * ratio;
                x2 = x2 + (a.c + (a.d - a.c) * ratio - x2) * ratio;
                x = b.a + (b.b - b.a) * ratio;
                y = b.b + (b.c - b.b) * ratio;
                x = x + (y - x) * ratio;
                y = y + (b.c + (b.d - b.c) * ratio - y) * ratio;
                value = m ? Math.atan2(y - x, x2 - x1) * pos + from : this._initialRotations[k];
                if (this._mod[prop]) {
                  value = this._mod[prop](value, target);
                }
                if (copiedStyle[prop]) {
                  target[prop](value);
                } else {
                  target[prop] = value;
                }
              }
            }
          }
        }
      });
      var p = module.prototype;
      /** @type {function(!Array, number, boolean, boolean, string, !HTMLDocument): ?} */
      module.bezierThrough = normalize;
      /** @type {function(string, string, string, string): ?} */
      module.cubicToQuadratic = callback;
      /** @type {boolean} */
      module._autoCSS = true;
      /**
       * @param {number} a
       * @param {number} c
       * @param {number} b
       * @return {?}
       */
      module.quadraticToCubic = function(a, c, b) {
        return new Matrix(a, (2 * c + a) / 3, (2 * c + b) / 3, b);
      };
      /**
       * @return {undefined}
       */
      module._cssRegister = function() {
        var TweenLite = globals.CSSPlugin;
        if (TweenLite) {
          var _internals = TweenLite._internals;
          var get = _internals._parseToProxy;
          var _setClassNameRatio = _internals._setPluginRatio;
          var Cursor = _internals.CSSPropTween;
          _internals._registerComplexSpecialProp("bezier", {
            parser : function(t, data, p, cssp, pt, name) {
              if (data instanceof Array) {
                data = {
                  values : data
                };
              }
              name = new module;
              var i;
              var prop;
              var o;
              /** @type {!Array} */
              var obj = data.values;
              /** @type {number} */
              var j = obj.length - 1;
              /** @type {!Array} */
              var mask = [];
              var c = {};
              if (0 > j) {
                return pt;
              }
              /** @type {number} */
              i = 0;
              for (; j >= i; i++) {
                o = get(t, obj[i], cssp, pt, name, j !== i);
                mask[i] = o.end;
              }
              for (prop in data) {
                c[prop] = data[prop];
              }
              return c.values = mask, pt = new Cursor(t, "bezier", 0, 0, o.pt, 2), pt.data = o, pt.plugin = name, pt.setRatio = _setClassNameRatio, 0 === c.autoRotate && (c.autoRotate = true), !c.autoRotate || c.autoRotate instanceof Array || (i = c.autoRotate === true ? 0 : Number(c.autoRotate), c.autoRotate =
              null != o.end.left ? [["left", "top", "rotation", i, false]] : null != o.end.x && [["x", "y", "rotation", i, false]]), c.autoRotate && (cssp._transform || cssp._enableTransforms(false), o.autoRotate = cssp._target._gsTransform, o.proxy.rotation = o.autoRotate.rotation || 0, cssp._overwriteProps.push("rotation")), name._onInitTween(o.proxy, c,
              cssp._tween), pt;
            }
          });
        }
      };
      /**
       * @param {?} obj
       * @return {undefined}
       */
      p._mod = function(obj) {
        var value;
        var props = this._overwriteProps;
        var i = props.length;
        for (; --i > -1;) {
          value = obj[props[i]];
          if (value && "function" == typeof value) {
            /** @type {!Function} */
            this._mod[props[i]] = value;
          }
        }
      };
      /**
       * @param {!Object} vars
       * @return {?}
       */
      p._kill = function(vars) {
        var q;
        var i;
        var p = this._props;
        for (q in this._beziers) {
          if (q in vars) {
            delete this._beziers[q];
            delete this._func[q];
            i = p.length;
            for (; --i > -1;) {
              if (p[i] === q) {
                p.splice(i, 1);
              }
            }
          }
        }
        if (p = this._autoRotate) {
          i = p.length;
          for (; --i > -1;) {
            if (vars[p[i][2]]) {
              p.splice(i, 1);
            }
          }
        }
        return this._super._kill.call(this, vars);
      };
    })();
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(TweenPlugin, TweenLite) {
      var token;
      var obj;
      var _cs;
      var _overwriteProps;
      /**
       * @return {undefined}
       */
      var CSSPlugin = function() {
        TweenPlugin.call(this, "css");
        /** @type {number} */
        this._overwriteProps.length = 0;
        this.setRatio = CSSPlugin.prototype.setRatio;
      };
      var _globals = _gsScope._gsDefine.globals;
      var _specialProps = {};
      var p = CSSPlugin.prototype = new TweenPlugin("css");
      /** @type {function(): undefined} */
      p.constructor = CSSPlugin;
      /** @type {string} */
      CSSPlugin.version = "1.19.0";
      /** @type {number} */
      CSSPlugin.API = 2;
      /** @type {number} */
      CSSPlugin.defaultTransformPerspective = 0;
      /** @type {string} */
      CSSPlugin.defaultSkewType = "compensated";
      /** @type {boolean} */
      CSSPlugin.defaultSmoothOrigin = true;
      /** @type {string} */
      p = "px";
      CSSPlugin.suffixMap = {
        top : p,
        right : p,
        bottom : p,
        left : p,
        width : p,
        height : p,
        fontSize : p,
        padding : p,
        margin : p,
        perspective : p,
        lineHeight : ""
      };
      var _autoRound;
      var extension;
      var okval;
      var _transformProp;
      var func;
      var _ieVers;
      var a;
      var s;
      /** @type {!RegExp} */
      var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g;
      /** @type {!RegExp} */
      var _relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g;
      /** @type {!RegExp} */
      var METADATA_REGEX = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi;
      /** @type {!RegExp} */
      var attr = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g;
      /** @type {!RegExp} */
      var n = /(?:\d|\-|\+|=|#|\.)*/g;
      /** @type {!RegExp} */
      var m = /opacity *= *([^)]*)/i;
      /** @type {!RegExp} */
      var reKeyword = /opacity:([^;]*)/i;
      /** @type {!RegExp} */
      var _alphaFilterExp = /alpha\(opacity *=.+?\)/i;
      /** @type {!RegExp} */
      var k = /^(rgb|hsl)/;
      /** @type {!RegExp} */
      var dashExpr = /([A-Z])/g;
      /** @type {!RegExp} */
      var prop = /-([a-z])/gi;
      /** @type {!RegExp} */
      var regPlaceholder = /(^(?:url\("|url\())|(?:("\))$|\)$)/gi;
      /**
       * @param {?} g
       * @param {string} s
       * @return {?}
       */
      var _camelFunc = function(g, s) {
        return s.toUpperCase();
      };
      /** @type {!RegExp} */
      var b = /(?:Left|Right|Width)/i;
      /** @type {!RegExp} */
      var FORM_HANDLER_REGEX = /(M11|M12|M21|M22)=[\d\-\.e]+/gi;
      /** @type {!RegExp} */
      var rfilters = /progid:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i;
      /** @type {!RegExp} */
      var CSNumber = /,(?=[^\)]*(?:\(|$))/gi;
      /** @type {!RegExp} */
      var r = /[\s,\(]/i;
      /** @type {number} */
      var rad = Math.PI / 180;
      /** @type {number} */
      var _RAD2DEG = 180 / Math.PI;
      var cur = {};
      /** @type {!HTMLDocument} */
      var _doc = document;
      /**
       * @param {string} type
       * @return {?}
       */
      var createElement = function(type) {
        return _doc.createElementNS ? _doc.createElementNS("http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
      };
      var item = createElement("div");
      var e = createElement("img");
      var _internals = CSSPlugin._internals = {
        _specialProps : _specialProps
      };
      /** @type {string} */
      var ua = navigator.userAgent;
      var _supportsOpacity = function() {
        /** @type {number} */
        var i = ua.indexOf("Android");
        var e = createElement("a");
        return okval = -1 !== ua.indexOf("Safari") && -1 === ua.indexOf("Chrome") && (-1 === i || Number(ua.substr(i + 8, 1)) > 3), func = okval && Number(ua.substr(ua.indexOf("Version/") + 8, 1)) < 6, _transformProp = -1 !== ua.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(ua) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(ua)) && (_ieVers = parseFloat(RegExp.$1)),
        !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity));
      }();
      /**
       * @param {!Object} v
       * @return {?}
       */
      var _getIEOpacity = function(v) {
        return m.test("string" == typeof v ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
      };
      /**
       * @param {string} warning
       * @return {undefined}
       */
      var warning = function(warning) {
        if (window.console) {
          console.log(warning);
        }
      };
      /** @type {string} */
      var prefix = "";
      /** @type {string} */
      var _prefix = "";
      /**
       * @param {string} p
       * @param {!Object} opts
       * @return {?}
       */
      var _checkPropPrefix = function(p, opts) {
        opts = opts || item;
        var a;
        var j;
        var style = opts.style;
        if (void 0 !== style[p]) {
          return p;
        }
        p = p.charAt(0).toUpperCase() + p.substr(1);
        /** @type {!Array} */
        a = ["O", "Moz", "ms", "Ms", "Webkit"];
        /** @type {number} */
        j = 5;
        for (; --j > -1 && void 0 === style[a[j] + p];) {
        }
        return j >= 0 ? (_prefix = 3 === j ? "ms" : a[j], prefix = "-" + _prefix.toLowerCase() + "-", _prefix + p) : null;
      };
      var _getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function() {
      };
      /** @type {function(!Object, string, !Object, boolean, string): ?} */
      var _getStyle = CSSPlugin.getStyle = function(t, name, cs, str, value) {
        var authType;
        return _supportsOpacity || "opacity" !== name ? (!str && t.style[name] ? authType = t.style[name] : (cs = cs || _getComputedStyle(t)) ? authType = cs[name] || cs.getPropertyValue(name) || cs.getPropertyValue(name.replace(dashExpr, "-$1").toLowerCase()) : t.currentStyle && (authType = t.currentStyle[name]), null ==
        value || authType && "none" !== authType && "auto" !== authType && "auto auto" !== authType ? authType : value) : _getIEOpacity(t);
      };
      /** @type {function(!Object, string, number, string, boolean): ?} */
      var _convertToPixels = _internals.convertToPixels = function(t, p, v, value, elem) {
        if ("px" === value || !value) {
          return v;
        }
        if ("auto" === value || !v) {
          return 0;
        }
        var result;
        var props;
        var time;
        /** @type {boolean} */
        var horiz = b.test(p);
        /** @type {!Object} */
        var parent = t;
        var style = item.style;
        /** @type {boolean} */
        var s = 0 > v;
        /** @type {boolean} */
        var isV = 1 === v;
        if (s && (v = -v), isV && (v = v * 100), "%" === value && -1 !== p.indexOf("border")) {
          /** @type {number} */
          result = v / 100 * (horiz ? t.clientWidth : t.clientHeight);
        } else {
          if (style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;", "%" !== value && parent.appendChild && "v" !== value.charAt(0) && "rem" !== value) {
            style[horiz ? "borderLeftWidth" : "borderTopWidth"] = v + value;
          } else {
            if (parent = t.parentNode || _doc.body, props = parent._gsCache, time = TweenLite.ticker.frame, props && horiz && props.time === time) {
              return props.width * v / 100;
            }
            style[horiz ? "width" : "height"] = v + value;
          }
          parent.appendChild(item);
          /** @type {number} */
          result = parseFloat(item[horiz ? "offsetWidth" : "offsetHeight"]);
          parent.removeChild(item);
          if (horiz && "%" === value && CSSPlugin.cacheWidths !== false) {
            props = parent._gsCache = parent._gsCache || {};
            props.time = time;
            /** @type {number} */
            props.width = result / v * 100;
          }
          if (!(0 !== result || elem)) {
            result = _convertToPixels(t, p, v, value, true);
          }
        }
        return isV && (result = result / 100), s ? -result : result;
      };
      /** @type {function(!Object, string, !Object): ?} */
      var _getDimension = _internals.calculateOffset = function(t, e, cs) {
        if ("absolute" !== _getStyle(t, "position", cs)) {
          return 0;
        }
        /** @type {string} */
        var dim = "left" === e ? "Left" : "Top";
        var v = _getStyle(t, "margin" + dim, cs);
        return t["offset" + dim] - (_convertToPixels(t, e, parseFloat(v), v.replace(n, "")) || 0);
      };
      /**
       * @param {!Object} t
       * @param {!Object} cs
       * @return {?}
       */
      var _getAllStyles = function(t, cs) {
        var i;
        var tr;
        var value;
        var s = {};
        if (cs = cs || _getComputedStyle(t, null)) {
          if (i = cs.length) {
            for (; --i > -1;) {
              value = cs[i];
              if (-1 === value.indexOf("-transform") || property === value) {
                s[value.replace(prop, _camelFunc)] = cs.getPropertyValue(value);
              }
            }
          } else {
            for (i in cs) {
              if (-1 === i.indexOf("Transform") || key === i) {
                s[i] = cs[i];
              }
            }
          }
        } else {
          if (cs = t.currentStyle || t.style) {
            for (i in cs) {
              if ("string" == typeof i && void 0 === s[i]) {
                s[i.replace(prop, _camelFunc)] = cs[i];
              }
            }
          }
        }
        return _supportsOpacity || (s.opacity = _getIEOpacity(t)), tr = _getTransform(t, cs, false), s.rotation = tr.rotation, s.skewX = tr.skewX, s.scaleX = tr.scaleX, s.scaleY = tr.scaleY, s.x = tr.x, s.y = tr.y, _supports3D && (s.z = tr.z, s.rotationX = tr.rotationX, s.rotationY =
        tr.rotationY, s.scaleZ = tr.scaleZ), s.filters && delete s.filters, s;
      };
      /**
       * @param {!Object} t
       * @param {!Object} s1
       * @param {!Array} s2
       * @param {!Object} vars
       * @param {!Array} data
       * @return {?}
       */
      var _cssDif = function(t, s1, s2, vars, data) {
        var val;
        var p;
        var mpt;
        var difs = {};
        var style = t.style;
        for (p in s2) {
          if ("cssText" !== p && "length" !== p && isNaN(p) && (s1[p] !== (val = s2[p]) || data && data[p]) && -1 === p.indexOf("Origin") && ("number" == typeof val || "string" == typeof val)) {
            difs[p] = "auto" !== val || "left" !== p && "top" !== p ? "" !== val && "auto" !== val && "none" !== val || "string" != typeof s1[p] || "" === s1[p].replace(attr, "") ? val : 0 : _getDimension(t, p);
            if (void 0 !== style[p]) {
              mpt = new MiniPropTween(style, p, style[p], mpt);
            }
          }
        }
        if (vars) {
          for (p in vars) {
            if ("className" !== p) {
              difs[p] = vars[p];
            }
          }
        }
        return {
          difs : difs,
          firstMPT : mpt
        };
      };
      var _dimensions = {
        width : ["Left", "Right"],
        height : ["Top", "Bottom"]
      };
      /** @type {!Array} */
      var _margins = ["marginLeft", "marginRight", "marginTop", "marginBottom"];
      /**
       * @param {!Object} t
       * @param {!Object} e
       * @param {!Array} cs
       * @return {?}
       */
      var getStyle = function(t, e, cs) {
        if ("svg" === (t.nodeName + "").toLowerCase()) {
          return (cs || _getComputedStyle(t))[e] || 0;
        }
        if (t.getBBox && $(t)) {
          return t.getBBox()[e] || 0;
        }
        /** @type {number} */
        var val = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight);
        var a = _dimensions[e];
        var i = a.length;
        cs = cs || _getComputedStyle(t, null);
        for (; --i > -1;) {
          /** @type {number} */
          val = val - (parseFloat(_getStyle(t, "padding" + a[i], cs, true)) || 0);
          /** @type {number} */
          val = val - (parseFloat(_getStyle(t, "border" + a[i] + "Width", cs, true)) || 0);
        }
        return val;
      };
      /**
       * @param {string} v
       * @param {!Object} t
       * @return {?}
       */
      var update = function(v, t) {
        if ("contain" === v || "auto" === v || "auto auto" === v) {
          return v + " ";
        }
        if (null == v || "" === v) {
          /** @type {string} */
          v = "0 0";
        }
        var i;
        var childNodes = v.split(" ");
        var name = -1 !== v.indexOf("left") ? "0%" : -1 !== v.indexOf("right") ? "100%" : childNodes[0];
        var ch = -1 !== v.indexOf("top") ? "0%" : -1 !== v.indexOf("bottom") ? "100%" : childNodes[1];
        if (childNodes.length > 3 && !t) {
          childNodes = v.split(", ").join(",").split(",");
          /** @type {!Array} */
          v = [];
          /** @type {number} */
          i = 0;
          for (; i < childNodes.length; i++) {
            v.push(update(childNodes[i]));
          }
          return v.join(",");
        }
        return null == ch ? ch = "center" === name ? "50%" : "0" : "center" === ch && (ch = "50%"), ("center" === name || isNaN(parseFloat(name)) && -1 === (name + "").indexOf("=")) && (name = "50%"), v = name + " " + ch + (childNodes.length > 2 ? " " + childNodes[2] : ""), t && (t.oxp = -1 !== name.indexOf("%"), t.oyp = -1 !== ch.indexOf("%"),
        t.oxr = "=" === name.charAt(1), t.oyr = "=" === ch.charAt(1), t.ox = parseFloat(name.replace(attr, "")), t.oy = parseFloat(ch.replace(attr, "")), t.v = v), t || v;
      };
      /**
       * @param {string} e
       * @param {!Object} b
       * @return {?}
       */
      var _parseChange = function(e, b) {
        return "function" == typeof e && (e = e(s, a)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(b) || 0;
      };
      /**
       * @param {string} value
       * @param {number} other
       * @return {?}
       */
      var _parseVal = function(value, other) {
        return "function" == typeof value && (value = value(s, a)), null == value ? other : "string" == typeof value && "=" === value.charAt(1) ? parseInt(value.charAt(0) + "1", 10) * parseFloat(value.substr(2)) + other : parseFloat(value) || 0;
      };
      /**
       * @param {string} v
       * @param {number} i
       * @param {string} name
       * @param {string} map
       * @return {?}
       */
      var format = function(v, i, name, map) {
        var length;
        var o;
        var index;
        var result;
        var isColor;
        /** @type {number} */
        var value = 1E-6;
        return "function" == typeof v && (v = v(s, a)), null == v ? result = i : "number" == typeof v ? result = v : (length = 360, o = v.split("_"), isColor = "=" === v.charAt(1), index = (isColor ? parseInt(v.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === v.indexOf("rad") ?
        1 : _RAD2DEG) - (isColor ? 0 : i), o.length && (map && (map[name] = i + index), -1 !== v.indexOf("short") && (index = index % length, index !== index % (length / 2) && (index = 0 > index ? index + length : index - length)), -1 !== v.indexOf("_cw") && 0 > index ? index = (index + 9999999999 * length) %
        length - (index / length | 0) * length : -1 !== v.indexOf("ccw") && index > 0 && (index = (index - 9999999999 * length) % length - (index / length | 0) * length)), result = i + index), value > result && result > -value && (result = 0), result;
      };
      var _colorLookup = {
        aqua : [0, 255, 255],
        lime : [0, 255, 0],
        silver : [192, 192, 192],
        black : [0, 0, 0],
        maroon : [128, 0, 0],
        teal : [0, 128, 128],
        blue : [0, 0, 255],
        navy : [0, 0, 128],
        white : [255, 255, 255],
        fuchsia : [255, 0, 255],
        olive : [128, 128, 0],
        yellow : [255, 255, 0],
        orange : [255, 165, 0],
        gray : [128, 128, 128],
        purple : [128, 0, 128],
        green : [0, 128, 0],
        red : [255, 0, 0],
        pink : [255, 192, 203],
        cyan : [0, 255, 255],
        transparent : [255, 255, 255, 0]
      };
      /**
       * @param {number} t
       * @param {number} p
       * @param {number} q
       * @return {?}
       */
      var check = function(t, p, q) {
        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? p + (q - p) * t * 6 : .5 > t ? q : 2 > 3 * t ? p + (q - p) * (2 / 3 - t) * 6 : p) + .5 | 0;
      };
      /** @type {function(number, string): ?} */
      var extend = CSSPlugin.parseColor = function(v, source) {
        var a;
        var x;
        var y;
        var h;
        var i;
        var alpha_dst;
        var alpha_src;
        var b;
        var c;
        var s;
        var wasHSL;
        if (v) {
          if ("number" == typeof v) {
            /** @type {!Array} */
            a = [v >> 16, v >> 8 & 255, 255 & v];
          } else {
            if ("," === v.charAt(v.length - 1) && (v = v.substr(0, v.length - 1)), _colorLookup[v]) {
              a = _colorLookup[v];
            } else {
              if ("#" === v.charAt(0)) {
                if (4 === v.length) {
                  x = v.charAt(1);
                  y = v.charAt(2);
                  h = v.charAt(3);
                  /** @type {string} */
                  v = "#" + x + x + y + y + h + h;
                }
                /** @type {number} */
                v = parseInt(v.substr(1), 16);
                /** @type {!Array} */
                a = [v >> 16, v >> 8 & 255, 255 & v];
              } else {
                if ("hsl" === v.substr(0, 3)) {
                  if (a = wasHSL = v.match(_numExp), source) {
                    if (-1 !== v.indexOf("=")) {
                      return v.match(_relNumExp);
                    }
                  } else {
                    /** @type {number} */
                    i = Number(a[0]) % 360 / 360;
                    /** @type {number} */
                    alpha_dst = Number(a[1]) / 100;
                    /** @type {number} */
                    alpha_src = Number(a[2]) / 100;
                    /** @type {number} */
                    y = .5 >= alpha_src ? alpha_src * (alpha_dst + 1) : alpha_src + alpha_dst - alpha_src * alpha_dst;
                    /** @type {number} */
                    x = 2 * alpha_src - y;
                    if (a.length > 3) {
                      /** @type {number} */
                      a[3] = Number(v[3]);
                    }
                    a[0] = check(i + 1 / 3, x, y);
                    a[1] = check(i, x, y);
                    a[2] = check(i - 1 / 3, x, y);
                  }
                } else {
                  a = v.match(_numExp) || _colorLookup.transparent;
                }
              }
            }
            /** @type {number} */
            a[0] = Number(a[0]);
            /** @type {number} */
            a[1] = Number(a[1]);
            /** @type {number} */
            a[2] = Number(a[2]);
            if (a.length > 3) {
              /** @type {number} */
              a[3] = Number(a[3]);
            }
          }
        } else {
          /** @type {!Array} */
          a = _colorLookup.black;
        }
        return source && !wasHSL && (x = a[0] / 255, y = a[1] / 255, h = a[2] / 255, b = Math.max(x, y, h), c = Math.min(x, y, h), alpha_src = (b + c) / 2, b === c ? i = alpha_dst = 0 : (s = b - c, alpha_dst = alpha_src > .5 ? s /
        (2 - b - c) : s / (b + c), i = b === x ? (y - h) / s + (h > y ? 6 : 0) : b === y ? (h - x) / s + 2 : (x - y) / s + 4, i = i * 60), a[0] = i + .5 | 0, a[1] = 100 * alpha_dst + .5 | 0, a[2] = 100 *
        alpha_src + .5 | 0), a;
      };
      /**
       * @param {string} v
       * @param {string} obj
       * @return {?}
       */
      var merge = function(v, obj) {
        var i;
        var x;
        var buf;
        var r = v.match(_colorExp) || [];
        /** @type {number} */
        var offset = 0;
        var ret = r.length ? "" : v;
        /** @type {number} */
        i = 0;
        for (; i < r.length; i++) {
          x = r[i];
          buf = v.substr(offset, v.indexOf(x, offset) - offset);
          offset = offset + (buf.length + x.length);
          x = extend(x, obj);
          if (3 === x.length) {
            x.push(1);
          }
          /** @type {string} */
          ret = ret + (buf + (obj ? "hsla(" + x[0] + "," + x[1] + "%," + x[2] + "%," + x[3] : "rgba(" + x.join(",")) + ")");
        }
        return ret + v.substr(offset);
      };
      /** @type {string} */
      var _colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
      for (p in _colorLookup) {
        /** @type {string} */
        _colorExp = _colorExp + ("|" + p + "\\b");
      }
      /** @type {!RegExp} */
      _colorExp = new RegExp(_colorExp + ")", "gi");
      /**
       * @param {string} o
       * @return {undefined}
       */
      CSSPlugin.colorStringFilter = function(o) {
        var templates;
        var combined = o[0] + o[1];
        if (_colorExp.test(combined)) {
          /** @type {boolean} */
          templates = -1 !== combined.indexOf("hsl(") || -1 !== combined.indexOf("hsla(");
          o[0] = merge(o[0], templates);
          o[1] = merge(o[1], templates);
        }
        /** @type {number} */
        _colorExp.lastIndex = 0;
      };
      if (!TweenLite.defaultStringFilter) {
        /** @type {function(string): undefined} */
        TweenLite.defaultStringFilter = CSSPlugin.colorStringFilter;
      }
      /**
       * @param {string} v
       * @param {boolean} item
       * @param {boolean} prop
       * @param {boolean} map
       * @return {?}
       */
      var get = function(v, item, prop, map) {
        if (null == v) {
          return function(lookupSoFar) {
            return lookupSoFar;
          };
        }
        var r;
        var value = item ? (v.match(_colorExp) || [""])[0] : "";
        var set = v.split(value).join("").match(METADATA_REGEX) || [];
        var t = v.substr(0, v.indexOf(set[0]));
        /** @type {string} */
        var l = ")" === v.charAt(v.length - 1) ? ")" : "";
        /** @type {string} */
        var b = -1 !== v.indexOf(" ") ? " " : ",";
        var numVals = set.length;
        var d = numVals > 0 ? set[0].replace(_numExp, "") : "";
        return numVals ? r = item ? function(s) {
          var name;
          var result;
          var i;
          var data;
          if ("number" == typeof s) {
            s = s + d;
          } else {
            if (map && CSNumber.test(s)) {
              data = s.replace(CSNumber, "|").split("|");
              /** @type {number} */
              i = 0;
              for (; i < data.length; i++) {
                data[i] = r(data[i]);
              }
              return data.join(",");
            }
          }
          if (name = (s.match(_colorExp) || [value])[0], result = s.split(name).join("").match(METADATA_REGEX) || [], i = result.length, numVals > i--) {
            for (; ++i < numVals;) {
              result[i] = prop ? result[(i - 1) / 2 | 0] : set[i];
            }
          }
          return t + result.join(b) + b + name + l + (-1 !== s.indexOf("inset") ? " inset" : "");
        } : function(s) {
          var e;
          var data;
          var i;
          if ("number" == typeof s) {
            s = s + d;
          } else {
            if (map && CSNumber.test(s)) {
              data = s.replace(CSNumber, "|").split("|");
              /** @type {number} */
              i = 0;
              for (; i < data.length; i++) {
                data[i] = r(data[i]);
              }
              return data.join(",");
            }
          }
          if (e = s.match(METADATA_REGEX) || [], i = e.length, numVals > i--) {
            for (; ++i < numVals;) {
              e[i] = prop ? e[(i - 1) / 2 | 0] : set[i];
            }
          }
          return t + e.join(b) + l;
        } : function(lookupSoFar) {
          return lookupSoFar;
        };
      };
      /**
       * @param {string} keys
       * @return {?}
       */
      var init = function(keys) {
        return keys = keys.split(","), function(e, fn, n, path, v, plugin, value) {
          var key;
          /** @type {!Array<string>} */
          var defaultFormats = (fn + "").split(" ");
          value = {};
          /** @type {number} */
          key = 0;
          for (; 4 > key; key++) {
            /** @type {string} */
            value[keys[key]] = defaultFormats[key] = defaultFormats[key] || defaultFormats[(key - 1) / 2 >> 0];
          }
          return path.parse(e, value, v, plugin);
        };
      };
      /** @type {function(string, string, number, ?, boolean): undefined} */
      var MiniPropTween = (_internals._setPluginRatio = function(v) {
        this.plugin.setRatio(v);
        var val;
        var pt;
        var i;
        var s;
        var x;
        var d = this.data;
        var proxy = d.proxy;
        var mpt = d.firstMPT;
        /** @type {number} */
        var end = 1E-6;
        for (; mpt;) {
          val = proxy[mpt.v];
          if (mpt.r) {
            /** @type {number} */
            val = Math.round(val);
          } else {
            if (end > val && val > -end) {
              /** @type {number} */
              val = 0;
            }
          }
          mpt.t[mpt.p] = val;
          mpt = mpt._next;
        }
        if (d.autoRotate && (d.autoRotate.rotation = d.mod ? d.mod(proxy.rotation, this.t) : proxy.rotation), 1 === v || 0 === v) {
          mpt = d.firstMPT;
          /** @type {string} */
          x = 1 === v ? "e" : "b";
          for (; mpt;) {
            if (pt = mpt.t, pt.type) {
              if (1 === pt.type) {
                s = pt.xs0 + pt.s + pt.xs1;
                /** @type {number} */
                i = 1;
                for (; i < pt.l; i++) {
                  s = s + (pt["xn" + i] + pt["xs" + (i + 1)]);
                }
                pt[x] = s;
              }
            } else {
              pt[x] = pt.s + pt.xs0;
            }
            mpt = mpt._next;
          }
        }
      }, function(template, p, val, next, rSite) {
        /** @type {string} */
        this.t = template;
        /** @type {string} */
        this.p = p;
        /** @type {number} */
        this.v = val;
        /** @type {boolean} */
        this.r = rSite;
        if (next) {
          next._prev = this;
          this._next = next;
        }
      });
      /** @type {function(string, string, string, string, ?, string, string, boolean, number, ?, number): undefined} */
      var CSSPropTween = (_internals._parseToProxy = function(t, vars, cssp, pt, plugin, shallow) {
        var i;
        var p;
        var xp;
        var mpt;
        var firstPT;
        /** @type {string} */
        var bpt = pt;
        var start = {};
        var end = {};
        var transform = cssp._transform;
        var cur_ = cur;
        /** @type {null} */
        cssp._transform = null;
        cur = vars;
        pt = firstPT = cssp.parse(t, vars, pt, plugin);
        cur = cur_;
        if (shallow) {
          cssp._transform = transform;
          if (bpt) {
            /** @type {null} */
            bpt._prev = null;
            if (bpt._prev) {
              /** @type {null} */
              bpt._prev._next = null;
            }
          }
        }
        for (; pt && pt !== bpt;) {
          if (pt.type <= 1 && (p = pt.p, end[p] = pt.s + pt.c, start[p] = pt.s, shallow || (mpt = new MiniPropTween(pt, "s", p, mpt, pt.r), pt.c = 0), 1 === pt.type)) {
            i = pt.l;
            for (; --i > 0;) {
              /** @type {string} */
              xp = "xn" + i;
              /** @type {string} */
              p = pt.p + "_" + xp;
              end[p] = pt.data[xp];
              start[p] = pt[xp];
              if (!shallow) {
                mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
              }
            }
          }
          pt = pt._next;
        }
        return {
          proxy : start,
          end : end,
          firstMPT : mpt,
          pt : firstPT
        };
      }, _internals.CSSPropTween = function(t, p, s, c, next, type, n, r, pr, b, undefined) {
        /** @type {string} */
        this.t = t;
        /** @type {string} */
        this.p = p;
        /** @type {string} */
        this.s = s;
        /** @type {string} */
        this.c = c;
        this.n = n || p;
        if (!(t instanceof CSSPropTween)) {
          _overwriteProps.push(this.n);
        }
        /** @type {boolean} */
        this.r = r;
        this.type = type || 0;
        if (pr) {
          /** @type {number} */
          this.pr = pr;
          /** @type {boolean} */
          token = true;
        }
        this.b = void 0 === b ? s : b;
        this.e = void 0 === undefined ? s + c : undefined;
        if (next) {
          this._next = next;
          next._prev = this;
        }
      });
      /**
       * @param {string} t
       * @param {string} x
       * @param {number} d
       * @param {number} b
       * @param {number} pt
       * @param {string} pts
       * @return {?}
       */
      var parse = function(t, x, d, b, pt, pts) {
        var p = new CSSPropTween(t, x, d, b - d, pt, -1, pts);
        return p.b = d, p.e = p.xs0 = b, p;
      };
      /** @type {function(string, string, string, string, !Function, string, string, number, !Object, !Function): ?} */
      var _parseComplex = CSSPlugin.parseComplex = function(t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
        b = b || dflt || "";
        if ("function" == typeof e) {
          e = e(s, a);
        }
        pt = new CSSPropTween(t, p, 0, 0, pt, setRatio ? 2 : 1, null, false, pr, b, e);
        /** @type {string} */
        e = e + "";
        if (clrs && _colorExp.test(e + b)) {
          /** @type {!Array} */
          e = [b, e];
          CSSPlugin.colorStringFilter(e);
          b = e[0];
          e = e[1];
        }
        var i;
        var xi;
        var ni;
        var bv;
        var ev;
        var bnums;
        var enums;
        var bn;
        var rgba;
        var temp;
        var cv;
        var str;
        var Events;
        var ba = b.split(", ").join(",").split(" ");
        var ea = e.split(", ").join(",").split(" ");
        var l = ba.length;
        /** @type {boolean} */
        var autoRound = _autoRound !== false;
        if (-1 !== e.indexOf(",") || -1 !== b.indexOf(",")) {
          ba = ba.join(" ").replace(CSNumber, ", ").split(" ");
          ea = ea.join(" ").replace(CSNumber, ", ").split(" ");
          l = ba.length;
        }
        if (l !== ea.length) {
          ba = (dflt || "").split(" ");
          l = ba.length;
        }
        /** @type {!Object} */
        pt.plugin = plugin;
        /** @type {!Function} */
        pt.setRatio = setRatio;
        /** @type {number} */
        _colorExp.lastIndex = 0;
        /** @type {number} */
        i = 0;
        for (; l > i; i++) {
          if (bv = ba[i], ev = ea[i], bn = parseFloat(bv), bn || 0 === bn) {
            pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), autoRound && -1 !== ev.indexOf("px"), true);
          } else {
            if (clrs && _colorExp.test(bv)) {
              str = ev.indexOf(")") + 1;
              str = ")" + (str ? ev.substr(str) : "");
              Events = -1 !== ev.indexOf("hsl") && _supportsOpacity;
              bv = extend(bv, Events);
              ev = extend(ev, Events);
              /** @type {boolean} */
              rgba = bv.length + ev.length > 6;
              if (rgba && !_supportsOpacity && 0 === ev[3]) {
                pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
                pt.e = pt.e.split(ea[i]).join("transparent");
              } else {
                if (!_supportsOpacity) {
                  /** @type {boolean} */
                  rgba = false;
                }
                if (Events) {
                  pt.appendXtra(rgba ? "hsla(" : "hsl(", bv[0], _parseChange(ev[0], bv[0]), ",", false, true).appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false).appendXtra("", bv[2], _parseChange(ev[2], bv[2]), rgba ? "%," : "%" + str, false);
                } else {
                  pt.appendXtra(rgba ? "rgba(" : "rgb(", bv[0], ev[0] - bv[0], ",", true, true).appendXtra("", bv[1], ev[1] - bv[1], ",", true).appendXtra("", bv[2], ev[2] - bv[2], rgba ? "," : str, true);
                }
                if (rgba) {
                  bv = bv.length < 4 ? 1 : bv[3];
                  pt.appendXtra("", bv, (ev.length < 4 ? 1 : ev[3]) - bv, str, false);
                }
              }
              /** @type {number} */
              _colorExp.lastIndex = 0;
            } else {
              if (bnums = bv.match(_numExp)) {
                if (enums = ev.match(_relNumExp), !enums || enums.length !== bnums.length) {
                  return pt;
                }
                /** @type {number} */
                ni = 0;
                /** @type {number} */
                xi = 0;
                for (; xi < bnums.length; xi++) {
                  cv = bnums[xi];
                  temp = bv.indexOf(cv, ni);
                  pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", autoRound && "px" === bv.substr(temp + cv.length, 2), 0 === xi);
                  ni = temp + cv.length;
                }
                pt["xs" + pt.l] += bv.substr(ni);
              } else {
                pt["xs" + pt.l] += pt.l || pt["xs" + pt.l] ? " " + ev : ev;
              }
            }
          }
        }
        if (-1 !== e.indexOf("=") && pt.data) {
          str = pt.xs0 + pt.data.s;
          /** @type {number} */
          i = 1;
          for (; i < pt.l; i++) {
            str = str + (pt["xs" + i] + pt.data["xn" + i]);
          }
          pt.e = str + pt["xs" + i];
        }
        return pt.l || (pt.type = -1, pt.xs0 = pt.e), pt.xfirst || pt;
      };
      /** @type {number} */
      var i = 9;
      p = CSSPropTween.prototype;
      /** @type {number} */
      p.l = p.pr = 0;
      for (; --i > 0;) {
        /** @type {number} */
        p["xn" + i] = 0;
        /** @type {string} */
        p["xs" + i] = "";
      }
      /** @type {string} */
      p.xs0 = "";
      /** @type {null} */
      p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;
      /**
       * @param {string} pfx
       * @param {string} s
       * @param {boolean} c
       * @param {string} sfx
       * @param {boolean} r
       * @param {!Object} pad
       * @return {?}
       */
      p.appendXtra = function(pfx, s, c, sfx, r, pad) {
        var pt = this;
        var l = pt.l;
        return pt["xs" + l] += pad && (l || pt["xs" + l]) ? " " + pfx : pfx || "", c || 0 === l || pt.plugin ? (pt.l++, pt.type = pt.setRatio ? 2 : 1, pt["xs" + pt.l] = sfx || "", l > 0 ? (pt.data["xn" + l] = s + c, pt.rxp["xn" + l] = r, pt["xn" +
        l] = s, pt.plugin || (pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr), pt.xfirst.xs0 = 0), pt) : (pt.data = {
          s : s + c
        }, pt.rxp = {}, pt.s = s, pt.c = c, pt.r = r, pt)) : (pt["xs" + l] += s + (sfx || ""), pt);
      };
      /**
       * @param {string} p
       * @param {!Object} options
       * @return {undefined}
       */
      var render = function(p, options) {
        options = options || {};
        this.p = options.prefix ? _checkPropPrefix(p) || p : p;
        _specialProps[p] = _specialProps[this.p] = this;
        this.format = options.formatter || get(options.defaultValue, options.color, options.collapsible, options.multi);
        if (options.parser) {
          this.parse = options.parser;
        }
        this.clrs = options.color;
        this.multi = options.multi;
        this.keyword = options.keyword;
        this.dflt = options.defaultValue;
        this.pr = options.priority || 0;
      };
      /** @type {function(string, !Object, !Object): undefined} */
      var _registerComplexSpecialProp = _internals._registerComplexSpecialProp = function(p, data, langs) {
        if ("object" != typeof data) {
          data = {
            parser : langs
          };
        }
        var layer_i;
        var command;
        var crossfilterable_layers = p.split(",");
        var en = data.defaultValue;
        langs = langs || [en];
        /** @type {number} */
        layer_i = 0;
        for (; layer_i < crossfilterable_layers.length; layer_i++) {
          data.prefix = 0 === layer_i && data.prefix;
          data.defaultValue = langs[layer_i] || en;
          command = new render(crossfilterable_layers[layer_i], data);
        }
      };
      /** @type {function(string): undefined} */
      var isDrawn = _internals._registerPluginProp = function(p) {
        if (!_specialProps[p]) {
          /** @type {string} */
          var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
          _registerComplexSpecialProp(p, {
            parser : function(data, value, p, plugin, node, name, vars) {
              var pluginClass = _globals.com.greensock.plugins[pluginName];
              return pluginClass ? (pluginClass._cssRegister(), _specialProps[p].parse(data, value, p, plugin, node, name, vars)) : (warning("Error: " + pluginName + " js file not loaded."), node);
            }
          });
        }
      };
      p = render.prototype;
      /**
       * @param {string} t
       * @param {string} p
       * @param {string} x
       * @param {!Object} pt
       * @param {!Object} plugin
       * @param {!Function} setRatio
       * @return {?}
       */
      p.parseComplex = function(t, p, x, pt, plugin, setRatio) {
        var s;
        var d;
        var e;
        var ms;
        var state;
        var enabled;
        var a = this.keyword;
        if (this.multi && (CSNumber.test(x) || CSNumber.test(p) ? (d = p.replace(CSNumber, "|").split("|"), e = x.replace(CSNumber, "|").split("|")) : a && (d = [p], e = [x])), e) {
          ms = e.length > d.length ? e.length : d.length;
          /** @type {number} */
          s = 0;
          for (; ms > s; s++) {
            p = d[s] = d[s] || this.dflt;
            x = e[s] = e[s] || this.dflt;
            if (a) {
              state = p.indexOf(a);
              enabled = x.indexOf(a);
              if (state !== enabled) {
                if (-1 === enabled) {
                  d[s] = d[s].split(a).join("");
                } else {
                  if (-1 === state) {
                    d[s] += " " + a;
                  }
                }
              }
            }
          }
          p = d.join(", ");
          x = e.join(", ");
        }
        return _parseComplex(t, this.p, p, x, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
      };
      /**
       * @param {!Object} t
       * @param {boolean} e
       * @param {!Object} name
       * @param {?} str
       * @param {!Object} pt
       * @param {!Object} plugin
       * @param {!Object} defaults
       * @return {?}
       */
      p.parse = function(t, e, name, str, pt, plugin, defaults) {
        return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
      };
      /**
       * @param {string} name
       * @param {?} onInitTween
       * @param {number} priority
       * @return {undefined}
       */
      CSSPlugin.registerSpecialProp = function(name, onInitTween, priority) {
        _registerComplexSpecialProp(name, {
          parser : function(t, e, p, cssp, pt, name, url) {
            var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
            return rv.plugin = name, rv.setRatio = onInitTween(t, e, cssp._tween, p), rv;
          },
          priority : priority
        });
      };
      CSSPlugin.useSVGTransformAttr = okval || _transformProp;
      var target;
      /** @type {!Array<string>} */
      var ll = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(",");
      var key = _checkPropPrefix("transform");
      var property = prefix + "transform";
      var position = _checkPropPrefix("transformOrigin");
      /** @type {boolean} */
      var _supports3D = null !== _checkPropPrefix("perspective");
      /** @type {function(): undefined} */
      var Error = _internals.Transform = function() {
        /** @type {number} */
        this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
        this.force3D = !(CSSPlugin.defaultForce3D === false || !_supports3D) && (CSSPlugin.defaultForce3D || "auto");
      };
      var _SVGElement = window.SVGElement;
      /**
       * @param {string} type
       * @param {!Node} element
       * @param {!Array} properties
       * @return {?}
       */
      var create = function(type, element, properties) {
        var key;
        /** @type {!Element} */
        var node = _doc.createElementNS("http://www.w3.org/2000/svg", type);
        /** @type {!RegExp} */
        var regAttr = /([a-z])([A-Z])/g;
        for (key in properties) {
          node.setAttributeNS(null, key.replace(regAttr, "$1-$2").toLowerCase(), properties[key]);
        }
        return element.appendChild(node), node;
      };
      /** @type {!Element} */
      var body = _doc.documentElement;
      var cmp = function() {
        var node;
        var parent;
        var w;
        var n = _ieVers || /Android/i.test(ua) && !window.chrome;
        return _doc.createElementNS && !n && (node = create("svg", body), parent = create("rect", node, {
          width : 100,
          height : 50,
          x : 100
        }), w = parent.getBoundingClientRect().width, parent.style[position] = "50% 50%", parent.style[key] = "scaleX(0.5)", n = w === parent.getBoundingClientRect().width && !(_transformProp && _supports3D), body.removeChild(node)), n;
      }();
      /**
       * @param {!Object} e
       * @param {string} t
       * @param {!Object} obj
       * @param {string} msg
       * @param {boolean} range
       * @param {boolean} o
       * @return {undefined}
       */
      var callback = function(e, t, obj, msg, range, o) {
        var res;
        var j;
        var index;
        var i;
        var height;
        var n;
        var p;
        var b;
        var a;
        var t;
        var v;
        var max;
        var width;
        var length;
        var source = e._gsTransform;
        var r = f(e, true);
        if (source) {
          width = source.xOrigin;
          length = source.yOrigin;
        }
        if (!msg || (res = msg.split(" ")).length < 2) {
          p = e.getBBox();
          t = update(t).split(" ");
          /** @type {!Array} */
          res = [(-1 !== t[0].indexOf("%") ? parseFloat(t[0]) / 100 * p.width : parseFloat(t[0])) + p.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * p.height : parseFloat(t[1])) + p.y];
        }
        /** @type {number} */
        obj.xOrigin = i = parseFloat(res[0]);
        /** @type {number} */
        obj.yOrigin = height = parseFloat(res[1]);
        if (msg && r !== undefined) {
          n = r[0];
          p = r[1];
          b = r[2];
          a = r[3];
          t = r[4];
          v = r[5];
          /** @type {number} */
          max = n * a - p * b;
          /** @type {number} */
          j = i * (a / max) + height * (-b / max) + (b * v - a * t) / max;
          /** @type {number} */
          index = i * (-p / max) + height * (n / max) - (n * v - p * t) / max;
          /** @type {number} */
          i = obj.xOrigin = res[0] = j;
          /** @type {number} */
          height = obj.yOrigin = res[1] = index;
        }
        if (source) {
          if (o) {
            obj.xOffset = source.xOffset;
            obj.yOffset = source.yOffset;
            /** @type {!Object} */
            source = obj;
          }
          if (range || range !== false && CSSPlugin.defaultSmoothOrigin !== false) {
            /** @type {number} */
            j = i - width;
            /** @type {number} */
            index = height - length;
            source.xOffset += j * r[0] + index * r[2] - j;
            source.yOffset += j * r[1] + index * r[3] - index;
          } else {
            /** @type {number} */
            source.xOffset = source.yOffset = 0;
          }
        }
        if (!o) {
          e.setAttribute("data-svg-origin", res.join(" "));
        }
      };
      /**
       * @param {!Object} value
       * @return {?}
       */
      var ev = function(value) {
        try {
          return value.getBBox();
        } catch (t) {
        }
      };
      /**
       * @param {!Object} e
       * @return {?}
       */
      var $ = function(e) {
        return !!(_SVGElement && e.getBBox && e.getCTM && ev(e) && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM));
      };
      /** @type {!Array} */
      var undefined = [1, 0, 0, 1, 0, 0];
      /**
       * @param {!Object} t
       * @param {boolean} callback
       * @return {?}
       */
      var f = function(t, callback) {
        var data;
        var val;
        var result;
        var value;
        var e;
        var range;
        var b = t._gsTransform || new Error;
        /** @type {number} */
        var g = 1E5;
        var node = t.style;
        if (key ? val = _getStyle(t, property, null, true) : t.currentStyle && (val = t.currentStyle.filter.match(FORM_HANDLER_REGEX), val = val && 4 === val.length ? [val[0].substr(4), Number(val[2].substr(4)), Number(val[1].substr(4)), val[3].substr(4), b.x || 0, b.y || 0].join(",") : ""), data = !val || "none" === val || "matrix(1, 0, 0, 1, 0, 0)" ===
        val, data && key && ((range = "none" === _getComputedStyle(t).display) || !t.parentNode) && (range && (value = node.display, node.display = "block"), t.parentNode || (e = 1, body.appendChild(t)), val = _getStyle(t, property, null, true), data = !val || "none" === val || "matrix(1, 0, 0, 1, 0, 0)" === val, value ?
        node.display = value : range && add(node, "display"), e && body.removeChild(t)), (b.svg || t.getBBox && $(t)) && (data && -1 !== (node[key] + "").indexOf("matrix") && (val = node[key], data = 0), result = t.getAttribute("transform"), data && result && (-1 !== result.indexOf("matrix") ?
        (val = result, data = 0) : -1 !== result.indexOf("translate") && (val = "matrix(1,0,0,1," + result.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", data = 0))), data) {
          return undefined;
        }
        result = (val || "").match(_numExp) || [];
        i = result.length;
        for (; --i > -1;) {
          /** @type {number} */
          value = Number(result[i]);
          /** @type {number} */
          result[i] = (e = value - (value = value | 0)) ? (e * g + (0 > e ? -.5 : .5) | 0) / g + value : value;
        }
        return callback && result.length > 6 ? [result[0], result[1], result[4], result[5], result[12], result[13]] : result;
      };
      /** @type {function(!Object, !Object, !Object, boolean): ?} */
      var _getTransform = _internals.getTransform = function(e, cs, x, y) {
        if (e._gsTransform && x && !y) {
          return e._gsTransform;
        }
        var m;
        var i;
        var scaleX;
        var scaleY;
        var rotation;
        var skewX;
        var tm = x ? e._gsTransform || new Error : new Error;
        /** @type {boolean} */
        var element = tm.scaleX < 0;
        /** @type {number} */
        var min = 2E-5;
        /** @type {number} */
        var rnd = 1E5;
        var zOrigin = _supports3D ? parseFloat(_getStyle(e, position, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin || 0 : 0;
        /** @type {number} */
        var perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
        if (tm.svg = !(!e.getBBox || !$(e)), tm.svg && (callback(e, _getStyle(e, position, cs, false, "50% 50%") + "", tm, e.getAttribute("data-svg-origin")), target = CSSPlugin.useSVGTransformAttr || cmp), m = f(e), m !== undefined) {
          if (16 === m.length) {
            var t1;
            var t2;
            var t3;
            var cos;
            var sin;
            var a11 = m[0];
            var a21 = m[1];
            var a31 = m[2];
            var a41 = m[3];
            var a12 = m[4];
            var a22 = m[5];
            var a32 = m[6];
            var a42 = m[7];
            var a13 = m[8];
            var a23 = m[9];
            var a33 = m[10];
            var a14 = m[12];
            var a24 = m[13];
            var a34 = m[14];
            var a43 = m[11];
            /** @type {number} */
            var rotate = Math.atan2(a32, a33);
            if (tm.zOrigin) {
              /** @type {number} */
              a34 = -tm.zOrigin;
              /** @type {number} */
              a14 = a13 * a34 - m[12];
              /** @type {number} */
              a24 = a23 * a34 - m[13];
              /** @type {number} */
              a34 = a33 * a34 + tm.zOrigin - m[14];
            }
            /** @type {number} */
            tm.rotationX = rotate * _RAD2DEG;
            if (rotate) {
              /** @type {number} */
              cos = Math.cos(-rotate);
              /** @type {number} */
              sin = Math.sin(-rotate);
              /** @type {number} */
              t1 = a12 * cos + a13 * sin;
              /** @type {number} */
              t2 = a22 * cos + a23 * sin;
              /** @type {number} */
              t3 = a32 * cos + a33 * sin;
              /** @type {number} */
              a13 = a12 * -sin + a13 * cos;
              /** @type {number} */
              a23 = a22 * -sin + a23 * cos;
              /** @type {number} */
              a33 = a32 * -sin + a33 * cos;
              /** @type {number} */
              a43 = a42 * -sin + a43 * cos;
              /** @type {number} */
              a12 = t1;
              /** @type {number} */
              a22 = t2;
              /** @type {number} */
              a32 = t3;
            }
            /** @type {number} */
            rotate = Math.atan2(-a31, a33);
            /** @type {number} */
            tm.rotationY = rotate * _RAD2DEG;
            if (rotate) {
              /** @type {number} */
              cos = Math.cos(-rotate);
              /** @type {number} */
              sin = Math.sin(-rotate);
              /** @type {number} */
              t1 = a11 * cos - a13 * sin;
              /** @type {number} */
              t2 = a21 * cos - a23 * sin;
              /** @type {number} */
              t3 = a31 * cos - a33 * sin;
              /** @type {number} */
              a23 = a21 * sin + a23 * cos;
              /** @type {number} */
              a33 = a31 * sin + a33 * cos;
              /** @type {number} */
              a43 = a41 * sin + a43 * cos;
              /** @type {number} */
              a11 = t1;
              /** @type {number} */
              a21 = t2;
              /** @type {number} */
              a31 = t3;
            }
            /** @type {number} */
            rotate = Math.atan2(a21, a11);
            /** @type {number} */
            tm.rotation = rotate * _RAD2DEG;
            if (rotate) {
              /** @type {number} */
              cos = Math.cos(-rotate);
              /** @type {number} */
              sin = Math.sin(-rotate);
              /** @type {number} */
              a11 = a11 * cos + a12 * sin;
              /** @type {number} */
              t2 = a21 * cos + a22 * sin;
              /** @type {number} */
              a22 = a21 * -sin + a22 * cos;
              /** @type {number} */
              a32 = a31 * -sin + a32 * cos;
              /** @type {number} */
              a21 = t2;
            }
            if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) {
              /** @type {number} */
              tm.rotationX = tm.rotation = 0;
              /** @type {number} */
              tm.rotationY = 180 - tm.rotationY;
            }
            /** @type {number} */
            tm.scaleX = (Math.sqrt(a11 * a11 + a21 * a21) * rnd + .5 | 0) / rnd;
            /** @type {number} */
            tm.scaleY = (Math.sqrt(a22 * a22 + a23 * a23) * rnd + .5 | 0) / rnd;
            /** @type {number} */
            tm.scaleZ = (Math.sqrt(a32 * a32 + a33 * a33) * rnd + .5 | 0) / rnd;
            if (tm.rotationX || tm.rotationY) {
              /** @type {number} */
              tm.skewX = 0;
            } else {
              tm.skewX = a12 || a22 ? Math.atan2(a12, a22) * _RAD2DEG + tm.rotation : tm.skewX || 0;
              if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
                if (element) {
                  tm.scaleX *= -1;
                  tm.skewX += tm.rotation <= 0 ? 180 : -180;
                  tm.rotation += tm.rotation <= 0 ? 180 : -180;
                } else {
                  tm.scaleY *= -1;
                  tm.skewX += tm.skewX <= 0 ? 180 : -180;
                }
              }
            }
            /** @type {number} */
            tm.perspective = a43 ? 1 / (0 > a43 ? -a43 : a43) : 0;
            tm.x = a14;
            tm.y = a24;
            tm.z = a34;
            if (tm.svg) {
              tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
              tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
            }
          } else {
            if (!_supports3D || y || !m.length || tm.x !== m[4] || tm.y !== m[5] || !tm.rotationX && !tm.rotationY) {
              /** @type {boolean} */
              var viewport = m.length >= 6;
              var x = viewport ? m[0] : 1;
              var y = m[1] || 0;
              var H = m[2] || 0;
              var E = viewport ? m[3] : 1;
              tm.x = m[4] || 0;
              tm.y = m[5] || 0;
              /** @type {number} */
              scaleX = Math.sqrt(x * x + y * y);
              /** @type {number} */
              scaleY = Math.sqrt(E * E + H * H);
              rotation = x || y ? Math.atan2(y, x) * _RAD2DEG : tm.rotation || 0;
              skewX = H || E ? Math.atan2(H, E) * _RAD2DEG + rotation : tm.skewX || 0;
              if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
                if (element) {
                  /** @type {number} */
                  scaleX = scaleX * -1;
                  skewX = skewX + (0 >= rotation ? 180 : -180);
                  rotation = rotation + (0 >= rotation ? 180 : -180);
                } else {
                  /** @type {number} */
                  scaleY = scaleY * -1;
                  skewX = skewX + (0 >= skewX ? 180 : -180);
                }
              }
              /** @type {number} */
              tm.scaleX = scaleX;
              /** @type {number} */
              tm.scaleY = scaleY;
              tm.rotation = rotation;
              tm.skewX = skewX;
              if (_supports3D) {
                /** @type {number} */
                tm.rotationX = tm.rotationY = tm.z = 0;
                /** @type {number} */
                tm.perspective = perspective;
                /** @type {number} */
                tm.scaleZ = 1;
              }
              if (tm.svg) {
                tm.x -= tm.xOrigin - (tm.xOrigin * x + tm.yOrigin * H);
                tm.y -= tm.yOrigin - (tm.xOrigin * y + tm.yOrigin * E);
              }
            }
          }
          tm.zOrigin = zOrigin;
          for (i in tm) {
            if (tm[i] < min && tm[i] > -min) {
              /** @type {number} */
              tm[i] = 0;
            }
          }
        }
        return x && (e._gsTransform = tm, tm.svg && (target && e.style[key] ? TweenLite.delayedCall(.001, function() {
          add(e.style, key);
        }) : !target && e.getAttribute("transform") && TweenLite.delayedCall(.001, function() {
          e.removeAttribute("transform");
        }))), tm;
      };
      /**
       * @param {number} v
       * @return {undefined}
       */
      var _setIETransformRatio = function(v) {
        var filter;
        var val;
        var t = this.data;
        /** @type {number} */
        var ang = -t.rotation * rad;
        /** @type {number} */
        var skew = ang + t.skewX * rad;
        /** @type {number} */
        var n = 1E5;
        /** @type {number} */
        var a = (Math.cos(ang) * t.scaleX * n | 0) / n;
        /** @type {number} */
        var b = (Math.sin(ang) * t.scaleX * n | 0) / n;
        /** @type {number} */
        var c = (Math.sin(skew) * -t.scaleY * n | 0) / n;
        /** @type {number} */
        var d = (Math.cos(skew) * t.scaleY * n | 0) / n;
        var style = this.t.style;
        var cs = this.t.currentStyle;
        if (cs) {
          /** @type {number} */
          val = b;
          /** @type {number} */
          b = -c;
          /** @type {number} */
          c = -val;
          filter = cs.filter;
          /** @type {string} */
          style.filter = "";
          var dx;
          var dy;
          var w = this.t.offsetWidth;
          var h = this.t.offsetHeight;
          /** @type {boolean} */
          var shortenFromEnd = "absolute" !== cs.position;
          /** @type {string} */
          var text = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d;
          var ox = t.x + w * t.xPercent / 100;
          var oy = t.y + h * t.yPercent / 100;
          if (null != t.ox && (dx = (t.oxp ? w * t.ox * .01 : t.ox) - w / 2, dy = (t.oyp ? h * t.oy * .01 : t.oy) - h / 2, ox = ox + (dx - (dx * a + dy * b)), oy = oy + (dy - (dx * c + dy * d))), shortenFromEnd ? (dx =
          w / 2, dy = h / 2, text = text + (", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")")) : text = text + ", sizingMethod='auto expand')", -1 !== filter.indexOf("DXImageTransform.Microsoft.Matrix(") ? style.filter = filter.replace(rfilters, text) :
          style.filter = text + " " + filter, (0 === v || 1 === v) && 1 === a && 0 === b && 0 === c && 1 === d && (shortenFromEnd && -1 === text.indexOf("Dx=0, Dy=0") || m.test(filter) && 100 !== parseFloat(RegExp.$1) || -1 === filter.indexOf(filter.indexOf("Alpha")) && style.removeAttribute("filter")), !shortenFromEnd) {
            var value;
            var prop;
            var dif;
            /** @type {number} */
            var mult = 8 > _ieVers ? 1 : -1;
            dx = t.ieOffsetX || 0;
            dy = t.ieOffsetY || 0;
            /** @type {number} */
            t.ieOffsetX = Math.round((w - ((0 > a ? -a : a) * w + (0 > b ? -b : b) * h)) / 2 + ox);
            /** @type {number} */
            t.ieOffsetY = Math.round((h - ((0 > d ? -d : d) * h + (0 > c ? -c : c) * w)) / 2 + oy);
            /** @type {number} */
            i = 0;
            for (; 4 > i; i++) {
              prop = _margins[i];
              value = cs[prop];
              val = -1 !== value.indexOf("px") ? parseFloat(value) : _convertToPixels(this.t, prop, parseFloat(value), value.replace(n, "")) || 0;
              /** @type {number} */
              dif = val !== t[prop] ? 2 > i ? -t.ieOffsetX : -t.ieOffsetY : 2 > i ? dx - t.ieOffsetX : dy - t.ieOffsetY;
              /** @type {string} */
              style[prop] = (t[prop] = Math.round(val - dif * (0 === i || 2 === i ? 1 : mult))) + "px";
            }
          }
        }
      };
      /** @type {function(number): ?} */
      var _set3DTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function(value) {
        var x;
        var y;
        var z;
        var j;
        var i;
        var c;
        var n;
        var l;
        var v;
        var t;
        var w;
        var h;
        var thisObject;
        var r;
        var s;
        var width;
        var size;
        var bk0;
        var id;
        var name;
        var _;
        var angle;
        var squareSize;
        var options = this.data;
        var style = this.t.style;
        var a = options.rotation;
        var crop = options.rotationX;
        var deg = options.rotationY;
        var length = options.scaleX;
        var len = options.scaleY;
        var scale = options.scaleZ;
        var offset = options.x;
        var b = options.y;
        var idx = options.z;
        var source = options.svg;
        var perspective = options.perspective;
        var propagate = options.force3D;
        if (((1 === value || 0 === value) && "auto" === propagate && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !propagate) && !idx && !perspective && !deg && !crop && 1 === scale || target && source || !_supports3D) {
          return void(a || options.skewX || source ? (a = a * rad, angle = options.skewX * rad, squareSize = 1E5, x = Math.cos(a) * length, j = Math.sin(a) * length, y = Math.sin(a - angle) * -len, i = Math.cos(a - angle) * len, angle && "simple" === options.skewType && (size =
          Math.tan(angle - options.skewY * rad), size = Math.sqrt(1 + size * size), y = y * size, i = i * size, options.skewY && (size = Math.tan(options.skewY * rad), size = Math.sqrt(1 + size * size), x = x * size, j = j * size)), source && (offset = offset + (options.xOrigin -
          (options.xOrigin * x + options.yOrigin * y) + options.xOffset), b = b + (options.yOrigin - (options.xOrigin * j + options.yOrigin * i) + options.yOffset), target && (options.xPercent || options.yPercent) && (r = this.t.getBBox(), offset = offset + .01 * options.xPercent * r.width, b = b + .01 * options.yPercent *
          r.height), r = 1E-6, r > offset && offset > -r && (offset = 0), r > b && b > -r && (b = 0)), id = (x * squareSize | 0) / squareSize + "," + (j * squareSize | 0) / squareSize + "," + (y * squareSize | 0) / squareSize + "," + (i * squareSize | 0) / squareSize + "," + offset + "," + b + ")",
          source && target ? this.t.setAttribute("transform", "matrix(" + id) : style[key] = (options.xPercent || options.yPercent ? "translate(" + options.xPercent + "%," + options.yPercent + "%) matrix(" : "matrix(") + id) : style[key] = (options.xPercent || options.yPercent ? "translate(" + options.xPercent + "%," + options.yPercent + "%) matrix(" : "matrix(") + length + ",0,0," + len +
          "," + offset + "," + b + ")");
        }
        if (_transformProp && (r = 1E-4, r > length && length > -r && (length = scale = 2E-5), r > len && len > -r && (len = scale = 2E-5), !perspective || options.z || options.rotationX || options.rotationY || (perspective = 0)), a || options.skewX) {
          /** @type {number} */
          a = a * rad;
          /** @type {number} */
          s = x = Math.cos(a);
          /** @type {number} */
          width = j = Math.sin(a);
          if (options.skewX) {
            /** @type {number} */
            a = a - options.skewX * rad;
            /** @type {number} */
            s = Math.cos(a);
            /** @type {number} */
            width = Math.sin(a);
            if ("simple" === options.skewType) {
              /** @type {number} */
              size = Math.tan((options.skewX - options.skewY) * rad);
              /** @type {number} */
              size = Math.sqrt(1 + size * size);
              /** @type {number} */
              s = s * size;
              /** @type {number} */
              width = width * size;
              if (options.skewY) {
                /** @type {number} */
                size = Math.tan(options.skewY * rad);
                /** @type {number} */
                size = Math.sqrt(1 + size * size);
                /** @type {number} */
                x = x * size;
                /** @type {number} */
                j = j * size;
              }
            }
          }
          /** @type {number} */
          y = -width;
          /** @type {number} */
          i = s;
        } else {
          if (!(deg || crop || 1 !== scale || perspective || source)) {
            return void(style[key] = (options.xPercent || options.yPercent ? "translate(" + options.xPercent + "%," + options.yPercent + "%) translate3d(" : "translate3d(") + offset + "px," + b + "px," + idx + "px)" + (1 !== length || 1 !== len ? " scale(" + length + "," + len + ")" : ""));
          }
          /** @type {number} */
          x = i = 1;
          /** @type {number} */
          y = j = 0;
        }
        /** @type {number} */
        v = 1;
        /** @type {number} */
        z = c = n = l = t = w = 0;
        /** @type {number} */
        h = perspective ? -1 / perspective : 0;
        thisObject = options.zOrigin;
        /** @type {number} */
        r = 1E-6;
        /** @type {string} */
        name = ",";
        /** @type {string} */
        _ = "0";
        /** @type {number} */
        a = deg * rad;
        if (a) {
          /** @type {number} */
          s = Math.cos(a);
          /** @type {number} */
          width = Math.sin(a);
          /** @type {number} */
          n = -width;
          /** @type {number} */
          t = h * -width;
          /** @type {number} */
          z = x * width;
          /** @type {number} */
          c = j * width;
          /** @type {number} */
          v = s;
          /** @type {number} */
          h = h * s;
          /** @type {number} */
          x = x * s;
          /** @type {number} */
          j = j * s;
        }
        /** @type {number} */
        a = crop * rad;
        if (a) {
          /** @type {number} */
          s = Math.cos(a);
          /** @type {number} */
          width = Math.sin(a);
          /** @type {number} */
          size = y * s + z * width;
          /** @type {number} */
          bk0 = i * s + c * width;
          /** @type {number} */
          l = v * width;
          /** @type {number} */
          w = h * width;
          /** @type {number} */
          z = y * -width + z * s;
          /** @type {number} */
          c = i * -width + c * s;
          /** @type {number} */
          v = v * s;
          /** @type {number} */
          h = h * s;
          /** @type {number} */
          y = size;
          /** @type {number} */
          i = bk0;
        }
        if (1 !== scale) {
          /** @type {number} */
          z = z * scale;
          /** @type {number} */
          c = c * scale;
          /** @type {number} */
          v = v * scale;
          /** @type {number} */
          h = h * scale;
        }
        if (1 !== len) {
          /** @type {number} */
          y = y * len;
          /** @type {number} */
          i = i * len;
          /** @type {number} */
          l = l * len;
          /** @type {number} */
          w = w * len;
        }
        if (1 !== length) {
          /** @type {number} */
          x = x * length;
          /** @type {number} */
          j = j * length;
          /** @type {number} */
          n = n * length;
          /** @type {number} */
          t = t * length;
        }
        if (thisObject || source) {
          if (thisObject) {
            offset = offset + z * -thisObject;
            b = b + c * -thisObject;
            idx = idx + (v * -thisObject + thisObject);
          }
          if (source) {
            offset = offset + (options.xOrigin - (options.xOrigin * x + options.yOrigin * y) + options.xOffset);
            b = b + (options.yOrigin - (options.xOrigin * j + options.yOrigin * i) + options.yOffset);
          }
          if (r > offset && offset > -r) {
            /** @type {string} */
            offset = _;
          }
          if (r > b && b > -r) {
            /** @type {string} */
            b = _;
          }
          if (r > idx && idx > -r) {
            /** @type {number} */
            idx = 0;
          }
        }
        /** @type {string} */
        id = options.xPercent || options.yPercent ? "translate(" + options.xPercent + "%," + options.yPercent + "%) matrix3d(" : "matrix3d(";
        /** @type {string} */
        id = id + ((r > x && x > -r ? _ : x) + name + (r > j && j > -r ? _ : j) + name + (r > n && n > -r ? _ : n));
        /** @type {string} */
        id = id + (name + (r > t && t > -r ? _ : t) + name + (r > y && y > -r ? _ : y) + name + (r > i && i > -r ? _ : i));
        if (crop || deg || 1 !== scale) {
          /** @type {string} */
          id = id + (name + (r > l && l > -r ? _ : l) + name + (r > w && w > -r ? _ : w) + name + (r > z && z > -r ? _ : z));
          /** @type {string} */
          id = id + (name + (r > c && c > -r ? _ : c) + name + (r > v && v > -r ? _ : v) + name + (r > h && h > -r ? _ : h) + name);
        } else {
          /** @type {string} */
          id = id + ",0,0,0,0,1,0,";
        }
        /** @type {string} */
        id = id + (offset + name + b + name + idx + name + (perspective ? 1 + -idx / perspective : 1) + ")");
        /** @type {string} */
        style[key] = id;
      };
      p = Error.prototype;
      /** @type {number} */
      p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
      /** @type {number} */
      p.scaleX = p.scaleY = p.scaleZ = 1;
      _registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
        parser : function(t, name, type, obj, pt, plugin, data) {
          if (obj._lastParsedTransform === data) {
            return pt;
          }
          /** @type {!Object} */
          obj._lastParsedTransform = data;
          var template;
          if ("function" == typeof data[type]) {
            template = data[type];
            /** @type {!Object} */
            data[type] = name;
          }
          var m2;
          var i;
          var has3D;
          var _setScrollPercent;
          var val;
          var x;
          var y;
          var m;
          var p;
          var horizontal = t._gsTransform;
          var style = t.style;
          /** @type {number} */
          var end = 1E-6;
          /** @type {number} */
          var l = ll.length;
          /** @type {!Object} */
          var v = data;
          var expected = {};
          /** @type {string} */
          var cell555Count = "transformOrigin";
          var options = _getTransform(t, _cs, true, v.parseTransform);
          var e = v.transform && ("function" == typeof v.transform ? v.transform(s, a) : v.transform);
          if (obj._transform = options, e && "string" == typeof e && key) {
            i = item.style;
            i[key] = e;
            /** @type {string} */
            i.display = "block";
            /** @type {string} */
            i.position = "absolute";
            _doc.body.appendChild(item);
            m2 = _getTransform(item, null, false);
            if (options.svg) {
              x = options.xOrigin;
              y = options.yOrigin;
              m2.x -= options.xOffset;
              m2.y -= options.yOffset;
              if (v.transformOrigin || v.svgOrigin) {
                e = {};
                callback(t, update(v.transformOrigin), e, v.svgOrigin, v.smoothOrigin, true);
                x = e.xOrigin;
                y = e.yOrigin;
                m2.x -= e.xOffset - options.xOffset;
                m2.y -= e.yOffset - options.yOffset;
              }
              if (x || y) {
                m = f(item, true);
                m2.x -= x - (x * m[0] + y * m[2]);
                m2.y -= y - (x * m[1] + y * m[3]);
              }
            }
            _doc.body.removeChild(item);
            if (!m2.perspective) {
              m2.perspective = options.perspective;
            }
            if (null != v.xPercent) {
              m2.xPercent = _parseVal(v.xPercent, options.xPercent);
            }
            if (null != v.yPercent) {
              m2.yPercent = _parseVal(v.yPercent, options.yPercent);
            }
          } else {
            if ("object" == typeof v) {
              if (m2 = {
                scaleX : _parseVal(null != v.scaleX ? v.scaleX : v.scale, options.scaleX),
                scaleY : _parseVal(null != v.scaleY ? v.scaleY : v.scale, options.scaleY),
                scaleZ : _parseVal(v.scaleZ, options.scaleZ),
                x : _parseVal(v.x, options.x),
                y : _parseVal(v.y, options.y),
                z : _parseVal(v.z, options.z),
                xPercent : _parseVal(v.xPercent, options.xPercent),
                yPercent : _parseVal(v.yPercent, options.yPercent),
                perspective : _parseVal(v.transformPerspective, options.perspective)
              }, val = v.directionalRotation, null != val) {
                if ("object" == typeof val) {
                  for (i in val) {
                    v[i] = val[i];
                  }
                } else {
                  v.rotation = val;
                }
              }
              if ("string" == typeof v.x && -1 !== v.x.indexOf("%")) {
                /** @type {number} */
                m2.x = 0;
                m2.xPercent = _parseVal(v.x, options.xPercent);
              }
              if ("string" == typeof v.y && -1 !== v.y.indexOf("%")) {
                /** @type {number} */
                m2.y = 0;
                m2.yPercent = _parseVal(v.y, options.yPercent);
              }
              m2.rotation = format("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : "rotationZ" in v ? v.rotationZ : options.rotation - options.skewY, options.rotation - options.skewY, "rotation", expected);
              if (_supports3D) {
                m2.rotationX = format("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : options.rotationX || 0, options.rotationX, "rotationX", expected);
                m2.rotationY = format("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : options.rotationY || 0, options.rotationY, "rotationY", expected);
              }
              m2.skewX = format(v.skewX, options.skewX - options.skewY);
              if (m2.skewY = format(v.skewY, options.skewY)) {
                m2.skewX += m2.skewY;
                m2.rotation += m2.skewY;
              }
            }
          }
          if (_supports3D && null != v.force3D) {
            options.force3D = v.force3D;
            /** @type {boolean} */
            _setScrollPercent = true;
          }
          options.skewType = v.skewType || options.skewType || CSSPlugin.defaultSkewType;
          has3D = options.force3D || options.z || options.rotationX || options.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective;
          if (!(has3D || null == v.scale)) {
            /** @type {number} */
            m2.scaleZ = 1;
          }
          for (; --l > -1;) {
            /** @type {string} */
            p = ll[l];
            /** @type {number} */
            e = m2[p] - options[p];
            if (e > end || -end > e || null != v[p] || null != cur[p]) {
              /** @type {boolean} */
              _setScrollPercent = true;
              pt = new CSSPropTween(options, p, options[p], e, pt);
              if (p in expected) {
                pt.e = expected[p];
              }
              /** @type {number} */
              pt.xs0 = 0;
              /** @type {string} */
              pt.plugin = plugin;
              obj._overwriteProps.push(pt.n);
            }
          }
          return e = v.transformOrigin, options.svg && (e || v.svgOrigin) && (x = options.xOffset, y = options.yOffset, callback(t, update(e), m2, v.svgOrigin, v.smoothOrigin), pt = parse(options, "xOrigin", (horizontal ? options : m2).xOrigin, m2.xOrigin, pt, cell555Count), pt = parse(options,
          "yOrigin", (horizontal ? options : m2).yOrigin, m2.yOrigin, pt, cell555Count), (x !== options.xOffset || y !== options.yOffset) && (pt = parse(options, "xOffset", horizontal ? x : options.xOffset, options.xOffset, pt, cell555Count), pt = parse(options, "yOffset", horizontal ? y : options.yOffset, options.yOffset, pt,
          cell555Count)), e = target ? null : "0px 0px"), (e || _supports3D && has3D && options.zOrigin) && (key ? (_setScrollPercent = true, p = position, e = (e || _getStyle(t, p, _cs, false, "50% 50%")) + "", pt = new CSSPropTween(style, p, 0, 0, pt, -1, cell555Count), pt.b = style[p], pt.plugin = plugin,
          _supports3D ? (i = options.zOrigin, e = e.split(" "), options.zOrigin = (e.length > 2 && (0 === i || "0px" !== e[2]) ? parseFloat(e[2]) : i) || 0, pt.xs0 = pt.e = e[0] + " " + (e[1] || "50%") + " 0px", pt = new CSSPropTween(options, "zOrigin", 0, 0, pt, -1, pt.n), pt.b = i, pt.xs0 =
          pt.e = options.zOrigin) : pt.xs0 = pt.e = e) : update(e + "", options)), _setScrollPercent && (obj._transformType = options.svg && target || !has3D && 3 !== this._transformType ? 2 : 3), template && (data[type] = template), pt;
        },
        prefix : true
      });
      _registerComplexSpecialProp("boxShadow", {
        defaultValue : "0px 0px 0px 0px #999",
        prefix : true,
        color : true,
        multi : true,
        keyword : "inset"
      });
      _registerComplexSpecialProp("borderRadius", {
        defaultValue : "0px",
        parser : function(t, data, p, name, pt, type) {
          data = this.format(data);
          var ea1;
          var i;
          var es2;
          var bs2;
          var bs;
          var es;
          var bn;
          var en;
          var w;
          var h;
          var esfx;
          var bsfx;
          var x;
          var hn;
          var vn;
          var em;
          /** @type {!Array} */
          var props = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];
          var style = t.style;
          /** @type {number} */
          w = parseFloat(t.offsetWidth);
          /** @type {number} */
          h = parseFloat(t.offsetHeight);
          ea1 = data.split(" ");
          /** @type {number} */
          i = 0;
          for (; i < props.length; i++) {
            if (this.p.indexOf("border")) {
              props[i] = _checkPropPrefix(props[i]);
            }
            bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
            if (-1 !== bs.indexOf(" ")) {
              bs2 = bs.split(" ");
              bs = bs2[0];
              bs2 = bs2[1];
            }
            es = es2 = ea1[i];
            /** @type {number} */
            bn = parseFloat(bs);
            bsfx = bs.substr((bn + "").length);
            /** @type {boolean} */
            x = "=" === es.charAt(1);
            if (x) {
              /** @type {number} */
              en = parseInt(es.charAt(0) + "1", 10);
              es = es.substr(2);
              /** @type {number} */
              en = en * parseFloat(es);
              esfx = es.substr((en + "").length - (0 > en ? 1 : 0)) || "";
            } else {
              /** @type {number} */
              en = parseFloat(es);
              esfx = es.substr((en + "").length);
            }
            if ("" === esfx) {
              esfx = obj[p] || bsfx;
            }
            if (esfx !== bsfx) {
              hn = _convertToPixels(t, "borderLeft", bn, bsfx);
              vn = _convertToPixels(t, "borderTop", bn, bsfx);
              if ("%" === esfx) {
                /** @type {string} */
                bs = hn / w * 100 + "%";
                /** @type {string} */
                bs2 = vn / h * 100 + "%";
              } else {
                if ("em" === esfx) {
                  em = _convertToPixels(t, "borderLeft", 1, "em");
                  /** @type {string} */
                  bs = hn / em + "em";
                  /** @type {string} */
                  bs2 = vn / em + "em";
                } else {
                  /** @type {string} */
                  bs = hn + "px";
                  /** @type {string} */
                  bs2 = vn + "px";
                }
              }
              if (x) {
                es = parseFloat(bs) + en + esfx;
                es2 = parseFloat(bs2) + en + esfx;
              }
            }
            pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
          }
          return pt;
        },
        prefix : true,
        formatter : get("0px 0px 0px 0px", false, true)
      });
      _registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
        defaultValue : "0px",
        parser : function(t, data, p, info, pos, fn) {
          return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(data), false, "0px", pos);
        },
        prefix : true,
        formatter : get("0px 0px", false, true)
      });
      _registerComplexSpecialProp("backgroundPosition", {
        defaultValue : "0 0",
        parser : function(t, data, name, str, pt, plugin) {
          var ba;
          var ip_segments;
          var i;
          var pct;
          var overlap;
          var url;
          /** @type {string} */
          var bp = "background-position";
          var cs = _cs || _getComputedStyle(t, null);
          var bs = this.format((cs ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0");
          var day = this.format(data);
          if (-1 !== bs.indexOf("%") != (-1 !== day.indexOf("%")) && day.split(",").length < 2 && (url = _getStyle(t, "backgroundImage").replace(regPlaceholder, ""), url && "none" !== url)) {
            ba = bs.split(" ");
            ip_segments = day.split(" ");
            e.setAttribute("src", url);
            /** @type {number} */
            i = 2;
            for (; --i > -1;) {
              bs = ba[i];
              /** @type {boolean} */
              pct = -1 !== bs.indexOf("%");
              if (pct !== (-1 !== ip_segments[i].indexOf("%"))) {
                /** @type {number} */
                overlap = 0 === i ? t.offsetWidth - e.width : t.offsetHeight - e.height;
                /** @type {string} */
                ba[i] = pct ? parseFloat(bs) / 100 * overlap + "px" : parseFloat(bs) / overlap * 100 + "%";
              }
            }
            bs = ba.join(" ");
          }
          return this.parseComplex(t.style, bs, day, pt, plugin);
        },
        formatter : update
      });
      _registerComplexSpecialProp("backgroundSize", {
        defaultValue : "0 0",
        formatter : function(t) {
          return t = t + "", update(-1 === t.indexOf(" ") ? t + " " + t : t);
        }
      });
      _registerComplexSpecialProp("perspective", {
        defaultValue : "0px",
        prefix : true
      });
      _registerComplexSpecialProp("perspectiveOrigin", {
        defaultValue : "50% 50%",
        prefix : true
      });
      _registerComplexSpecialProp("transformStyle", {
        prefix : true
      });
      _registerComplexSpecialProp("backfaceVisibility", {
        prefix : true
      });
      _registerComplexSpecialProp("userSelect", {
        prefix : true
      });
      _registerComplexSpecialProp("margin", {
        parser : init("marginTop,marginRight,marginBottom,marginLeft")
      });
      _registerComplexSpecialProp("padding", {
        parser : init("paddingTop,paddingRight,paddingBottom,paddingLeft")
      });
      _registerComplexSpecialProp("clip", {
        defaultValue : "rect(0px,0px,0px,0px)",
        parser : function(t, data, name, str, pt, plugin) {
          var bs;
          var currentStyle;
          var fixtureDirTmp;
          return 9 > _ieVers ? (currentStyle = t.currentStyle, fixtureDirTmp = 8 > _ieVers ? " " : ",", bs = "rect(" + currentStyle.clipTop + fixtureDirTmp + currentStyle.clipRight + fixtureDirTmp + currentStyle.clipBottom + fixtureDirTmp + currentStyle.clipLeft + ")", data = this.format(data).split(",").join(fixtureDirTmp)) : (bs = this.format(_getStyle(t, this.p, _cs, false, this.dflt)), data = this.format(data)),
          this.parseComplex(t.style, bs, data, pt, plugin);
        }
      });
      _registerComplexSpecialProp("textShadow", {
        defaultValue : "0px 0px 0px #999",
        color : true,
        multi : true
      });
      _registerComplexSpecialProp("autoRound,strictUnits", {
        parser : function(message, arg, str, fn, obj) {
          return obj;
        }
      });
      _registerComplexSpecialProp("border", {
        defaultValue : "0px solid #000",
        parser : function(t, data, name, str, pt, plugin) {
          var b = _getStyle(t, "borderTopWidth", _cs, false, "0px");
          var cookieDataArray = this.format(data).split(" ");
          var h = cookieDataArray[0].replace(n, "");
          return "px" !== h && (b = parseFloat(b) / _convertToPixels(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(b + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), cookieDataArray.join(" "), pt, plugin);
        },
        color : true,
        formatter : function(v) {
          var a = v.split(" ");
          return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
        }
      });
      _registerComplexSpecialProp("borderWidth", {
        parser : init("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
      });
      _registerComplexSpecialProp("float,cssFloat,styleFloat", {
        parser : function(element, x, p, name, str, fn) {
          var sty = element.style;
          /** @type {string} */
          var floatAttr = "cssFloat" in sty ? "cssFloat" : "styleFloat";
          return new CSSPropTween(sty, floatAttr, 0, 0, str, -1, p, false, 0, sty[floatAttr], x);
        }
      });
      /**
       * @param {number} v
       * @return {undefined}
       */
      var _setIEOpacityRatio = function(v) {
        var e;
        var t = this.t;
        var path = t.filter || _getStyle(this.data, "filter") || "";
        /** @type {number} */
        var ext = this.s + this.c * v | 0;
        if (100 === ext) {
          if (-1 === path.indexOf("atrix(") && -1 === path.indexOf("radient(") && -1 === path.indexOf("oader(")) {
            t.removeAttribute("filter");
            /** @type {boolean} */
            e = !_getStyle(this.data, "filter");
          } else {
            t.filter = path.replace(_alphaFilterExp, "");
            /** @type {boolean} */
            e = true;
          }
        }
        if (!e) {
          if (this.xn1) {
            t.filter = path = path || "alpha(opacity=" + ext + ")";
          }
          if (-1 === path.indexOf("pacity")) {
            if (!(0 === ext && this.xn1)) {
              /** @type {string} */
              t.filter = path + " alpha(opacity=" + ext + ")";
            }
          } else {
            t.filter = path.replace(m, "opacity=" + ext);
          }
        }
      };
      _registerComplexSpecialProp("opacity,alpha,autoAlpha", {
        defaultValue : "1",
        parser : function(obj, v, p, s, pt, name) {
          /** @type {number} */
          var b = parseFloat(_getStyle(obj, "opacity", _cs, false, "1"));
          var style = obj.style;
          /** @type {boolean} */
          var dir2 = "autoAlpha" === p;
          return "string" == typeof v && "=" === v.charAt(1) && (v = ("-" === v.charAt(0) ? -1 : 1) * parseFloat(v.substr(2)) + b), dir2 && 1 === b && "hidden" === _getStyle(obj, "visibility", _cs) && 0 !== v && (b = 0), _supportsOpacity ? pt = new CSSPropTween(style, "opacity", b, v - b, pt) : (pt = new CSSPropTween(style,
          "opacity", 100 * b, 100 * (v - b), pt), pt.xn1 = dir2 ? 1 : 0, style.zoom = 1, pt.type = 2, pt.b = "alpha(opacity=" + pt.s + ")", pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")", pt.data = obj, pt.plugin = name, pt.setRatio = _setIEOpacityRatio), dir2 && (pt = new CSSPropTween(style, "visibility",
          0, 0, pt, -1, null, false, 0, 0 !== b ? "inherit" : "hidden", 0 === v ? "hidden" : "inherit"), pt.xs0 = "inherit", s._overwriteProps.push(pt.n), s._overwriteProps.push(p)), pt;
        }
      });
      /**
       * @param {!Object} el
       * @param {string} name
       * @return {undefined}
       */
      var add = function(el, name) {
        if (name) {
          if (el.removeProperty) {
            if ("ms" === name.substr(0, 2) || "webkit" === name.substr(0, 6)) {
              /** @type {string} */
              name = "-" + name;
            }
            el.removeProperty(name.replace(dashExpr, "-$1").toLowerCase());
          } else {
            el.removeAttribute(name);
          }
        }
      };
      /**
       * @param {number} dir
       * @return {undefined}
       */
      var next = function(dir) {
        if (this.t._gsClassPT = this, 1 === dir || 0 === dir) {
          this.t.setAttribute("class", 0 === dir ? this.b : this.e);
          var mpt = this.data;
          var s = this.t.style;
          for (; mpt;) {
            if (mpt.v) {
              s[mpt.p] = mpt.v;
            } else {
              add(s, mpt.p);
            }
            mpt = mpt._next;
          }
          if (1 === dir && this.t._gsClassPT === this) {
            /** @type {null} */
            this.t._gsClassPT = null;
          }
        } else {
          if (this.t.getAttribute("class") !== this.e) {
            this.t.setAttribute("class", this.e);
          }
        }
      };
      _registerComplexSpecialProp("className", {
        parser : function(t, e, p, cssp, pt, plugin, vars) {
          var difData;
          var bs;
          var v;
          var added;
          var record;
          var value = t.getAttribute("class") || "";
          var oldCssText = t.style.cssText;
          if (pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2), pt.setRatio = next, pt.pr = -11, token = true, pt.b = value, bs = _getAllStyles(t, _cs), v = t._gsClassPT) {
            added = {};
            record = v.data;
            for (; record;) {
              /** @type {number} */
              added[record.p] = 1;
              record = record._next;
            }
            v.setRatio(1);
          }
          return t._gsClassPT = pt, pt.e = "=" !== e.charAt(1) ? e : value.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", pt.e), difData = _cssDif(t, bs, _getAllStyles(t), vars, added), t.setAttribute("class", value), pt.data =
          difData.firstMPT, t.style.cssText = oldCssText, pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin);
        }
      });
      /**
       * @param {number} position
       * @return {undefined}
       */
      var fn = function(position) {
        if ((1 === position || 0 === position) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
          var availableConnectionEnds;
          var p;
          var i;
          var r;
          var t;
          var style = this.t.style;
          var undefined = _specialProps.transform.parse;
          if ("all" === this.e) {
            /** @type {string} */
            style.cssText = "";
            /** @type {boolean} */
            r = true;
          } else {
            availableConnectionEnds = this.e.split(" ").join("").split(",");
            i = availableConnectionEnds.length;
            for (; --i > -1;) {
              p = availableConnectionEnds[i];
              if (_specialProps[p]) {
                if (_specialProps[p].parse === undefined) {
                  /** @type {boolean} */
                  r = true;
                } else {
                  p = "transformOrigin" === p ? position : _specialProps[p].p;
                }
              }
              add(style, p);
            }
          }
          if (r) {
            add(style, key);
            t = this.t._gsTransform;
            if (t) {
              if (t.svg) {
                this.t.removeAttribute("data-svg-origin");
                this.t.removeAttribute("transform");
              }
              delete this.t._gsTransform;
            }
          }
        }
      };
      _registerComplexSpecialProp("clearProps", {
        parser : function(t, str, p, s, pt) {
          return pt = new CSSPropTween(t, p, 0, 0, pt, 2), pt.setRatio = fn, pt.e = str, pt.pr = -10, pt.data = s._tween, token = true, pt;
        }
      });
      /** @type {!Array<string>} */
      p = "bezier,throwProps,physicsProps,physics2D".split(",");
      /** @type {number} */
      i = p.length;
      for (; i--;) {
        isDrawn(p[i]);
      }
      p = CSSPlugin.prototype;
      /** @type {null} */
      p._firstPT = p._lastParsedTransform = p._transform = null;
      /**
       * @param {string} target
       * @param {!Object} vars
       * @param {!Object} tween
       * @param {number} value
       * @return {?}
       */
      p._onInitTween = function(target, vars, tween, value) {
        if (!target.nodeType) {
          return false;
        }
        this._target = a = target;
        /** @type {!Object} */
        this._tween = tween;
        /** @type {!Object} */
        this._vars = vars;
        /** @type {number} */
        s = value;
        _autoRound = vars.autoRound;
        /** @type {boolean} */
        token = false;
        obj = vars.suffixMap || CSSPlugin.suffixMap;
        _cs = _getComputedStyle(target, "");
        _overwriteProps = this._overwriteProps;
        var v;
        var pt;
        var pt2;
        var first;
        var last;
        var next;
        var zIndex;
        var tpt;
        var threeD;
        var style = target.style;
        if (extension && "" === style.zIndex && (v = _getStyle(target, "zIndex", _cs), ("auto" === v || "" === v) && this._addLazySet(style, "zIndex", 0)), "string" == typeof vars && (first = style.cssText, v = _getAllStyles(target, _cs), style.cssText = first + ";" + vars, v = _cssDif(target, v, _getAllStyles(target)).difs,
        !_supportsOpacity && reKeyword.test(vars) && (v.opacity = parseFloat(RegExp.$1)), vars = v, style.cssText = first), vars.className ? this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars) : this._firstPT = pt = this.parse(target, vars, null), this._transformType) {
          /** @type {boolean} */
          threeD = 3 === this._transformType;
          if (key) {
            if (okval) {
              /** @type {boolean} */
              extension = true;
              if ("" === style.zIndex) {
                zIndex = _getStyle(target, "zIndex", _cs);
                if ("auto" === zIndex || "" === zIndex) {
                  this._addLazySet(style, "zIndex", 0);
                }
              }
              if (func) {
                this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
              }
            }
          } else {
            /** @type {number} */
            style.zoom = 1;
          }
          pt2 = pt;
          for (; pt2 && pt2._next;) {
            pt2 = pt2._next;
          }
          tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
          this._linkCSSP(tpt, null, pt2);
          /** @type {!Function} */
          tpt.setRatio = key ? _set3DTransformRatio : _setIETransformRatio;
          tpt.data = this._transform || _getTransform(target, _cs, true);
          /** @type {!Object} */
          tpt.tween = tween;
          /** @type {number} */
          tpt.pr = -1;
          _overwriteProps.pop();
        }
        if (token) {
          for (; pt;) {
            next = pt._next;
            pt2 = first;
            for (; pt2 && pt2.pr > pt.pr;) {
              pt2 = pt2._next;
            }
            if (pt._prev = pt2 ? pt2._prev : last) {
              pt._prev._next = pt;
            } else {
              first = pt;
            }
            if (pt._next = pt2) {
              pt2._prev = pt;
            } else {
              last = pt;
            }
            pt = next;
          }
          this._firstPT = first;
        }
        return true;
      };
      /**
       * @param {!Object} target
       * @param {!Object} vars
       * @param {string} pt
       * @param {string} plugin
       * @return {?}
       */
      p.parse = function(target, vars, pt, plugin) {
        var p;
        var sp;
        var bn;
        var en;
        var b;
        var e;
        var type;
        var value;
        var attribute;
        var rel;
        var style = target.style;
        for (p in vars) {
          e = vars[p];
          if ("function" == typeof e) {
            e = e(s, a);
          }
          sp = _specialProps[p];
          if (sp) {
            pt = sp.parse(target, e, p, this, pt, plugin, vars);
          } else {
            /** @type {string} */
            b = _getStyle(target, p, _cs) + "";
            /** @type {boolean} */
            attribute = "string" == typeof e;
            if ("color" === p || "fill" === p || "stroke" === p || -1 !== p.indexOf("Color") || attribute && k.test(e)) {
              if (!attribute) {
                e = extend(e);
                /** @type {string} */
                e = (e.length > 3 ? "rgba(" : "rgb(") + e.join(",") + ")";
              }
              pt = _parseComplex(style, p, b, e, true, "transparent", pt, 0, plugin);
            } else {
              if (attribute && r.test(e)) {
                pt = _parseComplex(style, p, b, e, true, null, pt, 0, plugin);
              } else {
                /** @type {number} */
                bn = parseFloat(b);
                /** @type {string} */
                type = bn || 0 === bn ? b.substr((bn + "").length) : "";
                if ("" === b || "auto" === b) {
                  if ("width" === p || "height" === p) {
                    bn = getStyle(target, p, _cs);
                    /** @type {string} */
                    type = "px";
                  } else {
                    if ("left" === p || "top" === p) {
                      bn = _getDimension(target, p, _cs);
                      /** @type {string} */
                      type = "px";
                    } else {
                      /** @type {number} */
                      bn = "opacity" !== p ? 0 : 1;
                      /** @type {string} */
                      type = "";
                    }
                  }
                }
                /** @type {boolean} */
                rel = attribute && "=" === e.charAt(1);
                if (rel) {
                  /** @type {number} */
                  en = parseInt(e.charAt(0) + "1", 10);
                  e = e.substr(2);
                  /** @type {number} */
                  en = en * parseFloat(e);
                  value = e.replace(n, "");
                } else {
                  /** @type {number} */
                  en = parseFloat(e);
                  value = attribute ? e.replace(n, "") : "";
                }
                if ("" === value) {
                  value = p in obj ? obj[p] : type;
                }
                e = en || 0 === en ? (rel ? en + bn : en) + value : vars[p];
                if (type !== value && "" !== value && (en || 0 === en) && bn) {
                  bn = _convertToPixels(target, p, bn, type);
                  if ("%" === value) {
                    /** @type {number} */
                    bn = bn / (_convertToPixels(target, p, 100, "%") / 100);
                    if (vars.strictUnits !== true) {
                      /** @type {string} */
                      b = bn + "%";
                    }
                  } else {
                    if ("em" === value || "rem" === value || "vw" === value || "vh" === value) {
                      /** @type {number} */
                      bn = bn / _convertToPixels(target, p, 1, value);
                    } else {
                      if ("px" !== value) {
                        en = _convertToPixels(target, p, en, value);
                        /** @type {string} */
                        value = "px";
                      }
                    }
                  }
                  if (rel && (en || 0 === en)) {
                    /** @type {string} */
                    e = en + bn + value;
                  }
                }
                if (rel) {
                  en = en + bn;
                }
                if (!bn && 0 !== bn || !en && 0 !== en) {
                  if (void 0 !== style[p] && (e || e + "" != "NaN" && null != e)) {
                    pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, b, e);
                    pt.xs0 = "none" !== e || "display" !== p && -1 === p.indexOf("Style") ? e : b;
                  } else {
                    warning("invalid " + p + " tween value: " + vars[p]);
                  }
                } else {
                  pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, _autoRound !== false && ("px" === value || "zIndex" === p), 0, b, e);
                  pt.xs0 = value;
                }
              }
            }
          }
          if (plugin && pt && !pt.plugin) {
            /** @type {string} */
            pt.plugin = plugin;
          }
        }
        return pt;
      };
      /**
       * @param {number} v
       * @return {undefined}
       */
      p.setRatio = function(v) {
        var val;
        var encrypted;
        var i;
        var pt = this._firstPT;
        /** @type {number} */
        var end = 1E-6;
        if (1 !== v || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
          if (v || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1E-6) {
            for (; pt;) {
              if (val = pt.c * v + pt.s, pt.r ? val = Math.round(val) : end > val && val > -end && (val = 0), pt.type) {
                if (1 === pt.type) {
                  if (i = pt.l, 2 === i) {
                    pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
                  } else {
                    if (3 === i) {
                      pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
                    } else {
                      if (4 === i) {
                        pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
                      } else {
                        if (5 === i) {
                          pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
                        } else {
                          encrypted = pt.xs0 + val + pt.xs1;
                          /** @type {number} */
                          i = 1;
                          for (; i < pt.l; i++) {
                            encrypted = encrypted + (pt["xn" + i] + pt["xs" + (i + 1)]);
                          }
                          pt.t[pt.p] = encrypted;
                        }
                      }
                    }
                  }
                } else {
                  if (-1 === pt.type) {
                    pt.t[pt.p] = pt.xs0;
                  } else {
                    if (pt.setRatio) {
                      pt.setRatio(v);
                    }
                  }
                }
              } else {
                pt.t[pt.p] = val + pt.xs0;
              }
              pt = pt._next;
            }
          } else {
            for (; pt;) {
              if (2 !== pt.type) {
                pt.t[pt.p] = pt.b;
              } else {
                pt.setRatio(v);
              }
              pt = pt._next;
            }
          }
        } else {
          for (; pt;) {
            if (2 !== pt.type) {
              if (pt.r && -1 !== pt.type) {
                if (val = Math.round(pt.s + pt.c), pt.type) {
                  if (1 === pt.type) {
                    i = pt.l;
                    encrypted = pt.xs0 + val + pt.xs1;
                    /** @type {number} */
                    i = 1;
                    for (; i < pt.l; i++) {
                      encrypted = encrypted + (pt["xn" + i] + pt["xs" + (i + 1)]);
                    }
                    pt.t[pt.p] = encrypted;
                  }
                } else {
                  pt.t[pt.p] = val + pt.xs0;
                }
              } else {
                pt.t[pt.p] = pt.e;
              }
            } else {
              pt.setRatio(v);
            }
            pt = pt._next;
          }
        }
      };
      /**
       * @param {boolean} addedRenderer
       * @return {undefined}
       */
      p._enableTransforms = function(addedRenderer) {
        this._transform = this._transform || _getTransform(this._target, _cs, true);
        /** @type {number} */
        this._transformType = this._transform.svg && target || !addedRenderer && 3 !== this._transformType ? 2 : 3;
      };
      /**
       * @param {number} v
       * @return {undefined}
       */
      var _setClassNameRatio = function(v) {
        this.t[this.p] = this.e;
        this.data._linkCSSP(this, this._next, null, true);
      };
      /**
       * @param {string} target
       * @param {string} opacity
       * @param {number} i
       * @return {undefined}
       */
      p._addLazySet = function(target, opacity, i) {
        var pt = this._firstPT = new CSSPropTween(target, opacity, 0, 0, this._firstPT, 2);
        /** @type {number} */
        pt.e = i;
        /** @type {function(number): undefined} */
        pt.setRatio = _setClassNameRatio;
        pt.data = this;
      };
      /**
       * @param {string} pt
       * @param {string} next
       * @param {string} prev
       * @param {string} remove
       * @return {?}
       */
      p._linkCSSP = function(pt, next, prev, remove) {
        return pt && (next && (next._prev = pt), pt._next && (pt._next._prev = pt._prev), pt._prev ? pt._prev._next = pt._next : this._firstPT === pt && (this._firstPT = pt._next, remove = true), prev ? prev._next = pt : remove || null !== this._firstPT || (this._firstPT = pt), pt._next = next, pt._prev = prev),
        pt;
      };
      /**
       * @param {!Object} lookup
       * @return {undefined}
       */
      p._mod = function(lookup) {
        var pt = this._firstPT;
        for (; pt;) {
          if ("function" == typeof lookup[pt.p] && lookup[pt.p] === Math.round) {
            /** @type {number} */
            pt.r = 1;
          }
          pt = pt._next;
        }
      };
      /**
       * @param {!Object} lookup
       * @return {?}
       */
      p._kill = function(lookup) {
        var pt;
        var i;
        var xfirst;
        /** @type {!Object} */
        var value = lookup;
        if (lookup.autoAlpha || lookup.alpha) {
          value = {};
          for (i in lookup) {
            value[i] = lookup[i];
          }
          /** @type {number} */
          value.opacity = 1;
          if (value.autoAlpha) {
            /** @type {number} */
            value.visibility = 1;
          }
        }
        if (lookup.className && (pt = this._classNamePT)) {
          xfirst = pt.xfirst;
          if (xfirst && xfirst._prev) {
            this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev);
          } else {
            if (xfirst === this._firstPT) {
              this._firstPT = pt._next;
            }
          }
          if (pt._next) {
            this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
          }
          /** @type {null} */
          this._classNamePT = null;
        }
        pt = this._firstPT;
        for (; pt;) {
          if (pt.plugin && pt.plugin !== i && pt.plugin._kill) {
            pt.plugin._kill(lookup);
            i = pt.plugin;
          }
          pt = pt._next;
        }
        return TweenPlugin.prototype._kill.call(this, value);
      };
      /**
       * @param {!Object} item
       * @param {!Array} result
       * @param {!Array} message
       * @return {undefined}
       */
      var log = function(item, result, message) {
        var c;
        var i;
        var t;
        var val;
        if (item.slice) {
          i = item.length;
          for (; --i > -1;) {
            log(item[i], result, message);
          }
        } else {
          c = item.childNodes;
          i = c.length;
          for (; --i > -1;) {
            t = c[i];
            val = t.type;
            if (t.style) {
              result.push(_getAllStyles(t));
              if (message) {
                message.push(t);
              }
            }
            if (!(1 !== val && 9 !== val && 11 !== val || !t.childNodes.length)) {
              log(t, result, message);
            }
          }
        }
      };
      return CSSPlugin.cascadeTo = function(value, duration, params) {
        var i;
        var obj;
        var key;
        var from;
        var p = TweenLite.to(value, duration, params);
        /** @type {!Array} */
        var assignments = [p];
        /** @type {!Array} */
        var scope = [];
        /** @type {!Array} */
        var files_list = [];
        /** @type {!Array} */
        var cloned = [];
        var closedFrames = TweenLite._internals.reservedProps;
        value = p._targets || p.target;
        log(value, scope, cloned);
        p.render(duration, true, true);
        log(value, files_list);
        p.render(0, true, true);
        p._enabled(true);
        /** @type {number} */
        i = cloned.length;
        for (; --i > -1;) {
          if (obj = _cssDif(cloned[i], scope[i], files_list[i]), obj.firstMPT) {
            obj = obj.difs;
            for (key in params) {
              if (closedFrames[key]) {
                obj[key] = params[key];
              }
            }
            from = {};
            for (key in obj) {
              from[key] = scope[i][key];
            }
            assignments.push(TweenLite.fromTo(cloned[i], duration, from, obj));
          }
        }
        return assignments;
      }, TweenPlugin.activate([CSSPlugin]), CSSPlugin;
    }, true);
    (function() {
      var GLElementResolver = _gsScope._gsDefine.plugin({
        propName : "roundProps",
        version : "1.6.0",
        priority : -1,
        API : 2,
        init : function(agencyEndpointsFile, params, value) {
          return this._tween = value, true;
        }
      });
      /**
       * @param {!Object} node
       * @return {undefined}
       */
      var _roundLinkedList = function(node) {
        for (; node;) {
          if (!(node.f || node.blob)) {
            /** @type {function(?): number} */
            node.m = Math.round;
          }
          node = node._next;
        }
      };
      var p = GLElementResolver.prototype;
      /**
       * @return {?}
       */
      p._onInitAllProps = function() {
        var prop;
        var pt;
        var next;
        var tween = this._tween;
        var path = tween.vars.roundProps.join ? tween.vars.roundProps : tween.vars.roundProps.split(",");
        var i = path.length;
        var lookup = {};
        var rpt = tween._propLookup.roundProps;
        for (; --i > -1;) {
          /** @type {function(?): number} */
          lookup[path[i]] = Math.round;
        }
        i = path.length;
        for (; --i > -1;) {
          prop = path[i];
          pt = tween._firstPT;
          for (; pt;) {
            next = pt._next;
            if (pt.pg) {
              pt.t._mod(lookup);
            } else {
              if (pt.n === prop) {
                if (2 === pt.f && pt.t) {
                  _roundLinkedList(pt.t._firstPT);
                } else {
                  this._add(pt.t, prop, pt.s, pt.c);
                  if (next) {
                    next._prev = pt._prev;
                  }
                  if (pt._prev) {
                    pt._prev._next = next;
                  } else {
                    if (tween._firstPT === pt) {
                      tween._firstPT = next;
                    }
                  }
                  /** @type {null} */
                  pt._next = pt._prev = null;
                  tween._propLookup[prop] = rpt;
                }
              }
            }
            pt = next;
          }
        }
        return false;
      };
      /**
       * @param {string} target
       * @param {!Object} p
       * @param {string} s
       * @param {string} c
       * @return {undefined}
       */
      p._add = function(target, p, s, c) {
        this._addTween(target, p, s, s + c, p, Math.round);
        this._overwriteProps.push(p);
      };
    })();
    (function() {
      _gsScope._gsDefine.plugin({
        propName : "attr",
        API : 2,
        version : "0.6.0",
        init : function(target, prop, setting, defaultValue) {
          var p;
          var value;
          if ("function" != typeof target.setAttribute) {
            return false;
          }
          for (p in prop) {
            value = prop[p];
            if ("function" == typeof value) {
              value = value(defaultValue, target);
            }
            this._addTween(target, "setAttribute", target.getAttribute(p) + "", value + "", p, false, p);
            this._overwriteProps.push(p);
          }
          return true;
        }
      });
    })();
    /** @type {boolean} */
    _gsScope._gsDefine.plugin({
      propName : "directionalRotation",
      version : "0.3.0",
      API : 2,
      init : function(target, value, total, elem) {
        if ("object" != typeof value) {
          value = {
            rotation : value
          };
        }
        this.finals = {};
        var p;
        var v;
        var start;
        var val;
        var index;
        var localeParts;
        /** @type {number} */
        var length = value.useRadians === true ? 2 * Math.PI : 360;
        /** @type {number} */
        var len = 1E-6;
        for (p in value) {
          if ("useRadians" !== p) {
            val = value[p];
            if ("function" == typeof val) {
              val = val(elem, target);
            }
            /** @type {!Array<string>} */
            localeParts = (val + "").split("_");
            /** @type {string} */
            v = localeParts[0];
            /** @type {number} */
            start = parseFloat("function" != typeof target[p] ? target[p] : target[p.indexOf("set") || "function" != typeof target["get" + p.substr(3)] ? p : "get" + p.substr(3)]());
            /** @type {number} */
            val = this.finals[p] = "string" == typeof v && "=" === v.charAt(1) ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
            /** @type {number} */
            index = val - start;
            if (localeParts.length) {
              /** @type {string} */
              v = localeParts.join("_");
              if (-1 !== v.indexOf("short")) {
                /** @type {number} */
                index = index % length;
                if (index !== index % (length / 2)) {
                  /** @type {number} */
                  index = 0 > index ? index + length : index - length;
                }
              }
              if (-1 !== v.indexOf("_cw") && 0 > index) {
                /** @type {number} */
                index = (index + 9999999999 * length) % length - (index / length | 0) * length;
              } else {
                if (-1 !== v.indexOf("ccw") && index > 0) {
                  /** @type {number} */
                  index = (index - 9999999999 * length) % length - (index / length | 0) * length;
                }
              }
            }
            if (index > len || -len > index) {
              this._addTween(target, p, start, start + index, p);
              this._overwriteProps.push(p);
            }
          }
        }
        return true;
      },
      set : function(type) {
        var pt;
        if (1 !== type) {
          this._super.setRatio.call(this, type);
        } else {
          pt = this._firstPT;
          for (; pt;) {
            if (pt.f) {
              pt.t[pt.p](this.finals[pt.p]);
            } else {
              pt.t[pt.p] = this.finals[pt.p];
            }
            pt = pt._next;
          }
        }
      }
    })._autoCSS = true;
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(Ease) {
      var p;
      var SlowMo;
      var _createElastic;
      var _globals = _gsScope.GreenSockGlobals || _gsScope;
      var gs = _globals.com.greensock;
      /** @type {number} */
      var _2PI = 2 * Math.PI;
      /** @type {number} */
      var i = Math.PI / 2;
      var _class = gs._class;
      /**
       * @param {string} n
       * @param {!Function} f
       * @return {?}
       */
      var _create = function(n, f) {
        var SlowMo = _class("easing." + n, function() {
        }, true);
        var p = SlowMo.prototype = new Ease;
        return p.constructor = SlowMo, p.getRatio = f, SlowMo;
      };
      var callback = Ease.register || function() {
      };
      /**
       * @param {string} obj
       * @param {?} a
       * @param {?} kind
       * @param {?} n
       * @param {?} then
       * @return {?}
       */
      var append = function(obj, a, kind, n, then) {
        var value = _class("easing." + obj, {
          easeOut : new a,
          easeIn : new kind,
          easeInOut : new n
        }, true);
        return callback(value, obj), value;
      };
      /**
       * @param {number} time
       * @param {number} index
       * @param {!Object} data
       * @return {undefined}
       */
      var Point = function(time, index, data) {
        /** @type {number} */
        this.t = time;
        /** @type {number} */
        this.v = index;
        if (data) {
          /** @type {!Object} */
          this.next = data;
          data.prev = this;
          /** @type {number} */
          this.c = data.v - index;
          /** @type {number} */
          this.gap = data.t - time;
        }
      };
      /**
       * @param {string} n
       * @param {!Function} f
       * @return {?}
       */
      var _createBack = function(n, f) {
        var SlowMo = _class("easing." + n, function(overshoot) {
          this._p1 = overshoot || 0 === overshoot ? overshoot : 1.70158;
          /** @type {number} */
          this._p2 = 1.525 * this._p1;
        }, true);
        var p = SlowMo.prototype = new Ease;
        return p.constructor = SlowMo, p.getRatio = f, p.config = function(linearRatio) {
          return new SlowMo(linearRatio);
        }, SlowMo;
      };
      var itemBack = append("Back", _createBack("BackOut", function(p) {
        return (p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1;
      }), _createBack("BackIn", function(p) {
        return p * p * ((this._p1 + 1) * p - this._p1);
      }), _createBack("BackInOut", function(p) {
        return (p = p * 2) < 1 ? .5 * p * p * ((this._p2 + 1) * p - this._p2) : .5 * ((p = p - 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
      }));
      var c = _class("easing.SlowMo", function(p2, power, yoyoMode) {
        power = power || 0 === power ? power : .7;
        if (null == p2) {
          /** @type {number} */
          p2 = .7;
        } else {
          if (p2 > 1) {
            /** @type {number} */
            p2 = 1;
          }
        }
        this._p = 1 !== p2 ? power : 0;
        /** @type {number} */
        this._p1 = (1 - p2) / 2;
        /** @type {number} */
        this._p2 = p2;
        this._p3 = this._p1 + this._p2;
        /** @type {boolean} */
        this._calcEnd = yoyoMode === true;
      }, true);
      var self = c.prototype = new Ease;
      return self.constructor = c, self.getRatio = function(p) {
        var r = p + (.5 - p) * this._p;
        return p < this._p1 ? this._calcEnd ? 1 - (p = 1 - p / this._p1) * p : r - (p = 1 - p / this._p1) * p * p * p * r : p > this._p3 ? this._calcEnd ? 1 - (p = (p - this._p3) / this._p1) * p : r + (p - r) * (p = (p - this._p3) / this._p1) * p * p * p :
        this._calcEnd ? 1 : r;
      }, c.ease = new c(.7, .7), self.config = c.config = function(cfg, ctx, names) {
        return new c(cfg, ctx, names);
      }, p = _class("easing.SteppedEase", function(steps) {
        steps = steps || 1;
        /** @type {number} */
        this._p1 = 1 / steps;
        this._p2 = steps + 1;
      }, true), self = p.prototype = new Ease, self.constructor = p, self.getRatio = function(p) {
        return 0 > p ? p = 0 : p >= 1 && (p = .999999999), (this._p2 * p >> 0) * this._p1;
      }, self.config = p.config = function(name) {
        return new p(name);
      }, SlowMo = _class("easing.RoughEase", function(options) {
        options = options || {};
        var i;
        var x;
        var y;
        var j;
        var b;
        var p;
        var type = options.taper || "none";
        /** @type {!Array} */
        var data = [];
        /** @type {number} */
        var off = 0;
        /** @type {number} */
        var m = 0 | (options.points || 20);
        /** @type {number} */
        var d = m;
        /** @type {boolean} */
        var dOption = options.randomize !== false;
        /** @type {boolean} */
        var h = options.clamp === true;
        var dir = options.template instanceof Ease ? options.template : null;
        /** @type {number} */
        var width = "number" == typeof options.strength ? .4 * options.strength : .4;
        for (; --d > -1;) {
          /** @type {number} */
          i = dOption ? Math.random() : 1 / m * d;
          x = dir ? dir.getRatio(i) : i;
          if ("none" === type) {
            /** @type {number} */
            y = width;
          } else {
            if ("out" === type) {
              /** @type {number} */
              j = 1 - i;
              /** @type {number} */
              y = j * j * width;
            } else {
              if ("in" === type) {
                /** @type {number} */
                y = i * i * width;
              } else {
                if (.5 > i) {
                  /** @type {number} */
                  j = 2 * i;
                  /** @type {number} */
                  y = j * j * .5 * width;
                } else {
                  /** @type {number} */
                  j = 2 * (1 - i);
                  /** @type {number} */
                  y = j * j * .5 * width;
                }
              }
            }
          }
          if (dOption) {
            x = x + (Math.random() * y - .5 * y);
          } else {
            if (d % 2) {
              x = x + .5 * y;
            } else {
              /** @type {number} */
              x = x - .5 * y;
            }
          }
          if (h) {
            if (x > 1) {
              /** @type {number} */
              x = 1;
            } else {
              if (0 > x) {
                /** @type {number} */
                x = 0;
              }
            }
          }
          data[off++] = {
            x : i,
            y : x
          };
        }
        data.sort(function(curr, cp) {
          return curr.x - cp.x;
        });
        p = new Point(1, 1, null);
        /** @type {number} */
        d = m;
        for (; --d > -1;) {
          b = data[d];
          p = new Point(b.x, b.y, p);
        }
        this._prev = new Point(0, 0, 0 !== p.t ? p : p.next);
      }, true), self = SlowMo.prototype = new Ease, self.constructor = SlowMo, self.getRatio = function(value) {
        var s = this._prev;
        if (value > s.t) {
          for (; s.next && value >= s.t;) {
            s = s.next;
          }
          s = s.prev;
        } else {
          for (; s.prev && value <= s.t;) {
            s = s.prev;
          }
        }
        return this._prev = s, s.v + (value - s.t) / s.gap * s.c;
      }, self.config = function(linearRatio) {
        return new SlowMo(linearRatio);
      }, SlowMo.ease = new SlowMo, append("Bounce", _create("BounceOut", function(u1) {
        return 1 / 2.75 > u1 ? 7.5625 * u1 * u1 : 2 / 2.75 > u1 ? 7.5625 * (u1 = u1 - 1.5 / 2.75) * u1 + .75 : 2.5 / 2.75 > u1 ? 7.5625 * (u1 = u1 - 2.25 / 2.75) * u1 + .9375 : 7.5625 * (u1 = u1 - 2.625 / 2.75) * u1 + .984375;
      }), _create("BounceIn", function(x2) {
        return (x2 = 1 - x2) < 1 / 2.75 ? 1 - 7.5625 * x2 * x2 : 2 / 2.75 > x2 ? 1 - (7.5625 * (x2 = x2 - 1.5 / 2.75) * x2 + .75) : 2.5 / 2.75 > x2 ? 1 - (7.5625 * (x2 = x2 - 2.25 / 2.75) * x2 + .9375) : 1 - (7.5625 * (x2 = x2 - 2.625 / 2.75) * x2 + .984375);
      }), _create("BounceInOut", function(t) {
        /** @type {boolean} */
        var pre = .5 > t;
        return t = pre ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t = t - 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t = t - 2.25 / 2.75) * t + .9375 : 7.5625 * (t = t - 2.625 / 2.75) * t + .984375, pre ? .5 * (1 - t) : .5 *
        t + .5;
      })), append("Circ", _create("CircOut", function(t) {
        return Math.sqrt(1 - (t = t - 1) * t);
      }), _create("CircIn", function(rayY) {
        return -(Math.sqrt(1 - rayY * rayY) - 1);
      }), _create("CircInOut", function(t) {
        return (t = t * 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t = t - 2) * t) + 1);
      })), _createElastic = function(n, f, def) {
        var SlowMo = _class("easing." + n, function(b, value) {
          this._p1 = b >= 1 ? b : 1;
          /** @type {number} */
          this._p2 = (value || def) / (1 > b ? b : 1);
          /** @type {number} */
          this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
          /** @type {number} */
          this._p2 = _2PI / this._p2;
        }, true);
        var p = SlowMo.prototype = new Ease;
        return p.constructor = SlowMo, p.getRatio = f, p.config = function(linearRatio, power) {
          return new SlowMo(linearRatio, power);
        }, SlowMo;
      }, append("Elastic", _createElastic("ElasticOut", function(p) {
        return this._p1 * Math.pow(2, -10 * p) * Math.sin((p - this._p3) * this._p2) + 1;
      }, .3), _createElastic("ElasticIn", function(p) {
        return -(this._p1 * Math.pow(2, 10 * (p = p - 1)) * Math.sin((p - this._p3) * this._p2));
      }, .3), _createElastic("ElasticInOut", function(p) {
        return (p = p * 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (p = p - 1)) * Math.sin((p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (p = p - 1)) * Math.sin((p - this._p3) * this._p2) * .5 + 1;
      }, .45)), append("Expo", _create("ExpoOut", function(size) {
        return 1 - Math.pow(2, -10 * size);
      }), _create("ExpoIn", function(canCreateDiscussions) {
        return Math.pow(2, 10 * (canCreateDiscussions - 1)) - .001;
      }), _create("ExpoInOut", function(s) {
        return (s = s * 2) < 1 ? .5 * Math.pow(2, 10 * (s - 1)) : .5 * (2 - Math.pow(2, -10 * (s - 1)));
      })), append("Sine", _create("SineOut", function(value) {
        return Math.sin(value * i);
      }), _create("SineIn", function(value) {
        return -Math.cos(value * i) + 1;
      }), _create("SineInOut", function(theta) {
        return -.5 * (Math.cos(Math.PI * theta) - 1);
      })), _class("easing.EaseLookup", {
        find : function(str) {
          return Ease.map[str];
        }
      }, true), callback(_globals.SlowMo, "SlowMo", "ease,"), callback(SlowMo, "RoughEase", "ease,"), callback(p, "SteppedEase", "ease,"), itemBack;
    }, true);
  });
  if (_gsScope._gsDefine) {
    _gsScope._gsQueue.pop()();
  }
  (function(window, moduleName) {
    var _exports = {};
    var _globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
    if (!_globals.TweenLite) {
      var a;
      var i;
      var p;
      var _ticker;
      var cvalue;
      /**
       * @param {string} event
       * @return {?}
       */
      var _namespace = function(event) {
        var layer_i;
        var crossfilterable_layers = event.split(".");
        var p = _globals;
        /** @type {number} */
        layer_i = 0;
        for (; layer_i < crossfilterable_layers.length; layer_i++) {
          p[crossfilterable_layers[layer_i]] = p = p[crossfilterable_layers[layer_i]] || {};
        }
        return p;
      };
      var gs = _namespace("com.greensock");
      /** @type {number} */
      var _tinyNum = 1E-10;
      /**
       * @param {!Object} t
       * @return {?}
       */
      var $ = function(t) {
        var k;
        /** @type {!Array} */
        var self = [];
        var n = t.length;
        /** @type {number} */
        k = 0;
        for (; k !== n; self.push(t[k++])) {
        }
        return self;
      };
      /**
       * @return {undefined}
       */
      var value = function() {
      };
      var _isArray = function() {
        /** @type {function(this:*): string} */
        var objectToString$2 = Object.prototype.toString;
        /** @type {string} */
        var referenceerror = objectToString$2.call([]);
        return function(value) {
          return null != value && (value instanceof Array || "object" == typeof value && !!value.push && objectToString$2.call(value) === referenceerror);
        };
      }();
      var _defLookup = {};
      /**
       * @param {string} ns
       * @param {!Object} dependencies
       * @param {!Function} func
       * @param {?} global
       * @return {undefined}
       */
      var Definition = function(ns, dependencies, func, global) {
        this.sc = _defLookup[ns] ? _defLookup[ns].sc : [];
        _defLookup[ns] = this;
        /** @type {null} */
        this.gsClass = null;
        /** @type {!Function} */
        this.func = func;
        /** @type {!Array} */
        var data = [];
        /**
         * @param {boolean} strictCheck
         * @return {undefined}
         */
        this.check = function(strictCheck) {
          var cur;
          var result;
          var n;
          var cl;
          var v;
          var i = dependencies.length;
          var numFrom = i;
          for (; --i > -1;) {
            if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
              data[i] = cur.gsClass;
              numFrom--;
            } else {
              if (strictCheck) {
                cur.sc.push(this);
              }
            }
          }
          if (0 === numFrom && func) {
            if (result = ("com.greensock." + ns).split("."), n = result.pop(), cl = _namespace(result.join("."))[n] = this.gsClass = func.apply(func, data), global) {
              if (_globals[n] = _exports[n] = cl, v = "undefined" != typeof module && module.exports, !v && "function" == typeof define && define.amd) {
                define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function() {
                  return cl;
                });
              } else {
                if (v) {
                  if (ns === moduleName) {
                    module.exports = _exports[moduleName] = cl;
                    for (i in _exports) {
                      cl[i] = _exports[i];
                    }
                  } else {
                    if (_exports[moduleName]) {
                      _exports[moduleName][n] = cl;
                    }
                  }
                }
              }
            }
            /** @type {number} */
            i = 0;
            for (; i < this.sc.length; i++) {
              this.sc[i].check();
            }
          }
        };
        this.check(true);
      };
      /** @type {function(string, !Object, !Function, string): ?} */
      var _gsDefine = window._gsDefine = function(name, dependencies, func, global) {
        return new Definition(name, dependencies, func, global);
      };
      /** @type {function(string, !Function, boolean): ?} */
      var _class = gs._class = function(ns, f, global) {
        return f = f || function() {
        }, _gsDefine(ns, [], function() {
          return f;
        }, global), f;
      };
      _gsDefine.globals = _globals;
      /** @type {!Array} */
      var _baseParams = [0, 0, 1, 1];
      var Ease = _class("easing.Ease", function(f, extraParams, type, power) {
        /** @type {!Function} */
        this._func = f;
        this._type = type || 0;
        this._power = power || 0;
        /** @type {!Array<?>} */
        this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
      }, true);
      var _easeMap = Ease.map = {};
      /** @type {function((Object|string), string, string, boolean): undefined} */
      var _easeReg = Ease.register = function(ease, t, types, create) {
        var e;
        var name;
        var i;
        var type;
        var r = t.split(",");
        var j = r.length;
        var values = (types || "easeIn,easeOut,easeInOut").split(",");
        for (; --j > -1;) {
          name = r[j];
          e = create ? _class("easing." + name, null, true) : gs.easing[name] || {};
          i = values.length;
          for (; --i > -1;) {
            type = values[i];
            _easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease;
          }
        }
      };
      p = Ease.prototype;
      /** @type {boolean} */
      p._calcEnd = false;
      /**
       * @param {number} min
       * @return {?}
       */
      p.getRatio = function(min) {
        if (this._func) {
          return this._params[0] = min, this._func.apply(null, this._params);
        }
        var undefined = this._type;
        var r = this._power;
        var n = 1 === undefined ? 1 - min : 2 === undefined ? min : .5 > min ? 2 * min : 2 * (1 - min);
        return 1 === r ? n = n * n : 2 === r ? n = n * (n * n) : 3 === r ? n = n * (n * n * n) : 4 === r && (n = n * (n * n * n * n)), 1 === undefined ? 1 - n : 2 === undefined ? n : .5 > min ? n / 2 : 1 - n /
        2;
      };
      /** @type {!Array} */
      a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
      /** @type {number} */
      i = a.length;
      for (; --i > -1;) {
        /** @type {string} */
        p = a[i] + ",Power" + i;
        _easeReg(new Ease(null, null, 1, i), p, "easeOut", true);
        _easeReg(new Ease(null, null, 2, i), p, "easeIn" + (0 === i ? ",easeNone" : ""));
        _easeReg(new Ease(null, null, 3, i), p, "easeInOut");
      }
      _easeMap.linear = gs.easing.Linear.easeIn;
      _easeMap.swing = gs.easing.Quad.easeInOut;
      var EventDispatcher = _class("events.EventDispatcher", function(target) {
        this._listeners = {};
        this._eventTarget = target || this;
      });
      p = EventDispatcher.prototype;
      /**
       * @param {string} type
       * @param {string} callback
       * @param {string} scope
       * @param {boolean} useParam
       * @param {number} priority
       * @return {undefined}
       */
      p.addEventListener = function(type, callback, scope, useParam, priority) {
        priority = priority || 0;
        var listener;
        var i;
        var list = this._listeners[type];
        /** @type {number} */
        var c = 0;
        if (!(this !== _ticker || cvalue)) {
          _ticker.wake();
        }
        if (null == list) {
          /** @type {!Array} */
          this._listeners[type] = list = [];
        }
        i = list.length;
        for (; --i > -1;) {
          listener = list[i];
          if (listener.c === callback && listener.s === scope) {
            list.splice(i, 1);
          } else {
            if (0 === c && listener.pr < priority) {
              c = i + 1;
            }
          }
        }
        list.splice(c, 0, {
          c : callback,
          s : scope,
          up : useParam,
          pr : priority
        });
      };
      /**
       * @param {string} type
       * @param {!Function} callback
       * @return {?}
       */
      p.removeEventListener = function(type, callback) {
        var i;
        var listeners = this._listeners[type];
        if (listeners) {
          i = listeners.length;
          for (; --i > -1;) {
            if (listeners[i].c === callback) {
              return void listeners.splice(i, 1);
            }
          }
        }
      };
      /**
       * @param {string} type
       * @return {undefined}
       */
      p.dispatchEvent = function(type) {
        var i;
        var t;
        var listener;
        var listeners = this._listeners[type];
        if (listeners) {
          i = listeners.length;
          if (i > 1) {
            listeners = listeners.slice(0);
          }
          t = this._eventTarget;
          for (; --i > -1;) {
            listener = listeners[i];
            if (listener) {
              if (listener.up) {
                listener.c.call(listener.s || t, {
                  type : type,
                  target : t
                });
              } else {
                listener.c.call(listener.s || t);
              }
            }
          }
        }
      };
      var data = window.requestAnimationFrame;
      var _cancelAnimFrame = window.cancelAnimationFrame;
      /** @type {function(): number} */
      var _getTime = Date.now || function() {
        return (new Date).getTime();
      };
      /** @type {number} */
      var _lastUpdate = _getTime();
      /** @type {!Array} */
      a = ["ms", "moz", "webkit", "o"];
      /** @type {number} */
      i = a.length;
      for (; --i > -1 && !data;) {
        data = window[a[i] + "RequestAnimationFrame"];
        _cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
      }
      _class("Ticker", function(_fps, limit) {
        var x;
        var val;
        var res;
        var _gap;
        var _nextTime;
        var _self = this;
        /** @type {number} */
        var _startTime = _getTime();
        /** @type {(boolean|string)} */
        var result = !(limit === false || !data) && "auto";
        /** @type {number} */
        var _lagThreshold = 500;
        /** @type {number} */
        var _adjustedLag = 33;
        /** @type {string} */
        var _tickWord = "tick";
        /**
         * @param {number} argCount
         * @return {undefined}
         */
        var cb = function(argCount) {
          var overlap;
          var a;
          /** @type {number} */
          var elapsed = _getTime() - _lastUpdate;
          if (elapsed > _lagThreshold) {
            _startTime = _startTime + (elapsed - _adjustedLag);
          }
          _lastUpdate = _lastUpdate + elapsed;
          /** @type {number} */
          _self.time = (_lastUpdate - _startTime) / 1E3;
          /** @type {number} */
          overlap = _self.time - _nextTime;
          if (!x || overlap > 0 || argCount === true) {
            _self.frame++;
            _nextTime = _nextTime + (overlap + (overlap >= _gap ? .004 : _gap - overlap));
            /** @type {boolean} */
            a = true;
          }
          if (argCount !== true) {
            res = val(cb);
          }
          if (a) {
            _self.dispatchEvent(_tickWord);
          }
        };
        EventDispatcher.call(_self);
        /** @type {number} */
        _self.time = _self.frame = 0;
        /**
         * @return {undefined}
         */
        _self.tick = function() {
          cb(true);
        };
        /**
         * @param {number} threshold
         * @param {?} adjustedLag
         * @return {undefined}
         */
        _self.lagSmoothing = function(threshold, adjustedLag) {
          _lagThreshold = threshold || 1 / _tinyNum;
          /** @type {number} */
          _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
        };
        /**
         * @return {undefined}
         */
        _self.sleep = function() {
          if (null != res) {
            if (result && _cancelAnimFrame) {
              _cancelAnimFrame(res);
            } else {
              clearTimeout(res);
            }
            /** @type {function(): undefined} */
            val = value;
            /** @type {null} */
            res = null;
            if (_self === _ticker) {
              /** @type {boolean} */
              cvalue = false;
            }
          }
        };
        /**
         * @param {?} event
         * @return {undefined}
         */
        _self.wake = function(event) {
          if (null !== res) {
            _self.sleep();
          } else {
            if (event) {
              _startTime = _startTime + (-_lastUpdate + (_lastUpdate = _getTime()));
            } else {
              if (_self.frame > 10) {
                /** @type {number} */
                _lastUpdate = _getTime() - _lagThreshold + 5;
              }
            }
          }
          val = 0 === x ? value : result && data ? data : function(type) {
            return setTimeout(type, 1E3 * (_nextTime - _self.time) + 1 | 0);
          };
          if (_self === _ticker) {
            /** @type {boolean} */
            cvalue = true;
          }
          cb(2);
        };
        /**
         * @param {number} value
         * @return {?}
         */
        _self.fps = function(value) {
          return arguments.length ? (x = value, _gap = 1 / (x || 60), _nextTime = this.time + _gap, void _self.wake()) : x;
        };
        /**
         * @param {boolean} value
         * @return {?}
         */
        _self.useRAF = function(value) {
          return arguments.length ? (_self.sleep(), result = value, void _self.fps(x)) : result;
        };
        _self.fps(_fps);
        setTimeout(function() {
          if ("auto" === result && _self.frame < 5 && "hidden" !== document.visibilityState) {
            _self.useRAF(false);
          }
        }, 1500);
      });
      p = gs.Ticker.prototype = new gs.events.EventDispatcher;
      p.constructor = gs.Ticker;
      var Animation = _class("core.Animation", function(duration, vars) {
        if (this.vars = vars = vars || {}, this._duration = this._totalDuration = duration || 0, this._delay = Number(vars.delay) || 0, this._timeScale = 1, this._active = vars.immediateRender === true, this.data = vars.data, this._reversed = vars.reversed === true, _rootTimeline) {
          if (!cvalue) {
            _ticker.wake();
          }
          var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
          tl.add(this, tl._time);
          if (this.vars.paused) {
            this.paused(true);
          }
        }
      });
      _ticker = Animation.ticker = new gs.Ticker;
      p = Animation.prototype;
      /** @type {boolean} */
      p._dirty = p._gc = p._initted = p._paused = false;
      /** @type {number} */
      p._totalTime = p._time = 0;
      /** @type {number} */
      p._rawPrevTime = -1;
      /** @type {null} */
      p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
      /** @type {boolean} */
      p._paused = false;
      /**
       * @return {undefined}
       */
      var _checkTimeout = function() {
        if (cvalue && _getTime() - _lastUpdate > 2E3) {
          _ticker.wake();
        }
        setTimeout(_checkTimeout, 2E3);
      };
      _checkTimeout();
      /**
       * @param {string} value
       * @param {boolean} suppressEvents
       * @return {?}
       */
      p.play = function(value, suppressEvents) {
        return null != value && this.seek(value, suppressEvents), this.reversed(false).paused(false);
      };
      /**
       * @param {string} value
       * @param {boolean} suppressEvents
       * @return {?}
       */
      p.pause = function(value, suppressEvents) {
        return null != value && this.seek(value, suppressEvents), this.paused(true);
      };
      /**
       * @param {string} value
       * @param {boolean} suppressEvents
       * @return {?}
       */
      p.resume = function(value, suppressEvents) {
        return null != value && this.seek(value, suppressEvents), this.paused(false);
      };
      /**
       * @param {string} time
       * @param {boolean} suppressEvents
       * @return {?}
       */
      p.seek = function(time, suppressEvents) {
        return this.totalTime(Number(time), suppressEvents !== false);
      };
      /**
       * @param {number} includeDelay
       * @param {boolean} suppressEvents
       * @return {?}
       */
      p.restart = function(includeDelay, suppressEvents) {
        return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, suppressEvents !== false, true);
      };
      /**
       * @param {!Object} from
       * @param {boolean} suppressEvents
       * @return {?}
       */
      p.reverse = function(from, suppressEvents) {
        return null != from && this.seek(from || this.totalDuration(), suppressEvents), this.reversed(true).paused(false);
      };
      /**
       * @param {number} time
       * @param {string} suppressEvents
       * @param {boolean} force
       * @return {undefined}
       */
      p.render = function(time, suppressEvents, force) {
      };
      /**
       * @return {?}
       */
      p.invalidate = function() {
        return this._time = this._totalTime = 0, this._initted = this._gc = false, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(true), this;
      };
      /**
       * @return {?}
       */
      p.isActive = function() {
        var rawTime;
        var tl = this._timeline;
        var startTime = this._startTime;
        return !tl || !this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime()) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale;
      };
      /**
       * @param {string} enabled
       * @param {boolean} ignoreTimeline
       * @return {?}
       */
      p._enabled = function(enabled, ignoreTimeline) {
        return cvalue || _ticker.wake(), this._gc = !enabled, this._active = this.isActive(), ignoreTimeline !== true && (enabled && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !enabled && this.timeline && this._timeline._remove(this, true)), false;
      };
      /**
       * @param {string} vars
       * @param {!Object} target
       * @return {?}
       */
      p._kill = function(vars, target) {
        return this._enabled(false, false);
      };
      /**
       * @param {string} vars
       * @param {!Object} target
       * @return {?}
       */
      p.kill = function(vars, target) {
        return this._kill(vars, target), this;
      };
      /**
       * @param {boolean} includeSelf
       * @return {?}
       */
      p._uncache = function(includeSelf) {
        var tween = includeSelf ? this : this.timeline;
        for (; tween;) {
          /** @type {boolean} */
          tween._dirty = true;
          tween = tween.timeline;
        }
        return this;
      };
      /**
       * @param {!Object} params
       * @return {?}
       */
      p._swapSelfInParams = function(params) {
        var i = params.length;
        var copy = params.concat();
        for (; --i > -1;) {
          if ("{self}" === params[i]) {
            copy[i] = this;
          }
        }
        return copy;
      };
      /**
       * @param {string} type
       * @return {undefined}
       */
      p._callback = function(type) {
        var v = this.vars;
        var s = v[type];
        var value = v[type + "Params"];
        var r = v[type + "Scope"] || v.callbackScope || this;
        var matchLength = value ? value.length : 0;
        switch(matchLength) {
          case 0:
            s.call(r);
            break;
          case 1:
            s.call(r, value[0]);
            break;
          case 2:
            s.call(r, value[0], value[1]);
            break;
          default:
            s.apply(r, value);
        }
      };
      /**
       * @param {string} type
       * @param {!Function} callback
       * @param {!Array} params
       * @param {?} scope
       * @return {?}
       */
      p.eventCallback = function(type, callback, params, scope) {
        if ("on" === (type || "").substr(0, 2)) {
          var v = this.vars;
          if (1 === arguments.length) {
            return v[type];
          }
          if (null == callback) {
            delete v[type];
          } else {
            /** @type {!Function} */
            v[type] = callback;
            v[type + "Params"] = _isArray(params) && -1 !== params.join("").indexOf("{self}") ? this._swapSelfInParams(params) : params;
            v[type + "Scope"] = scope;
          }
          if ("onUpdate" === type) {
            /** @type {!Function} */
            this._onUpdate = callback;
          }
        }
        return this;
      };
      /**
       * @param {number} value
       * @return {?}
       */
      p.delay = function(value) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + value - this._delay), this._delay = value, this) : this._delay;
      };
      /**
       * @param {number} value
       * @return {?}
       */
      p.duration = function(value) {
        return arguments.length ? (this._duration = this._totalDuration = value, this._uncache(true), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== value && this.totalTime(this._totalTime * (value / this._duration), true), this) : (this._dirty = false, this._duration);
      };
      /**
       * @param {undefined} value
       * @return {?}
       */
      p.totalDuration = function(value) {
        return this._dirty = false, arguments.length ? this.duration(value) : this._totalDuration;
      };
      /**
       * @param {!Object} value
       * @param {!Object} name
       * @return {?}
       */
      p.time = function(value, name) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(value > this._duration ? this._duration : value, name)) : this._time;
      };
      /**
       * @param {number} time
       * @param {boolean} p
       * @param {boolean} uncapped
       * @return {?}
       */
      p.totalTime = function(time, p, uncapped) {
        if (cvalue || _ticker.wake(), !arguments.length) {
          return this._totalTime;
        }
        if (this._timeline) {
          if (0 > time && !uncapped && (time = time + this.totalDuration()), this._timeline.smoothChildTiming) {
            if (this._dirty) {
              this.totalDuration();
            }
            var totalDuration = this._totalDuration;
            var tl = this._timeline;
            if (time > totalDuration && !uncapped && (time = totalDuration), this._startTime = (this._paused ? this._pauseTime : tl._time) - (this._reversed ? totalDuration - time : time) / this._timeScale, tl._dirty || this._uncache(false), tl._timeline) {
              for (; tl._timeline;) {
                if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
                  tl.totalTime(tl._totalTime, true);
                }
                tl = tl._timeline;
              }
            }
          }
          if (this._gc) {
            this._enabled(true, false);
          }
          if (this._totalTime !== time || 0 === this._duration) {
            if (_lazyTweens.length) {
              _lazyRender();
            }
            this.render(time, p, false);
            if (_lazyTweens.length) {
              _lazyRender();
            }
          }
        }
        return this;
      };
      /** @type {function(?, boolean): ?} */
      p.progress = p.totalProgress = function(sampleRate, value) {
        var duration = this.duration();
        return arguments.length ? this.totalTime(duration * sampleRate, value) : duration ? this._time / duration : this.ratio;
      };
      /**
       * @param {number} value
       * @return {?}
       */
      p.startTime = function(value) {
        return arguments.length ? (value !== this._startTime && (this._startTime = value, this.timeline && this.timeline._sortChildren && this.timeline.add(this, value - this._delay)), this) : this._startTime;
      };
      /**
       * @param {number} includeRepeats
       * @return {?}
       */
      p.endTime = function(includeRepeats) {
        return this._startTime + (0 != includeRepeats ? this.totalDuration() : this.duration()) / this._timeScale;
      };
      /**
       * @param {number} value
       * @return {?}
       */
      p.timeScale = function(value) {
        if (!arguments.length) {
          return this._timeScale;
        }
        if (value = value || _tinyNum, this._timeline && this._timeline.smoothChildTiming) {
          var pauseTime = this._pauseTime;
          var t = pauseTime || 0 === pauseTime ? pauseTime : this._timeline.totalTime();
          /** @type {number} */
          this._startTime = t - (t - this._startTime) * this._timeScale / value;
        }
        return this._timeScale = value, this._uncache(false);
      };
      /**
       * @param {string} value
       * @return {?}
       */
      p.reversed = function(value) {
        return arguments.length ? (value != this._reversed && (this._reversed = value, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, true)), this) : this._reversed;
      };
      /**
       * @param {string} value
       * @return {?}
       */
      p.paused = function(value) {
        if (!arguments.length) {
          return this._paused;
        }
        var raw;
        var elapsed;
        var tl = this._timeline;
        return value != this._paused && tl && (cvalue || value || _ticker.wake(), raw = tl.rawTime(), elapsed = raw - this._pauseTime, !value && tl.smoothChildTiming && (this._startTime += elapsed, this._uncache(false)), this._pauseTime = value ? raw : null, this._paused = value, this._active = this.isActive(), !value && 0 !== elapsed && this._initted && this.duration() &&
        (raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale, this.render(raw, raw === this._totalTime, true))), this._gc && !value && this._enabled(true, false), this;
      };
      var SimpleTimeline = _class("core.SimpleTimeline", function(callback) {
        Animation.call(this, 0, callback);
        /** @type {boolean} */
        this.autoRemoveChildren = this.smoothChildTiming = true;
      });
      p = SimpleTimeline.prototype = new Animation;
      p.constructor = SimpleTimeline;
      /** @type {boolean} */
      p.kill()._gc = false;
      /** @type {null} */
      p._first = p._last = p._recent = null;
      /** @type {boolean} */
      p._sortChildren = false;
      /** @type {function(!Object, number, ?, ?): ?} */
      p.add = p.insert = function(child, position, fromNewID, toNewID) {
        var prevTween;
        var st;
        if (child._startTime = Number(position || 0) + child._delay, child._paused && this !== child._timeline && (child._pauseTime = child._startTime + (this.rawTime() - child._startTime) / child._timeScale), child.timeline && child.timeline._remove(child, true), child.timeline = child._timeline = this, child._gc && child._enabled(true, true), prevTween = this._last, this._sortChildren) {
          st = child._startTime;
          for (; prevTween && prevTween._startTime > st;) {
            prevTween = prevTween._prev;
          }
        }
        return prevTween ? (child._next = prevTween._next, prevTween._next = child) : (child._next = this._first, this._first = child), child._next ? child._next._prev = child : this._last = child, child._prev = prevTween, this._recent = child, this._timeline && this._uncache(true), this;
      };
      /**
       * @param {!Object} tween
       * @param {string} skipDisable
       * @return {?}
       */
      p._remove = function(tween, skipDisable) {
        return tween.timeline === this && (skipDisable || tween._enabled(false, true), tween._prev ? tween._prev._next = tween._next : this._first === tween && (this._first = tween._next), tween._next ? tween._next._prev = tween._prev : this._last === tween && (this._last = tween._prev), tween._next = tween._prev = tween.timeline = null, tween === this._recent && (this._recent = this._last),
        this._timeline && this._uncache(true)), this;
      };
      /**
       * @param {number} time
       * @param {string} suppressEvents
       * @param {boolean} force
       * @return {undefined}
       */
      p.render = function(time, suppressEvents, force) {
        var next;
        var tween = this._first;
        this._totalTime = this._time = this._rawPrevTime = time;
        for (; tween;) {
          next = tween._next;
          if (tween._active || time >= tween._startTime && !tween._paused) {
            if (tween._reversed) {
              tween.render((tween._dirty ? tween.totalDuration() : tween._totalDuration) - (time - tween._startTime) * tween._timeScale, suppressEvents, force);
            } else {
              tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
            }
          }
          tween = next;
        }
      };
      /**
       * @return {?}
       */
      p.rawTime = function() {
        return cvalue || _ticker.wake(), this._totalTime;
      };
      var TweenLite = _class("TweenLite", function(target, duration, callback) {
        if (Animation.call(this, duration, callback), this.render = TweenLite.prototype.render, null == target) {
          throw "Cannot tween a null target.";
        }
        this.target = target = "string" != typeof target ? target : TweenLite.selector(target) || target;
        var i;
        var value;
        var targets;
        var isSelector = target.jquery || target.length && target !== window && target[0] && (target[0] === window || target[0].nodeType && target[0].style && !target.nodeType);
        var overwrite = this.vars.overwrite;
        if (this._overwrite = overwrite = null == overwrite ? _overwriteLookup[TweenLite.defaultOverwrite] : "number" == typeof overwrite ? overwrite >> 0 : _overwriteLookup[overwrite], (isSelector || target instanceof Array || target.push && _isArray(target)) && "number" != typeof target[0]) {
          this._targets = targets = $(target);
          /** @type {!Array} */
          this._propLookup = [];
          /** @type {!Array} */
          this._siblings = [];
          /** @type {number} */
          i = 0;
          for (; i < targets.length; i++) {
            value = targets[i];
            if (value) {
              if ("string" != typeof value) {
                if (value.length && value !== window && value[0] && (value[0] === window || value[0].nodeType && value[0].style && !value.nodeType)) {
                  targets.splice(i--, 1);
                  this._targets = targets = targets.concat($(value));
                } else {
                  this._siblings[i] = _register(value, this, false);
                  if (1 === overwrite && this._siblings[i].length > 1) {
                    _applyOverwrite(value, this, null, 1, this._siblings[i]);
                  }
                }
              } else {
                value = targets[i--] = TweenLite.selector(value);
                if ("string" == typeof value) {
                  targets.splice(i + 1, 1);
                }
              }
            } else {
              targets.splice(i--, 1);
            }
          }
        } else {
          this._propLookup = {};
          this._siblings = _register(target, this, false);
          if (1 === overwrite && this._siblings.length > 1) {
            _applyOverwrite(target, this, null, 1, this._siblings);
          }
        }
        if (this.vars.immediateRender || 0 === duration && 0 === this._delay && this.vars.immediateRender !== false) {
          /** @type {number} */
          this._time = -_tinyNum;
          this.render(Math.min(0, -this._delay));
        }
      }, true);
      /**
       * @param {!Object} v
       * @return {?}
       */
      var _isSelector = function(v) {
        return v && v.length && v !== window && v[0] && (v[0] === window || v[0].nodeType && v[0].style && !v.nodeType);
      };
      /**
       * @param {(Object|string)} vars
       * @param {!Object} obj
       * @return {undefined}
       */
      var _autoCSS = function(vars, obj) {
        var undefined;
        var val = {};
        for (undefined in vars) {
          if (!(j[undefined] || undefined in obj && "transform" !== undefined && "x" !== undefined && "y" !== undefined && "width" !== undefined && "height" !== undefined && "className" !== undefined && "border" !== undefined || !(!_plugins[undefined] || _plugins[undefined] && _plugins[undefined]._autoCSS))) {
            val[undefined] = vars[undefined];
            delete vars[undefined];
          }
        }
        vars.css = val;
      };
      p = TweenLite.prototype = new Animation;
      p.constructor = TweenLite;
      /** @type {boolean} */
      p.kill()._gc = false;
      /** @type {number} */
      p.ratio = 0;
      /** @type {null} */
      p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
      /** @type {boolean} */
      p._notifyPluginsOfEnabled = p._lazy = false;
      /** @type {string} */
      TweenLite.version = "1.19.0";
      TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
      /** @type {string} */
      TweenLite.defaultOverwrite = "auto";
      TweenLite.ticker = _ticker;
      /** @type {number} */
      TweenLite.autoSleep = 120;
      /**
       * @param {number} threshold
       * @param {?} adjustedLag
       * @return {undefined}
       */
      TweenLite.lagSmoothing = function(threshold, adjustedLag) {
        _ticker.lagSmoothing(threshold, adjustedLag);
      };
      TweenLite.selector = window.$ || window.jQuery || function(value) {
        var selector = window.$ || window.jQuery;
        return selector ? (TweenLite.selector = selector, selector(value)) : "undefined" == typeof document ? value : document.querySelectorAll ? document.querySelectorAll(value) : document.getElementById("#" === value.charAt(0) ? value.substr(1) : value);
      };
      /** @type {!Array} */
      var _lazyTweens = [];
      var _lazyLookup = {};
      /** @type {!RegExp} */
      var urlexp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi;
      /**
       * @param {number} v
       * @return {undefined}
       */
      var _setRatio = function(v) {
        var start;
        var pt = this._firstPT;
        /** @type {number} */
        var end = 1e-6;
        for (; pt;) {
          start = pt.blob ? v ? this.join("") : this.start : pt.c * v + pt.s;
          if (pt.m) {
            start = pt.m(start, this._target || pt.t);
          } else {
            if (end > start && start > -end) {
              /** @type {number} */
              start = 0;
            }
          }
          if (pt.f) {
            if (pt.fp) {
              pt.t[pt.p](pt.fp, start);
            } else {
              pt.t[pt.p](start);
            }
          } else {
            pt.t[pt.p] = start;
          }
          pt = pt._next;
        }
      };
      /**
       * @param {number} type
       * @param {string} str
       * @param {?} filter
       * @param {!Object} pt
       * @return {?}
       */
      var _blobDif = function(type, str, filter, pt) {
        var args;
        var actions;
        var min;
        var index;
        var aLen;
        var text;
        var value;
        /** @type {!Array} */
        var a = [type, str];
        /** @type {number} */
        var start = 0;
        /** @type {string} */
        var result = "";
        /** @type {number} */
        var color = 0;
        /** @type {number} */
        a.start = type;
        if (filter) {
          filter(a);
          type = a[0];
          str = a[1];
        }
        /** @type {number} */
        a.length = 0;
        args = type.match(urlexp) || [];
        actions = str.match(urlexp) || [];
        if (pt) {
          /** @type {null} */
          pt._next = null;
          /** @type {number} */
          pt.blob = 1;
          a._firstPT = a._applyPT = pt;
        }
        aLen = actions.length;
        /** @type {number} */
        index = 0;
        for (; aLen > index; index++) {
          value = actions[index];
          text = str.substr(start, str.indexOf(value, start) - start);
          /** @type {string} */
          result = result + (text || !index ? text : ",");
          start = start + text.length;
          if (color) {
            /** @type {number} */
            color = (color + 1) % 5;
          } else {
            if ("rgba(" === text.substr(-5)) {
              /** @type {number} */
              color = 1;
            }
          }
          if (value === args[index] || args.length <= index) {
            /** @type {string} */
            result = result + value;
          } else {
            if (result) {
              a.push(result);
              /** @type {string} */
              result = "";
            }
            /** @type {number} */
            min = parseFloat(args[index]);
            a.push(min);
            a._firstPT = {
              _next : a._firstPT,
              t : a,
              p : a.length - 1,
              s : min,
              c : ("=" === value.charAt(1) ? parseInt(value.charAt(0) + "1", 10) * parseFloat(value.substr(2)) : parseFloat(value) - min) || 0,
              f : 0,
              m : color && 4 > color ? Math.round : 0
            };
          }
          start = start + value.length;
        }
        return result = result + str.substr(start), result && a.push(result), a.setRatio = _setRatio, a;
      };
      /**
       * @param {string} target
       * @param {string} prop
       * @param {string} name
       * @param {string} end
       * @param {string} n
       * @param {number} a
       * @param {boolean} funcParam
       * @param {!Function} stringFilter
       * @param {number} index
       * @return {?}
       */
      var _addPropTween = function(target, prop, name, end, n, a, funcParam, stringFilter, index) {
        if ("function" == typeof end) {
          end = end(index || 0, target);
        }
        var blob;
        var getterName;
        var s = "get" === name ? target[prop] : name;
        /** @type {string} */
        var type = typeof target[prop];
        /** @type {boolean} */
        var face32bit = "string" == typeof end && "=" === end.charAt(1);
        var pt = {
          t : target,
          p : prop,
          s : s,
          f : "function" === type,
          pg : 0,
          n : n || prop,
          m : a ? "function" == typeof a ? a : Math.round : 0,
          pr : 0,
          c : face32bit ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : parseFloat(end) - s || 0
        };
        return "number" !== type && ("function" === type && "get" === name && (getterName = prop.indexOf("set") || "function" != typeof target["get" + prop.substr(3)] ? prop : "get" + prop.substr(3), pt.s = s = funcParam ? target[getterName](funcParam) : target[getterName]()), "string" == typeof s && (funcParam || isNaN(s)) ? (pt.fp = funcParam, blob =
        _blobDif(s, end, stringFilter || TweenLite.defaultStringFilter, pt), pt = {
          t : blob,
          p : "setRatio",
          s : 0,
          c : 1,
          f : 2,
          pg : 0,
          n : n || prop,
          pr : 0,
          m : 0
        }) : face32bit || (pt.s = parseFloat(s), pt.c = parseFloat(end) - pt.s || 0)), pt.c ? ((pt._next = this._firstPT) && (pt._next._prev = pt), this._firstPT = pt, pt) : void 0;
      };
      var _internals = TweenLite._internals = {
        isArray : _isArray,
        isSelector : _isSelector,
        lazyTweens : _lazyTweens,
        blobDif : _blobDif
      };
      var _plugins = TweenLite._plugins = {};
      var _tweenLookup = _internals.tweenLookup = {};
      /** @type {number} */
      var _tweenLookupNum = 0;
      var j = _internals.reservedProps = {
        ease : 1,
        delay : 1,
        overwrite : 1,
        onComplete : 1,
        onCompleteParams : 1,
        onCompleteScope : 1,
        useFrames : 1,
        runBackwards : 1,
        startAt : 1,
        onUpdate : 1,
        onUpdateParams : 1,
        onUpdateScope : 1,
        onStart : 1,
        onStartParams : 1,
        onStartScope : 1,
        onReverseComplete : 1,
        onReverseCompleteParams : 1,
        onReverseCompleteScope : 1,
        onRepeat : 1,
        onRepeatParams : 1,
        onRepeatScope : 1,
        easeParams : 1,
        yoyo : 1,
        immediateRender : 1,
        repeat : 1,
        repeatDelay : 1,
        data : 1,
        paused : 1,
        reversed : 1,
        autoCSS : 1,
        lazy : 1,
        onOverwrite : 1,
        callbackScope : 1,
        stringFilter : 1,
        id : 1
      };
      var _overwriteLookup = {
        none : 0,
        all : 1,
        auto : 2,
        concurrent : 3,
        allOnStart : 4,
        preexisting : 5,
        true : 1,
        false : 0
      };
      var _rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline;
      var _rootTimeline = Animation._rootTimeline = new SimpleTimeline;
      /** @type {number} */
      var _nextGCFrame = 30;
      /** @type {function(): undefined} */
      var _lazyRender = _internals.lazyRender = function() {
        var tween;
        /** @type {number} */
        var i = _lazyTweens.length;
        _lazyLookup = {};
        for (; --i > -1;) {
          tween = _lazyTweens[i];
          if (tween && tween._lazy !== false) {
            tween.render(tween._lazy[0], tween._lazy[1], true);
            /** @type {boolean} */
            tween._lazy = false;
          }
        }
        /** @type {number} */
        _lazyTweens.length = 0;
      };
      _rootTimeline._startTime = _ticker.time;
      _rootFramesTimeline._startTime = _ticker.frame;
      /** @type {boolean} */
      _rootTimeline._active = _rootFramesTimeline._active = true;
      setTimeout(_lazyRender, 1);
      /** @type {function(): undefined} */
      Animation._updateRoot = TweenLite.render = function() {
        var i;
        var a;
        var p;
        if (_lazyTweens.length && _lazyRender(), _rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false), _rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false), _lazyTweens.length && _lazyRender(), _ticker.frame >= _nextGCFrame) {
          _nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
          for (p in _tweenLookup) {
            a = _tweenLookup[p].tweens;
            i = a.length;
            for (; --i > -1;) {
              if (a[i]._gc) {
                a.splice(i, 1);
              }
            }
            if (0 === a.length) {
              delete _tweenLookup[p];
            }
          }
          if (p = _rootTimeline._first, (!p || p._paused) && TweenLite.autoSleep && !_rootFramesTimeline._first && 1 === _ticker._listeners.tick.length) {
            for (; p && p._paused;) {
              p = p._next;
            }
            if (!p) {
              _ticker.sleep();
            }
          }
        }
      };
      _ticker.addEventListener("tick", Animation._updateRoot);
      /**
       * @param {!Object} target
       * @param {?} tween
       * @param {boolean} scrub
       * @return {?}
       */
      var _register = function(target, tween, scrub) {
        var a;
        var i;
        var id = target._gsTweenID;
        if (_tweenLookup[id || (target._gsTweenID = id = "t" + _tweenLookupNum++)] || (_tweenLookup[id] = {
          target : target,
          tweens : []
        }), tween && (a = _tweenLookup[id].tweens, a[i = a.length] = tween, scrub)) {
          for (; --i > -1;) {
            if (a[i] === tween) {
              a.splice(i, 1);
            }
          }
        }
        return _tweenLookup[id].tweens;
      };
      /**
       * @param {!Object} target
       * @param {string} value
       * @param {string} key
       * @param {!Object} undefined
       * @return {?}
       */
      var _onOverwrite = function(target, value, key, undefined) {
        var node;
        var result;
        var func = target.vars.onOverwrite;
        return func && (node = func(target, value, key, undefined)), func = TweenLite.onOverwrite, func && (result = func(target, value, key, undefined)), node !== false && result !== false;
      };
      /**
       * @param {!Object} target
       * @param {!Object} tween
       * @param {string} props
       * @param {number} mode
       * @param {!Object} siblings
       * @return {?}
       */
      var _applyOverwrite = function(target, tween, props, mode, siblings) {
        var i;
        var changed;
        var curTween;
        var l;
        if (1 === mode || mode >= 4) {
          l = siblings.length;
          /** @type {number} */
          i = 0;
          for (; l > i; i++) {
            if ((curTween = siblings[i]) !== tween) {
              if (!curTween._gc) {
                if (curTween._kill(null, target, tween)) {
                  /** @type {boolean} */
                  changed = true;
                }
              }
            } else {
              if (5 === mode) {
                break;
              }
            }
          }
          return changed;
        }
        var globalStart;
        var startTime = tween._startTime + _tinyNum;
        /** @type {!Array} */
        var overlaps = [];
        /** @type {number} */
        var oCount = 0;
        /** @type {boolean} */
        var zeroDur = 0 === tween._duration;
        i = siblings.length;
        for (; --i > -1;) {
          if (!((curTween = siblings[i]) === tween || curTween._gc || curTween._paused)) {
            if (curTween._timeline !== tween._timeline) {
              globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
              if (0 === _checkOverlap(curTween, globalStart, zeroDur)) {
                overlaps[oCount++] = curTween;
              }
            } else {
              if (curTween._startTime <= startTime && curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) {
                if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 2E-10)) {
                  overlaps[oCount++] = curTween;
                }
              }
            }
          }
        }
        /** @type {number} */
        i = oCount;
        for (; --i > -1;) {
          if (curTween = overlaps[i], 2 === mode && curTween._kill(props, target, tween) && (changed = true), 2 !== mode || !curTween._firstPT && curTween._initted) {
            if (2 !== mode && !_onOverwrite(curTween, tween)) {
              continue;
            }
            if (curTween._enabled(false, false)) {
              /** @type {boolean} */
              changed = true;
            }
          }
        }
        return changed;
      };
      /**
       * @param {!Object} tween
       * @param {number} reference
       * @param {boolean} zeroDur
       * @return {?}
       */
      var _checkOverlap = function(tween, reference, zeroDur) {
        var tl = tween._timeline;
        var ts = tl._timeScale;
        var t = tween._startTime;
        for (; tl._timeline;) {
          if (t = t + tl._startTime, ts = ts * tl._timeScale, tl._paused) {
            return -100;
          }
          tl = tl._timeline;
        }
        return t = t / ts, t > reference ? t - reference : zeroDur && t === reference || !tween._initted && 2 * _tinyNum > t - reference ? _tinyNum : (t = t + tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum ? 0 : t - reference - _tinyNum;
      };
      /**
       * @return {undefined}
       */
      p._init = function() {
        var i;
        var initPlugins;
        var pt;
        var p;
        var startVars;
        var l;
        var v = this.vars;
        var op = this._overwrittenProps;
        var window = this._duration;
        /** @type {boolean} */
        var immediate = !!v.immediateRender;
        var ease = v.ease;
        if (v.startAt) {
          if (this._startAt) {
            this._startAt.render(-1, true);
            this._startAt.kill();
          }
          startVars = {};
          for (p in v.startAt) {
            startVars[p] = v.startAt[p];
          }
          if (startVars.overwrite = false, startVars.immediateRender = true, startVars.lazy = immediate && v.lazy !== false, startVars.startAt = startVars.delay = null, this._startAt = TweenLite.to(this.target, 0, startVars), immediate) {
            if (this._time > 0) {
              /** @type {null} */
              this._startAt = null;
            } else {
              if (0 !== window) {
                return;
              }
            }
          }
        } else {
          if (v.runBackwards && 0 !== window) {
            if (this._startAt) {
              this._startAt.render(-1, true);
              this._startAt.kill();
              /** @type {null} */
              this._startAt = null;
            } else {
              if (0 !== this._time) {
                /** @type {boolean} */
                immediate = false;
              }
              pt = {};
              for (p in v) {
                if (!(j[p] && "autoCSS" !== p)) {
                  pt[p] = v[p];
                }
              }
              if (pt.overwrite = 0, pt.data = "isFromStart", pt.lazy = immediate && v.lazy !== false, pt.immediateRender = immediate, this._startAt = TweenLite.to(this.target, 0, pt), immediate) {
                if (0 === this._time) {
                  return;
                }
              } else {
                this._startAt._init();
                this._startAt._enabled(false);
                if (this.vars.immediateRender) {
                  /** @type {null} */
                  this._startAt = null;
                }
              }
            }
          }
        }
        if (this._ease = ease = ease ? ease instanceof Ease ? ease : "function" == typeof ease ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase : TweenLite.defaultEase, v.easeParams instanceof Array && ease.config && (this._ease = ease.config.apply(ease, v.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power,
        this._firstPT = null, this._targets) {
          l = this._targets.length;
          /** @type {number} */
          i = 0;
          for (; l > i; i++) {
            if (this._initProps(this._targets[i], this._propLookup[i] = {}, this._siblings[i], op ? op[i] : null, i)) {
              /** @type {boolean} */
              initPlugins = true;
            }
          }
        } else {
          initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
        }
        if (initPlugins && TweenLite._onPluginEvent("_onInitAllProps", this), op && (this._firstPT || "function" != typeof this.target && this._enabled(false, false)), v.runBackwards) {
          /** @type {null} */
          pt = this._firstPT;
          for (; pt;) {
            pt.s += pt.c;
            /** @type {number} */
            pt.c = -pt.c;
            pt = pt._next;
          }
        }
        this._onUpdate = v.onUpdate;
        /** @type {boolean} */
        this._initted = true;
      };
      /**
       * @param {!Object} target
       * @param {(Object|string)} propLookup
       * @param {!Object} siblings
       * @param {string} overwrittenProps
       * @param {number} index
       * @return {?}
       */
      p._initProps = function(target, propLookup, siblings, overwrittenProps, index) {
        var p;
        var i;
        var l;
        var plugin;
        var pt;
        var v;
        if (null == target) {
          return false;
        }
        if (_lazyLookup[target._gsTweenID]) {
          _lazyRender();
        }
        if (!this.vars.css) {
          if (target.style && target !== window && target.nodeType && _plugins.css && this.vars.autoCSS !== false) {
            _autoCSS(this.vars, target);
          }
        }
        for (p in this.vars) {
          if (v = this.vars[p], j[p]) {
            if (v && (v instanceof Array || v.push && _isArray(v)) && -1 !== v.join("").indexOf("{self}")) {
              this.vars[p] = v = this._swapSelfInParams(v, this);
            }
          } else {
            if (_plugins[p] && (plugin = new _plugins[p])._onInitTween(target, this.vars[p], this, index)) {
              this._firstPT = pt = {
                _next : this._firstPT,
                t : plugin,
                p : "setRatio",
                s : 0,
                c : 1,
                f : 1,
                n : p,
                pg : 1,
                pr : plugin._priority,
                m : 0
              };
              i = plugin._overwriteProps.length;
              for (; --i > -1;) {
                propLookup[plugin._overwriteProps[i]] = this._firstPT;
              }
              if (plugin._priority || plugin._onInitAllProps) {
                /** @type {boolean} */
                l = true;
              }
              if (plugin._onDisable || plugin._onEnable) {
                /** @type {boolean} */
                this._notifyPluginsOfEnabled = true;
              }
              if (pt._next) {
                pt._next._prev = pt;
              }
            } else {
              propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
            }
          }
        }
        return overwrittenProps && this._kill(overwrittenProps, target) ? this._initProps(target, propLookup, siblings, overwrittenProps, index) : this._overwrite > 1 && this._firstPT && siblings.length > 1 && _applyOverwrite(target, this, propLookup, this._overwrite, siblings) ? (this._kill(propLookup, target), this._initProps(target, propLookup, siblings, overwrittenProps, index)) : (this._firstPT && (this.vars.lazy !== false && this._duration ||
        this.vars.lazy && !this._duration) && (_lazyLookup[target._gsTweenID] = true), l);
      };
      /**
       * @param {number} time
       * @param {string} suppressEvents
       * @param {boolean} force
       * @return {?}
       */
      p.render = function(time, suppressEvents, force) {
        var isComplete;
        var callback;
        var pt;
        var rawPrevTime;
        var prevTime = this._time;
        var duration = this._duration;
        var prevRawPrevTime = this._rawPrevTime;
        if (time >= duration - 1E-7) {
          this._totalTime = this._time = duration;
          this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
          if (!this._reversed) {
            /** @type {boolean} */
            isComplete = true;
            /** @type {string} */
            callback = "onComplete";
            force = force || this._timeline.autoRemoveChildren;
          }
          if (0 === duration && (this._initted || !this.vars.lazy || force)) {
            if (this._startTime === this._timeline._duration) {
              /** @type {number} */
              time = 0;
            }
            if ((0 > prevRawPrevTime || 0 >= time && time >= -1E-7 || prevRawPrevTime === _tinyNum && "isPause" !== this.data) && prevRawPrevTime !== time) {
              /** @type {boolean} */
              force = true;
              if (prevRawPrevTime > _tinyNum) {
                /** @type {string} */
                callback = "onReverseComplete";
              }
            }
            this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum;
          }
        } else {
          if (1E-7 > time) {
            /** @type {number} */
            this._totalTime = this._time = 0;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
            if (0 !== prevTime || 0 === duration && prevRawPrevTime > 0) {
              /** @type {string} */
              callback = "onReverseComplete";
              isComplete = this._reversed;
            }
            if (0 > time) {
              /** @type {boolean} */
              this._active = false;
              if (0 === duration && (this._initted || !this.vars.lazy || force)) {
                if (prevRawPrevTime >= 0 && (prevRawPrevTime !== _tinyNum || "isPause" !== this.data)) {
                  /** @type {boolean} */
                  force = true;
                }
                this._rawPrevTime = rawPrevTime = !suppressEvents || time || prevRawPrevTime === time ? time : _tinyNum;
              }
            }
            if (!this._initted) {
              /** @type {boolean} */
              force = true;
            }
          } else {
            if (this._totalTime = this._time = time, this._easeType) {
              /** @type {number} */
              var r = time / duration;
              var type = this._easeType;
              var pow = this._easePower;
              if (1 === type || 3 === type && r >= .5) {
                /** @type {number} */
                r = 1 - r;
              }
              if (3 === type) {
                /** @type {number} */
                r = r * 2;
              }
              if (1 === pow) {
                /** @type {number} */
                r = r * r;
              } else {
                if (2 === pow) {
                  /** @type {number} */
                  r = r * (r * r);
                } else {
                  if (3 === pow) {
                    /** @type {number} */
                    r = r * (r * r * r);
                  } else {
                    if (4 === pow) {
                      /** @type {number} */
                      r = r * (r * r * r * r);
                    }
                  }
                }
              }
              if (1 === type) {
                /** @type {number} */
                this.ratio = 1 - r;
              } else {
                if (2 === type) {
                  /** @type {number} */
                  this.ratio = r;
                } else {
                  if (.5 > time / duration) {
                    /** @type {number} */
                    this.ratio = r / 2;
                  } else {
                    /** @type {number} */
                    this.ratio = 1 - r / 2;
                  }
                }
              }
            } else {
              this.ratio = this._ease.getRatio(time / duration);
            }
          }
        }
        if (this._time !== prevTime || force) {
          if (!this._initted) {
            if (this._init(), !this._initted || this._gc) {
              return;
            }
            if (!force && this._firstPT && (this.vars.lazy !== false && this._duration || this.vars.lazy && !this._duration)) {
              return this._time = this._totalTime = prevTime, this._rawPrevTime = prevRawPrevTime, _lazyTweens.push(this), void(this._lazy = [time, suppressEvents]);
            }
            if (this._time && !isComplete) {
              this.ratio = this._ease.getRatio(this._time / duration);
            } else {
              if (isComplete && this._ease._calcEnd) {
                this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1);
              }
            }
          }
          if (this._lazy !== false) {
            /** @type {boolean} */
            this._lazy = false;
          }
          if (!this._active) {
            if (!this._paused && this._time !== prevTime && time >= 0) {
              /** @type {boolean} */
              this._active = true;
            }
          }
          if (0 === prevTime) {
            if (this._startAt) {
              if (time >= 0) {
                this._startAt.render(time, suppressEvents, force);
              } else {
                if (!callback) {
                  /** @type {string} */
                  callback = "_dummyGS";
                }
              }
            }
            if (this.vars.onStart && (0 !== this._time || 0 === duration)) {
              if (!suppressEvents) {
                this._callback("onStart");
              }
            }
          }
          pt = this._firstPT;
          for (; pt;) {
            if (pt.f) {
              pt.t[pt.p](pt.c * this.ratio + pt.s);
            } else {
              pt.t[pt.p] = pt.c * this.ratio + pt.s;
            }
            pt = pt._next;
          }
          if (this._onUpdate) {
            if (0 > time && this._startAt && time !== -1E-4) {
              this._startAt.render(time, suppressEvents, force);
            }
            if (!suppressEvents) {
              if (this._time !== prevTime || isComplete || force) {
                this._callback("onUpdate");
              }
            }
          }
          if (callback && (!this._gc || force)) {
            if (0 > time && this._startAt && !this._onUpdate && time !== -1E-4) {
              this._startAt.render(time, suppressEvents, force);
            }
            if (isComplete) {
              if (this._timeline.autoRemoveChildren) {
                this._enabled(false, false);
              }
              /** @type {boolean} */
              this._active = false;
            }
            if (!suppressEvents && this.vars[callback]) {
              this._callback(callback);
            }
            if (0 === duration && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
              /** @type {number} */
              this._rawPrevTime = 0;
            }
          }
        }
      };
      /**
       * @param {string} vars
       * @param {!Object} target
       * @param {boolean} overwritingTween
       * @return {?}
       */
      p._kill = function(vars, target, overwritingTween) {
        if ("all" === vars && (vars = null), null == vars && (null == target || target === this.target)) {
          return this._lazy = false, this._enabled(false, false);
        }
        target = "string" != typeof target ? target || this._targets || this.target : TweenLite.selector(target) || target;
        var i;
        var overwrittenProps;
        var p;
        var pt;
        var propLookup;
        var changed;
        var killProps;
        var c;
        var killed;
        var f = overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline;
        if ((_isArray(target) || _isSelector(target)) && "number" != typeof target[0]) {
          i = target.length;
          for (; --i > -1;) {
            if (this._kill(vars, target[i], overwritingTween)) {
              /** @type {boolean} */
              changed = true;
            }
          }
        } else {
          if (this._targets) {
            i = this._targets.length;
            for (; --i > -1;) {
              if (target === this._targets[i]) {
                propLookup = this._propLookup[i] || {};
                this._overwrittenProps = this._overwrittenProps || [];
                overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
                break;
              }
            }
          } else {
            if (target !== this.target) {
              return false;
            }
            propLookup = this._propLookup;
            overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
          }
          if (propLookup) {
            if (killProps = vars || propLookup, c = vars !== overwrittenProps && "all" !== overwrittenProps && vars !== propLookup && ("object" != typeof vars || !vars._tempKill), overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
              for (p in killProps) {
                if (propLookup[p]) {
                  if (!killed) {
                    /** @type {!Array} */
                    killed = [];
                  }
                  killed.push(p);
                }
              }
              if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) {
                return false;
              }
            }
            for (p in killProps) {
              if (pt = propLookup[p]) {
                if (f) {
                  if (pt.f) {
                    pt.t[pt.p](pt.s);
                  } else {
                    pt.t[pt.p] = pt.s;
                  }
                  /** @type {boolean} */
                  changed = true;
                }
                if (pt.pg && pt.t._kill(killProps)) {
                  /** @type {boolean} */
                  changed = true;
                }
                if (!(pt.pg && 0 !== pt.t._overwriteProps.length)) {
                  if (pt._prev) {
                    pt._prev._next = pt._next;
                  } else {
                    if (pt === this._firstPT) {
                      this._firstPT = pt._next;
                    }
                  }
                  if (pt._next) {
                    pt._next._prev = pt._prev;
                  }
                  /** @type {null} */
                  pt._next = pt._prev = null;
                }
                delete propLookup[p];
              }
              if (c) {
                /** @type {number} */
                overwrittenProps[p] = 1;
              }
            }
            if (!this._firstPT && this._initted) {
              this._enabled(false, false);
            }
          }
        }
        return changed;
      };
      /**
       * @return {?}
       */
      p.invalidate = function() {
        return this._notifyPluginsOfEnabled && TweenLite._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = false, this._propLookup = this._targets ? {} : [], Animation.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_tinyNum, this.render(Math.min(0, -this._delay))), this;
      };
      /**
       * @param {string} enabled
       * @param {boolean} node
       * @return {?}
       */
      p._enabled = function(enabled, node) {
        if (cvalue || _ticker.wake(), enabled && this._gc) {
          var i;
          var targets = this._targets;
          if (targets) {
            i = targets.length;
            for (; --i > -1;) {
              this._siblings[i] = _register(targets[i], this, true);
            }
          } else {
            this._siblings = _register(this.target, this, true);
          }
        }
        return Animation.prototype._enabled.call(this, enabled, node), !(!this._notifyPluginsOfEnabled || !this._firstPT) && TweenLite._onPluginEvent(enabled ? "_onEnable" : "_onDisable", this);
      };
      /**
       * @param {string} name
       * @param {number} duration
       * @param {!Object} vars
       * @return {?}
       */
      TweenLite.to = function(name, duration, vars) {
        return new TweenLite(name, duration, vars);
      };
      /**
       * @param {string} name
       * @param {number} duration
       * @param {!Object} vars
       * @return {?}
       */
      TweenLite.from = function(name, duration, vars) {
        return vars.runBackwards = true, vars.immediateRender = 0 != vars.immediateRender, new TweenLite(name, duration, vars);
      };
      /**
       * @param {!Object} target
       * @param {string} duration
       * @param {number} fromVars
       * @param {!Object} toVars
       * @return {?}
       */
      TweenLite.fromTo = function(target, duration, fromVars, toVars) {
        return toVars.startAt = fromVars, toVars.immediateRender = 0 != toVars.immediateRender && 0 != fromVars.immediateRender, new TweenLite(target, duration, toVars);
      };
      /**
       * @param {number} delay
       * @param {string} callback
       * @param {!Object} params
       * @param {!Function} scope
       * @param {?} useFrames
       * @return {?}
       */
      TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
        return new TweenLite(callback, 0, {
          delay : delay,
          onComplete : callback,
          onCompleteParams : params,
          callbackScope : scope,
          onReverseComplete : callback,
          onReverseCompleteParams : params,
          immediateRender : false,
          lazy : false,
          useFrames : useFrames,
          overwrite : 0
        });
      };
      /**
       * @param {!Object} type
       * @param {!Object} data
       * @return {?}
       */
      TweenLite.set = function(type, data) {
        return new TweenLite(type, 0, data);
      };
      /**
       * @param {!Object} target
       * @param {boolean} onlyActive
       * @return {?}
       */
      TweenLite.getTweensOf = function(target, onlyActive) {
        if (null == target) {
          return [];
        }
        target = "string" != typeof target ? target : TweenLite.selector(target) || target;
        var i;
        var a;
        var j;
        var t;
        if ((_isArray(target) || _isSelector(target)) && "number" != typeof target[0]) {
          i = target.length;
          /** @type {!Array} */
          a = [];
          for (; --i > -1;) {
            /** @type {!Array<?>} */
            a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
          }
          /** @type {number} */
          i = a.length;
          for (; --i > -1;) {
            t = a[i];
            /** @type {number} */
            j = i;
            for (; --j > -1;) {
              if (t === a[j]) {
                a.splice(i, 1);
              }
            }
          }
        } else {
          a = _register(target).concat();
          i = a.length;
          for (; --i > -1;) {
            if (a[i]._gc || onlyActive && !a[i].isActive()) {
              a.splice(i, 1);
            }
          }
        }
        return a;
      };
      /** @type {function(!Object, ?, string): undefined} */
      TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
        if ("object" == typeof onlyActive) {
          vars = onlyActive;
          /** @type {boolean} */
          onlyActive = false;
        }
        var a = TweenLite.getTweensOf(target, onlyActive);
        var i = a.length;
        for (; --i > -1;) {
          a[i]._kill(vars, target);
        }
      };
      var TweenPlugin = _class("plugins.TweenPlugin", function(indicesCat, priority) {
        this._overwriteProps = (indicesCat || "").split(",");
        this._propName = this._overwriteProps[0];
        this._priority = priority || 0;
        this._super = TweenPlugin.prototype;
      }, true);
      if (p = TweenPlugin.prototype, TweenPlugin.version = "1.19.0", TweenPlugin.API = 2, p._firstPT = null, p._addTween = _addPropTween, p.setRatio = _setRatio, p._kill = function(lookup) {
        var i;
        var a = this._overwriteProps;
        var pt = this._firstPT;
        if (null != lookup[this._propName]) {
          /** @type {!Array} */
          this._overwriteProps = [];
        } else {
          i = a.length;
          for (; --i > -1;) {
            if (null != lookup[a[i]]) {
              a.splice(i, 1);
            }
          }
        }
        for (; pt;) {
          if (null != lookup[pt.n]) {
            if (pt._next) {
              pt._next._prev = pt._prev;
            }
            if (pt._prev) {
              pt._prev._next = pt._next;
              /** @type {null} */
              pt._prev = null;
            } else {
              if (this._firstPT === pt) {
                this._firstPT = pt._next;
              }
            }
          }
          pt = pt._next;
        }
        return false;
      }, p._mod = p._roundProps = function(lookup) {
        var val;
        var pt = this._firstPT;
        for (; pt;) {
          val = lookup[this._propName] || null != pt.n && lookup[pt.n.split(this._propName + "_").join("")];
          if (val && "function" == typeof val) {
            if (2 === pt.f) {
              /** @type {!Function} */
              pt.t._applyPT.m = val;
            } else {
              /** @type {!Function} */
              pt.m = val;
            }
          }
          pt = pt._next;
        }
      }, TweenLite._onPluginEvent = function(type, tween) {
        var changed;
        var pt2;
        var first;
        var last;
        var next;
        var pt = tween._firstPT;
        if ("_onInitAllProps" === type) {
          for (; pt;) {
            next = pt._next;
            pt2 = first;
            for (; pt2 && pt2.pr > pt.pr;) {
              pt2 = pt2._next;
            }
            if (pt._prev = pt2 ? pt2._prev : last) {
              pt._prev._next = pt;
            } else {
              first = pt;
            }
            if (pt._next = pt2) {
              pt2._prev = pt;
            } else {
              last = pt;
            }
            pt = next;
          }
          pt = tween._firstPT = first;
        }
        for (; pt;) {
          if (pt.pg && "function" == typeof pt.t[type] && pt.t[type]()) {
            /** @type {boolean} */
            changed = true;
          }
          pt = pt._next;
        }
        return changed;
      }, TweenPlugin.activate = function(plugins) {
        var i = plugins.length;
        for (; --i > -1;) {
          if (plugins[i].API === TweenPlugin.API) {
            _plugins[(new plugins[i])._propName] = plugins[i];
          }
        }
        return true;
      }, _gsDefine.plugin = function(options) {
        if (!(options && options.propName && options.init && options.API)) {
          throw "illegal plugin definition.";
        }
        var i;
        var propName = options.propName;
        var priority = options.priority || 0;
        var overwriteProps = options.overwriteProps;
        var map = {
          init : "_onInitTween",
          set : "setRatio",
          kill : "_kill",
          round : "_mod",
          mod : "_mod",
          initAll : "_onInitAllProps"
        };
        var Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin", function() {
          TweenPlugin.call(this, propName, priority);
          this._overwriteProps = overwriteProps || [];
        }, options.global === true);
        var p = Plugin.prototype = new TweenPlugin(propName);
        p.constructor = Plugin;
        Plugin.API = options.API;
        for (i in map) {
          if ("function" == typeof options[i]) {
            p[map[i]] = options[i];
          }
        }
        return Plugin.version = options.version, TweenPlugin.activate([Plugin]), Plugin;
      }, a = window._gsQueue) {
        /** @type {number} */
        i = 0;
        for (; i < a.length; i++) {
          a[i]();
        }
        for (p in _defLookup) {
          if (!_defLookup[p].func) {
            window.console.log("GSAP encountered missing dependency: " + p);
          }
        }
      }
      /** @type {boolean} */
      cvalue = false;
    }
  })("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
  !function(global, e) {
    if ("function" == typeof define && define.amd) {
      define(e);
    } else {
      if ("object" == typeof exports) {
        module.exports = e();
      } else {
        global.ScrollMagic = e();
      }
    }
  }(this, function() {
    /**
     * @return {undefined}
     */
    var ns = function() {
    };
    /** @type {string} */
    ns.version = "2.0.5";
    window.addEventListener("mousewheel", function() {
    });
    /** @type {string} */
    var prop = "data-scrollmagic-pin-spacer";
    /**
     * @param {!Object} name
     * @return {?}
     */
    ns.Controller = function(name) {
      var fn;
      var rebootTimer;
      /** @type {string} */
      var a = "ScrollMagic.Controller";
      /** @type {string} */
      var up = "FORWARD";
      /** @type {string} */
      var down = "REVERSE";
      /** @type {string} */
      var forward = "PAUSED";
      var opts = conf.defaults;
      var ScrollMagic = this;
      var options = $.extend({}, opts, name);
      /** @type {!Array} */
      var _sceneObjects = [];
      /** @type {boolean} */
      var data = false;
      /** @type {number} */
      var expandy = 0;
      /** @type {string} */
      var direction = forward;
      /** @type {boolean} */
      var isDocument = true;
      /** @type {number} */
      var params = 0;
      /** @type {boolean} */
      var type = true;
      /**
       * @return {undefined}
       */
      var render = function() {
        var property;
        for (property in options) {
          if (!opts.hasOwnProperty(property)) {
            delete options[property];
          }
        }
        if (options.container = $.get.elements(options.container)[0], !options.container) {
          throw a + " init failed.";
        }
        /** @type {boolean} */
        isDocument = options.container === window || options.container === document.body || !document.body.contains(options.container);
        if (isDocument) {
          /** @type {!Window} */
          options.container = window;
        }
        params = handler();
        options.container.addEventListener("resize", resize);
        options.container.addEventListener("scroll", resize);
        /** @type {number} */
        options.refreshInterval = parseInt(options.refreshInterval) || opts.refreshInterval;
        start();
      };
      /**
       * @return {undefined}
       */
      var start = function() {
        if (options.refreshInterval > 0) {
          rebootTimer = window.setTimeout(onload, options.refreshInterval);
        }
      };
      /**
       * @return {?}
       */
      var getScrollPos = function() {
        return options.vertical ? $.get.scrollTop(options.container) : $.get.scrollLeft(options.container);
      };
      /**
       * @return {?}
       */
      var handler = function() {
        return options.vertical ? $.get.height(options.container) : $.get.width(options.container);
      };
      /** @type {function(number): undefined} */
      var f = this._setScrollPos = function(val) {
        if (options.vertical) {
          if (isDocument) {
            window.scrollTo($.get.scrollLeft(), val);
          } else {
            /** @type {number} */
            options.container.scrollTop = val;
          }
        } else {
          if (isDocument) {
            window.scrollTo(val, $.get.scrollTop());
          } else {
            /** @type {number} */
            options.container.scrollLeft = val;
          }
        }
      };
      /**
       * @return {undefined}
       */
      var load = function() {
        if (type && data) {
          var colors = $.type.Array(data) ? data : _sceneObjects.slice(0);
          /** @type {boolean} */
          data = false;
          var befy = expandy;
          expandy = ScrollMagic.scrollPos();
          /** @type {number} */
          var dy = expandy - befy;
          if (0 !== dy) {
            /** @type {string} */
            direction = dy > 0 ? up : down;
          }
          if (direction === down) {
            colors.reverse();
          }
          colors.forEach(function(VTodoService) {
            VTodoService.update(true);
          });
        }
      };
      /**
       * @return {undefined}
       */
      var update = function() {
        fn = $.rAF(load);
      };
      /**
       * @param {!Object} attr
       * @return {undefined}
       */
      var resize = function(attr) {
        if ("resize" == attr.type) {
          params = handler();
          /** @type {string} */
          direction = forward;
        }
        if (data !== true) {
          /** @type {boolean} */
          data = true;
          update();
        }
      };
      /**
       * @return {undefined}
       */
      var onload = function() {
        if (!isDocument && params != handler()) {
          var event;
          try {
            /** @type {!Event} */
            event = new Event("resize", {
              bubbles : false,
              cancelable : false
            });
          } catch (e) {
            /** @type {(Event|null)} */
            event = document.createEvent("Event");
            event.initEvent("resize", false, false);
          }
          options.container.dispatchEvent(event);
        }
        _sceneObjects.forEach(function(latestService) {
          latestService.refresh();
        });
        start();
      };
      this._options = options;
      /**
       * @param {string} ScrollScenesArray
       * @return {?}
       */
      var sortScenes = function(ScrollScenesArray) {
        if (ScrollScenesArray.length <= 1) {
          return ScrollScenesArray;
        }
        var paramsWithDefault = ScrollScenesArray.slice(0);
        return paramsWithDefault.sort(function(options, $this) {
          return options.scrollOffset() > $this.scrollOffset() ? 1 : -1;
        }), paramsWithDefault;
      };
      return this.addScene = function(object) {
        if ($.type.Array(object)) {
          object.forEach(function(scene) {
            ScrollMagic.addScene(scene);
          });
        } else {
          if (object instanceof ns.Scene) {
            if (object.controller() !== ScrollMagic) {
              object.addTo(ScrollMagic);
            } else {
              if (_sceneObjects.indexOf(object) < 0) {
                _sceneObjects.push(object);
                _sceneObjects = sortScenes(_sceneObjects);
                object.on("shift.controller_sort", function() {
                  _sceneObjects = sortScenes(_sceneObjects);
                });
                var name;
                for (name in options.globalSceneOptions) {
                  if (object[name]) {
                    object[name].call(object, options.globalSceneOptions[name]);
                  }
                }
              }
            }
          }
        }
        return ScrollMagic;
      }, this.removeScene = function(object) {
        if ($.type.Array(object)) {
          object.forEach(function(scene) {
            ScrollMagic.removeScene(scene);
          });
        } else {
          var index = _sceneObjects.indexOf(object);
          if (index > -1) {
            object.off("shift.controller_sort");
            _sceneObjects.splice(index, 1);
            object.remove();
          }
        }
        return ScrollMagic;
      }, this.updateScene = function(object, immediately) {
        return $.type.Array(object) ? object.forEach(function(scene) {
          ScrollMagic.updateScene(scene, immediately);
        }) : immediately ? object.update(true) : data !== true && object instanceof ns.Scene && (data = data || [], -1 == data.indexOf(object) && data.push(object), data = sortScenes(data), update()), ScrollMagic;
      }, this.update = function(method) {
        return resize({
          type : "resize"
        }), method && load(), ScrollMagic;
      }, this.scrollTo = function(a, val) {
        if ($.type.Number(a)) {
          f.call(options.container, a, val);
        } else {
          if (a instanceof ns.Scene) {
            if (a.controller() === ScrollMagic) {
              ScrollMagic.scrollTo(a.scrollOffset(), val);
            }
          } else {
            if ($.type.Function(a)) {
              /** @type {!Object} */
              f = a;
            } else {
              var el = $.get.elements(a)[0];
              if (el) {
                for (; el.parentNode.hasAttribute(prop);) {
                  el = el.parentNode;
                }
                /** @type {string} */
                var prop = options.vertical ? "top" : "left";
                var b = $.get.offset(options.container);
                var a = $.get.offset(el);
                if (!isDocument) {
                  b[prop] -= ScrollMagic.scrollPos();
                }
                ScrollMagic.scrollTo(a[prop] - b[prop], val);
              }
            }
          }
        }
        return ScrollMagic;
      }, this.scrollPos = function(newScrollPos) {
        return arguments.length ? ($.type.Function(newScrollPos) && (getScrollPos = newScrollPos), ScrollMagic) : getScrollPos.call(ScrollMagic);
      }, this.info = function(about) {
        var values = {
          size : params,
          vertical : options.vertical,
          scrollPos : expandy,
          scrollDirection : direction,
          container : options.container,
          isDocument : isDocument
        };
        return arguments.length ? void 0 !== values[about] ? values[about] : void 0 : values;
      }, this.loglevel = function() {
        return ScrollMagic;
      }, this.enabled = function(bool) {
        return arguments.length ? (type != bool && (type = !!bool, ScrollMagic.updateScene(_sceneObjects, true)), ScrollMagic) : type;
      }, this.destroy = function(target) {
        window.clearTimeout(rebootTimer);
        var i = _sceneObjects.length;
        for (; i--;) {
          _sceneObjects[i].destroy(target);
        }
        return options.container.removeEventListener("resize", resize), options.container.removeEventListener("scroll", resize), $.cAF(fn), null;
      }, render(), ScrollMagic;
    };
    var conf = {
      defaults : {
        container : window,
        vertical : true,
        globalSceneOptions : {},
        loglevel : 2,
        refreshInterval : 100
      }
    };
    /**
     * @param {string} name
     * @param {!Object} type
     * @return {undefined}
     */
    ns.Controller.addOption = function(name, type) {
      /** @type {!Object} */
      conf.defaults[name] = type;
    };
    /**
     * @param {!Function} name
     * @return {undefined}
     */
    ns.Controller.extend = function(name) {
      var i = this;
      /**
       * @return {?}
       */
      ns.Controller = function() {
        return i.apply(this, arguments), this.$super = $.extend({}, this), name.apply(this, arguments) || this;
      };
      $.extend(ns.Controller, i);
      ns.Controller.prototype = i.prototype;
      /** @type {function(): ?} */
      ns.Controller.prototype.constructor = ns.Controller;
    };
    /**
     * @param {!Object} name
     * @return {?}
     */
    ns.Scene = function(name) {
      var _durationUpdateMethod;
      var _parent;
      /** @type {string} */
      var BEFORE = "BEFORE";
      /** @type {string} */
      var DURING = "DURING";
      /** @type {string} */
      var AFTER = "AFTER";
      var defaults = options.defaults;
      var ScrollScene = this;
      var _options = $.extend({}, defaults, name);
      /** @type {string} */
      var _state = BEFORE;
      /** @type {number} */
      var _progress = 0;
      var _scrollOffset = {
        start : 0,
        end : 0
      };
      /** @type {number} */
      var _triggerPos = 0;
      /** @type {boolean} */
      var type = true;
      /**
       * @return {undefined}
       */
      var _init = function() {
        var name;
        for (name in _options) {
          if (!defaults.hasOwnProperty(name)) {
            delete _options[name];
          }
        }
        var option;
        for (option in defaults) {
          add(option);
        }
        on();
      };
      var data = {};
      /**
       * @param {string} type
       * @param {!Object} fn
       * @return {?}
       */
      this.on = function(type, fn) {
        return $.type.Function(fn) && (type = type.trim().split(" "), type.forEach(function(clusterShardData) {
          var pathParts = clusterShardData.split(".");
          var name = pathParts[0];
          var namespace = pathParts[1];
          if ("*" != name) {
            if (!data[name]) {
              /** @type {!Array} */
              data[name] = [];
            }
            data[name].push({
              namespace : namespace || "",
              callback : fn
            });
          }
        })), ScrollScene;
      };
      /**
       * @param {!Object} type
       * @param {!Object} name
       * @return {?}
       */
      this.off = function(type, name) {
        return type ? (type = type.trim().split(" "), type.forEach(function(clusterShardData) {
          var values = clusterShardData.split(".");
          var key = values[0];
          var a = values[1] || "";
          /** @type {!Array} */
          var pipelets = "*" === key ? Object.keys(data) : [key];
          pipelets.forEach(function(unbracketed) {
            var o = data[unbracketed] || [];
            var i = o.length;
            for (; i--;) {
              var s = o[i];
              if (!(!s || a !== s.namespace && "*" !== a || name && name != s.callback)) {
                o.splice(i, 1);
              }
            }
            if (!o.length) {
              delete data[unbracketed];
            }
          });
        }), ScrollScene) : ScrollScene;
      };
      /**
       * @param {string} event
       * @param {!Object} index
       * @return {?}
       */
      this.trigger = function(event, index) {
        if (event) {
          var na = event.trim().split(".");
          var name = na[0];
          var el = na[1];
          var buffer = data[name];
          if (buffer) {
            buffer.forEach(function(e) {
              if (!(el && el !== e.namespace)) {
                e.callback.call(ScrollScene, new ns.Event(name, e.namespace, ScrollScene, index));
              }
            });
          }
        }
        return ScrollScene;
      };
      ScrollScene.on("change.internal", function(_arg) {
        if ("loglevel" !== _arg.what && "tweenChanges" !== _arg.what) {
          if ("triggerElement" === _arg.what) {
            updateTriggerElementPosition();
          } else {
            if ("reverse" === _arg.what) {
              ScrollScene.update();
            }
          }
        }
      }).on("shift.internal", function() {
        updateScrollOffset();
        ScrollScene.update();
      });
      /**
       * @param {?} controller
       * @return {?}
       */
      this.addTo = function(controller) {
        return controller instanceof ns.Controller && _parent != controller && (_parent && _parent.removeScene(ScrollScene), _parent = controller, on(), update(true), updateTriggerElementPosition(true), updateScrollOffset(), _parent.info("container").addEventListener("resize", fn), controller.addScene(ScrollScene), ScrollScene.trigger("add", {
          controller : _parent
        }), ScrollScene.update()), ScrollScene;
      };
      /**
       * @param {?} bool
       * @return {?}
       */
      this.enabled = function(bool) {
        return arguments.length ? (type != bool && (type = !!bool, ScrollScene.update(true)), ScrollScene) : type;
      };
      /**
       * @return {?}
       */
      this.remove = function() {
        if (_parent) {
          _parent.info("container").removeEventListener("resize", fn);
          var tmpParent = _parent;
          _parent = void 0;
          tmpParent.removeScene(ScrollScene);
          ScrollScene.trigger("remove");
        }
        return ScrollScene;
      };
      /**
       * @param {boolean} p
       * @return {?}
       */
      this.destroy = function(p) {
        return ScrollScene.trigger("destroy", {
          reset : p
        }), ScrollScene.remove(), ScrollScene.off("*.*"), null;
      };
      /**
       * @param {?} t
       * @return {?}
       */
      this.update = function(t) {
        if (_parent) {
          if (t) {
            if (_parent.enabled() && type) {
              var progress;
              var scrollPos = _parent.info("scrollPos");
              /** @type {number} */
              progress = _options.duration > 0 ? (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start) : scrollPos >= _scrollOffset.start ? 1 : 0;
              ScrollScene.trigger("update", {
                startPos : _scrollOffset.start,
                endPos : _scrollOffset.end,
                scrollPos : scrollPos
              });
              ScrollScene.progress(progress);
            } else {
              if (el && _state === DURING) {
                updatePinState(true);
              }
            }
          } else {
            _parent.updateScene(ScrollScene, false);
          }
        }
        return ScrollScene;
      };
      /**
       * @return {?}
       */
      this.refresh = function() {
        return update(), updateTriggerElementPosition(), ScrollScene;
      };
      /**
       * @param {number} progress
       * @return {?}
       */
      this.progress = function(progress) {
        if (arguments.length) {
          /** @type {boolean} */
          var doUpdate = false;
          var oldState = _state;
          var scrollDirection = _parent ? _parent.info("scrollDirection") : "PAUSED";
          var r = _options.reverse || progress >= _progress;
          if (0 === _options.duration ? (doUpdate = _progress != progress, _progress = 1 > progress && r ? 0 : 1, _state = 0 === _progress ? BEFORE : DURING) : 0 > progress && _state !== BEFORE && r ? (_progress = 0, _state = BEFORE, doUpdate = true) : progress >= 0 && 1 > progress && r ? (_progress = progress, _state = DURING, doUpdate = true) : progress >=
          1 && _state !== AFTER ? (_progress = 1, _state = AFTER, doUpdate = true) : _state !== DURING || r || updatePinState(), doUpdate) {
            var options = {
              progress : _progress,
              state : _state,
              scrollDirection : scrollDirection
            };
            /** @type {boolean} */
            var stateChanged = _state != oldState;
            /**
             * @param {string} eventName
             * @return {undefined}
             */
            var trigger = function(eventName) {
              ScrollScene.trigger(eventName, options);
            };
            if (stateChanged && oldState !== DURING) {
              trigger("enter");
              trigger(oldState === BEFORE ? "start" : "end");
            }
            trigger("progress");
            if (stateChanged && _state !== DURING) {
              trigger(_state === BEFORE ? "start" : "end");
              trigger("leave");
            }
          }
          return ScrollScene;
        }
        return _progress;
      };
      /**
       * @return {undefined}
       */
      var updateScrollOffset = function() {
        _scrollOffset = {
          start : _triggerPos + _options.offset
        };
        if (_parent && _options.triggerElement) {
          _scrollOffset.start -= _parent.info("size") * _options.triggerHook;
        }
        _scrollOffset.end = _scrollOffset.start + _options.duration;
      };
      /**
       * @param {boolean} endStatus
       * @return {undefined}
       */
      var update = function(endStatus) {
        if (_durationUpdateMethod) {
          /** @type {string} */
          var varname = "duration";
          if (register(varname, _durationUpdateMethod.call(ScrollScene)) && !endStatus) {
            ScrollScene.trigger("change", {
              what : varname,
              newval : _options[varname]
            });
            ScrollScene.trigger("shift", {
              reason : varname
            });
          }
        }
      };
      /**
       * @param {boolean} suppressEvents
       * @return {undefined}
       */
      var updateTriggerElementPosition = function(suppressEvents) {
        /** @type {number} */
        var elementPos = 0;
        var el = _options.triggerElement;
        if (_parent && el) {
          var opts = _parent.info();
          var old = $.get.offset(opts.container);
          /** @type {string} */
          var prop = opts.vertical ? "top" : "left";
          for (; el.parentNode.hasAttribute(prop);) {
            el = el.parentNode;
          }
          var props = $.get.offset(el);
          if (!opts.isDocument) {
            old[prop] -= _parent.scrollPos();
          }
          /** @type {number} */
          elementPos = props[prop] - old[prop];
        }
        /** @type {boolean} */
        var changed = elementPos != _triggerPos;
        /** @type {number} */
        _triggerPos = elementPos;
        if (changed && !suppressEvents) {
          ScrollScene.trigger("shift", {
            reason : "triggerElementPosition"
          });
        }
      };
      /**
       * @return {undefined}
       */
      var fn = function() {
        if (_options.triggerHook > 0) {
          ScrollScene.trigger("shift", {
            reason : "containerResize"
          });
        }
      };
      var self = $.extend(options.validate, {
        duration : function(value) {
          if ($.type.String(value) && value.match(/^(\.|\d)*\d+%$/)) {
            /** @type {number} */
            var aspect = parseFloat(value) / 100;
            /**
             * @return {?}
             */
            value = function() {
              return _parent ? _parent.info("size") * aspect : 0;
            };
          }
          if ($.type.Function(value)) {
            /** @type {!Object} */
            _durationUpdateMethod = value;
            try {
              /** @type {number} */
              value = parseFloat(_durationUpdateMethod());
            } catch (e) {
              /** @type {number} */
              value = -1;
            }
          }
          if (value = parseFloat(value), !$.type.Number(value) || 0 > value) {
            throw _durationUpdateMethod ? (_durationUpdateMethod = void 0, 0) : 0;
          }
          return value;
        }
      });
      /**
       * @param {!Object} name
       * @return {undefined}
       */
      var on = function(name) {
        /** @type {!Array} */
        name = arguments.length ? [name] : Object.keys(self);
        name.forEach(function(name) {
          var value;
          if (self[name]) {
            try {
              value = self[name](_options[name]);
            } catch (i) {
              value = defaults[name];
            } finally {
              _options[name] = value;
            }
          }
        });
      };
      /**
       * @param {!Object} key
       * @param {?} value
       * @return {?}
       */
      var register = function(key, value) {
        /** @type {boolean} */
        var changed = false;
        var oldval = _options[key];
        return _options[key] != value && (_options[key] = value, on(key), changed = oldval != _options[key]), changed;
      };
      /**
       * @param {!Object} key
       * @return {undefined}
       */
      var add = function(key) {
        if (!ScrollScene[key]) {
          /**
           * @param {?} TitledPane
           * @return {?}
           */
          ScrollScene[key] = function(TitledPane) {
            return arguments.length ? ("duration" === key && (_durationUpdateMethod = void 0), register(key, TitledPane) && (ScrollScene.trigger("change", {
              what : key,
              newval : _options[key]
            }), options.shifts.indexOf(key) > -1 && ScrollScene.trigger("shift", {
              reason : key
            })), ScrollScene) : _options[key];
          };
        }
      };
      /**
       * @return {?}
       */
      this.controller = function() {
        return _parent;
      };
      /**
       * @return {?}
       */
      this.state = function() {
        return _state;
      };
      /**
       * @return {?}
       */
      this.scrollOffset = function() {
        return _scrollOffset.start;
      };
      /**
       * @return {?}
       */
      this.triggerPosition = function() {
        var pos = _options.offset;
        return _parent && (pos = pos + (_options.triggerElement ? _triggerPos : _parent.info("size") * ScrollScene.triggerHook())), pos;
      };
      var el;
      var _pinOptions;
      ScrollScene.on("shift.internal", function(inv) {
        /** @type {boolean} */
        var e = "duration" === inv.reason;
        if (_state === AFTER && e || _state === DURING && 0 === _options.duration) {
          updatePinState();
        }
        if (e) {
          updatePinSpacerSize();
        }
      }).on("progress.internal", function() {
        updatePinState();
      }).on("add.internal", function() {
        updatePinSpacerSize();
      }).on("destroy.internal", function(applyViewModelsSpy) {
        ScrollScene.removePin(applyViewModelsSpy.reset);
      });
      /**
       * @param {string} forceUnpin
       * @return {undefined}
       */
      var updatePinState = function(forceUnpin) {
        if (el && _parent) {
          var containerInfo = _parent.info();
          var i = _pinOptions.spacer.firstChild;
          if (forceUnpin || _state !== DURING) {
            var css = {
              position : _pinOptions.inFlow ? "relative" : "absolute",
              top : 0,
              left : 0
            };
            /** @type {boolean} */
            var o = $.css(i, "position") != css.position;
            if (_pinOptions.pushFollowers) {
              if (_options.duration > 0) {
                if (_state === AFTER && 0 === parseFloat($.css(_pinOptions.spacer, "padding-top"))) {
                  /** @type {boolean} */
                  o = true;
                } else {
                  if (_state === BEFORE && 0 === parseFloat($.css(_pinOptions.spacer, "padding-bottom"))) {
                    /** @type {boolean} */
                    o = true;
                  }
                }
              }
            } else {
              /** @type {number} */
              css[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
            }
            $.css(i, css);
            if (o) {
              updatePinSpacerSize();
            }
          } else {
            if ("fixed" != $.css(i, "position")) {
              $.css(i, {
                position : "fixed"
              });
              updatePinSpacerSize();
            }
            var offset = $.get.offset(_pinOptions.spacer, true);
            /** @type {number} */
            var string_width = _options.reverse || 0 === _options.duration ? containerInfo.scrollPos - _scrollOffset.start : Math.round(_progress * _options.duration * 10) / 10;
            offset[containerInfo.vertical ? "top" : "left"] += string_width;
            $.css(_pinOptions.spacer.firstChild, {
              top : offset.top,
              left : offset.left
            });
          }
        }
      };
      /**
       * @return {undefined}
       */
      var updatePinSpacerSize = function() {
        if (el && _parent && _pinOptions.inFlow) {
          /** @type {boolean} */
          var pinned = _state === DURING;
          var vertical = _parent.info("vertical");
          var p = _pinOptions.spacer.firstChild;
          var n = $.isMarginCollapseType($.css(_pinOptions.spacer, "display"));
          var css = {};
          if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
            if (pinned) {
              $.css(el, {
                width : $.get.width(_pinOptions.spacer)
              });
            } else {
              $.css(el, {
                width : "100%"
              });
            }
          } else {
            css["min-width"] = $.get.width(vertical ? el : p, true, true);
            css.width = pinned ? css["min-width"] : "auto";
          }
          if (_pinOptions.relSize.height) {
            if (pinned) {
              $.css(el, {
                height : $.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
              });
            } else {
              $.css(el, {
                height : "100%"
              });
            }
          } else {
            css["min-height"] = $.get.height(vertical ? p : el, true, !n);
            css.height = pinned ? css["min-height"] : "auto";
          }
          if (_pinOptions.pushFollowers) {
            /** @type {number} */
            css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
            /** @type {number} */
            css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
          }
          $.css(_pinOptions.spacer, css);
        }
      };
      /**
       * @return {undefined}
       */
      var load = function() {
        if (_parent && el && _state === DURING && !_parent.info("isDocument")) {
          updatePinState();
        }
      };
      /**
       * @return {undefined}
       */
      var render = function() {
        if (_parent && el && _state === DURING && ((_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && $.get.width(window) != $.get.width(_pinOptions.spacer.parentNode) || _pinOptions.relSize.height && $.get.height(window) != $.get.height(_pinOptions.spacer.parentNode))) {
          updatePinSpacerSize();
        }
      };
      /**
       * @param {!Object} e
       * @return {undefined}
       */
      var handler = function(e) {
        if (_parent && el && _state === DURING && !_parent.info("isDocument")) {
          e.preventDefault();
          _parent._setScrollPos(_parent.info("scrollPos") - ((e.wheelDelta || e[_parent.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail));
        }
      };
      /**
       * @param {undefined} element
       * @param {!Object} settings
       * @return {?}
       */
      this.setPin = function(element, settings) {
        var defaultSettings = {
          pushFollowers : true,
          spacerClass : "scrollmagic-pin-spacer"
        };
        if (settings = $.extend({}, defaultSettings, settings), element = $.get.elements(element)[0], !element) {
          return ScrollScene;
        }
        if ("fixed" === $.css(element, "position")) {
          return ScrollScene;
        }
        if (el) {
          if (el === element) {
            return ScrollScene;
          }
          ScrollScene.removePin();
        }
        el = element;
        var gutterDisplay = el.parentNode.style.display;
        /** @type {!Array} */
        var positions = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
        /** @type {string} */
        el.parentNode.style.display = "none";
        /** @type {boolean} */
        var inFlow = "absolute" != $.css(el, "position");
        var l = $.css(el, positions.concat(["display"]));
        var options = $.css(el, ["width", "height"]);
        el.parentNode.style.display = gutterDisplay;
        if (!inFlow && settings.pushFollowers) {
          /** @type {boolean} */
          settings.pushFollowers = false;
        }
        var link = el.parentNode.insertBefore(document.createElement("div"), el);
        var value = $.extend(l, {
          position : inFlow ? "relative" : "absolute",
          boxSizing : "content-box",
          mozBoxSizing : "content-box",
          webkitBoxSizing : "content-box"
        });
        if (inFlow || $.extend(value, $.css(el, ["width", "height"])), $.css(link, value), link.setAttribute(prop, ""), $.addClass(link, settings.spacerClass), _pinOptions = {
          spacer : link,
          relSize : {
            width : "%" === options.width.slice(-1),
            height : "%" === options.height.slice(-1),
            autoFullWidth : "auto" === options.width && inFlow && $.isMarginCollapseType(l.display)
          },
          pushFollowers : settings.pushFollowers,
          inFlow : inFlow
        }, !el.___origStyle) {
          el.___origStyle = {};
          var prop = el.style;
          /** @type {!Array<?>} */
          var pipelets = positions.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
          pipelets.forEach(function(style) {
            el.___origStyle[style] = prop[style] || "";
          });
        }
        return _pinOptions.relSize.width && $.css(link, {
          width : options.width
        }), _pinOptions.relSize.height && $.css(link, {
          height : options.height
        }), link.appendChild(el), $.css(el, {
          position : inFlow ? "relative" : "absolute",
          margin : "auto",
          top : "auto",
          left : "auto",
          bottom : "auto",
          right : "auto"
        }), (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && $.css(el, {
          boxSizing : "border-box",
          mozBoxSizing : "border-box",
          webkitBoxSizing : "border-box"
        }), window.addEventListener("scroll", load), window.addEventListener("resize", load), window.addEventListener("resize", render), el.addEventListener("mousewheel", handler), el.addEventListener("DOMMouseScroll", handler), updatePinState(), ScrollScene;
      };
      /**
       * @param {string} reset
       * @return {?}
       */
      this.removePin = function(reset) {
        if (el) {
          if (_state === DURING && updatePinState(true), reset || !_parent) {
            var i = _pinOptions.spacer.firstChild;
            if (i.hasAttribute(prop)) {
              var xs = _pinOptions.spacer.style;
              /** @type {!Array} */
              var attrs = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
              margins = {};
              attrs.forEach(function(i) {
                margins[i] = xs[i] || "";
              });
              $.css(i, margins);
            }
            _pinOptions.spacer.parentNode.insertBefore(i, _pinOptions.spacer);
            _pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
            if (!el.parentNode.hasAttribute(prop)) {
              $.css(el, el.___origStyle);
              delete el.___origStyle;
            }
          }
          window.removeEventListener("scroll", load);
          window.removeEventListener("resize", load);
          window.removeEventListener("resize", render);
          el.removeEventListener("mousewheel", handler);
          el.removeEventListener("DOMMouseScroll", handler);
          el = void 0;
        }
        return ScrollScene;
      };
      var klass;
      /** @type {!Array} */
      var newValue = [];
      return ScrollScene.on("destroy.internal", function(applyViewModelsSpy) {
        ScrollScene.removeClassToggle(applyViewModelsSpy.reset);
      }), this.setClassToggle = function(element, key) {
        var submittedValue = $.get.elements(element);
        return 0 !== submittedValue.length && $.type.String(key) ? (newValue.length > 0 && ScrollScene.removeClassToggle(), klass = key, newValue = submittedValue, ScrollScene.on("enter.internal_class leave.internal_class", function(event) {
          var isPlainObject = "enter" === event.type ? $.addClass : $.removeClass;
          newValue.forEach(function(type) {
            isPlainObject(type, klass);
          });
        }), ScrollScene) : ScrollScene;
      }, this.removeClassToggle = function(reset) {
        return reset && newValue.forEach(function(t) {
          $.removeClass(t, klass);
        }), ScrollScene.off("start.internal_class end.internal_class"), klass = void 0, newValue = [], ScrollScene;
      }, _init(), ScrollScene;
    };
    var options = {
      defaults : {
        duration : 0,
        offset : 0,
        triggerElement : void 0,
        triggerHook : .5,
        reverse : true,
        loglevel : 2
      },
      validate : {
        offset : function(value) {
          if (value = parseFloat(value), !$.type.Number(value)) {
            throw 0;
          }
          return value;
        },
        triggerElement : function(type) {
          if (type = type || void 0) {
            var ref_remote = $.get.elements(type)[0];
            if (!ref_remote) {
              throw 0;
            }
            type = ref_remote;
          }
          return type;
        },
        triggerHook : function(value) {
          var TRIGGER_HOOK_VALUES = {
            onCenter : .5,
            onEnter : 1,
            onLeave : 0
          };
          if ($.type.Number(value)) {
            /** @type {number} */
            value = Math.max(0, Math.min(parseFloat(value), 1));
          } else {
            if (!(value in TRIGGER_HOOK_VALUES)) {
              throw 0;
            }
            value = TRIGGER_HOOK_VALUES[value];
          }
          return value;
        },
        reverse : function(ignorePhaseThreshold) {
          return !!ignorePhaseThreshold;
        }
      },
      shifts : ["duration", "offset", "triggerHook"]
    };
    /**
     * @param {!Object} name
     * @param {!Object} data
     * @param {!Function} callback
     * @param {?} index
     * @return {undefined}
     */
    ns.Scene.addOption = function(name, data, callback, index) {
      if (!(name in options.defaults)) {
        /** @type {!Object} */
        options.defaults[name] = data;
        /** @type {!Function} */
        options.validate[name] = callback;
        if (index) {
          options.shifts.push(name);
        }
      }
    };
    /**
     * @param {!Function} name
     * @return {undefined}
     */
    ns.Scene.extend = function(name) {
      var i = this;
      /**
       * @return {?}
       */
      ns.Scene = function() {
        return i.apply(this, arguments), this.$super = $.extend({}, this), name.apply(this, arguments) || this;
      };
      $.extend(ns.Scene, i);
      ns.Scene.prototype = i.prototype;
      /** @type {function(): ?} */
      ns.Scene.prototype.constructor = ns.Scene;
    };
    /**
     * @param {!Object} value
     * @param {!Object} name
     * @param {!Object} target
     * @param {!Object} data
     * @return {?}
     */
    ns.Event = function(value, name, target, data) {
      data = data || {};
      var dataKey;
      for (dataKey in data) {
        this[dataKey] = data[dataKey];
      }
      return this.type = value, this.target = this.currentTarget = target, this.namespace = name || "", this.timeStamp = this.timestamp = Date.now(), this;
    };
    var $ = ns._util = function(window) {
      var i;
      var self = {};
      /**
       * @param {?} value
       * @return {?}
       */
      var toPixel = function(value) {
        return parseFloat(value) || 0;
      };
      /**
       * @param {!Object} node
       * @return {?}
       */
      var getStyle = function(node) {
        return node.currentStyle ? node.currentStyle : window.getComputedStyle(node);
      };
      /**
       * @param {string} name
       * @param {!Object} elem
       * @param {!Object} fn
       * @param {!Object} data
       * @return {?}
       */
      var get = function(name, elem, fn, data) {
        if (elem = elem === document ? window : elem, elem === window) {
          /** @type {boolean} */
          data = false;
        } else {
          if (!$.DomElement(elem)) {
            return 0;
          }
        }
        name = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
        var currentLayoutIndex = (fn ? elem["offset" + name] || elem["outer" + name] : elem["client" + name] || elem["inner" + name]) || 0;
        if (fn && data) {
          var style = getStyle(elem);
          currentLayoutIndex = currentLayoutIndex + ("Height" === name ? toPixel(style.marginTop) + toPixel(style.marginBottom) : toPixel(style.marginLeft) + toPixel(style.marginRight));
        }
        return currentLayoutIndex;
      };
      /**
       * @param {!Object} string
       * @return {?}
       */
      var camelize = function(string) {
        return string.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(ctcp) {
          return ctcp[1].toUpperCase();
        });
      };
      /**
       * @param {string} x
       * @return {?}
       */
      self.extend = function(x) {
        x = x || {};
        /** @type {number} */
        i = 1;
        for (; i < arguments.length; i++) {
          if (arguments[i]) {
            var name;
            for (name in arguments[i]) {
              if (arguments[i].hasOwnProperty(name)) {
                x[name] = arguments[i][name];
              }
            }
          }
        }
        return x;
      };
      /**
       * @param {string} str
       * @return {?}
       */
      self.isMarginCollapseType = function(str) {
        return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
      };
      /** @type {number} */
      var a = 0;
      /** @type {!Array} */
      var vendors = ["ms", "moz", "webkit", "o"];
      var rAF = window.requestAnimationFrame;
      var cAF = window.cancelAnimationFrame;
      /** @type {number} */
      i = 0;
      for (; !rAF && i < vendors.length; ++i) {
        rAF = window[vendors[i] + "RequestAnimationFrame"];
        cAF = window[vendors[i] + "CancelAnimationFrame"] || window[vendors[i] + "CancelRequestAnimationFrame"];
      }
      if (!rAF) {
        /**
         * @param {!Object} type
         * @return {?}
         */
        rAF = function(type) {
          /** @type {number} */
          var i = (new Date).getTime();
          /** @type {number} */
          var at = Math.max(0, 16 - (i - a));
          var next = window.setTimeout(function() {
            type(i + at);
          }, at);
          return a = i + at, next;
        };
      }
      if (!cAF) {
        /**
         * @param {!Object} name
         * @return {undefined}
         */
        cAF = function(name) {
          window.clearTimeout(name);
        };
      }
      self.rAF = rAF.bind(window);
      self.cAF = cAF.bind(window);
      /** @type {function(!Object): ?} */
      var $ = self.type = function(value) {
        return Object.prototype.toString.call(value).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
      };
      /**
       * @param {!Object} str
       * @return {?}
       */
      $.String = function(str) {
        return "string" === $(str);
      };
      /**
       * @param {!Object} obj
       * @return {?}
       */
      $.Function = function(obj) {
        return "function" === $(obj);
      };
      /**
       * @param {!Object} obj
       * @return {?}
       */
      $.Array = function(obj) {
        return Array.isArray(obj);
      };
      /**
       * @param {string} a
       * @return {?}
       */
      $.Number = function(a) {
        return !$.Array(a) && a - parseFloat(a) + 1 >= 0;
      };
      /**
       * @param {!Object} node
       * @return {?}
       */
      $.DomElement = function(node) {
        return "object" == typeof HTMLElement ? node instanceof HTMLElement : node && "object" == typeof node && null !== node && 1 === node.nodeType && "string" == typeof node.nodeName;
      };
      var withinElement = self.get = {};
      return withinElement.elements = function(value) {
        /** @type {!Array} */
        var result = [];
        if ($.String(value)) {
          try {
            /** @type {!NodeList<Element>} */
            value = document.querySelectorAll(value);
          } catch (t) {
            return result;
          }
        }
        if ("nodelist" === $(value) || $.Array(value)) {
          /** @type {number} */
          var j = 0;
          var length = result.length = value.length;
          for (; length > j; j++) {
            var val = value[j];
            result[j] = $.DomElement(val) ? val : withinElement.elements(val);
          }
        } else {
          if ($.DomElement(value) || value === document || value === window) {
            /** @type {!Array} */
            result = [value];
          }
        }
        return result;
      }, withinElement.scrollTop = function(n) {
        return n && "number" == typeof n.scrollTop ? n.scrollTop : window.pageYOffset || 0;
      }, withinElement.scrollLeft = function(left) {
        return left && "number" == typeof left.scrollLeft ? left.scrollLeft : window.pageXOffset || 0;
      }, withinElement.width = function(value, name, callback) {
        return get("width", value, name, callback);
      }, withinElement.height = function(value, name, callback) {
        return get("height", value, name, callback);
      }, withinElement.offset = function(element, options) {
        var offset = {
          top : 0,
          left : 0
        };
        if (element && element.getBoundingClientRect) {
          var style = element.getBoundingClientRect();
          offset.top = style.top;
          offset.left = style.left;
          if (!options) {
            offset.top += withinElement.scrollTop();
            offset.left += withinElement.scrollLeft();
          }
        }
        return offset;
      }, self.addClass = function(elem, value) {
        if (value) {
          if (elem.classList) {
            elem.classList.add(value);
          } else {
            elem.className += " " + value;
          }
        }
      }, self.removeClass = function(elem, value) {
        if (value) {
          if (elem.classList) {
            elem.classList.remove(value);
          } else {
            elem.className = elem.className.replace(RegExp("(^|\\b)" + value.split(" ").join("|") + "(\\b|$)", "gi"), " ");
          }
        }
      }, self.css = function(name, value) {
        if ($.String(value)) {
          return getStyle(name)[camelize(value)];
        }
        if ($.Array(value)) {
          var processedOptions = {};
          var options = getStyle(name);
          return value.forEach(function(name) {
            processedOptions[name] = options[camelize(name)];
          }), processedOptions;
        }
        var k;
        for (k in value) {
          var v = value[k];
          if (v == parseFloat(v)) {
            /** @type {string} */
            v = v + "px";
          }
          name.style[camelize(k)] = v;
        }
      }, self;
    }(window || {});
    return ns;
  });
  !function(win, factory) {
    if ("function" == typeof define && define.amd) {
      define(["ScrollMagic", "TweenMax", "TimelineMax"], factory);
    } else {
      if ("object" == typeof exports) {
        require("gsap");
        factory(require("scrollmagic"), TweenMax, TimelineMax);
      } else {
        factory(win.ScrollMagic || win.jQuery && win.jQuery.ScrollMagic, win.TweenMax || win.TweenLite, win.TimelineMax || win.TimelineLite);
      }
    }
  }(this, function(Q, l, TimelineMax) {
    Q.Scene.addOption("tweenChanges", false, function(canCreateDiscussions) {
      return !!canCreateDiscussions;
    });
    Q.Scene.extend(function() {
      var _tween;
      var p = this;
      p.on("progress.plugin_gsap", function() {
        updateTweenProgress();
      });
      p.on("destroy.plugin_gsap", function(value) {
        p.removeTween(value.reset);
      });
      /**
       * @return {undefined}
       */
      var updateTweenProgress = function() {
        if (_tween) {
          var progress = p.progress();
          var i = p.state();
          if (_tween.repeat && -1 === _tween.repeat()) {
            if ("DURING" === i && _tween.paused()) {
              _tween.play();
            } else {
              if (!("DURING" === i || _tween.paused())) {
                _tween.pause();
              }
            }
          } else {
            if (progress != _tween.progress()) {
              if (0 === p.duration()) {
                if (progress > 0) {
                  _tween.play();
                } else {
                  _tween.reverse();
                }
              } else {
                if (p.tweenChanges() && _tween.tweenTo) {
                  _tween.tweenTo(progress * _tween.duration());
                } else {
                  _tween.progress(progress).pause();
                }
              }
            }
          }
        }
      };
      /**
       * @param {string} target
       * @param {number} obj
       * @param {!Object} ctx
       * @return {?}
       */
      p.setTween = function(target, obj, ctx) {
        var socket;
        if (arguments.length > 1) {
          if (arguments.length < 3) {
            /** @type {number} */
            ctx = obj;
            /** @type {number} */
            obj = 1;
          }
          target = l.to(target, obj, ctx);
        }
        try {
          socket = TimelineMax ? (new TimelineMax({
            smoothChildTiming : true
          })).add(target) : target;
          socket.pause();
        } catch (t) {
          return p;
        }
        return _tween && p.removeTween(), _tween = socket, target.repeat && -1 === target.repeat() && (_tween.repeat(-1), _tween.yoyo(target.yoyo())), updateTweenProgress(), p;
      };
      /**
       * @param {?} _name
       * @return {?}
       */
      p.removeTween = function(_name) {
        return _tween && (_name && _tween.progress(0).pause(), _tween.kill(), _tween = void 0), p;
      };
    });
  });
  /** @type {boolean} */
  var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0;
  /** @type {boolean} */
  var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);
  /** @type {boolean} */
  var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);
  /** @type {boolean} */
  var deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
  /**
   * @param {!Element} target
   * @return {?}
   */
  FastClick.prototype.needsClick = function(target) {
    switch(target.nodeName.toLowerCase()) {
      case "button":
      case "select":
      case "textarea":
        if (target.disabled) {
          return true;
        }
        break;
      case "input":
        if (deviceIsIOS && "file" === target.type || target.disabled) {
          return true;
        }
        break;
      case "label":
      case "video":
        return true;
    }
    return /\bneedsclick\b/.test(target.className);
  };
  /**
   * @param {!EventTarget} target
   * @return {?}
   */
  FastClick.prototype.needsFocus = function(target) {
    switch(target.nodeName.toLowerCase()) {
      case "textarea":
        return true;
      case "select":
        return !deviceIsAndroid;
      case "input":
        switch(target.type) {
          case "button":
          case "checkbox":
          case "file":
          case "image":
          case "radio":
          case "submit":
            return false;
        }return !target.disabled && !target.readOnly;
      default:
        return /\bneedsfocus\b/.test(target.className);
    }
  };
  /**
   * @param {!HTMLElement} targetElement
   * @param {!Event} event
   * @return {undefined}
   */
  FastClick.prototype.sendClick = function(targetElement, event) {
    var clickEvent;
    var touch;
    if (document.activeElement && document.activeElement !== targetElement) {
      document.activeElement.blur();
    }
    touch = event.changedTouches[0];
    /** @type {(Event|null)} */
    clickEvent = document.createEvent("MouseEvents");
    clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
    /** @type {boolean} */
    clickEvent.forwardedTouchEvent = true;
    targetElement.dispatchEvent(clickEvent);
  };
  /**
   * @param {!HTMLElement} targetElement
   * @return {?}
   */
  FastClick.prototype.determineEventType = function(targetElement) {
    return deviceIsAndroid && "select" === targetElement.tagName.toLowerCase() ? "mousedown" : "click";
  };
  /**
   * @param {!Object} value
   * @return {undefined}
   */
  FastClick.prototype.focus = function(value) {
    var length;
    if (deviceIsIOS && value.setSelectionRange && 0 !== value.type.indexOf("date") && "time" !== value.type) {
      length = value.value.length;
      value.setSelectionRange(length, length);
    } else {
      value.focus();
    }
  };
  /**
   * @param {!EventTarget} targetElement
   * @return {undefined}
   */
  FastClick.prototype.updateScrollParent = function(targetElement) {
    var scrollParent;
    var parentElement;
    if (scrollParent = targetElement.fastClickScrollParent, !scrollParent || !scrollParent.contains(targetElement)) {
      /** @type {!EventTarget} */
      parentElement = targetElement;
      do {
        if (parentElement.scrollHeight > parentElement.offsetHeight) {
          scrollParent = parentElement;
          targetElement.fastClickScrollParent = parentElement;
          break;
        }
        parentElement = parentElement.parentElement;
      } while (parentElement);
    }
    if (scrollParent) {
      scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
    }
  };
  /**
   * @param {!Object} eventTarget
   * @return {?}
   */
  FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
    return eventTarget.nodeType === Node.TEXT_NODE ? eventTarget.parentNode : eventTarget;
  };
  /**
   * @param {!Event} event
   * @return {?}
   */
  FastClick.prototype.onTouchStart = function(event) {
    var targetElement;
    var touch;
    var selection;
    if (event.targetTouches.length > 1) {
      return true;
    }
    if (targetElement = this.getTargetElementFromEventTarget(event.target), touch = event.targetTouches[0], deviceIsIOS) {
      if (selection = window.getSelection(), selection.rangeCount && !selection.isCollapsed) {
        return true;
      }
      if (!deviceIsIOS4) {
        if (touch.identifier === this.lastTouchIdentifier) {
          return event.preventDefault(), false;
        }
        this.lastTouchIdentifier = touch.identifier;
        this.updateScrollParent(targetElement);
      }
    }
    return this.trackingClick = true, this.trackingClickStart = event.timeStamp, this.targetElement = targetElement, this.touchStartX = touch.pageX, this.touchStartY = touch.pageY, event.timeStamp - this.lastClickTime < this.tapDelay && event.preventDefault(), true;
  };
  /**
   * @param {!Event} event
   * @return {?}
   */
  FastClick.prototype.touchHasMoved = function(event) {
    var touch = event.changedTouches[0];
    var boundary = this.touchBoundary;
    return Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary;
  };
  /**
   * @param {!Event} event
   * @return {?}
   */
  FastClick.prototype.onTouchMove = function(event) {
    return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) && (this.trackingClick = false, this.targetElement = null), true);
  };
  /**
   * @param {!EventTarget} el
   * @return {?}
   */
  FastClick.prototype.findControl = function(el) {
    return void 0 !== el.control ? el.control : el.htmlFor ? document.getElementById(el.htmlFor) : el.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
  };
  /**
   * @param {!Event} event
   * @return {?}
   */
  FastClick.prototype.onTouchEnd = function(event) {
    var upcasted;
    var trackingClickStart;
    var undefined;
    var scrollParent;
    var touch;
    var element = this.targetElement;
    if (!this.trackingClick) {
      return true;
    }
    if (event.timeStamp - this.lastClickTime < this.tapDelay) {
      return this.cancelNextClick = true, true;
    }
    if (this.cancelNextClick = false, this.lastClickTime = event.timeStamp, trackingClickStart = this.trackingClickStart, this.trackingClick = false, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (touch = event.changedTouches[0], element = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || element, element.fastClickScrollParent = this.targetElement.fastClickScrollParent), undefined = element.tagName.toLowerCase(),
    "label" === undefined) {
      if (upcasted = this.findControl(element)) {
        if (this.focus(element), deviceIsAndroid) {
          return false;
        }
        element = upcasted;
      }
    } else {
      if (this.needsFocus(element)) {
        return event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && "input" === undefined ? (this.targetElement = null, false) : (this.focus(element), this.sendClick(element, event), deviceIsIOS4 && "select" === undefined || (this.targetElement = null, event.preventDefault()), false);
      }
    }
    return !(!deviceIsIOS || deviceIsIOS4 || (scrollParent = element.fastClickScrollParent, !scrollParent || scrollParent.fastClickLastScrollTop === scrollParent.scrollTop)) || (this.needsClick(element) || (event.preventDefault(), this.sendClick(element, event)), false);
  };
  /**
   * @return {undefined}
   */
  FastClick.prototype.onTouchCancel = function() {
    /** @type {boolean} */
    this.trackingClick = false;
    /** @type {null} */
    this.targetElement = null;
  };
  /**
   * @param {!Event} event
   * @return {?}
   */
  FastClick.prototype.onMouse = function(event) {
    return !this.targetElement || (!!event.forwardedTouchEvent || (!(event.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick)) || (event.stopImmediatePropagation ? event.stopImmediatePropagation() : event.propagationStopped = true, event.stopPropagation(), event.preventDefault(), false)));
  };
  /**
   * @param {!Event} event
   * @return {?}
   */
  FastClick.prototype.onClick = function(event) {
    var permitted;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = false, true) : "submit" === event.target.type && 0 === event.detail || (permitted = this.onMouse(event), permitted || (this.targetElement = null), permitted);
  };
  /**
   * @return {undefined}
   */
  FastClick.prototype.destroy = function() {
    var layer = this.layer;
    if (deviceIsAndroid) {
      layer.removeEventListener("mouseover", this.onMouse, true);
      layer.removeEventListener("mousedown", this.onMouse, true);
      layer.removeEventListener("mouseup", this.onMouse, true);
    }
    layer.removeEventListener("click", this.onClick, true);
    layer.removeEventListener("touchstart", this.onTouchStart, false);
    layer.removeEventListener("touchmove", this.onTouchMove, false);
    layer.removeEventListener("touchend", this.onTouchEnd, false);
    layer.removeEventListener("touchcancel", this.onTouchCancel, false);
  };
  /**
   * @param {!Element} layer
   * @return {?}
   */
  FastClick.notNeeded = function(layer) {
    var e;
    var i;
    if ("undefined" == typeof window.ontouchstart) {
      return true;
    }
    if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
      if (!deviceIsAndroid) {
        return true;
      }
      if (e = document.querySelector("meta[name=viewport]")) {
        if (-1 !== e.content.indexOf("user-scalable=no")) {
          return true;
        }
        if (i > 31 && window.innerWidth <= window.screen.width) {
          return true;
        }
      }
    }
    return "none" === layer.style.msTouchAction;
  };
  /**
   * @param {!Object} layer
   * @param {string} options
   * @return {?}
   */
  FastClick.attach = function(layer, options) {
    return new FastClick(layer, options);
  };
  if ("undefined" != typeof define && define.amd) {
    define(function() {
      return FastClick;
    });
  } else {
    if ("undefined" != typeof module && module.exports) {
      /** @type {function(!Object, string): ?} */
      module.exports = FastClick.attach;
      /** @type {function(!Element, !Object): undefined} */
      module.exports.FastClick = FastClick;
    } else {
      /** @type {function(!Element, !Object): undefined} */
      window.FastClick = FastClick;
    }
  }
  document.addEventListener("touchstart", function() {
  }, true);
  atvImg();
  _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
  !function(window) {
    var obj = window.GreenSockGlobals || window;
    /**
     * @param {string} buttonLabels
     * @return {?}
     */
    var prompt = function(buttonLabels) {
      var i;
      var indices = buttonLabels.split(".");
      var tmp = obj;
      /** @type {number} */
      i = 0;
      for (; i < indices.length; i++) {
        tmp[indices[i]] = tmp = tmp[indices[i]] || {};
      }
      return tmp;
    };
    var sliderNewName = prompt("com.greensock.utils");
    /**
     * @param {!Object} node
     * @return {?}
     */
    var text = function(node) {
      var type = node.nodeType;
      /** @type {string} */
      var ret = "";
      if (1 === type || 9 === type || 11 === type) {
        if ("string" == typeof node.textContent) {
          return node.textContent;
        }
        node = node.firstChild;
        for (; node; node = node.nextSibling) {
          /** @type {string} */
          ret = ret + text(node);
        }
      } else {
        if (3 === type || 4 === type) {
          return node.nodeValue;
        }
      }
      return ret;
    };
    /** @type {!HTMLDocument} */
    var doc = document;
    var $ = doc.defaultView ? doc.defaultView.getComputedStyle : function() {
    };
    /** @type {!RegExp} */
    var rupper = /([A-Z])/g;
    /**
     * @param {!Object} element
     * @param {string} prop
     * @param {!Object} e
     * @param {boolean} value
     * @return {?}
     */
    var getStyle = function(element, prop, e, value) {
      var n;
      return (e = e || $(element, null)) ? (element = e.getPropertyValue(prop.replace(rupper, "-$1").toLowerCase()), n = element || e.length ? element : e[prop]) : element.currentStyle && (e = element.currentStyle, n = e[prop]), value ? n : parseInt(n, 10) || 0;
    };
    /**
     * @param {!Object} target
     * @return {?}
     */
    var isString = function(target) {
      return !!(target.length && target[0] && (target[0].nodeType && target[0].style && !target.nodeType || target[0].length && target[0][0]));
    };
    /**
     * @param {!Object} p
     * @return {?}
     */
    var query = function(p) {
      var j;
      var c;
      var i;
      /** @type {!Array} */
      var r = [];
      var u = p.length;
      /** @type {number} */
      j = 0;
      for (; u > j; j++) {
        if (c = p[j], isString(c)) {
          i = c.length;
          /** @type {number} */
          i = 0;
          for (; i < c.length; i++) {
            r.push(c[i]);
          }
        } else {
          r.push(c);
        }
      }
      return r;
    };
    /** @type {!RegExp} */
    var HTML_REGEX = /(?:\r|\n|\t\t)/g;
    /** @type {!RegExp} */
    var rLte = /(?:\s\s+)/g;
    /** @type {number} */
    var c = 55296;
    /** @type {number} */
    var d = 56319;
    /** @type {number} */
    var m = 56320;
    /** @type {number} */
    var eMin = 127462;
    /** @type {number} */
    var eMax = 127487;
    /** @type {number} */
    var minyear = 127995;
    /** @type {number} */
    var maxyear = 127999;
    /**
     * @param {string} text
     * @return {?}
     */
    var parseInt = function(text) {
      return (text.charCodeAt(0) - c << 10) + (text.charCodeAt(1) - m) + 65536;
    };
    var elWindow = doc.all && !doc.addEventListener;
    /** @type {string} */
    var MSG_DEPRECATED = " style='position:relative;display:inline-block;" + (elWindow ? "*display:inline;*zoom:1;'" : "'");
    /**
     * @param {string} message
     * @param {string} force
     * @return {?}
     */
    var convert = function(message, force) {
      message = message || "";
      /** @type {boolean} */
      var relative = -1 !== message.indexOf("++");
      /** @type {number} */
      var i = 1;
      return relative && (message = message.split("++").join("")), function() {
        return "<" + force + MSG_DEPRECATED + (message ? " class='" + message + (relative ? i++ : "") + "'>" : ">");
      };
    };
    /** @type {function(!Object, !Object): undefined} */
    var exports = sliderNewName.SplitText = obj.SplitText = function(target, name) {
      if ("string" == typeof target && (target = exports.selector(target)), !target) {
        throw "cannot split a null element.";
      }
      this.elements = isString(target) ? query(target) : [target];
      /** @type {!Array} */
      this.chars = [];
      /** @type {!Array} */
      this.words = [];
      /** @type {!Array} */
      this.lines = [];
      /** @type {!Array} */
      this._originals = [];
      this.vars = name || {};
      this.split(name);
    };
    /**
     * @param {!Object} node
     * @param {!Object} value
     * @param {string} pattern
     * @return {undefined}
     */
    var check = function(node, value, pattern) {
      var type = node.nodeType;
      if (1 === type || 9 === type || 11 === type) {
        node = node.firstChild;
        for (; node; node = node.nextSibling) {
          check(node, value, pattern);
        }
      } else {
        if (3 === type || 4 === type) {
          node.nodeValue = node.nodeValue.split(value).join(pattern);
        }
      }
    };
    /**
     * @param {string} p
     * @param {!Object} a
     * @return {undefined}
     */
    var format = function(p, a) {
      var i = a.length;
      for (; --i > -1;) {
        p.push(a[i]);
      }
    };
    /**
     * @param {!Object} data
     * @return {?}
     */
    var map = function(data) {
      var j;
      /** @type {!Array} */
      var out = [];
      var jLen = data.length;
      /** @type {number} */
      j = 0;
      for (; j !== jLen; out.push(data[j++])) {
      }
      return out;
    };
    /**
     * @param {!Object} node
     * @param {!Object} sibling
     * @param {?} data
     * @return {?}
     */
    var insert = function(node, sibling, data) {
      var status;
      for (; node && node !== sibling;) {
        if (status = node._next || node.nextSibling) {
          return status.textContent.charAt(0) === data;
        }
        node = node.parentNode || node._parent;
      }
      return false;
    };
    /**
     * @param {!Node} el
     * @return {undefined}
     */
    var update = function(el) {
      var i;
      var child;
      var child_nodes = map(el.childNodes);
      var ii = child_nodes.length;
      /** @type {number} */
      i = 0;
      for (; ii > i; i++) {
        child = child_nodes[i];
        if (child._isSplit) {
          update(child);
        } else {
          if (i && 3 === child.previousSibling.nodeType) {
            child.previousSibling.nodeValue += 3 === child.nodeType ? child.nodeValue : child.firstChild.nodeValue;
          } else {
            if (3 !== child.nodeType) {
              el.insertBefore(child.firstChild, child);
            }
          }
          el.removeChild(child);
        }
      }
    };
    /**
     * @param {!Object} element
     * @param {!Object} options
     * @param {string} app
     * @param {string} v
     * @param {boolean} r
     * @param {number} width
     * @param {number} y
     * @return {undefined}
     */
    var init = function(element, options, app, v, r, width, y) {
      var j;
      var x;
      var len;
      var node;
      var a;
      var type;
      var el;
      var allowNamedFunctions;
      var style;
      var item;
      var _player_width;
      var offset;
      var value = $(element);
      var val = getStyle(element, "paddingLeft", value);
      /** @type {number} */
      var currentOffset = -999;
      var lineDistance = getStyle(element, "borderBottomWidth", value) + getStyle(element, "borderTopWidth", value);
      var threshold = getStyle(element, "borderLeftWidth", value) + getStyle(element, "borderRightWidth", value);
      var shapesize = getStyle(element, "paddingTop", value) + getStyle(element, "paddingBottom", value);
      var peekWidth = getStyle(element, "paddingLeft", value) + getStyle(element, "paddingRight", value);
      /** @type {number} */
      var D = .2 * getStyle(element, "fontSize");
      var result = getStyle(element, "textAlign", value, true);
      /** @type {!Array} */
      var suTypes = [];
      /** @type {!Array} */
      var N = [];
      /** @type {!Array} */
      var F = [];
      var data = options.wordDelimiter || " ";
      /** @type {string} */
      var selector = options.span ? "span" : "div";
      var t = options.type || options.split || "chars,words,lines";
      /** @type {(Array|null)} */
      var params = r && -1 !== t.indexOf("lines") ? [] : null;
      /** @type {boolean} */
      var requester_is_private_translator = -1 !== t.indexOf("words");
      /** @type {boolean} */
      var pastManualTranslation = -1 !== t.indexOf("chars");
      /** @type {boolean} */
      var div = "absolute" === options.position || options.absolute === true;
      var url = options.linesClass;
      /** @type {boolean} */
      var model = -1 !== (url || "").indexOf("++");
      if (params && 1 === element.children.length && element.children[0]._isSplit) {
        element = element.children[0];
      }
      if (model) {
        url = url.split("++").join("");
      }
      x = element.getElementsByTagName("*");
      len = x.length;
      /** @type {!Array} */
      a = [];
      /** @type {number} */
      j = 0;
      for (; len > j; j++) {
        a[j] = x[j];
      }
      if (params || div) {
        /** @type {number} */
        j = 0;
        for (; len > j; j++) {
          node = a[j];
          /** @type {boolean} */
          type = node.parentNode === element;
          if (type || div || pastManualTranslation && !requester_is_private_translator) {
            offset = node.offsetTop;
            if (params && type && Math.abs(offset - currentOffset) > D && "BR" !== node.nodeName) {
              /** @type {!Array} */
              el = [];
              params.push(el);
              currentOffset = offset;
            }
            if (div) {
              node._x = node.offsetLeft;
              node._y = offset;
              node._w = node.offsetWidth;
              node._h = node.offsetHeight;
            }
            if (params) {
              if (node._isSplit && type || !pastManualTranslation && type || requester_is_private_translator && type || !requester_is_private_translator && node.parentNode.parentNode === element && !node.parentNode._isSplit) {
                el.push(node);
                node._x -= val;
                if (insert(node, element, data)) {
                  /** @type {boolean} */
                  node._wordEnd = true;
                }
              }
              if ("BR" === node.nodeName && node.nextSibling && "BR" === node.nextSibling.nodeName) {
                params.push([]);
              }
            }
          }
        }
      }
      /** @type {number} */
      j = 0;
      for (; len > j; j++) {
        node = a[j];
        /** @type {boolean} */
        type = node.parentNode === element;
        if ("BR" !== node.nodeName) {
          if (div) {
            style = node.style;
            if (!(requester_is_private_translator || type)) {
              node._x += node.parentNode._x;
              node._y += node.parentNode._y;
            }
            /** @type {string} */
            style.left = node._x + "px";
            /** @type {string} */
            style.top = node._y + "px";
            /** @type {string} */
            style.position = "absolute";
            /** @type {string} */
            style.display = "block";
            /** @type {string} */
            style.width = node._w + 1 + "px";
            /** @type {string} */
            style.height = node._h + "px";
          }
          if (!requester_is_private_translator && pastManualTranslation) {
            if (node._isSplit) {
              node._next = node.nextSibling;
              node.parentNode.appendChild(node);
            } else {
              if (node.parentNode._isSplit) {
                node._parent = node.parentNode;
                if (!node.previousSibling && node.firstChild) {
                  /** @type {boolean} */
                  node.firstChild._isFirst = true;
                }
                node._next = node.nextSibling && node.nextSibling._isFirst ? null : node.nextSibling;
                node.parentNode.removeChild(node);
                a.splice(j--, 1);
                len--;
              } else {
                if (!type) {
                  offset = !node.nextSibling && insert(node.parentNode, element, data);
                  if (node.parentNode._parent) {
                    node.parentNode._parent.appendChild(node);
                  }
                  if (offset) {
                    node.parentNode.appendChild(doc.createTextNode(" "));
                  }
                  if (options.span) {
                    /** @type {string} */
                    node.style.display = "inline";
                  }
                  suTypes.push(node);
                }
              }
            }
          } else {
            if (node.parentNode._isSplit && !node._isSplit && "" !== node.innerHTML) {
              N.push(node);
            } else {
              if (pastManualTranslation && !node._isSplit) {
                if (options.span) {
                  /** @type {string} */
                  node.style.display = "inline";
                }
                suTypes.push(node);
              }
            }
          }
        } else {
          if (params || div) {
            element.removeChild(node);
            a.splice(j--, 1);
            len--;
          } else {
            if (!requester_is_private_translator) {
              element.appendChild(node);
            }
          }
        }
      }
      if (params) {
        if (div) {
          /** @type {!Element} */
          item = doc.createElement(selector);
          element.appendChild(item);
          /** @type {string} */
          _player_width = item.offsetWidth + "px";
          offset = item.offsetParent === element ? 0 : element.offsetLeft;
          element.removeChild(item);
        }
        style = element.style.cssText;
        /** @type {string} */
        element.style.cssText = "display:none;";
        for (; element.firstChild;) {
          element.removeChild(element.firstChild);
        }
        /** @type {boolean} */
        allowNamedFunctions = " " === data && (!div || !requester_is_private_translator && !pastManualTranslation);
        /** @type {number} */
        j = 0;
        for (; j < params.length; j++) {
          el = params[j];
          /** @type {!Element} */
          item = doc.createElement(selector);
          /** @type {string} */
          item.style.cssText = "display:block;text-align:" + result + ";position:" + (div ? "absolute;" : "relative;");
          if (url) {
            item.className = url + (model ? j + 1 : "");
          }
          F.push(item);
          len = el.length;
          /** @type {number} */
          x = 0;
          for (; len > x; x++) {
            if ("BR" !== el[x].nodeName) {
              node = el[x];
              item.appendChild(node);
              if (allowNamedFunctions && node._wordEnd) {
                item.appendChild(doc.createTextNode(" "));
              }
              if (div) {
                if (0 === x) {
                  /** @type {string} */
                  item.style.top = node._y + "px";
                  /** @type {string} */
                  item.style.left = val + offset + "px";
                }
                /** @type {string} */
                node.style.top = "0px";
                if (offset) {
                  /** @type {string} */
                  node.style.left = node._x - offset + "px";
                }
              }
            }
          }
          if (0 === len) {
            /** @type {string} */
            item.innerHTML = "&nbsp;";
          } else {
            if (!(requester_is_private_translator || pastManualTranslation)) {
              update(item);
              check(item, String.fromCharCode(160), " ");
            }
          }
          if (div) {
            /** @type {(string|undefined)} */
            item.style.width = _player_width;
            /** @type {string} */
            item.style.height = node._h + "px";
          }
          element.appendChild(item);
        }
        element.style.cssText = style;
      }
      if (div) {
        if (y > element.clientHeight) {
          /** @type {string} */
          element.style.height = y - shapesize + "px";
          if (element.clientHeight < y) {
            /** @type {string} */
            element.style.height = y + lineDistance + "px";
          }
        }
        if (width > element.clientWidth) {
          /** @type {string} */
          element.style.width = width - peekWidth + "px";
          if (element.clientWidth < width) {
            /** @type {string} */
            element.style.width = width + threshold + "px";
          }
        }
      }
      format(app, suTypes);
      format(v, N);
      format(r, F);
    };
    /**
     * @param {!Element} el
     * @param {!Object} options
     * @param {?} name
     * @param {?} attr
     * @return {undefined}
     */
    var parse = function(el, options, name, attr) {
      var val;
      var html;
      var i;
      var len;
      var l;
      var content;
      var w;
      var exponent;
      var enteredyear2;
      /** @type {string} */
      var cloneName = options.span ? "span" : "div";
      var t = options.type || options.split || "chars,words,lines";
      /** @type {boolean} */
      var icon = (-1 !== t.indexOf("words"), -1 !== t.indexOf("chars"));
      /** @type {boolean} */
      var preserveHTML = "absolute" === options.position || options.absolute === true;
      var undefined = options.wordDelimiter || " ";
      /** @type {string} */
      var id = " " !== undefined ? "" : preserveHTML ? "&#173; " : " ";
      /** @type {string} */
      var commit = options.span ? "</span>" : "</div>";
      /** @type {boolean} */
      var value = true;
      /** @type {!Element} */
      var item = doc.createElement("div");
      var container = el.parentNode;
      container.insertBefore(item, el);
      item.textContent = el.nodeValue;
      container.removeChild(el);
      /** @type {!Element} */
      el = item;
      val = text(el);
      /** @type {boolean} */
      w = -1 !== val.indexOf("<");
      if (options.reduceWhiteSpace !== false) {
        val = val.replace(rLte, " ").replace(HTML_REGEX, "");
      }
      if (w) {
        val = val.split("<").join("{{LT}}");
      }
      l = val.length;
      html = (" " === val.charAt(0) ? id : "") + name();
      /** @type {number} */
      i = 0;
      for (; l > i; i++) {
        if (content = val.charAt(i), content === undefined && val.charAt(i - 1) !== undefined && i) {
          /** @type {string} */
          html = html + (value ? commit : "");
          /** @type {boolean} */
          value = false;
          for (; val.charAt(i + 1) === undefined;) {
            /** @type {string} */
            html = html + id;
            i++;
          }
          if (i === l - 1) {
            /** @type {string} */
            html = html + id;
          } else {
            if (")" !== val.charAt(i + 1)) {
              /** @type {string} */
              html = html + (id + name());
              /** @type {boolean} */
              value = true;
            }
          }
        } else {
          if ("{" === content && "{{LT}}" === val.substr(i, 6)) {
            /** @type {string} */
            html = html + (icon ? attr() + "{{LT}}</" + cloneName + ">" : "{{LT}}");
            /** @type {number} */
            i = i + 5;
          } else {
            if (content.charCodeAt(0) >= c && content.charCodeAt(0) <= d || val.charCodeAt(i + 1) >= 65024 && val.charCodeAt(i + 1) <= 65039) {
              exponent = parseInt(val.substr(i, 2));
              enteredyear2 = parseInt(val.substr(i + 2, 2));
              /** @type {number} */
              len = exponent >= eMin && eMax >= exponent && enteredyear2 >= eMin && eMax >= enteredyear2 || enteredyear2 >= minyear && maxyear >= enteredyear2 ? 4 : 2;
              html = html + (icon && " " !== content ? attr() + val.substr(i, len) + "</" + cloneName + ">" : val.substr(i, len));
              /** @type {number} */
              i = i + (len - 1);
            } else {
              html = html + (icon && " " !== content ? attr() + content + "</" + cloneName + ">" : content);
            }
          }
        }
      }
      /** @type {string} */
      el.outerHTML = html + (value ? commit : "");
      if (w) {
        check(container, "{{LT}}", "<");
      }
    };
    /**
     * @param {!Element} child
     * @param {!Object} options
     * @param {?} callback
     * @param {?} type
     * @return {?}
     */
    var render = function(child, options, callback, type) {
      var name;
      var container;
      var containers = map(child.childNodes);
      var containers_length = containers.length;
      /** @type {boolean} */
      var absolute = "absolute" === options.position || options.absolute === true;
      if (3 !== child.nodeType || containers_length > 1) {
        /** @type {boolean} */
        options.absolute = false;
        /** @type {number} */
        name = 0;
        for (; containers_length > name; name++) {
          container = containers[name];
          if (3 !== container.nodeType || /\S+/.test(container.nodeValue)) {
            if (absolute && 3 !== container.nodeType && "inline" === getStyle(container, "display", null, true)) {
              /** @type {string} */
              container.style.display = "inline-block";
              /** @type {string} */
              container.style.position = "relative";
            }
            /** @type {boolean} */
            container._isSplit = true;
            render(container, options, callback, type);
          }
        }
        return options.absolute = absolute, void(child._isSplit = true);
      }
      parse(child, options, callback, type);
    };
    var fn = exports.prototype;
    /**
     * @param {!Object} value
     * @return {?}
     */
    fn.split = function(value) {
      if (this.isSplit) {
        this.revert();
      }
      this.vars = value = value || this.vars;
      /** @type {number} */
      this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
      var itemHeight;
      var w;
      var item;
      var i = this.elements.length;
      /** @type {string} */
      var func = value.span ? "span" : "div";
      var check = ("absolute" === value.position || value.absolute === true, convert(value.wordsClass, func));
      var data = convert(value.charsClass, func);
      for (; --i > -1;) {
        item = this.elements[i];
        this._originals[i] = item.innerHTML;
        itemHeight = item.clientHeight;
        w = item.clientWidth;
        render(item, value, check, data);
        init(item, value, this.chars, this.words, this.lines, w, itemHeight);
      }
      return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = true, this;
    };
    /**
     * @return {?}
     */
    fn.revert = function() {
      if (!this._originals) {
        throw "revert() call wasn't scoped properly.";
      }
      var i = this._originals.length;
      for (; --i > -1;) {
        this.elements[i].innerHTML = this._originals[i];
      }
      return this.chars = [], this.words = [], this.lines = [], this.isSplit = false, this;
    };
    exports.selector = window.$ || window.jQuery || function(value) {
      var isBoolean = window.$ || window.jQuery;
      return isBoolean ? (exports.selector = isBoolean, isBoolean(value)) : "undefined" == typeof document ? value : document.querySelectorAll ? document.querySelectorAll(value) : document.getElementById("#" === value.charAt(0) ? value.substr(1) : value);
    };
    /** @type {string} */
    exports.version = "0.5.6";
  }(_gsScope);
  (function(name) {
    /**
     * @return {?}
     */
    var getGlobal = function() {
      return (_gsScope.GreenSockGlobals || _gsScope)[name];
    };
    if ("function" == typeof define && define.amd) {
      define([], getGlobal);
    } else {
      if ("undefined" != typeof module && module.exports) {
        module.exports = getGlobal();
      }
    }
  })("SplitText");
  (function(window) {
    /**
     * @param {string} classname
     * @return {?}
     */
    function classRegex(classname) {
      return new RegExp("(^|\\s+)" + classname + "(\\s+|$)");
    }
    /**
     * @param {string} el
     * @param {string} c
     * @return {undefined}
     */
    function toggle(el, c) {
      var action = has(el, c) ? remove : add;
      action(el, c);
    }
    var has;
    var add;
    var remove;
    if ("classList" in document.documentElement) {
      /**
       * @param {string} element
       * @param {string} className
       * @return {?}
       */
      has = function(element, className) {
        return element.classList.contains(className);
      };
      /**
       * @param {string} elem
       * @param {string} key
       * @return {undefined}
       */
      add = function(elem, key) {
        elem.classList.add(key);
      };
      /**
       * @param {string} elem
       * @param {string} key
       * @return {undefined}
       */
      remove = function(elem, key) {
        elem.classList.remove(key);
      };
    } else {
      /**
       * @param {!Object} element
       * @param {string} cls
       * @return {?}
       */
      has = function(element, cls) {
        return classRegex(cls).test(element.className);
      };
      /**
       * @param {string} elem
       * @param {string} value
       * @return {undefined}
       */
      add = function(elem, value) {
        if (!has(elem, value)) {
          /** @type {string} */
          elem.className = elem.className + " " + value;
        }
      };
      /**
       * @param {string} elem
       * @param {string} key
       * @return {undefined}
       */
      remove = function(elem, key) {
        elem.className = elem.className.replace(classRegex(key), " ");
      };
    }
    var classie = {
      hasClass : has,
      addClass : add,
      removeClass : remove,
      toggleClass : toggle,
      has : has,
      add : add,
      remove : remove,
      toggle : toggle
    };
    if ("function" == typeof define && define.amd) {
      define(classie);
    } else {
      window.classie = classie;
    }
  })(window);
  (function(window) {
    /**
     * @param {!Object} e
     * @param {?} p
     * @return {?}
     */
    function hasParent(e, p) {
      if (!e) {
        return false;
      }
      var el = e.target || e.srcElement || e || false;
      for (; el && el != p;) {
        el = el.parentNode || false;
      }
      return el !== false;
    }
    /**
     * @param {!Object} source
     * @param {!Object} target
     * @return {?}
     */
    function extend(source, target) {
      var key;
      for (key in target) {
        if (target.hasOwnProperty(key)) {
          source[key] = target[key];
        }
      }
      return source;
    }
    /**
     * @param {string} el
     * @param {!Object} options
     * @return {undefined}
     */
    function SelectFx(el, options) {
      /** @type {string} */
      this.el = el;
      this.options = extend({}, this.options);
      extend(this.options, options);
      this._init();
    }
    SelectFx.prototype.options = {
      newTab : true,
      stickyPlaceholder : true,
      onChange : function(xhr) {
        return false;
      }
    };
    /**
     * @return {undefined}
     */
    SelectFx.prototype._init = function() {
      var selectedOpt = this.el.querySelector("option[selected]");
      this.hasDefaultPlaceholder = selectedOpt && selectedOpt.disabled;
      this.selectedOpt = selectedOpt || this.el.querySelector("option");
      this._createSelectEl();
      /** @type {!Array<?>} */
      this.selOpts = [].slice.call(this.selEl.querySelectorAll("li[data-option]"));
      /** @type {number} */
      this.selOptsCount = this.selOpts.length;
      /** @type {number} */
      this.current = this.selOpts.indexOf(this.selEl.querySelector("li.cs-selected")) || -1;
      this.selPlaceholder = this.selEl.querySelector("span.cs-placeholder");
      this._initEvents();
    };
    /**
     * @return {undefined}
     */
    SelectFx.prototype._createSelectEl = function() {
      var t = this;
      /** @type {string} */
      var options = "";
      /**
       * @param {!Object} el
       * @return {?}
       */
      var createOptionHTML = function(el) {
        /** @type {string} */
        var mask = "";
        /** @type {string} */
        var classes = "";
        /** @type {string} */
        var k = "";
        return !el.selectedOpt || this.foundSelected || this.hasDefaultPlaceholder || (classes = classes + "cs-selected ", this.foundSelected = true), el.getAttribute("data-class") && (classes = classes + el.getAttribute("data-class")), el.getAttribute("data-link") && (k = "data-link=" + el.getAttribute("data-link")), "" !== classes && (mask = 'class="' + classes + '" '), "<li " + mask + k +
        ' data-option data-value="' + el.value + '"><span>' + el.textContent + "</span></li>";
      };
      [].slice.call(this.el.children).forEach(function(el) {
        if (!el.disabled) {
          var pwdOption = el.tagName.toLowerCase();
          if ("option" === pwdOption) {
            options = options + createOptionHTML(el);
          } else {
            if ("optgroup" === pwdOption) {
              options = options + ('<li class="cs-optgroup"><span>' + el.label + "</span><ul>");
              [].slice.call(el.children).forEach(function(el) {
                options = options + createOptionHTML(el);
              });
              /** @type {string} */
              options = options + "</ul></li>";
            }
          }
        }
      });
      /** @type {string} */
      var opts_el = '<div class="cs-options"><ul>' + options + "</ul></div>";
      /** @type {!Element} */
      this.selEl = document.createElement("div");
      this.selEl.className = this.el.className;
      this.selEl.tabIndex = this.el.tabIndex;
      /** @type {string} */
      this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + "</span>" + opts_el;
      this.el.parentNode.appendChild(this.selEl);
      this.selEl.appendChild(this.el);
    };
    /**
     * @return {undefined}
     */
    SelectFx.prototype._initEvents = function() {
      var self = this;
      this.selPlaceholder.addEventListener("click", function() {
        self._toggleSelect();
      });
      this.selOpts.forEach(function(e, zoomLevel) {
        e.addEventListener("click", function() {
          /** @type {number} */
          self.current = zoomLevel;
          self._changeOption();
          self._toggleSelect();
        });
      });
      document.addEventListener("click", function(registrationData) {
        /** @type {(EventTarget|null)} */
        var target = registrationData.target;
        if (self._isOpen() && target !== self.selEl && !hasParent(target, self.selEl)) {
          self._toggleSelect();
        }
      });
      this.selEl.addEventListener("keydown", function(event) {
        var i = event.keyCode || event.which;
        switch(i) {
          case 38:
            event.preventDefault();
            self._navigateOpts("prev");
            break;
          case 40:
            event.preventDefault();
            self._navigateOpts("next");
            break;
          case 32:
            event.preventDefault();
            if (self._isOpen() && "undefined" != typeof self.preSelCurrent && self.preSelCurrent !== -1) {
              self._changeOption();
            }
            self._toggleSelect();
            break;
          case 13:
            event.preventDefault();
            if (self._isOpen() && "undefined" != typeof self.preSelCurrent && self.preSelCurrent !== -1) {
              self._changeOption();
              self._toggleSelect();
            }
            break;
          case 27:
            event.preventDefault();
            if (self._isOpen()) {
              self._toggleSelect();
            }
        }
      });
    };
    /**
     * @param {string} next
     * @return {undefined}
     */
    SelectFx.prototype._navigateOpts = function(next) {
      if (!this._isOpen()) {
        this._toggleSelect();
      }
      var tmpcurrent = "undefined" != typeof this.preSelCurrent && this.preSelCurrent !== -1 ? this.preSelCurrent : this.current;
      if ("prev" === next && tmpcurrent > 0 || "next" === next && tmpcurrent < this.selOptsCount - 1) {
        this.preSelCurrent = "next" === next ? tmpcurrent + 1 : tmpcurrent - 1;
        this._removeFocus();
        classie.add(this.selOpts[this.preSelCurrent], "cs-focus");
      }
    };
    /**
     * @return {undefined}
     */
    SelectFx.prototype._toggleSelect = function() {
      this._removeFocus();
      if (this._isOpen()) {
        if (this.current !== -1) {
          this.selPlaceholder.textContent = this.selOpts[this.current].textContent;
          jQuery("#category-buttons").find("." + this.selPlaceholder.textContent.cleanup()).trigger("click");
          jQuery("#category-tattoos-buttons").find("." + this.selPlaceholder.textContent.cleanup()).trigger("click");
          jQuery("#year-buttons").find("." + this.selPlaceholder.textContent.cleanup()).trigger("click");
          jQuery("#artist-buttons").find("." + this.selPlaceholder.textContent.cleanup()).trigger("click");
        }
        classie.remove(this.selEl, "cs-active");
      } else {
        if (this.hasDefaultPlaceholder && this.options.stickyPlaceholder) {
          this.selPlaceholder.textContent = this.selectedOpt.textContent;
        }
        classie.add(this.selEl, "cs-active");
      }
      /**
       * @return {?}
       * @this {!String}
       */
      String.prototype.cleanup = function() {
        return this.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
      };
    };
    /**
     * @return {undefined}
     */
    SelectFx.prototype._changeOption = function() {
      if ("undefined" != typeof this.preSelCurrent && this.preSelCurrent !== -1) {
        this.current = this.preSelCurrent;
        /** @type {number} */
        this.preSelCurrent = -1;
      }
      var item = this.selOpts[this.current];
      this.selPlaceholder.textContent = item.textContent;
      this.el.value = item.getAttribute("data-value");
      var header = this.selEl.querySelector("li.cs-selected");
      if (header) {
        classie.remove(header, "cs-selected");
      }
      classie.add(item, "cs-selected");
      if (item.getAttribute("data-link")) {
        if (this.options.newTab) {
          window.open(item.getAttribute("data-link"), "_blank");
        } else {
          window.location = item.getAttribute("data-link");
        }
      }
      this.options.onChange(this.el.value);
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    SelectFx.prototype._isOpen = function(opt) {
      return classie.has(this.selEl, "cs-active");
    };
    /**
     * @param {?} opt
     * @return {undefined}
     */
    SelectFx.prototype._removeFocus = function(opt) {
      var header = this.selEl.querySelector("li.cs-focus");
      if (header) {
        classie.remove(header, "cs-focus");
      }
    };
    /** @type {function(string, !Object): undefined} */
    window.SelectFx = SelectFx;
  })(window);
  (function(i, s, name, newUrl, r, g, editorElem) {
    /** @type {string} */
    i.GoogleAnalyticsObject = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments);
    };
    /** @type {number} */
    i[r].l = 1 * new Date;
    /** @type {!Element} */
    g = s.createElement(name);
    /** @type {!Element} */
    editorElem = s.getElementsByTagName(name)[0];
    /** @type {number} */
    g.async = 1;
    /** @type {string} */
    g.src = newUrl;
    editorElem.parentNode.insertBefore(g, editorElem);
  })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
  ga("create", "UA-40350556-5", "auto");
  ga("send", "pageview");
  (function() {
    /**
     * @param {!Element} layer
     * @param {!Object} options
     * @return {undefined}
     */
    function FastClick(layer, options) {
      /**
       * @param {!Function} f
       * @param {undefined} a
       * @return {?}
       */
      function bind(f, a) {
        return function() {
          return f.apply(a, arguments);
        };
      }
      var oldOnClick;
      if (options = options || {}, this.trackingClick = false, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = options.touchBoundary || 10, this.layer = layer, this.tapDelay = options.tapDelay || 200, this.tapTimeout = options.tapTimeout || 700, !FastClick.notNeeded(layer)) {
        /** @type {!Array} */
        var methods = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"];
        var context = this;
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var l = methods.length;
        for (; i < l; i++) {
          context[methods[i]] = bind(context[methods[i]], context);
        }
        if (doc) {
          layer.addEventListener("mouseover", this.onMouse, true);
          layer.addEventListener("mousedown", this.onMouse, true);
          layer.addEventListener("mouseup", this.onMouse, true);
        }
        layer.addEventListener("click", this.onClick, true);
        layer.addEventListener("touchstart", this.onTouchStart, false);
        layer.addEventListener("touchmove", this.onTouchMove, false);
        layer.addEventListener("touchend", this.onTouchEnd, false);
        layer.addEventListener("touchcancel", this.onTouchCancel, false);
        if (!Event.prototype.stopImmediatePropagation) {
          /**
           * @param {string} type
           * @param {!Function} callback
           * @param {boolean} capture
           * @return {undefined}
           */
          layer.removeEventListener = function(type, callback, capture) {
            /** @type {function(this:Node, string, (EventListener|function(!Event): (boolean|undefined)|null), (EventListenerOptions|boolean)=): undefined} */
            var rmv = Node.prototype.removeEventListener;
            if ("click" === type) {
              rmv.call(layer, type, callback.hijacked || callback, capture);
            } else {
              rmv.call(layer, type, callback, capture);
            }
          };
          /**
           * @param {string} type
           * @param {!Function} callback
           * @param {boolean} capture
           * @return {undefined}
           */
          layer.addEventListener = function(type, callback, capture) {
            /** @type {function(this:Node, string, (EventListener|function(!Event): (boolean|undefined)|null), (AddEventListenerOptions|boolean)=): undefined} */
            var adv = Node.prototype.addEventListener;
            if ("click" === type) {
              adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
                if (!event.propagationStopped) {
                  callback(event);
                }
              }), capture);
            } else {
              adv.call(layer, type, callback, capture);
            }
          };
        }
        if ("function" == typeof layer.onclick) {
          /** @type {!Function} */
          oldOnClick = layer.onclick;
          layer.addEventListener("click", function(event) {
            oldOnClick(event);
          }, false);
          /** @type {null} */
          layer.onclick = null;
        }
      }
    }
    /** @type {boolean} */
    var e = navigator.userAgent.indexOf("Windows Phone") >= 0;
    /** @type {boolean} */
    var doc = navigator.userAgent.indexOf("Android") > 0 && !e;
    /** @type {boolean} */
    var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !e;
    /** @type {boolean} */
    var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);
    /** @type {boolean} */
    var deviceIsIOSWithBadTarget = deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);
    /** @type {boolean} */
    var s = navigator.userAgent.indexOf("BB10") > 0;
    /**
     * @param {!Element} target
     * @return {?}
     */
    FastClick.prototype.needsClick = function(target) {
      switch(target.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
          if (target.disabled) {
            return true;
          }
          break;
        case "input":
          if (deviceIsIOS && "file" === target.type || target.disabled) {
            return true;
          }
          break;
        case "label":
        case "iframe":
        case "video":
          return true;
      }
      return /\bneedsclick\b/.test(target.className);
    };
    /**
     * @param {!EventTarget} target
     * @return {?}
     */
    FastClick.prototype.needsFocus = function(target) {
      switch(target.nodeName.toLowerCase()) {
        case "textarea":
          return true;
        case "select":
          return !doc;
        case "input":
          switch(target.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
              return false;
          }return !target.disabled && !target.readOnly;
        default:
          return /\bneedsfocus\b/.test(target.className);
      }
    };
    /**
     * @param {!HTMLElement} targetElement
     * @param {!Event} event
     * @return {undefined}
     */
    FastClick.prototype.sendClick = function(targetElement, event) {
      var clickEvent;
      var touch;
      if (document.activeElement && document.activeElement !== targetElement) {
        document.activeElement.blur();
      }
      touch = event.changedTouches[0];
      /** @type {(Event|null)} */
      clickEvent = document.createEvent("MouseEvents");
      clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
      /** @type {boolean} */
      clickEvent.forwardedTouchEvent = true;
      targetElement.dispatchEvent(clickEvent);
    };
    /**
     * @param {!HTMLElement} targetElement
     * @return {?}
     */
    FastClick.prototype.determineEventType = function(targetElement) {
      return doc && "select" === targetElement.tagName.toLowerCase() ? "mousedown" : "click";
    };
    /**
     * @param {!Object} value
     * @return {undefined}
     */
    FastClick.prototype.focus = function(value) {
      var length;
      if (deviceIsIOS && value.setSelectionRange && 0 !== value.type.indexOf("date") && "time" !== value.type && "month" !== value.type) {
        length = value.value.length;
        value.setSelectionRange(length, length);
      } else {
        value.focus();
      }
    };
    /**
     * @param {!EventTarget} targetElement
     * @return {undefined}
     */
    FastClick.prototype.updateScrollParent = function(targetElement) {
      var scrollParent;
      var parentElement;
      if (scrollParent = targetElement.fastClickScrollParent, !scrollParent || !scrollParent.contains(targetElement)) {
        /** @type {!EventTarget} */
        parentElement = targetElement;
        do {
          if (parentElement.scrollHeight > parentElement.offsetHeight) {
            scrollParent = parentElement;
            targetElement.fastClickScrollParent = parentElement;
            break;
          }
          parentElement = parentElement.parentElement;
        } while (parentElement);
      }
      if (scrollParent) {
        scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
      }
    };
    /**
     * @param {!Object} eventTarget
     * @return {?}
     */
    FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
      return eventTarget.nodeType === Node.TEXT_NODE ? eventTarget.parentNode : eventTarget;
    };
    /**
     * @param {!Event} event
     * @return {?}
     */
    FastClick.prototype.onTouchStart = function(event) {
      var targetElement;
      var touch;
      var selection;
      if (event.targetTouches.length > 1) {
        return true;
      }
      if (targetElement = this.getTargetElementFromEventTarget(event.target), touch = event.targetTouches[0], deviceIsIOS) {
        if (selection = window.getSelection(), selection.rangeCount && !selection.isCollapsed) {
          return true;
        }
        if (!deviceIsIOS4) {
          if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
            return event.preventDefault(), false;
          }
          this.lastTouchIdentifier = touch.identifier;
          this.updateScrollParent(targetElement);
        }
      }
      return this.trackingClick = true, this.trackingClickStart = event.timeStamp, this.targetElement = targetElement, this.touchStartX = touch.pageX, this.touchStartY = touch.pageY, event.timeStamp - this.lastClickTime < this.tapDelay && event.preventDefault(), true;
    };
    /**
     * @param {!Event} event
     * @return {?}
     */
    FastClick.prototype.touchHasMoved = function(event) {
      var touch = event.changedTouches[0];
      var boundary = this.touchBoundary;
      return Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary;
    };
    /**
     * @param {!Event} event
     * @return {?}
     */
    FastClick.prototype.onTouchMove = function(event) {
      return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) && (this.trackingClick = false, this.targetElement = null), true);
    };
    /**
     * @param {!EventTarget} el
     * @return {?}
     */
    FastClick.prototype.findControl = function(el) {
      return void 0 !== el.control ? el.control : el.htmlFor ? document.getElementById(el.htmlFor) : el.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
    };
    /**
     * @param {!Event} event
     * @return {?}
     */
    FastClick.prototype.onTouchEnd = function(event) {
      var upcasted;
      var trackingClickStart;
      var undefined;
      var scrollParent;
      var touch;
      var element = this.targetElement;
      if (!this.trackingClick) {
        return true;
      }
      if (event.timeStamp - this.lastClickTime < this.tapDelay) {
        return this.cancelNextClick = true, true;
      }
      if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
        return true;
      }
      if (this.cancelNextClick = false, this.lastClickTime = event.timeStamp, trackingClickStart = this.trackingClickStart, this.trackingClick = false, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (touch = event.changedTouches[0], element = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || element, element.fastClickScrollParent = this.targetElement.fastClickScrollParent), undefined = element.tagName.toLowerCase(),
      "label" === undefined) {
        if (upcasted = this.findControl(element)) {
          if (this.focus(element), doc) {
            return false;
          }
          element = upcasted;
        }
      } else {
        if (this.needsFocus(element)) {
          return event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && "input" === undefined ? (this.targetElement = null, false) : (this.focus(element), this.sendClick(element, event), deviceIsIOS && "select" === undefined || (this.targetElement = null, event.preventDefault()), false);
        }
      }
      return !(!deviceIsIOS || deviceIsIOS4 || (scrollParent = element.fastClickScrollParent, !scrollParent || scrollParent.fastClickLastScrollTop === scrollParent.scrollTop)) || (this.needsClick(element) || (event.preventDefault(), this.sendClick(element, event)), false);
    };
    /**
     * @return {undefined}
     */
    FastClick.prototype.onTouchCancel = function() {
      /** @type {boolean} */
      this.trackingClick = false;
      /** @type {null} */
      this.targetElement = null;
    };
    /**
     * @param {!Event} event
     * @return {?}
     */
    FastClick.prototype.onMouse = function(event) {
      return !this.targetElement || (!!event.forwardedTouchEvent || (!event.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (event.stopImmediatePropagation ? event.stopImmediatePropagation() : event.propagationStopped = true, event.stopPropagation(), event.preventDefault(), false))));
    };
    /**
     * @param {!Event} event
     * @return {?}
     */
    FastClick.prototype.onClick = function(event) {
      var permitted;
      return this.trackingClick ? (this.targetElement = null, this.trackingClick = false, true) : "submit" === event.target.type && 0 === event.detail || (permitted = this.onMouse(event), permitted || (this.targetElement = null), permitted);
    };
    /**
     * @return {undefined}
     */
    FastClick.prototype.destroy = function() {
      var layer = this.layer;
      if (doc) {
        layer.removeEventListener("mouseover", this.onMouse, true);
        layer.removeEventListener("mousedown", this.onMouse, true);
        layer.removeEventListener("mouseup", this.onMouse, true);
      }
      layer.removeEventListener("click", this.onClick, true);
      layer.removeEventListener("touchstart", this.onTouchStart, false);
      layer.removeEventListener("touchmove", this.onTouchMove, false);
      layer.removeEventListener("touchend", this.onTouchEnd, false);
      layer.removeEventListener("touchcancel", this.onTouchCancel, false);
    };
    /**
     * @param {!Element} layer
     * @return {?}
     */
    FastClick.notNeeded = function(layer) {
      var e;
      var n;
      var r;
      var o;
      if ("undefined" == typeof window.ontouchstart) {
        return true;
      }
      if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
        if (!doc) {
          return true;
        }
        if (e = document.querySelector("meta[name=viewport]")) {
          if (e.content.indexOf("user-scalable=no") !== -1) {
            return true;
          }
          if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }
      }
      if (s && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && r[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
        if (e.content.indexOf("user-scalable=no") !== -1) {
          return true;
        }
        if (document.documentElement.scrollWidth <= window.outerWidth) {
          return true;
        }
      }
      return "none" === layer.style.msTouchAction || "manipulation" === layer.style.touchAction || (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(o >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (e.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === layer.style.touchAction || "manipulation" === layer.style.touchAction));
    };
    /**
     * @param {!Object} layer
     * @param {string} options
     * @return {?}
     */
    FastClick.attach = function(layer, options) {
      return new FastClick(layer, options);
    };
    if ("function" == typeof define && "object" == typeof define.amd && define.amd) {
      define(function() {
        return FastClick;
      });
    } else {
      if ("undefined" != typeof module && module.exports) {
        /** @type {function(!Object, string): ?} */
        module.exports = FastClick.attach;
        /** @type {function(!Element, !Object): undefined} */
        module.exports.FastClick = FastClick;
      } else {
        /** @type {function(!Element, !Object): undefined} */
        window.FastClick = FastClick;
      }
    }
  })();
  !function(global, factory) {
    if ("function" == typeof define && define.amd) {
      define("ev-emitter/ev-emitter", factory);
    } else {
      if ("object" == typeof module && module.exports) {
        module.exports = factory();
      } else {
        global.EvEmitter = factory();
      }
    }
  }("undefined" != typeof window ? window : this, function() {
    /**
     * @return {undefined}
     */
    function StopAutoplay() {
    }
    var proto = StopAutoplay.prototype;
    return proto.on = function(type, value) {
      if (type && value) {
        var events = this._events = this._events || {};
        var n = events[type] = events[type] || [];
        return -1 == n.indexOf(value) && n.push(value), this;
      }
    }, proto.once = function(eventName, value) {
      if (eventName && value) {
        this.on(eventName, value);
        var onceEvents = this._onceEvents = this._onceEvents || {};
        var varWikidataTypes = onceEvents[eventName] = onceEvents[eventName] || {};
        return varWikidataTypes[value] = true, this;
      }
    }, proto.off = function(type, name) {
      var listeners = this._events && this._events[type];
      if (listeners && listeners.length) {
        var p = listeners.indexOf(name);
        return -1 != p && listeners.splice(p, 1), this;
      }
    }, proto.emitEvent = function(eventName, value) {
      var listeners = this._events && this._events[eventName];
      if (listeners && listeners.length) {
        /** @type {number} */
        var name = 0;
        var listener = listeners[name];
        value = value || [];
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for (; listener;) {
          var rev = onceListeners && onceListeners[listener];
          if (rev) {
            this.off(eventName, listener);
            delete onceListeners[listener];
          }
          listener.apply(this, value);
          /** @type {number} */
          name = name + (rev ? 0 : 1);
          listener = listeners[name];
        }
        return this;
      }
    }, StopAutoplay;
  });
  (function(window, factory) {
    if ("function" == typeof define && define.amd) {
      define(["ev-emitter/ev-emitter"], function(bleat) {
        return factory(window, bleat);
      });
    } else {
      if ("object" == typeof module && module.exports) {
        module.exports = factory(window, require("ev-emitter"));
      } else {
        window.imagesLoaded = factory(window, window.EvEmitter);
      }
    }
  })("undefined" != typeof window ? window : this, function(window, WebSocketDataModel) {
    /**
     * @param {!Object} source
     * @param {!Object} target
     * @return {?}
     */
    function extend(source, target) {
      var key;
      for (key in target) {
        source[key] = target[key];
      }
      return source;
    }
    /**
     * @param {!Object} a
     * @return {?}
     */
    function makeArray(a) {
      /** @type {!Array} */
      var r = [];
      if (Array.isArray(a)) {
        /** @type {!Object} */
        r = a;
      } else {
        if ("number" == typeof a.length) {
          /** @type {number} */
          var i = 0;
          for (; i < a.length; i++) {
            r.push(a[i]);
          }
        } else {
          r.push(a);
        }
      }
      return r;
    }
    /**
     * @param {!Object} elem
     * @param {!Object} options
     * @param {!Object} callback
     * @return {?}
     */
    function ImagesLoaded(elem, options, callback) {
      return this instanceof ImagesLoaded ? ("string" == typeof elem && (elem = document.querySelectorAll(elem)), this.elements = makeArray(elem), this.options = extend({}, this.options), "function" == typeof options ? callback = options : extend(this.options, options), callback && this.on("always", callback), this.getImages(), $ && (this.jqDeferred = new $.Deferred), void setTimeout(function() {
        this.check();
      }.bind(this))) : new ImagesLoaded(elem, options, callback);
    }
    /**
     * @param {string} img
     * @return {undefined}
     */
    function LoadingImage(img) {
      /** @type {string} */
      this.img = img;
    }
    /**
     * @param {string} url
     * @param {!Node} description
     * @return {undefined}
     */
    function Background(url, description) {
      /** @type {string} */
      this.url = url;
      /** @type {!Node} */
      this.element = description;
      /** @type {!Image} */
      this.img = new Image;
    }
    var $ = window.jQuery;
    var console = window.console;
    /** @type {!Object} */
    ImagesLoaded.prototype = Object.create(WebSocketDataModel.prototype);
    ImagesLoaded.prototype.options = {};
    /**
     * @return {undefined}
     */
    ImagesLoaded.prototype.getImages = function() {
      /** @type {!Array} */
      this.images = [];
      this.elements.forEach(this.addElementImages, this);
    };
    /**
     * @param {!Node} elem
     * @return {undefined}
     */
    ImagesLoaded.prototype.addElementImages = function(elem) {
      if ("IMG" == elem.nodeName) {
        this.addImage(elem);
      }
      if (this.options.background === true) {
        this.addElementBackgroundImages(elem);
      }
      var k = elem.nodeType;
      if (k && offs[k]) {
        var elems = elem.querySelectorAll("img");
        /** @type {number} */
        var i = 0;
        for (; i < elems.length; i++) {
          var elem = elems[i];
          this.addImage(elem);
        }
        if ("string" == typeof this.options.background) {
          var hoverElems = elem.querySelectorAll(this.options.background);
          /** @type {number} */
          i = 0;
          for (; i < hoverElems.length; i++) {
            var elem = hoverElems[i];
            this.addElementBackgroundImages(elem);
          }
        }
      }
    };
    var offs = {
      1 : true,
      9 : true,
      11 : true
    };
    return ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
      /** @type {(CSSStyleDeclaration|null)} */
      var style = getComputedStyle(elem);
      if (style) {
        /** @type {!RegExp} */
        var reURL = /url\((['"])?(.*?)\1\)/gi;
        /** @type {(Array<string>|null)} */
        var contentUrls = reURL.exec(style.backgroundImage);
        for (; null !== contentUrls;) {
          /** @type {string} */
          var url = contentUrls && contentUrls[2];
          if (url) {
            this.addBackground(url, elem);
          }
          /** @type {(Array<string>|null)} */
          contentUrls = reURL.exec(style.backgroundImage);
        }
      }
    }, ImagesLoaded.prototype.addImage = function(img) {
      var i = new LoadingImage(img);
      this.images.push(i);
    }, ImagesLoaded.prototype.addBackground = function(url, elem) {
      var background = new Background(url, elem);
      this.images.push(background);
    }, ImagesLoaded.prototype.check = function() {
      /**
       * @param {undefined} data
       * @param {boolean} position
       * @param {string} message
       * @return {undefined}
       */
      function onProgress(data, position, message) {
        setTimeout(function() {
          _this.progress(data, position, message);
        });
      }
      var _this = this;
      return this.progressedCount = 0, this.hasAnyBroken = false, this.images.length ? void this.images.forEach(function(loadingImage) {
        loadingImage.once("progress", onProgress);
        loadingImage.check();
      }) : void this.complete();
    }, ImagesLoaded.prototype.progress = function(data, elem, value) {
      this.progressedCount++;
      this.hasAnyBroken = this.hasAnyBroken || !data.isLoaded;
      this.emitEvent("progress", [this, data, elem]);
      if (this.jqDeferred && this.jqDeferred.notify) {
        this.jqDeferred.notify(this, data);
      }
      if (this.progressedCount == this.images.length) {
        this.complete();
      }
      if (this.options.debug && console) {
        console.log("progress: " + value, data, elem);
      }
    }, ImagesLoaded.prototype.complete = function() {
      /** @type {string} */
      var eventName = this.hasAnyBroken ? "fail" : "done";
      if (this.isComplete = true, this.emitEvent(eventName, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
        /** @type {string} */
        var jqMethod = this.hasAnyBroken ? "reject" : "resolve";
        this.jqDeferred[jqMethod](this);
      }
    }, LoadingImage.prototype = Object.create(WebSocketDataModel.prototype), LoadingImage.prototype.check = function() {
      var isComplete = this.getIsImageComplete();
      return isComplete ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src));
    }, LoadingImage.prototype.getIsImageComplete = function() {
      return this.img.complete && void 0 !== this.img.naturalWidth;
    }, LoadingImage.prototype.confirm = function(isLoaded, message) {
      /** @type {boolean} */
      this.isLoaded = isLoaded;
      this.emitEvent("progress", [this, this.img, message]);
    }, LoadingImage.prototype.handleEvent = function(event) {
      /** @type {string} */
      var method = "on" + event.type;
      if (this[method]) {
        this[method](event);
      }
    }, LoadingImage.prototype.onload = function() {
      this.confirm(true, "onload");
      this.unbindEvents();
    }, LoadingImage.prototype.onerror = function() {
      this.confirm(false, "onerror");
      this.unbindEvents();
    }, LoadingImage.prototype.unbindEvents = function() {
      this.proxyImage.removeEventListener("load", this);
      this.proxyImage.removeEventListener("error", this);
      this.img.removeEventListener("load", this);
      this.img.removeEventListener("error", this);
    }, Background.prototype = Object.create(LoadingImage.prototype), Background.prototype.check = function() {
      this.img.addEventListener("load", this);
      this.img.addEventListener("error", this);
      this.img.src = this.url;
      var isComplete = this.getIsImageComplete();
      if (isComplete) {
        this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        this.unbindEvents();
      }
    }, Background.prototype.unbindEvents = function() {
      this.img.removeEventListener("load", this);
      this.img.removeEventListener("error", this);
    }, Background.prototype.confirm = function(isLoaded, message) {
      /** @type {boolean} */
      this.isLoaded = isLoaded;
      this.emitEvent("progress", [this, this.element, message]);
    }, ImagesLoaded.makeJQueryPlugin = function(jQuery) {
      jQuery = jQuery || window.jQuery;
      if (jQuery) {
        /** @type {string} */
        $ = jQuery;
        /**
         * @param {(!Function|RegExp|string)} options
         * @param {(!Function|RegExp|string)} callback
         * @return {?}
         */
        $.fn.imagesLoaded = function(options, callback) {
          var instance = new ImagesLoaded(this, options, callback);
          return instance.jqDeferred.promise($(this));
        };
      }
    }, ImagesLoaded.makeJQueryPlugin(), ImagesLoaded;
  });
  (function(factory) {
    if ("function" == typeof define && define.amd) {
      define(["jquery"], factory);
    } else {
      if ("object" == typeof module && module.exports) {
        module.exports = factory(require("jquery"));
      } else {
        factory(jQuery);
      }
    }
  })(function($) {
    /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
    var slice = Array.prototype.slice;
    /** @type {function(this:IArrayLike<T>, *=, *=, ...T): !Array<T>} */
    var splice = Array.prototype.splice;
    var defaults = {
      topSpacing : 0,
      bottomSpacing : 0,
      className : "is-sticky",
      wrapperClassName : "sticky-wrapper",
      center : false,
      getWidthFrom : "",
      widthFromWrapper : true,
      responsiveWidth : false
    };
    var $WINDOW = $(window);
    var r = $(document);
    /** @type {!Array} */
    var data = [];
    var windowHeight = $WINDOW.height();
    /**
     * @return {undefined}
     */
    var o = function() {
      var scrollTop = $WINDOW.scrollTop();
      var documentHeight = r.height();
      /** @type {number} */
      var dwh = documentHeight - windowHeight;
      /** @type {number} */
      var extra = scrollTop > dwh ? dwh - scrollTop : 0;
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var tldCount = data.length;
      for (; i < tldCount; i++) {
        var s = data[i];
        var elementTop = s.stickyWrapper.offset().top;
        /** @type {number} */
        var etse = elementTop - s.topSpacing - extra;
        if (s.stickyWrapper.css("height", s.stickyElement.outerHeight()), scrollTop <= etse) {
          if (null !== s.currentTop) {
            s.stickyElement.css({
              width : "",
              position : "",
              top : ""
            });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger("sticky-end", [s]);
            /** @type {null} */
            s.currentTop = null;
          }
        } else {
          /** @type {number} */
          var i = documentHeight - s.stickyElement.outerHeight() - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (i < 0 ? i = i + s.topSpacing : i = s.topSpacing, s.currentTop !== i) {
            var d;
            if (s.getWidthFrom) {
              d = $(s.getWidthFrom).width() || null;
            } else {
              if (s.widthFromWrapper) {
                d = s.stickyWrapper.width();
              }
            }
            if (null == d) {
              d = s.stickyElement.width();
            }
            s.stickyElement.css("width", d).css("position", "fixed").css("top", i);
            s.stickyElement.parent().addClass(s.className);
            if (null === s.currentTop) {
              s.stickyElement.trigger("sticky-start", [s]);
            } else {
              s.stickyElement.trigger("sticky-update", [s]);
            }
            if (s.currentTop === s.topSpacing && s.currentTop > i || null === s.currentTop && i < s.topSpacing) {
              s.stickyElement.trigger("sticky-bottom-reached", [s]);
            } else {
              if (null !== s.currentTop && i === s.topSpacing && s.currentTop < i) {
                s.stickyElement.trigger("sticky-bottom-unreached", [s]);
              }
            }
            /** @type {number} */
            s.currentTop = i;
          }
          var layerE = s.stickyWrapper.parent();
          /** @type {boolean} */
          var g = s.stickyElement.offset().top + s.stickyElement.outerHeight() >= layerE.offset().top + layerE.outerHeight() && s.stickyElement.offset().top <= s.topSpacing;
          if (g) {
            s.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0);
          } else {
            s.stickyElement.css("position", "fixed").css("top", i).css("bottom", "");
          }
        }
      }
    };
    /**
     * @return {undefined}
     */
    var scroller = function() {
      windowHeight = $WINDOW.height();
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var tldCount = data.length;
      for (; i < tldCount; i++) {
        var s = data[i];
        /** @type {null} */
        var r = null;
        if (s.getWidthFrom) {
          if (s.responsiveWidth) {
            r = $(s.getWidthFrom).width();
          }
        } else {
          if (s.widthFromWrapper) {
            r = s.stickyWrapper.width();
          }
        }
        if (null != r) {
          s.stickyElement.css("width", r);
        }
      }
    };
    var methods = {
      init : function(settings) {
        var s = $.extend({}, defaults, settings);
        return this.each(function() {
          var n = $(this);
          var stickyId = n.attr("id");
          /** @type {string} */
          var m = stickyId ? stickyId + "-" + defaults.wrapperClassName : defaults.wrapperClassName;
          var html = $("<div></div>").attr("id", m).addClass(s.wrapperClassName);
          n.wrapAll(html);
          var title = n.parent();
          if (s.center) {
            title.css({
              width : n.outerWidth(),
              marginLeft : "auto",
              marginRight : "auto"
            });
          }
          if ("right" === n.css("float")) {
            n.css({
              float : "none"
            }).parent().css({
              float : "right"
            });
          }
          s.stickyElement = n;
          s.stickyWrapper = title;
          /** @type {null} */
          s.currentTop = null;
          data.push(s);
          methods.setWrapperHeight(this);
          methods.setupChangeListeners(this);
        });
      },
      setWrapperHeight : function(obj) {
        var e = $(obj);
        var skinMenu = e.parent();
        if (skinMenu) {
          skinMenu.css("height", e.outerHeight());
        }
      },
      setupChangeListeners : function(target) {
        if (window.MutationObserver) {
          var observer = new window.MutationObserver(function(mutations) {
            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
              methods.setWrapperHeight(target);
            }
          });
          observer.observe(target, {
            subtree : true,
            childList : true
          });
        } else {
          target.addEventListener("DOMNodeInserted", function() {
            methods.setWrapperHeight(target);
          }, false);
          target.addEventListener("DOMNodeRemoved", function() {
            methods.setWrapperHeight(target);
          }, false);
        }
      },
      update : o,
      unstick : function(options) {
        return this.each(function() {
          var t = this;
          var el = $(t);
          /** @type {number} */
          var commonIndex = -1;
          /** @type {number} */
          var i = data.length;
          for (; i-- > 0;) {
            if (data[i].stickyElement.get(0) === t) {
              splice.call(data, i, 1);
              /** @type {number} */
              commonIndex = i;
            }
          }
          if (commonIndex !== -1) {
            el.unwrap();
            el.css({
              width : "",
              position : "",
              top : "",
              float : ""
            });
          }
        });
      }
    };
    if (window.addEventListener) {
      window.addEventListener("scroll", o, false);
      window.addEventListener("resize", scroller, false);
    } else {
      if (window.attachEvent) {
        window.attachEvent("onscroll", o);
        window.attachEvent("onresize", scroller);
      }
    }
    /**
     * @param {string} t
     * @return {?}
     */
    $.fn.sticky = function(t) {
      return methods[t] ? methods[t].apply(this, slice.call(arguments, 1)) : "object" != typeof t && t ? void $.error("Method " + t + " does not exist on jQuery.sticky") : methods.init.apply(this, arguments);
    };
    /**
     * @param {string} method
     * @return {?}
     */
    $.fn.unstick = function(method) {
      return methods[method] ? methods[method].apply(this, slice.call(arguments, 1)) : "object" != typeof method && method ? void $.error("Method " + method + " does not exist on jQuery.sticky") : methods.unstick.apply(this, arguments);
    };
    $(function() {
      setTimeout(o, 0);
    });
  });
  /**
   * @return {undefined}
   */
  window.onload = function() {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 0);
  };
  $(document).ready(function() {
    /**
     * @param {string} $url
     * @return {undefined}
     */
    function load($url) {
      /** @type {string} */
      location.href = $url;
    }
    /**
     * @return {undefined}
     */
    function main() {
      $(document).on("click", "a", function(event) {
        if ("#" === $(this).attr("href") || $(this).hasClass("no-event")) {
          event.preventDefault();
        } else {
          if ("_blank" === $(this).attr("target")) {
            window.open($(this).attr("href"), "_blank");
          } else {
            event.preventDefault();
            var timelineSequence = new TimelineMax({
              onComplete : load($(this).attr("href"))
            });
            timelineSequence.add(TweenMax.staggerTo(".cover", .75, {
              x : "0%",
              ease : Expo.easeOut
            }, .25));
          }
        }
      });
    }
    /**
     * @return {undefined}
     */
    function render() {
      TweenMax.set("h1", {
        opacity : 0
      });
      TweenMax.set("h2", {
        opacity : 0
      });
      TweenMax.set("h5", {
        opacity : 0
      });
      TweenMax.set("h6", {
        opacity : 0
      });
      var timelineSequence = new TimelineMax({});
      timelineSequence.add(TweenMax.to(".line-loader-container", .25, {
        opacity : 1
      })).add(TweenMax.staggerTo(".cover", .75, {
        x : "100%",
        ease : Expo.easeOut
      }, .25)).add(TweenMax.to(".line-loader-container", .25, {
        opacity : 0
      }), "=-2").add(TweenMax.to(".massive-typo", 3, {
        opacity : 1,
        scale : 1
      })).add(TweenMax.to(".massive-typo-intro", 3, {
        opacity : 1,
        scale : 1
      }), "=-1").add(TweenMax.staggerTo(".underline", .75, {
        x : 0,
        ease : Expo.easeOut
      }, .25), "=-4").add(TweenMax.to("h1", .1, {
        opacity : 1
      }), "=-3.5").add(TweenMax.to("h2", .1, {
        opacity : 1
      }), "=-3.5").add(TweenMax.to("h6", .1, {
        opacity : 1
      }), "=-3.5").add(TweenMax.staggerTo(".underline", .75, {
        x : "105%",
        ease : Expo.easeOut
      }, .25), "=-3.45").add(TweenMax.to(".vertical-text", .55, {
        opacity : 1,
        rotation : 90,
        ease : Expo.easeOut
      }), "=-3.45").add(TweenMax.staggerTo(".vertical-text-intro-new", .55, {
        opacity : 1,
        rotation : 90,
        ease : Expo.easeOut
      }, .35), "=-3.45").add(TweenMax.to(".image-cover", .75, {
        clip : "rect(0px, 380px, 650px, 0)",
        ease : Expo.easeOut
      }), "=-3.5").add(TweenMax.staggerTo(".image-cover-intro", .75, {
        clip : "rect(0px, 380px, 650px, 0)",
        ease : Expo.easeOut
      }, .12), "=-3.5").add(TweenMax.to(".image", .1, {
        visibility : "visible"
      }), "=-3").add(TweenMax.to(".image-cover", .75, {
        clip : "rect(650px, 380px, 650px, 0)",
        ease : Expo.easeOut
      }), "=-2.9").add(TweenMax.staggerTo(".image-cover-intro", .75, {
        clip : "rect(650px, 380px, 650px, 0)",
        ease : Expo.easeOut
      }, .12), "=-2.9").add(TweenMax.to(".big-stripe", 1, {
        clip : "rect(0px, 600px, 160px, 0)",
        ease : Power4.easeOut
      }), "=-2.7").add(TweenMax.to(".tattoo-cover", 1, {
        y : "100%",
        ease : Power4.easeOut
      }), "=-3.2").add(TweenMax.to(".tattoo-count", 1, {
        clip : "rect(0px, 70px, 70px, 0)",
        ease : Power4.easeOut
      }), "=-1.9").add(TweenMax.staggerTo(".trigger-container", .5, {
        opacity : 1,
        y : 0,
        ease : Power4.easeOut
      }, .12), "=-1.7").add(TweenMax.to(".tattoo-nav", 1, {
        clip : "rect(0, 400px, 70px, -50px)",
        ease : Power4.easeOut
      }), "=-1.5").add(TweenMax.staggerTo(".tattoo-back", .5, {
        opacity : 1,
        y : 0,
        ease : Power4.easeOut
      }, .12), "=-1.3");
      atvImg();
      rebuildMasonry();
      (function() {
        [].slice.call(document.querySelectorAll("select.cs-select")).forEach(function(canCreateDiscussions) {
          new SelectFx(canCreateDiscussions);
        });
      })();
      (function() {
        /**
         * @param {!Event} event
         * @return {undefined}
         */
        function onchange(event) {
          classie.add(event.target.parentNode, "input--filled");
        }
        /**
         * @param {!Event} event
         * @return {undefined}
         */
        function change(event) {
          if ("" === event.target.value.trim()) {
            classie.remove(event.target.parentNode, "input--filled");
          }
        }
        [].slice.call(document.querySelectorAll("input.input-field")).forEach(function(e) {
          if ("" !== e.value.trim()) {
            classie.add(e.parentNode, "input--filled");
          }
          e.addEventListener("focus", onchange);
          e.addEventListener("blur", change);
        });
      })();
    }
    /**
     * @return {undefined}
     */
    function renderPaging() {
      if ($("#wrapper-outer")) {
        render();
      }
    }
    /**
     * @return {undefined}
     */
    function show() {
      $(".hamburger").unbind("click").bind("click", function(canCreateDiscussions) {
        $(".hamburger").toggleClass("is-active");
        if (timeline.reversed()) {
          timeline.play();
        } else {
          timeline.reverse();
        }
      });
    }
    /**
     * @return {undefined}
     */
    function init() {
      var timelineSequence = new TimelineMax({
        repeat : -1
      });
      timelineSequence.add(TweenMax.to(".line-scroll-down", 0, {
        y : "-100%"
      })).add(TweenMax.to(".line-scroll-down", 1, {
        delay : .5,
        y : "100%",
        ease : Expo.easeOut
      }));
      var space_camera_pivot = new TimelineMax({
        repeat : -1
      });
      space_camera_pivot.add(TweenMax.to(".line-loader", 0, {
        x : "-200%",
        opacity : 1
      })).add(TweenMax.to(".line-loader", 1, {
        x : "100%",
        opacity : 1,
        ease : Expo.easeOut
      })).add(TweenMax.to(".line-loader", 0, {
        opacity : 1
      })).add(TweenMax.to(".line-loader", 1, {
        x : "-100%",
        opacity : 1,
        ease : Expo.easeOut
      }));
      var controller = new ScrollMagic.Controller;
      var overlay = new ScrollMagic.Controller({
        vertical : false
      });
      if ($("section").each(function() {
        var a = new SplitText($(this, ".split-text-body"), {
          type : "words"
        });
        var q = a.words;
        var timeline = new TimelineMax;
        timeline.add(TweenMax.to($(this).find(".underline-body"), .75, {
          x : 0,
          ease : Expo.easeOut
        })).add(TweenMax.to($(this).find("h3"), .1, {
          opacity : 1
        })).add(TweenMax.to($(this).find(".underline-body"), .75, {
          x : "100%",
          ease : Expo.easeOut
        })).add(TweenMax.staggerFrom($(this).find(q), .8, {
          opacity : 0,
          y : "100%",
          ease : Expo.easeOut
        }, .012), "=-1.2").add(TweenMax.staggerTo($(this).find(".underline-form"), .75, {
          x : 0,
          ease : Expo.easeOut
        }, .12), "=-1").add(TweenMax.to($(this).find(".input-form"), .1, {
          opacity : 1
        }), "=-0.45").add(TweenMax.staggerTo($(this).find(".underline-form"), .75, {
          x : "100%",
          ease : Expo.easeOut
        }, .12));
        var match = (new ScrollMagic.Scene({
          triggerElement : this,
          duration : 0,
          offset : 0
        })).setTween(timeline).addTo(controller);
      }), $(".parallax-container").each(function() {
        var timeline = new TimelineMax;
        timeline.to($(this).find(".parallax-image"), 1, {
          y : 0
        });
        var header = (new ScrollMagic.Scene({
          triggerElement : this,
          duration : "100%",
          offset : "-500%"
        })).addTo(controller).setTween(timeline);
      }), $(".filter-bar-container").each(function() {
        var timeline = new TimelineMax;
        timeline.to(this, 1, {
          opacity : 1,
          y : 0,
          ease : Expo.easeOut
        });
        timeline.to(".view-toggle-container", 1, {
          opacity : 1,
          y : 0,
          ease : Expo.easeOut
        }, "=-1");
        var header = (new ScrollMagic.Scene({
          triggerElement : this,
          duration : 0,
          offset : -400
        })).addTo(controller).setTween(timeline);
      }), $(".news-more").each(function() {
        var timeline = new TimelineMax;
        timeline.to(this, 1, {
          opacity : 1,
          y : 0,
          ease : Expo.easeOut
        });
        var header = (new ScrollMagic.Scene({
          triggerElement : this,
          duration : 0,
          offset : 0
        })).addTo(controller).setTween(timeline);
      }), $(".masonry-grid").each(function() {
        var timeline = new TimelineMax;
        timeline.add(TweenMax.staggerTo($(this).find(".masonry-module"), .75, {
          opacity : 1,
          y : 0,
          ease : Expo.easeOut
        }, 1));
        var match = (new ScrollMagic.Scene({
          triggerElement : this,
          duration : 0,
          offset : "-75%"
        })).setTween(timeline).addTo(controller);
      }), $(".merch-module").each(function() {
        var timeline = new TimelineMax;
        timeline.to(this, 1, {
          opacity : 1,
          y : 0,
          ease : Expo.easeOut
        });
        var header = (new ScrollMagic.Scene({
          triggerElement : this,
          duration : 0,
          offset : "-125%"
        })).addTo(controller).setTween(timeline);
      }), $(".merch-module").on("mouseenter", function() {
        var timelineSequence = new TimelineMax;
        timelineSequence.add(TweenMax.to(this, .75, {
          scale : 1.05,
          boxShadow : "0px 18px 50px 0px rgba(0,0,0,1)"
        })).add(TweenMax.to($(this).find(".news-arrow"), .75, {
          x : 35,
          ease : Expo.easeOut
        }), "=-0.65");
      }).on("mouseleave", function() {
        var timelineSequence = new TimelineMax;
        timelineSequence.add(TweenMax.to(this, .75, {
          scale : 1,
          boxShadow : "0px 12px 32px 0px rgba(0,0,0,0.25)"
        })).add(TweenMax.to($(this).find(".news-arrow"), .75, {
          x : 0,
          ease : Expo.easeOut
        }), "=-0.65");
      }), $(".masonry-module").on("mouseenter", function() {
        var timelineSequence = new TimelineMax;
        timelineSequence.add(TweenMax.to(this, .75, {
          scale : 1.05,
          boxShadow : "0px 18px 50px 0px rgba(0,0,0,1)"
        })).add(TweenMax.to($(this).find(".merch-arrow"), .75, {
          x : 35,
          ease : Expo.easeOut
        }), "=-0.65");
      }).on("mouseleave", function() {
        var timelineSequence = new TimelineMax;
        timelineSequence.add(TweenMax.to(this, .75, {
          scale : 1,
          boxShadow : "0px 12px 32px 0px rgba(0,0,0,0.25)"
        })).add(TweenMax.to($(this).find(".merch-arrow"), .75, {
          x : 0,
          ease : Expo.easeOut
        }), "=-0.65");
      }), $(".tile").on("mouseover", function() {
        $(this).children(".photo").css({
          transform : "scale(" + $(this).attr("data-scale") + ")"
        });
      }).on("mouseout", function() {
        $(this).children(".photo").css({
          transform : "scale(1)"
        });
      }).on("mousemove", function(event) {
        $(this).children(".photo").css({
          "transform-origin" : (event.pageX - $(this).offset().left) / $(this).width() * 100 + "% " + (event.pageY - $(this).offset().top) / $(this).height() * 100 + "%"
        });
      }).each(function() {
        $(this).append('<div class="photo"></div>').children(".photo").css({
          "background-image" : "url(" + $(this).attr("data-image") + ")"
        });
      }), $("#intro").length > 0 && document.documentElement.clientWidth > 900) {
        /**
         * @param {!Object} event
         * @return {?}
         */
        var scroll = function(event) {
          var e = event || window.event;
          return document.body.doScroll ? document.body.doScroll(e.wheelDelta > 0 ? "left" : "right") : (e.wheelDelta || e.detail) > 0 ? document.body.scrollLeft -= 25 : document.body.scrollLeft += 25, false;
        };
        if ("onmousewheel" in document.body) {
          /** @type {function(!Object): ?} */
          document.body.onmousewheel = scroll;
        } else {
          document.body.addEventListener("DOMMouseScroll", scroll);
        }
      }
      $(".intro-section").each(function() {
        var timeline = new TimelineMax;
        timeline.add(TweenMax.staggerTo($(this).find(".underline-intro"), .75, {
          x : 0,
          ease : Expo.easeOut
        }, .25)).add(TweenMax.to($(this).find("h5"), .1, {
          visibility : "visible",
          opacity : 1
        })).add(TweenMax.staggerTo($(this).find(".underline-intro"), .75, {
          x : "105%",
          ease : Expo.easeOut
        }, .25), "=-0.7").add(TweenMax.staggerTo($(this).find(".image-cover-intro-scroll"), .75, {
          clip : "rect(0px, 380px, 650px, 0)",
          ease : Expo.easeOut
        }, .12), "=-0.6").add(TweenMax.to($(this).find(".image-intro"), .1, {
          visibility : "visible"
        }), "=-0.5").add(TweenMax.staggerTo($(this).find(".image-cover-intro-scroll"), .75, {
          clip : "rect(650px, 380px, 650px, 0)",
          ease : Expo.easeOut
        }, .12), "=-0.4").add(TweenMax.staggerTo($(this).find(".vertical-text-intro"), .55, {
          opacity : 1,
          rotation : 90,
          ease : Expo.easeOut
        }, .12), "=-0.4");
        var header = (new ScrollMagic.Scene({
          triggerElement : this,
          duration : 0,
          offset : "-50%"
        })).addTo(overlay).setTween(timeline);
      });
      var timeline = new TimelineMax({
        paused : true,
        reversed : true
      });
      var tl = new TimelineMax({
        paused : true,
        reversed : true
      });
      $(".stripes-trigger").on("mouseenter", function() {
        timeline = new TimelineMax({
          paused : true,
          reversed : true
        });
        timeline.add(TweenMax.to($(this).find(".intro-stripe-1"), .55, {
          clip : "rect(0px, 400px, 800px, 0)",
          ease : Expo.easeOut
        })).add(TweenMax.to($(this).find(".intro-stripe-2"), .55, {
          clip : "rect(0px, 400px, 800px, 0)",
          ease : Expo.easeOut
        }), "=-0.55").add(TweenMax.to($(this).find(".intro-stripe-3"), .55, {
          clip : "rect(0px, 400px, 800px, 0)",
          ease : Expo.easeOut
        }), "=-0.55").add(TweenMax.to($(this).find(".intro-stripe-4"), .55, {
          clip : "rect(0px, 400px, 800px, 0)",
          ease : Expo.easeOut
        }), "=-0.55").add(TweenMax.to($(this).find(".intro-stripe-5"), .55, {
          clip : "rect(0px, 400px, 800px, 0)",
          ease : Expo.easeOut
        }), "=-0.55").add(TweenMax.to($(this).find(".intro-stripe-6"), .55, {
          clip : "rect(0px, 400px, 800px, 0)",
          ease : Expo.easeOut
        }), "=-0.55");
        timeline.play();
      }).on("mouseleave", function() {
        timeline.kill();
        tl = new TimelineMax({
          paused : true,
          reversed : true
        });
        tl.add(TweenMax.to($(this).find(".intro-stripe-1"), .3, {
          clip : "rect(0px, 400px, 0px, 0)",
          ease : Expo.easeOut
        })).add(TweenMax.to($(this).find(".intro-stripe-2"), .3, {
          clip : "rect(800px, 400px, 800px, 0)",
          ease : Expo.easeOut
        }), "=-0.30").add(TweenMax.to($(this).find(".intro-stripe-3"), .3, {
          clip : "rect(800px, 400px, 800px, 0)",
          ease : Expo.easeOut
        }), "=-0.30").add(TweenMax.to($(this).find(".intro-stripe-4"), .3, {
          clip : "rect(800px, 400px, 800px, 0)",
          ease : Expo.easeOut
        }), "=-0.30").add(TweenMax.to($(this).find(".intro-stripe-5"), .3, {
          clip : "rect(800px, 400px, 800px, 0)",
          ease : Expo.easeOut
        }), "=-0.30").add(TweenMax.to($(this).find(".intro-stripe-6"), .3, {
          clip : "rect(800px, 400px, 800px, 0)",
          ease : Expo.easeOut
        }), "=-0.30");
        tl.play();
      });
      $(".reveal-tattoo").hover(function() {
        var timelineSequence = new TimelineMax({});
        timelineSequence.add(TweenMax.to(".image-nav-tattoo", .75, {
          clip : "rect(0px, 260px, 650px, 0px)",
          ease : Expo.easeOut
        }));
      }, function() {
        var timelineSequence = new TimelineMax({});
        timelineSequence.add(TweenMax.to(".image-nav-tattoo", .55, {
          clip : "rect(650px, 260px, 650px, 0px)",
          ease : Expo.easeOut
        })).add(TweenMax.to(".image-nav-tattoo", 0, {
          clip : "rect(0px, 260px, 0px, 0px)"
        }));
      });
      $(".reveal-studio").hover(function() {
        var timelineSequence = new TimelineMax({});
        timelineSequence.add(TweenMax.to(".image-nav-studio", .75, {
          clip : "rect(0px, 260px, 650px, 0px)",
          ease : Expo.easeOut
        }));
      }, function() {
        var timelineSequence = new TimelineMax({});
        timelineSequence.add(TweenMax.to(".image-nav-studio", .55, {
          clip : "rect(650px, 260px, 650px, 0px)",
          ease : Expo.easeOut
        })).add(TweenMax.to(".image-nav-studio", 0, {
          clip : "rect(0px, 260px, 0px, 0px)"
        }));
      });
      $(".reveal-news").hover(function() {
        var timelineSequence = new TimelineMax({});
        timelineSequence.add(TweenMax.to(".image-nav-news", .75, {
          clip : "rect(0px, 260px, 650px, 0px)",
          ease : Expo.easeOut
        }));
      }, function() {
        var timelineSequence = new TimelineMax({});
        timelineSequence.add(TweenMax.to(".image-nav-news", .55, {
          clip : "rect(650px, 260px, 650px, 0px)",
          ease : Expo.easeOut
        })).add(TweenMax.to(".image-nav-news", 0, {
          clip : "rect(0px, 260px, 0px, 0px)"
        }));
      });
      $(".reveal-merch").hover(function() {
        var timelineSequence = new TimelineMax({});
        timelineSequence.add(TweenMax.to(".image-nav-merch", .75, {
          clip : "rect(0px, 260px, 650px, 0px)",
          ease : Expo.easeOut
        }));
      }, function() {
        var timelineSequence = new TimelineMax({});
        timelineSequence.add(TweenMax.to(".image-nav-merch", .55, {
          clip : "rect(650px, 260px, 650px, 0px)",
          ease : Expo.easeOut
        })).add(TweenMax.to(".image-nav-merch", 0, {
          clip : "rect(0px, 260px, 0px, 0px)"
        }));
      });
      $(".reveal-contacts").hover(function() {
        var timelineSequence = new TimelineMax({});
        timelineSequence.add(TweenMax.to(".image-nav-contacts", .75, {
          clip : "rect(0px, 260px, 650px, 0px)",
          ease : Expo.easeOut
        }));
      }, function() {
        var timelineSequence = new TimelineMax({});
        timelineSequence.add(TweenMax.to(".image-nav-contacts", .55, {
          clip : "rect(650px, 260px, 650px, 0px)",
          ease : Expo.easeOut
        })).add(TweenMax.to(".image-nav-contacts", 0, {
          clip : "rect(0px, 260px, 0px, 0px)"
        }));
      });
    }
    /** @type {boolean} */
    var s = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
    /** @type {boolean} */
    var refresh = "undefined" != typeof InstallTrigger;
    /** @type {boolean} */
    var l = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0;
    /** @type {boolean} */
    var u = !!document.documentMode;
    /** @type {boolean} */
    var c = !u && !!window.StyleMedia;
    /** @type {boolean} */
    var g = !!window.chrome && !!window.chrome.webstore;
    /** @type {boolean} */
    var f = (g || s) && !!window.CSS;
    if (s) {
      $("html").addClass("browser-opera");
    } else {
      if (refresh) {
        $("html").addClass("browser-firefox");
      } else {
        if (l) {
          $("html").addClass("browser-safari");
        } else {
          if (u) {
            $("html").addClass("browser-ie");
          } else {
            if (c) {
              $("html").addClass("browser-edge");
            } else {
              if (g) {
                $("html").addClass("browser-chrome");
              } else {
                if (f) {
                  $("html").addClass("is-blink");
                }
              }
            }
          }
        }
      }
    }
    if ($(".filter-bar-container").length > 0) {
      $(".filter-bar-container").sticky({
        topSpacing : 0,
        bottomSpacing : $("#footer").outerHeight() + $(".footer-nav").outerHeight() + $(".nav-animation.footer-nav-main").outerHeight()
      });
      $(window).scroll(function() {
        if ($(window).scrollTop() + 80 >= $(".filter-bar-container").offset().top) {
          $(".hamburger-container").addClass("filter-active");
        } else {
          $(".hamburger-container").removeClass("filter-active");
        }
      });
    }
    $(".news-content, .fix-markup").find("p").addClass("center-text");
    if ($("body").hasClass("single-post")) {
      $(".nav-animation").find(".reveal-news").parent().addClass("selected");
    }
    if ($("body").hasClass("single-tattoos_post-type")) {
      $(".nav-animation").find(".reveal-tattoo").parent().addClass("selected");
    }
    var timeline = new TimelineMax({
      paused : true,
      reversed : true
    });
    timeline.add(TweenMax.to("#navigation", .1, {
      display : "block"
    })).add(TweenMax.to("#navigation", .5, {
      x : 0,
      ease : Expo.easeOut
    })).add(TweenMax.staggerTo(".navigation", .5, {
      x : 0,
      ease : Expo.easeOut
    }, .2), "=-0.1").add(TweenMax.to(".nav-logo", .35, {
      x : 0,
      ease : Expo.easeOut
    })).add(TweenMax.staggerTo(".open-nav", .35, {
      y : 0,
      opacity : 1,
      scale : 1,
      ease : Expo.easeOut
    }, .15), "=-0.25");
    init();
    show();
    renderPaging();
    main();
  });
  $(function() {
    FastClick.attach(document.body);
  });
  $(function() {
    var form = $("#contact-form");
    var e = $("#form-messages");
    $(form).submit(function(event) {
      event.preventDefault();
      var maindata3 = $(form).serialize();
      $.ajax({
        type : "POST",
        url : $(form).attr("action"),
        data : maindata3
      }).done(function(t) {
        $(e).removeClass("error");
        $(e).addClass("success");
        $(e).text(t);
      }).fail(function(elem) {
        $(e).removeClass("success");
        $(e).addClass("error");
        if ("" !== elem.responseText) {
          $(e).text(elem.responseText);
        } else {
          $(e).text("Oops! An error occured and your message could not be sent.");
        }
      });
    });
  });
  /**
   * @return {?}
   * @this {!String}
   */
  String.prototype.cleanup = function() {
    return this.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
  };
} catch (e) {
}
;