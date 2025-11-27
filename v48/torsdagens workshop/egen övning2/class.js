const cardGrid = document.getElementById("card-grid");
const article = document.createElementElement("article");

export class Card{
    constructor(rubrik, beskrivning){
        this.rubrik = rubrik
        this.beskrivning = beskrivning
    }
    
    cardGrid.appendChild(article);
    article.classList.add("card");
}