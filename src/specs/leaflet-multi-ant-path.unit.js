describe("Creates a leaflet multi polyline with a 'ant-path' animated flux", function () {
    var polylineCalls;

    beforeEach(function () {
        polylineCalls = 0;

        spyOn(L, 'Polyline').and.callFake(function PolylineMock() {
            polylineCalls++;
        });
    });

    it("Should call multiple ant paths and stack then into the double of polylines", function () {
        var multiAntPath = new L.MultiPolyline.MultiAntPath([0, 0], [0,0]);

        expect(L.Polyline).toHaveBeenCalled();
        expect(polylineCalls).toBe(4);
    });
});