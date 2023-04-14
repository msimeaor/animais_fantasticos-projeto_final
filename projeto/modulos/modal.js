export function initModal() {
  const modalContainer = document.querySelector('[data-modal="container"]')
  const botaoLogin = document.querySelector('[data-menu="login"]')

  esconderModal()

  function esconderModal() {
    modalContainer.style.display = "none"
  }

  adcEventClickAoBotaoLogin()

  function adcEventClickAoBotaoLogin() {
    botaoLogin.addEventListener('click', mostrarModal)
  }

  function mostrarModal(event) {
    modalContainer.style.display = "flex"
  }
}

export function fecharModal() {
  const modalContainer = document.querySelector('[data-modal="container"]')
  const botaoFecharModal = document.querySelector('[data-modal="fechar"]')

  adcEventClickAoBotaoFecharEModal()

  function adcEventClickAoBotaoFecharEModal() {
    botaoFecharModal.addEventListener('click', sairModal)
    modalContainer.addEventListener('click', sairModal)
  }

  function sairModal(event) {
    if(event.target === this)
      modalContainer.style.display = "none"
  }
}