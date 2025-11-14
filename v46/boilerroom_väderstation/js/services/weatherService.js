// js/services/weatherService.js

export async function weatherService(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,snowfall`;
    const APIres = await fetch(url);
    const data = await APIres.json();

    const cleanedWeather = {
        temperature: data.current.temperature_2m,
        code: data.current.weather_code
    };

    return cleanedWeather;
}


export function translateWeather(code) {
  const map = {
    0: "klart",
    1: "mest klart",
    2: "halvklart",
    3: "mulet",
    45: "dimma",
    48: "dimma",
    51: "duggregn",
    53: "duggregn",
    55: "duggregn",
    61: "regn",
    63: "regn",
    65: "kraftigt regn",
    71: "snöfall",
    73: "snöfall",
    75: "snöfall",
  };
  return map[code] || "okänt väder";
}
