describe("Creates a leaflet polyline with a 'ant-path' animated flux", function () {
    var spy, fakePolyline;

    beforeEach(function () {
        fakePolyline = new L.Polyline([]);

        spy = spyOn(L, 'Polyline').and.callFake(function () {
            return fakePolyline;
        });
    });

    it("Should use two polylines to stack in a animation", function () {
        var antPath = new L.Polyline.AntPath([0, 0]);
        expect(L.Polyline).toHaveBeenCalled();
        expect(spy.calls.count()).toBe(2);
    });
});