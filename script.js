// get current date and display it in header //
var currentDate = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDate);

// build colorCoding function to color text areas based on time //
function colorCoding() {
    // loop through each time block using each() method
    $(".time-block").each(function(hour, item) {
        // create variable for the current hour (using moment)
        var currentHour = moment().format("HH");
        // use parseInt function to take the string of current hours and convert them into integeers
        var currentInt = parseInt(currentHour);
        // use parseInt function to take the string of data-hour elements and conver them into integers
        var blockValue = parseInt($(item).data("hour"));
        // now one can compare the current hour to the data-time value attributed to the timeblocks since they are both integers
        if (blockValue === currentInt) {
            $(item).addClass("present")
        } else if (blockValue < currentInt) {
            $(item).addClass("past")
        } else {
            $(item).addClass("future")
        }
    });
}

// call the colorCoding() function
colorCoding();

// checks the time and reruns colorCoding() function
var reRun = window.setInterval(function(){
    changeColor();
  }, 15000);

  // get and render user input from local storage
  $(document).ready(function() {
    $(".description").each(function() {    
        var id = $(this).attr("id");
        var value = localStorage.getItem(id);
        $(this).val(value);
    }); 
  });

  // create event listener for save button that saves user input to local storage
  $(".saveBtn").on("click", function() {
    $(".description").each(function() {    
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
    });   
  });
