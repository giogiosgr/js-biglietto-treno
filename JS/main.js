'use strict';

//dichiarazione e inizializzazione variabili tramite input 
const KM = prompt("Inserisci il numero di chilometri da percorrere");
const age = prompt("Inserisci età del passeggero");

/* condizione di controllo con alert e ricarica finestra se uno o più input non sono validi 
  (tipo non numerico, cifre fuori range, nessun input) */
if (isNaN(KM) || isNaN(age) || KM <= 0 || age <= 0 || age > 199) {
    alert("ATTENZIONE, UNO O PIÙ INPUT NON SONO VALIDI!");
    location.reload();
}

//variabile con il prezzo base calcolato in base ai chilometri
const basePrice = KM * 0.21;

//dichiarazione della variabile per il fattore di sconto, inizializzata a 0
let discount = 0;

//condizioni per verificare se il fattore di sconto debba essere diverso da 0
if (age < 18) {
    discount = 0.2;
}
else if (age > 65) {
    discount = 0.4;
}

/* dichiarazione variabile inizializzata con formula di calcolo del prezzo finale,
scontato solo se il fattore di sconto è diverso da 0 */
let finalPrice = basePrice - (basePrice * discount);

//arrotondamento del prezzo finale a 2 cifre decimali, eliminando gli zeri senza valore
finalPrice = finalPrice.toFixed(2) * 1;

//dichiarazione variabile inizializzata con l'elemento HTML che conterrà il prezzo
const priceElement = document.getElementById('price');
priceElement.innerText = `Il prezzo del biglietto è di ${finalPrice}€`