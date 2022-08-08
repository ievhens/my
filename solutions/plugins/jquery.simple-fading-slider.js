(function($){

    $.fn.fadeSlide = function(options){

        let settings = $.extend({
            "autoPlay": true,
            "startImage": 1,
            "autoplaySpeed": 3,
            "fadeSpeed": 300,
            "hoverStop": true,
        }, options)

        let autoPlay = settings.autoPlay;
        let startImage = settings.startImage;
        let autoplaySpeed = settings.autoplaySpeed;
        let fadeSpeed = settings.fadeSpeed;
        let hoverStop = settings.hoverStop;

        let timer = 0;

        if((autoplaySpeed - fadeSpeed/1000) < 1){
            autoplaySpeed = Math.trunc((fadeSpeed + 1000)/1000)
        }

        if(startImage > $(".fade-slider img").length){
            startImage = 1;
        }

    
        $(".fade-slider").css("position", "relative")
        $(".fade-slider img").css({"position": "absolute", "width": "100%"})
        $(".fade-slider img:not(:eq("+(startImage-1)+"))").css("display", "none")
        $(".fade-slider img:eq("+(startImage-1)+")").addClass("current")
        
        
        $(window).resize(function(){
            $(".fade-slider").height($(".fade-slider img.current").height())
        }).resize();
    
        function autoSlide(){

            if(autoPlay){
                if(timer == autoplaySpeed){
                    timer = 0;
                    $(".current").trigger("click")
                }
                timer++;                    
            }            
        }
            
        $(".fade-slider").click(function(){
            let next = $(".fade-slider .current + img").length ? $(".fade-slider .current + img") : $(".fade-slider img:first-child")
            $(".current").fadeOut(fadeSpeed)
            next.fadeIn(fadeSpeed)
            $(".current").removeClass("current");
            next.addClass("current");
        })
        
        if(hoverStop){
            $(".fade-slider").hover(
                function(){
                    autoPlay = false;
                },
                function(){
                    autoPlay = true;
                }
            );
        }

        setInterval(autoSlide, 1000);
     
        return this;
    }

}(jQuery))
