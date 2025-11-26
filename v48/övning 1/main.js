console.log("main.js laddas");

const loginBtn = document.getElementById("loginBtn");
const inputUsername = document.getElementById("inputUsername");
const inputEmail = document.getElementById("inputEmail");


loginBtn.addEventListener("click", () => {
    const info = document.createElement("p");
    if (inputUsername.value.trim() === ""||inputEmail.value.trim() === "") {
        info.textContent = "Du har fler uppgifter att fylla i."
        info.style.backgroundColor="red";
        document.body.appendChild(info);
        return;
    }
    info.textContent="du lyckades registrera dig!";
    document.body.appendChild(info);
});
