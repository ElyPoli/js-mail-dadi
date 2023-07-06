/*
Mail:
- chiedi all’utente la sua email,
- controlla che sia nella lista di chi può accedere,
- stampa un messaggio appropriato sull’esito del controllo.
- Usiamo un input in html per inserire la mail da cercare.
*/

// Dichiaro variabili
const emailList = ["arp50196@gmail.com", "aet16899@tiscali.it", "sre16614@yahoo.com", "dgg65594@gmail.com", "qsf87592@tiscali.it", "cdj58668@gmail.com"];
const btnFind = document.querySelector(".btn-find");
const btnReset = document.querySelector(".btn-reset");
const userEmailElement = document.querySelector(".user-email");
let emailFind = false;

// Creo event listener - pulsante "Cerca"
btnFind.addEventListener("click", function () {
    // Cerco nella lista se presente l'e-mail inserita dall'utente
    for (let i = 0; i < emailList.length; i++) {

        const userEmail = userEmailElement.value;

        if (emailList[i] === userEmail) {
            emailFind = true;
            // Se trovo la mail esco dal for
            break;
        }
    }

    const findResult = document.querySelector(".find-result");

    // Stampo un messaggio se ho trovato o meno l'e-mail
    if (emailFind == true) {
        document.querySelector(".find-result").innerHTML = "La tua e-mail è stata trovata";
        findResult.classList.add("text-success");
    } else {
        document.querySelector(".find-result").innerHTML = "Purtroppo la tua e-mail non è stata trovata";
        findResult.classList.add("text-danger");
    }

    // Aggiungo le classi comuni al risultato
    findResult.classList.add("border", "rounded-4", "bg-white");
})

// Creo event listener - pulsante "Reset"
btnReset.addEventListener("click", function () {
    // Ricarico la pagina
    location.reload();
})