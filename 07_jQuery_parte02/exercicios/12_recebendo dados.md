Quando realizamos uma requisição AJAX com GET , normalmente estamos interessados em buscar algum dado do servidor. Para que possamos utilizar o dado recebido via GET, devemos deixar isto bem claro no nosso JavaScript.

Quais dos códigos abaixo faz uma requisição AJAX, utilizando um GET, para o endereço http://localhost:3000/frases e imprime corretamente os dados deste endereço no console?

Reposta:

1-$.get("http://localhost:3000/frases", imprimeConsole);
function imprimeConsole(dados){
    console.log(dados);


2-$.get("http://localhost:3000/frases",function(dados){
    console.log(dados);
});

Quando a função $.get vai retornar dados para que sejam utilizados pelo usuário, é preciso colocar nos argumentos da função que é chamada ao sucesso da requisição uma variável que irá conter os dados recebidos. Normalmente colocamos um nome semântico, como dados ou data, para indicar que aquele é o resultado obtido da requisição AJAX:

// Como função anônima
$.get("http://localhost:3000/frases",function(dados){<br>
    console.log(dados);<br>
});<br>
// Como função nomeada
$.get("http://localhost:3000/frases", imprimeConsole);<br>
function imprimeConsole(dados){<br>
    console.log(dados);<br>
}