
$(document).ready(function() {
    $("#gen").on("click", function() {
      $.getJSON("quotes.json", function(json) {
        
        var index = Math.floor(Math.random()*json.length);
        var quote = "\""+json[index]["quote"]+"\"";
        var author = "-"+json[index]["author"];
        
        var tweet = quote + author;
        var hashtag = "quotes";
        var related = "freecodecamp";
        
        $("#tweet").attr('href', 'https://twitter.com/intent/tweet?hashtags='+hashtag+'&related='+related+'&text=' + window.encodeURIComponent(quote+" "+author));
        $("#quote, #author").fadeOut(function() {
          $("#quote").html(quote).fadeIn(750);
          $("#author").html(author).fadeIn(750);
        });
          
      });
    });
  });
