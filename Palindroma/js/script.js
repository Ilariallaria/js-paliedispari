// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// chiedo all'utente un nome e lo salvo in una variabile
const userWord = prompt('inserisci un nome proprio di persona') ;

// invoco la funzione sul nome inserito dall'utente
let palindromeOrNot = checkPalindrome (userWord);

// funzione che verifica se il nome è palindromo
function checkPalindrome(userWord){

    //stringa dove concatenare le lettere
    let reverse = '';
    // scorro il nome al contrario
    for(let i = userWord.length -1; i>= 0; i--){

        // di volta in volta aggiungo le lettere alla stringa 
        reverse += userWord[i];
    }
    
    // variabile verifica settata false
    let check = false;

    // condizione per cui la variabile diventa true
    if(userWord === reverse){
        check = true;
    }

    // questo è l'output della funzione 
    return check;
}

// stampo il risultato
console.log(palindromeOrNot);

