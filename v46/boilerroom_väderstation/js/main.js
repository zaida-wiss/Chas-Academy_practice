// js/main.js
console.log("MAIN.JS LADDADES!");

import { geoService } from "./services/geoService.js";
import { weatherService } from "./services/weatherService.js";
import { weatherView } from "./components/weatherView.js";
import { showMap } from "./services/mapView.js";
import { showMatches } from "./components/showMatches.js";

// DOM-element
const cityInput = document.getElementById("cityInput");
const searchMatch = document.getElementById("searchMatch");
const weatherContainer = document.getElementById("weatherContainer");

// 🔍 Tydlig extraherare (tar bort land från "Umeå, Sweden")
function extractCityName(text) {
    return text.split(",")[0].trim();
}

// 🌤 Rendera vald stad (bara 1 eftersom geoService filtrerar allt)
async function renderCity(cityObj) {
    const { name, latitude, longitude } = cityObj;

    // Hämta väder
    const weather = await weatherService(latitude, longitude);
    const card = weatherView(weather);

    // Visa väderkort
    weatherContainer.innerHTML = `
        <h2>${name}</h2>
    `;
    weatherContainer.appendChild(card);

    // Visa karta
    showMap(latitude, longitude, name);
}

// ⌨ När användaren trycker enter
cityInput.addEventListener("keydown", async (event) => {
    if (event.key !== "Enter") return;

    const query = cityInput.value.trim();
    if (!query) return;

    // Hämta exakt matchning
    const result = await geoService(query);

    searchMatch.innerHTML = ""; // rensa listan

    if (result.length === 0) {
        // ❌ Ingen exakt stad hittades
        weatherContainer.innerHTML = `<p>Ingen exakt träff för "${query}"</p>`;
        return;
    }

    // 🎯 Exakt en träff → visa direkt
    const city = result[0];
    renderCity(city);
});

// 🖱 Klick på eventuella list-träffar
searchMatch.addEventListener("click", async (event) => {
    if (event.target.tagName !== "LI") return;

    const li = event.target;

    const cityObj = {
        name: extractCityName(li.textContent),
        latitude: li.dataset.lat,
        longitude: li.dataset.lon
    };

    searchMatch.innerHTML = "";
    renderCity(cityObj);
});

// 📤 Klick utanför → stäng listan
document.addEventListener("click", (event) => {
    if (!searchMatch.contains(event.target) && event.target !== cityInput) {
        searchMatch.innerHTML = "";
    }
});
