// -------- ESERCIZIO 1 --------

const personalInfoArr = ["Elisa","Azzolina",29,"Laurea"];
console.log(personalInfoArr);


// -------- ESERCIZIO 2 --------

// Rimozione dell'età e inserimento all'indice relativo all'età la data di nascita

// Prima possibilità:
/* personalInfoArr[2] = "27/07/1993";
console.log(personalInfoArr); */

// Seconda possibilità:
personalInfoArr.splice(2,1,"27/07/1993");
console.log(personalInfoArr); 

//Modifica del nome e del cognome rendendo tutta la stringa in maiuscolo.
personalInfoArr[0] = personalInfoArr[0].toUpperCase();
personalInfoArr[1] = personalInfoArr[1].toUpperCase();
console.log(personalInfoArr);


// -------- ESERCIZIO 3 --------

for(let n = 7; n > 0; n--) {
    let str = "#".repeat(n);
    console.log(str);
}