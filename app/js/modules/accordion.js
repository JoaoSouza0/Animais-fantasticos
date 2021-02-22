export default function initAccordion() {
  const activeClass = 'active';

  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  accordionList[0].classList.add(activeClass);

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordionList.length) {
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
