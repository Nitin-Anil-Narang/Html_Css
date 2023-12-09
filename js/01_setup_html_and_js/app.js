let list = document.querySelectorAll(".square");

function half(x) {
    return x / 2;
}

function add(x, y) {
    return x + y;
}
console.log(add(2,3));

function getRandomNumber() {
    return Math.random();
}
console.log(getRandomNumber("unexpected"));
const one = half(4);


function add3(x, y, z) {
    console.log("My parameters are named x, y, z");
    console.log("I received the arguments", x, y, z);
    return x + y + z;
}
const sum = add3(1,2);

function doesThisWork(weirdVariable) {
    console.log(weirdVariable);
    return true;
}

doesThisWork("Nitin");

function square(x) {
    return x * x; 
}
const nine = square(3);

function sayHello(name) {
    console.log("Oh hi, " + name + "!");
    
}
sayHello("Marc");

const hm = sayHello("Marc");

const add = (x, y) => x + y;

console.log(add(5,2));

console.log(hm);

console.log(nine);

console.log(sum);
console.log(one);
console.table(list);