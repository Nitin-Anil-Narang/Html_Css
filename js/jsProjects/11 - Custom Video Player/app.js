const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progess = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const play = document.querySelector('.toggle');
const ranges = document.querySelectorAll('.player__slider');
const skipButton = document.querySelectorAll('[data-skip]')


//Funtions 
function toggleVideo(e){
    if(video.paused){
        video.play();
    }else {
        video.pause();
    }
}


function updateButton(){
const icons = this.paused ? '►' : '❚ ❚';
play.textContent = icons;
// console.log(this.value);
};

function skips(e){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}


function updateInput(e) {
    video[this.name] = this.value
    console.log(this.name ,this.value);
}

function updateProgress(e){
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
} 
function scrub (e){
    const scrub = (e.offsetX /progess.offsetWidth) * video.duration;
    video.currentTime = scrub
}
//EventListeners
video.addEventListener('click',toggleVideo);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',updateProgress);

play.addEventListener('click',toggleVideo);
skipButton.forEach(skipping => skipping.addEventListener('click',skips));
ranges.forEach(range => range.addEventListener('click',updateInput));   

// let mousedown = false;
progess.addEventListener('click',scrub);
// progess.addEventListener('mousemove',(e) => mousedown && scrub(e));
// progess.addEventListener('mousedown', () => true);
// progess.addEventListener('mouseup',() => false);
