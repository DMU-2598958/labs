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
//Finally, two Events were added. First, it was necessary to add the context, that being referencing the elements to which the event was to occur. That was done using the 'document' object to get the 'burger' and 'cover' elements. Then, to tell the browser what was supposed to happen, the 'click' event was added, along with what should happen. The event placed in the 'burger' should trigger the 'openMenu' function, and click on the 'cover' should trigger the 'closeMenu'.
  document.getElementById("burger").addEventListener("click",openMenu);
  document.getElementById("cover").addEventListener("click",closeMenu);

//To create a countdown it is necessary to use a set of variables - a container that can hold on to some data or information.
//The first variable was used to set the date to count down to.
  var countDownDate = new Date("Jun 9, 2021 17:25:00").getTime();
//Then was created another to update the countdown every 1 second.
  var x = setInterval(function() {
//A variable to get the current date.
    var now = new Date().getTime();
//And another to calculate the distance between the current date and the count down date.
    var distance = countDownDate - now;
//Next is was necessary to calculate the days, hours, minutes and seconds.
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//Finally, the calculation's result would be placed in the correct element created to display the countdown. That element was selected by using the 'document' object.
    document.getElementById('dayn').innerHTML = days;
    document.getElementById('hourn').innerHTML = hours;
    document.getElementById('minuten').innerHTML = minutes;
    document.getElementById('secondsn').innerHTML = seconds;
  }, 1000);

//To create the lightbox/gallery of images, the first step was creating a function to open and close the gallery. That was done by referring to the element, 'Modal', and change his display between 'block' and 'none'.
function openModal() {
  document.getElementById("Modal").style.display = "block";
}
function closeModal() {
  document.getElementById("Modal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

//To create the next/previous controls, a function was created to change its values between 1 and -1.
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Match the number of the thumbnails to the slides.
function currentSlide(n) {
  showSlides (slideIndex = n);
}

//Function created to change and control the slides.
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

//More knowledge should be put into JavaScript in the future. There is a general understanding of how to produce the modal, however, is quite difficult to explain everything that was used and why.
