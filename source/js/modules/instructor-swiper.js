export const initInstructorSwiper = (isLoop) => {
  const swiperWrapper = document.querySelector('[instructor-swiper]');
  const buttonPrev = document.querySelector('[instructor-swiper-btn-prev]');
  const buttonNext = document.querySelector('[instructor-swiper-btn-next]');

  return new window.Swiper(swiperWrapper, {
    loop: isLoop,
    slidesPerView: 4,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
        initialSlide: 4,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
