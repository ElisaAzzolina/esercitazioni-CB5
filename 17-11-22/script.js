import { qs, ce, GET } from "./utils.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";
const cardList = qs(".cardList");
const inputEl = qs(".search-input");
let productsList = [];

const createCardEl = (data, parent) => {
  const { thumbnailUrl, title, url } = data;

  // const elements = {
  //   cardEl: ce("div"),
  //   imgEl: ce("img"),
  //   titleEl: ce("h4"),
  //   urlEl: ce("p")
  // }
  const cardEl = ce("div");
  const imgEl = ce("img");
  const titleEl = ce("h4");
  const urlEl = ce("span");

  cardEl.className = "card";
  imgEl.className = "cardimg";
  imgEl.setAttribute("src", thumbnailUrl);
  imgEl.setAttribute("alt", title);
  titleEl.textContent = title;
  titleEl.className = "cardtitle";
  urlEl.className = "card__text";
  urlEl.textContent = url;

  cardEl.append(imgEl, titleEl, urlEl);
  parent.append(cardEl);
};


GET(BASE_URL).then((data) => {  
    productsList = data.filter((product) => product.id <= 10);
    productsList.map((product) => createCardEl(product, cardList));
});


inputEl.addEventListener("input", (e) => {
  const inputString = e.target.value;
  const filteredProd = productsList.filter((prod) => {
    return prod.title.includes(inputString);
  });
 console.log(filteredProd);
}); 

/* inputEl.addEventListener("input", (e) => {
    GET(BASE_URL).then((data) => {
        const inputString = e.target.value;
        productsList = data.filter((product) =>product.title === inputString);
        productsList.map((product) => createCardEl(product, cardList));
    });
}) */

