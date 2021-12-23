$ (function () {
    'use strict'; 

    var winH = $('window').height(),
        upperH = $('.upperbar').innerHeight(),
        navH = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height(winH-(upperH + navH));
    
});