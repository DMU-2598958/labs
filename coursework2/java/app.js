openMenu = () => {
  document.getElementById("menu").style.right = '0';
  document.getElementById("cover").style.right = '0';
}

closeMenu = () => {
  document.getElementById("menu").style.right = '-100%';
  document.getElementById("cover").style.right = '-100%';
}

  document.getElementById("burger").addEventListener("click",openMenu);
  document.getElementById("cover").addEventListener("click",closeMenu);

  var countDownDate = new Date("Jun 9, 2021 17:25:00").getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('dayn').innerHTML = days;
    document.getElementById('hourn').innerHTML = hours;
    document.getElementById('minuten').innerHTML = minutes;
    document.getElementById('secondsn').innerHTML = seconds;
  }, 1000);

function openModal() {
  document.getElementById("Modal").style.display = "block";
}
function closeModal() {
  document.getElementById("Modal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides (slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
