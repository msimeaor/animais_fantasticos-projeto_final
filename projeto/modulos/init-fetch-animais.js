import initNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  fazerFetchApiAnimais()

  async function fazerFetchApiAnimais() {
    const response = await fetch('json/numeros-animaisapi.json')
    const objAnimais = await response.json()
    
    objAnimais.forEach(animal => {
      const div = createAnimal(animal)
      const divSpanAnimais = div.querySelector('[data-especie="animal"]')
      const divSpanNumeros = div.querySelector('[data-especie="numero"]')

      divSpanAnimais.innerHTML = animal.especie
      divSpanNumeros.innerHTML = animal.numero
      
      const especiesContainer = document.querySelector('.especies-container')
      especiesContainer.appendChild(div)
    });
    initNumeros()
  }

  function createAnimal(animal) {
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

}