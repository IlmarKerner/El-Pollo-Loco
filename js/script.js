let mutedSound = false;
let chickenSound = new Audio('../audio/chicken.mp3');

function playChickensound() {
    if (mutedSound) {
        setInterval(() => {
            chickenSound.play();
        }, 1);
    } else {
        chickenSound.pause();
    }
}

function muteSound() {
    mutedSound = true;
    document.getElementById('sound').classList.add('d-none');
    document.getElementById('soundmute').classList.remove('d-none');
}

function playSound() {
    mutedSound = false;
    document.getElementById('sound').classList.remove('d-none');
    document.getElementById('soundmute').classList.add('d-none');
}