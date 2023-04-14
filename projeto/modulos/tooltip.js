export default function initTooltip() {
  const mapa = document.querySelector('[data-tooltip]')

  mapa.addEventListener('mouseover', onMouseOver)
  function onMouseOver(event) {
    const tooltipContainer = criarElemento(this)

    onMouseLeave.tooltipContainer = tooltipContainer
    this.addEventListener('mouseleave', onMouseLeave)

    onMouseMove.tooltipContainer = tooltipContainer
    this.addEventListener('mousemove', onMouseMove)
  }

  function criarElemento(elemento) {
    const tooltip = document.createElement('div')
    tooltip.classList.add('tooltip')
    tooltip.innerText = elemento.getAttribute('aria-label')
    document.body.appendChild(tooltip)
    return tooltip
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipContainer.remove()
    }
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipContainer.style.top = (event.pageY + 15) + 'px'
      this.tooltipContainer.style.left = (event.pageX + 10) + 'px'
    }
  }
}
