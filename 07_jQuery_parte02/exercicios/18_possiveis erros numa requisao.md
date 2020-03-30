Silvio construiu um pequeno sistema para gerenciar as contas de sua casa. O sistema possui um back end que escuta requisições HTTP do tipo GET, aceitando como parâmetro o ID da conta que ele quer consultar. O endereço de seu sistema é https://gerenciadodecontas.com.br/contas A tabela de IDs de Silvio é a seguinte:

 ______________________
|__ID__|_Conta_|_Orgão_|
|  1   | Água  | Cedae |
|  2   | Luz   | Light |
|  3   | Gás   |  CEG  |
|______|_______|_______|
O sistema deve retornar se a conta já foi paga ou não, e printar no console o resultado. Todavia Silvio está com dificuldades em fazer a requisição AJAX correta para enviar o ID e imprimir os dados da resposta no console. Ele tentou fazer deste modo:

var contaDeAgua = 1;<br>
$.get("https://gerenciadodecontas.com.br/contas", resultado, function(contaDeAgua){<br>
    console.log(resultado);<br>
});<br><br>
Obviamente Silvio não fez os cursos da Alura, pois sua requisição está com vários erros. Selecione todas as opções abaixo que apontam erros da requisição de Silvio:

Respostas:

1- Silvio está tentando enviar o ID pelo parâmetro da função de sucesso, quando na verdade ao enviar um dado pelas funções do jQuery, devemos passá-lo como segundo parâmetro da função GET.

2- Silvio devia esperar o resultado do GET como argumento da função anônima, e não como segundo parâmetro da função $.get(). O segundo parâmetro é destinado aos dados que queremos enviar.

3- Se queremos enviar um dado com as funções do jQuery, como neste caso o ID da conta, ele deve ser uma String ou um objeto Javascript, e Silvio criou a variável contaDeAgua que é um número simples.

Para conseguirmos enviar dados via AJAX, com jQuery, sabemos que precisamos passar os dados como uma String ou um Objeto Javascript simples, como o segundo parâmetro da função $.get().

Também é preciso receber como parâmetro da função de sucesso uma variável que irá conter o retorno do GET.

A função de Silvio ficaria correta assim:

var contaDeAgua = 1;<br>
var dados = {<br>
    id: contaDeAgua<br>
};<br>
$.get("https://gerenciadodecontas.com.br/contas", dados, function(resultado){<br>
    console.log(resultado);<br>
});<br>