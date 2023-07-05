/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

BONUS: far inserire 3 numeri all’utente, generare per il pc 3 numeri, e dopo aver calcolato la somma dei numeri dell’utente e dei numeri del pc, capire chi ha vinto in base alla somma maggiore.
*/

// Dichiaro variabili
const userNumber = Math.floor(Math.random() * (6 - 1)) + 1;
const pcNumber = Math.floor(Math.random() * (6 - 1)) + 1;

console.log("numero utente " + userNumber);
console.log("numero pc " + pcNumber);

// Confronto i due numeri per stabilire il vincitore
if (userNumber > pcNumber) {
    console.log("Ha vinto l'utente");
} else if (userNumber < pcNumber) {
    console.log("Ha vinto il computer");
} else {
    console.log("Parità");
}