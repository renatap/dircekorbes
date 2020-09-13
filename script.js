import { data } from './obras.js';

$(document).ready(function(){

$.each(data.obras, function(i, value){ 
  console.log(data.obras[i])
  $("#content").append("<div class='showcase fade'><img src='" + data.obras[i].url + "' class='img' /><br><leg><i>" + data.obras[i].nome + "</i>, " + data.obras[i].ano + "</leg></div>");
  $("#gallery").append("<div class='imagemGaleria'><img src='" + data.obras[i].url + "' class='imgGallery-" + data.obras[i].orientation + "' /><div class='legendaGaleria'>" + data.obras[i].nome + ", " + data.obras[i].ano + "</div></div>");
}
);
showSlides(slideIndex);

});



var slideIndex = 1;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("showcase");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
} 

function plusSlides(n) {showSlides(slideIndex += n)};

function currentSlide(n) {showSlides(slideIndex = n)};

function hamburgerMenu() {
  var x = document.getElementById("menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}


// make second slideshow script for the gallery section: when I click at a collection image, 
// it takes me to a slideshow page where images don't change automatically, and the colection thumbnails show at the bottom for larger screens.

// fazer a legenda aparecer só quando o mouse vai em cima (tentei javascript e nao deu. tentar com css de novo)

// fazer com que em telas menores, quando na horizontal aparece apenas 1 ou duas colunas.

// pegar as coleções de imagens e começar de fato a alimentar o site, pra ver como vou apresentar as seções, como vou separar os JSON em partes.

// fazer o JSON um arquivo separado que a Dirce possa preencher.

// como deixar o site mais modular: em vez de colocar o menu em todas as paginas, linkar uma função JS que faz o append do menu.
