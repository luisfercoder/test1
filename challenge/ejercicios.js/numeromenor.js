
function findMenor(array){
  let menor = array[0];
  
  for(let i = 1;i<array.length; i++){
    //recorre el array desde el segundo y compora si cada elemnto con el menor si cambia se actualiza y muestra el resultado
    if(array[i] < menor){
      menor=array[i];
    }
  }
  return menor;
}
const numeros =[34,-5,23,15,0,-100,99];

const menorNUmero= findMenor(numeros);
console.log(`El numero menor es ${menorNUmero}`);