(function (factory, window) {
    "use strict";

    /* istanbul ignore next */
    // define an AMD module that relies on 'leaflet'
    if (typeof define === 'function' && define.amd) {
        define(['leaflet'], factory);

        // define a Common JS module that relies on 'leaflet'
    } else if (typeof exports === 'object') {
        module.exports = factory(require('leaflet'));
    }

    // attach your plugin to the global 'L' variable
    else if (typeof window !== 'undefined' && window.L) {
        window.L.Polyline.AntPath = factory(L);

        window.L.polyline.antPath = function (path, options) {
            return new window.L.Polyline.AntPath(path, options);
        };
    }
}(function (L) {
    "use strict";
    /**
     * Builds a polyline with a ant path animation
     * @constructor
     * @extends L.FeatureGroup
     * @exports L.Polyline.AntPath
     */
    var AntPath = L.FeatureGroup.extend({
        _path: null,
        _animatedPathid: null,
        _animatedPathClass: 'leaflet-ant-path',

        /* default options */
        options: {
            paused: true,
            delay: 5000,
            dashArray: [10, 20],
            pulseColor: '#FFFFFF'
        },

        initialize: function (path, options) {
            L.LayerGroup.prototype.initialize.call(this);
            L.Util.setOptions(this, options);
            this._map = null;
            this._path = path;
            this._animatedPathid = 'ant-path-' + new Date().getTime();
            this._draw();
        },

        onAdd: function (map) {
            this._map = map;
            this._map.on('zoomend', this._calculateAnimationSpeed, this);

            this._draw();
            this._calculateAnimationSpeed();
        },

        onRemove: function (map) {
            this._map.off('zoomend', this._calculateAnimationSpeed, this);
            this._map = null;
            L.LayerGroup.prototype.onRemove.call(this, map);
        },

        pause: function () {
            if (this.options.paused) return;
            this.options.paused = true;
            var animatedPolyElement = document.getElementsByClassName(this._animatedPathid);
            for (var i = 0; i < animatedPolyElement.length; i++) {
                animatedPolyElement[i].removeAttribute('style');
                animatedPolyElement[i].removeAttribute('style');
                animatedPolyElement[i].removeAttribute('style');
            }
        },

        resume: function() {
            this._calculateAnimationSpeed();
        },

        _draw: function () {
            var pathOpts = {};
            var pulseOpts = {};

            L.extend(pulseOpts, this.options);
            L.extend(pathOpts, this.options);

            pulseOpts.color = pulseOpts.pulseColor || this.options.pulseColor;
            pulseOpts.className = this._animatedPathClass + ' ' + this._animatedPathid;

            delete pathOpts.dashArray;

            this.addLayer(L.polyline(this._path, pathOpts));
            this.addLayer(L.polyline(this._path, pulseOpts));
        },


        _calculateAnimationSpeed: function () {
            if (!this.options.paused) {
                return;
            }
            this.options.paused = false;
            var zoomLevel = this._map.getZoom();
            var animatedPolyElement = document.getElementsByClassName(this._animatedPathid);

            //Get the animation duration (in seconds) based on the given delay and the current zoom level
            var animationDuration = 1 + (this.options.delay / 3) / zoomLevel + 's';

            //TODO Use requestAnimationFrame to support IE
            for (var i = 0; i < animatedPolyElement.length; i++) {
                animatedPolyElement[i].setAttribute('style', '-webkit-animation-duration:' + animationDuration);
                animatedPolyElement[i].setAttribute('style', '-moz-animation-duration:' + animationDuration);
                animatedPolyElement[i].setAttribute('style', 'animation-duration:' + animationDuration);
            }
        }
    });

    return AntPath;
}, window));


(function () {
    function createMulti(Klass) {

        return L.FeatureGroup.extend({



            initialize: function (latlngs, options) {
                this._layers = {};
                this._options = options;
                this.setLatLngs(latlngs);
            },

            setLatLngs: function (latlngs) {
                var i = 0,
                    len = latlngs.length;

                this.eachLayer(function (layer) {
                    if (i < len) {
                        layer.setLatLngs(latlngs[i++]);
                    } else {
                        this.removeLayer(layer);
                    }
                }, this);

                while (i < len) {
                    this.addLayer(new Klass(latlngs[i++], this._options));
                }

                return this;
            },

            getLatLngs: function () {
                var latlngs = [];

                this.eachLayer(function (layer) {
                    latlngs.push(layer.getLatLngs());
                });

                return latlngs;
            },


            pause: function () {
                this.eachLayer(function (layer) {
                    layer.pause();
                });
            },

            resume: function() {
                this.eachLayer(function (layer) {
                    layer.resume();
                });
            }
        });
    }

    L.MultiAntPath = createMulti(L.Polyline.AntPath);

    L.multiAntPath = function (latlngs, options) {
        return new L.MultiAntPath(latlngs, options);
    };
}());