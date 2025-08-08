let suma = 0;
let contador = 0;
let max = null;
let min = null;

let calificacion = Number(prompt("Ingresa una calificación (0-100):"));

while (calificacion !== -1) {
  if (calificacion >= 0 && calificacion <= 100) {
    suma += calificacion;
    contador++;

    if (max === null || calificacion > max) max = calificacion;
    if (min === null || calificacion < min) min = calificacion;
  } else {
    alert("⚠️ Calificación inválida. Debe estar entre 0 y 100.");
  }

  calificacion = Number(prompt("Ingresa otra calificación (o -1 para terminar):"));
}

if (contador > 0) {
  const promedio = suma / contador;
  console.log("\n--- Resultados ---");
  console.log("Promedio:", promedio.toFixed(2));
  console.log("Calificación más alta:", max);
  console.log("Calificación más baja:", min);
  
  alert(`Resultados:\nPromedio: ${promedio.toFixed(2)}\nMás alta: ${max}\nMás baja: ${min}`);
} else {
  console.log("No se ingresaron calificaciones válidas.");
}