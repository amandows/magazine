let slider1 = document.querySelector('.swaiper-container1')
let slider2 = document.querySelector('.swaiper-container2')
var swiper1 = new Swiper(slider1, {
    speed: 600,
    parallax: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

var swiper2 = new Swiper(slider2, {
    slidesPerView: 6,
    loop: true,
    grid: {
        rows: 1,
    },
    spaceBetween: 15,
    pagination: {
        el: ".pg1",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
});

let saleSwiper = document.querySelector('.swaiper-sale')

var swiper3 = new Swiper(saleSwiper, {
    slidesPerView: 5,
    loop: false,
    grid: {
        rows: 2,
    },
    spaceBetween: 15,
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-prev2",
    },
    mousewheel: true,
    keyboard: true,
});

let saleSwiper2 = document.querySelector('.swaiper-sale2')

var swiper4 = new Swiper(saleSwiper2, {
    slidesPerView: 5,
    loop: false,
    grid: {
        rows: 2,
    },
    spaceBetween: 15,
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-prev2",
    },
    mousewheel: true,
    keyboard: true,
});

let saleSwiper3 = document.querySelector('.swaiper-sale3')

var swiper5 = new Swiper(saleSwiper3, {
    slidesPerView: 5,
    loop: false,
    grid: {
        rows: 2,
    },
    spaceBetween: 15,
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-prev2",
    },
    mousewheel: true,
    keyboard: true,
});



let depart = document.querySelector('.depart-rotate')
let button = document.querySelector('.header-depart')
let grid = document.querySelector('.grid')
let aside = document.querySelector('.aside')

function asideSe() {
    
}
let one = 0
button.addEventListener("click", () => {
    one++
    if(one % 2 == 0) {
        grid.style.cssText = "grid-template-areas: \"header header header\" \"main main main\" \"footer footer footer\";";
        aside.style.cssText = "display: none;";
        depart.style.cssText = "transform: rotate(0)"
    }
    else if(one % 2 !== 0) {
        grid.style.cssText = "grid-template-areas: \"header header header\" \"aside main main\" \"footer footer footer\";";
        aside.style.cssText = "display: block;";
        depart.style.cssText = "transform: rotate(90deg)"
    }
})

let search = document.querySelector('.search')
let categories = document.querySelector('.categories')

search.addEventListener("focus", myFunction);
function myFunction() {
    search.style.cssText = "border-left: 2px solid #3a3a3a; border-top: 2px solid #3a3a3a; border-bottom: 2px solid #3a3a3a;";
    categories.style.cssText = "border-top: 2px solid #3a3a3a; border-bottom: 2px solid #3a3a3a;";
}

search.addEventListener("blur", myFuunction);
function myFuunction() {
    search.style.cssText = "border-left: 2px solid #eeeeee; border-top: 2px solid #eeeeee; border-bottom: 2px solid #eeeeee;";
    categories.style.cssText = "border-top: 2px solid #eeeeee; border-bottom: 2px solid #eeeeee;";
}

let btn1 = document.querySelector('.sale-btn-1')
let btn2 = document.querySelector('.sale-btn-2')
let btn3 = document.querySelector('.sale-btn-3')
let content1 = document.querySelector('.content-1')
let content2 = document.querySelector('.content-2')
let content3 = document.querySelector('.content-3')

btn1.addEventListener('click', () => {
    btn1.style.cssText = "border-bottom: solid 5px #0063d1;"
    btn2.style.cssText = "border-bottom: solid 5px #0062d100;"
    btn3.style.cssText = "border-bottom: solid 5px #0062d100;"
    content1.style.cssText = "display: block;"
    content2.style.cssText = "display: none;"
    content3.style.cssText = "display: none;"
})
btn2.addEventListener('click', () => {
    btn1.style.cssText = "border-bottom: solid 5px #0062d100;"
    btn2.style.cssText = "border-bottom: solid 5px #0063d1;"
    btn3.style.cssText = "border-bottom: solid 5px #0062d100;"
    content1.style.cssText = "display: none;"
    content2.style.cssText = "display: block;"
    content3.style.cssText = "display: none;"
})
btn3.addEventListener('click', () => {
    btn1.style.cssText = "border-bottom: solid 5px #0062d100;"
    btn2.style.cssText = "border-bottom: solid 5px #0062d100;"
    btn3.style.cssText = "border-bottom: solid 5px #0063d1;"
    content1.style.cssText = "display: none;"
    content2.style.cssText = "display: none;"
    content3.style.cssText = "display: block;"
})