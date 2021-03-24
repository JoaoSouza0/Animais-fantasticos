export default class Modal {
  constructor(linksActive, close, modal) {
    this.linkActive = document.querySelector(linksActive);
    this.close = document.querySelector(close);
    this.modal = document.querySelector(modal);

    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  toggleModal() {
    this.modal.classList.toggle('active');
  }

  manageEvent(e) {
    e.preventDefault();
    this.toggleModal();
  }

  closeModal(e) {
    if (this.modal === e.target) {
      this.toggleModal(e);
    }
  }

  init() {
    if (this.linkActive && this.modal) {
      this.linkActive.addEventListener('click', this.toggleModal);
      this.close.addEventListener('click', this.toggleModal);
      this.modal.addEventListener('click', this.closeModal);
    }

    return this;
  }
}
