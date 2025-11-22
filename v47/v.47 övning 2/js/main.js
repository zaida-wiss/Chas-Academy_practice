import { getWeather } from "./services/weatherServices";

async function showWeather(){
    try{
    const result = await getWeather(56.05, 12.70);
    const temp = result.current_weather.temperature;
    const weatherCard =document.createElement("div");
    weatherCard.id= "weatherCard";
    weatherCard.innerHTML= `
    <p>Temperaturen är: ${temp}</p>
    `;
    document.body.appendChild(weatherCard)}
    catch (error){
        document.body.textContent ="Någonting gick fel";

    }
}
showWeather();