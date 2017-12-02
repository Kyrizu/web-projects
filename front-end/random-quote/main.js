
$(document).ready(function() {
    $("#gen").on("click", function() {
      $.getJSON("quote.json", function(json) {
        
        var index = Math.floor(Math.random()*json.length);
        var quote = "\""+json[index]["quote"]+"\"";
        var author = "-"+json[index]["author"];
        
        $("#quote").html(quote);
        $("#author").html(author);
      });
    });
  });
