"use strict";
function filterByName(pokemons,query) {
  var filter = pokemons.filter((pokemon)=>{
    return pokemon.pokemon_species.name.indexOf(query.toLowerCase())!=-1;
  });
  return filter;
}
