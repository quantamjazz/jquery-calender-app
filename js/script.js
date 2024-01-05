$(document).ready(function() {
  // Set the current date
  var currentDate = dayjs().format('DD, MM, YYYY');
  $('#currentDay').text(currentDate);

  // Load events from local storage
  $('.time-block').each(function() {
      var eventTime = $(this).attr('id');
      var eventText = localStorage.getItem(eventTime);
      if (eventText !== null) {
          $(this).find('.event-text').val(eventText);
      }
  });

  // Color-code time blocks
  var currentHour = dayjs().hour();
  $('.time-block').each(function() {
      var blockHour = parseInt($(this).attr('id').replace('hour-', ''));
      if (blockHour < currentHour) {
          $(this).addClass('past'); 
      } else if (blockHour === currentHour) {
          $(this).addClass('present'); 
      } else {
          $(this).addClass('future'); 
      }
  });

  // Add event listener for save buttons here
  $('.saveBtn').on('click', function() {
    var eventText = $(this).siblings('.event-text').val(); // Retrieves the event text from the input field
    var eventTime = $(this).parent().attr('id'); // Retrieves the id of the parent element, which indicates the time block
    localStorage.setItem(eventTime, eventText); // Saves the event text in local storage with

});
