var obras = [
  {
    url: 'https://i.postimg.cc/gjJx1y06/2-Pelas-Ruas-de-Bruxelas-0-98x0-98-bx-res.jpg',
    nome: 'Pelas Ruas de Bruxelas',
    data: '',
    material: '',
  },
  {
    url: 'https://i.postimg.cc/Jn5r3DKs/21-de-IMG-1093.jpg',
    nome: '',
    data: '',
    material: '',
  }, {
    url: 'https://i.postimg.cc/J46hdX8J/11-Senza-ti-tolo-150x100-acrilica-2012.jpg',
    nome: 'keke',
    data: '',
    material: '',
  }, {
    url: 'https://i.postimg.cc/mD2qqPBz/IMG-7768-copy.jpg',
    nome: '',
    data: '',
    material: '',
  }
]


$(document).ready(function(){

$.each(obras, function(i, value) {
  $("#content").append("<div class='showcase fade'><img src='" + obras[i].url + "' class='img' /><br><leg><i>" + obras[i].nome + "</i>, " + obras[i].ano + "</leg></div>");
  // $("#content-row").append("<div class='thumbnails'><img class='demo cursor' src='" + obras[i].url + "'style='height:100px' onclick='currentSlide(" + (i + 1) + ")' alt='" + obras[i].nome + "'>")
}
);
showSlides(slideIndex);
});

var slideIndex = 1;

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("showcase");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "flex";
//   setTimeout(showSlides, 20);
// }

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