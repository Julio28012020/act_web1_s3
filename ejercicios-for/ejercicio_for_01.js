let tabla;
let multiplicador;
let resultado;

for (tabla = 1; tabla <= 10; tabla++) {
    console.log(`Tabla del ${tabla}`);
    
    for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
        resultado = tabla * multiplicador;
        console.log(`${tabla} x ${multiplicador} = ${resultado}`);
    }
    
    console.log("\n");
}