/*
const apiUrl = "https://jsonplaceholder.typicode.com";

// llamar a una API con XMLHttpRequest

//instancio objeto xhr, creo la función manejadora, y llamo a la función escuchando el evento load
const xhr = new XMLHttpRequest();

function onRequestHandler () {
    if (this.readyState ===4 && this.status === 200) {
        //0 = UNSET, no se ha llamdo al método open
        //1 = OPENED, se ha llamado al método open
        //2 = HEADERS-RECEIVED, se está llamando al método send()
        //3 = LOADING, está cargando, es decir, está recibiendo la respuesta
        //4 = DONE, se ha completado la operación
        const data = JSON.parse(this.response); // como la respuesta que me da es texto, lo parseo a un json para poder iterar con los objetos
        
        //vamos a pintar la API
        //1-acceder al elemento HTML, 2-creo una variable con los datos que necesito (map del objeto inicial), 3-insertar dentro de este elemento la variable con los datos
        const HTMLelem = document.querySelector("#app");
        const template = data.map ((user) => `<li>${user.name} ${user.email}</li>`);
        HTMLelem.innerHTML = `<ul>${template}</ul>`;
    }
}

xhr.addEventListener('load', onRequestHandler); // estoy en 0, porque aún no he llamado al método open
xhr.open('GET', `${apiUrl}/users`); //se llama al método open y ahora lo enviamos
xhr.send(); // envía y carga la respuesta y nos devuelve un status.

// Respuesta en formato texto, que no podremos iterar
// [
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//         }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//       }
//     },
// Respuesta en formato JSON, con objetos que podré manipular e iterar
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
*/

/*
// llamar a una API con método FETCH, usando STRINGS para formatear el html

const apiUrl = "https://jsonplaceholder.typicode.com";

//accedo al elemento HTML
const HTMLelem = document.querySelector("#app");

//llamo al método fetch que recibe la url y devuelve una promise. el resultado de la promesa lo recogemos con .then
fetch (`${apiUrl}/users`)
    .then(response => response.json()) // lo convierte en un json
    // 2-inicializo template con los datos que necesito (map del objeto inicial)
    // 3-insertar dentro del elemento html la variable con los datos
    .then(users => {
        const template = users.map ((user) => `<li>${user.name} ${user.email}</li>`);
        HTMLelem.innerHTML = `<ul>${template}</ul>`;
    });
*/

// llamar a una API con método FETCH, usando ELEMENTOS DE HTML para formatear el html

const apiUrl = "https://jsonplaceholder.typicode.com";

const HTMLelem = document.querySelector ("#app");
// creamos un document.fragment en el DOM del html
// const template = createDocumentFragment(); template va a ser directamente el elemento ul
const template = document.createElement('ul');

fetch (`${apiUrl}/users`)
    .then(response => response.json())
    .then(users => {
    // para cada user, creamos un elemento de tipo li. 
    // A este elemento le pasamos un hijo de tipo texto, que es el user y el mail.
        users.forEach((user) => {
            let elem = document.createElement('li');
            elem.appendChild(document.createTextNode(`${user.name} ${user.email}`));
            // y le añadimos el elem a template
            template.appendChild(elem);
        });
    });
// y finalmente le añadimos template al elemento inicial html
HTMLelem.appendChild(template);





