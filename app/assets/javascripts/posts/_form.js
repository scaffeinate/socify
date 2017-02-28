// Place all the behaviors and hooks related to the matching view here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  var post_content = $('#post_content');
  var pseudo_post_content = $('#pseudo_post_content');
  var showLinkPreview = function(html) {
    $('#link-preview').removeClass('hidden');
    $('#link-preview').html(html);
  };


  $('#new_post').submit(function(e) {
    post_content.val(pseudo_post_content.html().trim());
    post_content.html('');
  });

  pseudo_post_content.on('paste', function(e) {
    var _this = this;
    var url = e.originalEvent.clipboardData.getData('Text').trim();
    setTimeout(function() {
      if (validator.isURL(url)) {
        $.get('posts/preview', {
          "url": url
        }, function(data) {
          var html = data['html'].trim();
          if (html != '') {
            showLinkPreview(html);
            $('#content_html').append(html);
          }
        });
      }
    }, 100);
  });
});;
