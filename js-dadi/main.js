/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?


Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! :slightly_smiling_face*/

//assegnazione num random
let dadoPlayer1 = (Math.floor(Math.random() * 6) + 1);
console.log(" Player1 ha tirato :", dadoPlayer1)


let dadoPc = (Math.floor(Math.random() * 6) + 1);
console.log(" Pc ha tirato :", dadoPc)


if (dadoPc > dadoPlayer1) {
    console.log(`${dadoPc} è il numero maggiore , vince  Pc`)

} else if (dadoPc < dadoPlayer1) {
    console.log(`${dadoPlayer1} è il numero maggiore , vince player1`)

} else {
    console.log('Parità')
}