/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

BONUS: far inserire 3 numeri all’utente, generare per il pc 3 numeri, e dopo aver calcolato la somma dei numeri dell’utente e dei numeri del pc, capire chi ha vinto in base alla somma maggiore.
*/

// Dichiaro variabili
const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");
const userNumberOneElement = document.getElementById("user-number-one");
const userNumberTwoElement = document.getElementById("user-number-two");
const userNumberThreeElement = document.getElementById("user-number-three");
let pcNumberSum = 0;
let userNumberSum = 0;

// Creo event listener - pulsante "Visualizza il vincitore"
btnStart.addEventListener("click", function () {

    // Memorizzo i numeri dell'utente
    const userNumberOne = parseInt(userNumberOneElement.value);
    const userNumberTwo = parseInt(userNumberTwoElement.value);
    const userNumberThree = parseInt(userNumberThreeElement.value);

    // Controllo i numeri inseriti dall'utente
    if ((userNumberOne < 0) || (userNumberOne > 6) || (isNaN(userNumberOne)) || (userNumberTwo < 0) || (userNumberTwo > 6) || (isNaN(userNumberTwo)) || (userNumberThree < 0) || (userNumberThree > 6) || (isNaN(userNumberThree))) {
        alert("Si è verificato un errore. Rinserisci i numeri correttamente");
        location.reload();
    }

    userNumberSum = userNumberOne + userNumberTwo + userNumberThree;

    // Genero i tre numeri del computer
    for (let i = 1; i <= 3; i++) {
        const pcNumber = Math.floor(Math.random() * (6 - 1)) + 1;
        pcNumberSum = pcNumberSum + pcNumber;
    }

    const winner = document.querySelector(".winner");

    // Confronto i due numeri per stabilire il vincitore
    if (userNumberSum > pcNumberSum) {
        document.querySelector(".winner").innerHTML = "Hai vinto! Hai totalizzato " + userNumberSum + " mentre il computer ha totalizzato " + pcNumberSum;
    } else if (userNumberSum < pcNumberSum) {
        document.querySelector(".winner").innerHTML = "Hai perso. Hai totalizzato " + userNumberSum + " mentre il computer ha totalizzato " + pcNumberSum;
    } else {
        document.querySelector(".winner").innerHTML = "Parità. Hai totalizzato " + userNumberSum + " e anche il computer ha totalizzato " + pcNumberSum;
    }

    // Aggiungo le classi al risultato
    winner.classList.add("border", "rounded-4");

    // Messaggio di ricaricare la pagina
    document.querySelector(".play-again").innerHTML = "Clicca sul pulsante Reset per giocare di nuovo";
})

// Creo event listener - pulsante "Reset"
btnReset.addEventListener("click", function () {
    // Ricarico la pagina
    location.reload();
})