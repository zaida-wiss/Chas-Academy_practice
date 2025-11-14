console.log("MAIN.JS LADDADES!");
import { geoService } from "./services/geoService.js";
import { showMatches } from "./components/showMatches.js";
import { weatherService } from "./services/weatherService.js";
import { weatherView } from "./components/weatherView.js";
import { showMap } from "./components/mapView.js";

// DOM-element
const cityInput = document.getElementById("cityInput");
const searchMatch = document.getElementById("searchMatch");
const weatherContainer = document.getElementById("weatherContainer");

// ENTER-sökning
cityInput.addEventListener("keydown", async (e) => {
    if (e.key !== "Enter") return;

    const text = cityInput.value.trim();
    if (!text) return;

    // hämta städer
    const results = await geoService(text);

    // inga träffar
    if (results.length === 0) {
        searchMatch.innerHTML = "<p>Ingen träff</p>";
        return;
    }

    // exakt 1 träff → visa väder direkt
    if (results.length === 1) {
        searchMatch.innerHTML = "";
        showCity(results[0]);
        return;
    }

    // flera träffar → UL-lista
    const ul = showMatches(results);
    searchMatch.innerHTML = "";
    searchMatch.appendChild(ul);
});

// välj stad (klick)
searchMatch.addEventListener("click", (e) => {
    if (e.target.tagName !== "LI") return;

    const li = e.target;

    const cityName = li.textContent.split(",")[0].trim();
    const lat = li.dataset.lat;
    const lon = li.dataset.lon;

    searchMatch.innerHTML = "";

    showCity({ name: cityName, latitude: lat, longitude: lon });
});

// visa väder + karta
async function showCity(item) {
    const weather = await weatherService(item.latitude, item.longitude);

    const weatherData = {
        temperature: weather.temperature,
        description: weatherView(weather)
    };

    // rendera väder
    weatherContainer.innerHTML = `
        <h2>${item.name}</h2>
        <p>${weatherData.temperature}°C</p>
        <p>${weatherData.description}</p>
    `;

    // uppdatera karta
    showMap(item.latitude, item.longitude, item.name);
}

// klick utanför → stäng lista
document.addEventListener("click", (e) => {
    if (!searchMatch.contains(e.target) && e.target !== cityInput) {
        searchMatch.innerHTML = "";
    }
});
