    // <div id="vädersektion">
    //     <input type="input" aria-label="mata in vilken stad här" placeholder="Skriv stad här">
    //     <button id="inputBtn" aria-label="tryck på knappen för att väla din stad">Sök</button>
    //     <section id="weatherInfo" aria-label="här kommer informationen om vädret"></section>
    // </div>

    const newCity = document.getElementById("input");
    const searchBtn = document.getElementById("inputBtn");
    const weatherInfo = document.getElementById("weatherInfo");

    searchBtn.addEventListener("click", () => {
        console.log("Du har klickat på sök-knappen");
        weatherInfo.textContent= data
    })
    async function getWeather(){
        try {
       const response= await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41");
        const data = await response.json();
    } catch (error){
        console.error("Nu blev det fel");
    }
}