Teobaldo, programador front end, consultou Tamarindo Junior, programador back end, sobre as informações necessárias para poder acessar uma lista de candidatos aprovados no vestibular. Teobaldo recebeu um cartão com identificador 955 e quer verificar se foi aprovado.

endereço: http://candidatox.com.br/candidatos/resultado
verbo: get
parâmetro: candidatoId
retorno: "aprovado" ou "reprovado"
Com base nessa informação como ficaria a requisição Ajax de Teobaldo para saber se foi aprovado ou não?

Resposta:

$.get('http://candidatox.com.br/candidatos/resultado', { candidatoId: 955 }, function(retorno) {<br>
<br>
    if(retorno == 'aprovado') {<br>
        alert('APROVADO');<br>
    } else {<br>
        alert('REPROVADO');<br>
    }<br>
});<br>


A documentação fornecida pelo programador back end pode variar de empresa para empresa, mas tenha absoluta certeza que essa informação precisa ser passada. Não é obrigação do programador front end adivinhar os endereços e quais parâmetros eles recebem.