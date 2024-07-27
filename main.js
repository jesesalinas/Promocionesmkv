document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000, // Cambia el valor para ajustar el tiempo entre transiciones
        disableOnInteraction: false, // Para que siga el autoplay aunque el usuario interactúe
      },
      breakpoints: {
        576: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  });
  
  
  
  
