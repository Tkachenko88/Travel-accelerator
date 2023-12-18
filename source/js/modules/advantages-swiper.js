export const initAdvantagesSwiper = () => {
  const swiperWrapper = document.querySelector('[advantages-swiper]');
  const buttonPrev = document.querySelector('[advantages-swiper-btn-prev]');
  const buttonNext = document.querySelector('[advantages-swiper-btn-next]');

  return new window.Swiper(swiperWrapper, {
    centeredSlide: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1240: {
        slidesPerView: 3.6,
        spaceBetween: 30,
        initialSlide: 2,
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  });
};
