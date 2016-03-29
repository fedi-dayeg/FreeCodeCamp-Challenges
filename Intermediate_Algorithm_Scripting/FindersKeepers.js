function find(arr, func) {
var myArray = [];

// Loop through array.
for (var i = 0; i < arr.length; i++) {
  // If array element in function returns true,
  if (func(arr[i]) === true) {
    // Push array element to myArray.
    myArray.push(arr[i]);
}
}
// Return first element in myArray.
return myArray[0];
}

// This is the input for our function.
find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });

/*
Finders Keepers

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.filter()
*/
