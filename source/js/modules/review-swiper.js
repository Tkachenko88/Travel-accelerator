export const initReviewSwiper = (isLoop) => {
  const swiperWrapper = document.querySelector('[review-swiper]');
  const buttonPrev = document.querySelector('[review-swiper-btn-prev]');
  const buttonNext = document.querySelector('[review-swiper-btn-next]');

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
        slidesPerView: 1.2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 1.45,
        initialSlide: 0,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
