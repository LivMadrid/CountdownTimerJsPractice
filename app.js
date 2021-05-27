
const submit = document.getElementById("submit");
const date = document.getElementById("date");
const time = document.getElementById("time");
const start = document.getElementById("go");
let repeatfunc = null; 


// const countDownDate = new Date("June 02, 2021 05:00:00");
// console.log(countDownDate.getTime()); 
submit.addEventListener("click", function(){
    const countDownDate = new Date(date.valueAsNumber + time.valueAsNumber);
    // const inputTime = new Date(time.value); 
    // const countDownDate = date + time;
    console.log(countDownDate)
    console.log(countDownDate.getTimezoneOffset())
// // run function every sec
clearInterval(repeatfunc);
repeatfunc = setInterval(function() {
    
const presentMoment = new Date();
const presenttime = presentMoment.getTime();
console.log(presenttime);
const timeInBetween = (countDownDate.getTime() + (countDownDate.getTimezoneOffset() * 60 * 1000 )) - presentMoment.getTime(); 
console.log(timeInBetween)

const days = Math.floor(timeInBetween / (1000 * 60 * 60 * 24));
console.log(days);
const hours = Math.floor((timeInBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
console.log(hours);
const minutes = Math.floor((timeInBetween % ( 1000 * 60 * 60 )) / (1000 * 60));
const seconds = Math.floor((timeInBetween % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days + " days"
document.getElementById("hours").innerHTML = hours + " hours"
document.getElementById("mins").innerHTML = minutes + " minutes"
document.getElementById("secs").innerHTML = seconds + " seconds"

if (timeInBetween < 0) {
    clearInterval(repeatfunc);
    document.getElementById("days").innerHTML = " 0 days"
    document.getElementById("hours").innerHTML = " 0 hours"
    document.getElementById("mins").innerHTML = " 0 minutes"
    document.getElementById("secs").innerHTML = " 0 seconds"
    document.getElementById("arrived").innerHTML = "You've arrived to the anticipated present moment ";
}
}, 1000);
});


const LIMIT_TIME = 3600;
let timeSlippedAway = 0;
let timeLeft = LIMIT_TIME; 


function timeRemaining(timeLeft) {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    
    return document.getElementById("round-timer-label").innerHTML = `${minutes}: ${seconds}`;
}  ; 



let timerInterval = null

start.addEventListener ("click", function startTimer() {
    timerInterval = setInterval(() => {

        timeSlippedAway = timeSlippedAway += 1;
        timeLeft = LIMIT_TIME - timeSlippedAway;
        
        const COLOR_CODE = {
            info: {
                color: "grey" 
            }
        };

    document.getElementById("round-timer-path-remaining").innerHTML = COLOR_CODE.info.color;

        document.getElementById("round-timer-label").innerHTML = timeRemaining(timeLeft);
    }, 1000); 
});









