/**
 * Take an element that matches with che element of the DOM passed as argument
 * 
 * @param {string} el - specific DOM element
 * @returna HTMLelement
 */
const qs = (el) => document.querySelector(el);


/**
 * Send a GET request to the end-point specified as argument
 * 
 * @param {string} url
 * @returns data
 */
const GET = async url => {
    const res = await fetch(url);
    const data = await res.json();
    return await data;
}

export {qs, GET};