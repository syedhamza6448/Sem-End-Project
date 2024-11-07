(function($) {
    $.fn.menumaker = function(options) {  
     var cssmenu = $(this), settings = $.extend({
       format: "dropdown",
       sticky: false
     }, options);
     return this.each(function() {
       $(this).find(".button").on('click', function(){
         $(this).toggleClass('menu-opened');
         var mainmenu = $(this).next('ul');
         if (mainmenu.hasClass('open')) { 
           mainmenu.slideToggle().removeClass('open');
         }
         else {
           mainmenu.slideToggle().addClass('open');
           if (settings.format === "dropdown") {
             mainmenu.find('ul').show();
           }
         }
       });
       cssmenu.find('li ul').parent().addClass('has-sub');
    multiTg = function() {
         cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
         cssmenu.find('.submenu-button').on('click', function() {
           $(this).toggleClass('submenu-opened');
           if ($(this).siblings('ul').hasClass('open')) {
             $(this).siblings('ul').removeClass('open').slideToggle();
           }
           else {
             $(this).siblings('ul').addClass('open').slideToggle();
           }
         });
       };
       if (settings.forat === 'multitoggle') multiTg();
       else cssmenu.addClass('dropdown');
       if (settings.sticky === true) cssmenu.css('position', 'fixed');
    resizeFix = function() {
      var mediasize = 1000;
         if ($( window ).width() > mediasize) {
           cssmenu.find('ul').show();
         }
         if ($(window).width() <= mediasize) {
           cssmenu.find('ul').hide().removeClass('open');
         }
       };
       resizeFix();
       return $(window).on('resize', resizeFix);
     });
      };
    })(jQuery);
    
    (function($){
    $(document).ready(function(){
    $("#cssmenu").menumaker({
       format: "multitoggle"
    });
    });
    })(jQuery);

    android = document.getElementById("android");
    ios = document.getElementById("ios");
    aBrands = document.getElementById("a-subBrand");
    iBrands = document.getElementById("i-subBrand");

    android.addEventListener("click", function(){
      if(aBrands.style.display == "none")
        {
          aBrands.style.display = "flex";
          aBrands.classList.remove("animate__slideOutUp")
          aBrands.classList.add("animate__animated")
          aBrands.classList.add("animate__slideInDown")
        }
        else
        {
          aBrands.style.display = "none"
          aBrands.classList.remove("animate__slideInDown")
          aBrands.classList.add("animate__animated")
          aBrands.classList.add("animate__slideOutUp")
        }


     
    })
    ios.addEventListener("click", function(){
      if(iBrands.style.display == "none")
        {
          iBrands.style.display = "flex";
          iBrands.classList.remove("animate__slideOutUp")
          iBrands.classList.add("animate__animated")
          iBrands.classList.add("animate__slideInDown")
        }
        else
        {
          iBrands.style.display = "none"
          iBrands.classList.remove("animate__slideInDown")
          iBrands.classList.add("animate__animated")
          iBrands.classList.add("animate__slideOutUp")
        }
    })






