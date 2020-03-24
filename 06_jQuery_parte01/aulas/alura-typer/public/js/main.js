var tempoInicial = $('#tempo-digitacao').text();

var campo = $('#campo-digitacao');

$(function(){

	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	$('#botao-reiniciar').click(reiniciaJogo);

});

function atualizaTamanhoFrase(){

	var frase = $('#frase').text();
	var numPalavras = frase.split(' ').length;

	var tamanhoFrase = $('#tamanho-frase');
	tamanhoFrase.text(numPalavras);
}

function inicializaContadores(){

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

}

function inicializaCronometro(){

	var tempoRestante = $('#tempo-digitacao').text();

	campo.one('focus', function(){

		$('#botao-reiniciar').attr('disabled', true);
		var cronometroId = setInterval(function(){

			tempoRestante--;

			$('#tempo-digitacao').text(tempoRestante);
			if(tempoRestante < 1){
				campo.attr('disabled', true);
				clearInterval(cronometroId);
				$('#botao-reiniciar').attr('disabled', false);
			}
		}, 1000);
	});

}

function reiniciaJogo(){

	campo.attr('disabled', false);
	campo.val('');
	$('#contador-palavras').text('0');
	$('#contador-caracteres').text('0');

	$('#tempo-digitacao').text(tempoInicial);
	inicializaCronometro();

}






