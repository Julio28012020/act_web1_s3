let numero = 7910;
let contador = 0;
let temp = numero;

console.log("Contando digitos de: " + numero);

while (temp > 0) {
    console.log("Numero actual: " + temp);
    temp = Math.floor(temp / 10);
    contador++;
    console.log("Eliminando último dígito, queda: " + temp + " - Digitos contados: " + contador);
}

console.log("El numero " + numero + " tiene " + contador + " digitos");