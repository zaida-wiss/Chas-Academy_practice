export async function getGeo(city, country="SE") {
    const url = "https://geocoding-api.open-meteo.com/v1/search?name=Göteborg&country=SE";
    const response = await fetch(url);
    if(!response.ok) throw new Error("Kunde inte hämta väderdata");
    return await response.json();
}
