window.addEventListener("keydown",function (e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(!audio) return;

    key.classList.add(`playing`);
    audio.currentTime = 0;
    audio.play();
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    console.log(this);
    this.classList.remove('playing');
};


