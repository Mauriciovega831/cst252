// tic-tac-toe.js
// A tic-tac-toe game against the computer
//
// Author: Wes Modes <wmodes@csumb.edu>
// Date: 2021
// License: MIT 2.0

// Print the boart befor each turn
// return a formated string
function printBoard(board){
  // Create string to store output
  var output = '';
  console.log(board);
  // Loop through each row
  for (row=0; row<3; row++){
    // Loop through each space
    for(space=0; sapce<3; space++){
      // Print X, O, or space
      console.log(row*3 + space);
      output += board[row*3 + space];
      //Print a | between
      if (space < 2) output += '|';
    }
    // Print a newline at the end
    output += '\n';
    // Print a horizontal line between
    if (row < 2) output += '-----\n';
  }
  return output;
}
