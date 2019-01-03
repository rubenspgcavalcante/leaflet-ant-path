import { POLYLINE, CURVE } from "../vectors.constant";
const bracklessJSON = obj =>
  JSON.stringify(obj, null, "  ").replace(/\{|\}/, "");

const isPoly = vector => vector === POLYLINE;
const isCurve = vector => vector === CURVE;

const useLVector = (use, always=false) =>
  isPoly(use) ? "" : `\n  "use": ${isCurve(use) || always? "L." : ""}${use}, `;

const includeVector = use => (isPoly(use) || isCurve(use) ? "" : `${use}, `);

export const es5 = ({ use, ...rest }) => `const path = L.polyline.antPath(route, {${useLVector(use, true) +
  bracklessJSON(rest)});
const myMap = L.map('map').setView([0, 0], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

myMap.addLayer(path);
myMap.fitBounds(path.getBounds())`;

export const es6 = ({ use, ...rest }) => `import ${isCurve(use) ? "L," : ""}{${includeVector(
  use
)}map, tileLayer} from 'leaflet';${
  isCurve(use) ? `\nimport '@elfalem/leaflet-curve';` : ""
}
import {antPath} from 'leaflet-ant-path';
import latLngs from 'sample-${use}.json'; //This is a example, the JSON can come from any place

const path = antPath(route, {${useLVector(use) + bracklessJSON(rest)});
const myMap = map('map').setView([0, 0], 13);

tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

myMap.addLayer(path);
myMap.fitBounds(path.getBounds())`;

export const browserify = ({ use, ...rest }) => `const L = require('leaflet').default;${
  isCurve(use) ? `\nrequire('@elfalem/leaflet-curve');` : ""
}
const {antPath} = require('leaflet-ant-path');
const route = require('sample-route.json'); //This is a example, the JSON can come from any place

const {${includeVector(use)}map, tileLayer} = L;
const path = antPath(route, {${useLVector(use) + bracklessJSON(rest)});
const myMap = map('map').setView([0, 0], 13);

tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

myMap.addLayer(path);
myMap.fitBounds(path.getBounds())`;
