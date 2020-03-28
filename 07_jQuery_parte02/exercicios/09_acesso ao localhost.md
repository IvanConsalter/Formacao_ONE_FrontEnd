Vimos neste capítulo que ao subir nosso servidor local temos acesso a uma lista de frases através do endereço localhost:3000/frases. Sabemos que por debaixo dos panos o navegador utiliza um verbo do HTTP para buscar os dados e exibí-los na tela.

Contudo, se fizermos isso em nossa aplicação Alura Typer nossa página recarregará e nossa aplicação desaparecerá. É por isso que ao invés de pedirmos esses dados através do navegador, pedimos através do JavaScript, mais notadamente através de uma requisição ajax. Essa requisição não recarrega a tela, contudo é responsabilidade do programador obter os dados retornados e atualizar a página programaticamente através de JavaScript sem perturbar o fluxo da aplicação.

Qual das opções abaixo possui a função do jQuery que corresponde ao acesso feito através de localhost:3000/frases?

Resposta:

$.get('localhost:3000/frases')


O jQuery não faz apenas as mágicas que vimos, ele também serve de ponte de ligação do navegador com algum servidor.