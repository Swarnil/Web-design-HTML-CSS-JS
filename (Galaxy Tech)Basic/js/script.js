// Preloader starts

setTimeout(function() {
    $('.loader_bg').fadeToggle();
}, 5000);

// Preloader ends

// Change on scroll part starts

$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
});

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header-nav").style.padding = "0px 0px";
    } else {
        document.getElementById("header-nav").style.padding = "15px 15px";
    }

    myButton = document.getElementById("totop-btn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block"
    } else {
        myButton.style.display = "none"
    }
}

// Change on scroll part ends

// navbar functionality starts

$(document).on('click', function() {
    $('.collapse').collapse('hide');
})

$(document).on('click', '.navbar-nav li', function() {
    $(this).addClass('active').siblings().removeClass('active')
})

$('#menu').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 100,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
});

// navbar functionality ends

// wow js starts

new WOW().init();


// wow js ends

// Counter part starts

$('.count').counterUp({
    delay: 10,
    time: 1500
})

// Counter part ends

// topFunction js starts

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// topFunction js ends

// navbar functionality starts

$(document).on('click', function() {
    $('.collapse').collapse('hide');
})

$(document).on('click', '.navbar-nav li', function() {
    $(this).addClass('active').siblings().removeClass('active')
})

$('#menu').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 100,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
});

// navbar functionality ends