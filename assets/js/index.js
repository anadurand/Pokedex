'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Search(updated));

  root.append(wrapper);
}

const state = {
  pokemons: null,
  selectedPokemons: null
};
const updated = function (){
  render(root);
}


$( _ => {


  getJSON('http://pokeapi.co/api/v2/pokedex/1/',(error, json) =>{
       if (error){return alert(error.message);}
       state.pokemons = json.pokemon_entries;
       const root = $('.root');
       render(root);
   });



});
