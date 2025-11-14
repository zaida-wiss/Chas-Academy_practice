//Den här modulen gör en drop downlista i ul när vi fyller i inputfältet, med matchande städer.

export function showMatches(result) {
    // Skapa en ny <ul>
const ul = document.createElement("ul");

result.forEach((item) => {
    const li = document.createElement("li");
    // 1. Texten som ska synas, t.ex. "Göteborg, Sverige"
    li.textContent= `${item.name}, ${item.country}`;
    // 2. Gör raden tabbbar
    li.tabIndex = 0;
    // 3. Spara lat/lon i data-attribut
    li.dataset.lat = item.latitude
    li.dataset.lon = item.longitude
    // 4. Låt listan bli synlig och inte bara i minnet
    ul.appendChild(li);
});

return ul;
}
