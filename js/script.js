jQuery(document).ready(function(){

 //Mobile Menu
    let touchEventlang = 'ontouchstart' in window ? 'touchstart' : 'click';
    jQuery(".menu-item-has-children:has(ul) > a" ).after( "<span class='menu_sub'></span>" );
    jQuery(document).on(touchEventlang, '.menu_sub', function(){
        jQuery(this).toggleClass("open");
        jQuery(this).next('.sub-menu').slideToggle();
    }); 
    $('.hamburger-menu').click (function(){
        $('asds');
        $(this).toggleClass('open');
        $('html').toggleClass(' over-hidden');
        $('#menu-main-menu').slideToggle();
    });

    // slider
    jQuery('.demo-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


    // AOS animation
    AOS.init();

     // Counter
    function inVisible(element) {
        var WindowTop = $(window).scrollTop();
        var WindowBottom = WindowTop + $(window).height();
        var ElementTop = element.offset().top;
        var ElementBottom = ElementTop + element.height();
        if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
            animate(element);
    }

    function animate(element) {
      if (!element.hasClass('ms-animated')) {
        var maxval = element.data('max');
        var html = element.html();
        element.addClass("ms-animated");
        $({
          countNum: element.html()
        }).animate({
          countNum: maxval
        }, {
          duration: 5000,
          easing: 'linear',
          step: function() {
            element.html(Math.floor(this.countNum) + html);
          },
          complete: function() {
            element.html(this.countNum + html);
          }
        });
      }
    
    }
    
    $(function() {
      $(window).scroll(function() {
        $("h2[data-max]").each(function() {
          inVisible($(this));
        });
      })
    });


    // Tabbing with Slider
    $('.tab-link-one, .tab-link-two').slick({
        dots: false,
        infinite: true,
         arrows: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1599,
                settings: {
                    
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
                     {
                breakpoint: 1170,
                settings: {
                    
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
                     {
                breakpoint: 1024,
                settings: {
                     
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
      
    //tabbed content in homepage - featured product
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
    
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
    
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
        
        $('.tab-link-one').slick('setPosition');
        $('.tab-link-two').slick('setPosition');
    });
    if (window.location.hash.length > 0) {
        var hash_str= window.location.hash.split("#")[1];
        $('.tab-link[data-tab=' + hash_str + ']').click();
    }







});