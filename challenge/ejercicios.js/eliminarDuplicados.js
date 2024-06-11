
function removeDuplicates(arr){
  
  //utilizacion de set que ni permite almacenar valores duplicados , entonces la creacion de  un nuevo array dado otro sin duplicados
  return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,4,4,5]));