// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  if($("#endless-scroll").size() > 0) {
    $(".pagination").hide();
    $("#loader").removeClass("hidden");
    $(window).bindWithDelay("scroll", function(){
      var url = $("a.next_page").attr("href");
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $.getScript(url);
      }
    }, 150);
  }
});