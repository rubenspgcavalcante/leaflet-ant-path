(function () {
    var map = L.map('map').setView([-3.7313665, -38.47171], 13);
    var line = [[-3.7313665, -38.47171, 15], [-3.7340995, -38.4724879], [-3.7483599, -38.4605145]];

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var layer = new L.AntPath(line);
    map.addLayer(layer);
}());