//Ejercicio para reconocer numeros pares e impares
function parImpar(inicio, final){
  for(let i=inicio;i<=final;i++){
    if((i % 2)==0){
      console.log(`Numero :${i} es par`);
    }else{
      console.log(`${i} es impar`);
    };
  }

}
parImpar(0,5);

//USO de break;
for(let i=0;i<=10;i++){
  if(i===5){
     console.log(`Numero ${i} encontrado`);
     break;
  }
  console.log(`Numero ${i}`);
}
//uso de continue;
for(let i=0;i<=10;i++){
  if(i===5){
     console.log(`Numero ${i} encontrado`);
     continue;
  }
  console.log(`Numero ${i}`);
}