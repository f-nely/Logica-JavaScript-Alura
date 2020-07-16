function pulaLinha() {

  document.write("<br>"); 
  document.write("<br>"); 
}

function mostra(frase) {

  document.write(frase);
  pulaLinha();
}

var QtIdade = Number(prompt("Informe a quantidade de familiares: ")); 
var acIdade = 0;
for(var i = 0; i < QtIdade; i++){
  var idade = Number(prompt("Informe a idade: ")); 
  acIdade += idade;
}

var mediaIdade = acIdade/QtIdade;
mostra("A média das idades é: " + mediaIdade);
mostra("O total de idade é: " + acIdade);