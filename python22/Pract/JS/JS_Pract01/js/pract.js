function display(result){
  document.getElementById("result").innerHTML = result;
}

/* Task 1 */

function getExp(){
  let number = +(prompt("Введите число: "))
  let exp = number ** 2;
  display(exp)
}

/* Task 2 */

function getAverage(){
  let a = +prompt("Введите число a: ");
  let b = +prompt("Введите число b: ");
  let average = (a+b)/2;
  display(average)
}

/* Task 3 */

function getArea(){
  let side = +prompt("Введите длину стороны: ");
  display(side ** 2);
}

/* Task 4 */

function convertToMiles(){
  let km = +prompt("Введите число километров: ");
  let prop = 0.621371;
  display((km * prop).toFixed(2) + " миль")
}

/* Task 5 */

function calculate(){
  let a = +prompt("Введите число a: ");
  let b = +prompt("Введите число b: ");
  display(`${a+b}, ${a-b}, ${a/b}, ${a*b}`)
}

/* Task 6 */

function getX(){
  let a = +prompt("Введите число a: ");
  let b = +prompt("Введите число b: ");
  let x = -b/a;
  display(x);
}

/* Task 7 */

function getRestTime(){
  let hours = +prompt("Введите часы: ");
  let minutes = +prompt("Введите минуты: ");
  if(hours < 0 || hours > 23 || minutes < 0 || minutes > 59){
    display("неверное значение")
    return
  }
  else{
    let dayDuration = 60 * 24;
    let currentTime = hours * 60 + minutes;
    let restTime = dayDuration - currentTime
    let resthours = Math.floor(restTime/60);
    let restminutes = restTime%60;
    display(`${String(resthours).padStart(2, "0")}:${String(restminutes).padStart(2, "0")}`);  
  }
}

/* Task 8 */

function getSeconddigit(){
  let number = +prompt("Введите трехзначное число: ");
  if(number < 100 || number > 999){
    display("неверное значение")
  }
  else{
   display(Math.floor(number/10)%10) 
  }
}

/* Task 9 */

function setLastToStart(){
  let number = +prompt("Введите пятизначное число: ");
  if(number < 10000 || number > 99999){
    display("неверное значение")
  }
  else{
    display(String(number%10)+String(Math.floor(number/10)))
  }
}

/* Task 10 */

function getSallary(){
  let sallary = +prompt("Введите сумму продаж: ");
  if(sallary < 0){
    display("неверное значение")
  }
  else{
    let fixed = 250;
    let interest = 0.1;
    display(`Ставка: $${fixed}<br>Процент: ${interest * 100}%<br> Продажи: $${sallary}<br> Всего: $${sallary * interest + fixed}`)
  }
}
