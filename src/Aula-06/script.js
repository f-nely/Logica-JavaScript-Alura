function pulaLinha() {

  document.write("<br>"); 
  document.write("<br>"); 
}

function mostra(frase) {

  document.write(frase);
  pulaLinha();
}

var numeroPensado = Math.round(Math.random()) * 10;

var j = 0;
while(j < 3){

  var chute = parseInt(prompt("Digite seu chute: "));

  if(chute == numeroPensado) {

    mostra("Você acertou, o número pensado era: " + numeroPensado);
    break;
  } else {
    mostra("Você errou ");
  }
  j++;
}

mostra("FIM");


