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

var tempoRestante = $('#tempo-digitacao').text();

campo.one('focus', function(){

	var cronometroId = setInterval(function(){

		tempoRestante--;

		$('#tempo-digitacao').text(tempoRestante);
		if(tempoRestante < 1){
			campo.attr('disabled', true);
			clearInterval(cronometroId);
		}
	}, 1000);
});