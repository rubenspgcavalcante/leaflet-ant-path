describe("Creates a leaflet polyline with a 'ant-path' animated flux", () => {
    var spy, fakePolyline;

    beforeEach(()=> {
        fakePolyline = new L.Polyline([]);
        spy = spyOn(L, "Polyline").and.callFake(() => fakePolyline);
    });

    it("Should use two polylines to stack in a animation", () => {
        const antPath = new L.Polyline.AntPath([0, 0]);

        expect(L.Polyline).toHaveBeenCalled();
        expect(spy.calls.count()).toBe(2);
    });

    it("Should be spreadable into a coordinates collection", ()=> {
        const path = [L.latLng(0, 0), L.latLng(1, 1)];
        const antPath = new L.Polyline.AntPath(path);

        expect([...antPath]).toEqual(path);
    });

    describe("Should behave as in Array, the map method", ()=> {
        it("Should return a new AntPath as result", ()=> {
            const antPath = new L.Polyline.AntPath([L.latLng(0, 1), L.latLng(2, 3)]);
            const otherAntPath = antPath.map(pos => L.latLng(pos.lat + 1, pos.lng + 1));
            expect(otherAntPath).not.toEqual(antPath);
        });

        it("Should return the referent child instance as result", () => {
            class ChildAntPath extends L.Polyline.AntPath {
                constructor(...args) {
                    super(...args);
                }
            }

            const child = new ChildAntPath([L.latLng(0, 0)]);
            const childCopy = child.map(pos => pos);
            expect(childCopy).toEqual(jasmine.any(ChildAntPath));
        });
    });


});