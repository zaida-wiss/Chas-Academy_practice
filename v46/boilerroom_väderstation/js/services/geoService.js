export async function geoService(city) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=sv&format=json`;
    const res = await fetch(url);
    const data = await res.json();
    
    // tillåt fler typer av städer/byar
    const allowed = ["PPLC", "PPLA", "PPLA2", "ISL"];
    const filtered = data.results.filter(item => allowed.includes(item.feature_code));

    // exakt match med början av namnet
    const lowerCity = city.toLowerCase();
    const strict = filtered.filter(item =>
        item.name.toLowerCase().startsWith(lowerCity)
    );

    const cleanedRes = strict.map(item => ({
        name: item.name,
        country: item.country,
        latitude: item.latitude,
        longitude: item.longitude
    }));

    return cleanedRes;
}
