const bodyEl = document.querySelector("body");
import products from "./products.js";

//---------- CREAZIONE NAVBAR ----------
const navEl = document.createElement("nav");
bodyEl.appendChild(navEl);


//---------- CREAZIONE NAVLIST ----------
const navListEl = document.createElement("ul");
navEl.appendChild(navListEl);

//---------- CREAZIONE NAVLIST ITEM----------
const navItemsEl = document.createElement("li");
navListEl.appendChild(navItemsEl);

const secondNavItemsEl = document.createElement("li");
navListEl.appendChild(secondNavItemsEl);

const thirdNavItemsEl = document.createElement("li");
navListEl.appendChild(thirdNavItemsEl);

//a
const navAEl = document.createElement("a");
navAEl.setAttribute("href", "https://www.google.com");
navAEl.textContent = "Home";
navItemsEl.appendChild(navAEl);

const secondNavAEl = document.createElement("a");
secondNavAEl.setAttribute("href", "https://www.google.com");
secondNavAEl.textContent = "Popular";
secondNavItemsEl.appendChild(secondNavAEl);

const thirdNavAEl = document.createElement("a");
thirdNavAEl.setAttribute("href", "https://www.google.com");
thirdNavAEl.textContent = "Discount";
thirdNavItemsEl.appendChild(thirdNavAEl);


//---------- CREAZIONE HERO ----------

//Div class "hero"
const heroEl = document.createElement("div");
heroEl.className = "hero";
bodyEl.append(heroEl);

//h1
const heroTitleEl = document.createElement("h1");
heroTitleEl.textContent = "ONLINEISH!";
heroEl.appendChild(heroTitleEl);

//h2
const heroSubtitleEl = document.createElement("h2");
heroSubtitleEl.textContent = "Best Products. Best Prices.";
heroEl.appendChild(heroSubtitleEl);



//---------- CREAZIONE SINGOLA CARD ----------
const cardCreation = (img, title, description, category, price, parent) => {
    //Div class "single-cards"
    const cardEl = document.createElement("div");
    cardEl.className = "single-cards";

    //img
    const cardImgEl = document.createElement("img");
    cardImgEl.setAttribute("src", img);
    cardImgEl.setAttribute("alt", category);

    //h3
    const cardTitleEl = document.createElement("h3");
    cardTitleEl.textContent = title;

    //p
    const cardParEl = document.createElement("p");
    cardParEl.textContent = description;
    
    //p-price
    const cardPriceEl = document.createElement("p");
    cardPriceEl.className = "price";
    cardPriceEl.textContent = "€ "+ price;

    cardEl.append(cardImgEl, cardTitleEl, cardParEl, cardPriceEl);
    parent.appendChild(cardEl);
}

//---------- CREAZIONE MOST-POPULAR ----------

//Div class "most-popular"
const mostPopEl = document.createElement("div");
mostPopEl.className = "most-popular";
bodyEl.append(mostPopEl);

//h2 clas "most-popular__h2"
const mostPopTitleEl = document.createElement("h2");
mostPopTitleEl.className = "most-popular__h2";
mostPopTitleEl.textContent = "I nostri Prodotti più popolari";
mostPopEl.appendChild(mostPopTitleEl);


//---------- CREAZIONE CARD-LIST MOST-POPULAR----------

//Div class "most-popular-card-list"
const mPopCardListEl = document.createElement("div");
mPopCardListEl.className = "most-popular-card-list";
mostPopEl.append(mPopCardListEl);


//---------- PRODOTTI MOST POPULAR ----------
products
    .filter((product) => product.rating >= 4.50)
    .map((product) => {
    cardCreation(product.thumbnail, product.title, product.description, product.category, product.price, mPopCardListEl); 
})



//---------- CREAZIONE DISCOUNT----------

//Div class "discount"
const discountEl = document.createElement("div");
discountEl.className = "discount";
bodyEl.appendChild(discountEl);

//h2 class "discount__h2"
const discountTitleEl = document.createElement("h2");
discountTitleEl.className = "discount__h2";
discountTitleEl.textContent = "I nostri Prodotti in offerta:";
discountEl.appendChild(discountTitleEl);

//---------- CREAZIONE CARD-LIST DISCOUNT----------

//Div class "discount-card-list"
const discountCardListEl = document.createElement("div");
discountCardListEl.className = "discount-card-list";
discountEl.appendChild(discountCardListEl);

//---------- PRODOTTI DISCOUNT ----------
products
    .filter((product) => product.discountPercentage >= 15.00)
    .map((product) => {
    cardCreation(product.thumbnail, product.title, product.description, product.category, product.price, discountCardListEl); 
})

//---------- CREAZIONE FOOTER----------
const footerEl = document.createElement("div");
footerEl.className = "footer";
bodyEl.append(footerEl);

//p
const footerParEl = document.createElement("p");
footerParEl.className = "footer__par";
footerParEl.textContent = "Made with ❤️ by Elisa Azzolina";
footerEl.append(footerParEl);
