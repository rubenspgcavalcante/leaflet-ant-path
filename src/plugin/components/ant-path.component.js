import {FeatureGroup, LayerGroup, Util, Polyline} from "leaflet";
import Symbol from "core-js/es6/symbol";
import regeneratorRuntime from "regenerator-runtime";

const Layers = {main: Symbol("main"), pulse: Symbol("pulse")};

/**
 * Builds the ant path polygon
 * @class
 * @extends {L.FeatureGroup}
 */
export default class AntPath extends FeatureGroup {
    _map = null;
    _path = null;
    _animatedPathId = null;
    _animatedPathClass = "leaflet-ant-path";

    _defaultOptions = {
        paused: false,
        delay: 400,
        dashArray: [10, 20],
        weight: 5,
        opacity: 0.5,
        color: "#0000FF",
        pulseColor: "#FFFFFF"
    };

    constructor(path, customOptions = {}) {
        super();

        //Symbols
        this[Layers.main] = null;
        this[Layers.pulse] = null;

        Util.setOptions(this, {...this._defaultOptions, ...customOptions});
        this._path = path;
        this._animatedPathId = `ant-path-${new Date().getTime()}`;
        this._mount();
    }

    map(call) {
        //This prevents if some class extending AntPath to return a instance of AntPath itself instead of the invoker class
        const Species = this.constructor[Symbol.species];
        return new Species(this._path.map(call), {...this.options});
    }

    static get[Symbol.species]() {
        return this;
    }

    get [Symbol.toStringTag]() {
        return "L.Polyline.AntPath";
    }

    *[Symbol.iterator]() {
        yield* this._path;
    }

    onAdd(map) {
        this._map = map;
        this._map.on("zoomend", this._calculateAnimationSpeed, this);

        this._mount();
        this._calculateAnimationSpeed();
    }

    onRemove(map) {
        this._map.off("zoomend", this._calculateAnimationSpeed, this);
        this._map = null;
        super.onRemove(map);
    }

    pause() {
        const {options} = this;
        if (options.paused) {
            return false;
        }

        const animatedPolyElement = document.getElementsByClassName(this._animatedPathId);
        for (let el of animatedPolyElement) {
            el.removeAttribute("style");
        }
        return options.paused = true;
    }

    resume() {
        this._calculateAnimationSpeed();
    }

    _mount() {
        const {options, _path, _animatedPathClass, _animatedPathId} = this;

        let pathOpts = {...options};
        let pulseOpts = {...options};

        pulseOpts.color = pulseOpts.pulseColor || options.pulseColor;
        pulseOpts.className = `${_animatedPathClass} ${_animatedPathId}`;
        delete pathOpts.dashArray;

        this.addLayer(this[Layers.main] = new Polyline(_path, pathOpts));
        this.addLayer(this[Layers.pulse] = new Polyline(_path, pulseOpts));
    }

    _calculateAnimationSpeed() {
        const {options, _map, _animatedPathId} = this;

        if (options.paused || !_map) {
            return;
        }

        const zoomLevel = _map.getZoom();
        const animatedPolyElements = document.getElementsByClassName(_animatedPathId);

        //Get the animation duration (in seconds) based on the given delay and the current zoom level
        const animationDuration = 1 + (options.delay / 3) / zoomLevel + "s";

        //TODO Use requestAnimationFrame to better support IE
        const animationRules = ["-webkit-", "-moz-", "-ms-", "-o-", ""]
            .map(prefix => `${prefix}animation-duration: ${animationDuration}`).join(";");

        Array.prototype.forEach.call(animatedPolyElements, el => el.style.cssText = animationRules);
    }

    //Polyline interface
    addLatLng(...args) {
        this[Layers.main].addLatLng(...args);
        this[Layers.pulse].addLatLng(...args);
    }

    setLatLngs(...args) {
        this[Layers.main].setLatLngs(...args);
        this[Layers.pulse].setLatLngs(...args);
    }

    getLatLngs() {
        return this[Layers.main].getLatLngs();
    }

    spliceLatLngs(...args) {
        this[Layers.main].spliceLatLngs(...args);
        this[Layers.pulse].spliceLatLngs(...args);
    }

    getBounds() {
        return this[Layers.main].getBounds();
    }

    toGeoJSON() {
        return this[Layers.main].toGeoJSON();
    }
}