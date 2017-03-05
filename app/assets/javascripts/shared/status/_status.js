// Place all the behaviors and hooks related to the matching view here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  var statusMode = $('.status-mode > a');
  $('#attachment #link-block').removeClass('hidden');

  statusMode.click(function(e) {
    e.preventDefault();
    var mode = $(this).attr('data-status-mode');

    if (mode === 'status') {
      $('#attachment #img-block').addClass('hidden');
      $('#attachment #link-block').removeClass('hidden');
      $('#status-mode-li').addClass('active');
      $('#photo-mode-li').removeClass('active');
    } else if (mode === 'photo') {
      $('#attachment #img-block').removeClass('hidden');
      $('#attachment #link-block').addClass('hidden');
      $('#status-mode-li').removeClass('active');
      $('#photo-mode-li').addClass('active');
    }
  });
});
