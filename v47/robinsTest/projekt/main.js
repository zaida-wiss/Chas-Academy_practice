import {Person} from "./Person.js";

const zaida = new Person ("Zaida", "Wiss", 40, true,["dancing", "programming"],{role: "alltMöjligt", country: "Sweden"});
console.log(zaida.getInfo());
const lars = new Person ("Lars", "Kolmodin", 41, true,["running", "hiking"],{role: "sambo", country: "Sweden"});
console.log(lars.getInfo());
const moa = new Person ("Moa", "Wiss", 19, true,["styling", "party"],{role: "dotter", country: "Sweden"});
console.log(moa.getInfo());
const nathaniel = new Person ("Nathaniel", "Wiss Kolmodin", 6, true,["minecraft", "swimming"],{role: "son", country: "Sweden"});
console.log(nathaniel.getInfo());
const ciara = new Person ("Ciara", "Wiss Kolmodin", 4, false,["minecraft", "dolls"],{role: "dotter", country: "Sweden"});
console.log(ciara.getInfo());


const output = document.getElementById("output");
const people = [zaida, lars, moa, nathaniel, ciara];

const p = document.createElement("p");
output.appendChild(p);

let text = "";

people.forEach(person => {
    text += person.getFullName() + "\n";
});

output.textContent = text;

people.forEach(person => {
    text += person.getInfo() + "\n";
});

output.textContent = text;
