// add event listener to button
$("#thing1-button").click(function(){
	$("#thing2-button").toggleClass("george");
})

// add event listener to button
$("#thing2-button").click(function(){
  $("#thing1-button").toggleClass("fred");
})

// add event listener to button
$("#thing3-button").click(function(){
  $("#thing3-button").toggleClass("mauri");
})

$("#submit").click(function(){
	// pure JS
	//var fullname = document.getElementById("full-name").value;

  // jQuery
  var fullname = $("#fullname").val();
  $("#replace").html(fullname + "'s");
  $("#thing1-button").html(fullname + " 1");
  $("#thing2-button").html(fullname + " 2");
  $("#thing3-button").html(fullname + " 3");

})
