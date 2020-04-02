Rogério aprendeu a utilizar jQuery assistindo este treinamento e chegou no capítulo de plugins. Ele baixou o Slick para poder adicionar um Carrousel. O esboço do seu código é:

<!'DOCTYPE html><br>
<'head><br>
    <!-- código anterior omitido -->
    <'link rel="stylesheet" href="slick/slick.css"/><br>
    <'link rel="stylesheet" href="slick/slick-theme.css"/><br>
</'head><br>
<'body><br>
    <!-- código anterior omitido -->
<br>
    <'script src="slick/slick.min.js"></'script><br>
    <'script src="js/slider.js"></'script><br> <!-- com o conteúdo apresentado no vídeo -->
    <'script src="js/jquery.js"></'script><br>
</'body><br><br>
Contudo, seu código não funciona! Reflita sobre o possível erro antes de continuar. A seguir, você verá resposta do instrutor.

Resposta:

O problema é que o plugin e o script que utiliza o plugin foram carregados antes do jQuery. O jQuery precisa ser carregado antes para que o plugin se registre na biblioteca.