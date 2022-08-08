function insertResult (result){
    document.getElementById("result").innerHTML = (result /* + "<div id = 'again'>" + "</div>" */);
}

/* Task 1 */

function raiseToPower() {
    let a = +(prompt("Type number to raise it to the second power:"));
    let result = a ** 2;
    insertResult (result);
}

/* Task 2 */

function getAverage() {
    let a = +(prompt("Type first number:"));
    let b = +(prompt("Type second number:"));
    let result = `Среднее: ${(a+b)/2}`;
    insertResult (result);
}

/* Task 3 */

function getSquareArea() {
    let sideLength = +(prompt("Type side length of your square:"));
    let result = `Площадь: ${sideLength ** 2} см<sup>2<sup>`;
    insertResult (result);
}

/* Task 4 */

function convertKilometersToMiles() {
    const milesToKilometer = 0.621371;
    let km = +(prompt("Type kilometers number to convert in miles:"));
    let result = `${km * milesToKilometer} миль`;
    insertResult (result);
}

/* Task 5 */

function getBasicArithmetic() {
    let a = +(prompt("Type first number:"));
    let b = +(prompt("Type second number:"));
    let result = `Сумма: ${a+b}<br> Разница: ${a-b}<br> Произведение: ${a*b}<br> Частное: ${a/b}`;
    insertResult (result);
}

/* Task 6 */

function getUnknownVariable() {
    let a = +(prompt("Type first number:"));
    let b = +(prompt("Type second number:"));
    let result = `<i>x<i> = ${-b / a}`;
    insertResult (result);
}

/* Task 7 */

function getDayRemainingTime() {
    let hours = +(prompt("Type hours:"));
    let minutes = +(prompt("Type minutes:"));
    let minutesGone = hours * 60 + minutes;
    let minutesTotal = 24 * 60;
    let hoursLeft = Math.floor((minutesTotal - minutesGone) / 60)
    let minutesLeft = (minutesTotal - minutesGone) % 60
    let result = `Осталось ${hoursLeft} чч ${minutesLeft} мм.`
    insertResult (result);
}

/* Task 8 */

function getSecondNumeral() {
    let threeDigitsNumber = +(prompt("Type three digits number:"));
    let divideHundres = threeDigitsNumber % 100;
    let divideDecimal = divideHundres % 10;
    let result = `Вторая цифра: ${(divideHundres - divideDecimal) / 10}`;
    insertResult (result);
}

/* Task 9 */

function moveLastToStart() {
    let fiveDigitsNumber = +(prompt("Type five digits number:"));
    let divideDecimal = fiveDigitsNumber % 10;
    let result = String(divideDecimal) + Math.floor(fiveDigitsNumber / 10);
    insertResult (result);
}

/* Task 10 */

function calculateSalary() {
    let salesVolume = +(prompt("Type your sales volume:"));
    let basicRate = 250;
    let result = `$${salesVolume * 0.1 + basicRate}`;
    insertResult (result);
}
