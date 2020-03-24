Dado o código abaixo:

$("h1").on("click",function(){<br>
    console.log("Titulo clicado!");<br>
});<br><br>
Qual das seguintes alternativas possui um código que executa a mesma funcionalidade?

Resposta:

$("h1").click(function(){<br>
    console.log("Titulo clicado!");<br>
});<br>

A função .click() é uma função de atalho para a função .on("click", ...) . Ela tem o mesmo comportamento, apenas sendo um jeito mais curto e rápido de escrever a função.

Os eventos mais comuns do jQuery possuem funções de atalho ( ou shorthand functions, como na documentação) , por exemplo as funções .blur, .focus, .change, .dblclick ...etc. Todos eles equivalem a chamada da função on() passando-os como parâmetro, e existem no jQuery apenas para facilitar a vida do desenvolvedor. As funções de atalho, assim como a função on devem receber uma função como parâmetro, que indica qual ação elas devem executar ao ouvirem o evento.