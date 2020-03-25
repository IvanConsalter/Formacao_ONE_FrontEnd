No nosso projeto foi necessário pegar uma parte da frase para comparar a string com aquilo que foi digitado pelo usuário. Lembrando rapidamente do código:

var comparavel = frase.substr(0 , digitado.length);
Usamos a função substr para pegar o uma parte da frase, aqui do início (índice 0) até o tamanho da string digitado. Baseado nessa substring comparavel testamos se o conteúdo digitado bate com a frase:

if(digitado == comparavel) {
 campo.addClass("borda-verde");
} else {
 campo.addClass("borda-vermelha");
}
Como o JavaScript está evoluindo e melhorando já existe uma forma mais fácil de verificar se uma string faz parte da outra string. Se o seu navegador já der suporte ao ECMA Script 6 você pode simplesmente executar:

 var digitouCorreto = frase.startsWith(digitado);
if(digitouCorreto) {
 campo.addClass("borda-verde");
} else {
 campo.addClass("borda-vermelha");
}
Ainda mais enxuto:

if( frase.startsWith(digitado)) {
 campo.addClass("borda-verde");
} else {
 campo.addClass("borda-vermelha");
}
A função startsWith devolve true ou false, se a frase começa com o valor digitado ou não. Teste isso agora no console, digitando por exemplo:

"ECMA Script 6".startsWith("ECMA")
