
// IMPORTANTE: pasar todo a jQuery, comentar y ordenar!!
// falta popup form de botón "contactar"

// Slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}

// Colour-changing heart
var heart = $("#heart");
var isHeartRed = window.localStorage.getItem("isRed");

//Storing colour in browser
function colour() {
  if (heart.hasClass("red-heart") === true) {
      localStorage.setItem("isRed", "true"); 
      isHeartRed = window.localStorage.getItem("isRed");
    }
  else {
      localStorage.setItem("isRed", "false");
      isHeartRed = window.localStorage.getItem("isRed");
    }
  }
  
function colourChange() {
    heart.toggleClass("red-heart");
    colour();
  }
  
heart.click(colourChange);

// Limiting characters in price
$("#number").on("keydown paste", function(event) {
  if($(this).text().length === 8 && event.keyCode != 8) { 
    event.preventDefault();
  }
});

//Storing price in browser
var price = $("#number");
price.focusout(()=> window.localStorage.setItem("priceValue", price.text()));

// When browser initializes
if (isHeartRed == "true") {
  heart.addClass("red-heart");
  }
else {
  heart.removeClass("red.heart");
  }

price.text(window.localStorage.getItem("priceValue"));