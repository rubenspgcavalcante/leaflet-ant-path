$(document).ready(function(){
    var map = L.map('map').setView([0, 0], 3);

    $.getJSON('route.json', function(route){
        var line = route;

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var layer = new L.AntPath(line);
        map.addLayer(layer);
        map.fitBounds(layer.getBounds());

    });

});
