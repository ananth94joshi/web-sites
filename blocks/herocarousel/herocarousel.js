// Automatic Slideshow - change image every 4 seconds
let myIndex = 0;
carousel();

function carousel() {
  let slides = document.querySelectorAll('.herocarousel > div');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > slides.length) {myIndex = 1}    
  slides[myIndex-1].style.display = "block";  
  setTimeout(carousel, 10000);    
}