export async function getGeo(city, country = "SE") {
  const encodedCity = encodeURIComponent(city);
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodedCity}&country=${country}`;
  
  const response = await fetch(url);
  if (!response.ok) throw new Error("Kunde inte hämta koordinater");

  const data = await response.json();

  // Kontrollera att något faktiskt hittades
  if (!data.results || data.results.length === 0) {
    throw new Error("Ingen stad hittades");
  }

  return data.results[0]; // innehåller latitude, longitude, name, country osv.
}
