// Place all the behaviors and hooks related to the matching view here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  var post_content = $('#post_content');
  var psuedo_post_content = $('#psuedo_post_content');


  $('#new_post').submit(function() {
    console.log(psuedo_post_content.html());
    post_content.val(psuedo_post_content.html());
    post_content.html('');
  });

  /*psuedo_post_content.on('paste', function(e) {
    var _this = this;
    setTimeout(function() {
      var text = $(_this).text();
      $.get('posts/preview', {
        "url": text
      }, function(data) {
        var html = data['html'];
        $('#link-preview').removeClass('hidden');
        $('#link-preview').html(html);
        $('#content-html').val(html);
      });
    }, 100);
  });*/
});
