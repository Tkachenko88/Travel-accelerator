export const initGallerySwiper = (isLoop) => {
  const swiperWrapper = document.querySelector('[gallery-swiper]');
  const buttonPrev = document.querySelector('[gallery-swiper-btn-prev]');
  const buttonNext = document.querySelector('[gallery-swiper-btn-next]');

  return new window.Swiper(swiperWrapper, {
    loop: isLoop,
    slidesPerView: 2,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
