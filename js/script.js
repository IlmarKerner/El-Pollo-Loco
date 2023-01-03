let mutedSound = false;
let chickenSound = new Audio('../audio/chicken.mp3');

function muteSound() {
    mutedSound = true;
    document.getElementById('sound').classList.add('d-none');
    document.getElementById('soundmute').classList.remove('d-none');
    chickenSound.pause();
}

function playSound() {
    mutedSound = false;
    document.getElementById('sound').classList.remove('d-none');
    document.getElementById('soundmute').classList.add('d-none');
    if (mutedSound == false) {
        setInterval(() => {
            chickenSound.play();
        }, 1);
    } else {
        chickenSound.pause();
    }


}