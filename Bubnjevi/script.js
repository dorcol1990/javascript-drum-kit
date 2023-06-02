
let crashRide = document.querySelector('#crash-ride');
let hiHatTop = document.querySelector('#hihat-top');


window.addEventListener('keydown', (event) => {
    let code = event.keyCode;
    let keyElement = document.querySelector(`div[data-key="${code}"]`)
    
    if(!keyElement) return;

    let audio = document.querySelector(`audio[data-key="${code}"]`);
    audio.currentTime = 0;
    audio.play();

    switch (code){
        case 69:
        case 82:
            animateCrashOrRide();
            break;
        case 75:
        case 73:
            animateHiHatClosed();
            break;        
    }
});


function animateCrashOrRide (){
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
}

function animateHiHatClosed (){
    hiHatTop.style.top = '171px';
}


function removeAnimateCrashOrRide (e){
    if(e.propertyName !=='transform') return;
    e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
}

function removeAnimateHiHatClosed (e){
    if (e.propertyName !== 'top') return;
    e.target.style.top = "166px";
} 

crashRide.addEventListener('transitionend', removeAnimateCrashOrRide);
hiHatTop.addEventListener('transitionend', removeAnimateHiHatClosed);