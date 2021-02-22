export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
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
    });
  }
  const aboserverTarget = document.querySelector('.numeros');
  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      animaNumeros();
      observer.disconnect();
    }
  }
  observer = new MutationObserver(handleMutation);
  observer.observe(aboserverTarget, { attributes: true });
}
