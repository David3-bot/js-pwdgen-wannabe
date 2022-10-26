const userFirstName = prompt("Inserisci il tuo nome");
const userSurname = prompt("Inserisci il tuo cognome");
const userColor = prompt("Qual è il tuo colore preferito?");


const h2NomeUtente = document.getElementById("psw");


h2NomeUtente.innerHTML = userFirstName + userSurname + userColor
