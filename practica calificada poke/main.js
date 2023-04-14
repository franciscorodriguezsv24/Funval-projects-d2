
const URL = "https://pokeapi.co/api/v2/pokemon/bulbasaur"

fetch(URL).then(response => response.json()).then(json => {

    console.log(json);
    const div = document.createElement("div");
    div.className = "border border-dark poke-card d-flex flex-row px-0 row w-100";
    const parent = document.querySelector("#pokeCard")
    div.innerHTML =`
    <div class="col-12 border-bottom border-dark">
    <p class="text-center fw-bold py-1 m-0">
        ${json.name}
    </p>
</div>
<div class="img-card col-2 d-flex justify-content-center py-2">
    <img class="pikachu" src="${json.sprites.other.dream_world.front_default}" alt="Pikachu">
</div>
<div class="habilidades border-start border-dark col-8 row">
    <spam class="col-6 text-center pt-2">Ability: ${json.abilities[1].ability.name}</spam>
    <spam class="col-6 text-center pt-2">weight: ${json.weight}</spam>
    <spam class="col-6 text-center pt-2">Move: ${json.moves[2].move.name}</spam>
    <spam class="col-6 text-center pt-2">type: ${json.types[1].type.name}</spam>
</div>`

parent.appendChild(div);
}
)

const URL2 = "https://pokeapi.co/api/v2/pokemon/pikachu"

fetch(URL2).then(response => response.json()).then(json => {

    console.log(json);
    const div = document.createElement("div");
    div.className = "border border-dark poke-card d-flex flex-row px-0 row w-100";
    const parent = document.querySelector("#pokeCard2")
    div.innerHTML =`
    <div class="col-12 border-bottom border-dark">
    <p class="text-center fw-bold py-1 m-0">
        ${json.name}
    </p>
</div>
<div class="img-card col-2 d-flex justify-content-center py-2">
    <img class="pikachu" src="${json.sprites.other.dream_world.front_default}" alt="Pikachu">
</div>
<div class="habilidades border-start border-dark col-8 row">
    <spam class="col-6 text-center pt-2">Ability: ${json.abilities[1].ability.name}</spam>
    <spam class="col-6 text-center pt-2">weight: ${json.weight}</spam>
    <spam class="col-6 text-center pt-2">Move: ${json.moves[2].move.name}</spam>
    <spam class="col-6 text-center pt-2">type: ${json.types[0].type.name}</spam>
</div>`

parent.appendChild(div);
})