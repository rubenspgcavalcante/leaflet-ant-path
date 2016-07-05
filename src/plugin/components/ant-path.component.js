import {FeatureGroup, LayerGroup, Util, Polyline, extend} from "leaflet";

/**
 * Builds the ant path polygon
 * @constructor
 * @extends {L.FeatureGroup}
 */
const AntPath = FeatureGroup.extend({
    _map: null,
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

        //TODO Use requestAnimationFrame to better support IE
        var rulesSuffixes = ['-webkit-', '-moz-', '-ms-', '-o-', ''];
        Array.prototype.map.call(animatedPolyElement, el => {
            rulesSuffixes.map((suffix)=> {
                el.setAttribute('style', `${suffix}animation-duration: ${animationDuration}`);
            });
        });
    }
});

export default AntPath;