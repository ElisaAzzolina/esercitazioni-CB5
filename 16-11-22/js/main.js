import { ce, qs, GET, POST, DELETE, uuidv4 } from './utils.js';

const url = "http://localhost:3000/pokemon";

let id;

const form = document.forms.pokemon;
const element = form.elements;
const cardContainer = qs(".card_container");

const p = qs(".pkm_list");

const createCard = (url, id, data) => {
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

    const btnEl = ce("button");
    btnEl.className = "pkm_btn";
    btnEl.textContent = "RIMUOVI";

    nameEl.textContent = `Nome: ${data.name}`;
    typeEl.textContent = `Tipo: ${data.type}`;
    idEl.textContent = `Id: ${data.id}`;

    
    cardContainer.append(cardEl);
    cardEl.append(imgPlaceholderEl, nameEl, typeEl, idEl, btnEl);

    btnEl.addEventListener("click", () => {
        DELETE(url, id)
            .then(() => location.reload());
    })
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        id: id+1,
        name: element.pokemon_name.value,
        type: element.pokemon_type.value
    }
    
        POST(url, data)
		.then(() => location.reload())
        
})

window.onload = GET(url).then((res) => {
    id = res[res.length-1].id
    res.map((pkm) => {
        createCard(url, pkm.id, pkm)
})
}
);