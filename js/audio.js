let audio_shot = new Audio('../audio/shot.mp3');
let audio_hit_bottle = new Audio('../audio/splashBottle.mp3');
let audio_coin = new Audio('../audio/coin.mp3');
let audio_throw_bottle = new Audio('../audio/flyingBottles.mp3');
let audio_chicken2 = new Audio('../audio/chicken2.mp3');
let walking_sound = new Audio('../audio/walk.mp3');
let audio_hurt = new Audio('../audio/hurt.mp3');
let jumping_sound = new Audio('../audio/jump.mp3');
let audio_background = new Audio('../audio/backgroundmusic.mp3');
let audio_bossAttack = new Audio('../audio/bossattack.mp3');
let audio_bottle = new Audio('../audio/bottle.mp3');
let audio_chicken = new Audio('../audio/chicken.mp3');
let audio_win = new Audio('../audio/win.mp3');
let audio_lose = new Audio('../audio/lose.mp3');
let audio_background_startscreen = new Audio('../startBackgroundMusic.mp3');

function playShotSound() {
    audio_shot.play();
}

function playHitBottleSound() {
    audio_hit_bottle.play();
}

function playCoinSound() {
    audio_coin.play();
}

function playThrowBottleSound() {
    audio_throw_bottle.play();
}

function playChicken2Sound() {
    audio_chicken2.play();
}

function playWalkingSound() {
    walking_sound.play();
}

function playHurtSound() {
    audio_hurt.play();
}

function playJumpingSound() {
    jumping_sound.play();
}

function playBackgroundSound() {
    audio_background.play();
}

function playBossAttackSound() {
    audio_bossAttack.play();
}

function playBottleSound() {
    audio_bottle.play();
}

function playChickenSound() {
    audio_chicken.play();
}


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