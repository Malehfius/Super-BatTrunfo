var carta1 = {
  nome: "Batman",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyWuK2pSbkIzrbXsOzEx-fm2TPE0h0JV1Mg&usqp=CAU",
  atributos: {
    ataque: 9,
    defesa: 8,
    tecnologia: 10
  }
};

var carta2 = {
  nome: "Pinguim",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3uGH47GJBguz8AI6rVNCDKY_yUFIy2_2Rg&usqp=CAU",
  atributos: {
    ataque: 3,
    defesa: 5,
    tecnologia: 5
  }
};

var carta3 = {
  nome: "Coringa",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2vMomIkNur7ESCX1a4HoNojNN15HZaI4tKg&usqp=CAU",
  atributos: {
    ataque: 8,
    defesa: 7,
    tecnologia: 5
  }
};

var carta4 = {
  nome: "Robin",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTN_n7QSj0G6t_7q7Fdo7Drw2Q9CPbsoFPMQ&usqp=CAU",
  atributos: {
    ataque: 7,
    defesa: 5,
    tecnologia: 5
  }
};

var carta5 = {
  nome: "Charada",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4i-t5k7NwboZ_2N8be2rOcPpZTzoCkCKziA&usqp=CAU",
  atributos: {
    ataque: 3,
    defesa: 4,
    tecnologia: 4
  }
};

var carta6 = {
  nome: "Mulher Gato",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdbb4U0i3LX2sM4iZFRzbpAe7AXuxxcz-y6w&usqp=CAU",
  atributos: {
    ataque: 8,
    defesa: 8,
    tecnologia: 4
  }
};

var carta7 = {
  nome: "Hera Venenosa",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUKGRZMM5zlFh9Q0LXNKN4mConNvJDWAi1Ag&usqp=CAU",
  atributos: {
    ataque: 5,
    defesa: 8,
    tecnologia: 2
  }
};

var carta8 = {
  nome: "Freeze",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7jUZqDs39w-7Mv5Abr-_r7kQaPuhnsq1N4Q&usqp=CAU",
  atributos: {
    ataque: 7,
    defesa: 5,
    tecnologia: 9
  }
};

var carta9 = {
  nome: "Espantalho",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfG0hPgeYDs2e7YpcBwlfzVBnGX1e-fK2Ow&usqp=CAU",
  atributos: {
    ataque: 7,
    defesa: 4,
    tecnologia: 7
  }
};

var carta10 = {
  nome: "Duas Caras",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhI5KF7a8NOtd02j9tqJdAqCDdK5mYNspRw&usqp=CAU",
  atributos: {
    ataque: 6,
    defesa: 7,
    tecnologia: 2
  }
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 10);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você venceu!</p>";
    document.getElementById("btnJogar").disabled = true;
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você perdeu!</p>";
    document.getElementById("btnJogar").disabled = true;
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou!</p>";
    document.getElementById("btnJogar").disabled = true;
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";

  /*  setTimeout(function () {
    window.location.reload(1);
  }, 3000); */

  /*  window.setTimeout(function () {
    location.reload(1);
  }, 3000); */

  function reload() {
    document.location.reload(1);
  }
  setTimeout(reload, 5000);
}