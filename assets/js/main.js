$('.col-4').click(function(e){
  var img = e.target.src;
  var modal = '<div class="modal" id="modal"><img src="'+ img + '" class="modal__img"><div class="boton" id="boton">X</div></div>';
  $('body').append(modal);
  $('#boton').click(function(){
    $('#modal').remove();
  })
});


$(document).keyup(function(e){
  if (e.which==27) {
    $('#modal').remove();
  }
})
