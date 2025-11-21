console.log("userButton.js filen laddas");

export function userButton(label, onClick) {
    console.log("userButton funktionen körs")

    const userBtn = document.createElement ("button");
    userBtn.textContent= label;

    userBtn.addEventListener("click", ()=>{
        console.log("knappen klickades");
        if (onClick) {
            onClick(); // <-- funktionen körs här
        }
    });
 
    return userBtn;
};

