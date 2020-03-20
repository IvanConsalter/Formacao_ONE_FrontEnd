Qual a diferença entre as versões de produção e de desenvolvimento do jQuery?

Resposta:

A versão de produção é minificada, já a de desenvolvimento vem em sua forma normal.


Alternativa correta


A grande diferença está na minificação da versão de produção em relação a versão de desenvolvimento. Minificar é o processo de reduzir o tamanho de um arquivo fazendo certos processos como remover comentários, trocar nome de váriaveis por nomes menores, remover espaços entre outras técnicas.

A versão de produção, por ser minificada, tem um tamanho reduzido, sendo incrívelmente 30% do peso da versão de desenvolvimento. Utilizar a versão de produção quando estamos disponibilizando a versão final do nosso website para o usuário é de extrema importância, pois conseguimos onerar menos a banda de nossos usuários, algo que é bem interessante nos dias de hoje, já com o aumento dos acessos a website via mobile a maioria dos usuários depende de redes 3G e 4G, que são naturalmente mais limitadas.

Mas já ao desenvolver um website, é comum utilizarmos a versão de desenvolvimento, pois podemos ver como uma determinada função do jQuery foi implementada e fica mais fácil debuggar em caso de necessidade.