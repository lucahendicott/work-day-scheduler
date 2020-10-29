// $(document).ready(function() {
let timeDate = document.querySelector("#currentDay")
let currentHour = document.querySelectorAll("textarea")
let saveBtn = document.querySelector(".btnClass")
let timeNow = parseInt(moment().format("H"))
//add class "userInput" to text area div
function primaryFunk(){
getFromLocalStorage()

$(currentHour).addClass("userInput")

timeDate.textContent = moment().format("dddd, MMMM Do YYYY");

 for(let i = 0; i < currentHour.length; i++) {
    if(parseInt(currentHour[i].id.slice(4)) === timeNow) {
        $(currentHour[i]).addClass("present")
    }
    else if(parseInt(currentHour[i].id.slice(4)) > timeNow) {
        $(currentHour[i]).addClass("future")
    }
    else(parseInt(currentHour[i].id.slice(4)) < timeNow) 
        $(currentHour[i]).addClass("past")
    }

    var elements = document.querySelectorAll("button");   
    for(var i = 0, len = elements.length; i < len; i++) {   
        // console.log(i)

        elements[i].addEventListener("click", saveToLocalStorage);

    }
    }

    function saveToLocalStorage() {
    //   console.log(this)
      var p = this.id
      var x = "#hour" + p
      var w = document.querySelector(x).value
      localStorage.setItem(x, w)
        
    }

    function getFromLocalStorage(){
        for (let i = 9; i <= 19; i++) {
        var x = "#hour" + i
        if(localStorage.getItem(x)){
            var w = (localStorage.getItem(x))
            let p = document.querySelector(x)
            p.value = w
            console.log(w)
        }
        }
        
    }

    primaryFunk()