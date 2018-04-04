/*
Program Name: Recipe Display 
Application Author: Zoe Patrick
Date: April 4
Filename: script.js */

/* global $ */

//displays the next element after the current target
        function display(event) {
         
         $(event.currentTarget) .next().fadeIn("slow");
         
         }//end of display
         
         
         
//attach even listener to h3 elements to invole display function when clicked 
     $("h3").click(display);
