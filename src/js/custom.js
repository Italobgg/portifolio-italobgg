// Animação da digitação
var typed = new Typed(".typed-text", {
  strings: [
    "Desenvolvedor <i>Web</i>",
    "Desenvolvedor <i>Front-End</i>",
    "Desenvolvedor <i>Wordpress</i>",
  ],
  typeSpeed: 60,
  backSpeed: 60,
  smartBackspace: true,
  loop: true,
});

// Seleciona o elemento da seção que deseja animar
var sectionElement = document.querySelector("#tecnologias");

// Cria um novo waypoint
var waypoint = new Waypoint({
  element: sectionElement,
  handler: function () {
    // Quando a seção estiver visível, adiciona a classe de animação do animate.css
    sectionElement.classList.add("animate__animated", "animate__fadeInUp");
  },
  offset: "80%", // Define a porcentagem da altura da seção em que o waypoint será acionado
});
