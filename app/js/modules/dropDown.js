import outSideClick from './Helpers/outSide.js';

export default class dropDownMenu {
  constructor(element, events) {
    this.dropDown = document.querySelector(element);
    this.evets = events; // events que disparam o dropdown

    this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleDropDown(event) {
    event.preventDefault();
    this.dropDown.classList.add('active');

    console.log();

    outSideClick(event.target, this.evets, () => {
      this.dropDown.classList.remove('active');
    });
  }

  addEvents() {
    this.evets.forEach((item) => {
      this.dropDown.addEventListener(item, this.handleDropDown);
    });
  }

  init() {
    this.addEvents();
  }
}
