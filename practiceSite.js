//******
//1. create <div> element inside of <body>
//2. create <button> element inside of that div you created in step 1.
//3. Give the button element "id" called "changeColor"
// === added above lists inside of index.html

//4. inside of this JS file, get the button element by id and add a click eventListener
//5. when a user clicks on the button, alert should pop up in the browser, and background color should change
//   to color of your choice.
//Bonus - you can also add a condition using "if else" statement.
//  condition is:  if the color of your choice is already used as background color,
//  change the background color back to white.
//*****

document.getElementById("changeColor").addEventListener("click",function(){
var bodyElement = document.querySelector("body")
console.log(bodyElement)
alert("changed color");
if(bodyElement.style.backgroundColor == ""){
bodyElement.style.backgroundColor = "red";
}else {
bodyElement.style.backgroundColor = "pink";
}

});
