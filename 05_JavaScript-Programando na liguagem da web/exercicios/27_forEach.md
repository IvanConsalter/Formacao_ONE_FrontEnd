Em um arquivo JavaScript, há um array de instrutores da Alura:

var nomes = ["Douglas", "Flávio", "Nico", "Rômulo", "Leonardo"];
<br><br>
Para percorrer o array e imprimir cada instrutor, deixando claro que eles são instrutores da Alura, podemos utilizar o loop for:

var nomes = ["Douglas", "Flávio", "Nico", "Rômulo", "Leonardo"];
<br>
for (var i = 0; i < nomes.length; i++) {<br>
    console.log(nomes[i] + " é instrutor da Alura");<br>
}<br><br>

Mas vimos nesse capítulo uma outra forma de iterar sobre os elementos de um array, isto é, com o método forEach(). Como ficaria a implementação anterior, utilizando o forEach()?

Resposta:

nomes.forEach(function(nome) {<br>
    console.log(nome + " é instrutor da Alura");<br>
})<br><br>

Alternativa correta. Em JavaScript, todo array possui a função forEach. Passamos para ela uma função por parâmetro, e nessa função fazemos o que quisermos para cada item do array. O item do array é recebido por parâmetro na função interna.

Todo array possui a função forEach(), em JavaScript. Passamos para ela uma função por parâmetro, e nessa função fazemos o que quisermos para cada item do array. O item do array é recebido por parâmetro na função interna:

nomes.forEach(function(nome) {<br>
    console.log(nome + " é instrutor da Alura");<br>
})<br>