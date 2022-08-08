function insertResult (result){
    document.getElementById("result").innerHTML = (result);
}

/* Task 1 */

function compareTwoNumbers() {
    let a = +prompt("Type your first number:");
    let b = +prompt("Type your second number:");
    if (a > b)
        result = 1
    else if (a < b)
        result = -1
    else
        result = 0;
    insertResult (result);
}

/* Task 2 */

function getFactorial() {
    let n = +prompt("Type number to get its factorial:");
    if (n == 1 || n == 0)
        n = 1;
    for (i = n - 1; i >= 1; --i)
        n *= i;
    insertResult (n);
}

/* Task 3 */

function mergeToNumber() {
    result = "";
    for (i = 1; i < 4; ++i){
        let digit = prompt("Type digit:");
        result += digit;
    };
    insertResult (+result);
}

/* Task 4 */

function getSquare() {
    let rectangleWidth = +prompt("Type width:");
    let rectangleHeight = +prompt("Type height:");
    
    if (rectangleWidth == 0)
        recatangleSquare =  rectangleHeight ** 2;
    else if (rectangleHeight == 0)
        recatangleSquare = rectangleWidth ** 2;
    else
        recatangleSquare = rectangleWidth * rectangleHeight;
    insertResult (recatangleSquare);
}

/* Task 5 */

function checkPerfectNumber() {
    let num = +prompt("Type number:");
    let tempContainer = 0;
    let result = ""
    for(var i=1; i<=num/2; i++){
        if(num % i === 0)
            tempContainer += i;
        }
    if(tempContainer === num && tempContainer !== 0)
      result = "perfect";
    else
      result = "not perfect";  
    insertResult(result);
}
// for Task 6
function checkPerfectness(num) {
    let tempContainer = 0;
    let isPerfect;
    for(var i=1; i<=num/2; i++){
        if(num % i === 0)
            tempContainer += i;
        }
    if(tempContainer === num && tempContainer !== 0)
        isPerfect = true;
    else
        isPerfect = false;
    return isPerfect;
}

/* Task 6 */

function getPerfectNumberInRange() {
    let firstInRange = +prompt("Type first number in range:");
    let lastInRange = +prompt("Type last number in range:");
    let result = "";
    for (i = firstInRange; i < lastInRange + 1; ++i){
        if (checkPerfectness(i))
            result += i + " ";
    }
    if (result != "") insertResult (result);
    else insertResult ("no perfect numbers in this range");
}

/* Task 7 */

function displayTime() {
    let hours = +prompt("Hours:");
    let minutes = +prompt("Minutess:");
    let seconds = +prompt("Seconds:");
    let result = "";
    
    if ((hours < 0 || hours > 24) || (minutes < 0 || minutes > 60) || (seconds < 0 || seconds > 60))
        result = "wrong value";
    else
        result = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    
    insertResult(result);
}

/* Task 8 */

function convertToSeconds() {
    let hours = +prompt("Hours:");
    let minutes = +prompt("Minutess:");
    let seconds = +prompt("Seconds:");
    let result = "";
    
    if ((hours < 0 || hours > 24) || (minutes < 0 || minutes > 60) || (seconds < 0 || seconds > 60))
        result = "wrong value";
    else
        result = seconds + minutes * 60 + hours * 3600;
    
    insertResult(result);
}
// for Task 10
function convertedToSeconds() {
    let hours = +prompt("Hours:");
    let minutes = +prompt("Minutess:");
    let seconds = +prompt("Seconds:");
    let result = 0;
    
    if ((hours < 0 || hours > 24) || (minutes < 0 || minutes > 60) || (seconds < 0 || seconds > 60))
        result = "wrong value";
    else
        result = seconds + minutes * 60 + hours * 3600;
    
    return result;
}

/* Task 9 */

function convertFromSeconds() {
    let secondsTotal = +prompt("Seconds:");
    let hours = Math.floor(secondsTotal / 3600);
    let minutes = Math.floor((secondsTotal % 3600)/60);
    let secondsRest = (secondsTotal % 3600) % 60;
    let result = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secondsRest).padStart(2, "0")}`;
    insertResult(result);
}

// for Task 10

function returnConvertedFromSeconds(secondsTotal) {
    let hours = Math.floor(secondsTotal / 3600);
    let minutes = Math.floor((secondsTotal % 3600)/60);
    let secondsRest = (secondsTotal % 3600) % 60;
    let result = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secondsRest).padStart(2, "0")}`;
    return result;
}

/* Task 10 */

function getTimeBetweenMoments() {
    let momentFirst = convertedToSeconds();
    let momentSecond = convertedToSeconds();
    let result = momentFirst - momentSecond;
    if (result < 0)
        result = -result;
    insertResult(returnConvertedFromSeconds(result));
}
