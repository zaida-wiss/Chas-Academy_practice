export async function getSwedishName(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&accept-language=sv`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Kunde inte hämta platsnamn");
  const data = await res.json();

  // Returnera bästa tillgängliga platsnamn
  return (
    data.address.city ||
    data.address.town ||
    data.address.village ||
    data.address.municipality ||
    data.display_name
  );
}
