/*
lab.js - This simple JavaScript/jQuery script gets a value from ann input field and outputs a modified version.

Requirements: jQuery must be loaded for this script to work.

Author: Vanessa Wang
Date: 26 May 2024
*/

// given a number and an object that looks like this:
//      {3: "Fizz", 5: "Buzz", 7: "Boom"}
// loops over the numbers and outputs the number and the matching text for factors
function fizzBuzzBoom(maxNums, factor0bj) {
    //iterate over all of our numbers
    for (var num=0; num<maxNums; num++) {
        // reset output string
        var outputStr = "";
        // iterate over the factors we got from the html
        for (var factor in factor0bj) {
            // check to see if this num is a multiple of factor
            if (num % factor == 0) {
                // if yes, then add the text to output string
                outputStr += factor0bj[factor];
            }
        }
        // now if we have words in outputStr, format it like this " - FizzBuzz!"
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max)
    if (! max) {
        reportError("You must provide maximum");
    }
})