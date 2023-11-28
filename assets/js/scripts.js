// Get the current date
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().hours("hh, mm, ss");

// Display the current date at the top of the calendar
$("#currentDay").text(currentDate);
$("#currentTime").text(currentHour);

// Function to determine if a time block is past, present, or future
function updateColors() {
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("data-hour"));

        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });
}

// Function to load saved events from local storage
function loadEvents() {
    $(".time-block").each(function () {
        var blockHour = $(this).attr("data-hour");
        var savedEvent = localStorage.getItem(blockHour);

        if (savedEvent) {
            $(this).children("textarea").val(savedEvent);
        }
    });
}

// Function to save events to local storage
$(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("data-hour");
    var eventText = $(this).siblings("textarea").val();
    console.log(hour, eventText);

    localStorage.setItem(hour, eventText);
});


// Update time block colors
updateColors();

// Load saved events
loadEvents();