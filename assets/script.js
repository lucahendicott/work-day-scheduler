$(document).ready(function() {
  
let timeDate = document.querySelector("#currentDay")
let currentHour = document.querySelectorAll("textarea")
let saveBtn = document.querySelector("button")
let timeNow = parseInt(moment().format("H"))

timeDate.textContent = moment().format("dddd, MMMM Do YYYY");


// console.log(typeof timeNow)

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


    // function saveToLocalStorage (){
    //     localStorage.setItem(timeNow, JSON.stringify(currentHour.textValue))
    // }
    // function getFromLocalStorage (){
    //     JSON.parse(localStorage.getItem(currentHour.textValue))
    // }
    // window.localStorage.setItem(JSON.stringify())
    // JSON.parse(localStorage.getItem())

    saveBtn.addEventListener("click",saveToLocalStorage)

  });