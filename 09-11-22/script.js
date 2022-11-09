const bodyEl = document.querySelector("body");
const loadingEl = document.querySelector(".loading"); 
const pokedexEl = document.createElement("div");
pokedexEl.className = "gallery";

bodyEl.appendChild(pokedexEl);



//CREAZIONE DELLA CARD
const createPokemonCard = (data) => {

    //AGGIUNTA DEGLI 0 ALL'ID
    function createId (id) {
    if ( !id ) return null;
    if ( id < 10 ) {return `00${id}`}
    else if ( id < 100 ) {return `0${id}`}
    return id;
    }
    
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    cardEl.classList.add(`bg-${data.types[0].type.name}`);

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", data.sprites.other.dream_world.front_default);

    const idEl = document.createElement("p");
    idEl.className = "pokemon-id";
    idEl.textContent = `#${createId(data.id)}`;

    const nameEl = document.createElement("h1");
    nameEl.textContent = data.name;

    const typeEl = document.createElement("p");
    typeEl.className = "pokemon-type";
    typeEl.textContent = `Type: ${data.types[0].type.name}`;

    cardEl.append(imgEl, idEl, nameEl, typeEl);
    pokedexEl.appendChild(cardEl);
}

//FETCH ARRAY PROMISES CON PROMISE.ALL
const urlArr = []; 

for(let i = 1; i <= 150; i++) {
    urlArr.push(`https://pokeapi.co/api/v2/pokemon/${i}`); 
}

let requestArr = urlArr.map((url) => {
    loadingEl.classList.add("active"); 
    return fetch(url).then((res) => res.json()); 
});

Promise.all(requestArr)
    .then((res) => res.map((r) => createPokemonCard(r)))
    .finally(() => loadingEl.classList.remove("active"));

