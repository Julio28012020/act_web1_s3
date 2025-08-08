let nombres = ["Julio", "Luz", "Cesar", "Roque", "Edinson", "Pablo"];
let nombreBuscar = "Martin";
let posicion = -1;
let i = 0;

console.log("Buscando: " + nombreBuscar);
console.log("En el array: " + nombres);

while (i < nombres.length) {
    console.log("Revisando posicion " + i + ": " + nombres[i]);
    
    if (nombres[i] == nombreBuscar) {
        posicion = i;
        break;
    }
    
    i++;
}

if (posicion == -1) {
    console.log("El nombre " + nombreBuscar + " no se encontro");
} else {
    console.log("¡Encontrado! " + nombreBuscar + " esta en la posicion " + posicion);
}