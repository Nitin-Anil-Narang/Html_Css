function declareBankruptcy() {
    let bankruptcy = true;
}

let planet = "Jupiter";
function scopeOut() {
    let planet = "Mars";
    console.log("Inner planet:", planet);
}
scopeOut();
console.log("Outer planet:", planet);

let globalVariable = "I live in global scope"; 
function narrowerScope() {
    console.log(globalVariable);
    let localVariable = "I live in the function scope";
}
narrowerScope();



let feeling = "free";
function trap() {
    feeling = "boxedIn";
}
trap();
console.log(feeling);

