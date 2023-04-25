export default class FetchBitcoin {
  constructor(dirAPIBitcoin) {
    this.dirAPIBitcoin = dirAPIBitcoin
    setInterval(() => {
      this.initFetchBitcoin()
    }, 15000)
  }

  async fetchAPI() {
    return (await (await fetch(this.dirAPIBitcoin)).json()).BRL
  }

  alterarInnerTextDoSpan() {
    this.fetchAPI().then(bitcoinBRL => {
      const spanBitcoin = document.querySelector('.btc-preco')
      spanBitcoin.innerText = (100 / bitcoinBRL.buy).toFixed(7)
    })
  }

  initFetchBitcoin() {
    if (this.dirAPIBitcoin) {
      this.alterarInnerTextDoSpan()
      return this
    } else
      console.log('Erro ao carregar fetchBitcoin.js');
  }

}