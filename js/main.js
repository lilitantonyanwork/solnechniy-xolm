var swiper = new Swiper(".room__gallery", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper2 = new Swiper(".review__list", {
    slidesPerView: 2.6,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0 : {
            slidesPerView: 1,
            loop: false,
        },
        1025: {
            slidesPerView: 3,

        },
        1110: {
            slidesPerView: 2.6,

        },
    },

});
document.addEventListener("DOMContentLoaded", (event) => {
    const menu = document.querySelector('header .menu');
    const menu_btn = document.querySelector('.btn__menu');
    menu_btn.addEventListener('click', function (){
        menu.classList.toggle('active');
    })


});
