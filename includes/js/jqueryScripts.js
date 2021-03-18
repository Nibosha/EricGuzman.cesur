//==============HEADER============================================//
$("#hamburguer").click(function(){
    $(".icon").toggleClass("close");
});

//==============ASIDE LEFT========================================//
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
});

//=========ZONA CENTRAL========================================//
$("#aboutMe").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#aboutMe h2").css("color","var(--deco-color-1)");
    $("#aboutMe").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#aboutMe-container").addClass("container-center");

});

$(".aboutMe").click(function(){
    $(".content-container").removeClass("container-center");
    $("#aboutMe-container").addClass("container-center");
});

$("#curriculum").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#curriculum h2").css("color","var(--deco-color-1)");
    $("#curriculum").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#curriculum-container").addClass("container-center");

});

$("#contact").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#contact h2").css("color","var(--deco-color-1)");
    $("#contact").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#contact-container").addClass("container-center");

});

$("#calculadora").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#calculadora h3").css("color","var(--deco-color-1)");
    $("#calculadora").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#calculadora-container").addClass("container-center");
});

$("#cambio-fuentes").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#cambio-fuentes h3").css("color","var(--deco-color-1)");
    $("#cambio-fuentes").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#cambio-fuentes-container").addClass("container-center");
});

$("#url").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#url h3").css("color","var(--deco-color-1)");
    $("#url").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#url-container").addClass("container-center");
});

$("#certificado").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#certificado h3").css("color","var(--deco-color-1)");
    $("#certificado").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#certificado-container").addClass("container-center");
});

$("#ftp-seguro").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#ftp-seguro h3").css("color","var(--deco-color-1)");
    $("#ftp-seguro").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#ftp-seguro-container").addClass("container-center");
});

$("#configuracion").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#configuracion h3").css("color","var(--deco-color-1)");
    $("#configuracion").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#configuracion-container").addClass("container-center");
});

$("#guia-estilos").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#guia-estilos h3").css("color","var(--deco-color-1)");
    $("#guia-estilos").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#guia-estilos-container").addClass("container-center");
});

$("#mejora-dom").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#mejora-dom h3").css("color","var(--deco-color-1)");
    $("#mejora-dom").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#mejora-dom-container").addClass("container-center");
});

$("#audio-dom").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#audio-dom h3").css("color","var(--deco-color-1)");
    $("#audio-dom").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#audio-dom-container").addClass("container-center");
});

//=================RIGHT ASIDE=====================================================//

$(".aside-right").mouseenter(function(){
    $(".aside-left").addClass("aside-left-close");
    $("#center").addClass("section-open");
    $(".aside-right").addClass("aside-right-open");
    //$(".hidden-hexagon").delay(500).fadeIn(1000,"linear");   
});


$(".aside-right").mouseleave(function(){
    $(".aside-left").removeClass("aside-left-close");
    $("#center").removeClass("section-open");
    $(".aside-right").removeClass("aside-right-open");   
});


$(".nav-option-desplegable>h2").click(function(){
    $(this).siblings().toggle(0.5);
});

//=================CAMBIO FUENTE=====================================================//
$("#cambio-fuentes-container").dblclick(function(){
    $(this).css("background", function(){
        var r = Math.round(Math.random()*255);
        var g = Math.round(Math.random()*255);
        var b = Math.round(Math.random()*255);
        return "rgb("+r+", "+g+", "+b+")";
    });
});

$("#fontsize-select").change(function(){
    let val = $(this).val();
    switch (val) {
        case "small":
            $("#cambio-tittle").css("font-size","1.8rem");
            $("#cambio-text").css("font-size","1.2rem");
            break;
        case "normal":
            $("#cambio-tittle").css("font-size","2.4rem");
            $("#cambio-text").css("font-size","1.6rem");
            break;
        case "big":
            $("#cambio-tittle").css("font-size","3.2rem");
            $("#cambio-text").css("font-size","2.1rem");
            break;
        case "huge":
            $("#cambio-tittle").css("font-size","4.8rem");
            $("#cambio-text").css("font-size","3.2rem");
             break;
        default:
            break;
    }
});

$("#visitas").val(localStorage.visitas);

//=================AUDIOS=====================================================//
var play = -1;
function stopAllAudios(){
    for (let i = 0; i < 5; i++) {
        $(".audio")[i].pause();
        $(".audio")[i].currentTime = 0;  
    }
}

function back2URSS(){
    alert("Te dije que no lo pulsaras, ahora es demasiado tarde.");
    $("#audio-dom-container").css("background-color","rgb(234,43,25)");
    $("#audio-dom-container > .content-tittle").css("color","gold");
    $("#audio-dom-container > .content-tittle").css("font-size","3.2rem");
    $("#audio-dom-container > .content-tittle").html("La URSS ha vuelto");
    $("#audio-dom-container > .content-body > .centre-content-text > p").css("color","gold");
    $("#audio-dom-container > .content-body > .centre-content-text > p").html("Pulsa otra vez para desactivarla.");
    $("#audio-dom-container > .content-body > .content-button-group").css("border","2px solid gold");
    $("#buttonDo").hide();
    $("#buttonMi").hide();
    $("#buttonFa").hide();
    $("#buttonSi").hide();
}

function back2Normally(){
    $("#audio-dom-container").css("background-color","#00000000");
    $("#audio-dom-container > .content-tittle").css("color","var(--main-color)");
    $("#audio-dom-container > .content-tittle").css("font-size","2.4rem");
    $("#audio-dom-container > .content-tittle").html("Audios y mensajes en el DOM");
    $("#audio-dom-container > .content-body > .centre-content-text > p").css("color","var(--main-color)");
    $("#audio-dom-container > .content-body > .centre-content-text > p").html("Estos botones reproducen una nota musical cada uno. Pero, cuidado, bajo ningún concepto pulses el botón rojo.");
    $("#audio-dom-container > .content-body > .content-button-group").css("border","2px solid #4cc9f0");
    $("#buttonDo").show();
    $("#buttonMi").show();
    $("#buttonFa").show();
    $("#buttonSi").show();
}

$("#buttonDo").click(function(){
    stopAllAudios();
    if(play != 0){
        play = 0;
        $(".audio")[0].play();
    }else{
        play = -1;
    }
});

$("#buttonMi").click(function(){
    stopAllAudios();
    if(play != 1){
        play = 1;
        $(".audio")[1].play();
    }else{
        play = -1;
    }
        
});

$("#buttonFa").click(function(){
    stopAllAudios();
    if(play != 2){
        play = 2;
    $(".audio")[2].play();
    }else{
        play = -1;
    }
});

$("#buttonSi").click(function(){
    stopAllAudios();
    if(play != 3){
        play = 3;
        $(".audio")[3].play();
    }else{
        play = -1;
    }
});

$("#buttonRo").click(function(){
    stopAllAudios();
    if(play != 4){
        play = 4;
        back2URSS();
        $(".audio")[4].play();
    }else{
        back2Normally();
        play = -1;
    }
});


