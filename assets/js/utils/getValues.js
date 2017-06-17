'use strict';

const GetValues = (id ) =>{
  const pokemonDetalles = {
                            description: null,
                            altura: null,
                            peso: null,
                            sexo: null,
                            categoria: null,
                            habilidad: [],
                            tipo: [],
                            debilidad: []
                          };

  $.get("http://pokeapi.co/api/v2/pokemon/" + id, function(response){
      pokemonDetalles.altura = (response.height)/10 + " m";
      pokemonDetalles.peso = (response.weight)/10 + " kg";

      pokemonDetalles.habilidad = response.abilities.filter(function(element){
        if(!element.is_hidden){ return element.ability.name; }
      });

      response.types.forEach(function(element){
        pokemonDetalles.habilidad.push(element.type.name);
      });

  });
  $.get("http://pokeapi.co/api/v2/pokemon-species/" + id, function(response){

      response.flavor_text_entries.forEach(function(element){
        if(element.language.name == "en"){ pokemonDetalles.description = element.flavor_text;}
      });
      response.genera.forEach(function(element){
        if(element.language.name == "en"){ pokemonDetalles.categoria = element.genus;}
      });

  });
  return pokemonDetalles;
}
