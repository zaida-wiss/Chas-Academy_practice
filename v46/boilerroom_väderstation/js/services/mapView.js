// js/services/mapView.js

let map;
let marker;

export function showMap(lat, lon, city) {
    const latitude = Number(lat);
    const longitude = Number(lon);

    if (!map) {
        map = L.map("map").setView([latitude, longitude], 9);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "&copy; OpenStreetMap"
        }).addTo(map);
    } else {
        map.setView([latitude, longitude], 9);
    }

    if (marker) {
        marker.remove();
    }

    marker = L.marker([latitude, longitude]).addTo(map).bindPopup(city).openPopup();
}
