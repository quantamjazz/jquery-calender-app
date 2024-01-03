$(document).ready(function() {
    var currentDate = dayjs().format('DD, MM, YYYY'); // Format the date as you like
    $('#currentDay').text(currentDate); // Sets the text of the element with id 'currentDay' to the current date
  });

  $(document).ready(function() {
    var currentHour = dayjs().hour(); // Get current hour as a number
  
    $('.time-block').each(function() {
      var blockHour = parseInt($(this).attr('id').replace('hour-', '')); // Get hour from the block's id
  
      if (blockHour < currentHour) {
        $(this).addClass('past'); // Add 'past' class
      } else if (blockHour === currentHour) {
        $(this).addClass('present'); // Add 'present' class
      } else {
        $(this).addClass('future'); // Add 'future' class
      }
    });
  });
  
  