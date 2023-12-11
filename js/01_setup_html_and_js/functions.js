let list = document.querySelectorAll(".square");

function half(x) {
    return x / 2;
}

function add(x, y) {
    return x + y;
}
/mutliply function as practice/
function multi(x,y){
    return x*y;
}
function yell(x) {
    return x.toUpperCase();
}
function longerThan(x,y) {
    if (x.length > y.length) {
        return true;
    } else {
        return false;
    }
}

let a1 = "Niti"
let a2 = [1,2,3];


const divide= (x,y) => {
    return x/y;

}

const whisper= (x) => {
    return x.toLowerCase();

};

console.log(whisper("NITIN"));
console.log (divide(9,3))

console.log(longerThan(a1,a2));
console.log(multi(4,2));
console.log(yell("nandu"));
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
const sum = add3(1,2,3);

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
    return console.log("Oh hi, " + name + "!");
    
}
sayHello("Marc");

const hm = sayHello("Marc");

const add2 = (x, y) => x + y;

console.log(add2(6,8));

console.log(hm);

console.log(nine);

console.log(sum);
console.log(one);
console.table(list);

console.log("Nitin");