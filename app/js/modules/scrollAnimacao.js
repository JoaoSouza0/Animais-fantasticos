export default class AnimaScroll {
  constructor(targets) {
    this.section = document.querySelectorAll(targets);
    this.checkDistance = this.checkDistance.bind(this);
    this.meiaTela = window.innerHeight * 0.6;
  }

  getDistance() {
    this.distance = [...this.section].map((item) => {
      const offset = item.offsetTop;
      return {
        element: item,
        offset: Math.floor(offset - this.meiaTela),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('active');
      } else if (item.element.classList.contains('active')) {
        item.element.classList.remove('active');
      }
    });
  }

  init() {
    if (this.section.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }
}
