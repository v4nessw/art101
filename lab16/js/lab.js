/*
lab.js - This simple JavaScript/jQuery script gets a value from ann input field and outputs a modified version.

Requirements: jQuery must be loaded for this script to work.

Author: Vanessa Wang
Date: 6 June 2024
*/

$.ajax({
  url: "https://xkcd.com/info.0.json",
  type: "GET",
  dataType: "json",
  success: function(comicObj) {
      console.log(comicObj); // Debugging: Check the data received

      // Create a title section using the comicObj.title key
      var title = $('<h1>').text(comicObj.title);
      $('#output').append(title);

      // Create an image tag using the comicObj.img key
      var image = $('<img>')
        .attr('src', comicObj.img)
        .attr('alt', comicObj.alt)
        .attr('title', comicObj.alt);
      $('#output').append(image);
  },
  error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown); // Debugging: Check for errors
  }
});