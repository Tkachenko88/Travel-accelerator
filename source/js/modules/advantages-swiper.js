export const initAdvantagesSwiper = (isLoop) => {
  const swiperWrapper = document.querySelector('[advantages-swiper]');
  const buttonPrev = document.querySelector('[advantages-swiper-btn-prev]');
  const buttonNext = document.querySelector('[advantages-swiper-btn-next]');

  return new window.Swiper(swiperWrapper, {
    loop: isLoop,
    slidesPerView: 4,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
