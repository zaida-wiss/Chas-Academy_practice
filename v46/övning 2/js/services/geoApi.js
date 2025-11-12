export async function getGeo(city) {
  const query = city
    .replace(/å/g, "a")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/Å/g, "A")
    .replace(/Ä/g, "A")
    .replace(/Ö/g, "O");

  // 🌍 ta bort country=SE → sök globalt
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Kunde inte hämta koordinater");
  const data = await res.json();
  if (!data.results) return [];

  const allowed = ["PPLC", "PPLA", "PPLA2", "PPL"];
  return data.results.filter((r) => allowed.includes(r.feature_code));
}
