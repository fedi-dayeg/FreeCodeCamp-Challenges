var player;
$( document ).ready(function() {

// Declare global variable player.

  // If playerX button clicked, init assignX.
  document.getElementById("playerX").addEventListener("click", assignX);
  // If playerO button clicked, init assignO.
  document.getElementById("playerO").addEventListener("click", assignO);
    // Set player equal to X if this function is called.
    function assignX() {
      player = document.getElementById('playerX').value;
      document.getElementById('box').style = "display:flex;";
      document.getElementById('resetButton').style = "display:block;";
      document.getElementById('playerX').style = "display:none;";
      document.getElementById('playerO').style = "display:none;";
      document.getElementById('instructions').style = "display:none;";

    }
    // Set player equal to O if this function is called.
    function assignO() {
        player = document.getElementById('playerO').value;
        document.getElementById('box').style = "display:flex;";
        document.getElementById('resetButton').style = "display:block;";
        document.getElementById('playerO').style = "display:none;";
        document.getElementById('playerX').style = "display:none;";
        document.getElementById('instructions').style = "display:none;";
    }
});

function clickButton(btn) {
if (player == "X") {
  player2 = "O";
}
else if (player == "O") {
  player2 = "X";
}

  // PLAYER TURN
    // Add "X" value to button clicked.
    document.getElementById(btn).value = player;
    // Disable button from future clicking.
    document.getElementById(btn).disabled = true;
    // Check to see if there was a winner.
    winner();
    computerTurn();

  // COMPUTER TURN
    // Array of button ids.
    function computerTurn() {
    buttonNames = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7', 'button8', 'button9'];
    // Random button id from array.
    randomButton = buttonNames[Math.floor(Math.random() * buttonNames.length)];
    // If selected button is not disabled,
    if (document.getElementById(randomButton).disabled === false) {
        // Add "O" value to random button.
        document.getElementById(randomButton).value = player2;
        // Disable button from further clicking.
        document.getElementById(randomButton).disabled = true;
        // Check for winner.
    } // End if.
    // Else if button is disabled,
    else {
      // Redo computer's turn and try to click an enabled button.
      computerTurn();
    } // End of else.
} // End of computerTurn().
  winner();

}

function winner() {
// If X wins, alert "X Wins!".
if (
// Horizontal wins.
document.getElementById('button1').value == "X" &&
document.getElementById('button2').value == "X" &&
document.getElementById('button3').value == "X" ||
document.getElementById('button4').value == "X" &&
document.getElementById('button5').value == "X" &&
document.getElementById('button6').value == "X" ||
document.getElementById('button7').value == "X" &&
document.getElementById('button8').value == "X" &&
document.getElementById('button9').value == "X" ||
// Vertical wins.
document.getElementById('button1').value == "X" &&
document.getElementById('button4').value == "X" &&
document.getElementById('button7').value == "X" ||
document.getElementById('button2').value == "X" &&
document.getElementById('button5').value == "X" &&
document.getElementById('button8').value == "X" ||
document.getElementById('button3').value == "X" &&
document.getElementById('button6').value == "X" &&
document.getElementById('button9').value == "X" ||
// Diagonal wins.
document.getElementById('button1').value == "X" &&
document.getElementById('button5').value == "X" &&
document.getElementById('button9').value == "X" ||
document.getElementById('button3').value == "X" &&
document.getElementById('button5').value == "X" &&
document.getElementById('button7').value == "X"
)
{
  alert("X Wins!");
    // Disable all buttons at end of game.
    disableAll();
}
// Else if O wins, alert "O Wins!".
else if (document.getElementById('button1').value == "X" &&
document.getElementById('button2').value == "O" &&
document.getElementById('button3').value == "O" ||
document.getElementById('button4').value == "O" &&
document.getElementById('button5').value == "O" &&
document.getElementById('button6').value == "O" ||
document.getElementById('button7').value == "O" &&
document.getElementById('button8').value == "O" &&
document.getElementById('button9').value == "O" ||
// Vertical wins.
document.getElementById('button1').value == "O" &&
document.getElementById('button4').value == "O" &&
document.getElementById('button7').value == "O" ||
document.getElementById('button2').value == "O" &&
document.getElementById('button5').value == "O" &&
document.getElementById('button8').value == "O" ||
document.getElementById('button3').value == "O" &&
document.getElementById('button6').value == "O" &&
document.getElementById('button9').value == "O" ||
// Diagonal wins.
document.getElementById('button1').value == "O" &&
document.getElementById('button5').value == "O" &&
document.getElementById('button9').value == "O" ||
document.getElementById('button3').value == "O" &&
document.getElementById('button5').value == "O" &&
document.getElementById('button7').value == "O"
) {
  alert("O Wins!");
    // Disable all buttons at end of game.
    disableAll();
}
}

function disableAll() {
  document.getElementById('button1').disabled = true;
  document.getElementById('button2').disabled = true;
  document.getElementById('button3').disabled = true;
  document.getElementById('button4').disabled = true;
  document.getElementById('button5').disabled = true;
  document.getElementById('button6').disabled = true;
  document.getElementById('button7').disabled = true;
  document.getElementById('button8').disabled = true;
  document.getElementById('button9').disabled = true;
}

function enableAll() {
  document.getElementById('button1').disabled = false;
  document.getElementById('button2').disabled = false;
  document.getElementById('button3').disabled = false;
  document.getElementById('button4').disabled = false;
  document.getElementById('button5').disabled = false;
  document.getElementById('button6').disabled = false;
  document.getElementById('button7').disabled = false;
  document.getElementById('button8').disabled = false;
  document.getElementById('button9').disabled = false;
}

function reset() {
  document.getElementById('button1').value = "";
  document.getElementById('button2').value = "";
  document.getElementById('button3').value = "";
  document.getElementById('button4').value = "";
  document.getElementById('button5').value = "";
  document.getElementById('button6').value = "";
  document.getElementById('button7').value = "";
  document.getElementById('button8').value = "";
  document.getElementById('button9').value = "";
  enableAll();
  document.getElementById('box').style = "display:none;";
  document.getElementById('resetButton').style = "display:none;";
  document.getElementById('playerX').style = "display:inline-block;";
  document.getElementById('playerO').style = "display:inline-block;";
  document.getElementById('instructions').style = "display:block;";

}
