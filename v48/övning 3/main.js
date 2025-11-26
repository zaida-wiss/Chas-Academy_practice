console.log("main.js laddas...");

const inputUsername = document.getElementById("inputUsername");
const inputPassword = document.getElementById("inputPassword");
const loginBtn = document.getElementById("loginBtn");
const resultat = document.getElementById("resultat");




document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    
    loginBtn.classList.add("btn-loading");
    
    setTimeout(() => {
        loginBtn.classList.remove("btn-loading");
    }, 600);
    resultat.textContent="";
    
    const status = document.createElement("p");
    
    if (inputUsername.value.trim() ==="" || inputPassword.value.trim()===""){
        status.textContent="Fyll i bägge fälten."
        status.style.backgroundColor="red";
    } else {
        status.textContent= "inloggning lyckades!";
        status.style.backgroundColor="green";
    }
    resultat.appendChild(status);
})
