var currentPanel = 1;
var totalPanels = 0;
var autoPlay = true;
var timePassed = 0;
var timeToChange = 3;
var photoWidth = 0;

function autoAdvance(){
    
    if(timePassed == timeToChange){
        timePassed = 0;
        if(currentPanel == totalPanels){
            currentPanel = 0;
        }
        if(autoPlay == true){
            $(".marquee_nav a.marquee_nav_item:nth-child("+(currentPanel+1)+")").trigger("click");
        }
    }
    else{
        timePassed += 1;
    }

    $(".autoPlay").html("autoPlay = " + autoPlay)
    $(".timePassed").html("timePassed = " + timePassed)

}

$(document).ready(function (){

    // debug
    
    $(".autoPlay").html("autoPlay = " + autoPlay)
    $(".timePassed").html("timePassed = " + timePassed)
    $(".timeToChange").html("timeToChange = " + timeToChange)
    $(".currentPanel").html("currentPanel = " + currentPanel)

    // setInterval(autoAdvance, 1000);

    window.photoWidth = $(".marquee_container").width();

    $(".marquee_container").hover(
        function(){
            autoPlay = false;
            $(this).removeClass("autoplay");
        },
        function(){
            autoPlay = true;
            timePassed = 0;
            $(this).addClass("autoplay")
        }
    );

    // Preload
    $(".marquee_panels img").imgpreload(function(){
        initializeMarquee();
    });

    // Lineup
    $("img.marquee_panel_photo").each(function(index){
        let photoWidth = $(".marquee_container").width();
        let photoPosition = index * photoWidth;
        console.log(photoPosition);
        $(".marquee_photos").append('<img class="marquee_photo"" src="'+
        $(this).attr('src')+'" alt="'+$(this).attr('alt')+'" width="'+photoWidth+'" height="350">');
        $('.marquee_photos').css("width", photoPosition + photoWidth)
    })

    $(".marquee_photos img:last-child").clone().insertBefore(".marquee_photos img:first-child");
    $(".marquee_photos img:nth-child(2)").clone().insertAfter(".marquee_photos img:last-child");

    $(".marquee_photos img").each(function(index){
        let photoPosition = index * window.photoWidth;
        $(this).css("left", photoPosition + "px");
        $(".marquee_photos").css("width", photoPosition + window.photoWidth + "px");
    })

    $(".marquee_photos").css("left", "-" + window.photoWidth + "px")

    // Navigation Links
    $(".marquee_panels .marquee_panel").each(function(index){
        $(".marquee_nav").append("<a class='marquee_nav_item'></a>");
        totalPanels = index + 1;
        /* debug */ $(".totalPanels").html("totalPanels = " + totalPanels)
    })

    $(".marquee_nav a.marquee_nav_item").click(function(){
        $(".marquee_nav a.marquee_nav_item").removeClass("selected");
        $(this).addClass("selected");

        let navClicked = $(this).index();
        // let marqueeWidth = $(".marquee_container").width();
        let distancetoMove = window.photoWidth * (-1);
        let newPhotoPosition = (navClicked * distancetoMove) - window.photoWidth + "px";
        let newCaption = $(".marquee_panel_caption").get(navClicked);

        if(currentPanel == totalPanels && navClicked == 0){
            
            newPhotoPosition = ((window.photoWidth * (totalPanels + 1)) * -1) + "px";
            $(".marquee_photos").animate({left: newPhotoPosition}, 1000, function(){
                $(".marquee_photos").css("left", "-" + window.photoWidth + "px")
            })

        }
        else if (currentPanel == 1 && navClicked == (totalPanels - 1)){
            
            

        }
        else{
            
        }

        currentPanel = navClicked + 1;
        /* debug */ $(".currentPanel").html("currentPanel = " + currentPanel)

        $(".marquee_photos").animate({left: newPhotoPosition}, 1000);
        $(".marquee_caption").animate({top: '340px'}, 500, function(){
            let newHtml = $(newCaption).html();
            $(".marquee_caption_content").html(newHtml);
            setCaption()
        });
    });
});

function setCaption(){

    let captionHeight = $(".marquee_caption").height();
    let marqueeHeight = $(".marquee_container").height();
    let newCaptionHeight = marqueeHeight - captionHeight - 15
    $(".marquee_caption").delay(200).animate({top: newCaptionHeight}, 500);

}

function initializeMarquee(){

    $(".marquee_caption_content").html(
        $(".marquee_panels .marquee_panel:first .marquee_panel_caption").html()
    );
    $(".marquee_nav a.marquee_nav_item:first").addClass("selected");
    $(".marquee_photos").fadeIn(1500);
    setCaption()


}