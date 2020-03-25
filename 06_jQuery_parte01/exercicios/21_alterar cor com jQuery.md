Dado o HTML seguinte:

<html><br>
 <body><br>
     <h1>Alura - Treinamentos online</h1><br>
     <script src="js/jquery.js"></script><br>
    <script><br>
        AQUI<br>
    </script><br>
 </body><br>
</html><br><br>
Qual é o código que devemos inserir no lugar de //AQUI para alterar a cor do texto do elemento h1?

Resposta:

$('h1').css('color', 'blue');

Novamente o jQuery ajuda muito, podemos selecionar o elemento h1 e aplicar a função css():

$('h1').css('color', 'blue');