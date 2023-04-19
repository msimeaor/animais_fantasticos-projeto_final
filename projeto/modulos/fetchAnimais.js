import AnimaNumeros from "./animaNumeros.js";

export default class FetchAnimais {
  constructor(dirAPIAnimais, containerAnimais) {
    this.dirAPIAnimais = dirAPIAnimais
    this.containerAnimais = document.querySelector(containerAnimais)
    
    this.iterarAnimais()
  }

  async fetchAPIAnimais() {
    try {

      return await (await fetch(this.dirAPIAnimais)).json()
    
    } catch(erro) {
      console.log(erro + '  - URL não encontrada');
    }
  }

  iterarAnimais() {
    this.fetchAPIAnimais().then(arrayAnimais => {
      arrayAnimais.forEach(animal => {
        const div = this.criarDivComSpans()
        
        const especie = div.querySelector('[data-especie="animal"]')
        const numero = div.querySelector('[data-especie="numero"]')
        especie.innerHTML = animal.especie
        numero.innerHTML = animal.numero

        this.containerAnimais.appendChild(div)
      })
    })

    setTimeout(() => {
      const animaNumeros = new AnimaNumeros('[data-especie="numero"]')
    }, 1000)

  }

  criarDivComSpans() {
    const div = document.createElement('div')
    div.classList.add('animal-container')

    const spanAnimal = document.createElement('span')
    spanAnimal.classList.add('sp-animal')
    spanAnimal.setAttribute('data-especie', 'animal')

    const spanNumero = document.createElement('span')
    spanNumero.classList.add('sp-numero')
    spanNumero.setAttribute('data-especie', 'numero')

    div.appendChild(spanAnimal)
    div.appendChild(spanNumero)
    return div
  }

  initFetchAnimais() {
    if (this.dirAPIAnimais && this.containerAnimais)
      this.iterarAnimais()
    else
      console.log('Erro ao carregar fetchAnimais.js');
  }

}