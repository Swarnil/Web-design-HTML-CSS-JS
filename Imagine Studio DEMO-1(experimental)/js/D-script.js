// Preloader starts

setTimeout(function(){
  $('.loader_bg').fadeToggle();
}, 4000);

// Preloader ends

// Magnific popup starts

$(document).ready(function() {
  $('.gallery1').magnificPopup({
    type:'image',
    image: {
            titleSrc: 'title' 
        },
    delegate: 'a',
    gallery: {enabled:true}
  });

  $('.gallery2').magnificPopup({
    type:'image',
    image: {
            titleSrc: 'title' 
        },
    delegate: 'a',
    gallery: {enabled:true}
  });

  $('.gallery3').magnificPopup({
    type:'image',
    image: {
            titleSrc: 'title' 
        },
    delegate: 'a',
    gallery: {enabled:true}
  });

  $('.gallery4').magnificPopup({
    type:'image',
    image: {
            titleSrc: 'title' 
        },
    delegate: 'a',
    gallery: {enabled:true}
  });

  $('.gallery5').magnificPopup({
    type:'image',
    image: {
            titleSrc: 'title' 
        },
    delegate: 'a',
    gallery: {enabled:true}
  });

  $('.gallery6').magnificPopup({
    type:'image',
    image: {
            titleSrc: 'title' 
        },
    delegate: 'a',
    gallery: {enabled:true}
  });

  $('.gallery7').magnificPopup({
    type:'image',
    image: {
            titleSrc: 'title' 
        },
    delegate: 'a',
    gallery: {enabled:true}
  });

  $('.gallery8').magnificPopup({
    type:'image',
     image: {
            titleSrc: 'title' 
        },
    delegate: 'a',
    gallery: {enabled:true}
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
    gallery: {
      enabled: true
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

// Carousel edit part starts

$('.carousel').carousel({
   interval: 3000,
   pause: "hover"
})

$('.carousel2').carousel({
   interval: 3500,
   pause: "hover"
})

// Carousel edit part ends
