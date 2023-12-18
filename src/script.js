const slides = document.querySelectorAll('.slider__image');
const btnPreviousSlide = document.querySelector('.btn-slider--left');
const btnNextSlide = document.querySelector('.btn-slider--right');
let curSlide = 1;

const goToSlide = function () {
  const vw = window.innerWidth;
  const slideWidth =
    Number(window.getComputedStyle(document.querySelector('.slider__image')).maxWidth.slice(0, 3)) + 30; //(540px + 30px gap between pictures)

  slides.forEach((slide) => {
    slide.style.transform = `translateX(${(slideWidth * curSlide + slideWidth / 2 - vw / 2) * -1}px)`;
  });
};

const slider = function () {
  const totalSlides = slides.length - 1;

  goToSlide();

  const nextSlide = function () {
    curSlide++;
    if (curSlide > totalSlides) curSlide = 0;

    goToSlide();
  };

  const previousSlide = function () {
    curSlide--;
    if (curSlide < 0) curSlide = totalSlides;
    goToSlide();
  };

  btnNextSlide.addEventListener('click', nextSlide);
  btnPreviousSlide.addEventListener('click', previousSlide);
};

slider();

window.addEventListener('resize', goToSlide);
