"use strict";

const ContruirModal = (recipient, id, nombre) => {
  const divModal = $('<div class="modal-dialog modal-lg" role="document"></div>');
  const divContent = $('<div class="modal-content gris-modal"></div>');
  const divName = $(`<h2>${nombre}</h2>`);
  const close = $('<span class="close"><span>');
  const divBody = $('<div class="container-fluid"></div>');
  const divItem = $('<div class="pokemonContainer col-xs-12 col-sm-3"></div>');
  const divPok = $('<div class="poke-container gris-claro"></div>')
  const img = $(`<a href="#"><img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${recipient}.png" alt=""></a>`);
  const divInfo = $('<div class="poke-info"></div>');
  const name = $(`<h5 class="poke-name gris-oscuro">${nombre}</h5>`);
  const divEnlaces = $('<div class="enlaces center-block"></div');
  const detail = $('<a href="#pokeDetail" class = "pokeball"></a>');
  const like = $('<a href="" class = "like"></a>');
  const share = $('<a href="" class = "share"></a>');
  const divDetalle = $('<div class="col-xs-12 col-sm-5"></div>');
  const description = $('<p></p>');
  const info = $('<div class=""></div');
  const lista = $('<ul></ul>');
  const alto = $('<li>Altura:</li>');
  const peso = $('<li>Peso: </li>');
  const sexo = $('<li>Sexo: </li>');
  const categoria = $('<li>Categoria:</li>');
  const habilidad = $('<li>Habilidad: </li>');
  const type = $('<p>Tipo:</p>');
  const debilidad = $('<p>Debilidad:</p>');

    divEnlaces.append(detail);
    divEnlaces.append(like);
    divEnlaces.append(share);
    divInfo.append(divEnlaces);
    divInfo.append(name);
    divPok.append(img);
    divPok.append(divInfo);
    divItem.append(divPok);
    info.append(lista);
    lista.append(alto);
    lista.append(peso);
    lista.append(sexo);
    lista.append(categoria);
    lista.append(habilidad);
    divDetalle.append(description);
    divDetalle.append(info);
    divDetalle.append(type);
    divDetalle.append(debilidad);
    divBody.append(divItem);
    divBody.append(divDetalle);
  divContent.append(divName);
  divContent.append(close);
  divContent.append(divBody);
  divModal.append(divContent);



    $.get("http://pokeapi.co/api/v2/pokemon/" + id, function(response){
        alto.append((response.height)/10 + " m") ;
        peso.append((response.weight)/10 + " kg") ;

        response.abilities.forEach(function(element){
          if(!element.is_hidden){ habilidad.append(element.ability.name); }
        });
        var tipos = [];
        var tipoUrl = [];
        var debil = [];
        response.types.forEach(function(element){
          tipos.push(element.type.name);
          tipoUrl.push(element.type.url);
        });
        console.log(tipos);
        tipoUrl.forEach(function(link){
          $.get(link, function(response){
            response.damage_relations.double_damage_from.forEach(function(element){
              if((debil.indexOf(element.name))==-1){
                debil.push(element.name);
              }
            });
          });
        });
        console.log(debil);
    });
    $.get("http://pokeapi.co/api/v2/pokemon-species/" + id, function(response){

        description.append(response.flavor_text_entries[1].flavor_text);
        response.genera.forEach(function(element){
          if(element.language.name == "en"){ categoria.append(element.genus);}
        });

    });

  return divModal;
}

$('#pokeDetail').on('show.bs.modal', function (event) {
  var modal = $(this);
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('ruta') // Extract info from data-* attributes
  var id = button.data('id');
  var nombre = button.data('name')
  modal.empty();

  modal.append(ContruirModal(recipient, id, nombre));
});
