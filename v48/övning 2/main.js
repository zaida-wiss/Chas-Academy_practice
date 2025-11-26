console.log("Main.js laddas...");

const cardContainer = document.getElementById("cardContainer");

class Card {
    constructor(img, rubrik, beskrivning) {
        this.img = img;
        this.rubrik = rubrik;
        this.beskrivning = beskrivning;
    }
    render() {
        const card = document.createElement("div");
        card.classList.add("card-komponenter");

        card.innerHTML = `
        <img src="./bilder/${this.img}" alt="${this.rubrik}"  width="300" height="450">
        <h3>${this.rubrik}</h3>
        <p>${this.beskrivning}</p>
        <button class="cardBtn">Läs mer</button>
        `;
        return card;
    }
}

const tomteTjej = new Card("nissan_pose1.webp", "Tomteflicka", "Busig nisse som älskar snö.");
const tomteKille = new Card("nisse_pose1.webp", "Tomtepojke", "Glad nisse som vinkar hej!");
const tomtenissar = new Card("nissar_bus1.webp", "Busnissar", "Två nissar som busar.");

cardContainer.appendChild(tomteTjej.render());
cardContainer.appendChild(tomteKille.render());
cardContainer.appendChild(tomtenissar.render());
