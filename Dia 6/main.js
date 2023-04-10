const URL = './sacerdocio.json';

fetch(URL).then(response => response.json()).then(json => console.log(json));