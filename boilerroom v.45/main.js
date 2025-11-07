const cityInput = document.querySelector("#cityInput");
const cityBtn = document.querySelector("#cityBtn");
const weatherOutput =document.createElement("p");



//Funktion som visar vädret
const showWeather= () => {
    document.querySelector("#svar").appendChild(weatherOutput);
    const city =  cityInput.value.charAt(0).toUpperCase() + 
                  cityInput.value.slice(1).toLowerCase();
    const weather = findCityWeather(city);
    if (!weather) {
      weatherOutput.innerHTML="<p>Staden finns inte i databasen. </p>";
      console.log("något blev fel");
      return;
    }
      weatherOutput.innerHTML = `
      <p>${weather.stad}</p>
      <p>${weather.temperatur}°C</p>
      <p>${weather.description}</p>`;
      console.log ("vädret visades");
    };


//EventLyssnare
cityBtn.addEventListener("click", showWeather);
cityInput.addEventListener("change", showWeather);



const findCityWeather=(city) => {
    const findCity= CITIES.find(x => x.name === city);
    if(!findCity) {
      return;
    }
    const findLatLon = findCity.lat+","+findCity.lon;
    const findWeather = WEATHER[findLatLon].temp;
    const cityWeatherInfo= {
    stad: city,
    temperatur: WEATHER[findLatLon].temp,
    description: WEATHER[findLatLon].description,
    }
    return cityWeatherInfo;
    }

    
setInterval(showWeather, 600000);

//Mockup-data (Javascript)
const CITIES = [
  { name: "Stockholm", country: "SE", lat: 59.3293, lon: 18.0686 },
  { name: "Göteborg",  country: "SE", lat: 57.7089, lon: 11.9746 },
  { name: "Malmö",     country: "SE", lat: 55.6050, lon: 13.0038 },
  { name: "Uppsala",   country: "SE", lat: 59.8586, lon: 17.6389 },
  { name: "Lund",      country: "SE", lat: 55.7047, lon: 13.1910 },
];

const WEATHER = {
  "59.3293,18.0686": { temp: 7, description: "Mulet" },
  "57.7089,11.9746": { temp: 8, description: "Lätt regn" },
  "55.6050,13.0038": { temp: 9, description: "Klart" },
  "59.8586,17.6389": { temp: 6, description: "Dis" },
  "55.7047,13.1910": { temp: 8, description: "Halvklart" },
};