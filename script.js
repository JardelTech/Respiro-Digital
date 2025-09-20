const mensagens = [
  {
    texto:
      "A gentileza é o jeito mais bonito de ser sol no dia nublado de alguém.",
    autor: "Autor Desconhecido",
  },
  {
    texto:
      "Respire fundo por um minuto. Sinta o ar entrar e sair. Às vezes, uma única respiração consciente é tudo o que precisamos.",
    autor: "Dica de Bem-estar",
  },
  {
    texto:
      "Não se compare com os outros. A jornada de cada um é única. Celebre o seu próprio progresso.",
    autor: "Princípio do Autocuidado",
  },
  {
    texto:
      "Permita-se não fazer nada. O descanso não é preguiça, é parte essencial do processo de recarregar as energias.",
    autor: "Lembrete Importante",
  },
  {
    texto:
      "Um pequeno passo em uma nova direção pode ser o início de uma grande jornada. Qual é o seu pequeno passo hoje?",
    autor: "Reflexão do Dia",
  },
  {
    texto:
      "Beba um copo de água. Hidratar o corpo é um ato simples e poderoso de cuidado com você mesmo.",
    autor: "Dica de Saúde",
  },
  {
    texto:
      "O que você agradece hoje? Focar na gratidão muda a perspectiva e acalma o coração.",
    autor: "Exercício de Gratidão",
  },
  {
    texto:
      "Você é mais forte do que imagina e já superou 100% dos seus piores dias.",
    autor: "Lembrete de Força",
  },
  {
    texto:
      "Alongue o corpo por cinco minutos. Estique os braços, as pernas, o pescoço. Sinta a tensão se dissipar.",
    autor: "Dica de Bem-estar",
  },
  {
    texto:
      "O sucesso não é a ausência de fracasso; é a persistência através do fracasso.",
    autor: "Aisha Tyler",
  },
  {
    texto:
      "Acredite no poder dos seus sonhos. Eles foram dados a você por uma razão.",
    autor: "Autor Desconhecido",
  },
  {
    texto:
      "Feche os olhos e pense em um lugar que lhe traz paz. Fique lá por um instante.",
    autor: "Exercício de Visualização",
  },
];

const textoMensagemEl = document.getElementById("texto-mensagem");
const autorMensagemEl = document.getElementById("autor-mensagem");
const gerarMensagemBtn = document.getElementById("gerar-mensagem-btn");
const containerFraseEl = document.getElementById("container-frase");

let ultimoIndice = -1;

function gerarNovaMensagem() {
  let novoIndice;
  do {
    novoIndice = Math.floor(Math.random() * mensagens.length);
  } while (mensagens.length > 1 && novoIndice === ultimoIndice);

  ultimoIndice = novoIndice;

  const mensagemSelecionada = mensagens[novoIndice];

  containerFraseEl.classList.remove("fade-in");
  containerFraseEl.classList.add("fade-out");

  setTimeout(() => {
    textoMensagemEl.textContent = `"${mensagemSelecionada.texto}"`;
    autorMensagemEl.textContent = `- ${mensagemSelecionada.autor}`;

    containerFraseEl.classList.remove("fade-out");
    containerFraseEl.classList.add("fade-in");
  }, 700);
}

gerarMensagemBtn.addEventListener("click", gerarNovaMensagem);

window.addEventListener("load", () => {
  containerFraseEl.classList.add("fade-in");
});
