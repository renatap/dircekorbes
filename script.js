var obras = [
  {
    url: 'https://i.postimg.cc/gjJx1y06/2-Pelas-Ruas-de-Bruxelas-0-98x0-98-bx-res.jpg',
    nome: 'Pelas Ruas de Bruxelas',
    data: '2020',
    material: '',
  },
  {
    url: 'https://i.postimg.cc/Jn5r3DKs/21-de-IMG-1093.jpg',
    nome: 'Sem título',
    data: '2020',
    material: '',
  }, {
    url: 'https://i.postimg.cc/J46hdX8J/11-Senza-ti-tolo-150x100-acrilica-2012.jpg',
    nome: 'Sem título',
    data: '2020',
    material: '',
  }, {
    url: 'https://i.postimg.cc/mD2qqPBz/IMG-7768-copy.jpg',
    nome: 'Sem título',
    data: '2020',
    material: '',
  }
]


$(document).ready(function(){

$.each(obras, function(i, value) {
  $("#content").append("<div class='showcase fade'><img src='" + obras[i].url + "' class='img' /><br><leg><i>" + obras[i].nome + "</i>, " + obras[i].ano + "</leg></div>");
}
);
showSlides(slideIndex);

$.each(obras, function(i, value) {
  $("#gallery").append("<div class='imagemGaleria'><img src='" + obras[i].url + "' class='img' /><br></div>");
}
);
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

// make gallery creator: it will append the images like in the slideshow,

// make second slideshow script for the gallery section: when I click at a collection image, 
// it takes me to a slideshow page where images don't change automatically, and the colection thumbnails show at the bottom for larger screens.

// add hover to collection links that shows collection name and year. also add links.