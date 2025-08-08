let numeroSecreto = 77;
let adivinanza = 
0;
let intentos = 0;

console.log("Adivina el número entre 1 y 50");
console.log("Tienes 7 intentos máximo");

while (intentos < 7 && adivinanza != numeroSecreto) {
    intentos++;
    
    adivinanza = 19;
    
    console.log("Intento " + intentos + ": " + adivinanza);
    
    if (adivinanza == numeroSecreto) {
        console.log("¡Ganaste en " + intentos + " intentos!");
    } else if (adivinanza > numeroSecreto) {
        let diferencia = adivinanza - numeroSecreto;
        if (diferencia <= 5) {
            console.log("Cerca - muy alto");
        } else {
            console.log("Muy alto");
        }
    } else {
        let diferencia = numeroSecreto - adivinanza;
        if (diferencia <= 5) {
            console.log("Cerca - muy bajo");
        } else {
            console.log("Muy bajo");
        }
    }
}

if (intentos == 7 && adivinanza != numeroSecreto) {
    console.log("Perdiste. El número era: " + numeroSecreto);
}