A função .css() também pode ser usada para adicionar novas propriedades, por exemplo:

$("textarea").css("border","2px solid red");

No entanto isso não é considerado boa prática e deve ser evitado. Por quê?

Resposta:

Para facilitar a manutenção devemos declarar as propriedades dentro de um arquivo CSS.

Colocando as propriedades dentro do código JavaScript estamos violando a separação de responsabilidades. HTML é a estrutura da página, JavaScript a parte dinâmica e o CSS define o estilo. Boa prática então é definir os estilos previamente no CSS e usar apenas as classes no JavaScript.