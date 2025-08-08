let secuencia = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
let suma = 0;

for (let i = 0; i < secuencia.length; i++) {
    console.log("Término " + (i + 1) + ": " + secuencia[i]);
    suma += secuencia[i];
}

console.log("Suma total: " + suma);