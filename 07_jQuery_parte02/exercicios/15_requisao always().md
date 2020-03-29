Tatiana aprendeu a lidar com possíveis erros em requisições e escreveu o seguinte esboço de código:

$.get('http://localhost:3000/frases', function(retorno) {<br>
<br>
    console.log('requisição efetuada com sucesso');<br>
    console.log('FIM');<br>
<br>
}).fail(function() {<br>
    console.log('requisição fracassou!');<br>
    console.log('FIM');<br>
});<br><br>
Ela imprime uma mensagem de sucesso e uma mensagem de fracasso, contudo, veja que nos dois casos ela também imprime a mensagem "FIM" para indicar o fim da requisição.

Qual das opções abaixo altera o código de Tatiana para que exibe em um único lugar a mensagem FIM logo depois da mensagem de sucesso ou fracasso?


Resposta:

$.get('http://localhost:3000/frases', function(retorno) {<br>
<br>
    console.log('requisição efetuada com sucesso');<br>
<br>
}).fail(function() {<br>
<br>
    console.log('requsição fracassou!');
<br>

}).always(function() {<br>
    console.log('FIM');<br>
});<br><br>

A função passada para always será sempre chamada independente de a requisição foi bem ou mal sucedida.