/**
 * Created by xiecheng on 16/10/12.
 */
$(function(){
    var $top = $("#top");
    $(window).on('scroll', function(){
        var scrollTop = $("body").scrollTop();
        if(scrollTop >= 200){
            $top.show();
        }else{
            $top.hide();
        }
    });

    $top.on("click", function(){
        var timer = setInterval(function(){
            var scrollTop = $("body").scrollTop();
            if(scrollTop <= 0){
                clearInterval(timer);
            }
            $("body").scrollTop(scrollTop - 20);
        }, 100);
    });


});



