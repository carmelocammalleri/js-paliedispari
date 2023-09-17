//1. 
const pali = document.getElementById('palindromo');

//2.
const word = (prompt('scrivi una parola'));

reverseWord(word);

function reverseWord (str){
  let splitStr = str.split("");
  let reverseStr = splitStr.reverse();
  let joinRevStr = reverseStr.join("");
  console.log (joinRevStr)



}

