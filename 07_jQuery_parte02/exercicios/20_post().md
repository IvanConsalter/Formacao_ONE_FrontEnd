Thathiana sabe que deve acessar o endereço http://xyzzzww.com.br/produtos para enviar produtos. Só é possível enviar um por vez.

A estrutura de um produto é:

{ nome: 'XXXXX', preco: 0}<br>
Qual das opções abaixo constrói corretamente a requisição Ajax que envia um produto?

Resposta:

$.post('http://xyzzzww.com.br/produtos', { nome: 'Guarará', preco: 4.50}, function() {<br>
<br>
    alert('Produto enviado com sucesso');<br>
});<br><br>

O verbo/método post é usado quando desejamos enviar os dados para o servidor. Já o get quando queremos ler um dado.