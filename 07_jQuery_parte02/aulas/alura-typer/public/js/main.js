var tempoInicial = $('#tempo-digitacao').text();

var campo = $('#campo-digitacao');

$(function(){

	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	inicializaMarcadores();
	atualizaPlacar();
	$('#botao-reiniciar').click(reiniciaJogo);

	$('#usuarios').selectize({

		create: true,
		sortField: 'text'
	});

	$('.tooltip').tooltipster({

		trigger: 'custom'
	});

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

	campo.one('focus', function(){

		var tempoRestante = $('#tempo-digitacao').text();

		$('#botao-reiniciar').attr('disabled', true);
		var cronometroId = setInterval(function(){

			tempoRestante--;

			$('#tempo-digitacao').text(tempoRestante);
			if(tempoRestante < 1){
				
				clearInterval(cronometroId);
				campo.attr('disabled', true);
				campo.toggleClass('campo-desativado');
				inserePlacar();
				
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
	campo.toggleClass('campo-desativado');
	campo.removeClass('borda-vermelha');
	campo.removeClass('borda-verde');

}

function inicializaMarcadores(){

	campo.on('input', function(){

		var frase = $('.frase').text();

		var digitado = campo.val();
		var comparavel = frase.substr(0, digitado.length);

		if(digitado == comparavel){
			campo.addClass('borda-verde');
			campo.removeClass('borda-vermelha');
		} else {
			campo.addClass('borda-vermelha');
			campo.removeClass('borda-verde');
		}
	});
}

function atualizaTempoInicial(tempo){

	tempoInicial = tempo;
	$('#tempo-digitacao').text(tempo);
}








