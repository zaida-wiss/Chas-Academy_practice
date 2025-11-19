console.log("main.js laddades! 🚀");
// Exempel-start – du kan ändra allt
class Husdjur {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `${this.name} är ${this.age} år.`;
  }

  celebrateBirthday() {
    this.age++;
    return `Hurra! ${this.name} är nu ${this.age} år.`;
  }
}

// Här kan du koppla formuläret och knapparna till dina klasser

const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const petList = document.getElementById("petList");
const log = document.getElementById("log");

//en array för alla husdjur
let pets = [];

//funktion: renderar listan
function renderList() {
    petList.innerHTML = ""; //töm listan

    pets.forEach((pet, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
        <div class="pet-meta">
            <span class = "pet-name">${pet.name}</span>
            <span class = "pet-age">${pet.age} år</span>
        </div>
        <button class="btn secondary" data-index="${index}">Födelsedag 🎉</button>

`;
petList.appendChild(li);
});
}

//SUBMIT -skapa nytt djur
document.getElementById("petForm").addEventListener("submit", (e) => {
    e.preventDefault();
const name = nameInput
})



const submitBtn = document.getElementById("submitBtn");
