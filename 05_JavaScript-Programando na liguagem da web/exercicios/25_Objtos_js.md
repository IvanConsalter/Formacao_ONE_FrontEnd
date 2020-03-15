O que está errado com o objeto Javascript abaixo ?

var carro = {<br>
    cor = "azul",<br>
    modelo = "fusca",<br>
    marca = "Volkswagen",<br>
    kms = 10000,<br>
    combustivel = "gasolina"<br>
}<br>
<br>
Resposta:

Não utilizamos o sinal de = entre a propriedade e o valor dela em um objeto Javascript, e sim o sinal de :. O correto seria:

var carro = {<br>
    cor : "azul",<br>
    modelo : "fusca",<br>
    marca : "Volkswagen",<br>
    kms: 10000,<br>
    combustivel : "gasolina"<br>
}<br><br>

Correto, quando declaramos um objeto no Javascript utilizamos o sinal de : para separar propriedades e seus valores.

Utilizamos objetos no Javascript como na maioria das linguagens de programação orientadas , aonde os objetos podemos compará-los com objetos da vida real. Um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades. Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.

Para declaramos um objeto, utilizamos a sintaxe com {}, exemplo:

var xicara = {};<br>
Só que de nada nos serve um objeto vazio, então podemos dar características a este objeto através de suas propriedades:

var xicara = {<br>
    cor: "azul",<br>
    peso: 125,<br>
    tipo: "chá"<br>
};<br><br>
As propriedades de um objeto são separadas por um : do seu valor e utilizamos uma vírgula ao final de cada propriedade para separá-la da próxima. Podemos acessar as propriedades de um objeto Javascript como abaixo:

xicara.cor // azul<br>
xicara.peso // 125<br>
xicara.tipo // chá<br>
xicara.modelo // undefined, este objeto não possui a propriedade modelo<br><br>
Ou seja, nosso exemplo estava errado por que estava utilizando o sinal de = em vez do de : para separar as propriedades de seus valores.