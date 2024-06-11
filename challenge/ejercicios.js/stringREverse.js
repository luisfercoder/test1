
const revString = (str)=>{
  const array = str.split("");
  array.reverse();
  str=array.join("");
  console.log(str);
}
revString("challenge");