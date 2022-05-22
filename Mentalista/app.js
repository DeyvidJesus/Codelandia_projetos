var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var resultado = document.getElementById("resultado");

  if (chute == numeroSecreto) {
    resultado.innerHTML = "Acertou, vamos para outra rodada.";
    numeroSecreto = parseInt(Math.random() * 11);
    tentativas = 3;
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Você precisa digitar um número entre 0 e 10";
  } else if (numeroSecreto > chute) {
    tentativas = tentativas - 1;
    resultado.innerHTML = "Você chutou muito baixo, tente novamente!";
  } else if (numeroSecreto < chute) {
    tentativas = tentativas - 1;
    resultado.innerHTML = "Você chutou muito alto, tente novamente!";
  }

  if (tentativas == 0) {
    resultado.innerHTML =
      "Acabaram suas chances o resultado era " + numeroSecreto + ".";
    numeroSecreto = parseInt(Math.random() * 11);
    tentativas = 3;
  }
}
