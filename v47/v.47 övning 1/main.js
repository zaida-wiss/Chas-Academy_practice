console.log("main.js laddas");

const textChange= document.getElementById("textChange");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () =>{
    textChange.textContent= "Jag ändrade texten";
    alert("du klickade");
})

