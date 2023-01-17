function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();

var burger = document.querySelector('.burger');
burger.addEventListener('click', function () {

  burger.classList.toggle("active");
  document.querySelector('body, .header__burger-page').classList.toggle('lock');
  document.querySelector('.header__burger-page').classList.toggle('lock');



 
}
);














let logoSwiper = new Swiper(".screen__swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: false,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
    speed: 600,
  },
  pagination: {
    el: ".screen-pagination",
    clickable: true,
  },
});
let teamSwiper = new Swiper(".team__slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".team__pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    999: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

let klientiSwiper = new Swiper('.klienty__slider', {
  // loop:true,
  slidesPerView: 2,
  spaceBetween: 0,
  centeredSlides: false,

  navigation: {
    nextEl: '.klienti__arow-next',
    prevEl: '.klienti__arow-prev',
  },
  pagination: {
    el: ".swiper-pag",
    clickable: true,
  },
  breakpoints: {
    485: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    999: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1360: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },

})











