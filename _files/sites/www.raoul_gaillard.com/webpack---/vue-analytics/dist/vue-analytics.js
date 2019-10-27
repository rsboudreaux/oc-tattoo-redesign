/*!
 * vue-analytics v3.2.1
 * (c) 2017 Matteo Gabriele
 * Released under the ISC License.
 */
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('load-script')) :
        typeof define === 'function' && define.amd ? define(['load-script'], factory) :
        (global.VueAnalytics = factory(global.loadScript));
}(this, (function(loadScript) {
    'use strict';

    loadScript = 'default' in loadScript ? loadScript['default'] : loadScript;

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    /**
     * Whining helper
     * @param  {String} message
     */
    var warn = function warn() {
        for (var _len = arguments.length, message = Array(_len), _key = 0; _key < _len; _key++) {
            message[_key] = arguments[_key];
        }

        /* eslint-disable */
        console.warn('[VueAnalytics] ' + message.join(' '));
        /* eslint-enable */
    };

    /**
     * Returns if a string exists in the array of routes
     * @param  {String} name
     * @return {Boolean}
     */
    var exists = function exists(name) {
        return !!(config.ignoreRoutes.length && config.ignoreRoutes.indexOf(name) !== -1);
    };

    /**
     * Merges two objects
     * @param  {Object} obj
     * @param  {Object} src
     * @return {Object}
     */
    var merge = function merge(obj, src) {
        Object.keys(src).forEach(function(key) {
            if (obj[key] && _typeof(obj[key]) === 'object') {
                merge(obj[key], src[key]);
                return;
            }

            obj[key] = src[key];
        });

        return obj;
    };

    function getName(value) {
        return value.replace(/-/gi, '');
    }

    function getListId() {
        return [].concat(config.id);
    }

    /**
     * Default configuration
     */
    var config = {
        debug: {
            enabled: false,
            trace: false,
            sendHitTask: true
        },
        autoTracking: true,
        id: null,
        userId: null,
        ignoreRoutes: []
    };

    /**
     * Returns the new configuation object
     * @param  {Object} params
     * @return {Object}
     */
    function updateConfig(params) {
        return merge(config, params);
    }

    function ga(method) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        if (typeof window.ga === 'undefined') {
            return;
        }

        var ids = getListId();

        ids.forEach(function(id) {
            var _window;

            var domain = getName(id);
            var name = ids.length > 1 ? domain + '.' + method : method;

            (_window = window).ga.apply(_window, [name].concat(args));
        });
    }

    /**
     * Page tracking
     * @param  {String} page
     * @param  {String} title
     * @param  {String} location
     */
    function page(page) {
        var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var location = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        ga('send', 'pageview', {
            page: page,
            title: title,
            location: location
        });
    }

    /**
     * Updating tracker data
     * @param {any} data
     */
    function set$1() {
        if (typeof window.ga === 'undefined') {
            return;
        }

        for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
            data[_key] = arguments[_key];
        }

        if (!data.length) {
            return;
        }

        if (_typeof(data[0]) === 'object' && data[0].constructor === Object) {
            // Use the ga.set with an object literal
            ga('set', data[0]);
            return;
        }

        if (data.length < 2 || typeof data[0] !== 'string' && typeof data[1] !== 'string') {
            warn('$ga.set needs a field name and a field value, or you can pass an object literal');
            return;
        }

        // Use ga.set with field name and field value
        ga('set', data[0], data[1]);
    }

    /**
     * Enable route autoTracking page
     * @param  {VueRouter} router
     */
    function autoTracking(router) {
        if (config.manual && !router && config.autoTracking) {
            var url = 'https://github.com/MatteoGabriele/vue-analytics#auto-tracking';
            warn('auto-tracking doesn\'t work without a router instance.', url);
            return;
        }

        if (!config.autoTracking || !router) {
            return;
        }

        // Track the first page when the user lands on it
        var route = router.currentRoute;

        if (!exists(route.name)) {
            page(route.path, route.name, window.location.href);
        }

        // Track all other pages
        router.afterEach(function(_ref) {
            var path = _ref.path,
                name = _ref.name;

            if (exists(name)) {
                return;
            }

            set$1('page', path);
            page(path, name, window.location.href);
        });
    }

    /**
     * Event tracking
     * @param  {String} category
     * @param  {String} action
     * @param  {String} [label='']
     * @param  {Number} [value=0]
     */
    function events(category, action) {
        var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        ga('send', 'event', category, action, label, value);
    }

    /**
     * Time tracking
     * @param  {String} category
     * @param  {String} variable
     * @param  {Number} value
     * @param  {String} [label='']
     */
    function time(category, variable, value) {
        var label = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

        ga('send', 'timing', category, variable, value, label);
    }

    /**
     * Plain access to the GA
     * with the query method is possible to pass everything.
     * if there's some new command that is not implemented yet, just use this
     * @param  {any} args
     */
    function query() {
        ga.apply(undefined, arguments);
    }

    var features = {
        autoTracking: autoTracking,
        trackEvent: events,
        trackPage: page,
        trackTime: time,
        set: set$1,
        query: query
    };

    function init(router, callback) {
        if (config.manual) {
            return;
        }

        if (!config.id || !config.id.length) {
            var url = 'https://github.com/MatteoGabriele/vue-analytics#usage';
            warn('Please enter a Google Analaytics tracking ID', url);
            return;
        }

        var options = config.userId || {};
        var debugSource = config.debug.enabled ? '_debug' : '';
        var source = 'https://www.google-analytics.com/analytics' + debugSource + '.js';

        loadScript(source, function(error, script) {
            if (error) {
                warn('Ops! Could\'t load the Google Analytics script');
                return;
            }

            var poll = setInterval(function() {
                if (!window.ga) {
                    return;
                }

                clearInterval(poll);

                if (config.debug.enabled) {
                    window.ga_debug = {
                        trace: config.debug.trace
                    };
                }

                var ids = getListId();
                ids.forEach(function(id) {
                    if (ids.length > 1) {
                        // we need to register the name used by the ga methods so that
                        // when a method is used Google knows which account did it
                        options['name'] = getName(id);
                    }

                    window.ga('create', id, 'auto', options);
                });

                // the callback is fired when window.ga is available and before any other hit is sent
                // see MatteoGabriele/vue-analytics/issues/20
                if (callback && typeof callback === 'function') {
                    callback();
                }

                if (!config.debug.sendHitTask) {
                    features.set('sendHitTask', null);
                }

                // send the first pageview hit
                ga('send', 'pageview');

                features.autoTracking(router);
            }, 10);
        });
    }

    /**
     * Vue installer
     * @param  {Vue instance} Vue
     * @param  {Object} [options={}]
     */
    function install(Vue) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var router = options.router;


        delete options.router;
        updateConfig(options);

        init(router, options.onAnalyticsReady);

        Vue.prototype.$ga = Vue.$ga = features;
    }

    var index = {
        install: install,
        getName: getName
    };

    return index;

})));



//////////////////
// WEBPACK FOOTER
// ./~/vue-analytics/dist/vue-analytics.js
// module id = 76
// module chunks = 0