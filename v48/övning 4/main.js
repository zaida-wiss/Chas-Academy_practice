const primaryBtn = document.getElementById("primartBtn");
const secondaryBtn = document.getElementById("secondaryBtn");
const infoCard = document.getElementById("infoCard");

const div = document.createElement("div");
div.style.backgroundColor ="var(--elfgreen)";
infoCard.appendChild(div);

const pBtn = document.createElement("button");

pBtn.textContent="hej";
pBtn.style.backgroundColor="red";
pBtn.style.marginTop = "400px";
body.appendChild(pBtn);

primaryBtn.style.color="red";