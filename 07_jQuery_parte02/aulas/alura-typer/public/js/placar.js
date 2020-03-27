/*$('#botao-placar').click(mostraPLacar);

function mostraPLacar(){

	$('#placar').slideToggle(600);
}*/

$('#botao-placar').click(function(){

	$('#placar').stop().slideToggle(600);
});

function novaLinha(usuario, numPalavras){

	var linha = $('<tr>');
	var colunaUsuario = $('<td>').text(usuario);
	var colunaPalavras = $('<td>').text(numPalavras);
	var colunaRemover = $('<td>');

	var link = $('<a>').attr('href', '#').addClass('botao-remover');
	var icone = $('<i>').addClass('small').addClass('material-icons').text('delete');

	linha.append(colunaUsuario);
	linha.append(colunaPalavras);

	link.append(icone);
	colunaRemover.append(link);
	linha.append(colunaRemover);

	return linha;

}

function removeLinha(event){

	event.preventDefault();
	var linha = $(this).parent().parent();
	linha.fadeOut();

	setTimeout(function(){
		linha.remove();
	}, 1000);
}

function inserePlacar(){

	var corpoTabela = $('#placar').find('tbody');
	var usuario = 'nome';
	var numPalavras = $('#contador-palavras').text();

	var linha = novaLinha(usuario, numPalavras);

	linha.find('.botao-remover').click(removeLinha);
	corpoTabela.append(linha);
}
