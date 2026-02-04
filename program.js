var map = L.map('map').setView([4.6056791895607345, -74.0700973611025], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.6056791895607345, -74.0700973611025]).addTo(map).bindPopup("SINCHI").openPopup();
