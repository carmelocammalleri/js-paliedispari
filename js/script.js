//PALINDROMO

//1. 
const pali = document.getElementById('palindromo');
const oddEven = document.getElementById('paridispari')

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
       pali.innerHTML = `Complimenti, "${word}" è una parola palindroma!`
     } else{
       pali.innerHTML = `Ritenta, "${word}" NON è palindroma!`
     }
   }


    //PARI O DISPARI

  //1.
  const pariDisp = prompt('Scegli "pari" o "dispari"')

  // verifica
  if (pariDisp=== 'pari'){

  }else if (pariDisp === 'dispari'){

  } else{
    alert('scrivi "pari"" o "dispari"');
    location.pariDisp();
  }



  const number = parseFloat(prompt('Scegli un numero da 1 a 5'));

  const numRandom = randomizer (1, 5);

  //2.
  function randomizer (min, max){
    const random = Math.floor(Math.random () * (max - min + 1) + min)
    return random;
  }

  //3.
    const somma = numRandom + number;
    console.log(somma);

  //4.
  isEven (somma)
  function isEven(num){
    if(num % 2 === 0){
      console.log('è un numero pari')
      if(pariDisp === 'pari'){
        oddEven.innerHTML = `Complimenti "${somma}" è pari, hai vinto`
      } else {
        oddEven.innerHTML = `Ritenta "${somma}" è pari , non hai avuto abbastanza fortuna oggi!`
      } 

    } else{
      console.log('è un numero dispari')
      if (pariDisp === 'dispari'){
        oddEven.innerHTML = `Complimenti "${somma}" è dipari, hai vinto`
    } else {
          oddEven.innerHTML = `Ritenta "${somma}" è dipari, non hai avuto abbastanza fortuna oggi!`
        } 
    }
  }




