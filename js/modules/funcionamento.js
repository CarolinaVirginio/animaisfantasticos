export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

  // Pois a Array de horário só tem dois itens, 8h e 18h, com 8h = 0 e 18h = 1
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

  if(semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}

