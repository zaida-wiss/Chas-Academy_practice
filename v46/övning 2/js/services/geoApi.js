export async function getGeo(city) {
  // API gillar inte å/ä/ö, så vi ersätter dem innan sökning
  const query = city
    .replace(/å/g, "a")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/Å/g, "A")
    .replace(/Ä/g, "A")
    .replace(/Ö/g, "O");

  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&country=SE`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Kunde inte hämta koordinater");
  const data = await res.json();
  if (!data.results) return [];

  // Ta bara med riktiga städer
  const allowed = ["PPLC", "PPLA", "PPLA2"];
  const cities = data.results.filter((r) => allowed.includes(r.feature_code));

  // Översätt till svenska namn om de finns i listan
  const names = {
    Goeteborg: "Göteborg",
    Goteborg: "Göteborg",
    Malmo: "Malmö",
    Are: "Åre",
    Orebro: "Örebro",
    Vasteras: "Västerås",
    Gavle: "Gävle",
    Lulea: "Luleå",
    Angelholm: "Ängelholm",
  };

  return cities.map((c) => ({
    ...c,
    name: names[c.name] || c.name,
  }));
}
