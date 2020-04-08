
function ativaScrollSuave(selector) {

    $(selector).click(function(event){
        event.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);  
    });
}


ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-speakers]');
ativaScrollSuave('a[href*=panel-form]');




/*
//código com JavaScript puro
function ativaScrollSuave(selector) {

    document
    .querySelector(selector)
    .addEventListener('click', function(event) {

        event.preventDefault();
        var page = document.querySelectorAll('html, body');
        var origin = Math.max(page[0].scrollTop, page[1].scrollTop);
        var dest = document.querySelector(this.attributes.href.value).offsetTop;
        var time = 500;
        var step = 5;
        var counter = 0;

        var animationId = setInterval(function() {

            counter++;
            page.forEach(function(e) {
                e.scrollTop = origin + ((dest - origin) * counter * step / time);
            });
        }, step);
        setTimeout(function() {

            clearInterval(animationId);
            e.scrollTop = dest;
        }, time);
    });
}

ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-speakers]');
ativaScrollSuave('a[href*=panel-form]');
*/