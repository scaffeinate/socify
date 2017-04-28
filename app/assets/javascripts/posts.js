// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function () {
  if ($(".pagination").size() > 0) {
    $(".pagination").hide();
    $("#endless-scroll").removeClass("hidden");
    $(window).bindWithDelay("scroll", function () {
      var url = $("a.next_page").attr("href");
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $.getScript(url);
      }
    }, 150);
  }

  $('#post-content').html($('#post_content').val());

  $('.input-mentionable').atwho({at: '@', data: $('#mentionable-data').data('content'), insertTpl: '<a href="/users/${id}">${name}</a>', displayTpl: '<li data-id="${id}"><span>${name}</span></li>', limit: 15});

  $('.post_form').submit(function () {
    $('#post_content').val($('#post-content').html());
    $('#post-content').html('');
  });
});
