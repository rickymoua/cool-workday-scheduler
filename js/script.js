
  // Date and time using moment.js
  var currentHourDate = moment().format('dddd Do MMMM YYYY hh:mm:ss a');

function date_time() {
    now = moment().format('dddd Do MMMM YYYY hh:mm:ss a');
    document.getElementById('time-display').innerHTML = now;
    setTimeout(function () { date_time(); }, 
    
    1000);
}
  date_time();
  // hours variables

  var nine = $("#9am");
  var ten = $("#10am"); 
  var eleven = $("#11am");
  var twelve = $("#12pm");
  var one = $("#13pm");
  var two = $("#14pm");
  var three = $("#15pm");
  var four = $("#16pm");
  var five = $("#17pm");

  var hourSpan;
  var hour = moment().hours();
  var userInput;


function initPage() {

    var init9 = JSON.parse(localStorage.getItem("9am  ")); nine.val(init9);
    
    var init10 = JSON.parse(localStorage.getItem("10am")); ten.val(init10);

    var init11 = JSON.parse(localStorage.getItem("11am")); eleven.val(init11);

    var init12 = JSON.parse(localStorage.getItem("12pm")); twelve.val(init12);

    var init1 = JSON.parse(localStorage.getItem("1pm  ")); one.val(init1);
 
    var init2 = JSON.parse(localStorage.getItem("2pm  ")); two.val(init2);
    
    var init3 = JSON.parse(localStorage.getItem("3pm  ")); three.val(init3);

    var init4 = JSON.parse(localStorage.getItem("4pm  ")); four.val(init4);

    var init5 = JSON.parse(localStorage.getItem("5pm  ")); five.val(init5);
    }

function background () {
    
    $(".form-control").each(function () {
        var timeTest = parseInt($(this).attr("id")); 
        hour = parseInt(hour);

        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else { 
            $(this).addClass("present"); 
        }
    });
}

    $(document).ready(function () {
        initPage()
        background()
    });

    $(document).ready(function () {
        $(".saveBtn").on("click", function () {
            
            var text = $(this).siblings(".form-control").val();
            var time = $(this).siblings(".input-group-text-hour").text().trim();
            localStorage.setItem("text", "JSON.stringify(text)");
        });
    });
  