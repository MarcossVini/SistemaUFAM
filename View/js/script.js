var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentslide = 1;
let prev =document.getElementsByClassName('prev');
let next =document.getElementsByClassName('next');


// Função para avançar para o próximo slide
var nextSlide = function() {
    if (currentslide >= slides.length - 1) {
        currentslide = 0;
    } else {
        currentslide++;
    }
    manualNav(currentslide);
};

// Função para voltar para o slide anterior
var prevSlide = function() {
    if (currentslide <= 0) {
        currentslide = slides.length - 1;
    } else {
        currentslide--;
    }
    manualNav(currentslide);
};

// Adicionando event listener para a seta "prev"
prev[0].addEventListener("click", prevSlide);

// Adicionando event listener para a seta "next"
next[0].addEventListener("click", nextSlide);

//slide manual através dos botões de navegação
var manualNav = function(manual){
    slides.forEach((slide) =>{
        slide.classList.remove('active');

        btns.forEach((btn) =>{
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentslide = i;
    });
});
//Slider automatico
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) =>{
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }
            if( i >= slides.lenght){
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();

