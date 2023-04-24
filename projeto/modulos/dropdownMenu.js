export default class DropdownMenu {
  constructor(liSobre, ulDropdown) {
    this.liSobre = document.querySelector(liSobre)
    this.ulDropdown = document.querySelector(ulDropdown)
    this.eventosMostraDrop = ['mouseover', 'touchstart']

    this.ativarDropdown = this.ativarDropdown.bind(this)
    this.desativarDropdown = this.desativarDropdown.bind(this)

    this.adcEventoLiSobre()
  }

adcEventoLiSobre() {
  this.eventosMostraDrop.forEach(evento => {
    this.liSobre.addEventListener(evento, this.ativarDropdown)
  })
}

ativarDropdown() {
  this.ulDropdown.classList.add('ativo')

  this.ulDropdown.addEventListener('mouseleave', this.desativarDropdown)
  this.liSobre.addEventListener('touchstart', this.desativarDropdown)
}

desativarDropdown() {
  this.ulDropdown.classList.remove('ativo')

  this.ulDropdown.removeEventListener('mouseleave', this.desativarDropdown)
  this.liSobre.removeEventListener('touchstart', this.desativarDropdown)
}
  
}