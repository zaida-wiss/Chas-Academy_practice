// js/services/geoService.js

// Ingen diakritikborttagning! Å/Ä/Ö måste vara kvar.
function normalize(str) {
    return str.trim().toLowerCase();
}

// Haversine – avstånd i km
function distanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) ** 2;

    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

export async function geoService(city) {

    const clean = city.trim();
    if (!clean) return [];

    const url =
        `https://geocoding-api.open-meteo.com/v1/search?` +
        `name=${encodeURIComponent(clean)}` +
        `&language=sv&count=20`;

    const res = await fetch(url);
    const data = await res.json();
    if (!data.results) return [];

    // Tillåt alla typer som verkliga städer kan vara
    const allowed = ["PPL", "PPLX", "PPLA", "PPLA2", "PPLA3", "PPLC"];

    const filtered = data.results.filter(item =>
        allowed.includes(item.feature_code)
    );

    // Exakt matchning inklusive å/ä/ö
    const target = normalize(clean);

    let exact = filtered.filter(item =>
        normalize(item.name) === target
    );

    if (exact.length === 0) return []; // inget exakt → ingen träff

    // Om mer än en exakt matchning → välj baspunkten (första)
    const base = exact[0];
    const baseLat = base.latitude;
    const baseLon = base.longitude;

    // Begränsa till max 70 km radie
    exact = exact.filter(item => {
        const d = distanceKm(baseLat, baseLon, item.latitude, item.longitude);
        return d <= 70;
    });

    // Sortera – närmast först
    exact.sort((a, b) => {
        const da = distanceKm(baseLat, baseLon, a.latitude, a.longitude);
        const db = distanceKm(baseLat, baseLon, b.latitude, b.longitude);
        return da - db;
    });

    // Returnera EN stad
    const best = exact[0];

    return [{
        name: best.name,
        country: best.country,
        latitude: best.latitude,
        longitude: best.longitude
    }];
}
