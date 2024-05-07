// Preloader starts

setTimeout(function(){
  $('.loader_bg').fadeToggle();
}, 4000);

// Preloader ends

// Counter part starts

$('.count').counterUp({
   		delay: 10,
   		time: 3000
})

// Counter part ends

// Change on scroll part starts

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
});

window.onscroll = function() {scrollFunction()};

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

// Carousel edit part starts

$('.carousel').carousel({
   interval: 5000,
   pause: "false"
})

$('#carouselExampleCaptions').carousel({
    interval: false
});

var i;

$('.carousel-control').on("mouseover", function () {
    var control = $(this),
        interval = 100;

    i = setInterval(function () {
        control.trigger("click");
    }, interval);
})
.on("mouseout", function () {
    clearInterval(i);
});

// Carousel edit part ends

// swiper part starts

var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

// swiper part ends

// topFunction js starts

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// topFunction js ends

// navbar functionality starts

$(document).on('click',function(){
	$('.collapse').collapse('hide');
})

$(document).on('click', '.navbar-nav li', function(){
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

// Magnific popup starts

$(document).ready(function() {
  $('.image-link').magnificPopup({
    type:'image',
    delegate: 'a'
  });
});

$(document).ready(function() {
  $('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
    
  });
});


// Magnific popup ends