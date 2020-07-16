function pulaLinha() {

  document.write("<br>"); 
  document.write("<br>"); 
}

function mostra(frase) {

  document.write(frase);
  pulaLinha();
}

var vitorias = Number(prompt("Entre com o número de vitórias: "));

var empates = Number(prompt("Entre com o número de empates: "));

var pontos = (vitorias * 3) + empates;

mostra("Os pontos so seu time é: " + pontos);

