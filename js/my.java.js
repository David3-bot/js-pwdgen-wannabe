const userFirstName = prompt("Inserisci il tuo nome");
const userSurname = prompt("Inserisci il tuo cognome");
const userColor = prompt("Qual è il tuo colore preferito?");


const h1password = document.getElementById("psw");


h1password.innerHTML = userFirstName + userSurname + userColor + 21
