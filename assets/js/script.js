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

var today = moment()
$("#currentDay").text(today.format("dddd, MMMM Do"));

console.log(today)


renderLastTasks();


timeBlock.addEventListener("click", function(event){
    const isButton = event.target
    const selectedButton = isButton.dataset['hour'];
    if(!isButton){
        return;
    }
    if(selectedButton === '9'){
        localStorage.setItem("hour-9", hour9.value)
    }
    if(selectedButton === '10'){
        localStorage.setItem("hour-10", hour10.value)
    }
    if(selectedButton === '11'){
        localStorage.setItem("hour-11", hour11.value)
    }
    if(selectedButton === '12'){
        localStorage.setItem("hour-12", hour12.value)
    }
    if(selectedButton === '13'){
        localStorage.setItem("hour-13", hour13.value)
    }
    if(selectedButton === '14'){
        localStorage.setItem("hour-14", hour14.value)
    }
    if(selectedButton === '15'){
        localStorage.setItem("hour-15", hour15.value)
    }
    if(selectedButton === '16'){
        localStorage.setItem("hour-16", hour16.value)
    }
    if(selectedButton === '17'){
        localStorage.setItem("hour-17", hour17.value)
    }
   
})




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
//if time is in past turn grey 

//else if time is current highlight red

//else highlight red 

function turnColors9 (){
    var currentTime = moment().set('hour', 09);
    console.log(currentTime)
    if(currentTime < today){
        hour9.classList.add("past");
    }
    if(currentTime == today){
        hour9.classList.add("present")
    }
    if(currentTime > today){
        hour9.classList.add("future");
    }
}

function turnColors10 (){
    var currentTime = moment().set('hour', 10);
    console.log(currentTime)
    if(currentTime < today){
        hour10.classList.add("past");
    }
    if(currentTime == today){
        hour10.classList.add("present")
    }
    if(currentTime > today){
        hour10.classList.add("future");
    }
}

function turnColors11 (){
    var currentTime = moment().set('hour', 11);
    console.log(currentTime)
    if(currentTime < today){
        hour11.classList.add("past");
    }
    if(currentTime == today){
        hour11.classList.add("present")
    }
    if(currentTime > today){
        hour11.classList.add("future");
    }
}

function turnColors12 (){
    var currentTime = moment().set('hour', 12);
    console.log(currentTime)
    if(currentTime < today){
        hour12.classList.add("past");
    }
    if(currentTime == today){
        hour12.classList.add("present")
    }
    if(currentTime > today){
        hour12.classList.add("future");
    }
}

function turnColors13 (){
    var currentTime = moment().set('hour', 13);
    console.log(currentTime)
    if(currentTime < today){
        hour13.classList.add("past");
    }
    if(currentTime == today){
        hour13.classList.add("present")
    }
    if(currentTime > today){
        hour13.classList.add("future");
    }
}

function turnColors14 (){
    var currentTime = moment().set('hour', 14);
    console.log(currentTime)
    if(currentTime < today){
        hour14.classList.add("past");
    }
    if(currentTime == today){
        hour14.classList.add("present")
    }
    if(currentTime > today){
        hour14.classList.add("future");
    }
}

function turnColors15 (){
    var currentTime = moment().set('hour', 15);
    console.log(currentTime)
    if(currentTime < today){
        hour15.classList.add("past");
    }
    if(currentTime == today){
        hour15.classList.add("present")
    }
    if(currentTime > today){
        hour15.classList.add("future");
    }
}

function turnColors16 (){
    var currentTime = moment().set('hour', 16);
    console.log(currentTime)
    if(currentTime < today){
        hour16.classList.add("past");
    }
    if(currentTime== today){
        hour16.classList.add("present")
    }
    if(currentTime > today){
        hour16.classList.add("future");
    }
}

function turnColors17 (){
    var currentTime = moment().set('hour', 17);
    console.log(currentTime)
    if(currentTime < today){
        hour17.classList.add("past");
    }
    if(currentTime == today){
        hour17.classList.add("present")
    }
    if(currentTime > today){
        hour17.classList.add("future");
    }
}


turnColors9()
turnColors10()
turnColors11()
turnColors12()
turnColors13()
turnColors14()
turnColors15()
turnColors16()
turnColors17()