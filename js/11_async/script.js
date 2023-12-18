const a = 2;
const b =  3 ;

setTimeout(() => {
    console.log("hello i am asnyc")
}, 1000);

fetch("https://images.dog.ceo/breeds/bluetick/n02088632_924.jpg");
//synchronous
console.log(a,b);