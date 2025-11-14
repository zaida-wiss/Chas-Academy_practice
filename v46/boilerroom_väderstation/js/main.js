import { geoService } from "./services/geoService.js";
import { showMatches } from "./components/showMatches.js";
import { weatherService } from "./services/weatherService.js";
import { weatherView } from "./components/weatherView.js";

// DOM-element
const cityInput = document.getElementById("cityInput");
const searchMatch = document.getElementById("searchMatch");
const weatherContainer = document.getElementById("weatherContainer");

// ⭐ För pilnavigation
let activeIndex = -1;

// ⭐ Helper: ta bara stad (“Umeå” ur “Umeå, Sweden”)
function extractCityName(fullText) {
    return fullText.split(",")[0].trim();
}

// ⭐ Helper: välj stad (klick/enter)
async function selectCity(li) {
    searchMatch.innerHTML = ""; // stäng dropdown

    const fullText = li.textContent; 
    const cityName = extractCityName(fullText);

    const lat = li.dataset.lat;
    const lon = li.dataset.lon;

    // användaren valde aktivt → fyll input
    cityInput.value = cityName;

    const weather = await weatherService(lat, lon);
    const card = weatherView(weather);

    weatherContainer.innerHTML = `
        <h2>${cityName}</h2>
    `;
    weatherContainer.appendChild(card);
}

// ⭐ Markera vald rad (pil upp/ner)
function updateActiveItem(ul) {
    const items = ul.querySelectorAll("li");

    items.forEach((li, index) => {
        li.classList.toggle("active", index === activeIndex);

        if (index === activeIndex) {
            li.focus();
        }
    });
}

// ⭐ När användaren skriver
cityInput.addEventListener("input", async () => {
    searchMatch.innerHTML = "";
    const text = cityInput.value.trim();
    if (!text) return;

    const results = await geoService(text);

    // ⭐ EN träff → visa väder men FYLL INTE input
    if (results.length === 1) {
        const only = results[0];

        const cityName = extractCityName(`${only.name}, ${only.country}`);
        const weather = await weatherService(only.latitude, only.longitude);
        const card = weatherView(weather);

        weatherContainer.innerHTML = `
            <h2>${cityName}</h2>
        `;
        weatherContainer.appendChild(card);

        return; // avbryt, ingen dropdown
    }

    // ⭐ Flera träffar → visa dropdown
    const ul = showMatches(results);
    searchMatch.appendChild(ul);

    activeIndex = -1; // reset pilnavigation
});

// ⭐ Klick
searchMatch.addEventListener("click", async (event) => {
    const li = event.target;
    if (li.tagName !== "LI") return;

    await selectCity(li);
});

// ⭐ Enter (på valfri <li>)
searchMatch.addEventListener("keydown", async (event) => {
    if (event.key !== "Enter") return;

    const li = event.target;
    if (li.tagName !== "LI") return;

    await selectCity(li);
});

// ⭐ Pil ner: hoppa till första raden
cityInput.addEventListener("keydown", (event) => {
    const ul = searchMatch.querySelector("ul");
    if (!ul) return;

    if (event.key === "ArrowDown") {
        event.preventDefault();
        activeIndex = 0;
        updateActiveItem(ul);
    }
});

// ⭐ Pil upp/ner i listan
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
