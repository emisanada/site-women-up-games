(function($) {
  "use strict";

  var App = {
    init:function() {
      App.typing();
      App.owlTestimonial();
      App.stats();
      App.menuAnimation();
      App.navigate();
      App.contactsubmit();
      App.imagepopup();
    },

    loader: function() {
      $("div.preloader").fadeOut("slow");
    },

    typing: function() {
      $(".typing-words").each(function(){
        var word = $(this);
        word.typed({
          strings: word.attr('data-elements').split(','),
          typeSpeed: 100,
          backDelay: 4000
        });
      });
    },

    owlTestimonial: function() {
      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
      });
    },

    stats: function() {
      $('.our-stats-box').each(function () {
        $('.our-stat-info').fappear(function (direction) {
          $('.stats').countTo();
        }, {offset: "100px"});
      });
     },

    menuAnimation: function() {
      $(window).scroll(function() {
        var top_v=$(window).scrollTop();
        var themecolor="#a2129e";
        if(top_v >= 30) {
          $(".nim-menu").css({
            height:"80px",
            background: "#fff",
            boxShadow: "2px 2px 3px 3px rgba(0,0,0,0.3)"
          });
          $(".nim-menu.navbar-default .navbar-nav > li > a,a.navbar-brand").css("color","#D3959B");
          $(".nim-menu.navbar-default .navbar-nav > li > a").hover(function() {
              $(this).css("color", themecolor);
            }, function() {
              $(this).css("color", "#D3959B");
            }
          );
        }
        else {
          $(".nim-menu").css({
            height: "0px",
            background: "transparent",
            boxShadow: "none"
          });
          $("a.navbar-brand").css("color","#fff");
          $(".nim-menu.navbar-default .navbar-nav > li > a").css("color","#fafafa");
          $(".nim-menu.navbar-default .navbar-nav > li > a:hover").css("color", themecolor);
          $(".nim-menu.navbar-default .navbar-nav > li > a").hover(function() {
              $(this).css("color", themecolor);
            }, function() {
              $(this).css("color","#fafafa");
            }
          );
        }
      }
    )},

    navigate: function() {
      $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
            scrollTop: target.offset().top - 40
          }, 900);
          return false;
        }
      }
    });

    },

    imagepopup: function() {
      $('.show-image').magnificPopup({type: 'image'});
    },

    contactsubmit: function() {
      $('#mc-form').submit(function(e){
      var form = $(this);
      e.preventDefault();
      $.ajax({
        type: 'POST',
        url : 'php/sendmail.php',
        data: form.serialize(),
        success: function(data) {
          form.find('.form-message').html(data).fadeIn();
          form.find('.btn').prop('disabled', true);
          if ($(data).is('.send-true')){
            setTimeout(function() {
              form.trigger('reset');
              form.find('.btn').prop('disabled', false);
              form.find('.form-message').fadeOut().delay(500).queue(function() {
                form.find('.form-message').html('').dequeue();
              });
            }, 2000);
          } else {
            form.find('.btn').prop('disabled', false);
          }
        }
      });
    });
   }
  };

  $(document).ready(function(){
    App.init();
    App.loader();
  });

})(jQuery);
