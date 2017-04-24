import L from "leaflet";
import {AntPath} from "../plugin/main";

describe("Creates a leaflet polyline with a 'ant-path' animated flux:", () => {
    let spy, fakePolyline;

    beforeEach(() => {
        fakePolyline = new L.Polyline([0, 0], [1, 1]);
        spy = spyOn(L, "Polyline").and.callFake(() => fakePolyline);
    });

    it("Should use two polylines to stack in a animation", () => {
        new AntPath([0, 0]);
        expect(L.Polyline).toHaveBeenCalled();
        expect(spy.calls.count()).toBe(2);
    });

    it("Should be spreadable into a coordinates collection", () => {
        const path = [L.latLng(0, 0), L.latLng(1, 1)];
        const antPath = new AntPath(path);

        expect([...antPath]).toEqual(path);
    });

    it("Should stop and resume the animation", () => {
        const antPath = new AntPath([0, 0], [1, 1]);
        antPath.pause();
        expect(antPath.options.paused).toBeTruthy();

        antPath.resume();
        expect(antPath.options.paused).toBeFalsy();
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

            const child = new ChildAntPath([L.latLng(0, 0)]);
            const childCopy = child.map(pos => pos);
            expect(childCopy).toEqual(jasmine.any(ChildAntPath));
        });
    });


    describe("Should follow all the L.Polygon interface:", () => {
        const path = [L.latLng(0, 1), L.latLng(2, 3)];
        const options = {color: "white", pulseColor: "red"};
        const antPath = new AntPath(path, options);

        it("Should be able to provide the current latLngs", () => {
            expect(antPath.getLatLngs()).toEqual(path);
        });

        it("Should be able to provide it bounds", () => {
            expect(antPath.getBounds()).toEqual(L.latLngBounds(path));
        });

        it("Should be able to provide itself as a GeoJSON", () => {
            expect(antPath.toGeoJSON()).toEqual(jasmine.objectContaining({
                type: "Feature",
                geometry: jasmine.objectContaining({
                    type: "LineString"
                })
            }));
        });

        it("Should be able to add new points to the path", () => {
            const coord = L.latLng(42, 42);
            antPath.addLatLng(coord);
            expect(antPath.getLatLngs()).toEqual([...path, coord]);
        });

        it("Should be able to set a entire new path", () => {
            const newPath = [L.latLng(0, 0), L.latLng(1, 1)];
            antPath.setLatLngs(newPath);
            expect(antPath.getLatLngs()).toEqual(newPath);
        });

        it("Should be able to set new options", () => {
            const newOptions = {color: "green"};
            antPath.setStyle(newOptions);

            expect(antPath.options.color).toEqual(newOptions.color);
            expect(antPath.options.pulseColor).toEqual(options.pulseColor);
        });

        it("Should be able to redraw the two composite paths", () => {
            spyOn(fakePolyline, "redraw");
            new AntPath(path, options).redraw();
            expect(fakePolyline.redraw).toHaveBeenCalledTimes(2);
        });
    });
});
