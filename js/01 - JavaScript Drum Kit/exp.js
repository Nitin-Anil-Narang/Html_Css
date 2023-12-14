window.addEventListener('keydown',function (e){
    let five  = e.keyCode.toString();
    let see = "audio[data-key="+five+"]"
    const audio = document.querySelector("audio[data-key="+'"'+five+'"'+"]");
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(!audio) return;
    // console.log(see);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
    

    // setTimeout(function() {
    //     key.classList.remove('playing')
    // },70)
})

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    console.log(this);
    this.classList.remove('playing');
}


