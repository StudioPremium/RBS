$('#modal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var modal = $(this);

  var recipient = button.data('whatever'); 


  modal.find('.modal-title').text(recipient);
  modal.find('.modal-body [type="hidden"]').val(recipient);

})