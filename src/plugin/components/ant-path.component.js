import {FeatureGroup, LayerGroup, Util, Polyline, extend} from "leaflet";

/**
 * Builds the ant path polygon
 * @constructor
 * @extends {FeatureGroup}
 */
const AntPath = FeatureGroup.extend({
    _path: null,
    _animatedPathId: null,
    _animatedPathClass: 'leaflet-ant-path',

    /* default options */
    options: {
        paused: false,
        delay: 400,
        dashArray: [10, 20],
        pulseColor: '#FFFFFF'
    },

    initialize (path, options) {
        LayerGroup.prototype.initialize.call(this);
        Util.setOptions(this, options);
        this._map = null;
        this._path = path;
        this._animatedPathId = 'ant-path-' + new Date().getTime();
        this._draw();
    },

    onAdd (map) {
        this._map = map;
        this._map.on('zoomend', this._calculateAnimationSpeed, this);

        this._draw();
        this._calculateAnimationSpeed();
    },

    onRemove (map) {
        this._map.off('zoomend', this._calculateAnimationSpeed, this);
        this._map = null;
        LayerGroup.prototype.onRemove.call(this, map);
    },

    pause () {
        if (this.options.paused) {
            return false;
        }

        var animatedPolyElement = document.getElementsByClassName(this._animatedPathId);
        for (var i = 0; i < animatedPolyElement.length; i++) {
            animatedPolyElement[i].removeAttribute('style');
            animatedPolyElement[i].removeAttribute('style');
            animatedPolyElement[i].removeAttribute('style');
        }

        return this.options.paused = true;
    },

    resume () {
        this._calculateAnimationSpeed();
    },

    _draw () {
        var pathOpts = {};
        var pulseOpts = {};

        extend(pulseOpts, this.options);
        extend(pathOpts, this.options);

        pulseOpts.color = pulseOpts.pulseColor || this.options.pulseColor;
        pulseOpts.className = this._animatedPathClass + ' ' + this._animatedPathId;

        delete pathOpts.dashArray;

        this.addLayer(new Polyline(this._path, pathOpts));
        this.addLayer(new Polyline(this._path, pulseOpts));
    },


    _calculateAnimationSpeed () {
        if (this.options.paused || !this._map) {
            return;
        }

        var zoomLevel = this._map.getZoom();
        var animatedPolyElement = document.getElementsByClassName(this._animatedPathId);

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

export default AntPath;