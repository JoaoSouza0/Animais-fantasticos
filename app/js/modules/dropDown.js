import outSideClick from './Helpers/outSide.js';

export default function dropDownMenu() {
  const dropDown = document.querySelector('[data-dropdown]');
  const evets = ['click', 'touchstart'];

  function handleDropDown(event) {
    event.preventDefault();
    dropDown.classList.add('active');

    outSideClick(this, evets, () => {
      dropDown.classList.remove('active');
    });
  }
  evets.forEach((item) => {
    dropDown.addEventListener(item, handleDropDown);
  });
}
