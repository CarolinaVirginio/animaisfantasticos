export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if(sections.length) {
    // window.innerheight = 646 (por ex)
    // window.innerheight * 0.6 (60% da tela) = 387.5999
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      // loop para saber quanto é a distancia de cada section do topo, para posteriormente adicionar animação ao scroll num ponto exato de cada elemento
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible  = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('ativo');
        else if(section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}