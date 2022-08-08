function display(result) {
    document.getElementById("result").innerHTML = (result);
}

/* Task 1 */

function underline(){
    let links = document.querySelectorAll("#linksul a[href^='http']")
    for (let i = 0; i < links.length; i++) {
        links[i].style.textDecoration = "underline dotted"
    }
}

/* Task 2 */

function rollInOut(event){
    let rollable = event.target.querySelector("ul");
    if(rollable !== null)
    if(rollable.style.display == "")
    rollable.style.display = "none";
    else
    rollable.style.display = "";    
}

/* Task 3 */

function selectLi(event){
    let items = document.querySelectorAll("#result ol li");
    for(let i = 0; i < items.length; i++){
        items[i].style.backgroundColor = "";
    };
    if(event.target.tagName == "LI"){
        event.target.style.backgroundColor = "darkred";
    }
}

/* Task 4 */

function editText(event){

    let editable = document.getElementById("editable");
    let text = editable.innerText;
    let textarea = document.createElement("textarea");
 
    if(event.code == "KeyE" && (event.ctrlKey || event.metaKey)){
        event.preventDefault();
        textarea.setAttribute("id", "edit");
        textarea.innerText = text;
        editable.innerHTML = "";
        editable.appendChild(textarea)};

    if(event.code == "KeyS" && (event.ctrlKey || event.metaKey)){
        event.preventDefault();
        let edited = document.querySelector("#editable textarea").value;
        editable.innerHTML = edited;         
    }    
}

/* Task 5 */

function sort(event){
    let table, thead, rows, switching, i, index, x, y, shouldSwitch;
    table = document.getElementById("table");
    thead = table.querySelectorAll("tr td")
    switching = true;

    for(i = 0; i < thead.length; i++){
        if (thead[i].innerText == event.target.innerText){
            index = i;
        }
    }
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[index];
          y = rows[i + 1].getElementsByTagName("TD")[index];
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }    
}

/* Task 6 */

function resultDrag(event){
    let result = document.getElementById("result");
    result.style.minWidth = 250 + "px";
    result.style.minHeight = 250 + "px";
    event.dataTransfer.dropEffect = "move";
    result.style.width = event.pageX - result.offsetLeft + "px";
    result.style.height = event.pageY - result.offsetTop + "px"; 
}