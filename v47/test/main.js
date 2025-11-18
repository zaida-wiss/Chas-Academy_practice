    // Kapitel 1 – Funktionsportalen öppnas
    // I Kodskogen finns en portal som heter greet. Den vaknar först när någon ropar på den – annars sover
    // den som en stock. Du följer flödet med console.log som om det vore magiska spår i mossan.
function greet(name) {
    console.log("1. Portalen öppnas...");
    console.log("2. Jag har fått namnet:", name);
    const message = "Hej" + name + "!";
    console.log("3. Jag har skapat ett magiskt meddelande:", message);
    return message;
}

console.log("A. Jag vandrar i Kodskogen...");
    const result = greet("Zaida");
    console.log("B. Jag har återvänt utanför portalen.");
    console.log("C. Meddelandet portalen gav mig var:", result)

    // Kapitel 2 – Den magiska besvärjelsen makeUpper()
    // En trollkarl i skogen tar ord och förvandlar dem till stora bokstäver.
function makeUpper(text) {
console.log("■■■■ makeUpper fick:", text);
return text.toUpperCase();
}

// Uppdrag 2:
// • När ropas trollkarlen upp?
// • Hur syns hoppet mellan funktionerna i konsolen?
// • Hur ser du när magin tar slut?
// Kapitel 3 – Draken CalcPrice gör ett misstag
// En drake försöker räkna ut skatt men multiplicerar allt felaktigt!
function calcPrice(price, tax) {
console.log("■ Draken börjar räkna...");
const total = price * tax;
console.log("■ Draken tror totalen är:", total);
return total;
}
const final = calcPrice(200, 0.25);
console.log("■ Drakens slutresultat:", final);
// Uppdrag 3:
// • Vad är drakens logiska fel?
// • Hur borde totalen beräknas?
// • Hur visar console.log det tydligt?
// Du är nu Kodskogens Funktionsväktare!