function calcularFactorial(numero) {
    let resultado = 1;
    let i = numero;
    
    console.log("Calculando factorial de " + numero + ":");
    
    while (i > 0) {
        console.log(resultado + " x " + i + " = " + (resultado * i));
        resultado = resultado * i;
        i--;
    }
    
    console.log("Factorial de " + numero + " = " + resultado);
    return resultado;
}

calcularFactorial(8);