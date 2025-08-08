let frase = "Desarrolla un programa que use un ciclo for para contar cuántas vocales";
let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;

for (let n = 0; n < frase.length; n++) {
    let letra = frase[n].toLowerCase();
    
    if (letra == 'a') a++;
    if (letra == 'e') e++;
    if (letra == 'i') i++;
    if (letra == 'o') o++;
    if (letra == 'u') u++;
}

console.log("a: " + a);
console.log("e: " + e);
console.log("i: " + i);
console.log("o: " + o);
console.log("u: " + u);