export default class Tooltip {
  constructor(mapaTooltip) {
    this.mapaTooltip = document.querySelector(mapaTooltip)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)

    this.initTooltip()
  }

  adcEventoAoMapa() {
    this.mapaTooltip.addEventListener('mouseover', this.onMouseOver)
  }

  onMouseOver(event) {
    this.criarTooltip()
    this.tooltip.style.top = event.pageY + 'px'
    this.tooltip.style.left = event.pageX + 'px'

    this.mapaTooltip.addEventListener('mousemove', this.onMouseMove)
    this.mapaTooltip.addEventListener('mouseleave', this.onMouseLeave)
  }

  criarTooltip() {
    const tooltip = document.createElement('div')
    tooltip.classList.add('tooltip')
    tooltip.innerText = this.mapaTooltip.getAttribute('aria-label')
    document.body.appendChild(tooltip)
    this.tooltip = tooltip
  }

  onMouseMove(event) {
    this.tooltip.style.top = (event.pageY + 15) + 'px'
    this.tooltip.style.left = (event.pageX + 10) + 'px'
  }

  onMouseLeave() {
    this.tooltip.remove()
  }

  initTooltip() {
    if (this.mapaTooltip)
      this.adcEventoAoMapa()
    else
      console.log('Não foi possivel carregar tooltip.js');
  }

}
