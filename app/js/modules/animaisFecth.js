import AnimaNumeros from './animaNumeros.js';

export default function AnimaisFecth(url, target) {
  const animalsGrid = document.querySelector(target);

  function createAnimals(animals) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `
      <h3>${animals.species}</h3>
       <span data-numero>${animals.number}</span>
      `;
    return div;
  }

  function preencherAnimais(animal) {
    const animalsDiv = createAnimals(animal);
    animalsGrid.appendChild(animalsDiv);
  }

  function animaNumeros() {
    const animaNumero = new AnimaNumeros('[data-numero]', '.numeros', 'active');
    animaNumero.init();
  }

  async function getAnimals() {
    try {
      const animalsResponse = await fetch(url);
      const animalsDate = await animalsResponse.json();

      animalsDate.forEach((item) => preencherAnimais(item));
      animaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  if (url && target) {
    getAnimals();
  }
}
