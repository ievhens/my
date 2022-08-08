/* Task 1 */

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    //pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    //pos4 = e.clientY;
    // set the element's new position:
    //elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    if((elmnt.offsetLeft - pos1) <= 0)elmnt.style.left = 0 + "px";
    if((elmnt.offsetLeft - pos1) >= 180)elmnt.style.left = 180 + "px";
    console.log(e.clientX, (elmnt.offsetLeft - pos1));
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

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