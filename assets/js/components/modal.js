"use strict";

const ContruirModal = (recipient) => {
  const divImg = $('<div class=""></div>');
  const img = $(`<img src="" class="imagen" alt="">`);
  img.attr("src",`http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${recipient}.png`);
  divImg.append(img);

  return divImg;
}

$('#pokeDetail').on('show.bs.modal', function (event) {
  var modal = $(this);
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('ruta') // Extract info from data-* attributes
  modal.empty();
  modal.append(ContruirModal(recipient));
});
