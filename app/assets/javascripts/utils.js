var Utils = (function() {
  var fetchPreview = function(content, successCallback, failureCallback) {
    if (validator.isURL(content)) {
      $.get('/previews', {
        'url': content
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

  var stripTags = function(html) {
    return html ? html.replace(/<(?!br\s*\/?)[^>]+>/g, '') : '';
  };

  return {
    fetchPreview: fetchPreview,
    stripTags: stripTags
  }
})();
