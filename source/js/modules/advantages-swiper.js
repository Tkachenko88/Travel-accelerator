export const initAdvantagesSwiper = (isLoop) => {
  const swiperWrapper = document.querySelector('[advantages-swiper]');
  const buttonPrev = document.querySelector('[advantages-swiper-btn-prev]');
  const buttonNext = document.querySelector('[advantages-swiper-btn-next]');

  return new window.Swiper(swiperWrapper, {
    loop: isLoop,
    centeredSlides: true,
    breakpoints: {
      1440: {
        slidesPerView: 3.585,
        spaceBetween: 30,
        initialSlide: 3.5,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};

if (window.innerWidth >= 1440) {
  initAdvantagesSwiper();
}
