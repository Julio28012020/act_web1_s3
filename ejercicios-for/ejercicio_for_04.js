let contadorPrimos = 0;

console.log("Numeros primos entre 1 y 100:");

for (let numero = 2; numero <= 100; numero++) {
    let esPrimo = true;
    
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            esPrimo = false;
            break;
        }
    }
    
    if (esPrimo) {
        console.log(numero);
        contadorPrimos++;
    }
}

console.log(`Total de numeros primos: ${contadorPrimos}`);