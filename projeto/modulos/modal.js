export default class Modal {
  constructor(containerModal, botaoLoginMenu, botaoFecharModal) {
    this.containerModal = document.querySelector(containerModal)
    this.botaoLoginMenu = document.querySelector(botaoLoginMenu)
    this.botaoFecharModal = document.querySelector(botaoFecharModal)

    this.toggleModal = this.toggleModal.bind(this)
    this.cliqueForaModal = this.cliqueForaModal.bind(this)

    this.initModal()
  }

  adicionarEventos() {
    this.botaoLoginMenu.addEventListener('click', this.toggleModal)
    this.botaoFecharModal.addEventListener('click', this.toggleModal)
    this.containerModal.addEventListener('click', this.cliqueForaModal)
  }

  toggleModal(event) {
    event.preventDefault()
    this.containerModal.classList.toggle('ativo')
  }

  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event)
    }
  }

  initModal() {
    if(this.containerModal && this.botaoLoginMenu && this.botaoFecharModal)
      this.adicionarEventos()
    else
      console.log('Não foi possivel carregar o modal');
  }

}