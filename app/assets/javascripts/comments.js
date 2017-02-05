// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {
  $('form.comments-form').submit(function() {
    var psuedoCommentEl = $(this).find('[contenteditable]');
    var commentEl = $(this).find('input[type=hidden]');
    commentEl.val(psuedoCommentEl.html());
    psuedoCommentEl.html('');
  });
});
