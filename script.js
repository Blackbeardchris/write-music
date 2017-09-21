
var txtbox = document.getElementsByClassName("textarea");
var output = document.querySelector(".output");

var htmlCode = txtbox.value;

var reset = document.getElementById("reset");

function drawOutput() {
    output.innerHTML = txtbox.value;
}
reset.addEventListener("click", function() {
    
}


textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);

function output() {
    alert("testing TextArea");
}





