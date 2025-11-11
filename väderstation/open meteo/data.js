// data.js
export async function getWeather(city) {
  try {
    // 1️⃣ Hitta lat & lon för staden
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=sv`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("Staden kunde inte hittas.");
    }

    const { latitude, longitude, name } = geoData.results[0];

    // 2️⃣ Hämta väderdata för lat/lon
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`
    );
    const weatherData = await weatherRes.json();

    const code = weatherData.current.weather_code;
    const description = getWeatherDescription(code);

    // 3️⃣ Returnera ett tydligt objekt
    return {
      city: name,
      temperature: weatherData.current.temperature_2m,
      description,
      latitude,
      longitude,
    };
  } catch (error) {
    console.error("Fel vid hämtning av väder:", error);
    return { error: "Kunde inte hämta vädret. Försök igen." };
  }
}

// Hjälpfunktion för att översätta väderkoder
function getWeatherDescription(code) {
  const descriptions = {
    0: "Klart",
    1: "Mest klart",
    2: "Delvis molnigt",
    3: "Mulet",
    45: "Dimma",
    48: "Igenisad dimma",
    51: "Lätt duggregn",
    61: "Lätt regn",
    63: "Måttligt regn",
    65: "Kraftigt regn",
    71: "Lätt snöfall",
    73: "Måttligt snöfall",
    75: "Kraftigt snöfall",
    80: "Skurar",
    81: "Kraftiga skurar",
    95: "Åska",
    99: "Kraftig åska med hagel",
  };
  return descriptions[code] || "Okänt väder";
}
