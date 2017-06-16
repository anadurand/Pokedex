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
  const description = $('<p>qwertyu</p>');
  const info = $('<div class=""></div');
  const lista = $('<ul></ul>');
  const alto = $('<li>Altura:</li>');
  const peso = $('<li>Peso:</li>');
  const sexo = $('<li>Sexo:</li>');
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

  return divModal;
}

$('#pokeDetail').on('show.bs.modal', function (event) {
  var modal = $(this);
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('ruta') // Extract info from data-* attributes
  var id = button.data('id');
  var nombre = button.data('name')
  modal.empty();
  GetValues(id);
  modal.append(ContruirModal(recipient, id, nombre));
});
