export default class Funcionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento)
    this.diasFuncionamento = this.funcionamento.dataset.semana.split(',').map(Number)
    this.horasFuncionamento = this.funcionamento.dataset.hora.split(',').map(Number)
    this.data = new Date()

    this.initFuncionamento() 
  }

  // a loja so é aberta nos dias uteis
  definirDiaUtilOuNao() {
    this.diaUtil = this.diasFuncionamento.some(dia => dia === this.data.getDay())
  }

  definirStatusLoja() {
    this.horaAtual = this.data.getHours()
    this.minutoAtual = this.data.getMinutes()

    if (this.diaUtil && (this.horaAtual >= this.horasFuncionamento[0] && this.horaAtual < this.horasFuncionamento[1])) 
      this.funcionamento.classList.add('aberto')
    else
      this.funcionamento.classList.remove('aberto')
  }
  
  initFuncionamento() {
    if (this.funcionamento) {
      this.definirDiaUtilOuNao()
      this.definirStatusLoja()
      return this
    } else {
      console.log('Erro ao carregar funcionamento.js');
    }
  }
}