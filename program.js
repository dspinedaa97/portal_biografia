var map = L.map('map').setView([4.605700577951365, -74.07010809045742], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.605700577951365, -74.07010809045742]).addTo(map).bindPopup('<b>Sede SINCHI</b><br>Instituto Amazónico de Investigaciones Científicas').openPopup();

