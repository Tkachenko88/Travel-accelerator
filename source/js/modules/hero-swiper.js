export const initHeroSwiper = () => {
  const swiperWrapper = document.querySelector('[hero-swiper]');

  return new window.Swiper(swiperWrapper, {
    slidesPerView: 1,
    pagination: {
      el: '[hero-pagination]',
      clickable: true,
    },
  });
};
