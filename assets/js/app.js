const slideHolder = document.querySelector(".slider__holder");
const numberOfSlides = document.querySelectorAll(".slider_element").length

let currentSlide = 0;

setInterval(function() {
  currentSlide += 1;

  if (currentSlide === numberOfSlides) {
    currentSlide = 0;
  }

  slideHolder.style.top = `${-100 * currentSlide}%`;
}, 7000)