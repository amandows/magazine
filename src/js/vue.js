let swiper1 = document.querySelector('.swiper-1')
var swiperOne = new Swiper(swiper1, {
    loop: true,
    cssMode: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: ".prev1",
        prevEl: ".next1",
    },
    pagination: {
        el: ".pg1",
        dynamicBullets: true,
    },
    mousewheel: true,
    keyboard: true,
});

let menuBtn = document.querySelector('.menu-btn')
let menuBurger = document.querySelector('.burger-menu ')
let one = 0 
menuBtn.addEventListener("click", () => {
    one++
    if(one % 2 == 0) {
        menuBurger.style.cssText = "top: -100%;"
        menuBtn.style.cssText = "transform: rotate(0)"
    }
    else if(one % 2 !== 0) {
        menuBurger.style.cssText = "top: 50px;"
        menuBtn.style.cssText = "transform: rotate(90deg)"
    }
})