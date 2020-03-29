Rita fez um pequeno teste para saber se realmente era capaz de capturar o retorno de uma requisição Ajax do tipo get e exibir uma frase para o usuário. Ela fez dessa forma:

<'p class="frase">...</'p><br>
<'script src="jquery.js"></'script><br>
<'script><br>
    $.get('http://localhost:3000/frases', function(retorno) {<br>
    <br>
        let primeiraFrase = retorno[0].texto;<br>
        $('.frase').text(primeiraFrase);<br>
    });<br>
</'script><br><br>
Contudo, assim que a página era carregada, a mensagem não era exibida. Depois de ter ficado a ver navios durante um bom tempo e de ter quebrado muito a cabeça foi quando ela percebeu que não havia iniciado o servidor disponibilizado para o treinamento. Depois de subir, seu código funcionou perfeitamente.

Qual das opções abaixo altera corretamente $.get para que exiba a mensagem 'Não foi possível obter a frase do servidor' no parágrafo da página?

Resposta:

$.get('http://localhost:3000/frases', function(retorno) {<br>
<br>
    let primeiraFrase = retorno[0];<br>
       $('.frase').text(primeiraFrase);<br>
<br>
}).fail(function() {<br>
    $('.frase').text('Não foi possível obter a frase do servidor');<br>
});<br><br>

É muito importante lidar com erros nas requisições Ajax porque diversas coisas podem acontecer como a nossa internet ter caído, endereço errado do serviço e até mesmo o servidor estar fora do ar.