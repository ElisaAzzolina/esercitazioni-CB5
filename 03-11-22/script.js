import products from "./products.js";

const specialOffersEl = document.querySelector(".specialOffers");
const categoryEl = document.querySelector(".categories");
const specialOffersProductsEl = document.createElement("div");

specialOffersProductsEl.className = ".specialOffers__products";
specialOffersEl.appendChild(specialOffersProductsEl);



// CREAZIONE CARD CATEGORY
const createCategoryCard = (data, parent) => {

    const catCardEl = document.createElement("div");
    const catCardImgEl = document.createElement("img");
    const catCardTitle = document.createElement("h3");

    catCardEl.className = "categories__card";
    catCardImgEl.setAttribute("src", data.categoryImage);
    catCardImgEl.setAttribute("alt", data.category);
    catCardTitle.textContent = data.category;

    catCardEl.append(catCardImgEl, catCardTitle);
    parent.appendChild(catCardEl);

}

// SOLUZIONE PER EVITARE LA RIPETIZIONE DELLE CATEGORIE
let categories = []; 
products.forEach((product) => {
    if (!categories.includes(product.category)) {
        /* categories.push(product.category); */
        categories = [...categories, product.category];
        createCategoryCard(product, categoryEl);
    } 
});

/* const categories = products.map((e) => e.category);
const categoriesSingle = [...new Set(categories)];
console.log(categoriesSingle); */



// CREAZIONE CARD
const createSpecialOfferCard = (data, parent) => {
    const cardEl = document.createElement("div");
    const cardImgEl = document.createElement("img");
    const cardTitleEl = document.createElement("h1");
    const cardBrandEl = document.createElement("h3");
    const cardParEl = document.createElement("p");
    const cardPriceEl = document.createElement("span");
    const cardDiscountEl = document.createElement("span");
    const cardButtonEl = document.createElement("button");
  
    cardEl.className = "specialOffer__card";
    cardImgEl.setAttribute("src", data.image);
    cardImgEl.setAttribute("alt", data.title);
    cardTitleEl.textContent = data.title;
    cardBrandEl.textContent = data.brand;

    cardParEl.className = "specialOffer__par"
    cardParEl.textContent = data.description;

    cardPriceEl.className = "specialOffer__price";
    cardPriceEl.textContent = "€ " + data.price;

    cardDiscountEl.className = "specialOffer__discount";
    cardDiscountEl.textContent = "SCONTO DEL " + data.discountPercentage + "%";

    cardButtonEl.className = "specialOffer__button";
    cardButtonEl.textContent = "vai al prodotto";
  
    cardEl.append(cardImgEl, cardTitleEl, cardBrandEl, cardParEl, cardPriceEl, cardDiscountEl, cardButtonEl);
    parent.appendChild(cardEl);

    cardButtonEl.addEventListener("click", () => alert("In allestimento!"));

  };


// PRODOTTI PER PERCENTUALE DI SCONTO
  products.filter((product) => product.discountPercentage >=20).map((product) => createSpecialOfferCard(product, specialOffersEl));


  // EVENT LISTENER NEL BUTTON DELLA HERO
const heroButtonEl = document.querySelector(".hero__button");
heroButtonEl.addEventListener("click", () => alert("Solo il meglio per i tuoi amici a quattro zampe!"));
