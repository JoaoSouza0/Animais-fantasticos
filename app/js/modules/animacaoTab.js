export default class TabNav {
  constructor(menu, contet) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(contet);
    this.activeClass = 'active';
  }

  // this.tabContent[0].classList.add('active');
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direction = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direction);
  }

  addEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabContent.length && this.tabMenu.length) {
      this.activeTab(0);
      this.addEvent();
    }
    return this;
  }
}
