Sabemos que o document contém a representação de todo o HTML da nossa página, porém na maioria dos casos estamos interessados em apenas uma parte do HTML, e não nele todo.

Qual função podemos utilizar na variável document para especificar que queremos trazer apenas uma parte do HTML ?

Resposta:

document.querySelector();

Quando desejamos pegar apenas parte do HTML, devemos utilizar a função querySelector(). A função querySelector faz a busca através de seletores CSS para trazer o HTML que você está interessado. Por exemplo, no caso abaixo:

<h1 class="titulo"> Meu primeiro site</h1>
Podemos buscar este <h1> passando o seletor CSS correto para a função querySelector. Utilizando o seletor de tag, podemos buscar assim:

document.querySelector("h1");
E utilizando um seletor CSS de classe, ficaria assim:

document.querySelector(".titulo");
Neste caso, ambas as funções retornariam o h1. Ter domínio dos seletores CSS é importante se você deseja trabalhar bem com o Javascript!