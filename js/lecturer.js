/**** Used code from w3schools/howto/howto_js_slideshow_gallery.asp ****/

var slideIndex;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("lecturerSlides");
  let dots = document.getElementsByClassName("lecturerRef");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function parseURL(){
	if(window.location.hash){
		slideIndex = window.location.hash.substring(1);
        slideIndex = parseInt(slideIndex);
		showSlides(slideIndex);
	}
	else{
		slideIndex = 1;
		showSlides(slideIndex);
}
}
  