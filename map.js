
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
});
var GoogleSatelite = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        opacity: 1.0,
        attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>' + 'contributors',
        maxZoom: 18
    });

    var baseLayers =
    {
        "OpenStreetMap": osm,
        "Google Satelite": GoogleSatelite,
    };

//mapa//
var map = L.map('map', {
    center: [-24.79303, -65.41527],
    zoom: 12,
    zoomControl: true,
    layers: [osm,]

});


L.control.layers(baseLayers, null, { collapsed: true }).addTo(map);