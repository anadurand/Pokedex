"use strict";
function filterByName(pokemons,query) {
  var filter = pokemons.filter((pokemon)=>{
    //return pokemon.pokemon_species.name.indexOf(query.toLowerCase())!=-1;  coincidencias en el nombre
    return pokemon.pokemon_species.name.toLowerCase().startsWith(query.toLowerCase())==true;

  });
  state.selectedPokemons = filter;
  return filter;
}
