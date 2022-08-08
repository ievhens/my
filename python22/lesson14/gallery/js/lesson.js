/* Task 2 */


let gallery, index, nextBtn, prevBtn;

function slideImg(n){
    gallery = document.getElementById("images").children;
    prevBtn = document.getElementById("prev-btn");
    nextBtn = document.getElementById("next-btn");
    for (let i = 0; i < gallery.length; i++) {
        if(gallery[i].classList.contains("current-img")){
            index = i;
        }
    }

    if(index == 0 && n > 0)prevBtn.classList.remove("unactive") 
    if(index == 1 && n < 0)prevBtn.classList.add("unactive")

    if((index == gallery.length-2) && n > 0)nextBtn.classList.add("unactive") 
    if((index == gallery.length-1) && n < 0)nextBtn.classList.remove("unactive") 

    if(index + n == gallery.length){
        return
    }
    else if(index + n < 0){
        return
    }
    else{
        gallery[index].classList.remove("current-img");
        gallery[index+n].classList.add("current-img");
    }
}