let fila;
let linea;
let asterisco;

for (fila = 1; fila <= 5; fila++) {
    linea = "";
    for (asterisco = 1; asterisco <= fila; asterisco++) {
        linea += "*";
    }
    console.log(linea);
}

for (fila = 4; fila >= 1; fila--) {
    linea = "";
    for (asterisco = 1; asterisco <= fila; asterisco++) {
        linea += "*";
    }
    console.log(linea);
}