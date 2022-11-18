import { ce, qs, GET, POST, DELETE, PATCH} from './utils.js';

const url = "http://localhost:3000/pokemon";

let id;

// POSt form
const form = document.forms.pokemon;
const element = form.elements;
const cardContainer = qs(".card_container");

//PATCH form
const patchFP = document.forms.pkmPatch;
const elementsFP = patchFP.elements;

const nameEl = ce("h3");
nameEl.className = "pkm_name";
const typeEl = ce("p");
typeEl.className = "pkm_type";
    const idEl = ce("p");
    idEl.className = "pkm_id";

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

    const btnDel = ce("button");
    btnDel.className = "pkm_btn";
    btnDel.textContent = "RIMUOVI";

    const btnFP = ce("button");
    btnFP.className = "pkm_btn_fp";
    btnFP.textContent = "MODIFICA";

    nameEl.textContent = data.name;
    typeEl.textContent = data.type;
    idEl.textContent = data.id;

    //BTN rimozione pokemon dalla card
    btnDel.addEventListener("click", () => {
        DELETE(url, id)
            .then(() => location.reload());
    })

    //BTN modifica pokemon nella card
    btnFP.addEventListener("click", () => {
        const patchFP = document.forms.pkmPatch;
        const elementsFP = patchFP.elements;
        console.log(elementsFP);

        elementsFP.patch_id.value = id;
        elementsFP.patch_name.value = nameEl.textContent;
        elementsFP.patch_type.value = typeEl.textContent;
    })

    btnFP.addEventListener("click", () => {
        qs("#edit").scrollIntoView({
          behavior: "smooth",
        });
      });

    cardContainer.append(cardEl);
    cardEl.append(imgPlaceholderEl, nameEl, typeEl, idEl, btnDel, btnFP);

}

//Listener form
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

//Listener patch
patchFP.addEventListener("submit", (event) => {
    event.preventDefault();

    const id = elementsFP.patch_id.value;

    const data = {
        name: elementsFP.patch_name.value,
        type: elementsFP.patch_type.value
    }

    PATCH(url, id, data)
        .then(() => location.reload())
        .catch(e => console.log(e))
})


window.onload = GET(url).then((res) => {
    id = res[res.length-1].id
    res.map((pkm) => {
        createCard(url, pkm.id, pkm)
})
}
);