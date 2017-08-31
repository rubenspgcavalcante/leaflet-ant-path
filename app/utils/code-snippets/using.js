export const withOptions = () =>
  `const options = {delay: 400, dashArray: [10,20], weight: 5, color: "#0000FF", pulseColor: "#FFFFFF"};
const path = antPath(latlngs, options);
path.addTo(map);`;