// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiediamo all'utente di scegliere tra pari o dispari
const userChoise = prompt('Scegli tra pari o dispari')
console.log('La tua scelta: ' + userChoise);

// chiediamo all'utente un numero da 1 a 5 e lo stampo
const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log('Il tuo numero: ' + userNumber);


// funzione che genera un numero random da 1 a 5
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// invoco funzione generateRandomNumber e stampo il numero
const pcNumber =  getRndInteger(1, 5);
console.log('Il numero del computer: ' + pcNumber);

// funzione che verifica se la somma di userNumber e pcNumber è pari o dispari
function evenOrOdd (number){
    let pariOdispari;
    if((userNumber + pcNumber) % 2 === 0){
        pariOdispari = 'pari';
    }
    else{
        pariOdispari = 'dispari';
    }
 return pariOdispari;
}

// invoco la funzione
const result = evenOrOdd(userNumber, pcNumber);
// stampo esito
console.log('Esito: ' + result);

// confronto la userChoise con result e
// comunico al giocatore se ha vinto o perso
if(userChoise === result){
    alert('Hai vinto!')
}
else{
    alert('Hai perso :(')
}