var txt = document.querySelector('textarea');
var out = document.querySelector('p');
txt.onkeyup = txt.onkeydown = function music() {
var textAreaInput = document.getElementById("text").value;
    //var output = document.getElementById("testingp");
    var result = document.getElementById('text').value.match( /[^.!?]+[.!?]+/g );
        if (!result) {
        return;
    }
    var className = 'long';
    //var words = textAreaInput.split(" ");
    
    var i = result.length;
    //console.log(i);
    var x = -1;
    var numofwords = 0;
    
    
    // Count number of words
    while (x <= i) {
        x++;
        numofwords = result[x].split(" ").length
        
        if (x != 0){
            numofwords--; // SUBTRACT 1
        }
    
        // CHANGE FROM HERE
        console.log(numofwords);
        out.innerHTML = txt.value;
    }
    
    
    
    
    
    
    /*
    if (words < 3) {
        className = "short";
    } else if (words <= 5) {
        className = "medium";
    } else if (words < 20) {
        className = "long";
    }
   */
    // console.log(result[0].split(" ").length);
    //out.innerHTML = txt.value; 
   /*
    out.innerHTML = txt.value;  
};

/*
var txt = document.querySelector('textarea');
var out = document.querySelector('p');
txt.onkeyup = txt.onkeydown = function music() {
    var textAreaInput = document.getElementById("text").value;
    //var output = document.getElementById("testingp");
    var result = document.getElementById('text').value.match( /[^.!?]+[.!?]+/g );
        if (!result) {
        return;
    }
    var className = 'long';
    // var words = textAreaInput.split(" "); 

    
    
    
    // result is an array of sentences. 
    // however result[0] needs a space at the start for this to work.
    
    // CODE TO ADD A SPACE IN result[0]
    
    
    
    // How many sentences? (length of result array)
    var i = result.length;
    //console.log(i);
    var x = -1;
    var numofwords = 0;
    
    
    // Count number of words
    while (x <= i) {
        x++;
        numofwords = result[x].split(" ").length
        
        if (x != 0){
            numofwords--; // SUBTRACT 1
        }
    
        // CHANGE FROM HERE
        console.log(numofwords);
    
    }
    
    
    
    
    
    
    /*
    if (words < 3) {
        className = "short";
    } else if (words <= 5) {
        className = "medium";
    } else if (words < 20) {
        className = "long";
    }
   */
    // console.log(result[0].split(" ").length);
    //out.innerHTML = txt.value; 
/*
*/
};
