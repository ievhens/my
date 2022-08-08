function insertResult(result) {
    document.getElementById("result").innerHTML = (result);
}

/* Task 1 */

let car;

function createCar() {
   let country = prompt("Country: ");
   let model = prompt("Model: ");
   let year = +prompt("Year: ");
   let averageSpeed = +prompt("Average speed: ");    
   car = new Vehicle(country, model, year, averageSpeed);
   car.showInfo ()
}

class Vehicle {
    constructor (country, model, year, averageSpeed) {
        this.country = country;
        this.model = model;
        this.year = year;
        this.averageSpeed = averageSpeed;
    }
    showInfo () {
        insertResult("country: " + this.country + "<br>" +
                    "model: " + this.model + "<br>" +
                    "year: " + this.year + "<br>" +
                    "average speed: " + this.averageSpeed)
    };
    getTimeForDistance () {
        let distance = +prompt("Type distance in km: ")
        let time = distance / this.averageSpeed;
        let restHours = 0;
        if (time > 4)
            restHours = Math.floor(time / 4 - 1);
        let timeTotal = convertFromSeconds(convertToSeconds(time + restHours));
        insertResult(timeTotal);
    };       
}

function convertToSeconds(hours) {
    let result = hours * 3600;
    return result;
}

function convertFromSeconds(secondsTotal) {
    let hours = Math.floor(secondsTotal / 3600);
    let minutes = Math.floor((secondsTotal % 3600)/60);
    let secondsRest = (secondsTotal % 3600) % 60;
    let result = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(Math.floor(secondsRest)).padStart(2, "0")}`;
    return result;
}


/* Task 2 */

let fractions = [];
let fraction1;
let fraction2;

function createFraction() {
    let num = +prompt("Делимое: ");
    let denom = +prompt("Делитель: ");
    fractions.push(new Fraction(num, denom) )
    fraction1 = fractions[0];
    fraction2 = fractions[1];
}

class Fraction {
    constructor (num, denom) {
        this.num = num;
        this.denom = denom;
    }
    showInfo() {
        insertResult(this.num + "/" + this.denom + "<br>" +
                    "Десятичный вид: " + (this.num / this.denom))
    };   

    quotient() {
        return (this.num / this.denom);
    }
}

function getSumFractions() {
    let result = fraction1.quotient() + fraction2.quotient();
    insertResult (result);
}

function getDifferenceFractions() {
    let result = Math.abs(fraction1.quotient() - fraction2.quotient());
    insertResult (result);
}

function getProductFractions() {
    let result = fraction1.quotient() * fraction2.quotient();
    insertResult (result);
}

function getDividendFractions() {
    let result = fraction1.quotient() / fraction2.quotient();
    insertResult (result);
}

function getReductionFraction() {
    let reductor = +prompt("Сократить на: ");
    let fractionChoice = +prompt("Номер дроби: ");
    switch(fractionChoice){
        case 1: 
            if (fraction1.num % reductor == 0 && fraction1.denom % reductor == 0)
                insertResult (String(fraction1.num / reductor) + "/" + String(fraction1.denom / reductor));
            else
                insertResult ("not reductable")
            break;
        case 2: 
            if (fraction2.num % reductor == 0 && fraction2.denom % reductor == 0)
                insertResult (String(fraction2.num / reductor) + "/" + String(fraction2.denom / reductor));
            else
            insertResult ("not reductable")
            break;
        default: 
                insertResult ("Try again");
    }
}

/* Task 3 */


class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    };
    displayTime() {
        let result = `${String(this.hours).padStart(2, "0")}:${String(this.minutes).padStart(2, "0")}:${String(this.seconds).padStart(2, "0")}`;
        insertResult(result);
    };
    addSeconds(seconds) {
        this.seconds += seconds;
        if (this.seconds < 0) {
            this.addMinutes(Math.floor(this.seconds / 60));
            this.seconds = (this.seconds % 60) + 60};
        if (this.seconds/60 >= 1) 
            {this.addMinutes(Math.floor(this.seconds / 60));
            this.seconds %= 60};
        this.displayTime()
    };
    addMinutes(minutes) {
        this.minutes += minutes;
        if (this.minutes < 0) {
            this.addHours(Math.floor(this.minutes / 60));
            this.minutes = (this.minutes % 60) + 60};
        if(this.minutes/60 >= 1) {
            this.addHours(Math.floor(this.minutes / 60));
            this.minutes %= 60};
        this.displayTime()
    };
    addHours(hours) {
        this.hours += hours;
        if (this.hours < 0) {
            this.hours = (this.hours % 24) + 24};
        if(this.hours > 23) {
            this.hours %= 24}; 
        this.displayTime()
    };

}

let userTime;

function setTime() {
    let hours = +prompt("Set hours: ");
    let minutes = +prompt("Set minutes: ");
    let seconds = +prompt("Set seconds: ");
    if ((hours < 0 || hours > 23) || (minutes < 0 || minutes > 59) || (seconds < 0 || seconds > 59))
        insertResult("wrong input");
    else
        userTime = new Time(hours, minutes, seconds);
        userTime.displayTime();
}

function run() {
    setInterval(function () {userTime.addSeconds(1)}, 1000);
};

