  $(document).ready(function(){
 	 $("#btn").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    }

  });
});
