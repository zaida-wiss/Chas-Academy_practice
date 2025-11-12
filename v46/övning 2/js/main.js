import { getWeather } from "./services/weatherService.js";
import { getGeo } from "./services/geoApi.js";

const cityInput = document.getElementById("cityInput");
const citySearchBtn = document.getElementById("citySearchBtn");
const outputContainer = document.getElementById("outputContainer");
const outputContent = document.createElement("p");
outputContainer.appendChild(outputContent);

// Skapar listan med stadsträffar
function showCityOptions(results) {
  // ta bort eventuell tidigare lista
  const existingList = document.getElementById("cityList");
  if (existingList) existingList.remove();

  const list = document.createElement("ul");
  list.id = "cityList";

  results.forEach(result => {
    const li = document.createElement("li");
    li.textContent = `${result.name}, ${result.country}`;

    // Klick på stad => visa väder
    li.addEventListener("click", async () => {
      try {
        const data = await getWeather(result.latitude, result.longitude);
        const temp = data.current_weather.temperature;
        outputContent.textContent = `Temperaturen i ${result.name}, ${result.country} är ${temp}°C.`;
      } catch (error) {
        outputContent.textContent = "Kunde inte hämta väderdata.";
        console.error(error);
      }
      list.remove(); // ta bort listan efter val
    });

    list.appendChild(li);
  });

  outputContainer.appendChild(list);
}

// Hanterar klick på sökknappen
citySearchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) {
    outputContent.textContent = "Skriv in en stad först.";
    return;
  }

  try {
    const data = await getGeo(city);
    if (!data.results || data.results.length === 0) {
      outputContent.textContent = "Ingen stad hittades.";
      return;
    }
    showCityOptions(data.results);
  } catch (error) {
    outputContent.textContent = "Kunde inte hämta stadens koordinater.";
    console.error(error);
  }
});
