console.log("main.js uppdateras...");

const container = document.getElementById("container");
const button = document.createElement("button");

class Card{
    constructor(rubrik, img, beskrivning){
        this.rubrik = rubrik;
        this.img = img;
        this.beskrivning = beskrivning;
    }
    render(){
    const card = document.createElement("section");
    card.classList.add("box");

    card.innerHTML=`
    <h2>${this.rubrik}</h2>
    <img src="${this.img}">
    <p>${this.beskrivning}</p>
    <button>Klicka här</button>
    `;
    return card;
    }
}

const dogCard= new Card(
    "En gullig hund",
    "https://hips.hearstapps.com/clv.h-cdn.co/assets/16/18/gettyimages-586890581.jpg",
    "Det här är en hund som står på stranden.");
    container.appendChild(dogCard.render());
    
const catCard = new Card (
    "en lurig katt", 
    "https://www.svedea.se/media/jrhfv35q/katt_selkirk-rex_980x590.webp", 
    "En katt som inte gillar att bada");
    container.appendChild(catCard.render());

const horseCard = new Card (
    "en galopperande häst",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQN7ZS1iWhsLxfW9-ZdiGiWERqKNvO7ApcYfhaGPT9faQLSw-3TdRiLkGp4aKol8PmTdj-y6N5hdiRSerhzCfJgVSFj_YYYtgUcnTQsA&s=10",
    "frihetskänslan hos hästen är magisk.");
    container.appendChild(horseCard.render());
