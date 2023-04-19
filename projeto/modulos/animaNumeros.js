export default class AnimaNumeros {
  constructor(spanNumeros) {
    this.spanNumeros = document.querySelectorAll(spanNumeros)
    this.handleMutation = this.handleMutation.bind(this)
    this.habilitarMutation()
  }

  iniciarContagem() {
    this.spanNumeros.forEach(numero => {
      const valorFinalNumero = +numero.innerText
      const iterador = Math.floor(valorFinalNumero / 35)

      let contador = 0
      const intervalo = setInterval(() => {
        contador += iterador
        numero.innerText = contador

        if (contador > valorFinalNumero) {
          clearInterval(intervalo)
          numero.innerText = valorFinalNumero
        }

      }, Math.random() * 150)
    })
  }

  habilitarMutation() {
    this.observador = new MutationObserver(this.handleMutation)
    this.section = document.querySelector('.especies')
    this.observador.observe(this.section, {attributes: true})
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      this.iniciarContagem()
      this.observador.disconnect()
    }
  }

  initAnimaNumeros() {
    if (this.spanNumeros.length)
      this.habilitarMutation()
    else
      console.log('Erro ao carregar AnimaNumeros.js');
  }

}
