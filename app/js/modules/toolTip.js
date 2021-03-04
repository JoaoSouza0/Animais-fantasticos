export default class ToolTip {
  constructor(links) {
    this.map = document.querySelector(links);

    this.handlethis = this.handlethis.bind(this);
    this.removeToolTip = this.removeToolTip.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  handlethis({ currentTarget }) {
    this.criarToolTip(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.removeToolTip);
  }

  removeToolTip({ currentTarget }) {
    this.toolTipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.removeToolTip);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove(e) {
    this.toolTipBox.style.top = `${e.pageY + 20}px`;
    this.toolTipBox.style.left = `${e.pageX + 20}px`;
  }

  criarToolTip() {
    const toolTip = document.createElement('div');
    const msg = this.map.getAttribute('title');
    toolTip.innerText = msg;
    toolTip.classList.add('tooltip');
    document.body.appendChild(toolTip);
    this.toolTipBox = toolTip;
  }

  init() {
    if (this.map) {
      this.map.addEventListener('mouseover', this.handlethis);
    }
    return this;
  }
}
