// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){
  $("#photo_album_title").blur(function(){
    var photo_album_url = $('#new_photo_album').attr('action');
    var title = $(this).val();
    var data = $('#new_photo_album').serializeArray();
    $.post(photo_album_url, data, function(res){
      $('#photo-dropzone').fadeIn();
    }, function(err) {
      
    });
  });
});
