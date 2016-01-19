describe("Creates a leaflet polyline with a 'ant-path' animated flux", function () {
    var polylineCalls;

    beforeEach(function () {
        polylineCalls = 0;

        spyOn(L, 'Polyline').and.callFake(function PolylineMock() {
            polylineCalls++;
        });
    });

    it("Should use two polylines to stack in a animation", function () {
        var antPath = new L.AntPath([0, 0]);

        expect(L.Polyline).toHaveBeenCalled();
        expect(polylineCalls).toBe(2);
    });
});