document.getElementById('prueba').innerHTML='Prueba de Renderizado'
let lista = document.getElementById('listas');


  axios.get('https://jsonplaceholder.typicode.com/users')
  .then((response)=>{
   datos= response.data;
   showData(datos);
   console.log(datos)
  })
  .catch((err)=>{
   console.log(err)
  }).finally(()=>{
    console.log('Desde finally')
  });

function showData(datos){
datos.forEach(object => {
  const{name, phone}= object;
  console.log(object)
  const listOfData =document.createElement('li');
  listOfData.innerHTML = `<li>${name}</li>`;
  
  lista.appendChild(listOfData)
});

}


