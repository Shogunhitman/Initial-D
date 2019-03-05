$(".takumi").dblclick(function(){
$(".takumi").hide();
 $(".drift").show();
});
 
 $(".drift").click(function(){
     $(".drift").hide();
    $(".water").show();
    $(".waterbtn").show();
});

$(".waterbtn").click(function(){
    $(".water").hide();
     $(".waterbtn").hide();
    $(".tureno").show();
});

$(".tureno").mouseleave(function(){
    $(".tureno").hide();
     $(".eighty-six").slideDown(400);
    $(".eighty-six").show();
});

$(".eighty-six").hover(function(){
    $(".eighty-six").hide();
    $(".tofu").fadeIn();
});

