const themeToggleButton = document.querySelector("#themeToggle");
const root = document.documentElement;
// Läs ev. sparat tema från localStorage (icke-känslig data)
const savedTheme = window.localStorage.getItem("preferred-theme");
if (savedTheme === "dark") {
	root.setAttribute("data-theme", "dark");
	themeToggleButton.textContent = "Byt till ljust tema";
}
// Hjälpfunktion: kolla om dark mode är aktivt
function isDarkMode() {
	return root.getAttribute("data-theme") === "dark";
}
function updateButtonLabel() {
	if (isDarkMode()) {
		themeToggleButton.textContent = "Byt till ljust tema";
	} else {
		themeToggleButton.textContent = "Byt till mörkt tema";
	}
}
themeToggleButton.addEventListener("click", () => {
	const nextTheme = isDarkMode() ? "light" : "dark";
	if (nextTheme === "dark") {
		root.setAttribute("data-theme", "dark");
	} else {
		root.removeAttribute("data-theme");
	}
	// Microinteraktion: liten "tryck"-effekt
	themeToggleButton.disabled = true;
	themeToggleButton.style.transform = "scale(0.97)";
	updateButtonLabel();
	// Spara icke-känslig preferens i localStorage
	window.localStorage.setItem("preferred-theme", nextTheme);
	setTimeout(() => {
		themeToggleButton.disabled = false;
		themeToggleButton.style.transform = "";
	}, 120);
});