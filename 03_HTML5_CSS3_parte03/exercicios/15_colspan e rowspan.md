As tabelas também nos oferecem a possibilidade de juntar células e montar um visual diferente. Por exemplo, quando uma linha, que deveria ter 5 células, passa a mostrar só "uma célula".

Esse efeito é conseguido através da propriedade colspan=X, onde X é o número de células que você quer agrupar.

Portanto, em uma tabela de 5 colunas, para ter uma célula única na linha, usamos um código assim:

<'tr>
    <'td colspan="5">Rio de Janeiro</td> 
</'tr>
<br>
<'tr>
    <'td rowspan="5">Rio de Janeiro</td> 
<'/tr>
<br>
Experimente na sua página para ver o resultado!