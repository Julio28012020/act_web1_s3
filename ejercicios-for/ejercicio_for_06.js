function calcularPotencia(base, exponente) {
    let resultado = 1;
    
    console.log(`\n Calculando ${base}^${exponente}:`);
    console.log(`Paso 0: resultado = ${resultado}`);
    
    for (let i = 1; i <= exponente; i++) {
        resultado = resultado * base;
        console.log(`Paso ${i}: ${resultado / base} × ${base} = ${resultado}`);
    }
    
    return resultado;
}

let base1 = 3;
let exponente1 = 6;
let resultado1 = calcularPotencia(base1, exponente1);
console.log(`Resultado final: ${base1}^${exponente1} = ${resultado1}\n`);

let base2 = 6;
let exponente2 = 4;
let resultado2 = calcularPotencia(base2, exponente2);
console.log(`Resultado final: ${base2}^${exponente2} = ${resultado2}\n`);
