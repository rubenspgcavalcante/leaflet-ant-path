export const including = () =>
  `<script src="https://unpkg.com/leaflet" type="text/javascript"></script>
<script src="https://unpkg.com/leaflet-ant-path" type="text/javascript"></script>`;

export const installing = () =>
  `npm install leaflet-ant-path --save
yarn add leaflet-ant-path
bower install leaflet-ant-path`;

export const importing = () =>
  `import { AntPath, antPath } from 'leaflet-ant-path`;

export const requiring = () =>
  `const { AntPath, antPath } = require('leaflet-ant-path')`;

export const withConstructor = () =>
  `// Using the constructor...
const path = new L.Polyline.AntPath(latlngs);
path.addTo(map);`;

export const withFactory = () =>
  `//Using the factory
const path = L.polyline.antPath(latlngs);
path.addTo(map);`;