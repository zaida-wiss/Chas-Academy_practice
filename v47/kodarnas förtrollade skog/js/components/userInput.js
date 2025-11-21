console.log("userInput.js laddas");

export function userInput(){
    const inputElement = document.getElementById("userInput");
   inputElement.addEventListener("input", () =>{
        const value = inputElement.value;
        console.log("Användaren skrev: ", value);
    });
    return inputElement; //valfritt och kan tas bort om man inte vill använda return.
};