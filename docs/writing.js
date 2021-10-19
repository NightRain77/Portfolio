window.addEventListener('DOMContentLoaded',bunny,false);

function bunny() {
    var buttons = document.getElementsByTagName("button")           
buttons[0].addEventListener('click', changeColor,false)             
buttons[1].addEventListener('click', changeColor2, false)           
}

document.getElementById("myBtn").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}