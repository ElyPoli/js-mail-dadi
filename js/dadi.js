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

    // Genero i tre numeri
    for (let i = 1; i <= 3; i++) {

        // Chiedo i numeri all'utente
        const userNumberOne = parseInt(userNumberOneElement.value);
        const userNumberTwo = parseInt(userNumberTwoElement.value);
        const userNumberThree = parseInt(userNumberThreeElement.value);

        userNumberSum = userNumberOne + userNumberTwo + userNumberThree;

        // Genero i tre numeri del computer
        const pcNumber = Math.floor(Math.random() * (6 - 1)) + 1;
        pcNumberSum = pcNumberSum + pcNumber;
    }

    const winner = document.querySelector(".winner");

    // Confronto i due numeri per stabilire il vincitore
    if (userNumberSum > pcNumberSum) {
        document.querySelector(".winner").innerHTML = "Hai vinto";
    } else if (userNumberSum < pcNumberSum) {
        document.querySelector(".winner").innerHTML = "Ha vinto il computer";
    } else {
        document.querySelector(".winner").innerHTML = "Parità";
    }

    // Aggiungo le classi al risultato
    winner.classList.add("border", "rounded-4");
})

// Creo event listener - pulsante "Reset"
btnReset.addEventListener("click", function () {
    // Ricarico la pagina
    location.reload();
})