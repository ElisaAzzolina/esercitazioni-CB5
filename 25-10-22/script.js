let operation = prompt("Ciao, inserisci qui l'operazione matematica da effettuare.\nPuoi scegliere tra:\n- addizione\n- sottrazione\n- moltiplicazione\n- divisione");
let firstNum = prompt("Inserisci il primo numero:"); 
let secondNum = prompt("Inserisci il secondo numero:");

// ---------- CON IF/ELSE IF ----------

if (operation.toLowerCase() === "addizione" && !isNaN(firstNum) && !isNaN(secondNum)) {
     console.log(parseInt(firstNum) + parseInt(secondNum));   
     alert(`La somma di ${firstNum} più ${secondNum} è ${parseInt(firstNum) + parseInt(secondNum)}`);

}
else if (operation.toLowerCase() === "sottrazione" && !isNaN(firstNum) && !isNaN(secondNum)) {
    console.log(parseInt(firstNum) - parseInt(secondNum));    
    alert(`La differenza tra ${firstNum} e ${secondNum} è ${parseInt(firstNum) - parseInt(secondNum)}`);

} 
else if (operation.toLowerCase() === "moltiplicazione" && !isNaN(firstNum) && !isNaN(secondNum)) {
    console.log(parseInt(firstNum) * parseInt(secondNum));    
    alert (`Il prodotto di ${firstNum} per ${secondNum} è ${parseInt(firstNum) * parseInt(secondNum)}`);

} 
else if (operation.toLowerCase() === "divisione" && !isNaN(firstNum) && !isNaN(secondNum)) {
    //se il resto della divisione tra il primo numero e il secondo è 0 allora l'alert comunica "quoto", altrimenti "quoziente"
    console.log(parseInt(firstNum) / parseInt(secondNum));    
    firstNum % secondNum == 0 ? alert(`il quoto di ${firstNum} diviso ${secondNum} è ${parseInt(firstNum) / parseInt(secondNum)}`) : alert(`il quoziente di ${firstNum} diviso ${secondNum} è ${parseInt(firstNum) / parseInt(secondNum)}`); 

} 
else {
    console.log("operazione non valida");    
    alert(`Hai sbagliato qualcosa! Inserisci un'operazione matematica valida!`);

}



// ---------- CON SWITCH ----------

/* switch (operation.toLowerCase()) {
    case "addizione":
        console.log(parseInt(firstNum) + parseInt(secondNum));        
        alert(`La somma di ${firstNum} più ${secondNum} è ${parseInt(firstNum) + parseInt(secondNum)}`);
        break;
    case "sottrazione":
        console.log(parseInt(firstNum) - parseInt(secondNum));        
        alert(`La differenza tra ${firstNum} e ${secondNum} è ${parseInt(firstNum) - parseInt(secondNum)}`);
        break;
    case "moltiplicazione":
        console.log(parseInt(firstNum) * parseInt(secondNum));        
        alert (`Il prodotto di ${firstNum} per ${secondNum} è ${parseInt(firstNum) * parseInt(secondNum)}`);

        break;
    case "divisione":
        console.log(parseInt(firstNum) / parseInt(secondNum));        
        firstNum % secondNum == 0 ? alert(`il quoto di ${firstNum} diviso ${secondNum} è ${parseInt(firstNum) / parseInt(secondNum)}`) : alert(`il quoziente di ${firstNum} diviso ${secondNum} è ${parseInt(firstNum) / parseInt(secondNum)}`); 
        break;
    default:
        console.log("operazione non valida");        
        alert(`Hai sbagliato qualcosa! Inserisci un'operazione matematica valida!`);

} */