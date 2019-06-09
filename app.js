$( document ).ready(function() {
  var time = 0;
  var topnavItemTime = 0;
  var timeIcon = 0;
  $('.left-bar__nav-circle').each( function(index, item){
      time += 200;
      var element = $(this);
      setTimeout(function(){
        element.addClass('flyFromBottom');
      }, time)
  });

  $('.hamburger__rec').click(function(e){
    topnavItemTime = 0;
    $(this).addClass('hamburger__rec--hide');
    $('.hamburger__union').addClass('hamburger__union--show');
    $('.menu').addClass('menu--show'); 
    $('.topnav__item').each(function(){
      console.log(topnavItemTime);
      topnavItemTime += 50;
      var element = $(this);
      setTimeout(function(){
        element.addClass('topnav-item-in');
      },topnavItemTime)
    })
  })

  $('.hamburger__union').click(function(e){
    topnavItemTime = 0;
    $(this).removeClass('hamburger__union--show');
    $($(".topnav__item").get().reverse()).each(function(){

      topnavItemTime += 50;
      var element = $(this);
      setTimeout(function(){
        element.removeClass('topnav-item-in');
      },topnavItemTime)
    })

    console.log(topnavItemTime)
    setTimeout(function(){
      $('.menu').removeClass('menu--show'); 
    },1200)
    
    setTimeout(function(){
      $('.hamburger__rec').removeClass('hamburger__rec--hide');
    },1800)
  })


  $('.search-icon').click(function(e){
    $('.menu__arc').addClass('onLarge');
    $('.logo').addClass('logo--large-show');
    $('.left-bar__form').addClass('left-bar__form--shown');
    timeIcon=0;
    e.preventDefault();
    console.log(timeIcon);
    $('.left-bar__nav-item svg').each(function(){
      timeIcon += 200;
      var element = $(this);
      // element.removeClass('svgFlyOut');
      setTimeout(function(){
        element.addClass('svgFlyIn');
      }, timeIcon)
    })
    $('.slider').addClass('closed');
    $('.left-bar').addClass('left-bar--large');
    $('.left-bar__nav').addClass('left-bar__nav--show');
    $('.owl-item.active').addClass('active-closed');
    owl.trigger('stop.owl.autoplay');
    $('.slider-layer').addClass('slider-layer-shown');

    $('.slider-layer-shown').click(function(e){
      $('.menu__arc').removeClass('onLarge');
      $('.logo').removeClass('logo--large-show');
      setTimeout(function(){
        $('.left-bar').removeClass('left-bar--large');
        $('.left-bar__form').removeClass('left-bar__form--shown');
        $('.slider').removeClass('closed');
      $('.owl-item.active').removeClass('active-closed');
      owl.trigger('play.owl.autoplay');
      $('.left-bar__nav-item svg').each(function(){
        var element = $(this);
        element.removeClass('svgFlyIn');
      })
      $('.slider-layer').removeClass('slider-layer-shown');
      },2000)
      timeIcon=0;
      $($(".left-bar__nav-item svg").get().reverse()).each(function(){
        timeIcon += 200;
        var element = $(this);
        setTimeout(function(){
          element.removeClass('svgFlyIn');
          // element.addClass('svgFlyOut');
        }, timeIcon)
      })
      setTimeout(function(){
        $('.left-bar__nav').removeClass('left-bar__nav--show');
      },timeIcon)
    })
  });

  // Slider
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
    autoplayTimeout: 7000
});
}, 2500)

owl.on('changed.owl.carousel', function(e) {
  console.log(e);
  owl.trigger('stop.owl.autoplay');
  owl.trigger('play.owl.autoplay');
});

  setTimeout(function(){
    $('.owl-dot').each(function(index){

      $(this).text(`0${++index}`);
    })
  },2500)
});
