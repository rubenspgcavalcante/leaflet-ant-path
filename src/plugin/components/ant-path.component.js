import {FeatureGroup, LayerGroup, Util, Polyline} from "leaflet";

/**
 * Builds the ant path polygon
 * @class
 * @extends {L.FeatureGroup}
 */
class AntPath extends FeatureGroup {
    _map = null;
    _path = null;
    _animatedPathId = null;
    _animatedPathClass = 'leaflet-ant-path';

    _defaultOptions = {
        paused: false,
        delay: 400,
        dashArray: [10, 20],
        weight: 5,
        opacity: 0.5,
        color: '#0000FF',
        pulseColor: '#FFFFFF'
    };

    constructor(path, customOptions={}) {
        super();
        Util.setOptions(this, {...this._defaultOptions, ...customOptions});
        this._path = path;
        this._animatedPathId = `ant-path-${new Date().getTime()}`;
        this._draw();
    }

    onAdd(map) {
        this._map = map;
        this._map.on('zoomend', this._calculateAnimationSpeed, this);

        this._draw();
        this._calculateAnimationSpeed();
    }

    onRemove(map) {
        this._map.off('zoomend', this._calculateAnimationSpeed, this);
        this._map = null;
        super.onRemove(map);
    }

    pause() {
        const {options} = this;
        if (options.paused) {
            return false;
        }

        const animatedPolyElement = document.getElementsByClassName(this._animatedPathId);
        for (let el in animatedPolyElement) {
            el.removeAttribute('style');
        }
        return options.paused = true;
    }

    resume() {
        this._calculateAnimationSpeed();
    }

    _draw() {
        const {options, _path, _animatedPathClass, _animatedPathId} = this;

        let pathOpts = {...options};
        let pulseOpts = {...options};

        pulseOpts.color = pulseOpts.pulseColor || options.pulseColor;
        pulseOpts.className = `${_animatedPathClass} ${_animatedPathId}`;
        delete pathOpts.dashArray;

        this.addLayer(new Polyline(_path, pathOpts));
        this.addLayer(new Polyline(_path, pulseOpts));
    }

    _calculateAnimationSpeed() {
        const {options, _map, _animatedPathId} = this;

        if (options.paused || !_map) {
            return;
        }

        const zoomLevel = _map.getZoom();
        const animatedPolyElement = document.getElementsByClassName(_animatedPathId);

        //Get the animation duration (in seconds) based on the given delay and the current zoom level
        var animationDuration = 1 + (options.delay / 3) / zoomLevel + 's';

        //TODO Use requestAnimationFrame to better support IE
        var rulesSuffixes = ['-webkit-', '-moz-', '-ms-', '-o-', ''];
        for (let el of animatedPolyElement) {
            for (let suffix of rulesSuffixes) {
                el.setAttribute('style', `${suffix}animation-duration: ${animationDuration}`);
            }
        }
    }
}

export default AntPath;