$(document).ready(function(){
  //control the top sidebar menu's items
  //home
  $("#mbtn1").click(function(){
      $('html,body').animate({scrollTop:$('#photoSlide').offset().top},600);
    
  });

  //control scroll back to top button
  // $("#gotopbutton").on({
  //   mouseenter: function(){
  //     $(this).addClass('animated shake');
  //   },
  //   mouseleave: function(){
  //     $(this).removeClass('animated shake');
  //   },
  //   click: function(){
  //     $('html,body').animate({scrollTop:$('#home').offset().top},600);
  //   }
  // });

  // show the modal
  $("#showmybtn").click(function(){
    $('.ui.modal')
      .modal('show');
  });

  // contact me form control
  $('.ui.form.segment')
    .form({
      on: 'blur',
      fields: {
        empty: {
          identifier  : 'yourname',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter your name'
            }
          ]
        },
        email: {
          identifier  : 'youremail',
          rules: [
            {
              type   : 'email',
              prompt : 'Please enter a valid e-mail'
            }
          ]
        },
        tellempty: {
          identifier  : 'tellmewhat',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter value in You want to tell me what'
            }
          ]
        }
      }
    });

  // //aniview control
  // var options = {
  //     animateThreshold: 100,
  //     scrollPollInterval: 20
  // }
  // $('.aniview').AniView(options);
  $("#mbutton").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
    click: function(){
      $('.ui.sidebar')
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('toggle') ;
    }
  });
    $("#mit1").on({
    mouseenter: function(){
      $(this).addClass("active purple");
    },
    mouseleave: function(){
      $(this).removeClass("active purple");
    },
    click: function(){
      $('html,body').animate({scrollTop:$('#photoSlide').offset().top},600);
    }
  });
  $("#mit2").on({
    mouseenter: function(){
      $(this).addClass("active orange");
    },
    mouseleave: function(){
      $(this).removeClass("active orange");
    },
    click: function(){
      $('html,body').animate({scrollTop:$('#selfIntroduction').offset().top},600);
    }
  });
      $("#mit3").on({
    mouseenter: function(){
      $(this).addClass("active green");
    },
    mouseleave: function(){
      $(this).removeClass("active green");
    },
    click: function(){
     $('html,body').animate({scrollTop:$('#timelinejs').offset().top},600);
    }
  });
      $("#mit5").on({
    mouseenter: function(){
      $(this).addClass("active teal");
    },
    mouseleave: function(){
      $(this).removeClass("active teal");
    },
    click: function(){
     $('html,body').animate({scrollTop:$('#contactMe').offset().top},600);
    }
  });
      $("#gotopbutton").on({
    mouseenter: function(){
      $(this).addClass('animated swing');
    },
    mouseleave: function(){
      $(this).removeClass('animated swing');
    },
    click: function(){
      $('html,body').animate({scrollTop:$('#photoSlide').offset().top},600);
    }
  });



});
