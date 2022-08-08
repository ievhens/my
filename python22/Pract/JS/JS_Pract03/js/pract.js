function display(result){
  document.getElementById("result").innerHTML = result;
}
let result;

/* Task 1 */

function runChar(){
  let quantity = +prompt("Введите число повторений (от 1 до 500): ");
  let char = "#";
  let counter = 0;
  result = "";
  if(quantity < 0 || quantity > 500)
    result = "неверное значение";
  else
    while(counter < quantity){
      result += char;
      counter++;
    }
  display(result)
}

/* Task 2 */

function runToNull(){
  let num = +prompt("Введите число (от 1 до 500): ");
  result = "";
  if(num < 0 || num > 500)
    result = "неверное значение";
  else
    while(num > -1){
      result += (num + "<br>");
      num--;
    }
  display(result)
}

/* Task 3 */

function raise(){
  let num = +prompt("Введите число (от 1 до 500): ");
  let power = +prompt("Введите число (от 1 до 500): ");
  result = 1;
  while(power > 0){
    result *= num;
    power--;
  }
  display(result);
}

/* Task 4 */

function getCommonDivisors(){
  result = "";
  let a = +prompt("Введите число a: ");
  let b = +prompt("Введите число b: ");
  let min = Math.min(a, b);
  while(min > 1){
    if((a % min == 0) && (b % min == 0)){
      result += (min + "<br>")
    }
    min--;
  }
  display(result)
}

/* Task 5 */

function getFactorial(){
  let a = +prompt("Введите число: ");
  result = 1;
  let counter = 1;
  while(counter <= a){
    result *= counter;
    counter++;
  }
  display(result)
}

/* Task 6 */

function solve(){
  let input;
  while(input != 6){
    input = +prompt("Сколько будет 2 + 2 * 2?")
  }
  display("Верно, 6. Сначала выполняется умножение.")
}

/* Task 7 */

function divide(){
  let a = 1000;
  let counter = 0;
  do{
    a /= 2;
    counter++;
  }
  while(a > 50){
    result = a;
  }
  display(`Результат: ${result}<br>Делений: ${counter}`);
}

/* Task 8 */

function getMultipleOf(){
  let num = +prompt("Введите число: ");
  result = "";
  for (let i = 1; i < 100; i++) {
    if(i % num == 0)
    result += (i + "<br>")
  }
  display(result)
}

/* Task 9 */

function getFourth(){
  let start = +prompt("Введите стартовое число: ");
  let end = +prompt("Введите конечное число: ");
  result = "";
  for(let i = start + 3; i <= end; i += 4){
    result += (i + "<br>");
  }
  display(result)
}

/* Task 10 */

function checkPrime(){
  let num = +prompt("Введите число: ");
  let counter = 0;
  for(i = 2; i < num; i++){
    if(num % i == 0){
      counter++;
    }
  }
  result = (counter > 0)?"не простое":"простое"
  display(`${num} - ${result} число`)
}