import clickOutSide from './Helpers/outSide.js';

export default function menuMobile() {
  const menu = document.querySelector('[data-menu="list"]');
  const button = document.querySelector('[data-menu="button"]');
  const events = ['click', 'touchstart'];
  function handleEvent() {
    menu.classList.add('active');
    button.classList.add('active');

    // eslint-disable-next-line no-undef
    clickOutSide(menu, events, () => {
      menu.classList.remove('active');
      button.classList.remove('active');
    });
  }

  if (button) {
    events.forEach((item) => {
      button.addEventListener(item, handleEvent);
    });
  }
}
