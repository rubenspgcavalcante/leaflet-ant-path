import { POLYLINE } from "../vectors.constant";
const bracklessJSON = obj => JSON.stringify(obj).replace(/\{|\}/, "");

const isPoly = vector => vector === POLYLINE;
const useLVector = use => (isPoly(use) ? "" : `"use": L.${use}, `);
const useVector = use => (isPoly(use) ? "" : `"use": ${use}, `);
const includeVector = use => (isPoly(use) ? "" : ` ${use},`);

export const es5 = ({ use, ...rest }) => `
const path = L.polyline.antPath(route,
  { ${useLVector(use) + bracklessJSON(rest)} }
);
const myMap = L.map('map').setView([0, 0], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: "&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors"
}).addTo(map);

myMap.addLayer(path);
myMap.fitBounds(path.getBounds())`;

export const es6 = ({ use, ...rest }) => `
import {${includeVector(use)} map, tileLayer} from 'leaflet';
import {antPath} from 'leaflet-ant-path';
import latLngs from 'sample-${use}.json'; //This is a example, the JSON can come from any place

const path = antPath(latLngs,
  { ${useVector(use) + bracklessJSON(rest)} }
);
const myMap = map('map').setView([0, 0], 13);

tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: "&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors"
}).addTo(map);

myMap.addLayer(path);
myMap.fitBounds(path.getBounds())`;

export const browserify = ({ use, ...rest }) => `
const {${includeVector(use)} map, tileLayer} = require('leaflet');
const {antPath} = require('leaflet-ant-path');
const route = require('sample-route.json'); //This is a example, the JSON can come from any place

const path = antPath(route,
  { ${useVector(use) + bracklessJSON(rest)} }
);
const myMap = map('map').setView([0, 0], 13);

tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: "&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors"
}).addTo(map);

myMap.addLayer(path);
myMap.fitBounds(path.getBounds())`;
