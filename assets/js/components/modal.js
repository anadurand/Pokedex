"use strict";

const ContruirModal = (recipient, id, nombre) => {
  const divModal = $('<div class="modal-dialog container-fluid" role="document"></div>');
  const divContent = $('<div class="modal-content gris-modal center-block"></div>');
  const divName = $(`<h2 class="text-center modal-name">${nombre}</h2>`);
  const close = $('<span class="closed" data-dismiss="modal" aria-label="close"><span>');
  const divBody = $('<div class="container-fluid modalBody"></div>');
  const divItem = $('<div class="pokemon-modal-container col-xs-10 col-sm-4 col-xs-offset-1 col-sm-offset-0 col-md-4 col-md-offset-1"></div>');
  const divPok = $('<div class="poke-modal-container gris-claro"></div>')
  const img = $(`<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${recipient}.png" alt="">`);
  const divInfo = $('<div class="poke-modal-info"></div>');
  const name = $(`<h5 class="poke-name gris-oscuro">${nombre}</h5>`);
  const divEnlaces = $('<div class="enlaces center-block"></div');
  const detail = $('<a href="#" class = "pokeball"></a>');
  const like = $('<a href="#" class = "like"></a>');
  const share = $('<a href="#" class = "share"></a>');
  const divDetalle = $('<div class="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-0 col-md-6"></div>');
  const description = $('<p class="modal-description"></p>');
  const info = $('<div class="modal-cuadro celeste"></div');
  const listaUno = $('<ul class="list-unstyled modal-list col-xs-12 col-sm-6"></ul>');
  const alto = $('<li>Altura:</li>');
  const peso = $('<li>Peso: </li>');
  const sexo = $('<li>Sexo: </li>');
  const listaDos = $('<ul class="list-unstyled modal-list col-xs-12 col-sm-6"></ul>');
  const categoria = $('<li>Categoria:</li>');
  const habilidad = $('<li>Habilidad: </li>');
  const type = $('<h5>Tipo:</h5>');
  const debilidad = $('<h5>Debilidad:</h5>');

    divEnlaces.append(detail);
    divEnlaces.append(like);
    divEnlaces.append(share);
    divInfo.append(divEnlaces);
    divInfo.append(name);
    divPok.append(img);
    divPok.append(divInfo);
    divItem.append(divPok);
    listaUno.append(alto);
    listaUno.append(peso);
    listaUno.append(sexo);
    listaDos.append(categoria);
    listaDos.append(habilidad);
    info.append(listaUno);
    info.append(listaDos);
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



    $.get("https://pokeapi.co/api/v2/pokemon/" + id, function(response){
        alto.after('<li>'+ (response.height)/10 + " m"+ '</li>') ;
        peso.after('<li>'+ (response.weight)/10 + " kg"+ '</li>') ;

        response.abilities.forEach(function(element){
          if(!element.is_hidden){ habilidad.after('<li>' + element.ability.name + '</li>'); }
        });
        var tipoUrl = [];
        var debil = [];
        response.types.forEach(function(element){
          const color = addType(element.type.name);
          const span = $('<span class="tipo">'+ element.type.name + '</span>');
          $(span).css({background:color});
          type.after(span);
          tipoUrl.push(element.type.url);
        });
        tipoUrl.forEach(function(link){
          $.get(link, function(response){
            response.damage_relations.double_damage_from.forEach(function(element){
              if((debil.indexOf(element.name))==-1){
                const color = addType(element.name);
                const span = $('<span class="tipo">'+ element.name + '</span>');
                $(span).css({background:color});
                debilidad.after(span);
                debil.push(element.name);
              }
            });
          });
        });
    });
    $.get("https://pokeapi.co/api/v2/pokemon-species/" + id, function(response){

        description.append(response.flavor_text_entries[1].flavor_text);
        response.genera.forEach(function(element){
          if(element.language.name == "en"){ categoria.after('<li>' + element.genus + '</li>');}
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
