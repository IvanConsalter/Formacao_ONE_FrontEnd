Com os seus conhecimentos de jQuery atuais, qual pedaço de código abaixo modificaria o seguinte HTML de um blog de notícias para que o <h1> da página seja "Meu primeiro blog" , o campo autor de input fique escrito "Daniel" e o tamanho da textarea seja de 40 colunas e 100 linhas.

<'h1 class="titulo">Olá Mundo</'h1>

<'input id="autor" type="text">

<'textarea cols="20" rows="20"></'textarea>
Faça o uso correto das funções .text(), .val() e  .attr().


Resposta:

$(".titulo").text("Meu primeiro blog");<br>
$("#autor").val("Daniel");<br>
$("textarea").attr("cols","40");<br>
$("textarea").attr("rows","100");<br>


Relembrar é viver!

A função .text() do jQuery serve para modificar o conteúdo de texto das tags, então se queremos alterar o texto de um <'h1>, devemos utilizá-la.

A função .val() é para alterar os valores dos campos de input, então se queremos preencher um <'input type="text"> com um valor específico, é ela quem vamos usar.

E por último, a função .attr(), como o próprio nome sugere é para alterar os atributos de elemento, como os atributos rows e col de uma textarea.

Sabemos também que estas funções podem ser utilizadas para pegar, ou modificar valores, dependendo do número de argumentos com quais elas são chamadas.