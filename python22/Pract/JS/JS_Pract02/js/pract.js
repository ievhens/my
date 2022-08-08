function display(result){
  document.getElementById("result").innerHTML = result;
}

/* Task 1 */

function checkNumber(){
  let num = +prompt("Введите число: ");
  let result = "";
  if(num > 0)
  result = "положительное";
  else if(num < 0)
  result = "отрицательное";
  else
  result = "- ноль";
  display("Это число "+ result)
}

/* Task 2 */

function checkAge(){
  let age = +prompt("Введите ваш возраст: ");
  let result = "";
  let years = "";
  if(age > 120)
  result = "Люди так долго не живут"
  else if(age < 0)
  result = "Вам еще только предстоит родиться"
  else
  {switch(age%10){
    case 1:
      years = "год"
      break;
    case 2:
      years = "года"
      break;
    case 3:
      years = "года"
      break;
    case 4:
      years = "года"
      break;
    default:
      years = "лет"
      break;
  }
  }
  display(`Вам ${age} ${years}. Отличный возраст!`)
}

/* Task 3 */

function getAbsolute(){
  let num = +prompt("Введите число: ");
  if(num < 0)
  num = -num;
  display(num);
}

/* Task 4 */

function checkTime(){
  let hours = +prompt("Введите часы: ");
  let minutes = +prompt("Введите минуты: ");
  let seconds = +prompt("Введите секунды: ");
  if(hours > 23 || hours < 0 || minutes > 59 || minutes < 0 || seconds > 59 || seconds < 0)
  result = "неверное значение";
  else
  result = `Ваше время<br>${String(hours).padStart(2, "0")}чч : ${String(minutes).padStart(2, "0")}мм : ${String(seconds).padStart(2, "0")}сс`
  display(result)

}

/* Task 5 */

function checkQuorter(){
  let x = +prompt("Введите x: ");
  let y = +prompt("Введите y: ");
  let result = "";
  if(x == 0 || y == 0)
  result = "координаты вне четвертей"
  else if(x < 0 && y > 0)
  result = " 1-й"
  else if(x > 0 && y > 0)
  result = "о 2-й"
  else if(x > 0 && y < 0)
  result = " 3-й"
  else
  result = " 4-й"
  display(`Это в${result} четверти`)
}

/* Task 6 */

function runMonth(){
  let monthNum = +prompt("Введите номер месяца: ");
  let monthName = "";
  switch (monthNum){
    case 1:
    monthName = "январь";
    break;
    case 2:
    monthName = "февраль";
    break;
    case 3:
    monthName = "март";
    break;
    case 4:
    monthName = "апрель";
    break;
    case 5:
    monthName = "май";
    break;
    case 6:
    monthName = "июнь";
    break;              
    case 7:
    monthName = "июль";
    break;
    case 8:
    monthName = "август";
    break;
    case 9:
    monthName = "сентябрь";
    break;
    case 10:
    monthName = "октябрь";
    break;
    case 11:
    monthName = "ноябрь";
    break;
    case 12:
      monthName = "декабрь";
      break;
    default:
      monthName = "не номер месяца";
  }
  display(`Это ${monthName}`)
}

/* Task 7 */

function calculate(){
  let a = +prompt("Введите число a: ");
  let b = +prompt("Введите число b: ");
  let operation = prompt("Введите символ операции(+, -, * или /): ");
  let result = "";
  switch (operation){
    case "+":
    result = (a + b).toFixed(2);
    break;
    case "-":
    result = (a - b).toFixed(2);
    break;
    case "*":
    result = (a * b).toFixed(2);
    break;
    case "/":
    result = (a / b).toFixed(2);
    break;
    default:
    result = "";
    break;
  }
  display(result)
}

/* Task 8 */

function checkBiggest(){
  let a = +prompt("Введите число a: ");
  let b = +prompt("Введите число b: ");
  result = "";
  if(a > b)
  result = `${a} больше ${b}`;
  else if(a < b)
  result = `${b} больше ${a}`;
  else
  result = "числа равны"
  display(result)
}

/* Task 9 */

function checkFive(){
  let num = +prompt("Введите число: ");
  let result = "";
  if(!(num % 5))
  result = "кратно"
  else
  result = "не кратно"
  display(result)
}

/* Task 10 */

function checkPlanet(){
  let userPlanet = prompt("Введите название вашей планеты: ").toLowerCase();
  let result = "";
  if(userPlanet == "земля")
  result = "Привет, землянин!"
  else
  result = "Привет, инопланетянин!"
  display(result)
}