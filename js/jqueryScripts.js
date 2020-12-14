$("#hamburguer").click(function(){
    $(".icon").toggleClass("close");
});


$(".aside-left").mouseenter(function(){
    $(".aside-left").addClass("aside-left-open");
    $("#center").addClass("section-open");
    $(".aside-right").addClass("aside-right-close");
    //$(".hidden-hexagon").delay(500).fadeIn(1000,"linear");   
});

$(".aside-left").mouseleave(function(){
    $(".aside-left").removeClass("aside-left-open");
    $("#center").removeClass("section-open");
    $(".aside-right").removeClass("aside-right-close");  
    //$(".hidden-hexagon").delay(500).fadeOut(1000,"linear");    
});
