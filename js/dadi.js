/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

BONUS: far inserire 3 numeri all’utente, generare per il pc 3 numeri, e dopo aver calcolato la somma dei numeri dell’utente e dei numeri del pc, capire chi ha vinto in base alla somma maggiore.
*/

// Dichiaro variabili
let pcNumberSum = 0;
let userNumberSum = 0;

// Genero i tre numeri
for (let i = 1; i <= 3; i++) {

    // Chiedo i numeri all'utente
    const userNumber = parseInt(prompt("Inserisci il " + i + " numero da 1 a 6"));
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 6) {
        alert("Inserisci un numero corretto");
        i--;
    } else {
        userNumberSum = userNumberSum + userNumber;
    }

    // Genero i tre numeri del computer
    const pcNumber = Math.floor(Math.random() * (6 - 1)) + 1;
    pcNumberSum = pcNumberSum + pcNumber;
}

console.log("numero utente " + userNumberSum);
console.log("numero pc " + pcNumberSum);


// Confronto i due numeri per stabilire il vincitore
if (userNumberSum > pcNumberSum) {
    console.log("Ha vinto l'utente");
} else if (userNumberSum < pcNumberSum) {
    console.log("Ha vinto il computer");
} else {
    console.log("Parità");
}