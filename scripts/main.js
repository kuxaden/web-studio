
function openMenu() {
   document.querySelector(".menu-list").classList.toggle('menu-list--active');
   document.querySelector(".navbar-btn").classList.toggle('navbar-btn--active');
};
function closeMenu() {
   document.querySelector(".menu-list").classList.remove('menu-list--active');
   document.querySelector(".navbar-btn").classList.remove('navbar-btn--active');
};


$('.stage__item').click(function (event) {
   $('.stage__item').removeClass('stage__item--active');
   $(this).addClass('stage__item--active');
});

$('.portfolio__item').click(function (event) {
   $('.portfolio__item').removeClass('portfolio__item--scroll');
   $(this).addClass('portfolio__item--scroll');
});

$('.portfolio__item').click(function (event) {
   $('.portfolio__item').removeClass('portfolio__item--scroll');
   $(this).addClass('portfolio__item--scroll');
});

$(document).ready(function () {
   $('.slider').slick({
      infinite: false,
   });
});
$('.stage__item0').click(function (event) {
   $('.slider').slick('goTo', 0);
})
$('.stage__item1').click(function (event) {
   $('.slider').slick('goTo', 1);
})
$('.stage__item2').click(function (event) {
   $('.slider').slick('goTo', 2);
})
$('.stage__item3').click(function (event) {
   $('.slider').slick('goTo', 3);
})
$('.stage__item4').click(function (event) {
   $('.slider').slick('goTo', 4);
})
$('.stage__item5').click(function (event) {
   $('.slider').slick('goTo', 5);
})
$('.stage__item6').click(function (event) {
   $('.slider').slick('goTo', 6);
})

$(document).on("click", ".slick-arrow.slick-next", function (e) {
   var selectedItem = $('.stage__list').find('.stage__item--active');
   selectedItem.removeClass('stage__item--active');
   selectedItem.next().addClass('stage__item--active');
});
$(document).on("click", ".slick-arrow.slick-prev", function (e) {
   var selectedItem = $('.stage__list').find('.stage__item--active');
   selectedItem.removeClass('stage__item--active');
   selectedItem.prev().addClass('stage__item--active');
});


// скрыть - меню навигации при прокрутке вниз
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
   closeMenu();
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
      document.querySelector(".header").style.top = "0";
   } else {
      document.querySelector(".header").style.top = "-90px";
   }
   prevScrollpos = currentScrollPos;
}

// Рандомно перемешивает элементы блока
const carusel = document.querySelector('.services-block');
carusel.innerHTMl = '';
[...carusel.children]
   .sort(() => Math.random() - 0.5)
   .forEach(v => carusel.append(v));


// Проверяет поддерживает ли браузер касание
if ('ontouchstart' in window) {
   console.log("/* browser with Touch Events support */");
} else {
   console.log("/* browser with Touch Events NO support */");
};
// Создаёт событие которое отслеживает касание на объекте about
document.addEventListener("DOMContentLoaded", startup);
function startup() {
   var el = document.querySelector(".about");
   el.addEventListener("touchstart", handleStart, false);
}
// в случае срабатывания запускает функцию StartAnimate()
function handleStart(evt) {
   console.log("startAnimate");
   startAnimate();
}

function startAnimate() {
   document.querySelector(".").classList.add('animated');
   var items = document.querySelectorAll(".about-block__text-item");
   for (var i = 0; i < items.length; ++i) {
      items[i].classList.add('animated');
   };
   closeMenu();
};


var flag = 1;
function changeImage() {
  if (flag == 1) {
   document.querySelector('#imgmon').src = 'img/content/mon01.webp';
   document.querySelector('#imgtab').src = 'img/content/tab01.webp';
   document.querySelector('#imgmob').src = 'img/content/mob01.webp';
    flag = 2;
  } else if (flag == 2) {
   document.querySelector('#imgmon').src = 'img/content/mon02.webp';
   document.querySelector('#imgtab').src = 'img/content/tab02.webp';
   document.querySelector('#imgmob').src = 'img/content/mob02.webp';
    flag = 3;
  } else {
   document.querySelector('#imgmon').src = 'img/content/mon03.webp';
   document.querySelector('#imgtab').src = 'img/content/tab03.webp';
   document.querySelector('#imgmob').src = 'img/content/mob03.webp';
   flag = 1;
  }
}



