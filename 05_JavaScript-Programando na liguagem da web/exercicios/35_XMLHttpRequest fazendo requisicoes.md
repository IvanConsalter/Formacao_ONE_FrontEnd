Qual dos códigos abaixo consegue criar um objeto responsável por fazer uma requisição HTTP com o Javascript ?

Resposta:

var xhr = new XMLHttpRequest();

O objeto XMLHttpRequest é quem é responsável por fazer requisições HTTP assíncronas com Javascript. Apesar de ter o XML no nome hoje em dia este objeto pode trafegar diversos outros tipos de dados além do XML, este nome só se manteve devido a um legado histórico.

E para instanciar um novo Objeto XMLHttpRequest devemos utilizar a sintaxe com a palavrinha new :

var xhr = new XMLHttpRequest();