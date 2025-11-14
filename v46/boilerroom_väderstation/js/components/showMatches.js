// js/components/showMatches.js
// Den här modulen gör en dropdown-lista (UL) med matchande städer.

export function showMatches(results) {
    const ul = document.createElement("ul");

    results.forEach((item) => {
        const li = document.createElement("li");

        // Text som visas, t.ex. "Göteborg, Sweden"
        li.textContent = `${item.name}, ${item.country}`;

        // Gör raden tabb-bar
        li.tabIndex = 0;

        // Spara lat/lon i data-attribut
        li.dataset.lat = item.latitude;
        li.dataset.lon = item.longitude;

        ul.appendChild(li);
    });

    return ul;
}
