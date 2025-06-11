
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
});
var GoogleSatelite = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        opacity: 1.0,
        attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>' + 'contributors',
        maxZoom: 18
    });

    var mujeres = L.tileLayer.wms("http://190.3.14.59:8080/geoserver/wms?",{
		active: true,
		layers: 'public:estacionamiento',
		format: 'image/png',
		transparent: true,
		opacity: 0.5
	});



    var baseLayers =
    {
        "OpenStreetMap": osm,
        "Google Satelite": GoogleSatelite,
    };
    var overlays ={
        "Estacionamiento": mujeres

    };

//mapa//
var map = L.map('map', {
    center: [-24.79303, -65.41527],
    zoom: 12,
    zoomControl: true,
    layers: [osm, movilidad]

});

L.control.layers(baseLayers, overlays, { collapsed: true }).addTo(map);

