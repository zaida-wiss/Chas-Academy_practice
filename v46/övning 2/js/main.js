import { getWeather } from "./services/weatherService.js";
import { getGeo } from "./services/geoApi.js";

const input = document.getElementById("cityInput");
const datalist = document.getElementById("cityList");
const output = document.getElementById("output");
const mapContainer = document.getElementById("map");

let map, marker;

// Automatisk stor bokstav
input.addEventListener("input", () => {
  if (!input.value) return;
  input.value =
    input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase();
});

// När användaren ändrar fältet eller väljer ur listan
input.addEventListener("change", async () => {
  const city = input.value.trim();
  if (!city) return;

  output.textContent = "Söker...";
  datalist.innerHTML = "";

  try {
    const cities = await getGeo(city);

    if (cities.length === 0) {
      output.textContent = "Ingen stad hittades.";
      return;
    }

    // Bara en träff → visa väder och karta direkt
    if (cities.length === 1) {
      const c = cities[0];
      showWeatherAndMap(c);
      return;
    }

    // Flera städer → visa lista
    datalist.innerHTML = "";
    cities.forEach((c) => {
      const option = document.createElement("option");
      option.value = `${c.name}, ${c.country}`;
      option.dataset.lat = c.latitude;
      option.dataset.lon = c.longitude;
      datalist.appendChild(option);
    });

    output.textContent = "Välj rätt stad i listan.";

  } catch (err) {
    console.error(err);
    output.textContent = "Kunde inte hämta data.";
  }
});

// När användaren väljer från listan
input.addEventListener("input", async () => {
  const selected = Array.from(datalist.options).find(
    (o) => o.value.toLowerCase() === input.value.toLowerCase()
  );
  if (!selected) return;

  const [name, country] = selected.value.split(",").map((s) => s.trim());
  const lat = selected.dataset.lat;
  const lon = selected.dataset.lon;

  const c = { name, country, latitude: lat, longitude: lon };
  showWeatherAndMap(c);
});

// Funktion som visar väder + karta
async function showWeatherAndMap(c) {
  try {
    const weather = await getWeather(c.latitude, c.longitude);
    const temp = weather.current_weather.temperature;
    output.textContent = `Temperaturen i ${c.name}, ${c.country} är ${temp}°C.`;

    showMap(c.latitude, c.longitude, c.name);
  } catch {
    output.textContent = "Kunde inte hämta väderdata.";
  }
}

// Funktion för att visa/uppdatera karta
function showMap(lat, lon, name) {
  if (!map) {
    map = L.map(mapContainer).setView([lat, lon], 9);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);
    marker = L.marker([lat, lon]).addTo(map);
  } else {
    map.setView([lat, lon], 9);
    marker.setLatLng([lat, lon]);
  }
  marker.bindPopup(`<b>${name}</b>`).openPopup();
}
