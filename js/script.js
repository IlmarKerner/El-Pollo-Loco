let mutedSound = false;
let audio_background = new Audio('..audio/backgroundmusic.mp3');

function muteSound() {
    mutedSound = true;
    document.getElementById('sound').classList.add('d-none');
    document.getElementById('soundmute').classList.remove('d-none');
    audio_background.pause();
}

function playSound() {
    mutedSound = false;
    document.getElementById('sound').classList.remove('d-none');
    document.getElementById('soundmute').classList.add('d-none');
    if (mutedSound == false) {
        setInterval(() => {
            audio_background.play();
        }, 1);
    } else {
        audio_background.pause();
    }
}

function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    enterFullscreen(fullscreen);
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

function leaveFullscreen() {
    let leaveFullscreen = document.getElementById('leaveFullscreen');
    exitFullscreen(leaveFullscreen);
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitRequestFullscreen) {
        document.webkitRequestFullscreen();
    }
}