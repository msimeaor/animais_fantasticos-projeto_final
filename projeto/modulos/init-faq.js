export default function initFaq() {
  const perguntasFaq = document.querySelectorAll('[data-acc="accordion"] dt')

  function ativarOuDesativarPerguntaeResposta(event) {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
  }

  function adcEventCLickNasPerguntas() {
    perguntasFaq.forEach(pergunta => pergunta.addEventListener('click', ativarOuDesativarPerguntaeResposta))
  }

  adcEventCLickNasPerguntas()
}