export async function getWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Kunde inte hämta vädret");
  const data = await res.json();
  return data.current_weather;
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
