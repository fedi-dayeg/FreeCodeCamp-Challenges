/*
WHAT DID WE LEARN?
If the end of .slice() is omitted, it will slice to the end of array.
We slice at an index number, not at a content number.


Drop it
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
Array.shift()
Array.slice()

*/


function drop(arr, func) {
var myArray = [];

// Loop through arr.
for (var i = 0; i < arr.length; i++) {
  // If func returns true at arr element,
  if (func(arr[i]) === true) {
    // Slice arr[i] to arr.length-1
    myArray = arr.slice(i);
    break;
    } // End of if.
  } // End of i loop.
  console.log(myArray);
} // End of function.

drop([1, 2, 3, 4], function(n) {return n >= 3;});
