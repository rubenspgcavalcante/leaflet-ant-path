import { FeatureGroup, polyline, svg, Util } from "leaflet";

const Layers = { main: Symbol("main"), pulse: Symbol("pulse") };

/**
 * Builds the ant path polygon
 * @class
 * @extends {L.FeatureGroup}
 */
export default class AntPath extends FeatureGroup {
  [Layers.main] = null;
  [Layers.pulse] = null;

  _map = null;
  _path = null;
  _animatedPathId = null;
  _animatedPathClass = "leaflet-ant-path";
  _reversePathClass = `${this._animatedPathClass}__reverse`;
  _hardwareAccClass = "hardware-acceleration";

  _defaultOptions = {
    use: polyline,
    paused: false,
    reverse: false,
    hardwareAcceleration: false,
    renderer: svg({pane: "overlayPane"}),
    delay: 400,
    dashArray: [10, 20],
    weight: 5,
    opacity: 0.5,
    color: "#0000FF",
    pulseColor: "#FFFFFF"
  };

  static pathId = 0;

  constructor(path, customOptions = {}) {
    super();

    Util.setOptions(this, { ...this._defaultOptions, ...customOptions });
    this._path = path;
    this._animatedPathId = `ant-path-${AntPath.pathId++}`;
    this._mount();
  }

  map(call) {
    /**
     * This prevents if some class extending AntPath to return a instance of AntPath itself instead of the invoker class
     * Doing so, any child class will maintain the status of FUNCTOR object
     */
    const Species = this.constructor[Symbol.species];
    return new Species(this._path.map(call), { ...this.options });
  }

  static get [Symbol.species]() {
    return this;
  }

  get [Symbol.toStringTag]() {
    return "L.Polyline.AntPath";
  }

  *[Symbol.iterator]() {
    yield* this._path;
  }

  _processOptions() {
    const {
      options,
      _animatedPathClass,
      _reversePathClass,
      _hardwareAccClass,
      _animatedPathId
    } = this;
    const { reverse, hardwareAcceleration } = options;

    let pathOpts = { ...options };
    let pulseOpts = { ...options };

    pulseOpts.color = pulseOpts.pulseColor || options.pulseColor;
    pulseOpts.className = [
      _animatedPathClass,
      _animatedPathId,
      reverse ? _reversePathClass : "",
      hardwareAcceleration ? `${_animatedPathClass}__${_hardwareAccClass}` : ""
    ].join(" ");

    delete pathOpts.dashArray;

    if (Array.isArray(pulseOpts.dashArray)) {
      pulseOpts.dashArray = String(pulseOpts.dashArray);
    }

    return { pathOpts, pulseOpts };
  }

  _mount() {
    const { pathOpts, pulseOpts } = this._processOptions();
    const { use } = this.options;

    this.addLayer((this[Layers.main] = use(this._path, pathOpts)));
    this.addLayer((this[Layers.pulse] = use(this._path, pulseOpts)));
  }

  _calculateAnimationSpeed() {
    const { options, _map, _animatedPathId } = this;

    if (options.paused || !_map) {
      return;
    }

    const zoomLevel = _map.getZoom();
    const animatedPolyElements = document.getElementsByClassName(_animatedPathId);

    //Get the animation duration (in seconds) based on the given delay and the current zoom level
    const animationDuration = 1 + options.delay / 3 / zoomLevel + "s";

    //TODO Use requestAnimationFrame to better support IE
    const animationRules = ["-webkit-", "-moz-", "-ms-", "-o-", ""]
      .map(prefix => `${prefix}animation-duration: ${animationDuration}`)
      .join(";");

    Array.from(animatedPolyElements, el => {
      el.style.cssText = animationRules;
      el.setAttribute("data-animated", "true");
    });
  }

  _pureReverse() {
    const el = this[Layers.pulse].getElement();
    if (el) {
      this.options.reverse
        ? el.classList.remove(this._reversePathClass)
        : el.classList.add(this._reversePathClass);
    }
  }

  onAdd(map) {
    this._map = map;
    this._map.on("zoomend", this._calculateAnimationSpeed, this);
    this._mount();
    this._calculateAnimationSpeed();
    return this;
  }

  onRemove(layer) {
    if (this._map) {
      this._map.off("zoomend", this._calculateAnimationSpeed, this);
      this._map = null;
    }
    if (layer) {
      layer.removeLayer(this[Layers.main]).removeLayer(this[Layers.pulse]);
    }

    return this;
  }

  pause() {
    const { paused } = this.options;

    if (!paused) {
      const el = this[Layers.pulse].getElement();
      this.options.paused = true;

      if (el) {
        el.removeAttribute("style");
        el.setAttribute("data-animated", "true");
      }
      return true;
    }
    return false;
  }

  resume() {
    const { options } = this;
    if (options.paused) {
      options.paused = false;
      this._calculateAnimationSpeed();
      return true;
    } else {
      return false;
    }
  }

  //Feature Group methods overwriting
  bringToFront() {
    this[Layers.main].bringToFront();
    this[Layers.pulse].bringToFront();
    return this;
  }

  bringToBack() {
    this[Layers.pulse].bringToBack();
    this[Layers.main].bringToBack();
    return this;
  }

  //Layer interface
  removeFrom(layer) {
    if (layer && layer.hasLayer(this)) {
      layer.removeLayer(this);
    }
    return this;
  }

  //Polyline interface
  setStyle(options) {
    const { paused, delay, reverse } = {...this.options, ...options};
    paused ? this.pause() : this.resume();

    if (delay !== this.options.delay) {
      this.options.delay = delay || this._defaultOptions.delay;
      this._calculateAnimationSpeed();
    }
    if (typeof reverse !== "undefined" && reverse !== this.options.reverse) {
      this._pureReverse();
    }

    this.options = { ...this.options, ...options };
    const { pathOpts, pulseOpts } = this._processOptions();

    this[Layers.main].setStyle(pathOpts);
    this[Layers.pulse].setStyle(pulseOpts);

    return this;
  }

  reverse() {
    this._pureReverse();
    this.options.reverse = !this.options.reverse;
    return this;
  }

  redraw() {
    this[Layers.main].redraw();
    this[Layers.pulse].redraw();

    return this;
  }

  addLatLng(...args) {
    this._path = [...this._path, args];
    this[Layers.main].addLatLng(...args);
    this[Layers.pulse].addLatLng(...args);

    return this;
  }

  setLatLngs(...args) {
    this._path = args;
    this[Layers.main].setLatLngs(...args);
    this[Layers.pulse].setLatLngs(...args);

    return this;
  }

  getLatLngs() {
    return this[Layers.main].getLatLngs();
  }

  spliceLatLngs(...args) {
    const latLngs = this[Layers.main].spliceLatLngs(...args);
    this[Layers.pulse].spliceLatLngs(...args);

    return latLngs;
  }

  getBounds() {
    return this[Layers.main].getBounds();
  }

  toGeoJSON() {
    return this[Layers.main].toGeoJSON();
  }
}
