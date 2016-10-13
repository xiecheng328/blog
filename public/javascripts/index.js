/**
 * Created by xiecheng on 16/10/12.
 */
$(function(){
    var $top = $("#top");
    $(window).on('scroll', function(){
        var scrollTop = $("body").scrollTop();
        if(scrollTop >= 200){
            $top.fadeIn('slow');
        }else{
            $top.fadeOut('slow');
        }
    });

    $top.on("click", function(){
        var timer = setInterval(function(){
            var scrollTop = $("body").scrollTop();
            if(scrollTop <= 0){
                clearInterval(timer);
            }
            $("body").scrollTop(scrollTop - 20);
        }, 30);
    });

    var $css = $("#progress .css");
    var cssWidth = $css.width();
    setInterval(function(){
        var w = $css.width();
        if(w >= $css.parent().width()){
            // clearInterval(timer);
            $css.width(cssWidth);
        }else{
            $css.width(w + w * 0.05);
        }
    }, 200);


});



