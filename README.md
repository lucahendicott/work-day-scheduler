# Work Day Planner

This is a simple work day planner application. When the user launches the app in their browser, they are presented with time blocks from 9am - 7pm and the top of the page displays the current date. 

The time blocks are color coded by time. whichever hour it currently is for the user, that block is red. Any blocks in the future are green and blocks in the past are gray. 

The applications function is simply saving whatever the user enters into any text area to local storage upon clicking the "save" button. It also recieves all the saved local storage items upon refreshing the page. That way it holds all their plans for the day even if they close the page.

## Under The Hood

The directory for this app includes an HTML, CSS and JS file. The HTML is linked to bootsrap and laid out with some simple divs that hold the time, a text area and a save button for each time block. 

In the JS file, I've motly used vanilla JS along with a splash of jQuery syntax. The funcitons to change the text block colors are in this file, they call to add the propper classes created in CSS to recieve the correct colors for the text blocks according to time. 

I used moment.js to display the current date and to track each row by hour to display the proper colors in the text areas. 

I created a function to save to local storage when you click the save button. Also to get from local storage so that the text blocks hold whatever the user saves in them upon reloading the application.

## Getting Started 

This application runs as is in the browser. No downloads or installs needed.

## Resources

[Moment Js Display Docs](https://momentjs.com/docs/#/displaying/)<br>
[Changing Background Colors](https://stackoverflow.com/questions/46972901/changing-the-background-color-at-different-hours-of-the-day-in-javascript/46973019)<br>
[Local Storage Help](https://www.taniarascia.com/how-to-use-local-storage-with-javascript/)

## Deployed App

[Let's plan your work day!](https://lucahendicott.github.io/work-day-scheduler/)
