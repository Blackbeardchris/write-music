function music() {
var textAreaInput = document.getElementById("text").value;
    var output = document.getElementById("testingp");
    var result = document.getElementById('text').value.match( /[^.!?]+[.!?]+/g );
    var words = textAreaInput.split(" ");    

    alert(result[2].split(" ").length);  
    
}
var txxt = document.querySelector('textarea');
var out = document.querySelector('p');

function updateOutput() {
    out.innerHTML = txxt.value;

}
txxt.addEventListener('input', updateOutput);

