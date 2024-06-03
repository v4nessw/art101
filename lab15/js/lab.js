/*
lab.js - This simple JavaScript/jQuery script gets a value from ann input field and outputs a modified version.

Requirements: jQuery must be loaded for this script to work.

Author: Vanessa Wang
Date: 2 June 2024
*/

// Add a click event to the button
$("#activate").click(function() {
  // Using the core $.ajax() method to fetch data from the Chuck Norris API
  $.ajax({
      // The URL for the request (Chuck Norris API endpoint)
      url: "https://api.chucknorris.io/jokes/random",
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType: "json",
      // What do we do when the API call is successful
      //  all the action goes in here
      success: function(data) {
          console.log(data);
          // Display the joke in the div with id "output"
          $("#output").html(data.value);
      },
      // What we do if the API call fails
      error: function(jqXHR, textStatus, errorThrown) {
          // do stuff
        console.log("Error:", textStatus, errorThrown);
          // Display an error message
          $("#output").html("Error: " + textStatus + " - " + errorThrown);
      }
  });
});