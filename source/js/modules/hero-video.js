const container = document.querySelector('.hero__video');
const poster = container.querySelector('[data-poster="video"]');
const button = container.querySelector('[data-button="btn-video"]');

const createVideo = () => {
  const iframeElement = document.createElement('iframe');
  iframeElement.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframeElement.setAttribute('title', 'Бесплатные интерактивные онлайн-курсы');
  iframeElement.setAttribute('frameborder', '0');
  iframeElement.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframeElement.setAttribute('allowfullscreen', '');
  iframeElement.setAttribute('width', '482');
  iframeElement.setAttribute('height', '317');
  container.append(iframeElement);
  return iframeElement;
};

export const initVideo = () => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    poster.style.display = 'none';
    button.style.display = 'none';
    createVideo();
  });
};
