//document.getElementById("imgSpread").transform = "translateX(20px)";

var slideIndex = 0;

function plusSlide(n){
  showSlide(slideIndex += n);
}

function showSlide(n){
  var slides = document.getElementsByClassName('slide');

  if (n >= slides.length) {slideIndex = 0}
  else if (n < 0) {slideIndex = (slides.length-1)}

  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "inline";
}

function offsetImgSpread(){
  var images = document.getElementsByClassName("overlay");

  for(i = 0; i < images.length; i++){
    var offset = i*(-30);
    images[i].style.transform = "translateX(" + offset.toString() + "px)";
  }
}
