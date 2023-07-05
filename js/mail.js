/*
Mail:
- chiedi all’utente la sua email,
- controlla che sia nella lista di chi può accedere,
- stampa un messaggio appropriato sull’esito del controllo.
- Usiamo un input in html per inserire la mail da cercare.
*/

// Dichiaro variabili
const userEmail = prompt("Inserisci la tua e-mail");
const emailList = ["arp50196@gmail.com", "aet16899@tiscali.it", "sre16614@yahoo.com", "dgg65594@gmail.com", "qsf87592@tiscali.it", "cdj58668@gmail.com"];
let emailFind = false;

// Cerco nella lista se presente l'e-mail inserita dall'utente
for(let i = 0; i < emailList.length; i++) {
    
    if (emailList[i] === userEmail) {
        emailFind = true;
    }
}

// Stampo un messaggio se ho trovato o meno l'e-mail
if (emailFind == true) {
    console.log("La tua e-mail è stata trovata");
} else {
    console.log("Purtroppo la tua e-mail non è stata trovata");
}