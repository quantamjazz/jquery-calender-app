$(document).ready(function() {
    var currentDate = dayjs().format('DD, MM, YYYY'); // Format the date as you like
    $('#currentDay').text(currentDate); // Sets the text of the element with id 'currentDay' to the current date
  });
  
  