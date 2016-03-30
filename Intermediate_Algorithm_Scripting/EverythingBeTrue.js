/*
WHAT DID WE LEARN?
The functionality of returning inside and outside
of loops, etc.
If (this part returns a boolean if no equal)
If (!this exclamation reverses the boolean)

Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


{ user: 'Tinky-Winky', sex: 'male' }
{ user: 'Dipsy', sex: 'male' }
{ user: 'Laa-Laa', sex: 'female' }
{ user: 'Po', sex: 'female' }

*/


function every(collection, pre) {
var testArray = [];
var newArray = [];

// Iterate through collection.
for (var i = 0; i < collection.length; i++) {
  if (!collection[i][pre]) {
    return false;
  }
}
return true;
}
every([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
