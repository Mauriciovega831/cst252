/*
 * Author: Mauricio Vega <mauvega@csumb.edu>
 * Created: 15 February
 * License: Public Domain
 */

// Define Variables
myTransport = ["Nissan Altima", "bike", "rides from friends", "electric scotter"];

myMainRide = {
    make: "Nissa",
    model : "Altima",
    color : "light blue",
    year : 2011,
    age : function() {
        return 2021 - this.year;
    }
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
document.writeln("The age of my ", myMainRide.model, " is ", myMainRide.age(), " years.");
