/* Task 1 */

class Color{
    constructor(name, type, code){
        this.name = name.toLowerCase();
        this.type = type.toLowerCase();
        this.code = code.toLowerCase();
    }
    toString(){
      return `${this.name}#${this.type}#${this.code}`
    }
    getCode(){
      if(this.type == "hex")
      return (`#${this.code}`)
      else
      return (`${this.type}(${this.code})`)
    }
  }

    let userColors=[];
    let name, type, code, i;
    let cookieDuration = 3*60*60*1000;
    let counter = 0;

    let nameTemplate =  /^[a-zA-Zа-яА-ЯёЁ]+$/g;;
    let rgbTemplate = /^\d{1,3}[\s,]\d{1,3}[\s,]\d{1,3}$/;
    let rgbaTemplate = /^\d{1,3},\s?\d{1,3},\s?\d{1,3},\s?(0.[0-9]+|[0-1])$/;
    let hexTemplate = /^[a-f0-9]{6}$/i;

    let nameError = "only letters, please";
    let namePresentError = "name is already present";
    let rgbError = "match [0-255],[0-255],[0-255], please";
    let rgbaError = "match [0-255],[0-255],[0-255],[0-1], please";
    let hexError = "six symbols in [a-f] and [0-9] ranges, please";
    

  document.getElementById("colorform").addEventListener("submit", checkForm)

  function checkForm(event){
    
    event.preventDefault();
    
    name = document.getElementById("colorname").value;
    type = document.getElementById("colortype").value;
    code = document.getElementById("colorcode").value;

    if(userColors.length > 0){
        for (let i = 0; i < userColors.length; i++) 
            if(name == userColors[i].name){
                document.getElementById("nameerror").innerText = namePresentError;
                return;
            }
    }

    if(!nameTemplate.test(name)){
        document.getElementById("nameerror").innerText = nameError;
        return
    }
    
    else if(type == "rgb" && !rgbTemplate.test(code)){
        document.getElementById("codeerror").innerText = rgbError;
        return
    }
    else if(type == "rgba" && !rgbaTemplate.test(code)){
        document.getElementById("codeerror").innerText = rgbaError;
        return
    }
    else if(type == "hex" && !hexTemplate.test(code)){
        document.getElementById("codeerror").innerText = hexError;
        return
    }
    else
        document.getElementById("colorform").submit();
        createColor(name, type, code);
  }

  function createColor(name, type, code){

    let newcolor = new Color(name, type, code)
    userColors.push(newcolor);
    
    let now = +(new Date());
    let expires = new Date(now + cookieDuration);

    let colorkey = "color" + counter;
    counter++;

    document.cookie = `${colorkey}=${encodeURIComponent(newcolor.toString())}; expires=${expires.toGMTString()}; path=/`;
    document.cookie = `counter=${counter}; expires=${expires.toGMTString()}; path=/`;

  }
  
  function getColorsfromCookie(){

    let cookieString = decodeURIComponent(document.cookie);
    let cookieArray = cookieString.split("; ")

    if(cookieArray.length < 0) return;
    else{
        for (let i = 0; i < cookieArray.length; i++) {
    
            if(/^color/.test(cookieArray[i])){
              let colorItem = cookieArray[i].split("=");
              let colorValues = colorItem[1].split("#");
              userColors.push(new Color(colorValues[0], colorValues[1], colorValues[2]))
            }
            if(/^counter/.test(cookieArray[i])){
                let counterItem = cookieArray[i].split("=");
                let counterValue = +(counterItem[1]);
                counter += counterValue;
              }
          }
    }
  }

  function displayColors(){
    getColorsfromCookie()
    if(userColors.length > 0){

      document.getElementById("colors").style.display = "block";

      for (i = 0; i < userColors.length; i++) {

        let container = document.createElement("div");
        container.classList.add("container");
        // adding saved color to element
        container.style.backgroundColor = userColors[i].getCode();
        //
        let description = document.createElement("div");
        description.classList.add("description");
        let nameP = document.createElement("p");
        nameP.classList.add("name");
        nameP.innerText = userColors[i].name;
        let typeP = document.createElement("p");
        typeP.classList.add("type");
        typeP.innerText = userColors[i].type.toUpperCase();
        let codeP = document.createElement("p");
        codeP.classList.add("code");
        codeP.innerText = userColors[i].code;

        let colorItems = document.querySelector(".color-items");
        
        description.appendChild(nameP);
        description.appendChild(typeP);
        description.appendChild(codeP);

        container.appendChild(description)

        colorItems.appendChild(container)
      }
    }
  }

  function deleteCookie(){
    let key = prompt("Cookie key to delete: ")
    let d = new Date();
    let expires = new Date(+d - 240*60*1000);
    document.cookie = `${key}=; expires=${expires.toGMTString()}; path=/;`;
  }

 

