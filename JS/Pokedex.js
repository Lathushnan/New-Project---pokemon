const pokemonPokedex = document.getElementById("pokemons--pokedex");

// Fetching From Pokemon.json in this directory
let pokedex = fetch("./JS/pokemon.json");

let promises = [];
promises.push(pokedex.then((res) => res.json()));
Promise.all(promises).then((result) => {
   result.forEach((pokedex) => {
      pokedex.map((res) => {
         const pokemons = {
            name: res.name,
            id: res.id,
            image: res.image,
            type: res.type,
         };

         displayPokemon(pokemons);
      });
   });
});

const displayPokemon = (pokemon) => {
   const pokemonHTMLString = `
   <li class="pokemons--pokedex--card" name="card">
   <h2 class="pokemons--pokedex--card--title">${pokemon.id}. ${pokemon.name}</h2>
   <p class="pokemons--pokedex--card--subtitle" name="Type"> ${pokemon.type}</p>
   </li>
   `;
   // <img class="pokemons--pokedex--card--image" src="${pokemon.image}"/>
   pokemonPokedex.innerHTML += pokemonHTMLString;

};


