function find(arr, func) {
var num = 0;
var myArray = [];

for (var i = 0; i < arr.length; i++) {
  if (func(arr[i]) === true) {
  myArray.push(arr[i]);
}
}
return myArray[0];
}

find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
