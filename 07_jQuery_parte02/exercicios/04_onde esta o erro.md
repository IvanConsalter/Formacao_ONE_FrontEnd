Geraldo, assistindo o vídeo do treinamento criou aquela função que realiza o scroll suave do placar:

function scrollPlacar() {

<br>
    var posicaoPlacar = $('.placar').offset().top;

<br>
    $('body').animate({ scrollTop: posicaoPlacar}, 1000);<br>
}<br>
O problema que o código não esta funcionando. Consegue identificar o problema? Não é necessário responder, a ideia é que você enxergue o ponto que precisa ser alterado. A seguir, você verá a solução na resposta do instrutor.

Resposta:


O erro é que o valor do offset não foi passado com uma unidade de medida, no caso px:<br>

function scrollPlacar() {
<br>
    var posicaoPlacar = $('.placar').offset().top;
<br>
    $('html, body').animate({ scrollTop: <br>posicaoPlacar}, 1000);<br>
}