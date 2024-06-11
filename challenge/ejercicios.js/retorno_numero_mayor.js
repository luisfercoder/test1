//Usando javascript implementar una funcion que dado un numero entero 
//retrne otro numero formado por sus mismos digitos ordenados descendientemente



function descentOrder(num){
  //ppasarlo a string
  const numStr = num.toString();
  //trasnforma con split a un array 
  //sort permite ordenar po callback espresando a y b b-a= descendente || a-b ascendente
  const numArr= numStr.split('').sort((a,b) => b-a);
  
  //join para unir 
  return Number(numArr.join(''))
}
console.log(descentOrder(325));