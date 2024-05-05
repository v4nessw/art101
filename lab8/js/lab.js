// index.js - Lab 8: Anon Functions and Callbacks
// Author: Vanessa Wang
// Date: 5 May 2024

function isEven(x){
  return (x % 2 == 0);
}

//test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [15, 32, 9, 70, 64, 734, 900]
console.log("My array", array);

var result =  array.map(isEven);
//should return [false, true, false, true, true, true, true]
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
  return x ** 0.5;
})
//should return [[3.872983346207417, 5.656854249492381, 3, 8.366600265340756, 8, 27.09243436828813, 30]
console.log("Squareroot of array:", result);

