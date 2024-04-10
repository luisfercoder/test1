
//Programa 1
function counter(texto){
  if(typeof texto==='string'){
    console.log(texto.length);
  }else{
    console.log('El valor ingresado no es un string');
  }
  
}
 counter('Hola mundo');

// //Programa 2
// function textCutter(texto2,characters){
//   console.log(texto2.slice(0,characters));
// }
// textCutter('Hola Mundo',4)
// //Programa 3
// function createArray(text3){
//   let array=(text3.split(" "));
//   console.log(array);

//  }
// createArray('Hola que tal ');

//Programa 4
// function finalText(texto4,times){
//   console.log(texto4.repeat(times));
// }
// finalText('Hola Mundo ',3)