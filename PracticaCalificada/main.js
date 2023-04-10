const URL = './estudiantes.json';

const tbody = document.querySelector("#tbody");

fetch(URL)
.then(response => response.json()).then(data => {
    data['estudiantes'].forEach(object => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th scope="row">${object.Id}</th>
        <td>${object.Nombre}</td>
        <td>${object.Apellido}</td>
        <td>${object.Nota1}</td>
        <td>${object.Nota2}</td>
        <td>${object.PromedioDeNotas}</td>
        <td>${object.Observaciones}</td>



        `
        tbody.appendChild(tr);

    });
})






    