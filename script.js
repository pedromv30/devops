const botaoDestaque = document.querySelector("#botaoDestaque");
const servicos = document.querySelector("#servicos");
const formContato = document.querySelector("#formContato");
const resposta = document.querySelector("#resposta");

// Botão "Ver serviços"
if (botaoDestaque && servicos) {
  botaoDestaque.addEventListener("click", () => {
    const offset = 100;
    const posicao = servicos.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: posicao - offset,
      behavior: "smooth"
    });
  });
}

// Formulário de contato
if (formContato && resposta) {
  formContato.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.querySelector("#nome");

    if (nome) {
      resposta.textContent = `Obrigado pelo contato, ${nome.value}!`;
    }
  });
}

// Links da barra de navegação
const linksNavegacao = document.querySelectorAll("nav a");

linksNavegacao.forEach((link) => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault();

    const idSecao = link.getAttribute("href");
    const secao = document.querySelector(idSecao);

    if (secao) {
      const offset = 100;
      const posicao = secao.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: posicao - offset,
        behavior: "smooth"
      });
    }
  });
});
