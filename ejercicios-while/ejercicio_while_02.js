  let contador =1
  let sumarPares =0
  let contarPares =0
  
  while (contador<=50 ){
    if (contador % 2 === 0 ){
      sumarPares += contador //sumarPares = sumarPares + contador
      contarPares +=1  //contarPares = contarPares + 1
    }
     contador++

  }

   console.log ("Suma de los numeros pares: " +sumarPares)
   console.log ("cantidad de numeros pares que se contaron: " +contarPares)
  
 