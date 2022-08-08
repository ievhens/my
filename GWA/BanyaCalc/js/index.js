let price = {
    comfort: {
        weekday: {
            1: 120,
            2: 200,
            3: 250,
        },
        weekend: {
            1: 120,
            2: 250,
            3: 300,            
        },
    },
    luxury: {
        weekday: {
            1: 150,
            2: 250,
            3: 300,
        },
        weekend: {
            1: 150,
            2: 300,
            3: 350,            
        },
    },
}

let limits = {
    hours:{
        qnt: 3,
        price: 100,
    },
    persons: {
        qnt: 4,
        price: 50,
    },
};


let hours, hour, persons, room, day, total, properson;

document.getElementById("submit").addEventListener("click", calculate);
document.querySelector(".numbervalues").addEventListener("input", changeValues);


function calculate(){  

    event.preventDefault()

    let addedHoursCost = 0;
    let addedPersonsCost = 0;

    hours = +document.querySelector('input[name="hours"]').value;
    persons = +document.querySelector('input[name="persons"]').value;
    room = document.querySelector('input[name="room"]:checked').value;
    day = document.querySelector('input[name="day"]:checked').value;

    if(hours > limits.hours.qnt){
        hour = limits.hours.qnt;
        addedHoursCost = (hours - limits.hours.qnt) * limits.hours.price;
    }
    if(persons > limits.persons.qnt){
        addedPersonsCost = (persons - limits.persons.qnt) * limits.persons.price;
    }

    total = price[room][day][hour] + addedHoursCost + addedPersonsCost;
    properson = Math.ceil(total/persons)

    document.getElementById("total").innerHTML = `<span>${total}</span>`;
    document.getElementById("properson").innerHTML = `<span>${properson}</span>`;
}




function changeValues(){
    event.target.parentNode.querySelector("input[type=number]").value = event.target.value;
}

function changeQuantity(n){
    let inputNumber = event.target.parentNode.querySelector("input[type=number]");
    let inputRange = event.target.parentNode.nextElementSibling;
    let [qnt, min, max] = [+(inputNumber.value), +(inputNumber.min), +(inputNumber.max)];
    qnt += n;
    if(qnt < min || qnt > max)
        return
    else{
        inputNumber.value = qnt;
        inputRange.value = qnt;  
    }
}

