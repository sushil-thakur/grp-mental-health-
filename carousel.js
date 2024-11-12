// script.js

// script.js

// script.js

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const visibleSlides = 4; 

function moveSlide(n) {
  currentIndex += n;

  if (currentIndex > totalSlides - visibleSlides) {
    currentIndex = 0; 
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - visibleSlides; 
  }

  const offset = -currentIndex * (100 / visibleSlides); 
  document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}


setInterval(() => {
  moveSlide(1);
}, 2000); 

// Manual Controls
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
