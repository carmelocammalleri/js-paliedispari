//PALINDROMO

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

    //3. conditions  
    if (str === joinRevStr){
      pali.innerHTML = `Complimenti, hai trovato una parola palindroma!`
    } else{
      pali.innerHTML = `Ritenta, la tua parola NON è palindroma!`
    }
  }


    //PARI O DISPARI

  //1.
  const number = prompt('Scegli un numero da uno a 5')



