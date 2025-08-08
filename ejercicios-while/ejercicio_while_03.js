let contraseña = "admin123";
let intentos = 0;

while (contraseña != "admin123") {
    contraseña = "123456";
    
    if (contraseña == "admin123") {
        console.log("Acceso concedido");
    } else {
        intentos++;
        console.log("Contraseña incorrecta. Intento " + intentos);
    }
}

console.log("Intentos fallidos: " + intentos);