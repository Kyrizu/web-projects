
function getRandomRGB(num){
  var r = 0;
  var b = 0;
  var g = 0;
  var sum = r+b+g;
  
  do{
    r = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
  }while(sum % g < 30);
  
  var rr = 255 - r;
  var rg = 255 - g;
  var rb = 255 - b;
  
  return ['rgb('+r+','+g+','+b+')', 'rgb('+rr+','+rg+','+rb+')'];
}

function randomBackgroundColor(){
  var rgbArr = getRandomRGB();
  var rgb = rgbArr[0]
  var inverse_rgb = rgbArr[1];
  
  $("body").animate({backgroundColor: rgb}, 1000);
  $("#gen").animate({backgroundColor: rgb}, 350);
  $("#tweet").animate({backgroundColor: rgb}, 350); 
  $("h5").animate({color: rgb}, 1000);
  $(".quote").animate({color: rgb}, 1000);
  $(".fa-heart").animate({color: inverse_rgb}, 1000);
}

$(document).ready(function() {
  randomBackgroundColor();
  $("#gen").on("click", function(e) {
    var quote = "";
    var author = "";
    e.preventDefault();
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift();
        author = "-"+post.title;
        quote = (post.content);

        //Random colors 
        randomBackgroundColor(); 
        
        quote = '"'+$(quote).text()+'"';
        var tweet = quote+"%0A"+author;
        var hashtag = "quotes";
        var related = "freecodecamp";

        //tweeter button
        $("#tweet").attr('href', 'https://twitter.com/intent/tweet?hashtags='+hashtag+'&related='+related+'&text=' + (tweet));

        //quote fading
        $("#quote, #author").fadeOut(function() {
          $("#quote").html(quote).fadeIn(750);
          $("#author").html(author).fadeIn(750);
        });
      },
      cache: false
    });
  });
});
