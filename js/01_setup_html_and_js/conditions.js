const you = {wannaBeMyLover: true,reallyBugMe: false,happy: true ,knowIt:false,clapHands: () => {console.log("46 clap")}}
if (you.wannaBeMyLover) {
    you.gottaGetWithMyFriends = true;
    
}
console.table(you);

if (you.reallyBugMe) {
    console.log("Goodbye");
} else {
    console.log("Hello");
}

if (!5 < 4) {
    console.log("greater than");
} else {
    console.log("less than");
}

function compare(x, y,z,a) {
    if (x > y && z < a) {
        console.log(x, "is greater than", y );
        console.log(a,"is greater than",z);
    } else if (x < y) {
        console.log(x, "is less than", y);
    } else {
        console.log(x, "is equal to", y);
    };
};

let forecast = "sunnys"

if (forecast === "rain") {
    console.log("bring an umbrella");
}
if ("nonempty strings are truthy") {
    console.log("this line will run");
}
if (0) {
    console.log("zero is truthy");
} else {
    console.log("zero is falsy");
}

if (you.happy && you.knowIt) {
    you.clapHands();
}

let mood = forecast === "sunny" ? "happy" : "sad";
console.log(mood)

console.log(compare(5,4,1,2))