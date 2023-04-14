export default function initScroll() {
  const classeAtivo = 'ativo'
  const sections = document.querySelectorAll('[data-tab="scroll"]')
  sections[0].classList.add(classeAtivo)
  const $60porcentoHeightView = window.innerHeight * 0.6

  window.addEventListener('scroll', medirSecTopEAtivar)

  function medirSecTopEAtivar() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top

      if(sectionTop < $60porcentoHeightView) {
        section.classList.add(classeAtivo)
      }

    })
  }
}