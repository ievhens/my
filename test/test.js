function display(result){
    document.getElementById("result").innerHTML = result;
}
let counter = 0;
let interval = setInterval(() => {
    counter++;
    console.log(counter)
    if(counter === 5) clearInterval(interval)
}, 1000)

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if(counter == 3){
            resolve("resolved")
        }
        else{
            reject("rejected");
        }
    }, 2000)
})
promise.then(console.log)
promise.catch(console.log)












class Block{
    constructor(name, a, b){
        this.name = name || "test",
            this.a = a || 1,
            this.b = b || 1
    }
    toString(){
        let layout = `
            <div class="divs">
                <div class="d1">${this.name}</div>
                <div class="d2">${this.a}</div>
                <div class="d3">${this.b}</div>
            </div>`
        return layout;
    }
    apply(){
        document.querySelector(`.${this.name}`).innerHTML = this;
    }
}
class Parent{
    constructor(){
    }
    toString(){
        return Object.values(this).join("");
    }
}
let blocks = new Parent();
for(let i = 1; i < 4; i++){
    let block = new Block(`obj${i}`, (i+3), (i+6));
    blocks[block.name] = block;
}

function add(name, a, b){
    blocks[name] = new Block(name, a, b);
    load()
}

// document.onload = load();
function load() {
    document.getElementById("result").innerHTML = "";
    for(let i in blocks){
        let aside = document.createElement("aside");
        aside.innerHTML = blocks[i]
        aside.classList.add(blocks[i].name);
        document.getElementById("result").appendChild(aside);
        assign(blocks[i].name);
    }
}

function assign(name){
    document.querySelector(`.${name}`).addEventListener("click", event => {
        if(event.target.classList.contains("d1")){
            if(event.target.style.backgroundColor == "red"){
                event.target.style.backgroundColor = "";
            }
            else{
                event.target.style.backgroundColor = "red"
            }
        }
        if(event.target.classList.contains("d2")){
            if(event.target.style.backgroundColor == "yellow"){
                event.target.style.backgroundColor = "";
            }
            else{
                event.target.style.backgroundColor = "yellow"
            }
        }
        if(event.target.classList.contains("d3")){
            if(event.target.style.backgroundColor == "green"){
                event.target.style.backgroundColor = "";
            }
            else{
                event.target.style.backgroundColor = "green"
            }
        }

    })
}

