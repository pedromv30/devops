const botaoDestaque = document.querySelector("#botaoDestaque");
const servicos = document.querySelector("#servicos");
const formContato = document.querySelector("#formContato");
const resposta = document.querySelector("#resposta");
botaoDestaque.addEventListener("click", () => {
 servicos.scrollIntoView({ behavior: "smooth" });
});
formContato.addEventListener("submit", (evento) => {
 evento.preventDefault();
 const nome = document.querySelector("#nome").value;
 resposta.textContent = `Obrigado pelo contato, ${nome}!`;
});
const botaoDestaque = document.querySelector("#botaoDestaque");
const servicos = document.querySelector("#servicos");
const formContato = document.querySelector("#formContato");
const resposta = document.querySelector("#resposta");

botaoDestaque.addEventListener("click", () => {
  servicos.scrollIntoView({ behavior: "smooth" });
});

formContato.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.querySelector("#nome").value;
  resposta.textContent = `Obrigado pelo contato, ${nome}!`;
});

// Botões da barra de navegação
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
