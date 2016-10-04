import {tileLayer, Map} from "leaflet";

export default class MyMap extends Map {
    constructor() {
        super("map-container");

        tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
            attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        }).addTo(this);
    }
}