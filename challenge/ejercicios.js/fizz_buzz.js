//fizz buzz de 100 numeros
//multiplos de 3 fizz, multiplos de 5 buzz 
//multiplos de 15 fizzbuzz

for(let i=1;i<=100;i++){
  // console.log(`numero ${i}`);
  if(i%15===0){
    console.log(`${i}fizzbuzz`);
    // continue;
  }else if(i%5===0){
    console.log(`${i}buzz`);
    // continue;
  }else if(i%3===0){
    console.log(`${i}fizz`);
   }
    // else{
  //   console.log(`${i}`)
  // }
}