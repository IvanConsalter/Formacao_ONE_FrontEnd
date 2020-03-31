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

	var link = $('<a>').attr('href', '#').attr('id', 'botao-remover');
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

	linha.find('#botao-remover').click(removeLinha);
	corpoTabela.append(linha);

	$('#placar').slideDown(600);
	scrollPLacar();
}

function scrollPLacar(){

	var posicaoPLacar = $('#placar').offset().top;

	$('body').animate(
	{

		scrollTop: posicaoPLacar + 'px'
	}, 1000);
}

$('#botao-sync').click(sincronizaPLacar);
function sincronizaPLacar(){

	var placar = [];
	var linhas = $('tbody>tr');

	linhas.each(function(){

		var usuario = $(this).find('td:nth-child(1)').text();
		var palavras = $(this).find('td:nth-child(2)').text();

		var score = {

			usuario : usuario,
			pontos : palavras
		};

		placar.push(score);//guardando o score no array
	});

	var dados = {

		placar : placar
	};

	$.post('http://localhost:3000/placar', dados, function(){

		alert('Placar sincronizado com sucesso');
	});
}

function atualizaPlacar(){

	$.get('http://localhost:3000/placar', function(data){

		$(data).each(function(){

			var linha = novaLinha(this.usuario, this.pontos);

			linha.find('#botao-remover').click(removeLinha);

			$('tbody').append(linha);
		});
	});
}
