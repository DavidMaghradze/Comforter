$( document ).ready(function() {
  var leftbarCirclesDelay = 0;
  var topnavItemDelay = 0;
  var leftbarIconsDelay = 0;
  var innerWidth = window.innerWidth;

  // Set Delay on leftbar circles
  $('.left-bar__nav-circle').each( function(index, item){
    leftbarCirclesDelay += 200;
      var element = $(this);
      setTimeout(function(){
        element.addClass('flyFromBottom');
      }, leftbarCirclesDelay)
  });
  // ------------------------------------

  // Handle rect hamburger click
  $('.hamburger__rec').click(function(e){
    topnavItemDelay = 0;
    $(this).addClass('hamburger__rec--hide');
    $('.hamburger__union').addClass('hamburger__union--show');
    $('.menu').addClass('menu--show'); 
    $('.topnav__item').each(function(){
      topnavItemDelay += 50;
      var element = $(this);
      setTimeout(function(){
        element.addClass('topnav-item-in');
      },topnavItemDelay)
    })
  })
  // ------------------------------------

  // Hanlde union hamburger click
  $('.hamburger__union').click(function(e){
    topnavItemDelay = 0;
    $(this).removeClass('hamburger__union--show');
    $($(".topnav__item").get().reverse()).each(function(){

      topnavItemDelay += 50;
      var element = $(this);
      setTimeout(function(){
        element.removeClass('topnav-item-in');
      },topnavItemDelay)
    })

    setTimeout(function(){
      $('.menu').removeClass('menu--show'); 
    },1200)
    
    setTimeout(function(){
      $('.hamburger__rec').removeClass('hamburger__rec--hide');
    },1800)
  })
  // ------------------------------------


  // Handle search click 
  $('.search-icon').click(function(e){
    e.preventDefault();
    leftbarIconsDelay=0;

    $('.scroll-down').addClass('toright');
    $('.leftbar-cats ').hide();
    $('.menu__arc').addClass('onLarge');
    $('.logo').addClass('logo--large-show');
    $('.left-bar__form').addClass('left-bar__form--shown');
    $('.left-bar__nav-item').each(function(){
      leftbarIconsDelay += 100;
      var element = $(this);
      setTimeout(function(){
        element.find('.left-bar__nav-title').addClass('titleIn');
        element.find('svg').addClass('svgFlyIn');
      }, leftbarIconsDelay)
    })
    $('.left-bar').addClass('left-bar--large');
    $('.left-bar__nav').addClass('left-bar__nav--show');
    $('.owl-item.active').addClass('active-closed');

    owl.trigger('stop.owl.autoplay');
    $('.slider-layer').addClass('slider-layer-shown');

    // Handle slider overlay click
    $('.slider-layer-shown').click(function(e){
    leftbarIconsDelay=0;
    $('.menu__arc').removeClass('onLarge');
    $('.logo').removeClass('logo--large-show');
      
    setTimeout(function(){
        $('.left-bar').removeClass('left-bar--large');
        $('.left-bar__form').removeClass('left-bar__form--shown');
        $('.scroll-down').removeClass('toright');
        $('.owl-item.active').removeClass('active-closed');
        owl.trigger('play.owl.autoplay');
        if(innerWidth<=768) {
          console.log('dada')
          $('.leftbar-cats').show();
        }
        $('.left-bar__nav-item svg').each(function(){
          var element = $(this);
          element.removeClass('svgFlyIn');
        })
        $('.slider-layer').removeClass('slider-layer-shown');
    },1500)

      $($(".left-bar__nav-item").get().reverse()).each(function(){
        leftbarIconsDelay += 100;
        var element = $(this);
        setTimeout(function(){
          element.find('.left-bar__nav-title').removeClass('titleIn');
          element.find('svg').removeClass('svgFlyIn');
        }, leftbarIconsDelay)
      })
      setTimeout(function(){
        $('.left-bar__nav').removeClass('left-bar__nav--show');
      },800)
    })
    // ------------------------------------
  });
  // ------------------------------------

  // Owl Carousel Initialization
  var owl = $('.owl-carousel');
  setTimeout(function(){
    owl.owlCarousel({
    rtl:true,
    loop:true,
    items: 1,
    animateIn: true,
    animateOut: true,
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        dots: false,
        rtl:false,
      },
      769: {
        dots: true,
        rtl: true,
      }
    }
});
}, 2500)

// Handle Owl Carousel change
owl.on('changed.owl.carousel', function(e) {
  owl.trigger('stop.owl.autoplay');
  owl.trigger('play.owl.autoplay');
});

  setTimeout(function(){
    $('.owl-dot').each(function(index){

      $(this).text(`0${++index}`);
    })
  },2500)
});
