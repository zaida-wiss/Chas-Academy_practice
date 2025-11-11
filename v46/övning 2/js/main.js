import {getWeather} from "./services/weatherService.js";

const cityInput = document.getElementById("cityInput");
const citySearchBtn = document.getElementById("citySearchBtn");
const outputContainer = document.getElementById("outputContainer");
const outputContent = document.createElement("p");
outputContainer.appendChild(outputContent);


async function showWeather(lat, long) {
    try {
        //hämta data baserat på long och lat
        const data = await getWeather(lat, long);
        console.log(data);
        // hämta ut temperaturen
        const temp = data.current_weather.temperature;
        console.log(temp);
        
        //Hämta och formatera stadens namn
        const city = cityInput.value.trim();
        const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
        
        //visa resultatet i outputContainer (även vid fel)
    outputContent.textContent = `Temperaturen i ${formattedCity} är ${temp}°C.`;
  } catch (error) {
    outputContent.textContent = "väderdata kunde inte hämtas just nu";
  };
  };

  citySearchBtn.addEventListener("click", () => {
    showWeather(lat,long);
  });