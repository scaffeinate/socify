// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {
  $('.edit-photo').click(function(e){
    e.preventDefault();
    var photo_id = $(this).data('editable');

    var photo_src = $('#photo-' + photo_id + ' > .thumbnail img').attr('src');
    var title = $('#photo-' + photo_id + ' > .thumbnail > .caption > .title').text().trim();

    $('#photo-id').val(photo_id);
    $('#photo-title').val(title);
    $('#edit-photo-img').attr('src', photo_src);

    $('#edit-photo-modal').modal('show');
  });
});


$(function() {

  if($('#photo-dropzone').length) {
    var photoDropzone = new Dropzone('#photo-dropzone');
    Dropzone.options.photoDropzone = false;
    photoDropzone.options.acceptedFiles = ".jpeg,.jpg,.png,.gif";

    photoDropzone.on("complete", function(files) {
      var _this = this;
      if (_this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
        setTimeout(function(){
          $('#upload-photos-modal').modal('hide');
          var acceptedFiles = _this.getAcceptedFiles();
          var rejectedFiles = _this.getRejectedFiles();

          if(acceptedFiles.length != 0) {
            alertify.success('Uploaded ' + acceptedFiles.length + ' files successfully.');
          }
          if(rejectedFiles.length != 0) {
            alertify.error('Error uploading ' + rejectedFiles.length + ' files. Only image files are accepted.');
          }

          _this.removeAllFiles();

          window.location.reload();

        }, 1500);
      }
    });
  }

});
