export default function initToolTip() {
  const map = document.querySelector('[data-mapa]');

  const onMouseMove = {

    handleEvent(e) {
      this.element.style.top = `${e.pageY + 20}px`;
      this.element.style.left = `${e.pageX + 20}px`;
    },

  };

  function criarToolTip() {
    const toolTip = document.createElement('div');
    const msg = map.getAttribute('title');
    toolTip.innerText = msg;
    toolTip.classList.add('tooltip');
    document.body.appendChild(toolTip);

    return toolTip;
  }

  const removeToolTip = {

    handleEvent() {
      this.element.remove();
      map.removeEventListener('mouseleave', removeToolTip);
      map.removeEventListener('mousemove', onMouseMove);
    },

  };

  function handleMap(e) {
    const toolTipBox = criarToolTip();
    toolTipBox.style.top = `${e.pageY + 20}px`;
    toolTipBox.style.left = `${e.pageX + 20}px`;
    onMouseMove.element = toolTipBox;
    removeToolTip.element = toolTipBox;

    this.addEventListener('mouseleave', removeToolTip);
    this.addEventListener('mousemove', onMouseMove);
  }

  map.addEventListener('mouseover', handleMap);
}
