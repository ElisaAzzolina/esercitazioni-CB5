const apiUrl = "https://api.adviceslip.com/advice"; // api url
const cardEl = document.querySelector(".card"); // prendo l'elemento div.card dall'HTML
const btnEl = document.querySelector(".btn_generator"); //prendo l'elemento button.btn_generator dall'HTML
const phraseEl = document.createElement("h2"); //creo l'elemento h2 che conterrà la frase generata
phraseEl.className = "phrase";
const idEl = document.createElement("p"); //creo l'elemento p che conterrà l'id della frase generata
idEl.className = "idNum";

const dividerEl = document.createElement("img");
dividerEl.setAttribute("src", "./img/pattern-divider-mobile.svg");

/**
* Create dinamic card from end point
* 
* @param {string} data
*/
const createCard = (data) => {

    phraseEl.innerText = `"${data.slip.advice}"`;
    idEl.innerText = `advice # ${data.slip.id}`;

    cardEl.classList.add("animated_background");

    cardEl.append(idEl, phraseEl, dividerEl);
};

/**
 * Take the object from the url and give it to a function
 * 
 * @param {string} url 
 */
const createAdvice = (url) => {
    cardEl.classList.add("active");
    fetch(url, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => createCard(res))
    .catch((e) => console.log("Error: " + e))
    .finally(() => cardEl.classList.remove("active"));
};

/**
 * Take a function, execute it than give it to an html element to execute it on click
 * 
 * @param {object} htmlEl
 */
const firstLoad = (htmlEl) => {
    htmlEl.addEventListener("click", () => {
        createAdvice(apiUrl);
    });
    createAdvice(apiUrl);
};

window.onload = firstLoad(btnEl);