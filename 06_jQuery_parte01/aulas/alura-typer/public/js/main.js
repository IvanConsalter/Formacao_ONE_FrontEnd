var frase = $('#frase').text();
var numPalavras = frase.split(' ').length;

var tamanhoFrase = $('#tamanho-frase');
tamanhoFrase.text(numPalavras);

var campo = $('#campo-digitacao');

campo.on('input', function(){

	var conteudo = campo.val();

	//Retira os espaços da String
	var conteudoSemEspaco = conteudo.replace(/\s+/g, '');
	var qtdPalavras = conteudo.split(/\S+/).length - 1;
	$('#contador-palavras').text(qtdPalavras);

	//var qtdCaracteres = conteudo.length;
	var qtdCaracteres = conteudoSemEspaco.length;
	$('#contador-caracteres').text(qtdCaracteres);
});