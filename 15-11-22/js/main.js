import { ce, qs, GET, POST, uuidv4 } from './utils.js';

const url = "http://localhost:3000/pokemon";

const form = document.forms.pokemon;
const element = form.elements;
const cardContainer = qs(".card_container");

const p = qs(".pkm_list");

const createCard = (data) => {
    const cardEl = ce("div");
    cardEl.classList.add("pkm_card");
    cardEl.classList.add(`bg-${data.type}`);

    const imgPlaceholderEl = ce("div");
    imgPlaceholderEl.className = "pkm_placeholderimg";

    const nameEl = ce("h3");
    nameEl.className = "pkm_name";

    const typeEl = ce("p");
    typeEl.className = "pkm_type";

    const idEl = ce("p");
    idEl.className = "pkm_id";

    nameEl.textContent = `Nome: ${data.name}`;
    typeEl.textContent = `Tipo: ${data.type}`;
    idEl.textContent = `Id: ${data.id}`;

    cardContainer.append(cardEl);
    cardEl.append(imgPlaceholderEl, nameEl, typeEl, idEl);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        name: element.pokemon_name.value,
        type: element.pokemon_type.value,
        id: uuidv4()
    }

    POST(url, data)
        .then((res) => res.json())
        .then((res) => {
            console.log("evviva", res);
        })
        .catch((err) => {
            console.err("errore", err);
        });

})

window.onload = GET(url).then(res => res.map(pokemon => createCard(pokemon)));