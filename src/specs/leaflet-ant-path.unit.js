import L from "leaflet";
import { AntPath, antPath as antPathFactory } from "../plugin/main";

describe("Creates a leaflet polyline with a 'ant-path' animated flux:", () => {
  let spy, path;

  beforeEach(() => {
    path = [L.latLng(0, 0), L.latLng(1, 1)];
  });

  it("Should use two polylines to stack in a animation", () => {
    const fakePolyline = L.polyline(path);
    spy = spyOn(L, "polyline").and.callFake(() => fakePolyline);

    new AntPath([0, 0]);
    expect(L.polyline).toHaveBeenCalled();
    expect(spy.calls.count()).toBe(2);
  });

  it("Should be spreadable into a coordinates collection", () => {
    const antPath = new AntPath(path);
    expect([...antPath]).toEqual(path);
  });

  it("Should stop and resume the animation", () => {
    const antPath = new AntPath(path);
    antPath.pause();
    expect(antPath.options.paused).toBeTruthy();

    antPath.resume();
    expect(antPath.options.paused).toBeFalsy();
  });

  it("Should reverse the animation", () => {
    const antPath = new AntPath(path);
    expect(antPath.options.reverse).toBeFalsy();

    antPath.reverse();
    expect(antPath.options.reverse).toBeTruthy();
  });

  it("Should expose a factory to create new instances", () => {
    const fabricated = antPathFactory(path);
    expect(fabricated).toEqual(jasmine.any(AntPath));
  });

  describe("Behave as a Functor", () => {
    it("Should return a new AntPath as result when mapped", () => {
      const antPath = new AntPath([L.latLng(0, 1), L.latLng(2, 3)]);
      const otherAntPath = antPath.map(pos => L.latLng(pos.lat + 1, pos.lng + 1));
      expect(otherAntPath).not.toEqual(antPath);
    });

    it("Should return the referent child instance as result when mapped", () => {
      class ChildAntPath extends AntPath {
        constructor(...args) {
          super(...args);
        }
      }

      const child = new ChildAntPath(path);
      const childCopy = child.map(pos => pos);
      expect(childCopy).toEqual(jasmine.any(ChildAntPath));
    });
  });

  describe("Should follow all the Layer interface", () => {
    let map;
    beforeEach(() => (map = L.map(document.createElement("div"))));

    it("Should be able to add it to a map", () => {
      const antPath = new AntPath(path);
      expect(map.hasLayer(antPath)).toBeFalsy();

      antPath.addTo(map);
      expect(map.hasLayer(antPath)).toBeTruthy();
    });

    it("Should be removable from maps", () => {
      const antPath = new AntPath(path);
      map.addLayer(antPath);
      expect(map.hasLayer(antPath)).toBeTruthy();

      antPath.removeFrom(map);
      expect(map.hasLayer(antPath)).toBeFalsy();
    });

    it("Should be removable from the current map", () => {
      const antPath = new AntPath(path);
      map.addLayer(antPath);
      expect(map.hasLayer(antPath)).toBeTruthy();

      antPath.remove();
      expect(map.hasLayer(antPath)).toBeFalsy();
    });
  });

  describe("Should follow all the L.Polygon interface:", () => {
    const options = { color: "white", pulseColor: "red" };
    const samplePath = [L.latLng(1, 2), L.latLng(3, 4)];
    let antPath;
    beforeEach(() => (antPath = new AntPath(samplePath, options)));

    it("Should be able to provide the current latLngs", () => {
      expect(antPath.getLatLngs()).toEqual(samplePath);
    });

    it("Should be able to provide it bounds", () => {
      expect(antPath.getBounds()).toEqual(L.latLngBounds(samplePath));
    });

    it("Should be able to provide itself as a GeoJSON", () => {
      expect(antPath.toGeoJSON()).toEqual(
        jasmine.objectContaining({
          type: "Feature",
          geometry: jasmine.objectContaining({
            type: "LineString"
          })
        })
      );
    });

    it("Should be able to add new points to the path", () => {
      const coord = L.latLng(42, 42);
      antPath.addLatLng(coord);
      expect(antPath.getLatLngs()).toEqual([...samplePath, coord]);
    });

    it("Should be able to set a entire new path", () => {
      const newPath = [L.latLng(0, 0), L.latLng(1, 1)];
      antPath.setLatLngs(newPath);
      expect(antPath.getLatLngs()).toEqual(newPath);
    });

    it("Should be able to set new options", () => {
      const newOptions = { color: "green" };
      antPath.setStyle(newOptions);

      expect(antPath.options.color).toEqual(newOptions.color);
      expect(antPath.options.pulseColor).toEqual(options.pulseColor);
    });

    it("Should be able to redraw the two composite paths", () => {
      const fakePolyline = L.polyline(path);
      spy = spyOn(L, "polyline").and.callFake(() => fakePolyline);
      spyOn(fakePolyline, "redraw");

      new AntPath(path, options).redraw();
      expect(fakePolyline.redraw).toHaveBeenCalledTimes(2);
    });
  });
});
