// window.addEventListener("keydown",function (e){
//     const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
//     console.log(audio);
//     if(!audio) return; //stopping the function 
//     audio.currentTime = 0;
//     audio.play();
//     key.classList.add('playing');
//     console.log(key);
// });

const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend',removeTransition));

// console.log(key1);

// function removeTransition(){};
// console.log(keys);

const array1 = ['a', 'b', 'c'];

keys.forEach((key) => console.group(key));