function pulaLinha() {

  document.write("<br>"); 
  document.write("<br>"); 
}

function mostra(frase) {

  document.write(frase);
  pulaLinha();
}

for(var i = 0; i < 3; i++){

  for(var j = 0; j < 10; j++){
      document.write("*");
  }
  pulaLinha();
}