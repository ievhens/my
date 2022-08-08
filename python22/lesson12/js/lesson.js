function display(result) {
    document.getElementById("result").innerHTML = (result);
}

/* Task 1 */

let input = document.getElementById("nodigits");

function typeNoDigits(e){
    if(e.key.match(/[0-9]/))
    e.preventDefault()
}

function pasteNodigits(e){
    input.value = input.value.replace(/[0-9]/g, "")
}

/* Task 2 */

function runModal(){
    const modal = document.createElement("div");
    modal.style.cssText = "width: 30%; padding: 20px; border: 10px solid white; background-color: rgb(153, 153, 153); color: black; position: absolute; top: 30%; left: 35%; z-index: 1;";
    modal.setAttribute("id", "modal")

    const hello = document.createElement("div");
    hello.style.cssText = "background-color: rgb(149, 175, 193);padding: 50px;";

    const h1 = document.createElement("h1");
    h1.innerText = "Hello from Modal Window!";
    h1.style.cssText = "font-size: 2em; text-align: center;";
    hello.appendChild(h1)

    const closeButton = document.createElement("button");
    closeButton.style.cssText = "display: block; margin: auto; font-size: 1em; border: 1px solid black";
    closeButton.innerText = "Close";
    closeButton.setAttribute("onclick","document.getElementById('modal').remove()")

    const result = document.getElementById("result"); 

    result.appendChild(modal);
    modal.appendChild(hello);
    hello.appendChild(closeButton);
}

/* Task 3 */

    let ball;
    let turn = 0;
    let maxwidth;
    let maxheight;
    let ballSize;

function runBall() {
    ball = document.getElementById("ball");

    let ballX = 0;
    let ballY = 0;   
    
    let ballSize = 100;

    maxwidth = screen.width - ballSize;
    maxheight = screen.height - ballSize*2.5;

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";

    ball.style.display = "block";
    document.getElementById("runball").remove();
    document.querySelector(".task-description").style.border = "none";
    document.getElementById("field").style.display = "block";
    document.body.classList.add("football-body")
}

function moveBall() {

    let clickX = event.pageX;
    let clickY = event.pageY;

    let ballSize = 100;
    
    ball.style.left = clickX - ballSize/2 + "px";
    ball.style.top = clickY - ballSize/2 + "px";

    if(clickX < ballSize/2) ball.style.left = 0 + "px";
    if(clickX > maxwidth) ball.style.left = maxwidth + "px";
    if(clickY < ballSize/2) ball.style.top = 0 + "px";
    if(clickY > maxheight) ball.style.top = maxheight + "px";

    rotateBall();
}
    
function rotateBall(){  
    turn += 270;
    ball.style.transform = "rotate(" + turn + "deg)";
}


/* Task 4 */

let lightsCounter = 0;

function nextLight(){

    let red = document.querySelector(".light:nth-child(1)");
    let yellow = document.querySelector(".light:nth-child(2)");    
    let green = document.querySelector(".light:nth-child(3)");

    let lights = document.querySelectorAll(".light");
    
    for (i=0; i<lights.length; i++){
        lights[i].style.backgroundColor = "black";
    }

    switch (lightsCounter) {
        case 0:
            red.style.backgroundColor = "red";    
            break;
        case 1:
            yellow.style.backgroundColor = "yellow";
            break;
        case 2:
            green.style.backgroundColor = "green";
            break;                    
        default:
            break;
    }        
    
    lightsCounter++;
    
    if (lightsCounter > 2)
    lightsCounter -= lightsCounter;
}

/* Task 5 */

function select(number){
    let items = document.getElementById("ol").getElementsByTagName("li");
    
    for (i=0; i<items.length; i++){
      if(i+1 == number)
      items[i].className = "selectedli";
      else
      items[i].className = "";
    }     
  }

/* Task 6 */

function runTip(event){

    
    setTimeout(function(){
        let tip = document.getElementById("tool-tip");
        tip.style.display = "block";
    
        let arrow = document.getElementById("arrow");
        let arrowHeight = arrow.offsetHeight
    
        let tipText = document.getElementById("tip-text")
        let tipHeight = tip.offsetHeight + arrowHeight;
    
    
        let buttonHeight = event.target.offsetHeight + arrowHeight;
    
        let buttonTop = event.target.offsetTop;
        let parentTop = event.target.parentNode.offsetTop;
    
        let left = event.target.offsetLeft;
        tip.style.left = left + ((event.target.offsetWidth - tip.offsetWidth)/2) + "px";
    
    
        if ((buttonTop - parentTop) <= tipHeight)
            {tip.style.top = buttonTop + buttonHeight + "px";
            arrow.style.top = -15 + "%";}
        else
            {tip.style.top = buttonTop - tipHeight + "px";
            arrow.style.top = 75 + "%";}
    
        if(event.target.className == "button-type-1")
            tipText.innerText = "tool tip 1";
    
        if(event.target.className == "button-type-2")
            tipText.innerText = "tool tip 2";
    }, 500)
          
    
/*     setTimeout(function(){
        let tip = document.getElementById("tool-tip");
        tip.style.display = "none";
    }, 3000) */
}

function closeTip(){
    let tip = document.getElementById("tool-tip");
    tip.style.display = "none";
}

function changePosition(){
    let buttons = document.querySelectorAll("#result button");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].style.top = -parseInt(buttons[i].style.top) + "em"
        }
}


