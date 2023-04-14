export default function initDropdown() {
  const liSobre = document.querySelector('[data-dropdown="drop-menu"]')
  const ulDropdown = document.querySelector('[data-dropdown="ul-dropdown"]')

  liSobre.addEventListener('mouseover', ativarDropdown)
  function ativarDropdown(event) {
    ulDropdown.classList.add('ativo')

    this.addEventListener('mouseleave', desativarDropdown)
  }

  function desativarDropdown(event) {
    ulDropdown.classList.remove('ativo')
    this.removeEventListener('mouseleave', desativarDropdown)
  }
}