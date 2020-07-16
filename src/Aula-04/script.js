function pulaLinha() {

  document.write("<br>"); 
  document.write("<br>"); 
}

function mostra(frase) {

  document.write(frase);
  pulaLinha();
}

var anoCopa = 1960;
while(anoCopa <= 2016) {
  console.log("Teve copa em " + anoCopa)
  anoCopa += 4;
}
