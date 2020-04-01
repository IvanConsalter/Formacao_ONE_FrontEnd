Marlon realizou uma compra no site compradasgalaxias.com.br, mas sua mercadoria não foi entregue. Contudo, ele descobriu que o endereço compradasgalaxias.com.br/situacao aceita receber o parâmetro codigo. O código do seu pedido é 171. Ele teve a genial ideia de criar um programa em JavaScript que fica a cada 10 segundos realizando uma requisição para esse endereço para saber a situação de entrega.

Ele criou o arquivo teste.html e criou o seguinte código:

<'script src="jquery.js" ></'script><br>
<'script>
<br><br>
    setInterval(function() {<br>
<br>
        $.get('compradasgalaxias.com.br/situacao', { codigo : 171 }, function(retorno) {<br>
<br>
            console.log(retorno);<br>
        });<br>
<br>
    }, 10000);<br>
</'script><br><br>
Quando ele abriu sua página teste.html ele reparou que de 10 em 10 segundos ele recebia a seguinte mensagem de erro no console:

No'Access-Control-Allow-Origin' header is present on the requested
resource.
Qual das afirmativas abaixo explica corretamente a razão desta mensagem de erro?


Resposta:

O endereço/porta no qual teste.html foi carregado é diferente do endereço/porta da requisição Ajax. Devido ao SOP (same-origin policy) só é possível realizar uma requisição Ajax para o mesmo endereço/porta no qual teste.html foi carregado.