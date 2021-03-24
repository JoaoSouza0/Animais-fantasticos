export default class funcionamentos {
  constructor(element) {
    this.funcionamento = document.querySelector(element);
    this.activeClass = 'active';
  }

  getDados() {
    this.semana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horario = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  getDate() {
    this.data = new Date();
    this.today = this.data.getDay();
    this.hora = this.data.getUTCHours() - 3;
  }

  funcionamentoStatus() {
    this.openDay = this.semana.includes(this.today);
    this.openHour = (this.horario[0] <= this.hora && this.horario[1] > this.hora);

    return this.openHour;
  }

  activeAberto() {
    if (this.funcionamentoStatus()) {
      this.funcionamento.classList.add('open');
    }
  }

  init() {
    if (this.funcionamento) {
      this.getDados();
      this.getDate();
      this.activeAberto();
    }
  }
}
