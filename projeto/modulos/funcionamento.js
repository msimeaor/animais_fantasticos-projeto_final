export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]')
  const arrayDiasSemana = funcionamento.dataset.semana.split(',').map(Number)
  const horarioFuncionamento = funcionamento.dataset.hora.split(',').map(Number)

  const data = new Date()

  const diaSemanaAberto = arrayDiasSemana.some(numDia => numDia === data.getDay())

  function lojaAberta() {
    const hora = data.getHours()
    const minuto = data.getMinutes()

    return (diaSemanaAberto && (hora >= horarioFuncionamento[0] && hora < horarioFuncionamento[1]))
  }

  if(lojaAberta())
    funcionamento.classList.add('aberto')
  else 
    funcionamento.classList.remove('aberto')
}