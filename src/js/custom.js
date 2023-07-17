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

document.addEventListener("DOMContentLoaded", function () {
  var sectionElements = document.querySelectorAll("#tecnologias");

  // Percorre todas as seções selecionadas
  sectionElements.forEach(function (sectionElement) {
    // Cria um novo waypoint para cada seção
    var waypoint = new Waypoint({
      element: sectionElement,
      handler: function () {
        // Quando a seção estiver visível, adiciona a classe de animação do animate.css
        sectionElement.classList.add("animate__animated", "animate__fadeInUp");
      },
      offset: "100%", // Define a porcentagem da altura da seção em que o waypoint será acionado
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var sectionElements = document.querySelectorAll("#formacoes");

  // Percorre todas as seções selecionadas
  sectionElements.forEach(function (sectionElement) {
    // Cria um novo waypoint para cada seção
    var waypoint = new Waypoint({
      element: sectionElement,
      handler: function () {
        // Quando a seção estiver visível, adiciona a classe de animação do animate.css
        sectionElement.classList.add(
          "animate__animated",
          "animate__bounceInRight"
        );
      },
      offset: "100%", // Define a porcentagem da altura da seção em que o waypoint será acionado
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var sectionElements = document.querySelectorAll("#unip");

  // Percorre todas as seções selecionadas
  sectionElements.forEach(function (sectionElement) {
    // Cria um novo waypoint para cada seção
    var waypoint = new Waypoint({
      element: sectionElement,
      handler: function () {
        // Quando a seção estiver visível, adiciona a classe de animação do animate.css
        sectionElement.classList.add(
          "animate__animated",
          "animate__fadeInLeft"
        );
      },
      offset: "100%", // Define a porcentagem da altura da seção em que o waypoint será acionado
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var sectionElements = document.querySelectorAll("#desco");

  // Percorre todas as seções selecionadas
  sectionElements.forEach(function (sectionElement) {
    // Cria um novo waypoint para cada seção
    var waypoint = new Waypoint({
      element: sectionElement,
      handler: function () {
        // Quando a seção estiver visível, adiciona a classe de animação do animate.css
        sectionElement.classList.add(
          "animate__animated",
          "animate__fadeInRight"
        );
      },
      offset: "100%", // Define a porcentagem da altura da seção em que o waypoint será acionado
    });
  });
});
