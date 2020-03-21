Considerando o código abaixo:

<'input id="botao" type="button"><br>
<'script><br>
   $('#botao').on(???);<br>
</'script><br><br>
E que estejamos interessados em responder a um click no botão exibindo uma mensagem.

O que a função on deve receber como parâmetro? Marque todas as alternativas que se adequarem:

Respostas:

1-O nome do evento e uma função nomeada

2-O nome do evento e uma função anônima


A função on() do jQuery, recebe como parâmetro dois argumentos: O primeiro sendo uma string com o nome do evento que ela vai passar a escutar e o segundo uma função, com a ação que ela deve executar quando o evento acontecer.

O nome do evento são os nomes do eventos comuns do Javascript, como de click, input, focus, dblclick entre outros.

A função pode ser tanto uma função anônima:

<'input id="botao" type="button"><br>
<'script><br>
   $('#botao').on("click",function(){<br>
        console.log("Fui clicado")!<br>
    });<br>
</'script><br>
Quanto uma função nomeada:

<'input id="botao" type="button"><br>
<'script><br>
   $('#botao').on("click",exibeMensagem);<br>

   function exibeMensagem(){
   <br>
       console.log("Fui clicado")!<br>
   }<br>
</'script><br>


