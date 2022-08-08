function display(result){
  document.getElementById("result").innerHTML = result;
}

let result, num, a, b, c, counter, i;

/* Task 1 */

function getLesser(){
  a = +prompt("Input number a: ");
  b = +prompt("Input number b: ");
  if(a == b)display("числа равны")
  else display(`меньшее: ${Math.min(a, b)}`);
}

/* Task 2 */

function raise(){
  a = +prompt("Input base: ");
  b = +prompt("Input power: ");
  result = a ** b;
  display(`${a}<sup>${b}</sup> = ${result}`);
}

/* Task 3 */

function calculate(){
  a = +prompt("Input number a: ");
  b = +prompt("Input number b: ");
  let sign = prompt("Input operation sign (+-* or /): ");
  switch(sign){
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      result = "unknown"
      break;
  }
  display(`${a} ${sign} ${b} = ${result}`)
}

/* Task 4 */

function checkPrime(){
  num = +prompt("Input num: ");
  counter = 0;
  for(i = 2; i < num; i++){
    if(num % i == 0){
      counter++;
    }
  }
  result = (counter > 0)?"не простое":"простое"
  display(`${num}<br> ${result} число`)
}

/* Task 5 */

function getMultipleTable(){
  document.getElementById("result").innerHTML = "";
  num = +prompt("Input num: ");
  result = "";
  let table = document.createElement("table");
  table.style.margin = "0 auto";
  for (i = 1; i < 11; i++) {
    let row = document.createElement("tr")
    table.appendChild(row);
    row.innerHTML = (`<td>${num}</td><td>&times;</td><td>${i}</td><td>=</td><td>${num * i}</td>`);
  };
  document.getElementById("result").appendChild(table);
}

/* Task 6 */

function getRemainder(){
  a = +prompt("Input number a: ");
  b = +prompt("Input number b: ");
  if(a < 0) a = -a;
  if(b < 0) b = -b;
    while(a > 0){
      a -= b;
      if(a < 0){
        a += b;
        break;
      }
    }
  display(a)
}

/* Task 7 */

function getSum(){
  a = 0;
  result = 0;
  while(a < 5){
    num = +prompt("Input number: ")
    result += num;
    a++;
  }
  display(result)
}

/* Task 8 */

let numbers = []

function getMax(){
  if(numbers.length < 5){
    num = +prompt("Input number: ");
    numbers.push(num);
    display(Math.max(...numbers))
  }
  else alert("max 5 numbers. reload the page to start again")
}

/* Task 9 */

let param = [];

function setParam(){
  a = +prompt("Set range start: ");
  b = +prompt("Set range end: ");
  c = +prompt("Odd or even(0/1): ") ? true : false;
  param = [a ,b, c]
}

function getInRange(start, end, bool){
  let max = Math.max(start, end);
  let min = Math.min(start, end);

  result = [];

  for(i = min; i < max; i++){
    if(bool == true && i % 2 == 0){
      result.push(i);
    }
    if(bool == false && i % 2 !== 0){
      result.push(i);
    }
  }
  display(result.join(", "))
}

/* Task 10 */

function getNextDay(){
  let day = +prompt("Day: ");
  let month = +prompt("Month: ");
  let year = +prompt("Year: ");
  let currentDay = new Date(`${year}-${month}-${day}`);
  let nextDay = new Date (currentDay.setHours(currentDay.getHours()+24));
  display(`${nextDay.getDate()}.${nextDay.getMonth()+1}.${nextDay.getFullYear()}`)
}