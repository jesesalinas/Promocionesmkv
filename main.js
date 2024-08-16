document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1, // Cambia esta opción para ajustar el número de tarjetas que se mueven por vez
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000, // Cambia el valor para ajustar el tiempo entre transiciones
            disableOnInteraction: false, // Para que siga el autoplay aunque el usuario interactúe
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
                slidesPerGroup: 3, // Ajusta para que el grupo de diapositivas sea de 3
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
                slidesPerGroup: 4, // Ajusta para que el grupo de diapositivas sea de 4
                spaceBetween: 30,
            },
        },
    });
});
  



  
  
  
