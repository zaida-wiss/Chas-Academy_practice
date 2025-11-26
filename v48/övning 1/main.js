console.log("main.js laddas");

const loginBtn = document.getElementById("loginBtn");
const inputUsername = document.getElementById("inputUsername");
const inputEmail = document.getElementById("inputEmail");
const feedback = document.createElement("div");


loginBtn.addEventListener("click", () => {
    feedback.textContent="";
    feedback.id="feedback";
    document.body.appendChild(feedback);

    const info = document.createElement("p");

    if (inputUsername.value.trim() === ""||inputEmail.value.trim() === "") {
        info.textContent = "Du har fler uppgifter att fylla i."
        info.style.backgroundColor="red";
        feedback.appendChild(info);
        return;
    }
    info.textContent="du lyckades registrera dig!";
    info.style.backgroundColor= "green";
    feedback.appendChild(info);
});
