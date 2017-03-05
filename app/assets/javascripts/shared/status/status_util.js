// Place all the behaviors and hooks related to the matching view here.
// All this logic will automatically be available in application.js.
var StatusUtil = (function() {

  var readURL = function(fileField, callback) {
    if (fileField.files && fileField.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        callback(e.target.result);
      }
      reader.readAsDataURL(fileField.files[0]);
    }
  };

  return {
    readURL: function(fileField, callback) {
      readURL(fileField, callback);
    }
  };
})();
