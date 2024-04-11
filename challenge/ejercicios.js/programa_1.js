
//Programa 1
// function counter(texto){
//   if(typeof texto==='string'){
//     console.log(texto.length);
//   }else{
//     console.log('El valor ingresado no es un string');
//   }
  
// }
//  counter('Hola mundo');
//usando arrow function 
// const  contarCaracter= (cadena="")=>
//   (!cadena )
//   ?console.warn("No ingresaste una cadena")
//   :console.info(`La cadena ${cadena} , tiene ${cadena.length} caracteres`)

//   contarCaracter(true);


// //Programa 2
// function textCutter(texto2,characters){
//   console.log(texto2.slice(0,characters));
// }
// textCutter('Hola Mundo',4)


// //con arrow functions
// const textCut = (cadena="",longitud)=>
//   (!cadena)
//    ?console.warn('No ingresaste una cadena')
//    :(longitud==undefined)
//    ?console.warn('No ingresaste una longitud')
//    :console.info(cadena.slice(0,longitud));

//   textCut("Hola mundo",5)

// //Programa 3
// function createArray(text3){
//   let array=(text3.split(" "));
//   console.log(array);

//  }
// createArray('Hola que tal ');


//con arrow funtion 
// const array =(text="",separador=undefined)=>
//  (!text)
//  ?console.warn('No es una cadena valida')
//  :(separador==undefined)
//   ?console.warn('No es una separador valido')
//   :console.info(text.split(" "));

// array('Hola mundo como estas',' ')

//Programa 4
// function finalText(texto4,times){
//   console.log(texto4.repeat(times));
// }
// finalText('Hola Mundo ',3)
 
//con arrow
// const repeat =(phrase="",repeatTime)=>
// (!phrase)
//  ?console.warn('No es una frase valida')
//  :(!isNaN(repeatTime))
//    ?console.info(phrase.repeat(repeatTime))
//    :console.warn('No es un numero  valido');
  

// repeat('Hola como estas',0)

