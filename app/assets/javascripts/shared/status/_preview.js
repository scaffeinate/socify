// Place all the behaviors and hooks related to the matching view here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  var pseudoAttachButton = $('#pseudo_post_attachment');
  var attachmentFileField = $('#post_attachment');
  var imgPreview = $('#img-preview');

  pseudoAttachButton.click(function() {
    attachmentFileField.click();
  });

  attachmentFileField.change(function() {
    StatusUtil.readURL(this, function(res) {
      imgPreview.removeClass('hidden');
      imgPreview.children('img').attr('src', res);
    });
  });
});
