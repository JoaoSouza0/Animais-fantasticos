export default function funcionamentos() {
  const funcionamento = document.querySelector('[data-horario]');
  const semana = funcionamento.dataset.semana.split(',').map(Number);
  const horario = funcionamento.dataset.horario.split(',').map(Number);

  const data = new Date();
  const today = data.getDay();
  const hora = data.getHours();

  const openDay = semana.includes(today);
  const openHour = (horario[0] <= hora && horario[1] > hora);

  if (openDay && openHour) {
    funcionamento.classList.add('open');
  }
}
