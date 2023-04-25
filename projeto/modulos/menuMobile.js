export default class MenuMobile {
  constructor(botaoMenu, menuLista, body) {
    this.botaoMenu = document.querySelector(botaoMenu)
    this.menuLista = document.querySelector(menuLista)
    this.body = document.querySelector(body)

    this.toggleMenu = this.toggleMenu.bind(this)
    this.fecharMenu = this.fecharMenu.bind(this)

    this.initMenuMobile()
  }

  adcEventoBotaoMenu() {
    this.botaoMenu.addEventListener('click', this.toggleMenu)
  }

  toggleMenu() {
    this.menuLista.classList.toggle('ativo')

    this.body.removeEventListener('click', this.fecharMenu)

    setTimeout(() => this.body.addEventListener('click', this.fecharMenu))
  }

  fecharMenu({target}) {
    if (!this.menuLista.contains(target)) {
      this.menuLista.classList.remove('ativo')
      this.body.removeEventListener('click', this.fecharMenu)
    }
  }

  initMenuMobile() {
    if (this.botaoMenu && this.menuLista && this.body) {
      this.adcEventoBotaoMenu()
      return this
    } else {
      console.log('Erro ao carregar menuMobile.js');
    }
  }

}