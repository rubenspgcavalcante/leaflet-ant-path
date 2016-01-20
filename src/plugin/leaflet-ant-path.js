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
        window.L.AntPath = factory(L);
    }
}(function (L) {
    "use strict";

    /**
     * Builds a polyline with a ant path animation
     * @constructor
     * @extends L.FeatureGroup
     * @exports L.AntPath
     */
    var AntPath = L.FeatureGroup.extend({
        _path: null,
        _animatedPathid: 'ant-path-' + new Date().getTime(),
        _animatedPathClass: 'leaflet-ant-path',

        options: {},

        initialize: function (path, options) {
            L.LayerGroup.prototype.initialize.call(this);
            L.Util.setOptions(this, options);
            this._map = null;
            this._path = path;

            this._draw();
        },

        onAdd: function (map) {
            this._map = map;
            this._map.on('zoomend', this._calculateAnimationSpeed, this);

            this._draw();
            this._calculateAnimationSpeed();
        },

        onRemove: function (map) {
            this._map = null;
            this._map.off('zoomend', this._softRedraw, this);
            L.LayerGroup.prototype.onRemove.call(this, map);
        },

        _draw: function () {
            this.addLayer(L.polyline(this._path, this.options));

            var optsCopy = {};
            L.extend(optsCopy, this.options);
            optsCopy.color = this.options.pulseColor || 'white';
            optsCopy.className = this._animatedPathClass + ' ' + this._animatedPathid;

            this.addLayer(L.polyline(this._path, optsCopy));
        },

        _calculateAnimationSpeed: function () {
            var zoomLevel = this._map.getZoom();
            var animatedPolyElement = document.getElementsByClassName(this._animatedPathid);
            var animationDuration = 200 / zoomLevel + 's';

            //TODO Use requestAnimationFrame to support IE
            animatedPolyElement[0].setAttribute('style', '-webkit-animation-duration:' + animationDuration);
            animatedPolyElement[0].setAttribute('style', '-moz-animation-duration:' + animationDuration);
            animatedPolyElement[0].setAttribute('style', 'animation-duration:' + animationDuration);
        }
    });

    return AntPath;
}, window));

