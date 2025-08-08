let numero = 0;
let contador = 0;

while (numero <= 95) {
    numero = Math.floor(Math.random() * 100) + 1;
    contador++;
    console.log(numero);
}

console.log("Total De Numeros Generados: " + contador);
