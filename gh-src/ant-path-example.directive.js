import L from 'leaflet';
import {AntPath} from 'leaflet-ant-path';

export default module => {
    AntPathExampleDirective.$inject = ['$http'];
    module.directive('antPathExample', AntPathExampleDirective);

    function AntPathExampleDirective($http) {
        return {
            templateUrl: 'ant-path-example.template.html',
            restrict: 'E',
            scope: {
                options: '='
            },
            link: function (scope, element) {
                let options = {};
                let antPath = null, path = null;

                $http.get('route.json').then(res => {
                    const map = L.map($(element).find('#map')[0]).setView([0, 0], 3);
                    path = res.data.map(point => new L.latLng(point[0], point[1]));

                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(map);

                    antPath = new AntPath(path);
                    map.addLayer(antPath);
                    map.fitBounds(antPath.getBounds());
                });

                scope.$watch('options', opts => antPath && antPath.setStyle(opts), true);
            }
        }
    }
}
