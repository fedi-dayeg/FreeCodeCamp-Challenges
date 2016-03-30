/*
Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, add(2, 3) should return 5, and add(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = add(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Arguments object
*/

function add() {
var args = Array.prototype.slice.call(arguments);

  // If there's no args[1] and args[0] is an integer,
  if (!args[1] && Number.isInteger(args[0])) {
    // Return function that expects one argument and returns sum.
    return function(value) {
      if (Number.isInteger(value)) {
      return value + args[0];
    } else {
      return undefined;
    }
    };
  }
  // If two arguments are provided.
  else if (Number.isInteger(args[0]) && Number.isInteger(args[1])){
    // Add the two arguments.
    return args[0] + args[1];
  }
  else {
    return undefined;
  }
}

add(2)([3]);
