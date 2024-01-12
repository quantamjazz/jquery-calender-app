$(document).ready(function () {
  // Set the current date
  var currentDate = dayjs().format("dddd, DD, MM, YYYY");
  $("#currentDay").text(currentDate);

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

// Clear button function for clearing content and local storage
$(".clearFieldsBtn").click(function (event) {
  event.preventDefault();
  $(".event-text").val("");
  localStorage.clear();
});},)

$(".saveBtn").on("click", function () {
  var eventText = $(this).siblings(".event-text").val();
  var eventTime = $(this).parent().attr("id");
  localStorage.setItem(eventTime, eventText);

  // Show notification
  $("#notification")
    .text("Event added to " + eventTime)
    .addClass("show");

  // Hide notification after 3 seconds
  setTimeout(function () {
    $("#notification").removeClass("show");
  }, 3000);
});