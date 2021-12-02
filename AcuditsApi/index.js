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
function getJoke() {
    const apiURL = "https://icanhazdadjoke.com/";

    const HTMLelem = document.querySelector("#acudit");

    fetch(`${apiUrl}`, {
        
    })
        .then(response => response.json())
        .then(joke => {
            // Creamos un elemento de tipo p. A este elemento le pasamos un hijo de tipo texto.
            let elem = document.createElement('p');
            elem.appendChild(document.createTextNode(`${joke}`));
            // y le añadimos el elem a template
            template.appendChild(elem);
        });
    // y finalmente le añadimos template al elemento inicial html
    HTMLelem.appendChild(template);
}


