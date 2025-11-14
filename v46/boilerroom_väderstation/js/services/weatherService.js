export async function weatherService(lat,lon) {
const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,snowfall`;
const APIres = await fetch(url)
const data = await APIres.json();
const cleanedWeather= {
    temperature: data.current.temperature_2m,
    code: data.current.weather_code,
    snowfall: data.current.snowfall
} 

return cleanedWeather
}

