/*Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! :slightly_smiling_face*/

const list = [
    'pippo@gmail.it',
    'pluto@gmail.it',
    'minnie@gmail.it',
    'paperino@gmail.it',
    'topolino@gmail.it',
    'tom@gmail.it',
    'gerry@gmail.it',
    'paperina@gmail.it',
    'paperone@gmail.it',
    'paperinik@gmail.it',


]

let userMail = prompt(" Inserisci la tua e-mail: ", 'pippo@gmail.it');


let isMailInList = true;  //imposto una variabile booleana 

//ciclo for 
for (let i = 0; i <= list.lenght; i++) {

    if (userMail == list[i]) {
        isMailInList = false
    }
}

if (isMailInList) {
    console.log("l' email utilizzata  è presente nella lista invitati")
} else {
    console.log("l' email utilizzata non è presente nella lista invitati")

}