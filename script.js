var data = {
  "obras" : [
  {
      "url": "https://i.postimg.cc/gjJx1y06/2-Pelas-Ruas-de-Bruxelas-0-98x0-98-bx-res.jpg",
      "nome": "Pelas Ruas de Bruxelas",
      "data": "2020",
      "material": "",
      "orientation": "vertical"
    },
    {
      "url": "https://i.postimg.cc/Jn5r3DKs/21-de-IMG-1093.jpg",
      "nome": "Sem título",
      "data": "2020",
      "material": "",
      "orientation": "horizontal"
    }, {
      "url": "https://i.postimg.cc/J46hdX8J/11-Senza-ti-tolo-150x100-acrilica-2012.jpg",
      "nome": "Sem título",
      "data": "2020",
      "material": "",
      "orientation": "vertical"
    }, {
      "url": "https://i.postimg.cc/mD2qqPBz/IMG-7768-copy.jpg",
      "nome": "Sem título",
      "data": "2020",
      "material": "",
      "orientation": "vertical"
    }, {
      "url": "https://i.postimg.cc/gjJx1y06/2-Pelas-Ruas-de-Bruxelas-0-98x0-98-bx-res.jpg",
      "nome": "Pelas Ruas de Bruxelas",
      "data": "2020",
      "material": "",
      "orientation": "vertical"
    },
    {
      "url": "https://i.postimg.cc/Jn5r3DKs/21-de-IMG-1093.jpg",
      "nome": "Sem título",
      "data": "2020",
      "material": "",
      "orientation": "horizontal"
    }, {
      "url": "https://i.postimg.cc/J46hdX8J/11-Senza-ti-tolo-150x100-acrilica-2012.jpg",
      "nome": "Sem título",
      "data": "2020",
      "material": "",
      "orientation": "vertical"
    }, {
      "url": "https://i.postimg.cc/mD2qqPBz/IMG-7768-copy.jpg",
      "nome": "Sem título",
      "data": "2020",
      "material": "",
      "orientation": "vertical"
    }
  ]
};

$(document).ready(function(){

$.each(data.obras, function(i, value){ 
  $("#content").append("<div class='showcase fade'><img src='" + data.obras[i].url + "' class='img' /><br><leg><i>" + data.obras[i].nome + "</i>, " + data.obras[i].ano + "</leg></div>");
  $("#gallery").append("<div class='imagemGaleria'><img src='" + data.obras[i].url + "' class='imgGallery-" + data.obras[i].orientation + "' /><div class='legendaGaleria'>" + data.obras[i].nome + ", " + data.obras[i].ano + "</div></div>");
}
);
$("#boxGallery").append("<div class='showcase'></div>") // coloquei esse pra não causar erro por não ter usado showSlides() nesta pagina. depois ver o que fazer com isso
$("#navbar").append("<div class='navlinks' id='logo'><h4>DIRCE KÖRBES</h4></div><div class='navbar-landscape'><div class='navlinks-landscape'>Séries</div><div class='navlinks-landscape'>Exposições</div><div class='navlinks-landscape'>Biografia</div></div><div class='navlinks-landscape' id='icons'><img src='icons/facebook.png' height='20px' style='opacity:0.5;margin-right:3px'>  <img src='icons/instagram.png' height='20px' style='opacity:0.5;margin-right:5px'>  <img src='icons/mail.png' height='20px' style='opacity:0.5'></div>")
showSlides(slideIndex);
$("#bottom-bar").append("<div class='navlinks-portrait' id='icons'></div><a href='javascript:void(0);' onclick='hamburgerMenu()'><img src='icons/menu.png' class='icon'></a>  <img src='icons/facebook.png' class='icon'>  <img src='icons/instagram.png' class='icon'>  <img src='icons/mail.png' class='icon'></div>")

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

// ver se dá pra colocar o conteudo do hamburger menu no codigo JS tb.

// tentar colocar de novo aquela parada de linkar obras.js aqui. Tinha funcionado mas ai as funcoes quebraram, nao sei pq. ver branch collectionPage, navigation-separated