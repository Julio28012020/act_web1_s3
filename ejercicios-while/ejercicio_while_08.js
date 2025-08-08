let a = 0;
let b = 1;
let contador = 0;

console.log("Generando los primeros 15 números de Fibonacci:");

while (contador < 15) {
    console.log("Posición " + (contador + 1) + ": " + a);
    
    let siguiente = a + b;
    a = b;
    b = siguiente;
    contador++;
}

console.log("Secuencia de Fibonacci completa (15 números generados)");