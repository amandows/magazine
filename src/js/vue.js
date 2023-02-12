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
    slidesPerView: 5,
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
    }
    else if(one % 2 !== 0) {
        grid.style.cssText = "grid-template-areas: \"header header header\" \"aside main main\" \"footer footer footer\";";
        aside.style.cssText = "display: block;";
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