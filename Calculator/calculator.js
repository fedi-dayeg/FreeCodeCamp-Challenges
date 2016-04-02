
var currentCount = [];
var numbersInCalculation = [];
var myNumber;
var output;
$( document ).ready(function() {


// The following process allows us to select multiple-digit-numbers
// Display them, and save them for later use.
// On click, push selected number to currentCount array.
// Then save joined version of currentCount to myNumber.
// But note that currentCount itself is not joined, remains intact.
// Then set display text equal to myNumber.

  $("#oneButton").on("click", function() {
    currentCount.push(1);
    myNumber = currentCount.join('');
    $("#display").text(myNumber);
  });
  $("#twoButton").on("click", function() {
    currentCount.push(2);
    myNumber = currentCount.join('');
    $("#display").text(myNumber);
  });
  $("#threeButton").on("click", function() {
    currentCount.push(3);
    myNumber = currentCount.join('');
    $("#display").text(myNumber);
  });
  $("#fourButton").on("click", function() {
    currentCount.push(4);
    myNumber = currentCount.join('');
    $("#display").text(myNumber);
  });
  $("#fiveButton").on("click", function() {
    currentCount.push(5);
    myNumber = currentCount.join('');
    $("#display").text(myNumber);
  });
  $("#sixButton").on("click", function() {
    currentCount.push(6);
    myNumber = currentCount.join('');
    $("#display").text(myNumber);
  });
  $("#sevenButton").on("click", function() {
    currentCount.push(7);
    myNumber = currentCount.join('');
    $("#display").text(myNumber);
  });
  $("#eightButton").on("click", function() {
    currentCount.push(8);
    myNumber = currentCount.join('');
    $("#display").text(myNumber);
  });
  $("#nineButton").on("click", function() {
    currentCount.push(9);
    myNumber = currentCount.join('');
    $("#display").text(myNumber);
  });
  $("#zeroButton").on("click", function() {
    currentCount.push(0);
    myNumber = currentCount.join('');
    $("#display").text(myNumber);
  });
  $("#decimalButton").on("click", function() {
    currentCount.push(".");
    myNumber = currentCount.join('');
    $("#display").text(myNumber);
  });

// OPERATORS

  $("#addButton").on("click", function() {
    numbersInCalculation.push(myNumber, "+");
    currentCount = [];
    myNumber = null;
    console.log(currentCount);
    console.log(numbersInCalculation);
  });
  $("#subtractButton").on("click", function() {
    numbersInCalculation.push(myNumber, "-");
    currentCount = [];
    myNumber = null;
    console.log(currentCount);
    console.log(numbersInCalculation);
  });
  $("#multiplyButton").on("click", function() {
    numbersInCalculation.push(myNumber, "*");
    currentCount = [];
    myNumber = null;
    console.log(currentCount);
    console.log(numbersInCalculation);
  });
  $("#divideButton").on("click", function() {
    numbersInCalculation.push(myNumber, "/");
    currentCount = [];
    myNumber = null;
    console.log(currentCount);
    console.log(numbersInCalculation);
  });
  $("#equalButton").on("click", function() {
    numbersInCalculation.push(myNumber);
    output = numbersInCalculation.join(' ');
    output = eval(output);
    if (output == "Infinity") {
      output = "Undefined";
    }
    $("#display").text(output);
    myNumber = null;
    console.log(numbersInCalculation);
  });
  $("#cButton").on("click", function() {
    numbersInCalculation = [];
    currentCount = [];
    myNumber = " ";
    $("#display").text(myNumber);
    console.log(numbersInCalculation);
  });








}); // End document ready.
