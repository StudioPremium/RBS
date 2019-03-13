// Импортируем jQuery
//= ../../../../node_modules/jquery/dist/jquery.js

// Импортируем slick-carousel
//= ../../../../node_modules/slick-carousel/slick/slick.min.js
// функция давление в кеш браузера прелоудера

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages(["dist/img/preloader.svg"]);

// Импортируем ленивую загрузку
//= ../../../../node_modules/lazyloadxt/dist/jquery.lazyloadxt.min.js