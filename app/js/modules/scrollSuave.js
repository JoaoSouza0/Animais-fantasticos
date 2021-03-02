export default class initScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (!options === undefined) {
      this.options = options;
    } else {
      this.options = {
        behavior: 'smooth',
        block: 'start',
      };
    }
    this.scrollSuave = this.scrollSuave.bind(this);
  }
  // const linksInternos = document.querySelectorAll('');

  scrollSuave(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);
  }

  init() {
    if (this.linksInternos.length) {
      this.linksInternos.forEach((item) => {
        item.addEventListener('click', this.scrollSuave);
      });
    }
  }
}
