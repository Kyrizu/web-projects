
function getRandomRGB(){
  var r = 0;
  var b = 0;
  var g = 0;
  var sum = r+b+g;
  
  do{
    r = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
  }while(sum % g < 30);
  
  return 'rgb('+r+','+g+','+b+')';
}

$(document).ready(function() {
    $("#gen").on("click", function() {
      $.getJSON("quotes.json", function(json) {
        
        var index = Math.floor(Math.random()*json.length);
        var quote = "\""+json[index]["quote"]+"\"";
        var author = "-"+json[index]["author"];
        
        //Random colors 
        var rgb = getRandomRGB();
        
        $("body").css('background', rgb);
        $("h5").css('color', rgb);
        $(".quote").css('color', rgb);
        $("#gen").css('background', rgb);
        $("#tweet").css('background', rgb);  
          
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
