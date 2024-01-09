$(document).ready(function () {
  // Set the current date
  var currentDate = dayjs().format("dddd, DD, MM, YYYY");
  $("#currentDay").text(currentDate);

  const timeBlockContainer = $(".container");

  const hours = [
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
  ];

  hours.forEach((hour) => {
    const hourFormatted = hour.replace(" ", "");
    const timeBlockHtml = `
                <div class="time-block" id="${hourFormatted}">
                    <span class="hour">${hour}</span>
                    <textarea class="event-text" id="event-${hourFormatted}" name="event-${hourFormatted}"></textarea>
                    <button class="saveBtn">Save</button>
                    <button class="clearFieldsBtn">Clear</button>
                </div>
            `;
    timeBlockContainer.append(timeBlockHtml);
  });
});

// Load and color-code hours
var currentHour = dayjs().hour();
$(".time-block").each(function () {
  var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
  var eventText = localStorage.getItem($(this).attr("id"));

  if (eventText) {
    $(this).find(".event-text").val(eventText);
  }

  if (blockHour < currentHour) {
    $(this).addClass("past");
  } else if (blockHour === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

// Save button event listener
$(".saveBtn").on("click", function () {
  var eventText = $(this).siblings(".event-text").val();
  var eventTime = $(this).parent().attr("id");
  localStorage.setItem(eventTime, eventText);
});

// Clear button function for clearing content and local storage
$("#clearFieldsBtn").click(function (event) {
  event.preventDefault();
  $(".event-text").val("");
  localStorage.clear();
});

  // Show notification
  $("#notification")
    .text("Event added to " + eventTime)
    .addClass("show");

  // Hide notification after 3 seconds
  setTimeout(function () {
    $("#notification").removeClass("show");
  }, 3000);
});
