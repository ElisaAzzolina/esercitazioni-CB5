import { ce, qs, GET } from "./utils.js";

// Funzioni operazioni
function somma(num1, num2) {
    //const val1 = qs(".primoNum");
    //const val2 = qs(".secondoNUm");
    return parseInt(num1) + parseInt(num2);
}

function sottrazione(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function divisione(num1, num2){
    return parseInt(num1) / parseInt(num2);
}

function moltiplicazione(num1, num2){
    return parseInt(num1) * parseInt(num2);
}

export {somma, sottrazione, divisione, moltiplicazione}