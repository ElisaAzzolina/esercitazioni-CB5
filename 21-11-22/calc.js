"use strict"

const args = process.argv;
const arg = args.slice(2);
const argomenti = arg.slice(1);

/*----- PRIMO METODO -----*/

/* const operatore = arg[0];
const num1 = parseFloat(arg[1]);
const num2 = parseFloat(arg[2]);

if(operatore === "somma" && !isNaN(num1) && !isNaN(num2)) {
    console.log(`Risultato della ${operatore}: ${num1 + num2} `);
} else if(operatore === "sottrazione" && !isNaN(num1) && !isNaN(num2)) {
    console.log(`Risultato della ${operatore}: ${num1 - num2} `); 
} else if(operatore === "moltiplicazione" && !isNaN(num1) && !isNaN(num2)) {
    console.log(`Risultato della ${operatore}: ${num1 * num2} `);
} else if(operatore === "divisione" && !isNaN(num1) && !isNaN(num2)) {
    if(num2 == 0) {
        console.log("Errore nell'operazione")
    } else {
        console.log(`Risultato della ${operatore}: ${num1 / num2} `);
    }
} else console.log("Errore: operazione non valida"); */


/*----- USO DEL PARAMETRO REST -----*/
function calcolatrice(operazione, ...nums) {
    let res = 0;
    switch (operazione) {
        case "somma": for (let i in nums) {
            res += parseInt(nums[i]);
        } console.log(`Risultato della ${operazione}: ${res} `);
        break;
        case "sottrazione": res = nums[0]; 
            for(let i = 1; i < nums.length; i++) {
            res -= nums[i];
        } console.log(`Risultato della ${operazione}: ${res} `);
        break;
        case "moltiplicazione": res = 1; 
            for(let i = 0; i < nums.length; i++) {
            res *= nums[i];
        } console.log(`Risultato della ${operazione}: ${res} `);
        break;
        case "divisione": 
        if(nums[1] == 0) {
            console.log("Errore: operazione non valida");
            break;
        } res = nums[0]/nums[1];
        console.log(`Risultato della ${operazione}: ${res} `);
        break;
        default: console.log("Errore, operazione non valida");
    }
    return res;
}

calcolatrice(arg[0], ...argomenti);


