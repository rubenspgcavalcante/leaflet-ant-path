describe("Creates a leaflet polyline with a 'ant-path' animated flux", () => {
    var spy, fakePolyline;

    beforeEach(()=> {
        fakePolyline = new L.Polyline([]);
        spy = spyOn(L, "Polyline").and.callFake(() => fakePolyline);
    });

    it("Should use two polylines to stack in a animation", () => {
        var antPath = new L.Polyline.AntPath([0, 0]);

        expect(L.Polyline).toHaveBeenCalled();
        expect(spy.calls.count()).toBe(2);
    });
});