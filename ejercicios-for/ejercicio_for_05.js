let cadenaOriginal = "Roque Aldana";
let cadenaInvertida = "";

for (let i = cadenaOriginal.length - 1; i >= 0; i--) {
    cadenaInvertida += cadenaOriginal[i];
}

console.log("\nCadena original: " + cadenaOriginal);
console.log("Cadena invertida: " + cadenaInvertida);