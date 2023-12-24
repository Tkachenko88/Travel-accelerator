export const initGallerySwiper = (isLoop) => {
  const swiperWrapper = document.querySelector('[gallery-swiper]');
  const buttonPrev = document.querySelector('[gallery-swiper-btn-prev]');
  const buttonNext = document.querySelector('[gallery-swiper-btn-next]');

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
        slidesPerView: 1.5,
      },
      1200: {
        slidesPerView: 2.45,
        initialSlide: 3,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
