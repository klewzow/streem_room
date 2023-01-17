
$(document).ready(function () {
    $('.swiper').slick({

        // Стрелки
        arrows: false,
        //Точки
        dots: true,
        //Адаптивная высота если разные картинки
        adaptiveHeigth: true,

        // к-во слайдов на слайдере
        slidesToShow: 1,

        // по сколько слайдов прокручивать
        slidesToScroll: 1,

        //speed
        speed: 1000,

        // Еип анимации
        easing: 'linear',

        //бесконечный ли слайдер
        infinite: true,

        //с какого слайда стартовать
        initialSlide: 1,

        //Автопрокрутка
        autoplay: true,

        //Автопрокрутка скорость
        autoplaySpeed: 3000,

        //Пауза при фокусе
        pauseOnFocus: true,

        //Пауза при наведении
        pauseOnHover: true,

        //Пауза при наведении на элементы управления
        pauseOnDotsHover: true,
        //=============================================================SWIPE================================================================================
        // Убрать свайп на пк
        draggable: true,
        // Убрать свайп на Mobile(ели убрать не работает draggable тоже)
        swipe: true,

        //сколько тянуть при свайпе default 5
        touchThresHold: 5,

        //хуйня когда тягаешь туду сюда
        touchMove: true,
        //=============================================================SWIPE================================================================================
        //скорость клика на елементах управления
        waitForAnimate: false,

        //Добавлять центральному слайду class center (для работы как с отдельным классом)
        centerMode: false,

        //Не меняет размеры изображений
        variableWidth: false,

        // сколько слайдов в ряд
        rows: 1,

        // сколько рядов в сдайде
        slidesPerRow: 1,

        // Вертикальный (выключай flex)
        vertical: false,

        // Вертикальная прокрутка 
        verticalSwipe: false,


        //Для обьединения слайдеров (класс одного вписать в другой)
        // asNavFor:'className',

        //смена картинки без слайда(одна картинка за другой)
        fade: false,


        // Брекпоинты
        responsive: [
            {

                breakpoint: 768,
                settings: {
                    // // к-во слайдов на слайдере
                    // slidesToShow: 2,

                    // // по сколько слайдов прокручивать
                    // slidesToScroll: 2,
                }
            },
            {

                breakpoint: 400,
                settings: {
                    // // к-во слайдов на слайдере
                    // slidesToShow: 1,

                    // // по сколько слайдов прокручивать
                    // slidesToScroll: 1,
                }
            }
        ],
        mobileFirst: true,
        //переместить кнопки уравления в обьект
        //  appendArrows: $('.button__search'),


    });
   

});