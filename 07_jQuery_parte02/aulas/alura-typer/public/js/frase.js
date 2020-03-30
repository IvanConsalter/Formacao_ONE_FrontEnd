$('#botao-frase').click(function(){

	$('#spinner').toggle();

	$.get('http://localhost:3000/frases', trocaFraseAleatoria)
	.fail(function(){

		$('#erro').toggle();
		setTimeout(function(){
			$('#erro').toggle();
		}, 2000);

	})
	.always(function(){
		$('#spinner').toggle();
	});
	
});

function trocaFraseAleatoria(data){

	var frase = $('.frase');
	var numeroAleatorio = Math.floor(Math.random() * data.length);

	frase.text(data[numeroAleatorio].texto);
	atualizaTamanhoFrase();
	atualizaTempoInicial(data[numeroAleatorio].tempo);
}

$('#botao-frase-id').click(buscaFrase);
function buscaFrase(){

	$('#spinner').toggle();
	var fraseId = $('#frase-id').val();

	//criando objeto JS que guarda a id
	var dados = {id: fraseId};

	//passando objeto como segundo parametro
	$.get('http://localhost:3000/frases', dados, trocaFrase)
	.fail(function(){

		$('#erro').toggle();
		setTimeout(function(){

			$('#erro').toggle();
		}, 2000);
	})
	.always(function(){

		$('#spinner').toggle();
	});

}

function trocaFrase(data){

	console.log(data);

	var frase = $('#frase');
	frase.text(data.texto);//cuidado esse é o texto com 'o' no final
	atualizaTamanhoFrase();
	atualizaTempoInicial(data.tempo);
}