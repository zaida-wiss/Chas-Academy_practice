const form = document.querySelector("#loginForm");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const message = document.querySelector("#formMessage");
const submitButton = form.querySelector("button[type='submit']");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email =emailInput.value.trim();
    const password = passwordInput.value;

    let errors = []

    if(!email) {
        errors.push("E-post får inet vara tomt.") 
    } else if (email.includes == false) {
        errors.push("E-post måste innehålla ett @");
    }
    if(!password) {
        errors.push("lösenord får inte vara tomt.");
    } else if (password.length <6) {
        errors.push("Lösenordet måste innehålla minst 6 tecken.");
    }

    if(errors.length >0) {
        message.textContent = "errors.join(" ")";
        return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Loggar in.....";

    message.textContent = "loggar in dig... vänta";

    setTimeout(()=> {
        submitButton.disabled = false;
        submitButton.textContent = "Logga in";

        form.reset ();

        message.textConfirm = "Du är inloggad";
    }, 1000);
 });
