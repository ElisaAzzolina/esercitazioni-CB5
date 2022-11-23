import {somma, sottrazione, divisione, moltiplicazione} from "./calcolatrice.js";
import http from "http";
import url from "url";
import fs from "fs";

const server = http.createServer((req, res) => {
    const my_url = url.parse(req.url, true).pathname;
    const params = url.parse(req.url, true).query;
    const {param1, param2} = params;
    switch(my_url) {
        case "/home":
            res.write("home");
            break;
        case "/calcolatrice":
            const dataCalc = fs.readFileSync('./html/calcolatrice.html');
            res.write(dataCalc.toString());
            break;
        case "/somma":
            const dataSomma = fs.readFileSync('./html/somma.html');
            res.write(dataSomma.toString());
            res.write(`<h2>${somma(param1, param2)}</h2>`);
            break;
        case "/sottrazione":
            const dataSott = fs.readFileSync('./html/sottrazione.html');
            res.write(dataSott.toString());
            res.write(`<h2>${sottrazione(param1, param2)}</h2>`);
            break;
        case "/moltiplicazione":
            const dataMolt = fs.readFileSync('./html/moltiplicazione.html');
            res.write(dataMolt.toString());
            res.write(`<h2>${moltiplicazione(param1, param2)}</h2>`);
            break;
        case "/divisione":
            const dataDiv = fs.readFileSync('./html/divisione.html');
            res.write(dataDiv.toString());
            res.write(`<h2>${divisione(param1, param2)}</h2>`);
            break;
        case "/style.css":
            const style = fs.readFileSync('./style.css');
            res.write(style.toString());
            break;
        default: res.write("<h1>Ahi ahi ahi</h1><p>La pagina non esiste, torna alla <a href='/home'>Buenohome<a></p>");
    }
    res.end();
});

server.listen(3000);