//Dado un array de numeros enteros , devuelve la suma mas grande entre dos numeros adyacentes

// const array =[2,4,1,5,6,3]
// function maxAdjacentSum(array){
//   let maxSum=-Infinity
//   const {length}=array;
//   for(let i=0;i< length-1;i++){
//     const sum = array[i]+array[i+1];
//     if(sum > maxSum){
//       maxSum=sum;
//     }
//   }
//   return maxSum;
// }
// console.log(maxAdjacentSum());

const array =[2,4,1,5,6,3]
console.log(array.length);
function maxAdjacentSum(array){
  for(let i=array[1];i<array.length;i++){
    console.log('hola');
  }
}
maxAdjacentSum();