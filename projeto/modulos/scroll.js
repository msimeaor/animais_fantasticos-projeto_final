export default class Scroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.pontoAtivacaoSection = window.innerHeight * 0.6
    this.ativarSections = this.ativarSections.bind(this)

    this.initScroll()
  }

  adcEventoWindow() {
    window.addEventListener('scroll', this.ativarSections)
  }

  ativarSections() {
    this.sections.forEach(section => {
      const topSection = section.getBoundingClientRect().top

      if (topSection < this.pontoAtivacaoSection)
        section.classList.add('ativo')
    })
  }

  initScroll() {
    if (this.sections.length) {
      this.sections[0].classList.add('ativo')
      this.adcEventoWindow()
    } else {
      console.log('Erro ao carregar scroll.js');
    }
  }
}