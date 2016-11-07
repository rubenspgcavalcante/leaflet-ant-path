(function () {
    "use strict";

    AntPathExampleDirective.$inject = ['$http'];
    angular.module('ant-path-example').directive('antPathExample', AntPathExampleDirective);

    function AntPathExampleDirective($http) {
        return {
            templateUrl: 'gh-src/templates/ant-path-example.html',
            restrict: 'E',
            scope: {
                options: '='
            },
            link: function (scope, element) {
                var map = L.map(element.find('#map')[0]).setView([0, 0], 3);
                var options = {};
                var antPath = null, path = null;

                $http.get('route.json').then(function (res) {
                    path = res.data.map(function(point) { return new L.latLng(point[0], point[1]) });

                    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(map);

                    antPath = new L.Polyline.AntPath(path);

                    map.addLayer(antPath);
                    map.fitBounds(antPath.getBounds());
                });

                scope.$watch('options', function (opts) {
                    if (antPath !== null) {
                        map.removeLayer(antPath);
                        antPath = new L.Polyline.AntPath(path, opts);
                        map.addLayer(antPath);
                    }
                }, true);
            }
        }
    }
}());


