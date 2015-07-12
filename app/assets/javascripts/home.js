// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var readURL = function(input, preview) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $(preview).parent().removeClass('hidden');
      $(preview).attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
};

$(document).ready(function(){

  var preview = "#img-preview > img";

  $("#post-attachment").click(function(){
    $("#post_attachment").click();
  });

  $('#post_attachment').change(function(){
    readURL(this, preview);
  });

});