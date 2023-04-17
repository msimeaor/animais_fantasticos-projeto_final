export default class NavAnimais {
  constructor(listaImagensAnimais, listaSections) {
    this.listaImagensAnimais = document.querySelectorAll(listaImagensAnimais)
    this.listaSections = document.querySelectorAll(listaSections)
    this.initNavAnimais()
  }

  adcEventoNasImagens() {
    this.listaImagensAnimais.forEach((imagem, index) => {
      imagem.addEventListener('click', () => this.ativarSectionDescricao(imagem, index))
    })
  }

  ativarSectionDescricao(imagem, index) {
    this.desativarSectionsDescricao()
    this.listaSections[index].classList.add(this.listaSections[index].dataset.anime)
  }

  desativarSectionsDescricao() {
    this.listaSections.forEach((section) => {
      const datasetAnime = section.dataset.anime
      section.classList.remove(datasetAnime)
    })
  }

  initNavAnimais() {
    if (this.listaImagensAnimais.length && this.listaSections.length) {
      this.listaSections[0].classList.add('show-right')
      this.adcEventoNasImagens()
    } else
      console.log('Erro ao carregar "arquivo navAnimais.js"');
  }
}