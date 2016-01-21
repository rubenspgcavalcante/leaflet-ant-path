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
                var layer = null, path = null;

                $http.get('route.json').then(function (res) {
                    path = res.data;

                    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(map);

                    layer = new L.Polyline.AntPath(path);
                    map.addLayer(layer);
                    map.fitBounds(layer.getBounds());
                });

                scope.$watch('options', function (opts) {
                    if (layer !== null) {
                        map.removeLayer(layer);
                        layer = new L.Polyline.AntPath(path, opts);
                        map.addLayer(layer);
                    }
                }, true);
            }
        }
    }
}());


