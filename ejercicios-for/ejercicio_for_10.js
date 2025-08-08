let frase = "Anita lava la tina";
let textoLimpio = "";
let esPalindromo = true;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] != ' ') {
        textoLimpio += frase[i].toLowerCase();
    }
}

for (let i = 0; i < textoLimpio.length / 2; i++) {
    if (textoLimpio[i] != textoLimpio[textoLimpio.length - 1 - i]) {
        esPalindromo = false;
        break;
    }
}

console.log("\nFrase original: " + frase);
console.log("Texto limpio: " + textoLimpio);
console.log("Es palíndromo: " + esPalindromo);