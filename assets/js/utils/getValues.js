'use strict';

const GetValues = (id ) =>{
  const pokemonDetalles = {
                            description: null,
                            altura: null,
                            peso: null,
                            sexo: null,
                            categoria: null,
                            habilidad: null,
                            tipo: [],
                            debilidad: []
                          };

  $.get("http://pokeapi.co/api/v2/pokemon/" + id, function(response){
      console.log(response);
  });
}
