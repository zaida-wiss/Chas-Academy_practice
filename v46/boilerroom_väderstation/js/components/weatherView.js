// js/components/weatherView.js

function translateWeatherCode(code) {
    const codes = {
        0: "klar himmel",
        1: "mest klart",
        2: "delvis molnigt",
        3: "mulet",
        45: "dimma",
        48: "dimma med frost",
        51: "lätt duggregn",
        53: "måttligt duggregn",
        55: "kraftigt duggregn",
        61: "lätt regn",
        63: "måttligt regn",
        65: "kraftigt regn",
        71: "lätt snöfall",
        73: "måttligt snöfall",
        75: "kraftigt snöfall",
        77: "snökorn",
        80: "lätta regnskurar",
        81: "måttliga regnskurar",
        82: "kraftiga regnskurar",
        85: "lätt snöby",
        86: "kraftig snöby",
        95: "åska",
        96: "åska med lätt hagel",
        99: "åska med kraftigt hagel"
    };

    return codes[code] || "okänd vädertyp";
}

export function weatherView(weatherData) {
    const div = document.createElement("div");
    div.innerHTML = `
        <p>${weatherData.temperature}°C</p>
        <p>${translateWeatherCode(weatherData.code)}</p>
    `;
    return div;
}
