Durante a aula, o instrutor cria a função fraseAleatoria. Vejamos um esboço dela.

function fraseAleatoria() {
<br>
    $.get('http://localhost:3000/frases', function(retorno) {
<br>
        console.log(retorno[0].texto);
    });<br>
}<br><br>
Quando usamos $.get precisamos passar como primeiro parâmetro o endereço do que desejamos consumir via Ajax. O segundo parâmetro é aquela função que será chamada automaticamente por $.get assim que os dados retornarem do servidor. Esse retorno pode demorar um ou mais segundos, nunca sabemos quando ela será terminada, por isso dizemos que $.get executa um código assíncrono.

Contudo, temos a certeza que, assim que $.get terminar o próprio jQuery chamará por debaixo dos panos a função que passamos como segundo parâmetro em $.get. Ele não apenas a chamará, mas também passará para esta função os dados que vieram do servidor. É por isso que a função passada para $.get recebe um parâmetro, aliás, poderia ser qualquer nome, no caso foi escolhido o nome retorno. O importante é que tenha um parâmetro seja lá qual nome for para que tenhamos acesso ao valor retornado por $.get.

O servidor retorna um array que possui várias frases. Então, se quisermos pegar uma frase de retorno precisamos fazer retorno[0] indicando que queremos pegar o primeiro item do array. Como cada item é um objeto que possui a propriedade texto podemos fazer retorno[0].texto para saber o texto da frase.