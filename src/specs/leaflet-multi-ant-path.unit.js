describe("Creates a leaflet multi polyline with a 'ant-path' animated flux", function () {
    var spy, fakePolyline;

    beforeEach(function () {
        fakePolyline = new L.Polyline([]);

        spyOn(L, 'Polyline').and.callFake(function() {
            return fakePolyline;
        });
    });

    function isMajorVersion(){
        return L.version.match(/$1\..*$/);
    }

    if(isMajorVersion()){
        it("Should call multiple ant paths and stack then into the double of polylines", function () {
            var multiAntPath = new L.MultiPolyline.MultiAntPath([0, 0], [0,0]);

            expect(L.Polyline).toHaveBeenCalled();
            expect(spy.calls.count()).toBe(4);
        });
    }
});