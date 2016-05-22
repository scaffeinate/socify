// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  $('[id="comment_text"]').atwho({
	  at: '@',
	  data: "/users/22/mentionable.json",
	  insertTpl: '${name}',
	  displayTpl: '<li data-id="${id}"><span>${name}</span></li>',
	  limit: 15
  });
});