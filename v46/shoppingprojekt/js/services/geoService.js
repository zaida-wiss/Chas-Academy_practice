//Denna modul tar emot en stad som text från main, matchar den, returnerar en lista till en dropdown

export async function geoService(city) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`;
    const res = await fetch(url);
    const data = await res.json();
    
    const cleanedRes = data.results.map(item => ({
        name: item.name,
        country: item.country,
        latitude: item.latitude,
        longitude: item.longitude
    }));
    return cleanedRes;
}
