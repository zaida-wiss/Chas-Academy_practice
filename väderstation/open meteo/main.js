import { getWeather } from "./data.js";

const cityInput = document.getElementById("input");
const searchBtn = document.getElementById("inputBtn");
const weatherInfo = document.getElementById("weatherInfo");

searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) return;

  weatherInfo.innerHTML = "<p>Söker...</p>";

  const data = await getWeather(city);

  if (data.error) {
    weatherInfo.innerHTML = `<p>${data.error}</p>`;
    return;
  }

  weatherInfo.innerHTML = `
    <article class="weather-card" aria-live="polite">
      <h2>${data.city}</h2>
      <p>${data.temperature} °C</p>
      <p>${data.description}</p>
      <small>Lat: ${data.latitude.toFixed(2)}, Lon: ${data.longitude.toFixed(2)}</small>
    </article>
  `;
});
