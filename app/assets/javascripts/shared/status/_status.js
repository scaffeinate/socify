// Place all the behaviors and hooks related to the matching view here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  var tabsSection = $('#status-block #tabs-section ul');
  var tabLink = tabsSection.children('li').children('a');
  var attachmentSection = $('#status-block #attachment-section');

  tabLink.click(function(e) {
    e.preventDefault();
    var mode = $(this).attr('data-status-mode');
    StatusUtil.markActive($(this).parent(), tabsSection);

    if (mode === 'status') {
      StatusUtil.hide(attachmentSection);
    } else if (mode === 'photo') {
      StatusUtil.show(attachmentSection);
    }
  });
});
