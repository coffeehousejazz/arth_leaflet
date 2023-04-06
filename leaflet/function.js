// initialize the map
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// add the tile layer (in this case, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(mymap);

// add a marker
var marker = L.marker([51.5, -0.09]).addTo(mymap);

// add a popup to the marker
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();