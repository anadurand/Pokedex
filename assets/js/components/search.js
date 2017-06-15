"use strict";
const pokemonItem = (pokemon) => {
  const imgRuta=('000'+pokemon.entry_number).slice(-3);
  const divItem = $('<div class="pokemonContainer col-xs-11 col-sm-4 col-md-3"></div>');
  const divPok = $('<div class="poke-container gris-claro"></div>')
  const img = $(`<a href="#"><img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imgRuta}.png" alt=""></a>`);
  const divDetail = $('<div class="poke-info"></div>');
  const name = $(`<h5 class="poke-name gris-oscuro">${pokemon.pokemon_species.name}</h5>`);
  const divEnlaces = $('<div class="enlaces center-block"></div');
  const detail = $('<a href="#pokeDetail" class = "pokeball" data-toggle="modal" data-ruta="'+ imgRuta +'"></a>');
  const like = $('<a href="" class = "like"></a>');
  const share = $('<a href="" class = "share"></a>');

    divEnlaces.append(detail);
    divEnlaces.append(like);
    divEnlaces.append(share);
    divDetail.append(divEnlaces);
    divDetail.append(name);
    divPok.append(img);
    divPok.append(divDetail);
    divItem.append(divPok);

    return divItem;
}
const reRender = ( div ,input)=>{
    div.empty();
    const pokemonFilter = filterByName(state.pokemons,input);
    // $.each(pokemonFilter,(index,pokemon)=>{
    //   root.append(pokemonItem(pokemon));
    // });
    //haciendolo con .each y con .forEach
    pokemonFilter.forEach((pokemon) => {
      div.append(pokemonItem(pokemon));
    });
}

const Search = (updated) => {
  const parent = $('<div class="parent"></div>');
  const divSearch = $('<div class="container div-search"></div>');
  const search = $('<div class="search col-xs-12 col-sm-9"></div>');
  const icon = $('<i class="glyphicon glyphicon-search lupa"></i>');
  const input = $('<input type="text" id="search">');
  const button = $('<div class="button-order col-xs-3"><button class="btn btn-success">A - Z</button></div>')
  const pokemonContainer = $('<div class="container-pokemon container"></div>')

  input.on("keyup", (e) => {
    e.preventDefault();
      reRender(pokemonContainer ,input.val(), updated);
  });


  search.append(icon);
  search.append(input);
  divSearch.append(search);
  divSearch.append(button);
  parent.append(divSearch);
  parent.append(pokemonContainer);

  return parent;
}