const cityInput = document.querySelector("#cityInput");
const cityBtn = document.querySelector("#cityBtn");
const weatherInfo =document.createElement("p");

cityBtn.addEventListener("click", () => {
  console.log("Knappen klickades!");
});

cityInput.addEventListener("change", () => {
    weatherInfo.textContent = "här visas temperaturen"
    här ska appendchild komma in i bilden va?
  console.log("Användaren skrev något!");
});