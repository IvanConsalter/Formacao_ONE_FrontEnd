Sobre a propriedade innerHTML, qual das afirmativas abaixo está INCORRETA?

Resposta:

Para editar o HTML interno de um elemento, basta passar o novo conteúdo por parâmetro para a propriedade.


Não, innerHTML é uma propriedade, não uma função, então ela recebe o novo conteúdo, ou seja, utilizamos um sinal de igual (=):

document.querySelector("#alura").innerHTML = "Novo texto"<br>

Com a propriedade innerHTML, podemos editar obter o conteúdo HTML (HTML interno) de um elemento.

Para editar o HTML interno, como o innerHTML é uma propriedade, utilizamos um sinal de igual (=). Fazemos:

ObjetoDeUmElementoHTML.innerHTML = "Novo conteúdo"
E para obter o HTML interno, fazemos:

ObjetoDeUmElementoHTML.innerHTML
O seu retorno será todo o conteúdo HTML, tanto tags, atributos, classes, etc, no formato de uma String.
