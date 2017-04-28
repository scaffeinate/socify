// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function () {
  var friends_calendar = $('#calendar').fullCalendar({
    defaultView: 'month',
    events: {
      url: '/events/calendar',
      type: 'GET',
      error: function () {
        alert('There was an error while fetching events.');
      }
    }
  });
});
