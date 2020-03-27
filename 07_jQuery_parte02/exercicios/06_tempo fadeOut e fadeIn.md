Qual dos códigos abaixo configura corretamente o efeito de fadeIn para que dure 1,5 segundos, e o evento de fadeOut para que dure 4 segundos?

Resposta:

$("#elemento").fadeIn(1500);<br>
$("#elemento").fadeOut(4000);<br>

Conseguimos configurar a duração das funções de animação do jQuery passando para elas velocidade, em formato de número, para a função. Então se desejamos que um fade dure 2 segundos, devemos informar 2000 milissegundos, pois a animações do jQuery trabalham com milissegundos como unidade de medida.

Também é possível passar outros parâmetros para as funções de animação, como objetos que configuram mais especificamente como a animação deve se comportar, conseguindo até mesmo configurar certas funções para serem executadas ao fim de uma animação. Você pode conferir mais sobre estes detalhes na documentação.

http://api.jquery.com/fadein/