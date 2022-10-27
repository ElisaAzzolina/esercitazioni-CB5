// ---------- ESERCIZIO 1 ----------

/* function calculator(n1,n2,operator) {
    let num1 = parseInt(n1);
    let num2 = parseInt(n2);
    if (operator === "addizione" && !isNaN(num1) && !isNaN(num2)) {
        console.log(num1+num2);   
        return alert(`La somma di ${num1} più ${num2} è ${num1+num2}`);
   }
   else if (operator === "sottrazione" && !isNaN(num1) && !isNaN(num2)) {
    console.log(num1-num2);   
    return alert(`La differenza tra ${num1} e ${num2} è ${num1-num2}`);
    }
    else if (operator === "moltiplicazione" && !isNaN(num1) && !isNaN(num2)) {
        console.log(num1*num2);   
        return alert(`Il prodotto di ${num1} per ${num2} è ${num1*num2}`);
    }
    else if (operator === "divisione" && !isNaN(num1) && !isNaN(num2)) {
        console.log(num1/num2);
        if (num1 % num2 == 0) {
            return alert(`il quoto di ${num1} diviso ${num2} è ${num1/num2}`);
        } return alert(`Il quoziente di ${num1} diviso ${num2} è ${num1/num2}`);
    }
    else {
        console.log("operazione non valida");    
        return alert(`Hai sbagliato qualcosa! Inserisci un'operazione matematica valida!`);
    }     
}

let operation = prompt("Ciao, inserisci qui l'operazione matematica da effettuare.\nPuoi scegliere tra:\n- addizione\n- sottrazione\n- moltiplicazione\n- divisione").toLowerCase();
// let firstNum = prompt("Inserisci il primo numero:"); 
// let secondNum = prompt("Inserisci il secondo numero:");

calculator(firstNum,secondNum,operation); */


// ---------- ESERCIZIO 2 ----------

const character = {
    name: "Harry",
    surname: "Potter",
    hair: "brown",
    eyes: "green like his mother",
    school: "Hogwarts School of Witchcraft and Wizardry",
    bestFriends: ["Ron Weasley", "Hermione Granger", "Albus Silente"],
    spells: {
        accio: function (anyObject) {
            return alert(`Accio ${anyObject}!`);
    },
    }
};


// ---------- ESERCIZIO 3 ----------
 
function superCalculator(operator,numbers) {
    if (operator === "addizione") {
        let sum = 0;
        for(const n of numbers) {
            sum += Number(n);
        }
    console.log(sum);
    return alert(`la somma tra i numeri dati è ${sum}`);
    }
    else if (operator === "sottrazione") {
        let sub = 0; 
        for(const n of numbers) {
            sub -= Number(n);
        }
    console.log(sub);
    return alert(`La sottrazione tra i numeri dati è ${sub}`);
    }
    else if (operator === "moltiplicazione") {
        let mult = 1;
        for(const n of numbers) {
            mult *= Number(n);
        }
    console.log(mult);
    return alert(`Il prodotto tra i numeri dati è ${mult}`);
    }
    else if (operator === "divisione") {
        numbers.slice(0,1); 
        let div = numbers[0]/numbers[1];  
        console.log(div);
        return alert(`Il quoto o quoziente tra i numeri dati è ${div}`);
    }
}

let operation = prompt("Ciao, inserisci qui l'operazione matematica con più numeri da effettuare.\nPuoi scegliere tra:\n- addizione\n- sottrazione\n- moltiplicazione\n- divisione").toLowerCase();

let insNum = prompt("Inserisci i numeri su cui vuoi operare (dividisi tra loro da uno spazio)").split(" ");
console.log(insNum);

superCalculator(operation,insNum);







