const secondhand = document.querySelector('.second-hand');
const minhand = document.querySelector('.min-hand');
const hourhand =document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds =now.getSeconds();
    const mins =now .getMinutes();
    const hours = now.getHours();
    const hourDegree = ((hours/12)*360)+90;
    const minsDegree = ((mins/60)*360)+90;
    const secondsDegree = ((seconds/60)*360)+ 90;
    secondhand.style.transform =`rotate(${secondsDegree}deg)`;
    minhand.style.transform = `rotate(${minsDegree}deg)`;
    hourhand.style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(setDate,1000);