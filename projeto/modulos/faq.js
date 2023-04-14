export default class Faq {
  constructor(listaPerguntas) {
    this.listaPerguntas = document.querySelectorAll(listaPerguntas)
    this.initFaq()
  }

  adcEventoNasPerguntas() {
    this.listaPerguntas.forEach(pergunta => {
      pergunta.addEventListener('click', () => this.toggleClassNaPerguntaEResposta(event))
    })
  }

  toggleClassNaPerguntaEResposta({target}) {
    this.toggleClassNaPergunta(target)
    this.toggleClassNaResposta(target.nextElementSibling)
  }

  toggleClassNaPergunta(pergunta) {
    pergunta.classList.toggle('ativo')
  }

  toggleClassNaResposta(resposta) {
    resposta.classList.toggle('ativo')
  }

  initFaq() {
    if (this.listaPerguntas.length)
      this.adcEventoNasPerguntas()
    else
      console.log('Erro ao carregar classe "Faq"');
  }
}