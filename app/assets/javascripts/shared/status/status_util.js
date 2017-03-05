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

  var stripTags = function(html) {
    return html.replace(/<(?!br).*?\>/g, '');
  };

  /**
   * Thanks to the stackoverflow answer.
   * Link: http://stackoverflow.com/questions/1125292/how-to-move-cursor-to-end-of-contenteditable-entity
   */
  var moveCursorToEndOfContentEditable = function(contentEditableElement) {
    var range, selection;
    if (document.createRange) {
      range = document.createRange(); //Create a range (a range is a like the selection but invisible)
      range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
      range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
      selection = window.getSelection(); //get the selection object (allows you to change selection)
      selection.removeAllRanges(); //remove any selections already made
      selection.addRange(range); //make the range you have just created the visible selection
    }
    else if (document.selection) {
      range = document.body.createTextRange(); //Create a range (a range is a like the selection but invisible)
      range.moveToElementText(contentEditableElement); //Select the entire contents of the element with the range
      range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
      range.select(); //Select the range (make it the visible selection
    }
  };

  var showElement = function(element) {
    element.removeClass('hidden');
  };

  var hideElement = function(element) {
    element.addClass('hidden');
  }

  var toggleElement = function(element) {
    element.hasClass('hidden') ? show(element) : hide(element);
  };

  var markActive = function(listItemElement, listElement) {
    if (listElement !== undefined) {
      var children = listElement.children();
      for (var i = 0; i < children.length; i++) {
        $(children[i]).removeClass('active');
      }
    }
    listItemElement.addClass('active');
  };

  var fetchPreview = function(url, endpointURL, successCallback, failureCallback) {
    if (validator.isURL(url)) {
      $.get(endpointURL, {
        'url': url
      }, function(data) {
        var html = data['html'].trim();
        if (html != '') {
          successCallback(html);
        } else {
          failureCallback('HTML not valid');
        }
      });
    } else {
      failureCallback('URL not valid');
    }
  };

  return {
    readURL: readURL,
    stripTags: stripTags,
    moveCursorToEndOfContentEditable: moveCursorToEndOfContentEditable,
    show: showElement,
    hide: hideElement,
    toggle: toggleElement,
    markActive: markActive,
    fetchPreview: fetchPreview
  };
})();
