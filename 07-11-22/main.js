//Users name, users address e users city

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => users.map((user) => console.log(`Name: ${user.name} \nAddress: ${Object.values(user.address)} \nCity: ${user.address.city}`)))
    .catch((error) => console.log(`ERRORE: ${error}`))
    .finally((done) => console.log("----- FATTO -----"));


//Todos ID, Todos Title
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((todos) => todos.forEach((todo) => console.log(`ID: ${todo.id} \nTitle: ${todo.title}`)))
    .catch((error) => console.log(`ERRORE: ${error}`))
    .finally((done) => console.log("----- FATTO -----"));