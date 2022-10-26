const userFirstName = prompt("Inserisci il tuo nome");
const userSurname = prompt("Inserisci il tuo cognome");
const userColor = prompt("Qual è il tuo colore preferito?");


const h1NomeUtente = document.getElementById("psw");


h1NomeUtente.innerHTML = userFirstName + userSurname + userColor
