var saveButton = document.querySelector(".saveBtn");
var tasks = document.querySelectorAll("textarea");
var hour9 = document.querySelector("#hour-9");
var hour10 = document.querySelector("#hour-10");
var hour11 = document.querySelector("#hour-11");
var hour12 = document.querySelector("#hour-12");
var hour13 = document.querySelector("#hour-13");
var hour14 = document.querySelector("#hour-14");
var hour15 = document.querySelector("#hour-15");
var hour16 = document.querySelector("#hour-16");
var hour17 = document.querySelector("#hour-17");
var timeBlock = document.querySelector(".time-block");
var goodWork = document.querySelector(".description");
var $newI = $("<i class='fas fa-save'></i>")

 $(".saveBtn").append($newI)

//set current time and display date 
var today = moment()
$("#currentDay").text(today.format("dddd, MMMM Do"));


//Save last entered item and display task set 
$(".saveBtn").on("click", function(){
    var value = $(this).prev().val()
    var time = $(this).prev().attr("id")
    localStorage.setItem(time,value)
    $(".description").addClass("show")
    setTimeout(function(){
        $(".description").removeClass("show")
    },1500);
})

//Render last task from local storage 
function renderLastTasks () {

     var userInput9 = localStorage.getItem("hour-9")
    hour9.textContent = userInput9

    var userInput10 = localStorage.getItem("hour-10")
    hour10.textContent = userInput10

    var userInput11 = localStorage.getItem("hour-11")
    hour11.textContent = userInput11

    var userInput12 = localStorage.getItem("hour-12")
    hour12.textContent = userInput12

    var userInput13 = localStorage.getItem("hour-13")
    hour13.textContent = userInput13

    var userInput14 = localStorage.getItem("hour-14")
    hour14.textContent = userInput14

    var userInput15 = localStorage.getItem("hour-15")
    hour15.textContent = userInput15

    var userInput16 = localStorage.getItem("hour-16")
    hour16.textContent = userInput16

    var userInput17 = localStorage.getItem("hour-17")
    hour17.textContent = userInput17
}

renderLastTasks();


// time clock function 
function timeClock () {
    var currentTime = moment().hours();

    $(".time-block").each (function(){
        var blockHour = parseInt($(this).children().next().attr("id").split("-")[1]);
        if(blockHour<currentTime){
            $(this).addClass("past")
        }
        else if (blockHour === currentTime){
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass('future')
        }

    })
}

timeClock()

setInterval(timeClock, 15000)


