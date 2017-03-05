// Place all the behaviors and hooks related to the matching view here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  var postContent = $('#status-block #post_content');
  var pseudoPostContent = $('#status-block #pseudo_post_content');
  var linkPreview = $('#status-block #link-preview');
  var postPreviewHTMLHiddenField = $('#post_preview_html');
  var newPost = $('#new_post');

  pseudoPostContent.on('paste', function(e) {
    //e.preventDefault();
    var pastedContent = e.originalEvent.clipboardData.getData('Text').trim();
    //pastedContent = StatusUtil.stripTags(pastedContent);
    setTimeout(function() {
      var html = StatusUtil.stripTags(pseudoPostContent.html());
      pseudoPostContent.html(html);
      StatusUtil.moveCursorToEndOfContentEditable(document.getElementById('pseudo_post_content'));
      if (validator.isURL(pastedContent)) {
        StatusUtil.fetchPreview(pastedContent, 'posts/preview', function(html) {
          linkPreview.html(html);
          StatusUtil.show(linkPreview);
          postPreviewHTMLHiddenField.val(html);
        }, function(err) {
          linkPreview.html('');
          StatusUtil.hide(linkPreview);
          postPreviewHTMLHiddenField.val('');
        });
      }
    }, 100);
  });

  newPost.submit(function() {
    postContent.val(pseudoPostContent.html());
  });
});
