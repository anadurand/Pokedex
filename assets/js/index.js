'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if(state.selectedPokemon == null){
    wrapper.append(PokedexGrid(updated));
  }

}

const state = {
  pokemons = null,
  selectedPokemon = null
};
const updated = function (){
  render(root);
}

$( _ => {
  const root = $('.root');

  
});
