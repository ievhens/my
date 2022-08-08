let autoPlay = true;
let autoplaySpeed = 4000
let fadeSpeed = 2000


$(document).ready(function(){

    $(".slider img").imgpreload(function(){
        $(".slider-image:first-child").addClass("current")
    });
    
    $(window).resize(function(){
        $(".slider").height($(".slider img.current").height())
    }).resize();

    function autoSlide(){
    
         if(autoPlay == true){
                $(".current").trigger("click");
            }
        }

    $(".slider").click(function(){
        let next = $(".current + img").length ? $(".current + img") : $(".slider img:eq(0)")
        // $(".current").fadeOut(fadeSpeed)
        // next.fadeIn(fadeSpeed)
        $(".current").removeClass("current");
        next.addClass("current");
    })

    $(".slider").hover(
        function(){
            autoPlay = false;
        },
        function(){
            autoPlay = true;
        }
    );

    setInterval(autoSlide, autoplaySpeed)

  });

  document.querySelector(".burger").onclick = function() {
    document.getElementById("mobile-menu").classList.toggle("active");
    document.querySelector(".burger").classList.toggle("active");
    
}
document.querySelectorAll(".quantity").forEach(item => {

    item.addEventListener("click", event => {

        let input = event.target.parentNode.querySelector("input[type='number']");
        let qnt = +(input.value);
        let increment = event.target.classList.contains("more") ? 1 : -1;
        qnt += increment;
        if (qnt < +(input.min) || qnt > +(input.max)) return;
        else { input.value = qnt };

    })
})