let numeros;
let i;
let mayor;
let menor;
let suma;
let promedio;
let contadorPares;
let contadorImpares;

numeros = [];
for (i = 0; i < 20; i++) {
    numeros[i] = Math.floor(Math.random() * 100) + 1;
}

mayor = numeros[0];
menor = numeros[0];
suma = 0;
contadorPares = 0;
contadorImpares = 0;

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
    
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
    
    suma = suma + numeros[i];
    
    if (numeros[i] % 2 === 0) {
        contadorPares++;
    } else {
        contadorImpares++;
    }
}

promedio = suma / numeros.length;

console.log("\n      ANÁLISIS DE ARRAY DE NÚMEROS");
console.log("\n Array de números:", numeros);
console.log("\n      RESULTADOS DEL ANÁLISIS");
console.log("Número mayor:", mayor);
console.log("Número menor:", menor);
console.log("Suma total:", suma);
console.log("Promedio:", promedio.toFixed(2));
console.log("Números pares:", contadorPares);
console.log("Números impares:", contadorImpares);