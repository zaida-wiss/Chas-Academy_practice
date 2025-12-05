const form = document.querySelector("#signup-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirm");
const messageEl = document.querySelector("#form-message");
const submitBtn = form.querySelector(".btn--primary");

function setMessage(text, type = "neutral") {
	// Viktigt: textContent gör att texten behandlas som text, inte HTML
	messageEl.textContent = text;
	messageEl.classList.remove("feedback--error", "feedback--success");
	if (type === "error") {
		messageEl.classList.add("feedback--error");
	} else if (type === "success") {
		messageEl.classList.add("feedback--success");
	}
}
function looksLikeEmail(value) {
	return value.includes("@") && value.includes(".");
}
form.addEventListener("submit", (event) => {
	event.preventDefault();
	const email = emailInput.value.trim();
	const password = passwordInput.value.trim();
	const confirm = confirmInput.value.trim();
	// Enkel frontend-validering (hjälp för användaren)
	if (!email || !password || !confirm) {
		setMessage("Fyll i alla fält.", "error");
		return;
	}
	if (!looksLikeEmail(email)) {
		setMessage("Ange en giltig e-postadress.", "error");
		return;
	}
	if (password.length < 6) {
		setMessage("Lösenordet behöver minst 6 tecken.", "error");
		return;
	}
	if (password !== confirm) {
		setMessage("Lösenorden matchar inte.", "error");
		return;
	}
	// UX + säkerhet: visa status, blockera dubbelklick, men spara inte lösenordet
	submitBtn.disabled = true;
	setMessage("Skapar konto...");
	setTimeout(() => {
		submitBtn.disabled = false;
		form.reset();
		setMessage("Kontot skapades (simulerat).", "success");
	}, 1200);
});
// Rensa meddelandet när användaren ändrar något
[emailInput, passwordInput, confirmInput].forEach((input) => {
	input.addEventListener("input", () => {
		if (messageEl.textContent) {
			setMessage("");
		}
	});
});
