$(function(){
    $(".zong ul").hide();
        $(".zong h3").click(function() {
        /* Act on the event */
            if($(this).hasClass('do')){
            $(this).nextUntil("h3").slideUp();
            $(this).removeClass('do');
            }else{
              $(this).siblings("ul").slideUp(); 
              $(this).nextUntil("h3").slideDown();
              $(".zong h3").removeClass('do');
              $(this).addClass('do');
            }
    });
});
