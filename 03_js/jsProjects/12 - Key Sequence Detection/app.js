window.addEventListener('keyup',check_update);

const pressed = [];
const sCode = "nandini"

function check_update(e){
    console.log(e.key);
    pressed.push(e.key);
    console.log(pressed);
    pressed.slice(-sCode.length - 1,
        pressed.length - sCode.length);
    if(pressed.join("").includes(sCode)){
        console.log("Ding Ding!!");
        cornify_add();
    }
    console.log(pressed);
}