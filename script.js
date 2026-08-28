const botaoDestaque = document.querySelector("#botaoDestaque");
const servicos = document.querySelector("#servicos");
const formContato = document.querySelector("#formContato");
const resposta = document.querySelector("#resposta");

// Botão "Ver serviços"
botaoDestaque.addEventListener("click", () => {
  servicos.scrollIntoView({
    behavior: "smooth"
  });
});

// Formulário de contato
formContato.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.querySelector("#nome").value;

  resposta.textContent = `Obrigado pelo contato, ${nome}!`;
});

// Links da barra de navegação
const linksNavegacao = document.querySelectorAll("nav a");

linksNavegacao.forEach((link) => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault();

    const idSecao = link.getAttribute("href");
    const secao = document.querySelector(idSecao);

    if (secao) {
      secao.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
