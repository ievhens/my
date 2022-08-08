// function display(result){
//   document.getElementById("result").innerHTML = result;
// }

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

let parent = new Exercises;
let display = new Exercises;
let edited;


document.onload = load()

function load(){

    if(getfromCookie()){

        Object.values(getfromCookie()).forEach(obj =>{
            let exercise = Object.assign(new Exercise(), obj);
            parent[exercise.name] = exercise;
            if(!exercise.complete){
                display[exercise.name] = exercise;
            }
        })
    }

    document.querySelector(".exercises").innerHTML = display;
    document.querySelector(".total_progress").innerHTML = parent.progress();

    
    document.querySelectorAll("input[type='range']").forEach(item =>{
        item.disabled = true;
    })

    document.querySelectorAll(".exercise_push button").forEach(item =>{
        item.addEventListener("click", () =>{
            let name = item.closest(".exercise").querySelector("[name='exercise_name']").value;
            parent[name].addone();
            parent.apply();
            saveToCookie()
        })
    })

    document.querySelectorAll(".exercise_numbers button").forEach(item =>{
        item.addEventListener("click", event =>{
            let name = item.closest(".exercise").querySelector("[name='exercise_name']").value;
            let n = event.target.classList.contains("more") ? 1 : -1;
            if(event.target.parentNode.classList.contains("sets")){
                parent[name].addset(n);
            }
            if(event.target.parentNode.classList.contains("reps")){
                parent[name].addrep(n);
            }
            parent.apply();
            saveToCookie()
        })
    })

    document.querySelectorAll("[name='exercise_name']").forEach(item =>{
        item.addEventListener("focusin", event =>{
            edited = event.target.value;
    })

    document.querySelectorAll("[name='exercise_name']").forEach(item =>{
        item.addEventListener("focusout", event =>{

            let element = item.closest(".exercise");
        
            let name = item.value;
            let sets = +element.querySelector("[name='sets']").value;
            let reps = +element.querySelector("[name='reps']").value;
            let dones = +element.querySelector("[name='exercise_progress']").value

            if(item.value != edited){
                parent[item.value] = (new Exercise(name, sets, reps, dones))
                delete parent[edited]
            }
            saveToCookie()
            load()})
        })
    })
}

function addExercise(){
    parent[new Exercise().name] = new Exercise;
    display[new Exercise().name] = new Exercise;
    console.log(parent);
    
    load();
    let input = document.querySelector(`[name="exercise_name"][value=""]`);
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
}






function saveToCookie(){
    let cookieDuration = 60*60*1000;
    let now = +(new Date());
    let expires = new Date(now + cookieDuration);
    document.cookie = `trainings=${JSON.stringify(parent)}; expires=${expires.toGMTString()}; path=/`;
}

function getfromCookie(){

    let cookieString = decodeURIComponent(document.cookie);
    if(cookieString.length > 0){
        return JSON.parse(cookieString.split("=")[1])
    }
}

function clearCookie(name){
    let cookieDuration = 24*60*60*1000;
    let now = +(new Date());
    let expires = new Date(now - cookieDuration);
    document.cookie = `${name}=${JSON.stringify(parent)}; expires=${expires.toGMTString()}; path=/`;
    console.log(document.cookie);
}

// saveToCookie()
//clearCookie("trainings")
console.log(getfromCookie());