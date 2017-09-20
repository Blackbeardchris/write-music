
var txtbox = document.getElementsByClassName("txtbox");
var output = document.querySelector(".output");

var htmlCode = txtbox.value;

var reset = document.getElementById("reset");

function drawOutput() {
    output.innerHTML = txtbox.value;
}
reset.addEventListener("click", function() {
    
}


txtbox.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
//HERE
var htmlInput = document.querySelector(".html-input");
var cssInput = document.querySelector(".css-input");
var reset = document.getElementById("reset");
var htmlCode = htmlInput.value;
var cssCode = cssInput.value;
var output = document.querySelector(".output");

var styleElem = document.createElement('style');
var headElem = document.querySelector('head');
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function() {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);






