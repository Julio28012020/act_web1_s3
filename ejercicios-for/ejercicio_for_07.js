let matriz = [];

for (let fila = 0; fila < 5; fila++) {
    matriz[fila] = [];
    for (let columna = 0; columna < 5; columna++) {
        matriz[fila][columna] = fila + columna;
    }
}

console.log("Matriz 5x5:");

for (let fila = 0; fila < 5; fila++) {
    let filaTexto = "";
    for (let columna = 0; columna < 5; columna++) {
        filaTexto += matriz[fila][columna] + " ";
    }
    console.log(filaTexto);
}