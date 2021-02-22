export default function initModal() {
  const linkActive = document.querySelector('[data-modal="abrir"]');
  const close = document.querySelector('[data-modal="close"]');
  const modal = document.querySelector('[data-modal="container"]');

  function toggleModal(e) {
    e.preventDefault();
    modal.classList.toggle('active');
  }

  function closeModal(e) {
    if (this === e.target) {
      toggleModal(e);
    }
  }

  linkActive.addEventListener('click', toggleModal);
  close.addEventListener('click', toggleModal);
  modal.addEventListener('click', closeModal);
}
