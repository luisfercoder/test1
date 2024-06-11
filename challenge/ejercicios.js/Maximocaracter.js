//primer solucion
const maxChar = (str) =>{
  let obj ={};

  for(let char of str)
    (!obj[char]) ? obj[char]=1 : obj[char]++;
  console.log(obj);
}
// maxChar('heLLLoo$$9p');

function getMaxOccurringChar(str){
  //creacionde map para guardar la frecuencia de cada carcter
  let mp = new Map();
   //Contador
   let cnt=0;
   let ans;

   for(let i=0; i<str.lenght ; i++){
    mp.set(str[i], mp.get(str[i] || 0) +1 );

    if(cnt <Map.get(str[i])){
      asn= str[i];
      cnt = mp.get(str[i]);
    }
   }
   return ans;
}
let str='sample string';
console.log(getMaxOccurringChar(str));