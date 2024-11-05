$(function(){
    function slide(){
        $(".slide ul").animate({left:"-100%"},1000,function(){
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({left:0})
        })
    }

    setInterval(slide, 3000)
    
    $("nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })

    $(".pp").click(function(){
        $(".pop").show();
    })

    $(".close").click(function(){
        $(".pop").hide();
    })
})