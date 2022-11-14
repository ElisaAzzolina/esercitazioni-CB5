1. Creo il layout: una div main che conterrà tutti gli elementi della card e la card con all'interno info, title, id e body da riempire dinamicamente

2. Al primo download della pagine, prendo i dati e li stampo a video, utilizzando le variabili globali url e index, dichiarate in cima allo script js

3. seleziono i diversi elementi del DOM con la funzioe qs (contenuta in utils.js)

4. uso due eventListener sui buttons che al click targettano il contenuto testuale del button dentro la variabile inst.

5. creo una funzione getPost() che preso come argomento una istruzione "inst":
- se non esiste inst, l'index è 1 (il primo post)
- se esiste, l'inst deve essere covertito tutto in minuscolo (per poter essere utilizzato senza troppi problemi dentro lo switch)
- nello switch, a seconda del "prev" o del "next" viene decrementato o incrementato l'index. Il caso di default invece dà come valore l'istruzione a index.

6. uso la funzione GET (contenuta in utils.js) per prendere l'url e l'indice e poi resistuire i textContent dinamici per il titolo, l'id e il body. Inoltre se l'index risulta minore o uguale a 1, disabilito il button per evitare che torni un numero negativo, al contrario lo abilito (idem per l'index maggiore o uguale a 10).

7. al caricamento della pagina, richiamo la funzione getPost().