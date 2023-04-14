export default function fetchBictoin() {
  const timer = setInterval(() => {
    coletarDadoApiBitcoin()
  }, 15000)

  async function coletarDadoApiBitcoin() {
    const response = await fetch('https://blockchain.info/ticker')
    const bitcoinBRL = (await response.json()).BRL

    alterarValorElemento(bitcoinBRL)

  }

  function alterarValorElemento(bitcoinBRL) {
    const spanBTCPreco = document.querySelector('.btc-preco')
    spanBTCPreco.innerHTML = (100 / bitcoinBRL.buy).toFixed(6)
  }
}