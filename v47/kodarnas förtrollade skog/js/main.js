console.log("main.js laddas");

import {echoValue} from "./utils/echoValue.js";
import {doubleValue} from "./utils/modulDouble.js";
import {createDisplayBox} from "./utils/displayBox.js";
import {userInput} from "./components/userInput.js"
import {userButton} from "./components/userButton.js"

const eko= echoValue("Jag lägger in ett värde här");
console.log("Resultat från echoValue:", eko);

const dubbelt = doubleValue(7);
console.log("Resultat från doubleValue: ", dubbelt);

const box = createDisplayBox(`Dubblat värde: ${dubbelt}`);
document.body.appendChild(box);


console.log("Allt är nu klart i main.js!");

