function convert (num){
  return (num.toString(2));
}
console.log(convert(2.5))

function decimalABinario(decimal) {
  // Verifica que el número sea entero y no negativo
  if (!Number.isInteger(decimal) || decimal < 0) {
    throw new Error("El número debe ser un entero no negativo.");
  }

  // Caso especial: el número 0 en binario es "0"
  if (decimal === 0) {
    return "0";
  }

  let binario = "";
  
  // Conversión del número decimal a binario
  while (decimal > 0) {
    // Obtener el residuo (0 o 1) de la división por 2
    const residuo = decimal % 2;
    // Prepend el residuo al resultado binario
    binario = residuo + binario;
    // Actualizar el número decimal dividiéndolo por 2
    decimal = Math.floor(decimal / 2);
  }

  return binario;
}

// Ejemplo de uso
console.log(decimalABinario(10)); // "1010"
console.log(decimalABinario(255)); // "11111111"
console.log(decimalABinario(0));   // "0"
