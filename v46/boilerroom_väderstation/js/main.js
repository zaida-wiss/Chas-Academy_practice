// js/main.js
console.log("MAIN.JS LADDADES!");

import { getGeo } from "./services/geoService.js";
import { showMatches } from "./components/showMatches.js";
import { weatherService } from "./services/weatherService.js";
import { weatherView } from "./components/weatherView.js";
import { showMap } from "./services/mapView.js";

// DOM-element
const cityInput = document.getElementById("cityInput");
const searchMatch = document.getElementById("searchMatch");
const weatherContainer = document.getElementById("weatherContainer");

// För pilnavigation
let activeIndex = -1;

// Ta bara stadens namn ("Umeå" ur "Umeå, Sweden")
function extractCityName(fullText) {
    return fullText.split(",")[0].trim();
}

// Välj stad (klick/enter/en enda träff)
async function selectCity(li) {
    searchMatch.innerHTML = "";

    const fullText = li.textContent;
    const cityName = extractCityName(fullText);

    const lat = li.dataset.lat;
    const lon = li.dataset.lon;

    const weather = await weatherService(lat, lon);
    const card = weatherView(weather);

    // Visa väder
    weatherContainer.innerHTML = `
        <h2>${cityName}</h2>
    `;
    weatherContainer.appendChild(card);

    // Visa karta
    showMap(lat, lon, cityName);
}

// Markera rätt rad vid pil upp/ner
function updateActiveItem(ul) {
    const items = ul.querySelectorAll("li");

    items.forEach((li, index) => {
        li.classList.toggle("active", index === activeIndex);
        if (index === activeIndex) {
            li.focus();
        }
    });
}

// När användaren skriver
cityInput.addEventListener("input", async () => {
    searchMatch.innerHTML = "";
    const text = cityInput.value.trim();
    if (!text) return;

    const results = await getGeo(text);
    if (results.length === 0) return;

    // EN träff → visa direkt
    if (results.length === 1) {
        const only = results[0];

        const tempLi = document.createElement("li");
        tempLi.textContent = `${only.name}, ${only.country}`;
        tempLi.dataset.lat = only.latitude;
        tempLi.dataset.lon = only.longitude;

        await selectCity(tempLi);
        return;
    }

    // Flera träffar → visa UL
    const ul = showMatches(results);
    searchMatch.appendChild(ul);

    // reset för pilnavigation
    activeIndex = -1;
});

// Klick på rad
searchMatch.addEventListener("click", async (event) => {
    const li = event.target;
    if (li.tagName !== "LI") return;

    await selectCity(li);
});

// Enter på rad
searchMatch.addEventListener("keydown", async (event) => {
    if (event.key !== "Enter") return;

    const li = event.target;
    if (li.tagName !== "LI") return;

    await selectCity(li);
});

// Pil ner/upp i input – hoppa in i listan
cityInput.addEventListener("keydown", (event) => {
    const ul = searchMatch.querySelector("ul");
    if (!ul) return;

    if (event.key === "ArrowDown") {
        event.preventDefault();
        activeIndex = 0;
        updateActiveItem(ul);
    }
});

// Pil ner/upp i dropdown-listan
searchMatch.addEventListener("keydown", (event) => {
    const ul = searchMatch.querySelector("ul");
    if (!ul) return;

    const items = ul.querySelectorAll("li");

    if (event.key === "ArrowDown") {
        event.preventDefault();
        if (activeIndex < items.length - 1) activeIndex++;
        updateActiveItem(ul);
    }

    if (event.key === "ArrowUp") {
        event.preventDefault();
        if (activeIndex > 0) activeIndex--;
        updateActiveItem(ul);
    }
});

// Klick utanför → stäng listan
document.addEventListener("click", (e) => {
    if (!searchMatch.contains(e.target) && e.target !== cityInput) {
        searchMatch.innerHTML = "";
    }
});
