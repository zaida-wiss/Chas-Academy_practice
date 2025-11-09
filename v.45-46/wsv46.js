// Kapitel 1 – Den Förlorade Rubriken
// Modulus vaknar upp i HTML-byn där alla rubriker har försvunnit. Invånarna är förvirrade. Din första uppgift
// är att hjälpa Modulus återskapa byns struktur.
// ■ Övning 1.1:
//x Skapa en HTML-sida med ett tomt . Skriv JavaScript som skapar en -rubrik med texten ”Välkommen
//x till HTML-byn” och lägger den inuti containern.
// ■ Övning 1.2:
//x Skapa tre -element med olika bakgrundsfärger och lägg dem i byn. En av dem ska byta färg när du
//x klickar på den.
// ■ Övning 1.3:
// Lägg till en knapp som när du klickar på den skapar ett nytt -element i en lista i DOM:en. Lista alla
// som återvänt till byn.


//Hämta container
const container = document.getElementById("container");

//lägg till en rubrik
const rubrik = document.createElement("h1");
rubrik.textContent="Välkommen till HTML-byn";
container.appendChild(rubrik);

//Skapa tre olika element med olika bakgrundsfärger och lägg dem i byn. 
const color = ["blue", "green", "red"];

for (let i=0;i<3;i++){
const hus = document.createElement("div");
hus.style.width="100px";
hus.style.height="100px";
hus.style.margin="30px";
hus.style.backgroundColor=color[i];
hus.style.display="inline-block";


//en av dem ska byta färg när du klickar på den.
if (i===2) {
    hus.addEventListener("click", () => {
        hus.style.backgroundColor=
            hus.style.backgroundColor ==="red" ? "orange" : "red";
    });
}

container.appendChild(hus);
}

//Lista över återvändare

const returner = ["Sanna", "Stig", "Svea", "Sigrid", "Pär", "Oskar"];

const returnerBtn = document.createElement("button");
returnerBtn.textContent= "Visa hemvändare";
container.appendChild(returnBtn);
const ul = document.createElement("ul");
container.appendChild(ul);

//Eventlistner som skapar listan
returnerBtn.addEventListener("click", () => {
ul.innerHTML = ""; //Rensa tidigare innehåll
returner.forEach(person => {
    const name = document.createElement("li");
    name.textContent = person;
    ul.appendChild(li);
});




// Kapitel 2 – Händelsens Skog
// För att nå nästa stad måste Modulus passera genom Skogen där allt styrs av händelser. Träd ändrar färg
// när man rör vid dem, och stenar rör sig när man klickar på dem. Kod behövs för att hantera alla dessa
// händelser.
// ■ Övning 2.1:
// Lägg till tre -element som representerar träd. När man för musen över ett träd ska bakgrunden ändras
// till grönt.
// ■ Övning 2.2:
// Skapa ett formulär där man skriver sitt namn. När man trycker på Enter ska en hälsning visas utan att
// sidan laddas om.
// ■ Övning 2.3:
// Bygg en lista av stenar (). När man dubbelklickar på en sten tas den bort. Använd event delegation!



// Kapitel 3 – Modulbergen
// I bergen bor Kodmästarna, som vägrar allt spagettikod. Modulus måste visa att han förstår moduler och
// separation of concerns. Koden måste delas upp i små, tydliga filer där varje fil gör en sak.
// ■ Övning 3.1:
// Skapa en modul (utils.js) som exporterar en funktion `capitalize(text)` som gör första bokstaven
// versal. Importera och använd den i main.js.
// ■ Övning 3.2:
// Skapa en komponentmodul `createCard.js` som returnerar ett DOM-element med en titel och en
// beskrivning. Lägg till 3 kort på sidan via main.js.
// ■ Övning 3.3:
// Organisera din mappstruktur: /components, /services, /utils och main.js. Dokumentera i en README
// hur modulerna samarbetar.




// Kapitel 4 – Tillgänglighetens Torn
// Det sista hindret är ett högt torn utan trappa – bara de med skärmläsare och tangentbord når toppen.
// Modulus måste koda ett tillgängligt gränssnitt så att alla får vara med.
// ■ Övning 4.1:
// Gör en knapp tillgänglig med aria-label, korrekt tabb-ordning och semantisk HTML. Den ska säga
// 'Öppna menyn' till skärmläsaren.
// ■ Övning 4.2:
// Bygg ett formulär med namn, e-post och meddelande. Alla fält ska ha tillhörande och `aria-required`
// där det behövs.
// ■ Övning 4.3:
// Skapa ett element som går att navigera med Tab och aktiveras med Enter – utan att vara en ! Gör det
// tillgängligt ändå.
// Final – Återkomsten till Frontendstan
// Modulus har nu bevisat sin kunskap och återvänder hem som en hjälte. Nu är det din tur att visa upp vad
// du byggt. Välj en av övningarna och gör en egen tolkning som du kan visa upp på GitHub eller i din
// portfolio. Lycka till – och kom ihåg att kod är som magi: kraftfullast när den delas!