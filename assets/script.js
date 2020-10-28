$(document).ready(function() {
  
let timeDate = document.querySelector("#currentDay")

timeDate.textContent = moment().format("dddd, MMMM Do YYYY");

let timeNow = parseInt(moment().format("H"))

let currentHour = document.querySelectorAll(".time-block")

console.log(typeof timeNow)

for (let i = 0; i < currentHour.length; i++) {
    if(parseInt(currentHour[i].id.slice(4)) === timeNow) {
        $(currentHour[i]).addClass("present")
    }
    else if(parseInt(currentHour[i].id.slice(4)) > timeNow) {
        $(currentHour[i]).addClass("future")
    }
    else(parseInt(currentHour[i].id.slice(4)) < timeNow) 
        $(currentHour[i]).addClass("past")
    }


  });