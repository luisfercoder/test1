//find palindromos 
 function isPalindrome(string){
  const array = string.split("").reverse().join("");
  if(array===string){
    console.log('ES palindromo ')
  }else{
    console.log('No es palindrome')
  }
   

 }
 isPalindrome("5445");