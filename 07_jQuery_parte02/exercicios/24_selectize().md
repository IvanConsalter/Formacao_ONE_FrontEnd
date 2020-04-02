Verônica criou o seguinte select em sua aplicação:

<'select id="cartoes">
</'select>
Sabemos que para algo ser exibido é necessário haver dentro da tag <'select> tag's <'option>. No entanto, ela quer que o usuário insira automaticamente novos nomes no select. Para isso ela utilizou o plugin Selectize.

Para utilizarmos o plugin é necessário importar seu css, e claro, seu script.

Qual das opções abaixo converte o select criado por Verônica em um select especial do Selectize ordenado e que permite inclusão de novas opções?

Reposta:

$('#cartoes').selectize({<br>
    create: true,<br>
    sortField: 'text'<br>
});<br><br>

Veja que o Selectize caiu igual a uma luva para identificarmos os usuários que participarem de uma partido do nosso Alura Typer.