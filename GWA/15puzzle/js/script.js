let tilesQnt = 16;
let sideLength = Math.sqrt(tilesQnt);
let cookieDuration = 60*60*1000;

document.body.onload = createTiles(tilesQnt);
document.getElementById("gamefield").addEventListener("click", moveTile);


function getRandomSequence(n){
    let numbers = []
    while(numbers.length != n){
        let num = Math.floor(Math.random() * n)
        if (numbers.includes(num)) continue
        else numbers.push(num)
    }
    if(!isSolvable(numbers)){
        console.log("unsolvable");
        return getRandomSequence(n)
        }
    else{
        console.log("solvable");
        return numbers
    }    
}

function isSolvable(sequence)
{
    let parity = 0;
    let row = 0; 
    let blankRow = 0;

    for (let i = 0; i < sequence.length; i++)
    {
        if (i % sideLength == 0) { 
            row++;
        }
        if (sequence[i] == 0) { 
            blankRow = row; 
            continue;
        }
        for (let k = i + 1; k < sequence.length; k++)
        {
            if (sequence[i] > sequence[k] && sequence[k] != 0)
            {
                parity++;
            }
        }
    }

    if (sideLength % 2 == 0) {
        if (blankRow % 2 == 0) {
            return parity % 2 == 0;
        } else {
            return parity % 2 != 0;
        }
    } else {
        return parity % 2 == 0;
    }
}

function createTiles(n){

    let numbers = getRandomSequence(n);

    gamefield = document.getElementById("gamefield");
    gamefield.innerHTML = "";
    for(let i = 0; i < n; i++){
        let tile = document.createElement("div");
        tile.classList.add(`item${i+1}`)
        if(numbers[i] != 0){
            tile.innerText = numbers[i]
            
        }
        else{
            tile.classList.add("space")
        }
        tile.classList.add("tile")
        gamefield.appendChild(tile)
    }
    prepareMovableTiles()
}

function prepareMovableTiles(){

    let spacePosition;
    let tiles = document.querySelectorAll(".tile");
    
    for(let i = 0; i < tilesQnt; i++){
        if(tiles[i].classList.contains("space"))
        spacePosition = i;
    }

    let top = right = bottom = left = document.querySelector(".space");
    let counter = 0;

    while(counter < sideLength){

        if(top.previousElementSibling != null)

            top = top.previousElementSibling;            

        else top = false;

        if(bottom.nextElementSibling != null)

            bottom = bottom.nextElementSibling;

        else bottom = false;

        counter++;    
    }

    if(left.previousElementSibling != null && (spacePosition % sideLength != 0)) 

        left = left.previousElementSibling;

    else left = false

    if(right.nextElementSibling != null && spacePosition % sideLength != (sideLength-1) % sideLength) 
    
        right = right.nextElementSibling;

    else right = false

    if(top) top.classList.add("movable", "top");
    if(right) right.classList.add("movable", "right");
    if(bottom) bottom.classList.add("movable", "bottom");
    if(left) left.classList.add("movable", "left");
}

function cleanMovable(){
    let movable = document.querySelectorAll(".movable");
    for(let i = 0; i < movable.length; i++){
        movable[i].classList.remove("movable", "top", "right", "bottom", "left")
    }
}

function moveTile(e){

    if(document.querySelector(".active"))
    document.querySelector(".active").classList.remove("active")


    let space = document.getElementById("gamefield").querySelector(".space")
    let movable = e.target;

    if(movable.classList.contains("movable")){    

        let clonedSpace = space.cloneNode(true);
        let clonedMovalbe = movable.cloneNode(true);
        
        clonedMovalbe.classList.add("active");

        space.parentNode.replaceChild(clonedMovalbe, space);
        movable.parentNode.replaceChild(clonedSpace, movable);
    }

    if(checkEnd())congratulate()
    cleanMovable()
    prepareMovableTiles()
}

function checkEnd(){
    
    const endSequence = []
    
    for (let i = 1; i < tilesQnt; i++) {
        endSequence.push(i)
    }
    
    let currentSequence = []
    let counter = 0
    
    let tiles = document.querySelectorAll(".tile")
    
    for (let i = 0; i < tilesQnt-1; i++) {
        currentSequence.push(+(tiles[i].innerHTML))
        if(+(tiles[i].innerHTML) == endSequence[i])
        counter++
    }
    
    if(counter == endSequence.length)
    return true
}

function congratulate(){

    let display = document.getElementById("display");
    display.innerHTML = "";
    
    let table = document.createElement("table");
    table.style.fontSize = "3em";
    table.innerText = "Congratulation!";
    display.appendChild(table);
    
    
    setTimeout(function(){display.removeChild(table)}, 2900);
}

/* function saveToCookie(){
    let now = +(new Date());
    let expires = new Date(now + cookieDuration);
    let numbers = [];

    let tiles = document.querySelectorAll(".tile");
    for(let i = 0; i < tiles.length; i++){
        numbers.push(+tiles[i].innerHTML);
    }
    
    displaySaved(numbers)
    document.cookie = `puzzle=${JSON.stringify(numbers)}; expires=${expires.toGMTString()}; path=/`;
} */

/* function getfromCookie(){

    let cookieString = decodeURIComponent(document.cookie);
    if(cookieString.length > 0){
        return JSON.parse(cookieString.split("=")[1])
    }
} */

/* function displaySaved(n){

    let numbers = n;

    let display = document.getElementById("display");
    display.innerHTML = "";
    
    let table = document.createElement("table");
    let tr, td, i, k;
    for(i = 0; i < sideLength; i++){
        tr = document.createElement("tr");
        table.appendChild(tr)
        for(k = 0; k < sideLength; k++){
            td = document.createElement("td");
            tr.appendChild(td)
        }
    }
    display.appendChild(table)
    tds = document.querySelectorAll("td")
    for(i = 0; i < tds.length; i++){
        tds[i].innerText = numbers[i]
    }
    setTimeout(function(){display.removeChild(table)}, 900)
} */

/* function deleteCookie(){
    let key = prompt("Cookie key to delete: ")
    let d = new Date();
    let expires = new Date(+d - 240*60*1000);
    document.cookie = `${key}=; expires=${expires.toGMTString()}; path=/;`;
} */

