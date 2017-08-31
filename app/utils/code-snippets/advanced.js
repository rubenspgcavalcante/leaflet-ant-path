export const spread = () =>
  `const antPathLayer = new AntPath(path, options);
const anotherAntPath = new AntPath(path2, options);

const latLngs = [...antPathLayer, ...anotherAntPath];`;

export const iterate = () =>
  `for(let latLng of antPath) {
  // do something with it latLngs ...
}`;

export const extend = () =>
  `class CustomAntPath extends AntPath {
    //...
}`;

export const functor = () =>
  `//New path with translated path
const newAnthPath = myAntPath.map(pos => latLng(pos.lat + 1, pos.lng + 1));`;