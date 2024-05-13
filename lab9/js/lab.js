/*
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page.

Requirements: jQuery must be loaded for this script to work.

// Author: Vanessa Wang
// Date: 12 May 2024
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
});

// add button to problems section
$("#problems").append("<button id='button-problems'>Make Special</button>");

// add a click listener to the problems button
$("#button-problems").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#problems").toggleClass("special");
});

// add button to results section
$("#results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the results button
$("#button-results").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#results").toggleClass("special");
});

// creating the button for each special-sections
$(".special-sections").append("<button class = 'make-special'>Make Special</button>");

// adding a click event listener to all buttons with the special-sections class
$(".special-sections button").click(function(){
  //Toggling the special class when button is clicked
  $(this).parent().toggleClass("special");
});