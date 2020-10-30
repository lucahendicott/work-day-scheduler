$(document).ready(function() {

    //set up variables with query selectors
let timeDate = $("#currentDay")
let currentHour = $("textarea")
let timeNow = parseInt(moment().format("H"))

//primary function kicking things off 
function primaryFunk(){
    
getFromLocalStorage()

timeDate.textContent = moment().format("dddd, MMMM Do YYYY");

//loop to run through all text areas followed by conditionals to set the color of each text area according to the current time.
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

    //for loop to add event listener on all buttons
    let elements = $("button");   
    for(let i = 0, len = elements.length; i < len; i++) {   

    elements[i].addEventListener("click", saveToLocalStorage);
    }
    }

    //function to save the value in the text area to local storage
    function saveToLocalStorage() {
      let p = this.id
      let x = "#hour" + p
      let w = document.querySelector(x).value
      localStorage.setItem(x, w)
      
    }
  
    //function to get saved items from local storage, keeping text area value displayed when pafe refreshes
    function getFromLocalStorage(){
        for (let i = 9; i <= 19; i++) {
        let x = "#hour" + i
        if(localStorage.getItem(x)){
            let w = (localStorage.getItem(x))
            let p = document.querySelector(x)
            p.value = w
        }
        }  
    }
    primaryFunk()
})
