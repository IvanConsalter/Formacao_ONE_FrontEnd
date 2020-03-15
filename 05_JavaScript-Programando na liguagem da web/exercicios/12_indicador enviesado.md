Rogério era um programador da empresa Sentec Enterprises, e ele ficou responsável de fazer o site que exibe os indicadores de sua empresa, para mostrar para os clientes e possíveis investidores como a empresa havia se desempenhado nos últimos anos.

O indicador é calculado como a imagem abaixo:

Indicador de Taxa de Sucesso: taxa = vendas / clientes abordados * media tentativas por cliente

Rogério conseguiu obter os valores de vendas, clientes abordados e média de tentativas por cliente corretamente, porém quando ele realiza o cálculo ele não obtêm o valor esperado. Veja o exemplo que ele está trabalhando:

var vendas = 10;
var clientesAbordados = 25;
var mediaTentativasPorCliente = 4;

var taxa = 0;

taxa = vendas / clientesAbordados *  mediaTentativasPorCliente;
console.log(taxa);

O valor que ele esperava obter era 0.1, afinal a conta é simples, basta dividir 10 (vendas) , por 100 ( clientesAbordados x mediaTentativasPorCliente). Porém sempre que ele imprime o resultado no console, aparece o valor de 1.6, mostrando um indicador muito mais alto do que ele deveria ser!

Qual das afirmativas abaixo explica o resultado estranho que Rogério está obtendo ?

Resposta:

O Rogério não está levando em conta a ordem dos operadores em Javascript. Se ele não disser que a multiplicação deve ser feita primeiro, envolvendo-a com parênteses, ele sempre vai obter o resultado errado, pois o Javascript vai ler sua conta da esquerda para a direita, e vai resolver primeiro o bloco vendas / clientesAbordados e depois multiplicar por mediaTentativasPorCliente.

Assim como nós calculávamos o IMC, Rogério cometeu um simples erro que estragou o resultado de sua conta. Ele não levou em conta os parênteses e por isso o Javascript executou sua conta de modo errado, veja:

taxa = vendas / clientesAbordados *  mediaTentativasPorCliente;

Como não dissemos para o Javascript que a multiplicação deveria ser feita primeiro, ele entende que não há uma prefêrencia entre os operadores de divisão e multiplicação e começa a fazer a conta da esquerda para a direita, realizando primeiro este bloco:

vendas / clientesAbordados
//Resultado 
10 / 25 = 0.4

Que nos dá como resultado o número 0.4. Em seguida, o Javascript dá continuidade ao cálculo e faz próxima operação, que é a multiplicação:

0.4 *  mediaTentativasPorCliente;
// Resultado
0.4 * 4 = 1.6

Que era o resultado estranho que Rogério estava obtendo! Se queremos consertar este erro, basta apenas adicionarmos os parênteses quando estamos realizando a multiplicação que assim como na Matemática, tudo é resolvido na ordem desejada! Veja:

taxa = vendas / (clientesAbordados *  mediaTentativasPorCliente);

Faça o teste em seu navegador e veja a diferença que um simples parêntese pode fazer!