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
var countDownDate = new Date("Feb 28, 2023 00:00:00").getTime();

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




// Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
    modal.style.display = "none";
    error.textContent = "";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      error.textContent = "";
    }
}

let logPass = {
  aman: {
    password: "1234",
  }
}


// validation function modal window -----------------//
let login = document.querySelector('.login')
let password = document.querySelector('.password')
let error = document.querySelector('.error')
let submit = document.querySelector('.submit')

function signIn() {
  if(login.value == "" || password.value == "") {
    error.textContent = "Логин или пароль не должен быть путым"
    return false
  }
  if(Object.keys(logPass).includes(login.value) == true) {
    if(logPass[login.value].password.includes(password.value) == true) {
      alert("Вы вошли в аккаунт")
      return true
    } else {
      error.textContent = "Пароль неверный"
      return false
    }
  } else {
    error.textContent = "Пользователь не сушествует"
    return false
  }
}

btn.addEventListener('click', () => {
  alert("login: aman, password: 1234")
})






let likeBtn = document.querySelector('.like');
let three = 0;

likeBtn.addEventListener('click', () => {
  three++
  console.log(three);
  if(three % 2 == 0) {
    likeBtn.style.cssText = "background-color: rgba(255, 255, 255, 0.242);";
  }
  else if(three % 2 !== 0) {
    likeBtn.style.cssText = "background-color: #ff0101;";
}
})




let btnx = document.querySelector('.more-products-btn');
let productWiev1 = document.querySelectorAll('.product-wiev-1');
let productWiev2 = document.querySelectorAll('.product-wiev-2');
let two = 0
btnx.addEventListener('click', () => {
  two++
  console.log(two)
  if(two == 1) {
    productWiev1.forEach(function(product) {
      product.style.display = 'block';
    });
  }
  if(two == 2) {
    productWiev2.forEach(function(products) {
      products.style.display = 'block';
      btnx.style.cssText = "display: none;";
    });
  }
});


let popularProductsBtn = document.querySelector('.popular-products');
let newestProductsBtn = document.querySelector('.newest-products');
let discountedProductsBtn = document.querySelector('.discounted-products');
let products = document.querySelector('.products');
let products1 = document.querySelector('.products-1');
let products2 = document.querySelector('.products-2');

popularProductsBtn.addEventListener('click', () => {
  products.style.cssText = "display: grid;"
  products1.style.cssText = "display: none;"
  products2.style.cssText = "display: none;"
  popularProductsBtn.style.cssText = "background-color: #2a4aff; color: #f7f7f7;"
  newestProductsBtn.style.cssText = "background-color: #f7f7f7; color: #222222;"
  discountedProductsBtn.style.cssText = "background-color: #f7f7f7; color: #222222;"  
})

newestProductsBtn.addEventListener('click', () => {
  products.style.cssText = "display: none;"
  products1.style.cssText = "display: grid;"
  products2.style.cssText = "display: none;"
  popularProductsBtn.style.cssText = "background-color: #f7f7f7; color: #222222;"
  newestProductsBtn.style.cssText = "background-color: #2a4aff; color: #f7f7f7;"
  discountedProductsBtn.style.cssText = "background-color: #f7f7f7; color: #222222;"  
})

discountedProductsBtn.addEventListener('click', () => {
  products.style.cssText = "display: none;"
  products1.style.cssText = "display: none;"
  products2.style.cssText = "display: grid;"
  popularProductsBtn.style.cssText = "background-color: #f7f7f7; color: #222222;"
  newestProductsBtn.style.cssText = "background-color: #f7f7f7; color: #222222;"
  discountedProductsBtn.style.cssText = "background-color: #2a4aff; color: #f7f7f7;"  
})










// Получаем элементы с классами "news-1", "news-2", "news-3"
var newsItems = document.querySelector('.news-1');
var newsItems1 = document.querySelector('.news-2');
var newsItems2 = document.querySelector('.news-3');

  // Определяем параметры запроса для новостей
var query = 'Технология'; // Задайте свой запрос для новостей
var apiKey = '11d6fbfa57be48988ea03d6a7fcced35'; // Ваш ключ API

  // Формируем URL запроса к API Google News
var url = 'https://newsapi.org/v2/everything?q=' + encodeURIComponent(query) + '&apiKey=' + apiKey;

  // Запрашиваем новости у API Google News
fetch(url)
  .then(response => response.json())
  .then(data => {
      // Извлекаем список статей из ответа
    var articles = data.articles;

    let randomNumber = Math.floor(Math.random() * 11) + 1;
    let randomNumber1 = Math.floor(Math.random() * 11) + 10;
    let randomNumber2 = Math.floor(Math.random() * 11) + 20;
      // Извлекаем первую статью
    var article = articles[0];
    var article1 = articles[1];
    var article2 = articles[2];

      // Создаем элементы для заголовка, изображения и описания новости
    var title = document.createElement('h2');
    var title1 = document.createElement('h2');
    var title2 = document.createElement('h2');
    var image = document.createElement('img');
    var image1 = document.createElement('img');
    var image2 = document.createElement('img');
    var description = document.createElement('p');
    var description1 = document.createElement('p');
    var description2 = document.createElement('p');

      // Задаем значения атрибутов и содержимое элементов
    title.textContent = article.title;
    title1.textContent = article1.title;
    title2.textContent = article2.title;
    image.src = article.urlToImage;
    image1.src = article1.urlToImage;
    image2.src = article2.urlToImage;
    description.textContent = article.description;
    description1.textContent = article1.description;
    description2.textContent = article2.description;

      // Добавляем элементы в текущий элемент
    newsItems.appendChild(title);
    newsItems.appendChild(image);
    newsItems.appendChild(description);
    newsItems1.appendChild(title1);
    newsItems1.appendChild(image1);
    newsItems1.appendChild(description1);
    newsItems2.appendChild(title2);
    newsItems2.appendChild(image2);
    newsItems2.appendChild(description2);
    });

