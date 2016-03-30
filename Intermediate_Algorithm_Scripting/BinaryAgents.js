/*
Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()
*/

function binaryAgent(str) {
var splitBinary;
var charCodes = [];
var myChars = [];
var myString;

// Split string into myArray.
splitBinary = str.split(' ');

// Iterate through myArray.
for (var i = 0; i < splitBinary.length; i++) {
  // Convert binary notation to char code notation.
  charCodes.push(parseInt(splitBinary[i], 2));
}
// charCodes is array of character codes.

// Iterate though charCodes array.
for (var j = 0; j < charCodes.length; j++) {
  // Convert char codes to string, push to myChars
  myChars.push(String.fromCharCode(charCodes[j]));
}
// myChars is an array of characters.

myString = myChars.join('');
return myString;

} // End of function.

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
