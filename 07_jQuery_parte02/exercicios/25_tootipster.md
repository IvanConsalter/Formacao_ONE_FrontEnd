Herculano criou um pequeno teste para testar o plugin Tooltipster:

<!'DOCTYPE html><br>
<'html><br>
    <'head><br>
        <'link rel="stylesheet" type="text/css" href="css/libs/tooltipster.bundle.min.css" /><br>
    <'/head><br>
<br>
    <'body><br>
        <'p class="tooltip">Aguarde...</'p><br>
        <'button id="botao">Meu teste</'button><br>

<br>
        <'script src="js/jquery.js"></'script ><br>
        <'script src="js/tooltipster.bundle.min.js"></'script>
        <'script><br>
<br>
            $('#botao').click(function() {<br>
<br>
                $('.tooltip').tooltipster("open").tooltipster("Olá, sou uma mensagem do tolltipster"); <br>
<br>
            });<br>
<br>
        </'script><br>
    </'body><br>
</'html><br>
O esperado é que o botão da página, ao ser clicado, ative o tooltipster no parágrafo com a classe tooltip, mas isso não aconteceu. Consegue identificar o problema em seu código? Reflita bastante antes de continuar e veja a resposta do instrutor.

Resposta:

O problema está na chamada

$('.tooltip').tooltipster("open").tooltipster("Olá, sou uma mensagem do tolltipster")


O correto é


$('.tooltip').tooltipster("open").tooltipster("content", "Olá, sou uma mensagem do tolltipster")

Repare que faltou o parâmetro "content".