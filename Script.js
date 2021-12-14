$(document).ready(function(){
   
    $(".color2").animate({left : "0px"},250);
    $("#WeedingCake").animate({width : "940px"},250);


    var moovea = function (){
        $(".bw1").click(function(){
            $(".color1").animate({left : "0px"},250)
            $("#popCake").animate({width : "940px"},250)
            $(".color2 ,.color3").animate({left :"400px"}, 250)
            $("#WeedingCake, #CupCake ").animate({width : "400px"},250)
    });
            $(".color1").click(function(){
                $(".color1").animate({left : "400px"},250)
                $("#popCake").animate({width : "400px"},250)
            
        
    });
    };
    moovea();
    var mooveb = function (){
        $(".bw2").click(function(){
            $(".color2").animate({left : "0px"},250)
            $("#WeedingCake").animate({width : "940px"},250)
            $(".color1 ,.color3").animate({left :"400px"}, 250)
            $("#popCake, #CupCake ").animate({width : "400px"},250)
        
    });
            $(".color2").click(function(){
                $(".color2").animate({left : "400px"},250)
                $("#WeedingCake").animate({width : "400px"},250)
    });
    };  
    mooveb();
    var moovec = function (){
        $(".bw3").click(function(){
            $(".color3").animate({left : "0px"},250)
                $("#CupCake").animate({width : "940px"},250)
                $(".color2 ,.color1").animate({left :"400px"}, 250)
                $("#WeedingCake, #popCake ").animate({width : "400px"},250)
        
    });
            $(".color3").click(function(){
                $(".color3").animate({left : "400px"},250)
                $("#CupCake").animate({width : "400px"},250)
    });
    
    };

    moovec();
var boutton = function(){
    $("#boutton1").click(function(){
        $(".color1").animate({left : "0px"},250)
        $("#popCake").animate({width : "940px"},250)
        $(".color2 ,.color3").animate({left :"400px"}, 250)
        $("#WeedingCake, #CupCake ").animate({width : "400px"},250)
}); 

    };
    boutton();

var boutton2 = function(){
        $("#boutton2").click(function(){
            $(".color2").animate({left : "0px"},250)
            $("#WeedingCake").animate({width : "940px"},250)
            $(".color1 ,.color3").animate({left :"400px"}, 250)
            $("#popCake, #CupCake ").animate({width : "400px"},250)
    }); 
    
        };
        boutton2();

var boutton3 = function(){
    $("#boutton3").click(function(){
        $(".color3").animate({left : "0px"},250)
        $("#CupCake").animate({width : "940px"},250)
        $(".color2 ,.color1").animate({left :"400px"}, 250)
        $("#WeedingCake, #popCake ").animate({width : "400px"},250)
        }); 
        
            };
            boutton3();
            

});


/* var $mainMenuItems = $("main-menu ul").children("li"),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = -1,
    init = function(){
        $mainMenuItems.children(".Images").click(function(){

            var newIndex = $(this).parent().index(),
            $item = $mainMenuItems.eq(newIndex),
            $colorImage = $item.find(".color");

            $colorImage.animate({left:"0px"}, 250);
        });
    };

    init();*/
    

// Comment faire pour dire si il est ouvert alors tu me change ceci si non t me fait sa ? 
// Il faut faire ainsi : 
// exemple : animateItem = function ($item, toOpen, speed) {
//           var $colorImage = $item.find(".color"), 
//           itemParam = toOpen ? {width : "420px"}: {width : "140px"}, 
// Expression ? Valeur 1 : Valeur 2
//la valeur 1 est {width : "420px"} et la 2 est l'autre c'est un booleane.