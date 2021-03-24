import clickOutSide from './Helpers/outSide.js';

export default class menuMobile {
  constructor(menu, button, events = ['click', 'touchstart']) {
    this.menu = document.querySelector(menu);
    this.button = document.querySelector(button);
    this.events = events;
    this.active = 'active';
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    event.preventDefault();

    this.menu.classList.add(this.active);
    this.button.classList.add(this.active);

    // eslint-disable-next-line no-undef
    clickOutSide(this.menu, this.events, () => {
      this.menu.classList.remove(this.active);
      this.button.classList.remove(this.active);
    });
  }

  addEvents() {
    this.events.forEach((item) => {
      this.button.addEventListener(item, this.handleEvent);
    });
  }

  init() {
    if (this.button && this.menu) {
      this.addEvents();
    }

    return this;
  }
}
