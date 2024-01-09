$(document).ready(function() {
    // Set the current date
    var currentDate = dayjs().format('dddd, DD, MM, YYYY');
    $('#currentDay').text(currentDate);

    // Dynamically create time blocks
    const timeBlockContainer = $('.container'); // jQuery selector
    const hours = ['8 AM', '9 AM', '10 AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM' ];

    hours.forEach(hour => {
        const hourFormatted = hour.replace(' ', '');
        const timeBlockHtml = `
            <div class="time-block" id="${hourFormatted}">
                <span class="hour">${hour}</span>
                <textarea class="event-text" id="event-${hourFormatted}" name="event-${hourFormatted}"></textarea>
                <div class="button-container">
                    <button class="saveBtn">Save</button>
                    <button class="clearFieldsBtn">Clear</button>
                </div>
            </div>
        `;
        timeBlockContainer.append(timeBlockHtml); // Use jQuery's append
    });

    // Event listener for save buttons using event delegation
    $(document).on('click', '.saveBtn', function() {
        var eventText = $(this).siblings('.event-text').val();
        var eventTime = $(this).closest('.time-block').attr('id');
        localStorage.setItem(eventTime, eventText);
    });

    // Event listener for clear buttons using event delegation
    $(document).on('click', '.clearFieldsBtn', function(event) {
        event.preventDefault();
        $(this).siblings('.event-text').val(""); // Clear only the associated textarea
    });

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
});
