let mutedSound = false;

function muteSound() {
    mutedSound = true;
    document.getElementById('sound').classList.add('d-none');
    document.getElementById('soundmute').classList.remove('d-none');
    audio_background.pause();

    // Mute all other audio
    audio_shot.muted = true;
    audio_hit_bottle.muted = true;
    audio_coin.muted = true;
    audio_throw_bottle.muted = true;
    audio_chicken2.muted = true;
    walking_sound.muted = true;
    audio_hurt.muted = true;
    jumping_sound.muted = true;
    audio_bossAttack.muted = true;
    audio_bottle.muted = true;
    audio_chicken.muted = true;
}

function playSound() {
    mutedSound = false;
    document.getElementById('sound').classList.remove('d-none');
    document.getElementById('soundmute').classList.add('d-none');
    audio_background.play();

    // Unmute all other audio
    audio_shot.muted = false;
    audio_hit_bottle.muted = false;
    audio_coin.muted = false;
    audio_throw_bottle.muted = false;
    audio_chicken2.muted = false;
    walking_sound.muted = false;
    audio_hurt.muted = false;
    jumping_sound.muted = false;
    audio_bossAttack.muted = false;
    audio_bottle.muted = false;
    audio_chicken.muted = false;
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