/*
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page.

Requirements: jQuery must be loaded for this script to work.

// Author: Vanessa Wang
// Date: 12 May 2024
*/

// creating the button for each special-sections
$(".special-sections").append("<button class = 'make-special'>Make Special</button>");

// adding a click event listener to all buttons with the special-sections class
$(".special-sections button").click(function(){
  //Toggling the special class when button is clicked
  $(this).parent().toggleClass("special");
});