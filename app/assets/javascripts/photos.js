// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {
  $('.edit-photo').click(function(e){
    e.preventDefault();
    var photo_id = $(this).data('editable');

    var photo_src = $('#photo-' + photo_id + ' > .thumbnail img').attr('src');
    var title = $('#photo-' + photo_id + ' > .thumbnail > .caption > .title').text().trim();

    $('#photo-id').val(photo_id);
    $('#photo-title').val(title);
    $('#edit-photo-img').attr('src', photo_src);

    $('#edit-photo-modal').modal('show');
  });
});
