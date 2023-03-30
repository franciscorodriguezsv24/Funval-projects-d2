// const nombre = document.querySelector("#name");
// const button = document.querySelector("#button");

// button.addEventListener("click", mostrarNombre);

// function mostrarNombre(event){
//     event.preventDefault();
    
//     const name = nombre.value;
//     if(name){
//         alert(`hola ${name}`);
//     }else{
//         alert("por favor agrega tu nombre")
//     }
  
// }

const lista = document.querySelector(".lista");


const frutas = ["Pera", "Manzana", "Sandia", "Melocoton", "fresa", "uva"];

frutas.forEach(imprimeFruta);

function imprimeFruta(fruta){
    let li = document.createElement("li");
    
    li.textContent = fruta;

lista.appendChild(li);
}

