let operation = prompt("Ciao, inserisci qui l'operazione matematica da effettuare.\nPuoi scegliere tra:\n- addizione\n- sottrazione\n- moltiplicazione\n- divisione"); 
let firstNum = prompt("Inserisci il primo numero:"); 
let secondNum = prompt("Inserisci il secondo numero:");

// ---------- CON IF/ELSE IF ----------

/* if (operation === "Addizione" || operation === "addizione" || operation === "ADDIZIONE") {
    alert(`La somma di ${firstNum} più ${secondNum} è ${parseInt(firstNum) + parseInt(secondNum)}`);
    console.log(parseInt(firstNum) + parseInt(secondNum));
} 
else if (operation === "Sottrazione" || operation === "sottrazione" || operation === "SOTTRAZIONE") {
    alert(`La differenza tra ${firstNum} e ${secondNum} è ${parseInt(firstNum) - parseInt(secondNum)}`);
    console.log(parseInt(firstNum) - parseInt(secondNum));
} 
else if (operation === "Moltiplicazione" || operation === "moltiplicazione" || operation === "MOLTIPLICAZIONE") {
    alert (`Il prodotto di ${firstNum} per ${secondNum} è ${parseInt(firstNum) * parseInt(secondNum)}`);
    console.log(parseInt(firstNum) * parseInt(secondNum));
} 
else if (operation === "Divisione" || operation === "divisione" || operation === "DIVISIONE") {
    //se il resto della divisione tra il primo numero e il secondo è 0 allora l'alert comunica "quoto", altrimenti "quoziente"
    firstNum % secondNum == 0 ? alert(`il quoto di ${firstNum} diviso ${secondNum} è ${parseInt(firstNum) / parseInt(secondNum)}`) : alert(`il quoziente di ${firstNum} diviso ${secondNum} è ${parseInt(firstNum) / parseInt(secondNum)}`); 
    console.log(parseInt(firstNum) / parseInt(secondNum));
} 
else {
    alert(`Hai sbagliato qualcosa! Inserisci un'operazione matematica valida!`);
    console.log("operazione non valida");
}
 */


// ---------- CON SWITCH ----------

switch (operation) {
    case "addizione":
        alert(`La somma di ${firstNum} più ${secondNum} è ${parseInt(firstNum) + parseInt(secondNum)}`);
        console.log(parseInt(firstNum) + parseInt(secondNum));
        break;
    case "sottrazione":
        alert(`La differenza tra ${firstNum} e ${secondNum} è ${parseInt(firstNum) - parseInt(secondNum)}`);
        console.log(parseInt(firstNum) - parseInt(secondNum));
        break;
    case "moltiplicazione":
        alert (`Il prodotto di ${firstNum} per ${secondNum} è ${parseInt(firstNum) * parseInt(secondNum)}`);
        console.log(parseInt(firstNum) * parseInt(secondNum));
        break;
    case "divisione":
        firstNum % secondNum == 0 ? alert(`il quoto di ${firstNum} diviso ${secondNum} è ${parseInt(firstNum) / parseInt(secondNum)}`) : alert(`il quoziente di ${firstNum} diviso ${secondNum} è ${parseInt(firstNum) / parseInt(secondNum)}`); 
        console.log(parseInt(firstNum) / parseInt(secondNum));
        break;
    default:
        alert(`Hai sbagliato qualcosa! Inserisci un'operazione matematica valida!`);
        console.log("operazione non valida");
}