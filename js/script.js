$(document).ready(function() {
    // Set the current date
    var currentDate = dayjs().format('DD, MM, YYYY');
    $('#currentDay').text(currentDate);

    // Load and color-code events
    var currentHour = dayjs().hour();
    $('.time-block').each(function() {
        var blockHour = parseInt($(this).attr('id').replace('hour-', ''));
        var eventText = localStorage.getItem($(this).attr('id'));
        
        if (eventText) {
            $(this).find('.event-text').val(eventText);
        }

        if (blockHour < currentHour) {
            $(this).addClass('past');
        } else if (blockHour === currentHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    });

    // Save button event listener
    $('.saveBtn').on('click', function() {
        var eventText = $(this).siblings('.event-text').val();
        var eventTime = $(this).parent().attr('id');
        localStorage.setItem(eventTime, eventText);
    });

    // Clear button function for clearing content and local storage
    $("#clearFieldsBtn").click(function(event) {
        event.preventDefault();
        $('.event-text').val("");
        localStorage.clear();
    });
});
