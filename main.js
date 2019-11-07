//RI-Creare lo slideshow/carousel base come fatto in live coding a lezione stamattina.


$ ( document ).ready (function(){

    $(".next i").click(function(){

        var nextSlide = nextSlide();

        function nextSlide(){

            var posizioneImg = $(".slider-wrapper .images img.active");

            var posizionePin = $(".nav i.active")
    
            posizioneImg.removeClass("active");

            posizionePin.removeClass("active");
            
            if(posizioneImg.hasClass("last")){
    
                $(".slider-wrapper .images img.first").addClass("active")
    
            } else {
    
                posizioneImg.next("img").addClass("active");
            }

            if(posizionePin.hasClass("last")){

                $(".nav i.first").addClass("active");

            } else {

                posizionePin.next("i").addClass("active")
            }
        }

    })
    
    $(".prev i").click(function(){

        var precSlide = precSlide();

        function precSlide(){

            var posizioneImg = $(".slider-wrapper .images img.active");

            var posizionePin = $(".nav i.active")
    
            posizioneImg.removeClass("active");

            posizionePin.removeClass("active");
            
            if(posizioneImg.hasClass("first")){
    
                $(".slider-wrapper .images img.last").addClass("active")
    
            } else {
    
                posizioneImg.prev("img").addClass("active");
            }

            if(posizionePin.hasClass("first")){

                $(".nav i.last").addClass("active");

            } else {

                posizionePin.prev("i").addClass("active")
            }
        }

    })


})