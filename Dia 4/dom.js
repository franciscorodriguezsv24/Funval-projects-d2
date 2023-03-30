export const $ = (selector) => document.querySelector(selector);

export const imprimirArr = (arr, where, nodeElement) => {
    arr.forEach( elem =>{
        let node = document.createElement(nodeElement); //El usuario indica el nombre del nuevo elemento

        // inserto el valor dentro del nodo
        node.textContent = elem;

        // inserto el nodo dentro del elemento principal
        where.appendChild(node);
    })
}