export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerContais) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerContais = observerContais;
    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementoNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);

    let timer = 0;
    const intervalo = setInterval(() => {
      timer += incremento;
      numero.innerText = timer;
      if (timer > total) {
        numero.innerText = total;
        clearInterval(intervalo);
      }
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementoNumero(numero));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerContais)) {
      this.animaNumeros();
      this.observer.disconnect();
    }
  }

  addObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addObserver();
    }
  }
}
