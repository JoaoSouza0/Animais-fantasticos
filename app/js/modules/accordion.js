export default class Accordion {
  constructor(list) {
    this.activeClass = 'active';
    this.accordionList = document.querySelectorAll(list);
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addEvent() {
    this.toggleAccordion(this.accordionList[0]);
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => { this.toggleAccordion(item); });
    });
  }

  init() {
    if (this.accordionList.length) {
      this.addEvent();
    }
  }
}
