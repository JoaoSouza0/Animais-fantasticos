import outSideClick from './Helpers/outSide.js';

export default class dropDownMenu {
  constructor(element, events = ['click', 'touchstart']) {
    this.dropDownMenus = document.querySelectorAll(element);
    this.evets = events; // events que disparam o dropdown
    this.activeClass = 'active';
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleDropDown(event) {
    event.preventDefault();
    const element = event.currentTarget;

    element.classList.add(this.activeClass);
    outSideClick(element, this.evets, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addEvents() {
    this.dropDownMenus.forEach((menu) => {
      this.evets.forEach((item) => {
        menu.addEventListener(item, this.handleDropDown);
      });
    });
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addEvents();
    }

    return this;
  }
}
