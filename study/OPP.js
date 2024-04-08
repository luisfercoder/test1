// class comida {
//   constructor(id, nombre, color){
//     this.id = id;
//     this.nombre = nombre;
//     this.color = color;
//   }
//   nombrar(){
//     return`the ${this.nombre} is color ${this.color}`;

//   }
// }
// //crear una herencia 
// class galleta extends comida{//se hereda a una nueva
//   constructor(id, nombre,color,sabor){
//    super(id,nombre,color);//trae las ya declaradas
//    this.sabor =sabor;
//   }
//   nombrarGalleta(){
//     return `Galletas ${this.nombre} sabor ${this.sabor}`;
//   }
// }
// const manzana = new comida(1,'manzana','rojo');
// const pera =new comida(2,'pera','verde');
// const oreo= new galleta(3,'oreo','negra','chocolate');
// const marias = new galleta(4,'marias','cafe','vainilla');
// console.log(manzana.nombrar());
// console.log(pera.nombrar());
// console.log(oreo.nombrarGalleta());
// console.log(marias.nombrarGalleta());
// console.log(marias.nombrar());
// mi example
class suma{
  constructor(num1,num2,num3){
    this.num1=num1;
    this.num2=num2;
    this.num3=num3;
  }
  sumar(){
    return this.num1+this.num2+this.num3;
  }

}
class multiplicacion extends suma{
  constructor(num1,num2,num3,num4){
    super(num1,num2,num3);
    this.num4=num4;
  }
  multi(){
    let operation = this.num1*this.num2*this.num3*this.num4;
    return `The multiplication is ${operation}`;
  }
}
const suma_total= new suma(1,2,3);
console.log(suma_total.sumar());
const multiplication_final = new multiplicacion(1,2,3,4);
console.log(multiplication_final.multi());