const secondHand =  document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    const secondsDegree = ((seconds/60)*360+90)
    const minsDegree = ((mins/60)*360+90)
    const hourDegree = ((hours/12)*360+90)
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    minHand.style.transform = `rotate(${minsDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`; 
    console.log(seconds,mins,hours);
}

setInterval(setDate,1000);