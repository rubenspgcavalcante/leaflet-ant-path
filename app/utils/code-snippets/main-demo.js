export const es5 = (options) => `
const path = L.polyline.antPath(route,
  ${JSON.stringify(options)}
);
const myMap = L.map('map').setView([0, 0], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: "&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors"
}).addTo(map);

myMap.addLayer(path);
myMap.fitBounds(path.getBounds())`;

export const es6 = (options) => `
import {map, tileLayer} from 'leaflet';
import {antPath} from 'leaflet-ant-path';
import route from 'sample-route.json'; //This is a example, the JSON can come from any place

const path = antPath(route,
  ${JSON.stringify(options)}
);
const myMap = map('map').setView([0, 0], 13);

tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: "&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors"
}).addTo(map);

myMap.addLayer(path);
myMap.fitBounds(path.getBounds())`;

export const browserify = (options) => `
const {map, tileLayer} = require('leaflet');
const {antPath} = require('leaflet-ant-path');
const route = require('sample-route.json'); //This is a example, the JSON can come from any place

const path = antPath(route,
  ${JSON.stringify(options)}
);
const myMap = map('map').setView([0, 0], 13);

tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: "&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors"
}).addTo(map);

myMap.addLayer(path);
myMap.fitBounds(path.getBounds())`;