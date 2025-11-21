console.log("displayBox.js laddas")


export function createDisplayBox(message) {
    console.log("createDisplayBox funktionen fungerar");
    console.log("inkommande meddelande: ",message);

    const div = document.createElement("div");
    div.classList.add("box");
    div.id = "displayBox";

    div.innerHTML =`
    <p>${message}</p>
    `;

    console.log("displayBox skapad:", div);
    return div;
}
