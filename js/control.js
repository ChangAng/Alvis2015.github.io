$(document).ready(function(){
  //control the top sidebar menu's items
  //home
  $("#mbtn1").click(function(){
      $('html,body').animate({scrollTop:$('#photoSlide').offset().top},660);
    
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
              prompt : '請輸入你的名字! 請勿空白喔!'
            }
          ]
        },
        email: {
          identifier  : 'youremail',
          rules: [
            {
              type   : 'email',
              prompt : '請輸入你的E-mail! 我要聯絡你喔!'
            }
          ]
        },
        tellempty: {
          identifier  : 'tellmewhat',
          rules: [
            {
              type   : 'empty',
              prompt : '我要你寶貴的意見啦!'
            }
          ]
        }
      }
    });

  //aniview control
  // var options = {
  //     animateThreshold: 100,
  //     scrollPollInterval: 20
  // }
  // $('.aniview').AniView(options);
  $("#010").on({

    mouseenter: function(){
      $(this).addClass("active yellow");
    },
    mouseleave: function(){
      $(this).removeClass("active yellow");
    },

    click: function(){
      $('.ui.labeled.icon.sidebar')
      .sidebar('setting', 'transition', 'push')
      .sidebar('toggle')
    }
  });

  $("#020").on({

    mouseenter: function(){
      $(this).addClass("active teal");
    },
    mouseleave: function(){
      $(this).removeClass("active teal");
    },

    click: function(){
       $('.ui.modal')
      .modal('show');
    }
  });

  $("#030").on({

    mouseenter: function(){
      $(this).addClass("active olive");
    },
    mouseleave: function(){
      $(this).removeClass("active olive");
    },

    click: function(){
      
    }
  });
    
    $("#011").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
  });

    $("#011").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
  });

    $("#021").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
  });

    $("#031").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
  });

    $("#041").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
  });

    $("#051").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
  });

    $("#061").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
  });

    $("#cat").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
  });

$("#NCHU_LOGO").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
  });

    $("#mit1").on({
    mouseenter: function(){
      $(this).addClass("active purple");
    },
    mouseleave: function(){
      $(this).removeClass("active purple");
    },
    click: function(){
      $('html,body').animate({scrollTop:$('#photoSlide').offset().top},500);
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
      $('html,body').animate({scrollTop:$('#selfIntroduction').offset().top},500);
    }
  });
  //     $("#mit3").on({
  //   mouseenter: function(){
  //     $(this).addClass("active green");
  //   },
  //   mouseleave: function(){
  //     $(this).removeClass("active green");
  //   },
  //   click: function(){
  //    $('html,body').animate({scrollTop:$('#timelinejs').offset().top},600);
  //   }
  // });
      $("#mit5").on({
    mouseenter: function(){
      $(this).addClass("active teal");
    },
    mouseleave: function(){
      $(this).removeClass("active teal");
    },
    click: function(){
     $('html,body').animate({scrollTop:$('#contactMe').offset().top},500);
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
      $('html,body').animate({scrollTop:$('#photoSlide').offset().top},500);
    }
  });



});
