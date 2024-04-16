//Programa una funcion que invierta las palabras de una cadena de texto 

//Forma 1
// let original="HOla como estas"
// const reversed=original.split("").reverse().join("");
// console.log(reversed);

//Forma 2
// const original=(text)=>{
//   if(typeof text ==='string'){
//     console.log( text.split("").reverse().join(""));

//   }else{
//     console.warn('This is not an string');
//   }

// };

// original('Hola como estas');

// //funcion reverse
// var text="hola como estas";
// console.log(text.split("").reverse().join(""));


// function setItem(cards, position, replacementCard) {
//   cards.push(cards);
//   cards[position]=replacementCard;
//  return console.log(cards);

// }
// setItem([1,2,3,4,5],2,7);

 function setItem(cards, position, replacementCard) {
  const stack=[];
  stack.push(cards);
  cards[position]=replacementCard;
 return console.log(stack);
 
}
setItem([1,2,3,4,5],2,7);
