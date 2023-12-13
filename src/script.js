const slides = document.querySelectorAll('.slider__image');
const btnPreviousSlide = document.querySelector('.btn-slider--left');
const btnNextSlide = document.querySelector('.btn-slider--right');

const slider = function () {
  let curSlide = 1;
  const slideLength = 57;
  const totalSlides = slides.length;
  const initalTranslateX = 45;

  const goToSlide = function () {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${initalTranslateX - slideLength * curSlide}rem)`;
    });
  };

  goToSlide();

  const nextSlide = function () {
    curSlide++;
    if (curSlide >= totalSlides) return (curSlide = totalSlides - 1);
    goToSlide();
  };

  const previousSlide = function () {
    curSlide--;
    if (curSlide < 0) return (curSlide = 0);
    goToSlide();
  };

  btnNextSlide.addEventListener('click', nextSlide);
  btnPreviousSlide.addEventListener('click', previousSlide);
};

slider();
