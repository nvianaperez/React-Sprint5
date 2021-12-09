// const apiURL = "https://icanhazdadjoke.com/";
//***********
// function getJoke() {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             var data = JSON.parse(this.responseText);
//             console.log(data);
//             //pintar la API
//             const HTMLelem = document.querySelector("#acudit");
//             const template = data.map((joke) => `${joke.description}`);
//             HTMLelem.innerHTML = `<p>${template}</p>`;
//         }
//     }

//     xhr.open("GET", `${apiUrl}/j`, true); //se llama al método open y ahora lo enviamos
//     xhr.setRequestHeader("Content-type", "application/json");
//     xhr.send(); // envía y carga la respuesta y nos devuelve un status.
// }

//*************
// function getJoke() {
//     const xhr = new XMLHttpRequest();

//     function onRequestHandler () {
//         if (this.readyState ===4 && this.status === 200) {
//             const data = JSON.parse(this.response); 
//             //vamos a pintar la API
//             const HTMLelem = document.querySelector("#acudit");
//             const template = data.map ((joke) => `${joke.description}`);
//             HTMLelem.innerHTML = `<p>${template}</p>`;
//         }
//     }

//     xhr.addEventListener('load', onRequestHandler); // estoy en 0, porque aún no he llamado al método open
//     xhr.open('GET', `${apiUrl}/j`); //se llama al método open y ahora lo enviamos
//     xhr.send(); // envía y carga la respuesta y nos devuelve un status.
// }

//*************
//     const HTMLelem = document.querySelector("#acudit");

//     fetch(`${apiURL}`, {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         method: 'GET'
//     })
//         .then(response => response.json())
//         .then(joke => {
//             // Creamos un elemento de tipo p. A este elemento le pasamos un hijo de tipo texto.
//             let elem = document.createElement('p');
//             elem.appendChild(document.createTextNode(`${joke}`));
//             // y finalmente le añadimos elem al elemento inicial html
//             HTMLelem.appendChild(elem);
//         });
// }
/***** EXERCICI 1 *****/
const apiUrl = "https://icanhazdadjoke.com/";
document.querySelector('#acudit').addEventListener('click', () => {
    fetch (apiUrl, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Accept": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => console.log(res.joke))
    .catch(error => console.log("Error reading data"+error))
});
/*
document.querySelector('#allAcudits').addEventListener('click', () => {
    fetch (`${apiUrl}/search`, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Accept": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => {
        res.forEach(res => console.log(res.joke)) //Error reading dataTypeError: res.forEach is not a function
    })
    .catch(error => console.log("Error reading data"+error))
});

document.querySelector('#searchAcudit').addEventListener('click', () => {
    fetch (`${apiUrl}/search?term=hipster`, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Accept": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.log("Error reading data"+error))
});*/
/***** EXERCICI 2 *****/
