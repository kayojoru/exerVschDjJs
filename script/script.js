var theSquare = document.getElementById("square")

theSquare.addEventListener("mouseover", function() {
    theSquare.style.backgroundColor = "blue"
});
theSquare.addEventListener("mouseout", function() {
    theSquare.style.backgroundColor = "black"
});
theSquare.addEventListener("mousedown", function() {
    theSquare.style.backgroundColor = "red"
});
theSquare.addEventListener("mouseup", function() {
    theSquare.style.backgroundColor = "yellow"
});
theSquare.addEventListener("dblclick", function() {
    theSquare.style.backgroundColor = "green"
});
document.addEventListener("scroll", function() {
    theSquare.style.backgroundColor = "orange"
});
document.addEventListener("keydown", function(event) {
  var colorkey = event.key
  console.log(colorkey)
  if(colorkey === "b"){theSquare.style.backgroundColor = "blue"}
  else if(colorkey === "r"){theSquare.style.backgroundColor = "red"}
  else if(colorkey === "y"){theSquare.style.backgroundColor = "yellow"}
  else if(colorkey === "g"){theSquare.style.backgroundColor = "green"}
  else if(colorkey === "o"){theSquare.style.backgroundColor = "orange"}
  else{theSquare.style.backgroundColor = "black"} 
  })