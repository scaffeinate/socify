// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {
  $('#new_comment').submit(function() {
    $('#comment_text').val($('#comment-text').html());
    $('#comment-text').html('');
  });
});
