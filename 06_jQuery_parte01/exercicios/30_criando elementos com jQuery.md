Como criar um novo elemento HTML (DOM) pelo jQuery?

Resposta:

Pela função $ que recebe o elemento HTML como String, por exemplo: $('<'li>')

Para criarmos elementos do DOM com jQuery, devemos utilizar a própria função jQuery ($) , mas em vez de passarmos um id, classe, ou nome de um elemento para ela buscar, devemos passar uma tag HTML completa( com os sinais < e >), deste modo:

var itemDaLista = $("<'li>");
Depois de criado um elemento na memória do navegador, podemos adicioná-lo a página com algumas das várias funções do jQuery, por exemplo com a append():

var itemDaLista = $("<'li>");
$("ul").append(itemDaLista);
Assim podemos criar novos elementos e adicioná-los ao DOM com o jQuery!