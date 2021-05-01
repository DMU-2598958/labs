//To make the menu appear and disappear when pressed it was necessary to use JavaScript. Starting by creating two functions (a way of grouping lines of code, giving them a name): the first, called 'openMenu', that has the necessary settings for the menu to be seen; and the second, 'closeMenu' that returns the element to its original size.
openMenu = () => {
//Referencing HTML elements on Java is done using the 'document' object and, in this case, to reference an element using its Id, it is used the 'getElementById'.
//The reference is used to get the 'menu' and 'cover' elements and set the right position to '0', making them appear on the page.
  document.getElementById("menu").style.right = '0';
  document.getElementById("cover").style.right = '0';
};

closeMenu = () => {
//The 'closeMenu' function sets the values back to their original way, putting the right position on the 'menu' and 'cover' back to '-100%'.
  document.getElementById("menu").style.right = '-100%';
  document.getElementById("cover").style.right = '-100%';
};

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
