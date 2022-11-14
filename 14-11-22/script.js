 import {qs, GET} from "./utils.js";

/*----- DOM el -----*/
const titleEL = qs(".card_title");
const idEl = qs(".card_id");
const bodyEl = qs(".card_body");
const btnPrevEl = qs(".btn_prev");
const btnNextEl = qs(".btn_next");

/*----- GLOBAL VARIABLES -----*/
const url ="https://jsonplaceholder.typicode.com/posts";
let index = 1;

/*----- BUTTONS EVENT LISTENERS -----*/
btnPrevEl.addEventListener('click', (e) => {
    let inst = e.target.textContent;
    getPosts(inst);
});

btnNextEl.addEventListener('click', (e) => {
    let inst = e.target.textContent;
    getPosts(inst);
});

/*----- GET POSTS AND CREATE CARD -----*/

const getPosts = (inst) => {

    if (!inst) {
        inst = 1;
    } else {
        inst = inst.toLowerCase();
    };

    switch (inst) {
        case 'prev':
            index = index - 1;
            break;
        case 'next':
            index = index + 1;
            break;
        default:
            index = inst;
    }

    GET(`${url}/${index}`)
        .then(res => {
            titleEL.textContent = res?.title;
            idEl.textContent = `#${res?.id}`;
            bodyEl.textContent = res?.body;

            if (index <= 1) {
                btnPrevEl.disabled = true;
            } else {
                btnPrevEl.disabled = false;
            }

            if (index >= 10) {
                btnNextEl.disabled = true;
            } else {
                btnNextEl.disabled = false;
            }

        });
}

window.onload = getPosts();