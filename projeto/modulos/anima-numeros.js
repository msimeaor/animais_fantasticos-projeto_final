export default function initNumeros() {
  function iniciarContagem() {
    const spanNumeros = document.querySelectorAll('[data-especie="numero"]')

    spanNumeros.forEach(numero => {
      const valorNumero = +numero.innerHTML
      const iterador = Math.floor(valorNumero / 30)
      
      let start = 0
      const intervalo = setInterval(() => {
        start += iterador
        numero.innerHTML = start

        if(start > valorNumero) {
          clearInterval(intervalo)
          numero.innerHTML = valorNumero
        }
      }, Math.random() * 100)

    })
  }

  const observador = new MutationObserver(handleMutation)

  function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('ativo'))  {
      iniciarContagem()
      observador.disconnect()
    }
  }

  const section = document.querySelector('.especies')
  observador.observe(section, {attributes: true})
}
