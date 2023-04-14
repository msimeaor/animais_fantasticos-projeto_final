export default function initMenu() {
  const botaoMenu = document.querySelector('[data-menu="button"]')
  const menuLista = document.querySelector('.menu-lista')
  const body = document.querySelector('body')

  botaoMenu.addEventListener('click', mostrarListaMenu)

  function mostrarListaMenu(event) {
    menuLista.classList.toggle('ativo')
    body.removeEventListener('click', fecharMenu)

    setTimeout(() => body.addEventListener('click', fecharMenu)) 
  }

  function fecharMenu(event) {
    if(!menuLista.contains(event.target)) {
      menuLista.classList.remove('ativo')
      this.removeEventListener('click', fecharMenu)
    }
  }
}