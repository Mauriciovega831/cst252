/*
 * Author: Mauricio Vega <mauvega@csumb.edu>
 * Created: March 22
 * License: Public Domain
 */


function Vehicle(make, model, year, color, extras, name) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.name = name;
  this.info = function() {
    return this.color + " " + this.year + " " + this.make + " " +  this.model + " with " +  this.extras + " called " + this.name;
  }
}

var vehicles = [];

vehicles.push(new Vehicle("Dodge", "Charger", 2014, "Grey", "Muscle", "Sport Car"));
vehicles.push(new Vehicle("Nissan", "Altima", 2011, "Blue", "Gas Saver", "My first love"));

outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++) {
  var newEl = document.createElement("li");
  newEl.innerText = vehicles[i].info();
  outputEl.appendChild(newEl);
}
