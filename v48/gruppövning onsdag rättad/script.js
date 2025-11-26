// Säker script.js – alla brister åtgärdade

// Hämta element
const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginStatus = document.querySelector("#loginStatus");
const welcomeText = document.querySelector("#welcomeText");

const commentInput = document.querySelector("#commentInput");
const commentOutput = document.querySelector("#commentOutput");

const deleteBtn = document.querySelector("#deleteAccountBtn");


// Hjälpfunktion: sanera text (säkerhet mot XSS)
function sanitize(text) {
  // Tar bort < och > så text inte kan tolkas som HTML
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}


// ----------------------------
// 1. Hantera inloggning
// ----------------------------
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Grundläggande validering (UX + säkerhet)
  if (!username || !password) {
    loginStatus.textContent = "Fyll i både användarnamn och lösenord.";
    return;
  }

  // Fake API-anrop (simulerad fördröjning)
  loginStatus.textContent = "Loggar in...";
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Fake autentisering
  if (password === "password123") {
    // ✔ Ingen token sparas i localStorage
    // ✔ Ingen känslig data loggas
    loginStatus.textContent = "Inloggning lyckades!";

    // XSS-säker utskrift
    welcomeText.textContent = `Välkommen ${username}!`;

    // Rensa lösenord från inputfältet
    passwordInput.value = "";

  } else {
    // ✔ Inget avslöjande om vilket fält som var fel
    loginStatus.textContent = "Felaktiga inloggningsuppgifter.";
  }
});


// ----------------------------
// 2. Spara kommentar (säker)
// ----------------------------
document.querySelector("#saveCommentBtn").addEventListener("click", () => {
  const text = commentInput.value.trim();

  if (!text) {
    commentOutput.textContent = "Kommentaren kan inte vara tom.";
    return;
  }

  // ✔ Sanera text → ingen XSS
  commentOutput.textContent = sanitize(text);

  // Rensa inputfältet
  commentInput.value = "";
});


// ----------------------------
// 3. Ta bort konto (UX + säkerhet)
// ----------------------------
deleteBtn.addEventListener("click", () => {
  const confirmed = confirm("Är du säker på att du vill ta bort ditt konto?");

  if (confirmed) {
    alert("Ditt konto har tagits bort.");
    welcomeText.textContent = "Ingen användare inloggad.";
    loginStatus.textContent = "";
  }
});
