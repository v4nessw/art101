// index.js - Lab 6: Arrays and Objects
// Author: Vanessa Wang
// Date: 2 May 2024


//sortUserName - a function that takes user input and sorts the letters of their name
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArray);
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

// output
document.writeln("I've fixed your name: ",
  sortUserName(), "</br>");
