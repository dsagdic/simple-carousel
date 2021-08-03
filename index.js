const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

function hideAllSlides() {
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].classList.remove('carousel-item-visible');
    slides[i].classList.add('carousel-item-hidden');
  }
}

function moveToNextSlide() {
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition += 1;
  }

  slides[slidePosition].classList.add('carousel-item-visible');
}

function moveToPrevSlide() {
  hideAllSlides();

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition -= 1;
  }

  slides[slidePosition].classList.add('carousel-item-visible');
}

document
  .getElementById('carousel-button-next')
  .addEventListener('click', moveToNextSlide);
document
  .getElementById('carousel-button-prev')
  .addEventListener('click', moveToPrevSlide);
