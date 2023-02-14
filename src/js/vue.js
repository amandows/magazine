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





// Установка даты, до которой считать обратный отсчет
var countDownDate = new Date("Mar 31, 2023 00:00:00").getTime();

// Обновление таймера каждую секунду
var x = setInterval(function() {

  // Получение текущей даты и времени
    var now = new Date().getTime();
  // Вычисление времени, оставшегося до даты обратного отсчета
    var distance = countDownDate - now;

  // Вычисление дней, часов, минут и секунд
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Отображение времени на странице
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

  // Если обратный отсчет закончился, вывести сообщение
}, 1000);
