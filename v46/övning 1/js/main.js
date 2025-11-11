import {createBtn} from "./components/button.js";

const hejKnapp = createBtn("Hej världen",() =>alert("Du har klickat på knappen"));
document.body.appendChild(hejKnapp);
hejKnapp.style.backgroundColor="green";

const colorBtn = createBtn("Ändra färg", () => {
    document.body.style.backgroundColor="blue"});
document.body.appendChild(colorBtn);

const textConsole = createBtn("Skriv i konsolen", () => {
    console.log("Ett meddelande i konsolen dök upp");
});
document.body.appendChild(textConsole);


let currentColor="white";
currentColor=document.body.style.backgroundColor="white";

const colorChangeBtn = createBtn("Byt bakgrundsfärg", () => {
    if (currentColor ==="white") 
        {document.body.style.backgroundColor="black";
            currentColor="black"}
    else if (currentColor==="black")
        {document.body.style.backgroundColor="blue";
            currentColor="blue"
        }
    else 
        {document.body.style.backgroundColor="white";
            currentColor="white"}
});
document.body.appendChild(colorChangeBtn);
