
function findSecondLargest(array){
  
  let first,second;

  if(array.length <2){
    return "INvalid input";
  }

 //
 array.sort();
 console.log(array)
 for(let i = array.length -2;i>=0;i--){
  if(array[i] !== array[array.length-1]){
    return `The second largest element is "${array[i]}`
  }
 }
 return "NO hay segundo elemento mas largo"
}
  
  
console.log(findSecondLargest([5,10,80,30,60,50]))