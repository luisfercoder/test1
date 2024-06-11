function findMinMax(array){
  let minValue = Math.min(...array);
  let maxValue = Math.max(...array);

  console.log(`Minumun elemnt is ${minValue}`);
  console.log(`Maximun elemnt is ${maxValue}`);

}
findMinMax([50,60,70,80,90])