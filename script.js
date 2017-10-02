var txt = document.querySelector('textarea');
var out = document.querySelector('p');
txt.onkeyup = txt.onkeydown = function music() {
var textAreaInput = document.getElementById("text").value;
    var output = document.getElementById("testingp");
    var result = document.getElementById('text').value.match( /[^.!?]+[.!?]+/g );
        if (!result) {
        return;
    }
    var className = 'long';
    var words = textAreaInput.split(" ");   
    if (words < 3) {
        className = "short";
    } else if (words <= 5) {
        className = "medium";
    } else if (words < 20) {
        className = "long";
    }
    //alert(result[0].split(" ").length);
    out.innerHTML = txt.value;  
};


