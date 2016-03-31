/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()
*/

function steamroller(arr) {
var myArray = [];

myArray = arr.reduce(function(a,b) {
  if (Array.isArray(b)) {
     return a.concat(steamroller(b));
  } else {
  return a.concat(b);
}

}, []);

return myArray;
}

steamroller([1, [2], [3, [[4]]]]);
