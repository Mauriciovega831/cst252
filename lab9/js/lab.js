/*
 * Author: Mauricio Vega (mauvega@csumb.edu)
 * Created: March 2nd
 * License: Public Domain
 */

 window.onload = function () {

     // your script here

    // Use getElementById() to find your output <div> and assign it to a variable outputEl (step 1)
    var outputEl = document.getElementById("output");
    console.log("outputEl: ", outputEl);

    // Create a new element with document.createElement("p") and assign it to a variable new1El (step 2)
    var new1El = document.createElement("p");

    // Change the html attribute of new1El to say "something new.""
    new1El.innerHTML = "Hello Everyone.";
    new1El.id = "new-one";

    // Create a new element with document.createElement("p") and assign it to a variable new1El
    var new2El = document.createElement("p");
    new1El.id = "new-two";

    // Change the html attribute of new1El to say "something else.""
    new2El.innerHTML = "Bye Everyone.";

    // Append both new elements one at a time using appendChild() (step 3)
    outputEl.appendChild(new1El);
    outputEl.appendChild(new2El);

    // Change the css attributes of at least two elements of your page
    // we do some stuff
    // new1El.style.color = "blue";
    // outputEl.style.border = "dashed 1px red";
    new1El.style.fontSize = "30pt";
    new2El.style.color = "blue";
    outputEl.className = "changed";


 }
