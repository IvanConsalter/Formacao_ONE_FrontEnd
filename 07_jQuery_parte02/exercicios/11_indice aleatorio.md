Temos o seguinte código que declara um array com três frases:

var frases = ['Era uma vez...', 'Já se foi o dia...', 'Quando eu era...'];<br>
Sabemos que através de um índice podemos pegar uma frase do array. Por exemplo, se quisermos a segunda frase, fazemos frases[1]. Contudo, em nossa aplicação precisaremos de um índice aleatório para pegarmos diferentes frases.

Qual das opções abaixo gera corretamente um índice de 0 a 2 que permite acessar uma das três frases aleatóriamente?

Resposta:

let frases = ['Era uma vez...', 'Já se foi o dia...', 'Quando eu era...'];<br>
indiceAleatorio = Math.floor(Math.random() * frases.length);<br>
console.log(frases[indiceAleatorio]);<br><br>

A função Math.random() gera um número aleatório 0.XXXXXXXXXXX. Multiplicando este valor por TRÊS podemos ter resultados como:

2.588878147813304
2.014619175605749
1.952490084285769
2.7141347835586345
1.3683070496055605
1.0116465073746952
1.9945331624835434

O problema é que queremos apenas o número decimal, nesse caso usamos Math.floor que arredonda o número para baixo, sendo assim, a aplicação de Math.floor nos valores acima resulta em :

2
2
1
2
1
1
1