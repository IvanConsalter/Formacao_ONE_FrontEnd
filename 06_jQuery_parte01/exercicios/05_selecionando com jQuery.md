Quais das opções abaixo selecionam corretamente o parágrafo que está no seguinte HTML:

<'body>
    <'h1 id="titulo">Introdução ao Javascript</'h1>
    <'p id="introducao" class="principal">Javascript é uma das linguagens mais importantes de nosso tempo, 
justamente por ser entendida pelos mais diversos navegadores (desktop/mobile).</'p>
</'body>

Resposta:

1-var paragrafo = $("#introducao");<br>

Seleciona corretamente, busca pelo seletor de id do CSS, e como o parágrafo tem o id introducao ele é selecionado.

2-var paragrafo = jQuery(".principal");<br>

Seleciona corretamente, estamos utilizando seletor de classe do CSS (.) e buscando pela classe principal, que o paragrafo possuí.


3-var paragrafo = $(".principal#introducao");<br>

Seleciona corretamente, pois busca por um elemento que tem a classe principal E e também tem o id introducao, que é o nosso caso.

4-var paragrafo = $("p");<br>

Seleciona corretamente, estamos buscando pelo seletor de elemento do CSS. Esta busca nos retorna todos os <'p> da página. Como só temos um , ele retorna o desejado.

Para selecionarmos um elemento HTML com jQuery, utilizamos sua função seletora que tem o mesmo nome da framework, a função jQuery! Ela pode ser invocada de dois modos, o primeiro que é utilizando seu nome completo:

jQuery();
ou a mais comum que é utilizando o atalho conhecido para a função jQuery, o $:

$();
Como este segundo modo é muito mais fácil de digitar e muito mais utilizado no mercado de desenvolvimento Web, é ele que utilizaremos ao longo deste treinamento.

A função seletora aceita como parâmetro seletores CSS , então como vimos no exercício, ela pode aceitar qualquer tipo de seletor, seja de id(#), classe(.), elemento etc.

Devemos passar o seletor entre aspas, então um exemplo para selecionar o título da página seria:

var titulo = $("#titulo");<br>
Ela será uma das funções que mais utilizaremos ao longo do treinamento, então vamos ganhar prática com ela!