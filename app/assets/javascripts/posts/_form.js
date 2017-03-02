// Place all the behaviors and hooks related to the matching view here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  var post_content = $('#post_content');
  var post_preview_html = $('#post_preview_html');
  var pseudo_post_content = $('#pseudo_post_content');
  var showLinkPreview = function(html) {
    $('#link-preview').removeClass('hidden');
    $('#link-preview').html(html);
  };

  var stripTags = function(html) {
    return html.replace(/<.*?>/g, '');
  };

  $('#new_post').submit(function(e) {
    var html = pseudo_post_content.html();
    post_content.val(html);
    post_content.html('');
  });

  pseudo_post_content.on('paste', function(e) {
    var url = e.originalEvent.clipboardData.getData('Text').trim();
    var event = e;
    setTimeout(function() {
      var html = pseudo_post_content.html().trim();
      pseudo_post_content.html(stripTags(html));

      if (validator.isURL(url)) {
        event.preventDefault();
        pseudo_post_content.append("<a href='" + url + "'>" + url + "</a>");
        $.get('posts/preview', {
          "url": url
        }, function(data) {
          var html = data['html'].trim();
          if (html != '') {
            showLinkPreview(html);
            post_preview_html.val(html);
          }
        });
      }
    }, 100);
  });
});;
