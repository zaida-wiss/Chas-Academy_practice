// OBS: detta är MEDVETET osäkert startexempel för övningen.

const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginStatus = document.querySelector("#loginStatus");
const welcomeText = document.querySelector("#welcomeText");

const commentInput = document.querySelector("#commentInput");
const commentOutput = document.querySelector("#commentOutput");

// Hämtar ev. namn från URL: ?name=<NAME>
const params = new URLSearchParams(location.search);
const nameParam = params.get("name");
if (nameParam) {
	welcomeText.innerHTML = "Välkommen " + nameParam + "!";
}

// Fake-inloggning
loginForm.addEventListener("submit", async (event) => {
	event.preventDefault();

	const username = usernameInput.value;
	const password = passwordInput.value;

	localStorage.setItem("lastLoginUser", username);
	localStorage.setItem("lastLoginPassword", password);

	// Fake "API-anrop"
	await new Promise((resolve) => setTimeout(resolve, 500));

	if (password === "password123") {
		const fakeToken = "FAKE_JWT_TOKEN_123";

		localStorage.setItem("jwt", fakeToken);

		console.log("Inloggad med token:", fakeToken, "för användare:", username);

		loginStatus.textContent = "Inloggning lyckades!";

		welcomeText.innerHTML = `Välkommen ${username}!`;
	} else {

		loginStatus.textContent =
			"Fel: lösenordet '" + password + "' stämmer inte för användare '" + username + "'";
	}
});

document.querySelector("#saveCommentBtn").addEventListener("click", () => {
	const text = commentInput.value;
	commentOutput.innerHTML = text;
});

function deleteAccount() {
	alert("Ditt konto har tagits bort permanent!");
}
