import { getWeather } from "./services/weatherService.js";
import { getGeo } from "./services/geoApi.js";

const input = document.getElementById("cityInput");
const list = document.getElementById("cityList");
const output = document.getElementById("output");

// Första bokstaven blir stor
input.addEventListener("input", () => {
  if (!input.value) return;
  input.value =
    input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase();
});

// Tryck Enter → sök stad
input.addEventListener("keydown", async (e) => {
  if (e.key !== "Enter") return;
  e.preventDefault();

  const city = input.value.trim();
  if (!city) return;

  output.textContent = "Söker...";
  list.innerHTML = "";

  try {
    const cities = await getGeo(city);
    if (cities.length === 0) {
      output.textContent = "Ingen stad hittades.";
      return;
    }

    // En stad hittad → visa väder direkt
    if (cities.length === 1) {
      const c = cities[0];
      const w = await getWeather(c.latitude, c.longitude);
      // 🟢 visa användarens stadnamn i texten
      output.textContent = `Temperaturen i ${city}, ${c.country} är ${w.current_weather.temperature}°C.`;
      return;
    }

    // Flera städer hittade → visa alternativ i listan
    cities.forEach((c) => {
      const opt = document.createElement("option");
      opt.value = `${c.name}, ${c.country}`;
      opt.dataset.lat = c.latitude;
      opt.dataset.lon = c.longitude;
      list.appendChild(opt);
    });
    output.textContent = "Välj rätt stad i listan.";
  } catch {
    output.textContent = "Kunde inte hämta data.";
  }
});

// När en stad valts från listan
input.addEventListener("change", async () => {
  const val = Array.from(list.options).find(
    (o) => o.value.toLowerCase() === input.value.toLowerCase()
  );
  if (!val) return;

  const [name, country] = val.value.split(",").map((s) => s.trim());
  const lat = val.dataset.lat;
  const lon = val.dataset.lon;

  try {
    const w = await getWeather(lat, lon);
    output.textContent = `Temperaturen i ${name}, ${country} är ${w.current_weather.temperature}°C.`;
  } catch {
    output.textContent = "Kunde inte hämta väderdata.";
  }
});
