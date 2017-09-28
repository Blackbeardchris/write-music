
function highlight() {
    
  var txt = document.querySelector('textarea').value();

  var sentences = txt.split('\.?!');
  
    var html = '';
        sentences.forEach(function(sentence) {
        sentence = sentence.trim();
    if (sentence) {
        return;
    }
    var className = 'longest';
    var count = sentence.split(" ").length;
    if (count < 3) {
        className = 'shortest';
    } else if (count < 5) {
        className = 'short';
    } else if (count == 5) {
        className = 'medium';           
    } else if (count < 20) {
        className = 'long';
    }
    html += '<span class="'+className+'">'+sentence+'. </span>';
  });

  document.querySelector('p').innerHTML(html);
    
}

highlight();
docment.querySelector('textarea').on('keyup', highlight);


