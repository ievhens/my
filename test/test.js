function display(result){
    document.getElementById("result").innerHTML = result;
}



class Exercise{

    constructor(name, sets, reps, dones){
        this.name = name || "",
        this.sets = sets || 1,
        this.reps = reps || 3,
        this.dones = dones || 0,
        this.complete = (this.sets == this.dones)
    }

    toString(){

        let layout = `<form class="exercise" action="">
        <aside class="exercise_data">
          <div class="name">
            <input type="text" name="exercise_name" value="${this.name}">
          </div>
          <div class="exercise_numbers">
            <div class="sets">
              <button class="more" type="button">+</button>
              <input type="number" name="sets" value="${this.sets - this.dones}">
              <button class="less" type="button">-</button>
            </div>
            <div class="exercise_sets_span">
              <span>x</span>
            </div>
            <div class="reps">
              <button class="more" type="button">+</button>
              <input type="number" name="reps" value="${this.reps}">
              <button class="less" type="button">-</button>
            </div>
          </div>
          <div class="exercise_push">
            <button type="button">+</button>
          </div>
        </aside>
        <aside class="exercise_progress">
          <input type="range" name="exercise_progress" max="${this.sets}" value="${this.dones}">
        </aside>
        </form>`
        return layout
    }

    apply(){

        let element = document.querySelector(`[value="${this.name}"]`).closest(".exercise");
        
        element.querySelector("input[name='exercise_name']").value = this.name;
        element.querySelector("input[name='sets']").value = this.sets - this.dones;
        element.querySelector("input[name='reps']").value = this.reps;
        element.querySelector("input[name='exercise_progress']").max = this.sets;
        element.querySelector("input[name='exercise_progress']").value = this.dones;

    }

    addone(){
        if((this.sets - this.dones) > 0){
            this.dones ++
        }
        if(this.sets == this.dones){
            this.complete = true;
            document.querySelector(`[value="${this.name}"]`).closest(".exercise").style.display = "none";
        }
        this.apply();            
    }
    addrep(n){
        if((this.reps + n) >= 1){
            this.reps += n;
            this.apply();
        }

    }
    addset(n){
        if(this.sets == this.dones){
            this.sets = this.dones = 0}
        if((this.sets + n) > 0){
            this.sets += n;
        this.apply();
        }
    }
}

class Exercises{
    toString(){
        return Object.values(this).join("");
    }
    total(){
        let totalSets = 0;
        let totalDones = 0;

        for(let el in this){
            totalSets += this[el].sets;
            totalDones += this[el].dones;
            
        }
        return {
            sets: totalSets,
            dones: totalDones,
            // progress: totalSets - totalDones,
        }
    }
    progress(){
        return `<input type="range" max="${this.total().sets}" value="${this.total().dones}">`
    }
    apply(){
        document.querySelector(".total_progress input").max = this.total().sets;
        document.querySelector(".total_progress input").value = this.total().dones;
    }
}
today = new Exercises()
for(let i = 1; i < 6; i++){
    today[new Exercise(`exercise${i}`).name] = new Exercise(`exercise${i}`)
}


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

document.onload = load();
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

















