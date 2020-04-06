Dentre as opções, qual o melhor valor para o viewport?

Resposta:

<'meta name="viewport" content="width=device-width"><br>

A opção <'meta name="viewport" content="width=device-width"> está correta por adaptar de acordo com o tamanho da tela de cada dispositivo. E é considerado má prática desabilitar o zoom do usuário.

Mas existe um bug conhecido no iOS que faz com que o viewport não se adapte ao rotacionar o dispositivo. Uma gambiarra que evita o bug é colocar o viewport como <'meta name="viewport" content="width=device-width, initial-scale=1">.